# Orchestrators — Canonical Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Synthesised from**: chatgpt-v4-orchestrators-audience-design.md · CLAUDEWEB-v4-orchestrators-audience-design.md · PERPLEXITY-TAB__Orchestrators_TASK__Execute_the_audience-desi.md · v4-orchestrators-audience-design-agent.md
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| **Orchestrator** | Supply-side Livepeer network node that holds staked LPT, receives compute jobs from gateways, executes GPU compute (video transcoding and/or AI inference), and earns ETH service fees plus LPT inflation rewards. Not a generic scheduler — this is the Livepeer-specific term for the compute-provider role. | — | 4/4 |
| **LPT (Livepeer Token)** | ERC-20 staking and governance token. Orchestrators must bond LPT to be eligible for the active set for video transcoding jobs. AI inference routing does not require LPT staking. | `[verify-live: explorer.livepeer.org]` for current staking amounts and requirements | 4/4 |
| **Active Set** | The top-N orchestrators by total bonded stake (self-stake plus delegated stake) eligible to receive video transcoding jobs in the current round. AI inference routing does not require active set membership. Size is governance-controlled. | `[verify-live: explorer.livepeer.org]` — do not hard-code the value "100" without a live-check note | 4/4 |
| **Stake / Bonding** | Locking LPT into the BondingManager contract to secure the right to receive video transcoding work and earn inflation rewards. | `[verify-against: https://github.com/livepeer/protocol]` — BondingManager contract | 4/4 |
| **Gateway** | Demand-side network actor that routes AI or video transcoding jobs to orchestrators and pays per job. Selects orchestrators based on stake weight, performance score, and price. From the orchestrator's perspective, gateways are the source of work and payment. | — | 4/4 |
| **Reward Call** | On-chain transaction (`Reward()`) submitted once per round by an active orchestrator to mint and claim new LPT inflation rewards for that round. Missing it permanently forfeits that round's rewards. An active operational requirement, not a passive payout. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release — for automation flags and gas estimates | 4/4 |
| **Reward Cut** | The percentage of LPT inflation rewards the orchestrator retains before distributing the remainder to delegators. Set on-chain by the orchestrator. Affects delegation attractiveness. | `[verify-live: explorer.livepeer.org]` | 4/4 |
| **Fee Cut** | The percentage of ETH service fees the orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: explorer.livepeer.org]` | 4/4 |
| **Probabilistic Micropayment (PM)** | Lottery-based payment system where gateways issue signed tickets; winning tickets are redeemed on-chain via the TicketBroker for ETH. Amortises on-chain gas costs across many small payments. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` — TicketBroker contract | 4/4 |
| **pricePerUnit / pixelsPerUnit** | CLI parameters setting the orchestrator's transcoding price in wei per unit of pixels processed. The primary means by which an orchestrator is priced in or out of gateway job routing. Gateways apply a hard MaxPrice gate against this value. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release — flag names and defaults change between releases | 4/4 |
| **Performance Score** | Composite metric (latency score × success rate) that gateways use alongside stake weight and price when selecting orchestrators for routing. | `[verify-against: https://github.com/livepeer/go-livepeer]` — scoring logic in source | 4/4 |
| **Video Transcoding** | Conversion of live or on-demand video into multiple encoded renditions at different resolutions and bitrates. One of the two compute workload types on the network. Requires active set membership for guaranteed job routing. | — | 4/4 |
| **AI Inference** | Running trained ML models on input data to produce generated outputs (images, video, audio, text). The second compute workload type on the network. Routing is capability- and price-based; active set membership is not required. | — | 4/4 |
| **Dual Mode** | Deployment configuration where a single orchestrator handles both video transcoding and AI inference simultaneously. Replaces deprecated terms "Combined mode" and "Hybrid." | `[verify-against: https://github.com/livepeer/go-livepeer]` — for flag combinations | 4/4 |
| **O-T Split** | Orchestrator–Transcoder split architecture where the orchestrator process manages protocol interaction and payment negotiation, and a separate transcoder/worker process handles GPU compute, typically on different machines. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 4/4 |
| **Pool** | Group of GPU worker nodes coordinated under a single orchestrator for capacity scaling. The pool operator holds the on-chain stake and handles reward calling; pool nodes contribute GPU and receive off-chain payouts. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 4/4 |
| **Pool Node** | An operator who contributes GPU capacity to an orchestrator pool rather than operating solo. Does not hold on-chain stake. Formerly "Pool worker" — deprecated per `deprecated-terms.md`; "Pool node" is canonical. | — | 4/4 |
| **Service URI** | Publicly reachable URL registered on-chain (ServiceRegistry contract) that gateways use to discover and connect to an orchestrator node. | `[verify-against: https://github.com/livepeer/protocol]` — ServiceRegistry contract | 4/4 |
| **go-livepeer** | Official Go binary implementing all Livepeer network roles. Orchestrators, pool nodes, and standalone transcoders all run different flag combinations of the same binary. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release | 4/4 |
| **aiModels.json** | JSON configuration file specifying which AI models an orchestrator loads, at what price, and with what warm/cold status. The primary configuration surface for AI workloads. | `[verify-against: https://github.com/livepeer/go-livepeer]` — schema changes with releases; high staleness risk | 4/4 |
| **Warm Model / Cold Start** | A warm model is pre-loaded in GPU VRAM and serves inference requests immediately. A cold model must be loaded first, incurring latency of seconds to minutes. Declared in `aiModels.json`. | `[verify-against: https://github.com/livepeer/go-livepeer]` — beta behaviour (one warm model per GPU) may change | 4/4 |
| **Capability Advertisement** | Mechanism by which orchestrators inform gateways of the AI pipelines and models they can process — on-chain via a capability registry or off-chain via webhook discovery. Required for AI inference job routing. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 4/4 |
| **Delegator** | LPT token holder who bonds tokens to an orchestrator, earning a share of rewards and participating in governance. Their delegated stake contributes to the orchestrator's active set rank. | — | 4/4 |
| **Stake Weight** | Total bonded LPT (self-stake plus delegated stake) that determines an orchestrator's active set rank, reward share, and governance influence. | — | 3/4 [2-run consensus on explicit inclusion; implied in all 4] |
| **TicketBroker** | The on-chain smart contract that manages probabilistic micropayment ticket redemption. Winning tickets are redeemed against this contract for ETH payment. | `[verify-against: https://github.com/livepeer/protocol]` and `[verify-against: https://arbiscan.io/accounts/label/livepeer]` | 3/4 [2-run consensus] |
| **Inflation / Round** | New LPT is minted each protocol round (~22 hours of Ethereum L1 blocks) and distributed based on stake participation. The inflation rate adjusts dynamically based on total bonded LPT vs. target bonding rate. Round duration is a technical claim. | `[verify-live: explorer.livepeer.org]` — all parameter values are governance-controlled. `[verify-against: https://github.com/livepeer/protocol]` — specific round duration | 3/4 [2-run consensus] |
| **Arbitrum** | The Ethereum Layer 2 network on which Livepeer's protocol contracts are deployed. All on-chain orchestrator operations (reward calls, staking, ticket redemption) occur on Arbitrum. | `[verify-against: https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js]` | 2/4 [2-run consensus] |
| **VRAM** | GPU video memory required to load AI inference models. Determines which AI pipelines an operator can support and directly constrains warm model choices. | — | 2/4 [2-run consensus] |

