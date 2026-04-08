# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Orchestrator, Active Set, LPT (Livepeer Token), Staking / Bonding, Reward Cut, Fee Cut, Reward Call, Probabilistic Micropayment (PM), go-livepeer, Video Transcoding, AI Inference, Dual Mode, Solo Operator, Pool / Pool Operator / Pool Node, O-T Split, Performance Score, Capability Advertisement, pricePerUnit / pixelsPerUnit, Service URI, Slashing, Warm Model / Cold Start, VRAM, BYOC (Bring Your Own Container), Delegator, Gateway`

1. **This audience calls themselves**: GPU operators, node runners, or GPU miners. In crypto contexts: node operators. They do not call themselves "orchestrators" until they have learned Livepeer's terminology.

2. **Core job actions (in their language)**:
   - Connect hardware to a network and keep it earning
   - Set prices and stay competitive enough to receive work
   - Monitor performance and fix problems before earnings drop
   - Manage staking or bonding to stay in the eligible pool
   - Configure hardware for new workload types as they become available

3. **Terms with network-specific meanings that differ from the industry default**:
   - **Staking / Bonding** — In most PoS contexts, staking is purely a security deposit mechanism. In Livepeer, an orchestrator's stake combines their own self-bonded LPT and stake delegated by others — delegated stake counts toward active set rank. Newcomers may not expect that attracting delegators materially affects their job allocation.
   - **Active Set** — Sounds generic ("nodes that are active") but has a precise, bounded meaning: exactly the top 100 orchestrators by total bonded stake, eligible for video transcoding work. AI inference does not use active set membership as a criterion — its routing is capability and price-based. Confusing these two selection mechanisms is a high-risk error.
   - **Reward Call** — Does not sound like a mandatory manual transaction, but it is. Rewards do not accrue automatically. An orchestrator must submit a `Reward()` transaction on-chain once per round or that round's rewards are permanently forfeited. This must be automated.
   - **Performance Score** — Sounds like a public, universal rating. It is per-gateway and private — each gateway tracks it independently and uses it in their routing decisions. There is no single published score.
   - **Pool** — In GPU mining, "joining a pool" typically means ceding control to a pool coordinator. Here, Pool Operators *run* the on-chain orchestrator (including staking, reward calls, and ticket redemption) while Pool Nodes contribute GPU compute and receive off-chain payouts. The pool operator retains on-chain identity.

---

## Arriving Question

> "Can I make money running my GPU hardware on this network, and what does it take to get started?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Solo Launcher** | Homepage CTA, search result for GPU earnings, crypto-GPU article | NVIDIA GPU hardware, some crypto familiarity, no Livepeer experience | A running orchestrator node receiving jobs, or a clear decision to join a pool instead | 3 | 3 | 3 | **9** |
| 2 | **The Pool Joiner** | Discord recommendation, referral from another operator | GPU hardware, no LPT, told to "join a pool" | Pool node connected and processing work for a pool operator | 2 | 3 | 3 | **8** |
| 3 | **The AI Specialist** | Search for AI GPU compute earnings, AI-focused Discord or forum | CUDA-capable GPU with high VRAM, ML background, evaluating Livepeer vs other AI compute networks | AI inference pipelines running with correct models configured and earning | 2 | 3 | 3 | **8** |
| 4 | **The Existing Operator** | Return visit, Explorer link, announcement about AI capabilities | Already running a video-only orchestrator, earning fees | Dual mode configured with AI pipelines earning alongside video transcoding | 1 | 2 | 2 | **5** |

*Volume and depth scored from Product Context reasoning. Solo Launcher is the most common profile for a first-time Orchestrators tab visitor: GPU operator who found Livepeer via search or the main site and has no prior context. Pool Joiner and AI Specialist are scored equally but enter at meaningfully different points in the journey. The Existing Operator is low volume for this tab specifically (they may access it via direct links or return searches rather than sequential reading).*

