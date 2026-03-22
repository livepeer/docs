<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# TAB: Orchestrators

TASK: Execute the audience-design-brief.

Now I have all the material needed. Executing the full brief:

***

```markdown
# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: [generated in Phase 0 below]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Orchestrator, GPU, LPT (Livepeer Token), Active Set, Staking / Bonding, Reward Cut, Fee Cut, Delegation, Pool, Pool Node, Pool Operator, Gateway, go-livepeer, AI Inference, Video Transcoding, Dual Mode, O-T Split, pricePerUnit, pixelsPerUnit, Performance Score, Inflation, Round, BondingManager, TicketBroker / Probabilistic Micropayment, Capability Advertisement, aiModels.json, AI Runner, Warm Model / Cold Start`

**Deprecated term checks applied**:
- "Combined mode" → replaced with "Dual Mode" ✓
- "Hybrid" → replaced with "Dual Mode" ✓
- "Pool worker" → replaced with "Pool Node" ✓
- "Broadcaster" → not in this audience's path; noted as deprecated alias for Gateway ✓
- "Transcoder" → used only in O-T Split context (worker process), not as synonym for Orchestrator ✓

**High-staleness terms marked**:
- Active Set size (100) `[verify-live: Livepeer Explorer]`
- Inflation adjustment rate (0.00005% per round) `[verify-live: Delegator yield guide + LIPs]`
- AI pipeline types and model IDs `[verify-live: go-livepeer releases + AI docs]`
- CLI flag names and defaults `[verify-live: go-livepeer CLI reference]`
- Reward Cut / Fee Cut values (per-orchestrator, visible on-chain) `[verify-live: Livepeer Explorer]`

---

**1. This audience calls themselves**: "GPU operators", "node runners", "miners" (loosely), or "compute providers." In the AI-first framing, they may call themselves "AI compute providers" or "inference hosts." They do not arrive calling themselves "orchestrators" — that is the network's term they will adopt after reading.

**2. Core job actions (in their language)**:
- Connect GPU hardware to a network and keep it earning
- Set prices competitively to attract job traffic
- Monitor node performance and fix problems before earnings drop
- Manage staking/LPT requirements to stay in the active job pool
- Decide which workloads to run (video, AI, or both)

**3. Terms with network-specific meanings that differ from industry default**:

| Term | Industry default | Livepeer-specific meaning | Risk |
|---|---|---|---|
| **Orchestrator** | Generic: "coordinator" or "workflow engine" (e.g. Kubernetes, Airflow) | The on-chain protocol role of a GPU operator who accepts jobs, stakes LPT, and earns fees on Livepeer | High confusion — reader expects software term |
| **Bonding / Staking** | Generic crypto: "lock tokens to earn yield passively" | On Livepeer, staking LPT is a prerequisite for entering the active job pool and competing for work — it is both an eligibility mechanism and a stake-weighting signal | Medium — passive yield vs active eligibility distinction |
| **Active Set** | Generic: "currently active participants" | Specifically: the top 100 orchestrators by total bonded stake eligible to receive **video transcoding** jobs in the current round; AI routing uses different criteria | High — subset definition and AI exclusion both non-obvious |
| **Round** | Generic: "iteration" or "epoch" | A fixed protocol time period on Livepeer (approximately 1 day) after which inflation rewards are distributed and active set membership is recalculated | Medium |
| **Reward Cut** | N/A | The percentage of LPT inflation rewards the orchestrator **keeps** (not what it gives); delegators receive the remainder | High — inverted from intuitive framing |
| **Pool** | Generic infra: "resource pool" | A group of worker nodes coordinated under a single on-chain orchestrator; the pool operator holds the LPT and stake; workers contribute GPU only | Medium |
| **Gateway** | Generic: "API gateway" / "network gateway" | The demand-side entity on Livepeer that routes jobs to orchestrators and manages payment flows — the entity that selects and pays you | High — maps poorly to standard infra term |
| **Performance Score** | Generic: "benchmark result" | An on-chain metric derived from transcode success rate, latency, and uptime that gateways use to rank and select orchestrators for work | Medium |

---

## Arriving Question

> "I have GPU hardware — can I earn money from it on this network, and what do I actually need to do to get set up and start receiving jobs?"

---

## Personas

