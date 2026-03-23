# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: active set, AI inference, AI runner, aiModels.json, capability advertisement, dual mode, ETH, fee cut, go-livepeer, GPU, LPT, micropayment (probabilistic micropayment / PM), O-T split, orchSecret, performance score, pool, pool node, pricePerUnit, pixelsPerUnit, reward call, reward cut, round, segment, service URI, slashing, stake weight, transcoding, VRAM, warm model
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: active set, AI inference, AI runner, aiModels.json, capability advertisement, dual mode, ETH, fee cut, go-livepeer, GPU, LPT, micropayment (probabilistic micropayment / PM), O-T split, orchSecret, performance score, pool, pool node, pricePerUnit, pixelsPerUnit, reward call, reward cut, round, segment, service URI, slashing, stake weight, transcoding, VRAM, warm model

**Term derivation notes**:

The 27-term lock exceeds the 20-term default ceiling. This tab covers two meaningfully distinct participation paths (solo operator vs pool node) and two distinct workload types (video transcoding vs AI inference), each with separate hardware requirements, configuration surfaces, and economic models. 27 terms are required to give minimal coverage across all four path combinations without omitting any. Explanation recorded in Addendum.

**Deprecated terms replaced or excluded**:
- "Transcoder" (as a synonym for Orchestrator) — excluded. The deprecated-terms register flags this as partially deprecated. In this lock, "O-T split" captures the architectural relationship; "pool node" replaces "pool worker" per the register.
- "Combined mode" / "Hybrid" — excluded. "Dual mode" is the current term.
- "Broadcaster" — excluded. Not relevant to this audience's active work.

**LIP-92 flag**: The glossary defines LIP-92 as the proposal specifying the AI model registry and capability discovery mechanism, including the AIServiceRegistry on-chain contract. The deprecated-terms register flags "Treasury reward cut rate" as governed by LIP-92 — this is a *different* claim from what the glossary assigns to LIP-92. These are not necessarily contradictory (LIP-92 may cover multiple topics), but the claim cannot be confirmed from the Product Context block alone. Both the AIServiceRegistry claim and the treasury reward cut rate claim are marked `[verify-against: https://github.com/livepeer/LIPs]` below and flagged in the Addendum.

**Per-term source and verification notes**:

| Term | Source used | Verification flag |
|---|---|---|
| Active set | Product Context block; glossary cross-check consistent | `[verify-live: https://explorer.livepeer.org]` — active set size (currently 100) is governance-controlled |
| AI inference | Product Context block (explicit) | — |
| AI runner | Glossary cross-check; consistent with go-livepeer repo description | `[verify-against: https://github.com/livepeer/go-livepeer]` — container process details and flag names require tagged-release verification |
| aiModels.json | Glossary cross-check; consistent with go-livepeer description | `[verify-against: https://github.com/livepeer/go-livepeer]` — schema details; high staleness |
| Capability advertisement | Product Context block (routing logic); glossary cross-check consistent | `[verify-against: https://github.com/livepeer/LIPs]` — on-chain mechanism via AIServiceRegistry references LIP-92 |
| Dual mode | Deprecated-terms register — current replacement for "Combined mode" / "Hybrid" | — |
| ETH | Product Context block (settlement currency for fees) | — |
| Fee cut | Glossary cross-check; consistent with Product Context (orchestrators earn fees from jobs) | `[verify-live: https://explorer.livepeer.org]` — individual operator settings |
| go-livepeer | Product Context block (implied); glossary cross-check consistent | `[verify-against: https://github.com/livepeer/go-livepeer]` — always specify tagged release |
| GPU | Product Context block (explicit — hardware operators) | — |
| LPT | Product Context block (explicit — staking, governance, inflation rewards) | `[verify-live: https://explorer.livepeer.org]` — live supply figures |
| Micropayment / PM | Glossary cross-check; probabilistic micropayment system is core payment mechanism | `[verify-against: https://github.com/livepeer/protocol]` — TicketBroker contract details |
| O-T split | Glossary cross-check; referenced in Streamflow spec | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| orchSecret | Glossary cross-check; CLI flag detail | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag name must match tagged release |
| Performance score | Glossary cross-check; consistent with routing logic in Product Context | `[verify-against: https://github.com/livepeer/go-livepeer]` — calculation details |
| Pool | Product Context block (pool participation path is explicit) | — |
| Pool node | Deprecated-terms register — current replacement for "pool worker" | — |
| pricePerUnit | Glossary cross-check; CLI flag detail | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag name and defaults must match tagged release |
| pixelsPerUnit | Glossary cross-check; CLI flag detail | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag name and defaults must match tagged release |
| Reward call | Glossary cross-check; consistent with per-round inflation model in Product Context | `[verify-against: https://github.com/livepeer/protocol]` — Reward() function in BondingManager |
| Reward cut | Glossary cross-check; consistent with Product Context (inflation rewards to orchestrators and delegators) | `[verify-live: https://explorer.livepeer.org]` — individual operator settings |
| Round | Glossary cross-check ("approximately one day") | `[verify-against: https://github.com/livepeer/protocol]` — RoundsManager contract |
| Segment | Glossary cross-check; whitepaper defines segment model | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| Service URI | Glossary cross-check; ServiceRegistry contract | `[verify-against: https://github.com/livepeer/protocol]` |
| Slashing | Glossary cross-check; whitepaper documents slashing conditions | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| Stake weight | Product Context block (explicit — stake determines active set rank and reward share) | `[verify-live: https://explorer.livepeer.org]` |
| Transcoding | Product Context block (explicit — video transcoding is one of two compute types) | — |
| VRAM | Glossary cross-check; required for GPU hardware selection | — |
| Warm model | Glossary cross-check; "beta" qualifier noted — may change with releases | `[verify-against: https://github.com/livepeer/go-livepeer]` — warm/cold behaviour and beta status |

