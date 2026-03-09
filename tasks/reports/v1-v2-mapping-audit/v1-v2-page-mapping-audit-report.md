# v1 -> v2 Mapping Audit Report

Generated: 2026-03-09T04:15:16.830Z

Commit: `1b1cdfc2`

## Methodology

- Source inventory from `v1/**/*.mdx` (filesystem truth).
- Canonical target IA from `docs.json` `version=v2`, `language=en`.
- Resolver chain: direct file resolve -> redirects -> canonical remap rules -> legacy-path cleanup.
- Seed matrix is advisory only and revalidated row-by-row.
- Two-pass classification: primary heuristic pass + adjudication pass for low-confidence/high-risk rows.

## Baseline Counts

- v1 filesystem pages: **279**
- v1 docs.json routes: **246**
- v1 orphan pages (filesystem-only): **33**
- audited rows generated: **279**

## Seed Carry-Forward Stats

- seed rows considered: **124**
- seed valid match: **12**
- seed stale: **69**
- seed non-resolvable: **43**

### Coverage Distribution

| Value | Count |
|---|---:|
| minimally_covered | 119 |
| not_covered | 65 |
| adequately_covered | 49 |
| partially_covered | 36 |
| superseded_obsolete | 10 |

### v1 State Distribution

| Value | Count |
|---|---:|
| legacy | 201 |
| orphan_not_in_nav | 33 |
| beta_experimental | 31 |
| deprecated | 13 |
| superseded | 1 |

### Adjudication Outcomes

| Value | Count |
|---|---:|
| needs_manual_review | 194 |
| not_required | 69 |
| confirmed | 15 |
| revised | 1 |

## Orphan v1 Pages (sample)

- `v1/ai/contributors/developers`
- `v1/ai/contributors/get-started`
- `v1/ai/contributors/guides/add-model`
- `v1/ai/contributors/guides/add-pipeline`
- `v1/api-reference/generate/image-to-text`
- `v1/api-reference/generate/text-to-speech`
- `v1/api-reference/room/create-user`
- `v1/api-reference/room/create`
- `v1/api-reference/room/delete`
- `v1/api-reference/room/get-user`
- `v1/api-reference/room/get`
- `v1/api-reference/room/remove-user`
- `v1/api-reference/room/start-egress`
- `v1/api-reference/room/stop-egress`
- `v1/api-reference/room/update-user`
- `v1/api-reference/room/update`
- `v1/developers/core-concepts/core-api/access-control`
- `v1/developers/core-concepts/core-api/asset`
- `v1/developers/core-concepts/core-api/multistream`
- `v1/developers/core-concepts/core-api/stream`
- `v1/developers/core-concepts/livepeer-network/delegators`
- `v1/developers/core-concepts/livepeer-network/gateways`
- `v1/developers/core-concepts/livepeer-network/orchestrators`
- `v1/developers/core-concepts/player/overview`
- `v1/developers/core-concepts/studio/in-browser-broadcast`
- `v1/developers/core-concepts/studio/stream-health`
- `v1/developers/core-concepts/studio/webhooks`
- `v1/references/subgraph`
- `v1/sdks/react/migration/3.x/providers/studio`
- `v1/self-hosting/deploying`
- `v1/self-hosting/how-to-contribute`
- `v1/self-hosting/overview`
- `v1/self-hosting/self-hosting-with-docker`

## Unresolved / Missing Target Recommendations

- (none)

## New Page / Group Recommendations

