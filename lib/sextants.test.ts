/**
 * Sextant rendering, exercised through the real CanvasRenderer.
 *
 * Happy DOM has no canvas rasterizer, so the renderer is given a small 2D
 * context that rasterizes filled rectangles into a device-pixel grid. What is
 * asserted is the resulting pixel coverage, not which canvas calls were made.
 */

import { describe, expect, spyOn, test } from 'bun:test';
import { CanvasRenderer, type IRenderable } from './renderer';
import { CellFlags, type GhosttyCell } from './types';

const FG = 'rgb(200, 100, 50)';

interface Surface {
  /** How many times each device pixel was painted with the foreground colour. */
  paints: Uint8Array;
  width: number;
  height: number;
  /** globalAlpha in effect for every foreground fill. */
  fillAlphas: number[];
  fillTextCalls: string[];
}

function makeSurface(width: number, height: number) {
  const surface: Surface = {
    paints: new Uint8Array(width * height),
    width,
    height,
    fillAlphas: [],
    fillTextCalls: [],
  };
  let scale = 1;
  let path: [number, number, number, number][] = [];

  // Fill a user-space rectangle: a device pixel is covered if its centre is inside.
  const covered = (rects: [number, number, number, number][]) => {
    const pixels = new Set<number>();
    for (const [x, y, w, h] of rects) {
      for (let py = 0; py < height; py++) {
        for (let px = 0; px < width; px++) {
          const cx = px + 0.5;
          const cy = py + 0.5;
          if (cx >= x * scale && cx < (x + w) * scale && cy >= y * scale && cy < (y + h) * scale) {
            pixels.add(py * width + px);
          }
        }
      }
    }
    return pixels;
  };

  const ctx = {
    fillStyle: '#000000',
    strokeStyle: '#000000',
    font: '',
    textAlign: 'left',
    textBaseline: 'alphabetic',
    globalAlpha: 1,
    lineWidth: 1,
    scale: (s: number) => {
      scale = s;
    },
    clearRect: () => {},
    fillRect(x: number, y: number, w: number, h: number) {
      if (this.fillStyle !== FG) return;
      surface.fillAlphas.push(this.globalAlpha);
      for (const pixel of covered([[x, y, w, h]])) surface.paints[pixel]++;
    },
    beginPath: () => {
      path = [];
    },
    rect: (x: number, y: number, w: number, h: number) => {
      path.push([x, y, w, h]);
    },
    fill() {
      if (this.fillStyle !== FG) return;
      surface.fillAlphas.push(this.globalAlpha);
      for (const pixel of covered(path)) surface.paints[pixel]++;
    },
    fillText: (text: string) => {
      surface.fillTextCalls.push(text);
    },
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    save: () => {},
    restore: () => {},
    clip: () => {},
  };
  // Fixture: only the context methods CellRenderer uses for these cells are implemented.
  return { surface, ctx: ctx as unknown as CanvasRenderingContext2D };
}

function makeCell(codepoint: number, extra: Partial<GhosttyCell> = {}): GhosttyCell {
  return {
    codepoint,
    fg_r: 200,
    fg_g: 100,
    fg_b: 50,
    bg_r: 0,
    bg_g: 0,
    bg_b: 0,
    flags: 0,
    width: 1,
    hyperlink_id: 0,
    grapheme_len: 0,
    ...extra,
  };
}

/** Render one row of cells at a given cell size (CSS px) and DPR; return what was painted. */
function renderRow(
  cells: GhosttyCell[],
  cellWidth: number,
  cellHeight: number,
  devicePixelRatio: number,
  graphemes: Record<number, string> = {}
): Surface {
  const { surface, ctx } = makeSurface(
    Math.ceil(cells.length * cellWidth * devicePixelRatio) + 2,
    Math.ceil(cellHeight * devicePixelRatio) + 2
  );
  const canvas = document.createElement('canvas');
  spyOn(canvas, 'getContext').mockReturnValue(ctx);

  // The renderer sizes its cells from the font measurement; make it measure the cell we want.
  const measureCanvas = {
    getContext: () => ({
      font: '',
      measureText: () => ({
        width: cellWidth,
        actualBoundingBoxAscent: cellHeight - 3,
        actualBoundingBoxDescent: 1,
      }),
    }),
  };
  const createElement = spyOn(document, 'createElement');
  // Fixture: measureFont only reads getContext('2d').measureText from this canvas.
  createElement.mockReturnValueOnce(measureCanvas as unknown as HTMLCanvasElement);
  const renderer = new CanvasRenderer(canvas, { devicePixelRatio });
  createElement.mockRestore();

  const buffer: IRenderable = {
    getLine: () => cells,
    getCursor: () => ({ x: 0, y: 0, visible: false }),
    getDimensions: () => ({ cols: cells.length, rows: 1 }),
    isRowDirty: () => true,
    clearDirty: () => {},
    getGraphemeString: (_row, col) => graphemes[col] ?? String.fromCodePoint(cells[col].codepoint),
  };
  renderer.render(buffer, true);
  return surface;
}

