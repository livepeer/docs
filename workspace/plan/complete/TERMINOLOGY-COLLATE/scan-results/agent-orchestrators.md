# Orchestrators Tab — Agent Term Extraction

**Pages scanned**: 87 MDX files in `v2/orchestrators/`
**Terms found**: ~150

| Term | Type | Page(s) Found | Notes |
|------|------|---------------|-------|
| Active set | livepeer-specific | orchestrators/staking, orchestrators/protocol | Top orchestrators eligible to receive work each round |
| AI inference | ai | orchestrators/ai, orchestrators/pipelines | Running trained models to produce output on GPU hardware |
| AIServiceRegistry | livepeer-specific | orchestrators/ai, orchestrators/contracts | On-chain registry of AI capabilities offered by orchestrators |
| AI runner | livepeer-specific | orchestrators/ai, orchestrators/setup | Software component executing AI model inference tasks |
| aiModels.json | livepeer-specific | orchestrators/ai, orchestrators/config | Configuration file listing supported AI models and settings |
| aiWorker | livepeer-specific | orchestrators/ai, orchestrators/architecture | Subprocess handling AI inference on a dedicated GPU |
| Arbitrum | web3 | orchestrators/protocol, orchestrators/staking | Layer-2 rollup chain hosting Livepeer smart contracts |
| Audio-to-text | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline transcribing spoken audio into text output |
| Batch AI inference | ai | orchestrators/ai, orchestrators/pipelines | Processing multiple AI requests together for efficiency |
| BLIP | ai | orchestrators/pipelines, orchestrators/ai | Vision-language model for image captioning and QA tasks |
| BondingManager | livepeer-specific | orchestrators/contracts, orchestrators/staking | Smart contract managing stake bonding and delegation |
| Bonding | economic | orchestrators/staking, orchestrators/protocol | Locking LPT to an orchestrator to participate in the network |
| BYOC | livepeer-specific | orchestrators/compute, orchestrators/ai | Bring Your Own Compute for running custom AI models |
| Capability advertisement | livepeer-specific | orchestrators/discovery, orchestrators/ai | Broadcasting supported tasks and models to gateways |
| Capability matching | livepeer-specific | orchestrators/discovery, orchestrators/routing | Selecting orchestrators whose capabilities fit the request |
| Cascade | livepeer-specific | orchestrators/protocol, orchestrators/upgrades | Protocol upgrade enabling AI inference on the network |
| CLI | technical | orchestrators/setup, orchestrators/config | Command-line interface for configuring and running nodes |
| Clearinghouse | livepeer-specific | orchestrators/payments, orchestrators/protocol | Settlement component resolving payment tickets on-chain |
| Cold start | technical | orchestrators/ai, orchestrators/performance | Delay when loading an AI model not yet in GPU memory |
| Cold model | ai | orchestrators/ai, orchestrators/performance | AI model not currently loaded, requiring load time |
| ComfyStream | ai | orchestrators/ai, orchestrators/pipelines | Streaming integration for ComfyUI diffusion workflows |
| ComfyUI | ai | orchestrators/ai, orchestrators/pipelines | Node-based UI for building diffusion processing workflows |
| ControlNet | ai | orchestrators/pipelines, orchestrators/ai | Neural network adding spatial control to diffusion models |
| CUDA | technical | orchestrators/setup, orchestrators/ai | NVIDIA parallel computing platform for GPU programming |
| Daydream | livepeer-specific | orchestrators/ai, orchestrators/use-cases | Real-time interactive AI video generation project |
| Delegator | livepeer-specific | orchestrators/staking, orchestrators/protocol | LPT holder bonding stake to an orchestrator |
| Diffusion | ai | orchestrators/pipelines, orchestrators/ai | Neural network technique generating content from noise |
| Dual mode | livepeer-specific | orchestrators/modes, orchestrators/config | Running transcoding and AI inference simultaneously |
| ETH | web3 | orchestrators/payments, orchestrators/staking | Native currency used for fee payments on the network |
| Face value | economic | orchestrators/payments, orchestrators/protocol | Expected payout value of a probabilistic payment ticket |
| Fee cut | economic | orchestrators/staking, orchestrators/economics | Percentage of earned fees retained by the orchestrator |
| Fee pool | economic | orchestrators/staking, orchestrators/protocol | Accumulated fees awaiting distribution to delegators |
| Gateway | livepeer-specific | orchestrators/architecture, orchestrators/routing | Node routing user requests to orchestrators |
| GPU worker | livepeer-specific | orchestrators/ai, orchestrators/architecture | Subprocess running AI inference on a dedicated GPU |
| gRPC | technical | orchestrators/architecture, orchestrators/code | Remote procedure call framework for node communication |
| go-livepeer | livepeer-specific | orchestrators/setup, orchestrators/code | Go implementation of the Livepeer node software |
| Hard gate | livepeer-specific | orchestrators/ai, orchestrators/config | Strict filter rejecting jobs below a minimum price |
| HLS | video | orchestrators/transcoding, orchestrators/streaming | HTTP Live Streaming adaptive bitrate delivery protocol |
| Inflation | economic | orchestrators/staking, orchestrators/economics | New LPT minted each round to incentivize participation |
| Image-to-image | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline transforming an input image into a new image |
| Image-to-text | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline generating text description from an image |
| Image-to-video | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline generating video frames from a still image |
| LIP-89 | livepeer-specific | orchestrators/protocol, orchestrators/upgrades | Proposal for AI service capability advertisement |
| LIP-91 | livepeer-specific | orchestrators/protocol, orchestrators/upgrades | Proposal for AI inference pricing and payments |
| LIP-92 | livepeer-specific | orchestrators/protocol, orchestrators/upgrades | Proposal for AI model registry and discovery |
| Live-video-to-video | ai | orchestrators/pipelines, orchestrators/ai | Real-time AI transformation of a live video stream |
| LLM | ai | orchestrators/pipelines, orchestrators/ai | Large Language Model for text generation and reasoning |
| LPT | livepeer-specific | orchestrators/staking, orchestrators/protocol | Native utility and staking token of the protocol |
| Loki | technical | orchestrators/monitoring, orchestrators/operations | Log aggregation system used for orchestrator monitoring |
| MaxPrice | livepeer-specific | orchestrators/pricing, orchestrators/config | Maximum price per unit an orchestrator will accept |
| Micropayment | economic | orchestrators/payments, orchestrators/protocol | Small incremental payment for completed work units |
| PM | economic | orchestrators/payments, orchestrators/protocol | Probabilistic Micropayment — lottery-based payment scheme |
| Model warmth | ai | orchestrators/ai, orchestrators/performance | Status indicating whether a model is loaded in GPU memory |
| NVDEC | technical | orchestrators/transcoding, orchestrators/setup | NVIDIA hardware video decoder for GPU transcoding |
| NVENC | technical | orchestrators/transcoding, orchestrators/setup | NVIDIA hardware video encoder for GPU transcoding |
| O-T split | livepeer-specific | orchestrators/architecture, orchestrators/config | Orchestrator-Transcoder split mode for distributed work |
| Orchestrator | livepeer-specific | orchestrators/index, orchestrators/protocol | Node coordinating and performing video or AI work |
| OrchestratorInfo | livepeer-specific | orchestrators/code, orchestrators/protocol | Data structure describing orchestrator capabilities and pricing |
| orchSecret | livepeer-specific | orchestrators/config, orchestrators/security | Shared secret authenticating communication between O and T |
| Ollama | ai | orchestrators/pipelines, orchestrators/ai | Local LLM runner for text and chat inference tasks |
| Output profile | video | orchestrators/transcoding, orchestrators/config | Specification defining rendition resolution and bitrate |
| Overhead | operational | orchestrators/performance, orchestrators/economics | Additional cost beyond raw compute for running a node |
| Performance score | livepeer-specific | orchestrators/discovery, orchestrators/performance | Metric rating orchestrator reliability and speed |
| Pixel | video | orchestrators/transcoding, orchestrators/pricing | Single point in a video frame used as a pricing unit |
| pixelsPerUnit | livepeer-specific | orchestrators/pricing, orchestrators/config | Number of pixels constituting one billable work unit |
| Pool | livepeer-specific | orchestrators/architecture, orchestrators/operations | Group of machines operated together as one orchestrator |
| Pool operator | livepeer-specific | orchestrators/architecture, orchestrators/operations | Entity managing a multi-machine orchestrator pool |
| Pool worker | livepeer-specific | orchestrators/architecture, orchestrators/operations | Individual machine within an orchestrator pool |
| Price feed | livepeer-specific | orchestrators/pricing, orchestrators/config | External data source providing ETH/USD exchange rates |
| pricePerCapability | livepeer-specific | orchestrators/pricing, orchestrators/ai | Price charged for a specific AI inference capability |
| pricePerGateway | livepeer-specific | orchestrators/pricing, orchestrators/config | Custom pricing set for a specific gateway partner |
| pricePerUnit | livepeer-specific | orchestrators/pricing, orchestrators/config | Price charged per unit of transcoding work |
| Redeemer | livepeer-specific | orchestrators/payments, orchestrators/protocol | Service cashing in winning payment tickets for ETH |
| Rendition | video | orchestrators/transcoding, orchestrators/encoding | Single output variant at a specific quality level |
| Reward call | livepeer-specific | orchestrators/staking, orchestrators/protocol | On-chain transaction claiming inflationary LPT rewards |
| Reward cut | economic | orchestrators/staking, orchestrators/economics | Percentage of inflationary rewards kept by the orchestrator |
| RoundsManager | livepeer-specific | orchestrators/contracts, orchestrators/protocol | Smart contract tracking round progression and initialization |
| Segment | video | orchestrators/transcoding, orchestrators/protocol | Small chunk of video submitted for processing |
| Segmentation | ai | orchestrators/pipelines, orchestrators/ai | AI task identifying and outlining objects in an image |
| ServiceRegistry | livepeer-specific | orchestrators/contracts, orchestrators/protocol | Smart contract storing orchestrator endpoint information |
| Service URI | livepeer-specific | orchestrators/config, orchestrators/protocol | Public endpoint URL where the orchestrator accepts work |
| Session | livepeer-specific | orchestrators/routing, orchestrators/architecture | Persistent connection between gateway and orchestrator |
| Siphon | livepeer-specific | orchestrators/architecture, orchestrators/routing | Component directing work to the correct processing path |
| Slashing | economic | orchestrators/protocol, orchestrators/staking | Penalty mechanism for orchestrator misbehavior |
| Smoke test | operational | orchestrators/ai, orchestrators/testing | Quick validation that an AI pipeline is working correctly |
| Solo operator | livepeer-specific | orchestrators/modes, orchestrators/setup | Single-machine orchestrator without pool workers |
| Stable Diffusion | ai | orchestrators/pipelines, orchestrators/ai | Open-source text-to-image diffusion model family |
| Stake weight | economic | orchestrators/staking, orchestrators/protocol | Influence proportional to total bonded LPT stake |
| StreamDiffusion | ai | orchestrators/pipelines, orchestrators/ai | Real-time diffusion pipeline optimized for live video |
| Subgraph | web3 | orchestrators/protocol, orchestrators/data | GraphQL indexer for querying Livepeer on-chain data |
| Text-to-image | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline generating an image from a text prompt |
| Text-to-speech | ai | orchestrators/pipelines, orchestrators/ai | AI pipeline synthesizing spoken audio from text input |
| TicketBroker | livepeer-specific | orchestrators/payments, orchestrators/contracts | Smart contract managing probabilistic payment tickets |
| Throughput | operational | orchestrators/performance, orchestrators/benchmarks | Volume of work an orchestrator can process per time unit |
| Titan Node | livepeer-specific | orchestrators/setup, orchestrators/hardware | Pre-configured hardware node for running orchestrators |
| Transcoding | video | orchestrators/transcoding, orchestrators/index | Converting video between formats, resolutions, or bitrates |
| Transcode fail rate | operational | orchestrators/performance, orchestrators/monitoring | Percentage of transcoding jobs that fail or error out |
| Treasury | economic | orchestrators/governance, orchestrators/protocol | On-chain fund for ecosystem grants and development |
| Upscale | ai | orchestrators/pipelines, orchestrators/ai | Increasing video or image resolution using AI models |
| USD pricing | economic | orchestrators/pricing, orchestrators/config | Denominating work costs in US dollars for stability |
| VRAM | technical | orchestrators/ai, orchestrators/hardware | Video RAM on GPU used for loading AI model weights |
| Webhook discovery | livepeer-specific | orchestrators/discovery, orchestrators/config | Using webhooks to dynamically advertise capabilities |
| Wei | web3 | orchestrators/pricing, orchestrators/payments | Smallest unit of ETH used in on-chain calculations |
| Whisper | ai | orchestrators/pipelines, orchestrators/ai | OpenAI speech recognition model for audio-to-text |
| Win probability | economic | orchestrators/payments, orchestrators/protocol | Chance a given micropayment ticket is a winning ticket |
| Winning ticket | economic | orchestrators/payments, orchestrators/protocol | Probabilistic ticket redeemable for ETH on-chain |
| Workload | operational | orchestrators/performance, orchestrators/operations | Total amount of work assigned to an orchestrator |
| Yield | economic | orchestrators/staking, orchestrators/economics | Return earned from staking LPT and performing work |
