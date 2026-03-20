# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:06:17.036Z

## Scope

- Changed files:
  - `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`
- Target docs pages:
  - `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
  - `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`

## Summary

- Matched claim families: 10
- Verified claims: 1
- Conflicted claims: 5
- Time-sensitive claims: 4
- Unresolved claims: 9
- Contradiction groups: 5
- Propagation queue items: 55
- Evidence sources checked: 17

## Claim Families

- `orch-price-ceiling-filtering` (gateway-price-filtering) — verified, high confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-dual-revenue-model` (operator-revenue-model) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-reward-profitability-threshold` (reward-profitability) — time-sensitive, low confidence, owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — time-sensitive, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-session-limit-default` (transcoding-session-cap) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`

## Unresolved Items

- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-dual-revenue-model` (conflicted) — Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-reward-profitability-threshold` (time-sensitive) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-consumer-nvenc-session-cap` (time-sensitive) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-session-limit-default` (time-sensitive) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.

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
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [verify-only]
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [verify-only]
- ... 35 more item(s)