// Ghostty's Fraction.min/max deliberately overlap on odd pixel boundaries.
// https://github.com/ghostty-org/ghostty/blob/v1.3.1/src/font/sprite/draw/common.zig
function expectedSextants(mask: number, width: number, height: number): Uint8Array {
  const pixels = new Uint8Array(width * height);
  const left = [0, width - Math.round(width / 2)];
  const right = [Math.round(width / 2), width];
  const top = [0, height - Math.round((2 * height) / 3), height - Math.round(height / 3)];
  const bottom = [Math.round(height / 3), Math.round((2 * height) / 3), height];
  for (let bit = 0; bit < 6; bit++) {
    if (!(mask & (1 << bit))) continue;
    const col = bit % 2;
    const row = Math.floor(bit / 2);
    for (let y = top[row]; y < bottom[row]; y++) {
      for (let x = left[col]; x < right[col]; x++) pixels[y * width + x] = 1;
    }
  }
  return pixels;
}

/**
 * Unicode skips the patterns that are blocks: 0 (space), 21 (left half), 42 (right half), 63 (full).
 * Returns the character for a mask: those blocks, or the sextant U+1FB00..U+1FB3B.
 */
function glyphForMask(mask: number): string {
  const blocks: Record<number, string> = { 0: ' ', 21: '\u258c', 42: '\u2590', 63: '\u2588' };
  return (
    blocks[mask] ??
    String.fromCodePoint(0x1fb00 + mask - 1 - (mask > 21 ? 1 : 0) - (mask > 42 ? 1 : 0))
  );
}

/** The first `width` x `height` device pixels of a surface, as 0/1 coverage (paints beyond that count). */
function coverage(surface: Surface, width: number, height: number): Uint8Array {
  const pixels = new Uint8Array(width * height);
  for (let y = 0; y < surface.height; y++) {
    for (let x = 0; x < surface.width; x++) {
      const paints = surface.paints[y * surface.width + x];
      if (x >= width || y >= height) {
        expect(paints, `pixel ${x},${y} outside the cell`).toBe(0);
      } else {
        pixels[y * width + x] = paints;
      }
    }
  }
  return pixels;
}

describe('sextants', () => {
  test('all 64 patterns have Ghostty coverage at odd/even cell sizes and DPRs', () => {
    for (const [cellWidth, cellHeight] of [
      [9, 22],
      [9, 21],
      [10, 23],
      [8, 17],
      [5, 4],
    ]) {
      for (const scale of [1, 1.25, 2, 3]) {
        const width = Math.round(cellWidth * scale);
        const height = Math.round(cellHeight * scale);
        for (let mask = 0; mask < 64; mask++) {
          const glyph = glyphForMask(mask);
          const surface = renderRow(
            [makeCell(glyph.codePointAt(0)!)],
            cellWidth,
            cellHeight,
            scale
          );
          expect(
            coverage(surface, width, height),
            `pattern ${mask}, ${cellWidth}x${cellHeight}, DPR ${scale}`
          ).toEqual(expectedSextants(mask, width, height));
          expect(surface.fillTextCalls, `pattern ${mask} must not use the font`).toEqual([]);
        }
      }
    }
  });

  test('coverage matches known pixels in a 9x22 cell', () => {
    // Left column spans x 0-4 and the right one x 4-8, sharing x=4; rows are 0-6, 7-14, 15-21.
    const paintedAt = (mask: number, x: number, y: number) => {
      const surface = renderRow([makeCell(glyphForMask(mask).codePointAt(0)!)], 9, 22, 1);
      return surface.paints[y * surface.width + x];
    };
    expect(paintedAt(1, 4, 6)).toBe(1); // top-left reaches the shared column
    expect(paintedAt(1, 5, 6)).toBe(0);
    expect(paintedAt(1, 4, 7)).toBe(0);
    expect(paintedAt(2, 4, 0)).toBe(1); // top-right reaches the shared column
    expect(paintedAt(2, 3, 0)).toBe(0);
    expect(paintedAt(32, 8, 21)).toBe(1); // bottom-right corner
    expect(paintedAt(32, 8, 14)).toBe(0);
  });

  test('a pattern is one fill, so faint alpha is not applied twice', () => {
    // Both columns of the top row overlap on x=4 (odd width).
    const surface = renderRow(
      [makeCell(glyphForMask(3).codePointAt(0)!, { flags: CellFlags.FAINT })],
      9,
      22,
      1
    );
    expect(surface.fillAlphas).toEqual([0.5]);
    expect(Math.max(...surface.paints)).toBe(1);
  });

  test('a row of full blocks tiles at a fractional DPR without seams or overlap', () => {
    const scale = 1.25;
    const cells = Array.from({ length: 5 }, () => makeCell(0x2588));
    const surface = renderRow(cells, 9, 22, scale);
    const width = Math.round(45 * scale);
    const height = Math.round(22 * scale);
    expect(coverage(surface, width, height)).toEqual(new Uint8Array(width * height).fill(1));
  });

  test('ordinary text, emoji and clusters still use the font', () => {
    const clusterWithMark = `${glyphForMask(1)}\u0301`;
    const cells = [
      makeCell(0x41),
      makeCell(0x1f600),
      makeCell(0x1faff), // just before the sextant range
      makeCell(0x1fb3c), // just after it
      makeCell(0x1fb00, { grapheme_len: 1 }),
    ];
    const surface = renderRow(cells, 9, 22, 1, { 4: clusterWithMark });
    expect(surface.fillTextCalls).toEqual([
      'A',
      '\u{1F600}',
      '\u{1FAFF}',
      '\u{1FB3C}',
      clusterWithMark,
    ]);
    expect(Math.max(...surface.paints)).toBe(0);
  });
});
