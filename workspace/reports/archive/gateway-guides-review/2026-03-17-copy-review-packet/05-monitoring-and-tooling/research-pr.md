# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:10:09.700Z

## Scope

- Changed files:
  - `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`
- Target docs pages:
  - `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx`
  - `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`

## Summary

- Matched claim families: 4
- Verified claims: 1
- Conflicted claims: 2
- Time-sensitive claims: 1
- Unresolved claims: 3
- Contradiction groups: 2
- Propagation queue items: 14
- Evidence sources checked: 7

## Claim Families

- `gw-offchain-payment-obligation` (off-chain-payment-obligation) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-self-hosted-business-case` (business-case-viability) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
- `gw-support-contact-channel` (gateway-support-contact-channel) — time-sensitive, medium confidence, owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`

## Unresolved Items

- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-self-hosted-business-case` (conflicted) — Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `gw-support-contact-channel` (time-sensitive) — Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking.

## Propagation Queue

- `gw-offchain-payment-obligation` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [update-now]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [update-now]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx` [verify-only]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` [verify-only]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` [verify-only]
