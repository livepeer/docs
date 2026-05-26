# Task 2 — Cross-repo content sweep

Content located outside `v2/developers/` that may feed net-new pages. Each section shows live files (`v2/{tab}/`) and useful workspace files; archive zones (`v2/_workspace/archive/language-pages/`, deep `_workspace/archive/`) excluded as not source-grade.

## 1. BYOC / bring your own container

**About tab — substantial coverage:**
- `v2/about/concepts/actors-and-capabilities.mdx`
- `v2/about/concepts/composables/network.mdx`, `composables/protocol.mdx`
- `v2/about/concepts/livepeer-stack.mdx`
- `v2/about/concepts/unclassified/livepeer-capabilities.mdx`
- `v2/about/guides/builders-guide.mdx`
- `v2/about/guides/evaluating-livepeer.mdx`
- `v2/about/guides/gateways-vs-orchestrators.mdx`
- `v2/about/guides/livepeer-network.mdx`
- `v2/about/guides/network-tools-and-metrics.mdx`
- `v2/about/network/architecture.mdx`, `network/design2.mdx`, `network/interfaces.mdx`, `network/job-pipelines.mdx`, `network/mechanisms.mdx`, `network/observability.mdx`, `network/participation.mdx`
- `v2/about/network1/architecture.mdx`, `network1/design.mdx`, `network1/job-pipelines.mdx`
- `v2/about/protocol/x-design.mdx`
- `v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx`

**Community tab:**
- `v2/community/contribute/build-livepeer.mdx`
- `v2/community/ecosystem/governance.mdx`
- `v2/community/ecosystem/spes.mdx`

**Gateways tab:**
- `v2/gateways/_workspace/canonical/Frameworks.mdx`
- `v2/gateways/_workspace/canonical/IA.mdx`

**Use for:** `build/compute/byoc/architecture.mdx`, `build/compute/byoc/overview.mdx`, `concepts/repo-map.mdx`. The `v2/about/network*/architecture*.mdx` cluster is the strongest source for technical/architectural framing.

## 2. trickle protocol / trickle ingress

**About tab:**
- `v2/about/concepts/composables/network.mdx`
- `v2/about/network/interfaces.mdx`
- `v2/about/network/job-pipelines.mdx`

**Gateways tab:**
- `v2/gateways/_workspace/canonical/IA.mdx`

**Use for:** `guides/transport/trickle-protocol.mdx`, `guides/transport/trickle-ingress-egress.mdx`. Coverage is THIN — the `diagrams2.mdx` §3.2 entry "trickle protocol — one-line mention in oss-stack.mdx. No concept page." is confirmed. The trickle-protocol page will be largely net-new.

## 3. ComfyStream / StreamDiffusion

**About tab:**
- `v2/about/concepts/livepeer-stack.mdx`
- `v2/about/network/architecture.mdx`, `network/job-pipelines.mdx`

**Community tab:**
- `v2/community/ecosystem/spes.mdx` (SPE funding context)

**Use for:** Concept framing only. The substantive ComfyStream content already lives in `v2/developers/build1/comfystream.mdx` (12.5KB) + `v2/developers/get-started/comfystream-quickstart.mdx` (10.8KB). Cross-repo finds add context, not new source.

## 4. pytrickle / PyTrickle / FrameProcessor

No useful hits outside `v2/developers/`. The substantive source is `v2/developers/resources/reference/pytrickle.mdx` (8.5KB) plus the upstream `livepeer/pytrickle` README. Net-new pages will draw primarily from the upstream repo.

## 5. remote signer / clearinghouse / TicketBroker / probabilistic micropayment

**About tab — significant coverage:**
- `v2/about/network/architecture.mdx`, `network/job-pipelines.mdx`, `network/mechanisms.mdx`, `network/observability.mdx`, `network/participation.mdx`
- `v2/about/network1/*` (architecture, design, job-pipelines)
- `v2/about/protocol/x-design.mdx`
- `v2/about/concepts/livepeer-stack.mdx`
- `v2/about/concepts/unclassified/livepeer-capabilities.mdx`

**Orchestrators tab:**
- Likely substantial coverage; verify under `v2/orchestrators/`. Not enumerated here (search produced too much output) but the Orchestrators tab is canonical for payment-flow content from the operator side.

**Gateways tab:**
- `v2/gateways/_workspace/canonical/checks.mdx`
- `v2/gateways/_workspace/canonical/Frameworks.mdx`, `IA.mdx`

**External (not in repo but referenced):**
- `Remote_signers.md` Notion export (per `diagrams2.mdx` and `consolidate.md`)
- go-livepeer PRs #3641 (per-second compute), #3791, #3822 (remote signer)

