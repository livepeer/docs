# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`
  - claim families: none
  - extracted: What it shows: On chain state as written to Arbitrum — stake, cuts, reward calls, fee earnings Protocol level data: your registered service URI, your active/inactive status Your delegators and their individual stake amounts What it does not show: Real time node health or uptime (use Prometheus for this) Off chain pool worker contributions (pool workers are invisible to the protocol) AI model warm status or per pipeline job counts (use ) Which gateways are currently routing work to you (use the Loki gateway API) Active Set status The active set is the top 100 orchestrators by total stake at each round boundary.
  - extracted: Only active set members receive transcoding work.
  - extracted: What to watch: Your rank among all orchestrators Whether you are currently active or inactive Your trend over the past 30 days If you are not in the active set: Your stake (self stake plus delegated stake) is insufficient to rank in the top 100.
  - extracted: The gap between your stake and the 100th place orchestrator is the amount you need to close.
- `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`
  - claim families: none
  - extracted: The metrics you will actually act on: Current active sessions, max session capacity, sessions per GPU.
  - extracted: High latency means your GPU is saturated or a pipeline is slow — both affect gateway scoring.
  - extracted: Other available metrics: GPU utilisation (where reported by the NVIDIA driver) ETH balance and pending fees Round number and reward call status Option A: Docker monitoring stack (fastest setup) Livepeer maintains a Docker image that bundles Prometheus, Grafana, and starter dashboard templates.
  - extracted: Useful Grafana panels to build: Panel Query pattern What it shows Session capacity vs How close to capacity you are Segment success rate Transcoding health over time Reward call tracker Alerts on missed rounds Whether reward is being called reliably AI job latency AI pipeline processing time Performance per pipeline Monitoring AI runner containers AI inference workloads run in the Docker container alongside go livepeer.
- `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`
  - claim families: none
  - extracted: These are the tools you reach for when you want to verify you are in the active set, track earnings, diagnose a routing problem, monitor GPU health, or understand what the network is doing.
  - extracted: Your orchestrator profile lives at: See your rank by total stake (own + delegated).
  - extracted: The top 100 active orchestrators receive transcoding work.
  - extracted: Round by round history of reward calls.
- `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`
  - claim families: none
  - extracted: Check your current session count against your configured limit: 2.
  - extracted: If you have spare GPU capacity, increase in your launch command 3.
  - extracted: If you are already at GPU VRAM limits, you cannot safely increase sessions — you need to reduce the model size, reduce output dimensions, or add GPU capacity 4.
  - extracted: Level limit warning" icon="circle question" What it means: The source video segment being transcoded has a bitrate that exceeds the H.264 level limit for its resolution.

## Verified Claims

- `orch-price-ceiling-filtering` (verified, high)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima.
  - primary evidence: repo-file → v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - evidence why: source priority 90; 10 matched terms

## Conflicted Claims

- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
  - primary evidence: official-page → https://explorer.livepeer.org/orchestrators
  - evidence why: source priority 100
- `orch-siphon-github-current` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
  - primary evidence: github-repo → https://github.com/Stronk-Tech/OrchestratorSiphon
  - evidence why: source priority 60; 4 matched terms; recency 55d; state active
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - evidence why: source priority 90; 10 matched terms
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
  - primary evidence: repo-file → v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - evidence why: source priority 90; repo file missing
- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
  - primary evidence: repo-file → v2/orchestrators/setup/rcs-requirements.mdx
  - evidence why: source priority 90; 11 matched terms; current-language match 10
- `orch-dual-revenue-model` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - summary: Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.
  - primary evidence: repo-file → v2/orchestrators/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 9 matched terms
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - evidence why: source priority 90; 9 matched terms

## Time-Sensitive Claims

- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
- `orch-consumer-nvenc-session-cap` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; repo file missing
- `orch-reward-profitability-threshold` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
  - primary evidence: repo-file → v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - evidence why: source priority 90; repo file missing

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Active set, active set
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-siphon-github-current` (community-tooling-status)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: OrchestratorSiphon
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Siphon
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Siphon
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: GPU machine can restart, reward calling
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: reward calling, reward safety
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Reward calling, reward calling
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Reward calling, reward calling
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`: Capability, pricing, and latency matter more than active set position for many AI jobs.
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: 24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`: 16 GB, 24 GB, 8 GB
- `orch-dual-revenue-model` (operator-revenue-model)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: ETH job fees, LPT inflation rewards
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: LPT inflation rewards, Service Fees Scale, inflation as a base
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Pool worker, solo Orchestrator
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One — for staking.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/requirements.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/requirements.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/setup/configure.mdx` | setup | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/connect-and-activate.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/guide.mdx` | setup | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/r-monitor.mdx` | setup | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |

## Evidence Sources

- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - role: primary
  - checked: 2026-03-16
  - result: official page fetched but signal missing
  - rank: 100; score: 100
  - source metadata: reachable
  - why selected: source priority 100
  - why not primary: highest ranked matched source
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: primary
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 60; score: 108
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech, siphon, community tooling status
  - why selected: source priority 60; 4 matched terms; recency 55d; state active
  - why not primary: highest ranked matched source
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: GPU machine can restart, keystore stays on a secure, isolated machine, without you missing rewards, keystore isolated, missed rewards, reward calling, split setup, split setup reward safety, A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages., siphon setup
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: weaker
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 60; score: 88
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech
  - why selected: source priority 60; 2 matched terms; recency 55d; state active
  - why not primary: lower source priority than primary evidence
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 208
  - source metadata: repo-current
  - matched terms: 16 GB for basic batch AI, 24 GB+ for the full pipeline suite, 8 GB for LLM-only, 16 gb, 24 gb, 8 gb, batch ai, vram, hardware vram minimums, Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current., requirements
  - why selected: source priority 90; 11 matched terms; current-language match 10
  - why not primary: highest ranked matched source
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-session-limit-default` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 162
  - source metadata: repo-current
  - matched terms: 10 concurrent sessions, The default is 10, maxSessions, maxsessions = 10, session limit, transcoding session cap, configure
  - why selected: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
  - why not primary: highest ranked matched source
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 162
  - source metadata: repo-current
  - matched terms: 100 Mbps, 6 Mbps per stream, bandwidth limit, 6 mbps symmetric, bandwidth per stream, transcoding bandwidth planning, configure
  - why selected: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
  - why not primary: highest ranked matched source
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-dual-revenue-model` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: inflation as a base, service fees scale, variable upside, ETH job fees, LPT inflation rewards, two independent streams, operator revenue model, Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model., operator rationale
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-dual-revenue-model` → repo-file: v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: ETH job fees, LPT inflation rewards, two independent streams, inflation as a base, service fees scale, operator revenue model, Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model., operator rationale
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: LPT stake required, No, Pool worker, no lpt required, on-chain ops, solo orchestrator, staking, Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path., setup options
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 160
  - source metadata: repo-current
  - matched terms: No LPT, just a GPU, Pool worker, not an Orchestrator at all, no lpt required, solo orchestrator, staking, setup options
  - why selected: source priority 90; 7 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: Price too high, maxPricePerCapability, receive no transcoding or AI jobs, gateways filter orchestrators by price, priceperunit, prices are too high, will not receive work, gateway price filtering, Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima., configure
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: gateways will route jobs to lower-priced orchestrators, pricePerUnit, too high, gateways filter orchestrators by price, prices are too high, will not receive work, gateway price filtering, Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima., configure
  - why selected: source priority 90; 9 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 7
- evidence_sources: 20
- explicit_page_targets: 6
- inferred_page_targets: 24

## Validation

- target_files: 4
- claim_families: 0
- contradictions: 7
- evidence_sources: 20
