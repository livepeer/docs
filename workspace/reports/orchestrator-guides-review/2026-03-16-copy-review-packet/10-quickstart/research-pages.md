# Docs Page Research Report

## Scope

- `v2/orchestrators/quickstart/AI-prompt-start.mdx`
- `v2/orchestrators/quickstart/guide.mdx`
- `v2/orchestrators/quickstart/tutorial.mdx`
- `v2/orchestrators/quickstart/video-transcoding.mdx`

## Claims Reviewed

- `v2/orchestrators/quickstart/AI-prompt-start.mdx`
  - claim families: none
  - extracted: Prerequisites Before you begin: go livepeer is installed and running as a transcoding orchestrator on Arbitrum mainnet (see and ) Your orchestrator is in the Top 100 active set on the Livepeer network Docker is installed with enabled (GPU passthrough required for the AI runner containers) Your GPU has at least 4GB of VRAM available to run at least one AI pipeline (see the hardware check below) Model weights pre downloaded for the pipeline(s) you want to serve (see ) This guide adds AI inference to an existing transcoding node.
  - extracted: If both share the same GPU, VRAM is split between them.
  - extracted: Before configuring anything, confirm how much VRAM your GPU has available.
  - extracted: Run this command to list your GPUs and their VRAM: You should see output similar to: Use the table below to see which pipelines you can run based on your available VRAM: Pipeline Min VRAM Notes 4GB Caption generation; lowest barrier to entry 6GB Object segmentation LLM ( ) 8GB Requires Ollama runner; 7–8B quantised models 12GB Speech transcription; Whisper based 16GB+ Animated video from image 20GB Style transfer, image manipulation 24GB Text to image generation (Stable Diffusion, SDXL) Image upscaling Speech synthesis For details on each pipeline, see .
- `v2/orchestrators/quickstart/guide.mdx`
  - claim families: none
  - extracted: Choose your test 20 30 min.
  - extracted: Requires 24 GB VRAM for diffusion; 8 GB for LLM alternative.
  - extracted: What you need NVIDIA GPU — any model for the video test; 24 GB VRAM for AI diffusion (or 8 16 GB for the LLM alternative) Docker Engine — with NVIDIA Container Toolkit for GPU passthrough ffmpeg — for the video test only ( to check) Linux — required for the AI test (video test also works on WSL2 or macOS Docker) No Arbitrum wallet, no LPT, no ETH.
  - extracted: After the quickstart Configure for production: on chain, staking, reward calling.
- `v2/orchestrators/quickstart/tutorial.mdx`
  - claim families: none
- `v2/orchestrators/quickstart/video-transcoding.mdx`
  - claim families: none
  - extracted: Two smoke tests on this page: video transcoding (20 30 min) and AI inference (35 65 min).
  - extracted: Prerequisites Confirm each item before starting: Requirement Verify with Notes NVIDIA GPU Note your VRAM total.
  - extracted: 24 GB needed for AI diffusion; 8 GB minimum for LLM alternative.
  - extracted: Docker Engine Docker Engine 24+ recommended.

## Verified Claims

- `orch-price-ceiling-filtering` (verified, high)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima.
  - primary evidence: repo-file → v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
  - evidence why: source priority 90; 10 matched terms

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
  - primary evidence: repo-file → v2/orchestrators/setup/rcs-requirements.mdx
  - evidence why: source priority 90; 11 matched terms; current-language match 15; historical-language penalty 1
- `orch-active-set-threshold` (conflicted, low)
  - owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
  - summary: Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
  - primary evidence: official-page → https://explorer.livepeer.org/orchestrators
  - evidence why: source priority 100
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
- `orch-siphon-reward-isolation` (conflicted, low)
  - owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - summary: A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - evidence why: source priority 90; 11 matched terms

## Time-Sensitive Claims

- `orch-session-limit-default` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 1
- `orch-bandwidth-per-stream-planning` (time-sensitive, medium)
  - owner: `v2/orchestrators/setup/configure.mdx`
  - summary: Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
  - primary evidence: repo-file → v2/orchestrators/setup/configure.mdx
  - evidence why: source priority 90; 2 matched terms; current-language match 7; historical-language penalty 1
