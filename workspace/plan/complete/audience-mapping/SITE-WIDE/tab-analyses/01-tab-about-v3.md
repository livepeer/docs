# About tab: audience, persona, journey, IA, and audit

Tab path: `v2/about/`
Branch: `docs-v2-dev`
Version: v3 — based on actual content reads of all major pages
Pages read: `portal.mdx`, `livepeer-overview.mdx`, `mental-model.mdx`, `faq-about.mdx`, `livepeer-network/overview.mdx`, `livepeer-network/job-lifecycle.mdx`, `livepeer-network/marketplace.mdx`, `livepeer-protocol/core-mechanisms.mdx`, `livepeer-protocol/governance-model.mdx`, `livepeer-protocol/economics.mdx`
Additional sources: `index.md` collation, Notion persona discussion (2cc66022), canonical-about-audience-design.md (3-run synthesis)

---

## AUDIENCE

### Tab function

About is a **substrate-and-routing tab**. It does not serve a single audience. It serves every arriving audience simultaneously at the `discover` lifecycleStage. Its job is to orient, then route. But unlike other routing tabs, it also contains enough protocol and network depth that some personas (OSS contributor, web3 R&D researcher) have About as a genuine destination, not just a waypoint.

**Audience token:** Multi-audience. No single canonical audience token applies — About is the explanation layer for the entire network before role differentiation.

### Who arrives and from where

| Arriving type | Entry vector | Arriving state | Primary need | Routes to |
|---|---|---|---|---|
| **Product evaluator** — founder, PM, platform engineer | External article, search, Solutions tab, Home CTA | General awareness Livepeer is video/AI compute; no protocol knowledge | "Is this the right infrastructure for my use case?" | Solutions or Developers |
| **Token/network researcher** — investor, DePIN analyst | Search "LPT staking" / "Livepeer tokenomics"; Messari/Dune/CoinGecko | LPT exists; no delegation mechanics or inflation model knowledge | "Is this a credible protocol to stake with?" | LP Token tab |
| **GPU operator candidate** — hardware owner | Discord, forum, search "Livepeer orchestrator" / "GPU compute earnings" | Hardware provisioned; no protocol roles or stake requirements knowledge | "Can I earn money running my hardware here?" | Orchestrators tab |
| **Developer** — API/SDK evaluator | Search "Livepeer API" / "AI video pipeline"; developer communities | Technical context on AI/video APIs; no protocol layer knowledge | "Is the stack mature enough to build on?" | Developers tab |
| **Ecosystem newcomer** | Discord, X/Twitter, blog, podcast | Minimal — heard the name; interested in mission and community | "What is this and how do I participate?" | Community tab |
| **OSS / protocol contributor** | GitHub, DeepWiki, ecosystem team referral | Technical — evaluating whether the protocol is worth contributing to | Architectural depth, design decisions, verification model | Developers tab (OSS path) — but About provides prerequisites |
| **Web3 R&D researcher** | Academic referral, crypto-economic literature, whitepaper link | Deep technical — studying cryptoeconomic coordination at scale | Protocol design rationale, primitives, trust model | **About is the destination** — may not route out |

Source: canonical-about-audience-design.md (3-run synthesis), index.md (master collation)

### Arriving question

> "What is Livepeer, who is it for, and is any of this relevant to what I'm trying to do?"

Per-audience variants:
- **Founder:** "Can Livepeer provide the compute infrastructure my product needs?"
- **GPU operator:** "Can I earn meaningful money running my hardware on this network?"
- **Token researcher:** "Is this a credible, durable protocol to stake LPT with?"
- **Developer:** "Is the API and stack mature enough to build on?"
- **Ecosystem newcomer:** "What is this ecosystem and how do I participate?"
- **OSS contributor:** "Is this protocol's architecture interesting and worth my time contributing?"
- **Web3 R&D researcher:** "How does this system achieve trustless coordination at scale — where are the trade-offs?"

