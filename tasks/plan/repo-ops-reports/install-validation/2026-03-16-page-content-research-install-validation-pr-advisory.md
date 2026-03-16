# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T01:42:05.545Z

## Scope

- Changed files:
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- Target docs pages:
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`

## Summary

- Matched claim families: 10
- Verified claims: 1
- Conflicted claims: 6
- Time-sensitive claims: 3
- Unresolved claims: 9
- Contradiction groups: 6
- Propagation queue items: 25
- Evidence sources checked: 17

## Claim Families

- `orch-price-ceiling-filtering` (gateway-price-filtering) — verified, high confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-siphon-github-current` (community-tooling-status) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-business-case-cost-viability` (business-case-viability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `orch-reward-profitability-threshold` (reward-profitability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`

## Unresolved Items

- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-pool-vs-solo-prerequisites` (conflicted) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-siphon-github-current` (conflicted) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (time-sensitive) — Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-reward-profitability-threshold` (time-sensitive) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Propagation Queue

- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [verify-only]
- `orch-price-ceiling-filtering` → `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [update-now]
- `orch-bandwidth-per-stream-planning` → `v2/orchestrators/guides/deployment-details/requirements.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` → `v2/orchestrators/guides/deployment-details/requirements.mdx` [verify-only]
- `orch-business-case-cost-viability` → `v2/orchestrators/guides/deployment-details/requirements.mdx` [verify-only]
- `orch-active-set-threshold` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-pool-vs-solo-prerequisites` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-price-ceiling-filtering` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [update-now]
- `orch-siphon-github-current` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/setup-options.mdx` [verify-only]
- `orch-siphon-reward-isolation` → `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` [verify-only]
- `orch-active-set-threshold` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-bandwidth-per-stream-planning` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-batch-ai-vram-threshold` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-business-case-cost-viability` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-pool-vs-solo-prerequisites` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-reward-profitability-threshold` → `v2/orchestrators/guides/operator-considerations/business-case.mdx` [verify-only]
- `orch-reward-profitability-threshold` → `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx` [verify-only]
- ... 5 more item(s)

