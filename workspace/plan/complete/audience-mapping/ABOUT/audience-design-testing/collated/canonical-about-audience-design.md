# About — Canonical Audience Design

**Tab**: About
**Audience**: Multi-audience — see note below
**Synthesised from**:
- `claude-web-v4-about-audience-design.md` (RUN-A — v4 Claude Web run)
- `chatgpt-v4-about-audience-design.md` (RUN-B — v4 ChatGPT run)
- `agent-v5-about-audience-design.md` (RUN-C — v5 Agent run)
**Collation prompt applied**: `audience-design-collation-v2.md`
**Collation learnings applied**: `learnings/v4.md`
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

> **MULTI-AUDIENCE TAB — AUDIENCE TOKEN NOTE**
>
> The About tab does not have a single canonical audience token. It serves every arriving audience (`founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community`) at the `discover` lifecycleStage. The Audience Definitions table carries the note: "About serves all audiences at the discover lifecycle stage. A single audience token cannot fully describe About's primary audience."
>
> The v5 Agent run produced `discover-substrate` as an audience token. This is a non-canonical token — `discover-substrate` does not appear in the canonical audience token list. Per the plan (misty-rolling-starfish.md, Phase 1): "The canonical handling (pending v6 prompt update) is: if this tab serves multiple audiences with no single canonical token, document the multi-audience model in the Phase 1 output."
>
> **Canonical audience handling**: This tab is documented as `audience: all` at `lifecycleStage: discover`. The audience field in frontmatter for About pages should not use `discover-substrate`. The appropriate resolution for this in the v2 frontmatter schema is a human decision (see OPEN ITEM 1). `discover-substrate` is NOT adopted as a canonical token in this output.
>
> **Run note**: The v4 learnings file identifies that 2 runs is below the recommended 3-run minimum for collation confidence. This collation uses 3 runs (2 v4 + 1 v5). The v5 run used a different prompt version but provides a third data point. Findings are treated as indicative where the v5 run confirms v4 patterns, and as requiring human judgement where they diverge.

---

## Audience Model

**AUDIENCE**: All arriving audiences at `discover` lifecycleStage. The tab is a substrate-and-routing layer. The primary structural driver is the arriving reader's need to form a reliable picture of what Livepeer is before routing to their role-specific tab.

**The five arriving audience paths**:
1. Product evaluator (founder/builder evaluating Livepeer as infrastructure)
2. Token and network researcher (evaluating LPT staking/investment, or researching the protocol)
3. GPU operator (evaluating whether to connect hardware for earnings)
4. Developer (evaluating the API/SDK surface)
5. Ecosystem newcomer / community member (learning about the network)

