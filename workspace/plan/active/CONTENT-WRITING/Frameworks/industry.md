# Industry + Niche — Definitions

**Status**: ✅ Locked
**Related**: [index.md](index.md) | [pagePurpose.md](pagePurpose.md) | [framework.md](framework.md)

---

## Purpose and Aim

The `industry` field tells the pipeline what established field the content belongs to. Every industry has its own vocabulary, analytical frameworks, voice register, and evaluation standards — terminology that is native and expected within that field. Without declaring industry explicitly, an AI agent guesses the field from context and applies generic vocabulary where industry-specific vocabulary is required.

**The primary aim**: give the agent enough context to write in the right register and use the right native terminology — not to over-constrain it, but to anchor terminology choices to the correct industry conventions.

**The secondary aim**: make the domain-anchor rule enforceable. The naming rubric requires titles and sections to use the field's native terminology. `industry` makes that rule precise — the agent knows which field's vocabulary is native.

---

## Field Definitions

---

### `industry`

1. **Token**: `industry`
2. **Type**: Array — ordered, max 2 entries
3. **Definition**: The established industry field(s) the content belongs to, in order of dominance
4. **Description**: Declares what industry a page operates in, and in what order. The first token dominates — it sets the primary vocabulary register, evaluation framework, and voice. The second token (if present) provides supplementary vocabulary where fields genuinely intersect. More than 2 indicates a page scope problem, not a tagging problem.
5. **Scope**: Frontmatter field — set per page, array

**Governs**:

1. **Terminology** — which vocabulary is native and correct for this field
2. **Voice register** — formality, framing style, and analytical stance
3. **Evaluation frameworks** — what analytical paradigms apply (ROI for finance, benchmarks for technical)
4. **Example selection** — what examples are contextually appropriate for this field

**Array usage rules**:

1. First entry dominates — sets the primary register
2. Second entry provides supplementary vocabulary for genuine field intersections (e.g. `[finance, technical]` for a GPU ROI analysis — finance framing, but technical specs vocabulary required)
3. Maximum 2 entries — cap enforced by pipeline
4. Order matters — `[finance, technical]` and `[technical, finance]` produce different outputs

---

### `niche`

1. **Token**: `niche`
2. **Type**: Array — unordered, no cap
3. **Definition**: The specific subject context(s) within an industry
4. **Description**: Niche narrows the industry to a specific technical or subject context. It is cross-industry — `AI` can appear under `technical` (AI inference infrastructure) or `business` (AI product strategy) or `economics` (AI compute markets). Niche tells the pipeline which specific terminology subset to use within the broader industry. A page can have multiple niches.
5. **Scope**: Frontmatter field — optional, array, set per page

---

## Quickview

### Industry

