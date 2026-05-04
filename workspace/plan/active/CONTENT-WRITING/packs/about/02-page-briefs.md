# 02 — Page Briefs

Every published page in the About tab. One block per page. The block is the contract — the page is judged against it.

PURPOSE values: `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`.

PAGE_TYPE values: `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`.

Word budget defaults — `concept` 250–450; `instruction` 400–700; `guide` 400–800; `tutorial` 500–900; `reference` 200–500; `resource` 200–400; `navigation` 80–200.

---

## GROUP — About Livepeer

---

### `v2/about/portal`

- **Audience:** community (primary). Multi-audience routing surface — every other audience is secondary.
- **Persona:** Protocol Understander (arriving)
- **PURPOSE:** orient
- **PAGE_TYPE:** navigation
- **Outcome:** After reading, the reader can identify which About section answers their question and click through to it.
- **Arriving knowledge:** None assumed. May know the name "Livepeer" only.
- **Arriving question:** "What is this and where do I go next?"
- **Prev page:** External (search, Home, role tab)
- **Next page:** `v2/about/navigator` or any group entry page
- **Key facts (3–7):**
  - Livepeer is decentralised video and AI compute infrastructure.
  - The protocol is on-chain (Arbitrum) and the network is off-chain (GPU operators).
  - Five participation roles: orchestrator, gateway, delegator, developer, contributor.
  - LPT is the protocol token; ETH pays for compute.
  - Cards route to: Core Concepts, Mental Model, Livepeer Protocol, Livepeer Network, Resources.
- **Out of scope:**
  - Step-by-step setup of any role
  - Live network metrics or current inflation numbers
- **Word budget:** 80–200 (frame mode page; cards do most of the work)

---

### `v2/about/navigator` — NEW

- **Audience:** community (primary), with named pathways for founder, developer, orchestrator, delegator
- **Persona:** Protocol Understander, all secondary personas
- **PURPOSE:** orient
- **PAGE_TYPE:** navigation
- **Outcome:** After reading, the reader can name their intent ("I want to evaluate Livepeer for my product", "I run GPU hardware", "I'm researching the protocol") and follow a labelled path.
- **Arriving knowledge:** Knows what Livepeer is at a sentence level, does not yet know which content matches their intent.
- **Arriving question:** "Which of these pages should I read first?"
- **Prev page:** `v2/about/portal`
- **Next page:** Varies — mental-model, economics, marketplace, fee-flow, evaluating-livepeer, contributor-orientation
- **Key facts (3–7):**
  - 5–6 explicit intent pathways named.
  - Each pathway lists 3–5 pages in reading order.
  - Pathways for: product evaluator, GPU operator, token researcher, OSS contributor, web3 R&D researcher, ecosystem newcomer.
  - Each pathway names the exit destination (Solutions, Orchestrators, LP Token, Developers, Community).
- **Out of scope:**
  - Page content itself — only routing
  - Marketing copy
- **Word budget:** 150–200

---

## GROUP — Core Concepts

---

### `v2/about/livepeer-overview`

- **Audience:** community (primary), founder (secondary)
- **Persona:** Protocol Understander, Founder / Product Evaluator
- **PURPOSE:** orient
- **PAGE_TYPE:** concept (variant: overview)
- **Outcome:** After reading, the reader can describe Livepeer in one sentence, name the protocol/network split, and list the four participation roles.
- **Arriving knowledge:** None assumed.
- **Arriving question:** "What does Livepeer actually do?"
- **Prev page:** `v2/about/portal`
- **Next page:** `v2/about/mental-model`
- **Key facts (3–7):**
  - Decentralised video and AI compute infrastructure with marketplace economics.
  - Protocol = on-chain coordination (staking, delegation, slashing, probabilistic payments) on Arbitrum One.
  - Network = off-chain GPU mesh (orchestrators, gateways, transcoders, AI workers).
  - LPT (ERC-20) bridged between Ethereum L1 and Arbitrum L2; ETH pays for compute.
  - Four participation roles: orchestrator, gateway, delegator, developer/builder.
  - Foundation supports protocol development; SPEs build public goods funded by treasury.
- **Out of scope:**
  - OSI-stack mental model (lives in `mental-model.mdx`)
  - Smart-contract level economics (lives in `economics.mdx`)
- **Word budget:** 350–450

---

### `v2/about/mental-model`

- **Audience:** community (primary), developer + founder (secondary)
- **Persona:** Protocol Understander, OSS Contributor, Web3 R&D Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can place each Livepeer concern into a 10-layer architectural model and explain how the cryptoeconomic control plane replaces a centralised cloud control plane.
- **Arriving knowledge:** Has read or skimmed `livepeer-overview`. Knows the protocol/network split exists.
- **Arriving question:** "How does the full stack fit together?"
- **Prev page:** `v2/about/livepeer-overview`
- **Next page:** `v2/about/livepeer-network/job-lifecycle` (for technical) or `v2/about/livepeer-protocol/overview` (for protocol depth)
- **Key facts (3–7):**
  - 10 layers: Physical Compute, Transport/Media, Distributed Execution, Crypto-Economic Coordination, Economic & Security, Data & State, Platform Services, Developer Interfaces, Developer Applications, End User.
  - OSI-style analogy with the explicit caveat that Livepeer's "control plane" is cryptoeconomic, not a hyperscaler.
  - Livepeer does not own infrastructure; it indexes and incentivises GPU operators.
  - Persistent storage is external and secondary; Livepeer is segment-streamed compute.
  - Each layer has a Livepeer actor or system named (orchestrators at L1, gateways at L2, protocol at L4, etc.).
