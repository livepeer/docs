# Livepeer Unified Glossary — Terms A–M

> Part 1 of 2. See [glossary-n-z.md](glossary-n-z.md) for terms N–Z. See [glossary-index.md](glossary-index.md) for the category index, tab index, gap list, and external links.

---

### @livepeer/react

**Definition**: React SDK providing prebuilt UI primitives (Player, Broadcast) for video experiences in web apps.

**Tags**: `livepeer:sdk`

**Tabs**: community

**Pages**: `community/sdks`, `community/tools`

**Status**: current

---

### ABR (Adaptive Bitrate)

**Definition**: Streaming technique that detects viewer bandwidth in real time and switches between pre-encoded bitrate levels to maintain continuous playback.

**Tags**: `video:encoding`, `video:playback`

**Tabs**: solutions

**Pages**: `solutions/transcoding`, `solutions/playback`

**External**: [Adaptive bitrate streaming (Wikipedia)](https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming)

**Status**: current

---

### Access Control

**Definition**: Restricts who can view streams or assets via signed JWTs, API keys, or webhook authorization callbacks.

**Tags**: `video:studio`, `technical:security`

**Tabs**: solutions

**Pages**: `solutions/access-control`, `solutions/api`

**Context**: Livepeer Studio implements access control through playback policies attached to stream or asset objects; viewers must present a valid signed JWT or pass a webhook check before the player will resolve the playback URL.

**Status**: current

---

### Active Set

**Definition**: The top 100 orchestrators by total bonded stake that are eligible to receive work and inflationary rewards each round.

**Tags**: `livepeer:protocol`

**Tabs**: about, community, lpt, orchestrators, resources

**Pages**: `about/protocol`, `about/staking`, `community/staking`, `lpt/staking`, `lpt/protocol`, `orchestrators/staking`, `orchestrators/protocol`, `resources/glossary`, `resources/protocol`

**Context**: Active set membership is determined at round start by ranking orchestrators by total bonded LPT (self-stake plus delegated stake). AI inference routing does not require active set membership — it prioritises capability and price over stake position.

**Status**: current

---

### Active Set Election

**Definition**: The process at the start of each round that determines the top 100 orchestrators by bonded stake to form the active set eligible to receive work.

**Tags**: `livepeer:protocol`

**Tabs**: about, lpt

**Pages**: `about/protocol`, `about/staking`, `lpt/staking`, `lpt/protocol`

**Status**: current

---

### Advisory Boards

**Definition**: Strategic bodies aligning ecosystem stakeholders on roadmap and opportunities through structured strategy-setting.

**Tags**: `livepeer:entity`, `operational:governance`, `operational:community`

**Tabs**: community

**Pages**: `community/governance`

**Context**: Domain-specific groups that recommend strategic priorities for Livepeer SPE workstreams; created as part of Livepeer's governance evolution alongside Workstreams.

**Status**: current

---

### AES-CBC

**Definition**: AES (Advanced Encryption Standard) in Cipher Block Chaining mode — symmetric encryption where each plaintext block is XOR'd with the previous ciphertext block before encryption.

**Tags**: `technical:security`

**Tabs**: solutions

**Pages**: `solutions/access-control`

**External**: [Block cipher mode of operation (Wikipedia)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)

**Status**: current

---

### Agent

**Definition**: A system that perceives its environment and acts autonomously to achieve goals, often powered by large language models with tool access.

**Tags**: `ai:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/ai`