**LIP-92 definition review**: The glossary heading reads "LIP-92" and the body describes it as "the AI model registry and capability discovery mechanism." The deprecated-terms register separately associates "Treasury reward cut rate" with LIP-92. These are different claims assigned to the same LIP number. Without direct verification against the LIPs repo, it is not possible to confirm whether these claims are both correct, one is wrong, or LIP-92 covers multiple topics. Both claims are `[verify-against: https://github.com/livepeer/LIPs]`. This is not a heading/body mismatch in the glossary itself — it is a cross-document attribution conflict. Flagged in Addendum.

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

Before encountering this network's terminology, these people call themselves GPU operators, node operators, mining rig operators, server farm owners, compute providers, or simply "the people running the machines." In the crypto infrastructure world they may say "validator operator" (borrowing from PoS chains) or "miner" (from PoW background). None of these labels map cleanly to this network's specific role — the network-specific term "orchestrator" is a learned label, not a self-descriptor they arrive with.

**2. What are the 3–5 actions that define their core job? (in their language)**

1. Keep machines online and serving jobs reliably
2. Earn as much as possible from the hardware they have running
3. Stay staked / positioned to receive work (on this network: hold rank in the selection pool)
4. Monitor and debug problems before they cost earnings
5. Decide how to expand capacity — more GPUs, another machine, joining or running a pool

**3. Which terms in the TERMINOLOGY_LOCK have a network-specific meaning that differs from the industry default?**

