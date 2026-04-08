export const daydreamReleasesData = [
  {
    tagName: "preview",
    name: "Preview Build",
    href: "https://github.com/daydreamlive/scope/releases/tag/preview",
    author: "By @leszko",
    publishedDate: "Apr 7, 2026",
    body: "Preview build from \`main\` branch (2026-04-07 10:54 UTC).  Commit: af49de0288af0c0f3d4614c42b7983dab42b9d87  This is an automated preview - not a versioned release. Do not use for production....",
    prerelease: true
  },
  {
    tagName: "v0.2.1",
    name: "v0.2.1",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.2.1",
    author: "By @leszko",
    publishedDate: "Apr 3, 2026",
    body: "This release upgrades the default starter workflow to LTX 2.3, adds new Workflow Builder features including a scheduler node and improved canvas UX.  ## Highlights  * **LTX 2.3 Default Workflow** - The starter workflow now uses LTX 2.3 text-to-video (replacing Paint Blobs), so new users can generate video without a camera input * **Scheduler Node** - A new browser-side scheduler node that fires named trigger outputs at configurable time points, with orange trigger connectors and edge flashing on fire * **Canvas UX Improvements** - A floating [+] button and an empty-state placeholder make it easier to add nodes when starting from scratch in the Workflow Builder  ## What's Changed  * Replace Paint Blobs with LTX 2.3 and enrich onboarding_completed event by @hthillman in [#816](http...",
    prerelease: false
  },
  {
    tagName: "v0.2.0",
    name: "v0.2.0",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.2.0",
    author: "By @leszko",
    publishedDate: "Mar 31, 2026",
    body: "This release introduces the Workflow Builder, a new graph-oriented UI for building and customizing video pipelines, along with a guided onboarding experience for new users.  ## Highlights  * **Workflow Builder** - A new graph-based visual editor for building and customizing pipelines, now the default mode. Connect and configure nodes for models, processors, audio, and tempo with a redesigned toolbar and sample video previews * **Onboarding Experience** - A guided flow for new users covering account setup, model downloading, and pipeline configuration   ## What's Changed  * Workflow Builder: graph-based frontend, toolbar redesign, audio/tempo nodes, prompt blending, sample videos, play/pause UX, and bug fixes by @gioelecerati and @leszko in [#702](https://github.com/daydreamlive/sc...",
    prerelease: false
  },
  {
    tagName: "v0.1.9",
    name: "v0.1.9",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.9",
    author: "By @leszko",
    publishedDate: "Mar 21, 2026",
    body: "This release adds audio output support for pipelines and fixes a VACE regression introduced in 0.1.8.  ## Highlights  * **Audio Out Support** - Pipelines can now return audio alongside video, streamed over WebRTC with a mute/unmute toggle in the frontend by @BuffMcBigHuge, @ryanontheinside, and @leszko in [#534](https://github.com/daydreamlive/scope/pull/534), [#718](https://github.com/daydreamlive/scope/pull/718), and [#719](https://github.com/daydreamlive/scope/pull/719) * **Fix VACE Regression** - Fixed tempo sync modulation interfering with VACE noise scale, a regression introduced in 0.1.8 by @BuffMcBigHuge in [#716](https://github.com/daydreamlive/scope/pull/716)  ## What's Changed  * Audio Support for Scope Rework by @BuffMcBigHuge in https://github.com/daydreamlive/scope/p...",
    prerelease: false
  },
  {
    tagName: "v0.1.8",
    name: "v0.1.8",
    href: "https://github.com/daydreamlive/scope/releases/tag/v0.1.8",
    author: "By @leszko",
    publishedDate: "Mar 18, 2026",
    body: "This release adds beat-synced parameter modulation with Ableton Link and MIDI clock support, an MCP server for AI-assisted pipeline control, and DMX Art-Net input.  ## Highlights  * **Tempo Sync & Beat Modulation** - Lock pipelines to Ableton Link or MIDI clock. Quantize parameter changes to beat/bar boundaries, modulate parameters (noise scale, denoising steps, etc.) with waveforms synced to the beat, and automatically cycle prompts on beat or bar boundaries by @BuffMcBigHuge, @ryanontheinside, and @leszko in [#703](https://github.com/daydreamlive/scope/pull/703) * **MCP Server** - AI assistants can now programmatically manage pipelines, control parameters, capture frames, and drive headless sessions via the Model Context Protocol by @ryanontheinside in [#660](https://github.com/dayd...",
    prerelease: false
  }
];
