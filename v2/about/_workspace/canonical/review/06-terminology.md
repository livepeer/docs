## Locked Terminology — Key Terms About Must Define Consistently

### Scope
These are the terms that appear across multiple About pages and must be defined consistently. These definitions are the source of truth for:
- glossary.mdx (full page)
- Other About pages (inline definitions, accordions)
- Other tabs (can link back to About glossary)

---

## Core Terms (30 terms locked)

### THE SYSTEM (What is Livepeer)

**Livepeer**
- *Canonical definition*: A crypto-economic coordination protocol that secures a global, on-demand GPU network optimized for low-latency video and AI inference, exposed through developer-friendly platforms and applications.
- *Where used*: concepts/livepeer-overview.mdx, mental-model.mdx, all pages
- *Related terms*: decentralised compute infrastructure, protocol, network, platform

**Protocol (Livepeer Protocol)**
- *Canonical definition*: The on-chain smart contract layer (on Arbitrum) that coordinates stake-weighted voting, enforces incentives, and secures the network. Does NOT execute jobs — that is the network's job.
- *Where used*: protocol/overview.mdx, all protocol pages
- *Related terms*: on-chain, smart contracts, governance
- *Contrast*: Network (execution layer, off-chain compute)

**Network (Livepeer Network)**
- *Canonical definition*: The distributed execution layer where GPU operators run compute jobs. Secured by the protocol layer. Not centralized — nodes are independent participants.
- *Where used*: network/overview.mdx, all network pages
- *Related terms*: execution layer, off-chain, compute
- *Contrast*: Protocol (on-chain coordination layer)

**Platform**
- *Canonical definition*: Developer-facing products and applications built on Livepeer. Examples: Livepeer Studio, Daydream, Streamplace, Embody, Frameworks.
- *Where used*: concepts/core-concepts.mdx, ecosystem-overview.mdx
- *Related terms*: applications, products, services

---

### ACTORS (Who does the work)

**Orchestrator (GPU operator)**
- *Canonical definition*: A participant who runs GPU hardware to provide compute capacity (video transcoding or AI inference) to the network. Stakes LPT to participate in video/active-set mode, or can earn from AI without staking.
- *Where used*: network/actors.mdx, protocol/core-mechanisms.mdx (video vs AI section)
- *Related terms*: operator, node, validator, compute provider

**Gateway (Gateway operator)**
- *Canonical definition*: A participant who routes compute jobs from builders/end-users to orchestrators. Manages payments, orchestrator discovery, and job submission. Can be on-chain or off-chain.
- *Where used*: network/actors.mdx, network/interfaces.mdx
- *Related terms*: routing node, job broker, provider
- *Contrast*: Orchestrator (compute provider)

**Delegator**
- *Canonical definition*: An LPT holder who stakes their tokens to an orchestrator's delegated stake, earning a share of that orchestrator's fees and rewards without running hardware themselves.
- *Where used*: network/actors.mdx, protocol/core-mechanisms.mdx (delegation section)
- *Related terms*: staker, token holder
- *Note*: Delegators do NOT run infrastructure — they provide capital

**Builder**
- *Canonical definition*: An application developer who uses Livepeer's APIs/SDKs to submit compute jobs (AI inference or video transcoding) to the network.
- *Where used*: network/actors.mdx, concepts/core-concepts.mdx
- *Related terms*: developer, integrator, consumer

**End User**
- *Canonical definition*: The final consumer of a service built on Livepeer (e.g., a video viewer, an AI chatbot user). They do not directly interact with Livepeer — they interact with applications built by builders.
- *Where used*: network/actors.mdx
- *Related terms*: user, consumer, audience

---

### COMPUTE TYPES (Two fundamental types)

**Video Transcoding (or "Video" mode)**
- *Canonical definition*: Real-time conversion of video streams from one codec/resolution to another. Livepeer's original use case. Requires LPT stake and active-set participation. Per-round reward distribution.
- *Where used*: protocol/core-mechanisms.mdx (table), network/actors.mdx, concepts/core-concepts.mdx
- *Related terms*: transcoding, video encoding, streaming
- *Contrast*: AI inference

**AI Inference (or "AI" mode)**
- *Canonical definition*: Running AI/ML models (LLMs, image models, etc.) for inference in real-time or near-real-time. Can be done without LPT stake. Direct payment model (no active-set requirement).
- *Where used*: protocol/core-mechanisms.mdx (table), network/actors.mdx, concepts/core-concepts.mdx
- *Related terms*: machine learning, inference, AI compute
- *Contrast*: Video transcoding
- *Note*: "AI subnet" is the specific AI infrastructure on Livepeer; "AI mode" or "AI inference" is the compute type

---

### ECONOMIC TERMS

