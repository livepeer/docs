# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**:

| # | Term | Definition for this run | Verification note |
|---|---|---|---|
| 1 | **Orchestrator** | Supply-side network node that holds staked LPT, receives jobs from gateways, executes GPU compute (transcoding and/or AI inference), and earns ETH fees plus LPT inflation rewards. | Product Context block (primary). |
| 2 | **LPT (Livepeer Token)** | ERC-20 staking and governance token. Orchestrators must bond LPT to be eligible for the active set for video transcoding jobs. | Product Context block; `[verify-live: explorer.livepeer.org]` for current staking amounts. |
| 3 | **Active Set** | The top 100 orchestrators by total bonded stake (self-stake + delegated stake) eligible to receive video transcoding jobs in the current round. AI inference routing does not require active set membership. | Product Context block confirms stake-weight eligibility. `[verify-live: explorer.livepeer.org]` — active set size is governance-controlled. |
| 4 | **Stake / Bonding** | Locking LPT into the BondingManager contract to secure the right to receive transcoding work and earn rewards. | Product Context block. `[verify-against: https://github.com/livepeer/protocol]` for BondingManager contract details. |
| 5 | **Reward Call** | On-chain transaction (`Reward()`) submitted once per round by an active orchestrator to mint and claim new LPT inflation rewards for that round. Missing it permanently forfeits those rewards. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release for automation flags and gas estimates. |
| 6 | **Reward Cut** | The percentage of LPT inflation rewards the orchestrator retains before distributing the remainder to delegators. Affects delegation attraction. | `[verify-live: explorer.livepeer.org]` — each orchestrator sets their own value on-chain. |
| 7 | **Fee Cut** | The percentage of ETH service fees the orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: explorer.livepeer.org]` |
| 8 | **Probabilistic Micropayment (PM)** | Lottery-based payment system where gateways issue signed tickets; winning tickets are redeemed on-chain via the TicketBroker for ETH. Amortises on-chain gas costs across many small payments. | `[verify-against: https://github.com/livepeer/protocol]` — TicketBroker contract. |
| 9 | **Gateway** | Demand-side node that routes AI or video transcoding jobs into the network. Selects orchestrators based on stake weight, performance score, and pricing. | Product Context block. |
| 10 | **pricePerUnit / pixelsPerUnit** | CLI parameters setting the orchestrator's transcoding price in wei per unit of pixels processed. The primary means by which an orchestrator is priced in and out of gateway job routing. | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag names and defaults change between releases. |
| 11 | **Performance Score** | Composite metric (latency score × success rate) that gateways use alongside stake and price when selecting orchestrators. A hard gate (MaxPrice) and soft scoring factors combine to determine routing priority. | `[verify-against: https://github.com/livepeer/go-livepeer]` — scoring logic in source. |
| 12 | **Video Transcoding** | Conversion of inbound video streams into multiple encoded renditions at different resolutions and bitrates. One of two compute types on the network. Requires active set membership for guaranteed job routing. | Product Context block. |
| 13 | **AI Inference** | Running trained ML models on new inputs to produce generated outputs (images, video, audio, text). The second compute type on the network. Routing is capability- and price-based rather than stake-rank-based. | Product Context block. |
| 14 | **Dual Mode** | Deployment configuration where a single orchestrator handles both video transcoding and AI inference simultaneously. Replaces deprecated terms "combined mode" and "hybrid." | `deprecated-terms.md` confirmed; `[verify-against: https://github.com/livepeer/go-livepeer]` for flag combinations. |
| 15 | **O-T Split** | Architectural separation of the orchestrator process (protocol interaction, payment negotiation) from the transcoder/worker process (GPU compute), typically on different machines. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` for O-T split architecture. |
| 16 | **Pool** | Group of worker nodes coordinated under a single orchestrator for capacity scaling. The pool operator holds the on-chain stake and handles reward calling; workers contribute GPU and receive off-chain payouts. | Glossary cross-check confirms; term "Pool node" is current — "Pool worker" is renamed per `deprecated-terms.md`. |
| 17 | **Capability Advertisement** | Mechanism by which orchestrators inform gateways of the AI pipelines and models they can process — on-chain via AIServiceRegistry or off-chain via webhook discovery. | `[verify-against: https://github.com/livepeer/LIPs]` — LIP-92 covers AI capability registry. |
| 18 | **Service URI** | Publicly reachable URL registered on-chain (ServiceRegistry contract) that gateways use to discover and connect to an orchestrator node. | `[verify-against: https://github.com/livepeer/protocol]` — ServiceRegistry contract. |
| 19 | **go-livepeer** | Official Go binary implementing all Livepeer network roles. Orchestrators, pool workers, and standalone transcoders all run different flag combinations of the same binary. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release. |
| 20 | **aiModels.json** | JSON configuration file specifying which AI models an orchestrator loads, at what price, and with what warm/cold status. The primary config surface for AI workloads. | `[verify-against: https://github.com/livepeer/go-livepeer]` — schema changes with releases. |
| 21 | **Warm Model / Cold Start** | A warm model is already loaded in GPU VRAM and serves requests immediately. A cold model must be loaded first, incurring latency of seconds to minutes. Status declared in `aiModels.json`. | `[verify-against: https://github.com/livepeer/go-livepeer]` — beta behaviour (one warm model per GPU) may change. |
| 22 | **BYOC (Bring Your Own Container)** | Deployment pattern for running custom Docker containers for AI workloads alongside standard Livepeer pipelines, conforming to the Livepeer AI worker API specification. | `[verify-against: https://github.com/livepeer/go-livepeer]` — API specification in source. |
| 23 | **Delegator** | LPT token holder who bonds tokens to an orchestrator, earning a share of rewards and participating in governance. Their delegated stake contributes to the orchestrator's active set rank. | Product Context block. |
| 24 | **Inflation / Round** | New LPT is minted each protocol round (~1 day) and distributed based on stake participation. The inflation rate adjusts based on whether total bonded LPT is above or below the target bonding rate. | `[verify-live: explorer.livepeer.org]` — all parameter values are governance-controlled. `[verify-against: https://docs.livepeer.org/delegators/guides/yield-calculation]` |

**Terms exceeding 20**: justified. The Orchestrators tab spans two meaningfully distinct workload types (video transcoding and AI inference), each with its own configuration surface, routing logic, and operational requirements. Covering both paths without omitting either required 24 terms.

**Deprecated-term checks applied**:
- "Broadcaster" → not used; current term "Gateway" used throughout.
- "Combined mode" / "Hybrid" → replaced with "Dual Mode."
- "Pool worker" → noted as renamed; "Pool node" is current in `deprecated-terms.md`; this document uses "Pool node" in body text. Glossary entry "Pool Worker" lists "Pool node" as also known as — treated as acceptable until a single canonical form is confirmed.
- "Transcoder" as synonym for Orchestrator → not used. "Transcoder" appears only in O-T Split context (the worker subprocess), which is its correct remaining use per `deprecated-terms.md`.

---

### Anchoring Statements

**1. What does this audience call themselves?**
Before arriving at this documentation, this audience calls themselves **GPU operators**, **node operators**, or **miners** (carrying over from proof-of-work mental models). Those running AI workloads may also self-identify as **inference providers** or **compute providers**. The network-specific term "Orchestrator" is typically learned from the docs — it is not vocabulary they arrive with.

**2. Core job actions (in their own language):**
- *Connect my GPU to a network and start earning*
- *Set a price that gets me jobs without underselling my hardware*
- *Keep my node up and not miss reward payouts*
- *Add AI model support to get more types of work*
- *Monitor my performance and fix anything that's costing me jobs*

**3. Terms with network-specific meanings that differ from industry default:**

| Term | Industry default meaning | Network-specific meaning |
|---|---|---|
| **Orchestrator** | A workflow automation tool (e.g. Airflow, Kubernetes) | A GPU node operator role in the Livepeer protocol — receives jobs, executes compute, earns rewards |
| **Transcoder** | A software tool that converts video formats (e.g. Handbrake) | In Livepeer, specifically the *worker subprocess* in an O-T Split deployment — not the operator role |
| **Segment** | Any chunk of content | A protocol-defined unit of video (~2 seconds) that is the atomic unit of transcoding work |
| **Reward Call** | Informal: collecting money owed | A specific on-chain transaction that must be submitted once per round — missing it permanently forfeits that round's inflation rewards |
| **Active Set** | Marketing term for engaged users | The specific top-100 stake-ranked orchestrators eligible for video transcoding job routing |
| **Bonding** | Generic: committing to something | Locking LPT in the BondingManager contract — a specific on-chain action with an unbonding delay |

---

## Arriving Question

> "I have GPU hardware — how do I connect it to Livepeer, start earning fees, and make sure I don't miss out on jobs or rewards?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The GPU-ready newcomer** | Organic search / community referral (Discord, Twitter) — heard Livepeer pays for GPU compute | A GPU machine, general awareness of crypto earnings, no Livepeer-specific knowledge | Node running, first job received, reward call automated | 3 | 3 | 3 | **9** |
| 2 | **The AI inference specialist** | Livepeer blog post or AI community referral — running ML inference already, looking for a demand channel | Existing ML model serving infrastructure; no knowledge of Livepeer's payment or staking mechanics | AI pipelines registered, first inference job earned, pricing set competitively | 2 | 3 | 3 | **8** |
| 3 | **The scaling operator** | Internal decision — already running a solo video node, wants to expand capacity or add AI | Running solo orchestrator in production; understands reward calls and pricing; wants to add pool workers or AI without downtime | Architecture decision made (pool vs dual mode), expansion steps executed | 2 | 2 | 3 | **7** |
| 4 | **The pool worker candidate** | Pool operator referral, or arrives via search for "join Livepeer without staking" | Has GPU hardware but lacks sufficient LPT stake or does not want to manage on-chain operations | Understands what joining a pool means vs solo operation; has connected to a pool operator | 2 | 2 | 2 | **6** |
| 5 | **The governance-aware delegator-turned-operator** | Delegators tab or community discussion — already understands LPT and rewards, now wants to run infrastructure | Understands LPT, delegation, and reward mechanics; lacks operational setup knowledge | Node running with correct cuts set, reward call automated | 1 | 1 | 2 | **4** |

**Primary persona**: **The GPU-ready newcomer** — this persona drives section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification check**:

This audience arrives calling themselves "GPU operators" or "node operators." That label does not cleanly route to one persona — it could describe:
- A solo newcomer running video transcoding only
- An AI inference provider adding Livepeer as a demand channel
- A pool worker candidate with GPU hardware but no desire to manage on-chain operations

Three meaningfully different setup paths exist with different requirements (LPT stake, configuration surface, earning model). The reader cannot identify their correct path without reading content first.

**Decision**: A dedicated disambiguation section is required as the first content section. It routes readers to solo/AI/pool paths based on two questions: (a) do you want to manage on-chain operations yourself, and (b) which workload type(s) are you targeting?

**Entry blockers**:

| Persona | Hard-stop blocker | Section that must precede the blocked section |
|---|---|---|
| GPU-ready newcomer | Must hold ETH for gas before any on-chain action is possible | Economics overview must explain ETH requirement *before* setup instructions begin |
| GPU-ready newcomer (video) | Must hold or acquire LPT to enter the active set | Staking section must precede video transcoding setup |
| AI inference specialist | No LPT blocker for AI inference routing — capability advertisement is the activation step | Capability registration section may precede staking section for this path |
| Pool worker candidate | Must connect to a pool operator before any setup makes sense | Pool operator directory / connection guide must exist and be accessible before worker setup steps |

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I have a GPU machine and want to earn from it | Understand which workload type (video, AI, or both) is right for my hardware and goals, and what each requires to get started | Make a confident setup-path decision before investing time in configuration |
| 2 | I've decided to run a solo orchestrator | Follow a complete, verified setup sequence from blank machine to first paid job | Know my node is correctly registered, publicly reachable, and eligible to receive work |
| 3 | My node is running but I'm not getting many jobs | Understand how gateways select orchestrators and what I can adjust (pricing, performance, stake) | Increase my job volume without guessing which lever to pull |
| 4 | I want to add AI inference to my existing video node — or set up AI-only | Configure AI pipelines, register capabilities, and verify I'm receiving AI inference jobs | Diversify my revenue without breaking my existing video setup |
| 5 | I'm worried about missing a reward call or mismanaging my cuts | Automate reward calling and understand the economics of reward cut and fee cut | Ensure I'm not permanently losing inflation rewards and that my delegation offer is competitive |
| 6 | My node is in production and I want to know why performance dropped | Diagnose a specific problem — low job volume, failed segments, AI inference failures | Restore normal operation using a structured troubleshooting process |
| 7 | I want to scale beyond one GPU or one machine | Understand the O-T split architecture and pool model, and decide which scaling path fits my situation | Grow capacity without having to rebuild from scratch |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Figuring out if this is for them | `discover` | Reading what an orchestrator is, what it earns, what it requires — deciding whether to proceed |
| 2 | Choosing their setup path | `evaluate` | Comparing solo vs pool worker, video vs AI vs dual mode — selecting the right configuration for their hardware and goals |
| 3 | Acquiring prerequisites | `setup` | Obtaining LPT (if solo video), funding ETH wallet for gas, preparing hardware environment |
| 4 | Installing and registering | `setup` | Installing go-livepeer, configuring flags, registering service URI and stake on-chain, verifying public reachability |
| 5 | Setting pricing and cuts | `setup` | Setting pricePerUnit, reward cut, fee cut — understanding how these affect job routing and delegation |
| 6 | Verifying and going live | `setup` | Running smoke tests, confirming first job received, confirming reward call succeeds |
| 7 | Configuring AI workloads | `build` | Writing aiModels.json, registering AI capabilities, verifying AI inference routing — for AI or dual-mode operators |
| 8 | Operating and monitoring | `operate` | Tracking performance score, reward call status, session volume, earnings — day-to-day operations |
| 9 | Optimising performance and earnings | `optimise` | Adjusting pricing competitiveness, improving performance score, managing model warmth, scaling capacity |

**On-demand**:
- Current pricePerUnit benchmark ranges and how to check whether your price is above gateway MaxPrice thresholds
- Reward call status: did it succeed this round, how to check, how to automate
- Active set rank: current position and total stake required to enter or maintain membership
- AI pipeline type list: which pipelines are currently routeable, current model IDs and warm/cold behaviour
- CLI flag reference: flag names, defaults, and accepted values for the current go-livepeer release
- Troubleshooting job routing: why am I not receiving work — stake, price, performance score, connectivity
- Troubleshooting AI inference: cold start delays, model load failures, capability advertisement errors
- Reward cut / fee cut: what values are competitive right now, how to change them on-chain
- O-T split and pool architecture: how to connect additional worker machines
- Gas cost estimates: redemption costs, reward call costs on Arbitrum

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Delegators → Orchestrators | Delegators evaluating which orchestrator to stake to may read this tab to understand what orchestrators actually do and what makes one trustworthy |
| Inbound | Community → Orchestrators | Community members referred to this tab after expressing interest in running infrastructure |
| Inbound | About → Orchestrators | Readers completing an architecture overview who want to act on the supply side |
| Outbound | Orchestrators → Delegators | Orchestrators learn to set competitive reward cut / fee cut and understand that attracting delegators requires them to understand the delegator's perspective |
| Outbound | Orchestrators → Gateways | Understanding how gateway selection logic works is essential for orchestrators optimising job volume — gateway pricing parameters (MaxPrice) and routing behaviour |
| Outbound | Orchestrators → Resource HUB | CLI reference, changelog, cross-cutting glossary |

---

## Ideal Section Structure

| # | Section | Reader question | Job it serves | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|---|
| 1 | **What kind of operator are you?** *(disambiguation)* | "I have GPU hardware — am I a solo operator, a pool worker, or an AI provider? What path do I take?" | Job 1 — choose the right setup path | `orient` | `navigation` | Reader has arrived knowing they want to earn from GPU hardware; does not yet know which setup path applies | Has identified which of three paths applies to their situation (solo video, AI/dual, pool worker) and navigated to the right starting section | `discover` |
| 2 | **What orchestrators do and what they earn** | "Is running an orchestrator actually worth it for my hardware and time?" | Job 1 — decide whether to proceed before investing in setup | `evaluate` | `concept` | Has been routed here from disambiguation (solo video or dual-mode path); no prior knowledge of Livepeer economics | Has decided whether to proceed based on a realistic picture of what orchestrators earn, what they stake, and what they're responsible for | `discover` |
| 3 | **How gateways select orchestrators** | "How does work actually get routed to me? What determines whether I get jobs?" | Job 3 — increase job volume; Job 1 — understand the system before setting up | `explain` | `concept` | Has decided to proceed; does not yet understand the selection mechanism | Can name the three primary routing factors (stake rank, price vs MaxPrice, performance score) and articulate how each one affects job volume. Has decided whether active set membership matters for their chosen workload type | `evaluate` |
| 4 | **Prerequisites and hardware** | "What do I need before I run a single command — hardware, tokens, wallet?" | Job 2 — reach a working state from scratch | `learn` | `concept` | Has decided to proceed; has not yet acquired any prerequisites | Has confirmed their hardware meets requirements, funded their ETH wallet for gas, and understands whether and how to acquire LPT for their chosen path | `setup` |
| 5 | **Install, configure, and register your node** | "How do I install go-livepeer, set my flags, and get my node publicly registered on-chain?" | Job 2 — complete first setup end to end | `start` | `instruction` | Has completed prerequisites (ETH, LPT if video path, hardware ready) | Has a running, publicly reachable go-livepeer node with service URI registered on-chain, reward calling automated | `setup` |
| 6 | **Set your pricing and cuts** | "What price should I set — and what reward cut and fee cut are reasonable?" | Job 2 — go live; Job 5 — protect earnings; Job 3 — get jobs | `configure` | `guide` | Node is installed and registered | Has set pricePerUnit and pixelsPerUnit based on network benchmarks, set reward cut and fee cut with an understanding of the trade-off against delegation attractiveness | `setup` |
| 7 | **Verify your node is working** | "How do I know my node is correctly set up and actually receiving work?" | Job 2 — confirm working state before moving on | `verify` | `instruction` | Node configured with pricing and cuts set | Has confirmed first job received, reward call succeeded, performance score is tracking, Explorer shows node correctly | `setup` |
| 8 | **Add AI inference to your node** | "How do I configure AI pipelines, register my capabilities, and start receiving AI inference jobs?" | Job 4 — add AI workloads to diversify revenue | `build` | `instruction` | Running a video orchestrator (or starting fresh on AI-only path); no AI configuration yet | Has written and deployed aiModels.json, registered capabilities on-chain or via webhook, received first AI inference job, understands warm vs cold model behaviour | `build` |
| 9 | **Monitor performance and earnings** | "How do I track job volume, performance score, reward calls, and whether my pricing is still competitive?" | Job 6 — understand why performance dropped; Job 5 — ensure rewards are not being missed | `operate` | `guide` | Node is live and has processed jobs | Has a monitoring setup tracking the metrics that matter (performance score, session count, reward call status, earnings), knows which Explorer views to check regularly | `operate` |
| 10 | **Optimise pricing, performance, and delegation** | "My node is running but I want more jobs, a better performance score, or more delegated stake — what do I change?" | Job 3 — increase job volume; Job 5 — competitive economics | `optimise` | `guide` | Node operating in production with monitoring in place | Has made at least one deliberate optimisation decision (pricing adjustment, cut adjustment, or performance improvement action) with a framework for future adjustments | `optimise` |
| 11 | **Scale your setup: O-T split and pools** | "I want to add more GPUs or machines — what are my options and how do I implement them?" | Job 7 — grow capacity without rebuilding | `build` | `guide` | Solo node running in production; operator wants to scale | Has decided between O-T split and pool architecture for their situation and completed the relevant setup steps to add capacity | `build` |
| 12 | **Troubleshoot common problems** | "Something is wrong — no jobs, failed AI inference, missed reward call — how do I diagnose it?" | Job 6 — restore normal operation | `troubleshoot` | `guide` | Node is live but behaving incorrectly or underperforming; operator is trying to diagnose a specific symptom | Has identified the likely cause of a specific problem and applied or queued the appropriate fix | `troubleshoot` |

**Section count**: 12 — within the 8–12 target. Section 8 (AI inference) is scoped tightly to configuration and activation; it does not attempt to cover all AI pipeline types in depth (those belong in a reference section added post-design).

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| **GPU-ready newcomer (video)** | Section 1 (disambiguation) → routed to Section 2 | Section 7 (verify) for initial goal; returns to Section 9–10 for ongoing operations | None — prerequisite sections (2, 3, 4) precede setup sections (5, 6, 7) | Section 4 must explicitly state the ETH-for-gas requirement before Section 5 begins (partially addressed in Section 4 entry state — confirmed present) | None |
| **AI inference specialist** | Section 1 (disambiguation) → routed to Section 4 (hardware prerequisites, AI path) | Section 8 (AI inference setup) — this is their primary activation milestone | Section 3 (gateway selection) must precede Section 8 — an AI operator who does not understand capability-based routing cannot set up AI correctly. Section 3 is present and precedes Section 8 ✓ | Section 8 must note that AI inference does not require active set membership — failure to state this would cause AI-only operators to incorrectly believe they need to acquire LPT first | None — Section 4 prerequisites and Section 8 AI setup cover this path. The note about no-LPT AI path must be written into Section 4 body content. |
| **Scaling operator** | Section 11 (scale: O-T split and pools) — can enter here directly | Section 11 exit; may revisit Section 10 (optimise) | None — Section 11 is self-contained for an operator who already understands basic operations | Section 11 must briefly recap O-T split security model (orchSecret, network isolation) — this operator may have been running solo with no prior exposure to the split architecture | None |
| **Pool worker candidate** | Section 1 (disambiguation) → pool worker path identified | Section 1 — their primary need is to understand the pool model and locate a pool operator. This path is relatively thin on documentation depth. | None — disambiguation section routes them early enough | A pool worker candidate does not need Sections 5–7 (solo setup) but does need pool-specific connection instructions (orchAddr, orchSecret, no LPT required). These are currently folded into Section 11 for the operator side. A pool *worker* setup path needs to either appear in Section 11 or in a sub-section of Section 5 clearly marked for pool workers. | **Flag**: Section 5 ("Install, configure, and register") should contain a clearly separated sub-path for pool workers (connect to existing operator vs register solo). Currently this sub-path is only implied. Add a routing callout in Section 5 directing pool worker candidates to their specific flag set. |
| **Delegator-turned-operator** | Section 2 (economics — can skip much of it, already knows) → Section 4 (prerequisites) | Section 7 (verify) | None | This persona already understands LPT and reward mechanics but may be confused by the distinction between reward cut as a delegator recipient vs as an orchestrator setter. Section 6 must explicitly address setting cuts from the operator's perspective, not the delegator's. Section 6 entry state covers this. | None |

**Gate resolution**: The pool worker candidate path revealed a missing sub-path within Section 5. This is resolved by specifying a routing callout in Section 5 for pool workers (directing them to pool-specific flag instructions) rather than requiring an entirely new section. All personas now have complete, unblocked paths.

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

- **[Phase 0 / Step 0.2 — Pool node vs Pool worker]**: `deprecated-terms.md` says "Pool worker" was renamed to "Pool node." The glossary entry for "Pool Worker" lists "Pool node" as "Also known as" — suggesting both are still in circulation. This document uses "Pool node" in body text per the deprecated-terms directive, but the canonical form should be confirmed and a single term locked before content is written. Assumed "Pool node" is canonical until confirmed.

- **[Phase 0 / Step 0.2 — Active set size]**: The glossary states active set size is 100. This is governance-controlled and could change. Marked `[verify-live: explorer.livepeer.org]`. Content prompts must not hard-code 100 without a live-check note.

- **[Phase 0 / Step 0.2 — LIP-92 definition in glossary]**: The glossary defines LIP-92 as covering "the AI model registry and capability discovery mechanism." `veracity-sources.md` lists the LIPs repo as primary. The glossary description has not been verified against the LIP text directly — marked `[verify-against: https://github.com/livepeer/LIPs]` in the lock.

- **[Phase 0 / Step 0.3 — Web search for new sources]**: The following sources not listed in `veracity-sources.md` may be relevant and are suggested for review:

  - `[SUGGESTED SOURCE: go-livepeer releases page — https://github.com/livepeer/go-livepeer/releases — Latest tagged release changelog, current AI pipeline types, CLI flag additions and removals — suggested tier: primary]`
  - `[SUGGESTED SOURCE: Livepeer AI docs intro — https://docs.livepeer.org/ai/introduction — Current AI pipeline list and model IDs — suggested tier: lead (the site we are writing; use to surface claims for primary-source verification)]`
  - `[SUGGESTED SOURCE: Livepeer Forum pricing guidance thread — https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 — Operator pricing benchmarks — suggested tier: acceptable (already noted in veracity-sources.md key forum threads, adding for explicitness)]`

- **[Phase 1 — Pool worker candidate depth score]**: Volume scored 2 (moderate) based on reasoning that pool workers are a meaningful segment given operators with GPU hardware but insufficient LPT. Impact scored 2 (medium) because their setup path is simpler and contained within one routing callout. If analytics data becomes available and shows higher pool worker inquiry volume, the depth score and section split decision should be revisited.

- **[Phase 2C / Section 8 — AI pipeline reference scope]**: Section 8 ("Add AI inference to your node") is scoped to configuration and activation only. The full list of supported AI pipeline types, model IDs, and their VRAM requirements is reference material that belongs in a separate reference section (added by the tab's universal elements design, not here). Content authors for Section 8 should link to that reference rather than attempting to document all pipelines inline.

- **[Phase 2C — Section count]**: 12 sections, at the high end of the 8–12 target. The two separate workload types (video transcoding and AI inference), each with meaningfully different configuration paths, justify the count. Merging Sections 5+7 (install/verify) or Sections 9+10 (monitor/optimise) was considered but rejected — each pair serves a distinct reader question and lifecycle stage.

- **[Phase 2D — Pool worker sub-path]**: The path validation revealed that pool worker setup steps are implicitly present in Section 11 (scaling) rather than Section 5 (install). This should be resolved during detailed design by adding a clearly marked routing callout in Section 5 directing pool worker candidates to pool-specific flag instructions. This is a content design decision, not a new section.
