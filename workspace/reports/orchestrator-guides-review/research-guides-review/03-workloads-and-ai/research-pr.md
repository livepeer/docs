# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:05:47.732Z

## Scope

- Changed files:
  - `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
- Target docs pages:
  - `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`

## Summary

- Matched claim families: 14
- Verified claims: 3
- Conflicted claims: 6
- Time-sensitive claims: 5
- Unresolved claims: 11
- Contradiction groups: 6
- Propagation queue items: 73
- Evidence sources checked: 25

## Claim Families

- `orch-price-ceiling-filtering` (gateway-price-filtering) — verified, high confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-ot-split-capacity-sum` (ot-split-capacity-aggregation) — verified, high confidence, owner: `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `orch-pool-worker-offchain-payouts` (pool-worker-payout-model) — verified, high confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-siphon-github-current` (community-tooling-status) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — time-sensitive, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-commercial-model-warmth` (commercial-model-warmth) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `orch-session-limit-default` (transcoding-session-cap) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-reward-profitability-threshold` (reward-profitability) — time-sensitive, low confidence, owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`

## Unresolved Items

- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-pool-vs-solo-prerequisites` (conflicted) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-siphon-github-current` (conflicted) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-consumer-nvenc-session-cap` (time-sensitive) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-commercial-model-warmth` (time-sensitive) — Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `orch-session-limit-default` (time-sensitive) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-reward-profitability-threshold` (time-sensitive) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Propagation Queue

- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-ot-split-capacity-sum` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [update-now]
- `orch-siphon-github-current` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-ot-split-capacity-sum` → `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [update-now]
- ... 53 more item(s)
