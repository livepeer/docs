# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`
- `v2/orchestrators/guides/payments-and-pricing/payments.mdx`
- `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
- `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
- `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`
- `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`
  - claim families: none
  - extracted: The evaluator generates a random number from the ticket data and the current block hash, then checks whether the output falls below the win threshold.
  - extracted: The expected value of a single ticket equals the per job fee: Over a large number of tickets, the ETH received converges to the amount you would have been paid if every job had its own transaction.
  - extracted: At low job volumes, the variance is high — a node processing 10 jobs per day might see zero redemptions some days and two on others.
  - extracted: On a standard single node orchestrator, it runs as part of the main process and requires no separate configuration.
- `v2/orchestrators/guides/payments-and-pricing/payments.mdx`
  - claim families: none
  - extracted: Gas costs are low, but your wallet must hold ETH on Arbitrum: Factor Value Gas per redemption transaction ~100,000 – 200,000 gas Typical Arbitrum gas price 0.01 – 0.1 gwei Approximate ETH cost per redemption ~$0.01 – $0.05 USD Keep a minimum of 0.01 ETH on Arbitrum in your orchestrator wallet to prevent redemption failures.
  - extracted: Video vs AI payment differences The probabilistic payment system is the same for both workload types, but the fee structure differs: Transcoding is paid per segment — approximately every 2 seconds of video processed.
  - extracted: Pricing unit: per segment (or per pixel, depending on configuration) Job frequency: continuous for active live streams Payment trigger: one ticket per segment delivered Selection factor: stake weighted routing; higher total stake = more segments routed to you Typical fee level: low per segment (highly competitive, commoditised pipeline) The transcoding fee rate is set by your flag in Wei per pixel.
  - extracted: Pricing unit: per output pixel (image pipelines), per ms of audio (audio to text), per token (LLM), or per frame (live video) Job frequency: per request (not continuous) Payment trigger: one ticket per completed inference job Selection factor: capability first, price second; stake weight is a secondary factor Typical fee level: higher per job than transcoding (GPU intensive work) AI fees are configured in via the field.
- `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
  - claim families: none
  - extracted: Delegated LPT is the mechanism by which third party token holders increase your orchestrator's total stake.
  - extracted: More stake means a larger share of protocol inflation, stronger positioning in the transcoding queue, and greater credibility in the network.
  - extracted: Why delegators matter An orchestrator's total stake is the sum of its own self bonded LPT and all LPT delegated to it by third parties.
  - extracted: The orchestrators near the top of the active set by stake captured disproportionately more of both inflation rewards and job volume in every historical reporting period.
- `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
  - claim families: none
  - extracted: Understanding both is essential before you decide how to configure your node or grow your stake.
  - extracted: For the step by step operations of reward calling and commission setting, continue to .
  - extracted: The protocol mints new LPT every round and distributes it to active staked orchestrators.
  - extracted: You must call each round to claim your share.
- `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`
  - claim families: none
  - extracted: As an orchestrator, your vote carries weight proportional to your total stake — including the delegated LPT entrusted to you by your delegators.
  - extracted: A LIP can change anything from protocol parameters (inflation floor, treasury allocation) to entirely new features (remote signers, AI pipeline support, clearinghouse architecture).
  - extracted: The process follows a defined path: Governance is stake weighted.
  - extracted: A vote from an orchestrator with 100,000 LPT total stake counts for far more than one with 1,000 LPT.
- `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`
  - claim families: none
  - extracted: This page covers the operational mechanics of how LPT rewards flow, how to call reliably, the economics of when calling reward is profitable, and how ETH fees move from job to wallet.
  - extracted: How LPT rewards flow Every round (approximately every 22 hours on Arbitrum), the protocol mints new LPT and makes it available to the active orchestrator set.
  - extracted: The more stake you have bonded — your own plus delegated — the more LPT you receive per round.
  - extracted: The inflation rate The inflation rate is a dynamic protocol parameter: Increases each round when bonded LPT is below ~50% of total supply Decreases each round when bonded LPT is above ~50% of total supply Current direction (2026): declining — bonded participation has exceeded 50%, so the rate falls by a small amount each round towards its minimum floor The Explorer shows current inflation rate and target participation at .

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
- `orch-dual-revenue-model` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - summary: Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.
  - primary evidence: repo-file → v2/orchestrators/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 9 matched terms
- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
  - primary evidence: repo-file → v2/orchestrators/setup/rcs-requirements.mdx
  - evidence why: source priority 90; 11 matched terms; current-language match 10
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

## Time-Sensitive Claims

- `orch-reward-profitability-threshold` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
  - primary evidence: repo-file → v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - evidence why: source priority 90; repo file missing
- `orch-consumer-nvenc-session-cap` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; repo file missing
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

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Active set, active set
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-dual-revenue-model` (operator-revenue-model)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: ETH job fees, LPT inflation rewards
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: LPT inflation rewards, Service Fees Scale, inflation as a base
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: 24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`: 16 GB, 24 GB, 8 GB
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
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | guide | inferred-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-dual-revenue-model` |
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
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |

## Evidence Sources

- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - role: primary
  - checked: 2026-03-16
  - result: official page fetched but signal missing
  - rank: 100; score: 100
  - source metadata: reachable
  - why selected: source priority 100
  - why not primary: highest ranked matched source
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

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 5
- evidence_sources: 17
- explicit_page_targets: 6
- inferred_page_targets: 24

## Validation

- target_files: 6
- claim_families: 0
- contradictions: 5
- evidence_sources: 17