- **Out of scope:**
  - Smart-contract function names (lives in `core-mechanisms`, `economics`)
  - Job state machine (lives in `job-lifecycle`)
- **Word budget:** 400–450

---

### `v2/about/core-concepts`

- **Audience:** community (primary)
- **Persona:** Protocol Understander
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can distinguish protocol from network, on-chain from off-chain, and name what each layer owns.
- **Arriving knowledge:** Has seen the protocol/network split named in `livepeer-overview`.
- **Arriving question:** "What is the difference between the protocol and the network, and where does each live?"
- **Prev page:** `v2/about/livepeer-overview` or `v2/about/mental-model`
- **Next page:** `v2/about/livepeer-network/actors`
- **Key facts (3–7):**
  - Protocol = ruleset and on-chain logic on Arbitrum One: staking, delegation, inflation, rewards, slashing, probabilistic payments, governance.
  - Network = off-chain execution layer: orchestrators, transcoders, AI workers, gateways, job routing.
  - LPT lives on Ethereum mainnet (L1) and is bridged to Arbitrum (L2).
  - Bridge: ETH deposits funded into TicketBroker; ticket-based payment off-chain; orchestrators redeem winning tickets on-chain for ETH.
  - LPT is for staking, delegation, and governance only — not for compute payments.
- **Out of scope:**
  - 10-layer mental model (lives in `mental-model`)
  - Per-actor responsibilities at depth (lives in `actors`)
- **Word budget:** 300–400
- **Open IA decision:** keep this page or fold into `livepeer-overview`. Surface in REVIEW mode if working on it.

---

## GROUP — Livepeer Protocol

---

### `v2/about/livepeer-protocol/overview`

- **Audience:** community (primary), developer (secondary)
- **Persona:** Protocol Understander, Diligence Analyst, OSS Contributor
- **PURPOSE:** orient
- **PAGE_TYPE:** concept (variant: overview)
- **Outcome:** After reading, the reader can describe what the protocol governs, name the three contract function categories, and route to the page covering the mechanism they need.
- **Arriving knowledge:** Knows the protocol/network split.
- **Arriving question:** "What does the protocol do, and where do I find each piece?"
- **Prev page:** `v2/about/core-concepts` or `v2/about/mental-model`
- **Next page:** `v2/about/livepeer-protocol/core-mechanisms`
- **Key facts (3–7):**
  - Protocol provides reward systems, coordination mechanisms, payment systems, governance.
  - Three core design goals from the 2018 whitepaper: aligned incentives, trustless verification, composable governance.
  - Three contract function categories: core protocol (staking, rewards, slashing), token and payments (LPT, TicketBroker), governance (Governor, Treasury, BondingVotes).
  - Actor roles: orchestrator (stakes LPT, redeems tickets), delegator (bonds LPT to orchestrator), gateway (pays ETH, no LPT required).
  - On-chain (Arbitrum) coordinates; off-chain network executes.
- **Out of scope:**
  - Per-mechanism deep dives (lives in `core-mechanisms`, `economics`, `governance-model`)
  - Contract addresses (lives in `blockchain-contracts`)
- **Word budget:** 350–450

---

### `v2/about/livepeer-protocol/core-mechanisms`

- **Audience:** developer (primary), community (secondary)
- **Persona:** OSS Contributor, Diligence Analyst, Web3 R&D Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe rounds, staking, reward distribution, probabilistic micropayments, and the proxy upgrade pattern at a level a peer engineer would accept.
- **Arriving knowledge:** Knows the protocol exists, knows LPT is the staking token.
- **Arriving question:** "How does each protocol mechanism actually work?"
- **Prev page:** `v2/about/livepeer-protocol/overview`
- **Next page:** `v2/about/livepeer-protocol/livepeer-token` or `v2/about/livepeer-protocol/economics`
- **Key facts (3–7):**
  - Rounds: ~24 hours, 5760 blocks on mainnet config; round transitions advance via `initializeRound()`.
  - Staking: orchestrator self-bonds, delegators bond to orchestrators via `bond()`; pool sorted by stake; active set is stake-weighted.
  - Rewards: dynamic inflation; if bonded ratio < 50% target, inflation steps up; if > 50%, inflation steps down.
  - Probabilistic micropayments: gateway signs tickets with `faceValue` and `winProb`; only winning tickets redeemed on-chain; ~99% gas reduction versus per-segment payments.
  - Upgrades: proxy pattern; Controller maps contract IDs to implementations; Governor authorises upgrades.
  - AI services do NOT participate in round-based reward system, do NOT require LPT staking, are NOT subject to active-set election. This split is the most important architectural distinction in the tab.
- **Out of scope:**
  - Function-level walk-throughs of money flow (lives in `economics`)
  - Governance process (lives in `governance-model`)
- **Word budget:** 400–450

---

### `v2/about/livepeer-protocol/livepeer-token`

