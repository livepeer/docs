AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| canonical-about-audience-design.md | `CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/about/collated/` | Audience, Persona, Journey, IA |
| chatgpt-v4-about-audience-design.md | `...testing/Tabs/about/zero-context-ai-results/v4/` | Audience, Persona, Journey, IA |
| claude-web-v4-about-audience-design.md | `...testing/Tabs/about/zero-context-ai-results/v4/` | Audience, Persona, Journey, IA |
| agent-v5-about-audience-design.md | `...testing/Tabs/about/zero-context-ai-results/v5/` | Audience, Persona, Journey, IA |
| deprecated-terms.md | `...testing/Tabs/about/input-pack/` | Content |
| glossary-about.md | `...testing/Tabs/about/input-pack/` | Content |
| veracity-sources.md | `...testing/Tabs/about/input-pack/` | Prompt/Skill |
| v4.md (learnings) | `...testing/Tabs/about/learnings/` | Prompt/Skill |
| about-content-scan.md | `CONTENT-WRITING/context-packs/` | Content, IA |
| about-research-pack.md | `CONTENT-WRITING/context-packs/` | Content |
| about-v1-content.md | `CONTENT-WRITING/context-packs/` | Content |
| about-full-content.md | `CONTENT-WRITING/context-packs/` | Content |
| about-ia-prereq.md | `CONTENT-WRITING/context-packs/` | IA |
| collated/about/ (6 files) | `CONTENT-WRITING/collated/about/` | Audience, IA, Content, Plan |
| portal.mdx | `v2/about/` | Content |
| 01-tab-about.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |

---

# AUDIENCE — Who lands on this tab

**Audience token**: Multi-audience — serves `founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community` simultaneously at `discover` lifecycleStage.

**The About tab does not have a single canonical audience token.** It serves every arriving audience at the discovery stage.

### Who arrives and from where

| Arriving type | Entry vector | Arriving state | What they need before routing elsewhere |
|---|---|---|---|
| **Product evaluator** (founder, PM, platform engineer) | External article, search result, Solutions tab, Home CTA | General awareness Livepeer is video/AI compute; no knowledge of protocol mechanics, roles, costs | Enough to answer "is this the right infrastructure for my use case?" then route to Solutions or Developers |
| **Token/network researcher** (investor, analyst) | Search "LPT staking" / "Livepeer tokenomics"; Messari/Dune/CoinGecko | Awareness LPT exists; no knowledge of delegation mechanics, inflation model, governance | Reliable outline of economic model — inflation, rewards, governance weight — then route to Delegators |
| **GPU operator** (hardware owner evaluating earnings) | Discord, forum, search "Livepeer orchestrator" / "GPU compute earnings" | Hardware provisioned or under consideration; no knowledge of protocol roles, stake requirements, job types | What operating a node requires — stake, hardware, job types, economics — then route to Orchestrators |
| **Developer** (API/SDK evaluator) | Search "Livepeer API" / "AI video pipeline"; developer community referral | Technical context on AI/video APIs; no protocol layer or token economics knowledge | Sufficient architectural understanding to evaluate API surface — then route to Developers |
| **Ecosystem newcomer / community member** | Discord, Twitter/X, blog, podcast, referral | Minimal — may have heard the name; interested in mission and community | Legible account of what Livepeer does, who runs it, governance model, participation paths — then route to Community |

**Source**: canonical-about-audience-design.md (3-run synthesis), 01-tab-about.md

### Routing rules

All arriving types share the same linear orientation journey and diverge at S1 (Role Router), where each is named and directed to their correct role tab. No one "stays" in About permanently — all are routed onward after orientation.

### Cross-tab routing

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → About | Discovery-stage readers wanting protocol depth beyond platform narrative |
| Inbound | Any role tab → About | Role tabs link to About for conceptual definitions |
| Outbound | About → Solutions | Product evaluators and builders |
| Outbound | About → Orchestrators | GPU operators confirmed the role fits |
| Outbound | About → Delegators | Token holders and staking researchers |
| Outbound | About → Developers | Technical builders evaluating API/SDK |
| Outbound | About → Gateways | Gateway operators routing jobs |
| Outbound | About → Community | Ecosystem newcomers and contributors |

### Arriving question

> "What is Livepeer, who is it for, and is any of this relevant to what I'm trying to do?"

Per-audience variants:
- Founder: "Can Livepeer provide the compute infrastructure my product needs?"
- GPU operator: "Can I earn money running my hardware on this network?"
- Token holder: "Is this a credible protocol to stake my tokens with?"
- Developer: "Is the API/SDK mature enough to build on?"
- Community member: "What is this ecosystem and how do I participate?"

