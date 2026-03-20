# Docs Page Research Report

## Scope

- `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx`
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`

## Claims Reviewed

- `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`
  - extracted: \{ / TODO: Terminology Validation: Ensure the terminology and definitions used in this page is consistent with the resources/glossary terminology Verify: ~~Mermaid diagrams use theme colours~~ (N/A ASCII diagram kept intentionally) ~~Fontawesome icons are used on accordions and tabs~~ ~~Tables use StyledTable component~~ ~~No em dashes are used (instead use standard )~~ UK spelling is used ~~Headers are concise and technical no long headers or questions (aim for max 3 words)~~ ~~CustomDivider is used~~ Placeholders for Media & Video Resources are in comments with a TODO for a human.
  - extracted: (N/A) ~~REVIEW flags are in JSX flags for a human.~~ Human: H1 removed (was repeating frontmatter title) "Why clearinghouses exist" removed (redundant with payment guide router) "Clearinghouse vs remote signer" trimmed to brief statement with link PM internals cross referenced instead of duplicated Voice converted to entity led throughout Port 8937 → 8935 Broken link payment paths → payment guide Em dashes removed /\} Protocol status: The clearinghouse protocol was implemented in and and is operational.
  - extracted: Public Use Status No public clearinghouse service has reached general availability as of early 2026.
  - extracted: Note that Payment Clearinghouses are designed to become independent economic actors in the Livepeer Network providing services for a fee to end users.
- `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`, `gw-price-cap-role`
  - extracted: Livepeer fees between Gateways and Orchestrators are settled in ETH on Arbitrum One via probabilistic micropayment (PM) tickets.
  - extracted: Gateways can configure price caps in wei or in USD (converted at runtime via a Chainlink price feed).
  - extracted: Next step: Video On chain video gateway \} icon="link" Video transcoding requires the on chain self managed path.
  - extracted: Remote signing is not supported for video workloads.
- `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - claim families: `gw-price-cap-role`
  - extracted: Pricing Mechanics Livepeer workload fees are denominated in ETH (wei), with an option to configure caps in USD (converted at runtime via a ).
  - extracted: Query current rates via or before setting caps.
  - extracted: The gateway calculates fees based on the resolution and length of each transcoded segment.
  - extracted: Video transcoding requires on chain operational mode.
- `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - claim families: `gw-community-signer-testing-surface`
  - extracted: Current scope: Realtime AI Video (live video to video) workloads only.
  - extracted: Remote signing is not supported for video transcoding.
  - extracted: Remote signers were introduced in and , in January 2026.
  - extracted: signature When a Gateway contacts an Orchestrator, it must provide an authentication signature.
- `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx`
  - claim families: `gw-price-cap-role`
  - extracted: From the Discord discussion that defined this model: "The user never interacts with Livepeer contracts.
  - extracted: Multi tenant architecture Authentication flow Tenant isolation Each customer (tenant) operates within boundaries set by their API key: Isolation concern How NaaP handles it Request quotas Per key rate limits (requests/minute, requests/day) Usage caps Per key maximum usage (pixels, inferences, minutes) Billing separation Per key usage tracking for independent invoicing Failure isolation One customer exceeding quota does not affect others Data separation Per key logs and metrics Orchestrator affinity For premium tenants, you can configure orchestrator routing preferences: Route premium customers to high tier orchestrators (lower latency, higher reliability) Route budget customers to standard orchestrators Route specific workload types to capability matched orchestrators This is configured at the middleware layer using or per request path.
  - extracted: Building the product layer Option 1: Use the NaaP reference implementation The fastest path.
  - extracted: What you get out of the box: JWT auth via SIWE API key generation and management Usage tracking per key Dashboard UI What you still need to build: Payment integration (Stripe, crypto billing, etc.) Custom pricing tiers Customer onboarding flow Production monitoring and alerting Option 2: Build your own product layer If your platform has specific requirements that NaaP does not cover, build your own using standard middleware patterns.
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - claim families: `gw-clearinghouse-public-readiness`, `gw-community-signer-testing-surface`, `gw-discord-community-signal`, `gw-spe-funded-provider-examples`, `gw-startup-program-current`
  - extracted: The Livepeer ecosystem provides funding, programmes, and community resources for Gateway operators at every stage from first time builders to production platform operators.
  - extracted: Currently funded SPEs operating Gateways: SPE What it funds Status Livepeer Cloud SPE Free public AI and video Gateways Active LLM SPE LLM inference routing on the Livepeer network Active How to propose an SPE: 1.
  - extracted: Engage the community on and 2.
  - extracted: Write a proposal with clear public benefit, verifiable milestones, and realistic budget 3.

## Verified Claims

- `gw-price-cap-role` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
  - summary: Gateway pricing docs should keep the role of caps aligned: on-chain caps act as marketplace filters, while off-chain caps act as safety ceilings for known orchestrators. The same claim family also covers how `-ignoreMaxPriceIfNeeded` changes job-failure behavior.

## Conflicted Claims

- `gw-clearinghouse-public-readiness` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - summary: Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
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
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | canonical-owner | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | canonical-owner | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` | guide | canonical-owner | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |

## Evidence Sources

- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3791
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `gw-clearinghouse-public-readiness` → github-pr: https://github.com/livepeer/go-livepeer/pull/3822
  - checked: 2026-03-16
  - result: GitHub evidence matched
- `gw-clearinghouse-public-readiness` → repo-file: v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-community-signer-testing-surface` → repo-discord-signal: .github/workflows/discord-issue-intake.yml
  - checked: 2026-03-16
  - result: repo Discord/community signal matched
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-community-signer-testing-surface` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-price-cap-role` → repo-file: v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-price-cap-role` → repo-file: v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - checked: 2026-03-16
  - result: forum topic matched
- `gw-startup-program-current` → official-page: https://www.livepeer.org/dev-hub
  - checked: 2026-03-16
  - result: official page matched
- `gw-startup-program-current` → forum-topic: https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - checked: 2026-03-16
  - result: forum topic matched

## Validation

- target_files: 6
- claim_families: 6
- contradictions: 3
- evidence_sources: 12