| Term | Industry default | Network-specific meaning | Risk |
|---|---|---|---|
| Active set | Generic: the set of things currently active in a system | This network: the top N orchestrators by total bonded LPT eligible for video transcoding jobs in the current round. Not "active" as in "online and processing" — an orchestrator can be online and processing but not in the active set (AI work does not require it). Critically: active set membership is based on *bonded stake*, not uptime. | Operators may assume "active" means connected. It does not. Stake below threshold = not in the set regardless of uptime. |
| Round | Generic: an iteration in an algorithm or game cycle | This network: a fixed time period (~one day, ~5,760 Ethereum L1 blocks) governing reward minting, activation changes, and delegator stake checkpoints. Not a "processing round" in the gaming or iterative sense. | Operators may confuse it with request/job cycles. |
| Slashing | Generic in crypto PoS: penalty for validator misbehaviour | This network: penalty that destroys a portion of bonded LPT for protocol violations. Importantly, *delegated* stake is also at risk — not just the operator's own stake. This is a source of delegator trust implications. | Operators may assume only their own self-stake is at risk. |
| Reward call | No clear industry default | Network-specific action: an on-chain transaction an active orchestrator must submit once per round to mint and claim inflation rewards. Missing it forfeits rewards permanently for that round. | New operators may not know this is a manual/automatable on-chain action with a hard per-round deadline. |
| Performance score | Generic: some composite metric | This network: a specific per-gateway composite (latency score × success rate) that affects the probability of receiving future jobs from that gateway. The score is per-gateway, not global. | Operators may assume their "reputation" is a single global number visible everywhere. |
| Pool node | Generic: a node in a pool | This network: a machine that contributes GPU compute under a pool operator's orchestrator. It does not hold LPT, does not interact with the protocol directly, and earns via off-chain agreements. This is a fundamentally different economic and operational relationship from operating an orchestrator. | Operators considering this path may not realise they have zero on-chain presence and depend entirely on the pool operator for payout. |
| Warm model | Generic: loaded/ready state | This network: specifically refers to AI models loaded into GPU memory, with an important operational constraint during the current beta — typically only one warm model per GPU. Serving a cold model request triggers a load delay of seconds to minutes. | Operators new to AI workloads may assume all configured models are immediately available. |

---

## Arriving Question

> "I have GPU hardware — what does it take to actually start earning on Livepeer, and is it worth it for my setup?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | The Solo Evaluator | Search result ("how to run a Livepeer orchestrator"), Discord/forum link, or external article | Knowledge of GPU hardware they own or plan to buy; vague awareness that Livepeer pays for compute; no knowledge of staking, LPT, or protocol mechanics | A concrete decision: whether their hardware and available capital meet the threshold to earn; if yes, a clear first action | 3 | 3 | 3 | 9 |
| 2 | The Active Operator | Bookmark / direct return visit, or clicking a docs link from a troubleshooting search | Node already running; earning some amount; wants to improve earnings, fix a specific problem, or add AI capability | A specific answer: new configuration setting applied, problem diagnosed, AI pipeline enabled | 3 | 3 | 3 | 9 |
| 3 | The Pool Candidate | Discord referral from a pool operator, or forum post about pools | Owns GPU hardware but lacks sufficient LPT to enter the active set solo; heard they can still earn via a pool | Clarity on how the pool model works, what they connect to, and how to get started as a pool node | 2 | 2 | 3 | 7 |
| 4 | The AI-First Builder | Search ("run AI inference earn crypto") or referral from AI/ML community | Background in AI/ML or model serving; less familiarity with crypto/staking; interested specifically in AI inference revenue | Set up AI inference capability, understand how AI job routing works, understand what models they can serve | 2 | 3 | 2 | 7 |
| 5 | The Governance Participant | Treasury/governance announcement, Foundation blog, Discord governance channel | Running orchestrator already; wants to understand how on-chain governance works and how their stake gives them a vote | Know how to participate in governance votes and how treasury funding works | 1 | 2 | 1 | 4 |

**Scoring assumptions** (no analytics available — reasoned from Product Context):
- Vol 3 for Solo Evaluator: most people researching compute-earning platforms arrive as evaluators first; this is the widest top-of-funnel state.
- Vol 3 for Active Operator: return visits for ongoing operational guidance are the highest-frequency use case for any operator tab.
- Vol 2 for Pool Candidate: the pool path is real but requires an initial social/Discord connection to a pool operator — narrower funnel.
- Vol 2 for AI-First Builder: AI inference on Livepeer is a current growth surface but the specific audience of AI/ML practitioners who want to monetise their hardware via this network is still emerging.
- Vol 1 for Governance Participant: governance engagement is high-intent but low-volume; most orchestrators delegate governance participation to others.

**Primary persona**: The Solo Evaluator and The Active Operator are tied at 9. The Active Operator is named primary because the tab must serve both the setup path *and* the return-visit operational path; the section structure around ongoing operation provides the frame that also serves the evaluator moving through it. The Solo Evaluator's evaluation questions are answered within the first three sections; the Active Operator needs all sections.

> **Primary persona**: The Active Operator — this persona drives the section structure. The Solo Evaluator is the first-visit variant of the same path and is fully served by sections S1 through S4. Sections S5–S10 serve the Active Operator's ongoing operational needs.