---

# PERSONAS — Who this tab actually serves

About is a substrate-and-routing tab. Everyone who lands here needs orientation before they can proceed. The personas below define **what people need FROM this tab** — the modes of engagement with About's content.

### Source: 01-tab-about.md (process analysis)

**Primary persona: The Protocol Understander**

- A technically curious reader who wants to understand how Livepeer works before deciding whether — and how — to participate
- Not yet operating, not yet staking, not yet building — they are evaluating
- Arrives from Home ("what is Livepeer?"), search ("Livepeer protocol" / "how does Livepeer work"), or Messari/CoinDesk/DePIN research
- **Mental state on arrival**: Curious but unanchored. Surface understanding of Livepeer but cannot explain it accurately. Wants a model they can trust, not marketing copy
- **What they need to leave with**:
  - A clear mental model of how the network functions: who does what, how value flows, how trust is enforced
  - Enough understanding of economics to evaluate whether participating makes sense
  - Pointers to the next step that matches their emerging intent (stake, build, run a node)

**Secondary personas:**

| Persona | Who they are | What they need from About |
|---|---|---|
| **The Diligence Analyst** | Investor, fund researcher, DePIN analyst doing structured due diligence | Token economics, protocol mechanics, governance model, technical architecture, roadmap, whitepaper. Will read deeply and cross-reference. Will look for FAQs and current network stats |
| **The Pre-build Developer** | Software developer who has heard about Livepeer AI, evaluating as infrastructure | Enough protocol understanding to decide whether to move to Developers tab. Won't stay long if content is too abstract |
| **The DePIN-curious LPT Holder** | Has LPT, found the docs, wants to understand what they own | Economics and governance content. Should be routed to LP Token tab once oriented |
| **The Orchestrator Candidate** | Has a GPU server, found Livepeer, wants to understand if node operation is worth it | About is their research phase. Will move to Orchestrators tab once convinced |

### Source: canonical-about-audience-design.md (3-run synthesis)

Canonical scoring (from AI-generated audience design — these are the arriving audience types scored, not the tab-serving personas):

| Rank | Name | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|
| 1 | Product evaluator | 3 | 3 | 3 | **9** | 3/3 |
| 2 | Token/network researcher | 3 | 3 | 3 | **9** | 3/3 |
| 3 | GPU operator | 2 | 3 | 3 | **8** | 3/3 |
| 4 | Developer | 2 | 2 | 3 | **7** | 3/3 |
| 5 | Ecosystem newcomer | 3 | 2 | 2 | **7** | 3/3 |

### Source: chatgpt-v4 run (4 personas)

| Rank | Name | Score |
|---|---|---|
| 1 | Fit-check evaluator | 9 |
| 2 | System-model seeker | 8 |
| 3 | Token/governance checker | 8 |
| 4 | Protocol/history researcher | 5 |

### Source: claude-web-v4 run (5 personas)

| Rank | Name | Score |
|---|---|---|
| 1 | Role Seeker | 9 |
| 2 | Economics Researcher | 9 |
| 3 | Protocol Architect | 8 |
| 4 | Governance Participant | 6 |
| 5 | Curious Observer | 5 |

---

# JOURNEYS — What each persona needs to accomplish through this tab

## The Protocol Understander's journey through About

**Source**: 01-tab-about.md (gap analysis table)

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | What is Livepeer? | livepeer-overview.mdx | Needs AI pivot update |
| 2 | How does it work technically? | technical-architecture.mdx (both locations) | Good |
| 3 | Who are the participants? | actors.mdx | Good |
| 4 | How does money flow? | fee-flow.mdx (STUB) | **Critical gap** |
| 5 | What are the token economics? | economics.mdx | Needs LIP update |
| 6 | How is the protocol governed? | governance-model.mdx | Good but scope creep |
| 7 | What contracts back this? | blockchain-contracts.mdx | Good |
| 8 | What does the network look like now? | Nothing | **Critical gap** |
| 9 | What is the roadmap? | technical-roadmap.mdx (STUB) | **Critical gap** |
| 10 | Where do I go next? | resources/gateways-vs-orchestrators.mdx | Incomplete handoff |

## Ideal linear journey (canonical)

**Source**: canonical-about-audience-design.md

