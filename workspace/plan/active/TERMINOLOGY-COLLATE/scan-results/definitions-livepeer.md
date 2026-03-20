# Livepeer Domain — Definitions & Sources

## livepeer:protocol

| Term | Definition | Source URL |
|---|---|---|
| Active set | The top 100 orchestrators by total stake eligible to receive work and earn rewards each round. | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT |
| Active set election | The process at the start of each round determining the top 100 orchestrators by bonded stake for that round. | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT |
| Capability | An AI service or job type (pipeline/model pair) that an orchestrator can perform. | https://docs.livepeer.org/ai/introduction |
| Capability advertisement | The mechanism by which orchestrators inform gateways of their available AI services, models, and pipelines. | https://forum.livepeer.org/t/ai-capability-discovery/3233 |
| Capability matching | The process by which a gateway routes an AI task to an appropriate orchestrator based on advertised capabilities. | https://docs.livepeer.org/ai/introduction |
| Decentralized GPU Network | A marketplace of GPUs contributed by orchestrators worldwide, coordinated through crypto-economic incentives for transcoding and AI inference. | https://docs.livepeer.org/ai/introduction |
| Execution layer | The layer where actual compute work (transcoding, AI inference) is performed by orchestrators and workers, distinct from the on-chain protocol layer. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Inflation | Dynamic issuance of new LPT each round, distributed to orchestrators and delegators; rate adjusts based on the 50% participation target. | https://forum.livepeer.org/t/inflation-focused-lip-discussion-thread/2753 |
| Job | A unit of work submitted to the network — a request specifying stream ID, transcoding options or AI pipeline, and price. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Job lifecycle | The sequence from job submission through orchestrator selection, work execution, verification, and payment settlement. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Livepeer Network | The live operational decentralized system of orchestrators, workers, gateways, and broadcasters performing real-time video and AI compute. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Livepeer Protocol | The on-chain ruleset and smart contract logic governing staking, delegation, inflation, rewards, orchestrator selection, slashing, and payments. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| LPT | The Livepeer Token, an ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security. | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT |
| Operational Mode Asymmetry | The difference in operational requirements between gateways (submit/pay for jobs) and orchestrators (perform work/earn rewards). | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| On-chain Treasury | A protocol-governed pool of LPT funded by inflation, from which community-approved proposals receive funding for ecosystem development. | https://forum.livepeer.org/t/its-time-to-act-accumulation-the-treasury-ceiling/3153/1 |
| Protocol | The on-chain governance and incentive layer coordinating orchestrators, staking rewards, inflation, slashing, and payments. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Protocol Actor | A main participant performing a core function: gateways, orchestrators, and delegators. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Protocol Layer | The on-chain layer governing staking, delegation, rewards, and verification via smart contracts on Arbitrum. | https://docs.livepeer.org/references/contract-addresses |
| Network Layer | The off-chain operational layer performing transcoding, AI inference, and job routing among orchestrators and gateways. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Reputation | A measure of orchestrator performance, reliability, and trustworthiness influencing job routing and payment priority. | https://github.com/livepeer/go-livepeer/issues/1802 |
| Reward call | An on-chain transaction an active orchestrator submits each round to mint and distribute newly created LPT rewards. | https://docs.livepeer.org/orchestrators/guides/configure-reward-calling |
| Round | A discrete time interval (in Ethereum/Arbitrum blocks) for calculating staking rewards and coordinating global protocol state. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Segment | A time-sliced chunk of multiplexed audio and video independently transcoded for parallel processing. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Session | An active connection between a gateway and orchestrator during which one or more jobs are processed. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Slashing | A penalty mechanism destroying a portion of an orchestrator's bonded LPT for protocol violations. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Slashing Conditions | Network-defined rules for when LPT is slashed: failing verification, not invoking verifications, or not performing proportional work. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Verification mechanisms | Protocol-level processes (including Truebit-style verification) confirming orchestrators performed work correctly. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Verifier | A network component validating work performed by orchestrators, checking results against expected outputs. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Video DNA | A verification technique comparing a fingerprint of transcoded video output against the source to detect tampering. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |

## livepeer:role

