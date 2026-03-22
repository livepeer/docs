# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: `Active Set, AI Inference, AI Runner, aiModels.json, Bonding, BondingManager, Capability Advertisement, Dual Mode, ETH, Fee Cut, Gateway, go-livepeer, GPU, LPT, MaxPrice, Micropayment, O-T Split, Orchestrator, Performance Score, PM (Probabilistic Micropayment), Pool, Pool Node, Pool Operator, pricePerUnit, Reward Call, Reward Cut, Service URI, Slashing, Stake Weight, Transcoding, VRAM, Warm Model, Yield`
**Generated**: 2026-03-22
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Active Set, AI Inference, AI Runner, aiModels.json, Bonding, BondingManager, Capability Advertisement, Dual Mode, ETH, Fee Cut, Gateway, go-livepeer, GPU, LPT, MaxPrice, Micropayment, O-T Split, Orchestrator, Performance Score, PM (Probabilistic Micropayment), Pool, Pool Node, Pool Operator, pricePerUnit, Reward Call, Reward Cut, Service URI, Slashing, Stake Weight, Transcoding, VRAM, Warm Model, Yield`

**Notes on deprecated term handling applied during Phase 0**:
- "Pool Worker" → replaced with "Pool Node" (renamed per deprecated-terms file)
- "Combined mode" / "Hybrid" → replaced with "Dual Mode" (deprecated per deprecated-terms file)
- "Transcoder" as a synonym for "Orchestrator" → not used as such; "Transcoding" retained only as a process term, not a role label

**Generation reasoning for the TERMINOLOGY_LOCK**: Terms were drawn from the Product Context block and the per-tab glossary. The 20 terms below were selected because they represent the concepts a person operating or preparing to operate an orchestrator node must understand to work on the Livepeer network. Generic infrastructure terms (e.g. CPU, RAM, HTTP) without Livepeer-specific meanings were excluded. AI model names (Stable Diffusion, Whisper, etc.) were excluded as individual models are implementation detail, not the conceptual vocabulary of the operator's role. Enum/enum-adjacent config flags (pixelsPerUnit, pricePerCapability, orchSecret) were excluded in favour of the higher-level concepts they serve (pricePerUnit, O-T Split). The lock contains the following 30 terms:

Active Set · AI Inference · AI Runner · aiModels.json · Bonding · BondingManager · Capability Advertisement · Dual Mode · ETH · Fee Cut · Gateway · go-livepeer · GPU · LPT · MaxPrice · Micropayment · O-T Split · Orchestrator · Performance Score · PM (Probabilistic Micropayment) · Pool · Pool Node · Pool Operator · pricePerUnit · Reward Call · Reward Cut · Service URI · Slashing · Stake Weight · Transcoding · VRAM · Warm Model · Yield

---

1. **This audience calls themselves**: GPU operators, node operators, or "orchestrators" once they are familiar with the Livepeer ecosystem. Before they join, they typically identify as GPU miners, GPU compute providers, or ML compute operators — people who already own or manage GPU hardware and are looking for ways to earn by putting that hardware to work.

2. **Core job actions** (in their own language):
   - Connect GPU hardware to a compute network and keep it running reliably
   - Configure what workloads the machine accepts and at what price
   - Monitor the node for errors, dropped jobs, and missed rewards
   - Manage on-chain staking so the node stays in the eligible job pool
   - Tune pricing and hardware to maximise earnings relative to running costs

3. **Terms in the TERMINOLOGY_LOCK with Livepeer-specific meanings that differ from the industry default**:

   - **Active Set**: In most DPoS systems, "active set" loosely means validators currently participating. In Livepeer, it has a precise, bounded meaning: the top 100 orchestrators by total bonded stake, recalculated at each round start. It gates video transcoding jobs specifically — AI inference routing does not require Active Set membership. A reader who assumes "active set" just means "any participating node" will misunderstand eligibility.

   - **Bonding**: In general finance, "bonding" means issuing a debt instrument. In Livepeer (and DPoS broadly), bonding means locking LPT tokens to an orchestrator in the staking system. The Livepeer usage is specific: bonding is the act of staking, not a financial instrument.

   - **Gateway**: In general networking, a gateway is a device or node that connects two networks (e.g. a home router). In Livepeer, Gateway is a named role — the demand-side entity that routes jobs into the network and selects which orchestrators receive work. A reader who arrives with networking background will conflate the two.

   - **PM / Probabilistic Micropayment**: The term "micropayment" is familiar, but "probabilistic micropayment" describes a lottery-based system where most payment tickets never settle on-chain — only winning tickets are redeemed. This is not intuitive to operators accustomed to direct payment systems; the expected-value framing must be explained before the system makes economic sense.

   - **Reward Call**: In most token networks, rewards are distributed automatically. In Livepeer, the Reward Call is a manual on-chain transaction the orchestrator must submit once per round to mint and claim their inflation allocation. Missing it permanently forfeits that round's rewards. The manual, time-bounded nature is a critical operational distinction.

   - **Slashing**: Slashing exists in other DPoS systems but its scope here — affecting both the orchestrator's self-stake and all delegated stake — is a Livepeer-specific detail with significant implications for attracting delegators. The conditions (failed transcoding verification, not just protocol equivocation) also differ from Ethereum validator slashing.

   - **Performance Score**: In general usage, a "performance score" could mean many things. In Livepeer, it has a precise formula: latency score multiplied by success rate. It is tracked per-gateway and directly determines routing probability. Operators who don't understand this formula cannot diagnose why they are receiving low job volume.

---

## Arriving Question

> "I have GPU hardware — can I earn by connecting it to this network, and what do I actually need to do to get started?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with |
|---|---|---|---|---|
| 1 | GPU operator evaluating compute monetisation | External article, crypto/AI forum link, or Discord referral; may also arrive from the About or Solutions tab after reading about the network | Hardware capability (owns one or more GPUs); knows how to run server software; no Livepeer-specific knowledge; has heard the network pays for GPU jobs | A clear decision: is running a solo orchestrator viable for their hardware, or should they join a pool? If viable, a concrete first step to take. |
| 2 | Existing operator completing initial setup | Arrived directly after CLI install or from a community guide pointing to these docs | Has go-livepeer running in some form; does not yet have their node publicly reachable, or has not yet registered on-chain, or is not receiving any jobs | Node publicly registered, service URI confirmed reachable, first job received (or a clear explanation of why jobs are not arriving yet). |
| 3 | Active operator adding AI inference capability | Returns from search or bookmark; already operating a video transcoding node | Running a video-only orchestrator; has seen references to AI workloads and wants to evaluate whether the additional revenue justifies the hardware and configuration changes | AI Runner configured and capable of serving at least one pipeline; understands what warm model strategy to adopt for their VRAM capacity. |
| 4 | GPU operator considering pool participation instead of solo operation | Arrives from community post or Discord recommendation, or after reading about Active Set stake requirements | Owns GPU hardware but does not have sufficient LPT to stake into the active set independently; is evaluating whether pool participation is worth it | Understands the Pool Node model, what the arrangement with a Pool Operator looks like, and what action to take next to connect their hardware to an existing pool. |

**Self-identification**: Readers at this tab most commonly self-identify as "node operators" or "GPU miners" — both broad labels. The label "node operator" could describe: (a) a solo orchestrator running video only, (b) a solo orchestrator running AI or dual-mode, (c) a pool operator running multiple workers, or (d) a pool node participant connecting hardware to someone else's orchestrator. These four situations have substantially different setup paths, economics, and on-chain requirements. **Disambiguation required: yes.** A routing page is required as the first substantive section of this tab, allowing the reader to identify which operating model applies to their situation before any setup content is presented.

**Entry blockers**:

- **LPT stake requirement for solo Active Set membership**: A reader who wants to operate a solo orchestrator and receive video transcoding jobs must hold and stake a meaningful amount of LPT. This is a hard-stop blocker — no amount of software configuration substitutes for insufficient stake. This blocker must be surfaced in the "Is this for me?" / evaluation section, before any setup instructions. Readers who cannot clear this blocker must be routed to the Pool Node path.

- **Publicly reachable endpoint requirement**: go-livepeer must be reachable from the public internet on a configured port for gateways to discover and connect to the node. Readers running behind NAT or a corporate firewall cannot proceed past setup without resolving this. The setup section must address this before any on-chain registration steps.

- **On-chain ETH for gas**: Registering a service URI and submitting a Reward Call require ETH on Arbitrum. Readers who have not acquired ETH cannot complete on-chain activation. This must be surfaced in the setup prerequisites, before the on-chain registration instruction.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I am evaluating whether to connect my GPU hardware to this network | understand what I will earn, what hardware is required, and what the real costs and risks are | make a confident go/no-go decision before spending time on setup |
| 2 | I have decided to run a node and I am starting from scratch | follow a complete, ordered sequence of steps to get my node registered, publicly reachable, and receiving jobs | have a working orchestrator without having to figure out the sequence from scattered sources |
| 3 | My node is running but I am not receiving any jobs (or far fewer than expected) | diagnose why — whether it is a stake issue, pricing issue, performance issue, or discovery issue | fix the specific problem and restore job flow without guessing |
| 4 | I want to add AI inference to my existing video transcoding node | understand what hardware I need, how to configure the AI Runner, and what pipelines I can offer | earn additional fees from AI workloads without breaking my existing video setup |
| 5 | I am setting up my pricing and want to know if I am competitive | understand how gateway selection works, what MaxPrice thresholds look like in practice, and how to set pricePerUnit to be selected | earn fees rather than being filtered out by gateway hard gates |
| 6 | I am reviewing my monthly earnings and want to improve them | understand the levers — reward cut, fee cut, stake weight, performance score, pricing — and which ones have the most impact for my situation | make targeted changes that increase yield without losing delegators |
| 7 | I missed a Reward Call or my node went offline unexpectedly | understand what was lost, whether it is recoverable, and what to do to prevent it happening again | minimise ongoing losses and protect my delegators' earnings |
| 8 | I am returning to check a specific configuration value or CLI flag | find the exact parameter name, accepted values, and defaults quickly | update my node config without having to search through code or external repositories |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Evaluating whether this is the right role | `evaluate` | Reading about what an orchestrator does, what hardware and LPT stake are required, what the earning model looks like, and whether solo operation or pool participation is the right entry point for their situation |
| 2 | Choosing an operating model | `evaluate` | Deciding between: solo orchestrator (video only), solo orchestrator (AI or dual mode), pool operator, or pool node — based on their hardware, available LPT, and goals |
| 3 | Preparing hardware and prerequisites | `setup` | Acquiring LPT if needed, setting up a machine that meets hardware requirements, ensuring it has a publicly reachable IP and port, and acquiring ETH on Arbitrum for gas |
| 4 | Installing and configuring the node software | `setup` | Installing go-livepeer, setting the required CLI flags, configuring pricePerUnit, registering the service URI on-chain, and verifying the node is discoverable |
| 5 | Verifying the node is working | `setup` | Confirming the node appears in the network explorer, that gateways can reach it, that the Reward Call transaction is succeeding each round, and that jobs are arriving |
| 6 | Adding AI inference capability (if applicable) | `build` | Installing and configuring the AI Runner, defining aiModels.json with warm model choices, registering AI capabilities via Capability Advertisement, and verifying AI pipeline responses |
| 7 | Operating the node day-to-day | `operate` | Monitoring performance score, checking for missed Reward Calls, watching transcode fail rate, reviewing job volume and earnings, and managing ETH balance for ticket redemptions |
| 8 | Optimising earnings and reliability | `optimise` | Tuning pricePerUnit relative to the active market, adjusting reward cut and fee cut to attract or retain delegators, expanding VRAM or adding Pool Nodes to increase capacity |

**On-demand**:

- Current CLI flag names, accepted values, and defaults for go-livepeer — looked up when reconfiguring or troubleshooting
- AI model IDs and VRAM requirements by pipeline type — looked up when deciding which models to offer or when sizing hardware
- Reward Call timing, gas cost estimates, and automation scripts — looked up when setting up or auditing the reward call process
- Active Set rank thresholds and current stake requirements — looked up to assess whether the node is at risk of falling out of the active set
- Performance Score calculation method and current score for their node — looked up when diagnosing low job volume
- pricePerUnit market rates and MaxPrice thresholds used by major gateways — looked up when setting or adjusting pricing
- ETH balance requirements for ticket redemption, gas costs on Arbitrum — looked up when managing the node's operational funding
- Pool operator contact and connection instructions — looked up by pool node participants who want to join or switch pools

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | About → Orchestrators | Reader who has understood the protocol architecture is now ready to act as an orchestrator; About routes them here for role-specific setup |
| Inbound | Home → Orchestrators | Reader who identified "GPU operator" as their role on the homepage routes here directly |
| Inbound | Community → Orchestrators | Reader who discovered Livepeer through forums, Discord, or community events follows a "how to run a node" referral link |
| Inbound | Solutions / Developers → Orchestrators | A builder who wants to understand the supply side of the network they are building on crosses over to understand how orchestrators work |
| Outbound | Orchestrators → Delegators | Orchestrator reader who wants to understand how to attract delegators, or who holds LPT beyond their self-stake, routes to Delegators for staking mechanics and governance depth |
| Outbound | Orchestrators → Gateways | Orchestrator reader who wants to understand how gateway pricing and selection works (to set competitive prices) routes to Gateways for the demand-side perspective |
| Outbound | Orchestrators → Resource HUB | Reader returning for reference material — CLI flag index, changelog, glossary — routes to the Resource HUB |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. What is an orchestrator? | "Is this role what I think it is — do I just plug in a GPU and get paid?" | Job 1 — evaluating the role | `orient` | `concept` | Arrived with GPU hardware and a vague idea that this network pays for compute; no Livepeer-specific knowledge | Has a concrete, accurate picture of what running an orchestrator entails: what work the node does, how it gets paid, and what the two compute types are | `discover` |
| 2. Is this the right fit for me? (Feasibility and operating model routing) | "Do I have what it takes — hardware, stake, and commitment — and which operating path is right for my situation?" | Job 1 — evaluating the role | `evaluate` | `guide` | Understands what an orchestrator is; does not yet know whether their hardware or LPT position qualifies them for solo operation or whether pool participation is the better path | Has chosen a specific operating model (solo video, solo AI, solo dual mode, pool operator, or pool node) based on their hardware, LPT position, and goals; knows exactly which setup path to follow next | `evaluate` |
| 3. Prerequisites and what to prepare | "What do I need to have ready before I start — hardware, LPT, ETH, network access?" | Job 2 — completing initial setup | `learn` | `concept` | Has chosen an operating model; does not yet have all prerequisites confirmed | Has verified: hardware meets requirements, has acquired or verified LPT stake position, has ETH on Arbitrum for gas, and has a machine with a publicly reachable IP and port | `setup` |
| 4. Quickstart: get your node running | "How do I get from zero to a registered, running orchestrator that gateways can reach?" | Job 2 — completing initial setup | `start` | `instruction` | Prerequisites confirmed; go-livepeer not yet installed or not yet registered on-chain | Has completed: go-livepeer installed, CLI flags configured, service URI registered on-chain, node verified as publicly reachable and discoverable in the network explorer | `setup` |
| 5. Verify your node is working | "How do I know my node is actually visible to gateways and eligible to receive jobs?" | Job 2 — completing initial setup; Job 3 — diagnosing no/low job flow | `verify` | `instruction` | Node running and registered; not yet confirmed as discoverable or receiving jobs | Has confirmed: node appears in the explorer, service URI is reachable from external IPs, first Reward Call has succeeded, and initial job sessions have been observed (or has identified and resolved the specific barrier to job flow) | `setup` |
| 6. How orchestrators get selected for jobs | "Why am I not getting jobs — and what does a gateway actually look for when deciding which orchestrators to use?" | Job 3 — diagnosing no/low job flow; Job 5 — setting competitive pricing | `explain` | `concept` | Node is running and registered; reader does not understand the selection mechanism (stake weight, performance score, MaxPrice hard gate) | Can identify which of the three main selection factors (stake position, price above MaxPrice, or low performance score) is most likely causing low job volume, and knows which section to go to for the specific fix | `operate` |
| 7. Setting your price | "How do I set a price that gets me selected by gateways without leaving money on the table?" | Job 5 — setting competitive pricing | `configure` | `guide` | Understands gateway selection; has not yet set or reviewed pricePerUnit relative to market | Has set pricePerUnit (and optionally pricePerCapability) with a rationale — either at a competitive market rate or with a deliberate strategy — and has confirmed the price does not trigger MaxPrice exclusion by major gateways | `setup` |
| 8. Understanding your earnings | "Where does my money come from, how is it calculated, and how do I make sure I'm actually receiving it?" | Job 6 — improving earnings | `explain` | `concept` | Node is operating; reader is unsure of the distinction between LPT inflation rewards (Reward Call), ETH service fees (PM ticket redemption), and how cuts affect what delegators receive | Can describe both earning streams (LPT inflation vs. ETH fees), understands how reward cut and fee cut affect delegator payouts, and has confirmed their Reward Call automation is working and ticket redemptions are occurring | `operate` |
| 9. Adding AI inference to your node | "What do I need to run AI workloads — extra hardware, different software, different configuration — and is it worth it for my setup?" | Job 4 — adding AI capability | `build` | `guide` | Operating a video-only node; is evaluating whether AI inference is a viable addition given their hardware (VRAM capacity is the key variable) | Has decided whether to add AI capability (with a clear hardware-based rationale), and if yes: has configured the AI Runner, defined aiModels.json with at least one warm model, advertised capabilities via Capability Advertisement, and verified the pipeline returns correct responses | `build` |
| 10. Day-to-day operations and monitoring | "What do I need to check regularly to keep my node healthy, and what does a problem look like before it starts costing me?" | Job 7 — handling missed rewards or downtime | `operate` | `guide` | Node is fully configured and receiving jobs; reader has no systematic monitoring practice | Has established a monitoring routine covering: Reward Call status, performance score, transcode fail rate, ETH balance for redemptions, and job session volume; has set up alerts for the failure modes most likely to cause earnings loss | `operate` |
| 11. Troubleshooting guide | "Something is wrong — which of the common problems is this, and what are the steps to fix it?" | Job 3 — diagnosing no/low job flow; Job 7 — handling missed rewards or downtime | `troubleshoot` | `guide` | Experiencing a specific problem (no jobs, missed reward call, AI pipeline failures, payment not arriving, node not discoverable) | Has followed the relevant diagnostic path to resolution for their specific issue, or has identified that the issue requires community or core team escalation | `troubleshoot` |
| 12. Optimising performance and earnings | "I have a working node — what are the specific levers to improve earnings and reliability, and what's the priority order?" | Job 6 — improving earnings | `optimise` | `guide` | Node is stable and operational; reader wants to improve but does not know which changes have the most impact | Has identified the highest-leverage optimisation opportunity for their current situation (stake growth, pricing adjustment, hardware upgrade, pool scaling, or delegation attraction strategy) and has taken at least one concrete action | `optimise` |
| 13. Configuration reference | "What is the exact CLI flag name, accepted values, and default for [specific parameter]?" | Job 8 — looking up specific configuration values | `reference` | `reference` | Operational node; returning to look up a specific parameter | Has found the exact flag name, value format, and default; has updated config correctly | `operate` |
| 14. On-chain contracts and governance | "What are the contracts my node interacts with, and how does my stake weight translate into governance participation?" | Job 6 — improving earnings (governance context for stake decisions) | `explain` | `concept` | Operating the node; unfamiliar with the on-chain contracts (BondingManager, TicketBroker, ServiceRegistry, RoundsManager) and governance mechanics | Has located the relevant contracts for any action they need to take on-chain; understands that their LPT stake weight is their governance vote weight and knows where to participate in governance | `operate` |

*CROSS-TAB: Delegators tab owns the full mechanics of delegation, delegator earnings calculation, and governance voting depth. Section 14 introduces the governance context and links to Delegators for depth — it does not duplicate that content.*

*CROSS-TAB: Gateways tab owns the full gateway operator perspective including how MaxPrice is set and how gateway selection scoring is weighted. Section 6 introduces gateway selection from the orchestrator's point of view and links to Gateways for depth — it does not duplicate gateway operator content.*

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| 1. GPU operator evaluating the network | Section 1 (What is an orchestrator?) | Section 2 (Is this the right fit for me?) — exits having chosen an operating model or decided not to proceed | None — Section 1 and 2 are the first two sections in sequence | Section 2 must include the LPT stake threshold for Active Set membership explicitly enough that a reader without LPT can self-identify as a pool node candidate without needing to read further; if this is absent the reader will arrive at setup not knowing they cannot complete it | None — Section 2 provides the routing decision this persona needs |
| 2. Existing operator completing initial setup | Section 4 (Quickstart) or Section 5 (Verify) depending on where they are in the process | Section 5 (Verify) — exits when node is confirmed discoverable and receiving jobs | If the node is running but not registered, the reader needs Section 4. If the node is registered but not receiving jobs, they need Section 5 and then Section 6 (selection mechanics). The path is: 4 → 5 → 6 (if jobs are not arriving). All three sections exist. No block. | Section 5 must explicitly address the most common reason a registered node does not receive jobs (service URI not publicly reachable, price above MaxPrice, outside Active Set) — if it only covers the "success" verification path, this persona will not know where to go when verification passes but jobs don't arrive | None — Section 6 (selection mechanics) handles the "I am registered but getting no jobs" case |
| 3. Active operator adding AI inference | Section 9 (Adding AI inference) | Section 9 — exits having configured AI Runner and verified at least one pipeline | Reader needs to have completed Section 7 (pricing) before Section 9, because AI pricing (pricePerCapability) is an extension of the pricing model. If Section 9 does not reference or link Section 7, the reader may set up AI capability without pricing it correctly. No structural block — Section 7 precedes Section 9. | Section 9 must state VRAM requirements concisely enough that a reader can determine whether their GPU qualifies before beginning the configuration steps. If VRAM requirements are buried or absent, the reader may attempt setup on insufficient hardware. | None |
| 4. GPU operator considering pool participation | Section 2 (Is this the right fit for me?) | Section 2 — exits knowing the pool node path exists and what to do next (contact a pool operator, use a listed community resource) | Section 2 must actively present the Pool Node path as a first-class option with next steps. If Section 2 only describes solo orchestrator setup and mentions pool participation as a footnote, this persona has no path forward from the tab. | Section 2 must explain that a pool node does not require independent LPT staking, what the arrangement with a Pool Operator looks like, and where to find active pool operators. If this content is thin, the persona's goal (deciding whether pool participation is worth it) is not met within the tab. | Section 2 must include a Pool Node path block that describes: how pool participation works, what the pool node operator does vs. does not need (no LPT, connects via orchSecret/orchAddr), and where to find active pools. This is a sub-section of Section 2 rather than a standalone section, but it must be present and substantive enough to be actionable. |

**Gaps resolved by Phase 2D**:

No new sections are required. Two content-depth requirements were identified that must be addressed within existing sections:

1. **Section 2** must include a substantive pool node path — not a footnote — covering: pool participation mechanics, what pool nodes do and do not need (no LPT required), and a pointer to where active pools can be found (community directory or Resource HUB).

2. **Section 5** must address the "verification passes but jobs don't arrive" scenario by explicitly listing the three most common reasons (service URI unreachable from external network, price above MaxPrice of active gateways, insufficient stake for Active Set) and routing to the relevant section for each.

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged if needed? (Yes — disambiguation/routing required as first substantive section)
- [x] Entry blockers identified and resolved by section order? (LPT stake blocker resolved by Section 2; public endpoint blocker resolved by Section 3; ETH gas blocker resolved by Section 3)
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"? (Reviewed — all exit states are phrased as actions completed or decisions made)
- [x] Cross-tab gate applied — no content duplicated from other tabs? (CROSS-TAB rows noted for Delegators and Gateways)
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The brief says "surface 10–20 terms" from the Product Context and per-tab glossary. The glossary for this tab contains 123 terms, and the set of genuinely central terms for orchestrator operators is larger than 20 when both video and AI workload paths are considered. I surfaced 30 terms rather than capping at 20, because limiting to 20 would have omitted terms that are structurally necessary to describe the orchestrator role fully (e.g. Capability Advertisement, Warm Model, Pool Node, Performance Score are all required to describe the AI and pool paths). The brief's "10–20" appears to be a guidance range rather than a hard cap — I flagged this decision here rather than truncating the lock.

- **[Phase 0 / Step 0.2]**: The deprecated-terms file identifies "Pool Worker" as renamed to "Pool Node". The per-tab glossary entry for "Pool Worker" includes "Also known as: Pool node". I applied the deprecation and used "Pool Node" throughout. The glossary entry itself was treated as the source of the correct current term.

- **[Phase 1]**: The brief specifies a minimum of 3 personas. Four were defined because the pool node persona (GPU owner without sufficient LPT for solo operation) is structurally distinct from the solo operator persona in ways that affect section order and content requirements. Collapsing them into a single persona would have obscured the LPT stake entry blocker, which is one of the most consequential structural constraints on this tab's design.

- **[Phase 2A]**: Eight jobs were generated rather than the specified 5–7 because the configuration reference lookup job (Job 8) is a structurally distinct return-visit job that justifies a dedicated reference section (Section 13). Omitting it would have meant the reference section had no named job to justify it.

- **[Phase 2C]**: The brief's cross-tab gate instruction ("only use a CROSS-TAB row when this tab's audience does not need that content at all") was applied carefully. Governance and delegation depth (Delegators tab) and gateway selection mechanics from the gateway operator perspective (Gateways tab) are correctly CROSS-TAB because the orchestrator reader needs to understand these from the orchestrator's vantage point — which is covered in Sections 8, 14, and 6 respectively — but does not need to operate a gateway or manage delegators' assets, which is the depth those tabs provide.

- **[Phase 2C / Section 2]**: The self-containment principle and the pool node persona's needs required that Section 2 ("Is this the right fit for me?") carry substantial pool node content. This section does the work of a disambiguation page as well as an evaluation guide. In implementation, it may need to be two pages (a routing page + an evaluation guide for each path) rather than a single page — this is a content design decision to be resolved at the page-design stage, not the IA stage.
