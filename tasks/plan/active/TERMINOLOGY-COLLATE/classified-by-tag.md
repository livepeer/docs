# Terminology Classified by Tag

**Date**: 2026-03-20
**Taxonomy**: 7 domains, 35 sub-categories (see [categories.md](categories.md))
**Rule**: Terms with multiple tags appear in ALL matching sections.
**Source**: Agent deep-reads + generate-glossary.js + terminology-search.js + web research

---

# 1. livepeer

## livepeer:protocol

Core protocol mechanics — the on-chain logic and rules.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Active set | Top 100 orchestrators by total stake eligible to receive work each round | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT | | lpt/staking, lpt/protocol, resources/glossary, about/protocol, about/staking, orchestrators/staking, orchestrators/protocol |
| Active set election | Process at round start determining top 100 orchestrators by bonded stake | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT | | lpt/staking, lpt/protocol, about/protocol, about/staking, orchestrators/staking, orchestrators/protocol |
| Capability | An AI service or job type (pipeline/model pair) an orchestrator can perform | https://docs.livepeer.org/ai/introduction | | gateways/discovery, gateways/protocol, resources/glossary |
| Capability advertisement | Mechanism by which orchestrators inform gateways of available AI services and pipelines | https://forum.livepeer.org/t/ai-capability-discovery/3233 | | orchestrators/discovery, orchestrators/ai |
| Capability matching | Process by which a gateway routes an AI task to an appropriate orchestrator based on capabilities | https://docs.livepeer.org/ai/introduction | | orchestrators/discovery, orchestrators/routing |
| Decentralized GPU Network | Marketplace of GPUs contributed by orchestrators, coordinated through crypto-economic incentives | https://docs.livepeer.org/ai/introduction | | resources/glossary |
| Execution layer | Layer where actual compute work is performed by orchestrators and workers, distinct from on-chain layer | https://docs.livepeer.org/v2/about/livepeer-network/overview | `web3:concept` | about/protocol, about/network |
| Inflation | Dynamic issuance of new LPT each round, distributed to orchestrators and delegators based on participation | https://forum.livepeer.org/t/inflation-focused-lip-discussion-thread/2753 | `economic:reward`, `web3:tokenomics` | lpt/inflation, orchestrators/staking, resources/glossary |
| Job | A unit of work submitted to the network specifying stream ID, transcoding options or AI pipeline, and price | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | home/network, home/architecture |
| Job lifecycle | Sequence from job submission through orchestrator selection, work execution, verification, and payment | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | about/protocol, about/architecture |
| Livepeer Network | The live operational decentralized system of orchestrators, workers, gateways, and broadcasters | https://docs.livepeer.org/v2/about/livepeer-network/overview | | resources/glossary, solutions/index |
| Livepeer Protocol | On-chain ruleset and smart contract logic governing staking, delegation, inflation, rewards, and payments | https://docs.livepeer.org/v2/about/livepeer-network/overview | | resources/glossary |
| LPT | ERC-20 governance and staking token for orchestrator selection, delegation, reward distribution, and security | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT | `web3:token` | about/staking, community/staking, developers/protocol, home/staking, lpt/staking, orchestrators/staking, resources/glossary |
| Operational Mode Asymmetry | Difference in operational requirements between gateways (submit/pay) and orchestrators (perform/earn) | https://docs.livepeer.org/v2/about/livepeer-network/overview | | |
| On-chain Treasury | Protocol-governed pool of LPT funded by inflation for community-approved ecosystem development | https://forum.livepeer.org/t/its-time-to-act-accumulation-the-treasury-ceiling/3153/1 | `economic:treasury` | resources/glossary, lpt/treasury, community/treasury |
| Protocol | On-chain governance and incentive layer coordinating orchestrators, staking, inflation, slashing, and payments | https://docs.livepeer.org/v2/about/livepeer-network/overview | | resources/glossary |
| Protocol Actor | A main participant performing a core function: gateways, orchestrators, and delegators | https://docs.livepeer.org/v2/about/livepeer-network/overview | | resources/glossary |
| Protocol Layer | On-chain layer governing staking, delegation, rewards, and verification via smart contracts on Arbitrum | https://docs.livepeer.org/references/contract-addresses | `web3:chain` | developers/protocol, gateways/protocol |
| Network Layer | Off-chain operational layer performing transcoding, AI inference, and job routing | https://docs.livepeer.org/v2/about/livepeer-network/overview | | |
| Reputation | Measure of orchestrator performance and reliability influencing job routing and payment priority | https://github.com/livepeer/go-livepeer/issues/1802 | | resources/glossary |
| Reward call | On-chain transaction an active orchestrator submits each round to mint and distribute new LPT | https://docs.livepeer.org/orchestrators/guides/configure-reward-calling | `economic:reward` | about/staking, community/staking, developers/protocol, lpt/staking, orchestrators/staking |
| Round | Discrete time interval (in Ethereum/Arbitrum blocks) for calculating staking rewards and protocol state | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | about/protocol, lpt/protocol, orchestrators/staking, resources/glossary |
| Segment | Time-sliced chunk of multiplexed audio and video independently transcoded for parallel processing | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | `video:processing` | about/transcoding, gateways/transcoding, orchestrators/transcoding, resources/glossary, solutions/transcoding |
| Session | Active connection between a gateway and orchestrator during which one or more jobs are processed | https://docs.livepeer.org/v2/about/livepeer-network/overview | | about/protocol, gateways/routing, orchestrators/routing, solutions/livestreaming |
| Slashing | Penalty mechanism destroying a portion of an orchestrator's bonded LPT for protocol violations | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | `web3:tokenomics` | about/protocol, lpt/protocol, orchestrators/protocol, resources/glossary |
| Slashing Conditions | Network-defined rules for when LPT is slashed: failing verification, skipping verifications, or underperformance | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | resources/glossary |
| Verification mechanisms | Protocol-level processes confirming orchestrators performed work correctly, including Truebit-style verification | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | about/protocol |
| Verifier | Network component validating work performed by orchestrators against expected outputs | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | resources/glossary |
| Video DNA | Verification technique comparing a fingerprint of transcoded video output against the source | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | |

## livepeer:role

Network actors — named participants in the protocol and network.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Broadcaster (deprecated) | Legacy term for a node publishing streams and submitting video for transcoding; now replaced by "Gateway" | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | | about/protocol, about/architecture, gateways/architecture, gateways/protocol, resources/glossary, solutions/livestreaming |
| Delegator | Token holder who stakes LPT to an orchestrator to secure the network, participate in governance, and earn rewards | https://docs.livepeer.org/v2/about/livepeer-network/overview | `web3:tokenomics` | about/staking, community/staking, developers/protocol, home/staking, lpt/delegation, orchestrators/staking, resources/glossary, solutions/livestreaming |
| Developer | Anyone building applications using Livepeer, typically through hosted services or SDKs | https://docs.livepeer.org/developers/introduction | | resources/glossary |
| Gateway | Node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface | https://docs.livepeer.org/ai/gateways/start-gateway | | about/architecture, community/network, developers/ai-gateway, gateways/index, home/network, lpt/protocol, orchestrators/architecture, resources/glossary, solutions/network |
| Gateway operator | Person or organisation running and maintaining gateway nodes for network access | https://docs.livepeer.org/ai/builders/gateways | | community/network, community/roles |
| GPU operator | An orchestrator operator contributing GPU resources for transcoding or AI inference | https://docs.livepeer.org/ai/introduction | | developers/compute, home/compute |
| Livepeer Actor | A participant in the protocol or network performing a defined role | https://docs.livepeer.org/v2/about/livepeer-network/overview | | resources/glossary |
| Network Participant | Any entity actively engaging with the Livepeer protocol or network | https://docs.livepeer.org/v2/about/livepeer-network/overview | | |
| Orchestrator | Supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards | https://docs.livepeer.org/v2/about/livepeer-network/overview | | about/protocol, community/network, developers/architecture, gateways/routing, home/network, lpt/staking, orchestrators/index, resources/glossary, solutions/network |
| Transcoder (Worker) | Worker process performing actual compute work such as video transcoding or AI inference | https://docs.livepeer.org/v2/about/livepeer-network/overview | | |
| Worker | Node running Docker containers for AI models, executing compute tasks delegated by an orchestrator | https://docs.livepeer.org/v2/about/livepeer-network/overview | | |

## livepeer:product

Products and apps — Livepeer Studio, Daydream, Streamplace, and more.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| ComfyStream | ComfyUI custom node running real-time media workflows for AI-powered video and audio on live streams | https://github.com/livepeer/comfystream | `ai:framework` | about/ai, community/ai, developers/pipelines, home/ai-video, orchestrators/ai, resources/glossary |
| Daydream | Livepeer's hosted realtime AI video platform turning live camera input into AI-transformed visuals with sub-second latency | https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/ | | about/ai, community/ai, developers/ai-video, home/ai-video, orchestrators/ai, solutions/ai |
| Developer Platform | Abstraction layer providing tools and services for building on Livepeer (Studio, Daydream, Streamplace) | https://docs.livepeer.org/developers/introduction | | resources/glossary |
| Developer Stack | Set of SDKs, APIs, UI components, and hosted services for integrating video and AI capabilities | https://docs.livepeer.org/developers/introduction | | developers/index, developers/quickstart |
| Embody | SPE bringing embodied avatar workloads (Live2D, Three.js, Unreal) into Livepeer as intelligent public pipelines | https://forum.livepeer.org/t/embody-spe-pre-proposal-intelligent-public-pipelines/3220 | `ai:application` | solutions/ai, solutions/use-cases |
| Frameworks | Product by the MistServer team bridging Livepeer's transcoding infrastructure and real-world applications | https://forum.livepeer.org/t/pre-proposal-livepeer-frameworks-spe-pilot-phase/2773 | | solutions/sdks, solutions/api |
| Livepeer Cloud | Platform by Livepeer Cloud SPE increasing network accessibility with a free community AI gateway | https://forum.livepeer.org/t/livepeer-cloud-spe-proposal-draft/2235 | | developers/index, developers/api |
| Livepeer Studio | Developer platform for adding live and on-demand video experiences to apps with stream management and billing | https://docs.livepeer.org/developers/introduction | | developers/index, solutions/index |
| Livepeer.js | JavaScript library for the Livepeer API providing programmatic access to Studio features | https://github.com/livepeer/livepeer-js | `livepeer:sdk` | community/sdks, developers/sdks |
| NaaP | Network-as-a-Product, delivering the Livepeer Network as a reliable product with SLAs and improved selection | https://forum.livepeer.org/t/metrics-and-sla-foundations-for-naap/3189 | | developers/protocol, gateways/architecture |
| Streamplace | Project building the video layer for decentralized social platforms, focused on the AT Protocol ecosystem | https://forum.livepeer.org/t/streamplace-2-0-solving-video-for-everybody-forever/2847 | | community/ai, developers/ai-video, solutions/ai |

## livepeer:upgrade

