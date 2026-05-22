# LP Token / Delegators — Content Scan

**Tab**: LP Token
**Scan date**: 2026-03-23
**Docs.json source**: v2 navigation block
**v2/lpt/ folder scanned**: yes
**Audience design source**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/lp-token/collated/canonical-lp-token-audience-design.md`
**Status**: DRAFT — awaiting human review

---

## Pre-flight Verification

Output compatibility with `structure-audit.md` confirmed before writing. This scan provides:
- `status` per page: current / draft / stub / empty (stubs explicitly flagged)
- `pageType` per page with canonical/deprecated/missing flags
- Section/group context (nav group from docs.json)
- Heading structure per page

---

## Summary

**Total pages in docs.json navigation (LP Token tab)**: 17
**Files found on disk (v2/lpt/ production paths)**: 17
**Empty (in nav, no file)**: 0
**Stubs (<100 words body content)**: 3
**Draft (draft: true in frontmatter)**: 0
**Note on glossary**: glossary.mdx has `status: draft` in frontmatter — treated as draft for this scan
**Current**: 13
**Pages with deprecated pageType values**: 4 (`landing`, `overview` × 3)
**Pages with incomplete frontmatter**: 9
**Workspace artefacts listed**: 4 (files under `v2/lpt/delegation/TO-ADD/`)

---

## Context Block (Filled)

```
TAB:        LP Token / Delegators
TAB_FOLDER: v2/lpt/
DOCS_JSON:  docs.json
SCAN_DATE:  2026-03-23
```

---

## Navigation Structure (from docs.json)

The LP Token tab is registered at `"tab": "LP Token"` under the anchor `"Delegators & LPT"` with five nav groups:

| Nav group | Pages |
|---|---|
| About LPT | token-portal, about/overview, about/purpose, about/tokenomics, about/mechanics |
| Delegating LPT | delegation/getting-started, delegation/overview, delegation/delegation-economics, delegation/about-delegators, delegation/delegation-guide |
| Governance | governance/overview, governance/model, governance/processes |
| Livepeer Treasury | treasury/overview, treasury/proposals, treasury/allocations |
| Resources | resources/delegator-videos-and-blogs, resources/exchanges, resources/lpt-eth-usage, resources/compendium/glossary |

**Note**: `v2/lpt/index.mdx` is on disk but NOT in the docs.json navigation. It is a generated table-of-contents file — treated as workspace artefact (generated file, not a production page).

---

## Page Inventory

Pages are listed in docs.json navigation order.

---

### LP Token Home Portal · `v2/lpt/token-portal.mdx`

**Status**: current
**Section/group**: About LPT
**File size**: 4,807 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LP Token Home Portal | yes |
| description | Welcome To The Token Portal: Explore, Navigate, Delegate, Vote | yes |
| pageType | `landing` | DEPRECATED: maps to `navigation` |
| audience | `delegator` | yes |
| purpose | `landing` | DEPRECATED: not in canonical enum. Maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose and pageType deprecated)
**Frontmatter issues**: pageType `landing` → canonical `navigation`; purpose `landing` → canonical `orient`; lifecycleStage missing

**Heading structure**:
- No H1
- No H2
- No H3
- (Page is built entirely from MDX portal components: `PortalHeroContent`, `PortalContentContainer`, `PortalSectionHeader`. No markdown headings found.)

**Content summary**:
This page is the tab entry point / portal for the LP Token section. It orients first-time visitors with a hero, four navigational card links (token overview, delegation, governance, treasury), and external links to Livepeer Explorer and treasury tools. Its job is to route the reader to the correct section rather than convey information directly — it sits at the very beginning of the reader's journey.

---

### LPT Overview · `v2/lpt/about/overview.mdx`

**Status**: current
**Section/group**: About LPT
**File size**: 5,847 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LPT Overview | yes |
| description | Comprehensive architectural and economic overview of the Livepeer Token (LPT) within the Livepeer Protocol. | yes |
| pageType | `overview` | DEPRECATED: maps to `navigation` or `concept` (context: this page explains a mechanism → canonical `concept`) |
| audience | `delegator` | yes |
| purpose | `overview` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; pageType and purpose deprecated)
**Frontmatter issues**: pageType `overview` → canonical `concept`; purpose `overview` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1 (page has no top-level markdown H1)
- H2: Executive Summary
- H2: 1. Formal Definition
- H2: 2. Architectural Context
- H3: 2.1 Protocol Layer (On-Chain)
- H3: 2.2 Network Layer (Off-Chain)
- (Further headings inside Accordion component — not visible in standard rendering):
  - H2: 3. Staking and Economic Weight
  - H2: 4. Inflation Mechanism Overview
  - H2: 5. Delegation Model
  - H2: 6. Governance Authority
  - H2: 7. Security Model
  - H2: 8. Economic Tradeoffs
- H2: 9. System Interaction Diagram
- H2: 10. Operational Considerations
- H2: References

**Content summary**:
This page formally defines LPT as a stake-weighted coordination asset and maps its functional domains: staking security, inflation-based reward distribution, delegated capital allocation, governance voting, and treasury stewardship. It covers the protocol architecture, formal mathematical definitions of economic weight and inflation, and the on-chain/off-chain separation. It sits in the reader's early evaluation stage — a reader who wants a rigorous architectural overview before deciding whether to participate.

---

### Livepeer Token Purpose · `v2/lpt/about/purpose.mdx`

**Status**: current
**Section/group**: About LPT
**File size**: ~7,200 bytes (estimated)

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Token Purpose | yes |
| description | Core purpose of LPT in Livepeer: protocol security collateral, reward distribution, and governance participation. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose value `concept` is not a canonical purpose enum value)
**Frontmatter issues**: purpose `concept` is not in the canonical purpose enum (likely intended `explain`); lifecycleStage missing

**Heading structure**:
- No H1
- H2: Purpose of LPT
- H3: Supply and inflation
- H3: Community Treasury
- H3: Rewards distribution
- H3: (empty H3 at line 76 — blank section marker)

**Content summary**:
This page explains the three core functions of LPT — security collateral, reward distribution, and governance power — and then provides a substantial discussion of the supply model, adaptive inflation mechanism, community treasury, and reward distribution formulas. It covers both the conceptual "why LPT exists" and detailed mechanics including the fee switch debate. It serves a reader who has arrived at the tab and wants to understand what LPT does before deciding to participate.

---

### LPT Tokenomics · `v2/lpt/about/tokenomics.mdx`

**Status**: current
**Section/group**: About LPT
**File size**: 4,978 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LPT Tokenomics | yes |
| description | Formal economic model of LPT issuance, bonding dynamics, reward distribution, and security equilibrium. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose value `concept` not in canonical purpose enum)
**Frontmatter issues**: purpose `concept` → canonical purpose `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- (Inside Accordion — formal model):
  - H2: 1. Formal Variables
  - H2: 2. Inflation Issuance Model
  - H2: 3. Bonding-Rate Feedback Mechanism
  - H2: 4. Reward Distribution
  - H2: 5. Issuance vs Fee Revenue
  - H2: 6. Security Equilibrium