**Deprecated-term checks applied (all runs consistent)**:
- "Broadcaster" → not used; "Gateway" is canonical
- "Combined mode" / "Hybrid" → replaced with "Dual Mode"
- "Pool worker" → replaced with "Pool node"
- "Transcoder" as synonym for Orchestrator → not used; "Transcoder" appears only in O-T Split context (the worker subprocess)

**Terms from single runs not included in canonical lock** — see Collation Notes:
- `BondingManager` (agent run only as explicit lock term) — concept covered under Stake/Bonding
- `ticket` as a standalone term (agent run only) — covered under Probabilistic Micropayment
- `slashing` (agent run only) — single-run, not included
- `unbonding period` (agent run only) — single-run, not included
- `AI runner` (agent run only) — single-run; high staleness risk
- `cold model` as standalone term (agent run only) — covered under Warm Model/Cold Start
- `BYOC` (Claude Web only) — single-run, not included
- `Segment` (Claude Web only as industry-comparison term) — single-run, not included
- `ETH` as standalone lock term (Perplexity only) — implied throughout; not included as a distinct lock term

---

## Arriving Question

> "I have GPU hardware — how do I connect it to Livepeer, figure out which setup path fits my situation, and start earning from it reliably?"

**Synthesis note**: All four runs produced substantially equivalent arriving questions centred on GPU hardware + earning + correct path. The canonical version merges ChatGPT's emphasis on "which path" and "earning reliably" with Claude Web and the agent run's concrete GPU/hardware framing. Perplexity's version ("can I earn money from it — what would I actually need to do?") is the most colloquial; the canonical version adopts its action-orientation while retaining specificity. See Collation Notes for per-run variation.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **GPU-ready newcomer / solo operator (video-first)** | Organic search, Discord/forum referral, Foundation blog — heard Livepeer pays for GPU compute | GPU hardware; server operations confidence; no Livepeer-specific knowledge; does not know staking requirement or protocol mechanics | Running orchestrator node registered on-chain, priced, and receiving work — or a clear decision that the LPT stake requirement is a blocker and how to address it | 3 | 3 | 3 | **9** | 4/4 |
| 2 | **AI inference specialist** | Livepeer AI blog post, AI/ML community referral, Discord `#ai-video` — existing ML inference operator looking for a demand channel | GPU hardware with recent NVIDIA card; familiar with AI models and inference; may have existing ML workloads; does not know Livepeer's payment, staking, or configuration surface | AI pipelines configured, capabilities advertised, first AI inference job earned, pricing set | 2 | 3 | 3 | **8** | 4/4 |
| 3 | **Running operator (return visitor)** | Bookmark / direct URL, Discord link to specific doc, search for error message or parameter | Node already running; needs specific answer (flag value, parameter, performance fix, or troubleshooting) | Specific problem resolved or configuration applied; back in normal operation | 3 | 2 | 2 | **7** | 3/4 |
| 4 | **Pool node candidate** | Pool operator referral, Discord `#orchestrators`, search for "join Livepeer without LPT" | GPU hardware; has learned or suspects they lack sufficient LPT for solo operation; may not want to manage on-chain operations | Decision made on pool vs. solo; if pool: knows connection architecture, fee-sharing model, and how to approach a pool operator | 2 | 2 | 2–3 | **6–7** | 4/4 |
| 5 | **Delegator-turned-operator / evaluating operator** | Delegators tab CTA, forum thread, conference, word of mouth | Understands LPT and delegation mechanics (delegator variant) OR has no hardware yet and is sizing up the opportunity (evaluating variant); both lack operational setup knowledge | Go/no-go decision with clear economics picture; if going: knows what hardware, stake, and setup is required | 1–2 | 1–2 | 2 | **4–6** | 4/4 (as two sub-variants) |