**Self-identification check**: The audience calls themselves "node operators" or "GPU operators." That label does not route cleanly — it could describe three distinct paths on this tab: (1) solo operator running a full orchestrator, (2) pool node connecting to someone else's orchestrator, (3) AI-only operator without video transcoding. The reader cannot identify which path applies without reading content. **A dedicated disambiguation section is required as the first content section.**

**Entry blockers**:
- **LPT stake requirement** (Solo Operator path): An operator cannot enter the active set for video transcoding work without staking a meaningful amount of LPT. This is a hard-stop blocker for the transcoding revenue path. The section explaining stake requirements and the active set must appear before the setup and configuration sections that assume active set membership. The Prerequisite Audit section (S2) resolves this blocker before S3 (quickstart).
- **ETH for gas** (both solo and pool paths): Reward calls and ticket redemptions require ETH on Arbitrum for gas. The node cannot operate without a funded wallet. Also resolved in S2.
- **AI runner requires GPU with sufficient VRAM** (AI path): The AI inference path requires a GPU meeting minimum VRAM requirements to load models. This must be established before the AI setup section. Resolved in S2 and the hardware context within S6.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I am evaluating whether to run a node on Livepeer with my existing GPU hardware | Understand what hardware, capital, and ongoing commitments are required | Make a binary go/no-go decision before investing time in setup |
| J2 | I have decided to run a node and am setting it up for the first time | Follow a clear, ordered setup path that ends with my node receiving jobs | Start earning without having to guess what I missed |
| J3 | My node is running but I am not receiving as much work as I expect | Diagnose why — pricing, stake rank, performance score, or configuration issue | Fix the specific problem and increase my earnings |
| J4 | I want to add AI inference capability to my existing video transcoding node | Understand what additional hardware and configuration AI requires, and complete that setup | Serve AI jobs and earn from both compute types |
| J5 | I want to verify my node is configured correctly and performing well | Check key metrics — active set rank, performance score, reward call status, session count | Confirm I am not losing earnings to avoidable misconfiguration |
| J6 | I want to understand the staking and reward mechanics in enough detail to set my cuts competitively | Know how reward cut, fee cut, and stake weight interact, and what values other orchestrators use | Set competitive parameters that attract delegation without leaving earnings on the table |
| J7 | I receive a new major release of go-livepeer and need to know what changed and what action I need to take | Find release notes and any required migration steps specific to orchestrators | Update without disrupting my node or losing earnings during the transition |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Figuring out which path applies | discover | Identifying whether they are a solo operator candidate, a pool node candidate, or an AI-first operator — and whether they have the prerequisites |
| 2 | Auditing prerequisites | evaluate | Checking their hardware, LPT capital, and ETH against the requirements for their chosen path; deciding whether to proceed |
| 3 | Getting to first job | setup | Installing go-livepeer, registering on-chain, setting price, and receiving their first transcoding or AI job |
| 4 | Configuring for production | build | Setting up automated reward calling, ticket redemption, monitoring, and security for a stable long-running node |
| 5 | Understanding the economics | evaluate | Learning how staking, reward cut, fee cut, and stake weight interact; setting competitive parameters |
| 6 | Expanding to AI inference | build | Adding AI runner configuration, loading models, advertising capabilities, and smoke-testing AI pipelines |
| 7 | Operating and monitoring | operate | Day-to-day health checks, performance score monitoring, reward call verification, session tracking |
| 8 | Diagnosing problems | troubleshoot | Diagnosing low throughput, missed reward calls, low performance score, or AI model failures |
| 9 | Optimising earnings | optimise | Tuning pricing, hardware capacity, model selection, and stake strategy to maximise yield |
| 10 | Participating in governance | operate | Voting on governance proposals, understanding treasury mechanics, tracking protocol upgrades |

