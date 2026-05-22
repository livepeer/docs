# About — Content Scan

**Tab**: About
**Scan date**: 2026-03-23
**Docs.json source**: v2 navigation block
**v2/about/ folder scanned**: yes
**Status**: DRAFT — awaiting human review

---

## Summary

**Total pages in docs.json navigation**: 22
**Files found on disk**: 39 (v2/about/**/*.mdx total, including unlisted and workspace)
**Production pages (in nav, file exists)**: 22
**Empty (in nav, no file)**: 0
**Stubs (<100 words)**: 4
**Draft (draft: true)**: 0
**Current**: 18
**Pages with deprecated pageType values**: 6
**Pages with incomplete frontmatter**: 17
**Workspace artefacts listed**: 3
**Unlisted files on disk (not in nav)**: 14

---

## Page Inventory

[One entry per production page, in docs.json navigation order.]

---

### About Portal · `v2/about/portal`

**Status**: current
**Section/group**: About Livepeer
**File size**: 4756 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | About Livepeer: Protocol & Network | yes |
| description | Welcome To The About Portal: Explore, Connect, Contribute | yes |
| pageType | `landing` | DEPRECATED: maps to `navigation` |
| audience | `general` | no — `general` is not a canonical audience token. Canonical options: `founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community`. See OPEN ITEM 1 in audience design re multi-audience handling. |
| purpose | `landing` | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType: landing` — deprecated; canonical replacement: `navigation` (with `pageVariant: portal`)
- `audience: general` — non-canonical token; not in the 7-token canonical set
- `purpose: landing` — deprecated; canonical replacement: `orient`
- `lifecycleStage` — field missing entirely
- `veracityStatus` — not set (optional but flagged for awareness)

**Heading structure**:
No H1 found (frame-mode page — content rendered via MDX components `<HeroSectionContainer>`, `<PortalHeroContent>`, `<PortalCardsHeader>`). No prose headings. Page is a visual portal frame.

**Content summary**:
This is the tab entry point for the About section, serving as a hero-and-card navigation portal for first-time visitors. It renders a starfield hero with a one-paragraph overview of Livepeer and six navigation cards routing to Core Concepts, Mental Model, Livepeer Protocol, Livepeer Network, Glossary, and Whitepaper. Its job is to orient arriving readers and route them to the section that matches their interest; it contains no standalone body content.

---

### Livepeer Overview · `v2/about/livepeer-overview`

**Status**: current
**Section/group**: About Livepeer
**File size**: 10683 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Overview | yes |
| description | An overview of the Livepeer protocol and network. | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (with `pageVariant: overview`) or `navigation` — context-dependent |
| audience | `general` | no — non-canonical token |
| purpose | `overview` | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType: overview` — deprecated; recommended canonical: `concept` with `pageVariant: overview`
- `audience: general` — non-canonical token
- `purpose: overview` — deprecated; canonical replacement: `orient` or `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Livepeer Protocol
- H2: Livepeer Network
- H2: Protocol vs Network
- H4: On-chain vs Off-chain
- H2: Livepeer Nodes, Actors & Roles

**Content summary**:
This page provides a high-level orientation to Livepeer as a "full-stack decentralised infrastructure platform" covering the Protocol/Network distinction, actor roles (Orchestrators, Gateways, Delegators), and on-chain vs off-chain boundaries. It serves first-time readers who need a plain-language mental model before proceeding to more detailed sections. The page also contains a substantial block of legacy draft notes inside an `<expandable>` component that has not been removed.

---

### Livepeer Core Concepts · `v2/about/core-concepts`

**Status**: current
**Section/group**: About Livepeer
**File size**: 5408 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Core Concepts | yes |
| description | A high-level introduction to the key concepts and architecture of the Livepeer Real-time AI & Video Network | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H3: Overview and separation *(in body text before Tabs component)*
- H3: Definitions
- H1: Overview *(duplicate — appears after Tabs component, H1 mid-page is a structural issue)*
- H1: Core Concepts *(duplicate H1 mid-page)*
- H2: Livepeer Protocol
- H2: Livepeer Network
- H2: Protocol vs Network
- H1: On-chain vs Off-chain *(H1 used as a section divider mid-page — structural issue)*
- H1: Livepeer Actors *(H1 used mid-page — structural issue)*

**Content summary**:
This page introduces the Protocol/Network separation and the three main actor types (Orchestrators, Gateways, Delegators) through a tabbed component pulling in four composable MDX partials (Overview, Protocol, Network, Actors). It is designed as a conceptual orientation for arriving readers at the discover stage. The page has structural heading inconsistencies (multiple H1s mid-page, H3 opening before Tabs) and placeholder note components (`<Note>INSERT LIVEPEER ACTOR DIAGRAM HERE`) that indicate the page is not yet editorially complete.

---

### Livepeer Mental Model · `v2/about/mental-model`

**Status**: current
**Section/group**: About Livepeer
**File size**: 20966 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | The Livepeer Stack and Mental Model | yes |
| description | A high-level introduction to the key concepts workings of the Livepeer open, on-demand AI & Media infrastructure substrate and the distributed crypto-primitive coordination system. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H1: Livepeer Mental Model
- H3: Infra Layers *(H3 with no H2 parent — structural issue)*
- H2: Livepeer as an OSI-Like Stack
- H3: Network & Protocol Stack
- H3: Platform and Application Stack
- H2: Middleware & Integrations

*(Accordion titles: Layer 1–10 detail layers; not counted as headings)*

**Content summary**:
This page presents Livepeer as a layered architecture analogous to the OSI model, mapping Protocol, Network, and Application/Platform layers across 10 accordion-based tiers. It is targeted at technically-oriented arriving readers (founders, developers, builders) who want an architectural frame before reading role-specific tabs. The page is substantive and well-structured but contains a very large commented-out legacy block (spanning lines ~400–689) that inflates file size without contributing to body content.

---

### Protocol Overview · `v2/about/livepeer-protocol/overview`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 14425 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Protocol Overview | yes |
| description | This section outlines the design, contract architecture, staking & reward mechanisms, incentive alignment and governance model of the on-chain Livepeer Protocol... | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (with `pageVariant: overview`) |
| audience | `general` | no — non-canonical token |
| purpose | `overview` | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType: overview` — deprecated; recommended: `concept` with `pageVariant: overview`
- `audience: general` — non-canonical token
- `purpose: overview` — deprecated; canonical replacement: `orient`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Protocol Design 101
- H2: Livepeer Whitepaper
- H2: Core Design Goals
- H2: Guiding Principles
- H2: Livepeer Protocol
- H2: Actors and Roles
- H2: Protocol Architecture