**Primary persona**: GPU-ready newcomer / solo operator (video-first) — confirmed unanimous across all four runs. Where runs gave equal scores to video and AI paths (agent run: 9/9), all four independently broke the tie to video-first on the same grounds: video transcoding is the more established path and its foundational structure (staking, reward calling, pricing) is what AI and dual-mode paths build on.

**Self-identification**: A dedicated disambiguation section is required as the first content section. Confirmed by all four runs independently. Reasoning: the label "GPU operator" or "node operator" could describe a solo video operator, solo AI operator, dual-mode operator, or pool node candidate — four meaningfully different setup paths with different LPT requirements, configuration surfaces, and earning models. A reader cannot identify their correct path without first answering two questions: (a) do they want to manage on-chain operations themselves, and (b) which workload type(s) are they targeting? The disambiguation section must route all four paths.

**Entry blockers**:

| Blocker | Persona affected | Section that resolves it | Must appear before |
|---|---|---|---|
| Path ambiguity: reader cannot tell whether they should run solo, pool, video, AI, or dual mode | All personas | S1 Disambiguation | All setup sections |
| LPT stake requirement: insufficient LPT blocks solo video competitiveness; pool node path bypasses this entirely | GPU-ready newcomer (video), pool node candidate | Prerequisites / "what you need before setup" section | Node install section |
| ETH for gas: reward calls, ticket redemptions, and activation transactions cost ETH on Arbitrum | All on-chain paths | Prerequisites section | Node install section |
| Publicly reachable service URI: a node that is not externally reachable cannot receive work | All solo paths | Prerequisites section AND verify section | "Going live" confirmation |
| VRAM capacity: AI pipelines require minimum VRAM; determines which pipelines an operator can configure | AI inference specialist, dual-mode operator | AI setup section (before pipeline selection) | Pipeline configuration |
| Capability advertisement required for AI routing: AI operators must advertise before gateways can route work to them | AI inference specialist | Capability advertisement section | AI "verify live" |