**On-demand**:
- Current pricePerUnit benchmarks and competitive pricing ranges for video transcoding
- CLI flag names, defaults, and accepted values for the current go-livepeer release
- Active set rank and total stake for the operator's own node (live, via Explorer)
- Reward call status for the current round — was it already submitted?
- AI pipeline types currently supported and their VRAM requirements by model
- Performance score components — what is my current latency score and success rate?
- Governance-controlled parameter values: active set size, unbonding period, treasury reward cut rate
- Release notes and migration steps for new go-livepeer versions

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage routes GPU operators to this tab via audience routing |
| Inbound | About → Orchestrators | About explains protocol economics and network roles; readers curious about the operator role are directed here for setup and operational depth |
| Inbound | Community → Orchestrators | Community posts and forum threads for operators link to this tab for technical setup guidance |
| Inbound | Gateways → Orchestrators | Gateway docs explain the demand side; operators building understanding of how work is routed may arrive from there |
| Outbound | Orchestrators → Delegators | Operators attracting delegation need to understand the delegator perspective; cross-link for delegator-facing economics |
| Outbound | Orchestrators → About | Protocol architecture depth (tokenomics, inflation model, governance model) lives in About; link for operators who want conceptual substrate beyond what this tab provides |
| Outbound | Orchestrators → Gateways | Pricing negotiation and AI job routing mechanics are co-owned; operators benefit from understanding how gateways select them |
| Outbound | Orchestrators → Resource HUB | CLI reference, changelog, glossary — operators return here for exact specifications |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1: Which operator path is mine? | "I have GPU hardware and want to earn on Livepeer — am I a solo orchestrator, a pool node, or an AI-only operator?" | J1 | `orient` | `navigation` | Arrived knowing only that Livepeer pays for GPU compute; does not yet know which participation path applies | Has identified which of the three paths applies to their situation and clicked through to the correct path entry point | `discover` |
| S2: What do I need before I start? | "Do my hardware, LPT capital, and technical setup actually qualify me for the path I just chose?" | J1 | `evaluate` | `concept` | Has identified their path (from S1); does not yet know specific requirements | Has compared their hardware and capital against requirements and made a go/no-go decision; knows their blockers if any | `evaluate` |
| S3: How do I get my node running and receiving jobs? | "What exactly do I install, configure, and register to reach first-job state?" | J2 | `start` | `instruction` | Has decided to proceed (from S2); prerequisites confirmed | Has a running node that has received at least one job (video or AI depending on path); reward call verified in Explorer | `setup` |
| S4: How do I set my node up for reliable long-term operation? | "What do I need to automate and harden before I can stop watching this thing constantly?" | J2 | `configure` | `guide` | Node running (from S3); not yet automated or hardened | Has automated reward calling and ticket redemption; monitoring in place; security review complete; node running without manual intervention | `build` |
| S5: How does the staking and reward system work, and how do I set competitive parameters? | "What are reward cut, fee cut, and stake weight — and what should I actually set them to?" | J6 | `explain` | `concept` | Node running; wants to attract delegation and optimise economic position | Has decided on reward cut and fee cut values; understands how changing them affects delegation attraction and personal earnings | `evaluate` |
| S6: How do I add AI inference to my node? | "What extra hardware, configuration, and model setup do I need to serve AI jobs?" | J4 | `build` | `instruction` | Running video transcoding node; wants to add AI capability | Has AI runner configured with at least one warm model, capability advertisement set, and AI pipeline smoke-tested successfully | `build` |
| S7: How do I monitor my node and confirm it is earning correctly? | "How do I know my node is healthy, in the active set, earning rewards, and not silently failing?" | J5 | `operate` | `guide` | Node running in production; wants routine health verification | Can perform a complete node health check: active set status, current-round reward call status, performance score, session count, ETH balance for gas | `operate` |
| S8: Why am I not receiving work / earning less than expected? | "My node is running but earnings are below expectation — where is the problem?" | J3 | `troubleshoot` | `guide` | Node running; observing low or zero job volume or earnings below expectation | Has identified the root cause category (pricing, stake rank, performance score, capability advertisement, connectivity) and applied a specific fix or next diagnostic step | `troubleshoot` |
| S9: How do I improve my earnings on a running node? | "My node works — now how do I get more jobs and higher yield?" | J3 | `optimise` | `guide` | Node running and earning; wants to improve yield | Has changed at least one pricing, configuration, or hardware parameter with a clear rationale; knows which metrics to watch to evaluate the change | `optimise` |
| S10: How do I participate in governance and track protocol changes? | "How does my stake give me a vote, and how do I stay informed about changes that affect my node?" | J7 | `explain` | `concept` | Established operator; wants to engage with on-chain governance and protocol upgrades | Has submitted at least one governance vote or knows exactly how to do so; knows where to track upcoming protocol changes that require node updates | `operate` |

