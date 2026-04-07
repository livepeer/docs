# Task 5d — Scan Summary: Per-Tab Term Inventories

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

| Term | Tabs Found | Tags |
|---|---|---|
| Orchestrator | all 9 | `livepeer:role` |
| Gateway | all 9 | `livepeer:role` |
| Delegator | all 9 | `livepeer:role` |
| LPT (Livepeer Token) | all 9 | `web3:token`, `livepeer:protocol` |
| Transcoding | all 9 | `video:processing` |
| Staking | all 9 | `web3:tokenomics`, `economic:reward` |
| ETH | all 9 | `web3:token` |
| GPU | all 9 | `technical:infra` |
| Inference | 8 | `ai:concept` |
| Arbitrum | 8 | `web3:chain` |
| Treasury | 8 | `economic:treasury`, `livepeer:protocol` |
| AI pipeline | 7 | `ai:pipeline` |
| RTMP | 7 | `video:protocol` |
| HLS | 7 | `video:protocol` |
| Model | 7 | `ai:concept` |
| Segment | 7 | `livepeer:protocol`, `video:processing` |
| Round | 6 | `livepeer:protocol` |
| Reward call | 6 | `livepeer:protocol`, `economic:reward` |
| SPE (Special Purpose Entity) | 6 | `livepeer:entity` |
| BYOC | 6 | `livepeer:deployment`, `ai:concept` |
| ComfyStream | 6 | `livepeer:product`, `ai:framework` |
| Daydream | 6 | `livepeer:product` |
| Latency | 6 | `video:playback`, `technical:infra` |
| Slashing | 5 | `livepeer:protocol`, `economic:reward` |
| Probabilistic micropayments | 5 | `economic:payment` |
| Active set | 5 | `livepeer:protocol` |
| Warm model / Cold model | 5 | `ai:concept`, `livepeer:config` |
| LIP (Livepeer Improvement Proposal) | 5 | `operational:governance`, `livepeer:protocol` |

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