- **Audience:** delegator (primary), community (secondary)
- **Persona:** Diligence Analyst, DePIN-curious LPT Holder
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe LPT's three functions, the dynamic inflation model, and the bridge between L1 and L2.
- **Arriving knowledge:** Has heard of LPT; may not know it is not used to pay for compute.
- **Arriving question:** "What is LPT for?"
- **Prev page:** `v2/about/livepeer-protocol/core-mechanisms`
- **Next page:** `v2/about/livepeer-protocol/economics` or routes to `v2/lpt`
- **Key facts (3–7):**
  - Three functions: staking (bond to BondingManager to operate or delegate), governance (stake-weighted voting via Governor), security (slashable collateral).
  - LPT is NOT used for service payments. ETH or credits pay gateways and orchestrators.
  - Initial supply: 10,000,000 LPT at genesis (2018), distributed via Merkle Mine. No ICO.
  - Current supply approximately 37.9M LPT and approximately 44% staked as of mid-2025 — flag both as REVIEW for live verification.
  - Dynamic inflation rule: bonded ratio versus target (50%); inflation rate steps by Δ each round within `r_min` and `r_max` bounds.
  - Treasury allocation: 10% of newly minted LPT each round, set by LIP-92.
- **Out of scope:**
  - Delegation walkthrough (lives in `v2/delegators`)
  - Wallet setup (lives in `v2/delegators`)
- **Word budget:** 400–450
- **Note:** Existing page has #TODO and #MOVE markers. Resolve in REWRITE mode.

---

### `v2/about/livepeer-protocol/economics`

- **Audience:** developer (primary), orchestrator (secondary), delegator (secondary)
- **Persona:** OSS Contributor, Diligence Analyst, Orchestrator Candidate
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can trace LPT and ETH through every contract: staking flow, reward flow, payment flow, fee flow, withdrawal flows.
- **Arriving knowledge:** Has read `core-mechanisms`. Comfortable with smart contract function calls.
- **Arriving question:** "How does money actually move at the contract level?"
- **Prev page:** `v2/about/livepeer-protocol/core-mechanisms`
- **Next page:** `v2/about/livepeer-protocol/governance-model`
- **Key facts (3–7):**
  - Staking flow: token approval → `bond(amount, orchestratorAddress)` → BondingManager updates pool.
  - Reward flow: each round, active orchestrator calls `reward()`; Minter calculates `mintable = inflation × totalSupply / bonded`; orchestrator keeps `rewardCut`; remainder distributed to delegators by stake; delegators claim via `claimEarnings(endRound)`.
  - Payment flow: broadcaster funds via `fundDepositAndReserve()`; off-chain ticket per segment with faceValue and winProb; only winning tickets redeemed via `redeemWinningTicket()`.
  - Fee flow: orchestrator earnings pool keeps `feeShare` cut; remainder to delegators; claimed via `claimEarnings()`.
  - Withdrawal: delegator `unbond()` → `unbondingPeriod` rounds (typically 7) → `withdrawStake(unbondingLockId)`. Broadcaster `unlock()` → unlock period → `withdraw()`.
  - Gas optimisations: pool hints (O(1) insertions), batch operations, dynamic gas pricing.
- **Out of scope:**
  - Narrative-level "how does money move?" — lives in `livepeer-network/fee-flow`
  - LIP-107 / LIP-100 review pending Mehrdad — flag REVIEW
- **Word budget:** 400–450

---

### `v2/about/livepeer-protocol/governance-model`

- **Audience:** community (primary), delegator (secondary)
- **Persona:** Diligence Analyst, OSS Contributor, Web3 R&D Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe the full LIP lifecycle, name the quorum and threshold rules, and locate any LIP by ID.
- **Arriving knowledge:** Knows LPT is staked. May not know how protocol decisions are made.
- **Arriving question:** "Who governs this protocol and how?"
- **Prev page:** `v2/about/livepeer-protocol/economics`
- **Next page:** `v2/about/livepeer-protocol/treasury`
- **Key facts (3–7):**
  - LIP lifecycle: forum discussion → RFP draft → LIP design doc on GitHub → on-chain submission requires ≥100 LPT (returned if proposal passes) → 30-round voting period (~3.75 days).
  - Voting: stake-weighted; delegators may withdraw delegation temporarily to vote independently; otherwise vote inherited via their orchestrator.
  - Quorum and threshold: 33% of staked LPT participation, >50% "for" majority.
  - Notable LIPs: LIP-1 (process), LIP-73 (Confluence — Arbitrum migration), LIP-89 / LIP-92 (treasury), LIP-100 (monetary policy), LIP-107 (review pending).
  - Foundation provides strategic coordination and SPE oversight; does not vote.
  - Execution: Governor automatically queues and executes approved proposals.
- **Out of scope:**
  - Step-by-step "how to vote" (lives in `v2/lpt/governance/processes.mdx`)
  - LPT staking mechanics (lives in `livepeer-token`)
- **Word budget:** 400–450

---

### `v2/about/livepeer-protocol/treasury`

- **Audience:** community (primary), delegator (secondary)
- **Persona:** Diligence Analyst, SPE applicant
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe how the treasury was created, how it accumulates funds, and how disbursements are governed.
- **Arriving knowledge:** Knows governance exists. May not know there is a treasury.
- **Arriving question:** "Where does protocol funding come from and who controls it?"
- **Prev page:** `v2/about/livepeer-protocol/governance-model`
- **Next page:** `v2/about/livepeer-protocol/technical-architecture`
- **Key facts (3–7):**
  - Created by LIP-89 (treasury) and LIP-92 (10% inflation allocation).
  - Funded by inflationary minting (currently 10% of newly minted LPT each round; verify the 25% number cited in earlier drafts as REVIEW), slashing penalties, fee-pool remainders, direct LIP transfers.
  - Disbursement governed by the same 100-LPT submission, 33% quorum, >50% threshold rules as protocol proposals.
  - Spending categories: core development, ecosystem grants, public goods, security and audits, community programmes, contributor payments.
  - Foundation acts as steward; SPEs (Special Purpose Entities) are the funding recipients.
  - Transparency via Livepeer Explorer and Arbiscan.
