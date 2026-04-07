# About — Audience Design

**Tab**: About
**Audience**: substrate — all audiences at `discover` lifecycleStage (see Phase 0 below)
**TERMINOLOGY_LOCK**: see Phase 0
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

The Audience Definitions table contains the note: *"About serves all audiences at the `discover` lifecycle stage. A single audience token cannot fully describe About's primary audience."*

**AUDIENCE**: `discover-substrate` — this tab does not map to a single canonical audience token. It serves every arriving audience (`founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community`) at the `discover` lifecycleStage. The primary structural driver is the arriving reader's need to form a reliable picture of what Livepeer is before branching to their role-specific tab.

---

### Step 0.2 — TERMINOLOGY_LOCK

**Authority basis**: Product Context block as primary; veracity-sources.md for source assignments; per-tab glossary as cross-check only.

**Terms selected** (22 terms — exceeds 20 because the About tab must cover all network participation paths without omitting any; see Addendum flag [Phase 0 / Step 0.2]):

| # | Term | Definition (derived from Product Context + primary sources) | Source verification notes |
|---|---|---|---|
| 1 | Livepeer | A decentralised AI and video transcoding compute network running on Arbitrum (Ethereum L2). | Product Context block — conceptual claim; `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 2 | Arbitrum (Arbitrum One) | A Layer 2 Optimistic Rollup network that settles to Ethereum; the chain where Livepeer protocol contracts are deployed. | Glossary cross-check consistent with Product Context. `[verify-against: https://arbiscan.io/accounts/label/livepeer]` for deployed contracts. |
| 3 | Orchestrator | A GPU hardware operator who connects their machine to the network, stakes LPT, and earns fees by processing AI inference and video transcoding jobs. | Product Context block; `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` and `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| 4 | Gateway | The demand-side participant who routes AI or video jobs into the network and pays orchestrators per job. Replaces the deprecated term "Broadcaster." | Product Context block; deprecated-terms.md confirms "Broadcaster" → "Gateway." `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` |
| 5 | Delegator | An LPT token holder who stakes their tokens to an orchestrator they trust, earning a share of rewards and participating in on-chain governance. | Product Context block; glossary cross-check consistent. |
| 6 | Developer / Builder | Participants who build applications and pipelines using Livepeer's compute capacity, typically via gateway APIs or SDKs. | Product Context block. Two overlapping audience tokens (`developer`, `builder`) describe distinct participation depths — noted in Addendum. |
| 7 | LPT (Livepeer Token) | Used for staking (required for orchestrators to enter the active job pool), delegation, and on-chain governance. Earned via inflation rewards and job fees. | Product Context block; `[verify-against: https://explorer.livepeer.org]` for live token state. |
| 8 | Active Set | The top 100 orchestrators by total bonded stake that are eligible to receive work and inflationary rewards each round. The size (100) is governance-controlled. `[verify-live: https://explorer.livepeer.org]` | Glossary cross-check consistent with Product Context. Active set size must be verified live. |
| 9 | Round | A discrete time interval (approximately one Ethereum day of blocks on Arbitrum) during which staking rewards are calculated, the active set is determined, and protocol state is updated. | Product Context block (implied by reward/stake mechanics); `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 10 | Bonding / Staking | Locking LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system to participate in network security and earn rewards. | Glossary cross-check consistent; `[verify-against: https://forum.livepeer.org/t/an-overview-of-bonding/97]` (acceptable tier — date-check required) |
| 11 | Unbonding | The process of initiating withdrawal of bonded LPT from an orchestrator, which triggers a waiting period before tokens become liquid. The length of this period is governance-controlled. `[verify-live: https://explorer.livepeer.org]` | Glossary cross-check consistent; period duration is a governance-controlled value. |
| 12 | Probabilistic Micropayments | A lottery-based payment scheme where only winning tickets are redeemed on-chain, amortising transaction costs across many small per-segment payments without requiring per-payment gas. | Glossary cross-check consistent; `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| 13 | ETH Fees | Payments in Ether made by gateways to orchestrators for completed transcoding or AI inference work, delivered via the probabilistic micropayment system. | Glossary cross-check consistent with Product Context. |
| 14 | Dynamic Inflation | Livepeer's inflation model where the per-round LPT issuance rate adjusts based on whether staking participation is below or above a target bonding rate. The target rate and adjustment step are governance-controlled. `[verify-live: https://explorer.livepeer.org]` and `[verify-against: https://github.com/livepeer/LIPs]` | Glossary cross-check consistent; specific values (50% target, 0.00005% step) are governance-controlled — must not be hard-coded without live verification. |
| 15 | Reward Cut | The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder to delegators. | Glossary cross-check consistent; `[verify-against: https://explorer.livepeer.org]` for live values per orchestrator. |
| 16 | Fee Share | The portion of ETH fees earned by an orchestrator that is distributed to delegators, determined by the orchestrator's configured fee cut parameter. | Glossary cross-check consistent. |
| 17 | Video Transcoding | Converting a source video signal from one encoding format, resolution, or bitrate to another — Livepeer's original and ongoing compute workload type. | Product Context block. |
| 18 | AI Inference | Running ML model pipelines — primarily image and video generation — as the second compute workload type on the Livepeer network. | Product Context block. |
| 19 | Governance | The on-chain mechanism by which LPT token holders — both orchestrators and delegators — vote on protocol changes, parameter adjustments, and treasury allocations via stake-weighted voting. | Product Context block; `[verify-against: https://github.com/livepeer/wiki/wiki/Governance]` and `[verify-against: https://github.com/livepeer/LIPs]` (cross-check LIP-89 for Governor contract) |
| 20 | Treasury | The on-chain pool of LPT governed by token holders, funded by a percentage of per-round inflation and used for community-approved ecosystem grants and development. | Glossary cross-check consistent; treasury reward cut rate is governance-controlled. `[verify-live: https://explorer.livepeer.org/treasury]` |
| 21 | SPE (Special Purpose Entity) | A treasury-funded organisational unit with a defined scope, budget, and accountability mechanism for executing ecosystem initiatives, proposed and approved via governance. | Glossary cross-check consistent; `[verify-against: https://github.com/livepeer/LIPs]` for specific SPE approvals. |
| 22 | Slashing | A penalty mechanism that destroys a portion of an orchestrator's bonded LPT for protocol violations such as failing verification or underperformance. | Glossary cross-check consistent; `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |

**TERMINOLOGY_LOCK**: `Livepeer, Arbitrum (Arbitrum One), Orchestrator, Gateway, Delegator, Developer/Builder, LPT (Livepeer Token), Active Set, Round, Bonding/Staking, Unbonding, Probabilistic Micropayments, ETH Fees, Dynamic Inflation, Reward Cut, Fee Share, Video Transcoding, AI Inference, Governance, Treasury, SPE (Special Purpose Entity), Slashing`

**Deprecated term check — Broadcaster**:
The glossary (`glossary-about.md`) lists "Broadcaster (deprecated)" with Status: `current` — this is a status field conflict. The heading says "deprecated" but the Status field says "current." Per `deprecated-terms.md`, "Broadcaster" is definitively **Deprecated** and its current replacement is **Gateway**. The glossary Status field of `current` is incorrect for this entry.

`[DEFINITION CONFLICT: Broadcaster — glossary-about.md heading marks this as deprecated but the Status field reads "current"; deprecated-terms.md explicitly lists it as Deprecated with replacement "Gateway (operator)". Do not assert that Broadcaster is a current term. Use Gateway. Flag for glossary correction.]`

**Draft term check**:
- `Inflation Model` — deprecated-terms.md flags this as overlapping with Dynamic Inflation. Excluded from lock; `Dynamic Inflation` used instead.
- `Active Set Election` — deprecated-terms.md flags overlap with Active Set. Using `Active Set` unless referring specifically to the election mechanism; excluded as a standalone lock term.
- `Ephemeral Compute` — Status draft in glossary; excluded.
- `veLPT` — proposal not implemented; excluded.

**NaaP / Network as a Platform — check**:
The veracity-sources.md entry for NaaP notes: *"NaaP (Network as a Platform) design, scope, and architecture"* and directs to Livepeer Notion. No NaaP term appears in the per-tab glossary for About. No NaaP term appears in the Product Context block. Term not included in the lock — no basis to assert its definition from available sources.

**No web access** is available in this run. Suggested source additions are noted in the Addendum.

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

The About tab is not a single-audience tab. Arriving readers self-identify using labels from their own professional contexts before they know Livepeer's terminology:

- A person evaluating Livepeer for their product calls themselves a **founder**, **product manager**, **business lead**, or **startup CEO**.
- A person building an application calls themselves a **developer**, **engineer**, or **software builder**.
- A person looking at GPU node operation calls themselves a **node operator**, **miner**, **compute provider**, or **GPU farmer**.
- A person looking at token staking calls themselves a **token holder**, **crypto investor**, or **DeFi participant**.
- A researcher or community member calls themselves a **researcher**, **contributor**, or **ecosystem participant**.

Before they know Livepeer's terminology, none of them call themselves "Orchestrator," "Gateway," or "Delegator." These are terms the About tab must introduce.

**2. What are the 3–5 actions that define their core job at arrival?**

Because About serves all audiences at `discover`, the core arrival actions are:
1. **Work out what this network actually does** — is it video, AI, both? What problem does it solve?
2. **Find where they belong** — which role (if any) fits their situation and goals?
3. **Assess whether it is credible and active** — is the network live, real, and worth further time?
4. **Understand the economic model in outline** — how does money flow? What does participation cost or earn?
5. **Decide whether to continue deeper** — leave with a confident yes/no on further investigation, not just curiosity.

**3. Terms in the TERMINOLOGY_LOCK with network-specific meanings that differ from industry default**:

| Term | Industry default meaning | Livepeer-specific meaning / risk of confusion |
|---|---|---|
| Gateway | In networking, a router or protocol bridge between networks. In enterprise software, an API gateway is a proxy layer. | In Livepeer, a Gateway is a specific protocol role — the demand-side participant who routes jobs and manages payments. A reader who builds APIs may assume "Gateway" means an API proxy layer, not a protocol actor with stake, payment channels, and fee obligations. Must be explained before use. |
| Delegator | In programming, an object that delegates method calls. In some DPoS chains, a passive staker. | In Livepeer, a Delegator is a specific protocol actor with governance voting rights and earnings from both inflationary LPT and ETH fees. The passive-staker mental model may cause readers to underestimate the governance dimension. |
| Orchestrator | In software, an orchestration layer (e.g. Kubernetes orchestrates containers). | In Livepeer, an Orchestrator is a GPU hardware operator and specific protocol role — not a coordination layer. A developer familiar with Kubernetes or container orchestration will misread this term on first encounter. Must be explained before use. |
| Round | In cryptography, a round is a cipher iteration. In general use, a time period. | In Livepeer, a Round is a governance-significant time unit that determines active set membership, reward eligibility, and inflation adjustments. The time-unit meaning is shared, but the protocol significance (active set election, reward calls required) is not. |
| Slashing | In DPoS/PoS chains, slashing is broadly understood. | In Livepeer, slashing destroys bonded LPT for verification failures — this includes the delegators' proportional stake, not just the orchestrator's. Readers from PoS chains may not expect delegators to share slashing exposure. `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` |
| Bonding | In finance, a bond is a debt instrument. In some chains, bonding has a specific mechanism. | In Livepeer, bonding (staking) LPT is the mechanism that determines active set eligibility for orchestrators and governs reward distribution for delegators. The term is used interchangeably with "staking" in the glossary — readers should be introduced to both forms. |

---

## Arriving Question

> "What is Livepeer, who is it for, and is any of this relevant to what I'm trying to do?"

This question is the correct arriving question for a `discover`-stage substrate tab. It is specific to the reader's evaluation state on first encounter — not a topic area, but the literal decision gate they are resolving.

Note: different arriving audiences carry slightly more specific variants of this question, but all converge on the same orientation need. The variants are:
- A founder: *"Can Livepeer provide the compute infrastructure my product needs?"*
- A GPU operator: *"Can I earn money running my hardware on this network?"*
- A token holder: *"Is this a credible protocol to stake my tokens with?"*
- A developer: *"Is the API/SDK mature enough to build on?"*
- A community member: *"What is this ecosystem and how do I participate?"*

These variants are served by the same tab structure but diverge at the routing section (S1).

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Product evaluator — considering Livepeer as infrastructure for their application or platform | External article, search result, or referral from a colleague; may also come from the Home tab CTA | General awareness that Livepeer is a video/AI compute network; no knowledge of how the protocol works, what the roles are, or what it costs | A clear answer to "is this the right infrastructure for my use case?" — enough to decide whether to read the Solutions tab | 3 | 3 | 3 | 9 |
| 2 | Token and network researcher — evaluating Livepeer as a staking or investment opportunity, or researching the protocol for a report or analysis | Search result on "LPT staking," "Livepeer tokenomics," or "Livepeer protocol"; Messari/Dune/CoinGecko referral | Awareness that LPT exists; no knowledge of how delegation, inflation, or governance work | A reliable outline of the economic model — inflation, rewards, governance weight — sufficient to decide whether to read the Delegators tab or run deeper research | 3 | 3 | 3 | 9 |
| 3 | GPU operator — evaluating whether to connect hardware to the network for earnings | Discord, community forum, or search result on "Livepeer orchestrator setup" or "GPU compute earnings" | Hardware already provisioned or under consideration; no knowledge of Livepeer's protocol roles, stake requirements, or job types | Clarity on what operating a node requires — stake, hardware, job types, economics — sufficient to decide whether to continue to the Orchestrators tab | 2 | 3 | 3 | 8 |
| 4 | Developer — evaluating the Livepeer API and SDK as a technical foundation | Search result on "Livepeer API," "AI video pipeline," or referral from developer community; may arrive via Home or Solutions | Technical context on AI/video APIs generally; no knowledge of Livepeer's protocol layer or token economics | Sufficient conceptual grounding in the protocol architecture to evaluate whether the API surface meets their needs, before going to the Developers tab | 2 | 2 | 3 | 7 |
| 5 | Ecosystem newcomer / community member — learning what Livepeer is for non-technical or non-investment reasons | Discord, Twitter/X, a blog post, podcast, or referral from an existing community member | Minimal — may have heard the name; interested in the mission and community | A legible account of what Livepeer does, who runs it, what the governance model is, and how to participate — sufficient to decide whether to go to the Community tab | 3 | 2 | 2 | 7 |

**Primary persona**: The product evaluator (Rank 1) and the token/network researcher (Rank 2) tie at score 9. Both are co-primary for this tab. Because neither is a single-audience tab driver, the section structure must serve both without privileging one. The disambiguating architectural logic (routing readers to their correct path) governs the entire structure. All other personas are accommodated within that structure.

**Self-identification check**: Arriving readers do not yet know Livepeer's role terminology. They may identify as "a founder looking to use Livepeer," "someone who wants to stake LPT," "a node operator," "a developer," or simply "someone curious about the project." None of these maps cleanly to a single role path without the About tab first explaining the roles. Given that:
- There are 5 meaningfully different arrival paths with different setup and onward routes
- The reader cannot identify their correct path without first reading role definitions
- A routing callout within a single section cannot accommodate 5 paths

**Decision: A dedicated disambiguation section is required as the first content section.** It has `purpose: orient`, `pageType: navigation`, `lifecycleStage: discover`. Its exit state is: "has identified which role tab (if any) applies to their situation and has a named next step."

**Entry blockers**: No hard-stop blockers exist for the About tab — reading requires no on-chain funding, software install, or prior configuration. The tab is fully accessible to all arriving readers. Section order is therefore driven by natural question sequence, not blocker resolution.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I first encounter Livepeer and have no context | Understand in plain terms what the network does, who built it, and what problem it solves | Decide in under five minutes whether this is worth investigating for my specific situation |
| J2 | I am evaluating whether to use Livepeer for my product | Understand the two compute types (video transcoding and AI inference) and how gateways access them | Assess whether the compute supply meets my product's latency, quality, and cost requirements before spending time on integration docs |
| J3 | I hold LPT or am considering buying it | Understand how staking, inflation, and fee distribution work at a conceptual level | Evaluate whether delegating to an orchestrator is worth it, and which dimensions of the economics I should research further in the Delegators tab |
| J4 | I run GPU hardware and want to earn from it | Understand what running an orchestrator requires — stake, hardware, job types, and economics — in enough detail to decide whether to proceed | Avoid wasting time on setup docs for a path that doesn't fit my situation (e.g. insufficient stake, wrong hardware type) |
| J5 | I need to understand how protocol decisions get made | Understand the governance model — who votes, on what, with what weight, and where decisions land | Evaluate whether the protocol's direction is aligned with my interests before committing stake, capital, or engineering time |
| J6 | I want to understand the organisation behind Livepeer | Understand the relationship between the Livepeer Foundation, the on-chain Treasury, and the open-source protocol | Assess the governance and longevity risk before building on or staking in the network |
| J7 | I am mid-journey and need to confirm I am on the right conceptual path | Look up a specific term or mechanism (e.g. what "bonding" means, what the "active set" is) | Continue reading a role-specific tab without returning to first principles |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting to the network | `discover` | Forming a first reliable picture of what Livepeer is — what it does, the two compute types, and the high-level cast of actors |
| 2 | Identifying their role | `discover` | Finding which of the five participation paths (or none) fits their situation, and naming their next destination tab |
| 3 | Understanding the protocol mechanics | `discover` | Building a mental model of how work flows through the network — jobs, orchestrator selection, payment, verification |
| 4 | Grasping the economics | `discover` | Understanding how value is created and distributed — ETH fees, LPT inflation, stake-weighted rewards, reward cut |
| 5 | Understanding governance and the organisation | `discover` | Learning how protocol decisions get made, who funds development, and how the Foundation, Treasury, and SPEs relate |
| 6 | Routing to depth | `discover` → `evaluate` | Choosing a next tab that matches their path and arriving with enough context to make good use of it |

**On-demand** (information this audience returns to look up after completing the linear journey):

- Current active set size and whether it is governance-controlled
- Governance-controlled parameter values — unbonding period, target bonding rate, inflation adjustment step, treasury reward cut rate
- Definitions of specific protocol terms (Active Set, Round, Slashing, Probabilistic Micropayments)
- The relationship between LPT and ETH in the reward model — which comes from inflation, which from fees
- How the Treasury is funded and what SPEs are
- The difference between video transcoding and AI inference as compute types, and which gateway/developer path maps to each
- What the Confluence upgrade was and what chain the protocol currently runs on
- The difference between Orchestrator, Gateway, and Delegator roles in plain language

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → About | Home routes discovery-stage readers who want protocol depth beyond the platform narrative |
| Inbound | Resource HUB → About | Readers looking up protocol economics or governance terms may be routed back to About for conceptual context |
| Inbound | Delegators → About | Delegators tab routes readers who need protocol economics depth back to About |
| Inbound | Any role tab → About | Role tabs may link to About for conceptual definitions rather than duplicating architecture content |
| Outbound | About → Solutions | Product evaluators and builders who have confirmed Livepeer is relevant route to Solutions for product-specific application |
| Outbound | About → Orchestrators | GPU operators who have confirmed the role fits their situation route to Orchestrators for setup and operations |
| Outbound | About → Delegators | Token holders and staking researchers who have confirmed relevance route to Delegators for mechanics and yield detail |
| Outbound | About → Developers | Technical builders who want to understand the API/SDK surface route to Developers |
| Outbound | About → Gateways | Gateway operators routing jobs into the network proceed to the Gateways tab for setup and operational content |
| Outbound | About → Community | Ecosystem newcomers and contributors route to Community for participation paths |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Role router: which path is mine? | "I've heard of Livepeer — which of these five roles (if any) matches what I'm here to do?" | J1 | `orient` | `navigation` | Arriving with no knowledge of Livepeer's role structure; knows only their own situation | Has identified their participation path (or confirmed they are a general researcher) and has a named next tab to visit | `discover` |
| S2 — What Livepeer is: the network in plain terms | "What does this network actually do — video, AI, or both — and is it live?" | J1 | `explain` | `concept` | Has been routed but has no mental model of the network's function | Can describe in one sentence what Livepeer does and has confirmed the network is deployed and active | `discover` |
| S3 — How the network works: jobs, actors, and flow | "How does a piece of work actually move through this network — from request to result?" | J2, J4 | `explain` | `concept` | Knows what Livepeer does but has no picture of how a job flows, who touches it, or what the roles do | Can trace a job from a gateway submitting it, through orchestrator selection, to work execution and payment — and can explain each actor's role in one sentence | `discover` |
| S4 — The two compute types: video transcoding and AI inference | "What is the difference between the video and AI workloads, and does that distinction affect which path I'm on?" | J2, J4 | `explain` | `concept` | Understands the high-level flow but has not yet distinguished between the two workload types | Has decided which compute type (or both) is relevant to their use case, and can name the technical difference in plain terms | `discover` |
| S5 — The economic model: how value flows | "How does money actually move through this network — what do I earn, pay, or stake?" | J3, J4 | `explain` | `concept` | Understands the actor roles and job flow but has not yet seen how fees and rewards work | Can describe the two income streams (ETH fees and LPT inflation) and which actors receive each, sufficient to decide whether to investigate further in the Delegators or Orchestrators tab | `discover` |
| S6 — LPT: the protocol token | "What is LPT for — is it just a speculative token or does it serve a function in the protocol?" | J3, J7 | `learn` | `concept` | Has seen LPT mentioned in context but does not yet have a clear picture of its roles (staking, delegation, governance, inflation) | Can state the three functions of LPT (staking eligibility, delegation and rewards, governance voting weight) and knows what drives its issuance and demand | `discover` |
| S7 — Staking and delegation: how stake works | "What does staking or bonding LPT actually involve — and what happens to my tokens?" | J3, J7 | `explain` | `concept` | Knows LPT's functions but has not yet understood bonding mechanics, unbonding periods, or slashing exposure | Can state what bonding requires, what the unbonding waiting period means, and that slashing can affect delegators' bonded stake — sufficient to decide whether to read the Delegators tab for full mechanics | `discover` |
| S8 — Governance: how decisions are made | "Who actually controls this protocol — and can I have a say?" | J5 | `explain` | `concept` | Has a picture of economic mechanics but has not yet seen the governance model | Can describe stake-weighted voting, where proposals originate (LIPs, forum), how the Governor contract executes decisions, and how delegators can vote independently from their orchestrator | `discover` |
| S9 — The organisation: Foundation, Treasury, and SPEs | "Is there a company behind this, and how does it relate to the protocol?" | J6 | `explain` | `concept` | Has seen the governance model but has not yet mapped out the entities and their relationships | Has decided how to characterise Livepeer's organisational model — distinguishing the open protocol, the on-chain Treasury, the Foundation, and SPE-funded work — and can assess longevity and governance risk | `discover` |
| S10 — Ecosystem and current state | "What has been built on this already — and is it actively developed?" | J1, J6 | `evaluate` | `concept` | Has a conceptual model of the protocol but lacks evidence of real-world use and active development | Has reviewed at least one current product (Daydream, ComfyStream, or equivalent) and the upgrade history (Confluence, Cascade) sufficient to form a preliminary credibility judgment | `discover` |
| S11 — Glossary: protocol term definitions | "What does [specific term] mean in Livepeer's context?" | J7 | `reference` | `reference` | Has completed linear reading or is returning with a specific term question | Has the correct Livepeer-specific definition of the term they were looking for, and can return to the section or tab they came from | `discover` |

**Section count**: 11 sections — within the 8–12 target range.

**Section load check**:
- S10 accumulates `purpose: evaluate` alongside some orientation work (confirming the network is active). This is acceptable at the `discover` lifecycleStage because the reader needs credibility signals before routing — it is a single concrete exit state (formed a preliminary credibility judgment). No flag required.
- S7 covers bonding, delegation, and slashing in one section. This may accumulate too much material if the glossary entry for each is long. `[⚠ Design flag: may need to split]` — bonding mechanics and slashing exposure may warrant separate treatment during detailed design. See Addendum.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Product evaluator (founder/builder) | S1 (role router) | S4 (compute types) then routes to Solutions | None | S3 and S4 must clearly signal the Gateway/Developer paths and link to Solutions — if this is not explicit, the reader may complete S4 without a named next step. Addressed by ensuring S1's exit state includes a named tab link. | None |
| Token and network researcher | S1 (role router) | S8 (governance) then routes to Delegators | None | S5 and S6 must cover both ETH fee share and LPT inflation before S7 — if S6 (LPT) is read in isolation, the reader may not see the governance function clearly. Sections are ordered correctly. | None |
| GPU operator | S1 (role router) | S5 (economic model) then routes to Orchestrators | None | S3 must explain that orchestrators must hold meaningful LPT stake to compete for jobs independently — if this is missing, the reader proceeds without a known cost/barrier. This is a knowledge gap in S3. Resolved by including stake requirement in S3's content. | None |
| Developer | S1 (role router) | S3 (job flow) then may route to Developers | None | S3 must establish that developers access compute via gateway APIs or SDKs — not by running infrastructure. If this is absent, the developer may misidentify as a gateway or orchestrator in S1. Resolved by including this path explicitly in S1 and S3. | None |
| Ecosystem newcomer / community member | S1 (role router) | S9 (organisation) or S10 (ecosystem state) then routes to Community | None | S9 must be accessible to non-technical readers — if it uses protocol jargon without definition, this persona exits early. Resolved by ensuring S9 uses plain language and links to the Glossary (S11) for any term that requires prior knowledge. | None |

All personas have complete, unblocked paths through the structure.

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table — noted as `discover-substrate` (all audiences at discover stage; single token not sufficient)
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only
- [x] Phase 0: Glossary term with heading/body mismatch flagged — `[DEFINITION CONFLICT: Broadcaster — heading marks deprecated, Status field reads "current"]`
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]` (Active Set size, unbonding period, target bonding rate, inflation adjustment step, treasury reward cut rate)
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock
- [x] Arriving question is specific — not a topic; captures the actual evaluation gate at first encounter
- [x] Personas described with motivation and entry vector — not role labels; 5 distinct personas
- [x] Self-identification check done — dedicated disambiguation section (S1) required and designed, with `purpose: orient`, `pageType: navigation`, `lifecycleStage: discover`
- [x] Entry blockers identified — none exist for About; section order driven by natural question sequence
- [x] Jobs are first-principles — not derived from current nav structure; 7 jobs covering arrival, active-use, and return-visit states
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions
- [x] Cross-tab gate applied — decision-enabling content included for all personas; CROSS-TAB rows used for inbound routes only; role tabs listed as outbound destinations, not content owners
- [x] Persona path validation done — all 5 personas have complete, unblocked paths; two knowledge gaps identified and resolved in section content notes
- [x] All enum values are canonical — no invented tokens (`purpose` 15, `pageType` 7, `lifecycleStage` 7)
- [x] Disambiguation section (S1) has `lifecycleStage: discover` — confirmed

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The Audience Definitions table includes a note that About serves all audiences at `discover` and that a single token cannot describe About's primary audience. The prompt's Step 0.1 asks to "identify the canonical AUDIENCE token." This tab has no single canonical token. Assumption made: document `discover-substrate` as the AUDIENCE descriptor, explain the multi-audience nature, and treat the tab's structure as serving all five arriving audience streams. No single token was forced.

- **[Phase 0 / Step 0.2 — term count]**: The TERMINOLOGY_LOCK contains 22 terms, exceeding the default 20-term guidance. The About tab is explicitly a substrate tab covering all network participation paths — including Orchestrator, Gateway, Delegator, Developer/Builder, and community paths — plus the economic model, governance, and organisational structure. Reducing to 20 would require omitting either slashing, SPEs, or AI inference, all of which are decision-relevant for at least one arriving audience. Exceeding 20 is warranted and noted per prompt instruction.

- **[Phase 0 / Step 0.2 — Broadcaster conflict]**: The glossary entry "Broadcaster (deprecated)" carries a Status field of `current` — this is an internal inconsistency in the glossary file. The heading correctly marks it deprecated; the Status field incorrectly reads `current`. `deprecated-terms.md` is unambiguous: Broadcaster is deprecated; Gateway is the current term. The glossary Status field for this entry should be corrected to `deprecated`. Flagged as `[DEFINITION CONFLICT]` in the TERMINOLOGY_LOCK table.

- **[Phase 0 / Step 0.2 — Developer vs Builder]**: The Audience Definitions table lists both `builder` ("building products using Livepeer APIs, SDKs, or hosted gateways") and `developer` ("building custom pipelines, BYOC, protocol extensions, tooling") as separate tokens. For the About tab at `discover`, a new visitor cannot distinguish between these two paths without reading the role definitions first. The terminology lock uses `Developer/Builder` as a combined entry representing this arriving persona segment. The distinction is resolved in S1 (role router) and S3 (job flow).

- **[Phase 0 / Step 0.2 — NaaP term]**: `veracity-sources.md` references "NaaP (Network as a Platform)" as a design concept with a Notion-based primary source. This term does not appear in the Product Context block or the per-tab glossary. No NaaP-related claims can be asserted without Notion access. Term excluded from lock. If NaaP is a current strategic frame for the About tab, a human should supply the definition from the Notion source before the section design is finalised.

- **[Phase 0 / Step 0.2 — no web access]**: The prompt instructs that if web access is available, recent primary sources should be searched and suggested. No web access is available in this agent run. The following sources from `veracity-sources.md` were identified as potentially having high-staleness AI content that should be re-checked at writing time: `go-livepeer` latest release (AI pipeline config), `livepeer-ai-js` (AI API), `comfystream` repo. Suggested verifications rather than suggested new sources.

- **[Phase 1 — co-primary personas]**: Two personas tied at score 9 (product evaluator and token/network researcher). The prompt asks for a single primary persona to drive section structure. For a substrate tab this is structurally correct — the About tab is not the primary deep-read tab for any single audience; it serves all at `discover`. The section structure is driven by the natural question sequence that all arriving readers share, not by a single persona's path. Assumption noted.

- **[Phase 2C — S7 design flag]**: Section S7 (Staking and delegation) carries bonding mechanics, the unbonding waiting period, and slashing exposure for delegators in a single section. If written to full depth, this section may accumulate multiple reader states (prospective staker, current staker checking mechanics, risk-evaluating researcher). Flagged `[⚠ Design flag: may need to split]` in the section table. During detailed design, consider splitting into S7a — Bonding and unbonding mechanics — and S7b — Slashing: what it is, who it affects, and under what conditions. This split would push the section count to 12, still within range.

- **[Phase 2C — S11 Glossary placement]**: S11 is a `reference` / `pageType: reference` section. Per the prompt's universal elements rule, a "Resources/compendium section (FAQ, glossary, changelog)" is a universal element that should not be designed here. However, J7 (returning to look up terms) is a genuine, recurring job for all About-tab personas that is not served by any other content section. Including S11 as a thin reference entry point (routing to the full Resource HUB glossary) rather than a complete compendium addresses this without violating the universal elements rule. Human review should confirm whether S11 belongs in the designed section structure or should be treated as a universal element stub. If treated as universal, the section count drops to 10 (still within range).

- **[Phase 2B — Cross-tab: inbound routes from role tabs]**: The Site Ownership Map shows that Delegators routes readers to About for "protocol economics depth." Other role tabs may also reference About for conceptual definitions. These are listed as inbound cross-tab routes — About does not need to reproduce the full role-tab content, but it must ensure that the conceptual content it owns (especially S5 Economics, S6 LPT, and S8 Governance) is complete enough to serve readers arriving mid-journey from a role tab.