**Section load flags**:

S8 (troubleshoot) is carrying a wide range of failure modes — pricing, stake rank, performance score, capability advertisement, and connectivity are structurally different diagnoses with different entry conditions. A reader arriving because they have *zero* sessions is in a different state from one arriving because their AI requests are failing. `[⚠ Design flag: may need to split]` — see Addendum.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Solo Evaluator | S1 (path disambiguation) | S3 (node running, first job confirmed) — may stop here and return later | None | S2 must cover the LPT stake and ETH gas requirement clearly enough that the evaluator can make a go/no-go decision without additional research | None |
| The Active Operator | S1 (on return visit, will skip to S7/S8/S9) | S10 (governance / protocol updates) | None | S5 must explain the interaction between reward cut, fee cut, and delegation attraction without assuming the reader has studied tokenomics — some operators are operationally sophisticated but economically underinformed | None |
| The Pool Candidate | S1 (S1 must route this persona to the pool path; if it does not, this persona is blocked) | S4 (pool node running and connected) — governance section (S10) is not relevant | S1 must explicitly surface the pool path as an option. If S1 only covers "solo operator" and "AI operator" paths, this persona cannot identify their route. The exit state of S1 must include pool-path routing. | S2 must include pool node prerequisites (no LPT required; orchSecret coordination with pool operator; depends on pool operator's on-chain status) separately from solo prerequisites | None — pool node path is accommodated within S1–S4; no separate section needed, but S1–S4 must explicitly branch for this path |
| The AI-First Builder | S1 (AI-only or dual-mode path) | S6 (AI pipeline running) — may loop to S7/S9 | S2 must cover AI-specific hardware requirements (VRAM minimum by model type) before S6 assumes hardware is confirmed | S5 (staking economics) may confuse an AI-first builder who does not need the active set for AI work — S5 must clarify that AI job routing does not require active set membership | None — but S5 should include a clear note that AI-only operators are not blocked by LPT stake requirements for AI inference |
| The Governance Participant | S10 (direct entry) | S10 | None — S10 is a standalone section reachable directly | S10 must explain stake-weighted voting in enough context that an operator who has never engaged with governance can participate in a vote | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`?
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`?
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
- [x] All enum values are canonical — no invented tokens? (`purpose` 15, `pageType` 7, `lifecycleStage` 7)
- [x] Disambiguation section (S1) has `lifecycleStage: discover`?

**Quality gate check — item-by-item**:

- Arriving question is specific (names hardware, earning, and setup — not a topic): pass
- At least 3 distinct personas, each with a different arriving state and entry vector: pass (5 personas)
- Self-identification check done — disambiguation section (S1) added: pass
- Entry blockers identified (LPT stake, ETH gas, GPU VRAM) — S2 resolves all three before S3: pass
- At least 5 jobs, first-principles: pass (7 jobs)
- Every section has reader question, job, entry state, and exit state: pass
- No exit state uses "understands" — all are concrete actions or decisions: pass
- Cross-tab gate applied — all content this audience needs is included; CROSS-TAB rows only for content they do not need here: pass
- Persona path validation complete — all 5 personas have unblocked paths: pass
- All enum values are from canonical lists — no invented tokens: pass
- No governance-controlled numeric values hard-coded: pass (active set size not stated as 100 in section design; verify-live flags applied in TERMINOLOGY_LOCK)
- S1 has `lifecycleStage: discover`: pass
- Phase 0 definition conflicts flagged: pass (LIP-92 cross-document attribution conflict flagged in Addendum)

All gates pass.

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — Term count]**: The 20-term ceiling is a soft default. This tab covers two participation paths (solo operator vs pool node) and two workload types (video transcoding vs AI inference), each with different hardware requirements, configuration surfaces, and economic models. 27 terms were required to give minimal coverage across all combinations without omitting any path. The additional 7 terms beyond the ceiling are all network-specific operational terms (AI runner, aiModels.json, capability advertisement, O-T split, orchSecret, warm model, pool node) that a reader arriving on any of the four paths will encounter as early as their third page of reading.

