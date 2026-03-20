# Operator Considerations — Research Report

- Registry validate: pass
- Adjudication ledger validate: pass
- docs-page-research run: pass
- docs-page-research-pr-report run: pass

## Summary

- Verified claims: 2
- Conflicted claims: 7
- Time-sensitive claims: 6
- Unverified / historical claims: 0
- Contradiction groups: 7
- Propagation queue items: 73
- Evidence sources checked: 27
- Explicit page targets: 32
- Inferred page targets: 41

## Conflicted Claims

- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-dual-revenue-model` (operator-revenue-model) — Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-active-set-threshold` (stake-threshold) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-siphon-github-current` (community-tooling-status) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.

## Time-Sensitive Claims

- `orch-reward-profitability-threshold` (reward-profitability) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (business-case-viability) — Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-commercial-model-warmth` (commercial-model-warmth) — Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-session-limit-default` (transcoding-session-cap) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.

## Unverified / Historical Claims

- none

## Recommended Research-Driven Changes

- Downgrade or rewrite conflicted claims before any copy rewrite is marked complete.
- Rewrite volatile/current-truth claims conservatively and tie them to evidence or review cadence.
- Carry claim-family follow-ups into dependent pages instead of fixing one page in isolation.

## Propagation / Adjudication Follow-up

- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-pool-worker-offchain-payouts` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [update-now]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [verify-only]