**Assumption note**: In the absence of analytics data, volume estimates are reasoned from the Product Context block. Solo GPU operators with meaningful LPT are the modal participant; pool nodes are a distinct and lower-friction entry path; video-only operators are the legacy baseline; AI-focused operators are a growing but currently smaller cohort. All four paths have distinct hardware requirements, setup flows, and economic logic — they are scored separately.

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Solo Operator** | Search ("livepeer orchestrator setup"), Discord/forum link, crypto mining/compute community referral | Spare GPU capacity or dedicated rig; some crypto familiarity; no knowledge of Livepeer-specific staking, pricing, or job routing | Node running, price set, active set entry confirmed or known blocker identified | 3 | 3 | 3 | **9** |
| 2 | **The Pool Node Joiner** | Pool operator's own onboarding docs or Discord; referral from a community pool listing | GPU hardware ready; has been told to follow Livepeer's docs; minimal LPT; no staking intent | Worker node connected to their pool operator's orchestrator, receiving jobs | 3 | 2 | 3 | **8** |
| 3 | **The AI-Workload Specialist** | Livepeer AI docs CTA, Foundation blog, AI community referral | Existing AI/ML background; CUDA-capable GPU; possibly already running inference workloads elsewhere; limited knowledge of Livepeer protocol | AI pipeline configured, aiModels.json set, node advertising capabilities to gateways | 2 | 3 | 3 | **8** |
| 4 | **The Established Operator Optimising** | Bookmark / return visit; direct docs search | Already running a node; wants to improve earnings — price, performance score, or dual-mode upgrade | A specific configuration change applied; earnings improved or performance problem resolved | 2 | 3 | 2 | **7** |

**Primary persona**: **The Solo Operator** — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification**: The audience arrives calling themselves "GPU operators" or "compute providers." This label maps to at least **two distinct setup paths**:
- Path A: Solo operator with sufficient LPT to enter the active set independently
- Path B: Pool node joiner — contributes GPU only, no LPT staking required

These paths diverge at the very first decision (do I need LPT?) and have entirely different setup sequences. A **dedicated disambiguation section is required as the first content section** — it routes readers to Solo or Pool Node paths based on LPT availability and operating intent.

**Entry blockers**:
- **Solo Operator**: Must acquire and stake LPT before being eligible for video transcoding jobs. This is a hard-stop blocker. The "What you need before setup" section (Section 2) must resolve this blocker before the quickstart (Section 3) proceeds. LPT acquisition is not covered in this tab — routed to About/Delegators for context, with the minimum decision-enabling explanation inline.
- **Pool Node Joiner**: No LPT blocker. Their blocker is knowing the pool operator's `orchAddr` and `orchSecret` — external to this tab but must be surfaced as a pre-condition in the disambiguation section.
- **AI-Workload Specialist**: No LPT blocker for AI inference (AI routing does not require active set membership). GPU VRAM requirements and CUDA setup are pre-conditions surfaced in hardware requirements.

---

## Jobs to be Done

| # | When… | I want to… | So I can… |
|---|---|---|---|
| 1 | I have GPU hardware sitting idle and I've heard I can earn from it on Livepeer | understand whether my hardware qualifies, what I'll need to acquire (LPT, ETH), and what the setup involves | make an informed decision before investing time or money |
| 2 | I've decided to join as a solo operator and I'm ready to set up | get my node installed, staked, and connected to the network in the shortest path to receiving my first job | confirm the setup worked and start earning |
| 3 | I want to add AI inference to my node, or set up as an AI-only operator | configure my AI pipelines, load models, and advertise my capabilities to gateways | start receiving AI inference jobs alongside or instead of video transcoding |
| 4 | My node is running but I'm not getting as much work as expected | diagnose why — price too high, performance score too low, active set position, or capability mismatch | fix the specific problem and increase job throughput |
| 5 | I need to set or adjust my pricing for transcoding or AI jobs | understand how pricing works, what competitive rates look like, and which parameters to change | price competitively without leaving earnings on the table |
| 6 | I want to understand how rewards and fees are calculated and claimed | understand the reward call, inflation, ETH fee settlement, and my cut settings | predict my earnings and optimise my cut configuration |
| 7 | My node has a problem — a crash, stalled jobs, a missed reward call, or a metrics alert | follow a diagnostic process to identify the cause and apply a fix | restore normal operation without losing earnings |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Forming a picture of the opportunity | `discover` | Reading about the network role, workload types, hardware requirements, and earning model to decide if this is worth pursuing |
| 2 | Assessing entry requirements | `evaluate` | Determining what they need before setup: hardware spec check, LPT acquisition path, ETH for gas, and which operating mode fits their situation |
| 3 | Choosing their operating path | `evaluate` | Deciding between solo operator, pool node, video-only, AI-only, or dual mode — based on their hardware, LPT position, and workload preference |
| 4 | Getting the node running | `setup` | Installing go-livepeer, configuring flags, connecting to the network, and verifying the node is live |
| 5 | Configuring staking and pricing | `setup` | Staking LPT (solo path), setting reward and fee cuts, and establishing initial pricing for transcoding and/or AI |
| 6 | Configuring AI capabilities | `build` | Setting up aiModels.json, loading models, configuring warm/cold state, and registering capabilities via AIServiceRegistry |
| 7 | Verifying the setup | `setup` | Confirming active set membership or AI capability advertisement, checking first job receipt, and verifying reward call execution |
| 8 | Operating the node day-to-day | `operate` | Monitoring performance score, earnings, uptime, and job throughput; running the reward call each round |
| 9 | Optimising for earnings | `optimise` | Tuning price, performance score, hardware configuration, and workload mix to maximise job volume and revenue |
| 10 | Diagnosing and resolving problems | `troubleshoot` | Identifying why jobs have stopped, performance has dropped, reward calls are failing, or the node has become unreachable |