- H2: 7. Economic Tradeoffs
- H2: 8. System Diagram
- H2: 9. Protocol vs Network Separation
- H2: References

**Content summary**:
This page formalizes the tokenomics of LPT — the inflation issuance model, the bonding-rate feedback loop, stake-weighted reward distribution formulas, and the security equilibrium model. It is structured for a mathematically-inclined reader who wants to understand the quantitative mechanics before staking. It sits at the evaluate stage, providing the formal economic grounding for a reader assessing whether to participate.

---

### LPT Mechanics · `v2/lpt/about/mechanics.mdx`

**Status**: current
**Section/group**: About LPT
**File size**: 5,312 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LPT Mechanics | yes |
| description | Detailed protocol-level mechanics governing bonding, unbonding, reward checkpointing, and round-based state transitions in the Livepeer Protocol. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose value `concept` not in canonical purpose enum)
**Frontmatter issues**: purpose `concept` → canonical purpose `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Core State Variables
- H2: 2. Bonding
- H2: 3. Delegation Attribution
- H2: 4. Unbonding
- H2: 5. Round Lifecycle
- H2: 6. Reward Checkpointing
- H2: 7. Claiming and Rebonding
- H2: 8. State Transition Diagram
- H2: 9. Security Implications
- H2: 10. Protocol vs Network Separation
- H2: References

**Content summary**:
This page describes the deterministic on-chain mechanics of LPT state transitions: bonding, delegation attribution, unbonding, the round lifecycle, reward checkpointing, and withdrawal. It uses formal math notation throughout. It serves a reader who understands what LPT is (from purpose/overview) and now wants to know exactly how it works at the contract level — positioned at the evaluate stage, just before the reader decides to set up and bond.

---

### Delegating LPT: Getting Started · `v2/lpt/delegation/getting-started.mdx`

**Status**: current
**Section/group**: Delegating LPT
**File size**: 6,248 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegating LPT: Getting Started | yes |
| description | How to delegate LPT to an orchestrator, earn rewards, and participate in Livepeer network security - a step-by-step guide for new delegators. | yes |
| pageType | `guide` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. For a getting-started guide, maps to `start` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose value `concept` is wrong for a step-by-step guide — should be `start`)
**Frontmatter issues**: purpose `concept` — incorrect for this page's job; canonical purpose `start`; lifecycleStage missing; also has a non-standard `status: current` field in frontmatter (not a canonical frontmatter field per the schema)

**Heading structure**:
- No H1
- H2: Start here in 5 minutes
- H2: What Is Delegation?
- H2: What You Earn
- H2: Before You Start
- H2: Step-by-Step: How to Delegate
- H2: Risk Factors
- H2: Reward Calculation Reference
- H2: Related Pages

**Content summary**:
This page is the primary onboarding page for a first-time delegator. It explains delegation in plain language, covers prerequisites (LPT on Arbitrum, ETH for gas), walks through the bonding and claiming process step by step using a styled steps component, and includes a risk factors section. Its job is to take a reader who holds LPT and has chosen to delegate through their first completed bond. It sits at the setup/start stage of the reader's journey.

---

### Delegation Overview · `v2/lpt/delegation/overview.mdx`

**Status**: current
**Section/group**: Delegating LPT
**File size**: 7,076 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegation Overview | yes |
| description | Protocol-level overview of LPT delegation, including stake attribution, reward flows, and security implications. | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (context: explains delegation mechanism) |
| audience | `delegator` | yes |
| purpose | `overview` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; both pageType and purpose deprecated)
**Frontmatter issues**: pageType `overview` → canonical `concept`; purpose `overview` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- (Inside Accordion):
  - H2: 1. Formal Definition
- H2: 2. Architectural Context
- H3: 2.1 Protocol Layer Responsibilities
- H3: 2.2 Network Layer Responsibilities
- (Inside second Accordion):
  - H2: 3. Economic Weight and Security
  - H2: 4. Reward Allocation (Issuance)
  - H2: 5. Fee Revenue (Demand)
- H2: 6. Delegation as Capital Allocation
- H2: 7. Liquidity Constraints and Unbonding
- H2: 8. Risks and Failure Modes
- H2: 9. Sequence Diagram
- H2: 10. Protocol vs Network Separation
- H2: References

**Content summary**:
This is a protocol-level technical reference explaining the formal definition of delegation as a stake attribution mechanism, how reward allocation and fees flow to delegators, liquidity constraints from the unbonding delay, and the risk profile of delegating. It uses mathematical notation for formulas. It serves a reader who wants a rigorous conceptual understanding of delegation mechanics — more technical than `getting-started.mdx`, it sits in the evaluate stage for readers who want depth before committing.

---

### Delegation Economics · `v2/lpt/delegation/delegation-economics.mdx`

**Status**: stub
**Section/group**: Delegating LPT
**File size**: 617 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegation Economics | yes |
| description | Interim overview of delegation economics and stake-weighted incentives for LPT delegators and orchestrators. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No headings

**Word count (body, stripped)**: ~20 words (a `<Warning>` component and redirect text only — "This page is under active development. For delegation economics detail, see Delegation Overview and Tokenomics.")

**Content summary**:
This is a placeholder stub. The page body consists solely of a Warning component redirecting the reader to `delegation/overview` and `about/tokenomics`. There is no substantive content. It is in the docs.json navigation and creates a live dead-end. This page requires content development to fulfil its stated role of explaining delegation economics.

---

### About Delegators · `v2/lpt/delegation/about-delegators.mdx`

**Status**: current
**Section/group**: Delegating LPT
**File size**: 7,283 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | About Delegators | yes |
| description | Formal definition, incentive role, rights/constraints, and risk model for delegators in the Livepeer Protocol. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Formal Definition
- H2: 2. Architectural Context
- H3: 2.1 Protocol Layer (On-Chain)
- H3: 2.2 Network Layer (Off-Chain)
- H2: 3. Economic Role
- H3: 3.1 Security Participation
- H3: 3.2 Capital Allocation
- H3: 3.3 Governance Participation
- H2: 4. Reward Model (Issuance and Fees)
- H2: 5. Rights, Constraints, and Responsibilities
- H3: 5.1 Rights
- H3: 5.2 Constraints
- H3: 5.3 Responsibilities (Practical)
- H2: 6. Evaluation Framework for Orchestrator Selection
- H2: 7. Risks and Failure Modes
- H2: 8. Diagrams
- H3: 8.1 State Model
- H3: 8.2 Reward Flow
- H2: 9. Protocol vs Network Separation
- H2: References

**Content summary**:
This page formally defines the delegator role: a non-infrastructure participant who bonds LPT to an orchestrator to earn rewards and governance weight. It covers the economic role, rights and constraints, an orchestrator selection evaluation framework, and a layered risk profile. It serves both an evaluating reader (what am I signing up for?) and a returning reader consulting it as a reference. Positioned in the evaluate stage.

---

### Delegation Guide · `v2/lpt/delegation/delegation-guide.mdx`

**Status**: current
**Section/group**: Delegating LPT
**File size**: 6,843 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegation Guide | yes |
| description | Contract-level, step-by-step guide to bonding, delegating, unbonding, rebonding, and verifying LPT delegation on-chain. | yes |
| pageType | `guide` | yes |
| audience | `delegator` | yes |
| purpose | `operations` | Not in canonical purpose enum — possible intended value `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose `operations` is not a canonical enum value)
**Frontmatter issues**: purpose `operations` → canonical `operate` (or `configure` if setup-focused); lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Preconditions
- H2: 2. Step 1 - Approve Token Transfer
- H2: 3. Step 2 - Bond and Delegate
- H2: 4. Step 3 - Verify On-Chain State
- H2: 5. Reward Accrual and Checkpointing
- H2: 6. Step 4 - Rebond (Optional Compounding)
- H2: 7. Step 5 - Initiate Unbonding
- H2: 8. Unbonding Delay
- H2: 9. Step 6 - Withdraw Stake
- H2: 10. Risk Review Checklist
- H2: 11. Protocol vs Network Separation
- H2: 12. Sequence Diagram (End-to-End)
- H2: References

