# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T06:10:19.785Z

## Scope

- Changed files:
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- Target docs pages:
  - `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`

## Summary

- Matched claim families: 25
- Verified claims: 5
- Conflicted claims: 13
- Time-sensitive claims: 7
- Unresolved claims: 20
- Contradiction groups: 13
- Propagation queue items: 108
- Evidence sources checked: 49

## Claim Families

- `gw-offchain-payment-obligation` (off-chain-payment-obligation) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-price-cap-role` (price-cap-role) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- `orch-ot-split-capacity-sum` (ot-split-capacity-aggregation) — verified, high confidence, owner: `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `orch-pool-worker-offchain-payouts` (pool-worker-payout-model) — verified, high confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-price-ceiling-filtering` (gateway-price-filtering) — verified, high confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- `gw-discord-community-signal` (community-signal) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-remote-signer-current-scope` (remote-signer-current-scope) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- `gw-self-hosted-business-case` (business-case-viability) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
- `orch-siphon-reward-isolation` (split-setup-reward-safety) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `orch-siphon-github-current` (community-tooling-status) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-active-set-threshold` (stake-threshold) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-dual-revenue-model` (operator-revenue-model) — conflicted, low confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-pool-vs-solo-prerequisites` (setup-prerequisites) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `orch-ai-routing-capability-based` (ai-routing-mechanics) — conflicted, low confidence, owner: `v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx`
- `orch-batch-ai-vram-threshold` (hardware-vram-minimums) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `orch-consumer-nvenc-session-cap` (consumer-nvenc-session-cap) — conflicted, low confidence, owner: `v2/orchestrators/guides/deployment-details/requirements.mdx`
- `gw-community-signer-testing-surface` (community-signer-testing-surface) — time-sensitive, medium confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-startup-program-current` (programme-availability) — time-sensitive, medium confidence, owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `orch-session-limit-default` (transcoding-session-cap) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-reward-profitability-threshold` (reward-profitability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx`
- `orch-bandwidth-per-stream-planning` (transcoding-bandwidth-planning) — time-sensitive, medium confidence, owner: `v2/orchestrators/setup/configure.mdx`
- `orch-business-case-cost-viability` (business-case-viability) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `orch-commercial-model-warmth` (commercial-model-warmth) — time-sensitive, medium confidence, owner: `v2/orchestrators/guides/operator-considerations/business-case.mdx`

## Unresolved Items

- `gw-clearinghouse-public-readiness` (conflicted) — Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
- `gw-discord-community-signal` (conflicted) — When gateway docs rely on community support or current market/pricing conditions, the research runner should surface any repo-available Discord/community signals instead of treating chat as invisible.
- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-remote-signer-current-scope` (conflicted) — Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
- `gw-self-hosted-business-case` (conflicted) — Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `orch-siphon-reward-isolation` (conflicted) — A split setup with OrchestratorSiphon isolates the keystore from the GPU machine and keeps reward calling independent of GPU uptime. Docs should keep that claim aligned across setup-path pages.
- `orch-siphon-github-current` (conflicted) — Split-setup guidance depends on OrchestratorSiphon still being an active community-maintained project. That claim should be checked against the current GitHub repository, not just repeated in docs.
- `orch-active-set-threshold` (conflicted) — Solo transcoding guidance repeatedly states that operators need enough bonded LPT to enter the active set, often phrased as top 100, but that wording is time-sensitive and should not be treated as durable fact without current evidence.
- `orch-dual-revenue-model` (conflicted) — Operator economics pages should keep the two revenue streams aligned: ETH service fees scale with workload and gateway demand, while LPT inflation rewards scale with stake and reward-call reliability. Docs should not flatten those into one generic earnings model.
- `orch-pool-vs-solo-prerequisites` (conflicted) — Pool workers and solo operators have different prerequisites. Pages should not imply that LPT, ETH, or public service exposure are universal requirements for every orchestrator entry path.
- `orch-ai-routing-capability-based` (conflicted) — AI jobs are routed primarily by capability match and price ceilings rather than by stake weight. Docs should not collapse AI routing into the same rules as transcoding routing.
- `orch-batch-ai-vram-threshold` (conflicted) — Docs disagree on the practical VRAM minimum for batch AI and real-time AI workloads. Hardware and setup pages should not present conflicting minimums as equally current.
- `orch-consumer-nvenc-session-cap` (conflicted) — Consumer NVIDIA NVENC session-cap guidance is factual but volatile. Hardware requirement and transcoding guides should stay aligned on whether GeForce-class cards are typically capped at 2-3 concurrent sessions and whether newer generations changed that default.
- `gw-community-signer-testing-surface` (time-sensitive) — Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
- `gw-startup-program-current` (time-sensitive) — Gateway support content should only describe the AI Video Startup Program with the level of certainty supported by current official and forum evidence.
- `orch-session-limit-default` (time-sensitive) — The default session limit and overload behavior are operational facts that multiple setup and hardware pages depend on. When docs state the default cap or the error condition, they should stay aligned with current go-livepeer behavior.
- `orch-reward-profitability-threshold` (time-sensitive) — Reward-call profitability guidance should remain explicitly time-sensitive because gas cost, ETH price, and LPT price move. Docs must not present rough thresholds as durable constants.
- `orch-bandwidth-per-stream-planning` (time-sensitive) — Bandwidth planning for transcoding is currently presented as an approximate planning rule rather than a single durable network constant. Pages should make the source-resolution assumption and rendition-set basis explicit when quoting per-stream bandwidth.
- `orch-business-case-cost-viability` (time-sensitive) — Business-case guidance should explicitly stay approximate and local-context dependent. Payback, electricity cost, and 'worth it' framing are useful, but they should not be presented as portable constants across operators, geographies, or market conditions.
- `orch-commercial-model-warmth` (time-sensitive) — Commercial AI operator guidance should keep warm-model, pre-loaded startup, and cold-start SLA language aligned across setup and business-case pages. These claims describe real operational expectations, but they remain experimental and workload-sensitive.

## Propagation Queue

- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-startup-program-current` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [update-now]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` [update-now]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- ... 88 more item(s)
