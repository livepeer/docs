# Domain + Niche — Definitions

**Status**: DRAFT
**Related**: [index.md](index.md) | [pagePurpose.md](pagePurpose.md) | [framework.md](framework.md)

---

## Field Definition

### `domain`

1. **Token**: `domain`
2. **Domain**: Content Strategy / Terminology Governance
3. **Definition**: The broad knowledge field the content belongs to
4. **Description**: Domain declares what field a page operates in. It tells the pipeline what vocabulary is native, what analytical frameworks apply, what voice register is appropriate, and what examples are contextually correct. Without it, the AI guesses the domain from context — and gets it wrong at the edges. Domain makes the domain-anchor rule enforceable: use the field's correct native terminology, not generic wording.
5. **Scope**: Frontmatter field — set per page

**Governs**:

1. **Terminology**: which vocabulary is native and correct for this field
2. **Voice register**: formality, framing style, analytical stance
3. **Evaluation frameworks**: what paradigms apply (ROI for finance, benchmarks for technical)
4. **Example selection**: what examples are contextually appropriate for this field

---

### `niche`

1. **Token**: `niche`
2. **Domain**: Content Strategy / Terminology Governance
3. **Definition**: The specific subject context within a domain
4. **Description**: Niche narrows the domain to a specific technical or subject context. It is cross-domain — `AI` can appear under `technical` (AI inference infrastructure) or `business` (AI product strategy) or `economics` (AI compute markets). Niche tells the pipeline which specific terminology subset to use within the broader domain. A page can have multiple niches.
5. **Scope**: Frontmatter field — optional, array, set per page

---

## Quickview

### Domain

| Token | Field | Livepeer content areas |
|---|---|---|
| `technical` | Engineering, systems, software, infrastructure | Node setup, SDK integration, API docs, protocol architecture |
| `economics` | Tokenomics, incentive design, market dynamics | Staking rewards, delegation mechanics, fee markets, inflation |
| `finance` | Investment, revenue, costs, ROI, capital | GPU ROI analysis, earnings calculators, operating costs, yield |
| `business` | Operations, strategy, partnerships, product | Gateway business models, founder evaluation, ecosystem positioning |
| `governance` | Protocol governance, voting, proposals, policy | LIPs, SPEs, on-chain voting, delegation governance |
| `media` | Video, encoding, transcoding, broadcast | Codec guides, streaming setup, transcoding pipelines, VOD |
| `AI` | Inference, models, GPU compute, AI pipelines | AI gateway setup, inference routing, model selection, compute |

### Niche

| Token | Narrows to | Appears with |
|---|---|---|
| `web3` | Decentralised context, on-chain, blockchain paradigms | `technical`, `economics`, `governance` |
| `protocol` | Livepeer protocol specifics, smart contracts, consensus | `technical`, `economics`, `governance` |
| `tokenomics` | LPT mechanics, staking, delegation, rewards | `economics`, `finance` |
| `AI` | ML inference, model serving, compute routing | `technical`, `business`, `media` |
| `video` | Codecs, encoding, transcoding, formats | `technical`, `media` |
| `streaming` | Delivery, CDN, live/VOD, broadcast | `technical`, `media` |
| `hardware` | GPU, physical compute, datacenter specs | `technical`, `finance` |
| `infrastructure` | Nodes, networking, cloud/bare-metal deployment | `technical` |

---

## Domain Values

---

### `technical`

1. **Definition**: Engineering, software, and systems content — how things are built, deployed, and operated
2. **Description**: The primary domain for developer and orchestrator content. Technical content uses engineering-native vocabulary: APIs, SDKs, nodes, latency, throughput, deployment, configuration, architecture. Voice is precise, direct, and command-oriented. Explanations are mechanism-first. Examples use code, terminal output, and system diagrams.
3. **Terminology register**: Engineering vocabulary — specific, exact, imperative. Avoids business framing. Uses correct technical terms over plain-language substitutes.
4. **Voice**: Direct, precise, low abstraction. No persuasive framing. No business case language.
5. **Evaluation framework**: Benchmarks, performance metrics, latency/throughput, reliability, system specs
6. **Audiences it serves**: `developer`, `orchestrator`, `gateway`, `builder`