### Cross-tab routing table

| Direction | From / To | Trigger |
|---|---|---|
| Inbound | Home → About | Discovery readers wanting protocol depth beyond platform narrative |
| Inbound | Any role tab → About | Role tabs link to About for conceptual definitions, actor definitions, glossary |
| Outbound | About → Solutions | Product evaluators confirm use case fits |
| Outbound | About → Orchestrators | GPU operators confirm role fits their hardware |
| Outbound | About → LP Token | Token researchers need the delegation journey |
| Outbound | About → Developers | Technical builders confirm API/SDK surface is right |
| Outbound | About → Gateways | Gateway operators routing jobs on own infrastructure |
| Outbound | About → Community | Ecosystem newcomers and contributors |
| **Stays** | — | Web3 R&D researchers — About IS their destination |

---

## PERSONA

### Primary persona: The Protocol Understander

A technically curious reader who wants to understand how Livepeer works before deciding whether — and how — to participate. Not yet operating, not yet staking, not yet building. Evaluating.

**Arrival state:** Curious but unanchored. Surface understanding of Livepeer but cannot explain it accurately to someone else. Wants a model to trust, not marketing.

**What they need to leave with:**
- A clear mental model: who does what, how value flows, how trust is enforced
- Enough economic understanding to evaluate whether participating makes sense
- A named, clear pointer to the next step that matches their emerging intent

### Secondary personas — not just waypoints

These personas are not simply "arriving types who get routed elsewhere." Some (OSS contributor, web3 R&D researcher) have About as a genuine destination.

| Persona | Who they are | What they need FROM About | Do they route out? |
|---|---|---|---|
| **The Diligence Analyst** | Investor, fund researcher, DePIN analyst doing structured due diligence | Token economics (inflation model, staking mechanics, fee flow), governance model, technical architecture, roadmap, whitepaper | Routes to LP Token after economics section; stays in About for architecture and governance |
| **The Founder / Product Evaluator** | Building a product; evaluating Livepeer as infrastructure | Build-vs-buy framework: what the platform provides, economic model, reliability evidence, what they'd need to build themselves | Routes to Solutions or Developers once build-or-integrate decision made |
| **The OSS / Protocol Contributor** | Developer considering contributing to go-livepeer, ai-worker, or protocol contracts | Architectural depth: protocol design decisions, verification model, smart contract architecture, the *why* behind design choices — not just the *what* | Routes to Developers (OSS path) but About provides the prerequisite architecture understanding |
| **The Web3 R&D Researcher** | Academic or protocol researcher studying cryptoeconomic systems, DePIN mechanics, decentralised compute coordination | Protocol design rationale, cryptoeconomic primitives (inflation, staking, slashing, probabilistic payments, LIP governance), trust model, trade-offs | **About IS their destination** — may not route out at all |
| **The Pre-build Developer** | Software developer evaluating Livepeer AI as infrastructure | Enough protocol understanding to decide to move to the Developers tab; will not stay long if content is too abstract | Routes to Developers |
| **The DePIN-curious LPT Holder** | Has LPT; found the docs; wants to understand what they own | Economics and governance overview; specific mechanics are in LP Token tab | Routes to LP Token |
| **The Orchestrator Candidate** | Has GPU server; evaluating whether node operation is worth it | About is their research phase — economic model, hardware context | Routes to Orchestrators |

### Persona canonical scoring (canonical-about-audience-design.md, 3-run synthesis)

| Rank | Arriving type | Vol | Depth | Impact | Total | Runs |
|---|---|---|---|---|---|---|
| 1 | Product evaluator | 3 | 3 | 3 | **9** | 3/3 |
| 1 | Token/network researcher | 3 | 3 | 3 | **9** | 3/3 |
| 3 | GPU operator | 2 | 3 | 3 | **8** | 3/3 |
| 4 | Developer | 2 | 2 | 3 | **7** | 3/3 |
| 5 | Ecosystem newcomer | 3 | 2 | 2 | **7** | 3/3 |