**Use for:** `guides/payments/*` (8 pages), `build/alt-gateways/remote-signer-integration.mdx`, `guides/transport/data-channels.mdx`. The About tab's `network*` cluster is the strongest existing source.

## 6. per-second compute

Same hit pattern as §5 (payments cluster). No dedicated page exists anywhere — this is genuinely net-new content sourced from PR #3641 + `Remote_signers.md`.

## 7. NaaP / plugin platform / operator.livepeer.org

**Substantive source already in v2/developers/:** `guides/beta-projects/naap.mdx` (12.5KB) — classified as SPLIT in mapping.

**Outside developers/:** sparse. NaaP is referenced in some `_workspace/canonical/` and `_workspace/notes/` files but no live published pages outside Developers tab.

**Use for:** the SPLIT-source for `build/plugins-and-extensions/overview.mdx` + `naap-architecture.mdx` is the existing `naap.mdx`. Net-new pages in this subgroup (`building-a-plugin`, `plugin-runtime`, `plugin-registry`) will need to draw from upstream NaaP repo plus the existing naap.mdx beyond what fits in the two SPLIT outputs.

## 8. Storyboard / @livepeer/agent / @livepeer/creative-kit

**v2/developers/ live STUBS:** `guides/beta-projects/storyboard.mdx` (0 bytes), `guides/beta-projects/data-mcp.mdx` (0 bytes), `_workspace/files-to-add/` contains drafts (not catalogued in this audit).

**Outside developers/:** no hits in About/Community/Gateways/Orchestrators live trees.

**External:** Storyboard repo README is the canonical source per `diagrams2.mdx` verification log §5 (40 BYOC capabilities documented).

**Use for:** `build/ai-and-agents/agents/storyboard.mdx` (currently 0-byte stub), `build/ai-and-agents/agents/agent-sdk.mdx`, `agents/creative-kit.mdx`, plus `agents/overview.mdx`. All net-new content needed.

## 9. livepeer-data-mcp / MCP server

**v2/developers/ live STUB:** `guides/beta-projects/data-mcp.mdx` (0 bytes).

**Outside developers/:** zero hits in live trees.

**External:** repo `livepeer-data-mcp` README confirms internal-only deployment per `diagrams2.mdx` verification log §3 (production at `livepeer-data-mcp.livepeer.technology`, K8s/ArgoCD, ClickHouse + PostHog, INTERNAL DATA TEAM ONLY).

**Use for:** `build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx`. **The internal-only finding suggests this page should be either (a) flagged as internal-tool-not-for-external-use or (b) excluded from the locked IA.** Wonderland decision required.

## 10. livepeer-python-gateway / alternative gateway / browser gateway

**Outside developers/:** sparse. Some references in About/Community workspace notes but no live pages.

**External:** the `j0sh repo` referenced in `consolidate.md` §6e is the source for the local-gateways content (Discord transcript + repo).

**Use for:** `build/alt-gateways/*` (4 pages all net-new). Source material is upstream repos and Discord transcript.

## Useful workspace caches (in-flight content NOT in any published page)

`_workspace/files-to-add/` in `v2/developers/` contains 16 stage-ready MDX drafts:
- `ai-authentication.mdx` (5.2KB)
- `ai-production-checklist.mdx` (size unverified)
- `ai-troubleshooting.mdx`
- `apis-expanded.mdx`
- `navigator.mdx`
- `pricing-rate-limits.mdx`
- `sdk-gateway.mdx`
- `sdks-expanded.mdx`
- `setup-paths.mdx`
- `tutorial-ai-agent.mdx`
- `tutorial-ipfs-video.mdx`
- `tutorial-token-gated-video.mdx`
- `video-create-livestream.mdx`
- `video-monitor-stream-health.mdx`
- `video-on-livepeer.mdx`
- `video-webhooks.mdx`

**Recommendation:** before writing any net-new page, check `_workspace/files-to-add/` for a matching draft. Several of these may directly fill IA slots (`navigator.mdx`, `apis-expanded.mdx`→`resources/reference/apis.mdx`, `sdks-expanded.mdx`→`resources/reference/sdks.mdx`, `pricing-rate-limits.mdx`→`resources/reference/pricing-rate-limits.mdx`).

## Key cross-tab content gaps

These three concepts are referenced repeatedly across tabs but have no canonical concept page anywhere:

1. **Trickle protocol** — one-line mentions only. Net-new in Developers.
2. **AIServiceRegistry (opt-in/transitional)** — in production code (`cmd/livepeer/starter/starter.go`) but no docs surface. Per `diagrams2.mdx` verification log §4.
3. **Remote Signer + Clearinghouse pattern** — designed for Persona E but not in any current docs. Per `diagrams2.mdx` §3.2.

Each is a P0 net-new concept page candidate.
