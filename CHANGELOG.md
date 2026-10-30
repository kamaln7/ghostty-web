# Changelog

## [0.5.0-rc.0](https://github.com/kamaln7/ghostty-web/compare/v0.4.0...v0.5.0-rc.0) (2026-10-30)


### Features

* add CI pipeline with fmt, lint, typecheck, test, and build jobs ([#16](https://github.com/kamaln7/ghostty-web/issues/16)) ([3dd6d79](https://github.com/kamaln7/ghostty-web/commit/3dd6d7971b605c65cd5e43ba94c3dfb9fcb58675))
* add DSR response handling for nushell compatibility ([#82](https://github.com/kamaln7/ghostty-web/issues/82)) ([3dd4aef](https://github.com/kamaln7/ghostty-web/commit/3dd4aefe4be57d0b44319f68b2fe7f4264798b9e))
* add hyperlink parsing ([#35](https://github.com/kamaln7/ghostty-web/issues/35)) ([776140f](https://github.com/kamaln7/ghostty-web/commit/776140f3a68afc75c67b0d44136605eb0bfded4c))
* add hyperlink rendering ([#37](https://github.com/kamaln7/ghostty-web/issues/37)) ([125e976](https://github.com/kamaln7/ghostty-web/commit/125e976cf9146bdd9db742b60f9ddd81ba326af5))
* add mouse tracking support for terminal applications ([#106](https://github.com/kamaln7/ghostty-web/issues/106)) ([03ead6e](https://github.com/kamaln7/ghostty-web/commit/03ead6e154b44656a8efc053694d0dedfc3dc476))
* add native ghostty alternate screen and line wrapping ([#29](https://github.com/kamaln7/ghostty-web/issues/29)) ([b1cc03e](https://github.com/kamaln7/ghostty-web/commit/b1cc03e24b9c784ab0af8313d5bbc2860ee9448e))
* add npm publish workflow with trusted publishing ([#24](https://github.com/kamaln7/ghostty-web/issues/24)) ([c9f1505](https://github.com/kamaln7/ghostty-web/commit/c9f150525f454850167fb45a471c8b4f9b0b1235))
* add one liner for trying library ([#53](https://github.com/kamaln7/ghostty-web/issues/53)) ([5e035a2](https://github.com/kamaln7/ghostty-web/commit/5e035a27d0c2f331cfd08f1c0869a30d54cb6e97))
* add paste support to InputHandler ([#15](https://github.com/kamaln7/ghostty-web/issues/15)) ([2322b00](https://github.com/kamaln7/ghostty-web/commit/2322b00508ea6c1a2518019d5caa55af8a19a067))
* add right click menu ([#36](https://github.com/kamaln7/ghostty-web/issues/36)) ([9f5523b](https://github.com/kamaln7/ghostty-web/commit/9f5523bbfe936ba8995cc6fba743b31c0594845a))
* add scrolling support for altscreen ([#30](https://github.com/kamaln7/ghostty-web/issues/30)) ([9816568](https://github.com/kamaln7/ghostty-web/commit/9816568d90e6806ac4a86f0650224638bedba6b3))
* add smooth scrolling ([c941889](https://github.com/kamaln7/ghostty-web/commit/c9418895aac84eda158be2a0e41459fe46e3719d))
* add support for hover+clickable urls ([#42](https://github.com/kamaln7/ghostty-web/issues/42)) ([b84b8d5](https://github.com/kamaln7/ghostty-web/commit/b84b8d59359559d21f460e1f944c659b892e2251))
* add support for hover+clickable urls ([#43](https://github.com/kamaln7/ghostty-web/issues/43)) ([7718d37](https://github.com/kamaln7/ghostty-web/commit/7718d376471310d10d406075a7b212427925e258))
* add terminal modes API ([#39](https://github.com/kamaln7/ghostty-web/issues/39)) ([f3b2bc4](https://github.com/kamaln7/ghostty-web/commit/f3b2bc44ebc2b6c121eb5779619522bb7a30010a))
* build WASM from ghostty-org/ghostty submodule with patches ([#23](https://github.com/kamaln7/ghostty-web/issues/23)) ([4143aeb](https://github.com/kamaln7/ghostty-web/commit/4143aebff35906fa3e5e3e8277e5e84b101f37b4))
* create @ghostty-web/demo package ([#55](https://github.com/kamaln7/ghostty-web/issues/55)) ([f775ecc](https://github.com/kamaln7/ghostty-web/commit/f775ecce34e1e59fe911a25740793f9b4dde86bd))
* enable OSC 8 hyperlink clicking with Cmd/Ctrl modifier ([#117](https://github.com/kamaln7/ghostty-web/issues/117)) ([3525675](https://github.com/kamaln7/ghostty-web/commit/3525675cd4982bb133a31482e593af7266ca2910))
* implement Buffer Access API ([#31](https://github.com/kamaln7/ghostty-web/issues/31)) ([37a6ce8](https://github.com/kamaln7/ghostty-web/commit/37a6ce820a426804db70c524dc181baaf644edc9))
* implement InputHandler for keyboard input (Task 5) ([#8](https://github.com/kamaln7/ghostty-web/issues/8)) ([54384ba](https://github.com/kamaln7/ghostty-web/commit/54384ba2ad1d8f5c83c63ab61d83538daa07b362))
* implement Task 7 FitAddon with resize fixes ([#10](https://github.com/kamaln7/ghostty-web/issues/10)) ([1619b9b](https://github.com/kamaln7/ghostty-web/commit/1619b9bf7199958a921561deeabfbbcb18335ca5))
* implement text selection for terminal  ([#14](https://github.com/kamaln7/ghostty-web/issues/14)) ([2262634](https://github.com/kamaln7/ghostty-web/commit/22626341ac65a5d4570ddfe81212d9d89b7d9cf9))
* improve scrollbar UX with auto-hide and interactive controls ([#40](https://github.com/kamaln7/ghostty-web/issues/40)) ([8d86225](https://github.com/kamaln7/ghostty-web/commit/8d86225451c2e7d22bbf22d2ff8a065d89885529))
* improve xterm parity ([#27](https://github.com/kamaln7/ghostty-web/issues/27)) ([9791146](https://github.com/kamaln7/ghostty-web/commit/97911468bc78dc75aaeb77c7da1eb1f7c19db5cb))
* make wasmPath optional with smart auto-detection ([#19](https://github.com/kamaln7/ghostty-web/issues/19)) ([59cb82f](https://github.com/kamaln7/ghostty-web/commit/59cb82f167689fd4a3f24f2860dc0b9920d98955))
* make wasmPath optional with smart auto-detection ([#21](https://github.com/kamaln7/ghostty-web/issues/21)) ([2da65f2](https://github.com/kamaln7/ghostty-web/commit/2da65f2752926026f2c879498debd80bcf2616a5))
* migrate to use RenderState ([#75](https://github.com/kamaln7/ghostty-web/issues/75)) ([90c1178](https://github.com/kamaln7/ghostty-web/commit/90c1178ca8ddf6263c3e76a5fd02e49a7904ef71))
* **selection:** Add triple-click and selection improvements ([#115](https://github.com/kamaln7/ghostty-web/issues/115)) ([6a1a50d](https://github.com/kamaln7/ghostty-web/commit/6a1a50df5b4f6b34d1b1de10fad3a0fc811bfbc0))
* support dynamic font resizing ([#80](https://github.com/kamaln7/ghostty-web/issues/80)) ([e879eef](https://github.com/kamaln7/ghostty-web/commit/e879eef4b444a7d4bfd1fe4effc4b2c7735bbf73))
* Unify HTTP/WebSocket demo server for reverse proxy compatibility ([#74](https://github.com/kamaln7/ghostty-web/issues/74)) ([b0028ee](https://github.com/kamaln7/ghostty-web/commit/b0028ee60b8e02fac8590b35932a2ff50dc8da42))
* use ghostty native scrollback ([#28](https://github.com/kamaln7/ghostty-web/issues/28)) ([f21d317](https://github.com/kamaln7/ghostty-web/commit/f21d317ebe31b19cce66d41518efdab1041c3280))


### Bug Fixes

* add contenteditable attribute to prevent extension conflicts ([#78](https://github.com/kamaln7/ghostty-web/issues/78)) ([e297e6c](https://github.com/kamaln7/ghostty-web/commit/e297e6c3dbe84375f3218afb56c1d7efc8f8932f))
* allow processing multiple terminal responses from WASM ([#103](https://github.com/kamaln7/ghostty-web/issues/103)) ([c7e37fb](https://github.com/kamaln7/ghostty-web/commit/c7e37fb371884868846437b22e493beeb09661b1))
* bun install ([71d1be9](https://github.com/kamaln7/ghostty-web/commit/71d1be9d549eb9c8ea61399e3f87531d324f1f57))
* bunch of bugs related to text highlighting ([#59](https://github.com/kamaln7/ghostty-web/issues/59)) ([29b4e5b](https://github.com/kamaln7/ghostty-web/commit/29b4e5b367674d24d7870ceba99190e3a50200e9))
* check for bracketed paste in input handler ([#99](https://github.com/kamaln7/ghostty-web/issues/99)) ([65aeac9](https://github.com/kamaln7/ghostty-web/commit/65aeac9fecdf5ff66a2b3ea2209e3034dd9e6229))
* clear canvas before filling to support transparent backgrounds ([#116](https://github.com/kamaln7/ghostty-web/issues/116)) ([77e29d9](https://github.com/kamaln7/ghostty-web/commit/77e29d963dbf458bb701cf72b91ace0886f72c8e))
* clear scrolled row cells in wasm patch ([#180](https://github.com/kamaln7/ghostty-web/issues/180)) ([bec9e16](https://github.com/kamaln7/ghostty-web/commit/bec9e162b137478fb032d7edf60a2f29a6e5f04b))
* clear text selection when clicking outside canvas ([#46](https://github.com/kamaln7/ghostty-web/issues/46)) ([5d9e68c](https://github.com/kamaln7/ghostty-web/commit/5d9e68cd6ad096d09b8bf1e89bb3959eaf0ac24e))
* configure zig ([c15d1e4](https://github.com/kamaln7/ghostty-web/commit/c15d1e44e62762cff3418be3037f142485f4caf9))
* copy/paste selecting wrong text ([#48](https://github.com/kamaln7/ghostty-web/issues/48)) ([3770a9a](https://github.com/kamaln7/ghostty-web/commit/3770a9a664ea8f842e8732897198d3e8f38ba1ac))
* correct selection overflow during auto-scroll ([#86](https://github.com/kamaln7/ghostty-web/issues/86)) ([e27776c](https://github.com/kamaln7/ghostty-web/commit/e27776c21f001ac8aa9e3afa0c61eb14978e6d5c))
* demo package.json referencing a dev build ([#62](https://github.com/kamaln7/ghostty-web/issues/62)) ([5d6bd7b](https://github.com/kamaln7/ghostty-web/commit/5d6bd7b5370c1bb111653930d75bb9510059a7cf))
* **demo:** correct path resolution for ghostty-web package ([#57](https://github.com/kamaln7/ghostty-web/issues/57)) ([d3c37df](https://github.com/kamaln7/ghostty-web/commit/d3c37dfa88738a7341e7a47965dd09798319662d))
* **demo:** improve terminal resizing to fit container ([#58](https://github.com/kamaln7/ghostty-web/issues/58)) ([2c9ea32](https://github.com/kamaln7/ghostty-web/commit/2c9ea322f5db683ff8e3d95a7e47f62baba73b3f))
* **demo:** secure WebSocket PTY access ([#173](https://github.com/kamaln7/ghostty-web/issues/173)) ([0556b95](https://github.com/kamaln7/ghostty-web/commit/0556b954f969ce58b97ecff3a42a38852b176de0))
* export Key, KeyAction, Mods, DirtyState as runtime values ([#130](https://github.com/kamaln7/ghostty-web/issues/130)) ([65ed96f](https://github.com/kamaln7/ghostty-web/commit/65ed96f4421cc8f3ca2b2e2681e3a62d9e2b6851))
* fix bug copying text in scrollback ([17a4957](https://github.com/kamaln7/ghostty-web/commit/17a4957cfe946d617d1e62be48c1b129c55a7901))
* fix demo by adding missing init() call before creating Terminal ([#61](https://github.com/kamaln7/ghostty-web/issues/61)) ([c8e683e](https://github.com/kamaln7/ghostty-web/commit/c8e683e9df8c952ea5d56b8fc60ca101e6fecf65))
* fixed options not being passed to wasm ([105ca28](https://github.com/kamaln7/ghostty-web/commit/105ca2861c8364205ccd0c98c314e150f2ced35d))
* install bun prior to publish ([#33](https://github.com/kamaln7/ghostty-web/issues/33)) ([7b10c59](https://github.com/kamaln7/ghostty-web/commit/7b10c59a6d868b3c71e42cdffdc7d80de7369966))
* integrate selection highlighting into cell rendering ([#87](https://github.com/kamaln7/ghostty-web/issues/87)) ([d9174e8](https://github.com/kamaln7/ghostty-web/commit/d9174e83f94b24ee0c6d7b1e8ee23f182b9046da))
* only build on prepublish ([37a5236](https://github.com/kamaln7/ghostty-web/commit/37a5236dc55bb03f22d7fed1b0d00611971dd314))
* persist VT stream parser state across writes ([#63](https://github.com/kamaln7/ghostty-web/issues/63)) ([7b2dd99](https://github.com/kamaln7/ghostty-web/commit/7b2dd9945d827e9a6668c0284518a73bddbafd4f))
* pin exact ghostty-web version in demo to avoid npx cache issues ([#64](https://github.com/kamaln7/ghostty-web/issues/64)) ([853bc65](https://github.com/kamaln7/ghostty-web/commit/853bc655d978e18eb505ac2bfc8fda0b30641936))
* prevent clipboard overwrite on single click without selection ([#124](https://github.com/kamaln7/ghostty-web/issues/124)) ([fd09412](https://github.com/kamaln7/ghostty-web/commit/fd094122ef00eb34630e6a352eb0a6514234ca74)), closes [#108](https://github.com/kamaln7/ghostty-web/issues/108)
* prevent double paste issue from right-click context menu ([#38](https://github.com/kamaln7/ghostty-web/issues/38)) ([98ed4f1](https://github.com/kamaln7/ghostty-web/commit/98ed4f16ff27383804798d55248233a68327d64d))
* prevent terminal crash on resize during high-output programs ([#132](https://github.com/kamaln7/ghostty-web/issues/132)) ([fc99955](https://github.com/kamaln7/ghostty-web/commit/fc9995500898f94f74bab6b7cfe811da0005eeea))
* render text under block cursor with cursorAccent color ([#131](https://github.com/kamaln7/ghostty-web/issues/131)) ([174a554](https://github.com/kamaln7/ghostty-web/commit/174a5547a4a6f178455f10e7928adb4fd300896f))
* Respond to the device attributes sequences ([#101](https://github.com/kamaln7/ghostty-web/issues/101)) ([#102](https://github.com/kamaln7/ghostty-web/issues/102)) ([2ede417](https://github.com/kamaln7/ghostty-web/commit/2ede417a0233c9a4211a5f7fba04b8dca34a102c))
* send backtab escape sequence on Shift+Tab ([#112](https://github.com/kamaln7/ghostty-web/issues/112)) ([98753e0](https://github.com/kamaln7/ghostty-web/commit/98753e026b45d1533f1ca8c88592f37b65e9d9f4))
* support application cursor mode (DECCKM) for arrow keys ([#81](https://github.com/kamaln7/ghostty-web/issues/81)) ([22f6d09](https://github.com/kamaln7/ghostty-web/commit/22f6d0906e278e01ed02ba9849e8d59bc41c0c5a))
* support unicode grapheme cluster rendering for complex scripts [#85](https://github.com/kamaln7/ghostty-web/issues/85) ([8331f42](https://github.com/kamaln7/ghostty-web/commit/8331f42b3c30ab5838fbb430ee7dc613e7d58e35))
* sync demo styles and remove shell suffix from title ([#68](https://github.com/kamaln7/ghostty-web/issues/68)) ([3d5da17](https://github.com/kamaln7/ghostty-web/commit/3d5da1713639f11ed786bac1ec55137b9147b517))
* use require.resolve to find ghostty-web package ([#56](https://github.com/kamaln7/ghostty-web/issues/56)) ([c447ff4](https://github.com/kamaln7/ghostty-web/commit/c447ff499181134dcdab844ffb678b3f9347a991))


### Documentation

* document ITerminalOptions scrollback default ([#178](https://github.com/kamaln7/ghostty-web/issues/178)) ([b6cf72a](https://github.com/kamaln7/ghostty-web/commit/b6cf72a40bce833b3353bc1de7a9a96cc1d669cd))


### Code Refactoring

* simplify Terminal API with module-level init() ([#60](https://github.com/kamaln7/ghostty-web/issues/60)) ([f9fd565](https://github.com/kamaln7/ghostty-web/commit/f9fd565b6618012d2d6b2a413fdb62b8c3bbff6a))

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
