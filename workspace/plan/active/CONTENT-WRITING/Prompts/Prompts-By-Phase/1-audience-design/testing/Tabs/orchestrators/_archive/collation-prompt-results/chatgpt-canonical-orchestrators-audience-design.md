# Orchestrators — Canonical Audience Design

**Tab**: Orchestrators
**Audience**: orchestrator
**Synthesised from**: `chatgpt-v4-orchestrators-audience-design.md`, `CLAUDEWEB-v4-orchestrators-audience-design.md`, `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md`, `v4-orchestrators-audience-design-agent.md`
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| Orchestrator | Supply-side Livepeer node that receives work from gateways, executes GPU compute, and earns protocol-linked fees and rewards. | — | unanimous (4-run) |
| LPT | Livepeer’s staking and governance token; required for solo video participation and tied to eligibility and rewards. | `[verify-live: explorer.livepeer.org]` | unanimous (4-run) |
| Active Set | Stake-ranked eligibility set for video transcoding work; AI inference routing does not require active set membership. | `[verify-live: explorer.livepeer.org]` | unanimous (4-run) |
| Stake / Bonding | Locking LPT on-chain to secure video-work eligibility and rewards. | `[verify-against: livepeer/protocol or whitepaper]` | `[2-run consensus]` |
| Reward Call | On-chain round-based action required to mint/claim inflation rewards; missing it forfeits that round’s rewards. | `[verify-live: explorer.livepeer.org]`; `[verify-against: go-livepeer latest tagged release]` | strong (3-run) |
| Reward Cut | Percentage of inflation rewards the orchestrator retains before delegator distribution. | `[verify-live: explorer.livepeer.org]` | unanimous (4-run) |
| Fee Cut | Percentage of service fees the orchestrator retains before delegator distribution. | `[verify-live: explorer.livepeer.org]` | unanimous (4-run) |
| Probabilistic Micropayment | Ticket-based payment system where only winning tickets settle on-chain. | `[verify-against: livepeer/protocol or whitepaper]` | strong (3-run) |
| TicketBroker | Protocol contract used for ticket redemption in the payment system. | `[verify-against: livepeer/protocol]` | `[2-run consensus]` |
| Gateway | Demand-side network role that routes jobs and payments to orchestrators. | — | unanimous (4-run) |
| pricePerUnit / pixelsPerUnit | Core pricing controls that gate routing competitiveness and job selection. | `[verify-against: go-livepeer latest tagged release]` | `[2-run consensus]` |
| Performance Score | Routing-relevant performance signal used alongside price and stake. | `[verify-against: go-livepeer latest tagged release]` | `[2-run consensus]` |
| Service URI | Publicly reachable endpoint used to discover and connect to an orchestrator. | `[verify-against: livepeer/protocol or go-livepeer latest tagged release]` | strong (3-run) |
| Video Transcoding | Livepeer workload for encoding video into multiple renditions. | — | unanimous (4-run) |
| AI Inference | Livepeer workload for running ML models on inputs to produce outputs. | — | unanimous (4-run) |
| Dual Mode | Deployment mode that runs video transcoding and AI inference on the same node. | `[verify-against: go-livepeer latest tagged release]` | unanimous (4-run) |
| Pool / Pool Node | Pooled participation model where GPU workers contribute compute under a coordinating orchestrator instead of operating fully solo. | `[verify-against: STREAMFLOW.md]` | unanimous (4-run) |
| O-T Split | Architecture that separates orchestrator/protocol functions from worker/compute functions. | `[verify-against: STREAMFLOW.md]` | unanimous (4-run) |
| Capability Advertisement | Mechanism for exposing which AI pipelines/models a node can serve so gateways can route AI work correctly. | `[verify-against: go-livepeer latest tagged release]` | strong (3-run) |
| go-livepeer | Official binary used to run Livepeer network roles. | `[verify-against: go-livepeer latest tagged release]` | strong (3-run) |
| aiModels.json | Primary AI workload configuration surface for model loading and pricing. | `[verify-against: go-livepeer latest tagged release]` | unanimous (4-run) |
| Warm Model / Cold Start | AI model loading state that changes latency and readiness characteristics. | `[verify-against: go-livepeer latest tagged release]` | strong (3-run) |
| Delegator | LPT holder who bonds to an orchestrator and contributes stake weight. | — | `[2-run consensus]` |
| Inflation / Round | Round-based issuance and reward cadence that governs operator reward timing. | `[verify-live: explorer.livepeer.org]`; `[verify-against: livepeer/protocol]` | `[2-run consensus]` |

