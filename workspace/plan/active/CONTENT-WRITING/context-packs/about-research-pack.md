# About Content Research Pack

**Tab**: About
**Date**: 2026-03-23
**Status**: Draft — for content writer use
**Source**: Full repo scan of `_dep-docs/about/`, `v2/about/`, `docs.json`, and canonical audience design collation
**Canonical audience design**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/about/collated/canonical-about-audience-design.md`
**Terminology source**: `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-about.md`

---

## Purpose

This pack collects all existing v1 (archived in `_dep-docs/about/`) and v2 (live in `v2/about/`) About tab content, summarises each page, maps its audience and maturity status, identifies migration and coverage gaps, documents the multi-audience structure of the tab, and frames the blocking human decision on the audience frontmatter token.

Writers should use this pack as the primary source of truth when planning rewrites, consolidations, or new pages for the About tab.

---

## Navigation Structure (from docs.json)

The About tab is registered at line 2128 of `docs.json`:

```
Tab: About
  Anchor: About Livepeer
    Group: About Livepeer
      v2/about/portal
      v2/about/livepeer-overview
      v2/about/core-concepts
      v2/about/mental-model
    Group: Livepeer Protocol
      v2/about/livepeer-protocol/overview
      v2/about/livepeer-protocol/core-mechanisms
      v2/about/livepeer-protocol/livepeer-token
      v2/about/livepeer-protocol/governance-model
      v2/about/livepeer-protocol/treasury
      v2/about/livepeer-protocol/economics
      v2/about/livepeer-protocol/technical-architecture
    Group: Livepeer Network
      v2/about/livepeer-network/overview
      v2/about/livepeer-network/actors
      v2/about/livepeer-network/job-lifecycle
      v2/about/livepeer-network/marketplace
      v2/about/livepeer-network/technical-architecture
      v2/about/livepeer-network/interfaces
    Group: Resources
      v2/about/resources/livepeer-whitepaper
      v2/about/resources/livepeer-glossary
      v2/about/resources/blockchain-contracts
      v2/about/resources/technical-roadmap
      v2/about/resources/compendium/glossary (nested)
```

---

## V1 Content Inventory

V1 content is the archive in `_dep-docs/about/`. These files are the direct predecessors of the current v2 pages — the content is mostly identical with minor frontmatter differences. Status `archived` means the content is in `_dep-docs/` and no longer live.

**Note on v1 vs v2 relationship**: Comparison via `diff` confirms the `_dep-docs/about/` pages and `v2/about/` pages are essentially identical files. The `_dep-docs/` versions predate the v2 frontmatter schema additions (`lastVerified`, `pageType` enum updates). The v2 files are live; the `_dep-docs/` files are the archive from which the v2 files were derived.

---

### Group: About Livepeer (top-level pages)

| Path | Title | pageType | purpose | audience (frontmatter) | Status | Content Summary | Audience Served |
|---|---|---|---|---|---|---|---|
| `_dep-docs/about/portal.mdx` | About Livepeer: Protocol & Network | `landing` | `landing` | `general` | Archived (v2 live) | Portal landing page with hero section, animated starfield background, and 6 cards linking to Core Concepts, Mental Model, Livepeer Protocol, Livepeer Network, Livepeer Glossary, and Livepeer Whitepaper. Short overview text: Livepeer is a decentralised infrastructure protocol for video streaming and AI, running on Ethereum/Arbitrum with LPT as the native token. Subtitle: "Discover – Participate – Innovate." | General discovery; all arriving audiences |
| `_dep-docs/about/livepeer-overview.mdx` | Livepeer Overview | — | `overview` | `general` | Archived (v2 live) | Full-stack decentralised infrastructure platform and marketplace for video streaming and AI. Defines Protocol (on-chain coordination: staking, delegation, inflation, orchestrator selection, slashing, probabilistic payments) vs Network (off-chain GPU mesh: orchestrators, transcoders, gateways, workers). Protocol/Network separation table. Actor overview (Orchestrators, Gateways, Delegators). Contains drafting notes and expandable "Old notes" section with legacy content. **Draft quality: medium-high — substantive content present but has in-progress annotation marks and commented-out sections.** | General; product evaluators; protocol researchers |
| `_dep-docs/about/core-concepts.mdx` | Livepeer Core Concepts | — | `concept` | `general` | Archived (v2 live) | Introduces Protocol vs Network separation (on-chain rules vs off-chain execution), Protocol mechanisms list, Livepeer actors (Orchestrators, Gateways, Delegators), on-chain vs off-chain split (Arbitrum L2 / ETH L1 / off-chain). Uses tab component importing snippet partials for Protocol, Network, Actors. Contains placeholder notes for actor diagram. **Draft quality: partial — many sections are stubs or have placeholder notes.** | General; newcomers needing conceptual grounding |
| `_dep-docs/about/mental-model.mdx` | The Livepeer Stack and Mental Model | — | `faq` | `general` | Archived (v2 live) | OSI-style 10-layer stack analogy for Livepeer: Layer 1 (Physical Compute/GPUs), Layer 2 (Transport/Media Substrate), Layer 3 (Distributed Execution Network), Layer 4 (Crypto-Economic Coordination), Layer 5 (Economic & Security), Layer 6 (Data & State), Layer 7 (Platform Services), Layer 8 (Developer Interfaces), Layer 9 (Developer Applications), Layer 10 (End User). Uses Accordion components per layer. Introduces "decentralised serverless GPU fabric with a cryptoeconomic control plane" framing. Full commented-out draft notes visible at bottom. **Draft quality: high — fully fleshed content, accordion structure complete.** | Protocol researchers; founders; technical evaluators |
| `_dep-docs/about/faq-about.mdx` | FAQ | `reference` | (notes only) | — | Archived (v2 live) | **Not a FAQ.** This file is a working IA and structural blueprint document, not a reader-facing FAQ. Contains a proposed clean IA separation (Protocol vs Network), placeholder for 8-part framework for documenting complex systems, recommended page-by-page content specs. Includes a `# FAQ` section at the bottom marked `<Note>Coming Soon</Note>`. **Content status: IA draft / internal notes. Zero reader-facing content.** | Internal — not reader-facing |

