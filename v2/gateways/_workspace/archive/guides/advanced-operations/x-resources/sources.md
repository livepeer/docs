# Advanced Operations — Sources & Research Log

**Section:** Gateways → Guides → Advanced Operations
**Pages:** Production Hardening, Orchestrator Selection, Scaling, Gateway Middleware, Publishing
**Date:** 2026-03-13

---

## Sources consulted

| # | Source | Tier | What was used |
|---|--------|------|---------------|
| 1 | `v2-refs--configuration-flags.mdx` (repo) | 1 | All flag names, defaults, and descriptions. Primary reference for every flag cited across all pages. |
| 2 | `v2-refs--technical-architecture.mdx` (repo) | 1 | Network layer diagrams, dual gateway architecture, pipeline flow. Used in Production Hardening and Scaling. |
| 3 | `v2-refs--orchestrator-offerings.mdx` (repo) | 1 | OrchestratorInfo protobuf structure, selection algorithm (random/stake/price weights), `/getNetworkCapabilities` response shape. Used in Orchestrator Selection. |
| 4 | `v2-refs--gpu-support.mdx` (repo) | 1 | GPU model list, NVENC/NVDEC support, concurrent session context. Used in Scaling. |
| 5 | `v1--set-session-limits.mdx` (repo) | 1 | Session limit benchmarking procedure, `livepeer_bench` tool usage, real-time duration ratio methodology. Used in Scaling. |
| 6 | `v2-run--dual-configuration.mdx` (repo) | 1 | Dual gateway architecture (BroadcastSessionsManager + AISessionManager), per-segment and per-pixel payment model. Used in Scaling. |
| 7 | `v2-run--lp-marketplace.mdx` (repo) | 1 | Marketplace role (orchestrators publish, gateways broker), not a consumer-facing marketplace. Used in Publishing and Orchestrator Selection. |
| 8 | `v2-setup--connect-with-offerings.mdx` (repo) | 1 | `/getNetworkCapabilities` source code references, NetworkCapabilities structure. Used in Orchestrator Selection. |
| 9 | `v2-run--discover-offerings.mdx` (repo) | 1 | Discovery process steps, `/getNetworkCapabilities` endpoint handler. Used in Orchestrator Selection. |
| 10 | `ctx-gwnew--content-brief-gwe-clearinghouse-middleware.md` | 2 | Middleware vs clearinghouse distinction, persona definitions (B Provider, E Platform Builder), NaaP context, auth patterns. Used in Gateway Middleware. |
| 11 | `ctx-gwnew--content-brief-gwoq5-publish-gateway.md` | 2 | Gateway discoverability research mandate, confirmation that no formal gateway registry exists, source hierarchy for publishing. Used in Publishing. |
| 12 | `ctx-gwnew--content-brief-gwd-addendum-composable.md` | 2 | Composable architecture addendum — confirmed off-chain AI gateway stateless design. Used in Scaling and Production Hardening. |
| 13 | `v2-tools--gateway-middleware.mdx` (repo) | 1 | Existing stub — confirmed content was minimal (26 lines, BYOC mention only). Replaced entirely. |
| 14 | `v2-advops--production-ops.mdx` (repo) | 1 | Existing stub — confirmed topic list (multi-region, LB, security, HA, DR). |
| 15 | `v2-advops--orchestrator-tiering.mdx` (repo) | 1 | Existing stub — confirmed topic list (SLA selection, tiers, scoring, failover). |
| 16 | `gateways-research-report.md` (project) | 2 | Prior research findings: confirmed no YouTube videos verified, EliteEncoder signer, leaderboard URL, pain points log. |
| 17 | `local-gateways-discord.txt` (project) | 3 | Searched for: production, nginx, TLS, load balancing, security, orchAddr, blocklist, orchestrator selection. Limited relevant content — confirmed community focus is on setup and off-chain mode rather than production ops. |
| 18 | `Remote_signers.md` (project) | 1 | Off-chain stateless design confirmation. Informing the HA section for off-chain gateways. |
| 19 | go-livepeer source — `discovery/discovery.go` | 1 | Discovery process source code reference (cited in connect-with-offerings). |
| 20 | go-livepeer source — `server/handlers.go` | 1 | `/getNetworkCapabilities` handler source reference. |
| 21 | go-livepeer source — `common/types.go` | 1 | NetworkCapabilities and OrchNetworkCapabilities struct definitions. |

---

## Technical claims and verification status