---

## Arriving Question

> "I have GPU hardware — what’s the right way for me to participate on Livepeer, and what do I need to do first to get a node earning work reliably?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | GPU-ready operator choosing a viable path | Search, homepage/role CTA, community or Discord referral | GPU hardware, Linux/DevOps confidence, but unclear whether solo, pool, video, AI, or dual mode is viable | a clear path decision and a first working setup plan | 3 | 3 | 3 | 9 | unanimous (4-run) |
| 2 | AI-first compute provider | AI blog post, AI community referral, `#ai-video`, search for AI/GPU earnings | existing ML/inference familiarity but no Livepeer-specific payment, routing, or AI config knowledge | AI pipelines configured, capabilities advertised, and first AI job received | 2 | 3 | 3 | 8 | strong (3-run) |
| 3 | Capital-constrained pool-path candidate | Discord/community referral, search for joining without enough LPT, another operator’s link | GPU hardware but insufficient LPT or no desire to manage on-chain operations | a decision to join a pool or defer solo operation, plus the connection path for pool participation | 2 | 2 | 2 | 6 | unanimous (4-run) |
| 4 | Existing operator expanding workload or architecture | Internal return visit, operations thread, upgrade-related referral | a working node plus demand to add AI, dual mode, pool workers, or split architecture safely | an expansion decision and the changes required to execute it safely | 2 | 3 | 2 | 7 | strong (3-run) |
| 5 | Live operator tuning or troubleshooting | Bookmark, direct URL, search for an error or low-volume issue | a live node that is underperforming, missing work, or showing degraded economics | the specific lever or fix needed to restore or improve performance | 3 | 2 | 2 | 7 | strong (3-run) |
| 6 | Governance-aware delegator evaluating operation | Delegators tab, forum/community discussion, staking-oriented referral | LPT/reward familiarity but limited operational setup knowledge | a go/no-go decision on becoming an operator, or a correctly configured operator setup if proceeding | 1 | 1 | 2 | 4 | moderate (2-run) |

**Primary persona**: GPU-ready operator choosing a viable path — all runs converge on a newcomer/operator-choice persona as the top entry state, even when one run split video and AI into separate top personas.

**Self-identification**: dedicated disambiguation section — all four runs require a first section that routes “GPU operator” / “node operator” readers because the label can map to materially different paths (solo video, AI-first/dual mode, or pool participation) with different stake, setup, and economics requirements.