---

### Group: Livepeer Protocol

| Path | Title | pageType | purpose | audience (frontmatter) | Status | Content Summary | Audience Served |
|---|---|---|---|---|---|---|---|
| `_dep-docs/about/livepeer-protocol/overview.mdx` | Protocol Overview | `overview` | `overview` | `all` | Archived (v2 live) | Why the protocol exists (problem: coordinating GPU operators without trusting a company). Protocol design fundamentals: reward systems, coordination mechanisms, payment systems, governance. Key design goals from whitepaper: Aligned Incentives, Trustless Verification, Composable Governance. Guiding principles: decentralisation, economic alignment, scalability, modularity, open participation. Actor roles table (Orchestrator/Delegator/Gateway). Three contract function categories. Links to whitepaper and blockchain-contracts page. **Draft quality: high — well-structured, substantive.** | Token researchers; founders; protocol researchers; all audiences needing protocol orientation |
| `_dep-docs/about/livepeer-protocol/core-mechanisms.mdx` | Core Mechanisms and Functions | — | `faq` | `general` | Archived (v2 live) | Mechanism objectives (incentivise honest behaviour, scale supply, secure verification, disincentivise bad actors). Protocol features via AccordionGroup: blockchain attributes, consensus/finality, security model, node-level trust. Protocol actors (Orchestrators, Gateways, Delegators). Key distinction: AI vs video mechanisms — AI services do not participate in round-based rewards or active set election. Mechanism Details tabs: Rounds (round-based epoch system, ~24h), Staking (bonding, delegation, unbonding, slashing), Rewards (round-based distribution, rewardCut), Payments (probabilistic micropayment tickets), Upgrades (proxy pattern), Deployment config. **Draft quality: high — detailed, structured, technically accurate.** | Protocol researchers; token researchers; developers evaluating protocol internals |
| `_dep-docs/about/livepeer-protocol/livepeer-token.mdx` | Livepeer Token | — | `concept` | `general` | Archived (v2 live) | LPT as utility token: staking, governance, security. Three uses: Staking (bonding to BondingManager), Governance (stake-weighted voting), Security (slashing collateral). LPT NOT used for job payments (ETH is). Supply/distribution: 10M genesis via Merkle Mine (no ICO), ~37.9M current supply (early 2025), ~44% staked (June 2025). Dynamic inflation model with formula and calculations. LPT usage table. Rewards distribution (orchestrators pro-rata, delegators via rewardCut, treasury 10%). Mermaid diagram for staking/reward flow. Sections marked `#TODO` and `#MOVE THESE` — bonding/unbonding mechanics, slashing penalties, economic flow. **Draft quality: medium — core content present, significant sections incomplete or marked for relocation.** | Token researchers; delegators; anyone evaluating LPT staking |
| `_dep-docs/about/livepeer-protocol/governance-model.mdx` | Livepeer Governance Model | — | `how_to` | `general` | Archived (v2 live) | Community-driven hybrid on-chain/off-chain governance. Process: Community Discussion → RFP → LIP Draft → On-Chain Submission (100 LPT threshold) → Voting (30 rounds/~3.75 days, 33% quorum, >50% majority) → Execution. Key LIPs by category: Governance/Process (LIP-1, 15, 69, 19, 25), Protocol Migration/Confluence (LIP-73), Treasury Launch (LIP-89, 90, 91, 92), Economic Parameters (LIP-34, 35, 40, 83, 100), Core Features (LIP-3, 8, 9, 11), Earnings/Claiming (LIP-36, 52). Foundation role: strategy and SPE coordination. Mermaid governance flow diagram. **Draft quality: high — complete, well-structured.** | Token researchers; governance researchers; community members; delegators |
| `_dep-docs/about/livepeer-protocol/treasury.mdx` | Livepeer Treasury | — | `concept` | `general` | Archived (v2 live) | Treasury genesis via LIP-89 (creation) and LIP-92 (10% inflation allocation). Objectives: sustain growth, improve security, decentralise governance, enable long-term coordination. Funding sources: inflationary minting (25% in 2026), slashing penalties (50% of slashed LPT), fee pool remainders, direct LIP transfers. Fund use categories: core development, ecosystem grants, public goods, security/audits, community campaigns, contributor payments. Governance same as protocol (100 LPT threshold, 33% quorum). Transparency via Explorer, Arbiscan. Foundation role as neutral steward. Contract architecture on Arbitrum One. **Draft quality: high — detailed and complete.** | Token researchers; governance researchers; SPE applicants; delegators evaluating treasury health |
| `_dep-docs/about/livepeer-protocol/economics.mdx` | Livepeer Protocol Economics | — | `concept` | `general` | Archived (v2 live) | Technical money flow deep dive: Staking Flow (BondingManager interactions), Reward Flow (Minter → Orchestrators → Delegators calculation), Payment Flow (broadcaster deposit → off-chain ticket creation → validation → on-chain redemption — ~99% gas reduction), Fee Flow (orchestrator accumulation then delegator share), Withdrawal Flows (unbonding, broadcaster withdrawal). Client integration note. Gas optimisation (pool hints, batch operations, dynamic gas pricing). Full money flow summary. **Draft quality: high — detailed and technically precise. Primarily technical reference content.** | Token researchers; orchestrators; developers building on the protocol |
| `_dep-docs/about/livepeer-protocol/technical-architecture.mdx` | Technical Architecture (Protocol) | — | `how_to` | `general` | Archived (v2 live) | Protocol contract architecture Mermaid diagram: Controller → ServiceRegistry, BondingManager, RoundsManager, TicketBroker, Minter; Governance: BondingVotes → LivepeerGovernor → Governor → Treasury; Token: LivepeerToken. System overview table (Client → Gateway → Orchestrator → Worker → Off-chain Manager → L2 ARB contracts → L1 ETH contracts). System interaction diagram (off-chain network + on-chain protocol). Sections marked as stubs: Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury. **Draft quality: partial — contract diagram solid, several major sections are empty stubs.** | Protocol researchers; technical evaluators; developers doing deep integration |

