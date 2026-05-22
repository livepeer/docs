# Docs Page Research Report

## Scope

- `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
- `v2/gateways/guides/advanced-operations/gateway-middleware.mdx`
- `v2/gateways/guides/advanced-operations/orchestrator-selection.mdx`
- `v2/gateways/guides/advanced-operations/scaling.mdx`

## Claims Reviewed

- `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
  - claim families: none
  - extracted: Video/transcoding Gateways do not yet have an equivalent on chain registry discoverability for video is currently manual and community driven.
  - extracted: Service URI The first requirement is that the Gateway is reachable at a stable, public address.
  - extracted: For a public Gateway, this must be an externally resolvable DNS name and port, not or an internal IP.
  - extracted: HTTPS required External clients must reach the Gateway over HTTPS.
- `v2/gateways/guides/advanced-operations/gateway-middleware.mdx`
  - claim families: none
  - extracted: This page covers the request pipeline the layer between clients and the Gateway.
  - extracted: The payment pipeline (how the Gateway settles with Orchestrators) is covered in .
  - extracted: For consumer facing applications where users authenticate via OAuth (Google, GitHub, etc.), issue short lived JWT access tokens after authentication.
  - extracted: A reasonable starting point for an AI inference Gateway: Tier Requests per minute Concurrent sessions Free 10 1 Standard 60 5 Premium 300 20 Track limits in Redis for shared memory rate limiting across multiple middleware instances: Custom Routing The most powerful use of middleware is routing different customers or job types to different Gateway instances, each configured with a distinct Orchestrator pool.
- `v2/gateways/guides/advanced-operations/orchestrator-selection.mdx`
  - claim families: none
  - extracted: The scoring algorithm is a weighted combination of four factors, each adjustable via flags: Factor Flag Default behaviour Randomness Prevents all traffic concentrating on one Orchestrator LPT stake Favours Orchestrators with more stake Price Favours lower priced Orchestrators Price sensitivity Controls how much small price differences matter For AI Gateways using an explicit Orchestrator list ( ), the selection algorithm is simpler: the Gateway round robins across the listed Orchestrators while respecting capability and price filters.
  - extracted: Workload Criteria Different workloads have different priorities: Criterion Video AI Dual Latency Critical for real time Important for UX Both Price Important Important Both Codec capability Required Not applicable Video path AI model / pipeline Not applicable Required AI path GPU type Less critical Critical (VRAM) Critical Historical performance High weight Medium weight Both Minimum version Optional Optional Orchestrator Settings Pinning Orchestrators For off chain AI Gateways, the most reliable approach is to maintain an explicit list of known good Orchestrators.
  - extracted: To find AI capable Orchestrators: AI leaderboard community tool suite with Orchestrator performance data The endpoint on the Gateway, filtered by pipeline and model Dynamic Discovery For video Gateways and on chain AI Gateways that draw from the full network, use webhook based discovery instead of a static list.
  - extracted: sets a minimum acceptable score; Orchestrators below this threshold are excluded regardless of price.
- `v2/gateways/guides/advanced-operations/scaling.mdx`
  - claim families: none
  - extracted: For Dual Gateways, the endpoint reports GPU utilisation and memory: If VRAM usage is consistently above 85%, the Gateway is at risk of OOM failures on new model loads (AI) or performance degradation on concurrent transcoding segments (video).
  - extracted: Rising transcoding latency or AI inference latency under load, combined with high Orchestrator swap rates, suggests the Orchestrators being routed to are also under pressure.
  - extracted: Session Limits Session limits define how many concurrent jobs the Gateway (or its local Orchestrator, for dual setups) accepts.
  - extracted: Benchmarking tests transcoding throughput for a range of concurrent session counts.

## Verified Claims

- `gw-offchain-payment-obligation` (verified, high)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Payment-path docs should keep the off-chain model precise: the gateway process may hold no ETH and no key, but off-chain still pays orchestrators through PM tickets delegated to a remote signer or clearinghouse.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/remote-signers.mdx
  - evidence why: source priority 90; 10 matched terms

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

## Time-Sensitive Claims

- `gw-support-contact-channel` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking.
  - primary evidence: repo-file → v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1

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

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | canonical-owner | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-support-contact-channel` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | inferred-page | verify-only | `gw-support-contact-channel` |

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
- `gw-support-contact-channel` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 165
  - source metadata: repo-current
  - matched terms: #local-gateways, Forum, GitHub, primary real-time support channel, gateway support contact channel, Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking., operator support
  - why selected: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1
  - why not primary: highest ranked matched source
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

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 2
- evidence_sources: 7
- explicit_page_targets: 7
- inferred_page_targets: 3

## Validation

- target_files: 4
- claim_families: 0
- contradictions: 2
- evidence_sources: 7
