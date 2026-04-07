# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
  - claim families: none
  - extracted: Because these two execution paths use separate hardware resources, adding AI capabilities to a running video node requires no changes to your on chain registration, staking, or existing transcoding configuration.
  - extracted: Dual Mode requires Linux.
  - extracted: Video only AI only Dual Mode Revenue streams ETH transcoding fees + LPT rewards ETH AI inference fees Both streams simultaneously Pricing config (wei per pixel) per pipeline Both and GPU execution path NVENC/NVDEC hardware blocks CUDA compute cores Both paths, independent queues VRAM requirement Minimal (frame buffers only) 8 24 GB depending on model 16 GB recommended; 8 GB viable for LLM only pipelines Active set Required for video job eligibility AI job eligibility routes through capability advertisement Required for video; AI routes via capability advertisement OS support Linux, Windows Linux only Linux only Before You Start Confirm these prerequisites before starting: Hardware: NVIDIA GPU with 16 GB VRAM or more.
  - extracted: 8 GB is sufficient for LLM pipelines via the Ollama runner.
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
  - claim families: `orch-pool-worker-offchain-payouts`
  - extracted: The pool operator handles staking, on chain registration, reward calling, and routing.
  - extracted: From the network's perspective, it is one orchestrator with one stake.
  - extracted: The pool operator: Holds and manages the stake Sets prices and advertises capabilities Receives work from gateways Routes segments to your GPU for processing Distributes payouts to pool members You: Run a transcoding worker (a go livepeer process in worker mode, or the pool operator's own client) Process the segments routed to your GPU Receive off chain payouts based on the work your GPU completed The pool operator tracks your individual contribution in pool side systems.
  - extracted: Pool vs solo orchestrator Pool worker Solo orchestrator LPT stake required No Yes On chain registration No (pool handles this) Yes Set your own prices No Yes Direct on chain payouts No (via pool operator) Yes Ops complexity Low Medium High Trust requirement Pool operator Yourself Reward calling responsibility Pool operator You (or Siphon) Good for GPU owners wanting passive income Operators wanting full control Step 1: Choose a pool The Livepeer community currently has a small number of active public pools.
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
  - claim families: none
  - extracted: The pool operator handles staking, on chain registration, reward calling, and job routing.
  - extracted: From the network's perspective, it appears as one Orchestrator with one stake.
  - extracted: The pool operator handles: Holding and managing the stake Setting prices and advertising capabilities Receiving work from Gateways Routing segments to worker GPUs for processing Distributing payouts to pool members A worker: Runs a transcoding worker process (go livepeer in transcoder mode, or the pool's own client) Processes the segments routed to the GPU Receives off chain payouts based on completed work The pool operator tracks individual worker contributions in pool side systems.
  - extracted: Pool Worker vs Solo Orchestrator Pool worker Solo Orchestrator LPT stake required No Yes On chain registration No (pool handles this) Yes Set own prices No Yes Direct on chain payouts No (via pool operator) Yes Operational complexity Low Medium High Trust requirement Pool operator Yourself Reward calling responsibility Pool operator Solo operator (or Siphon) Best for GPU owners wanting passive earnings without protocol management Operators wanting full control over pricing and earnings Step 1: Choose a Pool The Livepeer community currently has a small number of active public pools.
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
  - claim families: `orch-ot-split-capacity-sum`
  - extracted: The split setup separates them: one machine handles protocol operations (on chain interactions, job routing, reward calling) and one or more machines handle the GPU work.
  - extracted: Reward calls come from this machine, independent of GPU machine availability.
  - extracted: Architecture Data flow: 1.
  - extracted: A Gateway connects to the Orchestrator on port 8935 (the public service URI) 2.
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - claim families: `orch-active-set-threshold`, `orch-ai-routing-capability-based`, `orch-batch-ai-vram-threshold`, `orch-ot-split-capacity-sum`, `orch-pool-vs-solo-prerequisites`, `orch-pool-worker-offchain-payouts`, `orch-price-ceiling-filtering`, `orch-siphon-github-current`, `orch-siphon-reward-isolation`
  - extracted: At a Glance Alternative What it solves What it requires Guide Pool worker Earn from GPU compute through a pool worker path with the operator handling stake and protocol operations GPU; a pool to join; zero stake O T split Separate protocol management from GPU workload processing; scale Transcoder machines independently Dedicated Orchestrator and Transcoder hosts; staked LPT; shared Siphon Keep the keystore on an isolated machine; GPU restarts leave LPT rewards uninterrupted Two machines; staked LPT; Python on secure machine Pool Worker A pool worker runs against an existing pool operator's Orchestrator address.
  - extracted: The pool operator handles staking, reward calling, pricing, and Gateway relationships.
  - extracted: The Orchestrator process handles protocol operations, routing, reward calling, and keystore access on one machine.
  - extracted: This lightweight Python tool handles on chain operations only: reward calling, fee withdrawal, governance voting, and service URI updates.
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - claim families: `orch-siphon-reward-isolation`
  - extracted: A GPU machine reboot mid round permanently loses that round's LPT inflation reward, and missed rewards compound over time.
  - extracted: A machine actively processing untrusted media data also makes a poor keystore host for staked LPT.
  - extracted: OrchestratorSiphon runs on a small, secure machine and handles all on chain actions: reward calling, fee withdrawal, governance voting, and service URI updates.
  - extracted: The GPU machine restarts, is replaced, or goes offline for maintenance without interrupting reward claims.

## Verified Claims

- `orch-ot-split-capacity-sum` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
  - summary: O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
  - evidence why: source priority 90; 8 matched terms
- `orch-pool-worker-offchain-payouts` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - evidence why: source priority 90; 10 matched terms
- `orch-price-ceiling-filtering` (verified, high)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima.
  - primary evidence: repo-file → v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - evidence why: source priority 90; 10 matched terms

## Conflicted Claims

- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - evidence why: source priority 90; 11 matched terms
- `orch-siphon-github-current` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
  - primary evidence: github-repo → https://github.com/Stronk-Tech/OrchestratorSiphon
  - evidence why: source priority 60; 4 matched terms; recency 56d; state active
- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
  - primary evidence: repo-file → v2/orchestrators/setup/rcs-requirements.mdx
  - evidence why: source priority 90; 9 matched terms; current-language match 13
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
  - primary evidence: repo-file → v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - evidence why: source priority 90; repo file missing
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - evidence why: source priority 90; 9 matched terms
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

## Time-Sensitive Claims

- `orch-consumer-nvenc-session-cap` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; repo file missing
- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 6 matched terms; current-language match 7; historical-language penalty 1
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 2 matched terms; current-language match 7; historical-language penalty 1
- `orch-commercial-model-warmth` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
  - primary evidence: repo-file → v2/orchestrators/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 9 matched terms
- `orch-reward-profitability-threshold` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
  - primary evidence: repo-file → v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - evidence why: source priority 90; repo file missing

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: reward calling
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: reward calling, reward safety
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Reward calling, reward calling
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Reward calling, reward calling
- `orch-siphon-github-current` (community-tooling-status)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: OrchestratorSiphon
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Siphon
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Siphon
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: 24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB, RTX 3090
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`: 16 GB, 24 GB, 8 GB
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`: Prices above the current Gateway buy side range stop AI jobs from routing to that pipeline regardless of hardware capability.
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`: Capability, pricing, and latency matter more than active set position for many AI jobs.
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Pool worker, pool worker, solo Orchestrator
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One For staking.
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Active set, active set
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set
- `orch-dual-revenue-model` (operator-revenue-model)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: ETH job fees, LPT inflation rewards
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: LPT inflation rewards, Service Fees Scale

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
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | canonical-owner | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
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
| `v2/orchestrators/setup/guide.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |

## Evidence Sources

- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 200
  - source metadata: repo-current
  - matched terms: GPU machine can restart, keystore stays on a secure, isolated machine, without you missing rewards, keystore isolated, missed rewards, reward calling, reward safety, split setup, split setup reward safety, A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages., siphon setup
  - why selected: source priority 90; 11 matched terms
  - why not primary: highest ranked matched source
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: weaker
  - checked: 2026-03-17
  - result: GitHub evidence matched
  - rank: 60; score: 88
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech
  - why selected: source priority 60; 2 matched terms; recency 56d; state active
  - why not primary: lower source priority than primary evidence
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: primary
  - checked: 2026-03-17
  - result: GitHub evidence matched
  - rank: 60; score: 108
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech, siphon, community tooling status
  - why selected: source priority 60; 4 matched terms; recency 56d; state active
  - why not primary: highest ranked matched source
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: effective session capacity, orchSecret, sum of all connected Transcoder, scale Transcoder machines independently, total session capacity, ot split capacity aggregation, O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing., orchestrator transcoder setup
  - why selected: source priority 90; 8 matched terms
  - why not primary: highest ranked matched source
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: supporting
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: Total session capacity is the sum, orchSecret, scale Transcoder machines independently, sum of all connected Transcoder, total session capacity, ot split capacity aggregation, O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing., orchestrator transcoder setup
  - why selected: source priority 90; 8 matched terms
  - why not primary: supporting evidence
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 188
  - source metadata: repo-current
  - matched terms: 24 GB+ for the full pipeline suite, 8 GB for LLM-only, 16 gb, 24 gb, 8 gb, rtx 3090, vram, hardware vram minimums, requirements
  - why selected: source priority 90; 9 matched terms; current-language match 13
  - why not primary: highest ranked matched source
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: LPT stake required, No, Pool worker, no lpt required, on-chain ops, solo orchestrator, staking, Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path., setup options
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 160
  - source metadata: repo-current
  - matched terms: No LPT, just a GPU, Pool worker, not an Orchestrator at all, no lpt required, solo orchestrator, staking, setup options
  - why selected: source priority 90; 7 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: payout, pool operator, pool worker, no on-chain registration, not an Orchestrator at all, off-chain payouts, pool operator directly, pool worker payout model, Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows., setup options
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: No Ethereum keystore, not an Orchestrator at all, off-chain payouts, no on-chain registration, pool operator directly, pool worker payout model, Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows., setup options
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-session-limit-default` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 155
  - source metadata: repo-current
  - matched terms: 10 concurrent sessions, maxSessions, maxsessions = 10, session limit, transcoding session cap, configure
  - why selected: source priority 90; 6 matched terms; current-language match 7; historical-language penalty 1
  - why not primary: highest ranked matched source
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - role: primary
  - checked: 2026-03-17
  - result: official page fetched but signal missing
  - rank: 100; score: 100
  - source metadata: reachable
  - why selected: source priority 100
  - why not primary: highest ranked matched source
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: Price too high, maxPricePerCapability, receive no transcoding or AI jobs, gateways filter orchestrators by price, priceperunit, prices are too high, will not receive work, gateway price filtering, Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima., configure
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: gateways will route jobs to lower-priced orchestrators, pricePerUnit, gateways filter orchestrators by price, prices are too high, will not receive work, gateway price filtering, Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima., configure
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-dual-revenue-model` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: inflation as a base, service fees scale, variable upside, ETH job fees, LPT inflation rewards, two independent streams, operator revenue model, Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model., operator rationale
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-dual-revenue-model` → repo-file: v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: ETH job fees, LPT inflation rewards, two independent streams, inflation as a base, service fees scale, operator revenue model, Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model., operator rationale
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 115
  - source metadata: repo-current
  - matched terms: transcoding bandwidth planning, configure
  - why selected: source priority 90; 2 matched terms; current-language match 7; historical-language penalty 1
  - why not primary: highest ranked matched source
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: cold starts are SLA failures, commercial Orchestrators pre-load all advertised models, pre-loaded and warm, cold start latency, keep them warm, warm at startup, commercial model warmth, Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive., business case
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: fetch failed or unsupported evidence type
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo file missing
  - rank: 90; score: 0
  - why selected: source priority 90; repo file missing
  - why not primary: highest ranked matched source

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 7
- evidence_sources: 27
- explicit_page_targets: 8
- inferred_page_targets: 23

## Validation

- target_files: 6
- claim_families: 9
- contradictions: 7
- evidence_sources: 27
