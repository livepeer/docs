# Deployment Details — Research Report

- Registry validate: pass
- Adjudication ledger validate: pass
- docs-page-research run: pass
- docs-page-research-pr-report run: pass

## Summary

- Verified claims: 3
- Conflicted claims: 7
- Time-sensitive claims: 5
- Unverified / historical claims: 0
- Contradiction groups: 7
- Propagation queue items: 75
- Evidence sources checked: 27
- Explicit page targets: 8
- Inferred page targets: 23

## Conflicted Claims

- `orch-siphon-reward-isolation` (split-setup-reward-safety) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-siphon-github-current` (community-tooling-status) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-active-set-threshold` (stake-threshold) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-dual-revenue-model` (operator-revenue-model) — Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.

## Time-Sensitive Claims

- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-session-limit-default` (transcoding-session-cap) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-commercial-model-warmth` (commercial-model-warmth) — Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `orch-reward-profitability-threshold` (reward-profitability) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Unverified / Historical Claims

- none

## Recommended Research-Driven Changes

- Downgrade or rewrite conflicted claims before this tranche is treated as copy-stable.
- Rewrite current-truth language conservatively and attach explicit review cadence or source boundaries to volatile claims.
- Prioritise update-now propagation targets on `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`, `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`, `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` before tranche-wide wording cleanup.
- Fix registry/path drift before the next research rerun so missing canonical or dependent references stop obscuring the findings.
- Expand claim-family coverage only where pages still fall through without matched families: `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`, `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`.

## Propagation / Adjudication Follow-up

- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [update-now]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [update-now]
- `orch-pool-worker-offchain-payouts` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [update-now]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` [update-now]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [update-now]
- `orch-session-limit-default` -> `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [verify-only]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` [verify-only]
- `orch-active-set-threshold` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-ai-routing-capability-based` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [update-now]
- `orch-pool-vs-solo-prerequisites` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-pool-worker-offchain-payouts` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [update-now]
- `orch-price-ceiling-filtering` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [update-now]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` -> `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [verify-only]
- `orch-ot-split-capacity-sum` -> `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [update-now]
- `orch-session-limit-default` -> `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [verify-only]
- `orch-siphon-github-current` -> `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [verify-only]
- `orch-siphon-reward-isolation` -> `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [verify-only]
- `orch-active-set-threshold` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-bandwidth-per-stream-planning` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-commercial-model-warmth` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-dual-revenue-model` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-pool-vs-solo-prerequisites` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` [verify-only]
- `orch-active-set-threshold` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-bandwidth-per-stream-planning` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-dual-revenue-model` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-pool-vs-solo-prerequisites` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/guides/operator-considerations/requirements.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/operator-considerations/requirements.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx` [verify-only]
- `orch-reward-profitability-threshold` -> `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx` [verify-only]
- `orch-bandwidth-per-stream-planning` -> `v2/orchestrators/setup/configure.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/setup/configure.mdx` [verify-only]
- `orch-price-ceiling-filtering` -> `v2/orchestrators/setup/configure.mdx` [update-now]
- `orch-session-limit-default` -> `v2/orchestrators/setup/configure.mdx` [verify-only]
- `orch-session-limit-default` -> `v2/orchestrators/setup/connect-and-activate.mdx` [verify-only]
- `orch-session-limit-default` -> `v2/orchestrators/setup/guide.mdx` [verify-only]
- `orch-active-set-threshold` -> `v2/orchestrators/setup/rcs-requirements.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` -> `v2/orchestrators/setup/rcs-requirements.mdx` [verify-only]
- `orch-pool-vs-solo-prerequisites` -> `v2/orchestrators/setup/rcs-requirements.mdx` [verify-only]
- `orch-pool-worker-offchain-payouts` -> `v2/orchestrators/setup/rcs-requirements.mdx` [update-now]
- `orch-session-limit-default` -> `v2/orchestrators/setup/rcs-requirements.mdx` [verify-only]

## Registry/path Drift

- `orch-commercial-model-warmth` (commercial-model-warmth) -> `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-ai-routing-capability-based` (ai-routing-mechanics) -> `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [canonical-owner] — canonical owner path does not resolve
- `orch-ai-routing-capability-based` (ai-routing-mechanics) -> `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) -> `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-ai-routing-capability-based` (ai-routing-mechanics) -> `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-commercial-model-warmth` (commercial-model-warmth) -> `v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) -> `v2/orchestrators/guides/deployment-details/requirements.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) -> `v2/orchestrators/guides/deployment-details/requirements.mdx` [canonical-owner] — canonical owner path does not resolve
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) -> `v2/orchestrators/guides/deployment-details/requirements.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) -> `v2/orchestrators/guides/deployment-details/requirements.mdx` [canonical-owner] — canonical owner path does not resolve
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) -> `v2/orchestrators/guides/deployment-details/requirements.mdx` [evidence-ref] — repo evidence path does not resolve
- `orch-reward-profitability-threshold` (reward-profitability) -> `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` [canonical-owner] — canonical owner path does not resolve
- `orch-reward-profitability-threshold` (reward-profitability) -> `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` [evidence-ref] — repo evidence path does not resolve

## Registry Coverage Gaps

- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
