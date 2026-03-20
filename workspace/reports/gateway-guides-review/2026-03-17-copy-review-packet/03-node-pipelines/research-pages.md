# Docs Page Research Report

## Scope

- `v2/gateways/guides/node-pipelines/ai-pipelines.mdx`
- `v2/gateways/guides/node-pipelines/byoc-pipelines.mdx`
- `v2/gateways/guides/node-pipelines/guide.mdx`
- `v2/gateways/guides/node-pipelines/pipeline-configuration.mdx`
- `v2/gateways/guides/node-pipelines/video-pipelines.mdx`

## Claims Reviewed

- `v2/gateways/guides/node-pipelines/ai-pipelines.mdx`
  - claim families: none
  - extracted: The pipeline differs fundamentally from video transcoding: requests are discrete HTTP calls, not streaming segments, and routing and pricing is by pipeline and model capability rather than by pixel throughput.
  - extracted: For custom container workloads, see BYOC Pipelines.
  - extracted: It is the AI equivalent of the video pipeline's .
  - extracted: <Card title="Source reference: AISessionManager" icon="github" href="https://github.com/livepeer/go livepeer/blob/master/server/ai http.go" horizontal arrow go livepeer/server/ai http.go AI vs Video Comparison Aspect Video Transcoding AI Inference Payment model On chain PM tickets (ETH deposit required) Off chain (no ETH required) Ingest format RTMP stream or HTTP segment push Discrete HTTP POST per job Output Streaming HLS manifest JSON response (images, text, audio) Session type Long running streaming session Short request/response Orchestrator selection Price + latency + segment history Pipeline capability + model availability + price GPU requirement on orchestrator Optional (CPU mode exists) Required Available Pipelines Livepeer AI inference routes across three integration patterns.
- `v2/gateways/guides/node-pipelines/byoc-pipelines.mdx`
  - claim families: none
  - extracted: The difference is that instead of running a managed container for a known pipeline (such as ), they run a custom Docker container that exposes any inference API they choose.
  - extracted: Gateway routes to them using the same flag and the same used for standard AI pipelines.
  - extracted: Poor fit batch workloads (large LLMs, multi minute jobs, stateful pipelines) behind BYOC will degrade routing quality and increase latency for all jobs on the same orchestrator.
  - extracted: Routing Profiles BYOC capabilities on the network fall into broad latency profiles.
- `v2/gateways/guides/node-pipelines/guide.mdx`
  - claim families: none
  - extracted: A gateway's node type determines which workloads it can route: Video transcoding, AI inference (batch and real time), or Dual (both pipelines on a single node).
  - extracted: Each pipeline is the control plane path between an application request and orchestrator execution.
  - extracted: Gateway Role This section covers how pipelines work from the gateway operator's perspective.
  - extracted: Accepts requests, matches orchestrator capabilities, enforces price and latency policy, handles retries and failover, returns outputs to the client.
- `v2/gateways/guides/node-pipelines/pipeline-configuration.mdx`
  - claim families: none
  - extracted: This page covers post setup tuning mechanisms for video and AI pipelines.
  - extracted: Quick Reference Encoding ladder (output renditions, bitrate, codec, GOP) Per pixel price cap for orchestrator selection Concurrent stream limit (default: 10) Enables AI pipeline endpoints on the HTTP port (required) Failover speed when an orchestrator is slow or unresponsive Per pipeline, per model price cap Configuration Details Video Transcoding Tuning Pass a profile to the gateway via the flag, either as a comma separated list of built in presets or as a path to a JSON file.
  - extracted: Field reference: Yes Output width in pixels Yes Output height in pixels Yes Output bitrate in bits per second No Human readable label, used in HLS manifest No Target frames per second; preserves source FPS No H.264 profile: , , , No GOP size in seconds or for keyframe only; lower values reduce latency Per platform Setup Mount the JSON file as a volume and reference it via a path inside the container: Alternatively, write directly to the gateway's data volume: And reference it at the container path: Create the profile file in your chosen config directory: Reference it in your systemd service file ( ): Reload systemd after any service file change: Create the profile file in the directory: Reference it in your startup file: Profile Recipes Four renditions covering mobile to desktop.
  - extracted: For use cases where you need a single output with minimal end to end latency (for example, feeding a monitoring pipeline or an AI processing step).
- `v2/gateways/guides/node-pipelines/video-pipelines.mdx`
  - claim families: none
  - extracted: For transcoding profile JSON and flag reference, see Pipeline Configuration.
  - extracted: The video transcoding pipeline moves a stream from ingest to playback ready in three stages: 1.
  - extracted: the gateway segments incoming video, 2.
  - extracted: dispatches each segment to a selected orchestrator with a payment ticket, and 3.

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

## Time-Sensitive Claims

- `gw-support-contact-channel` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking.
  - primary evidence: repo-file → v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - evidence why: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1
- `gw-community-signer-testing-surface` (time-sensitive, medium)
  - owner: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
  - summary: Docs that mention the Elite Encoder community signer should keep its role narrow and explicit: a repo/community-backed testing surface for early off-chain experimentation, not a generic production recommendation.
  - primary evidence: repo-file → v2/gateways/guides/payments-and-pricing/payment-guide.mdx
  - evidence why: source priority 90; 8 matched terms; current-language match 11; historical-language penalty 1

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
- `gw-remote-signer-current-scope` (remote-signer-current-scope)
  - action: verify-more
  - `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`: Current scope, not supported for video transcoding
  - `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`: Payments are handled by a connected remote signer or clearinghouse.
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: For operators who want to start without any crypto setup, the community hosted remote signer at provides free ETH for testing and development.

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | inferred-page | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | dependent-page | update-now | `gw-price-cap-role` |
| `v2/gateways/guides/operator-considerations/business-case.mdx` | guide | canonical-owner | verify-only | `gw-self-hosted-business-case` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx` | guide | dependent-page | update-now | `gw-offchain-payment-obligation` |
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
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-community-signer-testing-surface` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-remote-signer-current-scope` |
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
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 130
  - source metadata: repo-current
  - matched terms: discord-issue-intake, discord.com/channels, repository_dispatch, discord intake repo signal
  - why selected: source priority 90; 4 matched terms
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
- `gw-support-contact-channel` → repo-file: v2/gateways/guides/roadmap-and-funding/operator-support.mdx
  - role: primary
  - checked: 2026-03-17
  - result: repo evidence matched
  - rank: 90; score: 165
  - source metadata: repo-current
  - matched terms: #local-gateways, Forum, GitHub, primary real-time support channel, gateway support contact channel, Gateway support docs should keep the current contact path explicit: `#local-gateways` on Discord is the primary real-time support channel, while Forum and GitHub are the durable channels for longer discussion and issue tracking., operator support
  - why selected: source priority 90; 7 matched terms; current-language match 9; historical-language penalty 1
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

- unresolved_claims: 1
- contradiction_groups: 3
- evidence_sources: 16
- explicit_page_targets: 9
- inferred_page_targets: 4

## Validation

- target_files: 5
- claim_families: 0
- contradictions: 3
- evidence_sources: 16