---

## Jobs to be Done

| # | When… | I want to… | So I can… |
|---|---|---|---|
| J1 | I have GPU hardware and have just heard about Livepeer | assess whether my hardware qualifies, what each path requires, and what I can realistically earn | make a go/no-go decision and select the correct setup path before investing any time in configuration |
| J2 | I've decided on a path and am ready to set up | follow a complete, ordered sequence from prerequisites through first job received | have a working, registered node that is discoverable and earning without having missed a critical step |
| J3 | My node is running but I'm not getting enough work | diagnose why — pricing above MaxPrice, outside active set, low performance score, or AI capabilities not advertised | adjust the right variable and start receiving jobs without guessing which lever to pull |
| J4 | I want to add AI inference to my existing video node, or set up AI-only | configure AI pipelines, set up aiModels.json, advertise capabilities, and verify I'm receiving AI inference jobs | diversify my revenue without breaking my existing setup |
| J5 | I'm worried about missing a reward call or mismanaging my cuts | automate reward calling and understand the trade-off between reward cut, fee cut, and delegation attractiveness | ensure I'm not permanently forfeiting inflation rewards and that my delegation offer is competitive |
| J6 | My node is in production and something has gone wrong | diagnose a specific problem — no jobs, failed segments, AI inference failures, missed reward call — using a structured set of checks | restore normal operation without guessing which of several possible causes applies |
| J7 | I need to look up a specific parameter, flag, or live value while operating | retrieve the exact current value (CLI flag name, reward cut setting, active set size, AI pipeline model ID) without rereading narrative content | make a confident configuration change with the correct current value |

**Coverage check**: J1 = arrival/evaluation. J2 = first-time setup. J3, J4 = active-use (job volume, AI expansion). J5 = ongoing economics. J6 = troubleshooting. J7 = reference/return-visit. All four categories covered.

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identifying the right operating path | `discover` | Working out whether to run solo (video, AI, or dual mode) or as a pool node; determining whether LPT acquisition is a prerequisite |
| 2 | Evaluating economics and hardware fit | `evaluate` | Assessing income potential, stake requirements, hardware requirements, and operational cost before committing setup time |
| 3 | Acquiring prerequisites | `setup` | Obtaining LPT (if solo video/dual path), funding ETH wallet for gas on Arbitrum, confirming hardware meets requirements, preparing network access and service URI |
| 4 | Installing and registering the node | `setup` | Installing go-livepeer, configuring base flags, registering service URI and stake on-chain |
| 5 | Configuring workload (and AI pipelines) | `build` | Setting video-only, AI-only, or dual-mode configuration; writing aiModels.json; advertising AI capabilities if applicable; setting pricing and cuts |
| 6 | Verifying the node is live and receiving work | `setup` | Confirming active set membership (video path) or capability discovery (AI path); receiving and processing first job; confirming reward call automation |
| 7 | Operating day-to-day | `operate` | Monitoring performance score, reward call status, session volume, and earnings; managing software updates |
| 8 | Optimising earnings and performance | `optimise` | Adjusting pricing competitiveness, improving performance score, managing model warmth and VRAM allocation, tuning cuts for delegation attractiveness |

**On-demand**:
- Current pricePerUnit benchmark ranges and how to check whether your price is above gateway MaxPrice thresholds
- Reward call status: whether it succeeded this round, how to check, how to automate
- Active set rank: current position and total stake required to enter or maintain membership
- AI pipeline type list: which pipelines are currently routable, current model IDs, warm/cold behaviour, VRAM requirements
- CLI flag reference: flag names, defaults, and accepted values for the current go-livepeer release
- Troubleshooting job routing: why am I not receiving work — stake rank, price, performance score, connectivity
- Troubleshooting AI inference: cold start delays, model load failures, capability advertisement errors
- Reward cut / fee cut: what values are competitive right now, how to change them on-chain
- O-T split and pool architecture: how to connect additional worker machines
- Gas cost estimates: ticket redemption costs, reward call costs on Arbitrum
- Pool operators: how to find or contact a pool operator if going the pool node path
- Governance proposals affecting orchestrator economics (active set size, treasury cut rate)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage routes GPU operators and compute providers to this tab |
| Inbound | About → Orchestrators | Readers who completed a conceptual network overview now want to operate supply |
| Inbound | Community → Orchestrators | Community members directed here after expressing interest in running infrastructure |
| Inbound | Delegators → Orchestrators | Delegators evaluating whether to upgrade to running their own node; also: delegators researching what makes an orchestrator trustworthy |
| Outbound | Orchestrators → Delegators | Operators need to understand how to attract delegators and what delegators look for in reward cut / fee cut settings |
| Outbound | Orchestrators → Gateways | Operators who want to understand gateway selection logic, MaxPrice behaviour, and demand-side pricing signals |
| Outbound | Orchestrators → Resource HUB | CLI reference, changelog, cross-cutting glossary, governance records |
| Outbound | Orchestrators → About | Operators who want deeper protocol architecture, tokenomics, or governance mechanics beyond what belongs in this tab |

