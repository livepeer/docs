# About Tab — Content Design

---

## THE TERRITORY (What About teaches)

About teaches the **Livepeer landscape** — not just the technology, but the complete living ecosystem: infrastructure, economics, governance, community, and organisational structure all working together.

Livepeer is:
- A **technical system** (protocol + network + platforms)
- An **economic system** (LPT, inflation, fees, staking, delegation)
- A **governance system** (LIPs, voting, treasury, SPEs, Foundation)
- A **community & organisational structure** (contributors, researchers, operators, delegators, builders — all coordinating)
- A **living, dynamic ecosystem** (not static documentation of a product — it evolves through governance, participation, and market forces)

### The mental model frames 3 zones of the INFRASTRUCTURE:

```
PROTOCOL (Layers 4-5): Security, incentives, governance, economics
NETWORK  (Layers 1-3): Compute, routing, execution, marketplace
PLATFORM (Layers 7-10): Products, APIs, SDKs, applications
```

But Livepeer as an ecosystem ALSO includes:

```
GOVERNANCE: LIPs, proposals, voting, vote detachment, treasury stewardship
ECONOMICS:  Inflation model, fee revenue, staking yields, delegator dynamics
COMMUNITY:  Foundation, SPEs, contributors, operators, researchers, events
ECOSYSTEM:  Products built on Livepeer, integrations, partnerships, growth
```

**About's job is to map ALL of this** — the tech AND the living system — into a coherent mental model that any arriving reader can use to orient themselves and decide how to participate.

---

## AUDIENCE (Who lands here)

Everyone at `discover` stage — but their entry points vary because Livepeer is an ecosystem with many doors:

| Entry point | Who arrives | What they're evaluating |
|---|---|---|
| **Tech evaluation** | Founders, developers, infrastructure engineers | "Is this the right compute infrastructure for my product?" |
| **Investment / staking** | Token holders, analysts, fund researchers | "Is this a credible protocol to commit capital to?" |
| **Node operation** | GPU operators, data centre operators | "Can I earn running infrastructure here?" |
| **Governance / community** | Researchers, governance participants, contributors | "How does this ecosystem work? How do I participate?" |
| **Academic / DePIN research** | Researchers, analysts, journalists | "How does this protocol compare? What's the architecture?" |
| **OSS contribution** | Protocol developers, AI/ML engineers | "How is this built? Where do I start contributing?" |

---

## PERSONAS (Who the tab serves)

### Primary: The Landscape Navigator

Technically curious reader who wants to understand the COMPLETE Livepeer picture — not just one slice. They may be evaluating as a founder, researching as an analyst, or orienting as a newcomer. What unites them: they need a mental model of the whole system before they can decide where they fit.

**What they need**: A coherent picture of how the tech, economics, governance, community, and org structure all connect. Not just "what is the protocol" but "what is this thing, who's involved, how does it work, how is it governed, and is it real."

### Secondary personas the tab genuinely serves:

| Persona | What they need FROM About | Entry point into ecosystem |
|---|---|---|
| **The Founder** | Complete landscape to make build-vs-buy: tech + economics + governance + sustainability | Tech evaluation → economics → governance → org |
| **The OSS Contributor** | Protocol architecture + governance mechanics as prerequisites for contributing | Tech deep dive → governance → contribution paths |
| **The R&D Researcher** | Deep protocol analysis, economic model, governance mechanics — may never leave About | Academic depth across all zones |
| **The Diligence Analyst** | Structured due diligence: tokenomics, governance, org structure, roadmap, risk assessment | Economics → governance → org → risk |
| **The Governance Newcomer** | How decisions get made, how to participate, what the treasury funds, what SPEs are | Governance → community → treasury → participation |

---

## PERSONA JOURNEYS THROUGH THE TERRITORY

### Journey 1: The Landscape Navigator (primary — zero to hero)

The reader enters knowing nothing. Each section builds on the last. By the end they understand the complete ecosystem and know where they fit.