These paths share the same linear orientation journey and diverge only at the routing section (S1), where each is named and directed to their correct role tab.

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| Livepeer | A decentralised AI and video transcoding compute network running on Arbitrum (Ethereum L2). | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 3-run consensus |
| Arbitrum (Arbitrum One) | The Ethereum L2 Optimistic Rollup network where Livepeer's protocol smart contracts are deployed. | `[verify-against: https://arbiscan.io/accounts/label/livepeer]` for deployed contracts | 3-run consensus |
| Orchestrator | A GPU hardware operator who connects their machine to the network, stakes LPT, and earns fees by processing AI inference and video transcoding jobs. Network-specific term — arriving readers do not call themselves "orchestrators." | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 3-run consensus |
| Gateway | The demand-side participant who routes AI or video jobs into the network and pays orchestrators per job. Replaces deprecated term "Broadcaster." Network-specific term — arriving readers call themselves "infrastructure teams" or "API providers." | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 3-run consensus |
| Delegator | An LPT token holder who stakes tokens to an orchestrator, earning a share of rewards and participating in on-chain governance. Arriving readers call themselves "token holders" or "stakers." | — | 3-run consensus |
| Developer / Builder | Participants who build applications and pipelines using Livepeer's compute capacity, typically via gateway APIs or SDKs. Two overlapping audience tokens (`developer`, `builder`) describe distinct participation depths. | — | 3-run consensus |
| LPT (Livepeer Token) | The ERC-20 staking and governance token. Required for orchestrators to stake and enter the active job pool; used for delegation and on-chain governance; earned via inflation rewards and job fees. | `[verify-against: https://explorer.livepeer.org]` for live token state | 3-run consensus |
| Active Set | The governance-controlled group of top-ranked orchestrators by total bonded stake eligible to receive video transcoding jobs and inflation rewards in a given round. Size is governance-controlled. | `[verify-live: https://explorer.livepeer.org]` — do not hard-code size | 3-run consensus |
| Round | A discrete protocol time interval (approximately one Ethereum day of Arbitrum blocks) governing reward distribution, active set determination, and inflation adjustments. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 3-run consensus |
| Bonding / Staking | Locking LPT to an orchestrator in Livepeer's delegated proof-of-stake system to participate in network security and earn rewards. | `[verify-against: https://forum.livepeer.org/t/an-overview-of-bonding/97]` — acceptable tier, date-check required | 3-run consensus |
| Unbonding | Initiating withdrawal of bonded LPT, triggering a governance-controlled waiting period before tokens become liquid. | `[verify-live: https://explorer.livepeer.org]` — waiting period is governance-controlled | 3-run consensus |
| Probabilistic Micropayments | A lottery-based payment mechanism where only winning tickets are redeemed on-chain, amortising transaction costs across many small per-segment payments. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 3-run consensus |
| ETH Fees | Payments in Ether made by gateways to orchestrators for completed compute work (transcoding or AI inference), delivered via the probabilistic micropayment system. | — | 3-run consensus |
| Dynamic Inflation | Livepeer's inflation model where the per-round LPT issuance rate adjusts based on whether staking participation is below or above a target bonding rate. Both the target rate and adjustment step are governance-controlled. | `[verify-live: https://explorer.livepeer.org]` and `[verify-against: https://github.com/livepeer/LIPs]` — governance-controlled; do not hard-code rate or step values | 3-run consensus |
| Reward Cut | The percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder to delegators. | `[verify-against: https://explorer.livepeer.org]` for live per-orchestrator values | 3-run consensus |
| Video Transcoding | Converting source video from one encoding format, resolution, or bitrate to another — Livepeer's original and ongoing compute workload type. | — | 3-run consensus |
| AI Inference | Running trained ML model pipelines (primarily image and video generation) as the second compute workload type on the Livepeer network. Distinct from video transcoding. | — | 3-run consensus |
| Governance | The on-chain mechanism by which LPT token holders vote on protocol changes, parameter adjustments, and treasury allocations via stake-weighted voting. Includes Vote Detachment — delegators can override their orchestrator's vote. | `[verify-against: https://github.com/livepeer/wiki/wiki/Governance]` and `[verify-against: https://github.com/livepeer/LIPs]` | 3-run consensus |
| Treasury | The on-chain LPT pool governed by token holders, funded by a percentage of per-round inflation. Used for community-approved ecosystem grants and development. Not a company budget. | `[verify-live: https://explorer.livepeer.org/treasury]` — treasury reward cut rate is governance-controlled | 3-run consensus |
| SPE (Special Purpose Entity) | A treasury-funded organisational unit with a defined scope, budget, and accountability mechanism for executing ecosystem initiatives; proposed and approved via governance. | `[verify-against: https://github.com/livepeer/LIPs]` for specific SPE approvals | 3-run consensus |
| Slashing | A penalty mechanism that destroys a portion of an orchestrator's bonded LPT for protocol violations. Importantly, delegators' proportional bonded stake may also be at risk — not just the operator's own self-stake. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 3-run consensus |

**Terms excluded from canonical lock**:
- `Broadcaster` — deprecated term; replaced by Gateway. Claude Web v4 run explicitly flagged that `glossary-about.md` marks Broadcaster with `Status: current` — this contradicts `deprecated-terms.md` which states "Never use Broadcaster in new documentation." `[DEFINITION CONFLICT: Broadcaster — glossary-about.md Status field reads "current"; deprecated-terms.md is authoritative: use Gateway. Glossary correction required.]`
- `Inflation Model` — `deprecated-terms.md` flags overlap with Dynamic Inflation. Excluded; use Dynamic Inflation.
- `Active Set Election` — deprecated phrasing per `deprecated-terms.md`. Excluded; use Active Set.
- `veLPT` — proposal not yet implemented; excluded.
- `Ephemeral Compute` — definition thin in glossary; excluded.
- `NaaP` — no NaaP definition available in the About source context; excluded pending source resolution.
- `Fee Share` — covered by the gateway/delegator relationship within the Reward Cut and ETH Fees definitions; not added as a standalone term.

