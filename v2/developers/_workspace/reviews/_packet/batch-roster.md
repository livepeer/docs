# Batch roster — Phase 2 agent assignments

**Total pages to review:** 113 (`v2/developers/` excluding `_workspace/`)
**Empty stubs:** 12 — skipped per Phase 1 decision (list only in TAB-SUMMARY)
**Reviewable pages:** 101

13 agents across 4 dispatch rounds. Each agent: reads the packet, reviews assigned pages, writes one per-page review + one section summary.

## Page-count check (live)

```
v2/developers/                 113 total .mdx (excludes _workspace/)
v2/developers/concepts/          4
v2/developers/learn/             3 + where-to-find/7 = 10
v2/developers/build/ai-and-agents/        ~28 (root 5 + realtime-ai 9 + ai-stream-pack 6 + agents 5 + ecosystem-mcp 2 + tutorials? — tutorials live under build/tutorials/)
v2/developers/build/video/        12 (9 IA + 3 extras: ingest, player, transcoding)
v2/developers/build/compute/       7 (root 1 + byoc 6)
v2/developers/build/plugins-and-extensions/   5
v2/developers/build/alt-gateways/             4
v2/developers/build/applications/             4
v2/developers/build/tutorials/               14
v2/developers/guides/              3 top (overview, production-hardening-checklist, help)
v2/developers/guides/payments/      8 + 2 extras (access-control, viewership) = 10
v2/developers/guides/transport/                4
v2/developers/guides/gateways-as-developer/    4
v2/developers/guides/auth-and-security/        3
v2/developers/guides/observability-and-debugging/   3
v2/developers/guides/local-development/        4
v2/developers/resources/           5 top + reference/12 = 17
v2/developers/  root              3 (index, navigator, portal)
```

## Round 1 — 4 agents in parallel

### A1 — concepts (4 pages)
- `v2/developers/concepts/overview.mdx`
- `v2/developers/concepts/landscape.mdx`
- `v2/developers/concepts/infra-stack.mdx`
- `v2/developers/concepts/repo-map.mdx`

Output: `_workspace/reviews/concepts/*.md` (4) + `_workspace/reviews/_summary/concepts.md`

### A2 — learn + where-to-find (10 pages)
- `v2/developers/learn/ai-and-agents.mdx`
- `v2/developers/learn/video-and-livestream.mdx`
- `v2/developers/learn/applications.mdx`
- `v2/developers/learn/where-to-find/solutions-paths.mdx`
- `v2/developers/learn/where-to-find/studio-paths.mdx`
- `v2/developers/learn/where-to-find/operating-a-gateway.mdx`
- `v2/developers/learn/where-to-find/observability.mdx`
- `v2/developers/learn/where-to-find/protocol-extending.mdx`
- `v2/developers/learn/where-to-find/contributing.mdx`
- `v2/developers/learn/where-to-find/opportunities.mdx`

Output: `_workspace/reviews/learn/*.md` + `_workspace/reviews/learn/where-to-find/*.md` + `_summary/learn.md`

### A3 — build/ai-and-agents root + realtime-ai (14 pages)
- `v2/developers/build/ai-and-agents/overview.mdx`
- `v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart.mdx`
- `v2/developers/build/ai-and-agents/ai-pipelines.mdx`
- `v2/developers/build/ai-and-agents/model-support.mdx`
- `v2/developers/build/ai-and-agents/ai-sdks-overview.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/overview.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/frame-processor.mdx`
- `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels.mdx` *(EMPTY-STUB — flag in summary, skip review)*

Output: `_workspace/reviews/build/ai-and-agents/*.md` + `_workspace/reviews/build/ai-and-agents/realtime-ai/**/*.md` + `_summary/build-ai-and-agents-1.md`

### A4 — build/ai-and-agents stream-pack + agents + ecosystem-mcp (13 pages, 5 empty stubs)
- `ai-stream-pack/overview.mdx`
- `ai-stream-pack/streamdiffusion.mdx` *(EMPTY-STUB)*
- `ai-stream-pack/streamdiffusion-v2.mdx` *(EMPTY-STUB)*
- `ai-stream-pack/superresolution.mdx` *(EMPTY-STUB)*
- `ai-stream-pack/audio-transcription.mdx` *(EMPTY-STUB)*
- `ai-stream-pack/comfyui-rtc.mdx` *(EMPTY-STUB)*
- `agents/overview.mdx`
- `agents/storyboard.mdx`
- `agents/llm-provider-routing.mdx`
- `agents/eliza-integration.mdx`
- `agents/eip-8004-identity.mdx` *(EMPTY-STUB)*
- `ecosystem-mcp/overview.mdx`
- `ecosystem-mcp/docs-mcp.mdx`

