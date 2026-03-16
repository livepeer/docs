# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:10:28.810Z

## Scope

- Changed files:
  - `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`
  - `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx`
  - `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx`
  - `v2/gateways/guides/tutorials/tutorial-3-go-production.mdx`
- Target docs pages:
  - `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`
  - `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx`
  - `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx`
  - `v2/gateways/guides/tutorials/tutorial-3-go-production.mdx`

## Summary

- Matched claim families: 7
- Verified claims: 2
- Conflicted claims: 4
- Time-sensitive claims: 0
- Unresolved claims: 5
- Contradiction groups: 4
- Propagation queue items: 23
- Evidence sources checked: 15

## Claim Families

- `gw-offchain-payment-obligation` (off-chain-payment-obligation) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-price-cap-role` (price-cap-role) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- `gw-remote-signer-current-scope` (remote-signer-current-scope) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- `gw-self-hosted-business-case` (business-case-viability) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
- `gw-discord-community-signal` (discord-intake-repo-signal) — unverified, medium confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`

## Unresolved Items

- `gw-remote-signer-current-scope` (conflicted) — Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-clearinghouse-public-readiness` (conflicted) — Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
- `gw-self-hosted-business-case` (conflicted) — Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `gw-discord-community-signal` (unverified) — Repo-available Discord intake workflow artifacts are a weak supplementary signal for technical gateway issue intake only. They should never stand in for programme status, support availability, or general support-channel claims.

## Propagation Queue

- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [update-now]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` [update-now]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` [update-now]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- ... 3 more item(s)
