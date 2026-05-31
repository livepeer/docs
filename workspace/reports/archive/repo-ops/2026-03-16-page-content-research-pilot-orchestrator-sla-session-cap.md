# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx`
- `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx`
- `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `v2/orchestrators/guides/operator-considerations/business-case.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
  - claim families: `orch-commercial-model-warmth`
  - extracted: Livepeer's AI subnet launched in Q3 2024 and has grown to become the primary source of new fee revenue for orchestrators.
  - extracted: AI pipelines run alongside your existing node using dedicated AI Runner containers.
  - extracted: Your orchestrator advertises capabilities — which pipelines it supports and at what price — and gateways route matching jobs to it.
  - extracted: When a gateway selects your orchestrator, it is because your combination of capability, pricing, latency, and uptime made you the best option for that specific request.
- `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx`
  - claim families: `orch-commercial-model-warmth`
  - extracted: You earn per unit fees for every successful job.
  - extracted: This guide covers everything needed to run batch AI pipelines: configuring , choosing and loading models, running the Ollama LLM runner, connecting BYOC external containers, setting pricing, and diagnosing problems.
  - extracted: Prerequisites Before configuring AI pipelines, ensure: go livepeer is running with the flag enabled NVIDIA Container Toolkit is installed and working ( ) Docker is running and can access your GPUs You have a file or know where you want to create one How the AI worker runs pipelines When go livepeer starts with , it reads and starts Docker containers for each configured pipeline: The standard container image is .
  - extracted: Except for the pipeline — which uses a separate Ollama based runner — all batch pipelines use this image.
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx`
  - claim families: `orch-consumer-nvenc-session-cap`
  - extracted: How transcoding works When a broadcaster sends a live stream to a Livepeer gateway, the gateway segments the stream into roughly 2 second chunks and routes each segment to an orchestrator.
  - extracted: You set your price with the flag; by default is 1, meaning you charge in wei per individual output pixel.
  - extracted: This charges 500 wei per output pixel.
  - extracted: Option B: USD pricing (go livepeer 0.8.0+) USD pricing pegs your transcoding fee to a dollar amount and automatically converts to wei via a .
- `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx`
  - claim families: `orch-commercial-model-warmth`
  - extracted: Because these two execution paths use separate hardware resources, adding AI capabilities to a running video node requires no changes to your on chain registration, staking, or existing transcoding configuration.
  - extracted: Dual Mode requires Linux.
  - extracted: Video only AI only Dual Mode Revenue streams ETH transcoding fees + LPT rewards ETH AI inference fees Both streams simultaneously Pricing config (wei per pixel) per pipeline Both and GPU execution path NVENC/NVDEC hardware blocks CUDA compute cores Both paths, independent queues VRAM requirement Minimal (frame buffers only) 8 24 GB depending on model 16 GB recommended; 8 GB viable for LLM only pipelines Active set Required for video job eligibility Not required for AI job eligibility Required for video; AI routes via capability advertisement OS support Linux, Windows Linux only Linux only Before You Start Confirm these prerequisites before starting: Hardware: NVIDIA GPU with 16 GB VRAM or more.
  - extracted: 8 GB is sufficient for LLM pipelines via the Ollama runner.
- `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - claim families: `orch-bandwidth-per-stream-planning`, `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-consumer-nvenc-session-cap`, `orch-session-limit-default`
  - extracted: This page covers GPU support policy, session limits by card tier, VRAM requirements by AI pipeline, the minimum system stack, capacity testing, and the checklist to run before activating on the network.
  - extracted: GPU Vendor Support NVIDIA is the supported GPU vendor for go livepeer.
  - extracted: AMD and Intel GPUs are not supported for hardware accelerated transcoding or AI inference.
  - extracted: NVIDIA CUDA is required for both NVENC video transcoding and all AI inference pipelines.
- `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - claim families: `orch-active-set-threshold`, `orch-bandwidth-per-stream-planning`, `orch-batch-ai-vram-threshold`, `orch-business-case-cost-viability`, `orch-commercial-model-warmth`, `orch-pool-vs-solo-prerequisites`, `orch-reward-profitability-threshold`
  - extracted: Most Orchestrator operators start by thinking about LPT inflation rewards.
  - extracted: Commercial operators think primarily about ETH service fees.
  - extracted: Dimension Hobbyist operator Commercial operator Primary income LPT inflation rewards ETH service fees from job processing Revenue lever Total bonded stake Job volume, pricing discipline, uptime Uptime requirement ~95% (reward calls + basic availability) 99%+ (SLA driven, continuous monitoring) Gateway relationship Passive wait to be selected by price and stake Active direct relationships, per Gateway pricing Hardware approach Existing hardware repurposed Dedicated investment, redundancy planned Monitoring Periodic checks, Prometheus optional Automated alerting, SLA dashboards Model loading Load on demand; cold starts acceptable Pre loaded and warm; cold starts are SLA failures Neither model is superior they reflect different operator goals and capabilities.
  - extracted: Many operators run a hybrid: inflation rewards provide a base, service fees from well served application workloads provide the upside.

## Verified Claims

- None

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-consumer-nvenc-session-cap` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-siphon-github-current` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.

## Time-Sensitive Claims

- `orch-commercial-model-warmth` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (time-sensitive, medium)
  - owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - summary: Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
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
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`: 3 concurrent NVENC encode sessions, 3 concurrent sessions
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Your best options: Transcoding — you can handle video transcoding sessions competitively with any modern NVIDIA GPU; NVENC session caps on consumer cards apply, but can be worked around.
  - `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx`: NVENC session caps on consumer GPUs Consumer NVIDIA GPUs (GTX/RTX series) have a hardware enforced cap on the number of concurrent NVENC encoding sessions.
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set, top 100
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One — for staking.
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Stake plays a much smaller role, capability match
- `orch-siphon-github-current` (community-tooling-status)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: OrchestratorSiphon, Siphon
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: GPU machine can restart, reward calling

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | canonical-owner | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx` | guide | dependent-page | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` | guide | dependent-page | verify-only | `orch-commercial-model-warmth` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-business-case-cost-viability` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | canonical-owner | verify-only | `orch-consumer-nvenc-session-cap` |
| `v2/orchestrators/guides/deployment-details/requirements.mdx` | guide | dependent-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
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
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |

## Evidence Sources

- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
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
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-consumer-nvenc-session-cap` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - checked: 2026-03-16
  - result: official page fetched but signal missing
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/setup-options.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/operator-considerations/business-case.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-business-case-cost-viability` → repo-file: v2/orchestrators/guides/deployment-details/requirements.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-session-limit-default` → repo-file: v2/orchestrators/setup/configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched

## Validation

- target_files: 6
- claim_families: 9
- contradictions: 7
- evidence_sources: 21
