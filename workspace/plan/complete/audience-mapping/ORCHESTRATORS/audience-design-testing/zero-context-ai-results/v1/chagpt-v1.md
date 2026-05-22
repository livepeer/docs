Executed from the uploaded brief, per-tab glossary, and deprecated/conflicted terms file.

# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: orchestrator
**TERMINOLOGY_LOCK**: [Orchestrator, Gateway, LPT, Active Set, Service URI, Reward Call, Dual Mode, aiModels.json, Pool node]
**Generated**: 2026-03-22
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`
**TERMINOLOGY_LOCK**: `[Orchestrator, Gateway, LPT, Active Set, Service URI, Reward Call, Dual Mode, aiModels.json, Pool node]`

1. This audience calls themselves: GPU operators
2. Core job actions: provision GPU capacity; connect machines to paid work; keep jobs flowing reliably; price compute; maintain earnings and uptime
3. Terms with Livepeer-specific meanings that differ from industry default:
   - **Orchestrator** — not a generic workflow coordinator; here it is the supply-side compute role that receives jobs, performs work, advertises capability, and earns rewards.
   - **Gateway** — not just an API front door; here it is the demand-side role that routes jobs and selects compute providers.
   - **LPT** — not a generic token mention; here it directly affects work eligibility, delegation, and governance.
   - **Active Set** — not a vague ranking; it is the stake-ranked group eligible for video work, while AI routing works differently.
   - **Service URI** — not any endpoint; it is the registered public address gateways must reach to send jobs.
   - **Reward Call** — not a generic reward concept; it is a per-round on-chain action with forfeiture risk if missed.
   - **Dual Mode** — current preferred term for running video and AI together; deprecated alternatives should not be used.
   - **Pool node** — current replacement for deprecated “pool worker”.

---

## Arriving Question

> "Given my hardware, stake position, and operating goal, what is the right way to join Livepeer supply and get to my first paid work without taking the wrong path?"

---

## Personas

| Rank | Persona                                                  | Entry vector                                         | Arriving with                                                                                                   | Wants to leave with                                                    |
| ---- | -------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1    | Solo machine owner                                       | Search result / homepage route                       | One GPU machine and interest in earning from spare capacity, but no decision on whether solo entry is realistic | A clear go/no-go and the correct starting path                         |
| 2    | Staked independent operator                              | Another tab CTA / external referral / community link | Hardware plus intent to compete directly, but uncertainty about stake, reachability, and launch sequence        | A complete first-run plan to go live independently                     |
| 3    | Existing compute operator expanding into second workload | Search result / forum / Discord                      | Already comfortable operating GPU workloads elsewhere and deciding whether to add the second compute type       | A chosen workload shape and configuration path                         |
| 4    | Capacity contributor joining someone else’s operation    | Forum / Discord / referral                           | Hardware but not enough LPT or no desire to run the full stack                                                  | A clear path to join a pool node arrangement instead of operating solo |
| 5    | Live operator fixing weak earnings or low selection      | Bookmark / return visit                              | A running setup that is not getting enough work or is underperforming                                           | A concrete tuning or diagnosis path                                    |

**Self-identification**: “operator” is ambiguous. It can describe a solo machine owner, a staked independent operator, a pool lead, or a pool node contributor. **Disambiguation needed: yes.** The first content section must route by operating shape before setup begins.
**Entry blockers**: stake requirement for independent video competition; public reachability for the Service URI; wallet / on-chain funding; choosing solo vs pool node path before setup; choosing one workload vs Dual Mode before configuration. These blockers must be resolved before launch steps.

---

## Jobs to be Done

| #   | When...                                       | I want to...                                                                              | So I can...                                                                |
| --- | --------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| --- | ---                                           | ---                                                                                       | ---                                                                        |
| 1   | When I arrive with hardware but no route yet  | I want to determine whether I should operate independently or join under someone else     | So I can avoid building the wrong setup                                    |
| 2   | When I am deciding between video, AI, or both | I want to choose the right workload shape for my machine and goals                        | So I can configure only what my setup can actually support                 |
| 3   | When I am preparing to launch independently   | I want to resolve stake, wallet, and public endpoint prerequisites                        | So I can become reachable and eligible for work                            |
| 4   | When I am doing my first launch               | I want to bring a machine online in the right order                                       | So I can complete a first working setup without missing a hard requirement |
| 5   | When I am live but not receiving enough work  | I want to diagnose whether the issue is stake, pricing, capability match, or reachability | So I can take the right corrective action                                  |
| 6   | When I am operating over time                 | I want to keep rewards, payments, and routine actions running reliably                    | So I can avoid silent earnings loss                                        |
| 7   | When I want more throughput or lower risk     | I want to decide whether to stay solo, move to Dual Mode, or scale through a pool         | So I can expand capacity without redesigning blindly                       |

---

## Ideal Journey

**Linear**:

| Position | Stage name                            | lifecycleStage | What they're doing                                                                                  |
| -------- | ------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------- |
| 1        | Identify my operating shape           | discover       | Determining whether they are an independent operator, a pool node contributor, or an expansion case |
| 2        | Judge whether solo entry is realistic | evaluate       | Checking hardware fit, stake reality, and whether direct competition makes sense                    |
| 3        | Choose workload scope                 | evaluate       | Deciding between video, AI, or Dual Mode                                                            |
| 4        | Clear hard prerequisites              | setup          | Getting wallet, stake, funding, and public reachability in place                                    |
| 5        | Bring the machine online              | setup          | Completing first-run installation and initial launch                                                |
| 6        | Make the machine selectable           | build          | Registering reachability, exposing capability, and setting initial prices                           |
| 7        | Confirm first live operation          | operate        | Verifying the machine can accept work and routine actions are functioning                           |
| 8        | Improve selection and returns         | optimise       | Tuning price, capability mix, and operating shape for better outcomes                               |

**On-demand**:

- Stake and eligibility lookups
- Service URI and reachability checks
- Reward Call timing and routine
- Pricing unit and override lookups
- Dual Mode vs single-workload decision factors
- aiModels.json and warm/cold model behaviour
- Payment and winning-ticket parameters
- Performance and failure signal interpretation

**Cross-tab**:

| Direction | From / To                  | Why                                                                              |
| --------- | -------------------------- | -------------------------------------------------------------------------------- |
| From      | Gateways → Orchestrators   | Demand-side readers often need the supply-side path they depend on               |
| From      | Home → Orchestrators       | New visitors need role routing into the supply path                              |
| From      | About → Orchestrators      | Concept readers graduate into concrete operator action                           |
| To        | Orchestrators → Delegators | Operators need the downstream staking/delegation depth                           |
| To        | Orchestrators → Gateways   | Operators need demand-side routing logic and pricing context from the buyer side |
| To        | Orchestrators → About      | Operators sometimes need deeper protocol/economic substrate                      |

---

## Ideal Section Structure

| Section                                                                                                                | Reader question                                                                 | Job   | purpose      | pageType    | Entry state                                                          | Exit state                                                                 | lifecycleStage |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----- | ------------ | ----------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------- |
| Operating Shape Router                                                                                                 | Which kind of operator am I actually trying to be here?                         | Job 1 | orient       | guide       | Has arrived with hardware or operator intent, but path is ambiguous  | Has chosen independent operator, pool node contributor, or expansion path  | discover       |
| Solo Viability Check                                                                                                   | Is independent operation realistic for my machine, capital, and risk tolerance? | Job 1 | evaluate     | guide       | Has chosen the independent path                                      | Has made a go / no-go decision on independent entry                        | evaluate       |
| Workload Choice                                                                                                        | Should I run video, AI, or Dual Mode first?                                     | Job 2 | choose       | guide       | Has decided to operate independently or expand an existing setup     | Has chosen one workload shape to configure first                           | evaluate       |
| Prerequisites Before Launch                                                                                            | What must be true before I try to go live?                                      | Job 3 | configure    | instruction | Has chosen independent path and workload shape                       | Has wallet, funding, stake plan, and public endpoint plan prepared         | setup          |
| First Machine Bring-Up                                                                                                 | How do I get a first machine running in the correct order?                      | Job 4 | start        | tutorial    | Has prerequisites resolved                                           | Has completed first working launch on one machine                          | setup          |
| Reachability and Selection Setup                                                                                       | What do I need to publish so Gateways can actually send me work?                | Job 3 | configure    | instruction | Has a running machine                                                | Has registered a reachable Service URI and initial work-facing settings    | build          |
| AI Capability and Model Setup                                                                                          | How do I expose the AI work I can actually serve?                               | Job 2 | configure    | instruction | Has chosen AI or Dual Mode                                           | Has configured aiModels.json and declared usable AI capability             | build          |
| Payments and Reward Routine                                                                                            | What recurring actions must run so I do not lose earnings?                      | Job 6 | operate      | guide       | Has a live machine or is about to go live                            | Has an operating routine for Reward Call and payment settlement            | operate        |
| Getting First Paid Work                                                                                                | Why would a Gateway choose me, and how do I improve that chance?                | Job 5 | explain      | guide       | Has a reachable live machine                                         | Has set initial price/capability choices and knows what affects selection  | operate        |
| Scaling Beyond One Box                                                                                                 | When should I stay solo, switch to Dual Mode, or add a pool structure?          | Job 7 | choose       | guide       | Has a working setup and wants more throughput or different economics | Has chosen a scaling shape and next expansion step                         | optimise       |
| Low-Work Diagnosis                                                                                                     | Why am I live but still not getting enough jobs?                                | Job 5 | troubleshoot | guide       | Has a live setup with weak outcomes                                  | Has isolated the likely cause category and next fix path                   | troubleshoot   |
| Performance Tuning                                                                                                     | What should I tune first to improve earnings or reliability?                    | Job 7 | optimise     | guide       | Has diagnosed the main bottleneck                                    | Has applied a tuning priority for price, capability, workload, or capacity | optimise       |
| [CROSS-TAB: content owned by Delegators — delegation mechanics, treasury, and governance depth link, do not duplicate] | —                                                                               | —     | —            | —           | —                                                                    | —                                                                          | —              |
| [CROSS-TAB: content owned by Gateways — buyer-side pricing logic and demand-side routing depth link, do not duplicate] | —                                                                               | —     | —            | —           | —                                                                    | —                                                                          | —              |
| [CROSS-TAB: content owned by About — full protocol architecture and tokenomics depth link, do not duplicate]           | —                                                                               | —     | —            | —           | —                                                                    | —                                                                          | —              |

---

## Persona Path Validation

| Persona                                                  | Enters at              | Exits at                                                | Blocked at                                                                                           | Gap  |
| -------------------------------------------------------- | ---------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---- |
| Solo machine owner                                       | Operating Shape Router | Solo Viability Check or First Machine Bring-Up          | Would be blocked if stake/reachability prerequisites appeared after launch steps                     | None |
| Staked independent operator                              | Workload Choice        | Getting First Paid Work                                 | Would be blocked without a dedicated reachability-and-selection section between launch and live work | None |
| Existing compute operator expanding into second workload | Workload Choice        | AI Capability and Model Setup or Scaling Beyond One Box | Would be blocked if workload choice and AI capability setup were collapsed together                  | None |
| Capacity contributor joining someone else’s operation    | Operating Shape Router | Scaling Beyond One Box                                  | Would be blocked if the tab only assumed independent operation                                       | None |
| Live operator fixing weak earnings or low selection      | Low-Work Diagnosis     | Performance Tuning                                      | Would be blocked if diagnosis were mixed into first-launch content                                   | None |

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

# Addendum / Update Recommendations

Yes. A few things were unclear or worth tightening.

The biggest issue is an internal contradiction. The brief says each tab must be self-contained, that readers may never visit another tab, and that intentional duplication is correct. But Phase 2C also says that if another tab “owns” content, replace it with a cross-tab link and do not duplicate it. Those two rules conflict directly.

That contradiction affected my output: I applied the Phase 2C cross-tab gate too strictly. Based on the self-containment rule, the better interpretation is: include the minimum content needed in-tab, then link out for deeper canonical detail.

What I would improve in the brief:

1. **Resolve the cross-tab rule**
   Replace the current gate with:
   “If another tab is the canonical deep reference, include the minimum decision-enabling content here, then link for depth. Do not omit information this audience needs to complete their goal.”
   That matches the self-containment principle.

2. **Clarify terminology permissions after Phase 0**
   The brief says glossary/Product Context terms are permitted in Phase 0 only, then says anything in the lock or Product Context may be introduced later. That is mostly inferable, but it should state explicitly:
   “After Phase 0, permitted terms are: TERMINOLOGY_LOCK + Product Context terms + freshly introduced plain-language terms.”

3. **Add a rule for deprecated/conflicted terms**
   The deprecated-terms file is important, but the main brief does not explicitly say:
   “Before output, normalise terminology against deprecated/conflicted terms.”
   That would make replacements like “Pool node” and “Dual mode” mandatory, and avoid old enum drift.

4. **Clarify whether persona names may use product terms**
   “No existing terminology” is strong, but personas sometimes need recognisable labels. Add:
   “Persona names should avoid existing doc labels unless the product term itself is required for accuracy.”

5. **Add an explicit ‘activation outcome’ check**
   The brief already rejects vague “understanding,” which is good. I would add:
   “At least one section must end in a concrete activation outcome for the primary persona.”
   That keeps the IA operational, not descriptive.

6. **Add a staleness gate**
   Since the deprecated/conflicted file flags stale/changing terms, the brief should require marking any live-value claims as “verify live.”

Most important fix: resolve the self-containment vs cross-tab contradiction. That is the one thing most likely to distort the IA.