```
CONCEPTS — "What is this whole thing?"
│
├─ Q: "What is Livepeer?"
│    → concepts/livepeer-overview.mdx
│    LEARNS: Decentralised AI + video compute network on Arbitrum. An ecosystem of
│            operators, builders, delegators, and governance participants.
│    EXIT: Can describe what Livepeer is to a colleague in 2 sentences
│
├─ Q: "How does it all fit together?"
│    → concepts/mental-model.mdx
│    LEARNS: 10-layer stack, 3 infra zones (protocol/network/platform),
│            PLUS the ecosystem layers (governance, economics, community, org structure).
│            "Decentralised serverless GPU fabric with a cryptoeconomic control plane"
│    EXIT: Has the complete mental model — can place any concept
│
└─ Q: "What are the core building blocks?"
     → concepts/core-concepts.mdx
     LEARNS: Protocol vs network vs platform. The actors. The two compute types.
             The economic model at a glance. The governance model at a glance.
     EXIT: Understands the system's components — ready to explore any zone

NETWORK — "How does the execution layer work?"
│
├─ Q: "What IS the network, distinct from the protocol?"
│    → network/overview.mdx
│    LEARNS: Network = execution layer. Protocol secures it. Network runs the compute.
│    EXIT: Understands the boundary
│
├─ Q: "Who does the work and what are their roles?"
│    → network/actors.mdx
│    LEARNS: Orchestrators (compute), gateways (routing), delegators (capital),
│            builders (consume), end users (experience)
│    EXIT: Can name each actor and their role
│    DEPTH: → livepeer-actors/{role}.mdx for per-actor detail
│
├─ Q: "How does a piece of work actually flow through the system?"
│    → network/job-lifecycle.mdx
│    LEARNS: App → gateway → orchestrator selection → execution → result → payment
│    EXIT: Can trace a job end-to-end
│
├─ Q: "How does supply meet demand in this marketplace?"
│    → network/marketplace.mdx
│    LEARNS: Pricing, capability matching, orchestrator selection, probabilistic micropayments
│    EXIT: Understands the market mechanics
│
├─ Q: "What does the full technical stack look like?"
│    → network/technical-architecture.mdx
│    LEARNS: Complete system diagram — nodes, APIs, protocols, contracts
│    EXIT: Can place any technical component
│
└─ Q: "How do builders access this infrastructure?"
     → network/interfaces.mdx
     LEARNS: REST, gRPC, GraphQL, SDKs, CLI — the developer surface
     EXIT: Knows integration points → ROUTES to Developers or Gateways tab

PROTOCOL — "How is the system secured, incentivised, and governed?"
│
├─ Q: "What does the protocol layer DO?"
│    → protocol/overview.mdx
│    LEARNS: On-chain coordination, security, economic alignment. Scope + boundaries.
│    EXIT: Understands protocol vs network vs platform boundaries
│
├─ Q: "What are the core mechanisms?"
│    → protocol/core-mechanisms.mdx
│    LEARNS: Staking, delegation, reward distribution, inflation model, slashing, rounds
│    EXIT: Understands each mechanism conceptually
│
├─ Q: "What is LPT and why does it exist?"
│    → protocol/livepeer-token.mdx
│    LEARNS: 3 functions (staking, delegation/rewards, governance), issuance model
│    EXIT: Understands why LPT exists and what drives its value
│
├─ Q: "How does money flow through the ecosystem?"
│    → protocol/economics.mdx
│    LEARNS: ETH fees (usage) + LPT inflation (protocol). Fee flow. Reward distribution.
│            The 89:1 inflation-to-fees reality. Sustainability trajectory.
│    EXIT: Can describe both income streams. Understands economic health.
│
├─ Q: "Who controls the protocol and how do decisions get made?"
│    → protocol/governance-model.mdx
│    LEARNS: Stake-weighted voting, LIPs, vote detachment, Governor contract.
│            Not a company — a community-governed protocol.
│    EXIT: Understands governance mechanics and how to participate
│
├─ Q: "How is development funded and what is the org structure?"
│    → protocol/treasury.mdx
│    LEARNS: On-chain treasury, SPE mechanism, Foundation role, community stewardship.
│            Not venture-funded — inflation-funded through governance.
│    EXIT: Understands the org model — can assess longevity and governance risk
│
├─ Q: "Where are the actual smart contracts?"
│    → protocol/blockchain-contracts.mdx
│    LEARNS: Contract architecture, addresses, on-chain verification
│    EXIT: Can find and inspect the protocol on Arbiscan
│
└─ Q: "Why is it designed this way?"
     → protocol/design-philosophy.mdx
     LEARNS: Design principles, trade-offs, constraints, what was chosen and why
     EXIT: Understands the WHY → ready to route to relevant role tab

RESOURCES — On-demand lookup for all personas at any point
│
├─ resources/faq.mdx                           Most-asked questions
├─ resources/glossary.mdx                      Term definitions
├─ resources/knowledge-hub/
│   ├─ contributor-orientation.mdx             OSS contributor → "how to start"
│   ├─ evaluating-livepeer.mdx                 Founder/analyst → structured evaluation guide
│   ├─ gateways-vs-orchestrators.mdx           Role disambiguation
│   └─ livepeer-whitepaper.mdx                 Primary source reference
└─ resources/reference/
    ├─ livepeer-contract-addresses.mdx         Contract data (data-driven)
    ├─ network-metrics.mdx                     Where to find live data
    └─ technical-roadmap.mdx                   Foundation roadmap
```

