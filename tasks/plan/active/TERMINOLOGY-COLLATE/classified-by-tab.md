# Terminology Classified by Tab

**Date**: 2026-03-20
**Sources**: 9 agent deep-reads + terminology-search.js (8,460 candidates) + generate-glossary.js (176 known terms)
**Status**: Draft — awaiting human review

---

## Per-Tab Term Counts

| Tab | Folder | Agent Terms | Script Terms (generate-glossary) | Script Candidates (terminology-search) |
|---|---|---|---|---|
| Home | `v2/home/` | ~100 | 176 (all scan v2) | 8,460 (all scan v2) |
| About | `v2/about/` | 104 | — | — |
| Solutions | `v2/solutions/` | ~140 | — | — |
| Developers | `v2/developers/` | 189 | — | — |
| Gateways | `v2/gateways/` | 94 | — | — |
| Orchestrators | `v2/orchestrators/` | ~150 | — | — |
| LP Token | `v2/lpt/` | ~120 | — | — |
| Community | `v2/community/` | ~115 | — | — |
| Resources | `v2/resources/` | ~115 | — | — |

> Note: Script outputs scanned all v2 pages globally (not per-tab). The JSON data files were not persisted to disk. Agent per-tab outputs provide the primary per-tab breakdown.

**Total unique agent-extracted terms (estimated after dedup): ~450-550**

---

## Cross-Tab Term Coverage

### Terms appearing in ALL or MOST tabs (universal terms)

These terms appear across 7+ tabs and need strong, canonical definitions:

| Term | Tabs Found | Tags | Definition | Source URL |
|---|---|---|---|---|
| Orchestrator | all 9 | `livepeer:role` | A supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| Gateway | all 9 | `livepeer:role` | A Livepeer node that submits jobs, routes work to orchestrators, manages payment flows, and provides a direct protocol interface. | https://docs.livepeer.org/ai/gateways/start-gateway |
| Delegator | all 9 | `livepeer:role` | A token holder who stakes LPT to an orchestrator to help secure the network, participate in governance, and earn rewards. | https://docs.livepeer.org/v2/about/livepeer-network/overview |
| LPT (Livepeer Token) | all 9 | `web3:token`, `livepeer:protocol` | The Livepeer Token, an ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security. | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT |
| Transcoding | all 9 | `video:processing` | The direct digital-to-digital conversion of video from one encoding to another, used to produce multiple renditions for adaptive streaming. | https://en.wikipedia.org/wiki/Transcoding |
| Staking | all 9 | `web3:tokenomics`, `economic:reward` | Locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn rewards. | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |
| ETH | all 9 | `web3:token` | The native cryptocurrency of the Ethereum network, used to pay transaction fees (gas) and secure the network through staking. | https://ethereum.org/what-is-ether/ |
| GPU | all 9 | `technical:infra` | A graphics processing unit — a specialized processor designed for parallel computation, used for rendering, video encoding, and AI inference. | https://en.wikipedia.org/wiki/Graphics_processing_unit |
| Inference | 8 | `ai:concept` | Running a trained model on new input data to produce predictions or outputs, as opposed to training which updates parameters. | https://en.wikipedia.org/wiki/Inference_engine |
| Arbitrum | 8 | `web3:chain` | A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain and batching them for low costs with Ethereum-grade security. | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |
| Treasury | 8 | `economic:treasury`, `livepeer:protocol` | A protocol-governed pool of LPT funded by inflation, from which community-approved proposals receive funding for ecosystem development. | https://forum.livepeer.org/t/its-time-to-act-accumulation-the-treasury-ceiling/3153/1 |
| AI pipeline | 7 | `ai:pipeline` | An end-to-end construct orchestrating data flow through processing steps (input, preprocessing, inference, post-processing) to produce output. | https://huggingface.co/docs/transformers/en/main_classes/pipelines |
| RTMP | 7 | `video:protocol` | Real-Time Messaging Protocol (RTMP) is a communication protocol for streaming audio, video, and data over the Internet, operating on top of TCP using port 1935. | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |
| HLS | 7 | `video:protocol` | HTTP Live Streaming (HLS) is an HTTP-based adaptive bitrate streaming protocol developed by Apple that encodes video into multiple quality levels with an index playlist, allowing players to adapt to network conditions. | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |
| Model | 7 | `ai:concept` | Mathematical structure (neural network with learned weights) resulting from training, enabling predictions or generation for new inputs. | https://en.wikipedia.org/wiki/Machine_learning |
| Segment | 7 | `livepeer:protocol`, `video:processing` | A time-sliced chunk of multiplexed audio and video independently transcoded for parallel processing. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Round | 6 | `livepeer:protocol` | A discrete time interval (in Ethereum/Arbitrum blocks) for calculating staking rewards and coordinating global protocol state. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Reward call | 6 | `livepeer:protocol`, `economic:reward` | An on-chain transaction an active orchestrator submits each round to mint and distribute newly created LPT rewards. | https://docs.livepeer.org/orchestrators/guides/configure-reward-calling |
| SPE (Special Purpose Entity) | 6 | `livepeer:entity` | A treasury-funded unit with defined scope, budget, and accountability for specific ecosystem initiatives. | https://forum.livepeer.org/t/livepeer-governance-process/2767 |
| BYOC | 6 | `livepeer:deployment`, `ai:concept` | Bring-Your-Own-Container, enabling teams to deploy containerized Python workloads to participate in Livepeer streaming. | https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208 |
| ComfyStream | 6 | `livepeer:product`, `ai:framework` | A ComfyUI custom node running real-time media workflows for AI-powered video and audio processing on live streams. | https://github.com/livepeer/comfystream |
| Daydream | 6 | `livepeer:product` | Livepeer's hosted realtime AI video platform turning live camera input into AI-transformed visuals with sub-second latency. | https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/ |
| Latency | 6 | `video:playback`, `technical:infra` | Latency in video streaming is the delay between capture at source and display on the viewer's device, accumulating at every pipeline stage. | https://en.wikipedia.org/wiki/Latency_(audio) |
| Slashing | 5 | `livepeer:protocol`, `economic:reward` | A penalty mechanism destroying a portion of an orchestrator's bonded LPT for protocol violations. | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |
| Probabilistic micropayments | 5 | `economic:payment` | A payment model where tickets are sent as lottery-like instruments; only winning tickets are redeemed on-chain, amortizing transaction costs. | https://livepeer.org/docs/video-developers/core-concepts/payments |
| Active set | 5 | `livepeer:protocol` | The top 100 orchestrators by total stake eligible to receive work and earn rewards each round. | https://docs.livepeer.org/v2/orchestrators/advanced-setup/staking-LPT |
| Warm model / Cold model | 5 | `ai:concept`, `livepeer:config` | A warm model is pre-loaded in GPU memory for fast inference; a cold model loads on-demand with startup latency. | https://docs.livepeer.org/ai/orchestrators/start-orchestrator |
| LIP (Livepeer Improvement Proposal) | 5 | `operational:governance`, `livepeer:protocol` | A formal design document describing a new feature, parameter change, or process update for the Livepeer protocol. | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-1.md |

### Terms unique or concentrated in specific tabs