- **Out of scope:**
  - Foundation governance specifics (separate organisation, see ecosystem page)
  - SPE application process (lives in `v2/community`)
- **Word budget:** 350–450

---

### `v2/about/livepeer-protocol/technical-architecture`

- **Audience:** developer (primary)
- **Persona:** OSS Contributor, Web3 R&D Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe the contract dependency graph, name the role of each contract, and place each on the L1/L2 boundary.
- **Arriving knowledge:** Knows protocol contracts exist. Comfortable reading dependency diagrams.
- **Arriving question:** "How do the contracts wire together?"
- **Prev page:** `v2/about/livepeer-protocol/treasury`
- **Next page:** `v2/about/livepeer-protocol/blockchain-contracts`
- **Key facts (3–7):**
  - Controller is the registry; maps contract IDs to implementation addresses.
  - Core protocol: BondingManager, RoundsManager, TicketBroker, Minter, ServiceRegistry, AIServiceRegistry.
  - Token: LivepeerToken (ERC-20), BridgeMinter, L1LPTGateway, L2LPTGateway, LivepeerTokenFaucet.
  - Governance: BondingVotes, Governor, LivepeerGovernor, Treasury.
  - Off-chain network passes signed tickets and segment data to on-chain TicketBroker for redemption.
  - Confluence (LIP-73) made Arbitrum One the canonical home; Ethereum mainnet retained for token bridge.
- **Out of scope:**
  - Contract addresses (lives in `blockchain-contracts`)
  - Per-contract function signatures (lives in `economics` and `core-mechanisms`)
- **Word budget:** 400–450
- **Note:** existing page has empty stub sections — full rewrite required.

---

### `v2/about/livepeer-protocol/blockchain-contracts`

- **Audience:** developer (primary)
- **Persona:** OSS Contributor, integrators
- **PURPOSE:** reference
- **PAGE_TYPE:** reference
- **Outcome:** After reading, the reader can locate the Arbitrum or Ethereum contract address for any Livepeer system contract and read its primary functions.
- **Arriving knowledge:** Knows what they need to look up.
- **Arriving question:** "Where is contract X deployed and what does it do?"
- **Prev page:** `v2/about/livepeer-protocol/technical-architecture`
- **Next page:** Routes to `v2/developers` (OSS path)
- **Key facts (3–7):**
  - 15+ contracts grouped: core protocol, token and utility, governance.
  - Addresses verified on-chain (current verification date TBD — REVIEW flag).
  - Each contract block: name, address (Arbitrum One primary, Ethereum L1 where applicable), purpose, primary functions.
  - Imports addresses from data file; never hardcodes them in MDX prose.
- **Out of scope:**
  - Conceptual explanation (lives in `core-mechanisms`, `economics`)
- **Word budget:** 200–500
- **Note:** must import from `livepeer-contract-addresses-data.json`. Resolve duplicate with `resources/blockchain-contracts.mdx`.

---

### `v2/about/livepeer-protocol/design-philosophy` — NEW

- **Audience:** developer (primary), community (secondary)
- **Persona:** OSS Contributor, Web3 R&D Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can articulate why Livepeer made specific design choices: probabilistic payments over per-segment, dynamic inflation over fixed supply, protocol/network separation, Arbitrum over alternatives.
- **Arriving knowledge:** Has read `core-mechanisms` and `economics`. Knows what the protocol does.
- **Arriving question:** "Why was this designed this way?"
- **Prev page:** `v2/about/livepeer-protocol/technical-architecture`
- **Next page:** `v2/about/resources/knowledge-hub/livepeer-whitepaper` or routes to Developers (OSS path)
- **Key facts (3–7):**
  - Probabilistic micropayments versus per-segment: gas cost at L1 made per-segment payments uneconomic; lottery scheme preserves expected value while shifting on-chain footprint to redeemed tickets only.
  - Dynamic inflation versus fixed supply: target bonded ratio (50%) defends against under-staking and overstaking via rate adjustment; preserves long-term participation incentives without committing to a fixed schedule.
  - Protocol/network separation: smart contracts evolve slowly under governance; compute network must evolve quickly with hardware and AI capabilities. Decoupling lets each move at its own clock.
  - Arbitrum One choice: optimistic-rollup security inherits L1 finality; lower gas enables routine staking and ticket redemption.
  - AI services without round-based rewards: AI compute economics (per-token, per-frame) does not map cleanly onto stake-weighted active sets.
- **Out of scope:**
  - Mechanism walkthroughs (lives in `core-mechanisms`)
  - Whitepaper text (lives in `knowledge-hub/livepeer-whitepaper`)
- **Word budget:** 400–450

---

## GROUP — Livepeer Network

---

### `v2/about/livepeer-network/overview`

- **Audience:** community (primary), founder + orchestrator (secondary)
- **Persona:** Protocol Understander, GPU Operator Candidate, Founder
- **PURPOSE:** orient
- **PAGE_TYPE:** concept (variant: overview)
- **Outcome:** After reading, the reader can describe what the network does, who participates, and where to find each part.
- **Arriving knowledge:** Knows the protocol/network split.
- **Arriving question:** "What does the network look like in practice?"
- **Prev page:** `v2/about/core-concepts` or `v2/about/livepeer-overview`
- **Next page:** `v2/about/livepeer-network/actors`
- **Key facts (3–7):**
  - Network is the off-chain execution layer running on operator-supplied GPU hardware.
  - Three node roles: orchestrator (provides compute, stakes LPT), gateway (routes jobs from applications), worker (transcoder or AI inference).
  - Routing happens off-chain; only payments and stake operations touch chain.
  - go-livepeer is the canonical client binary for orchestrator and gateway nodes.
  - Studio, Daydream, Cascade are public gateway services running on the network.