Note: OSS contributor and Web3 R&D researcher were absent from all 4 AI-generated audience design runs — they were systematically treated as pass-through. This is the design gap. The current About tab content (particularly `core-mechanisms.mdx`, `governance-model.mdx`, `economics.mdx`, `mental-model.mdx`) clearly serves these personas, but no journey has been mapped for them.

### Source reconciliation: Notion persona discussion (2cc66022, Dec 2025)

Five high-level ecosystem personas identified:
- **Founder** → access cheap compute and funding to launch venture
- **Supplier** → earn from contributing compute capacity
- **Investor** → buy LPT and earn yield
- **Enterprise** → integrate with reliable, secure developer platform
- **OS Contributor** → contribute to and experiment with OSS research & software

Three gaps flagged in the Notion discussion:
1. Educators & influencers/advocates (helping in Discord, forum, making LP guides)
2. Builders / End Users (long-tail builders not fitting Founder or Enterprise)
3. Funded Ecosystem Teams (teams building core capabilities who border on internal product owners)

**Mapping to About tab:**

| Notion persona | About tab secondary persona | Notes |
|---|---|---|
| Founder | The Founder / Product Evaluator | About serves evaluation; Solutions/Developers serves after decision |
| Supplier | The Orchestrator Candidate | About is research phase; Orchestrators tab is action phase |
| Investor | The Diligence Analyst / DePIN-curious LPT Holder | Depth determines which; analyst stays longer |
| Enterprise | The Founder / Product Evaluator (enterprise variant) | Same evaluation need, higher due-diligence bar |
| OS Contributor | The OSS / Protocol Contributor | **Needs About more than canonical design acknowledged** |
| Educators/Influencers | Ecosystem newcomer → Community | Not primarily an About persona |
| Builders/End Users | Pre-build Developer | Routes to Developers |
| Funded Ecosystem Teams | OSS Contributor + Founder hybrid | Needs both architecture depth and ecosystem context |
| **Web3 R&D Researcher** | Not in any Notion or AI run | **Identified gap** — About IS their destination |

---

## PERSONA NEEDS / JOURNEY

### Jobs-to-be-done (JTBDs)

| ID | When I... | I want to... | So I can... |
|---|---|---|---|
| J1 | arrive at About with no prior knowledge | understand what Livepeer does in plain terms | decide if it's relevant to my goal |
| J2 | want to understand the network | trace how a job moves from request to result | know whether I'm asking the right questions for my role |
| J3 | want to evaluate economic participation | understand where money enters and exits the system | decide whether staking, building, or operating is right for me |
| J4 | want technical depth | understand the architecture layers and what each does | build or contribute with confidence |
| J5 | want to assess governance | understand who controls this protocol and how | evaluate decentralisation and governance risk |
| J6 | want to understand the organisation | understand Foundation, Treasury, protocol relationships | assess governance and longevity risk |
| J7 | am mid-journey and need to confirm a specific fact | look up a term or mechanism | continue in my role tab without returning to first principles |

### Ideal linear journey: The Protocol Understander

Each step mapped to actual page content now that pages have been read:

