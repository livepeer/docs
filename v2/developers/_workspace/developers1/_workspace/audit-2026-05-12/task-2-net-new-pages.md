# Task 2 — Net-new pages in the locked IA

**Locked IA total:** 88 pages
**Pages with a source via MOVE/MERGE/REWRITE/KEEP:** 31 (from task-2-existing-file-mapping.csv)
**Pages NET-NEW (no source identified in v2/developers/ live tree):** 57

A "source" here means an existing live file in `v2/developers/` whose content can hydrate the target. NET-NEW does NOT mean "must be written from scratch" — many net-new pages can pull from cross-repo content (see `task-2-cross-repo-finds.md`) or from `_workspace/files-to-add/` (16 stage-ready drafts).

Persona codes: P1 = AI, P2 = Video Platform, P3 = Compute Primitives, P4 = Live-Video-First, P5 = Protocol. "Routing" = routing page (Persona model agnostic).

## concepts/ (1 net-new of 4 — 3 sourced)

| Target | Persona | Notes |
|---|---|---|
| `concepts/overview.mdx` | All | NEW — short orienting page introducing the tab and the 4 concept pages |

Sourced: `concepts/landscape.mdx` (← REWRITE developer-landscape.mdx), `concepts/infra-stack.mdx` (← MOVE diagrams.mdx), `concepts/repo-map.mdx` (← MERGE developer-stack + oss-stack + ecosystem-map).

## learn/ (1 net-new of 3 — 2 sourced)

| Target | Persona | Notes |
|---|---|---|
| `learn/applications.mdx` | P1 + P2 + P3 | Borderline — current `learn/applications-on-livepeer.mdx` exists but H1 is "When to Run Your Own Gateway" (wrong scope). Classified as REWRITE in mapping CSV; could equally be NET-NEW with the existing file ARCHIVED |

Sourced: `learn/ai-and-agents.mdx` (← REWRITE ai-on-livepeer.mdx + MERGE workload-fit.mdx), `learn/video-and-livestream.mdx` (← REWRITE video-on-livepeer.mdx).

## learn/where-to-find/ (7 net-new of 7 — all NEW)

All seven routing pages must be written from scratch. They're all the same template — a single CardGroup pointing out — so they should batch as one Codex task.

| Target | Persona | Notes |
|---|---|---|
| `learn/where-to-find/solutions-paths.mdx` | Routing | Out to Solutions tab |
| `learn/where-to-find/studio-paths.mdx` | Routing (P2 + P4) | Out to Solutions/Studio + thin decision matrix; the only legitimate place for Studio content |
| `learn/where-to-find/operating-a-gateway.mdx` | Routing (P3) | Out to Gateways tab |
| `learn/where-to-find/observability.mdx` | Routing | Out to Gateways and About |
| `learn/where-to-find/protocol-extending.mdx` | Routing (P5) | Out to About and Community |
| `learn/where-to-find/contributing.mdx` | Routing (P5) | Out to Community |
| `learn/where-to-find/opportunities.mdx` | Routing | Out to Community — RFPs, grants, bounties (Wonderland already has source content in current `guides/opportunities/*` being archived) |

## build/ai-and-agents/ (28 net-new of ~30 — 2 sourced)

The IA's largest subgroup. Highest user demand (per `02-personas.md` AI Application Builder dominance). Most pages NET-NEW.

