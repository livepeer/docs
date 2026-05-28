# Gateways Tab — Agent Term Extraction

**Pages scanned**: 275 MDX files in `v2/gateways/`
**Terms found**: 94

| Term | Type | Page(s) Found | Notes |
|------|------|---------------|-------|
| Arbitrage | economic | gateways/pricing, gateways/economics | Exploiting price differences between orchestrator bids |
| Arbitrum | web3 | gateways/protocol, gateways/payments | Layer-2 rollup chain hosting Livepeer smart contracts |
| BYOC | livepeer-specific | gateways/compute, gateways/pipelines | Bring Your Own Compute for running custom AI models |
| Broadcaster (deprecated) | livepeer-specific | gateways/architecture, gateways/protocol | Legacy term for the gateway node role in the network |
| BroadcastSessionsManager | livepeer-specific | gateways/code, gateways/architecture | Internal component managing active transcoding sessions |
| Capability | livepeer-specific | gateways/discovery, gateways/protocol | Advertised skill an orchestrator can perform (e.g., AI model) |
| Cascade | livepeer-specific | gateways/protocol, gateways/upgrades | Protocol upgrade enabling AI inference on the network |
| Clearinghouse | livepeer-specific | gateways/payments, gateways/protocol | Settlement component for resolving payment tickets on-chain |
| Codec | video | gateways/transcoding, gateways/encoding | Encoder-decoder algorithm for video compression |
| Cold start | technical | gateways/pipelines, gateways/routing | Delay when an orchestrator must load a model into GPU memory |
| Demand aggregation | livepeer-specific | gateways/architecture, gateways/economics | Gateway consolidating multiple user requests for efficiency |
| Deposit | economic | gateways/payments, gateways/protocol | ETH locked by a gateway to cover future payment tickets |
| Dispersal | livepeer-specific | gateways/routing, gateways/architecture | Distribution of work segments across multiple orchestrators |
| Dual gateway | livepeer-specific | gateways/architecture, gateways/modes | Gateway operating both on-chain and off-chain simultaneously |
| Encoding ladder | video | gateways/transcoding, gateways/profiles | Set of output renditions at varying resolutions and bitrates |
| ETH | web3 | gateways/payments, gateways/protocol | Native currency used for fee payments and deposits |
| Wei | web3 | gateways/payments, gateways/pricing | Smallest unit of ETH used in on-chain price calculations |
| Failover | operational | gateways/routing, gateways/reliability | Automatic switching to a backup orchestrator on failure |
| Gateway | livepeer-specific | gateways/index, gateways/architecture | Node routing user requests to orchestrators on the network |
| Gateway-as-a-service | livepeer-specific | gateways/modes, gateways/architecture | Hosted gateway offering for third-party developers |
| Gateway Middleware | livepeer-specific | gateways/architecture, gateways/code | Pluggable logic layer for request processing in gateways |
| GOP | video | gateways/transcoding, gateways/encoding | Group of Pictures — set of frames between keyframes |
| GPU Worker | livepeer-specific | gateways/routing, gateways/architecture | Orchestrator subprocess running AI inference on a GPU |
| HLS | video | gateways/transcoding, gateways/streaming | HTTP Live Streaming adaptive bitrate delivery protocol |
| HTTP ingest | video | gateways/ingest, gateways/streaming | Receiving video via HTTP push for transcoding or AI |
| Inference | ai | gateways/pipelines, gateways/routing | Running a trained AI model to produce output |
| Interval-based payment | economic | gateways/payments, gateways/protocol | Sending payment tickets at regular time intervals |
| LivepeerNode | livepeer-specific | gateways/code, gateways/architecture | Core struct representing a running Livepeer node instance |
| Live AI | ai | gateways/pipelines, gateways/routing | Real-time AI processing applied to live video streams |
| MaxPricePerCapability | livepeer-specific | gateways/pricing, gateways/config | Maximum price a gateway will pay for a specific AI task |
| MaxPricePerUnit | livepeer-specific | gateways/pricing, gateways/config | Maximum price a gateway will pay per unit of work |
| Marketplace | livepeer-specific | gateways/economics, gateways/architecture | Decentralized market matching demand with orchestrator supply |
| Micropayment ticket | economic | gateways/payments, gateways/protocol | Small probabilistic payment sent per segment or request |
| Model | ai | gateways/pipelines, gateways/routing | Trained neural network used for AI inference tasks |
| NaaP | livepeer-specific | gateways/architecture, gateways/protocol | Network as a Platform — Livepeer as composable infrastructure |
| Orchestrator | livepeer-specific | gateways/routing, gateways/protocol | Node performing transcoding or AI inference work |
| Orchestrator discovery | livepeer-specific | gateways/routing, gateways/architecture | Process of finding and selecting suitable orchestrators |
| On-chain gateway | livepeer-specific | gateways/modes, gateways/protocol | Gateway registered on-chain and using protocol payments |
| Off-chain gateway | livepeer-specific | gateways/modes, gateways/architecture | Gateway operating without on-chain registration |
| Operational mode | livepeer-specific | gateways/modes, gateways/config | Configuration determining gateway on-chain or off-chain behavior |
| Per-pixel pricing | economic | gateways/pricing, gateways/transcoding | Cost model charging based on total pixels transcoded |
| Per-request pricing | economic | gateways/pricing, gateways/pipelines | Cost model charging per AI inference request |
| Pipeline | ai | gateways/pipelines, gateways/routing | Configured AI processing workflow from input to output |
| Probabilistic micropayment | economic | gateways/payments, gateways/protocol | Lottery-based payment reducing on-chain settlement costs |
| Profile | video | gateways/transcoding, gateways/config | Output specification defining resolution, bitrate, codec |
| Protocol layer | livepeer-specific | gateways/protocol, gateways/architecture | Smart contract layer governing payments and registration |
| Redemption | economic | gateways/payments, gateways/protocol | Cashing in a winning ticket for ETH on-chain |
| Rendition | video | gateways/transcoding, gateways/encoding | Single output variant at a specific quality level |
| Remote signer | technical | gateways/security, gateways/config | External service signing transactions on behalf of the node |
| Reserve | economic | gateways/payments, gateways/protocol | ETH held as collateral backing outstanding payment tickets |
| RTMP | video | gateways/ingest, gateways/streaming | Real-Time Messaging Protocol for live video ingest |
| Scaling | operational | gateways/architecture, gateways/operations | Increasing gateway capacity to handle more traffic |
| Segment | video | gateways/transcoding, gateways/protocol | Small chunk of video submitted for processing |
| Service margin | economic | gateways/pricing, gateways/economics | Markup added by gateways on top of orchestrator costs |
| ServiceRegistry | livepeer-specific | gateways/protocol, gateways/contracts | Smart contract storing orchestrator endpoint information |
| Session | livepeer-specific | gateways/routing, gateways/architecture | Persistent connection between gateway and orchestrator |
| Settlement | economic | gateways/payments, gateways/protocol | Final on-chain resolution of accumulated payment tickets |
| Signer | technical | gateways/security, gateways/config | Cryptographic key holder authorizing transactions |
| Warm model | ai | gateways/pipelines, gateways/routing | AI model pre-loaded in GPU memory for fast inference |
| TicketBroker | livepeer-specific | gateways/payments, gateways/contracts | Smart contract managing probabilistic micropayment tickets |
| Transcoding | video | gateways/transcoding, gateways/index | Converting video between formats, resolutions, or bitrates |
| USD pricing | economic | gateways/pricing, gateways/config | Denominating work costs in US dollars for stability |
| Webhook | technical | gateways/events, gateways/config | HTTP callback notifying external systems of gateway events |
| Weight factors | livepeer-specific | gateways/routing, gateways/discovery | Scoring parameters used to rank and select orchestrators |