| Step | Reader's question | Current page | **Actual content status** |
|---|---|---|---|
| S1 | Which role applies to me? | `portal.mdx` + actors section of `livepeer-overview.mdx` | ⚠️ Portal exists with card grid; routing is structural but the actor descriptions in the cards are vague ("Platforms? Workers?") — not confident role identification |
| S2 | What does Livepeer actually do? | `livepeer-overview.mdx` | ✅ Good — covers protocol vs network split, marketplace framing, systems engineering perspective with clear layer definitions |
| S3 | How does the full stack work? | `mental-model.mdx` | ✅ **Strongest page in the tab** — 10-layer OSI analogy with detailed accordions per layer; cryptoeconomic primitives explained well |
| S4 | How does a job actually move through the network? | `livepeer-network/job-lifecycle.mdx` | ✅ **Genuinely strong** — state machine diagram, events table, video vs AI lifecycle comparison, probabilistic payments explained |
| S5 | How does money move through the network? | `livepeer-protocol/economics.mdx` | ✅ **Strong but narrowly framed** — covers staking flow, reward flow, payment flow, fee flow comprehensively at smart contract level. However it reads as an engineer-facing smart contract walkthrough, not a general economic model explainer. The `fee-flow.mdx` page is still a stub — these are separate pages with different purposes. |
| S6 | What are the incentive differences between video and AI? | `livepeer-protocol/core-mechanisms.mdx` | ✅ **Critical distinction documented** — explicitly calls out that AI services do not participate in round-based reward system, not subject to LPT staking, not in active set. This is crucial and currently only here. |
| S7 | What is LPT for — functional or speculative? | `livepeer-protocol/livepeer-token.mdx` | ⚠️ Not read — 13KB file with #TODO markers noted previously |
| S8 | Who governs this protocol and can I have a say? | `livepeer-protocol/governance-model.mdx` | ✅ **Strong** — LIP lifecycle fully documented with real LIP numbers, ELI5 accordion, mermaid governance flowchart, quorum rules (33% participation, >50% threshold), Foundation and SPE roles explained |
| S9 | How does the marketplace match demand and supply? | `livepeer-network/marketplace.mdx` | ✅ Good — routing logic, price discovery, payment options, protocol-market separation table, future LIP proposals |
| S10 | What has been built? Is the network actively used? | Nothing — `resources/network-metrics.mdx` missing | 🔴 MISSING |
| S11 | What is the roadmap? | `resources/technical-roadmap.mdx` | 🔴 STUB (793 bytes) |

### Content that exists but has NO reader journey

Reading the actual pages revealed significant content that serves the OSS Contributor and Web3 R&D Researcher personas but has no mapped journey through it:

| Content | Page | Serving which persona | Journey mapped? |
|---|---|---|---|
| Smart contract layer detail (BondingManager, RoundsManager, TicketBroker, Minter, Governor, proxy pattern) | `core-mechanisms.mdx` | OSS Contributor, Web3 R&D Researcher | ❌ No |
| Full staking/reward/payment/fee flow at contract level | `economics.mdx` | OSS Contributor, Diligence Analyst | ❌ No |
| Gas optimisation strategies (pool hints, batch operations, dynamic gas pricing) | `economics.mdx` | OSS Contributor | ❌ No |
| LIP history with specific LIP numbers and their effects | `governance-model.mdx` | OSS Contributor, Diligence Analyst, Web3 R&D Researcher | ❌ No |
| Video vs AI incentive separation (critical architectural distinction) | `core-mechanisms.mdx` | All personas | ⚠️ Partially — exists but not surfaced in portal or overview |
| Consensus and finality model (Arbitrum optimistic rollup, 7-day challenge window) | `core-mechanisms.mdx` | OSS Contributor, Web3 R&D Researcher | ❌ No |
| State machine diagram for job lifecycle | `job-lifecycle.mdx` | OSS Contributor, Developer | ⚠️ Exists on page but portal doesn't route to it |

**This is the core finding about "content that exists but has no journey."** The About tab has substantial, high-quality technical content that is inaccessible because:
1. The portal cards don't accurately describe what each section contains
2. There is no navigator page (the About tab lacks the `navigator.mdx` that Orchestrators and Gateways have)
3. The OSS Contributor and Web3 R&D Researcher have no explicit "if you're looking for X, go here" routing

### Persona path validation