---

### Group: Livepeer Network

| Path | Title | pageType | purpose | audience (frontmatter) | Status | Content Summary | Audience Served |
|---|---|---|---|---|---|---|---|
| `_dep-docs/about/livepeer-network/overview.mdx` | Livepeer Network Overview | `overview` | `overview` | `general` | Archived (v2 live) | Very brief. Network as execution layer. Node types (Broadcaster, Gateway, Orchestrator, Transcoder, AI Worker). Core components (LivepeerNode, Media Server, Broadcast Sessions Manager stubs). **Draft quality: very low — mostly stub content, incomplete sections.** | General; GPU operators evaluating the network |
| `_dep-docs/about/livepeer-network/actors.mdx` | Actors Overview | — | `concept` | `general` | Archived (v2 live) | Three core actors: Orchestrators (GPU nodes staking LPT, earn ETH fees + LPT inflation, run go-livepeer, manage transcoders), Delegators (LPT holders delegating to orchestrators, earn reward shares, governance rights), Gateways/Broadcasters (submit video/AI jobs, pay ETH, no LPT required). Role flow: Delegators → Orchestrators → Gateways. Role summary sections for Developers/Applications, Gateway Operators, Orchestrators, Delegators. Interaction pattern: Application → Gateway → Orchestrator → Gateway → Application. Actor pages linked. **Draft quality: medium-high — substantive content, some text formatting issues from paste.** | All audiences needing role orientation; GPU operators; delegators; developers |
| `_dep-docs/about/livepeer-network/job-lifecycle.mdx` | Livepeer Job Lifecycle | — | `how_to` | `general` | Archived (v2 live) | 7-step lifecycle: Ingest/segmentation → Discovery/selection → Price/session → Segment dispatch/compute → Result return/verification → Continuous settlement (probabilistic tickets) → Periodic reward accounting (reward()). State machine Mermaid diagram (Idle → Ingesting → Discovering → SessionEstablished → SegmentDispatch → Executing → Returning → Verifying → Publishing → Settling). Events/transitions table with observable metrics. Video vs AI lifecycle comparison: transcoding (stake-weighted, ticket redemption) vs AI (market-governed, ETH/credit payment). Practical examples for both. **Draft quality: high — technically detailed, well-structured.** | Developers integrating the network; GPU operators understanding job flow; protocol researchers |
| `_dep-docs/about/livepeer-network/marketplace.mdx` | Livepeer Marketplace | — | `concept` | `general` | Archived (v2 live) | Dynamic decentralised marketplace for real-time media compute. Marketplace overview table (elements and roles). Demand side: live stream, AI inference, file transcode with payment styles. Supply side: orchestrators advertising hardware specs, region, workloads, pricing. Routing logic (Gateway scores orchestrators by latency, workload match, cost, availability). Price discovery via posted pricing (not auction-based). Payment/settlement: ETH tickets via TicketBroker, credit balance. Credit system extensions (USD/ETH). Protocol–market–interface layer boundaries table. Future LIPs (LIP-78 spot auctions, LIP-81, LIP-85). **Draft quality: high — well-structured, comprehensive.** | Founders/product evaluators assessing the market model; developers understanding routing; GPU operators understanding pricing |
| `_dep-docs/about/livepeer-network/technical-architecture.mdx` | Network Technical Architecture | — | `concept` | `general` | Archived (v2 live) | Full network stack: Apps/SDKs → Gateway APIs → Gateway Nodes → Orchestrator (go-livepeer) → Worker Layer → Protocol. Orchestrator node: components (transcoder selection, ticket validation, reward claim, LPT staking, region advertisement), deployment modes, tools (livepeer_cli, livepeer_exporter). Worker layer: Transcoder (FFmpeg), Inference (Python/Torch), Plugin (WebRTC). Gateway infrastructure: codebases (Studio Gateway, Daydream Gateway, Cascade), features. API table (REST, gRPC, GraphQL). CLI and SDKs (JS SDK, Python). Monitoring (Prometheus, Grafana, Loki). Deployment examples. **Draft quality: high — comprehensive reference material.** | Developers; GPU operators; gateway operators; technical evaluators |
| `_dep-docs/about/livepeer-network/interfaces.mdx` | Network Interfaces | — | — | `general` | Archived (v2 live) | Interface categories table (REST, gRPC, GraphQL, JS SDK, CLI, Smart Contracts). REST API (livepeer.studio/api endpoints). gRPC API (gateway proto methods). GraphQL Explorer API. JS SDK (@livepeer/sdk — install, features, example). CLI (commands). Smart contract interfaces (BondingManager, TicketBroker, Governor). Workflow examples (transcode, AI, metrics). **Draft quality: high — well-structured reference page.** | Developers; technical integrators; node operators |

