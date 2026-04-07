# Livepeer Docs v2 — Site Ownership Map

**Generated**: 2026-03-21
**Reviewed**: 2026-03-22 — corrections applied (Studio anchor, Delegators rename, self-contained tab philosophy)
**Purpose**: Pre-flight for Level 1 Prompt B (Audit). Defines what each tab owns and serves as the cross-tab reference so duplication is intentional and tracked — not accidental.
**Status**: DRAFT — reviewed with corrections, not yet fully locked

---

## Tab Self-Containment Principle

Each tab is authored for an audience that will **not** visit any other tab. Every piece of information a reader needs to achieve their goal in that tab must be present in that tab. Cross-tab links are navigation aids, not a substitute for complete content.

This means:
- **Intentional duplication between tabs is expected and correct.** Some content will appear in multiple tabs, written for each tab's specific audience.
- **Do not restrict content from a tab on the grounds that it "lives" elsewhere.** Ask instead: does this audience need this information to complete their goal in this tab?
- **Source-of-truth management (post-completion)**: After the full site is complete, shared content will be refactored to composable MDX — a single source-of-truth page imported into each tab. Until then, write each tab independently. Do not wait for or reference another tab's draft content.

---

## Ownership Map

| Tab | What it owns | Primary persona |
|---|---|---|
| **Home** | Platform narrative; value proposition; audience routing — the entry point for everyone | Everyone — first contact |
| **About** | Protocol and network architecture; actor definitions; tokenomics; governance model; economics — the conceptual substrate of the entire system | Researchers, architects, protocol-curious (any role seeking deep understanding) |
| **Solutions** | Consumer and platform-builder products (Daydream, Studio, Stream.place, Embody, Frameworks); **full Livepeer Studio docs as a top-level anchor** (legacy: previously Studio-only docs) | Platform builders, creators, app developers — people consuming Livepeer via a product layer |
| **Developers** | Custom AI pipeline and livestream application development (BYOC, ComfyStream); integration patterns; SDK/API reference; developer opportunities | Developers and ML engineers building custom applications on Livepeer directly |
| **Gateways** | Gateway operator concepts, quickstart, setup, operational guides, business model content — all three gateway types (AI product, video transcoding, platform/NaaP) | Gateway operators across the three paths |
| **Orchestrators** | Orchestrator concepts, quickstart, setup, guides, resources — pool workers, solo operators, AI-specialised operators | Orchestrator operators — hardware providers running go-livepeer nodes |
| **Delegators** *(pending rename from LP Token)* | What LPT is; delegation mechanics; governance participation; treasury; staking and earning | Delegators, LPT holders, governance voters |
| **Community** | Community identity and contribution — guidelines, events, contribution paths, forums, ecosystem participation | Community members, contributors, ecosystem participants (any role in its community capacity) |
| **Resource HUB** | Cross-cutting reference material — changelog, concept glossaries, documentation guide, per-role reference indexes, help center | Contributors, docs maintainers, researchers seeking reference or changelog content |

---

## Boundary Notes

**About ↔ Developers**: About explains the architecture; Developers shows how to build on it. Conceptual architecture in About; build guides in Developers. Both tabs may cover the same concept — from different angles for different purposes. That is correct.

**Solutions ↔ Developers**: Solutions covers products that abstract Livepeer (API layer). Developers covers custom pipeline construction (use the network directly). Studio is a special case: Solutions contains the full Studio docs as a top-level anchor (historical — docs were previously Studio-only). A developer persona integrating via Studio is routed from Developers to Solutions for Studio-specific documentation. Developers does not duplicate Studio docs — it routes.

**Gateways ↔ Developers**: Developers who build custom pipelines and then run a gateway graduate from Developers → Gateways. The graduation path is a cross-tab journey; it is not duplication. Where both tabs cover similar technical ground (e.g. pipeline concepts), each writes for its own audience — a developer audience vs a gateway operator audience.

**Orchestrators ↔ Gateways**: Related but distinct operator roles. Content scope is distinct (compute supply vs job demand and routing). Where both tabs need to explain shared infrastructure concepts, each tab writes its own version for its audience.

**Delegators ↔ About**: About explains token economics conceptually (how the tokenomic model works, why it exists). Delegators explains how to participate (how to delegate, how to vote, how to earn). Both tabs will cover some of the same economic concepts — About at a protocol level, Delegators at a participation level. Intentional duplication; composable MDX post-completion.

**Community ↔ Resource HUB**: Community owns social participation and contribution. Resource HUB owns reference material and docs meta. Community: forum links, events, governance discussion. Resource HUB: contract addresses, glossaries, changelogs, docs authoring guides.

**Resource HUB ↔ role tabs**: Each role tab has a Resources section scoped to that role. Resource HUB aggregates cross-role references. Both are correct — role-scoped Resources in each tab are not duplicating Resource HUB; they are scoped versions of it.

---

## Duplication Policy

Duplication between tabs is **expected and managed**, not a risk to eliminate.

| Content | Tabs involved | Policy |
|---|---|---|
| Studio documentation | Solutions (full anchor) + Developers (route only) | Solutions owns and maintains full Studio docs. Developers links to Solutions for Studio integration — does not duplicate. |
| Protocol/network concepts | About + every role tab | About is the canonical deep reference. Role tabs introduce concepts at the level of depth their audience needs — they do not need to link to About for every mention. Composable MDX post-completion for shared concept blocks. |
| Governance content | About + Delegators + Community | About owns the governance model (protocol level). Delegators owns participation mechanics. Community owns governance discussion/forums. Content will overlap — each tab writes for its audience. |
| Economic/tokenomics content | About + Delegators | Full intentional overlap. About = protocol-level economics. Delegators = participation-level economics. Same facts, different framing. Composable MDX post-completion. |
| Resources sections | All role tabs + Resource HUB | Each tab's Resources is role-scoped. Resource HUB aggregates. Not duplication — different scope and audience. |
| Glossary | About + Resource HUB + Solutions | Resource HUB owns the canonical glossary. Other tabs define terms inline at the level their audience needs. Role-scoped term definitions are not duplicating the canonical glossary. |

---

## Page Count by Tab

| Tab | Groups | Est. pages |
|---|---|---|
| Home | 3 | ~10 |
| About | 4 | ~22 |
| Solutions | 7 + Livepeer Studio Docs anchor | ~50 |
| Developers | 7 | ~32 |
| Gateways | 6 | ~25 |
| Orchestrators | 6 | ~32 |
| Delegators (LP Token) | 5 | ~20 |
| Community | 5 | ~17 |
| Resource HUB | 12 | ~27 |

---

## Per-Tab Execution Priority

| Priority | Tab | Notes |
|---|---|---|
| 1 | Orchestrators | |
| 2 | Gateways | `08a-ia-per-tab.md` already exists ✅ — skip Prompt A, go direct to Prompt B audit |
| 3 | LP Token / Delegators | |
| 4 | Developers | |
| 5 | About | |
| 6 | Solutions | |
| 7 | Home / Resource HUB | Routing + reference tabs — lower priority |
