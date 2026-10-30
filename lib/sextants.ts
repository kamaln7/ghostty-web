/**
 * Sextants (U+1FB00..U+1FB3B) and the half/full blocks that complete the set.
 *
 * Fonts rarely ship these glyphs, and those that do draw them with gaps or
 * overlaps at fractional device-pixel ratios. They are drawn as geometry
 * instead, following Ghostty's own sprite rasterizer.
 */

/**
 * Sextant bit mask (bit = row * 2 + column, row 0 on top), or -1 if the
 * grapheme is not a sextant. U+1FB00..U+1FB3B enumerate the 60 patterns that are
 * not empty or a half/full block; those four are separate characters (space,
 * left half, right half, full block).
 */
export function sextantMask(grapheme: string): number {
  if (grapheme.length === 2) {
    const index = grapheme.codePointAt(0)! - 0x1fb00;
    return index >= 0 && index <= 0x3b ? index + Math.floor(index / 20) + 1 : -1;
  }
  if (grapheme.length !== 1) return -1;
  switch (grapheme) {
    case ' ':
      return 0;
    case '\u258c':
      return 0b010101;
    case '\u2590':
      return 0b101010;
    case '\u2588':
      return 0b111111;
    default:
      return -1;
  }
}

/**
 * Fill the sextants set in `mask` for the cell at CSS-pixel (x, y, width, height),
 * for a context scaled by `scale` device pixels per CSS pixel.
 *
 * Like Ghostty's Fraction.min/max, each edge rounds to a device pixel
 * independently, so neighbours overlap rather than leave a seam on an odd pixel
 * count. All thirds are one path and one fill, so overlaps do not double-apply
 * a translucent fill (faint text).
 */
export function drawSextants(
  ctx: CanvasRenderingContext2D,
  mask: number,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number
): void {
  if (mask === 0) return;
  const originX = Math.round(x * scale);
  const originY = Math.round(y * scale);
  const w = Math.round((x + width) * scale) - originX;
  const h = Math.round((y + height) * scale) - originY;

  ctx.beginPath();
  for (let row = 0; row < 3; row++) {
    const top = h - Math.round(((3 - row) * h) / 3);
    const bottom = Math.round(((row + 1) * h) / 3);
    for (let col = 0; col < 2; col++) {
      if (!(mask & (1 << (row * 2 + col)))) continue;
      const left = w - Math.round(((2 - col) * w) / 2);
      const right = Math.round(((col + 1) * w) / 2);
      ctx.rect(
        (originX + left) / scale,
        (originY + top) / scale,
        (right - left) / scale,
        (bottom - top) / scale
      );
    }
  }
  ctx.fill();
}
