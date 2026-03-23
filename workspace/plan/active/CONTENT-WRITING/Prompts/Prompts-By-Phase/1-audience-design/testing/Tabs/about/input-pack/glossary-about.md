# Glossary — About Tab

**Tab folder**: `v2/about/`
**Date**: 2026-03-20
**Terms**: 65
**Source**: Agent deep-read + classified-by-tag.md

---

### Active Set

**Definition**: The top 100 orchestrators by total bonded stake that are eligible to receive work and inflationary rewards each round.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### Active Set Election

**Definition**: The process at the start of each round that determines the top 100 orchestrators by bonded stake to form the active set.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### Arbitrum (Arbitrum One)

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security; the chain where Livepeer protocol contracts are deployed.
**External**: [Arbitrum docs](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### Bonding

**Definition**: Locking (staking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system to participate in network security and earn rewards.
**External**: [Livepeer bonding overview](https://forum.livepeer.org/t/an-overview-of-bonding/97)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `about/staking`, `about/delegators`

---

### Broadcaster (deprecated)

**Definition**: Legacy term for the node that published streams and submitted video jobs for transcoding; now replaced by "Gateway."
**Also known as**: replaced by Gateway
**Context**: The term "Broadcaster" was used in early Livepeer documentation and the original whitepaper; current documentation uses "Gateway" for this role.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### Cascade

**Definition**: Livepeer's strategic vision and upgrade for becoming the leading platform for real-time AI video pipelines, integrating AI inference alongside transcoding on the network.
**Context**: Cascade is the named upgrade phase enabling AI inference workloads on the Livepeer network, extending the protocol beyond video transcoding.
**Tags**: `livepeer:upgrade`
**Status**: current
**Pages**: `about/upgrades`, `about/protocol`

---

### Codec (CODEC)

**Definition**: Software or hardware that compresses and decompresses digital video, typically using lossy compression algorithms.
**External**: [Video codec — Wikipedia](https://en.wikipedia.org/wiki/Video_codec)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `about/transcoding`, `about/video`

---

### ComfyStream

**Definition**: A Livepeer project running ComfyUI workflows as a real-time media processing backend for live streams, enabling AI-powered video generation pipelines.
**Context**: ComfyStream is Livepeer's integration layer connecting ComfyUI diffusion workflows to live streaming, allowing real-time AI video transformations to run on network orchestrators.
**Tags**: `livepeer:product`, `ai:framework`
**Status**: current
**Pages**: `about/ai`

---

### Confluence

**Definition**: The production protocol upgrade (LIP-73) that migrated Livepeer's core protocol contracts from Ethereum L1 to Arbitrum One.
**Context**: Confluence was a major protocol milestone enabling cheaper, faster on-chain operations by moving the staking and payment contracts to Arbitrum.
**Tags**: `livepeer:upgrade`
**Status**: current
**Pages**: `about/upgrades`, `about/protocol`

---

### Controller

**Definition**: The registry smart contract that manages all protocol contract addresses and coordinates protocol upgrades on Arbitrum.
**Context**: The Controller is the central registry through which all other Livepeer smart contracts are discovered and updated during protocol upgrades.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `about/protocol`, `about/contracts`

---

### CPU (Central Processing Unit)

**Definition**: The primary general-purpose processor in a computer; in Livepeer, CPU handles node software overhead while GPU handles intensive transcoding and AI inference workloads.
**External**: [Wikipedia](https://en.wikipedia.org/wiki/Central_processing_unit)
**Tags**: `technical:hardware`
**Status**: current
**Pages**: `about/architecture`, `about/ai`

---

### Cryptoeconomic Primitives

**Definition**: Fundamental building blocks that combine cryptography and economic incentives to enable secure, decentralized protocols.
**External**: [Cryptoeconomics — Wikipedia](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `about/protocol`, `about/economics`

---

### Daydream

**Definition**: Livepeer's hosted real-time AI video platform that turns live camera input into AI-transformed visuals with sub-second latency.
**Context**: Daydream is Livepeer's consumer-facing AI video product demonstrating real-time AI video generation capabilities built on the Livepeer network.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `about/ai`

---

### Delegator

**Definition**: A token holder who stakes LPT to an orchestrator to secure the network, participate in governance, and earn a share of rewards.
**Context**: Delegators are a core protocol actor in Livepeer; they bond LPT to orchestrators they trust, sharing in inflationary rewards and ETH fees without operating infrastructure themselves.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `about/staking`, `about/protocol`

---

### Delegation

**Definition**: The act of LPT holders staking their tokens toward orchestrators they trust, sharing in rewards without running infrastructure.
**External**: [Livepeer delegation](https://www.livepeer.org/delegate)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `about/staking`, `about/protocol`

---

### Dynamic Inflation

**Definition**: Livepeer's inflation model where the per-round LPT issuance rate adjusts up or down by 0.00005% each round based on whether staking participation is below or above the 50% target bonding rate.
**Context**: Dynamic inflation is Livepeer's mechanism for incentivizing participation: when fewer than 50% of LPT is bonded, inflation rises to attract more stakers; when above 50%, it falls.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `about/economics`, `about/protocol`

---

### Ephemeral Compute

**Definition**: Short-lived GPU resource allocation provisioned on-demand for a single AI inference task, released when the task completes.
**External**: [Edge computing — Wikipedia](https://en.wikipedia.org/wiki/Edge_computing)
**Tags**: `technical:infra`
**Status**: draft
**Pages**: `about/ai`, `about/architecture`

---

### ETH Fees

**Definition**: Payments in Ether made by gateways to orchestrators for completed transcoding or AI inference work, delivered via the probabilistic micropayment system.
**Context**: ETH fees are the demand-side revenue stream for orchestrators and their delegators, distinct from inflationary LPT rewards; they represent real market demand for network services.
**Tags**: `economic:payment`, `web3:token`
**Status**: current
**Pages**: `about/economics`, `about/payments`

---

### Execution Layer

**Definition**: The layer where actual compute work is performed by orchestrators and workers, distinct from the on-chain protocol layer.
**Context**: In Livepeer's architecture, the execution layer is the off-chain network of orchestrator nodes doing transcoding and AI inference, coordinated by the on-chain protocol layer on Arbitrum.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### Fault Proof

**Definition**: A mechanism proving that an invalid state transition occurred on a Layer 2 chain, enabling challenges to incorrect rollup state roots.
**External**: [Rollups — ethereum.org](https://ethereum.org/developers/docs/scaling/)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### Fee Share

**Definition**: The portion of ETH fees earned by an orchestrator that is distributed to its delegators, determined by the orchestrator's configured fee cut percentage.
**Context**: Fee share (the complement of fee cut) is how delegators earn from real network demand; orchestrators configure what percentage of ETH fees they pass through to their stakers.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `about/staking`, `about/economics`

---

### Finality

**Definition**: The condition where a blockchain transaction becomes irreversible and cannot be altered or rolled back.
**External**: [Ethereum glossary — finality](https://ethereum.org/glossary/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### Gateway

**Definition**: A node that submits jobs to the network, routes work to orchestrators, manages payment flows, and provides the interface between end-user applications and the Livepeer protocol.
**Context**: Gateways replaced the legacy "Broadcaster" role; they are the demand-side entry point to the network, handling job creation, orchestrator selection, and probabilistic payment ticket issuance.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `about/architecture`, `about/protocol`

---

### Governor Contract

**Definition**: The on-chain governance smart contract (LivepeerGovernor) that authorizes protocol upgrades and parameter changes via stake-weighted voting.
**Context**: The Governor contract is Livepeer's on-chain decision-making mechanism, introduced in LIP-89, enabling token-weighted votes on treasury allocations and protocol changes.
**Tags**: `livepeer:contract`, `web3:governance`
**Status**: current
**Pages**: `about/governance`, `about/contracts`

---

### HLS (HTTP Live Streaming)

**Definition**: Apple's HTTP Live Streaming protocol that encodes video into multiple quality levels segmented into small files, delivered with an index playlist for adaptive bitrate playback.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `about/transcoding`, `about/streaming`

---

### Inflation Model

**Definition**: The formula governing new LPT issuance each round, where the rate adjusts dynamically based on whether total bonded stake is above or below the 50% target bonding rate.
**Context**: Livepeer's inflation model is designed to self-regulate staking participation: the rate increases when participation is low and decreases when it is high, targeting equilibrium at 50% bonded supply.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: draft
**Pages**: `about/economics`, `about/protocol`

---

### Job Lifecycle

**Definition**: The sequence of stages from job submission through orchestrator selection, work execution, verification, and payment settlement.
**Context**: Understanding the job lifecycle is fundamental to Livepeer's architecture: a gateway submits a job, the network selects an orchestrator, work is performed off-chain, verified, and payment tickets are issued.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### Layer 1

**Definition**: The base blockchain network (e.g. Ethereum) that validates and finalizes transactions without reliance on another network.
**External**: [Layer-1 blockchain — Wikipedia](https://en.wikipedia.org/wiki/Layer-1_blockchain)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### Layer 2

**Definition**: A separate blockchain that extends a Layer 1 by handling transactions off-chain while inheriting security guarantees from the underlying chain.
**External**: [Layer 2 — ethereum.org](https://ethereum.org/layer-2/)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `about/protocol`, `about/network`

---

### LIP (Livepeer Improvement Proposal)

**Definition**: A formal design document proposing a protocol change, new feature, or governance parameter adjustment for the Livepeer network.
**Context**: LIPs are Livepeer's governance mechanism for protocol evolution; they are discussed on the governance forum, ratified by stake-weighted vote, and executed via the Governor contract.
**Tags**: `livepeer:protocol`, `operational:governance`
**Status**: current
**Pages**: `about/governance`, `about/protocol`

---

### LPT (Livepeer Token)

**Definition**: The ERC-20 governance and staking token of the Livepeer protocol, used for orchestrator selection via delegation, reward distribution, and network security.
**Context**: LPT is Livepeer's native utility token; bonded LPT determines which orchestrators are in the active set, how rewards are distributed, and how governance votes are weighted.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `about/staking`, `about/protocol`

---

### Low-Latency

**Definition**: A system characteristic where the delay between an event occurring and a response being delivered is minimised; in Livepeer, sub-500ms round-trip times are targeted for real-time AI video pipelines.
**Context**: Critical for interactive AI video applications — high latency breaks the real-time feedback loop between user input and AI-transformed output.
**Tags**: `video:streaming`
**Status**: current
**Pages**: `about/ai`, `about/streaming`

---

### Minter Contract

**Definition**: The smart contract responsible for minting new LPT tokens during orchestrator reward calls and holding ETH collected from winning payment tickets.
**Context**: The Minter is the on-chain treasury and issuance contract; it releases newly minted LPT to the BondingManager each round and holds gateway ETH deposits until tickets are redeemed.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `about/contracts`, `about/economics`

---

### Off-chain

**Definition**: Activities occurring outside the main blockchain, typically for scalability, speed, or cost reasons, with results optionally settled on-chain.
**External**: [Off-chain — ethereum.org glossary](https://ethereum.org/glossary/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### On-chain

**Definition**: Activities directly recorded and executed on the blockchain with full transparency and security guarantees.
**External**: [On-chain — ethereum.org glossary](https://ethereum.org/glossary/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `about/protocol`, `about/contracts`

---

### Open Source

**Definition**: Software distributed with its source code under a licence permitting study, modification, and redistribution; Livepeer's protocol, go-livepeer node software, and SDK libraries are all open source.
**Also known as**: open-source, FOSS
**External**: [Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
**Tags**: `technical:concept`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### Orchestrator

**Definition**: A supply-side operator contributing GPU resources, receiving transcoding or AI inference jobs, and earning ETH fees and inflationary LPT rewards.
**Context**: Orchestrators are the primary compute providers of the Livepeer network; they must bond LPT to enter the active set, perform work reliably, and are subject to slashing for protocol violations.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### OSI Model

**Definition**: The Open Systems Interconnection reference model that defines seven network layers (physical through application) as a conceptual framework for understanding protocol design.
**External**: [OSI model — Wikipedia](https://en.wikipedia.org/wiki/OSI_model)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `about/architecture`

---

### Pay-per-Pixel

**Definition**: Livepeer's pricing model where orchestrators are paid based on the total number of pixels transcoded, enabling granular and standardized cost comparison across different video resolutions and durations.
**Context**: Pay-per-pixel is the fundamental unit of exchange in Livepeer's transcoding marketplace; it allows apples-to-apples pricing across different resolutions and bitrates by normalizing to pixels processed.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `about/economics`

---

### Payment Channel

**Definition**: An off-chain mechanism where two parties conduct multiple transactions and only settle the final state on-chain, reducing per-transaction gas costs.
**External**: [State channels — ethereum.org](https://ethereum.org/developers/docs/scaling/state-channels/)
**Tags**: `economic:payment`
**Status**: current
**Pages**: `about/payments`, `about/protocol`

---

### Payment Tickets

**Definition**: Signed data structures issued by a gateway to an orchestrator representing a probabilistic payment; only winning tickets are redeemable on-chain for their ETH face value.
**Context**: Payment tickets are Livepeer's mechanism for streaming micropayments without per-segment gas costs; the lottery design means only a statistically appropriate fraction of tickets win, amortizing on-chain fees across many payments.
**Tags**: `economic:payment`, `livepeer:protocol`
**Status**: current
**Pages**: `about/payments`, `about/protocol`

---

### Per Pixel (Price Per Pixel)

**Definition**: Livepeer's unit-based pricing mechanism where fees are calculated based on the number of pixels processed during a transcoding or AI inference job.
**Context**: A 4K frame costs more to process than a 720p frame because it contains more pixels; enables pricing that scales with workload complexity.
**Tags**: `livepeer:economics`
**Status**: current
**Pages**: `about/economics`, `about/transcoding`

---

### Per Round

**Definition**: The Livepeer protocol's fundamental time unit, approximately equal to one day of Ethereum blocks; reward minting, activations, and delegator earnings accrue on a per-round basis.
**Context**: Key unit for orchestrator reward calculations, delegator stake checkpoints, and LPT inflation scheduling.
**Tags**: `livepeer:economics`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### Probabilistic Micropayments

**Definition**: A lottery-based payment scheme where only winning tickets are redeemed on-chain, amortizing transaction costs across many small payments without requiring per-payment gas.
**Context**: Livepeer's probabilistic micropayment system lets gateways pay orchestrators per video segment at sub-cent amounts without incurring Ethereum gas fees on every payment; the expected value of tickets matches the service cost.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `about/payments`, `about/protocol`

---

### Proof-of-Stake

**Definition**: A blockchain consensus mechanism where validators stake cryptocurrency as collateral to propose and validate blocks, replacing computation-intensive proof-of-work.
**External**: [Proof-of-stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### Quorum

**Definition**: The minimum amount of participating stake required for a governance vote to be considered binding and valid.
**Context**: Quorum in Livepeer governance ensures that protocol decisions reflect meaningful stakeholder engagement; votes that do not reach the quorum threshold are not enacted regardless of their outcome.
**Tags**: `livepeer:protocol`, `web3:governance`, `operational:governance`
**Status**: current
**Pages**: `about/governance`

---

### Rebonding

**Definition**: Re-staking tokens that are in the unbonding period to an orchestrator, canceling the unbonding process and returning them to active bonded stake.
**External**: [Livepeer bonding overview](https://forum.livepeer.org/t/an-overview-of-bonding/97)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `about/staking`, `about/delegators`

---

### Reward Call

**Definition**: The on-chain transaction that an active orchestrator submits each round to mint and distribute new LPT inflation rewards to itself and its delegators.
**Context**: Reward calls are an orchestrator's operational responsibility each round; missing reward calls means forfeiting inflationary LPT for that round, which also harms delegators who rely on that income.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `about/staking`, `about/protocol`

---

### Reward Cut

**Definition**: The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder to its delegators.
**Context**: Reward cut is a key parameter orchestrators configure to attract delegators; a lower reward cut means orchestrators pass more LPT to stakers, while a higher cut means they keep more for themselves.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `about/staking`, `about/economics`

---

### Round

**Definition**: A discrete time interval defined in Arbitrum/Ethereum blocks during which staking rewards are calculated, the active set is determined, and protocol state is updated.
**Context**: Rounds are Livepeer's fundamental time unit for protocol operations; reward calls, active set elections, and inflation adjustments all happen on a per-round basis.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### RTMP (Real-Time Messaging Protocol)

**Definition**: Real-Time Messaging Protocol for streaming audio, video, and data over TCP, commonly used on port 1935 for live video ingest from broadcast software.
**External**: [RTMP — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `about/transcoding`, `about/streaming`

---

### Segment

**Definition**: A time-sliced chunk of multiplexed audio and video data that is independently transcoded for parallel processing in Livepeer's pipeline.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `livepeer:protocol`, `video:processing`
**Status**: current
**Pages**: `about/transcoding`, `about/protocol`

---

### Service URI

**Definition**: The on-chain registered endpoint URL that gateways use to discover and establish a connection with an orchestrator node.
**Context**: The Service URI is how orchestrators advertise their network address; it is registered in the ServiceRegistry smart contract so gateways can look up orchestrators by their on-chain identity and contact them directly.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### Session

**Definition**: An active connection between a gateway and an orchestrator during which one or more jobs are processed within a continuous work period.
**Context**: Sessions in Livepeer represent the active working relationship between a gateway and a chosen orchestrator; payment tickets are issued within a session, and the session persists across multiple segments of a stream.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/architecture`

---

### Slashing

**Definition**: A penalty mechanism that destroys a portion of an orchestrator's bonded LPT for protocol violations such as failing verification, skipping verifications, or underperformance.
**External**: [Livepeer whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)
**Tags**: `livepeer:protocol`, `web3:tokenomics`
**Status**: current
**Pages**: `about/protocol`, `about/staking`

---

### SPE (Special Purpose Entity)

**Definition**: A treasury-funded organizational unit with a defined scope, budget, deliverables, and accountability mechanism for executing specific ecosystem initiatives.
**Context**: SPEs are Livepeer's primary mechanism for funding ecosystem development; they are proposed via governance, approved by LPT stakeholder vote, and receive LPT from the on-chain treasury to fund their work.
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `about/governance`, `about/protocol`

---

### Stake-Weighted

**Definition**: A mechanism where each participant's voting power, reward allocation, or selection probability is proportional to their staked token balance rather than equal per-participant.
**Context**: Used in Livepeer governance votes, orchestrator selection, and reward distribution — delegators with more staked LPT have proportionally greater influence.
**Tags**: `livepeer:governance`
**Status**: current
**Pages**: `about/governance`, `about/staking`

---

### Stake-Weighted Voting

**Definition**: A governance voting system where each participant's vote weight is proportional to their bonded LPT stake.
**Context**: Stake-weighted voting in Livepeer means both orchestrators and delegators can vote on governance proposals, with voting power determined by bonded LPT; delegators can override their orchestrator's vote with their own stake.
**Tags**: `livepeer:protocol`, `web3:governance`
**Status**: current
**Pages**: `about/governance`

---

### Ticket Broker

**Definition**: The TicketBroker smart contract that manages Livepeer's probabilistic micropayment system, holding gateway deposits and processing winning ticket redemptions.
**Context**: The Ticket Broker is the on-chain settlement layer for Livepeer's payment system; gateways deposit ETH into it as collateral, and orchestrators submit winning tickets to it to claim payments.
**Tags**: `livepeer:contract`, `economic:payment`
**Status**: current
**Pages**: `about/payments`, `about/contracts`

---

### Treasury

**Definition**: The on-chain pool of LPT governed by token holders via the LivepeerGovernor contract, funded by a percentage of per-round inflation and used for community-approved ecosystem grants and development.
**Context**: The Livepeer treasury is a protocol-owned fund that allocates resources to SPEs, public goods, and ecosystem growth; it is distinct from the Livepeer Foundation and is controlled entirely by on-chain governance.
**Tags**: `economic:treasury`, `livepeer:protocol`
**Status**: current
**Pages**: `about/governance`, `about/economics`

---

### Unbonding

**Definition**: The process of initiating withdrawal of bonded LPT from an orchestrator, which triggers a 7-round waiting period (thawing period) before tokens become liquid and withdrawable.
**External**: [Livepeer unbonding introduction](https://forum.livepeer.org/t/introduction-to-partial-unbonding/360)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `about/staking`, `about/delegators`

---

### USD (United States Dollar)

**Definition**: The official currency of the United States; used as the reference denomination for Livepeer gateway fees, grant amounts, treasury allocations, and market data.
**External**: [Wikipedia](https://en.wikipedia.org/wiki/United_States_dollar)
**Tags**: `economic:currency`
**Status**: current
**Pages**: `about/economics`, `about/governance`

---

### Verification Mechanisms

**Definition**: Protocol-level processes that confirm orchestrators performed transcoding or AI work correctly, including Truebit-style verification and probabilistic spot-checking approaches.
**Context**: Verification mechanisms are how Livepeer enforces work quality without requiring every segment to be re-verified; the protocol uses a combination of cryptographic challenges and economic slashing to deter misbehavior.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `about/protocol`, `about/transcoding`

---

### Warm Model

**Definition**: An AI model that is already loaded into GPU memory and ready to serve inference requests immediately, without the cold-start latency of loading from storage.
**Context**: In Livepeer's AI network, orchestrators can pre-load ("warm") models in GPU VRAM to guarantee fast response times; warm models are declared in the aiModels.json config and prioritized for latency-sensitive pipelines.
**Tags**: `livepeer:config`, `ai:concept`
**Status**: current
**Pages**: `about/ai`

---

### Winning Ticket

**Definition**: A probabilistic payment ticket whose random outcome meets the configured win probability threshold, entitling the orchestrator to redeem it on-chain for its ETH face value.
**Context**: In Livepeer's payment system, most tickets are non-winning; only the fraction that statistically win are submitted to the TicketBroker for on-chain redemption, keeping gas costs low while maintaining correct expected payment values.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `about/payments`, `about/protocol`