**Primary persona**: The Solo Launcher — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification**: Readers self-identify as "GPU operators" or "node operators." This label covers both the Solo Launcher (running their own on-chain orchestrator) and the Pool Joiner (contributing GPU without a solo staking position). The two paths have different LPT requirements and different setup procedures. However, the decision point is a clear binary: *sufficient LPT to enter the active set solo, or not.* A routing callout embedded in Section 2 (How work reaches your hardware) is sufficient — it appears before any setup instructions and directs the reader to the appropriate path. No dedicated disambiguation section is required.

**Entry blockers**:
- *Solo Launcher*: Must acquire and stake LPT to enter the active set before video transcoding work can be received. This is a hard-stop that cannot be bypassed for video. (AI inference does not require active set membership — this is a secondary path that partially resolves the blocker.) Section 2 must address this before any setup section.
- *Pool Joiner*: No LPT required, but must locate a pool operator accepting new workers. Blocker is community-discovery, not technical. Section 10 (Community and ecosystem resources) provides the resolution path.
- *AI Specialist*: No LPT required for AI inference, but VRAM is a hard gate — insufficient VRAM prevents running AI pipelines. Section 3 (Hardware requirements) must establish this before AI setup is attempted.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I've just discovered Livepeer and have GPU hardware I want to put to work | understand whether my hardware qualifies and which workload type fits my situation | decide whether it's worth proceeding at all, or whether to join a pool instead |
| J2 | I'm ready to get my first node running | complete the full setup end-to-end — install, configure, register, and activate | start receiving jobs and earning fees as quickly as possible |
| J3 | I'm configuring my node's economics | set a competitive price and sensible reward and fee cuts | avoid being excluded from all work by pricing too high, and attract enough delegation to improve my active set rank |
| J4 | My node is running and I want to know it's healthy | monitor performance score, earnings, and session activity in one place | catch problems early before they cost me significant missed rewards |
| J5 | I have GPU hardware but don't have enough LPT to operate solo | understand how pool participation works and how to find a pool to join | earn fees from my hardware without managing staking, reward calls, or ticket redemption |
| J6 | I'm already running video transcoding and want to capture additional revenue | add AI inference pipelines to my existing setup without disrupting current earnings | run dual mode and earn from both workload types on the same hardware |
| J7 | My earnings have dropped or my node has stopped receiving work | diagnose the specific cause — pricing, performance score, reward call failure, hardware issue | restore normal operation without guessing |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Qualifying | `discover` | Assessing whether their hardware and stake situation makes Livepeer viable for them |
| 2 | Understanding the economics | `evaluate` | Learning how work is allocated, how payment flows from gateway to orchestrator, and what LPT staking requires to enter the active set |
| 3 | Choosing a path | `evaluate` | Deciding between solo operator, pool node, or AI-only; and between video, AI, or dual mode |
| 4 | Hardware confirmed | `setup` | Verifying their GPU meets minimum requirements for their chosen workload type |
| 5 | First node running | `setup` | Installing go-livepeer, configuring flags, registering service URI, completing activation |
| 6 | Economics configured | `setup` | Setting pricePerUnit, reward cut, fee cut, and automating reward calls |
| 7 | Production verified | `setup` | Confirming the node is receiving sessions, tickets are flowing, and rewards are accumulating |
| 8 | Monitoring established | `operate` | Regularly checking performance score, earnings, and session health |
| 9 | Optimising | `optimise` | Tuning pricing, hardware capacity, model warmth, or stake to improve earnings relative to costs |