**On-demand** (return-visit reference categories):
- Current CLI flag names, syntax, and defaults for orchestrator and transcoder mode
- pricePerUnit / pricePerCapability competitive benchmarks and recommended ranges
- Active set position and current bonded stake `[verify-live: Livepeer Explorer]`
- Round timing, reward call status, and reward claim mechanics
- aiModels.json schema: pipeline type, model ID, warm status, and pricing fields
- Hardware requirements by workload type (video transcoding NVENC/NVDEC, AI inference VRAM minimums)
- Performance score calculation methodology and how to improve it
- Gateway selection criteria: how MaxPrice, performance score, and capability matching interact
- Pool node configuration flags (`-orchAddr`, `-orchSecret`, `-transcoder`)
- Monitoring stack setup: Prometheus metrics, Grafana dashboards, Loki log aggregation

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Gateways → Orchestrators | Gateway operators evaluating their compute supply side; understanding how orchestrators are selected |
| Inbound | Home → Orchestrators | Audience routing from the home page |
| Inbound | About → Orchestrators | Reader who has understood the protocol and now wants to participate as an operator |
| Inbound | Community → Orchestrators | Community members following up on orchestrator discussion |
| Outbound | Orchestrators → Delegators | Solo operators who want to understand how delegated stake affects their position; or readers who realise they don't want to run a node but do want to stake |
| Outbound | Orchestrators → About | Deep-dive on protocol economics, tokenomics, governance |
| Outbound | Orchestrators → Gateways | Operators who want to understand how gateways select them (pricing, capability routing) |

---

## Ideal Section Structure

| # | Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|---|
| 1 | **What kind of operator are you?** | "I've landed here — but am I a solo operator, a pool node, or something else? Which path is mine?" | Job 1 | `orient` | `navigation` | Reader has arrived with GPU hardware and intent to earn; does not yet know which setup path applies | Has identified their operating path (solo / pool node / AI-specialist) and navigated to the correct starting section | `discover` |
| 2 | **How the network works for operators** | "What is this network actually doing, and where do I fit in?" | Job 1 | `explain` | `concept` | Knows they want to connect GPU to earn; does not yet know how jobs, payments, and selection work | Can describe how jobs reach their node, how they are selected, what they get paid in, and what determines their earning potential | `discover` |
| 3 | **What you need before you start** | "What hardware, tokens, and accounts do I need before I can set anything up?" | Job 1 | `learn` | `concept` | Understands the network role; has not yet assessed entry requirements | Has completed a hardware self-assessment, understands the LPT staking requirement (solo) or that LPT is not required (pool node), and knows what ETH is needed for gas | `evaluate` |
| 4 | **Choosing your operating mode** | "Should I run video-only, AI-only, or both? Does my hardware support dual mode?" | Job 1 | `choose` | `guide` | Has confirmed hardware and LPT position; does not yet know which workload configuration to run | Has decided which mode to run (video / AI / dual) based on their GPU spec and economic preference; knows what additional config that decision requires | `evaluate` |
| 5 | **Quickstart: Solo operator** | "How do I install go-livepeer, connect to the network, and get my node running?" | Job 2 | `start` | `instruction` | Has chosen the solo path, confirmed hardware, and acquired LPT | Has a running go-livepeer node connected to mainnet and has verified it is visible to the network | `setup` |
| 6 | **Quickstart: Pool node** | "How do I connect my GPU to a pool operator's orchestrator as a worker?" | Job 2 | `start` | `instruction` | Has chosen the pool node path; has orchAddr and orchSecret from their pool operator | Has a running go-livepeer worker node connected to the pool operator's orchestrator and is receiving compute jobs | `setup` |
| 7 | **Staking, reward cut, and fee cut** | "How much LPT do I need to stake? How do I set my cuts? What happens if I don't call reward?" | Job 6 | `configure` | `guide` | Node is running; has not yet staked or configured on-chain parameters | Has staked LPT, set reward cut and fee cut on-chain, understands the reward call requirement and has scheduled or noted it | `setup` |
| 8 | **Setting your price** | "How do I set a price that wins jobs but doesn't undercut my earnings? What are competitive rates?" | Job 5 | `configure` | `guide` | Node is running and staked (or connected as pool node); has not yet set pricing | Has set `pricePerUnit` (and `pricePerCapability` if running AI) to a competitive value; understands how gateways apply MaxPrice as a hard gate | `setup` |
| 9 | **AI pipeline setup** | "How do I configure AI inference on my node — which models, how do I load them, and how do I register my capabilities with gateways?" | Job 3 | `build` | `instruction` | Running a node (solo or pool); has decided to add AI workloads; CUDA-capable GPU confirmed | Has a working `aiModels.json`, AI runner running, at least one warm model configured, and capability advertisement confirmed via AIServiceRegistry or gateway discovery | `build` |
| 10 | **Verifying your setup** | "How do I confirm my node is set up correctly — in the active set, advertising capabilities, and actually receiving jobs?" | Job 2 | `verify` | `instruction` | Node is running, staked/priced/AI-configured; has not yet confirmed the setup is working end-to-end | Has confirmed active set position (solo video) or capability advertisement (AI), received at least one test job, and confirmed reward call is executing | `setup` |
| 11 | **Monitoring and day-to-day operations** | "What should I be watching to know my node is healthy? How do I track earnings, performance score, and uptime?" | Job 4 | `operate` | `guide` | Node is verified and running in production; no monitoring stack yet configured | Has a working monitoring setup (Prometheus metrics + Grafana dashboards or equivalent); knows which metrics signal a problem and which indicate healthy earnings | `operate` |
| 12 | **Optimising for earnings** | "My node is running but I'm not winning as much work as I'd like — what levers can I pull?" | Job 4 | `optimise` | `guide` | Operating node with visible performance score and earnings history | Has identified the limiting factor (price, performance score, active set position, capability gap) and applied at least one targeted optimisation | `optimise` |
| 13 | **Troubleshooting** | "My node has a problem — jobs have stopped, the reward call failed, or metrics look wrong. How do I diagnose it?" | Job 7 | `troubleshoot` | `guide` | Something has gone wrong; reader knows symptom but not cause | Has identified the specific cause of the problem and applied a fix that restores normal operation | `troubleshoot` |

**Section count**: 13 sections — at the upper edge of the 8–12 range. Justified: the tab covers two distinct quickstart paths (solo and pool node) that must be separate instruction sequences, plus an AI pipeline setup section that is a full build path in its own right. Collapsing any of these would create knowledge gaps for the personas they serve. Flagged in Addendum.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Solo Operator | S1 (disambiguation) | S10 (verify) then returns to S11–S13 as needed | None — LPT blocker is surfaced in S3 before S5 requires it | S3 must include a minimum-viable explanation of how to acquire LPT and why it's required, even though LPT acquisition depth lives in About/Delegators | None |
| The Pool Node Joiner | S1 (disambiguation) | S6 (pool quickstart), then S11 for monitoring | None — pool path routes directly from S1 → S3 (hardware check) → S6; skips S5 (staking) and S7 (LPT config) cleanly | S1 must make explicit that pool nodes skip S5 and S7 — otherwise this persona reads staking instructions that don't apply to them | None — S6 serves this path fully |
| The AI-Workload Specialist | S1 (disambiguation) | S9 (AI pipeline setup), then S10 (verify) | None — AI routing does not require active set membership; this persona can skip S7 if pool node, or complete S7 lightly if solo | S2 must clarify that AI inference routing uses capability advertisement not stake-based active set eligibility — this is non-obvious and a common misconception | None — S9 is a full path |
| The Established Operator Optimising | S12 (optimising) or S13 (troubleshooting) or S8 (pricing) | Depends on their specific job | None | None — this persona self-routes to the relevant section | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added if required?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The glossary (glossary-orchestrators-3.md) lists LIP-92 as "defining the AI model registry and capability discovery mechanism." The Product Context block does not mention LIP-92 by name. Veracity-sources.md lists LIP-92 as "Livepeer Improvement Proposal defining the AI model registry and capability discovery mechanism." No conflict — consistent. Included `Capability Advertisement` and `AIServiceRegistry` in TERMINOLOGY_LOCK on this basis.

