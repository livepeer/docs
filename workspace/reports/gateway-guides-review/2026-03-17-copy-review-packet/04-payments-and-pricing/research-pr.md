# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:10:04.982Z

## Scope

- Changed files:
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - `v2/gateways/guides/payments-and-pricing/funding-guide.mdx`
  - `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- Target docs pages:
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - `v2/gateways/guides/payments-and-pricing/funding-guide.mdx`
  - `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`

## Summary

- Matched claim families: 7
- Verified claims: 2
- Conflicted claims: 4
- Time-sensitive claims: 1
- Unresolved claims: 5
- Contradiction groups: 4
- Propagation queue items: 26
- Evidence sources checked: 17

## Claim Families

- `gw-offchain-payment-obligation` (off-chain-payment-obligation) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-price-cap-role` (price-cap-role) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- `gw-remote-signer-current-scope` (remote-signer-current-scope) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- `gw-self-hosted-business-case` (business-case-viability) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-community-signer-testing-surface` (community-signer-testing-surface) — time-sensitive, medium confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`

## Unresolved Items

- `gw-remote-signer-current-scope` (conflicted) — Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
- `gw-clearinghouse-public-readiness` (conflicted) — Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
- `gw-self-hosted-business-case` (conflicted) — Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-community-signer-testing-surface` (time-sensitive) — Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.

## Propagation Queue

- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [update-now]
- `gw-clearinghouse-public-readiness` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` [update-now]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-price-cap-role` → `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` [update-now]
- ... 6 more item(s)