| Term | Definition | Source URL |
|---|---|---|
| Broadcaster (deprecated) | Legacy term for a node that publishes streams and submits video for transcoding; now replaced by "Gateway." | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Delegator | A token holder who stakes LPT to an orchestrator to help secure the network, participate in governance, and earn rewards. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Developer | Anyone building applications using Livepeer, typically through hosted services or SDKs. | https://docs.livepeer.org/developers/introduction |
| Gateway | A Livepeer node that submits jobs, routes work to orchestrators, manages payment flows, and provides a direct protocol interface. | https://docs.livepeer.org/ai/gateways/start-gateway |
| Gateway operator | A person or organisation running and maintaining gateway nodes for network access. | https://docs.livepeer.org/ai/builders/gateways |
| GPU operator | An orchestrator operator contributing GPU resources for transcoding or AI inference. | https://docs.livepeer.org/ai/introduction |
| Livepeer Actor | A participant in the protocol or network performing a defined role. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Network Participant | Any entity actively engaging with the Livepeer protocol or network. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Orchestrator | A supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Transcoder (Worker) | A worker process performing actual compute work such as video transcoding or AI inference. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Worker | A node running Docker containers for AI models, executing compute tasks delegated by an orchestrator. | https://docs.livepeer.org/v2/about/livepeer-network/overview |

## livepeer:product

| Term | Definition | Source URL |
|---|---|---|
| ComfyStream | A ComfyUI custom node running real-time media workflows for AI-powered video and audio processing on live streams. | https://github.com/livepeer/comfystream |
| Daydream | Livepeer's hosted realtime AI video platform turning live camera input into AI-transformed visuals with sub-second latency. | https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/ |
| Developer Platform | An abstraction layer providing tools and services for building on Livepeer (Studio, Daydream, Streamplace). | https://docs.livepeer.org/developers/introduction |
| Developer Stack | The set of SDKs, APIs, UI components, and hosted services for integrating video and AI capabilities. | https://docs.livepeer.org/developers/introduction |
| Embody | An SPE bringing embodied avatar workloads (Live2D, Three.js, Unreal) into Livepeer as intelligent public pipelines. | https://forum.livepeer.org/t/embody-spe-pre-proposal-intelligent-public-pipelines/3220 |
| Frameworks | A product by the MistServer team bridging Livepeer's transcoding infrastructure and real-world applications. | https://forum.livepeer.org/t/pre-proposal-livepeer-frameworks-spe-pilot-phase/2773 |
| Livepeer Cloud | A platform by the Livepeer Cloud SPE increasing network accessibility, offering a free community AI gateway. | https://forum.livepeer.org/t/livepeer-cloud-spe-proposal-draft/2235 |
| Livepeer Studio | A developer platform for adding live and on-demand video experiences to apps with stream management and billing. | https://docs.livepeer.org/developers/introduction |
| Livepeer.js | A JavaScript library for the Livepeer API providing programmatic access to Studio features. | https://github.com/livepeer/livepeer-js |
| NaaP | Network-as-a-Product, delivering the Livepeer Network as a reliable product with SLAs and improved selection algorithms. | https://forum.livepeer.org/t/metrics-and-sla-foundations-for-naap/3189 |
| Streamplace | A project building the video layer for decentralized social platforms, focused on the AT Protocol ecosystem. | https://forum.livepeer.org/t/streamplace-2-0-solving-video-for-everybody-forever/2847 |

## livepeer:upgrade

| Term | Definition | Source URL |
|---|---|---|
| Cascade | A strategic vision for Livepeer to become the leading platform for real-time AI video pipelines. | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ |
| Confluence | The production upgrade (LIP-73) migrating Livepeer's core protocol from Ethereum L1 to Arbitrum One. | https://forum.livepeer.org/t/pre-proposal-confluence-protocol-upgrade/1482 |
| Confluent upgrade | Alternate name for the Confluence upgrade deploying protocol contracts to Arbitrum Mainnet. | https://github.com/livepeer/protocol/tree/confluence |
| Delta upgrade | A planned future phase focused on full decentralization with Truebit-based verification. | https://github.com/livepeer/wiki/wiki/Roadmap |
| Snowmelt | The alpha phase where the protocol was designed and incentives implemented, culminating in testnet launch. | https://github.com/livepeer/wiki/wiki/Roadmap |
| Streamflow | The performance phase introducing peer-to-peer distribution, WebRTC support, and the Orchestrator/Transcoder split. | https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md |
| Tributary | The beta phase where LPMS supported most live streaming use cases and mainnet was deployed. | https://github.com/livepeer/wiki/wiki/Roadmap |