- **[Phase 0 / Step 0.2]**: The glossary defines "Pool Worker" and "Pool Node" as the same entity (also known as). Deprecated-terms.md confirms "Pool worker" is renamed to "Pool node." TERMINOLOGY_LOCK uses "Pool Node" as canonical. No conflict.

- **[Phase 0 / Step 0.2]**: Glossary defines "Inflation" as adjusting at "0.00005% per round." This is a high-staleness value — marked `[verify-live: Delegator yield guide + LIPs]`. Not asserted as fixed in this document.

- **[Phase 0 / Step 0.2]**: "Active Set" size (100) is a governance-controlled parameter. Marked `[verify-live: Livepeer Explorer]` throughout. The glossary states "top 100" — used as current value with live-verify flag.

- **[Phase 1]**: Volume estimates are assumptions derived from the Product Context block, not analytics data. Solo operators are treated as the modal participant because the network's primary design (LPT staking, active set) is built around them. Pool node joiners are treated as the second most common path given that operators with insufficient stake are explicitly accommodated via pool mechanics in the Product Context.

- **[Phase 2C / Section count]**: 13 sections is one above the recommended ceiling of 12. Justification: two separate quickstart instruction sequences (solo and pool node) cannot be folded without creating a knowledge gap for the pool node persona, whose setup path skips staking entirely. The AI pipeline section (S9) is a full build path that cannot be folded into S5 without conflating video and AI setup instructions. If section count is a concern during detailed design, S5 and S6 could be combined as a single section with clearly delineated sub-paths — flagged here but not collapsed at this stage.

- **[Phase 2C / Section 4]**: Section 4 ("Choosing your operating mode") is carrying both `evaluate` work and mild routing/disambiguation. It is downstream of the primary disambiguation (S1) so this is not a structural concern, but during detailed design this section may benefit from a decision table or callout structure to prevent it from accumulating too much content. Flagged as: *"Section 4 is carrying evaluation and lightweight routing work simultaneously — monitor during detailed design for potential split into two pages."*

- **[Phase 2C / Cross-tab gate]**: LPT acquisition depth is owned by About/Delegators. S3 includes the minimum decision-enabling content (what LPT is, why it's required for solo operators, that it must be bridged to Arbitrum) with a link to Delegators for depth. This is not a CROSS-TAB row because the orchestrator audience needs this information to decide whether to proceed — the self-containment principle requires it.

- **[Phase 2C / Cross-tab gate]**: Governance participation (LIP voting, treasury) is owned by Delegators. Orchestrators have governance rights via their stake weight, but deep governance participation content does not belong in this tab. Surfaced in S7 as a note ("your staked LPT gives you governance weight — see Delegators for how to participate") without full coverage. Not a content gap for this audience's primary goal.

- **[Phase 0 / deprecated-terms.md]**: The deprecated-terms.md file notes a conflict between the old 16-value purpose enum and the canonical 15-value intent-based set. The brief itself specifies the 15-value set in the Framework Enums section. All purpose values in this document use the canonical 15-value set. Note: `compare` appears in the deprecated-terms.md list of the 15-value set but is NOT in the brief's canonical enum table — `evaluate` is used for comparison judgements in this document, which is consistent with the brief's enum definition.
```

<span style="display:none">[^1][^2][^3][^4]</span>

<div align="center">⁂</div>

[^1]: audience-design-v3.md

[^2]: deprecated-terms-2.md

[^3]: glossary-orchestrators-3.md

[^4]: veracity-sources-4.md

