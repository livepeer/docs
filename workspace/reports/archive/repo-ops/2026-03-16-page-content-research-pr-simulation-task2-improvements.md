# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T03:50:21.055Z

## Scope

- Changed files:
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- Target docs pages:
  - `v2/orchestrators/guides/operator-considerations/business-case.mdx`
  - `v2/orchestrators/guides/deployment-details/requirements.mdx`
  - `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`

## Summary

- Matched claim families: 17
- Verified claims: 1
- Conflicted claims: 10
- Time-sensitive claims: 6
- Unresolved claims: 16
- Contradiction groups: 10
- Propagation queue items: 46
- Evidence sources checked: 31

## Claim Families

- `gw-price-cap-role` (price-cap-role) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `gw-discord-community-signal` (community-signal) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-siphon-github-current` (community-tooling-status) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-business-case-cost-viability` (business-case-viability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `orch-commercial-model-warmth` (commercial-model-warmth) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `gw-community-signer-testing-surface` (community-signer-testing-surface) — time-sensitive, medium confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `orch-session-limit-default` (transcoding-session-cap) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-reward-profitability-threshold` (reward-profitability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`

## Unresolved Items

- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `gw-clearinghouse-public-readiness` (conflicted) — Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
- `orch-consumer-nvenc-session-cap` (conflicted) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `orch-pool-vs-solo-prerequisites` (conflicted) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `gw-discord-community-signal` (conflicted) — When gateway docs rely on community support or current market/pricing conditions, the research runner should surface any repo-available Discord/community signals instead of treating chat as invisible.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-siphon-github-current` (conflicted) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (time-sensitive) — Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-commercial-model-warmth` (time-sensitive) — Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.
- `gw-community-signer-testing-surface` (time-sensitive) — Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
- `orch-session-limit-default` (time-sensitive) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-reward-profitability-threshold` (time-sensitive) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.

## Propagation Queue

- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` [update-now]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` [update-now]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` [verify-only]
- `orch-commercial-model-warmth` → `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` [verify-only]
- `orch-commercial-model-warmth` → `v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx` [verify-only]
- `orch-ai-routing-capability-based` → `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx` [verify-only]
- `orch-consumer-nvenc-session-cap` → `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx` [verify-only]
- ... 26 more item(s)
