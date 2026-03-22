# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Generated**: 2026-03-22
**Sources**: orchestrators-ia-map.md · orchestrator-tab-review-v3.md · dep-personas-and-pages.mdx
**Status**: DRAFT — awaiting checkpoint

---

## Arriving Question

> "Can my GPU earn on this network, and what exactly do I need to do to get there?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with |
|---|---|---|---|---|
| 1 | **The Solo Miner** — former GPU miner, 1–4 consumer GPUs, financially motivated | Search ("livepeer gpu earn"), Discord/forum referral, crypto-mining community | A GPU and a question: "is this worth it for my hardware?" | First working node OR a clear decision that pool is the better path for their stake level |
| 2 | **The AI Native** — ML engineer/researcher, arrived via AI compute subnet news or forum post | AI-focused Discord/Twitter, subnet announcement, referral from AI community | Confidence in AI compute; zero knowledge of protocol, staking, or transcoding | Working AI inference pipeline node, clear earnings path for AI workloads |
| 3 | **The Pool Worker** — has GPU hardware, lacks LPT to compete solo | Discord/forum: told "you can join a pool instead" | Awareness that a simpler path exists; no idea how to find or join a pool | Joined a pool and contributing GPU compute — without acquiring LPT |
| 4 | **The Pro Operator** — 4–20 GPUs, strong devops background, existing transcoding setup | Direct (existing user), changelog, Discord announcement of AI revenue opportunity | Running transcoding node; wants to add AI for additional revenue | AI pipelines configured on existing node, pricing strategy set, monitoring in place |
| 5 | **The Enterprise Operator** — business decision maker, GPU cloud or colo, 100+ GPU scale | Business development channel, Livepeer Foundation outreach, industry press | A business question: ROI, compliance, SLA reliability at commercial scale | Business case validated, enterprise setup path and commercial contact identified |

**Self-identification**: Visitors self-identify as "GPU operator" or "node operator" — these labels map to at least three distinct situations (solo node, pool worker, AI-focused node). **Disambiguation required.** The tab landing page must route personas to the correct path before any setup content begins.

**Entry blockers**:
- **LPT acquisition** — Solo Miner must acquire and stake LPT before earning. This is a hard-stop blocker that deters many entrants. The section that explains the LPT requirement must appear before the solo quickstart, with the pool worker path presented as an explicit alternative for those who cannot or will not acquire LPT.
- **Realtime vs batch AI distinction** — AI Native arrives expecting to "run AI inference" without knowing Livepeer distinguishes realtime pipeline AI from batch AI. Wrong-path setup wastes hours. Must be clarified before the AI quickstart.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I arrive with a GPU and no knowledge of Livepeer | understand whether solo node, pool worker, or AI-first is right for my hardware, stake, and goals | start the correct setup path without wasting time on the wrong one |
| 2 | I've decided to run a node | complete install, configure, and activate in a logical sequence with clear checkpoints | reach a working, job-receiving node with confidence it's set up correctly |
| 3 | I have a running node and want to earn competitively | understand how to set pricing for video and AI workloads | stop leaving earnings on the table and not get overlooked by gateways |
| 4 | I want to add AI inference to my existing transcoding node | follow a clear setup path for AI Runner, models, and pipelines | earn additional fee revenue from AI workloads alongside transcoding |
| 5 | My node is running but not receiving jobs | diagnose the most likely causes quickly and confidently | get back to earning without spelunking Discord for answers |
| 6 | I have GPU hardware but not enough LPT to compete solo | understand the pool worker path and how to join a pool | earn from my GPU without the LPT acquisition barrier |
| 7 | I'm running at scale (10+ GPUs or a GPU fleet) | understand large-scale operations, pool management, and enterprise economics | operate professionally and make informed long-term infrastructure decisions |

---

## Ideal Journey