| Tab | Unique/concentrated terms | Count | Primary Tags |
|---|---|---|---|
| **Home** | Cascade (upgrade), Confluent upgrade, Delta upgrade, Snowmelt, Streamflow, Tributary, Creator economy, Digital twin, SLAM, NPC, Proof of utility, Interactive media | ~12 | `livepeer:upgrade`, `ai:application`, `economic:business` |
| **About** | OSI model, Execution layer, Controller contract, Minter contract, Pay-per-pixel, Synthetic verification, Topology, Video DNA, Ephemeral compute, Fee share, Governor contract, Rebonding, Spot job auctions | ~13 | `livepeer:protocol`, `livepeer:contract`, `economic:pricing` |
| **Solutions** | Livestream, Playback ID, Stream key, Session (Studio), Asset, Clip, Multistream, Multistream target, Recording, WHIP/WHEP, B-frames, Keyframe interval, Encrypted asset, AES-CBC, Access control, Signing key, Playback policy, Viewership, TTFF, Rebuffer ratio, C2PA, Provenance, TUS upload, Room, lvpr.tv, Broadcast component, AT Protocol, Fediverse, Embody, Frameworks | ~30 | `video:studio`, `video:protocol`, `video:playback`, `technical:security` |
| **Developers** | Developer Stack, Protocol Layer, FrameProcessor, PyTrickle, Trickle Streaming Protocol, NaaP, Livepeer Cloud, Model Card, Model ID, SAM 2, StreamDiffusion, Ollama, LoRA, Sampler, KYC, Zero-to-Hero, Live-video-to-video, Batch AI, Cold Start, Data-channel Output, Intent Classification | ~21 | `livepeer:sdk`, `ai:model`, `ai:pipeline`, `livepeer:product` |
| **Gateways** | Arbitrage, Demand aggregation, Deposit/Reserve, Dispersal, Dual gateway, Encoding ladder, Gateway Middleware, Gateway-as-a-service, Interval-based payment, Operational mode (on-chain/off-chain), Per-pixel pricing, Per-request pricing, Service margin, Clearinghouse, Session reuse, Stateless execution, Weight factors, Fixed segment, GOP | ~19 | `economic:pricing`, `economic:payment`, `livepeer:deployment`, `video:encoding` |
| **Orchestrators** | aiModels.json, aiWorker, AIServiceRegistry, O-T split, Siphon, Solo operator, Pool/Pool operator/Pool worker, orchSecret, NVDEC/NVENC, Dual mode, Smoke test, Capability advertisement, Capability matching, Hard gate, pixelsPerUnit, Transcode fail rate, Loki, OrchestratorInfo, Throughput, Overhead, Win probability, Winning ticket, Redeemer, Titan Node, USD pricing (Chainlink) | ~25 | `livepeer:config`, `livepeer:deployment`, `economic:payment`, `operational:monitoring` |
| **LPT** | Bonding Rate (beta), Target Bonding Rate, Inflation Adjustment (alpha), Supply (S_t), Economic Weight, Checkpoint, Claim Earnings, Rebond, Thawing Period, Delegator Position, Voting Power (V_i), Timelock, BondingManager, RoundsManager, BondingVotes, LivepeerGovernor, Genesis Supply, Vesting, Dilution, Fee Switch, veLPT, L2-specific Inflation, Quadratic Funding, Retroactive Funding, Milestone-based Grants, Atomic Execution, Proposer Bond, Concentration Risk, Liquidity Risk, Operator Market, Capital Efficiency | ~31 | `web3:tokenomics`, `web3:governance`, `livepeer:contract`, `economic:treasury` |
| **Community** | Workstreams, Advisory Boards, GovWorks, Treasury Talk, Water Cooler, Dev Call, Vote detachment, LiveInfra, GWID, LISAR, Transformation SPE, AI Video SPE, Live Pioneers, KYO, Governance Forum, Treasury Forum, Surge strategy, Voting delay/period/passing threshold, Pre-Proposal, Co-signer, Ambassador Programme, Tenderize, Conventional Commits, Livepeer Academy, Livepeer Primer, awesome-livepeer | ~26 | `operational:community`, `operational:governance`, `livepeer:entity`, `livepeer:tool` |
| **Resources** | Livepeer Actor, Protocol Actor, Developer Platform, Quality Ladder, Stake-for-Access, LPMS, Merkle Mine, WHEP, Slashing Conditions, Verifier | ~10 | `livepeer:protocol`, `livepeer:role`, `video:processing`, `web3:concept` |