Review the 7 non-stubs deeply; list 5 stubs in summary with "EMPTY-STUB" verdict only.

Output: `_workspace/reviews/build/ai-and-agents/ai-stream-pack/*.md` + `agents/*.md` + `ecosystem-mcp/*.md` + `_summary/build-ai-and-agents-2.md`

## Round 2 — 4 agents in parallel

### A5 — build/video (12 pages, 2 empty stubs)
- `build/video/overview.mdx`
- `build/video/transcoding-direct-quickstart.mdx`
- `build/video/ingest-and-playback.mdx`
- `build/video/live-events.mdx`
- `build/video/vod-and-recording.mdx`
- `build/video/codec-support.mdx`
- `build/video/storage-and-archival.mdx` *(EMPTY-STUB)*
- `build/video/lpms-integration.mdx`
- `build/video/frameworks-network.mdx` *(EMPTY-STUB)*
- `build/video/ingest.mdx` *(IA-extra)*
- `build/video/player.mdx` *(IA-extra)*
- `build/video/transcoding.mdx` *(IA-extra)*

Flag the 3 IA-extras as "not in locked IA — needs Wonderland decision: merge with existing IA page, rename, or add to IA".

Output: `_workspace/reviews/build/video/*.md` + `_summary/build-video.md`

### A6 — build/compute (7 pages)
- `build/compute/overview.mdx`
- `build/compute/byoc/overview.mdx`
- `build/compute/byoc/byoc-quickstart.mdx`
- `build/compute/byoc/byoc-architecture.mdx`
- `build/compute/byoc/byoc-production.mdx`
- `build/compute/byoc/byoc-sdk.mdx`
- `build/compute/byoc/reference-pipelines.mdx`

Output: `_workspace/reviews/build/compute/*.md` + `_summary/build-compute.md`

### A7 — plugins + alt-gateways + applications (13 pages, 2 empty stubs)
- `build/plugins-and-extensions/overview.mdx`
- `build/plugins-and-extensions/naap-architecture.mdx`
- `build/plugins-and-extensions/building-a-plugin.mdx`
- `build/plugins-and-extensions/plugin-runtime.mdx`
- `build/plugins-and-extensions/plugin-registry.mdx`
- `build/alt-gateways/overview.mdx`
- `build/alt-gateways/remote-signer-integration.mdx` *(EMPTY-STUB)*
- `build/alt-gateways/livepeer-python-gateway.mdx` *(EMPTY-STUB)*
- `build/alt-gateways/browser-and-mobile.mdx`
- `build/applications/overview.mdx`
- `build/applications/frontend-react-player.mdx`
- `build/applications/frontend-react-broadcast.mdx`
- `build/applications/frontend-core-web.mdx`

Output: `_workspace/reviews/build/plugins-and-extensions/*.md` + `alt-gateways/*.md` + `applications/*.md` + `_summary/build-other.md`

### A8 — build/tutorials part 1 (7 pages)
- `build/tutorials/ai-agent-on-livepeer.mdx`
- `build/tutorials/ai-image-generation-app.mdx`
- `build/tutorials/build-a-chatbot-with-livepeer-llm.mdx`
- `build/tutorials/build-a-naap-plugin.mdx`
- `build/tutorials/build-a-vtuber-avatar-pipeline.mdx`
- `build/tutorials/eliza-livepeer-plugin.mdx`
- `build/tutorials/huggingface-to-livepeer.mdx`

Output: `_workspace/reviews/build/tutorials/*.md` (first 7) + section summary deferred to A9 to combine

## Round 3 — 4 agents in parallel

### A9 — build/tutorials part 2 (7 pages)
- `build/tutorials/huggingface-to-livepeer-advanced.mdx`
- `build/tutorials/ipfs-video-integration.mdx`
- `build/tutorials/low-latency-live-streaming-app.mdx`
- `build/tutorials/multi-tenant-billing-with-pymthouse.mdx`
- `build/tutorials/streamplace-byoc-integration.mdx`
- `build/tutorials/token-gated-video.mdx`
- `build/tutorials/vod-upload-and-playback.mdx`

