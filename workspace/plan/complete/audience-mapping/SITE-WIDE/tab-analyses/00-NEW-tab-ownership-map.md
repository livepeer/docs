# Livepeer v2 docs: tab ownership map

This document defines audience ownership, persona definitions, information boundaries, and handoff points for every tab in the v2 documentation site. It is the master reference for content planning decisions — what each tab owns, what it deliberately does not own, and where it passes readers to another tab.

Based on full inventory of `docs-v2-dev` branch and live docs MCP surface audit, March 2026.

---

## How to read this map

Each tab entry answers four questions:

1. **Primary audience** — who this tab was built for; the single persona most likely to arrive and stay
2. **Secondary visitors** — who may pass through but is not the tab's main responsibility
3. **Information the tab owns** — what this tab is the authoritative, canonical home for
4. **Information the tab does NOT own** — what belongs to another tab (with handoff destination named)

---

## Home tab

**Path:** `v2/home/`

**Primary audience:** Unoriented first-time visitor. No role assumption. Could be anyone: investor, curious developer, journalist, LPT holder, potential orchestrator. Arrived from livepeer.org, a link, or search. They need to understand what Livepeer is and where to go next.

**Secondary visitors:** Returning users navigating back to the top level. Community members looking for a quick orientation link to share.

**What this tab owns:**
- The single canonical answer to "what is Livepeer?" (vision, mission, what the network does)
- The Livepeer Foundation as an entity — who they are, their mandate, their relationship to Livepeer Inc (this is the only tab that introduces the Foundation as an org)
- The ecosystem map — Daydream, Streamplace, SPEs, and other known integrations
- The network's evolution story — from video transcoding to AI-first infrastructure
- The roadmap (public-facing phases)
- The role-based routing hub — explicit "I am a ___" pathways pointing into correct tabs
- The "benefits" pitch — why Livepeer exists and what problems it solves

**What this tab does NOT own:**
- Deep protocol mechanics → About tab
- How to delegate LPT → LP Token tab
- How to run an orchestrator → Orchestrators tab
- How to run a gateway → Gateways tab
- How to build on Livepeer → Developers tab
- Governance voting processes → LP Token tab (processes.mdx) + Community tab (governance-and-foundation.mdx)
- Community channels, forums, events → Community tab

**Handoff points:**
- After answering "what is Livepeer?" → About tab (deeper protocol understanding)
- After "I want to earn by providing compute" → Orchestrators tab
- After "I want to access the network programmatically" → Gateways or Developers tab
- After "I hold or want LPT" → LP Token tab
- After "I want to be part of the community" → Community tab

---

## About tab

**Path:** `v2/about/`

**Primary audience:** Technically-curious reader who wants to understand how Livepeer works at a protocol level. Not (yet) a builder or operator. Likely: DePIN researcher, protocol analyst, investor doing diligence, developer evaluating Livepeer before committing to build, journalist writing an informed piece.

**Secondary visitors:** Orchestrators and delegators cross-referencing protocol mechanics. Developers who need architectural grounding before building.

**What this tab owns:**
- How the Livepeer protocol works: actors, roles, marketplace, job lifecycle, fee flow, scaling
- Protocol economics: inflation, bonding rate, reward and fee mechanics, treasury accumulation
- Smart contract architecture: Arbitrum contracts, Ethereum bridge, BondingManager, RoundsManager, etc.
- Governance mechanics at the protocol level (the on-chain model — how LIPs work, how votes are counted, quorum rules) — NOTE: the human process of how to participate in governance lives in LP Token tab
- Technical architecture: go-livepeer stack, orchestrator/gateway/AI worker relationships
- The whitepaper reference
- The mental model and core concepts needed to understand any other tab

**What this tab does NOT own:**
- How to run an orchestrator → Orchestrators tab
- How to delegate LPT → LP Token tab
- How to build applications → Developers tab
- Community participation → Community tab
- The Livepeer Foundation as an org → Home tab owns the introduction; Community tab owns the operational governance-and-foundation page

**Handoff points:**
- After "I understand the protocol and want to participate as a node operator" → Orchestrators tab
- After "I understand the economics and want to stake" → LP Token tab
- After "I understand the architecture and want to build" → Developers tab
- After "I want to understand governance as a participant" → LP Token > Governance section

**Current IA alignment vs canonical:**
About does not follow the standard full-stack IA (portal → quickstart → setup → guides → resources). This is correct. About is not a task-oriented tab — it is conceptual and reference only. It uses: portal → livepeer-network → livepeer-protocol → concepts → resources. That structure is appropriate for this tab's purpose.

---

## LP Token tab (Delegators)

**Path:** `v2/lpt/`

**Primary audience:** LPT holder who wants to participate in the network economically — either by delegating stake to earn rewards, or by participating in governance votes, or both. Motivation is primarily economic (yield) but the tab must also serve governance participants. This reader has LPT, is on Arbitrum, and needs to know: what does this token do, how do I use it, and how do I pick a good orchestrator.