**Content summary**:
This is a contract-accurate step-by-step walkthrough of the full delegation lifecycle: token approval, bonding, on-chain verification, reward checkpointing, rebonding/compounding, unbonding, and withdrawal. It uses formal math notation for state transitions. It serves a reader who is technically oriented and wants to understand the contract-level mechanics while executing. Positioned at the setup/operate stage — more technical than `getting-started.mdx`.

---

### Livepeer Governance Overview · `v2/lpt/governance/overview.mdx`

**Status**: current
**Section/group**: Governance
**File size**: 5,934 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Governance Overview | yes |
| description | Architectural and economic overview of stake-weighted governance in the Livepeer Protocol. | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (explains governance mechanism) |
| audience | `delegator` | yes |
| purpose | `overview` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; pageType and purpose deprecated)
**Frontmatter issues**: pageType `overview` → canonical `concept`; purpose `overview` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Formal Definition
- H2: 2. Governance Scope
- H2: 3. Hybrid On-Chain/Off-Chain Model
- H3: Livepeer Improvement Proposals (LIPs)
- H2: 4. Voting Mechanics
- H2: 5. Governance as Security Layer
- H2: 6. Architectural Context
- H3: 6.1 Protocol Layer Contracts
- H3: 6.2 Network Layer Interaction
- H2: 7. System Diagram
- H2: 8. Protocol vs Network Separation
- H2: References

