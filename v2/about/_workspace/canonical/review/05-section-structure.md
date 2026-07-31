## Section Structure: The Complete About IA with Purpose, PageType, Entry/Exit States

---

## The 4 Main Sections (+ Resources as meta-section)

About follows the canonical tab archetype with a protocol/network bias (these are the "build" equivalent for a knowledge tab):
- **concepts/** — foundations (what Livepeer is, the 10-layer stack, building blocks)
- **protocol/** — how the protocol works (security, incentives, governance, economics)
- **network/** — how the execution layer works (actors, job flow, marketplace, architecture)
- **guides/** — secondary journeys and evaluation frameworks (currently sparse, needs population)
- **resources/** — on-demand lookup (glossary, whitepaper, addresses, metrics)

---

## Section 1: CONCEPTS (Foundation Layer)

**Purpose:** Answer "What is Livepeer in its complete ecosystem form?"

**Entry state:** Reader arrives with surface awareness (heard the name) but no mental model

**Exit state:** Reader can describe the 10-layer stack, name the three infrastructure zones, and place any concept within the system

| Page | Current title | PageType | Size | Status | Purpose | When to read |
|---|---|---|---|---|---|---|
| livepeer-overview.mdx | The Livepeer Ecosystem | concept/explain | 10.7KB | ⚠️ Needs AI pivot front-load | The ecosystem in depth: mission, AI pivot, dual-mode network, who's involved | First — sets the context |
| mental-model.mdx | Livepeer Mental Model | concept/explain | 21KB | ✅ GOLD — 10-layer OSI | 10-layer stack with accordions per layer, 3 infrastructure zones, all layers explained | Second — builds the complete model |
| core-concepts.mdx | Core Concepts | concept/explain | 9.7KB | ⚠️ Partial, needs rewrite | Protocol vs network vs platform, three compute types, four actor types, two economic streams | Third — names the building blocks |

**Section entry card trigger:** "I want to understand what Livepeer is"

**After concepts/, reader can:**
- Describe Livepeer in 1-2 sentences
- Draw the 10-layer stack
- Name the three infrastructure zones
- List the actors
- Explain the two economic streams

**Next:** Protocol or Network (depending on interest)

---

## Section 2: NETWORK (Execution Layer — Part 1)

**Purpose:** Answer "How does the execution layer work?"

**Entry state:** Reader understands what Livepeer is (from concepts/) but not how work moves through it

**Exit state:** Reader can trace a job from request to result and explain each actor's role and incentive

| Page | Current title | PageType | Size | Status | Purpose | When to read |
|---|---|---|---|---|---|---|
| overview.mdx | Network Layer | concept/explain | 6.8KB | 🔴 Not reader-ready | What is the network, distinct from protocol | First in network/ — sets boundaries |
| actors.mdx | Livepeer Actors | concept/explain | 5KB | ⚠️ Needs comprehensive flat page | Who does the work: gateways, orchestrators, delegators, builders, end users. One sentence per actor. | Second — names each participant |
| job-lifecycle.mdx | The Job Lifecycle | concept/explain | 10.4KB | ✅ GOLD STANDARD | State machine: request → routing → execution → result → payment → settlement. Video vs AI paths. | Third — traces how work flows |
| marketplace.mdx | The Marketplace | concept/explain | 6.5KB | ✅ HIGH QUALITY | Supply/demand mechanics: orchestrator publishing, gateway discovery, pricing, settlement | Fourth — how supply meets demand |
| technical-architecture.mdx | Network Architecture | reference/specification | 6.2KB | ✅ HIGH QUALITY | Full network stack diagram: nodes, APIs, protocols, contracts | Fifth — the complete picture |
| interfaces.mdx | Developer Interfaces | reference/reference | 5.9KB | ✅ HIGH QUALITY | REST, gRPC, GraphQL, SDKs, CLI. How builders access compute. → Routes to Developers | Sixth — integration points |

**Section entry card trigger:** "How does work move through the network?"

**After network/, reader can:**
- Trace a job end-to-end: request → gateway → orchestrator → execution → result → payment
- Name each actor and explain their role in 1 sentence
- Explain how orchestrators publish capacity and price
- Explain how gateways discover and select orchestrators
- Understand probabilistic micropayments and settlement

**Next:** Protocol (for security/incentives) or direct to role tab (Developers, Orchestrators, Gateways)

---

## Section 3: PROTOCOL (Incentive & Governance Layer — Part 2)

**Purpose:** Answer "How is the system secured, incentivised, and governed?"

**Entry state:** Reader understands network execution but not on-chain mechanisms

**Exit state:** Reader can explain staking, rewards, inflation, governance, and treasury funding

| Page | Current title | PageType | Size | Status | Purpose | When to read |
|---|---|---|---|---|---|---|
| overview.mdx | Protocol Layer | concept/explain | 14.5KB | ✅ Good | What the protocol does: security, incentives, scope and boundaries | First in protocol/ — sets scope |
| core-mechanisms.mdx | Core Mechanisms | concept/explain | 25KB | ✅ HIGH QUALITY (engineer-facing) | Staking, delegation, rewards, inflation, slashing, rounds. **Video vs AI incentive separation is here.** | Second — the mechanisms |
| livepeer-token.mdx | The LPT Token | concept/explain | 13.3KB | ⚠️ Has #TODO markers | Three functions: staking, governance, delegation. Issuance model. What drives value. | Third — token economics |
| economics.mdx | Economics | concept/explain | 10.4KB | ✅ HIGH QUALITY (contract-level) | ETH fees + LPT inflation. Complete money flow: fees, rewards, payments, withdrawals. **Needs LIP-107/100 review.** | Fourth — money flows |
| governance-model.mdx | Governance Model | concept/explain | 15.8KB | ✅ HIGH QUALITY | Voting, LIPs, quorum, vote delegation, vote detachment. Real LIP numbers. **Has scope creep (participation guidance).** | Fifth — who controls it |
| treasury.mdx | Treasury & Org | concept/explain | 16.7KB | ✅ Good | Treasury funding, SPE mechanism, Foundation role, sustainability model. **Needs scope boundary note.** | Sixth — development funding |
| blockchain-contracts.mdx | Smart Contracts | reference/reference | 59KB | ✅ GOOD | All contract addresses, contract architecture diagram, proxy pattern, function scopes | Seventh — verification layer |
| technical-architecture.mdx | Protocol Architecture | reference/specification | 9.9KB | ⚠️ Partial — diagram good, stubs | Contract architecture detail, state relationships, upgrade patterns | Eighth (optional deep) — technical detail |
| design-philosophy.mdx | Design Philosophy | concept/explain | 11.4KB | 🔴 MISSING | Why certain design choices: probabilistic payments not per-segment, dynamic inflation not fixed, protocol/network separation, Arbitrum choice, trade-offs | Optional (researchers/contributors) — the why |

**Section entry card trigger:** "How is the system secured and incentivised?"

**After protocol/, reader can:**
- Describe staking, delegation, reward distribution, slashing
- Explain both ETH fee flow and LPT inflation flow
- Understand governance: voting, LIPs, quorum, execution
- Assess financial incentives for each actor type
- Evaluate long-term sustainability

**Next:** Guides (evaluation framework, participation paths) or direct to role tab (LP Token, Orchestrators, Gateways, Developers OSS)

---

## Section 4: GUIDES (Secondary Journeys & Evaluation)

**Purpose:** Answer "How do I decide what to do with this information?" and "What should I evaluate?"

**Entry state:** Reader has complete conceptual/protocol/network understanding

**Exit state:** Reader has made a decision (build, stake, operate, contribute) or is ready for a specific role tab

| Page | Current title | PageType | Size | Status | Purpose | When to read |
|---|---|---|---|---|---|---|
| evaluating-livepeer.mdx | Evaluating Livepeer | guide/evaluate | TBD | 🔴 MISSING — HIGH PRIORITY | Structured evaluation framework: questions to ask for each decision path (build, stake, operate, contribute). Use cases for Livepeer. Competitive context. | For founders, investors, analysts |
| contributor-orientation.mdx | How to Contribute | guide/orient | TBD | 🔴 MISSING | OSS contributor path: where to start, what's architecture, how to propose changes, contribution types (protocol, ai-worker, SDK, etc.) | For OSS contributors |
| ecosystem-overview.mdx | What's Been Built | guide/explain | TBD | 🔴 MISSING | Products on Livepeer: Daydream, Streamplace, Embody, Frameworks, Studio. Use cases. Activity level. → Cross-links to Solutions tab | For everyone wanting proof |
| current-state.mdx | Network Today | guide/evaluate | TBD | 🔴 MISSING | Network metrics and current state: active orchestrators, staked LPT, fee volume, AI compute volume, recent governance activity. → Links to live dashboards | For due diligence, credibility |
| participation-paths.mdx | How to Participate | guide/orient | TBD | 🔴 MISSING | Five paths: build (Developers), operate (Orchestrators), stake (LP Token), govern (Community), contribute (Developers OSS). Clear routing. | For newcomers |
| gateways-vs-orchestrators.mdx | Orchestrator vs Gateway | guide/choose | 2.7KB | ✅ Exists (thin) | Decision matrix: am I a gateway operator or orchestrator? Role comparison. | For infrastructure operators |

**Section entry card trigger:** "What should I do with this knowledge?"

**After guides/, reader can:**
- Decide whether to build, stake, operate, contribute, or just understand
- Find the specific role tab that matches their decision
- Understand what has been built on Livepeer
- Assess the network's current viability

**Next:** Role tabs (Developers, Orchestrators, LP Token, Gateways, Community) with confidence

---

## Section 5: RESOURCES (On-Demand Lookup & Primary Sources)

**Purpose:** Answer "Where do I find the specific thing I need?" and "Where's the primary source?"

**Entry state:** Reader may come here at any point with a specific need

**Exit state:** Reader has the specific fact, definition, reference, or primary source they need

| Location | Current title | PageType | Size | Status | Purpose |
|---|---|---|---|---|---|
| faq.mdx | FAQ | reference/compendium | 2.9KB | ✅ Exists but thin | Most common questions about About tab content. Should expand based on Discord/forum feedback. |
| glossary.mdx | Glossary | reference/compendium | 51KB | ✅ GOLD | 65+ terms with definitions locked (see 06-terminology.md). Full and accurate. |
| knowledge-hub/ | Knowledge Hub | — | — | 🔴 MOSTLY MISSING | Curated external resources and authored guides. Currently stubs. |
| knowledge-hub/whitepaper.mdx | Livepeer Whitepaper | resource/link | 4KB | ✅ Exists | Link to primary whitepaper. Could embed summary. |
| compendium/ | Compendium | — | — | ✅ Exists | Structured data lookups. |
| compendium/contract-addresses.mdx | Contract Addresses | reference/reference | 2.1KB | ✅ Good | All contract addresses with chain, deployment version, governance status. |
| reference/network-metrics.mdx | Network Metrics | reference/specification | 1.6KB | 🔴 MISSING — HIGH VALUE | Explanation of what metrics exist (active orchestrators, staked LPT, inflation rate, fees, etc.) and where to find them live. Links to Dune, Messari, Explorer. |
| reference/technical-roadmap.mdx | Technical Roadmap | reference/reference | 8KB | 🔴 STUB — needs content | Foundation roadmap: phases, timelines, what's planned. Should link to canonical source. |

**Always accessible:** Reader returns here throughout their journey and after routing to other tabs for verification/clarification.

---

## PageType Distribution

| PageType | Count | Purpose |
|---|---|---|
| **concept/explain** | ~18 | Explain WHAT and HOW: overview, mental model, core concepts, mechanisms, economics, governance, actors, job flow |
| **reference/reference** | ~5 | Primary source or canonical reference: whitepaper, contract architecture, design philosophy, roadmap |
| **reference/specification** | ~3 | Technical specification: network architecture, interfaces, protocol architecture |
| **reference/compendium** | ~4 | Lookup: glossary, FAQ, contract addresses, network metrics |
| **guide/evaluate** | ~3 | Decision support: evaluating Livepeer, current network state, participation paths |
| **guide/orient** | ~2 | Navigation: contributor orientation, how to participate |
| **guide/explain** | ~1 | Context: ecosystem overview |
| **guide/choose** | ~1 | Choice matrix: orchestrator vs gateway |

---

## Entry/Exit States (Complete IA Map)

```
┌─────────────────────────────────────────────────────────────────┐
│ ARRIVES AT ABOUT PORTAL (unoriented, has surface knowledge)      │
└──────────────────────────┬──────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        v                  v                  v
    CONCEPTS/          PROTOCOL/          NETWORK/
  "What is it?"     "How is it run?"    "How does it work?"
  [Entry: vague]    [Entry: unknown]    [Entry: unknown]
        │                  │                  │
   [Reads: 3 pages]   [Reads: 9 pages]   [Reads: 6 pages]
        │                  │                  │
   [Exit: mental        [Exit: economic   [Exit: understands
    model locked,       & governance      job flow, actors,
    can describe        aligned]          marketplace]
    to colleague]            │                  │
        │                    │                  │
        └────────────────────┼──────────────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            v                v                v
         GUIDES/         RESOURCES/      DIRECT TO ROLE
       [Decision]        [Lookup]        [Confidence]
       [Entry: has            │
        complete               │
        model, needs        [Any point
        routing]            in journey]
            │                  │
            v                  v
    ┌─────────────────────────────────┐
    │ ROUTES TO ROLE TAB              │
    │ Developers / Orchestrators /    │
    │ Gateways / LP Token /           │
    │ Community                       │
    └─────────────────────────────────┘
```

---

## Verdict

**APPROVE WITH AMENDMENTS** — The section structure is sound: concepts → network → protocol → guides → resources. The entry/exit states are clear. The routing is unambiguous.

**Amendments:**
1. Rewrite `network/overview.mdx` — currently implementation notes, not reader-ready
2. Populate `guides/` section (currently 1 thin page, needs 5 new pages)
3. Create `resources/network-metrics.mdx` (currently missing, high value)
4. Create `protocol/design-philosophy.mdx` (currently missing, serves researchers/contributors)
5. Ensure `concepts/core-concepts.mdx` is comprehensive flat page (currently partial)
6. Add explicit router (navigator.mdx or portal redesign) for secondary personas (OSS contributor, researcher)

---

## Review Questions

1. Is the entry/exit state matrix correct? Do readers actually follow this path?
2. Should guides/ come before resources/, or is the current order better?
3. Should there be an explicit navigator page (like Orchestrators has), or is the portal sufficient?
4. Which section do readers get stuck in most often? Where do they ask for help?

---