**Secondary visitors:** Researchers and investors evaluating LPT tokenomics. Orchestrators cross-referencing delegation mechanics. Governance-active community members.

**What this tab owns:**
- What LPT is and what it does (purpose, mechanics, utility)
- LPT tokenomics: supply, inflation, emission schedule, bonding rate
- Delegation: the full journey from "I have LPT" through bridging, choosing an orchestrator, delegating, tracking rewards, managing stake, unbonding
- Reward mechanics specific to delegators: how issuance works, how fee cuts affect delegator yield, reward call timing
- Governance participation as a delegator: how to vote, how to override orchestrator votes, the treasury proposal process
- Treasury: what it is, how it accumulates, what grants have been funded, how proposals work
- Where to buy LPT: exchanges, DEXes, fiat onramps (LISAR)
- LPT and ETH usage on the network

**What this tab does NOT own:**
- The protocol-level governance model (on-chain mechanics) → About > livepeer-protocol > governance-model.mdx
- How to become an orchestrator → Orchestrators tab
- Running gateway infrastructure → Gateways tab
- Building applications → Developers tab
- The Livepeer Foundation as an entity → Home tab (introduction), Community tab (governance-and-foundation.mdx)

**Handoff points:**
- "I want to run a node, not just delegate" → Orchestrators tab
- "I want to understand the protocol I'm participating in" → About tab
- "I want to contribute beyond staking" → Community tab

**Current IA alignment vs canonical:**
LP Token follows the canonical IA partially. Missing: a proper `portal.mdx` as tab entry point (current `index.mdx` and `token-portal.mdx` do not function as a canonical portal). Missing: a quickstart. The `delegation/` section maps to position 4 (setup-like) but is missing several pages currently in `TO-ADD/`. The `resources/` section exists but `compendium/` is empty. `governance/` and `treasury/` are custom sections that sit outside the canonical template — correctly so for this tab.

---

## Developers tab

**Path:** `v2/developers/`

**Primary audience:** Software developer who wants to build an application using Livepeer's compute capacity — either AI inference (the growth segment) or video transcoding/streaming. They have a software background, are comfortable with APIs and SDKs, and their first question is: "how do I make my first call?" Their second question is: "what can I actually build here?"

**Secondary visitors:** Protocol contributors (OSS), researchers evaluating the stack, hackathon participants. Orchestrator operators who want to understand the developer-facing surface of the network.

**What this tab owns:**
- What developers can build on Livepeer: AI inference (batch + real-time), video transcoding, streaming
- The developer stack: Studio API, AI API, gateway SDK, BYOC, ComfyStream — and how they relate
- Quickstarts: AI jobs, transcoding, ComfyStream, contributor path
- Build guides: BYOC integration, ComfyStream setup, model support reference, workload fit decision guide, SDK-gateway interaction
- Concept pages: AI on Livepeer, OSS stack, developer stack, running a gateway (developer perspective), video on Livepeer
- Opportunities: grants, bug bounties, OSS contributions, RFPs — the economic participation surface for builders
- Technical references: SDKs, APIs, DeepWiki, example applications, awesome-livepeer
- The developer journey: from first call through to production

**What this tab does NOT own:**
- How to run a gateway as infrastructure → Gateways tab (gateway operator perspective)
- How to run an orchestrator → Orchestrators tab
- Protocol economics or governance → About tab / LP Token tab
- Community forums, events, social channels → Community tab
- LPT staking → LP Token tab

**Handoff points:**
- "I want to run my own gateway instead of using Studio" → Gateways tab
- "I want to provide GPU compute to the network" → Orchestrators tab
- "I want to stake LPT while building" → LP Token tab
- "I want to get involved in community" → Community tab

**Current IA alignment vs canonical:**
Developers is the most structurally problematic tab. It has: `concepts/`, `get-started/`, `build/`, `guides/`, `opportunities/`, `resources/`, `technical-references/` (now migrated to `resources/`). This does not align to canonical. Missing: `portal.mdx` as tab entry point (has `index.mdx` but no portal). Missing: canonical `quickstart/` folder — quickstarts are in `get-started/`. Missing: `setup/` section (no installation walkthrough for gateway SDK or BYOC). `guides/` exists but contains mix of reference, help, and how-to content. `opportunities/` has no canonical equivalent and needs special treatment. `technical-references/` content has been partially migrated into `resources/` but residual files remain in both.

---

## Gateways tab

**Path:** `v2/gateways/`

**Primary audience:** Infrastructure operator who wants to run their own Livepeer gateway — either a self-hosted gateway for their own application or a public/commercial gateway. They have DevOps and infrastructure experience. They need: installation, configuration, operations, and operational economics.

**Secondary visitors:** Developers evaluating whether to run their own gateway or use Studio. Orchestrators who want to understand the demand-side interface.