| Persona | Enters at | First block | Resolution |
|---|---|---|---|
| Product evaluator | Portal → S2 → S3 → routes out | No block — S3 and marketplace.mdx provide enough context | ✅ Unblocked |
| Token/network researcher | Portal → S5 → S8 → routes to LP Token | `fee-flow.mdx` is a stub — S5 journey incomplete for this persona specifically | ⚠️ Partially blocked: economics.mdx covers money flow at contract level but `fee-flow.mdx` stub leaves a narrative gap |
| GPU operator | Portal → S2 → S6 → routes to Orchestrators | S6 (`core-mechanisms.mdx`) covers the video vs AI split which is critical for this persona | ✅ Unblocked |
| Developer | Portal → S2 → S3 → routes to Developers | Not blocked — S3 states developers access via gateway APIs | ✅ Unblocked |
| Ecosystem newcomer | Portal → S2 → S9 → routes to Community | S10 missing (no current state page) weakens confidence signal | ⚠️ Partially blocked |
| OSS contributor | Portal → (no explicit path) → `core-mechanisms.mdx`, `economics.mdx`, `governance-model.mdx` | **No explicit routing exists.** Content is there. Path is not. | ⚠️ Blocked by absence of routing, not content |
| Web3 R&D researcher | Portal → (no explicit path) → deep reads | **No explicit routing exists.** Content is there. Path is not. | ⚠️ Blocked by absence of routing, not content |

---

## IA

### Canonical 10-section structure (from index.md, 3-run synthesis)

