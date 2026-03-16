# Docs Page Research Report

## Scope

- `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
- `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`
- `v2/orchestrators/setup/r-configure.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`

## Claims Reviewed

- `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - claim families: `orch-ai-routing-capability-based`, `orch-price-ceiling-filtering`
  - extracted: Orchestrators on Livepeer can earn fees from four distinct categories of work.
  - extracted: At a glance Job type What it does Min VRAM Pricing unit Configured via Video Transcoding Converts video streams to multiple resolutions and bitrates None (GPU accelerated via NVENC/NVDEC) Wei per pixel of output flag Batch AI Inference Processes single AI requests — image generation, audio transcription, captioning 4–24 GB depending on pipeline Wei per pixel or per millisecond Real time AI (Cascade) Applies AI to a live video stream frame by frame, continuously 8 GB+ (model dependent) + ComfyStream LLM Inference Generates text responses using large language models 8 GB (quantised 7–8B models) Custom token unit + Ollama runner How routing works — and why it differs per job type The routing mechanics differ significantly by job type.
  - extracted: Video transcoding Transcoding jobs are routed by gateways using a multi factor algorithm: stake weight + price + performance score.
  - extracted: Gateways favour orchestrators with more total stake (own + delegated), competitive pricing, and high historical success rates.
- `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - claim families: `orch-active-set-threshold`, `orch-ai-routing-capability-based`, `orch-batch-ai-vram-threshold`, `orch-pool-vs-solo-prerequisites`, `orch-price-ceiling-filtering`, `orch-siphon-github-current`, `orch-siphon-reward-isolation`
  - extracted: You register on chain, hold your own stake, and earn directly.
  - extracted: You do not stake LPT, you do not manage keys, and you earn via the pool operator's payout schedule.
  - extracted: → Solo orchestrators must activate on chain by staking LPT.
  - extracted: There is no minimum enforced by the protocol, but in practice you need enough stake to rank in the top 100 active orchestrators to receive transcoding work.
- `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - claim families: `orch-active-set-threshold`, `orch-ai-routing-capability-based`, `orch-batch-ai-vram-threshold`, `orch-pool-vs-solo-prerequisites`, `orch-siphon-github-current`, `orch-siphon-reward-isolation`
  - extracted: If you have a GPU and want to earn network fees with minimal protocol operations, first.
  - extracted: Step 1 — Should you run an orchestrator?
  - extracted: Workload Minimum GPU Recommended GPU Video transcoding only NVIDIA RTX 3060 (8 GB VRAM) RTX 4080 / A4000 Batch AI inference NVIDIA RTX 3090 / A40 (24 GB VRAM) RTX 4090 / A100 Real time AI (Cascade) NVIDIA RTX 3090 (24 GB VRAM) RTX 4090 / A100 LLM inference only NVIDIA RTX 3060 Ti (8 GB VRAM) RTX 3090+ NVIDIA GPUs only.
  - extracted: AMD and Apple Silicon are not supported by go livepeer's AI runner.
- `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`
  - claim families: `orch-siphon-reward-isolation`
  - extracted: If the GPU machine is busy or reboots mid round, you miss that round's LPT inflation reward — and missed rewards compound against you over time.
  - extracted: And a machine actively processing untrusted media data is not the safest place for a key that controls your staked LPT.
  - extracted: OrchestratorSiphon runs on a small, secure machine and handles all on chain actions: reward calling, fee withdrawal, governance voting, and service URI updates.
  - extracted: Your GPU machine can restart, be replaced, or be taken offline for maintenance without interrupting reward claims.
- `v2/orchestrators/setup/r-configure.mdx`
  - claim families: `orch-price-ceiling-filtering`
  - extracted: Essential flags These are the flags you must set every time you start go livepeer as an orchestrator.
  - extracted: You must set it explicitly for mainnet.
  - extracted: Options: — production network — testnet (deprecated; check current testnet name in release notes) — local/dev only, no on chain participation What it does: Points go livepeer at an Arbitrum One RPC endpoint to read and write on chain state (orchestrator registration, reward calls, ticket redemption).
  - extracted: Example: This must be an Arbitrum One endpoint, not an Ethereum L1 endpoint.
