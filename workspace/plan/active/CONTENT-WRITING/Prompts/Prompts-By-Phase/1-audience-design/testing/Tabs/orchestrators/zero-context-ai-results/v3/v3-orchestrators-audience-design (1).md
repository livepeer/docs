# Orchestrators — Audience Design

**Tab**: Orchestrators  
**Audience**: `orchestrator`  
**Generated**: 2026-03-23  
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**:

| # | Term | Definition (authority-derived) | Verify-live? |
|---|---|---|---|
| 1 | **Orchestrator** | A GPU hardware operator who connects machines to the Livepeer network, receives compute jobs from gateways, executes transcoding or AI inference, and earns LPT inflation rewards and ETH service fees. | — |
| 2 | **LPT (Livepeer Token)** | ERC-20 token used for staking, delegation, and governance. Orchestrators must bond LPT to participate in video transcoding job allocation. | — |
| 3 | **Active Set** | The top 100 orchestrators by total bonded stake eligible to receive video transcoding jobs in a given round. AI inference routing does not require active set membership. | `[verify-live: Explorer]` |
| 4 | **Stake / Bonding** | Locking LPT to an orchestrator address on-chain to establish eligibility, earn rewards, and participate in governance. Includes both self-stake and delegated stake. | — |
| 5 | **Stake Weight** | An orchestrator's total bonded LPT (self-stake plus delegated stake), determining active set rank, reward share proportion, and governance vote weight. | `[verify-live: Explorer]` |
| 6 | **Delegated Stake** | LPT bonded to the orchestrator by external token holders (delegators) rather than the operator themselves. Delegated stake counts toward active set rank. | — |
| 7 | **Reward Cut** | The percentage of per-round LPT inflation rewards that the orchestrator retains before distributing the remainder to delegators. Configured on-chain. | `[verify-live: Explorer]` |
| 8 | **Fee Cut** | The percentage of ETH service fees that the orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: Explorer]` |
| 9 | **Reward Call** | An on-chain transaction (`Reward()`) that an active orchestrator submits once per round to mint and claim LPT inflation rewards. Missing it permanently forfeits that round's rewards. | — |
| 10 | **go-livepeer** | The official Go binary implementing the Livepeer protocol. All orchestrator, transcoder, and AI worker roles are run via this binary with different flag combinations. Authority: go-livepeer repo (latest tagged release). | — |
| 11 | **Video Transcoding** | Converting incoming live or on-demand video segments from one encoding to another, producing multiple adaptive renditions. The original Livepeer workload type. | — |
| 12 | **AI Inference** | Running a trained ML model on new input data to produce generated or predicted outputs. The second Livepeer workload type; routing for AI does not require active set membership. | — |
| 13 | **Dual Mode** | Running a single go-livepeer node handling both video transcoding and AI inference simultaneously. The current term — replaces deprecated "Combined mode" and informal "Hybrid." | — |
| 14 | **O-T Split** | Architectural separation of the orchestrator process (protocol interaction, job routing) from the transcoder/worker process (GPU compute), typically on different machines. | — |
| 15 | **Pool** | A group of worker nodes coordinated under a single orchestrator. The pool operator runs the on-chain orchestrator and holds stake; pool workers contribute GPU compute and receive off-chain payouts. | — |
| 16 | **Pool Node** (formerly Pool Worker) | An individual worker machine within a pool. Current term per `deprecated-terms.md` — "Pool worker" is renamed. | — |
| 17 | **pricePerUnit / pixelsPerUnit** | CLI flags setting the transcoding price in wei per configured pixel unit. The primary pricing parameters a gateway uses to filter orchestrators via its MaxPrice setting. | — |
| 18 | **Probabilistic Micropayment (PM)** | The payment mechanism: gateways send signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortising gas costs across many payments. | — |
| 19 | **Performance Score** | Composite metric (latency × success rate) that gateways use in orchestrator selection, tracked per-gateway. A low score reduces routing priority. | — |
| 20 | **Service URI** | The publicly reachable HTTPS URL an orchestrator registers on-chain so gateways can discover and connect to it. An incorrect or unreachable URI prevents any job routing. | — |
| 21 | **aiModels.json** | JSON configuration file declaring which AI pipelines and models the orchestrator supports, their pricing, and warm/cold status. Primary config file for AI workload setup. | `[verify-live: go-livepeer releases]` |
| 22 | **Capability Advertisement** | The mechanism by which orchestrators inform gateways of the AI pipelines and models they can serve — either on-chain via AIServiceRegistry or off-chain via webhook discovery. | — |
| 23 | **Warm Model** | An AI model already loaded into GPU memory, ready to serve requests immediately. The alternative (cold model) incurs a load delay on first request. | — |
| 24 | **Inflation** | Dynamic issuance of new LPT tokens each protocol round, distributed to orchestrators and delegators. The inflation rate adjusts based on whether total bonded LPT is above or below the target bonding rate. | `[verify-live: Explorer / Delegator yield guide]` |
| 25 | **Slashing** | Penalty mechanism destroying a portion of bonded LPT for protocol violations (e.g. failed transcoding verification). Both the operator's self-stake and delegated stake are at risk. | — |

> **Why 25 terms?** The Orchestrators tab covers two meaningfully distinct workload paths (video transcoding and AI inference), each with its own setup requirements, pricing model, and hardware dependencies. Covering both paths with minimal blind spots requires terms across both compute domains. Twenty-five terms is the minimum for that coverage without folding the AI path into the video path.

---

**Anchoring questions (Product Context + TERMINOLOGY_LOCK only):**

**1. What does this audience call themselves?**

Before encountering Livepeer's terminology, these people call themselves **GPU operators**, **node runners**, or **compute providers**. In AI-specific contexts they may say **inference host** or **ML compute provider**. The network's term "Orchestrator" is a Livepeer-specific label they adopt after learning the protocol — it is not how they arrive.

**2. What are the 3–5 actions that define their core job?**

In their own language:
- Connect GPU hardware to a network and keep it online
- Tune pricing so their node stays competitive and profitable
- Earn and withdraw income (in their case: LPT rewards + ETH fees)
- Monitor hardware health and job throughput to avoid downtime or slashing
- Manage stake — their own and any attracted from outside token holders

**3. Which terms in the TERMINOLOGY_LOCK have a network-specific meaning that differs from the industry default?**

| Term | Industry default | Livepeer-specific divergence |
|---|---|---|
| **Orchestrator** | A software system that coordinates containers/workflows (Kubernetes, Airflow) | In Livepeer: a supply-side network node operated by a GPU hardware provider. Not software orchestration. |
| **Active Set** | No dominant industry default | Livepeer-specific: the top-100-by-stake video transcoding eligibility pool. Unintuitive that AI work routes outside this set. |
| **Reward Call** | No industry default | A specific on-chain transaction that must be submitted manually each round — missing it permanently loses that round's rewards. Non-trivial operational requirement. |
| **Bonding / Stake** | In PoS contexts: staking to a validator for consensus | In Livepeer: staking to an orchestrator for work allocation and reward distribution, not for consensus. The mechanism is similar but the purpose and the party types differ. |
| **Probabilistic Micropayment** | No industry default | The entire payment model is Livepeer-specific. Operators receive lottery-style tickets — not invoices or streaming payments — and redeem winning tickets on-chain. |
| **Session** | A web/network connection concept | In Livepeer: the billing/routing unit between a gateway and orchestrator. `-maxSessions` caps throughput in a non-obvious way. |

---

## Arriving Question

> "I have GPU hardware — can I earn money connecting it to this network, and what do I actually have to do to get set up?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The New GPU Operator** | Search result ("run Livepeer node"), homepage routing CTA, or Discord/community referral | Has spare GPU capacity (gaming rig, mining rig, or small server), has heard Livepeer pays for compute, has little or no on-chain experience. No LPT, no ETH setup, no node experience. | A working node earning jobs, knowing what the ongoing operational obligations are | 3 | 3 | 3 | 9 |
| 2 | **The Staking-First Evaluator** | Delegators tab CTA ("want more than delegation?"), forum thread, community post about orchestrator economics | Already delegating LPT, understands Livepeer at a protocol level, wants to evaluate whether running their own orchestrator is worth it vs continuing to delegate | A confident decision — run solo, join a pool, or remain a delegator | 2 | 2 | 3 | 7 |
| 3 | **The AI Compute Specialist** | Direct search ("Livepeer AI inference node"), Livepeer AI docs landing, developer community referral | Has GPU infrastructure experience, may have run ML inference workloads commercially. New to the Livepeer protocol and on-chain mechanics. Focus is entirely on AI jobs — video transcoding is not their interest. | AI inference node running and accepting jobs with correct model configuration | 2 | 3 | 3 | 8 |
| 4 | **The Pool Operator Candidate** | Forum post about pools, existing pool operator referral, or community Slack/Discord | Runs or plans to run multiple GPUs, wants to participate without holding a large LPT position. Familiar with server operations; new to Livepeer's pool/staking model. | Understanding of what pool operation requires and a clear path to joining or starting one | 1 | 2 | 2 | 5 |

**Primary persona**: **The New GPU Operator** (score: 9) — this persona drives the section structure. The linear journey (concept → quickstart → configuration → operation) is designed for their path. Other personas are served within that structure; only the AI Compute Specialist warrants a parallel content branch that does not add sections but adds depth within AI-specific sections.

**Self-identification check**: This audience self-identifies as "GPU operators" or "node runners." That label does not distinguish between:
- Solo video-only operators
- Solo AI-only operators
- Solo dual-mode operators
- Pool operators (want to coordinate others)
- Pool node contributors (want to join an existing pool without holding LPT)

That is **5 meaningfully different setup paths**, each with different hardware requirements, staking requirements, and operational responsibilities. A reader cannot determine their correct path without first understanding these distinctions.

**Decision**: A **dedicated disambiguation section** is required as the first content section. It has `purpose: orient`, exits with "has identified which operating model applies to their situation," and contains no setup instructions — routing only.

**Entry blockers**:

| Persona | Hard-stop blocker | Section that resolves it |
|---|---|---|
| New GPU Operator | No LPT, no ETH — cannot stake or pay gas without on-chain funds | Operating Model Overview (orient: what's needed per path) + Economics section (quantifies LPT requirement before committing) |
| Staking-First Evaluator | Needs to understand economic difference between delegating and operating before any setup makes sense | Economics & Incentives section (before quickstart) |
| AI Compute Specialist | Needs to understand capability advertisement and aiModels.json before any AI job will arrive | AI Workload Setup section (dedicated AI configuration path) |
| Pool Operator Candidate | Needs to understand pool architecture and trust model before any hardware commitment | Operating Model Overview (pool path explained) |

Section order constraint: **Economics & Incentives** must precede **Quickstart**. The Staking-First Evaluator and the New GPU Operator both have a go/no-go decision that depends on understanding the economics before they commit to any setup steps.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I have idle GPU capacity and want to earn from it | understand whether my hardware qualifies and what it would realistically earn | decide whether setting up a Livepeer node is worth my time before doing any work |
| 2 | I've decided to run a node and am ready to start | get a working node up and processing real jobs as quickly as possible | validate the setup is correct and start earning before optimising |
| 3 | My node is running but I'm earning less than I expected | diagnose whether the problem is pricing, performance score, active set rank, or capability advertisement | fix the right thing rather than tuning the wrong parameter |
| 4 | I want to serve AI inference jobs in addition to (or instead of) video transcoding | configure my AI worker, load the right models, and advertise my capabilities correctly | receive AI jobs and earn from the AI workload without disrupting existing video earnings |
| 5 | I need to set my reward cut, fee cut, and pricing | understand what values are competitive and how changing each one affects my earnings and delegation attractiveness | make a pricing decision I'm confident in rather than guessing |
| 6 | I want to grow my stake and attract delegators | understand what delegators look for and how my cut settings, uptime, and performance score influence their decisions | earn more from delegated stake without compromising my own take |
| 7 | Something has gone wrong — missed a reward call, got slashed, or stopped receiving jobs | identify what happened, understand the consequence, and know the recovery path | return to normal operation without making things worse |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Understanding what kind of operator they are | `discover` | Reading the operating model overview; identifying which of the five paths applies to their hardware, stake, and goals |
| 2 | Assessing whether it's worth doing | `evaluate` | Working through the economics section to understand earnings potential, hardware requirements, and the LPT staking requirement |
| 3 | Getting a node running | `setup` | Following the quickstart for their chosen path (solo video, solo AI, dual, or pool) to reach a working, job-accepting state |
| 4 | Configuring for their environment | `build` | Setting pricing parameters, cut settings, service URI, capability advertisement, and any advanced flags |
| 5 | Running it in production | `operate` | Monitoring performance score, reward calls, ticket redemption, and hardware health day-to-day |
| 6 | Improving earnings and reliability | `optimise` | Tuning pricing, adjusting cuts to attract delegation, scaling hardware, or adding AI workloads |

**On-demand** (return-visit categories):

- Current CLI flag names and default values (go-livepeer flags change between releases)
- Active set size and their current rank position vs the threshold
- Reward cut and fee cut values visible to delegators on the Explorer
- Pricing benchmarks — what other orchestrators are charging per pixel
- AI pipeline types and model IDs available in the current release
- Winning ticket redemption timing and gas cost estimates
- Governance proposals that affect orchestrator parameters (active set size, inflation rate, treasury cut)
- Pool payment distribution conventions and pool-joining prerequisites

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Delegators → Orchestrators | Delegators evaluating which orchestrator to delegate to; some evaluating running their own node instead of delegating |
| Inbound | Home → Orchestrators | Homepage routing CTA for "earn by providing compute" |
| Inbound | Community → Orchestrators | Community posts and forum threads referring people to node setup |
| Outbound | Orchestrators → Delegators | Operators need to understand delegator incentives to set competitive cuts and attract stake |
| Outbound | Orchestrators → About | Deep protocol mechanics — tokenomics, governance, upgrade history — referenced in context but owned by About |
| Outbound | Orchestrators → Gateways | Operators need to understand how gateways select and price orchestrators; decision-enabling content included here, deep reference links to Gateways |
| Outbound | Orchestrators → Resource HUB | CLI reference, contract addresses, changelog — looked up during operation, owned by Resource HUB |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Operating Model Overview | "There are different ways to participate — which one is for me?" | J1 (assess hardware/earning potential) | `orient` | `concept` | Arrived knowing they have GPU capacity; does not yet know the five operating paths | Has identified their operating model (solo video / solo AI / dual / pool operator / pool node) and knows what distinguishes each path | `discover` |
| 2. Economics & Incentives | "What will I actually earn, and what does it cost me to get there?" | J1 (assess economics before committing) | `evaluate` | `guide` | Has chosen an operating model; does not yet know earnings mechanics, LPT requirements, or cost structure | Has decided whether the economics make sense for their situation; can state the LPT stake requirement, the role of reward vs fee income, and the impact of their cut settings | `evaluate` |
| 3. Hardware Requirements | "Does my GPU qualify, and what specs do I need for each workload?" | J1 (qualify hardware) | `reference` | `reference` | Knows their operating model; has not yet verified whether their hardware meets requirements | Has confirmed their GPU meets the spec for their chosen path, or has identified the upgrade required | `evaluate` |
| 4. Quickstart — Solo Node | "How do I get a node running and processing real jobs?" | J2 (get working node quickly) | `start` | `instruction` | Has qualified hardware and made the go decision; no go-livepeer installed, no on-chain setup done | Has a live node that has processed at least one job and confirmed the reward call is automated | `setup` |
| 5. Quickstart — Pool Path | "How do I join an existing pool, or set up a pool of my own?" | J2 (get working node quickly — pool variant) | `start` | `instruction` | Has identified pool path in Section 1; pool operator has LPT stake; pool node contributor has GPU but no LPT | Pool node: connected to a pool operator's orchestrator and processing jobs. Pool operator: has workers connected and reward call running | `setup` |
| 6. Configuration Reference | "What are all the flags I need to set, and what do they do?" | J2, J5 (complete setup; set pricing) | `configure` | `reference` | Has a running node from Section 4 or 5; needs to move beyond defaults | Has configured service URI, pricing parameters, cut settings, and any advanced flags appropriate to their workload type | `build` |
| 7. AI Workload Setup | "How do I add AI inference to my node and start receiving AI jobs?" | J4 (configure AI worker and advertise capabilities) | `configure` | `instruction` | Has a running video node or is AI-only; has not yet configured aiModels.json or capability advertisement | Has AI runner configured, models declared in aiModels.json, capability advertisement confirmed active, and has processed at least one test inference request | `build` |
| 8. Pricing Strategy | "How do I set prices that are competitive and still profitable?" | J5 (set competitive pricing) | `guide` | `guide` | Has a running node with default or placeholder pricing; wants to understand how pricing affects job allocation | Has set pricePerUnit (and optionally pricePerCapability) to values informed by the competitive landscape and their cost structure; has reviewed MaxPrice mechanics from the gateway side | `build` |
| 9. Attracting Delegation | "How do I attract delegators to increase my active set rank and rewards?" | J6 (grow stake and attract delegators) | `guide` | `guide` | Node is running and earning; operator wants to grow delegated stake | Has reviewed and set reward cut and fee cut to values that balance operator income against delegator attractiveness; knows what delegators look at when choosing an orchestrator | `operate` |
| 10. Monitoring & Operations | "How do I know my node is healthy and earning correctly day-to-day?" | J3, J7 (diagnose earning gaps; return to normal after problems) | `operate` | `guide` | Node is live; operator has no systematic monitoring in place | Has monitoring in place for performance score, reward call success, ticket redemption, and hardware health; knows which metrics to watch and what thresholds indicate a problem | `operate` |
| 11. Troubleshooting | "Something is wrong — jobs stopped, reward call failed, or I was slashed. What do I do?" | J7 (diagnose and recover) | `troubleshoot` | `guide` | Operator has encountered a specific problem — no incoming jobs, reward failure, slash event, or hardware issue | Has identified the cause of their problem from a structured diagnostic list and has taken (or knows) the correct recovery action | `troubleshoot` |
| 12. Optimising Earnings | "My node is working — how do I earn more?" | J3, J6 (diagnose earning gaps; grow stake) | `optimise` | `guide` | Node is stable and earning; operator wants to improve performance score, pricing, or stake position | Has identified the one or two levers most likely to improve their earnings given their current state, and has acted on at least one | `optimise` |

**Section count**: 12 — within the 8–12 target. Note: the two quickstart sections (4 and 5) count as one structural position (the solo path is primary; the pool path is a branching variant). If the pool path were treated as a separate first-class section, the count would be at the upper bound of 13, which is still acceptable given the pool path represents a genuinely distinct setup experience.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| New GPU Operator | Section 1 (Operating Model Overview) | Section 10 (Monitoring & Operations) | None — Sections 1→2→3→4→6→8→10 is an unblocked path | Section 2 (Economics) must precede Section 4 (Quickstart) — if a reader skips Economics, they may set up a node without understanding the LPT staking requirement. Resolved by section order and cross-references in Section 4. | None |
| Staking-First Evaluator | Section 2 (Economics & Incentives) | Section 9 (Attracting Delegation) or Section 2 exit (decision to remain delegator) | None — Section 2 provides the evaluation outcome; they proceed to Sections 4→6→9 if they decide to run, or exit the tab if they decide not to | None — Section 2 explicitly addresses the delegating-vs-operating comparison | None |
| AI Compute Specialist | Section 1 (Operating Model Overview — AI-only path) | Section 7 (AI Workload Setup) | Section 7 depends on Section 4 (Quickstart — Solo Node) for base node setup. An AI-only operator must complete base setup before AI configuration. This dependency must be explicit in Section 7's entry state. Resolved by existing section order. | Section 7 must include sufficient protocol context for operators who have no video transcoding background — specifically that active set membership is not required for AI routing. This is a knowledge gap within Section 7, not a missing section. | None |
| Pool Operator Candidate | Section 1 (Operating Model Overview) | Section 5 (Quickstart — Pool Path) | None — Sections 1→2→3→5 is an unblocked path for pool candidates | Section 5 must explain the trust and payment model between pool operators and pool nodes — operators joining an existing pool need to know how off-chain earnings distribution works before connecting their hardware | None |

**Gate result**: All personas have unblocked paths. Two knowledge gaps identified — both resolved within existing sections (Section 2 and Section 7) rather than requiring new sections. No missing sections.

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

- **[Phase 0 / Step 0.2 — Term count]**: The brief permits exceeding 20 terms if two distinct participation paths make it necessary. The Orchestrators tab has two genuinely distinct workload types (video transcoding and AI inference) with different hardware, configuration, pricing, and capability advertisement requirements. 25 terms are used. Terms 21–25 are all AI-path-specific (aiModels.json, Capability Advertisement, Warm Model, Inflation [for AI operator economics context], Slashing). None of the video-path terms could stand in for these. The count is justified.

- **[Phase 0 / Step 0.2 — Deprecated term]**: The glossary uses "Pool Worker" as both the current term and lists "Pool node" as "Also known as." `deprecated-terms.md` states "Pool worker" is renamed to "Pool node" — that rename is applied in the TERMINOLOGY_LOCK (term 16). The glossary is treated as incorrect on this point.

- **[Phase 0 / Step 0.2 — Deprecated term: Transcoder]**: `deprecated-terms.md` flags "Transcoder" as partially deprecated — do not use as a synonym for Orchestrator. The TERMINOLOGY_LOCK does not include "Transcoder" as a standalone term; "O-T Split" is used where the architectural separation is relevant, which accurately describes the current deployment pattern per the Streamflow spec.

- **[Phase 1 — Persona count]**: The brief requires minimum 3 personas. Four are defined here. The Pool Operator Candidate (score: 5) is retained despite the lowest score because their path is architecturally distinct — pool operators do not follow the solo setup path and a reader on this path would be structurally blocked if only the solo path is covered. The brief's rule that "distinct paths with different hardware requirements or setup paths" should be treated as candidate personas is the justification.

- **[Phase 1 — Self-identification check]**: Five distinct operating paths were identified, triggering the dedicated disambiguation section rule. The brief's threshold is "3+ meaningfully different setup paths, or if the reader cannot identify their path without reading content." Five paths meet this threshold. Section 1 (Operating Model Overview) is the disambiguation section.

- **[Phase 2C / Section 4 vs Section 5]**: Splitting Quickstart into two sections (solo vs pool) is at the upper edge of the recommended count. The justification: pool setup requires a materially different process (connecting to an existing orchestrator, no on-chain staking, trust negotiation with the pool operator) that cannot be presented as a variant within a single instruction page without confusing both audiences. Section 5 is retained as a distinct instruction page.

- **[Phase 2C — Section load check]**: Section 2 (Economics & Incentives) carries both `evaluate` purpose work and a routing function — it is the exit point for the Staking-First Evaluator who may decide not to proceed at all. It also introduces the delegated stake concept that feeds into Section 9 (Attracting Delegation). This section is carrying evaluation and light disambiguation work simultaneously — **may need to split into two pages during detailed design** (e.g. "Earnings Model" as a pure economics reference + "Should I Run a Node?" as a decision guide). Flagged per brief instructions; not split here.

- **[Phase 2B — On-demand category: governance]**: Governance is listed as an on-demand return category for orchestrators (proposals affecting active set size, inflation, treasury cut). The site ownership map places governance depth in About. The self-containment principle requires decision-enabling governance content in this tab (specifically: which parameters can change and how to track them). This is included as context within the Economics and Monitoring sections, with cross-tab routing to About for depth. No dedicated governance section is added to this tab — the audience needs awareness, not participation mechanics, which are owned by About and Delegators.