---

## Arriving Question

> "What is Livepeer, who is it for, and is any of this relevant to what I'm trying to do?"

**Synthesis note**: All three runs converged on the same evaluation-gate question structure. The arriving reader does not yet know whether Livepeer is relevant to them. The canonical question captures the three-part evaluation gate (what is it / who is it for / does this apply to me) that all three runs independently produced variants of.

Per the v4 learnings, different audience variants of this question exist:
- A founder: "Can Livepeer provide the compute infrastructure my product needs?"
- A GPU operator: "Can I earn money running my hardware on this network?"
- A token holder: "Is this a credible protocol to stake my tokens with?"
- A developer: "Is the API/SDK mature enough to build on?"
- A community member: "What is this ecosystem and how do I participate?"

All are served by the same linear structure, diverging at S1 (role router).

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Product evaluator** — founder, product manager, or platform engineer evaluating Livepeer as infrastructure for their application or platform | External article, search result, Solutions tab, referral; may come from Home CTA | General awareness that Livepeer is video/AI compute; no knowledge of protocol mechanics, roles, or costs | A clear answer to "is this the right infrastructure for my use case?" — enough to decide whether to proceed to the Developers or Solutions tab | 3 | 3 | 3 | **9** | 3/3 unanimous |
| 2 | **Token and network researcher** — evaluating LPT as a staking/investment opportunity or researching the protocol for a report or analysis | Search result on "LPT staking," "Livepeer tokenomics," or "Livepeer protocol"; Messari/Dune/CoinGecko referral | Awareness that LPT exists; no knowledge of delegation mechanics, inflation model, or governance | A reliable outline of the economic model — inflation, rewards, governance weight — sufficient to decide whether to read the Delegators tab or run deeper research | 3 | 3 | 3 | **9** | 3/3 unanimous |
| 3 | **GPU operator** — evaluating whether to connect hardware to the network for earnings | Discord, community forum, or search result on "Livepeer orchestrator" or "GPU compute earnings" | Hardware provisioned or under consideration; no knowledge of Livepeer's protocol roles, stake requirements, or job types | Clarity on what operating a node requires — stake, hardware, job types, economics — sufficient to decide whether to continue to the Orchestrators tab | 2 | 3 | 3 | **8** | 3/3 unanimous |
| 4 | **Developer** — evaluating the Livepeer API and SDK as a technical foundation | Search result on "Livepeer API" or "AI video pipeline"; developer community referral; may arrive via Home or Solutions | Technical context on AI/video APIs; no knowledge of Livepeer's protocol layer or token economics | Sufficient architectural understanding to evaluate whether the API surface meets their needs before going to the Developers tab | 2 | 2 | 3 | **7** | 3/3 unanimous |
| 5 | **Ecosystem newcomer / community member** — learning what Livepeer is for non-technical or non-investment reasons | Discord, Twitter/X, blog post, podcast, or referral from existing community member | Minimal — may have heard the name; interested in the mission and community | A legible account of what Livepeer does, who runs it, what the governance model is, and how to participate — sufficient to decide whether to go to the Community tab | 3 | 2 | 2 | **7** | 3/3 unanimous |

**Primary personas**: Product evaluator (Rank 1) and Token and network researcher (Rank 2) are co-primary — tied at 9. The section structure must serve both without privileging one. The disambiguating routing logic (S1) governs the entire structure.

**Self-identification**: All three runs unanimously determined that a dedicated disambiguation section is required as the first content section. Arriving readers do not yet know Livepeer's role terminology. They cannot identify their correct path without first encountering role definitions. Five meaningfully different arrival paths exist; a routing callout within a single section cannot accommodate them. **Decision: dedicated disambiguation section (S1) as `orient / navigation / discover`.**

