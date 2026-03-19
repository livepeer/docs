# Content Writing Pipeline — Framework Structure & Decisions

**Status**: Active — decisions recorded as they're made
**Branch**: `docs-v2-dev`
**Related**: [plan.md](plan.md) | [research.md](research.md) | [collation.md](collation.md) | [pageType.md](pageType.md)
**Definition files**: `v2/_workspace/references/content-pipeline/01-*.md` through `09-*.md`

---

## Purpose

This document records the structural decisions made during Phase 1 (Define the Framework). Each decision is final once approved at its checkpoint and becomes the contract for Phase 2 (Build) and Phase 3 (Run).

---

## Frontmatter Schema (agreed)

```yaml
pageType:        # container — 7 primary types
pageVariant:     # slice — optional refinement within the type
audience:        # category — broad reader class
persona:         # slice — narrow situational variant within audience (optional)
purpose:         # job — reader outcome (15 intent-based values)
domain:          # field — broad industry/knowledge field
niche:           # context — specific subject area within domain
complexity:      # depth — beginner | intermediate | advanced
lifecycleStage:  # timing — where reader is in their journey
```

---

## Decision 1: pageType — 7 primary types

**Status**: ✅ Agreed (pending final variant review)
**Date**: 2026-03-19

Consolidated from 12 types to 7. Key changes:
- `landing` → renamed to `navigation`
- `overview` → demoted from primary type to a **variant** available on most other types
- `how_to` → renamed to `instruction`
- `quickstart` → demoted to `instruction` variant
- `faq`, `troubleshooting`, `glossary` → demoted to `reference` variants (under `compendium`)
- `changelog` → demoted to `reference` variant
- `guide` → kept as-is
- `concept` → kept as-is
- `tutorial` → kept as-is

| Primary type | Job |
|---|---|
| `navigation` | Route the reader — portals, tab landings, section roots |
| `concept` | Explain a mechanism/system |
| `tutorial` | Learn by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup (technical + contextual) |
| `resource` | Curated collections, ecosystem material |

### pageVariant per type

| pageType | Variants |
|---|---|
| `navigation` | `portal`, `landing` |
| `concept` | `overview` |
| `tutorial` | `overview` |
| `guide` | `overview` |
| `instruction` | `overview`, `quickstart`, `setup` |
| `reference` | `overview`, `specification`, `compendium`, `changelog` |
| `resource` | `overview` |

`overview` = entry/orientation page for a section of this type. Available on all types except `navigation`.

### Rationale
- `overview` as a variant not a type: overview is a function (orient the reader within a section) that appears across most types. Every guide section, instruction section, reference section, etc. needs an overview page. Making it a variant keeps the primary type reflecting what the content IS.
- `navigation` stays primary: portal/landing pages are pure routing with no content — they don't belong to any other type.
- `instruction` over `how_to`: more precise for what the content is (practical step-by-step setup/install/command pipeline).
- `reference` absorbs `faq`/`troubleshooting`/`glossary`/`changelog`: these are all structured lookup content. `specification` = technical data, `compendium` = contextual information/definitions/Q&A.
- `resource` is distinct from `reference`: reference is "look up a specific fact", resource is "find/access/use something" (tools, links, directories, showcases).

---

## Decision 2: purpose — 15 intent-based values

**Status**: ✅ Agreed
**Date**: 2026-03-20

```
orient, explain, choose, start, build, configure, operate,
troubleshoot, optimise, integrate, verify, evaluate, reference, learn, update
```

| Purpose | What the reader gets |
|---|---|
| `orient` | Understands where they are / what exists |
| `explain` | Understands a concept or system |
| `choose` | Can make a decision between options |
| `start` | Gets going quickly |
| `build` | Creates or implements something |
| `configure` | Sets up options/parameters |
| `operate` | Runs/manages in practice |
| `troubleshoot` | Diagnoses/fixes problems |
| `optimise` | Improves performance/cost/reliability |
| `integrate` | Connects with other systems/tools |
| `verify` | Validates setup, behaviour, or results |
| `evaluate` | Assesses, benchmarks, or compares options/models/paths |
| `reference` | Looks up exact facts/syntax/values |
| `learn` | Learns terminology/foundations |
| `update` | Communicates changes/new features |

