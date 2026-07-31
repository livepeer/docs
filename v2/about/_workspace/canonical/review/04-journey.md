## The Journey Through About — Linear Path, On-Demand Lookups, Cross-Tab Routing

---

## The Linear Journey: Zero to Hero

This is the path a **Protocol Understander** follows from zero to "I understand how this works and where I fit."

### Stage 1: WHAT IS LIVEPEER? (5 pages)

| Step | Reader's question | Page | Current content status | Reader learns | Exit state |
|---|---|---|---|---|---|
| 1.1 | What does Livepeer do? | `concepts/livepeer-overview.mdx` | ✅ Good but needs AI pivot front-load | Livepeer = decentralised GPU fabric for AI + video, on Arbitrum, with cryptoeconomic control plane | "I can describe it to a colleague" |
| 1.2 | How does it all fit together? | `concepts/mental-model.mdx` | ✅ STRONGEST PAGE IN ABOUT — 10-layer OSI analogy, accordions per layer | Complete 10-layer stack: physical → compute → storage → … → applications. All layers explained. | "I can place any concept in the stack" |
| 1.3 | What are the building blocks? | `concepts/core-concepts.mdx` | ⚠️ Partial stubs, needs rewrite | Protocol vs network vs platform. Three compute types. Four actor types (gateway, orchestrator, delegator, builder). Two economic streams (ETH fees, LPT inflation). | "I know the components and can name each one" |

**Exit after S1:** Reader has the complete conceptual model and is ready to understand how the network and protocol work.

---

### Stage 2: HOW DOES THE NETWORK WORK? (6 pages)

| Step | Reader's question | Page | Current content status | Reader learns | Exit state |
|---|---|---|---|---|---|
| 2.1 | What is the network, distinct from protocol? | `network/overview.mdx` | 🔴 Not reader-ready — implementation notes, not explanation | Network = execution layer. Protocol = on-chain security layer. Network runs the compute; protocol secures it. | "I understand the boundary" |
| 2.2 | Who does the work and what are their roles? | `network/actors.mdx` | ⚠️ Needs comprehensive flat page (not sub-folder stubs) | Gateways (routing), orchestrators (compute), delegators (capital), builders (consume), end users (experience). Each actor in 2-3 sentences. | "I can name each actor and their role in one sentence" |
| 2.3 | How does a piece of work actually flow? | `network/job-lifecycle.mdx` | ✅ HIGH QUALITY — state machine, events table, video/AI comparison | App → gateway → orchestrator selection → execution → result → payment → settlement. State machine. Different paths for video vs AI. Probabilistic micropayments. | "I can trace a job end-to-end and name each state" |
| 2.4 | How does supply meet demand? | `network/marketplace.mdx` | ✅ HIGH QUALITY — routing logic, pricing, settlement | Orchestrators publish capacity + pricing. Gateways discover + select. Pricing model: on-chain vs off-chain. Settlement: probabilistic micropayments. | "I understand how a job finds the right compute" |
| 2.5 | What does the full stack look like? | `network/technical-architecture.mdx` | ✅ HIGH QUALITY — full network stack diagram | Nodes, APIs, protocols, contracts. Every integration point named. Where Arbitrum fits. | "I can place any technical component in the system" |
| 2.6 | How do builders access this? | `network/interfaces.mdx` | ✅ HIGH QUALITY | REST, gRPC, GraphQL, SDKs, CLI. Hosted vs self-hosted gateway. → Route to Developers or Gateways tab | "I know what integration points exist and can choose the right one" |

**Exit after S2:** Reader understands network execution and can distinguish video from AI compute. Ready for protocol depth.

---

### Stage 3: HOW IS THE SYSTEM SECURED, INCENTIVISED, AND GOVERNED? (9 pages)