- **Out of scope:**
  - State machine of a job (lives in `job-lifecycle`)
  - Marketplace pricing (lives in `marketplace`)
- **Word budget:** 300–400
- **Note:** current page is implementation notes ("LivepeerServer manages rtmpConnections"). REWRITE required.

---

### `v2/about/livepeer-network/actors`

- **Audience:** community (primary)
- **Persona:** Protocol Understander, all role candidates
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can name each actor's responsibilities, what they earn, what they risk, and how they interact in a job.
- **Arriving knowledge:** Knows the network exists. May not know which roles do what.
- **Arriving question:** "Who participates in the network and what do they each do?"
- **Prev page:** `v2/about/livepeer-network/overview`
- **Next page:** `v2/about/livepeer-network/marketplace`
- **Key facts (3–7):**
  - Orchestrator: GPU-equipped node, self-bonds LPT, sets `rewardCut` and `feeShare`, calls `reward()` per round, redeems winning tickets. Earns ETH fees plus LPT inflation.
  - Delegator: bonds LPT to one or more orchestrators, never transfers ownership, earns share of orchestrator's rewards minus reward cut, governance rights via bonded stake.
  - Gateway: submits jobs, pays in ETH or credits, never holds LPT, never earns inflation. Demand side.
  - Transcoder / AI worker: compute node attached to an orchestrator; does not hold stake itself.
  - Foundation: non-profit; coordinates strategy and SPE oversight.
  - SPEs: community-funded teams building public goods (e.g. LiveInfra, LISAR).
  - Builders / end users: define and consume application demand; their workloads are what the marketplace exists to serve.
- **Out of scope:**
  - Per-role setup walkthroughs (lives in role tabs)
  - Payment flow at contract level (lives in `economics`)
- **Word budget:** 400–450

---

### `v2/about/livepeer-network/technical-architecture`

- **Audience:** developer (primary), orchestrator (secondary)
- **Persona:** Pre-build Developer, GPU Operator Candidate
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe the network stack from application down to GPU, including go-livepeer components, worker types, and observability.
- **Arriving knowledge:** Knows what an orchestrator and gateway are.
- **Arriving question:** "How does the network technically fit together?"
- **Prev page:** `v2/about/livepeer-network/marketplace`
- **Next page:** `v2/about/livepeer-network/interfaces`
- **Key facts (3–7):**
  - Stack: applications and SDKs → gateway APIs (REST, gRPC, GraphQL) → gateway nodes → orchestrator (go-livepeer) → worker layer (FFmpeg, Python AI, WebRTC plugin) → protocol contracts on Arbitrum and Ethereum.
  - go-livepeer components: transcoder selection, ticket validation, reward claim, LPT staking, region advertisement.
  - Worker types: transcoder (FFmpeg, segment processing), inference (Python / Torch), plugin (WebRTC / C++).
  - Public gateways: Livepeer Studio, Daydream, Cascade.
  - Tooling: `livepeer_cli`, `livepeer_exporter` (Prometheus).
  - Observability: Prometheus + Grafana + Loki.
- **Out of scope:**
  - API endpoint reference (lives in `interfaces`)
  - Setup walkthroughs (lives in `v2/orchestrators`, `v2/gateways`)
- **Word budget:** 400–450

---

### `v2/about/livepeer-network/marketplace`

- **Audience:** founder (primary), developer (secondary)
- **Persona:** Founder / Product Evaluator, Pre-build Developer
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can describe how demand and supply meet, how routing decides, and how settlement works.
- **Arriving knowledge:** Knows orchestrator and gateway roles.
- **Arriving question:** "How does the marketplace match jobs to compute?"
- **Prev page:** `v2/about/livepeer-network/actors`
- **Next page:** `v2/about/livepeer-network/job-lifecycle`
- **Key facts (3–7):**
  - Demand: live stream (RTMP per-minute), AI inference (per frame or token), file transcode (batch credits).
  - Supply: orchestrators advertise hardware, region, supported workloads, posted price per segment / frame / token.
  - Routing: gateway scores by latency, workload match, cost, availability. Off-chain, no per-job gas.
  - Pricing: posted (orchestrator-set), not auction-based. LIP-78 proposes spot auctions.
  - Settlement: ETH ticket via TicketBroker, or credit balance via gateway. Periodic LPT inflation per round.
  - Protocol vs marketplace boundary: protocol verifies and pays; marketplace routes; interface layer abstracts.
- **Out of scope:**
  - Probabilistic payment mechanics (lives in `core-mechanisms` and `economics`)
  - Job state machine (lives in `job-lifecycle`)
- **Word budget:** 400–450

---

### `v2/about/livepeer-network/job-lifecycle`

