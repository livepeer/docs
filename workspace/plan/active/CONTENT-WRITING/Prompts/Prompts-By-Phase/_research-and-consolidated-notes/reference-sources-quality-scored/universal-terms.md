# Livepeer — Universal Terms

**Purpose**: Canonical definitions for terms that appear across all or most tabs. Use these in any content prompt to ensure consistent terminology.
**Full source**: `workspace/plan/active/TERMINOLOGY-COLLATE/classified-by-tab.md` and per-tab glossaries
**Generated**: 2026-03-20

---

## Terms in All 9 Tabs

These must be defined consistently everywhere they appear.

| Term | Definition | Source |
|---|---|---|
| Orchestrator | A supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards. | [docs.livepeer.org](https://docs.livepeer.org/v2/about/livepeer-network/overview) |
| Gateway | A Livepeer node that submits jobs, routes work to orchestrators, manages payment flows, and provides a direct protocol interface. | [docs.livepeer.org](https://docs.livepeer.org/ai/gateways/start-gateway) |
| Delegator | A token holder who stakes LPT to an orchestrator to help secure the network, participate in governance, and earn rewards. | [docs.livepeer.org](https://docs.livepeer.org/v2/about/livepeer-network/overview) |
| LPT (Livepeer Token) | The Livepeer Token, an ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security. | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) |
| Transcoding | The direct digital-to-digital conversion of video from one encoding to another, used to produce multiple renditions for adaptive streaming. | [Wikipedia](https://en.wikipedia.org/wiki/Transcoding) |
| Staking | Locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn rewards. | [ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/) |
| ETH | The native cryptocurrency of the Ethereum network, used to pay transaction fees (gas). | [ethereum.org](https://ethereum.org/what-is-ether/) |
| GPU | A graphics processing unit — a specialized processor for parallel computation, used for video encoding and AI inference. | [Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit) |

---

## Terms in 8 Tabs

| Term | Definition | Source |
|---|---|---|
| Inference | Running a trained model on new input data to produce predictions or outputs. | [Wikipedia](https://en.wikipedia.org/wiki/Inference_engine) |
| Arbitrum | A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain with Ethereum-grade security. | [docs.arbitrum.io](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction) |
| Treasury | A protocol-governed pool of LPT funded by inflation, from which community-approved proposals receive funding. | [Forum](https://forum.livepeer.org/t/its-time-to-act-accumulation-the-treasury-ceiling/3153/1) |

---

## Terms in 7 Tabs

| Term | Definition | Source |
|---|---|---|
| AI pipeline | An end-to-end construct orchestrating data flow through processing steps (input, preprocessing, inference, post-processing) to produce output. | [HuggingFace](https://huggingface.co/docs/transformers/en/main_classes/pipelines) |
| RTMP | Real-Time Messaging Protocol — streaming protocol operating over TCP on port 1935. | [Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) |
| HLS | HTTP Live Streaming — HTTP-based adaptive bitrate streaming protocol encoding video at multiple quality levels. | [Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) |
| Model | A neural network with learned weights enabling predictions or generation for new inputs. | [Wikipedia](https://en.wikipedia.org/wiki/Machine_learning) |
| Segment | A time-sliced chunk of multiplexed audio and video independently transcoded for parallel processing. | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) |

---

## Terms in 6 Tabs

| Term | Definition | Source |
|---|---|---|
| Round | A discrete time interval (in Arbitrum blocks) for calculating staking rewards and coordinating global protocol state. | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) |
| Reward call | An on-chain transaction an active orchestrator submits each round to mint and distribute newly created LPT rewards. | [docs.livepeer.org](https://docs.livepeer.org/orchestrators/guides/configure-reward-calling) |
| SPE (Special Purpose Entity) | A treasury-funded unit with defined scope, budget, and accountability for specific ecosystem initiatives. | [Forum](https://forum.livepeer.org/t/livepeer-governance-process/2767) |
| BYOC | Bring-Your-Own-Container — enables teams to deploy containerized Python workloads to participate in Livepeer AI streaming. | [Forum](https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208) |
| ComfyStream | A ComfyUI custom node running real-time media workflows for AI-powered video and audio processing on live streams. | [github.com/livepeer/comfystream](https://github.com/livepeer/comfystream) |
| Daydream | Livepeer's hosted realtime AI video platform turning live camera input into AI-transformed visuals with sub-second latency. | [blog.livepeer.org](https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/) |

---

## Terms in 5 Tabs

| Term | Definition | Source |
|---|---|---|
| Slashing | A penalty mechanism destroying a portion of an orchestrator's bonded LPT for protocol violations. | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) |
| Reward cut | The percentage of inflationary LPT rewards an orchestrator retains before distributing to delegators. A higher reward cut means delegators receive less. | [docs.livepeer.org](https://docs.livepeer.org/delegators/guides/yield-calculation) |
| Fee cut | The percentage of ETH service fees an orchestrator retains before sharing with delegators. | [docs.livepeer.org](https://docs.livepeer.org/delegators/guides/yield-calculation) |
| Probabilistic micropayments | A payment scheme where tickets with a face value and winning probability are exchanged off-chain, with only winning tickets settled on-chain to minimise gas costs. | [Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) |
| Active set | The top 100 orchestrators by total bonded stake eligible to receive video transcoding work in the current round. AI inference routing does not require active set membership. | [docs.livepeer.org](https://docs.livepeer.org/v2/about/livepeer-network/overview) |

---

## Cross-Tab Index

See full cross-tab matrix at: `workspace/plan/active/TERMINOLOGY-COLLATE/consolidated/glossary-index.md` (Section 3)

Key cross-tab terms with ambiguous ownership:

| Term | Tabs | Note |
|---|---|---|
| Governance | LPT + Community + About | LPT owns mechanics; Community owns discussion; About owns system model |
| Delegation | LPT + About + Community | LPT owns the action; About owns the concept; Community owns participation framing |
| Reward cut / Fee cut | Orchestrators + LPT + About | Orchestrators own configuration; LPT owns interpretation as delegator signal; About owns the system |
| Treasury | LPT + Community + About | LPT owns participation; Community owns governance discourse; About owns economic model |