**Entry blockers**: No hard-stop blockers exist for the About tab. The tab is fully accessible to all arriving readers — no on-chain funding, software install, or prior configuration required. Section order is therefore driven by natural question sequence (what is it → how does it work → economics → governance → routing to depth).

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I first encounter Livepeer and have no context | understand in plain terms what the network does, who built it, and what problem it solves | decide in under five minutes whether this is worth investigating for my specific situation |
| J2 | I am evaluating whether to use Livepeer for my product | understand the two compute types and how gateways access them | assess whether the compute supply meets my product's latency, quality, and cost requirements before reading integration docs |
| J3 | I hold LPT or am considering buying it | understand how staking, inflation, and fee distribution work conceptually | evaluate whether delegating is worth it and which dimensions of the economics to investigate further in the Delegators tab |
| J4 | I run GPU hardware and want to earn from it | understand what running an orchestrator requires — stake, hardware, job types, and economics | avoid wasting time on setup docs for a path that does not fit my situation |
| J5 | I need to understand how protocol decisions get made | understand the governance model — who votes, on what, with what weight | evaluate whether the protocol's direction is aligned with my interests before committing capital or engineering time |
| J6 | I want to understand the organisation behind Livepeer | understand the relationship between the Foundation, the Treasury, and the open-source protocol | assess governance and longevity risk before building on or staking in the network |
| J7 | I am mid-journey and need to confirm I am on the right conceptual path | look up a specific term or mechanism | continue reading a role-specific tab without returning to first principles |

**Coverage check**: Arrival jobs (J1) ✓ · Product evaluation (J2) ✓ · Token/investment evaluation (J3) ✓ · Operator evaluation (J4) ✓ · Governance evaluation (J5, J6) ✓ · Return-visit lookup (J7) ✓

---

## Ideal Journey

**Linear** (positions 1–3 in 08a framework mapping — orientation is the full linear journey for this tab):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting: which role is mine? | `discover` | Reading the role routing section; identifying which participation path (if any) fits their situation |
| 2 | Understanding what Livepeer is | `discover` | Forming a working mental model of the network — what it does, who the actors are, the two compute types |
| 3 | Understanding how the network works | `discover` | Tracing how a job flows through the network from request to result; mapping actor relationships |
| 4 | Understanding the economics | `discover` | How value is created and distributed — ETH fees, LPT inflation, stake-weighted rewards |
| 5 | Understanding governance and the organisation | `discover` | How protocol decisions get made; who funds development; how the Foundation, Treasury, and SPEs relate |
| 6 | Routing to depth | `discover` → `evaluate` | Confirming their role path and navigating to the correct role tab with sufficient context |