---

## Ideal Section Structure

| # | Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|---|
| S1 | **Which path is yours?** *(Disambiguation)* | "I have GPU hardware — am I a solo operator, a pool node, or something else? Do I need to buy LPT?" | J1 | `orient` | `navigation` | Has arrived at the tab knowing they want to earn from GPU hardware; does not yet know which of the four paths (solo video, solo AI, dual mode, pool node) applies | Has identified the correct setup path for their situation and navigated to the appropriate starting section | `discover` |
| S2 | **What orchestrators do and what they earn** | "Is running an orchestrator actually worth it for my hardware and time — and what can go wrong?" | J1 | `explain` | `concept` | Has been routed from S1 (solo video or dual-mode path); no prior knowledge of Livepeer economics or payment mechanics | Can describe how jobs reach their node, how payments work (probabilistic micropayments, ETH fees), what stake weight affects, and what reward calling requires — and can proceed to prerequisites without surprises | `discover` |
| S3 | **How gateways select orchestrators** | "How does work actually get routed to me — what determines whether I get jobs?" | J1, J3 | `explain` | `concept` | Has decided to proceed; does not yet understand the selection mechanism | Can name the three primary routing factors (stake rank / active set eligibility, price vs. MaxPrice, performance score) and articulate how each one affects job volume; has confirmed that AI routing differs from video routing on the active set requirement | `evaluate` |
| S4 | **Prerequisites and hardware** | "What do I need before I run a single command — hardware, LPT, ETH, wallet, network access?" | J2 | `start` | `concept` | Has decided to proceed and chosen a path; has not yet acquired prerequisites | Has confirmed hardware meets requirements, funded ETH wallet for gas, and has a clear plan for LPT acquisition (solo paths) or pool arrangement (pool node path); service URI reachability has been assessed | `setup` |
| S5 | **Install, configure, and register your node** ⚠ Design flag: may need to split (solo vs. pool node variant) | "How do I install go-livepeer, set my flags, and get my node publicly registered on-chain?" | J2 | `start` | `instruction` | Prerequisites from S4 confirmed; go-livepeer not yet installed | Has a running, publicly reachable go-livepeer node with service URI registered on-chain; reward calling is configured; pool node candidates have connected to their pool operator's orchestrator | `setup` |
| S6 | **Set your pricing and cuts** | "What price should I set — and what reward cut and fee cut are reasonable given the trade-off with delegation?" | J2, J5 | `configure` | `guide` | Node is installed and registered; pricing and cuts have not yet been deliberately set | Has set pricePerUnit (and pricePerCapability for AI) to a value grounded in network benchmarks; has set reward cut and fee cut with an understanding of the trade-off against delegation attractiveness; knows when changes take effect | `setup` |
| S7 | **Add AI inference to your node** | "How do I configure AI pipelines, write aiModels.json, register my capabilities, and start receiving AI inference jobs?" | J4 | `build` | `instruction` | Running a video orchestrator (or starting fresh on AI-only path); no AI configuration yet in place | Has written and deployed aiModels.json, registered capabilities on-chain or via webhook, received first AI inference job, and can explain warm vs. cold model behaviour and its pricing implications | `build` |
| S8 | **Verify your node is working** | "How do I confirm my node is reachable, correctly configured, and actually receiving work?" | J2 | `verify` | `instruction` | Node configured with pricing and cuts set (and AI pipelines if applicable) | Has confirmed first job received, reward call succeeded, performance score is tracking, Explorer shows node correctly, service URI is externally reachable | `setup` |
| S9 | **Monitor and operate day-to-day** | "What do I need to check and do regularly to keep earning and not miss rewards?" | J5, J7 | `operate` | `guide` | Node is live and has processed jobs; no monitoring or operations workflow yet in place | Has a monitoring routine tracking the metrics that matter (performance score, session count, reward call status, earnings); reward calling is automated; knows the cadence and priority of routine operational tasks | `operate` |
| S10 | **Optimise pricing, performance, and delegation** | "My node is running but I want more jobs, a better performance score, or more delegated stake — what do I change?" | J3, J5 | `optimise` | `guide` | Node operating in production with monitoring in place | Has made at least one deliberate optimisation decision (pricing adjustment, cut adjustment, or performance improvement action) with a framework for identifying which lever to pull next | `optimise` |
| S11 | **Scale your setup: O-T split and pools** | "I want to add more GPUs or machines — what are my options and how do I implement them?" | J4 | `build` | `guide` | Solo node running in production; operator wants to expand capacity | Has decided between O-T split and pool architecture for their situation and completed the relevant steps to add capacity or coordinate worker machines; understands orchSecret and network isolation requirements | `build` |
| S12 | **Troubleshoot common problems** | "Something is wrong — no jobs, failed AI inference, missed reward call — how do I diagnose it?" | J6 | `troubleshoot` | `guide` | Node is live but behaving incorrectly or underperforming; operator is trying to diagnose a specific symptom | Has identified the likely cause of a specific problem from a structured set of checks (pricing gate, active set status, AI advertisement, fail rate, performance score, software version) and applied or queued the appropriate fix | `troubleshoot` |

