# Changelog

## Unreleased

### Fixed

- Report buttonless mouse motion as hover and recover presses or releases outside the terminal.
- Limit OSC 8 hover underlines to the detected link range instead of shared parser markers.
- Rasterize GPU glyph atlases at or above display resolution and preserve wide-glyph UVs when DPR or font metrics change.
- Swap resolved theme/default and explicit colors correctly for inverse video across Canvas2D, WebGL2, and WebGPU.
- Honor Ghostty-resolved Kitty image layers, source crops, pixel offsets, and
  scrollback placement across Canvas2D, WebGL, and WebGPU.
- Keep WebGL text-only frames in a single opaque pass even when the image API
  returns an empty frame, and cache the text-pass shader uniform location.

- Include descenders, primary font line bounds, and emoji fallback ink in cell
  height and baseline measurements, while keeping column width based on the
  monospace advance. Measuring only the ink in M clipped the top of joined
  emoji in WebGPU and WebGL atlas slots and let Canvas2D paint into the row
  above. Rows may become taller with fonts that need the additional space.

- Draw color emoji in their own colors with the WebGPU and WebGL renderers.
  Both treated every glyph as a coverage mask in the foreground color, so
  emoji came out as silhouettes in the text color. The atlas now marks glyphs
  rasterized in color and stores them premultiplied; the shaders composite
  those over the background, honoring faint. Canvas2D already drew them.

