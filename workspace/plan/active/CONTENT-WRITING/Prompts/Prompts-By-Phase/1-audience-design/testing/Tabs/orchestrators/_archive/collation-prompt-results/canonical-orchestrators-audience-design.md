# Orchestrators — Canonical Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Synthesised from**: v4-orchestrators-audience-design-agent.md, CLAUDEWEB-v4-orchestrators-audience-design.md, chatgpt-v4-orchestrators-audience-design.md, PERPLEXITY-TAB_Orchestrators run
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| LPT (Livepeer Token) | ERC-20 staking and governance token. Orchestrators must bond LPT to be eligible for the active set for video transcoding jobs. | `[verify-live: explorer.livepeer.org]` for current required staking amounts | 4 runs |
| Active Set | The top-ranked orchestrators by total bonded stake eligible to receive video transcoding jobs in the current round. AI inference routing does not require active set membership. Size is governance-controlled. | `[verify-live: explorer.livepeer.org]` — size is governance-controlled; do not hard-code a number | 4 runs |
| Reward Cut | The percentage of LPT inflation rewards the orchestrator retains before distributing the remainder to delegators. Set on-chain by the orchestrator. | `[verify-live: explorer.livepeer.org]` | 4 runs |
| Fee Cut | The percentage of ETH service fees the orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: explorer.livepeer.org]` | 4 runs |
| Gateway | The demand-side node that routes AI or video transcoding jobs to orchestrators and pays per job. Selects orchestrators based on stake weight, performance score, and pricing. | — | 4 runs |
| go-livepeer | The official Go binary implementing all Livepeer network roles. Orchestrators, pool nodes, and standalone transcoders all run different flag combinations of the same binary. | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release; flag names and defaults change between releases | 4 runs |
| Probabilistic Micropayment (PM) | Lottery-based payment system where gateways issue signed tickets; winning tickets are redeemed on-chain via the TicketBroker contract for ETH. Amortises on-chain gas costs across many small payments. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 4 runs |
| pricePerUnit / pixelsPerUnit | CLI parameters setting the orchestrator's transcoding price in wei per unit of pixels processed. The primary means by which an orchestrator is priced in and out of gateway job routing (gateways apply a hard MaxPrice gate). | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release | 4 runs |
| AI Inference | Running trained ML models on new inputs to produce generated outputs. The second compute workload type on the network. Routing is capability- and price-based rather than stake-rank-based — active set membership is not required. | — | 4 runs |
| Video Transcoding | Converting live or on-demand video from one encoding format to multiple renditions at different resolutions and bitrates. One of the two compute workload types. Requires active set membership for guaranteed job routing. | — | 4 runs |
| Dual Mode | Deployment configuration where a single orchestrator handles both video transcoding and AI inference simultaneously. Replaces deprecated terms "combined mode" and "hybrid." | `[verify-against: https://github.com/livepeer/go-livepeer]` — flag combinations | 4 runs |
| O-T Split | The Orchestrator–Transcoder split architecture where the orchestrator process manages job routing and payment negotiation, and a separate transcoder/worker process handles GPU compute — typically on different machines. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 4 runs |
| Pool Node | An operator who contributes GPU capacity to a pool operator's orchestrator rather than operating solo on-chain. Does not need to hold LPT. Formerly "Pool worker" — deprecated per deprecated-terms.md. | — | 4 runs |
| aiModels.json | JSON configuration file specifying which AI models an orchestrator loads, at what price, and with what warm/cold status. The primary configuration surface for AI workloads. | `[verify-against: https://github.com/livepeer/go-livepeer]` — schema changes with releases; high staleness risk | 4 runs |
| Capability Advertisement | The mechanism by which an orchestrator informs gateways of the AI pipelines and models it can process — on-chain or via off-chain webhook discovery. Required for AI work routing. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 4 runs |
| Warm Model | An AI model pre-loaded into GPU VRAM at node startup, ready to serve inference requests without cold-start latency. Status declared in aiModels.json. | `[verify-against: https://github.com/livepeer/go-livepeer]` — "one warm model per GPU" is a specific claim; beta behaviour may change | 4 runs |
| Stake Weight | Total bonded LPT (own stake plus delegated stake) determining active set rank, reward share, and governance influence. | — | 4 runs |
| Service URI | Publicly reachable URL registered on-chain that gateways use to discover and connect to an orchestrator node. | `[verify-against: https://github.com/livepeer/protocol]` — ServiceRegistry contract | 3 runs |
| Reward Call | On-chain transaction (`Reward()`) submitted once per round by an active orchestrator to mint and claim new LPT inflation rewards for that round. Missing it permanently forfeits that round's rewards. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release for automation flags; `[verify-live: explorer.livepeer.org]` | 3 runs |
| Performance Score | Composite metric (latency score × success rate) that gateways use alongside stake weight and price when selecting orchestrators. A hard MaxPrice gate and soft scoring factors combine to determine routing priority. | `[verify-against: https://github.com/livepeer/go-livepeer]` — scoring logic in source | 3 runs |
| Delegator | LPT token holder who bonds tokens to an orchestrator, earning a share of rewards. Their delegated stake contributes to the orchestrator's active set rank. | — | 3 runs |
| BondingManager | Named on-chain contract governing stake bonding, unbonding, and reward distribution. | `[verify-against: https://arbiscan.io/accounts/label/livepeer]` | 2-run consensus |
| TicketBroker | Named on-chain contract handling probabilistic micropayment ticket redemption. | `[verify-against: https://github.com/livepeer/protocol]` and `[verify-against: https://arbiscan.io/accounts/label/livepeer]` | 2-run consensus |
| VRAM | GPU video memory required to load AI models. Capacity determines which pipelines an operator can configure and how many warm models can be maintained simultaneously. | — | 2-run consensus |
| Unbonding Period | Governance-controlled delay between initiating a stake withdrawal and receiving bonded LPT back. Affects operator exit planning. | `[verify-live: explorer.livepeer.org (BondingManager)]` | 2-run consensus |
| Inflation / Round | New LPT is minted each protocol round (~22 hours of Ethereum L1 blocks) and distributed based on stake participation. The inflation rate adjusts dynamically based on total bonded LPT vs a target bonding rate. | `[verify-live: explorer.livepeer.org]` — all parameter values are governance-controlled; do not hard-code round duration | 2-run consensus |

**Deprecated term confirmations applied to all content using this lock**:
- "Broadcaster" → not used; current term is "gateway"
- "Combined mode" / "Hybrid" → replaced with "dual mode"
- "Pool worker" → replaced with "pool node"
- "Transcoder" as synonym for orchestrator → not used; "transcoder" appears only in O-T Split context (the worker subprocess)

---

## Arriving Question

> "I have GPU hardware — how do I connect it to the Livepeer network, start earning, and make sure I don't miss jobs or rewards?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Solo GPU operator — video / general path | Organic search ("livepeer orchestrator setup"), Discord referral, mining forum, Foundation blog | GPU hardware; Linux server experience; heard Livepeer pays for compute; no knowledge of LPT staking requirement, protocol mechanics, or active set | A running orchestrator node registered on-chain, priced, reward calling automated, and receiving work — or a clear decision that LPT stake is a blocker and a path to resolve it | 3 | 3 | 3 | 9 | 4 runs |
| 2 | AI inference specialist / AI compute provider | Livepeer AI blog post, AI/ML community referral, Discord #ai-video | Existing ML model serving infrastructure; familiar with inference concepts; no knowledge of Livepeer payment mechanics, capability advertisement, or staking | AI runner configured with at least one pipeline, capabilities advertised, first AI inference job received, pricing set competitively | 2 | 3 | 3 | 8 | 4 runs |
| 3 | Capital-constrained / pool node candidate | Discord thread, search for "join Livepeer without staking," referral from pool operator | GPU hardware available; insufficient LPT for solo operation or preference to avoid on-chain management | Decision made between pool path and solo path; if pool: understands connection architecture and how to contact a pool operator | 2–3 | 2 | 2–3 | 7 | 4 runs |
| 4 | Existing video operator expanding (scaling / dual mode) | Internal — already operating a video orchestrator; prompted by earnings opportunity, Discord, or AI pipeline announcement | Running video orchestrator; understands staking and reward calling; no knowledge of AI configuration surface | Dual-mode node running with AI pipelines configured and advertised; earnings from both workload types without disrupting existing setup | 2 | 2–3 | 2–3 | 7 | 4 runs |
| 5 | Live operator tuning / returning operator | Bookmark, direct URL, Discord link to specific doc, search for error message or parameter | Running node; needs a specific answer (flag value, reward cut setting, performance fix, troubleshooting step) | Specific problem resolved or targeted configuration applied | 2–3 | 2 | 2 | 6–7 | 3 runs |

**Primary persona**: Solo GPU operator (video / general path) — unanimous across all 4 runs. Drives the canonical section structure. The video transcoding path involves the most significant entry blocker (LPT staking) and establishes the foundational mechanics (active set, reward calls, pricing) that all other paths extend. The AI path is equally scored on Total but builds on the video path's structural foundation rather than replacing it.

**Self-identification**: Dedicated disambiguation section required as S1. All 4 runs independently produced a dedicated disambiguation section as the first content section. Canonical decision: dedicated section with `purpose: orient`, `pageType: navigation`. Readers arrive calling themselves "GPU operators" or "node operators" — a label that maps onto four meaningfully different setup paths (solo video, solo AI, dual mode, pool node) requiring different prerequisites, configuration, and economics. The reader cannot identify their correct path without reading content first.

**Entry blockers** (union of all runs — all carry):
- **LPT stake** (solo video path): To join the active set independently and compete for video transcoding work, an operator must hold and stake a meaningful amount of LPT. Hard-stop blocker. The section explaining what LPT is and how to acquire and stake it must appear before the section that walks through node registration and setup. The pool node path bypasses this blocker entirely. The disambiguation section must make this split visible before either path begins.
- **ETH for gas** (all on-chain paths): Reward calls, ticket redemptions, and activation transactions cost ETH gas on Arbitrum. Must be addressed before setup begins.
- **VRAM capacity** (AI inference path): AI pipelines require minimum VRAM to load models. An operator with insufficient VRAM cannot serve certain pipelines. Must be addressed in prerequisites/AI setup before model selection.
- **Publicly reachable Service URI** (all paths): An orchestrator that is not publicly reachable cannot receive work. Network and firewall configuration must be resolved before the node is registered.
- **Path ambiguity** (all personas, pre-disambiguation): Reader cannot determine correct setup path without guided disambiguation. The disambiguation section is the structural blocker-resolver for this.
- **Pool operator arrangement** (pool node path): A pool node candidate must identify and contact a pool operator before any setup steps are meaningful. This must be addressed in the pool path routing before pool-specific setup instructions.

Section order consequence: Disambiguation → prerequisites (LPT, ETH, hardware, network) → node install and registration → workload configuration → AI pipeline setup (if applicable) → verify live → operations.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have GPU hardware and have just heard about Livepeer | assess whether my hardware qualifies, what each participation path requires, and what I would realistically earn | make a go/no-go decision and identify which path fits my situation before investing any setup time |
| J2 | I've chosen a path and am ready to set up | follow a complete, verified sequence from prerequisites through first job received | have a working, registered node that is discoverable and earning without having missed a critical step |
| J3 | My node is running but I'm not getting enough work | understand how gateways select orchestrators and which variable (pricing, stake rank, performance score, capability advertisement) is causing the shortfall | adjust the correct lever and increase job volume without guessing |
| J4 | I want to add AI inference to my existing video node — or set up AI-only | configure my AI runner, set up pipelines in aiModels.json, advertise capabilities, and verify I'm receiving AI jobs | earn from AI inference jobs alongside or instead of video transcoding without breaking my existing setup |
| J5 | I'm worried about missing a reward call or setting cuts incorrectly | automate reward calling, understand the economics of reward cut and fee cut, and know what values are competitive | ensure I'm not permanently losing inflation rewards and that my delegation offer attracts sufficient stake |
| J6 | I want to scale beyond one machine or expand my architecture | understand O-T split and pool architecture, choose the right model for my situation, and implement it | grow capacity without rebuilding from scratch or creating operational fragility |
| J7 | Something on my running node changed or broke — reward call failed, performance score dropped, no work arriving | diagnose the specific cause from a structured set of checks and apply the fix | restore full operation without losing additional earnings or standing |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Understanding the network and their place in it | `discover` | Reading what an orchestrator is, what it earns, and what it requires — deciding whether to proceed |
| 2 | Choosing a participation path | `evaluate` | Comparing solo video, solo AI, dual mode, and pool node — selecting the right configuration for their hardware, stake position, and goals |
| 3 | Acquiring prerequisites | `setup` | Obtaining LPT (solo video path), bridging ETH to Arbitrum for gas, preparing hardware, confirming network and firewall configuration |
| 4 | Installing and registering the node | `setup` | Installing go-livepeer, configuring flags, registering service URI and stake on-chain, verifying public reachability |
| 5 | Configuring workload and pricing | `setup` | Setting pricePerUnit, reward cut, fee cut; configuring video-only, AI-only, or dual mode |
| 6 | Configuring AI capabilities (AI and dual-mode paths) | `build` | Writing aiModels.json, setting up AI runner, registering capabilities, verifying AI inference routing |
| 7 | Verifying the node is live and receiving work | `setup` | Confirming active set membership (video) or capability advertisement (AI); receiving and processing first job; confirming reward call succeeds |
| 8 | Operating day-to-day | `operate` | Monitoring performance score, reward call status, session volume, earnings; managing ticket redemptions; handling software updates |
| 9 | Optimising performance and earnings | `optimise` | Adjusting pricing competitiveness, improving performance score, managing delegation attractiveness via cuts, tuning AI model warmth, scaling capacity |

**On-demand**:
- Current pricePerUnit benchmark ranges and how to determine whether pricing is above gateway MaxPrice thresholds
- Active set rank: current position and total stake required to enter or maintain membership
- Reward call status: whether it succeeded this round, how to check, how to automate
- AI pipeline types currently routable, current model IDs and VRAM requirements
- CLI flag reference: flag names, defaults, and accepted values for current go-livepeer release
- Troubleshooting job routing: stake, price, performance score, connectivity
- Troubleshooting AI inference: cold start delays, model load failures, capability advertisement errors
- Reward cut / fee cut: competitive values and how to change them on-chain
- O-T split and pool architecture: how to connect additional worker machines
- Gas cost estimates for redemption and reward calls on Arbitrum
- Governance proposals affecting orchestrator economics (treasury cut rate, active set size)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage routes GPU operators and compute providers to this tab |
| Inbound | About → Orchestrators | Readers who completed a conceptual protocol overview and want to act on the supply side |
| Inbound | Community → Orchestrators | Community members directed here after expressing interest in running infrastructure |
| Inbound | Delegators → Orchestrators | Delegators evaluating whether to upgrade to running their own node |
| Outbound | Orchestrators → Delegators | Operators learning to set competitive reward cut / fee cut; understanding what delegators look for |
| Outbound | Orchestrators → Gateways | Operators wanting to understand the demand side — how gateway selection logic works, MaxPrice parameters |
| Outbound | Orchestrators → Resource HUB | CLI flag reference, protocol changelog, cross-cutting glossary, governance records |
| Outbound | Orchestrators → About | Operators wanting deeper detail on tokenomics, governance mechanics, or protocol architecture |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which path is mine? | "I have GPU hardware — am I a solo operator, a pool node, or something else? Do I need to buy LPT?" | J1 | `orient` | `navigation` | Has arrived at the tab; has GPU hardware; does not know whether they need LPT or which setup path applies | Has identified which of the four paths applies (solo video, solo AI, dual mode, pool node) and knows whether LPT acquisition is a prerequisite for their path; has navigated to the correct starting section | `discover` |
| S2 — What orchestrators do and what they earn | "Is running an orchestrator actually worth it for my hardware, time, and capital?" | J1 | `explain` | `concept` | Has been routed from S1 (solo video or dual-mode path); no prior knowledge of Livepeer economics or mechanics | Has formed a go/no-go decision based on a realistic picture of what orchestrators earn, how job routing works, what stake weight affects, and what slashing and reward call risks exist | `discover` |
| S3 — How the network pays you and routes work | "What determines whether gateways send me jobs, and how do fees and rewards actually reach me?" | J1, J3 | `explain` | `concept` | Has decided to proceed; does not yet understand the selection mechanism, payment flow, or reward mechanics | Can describe the three primary routing factors (stake rank, price vs MaxPrice, performance score), how probabilistic micropayments work, and what reward cut and fee cut affect; has decided whether active set membership matters for their chosen workload type | `evaluate` |
| S4 — Prerequisites and hardware | "What do I need before I run a single command — hardware, LPT, ETH, wallet, network access?" | J2 | `learn` | `concept` | Has decided which path to take; has not yet acquired prerequisites | Has confirmed hardware meets requirements; ETH wallet funded for Arbitrum gas; LPT acquired and staked (solo video path) or pool arrangement confirmed (pool node path); service URI reachability plan in place | `setup` |
| S5 — Get your node running | "How do I install go-livepeer, configure my flags, and register my node on-chain?" | J2 | `start` | `instruction` | All prerequisites from S4 confirmed; go-livepeer not yet installed | Has a running, publicly reachable go-livepeer node with service URI registered on-chain and reward calling configured; has received first job | `setup` |
| S6 — Set your pricing and cuts | "What price should I set for transcoding and AI inference, and what reward cut and fee cut are reasonable?" | J2, J5 | `configure` | `guide` | Node installed and registered (S5 complete); pricing and cuts not yet deliberately set | Has set pricePerUnit and pixelsPerUnit based on network benchmarks; has set reward cut and fee cut with an explicit rationale for the trade-off between personal earnings and delegation attractiveness; understands how MaxPrice on gateways filters them in or out | `setup` |
| S7 — Add AI inference pipelines | "How do I configure AI inference on my node, choose which pipelines to support, and advertise my capabilities?" | J4 | `build` | `instruction` | go-livepeer installed and running (S5 complete); wants to add or switch to AI inference; AI runner not yet configured | `[⚠ Design flag: may need to split — AI configuration surface is substantially larger than video configuration surface]` Has AI runner running with at least one configured pipeline; capabilities advertised on-chain or via webhook; at least one AI inference job successfully processed; understands warm vs cold model behaviour and VRAM constraints | `build` |
| S8 — Verify your node is live | "How do I know my node is correctly set up and actually receiving work?" | J2 | `verify` | `instruction` | Node configured with pricing and cuts set (and AI configured if applicable); not yet confirmed receiving work end-to-end | Has confirmed node is discoverable (Explorer shows correct registration); performance score is tracking; first job received; reward call succeeded this round | `setup` |
| S9 — Join as a pool node | "I don't have enough stake to go solo — how does joining a pool work, and is it right for me?" | J1, J2 | `orient` | `guide` | Identified via S1 disambiguation as pool path candidate; no setup started | Has decided whether pool participation suits their situation; if yes: understands the connection architecture (no LPT required, pool operator holds stake), how fees are shared, and has a route to contact a pool operator | `evaluate` |
| S10 — Monitor and operate day-to-day | "What should I watch, what alerts matter, and what routine tasks must I do to keep earning?" | J5, J7 | `operate` | `guide` | Node live and has processed jobs; no monitoring or operations workflow yet in place | Has a monitoring setup tracking the metrics that matter (performance score, session count, reward call status, earnings); has automated reward calling; knows the routine operational tasks and their cadence | `operate` |
| S11 — Optimise earnings and performance | "My node is running but I want more jobs, a better performance score, or more delegated stake — what levers do I have?" | J3, J5 | `optimise` | `guide` | Node operating in production with monitoring in place; wants to improve job volume, margins, or AI throughput | Has identified at least one actionable optimisation (pricing adjustment, cut setting change, stake growth plan, VRAM allocation change, pipeline prioritisation) and implemented or queued it with a framework for future adjustments | `optimise` |
| S12 — Troubleshoot common problems | "My node stopped receiving work / a reward call failed / performance score dropped / AI inference is failing — what do I do?" | J3, J7 | `troubleshoot` | `guide` | Node is live but behaving incorrectly or underperforming; operator is trying to diagnose a specific symptom | Has identified the root cause of the specific problem (stake rank, pricing above MaxPrice, URI reachability, performance score, ticket redemption failure, AI capability advertisement error) and taken corrective action; node is back in normal operation | `troubleshoot` |

**Section count**: 12 — within the 8–12 target range. Justification: the tab serves four distinct participation paths (solo video, solo AI, dual mode, pool node) across a full lifecycle from discovery through ongoing operations. S7 (AI pipelines) is the primary additional section that a video-only structure would not need; it cannot be folded into S5 without creating an unworkable mixed instruction page.

**Design flags carried**:
- `[⚠ Design flag: S7 may need to split]` — AI configuration surface (aiModels.json, warm model selection, VRAM planning, capability advertisement) is substantially longer than video configuration. Flag from Runs 1 and 4 carried. Review during detailed design.
- `[⚠ Design flag: S5 must include a clearly separated sub-path for pool nodes]` — Pool node setup is meaningfully different from solo setup (no LPT, different flags, connects to pool operator). Flag from Run 2 carried. Either a routing callout within S5 directing pool node candidates to pool-specific flags, or a split into separate pages. Pool node candidates who reach S5 without this may be blocked.
- `[⚠ Design flag: S4 must cover LPT acquisition path explicitly]` — S4 must explain how to obtain and stake LPT, not only what LPT is. If S4 only defines LPT without the acquisition path, solo video operators stall. Flag from Run 1 carried.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Solo GPU operator (video) | S1 (disambiguation) | S11 (optimisation) or S10 (ongoing operations) | None — prerequisite sections (S2, S3, S4) precede setup sections (S5, S6, S8) | S4 must explicitly cover the LPT acquisition and staking path, not only define LPT — if S4 only explains what LPT is, this persona stalls before setup begins. S3 must explain that reward calls are an active operational requirement (not passive), so this operator does not miss their first round. | None |
| AI inference specialist | S1 (disambiguation) | S11 (optimisation) or S10 (ongoing operations) | None — S7 (AI pipeline setup) is a distinct section | S3 must clarify that active set membership is not required for AI inference routing — failure to state this would cause AI-only operators to incorrectly believe LPT stake is a prerequisite. S7 must cover VRAM capacity planning before pipeline selection so this persona does not misconfigure models they cannot serve. | None |
| Pool node candidate | S1 (disambiguation) → S9 (pool node path) | S9 — their primary informational goal is met here; operational setup follows pool operator's own documentation | `[single-run flag — verify]` S5 may partially block this persona if pool node setup flags are not called out separately from solo setup | S9 must resolve the "enough stake?" decision with enough context to make a confident decision — not just route to "contact a pool operator." Must include: what pool participation means, how fees are shared, and what the connection architecture looks like. | None — handled within S9 with adequate scope |
| Existing video operator expanding to AI (dual mode) | S7 (AI pipeline setup) — skips S1–S6 as already operational | S11 (optimisation) | None — S7 is a distinct section explicitly scoped to operators with a running video node | S7 entry state must explicitly note "go-livepeer installed and running" and must not re-explain go-livepeer basics. This operator needs VRAM planning and warm model strategy content that a first-time setup section might omit. | None |
| Live operator / returning operator | Enters directly at S10 (operations) or S12 (troubleshooting) | S10 or S12 — on-demand lookup sections serve this persona without requiring prior sections | None | S12 must distinguish symptom types as separate diagnostic branches: low job volume (pricing/stake/performance), failed reward call, AI inference failures, ticket redemption failures — not a single undifferentiated troubleshooting list. | None |

**Gap resolution**: No new sections required. Three knowledge gap risks must be addressed within the relevant sections during detailed design. Pool node sub-path within S5 is the highest-priority structural flag — resolved by specifying a routing callout in S5 directing pool node candidates to pool-specific flag instructions (or splitting S5 during detailed design).

---

## Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question specific — not a topic?
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across all 4 runs?
- [x] Self-identification decision: 4-run consensus on dedicated section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags and verify flags: carried through from any run?
- [x] All personas unblocked?