---

## Gap Analysis

### Terms agents found that scripts would miss

These are compound phrases and contextual terms that pattern-matching can't catch:

- **Livepeer upgrade names**: Snowmelt, Tributary, Streamflow, Confluent, Cascade, Delta
- **Compound economic terms**: Pay-per-pixel, Price per unit, Service margin, Demand aggregation, Arbitrage
- **Operational concepts**: Dual mode, O-T split, Siphon, Solo operator, Pool operator, Smoke test, Cold start, Warm model
- **Governance terms**: Vote detachment, Pre-Proposal, Voting delay, Passing threshold, Co-signer, Treasury Talk, Water Cooler
- **Architecture terms**: Execution layer, Protocol layer, Network layer, Operational mode, Deployment type
- **Product names in context**: Daydream, Streamplace, Embody, Frameworks, GWID, LISAR, LiveInfra
- **Plain-English with domain meaning**: Round, Segment, Session, Capability, Active set, Job, Reward call, Activation

### Terms scripts found that agents may have undercounted

- High-frequency technical terms: HTTPS (2,400x), Docker (1,282x), Container (880x), JSON (769x), Port (637x)
- Generic but important: API (1,882x), SDK (438x), Server (412x), Endpoint (753x)
- Video basics: Stream (1,316x), Playback (510x), Resolution (158x), Encoding (61x)

### Terms still missing definitions (from generate-glossary.js)

**126 of 176 known terms have NO definition yet.** Highest-priority gaps:

| Term | Occurrences | Category |
|---|---|---|
| Livepeer | 9,599 | Livepeer Protocol |
| GPU | 2,552 | AI / ML |
| HTTPS | 2,400 | Technical |
| API | 1,882 | Technical |
| Docker | 1,282 | Technical |
| Arbitrum | 1,698 | Web3 |
| Ethereum | 977 | Web3 |
| Wallet | 623 | Web3 |
| LLM | 600 | AI / ML |
| go-livepeer | 1,581 | Livepeer Protocol |
| AI Gateway | 578 | Livepeer Protocol |
| AI Worker | 256 | Livepeer Protocol |
| Livepeer Studio | 420 | Livepeer Protocol |
| Daydream | 612 | Livepeer Protocol |
| Streamplace | 194 | Livepeer Protocol |

---

## Domain Distribution Across Tabs

| Domain | Tabs with heavy coverage | Notes |
|---|---|---|
| **Protocol & Network** | About, LPT, Orchestrators | About has the deepest protocol explanations |
| **Actors & Roles** | All tabs | Universal — every tab references orchestrators, gateways, delegators |
| **Web3 & Blockchain** | About, LPT, Community | LPT tab is most detailed on tokenomics |
| **Video Engineering** | Solutions, Gateways, Orchestrators | Solutions covers Studio-side; Gateways/Orchestrators cover network-side |
| **AI & Inference** | Developers, Orchestrators, Home | Developers has the most AI pipeline detail |
| **Payments & Economics** | About, LPT, Orchestrators, Gateways | Each tab covers economics from its role's perspective |
| **Operational** | Gateways, Orchestrators | Deployment, configuration, CLI flags |
| **Governance** | LPT, Community, About | LPT has formal governance mechanics; Community has practical governance |
| **Products & Apps** | Home, Solutions, Developers | Studio, Daydream, Streamplace, ComfyStream |

---

## Checkpoint

**Questions for review:**

1. Are there any tabs or sections we missed?
2. Any critical terms you know should be here but aren't?
3. Should we proceed with Task 6 (merge all sources into harvest-complete.md) or do you want to refine the scan first?
4. For the per-tab glossaries (Task 7): should each tab's glossary include ONLY terms used in that tab, or also include prerequisite terms needed to understand those pages?