**Entry blockers**:
- Path ambiguity: readers cannot tell whether solo video, AI-first, dual mode, or pool participation fits their situation.
- LPT / capital barrier: solo video participation may be blocked by insufficient LPT stake.
- ETH-for-gas barrier: on-chain actions require ETH on the correct network before setup is viable.
- Reachability barrier: Service URI / public network access must be workable before a node can receive jobs.
- Payment/economics barrier: readers need stake, routing, pricing, fee, and reward mechanics before they can judge viability or configure safely.
- AI activation barrier: AI paths require capability advertisement after configuration.
- VRAM / hardware-fit barrier: AI paths require enough VRAM for the intended model/pipeline mix.
- Pool-entry barrier: pool candidates need a clear participation/connection route before solo setup instructions.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I arrive with GPU hardware but no clear model | determine which participation path fits my hardware, capital, and goals | avoid building the wrong node |
| 2 | When I am deciding whether to proceed at all | understand the requirements, economics, routing, and work-allocation mechanics | make a confident go / no-go decision before setup |
| 3 | When I commit to a path | complete the prerequisites, install the node, price it correctly, and get to first live work | reach a working, registered, routable node without missing a critical step |
| 4 | When I want AI workloads | configure AI inference or dual mode and advertise capabilities correctly | receive AI jobs without breaking my existing setup |
| 5 | When my live node is not getting enough work or returns | diagnose whether the issue is pricing, stake, performance, capability, or connectivity | change the right lever instead of guessing |
| 6 | When I want to grow beyond a single-machine baseline | choose the right pool or split architecture and apply it safely | add capacity or new workload mix without creating fragility |
| 7 | When I am operating in production | monitor routine health, rewards, and earnings | avoid missed rewards, silent failures, and avoidable downtime |
| 8 | When I return later mid-operation | look up the exact parameter, check, or live fact I need | make a confident operational change quickly |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify the right participation path | discover | Working out whether they should run solo video, AI-first, dual mode, or join a pool |
| 2 | Judge viability and economics | evaluate | Checking hardware fit, stake requirements, routing mechanics, and whether the model is worth pursuing |
| 3 | Assemble prerequisites | evaluate | Securing LPT or a pool arrangement, ETH for gas, hardware readiness, and public network reachability |
| 4 | Install and register the first node | setup | Installing `go-livepeer`, applying base configuration, registering, and bringing the node online |
| 5 | Set pricing and activation controls | setup | Setting price and cut configuration, then preparing the node to be discoverable and competitive |
| 6 | Verify live readiness | setup | Confirming routability, first-job readiness, reward-call readiness, and path-specific activation |
| 7 | Operate and monitor live supply | operate | Running day-to-day checks, monitoring health, and keeping rewards and earnings flowing |
| 8 | Optimise or expand | optimise | Improving selection/returns and deciding when to add AI, pools, or O-T split architecture |