| Position | Stage | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting: which role is mine? | `discover` | Reading role routing section; identifying participation path |
| 2 | Understanding what Livepeer is | `discover` | Forming working mental model — what it does, who the actors are, two compute types |
| 3 | Understanding how the network works | `discover` | Tracing how a job flows from request to result; mapping actor relationships |
| 4 | Understanding the economics | `discover` | How value is created and distributed — ETH fees, LPT inflation, stake-weighted rewards |
| 5 | Understanding governance and the organisation | `discover` | How protocol decisions get made; who funds development; Foundation/Treasury/SPEs |
| 6 | Routing to depth | `discover` → `evaluate` | Confirming role path, navigating to correct tab with sufficient context |

## On-demand content (return visits)

- Current active set size and whether it is governance-controlled
- Governance-controlled parameter values (unbonding period, target bonding rate, inflation adjustment step, treasury reward cut rate)
- Definitions of specific protocol terms (Active Set, Round, Slashing, Probabilistic Micropayments, SPE)
- Relationship between video transcoding and AI inference as compute types
- How the Treasury is funded and what SPEs are

## Jobs to be Done

**Source**: canonical-about-audience-design.md

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I first encounter Livepeer and have no context | understand in plain terms what the network does, who built it, and what problem it solves | decide in under five minutes whether this is worth investigating for my specific situation |
| J2 | I am evaluating whether to use Livepeer for my product | understand the two compute types and how gateways access them | assess whether the compute supply meets my product's latency, quality, and cost requirements before reading integration docs |
| J3 | I hold LPT or am considering buying it | understand how staking, inflation, and fee distribution work conceptually | evaluate whether delegating is worth it and which dimensions to investigate further in the Delegators tab |
| J4 | I run GPU hardware and want to earn from it | understand what running an orchestrator requires — stake, hardware, job types, economics | avoid wasting time on setup docs for a path that does not fit my situation |
| J5 | I need to understand how protocol decisions get made | understand the governance model — who votes, on what, with what weight | evaluate whether the protocol's direction is aligned with my interests |
| J6 | I want to understand the organisation behind Livepeer | understand the relationship between Foundation, Treasury, and open-source protocol | assess governance and longevity risk |
| J7 | I am mid-journey and need to confirm I am on the right path | look up a specific term or mechanism | continue reading a role-specific tab without returning to first principles |

## Persona path validation

**Source**: canonical-about-audience-design.md

| Persona | Enters at | Exits at | Block | Knowledge gap to fill |
|---|---|---|---|---|
| Product evaluator | S1 → S3 → S4 → Solutions/Developers | S4 then outbound | None | S3 and S4 must name Gateway/Developer paths and link to role tabs |
| Token/network researcher | S1 → S5 → S6 → S8 → Delegators | S8 then outbound | None | S5 and S6 must cover complete economic model (ETH fees AND LPT inflation) before S8 |
| GPU operator | S1 → S3 → S5 → Orchestrators | S5 then outbound | None | S3 must state orchestrators need significant LPT stake for video transcoding |
| Developer | S1 → S2 → S3 → Developers | S3 then outbound | None | S3 must state developers access compute via gateway APIs/SDKs, no infra needed |
| Ecosystem newcomer | S1 → S2 → S9 → S10 → Community | S10 then outbound | None | S9 must be accessible to non-technical readers |

**All personas unblocked. No missing sections.**

---

# IA — All section structures found

## Canonical 10-section structure (3-run synthesis)

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Role router: which path is mine? | "I've heard of Livepeer — which role applies to me?" | J1 | `orient` | `navigation` | No knowledge of Livepeer's role structure | Identified participation path; named next tab | `discover` |
| S2 — What Livepeer is | "What does this network actually do — video, AI, or both?" | J1 | `explain` | `concept` | Routed but no mental model | Can describe what Livepeer does in one sentence; confirmed active/deployed | `discover` |
| S3 — How the network works | "How does work move from request to result?" | J2, J4 | `explain` | `concept` | Knows purpose, not job flow | Can trace job end-to-end; explain each actor in one sentence | `discover` |
| S4 — The two compute types | "Video vs AI — which matters for my path?" | J2, J4 | `explain` | `concept` | Understands flow, not workload types | Decided which compute type(s) relevant | `discover` |
| S5 — The economic model | "How does money move through this network?" | J3, J4 | `explain` | `concept` | Understands roles/flow, not fees/rewards | Can describe ETH fees + LPT inflation; which actors receive each | `discover` |
| S6 — LPT: the protocol token | "What is LPT for — speculative or functional?" | J3, J7 | `learn` | `concept` | Seen LPT mentioned, unclear purpose | Can state 3 functions (staking, delegation, governance); what drives issuance | `discover` |
| S7 — Staking and delegation | "What does bonding LPT involve?" | J3, J7 | `explain` | `concept` | Knows LPT functions, not mechanics | Can explain bonding, unbonding period, slashing exposure **[flag: may split]** | `discover` |
| S8 — Governance | "Who controls this protocol — can I have a say?" | J5 | `explain` | `concept` | Understands economics, not governance | Can describe stake-weighted voting, LIP lifecycle, delegator vote-override | `discover` |
| S9 — The organisation: Foundation, Treasury, SPEs | "Is there a company behind this?" | J6 | `explain` | `concept` | Seen governance, not entities | Can characterise org model; assess longevity risk | `discover` |
| S10 — Ecosystem and current state | "What's been built? Is it actively developed?" | J1, J6 | `evaluate` | `concept` | Has conceptual model, no real-world evidence | Reviewed current products + upgrade history; formed credibility judgment | `discover` |

