# Glossary — Gateways Tab

**Tab folder**: `v2/gateways/`
**Date**: 2026-03-20
**Terms**: 65
**Source**: Agent deep-read + classified-by-tag.md + existing gateways glossary

---

### Arbitrage

**Definition**: Exploiting price differences between markets; in the Livepeer context, selecting lower-cost orchestrators when multiple are available for the same capability.
**External**: [Arbitrage (Wikipedia)](https://en.wikipedia.org/wiki/Arbitrage)
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/economics`

---

### Arbitrum

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum that processes transactions off-chain while inheriting Ethereum-grade security; hosts the Livepeer protocol smart contracts.
**External**: [Arbitrum One (docs.arbitrum.io)](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `gateways/protocol`, `gateways/payments`

---

### Bring Your Own Compute (BYOC)

**Definition**: Bring-Your-Own-Container — a deployment pattern enabling teams to supply custom Docker containers running Python AI workloads for Livepeer streaming.
**Also known as**: BYOC
**Context**: On Livepeer, BYOC lets gateway and orchestrator operators deploy containerized custom AI models as pipelines without waiting for official pipeline support.
**Tags**: `livepeer:deployment`, `ai:concept`
**Status**: current
**Pages**: `gateways/compute`, `gateways/pipelines`

---

### Broadcaster (deprecated)

**Definition**: Legacy term for the gateway node — the node publishing streams and submitting video for transcoding; now replaced by "Gateway" in all current documentation.
**Also known as**: Gateway (current term); the `-broadcaster=true` CLI flag has been replaced by `-gateway`
**Context**: Older community guides and go-livepeer releases prior to 2023 used "Broadcaster." The terms are functionally equivalent; the rename reflects the expanded role beyond video broadcasting.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/protocol`

---

### BroadcastSessionsManager

**Definition**: An internal go-livepeer component that manages active transcoding sessions between a gateway and its selected orchestrators.
**Context**: The BroadcastSessionsManager tracks session state, handles failover logic, and maintains per-orchestrator session pools within a running gateway node.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/code`, `gateways/architecture`

---

### Capability

**Definition**: An AI service or job type (pipeline/model pair) that an orchestrator can perform, advertised to the network so gateways can route matching requests.
**Context**: Gateways use capability advertisements to discover which orchestrators support a given AI pipeline and model, enabling targeted routing without manual orchestrator configuration.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/discovery`, `gateways/protocol`

---

### Cascade

**Definition**: The strategic vision for Livepeer to become the leading platform for real-time AI video pipelines, named as a protocol upgrade milestone.
**Context**: Cascade represents both a named upgrade phase and the overarching product direction enabling AI inference on the Livepeer network alongside traditional video transcoding.
**Tags**: `livepeer:upgrade`
**Status**: current
**Pages**: `gateways/protocol`

---

### Clearinghouse

**Definition**: A contract or system handling settlement of payments between gateways and orchestrators, including multi-user support, API key authentication, usage accounting, and fiat/stablecoin billing.
**Context**: In gateway deployments, a clearinghouse is an abstraction over a remote signer that adds commercial services. It enables gateway operators to offer multi-tenant billing without each user needing their own ETH wallet.
**Tags**: `economic:payment`, `livepeer:contract`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Codec

**Definition**: Software or hardware that compresses and decompresses digital video, typically using lossy compression.
**External**: [Video codec (Wikipedia)](https://en.wikipedia.org/wiki/Video_codec)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/encoding`

---

### Cold Start

**Definition**: The latency incurred when an AI model must be loaded from storage into GPU memory before it can serve its first inference request, typically ranging from 5 to 90 seconds.
**Also known as**: Cold model
**External**: [Cold start latency (OpenMetal)](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### Demand Aggregation

**Definition**: Consolidating requests from multiple users or applications for efficient routing to the orchestrator network.
**Context**: Gateways perform demand aggregation by receiving requests from many clients and batching or routing them to orchestrators, improving utilization and reducing per-request overhead for each end user.
**Tags**: `operational:process`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/economics`

---

### Deposit

**Definition**: Funds (ETH) locked by a gateway into the TicketBroker smart contract to pay orchestrators via probabilistic micropayments.
**Context**: An on-chain gateway must maintain a deposit on Arbitrum. The deposit covers the expected value of outstanding payment tickets sent to orchestrators. If the deposit is depleted, the reserve acts as backstop.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Dispersal

**Definition**: Distribution of encoded video segments across multiple orchestrator nodes for redundancy and parallel processing.
**Context**: When a gateway disperses work, it splits a stream's segments across multiple orchestrators simultaneously, enabling parallel transcoding and reducing the impact of a single slow or failing node.
**Tags**: `video:processing`
**Status**: current
**Pages**: `gateways/routing`, `gateways/architecture`

---

### Dual Gateway

**Definition**: A deployment where a single gateway node operates both video transcoding and AI inference workloads simultaneously.
**Also known as**: Dual mode
**Context**: A dual gateway routes RTMP transcoding requests and AI inference requests from the same node instance, requiring Linux (the AI component does not support Windows or macOS natively).
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/modes`

---

### Encoding Ladder

**Definition**: A structured set of video renditions at varying resolutions and bitrates for optimal cross-device adaptive bitrate viewing.
**External**: [Encoding ladder (Cloudinary)](https://cloudinary.com/glossary/encoding-ladder)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/profiles`

---

### ETH

**Definition**: The native cryptocurrency of Ethereum, used to pay transaction fees (gas) and to fund gateway payment deposits on Arbitrum.
**External**: [Ether (ethereum.org)](https://ethereum.org/what-is-ether/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Failover

**Definition**: Automatic switching to a backup orchestrator when the primary fails or becomes unresponsive during a session.
**External**: [Failover (Wikipedia)](https://en.wikipedia.org/wiki/Failover)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `gateways/routing`, `gateways/reliability`

---

### Gateway

**Definition**: A node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface between applications and the Livepeer network.
**Context**: A gateway does not perform compute — it routes work to orchestrators that do. Gateways can operate on-chain (with Arbitrum-based payments) or off-chain (using a remote signer). No GPU is required to run a gateway.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `gateways/index`, `gateways/architecture`

---

### Gateway-as-a-Service

**Definition**: A hosted deployment model allowing users to access gateway functionality without managing their own infrastructure.
**Context**: Gateway-as-a-service offerings (for example, Livepeer Studio, Livepeer Cloud, or Daydream) run gateway nodes on the operator's behalf. The user pays the service's rate and receives an API endpoint rather than running go-livepeer directly.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `gateways/modes`, `gateways/architecture`

---

### Gateway Middleware

**Definition**: A pluggable logic layer inserted into the gateway request pipeline for custom processing such as authentication, rate-limiting, or request transformation.
**Context**: Gateway middleware lets operators intercept and modify requests or responses at the gateway layer without forking go-livepeer. Middleware is typically configured in code for SDK-based deployments or via hooks in go-livepeer.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/code`

---

### Group of Pictures (GOP)

**Definition**: An ordered arrangement of I-frames and inter-frames within a coded video stream; the set of frames between keyframes.
**Also known as**: GOP
**External**: [Group of pictures (Wikipedia)](https://en.wikipedia.org/wiki/Group_of_pictures)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/encoding`

---

### GPU Worker

**Definition**: A Livepeer node with GPU hardware that performs transcoding or AI inference tasks for an orchestrator.
**Context**: In gateway routing, the gateway selects orchestrators that have available GPU workers capable of handling the requested AI pipeline or transcoding profile. The gateway itself does not require a GPU.
**Tags**: `technical:infra`
**Status**: current
**Pages**: `gateways/routing`, `gateways/architecture`

---

### HTTP Live Streaming (HLS)

**Definition**: An HTTP-based streaming protocol by Apple that encodes video into multiple quality levels with an index playlist for adaptive delivery.
**Also known as**: HLS
**External**: [HTTP Live Streaming (Wikipedia)](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/streaming`

---

### HTTP Ingest

**Definition**: Receiving a live video stream via HTTP push (rather than RTMP) for transcoding or AI processing.
**External**: [HTTP (Wikipedia)](https://en.wikipedia.org/wiki/HTTP)
**Tags**: `video:processing`
**Status**: current
**Pages**: `gateways/ingest`, `gateways/streaming`

---

### Inference

**Definition**: Running a trained AI model on new input data to produce predictions or generated output, as opposed to training the model.
**External**: [Inference engine (Wikipedia)](https://en.wikipedia.org/wiki/Inference_engine)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### Interval-Based Payment

**Definition**: A compensation model where payment tickets are sent at regular time intervals rather than per segment or per request.
**Context**: Interval-based payments reduce per-segment overhead by batching payment obligations into timed intervals. This is an alternative to per-segment ticket issuance in the Livepeer probabilistic micropayment system.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Latency

**Definition**: The delay between a request being made (e.g., a frame captured or a segment submitted) and the response or output being received.
**External**: [Latency (Wikipedia)](https://en.wikipedia.org/wiki/Latency_(engineering))
**Tags**: `technical:infra`, `video:playback`
**Status**: current
**Pages**: `gateways/routing`

---

### Live AI

**Definition**: Real-time AI processing applied to live video streams, typically using pipelines such as live-video-to-video running at interactive frame rates.
**Context**: Live AI on Livepeer routes live stream frames through orchestrator GPU workers running models like StreamDiffusion. The gateway manages session continuity and orchestrator selection to maintain the low-latency budget required for interactive output.
**Tags**: `ai:concept`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### LivepeerNode

**Definition**: The core Go struct in go-livepeer representing a running Livepeer node instance, encapsulating configuration, session state, and network connections.
**Context**: LivepeerNode is the central object in the gateway codebase. Understanding its structure is relevant when building custom gateway middleware or debugging gateway internals.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/code`, `gateways/architecture`

---

### Marketplace

**Definition**: The decentralized market on the Livepeer network matching gateway demand with orchestrator supply, governed by capability, price, and performance.
**Context**: The Livepeer marketplace is not a discrete application but an emergent property of the protocol: orchestrators advertise capabilities and prices, gateways select and route work, and payment flows coordinate supply with demand.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `gateways/economics`, `gateways/architecture`

---

### MaxPricePerCapability

**Definition**: A CLI configuration flag setting the maximum price a gateway will pay for a specific AI pipeline/model pair (capability), overriding the general MaxPricePerUnit for that task type.
**Context**: MaxPricePerCapability lets gateway operators fine-tune spending limits per AI task, for example paying more for a high-quality image-to-video pipeline while capping spend on cheaper text-to-image tasks.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/config`

---

### MaxPricePerUnit

**Definition**: A CLI configuration flag setting the maximum price per pixelsPerUnit that a gateway will accept from orchestrators; orchestrators priced above this threshold are excluded.
**Also known as**: MaxPrice
**Context**: MaxPricePerUnit acts as a hard gate in orchestrator selection. Setting it too low reduces the available orchestrator pool; too high increases cost. It can be expressed in wei or as a USD-denominated value with automatic conversion.
**Tags**: `livepeer:config`, `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/config`

---

### Micropayment Ticket

**Definition**: A small-value signed data structure sent from a gateway to an orchestrator representing a probabilistic payment; only winning tickets are redeemed on-chain.
**Also known as**: Payment ticket, probabilistic micropayment ticket
**Context**: Gateways issue micropayment tickets to orchestrators as work is performed. The lottery-based mechanism means only a fraction of tickets result in on-chain transactions, dramatically reducing gas costs while preserving expected-value fairness.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Model

**Definition**: A mathematical structure (neural network with learned weights) enabling predictions or generation from new inputs when run as inference.
**External**: [Machine learning (Wikipedia)](https://en.wikipedia.org/wiki/Machine_learning)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### Network as a Platform (NaaP)

**Definition**: Network-as-a-Product — a reference architecture and implementation for multi-tenant gateway operation providing JWT-based authentication, developer API keys, and per-user usage tracking on top of a Livepeer gateway.
**Also known as**: NaaP
**Context**: NaaP enables gateway operators to expose Livepeer infrastructure to third-party developers with managed access control and billing, turning a single gateway deployment into a platform business. Repository: github.com/livepeer/naap.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/protocol`

---

### Off-Chain Gateway

**Definition**: A gateway node that operates without blockchain integration, using a remote signer for payment operations and specifying orchestrators manually rather than relying on protocol discovery.
**Context**: Off-chain is a sustainable production mode for gateways (unlike off-chain orchestrators, which are only for testing). An off-chain gateway holds no ETH; a community-hosted remote signer at signer.eliteencoder.net is publicly available and free to use.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `gateways/modes`

---

### On-Chain Gateway

**Definition**: A gateway node connected to the Livepeer protocol on Arbitrum, managing its own Ethereum wallet and using on-chain probabilistic micropayments for orchestrator settlement.
**Context**: On-chain gateways require ETH deposited on Arbitrum for the payment deposit and reserve, and use protocol-based orchestrator discovery. This mode provides access to the full registered orchestrator pool but requires crypto-wallet management.
**Tags**: `livepeer:deployment`
**Status**: current
**Pages**: `gateways/modes`

---

### Operational Mode

**Definition**: The deployment configuration that determines how a gateway connects to the Livepeer network: on-chain (Arbitrum-based payments, protocol discovery) or off-chain (remote signer, manual orchestrator addresses).
**Context**: Operational mode is an independent axis from node type and setup type. Both on-chain and off-chain gateways can route video, AI, or dual workloads. Off-chain is a valid production configuration for gateways.
**Tags**: `livepeer:config`, `livepeer:deployment`
**Status**: current
**Pages**: `gateways/modes`, `gateways/config`

---

### Orchestrator

**Definition**: A supply-side node contributing GPU resources, receiving jobs from gateways, performing video transcoding or AI inference, and earning ETH and LPT rewards.
**Context**: From the gateway's perspective, orchestrators are the compute providers it routes work to. Gateways select orchestrators based on capability, price, performance score, and stake weight, then maintain sessions with selected orchestrators.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `gateways/routing`, `gateways/protocol`

---

### Orchestrator Discovery

**Definition**: The process by which a gateway finds and evaluates available orchestrators — either automatically via the on-chain ServiceRegistry or manually via configured `-orchAddr` flags.
**Context**: On-chain gateways use the ServiceRegistry contract on Arbitrum to discover registered orchestrators and their service URIs. Off-chain gateways bypass discovery and connect directly to specified addresses.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/routing`, `gateways/architecture`

---

### Per-Pixel Pricing

**Definition**: A cost model charging for transcoding work based on the total number of pixels processed (width × height × frame count), enabling standardized comparison across resolutions.
**External**: [Pay-per-pixel (Livepeer Forum)](https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197)
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/transcoding`

---

### Per-Request Pricing

**Definition**: A cost model charging per individual AI inference request rather than per pixel, used for AI pipeline jobs where pixel count is not a meaningful unit.
**External**: [Livepeer AI pipelines](https://docs.livepeer.org/ai/pipelines/audio-to-text)
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/pipelines`

---

### Pipeline

**Definition**: A configured end-to-end AI processing workflow defining input type, model, and output, routed by the gateway to capable orchestrators.
**Context**: On Livepeer, a pipeline is the combination of a pipeline type (e.g., text-to-image, live-video-to-video) and a specific model ID. Gateways match incoming AI requests to orchestrators advertising the corresponding capability.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### Probabilistic Micropayments

**Definition**: A lottery-based payment mechanism where gateways send signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortizing gas costs across many transactions.
**Context**: Probabilistic micropayments are the core payment layer for Livepeer. The gateway manages ticket issuance and ensures the deposit and reserve on the TicketBroker contract are sufficient to cover expected redemptions.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Profile

**Definition**: An output specification defining a single transcoding rendition: resolution, bitrate, codec, and frame rate.
**External**: [Output profile (Wikipedia)](https://en.wikipedia.org/wiki/Advanced_Video_Coding)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/config`

---

### Protocol Layer

**Definition**: The on-chain layer on Arbitrum governing staking, delegation, rewards, orchestrator registration, and payment verification via smart contracts.
**Context**: Gateways interact with the protocol layer when operating in on-chain mode — reading orchestrator registrations from the ServiceRegistry, submitting deposits to the TicketBroker, and settling payments through probabilistic ticket redemption.
**Tags**: `livepeer:protocol`, `web3:chain`
**Status**: current
**Pages**: `gateways/protocol`, `gateways/architecture`

---

### Redemption

**Definition**: The on-chain process of cashing in a winning probabilistic micropayment ticket for its face value in ETH via the TicketBroker contract.
**Context**: Orchestrators (or their redeemer process) submit winning tickets to TicketBroker to claim ETH. The gateway's deposit and reserve fund these redemptions. High redemption frequency relative to deposit size is a signal to top up.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/protocol`

---

### Remote Signer

**Definition**: A separate service that holds an Ethereum private key and signs payment tickets on behalf of an off-chain gateway, so the gateway itself holds no ETH.
**Context**: A community-hosted remote signer at signer.eliteencoder.net is publicly available and free to use for off-chain gateways. Custom remote signers can be built using any language that implements the signing API, enabling SDK-based gateway deployments.
**Tags**: `technical:security`
**Status**: current
**Pages**: `gateways/security`, `gateways/config`

---

### Rendition

**Definition**: A single encoded version of a source video at a specific resolution, bitrate, and codec configuration, produced by an orchestrator.
**External**: [Video rendition (Cloudinary)](https://cloudinary.com/glossary/video-rendition)
**Tags**: `video:processing`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/encoding`

---

### Reserve

**Definition**: ETH held as collateral in the TicketBroker contract backing outstanding probabilistic payment tickets; used if the gateway's deposit is depleted.
**Context**: An on-chain gateway must fund both a deposit (normal operating balance) and a reserve (safety backstop). The reserve prevents orchestrators from being left unpaid if the deposit runs out between top-ups.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`

---

### Real-Time Messaging Protocol (RTMP)

**Definition**: A protocol for streaming audio, video, and data over TCP on port 1935, commonly used for live video ingest from encoders such as OBS into a media server.
**Also known as**: RTMP
**External**: [RTMP (Wikipedia)](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `gateways/ingest`, `gateways/streaming`

---

### Scaling

**Definition**: Increasing gateway capacity to handle more concurrent requests, either horizontally (deploying additional gateway nodes) or vertically (adding resources to an existing node).
**External**: [Scalability (Wikipedia)](https://en.wikipedia.org/wiki/Scalability)
**Tags**: `operational:process`
**Status**: current
**Pages**: `gateways/architecture`, `gateways/operations`

---

### Segment

**Definition**: A time-sliced chunk of multiplexed audio and video independently submitted to an orchestrator for transcoding in parallel with other segments.
**External**: [HTTP Live Streaming segments (Wikipedia)](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:processing`, `livepeer:protocol`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/protocol`

---

### Service Margin

**Definition**: A markup that gateway operators add on top of orchestrator costs when reselling gateway access to end users.
**Context**: Gateway operators running NaaP or gateway-as-a-service offerings use a service margin to cover infrastructure, development, and operational overhead while remaining price-competitive with direct orchestrator costs.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/economics`

---

### ServiceRegistry

**Definition**: A smart contract on Arbitrum where orchestrators register their service URI so that on-chain gateways can discover and contact them.
**Context**: The ServiceRegistry is the on-chain source of truth for orchestrator endpoints. On-chain gateways query it at startup and during session establishment; off-chain gateways bypass it entirely by using `-orchAddr`.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `gateways/protocol`, `gateways/contracts`

---

### Session

**Definition**: An active, persistent connection between a gateway and an orchestrator during which one or more jobs (segments or AI requests) are processed.
**Context**: Gateways reuse sessions across segments to amortize connection setup overhead. Session affinity improves performance by keeping warm models loaded on the orchestrator; the BroadcastSessionsManager handles session lifecycle.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `gateways/routing`, `gateways/architecture`

---

### Settlement

**Definition**: The on-chain finalization of off-chain payment obligations via ticket redemption through the TicketBroker contract.
**Context**: Settlement occurs when an orchestrator redeems a winning ticket, converting the probabilistic payment into an actual ETH transfer. The gateway's deposit funds these settlements; the reserve backstops them.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `gateways/payments`

---

### Signer

**Definition**: The cryptographic key holder or process that authorizes payment tickets and Ethereum transactions on behalf of a gateway node.
**Context**: In an on-chain gateway, the signer is typically a local keystore file. In an off-chain gateway, signing is delegated to a remote signer service. The signer never needs to hold large ETH balances in the off-chain model.
**Tags**: `technical:security`
**Status**: current
**Pages**: `gateways/security`, `gateways/config`

---

### TicketBroker

**Definition**: The smart contract on Arbitrum that manages the probabilistic micropayment system — holding gateway deposits and reserves, and processing winning ticket redemptions.
**Context**: TicketBroker is the payment settlement layer every on-chain gateway interacts with. Gateways fund it via deposit and reserve; orchestrators redeem winning tickets through it. Off-chain gateways use a remote signer pointing to the same contract.
**Tags**: `livepeer:contract`, `economic:payment`
**Status**: current
**Pages**: `gateways/payments`, `gateways/contracts`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of a video stream from one encoding format, resolution, or bitrate to one or more output renditions for adaptive delivery.
**External**: [Transcoding (Wikipedia)](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `gateways/transcoding`, `gateways/index`

---

### USD Pricing

**Definition**: A pricing configuration where work costs are denominated in US dollars, with automatic dynamic conversion to wei as the ETH/USD exchange rate fluctuates.
**Context**: USD pricing shields gateway operators from ETH price volatility. The gateway (or an external price feed integration) queries an ETH/USD oracle and adjusts the wei-denominated MaxPrice accordingly, keeping spend stable in fiat terms.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `gateways/pricing`, `gateways/config`

---

### Warm Model

**Definition**: An AI model that is already loaded into GPU memory on an orchestrator and ready to serve inference requests immediately, without cold-start latency.
**External**: [Cold start latency (OpenMetal)](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `gateways/pipelines`, `gateways/routing`

---

### Webhook

**Definition**: An HTTP callback that sends a POST request to a configured URL when a gateway event occurs, notifying external systems in real time.
**External**: [Webhook (Wikipedia)](https://en.wikipedia.org/wiki/Webhook)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `gateways/events`, `gateways/config`

---

### Weight Factors

**Definition**: Configurable scoring parameters — including stake weight, price weight, and random selection weight — that the gateway uses to rank and select orchestrators during discovery.
**Context**: Weight factors (e.g., `selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`) let gateway operators tune the trade-off between cost, decentralization, and performance in orchestrator selection. Adjusting these requires understanding their interaction with the scoring algorithm.
**Tags**: `livepeer:config`
**Status**: current
**Pages**: `gateways/routing`, `gateways/discovery`

---

### Wei

**Definition**: The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in on-chain price calculations and payment ticket values.
**External**: [Ether denominations (ethereum.org)](https://ethereum.org/glossary/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `gateways/payments`, `gateways/pricing`