Protocol upgrade names — milestone phases and named upgrades.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Cascade | Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ | | about/upgrades, about/protocol, developers/protocol, gateways/protocol, home/network, home/upgrades, orchestrators/protocol |
| Confluence | Production upgrade (LIP-73) migrating Livepeer's core protocol from Ethereum L1 to Arbitrum One | https://forum.livepeer.org/t/pre-proposal-confluence-protocol-upgrade/1482 | | about/upgrades, about/protocol |
| Confluent upgrade | Alternate name for the Confluence upgrade deploying protocol contracts to Arbitrum Mainnet | https://github.com/livepeer/protocol/tree/confluence | | home/upgrades |
| Delta upgrade | Planned future phase focused on full decentralization with Truebit-based verification | https://github.com/livepeer/wiki/wiki/Roadmap | | home/upgrades |
| Snowmelt | Alpha phase where the protocol was designed and incentives implemented, culminating in testnet launch | https://github.com/livepeer/wiki/wiki/Roadmap | | home/upgrades |
| Streamflow | Performance phase introducing peer-to-peer distribution, WebRTC support, and the Orchestrator/Transcoder split | https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md | | home/upgrades |
| Tributary | Beta phase where LPMS supported most live streaming use cases and mainnet was deployed | https://github.com/livepeer/wiki/wiki/Roadmap | | home/upgrades |

## livepeer:contract

Smart contracts — on-chain protocol contracts deployed on Arbitrum.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| AIServiceRegistry | Smart contract registering AI service capabilities for orchestrators on the Livepeer AI network | https://docs.livepeer.org/references/contract-addresses | | orchestrators/ai, orchestrators/contracts |
| BondingManager | Core contract managing bonding, delegation, staking logic, and fund ownership | https://docs.livepeer.org/references/contract-addresses | | lpt/contracts, lpt/staking, orchestrators/contracts, orchestrators/staking, resources/contracts |
| BondingVotes | Contract tracking stake-weighted voting power for on-chain governance polls on Arbitrum L2 | https://docs.livepeer.org/references/contract-addresses | `web3:governance` | lpt/contracts, lpt/governance, resources/contracts |
| Controller | Registry contract managing all protocol contract addresses and coordinating upgrades | https://docs.livepeer.org/references/contract-addresses | | about/protocol, about/contracts, resources/contracts |
| Governor / LivepeerGovernor | Governance contract authorizing protocol upgrades and parameter changes via token-weighted voting | https://docs.livepeer.org/references/contract-addresses | `web3:governance` | lpt/contracts, lpt/governance, resources/contracts |
| L1 Escrow | Ethereum mainnet contract holding LPT in escrow during cross-chain bridging to Arbitrum | https://docs.livepeer.org/references/contract-addresses | `web3:chain` | |
| L2LPTGateway | Bridge contract on Arbitrum enabling LPT transfers between Ethereum L1 and Arbitrum L2 | https://github.com/livepeer/arbitrum-lpt-bridge/blob/main/contracts/L2/gateway/L2LPTGateway.sol | `web3:chain` | lpt/bridging, lpt/arbitrum, resources/glossary |
| Minter contract | Contract responsible for minting new LPT during reward calls and holding ETH from winning tickets | https://docs.livepeer.org/references/contract-addresses | | about/contracts, lpt/contracts, resources/contracts |
| RoundsManager | Contract tracking round progression and coordinating round-based protocol state | https://docs.livepeer.org/references/contract-addresses | | lpt/contracts, orchestrators/contracts |
| ServiceRegistry | Contract where orchestrators register their service URI for gateway discovery | https://docs.livepeer.org/references/contract-addresses | | gateways/protocol, orchestrators/contracts |
| TicketBroker | Contract managing probabilistic micropayment system, holding funds and processing winning tickets | https://docs.livepeer.org/references/contract-addresses | `economic:payment` | gateways/payments, orchestrators/payments, resources/contracts |

## livepeer:config

CLI flags, config files, and node settings.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| aiModels.json | JSON config file specifying available AI models including pipeline type, model ID, pricing, and warm status | https://docs.livepeer.org/ai/orchestrators/start-orchestrator | | orchestrators/ai, orchestrators/config |
| aiWorker | CLI flag starting a go-livepeer node as a dedicated AI worker process connecting to an orchestrator | https://docs.livepeer.org/references/go-livepeer/cli-reference | | orchestrators/ai, orchestrators/architecture |
| autoAdjustPrice | CLI flag (default true) enabling automatic price adjustments based on ticket redemption overhead | https://docs.livepeer.org/references/go-livepeer/cli-reference | | |
| Configuration Parameters | CLI flags and environment variables controlling node behavior including payments, pricing, and network mode | https://docs.livepeer.org/references/go-livepeer/cli-reference | | |
| Hard gate | Strict threshold immediately disqualifying orchestrators failing a required criterion (e.g. max price) | https://github.com/livepeer/go-livepeer/issues/1802 | | orchestrators/ai, orchestrators/config |
| MaxPrice / MaxPricePerUnit / MaxPricePerCapability | CLI flags setting maximum price per pixelsPerUnit a gateway will accept; per-capability allows pipeline-specific caps | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/pricing, gateways/pricing |
| Operational mode | Deployment config distinguishing combined orchestrator+worker, split O/T, or gateway-only mode | https://docs.livepeer.org/ai/orchestrators/start-orchestrator | `livepeer:deployment` | gateways/modes, gateways/config |
| orchSecret | Shared secret for authentication between an orchestrator and its standalone transcoder/worker nodes | https://docs.livepeer.org/references/go-livepeer/cli-reference | | orchestrators/config |
| OrchestratorInfo | Data structure advertised by orchestrators containing capabilities, pricing, service URI, and metadata | https://docs.livepeer.org/references/go-livepeer/cli-reference | | orchestrators/code |
| pixelsPerUnit | CLI flag defining the number of pixels per pricing unit for granular pricing | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/pricing |
| pricePerCapability | CLI flag setting price per unit for specific AI pipeline/model pairs, overriding default pricePerUnit | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/pricing |
| pricePerGateway | JSON configuration for customized per-gateway-address pricing | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/pricing |
| pricePerUnit | CLI flag setting price per pixelsPerUnit for transcoding work, in wei or currency (e.g. 0.50USD) | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/pricing, gateways/pricing |
| Service URI | On-chain registered address that gateways use to discover and contact an orchestrator node | https://docs.livepeer.org/references/go-livepeer/cli-reference | | about/protocol, orchestrators/config |
| Warm model / Cold model | Warm model is pre-loaded in GPU memory for fast inference; cold model loads on-demand with startup latency | https://docs.livepeer.org/ai/orchestrators/start-orchestrator | `ai:concept` | about/ai, developers/pipelines, gateways/pipelines, orchestrators/ai, resources/glossary |
| Weight factors | Configurable parameters (selectRandWeight, selectStakeWeight, selectPriceWeight) controlling orchestrator selection | https://github.com/livepeer/go-livepeer/issues/1802 | | |

## livepeer:deployment

Deployment types and modes — how nodes are deployed and operated.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| BYOC | Bring-Your-Own-Container, enabling teams to deploy containerized Python workloads for Livepeer streaming | https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208 | `ai:concept` | community/network, community/ai, developers/compute, developers/pipelines, gateways/compute, gateways/pipelines, home/network, home/compute, orchestrators/compute, orchestrators/ai, resources/glossary |
| Dual mode / Dual gateway | Deployment where a single node operates as both video transcoding and AI inference gateway simultaneously | https://docs.livepeer.org/ai/gateways/onchain | | gateways/architecture, gateways/modes, orchestrators/modes, orchestrators/config |
| Gateway-as-a-service | Hosted deployment model allowing users to run gateways without managing infrastructure | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 | | gateways/modes, gateways/architecture |
| O-T split | Architectural separation of Orchestrator from Transcoder (Worker), with remote transcoders performing compute | https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md | | orchestrators/architecture, orchestrators/config |
| Off-chain gateway | AI Gateway node operating without blockchain integration, for local testing before connecting on-chain | https://docs.livepeer.org/ai/gateways/onchain | | gateways/modes |
| On-chain gateway | AI Gateway node connected to Arbitrum Mainnet with blockchain-based settlement and payment | https://docs.livepeer.org/ai/gateways/onchain | | gateways/modes |
| Pool | Group of transcoder/worker nodes coordinated under a single orchestrator for increased capacity | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 | | orchestrators/architecture |
| Pool operator | Entity running an orchestrator coordinating a pool of transcoder/worker nodes | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 | | orchestrators/architecture |
| Pool worker | Transcoder/worker node in a pool, executing jobs delegated by the pool's orchestrator | https://forum.livepeer.org/t/transcoder-pool-working-group/1684 | | orchestrators/architecture |
| Siphon | Mechanism for routing a subset of network traffic to specific orchestrators for testing or rollout | https://github.com/livepeer/go-livepeer/releases | | orchestrators/architecture |
| Solo operator | Orchestrator running its own transcoder/worker processes directly, without a pool | https://docs.livepeer.org/orchestrators/guides/get-started | | orchestrators/modes |

## livepeer:sdk

SDKs and libraries — client libraries for integrating with Livepeer.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| @livepeer/react | React SDK providing prebuilt UI primitives (Player, Broadcast) for video experiences in web apps | https://docs.livepeer.org/sdks/react/getting-started | | community/sdks, community/tools |
| FrameProcessor | Pattern in PyTrickle for building real-time video processing applications with custom per-frame processing | https://github.com/livepeer/pytrickle | | developers/pipelines, developers/ai-video |
| go-livepeer | Official Go implementation of the Livepeer protocol containing Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles | https://github.com/livepeer/go-livepeer | | developers/protocol, developers/node, orchestrators/setup, orchestrators/code |
| livepeer-ai-js | JavaScript/TypeScript library for the Livepeer AI API enabling AI inference integration | https://github.com/livepeer/livepeer-ai-js | | community/sdks |
| livepeer-ai-python | Python library for the Livepeer AI API providing programmatic access to AI inference pipelines | https://github.com/livepeer/livepeer-ai-sdks | | community/sdks |
| livepeer-go | Go server-side SDK for the Livepeer Studio API | https://docs.livepeer.org/sdks/introduction | | community/sdks |
| livepeer-js | JavaScript library for the Livepeer Studio API providing programmatic access to stream/asset management | https://github.com/livepeer/livepeer-js | `livepeer:product` | community/sdks, developers/sdks |
| LPMS | Livepeer Media Server, open-source media server providing live video functionality (RTMP input, HLS output) | https://github.com/livepeer/lpms | | resources/glossary |
| PyTrickle | Python package for real-time video/audio streaming with custom processing, built on the Trickle protocol | https://github.com/livepeer/pytrickle | | developers/sdks |
| Trickle Streaming Protocol | Low-latency HTTP-based streaming protocol for real-time media transport between Livepeer nodes | https://github.com/livepeer/pytrickle | | developers/streaming |

## livepeer:entity

