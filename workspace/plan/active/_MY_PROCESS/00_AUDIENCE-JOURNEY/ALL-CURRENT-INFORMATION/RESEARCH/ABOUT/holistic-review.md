# About Tab — Holistic First-Principles Review

> Date: 2026-04-07
> Scope: Site-level down, first principles
> Question: What MUST the About tab be, and is the current IA correct?

---

## FIRST PRINCIPLES: What is Livepeer?

Livepeer is not a product. It is not a protocol. It is a **complete living ecosystem**:

1. **Infrastructure** — protocol (on-chain coordination) + network (off-chain execution) + platforms (developer access)
2. **Economic system** — LPT token, inflation, fees, staking, delegation, marketplace dynamics
3. **Governance system** — LIPs, stake-weighted voting, treasury, SPEs, Foundation
4. **Community** — operators, delegators, builders, contributors, researchers, governance participants
5. **Product ecosystem** — Studio, Daydream, Streamplace, Embody, Frameworks, ComfyStream, NaaP
6. **Living dynamics** — AI pivot, inflation debates, fee growth, operator reliability, community sentiment

The About tab must orient a reader to ALL of this — not just the technical layers.

---

## SITE-LEVEL: What does each tab own?

| Tab | Owns | About's relationship |
|---|---|---|
| **Home** | Narrative, vision, evolution, ecosystem map, benefits, roadmap, routing | Home INTRODUCES → About EXPLAINS in depth |
| **About** | **The complete Livepeer landscape**: protocol, network, economics, governance, ecosystem structure | The REFERENCE AUTHORITY for "how Livepeer works" |
| **Solutions** | Platform products (Studio, Daydream, etc.) | About introduces platforms exist → Solutions owns the detail |
| **Developers** | Building on Livepeer (APIs, SDKs, BYOC) | About explains the developer surface → Developers owns how-to |
| **Gateways** | Running gateway infrastructure | About explains gateway role → Gateways owns operation |
| **Orchestrators** | Running GPU nodes | About explains orchestrator role → Orchestrators owns operation |
| **Delegators** | LPT staking, delegation, governance participation | About explains the model → Delegators owns the actions |
| **Community** | Engagement, contribution paths, events, forums | About explains the structure → Community owns the participation |
| **Resources** | Cross-cutting reference (changelog, glossary, docs guide) | About has its own resources/ → Resources Hub aggregates site-wide |

**The critical insight**: Home tells you WHAT Livepeer is (narrative). About tells you HOW it works (architecture). Every other tab tells you how to DO things with it (operational).

Home and About both cover "ecosystem" and "governance" but at different depths:
- **Home/about-livepeer/ecosystem.mdx** (25.7KB) — the org structure narrative (Foundation, SPEs, community)
- **About/protocol/governance-model.mdx** — HOW governance works mechanically (voting, LIPs, contracts)
- **About/protocol/treasury.mdx** — HOW the treasury works mechanically (funding, disbursement, SPEs)

This is correct — Home owns the narrative, About owns the mechanics.

---

## WHAT'S WRONG WITH THE CURRENT ABOUT IA

### Problem 1: The IA is tech-only — it ignores the ecosystem dimension

The current structure:
```
concepts/     — What Livepeer is (mental model, overview, core concepts)
protocol/     — On-chain mechanics (staking, LPT, economics, governance, treasury, contracts)
network/      — Off-chain execution (actors, job lifecycle, marketplace, architecture, interfaces)
resources/    — Lookup (FAQ, glossary, whitepaper, contracts, metrics, roadmap)
```

This maps to the TECHNICAL architecture (protocol + network). But Livepeer as an ecosystem also includes:
- **Product/platform layer** — What's built on this? How do people use it? (Studio, Daydream, etc.)
- **Ecosystem dynamics** — How is the AI pivot changing things? What's growing? What's struggling?
- **Participation pathways** — How do different people engage? Not just actors (roles) but actual human entry points

The About tab currently has NO section that answers: "What does the Livepeer ecosystem look like TODAY?" or "What products and platforms exist?" or "How is the network being used in practice?"

