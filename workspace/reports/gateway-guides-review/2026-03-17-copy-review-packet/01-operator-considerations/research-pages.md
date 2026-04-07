# Docs Page Research Report

## Scope

- `v2/gateways/guides/operator-considerations/business-case.mdx`
- `v2/gateways/guides/operator-considerations/production-gateways.mdx`

## Claims Reviewed

- `v2/gateways/guides/operator-considerations/business-case.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`, `gw-offchain-payment-obligation`, `gw-price-cap-role`, `gw-self-hosted-business-case`, `gw-startup-program-current`
  - extracted: Best when: You are processing significant volume and want to reduce per request costs You need custom routing, SLA policies, or geographic preferences You want to build a product or service layer on top of Livepeer You are embedding AI or video capabilities directly in your infrastructure What it requires: A Linux server (for AI or Dual node types; Video also supports Windows) No ETH required in off chain operational mode On chain operational mode requires an ETH deposit on Arbitrum Business Model Gateways are Product routers.
  - extracted: Orchestrators earn protocol fees.
  - extracted: Actor Earnings Role Earns from Currency Orchestrator Receives payment from gateways for routing and coordinating compute work ETH (Arbitrum) Transcoder / AI Worker Receives payment from orchestrators for performing actual work ETH (Arbitrum) Redeemer Earns fees for redeeming winning payment tickets on chain ETH (Arbitrum) Gateway Pays for compute.
  - extracted: Pays ETH out; charges customers in any currency Operator Models You are building a product and currently using a hosted gateway such as Daydream, Livepeer Studio, or Livepeer Cloud.
- `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - claim families: `gw-discord-community-signal`, `gw-spe-funded-provider-examples`
  - extracted: This page documents real applications and community projects that are already running, gives you tooling references, and points to Foundation programmes for new builders.
  - extracted: Embody provides real time interactive 3D avatars for education, training, and communication using Unreal Engine MetaHumans with Pixel Streaming technology.
  - extracted: Website: Blog and tutorials at includes gateway setup guides Getting started guide: LLM SPE SPE Funded What it is: The first SPE dedicated to a specific AI pipeline.
  - extracted: Launched in September 2024, the LLM SPE operates a public AI gateway that routes LLM inference workloads to GPU operators on the Livepeer network.

## Verified Claims

- `gw-offchain-payment-obligation` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - evidence why: source priority 90; 10 matched terms
- `gw-price-cap-role` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - summary: Gateway pricing docs should keep the role of caps aligned: on-chain caps act as marketplace filters, while off-chain caps act as safety ceilings for known orchestrators. The same claim family also covers how `-ignoreMaxPriceIfNeeded` changes job-failure behavior.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx
  - evidence why: source priority 90; 7 matched terms

## Conflicted Claims

- `gw-spe-funded-provider-examples` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
  - primary evidence: forum-topic → https://forum.livepeer.org/t/spe-milestone-report/3035
  - evidence why: source priority 50; 5 matched terms; claim-family source preference 14; recency 207d; state open; current-language match 1
- `gw-self-hosted-business-case` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
  - summary: Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
  - primary evidence: repo-file → v2/gateways/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 11 matched terms; current-language match 14; historical-language penalty 3
- `gw-clearinghouse-public-readiness` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - summary: Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 9; historical-language penalty 1
- `gw-remote-signer-current-scope` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - summary: Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
  - primary evidence: github-pr → https://github.com/livepeer/go-livepeer/pull/3822
  - evidence why: source priority 70; 8 matched terms; claim-family source preference 12; recency 44d; state merged; current-language match 1

## Time-Sensitive Claims

- `gw-community-signer-testing-surface` (time-sensitive, medium)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1
- `gw-startup-program-current` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support content should only describe the AI Video Startup Program with the level of certainty supported by current official and forum evidence.
  - primary evidence: official-page → https://www.livepeer.org/dev-hub
  - evidence why: source priority 100; 4 matched terms; current-language match 1

## Unverified / Historical Claims

- `gw-discord-community-signal` (unverified, medium)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Repo-available Discord intake workflow artifacts are a weak supplementary signal for technical gateway issue intake only. They should never stand in for programme status, support availability, or general support-channel claims.
  - primary evidence: repo-file → .github/workflows/discord-issue-intake.yml
  - evidence why: source priority 90; 4 matched terms

## Cross-Page Contradictions

- `gw-spe-funded-provider-examples` (ecosystem-provider-examples)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: LLM, Livepeer Cloud, Streamplace
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: LLM, Livepeer Cloud
  - `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`: Some Livepeer Gateway operators are funded by the Livepeer treasury through a Special Purpose Entity (SPE) grant.
- `gw-self-hosted-business-case` (business-case-viability)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/business-case.mdx`: cost savings, service margin, worth it
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Controls which Orchestrators the gateway can access.
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`: general availability, public clearinghouse
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: general availability, public clearinghouse
- `gw-remote-signer-current-scope` (remote-signer-current-scope)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`: Current scope, not supported for video transcoding
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Payments are handled by a connected remote signer or clearinghouse.
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: For operators who want to start without any crypto setup, the community hosted remote signer at provides free ETH for testing and development.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | inferred-page | verify-only | `gw-discord-community-signal` |
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
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |

## Evidence Sources

- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - role: primary
  - checked: 2026-03-17
  - result: forum topic matched
  - rank: 50; score: 125
  - source metadata: 2025-08-21T11:45:27.751Z | open
  - matched terms: LLM, Livepeer Cloud, Streamplace, LLM SPE, SPE
  - why selected: source priority 50; 5 matched terms; claim-family source preference 14; recency 207d; state open; current-language match 1
  - why not primary: highest ranked matched source
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/operator-considerations/business-case.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 199
  - source metadata: repo-current
  - matched terms: control, cost savings, and capabilities, service margin, worth it, control, cost savings, hosted gateway, no ETH required in off-chain, self-hosted, business case viability, Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation., business case
  - why selected: source priority 90; 11 matched terms; current-language match 14; historical-language penalty 3
  - why not primary: highest ranked matched source
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 155
  - source metadata: repo-current
  - matched terms: Off-chain does not mean free, gateway-as-a-service operator, holds no ETH and no Ethereum key, control, no ETH required in off-chain, service margin
  - why selected: source priority 90; 6 matched terms; current-language match 11; historical-language penalty 1
  - why not primary: fewer matched signals than primary evidence
- `gw-self-hosted-business-case` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 155
  - source metadata: repo-current
  - matched terms: community resources, funding, programmes, hosted gateway, business case viability, business case
  - why selected: source priority 90; 6 matched terms; current-language match 9; historical-language penalty 1
  - why not primary: fewer matched signals than primary evidence
- `gw-offchain-payment-obligation` → repo-file: v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 190
  - source metadata: repo-current
  - matched terms: holds no Ethereum private key, managing PM session state, signing payment tickets, clearinghouse, holds no ETH, off-chain does not mean free, remote signer, off chain payment obligation, Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse., payment guide
  - why selected: source priority 90; 10 matched terms
  - why not primary: highest ranked matched source
- `gw-offchain-payment-obligation` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 170
  - source metadata: repo-current
  - matched terms: Off-chain does not mean free, PM tickets, holds no ETH, clearinghouse, remote signer, off chain payment obligation, Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse., payment guide
  - why selected: source priority 90; 8 matched terms
  - why not primary: fewer matched signals than primary evidence
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 130
  - source metadata: repo-current
  - matched terms: discord-issue-intake, discord.com/channels, repository_dispatch, discord intake repo signal
  - why selected: source priority 90; 4 matched terms
  - why not primary: highest ranked matched source
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 175
  - source metadata: repo-current
  - matched terms: public clearinghouse reaches GA, signer.eliteencoder.net, testing, community signer, community-hosted remote signer, no ETH required, community signer testing surface, payment guide
  - why selected: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1
  - why not primary: highest ranked matched source
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 155
  - source metadata: repo-current
  - matched terms: community-hosted remote signer, free ETH for testing, signer.eliteencoder.net, community signer, community signer testing surface, payment guide
  - why selected: source priority 90; 6 matched terms; current-language match 9; historical-language penalty 1
  - why not primary: fewer matched signals than primary evidence
- `gw-community-signer-testing-surface` → repo-discord-signal: .github/workflows/discord-issue-intake.yml
  - role: weaker
  - checked: 2026-03-17
  - result: repo Discord/community signal matched
  - rank: 40; score: 59
  - source metadata: repo-current
  - matched terms: community, discord, repository_dispatch
  - why selected: source priority 40; 3 matched terms; discord cap 59
  - why not primary: lower source priority than primary evidence