Organisations — foundations, SPEs, and ecosystem entities.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Advisory Boards | Strategic bodies aligning ecosystem stakeholders on roadmap and opportunities through structured strategy-setting | https://forum.livepeer.org/t/advisory-boards-a-new-era-of-strategy-for-the-livepeer-project/2879 | `operational:governance` | community/governance |
| AI Video SPE | SPE funded by treasury to advance decentralized AI compute, scaling ComfyStream and BYOC pipelines | https://forum.livepeer.org/t/ai-video-spe-stage-4-pre-proposal/2933 | | |
| GovWorks | Meta-governance SPE ensuring transparent management of Livepeer governance and treasury allocation | https://forum.livepeer.org/t/govworks-spe-pre-proposal/2752 | `operational:governance` | community/governance, community/treasury |
| GWID | Gateway Wizard SPE building a managed DevOps tool for running and managing gateway infrastructure | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 | | community/governance, community/proposals |
| LISAR | SPE providing ongoing ecosystem contributions with monthly progress updates | https://forum.livepeer.org/t/lisar-spe-release-notes/3159 | | community/governance, community/proposals |
| LiveInfra | SPE providing free, reliable blockchain infrastructure services including the Community Arbitrum Node | https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953 | | community/projects, community/tools |
| Livepeer Foundation | Non-profit Cayman Islands Foundation Company stewarding long-term vision, ecosystem growth, and core development | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 | | community/governance, lpt/governance, resources/glossary |
| Livepeer Inc | Original company that built Livepeer's initial architecture and protocol | https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850 | | home/index, community/governance |
| SPE | Special Purpose Entity, a treasury-funded unit with defined scope, budget, and accountability | https://forum.livepeer.org/t/livepeer-governance-process/2767 | `operational:governance` | about/governance, community/governance, developers/governance, home/governance, lpt/governance, orchestrators/governance, resources/glossary |
| StableLab | Governance services firm serving as first GovWorks Chair, building transparent governance frameworks | https://forum.livepeer.org/t/introducing-stablelab-as-govworks-chair/2655 | | community/governance |
| Transformation SPE | SPE seeding new contribution mechanisms, coordinating talent, and directing budgets for workstreams | https://forum.livepeer.org/t/pre-proposal-surging-into-the-future-the-transformation-spe/3038/1 | | community/governance |
| Workstreams | Structures translating Advisory Board recommendations into executable initiatives with phased timelines | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 | `operational:governance` | community/governance |

## livepeer:tool

Ecosystem tools — explorers, dashboards, testers, and monitoring.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| AI Compute Visualiser | Community tool visualizing AI compute activity and resource distribution across the network | https://github.com/livepeer/awesome-livepeer | | |
| AI Inference Tester | Tool to obtain AI inference statistics for orchestrators, measuring performance and capability | https://github.com/livepeer/awesome-livepeer | | |
| awesome-livepeer | Community-curated list of projects, tutorials, demos, and resources in the Livepeer ecosystem | https://github.com/livepeer/awesome-livepeer | | community/resources, community/tools |
| Community Arbitrum Node | Free, load-balanced, geo-distributed RPC service for Arbitrum L2 and Ethereum L1, by LiveInfra SPE | https://forum.livepeer.org/t/pre-proposal-liveinfra-spe/2953 | | community/tools, community/network |
| Governance Dashboard | Dashboard within Livepeer Explorer providing voting transparency and governance proposal interaction | https://forum.livepeer.org/t/rfp-explorer-maintenance/3072/16 | | |
| Growth Dashboard | Analytics dashboard tracking network growth metrics including usage, fees, and participation | https://github.com/livepeer/awesome-livepeer | | |
| Livepeer Academy | Free, community-driven educational resource with video tutorials and quests about the protocol | https://forum.livepeer.org/t/livepeer-academy-get-started-here/1546 | `operational:community` | |
| Livepeer Explorer | Official protocol explorer for viewing state, orchestrator info, staking data, and governance proposals | https://github.com/livepeer/explorer | | community/tools, lpt/staking, resources/glossary |
| Livepeer Primer | Visual protocol overview at livepeer.org/primer introducing newcomers to the architecture | https://github.com/livepeer/awesome-livepeer | `operational:community` | |
| Livepeer Reward Watcher | Monitoring tool alerting when an orchestrator is at risk of missing a reward call | https://github.com/livepeer/awesome-livepeer | `operational:monitoring` | |
| Livepeer.Tools | Community tool offering an orchestrator payout dashboard for tracking rewards | https://github.com/livepeer/awesome-livepeer | | |
| livepeer-monitoring | Monitoring and exporter tool for tracking network health and orchestrator performance | https://github.com/livepeer/awesome-livepeer | `operational:monitoring` | |
| lvpr.tv | Embeddable HLS player optimized for Livepeer streams with WebRTC low-latency and HLS fallback | https://github.com/livepeer/player | | solutions/player |
| Orchestrator Pricing Visibility | Tool displaying price-per-pixel fluctuations by orchestrator over time | https://github.com/livepeer/orchestrator-price-api | | |
| Stream Tester | Tool assessing orchestrator performance by sending RTMP streams and measuring transcoding success | https://github.com/livepeer/stream-tester | `operational:monitoring` | |
| Telegram Watcher Bot | Telegram bot delivering notifications about orchestrator performance and reward calls | https://github.com/livepeer/awesome-livepeer | | |
| Tenderize | Liquid staking protocol for LPT allowing staking while maintaining liquidity through derivative tokens | https://github.com/livepeer/awesome-livepeer | `web3:tokenomics` | community/tools |
| Test Streams Dashboard | Dashboard reviewing transcoding test scores across geographic regions | https://github.com/livepeer/awesome-livepeer | `operational:monitoring` | |
| Titan Node | Community orchestrator group in Western North America providing education and Start Up Grants | https://forum.livepeer.org/t/transcoder-campaign-titan-node/1392 | `operational:community` | orchestrators/setup |

---

# 2. video

## video:protocol

Streaming protocols — standards for transporting media over networks.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| DASH | Dynamic Adaptive Streaming over HTTP, breaking content into small segments served at different bitrates | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP | | resources/glossary |
| HLS | HTTP Live Streaming protocol by Apple that encodes video into multiple quality levels with an index playlist | https://en.wikipedia.org/wiki/HTTP_Live_Streaming | | about/transcoding, developers/streaming, gateways/transcoding, orchestrators/transcoding, resources/glossary, solutions/playback |
| RTMP | Real-Time Messaging Protocol for streaming audio, video, and data over TCP on port 1935 | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol | | about/transcoding, developers/streaming, gateways/ingest, orchestrators/streaming, resources/glossary, solutions/livestreaming |
| RTMPS | RTMP over a TLS/SSL connection, adding encryption to protect transmitted media and metadata | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol | | solutions/livestreaming |
| SRT | Secure Reliable Transport, open-source UDP-based protocol with packet recovery, low latency, and AES encryption | https://en.wikipedia.org/wiki/Secure_Reliable_Transport | | |
| WebRTC | Open-source project providing browsers and mobile apps with real-time peer-to-peer audio, video, and data exchange | https://en.wikipedia.org/wiki/WebRTC | | developers/streaming, resources/glossary, solutions/webrtc |
| WHEP | WebRTC-HTTP Egress Protocol allowing viewers to watch content from streaming services via SDP offer/answer | https://datatracker.ietf.org/doc/draft-ietf-wish-whep/ | | resources/glossary, solutions/webrtc |
| WHIP | WebRTC-HTTP Ingestion Protocol (RFC 9725) for WebRTC-based ingestion via SDP offer/answer exchange | https://www.rfc-editor.org/rfc/rfc9725.html | | solutions/webrtc |

## video:encoding

Encoding concepts — codecs, compression, and format parameters.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| ABR (Adaptive Bitrate) | Streaming technique detecting bandwidth in real time and switching between pre-encoded bitrate levels | https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming | `video:playback` | solutions/transcoding, solutions/playback |
| AV1 | Open, royalty-free video coding format by Alliance for Open Media, successor to VP9 | https://en.wikipedia.org/wiki/AV1 | | |
| B-frames | Bidirectional predicted picture referencing both previous and future frames for highest compression ratio | https://en.wikipedia.org/wiki/Video_compression_picture_types | | solutions/encoding, solutions/livestreaming |
| Bitrate | Number of bits conveyed per second; in video it determines data per second of content, affecting quality and size | https://en.wikipedia.org/wiki/Bit_rate | | resources/glossary, solutions/encoding, solutions/transcoding |
| CBR | Constant bitrate encoding where output data rate remains constant regardless of content complexity | https://en.wikipedia.org/wiki/Constant_bitrate | | solutions/encoding, solutions/transcoding |
| Codec | Software or hardware that compresses and decompresses digital video, typically using lossy compression | https://en.wikipedia.org/wiki/Video_codec | | about/transcoding, about/video, gateways/transcoding, gateways/encoding, resources/glossary |
| CRF | Constant Rate Factor targeting consistent perceptual quality by adjusting quantization per frame, scale 0-51 | https://slhck.info/video/2017/02/24/crf-guide.html | | solutions/encoding, solutions/transcoding |
| Encoding ladder | Structured set of video renditions at varying resolutions and bitrates for optimal cross-device viewing | https://cloudinary.com/glossary/encoding-ladder | | gateways/transcoding, gateways/profiles |
| Fixed segment | Video segment of predetermined constant duration used in HLS and DASH streaming | https://en.wikipedia.org/wiki/HTTP_Live_Streaming | | |
| Frame rate | Frequency at which consecutive frames are captured or displayed (fps); common rates 24, 30, 60 | https://en.wikipedia.org/wiki/Frame_rate | | home/streaming, home/video, solutions/encoding |
| GOP | Group of pictures — ordered arrangement of I-frames and inter-frames within a coded video stream | https://en.wikipedia.org/wiki/Group_of_pictures | | gateways/transcoding, gateways/encoding |
| H.264 | Most widely used video compression standard (AVC/MPEG-4 Part 10), good quality at low bitrates | https://en.wikipedia.org/wiki/Advanced_Video_Coding | | |
| HEVC / H.265 | Video compression standard offering 25-50% better compression than H.264 at equal quality, up to 8K | https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding | | |
| Keyframe | I-frame storing a complete image independently, serving as reference for surrounding predictive frames | https://en.wikipedia.org/wiki/Video_compression_picture_types | | solutions/encoding |
| Keyframe interval | Distance in frames or seconds between consecutive keyframes; shorter improves seek, longer improves compression | https://en.wikipedia.org/wiki/Group_of_pictures | | solutions/encoding, solutions/livestreaming |
| Output profile | Predefined set of encoding parameters (resolution, bitrate, codec, frame rate) defining a single rendition | https://en.wikipedia.org/wiki/Advanced_Video_Coding | | orchestrators/transcoding |
| Resolution | Pixel dimensions of a video frame (width x height); common: 720p, 1080p, 2160p (4K) | https://en.wikipedia.org/wiki/Display_resolution | | solutions/encoding |
| VP9 | Open, royalty-free video coding format by Google, successor to VP8, competing with HEVC | https://en.wikipedia.org/wiki/VP9 | | |

## video:processing

Processing operations — transcoding, ingest, delivery, and segmentation.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Delivery | Stage where encoded video is transmitted from origin servers or CDNs to end-user devices for playback | https://en.wikipedia.org/wiki/Streaming_media | | resources/glossary |
| Dispersal | Distribution of encoded video segments across multiple nodes for redundancy and parallel retrieval | https://docs.livepeer.org/ | | gateways/routing, gateways/architecture |
| Encoding | Compressing raw video into a digital format using a codec via transform, quantization, and entropy coding | https://en.wikipedia.org/wiki/Video_codec | | |
| Ingest | Receiving a live video stream from a broadcaster's encoder into a media server, typically via RTMP, SRT, or WebRTC | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol | | resources/glossary, solutions/livestreaming |
| Quality Ladder | Ordered set of encoding profiles from lowest to highest quality for adaptive bitrate rendition selection | https://cloudinary.com/glossary/encoding-ladder | | resources/glossary |
| Rendition | Single encoded version of a source video at a specific resolution, bitrate, and codec configuration | https://cloudinary.com/glossary/video-rendition | | gateways/transcoding, orchestrators/transcoding, resources/glossary, solutions/transcoding |
| Segmentation | Dividing a continuous video stream into short discrete chunks for HTTP-based delivery and ABR switching | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP | | |
| Segment | Individual chunk of a video stream (typically 2-10 seconds) independently addressable over HTTP | https://en.wikipedia.org/wiki/HTTP_Live_Streaming | `livepeer:protocol` | about/transcoding, gateways/transcoding, orchestrators/transcoding, resources/glossary, solutions/transcoding |
| Transcoding | Direct digital-to-digital conversion of video from one encoding to another for multiple adaptive renditions | https://en.wikipedia.org/wiki/Transcoding | | about/transcoding, community/network, developers/streaming, gateways/transcoding, home/network, lpt/protocol, orchestrators/transcoding, resources/glossary, solutions/transcoding |