## livepeer:contract

| Term | Definition | Source URL |
|---|---|---|
| AIServiceRegistry | Smart contract registering AI service capabilities for orchestrators on the Livepeer AI network. | https://docs.livepeer.org/references/contract-addresses |
| BondingManager | Core contract managing bonding, delegation, staking logic, and fund ownership for orchestrators and delegators. | https://docs.livepeer.org/references/contract-addresses |
| BondingVotes | Contract tracking stake-weighted voting power for on-chain governance polls on Arbitrum L2. | https://docs.livepeer.org/references/contract-addresses |
| Controller | Registry contract managing all protocol contract addresses and coordinating upgrades. | https://docs.livepeer.org/references/contract-addresses |
| Governor / LivepeerGovernor | Governance contract authorizing protocol upgrades and parameter changes via token-weighted voting. | https://docs.livepeer.org/references/contract-addresses |
| L1 Escrow | Ethereum mainnet contract holding LPT in escrow during cross-chain bridging to Arbitrum. | https://docs.livepeer.org/references/contract-addresses |
| L2LPTGateway | Bridge contract on Arbitrum enabling LPT transfers between Ethereum L1 and Arbitrum L2. | https://github.com/livepeer/arbitrum-lpt-bridge/blob/main/contracts/L2/gateway/L2LPTGateway.sol |
| Minter contract | Contract responsible for minting new LPT during reward calls and holding ETH from winning tickets. | https://docs.livepeer.org/references/contract-addresses |
| RoundsManager | Contract tracking round progression and coordinating round-based protocol state. | https://docs.livepeer.org/references/contract-addresses |
| ServiceRegistry | Contract where orchestrators register their service URI for gateway discovery. | https://docs.livepeer.org/references/contract-addresses |
| TicketBroker | Contract managing Livepeer's probabilistic micropayment system, holding funds and processing winning tickets. | https://docs.livepeer.org/references/contract-addresses |

## livepeer:config

| Term | Definition | Source URL |
|---|---|---|
| aiModels.json | JSON configuration file specifying available AI models for an orchestrator including pipeline type, model ID, pricing, and warm status. | https://docs.livepeer.org/ai/orchestrators/start-orchestrator |
| aiWorker | CLI flag starting a go-livepeer node as a dedicated AI worker process connecting to an orchestrator. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| autoAdjustPrice | CLI flag (default true) enabling automatic price adjustments based on ticket redemption overhead. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| Configuration Parameters | CLI flags and environment variables controlling node behavior including payments, pricing, and network mode. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| Hard gate | A strict threshold immediately disqualifying orchestrators failing a required criterion (e.g. exceeding max price). | https://github.com/livepeer/go-livepeer/issues/1802 |
| MaxPrice / MaxPricePerUnit / MaxPricePerCapability | CLI flags setting the maximum price per pixelsPerUnit a gateway will accept; per-capability allows pipeline-specific caps. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| Operational mode | Deployment configuration distinguishing combined orchestrator+worker, split O/T setups, or gateway-only mode. | https://docs.livepeer.org/ai/orchestrators/start-orchestrator |
| orchSecret | Shared secret for authentication between an orchestrator and its standalone transcoder/worker nodes. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| OrchestratorInfo | Data structure advertised by orchestrators containing capabilities, pricing, service URI, and metadata for gateway selection. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| pixelsPerUnit | CLI flag defining the number of pixels per pricing unit for granular pricing. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| pricePerCapability | CLI flag setting price per unit for specific AI pipeline/model pairs, overriding default pricePerUnit. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| pricePerGateway | JSON configuration for customized per-gateway-address pricing. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| pricePerUnit | CLI flag setting price per pixelsPerUnit for transcoding work, in wei or currency (e.g. 0.50USD). | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| Service URI | The on-chain registered address that gateways use to discover and contact an orchestrator node. | https://docs.livepeer.org/references/go-livepeer/cli-reference |
| Warm model / Cold model | A warm model is pre-loaded in GPU memory for fast inference; a cold model loads on-demand with startup latency. | https://docs.livepeer.org/ai/orchestrators/start-orchestrator |
| Weight factors | Configurable parameters (selectRandWeight, selectStakeWeight, selectPriceWeight) controlling orchestrator selection algorithm. | https://github.com/livepeer/go-livepeer/issues/1802 |

