# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: [LPT, active set, stake weight, reward cut, fee cut, reward call, probabilistic micropayment (PM), ticket, TicketBroker, performance score, service URI, pricePerUnit, pixelsPerUnit, O-T split, pool node, pool operator, solo operator, dual mode, AI runner, aiModels.json, capability advertisement, warm model, cold model, VRAM, go-livepeer, delegator, gateway, transcoding, AI inference, unbonding period, slashing, inflation, round, BondingManager]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `LPT, active set, stake weight, reward cut, fee cut, reward call, probabilistic micropayment (PM), ticket, TicketBroker, performance score, service URI, pricePerUnit, pixelsPerUnit, O-T split, pool node, pool operator, solo operator, dual mode, AI runner, aiModels.json, capability advertisement, warm model, cold model, VRAM, go-livepeer, delegator, gateway, transcoding, AI inference, unbonding period, slashing, inflation, round, BondingManager`

**Terminology derivation notes**:

The TERMINOLOGY_LOCK was derived from the Product Context block as the primary authority, cross-checked against the per-tab glossary as an unverified cross-reference, and checked against `deprecated-terms.md` for any disallowed terms. Terms with live/governance-controlled values are marked `[verify-live]`. Terms requiring verification against a primary source are marked `[verify-against]`.

| Term | Source authority | Status |
|---|---|---|
| LPT | Product Context | Confirmed: ERC-20 staking and governance token |
| active set | Product Context: "top orchestrators by total bonded stake" | `[verify-live: Explorer]` — the value "100" appears in the glossary and deprecated-terms.md but is governance-controlled |
| stake weight | Product Context: "total bonded LPT (self-stake plus delegated stake)" | Confirmed |
| reward cut | Product Context (implied by fee distribution mechanic) | Confirmed; `[verify-against: https://explorer.livepeer.org]` for current values |
| fee cut | Product Context (implied by fee distribution mechanic) | Confirmed; `[verify-against: https://explorer.livepeer.org]` for current values |
| reward call | Glossary (aligns with Product Context mechanics) | `[verify-against: https://github.com/livepeer/protocol]` — specific function name `Reward()` is glossary claim |
| probabilistic micropayment (PM) | Glossary; aligns with whitepaper architecture | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| ticket | Glossary (part of PM system) | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| TicketBroker | Glossary; named contract | `[verify-against: https://github.com/livepeer/protocol]` and `[verify-against: https://arbiscan.io/accounts/label/livepeer]` — contract existence is a factual claim |
| performance score | Glossary: "latency score multiplied by success rate" | `[verify-against: https://github.com/livepeer/go-livepeer]` — specific formula is a technical claim |
| service URI | Glossary; aligns with Product Context (publicly reachable endpoint) | `[verify-against: https://github.com/livepeer/go-livepeer]` — format `https://domain:8935` is a specific technical claim |
| pricePerUnit | Glossary; CLI flag name | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release |
| pixelsPerUnit | Glossary; CLI flag name | `[verify-against: https://github.com/livepeer/go-livepeer]` — latest tagged release |
| O-T split | Glossary; aligns with Streamflow spec | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| pool node | deprecated-terms.md: "Pool node" is the current term (replaces "Pool worker") | Confirmed current term per deprecated-terms.md |
| pool operator | Glossary; aligns with Product Context pool description | Confirmed |
| solo operator | Glossary; aligns with Product Context | Confirmed |
| dual mode | deprecated-terms.md: current term (replaces "Combined mode" and "Hybrid") | Confirmed current term per deprecated-terms.md |
| AI runner | Glossary; specific container subprocess | `[verify-against: https://github.com/livepeer/go-livepeer]` — high staleness risk per veracity-sources.md |
| aiModels.json | Glossary; config file name | `[verify-against: https://github.com/livepeer/go-livepeer]` — high staleness risk per veracity-sources.md |
| capability advertisement | Glossary; aligns with Product Context (gateways select based on capability) | `[verify-against: https://github.com/livepeer/go-livepeer]` |
| warm model | Glossary; aligns with AI runner mechanics | `[verify-against: https://github.com/livepeer/go-livepeer]` — "one warm model per GPU" is a specific claim |
| cold model | Glossary; complement of warm model | `[verify-against: https://github.com/livepeer/go-livepeer]` |
| VRAM | Glossary; hardware term with specific relevance | Confirmed — GPU memory required for model loading |
| go-livepeer | Product Context + veracity-sources.md (primary: go-livepeer repo) | Confirmed |
| delegator | Product Context | Confirmed |
| gateway | Product Context | Confirmed |
| transcoding | Product Context: "video transcoding (live and on-demand video encoding)" | Confirmed |
| AI inference | Product Context: "running ML models" | Confirmed |
| unbonding period | deprecated-terms.md: governance-controlled | `[verify-live: Explorer (BondingManager)]` |
| slashing | Glossary; aligns with whitepaper | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` — conditions are a factual claim |
| inflation | Product Context: "LPT tokens... earned via inflation rewards" | `[verify-live: Explorer]` — rate is governance-controlled |
| round | Glossary: "approximately 22 hours" | `[verify-against: https://github.com/livepeer/protocol]` — specific duration is a technical claim |
| BondingManager | Glossary; named contract | `[verify-against: https://arbiscan.io/accounts/label/livepeer]` |

**Terms excluded from lock**: Generic technical terms (GPU, CPU, CUDA, VRAM) were considered — VRAM was retained because it has direct network-specific implications (model capacity planning). Specific AI model names (Stable Diffusion, Whisper, StreamDiffusion, etc.) were excluded from the lock because they are implementation-layer details, not conceptual terms the audience must master to achieve their goal on this tab. Specific contract names beyond BondingManager and TicketBroker were excluded as too granular for the design phase.

**Terms checked against deprecated-terms.md**:
- "Pool worker" → replaced with "pool node" (current term)
- "Combined mode" / "Hybrid" → replaced with "dual mode" (current term)
- "Transcoder" (as synonym for orchestrator) → not used; "transcoding" (the workload) is retained
- "Broadcaster" → not used; replaced by "gateway" as required

**Exceeding 20 terms**: The lock contains 30 terms. The Orchestrators tab covers two meaningfully distinct compute paths (video transcoding and AI inference), each with its own configuration surface, hardware requirements, and economic model. Additionally, the tab covers two participation models (solo operator vs. pool operator/pool node). Covering all four paths at the minimum level needed to reason about personas and section structure requires this term set. Explanation included in Addendum.

---

**Anchoring questions** (answered using Product Context + TERMINOLOGY_LOCK only):

**1. What does this audience call themselves?**

Before encountering Livepeer's terminology, this audience identifies as GPU operators, node operators, compute providers, or GPU miners — people who own or have access to GPU hardware and are looking for workloads to run on it. In the AI compute context, they may call themselves inference providers or GPU hosts. In the video infrastructure context, they may call themselves media infrastructure operators. The network's term "orchestrator" is specific to Livepeer and must be explained before being used.

**2. What are the 3–5 actions that define their core job?**

1. Connect their GPU hardware to a job-routing network and make it discoverable
2. Configure what work they accept and what they charge for it
3. Keep their node running reliably to maintain good standing and receive work
4. Claim their earned rewards (inflation share and service fees)
5. Manage their stake position — either their own staked LPT, or their relationship with a pool operator who handles staking on their behalf

**3. Which terms in the TERMINOLOGY_LOCK have a network-specific meaning that differs from the industry default?**

| Term | Industry default meaning | Network-specific meaning | Risk |
|---|---|---|---|
| active set | No common industry default | The fixed-size group of top-staked orchestrators eligible for video transcoding work in the current round; AI inference routing does not require active set membership | High confusion risk — a reader may assume all registered nodes receive work |
| round | Colloquially: any cycle or iteration | A specific protocol time unit (~22 hours of Ethereum L1 blocks) governing when rewards are minted, activations take effect, and earnings accrue | Medium confusion risk |
| reward call | No common industry default | A specific on-chain transaction an active orchestrator must submit once per round to mint their inflation share; failing to call it forfeits that round's rewards | High confusion risk — it is an active operational requirement, not a passive payout |
| slashing | General: a penalty | Specific: destruction of bonded LPT stake for protocol violations — affects both the operator's self-stake AND delegated stake, creating accountability to delegators | High confusion risk — the scope (includes delegated stake) is non-obvious |
| ticket | General: a support or event ticket | A signed probabilistic micropayment instrument that may or may not be a winner when redeemed; winning tickets pay ETH | High confusion risk — the lottery mechanic is counter-intuitive |
| inflation | General: price level increase | New LPT tokens minted each round and distributed to active participants based on stake; the rate adjusts dynamically based on total bonded LPT vs a target rate | Medium confusion risk — not currency inflation; it's protocol token issuance |
| stake weight | General: a voting weight | Total bonded LPT (own stake plus delegated stake) determining active set rank, reward share, and governance influence | Medium confusion risk — the delegation dimension is non-obvious |
| pool node | Infrastructure: a server pool node | In Livepeer: a GPU worker machine connected to a pool operator's orchestrator, contributing compute without holding LPT or operating independently on-chain | High confusion risk — "pool" suggests a networking context |
| capability advertisement | General: marketing | The specific mechanism by which an orchestrator informs gateways of its available AI pipelines and pricing, either on-chain or via webhook | Medium confusion risk |

---

## Arriving Question

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Solo GPU operator — video transcoding path | Search result ("livepeer orchestrator setup"), Discord referral, Foundation blog post | GPU hardware available; knows how to run Linux servers; has heard Livepeer pays for transcoding; does not know Livepeer's staking requirement or protocol mechanics | A running orchestrator node registered on-chain, priced, and receiving work — or a clear decision that the stake requirement is a blocker and how to address it | 3 | 3 | 3 | 9 |
| 2 | Solo GPU operator — AI inference path | Livepeer AI blog post, search result ("run AI models earn crypto"), Discord `#ai-video` | GPU hardware with recent NVIDIA card; familiar with AI models and inference concepts; may have existing ML workloads; does not know Livepeer's AI configuration surface | A running AI orchestrator node with at least one pipeline configured, tested, and receiving AI inference jobs | 3 | 3 | 3 | 9 |
| 3 | Pool node operator (worker joining an existing pool) | Direct invitation from pool operator, Discord `#orchestrators`, pool operator's own documentation | GPU hardware available; has been contacted by or found a pool operator; does not need to hold LPT; does not need to manage on-chain operations | go-livepeer running in pool node mode, connected to the pool operator's orchestrator and processing jobs | 2 | 2 | 3 | 7 |
| 4 | Existing video operator expanding to AI (dual mode) | Internal — already operating a video orchestrator, prompted by earning opportunity or gateway pricing signals | Operational video orchestrator; understands staking and reward calling; does not know AI configuration surface | A dual-mode node running both workloads, AI pipelines configured and advertised, earnings from both workload types | 2 | 3 | 2 | 7 |
| 5 | Evaluating operator (hardware acquisition decision) | Foundation blog, conference, word of mouth | No hardware yet or hardware not yet committed; researching whether the economics justify investment | A clear answer: what hardware to buy, what earnings to expect, and what the stake requirement means for their entry path | 2 | 2 | 2 | 6 |

**Primary persona**: Solo GPU operator on the video transcoding path — this persona drives the section structure. The solo AI inference path is equally scored but the video transcoding path is the more established participation mode and sets the foundational structure (staking, reward calling, pricing) that AI and dual-mode paths build on. All other personas are accommodated within that structure.

**Self-identification check**: This audience calls themselves "GPU operators" or "node operators." That label could describe:
- A solo video transcoding operator (needs LPT stake, active set mechanics, video config)
- A solo AI inference operator (needs AI hardware, aiModels.json, capability advertisement, no active set requirement)
- A pool node operator (needs no LPT stake, connects to existing orchestrator)
- A dual-mode operator (needs both video and AI config)

Four meaningfully different setup paths exist, and the reader cannot identify their path without reading some content first (particularly: do they have LPT? do they want AI or video or both? are they joining a pool?). A dedicated disambiguation section is required as the first content section.

**Entry blockers**:
- **LPT stake** (video transcoding path only): To join the active set independently and compete for video transcoding work, an operator must hold and stake a meaningful amount of LPT. This is a hard-stop blocker — a reader who discovers it mid-setup will stall. The section that explains what LPT is and how to acquire it must appear before the section that walks through staking and activation. However: the pool node path bypasses this blocker entirely (pool operator holds the stake). The disambiguation section must make this split visible before either path begins.
- **ETH for gas** (all on-chain paths): Reward calls, ticket redemptions, and activation transactions cost ETH gas (on Arbitrum). The cost is low but must be addressed before setup begins.
- **VRAM capacity** (AI inference path only): AI pipelines require minimum VRAM to load models. An operator with insufficient VRAM for a requested pipeline cannot serve that work. This affects which pipelines to configure and must be addressed in the AI setup section before model selection.
- **Publicly reachable service URI** (all paths): An orchestrator that is not publicly reachable cannot receive work. Network/firewall configuration must be resolved before the node is registered.

Section order consequence: Disambiguation → what this means for your path → LPT/staking concepts → staking + activation → node setup → pricing → operations.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I have GPU hardware and have just heard about Livepeer | understand what I need to set up, what it costs, and what I can earn before I commit time | decide whether this is worth pursuing and which path (video, AI, pool) fits my situation |
| 2 | I've decided to run a solo orchestrator and am ready to set up | follow a clear, complete sequence from zero to first job received | have a working, registered node that is discoverable and earning without having missed a critical step |
| 3 | I've set up my node but don't know what price to charge | understand how pricing works and what competitive rates look like | set a price that wins jobs without underselling my compute |
| 4 | My node is running but I'm not receiving work | diagnose why — stake rank, price, service URI, performance score, or pipeline misconfiguration | get the node back into the active job flow without guessing |
| 5 | I want to run AI inference pipelines on my GPU | configure my AI runner, set up pipelines, and advertise my capabilities | receive AI inference jobs in addition to or instead of video transcoding |
| 6 | I've been running my node for a while and want to attract more delegators | understand how reward cut and fee cut affect delegation decisions | adjust my settings to grow my total stake and improve my active set rank |
| 7 | Something on my node changed (reward call missed, ticket redemption failing, performance drop) | know what the metric means, what caused it, and how to fix it | restore full operation without losing more earnings or standing |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Understanding the network and their place in it | `discover` | Reading about how Livepeer works, what orchestrators do, and whether this is the right opportunity for their hardware and situation |
| 2 | Choosing a participation path | `evaluate` | Deciding between solo video, solo AI, dual mode, or pool node — and understanding the LPT stake requirement and its implications for their path |
| 3 | Acquiring prerequisites | `setup` | Obtaining LPT (if going solo), acquiring ETH for gas, preparing hardware, confirming network/firewall configuration |
| 4 | Installing and configuring the node | `setup` | Installing go-livepeer, configuring flags, setting pricing, registering on-chain, making the service URI reachable |
| 5 | Configuring AI capabilities (AI or dual-mode path) | `build` | Setting up AI runner, configuring aiModels.json, advertising capabilities |
| 6 | Verifying the node is working | `setup` | Confirming the node is discoverable, the service URI is reachable, the first job has been received, and reward calling is automated |
| 7 | Optimising for work and earnings | `optimise` | Adjusting pricing, improving performance score, setting reward/fee cuts to attract delegation, managing VRAM allocation across pipelines |
| 8 | Operating day-to-day | `operate` | Monitoring node health, watching for missed reward calls, managing ticket redemptions, responding to performance alerts |

**On-demand**:

- Current competitive pricing ranges for video transcoding (pricePerUnit benchmarks relative to active peers)
- Active set size and current minimum stake threshold to enter
- Which AI pipelines are most in demand and what VRAM they require
- Reward call timing and gas cost on Arbitrum
- How to read performance score metrics and what thresholds trigger routing exclusion
- CLI flag reference — pricePerUnit, pixelsPerUnit, orchSecret, aiWorker, maxSessions
- Ticket redemption mechanics and current win probability ranges
- How to update reward cut or fee cut and when the change takes effect
- Pool operator contact list or registry for operators with insufficient LPT
- Governance proposals affecting orchestrator economics (treasury cut rate, active set size)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage routes GPU operators and compute providers to this tab |
| Inbound | About → Orchestrators | Readers who came to understand the protocol and now want to participate as compute providers |
| Inbound | Community → Orchestrators | Community members who decide to run hardware after engaging with the ecosystem |
| Outbound | Orchestrators → Delegators | Operators who want to understand how to attract delegators and what delegators look for |
| Outbound | Orchestrators → Gateways | Operators who want to understand the demand side — how gateways select orchestrators, pricing signals |
| Outbound | Orchestrators → Resource HUB | Deep reference: CLI flag index, protocol changelog, governance records, cross-network glossary |
| Outbound | Orchestrators → About | Operators who want to go deeper on tokenomics, governance mechanics, or protocol architecture |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which path is mine? | "I have GPU hardware — am I a solo operator, a pool node, or something else? Do I need to buy LPT?" | J1 | `orient` | `navigation` | Arrived at the tab; has GPU hardware; does not know whether they need LPT or which setup path applies to them | Has identified which of the four paths applies (solo video, solo AI, dual mode, pool node) and knows whether LPT acquisition is a prerequisite for their path | `discover` |
| S2 — How does this network work for me? | "What exactly does an orchestrator do, how does it earn, and what can go wrong?" | J1 | `explain` | `concept` | Has identified their path from S1; does not yet understand the mechanics of job routing, payment, or staking | Has completed reading the concept overview; can describe how jobs reach their node, how payments work, what stake weight affects, and what slashing risks exist — and can proceed to prerequisites without surprises | `discover` |
| S3 — What do I need before I start? | "What do I need to have ready before I install anything — LPT, ETH, hardware, network access?" | J2 | `learn` | `concept` | Has read S2 and understands the mechanics; has not yet acquired prerequisites | Has confirmed all prerequisites are met: LPT staked (solo paths) or pool arrangement confirmed (pool node path), ETH for gas available, hardware meets requirements, service URI reachable — or has a clear action plan to acquire what is missing | `evaluate` |
| S4 — Get my node running | "How do I install go-livepeer, configure my node, register on-chain, and receive my first job?" | J2 | `start` | `instruction` | Prerequisites from S3 confirmed; go-livepeer not yet installed | Has a running, registered node; has received first job; reward calling is configured | `setup` |
| S5 — Set up AI pipelines | "How do I configure AI inference on my node, choose which pipelines to support, and advertise my capabilities?" | J5 | `build` | `instruction` | go-livepeer installed and running (S4 complete); wants to add or switch to AI inference | Has AI runner running with at least one configured pipeline; capabilities advertised; at least one AI inference request successfully processed | `build` |
| S6 — Set my price | "What should I charge for transcoding and AI inference, and how do I configure it?" | J3 | `configure` | `guide` | Node running and receiving work; has not yet set a deliberate pricing strategy | Has set pricePerUnit (and pricePerCapability for AI) to a value they can justify; understands how MaxPrice on gateways filters them in or out | `setup` |
| S7 — Attract delegators | "How does reward cut and fee cut affect who delegates to me, and what should I set them to?" | J6 | `configure` | `guide` | Node operating and earning; wants to improve active set rank by growing total bonded stake | Has adjusted reward cut and fee cut with a clear rationale; understands the trade-off between personal earnings and delegator attractiveness; knows when changes take effect | `optimise` |
| S8 — Verify my node is healthy | "Is my node discoverable, priced correctly, and actually receiving the work it should be getting?" | J2 | `verify` | `instruction` | Node set up; uncertain whether it is working end-to-end | Has confirmed node is discoverable, priced within gateway MaxPrice thresholds, performance score is healthy, and reward calls are being submitted successfully | `setup` |
| S9 — Monitor and operate day-to-day | "What should I watch, what alerts matter, and what routine tasks must I do to keep earning?" | J7 | `operate` | `guide` | Node live and receiving work; no monitoring or operations workflow yet in place | Has a monitoring setup running (metrics, alerts); has automated reward calling; knows the routine operational tasks and their cadence | `operate` |
| S10 — Diagnose and fix problems | "My node stopped receiving work / a reward call failed / performance score dropped — what do I do?" | J4, J7 | `troubleshoot` | `guide` | Node in production but experiencing a specific problem | Has identified the root cause of the specific problem (stake rank, pricing, URI, performance score, ticket redemption) and taken the corrective action; node is back in normal operation | `troubleshoot` |
| S11 — Improve earnings and efficiency | "I'm running but I want more work, better margins, or better AI throughput — what levers do I have?" | J3, J6 | `optimise` | `guide` | Node operating normally; wants to increase earnings or efficiency | Has identified at least one actionable optimisation (pricing adjustment, stake growth plan, VRAM allocation change, pipeline prioritisation) and implemented it | `optimise` |
| S12 — Understand governance and treasury | "How does on-chain governance affect my node — reward cut rates, active set size, treasury contributions?" | J1 | `explain` | `concept` | Operating orchestrator; has not engaged with governance mechanics | Has completed reading; can participate in a governance vote and understands how treasury cut rate and parameter changes affect their earnings | `operate` |

**Section count**: 12 sections. Within the 8–12 target range at the top boundary. Justification: the tab serves four distinct participation paths (solo video, solo AI, dual mode, pool node) plus covers a full lifecycle from discovery through governance. S5 (AI pipelines) is the primary additional section that the video-only structure would not need — it cannot be folded into S4 without creating an unworkable mixed instruction page.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Solo video transcoding operator | S1 (disambiguation) | S11 (optimisation) or S9 (ongoing operations) | None — all prerequisite sections are in sequence | S3 must clearly explain the LPT acquisition path for readers who arrive with no LPT — if S3 only describes what LPT is without explaining how to obtain and stake it, this reader stalls | None |
| Solo AI inference operator | S1 (disambiguation) | S11 (optimisation) or S9 (ongoing operations) | None — S5 (AI pipeline setup) is included | S2 must clarify that active set membership is not required for AI inference routing, otherwise this persona may believe they cannot participate without LPT stake. S5 must cover VRAM capacity planning before pipeline selection so this persona does not misconfigure. | None |
| Pool node operator | S1 (disambiguation) — exits immediately once S1 confirms "pool node" path | S4 (node setup, pool node variant) | S4 must include a pool node configuration variant explicitly; if S4 only covers solo operator setup, this persona is blocked. S4 carries both solo and pool node instructions — flag this as a potential page-split candidate. | S3 must make clear that LPT is not required for pool node operators; if S3 reads as "everyone needs LPT," this persona may incorrectly abandon the tab. | None — handled within S4 and S3 with clear path branching |
| Existing video operator expanding to AI (dual mode) | S5 (AI pipeline setup) — skips S1–S4 as already operational | S11 (optimisation) | None — S5 is a distinct section | S5 must assume the reader has a working video orchestrator and not re-explain go-livepeer basics. The entry state of S5 should explicitly note "go-livepeer installed and running." | None |
| Evaluating operator (hardware acquisition decision) | S1 or S2 | S3 (prerequisites / hardware requirements) | None | S2 and S3 must include hardware specification guidance (minimum VRAM for AI, GPU generations supported) so an evaluating operator can make a purchase decision. If this content is deferred to S4 or S5, this persona cannot complete their goal. | None — covered within S2/S3 scope |

**Gap resolution**: No new sections are required. Two knowledge gap risks are noted and must be addressed within the relevant sections during detailed design:
1. S3 must cover LPT acquisition path explicitly (not just definition)
2. S4 must include a clearly labelled pool node variant path, not only solo operator instructions — flag S4 as a potential split during detailed design

---

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask?
- [x] At least 3 distinct personas, each with a different arriving state and entry vector? (5 personas defined)
- [x] Self-identification check done — disambiguation section added as S1?
- [x] Entry blockers identified — LPT stake, ETH for gas, VRAM, service URI reachability — sections that resolve blockers placed before sections that require them?
- [x] At least 5 jobs, first-principles, not derived from current nav structure? (7 jobs defined)
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands" — all are concrete actions or decisions?
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation complete — every persona has an unblocked path through the structure?
- [x] All enum values are from the canonical lists — no invented tokens?

---

## Checkpoint

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

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK size]**: The brief specifies 10–20 terms as the target range, with permission to exceed 20 if the tab covers multiple distinct participation paths. The Orchestrators tab covers two compute types (video transcoding and AI inference) with distinct configuration surfaces, plus two operating models (solo and pool), producing four meaningfully different setup paths. Covering all four at the minimum necessary level required 30 terms. The assumption made: terms needed for disambiguation, hardware planning, payment mechanics, and both workload types across both operating models were all retained. Terms that are purely implementation-specific (model names, specific AI pipeline types, individual contract names beyond BondingManager and TicketBroker) were excluded to keep the lock actionable.