**Additional network pages in `_dep-docs/` but NOT in docs.json navigation** (exist as files, likely removed from sidebar):

| Path | Title | Notes |
|---|---|---|
| `_dep-docs/about/livepeer-network/demand-side.mdx` | Livepeer Demand Side | Not in docs.json. Content unknown (not read). |
| `_dep-docs/about/livepeer-network/fee-flow.mdx` | Livepeer Fee Flow | Not in docs.json. Content unknown (not read). |
| `_dep-docs/about/livepeer-network/scaling.mdx` | Livepeer Scaling | Not in docs.json. Content unknown (not read). |
| `_dep-docs/about/livepeer-network/supply-side.mdx` | Livepeer Supply Side | Not in docs.json. Content unknown (not read). |
| `_dep-docs/about/livepeer-network/livepeer-actors/delegators.mdx` | Delegators | Not in docs.json. |
| `_dep-docs/about/livepeer-network/livepeer-actors/end-users.mdx` | Builders and End Users | Not in docs.json. |
| `_dep-docs/about/livepeer-network/livepeer-actors/gateways.mdx` | Gateways | Not in docs.json. |
| `_dep-docs/about/livepeer-network/livepeer-actors/orchestrators.mdx` | Orchestrators | Not in docs.json. |
| `_dep-docs/about/core-concepts/concepts/actors.mdx` | Livepeer Actors | Not in docs.json — marked ⚠️ in generated index. |