- Report wheel events as SGR mouse buttons 64/65 when the application has
  mouse tracking on, instead of arrow keys, so vim with `set mouse=a` and
  TUIs with mouse reporting scroll their own content. Arrow keys remain the
  fallback on the alternate screen without tracking (coder/ghostty-web#145).

- Forward Ctrl+V and Cmd+V to the application as 0x16 before the browser's
  paste event, so a program that reads the clipboard itself, for an image
  paste, sees the key; text paste is unchanged (coder/ghostty-web#145).

- Follow DECSCUSR cursor shape changes from the application at runtime. The
  configured `cursorStyle` stays until the program asks for a bar, block or
  underline (coder/ghostty-web#145).

- Repaint Canvas2D image revisions even when terminal cells are unchanged.
  Read each viewport and image once per frame, and avoid repeated canvas
  clears at fractional display scaling.

- Keep valid image placeholders out of the font fallback while their image
  placement is unavailable, preventing grids of missing-glyph boxes.

- Honor synchronized output (DEC mode 2026) across split writes and input
  echoes, so partial screen updates are never painted. A one-second timeout
  releases an interrupted hold; disposal cancels the timer.

- Redraw retransmitted Kitty images when WASM reuses a pixel allocation.
  Graphics revisions invalidate Canvas2D, WebGL and WebGPU caches; ordinary
  text writes retain cached images. Same-size atlas updates reuse their slot.

### Added

- Render Unicode sextants and matching half/full blocks as cell-aligned geometry, including fractional device-pixel ratios.
- Open OSC 8 and plain-text links with a single-finger touch tap, while preserving Ctrl/Cmd-click for mouse input.
- Play Kitty image animations using Ghostty animation deadlines, respecting
  synchronized output and cancelling scheduled work when the terminal is disposed.
- Export `ImageFrame` and `RenderImage`, with `GhosttyTerminal.getImageFrame()`
  and `tickImageAnimations()` for resolved image snapshots and animation updates.
- Add a browser compositing and animation check in `demo/kitty-renderer-check.html`
  and a paired renderer benchmark harness in `bench/renderers.ts`, including
  isolated workload profiling and saved Safari measurements.

- `installRendererHud(terminal, opts?)` and `parseRendererFromURL()` — lift
  the demo's renderer-info HUD (active backend + live FPS, click-to-cycle,
  `Alt+Shift+R` cycling) into the public API. The default cycle covers all
  three concrete backends (`webgpu` → `webgl` → `canvas2d`); pass `cycle` to
  customize.

### Changed

- Update the Ghostty submodule to v1.4.0 and the build toolchain to Zig 0.17.0.
- Use per-image generations to refresh only changed Kitty image data, reuse
  same-size GPU textures, coalesce compatible image strips, and evict offscreen
  images with 64 MiB cache budgets. Resolved placements remove the legacy GPU
  path's 256-image limit; custom render buffers retain the legacy fallback.
- Replace JavaScript APC revision scanning with Ghostty render-state image data.

- The HUD's badge id changed from `booba-renderer-hud` to
  `ghostty-renderer-hud`. Consumers that targeted the old id by selector
  must update. (booba's HUD did not expose this id externally.)
- `demo/index.html` migrated to the new public API; the inline
  `installFpsOverlay` helper and inline keydown handler were removed.
- The new `Alt+Shift+R` hotkey binds on `e.code === 'KeyR'` rather than
  `e.key === 'R'`, fixing a silent failure on macOS where `Option` transforms
  `R` into a dead-key character before keydown fires.

## [0.4.0](https://github.com/coder/ghostty-web/compare/v0.3.0...v0.4.0) (2025-12-09)

### Features

- Added DSR response handling for better nushell compatibility.
- Added dynamic font resizing support.
- Added IME input support for languages such as Chinese and Japanese.
- Migrated rendering internals to RenderState.
- Unified the demo HTTP/WebSocket server for reverse proxy compatibility.

### Bug Fixes

- Corrected application cursor mode (DECCKM) handling for arrow keys.
- Fixed Unicode grapheme cluster rendering for complex scripts.
- Fixed selection overflow during auto-scroll and integrated selection highlighting into cell rendering.
- Added `contenteditable` to prevent browser extension conflicts.
- Enabled linefeed mode so newline moves the cursor back to column 0.

### Other Changes

- Added iOS support.
- Enabled alpha transparency in the canvas context.
- Simplified the publishing flow for new tags.
- Updated README badges, demo links, and project description.

## [0.3.0](https://github.com/coder/ghostty-web/compare/v0.2.1...v0.3.0) (2025-11-26)

### Features

- Added a one-line `npx @ghostty-web/demo@next` path for trying the library.
- Created and published the `@ghostty-web/demo` package.
- Implemented broader xterm.js-compatible API coverage.
- Simplified initialization with a module-level `init()` API.

### Bug Fixes

- Fixed demo package path resolution for installed and development builds.
- Improved demo terminal resizing to fit its container.
- Fixed multiple text highlighting and selection bugs.
- Persisted VT stream parser state across writes.
- Pinned the demo package to exact `ghostty-web` versions to avoid `npx` cache issues.
- Fixed terminal options not being passed to WASM.

### Documentation

- Updated README usage instructions and demo media.

## [0.2.1](https://github.com/coder/ghostty-web/compare/v0.2.0...v0.2.1) (2025-11-19)

### Other Changes

- Switched the package license to MIT.

## [0.2.0](https://github.com/coder/ghostty-web/compare/v0.1.1...v0.2.0) (2025-11-19)

### Features

- Improved xterm.js parity.
- Switched to Ghostty-native scrollback, alternate screen, and line wrapping support.
- Added scrolling support for the alternate screen.
- Implemented the buffer access API.
- Added hyperlink parsing, hyperlink rendering, and hover/clickable URL support.
- Added a right-click context menu.
- Added terminal modes API support.
- Improved scrollbar UX with auto-hide and interactive controls.
- Added smooth scrolling.

### Bug Fixes

- Fixed WASM build and Zig setup issues.
- Fixed duplicate paste behavior from the right-click context menu.
- Fixed copying text from scrollback and selected text ranges.
- Cleared text selection when clicking outside the canvas.
- Fixed npm publishing setup for main-branch and prepublish builds.

### Other Changes

- Redesigned the demo page and refreshed README documentation.

## [0.1.1](https://github.com/coder/ghostty-web/compare/v0.1.0...v0.1.1) (2025-11-13)

### Other Changes

- Bumped the package version to 0.1.1.

## [0.1.0](https://github.com/coder/ghostty-web/releases/tag/v0.1.0) (2025-11-13)

### Features

- Built the first Ghostty-backed WASM terminal prototype.
- Integrated Ghostty's VT parser and screen buffer with a Canvas renderer.
- Added keyboard input handling, terminal integration, FitAddon support, demos, and documentation.
- Added terminal text selection and paste support.
- Added optional WASM path auto-detection.
- Built WASM from the `ghostty-org/ghostty` submodule with repository patches.
- Added CI and npm trusted-publishing workflow setup.