**External**: [Intelligent agent (Wikipedia)](https://en.wikipedia.org/wiki/Intelligent_agent)

**Status**: current

---

### Agents

**Definition**: Systems that perceive their environment and act autonomously to achieve goals, often powered by LLMs with tools.

**Tags**: `ai:concept`

**Tabs**: home

**Pages**: `home/agents`, `home/ai-video`

**External**: [Intelligent agent (Wikipedia)](https://en.wikipedia.org/wiki/Intelligent_agent)

**Status**: current

**Also known as**: Agent (see also: Agent entry)

---

### AI (Artificial Intelligence)

**Definition**: The simulation of human intelligence processes by machines — including learning, reasoning, and problem-solving — using statistical models trained on large datasets.

**Tags**: `ai:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/index`

**External**: [Artificial intelligence (Wikipedia)](https://en.wikipedia.org/wiki/Artificial_intelligence)

**Status**: current

**Also known as**: Artificial Intelligence

---

### AI Gateway API

**Definition**: REST API endpoint layer for routing AI inference requests through Livepeer's gateway nodes to GPU orchestrators on the network.

**Tags**: `livepeer:product`, `technical:dev`

**Tabs**: developers

**Pages**: `developers/ai-gateway`, `developers/api`

**Context**: The AI Gateway API is the primary integration surface for developers submitting AI pipeline requests — text-to-image, live-video-to-video, LLM chat, etc. — to the decentralised Livepeer network without managing infrastructure directly.

**Status**: draft

---

### AI Inference

**Definition**: Running a trained neural network model on new input data to produce predictions or generated outputs, as opposed to the training phase.

**Tags**: `ai:concept`

**Tabs**: lpt, orchestrators

**Pages**: `lpt/protocol`, `lpt/economics`, `orchestrators/ai`, `orchestrators/pipelines`

**External**: [Inference engine (Wikipedia)](https://en.wikipedia.org/wiki/Inference_engine)

**Status**: current

---

### AI Pipeline

**Definition**: End-to-end construct orchestrating data flow through processing steps to produce output.

**Tags**: `ai:pipeline`

**Tabs**: home

**Pages**: `home/ai-video`, `home/pipelines`

**External**: [Pipelines (Hugging Face)](https://huggingface.co/docs/transformers/en/main_classes/pipelines)

**Status**: current

---

### AI runner (ai-runner)

**Definition**: Software component executing AI model inference tasks on an orchestrator node. The `ai-runner` is the Livepeer process that loads AI models into GPU memory and serves inference requests dispatched by the orchestrator; it is configured via `aiModels.json`.

**Tags**: `livepeer:tool`

**Tabs**: community

**Pages**: `community/ai`, `community/tools`

**Context**: The `ai-runner` is the Livepeer process that loads AI models into GPU memory and serves inference requests dispatched by the orchestrator; it is configured via `aiModels.json`.

**Status**: current

---

### AI Runner

**Definition**: The container process that executes AI model inference jobs; go-livepeer communicates with it via HTTP and it loads models into GPU memory to process requests. Configured via `aiModels.json` and the `-aiWorker` / `-aiModels` CLI flags.

**Tags**: `livepeer:config`, `livepeer:deployment`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/setup`

**Status**: current

---

### AI subnet

**Definition**: Portion of the Livepeer network dedicated to AI inference work, where orchestrators advertise AI capabilities and gateways route AI jobs.

**Tags**: `livepeer:protocol`

**Tabs**: community

**Pages**: `community/ai`, `community/network`

**Context**: The AI subnet operates alongside the transcoding network; orchestrators register supported pipelines via `AIServiceRegistry` and receive AI inference jobs from AI-capable gateways.

**Status**: current

---

### AI Video

**Definition**: Broad category encompassing AI-powered video processing tasks such as generation, transformation, and inference on live or recorded streams.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/index`, `home/ai-video`

**Status**: current

---

### AI Video SPE

**Definition**: Special Purpose Entity funded by the community treasury to advance decentralized AI compute, scaling ComfyStream and BYOC pipelines.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/governance`, `community/treasury`

**Context**: One of several treasury-funded SPEs; focused on AI video pipeline development, including expanding the AI subnet and BYOC deployment patterns.

**Status**: current

---

### aiModels.json

**Definition**: JSON configuration file specifying available AI models including pipeline type, model ID, pricing, and warm status for an orchestrator node.

**Tags**: `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/config`

**Context**: The primary config file for AI orchestrators. Each entry defines which model to load, at what price, and whether it should be pre-warmed on startup.

**Status**: current

---

### AIServiceRegistry

**Definition**: Smart contract registering AI service capabilities for orchestrators on the Livepeer AI network.

**Tags**: `livepeer:contract`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/contracts`

**Context**: Orchestrators optionally advertise their AI pipelines and models on-chain via this contract, enabling capability-based routing by gateways.

**Status**: current

---

### aiWorker

**Definition**: CLI flag starting a go-livepeer node as a dedicated AI worker process that connects to an orchestrator and handles AI inference jobs.

**Tags**: `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/architecture`

**Context**: Enables the orchestrator to offload GPU inference work to a separate subprocess. Multiple aiWorker processes can be connected to a single orchestrator for multi-GPU setups.

**Status**: current

---

### Ambassador Programme

**Definition**: Community outreach initiative where participants represent Livepeer to new audiences.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/programs`, `community/index`

**Context**: Livepeer's Ambassador Programme designates community representatives who promote adoption, create educational content, and help onboard new participants into the ecosystem.

**Status**: current

---

### API Key

**Definition**: Secret unique identifier sent with API requests to authenticate the caller and authorize access to platform resources.

**Tags**: `technical:dev`

**Tabs**: solutions

**Pages**: `solutions/api`, `solutions/quickstart`

**External**: [API key (Wikipedia)](https://en.wikipedia.org/wiki/API_key)

**Status**: current

---

### Arbitrage

**Definition**: Exploiting price differences between markets; in the Livepeer context, selecting lower-cost orchestrators when multiple are available for the same capability.

**Tags**: `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/economics`

**External**: [Arbitrage (Wikipedia)](https://en.wikipedia.org/wiki/Arbitrage)

**Status**: current

---

### Arbitrum

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security; the chain where Livepeer protocol contracts are deployed.

**Tags**: `web3:chain`

**Tabs**: home, about, solutions (as Livepeer Network note), developers, gateways, orchestrators, community, lpt, resources

**Pages**: `home/network`, `home/staking`, `about/protocol`, `about/network`, `developers/protocol`, `gateways/protocol`, `gateways/payments`, `orchestrators/protocol`, `orchestrators/staking`, `community/network`, `community/protocol`, `lpt/protocol`, `lpt/bridging`, `resources/glossary`

**External**: [Arbitrum documentation](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)

**Status**: current

**Also known as**: Arbitrum One

---

### Asset

**Definition**: Stored video file (VOD) managed by Livepeer Studio, identified by a unique ID with associated metadata and playback URLs.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/vod`, `solutions/api`

**Context**: An asset is the Studio object created when a video file is uploaded; it stores transcoded renditions, a playback ID, and optional access-control settings, and is distinct from the live Stream object.

**Status**: current

---

### AT Protocol

**Definition**: Authenticated Transfer Protocol — open decentralized social networking standard developed by Bluesky, enabling federated identity and data portability.

**Tags**: `technical:social`

**Tabs**: solutions

**Pages**: `solutions/integrations`

**External**: [AT Protocol (Wikipedia)](https://en.wikipedia.org/wiki/AT_Protocol)

**Status**: current

---

### Atomic Execution

**Definition**: A guarantee that a set of on-chain operations either all succeed or none execute, preventing partial state changes.

**Tags**: `web3:governance`

**Tabs**: lpt

**Pages**: `lpt/governance`, `lpt/contracts`

**External**: [Atomic commit (Wikipedia)](https://en.wikipedia.org/wiki/Atomic_commit)

**Status**: current

---

### Audio-to-Text

**Definition**: AI pipeline converting spoken language audio into written text using deep neural networks.

**Tags**: `ai:pipeline`

**Tabs**: orchestrators

**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Speech recognition (Wikipedia)](https://en.wikipedia.org/wiki/Speech_recognition)

**Status**: current

---

### autonomous agent

**Definition**: AI system independently pursuing complex goals by perceiving, deciding, using tools, and acting without supervision.

**Tags**: `ai:application`

**Tabs**: community

**Pages**: `community/ai`, `community/projects`

**External**: [Autonomous agent (Wikipedia)](https://en.wikipedia.org/wiki/Autonomous_agent)

**Status**: current

---

### Avatar

**Definition**: Graphical representation of a user or AI entity, from 2D images to fully animated 3D digital characters driven by AI models.

**Tags**: `ai:application`

**Tabs**: home, solutions

**Pages**: `home/ai-video`, `home/use-cases`, `solutions/ai`, `solutions/use-cases`

**External**: [Avatar — computing (Wikipedia)](https://en.wikipedia.org/wiki/Avatar_(computing))

**Status**: current

---

### awesome-livepeer

**Definition**: Community-curated list of projects, tutorials, demos, and resources in the Livepeer ecosystem.

**Tags**: `livepeer:tool`

**Tabs**: community

**Pages**: `community/resources`, `community/tools`

**Context**: A GitHub repository maintained by the community aggregating third-party tools, monitoring dashboards, SDKs, orchestrator utilities, and educational content related to Livepeer.

**Status**: current

---

### B-frames

**Definition**: Bidirectional predicted video frames that reference both preceding and following frames to achieve the highest compression ratio in a coded video stream.

**Tags**: `video:encoding`

**Tabs**: solutions

**Pages**: `solutions/encoding`, `solutions/livestreaming`

**External**: [Video compression picture types (Wikipedia)](https://en.wikipedia.org/wiki/Video_compression_picture_types)

**Status**: current

---

### Batch AI / Batch AI Inference

**Definition**: Running a trained model on a group of inputs asynchronously, optimising GPU utilisation through parallelisation.

**Tags**: `ai:pipeline`, `ai:concept`

**Tabs**: developers, orchestrators

**Pages**: `developers/ai-gateway`, `developers/pipelines`, `orchestrators/ai`, `orchestrators/pipelines`

**External**: [What is batch inference? (Google Cloud)](https://cloud.google.com/discover/what-is-batch-inference)

**Status**: current

---

### Bearer Token

**Definition**: Access token carried in an HTTP Authorization header, used by API clients to authenticate requests without re-sending credentials.

**Tags**: `technical:dev`

**Tabs**: solutions

**Pages**: `solutions/api`

**External**: [Authorization header (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization)

**Status**: current

---

### Bitrate

**Definition**: Number of bits conveyed per second of video; determines the data throughput rate of an encoded stream, directly affecting quality and file size.

**Tags**: `video:encoding`

**Tabs**: solutions, resources

**Pages**: `solutions/encoding`, `solutions/transcoding`, `resources/glossary`, `resources/encoding`

**External**: [Bit rate (Wikipedia)](https://en.wikipedia.org/wiki/Bit_rate)

**Status**: current

---

### BLIP

**Definition**: Vision-language model by Salesforce using bootstrapped captioning and filtering for image understanding tasks including captioning and visual QA.

**Tags**: `ai:model`

**Tabs**: orchestrators

**Pages**: `orchestrators/pipelines`, `orchestrators/ai`

**External**: [BLIP (Hugging Face)](https://huggingface.co/docs/transformers/model_doc/blip)

**Status**: current

---

### Blockchain

**Definition**: A distributed ledger of records (blocks) securely linked via cryptographic hashes, managed by peer-to-peer consensus.

**Tags**: `web3:concept`

**Tabs**: home

**Pages**: `home/network`, `home/index`

**External**: [Blockchain (Wikipedia)](https://en.wikipedia.org/wiki/Blockchain)

**Status**: current

---

### Block Timestamps

**Definition**: Unix timestamps embedded in each Ethereum or Arbitrum block header, used by smart contracts for time-dependent functions such as round boundaries.

**Tags**: `web3:identity`

**Tabs**: resources

**Pages**: `resources/glossary`

**External**: [Ethereum glossary (ethereum.org)](https://ethereum.org/glossary/)

**Status**: draft

---

### Bonding

**Definition**: Locking (staking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system to participate in network security and earn rewards.

**Tags**: `web3:tokenomics`

**Tabs**: about, community, orchestrators, lpt

**Pages**: `about/staking`, `about/delegators`, `community/staking`, `orchestrators/staking`, `orchestrators/protocol`, `lpt/staking`, `lpt/delegation`

**External**: [Livepeer bonding overview](https://forum.livepeer.org/t/an-overview-of-bonding/97)

**Status**: current

---

### Bonded Stake

**Definition**: The total amount of LPT currently locked across the network through active bonding relationships between delegators and orchestrators.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/protocol`

**Context**: Bonded stake is the aggregate input to Livepeer's economic weight calculations; a higher bonded stake means a higher bonding rate and lower inflation.

**Status**: current

---

### Bonding Rate (beta)

**Definition**: The ratio of total bonded LPT to total token supply; Livepeer targets a 50% participation rate.

**Tags**: `economic:reward`, `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/inflation`

**Context**: The current bonding rate (beta) is the live metric compared against the Target Bonding Rate to determine whether inflation should increase or decrease each round.

**Status**: current

---

### BondingManager

**Definition**: The core Livepeer smart contract managing all bonding, delegation, staking logic, fund ownership, and reward distribution on Arbitrum.

**Tags**: `livepeer:contract`

**Tabs**: orchestrators, lpt, resources

**Pages**: `orchestrators/contracts`, `orchestrators/staking`, `lpt/contracts`, `lpt/staking`, `resources/glossary`, `resources/contracts`

**Context**: The central contract for all LPT stake operations — bonding, unbonding, delegation, reward distribution, and slash execution.

**Status**: current

---

### BondingVotes

**Definition**: The Livepeer smart contract that tracks historical stake snapshots for governance, enabling stake-weighted voting power to be calculated at any past checkpoint.

**Tags**: `livepeer:contract`, `web3:governance`

**Tabs**: lpt, resources

**Pages**: `lpt/contracts`, `lpt/governance`, `resources/glossary`, `resources/contracts`

**Context**: BondingVotes implements the ERC-5805 checkpoint standard and feeds bonded stake data into LivepeerGovernor for on-chain proposal votes.

**Status**: current

---

### Bounty

**Definition**: Reward for completing a specific task, funded by community treasury or foundation.

**Tags**: `economic:treasury`

**Tabs**: community

**Pages**: `community/treasury`, `community/programs`

**Context**: Bounties are posted by the Livepeer Foundation or SPEs for well-defined deliverables such as tooling, documentation, or bug fixes; funded from the on-chain treasury.

**Status**: current

---

### Bridge

**Definition**: Infrastructure connecting two blockchain ecosystems that enables token and information transfer between them.

**Tags**: `web3:concept`

**Tabs**: lpt

**Pages**: `lpt/bridging`, `lpt/arbitrum`

**External**: [Bridges (ethereum.org)](https://ethereum.org/developers/docs/bridges/)

**Status**: current

---

### Bridging

**Definition**: The mechanism connecting two blockchain ecosystems to enable token or information transfer between them; specifically, the process of moving LPT tokens between Ethereum L1 and Arbitrum L2 using the canonical bridge contracts.

**Tags**: `web3:concept`

**Tabs**: lpt, resources

**Pages**: `lpt/bridging`, `lpt/arbitrum`, `resources/glossary`, `resources/arbitrum`

**External**: [Blockchain bridge (Ethereum docs)](https://ethereum.org/developers/docs/bridges/)

**Status**: current

**Also known as**: Bridge

---

### Broadcaster (deprecated)

**Definition**: Legacy term for the node that published streams and submitted video jobs for transcoding; now replaced by "Gateway."

**Tags**: `livepeer:role`

**Tabs**: about, solutions, gateways, resources

**Pages**: `about/protocol`, `about/architecture`, `solutions/livestreaming`, `gateways/architecture`, `gateways/protocol`, `resources/glossary`, `resources/protocol`

**Context**: The term "Broadcaster" was used in early Livepeer documentation and the original whitepaper; current documentation uses "Gateway" for this role. The `-broadcaster=true` CLI flag has been replaced by `-gateway`.

**Status**: current

**Also known as**: Gateway (current term)

---

### BroadcastSessionsManager

**Definition**: An internal go-livepeer component that manages active transcoding sessions between a gateway and its selected orchestrators.

**Tags**: `livepeer:protocol`

**Tabs**: gateways

**Pages**: `gateways/code`, `gateways/architecture`

**Context**: The BroadcastSessionsManager tracks session state, handles failover logic, and maintains per-orchestrator session pools within a running gateway node.

**Status**: current

---

### BYOC (Bring Your Own Compute / Bring Your Own Container)

**Definition**: Deployment pattern where users supply custom Docker containers for AI workloads on the Livepeer network, enabling arbitrary Python-based models to run as pipelines.

**Tags**: `livepeer:deployment`, `ai:concept`

**Tabs**: home, developers, gateways, orchestrators, community, resources

**Pages**: `home/network`, `home/compute`, `developers/compute`, `developers/pipelines`, `gateways/compute`, `gateways/pipelines`, `orchestrators/compute`, `orchestrators/ai`, `community/network`, `community/ai`, `resources/glossary`, `resources/network`

**Context**: Used in Livepeer to let GPU providers and teams run containerized Python workloads for streaming AI pipelines, enabling flexible compute contributions without requiring standard pipeline implementations. BYOC containers must conform to the Livepeer AI worker API specification.

**Status**: current

**Also known as**: Bring Your Own Container, Bring Your Own Compute

---

### C2PA

**Definition**: Coalition for Content Provenance and Authenticity — open standard producing tamper-evident manifests that record the origin and edit history of media files.

**Tags**: `technical:security`

**Tabs**: solutions

**Pages**: `solutions/provenance`, `solutions/ai`

**External**: [C2PA specification](https://c2pa.org/)

**Status**: current

---

### Capability

**Definition**: An AI service or job type — defined as a pipeline and model pair — that an orchestrator advertises as available to gateways for routing.

**Tags**: `livepeer:protocol`

**Tabs**: gateways, resources

**Pages**: `gateways/discovery`, `gateways/protocol`, `resources/glossary`, `resources/protocol`

**Context**: Gateways use capability advertisements to discover which orchestrators support a given AI pipeline and model, enabling targeted routing without manual orchestrator configuration.

**Status**: current

---

### Capability Advertisement

**Definition**: Mechanism by which orchestrators inform gateways of the AI services, pipelines, and models they can process.

**Tags**: `livepeer:protocol`

**Tabs**: orchestrators

**Pages**: `orchestrators/discovery`, `orchestrators/ai`

**Context**: Orchestrators broadcast their capabilities either on-chain via the AIServiceRegistry or off-chain via webhook discovery. Gateways use this data to route inference jobs to capable nodes.

**Status**: current

---

### Capability Matching

**Definition**: Process by which a gateway routes an AI task to an appropriate orchestrator based on advertised capabilities.

**Tags**: `livepeer:protocol`

**Tabs**: orchestrators

**Pages**: `orchestrators/discovery`, `orchestrators/routing`

**Context**: The gateway compares the requested pipeline and model against each orchestrator's advertised capabilities and selects the best match based on price, performance score, and availability.

**Status**: current

---

### Capital-backed Sybil Resistance

**Definition**: A security mechanism where staking capital is required to participate, making Sybil attacks economically costly because each fake identity must fund real stake.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/security`, `lpt/protocol`

**External**: [Proof of stake (ethereum.org)](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)

**Status**: current

---

### Capital Efficiency

**Definition**: The degree to which staked capital generates productive returns through protocol inflation rewards, ETH fees, or work allocation.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/staking`

**External**: [Cryptoeconomics (Wikipedia)](https://en.wikipedia.org/wiki/Cryptoeconomics)

**Status**: current

---

### Cascade

**Definition**: Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines, and the associated protocol upgrade enabling the AI inference subnet alongside transcoding.

**Tags**: `livepeer:upgrade`

**Tabs**: home, about, developers, gateways, orchestrators

**Pages**: `home/network`, `home/upgrades`, `about/upgrades`, `about/protocol`, `developers/protocol`, `gateways/protocol`, `orchestrators/protocol`, `orchestrators/upgrades`

**Context**: Cascade is Livepeer's named strategic phase introducing AI inference as a first-class use case alongside transcoding, activating the AI subnet and GPU orchestrator market.

**Status**: current

---

### CBR (Constant Bitrate)

**Definition**: Video encoding mode where the output data rate remains constant regardless of content complexity, trading compression efficiency for predictable file sizes.

**Tags**: `video:encoding`

**Tabs**: solutions

**Pages**: `solutions/encoding`, `solutions/transcoding`

**External**: [Constant bitrate (Wikipedia)](https://en.wikipedia.org/wiki/Constant_bitrate)

**Status**: current

---

### CDN (Content Delivery Network)

**Definition**: A geographically distributed network of servers caching and delivering content with high availability and low latency to end users.

**Tags**: `technical:infra`

**Tabs**: resources

**Pages**: `resources/glossary`

**External**: [Content delivery network (Wikipedia)](https://en.wikipedia.org/wiki/Content_delivery_network)

**Status**: current

**Also known as**: Content Delivery Network

---

### Checkpoint

**Definition**: An on-chain snapshot of stake state recorded by the BondingVotes contract, used as the reference point for governance voting power calculations.

**Tags**: `livepeer:protocol`

**Tabs**: lpt

**Pages**: `lpt/protocol`, `lpt/contracts`

**Context**: Checkpoints are written each round so that governance votes can reference stake at the block when a proposal was created, preventing manipulation by bonding immediately before a vote.

**Status**: current

---

### Claim Earnings

**Definition**: The on-chain action a delegator or orchestrator takes to collect accumulated inflationary LPT rewards and ETH fees that have been assigned to their stake.

**Tags**: `livepeer:protocol`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/delegation`

**Context**: Earnings accumulate through pending reward pools and must be explicitly claimed; claiming through the BondingManager updates the delegator's bonded balance.

**Status**: current

---

### Clearinghouse

**Definition**: A contract or system handling settlement of payments between gateways and orchestrators, including multi-user support, API key authentication, usage accounting, and fiat/stablecoin billing.

**Tags**: `economic:payment`, `livepeer:contract`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/payments`, `gateways/protocol`, `orchestrators/payments`, `orchestrators/protocol`

**Context**: In gateway deployments, a clearinghouse is an abstraction over a remote signer that adds commercial services, enabling gateway operators to offer multi-tenant billing without each user needing their own ETH wallet.

**Status**: current

---

### CLI (Command-Line Interface)

**Definition**: A text-based interface for interacting with software by typing commands, used to configure and operate Livepeer gateway and orchestrator nodes.

**Tags**: `technical:dev`

**Tabs**: orchestrators, resources

**Pages**: `orchestrators/setup`, `orchestrators/config`, `resources/glossary`, `resources/tools`

**External**: [Command-line interface (Wikipedia)](https://en.wikipedia.org/wiki/Command_line_interface)

**Status**: current

**Also known as**: Command-Line Interface

---

### Clip

**Definition**: Short excerpt from a livestream or VOD asset defined by start and end timestamps, used for highlights or shareable segments.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/clips`

**Context**: Livepeer Studio exposes a Clip API that accepts a stream or session ID and timestamp range; the resulting clip is stored as a new asset with its own playback ID.

**Status**: current

---

### Codec (CODEC)

**Definition**: Software or hardware that compresses and decompresses digital video, typically using lossy compression algorithms.

**Tags**: `video:encoding`

**Tabs**: about, gateways, resources

**Pages**: `about/transcoding`, `about/video`, `gateways/transcoding`, `gateways/encoding`, `resources/glossary`, `resources/encoding`

**External**: [Video codec (Wikipedia)](https://en.wikipedia.org/wiki/Video_codec)

**Status**: current

---

### Cold Start

**Definition**: The latency incurred when an AI model must be loaded from storage into GPU memory before the first inference request, typically ranging from 5 to 90 seconds.

**Tags**: `ai:concept`, `livepeer:config`

**Tabs**: developers, gateways, orchestrators, resources

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `gateways/pipelines`, `gateways/routing`, `orchestrators/ai`, `orchestrators/performance`, `resources/glossary`, `resources/ai`

**External**: [Cold start latency in private AI inference (OpenMetal)](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)

**Status**: current

**Also known as**: Cold model

---

### ComfyStream

**Definition**: ComfyUI custom node running real-time media workflows for AI-powered video and audio on live streams; a Livepeer project integrating ComfyUI with the network's live streaming infrastructure.

**Tags**: `livepeer:product`, `ai:framework`

**Tabs**: home, about, developers, orchestrators, community, resources

**Pages**: `home/ai-video`, `home/pipelines`, `about/ai`, `developers/pipelines`, `developers/ai-video`, `orchestrators/ai`, `community/ai`, `community/projects`, `resources/glossary`

**Context**: ComfyStream enables orchestrators to expose ComfyUI-based diffusion pipelines as live-video-to-video capabilities on the Livepeer network, allowing real-time AI video transformations to run on network orchestrators.

**Status**: current

---

### ComfyUI

**Definition**: Open-source node-based graphical interface for building and executing AI image and video generation workflows.

**Tags**: `ai:framework`

**Tabs**: home, developers, orchestrators

**Pages**: `home/ai-video`, `home/pipelines`, `developers/pipelines`, `developers/ai-video`, `orchestrators/ai`, `orchestrators/pipelines`

**External**: [ComfyUI (GitHub)](https://github.com/Comfy-Org/ComfyUI)

**Status**: current

---

### Commission Rate

**Definition**: The combined percentage of inflationary rewards and ETH fees that an orchestrator retains before distributing the remainder to delegators; expressed as two separate parameters — reward cut and fee cut.

**Tags**: `economic:reward`

**Tabs**: community, lpt

**Pages**: `community/staking`, `community/economics`, `lpt/staking`, `lpt/economics`

**Context**: Commission Rate in Livepeer encompasses both the reward cut (on inflationary LPT) and fee cut (on ETH fees); orchestrators compete in the marketplace partly on the basis of their commission rates.

**Status**: current

---

### Community Arbitrum Node

**Definition**: Free, load-balanced, geo-distributed RPC service for Arbitrum L2 and Ethereum L1, maintained by the LiveInfra SPE.

**Tags**: `livepeer:tool`

**Tabs**: community

**Pages**: `community/tools`, `community/network`

**Context**: A shared Arbitrum RPC endpoint funded by the community treasury through LiveInfra, giving ecosystem participants free access to on-chain data without running their own node.

**Status**: current

---

### Community Treasury

**Definition**: The on-chain fund governed by LPT stakeholders via LivepeerGovernor, funded by a governable percentage of per-round inflation, used for ecosystem development.

**Tags**: `economic:treasury`

**Tabs**: lpt

**Pages**: `lpt/treasury`, `lpt/governance`

**Context**: The Community Treasury receives a configurable Treasury Reward Cut Rate of inflation each round and is spent via governance-approved proposals for ecosystem development.

**Status**: current

**Also known as**: On-chain Treasury

---

### Compute Marketplace

**Definition**: Decentralized market matching GPU supply from orchestrators with demand from applications and gateways.

**Tags**: `livepeer:product`

**Tabs**: home

**Pages**: `home/network`, `home/compute`

**Context**: Livepeer's mechanism for coordinating supply (GPU operators) and demand (developers and applications) for compute resources, governed by crypto-economic incentives rather than a centralized provider.

**Status**: current

---

### Concentration Risk

**Definition**: The risk arising when a disproportionate share of total bonded stake is held by a small number of orchestrators, reducing network decentralization and resilience.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/staking`, `lpt/security`

**External**: [Proof of stake (Wikipedia)](https://en.wikipedia.org/wiki/Proof_of_stake)

**Status**: current

---

### Configuration Parameters

**Definition**: CLI flags and environment variables that control node behavior including payment settings, pricing, preferred orchestrators, and network mode.

**Tags**: `livepeer:config`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/tools`

**Context**: Livepeer node configuration is managed entirely through command-line flags passed to go-livepeer at startup, covering everything from pricePerUnit and MaxPrice to orchSecret and operational mode settings.

**Status**: draft

---

### Confluence

**Definition**: The production protocol upgrade (LIP-73) that migrated Livepeer's core protocol contracts from Ethereum L1 to Arbitrum One, significantly reducing gas costs.

**Tags**: `livepeer:upgrade`

**Tabs**: about

**Pages**: `about/upgrades`, `about/protocol`

**Context**: Confluence was a major protocol milestone enabling cheaper, faster on-chain operations by moving the staking and payment contracts to Arbitrum.

**Status**: current

---

### Confluent Upgrade

**Definition**: Alternate name for the Confluence upgrade deploying Livepeer's core protocol contracts to Arbitrum Mainnet (LIP-73).

**Tags**: `livepeer:upgrade`

**Tabs**: home

**Pages**: `home/upgrades`

**Context**: The Confluent upgrade (also called Confluence) was a production migration moving Livepeer's staking and payment contracts from Ethereum L1 to Arbitrum One.

**Status**: current

**Also known as**: Confluence

---

### Conventional Commits

**Definition**: Specification for structured commit messages enabling automated changelogs.

**Tags**: `operational:process`

**Tabs**: community

**Pages**: `community/development`, `community/contributing`

**External**: [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

**Status**: current

---

### Controller

**Definition**: The registry smart contract that manages all protocol contract addresses and coordinates protocol upgrades on Arbitrum.

**Tags**: `livepeer:contract`

**Tabs**: about, resources

**Pages**: `about/protocol`, `about/contracts`, `resources/glossary`, `resources/contracts`

**Context**: The Controller is the central registry through which all other Livepeer smart contracts are discovered and updated during protocol upgrades; it is the single source of truth for which contract address corresponds to each protocol role.

**Status**: current

---

### ControlNet

**Definition**: A neural network architecture that adds spatial conditioning controls — such as edge maps, depth, or pose — to pretrained diffusion models.

**Tags**: `ai:model`

**Tabs**: orchestrators, resources

**Pages**: `orchestrators/pipelines`, `orchestrators/ai`, `resources/glossary`, `resources/ai`

**External**: [ControlNet (Hugging Face)](https://huggingface.co/lllyasviel/ControlNet)

**Status**: current

---

### CORS (Cross-Origin Resource Sharing)

**Definition**: HTTP mechanism that lets servers specify which origins outside their own domain are allowed to make browser requests to their resources.

**Tags**: `technical:dev`

**Tabs**: solutions

**Pages**: `solutions/api`, `solutions/player`

**External**: [CORS (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

**Status**: current

---

### CRF (Constant Rate Factor)

**Definition**: Encoding quality control parameter that targets consistent perceptual quality by adjusting quantization per frame; scale runs 0–51 with lower values producing higher quality.

**Tags**: `video:encoding`

**Tabs**: solutions

**Pages**: `solutions/encoding`, `solutions/transcoding`

**External**: [CRF guide (slhck.info)](https://slhck.info/video/2017/02/24/crf-guide.html)

**Status**: current

---

### Cryptoeconomic Primitives

**Definition**: Fundamental building blocks that combine cryptography and economic incentives to enable secure, decentralized protocols.

**Tags**: `web3:concept`

**Tabs**: about

**Pages**: `about/protocol`, `about/economics`

**External**: [Cryptoeconomics (Wikipedia)](https://en.wikipedia.org/wiki/Cryptoeconomics)

**Status**: current

---

### CUDA (Compute Unified Device Architecture)

**Definition**: NVIDIA's parallel computing platform and programming API enabling GPUs to be used for general-purpose processing and deep learning.

**Tags**: `ai:framework`, `technical:infra`

**Tabs**: orchestrators

**Pages**: `orchestrators/setup`, `orchestrators/ai`

**External**: [CUDA (Wikipedia)](https://en.wikipedia.org/wiki/CUDA)

**Status**: current

---

### CPU (Central Processing Unit)

**Definition**: The primary general-purpose processor in a computer; in Livepeer, CPU handles node software overhead while GPU handles intensive transcoding and AI inference workloads.

**Tags**: `technical:hardware`

**Tabs**: gateways, orchestrators, developers, about

**External**: [Central processing unit (Wikipedia)](https://en.wikipedia.org/wiki/Central_processing_unit)

**Status**: current

---

### DAO (Decentralized Autonomous Organization)

**Definition**: An organization governed by smart contracts, with rules encoded in code rather than legal structures, and members vote on proposals via a decentralized ledger.

**Tags**: `web3:concept`

**Tabs**: community, resources

**Pages**: `community/governance`, `resources/glossary`, `resources/governance`

**External**: [Decentralized autonomous organization (Wikipedia)](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)

**Status**: current

**Also known as**: Decentralized Autonomous Organization

---

### DASH (Dynamic Adaptive Streaming over HTTP)

**Definition**: An adaptive bitrate streaming protocol that breaks content into small HTTP-served segments at multiple bitrate levels, allowing clients to switch quality dynamically.

**Tags**: `video:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/streaming`

**External**: [DASH (Wikipedia)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)

**Status**: current

**Also known as**: Dynamic Adaptive Streaming over HTTP

---

### Dashboard

**Definition**: Web-based management interface in Livepeer Studio for creating and managing streams, assets, API keys, and viewing analytics.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/dashboard`, `solutions/index`

**Context**: The Livepeer Studio Dashboard is the primary no-code interface; developers use it to generate stream keys, copy playback IDs, configure multistream targets, and inspect viewership data without writing API calls.

**Status**: current

---

### Daydream

**Definition**: Livepeer's hosted realtime AI video platform turning live camera input into AI-transformed visuals with sub-second latency.

**Tags**: `livepeer:product`

**Tabs**: home, about, solutions, developers, orchestrators, community

**Pages**: `home/ai-video`, `home/use-cases`, `about/ai`, `solutions/ai`, `developers/ai-video`, `developers/use-cases`, `orchestrators/ai`, `orchestrators/use-cases`, `community/ai`, `community/projects`

**Context**: A Livepeer product and reference implementation demonstrating real-time interactive AI video generation on the network; showcases the full stack from ingest through AI pipeline to playback.

**Status**: current

---

### DeAI (Decentralized AI)

**Definition**: Distributed AI computation on blockchain networks enabling permissionless, trustless inference without centralized providers.

**Tags**: `ai:application`, `web3:concept`

**Tabs**: home

**Pages**: `home/ai-video`, `home/index`

**External**: [Distributed artificial intelligence (Wikipedia)](https://en.wikipedia.org/wiki/Distributed_artificial_intelligence)

**Status**: current

---

### Decentralization

**Definition**: Transfer of control from a centralized entity to a distributed network, reducing single points of failure.

**Tags**: `web3:concept`

**Tabs**: home

**Pages**: `home/network`, `home/index`

**External**: [Decentralization (Wikipedia)](https://en.wikipedia.org/wiki/Decentralization)

**Status**: current

---

### Decentralized GPU Network

**Definition**: A marketplace of GPU resources contributed by orchestrators worldwide, coordinated through crypto-economic incentives for video transcoding and AI inference.

**Tags**: `livepeer:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/network`

**Context**: Livepeer's decentralized GPU network is the supply side of the protocol — orchestrators worldwide offer compute capacity that gateways route jobs to based on price, performance, and capability.

**Status**: current

---

### Delegation

**Definition**: The act of LPT holders staking their tokens toward orchestrators they trust, sharing proportionally in rewards without running any infrastructure themselves.

**Tags**: `web3:tokenomics`

**Tabs**: about, developers, community, lpt, resources

**Pages**: `about/staking`, `about/protocol`, `developers/protocol`, `community/staking`, `community/governance`, `lpt/delegation`, `lpt/staking`, `resources/glossary`, `resources/staking`

**External**: [Livepeer delegation](https://www.livepeer.org/delegate)

**Status**: current

---

### Delegator

**Definition**: A token holder who stakes LPT to an orchestrator to secure the network, participate in governance, and earn a share of rewards without operating infrastructure themselves.

**Tags**: `livepeer:role`, `web3:tokenomics`

**Tabs**: home, about, developers, orchestrators, community, lpt, resources

**Pages**: `home/staking`, `home/network`, `about/staking`, `about/protocol`, `developers/protocol`, `orchestrators/staking`, `orchestrators/protocol`, `community/staking`, `community/governance`, `lpt/delegation`, `lpt/staking`, `resources/glossary`, `resources/staking`

**Context**: One of the three core protocol roles in Livepeer; delegators do not run infrastructure themselves but allocate stake to orchestrators they trust, receiving a share of inflationary rewards proportional to their contribution.

**Status**: current

---

### Delta Upgrade

**Definition**: Planned future Livepeer protocol phase focused on full decentralization with Truebit-based verification.

**Tags**: `livepeer:upgrade`

**Tabs**: home

**Pages**: `home/upgrades`

**Context**: A named milestone on the Livepeer roadmap introducing on-chain verification mechanisms; represents the end-state of trustless work verification for transcoding and AI jobs.

**Status**: current

---

### Demand Aggregation

**Definition**: Consolidating requests from multiple users or applications for efficient routing to the orchestrator network.

**Tags**: `operational:process`

**Tabs**: gateways

**Pages**: `gateways/architecture`, `gateways/economics`

**Context**: Gateways perform demand aggregation by receiving requests from many clients and batching or routing them to orchestrators, improving utilization and reducing per-request overhead for each end user.

**Status**: current

---

### DePIN (Decentralized Physical Infrastructure Networks)

**Definition**: A category of blockchain systems that incentivize communities to collectively build and operate physical or computational infrastructure using token rewards.

**Tags**: `web3:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/network`

**External**: [DePIN (Wikipedia)](https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network)

**Status**: current

**Also known as**: Decentralized Physical Infrastructure Networks

---

### Deposit

**Definition**: Funds (ETH) locked by a gateway into the TicketBroker smart contract to pay orchestrators via probabilistic micropayments.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`, `gateways/protocol`

**Context**: An on-chain gateway must maintain a deposit on Arbitrum. The deposit covers the expected value of outstanding payment tickets sent to orchestrators. If the deposit is depleted, the reserve acts as backstop.

**Status**: current

---

### Dev Call

**Definition**: Recurring meeting where core developers discuss protocol development, node releases, and roadmap.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/events`, `community/development`

**Context**: The Dev Call is a regular public community call where Livepeer engineers share protocol updates, discuss upcoming LIPs, and take questions from orchestrators and developers.

**Status**: current

---

### Developer

**Definition**: Anyone building applications using Livepeer, typically through hosted services such as Livepeer Studio, Daydream, or Streamplace, or via library SDKs.

**Tags**: `livepeer:role`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/index`

**Context**: In the Livepeer actor taxonomy, Developers are distinct from Gateway operators: they consume the network's capabilities through APIs and SDKs rather than submitting jobs directly to the protocol.

**Status**: current

---

### Developer Platform

**Definition**: The abstraction layer providing tools, APIs, dashboards, and hosted services — including Livepeer Studio, Daydream, and Streamplace — for building applications on top of Livepeer.

**Tags**: `livepeer:product`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/tools`

**Context**: The Developer Platform shields application builders from low-level protocol mechanics while still routing jobs through the decentralized network.

**Status**: current

---

### Developer Stack

**Definition**: Set of SDKs, APIs, UI components, and hosted services for integrating video and AI capabilities into applications.

**Tags**: `livepeer:product`

**Tabs**: developers

**Pages**: `developers/index`, `developers/quickstart`

**Context**: The Developer Stack is Livepeer's collective offering for builders — encompassing Livepeer Studio, the AI Gateway API, Livepeer.js, and PyTrickle — enabling video and AI features without managing protocol infrastructure.

**Status**: current

---

### Diffusion Models

**Definition**: Generative models learning to produce data by reversing a gradual noising process applied during training.

**Tags**: `ai:concept`

**Tabs**: developers, orchestrators, resources

**Pages**: `developers/pipelines`, `developers/ai-video`, `orchestrators/pipelines`, `orchestrators/ai`, `resources/glossary`, `resources/ai`

**External**: [Diffusion model (Wikipedia)](https://en.wikipedia.org/wiki/Diffusion_model)

**Status**: current

**Also known as**: Diffusion

---

### Digital Twin

**Definition**: Virtual replica of a physical object or system continuously synchronized with real-world data.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Digital twin (Wikipedia)](https://en.wikipedia.org/wiki/Digital_twin)

**Status**: current

---

### Dilution

**Definition**: The reduction in proportional ownership experienced by non-staking token holders when new LPT is minted each round through inflation.

**Tags**: `economic:reward`, `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/inflation`, `lpt/economics`

**Context**: Delegators and orchestrators avoid dilution by bonding; unbonded LPT holders see their ownership percentage decrease as inflationary rewards are distributed only to active participants.

**Status**: current

---

### Dispersal

**Definition**: Distribution of encoded video segments across multiple orchestrator nodes for redundancy and parallel processing.

**Tags**: `video:processing`

**Tabs**: gateways

**Pages**: `gateways/routing`, `gateways/architecture`

**Context**: When a gateway disperses work, it splits a stream's segments across multiple orchestrators simultaneously, enabling parallel transcoding and reducing the impact of a single slow or failing node.

**Status**: current

---

### Dual Gateway / Dual Mode

**Definition**: A deployment where a single gateway node operates both video transcoding and AI inference workloads simultaneously.

**Tags**: `livepeer:deployment`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/architecture`, `gateways/modes`, `orchestrators/modes`, `orchestrators/config`

**Context**: A dual gateway routes RTMP transcoding requests and AI inference requests from the same node instance. The most common production configuration for operators with capable hardware (24 GB+ VRAM).

**Status**: current

**Also known as**: Dual mode

---

### Dune

**Definition**: Blockchain analytics platform for SQL queries on on-chain data.

**Tags**: `operational:monitoring`

**Tabs**: community

**Pages**: `community/tools`, `community/analytics`

**External**: [Dune Analytics](https://dune.com/home)

**Status**: current

---

### Dynamic Inflation

**Definition**: Livepeer's inflation model where the per-round LPT issuance rate adjusts up or down by 0.00005% each round based on whether staking participation is below or above the 50% target bonding rate.

**Tags**: `livepeer:protocol`, `economic:reward`

**Tabs**: about

**Pages**: `about/economics`, `about/protocol`

**Context**: Dynamic inflation is Livepeer's mechanism for incentivizing participation: when fewer than 50% of LPT is bonded, inflation rises to attract more stakers; when above 50%, it falls.

**Status**: current

---

### Economic Weight

**Definition**: An orchestrator's total active bonded stake, which determines their proportional share of inflationary rewards and their probability of being selected for job routing.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/protocol`

**Context**: Economic weight is central to Livepeer's security model — orchestrators with more delegated stake have higher economic weight and receive more work and rewards.

**Status**: current

---

### Embody

**Definition**: Special Purpose Entity bringing embodied avatar workloads (Live2D, Three.js, Unreal Engine) into Livepeer as intelligent public pipelines.

**Tags**: `livepeer:product`, `ai:application`

**Tabs**: solutions

**Pages**: `solutions/ai`, `solutions/use-cases`

**Context**: Embody is a Livepeer ecosystem SPE focused on avatar and NPC creation; it extends the network with pipelines that animate virtual characters driven by AI inference, enabling real-time interactive digital embodiment.

**Status**: current

---

### Embedding

**Definition**: Learned numerical vector representation in continuous space where similar items map to nearby points, enabling semantic search and cross-modal reasoning.

**Tags**: `ai:concept`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [Word embedding (Wikipedia)](https://en.wikipedia.org/wiki/Word_embedding)

**Status**: current

---

### Encrypted Asset

**Definition**: Media file protected by encryption at rest so that only authorized parties holding the correct decryption key can access its content.

**Tags**: `technical:security`, `video:studio`

**Tabs**: solutions

**Pages**: `solutions/access-control`, `solutions/vod`

**Context**: In Livepeer Studio, assets can be marked for encryption; the platform stores the file encrypted and gates decryption through the access-control system, requiring a valid playback policy before serving the key to a player.

**Status**: current

---

### Encoding Ladder

**Definition**: A structured set of video renditions at varying resolutions and bitrates for optimal cross-device adaptive bitrate viewing.

**Tags**: `video:encoding`

**Tabs**: gateways

**Pages**: `gateways/transcoding`, `gateways/profiles`

**External**: [Encoding ladder (Cloudinary)](https://cloudinary.com/glossary/encoding-ladder)

**Status**: current

---

### Endpoint

**Definition**: Specific URL path at which an API receives requests and returns responses for a defined operation.

**Tags**: `technical:dev`

**Tabs**: solutions, developers

**Pages**: `solutions/api`, `developers/api`

**External**: [Web API (Wikipedia)](https://en.wikipedia.org/wiki/Web_API)

**Status**: current

---

### Ephemeral Compute

**Definition**: Short-lived GPU resource allocation provisioned on-demand for a single AI inference task, released when the task completes.

**Tags**: `technical:infra`

**Tabs**: about

**Pages**: `about/ai`, `about/architecture`

**External**: [Edge computing (Wikipedia)](https://en.wikipedia.org/wiki/Edge_computing)

**Status**: draft

---

### ETH (Ether)

**Definition**: The native cryptocurrency of Ethereum, used to pay transaction fees (gas) and as the fee currency for Livepeer payment settlements and orchestrator service fee payments.

**Tags**: `web3:token`

**Tabs**: home, gateways, orchestrators, resources

**Pages**: `home/staking`, `home/network`, `gateways/payments`, `gateways/protocol`, `orchestrators/payments`, `orchestrators/staking`, `resources/glossary`, `resources/payments`

**External**: [What is Ether (Ethereum.org)](https://ethereum.org/what-is-ether/)

**Status**: current

**Also known as**: Ether

---

### ETH Fees

**Definition**: Payments in Ether made by gateways to orchestrators for completed transcoding or AI inference work, distributed to delegators after the fee cut.

**Tags**: `economic:payment`, `web3:token`

**Tabs**: about, lpt

**Pages**: `about/economics`, `about/payments`, `lpt/economics`, `lpt/payments`

**Context**: ETH fees are the demand-side revenue stream for orchestrators and their delegators, distinct from inflationary LPT rewards; they represent real market demand for network services.

**Status**: current

---

### Ethereum

**Definition**: A decentralized, open-source blockchain with smart contract functionality; native cryptocurrency is Ether (ETH).

**Tags**: `web3:chain`

**Tabs**: home, developers

**Pages**: `home/network`, `home/index`, `developers/protocol`

**External**: [Ethereum (Wikipedia)](https://en.wikipedia.org/wiki/Ethereum)

**Status**: current

---

### Ethereum Address

**Definition**: A 42-character hexadecimal string beginning with "0x," derived from the last 20 bytes of a public key hash, used to send and receive funds and interact with smart contracts.

**Tags**: `web3:identity`

**Tabs**: resources

**Pages**: `resources/glossary`

**External**: [Ethereum accounts (Ethereum docs)](https://ethereum.org/developers/docs/accounts/)

**Status**: draft

**Also known as**: Wallet Public Address

---

### Execution Layer

**Definition**: The layer where actual compute work is performed by orchestrators and workers, distinct from the on-chain protocol layer.

**Tags**: `livepeer:protocol`

**Tabs**: about

**Pages**: `about/protocol`, `about/network`

**Context**: In Livepeer's architecture, the execution layer is the off-chain network of orchestrator nodes doing transcoding and AI inference, coordinated by the on-chain protocol layer on Arbitrum.

**Status**: current

---

### Face Value

**Definition**: The payout amount assigned to a probabilistic micropayment ticket if it is drawn as a winner.

**Tags**: `economic:payment`

**Tabs**: orchestrators

**Pages**: `orchestrators/payments`, `orchestrators/protocol`

**Context**: The face value of tickets is set so that, over many tickets, the expected payout matches the fair cost of the work performed. Orchestrators accept lower-probability, higher-face-value tickets to reduce on-chain redemption frequency.

**Status**: current

---

### Failover

**Definition**: Automatic switching to a backup orchestrator or system when the primary fails or becomes unresponsive, maintaining service continuity.

**Tags**: `operational:monitoring`

**Tabs**: gateways, community

**Pages**: `gateways/routing`, `gateways/reliability`, `community/tools`

**External**: [Failover (Wikipedia)](https://en.wikipedia.org/wiki/Failover)

**Status**: current

---

### Fault Proof

**Definition**: A mechanism proving that an invalid state transition occurred on a Layer 2 chain, enabling challenges to incorrect rollup state roots.

**Tags**: `web3:chain`

**Tabs**: about

**Pages**: `about/protocol`, `about/network`

**External**: [Rollups (ethereum.org)](https://ethereum.org/developers/docs/scaling/)

**Status**: current

---

### Fediverse

**Definition**: Federation of social networking platforms that communicate via open protocols such as ActivityPub, enabling cross-platform interaction without centralized control.

**Tags**: `technical:social`

**Tabs**: solutions

**Pages**: `solutions/integrations`

**External**: [Fediverse (Wikipedia)](https://en.wikipedia.org/wiki/Fediverse)

**Status**: current

---

### Fee Cut

**Definition**: The percentage of ETH service fees (or inflationary LPT rewards) that an orchestrator retains before distributing the remainder to delegators.

**Tags**: `economic:reward`

**Tabs**: about, orchestrators, community, lpt, resources

**Pages**: `about/staking`, `about/economics`, `orchestrators/staking`, `orchestrators/economics`, `community/staking`, `lpt/staking`, `lpt/economics`, `resources/glossary`

**Context**: Fee cut is set independently from reward cut. A lower fee cut sends more ETH earnings to delegators, which can attract more delegation. Both cuts are configured on-chain and visible in the Livepeer Explorer.

**Status**: current

**Also known as**: Fee share (the portion passed to delegators is the complement)

---

### Fee Pool

**Definition**: Accumulated ETH fees awaiting distribution between an orchestrator and its delegators, originating from winning payment ticket redemptions.

**Tags**: `economic:reward`

**Tabs**: orchestrators, lpt, resources

**Pages**: `orchestrators/staking`, `orchestrators/protocol`, `lpt/staking`, `lpt/economics`, `resources/glossary`

**Context**: ETH earned from winning tickets flows into the fee pool each round. Orchestrators and delegators claim their respective shares according to the orchestrator's fee cut setting. The fee pool is distinct from the inflationary reward pool; it originates from gateway payments for real work performed.

**Status**: current

---

### Fee Share

**Definition**: The portion of ETH fees earned by an orchestrator that is distributed to delegators proportionally to their bonded stake.

**Tags**: `economic:reward`

**Tabs**: about, lpt

**Pages**: `about/staking`, `about/economics`, `lpt/staking`, `lpt/economics`

**Context**: Fee share = 100% minus fee cut; delegators with larger stake receive a proportionally larger share of the fee pool distributed each round.

**Status**: current

**Also known as**: Fee cut (the complementary orchestrator-retained portion)

---

### Fee Switch

**Definition**: A governance-controlled mechanism that enables or adjusts the redirection of protocol fees to the community treasury or other designated destinations.

**Tags**: `economic:treasury`

**Tabs**: lpt

**Pages**: `lpt/economics`, `lpt/governance`

**Context**: The fee switch is a proposed parameter change subject to on-chain governance; enabling it would direct a portion of ETH fees to the treasury rather than solely to orchestrators and delegators.

**Status**: current

---

### Finality

**Definition**: The condition where a blockchain transaction becomes irreversible and cannot be altered or rolled back.

**Tags**: `web3:concept`

**Tabs**: about

**Pages**: `about/protocol`, `about/network`

**External**: [Ethereum glossary — finality](https://ethereum.org/glossary/)

**Status**: current

---

### Foundation

**Definition**: Non-profit Cayman Islands Foundation Company stewarding long-term vision, ecosystem growth, and core development of the Livepeer protocol.

**Tags**: `livepeer:entity`

**Tabs**: home

**Pages**: `home/governance`, `home/index`

**Context**: The Livepeer Foundation was established to assume stewardship responsibilities from Livepeer Inc, overseeing ecosystem grants, governance coordination, and protocol direction on behalf of the community.

**Status**: current

---

### Frame Rate

**Definition**: Frequency at which consecutive frames are captured or displayed, measured in frames per second (fps); common rates are 24, 30, and 60 fps.

**Tags**: `video:encoding`

**Tabs**: home

**Pages**: `home/streaming`, `home/video`

**External**: [Frame rate (Wikipedia)](https://en.wikipedia.org/wiki/Frame_rate)

**Status**: current

---

### FrameProcessor

**Definition**: Pattern in PyTrickle for building real-time video processing applications with custom per-frame processing logic.

**Tags**: `livepeer:sdk`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-video`

**Context**: FrameProcessor is the Livepeer-defined interface in the PyTrickle SDK that developers implement to apply AI transforms to individual video frames within a live stream pipeline.

**Status**: current

---

### Frameworks

**Definition**: Product by the MistServer team bridging Livepeer's transcoding infrastructure and real-world applications; provides libraries and integration tools for embedding Livepeer services.

**Tags**: `livepeer:product`

**Tabs**: solutions

**Pages**: `solutions/sdks`, `solutions/api`

**Context**: Frameworks is a Livepeer ecosystem product (SPE pilot) that packages MistServer-based infrastructure components into developer-friendly libraries, lowering integration effort for new applications.

**Status**: current

---

### Gas

**Definition**: The unit measuring computational effort required to execute operations on Ethereum or Arbitrum; users pay gas fees in ETH to cover execution costs.

**Tags**: `web3:concept`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**External**: [Gas (Ethereum docs)](https://ethereum.org/developers/docs/gas/)

**Status**: current

---

### GB (Gigabyte)

**Definition**: A unit of digital storage equal to 1,073,741,824 bytes (binary); used in Livepeer hardware specifications for RAM, VRAM, and storage requirements.

**Tags**: `technical:hardware`

**Tabs**: gateways, orchestrators, developers

**External**: [Gigabyte (Wikipedia)](https://en.wikipedia.org/wiki/Gigabyte)

**Status**: current

---

### Gateway

**Definition**: A node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface between applications and the Livepeer Network. Gateways do not perform compute themselves; they replaced the older "Broadcaster" role.

**Tags**: `livepeer:role`

**Tabs**: home, about, solutions, developers, gateways, orchestrators, community, lpt, resources

**Pages**: `home/network`, `home/architecture`, `about/architecture`, `about/protocol`, `solutions/network`, `developers/ai-gateway`, `developers/architecture`, `gateways/index`, `gateways/architecture`, `orchestrators/architecture`, `orchestrators/routing`, `community/network`, `lpt/protocol`, `lpt/architecture`, `resources/glossary`, `resources/protocol`

**Context**: Gateways are the demand-side entry point to the network; they receive requests from developers or applications, select orchestrators, handle probabilistic micropayments, and return results. No GPU is required to run a gateway.

**Status**: current

---

### Gateway-as-a-Service

**Definition**: A hosted deployment model allowing users to access gateway functionality without managing their own infrastructure.

**Tags**: `livepeer:deployment`

**Tabs**: gateways

**Pages**: `gateways/modes`, `gateways/architecture`

**Context**: Gateway-as-a-service offerings (for example, Livepeer Studio, Livepeer Cloud, or Daydream) run gateway nodes on the operator's behalf. The user pays the service's rate and receives an API endpoint rather than running go-livepeer directly.

**Status**: current

---

### Gateway Middleware

**Definition**: A pluggable logic layer inserted into the gateway request pipeline for custom processing such as authentication, rate-limiting, or request transformation.

**Tags**: `livepeer:protocol`

**Tabs**: gateways

**Pages**: `gateways/architecture`, `gateways/code`

**Context**: Gateway middleware lets operators intercept and modify requests or responses at the gateway layer without forking go-livepeer. Middleware is typically configured in code for SDK-based deployments or via hooks in go-livepeer.

**Status**: current

---

### Gateway operator

**Definition**: Person or organisation running and maintaining gateway nodes for network access.

**Tags**: `livepeer:role`

**Tabs**: community

**Pages**: `community/network`

**Context**: Gateway operators in Livepeer run nodes that submit transcoding or AI inference jobs to the network, manage payment flows via probabilistic micropayments, and expose protocol services to end applications.

**Status**: current

---

### Generative Video

**Definition**: AI-produced video created by models that synthesize novel temporal frame sequences from text prompts or conditioning signals.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Text-to-video model (Wikipedia)](https://en.wikipedia.org/wiki/Text-to-video_model)

**Status**: current

---

### Genesis Supply

**Definition**: The initial 10 million LPT tokens created at protocol launch and distributed via the Merkle Mine mechanism.

**Tags**: `economic:reward`

**Tabs**: lpt

**Pages**: `lpt/tokenomics`, `lpt/history`

**Context**: The genesis supply was the starting point for LPT tokenomics; total supply has grown from 10M through inflation since the mainnet launch in 2018.

**Status**: current

---

### GeForce

**Definition**: NVIDIA's consumer-grade discrete GPU brand, encompassing the GTX and RTX product lines; the most common GPU family used by Livepeer orchestrator operators.

**Tags**: `technical:hardware`

**Tabs**: gateways, orchestrators

**External**: [NVIDIA GeForce](https://www.nvidia.com/en-us/geforce/)

**Status**: current

---

### go-livepeer

**Definition**: Official Go implementation of the Livepeer protocol containing the Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles in a single binary.

**Tags**: `livepeer:sdk`

**Tabs**: developers, orchestrators

**Pages**: `developers/protocol`, `developers/node`, `orchestrators/setup`, `orchestrators/code`

**Context**: The canonical node software for running any Livepeer network role. Orchestrators, gateways, and transcoders all run go-livepeer with different flag combinations.

**Status**: current

---

### Governance

**Definition**: System of rules and processes for protocol decision-making including on-chain voting via LPT stake weight and the LivepeerGovernor contract.

**Tags**: `operational:governance`

**Tabs**: home, community, lpt, resources

**Pages**: `home/governance`, `home/network`, `community/governance`, `lpt/governance`, `lpt/protocol`, `resources/glossary`, `resources/governance`

**External**: [Livepeer Governance (GitHub wiki)](https://github.com/livepeer/wiki/wiki/Governance)

**Status**: current

---

### Governance Forum

**Definition**: The Livepeer Forum's governance category for LIPs, pre-proposals, and protocol governance discussions before on-chain votes.

**Tags**: `operational:community`

**Tabs**: community, lpt

**Pages**: `community/governance`, `community/tools`, `lpt/governance`

**Context**: The primary off-chain coordination space for Livepeer governance; where community members post pre-proposals, discuss LIPs, and build consensus before on-chain votes.

**Status**: current

---

### Governor Contract

**Definition**: The on-chain governance smart contract (LivepeerGovernor) that authorizes protocol upgrades and parameter changes via stake-weighted voting.

**Tags**: `livepeer:contract`, `web3:governance`

**Tabs**: about, lpt, resources

**Pages**: `about/governance`, `about/contracts`, `lpt/contracts`, `lpt/governance`, `resources/glossary`, `resources/contracts`

**Context**: The Governor contract is Livepeer's on-chain decision-making mechanism, introduced in LIP-89, enabling token-weighted votes on treasury allocations and protocol changes.

**Status**: current

**Also known as**: LivepeerGovernor

---

### GovWorks

**Definition**: Meta-governance SPE ensuring transparent management of Livepeer governance and treasury allocation.

**Tags**: `livepeer:entity`, `operational:governance`

**Tabs**: community

**Pages**: `community/governance`, `community/treasury`

**Context**: GovWorks is the governance coordination workstream and SPE; it administers the proposal process, publishes governance summaries, and was initially chaired by StableLab.

**Status**: current

---

### Grafana

**Definition**: Open-source visualization and dashboarding platform for metrics and logs.

**Tags**: `operational:monitoring`

**Tabs**: community

**Pages**: `community/tools`, `community/monitoring`

**External**: [Grafana](https://grafana.com/)

**Status**: current

---

### Grant

**Definition**: Non-repayable allocation from the community treasury or Livepeer Foundation for ecosystem development contributions.

**Tags**: `economic:treasury`

**Tabs**: community

**Pages**: `community/treasury`, `community/programs`

**Context**: Grants are awarded through treasury proposals or Foundation programmes to fund tooling, research, education, or infrastructure that benefits the Livepeer ecosystem.

**Status**: current

---

### gRPC

**Definition**: High-performance remote procedure call framework using HTTP/2 and Protocol Buffers for efficient binary communication between services.

**Tags**: `technical:protocol`

**Tabs**: orchestrators

**Pages**: `orchestrators/architecture`, `orchestrators/code`

**External**: [gRPC (Wikipedia)](https://en.wikipedia.org/wiki/GRPC)

**Status**: current

---

### Group of Pictures (GOP)

**Definition**: An ordered arrangement of I-frames and inter-frames within a coded video stream; the set of frames between keyframes.

**Tags**: `video:encoding`

**Tabs**: gateways

**Pages**: `gateways/transcoding`, `gateways/encoding`

**External**: [Group of pictures (Wikipedia)](https://en.wikipedia.org/wiki/Group_of_pictures)

**Status**: current

**Also known as**: GOP

---

### GPU (Graphics Processing Unit)

**Definition**: Specialized processor for parallel computation used in rendering, video encoding, and AI inference workloads.

**Tags**: `technical:infra`

**Tabs**: home, community, orchestrators, resources

**Pages**: `home/network`, `home/compute`, `community/network`, `community/ai`, `orchestrators/ai`, `resources/glossary`, `resources/network`

**External**: [Graphics processing unit (Wikipedia)](https://en.wikipedia.org/wiki/Graphics_processing_unit)

**Status**: current

**Also known as**: Graphics Processing Unit

---

### GPU Operator

**Definition**: An orchestrator operator contributing GPU hardware and AI model capacity to the Livepeer network for transcoding or AI inference workloads.

**Tags**: `livepeer:role`

**Tabs**: home, developers

**Pages**: `home/compute`, `home/network`, `developers/compute`, `developers/node`

**Context**: GPU operators are a specific class of Livepeer network participants who run GPU hardware connected to the network, earning ETH fees by performing compute-intensive tasks such as video transcoding and AI model inference.

**Status**: current

---

### GPU Worker

**Definition**: A Livepeer node with GPU hardware that performs transcoding or AI inference tasks for an orchestrator.

**Tags**: `technical:infra`, `livepeer:deployment`

**Tabs**: gateways, orchestrators

**Pages**: `gateways/routing`, `gateways/architecture`, `orchestrators/ai`, `orchestrators/architecture`

**Context**: In gateway routing, the gateway selects orchestrators that have available GPU workers capable of handling the requested AI pipeline or transcoding profile. In orchestrator AI or dual-mode deployments, each GPU runs a dedicated AI runner subprocess.

**Status**: current

---

### GTX (NVIDIA GTX)

**Definition**: NVIDIA's previous-generation consumer GPU product line; capable of Livepeer video transcoding but lacks the Tensor cores of the RTX series needed for accelerated AI inference.

**Tags**: `technical:hardware`

**Tabs**: gateways, orchestrators

**Also known as**: GeForce GTX

**External**: [NVIDIA GeForce graphics cards](https://www.nvidia.com/en-us/geforce/graphics-cards/)

**Status**: current

---

### GWID (Gateway Wizard)

**Definition**: Gateway Wizard SPE building a managed DevOps tool for running and managing gateway infrastructure.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/governance`, `community/proposals`

**Context**: GWID is a Governance Workstream Identification number assigned to the Gateway Wizard SPE; the project delivers simplified gateway setup tooling and is tracked by its GWID identifier on the governance forum.

**Status**: current

---

### Hard Gate

**Definition**: Strict filter that immediately disqualifies orchestrators failing a required criterion such as exceeding the gateway's maximum price threshold.

**Tags**: `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/config`

**Context**: Unlike soft scoring factors, a hard gate is binary — the orchestrator is excluded from consideration entirely if the condition is not met. MaxPrice is the most common hard gate in practice.

**Status**: current

---

### HLS (HTTP Live Streaming)

**Definition**: Apple's HTTP Live Streaming protocol that encodes video into multiple quality levels segmented into small files, delivered with an index playlist (`.m3u8`) for adaptive bitrate playback over standard HTTP.

**Tags**: `video:protocol`

**Tabs**: about, solutions, developers, gateways, orchestrators, resources

**Pages**: `about/transcoding`, `about/streaming`, `solutions/playback`, `solutions/livestreaming`, `developers/streaming`, `developers/playback`, `gateways/transcoding`, `gateways/streaming`, `orchestrators/transcoding`, `orchestrators/streaming`, `resources/glossary`, `resources/streaming`

**External**: [HTTP Live Streaming (Wikipedia)](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)

**Status**: current

**Also known as**: HTTP Live Streaming

---

### HTTP Ingest

**Definition**: Receiving a live video stream via HTTP push (rather than RTMP) for transcoding or AI processing.

**Tags**: `video:processing`

**Tabs**: gateways

**Pages**: `gateways/ingest`, `gateways/streaming`

**External**: [HTTP (Wikipedia)](https://en.wikipedia.org/wiki/HTTP)

**Status**: current

---

### HuggingFace

**Definition**: An AI platform and open-source community providing model repositories, datasets, and inference APIs; a primary source for AI models deployed on Livepeer orchestrator nodes.

**Tags**: `ai:platform`

**Tabs**: gateways, orchestrators, developers, community

**Also known as**: Hugging Face, HF

**External**: [HuggingFace](https://huggingface.co/)

**Status**: current

---

### ICO (Initial Coin Offering)

**Definition**: A fundraising mechanism where a blockchain project sells newly created tokens to the public in exchange for established cryptocurrencies.

**Tags**: `web3:concept`, `economic:business`

**Tabs**: resources

**Pages**: `resources/glossary`

**External**: [Initial coin offering (Wikipedia)](https://en.wikipedia.org/wiki/Initial_coin_offering)

**Status**: draft

**Also known as**: Initial Coin Offering

---

### Image-to-Image

**Definition**: AI pipeline transforming an input image into a modified output image guided by a text prompt or conditioning signal.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Image translation (Wikipedia)](https://en.wikipedia.org/wiki/Image_translation)

**Status**: current

---

### Image-to-Text

**Definition**: AI pipeline generating a textual description from an input image, encompassing captioning and optical character recognition.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Image-to-Text task (Hugging Face)](https://huggingface.co/tasks/image-to-text)

**Status**: current

---

### Image-to-Video

**Definition**: AI pipeline generating a short video clip conditioned on a single input image, animating a still frame into motion.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Image-to-Video task (Hugging Face)](https://huggingface.co/tasks/image-to-video)

**Status**: current

---

### Inference

**Definition**: Running a trained model on new input data to produce predictions or generated outputs, as opposed to the training process.

**Tags**: `ai:concept`

**Tabs**: home, developers, gateways, resources

**Pages**: `home/ai-video`, `home/compute`, `developers/ai-gateway`, `developers/pipelines`, `gateways/pipelines`, `gateways/routing`, `resources/glossary`, `resources/ai`

**External**: [Inference engine (Wikipedia)](https://en.wikipedia.org/wiki/Inference_engine)

**Status**: current

---

### Inflation

**Definition**: The dynamic issuance of new LPT tokens each protocol round, distributed to active orchestrators and delegators proportional to their bonded stake; the rate adjusts each round based on whether bonding participation is above or below the 50% target.

**Tags**: `livepeer:protocol`, `economic:reward`, `web3:tokenomics`

**Tabs**: orchestrators, lpt, resources

**Pages**: `orchestrators/staking`, `orchestrators/economics`, `lpt/inflation`, `lpt/economics`, `resources/glossary`, `resources/economics`

**External**: [Cryptoeconomics (Wikipedia)](https://en.wikipedia.org/wiki/Cryptoeconomics)

**Status**: current

---

### Inflation Adjustment (alpha)

**Definition**: The fixed per-round rate (0.00005%) by which the inflation rate increases or decreases based on whether the current Bonding Rate is below or above the Target Bonding Rate.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/inflation`, `lpt/economics`

**Context**: The inflation adjustment parameter ensures the system self-corrects: when fewer than 50% of LPT is bonded, inflation rises to attract stakers; when more is bonded, inflation falls.

**Status**: current

**Also known as**: alpha

---

### Inflation Model

**Definition**: Livepeer's algorithmic mechanism that adjusts the per-round LPT issuance rate dynamically based on the gap between the current Bonding Rate and the 50% Target Bonding Rate.

**Tags**: `livepeer:protocol`, `economic:reward`

**Tabs**: about, lpt

**Pages**: `about/economics`, `about/protocol`, `lpt/inflation`, `lpt/economics`

**Context**: The inflation model was designed so the protocol is self-regulating — no manual parameter changes are needed; the Inflation Adjustment (alpha) automatically nudges issuance each round.

**Status**: current

---

### Inflation Rate

**Definition**: The per-round percentage of the total LPT supply that is newly minted and distributed to active orchestrators and delegators; adjusts dynamically via the Inflation Adjustment mechanism.

**Tags**: `economic:reward`

**Tabs**: community, lpt

**Pages**: `community/economics`, `community/treasury`, `lpt/inflation`, `lpt/economics`

**Context**: Livepeer's inflation rate starts around 0.00042% per round and decreases by 0.00005% per round when bonding exceeds 50%, and increases otherwise, targeting long-run equilibrium participation.

**Status**: current

---

### Inflationary Rewards

**Definition**: Newly minted LPT tokens distributed each round proportionally to active orchestrators and their delegators based on bonded stake.

**Tags**: `economic:reward`

**Tabs**: community, lpt

**Pages**: `community/staking`, `community/treasury`, `lpt/inflation`, `lpt/staking`

**Context**: Inflationary rewards are the supply-side incentive for participation; orchestrators must call the reward function each round to mint and distribute them, otherwise that round's allocation is forfeited.

**Status**: current

---

### Ingest

**Definition**: Process of receiving a live video stream from a broadcaster's encoder into a media server, typically over RTMP, SRT, or WebRTC/WHIP.

**Tags**: `video:processing`

**Tabs**: solutions, resources

**Pages**: `solutions/livestreaming`, `solutions/streaming`, `resources/glossary`, `resources/streaming`

**External**: [Real-Time Messaging Protocol (Wikipedia)](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)

**Status**: current

---

### Interactive Media

**Definition**: Digital content dynamically responding to user input in real time, combining text, images, audio, and video.

**Tags**: `ai:application`

**Tabs**: home

**Pages**: `home/ai-video`, `home/use-cases`

**External**: [Interactive media (Wikipedia)](https://en.wikipedia.org/wiki/Interactive_media)

**Status**: current

---

### Interval-Based Payment

**Definition**: A compensation model where payment tickets are sent at regular time intervals rather than per segment or per request.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`, `gateways/protocol`

**Context**: Interval-based payments reduce per-segment overhead by batching payment obligations into timed intervals. This is an alternative to per-segment ticket issuance in the Livepeer probabilistic micropayment system.

**Status**: current

---

### Issuance

**Definition**: The minting of new LPT tokens each round as the mechanism for distributing inflationary rewards to protocol participants.

**Tags**: `web3:tokenomics`

**Tabs**: lpt

**Pages**: `lpt/inflation`, `lpt/economics`

**Context**: Total LPT issuance per round equals inflation rate multiplied by current total supply; it flows first to orchestrators who called reward, then to their delegators proportionally.

**Status**: current

---

### Job

**Definition**: A unit of work submitted to the Livepeer network specifying stream ID, transcoding options or AI pipeline, and price.

**Tags**: `livepeer:protocol`

**Tabs**: home

**Pages**: `home/network`, `home/architecture`

**Context**: Jobs are the atomic work unit in the Livepeer protocol; each job goes through a lifecycle of submission, orchestrator selection, execution, verification, and payment settlement.

**Status**: current

---

### Job Lifecycle

**Definition**: The sequence of stages from job submission through orchestrator selection, work execution, verification, and payment settlement.

**Tags**: `livepeer:protocol`

**Tabs**: about

**Pages**: `about/protocol`, `about/architecture`

**Context**: Understanding the job lifecycle is fundamental to Livepeer's architecture: a gateway submits a job, the network selects an orchestrator, work is performed off-chain, verified, and payment tickets are issued.

**Status**: current

---

### JSON (JavaScript Object Notation)

**Definition**: Lightweight, human-readable data interchange format using key-value pairs and ordered lists, widely used for API request and response bodies.

**Tags**: `technical:protocol`

**Tabs**: solutions

**Pages**: `solutions/api`

**External**: [JSON (Wikipedia)](https://en.wikipedia.org/wiki/JSON)

**Status**: current

---

### JavaScript

**Definition**: A high-level interpreted scripting language used for web and server-side development; Livepeer's primary SDKs and gateway clients expose JavaScript/TypeScript APIs.

**Tags**: `technical:language`

**Tabs**: developers, community

**Also known as**: JS

**External**: [JavaScript (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Status**: current

---

### JWT (JSON Web Token)

**Definition**: Compact, URL-safe token format carrying signed claims used for stateless authentication; in video access control, a signed JWT proves viewer entitlement without a server round-trip for every request.

**Tags**: `technical:security`

**Tabs**: solutions, developers

**Pages**: `solutions/access-control`, `solutions/api`, `developers/access-control`, `developers/api`

**External**: [JSON Web Token (jwt.io)](https://jwt.io/introduction)

**Status**: current

---

### Keyframe Interval

**Definition**: Distance in frames or seconds between consecutive keyframes (I-frames); a shorter interval improves seeking accuracy while a longer interval improves compression efficiency.

**Tags**: `video:encoding`

**Tabs**: solutions

**Pages**: `solutions/encoding`, `solutions/livestreaming`

**External**: [Group of pictures (Wikipedia)](https://en.wikipedia.org/wiki/Group_of_pictures)

**Status**: current

---

### KYC (Know Your Customer)

**Definition**: Know Your Customer — identity verification process for regulatory compliance, requiring users to provide identifying information before accessing certain features.

**Tags**: `operational:process`

**Tabs**: developers

**Pages**: `developers/access-control`

**External**: [Know your customer (Wikipedia)](https://en.wikipedia.org/wiki/Know_your_customer)

**Status**: current

---

### KYO (Know Your Orchestrator)

**Definition**: Know Your Orchestrator — Live Pioneers interview series profiling active orchestrators on the network.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/programs`, `community/events`

**Context**: KYO is a community education initiative run by Live Pioneers that publishes Q&A-format interviews with orchestrator operators, helping delegators make informed staking decisions.

**Status**: current

---

### L1 Escrow

**Definition**: The Ethereum mainnet contract that holds LPT in escrow during cross-chain bridging to Arbitrum, locking L1 tokens as L2 equivalents are minted on Arbitrum.

**Tags**: `livepeer:contract`, `web3:chain`

**Tabs**: lpt

**Pages**: `lpt/bridging`, `lpt/arbitrum`

**Context**: The L1 Escrow pairs with L2LPTGateway to form the canonical LPT bridge; tokens bridged to Arbitrum are locked in L1 Escrow until bridged back.

**Status**: current

---

### L2LPTGateway

**Definition**: The bridge contract deployed on Arbitrum that enables LPT token transfers between Ethereum L1 and Arbitrum L2.

**Tags**: `livepeer:contract`, `web3:chain`

**Tabs**: lpt

**Pages**: `lpt/bridging`, `lpt/arbitrum`

**Context**: L2LPTGateway is the on-chain entry point for bridging LPT to Arbitrum, where Livepeer's staking and governance contracts live; it pairs with an L1 Escrow contract on Ethereum mainnet.

**Status**: current

---

### Latency

**Definition**: Delay between capture at source and display on the viewer's device, accumulating at every pipeline stage.

**Tags**: `video:playback`, `technical:infra`

**Tabs**: home, solutions, gateways, resources

**Pages**: `home/streaming`, `solutions/livestreaming`, `solutions/webrtc`, `gateways/routing`, `resources/glossary`, `resources/streaming`

**External**: [Latency (Wikipedia)](https://en.wikipedia.org/wiki/Latency_(audio))

**Status**: current

---

### Layer 1

**Definition**: The base blockchain network (e.g. Ethereum) that validates and finalizes transactions without reliance on another network.

**Tags**: `web3:chain`

**Tabs**: about

**Pages**: `about/protocol`, `about/network`

**External**: [Layer-1 blockchain (Wikipedia)](https://en.wikipedia.org/wiki/Layer-1_blockchain)

**Status**: current

---

### Layer 2 / Layer-2

**Definition**: A separate blockchain extending a Layer 1 by handling transactions off-chain while inheriting the security guarantees of the base chain.

**Tags**: `web3:chain`

**Tabs**: home, about, resources

**Pages**: `home/network`, `home/index`, `about/protocol`, `about/network`, `resources/glossary`, `resources/protocol`

**External**: [Layer 2 (Ethereum.org)](https://ethereum.org/layer-2/)

**Status**: current

**Also known as**: Layer-2

---

### LIP (Livepeer Improvement Proposal)

**Definition**: Formal design document proposing changes to the Livepeer protocol, governance parameters, or ecosystem standards; the primary mechanism for protocol evolution.

**Tags**: `operational:governance`, `livepeer:protocol`

**Tabs**: home, about, developers, community, lpt

**Pages**: `home/governance`, `home/upgrades`, `about/governance`, `about/protocol`, `developers/protocol`, `developers/governance`, `community/governance`, `community/protocol`, `lpt/governance`, `lpt/protocol`

**Context**: LIPs follow a structured process from pre-proposal discussion on the governance forum through on-chain vote and execution; key examples include LIP-73 (Confluence), LIP-89 (on-chain governance), LIP-91/92 (treasury).

**Status**: current

---

### LIP-89

**Definition**: Livepeer Improvement Proposal introducing the on-chain LivepeerGovernor contract, community treasury mechanism, stake-weighted voting, and the 10-round voting period.

**Tags**: `operational:governance`

**Tabs**: community, orchestrators, lpt

**Pages**: `community/governance`, `community/protocol`, `orchestrators/protocol`, `orchestrators/upgrades`, `lpt/governance`

**Context**: LIP-89 was the foundational governance upgrade that established Livepeer's on-chain voting system, treasury contract, and the delegated stake-weighted voting model currently in use.

**Status**: current

---

### LIP-91

**Definition**: Livepeer Improvement Proposal bundling the treasury establishment mechanism and defining the inflation-funded treasury reward cut rate.

**Tags**: `operational:governance`

**Tabs**: orchestrators

**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

**Context**: LIP-91 activated the community treasury by directing a governable percentage of per-round LPT inflation into the on-chain treasury contract.

**Status**: current

---

### LIP-92

**Definition**: Livepeer Improvement Proposal defining the AI model registry and capability discovery mechanism for the network.

**Tags**: `operational:governance`

**Tabs**: orchestrators

**Pages**: `orchestrators/protocol`, `orchestrators/upgrades`

**Context**: LIP-92 specified how orchestrators register AI capabilities on-chain via the AIServiceRegistry, enabling structured capability advertisement and gateway discovery of AI services.

**Status**: current

---

### LISAR

**Definition**: SPE providing ongoing ecosystem infrastructure contributions with monthly progress updates.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/governance`, `community/proposals`

**Context**: LISAR (Livepeer Infrastructure and Services Accountability Report) is the naming convention for the accountability reports published by certain SPEs; also used as the SPE identity for the infrastructure services workstream.

**Status**: current

---

### Live AI

**Definition**: Real-time AI processing applied to live video streams, typically using pipelines such as live-video-to-video running at interactive frame rates.

**Tags**: `ai:concept`

**Tabs**: gateways

**Pages**: `gateways/pipelines`, `gateways/routing`

**Context**: Live AI on Livepeer routes live stream frames through orchestrator GPU workers running models like StreamDiffusion. The gateway manages session continuity and orchestrator selection to maintain the low-latency budget required for interactive output.

**Status**: current

---

### Live Pioneers

**Definition**: Independent community for long-term LPT holders producing educational content and guides.

**Tags**: `operational:community`

**Tabs**: community

**Pages**: `community/programs`, `community/index`

**Context**: Live Pioneers is an informal community programme for engaged LPT ecosystem participants; members produce the KYO interview series, publish staking guides, and represent the delegator perspective in governance.

**Status**: current

---

### Live-video-to-video

**Definition**: AI pipeline applying generative models to a continuous video stream frame-by-frame at interactive frame rates.

**Tags**: `ai:pipeline`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-video`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [StreamDiffusion GitHub](https://github.com/cumulo-autumn/StreamDiffusion)

**Status**: current

---

### LiveInfra

**Definition**: SPE providing free, reliable blockchain infrastructure services including the Community Arbitrum Node.

**Tags**: `livepeer:entity`

**Tabs**: community

**Pages**: `community/projects`, `community/tools`

**Context**: LiveInfra is a treasury-funded Special Purpose Entity that operates the Community Arbitrum Node and other shared RPC/infrastructure services that reduce operational friction for ecosystem participants.

**Status**: current

---

### livepeer-ai-js

**Definition**: JavaScript/TypeScript library for the Livepeer AI API enabling AI inference integration.

**Tags**: `livepeer:sdk`

**Tabs**: community

**Pages**: `community/sdks`, `community/tools`

**Context**: `livepeer-ai-js` is the official JavaScript SDK for integrating with the Livepeer AI Gateway API, exposing pipelines such as text-to-image and live-video-to-video to JS/TS applications.

**Status**: current

---

### livepeer-ai-python

**Definition**: Python library for the Livepeer AI API providing programmatic access to AI inference pipelines.

**Tags**: `livepeer:sdk`

**Tabs**: community

**Pages**: `community/sdks`, `community/tools`

**Context**: `livepeer-ai-python` is the official Python SDK for the Livepeer AI Gateway, enabling Python applications and ML workflows to dispatch inference jobs to the AI subnet.

**Status**: current

---

### livepeer-go

**Definition**: Go server-side SDK for the Livepeer Studio API.

**Tags**: `livepeer:sdk`

**Tabs**: community

**Pages**: `community/sdks`, `community/tools`

**Context**: `livepeer-go` provides Go bindings for Livepeer Studio API operations including stream management, asset upload, and playback ID retrieval, targeting backend Go service integrations.

**Status**: current

---

### livepeer-js

**Definition**: JavaScript library for the Livepeer Studio API providing programmatic access to stream and asset management.

**Tags**: `livepeer:sdk`, `livepeer:product`

**Tabs**: community

**Pages**: `community/sdks`, `community/tools`

**Context**: `livepeer-js` is the primary JavaScript SDK for Livepeer Studio, supporting stream creation, asset management, and playback integration in Node.js and browser environments.

**Status**: current

**Also known as**: Livepeer.js

---

### livepeer-python-gateway

**Definition**: An open-source Python reference implementation of a Livepeer gateway, enabling job submission, payment flow management, and pipeline routing from Python applications.

**Tags**: `livepeer:sdk`

**Tabs**: gateways, developers

**Context**: Maintained by the community as a lightweight alternative for developers building Python-native integrations with the Livepeer network.

**Status**: current

---

### Livepeer Actor

**Definition**: A participant in the Livepeer protocol or network — human or machine — that performs a defined role such as submitting jobs, providing compute, verifying work, or securing the system.

**Tags**: `livepeer:role`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: The term "Livepeer Actor" is the broadest participant category, encompassing Protocol Actors (gateways, orchestrators, delegators) as well as ecosystem contributors, developers, and tooling operators.

**Status**: current

---

### Livepeer Cloud

**Definition**: Platform by the Livepeer Cloud SPE increasing network accessibility with a free community AI gateway and managed developer services.

**Tags**: `livepeer:product`

**Tabs**: developers

**Pages**: `developers/index`, `developers/api`

**Context**: Livepeer Cloud is a hosted offering making it easier for developers to access Livepeer's AI and video infrastructure without self-hosting gateway nodes.

**Status**: current

---

### Livepeer Ecosystem

**Definition**: The full set of projects, tools, participants, and organizations building on or contributing to the Livepeer network, including SPEs, community tools, integrated applications, and partner services.

**Tags**: `livepeer:entity`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/index`

**Context**: The Livepeer Ecosystem is broader than the protocol itself — it includes third-party tooling, community programs, governance participants, and complementary infrastructure providers.

**Status**: current

---

### Livepeer Explorer

**Definition**: Official protocol explorer for viewing orchestrator state, staking data, governance proposals, and delegating LPT.

**Tags**: `livepeer:tool`

**Tabs**: community, lpt, resources

**Pages**: `community/tools`, `community/staking`, `lpt/staking`, `resources/glossary`, `resources/tools`

**Context**: Livepeer Explorer is the primary web interface for delegators and orchestrators; it allows users to browse the active set, stake LPT, view reward histories, and interact with on-chain governance proposals without running node software.

**Status**: current

---

### Livepeer Foundation

**Definition**: Non-profit Cayman Islands Foundation Company stewarding long-term vision, ecosystem growth, grant programs, and core development of the Livepeer network.

**Tags**: `livepeer:entity`

**Tabs**: community, lpt, resources

**Pages**: `community/governance`, `community/index`, `lpt/governance`, `lpt/ecosystem`, `resources/glossary`, `resources/governance`

**Context**: The Livepeer Foundation is distinct from Livepeer Inc. It is member-governed and acts as a steward rather than a controller, funding SPEs, running the governance forum, and representing the ecosystem externally.

**Status**: current

---

### Livepeer Inc

**Definition**: Original company that built Livepeer's initial protocol architecture and core software.

**Tags**: `livepeer:entity`

**Tabs**: home, community

**Pages**: `home/index`, `home/about`, `community/governance`

**Context**: Livepeer Inc founded and launched the Livepeer network; following the establishment of the Livepeer Foundation, it transitioned from central steward to one contributor among many in the ecosystem.

**Status**: current

---

### Livepeer Network

**Definition**: The live operational decentralized system of orchestrators, workers, gateways, and broadcasters performing video transcoding and AI inference jobs.

**Tags**: `livepeer:protocol`

**Tabs**: solutions, resources

**Pages**: `solutions/index`, `solutions/network`, `resources/glossary`, `resources/protocol`

**Context**: "Livepeer Network" refers to the running infrastructure layer — distinct from the Livepeer Protocol, which is the on-chain rule set. The network is the mesh of machines; the protocol governs their behavior.

**Status**: current

---

### Livepeer Protocol

**Definition**: The on-chain ruleset and smart contract logic governing staking, delegation, inflation, orchestrator selection, slashing, and probabilistic payments.

**Tags**: `livepeer:protocol`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/protocol`

**Context**: The Livepeer Protocol is the coordination and incentive layer — it does not perform video or AI compute itself but enforces correct behavior, reward distribution, and economic security for the network.

**Status**: current

---

### Livepeer Studio

**Definition**: Hosted developer platform providing APIs, SDKs, and a dashboard for adding live and on-demand video experiences to applications, backed by the Livepeer Network.

**Tags**: `livepeer:product`

**Tabs**: solutions, developers

**Pages**: `solutions/index`, `solutions/api`, `developers/index`, `developers/api`

**Context**: Livepeer Studio is the primary product entry point for developers; it abstracts network complexity behind REST APIs and a web dashboard, handling stream management, transcoding, access control, analytics, and billing.

**Status**: current

---

### Livepeer.js

**Definition**: JavaScript library for the Livepeer API providing programmatic access to Studio features including stream and asset management.

**Tags**: `livepeer:sdk`

**Tabs**: developers

**Pages**: `developers/sdks`, `developers/api`

**Context**: Livepeer.js is the official JavaScript/TypeScript SDK for interacting with Livepeer Studio's REST API, designed for Node.js and browser environments.

**Status**: current

---

### LivepeerGovernor

**Definition**: The OpenZeppelin-based on-chain governor contract for Livepeer that enables stake-weighted voting on protocol proposals using checkpointed BondingVotes data.

**Tags**: `livepeer:contract`, `web3:governance`

**Tabs**: lpt

**Pages**: `lpt/contracts`, `lpt/governance`

**Context**: LivepeerGovernor was introduced in LIP-89 and is the authoritative contract for all binding on-chain governance decisions affecting the Livepeer protocol and treasury.

**Status**: current

**Also known as**: Governor

---

### LivepeerNode

**Definition**: The core Go struct in go-livepeer representing a running Livepeer node instance, encapsulating configuration, session state, and network connections.

**Tags**: `livepeer:protocol`

**Tabs**: gateways

**Pages**: `gateways/code`, `gateways/architecture`

**Context**: LivepeerNode is the central object in the gateway codebase. Understanding its structure is relevant when building custom gateway middleware or debugging gateway internals.

**Status**: current

---

### Livestream

**Definition**: Real-time or near-real-time transmission of video and audio over a network to viewers as it is captured, without pre-recording.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/livestreaming`, `solutions/index`

**External**: [Live streaming (Wikipedia)](https://en.wikipedia.org/wiki/Live_streaming)

**Status**: current

---

### LLM (Large Language Model)

**Definition**: Large language model — neural network trained on massive text corpora to understand and generate natural language.

**Tags**: `ai:concept`

**Tabs**: developers, orchestrators

**Pages**: `developers/pipelines`, `developers/ai-gateway`, `orchestrators/pipelines`, `orchestrators/ai`

**External**: [Large language model (Wikipedia)](https://en.wikipedia.org/wiki/Large_language_model)

**Status**: current

---

### Loki

**Definition**: Horizontally scalable log aggregation system by Grafana Labs, used in Livepeer orchestrator monitoring stacks.

**Tags**: `operational:monitoring`

**Tabs**: orchestrators

**Pages**: `orchestrators/monitoring`, `orchestrators/operations`

**External**: [Loki (Grafana Labs)](https://grafana.com/oss/loki/)

**Status**: current

---

### LoRA (Low-Rank Adaptation)

**Definition**: Low-Rank Adaptation — parameter-efficient fine-tuning technique injecting trainable low-rank matrices into transformer layers to specialise a model without full retraining.

**Tags**: `ai:model`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [LoRA training (Hugging Face)](https://huggingface.co/docs/diffusers/training/lora)

**Status**: current

---

### Low-Latency

**Definition**: A system characteristic where the delay between an event occurring and a response being delivered is minimised; in Livepeer, sub-500ms round-trip times are targeted for real-time AI video pipelines.

**Tags**: `video:streaming`

**Tabs**: solutions, about, developers

**Context**: Critical for interactive AI video applications — high latency breaks the real-time feedback loop between user input and AI-transformed output.

**Status**: current

---

### LPT (Livepeer Token)

**Definition**: The ERC-20 governance and staking token used to coordinate, incentivize, and secure the Livepeer Network; staked LPT determines orchestrator selection, work allocation, governance voting weight, and reward distribution.

**Tags**: `livepeer:protocol`, `web3:token`

**Tabs**: home, about, developers, orchestrators, community, lpt, resources

**Pages**: `home/staking`, `home/network`, `about/staking`, `about/protocol`, `developers/protocol`, `developers/staking`, `orchestrators/staking`, `orchestrators/protocol`, `community/staking`, `community/governance`, `lpt/staking`, `lpt/economics`, `lpt/governance`, `lpt/tokenomics`, `resources/glossary`, `resources/staking`

**Context**: LPT is the foundational cryptoeconomic primitive of the protocol — it serves simultaneously as a staking bond (security), a governance weight (voting power), and an inflation-distributed reward token.

**Status**: current

**Also known as**: Livepeer Token

---

### LPT emissions

**Definition**: New LPT tokens minted each protocol round via inflation, distributed to active orchestrators and their delegators.

**Tags**: `economic:reward`, `livepeer:protocol`

**Tabs**: community

**Pages**: `community/treasury`, `community/economics`

**Context**: LPT emissions are the primary economic incentive for participation; the per-round emission rate adjusts dynamically to push the bonding rate toward 50%, diluting non-staking holders.

**Status**: current

---

### LPMS (Livepeer Media Server)

**Definition**: An open-source media server library providing live video functionality including RTMP ingest and HLS output, used as the foundation for Livepeer transcoding nodes.

**Tags**: `livepeer:sdk`

**Tabs**: resources

**Pages**: `resources/glossary`, `resources/tools`

**Context**: LPMS is the core media server component in go-livepeer; orchestrators and gateways use it to handle video stream ingestion, segment processing, and output generation.

**Status**: current

**Also known as**: Livepeer Media Server

---

### Mainnet

**Definition**: The primary public production blockchain where actual-value transactions occur on the distributed ledger.

**Tags**: `web3:chain`

**Tabs**: orchestrators

**Pages**: `orchestrators/protocol`

**External**: [Mainnet (ethereum.org)](https://ethereum.org/glossary/)

**Status**: current

---

### Marketplace

**Definition**: The decentralized market on the Livepeer network matching gateway demand with orchestrator supply, governed by capability, price, and performance; uses crypto-economic incentives rather than centralized coordination.

**Tags**: `livepeer:product`

**Tabs**: home, gateways

**Pages**: `home/network`, `home/compute`, `gateways/economics`, `gateways/architecture`

**Context**: Orchestrators advertise capabilities and prices, gateways select and route work, and payment flows coordinate supply with demand.

**Status**: current

---

### MaxPrice

**Definition**: CLI flag setting the maximum transcoding price per pixelsPerUnit that a gateway will accept from an orchestrator; orchestrators above this threshold are excluded.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: orchestrators

**Pages**: `orchestrators/pricing`, `orchestrators/config`

**Context**: MaxPrice acts as a hard gate in orchestrator selection. Orchestrators set their own pricePerUnit; gateways set their MaxPrice to filter out orchestrators whose prices exceed the budget.

**Status**: current

**Also known as**: MaxPricePerUnit

---

### MaxPricePerCapability

**Definition**: A CLI configuration flag setting the maximum price a gateway will pay for a specific AI pipeline/model pair (capability), overriding the general MaxPricePerUnit for that task type.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/config`

**Context**: MaxPricePerCapability lets gateway operators fine-tune spending limits per AI task, for example paying more for a high-quality image-to-video pipeline while capping spend on cheaper text-to-image tasks.

**Status**: current

---

### MaxPricePerUnit

**Definition**: A CLI configuration flag setting the maximum price per pixelsPerUnit that a gateway will accept from orchestrators; orchestrators priced above this threshold are excluded.

**Tags**: `livepeer:config`, `economic:pricing`

**Tabs**: gateways

**Pages**: `gateways/pricing`, `gateways/config`

**Context**: MaxPricePerUnit acts as a hard gate in orchestrator selection. Setting it too low reduces the available orchestrator pool; too high increases cost. It can be expressed in wei or as a USD-denominated value with automatic conversion.

**Status**: current

**Also known as**: MaxPrice

---

### Merkle Mine

**Definition**: Livepeer's algorithm for decentralized token distribution at genesis using Merkle proofs to fairly distribute initial LPT supply without an ICO.

**Tags**: `web3:concept`

**Tabs**: community, lpt, resources

**Pages**: `community/governance`, `lpt/tokenomics`, `lpt/history`, `resources/glossary`, `resources/history`

**Context**: The Merkle Mine was used to distribute genesis supply broadly across the Ethereum community at Livepeer's 2018 mainnet launch, using a Merkle tree of eligible addresses and on-chain proof verification.

**Status**: current

---

### Micropayments

**Definition**: Small-value payments for streaming services, implemented in Livepeer via a probabilistic lottery scheme to minimize on-chain transaction costs.

**Tags**: `economic:payment`

**Tabs**: home, orchestrators

**Pages**: `home/network`, `home/payments`, `orchestrators/payments`, `orchestrators/protocol`

**External**: [Micropayment (Wikipedia)](https://en.wikipedia.org/wiki/Micropayment)

**Status**: current

---

### Micropayment Ticket

**Definition**: A small-value signed data structure sent from a gateway to an orchestrator representing a probabilistic payment; only winning tickets are redeemed on-chain.

**Tags**: `economic:payment`

**Tabs**: gateways

**Pages**: `gateways/payments`, `gateways/protocol`

**Context**: Gateways issue micropayment tickets to orchestrators as work is performed. The lottery-based mechanism means only a fraction of tickets result in on-chain transactions, dramatically reducing gas costs while preserving expected-value fairness.

**Status**: current

**Also known as**: Payment ticket, probabilistic micropayment ticket

---

### Milestone-based Grants

**Definition**: Funding released incrementally upon achievement of predefined deliverables rather than in a lump sum.

**Tags**: `economic:treasury`

**Tabs**: community

**Pages**: `community/treasury`, `community/programs`

**Context**: Milestone-based grants are used by the Livepeer Foundation and treasury to reduce risk; SPEs and grantees receive funding tranches as they hit defined milestones and submit accountability reports.

**Status**: current

---

### Minter Contract

**Definition**: The smart contract responsible for minting new LPT tokens during orchestrator reward calls and holding ETH collected from winning payment tickets.

**Tags**: `livepeer:contract`

**Tabs**: about, lpt, resources

**Pages**: `about/contracts`, `about/economics`, `lpt/contracts`, `lpt/inflation`, `resources/glossary`, `resources/contracts`

**Context**: The Minter is the on-chain treasury and issuance contract; it releases newly minted LPT to the BondingManager each round and holds gateway ETH deposits until tickets are redeemed. Called by the BondingManager at each reward call to calculate and mint the round's inflationary LPT allocation.

**Status**: current

**Also known as**: Minter

---

### MistServer

**Definition**: Open-source media server providing live video ingest, transcoding, and delivery capabilities, used within Livepeer's infrastructure to handle protocol translation and stream routing.

**Tags**: `technical:infra`

**Tabs**: solutions, community

**Pages**: `solutions/architecture`, `community/tools`, `community/network`

**External**: [MistServer](https://mistserver.org/)

**Status**: current

---

### Model

**Definition**: Mathematical structure (neural network with learned weights) enabling predictions or content generation for new inputs, identified by a model ID and pipeline type.

**Tags**: `ai:concept`

**Tabs**: home, developers, gateways, resources

**Pages**: `home/ai-video`, `home/pipelines`, `developers/pipelines`, `gateways/pipelines`, `gateways/routing`, `resources/glossary`, `resources/ai`

**External**: [Machine learning (Wikipedia)](https://en.wikipedia.org/wiki/Machine_learning)

**Status**: current

---

### Model Card

**Definition**: Standardised documentation describing a model's intended use, training data, evaluation metrics, and known limitations.

**Tags**: `ai:concept`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [Model Cards (Hugging Face)](https://huggingface.co/docs/hub/en/model-cards)

**Status**: current

---

### Model ID

**Definition**: Unique string identifier specifying which AI model to invoke on a repository hub, for example `stabilityai/stable-diffusion-xl-base-1.0`.

**Tags**: `ai:concept`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [Model Cards (Hugging Face)](https://huggingface.co/docs/hub/en/model-cards)

**Status**: current

---

### Model Warmth

**Definition**: Status indicating whether an AI model is currently loaded in GPU memory (warm) or must be loaded from storage on demand (cold).

**Tags**: `ai:concept`, `livepeer:config`

**Tabs**: orchestrators

**Pages**: `orchestrators/ai`, `orchestrators/performance`

**Context**: Orchestrators typically support one warm model per GPU during the current beta phase. The warmth status of each model is configured in `aiModels.json` and determines whether a model can serve requests immediately or incurs a cold-start delay.

**Status**: current

---

### MP4

**Definition**: MPEG-4 Part 14 digital multimedia container format for storing video, audio, subtitles, and still images in a single file.

**Tags**: `video:playback`

**Tabs**: solutions

**Pages**: `solutions/vod`, `solutions/encoding`

**External**: [MP4 file format (Wikipedia)](https://en.wikipedia.org/wiki/MP4_file_format)

**Status**: current

---

### Multimodal

**Definition**: AI systems capable of processing and integrating multiple data types — such as text, images, audio, and video — for cross-modal understanding and generation.

**Tags**: `ai:concept`

**Tabs**: developers

**Pages**: `developers/pipelines`, `developers/ai-gateway`

**External**: [Multimodal learning (Wikipedia)](https://en.wikipedia.org/wiki/Multimodal_learning)

**Status**: current

---

### Multistream

**Definition**: Simultaneous restreaming of a single live input to multiple external destination platforms (e.g., YouTube, Twitch) in a single broadcast session.

**Tags**: `video:studio`

**Tabs**: solutions

**Pages**: `solutions/multistream`, `solutions/livestreaming`

**Context**: Livepeer Studio's Multistream feature lets developers configure multiple target URLs and stream keys on a Stream object; the platform fans out the ingest to all targets automatically.

**Status**: current

---