Output: `_workspace/reviews/build/tutorials/*.md` (second 7) + COMBINED `_summary/build-tutorials.md` (covers A8 + A9)

### A10 — guides/payments + transport + 2 extras (14 pages, 1 empty stub)
- `guides/payments/overview.mdx`
- `guides/payments/probabilistic-micropayments.mdx`
- `guides/payments/per-second-compute.mdx`
- `guides/payments/eth-escrow-and-deposits.mdx`
- `guides/payments/remote-signer.mdx`
- `guides/payments/clearinghouse-pattern.mdx`
- `guides/payments/custom-auth-and-billing.mdx`
- `guides/payments/orchestrator-selection-and-pricing.mdx`
- `guides/payments/access-control.mdx` *(IA-extra — likely belongs in auth-and-security)*
- `guides/payments/viewership.mdx` *(IA-extra — no IA slot)*
- `guides/transport/overview.mdx`
- `guides/transport/trickle-protocol.mdx` *(EMPTY-STUB)*
- `guides/transport/trickle-ingress-egress.mdx`
- `guides/transport/data-channels.mdx`

Flag IA-extras as "not in locked IA — Wonderland decision needed".

Output: `_workspace/reviews/guides/payments/*.md` + `transport/*.md` + `_summary/guides-payments-transport.md`

### A11 — guides/gateways-as-developer + auth-and-security + observability-and-debugging (10 pages)
- `guides/gateways-as-developer/overview.mdx`
- `guides/gateways-as-developer/community-gateway.mdx`
- `guides/gateways-as-developer/self-hosted-decision.mdx`
- `guides/gateways-as-developer/orchestrator-session.mdx`
- `guides/auth-and-security/overview.mdx`
- `guides/auth-and-security/ai-authentication.mdx`
- `guides/auth-and-security/access-control.mdx`
- `guides/observability-and-debugging/tooling-and-metrics.mdx`
- `guides/observability-and-debugging/orchestrator-monitoring.mdx`
- `guides/observability-and-debugging/job-debugging.mdx`

Output: `_workspace/reviews/guides/gateways-as-developer/*.md` + `auth-and-security/*.md` + `observability-and-debugging/*.md` + `_summary/guides-gateways-auth-observability.md`

### A12 — guides/local-development + top-level guides (7 pages)
- `guides/local-development/overview.mdx`
- `guides/local-development/local-gateway.mdx`
- `guides/local-development/local-orchestrator.mdx`
- `guides/local-development/local-testnet.mdx`
- `guides/overview.mdx`
- `guides/production-hardening-checklist.mdx`
- `guides/help.mdx`

Output: `_workspace/reviews/guides/local-development/*.md` + `guides/*.md` (top) + `_summary/guides-local-and-top.md`

## Round 4 — 1 agent

### A13 — resources + reference + root (20 pages)
- `resources/glossary.mdx`
- `resources/example-applications.mdx` *(EMPTY-STUB or MERGE-STUB — verify)*
- `resources/awesome-livepeer.mdx`
- `resources/deepwiki.mdx`
- `resources/wiki.mdx`
- `resources/reference/overview.mdx`
- `resources/reference/apis.mdx`
- `resources/reference/ai-gateway-api.mdx`
- `resources/reference/go-livepeer-http.mdx`
- `resources/reference/sdks.mdx`
- `resources/reference/livepeer-ai-js.mdx`
- `resources/reference/livepeer-ai-python.mdx`
- `resources/reference/ui-kit.mdx`
- `resources/reference/byoc-sdk.mdx`
- `resources/reference/pytrickle-reference.mdx`
- `resources/reference/livepeer-python-gateway.mdx`
- `resources/reference/pricing-rate-limits.mdx`
- `index.mdx`
- `navigator.mdx`
- `portal.mdx`

Output: `_workspace/reviews/resources/*.md` + `reviews/resources/reference/*.md` + `reviews/{index,navigator,portal}.md` + `_summary/resources.md` + `_summary/root.md`

## Agent brief template

Every agent receives this prompt (with the assigned page list inserted):

