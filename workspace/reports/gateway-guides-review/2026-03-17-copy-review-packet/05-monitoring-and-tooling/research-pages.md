# Docs Page Research Report

## Scope

- `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx`
- `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
- `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx`
- `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
- `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`

## Claims Reviewed

- `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx`
  - claim families: none
  - extracted: HTTP health endpoint Confirms the gateway process is running and responding on the configured port ( default: 8935 ).
  - extracted: Any non 200 response or connection refused means the process is not running or the port is wrong.
  - extracted: Select Option 1: Get node status from the interactive menu.
  - extracted: Node Type Checks On chain only A Video gateway is healthy when: 1.
- `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
  - claim families: none
  - extracted: The Gateway must already be running for quick verification, see .
  - extracted: Setup Configuration Create or update to scrape the Gateway: All Gateway types (Video, AI, Dual) expose metrics on the same port (default 8935).
  - extracted: Performance Metric What it shows Alert threshold Successfully transcoded segments (counter) Calculate success rate (see queries below) End to end transcoding latency Alert when avg Cumulative failed transcode count Alert on rate increase Mid stream Orchestrator changes Alert on high rate Active transcoding sessions Capacity planning Payments Metric What it shows Alert threshold Remaining ETH deposit (wei) Alert when (0.01 ETH) Remaining ETH reserve (wei) Alert when (0.005 ETH) ETH value of tickets issued Budget tracking Failed ticket creation Alert on any increase Arbitrum gas price oracle Alert on spike and are the most critical alerts.
  - extracted: Metric What it shows Alert threshold Active AI sessions Capacity planning Configured session limit Alert when Orchestrator discovery failures Alert on any increase Failed job submissions Alert on rate increase AI specific inference latency (per pipeline, per model) is not currently exposed via .
- `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx`
  - claim families: none
  - extracted: Find the Gateway The Gateway's ETH address is shown in Option 1 (Get node status) under ETH Account.
  - extracted: Navigate to: Key Arbiscan tabs: Tab What it shows Transactions All outgoing transactions (bridging, deposits) Internal Txns Contract initiated transfers ticket redemptions appear here Token Transfers ERC 20 token movements (LPT bridging) Contract Events The contract emits events for every deposit, reserve, and redemption action: Event Meaning When it fires ETH added to Gateway deposit livepeer cli Option 11 (Deposit broadcasting funds) ETH added to reserve Reserve set during deposit flow Orchestrator redeemed a winning ticket Each winning ticket redemption Withdrawal unlock period started Unlock called on deposited funds Funds withdrawn after unlock period Withdrawal after unlock expires To find redemptions against a Gateway: filter Arbiscan events by the TicketBroker contract address, then filter by events where the field matches the Gateway address.
  - extracted: For the current TicketBroker address, see .
  - extracted: Create an Arbiscan account at 2.
- `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
  - claim families: none
  - extracted: Quick Reference livepeer cli Option 1 (Get node status) for the current balance.
  - extracted: livepeer cli for what the node currently sees.
  - extracted: For AI Orchestrators specifically, Livepeer Tools shows which pipelines are active network wide.
  - extracted: livepeer cli and the HTTP API show current state only.
- `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`
  - claim families: none
  - extracted: If either value is zero, top up via Option 11 (Deposit broadcasting funds).
  - extracted: The Gateway requires a working Arbitrum RPC to issue and track payment tickets.
  - extracted: Deposit and reserve must be set explicitly via after the bridge confirms.
  - extracted: After the transaction confirms, run Option 1 (Get node status) to verify the deposit and reserve appear in the BROADCASTER STATS section (legacy term for Gateway).

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

## Trust Summary

- unresolved_claims: 0
- contradiction_groups: 2
- evidence_sources: 7
- explicit_page_targets: 7
- inferred_page_targets: 3

## Validation

- target_files: 5
- claim_families: 0
- contradictions: 2
- evidence_sources: 7