Home/ecosystem.mdx covers the org structure. But About has no page that bridges from "here's how the protocol and network work" to "here's what people are actually building and doing with it."

### Problem 2: Protocol and Network sections are too symmetrical

Both sections follow the same pattern: overview → mechanisms/actors → technical details. But they serve different reader needs:

- **Protocol** is about WHY (incentive design, security model, governance). Readers here are evaluating trust, sustainability, and governance risk.
- **Network** is about HOW (execution, routing, jobs, marketplace). Readers here are evaluating capability, performance, and integration.

The current IA treats them as parallel encyclopaedia sections. But from a persona journey perspective:
- A **founder** reads network/marketplace then protocol/economics — they're evaluating viability
- A **researcher** reads protocol/ deeply, then network/technical-architecture — they're studying design
- A **GPU operator** reads network/actors then network/marketplace — they're evaluating earnings
- A **governance newcomer** reads protocol/governance then protocol/treasury — they're evaluating participation

The sections need to be designed for these TRAVERSALS, not as standalone encyclopaedia entries.

### Problem 3: No "ecosystem and current state" section

The design.md journey defined Step 17 as understanding the current state — but there's no page or section for this. Where does a reader learn:
- What products exist on Livepeer right now?
- How much compute is being processed?
- What's the AI vs video split?
- What governance proposals are active?
- What's the roadmap?

Currently this is scattered:
- `resources/reference/technical-roadmap.mdx` — Foundation roadmap (just placed)
- `resources/reference/network-metrics.mdx` — where to find live data
- Home/ecosystem.mdx — org structure (in a different tab)
- Community/trending-topics.mdx — what's happening (in a different tab)

A reader finishing the protocol/ section has no bridge to "and here's what's happening with all of this right now."

### Problem 4: The "Guides" nav group is empty

docs.json has `"group": "Guides", "pages": []` — an empty section visible in the navigation. This signals incompleteness to every reader. Either populate it or remove it.

For About, guides/ could serve secondary personas:
- "Evaluating Livepeer for your product" (founder journey)
- "Contributing to the protocol" (OSS contributor journey)  
- "Understanding the economic model" (analyst deep-dive)

Currently these are in resources/knowledge-hub/ but they could also be guides/. The distinction: knowledge-hub is curated links and external resources; guides would be authored Livepeer-specific content for secondary journeys.

### Problem 5: docs.json references 4 deleted pages

The nav still has fee-flow, demand-side, supply-side, scaling — all moved to x-deprecated. These will 404 or show empty pages. Must be cleaned from docs.json.

### Problem 6: resources/reference/ pages not in navigation

`livepeer-contract-addresses.mdx`, `network-metrics.mdx`, `technical-roadmap.mdx` are not listed in docs.json under any nav group. They exist on disk but are unreachable through navigation.

---

## RECOMMENDED IA — FIRST PRINCIPLES

Starting from: "What must a reader understand about the Livepeer ECOSYSTEM?"