**On-demand** (information operators return for after completing the linear journey):
- *CLI flag names, defaults, and accepted values* — for the current go-livepeer release
- *Competitive pricing benchmarks* — what other operators charge per pixelsPerUnit in practice
- *Active set threshold* — current stake required to be in the top 100
- *Reward call timing and gas cost estimates* — when to call, what it costs on Arbitrum
- *AI pipeline types and VRAM requirements* — which pipelines are available and what hardware they need
- *Hardware specifications by workload type* — minimum and recommended for video, AI, dual mode
- *Pool operators accepting new workers* — current list with contact and payout terms
- *Governance proposals and treasury decisions affecting orchestrators* — active votes, SPE funding, parameter changes

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Audience routing from site entry for supply-side participants |
| Inbound | About → Orchestrators | Reader who has absorbed the protocol model is ready to act as a supply-side operator |
| Inbound | Gateways → Orchestrators | Gateway operators understanding the supply side — how orchestrators are selected and what affects routing |
| Outbound | Orchestrators → Delegators | Operators who want delegators to bond to them need to understand what delegators look for (reward cut, reliability, track record) |
| Outbound | Orchestrators → Gateways | Understanding gateway selection mechanics — MaxPrice, performance score, capability matching — from the demand side |
| Outbound | Orchestrators → Community | Finding pool operators, participating in governance, accessing SPE working groups and ecosystem support |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. What orchestrators do and how the network rewards them | "What is an orchestrator and what does running one actually involve?" | J1 | `explain` | `concept` | No prior Livepeer knowledge; has GPU hardware and vague interest in earning | Has identified the two compute types (video and AI), knows that rewards come from job fees and LPT inflation, and can state what an orchestrator does in their own words | `discover` |
| 2. How work reaches your hardware — selection, routing, and the role of stake | "How does the network decide which orchestrators receive work — and what determines whether I'm in the running?" | J1 | `explain` | `concept` | Knows what an orchestrator does; has not yet encountered LPT staking, active set mechanics, or the distinction between video and AI selection criteria. **Routing callout here**: solo operator path (requires LPT stake → Section 5) vs pool node path (no LPT required → Section 9) | Has decided which path applies to their situation — solo operator with LPT, or pool node without; can state why LPT stake matters for video but not for AI; can name the performance score and MaxPrice as selection factors | `evaluate` |
| 3. Hardware requirements by workload type | "Does my GPU meet the minimum requirements — and which workload type should I run?" | J1 | `choose` | `guide` | Has chosen solo operator or pool node path; doesn't know minimum VRAM, GPU generation requirements, or how hardware specs differ between video transcoding, AI inference, and dual mode | Has confirmed whether their hardware qualifies for their chosen workload type, or has decided to acquire different hardware before proceeding | `evaluate` |
| 4. Economics: how payment, staking, and rewards work | "How do I actually get paid — and what do I have to stake and do to earn consistently?" | J3 | `explain` | `concept` | Hardware confirmed; has not yet learned how probabilistic micropayments flow from gateway to orchestrator, how reward calls work, or what reward cut and fee cut control | Has mapped the full earning model: PM tickets → winning ticket redemption for ETH fees; reward call → LPT inflation rewards; has noted that reward calls must be automated; can calculate approximate yield inputs | `evaluate` |
| 5. Getting your first node running (solo operator) | "How do I install, configure, register, and activate my orchestrator node?" | J2 | `start` | `instruction` | Decided on solo operator path; hardware confirmed; economics understood; ready to install | Has a running go-livepeer node with service URI registered on-chain, reward call automation active, and has received at least one session confirming the node is reachable | `setup` |
| 6. Setting your price and economic parameters | "How do I set a price that gets me work — and how do I configure my reward and fee cuts to attract delegators?" | J3 | `configure` | `guide` | Node is running; pricePerUnit and cuts not yet set deliberately; doesn't know competitive price range or how cuts affect delegation | Has set pricePerUnit within a competitive range with a rationale, has set reward and fee cuts on-chain, and can explain the trade-off between higher cuts (more personal earnings) and lower cuts (more delegation attraction) | `setup` |
| 7. Adding AI inference to your node | "How do I configure AI pipelines — and what do I need to change if I'm adding AI to an existing video transcoding setup?" | J6 | `configure` | `instruction` | Either starting fresh (AI-only path) or adding AI to an existing video transcoding node; has hardware confirmed as AI-capable; hasn't yet encountered aiModels.json, warm model configuration, capability advertisement, or BYOC | Has a running AI inference configuration with at least one pipeline active, capability advertised on-chain or via webhook, smoke test completed, and earnings confirmed from at least one AI job | `setup` |
| 8. Verifying your setup is working correctly | "How do I confirm my node is actually receiving work, redeeming tickets, and calling rewards without errors?" | J2, J4 | `verify` | `instruction` | Node is live with pricing configured; hasn't yet checked all operational signals systematically | Has confirmed: sessions are being accepted, tickets are flowing and redemptions are occurring, reward calls are succeeding each round, and performance score is visible and healthy | `setup` |
| 9. Joining a pool instead of operating solo | "I don't have enough LPT to compete solo — how do I connect my GPU to an existing pool as a worker?" | J5 | `start` | `instruction` | Has GPU hardware; has determined solo path is not viable (insufficient LPT); has been routed here from Section 2 | Has pool node running and connected to a pool operator's orchestrator, is processing jobs, and has confirmed an off-chain earning arrangement with the pool operator | `setup` |
| 10. Day-to-day operations and monitoring | "What do I watch, how often, and what does a healthy node look like vs a problem I need to fix?" | J4 | `operate` | `guide` | Node is live, configured, and verified; not yet monitoring systematically | Has a monitoring routine covering performance score, session activity, reward call status, ticket redemption rate, and earnings — and can identify the four most common causes of earnings drops | `operate` |
| 11. Diagnosing and fixing common problems | "My earnings have dropped / my node isn't receiving work / my reward call failed — what's wrong and how do I fix it?" | J7 | `troubleshoot` | `guide` | Running node experiencing a specific problem: no sessions, low performance score, pricing exclusion, reward call failure, hardware error, or AI pipeline failure | Has identified the root cause of the specific problem and taken at least one corrective action; has a checklist to run next time a similar symptom appears | `troubleshoot` |