---

### Group: Resources

| Path | Title | pageType | purpose | audience (frontmatter) | Status | Content Summary | Audience Served |
|---|---|---|---|---|---|---|---|
| `_dep-docs/about/resources/livepeer-whitepaper.mdx` | Livepeer Whitepaper | — | — | `general` | Archived (v2 live) | Brief summary of original 2017 whitepaper. Four key ideas: Incentivized Participation (LPT, trustless verification), Trustless Verification (Truebit-based challenge), Open Participation (fully open market, no central party), Economic Security via Token (stake as performance bond). Merkle Mine note (no ICO). Livepeer Now section: protocol proven in production, Arbitrum migration, GPU/AI expansion. Card link to GitHub whitepaper. Note that embedded transcript unavailable. **Draft quality: good summary — concise and accurate.** | All audiences; general discovery |
| `_dep-docs/about/resources/livepeer-glossary.mdx` | Livepeer Glossary | `glossary` | `glossary` | `general` | Archived (v2 live) | **Stub.** Note about searchable view. Term category placeholders only: Actors & Network (Gateway, Orchestrator, Delegator, Developer), Web3 (DePIN, LPT, ETH), Video (Transcoding, Ingest, Delivery, Streaming), AI (Inference, Model, Pipeline, World Model, Agent). No definitions. **Draft quality: very low — stub only.** | All audiences needing vocabulary |
| `_dep-docs/about/resources/blockchain-contracts.mdx` | Blockchain Contracts | — | `faq` | `general` | Archived (v2 live) | Overview of Ethereum/Arbitrum smart contracts governing Livepeer. Three contract function categories: Core Protocol, Token System, Governance. 10 smart contracts listed: Controller, BondingManager, TicketBroker, RoundsManager, Minter, ServiceRegistry, MerkleSnapshot, BondingVotes, LivepeerToken, Governor, LivepeerGovernor, Treasury. (File read stopped at line 60 — remaining content includes contract addresses and ABI details.) **Draft quality: good — reference material, detailed.** | Protocol researchers; developers; technical integrators |
| `_dep-docs/about/resources/technical-roadmap.mdx` | Technical Roadmap | — | — | `general` | Archived (v2 live) | **Stub.** Contains only two external blog links (Cascade vision post, real-time AI update). **Draft quality: very low — stub only.** | All audiences tracking ecosystem development |
| `_dep-docs/about/resources/gateways-vs-orchestrators.mdx` | Gateways Vs. Orchestrators | — | — | `general` | Archived (not in docs.json nav) | Comparison page explaining the distinction: Gateways coordinate, Orchestrators compute. Overview callout establishes the core distinction. (File cut at line 40 — full content not read.) **Not in current docs.json navigation.** | Developers; new participants needing role clarity |

---

### Deprecated/X-Deprecated Pages

| Path | Title | Status | Notes |
|---|---|---|---|
| `_dep-docs/about/x-deprecated/livepeer-token-economics.mdx` | Livepeer Token Economics | Deprecated (x-deprecated) | Legacy content predating current schema. Actor flow description (Broadcaster → Orchestrator → Transcoder → Delegator). Points to livepeer.org/lpt for current token info. Content superseded by `livepeer-token.mdx`. |
| `_dep-docs/about/x-deprecated/livepeer-governance.mdx` | Livepeer Governance | Deprecated (x-deprecated) | Stub — two sentences and quick links. Fully superseded by `governance-model.mdx`. |
| `_dep-docs/about/x-deprecated/livepeer-protocol/technical-overview.mdx` | Technical Overview | Deprecated (x-deprecated) | Content unknown — not read. Likely superseded by `technical-architecture.mdx`. |

---

## V2 Content Inventory

The v2 About pages live at `v2/about/`. As confirmed by diff analysis, the content of v2 pages is substantively identical to their `_dep-docs/about/` counterparts. The primary differences are frontmatter additions (`lastVerified`, updated `pageType` enum values, `pageVariant` in some cases). The v2 pages are the current live versions.

**V2-only pages** (exist in `v2/about/` but have no `_dep-docs/about/` counterpart):