**Content summary**:
This page provides an architectural and economic overview of Livepeer governance: stake-weighted voting power, governance scope (what can and cannot be changed), the hybrid on-chain/off-chain model, LIP lifecycle, voting mechanics, and the security model. It serves a reader entering the governance section who needs orientation before voting or evaluating proposals. Positioned at the operate/evaluate stage — a delegator who is bonded and wants to understand governance before participating.

---

### Livepeer Governance Model · `v2/lpt/governance/model.mdx`

**Status**: current
**Section/group**: Governance
**File size**: 7,097 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Governance Model | yes |
| description | Formal model of stake-weighted governance, quorum mechanics, voting thresholds, timelock execution, and attack surface analysis. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Governance Primitives
- H2: 2. Proposal Lifecycle
- H2: 3. Quorum Requirement
- H2: 4. Majority / Threshold Condition
- H2: 5. Timelock Semantics
- H2: 6. Execution Model
- H2: 7. Governance Objects and Contract Architecture
- H2: 8. Treasury Parameters
- H2: 9. Security and Game-Theoretic Considerations
- H3: 9.1 Capital Requirement for Control
- H3: 9.2 Stake Concentration Risk
- H3: 9.3 Voter Apathy Risk
- H3: 9.4 Executor Centralisation
- H2: 10. Risks to Governance Capture
- H2: 11. Governance State Machine
- H2: 12. Protocol vs Network Separation
- H2: References

**Content summary**:
This page formalizes the governance decision system: quorum requirements (33% of bonded stake), majority threshold (>50%), timelock semantics, contract architecture, and game-theoretic risk analysis including governance capture, voter apathy, and executor centralisation risks. It serves a technically-oriented delegator who wants to understand the formal governance model before participating in a vote or evaluating the protocol's governance security posture.

---

### Livepeer Governance Processes · `v2/lpt/governance/processes.mdx`

**Status**: current
**Section/group**: Governance
**File size**: 9,157 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Governance Processes | yes |
| description | End-to-end governance process lifecycle including off-chain signaling, LIP drafting, on-chain proposal execution, and treasury coordination. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. Maps to `explain` or `operate` (contains a how-to-vote step sequence) |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` — this page does double duty (conceptual explanation + step-by-step how-to-vote); canonical purpose `operate` or `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H2: 1. Governance Lifecycle Overview
- H2: 2. Off-Chain Process Layer
- H3: 2.1 Idea Formation
- H3: 2.2 Livepeer Improvement Proposals (LIPs)
- H3: 2.3 Social Signaling and Feedback
- H2: 3. On-Chain Voting Rules
- H3: 3.1 Quorum
- H3: 3.2 Approval Threshold
- H3: 3.3 Voting Power
- H2: 4. On-Chain Execution Layer
- H3: 4.1 Proposal Submission
- H3: 4.2 Voting Window (includes "How to Vote" step sequence)
- H3: 4.3 Quorum and Threshold Checks
- H3: 4.4 Timelock Queue
- H3: 4.5 Execution
- H2: 5. Treasury Coordination
- H2: 6. Livepeer Foundation and Treasury Stewardship
- H2: 7. Risk Mitigation and Process Safeguards
- H3: 7.1 Multi-Stage Review
- H3: 7.2 Transparency
- H3: 7.3 Parameter Calibration
- H2: 8. Considerations and Potential Improvements
- H2: 9. Governance Process Flow Diagram
- H2: 10. Protocol vs Network Separation
- H2: References

**Content summary**:
This page covers the full governance process lifecycle: off-chain idea formation and LIP drafting, on-chain voting rules (quorum 33%, threshold >50%), the execution layer, treasury coordination, Livepeer Foundation stewardship, and risk safeguards. It includes an embedded step-by-step "How to Vote" procedure. It serves a delegator who is ready to participate in governance — it bridges the conceptual model (governance/model.mdx) to actual participation. Positioned at the operate stage.

---