*CROSS-TAB rows:*
- *[CROSS-TAB: governance depth owned by Delegators and Community — this tab links, does not duplicate. Governance participation via stake weight is mentioned in Section 4 in the context of the orchestrator's economic role, with a link to Delegators for depth on governance mechanics.]*
- *[CROSS-TAB: gateway selection algorithm depth owned by Gateways — this tab covers MaxPrice and performance score from the orchestrator's side in Sections 2 and 6; detailed gateway routing mechanics link to Gateways tab.]*

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| **The Solo Launcher** | Section 1 | Section 8 (verify) | None — all prerequisite sections appear before sections that require them | None identified — economics are introduced (Section 4) before pricing configuration is attempted (Section 6) | None |
| **The Pool Joiner** | Section 1 | Section 9 | None — routing callout in Section 2 directs them to Section 9 before they encounter solo setup instructions | Pool Joiners need to understand payment basics (PM tickets and earnings model) before committing to a pool arrangement — Section 4 must be readable before Section 9. Currently ordered correctly. | None |
| **The AI Specialist** | Section 1 (may skim) or Section 3 (directly) | Section 8 (verify) | None — no active set content blocks the AI path; Section 2 routing callout explicitly surfaces the AI-only path | AI Specialist may not need Section 5 (solo operator full setup) and may jump directly from Section 3 to Section 7 (AI config). Section 7 must be self-contained enough to serve a reader who skipped Section 5. Flag: Section 7 should include a brief note on minimum go-livepeer node setup for AI-only operators, or link back to the relevant steps in Section 5 with an explicit "AI-only" flag. | No additional section required — cross-reference within Section 7 is sufficient. |
| **The Existing Operator** | Section 7 (directly — already has a running node) | Section 8 (verify) | None | Existing Operator skips Sections 1–6 entirely. Section 7 must not assume the reader just completed Section 5 — its entry state must accommodate someone arriving with a working video transcoding node. Currently written correctly. | None |

All personas have complete, unblocked paths through the structure. Gate passes.

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — routing callout in Section 2 confirmed as sufficient (clear binary decision point)?
- [x] Entry blockers identified and resolved by section order — LPT blocker addressed in Section 2 before setup; pool path routed before setup instructions begin?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content on selection mechanics, payment, and stake included for this audience; CROSS-TAB rows only where this audience does not need the content to achieve their goal here?
- [x] Persona path validation done — every persona has an unblocked path; AI Specialist cross-reference flag noted?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK size]**: The brief allows exceeding 20 terms when a tab covers multiple distinct participation paths. The Orchestrators tab has two meaningfully distinct workload types (video transcoding, AI inference) and two meaningfully distinct operating models (solo operator, pool node), each with different hardware requirements, setup paths, and economic models. 25 terms were included to give minimal coverage of all four paths. This was necessary — omitting AI-specific terms (Warm Model, VRAM, BYOC, Capability Advertisement) would leave the AI path without a usable terminology base.

- **[Phase 0 / Step 0.2 — "Transcoder" in O-T Split]**: The deprecated-terms.md file specifies "do not use Transcoder as a synonym for Orchestrator." The O-T Split architecture term uses "Transcoder" to refer specifically to the worker subprocess (go-livepeer running in `-transcoder` mode) — not as a synonym for the Orchestrator role. This usage is legitimate and distinct. However, because the term appears in the deprecated list, it was not included in the TERMINOLOGY_LOCK to avoid ambiguity in content prompts. Content authors writing about O-T Split should use "worker node" or "transcoder subprocess" and clarify the architecture context explicitly.

- **[Phase 0 / Step 0.2 — verify-live flags]**: Active Set size (100), Reward Cut, Fee Cut, Unbonding Period, and inflation parameters are all governance-controlled. Any page making specific claims about these values must verify against Explorer (explorer.livepeer.org) and the LIPs repo at time of writing. These values are correct at time of this design brief but should not be treated as stable constants in content.

- **[Phase 0 / Step 0.2 — LIP-92 definition in glossary]**: The glossary defines LIP-92 as specifying "the AI model registry and capability discovery mechanism." The veracity-sources.md lists the LIPs repo as primary for formal protocol changes. The glossary definition was not accepted as confirmed. Content authors writing about capability advertisement and the AIServiceRegistry should verify the exact scope of LIP-92 directly from the LIPs repo before citing it. `[verify-against: github.com/livepeer/LIPs]`

- **[Phase 1 — Self-identification / disambiguation]**: The binary routing callout (solo operator path vs pool node path) was placed in Section 2 rather than as a standalone disambiguation section. The brief specifies a dedicated section is required for "3+ meaningfully different setup paths, or if the reader cannot identify their path without reading content." The AI Specialist path (AI-only, no LPT) was considered as a potential third path requiring a dedicated section. Decision: the AI-only path is a subset of the solo operator path with a different workload configuration — it shares the same node software, service URI, and economics structure. The routing callout in Section 2 covers three choices (solo video/dual, solo AI-only, pool node) without requiring a full disambiguation section. If content review shows the three-way choice is confusing in practice, a dedicated Section 0 (disambiguation) should be added in detailed design.

- **[Phase 2C — Section 11 scope]**: Section 11 (Diagnosing and fixing common problems) covers multiple failure modes (no sessions, pricing exclusion, reward call failure, hardware error, AI pipeline failure). It is likely to require multiple pages in detailed design — one per failure category. This is flagged here but not split at this stage: the brief specifies flagging, not splitting, during IA design.

- **[Phase 0 / Step 0.3 — web access]**: Web search was not used during this brief execution, consistent with the "No repo access" instruction. The following sources were identified as potentially useful for the Addendum and would benefit from verification before content writing begins:
  - `[SUGGESTED SOURCE: go-livepeer releases page — https://github.com/livepeer/go-livepeer/releases — current CLI flags, defaults, and accepted values per tagged release — primary]`
  - `[SUGGESTED SOURCE: Livepeer AI docs — https://docs.livepeer.org/ai/introduction — current AI pipeline types, model IDs, and BYOC API spec — lead (verify against go-livepeer repo)]`
  - `[SUGGESTED SOURCE: Livepeer Explorer orchestrator list — https://explorer.livepeer.org — live active set, stake thresholds, reward cut and fee cut distribution — primary]`
  - `[SUGGESTED SOURCE: Forum pricing thread — https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 — competitive pricing guidance — acceptable (check date)]`
