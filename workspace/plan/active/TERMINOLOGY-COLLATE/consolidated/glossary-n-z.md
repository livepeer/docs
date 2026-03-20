# Livepeer Unified Glossary — Terms N–Z

> Part 2 of 2. See [glossary-a-m.md](glossary-a-m.md) for terms A–M. See [glossary-index.md](glossary-index.md) for the category index, tab index, gap list, and external links.

---

### NaaP (Network as a Platform)

**Definition**: Network-as-a-Product — a reference architecture and implementation for multi-tenant gateway operation providing JWT-based authentication, developer API keys, and per-user usage tracking on top of a Livepeer gateway; also framed as the strategic positioning of delivering the Livepeer Network as a reliable, SLA-backed product layer.

**Tags**: `livepeer:product`

**Tabs**: developers, gateways

**Pages**: `developers/protocol`, `developers/architecture`, `gateways/architecture`, `gateways/protocol`

**Context**: NaaP enables gateway operators to expose Livepeer infrastructure to third-party developers with managed access control and billing, turning a single gateway deployment into a platform business. Repository: github.com/livepeer/naap.

**Status**: current

**Also known as**: NaaP

---

### Network Effects

**Definition**: The phenomenon where a network's value increases as more participants join, creating compounding benefits for all existing members.

**Tags**: `economic:business`, `web3:tokenomics`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/economics`

**External**: [Network effect (Wikipedia)](https://en.wikipedia.org/wiki/Network_effect)

**Status**: current

---

### Node

**Definition**: Computing device connected to a network participating in protocol operations such as transcoding, routing, or staking; any computing device running Livepeer software including gateway, orchestrator, or worker nodes.

**Tags**: `technical:infra`

**Tabs**: home, resources

**Pages**: `home/network`, `home/architecture`, `resources/glossary`, `resources/protocol`

**External**: [Node networking (Wikipedia)](https://en.wikipedia.org/wiki/Node_(networking))

**Status**: current

---

### Non-custodial

**Definition**: A staking model in which users retain control of their private keys and token ownership while their LPT is bonded, so they are never required to transfer custody to a third party.

**Tags**: `web3:concept`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/security`

**External**: [Proof of stake (ethereum.org)](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)

**Status**: current

---

### NPC (Non-Player Character)

