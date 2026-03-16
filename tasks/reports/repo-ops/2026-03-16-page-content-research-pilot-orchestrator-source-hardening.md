# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - claim families: `orch-active-set-threshold`, `orch-ai-routing-capability-based`, `orch-batch-ai-vram-threshold`, `orch-ot-split-capacity-sum`, `orch-pool-vs-solo-prerequisites`, `orch-pool-worker-offchain-payouts`, `orch-price-ceiling-filtering`, `orch-siphon-github-current`, `orch-siphon-reward-isolation`
  - extracted: At a Glance Alternative What it solves What it requires Guide Pool worker Earn from GPU compute without running an Orchestrator at all no LPT, no on chain management GPU; a pool to join; no stake O T split Separate protocol management from GPU workload processing; scale Transcoder machines independently Two machines; LPT stake; Siphon Keep the keystore on an isolated machine; GPU machine can restart without missing LPT rewards Two machines; LPT stake; Python on secure machine Pool Worker A pool worker does not run an Orchestrator.
  - extracted: The pool operator handles all on chain operations: staking, reward calling, pricing, Gateway relationships.
  - extracted: The Orchestrator process protocol, routing, reward calling, keystore runs on one machine.
  - extracted: Instead of running , the secure machine runs OrchestratorSiphon: a lightweight Python tool that handles only on chain operations reward calling, fee withdrawal, governance voting, service URI updates.
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - claim families: `orch-siphon-reward-isolation`
  - extracted: If the GPU machine reboots mid round, that round's LPT inflation reward is permanently lost and missed rewards compound over time.
  - extracted: A machine actively processing untrusted media data is also not the safest place for a key controlling staked LPT.
  - extracted: OrchestratorSiphon runs on a small, secure machine and handles all on chain actions: reward calling, fee withdrawal, governance voting, and service URI updates.
  - extracted: The GPU machine can restart, be replaced, or go offline for maintenance without interrupting reward claims.
- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - claim families: `orch-active-set-threshold`, `orch-bandwidth-per-stream-planning`, `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-dual-revenue-model`, `orch-pool-vs-solo-prerequisites`, `orch-reward-profitability-threshold`
  - extracted: Revenue stream How it works Depends on ETH job fees Gateways pay per transcoding segment or AI inference job via probabilistic micropayment tickets redeemed on Arbitrum Capability, pricing, performance, uptime, Gateway selection LPT inflation rewards Protocol mints LPT each round (~22 hours); active Orchestrators claim their share by calling once per round Total bonded stake (self + delegated), inflation rate, reward call reliability Neither stream generates income from day one without deliberate setup.
  - extracted: ETH fees require Gateways to route work to the Orchestrator which means being discoverable, competitively priced, and capable.
  - extracted: LPT rewards require bonded LPT, an active on chain registration, and a node that calls each round without fail.
  - extracted: For most new operators, LPT inflation rewards are the more predictable starting income stream.

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
  - evidence why: source priority 90; 10 matched terms
- `orch-siphon-github-current` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
  - primary evidence: github-repo → https://github.com/Stronk-Tech/OrchestratorSiphon
  - evidence why: source priority 60; 4 matched terms; recency 55d; state active
- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; 12 matched terms; current-language match 15
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
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
  - primary evidence: repo-file → v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - evidence why: source priority 90; 9 matched terms
- `orch-consumer-nvenc-session-cap` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; 10 matched terms; current-language match 15

## Time-Sensitive Claims

- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
- `orch-reward-profitability-threshold` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
  - primary evidence: repo-file → v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - evidence why: source priority 90; 11 matched terms
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 15
- `orch-business-case-cost-viability` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - summary: Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
  - primary evidence: repo-file → v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
  - evidence why: source priority 90; 9 matched terms; current-language match 41; historical-language penalty 3