```
v2/about/
├── portal.mdx                     Entry — hero + section routing
├── navigator.mdx                  "I want to understand..." path selection
├── index.mdx                      Generated TOC
│
├── concepts/                      "WHAT IS LIVEPEER?" — The complete picture
│   ├── livepeer-overview.mdx      What Livepeer is — the ecosystem in 2 sentences
│   ├── mental-model.mdx           The 10-layer stack — tech + governance + economics + community
│   └── core-concepts.mdx          Core building blocks — protocol/network/platform/governance/economics
│
├── network/                       "HOW THE EXECUTION LAYER WORKS" — Compute, routing, marketplace
│   ├── overview.mdx               Network = execution layer, distinct from protocol
│   ├── actors.mdx                 Who does the work — all roles
│   ├── livepeer-actors/           Per-actor depth
│   │   ├── orchestrators.mdx
│   │   ├── gateways.mdx
│   │   ├── delegators.mdx
│   │   └── end-users.mdx
│   ├── job-lifecycle.mdx          How a job flows from request to result
│   ├── marketplace.mdx            How supply meets demand — the compute marketplace
│   ├── technical-architecture.mdx Full technical stack diagram
│   └── interfaces.mdx             How builders access the network (APIs, SDKs, CLI)
│
├── protocol/                      "HOW IT'S SECURED, INCENTIVISED, AND GOVERNED"
│   ├── overview.mdx               Protocol scope — what it does and does NOT do
│   ├── core-mechanisms.mdx        Staking, delegation, rewards, inflation, slashing, rounds
│   ├── livepeer-token.mdx         LPT — 3 functions, issuance, what drives value
│   ├── economics.mdx              ETH fees + LPT inflation — the complete economic picture
│   ├── governance-model.mdx       Voting, LIPs, vote detachment — how decisions happen
│   ├── treasury.mdx               Treasury, SPEs, Foundation, org structure, funding
│   ├── blockchain-contracts.mdx   Contract architecture and addresses
│   ├── technical-architecture.mdx Protocol contract architecture (depth)
│   └── design-philosophy.mdx      Why it's designed this way — trade-offs
│
├── ecosystem/                     **NEW** — "WHAT'S HAPPENING NOW" — The living system
│   ├── current-state.mdx          Network today: AI vs video, fee growth, operator count,
│   │                              active proposals, current phase of roadmap
│   ├── products-and-platforms.mdx What's built on Livepeer: Studio, Daydream, Streamplace,
│   │                              Embody, ComfyStream, NaaP — what each does, who uses it
│   └── participation-paths.mdx    How to get involved: build, operate, delegate, govern,
│   │                              contribute — with routing to the correct tab per path
│   └── [future: case-studies.mdx] Real deployments, real usage, real numbers
│
├── guides/                        SECONDARY PERSONA JOURNEYS (currently empty — populate)
│   ├── evaluating-livepeer.mdx    **MOVE** from resources/knowledge-hub/ — founder evaluation guide
│   ├── contributor-orientation.mdx **MOVE** from resources/knowledge-hub/ — OSS contributor entry
│   └── [future pages]             Economic model deep-dive, governance participation guide
│
└── resources/                     ON-DEMAND LOOKUP
    ├── faq.mdx                    Most-asked questions
    ├── glossary.mdx               Term definitions
    ├── knowledge-hub/
    │   ├── gateways-vs-orchestrators.mdx   Role comparison
    │   └── livepeer-whitepaper.mdx         Primary source
    ├── compendium/                **NEW** — structured data lookups
    │   └── livepeer-contract-addresses.mdx **MOVE** from reference/
    └── reference/                 Technical reference
        ├── network-metrics.mdx    Where to find live data
        └── technical-roadmap.mdx  Foundation roadmap
```

### What's new vs current:

| Change | What | Why |
|---|---|---|
| **NEW section: ecosystem/** | current-state, products-and-platforms, participation-paths | Fills the gap between "how it works" (protocol/network) and "what's happening" (living ecosystem). No page currently answers "what products exist?" or "what does the network look like today?" |
| **POPULATE guides/** | Move evaluating-livepeer + contributor-orientation from knowledge-hub | These are authored guides for secondary personas, not curated external links. They belong in guides/, not knowledge-hub/ |
| **ADD to resources/compendium/** | Move contract-addresses from reference/ | Contract addresses are structured data lookups (like exchanges, RPCs), not strict technical specs. Fits compendium pattern. |
| **CLEAN docs.json** | Remove 4 deleted stubs, add reference/ pages to nav, add ecosystem/ group | Fix navigation to match disk |

### Why ecosystem/ matters:

Right now a founder finishes reading protocol/treasury.mdx and has NO next step that shows "this is a real, active, growing ecosystem." They have to LEAVE About (go to Home/ecosystem.mdx or Solutions/) to see evidence of real-world use. That's a journey failure.

ecosystem/current-state.mdx answers: "What does this network look like TODAY?" — with links to Explorer, Dune, current governance proposals. Not hard-coded numbers (governance-controlled), but pointers to live data.

ecosystem/products-and-platforms.mdx answers: "What's actually been built on this?" — Studio, Daydream, Streamplace, etc. Not duplicating Solutions/ — just introducing that these exist, what each does, and routing to Solutions/ for depth.

ecosystem/participation-paths.mdx answers: "How do I get involved?" — build (→ Developers), operate (→ Orchestrators/Gateways), delegate (→ Delegators), govern (→ protocol/governance + Delegators), contribute (→ guides/contributor-orientation). This is the ROUTING page that completes the About journey.

---

## docs.json FIXES NEEDED

```json
// REMOVE from "Livepeer Network" group:
"v2/about/network/fee-flow",        // deleted (x-deprecated)
"v2/about/network/demand-side",     // deleted (x-deprecated)
"v2/about/network/supply-side",     // deleted (x-deprecated)
"v2/about/network/scaling",         // deleted (x-deprecated)

// ADD new group after protocol/:
{
  "group": "Ecosystem",
  "icon": "globe",
  "pages": [
    "v2/about/ecosystem/current-state",
    "v2/about/ecosystem/products-and-platforms",
    "v2/about/ecosystem/participation-paths"
  ]
}

// POPULATE "Guides" group (currently empty []):
{
  "group": "Guides",
  "icon": "chart-line",
  "pages": [
    "v2/about/guides/evaluating-livepeer",
    "v2/about/guides/contributor-orientation"
  ]
}

// ADD "Reference" sub-group under Resources:
{
  "group": "Reference",
  "pages": [
    "v2/about/resources/reference/network-metrics",
    "v2/about/resources/reference/technical-roadmap",
    "v2/about/resources/compendium/livepeer-contract-addresses"
  ]
}
```

---

## ECONOMICS VERACITY — TIGHTENED CLAUDE WEB PROMPT

For the economics.mdx rewrite with veracity, Claude Web should use its connectors:

```
You have access to these tools — USE THEM for veracity:

1. **Blockscout MCP** — query Livepeer contract state on Arbitrum (chain_id: 42161)
   - get_contract_abi for BondingManager, Minter, TicketBroker, LivepeerGovernor
   - read_contract to get current parameter values (targetBondingRate, inflationChange, etc.)
   - get_token_transfers_by_address for treasury flow

2. **GitHub MCP** — verify against source code and governance
   - get_file_contents for go-livepeer release notes
   - list_releases for latest go-livepeer version
   - search_code for parameter names in protocol contracts
   - issue_read for LIP status (livepeer/LIPs repo)

3. **Notion MCP** — check Foundation planning docs
   - notion-search for SPE proposals, roadmap updates

For each governance-controlled parameter:
- DO NOT hard-code the value
- USE Blockscout read_contract to get the CURRENT value
- State it as: "Currently X (governance-controlled, verify at explorer.livepeer.org)"
- Include the date you verified it

For each LIP reference:
- USE GitHub to check the LIP's current status (Draft/Last Call/Final/Withdrawn)
- Do not claim a LIP has "passed" unless GitHub shows status: Final

For fee revenue figures:
- These change quarterly — state the source and date
- Link to Dune dashboard or Messari report, not hard-coded numbers
```

---

## SUMMARY: WHAT ABOUT NEEDS TO BE

About is the **landscape map** for the entire Livepeer ecosystem. A reader who finishes About should be able to:

1. **Describe what Livepeer is** — decentralised AI + video compute ecosystem (not just a protocol)
2. **Draw the architecture** — protocol (security) + network (execution) + platform (access)
3. **Name the actors** — orchestrators, gateways, delegators, builders, end users
4. **Trace a job** — app → gateway → orchestrator → result → payment
5. **Explain the economics** — ETH fees (usage) + LPT inflation (protocol), who earns each
6. **Describe governance** — stake-weighted voting, LIPs, treasury, SPEs, Foundation
7. **Name what's been built** — Studio, Daydream, Streamplace, and the developer surface
8. **Know the current state** — AI pivot, fee growth, governance activity, roadmap phase
9. **Choose their path** — know which tab to go to next based on how they want to participate

The current IA covers 1-6 well. It is missing 7-9. The ecosystem/ section fills that gap.