**What this tab owns:**
- What a gateway is and what role it plays (demand-side interface, job routing, payment disbursement)
- Gateway setup: installation, configuration, startup flags, network registration
- Gateway operations: monitoring, pricing configuration, pipeline selection, production considerations
- Gateway economics: fee flow, ETH deposits, ticket management, profitability
- Gateway-specific guides: running in production, public vs private gateway modes, operator responsibilities
- The gateway's relationship to orchestrators and developers

**What this tab does NOT own:**
- Building applications that consume gateway endpoints → Developers tab
- Running an orchestrator → Orchestrators tab
- LPT staking or delegation → LP Token tab

**Handoff points:**
- "I want to build against a gateway I'm running" → Developers tab
- "I want to provide GPU compute behind my gateway" → Orchestrators tab (dual-mode setup)
- "I want to understand the protocol my gateway participates in" → About tab

**Current IA alignment vs canonical:**
Gateways is well-structured and the closest to canonical after Orchestrators. Has: portal.mdx, navigator.mdx, concepts/, quickstart/, setup/, guides/, resources/. This is the reference model for other tabs.

---

## Orchestrators tab

**Path:** `v2/orchestrators/`

**Primary audience:** GPU node operator who wants to earn LPT and ETH by providing transcoding and/or AI inference capacity to the network. Has hardware (GPU server or cloud instance), technical/Linux confidence, and wants to know: can I make money doing this, and how do I get set up?

**Secondary visitors:** Delegators evaluating which orchestrators to stake to. Protocol researchers. Developers understanding the supply side.

**What this tab owns:**
- What an orchestrator is, what work it does, what it earns
- Incentive model: reward calls, fee cuts, staking requirements, active set mechanics
- Setup: installation (go-livepeer), configuration, network activation, AI worker setup, dual-mode setup
- Operations: monitoring, reward call management, upgrading, troubleshooting
- AI-specific content: pipeline support, ai-worker configuration, BYOC capability, model management
- Guides: tutorials, configuration optimisation, staking and rewards, AI workloads, operator considerations (governance weight, impact)
- Resources: community RPC, troubleshooting, performance references

**What this tab does NOT own:**
- Delegating LPT → LP Token tab (delegators are a separate audience from orchestrators)
- Gateway operation → Gateways tab
- Building applications → Developers tab

**Current IA alignment vs canonical:**
Most closely aligned to canonical. Has: portal.mdx, navigator.mdx, concepts/, quickstart/, setup/, guides/, resources/. The reference template for all other tabs.

---

## Community tab

**Path:** `v2/community/`

**Primary audience:** Network participant who wants to engage beyond their operational role — contribute, connect with others, understand where the community lives, participate in governance conversations, follow what's happening, or contribute back. Not a task-driven tab; motivation is connection and participation.

**Secondary visitors:** Newcomers trying to find community channels. Press/researchers looking for social proof. All other personas when they want the human layer of the network.

**What this tab owns:**
- Where the community lives: Discord, Forum, X, governance channels
- Governance and Foundation overview as a community resource (not protocol mechanics — that's About)
- Community guidelines and norms
- Trending forum topics and ecosystem highlights (living content)
- How to contribute: SPE proposals, OSS, content
- Events and programmes
- The general FAQ (cross-persona questions that don't fit a specific tab)

**What this tab does NOT own:**
- Protocol-level governance mechanics → About tab
- LPT voting process mechanics → LP Token tab
- Developer opportunities → Developers tab (grants, bounties)
- The Livepeer Foundation's formal introduction → Home tab

**Current IA alignment vs canonical:**
Community does not follow canonical — correctly so. It has: community-portal.mdx, faq.mdx, livepeer-community/, livepeer-connect/, livepeer-contribute/, resources/. This is a custom structure appropriate for a social/participatory tab. Some sections (livepeer-connect, livepeer-contribute) need page population.

---

## Solutions tab

**Path:** `v2/solutions/` (excluded from analysis per brief)

---

## Resources tab

**Path:** `v2/resources/`

Cross-tab compendium, glossary, and reference content. Not a persona-specific tab. Serves all personas as a lookup destination. The glossary and compendium are the canonical home for definitions referenced across all tabs.

---

## Summary ownership matrix

| Information domain | Owned by |
|---|---|
| What Livepeer is | Home |
| Livepeer Foundation as an org | Home (intro) + Community (operational) |
| Protocol mechanics & architecture | About |
| LPT purpose, mechanics, tokenomics | LP Token |
| Delegation: full journey | LP Token |
| Governance: on-chain model | About |
| Governance: participation process | LP Token |
| Treasury mechanics | LP Token |
| Treasury grants & allocations | LP Token |
| Building applications (AI + video) | Developers |
| SDK, API, BYOC, ComfyStream | Developers |
| Running a gateway (infrastructure) | Gateways |
| Running an orchestrator (GPU node) | Orchestrators |
| Community channels & events | Community |
| General FAQ | Community |
| Glossary & compendium | Resources |