| Step | Reader's question | Page | Current content status | Reader learns | Exit state |
|---|---|---|---|---|---|
| 3.1 | What does the protocol do? | `protocol/overview.mdx` | ✅ Good draft | On-chain coordination, economic alignment, security layer. Scope and boundaries. | "I know what the protocol is responsible for" |
| 3.2 | What are the core mechanisms? | `protocol/core-mechanisms.mdx` | ✅ HIGH QUALITY (engineer-facing, but accessible) — tabbed: rounds, staking, rewards, inflation, slashing | Staking, delegation, reward distribution (per round for video), inflation model (dynamic), slashing (if missed attestation). Video vs AI differences CRITICAL and documented. | "I can explain each mechanism in 1 sentence" |
| 3.3 | What is LPT? | `protocol/livepeer-token.mdx` | ⚠️ 13KB, has #TODO markers, not fully read | Three functions: staking (protocol security), governance (voting weight), delegation (earning delegation rewards). Issuance model: inflation-based, inflation adjustment per round. | "I can state LPT's 3 functions and what drives issuance" |
| 3.4 | How does money flow? | `protocol/economics.mdx` | ✅ HIGH QUALITY (contract-level walkthrough) | ETH fees (user payments) + LPT inflation (protocol issuance). Fee flow: what % goes to stakers, what % gets burned. Reward flow: per-round earning, delegation bonus. Withdrawal flow: unbonding period mechanics. | "I can describe both income streams and who earns each" |
| 3.5 | Who controls the protocol? | `protocol/governance-model.mdx` | ✅ HIGH QUALITY — real LIP numbers, flowchart, quorum rules documented | Stake-weighted voting. LIP lifecycle: proposal → discussion → voting → execution. Quorum 33%, threshold >50%. Vote delegation. Vote detachment (delegators can override orchestrator vote). | "I can describe governance mechanics and how to participate" |
| 3.6 | How is development funded? | `protocol/treasury.mdx` | ✅ Good | Treasury (on-chain, funded by inflation), SPE mechanism (grants go to teams), Foundation role, open-source funding model. | "I can explain the funding model and assess sustainability" |
| 3.7 | Where are the contracts? | `protocol/blockchain-contracts.mdx` | ✅ GOOD — 59KB, contract addresses + architecture | All contract addresses with chain/deployment info. Contract architecture diagram. Proxy pattern. | "I can find and inspect the protocol on Arbiscan" |
| 3.8 | Why is it designed this way? | `protocol/design-philosophy.mdx` | ⚠️ MISSING from current About structure | Design principles (decentralisation, incentive alignment, scalability). Trade-offs chosen: probabilistic payments (not per-segment), dynamic inflation (not fixed), protocol/network separation. Constraints and alternatives considered. | "I understand the WHY behind the WHAT" |

**Exit after S3:** Reader has complete mental model of network + protocol. Ready to route to role tab OR explore ecosystem/products.

---

### Stage 4: ECOSYSTEM AND CURRENT STATE (2 pages)

| Step | Reader's question | Page | Current content status | Reader learns | Exit state |
|---|---|---|---|---|---|
| 4.1 | What has been built on Livepeer? | `guides/ecosystem-overview.mdx` OR cross-link to Solutions | 🔴 MISSING from About | Products, platforms, and use cases deployed today. Daydream, Streamplace, Embody, Frameworks, etc. Activity level. | "I know what's real and active" |
| 4.2 | What does the network look like today? | `resources/network-metrics.mdx` | 🔴 MISSING — should link to Dune, Messari, Explorer with explanation | Current active orchestrators, staked LPT, fee volume, AI compute volume, inflation rate, recent proposals. Where to find live data. | "I can assess network health and activity" |

**Exit after S4:** Reader has complete picture — system, security, governance, ecosystem, evidence. Ready to route to role tab with confidence.

---

## On-Demand Lookups (Return Visits)

Once a reader understands the baseline, they return to About for specific lookups:

| Need | Page | Example queries |
|---|---|---|
| Term definition | `resources/glossary.mdx` | "What is a round?" "What is slashing?" "What is a probabilistic micropayment?" |
| Contract detail | `protocol/blockchain-contracts.mdx` | "What is the BondingManager contract?" "Where is the Governor contract?" |
| Token spec | `resources/protocol-parameters.mdx` | "What is the current inflation rate?" "What is the target bonding rate?" "What is the active set size?" |
| Design justification | `protocol/design-philosophy.mdx` | "Why probabilistic payments?" "Why dynamic inflation?" |
| Current state | `resources/network-metrics.mdx` | "How many orchestrators are live?" "What's the total staked LPT?" |