### Journey 2: The Founder (selective — evaluating the ecosystem)

```
concepts/ (what is it, mental model)
  → network/marketplace.mdx (how does the compute market work?)
  → protocol/economics.mdx (is the economic model sustainable?)
  → protocol/governance-model.mdx (who controls this? what's the risk?)
  → protocol/treasury.mdx (how is development funded? is it self-sustaining?)
  → resources/knowledge-hub/evaluating-livepeer.mdx (structured evaluation framework)
  → ROUTES OUT to Solutions or Developers
```

### Journey 3: The Governance Newcomer

```
concepts/core-concepts.mdx (overview of the system)
  → protocol/governance-model.mdx (how decisions are made)
  → protocol/treasury.mdx (what gets funded, how SPEs work)
  → protocol/livepeer-token.mdx (governance weight = stake)
  → resources/knowledge-hub/contributor-orientation.mdx (how to participate)
  → ROUTES OUT to Community tab or Delegators tab
```

### Journey 4: The R&D Researcher (deep — stays in About)

```
Reads concepts/ → network/ → protocol/ in full depth
Heavy use of:
  → protocol/technical-architecture.mdx (contract architecture)
  → protocol/design-philosophy.mdx (why these design choices)
  → network/technical-architecture.mdx (system architecture)
  → resources/reference/ (primary sources, metrics, contracts)
  → resources/knowledge-hub/livepeer-whitepaper.mdx
```

---

## IA

About follows the canonical tab archetype BUT with protocol/ and network/ as the
main content sections (equivalent to setup/build on operational tabs). guides/ is
the catch-all for everything else: secondary personas, ecosystem context, evaluation
frameworks, contributor paths, participation guides, and depth content that doesn't
fit protocol or network.

**Templates**: All pages use templates from `snippets/templates/`. Classification
via `snippets/templates/page-classification.md`. Section composition via
`snippets/templates/section-patterns.md`.