### Treasury Overview · `v2/lpt/treasury/overview.mdx`

**Status**: current
**Section/group**: Livepeer Treasury
**File size**: 4,716 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Treasury Overview | yes |
| description | Formal model of the Livepeer Treasury as a governance-controlled protocol asset allocator. | yes |
| pageType | `overview` | DEPRECATED: maps to `concept` (explains treasury mechanism) |
| audience | `delegator` | yes |
| purpose | `overview` | DEPRECATED: not in canonical enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; pageType and purpose deprecated)
**Frontmatter issues**: pageType `overview` → canonical `concept`; purpose `overview` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Using the Treasury (contains embedded PDF link — `PdfEmbed` component)
- H2: 1. Formal Definition
- H2: 2. Architectural Context
- H3: 2.1 Protocol Layer
- H3: 2.2 Network Layer
- H2: 3. Treasury Purpose and Economic Rationale
- H2: 4. Treasury Governance Model
- H2: 5. Security Model
- H2: 6. Risks and Failure Modes
- H2: 7. System Diagram
- H2: 8. Protocol vs Network Separation
- H2: References

**Content summary**:
This page formally defines the Livepeer Treasury as a governance-controlled on-chain asset pool, covering its formal accounting model, architectural context, economic rationale (funding public goods), governance model, security model, and failure modes. It includes a link to an embedded external resource ("Using the Livepeer Community Treasury"). It orients a delegator who wants to understand what the treasury is, how it is funded, and how decisions are made about spending — positioned at the operate stage for a reader who participates in governance.

---

### Treasury Proposals · `v2/lpt/treasury/proposals.mdx`

**Status**: current
**Section/group**: Livepeer Treasury
**File size**: 6,501 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Treasury Proposals | yes |
| description | Formal structure and execution semantics of treasury proposals as governance-authorized on-chain actions. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. Maps to `explain` or `operate` (contains "How to Submit a Proposal" steps) |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` — this page serves both explanation and operational guidance; canonical purpose `operate` or `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- H3: How to Submit a Proposal (step sequence embedded)
- H2: 1. Formal Definition
- H2: 2. Governance Authorization
- H2: 3. Timelock Queue Semantics
- H2: 4. Execution Semantics
- H2: 5. Treasury Transfer as Canonical Case
- H2: 6. Failure Modes
- H3: 6.1 Calldata Error
- H3: 6.2 Insufficient Treasury Balance
- H3: 6.3 Target Contract Revert
- H3: 6.4 Asset Transfer Semantics
- H3: 6.5 Timelock Configuration
- H2: 7. Risk Mitigation Checklist
- H2: 8. Proposal Execution Flow
- H2: 9. Protocol vs Network Separation
- H2: References

**Content summary**:
This page defines the structure of treasury proposals as governance-authorized on-chain actions, covering proposal payload format, authorization logic, timelock semantics, execution atomicity, and failure modes. It also includes a step-by-step guide for submitting a proposal. It serves a delegator who wants to participate in treasury governance — either evaluating proposals or submitting one. Positioned at the operate stage.

---

### Treasury Allocations · `v2/lpt/treasury/allocations.mdx`

**Status**: current
**Section/group**: Livepeer Treasury
**File size**: 7,098 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Treasury Allocations | yes |
| description | Allocation design, accounting model, evaluation framework, and verification/audit approach for governance-authorized treasury spending. | yes |
| pageType | `concept` | yes |
| audience | `delegator` | yes |
| purpose | `concept` | DEPRECATED: not in canonical purpose enum. Maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; purpose deprecated)
**Frontmatter issues**: purpose `concept` → canonical `explain`; lifecycleStage missing

**Heading structure**:
- No H1
- H2: Executive Summary
- (Inside Accordion):
  - H2: 1. Formal Allocation Model
- H2: 2. Allocation Taxonomy
- (Inside second Accordion):
  - H2: 3. Evaluation Framework
  - H3: 3.1 Impact
  - H3: 3.2 Feasibility
  - H3: 3.3 Risk
  - H3: 3.4 Alignment
- (Inside third Accordion):
  - H2: 4. Governance Security Model
- H2: 5. Failure Modes and Risks
- H3: 5.1 Protocol-Level Failures
- H3: 5.2 Governance-Level Failures
- H3: 5.3 Outcome-Level Failures
- H2: 6. Verification and Audit Model
- H3: 6.1 On-Chain Verification (Deterministic)
- H3: 6.2 Off-Chain Outcome Verification (Non-Deterministic)
- H2: 7. Diagram - Allocation Lifecycle
- H2: 8. Protocol vs Network Separation
- H2: References

**Content summary**:
This page covers the formal allocation model for treasury spending: accounting for per-proposal transfers, a taxonomy of allocation types (ecosystem development, R&D, infrastructure, community programs, strategic), an evaluation framework using a utility function (impact, feasibility, risk, alignment), security model, failure modes, and verification/audit approach. It serves a delegator or governance participant who wants to understand how treasury allocations are decided and audited. Positioned at the operate stage.

---

### Delegator Videos and Blogs · `v2/lpt/resources/delegator-videos-and-blogs.mdx`