---

### `economics`

1. **Definition**: Tokenomics, incentive design, market dynamics, and network economic behaviour
2. **Description**: Economics content covers how the Livepeer network's economic layer works — token supply, inflation, delegation incentives, fee markets, reward curves, and game-theoretic design. Voice is analytical and precise, using economics and mechanism design vocabulary. Not the same as finance (which is about individual financial decisions) — economics is about systemic behaviour.
3. **Terminology register**: Economics and mechanism design vocabulary — incentives, equilibrium, game theory, supply/demand, marginal, staking, slashing, inflation rate
4. **Voice**: Analytical, precise, systems-level. Avoids both engineering detail and personal finance framing.
5. **Evaluation framework**: Game theory, incentive compatibility, token models, network effects
6. **Audiences it serves**: `delegator`, `orchestrator`, `developer`, `founder`

---

### `finance`

1. **Definition**: Individual financial decisions — investment, revenue, costs, ROI, capital allocation
2. **Description**: Finance content addresses the reader's personal or business financial decision: is this worth doing? What will it cost? What will I earn? ROI analysis, operating cost breakdowns, earnings projections, capital requirements. Voice is business-analytical and number-forward. Different from economics (systemic) — finance is about the reader's specific financial situation.
3. **Terminology register**: Finance vocabulary — ROI, yield, capex, opex, revenue, margin, payback period, breakeven, cash flow
4. **Voice**: Business-analytical, number-forward, outcome-focused. Uses financial framing and quantitative presentation.
5. **Evaluation framework**: ROI, NPV, payback period, margin analysis, cost/benefit
6. **Audiences it serves**: `orchestrator`, `founder`, `delegator`, `gateway`

---

### `business`

1. **Definition**: Operations, strategy, partnerships, and product positioning
2. **Description**: Business content addresses the reader as an operator or decision-maker — how to run something, how to position it, how to evaluate a strategic choice, how to approach partnerships. Voice is professional and outcome-oriented. Uses business vocabulary without being purely financial or technical.
3. **Terminology register**: Business vocabulary — strategy, operations, positioning, partnerships, go-to-market, growth, competitive advantage, value proposition
4. **Voice**: Professional, outcome-oriented, strategic. Neither purely technical nor purely financial.
5. **Evaluation framework**: Strategic analysis, competitive positioning, partnership value, operational efficiency
6. **Audiences it serves**: `founder`, `gateway`, `builder`

---

### `governance`

1. **Definition**: Protocol governance, on-chain voting, proposals, and policy
2. **Description**: Governance content covers how decisions get made in the Livepeer protocol — LIPs, SPEs, on-chain voting mechanics, delegation of governance weight, quorum rules, proposal lifecycle. Voice is formal and procedural. Uses governance-native vocabulary.
3. **Terminology register**: Governance vocabulary — proposal, quorum, ratification, delegation, voting weight, LIP, SPE, on-chain vote, veto
4. **Voice**: Formal, procedural, precise. Neutral on outcomes.
5. **Evaluation framework**: Governance process, voting mechanics, stakeholder analysis
6. **Audiences it serves**: `delegator`, `orchestrator`, `developer`, `community`

---

### `media`

1. **Definition**: Video, encoding, transcoding, streaming, and broadcast
2. **Description**: Media content addresses the video infrastructure layer — codec selection, transcoding pipelines, streaming protocols, VOD delivery, latency, quality settings. Uses media industry vocabulary. Distinct from `technical` (which is about software/systems) — media is about the video and broadcast domain specifically.
3. **Terminology register**: Media and broadcast vocabulary — codec (H.264, H.265, AV1), bitrate, ABR, HLS, RTMP, WebRTC, transcoding, rendition, keyframe, latency, CDN
4. **Voice**: Technical but media-industry-framed. Uses broadcast and streaming terminology natively.
5. **Evaluation framework**: Quality metrics (VMAF, PSNR), latency benchmarks, encoding efficiency, delivery reliability
6. **Audiences it serves**: `gateway`, `builder`, `developer`

---

### `AI`

