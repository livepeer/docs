# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
  - claim families: `orch-pool-worker-offchain-payouts`
  - extracted: The pool operator handles staking, on chain registration, reward calling, and routing — you provide the GPU, you earn for the work it processes.
  - extracted: From the network's perspective, it is one orchestrator with one stake.
  - extracted: The pool operator: Holds and manages the stake Sets prices and advertises capabilities Receives work from gateways Routes segments to your GPU for processing Distributes payouts to pool members You: Run a transcoding worker (a go livepeer process in worker mode, or the pool operator's own client) Process the segments routed to your GPU Receive off chain payouts based on the work your GPU completed There is no on chain record of your individual contribution.
  - extracted: Pool vs solo orchestrator Pool worker Solo orchestrator LPT stake required No Yes On chain registration No (pool handles this) Yes Set your own prices No Yes Direct on chain payouts No (via pool operator) Yes Ops complexity Low Medium–High Trust requirement Pool operator Yourself Reward calling responsibility Pool operator You (or Siphon) Good for GPU owners wanting passive income Operators wanting full control Step 1: Choose a pool The Livepeer community currently has a small number of active public pools.
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
  - claim families: `orch-ot-split-capacity-sum`
  - extracted: The split setup separates them: one machine handles protocol operations (on chain interactions, job routing, reward calling) and one or more machines handle the GPU work.
  - extracted: Reward calls come from this machine, independent of GPU machine availability.
  - extracted: Architecture Data flow: 1.
  - extracted: A Gateway connects to the Orchestrator on port 8935 (the public service URI) 2.
- `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - claim families: `orch-bandwidth-per-stream-planning`, `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-consumer-nvenc-session-cap`, `orch-session-limit-default`
  - extracted: This page covers GPU support policy, session limits by card tier, VRAM requirements by AI pipeline, the minimum system stack, capacity testing, and the checklist to run before activating on the network.
  - extracted: GPU Vendor Support NVIDIA is the supported GPU vendor for go livepeer.
  - extracted: AMD and Intel GPUs are not supported for hardware accelerated transcoding or AI inference.
  - extracted: NVIDIA CUDA is required for both NVENC video transcoding and all AI inference pipelines.
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - claim families: `orch-active-set-threshold`, `orch-ai-routing-capability-based`, `orch-batch-ai-vram-threshold`, `orch-ot-split-capacity-sum`, `orch-pool-vs-solo-prerequisites`, `orch-pool-worker-offchain-payouts`, `orch-price-ceiling-filtering`, `orch-siphon-github-current`, `orch-siphon-reward-isolation`
  - extracted: At a Glance Alternative What it solves What it requires Guide Pool worker Earn from GPU compute without running an Orchestrator at all no LPT, no on chain management GPU; a pool to join; no stake O T split Separate protocol management from GPU workload processing; scale Transcoder machines independently Two machines; LPT stake; Siphon Keep the keystore on an isolated machine; GPU machine can restart without missing LPT rewards Two machines; LPT stake; Python on secure machine Pool Worker A pool worker does not run an Orchestrator.
  - extracted: The pool operator handles all on chain operations: staking, reward calling, pricing, Gateway relationships.
  - extracted: The Orchestrator process protocol, routing, reward calling, keystore runs on one machine.
  - extracted: Instead of running , the secure machine runs OrchestratorSiphon: a lightweight Python tool that handles only on chain operations reward calling, fee withdrawal, governance voting, service URI updates.
- `v2/orchestrators/setup/rcs-requirements.mdx`
  - claim families: `orch-active-set-threshold`, `orch-batch-ai-vram-threshold`, `orch-pool-vs-solo-prerequisites`, `orch-pool-worker-offchain-payouts`
  - extracted: Hardware NVIDIA GPU with NVENC/NVDEC support installed and visible via NVIDIA driver version 525+ (Linux) or 527+ (Windows) CUDA 12.0+ installed (or plan to use the Docker image, which bundles CUDA) CPU: 4+ cores minimum, 8+ recommended RAM: 16 GB minimum, 32 GB recommended Storage: 100 GB SSD minimum (NVMe recommended for AI model weights) For AI inference, VRAM is the primary constraint: 8 GB for LLM only, 16 GB for basic batch AI, 24 GB+ for the full pipeline suite.
  - extracted: Software OS: Linux (Ubuntu 22.04+ recommended).
  - extracted: Docker Engine installed if using the container install path NVIDIA Container Toolkit installed if using Docker with GPU ( should succeed) and available (Linux/macOS) or PowerShell (Windows) Network Port 8935 TCP open to the public internet (firewall, router NAT, cloud security group) Static IP or stable hostname (dynamic DNS if on a home connection) Bandwidth: 100 Mbps symmetric minimum; 1 Gbps recommended for multi stream transcoding Latency: Under 50 ms to major regions improves gateway selection probability Verify port access from an external machine: Wallet and tokens Ethereum wallet — an existing account or go livepeer will create one on first run ETH on Arbitrum One — for gas (activation, reward calls, ticket redemption).
  - extracted: The amount needed to enter the active set (top 100) varies — check for the current threshold.

## Verified Claims

- `orch-pool-worker-offchain-payouts` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows.
- `orch-ot-split-capacity-sum` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
  - summary: O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing.
- `orch-price-ceiling-filtering` (verified, high)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima.

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-siphon-github-current` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-consumer-nvenc-session-cap` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.

## Time-Sensitive Claims

- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-commercial-model-warmth` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `orch-reward-profitability-threshold` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: This page covers GPU support policy, session limits by card tier, VRAM requirements by AI pipeline, the minimum system stack, capacity testing, and the checklist to run before activating on the network.
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One — for staking.
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: GPU machine can restart, reward calling
- `orch-siphon-github-current` (community-tooling-status)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: 3 concurrent NVENC encode sessions, 3 concurrent sessions
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Your best options: Transcoding — you can handle video transcoding sessions competitively with any modern NVIDIA GPU; NVENC session caps on consumer cards apply, but can be worked around.
  - `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx`: NVENC session caps on consumer GPUs Consumer NVIDIA GPUs (GTX/RTX series) have a hardware enforced cap on the number of concurrent NVENC encoding sessions.
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Stake plays a much smaller role, capability match

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | canonical-owner | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | canonical-owner | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` | guide | canonical-owner | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |

## Evidence Sources

- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - checked: 2026-03-16
  - result: official page fetched but signal missing
- `orch-session-limit-default` → repo-file: v2/orchestrators/setup/configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/setup/configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - checked: 2026-03-16
  - result: repo evidence matched

## Validation

- target_files: 5
- claim_families: 13
- contradictions: 7
- evidence_sources: 27