## ChatGPT v4 run — 10 sections

| # | Section | pageType | purpose |
|---|---|---|---|
| S1 | Find Your Place | navigation | orient |
| S2 | What Livepeer Actually Is For | concept | explain |
| S3 | Who Does What | concept | explain |
| S4 | Job Flow | concept | explain |
| S5 | Token Purpose | concept | learn |
| S6 | Incentives/Payouts | concept | explain |
| S7 | Governance | concept | explain |
| S8 | What Changed Over Time | concept | explain |
| S9 | What Must Be Verified Live | concept | evaluate |
| S10 | Where To Go Next | navigation | orient |

## Claude Web v4 run — 8 sections

| # | Section | pageType | purpose |
|---|---|---|---|
| S1 | What is Livepeer | concept | explain |
| S2 | Which Role Is Mine | navigation | orient |
| S3 | How Network Works | concept | explain |
| S4 | Payment Model | concept | explain |
| S5 | LPT/Token Economy | concept | learn |
| S6 | Rewards/Earnings | concept | explain |
| S7 | Governance | concept | explain |
| S8 | Network Upgrades & History | concept | explain |

## Agent v5 run — 11 sections

Same as canonical 10 + S11 Glossary (reference page).

## Current live v2/about/ structure

```
v2/about/
├── portal.mdx                          ✅ exists — deprecated pageType/audience
├── livepeer-overview.mdx               ⚠️ needs AI pivot section
├── core-concepts.mdx                   ⚠️ partial stubs
├── mental-model.mdx                    ✅ high quality (10-layer OSI analogy)
├── faq-about.mdx                       ✅ exists (actually IA blueprint)
├── livepeer-protocol/
│   ├── overview.mdx                    ✅ high draft quality
│   ├── core-mechanisms.mdx             ✅ high draft quality
│   ├── livepeer-token.mdx              ⚠️ medium — #TODO/#MOVE markers
│   ├── governance-model.mdx            ⚠️ good but scope creep (includes participation)
│   ├── treasury.mdx                    ✅ high — scope boundary note needed
│   ├── economics.mdx                   ⚠️ needs LIP-107/LIP-100 review
│   └── technical-architecture.mdx      ⚠️ partial — contract diagram solid, major stubs
├── livepeer-network/
│   ├── overview.mdx                    🔴 very low draft quality (mostly stub)
│   ├── actors.mdx                      ✅ medium-high
│   ├── job-lifecycle.mdx               ✅ high quality
│   ├── marketplace.mdx                 ✅ high quality
│   ├── technical-architecture.mdx      ✅ high quality (full network stack)
│   ├── interfaces.mdx                  ✅ high quality
│   ├── demand-side.mdx                 🔴 STUB (538 bytes)
│   ├── supply-side.mdx                 🔴 STUB (517 bytes)
│   ├── fee-flow.mdx                    🔴 STUB (498 bytes) — CRITICAL GAP
│   └── scaling.mdx                     🔴 STUB (535 bytes)
└── resources/
    ├── livepeer-whitepaper.mdx         ✅ exists
    ├── livepeer-glossary.mdx           ✅ exists (65 terms)
    ├── blockchain-contracts.mdx        ⚠️ resolve duplicate with protocol/
    ├── livepeer-contract-addresses.mdx ✅ exists
    ├── gateways-vs-orchestrators.mdx   ✅ exists
    ├── technical-roadmap.mdx           🔴 STUB (793 bytes)
    ├── network-metrics.mdx             🔴 MISSING — new page needed
    └── compendium/glossary.mdx         ✅ exists
```