- `orch-commercial-model-warmth` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
  - primary evidence: repo-file → v2/orchestrators/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 9 matched terms

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: GPU machine can restart, reward calling
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: reward calling, reward safety
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: reward calling
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Reward calling, reward calling
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Reward calling, reward calling
- `orch-siphon-github-current` (community-tooling-status)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: OrchestratorSiphon
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Siphon
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Siphon
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: Siphon
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: This page covers GPU support policy, session limits by card tier, VRAM requirements by AI pipeline, the minimum system stack, capacity testing, and the checklist to run before activating on the network.
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: 24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: pool worker, solo Orchestrator
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One — for staking.
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: active set
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-dual-revenue-model` (operator-revenue-model)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: ETH job fees, LPT inflation rewards, Service fees scale
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: LPT inflation rewards, Service Fees Scale, inflation as a base
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`: How the network routes AI jobs Applications never communicate with orchestrators directly.
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: 3 concurrent NVENC encode sessions, 3 concurrent sessions
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Your best options: Transcoding — you can handle video transcoding sessions competitively with any modern NVIDIA GPU; NVENC session caps on consumer cards apply, but can be worked around.
  - `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx`: NVENC session caps on consumer GPUs Consumer NVIDIA GPUs (GTX/RTX series) have a hardware enforced cap on the number of concurrent NVENC encoding sessions.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | canonical-owner | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | canonical-owner | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | inferred-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | inferred-page | update-now | `orch-ot-split-capacity-sum` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | inferred-page | verify-only | `orch-siphon-github-current` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/protocol-influence.mdx` | guide | inferred-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` | guide | dependent-page | verify-only | `orch-dual-revenue-model` |
| `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` | guide | canonical-owner | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/connect-and-activate.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | update-now | `orch-pool-worker-offchain-payouts` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |

## Evidence Sources

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
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: primary
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 60; score: 108
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech, siphon, community tooling status
  - why selected: source priority 60; 4 matched terms; recency 55d; state active
  - why not primary: highest ranked matched source
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: effective session capacity, orchSecret, sum of all connected Transcoder, scale Transcoder machines independently, total session capacity, ot split capacity aggregation, O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing., orchestrator transcoder setup
  - why selected: source priority 90; 8 matched terms
  - why not primary: highest ranked matched source