- `v2/orchestrators/setup/rcs-requirements.mdx`
  - claim families: `orch-active-set-threshold`, `orch-batch-ai-vram-threshold`, `orch-pool-vs-solo-prerequisites`
  - extracted: Hardware NVIDIA GPU with NVENC/NVDEC support installed and visible via NVIDIA driver version 525+ (Linux) or 527+ (Windows) CUDA 12.0+ installed (or plan to use the Docker image, which bundles CUDA) CPU: 4+ cores minimum, 8+ recommended RAM: 16 GB minimum, 32 GB recommended Storage: 100 GB SSD minimum (NVMe recommended for AI model weights) For AI inference, VRAM is the primary constraint: 8 GB for LLM only, 16 GB for basic batch AI, 24 GB+ for the full pipeline suite.
  - extracted: Software OS: Linux (Ubuntu 22.04+ recommended).
  - extracted: Docker Engine installed if using the container install path NVIDIA Container Toolkit installed if using Docker with GPU ( should succeed) and available (Linux/macOS) or PowerShell (Windows) Network Port 8935 TCP open to the public internet (firewall, router NAT, cloud security group) Static IP or stable hostname (dynamic DNS if on a home connection) Bandwidth: 100 Mbps symmetric minimum; 1 Gbps recommended for multi stream transcoding Latency: Under 50 ms to major regions improves gateway selection probability Verify port access from an external machine: Wallet and tokens Ethereum wallet — an existing account or go livepeer will create one on first run ETH on Arbitrum One — for gas (activation, reward calls, ticket redemption).
  - extracted: The amount needed to enter the active set (top 100) varies — check for the current threshold.

## Verified Claims

- `orch-siphon-github-current` (verified, high)
  - owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - summary: Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-price-ceiling-filtering` (verified, high)
  - owner: `v2/orchestrators/setup/r-configure.mdx`
  - summary: Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima.

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-pool-vs-solo-prerequisites` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - summary: Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-ai-routing-capability-based` (conflicted, low)
  - owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
  - summary: AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-reward-profitability-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
  - summary: Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Time-Sensitive Claims

- None

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
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-options/siphon-setup.mdx`: GPU machine can restart, reward, reward calling
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: Reward safety, keystore secure, reward, reward calling
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`: Keystore isolated, Reward safety, reward, reward calling
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
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`: Capability match
- `orch-reward-profitability-threshold` (reward-profitability)
  - action: verify-more
  - `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`: This page covers the operational mechanics of how LPT rewards flow, how to call reliably, the economics of when calling reward is profitable, and how ETH fees move from job to wallet.
  - `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`: 0.00005 ETH, approximately every 22 hours

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | canonical-owner | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | update-now | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-ai-routing-capability-based` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | canonical-owner | update-now | `orch-siphon-github-current` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-options/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | dependent-page | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | canonical-owner | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` | guide | canonical-owner | verify-only | `orch-reward-profitability-threshold` |
| `v2/orchestrators/setup/r-configure.mdx` | setup | canonical-owner | update-now | `orch-price-ceiling-filtering` |
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
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-options/siphon-setup.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - checked: 2026-03-16
  - result: official page fetched but signal missing
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-options/setup-navigator.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-pool-vs-solo-prerequisites` → repo-file: v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-ai-routing-capability-based` → repo-file: v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-siphon-github-current` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/setup/r-configure.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-price-ceiling-filtering` → repo-file: v2/orchestrators/guides/deployment-options/find-your-path.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `orch-reward-profitability-threshold` → repo-file: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx
  - checked: 2026-03-16
  - result: repo evidence matched

## Validation

- target_files: 6
- claim_families: 7
- contradictions: 6
- evidence_sources: 13