- `v1/ai/api-reference/audio-to-text` -> Gateways > Gateways > Technical References > API Reference > AI API
- `v1/ai/builders/gateways` -> Gateways > Gateways > Run A Gateway > Gateway Setup Guide > Configuration
- `v1/ai/builders/get-started` -> Developers > Developers > AI Pipelines
- `v1/ai/builders/showcase` -> Developers > Developers > AI Pipelines
- `v1/ai/contributors/coming-soon` -> Developers > Developers > AI Pipelines
- `v1/ai/contributors/developers` -> Developers > Developers > AI Pipelines
- `v1/ai/contributors/get-started` -> Developers > Developers > AI Pipelines
- `v1/ai/contributors/guides/add-model` -> Developers > Developers > AI Pipelines
- `v1/ai/contributors/guides/add-pipeline` -> Developers > Developers > AI Pipelines
- `v1/ai/gateways/get-started` -> Gateways > Gateways > Run A Gateway > Gateway Setup Guide > Configuration
- `v1/ai/gateways/onchain` -> Gateways > Gateways > Run A Gateway > Gateway Setup Guide > Configuration
- `v1/ai/gateways/start-gateway` -> Gateways > Gateways > Run A Gateway > Gateway Setup Guide > Configuration
- `v1/ai/introduction` -> Developers > Developers > AI Pipelines
- `v1/ai/orchestrators/ai-worker` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/orchestrators/benchmarking` -> GPU Nodes > GPU Nodes > Quickstart ⚡
- `v1/ai/orchestrators/get-started` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/orchestrators/models-config` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/orchestrators/models-download` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/orchestrators/onchain` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/orchestrators/start-orchestrator` -> GPU Nodes > GPU Nodes > Advanced Orchestrator Information
- `v1/ai/pipelines/audio-to-text` -> Developers > Developers > AI Pipelines
- `v1/ai/pipelines/image-to-image` -> Gateways > Gateways > Technical References > API Reference > AI API
- `v1/ai/pipelines/llm` -> Gateways > Gateways > Technical References > API Reference > AI API
- `v1/ai/pipelines/upscale` -> Gateways > Gateways > Technical References > API Reference > AI API
- `v1/ai/sdks/go` -> Developers > Developers > AI Pipelines
- `v1/ai/sdks/javascript` -> Developers > Developers > AI Pipelines
- `v1/ai/sdks/python` -> Developers > Developers > AI Pipelines
- `v1/ai/whats-new` -> Developers > Developers > AI Pipelines
- `v1/api-reference/overview/introduction` -> Solutions > Livepeer Studio Docs > API Reference > Assets
- `v1/delegators/guides/bridge-lpt-to-arbitrum` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/delegators/guides/migrate-stake-to-arbitrum` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/delegators/guides/yield-calculation` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/delegators/introduction` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/delegators/livepeer-studio-cli` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/delegators/quick-start` -> LP Token > Delegators & LPT > Delegating LPT
- `v1/developers/core-concepts/core-api/access-control` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/core-api/asset` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/core-api/multistream` -> Solutions > Livepeer Studio Docs > Livestream
- `v1/developers/core-concepts/core-api/stream` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/livepeer-network/delegators` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/livepeer-network/gateways` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/livepeer-network/orchestrators` -> Developers > Developers > Quickstart > Video & Transcoding
- `v1/developers/core-concepts/player/overview` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/studio/in-browser-broadcast` -> Developers > Developers > AI Pipelines
- `v1/developers/core-concepts/studio/stream-health` -> Solutions > Livepeer Studio Docs > Livestream
- `v1/developers/core-concepts/studio/webhooks` -> Solutions > Livepeer Studio Docs > Events & analytics
- `v1/developers/guides/access-control-jwt` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/access-control-webhooks` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/clip-a-livestream` -> Solutions > Livepeer Studio Docs > Livestream
- `v1/developers/guides/create-livestream` -> Solutions > Livepeer Studio Docs > Livestream
- `v1/developers/guides/encrypted-asset` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/get-engagement-analytics-via-api` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/get-engagement-analytics-via-grafana` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/get-engagement-analytics-via-timeplus` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/listen-to-asset-events` -> Solutions > Livepeer Studio Docs > Events & analytics
- `v1/developers/guides/listen-to-stream-events` -> Solutions > Livepeer Studio Docs > Events & analytics
- `v1/developers/guides/livestream-from-browser` -> Solutions > Livepeer Studio Docs > Livestream
- `v1/developers/guides/managing-projects` -> Solutions > Livepeer Studio Docs > Reference
- `v1/developers/guides/monitor-stream-health` -> Developers > Developers > Guides & Tutorials
- `v1/developers/guides/multistream` -> Solutions > Livepeer Studio Docs > Livestream

## Deprecated / Superseded Recommendations

- `v1/delegators/quick-start` (deprecated)
- `v1/developers/guides/playback-a-livestream` (deprecated)
- `v1/developers/guides/playback-an-asset` (deprecated)
- `v1/developers/quick-start` (deprecated)
- `v1/developers/tutorials/decentralized-app-with-fvm` (deprecated)
- `v1/developers/tutorials/token-gate-videos-with-lit` (deprecated)
- `v1/developers/tutorials/upload-playback-videos-4everland` (deprecated)
- `v1/developers/tutorials/upload-playback-videos-on-arweave` (deprecated)
- `v1/developers/tutorials/upload-playback-videos-on-ipfs` (deprecated)
- `v1/gateways/quick-start` (deprecated)
- `v1/orchestrators/quick-start` (deprecated)
- `v1/references/contract-addresses` (deprecated)
- `v1/references/knowledge-base/livestream` (superseded)
- `v1/sdks/react/migration/migration-4.x` (deprecated)

## Residual Manual Queue

- rows with `adjudication_status=needs_manual_review`: **194**