**Validator reconciliation**: The validator (`frontmatter-taxonomy.js`) has a different set of 16 format-mirroring values. These become deprecated aliases:

| Deprecated (validator) | Maps to |
|---|---|
| `landing` | `orient` |
| `overview` | `orient` |
| `orientation` | `orient` |
| `concept` | `explain` |
| `evaluation` | `choose` |
| `tutorial` | `learn` |
| `setup` | `configure` |
| `how_to` | `build` or `configure` |
| `operations` | `operate` |
| `decision` | `choose` |
| `reference` | `reference` |
| `faq` | `reference` |
| `glossary` | `reference` |
| `changelog` | `update` |
| `troubleshooting` | `troubleshoot` |

---

## Decision 3: audience — 10 tokens

**Status**: ✅ Agreed
**Date**: 2026-03-20

Revised from 9 to 10 tokens. Key changes:
- `platform-builder` → renamed to `builder` (consumes via API/SDK, builds downstream products ON TOP of Livepeer — doesn't touch the network directly)
- `developer` → redefined (builds things that run ON the network: custom pipelines, BYOC, protocol extensions, tooling — often graduates to gateway)
- `founder` → new (evaluating Livepeer for their product/business — Foundation-priority audience)

**Source**: Shtuka Research Data Geography (v1) confirmed the builder/developer/gateway graduation path is a real ecosystem pattern. See [research.md](research.md#external-research-sources).

```
founder, builder, developer, gateway, orchestrator, delegator, community
```

| Token | Who | Arriving Question |
|---|---|---|
| `founder` | Evaluating Livepeer for their product/business | "Is Livepeer right for my product?" |
| `builder` | Building products using Livepeer APIs/SDKs/hosted gateways | "How do I add Livepeer to my app?" |
| `developer` | Building custom pipelines, BYOC, protocol extensions, tooling | "How do I build something on the network?" |
| `gateway` | Running gateway infrastructure, routing traffic | "How do I set up and run a gateway?" |
| `orchestrator` | Running GPU nodes, providing compute | "How do I set up, run, and earn with a node?" |
| `delegator` | Staking LPT tokens | "How do I stake and participate?" |
| `community` | Ecosystem participation: contributors, governance discourse, newcomers, researchers, internal teams | "How do I get involved?" |

**Demand-side graduation path**: `founder` (evaluating) → `builder` (consuming via API) → `developer` (building on network) → `gateway` (running infra)

**Rationale for builder over integrator**: "Builder" is the Foundation's language ("founders, developers, and builders"). Signals "building a product" without implying network-level access. Pairs naturally: builder builds on top, developer builds within.

---

## Decision 4: persona — optional, audience-scoped

**Status**: ✅ Community personas agreed. Others in progress.
**Date**: 2026-03-20

- `audience` = stable taxonomy (enum-controlled)
- `persona` = optional refinement layer (controlled enum per audience)
- Persona refines audience — does not replace it

### Agreed personas by audience

**`community`** — people whose primary function is the ecosystem's social and cultural infrastructure. The community tab is connective tissue — it orients, routes, and surfaces the social layer. It doesn't duplicate role-specific content.

| Persona | Description |
|---|---|
| `ambassador` | Sustains the social layer: content creation, translation, events, moderation, support. Live Pioneers is the canonical example. |
| `engager` | Governance discourse + ecosystem coordination: forums, proposals, SPEs, workstreams. Not voting (that's delegators) — the conversation and coordination layer. |
| `explorer` | Curious about Livepeer, browsing the ecosystem, forming a picture. Not committed to a role yet. |
| `researcher` | Evaluating with intent: academic papers, journalism, benchmarks, comparative analysis, investment thesis |
| `internal` | Docs maintainers, core team, SPE teams, Foundation employees, Livepeer Inc employees |

**Key boundary rules**:
- Delegators who visit community for governance → delegator persona, not community persona. Delegators are the only ones who CAN vote (stake-weighted).
- Operators who visit community for peer intel → operator persona, not community persona.
- Developers who visit community for grants → developer persona, not community persona.
- Governance **discussion** is open to anyone (community `engager`). Governance **voting** requires stake (delegator).
- Newcomers who don't know their role yet → community `explorer` persona. The homepage should route them.

**Source**: Community tab IA from `v2/community/_workspace/community-tab-05-final-ia-and-pages.md` — "the Community tab is the connective tissue — it orients, routes, and surfaces the social and cultural layer. Protocol mechanics, role operations, and technical contribution all live in their proper tabs."

**`founder`** — people evaluating Livepeer for their product or business.

| Persona | Description |
|---|---|
| `technical` | CTO/technical founder evaluating architecture, capabilities, integration effort, performance |
| `business` | CEO/business founder evaluating cost model, reliability, competitive positioning, go-to-market fit |
| `partner` | Incoming collaboration: SPE applicant, potential integration partner, Foundation-adjacent entity |

**`builder`** — people building products using Livepeer solutions/hosted gateways. Persona is an **array** — pages can serve multiple personas (e.g. `[studio, video]`).

**Schema note**: `persona` is an array field for builders (and potentially other audiences). A page about AI inference via Studio: `persona: [studio, ai]`.

*By workload:*

| Persona | Description |
|---|---|
| `ai` | Batch AI inference (text-to-image, LLM, audio, captioning) |
| `video` | Video transcoding, livestream, VOD |
| `realtime` | Real-time AI video (ComfyStream, live effects) |
| `agent` | AI agents consuming Livepeer compute |

*By product:*

| Persona | Description |
|---|---|
| `studio` | Livepeer Studio |
| `daydream` | Daydream |
| `frameworks` | Frameworks |
| `streamplace` | Streamplace |
| `embody` | Embody |

### Personas pending definition

**`developer`** — people building things that run ON the network or extend it. Distinct from `builder` (consumes via API) and `gateway` (runs infra). The developer → gateway graduation path is real.

| Persona | Description |
|---|---|
| `network` | Builds at infrastructure level: direct gateway operation, protocol-native routing, orchestrator management |
| `ai` | Builds AI pipelines, BYOC, ComfyStream workflows, models — everything that runs on GPUs |
| `tooling` | Builds tools others use: SDKs, dashboards, analytics, operator management |
| `core` | Extends go-livepeer, smart contracts, LIPs, protocol-level code |

**`gateway`** — people running gateway infrastructure, routing traffic between clients and orchestrators. Source: `v2/gateways/personas.md`.

| Persona | Description |
|---|---|
| `graduate` | App dev graduating from hosted API to self-hosted |
| `provider` | Running public gateway-as-service |
| `architect` | Building SDK/alternative gateway implementations |
| `broadcaster` | Video infra operator migrating from cloud transcoding |
| `platform` | Enterprise/AI platform operator, NaaP, multi-tenant |

**`orchestrator`** — people running GPU infrastructure that processes jobs on the network. Source: `v2/orchestrators/_workspace/research/orchestrator-tab-review.md`.

| Persona | Description |
|---|---|
| `operator` | Running an orchestrator node — solo or small scale, learning or established |
| `hobbyist` | Home GPU owner, wants to earn, exploring options — might pool or run solo |
| `commercial` | Data centre scale, multi-node, commercial workloads, enterprise |
| `specialist` | Comes from ML/AI world, deep model knowledge, providing AI compute |
| `delegate` | Orchestrator as governance participant — voting weight, attracting delegators, protocol direction |

**`delegator`** — people staking LPT and participating in governance.

| Persona | Description |
|---|---|
| `staker` | First time or casual — staking LPT, wants it to work |
| `strategist` | Actively managing delegation, evaluating orchestrators, maximising returns |
| `voter` | Evaluates and votes on proposals — needs to understand what's at stake |
| `proposer` | Drafts LIPs, SPE proposals, treasury requests — needs process, templates, GovWorks |

All audience personas defined. `internal`, `general`, and `everyone` removed as top-level audiences — `internal` is now a community persona, `general` newcomers route through community `explorer`, `everyone` axed.

---

## Decision 5: domain + niche

**Status**: Pending Step 6
**Date**: TBD

Two layers:
- `domain` (broad field): finance, business, technical, economics, operations, governance, etc.
- `niche` (specific context): web3, AI, video, hardware, infrastructure, protocol, tokenomics, etc.

Governs: section naming (domain-anchor rule), voice register, example selection, terminology conventions.

---

## Decision 6: complexity + lifecycleStage

**Status**: Pending Step 7
**Date**: TBD

- `complexity`: beginner, intermediate, advanced
- `lifecycleStage`: discover, evaluate, setup, build, operate, troubleshoot, optimize

---

## Decision 7: generation contract (how fields combine)

**Status**: Pending Step 8
**Date**: TBD

How pageType + pageVariant + audience + persona + purpose + domain + niche + complexity + lifecycleStage combine to determine page structure, naming, voice, components, CTAs.

---

## Follow-up Tasks (blocking for pipeline build, not blocking for Phase 1 enum definitions)

| # | Task | Blocking for | Status |
|---|---|---|---|
| F1 | Deep purpose definitions — full process model per purpose value (like ai-coauthoring.md `evaluate` work). Write `04-purpose-definitions.md`. | Pipeline build (Step 16+) | Not started |

## Open Decisions

| # | Question | Blocking step | Status |
|---|---|---|---|
| O1 | Instruction variants — are `quickstart`, `setup` sufficient? Need `migration`, `configuration`, `deployment`? | Step 2 | Under review |
| O2 | Guide variants — should `decision` be a variant for choice-oriented pages? | Step 2 | Under review |
| O3 | Resource variants — need sub-types like `library`, `directory`, `showcase`? | Step 2 | Under review |
| ~~O4~~ | ~~Purpose enum reconciliation~~ | ~~Step 5~~ | ✅ Resolved — intent-based set wins, validator values become deprecated aliases |
| ~~O5~~ | ~~Persona format~~ | ~~Step 4~~ | ✅ Resolved — controlled enum per audience, array field for builders |
| O6 | Domain/niche granularity — enum or free-text? | Step 6 | Not started |

---

## Source Files

| File | What it defines | Status |
|---|---|---|
| `v2/_workspace/references/content-pipeline/01-page-type-definitions.md` | pageType + pageVariant definitions | DRAFT — under review |
| `v2/_workspace/references/content-pipeline/02-audience-definitions.md` | audience definitions | Not started |
| `v2/_workspace/references/content-pipeline/03-persona-definitions.md` | persona definitions | Not started |
| `v2/_workspace/references/content-pipeline/04-purpose-definitions.md` | purpose definitions | Not started |
| `v2/_workspace/references/content-pipeline/05a-domain-niche-definitions.md` | domain + niche definitions | Not started |
| `v2/_workspace/references/content-pipeline/05b-complexity-lifecycle-definitions.md` | complexity + lifecycleStage | Not started |
| `v2/_workspace/references/content-pipeline/06-generation-contract.md` | field combination rules | Not started |
| `v2/_workspace/references/content-pipeline/07-voice-rules.md` | voice rules per audience | Not started |
| `v2/_workspace/references/content-pipeline/08-section-naming-rules.md` | naming rubric | Not started |
| `v2/_workspace/references/content-pipeline/09-page-structure-rules.md` | structure rules per pageType | Not started |
| `tasks/plan/active/CONTENT-WRITING/pageType.md` | Full page audit | DRAFT — under review |
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | Canonical frontmatter schema | Needs update after Phase 1 |