**Content summary**:
This is the section overview page for the Livepeer Protocol group, orienting the reader to the Protocol's purpose (on-chain coordination, security, incentives) before routing them to the six sub-pages via navigation cards. It explains the protocol's design philosophy, references the whitepaper, and provides an actor/role summary table. It serves arriving readers at the discover stage who want to understand what the protocol governs before diving into mechanism specifics.

---

### Core Mechanisms · `v2/about/livepeer-protocol/core-mechanisms`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 24972 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Core Mechanisms and Functions | yes |
| description | The Livepeer protocol secures a decentralised marketplace for verifiable media and AI compute through a tightly coupled set of economic and cryptographic systems… | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Mechanism Objectives
- H2: Protocol Features
- H2: Protocol Actors
- H2: Protocol Mechanisms
- H3: Mechanism Details *(leads into Tabs: Rounds / Staking / Rewards / Payments / Upgrades / Other)*

*(Tab titles treated as sub-sections: Rounds, Staking, Rewards, Payments, Upgrades, Other — each contains H3 content)*

**Content summary**:
This page explains the core cryptoeconomic mechanisms of the Livepeer Protocol — rounds, staking/delegation, reward distribution, probabilistic micropayments, and upgradeability — through a tabbed component. It serves readers at the discover/evaluate stage who are assessing whether Livepeer's protocol design is sound before committing capital or infrastructure. The page is substantially complete but `purpose: concept` is deprecated and `lifecycleStage` is missing.

---

### Livepeer Token · `v2/about/livepeer-protocol/livepeer-token`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 13317 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Token | yes |
| description | Livepeer Token (LPT) is the native proof-of-stake token of the Livepeer network… | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain` or `learn`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: LP Token
- H3: Token Purpose
- H3: Supply & Distribution
- H3: Dynamic Inflation Model
- H3: Rewards Distribution
- H3: Governance
- H3: Treasury
- H2: Technical Mechanics
- H3: Bonding & Unbonding
- H3: Slashing & Penalties
- H3: Additional Resources
- H2: Economic Flow Diagrams

**Content summary**:
This page explains LPT's three functions (staking eligibility, inflation rewards, governance weight), the token's supply/distribution history (Merkle Mine, current ~37.9M supply), and the dynamic inflation model. It serves token holders and network researchers at the discover stage evaluating whether LPT staking is worthwhile. Several sections contain `#TODO` markers and a `<Danger>` component indicating content that should be moved to the Delegators/LP Token tab — the page is partially complete.

---

### Governance Model · `v2/about/livepeer-protocol/governance-model`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 15850 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Governance Model | yes |
| description | This page describes the on-chain governance model which provides a permissionless, transparent, and community-driven framework for upgrading and governing the Livepeer protocol… | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Governance
- H3: Governance Functions
- H3: Governance Process *(leads into Steps component)*
- H3: Livepeer Improvement Proposals (LIPs)
- H3: On-Chain Contracts
- H3: Key Roles & Stakeholders
- H3: Visualising the Governance Process
- H2: Related Resources

