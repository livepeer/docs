# Docs Page Research Report

## Scope

- `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx`
- `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx`
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`

## Claims Reviewed

- `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx`
  - claim families: none
  - extracted: What it enables: Python native gateway integration for ML pipelines, Jupyter notebooks, and Python web applications.
  - extracted: Endpoint: Cost: Free (as of community Discord confirmation) tools.livepeer.cloud What it is: A community dashboard for monitoring the Livepeer AI network.
  - extracted: What it enables: Gateway operators can use this to identify and filter orchestrators for their workloads, check current market pricing, and monitor network wide AI capacity.
  - extracted: Site: was previously the community monitoring site but is currently showing an nginx default page.
- `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx`
  - claim families: `gw-price-cap-role`
  - extracted: From the Discord discussion that defined this model: "The user never interacts with Livepeer contracts.
  - extracted: Multi tenant architecture Authentication flow Tenant isolation Each customer (tenant) operates within boundaries set by their API key: Isolation concern How NaaP handles it Request quotas Per key rate limits (requests/minute, requests/day) Usage caps Per key maximum usage (pixels, inferences, minutes) Billing separation Per key usage tracking for independent invoicing Failure isolation One customer exceeding quota does not affect others Data separation Per key logs and metrics Orchestrator affinity For premium tenants, you can configure orchestrator routing preferences: Route premium customers to high tier orchestrators (lower latency, higher reliability) Route budget customers to standard orchestrators Route specific workload types to capability matched orchestrators This is configured at the middleware layer using or per request path.
  - extracted: Building the product layer Option 1: Use the NaaP reference implementation The fastest path.
  - extracted: What you get out of the box: JWT auth via SIWE API key generation and management Usage tracking per key Dashboard UI What you still need to build: Payment integration (Stripe, crypto billing, etc.) Custom pricing tiers Customer onboarding flow Production monitoring and alerting Option 2: Build your own product layer If your platform has specific requirements that NaaP does not cover, build your own using standard middleware patterns.
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`, `gw-remote-signer-current-scope`, `gw-self-hosted-business-case`, `gw-spe-funded-provider-examples`, `gw-startup-program-current`, `gw-support-contact-channel`
  - extracted: The Livepeer ecosystem provides funding, programmes, and community resources for Gateway operators at every stage from first time builders to production platform operators.
  - extracted: Currently funded SPEs operating Gateways: SPE What it funds Status Livepeer Cloud SPE Free public AI and video Gateways Active LLM SPE LLM inference routing on the Livepeer network Active How to propose an SPE: 1.
  - extracted: Engage the community on and 2.
  - extracted: Write a proposal with clear public benefit, verifiable milestones, and realistic budget 3.
- `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`
  - claim families: `gw-spe-funded-provider-examples`, `gw-startup-program-current`
  - extracted: SPEs are purpose built: each one has a defined mandate, a requested budget, and milestones it is accountable to deliver.
  - extracted: If you are an individual developer looking to experiment, the AI Video Startup Programme is the more appropriate route.
  - extracted: This makes it viable to: Run public gateways at no cost to developers lowering the barrier for new builders to try Livepeer Operate specialised gateways (LLM only, BYOC, specific model sets) that serve an ecosystem gap rather than a mass market Build gateway infrastructure (tooling, dashboards, clearinghouse components) that the whole ecosystem benefits from, where a commercial return is indirect or long term In exchange, the SPE is accountable to token holders via milestone reporting and periodic renewal proposals.
  - extracted: Specific ones ("we will maintain 99.5% uptime on a public AI inference gateway for 6 months and serve N developers") do.

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
- `gw-remote-signer-current-scope` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - summary: Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
  - primary evidence: github-pr → https://github.com/livepeer/go-livepeer/pull/3822
  - evidence why: source priority 70; 8 matched terms; claim-family source preference 12; recency 44d; state merged; current-language match 1
- `gw-clearinghouse-public-readiness` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - summary: Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 9; historical-language penalty 1

## Time-Sensitive Claims

- `gw-support-contact-channel` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking.
  - primary evidence: repo-file → v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1
- `gw-startup-program-current` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support content should only describe the AI Video Startup Program with the level of certainty supported by current official and forum evidence.
  - primary evidence: official-page → https://www.livepeer.org/dev-hub
  - evidence why: source priority 100; 4 matched terms; current-language match 1
- `gw-community-signer-testing-surface` (time-sensitive, medium)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1

## Unverified / Historical Claims

- None

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
- `gw-remote-signer-current-scope` (remote-signer-current-scope)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`: Current scope, not supported for video transcoding
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Payments are handled by a connected remote signer or clearinghouse.
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: For operators who want to start without any crypto setup, the community hosted remote signer at provides free ETH for testing and development.
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`: general availability, public clearinghouse
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: general availability, public clearinghouse

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |
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
| `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |

## Evidence Sources

- `gw-support-contact-channel` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 165
  - source metadata: repo-current
  - matched terms: #local-gateways, Forum, GitHub, primary real-time support channel, gateway support contact channel, Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking., operator support
  - why selected: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1
  - why not primary: highest ranked matched source
- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - role: primary
  - checked: 2026-03-17
  - result: forum topic matched
  - rank: 50; score: 125
  - source metadata: 2025-08-21T11:45:27.751Z | open
  - matched terms: LLM, Livepeer Cloud, Streamplace, LLM SPE, SPE
  - why selected: source priority 50; 5 matched terms; claim-family source preference 14; recency 207d; state open; current-language match 1
  - why not primary: highest ranked matched source
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

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 4
- evidence_sources: 20
- explicit_page_targets: 9
- inferred_page_targets: 3

## Validation

- target_files: 4
- claim_families: 8
- contradictions: 4
- evidence_sources: 20