**Section count**: 12 — at the upper bound of the 8–12 target. Justified: the tab serves four distinct participation paths (solo video, solo AI, dual mode, pool node) across a full operator lifecycle. S7 (AI inference setup) is the primary section that a video-only structure would not need — it cannot be folded into S5 without creating an unworkable mixed-instruction page. S11 (scaling) addresses the pool and O-T split architecture that the pool node candidate and scaling operator require and that does not fit within the linear first-time setup sequence.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| GPU-ready newcomer / solo operator (video-first) | S1 (disambiguation) → S2 | S8 (verify) for initial goal; returns to S9–S10 for ongoing operations | None — prerequisite sections (S2, S3, S4) precede setup sections (S5, S6, S8) | S4 must explicitly state the ETH-for-gas requirement and LPT acquisition path before S5 begins; S3 must explain active set rank before S6 sets pricing | None |
| AI inference specialist | S1 (disambiguation) → S2 (partial) → S4 (AI hardware prereqs) → S7 | S8 (verify); returns to S9–S10 | None — S7 is present and follows S5 | S7 must note that AI inference does not require active set membership; S4 must address VRAM capacity planning before pipeline selection in S7; S3 should clarify AI routing differs from video routing before S7 is reached | None |
| Running operator (return visitor) | S9 (operations) or S12 (troubleshoot) directly | S9, S10, or S12 depending on visit type | None — these sections are self-contained for on-demand access | S12 must distinguish low demand vs. low selection vs. low margin as separate diagnostic branches | None |
| Pool node candidate | S1 (disambiguation) → routed to pool node path in S5 | S5 (pool node variant) or S11 (if scaling) | **Flag**: S5 must contain a clearly labelled sub-path or routing callout for pool node candidates; if S5 only covers solo setup, this persona is blocked. S5 carries the design flag `[⚠ may need to split]`. | S5 pool node variant must confirm that LPT is not required; S4 must explicitly state pool node path does not require LPT acquisition; S11 must include trust boundary and pool architecture content | None — resolved within S5 and S4 with explicit path branching |
| Delegator-turned-operator / evaluating operator | S2 (economics) → S3 → S4 | S4 or S5 (delegator variant may evaluate and leave); evaluating operator may exit at S4 | None | S2 must include hardware requirements and a cost-of-operation framing so evaluating operators can make a hardware purchase or go/no-go decision; S6 must explicitly address setting cuts from the operator's perspective (not just from the delegator-recipient's perspective) | None |

---

## ⏸ Checkpoint

- [x] TERMINOLOGY_LOCK: all `[verify-live]` and `[verify-against]` flags carried through from any run?
- [x] Arriving question specific — not a topic, an actual question?
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across all runs with consistent tie-breaking reasoning?
- [x] Self-identification decision: 4/4 run consensus on dedicated disambiguation section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases (AI-specific, pool path)?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flag `[⚠ may need to split]` on S5 carried through?
- [x] All personas have unblocked paths (pool node path resolved within S5 via explicit routing callout)?
