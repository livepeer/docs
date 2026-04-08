# Docs Page Research Report

## Scope

- `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx`
- `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx`
- `v2/gateways/guides/tutorials/tutorial-3-go-production.mdx`

## Claims Reviewed

- `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`
  - claim families: none
  - extracted: This tutorial walks through a complete end to end test of the Livepeer gateway + orchestrator pipeline using BYOC (Bring Your Own Container) with a CPU only Docker container.
  - extracted: By the end you will have: A go livepeer orchestrator running locally accepting BYOC jobs A go livepeer gateway running in off chain mode pointed at a community remote signer A simple CPU Docker container registered as a BYOC pipeline A verified end to end job sent from your gateway through your orchestrator and back A clear path to taking this setup to production on chain This tutorial uses the off chain gateway mode (remote signer) for simplicity.
  - extracted: Off chain mode was introduced in Q4 2025 via PRs and .
  - extracted: Prerequisites Docker Engine 24+ installed and running.
- `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx`
  - claim families: none
  - extracted: This is Tutorial 1 of 3.
  - extracted: Tutorial 2: Tutorial 3: This tutorial runs a complete Livepeer Gateway Orchestrator pipeline on a single machine, transcodes a real video stream, and verifies the output all without any Ethereum wallet, GPU, or network registration.
  - extracted: Time: ~15 minutes Cost: zero Requirements: Linux (amd64), Docker or go livepeer binary, ffmpeg Architecture The Orchestrator transcodes the stream into multiple renditions (240p, 360p, 720p).
  - extracted: ffmpeg (for the test stream): Verify both: The flag replaces the old flag used in most pre 2024 community guides.
- `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx`
  - claim families: none
  - extracted: This is Tutorial 2 of 3.
  - extracted: Tutorial 1: (start here if not completed) Tutorial 3: This tutorial builds a custom AI pipeline using PyTrickle, packages it as a Docker container, and routes jobs through the Gateway Orchestrator pipeline from Tutorial 1.
  - extracted: Time: ~30 minutes Cost: zero Requirements: Tutorial 1 completed, Docker, Python 3.10+ Architecture BYOC (Bring Your Own Container) attaches any Docker container as a compute pipeline on the Livepeer network.
  - extracted: BYOC vs standard pipelines: Standard Livepeer AI pipelines (text to image, image to image, etc.) run inside the runtime using the interface.
- `v2/gateways/guides/tutorials/tutorial-3-go-production.mdx`
  - claim families: none
  - extracted: This is Tutorial 3 of 3.
  - extracted: Tutorial 1: Tutorial 2: This tutorial graduates from the local off chain setup in Tutorials 1 and 2 to a live Livepeer network deployment.
  - extracted: Time: 30 90 minutes depending on which upgrades you apply Cost: ETH on Arbitrum (Upgrade 1 only) What you need: Tutorial 1 and/or Tutorial 2 completed This is Tutorial 3 of 3.
  - extracted: ← Tutorial 1: ← Tutorial 2: Which upgrades do you need?

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

- `gw-remote-signer-current-scope` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
  - summary: Remote-signer docs should keep the current support boundary explicit: remote signing is a current payment path for Live AI / real-time AI workloads, and it is not supported for video transcoding.
  - primary evidence: github-pr → https://github.com/livepeer/go-livepeer/pull/3822
  - evidence why: source priority 70; 8 matched terms; claim-family source preference 12; recency 44d; state merged; current-language match 1
- `gw-spe-funded-provider-examples` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
  - primary evidence: forum-topic → https://forum.livepeer.org/t/spe-milestone-report/3035
  - evidence why: source priority 50; 5 matched terms; claim-family source preference 14; recency 207d; state open; current-language match 1
- `gw-clearinghouse-public-readiness` (conflicted, low)
  - owner: `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
  - summary: Gateway payment docs should describe clearinghouse status with current precision: the protocol is implemented, but no public clearinghouse is generally available yet. Community-hosted signer access is a testing bridge, not evidence of GA.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 9; historical-language penalty 1
- `gw-self-hosted-business-case` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/business-case.mdx`
  - summary: Gateway business-case pages should keep self-hosting viability contextual: control, cost savings, support burden, and payment complexity depend on workload volume and operational mode, not on one universal recommendation.
  - primary evidence: repo-file → v2/gateways/guides/operator-considerations/business-case.mdx
  - evidence why: source priority 90; 11 matched terms; current-language match 14; historical-language penalty 3

## Time-Sensitive Claims

- None

## Unverified / Historical Claims

- `gw-discord-community-signal` (unverified, medium)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Repo-available Discord intake workflow artifacts are a weak supplementary signal for technical gateway issue intake only. They should never stand in for programme status, support availability, or general support-channel claims.
  - primary evidence: repo-file → .github/workflows/discord-issue-intake.yml
  - evidence why: source priority 90; 4 matched terms

## Cross-Page Contradictions

- `gw-remote-signer-current-scope` (remote-signer-current-scope)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`: Current scope, not supported for video transcoding
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Payments are handled by a connected remote signer or clearinghouse.
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: For operators who want to start without any crypto setup, the community hosted remote signer at provides free ETH for testing and development.
- `gw-spe-funded-provider-examples` (ecosystem-provider-examples)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: LLM, Livepeer Cloud, Streamplace
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: LLM, Livepeer Cloud
  - `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`: Some Livepeer Gateway operators are funded by the Livepeer treasury through a Special Purpose Entity (SPE) grant.
- `gw-clearinghouse-public-readiness` (clearinghouse-public-readiness)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`: general availability, public clearinghouse
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: general availability, public clearinghouse
- `gw-self-hosted-business-case` (business-case-viability)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/business-case.mdx`: cost savings, service margin, worth it
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Controls which Orchestrators the gateway can access.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | inferred-page | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | canonical-owner | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | canonical-owner | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/payments-and-pricing/payment-guide.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx` | guide | canonical-owner | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/payments-and-pricing/remote-signers.mdx` | guide | canonical-owner | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-clearinghouse-public-readiness` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |

## Evidence Sources

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
- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - role: primary
  - checked: 2026-03-17
  - result: forum topic matched
  - rank: 50; score: 125
  - source metadata: 2025-08-21T11:45:27.751Z | open
  - matched terms: LLM, Livepeer Cloud, Streamplace, LLM SPE, SPE
  - why selected: source priority 50; 5 matched terms; claim-family source preference 14; recency 207d; state open; current-language match 1
  - why not primary: highest ranked matched source
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
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 130
  - source metadata: repo-current
  - matched terms: discord-issue-intake, discord.com/channels, repository_dispatch, discord intake repo signal
  - why selected: source priority 90; 4 matched terms
  - why not primary: highest ranked matched source
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

## Trust Summary

- unresolved_claims: 1
- contradiction_groups: 4
- evidence_sources: 15
- explicit_page_targets: 9
- inferred_page_targets: 1

## Validation

- target_files: 4
- claim_families: 0
- contradictions: 4
- evidence_sources: 15