- **Audience:** developer (primary)
- **Persona:** Pre-build Developer, OSS Contributor
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can trace a job from ingest to settlement across both video and AI workflows, naming the events that flip each state.
- **Arriving knowledge:** Knows orchestrator and gateway exist.
- **Arriving question:** "How does a job actually move through the network?"
- **Prev page:** `v2/about/livepeer-network/marketplace`
- **Next page:** `v2/about/livepeer-network/fee-flow`
- **Key facts (3–7):**
  - Seven steps: ingest and segmentation → discovery and selection → price and session → segment dispatch and compute → result return and verification → continuous settlement (tickets) → periodic reward accounting (`reward()`).
  - State machine: Idle → Ingesting → Discovering → SessionEstablished → SegmentDispatch → Executing → Returning → Verifying → Publishing → Settling, with RoundReward branch.
  - Observable metrics: `livepeer_stream_started_total`, `livepeer_segment_transcode_failed_total`, `livepeer_orchestrator_swaps`, `livepeer_tickets_sent`, `livepeer_ticket_redemption_errors`.
  - Probabilistic payment scheme: each ticket has `winProb` chance of fixed `faceValue`; expected payout equals true cost over the long run.
  - Video lifecycle uses stake-weighted active set and ticket redemption.
  - AI lifecycle is market-governed (no active-set election), uses ETH or credit, may pipeline multiple models (Cascade).
- **Out of scope:**
  - Contract-level payment math (lives in `economics`)
  - Setup of an orchestrator or gateway (lives in role tabs)
- **Word budget:** 400–450

---

### `v2/about/livepeer-network/interfaces`

- **Audience:** developer (primary), builder (alt primary)
- **Persona:** Pre-build Developer
- **PURPOSE:** reference
- **PAGE_TYPE:** concept (with reference variant) — defaults to concept register because the page also explains when to use which interface
- **Outcome:** After reading, the reader can choose the right interface (REST, gRPC, GraphQL, JS SDK, CLI, smart contract) for their integration and find the entry point.
- **Arriving knowledge:** Knows they need to integrate with Livepeer somehow.
- **Arriving question:** "Which interface do I use, and where is its entry point?"
- **Prev page:** `v2/about/livepeer-network/technical-architecture`
- **Next page:** Routes to `v2/developers` or `v2/gateways`
- **Key facts (3–7):**
  - REST API (Livepeer Studio): `https://livepeer.studio/api`. Endpoints include `POST /stream`, `POST /transcode`, `POST /ai/infer`.
  - gRPC API (gateway nodes): low-latency orchestrator routing. `gateway.proto` defines methods.
  - GraphQL: `https://explorer.livepeer.org/graphql`. Network metrics, rewards, rounds.
  - JS SDK: `@livepeer/sdk`. Playback, ingest, AI session control.
  - CLI: `livepeer_cli` for orchestrator and delegator operations.
  - Smart contract interfaces: BondingManager, TicketBroker, Governor.
- **Out of scope:**
  - Full API reference (lives in `v2/developers`)
  - SDK changelogs
- **Word budget:** 400–450

---

### `v2/about/livepeer-network/fee-flow`

- **Audience:** orchestrator (primary), community (secondary)
- **Persona:** GPU Operator Candidate, Diligence Analyst, Token Researcher
- **PURPOSE:** explain
- **PAGE_TYPE:** concept
- **Outcome:** After reading, the reader can narrate "where does money come from and where does it go?" in plain language, without needing to read contract function names.
- **Arriving knowledge:** Knows orchestrator, delegator, gateway roles.
- **Arriving question:** "How does money actually move through the network?"
- **Prev page:** `v2/about/livepeer-network/job-lifecycle`
- **Next page:** `v2/about/livepeer-network/interfaces` or routes to Orchestrators
- **Key facts (3–7):**
  - Money enters as ETH (gateway pays for compute) and as newly minted LPT (protocol inflation per round).
  - ETH path: gateway funds reserve → off-chain ticket per segment → orchestrator redeems winning tickets → orchestrator earnings pool → fee cut keeps share for orchestrator → delegator share claimed via `claimEarnings`.
  - LPT path: round opens → active orchestrator calls `reward()` → Minter mints inflation share → orchestrator keeps reward cut → delegator share claimed via `claimEarnings`.
  - Treasury allocation: 10% of newly minted LPT each round, set by LIP-92.
  - Probabilistic payments mean only winning tickets touch chain; the rest are off-chain promises.
  - Withdrawal: 7-round unbonding period (verify current value as REVIEW) for delegators; gateway unlock period for ETH withdrawal.
- **Out of scope:**
  - Function signatures (lives in `economics`)
  - Pricing mechanics (lives in `marketplace`)
- **Word budget:** 400–450
- **Note:** existing file is a 498-byte stub. WRITE required.

---

## GROUP — Resources

---

### `v2/about/resources/faq-about` — NEW (rebuild)

- **Audience:** community (primary)
- **Persona:** all arriving personas
- **PURPOSE:** reference
- **PAGE_TYPE:** reference (variant: compendium)
- **Outcome:** After reading, the reader has answers to the cross-persona questions every arriving reader asks.
- **Arriving knowledge:** None assumed.
- **Arriving question:** "Quick answer to a specific question I have."
- **Prev page:** `v2/about/portal` or `v2/about/navigator`
- **Next page:** Routes by question
- **Key facts (3–7):**
  - "What is the difference between the protocol and the network?"
  - "What is LPT for, and is it used to pay for compute?" (no — ETH or credits)
  - "Is Livepeer in production?" (yes — Confluence migration to Arbitrum, link to Explorer)
  - "How does Livepeer differ from Filecoin / Render / Akash?"
  - "Where does the LPT inflation come from?"
  - "Do I need LPT to use Livepeer as a developer?" (no)
  - "Where can I see live network metrics?"
- **Out of scope:**
  - Role-specific FAQs (live in role tabs)
  - Step-by-step procedures
- **Word budget:** 400 (cap; cross-persona scope only)
- **Note:** current `faq-about.mdx` is an IA blueprint. Archive it to `_workspace/faq-blueprint.md` first.