**Content summary**:
This page describes Livepeer's hybrid on-chain/off-chain governance model — the LIP lifecycle from forum discussion through on-chain vote to execution, stake-weighted voting rules (quorum: 33%, threshold: >50%), and the roles of the Treasury, Foundation, and SPEs. It serves readers at the discover stage who need to assess whether the protocol's direction is community-controlled before committing capital or engineering time. The page is substantively complete for a discover-stage introduction.

---

### Treasury · `v2/about/livepeer-protocol/treasury`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 16649 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Treasury | yes |
| description | This page outlines how the treasury accumulates funds, how disbursements are authorised, and how its role is evolving across the protocol's roadmap. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Genesis
- H2: Objectives
- H2: Funding Sources
- H2: Fund Usage
- H2: Governance
- H3: Reporting & Transparency
- H2: Livepeer Foundation Role
- H2: Contract Architecture
- H2: Improvement Discussions
- H2: Further Resources

**Content summary**:
This page explains how the Livepeer on-chain treasury was created (LIP-89/LIP-92), how it is funded (25% of inflation, slashing penalties, fee remainders), how disbursements are governed (same model as protocol proposals), and the Foundation's stewardship role. It serves arriving readers who need to assess the organisation behind the protocol (J6 in the audience design). The page is substantively complete and one of the better-developed pages in the About tab.

---

### Protocol Economics · `v2/about/livepeer-protocol/economics`

**Status**: current
**Section/group**: Livepeer Protocol
**File size**: 6990 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Protocol Economics | yes |
| description | Learn how LPT, staking, inflation, rewards, fees, and payment flows shape the Livepeer protocol economy. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Money Flow: LPT Token Economics
- H3: 1. Staking Flow (Delegators → Orchestrators)
- H3: 2. Reward Flow (Minter → Orchestrators → Delegators)
- H3: 3. Payment Flow (Broadcasters → Orchestrators)
- H3: 4. Fee Flow (Broadcasters → Orchestrators → Delegators)
- H3: 5. Withdrawal Flows
- H2: Client Integration
- H2: Gas Optimisation Strategies
- H3: 1. Pool Hints
- H3: 2. Batch Operations
- H3: 3. Dynamic Gas Pricing
- H2: Summary: Complete Money Flow
- H2: Notes

**Content summary**:
This page provides a technical walk-through of all five Livepeer money flows (staking, reward, payment, fee, withdrawal) including contract function signatures and implementation details. The content sits at intermediate-to-advanced technical depth — it reads more as implementation documentation than a discovery-stage economic overview. It is substantively complete as a reference but is misaligned with the About tab's `discover` lifecycle positioning for most readers.

---

### Technical Architecture (Protocol) · `v2/about/livepeer-protocol/technical-architecture`

**Status**: stub
**Section/group**: Livepeer Protocol
**File size**: 9876 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Technical Overview | yes |
| description | A technical overview of the Livepeer protocol. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Protocol Architecture *(contains Mermaid diagram)*
- H2: System Overview *(contains table)*
- H2: System Diagram *(contains Mermaid diagram)*
- H2: Actor & Incentive Model *(empty section — no body content)*
- H2: Trust & Verification Model *(empty section — no body content)*
- H2: Job Lifecycle *(empty section — no body content)*
- H2: Governance & Treasury *(empty section — no body content)*
- H2: Protocol References *(placeholder note only)*

**Word count assessment (stub)**: The page has Mermaid diagrams and a table, but stripping component tags, code blocks, and the commented-out legacy block leaves fewer than 100 words of prose body content in the live sections. Five of eight H2 sections have no body text. Status: **stub**.

**Content summary**:
This page is intended to provide the technical contract architecture of the Livepeer Protocol, with two Mermaid diagrams showing the contract dependency graph and the system overview. However, five of its eight sections are empty (Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury, Protocol References contain no prose content). The page is a structural skeleton awaiting content completion.

---

### Network Overview · `v2/about/livepeer-network/overview`

