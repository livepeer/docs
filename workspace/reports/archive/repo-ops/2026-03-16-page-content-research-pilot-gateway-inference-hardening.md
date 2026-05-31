# Docs Page Research Report

## Scope

- `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`

## Claims Reviewed

- `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`, `gw-offchain-payment-obligation`, `gw-price-cap-role`, `gw-remote-signer-current-scope`, `gw-self-hosted-business-case`
  - extracted: Livepeer fees between Gateways and Orchestrators are settled in ETH on Arbitrum One via probabilistic micropayment (PM) tickets.
  - extracted: Gateways can configure price caps in wei or in USD (converted at runtime via a Chainlink price feed).
  - extracted: Next step: Video On chain video gateway \} icon="link" Video transcoding requires the on chain self managed path.
  - extracted: Remote signing is not supported for video workloads.

## Verified Claims

- `gw-offchain-payment-obligation` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse.
- `gw-price-cap-role` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - summary: Gateway pricing docs should keep the role of caps aligned: on-chain caps act as marketplace filters, while off-chain caps act as safety ceilings for known orchestrators. The same claim family also covers how `-ignoreMaxPriceIfNeeded` changes job-failure behavior.

## Conflicted Claims

- `gw-clearinghouse-public-readiness` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - summary: Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
- `gw-remote-signer-current-scope` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - summary: Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
- `gw-self-hosted-business-case` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
  - summary: Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
- `gw-discord-community-signal` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: When gateway docs rely on community support or current market/pricing conditions, the research runner should surface any repo-available Discord/community signals instead of treating chat as invisible.
- `gw-spe-funded-provider-examples` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.

## Time-Sensitive Claims

- `gw-community-signer-testing-surface` (time-sensitive, medium)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
- `gw-startup-program-current` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support content should only describe the AI Video Startup Program with the level of certainty supported by current official and forum evidence.

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`: general availability, public clearinghouse
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: general availability, public clearinghouse
- `gw-remote-signer-current-scope` (remote-signer-current-scope)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`: Current scope, not supported for video transcoding
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Payments are handled by a connected remote signer or clearinghouse.
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: For operators who want to start without any crypto setup, the community hosted remote signer at provides free ETH for testing and development.
- `gw-self-hosted-business-case` (business-case-viability)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/business-case.mdx`: cost savings, service margin, worth it
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Controls which Orchestrators the gateway can access.
- `gw-discord-community-signal` (community-signal)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: Community, community
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: community
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: LLM, Livepeer Cloud, Streamplace
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: LLM, Livepeer Cloud
  - `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`: Some Livepeer Gateway operators are funded by the Livepeer treasury through a Special Purpose Entity (SPE) grant.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | canonical-owner | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | canonical-owner | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | canonical-owner | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` | guide | canonical-owner | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | canonical-owner | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |

## Evidence Sources

- `gw-offchain-payment-obligation` → repo-file: v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 190
  - matched terms: holds no Ethereum private key, managing PM session state, signing payment tickets, clearinghouse, holds no ETH, off-chain does not mean free, remote signer, off chain payment obligation, Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse., payment guide
  - why selected: source priority 90; 10 matched terms
- `gw-offchain-payment-obligation` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 170
  - matched terms: Off-chain does not mean free, PM tickets, holds no ETH, clearinghouse, remote signer, off chain payment obligation, Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse., payment guide
  - why selected: source priority 90; 8 matched terms
- `gw-clearinghouse-public-readiness` → repo-file: v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 175
  - matched terms: community remote signer, general availability, testing surface, API key sign-up, public clearinghouse, clearinghouse public readiness, Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA., clearinghouse guide
  - why selected: source priority 90; 8 matched terms; current-language match 9; historical-language penalty 1
- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3791
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 70; score: 108
  - matched terms: remote signer, API key sign-up, community remote signer
  - why selected: source priority 70; 3 matched terms; current-language match 2
- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3822
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 70; score: 108
  - matched terms: signer, API key sign-up, community remote signer
  - why selected: source priority 70; 3 matched terms; current-language match 1