**LPT (Livepeer Token)**
- *Canonical definition*: The governance and economic token of Livepeer. Three functions: (1) stake to secure the network and earn rewards, (2) vote on governance proposals, (3) delegate to an orchestrator to earn a share of their fees/rewards.
- *Where used*: protocol/livepeer-token.mdx, all economic pages
- *Related terms*: token, utility token, governance token

**Staking (or "bonding")**
- *Canonical definition*: Locking LPT in a smart contract to become an orchestrator (video mode) or to delegate to an orchestrator (any role). The stake serves as security (slashing risk) and aligns incentives.
- *Where used*: protocol/core-mechanisms.mdx, protocol/economics.mdx
- *Related terms*: bonding, delegating, locking

**Delegation**
- *Canonical definition*: Staking LPT to an orchestrator's bonded stake (without running hardware). Delegators earn a share of the orchestrator's fees and rewards, minus the orchestrator's commission.
- *Where used*: protocol/core-mechanisms.mdx, protocol/economics.mdx
- *Related terms*: delegating, bonding to, staking with
- *Note*: Delegation is different from voting delegation

**Slashing**
- *Canonical definition*: Automatic penalty applied to an orchestrator's stake if they miss a required attestation (proof of work) during their assigned round. Results in loss of staked LPT.
- *Where used*: protocol/core-mechanisms.mdx, protocol/governance-model.mdx
- *Related terms*: penalty, burning, attestation

**Inflation (or "LPT inflation")**
- *Canonical definition*: The automatic minting of new LPT each round to reward orchestrators and delegators for securing the network. Amount varies dynamically based on inflation adjustment proposals (LIPs).
- *Where used*: protocol/economics.mdx, protocol/core-mechanisms.mdx
- *Related terms*: mint, issuance, protocol rewards
- *Contrast*: Fees (ETH paid by users)

**Fees (or "ETH fees")**
- *Canonical definition*: Payments made by builders/gateways in ETH for compute jobs processed on the network. Collected by the protocol and distributed to stakers (proportional to stake) and orchestrators.
- *Where used*: protocol/economics.mdx, network/marketplace.mdx
- *Related terms*: payments, charges, revenue
- *Contrast*: Inflation (LPT rewards)

---

### PROTOCOL TERMS

**Active Set**
- *Canonical definition*: The set of orchestrators currently eligible to receive assigned jobs during the current round (video mode only). Membership depends on stake size and other factors. Not relevant to AI mode.
- *Where used*: protocol/core-mechanisms.mdx, protocol/economics.mdx
- *Related terms*: active validators, eligible set
- *Note*: AI mode orchestrators are NOT part of the active set

**Round**
- *Canonical definition*: A discrete time period in the Livepeer protocol (currently ~1 day) during which orchestrators perform attestation, are eligible for rewards, and may enter/exit the active set. Video mode uses rounds; AI mode does not.
- *Where used*: protocol/core-mechanisms.mdx, protocol/economics.mdx
- *Related terms*: epoch, block range, time period
- *Note*: "Block round" (smart contract term) is different from "protocol round" (time period)

**Governance (or "Livepeer governance")**
- *Canonical definition*: The process by which stakeholders (LPT holders with stake) vote on protocol changes, parameter adjustments, and treasury allocation via LIPs (Livepeer Improvement Proposals).
- *Where used*: protocol/governance-model.mdx, protocol/treasury.mdx
- *Related terms*: voting, LIP, proposal
- *Note*: This is on-chain governance; off-chain governance (Foundation discussions) is separate

**LIP (Livepeer Improvement Proposal)**
- *Canonical definition*: A formal proposal to change the protocol parameters, mechanism, or treasury allocation. Requires community discussion, formal submission, and on-chain voting to pass. Used as example: LIP-100, LIP-107.
- *Where used*: protocol/governance-model.mdx, protocol/economics.mdx
- *Related terms*: proposal, improvement, change request
- *Example references*: LIP-89 (AI support), LIP-107 (inflation changes)

**Vote Delegation**
- *Canonical definition*: The ability for an LPT holder to authorize their orchestrator (or another delegator/staker) to vote on proposals on their behalf. Delegators can "override" by voting themselves, which cancels the delegation for that vote.
- *Where used*: protocol/governance-model.mdx
- *Related terms*: proxy voting, delegated voting, vote override
- *Note*: This is different from token delegation (stake delegation)

**Probabilistic Micropayment (or "PM")**
- *Canonical definition*: A payment model where gateways receive a probabilistically-released payment receipt (ticket) for each job. The receipt proves payment is due and can be redeemed for funds. Reduces on-chain transaction overhead.
- *Where used*: network/job-lifecycle.mdx, protocol/design-philosophy.mdx
- *Related terms*: payment receipt, ticket, probabilistic settlement
- *Note*: This is a design choice (why: gas optimization). Contrast: per-segment payment (used before)

---

### ORGANISATIONAL TERMS