- `gw-startup-program-current` → official-page: https://www.livepeer.org/dev-hub
  - role: primary
  - checked: 2026-03-17
  - result: official page matched
  - rank: 100; score: 148
  - source metadata: reachable
  - matched terms: Livepeer, developer, AI Video Startup Program, startup program
  - why selected: source priority 100; 4 matched terms; current-language match 1
  - why not primary: highest ranked matched source
- `gw-startup-program-current` → forum-topic: https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - role: weaker
  - checked: 2026-03-17
  - result: forum topic matched
  - rank: 50; score: 102
  - source metadata: 2025-06-30T12:58:25.570Z | open
  - matched terms: Livepeer Cloud, SPE, operator support
  - why selected: source priority 50; 3 matched terms; claim-family source preference 14; recency 259d; state open; current-language match 3; historical-language penalty 1
  - why not primary: lower source priority than primary evidence
- `gw-clearinghouse-public-readiness` → repo-file: v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 175
  - source metadata: repo-current
  - matched terms: community remote signer, general availability, testing surface, API key sign-up, public clearinghouse, clearinghouse public readiness, Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA., clearinghouse guide
  - why selected: source priority 90; 8 matched terms; current-language match 9; historical-language penalty 1
  - why not primary: highest ranked matched source
- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3791
  - role: weaker
  - checked: 2026-03-17
  - result: GitHub evidence matched
  - rank: 70; score: 134
  - source metadata: 2026-01-26T17:34:15Z | merged
  - matched terms: remote signer, API key sign-up, community remote signer
  - why selected: source priority 70; 3 matched terms; claim-family source preference 12; recency 48d; state merged; current-language match 2
  - why not primary: lower source priority than primary evidence
- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3822
  - role: weaker
  - checked: 2026-03-17
  - result: GitHub evidence matched
  - rank: 70; score: 134
  - source metadata: 2026-01-31T04:25:09Z | merged
  - matched terms: signer, API key sign-up, community remote signer
  - why selected: source priority 70; 3 matched terms; claim-family source preference 12; recency 44d; state merged; current-language match 1
  - why not primary: lower source priority than primary evidence
- `gw-price-cap-role` → repo-file: v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 160
  - source metadata: repo-current
  - matched terms: ignoreMaxPriceIfNeeded, marketplace filter, safety ceiling, orchAddr, price cap role, Gateway pricing docs should keep the role of caps aligned: on-chain caps act as marketplace filters, while off-chain caps act as safety ceilings for known orchestrators. The same claim family also covers how `-ignoreMaxPriceIfNeeded` changes job-failure behavior., pricing strategy
  - why selected: source priority 90; 7 matched terms
  - why not primary: highest ranked matched source
- `gw-price-cap-role` → repo-file: v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 130
  - source metadata: repo-current
  - matched terms: maxPricePerCapability, orchAddr, route, price cap role
  - why selected: source priority 90; 4 matched terms
  - why not primary: fewer matched signals than primary evidence
- `gw-remote-signer-current-scope` → github-pr: https://github.com/livepeer/go-livepeer/pull/3822
  - role: primary
  - checked: 2026-03-17
  - result: GitHub evidence matched
  - rank: 70; score: 182
  - source metadata: 2026-01-31T04:25:09Z | merged
  - matched terms: gateway, remote signer, signer, live-video-to-video, not supported for video transcoding, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 70; 8 matched terms; claim-family source preference 12; recency 44d; state merged; current-language match 1
  - why not primary: highest ranked matched source
- `gw-remote-signer-current-scope` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 175
  - source metadata: repo-current
  - matched terms: off-chain AI gateway, remote signer, video transcoding requires the on-chain self-managed path, live-video-to-video, not supported for video transcoding, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1
  - why not primary: older or less current than primary evidence
- `gw-remote-signer-current-scope` → repo-file: v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - role: weaker
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 172
  - source metadata: repo-current
  - matched terms: Current scope, Realtime AI Video, not supported for video transcoding, live-video-to-video, remote signer, remote signer current scope, Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding., remote signers
  - why selected: source priority 90; 8 matched terms; current-language match 12; historical-language penalty 2
  - why not primary: older or less current than primary evidence

## Trust Summary

- unresolved_claims: 1
- contradiction_groups: 4
- evidence_sources: 20
- explicit_page_targets: 9
- inferred_page_targets: 1

## Validation

- target_files: 2
- claim_families: 8
- contradictions: 4
- evidence_sources: 20