| Path | Title | Notes |
|---|---|---|
| `v2/about/resources/compendium/glossary.mdx` | About Livepeer — Glossary | New: searchable glossary using SearchTable component. Frontmatter: `pageType: reference`, `pageVariant: compendium`, `purpose: reference`, `audience: everyone`, `status: draft`. Has a `glossary-data.json` companion generated by pre-commit script. This is the replacement for the stub `livepeer-glossary.mdx`. |
| `v2/about/resources/dep-blockchain-contracts.mdx` | Blockchain Contracts (deprecated) | Likely a deprecated version of the contracts page. Not read. |
| `v2/about/_workspace/deprecated/livepeer-governance.mdx` | Livepeer Governance (workspace deprecated) | Mirror of x-deprecated governance page. |
| `v2/about/_workspace/deprecated/livepeer-token-economics.mdx` | Livepeer Token Economics (workspace deprecated) | Mirror of x-deprecated token economics page. |
| `v2/about/_workspace/deprecated/livepeer-protocol/technical-overview.mdx` | Technical Overview (workspace deprecated) | Workspace copy of deprecated technical overview. |

**V2 pages in docs.json that correspond directly to v1 (identical content, minor frontmatter differences)**:

All 20+ pages listed in the V1 Content Inventory above have direct v2 counterparts with the same content.

---

## Migration Gap Analysis

### Critical Content Gaps

| Gap | Severity | Evidence | Notes |
|---|---|---|---|
| `faq-about.mdx` is an IA notes document, not a FAQ | High | File contains structural blueprint and recommendations, zero reader-facing content. Marked ⚠️ in generated index. | Needs to be either removed from navigation or replaced with actual FAQ content. |
| `resources/livepeer-glossary.mdx` is a stub | High | File contains term categories with no definitions. Superseded by `compendium/glossary.mdx` but the stub remains in navigation. | Either complete the glossary or remove from nav and rely on compendium/glossary. |
| `resources/technical-roadmap.mdx` is a stub | High | Contains only two blog post links. No structured roadmap content. | Needs substantial content or replacement with a link-forward page pointing to roadmap.livepeer.org. |
| `livepeer-network/overview.mdx` is nearly empty | High | Very short, mostly stub content with incomplete sections. | Needs full rewrite. |
| `livepeer-protocol/technical-architecture.mdx` has empty stub sections | Medium | Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury sections exist as headers only. | Protocol architecture diagram is solid; prose sections need to be written. |
| `livepeer-token.mdx` has `#TODO` and `#MOVE THESE` markers | Medium | Multiple sections explicitly marked incomplete or flagged for relocation to the LPT tab. | Significant editorial work required to complete or properly defer content. |
| `core-concepts.mdx` has placeholder notes | Medium | Actor diagram marked "placeholder removed pending final approved asset." Tab component imports snippets not confirmed as complete. | Needs clean-up and content completion. |
| Network sub-pages removed from navigation | Low-Medium | demand-side, fee-flow, scaling, supply-side, and four livepeer-actors pages exist in `_dep-docs/` but are not in docs.json. Marked ⚠️ in generated index. | Decision needed: restore to nav with completed content, or consolidate into existing pages. |
| Gateways-vs-orchestrators not in navigation | Low | Exists in `_dep-docs/about/resources/` but not in docs.json nav for About tab. | Review whether to add to nav or relocate to another tab. |

### Content Quality Summary

| Quality Level | Pages |
|---|---|
| High (substantive, well-structured, near ready) | livepeer-protocol/overview, core-mechanisms, governance-model, treasury, economics, job-lifecycle, marketplace, network/technical-architecture, interfaces, livepeer-overview, mental-model, whitepaper |
| Medium (substantive but incomplete markers) | livepeer-token, actors, blockchain-contracts, portal, core-concepts |
| Low/Stub (minimal or placeholder content) | livepeer-network/overview, livepeer-glossary, technical-roadmap, faq-about |

---

## Multi-Audience Breakdown

Source: `canonical-about-audience-design.md` (3-run consensus, 2026-03-23)

The About tab is structurally a **discovery substrate and routing layer** — not a single-audience tab. Every other tab in the docs site has a dominant primary audience; About explicitly serves all audiences at the `discover` lifecycleStage before routing them to their role-specific tabs.

### Audience Paths Through the About Tab

| Audience | Arrival Vector | Primary Content Consumed | Exits To | Primary JTBD |
|---|---|---|---|---|
| **Product Evaluator** (founder, PM, platform engineer) | External article, search, Solutions tab, referral | Portal → Overview → Network (job flow, marketplace) → compute types | Solutions tab, Developers tab | "Is Livepeer the right infrastructure for my use case?" |
| **Token and Network Researcher** | Search on LPT/tokenomics, Messari/Dune/CoinGecko | Portal → Protocol (overview, LPT, economics, governance, treasury) | Delegators tab | "Is this protocol credible for staking? What drives LPT value?" |
| **GPU Operator** | Discord, community forum, orchestrator search | Portal → Network (actors, marketplace, technical-architecture) → Protocol (staking requirements) | Orchestrators tab | "What does running a node require, and can I earn from my hardware?" |
| **Developer** | Search on Livepeer API/SDK, developer community | Portal → Overview → Network (interfaces, job-lifecycle, technical-architecture) | Developers tab, Gateways tab | "Is the API/SDK mature enough to build on?" |
| **Ecosystem Newcomer / Community Member** | Discord, Twitter/X, blog, podcast | Portal → Overview → Protocol (governance, treasury) → Whitepaper | Community tab | "What is Livepeer, who runs it, how do I participate?" |

