# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: orchestrator
**TERMINOLOGY_LOCK**: [Orchestrator, Gateway, LPT, stake weight, Active Set [verify-live: Livepeer Explorer], AI inference, transcoding, Dual mode, pool, pool node, O-T split, service URI, probabilistic micropayment, Reward Call [verify-live: Livepeer Explorer], performance score, pricePerUnit [verify-live: go-livepeer CLI reference + latest tagged release], pixelsPerUnit [verify-live: go-livepeer CLI reference + latest tagged release], aiModels.json [verify-live: Livepeer AI docs + latest tagged release], warm model [verify-live: Livepeer AI docs + latest tagged release], MaxPrice [verify-live: go-livepeer CLI reference + latest tagged release]]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`
**TERMINOLOGY_LOCK**: `[Orchestrator, Gateway, LPT, stake weight, Active Set [verify-live: Livepeer Explorer], AI inference, transcoding, Dual mode, pool, pool node, O-T split, service URI, probabilistic micropayment, Reward Call [verify-live: Livepeer Explorer], performance score, pricePerUnit [verify-live: go-livepeer CLI reference + latest tagged release], pixelsPerUnit [verify-live: go-livepeer CLI reference + latest tagged release], aiModels.json [verify-live: Livepeer AI docs + latest tagged release], warm model [verify-live: Livepeer AI docs + latest tagged release], MaxPrice [verify-live: go-livepeer CLI reference + latest tagged release]]`

1. This audience calls themselves: GPU operators, node operators, infra operators.
2. Core job actions: put machines online, accept paid work, keep jobs flowing reliably, price compute, scale or split workload across machines.
3. Terms with Livepeer-specific meanings that differ from industry default:
   - **Orchestrator** — not a generic workflow scheduler; it is the supply-side compute node receiving jobs from gateways.
   - **Gateway** — not just an API proxy; it is the demand-side routing and payment counterparty.
   - **Active Set** — not a generic “online set”; it is the stake-ranked set eligible for video work and must be treated as live-state.
   - **Reward Call** — not a passive reward accrual; it is an active on-chain action that must be submitted.
   - **Dual mode** — specific replacement for deprecated “combined mode” / “hybrid”.
   - **pool node** — current replacement for deprecated “pool worker”.
   - **service URI** — not a docs URL; it is the public endpoint gateways use for discovery and routing.

---

## Arriving Question

> "Given my hardware, stake, and workload goal, which operating path should I choose and what do I need to do first to get paid work flowing safely?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Independent node launcher | Search result, homepage CTA, referral from community | A GPU machine and intent to earn, but no clear view of stake, workload path, or deployment model | A decided path and a first working node plan | 3 | 3 | 3 | 9 |
| 2 | Existing operator expanding into a second workload | Another tab CTA, forum thread, release note, peer referral | A running video or AI machine and a desire to add the other workload without breaking reliability | A safe Dual mode or split deployment decision | 2 | 3 | 3 | 8 |
| 3 | Low-stake machine owner seeking pooled participation | Search result, Discord/forum link, referral from another operator | GPU capacity but not enough LPT to compete independently | A concrete path to join a pool node arrangement | 2 | 2 | 3 | 7 |
| 4 | Capacity builder moving from one machine to many | Benchmarking guide, community referral, operations pain | A working node that is hitting limits on throughput, uptime, or isolation | A scale plan using O-T split or a pool structure | 1 | 3 | 2 | 6 |

**Primary persona**: Independent node launcher — this persona drives section structure.

**Self-identification**: “Operator” is ambiguous — it can mean an independent node launcher, a pool node participant, or a scale-focused pool builder. yes — routing page required as first section.

**Entry blockers**:  
- No decision yet on solo vs pool node vs scale path  
- No clarity on whether the goal is transcoding, AI inference, or Dual mode  
- Insufficient LPT for independent video competition  
- No public endpoint or signing/wallet setup for a reachable node  
These blockers are resolved in this order: operating-path decision → prerequisites → deployment model → first setup → work eligibility and payment flow.

_Assumption used for scoring: without analytics, the Product Context suggests the highest-volume need is first-time independent operation, while pooled participation and multi-machine expansion are narrower but still important paths._

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I have GPU hardware and I’m evaluating Livepeer | choose the right operating path | avoid building the wrong setup first |
| 2 | When I want to earn from video or AI work | identify the prerequisites for that workload | know whether I can compete independently or need a different path |
| 3 | When I’m ready to start | bring a node online with the right deployment model | reach a minimal working state quickly |
| 4 | When my node is online but idle | make it discoverable, stake-ready, and payment-ready | receive eligible work instead of just running software |
| 5 | When work starts flowing | operate the node safely day to day | avoid missed rewards, failed jobs, and unreachable endpoints |
| 6 | When earnings or job volume are weak | tune pricing, capacity, and workload configuration | improve selection probability and margin |
| 7 | When one machine stops being enough | expand into O-T split or a pool structure | increase throughput without collapsing reliability |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Choosing an operating path | discover | Deciding whether they should run independently, join a pool node path, or design for scale |
| 2 | Checking economic and technical fit | evaluate | Matching workload goals to hardware, stake, endpoint, and operational requirements |
| 3 | Selecting a deployment model | evaluate | Choosing solo, Dual mode, O-T split, or pool structure |
| 4 | Bringing the first machine online | setup | Installing and configuring the first working node |
| 5 | Becoming reachable and eligible for work | setup | Registering a service URI, wiring payment flow, and handling the path to work eligibility |
| 6 | Running reliably every day | operate | Monitoring, redeeming, keeping performance stable, and avoiding missed actions |
| 7 | Improving yield and throughput | optimise | Tuning price, warm-model strategy, session limits, and topology |
| 8 | Expanding capacity safely | optimise | Splitting roles across machines or coordinating a larger compute group |

**On-demand**:
- Current CLI flags and defaults for `pricePerUnit`, `pixelsPerUnit`, `MaxPrice`, `orchSecret`, and AI flags
- Live Active Set status and stake position
- Reward Call timing and status
- service URI requirements and reachability checks
- probabilistic micropayment flow and redemption mechanics
- performance score inputs and failure-rate impact
- AI workload configuration in `aiModels.json`
- warm model vs cold-start trade-offs
- O-T split authentication and network layout
- pool node connection requirements and operator responsibilities

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Gateways → Orchestrators | Demand-side operators evaluating compute supply behaviour will route here for supply-side setup and economics |
| From | Developers → Orchestrators | Builders graduating into operating infrastructure need the supply-side path |
| From | Home / About → Orchestrators | Reader has moved from protocol understanding to running compute |
| To | Orchestrators → Delegators | Readers needing deeper staking, delegation, and governance mechanics continue there |
| To | Orchestrators → Gateways | Readers negotiating pricing, demand relationships, or routing logic may need the counterparty view |
| To | Orchestrators → Developers | Readers building custom compute paths or adjacent tooling may continue there |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| Path selection | “Should I run independently, join as a pool node, or design for a larger setup?” | Job 1 | choose | guide | Has hardware and interest, but no path decision | Has chosen an operating path that matches stake, workload, and control needs | discover |
| Fit and prerequisites | “What do I need before I start for transcoding, AI inference, or Dual mode?” | Job 2 | evaluate | guide | Has chosen a broad path but has not checked hard requirements | Has confirmed hardware, LPT, endpoint, and workload fit, or knows the blocker | evaluate |
| Deployment model decision | “Which machine layout should I use: one box, Dual mode, O-T split, or pool structure?” | Job 3 | choose | guide | Knows they want to proceed, but not how to structure the system | Has selected a deployment model with clear trade-offs | evaluate |
| First node setup | “How do I get the first machine running?” | Job 3 | start | instruction | Has selected a deployment model and prerequisites are satisfied | Has a running node process configured for the chosen path | setup |
| Work eligibility and payment flow | “How do I become reachable, stake-ready, and able to accept paid work?” | Job 4 | configure | guide | Has a running node but not a work-ready one | Has a registered service URI, the right staking/payment path, and a clear route to receiving work | setup |
| Day-to-day operations | “What must I do every day so this does not silently fail?” | Job 5 | operate | guide | Has a work-capable node | Has monitoring, redemption, and recurring operational actions in place | operate |
| Pricing and performance tuning | “How do I improve selection probability, margin, and response quality?” | Job 6 | optimise | guide | Has a running node and some live or expected workload | Has tuned price, session/capacity settings, and workload strategy against outcome goals | optimise |
| Scaling and multi-machine expansion | “How do I grow beyond one machine without breaking reliability?” | Job 7 | build | guide | Has a working single-node or small setup and is hitting limits | Has a clear expansion design using O-T split or pool structure | optimise |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Independent node launcher | Path selection | Day-to-day operations | None | Needs Livepeer-specific explanation of Active Set, Reward Call, and service URI inside early sections | None |
| Existing operator expanding into a second workload | Fit and prerequisites | Pricing and performance tuning | None | Needs explicit comparison of single-machine Dual mode vs O-T split before setup | None |
| Low-stake machine owner seeking pooled participation | Path selection | First node setup | None | Needs early explanation that pool node participation is a valid activation path when independent stake is insufficient | None |
| Capacity builder moving from one machine to many | Deployment model decision | Scaling and multi-machine expansion | None | Needs operational trade-off framing between isolation, throughput, and trust boundaries | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged if needed?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — no content duplicated from other tabs?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The glossary still contains “Pool Worker” while the deprecated-terms file says the current term is “Pool node”; I treated “Pool node” as canonical and excluded the deprecated form.
- **[Phase 0 / Step 0.2]**: The glossary contains specific live-sensitive values such as Active Set size and operational timing language; I retained the concept terms but marked live-sensitive items with verify-live anchors rather than treating the values as fixed.
- **[Phase 1 / Persona scoring]**: The brief requires volume/depth/impact scoring but provides no analytics source; I used Product Context and tab ownership as the scoring basis.
- **[Phase 2C / Cross-tab gate]**: The brief says “no content duplicated from other tabs” in the checkpoint, but the site ownership map also requires self-containment and allows intentional duplication; I interpreted this as “no unnecessary duplication,” while keeping decision-enabling content in-tab.