- **[Phase 0 / Step 0.2 — LIP-92 attribution conflict]**: The glossary assigns LIP-92 to the AI model registry and capability discovery mechanism (AIServiceRegistry). The deprecated-terms register separately attributes LIP-92 to the "treasury reward cut rate." These are different claims assigned to the same LIP number. This is a cross-document attribution conflict — not a heading/body mismatch within a single glossary entry, so `[DEFINITION CONFLICT]` in the strict heading/body sense does not apply. However, the ambiguity is substantive: if LIP-92 governs the treasury reward cut rate, the deprecated-terms register is using it correctly in that context, but the glossary's description of LIP-92 as the AI registry LIP would be incomplete or wrong. Both claims require `[verify-against: https://github.com/livepeer/LIPs]` before either is used in documentation. Neither claim was included in the TERMINOLOGY_LOCK as a stated fact.

- **[Phase 0 / Step 0.2 — Warm model beta qualifier]**: The glossary notes that orchestrators "typically support one warm model per GPU during the current beta." This constraint is high-staleness — it may change with any go-livepeer release. The warm model term is in the TERMINOLOGY_LOCK because the concept is fundamental to AI operator hardware planning, but any doc page using this term must verify the current warm-model constraint against the latest go-livepeer tagged release. `[verify-against: https://github.com/livepeer/go-livepeer]`.

- **[Phase 0 / Step 0.2 — go-livepeer "Broadcaster" in codebase]**: The go-livepeer binary contains a "Broadcaster" role that is the deprecated predecessor to Gateway. The glossary entry for go-livepeer accurately notes it contains "Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles." This is a legitimate historical artefact. Documentation for orchestrators should not use "Broadcaster" and should note that CLI references to Broadcaster are legacy labels.

- **[Phase 1 — Primary persona tie]**: The Solo Evaluator and Active Operator both scored 9. The tie was broken in favour of Active Operator as the primary persona because the section structure must serve the full lifecycle, not just the entry path. The Solo Evaluator's needs are fully met by sections S1–S3, which sit within the structure that serves the Active Operator's full journey. No content is sacrificed for either persona by this choice.

- **[Phase 2C — Section count]**: 10 sections. Within the 8–12 target range.

- **[Phase 2C / S8 — Section load flag]**: S8 (Why am I not receiving work / earning less than expected?) is carrying multiple structurally distinct failure modes: pricing above MaxPrice, stake rank outside active set, low performance score from failed transcodes, capability advertisement not reaching gateways, and network connectivity failures. A reader arriving because they have zero sessions is in a different diagnostic entry state from one arriving because their AI requests are timing out. This section may need to split into separate diagnostic pages during detailed design — one for "zero or near-zero job volume" and one for "AI pipeline failures and capability routing issues." Flagged in the section table as `[⚠ Design flag: may need to split]`.

- **[Phase 2D — Pool Candidate path dependency on S1]**: The Pool Candidate path is entirely dependent on S1 explicitly surfacing the pool node path as a distinct option. If S1 only covers solo operator and AI operator paths, pool candidates are blocked at the first section. The exit state of S1 includes "pool path" routing, and this dependency is noted explicitly in the persona path validation.

- **[Phase 2B — AI-only path and active set]**: The Product Context block explicitly states that AI inference routing does not require active set membership — gateways select AI orchestrators based on capability and price, not stake weight. This is a meaningful difference from the video transcoding path. It means an AI-first operator with zero LPT stake can earn from AI jobs without ever entering the active set. This distinction must be surfaced clearly in S1 (path disambiguation) and S5 (staking economics), so that AI-first operators are not deterred by the LPT stake requirement that applies only to the video transcoding path.

- **[No web access during this run]**: No web access was available to search for additional primary sources not listed in veracity-sources.md. No `[SUGGESTED SOURCE]` additions are made. If web access were available, suggested targets would include: current go-livepeer release notes (to verify AI runner configuration details and warm-model constraint), the Livepeer Explorer API (to verify live active set composition), and the LIPs repo (to resolve the LIP-92 attribution conflict).
