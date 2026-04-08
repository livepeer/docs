# About — Audience Design

**Tab**: About
**Audience**: `discover` (cross-audience — see Phase 0)
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

The Audience Definitions table notes explicitly: *"About serves all audiences at the `discover` lifecycle stage. A single audience token cannot fully describe About's primary audience."*

> **AUDIENCE**: `all` at lifecycleStage `discover`

About is the only tab without a single canonical audience token. Its primary audience is anyone forming their first picture of the network — spanning every role — before they have identified which tab is theirs. The Site Ownership Map confirms this: About owns "the conceptual substrate" and routes to role tabs for depth.

---

### Step 0.2 — TERMINOLOGY_LOCK

**Authority basis**: Product Context block + `veracity-sources.md`. Glossary used as cross-check only.

| # | Term | Definition (from Product Context + authority reasoning) | Verify / Flag |
|---|---|---|---|
| 1 | **Livepeer** | A decentralised AI and video transcoding compute network running on Arbitrum One (Ethereum L2). | — |
| 2 | **Arbitrum One** | An Ethereum Layer 2 Optimistic Rollup where Livepeer's protocol contracts are deployed. Handles transactions off-chain while settling to Ethereum. | [verify-against: https://arbiscan.io/accounts/label/livepeer] |
| 3 | **Orchestrator** | A GPU hardware operator who connects machines to the network and earns fees by processing AI inference and video transcoding jobs. Must bond LPT to compete for jobs independently. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 4 | **Gateway** | A business or developer that routes AI or video jobs into the network, paying orchestrators per job. The demand side of the marketplace. (Replaces deprecated term "Broadcaster" — never use Broadcaster in new content.) | [verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md] |
| 5 | **Delegator** | An LPT token holder who stakes tokens to an orchestrator they trust, earning a share of rewards and participating in on-chain governance via stake weight. | [verify-against: https://explorer.livepeer.org] |
| 6 | **LPT (Livepeer Token)** | The ERC-20 staking and governance token. Required for orchestrators to enter the active job pool. Earned via inflation rewards and job fees. Used for delegation and on-chain governance voting. | [verify-against: https://arbiscan.io/accounts/label/livepeer] |
| 7 | **Active Set** | The top 100 orchestrators by total bonded stake eligible to receive work and inflationary rewards each round. | `[verify-live: https://explorer.livepeer.org]` — size (100) is governance-controlled |
| 8 | **Bonding / Delegation** | The act of staking LPT tokens to an orchestrator. Used by both orchestrators (self-bond for active set eligibility) and delegators (token holders staking to trusted orchestrators). | [verify-against: https://forum.livepeer.org/t/an-overview-of-bonding/97] |
| 9 | **Round** | Livepeer's fundamental protocol time unit (approximately one day of Ethereum/Arbitrum blocks). Reward minting, active set election, and inflation adjustment all occur per round. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 10 | **Dynamic Inflation** | Livepeer's LPT issuance model: the per-round rate adjusts by 0.00005% each round based on whether total bonded stake is above or below the 50% target bonding rate. | `[verify-live: https://docs.livepeer.org/delegators/guides/yield-calculation]` — rate and target are governance-controlled |
| 11 | **Treasury** | An on-chain pool of LPT governed by token holders via the LivepeerGovernor contract. Funded by a percentage of per-round inflation. Used for community-approved ecosystem grants. | [verify-against: https://explorer.livepeer.org/treasury] |
| 12 | **Stake-Weighted Voting** | The governance mechanism where each participant's vote weight is proportional to their bonded LPT. Delegators can override their orchestrator's vote with their own stake. | [verify-against: https://github.com/livepeer/LIPs — LIP-89] |
| 13 | **Probabilistic Micropayments** | A lottery-based payment scheme where gateways issue signed payment tickets to orchestrators. Only tickets that statistically "win" are redeemed on-chain, eliminating per-segment gas costs. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 14 | **Reward Call** | An on-chain transaction an active orchestrator submits each round to mint and distribute new LPT inflation to itself and its delegators. Missing a round forfeits inflation for that round. | [verify-against: https://explorer.livepeer.org] |
| 15 | **Reward Cut** | The percentage of inflationary LPT an orchestrator retains before distributing the remainder to its delegators. Configured by the orchestrator to compete for delegation. | [verify-against: https://explorer.livepeer.org] |
| 16 | **ETH Fees** | Payments in Ether from gateways to orchestrators for completed work. Delivered via the probabilistic micropayment system. Distinct from inflationary LPT rewards — represent real market demand. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 17 | **Video Transcoding** | Encoding video from one format, resolution, or bitrate to another. One of two compute types the network supports. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 18 | **AI Inference** | Running ML models — primarily image and video generation pipelines — as the second compute type the network supports. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| 19 | **LIP (Livepeer Improvement Proposal)** | A formal design document proposing a protocol change, feature, or governance parameter adjustment. Immutable once `Final`. The canonical record of protocol changes. | [verify-against: https://github.com/livepeer/LIPs] |
| 20 | **SPE (Special Purpose Entity)** | A treasury-funded organisational unit with defined scope, budget, deliverables, and accountability. Livepeer's primary mechanism for funding ecosystem development via on-chain governance approval. | [verify-against: https://forum.livepeer.org] |
| 21 | **Pool Node** | An orchestrator that participates by joining an established orchestrator pool as a worker rather than operating solo. For operators with insufficient stake to compete independently. (Note: "Pool worker" is a renamed/deprecated term — use "Pool node".) | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |

**Why 21 terms**: About covers the full conceptual substrate — protocol mechanics, tokenomics, governance, two compute types, and all four actor roles. Dropping below 20 would leave one of these pillars unrepresented. The brief permits exceeding 20 for multi-path tabs; this is the broadest-scope tab on the site.

**Deprecated terms caught**: "Broadcaster" → Gateway (confirmed per `deprecated-terms.md`). "Pool worker" → Pool node. "Inflation Model" → Dynamic Inflation (deprecated-terms.md flags overlap; using Dynamic Inflation). "Hybrid"/"Combined mode" → not needed for About. "Transcoder" as synonym for Orchestrator → not used.

**Draft terms excluded**: `veLPT` (not implemented), `Ephemeral Compute` (definition thin), `AI Video` (no external reference). `Active Set Election` excluded per `deprecated-terms.md` guidance — using "Active Set" instead.

**High-staleness values flagged**: Active Set size (100), Dynamic Inflation rate (0.00005%), target bonding rate (50%), treasury reward cut rate — all marked `[verify-live]`.

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**
About's audience has not yet picked a role label — they are still working out who they are in relation to this network. In their own world they are: GPU hardware operators, crypto investors, video platform engineers, AI application developers, protocol researchers, or token holders exploring a new asset. They do not call themselves "orchestrators" or "delegators" yet. The closest self-description before they know this network's language is: *"someone looking at a decentralised compute network and trying to figure out whether it matters to me."*

**2. What are the 3–5 actions that define their core job?**
1. Forming a picture — assembling a coherent mental model of what this network is and how it works
2. Locating themselves — identifying which role, if any, they would occupy
3. Evaluating fit — deciding whether the protocol's economics, governance, and architecture match their goals
4. Researching before committing — looking up specific protocol mechanics (inflation, governance, payments) to verify claims they've read elsewhere
5. Routing — finding the right section of the docs to go deeper once they've oriented

**3. Which terms in the TERMINOLOGY_LOCK carry network-specific meanings that differ from the industry default?**

| Term | Industry default meaning | Network-specific meaning | Risk |
|---|---|---|---|
| **Gateway** | Any API gateway or load balancer | The specific demand-side role that routes jobs into the Livepeer network and manages payments | High — a developer arriving from web infrastructure context will assume API gateway |
| **Delegator** | Any party who delegates authority to another | A token holder who stakes LPT to an orchestrator for rewards and governance — a financial and governance role, not a permissions role | High |
| **Round** | An iteration of a loop or process | A ~daily Arbitrum block interval with specific protocol consequences — active set election, reward minting, inflation adjustment | Medium |
| **Bonding** | Forming a relationship or connection | Specifically: locking LPT tokens as stake — a financial act with economic consequences | Medium |
| **Active Set** | The currently active instances of something | The specific top-100 orchestrators by stake eligible for work and rewards — a membership concept with a hard threshold | Medium |
| **Reward Cut** | A reduction in a reward | Confusingly: the portion an orchestrator *keeps*, not the cut it gives away — the complement of what delegators receive | High — direction of cut is counterintuitive |

---

## Arriving Question

> "What actually is this network — and is there a role in it for me?"

This is the single question most accurately capturing About's arriving reader. It is a two-part question but they are inseparable: the reader cannot identify their role before they understand what the network is, and they will not bother understanding the network if they cannot see a place for themselves in it.

---

## Personas

**Pre-scoring reasoning**:
- About's readers arrive from multiple vectors and hold multiple roles. Volume is spread across all role types at their earliest lifecycle stage.
- Depth must cover: the full protocol architecture, tokenomics, governance, two compute types, and all four actor roles — high content surface for every persona.
- Impact is high for every persona that might become a long-term participant, and moderate for pure researchers.

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Role Seeker** | Homepage routing CTA, Discord link, search result for "what is Livepeer" | General crypto/tech awareness; has heard the name; no role context | A clear role identity — "I'm a delegator / orchestrator / gateway operator" — and a link to the right tab | 3 | 3 | 3 | **9** |
| 2 | **The Economics Researcher** | Search for "Livepeer tokenomics", "LPT staking rewards", "Livepeer inflation" | Has LPT or is evaluating buying; wants to model returns; knows DeFi concepts | A defensible mental model of LPT incentives, inflation mechanics, and reward distribution they can use to make a staking or investment decision | 3 | 3 | 3 | **9** |
| 3 | **The Protocol Architect** | External technical article, podcast, GitHub README, whitepaper link | Strong distributed systems or blockchain background; evaluating for integration or research | Enough architectural depth to assess feasibility for a specific use case — or to know they need to talk to someone | 2 | 3 | 3 | **8** |
| 4 | **The Governance Participant** | LIP forum link, community Discord, governance announcement | Active LPT holder or delegator; familiar with staking; wants to understand governance mechanics before voting | Knows how governance works: voting weight, LIP lifecycle, treasury, quorum rules, SPEs — enough to vote with intent | 2 | 2 | 2 | **6** |
| 5 | **The Curious Observer** | Press article, conference mention, general interest in decentralised infrastructure | Little or no crypto background; wants to know if this is real and whether it matters | A single confident sentence they can use to explain Livepeer to someone else | 3 | 1 | 1 | **5** |

**Primary persona**: **The Role Seeker** (tied score with Economics Researcher, but drives structural priority because role identification is the prerequisite for all other goals — including the Economics Researcher's). The Role Seeker drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path would otherwise be blocked.

**Self-identification check**: What label does this audience use to self-identify? They do not — that is the problem About must solve. The arriving reader does not yet know whether they are a GPU operator, a token staker, a developer, or none of the above. This is not a binary routing decision; it is a multi-path disambiguation problem. Four meaningfully distinct participation paths exist (Orchestrator, Gateway, Delegator, Developer/Builder), each with different hardware requirements, capital requirements, and technical entry points. A reader cannot identify their path without reading at least enough to distinguish the roles.

→ **Decision**: A dedicated disambiguation section is required as the first content section. It routes readers to the correct role tab; it does not explain mechanics. `purpose: orient`, `pageType: navigation`.

**Entry blockers**:
- No hard capital or hardware requirement prevents any persona from reading About. There are no structural activation blockers.
- **Conceptual blocker**: Readers without basic blockchain/crypto context may not know what "staking", "on-chain governance", or "L2" mean. This is a knowledge blocker, not a structural blocker. It is resolved by defining these concepts in context before relying on them — not by creating a dedicated section. Every concept page that uses these terms must introduce them in context on first use.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I've just heard about Livepeer and have no idea what it is | form a coherent picture of the network in plain language | decide whether to spend more time on it |
| 2 | I understand the basic concept but don't know which role fits my situation | identify which participation path matches my resources and goals (GPU hardware, LPT capital, a development project, or a business routing video jobs) | go to the right section of the docs and stop wasting time on the wrong one |
| 3 | I'm evaluating whether to stake or buy LPT | understand exactly how inflation, bonding, reward cuts, and fee share work — and what the variables I can't control are | model expected returns with realistic assumptions and decide whether to proceed |
| 4 | I'm a technical evaluator assessing whether Livepeer's architecture can serve a specific workload | understand the job lifecycle, payment model, and network trust assumptions | determine feasibility without needing to run a node |
| 5 | I hold LPT and want to participate in governance | understand how voting works, what the quorum rules are, how LIPs are proposed and passed, and what the treasury funds | vote with intent rather than delegation inertia |
| 6 | I've read a claim about Livepeer (e.g. "50% bonding rate target", "0.00005% inflation adjustment") and want to verify it | find the authoritative protocol mechanics, with sources I can check myself | trust or reject the claim and share a reliable source with others |
| 7 | I need to explain Livepeer to a colleague, investor, or co-founder | find a clear, technically honest one-paragraph description of what the network is and how it creates value | not have to write it from scratch or paraphrase something that might be wrong |

---

## Ideal Journey

**Linear** (discovery → orientation — sequential):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Network orientation | `discover` | Forming a basic picture of what Livepeer is — the problem it solves, the two compute types, the basic actor structure |
| 2 | Role identification | `discover` | Mapping themselves to a role — or ruling all of them out — using a structured comparison of participation paths |
| 3 | Protocol mechanics | `evaluate` | Going deeper on how the network actually works: job flow, payment model, verification, trust assumptions |
| 4 | Token and economics | `evaluate` | Understanding LPT: what it does, how inflation works, how rewards flow, what variables they control |
| 5 | Governance model | `evaluate` | Understanding how the protocol changes: LIPs, stake-weighted voting, treasury, SPEs |
| 6 | Role-tab handoff | `evaluate` | Choosing a destination tab with enough context to know why they're going there |

**On-demand** (return visits after completing the linear journey):

- *Protocol parameter values* — current inflation rate, target bonding rate, active set size, unbonding period
- *LIP index and status* — which LIPs are Final, Active, Draft; what changed with a specific LIP
- *Contract addresses* — BondingManager, TicketBroker, LivepeerGovernor, Minter
- *Governance timeline and outcomes* — past votes, treasury allocations, SPE approvals
- *Network roles at a glance* — a quick-reference comparison of what each actor does
- *Reward and fee mechanics summary* — quick lookup for how reward cut, fee share, and inflation interact
- *Upgrade history* — what Confluence, Streamflow, and Cascade each introduced
- *Payment model mechanics* — how probabilistic micropayments work, expected value, winning ticket redemption

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → About | Homepage routes readers who want to understand the protocol before committing to a role tab |
| Inbound | Any role tab → About | Role tabs route readers back to About for protocol economics depth (e.g. Delegators → About for inflation mechanics) |
| Inbound | Community → About | Community discourse references protocol mechanics that live in About |
| Outbound | About → Orchestrators | Role-identified GPU operators, or delegators evaluating orchestrators to stake to |
| Outbound | About → Gateways | Businesses evaluating routing video or AI workloads into the network |
| Outbound | About → Developers | Builders evaluating technical integration |
| Outbound | About → Delegators | Token holders ready to stake |
| Outbound | About → Community | Readers whose goal is ecosystem participation without a specific operator role |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. What is Livepeer? | "What is this network, in plain language?" | J1 — form a coherent picture | `orient` | `concept` | Has heard the name; no structured picture of the network | Has a one-paragraph mental model: decentralised compute, two workload types, four actor roles, runs on Arbitrum | `discover` |
| 2. Which role is mine? *(Disambiguation — required by self-identification check)* | "I understand the basics — but where do I fit?" | J2 — identify participation path | `orient` | `navigation` | Has completed Section 1; wants to know which tab is theirs | Has identified their role and followed the correct outbound link to the appropriate role tab | `discover` |
| 3. How the network works | "How do jobs actually flow from demand to completion and payment?" | J4 — assess architectural feasibility | `explain` | `concept` | Has a basic picture of roles; wants to understand mechanics | Has decided whether the network's job lifecycle, trust assumptions, and payment model match their use case — can articulate the flow end-to-end | `evaluate` |
| 4. The payment model | "How do gateways pay orchestrators — and why doesn't this require a transaction per segment?" | J4, J6 — verify technical claims about payment mechanics | `explain` | `concept` | Understands the job flow; wants to know how money moves | Can explain probabilistic micropayments, winning ticket redemption, and why ETH fees arrive probabilistically rather than per-job | `evaluate` |
| 5. LPT and the token economy | "What does LPT actually do — and why would I want to hold or stake it?" | J3 — model staking returns; J6 — verify claims | `explain` | `concept` | Has role context and understands job flow; wants to understand the token | Can state what LPT is used for, how inflation works, how the target bonding rate self-regulates issuance, and which variables they can and cannot control | `evaluate` |
| 6. Rewards and earnings | "How do rewards actually flow — between orchestrators, delegators, and the treasury?" | J3 — model returns; J5 — understand what governs treasury allocation | `explain` | `concept` | Understands LPT purpose and inflation mechanics | Can trace the flow of inflationary LPT and ETH fees from issuance through reward cut and fee share to delegator earnings — and has identified the governance-controlled variables they need to verify live | `evaluate` |
| 7. Governance | "How does the protocol change — and how do I participate in decisions?" | J5 — vote with intent; J6 — verify governance claims | `explain` | `concept` | Understands the token economy; wants to understand protocol control | Has decided whether and how to participate in governance; can describe the LIP lifecycle, stake-weighted voting, and treasury allocation process | `evaluate` |
| 8. Network upgrades and history | "What has changed over time — and what is being built next?" | J6 — verify claims about upgrade phases; J7 — explain to others | `learn` | `concept` | Has read governance section; wants historical context for current state | Has located the correct upgrade phase context for any claim they're verifying; can place Confluence, Streamflow, and Cascade in sequence | `evaluate` |

**Section count**: 8. Within the 7–14 target range. About is intentionally lean on section count because it is a substrate tab — it must orient and route, not become a second comprehensive reference. The role tabs carry depth; About carries conceptual clarity.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Role Seeker | §1 — What is Livepeer? | §2 — Which role is mine? | None | None — §1 provides the minimal role overview needed before §2 routes them | None |
| Economics Researcher | §1 — What is Livepeer? | §6 — Rewards and earnings | None | None — §5 and §6 provide the inflation and reward flow mechanics they need; §5 explicitly flags governance-controlled variables and verify-live sources | None |
| Protocol Architect | §1 — What is Livepeer? | §4 — The payment model | None | Potential gap: trust assumptions and verification mechanics not yet in §3. §3 must include the verification model (probabilistic spot-checking, slashing) alongside job flow to be complete for this persona. Add this content within §3. | None — within §3 scope |
| Governance Participant | §7 — Governance | §7 — Governance | None | None — §7 covers LIP lifecycle, stake-weighted voting, quorum, treasury, and SPEs. §5–6 must be read first to understand the token mechanics that underpin governance; §7 placement after §5–6 ensures this path is unblocked. | None |
| Curious Observer | §1 — What is Livepeer? | §1 — What is Livepeer? | None | §1 must not assume blockchain knowledge — "Arbitrum", "L2", "staking" must be defined in-context on first use. | None — within §1 scope |

**All personas have unblocked paths. No structural additions required. Two in-section content requirements noted:**
1. §3 must include verification model and slashing conditions to serve the Protocol Architect without requiring them to go elsewhere.
2. §1 must define Arbitrum, L2, and staking on first use to serve the Curious Observer without assuming crypto context.

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table — `all` at `discover`, with explicit note from the brief that a single token cannot describe About
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary used as cross-check only
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock
- [x] Arriving question is specific — "What actually is this network — and is there a role in it for me?" is a question, not a topic
- [x] Personas described with motivation and entry vector — not just role labels
- [x] Self-identification check done — dedicated disambiguation section (§2) added as first content section
- [x] Entry blockers identified — conceptual blocker (crypto literacy) resolved by in-context definition in §1, not by separate section; no structural activation blockers exist
- [x] Jobs are first-principles — not derived from current nav structure
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions
- [x] Cross-tab gate applied — all cross-tab routing is explicit; no content omitted from About on grounds that it "lives" elsewhere at the conceptual level
- [x] Persona path validation done — every persona has an unblocked path; two in-section content requirements noted
- [x] All enum values are canonical — `orient`, `explain`, `learn`, `concept`, `navigation`, `discover`, `evaluate` all from canonical lists

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The Audience Definitions table includes an explicit note that About cannot be assigned a single token — this was well-specified and required no assumption. The resolution (all audiences at `discover`) is stated in the brief itself.

- **[Phase 0 / Step 0.2]**: 21 terms in the TERMINOLOGY_LOCK (above the 20-term default). Justified because About covers the full conceptual substrate: two compute types, four roles, full tokenomics, governance, and payment mechanics. Dropping below 20 would require omitting a structurally important term. Brief explicitly permits this with an explanation.

- **[Phase 0 / Step 0.2 — Verify flags]**: Several high-staleness values embedded in glossary definitions (inflation adjustment rate 0.00005%, target bonding rate 50%, active set size 100, unbonding period 7 rounds) were flagged `[verify-live]` per `deprecated-terms.md`. The TERMINOLOGY_LOCK does not assert these as current values — it flags them for verification against the Explorer and governance records before publication.

- **[Phase 0 / Step 0.2 — Glossary cross-check]**: `Inflation Model` appears in the glossary as a draft term with a `status: draft` flag. `deprecated-terms.md` explicitly states to use "Dynamic Inflation" instead. Used Dynamic Inflation in the lock; Inflation Model excluded.

- **[Phase 0 / Step 0.2 — Glossary cross-check]**: `Unbonding period` listed in the glossary as "7-round waiting period". This is a governance-controlled value per `deprecated-terms.md`. The TERMINOLOGY_LOCK references Unbonding as a concept but does not embed the 7-round figure as fact; it is flagged `[verify-live]` for the Delegators tab where the specific value matters. About uses it at the conceptual level only.

- **[Phase 1 — Persona scoring]**: Role Seeker and Economics Researcher tied at 9. The decision to make Role Seeker primary (rather than splitting primacy) was made on the grounds that role identification is the prerequisite for the Economics Researcher's goal — a reader cannot model staking returns until they know they are a delegator or orchestrator. Role identification must therefore come first structurally.

- **[Phase 2C — Section count]**: 8 sections. Below the midpoint of the 7–14 range. Justified by About's function as a substrate-and-routing tab: depth is owned by the role tabs. About must be conceptually complete but not operationally comprehensive. Expanding to 10+ sections would require adding operational or setup content that belongs in role tabs.

- **[Phase 2C — §2 Disambiguation]**: Section §2 ("Which role is mine?") is a `navigation` / `orient` page per the Disambiguation section rule in the brief. Its sole purpose is routing. It does not teach mechanics — it provides enough contrast between the four participation paths (hardware needed, capital needed, technical entry point) for a reader to self-select. The content design for this page will require a comparison table or decision tree; that is a detail-design concern, not a structural concern.

- **[Suggested sources for veracity-sources.md]**:
  - `[SUGGESTED SOURCE: Livepeer Explorer — https://explorer.livepeer.org — live on-chain state for active set, stake, reward calls, treasury — primary]` (already listed)
  - `[SUGGESTED SOURCE: Livepeer LIPs repo — https://github.com/livepeer/LIPs — formal governance records — primary]` (already listed)
  - `[SUGGESTED SOURCE: Arbiscan Livepeer label — https://arbiscan.io/accounts/label/livepeer — contract addresses and on-chain verification — primary]` (already listed)
  - No additional sources found during this execution that are not already registered.
