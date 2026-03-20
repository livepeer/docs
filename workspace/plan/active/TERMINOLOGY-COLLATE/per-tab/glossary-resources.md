# Glossary — Resources Tab

**Tab folder**: `v2/resources/`
**Date**: 2026-03-20
**Terms**: 98
**Source**: Agent deep-read + classified-by-tag.md + existing resources glossary

---

### Active Set

**Definition**: The top 100 orchestrators by total bonded stake eligible to receive work each round.
**Context**: At round start, Livepeer's protocol runs an election selecting the 100 highest-staked orchestrators; only these nodes can receive transcoding or AI inference jobs until the next round boundary.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### AI

**Also known as**: Artificial Intelligence
**Definition**: The simulation of human intelligence processes by machines — including learning, reasoning, and problem-solving — using statistical models trained on large datasets.
**External**: [Artificial intelligence — Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### Agent

**Definition**: A system that perceives its environment and acts autonomously to achieve goals, often powered by large language models with tool access.
**External**: [Intelligent agent — Wikipedia](https://en.wikipedia.org/wiki/Intelligent_agent)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Arbitrum

**Also known as**: Arbitrum One
**Definition**: A Layer-2 Optimistic Rollup settling to Ethereum that processes transactions off-chain while inheriting Ethereum-grade security.
**External**: [Arbitrum — docs.arbitrum.io](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `resources/glossary`

---

### Bitrate

**Definition**: The number of bits conveyed or processed per unit of time; in video it determines the data per second of content, affecting quality and file size.
**External**: [Bit rate — Wikipedia](https://en.wikipedia.org/wiki/Bit_rate)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `resources/glossary`, `resources/encoding`

---

### BondingManager

**Definition**: The core Livepeer smart contract managing bonding, delegation, staking logic, and fund ownership on Arbitrum.
**Context**: BondingManager is the authoritative on-chain record of every orchestrator's and delegator's bonded stake position, reward cuts, and fee shares; all stake changes route through this contract.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `resources/glossary`, `resources/contracts`

---

### BondingVotes

**Definition**: A Livepeer smart contract tracking stake-weighted voting power snapshots for on-chain governance polls on Arbitrum L2.
**Context**: BondingVotes enables the LivepeerGovernor to read historical stake balances at proposal creation time, preventing vote manipulation by unstaking after a proposal passes.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `resources/glossary`, `resources/contracts`

---

### Broadcaster (deprecated)

**Definition**: The legacy Livepeer term for a node that published streams and submitted video for transcoding; now replaced by the term "Gateway."
**Also known as**: Gateway (current term)
**Context**: Early Livepeer documentation and the original whitepaper used "Broadcaster" for the job-submitting role. All current documentation uses "Gateway." The term is preserved in the glossary for backward compatibility with archived materials.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Bridging

**Also known as**: Bridge
**Definition**: The mechanism connecting two blockchain ecosystems to enable token or information transfer between them.
**External**: [Blockchain bridge — Ethereum docs](https://ethereum.org/developers/docs/bridges/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/arbitrum`

---

### BYOC

**Also known as**: Bring Your Own Container
**Definition**: A deployment pattern allowing teams to supply custom Docker containers running Python workloads for Livepeer AI streaming pipelines.
**Context**: BYOC enables orchestrators to run arbitrary containerized AI models without those models being natively supported by go-livepeer, expanding the range of pipelines available on the network.
**Tags**: `livepeer:deployment`, `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/network`

---

### Capability

**Definition**: An AI service or job type — defined as a pipeline and model pair — that an orchestrator advertises as available to gateways.
**Context**: When an orchestrator registers capabilities, gateways use this information during discovery to route AI inference requests only to nodes that can handle the requested pipeline and model combination.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### CDN

**Also known as**: Content Delivery Network
**Definition**: A geographically distributed network of servers caching and delivering content with high availability and low latency to end users.
**External**: [Content delivery network — Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `resources/glossary`

---

### CLI

**Also known as**: Command-Line Interface
**Definition**: A text-based interface for interacting with software by typing commands, used to configure and operate Livepeer gateway and orchestrator nodes.
**External**: [Command-line interface — Wikipedia](https://en.wikipedia.org/wiki/Command_line_interface)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `resources/glossary`, `resources/tools`

---

### Codec

**Definition**: Software or hardware that compresses and decompresses digital video using a defined algorithm, typically employing lossy compression.
**External**: [Video codec — Wikipedia](https://en.wikipedia.org/wiki/Video_codec)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `resources/glossary`, `resources/encoding`

---

### Cold Start

**Also known as**: Cold model
**Definition**: The latency incurred when an AI model must be loaded from storage into GPU memory before it can serve its first inference request, typically 5–90 seconds.
**External**: [Cold start latency — OpenMetal](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### ComfyStream

**Definition**: A Livepeer project implementing a ComfyUI custom node that runs real-time media workflows for AI-powered video and audio processing on live streams.
**Context**: ComfyStream is the primary open-source tool for running ComfyUI-based AI pipelines as live-video-to-video workflows on the Livepeer network, enabling artists and developers to transform live camera input with diffusion models at interactive frame rates.
**Tags**: `livepeer:product`, `ai:framework`
**Status**: current
**Pages**: `resources/glossary`

---

### ControlNet

**Definition**: A neural network architecture that adds spatial conditioning controls — such as edge maps, depth, or pose — to pretrained diffusion models.
**External**: [ControlNet — Hugging Face](https://huggingface.co/lllyasviel/ControlNet)
**Tags**: `ai:model`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Controller

**Definition**: The Livepeer registry smart contract managing all protocol contract addresses and coordinating protocol upgrades on Arbitrum.
**Context**: The Controller is the single source of truth for which contract address corresponds to each protocol role (BondingManager, Minter, RoundsManager, etc.), enabling upgrades without changing external references.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `resources/glossary`, `resources/contracts`

---

### DAO

**Also known as**: Decentralized Autonomous Organization
**Definition**: An organization governed by smart contracts in which rules are encoded in code and members vote on proposals via a decentralized ledger.
**External**: [Decentralized autonomous organization — Wikipedia](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### DASH

**Also known as**: Dynamic Adaptive Streaming over HTTP
**Definition**: An adaptive bitrate streaming protocol that breaks content into small HTTP-served segments at multiple bitrate levels, allowing clients to switch quality dynamically.
**External**: [DASH — Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### Decentralized GPU Network

**Definition**: A marketplace of GPU resources contributed by orchestrators worldwide, coordinated through crypto-economic incentives for video transcoding and AI inference.
**Context**: Livepeer's decentralized GPU network is the supply side of the protocol — thousands of orchestrator-operated machines offering compute capacity that gateways route jobs to based on price, performance, and capability.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/network`

---

### Delegation

**Definition**: The act of LPT holders staking their tokens toward an orchestrator they trust, sharing in rewards without needing to run infrastructure themselves.
**External**: [Delegated proof of stake — Wikipedia](https://en.wikipedia.org/wiki/Proof_of_stake)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Delegator

**Definition**: A token holder who stakes LPT to an orchestrator to help secure the network, participate in governance, and earn a share of rewards.
**Context**: Delegators are one of the three core Protocol Actors in Livepeer. They do not run nodes but contribute stake weight to orchestrators, earning proportional inflationary LPT and ETH fee rewards each round.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Delivery

**Definition**: The stage in the video pipeline where encoded content is transmitted from origin servers or CDNs to end-user devices for playback.
**External**: [Streaming media — Wikipedia](https://en.wikipedia.org/wiki/Streaming_media)
**Tags**: `video:processing`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### DePIN

**Also known as**: Decentralized Physical Infrastructure Networks
**Definition**: A category of blockchain systems that incentivize communities to collectively build and operate physical or computational infrastructure using token rewards.
**External**: [DePIN — Wikipedia](https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/network`

---

### Developer

**Definition**: Anyone building applications using Livepeer, typically through hosted services such as Livepeer Studio, Daydream, or Streamplace, or via library SDKs.
**Context**: In the Livepeer actor taxonomy, Developers are distinct from Gateway operators: they consume the network's capabilities through APIs and SDKs rather than submitting jobs directly to the protocol.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### Developer Platform

**Definition**: The abstraction layer providing tools, APIs, dashboards, and hosted services — including Livepeer Studio, Daydream, and Streamplace — for building applications on top of Livepeer.
**Context**: The Developer Platform shields application builders from low-level protocol mechanics (staking, ticket redemption, orchestrator discovery) while still routing jobs through the decentralized network.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `resources/glossary`, `resources/tools`

---

### Diffusion Model

**Also known as**: Diffusion
**Definition**: A class of generative neural networks that learn to produce data by iteratively reversing a gradual noising process applied during training.
**External**: [Diffusion model — Wikipedia](https://en.wikipedia.org/wiki/Diffusion_model)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### ETH

**Also known as**: Ether
**Definition**: The native cryptocurrency of Ethereum, used to pay transaction fees (gas) and as the settlement currency for Livepeer transcoding and AI inference fees.
**External**: [What is ether? — Ethereum.org](https://ethereum.org/what-is-ether/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `resources/glossary`, `resources/payments`

---

### Gas

**Definition**: The unit measuring computational effort required to execute operations on Ethereum or Arbitrum; users pay gas fees in ETH to cover execution costs.
**External**: [Gas — Ethereum docs](https://ethereum.org/developers/docs/gas/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Gateway

**Definition**: A Livepeer node that submits jobs, routes work to orchestrators, manages payment flows, and provides a direct interface to the protocol.
**Context**: Gateways are the demand-side actors in the Livepeer protocol — they hold ETH deposits for probabilistic micropayments, discover and select orchestrators, and receive transcoded or AI-processed output to forward to end users or applications.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Governance

**Definition**: The on-chain system of rules and processes for protocol decision-making, including LIP proposals, stake-weighted voting, and treasury allocation.
**External**: [Decentralized governance — Wikipedia](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
**Tags**: `operational:governance`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### Governor

**Also known as**: LivepeerGovernor
**Definition**: The Livepeer on-chain governance contract that authorizes protocol upgrades and parameter changes via token-weighted delegated voting.
**Context**: The Governor (LivepeerGovernor) enforces the full governance lifecycle: proposal submission, voting delay, voting period, quorum check, and timelock-delayed execution, using BondingVotes for stake snapshots.
**Tags**: `livepeer:contract`, `web3:governance`
**Status**: current
**Pages**: `resources/glossary`, `resources/contracts`

---

### GPU

**Also known as**: Graphics Processing Unit
**Definition**: A specialized parallel processor originally designed for rendering graphics, now the primary hardware for video transcoding and AI inference.
**External**: [Graphics processing unit — Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `resources/glossary`, `resources/network`

---

### HLS

**Also known as**: HTTP Live Streaming
**Definition**: An adaptive bitrate streaming protocol developed by Apple that encodes video into multiple quality levels and serves them as segmented playlists over HTTP.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### Inflation

**Definition**: The dynamic issuance of new LPT each round, distributed to orchestrators and delegators based on their participation, designed to incentivize staking toward a 50% target bonding rate.
**External**: [Cryptoeconomics — Wikipedia](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `livepeer:protocol`, `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/economics`

---

### Inference

**Definition**: Running a trained machine learning model on new input data to produce predictions, classifications, or generated outputs.
**External**: [Inference engine — Wikipedia](https://en.wikipedia.org/wiki/Inference_engine)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Ingest

**Definition**: The process of receiving a live video stream from a broadcaster's encoder into a media server, typically via RTMP, SRT, or WebRTC.
**External**: [Real-Time Messaging Protocol — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:processing`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### Latency

**Definition**: The delay between video capture at the source and display on the viewer's device, accumulating at every stage of the pipeline.
**External**: [Latency — Wikipedia](https://en.wikipedia.org/wiki/Latency_(audio))
**Tags**: `video:playback`, `technical:infra`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### Layer 2

**Definition**: A separate blockchain built on top of a Layer-1 base chain (such as Ethereum) that handles transactions off-chain while inheriting the security guarantees of the base layer.
**External**: [Layer 2 — Ethereum.org](https://ethereum.org/layer-2/)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Livepeer Actor

**Definition**: A participant in the Livepeer protocol or network — human or machine — that performs a defined role such as submitting jobs, providing compute, verifying work, or securing the system.
**Context**: The term "Livepeer Actor" is the broadest participant category, encompassing Protocol Actors (gateways, orchestrators, delegators) as well as ecosystem contributors, developers, and tooling operators.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Livepeer Ecosystem

**Definition**: The full set of projects, tools, participants, and organizations building on or contributing to the Livepeer network, including SPEs, community tools, integrated applications, and partner services.
**Context**: The Livepeer Ecosystem is broader than the protocol itself — it includes third-party tooling, community programs, governance participants, and complementary infrastructure providers that extend the network's capabilities.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### Livepeer Explorer

**Definition**: The official protocol explorer web interface for viewing network state, orchestrator information, staking data, and governance proposals.
**Context**: Livepeer Explorer is the primary dashboard for delegators to discover orchestrators, view reward history, stake LPT, and monitor governance activity without running node software.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `resources/glossary`, `resources/tools`

---

### Livepeer Foundation

**Definition**: A non-profit Cayman Islands Foundation Company stewarding the long-term vision, ecosystem growth, and core development of the Livepeer network.
**Context**: The Livepeer Foundation is distinct from Livepeer Inc. It is member-governed and acts as a steward rather than a controller, funding SPEs, running the governance forum, and representing the ecosystem externally.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### Livepeer Network

**Definition**: The live, operational decentralized system of orchestrators, workers, gateways, and broadcasters performing video transcoding and AI inference jobs.
**Context**: "Livepeer Network" refers to the running infrastructure layer — distinct from the Livepeer Protocol, which is the on-chain rule set. The network is the mesh of machines; the protocol governs their behavior.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Livepeer Protocol

**Definition**: The on-chain ruleset and smart contract logic governing staking, delegation, inflation, orchestrator selection, slashing, and probabilistic payments.
**Context**: The Livepeer Protocol is the coordination and incentive layer — it does not perform video or AI compute itself but enforces correct behavior, reward distribution, and economic security for the network.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### LPMS

**Also known as**: Livepeer Media Server
**Definition**: An open-source media server library providing live video functionality including RTMP ingest and HLS output, used as the foundation for Livepeer transcoding nodes.
**Context**: LPMS is the core media server component in go-livepeer; orchestrators and gateways use it to handle video stream ingestion, segment processing, and output generation.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `resources/glossary`, `resources/tools`

---

### LPT

**Also known as**: Livepeer Token
**Definition**: The ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security.
**Context**: Staked LPT determines an orchestrator's probability of being selected for work (economic weight) and their share of inflationary rewards. LPT is deployed to Ethereum mainnet and bridged to Arbitrum via the L2LPTGateway.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Merkle Mine

**Definition**: Livepeer's algorithm for decentralized token distribution at genesis using Merkle proofs to fairly distribute initial LPT supply.
**Context**: Merkle Mine was the mechanism used at Livepeer's 2018 mainnet launch to distribute tokens to existing Ethereum addresses without an ICO, using a Merkle tree of eligible addresses and on-chain proof verification.
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/history`

---

### Minter

**Also known as**: Minter contract
**Definition**: The Livepeer smart contract responsible for minting new LPT tokens during reward calls and holding ETH collected from winning payment tickets.
**Context**: The Minter is called by the BondingManager at each reward call to create new LPT proportional to the current inflation rate, then distribute it to the calling orchestrator and their delegators.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `resources/glossary`, `resources/contracts`

---

### Model

**Definition**: A mathematical structure — a neural network with learned weights — enabling predictions or content generation for new inputs.
**External**: [Machine learning — Wikipedia](https://en.wikipedia.org/wiki/Machine_learning)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Network Effects

**Definition**: The phenomenon where a network's value increases as more participants join, creating compounding benefits for all existing members.
**External**: [Network effect — Wikipedia](https://en.wikipedia.org/wiki/Network_effect)
**Tags**: `economic:business`, `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/economics`

---

### Node

**Definition**: Any computing device running Livepeer software and participating in protocol operations — gateway nodes, orchestrator nodes, or worker nodes.
**External**: [Node (networking) — Wikipedia](https://en.wikipedia.org/wiki/Node_(networking))
**Tags**: `technical:infra`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Off-chain

**Definition**: Activities, computations, or data exchanges that occur outside the main blockchain and are not directly recorded on-chain.
**External**: [Off-chain — Ethereum glossary](https://ethereum.org/glossary/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### On-chain

**Definition**: Actions, computations, or data that are directly recorded, executed, and verified on the blockchain with full transparency.
**External**: [On-chain — Ethereum glossary](https://ethereum.org/glossary/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### On-chain Treasury

**Definition**: A protocol-governed smart contract pool of LPT funded by a portion of each round's inflation, allocated to ecosystem development through community-approved proposals.
**Context**: The Livepeer on-chain treasury was established by LIP-89 and LIP-92. It is governed by LivepeerGovernor: any proposal reaching quorum and passing threshold can direct funds to SPEs, grants, or other public goods.
**Tags**: `livepeer:protocol`, `economic:treasury`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### Open Source

**Definition**: Software whose source code is freely available for anyone to view, use, modify, and redistribute.
**External**: [Open-source software — Wikipedia](https://en.wikipedia.org/wiki/Open-source_software)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### Orchestrator

**Definition**: A supply-side node operator contributing GPU resources to the Livepeer network, receiving jobs from gateways, performing video transcoding or AI inference, and earning LPT rewards plus ETH fees.
**Context**: Orchestrators are the primary compute providers in Livepeer. They must bond LPT to join the active set, maintain service URI registration, issue reward calls each round, and ensure their transcoding or AI output passes verification.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Payment Ticket

**Also known as**: Ticket
**Definition**: A signed off-chain data structure issued by a gateway to an orchestrator representing a probabilistic payment, with a configured chance of being redeemable for ETH on-chain.
**Context**: Payment Tickets are Livepeer's probabilistic micropayment mechanism — rather than settling every small payment on-chain (which would be prohibitively expensive), tickets function like lottery tickets, with winners redeemed via the TicketBroker contract.
**Tags**: `economic:payment`, `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/payments`

---

### Pipeline

**Definition**: A configured end-to-end AI processing workflow that defines the data flow from input through one or more model inference steps to produce output.
**Context**: In Livepeer's AI network, a pipeline identifies a specific processing type (e.g., text-to-image, live-video-to-video) combined with a model ID; orchestrators advertise which pipelines they support via capability advertisement.
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Protocol

**Definition**: The on-chain governance and incentive layer that coordinates orchestrators, staking rewards, inflation, slashing, and job payments via smart contracts on Arbitrum.
**Context**: In Livepeer documentation, "Protocol" specifically refers to the smart contract system — as distinct from the "Network," which is the off-chain operational layer of running nodes.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### Protocol Actor

**Definition**: A main participant performing a core function in the Livepeer protocol: gateways, orchestrators, and delegators.
**Context**: Protocol Actors interact directly with Livepeer smart contracts — gateways submit jobs and manage payment deposits, orchestrators bond stake and call rewards, delegators bond stake to orchestrators. Developers using hosted services are not Protocol Actors unless they also run a gateway.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Quality Ladder

**Definition**: An ordered set of encoding profiles from lowest to highest quality used for adaptive bitrate rendition selection in video delivery.
**External**: [Encoding ladder — Cloudinary glossary](https://cloudinary.com/glossary/encoding-ladder)
**Tags**: `video:processing`
**Status**: current
**Pages**: `resources/glossary`, `resources/encoding`

---

### Real-Time AI

**Definition**: Running machine learning models on live streaming input with latency low enough for interactive speeds, typically under 100 milliseconds.
**External**: [Real-time inference — Ultralytics](https://www.ultralytics.com/glossary/real-time-inference)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Rendition

**Definition**: A single encoded version of a source video at a specific resolution, bitrate, and codec configuration.
**External**: [Video rendition — Cloudinary glossary](https://cloudinary.com/glossary/video-rendition)
**Tags**: `video:processing`
**Status**: current
**Pages**: `resources/glossary`, `resources/encoding`

---

### Remote Signer

**Definition**: A service that holds private keys securely in an isolated environment and signs transactions on behalf of a Livepeer gateway or orchestrator node.
**External**: [Remote signing — Ethereum docs](https://ethereum.org/developers/docs/consensus-mechanisms/pos/keys/)
**Tags**: `technical:security`
**Status**: current
**Pages**: `resources/glossary`

---

### Reputation

**Definition**: A measure of an orchestrator's performance, reliability, and trustworthiness that influences job routing priority and payment selection by gateways.
**Context**: Reputation in Livepeer is not a single on-chain score but a composite of off-chain performance metrics — success rate, latency, and transcode fail rate — that gateways use in their orchestrator selection weighting.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Reward Cut

**Definition**: The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder to their delegators.
**Context**: Orchestrators set their reward cut as a protocol parameter visible in Livepeer Explorer. A 0% reward cut passes all inflation rewards to delegators; a 100% cut keeps everything. Delegators use this to evaluate yield when choosing which orchestrator to stake toward.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Rollups

**Definition**: Layer-2 scaling solutions that execute transactions off-chain and post compressed data or proofs to Layer 1 to inherit its security guarantees.
**External**: [Rollups — Ethereum docs](https://ethereum.org/developers/docs/scaling/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Round

**Definition**: A discrete time interval measured in Ethereum/Arbitrum blocks during which staking rewards are calculated and protocol state is updated.
**Context**: Each Livepeer round corresponds to approximately one day of blocks on Arbitrum. Active orchestrators must call the reward function once per round to mint and distribute their proportional LPT inflation.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### RTMP

**Also known as**: Real-Time Messaging Protocol
**Definition**: A TCP-based protocol for streaming audio, video, and data over the internet, historically operating on port 1935, widely used for live video ingest.
**External**: [Real-Time Messaging Protocol — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### SDXL

**Also known as**: Stable Diffusion XL
**Definition**: An advanced open-source text-to-image diffusion model with a larger UNet and dual text encoders producing high-resolution 1024×1024 images.
**External**: [Stable Diffusion XL — Hugging Face](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
**Tags**: `ai:model`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Segment

**Definition**: A short time-sliced chunk of multiplexed audio and video that is independently transcoded, enabling parallel processing across multiple orchestrators.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:processing`, `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Slashing

**Definition**: A penalty mechanism that destroys a portion of an orchestrator's bonded LPT for defined protocol violations such as failing verification or submitting fraudulent results.
**External**: [Proof of stake — Wikipedia](https://en.wikipedia.org/wiki/Proof_of_stake)
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Slashing Conditions

**Definition**: The network-defined rules specifying exactly when and how LPT is slashed: failing verification checks, skipping assigned verifications, or sustained underperformance.
**Context**: Slashing Conditions are encoded in the Livepeer whitepaper and protocol contracts. They create economic accountability for orchestrators by making misbehavior financially costly, proportional to their bonded stake.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### SPE

**Also known as**: Special Purpose Entity
**Definition**: A treasury-funded team or organization with a defined scope, budget, and accountability structure, funded by the Livepeer on-chain treasury to deliver specific protocol or ecosystem objectives.
**Context**: SPEs replaced the earlier Livepeer Inc model of centralized development. Each SPE is approved by governance vote, receives milestone-based treasury funding, and publishes regular progress updates to the community forum.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### Stake

**Also known as**: Bonded Stake
**Definition**: LPT locked in the Livepeer protocol via bonding, representing a participant's commitment and determining their share of rewards and work allocation.
**Context**: Stake is the core Sybil-resistance mechanism in Livepeer — orchestrators with more bonded stake have higher probability of active set inclusion and larger reward shares, while delegators' stakes earn proportional passive rewards.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Stake-for-Access

**Also known as**: SFA
**Definition**: A model where staking the protocol's native token is required to perform work or access network services, converting participation into token buying pressure.
**Context**: In Livepeer's stake-for-access design, orchestrators must bond LPT to receive jobs, and the amount staked influences their selection probability. This aligns the interests of compute providers with long-term token value.
**Tags**: `livepeer:protocol`, `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Staking

**Definition**: Locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn rewards.
**External**: [Proof of stake — Ethereum docs](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:tokenomics`, `economic:reward`
**Status**: current
**Pages**: `resources/glossary`, `resources/staking`

---

### Streaming

**Definition**: Continuous delivery of audio and video content over a network, rendered in real time as it is received rather than requiring a full download before playback.
**External**: [Streaming media — Wikipedia](https://en.wikipedia.org/wiki/Streaming_media)
**Tags**: `video:playback`
**Status**: current
**Pages**: `resources/glossary`, `resources/index`

---

### TAM

**Also known as**: Total Addressable Market
**Definition**: The total potential revenue opportunity available to a product or service if it captured 100% of its target market.
**External**: [Total addressable market — Wikipedia](https://en.wikipedia.org/wiki/Total_addressable_market)
**Tags**: `economic:business`, `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/economics`

---

### TensorRT

**Definition**: NVIDIA's inference SDK that optimizes trained models through quantization, layer fusion, and kernel tuning to deliver low-latency GPU inference.
**External**: [TensorRT — NVIDIA developer](https://developer.nvidia.com/tensorrt)
**Tags**: `ai:framework`, `technical:infra`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Tokenomics

**Also known as**: Token Economics
**Definition**: The economic design of a token system encompassing supply, distribution, incentive structures, staking mechanics, inflation curves, and governance rights.
**External**: [Cryptoeconomics — Wikipedia](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `resources/glossary`, `resources/economics`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding to another — changing format, resolution, bitrate, or codec — to produce multiple adaptive renditions.
**External**: [Transcoding — Wikipedia](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Transformer

**Definition**: A neural network architecture that uses self-attention mechanisms to process sequential data in parallel, forming the basis of most modern large language models and many vision models.
**External**: [Transformer (machine learning) — Wikipedia](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture))
**Tags**: `ai:concept`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### Treasury

**Definition**: The pool of LPT and ETH held on-chain for funding public goods, ecosystem development, and community-approved initiatives.
**Context**: The Livepeer treasury is funded by a governance-set percentage of each round's LPT inflation (Treasury Reward Cut Rate). Proposals to spend treasury funds go through the LivepeerGovernor contract with quorum requirements and a timelock before execution.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `resources/glossary`, `resources/governance`

---

### Verifier

**Definition**: A network component responsible for validating work performed by orchestrators, confirming that transcoded or AI-processed output matches expected results.
**Context**: The Verifier role is part of Livepeer's fault-proof system: it samples orchestrator outputs and triggers slashing conditions if misbehavior is detected. In the current network, verification uses deterministic checks and spot sampling rather than the originally planned Truebit mechanism.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### Warm Model

**Definition**: An AI model already loaded into GPU memory and ready to serve inference requests immediately without cold-start delay.
**External**: [Cold start latency — OpenMetal](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

### WebRTC

**Definition**: An open-source project and W3C standard providing browsers and mobile apps with real-time peer-to-peer audio, video, and data exchange without plugins.
**External**: [WebRTC — Wikipedia](https://en.wikipedia.org/wiki/WebRTC)
**Tags**: `video:protocol`, `technical:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### WHEP

**Also known as**: WebRTC-HTTP Egress Protocol
**Definition**: A protocol enabling viewers to receive WebRTC streams from servers via SDP offer/answer exchange over standard HTTP, used for browser-based sub-second latency playback.
**External**: [WHEP — IETF draft](https://datatracker.ietf.org/doc/draft-ietf-wish-whep/)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `resources/glossary`, `resources/streaming`

---

### Worker

**Definition**: A Livepeer node running Docker containers for AI models or transcoding processes, executing compute tasks delegated by an orchestrator.
**Context**: Workers are the compute leaf nodes in a Livepeer orchestrator pool. An orchestrator can coordinate many workers to scale capacity horizontally; each worker connects via the orchSecret and processes jobs assigned by the orchestrator.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `resources/glossary`, `resources/protocol`

---

### World Model

**Definition**: A neural network that represents and predicts environment dynamics, enabling an agent to plan future actions by simulating outcomes without interacting with the real environment.
**External**: [Generative AI — Wikipedia](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
**Tags**: `ai:application`
**Status**: current
**Pages**: `resources/glossary`, `resources/ai`

---

*Additional terms from the existing resources/livepeer-glossary.mdx not in classified-by-tag.md:*

---

### Block Timestamps

**Definition**: Unix timestamps embedded in each Ethereum or Arbitrum block header, used by smart contracts for time-dependent functions such as round boundaries.
**External**: [Ethereum glossary — ethereum.org](https://ethereum.org/glossary/)
**Tags**: `web3:identity`
**Status**: draft
**Pages**: `resources/glossary`

---

### Configuration Parameters

**Definition**: CLI flags and environment variables that control node behavior including payment settings, pricing, preferred orchestrators, and network mode.
**Context**: Livepeer node configuration is managed entirely through command-line flags passed to go-livepeer at startup, covering everything from pricePerUnit and MaxPrice to orchSecret and operational mode settings.
**Tags**: `livepeer:config`
**Status**: draft
**Pages**: `resources/glossary`, `resources/tools`

---

### Ethereum Address

**Also known as**: Wallet Public Address
**Definition**: A 42-character hexadecimal string beginning with "0x," derived from the last 20 bytes of a public key hash, used to send and receive funds and interact with smart contracts.
**External**: [Ethereum accounts — Ethereum docs](https://ethereum.org/developers/docs/accounts/)
**Tags**: `web3:identity`
**Status**: draft
**Pages**: `resources/glossary`

---

### Fee Cut

**Definition**: The percentage of ETH job fees that an orchestrator retains before distributing the remainder to their delegators.
**Context**: Fee Cut and Reward Cut are two separate commission parameters in Livepeer. Fee Cut applies to ETH earned from transcoding and AI inference jobs, while Reward Cut applies to inflationary LPT. Both are set by the orchestrator and visible in Livepeer Explorer.
**Tags**: `economic:reward`
**Status**: draft
**Pages**: `resources/glossary`

---

### Fee Pool

**Definition**: The pool of accumulated ETH fees earned from transcoding and AI inference jobs, distributed between orchestrators and their delegators based on stake weight and commission settings.
**Context**: The fee pool accumulates from winning payment tickets redeemed by orchestrators. At claim time, the orchestrator retains their Fee Cut percentage and distributes the rest proportionally to delegators.
**Tags**: `economic:reward`
**Status**: draft
**Pages**: `resources/glossary`

---

### ICO

**Also known as**: Initial Coin Offering
**Definition**: A fundraising mechanism where a blockchain project sells newly created tokens to the public in exchange for established cryptocurrencies.
**External**: [Initial coin offering — Wikipedia](https://en.wikipedia.org/wiki/Initial_coin_offering)
**Tags**: `web3:concept`, `economic:business`
**Status**: draft
**Pages**: `resources/glossary`