1. **Definition**: AI inference, model serving, GPU compute, and AI pipeline orchestration
2. **Description**: AI content covers the infrastructure and operational layer for AI workloads on Livepeer — inference routing, model selection, GPU pipeline setup, compute cost, throughput. Uses AI/ML vocabulary. Distinct from the `AI` niche — `AI` as a domain means the primary field of the page is AI infrastructure or AI product; `AI` as a niche means AI is the specific context within another domain (e.g. technical).
3. **Terminology register**: AI/ML vocabulary — inference, model weights, GPU, VRAM, TFLOPS, throughput, latency, pipeline, orchestration, tokens/sec
4. **Voice**: Technical, precise, compute-forward. Can intersect with business framing for AI product pages.
5. **Evaluation framework**: Inference benchmarks, compute cost per token, GPU utilisation, model performance metrics
6. **Audiences it serves**: `builder`, `developer`, `gateway`

---

## Niche Values

---

### `web3`

1. **Definition**: Decentralised context — on-chain behaviour, blockchain paradigms, cryptographic primitives
2. **Applies when**: Content requires knowledge of how decentralised systems work — wallet addresses, on-chain state, gas, smart contracts, trustlessness, consensus
3. **Terminology it activates**: On-chain, off-chain, smart contract, wallet, address, gas, consensus, trustless, permissionless, decentralised

---

### `protocol`

1. **Definition**: Livepeer protocol specifics — the on-chain contracts, consensus rules, and economic design of the Livepeer network
2. **Applies when**: Content references Livepeer-specific protocol mechanics that aren't general web3 knowledge
3. **Terminology it activates**: Orchestrator selection, ticket protocol, probabilistic micropayments, rounds, activation, deactivation, bonding curve, LPT

---

### `tokenomics`

1. **Definition**: LPT token mechanics — staking, delegation, inflation, rewards, slashing
2. **Applies when**: Content addresses how LPT works as an economic instrument — earning, delegating, staking, reward distribution
3. **Terminology it activates**: Stake, delegate, reward cut, fee cut, inflation, unbonding period, LPT, orchstrator reward, delegator reward

---

### `AI`

1. **Definition**: AI/ML inference and model context — model types, compute requirements, inference pipelines
2. **Applies when**: Content is specifically about AI workloads, model serving, or AI-specific infrastructure within a broader domain
3. **Terminology it activates**: Inference, model, weights, GPU, VRAM, throughput, latency, pipeline, token, LLM, diffusion, multimodal

---

### `video`

1. **Definition**: Video processing context — codecs, encoding parameters, transcoding pipelines, quality
2. **Applies when**: Content requires specific knowledge of video formats, encoding, or processing
3. **Terminology it activates**: Codec, H.264, H.265, AV1, bitrate, resolution, rendition, keyframe, GOP, encode, transcode, VMAF

---

### `streaming`

1. **Definition**: Video delivery context — streaming protocols, CDN, live and VOD delivery
2. **Applies when**: Content requires knowledge of how video is delivered to viewers
3. **Terminology it activates**: HLS, RTMP, WebRTC, CDN, manifest, segment, latency, buffering, ABR, origin, edge

---

### `hardware`

1. **Definition**: Physical compute context — GPU specs, datacenter hardware, power, connectivity
2. **Applies when**: Content addresses hardware selection, specs, or physical infrastructure decisions
3. **Terminology it activates**: GPU, VRAM, NVME, PCIe, TDP, rack, bandwidth, power draw, cooling, datacenter

---

### `infrastructure`

1. **Definition**: Systems deployment context — nodes, networking, cloud/bare-metal, DevOps
2. **Applies when**: Content addresses how to deploy, configure, or maintain software infrastructure
3. **Terminology it activates**: Node, server, Docker, Kubernetes, bare-metal, cloud, VPS, port, firewall, systemd, CLI, binary

---

## Open Questions

1. **`marketing` vs `business`** — `marketing` was in the original domain list. Dropped in favour of `business` — Livepeer docs don't have a meaningful volume of pure marketing content, and business covers positioning/value prop. Confirm this is right.

2. **`AI` as domain AND niche** — intentional. `AI` as domain = the page's primary field is AI infrastructure or AI product. `AI` as niche = AI is the specific context within another domain (e.g. `technical` + `AI` niche = AI-specific technical content). Does this distinction hold?