## video:playback

Playback concepts — latency, streaming modes, and viewer experience.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Latency | Delay between capture at source and display on the viewer's device, accumulating at every pipeline stage | https://en.wikipedia.org/wiki/Latency_(audio) | | home/streaming, resources/glossary, solutions/livestreaming, gateways/routing |
| Livestream | Real-time or near-real-time streaming of video and audio over a network to viewers | https://en.wikipedia.org/wiki/Live_streaming | | solutions/livestreaming, solutions/index |
| Low latency / Ultra-low latency | Low latency is 2-5s delay; ultra-low is sub-second, crucial for interactive use cases | https://www.wowza.com/blog/what-is-low-latency | | |
| MP4 | MPEG-4 Part 14 digital multimedia container format for video, audio, subtitles, and images | https://en.wikipedia.org/wiki/MP4_file_format | | solutions/vod |
| OBS | Free, open-source application for screencasting and live streaming, supporting RTMP, HLS, SRT, and WebRTC | https://en.wikipedia.org/wiki/OBS_Studio | | solutions/livestreaming |
| Player | Media player decoding and rendering audio/video with adaptive bitrate switching, buffering, and controls | https://en.wikipedia.org/wiki/Media_player_software | | solutions/player |
| Playback info | Metadata from a streaming platform API providing URLs, protocols, and format details for playback | https://docs.livepeer.org/api-reference/playback/get | | |
| Real-time | Video delivery with latency low enough for bidirectional interaction, typically under 500ms via WebRTC | https://en.wikipedia.org/wiki/WebRTC | | home/streaming, home/ai-video |
| Rebuffer ratio | Rebuffering duration divided by playback duration, measuring time spent waiting for buffering | https://www.mux.com/blog/the-four-elements-of-video-performance | | solutions/analytics |
| Streaming | Continuous delivery of multimedia over a network rendered in real time, as opposed to full download | https://en.wikipedia.org/wiki/Streaming_media | | home/streaming, resources/glossary |
| Sub-second Latency | Video delivery with end-to-end delay under one second, typically via WebRTC's UDP-based transport | https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/ | | developers/streaming |
| Thumbnail | Reduced-size preview image representing a video, used for recognition and navigation | https://en.wikipedia.org/wiki/Thumbnail | | |
| TTFF (Time to first frame) | Duration from play request to first video frame rendered on screen; critical quality-of-experience metric | https://wiki.svta.org/time-to-first-frame/ | | solutions/analytics |
| VOD | Video on demand allowing users to access pre-recorded content at any time, contrasting with live streaming | https://en.wikipedia.org/wiki/Video_on_demand | | home/streaming, solutions/vod |
| WebVTT | W3C standard format for displaying timed text (captions, subtitles, chapters) with HTML5 video | https://en.wikipedia.org/wiki/WebVTT | | solutions/vod |

## video:studio

Livepeer Studio objects — streams, assets, sessions, and platform features.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Access control | Restricts who can view streams/assets via signed JWTs, API keys, or webhook authorization | https://docs.livepeer.org/developers/guides/access-control-jwt | `technical:security` | solutions/access-control, solutions/api |
| Access key | API key authenticating requests to a video platform's API for operations like creating streams | https://docs.livepeer.org/reference/api | `technical:dev` | |
| Asset | Stored video file (VOD) managed by the platform, identified by a unique ID with metadata and playback URLs | https://docs.livepeer.org/guides/developing/upload-a-video-asset | | |
| Broadcast component | Front-end UI component providing camera/microphone capture and WebRTC-based streaming via WHIP | https://docs.livepeer.org/ | | |
| Clip | Short excerpt from a livestream or VOD asset defined by start and end timestamps for highlights | https://docs.livepeer.org/ | | solutions/livestreaming, solutions/clips |
| Dashboard | Web-based management interface for creating and managing streams, assets, API keys, and analytics | https://docs.livepeer.org/ | | |
| Multistream / Multistream target | Simultaneously broadcasting a live stream to multiple destinations; target defines a destination URL and key | https://docs.livepeer.org/api-reference/multistream/update | | solutions/multistream, solutions/livestreaming |
| Playback ID | Public identifier for retrieving playback URLs without exposing the private stream key | https://docs.livepeer.org/developers/guides/playback-a-livestream | | solutions/playback, solutions/api |
| Playback policy | Access rules (public or JWT-required) determining authentication requirements for viewers | https://docs.livepeer.org/developers/guides/access-control-jwt | `technical:security` | solutions/access-control |
| Project | Organizational container grouping related streams, assets, and API keys under a single namespace | https://docs.livepeer.org/reference/api | | |
| Recording | Stored archive of a live stream session, automatically saved as a VOD asset when enabled | https://docs.livepeer.org/guides/developing/create-a-livestream | | solutions/livestreaming |
| Room | Multi-participant WebRTC video session enabling multiple users to broadcast and receive audio/video | https://docs.livepeer.org/reference/api | | solutions/webrtc |
| Session (Studio) | Single continuous broadcast period on a stream object with its own metrics, recording, and viewership | https://docs.livepeer.org/developers/guides/monitor-stream-health | | |
| Signing key | Public/private keypair for signing JWTs to gate access-controlled streams and assets | https://docs.livepeer.org/developers/guides/access-control-jwt | `technical:security` | |
| Stream | Top-level object representing a live broadcast channel with config (stream key, playback ID, profiles) | https://docs.livepeer.org/guides/developing/create-a-livestream | | solutions/livestreaming |
| Stream key | Secret credential used by broadcasters to authenticate and push live video to the ingest endpoint | https://docs.livepeer.org/developers/guides/playback-a-livestream | | solutions/livestreaming |
| Viewership | Audience metrics including view counts, watch time, unique viewers, and geographic data | https://docs.livepeer.org/developers/guides/monitor-stream-health | | solutions/analytics |

---

# 3. ai

## ai:pipeline

Pipeline types — named AI processing pipelines available on the network.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| AI Pipeline | End-to-end construct orchestrating data flow through processing steps to produce output | https://huggingface.co/docs/transformers/en/main_classes/pipelines | | |
| Audio-to-text | Converting spoken language audio into written text using deep neural networks | https://en.wikipedia.org/wiki/Speech_recognition | | orchestrators/pipelines, orchestrators/ai |
| Batch AI | Running a trained model on a group of inputs asynchronously, optimizing GPU utilization through parallelization | https://cloud.google.com/discover/what-is-batch-inference | `ai:concept` | developers/ai-gateway, developers/pipelines, orchestrators/ai, orchestrators/pipelines |
| Depth Estimation | Predicting surface distances in a scene from a viewpoint, producing a depth map per pixel | https://en.wikipedia.org/wiki/Depth_map | | |
| Image-to-Image | Transforming an input image into a modified output guided by a text prompt or conditioning signal | https://en.wikipedia.org/wiki/Image_translation | | developers/pipelines, orchestrators/pipelines |
| Image-to-Text | Generating a textual description from an input image, encompassing captioning and OCR | https://huggingface.co/tasks/image-to-text | | developers/pipelines, orchestrators/pipelines |
| Image-to-Video | Generating a short video clip conditioned on a single input image, animating a still frame | https://huggingface.co/tasks/image-to-video | | developers/pipelines, orchestrators/pipelines |
| Intent Classification | Determining the purpose behind a user's input by assigning it to a predefined category | https://labelyourdata.com/articles/machine-learning/intent-classification | | |
| Live-video-to-video | Applying generative models to a continuous video stream frame-by-frame at interactive frame rates | https://github.com/cumulo-autumn/StreamDiffusion | | developers/pipelines, orchestrators/pipelines |
| Object Detection | Identifying and localizing instances of object classes within images or video with bounding boxes | https://en.wikipedia.org/wiki/Object_detection | | |
| Pose Estimation | Determining position and orientation of a person or object by detecting key joints or landmarks | https://en.wikipedia.org/wiki/Pose_(computer_vision) | | |
| Segmentation (AI) | Partitioning a digital image into regions by assigning a label to every pixel | https://en.wikipedia.org/wiki/Image_segmentation | | developers/pipelines, orchestrators/pipelines |
| Text-to-Image | Generating an image from a natural language text prompt using a language encoder and diffusion model | https://en.wikipedia.org/wiki/Text-to-image_model | | developers/pipelines, orchestrators/pipelines |
| Text-to-Speech | Artificial production of human speech from written text using phonetic conversion and audio synthesis | https://en.wikipedia.org/wiki/Speech_synthesis | | developers/pipelines, orchestrators/pipelines |
| Upscaling | Increasing image or video resolution using AI models that predict high-frequency detail not in the source | https://en.wikipedia.org/wiki/Image_scaling | | home/ai-video, orchestrators/pipelines |

## ai:model

Specific models — named pre-trained models used on the network.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| BLIP | Vision-language model by Salesforce using bootstrapped captioning and filtering for image understanding | https://huggingface.co/docs/transformers/model_doc/blip | | orchestrators/pipelines, orchestrators/ai |
| ControlNet | Neural network adding spatial conditioning controls (edge maps, depth, pose) to pretrained diffusion models | https://huggingface.co/lllyasviel/ControlNet | | orchestrators/pipelines, orchestrators/ai, resources/glossary |
| LoRA | Low-Rank Adaptation — parameter-efficient fine-tuning injecting trainable low-rank matrices into transformer layers | https://huggingface.co/docs/diffusers/training/lora | | developers/pipelines |
| Ollama | Open-source tool for running LLMs locally with a CLI and OpenAI-compatible REST API | https://ollama.com/ | | developers/pipelines, orchestrators/pipelines |
| SAM 2 | Meta's unified foundation model for promptable segmentation in images and videos with streaming memory | https://huggingface.co/docs/transformers/en/model_doc/sam2 | | developers/pipelines |
| SDXL | Stable Diffusion XL — advanced text-to-image model with 3x larger UNet and dual text encoders at 1024x1024 | https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 | | developers/pipelines, orchestrators/pipelines, resources/glossary |
| Stable Diffusion | Open-source latent diffusion model for text-to-image generation in compressed latent space | https://en.wikipedia.org/wiki/Stable_Diffusion | | orchestrators/pipelines |
| StreamDiffusion | Optimized real-time diffusion pipeline using stream batching and stochastic similarity filtering | https://github.com/cumulo-autumn/StreamDiffusion | | developers/pipelines, orchestrators/pipelines |
| SVD (Stable Video Diffusion) | Stability AI's latent diffusion model generating 14-25 frame video clips at 576x1024 from a single image | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt | | developers/pipelines |
| Whisper | OpenAI's encoder-decoder transformer for speech recognition and translation, pretrained on 680k hours of audio | https://huggingface.co/openai/whisper-large-v3 | | developers/pipelines, orchestrators/pipelines |

## ai:concept