- `orch-consumer-nvenc-session-cap` (time-sensitive, low)
  - owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - summary: Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
  - primary evidence: repo-file → v2/orchestrators/guides/deployment-details/requirements.mdx
  - evidence why: source priority 90; repo file missing

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `orch-batch-ai-vram-threshold` (hardware-vram-minimums)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: This requires: Automated monitoring with immediate alerts on node failure Automated restart and recovery Stable, redundant connectivity (not shared home broadband) Consistent power supply (UPS or colocation) Hardware health monitoring (GPU temperatures, VRAM utilisation) Model warm up management For AI inference workloads, cold model starts (loading a model from disk into VRAM on first request) introduce latency that breaks user facing SLAs.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: 24 GB, RTX 3090
  - `v2/orchestrators/setup/rcs-requirements.mdx`: 16 GB, 24 GB, 8 GB, RTX 3090
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`: 16 GB, 24 GB, 8 GB
- `orch-active-set-threshold` (stake-threshold)
  - action: verify-more
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Active set, active set
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: active set
  - `v2/orchestrators/setup/rcs-requirements.mdx`: active set
- `orch-ai-routing-capability-based` (ai-routing-mechanics)
  - action: verify-more
  - `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`: Stake plays a much smaller role, capability match
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`: Capability, pricing, and latency matter more than active set position for many AI jobs.
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: Pool Worker, Pool worker, pool worker
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`: Pool operators manage the Orchestrator registration, on chain staking, and reward calling for a fleet of GPU workers.
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`: Pool worker, solo Orchestrator
  - `v2/orchestrators/setup/rcs-requirements.mdx`: LPT on Arbitrum One For staking.
- `orch-siphon-reward-isolation` (split-setup-reward-safety)
  - action: verify-more
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`: reward, reward calling
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`: reward calling
  - `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`: reward calling, reward safety
  - `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`: Reward calling, reward calling
  - `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`: Reward calling, reward calling

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
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | canonical-owner | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | guide | dependent-page | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | guide | canonical-owner | verify-only | `orch-siphon-reward-isolation` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | canonical-owner | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | guide | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/guides/operator-considerations/requirements.mdx` | guide | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-bandwidth-per-stream-planning` |
| `v2/orchestrators/setup/configure.mdx` | setup | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | update-now | `orch-price-ceiling-filtering` |
| `v2/orchestrators/setup/configure.mdx` | setup | canonical-owner | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/connect-and-activate.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/guide.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |
| `v2/orchestrators/setup/r-monitor.mdx` | setup | inferred-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-active-set-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-batch-ai-vram-threshold` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | dependent-page | verify-only | `orch-pool-vs-solo-prerequisites` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | setup | inferred-page | verify-only | `orch-session-limit-default` |

## Evidence Sources

- `orch-batch-ai-vram-threshold` → repo-file: v2/orchestrators/setup/rcs-requirements.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 205
  - source metadata: repo-current
  - matched terms: 24 GB+ for the full pipeline suite, 8 GB for LLM-only, 16 gb, 24 gb, 8 gb, real-time ai, rtx 3090, vram, hardware vram minimums, Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current., requirements
  - why selected: source priority 90; 11 matched terms; current-language match 15; historical-language penalty 1
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
  - rank: 90; score: 165
  - source metadata: repo-current
  - matched terms: 10 concurrent sessions, maxSessions, maxsessions = 10, session limit, transcoding session cap, The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior., configure
  - why selected: source priority 90; 7 matched terms; current-language match 7; historical-language penalty 1
  - why not primary: highest ranked matched source
- `orch-bandwidth-per-stream-planning` → repo-file: v2/orchestrators/setup/configure.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 115
  - source metadata: repo-current
  - matched terms: transcoding bandwidth planning, configure
  - why selected: source priority 90; 2 matched terms; current-language match 7; historical-language penalty 1
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
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: gateways will route jobs to lower-priced orchestrators, pricePerUnit, gateways filter orchestrators by price, prices are too high, will not receive work, gateway price filtering, Gateways filter orchestrators by price ceilings before routing work. Competitive hardware alone is not enough if operator pricing exceeds gateway maxima., configure
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `orch-active-set-threshold` → official-page: https://explorer.livepeer.org/orchestrators
  - role: primary
  - checked: 2026-03-16
  - result: official page fetched but signal missing
  - rank: 100; score: 100
  - source metadata: reachable
  - why selected: source priority 100
  - why not primary: highest ranked matched source
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
- `orch-siphon-reward-isolation` → repo-file: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
  - role: primary
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 200
  - source metadata: repo-current
  - matched terms: GPU machine can restart, keystore stays on a secure, isolated machine, without you missing rewards, keystore isolated, missed rewards, reward calling, reward safety, split setup, split setup reward safety, A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages., siphon setup
  - why selected: source priority 90; 11 matched terms
  - why not primary: highest ranked matched source
- `orch-siphon-reward-isolation` → github-repo: https://github.com/Stronk-Tech/OrchestratorSiphon
  - role: weaker
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 60; score: 88
  - source metadata: 2026-01-19T11:10:59Z | active
  - matched terms: OrchestratorSiphon, Stronk-Tech
  - why selected: source priority 60; 2 matched terms; recency 56d; state active
  - why not primary: lower source priority than primary evidence

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 5
- evidence_sources: 16
- explicit_page_targets: 6
- inferred_page_targets: 20

## Validation

- target_files: 4
- claim_families: 0
- contradictions: 5
- evidence_sources: 16