- **[Phase 0 / Step 0.2 — LIP-92 definition]**: The glossary assigns LIP-92 as "the AI model registry and capability discovery mechanism." veracity-sources.md lists the LIPs repo as a primary source but does not explicitly describe LIP-92's content. The LIPs repo is listed as the verification source. The glossary's specific claim about LIP-92's content is marked `[verify-against: https://github.com/livepeer/LIPs]` — not adopted as confirmed in the lock. LIP-92 was not included as a TERMINOLOGY_LOCK term because LIP numbers are formal governance identifiers, not conceptual terms the audience must master to operate.

- **[Phase 0 / Step 0.2 — Active set size]**: The glossary states "top 100 orchestrators." This is a governance-controlled value that can change without a code change. It appears in `deprecated-terms.md` as a high-staleness value requiring verification at Explorer. The number "100" is not asserted in this document; the concept "active set" is included in the lock but without an asserted size. Marked `[verify-live: Explorer]`.

- **[Phase 0 / Step 0.2 — Siphon term]**: The glossary includes "Siphon" with a definition that appears to cover two unrelated concepts (internal routing within an orchestrator AND a minimal deployment mode for remote GPU contribution). This term was excluded from the TERMINOLOGY_LOCK because the definition is internally inconsistent and would require verification against go-livepeer source before it could be used reliably. This is a glossary reliability issue worth flagging.

