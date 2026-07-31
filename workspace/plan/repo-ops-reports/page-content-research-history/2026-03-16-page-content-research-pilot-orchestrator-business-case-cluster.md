# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
  - claim families: `orch-bandwidth-per-stream-planning`, `orch-session-limit-default`
  - extracted: It simulates the real network workload — segments arriving in real time, multiple concurrent sessions — and tells you exactly how many streams your GPU can handle without falling behind.
  - extracted: It: Takes an HLS stream and a set of output rendition profiles as input Simulates live mode by default — queuing segments one by one as they arrive, just as a real gateway would send them Runs multiple concurrent transcoding sessions (configurable) Outputs per segment metrics as CSV and a summary table The key output metric is the Real Time Duration Ratio: total transcoding time divided by total source duration.
  - extracted: A ratio below 1.0 means you're transcoding faster than real time.
  - extracted: A ratio above 1.0 means your GPU is falling behind.
- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - claim families: `orch-active-set-threshold`, `orch-bandwidth-per-stream-planning`, `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-pool-vs-solo-prerequisites`, `orch-reward-profitability-threshold`
  - extracted: Understanding both matters before you begin: Revenue stream How it works Depends on ETH job fees Gateways pay you per transcoding segment or AI inference job Your capability, pricing, performance, uptime LPT inflation rewards Protocol mints LPT each round; you claim your share by calling Your total bonded stake, inflation rate, reward call reliability Neither stream pays from day one without setup.
  - extracted: ETH fees require gateways to route work to you.
  - extracted: LPT rewards require bonded LPT, an active orchestrator registration, and a running node that calls each round.
  - extracted: Consumer RTX cards (3060, 3070, 3080) are common.
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - claim families: `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-session-limit-default`
  - extracted: This page is a practical reference: GPU support policy, session limits by card, VRAM tiers by pipeline, and the minimum system stack needed before your node goes live.
  - extracted: GPU vendor support NVIDIA is the supported GPU vendor for go livepeer.
  - extracted: AMD and Intel GPUs are not supported for hardware accelerated transcoding or AI inference.
  - extracted: NVIDIA CUDA is required for both NVENC video transcoding and all AI inference pipelines.
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - claim families: `orch-bandwidth-per-stream-planning`, `orch-session-limit-default`
  - extracted: Your session limit is the ceiling on how many concurrent transcoding streams your node will accept.
  - extracted: Why session limits matter Go livepeer has a default maximum of 10 concurrent sessions ( ).
  - extracted: Bandwidth per stream Every transcoding job requires both download (receiving the source stream) and upload (delivering output renditions).
  - extracted: The current standard output rendition set in is: Profile Resolution Output bitrate 426×240 250 kbps 640×360 800 kbps 854×480 1,600 kbps 1,280×720 3,000 kbps Total output 5,650 kbps Upload bandwidth per stream: approximately 5.7 Mbps (sum of all output rendition bitrates).

## Verified Claims

- `orch-siphon-github-current` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-business-case-cost-viability` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - summary: Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-reward-profitability-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.

## Time-Sensitive Claims

- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`: This page is a practical reference: GPU support policy, session limits by card, VRAM tiers by pipeline, and the minimum system stack needed before your node goes live.
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: 24 GB, 8 GB
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`: 16 GB, 24 GB, 8 GB, 8–12 GB, A40, RTX 3090
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: 24 GB, 8–24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB
- `orch-business-case-cost-viability` (business-case-viability)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: 2 years, payback
- `orch-reward-profitability-threshold` (reward-profitability)
  - action: verify-more
  - `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`: This page covers the operational mechanics of how LPT rewards flow, how to call reliably, the economics of when calling reward is profitable, and how ETH fees move from job to wallet.
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: 0.00005 ETH, approximately every 22 hours
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: active set
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: top 100
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`: active set, top 100
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`: No LPT required, Pool worker, Solo orchestrator, solo orchestrator
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: Pool worker, Solo orchestrator, pool worker, solo orchestrator
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: pool worker, solo orchestrator
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One — for staking.
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: Reward safety, keystore secure, reward, reward calling
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`: Keystore isolated, Reward safety, reward, reward calling
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: Capability match

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | canonical-owner | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | update-now | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | update-now | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-options/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/benchmarking.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/benchmarking.mdx` | guide | dependent-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | canonical-owner | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | dependent-page | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | dependent-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/operator-considerations/session-limits.mdx` | guide | canonical-owner | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/session-limits.mdx` | guide | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` | guide | canonical-owner | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |

## Evidence Sources

- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/operator-considerations/hardware-reference.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/operator-considerations/session-limits.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/operator-considerations/benchmarking.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-session-limit-default` → repo-file: v2/orchestrators/guides/operator-considerations/session-limits.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/operator-considerations/hardware-reference.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - checked: 2026-03-16
  - result: official page fetched but signal missing
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-options/setup-navigator.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-options/siphon-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched

## Validation

- target_files: 4
- claim_families: 7
- contradictions: 7
- evidence_sources: 16