| Token | Field | Livepeer content areas | Reference source |
|---|---|---|---|
| `technical` | Engineering, software, systems | Node setup, SDK integration, API docs, protocol architecture | [MDN Web Docs](https://developer.mozilla.org) · [IETF](https://www.ietf.org) |
| `finance` | Investment, capital, financial analysis | GPU ROI, earnings calculators, operating costs, yield analysis | [Investopedia](https://www.investopedia.com) · [CFA Institute](https://www.cfainstitute.org) |
| `economics` | Market dynamics, incentive theory, macro | Network incentives, fee markets, reward curves, inflation design | [Library of Economics and Liberty](https://www.econlib.org/library/glossary.html) · [Investopedia Economics](https://www.investopedia.com/economics-4689801) |
| `business` | Strategy, operations, management | Gateway business models, founder evaluation, ecosystem positioning | [Harvard Business Review](https://hbr.org) · [McKinsey Insights](https://www.mckinsey.com/insights) |
| `marketing` | Brand, messaging, growth | Product positioning, value proposition pages, ecosystem narrative | [AMA](https://www.ama.org/topics/marketing-definition) · [HubSpot Marketing Glossary](https://www.hubspot.com/marketing-glossary) |
| `governance` | Policy, institutional decision-making | LIPs, SPEs, on-chain voting, proposal lifecycle | [Institute on Governance](https://iog.ca) · [Tally Governance Docs](https://docs.tally.xyz) |
| `broadcast` | Video production, streaming media | Codec guides, transcoding pipelines, streaming setup, VOD | [SMPTE](https://www.smpte.org) · [DVB](https://www.dvb.org) · [Streaming Media](https://www.streamingmedia.com) |
| `AI` | Machine learning, AI infrastructure | AI gateway setup, inference routing, model selection, compute | [Hugging Face Docs](https://huggingface.co/docs) · [Papers with Code](https://paperswithcode.com) |
| `livepeer` | Livepeer protocol and ecosystem | Ticket protocol, probabilistic micropayments, LPT mechanics, rounds | [Livepeer Docs](https://docs.livepeer.org) · [Livepeer GitHub](https://github.com/livepeer) |

### Niche

| Token | Narrows to | Appears with |
|---|---|---|
| `web3` | Decentralised context, on-chain, blockchain paradigms | `technical`, `economics`, `governance` |
| `protocol` | Livepeer protocol specifics, smart contracts, consensus | `technical`, `economics`, `governance` |
| `tokenomics` | LPT mechanics, staking, delegation, rewards | `economics`, `finance` |
| `AI` | ML inference, model serving, compute routing | `technical`, `business`, `broadcast` |
| `video` | Codecs, encoding, transcoding, formats | `technical`, `broadcast` |
| `streaming` | Delivery, CDN, live/VOD, broadcast | `technical`, `broadcast` |
| `hardware` | GPU, physical compute, datacenter specs | `technical`, `finance` |
| `infrastructure` | Nodes, networking, cloud/bare-metal deployment | `technical` |

---

## Industry Values

---

### `technical`

1. **Definition**: Engineering, software, and systems content — how things are built, deployed, and operated
2. **Description**: The primary industry for developer and orchestrator content. Technical content uses engineering-native vocabulary: APIs, SDKs, nodes, latency, throughput, deployment, configuration, architecture. Voice is precise, direct, and command-oriented. Explanations are mechanism-first. Examples use code, terminal output, and system diagrams.
3. **Terminology register**: Engineering vocabulary — specific, exact, imperative. Avoids business framing. Uses correct technical terms over plain-language substitutes.
4. **Native terms**: API, SDK, node, endpoint, latency, throughput, deployment, configuration, architecture, container, CLI, binary, runtime, payload, schema, cache, queue
5. **Voice**: Direct, precise, low abstraction. No persuasive framing. No business case language.
6. **Evaluation framework**: Benchmarks, performance metrics, latency/throughput, reliability, system specs
7. **Reference source**: [MDN Web Docs](https://developer.mozilla.org) · [IETF](https://www.ietf.org)
8. **Audiences it serves**: `developer`, `orchestrator`, `gateway`, `builder`

---

### `finance`

1. **Definition**: Investment, capital, and financial analysis — costs, returns, ROI, capital allocation
2. **Description**: Finance content addresses the reader's personal or business financial decision: is this worth doing? What will it cost? What will I earn? ROI analysis, operating cost breakdowns, earnings projections, capital requirements. Voice is business-analytical and number-forward. Distinct from economics (systemic behaviour) — finance is about the reader's specific financial situation.
3. **Terminology register**: Finance vocabulary — ROI, yield, capex, opex, revenue, margin, liquidity, breakeven, NPV, payback period, cash flow, asset, depreciation
4. **Native terms**: ROI, yield, capex, opex, revenue, margin, liquidity, breakeven, NPV, payback period, cash flow, asset, depreciation, portfolio, hedge, settlement, principal
5. **Voice**: Business-analytical, number-forward, outcome-focused. Uses financial framing and quantitative presentation.
6. **Evaluation framework**: ROI, NPV, payback period, margin analysis, cost/benefit, yield
7. **Reference source**: [Investopedia](https://www.investopedia.com) · [CFA Institute](https://www.cfainstitute.org)
8. **Audiences it serves**: `orchestrator`, `founder`, `delegator`, `gateway`

---

### `economics`

1. **Definition**: Market dynamics, incentive theory, and macro-economic behaviour — how systems behave at scale
2. **Description**: Economics content covers how systems of incentives, supply, demand, and market forces operate. Not the same as finance (individual decisions) — economics is about systemic behaviour, emergent properties, and the theoretical design of incentive structures. Voice is analytical and precise, using economics and mechanism design vocabulary at the discipline level. Web3-specific economic content (tokenomics, staking) is handled at the niche level via `tokenomics` and `web3` niches layered onto this industry.
3. **Terminology register**: Economics vocabulary — supply/demand, equilibrium, game theory, incentive, externality, marginal cost, scarcity, market structure, elasticity, opportunity cost
4. **Native terms**: Supply, demand, equilibrium, incentive, externality, marginal cost, scarcity, market, elasticity, opportunity cost, game theory, mechanism design, price signal, network effect
5. **Voice**: Analytical, precise, systems-level. Avoids engineering detail and personal finance framing.
6. **Evaluation framework**: Game theory, incentive compatibility, market structure, network effects, mechanism design
7. **Reference source**: [Library of Economics and Liberty](https://www.econlib.org/library/glossary.html) · [Investopedia Economics](https://www.investopedia.com/economics-4689801)
8. **Audiences it serves**: `delegator`, `orchestrator`, `developer`, `founder`

---

### `business`

1. **Definition**: Strategy, operations, and management — how to run, position, and evaluate a business or product
2. **Description**: Business content addresses the reader as an operator or decision-maker — how to run something, how to position it, how to evaluate a strategic choice, how to approach partnerships. Voice is professional and outcome-oriented. Uses business vocabulary without being purely financial or technical. The framing is organisational and strategic.
3. **Terminology register**: Business vocabulary — strategy, operations, positioning, go-to-market, value proposition, competitive advantage, partnership, stakeholder, roadmap, KPI, scalability, business model
4. **Native terms**: Strategy, operations, positioning, go-to-market, value proposition, competitive advantage, partnership, stakeholder, roadmap, KPI, scalability, business model, market segment, customer acquisition
5. **Voice**: Professional, outcome-oriented, strategic. Neither purely technical nor purely financial.
6. **Evaluation framework**: Strategic analysis, competitive positioning, partnership value, operational efficiency, market fit
7. **Reference source**: [Harvard Business Review](https://hbr.org) · [McKinsey Insights](https://www.mckinsey.com/insights)
8. **Audiences it serves**: `founder`, `gateway`, `builder`

---

### `marketing`

1. **Definition**: Brand, messaging, and growth — how to position, communicate, and grow
2. **Description**: Marketing content addresses how products and propositions are communicated, positioned, and grown. Voice is audience-aware and benefit-led. Uses marketing vocabulary: personas, channels, funnels, conversion, value messaging. In the Livepeer docs context, this applies to positioning pages, value proposition content, and ecosystem narrative — documentation that needs to communicate compelling positioning clearly.
3. **Terminology register**: Marketing vocabulary — positioning, messaging, funnel, conversion, audience segment, channel, campaign, brand, growth, retention, GTM, value proposition, differentiation
4. **Native terms**: Positioning, messaging, funnel, conversion, segment, channel, campaign, brand, growth, retention, GTM, differentiation, persona, reach, engagement, narrative
5. **Voice**: Audience-aware, outcome-oriented, benefit-led. Can use persuasive framing where appropriate. Clearer and more direct than general business voice.
6. **Evaluation framework**: Conversion, reach, engagement, brand perception, audience fit
7. **Reference source**: [AMA — American Marketing Association](https://www.ama.org/topics/marketing-definition) · [HubSpot Marketing Glossary](https://www.hubspot.com/marketing-glossary)
8. **Audiences it serves**: `founder`, `builder`, `community`

---

### `governance`

1. **Definition**: Policy, institutional decision-making, and process — how decisions get made and legitimised
2. **Description**: Governance content covers how decisions are made, proposed, debated, ratified, and implemented within an institution or protocol. Voice is formal and procedural. Uses governance vocabulary at the institutional level: proposals, quorum, ratification, mandate, accountability, veto. Livepeer-specific governance terms (LIPs, SPEs) belong in the `livepeer` industry or the `web3`/`protocol` niche layered onto this industry — governance as an industry is the broader institutional frame.
3. **Terminology register**: Governance vocabulary — proposal, quorum, ratification, vote, mandate, stakeholder, accountability, veto, deliberation, policy, amendment, delegation, representation
4. **Native terms**: Proposal, quorum, ratification, vote, mandate, stakeholder, accountability, veto, deliberation, policy, amendment, delegation, representation, consensus, legitimacy, transparency
5. **Voice**: Formal, procedural, precise. Neutral on outcomes. Describes process, not advocacy.
6. **Evaluation framework**: Process legitimacy, stakeholder representation, voting mechanics, accountability structures
7. **Reference source**: [Institute on Governance](https://iog.ca) · [Tally Governance Docs](https://docs.tally.xyz)
8. **Audiences it serves**: `delegator`, `orchestrator`, `developer`, `community`

---

### `broadcast`

1. **Definition**: Video production, transcoding, and streaming media — the broadcast and streaming industry
2. **Description**: Broadcast content addresses the video infrastructure layer — codec selection, transcoding pipelines, streaming protocols, VOD delivery, latency, quality settings. Uses broadcast and streaming industry vocabulary. Distinct from `technical` (which is about software/systems generally) — broadcast is specifically the video and streaming media industry. SMPTE and DVB standards are the authoritative vocabulary references.
3. **Terminology register**: Broadcast and streaming vocabulary — codec (H.264, H.265, AV1), bitrate, ABR, HLS, RTMP, WebRTC, transcoding, rendition, keyframe, CDN, ingest, origin, manifest, segment
4. **Native terms**: Codec, H.264, H.265, AV1, bitrate, ABR, HLS, RTMP, WebRTC, transcoding, rendition, keyframe, CDN, ingest, origin, manifest, segment, latency, GOP, encode, decode, mux
5. **Voice**: Technical but broadcast-industry-framed. Uses broadcast and streaming terminology natively. Familiar with both production and delivery vocabulary.
6. **Evaluation framework**: Quality metrics (VMAF, PSNR), latency benchmarks, encoding efficiency, delivery reliability
7. **Reference source**: [SMPTE](https://www.smpte.org) · [DVB](https://www.dvb.org) · [Streaming Media](https://www.streamingmedia.com)
8. **Audiences it serves**: `gateway`, `builder`, `developer`

---

### `AI`

1. **Definition**: Machine learning, AI infrastructure, and model serving — the AI/ML industry
2. **Description**: AI content covers the infrastructure and operational layer for AI workloads — inference routing, model selection, GPU pipeline setup, compute cost, throughput. Uses AI/ML industry vocabulary. Distinct from the `AI` niche — `AI` as an industry means the page's primary field is AI infrastructure or AI product; `AI` as a niche means AI is the specific subject context within another industry (e.g. `technical` + `AI` niche = technical content specifically about AI workloads).
3. **Terminology register**: AI/ML vocabulary — inference, model, weights, GPU, VRAM, TFLOPS, throughput, latency, pipeline, orchestration, tokens/sec, fine-tuning, embeddings, LLM, diffusion
4. **Native terms**: Inference, model weights, GPU, VRAM, TFLOPS, throughput, latency, pipeline, orchestration, tokens/sec, fine-tuning, embeddings, LLM, diffusion, multimodal, quantisation, context window
5. **Voice**: Technical, precise, compute-forward. Can intersect with business framing for AI product pages.
6. **Evaluation framework**: Inference benchmarks, compute cost per token, GPU utilisation, model performance metrics
7. **Reference source**: [Hugging Face Docs](https://huggingface.co/docs) · [Papers with Code](https://paperswithcode.com)
8. **Audiences it serves**: `builder`, `developer`, `gateway`

---

### `livepeer`

1. **Definition**: Livepeer protocol and ecosystem — terminology native to the Livepeer network specifically
2. **Description**: Livepeer content uses vocabulary that has no direct equivalent in any other industry — terms coined or given specific meaning by the Livepeer protocol. This industry tag activates Livepeer-specific terminology as the primary register. It frequently appears as the second entry in an array alongside a broader industry (e.g. `[economics, livepeer]` for a staking rewards explainer, or `[governance, livepeer]` for a LIP lifecycle page).
3. **Terminology register**: Livepeer-specific vocabulary — LPT, orchestrator, delegator, probabilistic micropayments, ticket protocol, rounds, activation, deactivation, bonding, unbonding, reward cut, fee cut, LIP, SPE, treasury
4. **Native terms**: LPT, orchestrator, delegator, probabilistic micropayments, ticket protocol, rounds, activation, deactivation, bonding, unbonding period, reward cut, fee cut, LIP, SPE, treasury, GovWorks, Live Pioneers, gateway
5. **Voice**: Mirrors the primary industry in the array. When sole entry: precise and protocol-native, assumes familiarity with Livepeer.
6. **Evaluation framework**: Protocol correctness, network participation, reward mechanics
7. **Reference source**: [Livepeer Docs](https://docs.livepeer.org) · [Livepeer GitHub](https://github.com/livepeer)
8. **Audiences it serves**: All audiences

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
3. **Terminology it activates**: Stake, delegate, reward cut, fee cut, inflation, unbonding period, LPT, orchestrator reward, delegator reward

---

### `AI`

1. **Definition**: AI/ML inference and model context — model types, compute requirements, inference pipelines
2. **Applies when**: Content is specifically about AI workloads, model serving, or AI-specific infrastructure within a broader industry
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

## Decisions Locked

1. **Field renamed**: `domain` → `industry` — more intuitive; signals established field with its own jargon
2. **Industry is an array**: ordered, max 2 entries; first entry dominates vocabulary and voice; second provides supplementary register for genuine field intersections
3. **9 industry tokens**: `technical`, `finance`, `economics`, `business`, `marketing`, `governance`, `broadcast`, `AI`, `livepeer`
4. **`economics` scope**: macro-economics and incentive theory as a discipline — web3/tokenomics specifics belong in `niche`, not in the economics industry definition
5. **`media` → `broadcast`**: broadcast is the correct industry term; has established standards bodies (SMPTE, DVB) and standardised vocabulary
6. **`marketing` included**: legitimate industry field with recognised vocabulary conventions
7. **`livepeer` included**: Livepeer-specific terminology has no equivalent in any other industry; frequently appears as second entry in array
8. **`AI` dual use**: `AI` as industry = page's primary field is AI infrastructure or product; `AI` as niche = AI-specific context within another industry — intentional distinction
9. **Reference sources**: each industry token has authoritative external glossary/vocabulary sources — used by agent to resolve terminology disputes and fill vocabulary gaps

---

## Open Questions

_(none — all resolved)_