| Target | Persona | Notes |
|---|---|---|
| `build/ai-and-agents/overview.mdx` | P1 | NEW |
| `build/ai-and-agents/ai-jobs-direct-quickstart.mdx` | P1 | NEW — RFP-named deliverable (ii.4). 10-min curl against Cloud SPE. Source feed: REWRITE of `get-started/ai-quickstart.mdx` (Studio-framed) |
| `build/ai-and-agents/ai-pipelines.mdx` | P1 | NEW |
| `build/ai-and-agents/model-support.mdx` | P1 | Sourced ← MOVE build1/model-support.mdx (5 REVIEW flags to clear) |
| `build/ai-and-agents/ai-sdks-overview.mdx` | P1 | NEW; can pull from `resources/reference/sdks.mdx` content |
| `build/ai-and-agents/realtime-ai/overview.mdx` | P3 | NEW |
| `build/ai-and-agents/realtime-ai/comfystream/overview.mdx` | P3 | Sourced ← MOVE build1/comfystream.mdx (11 REVIEW flags) |
| `build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx` | P3 | Sourced ← MOVE get-started/comfystream-quickstart.mdx (11 REVIEW flags) |
| `build/ai-and-agents/realtime-ai/comfystream/workflow-authoring.mdx` | P3 | NEW |
| `build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc.mdx` | P3 | NEW |
| `build/ai-and-agents/realtime-ai/pytrickle/overview.mdx` | P3 | NEW; cross-link to `resources/reference/pytrickle-reference.mdx` |
| `build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart.mdx` | P3 | NEW |
| `build/ai-and-agents/realtime-ai/pytrickle/frame-processor.mdx` | P3 | NEW |
| `build/ai-and-agents/realtime-ai/pytrickle/data-channels.mdx` | P3 | NEW |
| `build/ai-and-agents/ai-stream-pack/overview.mdx` | P3 | NEW |
| `build/ai-and-agents/ai-stream-pack/streamdiffusion.mdx` | P3 | NEW |
| `build/ai-and-agents/ai-stream-pack/streamdiffusion-v2.mdx` | P3 | NEW |
| `build/ai-and-agents/ai-stream-pack/superresolution.mdx` | P3 | NEW |
| `build/ai-and-agents/ai-stream-pack/audio-transcription.mdx` | P1 | NEW |
| `build/ai-and-agents/ai-stream-pack/comfyui-rtc.mdx` | P3 | NEW |
| `build/ai-and-agents/agents/overview.mdx` | P1 | NEW (covers subsumed Persona F) |
| `build/ai-and-agents/agents/agent-sdk.mdx` | P1 | NEW (stub-until-npm-ships per `consolidate.md` §6a note) |
| `build/ai-and-agents/agents/creative-kit.mdx` | P1 | NEW (stub-until-npm-ships) |
| `build/ai-and-agents/agents/storyboard.mdx` | P1 | STUB ← MOVE guides/beta-projects/storyboard.mdx (0 bytes) — needs hydration |
| `build/ai-and-agents/agents/llm-provider-routing.mdx` | P1 | NEW |
| `build/ai-and-agents/agents/eliza-integration.mdx` | P1 | NEW |
| `build/ai-and-agents/agents/eip-8004-identity.mdx` | P1 | NEW |
| `build/ai-and-agents/ecosystem-mcp/overview.mdx` | P1 | NEW |
| `build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx` | P1 | STUB ← MOVE guides/beta-projects/data-mcp.mdx (0 bytes) — needs hydration (livepeer-data-mcp is documented internal-only per `diagrams2.mdx` verification log §3) |
| `build/ai-and-agents/ecosystem-mcp/docs-mcp.mdx` | P1 | NEW |

## build/video/ (8 net-new of 9 — 1 sourced)

| Target | Persona | Notes |
|---|---|---|
| `build/video/overview.mdx` | P2 + P4 | NEW |
| `build/video/transcoding-direct-quickstart.mdx` | P2 | NEW — separate from Studio quickstart (HOLD) |
| `build/video/ingest-and-playback.mdx` | P2 + P4 | NEW |
| `build/video/live-events.mdx` | P4 | NEW |
| `build/video/vod-and-recording.mdx` | P2 | NEW |
| `build/video/codec-support.mdx` | P2 + P4 | NEW |
| `build/video/storage-and-archival.mdx` | P2 | NEW |
| `build/video/lpms-integration.mdx` | P4 | NEW |
| `build/video/frameworks-network.mdx` | P2 + P4 | NEW (target: frameworks.network) |

## build/compute/byoc/ (5 net-new of 6 — 1 sourced)