- `gw-remote-signer-current-scope` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 175
  - matched terms: off-chain AI gateway, remote signer, video transcoding requires the on-chain self-managed path, live-video-to-video, not supported for video transcoding, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1
- `gw-remote-signer-current-scope` → repo-file: v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 172
  - matched terms: Current scope, Realtime AI Video, not supported for video transcoding, live-video-to-video, remote signer, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 90; 8 matched terms; current-language match 12; historical-language penalty 2
- `gw-remote-signer-current-scope` → github-pr: https://github.com/livepeer/go-livepeer/pull/3822
  - checked: 2026-03-16
  - result: GitHub evidence matched
  - rank: 70; score: 158
  - matched terms: gateway, remote signer, signer, live-video-to-video, not supported for video transcoding, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 70; 8 matched terms; current-language match 1
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 175
  - matched terms: public clearinghouse reaches GA, signer.eliteencoder.net, testing, community signer, community-hosted remote signer, no ETH required, community signer testing surface, payment guide
  - why selected: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 155
  - matched terms: community-hosted remote signer, free ETH for testing, signer.eliteencoder.net, community signer, community signer testing surface, payment guide
  - why selected: source priority 90; 6 matched terms; current-language match 9; historical-language penalty 1
- `gw-community-signer-testing-surface` → repo-discord-signal: .github/workflows/discord-issue-intake.yml
  - checked: 2026-03-16
  - result: repo Discord/community signal matched
  - rank: 40; score: 70
  - matched terms: community, discord, repository_dispatch
  - why selected: source priority 40; 3 matched terms
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/operator-considerations/business-case.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 199
  - matched terms: control, cost savings, and capabilities, service margin, worth it, control, cost savings, hosted gateway, no ETH required in off-chain, self-hosted, business case viability, Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation., business case
  - why selected: source priority 90; 11 matched terms; current-language match 14; historical-language penalty 3
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 155
  - matched terms: Off-chain does not mean free, gateway-as-a-service operator, holds no ETH and no Ethereum key, control, no ETH required in off-chain, service margin
  - why selected: source priority 90; 6 matched terms; current-language match 11; historical-language penalty 1
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 155
  - matched terms: community resources, funding, programmes, hosted gateway, business case viability, business case
  - why selected: source priority 90; 6 matched terms; current-language match 9; historical-language penalty 1
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 140
  - matched terms: discord-issue-intake, discord.com/channels, Discord, community, support
  - why selected: source priority 90; 5 matched terms
- `gw-price-cap-role` → repo-file: v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 160
  - matched terms: ignoreMaxPriceIfNeeded, marketplace filter, safety ceiling, orchAddr, price cap role, Gateway pricing docs should keep the role of caps aligned: on-chain caps act as marketplace filters, while off-chain caps act as safety ceilings for known orchestrators. The same claim family also covers how `-ignoreMaxPriceIfNeeded` changes job-failure behavior., pricing strategy
  - why selected: source priority 90; 7 matched terms
- `gw-price-cap-role` → repo-file: v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
  - rank: 90; score: 130
  - matched terms: maxPricePerCapability, orchAddr, route, price cap role
  - why selected: source priority 90; 4 matched terms
- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - checked: 2026-03-16
  - result: forum topic matched
  - rank: 50; score: 108
  - matched terms: LLM, Livepeer Cloud, Streamplace, LLM SPE, SPE
  - why selected: source priority 50; 5 matched terms; current-language match 1
- `gw-startup-program-current` → official-page: https://www.livepeer.org/dev-hub
  - checked: 2026-03-16
  - result: official page matched
  - rank: 100; score: 148
  - matched terms: Livepeer, developer, AI Video Startup Program, startup program
  - why selected: source priority 100; 4 matched terms; current-language match 1
- `gw-startup-program-current` → forum-topic: https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - checked: 2026-03-16
  - result: forum topic matched
  - rank: 50; score: 85
  - matched terms: Livepeer Cloud, SPE, operator support
  - why selected: source priority 50; 3 matched terms; current-language match 3; historical-language penalty 1

## Validation

- target_files: 1
- claim_families: 6
- contradictions: 5
- evidence_sources: 20