**Linear** (first-time reader — must be served in sequence):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orient & route | `discover` | Learning what orchestrators are and identifying which of the three paths (solo, pool, AI-first) matches their situation |
| 2 | Evaluate viability | `evaluate` | Assessing hardware fit, LPT requirements, economics, and time commitment before committing to a path |
| 3 | Set up | `setup` | Following their chosen path: solo node quickstart, pool worker join, or AI-first node setup |
| 4 | Activate | `setup` | Connecting to network, staking/registering (solo path), confirming first job receipt |
| 5 | Operate | `operate` | Monitoring node health, configuring pricing, managing rewards and payments day-to-day |
| 6 | Optimise | `optimise` | Tuning pricing, adding workloads (AI on top of transcoding), scaling infrastructure, managing delegation attraction |

**Note on branching**: The journey branches at Position 3. Pool Worker exits after joining a pool (no staking/activation needed). AI Native may skip staking/rewards and go directly to AI workloads. The section structure must accommodate these branches — sections 4–6 are not all mandatory for every persona.

**On-demand** (reference needs — non-sequential, return visits):
- CLI flags and runtime parameters
- Competitive pricing benchmarks (video vs AI workloads)
- VRAM requirements by pipeline and model
- Contract addresses and Arbitrum network references
- Troubleshooting by symptom (node not receiving jobs, reward calling failures, AI pipeline errors)
- Explorer usage and earnings verification

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| → out | Orchestrators → LP Token / Delegators | Staking mechanics, delegation, governance voting — orchestrators are governance actors |
| → out | Orchestrators → About | Architecture depth, protocol economics, tokenomics — conceptual substrate for those who want it |
| ← in | LP Token / Delegators → Orchestrators | Delegators evaluate orchestrators to choose where to delegate — the evaluation criteria live here |
| ← in | Developers → Orchestrators | Developers building custom pipelines may graduate to running their own orchestrator |
| ↔ both | Orchestrators ↔ Gateways | Gateways select orchestrators; orchestrators configure pricing for gateways; PM ticket payment mechanics shared from both sides |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| Portal / Landing | "Am I in the right place — and which of the three paths is mine?" | J1 | `orient` | `navigation` | Has GPU hardware; does not know if solo, pool, or AI-first is right for them | Directed to the correct starting point (solo / pool / AI-first) | `discover` |
| Concepts: Role | "What exactly is an orchestrator and how does it fit in the Livepeer network?" | J1 | `explain` | `concept` | Curious; evaluating whether to go further | Has decided whether orchestrating is relevant to their situation; understands what the role involves | `discover` |
| Concepts: Capabilities | "What can my hardware actually do on this network — video, AI, or both?" | J1 | `explain` | `concept` | Knows the role; wants to understand workload types and hardware fit | Knows which workload types match their GPU; has a realistic sense of earning potential | `evaluate` |
| Concepts: Architecture | "How do jobs reach me, how do I get selected, and how do I get paid?" | J1, J3 | `explain` | `concept` | Understands capabilities; wants to understand mechanics before committing | Understands job routing, PM tickets, gateway selection criteria, reward calling, staking mechanics | `evaluate` |
| Concepts: Economics | "Is running an orchestrator financially worth it for my hardware and goals?" | J1, J7 | `evaluate` | `concept` | Understands architecture; making a go/no-go financial decision | Has run the numbers for their specific situation; knows the LPT requirement and pool alternative | `evaluate` |
| Quickstart | "What is the fastest path to a working, earning node — for my specific path?" | J2, J6 | `start` | `instruction` | Has decided to proceed; wants minimal friction to first success | Has a working node receiving jobs (solo path) OR has joined a pool and contributing compute (pool path) OR has AI pipeline running (AI-first path) | `setup` |
| Setup | "How do I do the full installation and configuration correctly for production?" | J2 | `build` | `instruction` | Completed quickstart or wants full depth; configuring for production | Node fully installed, configured, connected to Arbitrum, staked and registered, receiving jobs reliably | `setup` |
| Guides: Workloads & AI | "How do I configure my node for AI pipelines and which models should I run?" | J4 | `configure` | `guide` | Running node; wants to add or optimise AI workloads | AI Runner configured; VRAM allocation understood; model selection done; AI revenue flowing | `operate` |
| Guides: Staking & Rewards | "How does reward calling work and how do I attract more delegation?" | J3, J7 | `operate` | `guide` | Running node with basic setup; wants to optimise staking economics | Reward calling configured; cut rate set competitively; delegation attraction strategies understood | `operate` |
| Guides: Payments & Pricing | "How do I set competitive pricing and make sure I actually get paid?" | J3 | `configure` | `guide` | Running node; losing earnings or unsure if pricing is competitive | Pricing configured for video and AI workloads; PM ticket redemption flow understood; payment confirmed | `operate` |
| Guides: Monitoring & Tools | "How do I know my node is healthy and receiving jobs — and what do I do when it isn't?" | J5 | `operate` | `guide` | Running node; wants operational confidence and a diagnostic path | Monitoring stack in place; knows how to verify job receipt; can diagnose job absence without Discord | `operate` |
| Guides: Advanced Operations | "How do I scale, optimise at volume, or manage a pool?" | J7 | `optimise` | `guide` | Experienced operator; operating beyond standard single-node setup | Scaling patterns understood; pool management known; advanced configuration patterns in place | `optimise` |
| Resources: Reference | "Where do I find CLI flags, error codes, contract addresses, and exact parameters?" | J2, J3, J5 | `reference` | `reference` | Any stage — arrived with a specific lookup need | Found the exact value, flag, or specification needed | `any` |
| Resources: Knowledge Hub | "What community tools, external guides, and ecosystem resources exist for operators?" | J6, J7 | `reference` | `resource` | Any stage — looking for ecosystem context beyond the docs | Found a relevant community resource, tool, or external guide | `any` |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Blocked at | Gap |
|---|---|---|---|---|
| Solo Miner | Portal | Guides: Payments & Pricing | Concepts: Economics — LPT acquisition cost may cause drop-off before reaching quickstart | Pool path must be presented as an explicit, equal alternative in Concepts: Economics and Portal |
| AI Native | Portal | Guides: Workloads & AI | Quickstart — generic node setup mixes transcoding and AI without clear AI-first path | AI-specific quickstart path must be first-class from Portal; realtime vs batch AI framing before quickstart |
| Pool Worker | Portal | Quickstart (pool path) | Portal — pool path is invisible; visitor defaults to solo path and drops off at LPT requirement | Pool path must be a named, first-class option in Portal and Quickstart — not a footnote |
| Pro Operator | Guides: Workloads & AI | Guides: Advanced Operations | None — can enter mid-journey, skipping concepts and quickstart | Entry point into Guides without going through Concepts/Quickstart must be clear |
| Enterprise Operator | Concepts: Economics | Setup | Concepts: Economics — needs commercial ROI and SLA data; current content is individual-operator-focused | Enterprise-scale economics (100+ GPU, SLA, commercial contracts) needed in Concepts: Economics |

---

## ⏸ Checkpoint

- [ ] Arriving question is specific — not a topic, an actual question?
- [ ] Personas described with motivation and entry vector — not just role labels?
- [ ] Self-identification check done — disambiguation page flagged as required?
- [ ] Entry blockers identified (LPT acquisition, realtime vs batch AI) — resolved by section order?
- [ ] Jobs are first-principles — not derived from current nav structure?
- [ ] Every section has a reader question, job, entry state, and exit state?
- [ ] No exit state uses "understands" — all are concrete actions or decisions?
- [ ] Cross-tab gate applied — no content duplicated from other tabs?
- [ ] Persona path validation done — every persona has an unblocked path?
- [ ] All enum values are canonical — no invented tokens?
- [ ] Branching journey noted — pool worker and AI native paths clearly branching at Quickstart?