### Content Coverage By Audience

| Audience | Well-served by current content | Gaps |
|---|---|---|
| Product Evaluator | Livepeer overview, marketplace, mental model | Missing: concise "is this right for my product?" orientor; no cost/latency benchmark content |
| Token Researcher | Protocol pages (economics, governance, treasury, LPT) are detailed | livepeer-token.mdx has #TODO sections; no verify-live data pointers for current inflation rate |
| GPU Operator | Actors page, network technical-architecture, marketplace pricing | Network overview stub is a blocker; no "what stake do I need" summary up front |
| Developer | Interfaces page, job-lifecycle, technical-architecture are strong | Missing: explicit "you don't need to run infrastructure" statement; API maturity indicators |
| Community Member | Whitepaper, governance model are strong | No ecosystem state / "what's been built" content; technical-roadmap is a stub |

---

## Audience Token Decision Context

**STATUS: BLOCKING HUMAN DECISION — Phase 2 frontmatter schema cannot be finalised until this is resolved.**

Source: `canonical-about-audience-design.md`, OPEN ITEM 1

### Background

The `audience` frontmatter field is used throughout the repo as a single token (e.g. `developer`, `orchestrator`, `delegator`) identifying the primary reader. The About tab does not have a single primary audience — it serves all arriving audiences at the `discover` lifecycleStage.

Current About pages carry `audience: general` or `audience: all` in frontmatter — inconsistently. The canonical audience design output explicitly flags this as unresolved.

The v5 Agent run proposed `discover-substrate` as an audience token. This was NOT adopted: `discover-substrate` is not in the canonical audience token list.

### The Four Options

**Option A: `audience: all`**
- Use the existing `all` token.
- Meaning: this content is for all audiences.
- Pros: Requires no schema change. Signals breadth.
- Cons: Does not communicate the `discover` lifecycleStage. Does not distinguish "serves all at discover stage" from "generic content for everyone." `all` and `general` (already in use) may be redundant.
- Evidence supporting this: `compendium/glossary.mdx` already uses `audience: everyone`; the tab genuinely has no single role audience.

**Option B: `audience: [gateway, orchestrator, delegator, developer, builder, community, founder]`**
- Array form listing all role tokens.
- Pros: Maximally explicit. Enables per-audience filtering if tooling supports it.
- Cons: Requires schema to support array values in the `audience` field. Array syntax not confirmed supported in current frontmatter-taxonomy validator. Verbose.
- Evidence supporting this: Accurate — these are exactly the arriving audiences per the canonical design.

**Option C: Omit the `audience` field on About pages**
- Schema exception: About pages do not carry an audience token.
- Pros: Honest — no single token can describe the tab.
- Cons: Breaks schema consistency. May cause validator failures. Requires explicit schema exception documentation.
- Evidence supporting this: No existing About pages omit the audience field.

**Option D: Define `about` as a tab-specific structural token**
- Add a new canonical token `about` (or `substrate`, or `discovery-layer`).
- Meaning: applies to pages that serve all audiences at `discover` stage, operating as an orientation substrate.
- Pros: Semantically precise. Documents the structural role of the tab in the token itself.
- Cons: Requires adding a new token to `frontmatter-taxonomy.js` and all related validator/schema files. Requires a human decision to expand the canonical enum. One-off solution with limited reuse potential unless other multi-audience tabs exist.
- Evidence supporting this: The canonical audience design itself describes the tab as a "substrate-and-routing layer." The faq-about.mdx IA blueprint uses the same "substrate" framing. No other current tab has this structure.

### What the Content Evidence Shows

The content confirms the multi-audience structure is real, not a documentation artefact:

1. **Portal page** (`portal.mdx`): Subtitle "Discover – Participate – Innovate" explicitly frames the tab as discovery. Card grid links to Protocol, Network, Glossary, and Whitepaper — serving different audiences with different depth requirements.

2. **Protocol pages** (overview, LPT, economics, governance, treasury): Heavily oriented toward token researchers and governance evaluators — content depth, LIP histories, and economic formulas are not primarily for developers or GPU operators.

