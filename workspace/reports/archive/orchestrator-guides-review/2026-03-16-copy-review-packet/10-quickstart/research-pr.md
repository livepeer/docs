# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T11:58:56.275Z

## Scope

- Changed files:
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/quickstart/video-transcoding.mdx`
  - `v2/orchestrators/quickstart/tutorial.mdx`
  - `v2/orchestrators/quickstart/AI-prompt-start.mdx`
- Target docs pages:
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/quickstart/video-transcoding.mdx`
  - `v2/orchestrators/quickstart/tutorial.mdx`
  - `v2/orchestrators/quickstart/AI-prompt-start.mdx`

## Summary

- Matched claim families: 9
- Verified claims: 1
- Conflicted claims: 5
- Time-sensitive claims: 3
- Unresolved claims: 8
- Contradiction groups: 5
- Propagation queue items: 51
- Evidence sources checked: 16

## Claim Families

- `orch-price-ceiling-filtering` (gateway-price-filtering) — verified, high confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-session-limit-default` (transcoding-session-cap) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — time-sensitive, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`

## Unresolved Items

- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-pool-vs-solo-prerequisites` (conflicted) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-session-limit-default` (time-sensitive) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-consumer-nvenc-session-cap` (time-sensitive) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.

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
- ... 31 more item(s)