```
You are a deep-quality reviewer for the v2/developers/ Livepeer docs tree.

CONTEXT
The tab was scaffolded 2026-05-12 and populated by intervening writing. Wonderland's verdict: layout and style standard is LOW. Pages need DEEP, product-forward fixes, not lazy ones. Every page must apply the full canonical rubric AND a 5-layer depth analysis.

PACKET (read all 5)
- v2/developers/_workspace/reviews/_packet/review-rubric.md
- v2/developers/_workspace/reviews/_packet/review-template.md
- v2/developers/_workspace/reviews/_packet/component-matrix.md
- v2/developers/_workspace/reviews/_packet/voice-copy-checklist.md
- v2/developers/_workspace/reviews/_packet/5-whys-prompt.md

CANONICAL CHECKS SOURCE
v2/developers1/_workspace/canonical/checks.mdx (66 KB; the packet review-rubric.md distils this — read both)

YOUR PAGES (review each):
{list of page paths}

EMPTY-STUB pages in your list (skip per-page review; list in summary):
{list of empty stubs or "none"}

WHAT TO PRODUCE
For each non-stub page:
  v2/developers/_workspace/reviews/{matching subgroup path}/{page-slug}.md

The review file MUST follow review-template.md exactly. Every numbered check from the rubric appears (PASS/FAIL/MIXED/N/A with reason). Evidence is quoted, with line numbers. The §"Depth analysis (5 layers)" is mandatory — applied per 5-whys-prompt.md, with concrete fixes citing sources/exemplars.

Plus one section summary:
  v2/developers/_workspace/reviews/_summary/{your-summary-filename}.md

QUALITY CONTRACT (non-negotiable)
1. Read every file in the packet completely before starting.
2. For each page, run the grep patterns in voice-copy-checklist.md against the actual file (use Bash).
3. Cite line numbers and quote actual content in every FAIL evidence.
4. Verify every "broken link" claim by checking the target file exists.
5. Apply the 5-whys depth analysis with specific gaps, specific fixes, specific source/exemplar paths. NO surface fixes. NO "review for clarity".
6. Verdict scale: PASS / MINOR / MODERATE / MAJOR / NEEDS WORK / EMPTY-STUB. Use strictly.
7. Severity strict: CRITICAL / HIGH / MEDIUM / INFO.
8. If you find a contradiction between the rubric and the actual page convention, flag it — do not guess.
9. Do NOT edit any v2/*.mdx file. Reviews only. Findings, not fixes.

RETURN FORMAT
Per-page review files in the specified paths, plus the section summary. Confirm file count at the end.

FAILURE PROTOCOL
If a page in your list does not exist, log it and continue. If the packet is missing, return DEPENDENCY FAILED. Do not invent content.
```

This template goes inside each Agent() dispatch prompt. The agent does the actual file writes.

## Round timing

- Round 1: 4 agents in parallel → ~40 pages reviewed
- Round 2: 4 agents in parallel → ~39 pages reviewed
- Round 3: 4 agents in parallel → ~38 pages reviewed
- Round 4: 1 agent → ~20 pages reviewed (resources are largely reference-style — lighter)

After all rounds: Phase 3 synthesis (main thread reads all summaries + spot-checks per-page reviews; produces TAB-SUMMARY.md).

## Empty-stub handling

The 12 empty stubs (per-rg "This page is in progress"):

```
build/ai-and-agents/agents/eip-8004-identity.mdx
build/ai-and-agents/ai-stream-pack/audio-transcription.mdx
build/ai-and-agents/ai-stream-pack/comfyui-rtc.mdx
build/ai-and-agents/ai-stream-pack/streamdiffusion-v2.mdx
build/ai-and-agents/ai-stream-pack/streamdiffusion.mdx
build/ai-and-agents/ai-stream-pack/superresolution.mdx
build/alt-gateways/livepeer-python-gateway.mdx
build/alt-gateways/remote-signer-integration.mdx
build/video/frameworks-network.mdx
build/video/storage-and-archival.mdx
guides/transport/trickle-protocol.mdx
resources/example-applications.mdx
```

These get no per-page review. They are listed in each agent's section summary under "EMPTY-STUB" verdict and rolled up in TAB-SUMMARY's "Pages needing writing before review" block.