3. **Network pages** (actors, job-lifecycle, marketplace, technical-architecture): Oriented toward GPU operators, developers, and founders evaluating infrastructure viability.

4. **Mental model page**: OSI-stack analogy — serves technical evaluators and founders building a systems understanding; not the same audience as LPT staking researchers.

5. **Whitepaper page**: Origin story and design principles — serves community members and ecosystem newcomers.

6. **All pages carry `audience: general`**: This is the current default, not a deliberate design choice. It reflects the absence of a resolved decision, not the actual serving pattern.

### Assessment

The content does not support collapsing the About tab to a single audience token. The evidence clearly shows it functions as a discovery-and-routing substrate. Options A and D are the strongest candidates:

- **Option A (`all`)** is the lowest-friction resolution: no schema change, uses an existing token, honest about the breadth.
- **Option D (new token)** is the most accurate resolution: it encodes the structural role of the tab, not just "we couldn't decide."

The choice between A and D depends on whether the schema maintainer wants to encode structural tab roles as audience tokens (a broader design decision about what the `audience` field is for), or whether `audience` should only identify reader role types.

**This decision is not made here. Present this framing to the human decision-maker.**

---

## Open Questions for Content Writers

### Structural / IA Questions (require human resolution before writing)

1. **Audience token decision** (BLOCKING): See Audience Token Decision Context above. Which option (A, B, C, or D) governs About frontmatter?

2. **faq-about.mdx**: Is this page being retired, replaced, or converted? It currently contains IA notes, not FAQ content. If a FAQ is desired, what questions should it answer, and which audiences does it serve?

3. **Network sub-pages**: The pages `demand-side`, `fee-flow`, `scaling`, `supply-side`, and four `livepeer-actors/` pages exist but are not in the docs.json navigation. Are these being consolidated into existing pages, or restored as standalone pages with full content?

4. **Section structure**: The canonical audience design recommends a 10-section linear structure (S1–S10, beginning with a role router/disambiguation section). This is a Phase 2 IA decision — are writers expected to follow this structure, or is the section structure still open?

### Content Quality Questions (for writers working on existing pages)

5. **livepeer-token.mdx `#TODO` and `#MOVE THESE` markers**: What content should be moved to the LPT tab? The page explicitly says "Move majority of this to token section." Which sections stay on the About tab, and which are deferred?

6. **Technical-architecture stub sections**: The protocol technical architecture page has empty sections for Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury. Are these to be written, or should they link out to the pages that already cover this content?

7. **Glossary strategy**: There are now two glossary files: `resources/livepeer-glossary.mdx` (stub, in nav) and `resources/compendium/glossary.mdx` (SearchTable implementation, with JSON companion, status: draft). Which is canonical? Should the stub be removed from nav?

8. **Technical Roadmap**: Currently a stub with two blog post links. What format should this take — a curated link forward to roadmap.livepeer.org, a structured summary, or a dedicated narrative page?

9. **Audience framing per page**: Current pages carry `audience: general` uniformly. Once the audience token decision is made, writers will need to apply the resolved token. Should individual About pages carry more specific audience signals, or does the tab-level token govern all pages uniformly?

10. **livepeer-network/overview.mdx**: This is the first page readers see under the Livepeer Network group and it is nearly empty. It is a high-priority rewrite. What is the target scope — a brief orientation page routing to sub-pages, or a substantive overview of network architecture?

### Accuracy and Verify-Live Flags

The canonical terminology lock (`canonical-about-audience-design.md`) carries the following `[verify-live]` flags that writers must resolve before publishing:

- Active Set size — governance-controlled, do not hard-code; verify at explorer.livepeer.org
- Unbonding period — governance-controlled, verify current value
- Dynamic Inflation rate and adjustment step — governance-controlled, verify at explorer.livepeer.org
- Treasury Reward Cut Rate — governance-controlled, verify current value (noted as 25% in treasury.mdx for 2026)
- Total LPT supply and staking percentage — time-sensitive; `livepeer-token.mdx` cites ~37.9M and ~44% staked as of early/June 2025; verify current figures
- `Broadcaster` deprecated status: `glossary-about.md` incorrectly marks Broadcaster as `Status: current`; authoritative source (`deprecated-terms.md`) says never use Broadcaster — use Gateway

---

*Pack generated: 2026-03-23*
*Source files read: 24 pages across `_dep-docs/about/` and `v2/about/`, plus `docs.json`, `canonical-about-audience-design.md`, `page-taxonomy-framework.mdx`, `pagePurpose.md`, and `glossary-about.md`*
