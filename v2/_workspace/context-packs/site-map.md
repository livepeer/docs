# Livepeer Docs v2 — Site Ownership Map

**Generated**: 2026-03-21
**Purpose**: Pre-flight for Level 1 Prompt B (Audit). Defines what each tab owns so cross-tab duplication is visible before per-tab work begins. Every proposed page in a tab must survive the question: does another tab already own this content?
**Status**: DRAFT — awaiting human validation

---

## Ownership Map

| Tab | What it owns | Primary persona | Does NOT own |
|---|---|---|---|
| **Home** | Platform narrative; value proposition; audience routing — the entry point for everyone | Everyone — first contact | Any role-specific operational content; all of that lives in role tabs |
| **About** | Protocol and network architecture; actor definitions; tokenomics; governance model; economics — the conceptual substrate of the entire system | Researchers, architects, protocol-curious (any role seeking deep understanding) | Operational guides, product features, setup instructions — those live in role tabs |
| **Solutions** | Consumer and platform-builder products (Daydream, Studio, Stream.place, Embody, Frameworks); Livepeer Studio product documentation | Platform builders, creators, app developers — people consuming Livepeer via a product layer | Infrastructure operation, gateway/orchestrator node setup, token governance |
| **Developers** | Custom AI pipeline and livestream application development (BYOC, ComfyStream); integration patterns; SDK/API reference; developer opportunities | Developers and ML engineers building custom applications on Livepeer directly | Gateway business operation; orchestrator node management; token governance; consumer product support |
| **Gateways** | Gateway operator concepts, quickstart, setup, operational guides, business model content — all three gateway types (AI product, video transcoding, platform/NaaP) | Gateway operators across the three paths | Orchestrator node specifics; token governance; general developer tutorials; community |
| **Orchestrators** | Orchestrator concepts, quickstart, setup, guides, resources — pool workers, solo operators, AI-specialised operators | Orchestrator operators — hardware providers running go-livepeer nodes | Gateway business operation; token governance; developer SDK usage; community |
| **LP Token** | What LPT is; delegation mechanics; governance participation; treasury; staking and earning | Delegators, LPT holders, governance voters | Infrastructure operation (gateway/orchestrator); video/AI technical content; product documentation |
| **Community** | Community identity and contribution — guidelines, events, contribution paths, forums, ecosystem participation | Community members, contributors, ecosystem participants (any role in its community capacity) | Technical operation; protocol reference; product documentation — those live in role tabs |
| **Resource HUB** | Cross-cutting reference material — changelog, concept glossaries, documentation guide, per-role reference indexes, help center | Contributors, docs maintainers, researchers seeking reference or changelog content | Role-specific operational guidance; product documentation — this is a reference and meta layer only |

---

## Boundary Notes

**About ↔ Developers**: About explains the architecture; Developers shows how to build on it. Conceptual architecture content lives in About. Build guides live in Developers.

**Solutions ↔ Developers**: Solutions covers products that abstract Livepeer (use the API layer). Developers covers custom pipeline construction (use the network directly). Overlap risk: Studio API docs appear in both tabs — Solutions owns the Studio product; Developers owns custom pipeline patterns.

**Gateways ↔ Developers**: Developers who build custom pipelines and then run a gateway should graduate from Developers → Gateways. The graduation path is a cross-tab journey, not duplication. Gateways does not re-explain development concepts; Developers does not explain gateway business models.

**Orchestrators ↔ Gateways**: Related but distinct operator roles. No content should live in both. Orchestrators own compute supply; Gateways own job demand and routing.

**LP Token ↔ About**: About explains token economics conceptually (how the tokenomic model works, why). LP Token explains how to participate (how to delegate, how to vote, how to earn). Conceptual tokenomics → About. Participation mechanics → LP Token.

**Community ↔ Resource HUB**: Community owns social participation and contribution. Resource HUB owns reference material and docs meta. Community forum links, events, governance discussion → Community. Contract addresses, glossaries, changelogs, docs authoring guides → Resource HUB.

---

## Duplication Risk Register

| Risk | Tabs involved | Resolution |
|---|---|---|
| Studio API documentation | Solutions + Developers | Solutions owns Studio product docs; Developers links, does not duplicate |
| Protocol/network concepts | About + every role tab | About is canonical; role tabs may introduce concepts inline but must link to About for depth |
| Governance content | About + LP Token + Community | About owns the governance model; LP Token owns participation mechanics; Community owns discussion/forum |
| Resources sections | All role tabs have a Resources group | Each tab's Resources is role-scoped (gateway resources ≠ orchestrator resources); Resource HUB aggregates cross-role references |
| Glossary | About + Resource HUB + Solutions | Resource HUB owns the canonical glossary; other tabs may define terms inline |

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
| LP Token | 5 | ~20 |
| Community | 5 | ~17 |
| Resource HUB | 12 | ~27 |

---

## Next: IA Maps (Level 1 Prompt A)

Per-tab audience design files — first-principles design for each tab. Run one per tab, no repo access during design phase.

Priority order (richest context first, most active content):
1. Gateways — `08a-ia-per-tab.md` already exists ✅ (skip Prompt A, go direct to Prompt B audit)
2. Orchestrators
3. Developers
4. LP Token
5. Community
6. About
7. Solutions
8. Home / Resource HUB (lower priority — routing and reference tabs)