**Status**: stub
**Section/group**: Livepeer Network
**File size**: 2223 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Network Overview | yes |
| description | An overview of the Livepeer network and its components. | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (with `pageVariant: overview`) |
| audience | `general` | no — non-canonical token |
| purpose | `overview` | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType: overview` — deprecated; recommended: `concept` with `pageVariant: overview`
- `audience: general` — non-canonical token
- `purpose: overview` — deprecated; canonical replacement: `orient`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Network Components
- H3: Node Types
- H3: Core Components

**Word count assessment (stub)**: After stripping frontmatter, the page has approximately 150 words of prose — however, the "Core Components" section lists items with no explanatory content (bullet list with bare labels, several items incomplete: "Broadcast Sessions Manager:", "Orchestrator", "Transcoder", "AI Gateway", "AI Workers" have no body text). Treating incomplete bullets as non-body content, the substantive prose is borderline; treated as **stub** given the significant incompleteness.

**Content summary**:
This page is the section entry point for the Livepeer Network group, introducing node types and core components. It is very short and largely incomplete: the Core Components section lists items without definitions, and the page functions as a structural placeholder rather than a usable overview. It does not route to sub-pages via navigation cards (unlike the Protocol overview), making it a weak entry point for the Network section.

---

### Actors Overview · `v2/about/livepeer-network/actors`

**Status**: current
**Section/group**: Livepeer Network
**File size**: 5046 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Actors Overview | yes |
| description | Who participates in Livepeer, what each role does, and how roles interact. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Core Actors *(no H1 — body begins immediately after frontmatter with a sentence fragment "and performs actions defined by the system...")*
- H2: Role Summary
- H3: Developers And Applications
- H3: Gateway Operators
- H3: Orchestrator Operators
- H3: Delegators
- H2: Interaction Pattern
- H2: Actor Pages
- H2: Why Role Separation Matters
- H2: Related Pages

**Content summary**:
This page describes the three core protocol actors (Orchestrators, Delegators, Gateways) and introduces Developers/Applications as a fourth participation category, explaining each role's responsibilities and how they interact in the job flow. It serves arriving readers at the discover stage mapping Livepeer's participation model. The page starts with a sentence fragment (no H1, body begins mid-sentence with "and performs actions defined by the system"), which is a structural defect.

---

### Job Lifecycle · `v2/about/livepeer-network/job-lifecycle`

**Status**: current
**Section/group**: Livepeer Network
**File size**: 10432 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Job Lifecycle | yes |
| description | This page describes the end-to-end "compute job" as a state machine… | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H3: Lifecycle Narrative *(no H1 or H2 precedes this — structural issue)*
- H3: State machine diagram
- H3: Events and transitions
- H3: Job Lifecycle (video vs AI)

**Content summary**:
This page traces the full job lifecycle as a 7-step state machine (Ingest → Discovery → Price/Session → Dispatch → Result/Verification → Settlement → Reward), including a Mermaid state diagram and events table. It also covers the difference between video transcoding and AI inference workflows. It serves technical readers (developers, gateway operators, orchestrators) at the discover/evaluate stage who want to understand the end-to-end flow before committing to a role. The page lacks H1 and H2 headings, opening with H3 directly.

---

### Marketplace · `v2/about/livepeer-network/marketplace`

**Status**: current
**Section/group**: Livepeer Network
**File size**: 6488 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Marketplace | yes |
| description | How the Livepeer Network marketplace matches demand and supply for real-time media compute: transcoding and AI inference, including routing, pricing, and settlement. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Marketplace overview
- H2: Demand: client workloads
- H2: Supply: Orchestrator nodes
- H2: Routing logic
- H2: Price discovery
- H2: Payments and settlement
- H2: Credit system extensions
- H2: Observability
- H2: Protocol–market boundaries
- H2: Future upgrades (LIPs proposed)
- H2: See also
- H2: References

**Content summary**:
This page explains how Livepeer's decentralised marketplace operates — continuous off-chain job routing, Orchestrator pricing/availability advertisement, payment via ETH tickets or credits, and the boundary between the protocol layer and marketplace layer. It serves arriving readers (founders, builders, gateway operators) who need to understand Livepeer as a demand/supply marketplace before evaluating it for their use case. The page is well-structured and substantively complete.

---

### Technical Architecture (Network) · `v2/about/livepeer-network/technical-architecture`

**Status**: current
**Section/group**: Livepeer Network
**File size**: 6249 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Network Technical Architecture | yes |
| description | Technical stack of the Livepeer Network: node types, gateway infrastructure, APIs, CLI, SDKs, and monitoring… | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Architecture layers *(Mermaid diagram)*
- H2: Orchestrator node
- H3: Key components
- H3: Deployment modes
- H3: Tools
- H2: Worker layer
- H2: Gateway infrastructure
- H2: APIs
- H2: CLI and SDKs
- H2: Monitoring and observability
- H2: Deployment examples
- H2: See also
- H2: References

**Content summary**:
This page outlines the full technical stack of the Livepeer Network at the node, gateway, and client level — covering the go-livepeer Orchestrator binary, worker types (FFmpeg transcoder, Python inference, WebRTC plugin), gateway codebases (Studio, Daydream, Cascade), REST/gRPC/GraphQL APIs, CLI/SDKs, and monitoring tools. It serves technical architects and operators at the evaluate/setup stage. It is well-structured and substantively complete.

---

### Interfaces · `v2/about/livepeer-network/interfaces`

**Status**: current
**Section/group**: Livepeer Network
**File size**: 5871 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Network Interfaces | yes |
| description | How to interact with the Livepeer Network and protocol: REST and gRPC APIs, GraphQL, JS SDK, CLI, and smart contract interfaces. | yes |
| pageType | `concept` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement: `explain` (or `reference` — this page functions like a reference page for interface types)
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Interface categories
- H2: REST API (Livepeer Studio)
- H2: gRPC API (Gateway nodes)
- H2: GraphQL Explorer API
- H2: JS SDK
- H2: CLI
- H2: Smart contract interfaces
- H2: Workflow examples
- H2: See also
- H2: References

**Content summary**:
This page catalogs all six access interfaces for the Livepeer Network (REST, gRPC, GraphQL, JS SDK, CLI, smart contracts), providing code examples and endpoint references for each. It serves developers and technical operators who need to identify which interface to use for their integration pattern. The page is complete and well-structured; it sits at the boundary between `concept` (explaining what interfaces exist) and `reference` (providing lookup data for endpoints and function signatures).

---

### Livepeer Whitepaper · `v2/about/resources/livepeer-whitepaper`

**Status**: current
**Section/group**: Resources
**File size**: 4009 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Whitepaper | yes |
| description | Read the original Livepeer whitepaper and understand how its decentralised video vision evolved into the current network. | yes |
| pageType | `reference` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `reference` | yes — `reference` is canonical |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H3: Livepeer Now *(no H1 or H2 precedes — structural issue)*

**Content summary**:
This page provides a summary of the 2017 Livepeer whitepaper's key ideas (incentivized participation, trustless verification, open participation, economic security via token) and a brief note on how the network has evolved. It serves researchers and evaluators who want foundational context on Livepeer's original design intent. The page functions primarily as a link-out to the whitepaper GitHub, with contextual prose; it is not a transcript or embedded document. A `<Note>` component confirms the transcript is unavailable in this branch.

---

### Livepeer Glossary · `v2/about/resources/livepeer-glossary`

**Status**: stub
**Section/group**: Resources
**File size**: 11543 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Glossary | yes |
| description | A comprehensive glossary of terms used in the Livepeer Real-time AI & Video Network | yes |
| pageType | `glossary` | DEPRECATED: maps to `reference` (with `pageVariant: compendium`) |
| audience | `general` | no — non-canonical token |
| purpose | `glossary` | DEPRECATED: maps to `reference` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType: glossary` — deprecated; canonical replacement: `reference` with `pageVariant: compendium`
- `audience: general` — non-canonical token
- `purpose: glossary` — deprecated; canonical replacement: `reference`
- `lifecycleStage` — field missing entirely