**On-demand** (content returning readers look up after completing the linear journey):
- Current active set size and whether it is governance-controlled
- Governance-controlled parameter values — unbonding period, target bonding rate, inflation adjustment step, treasury reward cut rate
- Definitions of specific protocol terms (Active Set, Round, Slashing, Probabilistic Micropayments, SPE)
- Relationship between video transcoding and AI inference as compute types
- How the Treasury is funded and what SPEs are

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → About | Home routes discovery-stage readers who want protocol depth beyond the platform narrative |
| Inbound | Any role tab → About | Role tabs link to About for conceptual definitions rather than duplicating architecture content |
| Outbound | About → Solutions | Product evaluators and builders route to Solutions for product-specific application |
| Outbound | About → Orchestrators | GPU operators who have confirmed the role fits route to Orchestrators for setup and operations |
| Outbound | About → Delegators | Token holders and staking researchers route to Delegators for mechanics and yield detail |
| Outbound | About → Developers | Technical builders evaluating the API/SDK surface route to Developers |
| Outbound | About → Gateways | Gateway operators routing jobs proceed to Gateways for setup and operational content |
| Outbound | About → Community | Ecosystem newcomers and contributors route to Community for participation paths |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Role router: which path is mine? | "I've heard of Livepeer — which role (if any) applies to me, and where should I go next?" | J1 | `orient` | `navigation` | Arriving with no knowledge of Livepeer's role structure | Has identified their participation path (or confirmed they are a general researcher) and has a named next tab to visit | `discover` |
| S2 — What Livepeer is: the network in plain terms | "What does this network actually do — video, AI, or both — and is it live?" | J1 | `explain` | `concept` | Has been routed but has no mental model of the network's function | Can describe in one sentence what Livepeer does; has confirmed the network is deployed and active | `discover` |
| S3 — How the network works: jobs, actors, and flow | "How does a piece of work actually move through this network — from request to result?" | J2, J4 | `explain` | `concept` | Knows what Livepeer does but has no picture of how a job flows or what the roles do | Can trace a job from a gateway submitting it, through orchestrator selection, to work execution and payment; can explain each actor's role in one sentence | `discover` |
| S4 — The two compute types | "What is the difference between the video and AI workloads, and does that distinction affect which path I'm on?" | J2, J4 | `explain` | `concept` | Understands the high-level flow but has not yet distinguished between the two workload types | Has decided which compute type (or both) is relevant to their use case | `discover` |
| S5 — The economic model: how value flows | "How does money actually move through this network — what do I earn, pay, or stake?" | J3, J4 | `explain` | `concept` | Understands actor roles and job flow but has not yet seen how fees and rewards work | Can describe the two income streams (ETH fees and LPT inflation) and which actors receive each; sufficient to decide whether to investigate further in Delegators or Orchestrators | `discover` |
| S6 — LPT: the protocol token | "What is LPT for — is it just a speculative token or does it serve a function in the protocol?" | J3, J7 | `learn` | `concept` | Has seen LPT mentioned but does not yet have a clear picture of its roles | Can state the three functions of LPT (staking eligibility, delegation and rewards, governance weight) and knows what drives its issuance | `discover` |
| S7 — Staking and delegation: how stake works | "What does staking or bonding LPT involve — and what happens to my tokens?" | J3, J7 | `explain` | `concept` | Knows LPT's functions but has not yet understood bonding mechanics, unbonding periods, or slashing exposure | Can state what bonding requires, what the unbonding waiting period means, and that slashing may affect delegators' bonded stake — sufficient to decide whether to read the Delegators tab for full mechanics `[⚠ Design flag: may need to split — bonding mechanics and slashing exposure may warrant separate treatment during detailed design]` | `discover` |
| S8 — Governance: how decisions are made | "Who actually controls this protocol — and can I have a say?" | J5 | `explain` | `concept` | Has a picture of economic mechanics but has not yet seen the governance model | Can describe stake-weighted voting, where proposals originate, how the Governor contract executes decisions, and how delegators can vote independently from their orchestrator | `discover` |
| S9 — The organisation: Foundation, Treasury, and SPEs | "Is there a company behind this, and how does it relate to the protocol?" | J6 | `explain` | `concept` | Has seen the governance model but has not yet mapped the entities and their relationships | Can characterise Livepeer's organisational model — distinguishing the open protocol, the on-chain Treasury, the Foundation, and SPE-funded work; can assess longevity and governance risk | `discover` |
| S10 — Ecosystem and current state | "What has been built on this already — and is it actively developed?" | J1, J6 | `evaluate` | `concept` | Has a conceptual model of the protocol but lacks evidence of real-world use and active development | Has reviewed current products and upgrade history sufficient to form a preliminary credibility judgment | `discover` |

**Section count**: 10 sections — within the 8–12 target range.

**Structural note on section count**: The v4 Claude Web run produced 8 sections (justified as a lean substrate tab). The v4 ChatGPT run produced 10 sections (added "What must be verified live" and "Where to go next"). The v5 Agent run produced 11 sections (added a dedicated glossary section, S11). The canonical count of 10 adopts the ChatGPT v4 rationale for the two additional sections being structurally justified, while deferring the dedicated glossary section (S11 in v5) as on-demand content rather than a standalone linear section. The verify-live and routing handoff functions are served by S10 and S1 respectively.

**Design flags**:
- S7 `[⚠ Design flag: may need to split]` — bonding mechanics and slashing/risk content may warrant separate pages during detailed design if content volume warrants it.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Product evaluator | S1 (role router) → S3 (job flow) → S4 (compute types) → routes to Solutions/Developers | S4 then outbound | None | S3 and S4 must clearly name the Gateway/Developer paths and link to the appropriate role tabs — if this routing is absent, the evaluator completes orientation without a named next step | None |
| Token and network researcher | S1 → S5 (economic model) → S6 (LPT) → S8 (governance) → routes to Delegators | S8 then outbound | None | S5 and S6 must cover the complete economic model (ETH fees AND LPT inflation) before S8 — if either income stream is missing, the researcher has an incomplete picture | None |
| GPU operator | S1 → S3 → S5 → routes to Orchestrators | S5 then outbound | None | S3 must state that orchestrators need significant LPT stake to compete for video transcoding jobs independently — if this is absent, the GPU operator proceeds without knowing the capital barrier | None |
| Developer | S1 → S2 → S3 → routes to Developers | S3 then outbound | None | S3 must explicitly state that developers access compute via gateway APIs/SDKs and do not need to run infrastructure — if absent, a developer may misidentify as a gateway or orchestrator in S1 | None |
| Ecosystem newcomer | S1 → S2 → S9 (organisation) → S10 (ecosystem) → routes to Community | S10 then outbound | None | S9 must be accessible to non-technical readers — protocol jargon must be defined before use or linked to S6/S7 for context | None |