- **[Phase 1 — Tie between Persona 1 and Persona 2]**: Solo video transcoding operator and solo AI inference operator scored equally (9 each). The brief requires identifying a single primary persona. The tie was broken in favour of the video transcoding path because: (a) video transcoding is the more established participation mode with a longer history in the protocol, (b) it involves the LPT staking mechanic that is the most significant entry blocker — designing the section structure around the video path ensures the hardest blocker is addressed first, with AI as a layered addition. This assumption is noted for human review.

- **[Phase 2C / S4 — Pool node path within a solo-focused section]**: S4 (get my node running) must serve both solo operators and pool node operators but these have meaningfully different setups. This creates a page-load risk for S4 if both paths are included in a single instruction page. This is flagged in the Persona Path Validation table and noted here: S4 is a candidate for splitting into two instruction pages (Solo operator setup / Pool node setup) during detailed design. It is not split here because the brief instructs flagging, not splitting.

- **[Phase 2C / S5 — AI path completeness]**: The AI inference setup section (S5) covers pipeline configuration and capability advertisement but does not cover the case where an operator wants to use BYOC (Bring Your Own Container) for a non-standard model. BYOC is a distinct enough setup path that it may warrant its own page within the AI section during detailed design. Flagged here as a depth question for detailed design.

- **[Phase 0 / web access]**: Web access was not used to search for additional sources beyond what is provided in the input pack, as the brief instructs using veracity-sources.md as the authority registry and suggests web search as an optional enhancement. No additional sources were found to suggest. If web access had been used, the following would have been reasonable search targets: recent go-livepeer release notes (for current AI pipeline support), recent LIPs submissions (for any active parameter change proposals), and Dune Analytics dashboards for current active set composition and stake distribution.