---

# RESEARCH GAP — Missing Personas

**The Phase 1 audience design work treats About as a pure routing/substrate layer.** It defines everyone as "arriving audience who gets oriented then routed elsewhere." But three personas from the site-wide Design Specification (docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01) are NOT routing cases — they are people the About tab genuinely serves as a depth layer:

### 1. The Founder (AI startup / platform founder)

- **Source**: Design Spec defines "AI startup founder" performing "Consume + Provide workloads + Route traffic." Self-identifies as "founder", "builder", "AI engineer"
- **Why About serves them**: A founder evaluating Livepeer for their product needs the full landscape picture — protocol, economics, governance, org structure — to make a build-vs-buy decision. They are not just passing through to Solutions. About IS their evaluation surface
- **What they need FROM About**: Complete mental model of what Livepeer is, how it works at a system level, economic sustainability signals, governance risk assessment, competitive positioning context
- **Gap**: The canonical audience design collapses this persona into "Product evaluator" who routes to Solutions/Developers. But a founder needs MORE depth than a product evaluator — they need governance, economics, org structure, roadmap credibility. They may read 80% of the About tab before deciding

### 2. The OSS / Protocol Contributor

- **Source**: Design Spec persona #6 "Protocol Developer / Core Contributor" — "extending the Livepeer protocol itself — smart contracts, go-livepeer core, LIPs, protocol-level tooling." Self-identifies as "protocol developer", "blockchain developer", "contributor." Activation: first merged PR
- **Why About serves them**: Protocol contributors need deep architectural understanding FROM About before they can begin in the Developers tab. The protocol architecture, contract structure, governance model, and upgrade history content in About is prerequisite reading for anyone touching core protocol
- **What they need FROM About**: Protocol architecture depth, contract relationships, governance mechanics (how LIPs work, how on-chain voting executes), upgrade history, technical architecture of both protocol and network layers
- **Gap**: The canonical audience design doesn't mention this persona at all. The Design Spec routes them to "Developers + About" but the About tab's Phase 1 work never picked them up

### 3. The Web3 R&D Researcher

- **Source**: Design Spec persona #8 "Researcher" — "evaluating Livepeer's architecture, performance, or economics for papers, benchmarks, comparative analysis, or potential collaboration. Not building yet — studying." The Foundation repeatedly targets "founders, developers, and researchers" as audiences
- **Why About serves them**: This persona may NEVER leave About. Their entire job is understanding the protocol — architecture depth, economic model analysis, governance mechanics, performance characteristics. About is their destination, not a waypoint
- **What they need FROM About**: Whitepaper, technical architecture (both protocol and network), economic model with real numbers (inflation rates, fee revenue, bonding ratios), governance model depth, upgrade history, comparative positioning
- **Gap**: The canonical audience design partially captures this as "Token and network researcher" but frames it as someone evaluating LPT for staking/investment who then routes to Delegators. The R&D researcher is different — they want protocol depth for academic/professional analysis, not personal participation. They need About to be comprehensive and technically honest, not just orientation-level

### What this means

The About tab's content needs to work at TWO levels:
1. **Orientation level** — for the routing personas (all 5 canonical arriving types) who need enough to choose a path
2. **Depth level** — for founders, protocol contributors, and researchers who need About to be substantive and complete in its own right

The current canonical 10-section structure may be sufficient for both levels (the content within each section just needs to go deeper than orientation-level), OR it may need additional sections. This is a design decision that depends on how the About tab's content is actually written.

---

# OPEN ITEMS & BLOCKING DECISIONS

1. **BLOCKING — Audience token in frontmatter**: Options A (`all`), B (array), C (omit), D (new `substrate` token). Human decision required.
2. **NON-BLOCKING — Run count**: 3 runs (2 v4 + 1 v5). Meets minimum but v5 used different prompt.
3. **NON-BLOCKING — Broadcaster Status conflict**: glossary-about.md says `current`, deprecated-terms.md says deprecated.
4. **NON-BLOCKING — Developer/Builder token split**: Both tokens serve About; depends on OPEN ITEM 1.
5. **DESIGN FLAG — S7 may split**: Bonding mechanics + slashing exposure may warrant separate pages.
6. **CRITICAL CONTENT GAPS**: fee-flow.mdx (stub), network-metrics.mdx (missing), technical-roadmap.mdx (stub), network overview (stub), AI pivot narrative missing.