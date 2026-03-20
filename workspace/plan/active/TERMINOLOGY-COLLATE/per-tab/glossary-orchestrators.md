# Glossary — Orchestrators Tab

**Tab folder**: `v2/orchestrators/`
**Date**: 2026-03-20
**Terms**: 115
**Source**: Agent deep-read + classified-by-tag.md + existing orchestrators glossary

---

### Active Set

**Definition**: The top 100 orchestrators by total bonded stake eligible to receive video transcoding work in the current round.
**Context**: Active set membership is determined at round start by ranking orchestrators by total bonded LPT (self-stake plus delegated stake). AI inference routing does not require active set membership — it prioritises capability and price over stake position.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### AI Inference

**Definition**: Running a trained neural network model on new input data to produce predictions or generated outputs.
**External**: [Inference engine — Wikipedia](https://en.wikipedia.org/wiki/Inference_engine)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/pipelines`

---

### AI Runner

**Definition**: The container process that executes AI model inference jobs; go-livepeer communicates with it via HTTP and it loads models into GPU memory to process requests.
**Context**: Configured via `aiModels.json` and the `-aiWorker` / `-aiModels` CLI flags. Each AI runner handles one or more pipelines on a dedicated GPU.
**Tags**: `livepeer:config`, `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/setup`

---

### AIServiceRegistry

**Definition**: Smart contract registering AI service capabilities for orchestrators on the Livepeer AI network.
**Context**: Orchestrators optionally advertise their AI pipelines and models on-chain via this contract, enabling capability-based routing by gateways.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/contracts`

---

### aiModels.json

**Definition**: JSON configuration file specifying available AI models including pipeline type, model ID, pricing, and warm status for an orchestrator node.
**Context**: The primary config file for AI orchestrators. Each entry defines which model to load, at what price, and whether it should be pre-warmed on startup.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/config`

---

### aiWorker

**Definition**: CLI flag starting a go-livepeer node as a dedicated AI worker process that connects to an orchestrator and handles AI inference jobs.
**Context**: Enables the orchestrator to offload GPU inference work to a separate subprocess. Multiple aiWorker processes can be connected to a single orchestrator for multi-GPU setups.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/architecture`

---

### Arbitrum

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security.
**External**: [Arbitrum — docs.arbitrum.io](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/staking`

---

### Audio-to-Text

**Definition**: AI pipeline converting spoken language audio into written text using deep neural networks.
**External**: [Speech recognition — Wikipedia](https://en.wikipedia.org/wiki/Speech_recognition)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Batch AI Inference

**Definition**: Running a trained model on a group of inputs asynchronously, optimising GPU utilisation through parallelisation.
**External**: [Batch inference — Google Cloud](https://cloud.google.com/discover/what-is-batch-inference)
**Tags**: `ai:pipeline`, `ai:concept`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/pipelines`

---

### BLIP

**Definition**: Vision-language model by Salesforce using bootstrapped captioning and filtering for image understanding tasks including captioning and visual QA.
**External**: [BLIP — Hugging Face](https://huggingface.co/docs/transformers/model_doc/blip)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Bonding

**Definition**: Staking (locking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system.
**External**: [Proof-of-stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### BondingManager

**Definition**: Core smart contract managing bonding, delegation, staking logic, and fund ownership on the Livepeer protocol.
**Context**: The central contract for all LPT stake operations — bonding, unbonding, delegation, reward distribution, and slash execution.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `orchestrators/contracts`, `orchestrators/staking`

---

### BYOC (Bring Your Own Container)

**Definition**: Deployment pattern enabling orchestrators to run custom Docker containers for AI workloads alongside standard Livepeer pipelines.
**Context**: BYOC containers must conform to the Livepeer AI worker API specification. Used by teams deploying proprietary or experimental models not available in the standard pipeline set.
**Tags**: `livepeer:deployment`, `ai:concept`
**Status**: current
**Pages**: `orchestrators/compute`, `orchestrators/ai`

---

### Capability Advertisement

**Definition**: Mechanism by which orchestrators inform gateways of the AI services, pipelines, and models they can process.
**Context**: Orchestrators broadcast their capabilities either on-chain via the AIServiceRegistry or off-chain via webhook discovery. Gateways use this data to route inference jobs to capable nodes.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/discovery`, `orchestrators/ai`

---

### Capability Matching

**Definition**: Process by which a gateway routes an AI task to an appropriate orchestrator based on advertised capabilities.
**Context**: The gateway compares the requested pipeline and model against each orchestrator's advertised capabilities and selects the best match based on price, performance score, and availability.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/discovery`, `orchestrators/routing`

---

### Cascade

**Definition**: Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines, representing the current phase of protocol development.
**Context**: The Cascade phase introduced AI inference as a first-class network capability, enabling orchestrators to advertise and earn from AI workloads alongside video transcoding.
**Tags**: `livepeer:upgrade`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

---

### Clearinghouse

**Definition**: Contract or system handling settlement of payments between gateways and orchestrators.
**Context**: The clearinghouse resolves probabilistic micropayment tickets on-chain via the TicketBroker contract, converting winning tickets into ETH for orchestrators.
**Tags**: `livepeer:contract`, `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### CLI (Command-Line Interface)

**Definition**: Text-based interface for interacting with software by typing commands; in Livepeer, the primary method for configuring and running go-livepeer nodes.
**External**: [CLI — Wikipedia](https://en.wikipedia.org/wiki/Command_line_interface)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `orchestrators/setup`, `orchestrators/config`

---

### Cold Model / Cold Start

**Definition**: Latency incurred when an AI model must be loaded from storage into GPU memory before the first request can be processed, typically adding 5 to 90 seconds of delay.
**Context**: During the current beta, orchestrators typically support one warm model per GPU. Requests to a cold model trigger a model load before inference can begin. Warm model status is configured in `aiModels.json`.
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/performance`

---

### ComfyStream

**Definition**: Livepeer project running ComfyUI workflows as a real-time media processing backend for live streams.
**Context**: ComfyStream enables orchestrators to expose ComfyUI-based diffusion pipelines as live-video-to-video capabilities on the Livepeer network.
**Tags**: `livepeer:product`, `ai:framework`
**Status**: current
**Pages**: `orchestrators/ai`

---

### ComfyUI

**Definition**: Open-source node-based graphical interface for building and executing AI image and video generation workflows.
**External**: [ComfyUI — GitHub](https://github.com/Comfy-Org/ComfyUI)
**Tags**: `ai:framework`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/pipelines`

---

### ControlNet

**Definition**: Neural network architecture adding spatial conditioning controls such as edge maps, depth, and pose signals to pretrained diffusion models.
**External**: [ControlNet — Hugging Face](https://huggingface.co/lllyasviel/ControlNet)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### CUDA (Compute Unified Device Architecture)

**Definition**: NVIDIA's parallel computing platform and programming API enabling GPUs to be used for general-purpose processing and deep learning.
**External**: [CUDA — Wikipedia](https://en.wikipedia.org/wiki/CUDA)
**Tags**: `ai:framework`, `technical:infra`
**Status**: current
**Pages**: `orchestrators/setup`, `orchestrators/ai`

---

### Daydream

**Definition**: Livepeer's hosted real-time AI video platform turning live camera input into AI-transformed visuals with sub-second latency.
**Context**: Daydream is both a Livepeer product and a showcase of AI inference on the network, demonstrating live-video-to-video pipelines for interactive creative use cases.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/use-cases`

---

### Delegator

**Definition**: LPT token holder who stakes tokens to an orchestrator to secure the network, participate in governance, and earn a share of rewards.
**Context**: Delegators do not run infrastructure. They bond LPT to an orchestrator of their choice and receive a proportional share of that orchestrator's inflation rewards and service fees.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### Diffusion

**Definition**: Class of generative models that learn to produce data by reversing a gradual noising process applied during training.
**External**: [Diffusion model — Wikipedia](https://en.wikipedia.org/wiki/Diffusion_model)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Dual Mode

**Definition**: Deployment configuration where a single orchestrator process handles both video transcoding and AI inference simultaneously.
**Context**: The most common production configuration for operators with capable hardware (24 GB+ VRAM). Dual mode is a workload configuration, not a separate protocol mode — the same go-livepeer binary supports all modes via flag combinations.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/modes`, `orchestrators/config`

---

### ETH

**Definition**: The native cryptocurrency of Ethereum, used to pay transaction fees (gas) and as the settlement currency for orchestrator service fee payments.
**External**: [Ether — ethereum.org](https://ethereum.org/what-is-ether/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/staking`

---

### Face Value

**Definition**: The payout amount assigned to a probabilistic micropayment ticket if it is drawn as a winner.
**Context**: The face value of tickets is set so that, over many tickets, the expected payout matches the fair cost of the work performed. Orchestrators accept lower-probability, higher-face-value tickets to reduce on-chain redemption frequency.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Fee Cut

**Definition**: The percentage of ETH service fees that an orchestrator retains before distributing the remainder to delegators.
**Context**: Set independently from reward cut. A lower fee cut sends more ETH earnings to delegators, which can attract more delegation. Both cuts are configured on-chain and visible in the Livepeer Explorer.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/economics`

---

### Fee Pool

**Definition**: Accumulated ETH fees awaiting distribution between an orchestrator and its delegators.
**Context**: ETH earned from winning tickets flows into the fee pool each round. Orchestrators and delegators claim their respective shares according to the orchestrator's fee cut setting.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### Gateway

**Definition**: Node that submits jobs to the network, routes work to orchestrators, manages payment flows, and provides a protocol interface for applications.
**Context**: Gateways are the demand side of the Livepeer network. They receive streams or AI requests from users or applications and select orchestrators to fulfil the work.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/routing`

---

### go-livepeer

**Definition**: Official Go implementation of the Livepeer protocol containing the Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles in a single binary.
**Context**: The canonical node software for running any Livepeer network role. Orchestrators, gateways, and transcoders all run go-livepeer with different flag combinations.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `orchestrators/setup`, `orchestrators/code`

---

### GPU (Graphics Processing Unit)

**Definition**: Specialised processor designed for parallel computation, used in Livepeer for both video transcoding and AI model inference.
**External**: [GPU — Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `orchestrators/ai`

---

### GPU Worker

**Definition**: Subprocess running AI inference on a dedicated GPU, managed by the go-livepeer orchestrator process.
**Context**: In AI or dual-mode deployments, each GPU in the system runs a dedicated AI runner subprocess (GPU worker). The orchestrator routes inference jobs to available GPU workers.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/architecture`

---

### gRPC

**Definition**: High-performance remote procedure call framework using HTTP/2 and Protocol Buffers for efficient binary communication between services.
**External**: [gRPC — Wikipedia](https://en.wikipedia.org/wiki/GRPC)
**Tags**: `technical:protocol`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/code`

---

### Hard Gate

**Definition**: Strict filter that immediately disqualifies orchestrators failing a required criterion such as exceeding the gateway's maximum price threshold.
**Context**: Unlike soft scoring factors, a hard gate is binary — the orchestrator is excluded from consideration entirely if the condition is not met. MaxPrice is the most common hard gate in practice.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/config`

---

### HLS (HTTP Live Streaming)

**Definition**: Streaming protocol by Apple that encodes video into multiple quality levels and delivers them via standard HTTP with an M3U8 index playlist.
**External**: [HLS — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/streaming`

---

### Image-to-Image

**Definition**: AI pipeline transforming an input image into a modified output image, guided by a text prompt or conditioning signal.
**External**: [Image translation — Wikipedia](https://en.wikipedia.org/wiki/Image_translation)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Image-to-Text

**Definition**: AI pipeline generating a textual description from an input image, encompassing captioning and OCR tasks.
**External**: [Image-to-text — Hugging Face](https://huggingface.co/tasks/image-to-text)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Image-to-Video

**Definition**: AI pipeline generating a short video clip conditioned on a single input image, animating a still frame into motion.
**External**: [Image-to-video — Hugging Face](https://huggingface.co/tasks/image-to-video)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Inflation

**Definition**: Dynamic issuance of new LPT tokens each protocol round, distributed to orchestrators and delegators based on participation and stake.
**Context**: The inflation rate adjusts by 0.00005% per round based on whether total bonded LPT is above or below the 50% target bonding rate. Orchestrators claim their share of inflationary rewards each round via the reward call transaction.
**Tags**: `economic:reward`, `livepeer:protocol`, `web3:tokenomics`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/economics`

---

### LIP-89

**Definition**: Livepeer Improvement Proposal introducing the on-chain LivepeerGovernor governance contract and community treasury.
**Context**: LIP-89 established the on-chain governance infrastructure including stake-weighted voting, the 10-round voting period, the 33% quorum threshold, and the community treasury funded by inflation.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

---

### LIP-91

**Definition**: Livepeer Improvement Proposal bundling the treasury establishment mechanism and defining the inflation-funded treasury reward cut rate.
**Context**: LIP-91 activated the community treasury by directing a governable percentage of per-round LPT inflation into the on-chain treasury contract.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

---

### LIP-92

**Definition**: Livepeer Improvement Proposal defining the AI model registry and capability discovery mechanism for the network.
**Context**: LIP-92 specified how orchestrators register AI capabilities on-chain via the AIServiceRegistry, enabling structured capability advertisement and gateway discovery of AI services.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

---

### Live-Video-to-Video

**Definition**: AI pipeline applying generative models to a continuous video stream frame-by-frame at interactive frame rates.
**External**: [StreamDiffusion — GitHub](https://github.com/cumulo-autumn/StreamDiffusion)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### LLM (Large Language Model)

**Definition**: Neural network trained on massive text corpora to understand and generate human language for tasks including text generation, reasoning, and conversation.
**External**: [LLM — Wikipedia](https://en.wikipedia.org/wiki/Large_language_model)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Loki

**Definition**: Horizontally scalable log aggregation system by Grafana Labs, used in Livepeer orchestrator monitoring stacks.
**External**: [Loki — Grafana Labs](https://grafana.com/oss/loki/)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `orchestrators/monitoring`, `orchestrators/operations`

---

### LPT (Livepeer Token)

**Definition**: ERC-20 governance and staking token used to coordinate, incentivise, and secure the Livepeer network; staked LPT determines work allocation and reward share.
**Context**: LPT is the native utility token of the Livepeer protocol. Orchestrators must bond LPT to enter the active set for video transcoding work. Delegators bond LPT to orchestrators to earn a share of rewards.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### Mainnet

**Definition**: The primary public production blockchain where actual-value transactions occur on the distributed ledger.
**External**: [Mainnet — ethereum.org](https://ethereum.org/glossary/)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `orchestrators/protocol`

---

### MaxPrice

**Definition**: CLI flag setting the maximum transcoding price per pixelsPerUnit that a gateway will accept from an orchestrator; orchestrators above this threshold are excluded.
**Context**: MaxPrice acts as a hard gate in orchestrator selection. Orchestrators set their own pricePerUnit; gateways set their MaxPrice to filter out orchestrators whose prices exceed the budget.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### Micropayment

**Definition**: Small-value payment represented as a signed probabilistic ticket with a chance of being a winner redeemable for ETH.
**External**: [Micropayment — Wikipedia](https://en.wikipedia.org/wiki/Micropayment)
**Tags**: `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Model Warmth

**Definition**: Status indicating whether an AI model is currently loaded in GPU memory (warm) or must be loaded from storage on demand (cold).
**Context**: Orchestrators typically support one warm model per GPU during the current beta phase. The warmth status of each model is configured in `aiModels.json` and determines whether a model can serve requests immediately or incurs a cold-start delay.
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/performance`

---

### NVDEC

**Definition**: NVIDIA hardware video decoder that offloads video decoding from the CPU to dedicated silicon on NVIDIA GPUs.
**External**: [NVDEC — Wikipedia](https://en.wikipedia.org/wiki/NVDEC)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/setup`

---

### NVENC

**Definition**: NVIDIA hardware video encoder that offloads H.264 and H.265 encoding from the CPU to dedicated silicon on NVIDIA GPUs.
**External**: [NVENC — Wikipedia](https://en.wikipedia.org/wiki/NVENC)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/setup`

---

### O-T Split

**Definition**: Architectural separation of the Orchestrator and Transcoder (Worker) processes, typically running on different machines, where the orchestrator handles protocol interaction and the transcoder handles GPU compute.
**Context**: Enables security isolation and multi-GPU scaling. The orchestrator process uses the `-orchestrator` flag; the transcoder uses `-transcoder`. Authentication between them uses the `orchSecret` shared secret.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/config`

---

### Ollama

**Definition**: Open-source tool for running large language models locally with a CLI and OpenAI-compatible REST API.
**External**: [Ollama — ollama.com](https://ollama.com/)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Orchestrator

**Definition**: Supply-side network node contributing GPU resources, receiving jobs from gateways, performing transcoding or AI inference, and earning rewards.
**Context**: The canonical Livepeer compute node. An orchestrator handles protocol interaction, job routing, payment negotiation, and capability advertisement. It may run its own transcoder subprocess or delegate to remote transcoder workers.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `orchestrators/index`, `orchestrators/protocol`

---

### OrchestratorInfo

**Definition**: Data structure advertised by orchestrators containing capabilities, pricing, service URI, and metadata used by gateways for selection decisions.
**Context**: OrchestratorInfo is exchanged during gateway-orchestrator negotiation. It includes the orchestrator's pricePerUnit, supported AI capabilities, ticket parameters, and service URI.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `orchestrators/code`, `orchestrators/protocol`

---

### orchSecret

**Definition**: Shared secret used to authenticate communication between an orchestrator process and its standalone transcoder or worker nodes in an O-T split deployment.
**Context**: Set via the `-orchSecret` CLI flag on both the orchestrator and transcoder. Must match exactly. Prevents unauthorised nodes from connecting to an orchestrator as transcoders.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `orchestrators/config`, `orchestrators/security`

---

### Output Profile

**Definition**: Predefined set of encoding parameters (resolution, bitrate, codec, frame rate) defining a single rendition of a transcoded video.
**External**: [Video codec — Wikipedia](https://en.wikipedia.org/wiki/Video_codec)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/config`

---

### Overhead

**Definition**: Additional operational costs beyond direct computation, including gas fees for ticket redemption, bandwidth, and administrative costs.
**Context**: In Livepeer pricing, overhead specifically refers to the estimated ticket redemption cost divided by the face value, expressed as a percentage. The `autoAdjustPrice` flag incorporates overhead into automatic price calculations.
**Tags**: `economic:pricing`, `operational:process`
**Status**: current
**Pages**: `orchestrators/performance`, `orchestrators/economics`

---

### Performance Score

**Definition**: Composite metric rating an orchestrator's reliability and speed, calculated as latency score multiplied by success rate, used by gateways in orchestrator selection.
**Context**: Performance score is tracked per-gateway and influences routing decisions. A low score from failed transcodes or high latency reduces the probability of being selected for future jobs.
**Tags**: `livepeer:protocol`, `operational:monitoring`
**Status**: current
**Pages**: `orchestrators/discovery`, `orchestrators/performance`

---

### Pixel

**Definition**: Single point in a video frame used as the fundamental pricing unit for transcoding work on the Livepeer network.
**External**: [Pixel — Wikipedia](https://en.wikipedia.org/wiki/Pixel)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/pricing`

---

### pixelsPerUnit

**Definition**: CLI parameter defining the number of pixels constituting one billable work unit, allowing granular pricing control.
**Context**: Used in conjunction with pricePerUnit. Setting a larger pixelsPerUnit value effectively lowers the per-pixel price while keeping the per-unit number manageable. Defaults to 1 pixel per unit.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### PM (Probabilistic Micropayment)

**Definition**: Lottery-based payment scheme where gateways send signed tickets to orchestrators and only winning tickets are redeemed on-chain, amortising transaction costs across many payments.
**Context**: The PM system is the core payment mechanism in Livepeer. Most tickets are non-winning; over time, the expected value of winning tickets equals the fair payment for work performed. Orchestrators batch redemptions to optimise gas costs.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Pool

**Definition**: Group of transcoder or worker nodes coordinated under a single orchestrator for increased capacity and redundancy.
**Context**: A pool allows orchestrators to scale beyond a single machine. The pool operator runs the on-chain orchestrator node and handles staking, reward calling, and ticket redemption. Pool workers contribute GPU compute and receive off-chain payouts from the operator.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/operations`

---

### Pool Operator

**Definition**: Entity running an orchestrator that coordinates a pool of transcoder or worker nodes, managing on-chain operations and distributing earnings to workers.
**Context**: Pool operators require infrastructure reliability and community trust. They stake LPT to the active set threshold and distribute earnings to pool workers via off-chain agreements.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/operations`

---

### Pool Worker

**Definition**: Individual machine within an orchestrator pool, running go-livepeer in transcoder mode and executing GPU compute jobs delegated by the pool operator's orchestrator.
**Also known as**: Pool node
**Context**: Pool workers do not hold LPT or interact with the protocol directly — the pool operator stakes on their behalf. Workers connect to the orchestrator using the `-orchAddr` and `-orchSecret` flags.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/operations`

---

### Price Feed

**Definition**: External data source providing real-time ETH/USD exchange rates used by orchestrators to denominate prices in USD terms.
**Context**: Orchestrators using USD pricing fetch the current ETH/USD rate from a price feed service to dynamically adjust their wei-denominated pricePerUnit as ETH price fluctuates.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### pricePerCapability

**Definition**: CLI flag setting the price per unit for a specific AI pipeline and model pair, overriding the default pricePerUnit for that capability.
**Context**: Allows orchestrators to charge different rates for different AI pipelines based on compute intensity. For example, a text-to-image pipeline with a large model can be priced higher than a lightweight audio-to-text pipeline.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/ai`

---

### pricePerGateway

**Definition**: JSON configuration allowing orchestrators to set customised per-gateway-address pricing, enabling different rates for specific gateway partners.
**Context**: Useful for commercial relationships where specific gateways receive preferential pricing. Configured as a JSON map from gateway Ethereum addresses to price overrides.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### pricePerUnit

**Definition**: CLI flag setting the transcoding price in wei per pixelsPerUnit that an orchestrator advertises to gateways.
**Context**: The primary pricing parameter for video transcoding. Gateways with `-maxPricePerUnit` below this value will not route work to the orchestrator. Can be set in wei directly or with a USD target using a price feed.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### PyTorch (Torch)

**Definition**: Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation, used to build and run AI models on orchestrator nodes.
**External**: [PyTorch — Wikipedia](https://en.wikipedia.org/wiki/PyTorch)
**Tags**: `ai:framework`
**Status**: current
**Pages**: `orchestrators/ai`

---

### Redeemer

**Definition**: Service or entity submitting a winning probabilistic micropayment ticket to the TicketBroker contract to claim its face value in ETH.
**Context**: In production deployments, orchestrators typically run an automated redeemer process that monitors for winning tickets and submits them on-chain. Redemption costs gas, so batching is common.
**Tags**: `livepeer:role`, `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Remote Signer

**Definition**: External service that holds private keys securely and signs Ethereum transactions on behalf of a node, allowing the node to operate without direct access to the signing key.
**External**: [Remote signing — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/keys/)
**Tags**: `technical:security`
**Status**: current
**Pages**: `orchestrators/security`

---

### Rendition

**Definition**: Single encoded version of a source video at a specific resolution, bitrate, and codec configuration produced by a transcoding job.
**External**: [Video rendition — Cloudinary Glossary](https://cloudinary.com/glossary/video-rendition)
**Tags**: `video:processing`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/encoding`

---

### RTMP (Real-Time Messaging Protocol)

**Definition**: Protocol for streaming audio, video, and data over TCP on port 1935, used as the primary ingest protocol for live video submitted to Livepeer orchestrators.
**External**: [RTMP — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `orchestrators/streaming`

---

### Reward Call

**Definition**: On-chain transaction (`Reward()`) that an active orchestrator submits once per round to mint and distribute new LPT inflation rewards.
**Context**: Missing a reward call permanently forfeits that round's rewards. Gas cost on Arbitrum is approximately $0.01–$0.12 per call. Orchestrators typically automate reward calling via a cron job or dedicated service.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### Reward Cut

**Definition**: The percentage of inflationary LPT rewards that an orchestrator keeps before distributing the remainder to delegators.
**Context**: Set by the orchestrator and visible in the Livepeer Explorer. A lower reward cut sends more LPT to delegators, which can attract more delegation and increase active set rank. Separate from fee cut.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/economics`

---

### RoundsManager

**Definition**: Smart contract tracking round progression and coordinating round-based protocol state including round initialisation and block counting.
**Context**: Each protocol round is approximately 22 hours (5,760 Ethereum L1 blocks). The RoundsManager tracks the current round number and must be initialised at the start of each round before reward calls can be submitted.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `orchestrators/contracts`, `orchestrators/protocol`

---

### Segment

**Definition**: Short time-sliced chunk of a video stream (typically around 2 seconds) representing the unit of work for video transcoding in the Livepeer protocol.
**Context**: Gateways split incoming live streams into segments and distribute them to orchestrators. Orchestrators transcode each segment independently and return the results. Segment-level parallelism enables distributed transcoding at scale.
**Tags**: `livepeer:protocol`, `video:processing`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/protocol`

---

### Segmentation (AI)

**Definition**: AI task partitioning a digital image into regions by assigning a label to every pixel, identifying and outlining objects or areas.
**External**: [Image segmentation — Wikipedia](https://en.wikipedia.org/wiki/Image_segmentation)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Service URI

**Definition**: Public URL registered on-chain that gateways use to discover and connect to an orchestrator node for job submission.
**Context**: Must be publicly reachable from the internet. Format is typically `https://your-domain:8935`. Registered via the ServiceRegistry contract. An unreachable or incorrect service URI prevents gateways from routing work to the orchestrator.
**Tags**: `livepeer:config`, `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/config`, `orchestrators/protocol`

---

### ServiceRegistry

**Definition**: Smart contract where orchestrators register their service URI for gateway discovery.
**Context**: Orchestrators call the ServiceRegistry when activating or updating their service endpoint. Gateways query this contract to build their list of reachable orchestrators.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `orchestrators/contracts`, `orchestrators/protocol`

---

### Session

**Definition**: Active logical connection between a gateway and an orchestrator during which one or more jobs are processed.
**Context**: Video sessions are stream-based (one per active stream); AI sessions are job-based (one per inference request or batch). The `-maxSessions` flag limits concurrent sessions and effectively controls the orchestrator's maximum throughput.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/routing`, `orchestrators/architecture`

---

### Siphon

**Definition**: Lightweight component directing incoming work to the correct processing path within an orchestrator, or routing a subset of network traffic to specific orchestrators for staged rollout.
**Context**: In orchestrator architecture, the siphon routes incoming jobs between video transcoding and AI inference paths. It can also describe a minimal transcoder deployment that connects to a remote orchestrator to expose local GPU resources.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/architecture`, `orchestrators/routing`

---

### Slashing

**Definition**: Penalty mechanism that destroys a portion of an orchestrator's bonded LPT stake for protocol violations such as failing verification or missing verifications.
**Context**: Slashing conditions include failing transcoding verification, skipping required verifications, or sustained underperformance. Both the orchestrator's self-stake and delegated stake are at risk, which incentivises delegators to select reliable orchestrators.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/staking`

---

### Smoke Test

**Definition**: Preliminary test verifying that an AI pipeline or node configuration is working correctly before deploying to production or accepting live traffic.
**External**: [Smoke testing — Wikipedia](https://en.wikipedia.org/wiki/Smoke_testing_(software))
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/testing`

---

### Solo Operator

**Definition**: Orchestrator deployment where a single operator runs a complete orchestrator node with all components on one machine, without pool workers.
**Context**: The standard deployment for most individual orchestrators. Full control and full responsibility for staking, reward calling, ticket redemption, and compute. Can run in video, AI, or dual mode.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `orchestrators/modes`, `orchestrators/setup`

---

### SPE (Special Purpose Entity)

**Definition**: Treasury-funded organisational unit with a defined scope, budget, and accountability structure for executing ecosystem initiatives.
**Context**: SPEs are how the Livepeer community funds sustained work. Orchestrator-relevant SPEs include LiveInfra (infrastructure), LISAR (contributions), and AI Video SPE (compute scaling). SPEs are approved via on-chain governance.
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `orchestrators/governance`

---

### Stable Diffusion

**Definition**: Open-source latent diffusion model for text-to-image generation, operating in a compressed latent space for efficient high-quality image synthesis.
**External**: [Stable Diffusion — Wikipedia](https://en.wikipedia.org/wiki/Stable_Diffusion)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Stake Weight

**Definition**: An orchestrator's proportional influence in the network, determined by total bonded LPT (self-stake plus delegated stake), affecting active set rank, reward share, and governance vote weight.
**Context**: Stake weight is the primary factor in active set membership for video transcoding. Higher total bonded LPT means a higher rank and greater share of inflationary rewards.
**Tags**: `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/protocol`

---

### StreamDiffusion

**Definition**: Optimised real-time diffusion pipeline using stream batching and stochastic similarity filtering to achieve interactive frame rates for live video transformation.
**External**: [StreamDiffusion — GitHub](https://github.com/cumulo-autumn/StreamDiffusion)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Subgraph

**Definition**: Custom open API defining how Livepeer on-chain data is indexed and queried via GraphQL, built on The Graph protocol.
**External**: [Subgraphs — The Graph](https://thegraph.com/docs/en/subgraphs/developing/subgraphs/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `orchestrators/protocol`, `orchestrators/data`

---

### Text-to-Image

**Definition**: AI pipeline generating an image from a natural language text prompt using a language encoder and diffusion model.
**External**: [Text-to-image model — Wikipedia](https://en.wikipedia.org/wiki/Text-to-image_model)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Text-to-Speech

**Definition**: AI pipeline synthesising spoken audio from written text input via phonetic conversion and neural audio synthesis.
**External**: [Speech synthesis — Wikipedia](https://en.wikipedia.org/wiki/Speech_synthesis)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### TicketBroker

**Definition**: Smart contract managing the probabilistic micropayment system, holding gateway funds and processing winning ticket redemptions.
**Context**: The TicketBroker holds gateway deposits and reserves, validates winning ticket signatures, and transfers ETH to orchestrators when tickets are redeemed. It is the on-chain settlement layer for all Livepeer service payments.
**Tags**: `livepeer:contract`, `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/contracts`

---

### Throughput

**Definition**: Rate of successful data processing per unit time, measuring the volume of work an orchestrator can complete (segments transcoded per second, or AI requests per minute).
**External**: [Throughput — Wikipedia](https://en.wikipedia.org/wiki/Throughput)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `orchestrators/performance`, `orchestrators/benchmarks`

---

### Titan Node

**Definition**: Community orchestrator group in Western North America providing education, Start Up Grants, and pre-configured hardware for running Livepeer orchestrators.
**Context**: Titan Node operates as both a community resource and a hardware supply partner. Their pre-configured nodes are designed to lower the barrier to entry for new orchestrator operators.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `orchestrators/setup`, `orchestrators/hardware`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding to another, producing multiple adaptive renditions at different resolutions and bitrates.
**External**: [Transcoding — Wikipedia](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `orchestrators/transcoding`, `orchestrators/index`

---

### Transcode Fail Rate

**Definition**: Percentage of source segments that an orchestrator fails to transcode successfully, used as a performance and reliability metric by gateways.
**Context**: A high transcode fail rate lowers an orchestrator's performance score and reduces the probability of being selected for future jobs. Causes include GPU errors, timeout, software bugs, and capacity overload.
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `orchestrators/performance`, `orchestrators/monitoring`

---

### Treasury

**Definition**: On-chain pool of LPT and ETH governed by token holder votes, used for funding public goods and ecosystem development initiatives.
**Context**: The Livepeer on-chain treasury is funded by a governable percentage of per-round inflation (the treasury reward cut rate). Orchestrators appear in treasury governance pages as stake-weighted voters.
**Tags**: `economic:treasury`, `livepeer:protocol`
**Status**: current
**Pages**: `orchestrators/governance`, `orchestrators/protocol`

---

### Upscale / Upscaling

**Definition**: AI pipeline increasing the resolution of an image or video frame using neural models that predict high-frequency detail not present in the source.
**External**: [Image scaling — Wikipedia](https://en.wikipedia.org/wiki/Image_scaling)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### USD Pricing

**Definition**: Pricing approach where orchestrators denominate work costs in US dollars, using a price feed to dynamically convert to wei as the ETH/USD rate fluctuates.
**Context**: Enables price stability relative to real-world costs. Implemented via the `-pricePerUnit` flag with a USD value (e.g. `0.50USD`) combined with an ETH/USD price feed service.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/config`

---

### VRAM (Video RAM)

**Definition**: Dedicated memory on a GPU used to store graphics data, AI model weights, intermediate tensors, and video frames during processing.
**External**: [VRAM — Wikipedia](https://en.wikipedia.org/wiki/Video_random-access_memory)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/hardware`

---

### Warm Model

**Definition**: AI model already loaded into GPU memory and ready to serve inference requests immediately, without cold-start latency.
**Context**: During the current beta, orchestrators typically support one warm model per GPU. The warm status for each model is declared in `aiModels.json`. Requests to a warm model are served immediately; requests to a cold model trigger a model load that adds seconds to minutes of latency.
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `orchestrators/ai`, `orchestrators/performance`

---

### Webhook

**Definition**: HTTP callback mechanism triggered by an event, sending a POST request to a configured URL to notify external services of state changes.
**External**: [Webhook — Wikipedia](https://en.wikipedia.org/wiki/Webhook)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `orchestrators/discovery`

---

### Webhook Discovery

**Definition**: Mechanism for orchestrators to dynamically advertise their AI capabilities to gateways via HTTP webhook callbacks rather than only relying on on-chain registration.
**Context**: Provides a flexible, off-chain channel for capability advertisement. Gateways can call a registered webhook endpoint to retrieve the orchestrator's current capability set, enabling real-time updates without on-chain transactions.
**Tags**: `livepeer:protocol`, `technical:dev`
**Status**: current
**Pages**: `orchestrators/discovery`, `orchestrators/config`

---

### Wei

**Definition**: The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in on-chain calculations and Livepeer pricing parameters.
**External**: [Wei — ethereum.org](https://ethereum.org/glossary/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `orchestrators/pricing`, `orchestrators/payments`

---

### Whisper

**Definition**: OpenAI's encoder-decoder transformer model for speech recognition and translation, pretrained on 680,000 hours of multilingual audio.
**External**: [Whisper — Hugging Face](https://huggingface.co/openai/whisper-large-v3)
**Tags**: `ai:model`
**Status**: current
**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

---

### Win Probability

**Definition**: The configured likelihood that any given micropayment ticket is a winning ticket; a lower probability means larger face values per winning ticket.
**Context**: Win probability is a parameter negotiated between gateway and orchestrator. Lower win probability reduces on-chain redemption frequency (and gas costs) at the expense of larger, less frequent payouts.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Winning Ticket

**Definition**: Probabilistic payment ticket whose random outcome meets the configured threshold, entitling the holder to redeem its face value in ETH on-chain.
**Context**: Most tickets sent by gateways are non-winning. The winning ticket mechanism amortises on-chain transaction costs across many off-chain payments while preserving the expected payout value.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `orchestrators/payments`, `orchestrators/protocol`

---

### Workload

**Definition**: Total amount of work assigned to an orchestrator — the aggregate of active sessions, concurrent segments, and AI inference requests being processed at a given time.
**Context**: Workload determines whether an orchestrator is at capacity. The `-maxSessions` flag caps the maximum concurrent workload. Monitoring workload against capacity helps operators tune pricing and hardware scaling decisions.
**Tags**: `operational:process`
**Status**: current
**Pages**: `orchestrators/performance`, `orchestrators/operations`

---

### Yield

**Definition**: Return earned from staking LPT and performing work, expressed as an annual percentage combining inflationary LPT rewards and ETH service fees.
**Context**: Orchestrator yield depends on active set position, reward cut, fee cut, total stake, and network workload volume. Delegator yield is derived from the orchestrator's yield minus the cuts retained by the orchestrator.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `orchestrators/staking`, `orchestrators/economics`

---