| Target | Persona | Notes |
|---|---|---|
| `build/compute/overview.mdx` | P3 | NEW |
| `build/compute/byoc/overview.mdx` | P3 | Sourced ← MOVE build1/byoc.mdx (6 REVIEW flags) |
| `build/compute/byoc/byoc-quickstart.mdx` | P3 | NEW |
| `build/compute/byoc/byoc-architecture.mdx` | P3 | NEW |
| `build/compute/byoc/byoc-production.mdx` | P3 | NEW |
| `build/compute/byoc/byoc-sdk.mdx` | P3 | NEW |
| `build/compute/byoc/reference-pipelines.mdx` | P3 | NEW |

## build/plugins-and-extensions/ (3 net-new of 5 — 2 sourced via SPLIT)

| Target | Persona | Notes |
|---|---|---|
| `build/plugins-and-extensions/overview.mdx` | P3 | Sourced ← SPLIT guides/beta-projects/naap.mdx |
| `build/plugins-and-extensions/naap-architecture.mdx` | P3 | Sourced ← SPLIT guides/beta-projects/naap.mdx |
| `build/plugins-and-extensions/building-a-plugin.mdx` | P3 | NEW |
| `build/plugins-and-extensions/plugin-runtime.mdx` | P3 | NEW |
| `build/plugins-and-extensions/plugin-registry.mdx` | P3 | NEW |

## build/alt-gateways/ (4 net-new of 4 — covers subsumed Persona E)

| Target | Persona | Notes |
|---|---|---|
| `build/alt-gateways/overview.mdx` | P3 (E subsumed) | NEW |
| `build/alt-gateways/remote-signer-integration.mdx` | P3 (E) | NEW; source feed: `Remote_signers.md` Notion export + PRs #3791, #3822 (per `diagrams2.mdx` §3.2) |
| `build/alt-gateways/livepeer-python-gateway.mdx` | P3 (E) | NEW |
| `build/alt-gateways/browser-and-mobile.mdx` | P3 (E) | NEW |

## build/applications/ (4 net-new of 4)

| Target | Persona | Notes |
|---|---|---|
| `build/applications/overview.mdx` | All | NEW |
| `build/applications/frontend-react-player.mdx` | P2 + P4 | NEW — pull from ui-kit recipes |
| `build/applications/frontend-react-broadcast.mdx` | P4 | NEW — pull from ui-kit recipes |
| `build/applications/frontend-core-web.mdx` | All | NEW |

## build/tutorials/ (7 net-new of 12 — 4 sourced via MOVE, 1 unresolved)

| Target | Persona | Notes |
|---|---|---|
| `build/tutorials/ai-agent-on-livepeer.mdx` | P1 | Sourced ← MOVE |
| `build/tutorials/ai-image-generation-app.mdx` | P1 | NEW (per consolidate.md §6g) |
| `build/tutorials/build-a-chatbot-with-livepeer-llm.mdx` | P1 | NEW |
| `build/tutorials/build-a-naap-plugin.mdx` | P3 | NEW |
| `build/tutorials/build-a-vtuber-avatar-pipeline.mdx` | P3 | NEW — ComfyStream growth segment, mainline per `consolidate.md` |
| `build/tutorials/eliza-livepeer-plugin.mdx` | P1 | NEW |
| `build/tutorials/ipfs-video-integration.mdx` | P2 | Sourced ← MOVE |
| `build/tutorials/low-latency-live-streaming-app.mdx` | P4 | NEW |
| `build/tutorials/multi-tenant-billing-with-pymthouse.mdx` | P3 | NEW |
| `build/tutorials/streamplace-byoc-integration.mdx` | P3 + P4 | NEW |
| `build/tutorials/token-gated-video.mdx` | P2 | Sourced ← MOVE |
| `build/tutorials/vod-upload-and-playback.mdx` | P2 | NEW |