**Heading structure**:
- (Multiple term sections — no formal heading structure before the "====" divider)
- H1: Livepeer Core Terms
- H2: (various term headers using H3)
- H1: Actors & Network Roles
- H1: Core Network Concepts
- H1: Web3 Terms
- H1: Video Engineering Terms
- H1: AI Terms
- H1: Payments & Economics
- H1: Operational Terms
- H1: Other Terms

**Word count assessment (stub)**: The page has two content sections — an early unformatted brainstorm list (lines 29–63) and a longer draft glossary section. The brainstorm section begins with "Terms (Actors & Network)" and contains bare lists. A `<Danger>` component flags "Terms not verified, brainstorm list only." The substantive glossary entries are incomplete (multiple "Health Check" entry ends mid-sentence: "A verification check to ensure orchestrators produce correct r"). Status: **stub** — the page exists and has substantial term entries but is explicitly marked as unverified draft content.

**Content summary**:
This page is intended to be a comprehensive glossary for the About tab covering actors, network concepts, web3 terminology, video engineering, AI, economics, and operational terms. It exists in two interleaved states: an early brainstorm list and a more developed term-by-term draft. The page is explicitly flagged as unverified draft content and several entries are incomplete. It duplicates scope with `v2/about/resources/compendium/glossary` (which is the newer, structured replacement).

---

### Blockchain Contracts · `v2/about/resources/blockchain-contracts`

**Status**: current
**Section/group**: Resources
**File size**: 31186 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Blockchain Contracts | yes |
| description | An overview of the Livepeer protocol blockchain contracts. | yes |
| pageType | NOT SET | MISSING |
| audience | `general` | no — non-canonical token |
| purpose | `concept` | DEPRECATED: maps to `explain` or `reference` — this page is primarily reference content |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `pageType` — field missing entirely (no value set)
- `audience: general` — non-canonical token
- `purpose: concept` — deprecated; canonical replacement should be `reference` (page provides structured lookup data for contract addresses and ABIs)
- `lifecycleStage` — field missing entirely

