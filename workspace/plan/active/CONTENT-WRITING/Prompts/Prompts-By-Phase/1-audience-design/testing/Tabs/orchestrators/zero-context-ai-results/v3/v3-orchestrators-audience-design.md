# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: orchestrator
**TERMINOLOGY_LOCK**: [Orchestrator, Gateway, LPT, Active Set [verify-live: Livepeer Explorer], stake weight, delegation, reward call, reward cut, fee cut, probabilistic micropayment, winning ticket, TicketBroker, Service URI, pricePerUnit [verify-live: go-livepeer CLI reference], pixelsPerUnit [verify-live: go-livepeer CLI reference], aiModels.json [verify-live: Livepeer AI docs + go-livepeer release], AI inference, transcoding, Dual mode, O-T split, pool node, orchSecret [verify-live: go-livepeer CLI reference]]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`  
**TERMINOLOGY_LOCK**: `[Orchestrator, Gateway, LPT, Active Set [verify-live: Livepeer Explorer], stake weight, delegation, reward call, reward cut, fee cut, probabilistic micropayment, winning ticket, TicketBroker, Service URI, pricePerUnit [verify-live: go-livepeer CLI reference], pixelsPerUnit [verify-live: go-livepeer CLI reference], aiModels.json [verify-live: Livepeer AI docs + go-livepeer release], AI inference, transcoding, Dual mode, O-T split, pool node, orchSecret [verify-live: go-livepeer CLI reference]]`

1. This audience calls themselves: GPU operators, node operators, infra operators, or compute providers.
2. Core job actions: connect hardware, set pricing, keep jobs flowing, get paid, maintain uptime.
3. Terms with network-specific meanings that differ from industry default:
   - **Orchestrator** — not a generic workflow coordinator; it is the supply-side network role that receives work from gateways and earns fees.
   - **Gateway** — not a general API gateway; it is the demand-side routing role that selects orchestrators and pays for work.
   - **Active Set** — not a loose “top operators” concept; it is a stake-ranked eligibility set for video work and must be treated as live-governed.
   - **reward call** — not a generic rewards claim page; it is a per-round on-chain action with consequences if missed.
   - **probabilistic micropayment** / **winning ticket** — not ordinary invoice settlement; payment arrives through redeemable ticket outcomes.
   - **Service URI** — not a marketing URL; it is the publicly reachable endpoint gateways use to discover and send work.
   - **pricePerUnit** / **pixelsPerUnit** — not generic pricing labels; they are protocol/software pricing parameters tied to routing.
   - **Dual mode** — specific replacement for deprecated “combined mode/hybrid”; means one setup handling both video and AI workloads.
   - **pool node** — current term replacing deprecated “pool worker.”

---

## Arriving Question

> "Given my hardware, capital, and workload intent, what exact operating path should I choose to get this machine earning on Livepeer without setting it up wrong?"

---

## Personas

_Assumption used for scoring: volume is inferred from the product context rather than analytics; stake-backed solo entry and exploratory operators are likely more common than scaled pool operators, while AI/video split creates materially different setup and economics depth._

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---:|---:|---:|---:|
| 1 | Stake-backed solo operator | Homepage CTA, search result, gateway-side referral | A GPU machine, some LPT or willingness to acquire it, and intent to run independently | A clear solo setup path, required prerequisites, and first-production checklist | 3 | 3 | 3 | 9 |
| 2 | Exploratory compute operator | Search result, Discord/forum referral, external recommendation | Hardware and ops confidence, but unclear whether Livepeer is viable for them at all | A go/no-go decision and the correct path: solo, pool node, or do not proceed | 3 | 3 | 3 | 9 |
| 3 | Pool expansion operator | Forum/Discord link, community referral, direct partner intro | GPUs but insufficient stake or desire to join/extend an existing operator footprint | The pool-node path, connectivity model, payout expectations, and operator responsibilities split | 2 | 2 | 3 | 7 |
| 4 | Dual-workload optimiser | Return visit, benchmark/pricing lookup, gateway conversation | A running node and desire to add AI, add video, or consolidate both | A decision on single-workload vs Dual mode and the configuration changes required | 2 | 3 | 3 | 8 |
| 5 | Scaled pool operator | Search result, governance/forum thread, existing operator network | Existing infra competence and intent to coordinate multiple machines under one operator setup | An O-T split / pool architecture decision and operating model for scaled capacity | 1 | 3 | 2 | 6 |

**Primary persona**: Stake-backed solo operator — this persona drives section structure.  
**Self-identification**: “GPU operator” or “node operator” can describe at least three different paths with different blockers and setup models: independent stake-backed operation, joining as a pool node, or adding a second workload to an existing node. A dedicated disambiguation section is required as the first content section.  
**Entry blockers**:
- Path ambiguity must be resolved first: solo vs pool node vs existing-node expansion.
- Independent video participation requires stake-related eligibility before setup decisions can be trusted.
- Public reachability and endpoint exposure must be resolved before activation.
- Payment/pricing model must be set before production operation, otherwise the node can be reachable but economically misconfigured.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I have GPU hardware and I’m considering Livepeer for the first time | determine whether I should run solo, join a pool, or stop | avoid wasting time on the wrong operating model |
| 2 | When I want to operate independently | confirm the minimum stake, endpoint, and role requirements | know whether I can become eligible for real work |
| 3 | When I’m choosing what work to serve | decide between transcoding, AI inference, or Dual mode | align my setup with my hardware and expected earnings path |
| 4 | When I’m ready to bring a machine online | execute the minimum configuration and activation steps | reach a working state that can accept jobs |
| 5 | When I’m about to expose pricing | set pricing and payment parameters correctly | avoid being filtered out or underpaid |
| 6 | When my node is live | verify that discovery, job flow, and payment collection actually work | trust that the node is operating rather than merely running |
| 7 | When I’m already running and performance is uneven | tune architecture, throughput, and reliability choices | increase routed work and reduce failure-driven exclusion |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify the operating path | discover | Determining whether they are running solo, joining as a pool node, or expanding an existing setup |
| 2 | Confirm economic and technical viability | evaluate | Checking stake, hardware, reachability, and workload fit before setup |
| 3 | Choose the workload model | evaluate | Deciding between transcoding, AI inference, or Dual mode |
| 4 | Build the node shape | setup | Choosing single-box, O-T split, or pool architecture and preparing components |
| 5 | Configure and activate | setup | Applying the necessary settings, exposing the endpoint, and bringing the node online |
| 6 | Verify job flow and settlement | build | Confirming discovery, job acceptance, pricing, and payment behaviour |
| 7 | Operate reliably per round | operate | Running day-to-day, maintaining uptime, handling reward/payment actions |
| 8 | Improve routing competitiveness | optimise | Tuning price, throughput, architecture, and workload mix |

**On-demand**:
- Current stake and eligibility thresholds
- Current CLI parameter names and defaults
- Pricing parameter lookup and examples
- Reward and fee split mechanics
- Ticket redemption and payment flow details
- Service endpoint requirements
- Workload-specific hardware fit guidance
- Verification checks after upgrades or config changes
- O-T split and pool-node connection parameters
- Performance and fail-rate tuning levers

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Gateways → Orchestrators | Gateway operators evaluating supply-side economics, pricing counterparties, or paired operation may graduate here |
| From | Home → Orchestrators | First-time visitors choose the supply-side operator path here |
| From | Community → Orchestrators | Community participants and forum readers arrive here when moving from discussion to operation |
| To | Orchestrators → Delegators | Operators need staking, delegation, and governance depth tied to their operator economics |
| To | Orchestrators → Gateways | Operators need demand-side context for pricing, routing logic, and counterpart expectations |
| To | Orchestrators → About | Operators sometimes need deeper conceptual protocol/governance substrate without interrupting the operational path |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Path finder | Which operating path actually applies to me: solo operator, pool node, or expansion of an existing setup? | 1 | orient | guide | Has hardware and interest, but does not know which Livepeer path matches their situation | Has identified which setup path applies to their situation | discover |
| 2. Viability and prerequisites | Do I have the minimum stake, hardware, network exposure, and operational readiness for the path I chose? | 1, 2 | evaluate | guide | Knows their path, but not whether they meet the hard requirements | Has decided to proceed, defer, or switch paths based on concrete prerequisites | evaluate |
| 3. Workload choice | Should I serve transcoding, AI inference, or Dual mode on this machine? | 3 | choose | guide | Has chosen to proceed but has not selected a workload model | Has selected transcoding, AI inference, or Dual mode for this node | evaluate |
| 4. Architecture choice | What node shape should I run: single-box, O-T split, or pool-coordinated architecture? | 4 | choose | guide | Knows the workload model but not the deployment shape | Has chosen the architecture pattern they will implement | setup |
| 5. Independent operator setup | How do I bring up an independently operated node end to end? | 4 | start | instruction | Has chosen solo operation and an architecture pattern | Has a configured node prepared for activation | setup |
| 6. Pool node setup | How do I connect this machine as a pool node under another operator? | 4 | start | instruction | Has chosen the pool-node path and knows the coordinating operator relationship | Has a connected pool node prepared for delegated work | setup |
| 7. Pricing and payment configuration | How do I set pricing and payment parameters so gateways can route work and I can collect value safely? | 5 | configure | instruction | Has a runnable node but no production-safe economic configuration | Has configured pricing and payment settings appropriate to the chosen workload and path | setup |
| 8. Discovery and activation | How do I expose the node correctly and make it discoverable for real traffic? | 4, 6 | configure | instruction | Has configured the node and economics, but is not yet reachable or activated | Has activated the node and exposed a reachable endpoint for routing | setup |
| 9. Post-setup verification | How do I know this node is actually discoverable, receiving work, and settling correctly? | 6 | verify | guide | Has activated the node but does not yet trust the setup | Has completed a verification checklist showing discovery, job flow, and settlement are working | build |
| 10. Day-two operations | What do I need to do routinely to keep the node healthy, paid, and eligible? | 6 | operate | guide | Has a working node in service | Can run the node day to day with a repeatable operational routine | operate |
| 11. Performance and competitiveness | How do I improve routing outcomes, reliability, and utilisation once the node is live? | 7 | optimise | guide | Has a live node and baseline operation | Has chosen the next optimisation actions for throughput, reliability, or pricing competitiveness | optimise |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Stake-backed solo operator | 1. Path finder | 10. Day-two operations | None | Section 2 must explicitly separate “can run software” from “can qualify independently for work” | None |
| Exploratory compute operator | 1. Path finder | 3. Workload choice | None | Section 2 must include a clear stop/defer outcome, not force setup continuation | None |
| Pool expansion operator | 1. Path finder | 9. Post-setup verification | None | Section 6 must explain responsibility split: coordinating operator vs pool node owner | None |
| Dual-workload optimiser | 3. Workload choice | 11. Performance and competitiveness | None | Section 3 must treat “add second workload to an existing node” as a first-class decision, not a footnote | None |
| Scaled pool operator | 4. Architecture choice | 11. Performance and competitiveness | None | Section 4 must cover why and when O-T split is preferable to single-box operation | None |

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

- **[Phase 0 / Step 0.2]**: The brief instructs authority-first terminology locking but does not provide the primary sources themselves, only the authority registry. I proceeded by using the Product Context as the authoritative semantic base and the uploaded veracity registry as the rule for what must be treated as live-verified versus stable.
- **[Phase 0 / Step 0.2]**: The orchestrators glossary uses **Pool Worker** while the deprecated-terms file says the current term is **pool node**. I normalised to **pool node** in the lock and output.
- **[Phase 0 / Step 0.2]**: The glossary contains more than enough terms to overfit the lock. I limited the lock to terms central to operator decisions, activation, economics, and architecture rather than general AI/video vocabulary.
- **[Phase 1]**: The brief requires minimum three personas but the product context strongly implies path-based personas matter more than identity-based personas. I therefore defined personas by arriving state and operating path, not by demographic or operator seniority.
- **[Phase 1 / Self-identification check]**: “GPU operator” maps to multiple materially different paths, so I added a dedicated first section for disambiguation rather than burying routing inside setup.
- **[Phase 2C]**: Sections 5 and 6 are split by operating model because folding independent setup and pool-node setup into one section would block both personas with conflicting prerequisites and responsibility models.
- **[Phase 2C]**: Section 2 carries both evaluation and blocker-resolution work. This is acceptable at IA stage, but during detailed design it may need a separate prerequisite matrix page if it becomes overloaded.