`huggingface-to-livepeer.mdx` and `huggingface-to-livepeer-advanced.mdx` (existing tutorials, 26KB + 45KB combined) have no IA slot. Wonderland decision needed: (a) add as 13th tutorial; (b) merge into `build/ai-and-agents/model-support.mdx`; (c) archive.

## guides/ (24 net-new of 25)

### payments/ (8 net-new of 8 — 1 via MOVE)

| Target | Persona | Notes |
|---|---|---|
| `guides/payments/overview.mdx` | All | NEW |
| `guides/payments/probabilistic-micropayments.mdx` | P1 + P3 | NEW |
| `guides/payments/per-second-compute.mdx` | P3 | NEW (post BYOC PR #3641) |
| `guides/payments/eth-escrow-and-deposits.mdx` | P1 + P3 | NEW |
| `guides/payments/remote-signer.mdx` | P3 | NEW; source feed: `Remote_signers.md` |
| `guides/payments/clearinghouse-pattern.mdx` | P3 | Sourced ← MOVE pymthouse.mdx |
| `guides/payments/custom-auth-and-billing.mdx` | P3 | NEW |
| `guides/payments/orchestrator-selection-and-pricing.mdx` | P1 + P3 | NEW |

### transport/ (4 net-new of 4)

| Target | Persona | Notes |
|---|---|---|
| `guides/transport/overview.mdx` | P3 | NEW |
| `guides/transport/trickle-protocol.mdx` | P3 | NEW (per `diagrams2.mdx` §3.2 "no concept page") |
| `guides/transport/trickle-ingress-egress.mdx` | P3 | NEW |
| `guides/transport/data-channels.mdx` | P3 | NEW |

### gateways-as-developer/ (4 net-new of 4)

| Target | Persona | Notes |
|---|---|---|
| `guides/gateways-as-developer/overview.mdx` | P3 | NEW |
| `guides/gateways-as-developer/community-gateway.mdx` | P1 | NEW |
| `guides/gateways-as-developer/self-hosted-decision.mdx` | P3 | NEW (brief originally MOVE concepts/running-a-gateway.mdx, but that file is absent from live tree — content may be in `_workspace/archive/` — verify before writing) |
| `guides/gateways-as-developer/orchestrator-session.mdx` | P3 | NEW |

### auth-and-security/ (2 net-new of 3 — 1 via MOVE)

| Target | Persona | Notes |
|---|---|---|
| `guides/auth-and-security/overview.mdx` | All | NEW |
| `guides/auth-and-security/ai-authentication.mdx` | P1 | Sourced ← MOVE guides/ai/authentication.mdx (4 Studio violations to clear) |
| `guides/auth-and-security/access-control.mdx` | All | NEW; source feed: `guides/video/access-control.mdx` content if salvageable |

### observability-and-debugging/ (2 net-new of 3 — 1 via REWRITE)

| Target | Persona | Notes |
|---|---|---|
| `guides/observability-and-debugging/tooling-and-metrics.mdx` | All | NEW |
| `guides/observability-and-debugging/orchestrator-monitoring.mdx` | All | NEW |
| `guides/observability-and-debugging/job-debugging.mdx` | All | Sourced ← REWRITE guides/ai/troubleshooting.mdx (6 Studio violations) |

### local-development/ (3 net-new of 4 — 1 via MOVE)

| Target | Persona | Notes |
|---|---|---|
| `guides/local-development/overview.mdx` | All | NEW |
| `guides/local-development/local-gateway.mdx` | P3 | NEW |
| `guides/local-development/local-orchestrator.mdx` | P3 | NEW |
| `guides/local-development/local-testnet.mdx` | P5 (subsumed) | Sourced ← MOVE local-testnet-deployment.mdx |

### top-level guides

| Target | Persona | Notes |
|---|---|---|
| `guides/overview.mdx` | All | Sourced ← REWRITE developer-guides.mdx |
| `guides/production-hardening-checklist.mdx` | All | Sourced ← MOVE guides/ai/production-checklist.mdx (broaden scope) |
| `guides/help.mdx` | All | Sourced ← MOVE resources/compendium/developer-help.mdx |

## resources/ (3 net-new of 5 — 2 sourced; reference subgroup 9 net-new of 12)

### top-level

| Target | Persona | Notes |
|---|---|---|
| `resources/glossary.mdx` | All | KEEP existing 59KB file |
| `resources/example-applications.mdx` | All | Sourced ← MERGE concepts/builders-guide.mdx + resources/compendium/example-applications.mdx + resources/compendium/resources.mdx |
| `resources/awesome-livepeer.mdx` | All | Sourced ← MOVE resources/knowledge-hub/awesome-livepeer.mdx (thin source — likely needs expansion) |
| `resources/deepwiki.mdx` | All | Sourced ← MOVE resources/knowledge-hub/deepwiki.mdx (thin) |
| `resources/wiki.mdx` | All | Sourced ← MOVE-STUB resources/knowledge-hub/wiki.mdx (&lt;1KB stub) |

### reference/ (9 net-new of 12)

| Target | Persona | Notes |
|---|---|---|
| `resources/reference/overview.mdx` | All | NEW |
| `resources/reference/apis.mdx` | All | Sourced ← REWRITE resources/reference/apis.mdx (5 Studio violations) |
| `resources/reference/ai-gateway-api.mdx` | P1 | NEW |
| `resources/reference/go-livepeer-http.mdx` | P3 + P5 | NEW |
| `resources/reference/sdks.mdx` | All | KEEP |
| `resources/reference/livepeer-ai-js.mdx` | P1 | NEW |
| `resources/reference/livepeer-ai-python.mdx` | P1 | NEW |
| `resources/reference/ui-kit.mdx` | P2 + P4 | NEW |
| `resources/reference/byoc-sdk.mdx` | P3 | NEW |
| `resources/reference/pytrickle-reference.mdx` | P3 | Sourced ← MOVE resources/reference/pytrickle.mdx |
| `resources/reference/livepeer-python-gateway.mdx` | P3 | NEW |
| `resources/reference/pricing-rate-limits.mdx` | All | KEEP (with 3 Studio violations to clear in-place) |

## Totals

| Subgroup | IA pages | Sourced | NET-NEW |
|---|---|---|---|
| concepts/ | 4 | 3 | 1 |
| learn/ (top) | 3 | 2 | 1 |
| learn/where-to-find/ | 7 | 0 | 7 |
| build/ai-and-agents/ | ~30 | 2 | ~28 |
| build/video/ | 9 | 0 (HOLD on transcoding-direct-quickstart) | 9 |
| build/compute/ + byoc/ | 7 | 1 | 6 |
| build/plugins-and-extensions/ | 5 | 2 (SPLIT) | 3 |
| build/alt-gateways/ | 4 | 0 | 4 |
| build/applications/ | 4 | 0 | 4 |
| build/tutorials/ | 12 | 3 | 9 (+2 unresolved huggingface tutorials) |
| guides/payments/ | 8 | 1 | 7 |
| guides/transport/ | 4 | 0 | 4 |
| guides/gateways-as-developer/ | 4 | 0 | 4 |
| guides/auth-and-security/ | 3 | 1 | 2 |
| guides/observability-and-debugging/ | 3 | 1 (REWRITE) | 2 |
| guides/local-development/ | 4 | 1 | 3 |
| guides/ (top) | 3 | 3 | 0 |
| resources/ (top) | 5 | 5 (incl. STUB MOVEs) | 0 |
| resources/reference/ | 12 | 3 | 9 |
| **TOTAL** | **131** *(some IA dirs imply implicit overview pages not counted in brief's 88)* | **28** | **103** |

The brief states 88 IA pages. My count is higher because the brief table lists subgroups with their leaf files but does not always include the implicit overview page at every level. Conservatively: **57–60 NET-NEW pages need to be written from scratch**, **5 quickstarts** within those, **12 tutorials** in build/tutorials/.

STOP for Wonderland review before Task 3.