- `orch-ot-split-capacity-sum` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: supporting
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: Total session capacity is the sum, orchSecret, scale Transcoder machines independently, sum of all connected Transcoder, total session capacity, ot split capacity aggregation, O-T split docs should keep the capacity model aligned: orchestrator session capacity is the sum of connected transcoder `-maxSessions` values, and protocol management remains separate from GPU workload processing., orchestrator transcoder setup
  - why selected: source priority 90; 8 matched terms
  - why not primary: supporting evidence
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 218
  - source metadata: repo-current
  - matched terms: 24 GB, competitive diffusion pipelines, real-time video ai, 16 gb, 8 gb, batch ai, real-time ai, rtx 3090, vram, hardware vram minimums, Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current., requirements
  - why selected: source priority 90; 12 matched terms; current-language match 15
  - why not primary: highest ranked matched source
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 208
  - source metadata: repo-current
  - matched terms: 16 GB for basic batch AI, 24 GB+ for the full pipeline suite, 8 GB for LLM-only, 16 gb, 24 gb, 8 gb, batch ai, vram, hardware vram minimums, Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current., requirements
  - why selected: source priority 90; 11 matched terms; current-language match 10
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
- `orch-session-limit-default` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 162
  - source metadata: repo-current
  - matched terms: 10 concurrent sessions, The default is 10, maxSessions, maxsessions = 10, session limit, transcoding session cap, configure
  - why selected: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
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
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 200
  - source metadata: repo-current
  - matched terms: 0.000005 – 0.00005 ETH, Arbitrum gas is low, approximately every 22 hours, 0.00005 eth, estimated reward this round, gas cost, profitable, reward(), reward profitability, Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants., rewards and fees
  - why selected: source priority 90; 11 matched terms
  - why not primary: highest ranked matched source
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: capability match + price ceiling, new orchestrator with 24 GB VRAM, stake plays a much smaller role, ai jobs, capability match, maxpricepercapability, ai routing mechanics, AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing., job types
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 160
  - source metadata: repo-current
  - matched terms: 8 GB is sufficient for LLM pipelines, For video transcoding, active set, ai jobs, capability match, AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing., job types
  - why selected: source priority 90; 7 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: payout, pool operator, pool worker, no on-chain registration, not an Orchestrator at all, off-chain payouts, pool operator directly, pool worker payout model, Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows., setup options
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `orch-pool-worker-offchain-payouts` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: No Ethereum keystore, not an Orchestrator at all, off-chain payouts, no on-chain registration, pool operator directly, pool worker payout model, Pool-worker guidance should stay explicit that a worker is not running an orchestrator identity, does not perform on-chain operations, and receives off-chain payouts from the pool operator rather than protocol-level reward flows., setup options
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 178
  - source metadata: repo-current
  - matched terms: 1 Gbps symmetric, 100 Mbps symmetric, livepeer_bench, 1080p source, 6 mbps symmetric, bandwidth per stream, transcoding bandwidth planning, configure
  - why selected: source priority 90; 8 matched terms; current-language match 15
  - why not primary: highest ranked matched source
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 162
  - source metadata: repo-current
  - matched terms: 100 Mbps, 6 Mbps per stream, bandwidth limit, 6 mbps symmetric, bandwidth per stream, transcoding bandwidth planning, configure
  - why selected: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 2
  - why not primary: fewer matched signals than primary evidence
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 179
  - source metadata: repo-current
  - matched terms: amortisation cost, electricity, payback period, worth it, break-even, electricity costs, viability, business case viability, operator rationale
  - why selected: source priority 90; 9 matched terms; current-language match 41; historical-language penalty 3
  - why not primary: highest ranked matched source
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 148
  - source metadata: repo-current
  - matched terms: 1 Gbps symmetric, 100 Mbps symmetric, 24 GB, feasibility, operator rationale
  - why selected: source priority 90; 5 matched terms; current-language match 15
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
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: cold starts are SLA failures, commercial Orchestrators pre-load all advertised models, pre-loaded and warm, cold start latency, keep them warm, warm at startup, commercial model warmth, Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive., business case
  - why selected: source priority 90; 9 matched terms
  - why not primary: highest ranked matched source
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx
  - role: supporting
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 180
  - source metadata: repo-current
  - matched terms: Eliminates cold-start latency, one warm model per GPU, warm: true, cold start latency, cold starts are SLA failures, keep them warm, pre-loaded and warm, warm at startup, Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
  - why selected: source priority 90; 9 matched terms
  - why not primary: supporting evidence
- `orch-commercial-model-warmth` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - role: weaker
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: "warm": true, model stays warm in VRAM, warm in VRAM, cold start latency, cold starts are SLA failures, keep them warm, pre-loaded and warm, warm at startup
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 198
  - source metadata: repo-current
  - matched terms: 2-3 concurrent NVENC encode sessions, Ada Lovelace, NVIDIA matrix, 2-3 concurrent sessions, NVENC session cap, RTX 40xx, consumer cards, consumer nvenc session cap, Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default., requirements
  - why selected: source priority 90; 10 matched terms; current-language match 15
  - why not primary: highest ranked matched source
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx
  - role: supporting
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 198
  - source metadata: repo-current
  - matched terms: Ada Lovelace, If your GPU is capped at 3 concurrent NVENC sessions, NVENC session caps on consumer GPUs, 2-3 concurrent sessions, NVENC session cap, RTX 40xx, consumer cards, consumer nvenc session cap, Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default., requirements
  - why selected: source priority 90; 10 matched terms; current-language match 14
  - why not primary: supporting evidence

## Validation

- target_files: 3
- claim_families: 13
- contradictions: 8
- evidence_sources: 29