| Section | Reader question | pageType | Maps to existing pages |
|---|---|---|---|
| S1 — Role router | "Which role applies to me?" | `navigation` | `portal.mdx` + actors in `livepeer-overview.mdx` (incomplete) |
| S2 — What Livepeer is | "What does this network actually do?" | `concept` | `livepeer-overview.mdx` ✅ |
| S3 — How the network works | "How does work move from request to result?" | `concept` | `mental-model.mdx` ✅ + `job-lifecycle.mdx` ✅ |
| S4 — The two compute types | "Video vs AI — which matters for my path?" | `concept` | `core-mechanisms.mdx` (video/AI table) ✅ — but not surfaced |
| S5 — The economic model | "How does money move through this network?" | `concept` | `economics.mdx` ✅ (contract-level); `fee-flow.mdx` 🔴 STUB (narrative level) |
| S6 — LPT: the protocol token | "What is LPT for?" | `concept` | `livepeer-protocol/livepeer-token.mdx` ⚠️ (has #TODO markers) |
| S7 — Staking and delegation | "What does bonding LPT involve?" | `concept` | Within `economics.mdx` + `core-mechanisms.mdx` — not a dedicated page |
| S8 — Governance | "Who controls this protocol?" | `concept` | `governance-model.mdx` ✅ strong |
| S9 — The organisation | "Is there a company behind this?" | `concept` | `home/about-livepeer/ecosystem.mdx` (Foundation) — not in About tab |
| S10 — Ecosystem and current state | "What's been built? Is it actively developed?" | `concept` | `resources/network-metrics.mdx` 🔴 MISSING |

### Absent IA element: navigator.mdx

Orchestrators and Gateways both have `navigator.mdx` — a role-based routing page with explicit pathways ("I want to earn," "I want to run AI," "I want to influence the protocol"). About has no equivalent. The result: arriving personas with specific intents (OSS contributor, researcher) cannot orient themselves. The portal gives six cards but no conditional routing based on what brought the reader here.

### Current live v2/about/ tree — corrected quality ratings

After reading actual page content:

```
v2/about/
├── portal.mdx                            ⚠️ exists — structural but actor descriptions vague
│                                            "Platforms? Workers?" card is placeholder text
├── livepeer-overview.mdx                 ✅ good — protocol/network split clear; needs AI pivot front-loaded
├── core-concepts.mdx                     ⚠️ not read — partial stubs confirmed by size (3.3KB)
├── mental-model.mdx                      ✅ STRONGEST PAGE — 10-layer OSI, well-structured accordions
├── faq-about.mdx                         🔴 WRONG CONTENT TYPE — is an IA blueprint/working doc
│                                            Not a reader-facing FAQ. Must move to _workspace/.
│
├── livepeer-network/
│   ├── overview.mdx                      🔴 LOW QUALITY — reads as implementation notes
│   │                                        Node types are listed as code references ("LivepeerServer",
│   │                                        "SegmentChans") not explanations. Not reader-ready.
│   ├── actors.mdx                        ⚠️ not read — 5KB
│   ├── job-lifecycle.mdx                 ✅ HIGH QUALITY — state machine, events table, video/AI comparison
│   ├── marketplace.mdx                   ✅ HIGH QUALITY — routing, pricing, settlement, protocol boundaries
│   ├── technical-architecture.mdx        ✅ HIGH QUALITY (confirmed from prior review) — full network stack
│   ├── interfaces.mdx                    ✅ HIGH QUALITY (confirmed from prior review)
│   ├── demand-side.mdx                   🔴 STUB 538 bytes
│   ├── supply-side.mdx                   🔴 STUB 517 bytes
│   ├── fee-flow.mdx                      🔴 STUB 498 bytes — CRITICAL NARRATIVE GAP
│   ├── scaling.mdx                       🔴 STUB 535 bytes
│   └── livepeer-actors/                  ⚠️ subdirectory — contents not confirmed
│
├── livepeer-protocol/
│   ├── overview.mdx                      ✅ high draft quality (confirmed from prior review)
│   ├── core-mechanisms.mdx               ✅ HIGH QUALITY — tabbed: rounds, staking, rewards, payments,
│   │                                        upgrades. Critical video/AI distinction table present.
│   │                                        Reads as engineer-facing. Accessible to OSS contributors.
│   ├── livepeer-token.mdx                ⚠️ 13KB — has #TODO/#MOVE markers. Not read in detail.
│   ├── governance-model.mdx              ✅ HIGH QUALITY — LIP lifecycle, real LIP numbers,
│   │                                        ELI5 accordion, mermaid flowchart, quorum rules,
│   │                                        Foundation/SPE roles. Scope creep: includes participation
│   │                                        guidance that belongs in LP Token tab.
│   ├── treasury.mdx                      ✅ high (confirmed from prior review) — scope boundary needed
│   ├── economics.mdx                     ✅ HIGH QUALITY — full contract-level money flow:
│   │                                        staking, rewards, payments, fees, withdrawal flows,
│   │                                        gas optimisation. Reads as smart contract walkthrough.
│   │                                        LIP-107/LIP-100 review needed (Mehrdad).
│   ├── technical-architecture.mdx        ⚠️ partial (confirmed from prior review)
│   └── blockchain-contracts.mdx          ⚠️ DUPLICATE of resources/blockchain-contracts.mdx
│
├── concepts/
│   └── actors.mdx                        ⚠️ DUPLICATE of livepeer-network/actors.mdx — resolve
│
└── resources/
    ├── livepeer-whitepaper.mdx           ✅ exists
    ├── livepeer-contract-addresses.mdx   ✅ exists
    ├── livepeer-contract-addresses-data.json ✅ exists
    ├── gateways-vs-orchestrators.mdx     ✅ exists
    ├── blockchain-contracts.mdx          ⚠️ DUPLICATE — resolve with livepeer-protocol/
    ├── technical-roadmap.mdx             🔴 STUB 793 bytes — high value, needs content
    ├── network-metrics.mdx               🔴 MISSING — new page needed
    └── compendium/                       ⚠️ confirm contents (glossary should be here)
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap or blocker

---

# AUDIT

## Gaps

### 1. The journey problem — content exists but is inaccessible

**This is the primary finding.** The About tab has substantial high-quality content. But there is no journey threading it together for any persona other than the generic Protocol Understander following section order.

Specific inaccessible content:
- The video/AI incentive separation (in `core-mechanisms.mdx`) is the most important thing a GPU operator or developer needs to understand — it's buried in a tabbed component on page 4 of a protocol section
- The full contract-level economics (`economics.mdx`) is excellent engineer-facing content with no signpost from the portal
- The LIP history in `governance-model.mdx` serves diligence analysts and researchers but the portal card just says "Livepeer Protocol"
- The OSS Contributor has no "start here" path — the content they need exists but is scattered across `core-mechanisms.mdx`, `economics.mdx`, `governance-model.mdx`, and `blockchain-contracts.mdx`

**Proposed fix:** Add a `navigator.mdx` equivalent to About — an explicit routing page with conditional pathways:
- "I want to understand the economic model" → economics.mdx → governance-model.mdx
- "I want to understand the technical architecture" → mental-model.mdx → job-lifecycle.mdx → core-mechanisms.mdx
- "I want to contribute to the protocol" → core-mechanisms.mdx → blockchain-contracts.mdx → Developers (OSS path)
- "I'm researching Livepeer for a paper/analysis" → mental-model.mdx → economics.mdx → governance-model.mdx → whitepaper

### 2. The portal actor cards are vague

`portal.mdx` has four cards: Core Concepts, Mental Model, Livepeer Protocol, Livepeer Network. All four link to `/v2/about/livepeer-network/overview` (the same URL — this is likely a placeholder bug). The actors listed in `livepeer-overview.mdx` include "Platforms? Workers?" as a card title — this is placeholder text that will reach readers.

### 3. `livepeer-network/overview.mdx` — not reader-ready

This is the entry to the entire network section. After reading it, it's clearly implementation notes not explanatory content. It lists node types as: "Broadcaster Node: Centers on LivepeerServer managing rtmpConnections and BroadcastSessionsManager." This is a developer implementation note, not a description any non-engineer can use. It needs a complete rewrite from the reader's perspective.

### 4. `fee-flow.mdx` — narrative gap despite `economics.mdx` covering flows

`economics.mdx` covers the complete money flow at smart contract level. `fee-flow.mdx` as a stub suggests a different, narrative-level treatment was intended — a page that explains "how does money actually move through this network?" in plain terms before the reader encounters smart contract details. Both are needed: the narrative version for the Protocol Understander, and the contract-level version (`economics.mdx`) for OSS contributors. The stub must become its own distinct narrative page.

### 5. `faq-about.mdx` — wrong content type in nav

Reading the actual content confirms: this file contains a full IA restructuring blueprint written by an AI agent with headers like "GROUP 1: About Livepeer," "GROUP 2: Livepeer Protocol," etc. It is not a FAQ. It has no reader-facing content. Any reader who reaches this page will be confused. Move to `v2/about/_workspace/` before launch.

### 6. Missing pages — high value

**`resources/network-metrics.mdx`** — MISSING. No page answers "what does this network look like today?" — active orchestrators, current inflation, fees generated, AI compute volume. Should link to authoritative live sources (Dune dashboards, Messari reports, Explorer) with explanations of what each measures. Do not embed live data.

**`resources/technical-roadmap.mdx`** — 793-byte stub. The Foundation's 3-phase roadmap is public content. High value for Founders and Diligence Analysts.

**`livepeer-protocol/design-philosophy.mdx`** — MISSING. The `faq-about.mdx` working doc itself identifies this as needed. Serves OSS Contributors and Web3 R&D Researchers specifically. Content: why probabilistic payments (not per-segment), why dynamic inflation (not fixed supply), why protocol/network separation (why compute evolves faster than smart contracts), why Arbitrum. This is the "why" layer behind the "what."

### 7. Scope creep to resolve

**`governance-model.mdx`** — covers "how to participate" (how delegators can override orchestrator votes) which belongs in `v2/lpt/governance/processes.mdx`. The About version should explain the on-chain mechanics only.

**`blockchain-contracts.mdx`** — exists in both `livepeer-protocol/` and `resources/`. One must redirect.

**`actors.mdx`** — exists in both `livepeer-network/` and `concepts/`. One must redirect.

---

## Content quality (post-read correction)

| Page | Quality | Notes |
|---|---|---|
| `mental-model.mdx` | ✅ High | Best page in the tab. 10-layer OSI well-executed. |
| `livepeer-network/job-lifecycle.mdx` | ✅ High | State machine, events table, video/AI comparison — all strong |
| `livepeer-network/marketplace.mdx` | ✅ High | Routing, pricing, settlement clear |
| `livepeer-protocol/core-mechanisms.mdx` | ✅ High | Tabbed layout; video/AI distinction critical and well-documented |
| `livepeer-protocol/economics.mdx` | ✅ High (engineer-facing) | Complete contract-level money flow. Needs LIP-107 REVIEW flag. |
| `livepeer-protocol/governance-model.mdx` | ✅ High | Strong. Real LIP numbers. Scope creep into participation process. |
| `livepeer-overview.mdx` | ✅ Good | AI pivot needs to be front-loaded; actors card placeholder |
| `livepeer-network/technical-architecture.mdx` | ✅ Good | |
| `livepeer-network/interfaces.mdx` | ✅ Good | |
| `livepeer-protocol/overview.mdx` | ✅ Good | Product-forward framing |
| `livepeer-protocol/treasury.mdx` | ✅ Good | Scope boundary note needed |
| `livepeer-network/actors.mdx` | ⚠️ Medium | Unread in detail; duplicate exists |
| `livepeer-protocol/livepeer-token.mdx` | ⚠️ Medium | #TODO/#MOVE markers; not read in detail |
| `livepeer-protocol/technical-architecture.mdx` | ⚠️ Partial | Contract diagram solid; stubs |
| `portal.mdx` | ⚠️ Structural only | All cards link to same URL (placeholder bug). Actor cards vague. |
| `core-concepts.mdx` | ⚠️ Partial stubs | 3.3KB — not read; likely thin |
| `livepeer-network/overview.mdx` | 🔴 Not reader-ready | Implementation notes, not explanation |
| `fee-flow.mdx` | 🔴 Stub | Narrative gap — `economics.mdx` covers contract level, not narrative level |
| `demand-side.mdx` | 🔴 Stub | |
| `supply-side.mdx` | 🔴 Stub | |
| `scaling.mdx` | 🔴 Stub | |
| `resources/technical-roadmap.mdx` | 🔴 Stub | High value |
| `faq-about.mdx` | 🔴 Wrong type | IA blueprint masquerading as FAQ — move to `_workspace/` |

---

## RESEARCH

### V1 pages

V1 had no About tab equivalent. The v1 structure (`developers/`, `delegators/`, `orchestrators/`, `gateways/`, `ai/`, `references/`, `self-hosting/`) was role-gated from entry. There was no unified network/protocol explanation section. All About content is net-new v2 work — no migration debt, but no proven v1 content to verify against either.

### ALL content (including not in nav)

**Content with no confirmed nav routing:**
- `v2/about/_workspace/` — workspace directory; contents not confirmed
- `v2/about/livepeer-network/livepeer-actors/` — subdirectory within `livepeer-network/`; contents not confirmed. May duplicate or extend `actors.mdx`. Audit before launch.
- `faq-about.mdx` — technically in the nav but is a working doc, not reader content

**Key content fragmentation confirmed by reading:**
The About tab's most practically important content — the video vs AI incentive separation — is in `core-mechanisms.mdx` under the AI vs Video Mechanisms callout. It is not:
- Mentioned in the portal
- Referenced in the overview
- On any suggested reading path for any persona

This is the clearest example of "lots of content, no journey." The content exists. The consolidation and path-building is what's missing.