**All personas have complete, unblocked paths. No missing sections.**

---

## Checkpoint

- [x] AUDIENCE: Multi-audience model documented; `discover-substrate` NOT adopted as canonical token
- [x] TERMINOLOGY_LOCK: all verify flags from any run carried through (Active Set size, unbonding period, Dynamic Inflation rate and step, Treasury Reward Cut Rate all have `[verify-live]` flags)
- [x] Arriving question specific — not a topic; captures the actual evaluation gate at first encounter
- [x] Personas: 5 personas, all 3/3 run consensus; co-primary at Rank 1/2 with reasoning
- [x] Self-identification decision: 3/3 unanimous — dedicated disambiguation section required
- [x] No hard-stop entry blockers on About tab — confirmed across all 3 runs
- [x] Jobs: J1–J7, coverage confirmed across arrival, evaluation, return-visit, and edge cases
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values
- [x] Design flag carried through (S7 split flag)
- [x] Deprecated terms handled: Broadcaster conflict documented; Inflation Model, Active Set Election, veLPT excluded
- [x] All personas unblocked; knowledge gap notes for Phase 2 documented
- [x] All enum values canonical (`purpose` 15, `pageType` 7, `lifecycleStage` 7)

---

## Open Items (require human resolution before Phase 2)

### OPEN ITEM 1 — About audience token in frontmatter: BLOCKING for Phase 2 frontmatter schema

**Issue**: The canonical audience field for About pages cannot be `discover-substrate` (non-canonical token) and cannot be a single role token (e.g. `community`) — both are incorrect. The question is what the `audience` frontmatter field should contain for About pages in the v2 schema.

**Options identified**:
- Option A: `audience: all` — explicit multi-audience indicator
- Option B: `audience: [gateway, orchestrator, delegator, developer, builder, community, founder]` — array form (requires schema support)
- Option C: Omit the audience field on About pages (requires schema exception)
- Option D: Use a new canonical token `substrate` (requires adding it to the frontmatter taxonomy; would require human decision on whether `substrate` is a valid audience category)

**Resolution required**: Human decision on which option to use; the answer affects the frontmatter-taxonomy.js schema update. BLOCKING for Phase 2 frontmatter but not for the IA work.

---

### OPEN ITEM 2 — About run count is 3 (below ideal): NON-BLOCKING

**Issue**: v4 learnings note that 2 runs is below the 3-run minimum for collation confidence. This canonical output uses 3 runs total (2 v4 + 1 v5), which meets the minimum, but the v5 run used a different prompt version. Findings based on all-3-run consensus are strong; findings based on 2/3 (with a v5 split) should be treated as provisional.

**Resolution path**: No action required before Phase 2 — the canonical output is adequate. If a v4 or v5 third run produces materially different findings, this canonical output should be revisited. NON-BLOCKING.

---

### OPEN ITEM 3 — Broadcaster Status: current in glossary-about.md: NON-BLOCKING for structure

**Issue**: `glossary-about.md` marks `Broadcaster (deprecated)` with `Status: current`. This directly contradicts `deprecated-terms.md` which states "Never use Broadcaster in new documentation." The v4 Claude Web run caught and documented this conflict; the v4 ChatGPT run did not flag it but correctly used Gateway throughout.

**Resolution path**: Update `glossary-about.md` to correct `Broadcaster` Status from `current` to `deprecated`. This is a maintenance task for the glossary file, not a structural gate for Phase 2. NON-BLOCKING.

---

### OPEN ITEM 4 — Developer/Builder token split: NON-BLOCKING

**Issue**: The About tab serves both `developer` and `builder` audience tokens, which describe distinct participation depths. Both the v5 run and the v4 runs noted this overlap. The canonical output uses "Developer / Builder" as a combined category.

**Resolution path**: Confirm whether About pages should carry both audience tokens in frontmatter or a combined `developer` token. Depends on resolution of OPEN ITEM 1 (multi-audience frontmatter schema). NON-BLOCKING — structural design unaffected.
