export const daydreamReleasesData = [
  {
    tagName: "v0.1.9",
    name: "v0.1.9",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.9",
    author: "By @leszko",
    publishedDate: "Mar 21, 2026",
    body: "This release adds audio output support for pipelines and fixes a VACE regression introduced in 0.1.8.  ## Highlights  * **Audio Out Support** — Pipelines can now return audio alongside video, streamed over WebRTC with a mute/unmute toggle in the frontend by @BuffMcBigHuge, @ryanontheinside, and @leszko in [#534](https://github.com/daydreamlive/scope/pull/534), [#718](https://github.com/daydreamlive/scope/pull/718), and [#719](https://github.com/daydreamlive/scope/pull/719) * **Fix VACE Regression** — Fixed tempo sync modulation interfering with VACE noise scale, a regression introduced in 0.1.8 by @BuffMcBigHuge in [#716](https://github.com/daydreamlive/scope/pull/716)  ## What's Changed  * Audio Support for Scope Rework by @BuffMcBigHuge in https://github.com/daydreamlive/scope/p...",
    prerelease: false
  },
  {
    tagName: "preview",
    name: "Preview Build",
    href: "https://github.com/daydreamlive/scope/releases/tag/preview",
    author: "By @leszko",
    publishedDate: "Mar 21, 2026",
    body: "Preview build from main branch (2026-03-20 14:47 UTC).  Commit: f5387e67da21331741407bbbe228696db10bd492  This is an automated preview — not a versioned release. Do not use for production....",
    prerelease: true
  },
  {
    tagName: "v0.1.8",
    name: "v0.1.8",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.8",
    author: "By @leszko",
    publishedDate: "Mar 18, 2026",
    body: "This release adds beat-synced parameter modulation with Ableton Link and MIDI clock support, an MCP server for AI-assisted pipeline control, and DMX Art-Net input.  ## Highlights  * **Tempo Sync & Beat Modulation** — Lock pipelines to Ableton Link or MIDI clock. Quantize parameter changes to beat/bar boundaries, modulate parameters (noise scale, denoising steps, etc.) with waveforms synced to the beat, and automatically cycle prompts on beat or bar boundaries by @BuffMcBigHuge, @ryanontheinside, and @leszko in [#703](https://github.com/daydreamlive/scope/pull/703) * **MCP Server** — AI assistants can now programmatically manage pipelines, control parameters, capture frames, and drive headless sessions via the Model Context Protocol by @ryanontheinside in [#660](https://github.com/dayd...",
    prerelease: false
  },
  {
    tagName: "v0.1.7",
    name: "v0.1.7",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.7",
    author: "By @leszko",
    publishedDate: "Mar 11, 2026",
    body: "This release adds MIDI controller support for real-time parameter control, native Workflow export to daydream.live, WebRTC stability improvements, and performance optimizations.  ## Highlights  * **MIDI Controller Support** - Full WebMIDI integration with device discovery, mappable pipeline and plugin parameters, persistent profiles, and learning mode by @gioelecerati and @jamesdawsonWD in [#537](https://github.com/daydreamlive/scope/pull/537)  ## What's Changed  * feat: MIDI support & MIDI mappable parameters by @gioelecerati and @jamesdawsonWD in <https://github.com/daydreamlive/scope/pull/537> * Add native Workflow export to daydream.live by @thomshutt in https://github.com/daydreamlive/scope/pull/636 * Cache pipeline schemas and plugin list responses by @leszko in https://git...",
    prerelease: false
  },
  {
    tagName: "v0.1.6",
    name: "v0.1.6",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.6",
    author: "By @leszko",
    publishedDate: "Mar 7, 2026",
    body: "This release ships Workflow Export/Import, adds OSC (Open Sound Control) support, Plugins in Cloud, Logs section, and numerous bug fixes.  ## Highlights  * **Shareable Workflows** - Export and import full pipeline configurations including LoRA manifests, timeline data, and dependency resolution by @ryanontheinside and @leszko in [#555](https://github.com/daydreamlive/scope/pull/555) * **OSC Support** - Control pipeline parameters via Open Sound Control by @thomshutt in [#594](https://github.com/daydreamlive/scope/pull/594)  ## What's Changed  * On demand cloud plugins by @mjh1 in https://github.com/daydreamlive/scope/pull/541 * Add cloud server log forwarding via WebSocket by @emranemran in https://github.com/daydreamlive/scope/pull/548 * Enable workflow Import/Export for remote...",
    prerelease: false
  }
];