**Heading structure**:
- H2: Contract Interaction Architecture *(Mermaid diagram)*
- H2: Core Protocol Contracts
- H4: Controller
- H4: BondingManager
- H4: TicketBroker
- H4: RoundsManager
- H4: Minter
- H4: ServiceRegistry
- H4: AIServiceRegistry
- H2: Token and Utility Contracts
- H4: LivepeerToken (LPT)
- H4: BridgeMinter
- H4: L1LPTGateway / L2LPTGateway
- H4: LivepeerTokenFaucet
- H2: Governance Contracts
- H4: BondingVotes
- H4: Governor
- H4: LivepeerGovernor
- H4: Treasury
- H2: Full Address Reference

**Content summary**:
This is the most technically complete page in the About tab, providing contract addresses (verified on-chain 18 March 2026), function signatures, purpose descriptions, and architectural diagrams for all 15+ Livepeer Protocol contracts across Arbitrum One and Ethereum Mainnet. It serves technical readers — developers, gateway operators, protocol researchers — who need precise contract references. The page is well-developed and appears to be authoritative, having been verified directly on-chain. The `pageType` field is missing.

---

### Technical Roadmap · `v2/about/resources/technical-roadmap`

**Status**: stub
**Section/group**: Resources
**File size**: 793 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Technical Roadmap | yes |
| description | Review the current Livepeer roadmap posts covering network and product direction. | yes |
| pageType | `reference` | yes |
| audience | `general` | no — non-canonical token |
| purpose | `reference` | yes — `reference` is canonical |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `audience: general` — non-canonical token
- `lifecycleStage` — field missing entirely

**Heading structure**:
No headings found.

**Word count assessment (stub)**: The page body consists of two URLs (blog links) with no prose. After stripping, word count is 4 words ("Use these roadmap posts to..."). Status: **stub**.

**Content summary**:
This page is a near-empty placeholder that provides two blog post links covering Livepeer's roadmap direction (Cascade vision and real-time AI network update). It has no headings, no explanatory content, and no summary of what the roadmap covers. The page needs substantial content to serve readers who arrive wanting to understand Livepeer's development direction.

---

### Compendium Glossary · `v2/about/resources/compendium/glossary`

**Status**: current
**Section/group**: Resources > Compendium
**File size**: 49862 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | About Livepeer — Glossary | yes |
| description | Key terms used in the Livepeer About section — protocol architecture, network roles, governance, and ecosystem concepts. | yes |
| pageType | `reference` | yes |
| audience | `everyone` | no — `everyone` is not a canonical audience token |
| purpose | `reference` | yes — `reference` is canonical |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |
| pageVariant | `compendium` | yes — valid variant for `reference` |
| status | `draft` | note: uses page-level `status: draft` field, not `draft: true` frontmatter field — does not trigger draft status for this scan |

**Frontmatter completeness**: incomplete
**Frontmatter issues**:
- `audience: everyone` — non-canonical token; not in the 7-token canonical set
- `lifecycleStage` — field missing entirely

**Heading structure**:
(File is 49862 bytes — content was read partially. From the frontmatter and structure visible: page uses `SearchTable` components for structured term lookup. No heading structure readable from the first 30 lines; body is component-driven.)

**Content summary**:
This is the newer structured glossary for the About tab, using `SearchTable` components for term lookup and organised as a compendium reference. It is the canonical replacement for `livepeer-glossary.mdx` (the legacy glossary). The page has a companion `glossary-data.json` pre-commit mechanism for AI/crawler discoverability. It is marked `status: draft` in the frontmatter (page-level field, not the `draft: true` field used for unpublished status) — this is a metadata-completeness note for the audit phase. The page is the largest file in the About tab at 49,862 bytes.

---

## Duplicate Nav Entries

No pages appear in more than one nav group within the About tab.