## livepeer:deployment

| Term | Definition | Source URL |
|---|---|---|
| BYOC | Bring-Your-Own-Container, enabling teams to deploy containerized Python workloads to participate in Livepeer streaming. | https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208 |
| Dual mode / Dual gateway | A deployment where a single node operates as both video transcoding gateway and AI inference gateway simultaneously. | https://docs.livepeer.org/ai/gateways/onchain |
| Gateway-as-a-service | A hosted deployment model (e.g. by GWID SPE) allowing users to run gateways without managing infrastructure. | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 |
| O-T split | Architectural separation of Orchestrator from Transcoder (Worker), with orchestrators managing distribution and remote transcoders performing compute. | https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md |
| Off-chain gateway | An AI Gateway node operating without blockchain integration, for local testing before connecting on-chain. | https://docs.livepeer.org/ai/gateways/onchain |
| On-chain gateway | An AI Gateway node connected to Arbitrum Mainnet with blockchain-based settlement and payment. | https://docs.livepeer.org/ai/gateways/onchain |
| Pool | A group of transcoder/worker nodes coordinated under a single orchestrator for increased capacity. | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 |
| Pool operator | The entity running an orchestrator coordinating a pool of transcoder/worker nodes. | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 |
| Pool worker | A transcoder/worker node in a pool, executing jobs delegated by the pool's orchestrator. | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 |
| Siphon | A mechanism for routing a subset of network traffic to specific orchestrators for testing or gradual rollout. | https://github.com/livepeer/go-livepeer/releases |
| Solo operator | An orchestrator running its own transcoder/worker processes directly, without a pool. | https://docs.livepeer.org/orchestrators/guides/get-started |

## livepeer:sdk

| Term | Definition | Source URL |
|---|---|---|
| @livepeer/react | React SDK providing prebuilt UI primitives (Player, Broadcast) for video experiences in web apps. | https://docs.livepeer.org/sdks/react/getting-started |
| FrameProcessor | A pattern in PyTrickle for building real-time video processing applications with custom per-frame processing. | https://github.com/livepeer/pytrickle |
| go-livepeer | Official Go implementation of the Livepeer protocol containing Broadcaster, Orchestrator, Transcoder, Gateway, and Worker node roles. | https://github.com/livepeer/go-livepeer |
| livepeer-ai-js | JavaScript/TypeScript library for the Livepeer AI API enabling AI inference integration. | https://github.com/livepeer/livepeer-ai-js |
| livepeer-ai-python | Python library for the Livepeer AI API providing programmatic access to AI inference pipelines. | https://github.com/livepeer/livepeer-ai-sdks |
| livepeer-go | Go server-side SDK for the Livepeer Studio API. | https://docs.livepeer.org/sdks/introduction |
| livepeer-js | JavaScript library for the Livepeer Studio API providing programmatic access to stream/asset management. | https://github.com/livepeer/livepeer-js |
| LPMS | Livepeer Media Server, an open-source media server providing live video functionality (RTMP input, HLS output). | https://github.com/livepeer/lpms |
| PyTrickle | Python package for real-time video/audio streaming with custom processing, built on the Trickle protocol. | https://github.com/livepeer/pytrickle |
| Trickle Streaming Protocol | A low-latency HTTP-based streaming protocol for real-time media transport between Livepeer nodes. | https://github.com/livepeer/pytrickle |

## livepeer:entity