---

### `v2/about/resources/knowledge-hub/livepeer-whitepaper`

- **Audience:** community (primary), researcher (secondary)
- **Persona:** Web3 R&D Researcher, Diligence Analyst, Ecosystem Newcomer
- **PURPOSE:** reference
- **PAGE_TYPE:** resource
- **Outcome:** After reading, the reader can find the original 2017 whitepaper, understand its core ideas in summary, and locate which ideas evolved versus which were superseded.
- **Arriving knowledge:** Has heard of the whitepaper.
- **Arriving question:** "What did the original whitepaper say, and what is current?"
- **Prev page:** `v2/about/resources/knowledge-hub/`
- **Next page:** `v2/about/livepeer-protocol/design-philosophy`
- **Key facts (3–7):**
  - Published 2017, by Doug Petkanics and Eric Tang.
  - Four core ideas: incentivised participation, trustless verification, open participation, economic security via stake.
  - Truebit-style verification was specified at the time; current verification model uses perceptual hashing and economic incentives via slashing.
  - Original token distribution (2018): Merkle Mine, no ICO.
  - Confluence (LIP-73) moved canonical activity to Arbitrum One after the whitepaper.
  - Card link to GitHub-hosted whitepaper PDF.
- **Out of scope:**
  - Current protocol mechanics (lives in `core-mechanisms`)
  - Design rationale for current state (lives in `design-philosophy`)
- **Word budget:** 250–350

---

### `v2/about/resources/knowledge-hub/gateways-vs-orchestrators`

- **Audience:** community (primary)
- **Persona:** Ecosystem Newcomer, GPU Operator Candidate, Pre-build Developer
- **PURPOSE:** choose
- **PAGE_TYPE:** resource
- **Outcome:** After reading, the reader can name the difference between a gateway and an orchestrator in two sentences and pick which role applies to them.
- **Arriving knowledge:** Has heard both terms; not sure which is which.
- **Arriving question:** "What is the difference between a gateway and an orchestrator?"
- **Prev page:** `v2/about/resources/knowledge-hub/`
- **Next page:** `v2/about/livepeer-network/actors` or routes to Orchestrators / Gateways
- **Key facts (3–7):**
  - Gateways coordinate; orchestrators compute.
  - Gateway: submits jobs, pays in ETH or credits, no LPT, no stake, demand side.
  - Orchestrator: provides GPU compute, stakes LPT, sets reward cut and fee cut, supply side.
  - Gateways may also run a public service (Studio, Daydream).
  - One operator may run both, but the roles are economically distinct.
- **Out of scope:**
  - Setup walkthroughs (live in role tabs)
- **Word budget:** 200–300

---

### `v2/about/resources/knowledge-hub/evaluating-livepeer` — NEW

- **Audience:** founder (primary)
- **Persona:** Founder / Product Evaluator
- **PURPOSE:** evaluate
- **PAGE_TYPE:** resource (variant: knowledge-hub)
- **Outcome:** After reading, the founder has a labelled reading path that surfaces the build-vs-buy decision: what Livepeer provides, what reliability evidence exists, what they would need to build themselves, where to verify live data.
- **Arriving knowledge:** Heard of Livepeer; evaluating for a product.
- **Arriving question:** "Is Livepeer the right infrastructure for what I am building?"
- **Prev page:** `v2/about/navigator`
- **Next page:** `v2/solutions` or `v2/developers`
- **Key facts (3–7):**
  - Reading path with explicit ordering: `livepeer-overview` → `livepeer-network/marketplace` → `livepeer-network/interfaces` → `resources/reference/network-metrics` → `livepeer-protocol/economics` (only if needed for cost modelling).
  - Build-vs-buy framework: what the platform provides (compute, transcoding, AI inference, marketplace), what the founder must build (product UX, app-level reliability), what is shared (gateway operation if running their own).
  - Reliability evidence: Confluence migration shipped, public gateways operating (Studio, Daydream), Explorer for live network state.
  - Cost framing: ETH or credit per minute (live stream), per frame or token (AI inference). Posted pricing — see `marketplace` for current model.
  - Decision criteria: workload type (video / AI / both), latency tolerance, cost target, custody preference (own gateway versus public).
- **Out of scope:**
  - Product onboarding (lives in `v2/solutions`)
  - SDK reference (lives in `v2/developers`)
- **Word budget:** 350–400

---

### `v2/about/resources/knowledge-hub/contributor-orientation` — NEW

- **Audience:** developer (primary), community (secondary)
- **Persona:** OSS / Protocol Contributor
- **PURPOSE:** orient
- **PAGE_TYPE:** resource (variant: knowledge-hub)
- **Outcome:** After reading, the OSS contributor has a labelled reading path through the architecture and design rationale needed to make an informed first contribution.
- **Arriving knowledge:** Strong technical background; new to the Livepeer codebase or protocol.
- **Arriving question:** "If I want to contribute to the protocol, where do I start reading?"
- **Prev page:** `v2/about/navigator`
- **Next page:** `v2/developers` (OSS path)
- **Key facts (3–7):**
  - Reading path: `mental-model` → `livepeer-network/technical-architecture` → `livepeer-protocol/core-mechanisms` → `livepeer-protocol/economics` → `livepeer-protocol/design-philosophy` → `livepeer-protocol/blockchain-contracts`.
  - Repos to clone: `livepeer/go-livepeer`, `livepeer/protocol`, `livepeer/ai-worker`.
  - Where governance happens: forum, GitHub LIP repo, Governor contract.
  - SPE programme as a path for funded contribution.
  - Foundation point of contact.
