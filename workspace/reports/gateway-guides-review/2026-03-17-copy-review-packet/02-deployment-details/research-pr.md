# Advisory Research PR Report

- Status: experimental, non-blocking
- Generated: 2026-03-16T14:09:52.205Z

## Scope

- Changed files:
  - `v2/gateways/guides/deployment-details/setup-options.mdx`
  - `v2/gateways/guides/deployment-details/setup-requirements.mdx`
- Target docs pages:
  - `v2/gateways/guides/deployment-details/setup-options.mdx`
  - `v2/gateways/guides/deployment-details/setup-requirements.mdx`

## Summary

- Matched claim families: 7
- Verified claims: 1
- Conflicted claims: 3
- Time-sensitive claims: 2
- Unresolved claims: 6
- Contradiction groups: 3
- Propagation queue items: 24
- Evidence sources checked: 14

## Claim Families

- `gw-offchain-payment-obligation` (off-chain-payment-obligation) — verified, high confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-self-hosted-business-case` (business-case-viability) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples) — conflicted, low confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `gw-remote-signer-current-scope` (remote-signer-current-scope) — conflicted, low confidence, owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- `gw-community-signer-testing-surface` (community-signer-testing-surface) — time-sensitive, medium confidence, owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `gw-support-contact-channel` (gateway-support-contact-channel) — time-sensitive, medium confidence, owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `gw-discord-community-signal` (discord-intake-repo-signal) — unverified, medium confidence, owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`

## Unresolved Items

- `gw-self-hosted-business-case` (conflicted) — Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `gw-spe-funded-provider-examples` (conflicted) — Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-remote-signer-current-scope` (conflicted) — Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
- `gw-community-signer-testing-surface` (time-sensitive) — Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
- `gw-support-contact-channel` (time-sensitive) — Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking.
- `gw-discord-community-signal` (unverified) — Repo-available Discord intake workflow artifacts are a weak supplementary signal for technical gateway issue intake only. They should never stand in for programme status, support availability, or general support-channel claims.

## Propagation Queue

- `gw-community-signer-testing-surface` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/operator-considerations/business-case.mdx` [update-now]
- `gw-self-hosted-business-case` → `v2/gateways/guides/operator-considerations/business-case.mdx` [verify-only]
- `gw-discord-community-signal` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-spe-funded-provider-examples` → `v2/gateways/guides/operator-considerations/production-gateways.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` [update-now]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-offchain-payment-obligation` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [update-now]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` [verify-only]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx` [verify-only]
- `gw-support-contact-channel` → `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` [verify-only]
- `gw-community-signer-testing-surface` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-remote-signer-current-scope` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- `gw-self-hosted-business-case` → `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` [verify-only]
- ... 4 more item(s)