| Term | Definition | Source URL |
|---|---|---|
| Advisory Boards | Strategic bodies aligning ecosystem stakeholders on roadmap and opportunities through structured strategy-setting. | https://forum.livepeer.org/t/advisory-boards-a-new-era-of-strategy-for-the-livepeer-project/2879 |
| AI Video SPE | SPE funded by treasury to advance decentralized AI compute, scaling ComfyStream and BYOC pipelines. | https://forum.livepeer.org/t/ai-video-spe-stage-4-pre-proposal/2933 |
| GovWorks | Meta-governance SPE ensuring transparent, efficient management of Livepeer governance and treasury allocation. | https://forum.livepeer.org/t/govworks-spe-pre-proposal/2752 |
| GWID | Gateway Wizard SPE building a fully managed DevOps tool for running and managing gateway infrastructure. | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 |
| LISAR | SPE providing ongoing ecosystem contributions with monthly progress updates. | https://forum.livepeer.org/t/lisar-spe-release-notes/3159 |
| LiveInfra | SPE providing free, reliable blockchain infrastructure services including the Community Arbitrum Node. | https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953 |
| Livepeer Foundation | Non-profit Cayman Islands Foundation Company stewarding long-term vision, ecosystem growth, and core development. | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 |
| Livepeer Inc | The original company that built Livepeer's initial architecture and protocol. | https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850 |
| SPE | Special Purpose Entity, a treasury-funded unit with defined scope, budget, and accountability for specific ecosystem initiatives. | https://forum.livepeer.org/t/livepeer-governance-process/2767 |
| StableLab | Governance services firm serving as first GovWorks Chair, building transparent governance frameworks. | https://forum.livepeer.org/t/introducing-stablelab-as-govworks-chair/2655 |
| Transformation SPE | SPE seeding new contribution mechanisms, coordinating talent, and directing budgets for workstream deliverables. | https://forum.livepeer.org/t/pre-proposal-surging-into-the-future-the-transformation-spe/3038/1 |
| Workstreams | Structures translating Advisory Board recommendations into executable initiatives with phased timelines. | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 |

## livepeer:tool

| Term | Definition | Source URL |
|---|---|---|
| AI Compute Visualiser | Community tool visualizing AI compute activity and resource distribution across the network. | https://github.com/livepeer/awesome-livepeer |
| AI Inference Tester | Tool to obtain AI inference statistics for orchestrators, measuring performance and capability. | https://github.com/livepeer/awesome-livepeer |
| awesome-livepeer | Community-curated list of projects, tutorials, demos, and resources in the Livepeer ecosystem. | https://github.com/livepeer/awesome-livepeer |
| Community Arbitrum Node | Free, load-balanced, geo-distributed RPC service for Arbitrum L2 and Ethereum L1, operated by LiveInfra SPE. | https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953 |
| Governance Dashboard | Dashboard within Livepeer Explorer providing voting transparency and governance proposal interaction. | https://forum.livepeer.org/t/rfp-explorer-maintenance/3072/16 |
| Growth Dashboard | Analytics dashboard tracking network growth metrics including usage, fees, and participation. | https://github.com/livepeer/awesome-livepeer |
| Livepeer Academy | Free, community-driven educational resource with video tutorials and quests about the protocol. | https://forum.livepeer.org/t/livepeer-academy-get-started-here/1546 |
| Livepeer Explorer | Official protocol explorer for viewing state, orchestrator info, staking data, and governance proposals. | https://github.com/livepeer/explorer |
| Livepeer Primer | Visual protocol overview at livepeer.org/primer introducing newcomers to the architecture. | https://github.com/livepeer/awesome-livepeer |
| Livepeer Reward Watcher | Monitoring tool alerting when an orchestrator is at risk of missing a reward call. | https://github.com/livepeer/awesome-livepeer |
| Livepeer.Tools | Community tool offering an orchestrator payout dashboard for tracking rewards. | https://github.com/livepeer/awesome-livepeer |
| livepeer-monitoring | Monitoring and exporter tool for tracking network health and orchestrator performance. | https://github.com/livepeer/awesome-livepeer |
| lvpr.tv | Embeddable HLS player optimized for Livepeer streams with WebRTC low-latency and HLS fallback. | https://github.com/livepeer/player |
| Orchestrator Pricing Visibility | Tool displaying price-per-pixel fluctuations by orchestrator over time. | https://github.com/livepeer/orchestrator-price-api |
| Stream Tester | Tool assessing orchestrator performance by sending RTMP streams and measuring transcoding success. | https://github.com/livepeer/stream-tester |
| Telegram Watcher Bot | Telegram bot delivering notifications about orchestrator performance and reward calls. | https://github.com/livepeer/awesome-livepeer |
| Tenderize | Liquid staking protocol for LPT allowing staking while maintaining liquidity through derivative tokens. | https://github.com/livepeer/awesome-livepeer |
| Test Streams Dashboard | Dashboard reviewing transcoding test scores across geographic regions. | https://github.com/livepeer/awesome-livepeer |
| Titan Node | Community orchestrator group in Western North America providing education and Start Up Grants for new nodes. | https://forum.livepeer.org/t/transcoder-campaign-titan-node/1392 |