**Status**: current
**Section/group**: Resources
**File size**: 3,943 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegator Videos and Blogs | yes |
| description | Curated video and blog resources for delegators: staking tutorials, LPT delegation guides, and official links. | yes |
| pageType | `reference` | yes |
| audience | `delegator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing)
**Frontmatter issues**: lifecycleStage missing; veracityStatus not set (noting this is a curated list of external links — some may be stale)

**Heading structure**:
- No H1
- H2: Video content
- H2: Blogs (delegator-focused or with delegator sections)
- H2: Official delegator destinations

**Content summary**:
This is a curated resource list: video tutorials (YouTube), delegator-focused blog posts from multiple sources (CoinMonks, Figment, Stake Capital, Staked, DeFiCrypto), and official Livepeer destinations (Explorer, delegate landing, migration tool, docs). It serves a reader who prefers third-party tutorials or wants to cross-reference their onboarding with external guides. Positioned as an on-demand resource — reference stage.

---

### Exchanges with LPT Listed · `v2/lpt/resources/exchanges.mdx`

**Status**: stub
**Section/group**: Resources
**File size**: 56,594 bytes (large due to data)

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Exchanges with LPT Listed | yes |
| description | A list of exchanges where the Livepeer Token (LPT) is listed. Note: this information is fetched from Coingecko weekly | yes |
| pageType | `reference` | yes |
| audience | `delegator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing)
**Frontmatter issues**: lifecycleStage missing; page contains a `<Danger>` component stating "This (will be) a dynamic automation to fetch all exchange that list LPT" — indicating this is a placeholder for an automation pipeline, not yet implemented

**Status note**: Although the file is 56KB (large due to data inline), the page body starts with a `<Danger>` note describing this as a planned automation that has not yet been built. The substantive human-readable content is minimal. **Classified as stub** because the editorial framing indicates the page is not yet production-ready despite having data present.

**Heading structure**:
- H2: Centralized Exchanges (CEX)
- H2: Decentralized Exchanges (DEX)
- H2: Contract Addresses

**Content summary**:
This page is intended to be a dynamically generated list of exchanges where LPT is listed, fetched weekly from CoinGecko's API via an n8n pipeline. The automation is described as planned but not yet implemented — the page opens with a `<Danger>` notice explaining this. The underlying exchange data appears to be present in the file but the delivery mechanism is not in place.

---

### LPT & ETH Token Functions · `v2/lpt/resources/lpt-eth-usage.mdx`