```
v2/about/
├── portal.mdx                      [navigation/portal]    Entry with hero + section routing
├── navigator.mdx                   [navigation/landing]   "I want to understand..." path selection
├── index.mdx                       [generated]            Auto-generated TOC
│
├── concepts/                       "WHAT IS LIVEPEER?" — The complete ecosystem picture
│   ├── livepeer-overview.mdx       [concept/explain]      What Livepeer is: the ecosystem in 2 sentences
│   ├── mental-model.mdx            [concept/explain]      The 10-layer stack: tech + governance + economics + community
│   └── core-concepts.mdx           [concept/explain]      Core building blocks: protocol/network/platform + actors + compute types
│
├── protocol/                       "HOW IT'S SECURED, INCENTIVISED, AND GOVERNED" — Main content section 1
│   ├── overview.mdx                [concept/explain]      Protocol scope: what it does and does NOT do
│   ├── core-mechanisms.mdx         [concept/explain]      Staking, delegation, rewards, inflation, slashing, rounds
│   ├── livepeer-token.mdx          [concept/explain]      LPT: 3 functions, issuance, what drives value
│   ├── economics.mdx               [concept/explain]      ETH fees + LPT inflation: the complete economic picture
│   ├── governance-model.mdx        [concept/explain]      Voting, LIPs, vote detachment: how decisions happen
│   ├── treasury.mdx                [concept/explain]      Treasury, SPEs, Foundation, org structure, funding
│   ├── blockchain-contracts.mdx    [reference/reference]  Contract architecture and addresses
│   ├── technical-architecture.mdx  [concept/explain]      Protocol contract architecture (depth)
│   └── design-philosophy.mdx       [concept/explain]      Why it's designed this way: trade-offs and principles
│
├── network/                        "HOW THE EXECUTION LAYER WORKS" — Main content section 2
│   ├── overview.mdx                [concept/explain]      Network = execution layer, distinct from protocol
│   ├── actors.mdx                  [concept/explain]      Who does the work: all roles
│   ├── livepeer-actors/            Per-actor depth
│   │   ├── orchestrators.mdx       [concept/explain]
│   │   ├── gateways.mdx            [concept/explain]
│   │   ├── delegators.mdx          [concept/explain]
│   │   └── end-users.mdx           [concept/explain]
│   ├── job-lifecycle.mdx           [concept/explain]      How a job flows from request to result
│   ├── marketplace.mdx             [concept/explain]      How supply meets demand: the compute marketplace
│   ├── technical-architecture.mdx  [concept/explain]      Full technical stack diagram
│   └── interfaces.mdx              [concept/explain]      How builders access the network (APIs, SDKs, CLI)
│
├── guides/                         "EVERYTHING ELSE" — Secondary journeys, ecosystem, evaluation, depth
│   ├── evaluating-livepeer.mdx     [guide/evaluate]       Founder/analyst: structured evaluation framework
│   ├── contributor-orientation.mdx [guide/orient]         OSS contributor: how to start contributing
│   ├── ecosystem-overview.mdx      [guide/explain]        The living ecosystem: products, platforms, community, governance dynamics
│   ├── current-state.mdx           [guide/evaluate]       Network today: AI vs video, fee growth, operator metrics, active proposals
│   ├── participation-paths.mdx     [guide/orient]         How to get involved: build, operate, delegate, govern, contribute (routes to tabs)
│   ├── gateways-vs-orchestrators.mdx [guide/choose]       Role comparison: gateway vs orchestrator decision framework
│   └── [future depth pages]        Economic deep-dive, governance participation, research orientation, etc.
│
└── resources/                      ON-DEMAND LOOKUP — All personas
    ├── faq.mdx                     [reference/compendium]  Most-asked questions
    ├── glossary.mdx                [reference/compendium]  Term definitions
    ├── knowledge-hub/
    │   └── livepeer-whitepaper.mdx  [resource]             Primary source reference
    ├── compendium/
    │   └── livepeer-contract-addresses.mdx [reference/compendium] Contract address data
    └── reference/
        ├── network-metrics.mdx      [reference/specification] Where to find live data
        └── technical-roadmap.mdx    [reference/reference]     Foundation roadmap
```

### What guides/ provides that concepts/protocol/network don't:

| concepts/ protocol/ network/ | guides/ |
|---|---|
| Explain WHAT and HOW (the system) | Explain WHAT TO DO WITH IT (the reader's situation) |
| Single linear journey through the architecture | Multiple entry points by persona and intent |
| Factual, entity-led, mechanism-focused | Decision-focused, outcome-focused, reader-situation-focused |
| "How governance works" (protocol/governance-model) | "Should I participate in governance?" (guides/participation-paths) |
| "What the marketplace is" (network/marketplace) | "Is this viable for my product?" (guides/evaluating-livepeer) |
| "What actors exist" (network/actors) | "Gateway vs orchestrator: which am I?" (guides/gateways-vs-orchestrators) |

### Key moves:

| Page | From | To | Why |
|---|---|---|---|
| evaluating-livepeer.mdx | resources/knowledge-hub/ | guides/ | This is an authored guide, not a curated external link |
| contributor-orientation.mdx | resources/knowledge-hub/ | guides/ | Same: authored guide for secondary persona |
| gateways-vs-orchestrators.mdx | resources/knowledge-hub/ | guides/ | Decision guide, not curated link |
| ecosystem-overview.mdx | NEW | guides/ | Fills the "what's built on this?" gap |
| current-state.mdx | NEW | guides/ | Fills the "what does the network look like today?" gap |
| participation-paths.mdx | NEW | guides/ | Fills the "how do I get involved?" routing gap |
| livepeer-contract-addresses.mdx | resources/reference/ | resources/compendium/ | Structured data lookup, not technical spec |

---

## DISPOSITIONS

| Page | Action | Reason |
|---|---|---|
| All concepts/ pages | KEEP (core-concepts needs REWRITE) | Journey steps 1-3 |
| network/overview, actors, job-lifecycle, marketplace, tech-arch, interfaces | KEEP | Journey steps 4-9 |
| network/livepeer-actors/*.mdx | KEEP as depth | Per-actor detail for secondary personas |
| **network/demand-side.mdx** | **DROP** | Stub. No journey step. Content = actors + marketplace |
| **network/supply-side.mdx** | **DROP** | Stub. No journey step. Content = actors + marketplace |
| **network/fee-flow.mdx** | **DROP** | Stub. No journey step. Fee flow = protocol/economics |
| **network/scaling.mdx** | **DROP** | Stub. No persona needs "scaling" at discover stage |
| All protocol/ pages | KEEP | Journey steps 10-17. Economics needs LIP review. |
| All resources/ pages | KEEP | On-demand lookup |
| livepeer-network/dep-actors.mdx | DROP | Deprecated duplicate |

**Net: DROP 4 stubs + 1 deprecated. REWRITE 1 (core-concepts). FIX 1 (job-lifecycle description). KEEP everything else.**

---

## QUESTIONS EACH PAGE MUST ANSWER

| # | Page | THE question | Reader can now... |
|---|---|---|---|
| 1 | livepeer-overview | "What does Livepeer do?" | Describe Livepeer to a colleague in 2 sentences |
| 2 | mental-model | "How does it all fit together?" | Draw the 3-zone architecture + name the ecosystem layers |
| 3 | core-concepts | "What are the building blocks?" | Name: protocol, network, platform, actors, compute types, governance |
| 4 | network/overview | "What IS the network?" | Distinguish execution (network) from security (protocol) |
| 5 | network/actors | "Who does the work?" | Name all actors and their role in one sentence |
| 6 | network/job-lifecycle | "How does a job flow?" | Trace: app → gateway → orchestrator → result → payment |
| 7 | network/marketplace | "How does supply meet demand?" | Explain pricing, selection, settlement |
| 8 | network/tech-arch | "What's the full stack?" | Place any component in the system diagram |
| 9 | network/interfaces | "How do builders access this?" | Name the integration points |
| 10 | protocol/overview | "What does the protocol DO?" | State what it secures and what it does NOT do |
| 11 | protocol/core-mechanisms | "What are the mechanisms?" | Name: staking, delegation, rewards, inflation, slashing |
| 12 | protocol/livepeer-token | "What is LPT?" | State 3 functions and what drives issuance |
| 13 | protocol/economics | "How does money flow?" | Describe ETH fees AND LPT inflation — who earns each |
| 14 | protocol/governance | "Who controls this?" | Describe voting, LIPs, vote detachment |
| 15 | protocol/treasury | "How is development funded?" | Explain treasury, SPEs, Foundation, funding model |
| 16 | protocol/contracts | "Where are the contracts?" | Find and verify on-chain |
| 17 | protocol/design-philosophy | "Why is it designed this way?" | Articulate the design trade-offs |