General AI concepts — inference, models, diffusion, and related primitives.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Agent | System perceiving its environment and acting autonomously to achieve goals, often powered by LLMs with tools | https://en.wikipedia.org/wiki/Intelligent_agent | | resources/glossary, resources/ai, home/agents, home/ai-video |
| BYOC | Bring Your Own Container — deployment pattern where users supply custom Docker containers for AI workloads | https://docs.oracle.com/en-us/iaas/data-science/using/jobs-byoc.htm | `livepeer:deployment` | community/network, community/ai, developers/compute, developers/pipelines, gateways/compute, gateways/pipelines, home/network, home/compute, orchestrators/compute, orchestrators/ai, resources/glossary |
| Cold model / Cold start | Latency incurred when a model must be loaded from storage into GPU memory before first request, often 5-90s | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ | `livepeer:config` | developers/pipelines, developers/ai-gateway, gateways/pipelines, gateways/routing, orchestrators/ai, orchestrators/performance, resources/glossary |
| Diffusion | Generative models learning to produce data by reversing a gradual noising process | https://en.wikipedia.org/wiki/Diffusion_model | | orchestrators/pipelines, orchestrators/ai, developers/pipelines |
| Embedding | Learned numerical vector representation in continuous space where similar items map to nearby points | https://en.wikipedia.org/wiki/Word_embedding | | developers/pipelines, developers/ai-gateway |
| Inference | Running a trained model on new input data to produce predictions, as opposed to training | https://en.wikipedia.org/wiki/Inference_engine | | developers/ai-gateway, gateways/pipelines, home/ai-video, lpt/protocol, orchestrators/ai, resources/glossary |
| LLM | Large language model — neural network trained on massive text corpora to understand and generate language | https://en.wikipedia.org/wiki/Large_language_model | | developers/pipelines, orchestrators/pipelines |
| Model | Mathematical structure (neural network with learned weights) enabling predictions or generation for new inputs | https://en.wikipedia.org/wiki/Machine_learning | | developers/pipelines, gateways/pipelines, home/ai-video, resources/glossary |
| Model Card | Standardized documentation describing a model's intended use, training data, metrics, and limitations | https://huggingface.co/docs/hub/en/model-cards | | developers/pipelines |
| Model ID | Unique string identifier for a model on a repository hub (e.g., `stabilityai/sdxl`) | https://huggingface.co/docs/hub/en/model-cards | | developers/pipelines |
| Multimodal | AI processing and integrating multiple data types (text, images, audio, video) for cross-modal tasks | https://en.wikipedia.org/wiki/Multimodal_learning | | developers/pipelines |
| Real-time AI | Running models on live streaming input with latency low enough for interactive speeds, typically under 100ms | https://www.ultralytics.com/glossary/real-time-inference | | developers/ai-video, resources/glossary, community/ai |
| Sampler | Algorithm controlling the denoising process in diffusion models by defining noise schedule and update rule | https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features | | developers/pipelines |
| Tensor | Multi-dimensional array of numerical values serving as the fundamental data structure in neural networks | https://en.wikipedia.org/wiki/Tensor_(machine_learning) | | |
| Warm model | Model already loaded into GPU memory and ready to serve inference requests immediately | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ | `livepeer:config` | about/ai, developers/pipelines, gateways/pipelines, orchestrators/ai, resources/glossary |

## ai:framework

AI frameworks and tools — libraries and platforms for building and running models.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| ComfyStream | Livepeer project running ComfyUI workflows as real-time media processing backend for live streams | https://github.com/livepeer/comfystream | `livepeer:product` | about/ai, community/ai, developers/pipelines, home/ai-video, orchestrators/ai, resources/glossary |
| ComfyUI | Open-source node-based graphical interface for building and executing AI image/video generation workflows | https://github.com/Comfy-Org/ComfyUI | | developers/pipelines, home/ai-video, orchestrators/ai |
| CUDA | NVIDIA's parallel computing platform and API enabling GPUs for general-purpose processing and deep learning | https://en.wikipedia.org/wiki/CUDA | `technical:infra` | orchestrators/setup, orchestrators/ai |
| PyTorch / Torch | Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation | https://en.wikipedia.org/wiki/PyTorch | | developers/pipelines, orchestrators/ai |
| TensorRT | NVIDIA's inference SDK optimizing models through quantization, layer fusion, and kernel tuning for low-latency GPU inference | https://developer.nvidia.com/tensorrt | `technical:infra` | developers/pipelines, resources/glossary |

## ai:application

AI use cases — applications and applied concepts built on AI capabilities.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Autonomous agent | AI system independently pursuing complex goals by perceiving, deciding, using tools, and acting without supervision | https://en.wikipedia.org/wiki/Autonomous_agent | | |
| Avatar | Graphical representation of a user or AI entity, from 2D images to fully animated 3D digital characters | https://en.wikipedia.org/wiki/Avatar_(computing) | | home/ai-video, home/use-cases, solutions/ai, solutions/use-cases |
| DeAI | Decentralized AI — integrating AI computation within decentralized networks using blockchain for trustless inference | https://arxiv.org/abs/2411.17461 | `web3:concept` | home/ai-video, home/index |
| Digital twin | Virtual replica of a physical object or system continuously synchronized with real-world data | https://en.wikipedia.org/wiki/Digital_twin | | home/ai-video, home/use-cases |
| Embody | Giving an AI agent a physical or virtual body that interacts with an environment through sensors and actuators | https://en.wikipedia.org/wiki/Embodied_agent | `livepeer:product` | solutions/ai, solutions/use-cases |
| Generative video | AI-produced video created by models that synthesize novel temporal frame sequences from prompts | https://en.wikipedia.org/wiki/Text-to-video_model | | home/ai-video, home/use-cases |
| Interactive media | Digital content dynamically responding to user input in real time, combining text, images, audio, and video | https://en.wikipedia.org/wiki/Interactive_media | | home/ai-video, home/use-cases |
| NPC | Non-player character not controlled by a human, increasingly powered by AI for dynamic interactions | https://en.wikipedia.org/wiki/Non-player_character | | home/ai-video, home/use-cases |
| SLAM | Simultaneous Localization and Mapping — constructing a map of an unknown environment while tracking own location | https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping | | home/ai-video |
| Style transfer | Using deep neural networks to apply the visual style of one image to the content of another | https://en.wikipedia.org/wiki/Neural_style_transfer | | home/ai-video |
| Synthetic data | Artificially generated data produced by algorithms rather than real-world events, for training when real data is scarce | https://en.wikipedia.org/wiki/Synthetic_data | | home/ai-video |
| World model | Neural network representing and predicting environment dynamics, enabling an agent to plan by simulating outcomes | https://en.wikipedia.org/wiki/Generative_artificial_intelligence | | about/ai, community/ai, developers/ai-video, home/ai-video, resources/glossary, solutions/ai |

---

# 4. web3

## web3:chain

Blockchain networks — L1s, L2s, and network types.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Arbitrum/Arbitrum One | A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain with Ethereum-grade security | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction | | about/protocol, about/network, community/network, community/protocol, developers/protocol, gateways/protocol, gateways/payments, home/network, home/staking, lpt/protocol, lpt/bridging, orchestrators/protocol, orchestrators/staking, resources/glossary |
| Ethereum | A decentralized, open-source blockchain with smart contract functionality; native cryptocurrency is Ether (ETH) | https://en.wikipedia.org/wiki/Ethereum | | home/network, home/index, developers/protocol |
| Layer 1 | The base blockchain network (e.g. Ethereum) that validates and finalizes transactions without reliance on another network | https://en.wikipedia.org/wiki/Layer-1_blockchain | | about/protocol, about/network |
| Layer 2 | A separate blockchain extending a Layer 1 by handling transactions off-chain while inheriting security guarantees | https://ethereum.org/layer-2/ | | about/protocol, home/network, resources/glossary |
| Mainnet | The primary public production blockchain where actual-value transactions occur on the distributed ledger | https://ethereum.org/glossary/ | | orchestrators/protocol |
| Testnet | A blockchain instance for testing without risking real funds, where test tokens are obtained from faucets | https://ethereum.org/developers/docs/networks/ | | — |

## web3:token

Token assets — specific cryptocurrencies and token standards.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| ARB | The native governance token of the Arbitrum ecosystem, used for voting on DAO proposals | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction | | — |
| ERC-20 | A token standard on Ethereum defining a common interface for fungible tokens, enabling interoperability | https://ethereum.org/developers/docs/standards/tokens/erc-20/ | | — |
| ETH | The native cryptocurrency of Ethereum, used to pay transaction fees (gas) and secure the network through staking | https://ethereum.org/what-is-ether/ | | about/economics, gateways/payments, home/staking, lpt/pricing, orchestrators/payments, resources/glossary |
| LPT | The Livepeer Token used to coordinate, incentivize, and secure the network; staked LPT determines work allocation | https://livepeer.org/en/docs/protocol/core-concepts/token | `livepeer:protocol` | about/staking, community/staking, developers/protocol, home/staking, lpt/staking, orchestrators/staking, resources/glossary |
| NFT | A non-fungible token — a unique digital identifier on a blockchain certifying ownership of a digital asset | https://en.wikipedia.org/wiki/Non-fungible_token | | — |
| Wei | The smallest denomination of Ether, where 1 ETH = 10^18 Wei | https://ethereum.org/glossary/ | | gateways/payments, lpt/pricing, orchestrators/pricing |

## web3:tokenomics

