export const embodyReleasesData = [
  {
    tagName: "v2026.3.1-alpha.1",
    name: "embody 2026.3.1-alpha.1",
    href: "https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v2026.3.1-alpha.1",
    author: "By @its-DeFine",
    publishedDate: "Mar 2, 2026",
    body: "Alpha release in date-based format. Includes merged updates through PR #236 (security hardening: remove hardcoded payments defaults, add allowlist diagnostics) plus prior mainline changes....",
    prerelease: false
  },
  {
    tagName: "v2026.2.28-alpha.1",
    name: "embody 2026.2.28-alpha.1",
    href: "https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v2026.2.28-alpha.1",
    author: "By @its-DeFine",
    publishedDate: "Mar 1, 2026",
    body: "Includes PR #223 changes (merge commit 29394d659c7b87f2e7497a8abbae8d7314cb1759)....",
    prerelease: true
  },
  {
    tagName: "v1.3.6",
    name: "v1.3.6",
    href: "https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.6",
    author: "By @its-DeFine",
    publishedDate: "Feb 9, 2026",
    body: "## v1.3.6 (2026-02-09)  ### Highlights - PixelStreaming2 stability: force H.264 + LowLatency + periodic keyframes across UE5 builds (including \`config=Game\` PluginSettings). - Layout B hardening: optional bearer-token auth for script runner, managed by edge-rotator control-plane config (in addition to IP allowlists). - Orchestrator health: add cached GPU stats endpoint.  ### Included PRs - #193 fix(compose): enable cluster control by default - #202 Fix: mount Engine.ini for PixelStreaming2 codec (H.264) - #204 fix(orchestrator-health): unblock PR CI (allowlist testclient + cluster default) - #205 orchestrator-health: add /meta/gpu/stats (cached) - #206 PixelStreaming2: set keyframe interval + LowLatency defaults - #208 feat(orchestrator): runner bearer-token auth + rotator-managed tokens -...",
    prerelease: false
  },
  {
    tagName: "v1.3.5",
    name: "v1.3.5: Enable cluster control by default",
    href: "https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.5",
    author: "By @its-DeFine",
    publishedDate: "Jan 28, 2026",
    body: "- EXPERIMENTAL_REMOTE_CLUSTER_CONTROL now defaults to true - Removes onboarding friction for multi-avatar cluster mode - Cluster endpoints still protected by IP allowlist  Closes #191...",
    prerelease: false
  },
  {
    tagName: "v1.3.4",
    name: "v1.3.4",
    href: "https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.4",
    author: "By @its-DeFine",
    publishedDate: "Jan 28, 2026",
    body: "- CLI: \`start_vtuber_unreal.sh test\` now checks that Payments is allowlisted (fix: \`./scripts/embody_cli.sh allowlists fix\`) ...",
    prerelease: false
  }
];
