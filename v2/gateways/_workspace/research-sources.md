# Gateway Guides and Resources — Full Source List

**Date compiled:** 13 March 2026
**Scope:** All sources used to produce `gateway-guides.mdx`, `gateway-resources.mdx`, `gateway-help.mdx`, `gateway-byoc-cpu-tutorial.mdx`, and `gateway-guides-resources-master-list.mdx`
**Author:** Wonderland × Livepeer Foundation (Claude research pass)

---

## Tier 1 — Primary technical sources (highest authority)

These are canonical specifications, official repos, and design documents. Facts sourced here are treated as ground truth.

| # | Source | URL | Key content used |
|---|--------|-----|-----------------|
| 1 | Remote Signers design doc (j0sh) | `/mnt/project/Remote_signers.md` (also: go-livepeer PR #3822 body) | Full remote signing protocol spec; stateless design; PM bookkeeping; getOrchInfoSig → signTicket → pay flow; off-chain gateway architecture; security rationale (hot key separation); goals and alternatives considered |
| 2 | go-livepeer source repository | `https://github.com/livepeer/go-livepeer` | Flag definitions (`cmd/livepeer/main.go`); payment mechanics (per-pixel AI pricing in `core/live_payment.go`; per-segment video in `core/segment_rpc.go`); service address defaults; `-network offchain` flag; `-byoc` flags |
| 3 | go-livepeer PR #3791 | `https://github.com/livepeer/go-livepeer/pull/3791` | GetOrchestratorInfo remote signing — Part 1 of off-chain gateway |
| 4 | go-livepeer PR #3822 | `https://github.com/livepeer/go-livepeer/pull/3822` | Payments remote signing — Part 2 of off-chain gateway |
| 5 | go-livepeer PR #3866 | `https://github.com/livepeer/go-livepeer/pull/3866` | BYOC remote signer payments by Elite Encoder; BYOC token refresh; difference between BYOC and LV2V (no gRPC for OrchestratorInfo); allow-list/block-list for orchestrators |
| 6 | go-livepeer PR #3706 | `https://github.com/livepeer/go-livepeer/pull/3706` | Old BYOC data channel attempt (never merged); clarifies why BYOC has its own endpoint |
| 7 | livepeer-python-gateway (j0sh) | `https://github.com/j0sh/livepeer-python-gateway` | Three discovery methods (explicit URI, webhook URL, remote signer); `start_lv2v` entry point; `PaymentSession` class; orchestrator selection logic; BYOC session management; `examples/select_orchestrator.py` |
| 8 | ai-runner repository | `https://github.com/livepeer/ai-runner` | Pipeline interface (`Pipeline`, `BaseParams`); `PipelineSpec`; BYOC pipeline lifecycle (`initialize`, `put_video_frame`, `get_processed_video_frame`, `update_params`, `stop`, `prepare_models`); Docker base image `livepeer/ai-runner:live-base`; custom pipeline guide |
| 9 | ai-runner custom pipeline guide | `/mnt/project/ai-runner.md` | Full walkthrough: uv project setup; `pyproject.toml` structure; Pipeline and Params implementation; Dockerfile with `live-base`; module export warnings; `start_app()` entrypoint |
| 10 | scope-runner (reference BYOC) | `https://github.com/livepeer/scope-runner` | Production BYOC reference: pipeline.py implementation, Dockerfile, uv dependency management |
| 11 | NaaP repository | `https://github.com/livepeer/naap` | JWT issuer service (SIWE → user-scoped JWT); Developer API Keys section; remote signer plugin design; clearinghouse vision |
| 12 | Livepeer Catalyst | `https://github.com/livepeer/catalyst` | Open-source media server; ingest layer |
| 13 | Livepeer LPMS | `https://github.com/livepeer/lpms` | Low-level media server: RTMP in, RTMP/HLS out |

---

## Tier 2 — Internal project documents (planning, research, and previous sessions)

These documents were produced as part of the Wonderland × Livepeer engagement and reflect synthesised research from primary sources.

| # | Source | Location | Key content used |
|---|--------|----------|-----------------|
| 14 | Gateways IA Planning Document | `/mnt/project/gateways-ia-planning.md` | Persona research (5 personas); gap analysis (26 gaps); page naming and structure; Open Questions; content priorities (P1–P3); confirmed pain points from Discord + PRs |
| 15 | Gateways Comprehensive Research Report | `/mnt/project/gateways-research-report.md` | Technical facts verification; confirmed nav pages; off-chain vs on-chain table; payment mechanics (per-pixel, per-segment); remote signer protocol steps; clearinghouse status; orchestrator discovery gap documentation; content priority matrix; outstanding REVIEW flags |
| 16 | Local Gateways Discord export | `/mnt/project/local-gateways-discord.txt` | BYOC streaming confirmation; remote signer ETH source (`signer.eliteencoder.net`); orchestrator discovery methods; clearinghouse definition (j0sh quote); NaaP dashboard integration; OrchestratorSession class spec; BYOC vs LV2V payment differences; JWT issuer implementation (Elite Encoder); x402 / ERC-3009 discussion |
| 17 | Gateway Overview Draft | `/mnt/project/gateway-overview-draft.mdx` | Video vs AI comparison tables; on-chain vs off-chain summary; remote signers and clearinghouses accordion content |
| 18 | Gateways Tab Summary | `/mnt/project/gateways-tab-summary.md` | Current page assessment; orphaned files; structural issues |
| 19 | SemanticUI-PLAN | `/mnt/project/SemanticUI-PLAN.md` | Batch structure for gateways section (B09–B12); confirmed section paths |

---

## Tier 3 — Community sources (verified, external)

| # | Source | URL | Key content used |
|---|--------|-----|-----------------|
| 20 | Elite Encoder remote signer (live service) | `https://signer.eliteencoder.net/` | Community-hosted remote signer with free ETH. Confirmed operational by Elite Encoder in #local-gateways Discord |
| 21 | Elite Encoder orch list endpoint proposal | `https://github.com/eliteprox/go-livepeer/commit/bf6f151dde3508646439f993610899ac04ee3f42` | Simple HTTP endpoint for off-chain gateway orchestrator lists without Ethereum dependency |
| 22 | Elite Encoder ComfyUI BYOC integration | `https://github.com/eliteprox/livepeer-python-gateway/commit/e80e539ee4336afe36543e1fa5380dd0d6c7c0f9` | BYOC via Python gateway as ComfyUI node backend; stable for multi-minute streams |
| 23 | Elite Encoder OrchestratorSession PR | `https://github.com/eliteprox/livepeer-python-gateway/tree/pr/pricing-session-orchestrator-info/examples` | OrchestratorSession combining discovery + payments + streaming |
| 24 | OrchestratorSession class spec (Elite Encoder gist) | `https://gist.github.com/eliteprox/a018fc30ee3366220873469c496b8c75` | Full spec for payment refresh, publish, subscription as one managed session |
| 25 | j0sh ecosystem notes gist | `https://gist.github.com/j0sh/0ee58c48ac00739bd10babc44dc293da` | Working notes: SDK design, clearinghouse architecture, discovery patterns, open problems |
| 26 | Livepeer.Cloud gateway operator guide | `https://livepeer.cloud/how-to-run-a-livepeer-gateway-node` | SPE gateway operator guide: real-world operational detail from multi-region provider |
| 27 | Immunefi Livepeer bug bounty | `https://immunefi.com/bug-bounty/livepeer/information/` | Scope: PM protocol, bonding manager, staking contracts; USDC rewards; KYC required |
| 28 | tools.livepeer.cloud | `https://tools.livepeer.cloud` | Community tool suite: stream tester, orchestrator explorer, performance dashboards |
| 29 | Loki gateway log API | `https://loki.livepeer.report` | Community Loki endpoint for gateway and orchestrator log queries |
| 30 | Titan Node YouTube (gateway setup) | `https://www.youtube.com/results?search_query=livepeer+gateway+setup+titan+node` | Community video walkthrough: binary install, flags, on-chain registration |

---

## Tier 4 — Official blog posts and marketing content

| # | Source | URL | Key content used |
|---|--------|-----|-----------------|
| 31 | A Real-Time Update to the Livepeer Network Vision | `https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/` | 72% of fees from AI inference; gateway role confirmation; path to diverse gateway ecosystem; Nov 2025 |
| 32 | Introducing Livepeer Cascade | `https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/` | Gateways as distribution layer for real-time AI video; Feb 2025 |
| 33 | Building Real-Time AI Video Effects with ComfyStream | `https://blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/` | ComfyStream via gateway → orchestrator; frame rates; architecture; Feb 2025 |
| 34 | ComfyUI and Real-Time Video AI Processing | `https://blog.livepeer.org/comfyui-and-real-time-video-ai-processing/` | DAG architecture; pipeline design; gateway perspective; Jan 2025 |
| 35 | Builder Story: StreamDiffusionTD + Daydream API | `https://blog.livepeer.org/builder-story-dotsimulate-x-daydream/` | Gateway + BYOC pipeline powering live generative video performances; Sep 2025 |
| 36 | Introducing Daydream Beta | `https://blog.livepeer.org/introducing-daydream/` | Hosted gateway and API layer; Sep 2025 |
| 37 | Daydream Scope + SDXL Launch (BusinessWire) | `https://www.businesswire.com/news/home/20251106860538/en/` | Open-source dev environment for real-time AI; Nov 2025 |
| 38 | Livepeer Blog (official) | `https://blog.livepeer.org` | General reference |

---

## Tier 5 — Third-party content

| # | Source | URL | Key content used |
|---|--------|-----|-----------------|
| 39 | AI Subnet Explainer (Coinmonks / Medium) | `https://medium.com/coinmonks/why-the-livepeer-ai-subnet-is-a-big-deal-454228dc09d3` | Architecture explainer: gateways, orchestrators, AI workers, payment flows; Jul 2024 |
| 40 | OKX Guide to Livepeer | `https://www.okx.com/en-eu/learn/livepeer-guide` | Protocol and LPT explainer for developers new to the ecosystem; Dec 2025 |
| 41 | Messari State of Livepeer | `https://messari.io/asset/livepeer` | Quarterly metrics, financial statements, protocol health |
| 42 | Web3 Index | `https://web3index.org` | Usage-based fee metrics; Livepeer demand-side revenue |
| 43 | StakingRewards (Livepeer) | `https://www.stakingrewards.com/earn/livepeer/` | Staking APR, total LPT staked, delegator return estimates |

---

## Official documentation pages used (docs.livepeer.org)

The following existing pages in the Livepeer docs were referenced but not treated as research sources — they are link destinations only:

- `https://docs.livepeer.org/gateways/run-a-gateway/gateway-setup`
- `https://docs.livepeer.org/gateways/gateway-path`
- `https://docs.livepeer.org/gateways/quickstart/AI-prompt`
- `https://docs.livepeer.org/gateways/payments/remote-signers`
- `https://docs.livepeer.org/gateways/payments/how-payments-work`
- `https://docs.livepeer.org/gateways/payments/payment-clearinghouse`
- `https://docs.livepeer.org/gateways/setup/run-a-gateway`
- `https://docs.livepeer.org/gateways/guides/operator-considerations/business-case`
- `https://docs.livepeer.org/gateways/run-a-gateway/requirements/on-chain`
- `https://docs.livepeer.org/gateways/setup/configure/ai-configuration`
- `https://docs.livepeer.org/gateways/setup/configure/video-configuration`
- `https://docs.livepeer.org/gateways/setup/configure/dual-configuration`
- `https://docs.livepeer.org/gateways/setup/configure/pricing-configuration`
- `https://docs.livepeer.org/gateways/setup/transcoding`
- `https://docs.livepeer.org/gateways/setup/connect/connect-with-offerings`
- `https://docs.livepeer.org/gateways/setup/connect/discover-offerings`
- `https://docs.livepeer.org/gateways/setup/connect/lp-marketplace`
- `https://docs.livepeer.org/gateways/setup/monitor/monitor-and-optimise`
- `https://docs.livepeer.org/gateways/guides/roadmap-and-funding/operator-support`
- `https://docs.livepeer.org/gateways/about/architecture`
- `https://docs.livepeer.org/gateways/gateway-tools/gateway-introspection`
- `https://docs.livepeer.org/gateways/gateway-tools/gateway-middleware`
- `https://docs.livepeer.org/gateways/resources/technical/configuration-flags`
- `https://docs.livepeer.org/gateways/resources/technical/cli-commands`
- `https://docs.livepeer.org/gateways/resources/technical/technical-architecture`
- `https://docs.livepeer.org/gateways/resources/technical/arbitrum-exchanges`
- `https://docs.livepeer.org/gateways/resources/technical/arbitrum-rpc`
- `https://docs.livepeer.org/gateways/resources/technical/contract-addresses`
- `https://docs.livepeer.org/gateways/resources/technical/orchestrator-offerings`
- `https://docs.livepeer.org/gateways/resources/technical/bridge-lpt-to-arbitrum`
- `https://docs.livepeer.org/gateways/resources/technical/ai`
- `https://docs.livepeer.org/gateways/resources/technical/cli-http-api`

---

## REVIEW flags (unverified facts requiring SME confirmation)

The following facts were used in the produced content but could not be verified independently and must be confirmed before publication.

| # | Claim | Source | Owner | Action |
|---|-------|--------|-------|--------|
| R1 | `signer.eliteencoder.net` is still operational and free | #local-gateways Discord (last confirmed in Discord export) | Elite Encoder / Community | Verify in Discord before publishing tutorial |
| R2 | ETH deposit ≈ 0.065 ETH + reserve ≈ 0.03 ETH | gateways-research-report.md | Rick / Mehrdad | Verify current amounts — ETH price volatility means these numbers change |
| R3 | go-livepeer supports `-network offchain` and `-byoc` flags in latest release | go-livepeer source (deduced from PRs) | Rick | Confirm flag names and defaults in latest tagged release |
| R4 | `livepeer/ai-runner:live-base` is the correct and current Docker base image tag | ai-runner Dockerfile in source | Rick | Confirm current tag — `live-base` may be pinned to a SHA in production |
| R5 | `loki.livepeer.report` is still operational | gateways-research-report.md (flagged as unverified) | Rick | Confirm availability before publishing gateway-introspection references |
| R6 | j0sh's remote discovery PR has merged to `livepeer-python-gateway` main | #local-gateways Discord (discussed, merge status uncertain) | j0sh | Check `github.com/j0sh/livepeer-python-gateway` main branch |
| R7 | BYOC PR #3866 has merged or equivalent BYOC remote signer support is in a release | PR #3866 (draft status at time of research) | Rick / Elite Encoder | Confirm merge status |
| R8 | The Python gateway SDK entry point is `start_byoc_job()` | Deduced from `start_lv2v` pattern in SDK source | j0sh | Verify actual BYOC entry point method name — may differ from `start_lv2v` |
| R9 | 72% of network fees from AI as of Nov 2025 | Blog post: "A Real-Time Update to the Livepeer Network Vision" | Official Livepeer blog | Treat as accurate but note it may have changed |
| R10 | NaaP dashboard has a public URL for testing | gateways-research-report.md (flagged as unverified) | Qiang Han | Confirm whether naap.livepeer.org or equivalent is public |

---

*End of sources document. 43 sources across 5 tiers. 10 REVIEW flags outstanding.*
