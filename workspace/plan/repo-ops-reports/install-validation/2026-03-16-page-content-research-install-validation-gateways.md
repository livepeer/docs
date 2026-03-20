# Docs Page Research Report

## Scope

- `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`

## Claims Reviewed

- `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - claim families: `gw-discord-community-signal`, `gw-spe-funded-provider-examples`
  - extracted: This page documents real applications and community projects that are already running, gives you tooling references, and points to Foundation programmes for new builders.
  - extracted: Embody provides real time interactive 3D avatars for education, training, and communication using Unreal Engine MetaHumans with Pixel Streaming technology.
  - extracted: Website: Blog and tutorials at includes gateway setup guides Getting started guide: LLM SPE SPE Funded What it is: The first SPE dedicated to a specific AI pipeline.
  - extracted: Launched in September 2024, the LLM SPE operates a public AI gateway that routes LLM inference workloads to GPU operators on the Livepeer network.
- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - claim families: `gw-discord-community-signal`, `gw-spe-funded-provider-examples`, `gw-startup-program-current`
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

- None

## Conflicted Claims

- `gw-spe-funded-provider-examples` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: Gateway comparison and support pages should only present provider examples that are still backed by current SPE/governance or public project evidence.
- `gw-discord-community-signal` (conflicted, low)
  - owner: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - summary: When gateway docs rely on community support or current market/pricing conditions, the research runner should surface any repo-available Discord/community signals instead of treating chat as invisible.

## Time-Sensitive Claims

- `gw-startup-program-current` (time-sensitive, medium)
  - owner: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - summary: Gateway support content should only describe the AI Video Startup Program with the level of certainty supported by current official and forum evidence.

## Unverified / Historical Claims

- None

## Cross-Page Contradictions

- `gw-spe-funded-provider-examples` (ecosystem-provider-examples)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: LLM, Livepeer Cloud, Streamplace
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: LLM, Livepeer Cloud
  - `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`: Some Livepeer Gateway operators are funded by the Livepeer treasury through a Special Purpose Entity (SPE) grant.
- `gw-discord-community-signal` (community-signal)
  - action: verify-more
  - `v2/gateways/guides/operator-considerations/production-gateways.mdx`: Community, community
  - `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`: community

## Propagation Queue

| File | Class | Role | Action | Claim |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/operator-considerations/production-gateways.mdx` | guide | canonical-owner | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-discord-community-signal` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/operator-support.mdx` | guide | canonical-owner | verify-only | `gw-startup-program-current` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-spe-funded-provider-examples` |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx` | guide | dependent-page | verify-only | `gw-startup-program-current` |

## Evidence Sources

- `gw-spe-funded-provider-examples` → forum-topic: https://forum.livepeer.org/t/spe-milestone-report/3035
  - checked: 2026-03-16
  - result: forum topic matched
- `gw-discord-community-signal` → repo-file: .github/workflows/discord-issue-intake.yml
  - checked: 2026-03-16
  - result: repo evidence matched
- `gw-startup-program-current` → official-page: https://www.livepeer.org/dev-hub
  - checked: 2026-03-16
  - result: official page matched
- `gw-startup-program-current` → forum-topic: https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - checked: 2026-03-16
  - result: forum topic matched

## Validation

- target_files: 3
- claim_families: 3
- contradictions: 2
- evidence_sources: 4