---

## Cross-Tab Routing

After stage 3 (or during), readers route to role tabs based on emerging intent.

### From concepts/ or network/ (Stage 1-2)
| Persona | Routes to | Trigger |
|---|---|---|
| **Product evaluator** | Solutions or Developers | "I understand how it works, can I build on it?" |
| **Ecosystem newcomer** | Community | "How do I participate?" |
| **Pre-build developer** | Developers | "How do I make an API call?" |

### From protocol/ (Stage 3)
| Persona | Routes to | Trigger |
|---|---|---|
| **Diligence analyst** | LP Token | "How do I stake?" |
| **Token holder** | LP Token | "How do I delegate?" |
| **Orchestrator candidate** | Orchestrators | "How do I run a node?" |
| **Gateway evaluator** | Gateways | "How do I run a gateway?" |
| **OSS contributor** | Developers (OSS path) | "How do I contribute?" |

### From guides/ or resources/ (Stage 4)
| Persona | Routes to | Trigger |
|---|---|---|
| **Founder** | Solutions | "Which product is right?" |
| **Researcher** | Resources (whitepaper, contracts) | "What's the primary source?" |
| **Newcomer** | Community | "How do I join?" |

---

## The Complete Linear Journey: Real Pages

```
concepts/
├── livepeer-overview.mdx         S1.1 — What is it?
├── mental-model.mdx              S1.2 — How does it fit together? ✅ GOLD STANDARD
└── core-concepts.mdx             S1.3 — What are the building blocks?

network/
├── overview.mdx                  S2.1 — What is the network?
├── actors.mdx                    S2.2 — Who does the work?
├── job-lifecycle.mdx             S2.3 — How does work flow? ✅ GOLD STANDARD
├── marketplace.mdx               S2.4 — How do supply/demand match? ✅ GOLD STANDARD
├── technical-architecture.mdx    S2.5 — What's the full stack? ✅ GOLD STANDARD
└── interfaces.mdx                S2.6 — How do builders access? ✅ GOLD STANDARD

protocol/
├── overview.mdx                  S3.1 — What does the protocol do?
├── core-mechanisms.mdx           S3.2 — What are the mechanisms? ✅ HIGH QUALITY
├── livepeer-token.mdx            S3.3 — What is LPT?
├── economics.mdx                 S3.4 — How does money flow? ✅ HIGH QUALITY
├── governance-model.mdx          S3.5 — Who controls it? ✅ HIGH QUALITY
├── treasury.mdx                  S3.6 — How is dev funded?
├── blockchain-contracts.mdx      S3.7 — Where are the contracts? ✅ GOOD
└── design-philosophy.mdx         S3.8 — Why this design? ⚠️ MISSING

guides/
├── ecosystem-overview.mdx        S4.1 — What's been built? 🔴 MISSING
└── current-state.mdx             S4.2 — What does it look like now? 🔴 MISSING

resources/
├── glossary.mdx                  On-demand lookup ✅ EXISTS
├── whitepaper.mdx                On-demand lookup ✅ EXISTS
├── protocol-parameters.mdx       On-demand lookup ⚠️ THIN
└── network-metrics.mdx           On-demand lookup 🔴 MISSING
```

---

## Verdict

**APPROVE WITH AMENDMENTS** — The linear journey is sound and maps to existing pages. Five pages are gold-standard quality (mental-model, job-lifecycle, marketplace, technical-architecture, interfaces, economics, governance).

**Amendments:**
1. Rewrite `network/overview.mdx` (currently not reader-ready)
2. Create `guides/ecosystem-overview.mdx` (currently missing)
3. Create or populate `resources/network-metrics.mdx` (currently missing)
4. Create `protocol/design-philosophy.mdx` (currently missing)
5. Expand `concepts/core-concepts.mdx` (currently partial)
6. Ensure `network/actors.mdx` is comprehensive flat page (not sub-folder stubs)

---

## Review Questions

1. Does this journey match how real readers actually traverse About?
2. Should "Ecosystem and current state" (S4) be earlier in the journey, or is it correct at the end?
3. Should OSS Contributor have an explicit routing journey (similar to other personas)?
4. Which stage do readers get stuck on most? Where do they ask for help?

---