**Status**: stub
**Section/group**: Resources
**File size**: 1,869 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LPT & ETH Token Functions | yes |
| description | What the LPT & ETH Tokens are used for in the Livepeer Protocol | yes |
| pageType | `reference` | yes |
| audience | `delegator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing)
**Frontmatter issues**: lifecycleStage missing; page contains an editorial note inside a `<Note>` component: "This is wild to me that Gateways do not use LPT to pay orchestrators. Need to dig into the why more" — this is an unresolved author note, not production content

**Status note**: Body content (after stripping components and the Note): approximately 80 words — below the 100-word stub threshold. The page has a payment layers table and two short paragraphs plus a code block, but the code block is stripped for word count. **Classified as stub.**

**Heading structure**:
- H3: Payment Layers
- H2: ETH Payments

**Content summary**:
This page explains the two-token payment model in the Livepeer Protocol: ETH is used for service payments (gateways to orchestrators), LPT is used for staking, governance, and rewards. The file contains an unresolved author note and is substantially incomplete. In its current state it does not fulfil the reference function implied by its title.

---

### LPT Token Glossary · `v2/lpt/resources/compendium/glossary.mdx`

**Status**: draft (frontmatter contains `status: draft`)
**Section/group**: Resources → Compendium
**File size**: 74,997 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LPT Token Glossary | yes |
| description | Key terms for the Livepeer Token (LPT) — staking, delegation, inflation, governance, treasury, and tokenomics. | yes |
| pageType | `reference` | yes |
| audience | `everyone` | yes (canonical audience includes delegator; `everyone` is an acceptable broad audience value) |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete (lifecycleStage missing; `status: draft` means this page is not production-ready)
**Frontmatter issues**: lifecycleStage missing; `status: draft` in frontmatter — this is a non-canonical frontmatter field but signals the page should not be treated as published content. Note: `status: draft` is distinct from `draft: true` — the prompt uses `draft: true` as the canonical draft flag. However, given the intent is clearly draft, this page is counted as draft in the summary.

**Heading structure**:
- H2: Livepeer Protocol Terms
- H2: Livepeer Contracts
- H2: Livepeer Roles and Entities
- H2: Tokenomics and Staking Terms
- H2: Economic and Reward Terms
- H2: Treasury Terms
- H2: Governance Terms
- H2: Web3 and Infrastructure Terms
- H2: AI and Video Terms

**Content summary**:
This is a comprehensive glossary of LPT-related terminology organized into nine thematic sections. It covers protocol terms, contract addresses, roles (delegator, orchestrator, gateway), tokenomics, economic and reward terms, treasury, governance, Web3 infrastructure, and AI/video terminology. The page uses a `SearchTable` component (AI-discoverability tier-2 companion data). It is marked `status: draft` — not yet production-ready. When published, it would serve as a return-visit reference for any reader wanting term definitions.

---

## Duplicate Nav Entries

No duplicate nav entries found. Each path appears in exactly one nav group.

| Path | Groups |
|---|---|
| (none) | — |

---

## Workspace Artefacts

Files under `v2/lpt/delegation/TO-ADD/` — path listing only, not scanned as production pages.

| Path | Notes |
|---|---|
| `v2/lpt/delegation/TO-ADD/choose-a-delegate.mdx` | Staged file — not in docs.json navigation |
| `v2/lpt/delegation/TO-ADD/delegation-management.mdx` | Staged file — not in docs.json navigation |
| `v2/lpt/delegation/TO-ADD/delegation-rewards.mdx` | Staged file — not in docs.json navigation |
| `v2/lpt/delegation/TO-ADD/overview.mdx` | Staged file — not in docs.json navigation |

**Also noted (generated file, not workspace per se)**:
| Path | Notes |
|---|---|
| `v2/lpt/index.mdx` | Generated table-of-contents file (script-generated, auto-comments in frontmatter). Not in docs.json navigation. Not scanned as production page. |

---

## v1 Reference Paths

v1 paths for reference only — not scanned. Extracted from docs.json v1 navigation (Delegators dropdown).

| v1 path |
|---|
| `v1/delegators/introduction` |
| `v1/delegators/quick-start` |
| `v1/delegators/livepeer-studio-cli` |
| `v1/delegators/guides/bridge-lpt-to-arbitrum` |
| `v1/delegators/guides/migrate-stake-to-arbitrum` |
| `v1/delegators/guides/yield-calculation` |

---

## Frontmatter Issues Summary

| Page path | Issue type | Current value | Canonical replacement |
|---|---|---|---|
| `v2/lpt/token-portal.mdx` | Deprecated pageType | `landing` | `navigation` |
| `v2/lpt/token-portal.mdx` | Deprecated purpose | `landing` | `orient` |
| `v2/lpt/token-portal.mdx` | Missing field | — | `lifecycleStage: discover` |
| `v2/lpt/about/overview.mdx` | Deprecated pageType | `overview` | `concept` |
| `v2/lpt/about/overview.mdx` | Deprecated purpose | `overview` | `explain` |
| `v2/lpt/about/overview.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/about/purpose.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/about/purpose.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/about/tokenomics.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/about/tokenomics.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/about/mechanics.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/about/mechanics.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/delegation/getting-started.mdx` | Non-canonical purpose | `concept` | `start` |
| `v2/lpt/delegation/getting-started.mdx` | Missing field | — | `lifecycleStage: setup` |
| `v2/lpt/delegation/overview.mdx` | Deprecated pageType | `overview` | `concept` |
| `v2/lpt/delegation/overview.mdx` | Deprecated purpose | `overview` | `explain` |
| `v2/lpt/delegation/overview.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/delegation/delegation-economics.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/delegation/delegation-economics.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/delegation/about-delegators.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/delegation/about-delegators.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/delegation/delegation-guide.mdx` | Non-canonical purpose | `operations` | `operate` (or `configure`) |
| `v2/lpt/delegation/delegation-guide.mdx` | Missing field | — | `lifecycleStage: setup` |
| `v2/lpt/governance/overview.mdx` | Deprecated pageType | `overview` | `concept` |
| `v2/lpt/governance/overview.mdx` | Deprecated purpose | `overview` | `explain` |
| `v2/lpt/governance/overview.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/governance/model.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/governance/model.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/governance/processes.mdx` | Non-canonical purpose | `concept` | `operate` or `explain` |
| `v2/lpt/governance/processes.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/treasury/overview.mdx` | Deprecated pageType | `overview` | `concept` |
| `v2/lpt/treasury/overview.mdx` | Deprecated purpose | `overview` | `explain` |
| `v2/lpt/treasury/overview.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/treasury/proposals.mdx` | Non-canonical purpose | `concept` | `operate` or `explain` |
| `v2/lpt/treasury/proposals.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/treasury/allocations.mdx` | Non-canonical purpose | `concept` | `explain` |
| `v2/lpt/treasury/allocations.mdx` | Missing field | — | `lifecycleStage: operate` |
| `v2/lpt/resources/delegator-videos-and-blogs.mdx` | Missing field | — | `lifecycleStage: discover` or `evaluate` |
| `v2/lpt/resources/exchanges.mdx` | Missing field | — | `lifecycleStage: discover` |
| `v2/lpt/resources/lpt-eth-usage.mdx` | Missing field | — | `lifecycleStage: evaluate` |
| `v2/lpt/resources/compendium/glossary.mdx` | Missing field | — | `lifecycleStage: operate` |

**Pattern**: `lifecycleStage` is missing from every page in this tab (17/17 pages). This is a systemic gap, not isolated issues. The `purpose` field uses non-canonical values across most pages — particularly `concept` used as a purpose value (purpose and pageType are being conflated in the existing frontmatter).

---

## Status Summary Table

| Page path | Section | Status | pageType | Frontmatter complete? |
|---|---|---|---|---|
| `v2/lpt/token-portal.mdx` | About LPT | current | `landing` (DEPRECATED) | incomplete |
| `v2/lpt/about/overview.mdx` | About LPT | current | `overview` (DEPRECATED) | incomplete |
| `v2/lpt/about/purpose.mdx` | About LPT | current | `concept` | incomplete |
| `v2/lpt/about/tokenomics.mdx` | About LPT | current | `concept` | incomplete |
| `v2/lpt/about/mechanics.mdx` | About LPT | current | `concept` | incomplete |
| `v2/lpt/delegation/getting-started.mdx` | Delegating LPT | current | `guide` | incomplete |
| `v2/lpt/delegation/overview.mdx` | Delegating LPT | current | `overview` (DEPRECATED) | incomplete |
| `v2/lpt/delegation/delegation-economics.mdx` | Delegating LPT | **stub** | `concept` | incomplete |
| `v2/lpt/delegation/about-delegators.mdx` | Delegating LPT | current | `concept` | incomplete |
| `v2/lpt/delegation/delegation-guide.mdx` | Delegating LPT | current | `guide` | incomplete |
| `v2/lpt/governance/overview.mdx` | Governance | current | `overview` (DEPRECATED) | incomplete |
| `v2/lpt/governance/model.mdx` | Governance | current | `concept` | incomplete |
| `v2/lpt/governance/processes.mdx` | Governance | current | `concept` | incomplete |
| `v2/lpt/treasury/overview.mdx` | Livepeer Treasury | current | `overview` (DEPRECATED) | incomplete |
| `v2/lpt/treasury/proposals.mdx` | Livepeer Treasury | current | `concept` | incomplete |
| `v2/lpt/treasury/allocations.mdx` | Livepeer Treasury | current | `concept` | incomplete |
| `v2/lpt/resources/delegator-videos-and-blogs.mdx` | Resources | current | `reference` | incomplete |
| `v2/lpt/resources/exchanges.mdx` | Resources | **stub** | `reference` | incomplete |
| `v2/lpt/resources/lpt-eth-usage.mdx` | Resources | **stub** | `reference` | incomplete |
| `v2/lpt/resources/compendium/glossary.mdx` | Resources → Compendium | **draft** | `reference` | incomplete |

---

## Key Observations for Structure Audit (structure-audit.md consumption notes)

1. **Systemic frontmatter gap**: `lifecycleStage` is absent from all 17 production pages. This is a single batch fix, not individual page work.

2. **Deprecated pageType values in 4 pages**: `landing` (token-portal) and `overview` (about/overview, delegation/overview, governance/overview, treasury/overview). These will fail CI validator if the validator uses the canonical 7-type schema.

3. **Purpose field conflation**: The `purpose` field uses `concept`, `overview`, and `operations` — none of which are in the canonical purpose enum. The pattern suggests pageType values were copy-pasted into the purpose field during page creation. This is a systemic authoring error.

4. **Three stubs in the nav**: `delegation/delegation-economics.mdx` (placeholder redirect), `resources/lpt-eth-usage.mdx` (editorial note visible, incomplete), `resources/exchanges.mdx` (automation not yet built). All three create live dead-ends or misleading pages for readers.

5. **Content coverage vs ideal section structure**: Comparing the 20-page production inventory against the canonical audience design's 10-section ideal structure (S1–S10), there are notable gaps:
   - **S1 (disambiguation/routing)**: No dedicated disambiguation page. The token-portal serves a routing role implicitly via cards, but the audience design requires an explicit "which situation is mine?" page.
   - **S3 (bridging LPT from L1)**: The `getting-started.mdx` references bridging via a card link to a gateway page (`/v2/gateways/setup/requirements/on-chain%20setup/bridge-lpt-to-arbitrum`) — there is no dedicated bridging instruction page within the LP Token tab itself.
   - **S5 (choosing an orchestrator)**: `about-delegators.mdx` has an "Evaluation Framework" section (mathematical utility function) and `getting-started.mdx` has a "Choose an Orchestrator" step, but there is no dedicated orchestrator-selection guide page.
   - **S7 (rewards accumulation and claiming)**: Not a dedicated page — reward claiming is embedded in `getting-started.mdx` steps.
   - **S8 (managing stake)**: Not a dedicated page — rebonding and unbonding are embedded in `delegation-guide.mdx`.
   - **Workspace/staged content**: The `TO-ADD/` folder contains `choose-a-delegate.mdx`, `delegation-rewards.mdx`, and `delegation-management.mdx` — these correspond exactly to the gaps S5, S7, S8 noted above. Work is staged but not yet promoted to production.

6. **No H1 headings on any page**: All 17 production pages use `## Executive Summary` or similar H2 as the first visible heading. No page has an H1 (`#`) heading in the markdown body. This is a consistent pattern — likely by design (title is set in frontmatter), but worth flagging for the structure audit.

7. **Content tone and register**: The About LPT and delegation/overview/about-delegators pages use a heavily formalized register (LaTeX math, "let" notation, executive summaries). The `getting-started.mdx` page is written in a more accessible register. The register mismatch may create friction for the primary persona (First Bond Seeker) who arrives expecting onboarding content and encounters formal protocol documentation.