**On-demand**:
- Active-set / live eligibility and stake-threshold checks
- Pricing levers, benchmarks, and MaxPrice-related routing filters
- Reward call, reward cut, and fee cut details
- Payment ticket / redemption mechanics
- AI pipeline configuration, model IDs, and warm-model behaviour
- Service URI / reachability checks
- Pool and O-T split connection details
- Troubleshooting low work volume or failed AI activation
- CLI / config flag lookup for the current `go-livepeer` release
- Monitoring signals that matter in production

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Supply-side GPU operators are routed here to operationalise participation |
| Inbound | About → Orchestrators | Concept-level readers move here when they want to run infrastructure |
| Inbound | Community → Orchestrators | Community discussions or operator conversations route readers here for action |
| Inbound | Delegators → Orchestrators | Delegators evaluating whether to become operators need this path |
| Outbound | Orchestrators → Delegators | Operators need delegator-side depth to understand cuts, stake attraction, and perspective |
| Outbound | Orchestrators → Gateways | Operators need demand-side routing and pricing logic to tune job acquisition |
| Outbound | Orchestrators → Developers | Some readers will move from operating supply to building custom AI/video flows |
| Outbound | Orchestrators → Resource HUB | Readers need glossary, changelog, CLI/config reference, and reusable reference material |
| Outbound | Orchestrators → About | Some readers need deeper tokenomics, governance, or architecture context |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. What kind of operator are you? | Which path applies to me: solo video, AI-first, dual mode, or pool participation? | 1 | orient | navigation | Reader has GPU hardware and wants to participate, but cannot yet identify the right path | has identified the correct participation path and the major blocker(s) attached to it | discover |
| 2. Is this worth it for my hardware and goals? | Is operating on Livepeer actually worth my hardware, time, and capital? | 2 | evaluate | concept | Reader knows their candidate path but not yet the cost, responsibility, or viability picture | has made a go / no-go decision based on realistic requirements, economics, and responsibility | discover |
| 3. How do jobs, payments, and routing actually work? | What determines whether I get work, and how do fees and rewards reach me? | 2 | explain | concept | Reader has decided to proceed but lacks the network-specific mechanics needed to reason about setup and competitiveness | can name the main routing and payment levers that affect selection, eligibility, and earnings | evaluate |
| 4. What do I need before I start? | What must be in place before I run a single command? | 3 | start | guide | Reader has chosen a path but has not yet assembled tokens, wallet, hardware, or network prerequisites | has all prerequisites in place or a concrete action plan to acquire the missing ones | evaluate |
| 5. Install, configure, and register your node | What exact sequence gets my node online and registered for the path I chose? | 3 | start | instruction | Reader has completed prerequisites and is ready to execute setup | has a running, registered, publicly reachable baseline node | setup |
| 6. Set pricing and cuts | What should I charge, and how should I set reward cut and fee cut? | 3 | configure | guide | Reader has a running node but has not yet made deliberate pricing or cut decisions | has set price and cut controls with a clear rationale tied to routing and delegation trade-offs | setup |
| 7. Verify the node is live and routable | How do I confirm that my node is actually reachable, discoverable, and ready to receive work? | 3 | verify | instruction | Reader has a configured node but has not yet confirmed end-to-end readiness | has confirmed routability, readiness, and first-work viability for the selected path | setup |
| 8. Add AI inference and advertise capabilities | How do I add AI workloads, configure them correctly, and make gateways aware of them? | 4 | build | instruction | Reader has a working baseline node or AI-first baseline and now needs AI-specific configuration and activation | has configured AI inference, advertised capabilities, and reached a valid AI-ready state | build |
| 9. Operate and monitor day to day | What do I need to check routinely to keep earning and avoid missed rewards or silent failures? | 7 | operate | guide | Reader has a live node and now needs an operating cadence | has a repeatable monitoring and routine-operations workflow in place | operate |
| 10. Optimise work volume, earnings, and delegation | If results are weak, what should I tune first? | 5 | optimise | guide | Reader has operating data and wants better selection, returns, or delegated stake | has identified and changed the correct optimisation lever for the current bottleneck | optimise |
| 11. Pools and O-T split: join or scale safely | When should I join a pool, add workers, or move to split architecture? | 6 | build | guide | Reader either lacks solo viability or already has one stable node and wants to change architecture | has chosen the right pool / split path and knows the changes required to execute it safely | build |
| 12. Troubleshoot common problems | Something is wrong — how do I diagnose low work, failed activation, or degraded performance? | 5 / 7 | troubleshoot | guide | Reader has a live but misbehaving node and a specific symptom to diagnose | has identified the likely cause and the next corrective action for that symptom | troubleshoot |
| 13. Operator reference `[single-run section]` | What exact parameter, term, or live check do I need right now? | 8 | reference | reference | Reader is already operating or tuning and needs a specific fact fast | has retrieved the exact parameter, term, or live check needed without rereading narrative sections | operate |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| GPU-ready operator choosing a viable path | 1. What kind of operator are you? | 7. Verify the node is live and routable | None | Section 1 must stay plain-language before protocol terms dominate the page; Sections 2–4 must surface the LPT and ETH requirements before setup begins. | None |
| AI-first compute provider | 1. What kind of operator are you? → 4. What do I need before I start? | 8. Add AI inference and advertise capabilities | None | Section 8 must clearly state that AI inference does not require active-set membership and that capability advertisement follows configuration, not the other way around. | None |
| Capital-constrained pool-path candidate | 1. What kind of operator are you? | 11. Pools and O-T split: join or scale safely | None | Section 11 must explicitly say when insufficient LPT changes the recommended path and must state that pool participation is a distinct route, not a failed solo attempt. | None |
| Existing operator expanding workload or architecture | 8. Add AI inference and advertise capabilities or 11. Pools and O-T split: join or scale safely | 11. Pools and O-T split: join or scale safely | None | Section 11 must separate “add AI” from “change architecture” and include role-split / trust-boundary implications for split setups. | None |
| Live operator tuning or troubleshooting | 9. Operate and monitor day to day or 12. Troubleshoot common problems | 10. Optimise work volume, earnings, and delegation or 13. Operator reference | None | Section 10 must distinguish low demand, low selection, and low margin as separate problems; Section 12 must provide symptom-driven diagnosis rather than a single generic checklist. | None |
| Governance-aware delegator evaluating operation | 2. Is this worth it for my hardware and goals? | 6. Set pricing and cuts or exit after 2–4 | None | Section 6 must explain reward cut and fee cut from the operator’s perspective rather than assuming delegator context. | None |

---

## ⏸ Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question specific — not a topic?
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across runs or tie-broken with reasoning?
- [x] Self-identification decision: 3+ run consensus or defaulted to dedicated section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags and verify flags: carried through from any run?
- [x] All personas unblocked?