Token economics — staking, bonding, inflation, and supply dynamics.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Bonding | Staking (locking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system | https://forum.livepeer.org/t/an-overview-of-bonding/97 | | about/staking, about/delegators, lpt/staking, lpt/delegation, orchestrators/staking, orchestrators/protocol |
| Bonding Rate | The ratio of total bonded LPT to total token supply; Livepeer targets 50% participation | https://docs.livepeer.org/delegators/guides/yield-calculation | | lpt/economics, lpt/inflation |
| Capital-backed Sybil Resistance | Mechanism where staking capital prevents Sybil attacks by making multiple fake identities economically costly | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ | | lpt/security, lpt/protocol |
| Capital Efficiency | The degree to which staked capital generates productive returns through protocol rewards, fees, or work allocation | https://en.wikipedia.org/wiki/Cryptoeconomics | | lpt/economics, lpt/staking |
| Concentration Risk | Risk arising when disproportionate stake is concentrated among few orchestrators, reducing decentralization | https://en.wikipedia.org/wiki/Proof_of_stake | | lpt/staking, lpt/security |
| Delegator | (see livepeer:role for definition) | https://docs.livepeer.org/v2/about/livepeer-network/overview | `livepeer:role` | about/staking, community/staking, developers/protocol, home/staking, lpt/delegation, orchestrators/staking, resources/glossary, solutions/livestreaming |
| Delegation | LPT holders staking tokens toward orchestrators they trust, sharing in rewards without running infrastructure | https://www.livepeer.org/delegate | | about/staking, community/staking, developers/protocol, lpt/delegation, resources/glossary |
| Dilution | Reduction in proportional ownership when non-staking holders miss out as new tokens are minted via inflation | https://docs.livepeer.org/delegators/guides/yield-calculation | `economic:reward` | lpt/inflation, lpt/economics |
| Economic Weight | An orchestrator's total active stake determining their share of inflation rewards and job selection probability | https://blog.livepeer.org/why-delegation-still-matters-in-a-low-inflation-environment/ | | lpt/economics, lpt/protocol |
| Inflation Adjustment | Protocol mechanism adjusting inflation by 0.00005% per round based on whether participation is above/below 50% | https://docs.livepeer.org/delegators/guides/yield-calculation | | lpt/inflation, lpt/economics |
| Issuance | Minting of new LPT tokens each round, distributed proportionally to stake | https://www.livepeer.org/primer | | lpt/inflation, lpt/economics |
| Liquidity Risk | Risk that bonded tokens cannot be quickly converted to liquid assets due to unbonding period | https://en.wikipedia.org/wiki/Liquidity_risk | | — |
| Network Effects | Phenomenon where a network's value increases as more participants join | https://en.wikipedia.org/wiki/Network_effect | `economic:business` | resources/glossary |
| Operator Market | Competitive ecosystem of orchestrators differentiated by price, performance, and reliability | https://www.livepeer.org/orchestrate | | lpt/staking, lpt/economics |
| Rebonding | Re-staking tokens in the unbonding period to an orchestrator, canceling the unbonding process | https://forum.livepeer.org/t/an-overview-of-bonding/97 | | about/staking |
| Stake / Bonded Stake | LPT locked in the protocol via bonding, representing commitment and determining reward/work share | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT | | lpt/staking, resources/glossary |
| Staking | Locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn rewards | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ | `economic:reward` | community/staking, home/staking, lpt/staking, resources/glossary |
| Stake-for-Access | Model where staking tokens is required to access network resources or perform work | https://livepeer.org/en/docs/protocol/core-concepts/token | | resources/glossary |
| Supply | Total number of LPT tokens in existence, starting from genesis of 10M and growing with inflation | https://www.livepeer.org/lpt | | — |
| TAM | Total Addressable Market — total potential market for a product or service | https://en.wikipedia.org/wiki/Total_addressable_market | `economic:business` | resources/glossary |
| Target Bonding Rate | The 50% participation threshold; inflation adjusts to push staking toward this rate | https://docs.livepeer.org/delegators/guides/yield-calculation | | lpt/economics |
| Tenderize | Liquid staking protocol allowing LPT holders to stake without lockups via liquid staking derivatives | https://www.tenderize.me/ | `livepeer:tool` | community/tools |
| Thawing Period | Waiting period during which tokens are locked after initiating unbonding before becoming withdrawable | https://forum.livepeer.org/t/questions-concerning-staking-and-unbonding/591 | | lpt/staking |
| Tokenomics | Economic design of a token system encompassing supply, distribution, incentives, staking, inflation, governance | https://en.wikipedia.org/wiki/Cryptoeconomics | | resources/glossary |
| Unbonding / Unbonding Period | Withdrawing staked tokens, requiring a 7-round waiting period before tokens become liquid | https://forum.livepeer.org/t/introduction-to-partial-unbonding/360 | | lpt/staking, community/staking |
| Vesting | Schedule controlling when token allocations become available over time, often with cliff and pro-rata release | https://en.wikipedia.org/wiki/Vesting | `economic:reward` | lpt/tokenomics |

## web3:concept

Blockchain concepts — fundamental ideas, patterns, and paradigms.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Blockchain | A distributed ledger of records (blocks) securely linked via cryptographic hashes, managed by peer-to-peer consensus | https://en.wikipedia.org/wiki/Blockchain | | home/network, home/index |
| Bridging / Bridge | Mechanism connecting two blockchain ecosystems, enabling token/information transfer between them | https://ethereum.org/developers/docs/bridges/ | | lpt/bridging, lpt/arbitrum, resources/glossary |
| Cryptoeconomic primitives | Fundamental building blocks combining cryptography and economic incentives for secure decentralized protocols | https://en.wikipedia.org/wiki/Cryptoeconomics | | about/protocol, about/economics |
| DAO | Decentralized autonomous organization governed by smart contracts, with rules encoded in code | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization | | resources/glossary |
| DeAI | Decentralized AI — distributed AI computation on blockchain networks for permissionless, trustless inference | https://en.wikipedia.org/wiki/Distributed_artificial_intelligence | `ai:application` | home/ai-video, home/index |
| Decentralization | Transfer of control from a centralized entity to a distributed network, reducing single points of failure | https://en.wikipedia.org/wiki/Decentralization | | home/network, home/index |
| DePIN | Decentralized Physical Infrastructure Networks — blockchain systems incentivizing collective physical infrastructure | https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network | | resources/glossary |
| Finality | Condition where a blockchain transaction becomes irreversible | https://ethereum.org/glossary/ | | about/protocol, about/network |
| Gas | Unit measuring computational effort to execute Ethereum operations; users pay gas fees in ETH | https://ethereum.org/developers/docs/gas/ | | resources/glossary |
| ICO | Initial coin offering — fundraising by selling newly created tokens | https://en.wikipedia.org/wiki/Initial_coin_offering | `economic:business` | — |
| Merkle Mine | Livepeer's algorithm for decentralized token distribution at genesis using Merkle proofs | https://forum.livepeer.org/t/introducing-the-merklemine/204 | | resources/glossary |
| Off-chain | Activities occurring outside the main blockchain, often for scalability | https://ethereum.org/glossary/ | | about/protocol, resources/glossary |
| On-chain | Activities directly recorded and executed on the blockchain with full transparency | https://ethereum.org/glossary/ | | about/protocol, resources/glossary |
| Open Source | Software with source code freely available for use, modification, and redistribution | https://en.wikipedia.org/wiki/Open-source_software | | resources/glossary |
| Peer-to-Peer | Distributed networking where participants share resources directly without centralized intermediaries | https://en.wikipedia.org/wiki/Peer-to-peer | | — |
| Permissionless | Property where anyone can participate without requiring approval from a central authority | https://ethereum.org/web3 | | home/network |
| Proof-of-stake | Consensus mechanism where validators stake cryptocurrency as collateral to propose and validate blocks | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ | | about/protocol |
| Proof of utility | Model where participants prove they performed useful work for the network | https://www.livepeer.org/primer | | home/network |
| Rollups | L2 scaling solutions executing off-chain and posting compressed data to L1 | https://ethereum.org/developers/docs/scaling/ | | resources/glossary |
| Smart contract | Self-executing program on a blockchain automatically enforcing agreement terms | https://ethereum.org/developers/docs/smart-contracts/ | | developers/protocol, home/network |
| Subgraph | In The Graph, a custom open API defining how blockchain data is indexed and queried via GraphQL | https://thegraph.com/docs/en/subgraphs/developing/subgraphs/ | | orchestrators/protocol |
| Trustless | System property where participants interact using cryptographic proofs rather than trust in third parties | https://ethereum.org/web3 | | home/network |

## web3:governance

On-chain governance — voting, proposals, and governance contracts.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Atomic Execution | Guarantee that a set of on-chain operations either all succeed or none execute | https://en.wikipedia.org/wiki/Atomic_commit | | — |
| Governor / LivepeerGovernor | On-chain governance contract for Livepeer's delegated stake-weighted voting on treasury proposals | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `livepeer:contract` | lpt/contracts, lpt/governance, resources/contracts |
| Proposer Bond | Minimum 100 LPT staked balance required to submit a governance proposal | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `economic:treasury` | — |
| Quorum | Minimum participating stake for a governance vote to be valid | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `operational:governance` | about/governance, community/governance, lpt/governance |
| Stake-weighted voting | Voting system where each vote is proportional to staked tokens | https://github.com/livepeer/wiki/wiki/Governance | | about/governance, lpt/governance |
| Timelock | Smart contract enforcing a delay between proposal passage and execution | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | | lpt/governance |
| Voting Power | Weight of a participant's governance vote, determined by bonded stake | https://github.com/livepeer/wiki/wiki/Governance | | lpt/governance |

## web3:identity

Blockchain identity — keys, addresses, and wallets.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Block Timestamps | Unix timestamp in each block header representing approximate block production time | https://ethereum.org/glossary/ | | — |
| Ethereum Address | A 42-character hex identifier (0x + 20 bytes) derived from public key hash, used for transactions | https://ethereum.org/developers/docs/accounts/ | | — |
| Private key | Secret cryptographic key signing transactions and proving account ownership | https://ethereum.org/developers/docs/accounts/ | | — |
| Public key | Cryptographic key derived from private key via ECDSA, basis for generating Ethereum address | https://ethereum.org/developers/docs/accounts/ | | — |
| Wallet | Software or hardware storing private keys, enabling account management and transaction signing | https://ethereum.org/wallets/ | | — |

---

# 5. economic

## economic:payment

Payment mechanics — micropayments, tickets, deposits, and settlement.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Clearinghouse | Contract/system handling settlement of payments between gateways and orchestrators | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:contract` | gateways/payments, gateways/protocol, orchestrators/payments, orchestrators/protocol |
| Deposit | Funds locked by a gateway to pay orchestrators via probabilistic micropayments | https://livepeer.org/docs/video-developers/getting-started/deposit-broadcasting-funds | | gateways/payments, gateways/protocol |
| Face value | Payout amount assigned to a probabilistic ticket if it wins | https://livepeer.org/docs/video-developers/core-concepts/payments | | orchestrators/payments, orchestrators/protocol |
| Fee collection | Process by which orchestrators accumulate ETH from winning tickets | https://docs.livepeer.org/delegators/guides/yield-calculation | | — |
| Interval-based payment | Compensation calculated over time intervals rather than per unit of work | https://livepeer.org/docs/video-developers/core-concepts/payments | | gateways/payments, gateways/protocol |
| Micropayment / Micropayment ticket | Small-value payment as a signed ticket with a chance of being a winner | https://en.wikipedia.org/wiki/Micropayment | | orchestrators/payments, gateways/payments, home/network |
| Payment channel | Off-chain mechanism where two parties conduct multiple transactions, settling final state on-chain | https://ethereum.org/developers/docs/scaling/state-channels/ | | about/payments |
| Payment Ticket | Signed data structure from gateway to orchestrator representing a probabilistic payment | https://livepeer.org/docs/video-developers/core-concepts/payments | `livepeer:protocol` | resources/glossary, about/payments, lpt/payments |
| Probabilistic micropayments | Lottery-like payment model where only winning tickets are redeemed on-chain, amortizing costs | https://livepeer.org/docs/video-developers/core-concepts/payments | | about/payments, gateways/payments, home/payments, orchestrators/payments |
| Redemption / Ticket redemption | On-chain process of cashing in a winning ticket for its face value in ETH | https://livepeer.org/docs/video-developers/core-concepts/payments | | gateways/payments, orchestrators/payments |
| Redeemer | Entity submitting a winning ticket to TicketBroker to claim payment | https://docs.livepeer.org/references/go-livepeer/cli-reference | | orchestrators/payments |
| Reserve | Funds set aside as collateral guaranteeing payment if deposit depleted | https://livepeer.org/docs/video-developers/getting-started/deposit-broadcasting-funds | | gateways/payments |
| Settlement | On-chain finalization of off-chain payment obligations via ticket redemption | https://livepeer.org/docs/video-developers/core-concepts/payments | | gateways/payments |
| TicketBroker | Smart contract processing and settling winning probabilistic micropayment tickets | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:contract` | gateways/payments, orchestrators/payments, resources/contracts |
| Win probability | Configured likelihood that a ticket is a winner; lower probability means larger face values | https://livepeer.org/docs/video-developers/core-concepts/payments | | orchestrators/payments |
| Winning ticket | Ticket whose random outcome meets the threshold, entitling holder to redeem face value | https://livepeer.org/docs/video-developers/core-concepts/payments | | about/payments, orchestrators/payments |

## economic:pricing

Pricing models — per-pixel, per-request, and dynamic pricing mechanisms.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Arbitrage | Exploiting price differences between markets; in Livepeer, selecting lower-cost orchestrators | https://en.wikipedia.org/wiki/Arbitrage | | gateways/pricing, gateways/economics |
| autoAdjustPrice | CLI flag enabling automatic price adjustment based on ticket redemption overhead | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | — |
| MaxPrice | Maximum transcoding price per pixelsPerUnit a gateway will accept | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | orchestrators/pricing, gateways/pricing |
| Overhead | Estimated ticket redemption cost divided by face value, expressed as percentage | https://docs.livepeer.org/references/go-livepeer/cli-reference | `operational:process` | orchestrators/performance |
| Pay-per-pixel | Pricing model where orchestrators are paid based on number of pixels transcoded | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 | | about/economics |
| Per-pixel pricing | Cost calculated per pixel of video transcoded for standardized comparison | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 | | — |
| Per-request pricing | Cost calculated per individual AI inference request rather than per pixel | https://docs.livepeer.org/ai/pipelines/audio-to-text | | — |
| pixelsPerUnit | CLI parameter defining pixels per pricing unit for finer granularity | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | orchestrators/pricing |
| Price feed | External data source providing real-time ETH/USD prices for pricing conversion | https://github.com/joinhive-ai/livepeer-usd-pricer | | orchestrators/pricing |
| Price Per Pixel | Fundamental pricing unit: cost in wei for transcoding one pixel | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 | | lpt/economics, community/economics |
| pricePerCapability | Per-pipeline AI pricing parameter | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | orchestrators/pricing |
| pricePerGateway | Per-gateway-address customized pricing configuration | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | orchestrators/pricing |
| pricePerUnit | Transcoding price in wei per pixelsPerUnit advertised to gateways | https://docs.livepeer.org/references/go-livepeer/cli-reference | `livepeer:config` | orchestrators/pricing, gateways/pricing |
| Service margin | Markup orchestrators apply above operational costs | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 | | gateways/pricing |
| USD pricing | Targeting USD-denominated price with dynamic wei adjustment as ETH fluctuates | https://github.com/joinhive-ai/livepeer-usd-pricer | | gateways/pricing, orchestrators/pricing |

## economic:reward

Rewards and incentives — inflation, fees, yield, and penalties.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Commission Rate | Percentage of rewards/fees an orchestrator retains before distributing to delegators | https://docs.livepeer.org/delegators/guides/yield-calculation | | lpt/staking, lpt/economics |
| Delegator Rewards | Share of inflationary LPT and ETH fees delegators earn proportional to their stake | https://docs.livepeer.org/delegators/guides/yield-calculation | | — |
| Dilution | Proportional ownership loss by non-stakers when new tokens are minted | https://docs.livepeer.org/delegators/guides/yield-calculation | `web3:tokenomics` | lpt/inflation, lpt/economics |
| Fee cut / Fee share | Percentage of ETH fees orchestrator keeps (cut) vs shares with delegators (share) | https://docs.livepeer.org/delegators/guides/yield-calculation | | about/staking, lpt/staking, orchestrators/staking |
| Fee pool | Accumulated ETH fees distributed between orchestrators and delegators | https://www.livepeer.org/primer | | orchestrators/staking, orchestrators/protocol |
| Genesis Supply | Initial allocation of 10M LPT at protocol launch | https://www.livepeer.org/lpt | | lpt/tokenomics, lpt/history |
| Inflation | Rate of new LPT minted each round, designed to incentivize participation | https://docs.livepeer.org/delegators/guides/yield-calculation | `livepeer:protocol` | lpt/inflation, orchestrators/staking, resources/glossary |
| Inflation Rate | Per-round rate of new LPT issuance, adjusting dynamically around 50% target | https://docs.livepeer.org/delegators/guides/yield-calculation | | lpt/inflation, lpt/economics |
| Inflationary Rewards | Newly minted LPT distributed each round proportional to stake | https://docs.livepeer.org/guides/orchestrating/configure-reward-calling | | lpt/inflation, lpt/staking |
| Reward | Combination of inflationary LPT and ETH fees earned by participants | https://www.livepeer.org/primer | | home/staking |
| Reward call | On-chain transaction orchestrators execute each round to claim and distribute LPT rewards | https://docs.livepeer.org/guides/orchestrating/configure-reward-calling | `livepeer:protocol` | about/staking, community/staking, developers/protocol, lpt/staking, orchestrators/staking |
| Reward cut | Percentage of inflationary rewards orchestrator keeps before distributing to delegators | https://docs.livepeer.org/delegators/guides/yield-calculation | | about/staking, lpt/staking, orchestrators/staking, resources/glossary |
| Slashing | Penalty reducing orchestrator's bonded stake for protocol violations | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md | `livepeer:protocol` | about/protocol, lpt/protocol, orchestrators/protocol, resources/glossary |
| Staking | Locking tokens to participate in security, governance, and earn rewards | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ | `web3:tokenomics` | community/staking, home/staking, lpt/staking, resources/glossary |
| Vesting | Schedule controlling when token allocations become available over time | https://en.wikipedia.org/wiki/Vesting | `web3:tokenomics` | lpt/tokenomics |
| Yield | Return on staked LPT from inflationary rewards and ETH fees, as annual percentage | https://docs.livepeer.org/delegators/guides/yield-calculation | | orchestrators/staking |

## economic:treasury

Treasury and funding — community treasury, grants, and allocation.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Bounty | Reward for completing a specific task, funded by community treasury or foundation | https://forum.livepeer.org/c/treasury/18 | | community/treasury, community/programs |
| Community Treasury | On-chain fund governed by LPT stakeholders via LivepeerGovernor, funded by inflation percentage | https://explorer.livepeer.org/treasury | | lpt/treasury, lpt/governance |
| Fee Switch | Governance-controlled mechanism to redirect protocol fees to treasury or other destinations | https://forum.livepeer.org/t/lip-livepeer-treasury-bundle-discussion-thread/2115 | | lpt/economics, lpt/governance |
| Grant | Non-repayable allocation from treasury/foundation for ecosystem development | https://forum.livepeer.org/c/treasury/18 | | community/treasury, community/programs |
| Milestone-based Grants | Funding released incrementally upon achievement of predefined deliverables | https://forum.livepeer.org/c/treasury/18 | | — |
| On-chain Treasury | Smart contract funds governed by token holder votes for decentralized resource allocation | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `livepeer:protocol` | resources/glossary, lpt/treasury, community/treasury |
| Proposer Bond | Minimum 100 LPT to create a treasury governance proposal | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `web3:governance` | — |
| Quadratic Funding | Mechanism where matching funds amplify small individual contributions | https://en.wikipedia.org/wiki/Quadratic_voting | | lpt/treasury |
| Retroactive Funding | Model rewarding projects after demonstrated value, reducing speculative risk | https://blog.ethereum.org/en/2026/02/27/project-odin | | lpt/treasury |
| Surge strategy | Concentrated treasury spending on high-impact growth initiatives | https://forum.livepeer.org/t/pre-proposal-surging-into-the-future-the-transformation-spe/3038 | | community/governance |
| Treasury | Pool of LPT/ETH held on-chain for funding public goods and ecosystem development | https://explorer.livepeer.org/treasury | | about/governance, community/treasury, developers/protocol, home/governance, lpt/treasury, orchestrators/governance, resources/glossary |
| Treasury Allocation | Governance-approved distribution of treasury funds to proposals or SPEs | https://forum.livepeer.org/c/treasury/18 | | lpt/treasury |
| Treasury Reward Cut Rate | Governable percentage of per-round LPT diverted to treasury (e.g. 10%) | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-92.md | | lpt/treasury |
| veLPT / Voting Escrow | Proposed mechanism locking LPT for enhanced voting power, aligning long-term incentives | https://forum.livepeer.org/t/lip-livepeer-treasury-bundle-discussion-thread/2115 | | lpt/governance |

## economic:business

Business concepts — market dynamics, monetization, and ecosystem economics.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Creator economy | Platform-driven economy where creators produce and monetize content directly | https://en.wikipedia.org/wiki/Creator_economy | | — |
| ICO | Initial coin offering — blockchain fundraising by selling tokens | https://en.wikipedia.org/wiki/Initial_coin_offering | `web3:concept` | — |
| MoC | Master of Ceremonies — designated facilitator for community calls and governance discussions | https://forum.livepeer.org/c/governance/17 | | — |
| Monetization | Generating revenue from a product or service | https://en.wikipedia.org/wiki/Monetization | | home/ai-video |
| Network Effects | Product/service becomes more valuable as more people use it | https://en.wikipedia.org/wiki/Network_effect | `web3:tokenomics` | resources/glossary |
| TAM | Total Addressable Market — total market demand if 100% captured | https://en.wikipedia.org/wiki/Total_addressable_market | `web3:tokenomics` | resources/glossary |

---

# 6. technical

## technical:infra

Infrastructure — hardware, networking, and compute resources.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Bandwidth | Maximum rate of data transfer across a network path, in bits per second | https://en.wikipedia.org/wiki/Bandwidth_(computing) | | — |
| CDN | Content delivery network — geographically distributed servers for high-availability, low-latency content | https://en.wikipedia.org/wiki/Content_delivery_network | | resources/glossary |
| Container | Lightweight executable package with code, runtime, libraries, isolated via OS-level virtualization | https://en.wikipedia.org/wiki/Docker_(software) | | — |
| Docker | Platform using OS-level virtualization to run applications in isolated containers | https://en.wikipedia.org/wiki/Docker_(software) | | — |
| Edge Compute | Distributed computing running closer to data sources and users, reducing latency | https://en.wikipedia.org/wiki/Edge_computing | | — |
| GPU | Graphics processing unit — specialized processor for parallel computation in rendering, encoding, AI | https://en.wikipedia.org/wiki/Graphics_processing_unit | | community/network, home/network, orchestrators/ai, resources/glossary |
| GPU Worker | Livepeer node with GPU hardware performing transcoding or AI inference for an orchestrator | https://docs.livepeer.org/orchestrators/guides/get-started | | gateways/routing, orchestrators/ai |
| Kubernetes | Open-source container orchestration for automating deployment, scaling, and management | https://en.wikipedia.org/wiki/Kubernetes | | — |
| Latency | Time delay between request and response, critical for real-time applications | https://en.wikipedia.org/wiki/Latency_(engineering) | `video:playback` | home/streaming, resources/glossary, solutions/livestreaming, gateways/routing |
| Node | Computing device connected to a network participating in protocol operations | https://en.wikipedia.org/wiki/Node_(networking) | | home/network, resources/glossary |
| NVDEC | NVIDIA hardware video decoder offloading decoding from CPU | https://en.wikipedia.org/wiki/NVDEC | | orchestrators/transcoding |
| NVENC | NVIDIA hardware video encoder offloading encoding from CPU for H.264/H.265 | https://en.wikipedia.org/wiki/NVENC | | orchestrators/transcoding |
| Scalability | Ability to handle increasing workload by adding resources | https://en.wikipedia.org/wiki/Scalability | | home/network |
| VRAM | Video RAM — dedicated GPU memory for graphics data, model weights, video frames | https://en.wikipedia.org/wiki/Video_random-access_memory | | developers/pipelines, orchestrators/ai |

## technical:protocol

Communication protocols — network and transport layer standards.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| gRPC | High-performance RPC framework using HTTP/2 and Protocol Buffers | https://en.wikipedia.org/wiki/GRPC | | orchestrators/architecture, orchestrators/code |
| HTTP / HTTPS | HTTP is web data transfer protocol; HTTPS adds TLS encryption | https://en.wikipedia.org/wiki/HTTPS | | — |
| JSON | Lightweight human-readable data interchange format using key-value pairs | https://en.wikipedia.org/wiki/JSON | | solutions/api |
| OAuth | Open standard for delegated access without sharing credentials | https://en.wikipedia.org/wiki/OAuth | | — |
| REST | Architectural style using standard HTTP methods for stateless resource interaction | https://en.wikipedia.org/wiki/REST | | solutions/api |
| TLS | Transport Layer Security — cryptographic protocol for encrypted, authenticated communication | https://en.wikipedia.org/wiki/Transport_Layer_Security | | — |
| WebRTC | Open standard for peer-to-peer audio, video, and data streaming in browsers | https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API | `video:protocol` | developers/streaming, resources/glossary, solutions/webrtc |
| WebSocket | Full-duplex bidirectional communication protocol over a single TCP connection | https://en.wikipedia.org/wiki/WebSocket | | — |

## technical:dev

Developer tools — APIs, SDKs, and development concepts.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| API | Application Programming Interface — defined rules for software communication | https://en.wikipedia.org/wiki/API | | — |
| API key | Secret unique identifier authenticating API requests | https://en.wikipedia.org/wiki/API_key | | — |
| Bearer token | Access token in HTTP Authorization headers for authentication | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization | | solutions/api |
| CLI | Command-Line Interface — text-based interaction with software | https://en.wikipedia.org/wiki/Command_line_interface | | orchestrators/setup, orchestrators/config, resources/glossary |
| CORS | Cross-Origin Resource Sharing — HTTP mechanism for cross-origin browser access | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS | | solutions/api, solutions/player |
| Endpoint | Specific URL path where an API receives requests | https://en.wikipedia.org/wiki/Web_API | | solutions/api, developers/api |
| SDK | Software Development Kit — tools, libraries, docs for building on a platform | https://en.wikipedia.org/wiki/Software_development_kit | | solutions/sdks |
| Solidity | Statically-typed language for Ethereum smart contracts | https://en.wikipedia.org/wiki/Solidity | `web3:concept` | developers/protocol |
| Webhook | HTTP callback triggered by an event, sending POST to configured URL | https://en.wikipedia.org/wiki/Webhook | | developers/api, gateways/events, orchestrators/discovery, solutions/webhooks |
| Yarn | JavaScript package manager with parallel installs and deterministic resolution | https://en.wikipedia.org/wiki/Yarn_(package_manager) | | — |

## technical:security

Security — encryption, authentication, and content provenance.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Access control | Granting/restricting resource access based on authentication and authorization | https://en.wikipedia.org/wiki/Access_control | `video:studio` | solutions/access-control, solutions/api |
| AES-CBC | AES in Cipher Block Chaining mode — symmetric encryption where each block is XOR'd with previous ciphertext | https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation | | solutions/access-control |
| C2PA | Coalition for Content Provenance and Authenticity — standard for tamper-evident content manifests | https://c2pa.org/ | | solutions/provenance, solutions/ai |
| Encrypted asset | Media file protected by encryption so only authorized parties can access | https://en.wikipedia.org/wiki/Advanced_Encryption_Standard | `video:studio` | solutions/access-control, solutions/vod |
| Ethereum signature | Cryptographic signature from Ethereum private key (ECDSA on secp256k1) | https://ethereum.org/developers/docs/accounts/ | | — |
| Multi-sig | Multisignature scheme requiring multiple keys to authorize a transaction | https://en.wikipedia.org/wiki/Multisignature | | — |
| Provenance | Verified chain of custody and edit history of a digital asset | https://c2pa.org/ | | solutions/provenance |
| Remote signer | Service holding private keys securely and signing transactions on behalf of a node | https://ethereum.org/developers/docs/consensus-mechanisms/pos/keys/ | | gateways/security, orchestrators/security, resources/glossary |
| Signing key | Cryptographic private key producing digital signatures | https://ethereum.org/developers/docs/accounts/ | `video:studio` | — |
| TUS upload | Resumable file upload protocol over HTTP allowing interrupted uploads to resume | https://tus.io/ | | solutions/vod |

## technical:social

Social protocols — decentralized social networking standards.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| AT Protocol | Authenticated Transfer Protocol — open standard for decentralized social networking by Bluesky | https://en.wikipedia.org/wiki/AT_Protocol | | solutions/integrations |
| Fediverse | Federation of social networking platforms communicating via open protocols (ActivityPub) | https://en.wikipedia.org/wiki/Fediverse | | solutions/integrations |

---

# 7. operational

## operational:governance

Governance processes — LIPs, proposals, voting, and decision-making.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Co-signer | Additional authorized party whose signature is required for multi-sig governance transactions | https://en.wikipedia.org/wiki/Multisignature | | — |
| Governance | System of rules and processes for protocol decision-making including on-chain voting | https://github.com/livepeer/wiki/wiki/Governance | | home/governance, lpt/governance, resources/glossary |
| GovWorks | Livepeer's governance coordination team supporting SPE operations and governance processes | https://forum.livepeer.org/t/govworks-community-updates/2673 | `livepeer:entity` | community/governance, community/treasury |
| LIP | Livepeer Improvement Proposal — formal design document for protocol changes | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-1.md | `livepeer:protocol` | about/governance, community/governance, developers/protocol, home/governance, lpt/governance |
| LIP-89 | LIP introducing on-chain LivepeerGovernor and community treasury | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | | orchestrators/protocol |
| LIP-91/92 | LIP-91 bundles treasury establishment; LIP-92 defines inflation-funded mechanism | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-91.md | | orchestrators/protocol |
| Passing threshold | Minimum "for" vote percentage (excluding abstentions) for proposal passage | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | | — |
| Pre-Proposal | Informal discussion document on the Forum before a formal LIP | https://forum.livepeer.org/c/governance/17 | | community/governance |
| Quorum | Minimum stake participation for a binding vote result | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | `web3:governance` | about/governance, community/governance, lpt/governance |
| RFP | Request for Proposal — formal solicitation inviting teams to submit proposals | https://forum.livepeer.org/t/rfp-documentation-restructure/3071 | | community/treasury |
| Snapshot | Off-chain gasless voting platform for gauging community sentiment | https://snapshot.org/ | | — |
| Vote detachment | Delegators overriding their orchestrator's vote with individual stake-weighted vote | https://github.com/livepeer/wiki/wiki/Governance | | community/governance |
| Voting delay | Number of rounds (1) between proposal creation and voting start | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | | community/governance |
| Voting period | Number of rounds (10) during which stakeholders can cast votes | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md | | community/governance |

## operational:community

Community — programs, events, and communication channels.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Advisory Boards | Domain-specific groups recommending strategic priorities for the project | https://forum.livepeer.org/t/advisory-boards-a-new-era-of-strategy-for-the-livepeer-project/2879 | `livepeer:entity` | community/governance |
| Ambassador Programme | Community outreach initiative where participants represent Livepeer to new audiences | https://www.livepeer.org/community-hub | | community/programs, community/index |
| Dev Call | Recurring meeting where core developers discuss protocol development and roadmap | https://forum.livepeer.org/c/governance/17 | | community/events, community/development |
| Governance Forum | The Forum's governance category for LIPs, pre-proposals, and protocol governance | https://forum.livepeer.org/c/governance/17 | | community/governance, community/tools |
| KYO | Know Your Orchestrator — Live Pioneers interview series profiling orchestrators | https://forum.livepeer.org/t/building-the-live-pioneers-community-seeking-your-support/2454 | | community/programs, community/events |
| Live Pioneers | Independent community for long-term LPT holders producing educational content and guides | https://forum.livepeer.org/t/pre-proposal-live-pioneers-3rd-wave/2955 | | community/programs, community/index |
| Livepeer Discord | Primary real-time chat platform for the Livepeer community | https://www.livepeer.org/community-hub | | — |
| Treasury Forum | Forum section for treasury proposals, SPE funding, and resource allocation | https://forum.livepeer.org/c/treasury/18 | | community/treasury |
| Treasury Talk | Recurring community call focused on treasury discussions and SPE updates | https://forum.livepeer.org/c/treasury/18 | | community/events |
| Water Cooler | Biweekly informal community call for development updates and ecosystem news | https://forum.livepeer.org/c/governance/17 | | community/events |
| Workstreams | Focused execution teams organized around specific domains | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 | `livepeer:entity` | community/governance |

## operational:monitoring

Monitoring and metrics — observability, performance tracking, and analytics.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Dune | Blockchain analytics platform for SQL queries on on-chain data | https://dune.com/home | | community/tools, community/analytics |
| Failover | Automatic switching to backup node/system when primary fails | https://en.wikipedia.org/wiki/Failover | | gateways/routing, gateways/reliability, community/tools |
| Grafana | Open-source visualization/dashboarding platform for metrics and logs | https://en.wikipedia.org/wiki/Grafana | | community/tools, community/monitoring |
| Health check | Periodic probe verifying a service is running and responsive | https://docs.livepeer.org/developers/guides/monitor-stream-health | | — |
| livepeer-monitoring | Bundled Prometheus/Grafana container for monitoring Livepeer node instances | https://github.com/livepeer/livepeer-monitoring | `livepeer:tool` | — |
| Loki | Horizontally scalable log aggregation system by Grafana Labs | https://grafana.com/oss/loki/ | | orchestrators/monitoring, orchestrators/operations |
| Performance score | Composite metric: orchestrator's average utility = latency score x success rate | https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding | | orchestrators/discovery |
| Prometheus | Open-source monitoring system collecting time-series metrics via HTTP pull | https://en.wikipedia.org/wiki/Prometheus_(software) | | — |
| Smoke test | Preliminary test verifying basic system functionality before deeper testing | https://en.wikipedia.org/wiki/Smoke_testing_(software) | | orchestrators/ai |
| Throughput | Rate of successful data processing per unit time, measuring system capacity | https://en.wikipedia.org/wiki/Throughput | | orchestrators/performance |
| Transcode fail rate | Percentage of source segments an orchestrator fails to transcode | https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding | | orchestrators/performance |
| Uptime | Percentage of time a node/service is operational and reachable | https://docs.livepeer.org/orchestrators/guides/benchmark-transcoding | | — |

## operational:process

Operational processes — workflows, scaling, and best practices.

| Term | Definition | Source URL | Also tagged | Pages |
|---|---|---|---|---|
| Conventional Commits | Specification for structured commit messages enabling automated changelogs | https://www.conventionalcommits.org/en/v1.0.0/ | | community/development, community/contributing |
| Demand aggregation | Consolidating requests from multiple sources for efficient network routing | https://www.livepeer.org/network | | gateways/architecture, gateways/economics |
| KYC | Know Your Customer — identity verification process for regulatory compliance | https://en.wikipedia.org/wiki/Know_your_customer | | developers/access-control |
| Onboarding | Guiding new participants through setup, configuration, and first interactions | https://www.livepeer.org/community-hub | | — |
| Overhead | Additional operational costs beyond direct computation (gas, bandwidth, admin) | https://docs.livepeer.org/references/go-livepeer/cli-reference | `economic:pricing` | orchestrators/performance |
| Scaling | Increasing capacity to handle more work, horizontally (more nodes) or vertically (more power) | https://en.wikipedia.org/wiki/Scalability | | gateways/architecture |
| Session reuse | Optimization reusing established gateway-orchestrator connections across segments | https://docs.livepeer.org/references/go-livepeer/cli-reference | | — |
| Stateless execution | Computation model processing each request independently without server-side state | https://en.wikipedia.org/wiki/Stateless_protocol | | — |
| Workload | Total volume of computational tasks assigned to or performed by network nodes | https://en.wikipedia.org/wiki/Workload | | orchestrators/performance |
| Zero-to-Hero | Guided learning path from no knowledge to competent ecosystem participation | https://www.livepeer.org/learn | | developers/guides |