| Claim | Source | Verified? |
|-------|--------|-----------|
| Default session limit is 10 | `v1--set-session-limits.mdx` — explicit statement | Yes |
| livepeer_bench benchmarking procedure | `v1--set-session-limits.mdx` | Yes |
| Real-time duration ratio target ≤ 0.8 | `v1--set-session-limits.mdx` | Yes |
| `-maxSessions` sets session limit | `v2-refs--configuration-flags.mdx` | Yes |
| `-orchBlocklist` is comma-separated ETH addresses | `v2-refs--configuration-flags.mdx` | Yes |
| `-selectRandFreq`, `-selectStakeWeight`, `-selectPriceWeight`, `-selectPriceExpFactor` flags exist | `v2-refs--configuration-flags.mdx` | Yes |
| `-minPerfScore` minimum performance score flag | `v2-refs--configuration-flags.mdx` | Yes |
| `-orchPerfStatsUrl` performance stats URL flag | `v2-refs--configuration-flags.mdx` | Yes |
| `-orchMinLivepeerVersion` minimum version filter | `v2-refs--configuration-flags.mdx` | Yes |
| `-discoveryTimeout` configurable | `v2-refs--configuration-flags.mdx` | Yes |
| `-serviceAddr` for public service URI | `v2-refs--configuration-flags.mdx` | Yes |
| `-gatewayHost` for external hostname | `v2-refs--configuration-flags.mdx` | Yes |
| `-region` flag for regional deployment | `v2-refs--configuration-flags.mdx` | Yes |
| `-liveAIAuthWebhookUrl` and `-liveAIAuthApiKey` flags | `v2-refs--configuration-flags.mdx` | Yes |
| `-aiServiceRegistry` flag exists | `v2-refs--configuration-flags.mdx` | Yes |
| Off-chain AI gateways are stateless | `Remote_signers.md`, research report | Yes |
| No formal gateway registry exists on-chain | Research report + publish brief | Yes |
| OrchestratorInfo protobuf structure | `v2-refs--orchestrator-offerings.mdx` | Yes |
| Four-factor scoring: random/stake/price/perf | `v2-refs--orchestrator-offerings.mdx` | Yes |
| `/getNetworkCapabilities` endpoint | `v2-setup--connect-with-offerings.mdx`, source code | Yes |
| Marketplace is not consumer-facing | `v2-run--lp-marketplace.mdx` — explicit statement | Yes |
| NVENC/NVDEC uses dedicated hardware blocks | `v2-refs--gpu-support.mdx` context | Yes (general knowledge, GPU support doc confirms NVIDIA support) |

---

## Outstanding REVIEW flags

These items are flagged inline in the MDX files and require SME verification before the pages can be merged.

| Flag | Pages | Owner |
|------|-------|-------|
| `/health` endpoint — confirm it exists, returns 200, and checks orchestrator connectivity | Production Hardening | Rick |
| Prometheus metric names: `livepeer_current_sessions_total`, `livepeer_max_sessions_total`, `livepeer_orchestrator_swaps`, `livepeer_success_rate`, `livepeer_pm_sender_reserve_balance` | Production Hardening, Orchestrator Selection, Scaling | Rick |
| `/hardware/stats` and `/hardware/info` endpoint paths — confirm they are exposed on gateway HTTP port in current go-livepeer | Scaling | Rick |
| `-region` flag — confirm available values and whether they affect orchestrator latency scoring | Production Hardening | Rick |
| Dual-active on-chain gateway from same ETH address — confirm whether this causes ticket conflicts | Production Hardening | Rick or Mehrdad |
| `-maxAttempts` — confirm it applies to gateway retry on orchestrator failure (not just transcode attempts) | Orchestrator Selection | Rick |
| AI inference retry flag/count — what controls retry attempts for AI jobs on orchestrator failure | Orchestrator Selection | Rick or j0sh |
| Livepeer Explorer AI leaderboard — confirm it is live and what metrics it shows | Orchestrator Selection | Rick |
| Leaderboard API URL — confirm `https://leaderboard.livepeer.org/api/aggregated_stats` is current | Orchestrator Selection | Rick |
| `-liveAIAuthWebhookUrl` behaviour — confirm webhook request/response format for RTMP auth | Gateway Middleware | Rick or j0sh |
| `-serviceAddr` vs `-gatewayHost` interaction — confirm which is used for what in current go-livepeer | Publishing | Rick |
| tools.livepeer.cloud — confirm whether it lists gateways and how to request a listing | Publishing | Community |
| AIServiceRegistry contract — confirm current deployment status in production | Publishing | Rick or Mehrdad |
| On-chain gateway registry roadmap — confirm current Foundation priority and timeline | Publishing | Foundation |

---

## Video content

No embeddable tutorials found for advanced gateway operations topics specifically. The research report from prior sessions confirmed no Titan Node or Livepeer Foundation videos were verified for gateway topics.

Searches that should be run and reported back:
- `youtube.com/@TitanNode` — search for "gateway" "production" "multi-region"
- `youtube.com/@LivepeerVideo` — search for "gateway operator" "scaling"
- `livepeer.cloud/blog` — search for production ops writeups post-2024

If videos are found, recommended placement:
- Production Hardening: systemd setup or reverse proxy tutorial
- Orchestrator Selection: network overview or marketplace explainer
- Scaling: benchmarking walkthrough

---

## Pain points (from Discord and research report)

| Pain point | Source | Resolution in pages |
|------------|--------|---------------------|
| No explanation of `-broadcaster` → `-gateway` rename | Research report pain points | Not directly addressed in these guides (covered in setup pages), but flag names are consistent throughout |
| Pricing confusion: gateway sets max price it PAYS orchestrators | Research report | Noted in Publishing under capability advertising |
| Discovery: "where do I find AI-capable orchestrators?" | Research report | Addressed in Orchestrator Selection — Explorer, tools.livepeer.cloud, `/getNetworkCapabilities` |
| Session limits not documented for production ops | Gap from stubs | Full benchmarking procedure in Scaling |
| No clear split-vs-share guidance for dual gateways | Gap from stubs | Decision guide table in Scaling |
| No guidance on middleware patterns | Gap — existing stub was 26 lines | Full Gateway Middleware page |
| No formal gateway discoverability | Research report + publish brief | Documented honestly in Publishing |

---

## Known gaps not addressed in this section

These topics were identified but are out of scope for this five-page section:

- **Monitoring dashboards**: Prometheus scrape configuration, Grafana dashboards — belongs in the Monitoring section
- **BYOC pipeline routing via middleware**: BYOC-specific routing patterns — belongs in the AI Pipelines section or BYOC guide
- **Remote signer HA**: Running multiple remote signers for redundancy — belongs in the Remote Signers guide
- **Deposit management automation**: Automating ETH deposit top-ups — belongs in the Payments section