**Definition**: Non-player character not controlled by a human, increasingly powered by AI for dynamic, real-time interactions.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Non-player character (Wikipedia)](https://en.wikipedia.org/wiki/Non-player_character)

**Status**: current

---

### NVDEC

**Definition**: NVIDIA hardware video decoder that offloads video decoding from the CPU to dedicated silicon on NVIDIA GPUs.

**Tags**: `technical:infra`

**Tabs**: orchestrators

**Pages**: `orchestrators/transcoding`, `orchestrators/setup`

**External**: [NVDEC (Wikipedia)](https://en.wikipedia.org/wiki/NVDEC)

**Status**: current

---

### NVENC

**Definition**: NVIDIA hardware video encoder that offloads H.264 and H.265 encoding from the CPU to dedicated silicon on NVIDIA GPUs.

**Tags**: `technical:infra`

**Tabs**: orchestrators

**Pages**: `orchestrators/transcoding`, `orchestrators/setup`

**External**: [NVENC (Wikipedia)](https://en.wikipedia.org/wiki/NVENC)

**Status**: current

---

### O-T Split

**Definition**: Architectural separation of the Orchestrator and Transcoder (Worker) processes, typically running on different machines, where the orchestrator handles protocol interaction and the transcoder handles GPU compute.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/config`

**Context**: Enables security isolation and multi-GPU scaling. The orchestrator process uses the `-orchestrator` flag; the transcoder uses `-transcoder`. Authentication between them uses the `orchSecret` shared secret.

**Status**: current

---

### OBS (Open Broadcaster Software)

**Definition**: Free, open-source application for screen capture and live streaming, supporting RTMP, RTMPS, SRT, and WebRTC output protocols.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/guides`

**External**: [OBS Studio (Wikipedia)](https://en.wikipedia.org/wiki/OBS_Studio)

**Status**: current

---

### Off-chain

**Definition**: Activities occurring outside the main blockchain, typically for scalability, speed, or cost reasons, with results optionally settled on-chain.

**Tags**: `web3:concept`

**Tabs**: about, resources

**Pages**: `about/protocol`, `about/architecture`, `resources/glossary`, `resources/protocol`

**External**: [Off-chain (ethereum.org glossary)](https://ethereum.org/glossary/)

**Status**: current

---

### Off-Chain Gateway

**Definition**: A gateway node that operates without blockchain integration, using a remote signer for payment operations and specifying orchestrators manually rather than relying on protocol discovery.

**Tags**: `livepeer:deployment`

**Tabs**: gateways

**Pages**: `gateways/modes`

**Context**: Off-chain is a sustainable production mode for gateways (unlike off-chain orchestrators, which are only for testing). An off-chain gateway holds no ETH; a community-hosted remote signer at signer.eliteencoder.net is publicly available and free to use.

**Status**: current

---

### Ollama

**Definition**: Open-source tool for running large language models locally with a CLI and OpenAI-compatible REST API.

**Tags**: `ai:model`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Ollama](https://ollama.com/)

**Status**: current

---

### On-chain

**Definition**: Actions, computations, or data that are directly recorded, executed, and verified on the blockchain with full transparency and security guarantees.

**Tags**: `web3:concept`

**Tabs**: about, resources

**Pages**: `about/protocol`, `about/contracts`, `resources/glossary`, `resources/protocol`

**External**: [On-chain (ethereum.org glossary)](https://ethereum.org/glossary/)

**Status**: current

---

### On-Chain Gateway

**Definition**: A gateway node connected to the Livepeer protocol on Arbitrum, managing its own Ethereum wallet and using on-chain probabilistic micropayments for orchestrator settlement.

**Tags**: `livepeer:deployment`

**Tabs**: gateways

**Pages**: `gateways/modes`

**Context**: On-chain gateways require ETH deposited on Arbitrum for the payment deposit and reserve, and use protocol-based orchestrator discovery. This mode provides access to the full registered orchestrator pool but requires crypto-wallet management.

**Status**: current

---

### On-chain Treasury

**Definition**: Protocol-governed pool of LPT funded by inflation for community-approved ecosystem development, administered via the LivepeerGovernor contract.

**Tags**: `livepeer:protocol`, `economic:treasury`

**Tabs**: community, lpt, resources

**Pages**: `community/treasury`, `lpt/treasury`, `lpt/governance`, `resources/glossary`, `resources/governance`

**Context**: The on-chain treasury was established by LIP-89 and LIP-92 and receives a governance-controlled percentage of each round's LPT inflation (Treasury Reward Cut Rate); it is disbursed via LivepeerGovernor votes to SPEs, grants, and bounties.

**Status**: current

**Also known as**: Community Treasury

---

### Open Source

**Definition**: Software whose source code is freely available for anyone to view, use, modify, and redistribute.

**Tags**: `web3:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/index`

**External**: [Open-source software (Wikipedia)](https://en.wikipedia.org/wiki/Open-source_software)

**Status**: current

---

### Operational Mode

**Definition**: The deployment configuration that determines how a gateway connects to the Livepeer network: on-chain (Arbitrum-based payments, protocol discovery) or off-chain (remote signer, manual orchestrator addresses).

**Tags**: `livepeer:config`, `livepeer:deployment`

**Tabs**: gateways

**Pages**: `gateways/modes`, `gateways/config`

**Context**: Operational mode is an independent axis from node type and setup type. Both on-chain and off-chain gateways can route video, AI, or dual workloads. Off-chain is a valid production configuration for gateways.

**Status**: current

---

### Operator Market

**Definition**: The competitive ecosystem of orchestrators offering differentiated services to gateways and delegators, distinguished by price, performance, reliability, and commission rates.

**Tags**: `livepeer:protocol`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/economics`

**Context**: The operator market is Livepeer's two-sided marketplace dynamic — delegators allocate stake to orchestrators they trust, creating economic incentives for operators to compete on quality and price.

**Status**: current

---

### Orchestrator

**Definition**: Supply-side operator contributing GPU resources, receiving jobs from gateways, performing transcoding or AI inference, and earning ETH fees and inflationary LPT rewards; must bond LPT to enter the active set.

**Tags**: `livepeer:role`

**Tabs**: home, about, solutions, developers, gateways, orchestrators, lpt, community, resources

**Pages**: `home/network`, `home/staking`, `about/protocol`, `about/staking`, `solutions/network`, `solutions/architecture`, `developers/architecture`, `developers/protocol`, `gateways/routing`, `gateways/protocol`, `orchestrators/index`, `orchestrators/protocol`, `lpt/staking`, `lpt/protocol`, `community/network`, `community/staking`, `resources/glossary`, `resources/protocol`

**Context**: Orchestrators are the core supply-side participants in Livepeer. They handle protocol interaction, job routing, payment negotiation, and capability advertisement; may run their own transcoder subprocess or delegate to remote transcoder workers. Their total bonded stake (own + delegated) determines active set membership, reward share, and governance voting weight.

**Status**: current

---

### Orchestrator Discovery

**Definition**: The process by which a gateway finds and evaluates available orchestrators — either automatically via the on-chain ServiceRegistry or manually via configured `-orchAddr` flags.

**Tags**: `livepeer:protocol`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/routing`, `gateways/architecture`, `orchestrators/discovery`, `orchestrators/routing`

**Context**: On-chain gateways use the ServiceRegistry contract on Arbitrum to discover registered orchestrators and their service URIs. Off-chain gateways bypass discovery and connect directly to specified addresses.

**Status**: current

---

### OrchestratorInfo

**Definition**: Data structure advertised by orchestrators containing capabilities, pricing, service URI, and metadata used by gateways for selection decisions.

**Tags**: `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/code`, `orchestrators/protocol`

**Context**: OrchestratorInfo is exchanged during gateway-orchestrator negotiation. It includes the orchestrator's pricePerUnit, supported AI capabilities, ticket parameters, and service URI.

**Status**: current

---

### orchSecret

**Definition**: Shared secret used to authenticate communication between an orchestrator process and its standalone transcoder or worker nodes in an O-T split deployment.

**Tags**: `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/config`, `orchestrators/security`

**Context**: Set via the `-orchSecret` CLI flag on both the orchestrator and transcoder. Must match exactly. Prevents unauthorised nodes from connecting to an orchestrator as transcoders.

**Status**: current

---

### OSI Model

**Definition**: The Open Systems Interconnection reference model that defines seven network layers (physical through application) as a conceptual framework for understanding protocol design.

**Tags**: `technical:infra`

**Tabs**: about

**Pages**: `about/architecture`

**External**: [OSI model (Wikipedia)](https://en.wikipedia.org/wiki/OSI_model)

**Status**: current

---

### Output Profile

**Definition**: Predefined set of encoding parameters (resolution, bitrate, codec, frame rate) defining a single rendition of a transcoded video.

**Tags**: `video:encoding`

**Tabs**: orchestrators

**Pages**: `orchestrators/transcoding`, `orchestrators/config`

**External**: [Advanced Video Coding (Wikipedia)](https://en.wikipedia.org/wiki/Advanced_Video_Coding)

**Status**: current

---

### Overhead

**Definition**: Additional operational costs beyond direct computation, including gas fees for ticket redemption, bandwidth, and administrative costs.

**Tags**: `economic:pricing`, `operational:process`

**Tabs**: orchestrators

**Pages**: `orchestrators/performance`, `orchestrators/economics`

**Context**: In Livepeer pricing, overhead specifically refers to the estimated ticket redemption cost divided by the face value, expressed as a percentage. The `autoAdjustPrice` flag incorporates overhead into automatic price calculations.

**Status**: current

---

### Passing threshold

**Definition**: Minimum "for" vote percentage (excluding abstentions) required for a governance proposal to pass.

**Tags**: `operational:governance`

**Tabs**: community

**Pages**: `community/governance`

**Context**: Livepeer governance requires a passing threshold in addition to quorum; if insufficient stake votes in favor, the proposal fails even with high participation.

**Status**: current

---

### Pay-per-Pixel

**Definition**: Livepeer's pricing model where orchestrators are paid based on the total number of pixels transcoded, enabling granular and standardized cost comparison across different video resolutions and durations.

**Tags**: `economic:pricing`

**Tabs**: about

**Pages**: `about/economics`

**Context**: Pay-per-pixel is the fundamental unit of exchange in Livepeer's transcoding marketplace; it allows apples-to-apples pricing across different resolutions and bitrates by normalizing to pixels processed.

**Status**: current

---

### Payment Channel

**Definition**: An off-chain mechanism where two parties conduct multiple transactions and only settle the final state on-chain, reducing per-transaction gas costs.

**Tags**: `economic:payment`

**Tabs**: about

**Pages**: `about/payments`, `about/protocol`

**External**: [State channels (ethereum.org)](https://ethereum.org/developers/docs/scaling/state-channels/)

**Status**: current

---

### Payment Ticket

**Definition**: Signed off-chain data structure issued by a gateway to an orchestrator representing a probabilistic payment; only winning tickets are redeemable on-chain for their ETH face value.

**Tags**: `economic:payment`, `livepeer:protocol`

**Tabs**: about, lpt, resources

**Pages**: `about/payments`, `about/protocol`, `lpt/payments`, `lpt/protocol`, `resources/glossary`, `resources/payments`

**Context**: Payment tickets are Livepeer's mechanism for streaming micropayments without per-segment gas costs; the lottery design means only a statistically appropriate fraction of tickets win, amortizing on-chain fees across many payments.

**Status**: current

**Also known as**: Ticket

---

### Pending Rewards

**Definition**: Inflationary LPT and ETH fees that have been earned through staking but not yet claimed by calling the claim earnings function.

**Tags**: `economic:reward`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/delegation`

**Context**: Pending rewards accumulate each round an orchestrator calls reward; delegators do not need to claim every round but must claim before certain actions (such as moving stake) to avoid losing accrued amounts.

**Status**: draft

---

### Per-Pixel Pricing

**Definition**: A cost model charging for transcoding work based on the total number of pixels processed (width × height × frame count), enabling standardized comparison across resolutions.

**Tags**: `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/transcoding`

**External**: [Pay-per-pixel (Livepeer Forum)](https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197)

**Status**: current

---

### Per-Request Pricing

**Definition**: A cost model charging per individual AI inference request rather than per pixel, used for AI pipeline jobs where pixel count is not a meaningful unit.

**Tags**: `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/pipelines`

**External**: [Livepeer AI pipelines](https://docs.livepeer.org/ai/pipelines/audio-to-text)

**Status**: current

---

### Performance Score

**Definition**: Composite metric rating an orchestrator's reliability and speed, calculated as latency score multiplied by success rate, used by gateways in orchestrator selection.

**Tags**: `livepeer:protocol`, `operational:monitoring`

**Tabs**: orchestrators

**Pages**: `orchestrators/discovery`, `orchestrators/performance`

**Context**: Performance score is tracked per-gateway and influences routing decisions. A low score from failed transcodes or high latency reduces the probability of being selected for future jobs.

**Status**: current

---

### Permissionless

**Definition**: Property where anyone can participate without requiring approval from a central authority.

**Tags**: `web3:concept`

**Tabs**: home

**Pages**: `home/network`, `home/index`

**External**: [Web3 — permissionless (Ethereum.org)](https://ethereum.org/web3)

**Status**: current

---

### Pixel

**Definition**: Single point in a video frame used as the fundamental pricing unit for transcoding work on the Livepeer network.

**Tags**: `video:encoding`

**Tabs**: orchestrators

**Pages**: `orchestrators/transcoding`, `orchestrators/pricing`

**External**: [Pixel (Wikipedia)](https://en.wikipedia.org/wiki/Pixel)

**Status**: current

---

### pixelsPerUnit

**Definition**: CLI parameter defining the number of pixels constituting one billable work unit, allowing granular pricing control.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/config`

**Context**: Used in conjunction with pricePerUnit. Setting a larger pixelsPerUnit value effectively lowers the per-pixel price while keeping the per-unit number manageable. Defaults to 1 pixel per unit.

**Status**: current

---

### Pipeline

**Definition**: A configured end-to-end AI processing workflow defining input type, model, and output, routed by the gateway to capable orchestrators.

**Tags**: `livepeer:protocol`, `ai:concept`

**Tabs**: gateways, resources

**Pages**: `gateways/pipelines`, `gateways/routing`, `resources/glossary`, `resources/ai`

**Context**: On Livepeer, a pipeline is the combination of a pipeline type (e.g., text-to-image, live-video-to-video) and a specific model ID. Gateways match incoming AI requests to orchestrators advertising the corresponding capability.

**Status**: current

---

### Playback ID

**Definition**: Public identifier for retrieving playback URLs for a stream or asset without exposing the private stream key or internal asset ID.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/playback`, `solutions/api`

**Context**: Every Stream and Asset in Livepeer Studio is assigned a Playback ID at creation; clients pass this ID to the playback API or embed it in the player to resolve the correct HLS or WebRTC URL.

**Status**: current

---

### Playback Policy

**Definition**: Access rules (public or JWT-required) attached to a stream or asset that determine what authentication viewers must present before playback is allowed.

**Tags**: `video:studio`, `technical:security`

**Tabs**: solutions

**Pages**: `solutions/access-control`, `solutions/api`

**Context**: Livepeer Studio playback policies are configured per-stream or per-asset; setting a policy to `jwt` mode requires every viewer to present a signed JWT from the application's signing key before the player can retrieve a valid playback URL.

**Status**: current

---

### Player

**Definition**: Livepeer's embeddable video player component (lvpr.tv) with built-in support for HLS adaptive bitrate streaming and WebRTC low-latency fallback.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/player`, `solutions/playback`

**Context**: The Livepeer Player is a hosted iframe-embeddable player and a React SDK component (`@livepeer/react`) that resolves playback from a Playback ID, handles ABR switching, and supports access-controlled streams without custom player configuration.

**Status**: current

---

### PM (Probabilistic Micropayment)

**Definition**: Lottery-based payment scheme where gateways send signed tickets to orchestrators and only winning tickets are redeemed on-chain, amortising transaction costs across many payments.

**Tags**: `economic:payment`

**Tabs**: orchestrators

**Pages**: `orchestrators/payments`, `orchestrators/protocol`

**Context**: The PM system is the core payment mechanism in Livepeer. Most tickets are non-winning; over time, the expected value of winning tickets equals the fair payment for work performed. Orchestrators batch redemptions to optimise gas costs.

**Status**: current

---

### Pool

**Definition**: Group of transcoder or worker nodes coordinated under a single orchestrator for increased capacity and redundancy.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/operations`

**Context**: A pool allows orchestrators to scale beyond a single machine. The pool operator runs the on-chain orchestrator node and handles staking, reward calling, and ticket redemption. Pool workers contribute GPU compute and receive off-chain payouts from the operator.

**Status**: current

---

### Pool Operator

**Definition**: Entity running an orchestrator that coordinates a pool of transcoder or worker nodes, managing on-chain operations and distributing earnings to workers.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/operations`

**Context**: Pool operators require infrastructure reliability and community trust. They stake LPT to the active set threshold and distribute earnings to pool workers via off-chain agreements.

**Status**: current

---

### Pool Worker

**Definition**: Individual machine within an orchestrator pool, running go-livepeer in transcoder mode and executing GPU compute jobs delegated by the pool operator's orchestrator.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/operations`

**Context**: Pool workers do not hold LPT or interact with the protocol directly — the pool operator stakes on their behalf. Workers connect to the orchestrator using the `-orchAddr` and `-orchSecret` flags.

**Status**: current

**Also known as**: Pool node

---

### Pre-Proposal

**Definition**: Informal governance discussion document posted on the Forum before a formal LIP or treasury proposal.

**Tags**: `operational:governance`

**Tabs**: community

**Pages**: `community/governance`

**Context**: Pre-proposals allow the Livepeer community to give early feedback on governance ideas before the author commits to the formal LIP process, reducing wasted effort on unpopular proposals.

**Status**: current

---

### Price Feed

**Definition**: External data source providing real-time ETH/USD exchange rates used by orchestrators to denominate prices in USD terms.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/config`

**Context**: Orchestrators using USD pricing fetch the current ETH/USD rate from a price feed service to dynamically adjust their wei-denominated pricePerUnit as ETH price fluctuates.

**Status**: current

---

### Price per pixel

**Definition**: Fundamental pricing unit for transcoding: cost in wei for processing one pixel of video.

**Tags**: `economic:pricing`

**Tabs**: community, lpt

**Pages**: `community/economics`, `community/network`, `lpt/economics`, `lpt/pricing`

**Context**: Price per pixel is the standard unit of comparison for orchestrator pricing in Livepeer's transcoding marketplace; orchestrators set their `pricePerUnit` and `pixelsPerUnit` to express a per-pixel rate.

**Status**: current

---

### pricePerCapability

**Definition**: CLI flag setting the price per unit for a specific AI pipeline and model pair, overriding the default pricePerUnit for that capability.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/ai`

**Context**: Allows orchestrators to charge different rates for different AI pipelines based on compute intensity. For example, a text-to-image pipeline with a large model can be priced higher than a lightweight audio-to-text pipeline.

**Status**: current

---

### pricePerGateway

**Definition**: JSON configuration allowing orchestrators to set customised per-gateway-address pricing, enabling different rates for specific gateway partners.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/config`

**Context**: Useful for commercial relationships where specific gateways receive preferential pricing. Configured as a JSON map from gateway Ethereum addresses to price overrides.

**Status**: current

---

### pricePerUnit

**Definition**: CLI flag setting the transcoding price in wei per pixelsPerUnit that an orchestrator advertises to gateways.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/config`

**Context**: The primary pricing parameter for video transcoding. Gateways with `-maxPricePerUnit` below this value will not route work to the orchestrator. Can be set in wei directly or with a USD target using a price feed.

**Status**: current

---

### Probabilistic Micropayments

**Definition**: A lottery-based payment scheme where only winning tickets are redeemed on-chain, amortizing transaction costs across many small payments without requiring per-payment gas.

**Tags**: `economic:payment`

**Tabs**: home, about, gateways, orchestrators, community

**Pages**: `home/payments`, `home/network`, `about/payments`, `about/protocol`, `gateways/payments`, `gateways/protocol`, `orchestrators/payments`, `orchestrators/protocol`, `community/network`

**External**: [Livepeer payments core concepts](https://livepeer.org/docs/video-developers/core-concepts/payments)

**Context**: Livepeer's probabilistic micropayment system lets gateways pay orchestrators per video segment at sub-cent amounts without incurring Ethereum gas fees on every payment; the expected value of tickets matches the service cost.

**Status**: current

---

### Profile

**Definition**: An output specification defining a single transcoding rendition: resolution, bitrate, codec, and frame rate.

**Tags**: `video:encoding`

**Tabs**: gateways

**Pages**: `gateways/transcoding`, `gateways/config`

**External**: [Advanced Video Coding (Wikipedia)](https://en.wikipedia.org/wiki/Advanced_Video_Coding)

**Status**: current

---

### Prometheus

**Definition**: Open-source monitoring system collecting time-series metrics via HTTP pull from instrumented targets.

**Tags**: `operational:monitoring`

**Tabs**: community

**Pages**: `community/tools`, `community/monitoring`

**External**: [Prometheus](https://prometheus.io/)

**Status**: current

---

### Proof of Utility

**Definition**: Model where participants prove they performed useful work for the network rather than just staking capital.

**Tags**: `livepeer:protocol`, `web3:concept`

**Tabs**: home, community

**Pages**: `home/network`, `home/index`, `community/network`

**External**: [Livepeer Primer](https://www.livepeer.org/primer)

**Context**: Livepeer's proof-of-utility mechanism verifies that orchestrators actually transcoded video or ran AI inference rather than simply holding stake, ensuring that rewards are tied to productive contributions.

**Status**: current

---

### Proof-of-Stake

**Definition**: A blockchain consensus mechanism where validators stake cryptocurrency as collateral to propose and validate blocks, replacing computation-intensive proof-of-work.

**Tags**: `web3:concept`

**Tabs**: about, lpt

**Pages**: `about/protocol`, `about/staking`, `lpt/protocol`

**External**: [Proof-of-stake (ethereum.org)](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)

**Status**: current

---

### Proposer Bond

**Definition**: The minimum bonded LPT balance (100 LPT) required to submit a formal on-chain governance proposal.

**Tags**: `web3:governance`, `economic:treasury`

**Tabs**: lpt

**Pages**: `lpt/governance`, `lpt/proposals`

**Context**: The proposer bond deters spam proposals by requiring skin-in-the-game from proposal authors; it does not lock additional tokens — the proposer simply needs at least 100 LPT bonded.

**Status**: current

---

### Protocol Layer

**Definition**: On-chain layer governing staking, delegation, rewards, and verification via smart contracts deployed on Arbitrum.

**Tags**: `livepeer:protocol`, `web3:chain`

**Tabs**: developers, gateways

**Pages**: `developers/protocol`, `developers/architecture`, `gateways/protocol`, `gateways/architecture`

**Context**: The Protocol Layer is the blockchain foundation underpinning Livepeer — developers building at the application level interact with it indirectly through the SDK, while protocol developers interact with it directly via smart contracts.

**Status**: current

---

### Provenance

**Definition**: Verified chain of custody and edit history of a digital asset, confirming its origin and tracking modifications over time.

**Tags**: `technical:security`

**Tabs**: solutions

**Pages**: `solutions/provenance`, `solutions/ai`

**External**: [C2PA specification](https://c2pa.org/)

**Status**: current

---

### PyTorch

**Definition**: Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation, developed by Meta.

**Tags**: `ai:framework`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/ai`

**External**: [PyTorch (Wikipedia)](https://en.wikipedia.org/wiki/PyTorch)

**Status**: current

**Also known as**: Torch

---

### PyTrickle

**Definition**: Python package for real-time video and audio streaming with custom processing, built on the Livepeer Trickle protocol.

**Tags**: `livepeer:sdk`

**Tabs**: developers

**Pages**: `developers/sdks`, `developers/streaming`

**Context**: PyTrickle is the official Python SDK for developers building real-time AI video applications on Livepeer, providing the FrameProcessor interface for per-frame model inference.

**Status**: current

---

### Quadratic Funding

**Definition**: A public goods funding mechanism where matching funds amplify small individual contributions so that projects with broad community support receive disproportionately larger allocations.

**Tags**: `economic:treasury`

**Tabs**: community, lpt

**Pages**: `community/treasury`, `lpt/treasury`, `lpt/proposals`

**External**: [Quadratic voting (Wikipedia)](https://en.wikipedia.org/wiki/Quadratic_voting)

**Status**: current

---

### Quality Ladder

**Definition**: An ordered set of encoding profiles from lowest to highest quality used for adaptive bitrate rendition selection in video delivery.

**Tags**: `video:processing`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/encoding`

**External**: [Encoding ladder (Cloudinary glossary)](https://cloudinary.com/glossary/encoding-ladder)

**Status**: current

---

### Quorum

**Definition**: The minimum amount of participating stake required for a governance vote to be considered binding and valid.

**Tags**: `livepeer:protocol`, `web3:governance`, `operational:governance`

**Tabs**: about, community, lpt

**Pages**: `about/governance`, `community/governance`, `lpt/governance`

**Context**: Livepeer governance requires a quorum threshold to be met before a proposal outcome is valid; if quorum is not reached, the proposal fails regardless of the for/against split. Introduced as part of LIP-89.

**Status**: current

---

### Real-time

**Definition**: Video delivery or AI processing with latency low enough for bidirectional interaction, typically under 500ms via WebRTC; running AI models on live streaming input with latency low enough for interactive speeds, typically under 100 milliseconds.

**Tags**: `video:playback`, `ai:concept`

**Tabs**: home, developers, community, resources

**Pages**: `home/streaming`, `home/ai-video`, `developers/ai-video`, `developers/pipelines`, `community/ai`, `community/index`, `resources/glossary`, `resources/ai`

**External**: [WebRTC (Wikipedia)](https://en.wikipedia.org/wiki/WebRTC)

**Status**: current

**Also known as**: Real-time AI, Real-time video AI

---

### Rebonding

**Definition**: Re-staking tokens that are in the unbonding period to an orchestrator, canceling the unbonding process and returning them to active bonded stake; also used to describe moving bonded LPT from one orchestrator to another without the thawing period.

**Tags**: `web3:tokenomics`

**Tabs**: about, lpt

**Pages**: `about/staking`, `about/delegators`, `lpt/staking`, `lpt/delegation`

**External**: [Livepeer bonding overview](https://forum.livepeer.org/t/an-overview-of-bonding/97)

**Status**: current

**Also known as**: Rebond, Redelegation

---

### Rebuffer Ratio

**Definition**: Rebuffering duration divided by total playback duration, expressing the fraction of viewing time spent waiting for the player to buffer data.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/analytics`, `solutions/playback`

**External**: [The four elements of video performance (Mux)](https://www.mux.com/blog/the-four-elements-of-video-performance)

**Status**: current

---

### Recording

**Definition**: Stored archive of a live stream session automatically saved as a VOD asset when recording is enabled on the stream object.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/recording`

**Context**: Livepeer Studio supports per-stream recording configuration; when enabled, each broadcast session is captured and, upon stream end, made available as a new Asset with its own playback ID.

**Status**: current

---

### Redeemer

**Definition**: Service or entity submitting a winning probabilistic micropayment ticket to the TicketBroker contract to claim its face value in ETH.

**Tags**: `livepeer:role`, `economic:payment`

**Tabs**: orchestrators

**Pages**: `orchestrators/payments`, `orchestrators/protocol`

**Context**: In production deployments, orchestrators typically run an automated redeemer process that monitors for winning tickets and submits them on-chain. Redemption costs gas, so batching is common.

**Status**: current

---

### Redemption

**Definition**: The on-chain process of cashing in a winning probabilistic micropayment ticket for its face value in ETH via the TicketBroker contract.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`, `gateways/protocol`

**Context**: Orchestrators (or their redeemer process) submit winning tickets to TicketBroker to claim ETH. The gateway's deposit and reserve fund these redemptions. High redemption frequency relative to deposit size is a signal to top up.

**Status**: current

---

### Remote Signer

**Definition**: A service that holds private keys securely in an isolated environment and signs transactions on behalf of a Livepeer gateway or orchestrator node.

**Tags**: `technical:security`

**Tabs**: gateways, orchestrators, resources

**Pages**: `gateways/security`, `gateways/config`, `orchestrators/security`, `resources/glossary`

**Context**: In an on-chain gateway, the signer is typically a local keystore file. In an off-chain gateway, signing is delegated to a remote signer service. A community-hosted remote signer at signer.eliteencoder.net is publicly available and free to use.

**Status**: current

---

### Rendition

**Definition**: Single encoded version of a source video at a specific resolution, bitrate, and codec configuration, produced during transcoding.

**Tags**: `video:processing`

**Tabs**: solutions, gateways, orchestrators, resources

**Pages**: `solutions/transcoding`, `solutions/encoding`, `gateways/transcoding`, `gateways/encoding`, `orchestrators/transcoding`, `orchestrators/encoding`, `resources/glossary`, `resources/encoding`

**External**: [Video rendition (Cloudinary Glossary)](https://cloudinary.com/glossary/video-rendition)

**Status**: current

---

### Reputation

**Definition**: A measure of an orchestrator's performance, reliability, and trustworthiness that influences job routing priority and payment selection by gateways.

**Tags**: `livepeer:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: Reputation in Livepeer is not a single on-chain score but a composite of off-chain performance metrics — success rate, latency, and transcode fail rate — that gateways use in their orchestrator selection weighting.

**Status**: current

---

### Reserve

**Definition**: ETH held as collateral in the TicketBroker contract backing outstanding probabilistic payment tickets; used if the gateway's deposit is depleted.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`

**Context**: An on-chain gateway must fund both a deposit (normal operating balance) and a reserve (safety backstop). The reserve prevents orchestrators from being left unpaid if the deposit runs out between top-ups.

**Status**: current

---

### Resolution

**Definition**: Pixel dimensions of a video frame expressed as width × height (e.g., 1920×1080); common tiers are 360p, 480p, 720p, 1080p, and 4K.

**Tags**: `video:encoding`

**Tabs**: solutions

**Pages**: `solutions/encoding`, `solutions/transcoding`

**External**: [Display resolution (Wikipedia)](https://en.wikipedia.org/wiki/Display_resolution)

**Status**: current

---

### REST (Representational State Transfer)

**Definition**: Architectural style for distributed hypermedia systems using standard HTTP methods (GET, POST, PUT, DELETE) for stateless resource interaction.

**Tags**: `technical:protocol`

**Tabs**: solutions

**Pages**: `solutions/api`

**External**: [REST (Wikipedia)](https://en.wikipedia.org/wiki/REST)

**Status**: current

---

### Retroactive Funding

**Definition**: A funding model that rewards past contributions or completed projects based on demonstrated impact, reducing speculative risk for the treasury.

**Tags**: `economic:treasury`

**Tabs**: community, lpt

**Pages**: `community/treasury`, `lpt/treasury`, `lpt/proposals`

**External**: [Ethereum Blog — Project Odin](https://blog.ethereum.org/en/2026/02/27/project-odin)

**Status**: current

---

### Reward

**Definition**: Combination of inflationary LPT and ETH fees earned by orchestrators and delegators each protocol round.

**Tags**: `economic:reward`

**Tabs**: home

**Pages**: `home/staking`, `home/network`

**Context**: Rewards in Livepeer have two components: inflationary LPT minted each round (distributed proportional to stake) and ETH fees from winning micropayment tickets (distributed via fee cut/share parameters set by each orchestrator).

**Status**: current

---

### Reward Call

**Definition**: The on-chain transaction (`Reward()`) that an active orchestrator must submit each round to mint and distribute new LPT inflation rewards to itself and its delegators.

**Tags**: `livepeer:protocol`, `economic:reward`

**Tabs**: about, developers, orchestrators, community, lpt

**Pages**: `about/staking`, `about/protocol`, `developers/protocol`, `developers/staking`, `orchestrators/staking`, `orchestrators/protocol`, `community/staking`, `community/protocol`, `lpt/staking`, `lpt/protocol`

**Context**: Reward calls are an orchestrator's operational responsibility each round; missing reward calls means forfeiting inflationary LPT for that round, which also harms delegators who rely on that income. Gas cost on Arbitrum is approximately $0.01–$0.12 per call.

**Status**: current

---

### Reward Cut

**Definition**: The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder to its delegators.

**Tags**: `economic:reward`

**Tabs**: about, orchestrators, community, lpt, resources

**Pages**: `about/staking`, `about/economics`, `orchestrators/staking`, `orchestrators/economics`, `community/staking`, `lpt/staking`, `lpt/economics`, `resources/glossary`, `resources/staking`

**Context**: Reward cut is a key parameter orchestrators configure to attract delegators; a lower reward cut means orchestrators pass more LPT to stakers, while a higher cut means they keep more for themselves. Separate from fee cut.

**Status**: current

---

### RFP (Request for Proposal)

**Definition**: Formal solicitation posted by the community or Foundation inviting teams to submit proposals for defined work.

**Tags**: `operational:governance`

**Tabs**: community

**Pages**: `community/treasury`, `community/governance`

**Context**: RFPs in Livepeer are used to solicit competitive bids for funded ecosystem work such as tooling, infrastructure, or documentation; typically posted in the Treasury Forum with defined scope and budget.

**Status**: current

---

### Rollups

**Definition**: Layer-2 scaling solutions that execute transactions off-chain and post compressed data or proofs to Layer 1 to inherit its security guarantees.

**Tags**: `web3:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**External**: [Rollups (Ethereum docs)](https://ethereum.org/developers/docs/scaling/)

**Status**: current

---

### Room

**Definition**: Multi-participant WebRTC video session managed by Livepeer Studio, enabling multiple users to simultaneously broadcast and receive audio and video.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/webrtc`, `solutions/api`

**Context**: The Studio Room API creates and manages multi-party WebRTC sessions; each Room has a unique ID and participant tokens, and Livepeer handles the signaling and media routing infrastructure.

**Status**: current

---

### Round

**Definition**: A discrete time interval defined in Arbitrum/Ethereum blocks during which staking rewards are calculated, the active set is determined, and protocol state is updated; approximately one day.

**Tags**: `livepeer:protocol`

**Tabs**: about, orchestrators, community, lpt, resources

**Pages**: `about/protocol`, `about/staking`, `orchestrators/protocol`, `orchestrators/staking`, `community/staking`, `community/protocol`, `lpt/protocol`, `lpt/staking`, `resources/glossary`, `resources/protocol`

**Context**: Rounds are Livepeer's fundamental time unit for protocol operations; reward calls, active set elections, and inflation adjustments all happen on a per-round basis. Each round is approximately 5,760 Arbitrum blocks.

**Status**: current

---

### RoundsManager

**Definition**: The Livepeer smart contract that tracks round progression, stores the current round number, and coordinates round-based protocol state transitions.

**Tags**: `livepeer:contract`

**Tabs**: orchestrators, lpt

**Pages**: `orchestrators/contracts`, `orchestrators/protocol`, `lpt/contracts`, `lpt/protocol`

**Context**: RoundsManager is called at the start of each round initialization and interacts with BondingManager and Minter to trigger reward distribution and inflation calculation.

**Status**: current

---

### RPC (Remote Procedure Call)

**Definition**: Protocol allowing a program to execute a procedure on a remote server; in blockchain contexts, the mechanism for querying and submitting transactions to a node.

**Tags**: `technical:protocol`

**Tabs**: community

**Pages**: `community/tools`, `community/network`

**External**: [Remote procedure call (Wikipedia)](https://en.wikipedia.org/wiki/Remote_procedure_call)

**Status**: current

---

### RTMP (Real-Time Messaging Protocol)

**Definition**: TCP-based protocol for streaming audio, video, and data over a network, operating on port 1935; the dominant ingest protocol for live broadcasting software.

**Tags**: `video:protocol`

**Tabs**: about, solutions, developers, gateways, orchestrators, resources

**Pages**: `about/transcoding`, `about/streaming`, `solutions/livestreaming`, `solutions/ingest`, `developers/streaming`, `developers/ingest`, `gateways/ingest`, `gateways/streaming`, `orchestrators/streaming`, `resources/glossary`, `resources/streaming`

**External**: [RTMP (Wikipedia)](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)

**Status**: current

---

### RTMPS

**Definition**: RTMP transported over a TLS/SSL connection, adding encryption to protect live video streams and metadata during ingest.

**Tags**: `video:protocol`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/ingest`

**External**: [RTMP (Wikipedia)](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)

**Status**: current

---

### SAM 2

**Definition**: Meta's unified foundation model for promptable segmentation in images and videos with streaming memory, enabling interactive region selection.

**Tags**: `ai:model`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [SAM 2 (Hugging Face)](https://huggingface.co/docs/transformers/en/model_doc/sam2)

**Status**: current

---

### Sampler

**Definition**: Algorithm controlling the denoising process in diffusion models by defining the noise schedule and update rule for each generation step.

**Tags**: `ai:concept`

**Tabs**: developers

**Pages**: `developers/pipelines`

**External**: [Scheduler features (Hugging Face)](https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features)

**Status**: current

---

### Scalability

**Definition**: Ability to handle increasing workload by adding resources without degradation in performance or reliability.

**Tags**: `technical:infra`

**Tabs**: home

**Pages**: `home/network`, `home/index`

**External**: [Scalability (Wikipedia)](https://en.wikipedia.org/wiki/Scalability)

**Status**: current

---

### Scaling

**Definition**: Increasing gateway capacity to handle more concurrent requests, either horizontally (deploying additional gateway nodes) or vertically (adding resources to an existing node).

**Tags**: `operational:process`

**Tabs**: gateways

**Pages**: `gateways/architecture`, `gateways/operations`

**External**: [Scalability (Wikipedia)](https://en.wikipedia.org/wiki/Scalability)

**Status**: current

---

### SDXL (Stable Diffusion XL)

**Definition**: Stable Diffusion XL — advanced text-to-image model with a 3× larger UNet and dual text encoders, generating images at 1024×1024 resolution.

**Tags**: `ai:model`

**Tabs**: developers, resources

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `resources/glossary`, `resources/ai`

**External**: [SDXL (Hugging Face)](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)

**Status**: current

**Also known as**: Stable Diffusion XL

---

### SDK (Software Development Kit)

**Definition**: Collection of tools, libraries, and documentation enabling developers to build applications that integrate with a platform's APIs.

**Tags**: `technical:dev`

**Tabs**: solutions

**Pages**: `solutions/sdks`, `solutions/api`

**External**: [Software development kit (Wikipedia)](https://en.wikipedia.org/wiki/Software_development_kit)

**Status**: current

---

### Segment

**Definition**: A time-sliced chunk of multiplexed audio and video data that is independently transcoded for parallel processing in Livepeer's pipeline; typically 2–10 seconds for HLS delivery.

**Tags**: `livepeer:protocol`, `video:processing`

**Tabs**: about, solutions, gateways, orchestrators, resources

**Pages**: `about/transcoding`, `about/protocol`, `solutions/transcoding`, `solutions/encoding`, `gateways/transcoding`, `gateways/protocol`, `orchestrators/transcoding`, `orchestrators/protocol`, `resources/glossary`, `resources/protocol`

**External**: [HTTP Live Streaming (Wikipedia)](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)

**Status**: current

---

### Segmentation

**Definition**: (1) Video: the process of dividing a continuous video stream into short discrete chunks for HTTP-based delivery and adaptive bitrate switching. (2) AI: task partitioning a digital image into regions by assigning a semantic label to every pixel, identifying and outlining objects.

**Tags**: `video:processing`, `ai:pipeline`

**Tabs**: solutions, developers, orchestrators

**Pages**: `solutions/transcoding`, `solutions/encoding`, `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Image segmentation (Wikipedia)](https://en.wikipedia.org/wiki/Image_segmentation)

**Status**: current

**Also known as**: Segmentation (AI)

---

### Service Margin

**Definition**: A markup that gateway operators add on top of orchestrator costs when reselling gateway access to end users.

**Tags**: `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/economics`

**Context**: Gateway operators running NaaP or gateway-as-a-service offerings use a service margin to cover infrastructure, development, and operational overhead while remaining price-competitive with direct orchestrator costs.

**Status**: current

---

### Service URI

**Definition**: The on-chain registered endpoint URL that gateways use to discover and establish a connection with an orchestrator node.

**Tags**: `livepeer:config`, `livepeer:protocol`

**Tabs**: about, orchestrators

**Pages**: `about/protocol`, `about/architecture`, `orchestrators/config`, `orchestrators/protocol`

**Context**: The Service URI is how orchestrators advertise their network address; it is registered in the ServiceRegistry smart contract so gateways can look up orchestrators by their on-chain identity and contact them directly. Must be publicly reachable; format is typically `https://your-domain:8935`.

**Status**: current

---

### ServiceRegistry

**Definition**: A smart contract on Arbitrum where orchestrators register their service URI so that on-chain gateways can discover and contact them.

**Tags**: `livepeer:contract`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/protocol`, `gateways/contracts`, `orchestrators/contracts`, `orchestrators/protocol`

**Context**: The ServiceRegistry is the on-chain source of truth for orchestrator endpoints. On-chain gateways query it at startup and during session establishment; off-chain gateways bypass it entirely by using `-orchAddr`.

**Status**: current

---

### Session

**Definition**: An active connection between a gateway and an orchestrator during which one or more jobs are processed within a continuous work period.

**Tags**: `livepeer:protocol`, `video:studio`

**Tabs**: about, solutions, gateways, orchestrators

**Pages**: `about/protocol`, `about/architecture`, `solutions/livestreaming`, `solutions/api`, `gateways/routing`, `gateways/architecture`, `orchestrators/routing`, `orchestrators/architecture`

**Context**: Sessions in Livepeer represent the active working relationship between a gateway and a chosen orchestrator; payment tickets are issued within a session. In Livepeer Studio, each broadcast period on a Stream object creates a new Session with its own metrics, recording, and viewership data.

**Status**: current

---

### Settlement

**Definition**: The on-chain finalization of off-chain payment obligations via ticket redemption through the TicketBroker contract.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`

**Context**: Settlement occurs when an orchestrator redeems a winning ticket, converting the probabilistic payment into an actual ETH transfer. The gateway's deposit funds these settlements; the reserve backstops them.

**Status**: current

---

### Signing Key

**Definition**: Public/private cryptographic keypair used to sign and verify JWTs that gate access to access-controlled streams and assets in Livepeer Studio.

**Tags**: `video:studio`, `technical:security`

**Tabs**: solutions

**Pages**: `solutions/access-control`, `solutions/api`

**Context**: Developers create Signing Keys in the Studio dashboard or via API; the private key signs viewer JWTs server-side, and Livepeer verifies signatures against the registered public key before granting playback access.

**Status**: current

---

### Signer

**Definition**: The cryptographic key holder or process that authorizes payment tickets and Ethereum transactions on behalf of a gateway node.

**Tags**: `technical:security`

**Tabs**: gateways

**Pages**: `gateways/security`, `gateways/config`

**Context**: In an on-chain gateway, the signer is typically a local keystore file. In an off-chain gateway, signing is delegated to a remote signer service. The signer never needs to hold large ETH balances in the off-chain model.

**Status**: current

---

### Siphon

**Definition**: Lightweight component directing incoming work to the correct processing path within an orchestrator, or routing a subset of network traffic to specific orchestrators for staged rollout.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/routing`

**Context**: In orchestrator architecture, the siphon routes incoming jobs between video transcoding and AI inference paths. It can also describe a minimal transcoder deployment that connects to a remote orchestrator to expose local GPU resources.

**Status**: current

---

### SLAM (Simultaneous Localization and Mapping)

**Definition**: Computational method constructing a map of an unknown environment while simultaneously tracking an agent's location within it.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Simultaneous localization and mapping (Wikipedia)](https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping)

**Status**: current

---

### Slashing

**Definition**: A penalty mechanism that destroys a portion of an orchestrator's bonded LPT for protocol violations such as failing verification, skipping verifications, or underperformance.

**Tags**: `livepeer:protocol`, `web3:tokenomics`, `economic:reward`

**Tabs**: about, orchestrators, community, lpt, resources

**Pages**: `about/protocol`, `about/staking`, `orchestrators/protocol`, `orchestrators/staking`, `community/network`, `community/protocol`, `lpt/protocol`, `lpt/security`, `resources/glossary`, `resources/protocol`

**External**: [Livepeer whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)

**Context**: Slashing conditions include failing transcoding verification, skipping required verifications, or sustained underperformance. Both the orchestrator's self-stake and delegated stake are at risk, which incentivizes delegators to select reliable orchestrators.

**Status**: current

---

### Slashing Conditions

**Definition**: The network-defined rules specifying exactly when and how LPT is slashed: failing verification checks, skipping assigned verifications, or sustained underperformance.

**Tags**: `livepeer:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: Slashing Conditions are encoded in the Livepeer whitepaper and protocol contracts. They create economic accountability for orchestrators by making misbehavior financially costly, proportional to their bonded stake.

**Status**: current

---

### Smart Contract

**Definition**: Self-executing program on a blockchain that automatically enforces agreement terms without intermediaries.

**Tags**: `web3:concept`

**Tabs**: home, developers

**Pages**: `home/network`, `home/governance`, `developers/protocol`, `developers/architecture`

**External**: [Smart contracts (Ethereum.org)](https://ethereum.org/developers/docs/smart-contracts/)

**Status**: current

---

### Smoke Test

**Definition**: Preliminary test verifying that an AI pipeline or node configuration is working correctly before deploying to production or accepting live traffic.

**Tags**: `operational:monitoring`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/testing`

**External**: [Smoke testing (Wikipedia)](https://en.wikipedia.org/wiki/Smoke_testing_(software))

**Status**: current

---

### Snowmelt

**Definition**: Alpha phase of the Livepeer roadmap where the protocol was designed and incentives implemented, culminating in testnet launch.

**Tags**: `livepeer:upgrade`

**Tabs**: home

**Pages**: `home/upgrades`

**Context**: Snowmelt is the first named milestone in Livepeer's phased roadmap, representing the earliest protocol design and testnet stage before Tributary (beta) and mainnet deployment.

**Status**: current

---

### Solo Operator

**Definition**: Orchestrator deployment where a single operator runs a complete orchestrator node with all components on one machine, without pool workers.

**Tags**: `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/modes`, `orchestrators/setup`

**Context**: The standard deployment for most individual orchestrators. Full control and full responsibility for staking, reward calling, ticket redemption, and compute. Can run in video, AI, or dual mode.

**Status**: current

---

### Solidity

**Definition**: Statically-typed, contract-oriented programming language for writing smart contracts on Ethereum and EVM-compatible chains.

**Tags**: `technical:dev`, `web3:concept`

**Tabs**: developers

**Pages**: `developers/protocol`, `developers/contracts`

**External**: [Solidity (Wikipedia)](https://en.wikipedia.org/wiki/Solidity)

**Status**: current

---

### SPE (Special Purpose Entity)

**Definition**: Treasury-funded organizational unit with a defined scope, budget, accountability structure, and operational timeline approved via governance, used to execute specific ecosystem workstreams.

**Tags**: `livepeer:entity`, `operational:governance`

**Tabs**: home, about, solutions, developers, orchestrators, lpt, community, resources

**Pages**: `home/governance`, `home/index`, `about/governance`, `about/protocol`, `solutions/governance`, `developers/governance`, `developers/protocol`, `orchestrators/governance`, `lpt/governance`, `lpt/treasury`, `community/governance`, `community/treasury`, `resources/glossary`, `resources/governance`

**Context**: SPEs are Livepeer's primary mechanism for directing on-chain treasury funds; each SPE has a specific mandate (e.g., AI compute, gateway tooling, governance coordination) and reports progress to the community via accountability documents (e.g., LISARs).

**Status**: current

---

### Stable Diffusion

**Definition**: Open-source latent diffusion model for text-to-image generation, operating in a compressed latent space for efficient high-quality image synthesis.

**Tags**: `ai:model`

**Tabs**: orchestrators

**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Stable Diffusion (Wikipedia)](https://en.wikipedia.org/wiki/Stable_Diffusion)

**Status**: current

---

### StableLab

**Definition**: Governance services firm serving as first GovWorks Chair, building transparent governance frameworks for Livepeer.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/governance`, `community/partners`

**Context**: StableLab is a professional governance consultancy that was appointed as the inaugural GovWorks Chair to establish governance processes, review proposals, and publish governance summaries for the Livepeer community.

**Status**: current

---

### Stake

**Definition**: LPT bonded to an orchestrator through the protocol, representing a commitment that secures the network and determines the holder's proportional share of rewards, governance power, and work allocation.

**Tags**: `web3:tokenomics`

**Tabs**: lpt, resources

**Pages**: `lpt/staking`, `lpt/protocol`, `resources/glossary`, `resources/staking`

**Context**: Stake is the core unit of participation in Livepeer — all economic weight, voting power, and reward distribution derive from how much LPT is staked to active orchestrators.

**Status**: current

**Also known as**: Bonded stake

---

### Stake Weight

**Definition**: An orchestrator's proportional influence in the network, determined by total bonded LPT (self-stake plus delegated stake), affecting active set rank, reward share, and governance vote weight.

**Tags**: `economic:reward`, `web3:tokenomics`

**Tabs**: orchestrators

**Pages**: `orchestrators/staking`, `orchestrators/protocol`

**Context**: Stake weight is the primary factor in active set membership for video transcoding. Higher total bonded LPT means a higher rank and greater share of inflationary rewards.

**Status**: current

---

### Stake-for-Access

**Definition**: A model where staking the protocol's native token is required to perform work or access network services, converting participation into token buying pressure.

**Tags**: `livepeer:protocol`, `web3:tokenomics`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: In Livepeer's stake-for-access design, orchestrators must bond LPT to receive jobs, and the amount staked influences their selection probability. This aligns the interests of compute providers with long-term token value.

**Status**: current

**Also known as**: SFA

---

### Stake-Weighted Voting

**Definition**: A governance voting system where each participant's vote weight is proportional to their bonded LPT stake.

**Tags**: `livepeer:protocol`, `web3:governance`

**Tabs**: about, community, lpt

**Pages**: `about/governance`, `community/governance`, `lpt/governance`

**Context**: Stake-weighted voting in Livepeer means both orchestrators and delegators can vote on governance proposals, with voting power determined by bonded LPT; delegators can override their orchestrator's vote with their own stake via vote detachment.

**Status**: current

---

### Staking

**Definition**: Locking LPT tokens in a proof-of-stake protocol to participate in network security, governance, and earn inflationary rewards and fee income.

**Tags**: `economic:reward`, `web3:tokenomics`

**Tabs**: home, community, lpt, resources

**Pages**: `home/staking`, `home/network`, `community/staking`, `community/index`, `lpt/staking`, `resources/glossary`, `resources/staking`

**External**: [Proof of stake (Ethereum.org)](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)

**Status**: current

---

### Stream

**Definition**: Top-level Livepeer Studio object representing a live broadcast channel, configured with a stream key, playback ID, transcoding profiles, and optional recording and multistream settings.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/api`

**Context**: A Stream is a persistent Studio resource that persists across broadcast sessions; each time a broadcaster connects using the stream key a new Session is created under it, keeping channel configuration stable between live events.

**Status**: current

---

### Stream Key

**Definition**: Secret credential used by broadcasters to authenticate and push live video to a stream's ingest endpoint; equivalent to a password for the RTMP or SRT connection.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/api`

**Context**: Stream Keys are generated per Stream object in Livepeer Studio; they should be kept private and rotated if compromised, as anyone holding the key can broadcast to that stream channel.

**Status**: current

---

### StreamDiffusion

**Definition**: Optimized real-time diffusion pipeline using stream batching and stochastic similarity filtering to apply generative image transformations to live video at interactive frame rates.

**Tags**: `ai:model`

**Tabs**: solutions, developers, orchestrators

**Pages**: `solutions/ai`, `solutions/pipelines`, `developers/pipelines`, `developers/ai-video`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [StreamDiffusion (GitHub)](https://github.com/cumulo-autumn/StreamDiffusion)

**Status**: current

---

### Streamflow

**Definition**: Performance phase upgrade introducing peer-to-peer distribution, WebRTC support, and the Orchestrator/Transcoder split.

**Tags**: `livepeer:upgrade`

**Tabs**: home

**Pages**: `home/upgrades`, `home/index`

**Context**: Streamflow was a major protocol upgrade that separated the orchestrator and transcoder roles, introduced probabilistic micropayments, and enabled scalable live streaming on the Livepeer mainnet.

**Status**: current

---

### Streaming

**Definition**: Continuous delivery of multimedia over a network rendered in real time, as opposed to full download before playback.

**Tags**: `video:playback`

**Tabs**: home, resources

**Pages**: `home/streaming`, `home/index`, `resources/glossary`, `resources/index`

**External**: [Streaming media (Wikipedia)](https://en.wikipedia.org/wiki/Streaming_media)

**Status**: current

---

### Streamplace

**Definition**: Project building the video infrastructure layer for decentralized social platforms, focused on the AT Protocol ecosystem and enabling open video publishing.

**Tags**: `livepeer:product`

**Tabs**: solutions, developers, community

**Pages**: `solutions/ai`, `solutions/use-cases`, `developers/ai-video`, `developers/use-cases`, `community/ai`, `community/projects`

**Context**: Streamplace is a Livepeer ecosystem project (SPE) that uses Livepeer's transcoding and delivery infrastructure to power video for decentralized social applications built on the AT Protocol (Bluesky) stack.

**Status**: current

---

### Style Transfer

**Definition**: Using deep neural networks to apply the visual style of one image or video to the content of another.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/pipelines`

**External**: [Neural style transfer (Wikipedia)](https://en.wikipedia.org/wiki/Neural_style_transfer)

**Status**: current

---

### Sub-second Latency

**Definition**: Video delivery with end-to-end delay under one second, typically achieved via WebRTC's UDP-based transport.

**Tags**: `video:playback`

**Tabs**: developers

**Pages**: `developers/streaming`, `developers/webrtc`

**External**: [Cloudflare — WebRTC WHIP/WHEP](https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/)

**Status**: current

---

### Subgraph

**Definition**: Custom open API defining how Livepeer on-chain data is indexed and queried via GraphQL, built on The Graph protocol.

**Tags**: `web3:concept`

**Tabs**: orchestrators

**Pages**: `orchestrators/protocol`, `orchestrators/data`

**External**: [Subgraphs (The Graph)](https://thegraph.com/docs/en/subgraphs/developing/subgraphs/)

**Status**: current

---

### Supply

**Definition**: The total number of LPT tokens in existence at any given time, starting from a genesis supply of 10 million and growing continuously through inflationary issuance.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/tokenomics`

**Context**: Total supply growth is governed by the per-round inflation rate; because inflation is distributed only to active stakers, non-stakers experience dilution as supply increases.

**Status**: current

---

### Surge strategy

**Definition**: Concentrated treasury spending approach targeting high-impact growth initiatives during strategic market windows.

**Tags**: `economic:treasury`

**Tabs**: community

**Pages**: `community/governance`, `community/treasury`

**Context**: The Surge strategy is a treasury spending philosophy introduced by the Transformation SPE, directing resources toward high-leverage opportunities (e.g. AI video growth) rather than steady-state maintenance funding.

**Status**: current

---

### SVD (Stable Video Diffusion)

**Definition**: Stability AI's latent diffusion model generating 14–25 frame video clips at 576×1024 resolution conditioned on a single input image.

**Tags**: `ai:model`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [Stable Video Diffusion (Hugging Face)](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt)

**Status**: current

---

### Synthetic Data

**Definition**: Artificially generated data produced by algorithms rather than real-world events, used for training AI models when real data is scarce or sensitive.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Synthetic data (Wikipedia)](https://en.wikipedia.org/wiki/Synthetic_data)

**Status**: current

---

### TAM (Total Addressable Market)

**Definition**: The total potential revenue opportunity available to a product or service if it captured 100% of its target market.

**Tags**: `economic:business`, `web3:tokenomics`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/economics`

**External**: [Total addressable market (Wikipedia)](https://en.wikipedia.org/wiki/Total_addressable_market)

**Status**: current

**Also known as**: Total Addressable Market

---

### Target Bonding Rate

**Definition**: The 50% participation threshold for the ratio of bonded LPT to total supply; the inflation mechanism adjusts the per-round issuance rate to push toward this target.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/inflation`

**Context**: The Target Bonding Rate is the equilibrium point of Livepeer's inflation model — if bonding rate is below 50%, inflation rises to incentivize more staking; if above, inflation falls.

**Status**: current

---

### Tenderize

**Definition**: Liquid staking protocol for LPT allowing staking while maintaining liquidity through derivative tokens.

**Tags**: `livepeer:tool`, `web3:tokenomics`

**Tabs**: community

**Pages**: `community/tools`, `community/staking`

**Context**: Tenderize integrates with Livepeer's bonding system to let LPT holders stake without the 7-round unbonding lockup, issuing liquid derivative tokens representing staked positions.

**Status**: current

---

### TensorRT

**Definition**: NVIDIA's inference SDK optimising models through quantisation, layer fusion, and kernel auto-tuning for low-latency GPU inference.

**Tags**: `ai:framework`, `technical:infra`

**Tabs**: developers, resources

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `resources/glossary`, `resources/ai`

**External**: [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt)

**Status**: current

---

### Text-to-Image

**Definition**: AI pipeline generating an image from a natural language text prompt using a language encoder and a diffusion model.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Text-to-image model (Wikipedia)](https://en.wikipedia.org/wiki/Text-to-image_model)

**Status**: current

---

### Text-to-Speech

**Definition**: AI pipeline synthesising spoken audio from written text using phonetic conversion and audio synthesis models.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Speech synthesis (Wikipedia)](https://en.wikipedia.org/wiki/Speech_synthesis)

**Status**: current

---

### Thawing Period

**Definition**: The mandatory waiting period of approximately 7 rounds after initiating an unbond before the freed LPT becomes withdrawable to the holder's wallet.

**Tags**: `livepeer:protocol`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/delegation`

**Context**: The thawing period is a security mechanism that prevents delegators from immediately withdrawing stake after misbehavior, giving the protocol time to apply any pending slashing.

**Status**: current

---

### Thumbnail

**Definition**: Reduced-size preview image representing a video frame, used for recognition, navigation, and social sharing previews.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/vod`, `solutions/playback`

**External**: [Thumbnail (Wikipedia)](https://en.wikipedia.org/wiki/Thumbnail)

**Status**: current

---

### Ticket Broker

**Definition**: The TicketBroker smart contract that manages Livepeer's probabilistic micropayment system, holding gateway deposits and reserves, and processing winning ticket redemptions.

**Tags**: `livepeer:contract`, `economic:payment`

**Tabs**: about, gateways, orchestrators

**Pages**: `about/payments`, `about/contracts`, `gateways/payments`, `gateways/contracts`, `orchestrators/payments`, `orchestrators/contracts`

**Context**: Gateways fund it via deposit and reserve; orchestrators redeem winning tickets through it. The TicketBroker is the payment settlement layer every on-chain gateway interacts with.

**Status**: current

**Also known as**: TicketBroker

---

### Throughput

**Definition**: Rate of successful data processing per unit time, measuring the volume of work an orchestrator can complete (segments transcoded per second, or AI requests per minute).

**Tags**: `operational:monitoring`

**Tabs**: orchestrators

**Pages**: `orchestrators/performance`, `orchestrators/benchmarks`

**External**: [Throughput (Wikipedia)](https://en.wikipedia.org/wiki/Throughput)

**Status**: current

---

### Timelock

**Definition**: A smart contract mechanism that enforces a mandatory delay between when a governance proposal passes and when it can be executed on-chain.

**Tags**: `web3:governance`

**Tabs**: community, lpt

**Pages**: `community/governance`, `lpt/governance`, `lpt/contracts`

**Context**: The Timelock in LivepeerGovernor gives the community time to review approved changes before they take effect, providing a safety window to react to malicious or erroneous proposals.

**Status**: current

---

### Titan Node

**Definition**: Community orchestrator group in Western North America providing education, Start Up Grants, and pre-configured hardware for running Livepeer orchestrators.

**Tags**: `livepeer:tool`

**Tabs**: orchestrators

**Pages**: `orchestrators/setup`, `orchestrators/hardware`

**Context**: Titan Node operates as both a community resource and a hardware supply partner. Their pre-configured nodes are designed to lower the barrier to entry for new orchestrator operators.

**Status**: current

---

### Token Distribution

**Definition**: The allocation and dispersal of LPT tokens across founders, team, investors, and the public through mechanisms including the Merkle Mine, vesting schedules, and inflationary issuance.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/tokenomics`, `lpt/history`

**Context**: Livepeer's initial token distribution used a combination of team/investor allocations with vesting and the open Merkle Mine; ongoing distribution occurs through per-round inflation to active stakers.

**Status**: draft

---

### Tokenomics

**Definition**: The economic design of a token system encompassing supply, distribution, incentives, staking, inflation, governance rights, and deflationary mechanisms.

**Tags**: `web3:tokenomics`

**Tabs**: community, lpt, resources

**Pages**: `community/economics`, `lpt/tokenomics`, `resources/glossary`, `resources/economics`

**External**: [Cryptoeconomics (Wikipedia)](https://en.wikipedia.org/wiki/Cryptoeconomics)

**Status**: current

**Also known as**: Token Economics

---

### Transcode Fail Rate

**Definition**: Percentage of source segments that an orchestrator fails to transcode successfully, used as a performance and reliability metric by gateways.

**Tags**: `operational:monitoring`

**Tabs**: orchestrators

**Pages**: `orchestrators/performance`, `orchestrators/monitoring`

**Context**: A high transcode fail rate lowers an orchestrator's performance score and reduces the probability of being selected for future jobs. Causes include GPU errors, timeout, software bugs, and capacity overload.

**Status**: current

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding format or bitrate to another for adaptive multi-rendition delivery.

**Tags**: `video:processing`

**Tabs**: home, about, solutions, developers, gateways, orchestrators, lpt, community, resources

**Pages**: `home/network`, `home/streaming`, `about/transcoding`, `solutions/transcoding`, `solutions/index`, `developers/streaming`, `developers/protocol`, `gateways/transcoding`, `gateways/index`, `orchestrators/transcoding`, `orchestrators/index`, `lpt/protocol`, `lpt/economics`, `community/network`, `community/index`, `resources/glossary`, `resources/protocol`

**External**: [Transcoding (Wikipedia)](https://en.wikipedia.org/wiki/Transcoding)

**Status**: current

---

### Transformer

**Definition**: A neural network architecture that uses self-attention mechanisms to process sequential data in parallel, forming the basis of most modern large language models and many vision models.

**Tags**: `ai:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/ai`

**External**: [Transformer (machine learning) (Wikipedia)](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture))

**Status**: current

---

### Transformation SPE

**Definition**: SPE seeding new contribution mechanisms, coordinating talent, and directing budgets for ecosystem workstreams.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/governance`, `community/treasury`

**Context**: The Transformation SPE was established to operationalize the Surge strategy; it introduced Workstreams and Advisory Boards as new governance execution structures for the Livepeer ecosystem.

**Status**: current

---

### Treasury

**Definition**: Pool of LPT and ETH held on-chain for funding public goods and ecosystem development, governed by token holder votes via the LivepeerGovernor contract.

**Tags**: `economic:treasury`

**Tabs**: home, about, developers, orchestrators, lpt, community, resources

**Pages**: `home/governance`, `home/staking`, `about/governance`, `about/economics`, `developers/protocol`, `developers/governance`, `orchestrators/governance`, `orchestrators/protocol`, `lpt/treasury`, `lpt/governance`, `community/treasury`, `community/governance`, `resources/glossary`, `resources/governance`

**Context**: The Livepeer on-chain treasury is funded by a percentage of per-round inflationary LPT (Treasury Reward Cut Rate); allocations are approved via the LivepeerGovernor contract using stake-weighted voting.

**Status**: current

---

### Treasury Allocation

**Definition**: A governance-approved distribution of treasury funds to a specific proposal, SPE, or grant recipient.

**Tags**: `economic:treasury`

**Tabs**: lpt

**Pages**: `lpt/treasury`, `lpt/governance`

**Context**: Treasury allocations are enacted via on-chain proposals that pass through the LivepeerGovernor voting process and execute after the Timelock delay; they typically fund SPEs in milestone tranches.

**Status**: current

---

### Treasury Forum

**Definition**: Forum section for treasury proposals, SPE funding discussions, and resource allocation.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/treasury`, `community/tools`

**Context**: The Treasury Forum is the designated category on the Livepeer Forum where SPE pre-proposals, grant requests, RFPs, and budget discussions are posted for community feedback before on-chain votes.

**Status**: current

---

### Treasury Governance

**Definition**: The on-chain process by which LPT stakeholders propose, vote on, and execute allocation of community treasury funds for ecosystem development.

**Tags**: `economic:treasury`, `web3:governance`

**Tabs**: lpt

**Pages**: `lpt/treasury`, `lpt/governance`

**Context**: Treasury governance uses the LivepeerGovernor contract; proposals require a Proposer Bond, pass through a voting period, meet Quorum, and execute after a Timelock delay.

**Status**: draft

---

### Treasury Reward Cut Rate

**Definition**: Governable percentage of per-round LPT inflation diverted to the community treasury instead of being distributed directly to orchestrators and delegators (currently 10%).

**Tags**: `economic:treasury`

**Tabs**: community, lpt

**Pages**: `community/treasury`, `lpt/treasury`, `lpt/economics`

**Context**: The treasury reward cut rate is set via governance; it determines what share of each round's LPT emissions flows into the on-chain treasury rather than being distributed to active participants.

**Status**: current

---

### Treasury Talk

**Definition**: Recurring community call focused on treasury discussions and SPE updates.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/events`, `community/governance`

**Context**: Treasury Talk is a regular governance call where active SPEs present progress updates, new funding proposals are introduced, and community members ask questions about treasury spending.

**Status**: current

---

### Tributary

**Definition**: Beta phase of the Livepeer roadmap where LPMS supported most live streaming use cases and mainnet was deployed.

**Tags**: `livepeer:upgrade`

**Tabs**: home

**Pages**: `home/upgrades`

**Context**: Tributary represents the second named milestone in Livepeer's phased roadmap, following Snowmelt's testnet stage; it culminated in the launch of the Livepeer mainnet with core transcoding and staking functionality.

**Status**: current

---

### Trickle Streaming Protocol

**Definition**: Low-latency HTTP-based streaming protocol for real-time media transport between Livepeer nodes, enabling frame-level AI processing on live streams.

**Tags**: `livepeer:sdk`

**Tabs**: developers

**Pages**: `developers/streaming`, `developers/architecture`

**Context**: The Trickle Streaming Protocol is the Livepeer-native transport layer underpinning PyTrickle and the live-video-to-video pipeline, enabling sub-segment-level media delivery for real-time AI transforms.

**Status**: current

---

### Trustless

**Definition**: System property where participants interact using cryptographic proofs rather than requiring trust in any third party.

**Tags**: `web3:concept`

**Tabs**: home

**Pages**: `home/network`, `home/index`

**External**: [Web3 — trustless (Ethereum.org)](https://ethereum.org/web3)

**Status**: current

---

### TTFF (Time to First Frame)

**Definition**: Duration from the moment a viewer presses play to the first video frame rendered on screen; a key quality-of-experience metric for streaming performance.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/analytics`, `solutions/playback`

**External**: [Time to first frame (SVTA Wiki)](https://wiki.svta.org/time-to-first-frame/)

**Status**: current

---

### TUS Upload

**Definition**: Resumable file upload protocol over HTTP that allows interrupted large file uploads to resume from where they stopped rather than restarting from the beginning.

**Tags**: `technical:security`

**Tabs**: solutions

**Pages**: `solutions/vod`, `solutions/api`

**External**: [TUS protocol](https://tus.io/)

**Status**: current

---

### Unbonding

**Definition**: The process of initiating withdrawal of bonded LPT from an orchestrator, which triggers a 7-round waiting period (thawing period) before tokens become liquid and withdrawable.

**Tags**: `web3:tokenomics`

**Tabs**: about, lpt

**Pages**: `about/staking`, `about/delegators`, `lpt/staking`, `lpt/delegation`

**External**: [Livepeer unbonding introduction](https://forum.livepeer.org/t/introduction-to-partial-unbonding/360)

**Context**: Unbonding does not immediately return LPT to the wallet; tokens remain locked for approximately 7 rounds (the thawing period), during which they can still be rebonded but earn no new rewards.

**Status**: current

**Also known as**: Unbonding period

---

### Unbonding period

**Definition**: Waiting period during which tokens are locked after initiating unbonding before becoming withdrawable (7 rounds in Livepeer).

**Tags**: `web3:tokenomics`

**Tabs**: community

**Pages**: `community/staking`

**Context**: The unbonding period in Livepeer is 7 protocol rounds; during this time, LPT cannot be transferred or re-staked, serving as a security and commitment mechanism. See also: Unbonding, Thawing Period.

**Status**: current

---

### Upscaling

**Definition**: Increasing image or video resolution using AI models that predict high-frequency detail not present in the source.

**Tags**: `ai:pipeline`

**Tabs**: home, orchestrators

**Pages**: `home/ai-video`, `home/pipelines`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Image scaling (Wikipedia)](https://en.wikipedia.org/wiki/Image_scaling)

**Status**: current

**Also known as**: Upscale

---

### USD Pricing

**Definition**: A pricing configuration where work costs are denominated in US dollars, with automatic dynamic conversion to wei as the ETH/USD exchange rate fluctuates.

**Tags**: `economic:pricing`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/pricing`, `gateways/config`, `orchestrators/pricing`, `orchestrators/config`

**Context**: USD pricing shields gateway and orchestrator operators from ETH price volatility. The gateway or an external price feed integration queries an ETH/USD oracle and adjusts the wei-denominated MaxPrice accordingly.

**Status**: current

---

### veLPT (Voting Escrow LPT)

**Definition**: A proposed mechanism that would allow LPT holders to lock tokens for an extended period in exchange for enhanced governance voting power, aligning long-term incentive structures.

**Tags**: `web3:governance`, `economic:treasury`

**Tabs**: community, lpt

**Pages**: `community/governance`, `lpt/governance`, `lpt/proposals`

**Context**: veLPT is a governance proposal (not yet implemented) inspired by Curve Finance's veToken model; it would give long-term committed holders outsized influence relative to short-term holders. As of 2026 it remains a proposal.

**Status**: draft

**Also known as**: Vote-Escrowed LPT

---

### Verification Mechanisms

**Definition**: Protocol-level processes that confirm orchestrators performed transcoding or AI work correctly, including Truebit-style verification and probabilistic spot-checking approaches.

**Tags**: `livepeer:protocol`

**Tabs**: about

**Pages**: `about/protocol`, `about/transcoding`

**Context**: Verification mechanisms are how Livepeer enforces work quality without requiring every segment to be re-verified; the protocol uses a combination of cryptographic challenges and economic slashing to deter misbehavior.

**Status**: current

---

### Verifier

**Definition**: A network component responsible for validating work performed by orchestrators, confirming that transcoded or AI-processed output matches expected results.

**Tags**: `livepeer:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: The Verifier role is part of Livepeer's fault-proof system: it samples orchestrator outputs and triggers slashing conditions if misbehavior is detected. In the current network, verification uses deterministic checks and spot sampling rather than the originally planned Truebit mechanism.

**Status**: current

---

### Vesting

**Definition**: A schedule controlling when token allocations — such as founder or team grants — become available over time, often with an initial cliff period followed by pro-rata release.

**Tags**: `web3:tokenomics`, `economic:reward`

**Tabs**: lpt

**Pages**: `lpt/tokenomics`, `lpt/history`

**External**: [Vesting (Wikipedia)](https://en.wikipedia.org/wiki/Vesting)

**Status**: current

---

### Viewership

**Definition**: Audience metrics including view counts, watch time, unique viewers, and geographic distribution tracked for streams and assets.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/analytics`, `solutions/api`

**Context**: Livepeer Studio provides a Viewership API returning per-asset or per-stream engagement metrics; data is collected from the Livepeer Player or via the `reportPlayback` API endpoint in custom players.

**Status**: current

---

### VOD (Video on Demand)

**Definition**: Video on demand — system allowing users to access pre-recorded content at any time, contrasting with live streaming.

**Tags**: `video:playback`

**Tabs**: home, solutions

**Pages**: `home/streaming`, `home/video`, `solutions/vod`, `solutions/index`

**External**: [Video on demand (Wikipedia)](https://en.wikipedia.org/wiki/Video_on_demand)

**Status**: current

---

### Vote detachment

**Definition**: Delegators overriding their orchestrator's governance vote with their own independent stake-weighted vote on a specific proposal.

**Tags**: `web3:governance`, `operational:governance`

**Tabs**: community, lpt

**Pages**: `community/governance`, `lpt/governance`

**Context**: Livepeer's governance design allows delegators to vote independently from the orchestrator they bonded to; if a delegator casts their own vote, it detaches their stake-weight from the orchestrator's vote. The orchestrator's vote applies only to stake whose delegators have not individually voted.

**Status**: current

---

### Voting delay

**Definition**: Number of rounds (1) between governance proposal creation and the start of the voting period.

**Tags**: `operational:governance`

**Tabs**: community

**Pages**: `community/governance`

**Context**: The voting delay in Livepeer governance gives stakeholders time to review a new proposal before voting opens, preventing snap votes on proposals the community has not had time to analyze.

**Status**: current

---

### Voting period

**Definition**: Number of rounds (10) during which token holders can cast votes on a governance proposal.

**Tags**: `operational:governance`

**Tabs**: community

**Pages**: `community/governance`

**Context**: The Livepeer voting period lasts 10 protocol rounds; votes cast via LivepeerGovernor are weighted by bonded stake, and delegators may override their orchestrator's vote during this window.

**Status**: current

---

### Voting Power

**Definition**: The weight of a participant's vote in Livepeer on-chain governance, determined by their total bonded LPT stake at the block when the proposal was created.

**Tags**: `livepeer:protocol`, `web3:governance`

**Tabs**: community, lpt

**Pages**: `community/governance`, `lpt/governance`, `lpt/staking`

**Context**: Voting power in Livepeer is stake-weighted, not one-token-one-vote; delegators can override their orchestrator's vote with their own stake-proportional vote via vote detachment.

**Status**: current

---

### VRAM (Video RAM)

**Definition**: Dedicated GPU memory used for storing graphics data, model weights, and intermediate tensors during AI inference.

**Tags**: `technical:infra`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/compute`, `orchestrators/ai`, `orchestrators/hardware`

**External**: [Video random-access memory (Wikipedia)](https://en.wikipedia.org/wiki/Video_random-access_memory)

**Status**: current

---

### Warm Model

**Definition**: An AI model that is already loaded into GPU memory and ready to serve inference requests immediately, without the cold-start latency of loading from storage.

**Tags**: `ai:concept`, `livepeer:config`

**Tabs**: about, developers, gateways, orchestrators, resources

**Pages**: `about/ai`, `developers/pipelines`, `developers/ai-gateway`, `gateways/pipelines`, `gateways/routing`, `orchestrators/ai`, `orchestrators/performance`, `resources/glossary`, `resources/ai`

**Context**: In Livepeer's AI network, orchestrators can pre-load ("warm") models in GPU VRAM to guarantee fast response times; warm models are declared in the aiModels.json config and prioritized for latency-sensitive pipelines. During the current beta, orchestrators typically support one warm model per GPU.

**Status**: current

---

### Water Cooler

**Definition**: Biweekly informal community call for development updates and ecosystem news.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/events`, `community/social`

**Context**: The Water Cooler is a recurring Livepeer community call with a lighter format than Treasury Talk or Dev Call; it covers ecosystem news, informal Q&A, and community social discussion.

**Status**: current

---

### Webhook

**Definition**: HTTP callback mechanism where a server sends an automated POST request to a configured URL when a specified platform event occurs.

**Tags**: `technical:dev`

**Tabs**: solutions, developers, gateways, orchestrators

**Pages**: `solutions/webhooks`, `solutions/api`, `developers/api`, `developers/events`, `gateways/events`, `gateways/config`, `orchestrators/discovery`

**External**: [Webhook (Wikipedia)](https://en.wikipedia.org/wiki/Webhook)

**Status**: current

---

### Webhook Discovery

**Definition**: Mechanism for orchestrators to dynamically advertise their AI capabilities to gateways via HTTP webhook callbacks rather than only relying on on-chain registration.

**Tags**: `livepeer:protocol`, `technical:dev`

**Tabs**: orchestrators

**Pages**: `orchestrators/discovery`, `orchestrators/config`

**Context**: Provides a flexible, off-chain channel for capability advertisement. Gateways can call a registered webhook endpoint to retrieve the orchestrator's current capability set, enabling real-time updates without on-chain transactions.

**Status**: current

---

### WebRTC (Web Real-Time Communication)

**Definition**: Open-source project and W3C/IETF standard providing browsers and mobile apps with peer-to-peer real-time audio, video, and data exchange over UDP without plugins.

**Tags**: `video:protocol`, `technical:protocol`

**Tabs**: solutions, developers, resources

**Pages**: `solutions/webrtc`, `solutions/livestreaming`, `developers/streaming`, `developers/webrtc`, `resources/glossary`, `resources/streaming`

**External**: [WebRTC (Wikipedia)](https://en.wikipedia.org/wiki/WebRTC)

**Status**: current

---

### WebVTT (Web Video Text Tracks)

**Definition**: W3C standard format for displaying timed text (captions, subtitles, chapters, metadata) synchronized with HTML5 video playback.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/vod`, `solutions/subtitles`

**External**: [WebVTT (Wikipedia)](https://en.wikipedia.org/wiki/WebVTT)

**Status**: current

---

### Wei

**Definition**: The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in on-chain price calculations and payment ticket values.

**Tags**: `web3:token`

**Tabs**: gateways, orchestrators, lpt

**Pages**: `gateways/payments`, `gateways/pricing`, `orchestrators/pricing`, `orchestrators/payments`, `lpt/pricing`, `lpt/payments`

**External**: [Ether denominations (ethereum.org)](https://ethereum.org/glossary/)

**Status**: current

---

### Weight Factors

**Definition**: Configurable scoring parameters — including stake weight, price weight, and random selection weight — that the gateway uses to rank and select orchestrators during discovery.

**Tags**: `livepeer:config`

**Tabs**: gateways

**Pages**: `gateways/routing`, `gateways/discovery`

**Context**: Weight factors (e.g., `selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`) let gateway operators tune the trade-off between cost, decentralization, and performance in orchestrator selection. Adjusting these requires understanding their interaction with the scoring algorithm.

**Status**: current

---

### WHEP (WebRTC-HTTP Egress Protocol)

**Definition**: IETF draft protocol enabling viewers to watch content from streaming services via WebRTC using a standardized SDP offer/answer HTTP exchange.

**Tags**: `video:protocol`

**Tabs**: solutions, resources

**Pages**: `solutions/webrtc`, `solutions/playback`, `resources/glossary`, `resources/streaming`

**External**: [WHEP draft (IETF)](https://datatracker.ietf.org/doc/draft-ietf-wish-whep/)

**Status**: current

**Also known as**: WebRTC-HTTP Egress Protocol

---

### WHIP (WebRTC-HTTP Ingestion Protocol)

**Definition**: RFC 9725 standard protocol for WebRTC-based live video ingestion via a simple HTTP SDP offer/answer exchange, enabling browser-native broadcasting without plugins.

**Tags**: `video:protocol`

**Tabs**: solutions

**Pages**: `solutions/webrtc`, `solutions/ingest`

**External**: [WHIP (RFC 9725)](https://www.rfc-editor.org/rfc/rfc9725.html)

**Status**: current

---

### Whisper

**Definition**: OpenAI's encoder-decoder transformer for speech recognition and translation, pre-trained on 680,000 hours of multilingual audio.

**Tags**: `ai:model`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Whisper (Hugging Face)](https://huggingface.co/openai/whisper-large-v3)

**Status**: current

---

### Win Probability

**Definition**: The configured likelihood that any given micropayment ticket is a winning ticket; a lower probability means larger face values per winning ticket.

**Tags**: `economic:payment`

**Tabs**: orchestrators

**Pages**: `orchestrators/payments`, `orchestrators/protocol`

**Context**: Win probability is a parameter negotiated between gateway and orchestrator. Lower win probability reduces on-chain redemption frequency (and gas costs) at the expense of larger, less frequent payouts.

**Status**: current

---

### Winning Ticket

**Definition**: A probabilistic payment ticket whose random outcome meets the configured win probability threshold, entitling the orchestrator to redeem it on-chain for its ETH face value.

**Tags**: `economic:payment`

**Tabs**: about, orchestrators

**Pages**: `about/payments`, `about/protocol`, `orchestrators/payments`, `orchestrators/protocol`

**Context**: In Livepeer's payment system, most tickets are non-winning; only the fraction that statistically win are submitted to the TicketBroker for on-chain redemption, keeping gas costs low while maintaining correct expected payment values.

**Status**: current

---

### Worker

**Definition**: A Livepeer node running Docker containers for AI models or transcoding processes, executing compute tasks delegated by an orchestrator.

**Tags**: `livepeer:role`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: Workers are the compute leaf nodes in a Livepeer orchestrator pool. An orchestrator can coordinate many workers to scale capacity horizontally; each worker connects via the orchSecret and processes jobs assigned by the orchestrator.

**Status**: current

---

### Workload

**Definition**: Total amount of work assigned to an orchestrator — the aggregate of active sessions, concurrent segments, and AI inference requests being processed at a given time.

**Tags**: `operational:process`

**Tabs**: orchestrators

**Pages**: `orchestrators/performance`, `orchestrators/operations`

**Context**: Workload determines whether an orchestrator is at capacity. The `-maxSessions` flag caps the maximum concurrent workload. Monitoring workload against capacity helps operators tune pricing and hardware scaling decisions.

**Status**: current

---

### Workstreams

**Definition**: Focused execution teams organized around specific domains, translating Advisory Board recommendations into phased initiatives.

**Tags**: `livepeer:entity`, `operational:governance`, `operational:community`

**Tabs**: community

**Pages**: `community/governance`, `community/treasury`

**Context**: Workstreams are the primary execution structure within Livepeer's post-SPE governance model; each workstream has a defined domain, accountable lead, and milestone timeline funded through the treasury.

**Status**: current

---

### World Model

**Definition**: Neural network representing and predicting environment dynamics, enabling an AI agent to plan by simulating outcomes rather than acting purely from direct observation.

**Tags**: `ai:application`

**Tabs**: home, solutions, developers, community, resources

**Pages**: `home/ai-video`, `home/use-cases`, `solutions/ai`, `solutions/use-cases`, `developers/ai-video`, `developers/use-cases`, `community/ai`, `community/projects`, `resources/glossary`, `resources/ai`

**External**: [Generative artificial intelligence (Wikipedia)](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)

**Status**: current

---

### Yield

**Definition**: The annualized return on staked LPT expressed as a percentage, combining inflationary LPT rewards and any ETH fee share earned through the bonded orchestrator.

**Tags**: `economic:reward`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/economics`

**Context**: Yield for delegators varies by orchestrator commission rates, the current inflation rate, and the total bonded supply; the Livepeer documentation provides yield calculators for delegators.

**Status**: current

---

### Zero-to-Hero

**Definition**: Guided learning path taking a developer from no prior knowledge of Livepeer to competent ecosystem participation through structured tutorials and exercises.

**Tags**: `livepeer:product`, `operational:process`

**Tabs**: developers

**Pages**: `developers/guides`, `developers/quickstart`

**Context**: Zero-to-Hero is Livepeer's flagship onboarding tutorial series for new developers, providing step-by-step guides covering SDK setup, stream creation, AI pipeline integration, and protocol fundamentals.

**Status**: current