**Treasury**
- *Canonical definition*: The on-chain smart contract that holds inflation-minted LPT and distributes funding to approved teams (via SPEs) for protocol development and infrastructure.
- *Where used*: protocol/treasury.mdx, protocol/governance-model.mdx
- *Related terms*: on-chain treasury, funding mechanism, grants

**SPE (Special Purpose Entity)**
- *Canonical definition*: A governance-approved entity (or team) that receives inflation-funded grants from the treasury to fund specific initiatives (e.g., Livepeer Foundation, AI development initiatives). Created via governance proposal.
- *Where used*: protocol/treasury.mdx, home/ecosystem.mdx
- *Related terms*: grantee, funded entity, initiative
- *Example*: Livepeer Foundation, Livepeer Labs, Ecosystem Development Fund

**Foundation (Livepeer Foundation)**
- *Canonical definition*: The organisation responsible for governance, community stewardship, and development funding. Operates independently but is accountable to the DAO. Receives treasury funding. Not the same as the Livepeer protocol.
- *Where used*: home/ecosystem.mdx, protocol/treasury.mdx, community/governance.mdx
- *Related terms*: steward, governance entity
- *Note*: This is the Foundation (organisation), not the Livepeer Foundation smart contract

---

### TECHNICAL TERMS

**Arbitrum (or "Arbitrum One")**
- *Canonical definition*: The Ethereum Layer 2 rollup (optimistic rollup) where the Livepeer protocol smart contracts are deployed. Reduces transaction costs and increases transaction throughput compared to Ethereum mainnet.
- *Where used*: concepts/livepeer-overview.mdx, network/technical-architecture.mdx, protocol/blockchain-contracts.mdx
- *Related terms*: Layer 2, rollup, sidechain
- *Note*: Contracts were originally on Ethereum mainnet; moved to Arbitrum in 2023

**Smart Contract**
- *Canonical definition*: Self-executing code deployed on Arbitrum that manages Livepeer's protocol logic: staking, voting, reward distribution, slashing, treasury, governance.
- *Where used*: protocol/blockchain-contracts.mdx, all protocol pages
- *Related terms*: contract, solidity, on-chain

**Proxy (or "proxy contract")**
- *Canonical definition*: A smart contract pattern where a proxy contract delegates function calls to an implementation contract. Allows upgrades without losing state. Livepeer uses the UUPS pattern.
- *Where used*: protocol/blockchain-contracts.mdx, protocol/technical-architecture.mdx
- *Related terms*: upgradeable, implementation, delegation pattern

---

### DECISION-MAKING TERMS

**Job Lifecycle**
- *Canonical definition*: The complete sequence of states a compute job moves through: creation → submission → routing → orchestrator selection → execution → result → payment → settlement.
- *Where used*: network/job-lifecycle.mdx, network/actors.mdx
- *Related terms*: workflow, state machine, execution path

**Marketplace**
- *Canonical definition*: The mechanism by which gateways discover orchestrators, select based on capability and pricing, and submit jobs. Orchestrators publish offerings; gateways select from published offerings.
- *Where used*: network/marketplace.mdx, protocol/economics.mdx
- *Related terms*: market, selection, discovery
- *Note*: "Off-chain marketplace" = gateway discovers orchestrators without on-chain queries

---

## Disputed / Clarification Needed (3 terms)

| Term | Current definition | Debate | Recommended resolution |
|---|---|---|---|
| **Validator** | Often used for orchestrators; technically inaccurate (they are operators, not validators in the blockchain sense) | Should we use "validator" at all, or only "orchestrator"? | Use "orchestrator" consistently; "validator" is blockchain terminology, not Livepeer terminology |
| **Broadcaster** | Vague in glossary-about.md — is this a gateway or a builder? | What does "broadcaster" mean? | DEPRECATE. Use "gateway" (infrastructure) or "builder" (application) instead. |
| **Node** | Can refer to orchestrator node, gateway node, or Arbitrum node | Is "node" too vague? Should we always say "orchestrator node" or "gateway node"? | CLARIFY: Always specify type. "node" alone is ambiguous. Use "orchestrator node", "gateway node", "Arbitrum node" |

---

## Sourcing

These definitions come from:
- **design.md**: The territory and IA section (definitions embedded)
- **index.md**: Collated audience research (personas, journeys, terminology)
- **Current About pages**: Inline definitions from protocol/, network/, concepts/ sections
- **GLOSSARY-ABOUT.md**: Existing glossary from input pack (TERMINOLOGY-COLLATE/per-tab/)

---

## Verdict

**APPROVE** — 30 terms locked with canonical definitions. Consensus across research documents. Definitions are accurate and differentiate Livepeer-specific terms from general blockchain terms.

---

## Review Questions

1. Should "Validator" be deprecated entirely, or is it useful in some contexts?
2. Are there missing key terms? Any that should be added?
3. Should definitions include "See also" / "Related terms" links, or just be standalone?
4. Do the definitions match what your community actually uses these terms to mean?

---