Note: `v2/about/core-concepts` and `v2/about/livepeer-network/actors` appear in an additional nav group elsewhere in docs.json (lines 3180–3185, in what appears to be a different tab's "Learn" group referencing About content). These are cross-tab nav inclusions, not duplicates within the About tab itself.

| Path | Groups |
|---|---|
| `v2/about/core-concepts` | About Livepeer > About Livepeer (primary); also referenced in a secondary nav group outside About tab |
| `v2/about/livepeer-network/actors` | About Livepeer > Livepeer Network (primary); also referenced in a secondary nav group outside About tab |

---

## Workspace Artefacts

Files under `v2/about/_workspace/` — path listing only, not scanned as production pages.

| Path | Notes |
|---|---|
| `v2/about/_workspace/deprecated/livepeer-governance.mdx` | Deprecated governance page |
| `v2/about/_workspace/deprecated/livepeer-protocol/technical-overview.mdx` | Deprecated technical overview |
| `v2/about/_workspace/deprecated/livepeer-token-economics.mdx` | Deprecated token economics page |

---

## Unlisted Files On Disk (not in docs.json navigation)

These files exist in `v2/about/` but are not registered in docs.json. They are not production pages. Listed for reference.

| Path | Notes |
|---|---|
| `v2/about/index.mdx` | Generated table-of-contents index (auto-generated by script) — not a production page |
| `v2/about/faq-about.mdx` | FAQ page — exists on disk, not in docs.json navigation |
| `v2/about/core-concepts/concepts/actors.mdx` | Actor concepts partial or staging file |
| `v2/about/livepeer-network/demand-side.mdx` | Demand-side page — on disk, not in nav |
| `v2/about/livepeer-network/fee-flow.mdx` | Fee flow page — on disk, not in nav |
| `v2/about/livepeer-network/livepeer-actors/delegators.mdx` | Delegators actor page — on disk, not in nav |
| `v2/about/livepeer-network/livepeer-actors/end-users.mdx` | End users actor page — on disk, not in nav |
| `v2/about/livepeer-network/livepeer-actors/gateways.mdx` | Gateways actor page — on disk, not in nav |
| `v2/about/livepeer-network/livepeer-actors/orchestrators.mdx` | Orchestrators actor page — on disk, not in nav |
| `v2/about/livepeer-network/marketplace.mdx` | Also in nav — cross-check: this IS in nav. Listed in error; remove. |
| `v2/about/livepeer-network/scaling.mdx` | Scaling page — on disk, not in nav |
| `v2/about/livepeer-network/supply-side.mdx` | Supply-side page — on disk, not in nav |
| `v2/about/resources/dep-blockchain-contracts.mdx` | Deprecated blockchain contracts page |
| `v2/about/resources/gateways-vs-orchestrators.mdx` | Comparison page — on disk, not in nav |

---

## v1 Reference Paths

v1 paths that relate to About section content — not scanned, listed for reference only. No dedicated v1 "About" tab was identified in docs.json; the equivalent conceptual content appears under v1 developers/core-concepts.

| v1 path |
|---|
| `v1/developers/core-concepts/livepeer-network` |
| `v1/developers/core-concepts/livepeer-network/delegators` |
| `v1/developers/core-concepts/livepeer-network/gateways` |
| `v1/developers/core-concepts/livepeer-network/orchestrators` |

---

## Frontmatter Issues Summary

| Page path | Issue type | Current value | Canonical replacement |
|---|---|---|---|
| `v2/about/portal` | DEPRECATED pageType | `landing` | `navigation` (with `pageVariant: portal`) |
| `v2/about/portal` | DEPRECATED purpose | `landing` | `orient` |
| `v2/about/portal` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 — multi-audience |
| `v2/about/portal` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-overview` | DEPRECATED pageType | `overview` | `concept` (with `pageVariant: overview`) |
| `v2/about/livepeer-overview` | DEPRECATED purpose | `overview` | `orient` |
| `v2/about/livepeer-overview` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-overview` | MISSING lifecycleStage | — | `discover` |
| `v2/about/core-concepts` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/core-concepts` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/core-concepts` | MISSING lifecycleStage | — | `discover` |
| `v2/about/mental-model` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/mental-model` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/mental-model` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/overview` | DEPRECATED pageType | `overview` | `concept` (with `pageVariant: overview`) |
| `v2/about/livepeer-protocol/overview` | DEPRECATED purpose | `overview` | `orient` |
| `v2/about/livepeer-protocol/overview` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/overview` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/core-mechanisms` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/core-mechanisms` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/core-mechanisms` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/livepeer-token` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/livepeer-token` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/livepeer-token` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/governance-model` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/governance-model` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/governance-model` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/treasury` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/treasury` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/treasury` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/economics` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/economics` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/economics` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-protocol/technical-architecture` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-protocol/technical-architecture` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-protocol/technical-architecture` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/overview` | DEPRECATED pageType | `overview` | `concept` (with `pageVariant: overview`) |
| `v2/about/livepeer-network/overview` | DEPRECATED purpose | `overview` | `orient` |
| `v2/about/livepeer-network/overview` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/overview` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/actors` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-network/actors` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/actors` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/job-lifecycle` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-network/job-lifecycle` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/job-lifecycle` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/marketplace` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-network/marketplace` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/marketplace` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/technical-architecture` | DEPRECATED purpose | `concept` | `explain` |
| `v2/about/livepeer-network/technical-architecture` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/technical-architecture` | MISSING lifecycleStage | — | `discover` |
| `v2/about/livepeer-network/interfaces` | DEPRECATED purpose | `concept` | `explain` (or `reference`) |
| `v2/about/livepeer-network/interfaces` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/livepeer-network/interfaces` | MISSING lifecycleStage | — | `discover` |
| `v2/about/resources/livepeer-whitepaper` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/resources/livepeer-whitepaper` | MISSING lifecycleStage | — | `discover` |
| `v2/about/resources/livepeer-glossary` | DEPRECATED pageType | `glossary` | `reference` (with `pageVariant: compendium`) |
| `v2/about/resources/livepeer-glossary` | DEPRECATED purpose | `glossary` | `reference` |
| `v2/about/resources/livepeer-glossary` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/resources/livepeer-glossary` | MISSING lifecycleStage | — | `discover` |
| `v2/about/resources/blockchain-contracts` | MISSING pageType | — | `reference` (recommended) |
| `v2/about/resources/blockchain-contracts` | DEPRECATED purpose | `concept` | `reference` |
| `v2/about/resources/blockchain-contracts` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/resources/blockchain-contracts` | MISSING lifecycleStage | — | `discover` or `evaluate` |
| `v2/about/resources/technical-roadmap` | NON-CANONICAL audience | `general` | see OPEN ITEM 1 |
| `v2/about/resources/technical-roadmap` | MISSING lifecycleStage | — | `discover` |
| `v2/about/resources/compendium/glossary` | NON-CANONICAL audience | `everyone` | see OPEN ITEM 1 |
| `v2/about/resources/compendium/glossary` | MISSING lifecycleStage | — | `discover` |

**Note on `audience: general` / `audience: everyone`**: These non-canonical values appear on every production page in the About tab. This is a systemic gap, not a page-by-page exception. Resolution depends on OPEN ITEM 1 from the canonical audience design (`canonical-about-audience-design.md`) — the multi-audience frontmatter schema decision must be made before these can be corrected.

**Note on `purpose: concept`**: This deprecated value appears on 13 of 22 pages. The canonical replacement is `explain`. These are straightforward value replacements once the frontmatter update pass is scheduled.

**Note on `lifecycleStage` missing**: 100% of pages are missing this field. This is a systemic gap across the entire About tab — no page has `lifecycleStage` set. All About pages would be `discover`; a few (notably `blockchain-contracts`, `technical-architecture` network) could be `evaluate`.

---

## Status Summary Table

| Page path | Section | Status | pageType | Frontmatter complete? |
|---|---|---|---|---|
| `v2/about/portal` | About Livepeer | current | `landing` (DEPRECATED) | incomplete |
| `v2/about/livepeer-overview` | About Livepeer | current | `overview` (DEPRECATED) | incomplete |
| `v2/about/core-concepts` | About Livepeer | current | `concept` | partial |
| `v2/about/mental-model` | About Livepeer | current | `concept` | partial |
| `v2/about/livepeer-protocol/overview` | Livepeer Protocol | current | `overview` (DEPRECATED) | incomplete |
| `v2/about/livepeer-protocol/core-mechanisms` | Livepeer Protocol | current | `concept` | partial |
| `v2/about/livepeer-protocol/livepeer-token` | Livepeer Protocol | current | `concept` | partial |
| `v2/about/livepeer-protocol/governance-model` | Livepeer Protocol | current | `concept` | partial |
| `v2/about/livepeer-protocol/treasury` | Livepeer Protocol | current | `concept` | partial |
| `v2/about/livepeer-protocol/economics` | Livepeer Protocol | current | `concept` | partial |
| `v2/about/livepeer-protocol/technical-architecture` | Livepeer Protocol | stub | `concept` | partial |
| `v2/about/livepeer-network/overview` | Livepeer Network | stub | `overview` (DEPRECATED) | incomplete |
| `v2/about/livepeer-network/actors` | Livepeer Network | current | `concept` | partial |
| `v2/about/livepeer-network/job-lifecycle` | Livepeer Network | current | `concept` | partial |
| `v2/about/livepeer-network/marketplace` | Livepeer Network | current | `concept` | partial |
| `v2/about/livepeer-network/technical-architecture` | Livepeer Network | current | `concept` | partial |
| `v2/about/livepeer-network/interfaces` | Livepeer Network | current | `concept` | partial |
| `v2/about/resources/livepeer-whitepaper` | Resources | current | `reference` | incomplete |
| `v2/about/resources/livepeer-glossary` | Resources | stub | `glossary` (DEPRECATED) | incomplete |
| `v2/about/resources/blockchain-contracts` | Resources | current | MISSING | incomplete |
| `v2/about/resources/technical-roadmap` | Resources | stub | `reference` | incomplete |
| `v2/about/resources/compendium/glossary` | Resources > Compendium | current | `reference` | incomplete |