- **Out of scope:**
  - Onboarding to specific repos (lives in respective READMEs / Developers tab)
- **Word budget:** 300–400

---

### `v2/about/resources/reference/network-metrics` — NEW

- **Audience:** community (primary), founder + delegator (secondary)
- **Persona:** Diligence Analyst, Ecosystem Newcomer, Founder
- **PURPOSE:** reference
- **PAGE_TYPE:** reference
- **Outcome:** After reading, the reader has a labelled inventory of authoritative live data sources for Livepeer: active orchestrator count, current inflation, fees generated, AI compute volume.
- **Arriving knowledge:** Knows the network exists and is asking "is it actively used?"
- **Arriving question:** "What does this network look like today?"
- **Prev page:** `v2/about/resources/`
- **Next page:** External (Explorer, Dune, Messari)
- **Key facts (3–7):**
  - Livepeer Explorer: live orchestrator count, active set, inflation rate, treasury balance.
  - Subgraph: historical round data, delegator earnings, ticket redemptions.
  - Public Dune dashboards (link to canonical examples).
  - Messari research index (where applicable).
  - Coingecko / CoinMarketCap for LPT price (not for protocol metrics).
  - Each source: what it measures and what it does NOT measure (e.g. Explorer does not show AI inference job volume).
- **Out of scope:**
  - Embedded live charts (link out only)
  - Methodology of each source (link to source's own docs)
- **Word budget:** 250–350

---

### `v2/about/resources/reference/technical-roadmap`

- **Audience:** community (primary), founder + delegator (secondary)
- **Persona:** Diligence Analyst, Ecosystem Newcomer, Founder
- **PURPOSE:** reference
- **PAGE_TYPE:** reference
- **Outcome:** After reading, the reader can describe the current Livepeer roadmap phases and find authoritative links to roadmap announcements.
- **Arriving knowledge:** Knows Livepeer is in production. Wants to understand direction.
- **Arriving question:** "What is being built next?"
- **Prev page:** `v2/about/resources/`
- **Next page:** External (Foundation roadmap, blog)
- **Key facts (3–7):**
  - Foundation's three-phase roadmap (verify current phase as REVIEW).
  - Cascade vision: real-time AI workflows.
  - Real-time AI Network update milestones.
  - Where roadmap updates are published: roadmap.livepeer.org and the official blog.
- **Out of scope:**
  - Speculative features
  - LIP-by-LIP timelines
- **Word budget:** 250–400
- **Note:** existing file is a 793-byte stub.

---

### `v2/about/resources/reference/livepeer-contract-addresses`

- **Audience:** developer (primary)
- **Persona:** OSS Contributor, integrator
- **PURPOSE:** reference
- **PAGE_TYPE:** reference
- **Outcome:** After reading, the reader has the canonical contract address for any Livepeer system contract on Arbitrum One and (where applicable) Ethereum L1.
- **Arriving knowledge:** Knows the contract name they need.
- **Arriving question:** "Where is contract X deployed?"
- **Prev page:** `v2/about/livepeer-protocol/blockchain-contracts`
- **Next page:** External (Arbiscan, Etherscan)
- **Key facts (3–7):**
  - Addresses sourced from `livepeer-contract-addresses-data.json` — never hardcoded.
  - Grouped by: core protocol, token, governance.
  - Each row: name, address, network, link to block explorer.
  - Last verified date drives `lastVerified` frontmatter.
- **Out of scope:**
  - Contract function reference (lives in `blockchain-contracts.mdx`)
- **Word budget:** 200–400

---

### `v2/about/resources/reference/livepeer-glossary`

- **Audience:** community (primary)
- **Persona:** all
- **PURPOSE:** reference
- **PAGE_TYPE:** reference (variant: compendium)
- **Outcome:** After reading, the reader has a one-paragraph definition of any Livepeer-specific term used elsewhere in the docs.
- **Arriving knowledge:** Hit an unfamiliar term elsewhere.
- **Arriving question:** "What does X mean?"
- **Prev page:** Any About page (link from glossary term)
- **Next page:** Returns to source page
- **Key facts (3–7):**
  - Terms grouped: actors and roles, protocol concepts, web3, video engineering, AI, payments and economics, operations.
  - Each entry: term, one-paragraph definition, link to canonical page.
  - Deprecated terms flagged (e.g. "Broadcaster" → use "gateway").
- **Out of scope:**
  - General web3 glossary (link out)
- **Word budget:** 200–500
- **Note:** resolve canonicalisation between `glossary.mdx` (rendered from JSON) and `livepeer-glossary.mdx` (static). Open IA decision.

---

### `v2/about/resources/reference/glossary`

- **Audience:** community (primary)
- **Persona:** all
- **PURPOSE:** reference
- **PAGE_TYPE:** reference (variant: compendium)
- **Outcome:** Same as `livepeer-glossary` above; this is the rendered, searchable version using SearchTable + `glossary-data.json`.
- **Arriving knowledge:** Hit an unfamiliar term elsewhere.
- **Arriving question:** "What does X mean?"
- **Prev page:** Any About page
- **Next page:** Returns to source page
- **Key facts (3–7):**
  - Renders from `glossary-data.json` via `SearchTable` component.
  - Companion JSON is generated; do not hand-edit if the file carries an auto-generated banner.
  - Categories match the static glossary one-for-one.
- **Out of scope:**
  - Hand-authored prose definitions outside the JSON source
- **Word budget:** 200–400
- **Note:** open IA decision — which glossary is canonical.
