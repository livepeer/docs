# LPT / Delegators — Audience Design

**Tab**: LPT / Delegators
**Tab slug**: `lp-token`
**Audience**: `delegator` (derived in Phase 0)
**TERMINOLOGY_LOCK**: see Phase 0 Anchors below
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

**AUDIENCE**: `delegator`

Derived from the Audience Definitions table: the `delegator` token maps to "Staking LPT tokens, participating in governance" — which is the stated scope of the LPT / Delegators tab.

---

### Step 0.2 — TERMINOLOGY_LOCK

**Source authority**: Product Context block + `veracity-sources.md` as authority. Per-tab glossary used as cross-check only. Deprecated terms from `deprecated-terms.md` checked before finalising.

**Governance-controlled values verified against**: [Livepeer Explorer](https://explorer.livepeer.org) and [LIPs repo](https://github.com/livepeer/LIPs) per `veracity-sources.md`.

**Terms surfaced and evaluated**:

The tab covers two distinct participation paths — staking/delegation mechanics and on-chain governance — each with its own vocabulary set. To give minimal coverage of both paths without omitting either, the lock slightly exceeds 20 terms. Reason noted in Addendum.

| Term | Definition (from Product Context + primary sources) | Notes |
|---|---|---|
| LPT (Livepeer Token) | ERC-20 token used for staking, delegation, and on-chain governance on the Livepeer network; earned via inflation rewards and job fees | Glossary definition consistent with Product Context. |
| Staking | Locking LPT to an orchestrator to participate in network security, earn inflationary rewards and fee income, and confer governance weight | Glossary consistent. Industry default (PoS staking) applies; network-specific meaning: staking here is always *delegated* — token holders do not run infrastructure. Flag below. |
| Delegation | The act of bonding LPT to an orchestrator without running infrastructure; token holder earns a share of the orchestrator's rewards and governance weight | Glossary consistent with Product Context. |
| Bonding | The on-chain action of locking LPT to an orchestrator; used interchangeably with "delegation" in the protocol | Glossary consistent. "Bonding" is the protocol's term; "delegation" is the reader-facing concept. |
| Orchestrator | GPU-hardware operator who processes jobs, earns ETH fees, and distributes inflationary LPT rewards to their delegators | Product Context block is authority. Glossary consistent. |
| Active Set | The top N orchestrators ranked by total bonded stake that are eligible to receive work and earn rewards each round | `[verify-live: https://explorer.livepeer.org]` — the set size (currently described as 100 in the glossary) is governance-controlled. Glossary says "top 100"; `deprecated-terms.md` lists "Active Set size (100)" as a high-staleness term requiring Explorer verification. Do not hard-code 100. |
| Round | A discrete time interval (approximately one day of Arbitrum blocks) during which staking rewards are calculated, active sets are determined, and protocol state advances | Glossary consistent with Product Context. |
| Reward Cut | The percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder proportionally to delegators | Glossary consistent. Range 0–100%. |
| Fee Cut | The percentage of ETH fees an orchestrator retains before distributing the remainder to delegators; distinct from Reward Cut | Glossary consistent. Two separate parameters exist (reward cut and fee cut). |
| Inflationary Rewards | Newly minted LPT tokens distributed each round proportionally to active orchestrators and their delegators based on bonded stake | Glossary consistent. |
| Thawing Period | The mandatory waiting period after initiating an unbond before freed LPT becomes withdrawable | `[verify-live: https://explorer.livepeer.org]` — duration is governance-controlled. Glossary states "approximately 7 rounds"; `deprecated-terms.md` lists "Unbonding period" as a high-staleness, governance-set value. Do not hard-code the 7-round figure. |
| Unbonding | The process of initiating withdrawal of bonded LPT, which starts the thawing period | Glossary consistent. |
| Rebond / Redelegation | Moving bonded LPT stake from one orchestrator to another without going through the thawing period; keeps LPT in bonded state | Glossary uses "Rebond". Note: glossary body also uses "redelegation" as an informal synonym. No conflict — both describe the same action. |
| Treasury | The on-chain pool of LPT funded by a governance-controlled percentage of per-round inflation, disbursed through community-approved governance proposals | Glossary consistent. |
| Treasury Reward Cut Rate | The governable percentage of per-round inflationary LPT diverted to the community treasury before the remainder flows to participants | `[verify-live: https://github.com/livepeer/LIPs]` — the rate is set by governance (LIP-92). Glossary states "currently 10%" — do not hard-code. `[verify-against: https://github.com/livepeer/LIPs]` |
| Governance | The on-chain system by which LPT stakeholders vote on protocol changes, treasury spending, and parameter updates through stake-weighted voting | Glossary consistent with Product Context + Wiki Governance source. |
| Voting Power | The weight of a participant's vote, determined by their total bonded LPT at the block when the proposal was created; stake-weighted, not one-token-one-vote | Glossary consistent. Delegators can override their orchestrator's vote — glossary notes "vote detachment". |
| Quorum | The minimum percentage of total participating bonded stake required for a governance vote to be binding | Glossary consistent. Specific quorum threshold value is governance-controlled — `[verify-live: https://explorer.livepeer.org]`. |
| Proposer Bond | The minimum bonded LPT required to submit a formal on-chain governance proposal | `[verify-against: https://github.com/livepeer/LIPs]` — glossary states "100 LPT"; this is a specific numeric value that requires primary-source verification. Do not assert the 100 LPT figure without verifying against the LIPs repo or BondingManager contract. |
| Dilution | The reduction in proportional ownership experienced by non-staking token holders when new LPT is minted each round | Glossary consistent. |
| Livepeer Explorer | The official Livepeer protocol explorer; primary UI for delegators to bond, unbond, claim earnings, and vote on governance proposals | Glossary consistent. Primary source: [https://explorer.livepeer.org](https://explorer.livepeer.org). |
| Bridging | The process of moving LPT between Ethereum L1 and Arbitrum L2 using canonical bridge contracts (L2LPTGateway) | Glossary consistent. Required prerequisite for new delegators holding LPT on L1. |

**Deprecated terms checked**: No deprecated role terms from `deprecated-terms.md` are present in the lock. "veLPT" is excluded — `deprecated-terms.md` flags it as a draft/proposal not yet implemented; do not describe as existing. "Active Set Election" is excluded in favour of "Active Set" per `deprecated-terms.md` guidance.

**Draft terms excluded**: `veLPT`, `Active Set Election` (both flagged in `deprecated-terms.md`).

**TERMINOLOGY_LOCK**: `LPT (Livepeer Token), Staking, Delegation, Bonding, Orchestrator, Active Set, Round, Reward Cut, Fee Cut, Inflationary Rewards, Thawing Period, Unbonding, Rebond, Treasury, Treasury Reward Cut Rate, Governance, Voting Power, Quorum, Proposer Bond, Dilution, Livepeer Explorer, Bridging`

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

Before finding this tab, this reader calls themselves a **token holder** — someone who holds a crypto asset (LPT) and is looking for what to do with it. They may also self-identify as a **staker** or **investor**, terms imported from broader DeFi/crypto contexts. They do not yet call themselves a "delegator" on arrival; that is the network's term for their role once they have bonded.

**2. What are the 3–5 actions that define their core job?** (in their own language, not product feature names)

1. Choose which orchestrator(s) to put their tokens behind
2. Lock their tokens so they earn a return from the network
3. Monitor whether their chosen operator is actually performing and paying out
4. Switch operators if performance or payouts decline
5. Vote on protocol decisions when proposals come up

**3. Terms in the TERMINOLOGY_LOCK with a network-specific meaning that differs from the industry default — flagged:**

- **Staking**: In most PoS networks (Ethereum, Solana), "staking" implies running or delegating to a validator directly, sometimes with slashing risk on the delegator's tokens. In Livepeer, staking is always *delegated* — the token holder bonds to an orchestrator and earns rewards, but does not run infrastructure and is not (under current deployed contracts) subject to slashing of *delegator* funds directly. First-time readers importing the standard PoS mental model need this distinction explained before use.
- **Round**: In general crypto usage, "round" is often informal. In Livepeer, a "round" is a formal, bounded protocol time unit (~1 day) that governs reward distribution, active set elections, and inflation adjustments. Must be defined before use.
- **Bonding**: To most crypto-native readers, "bonding" refers to protocol bonding curves (e.g. bonding curves in token issuance). In Livepeer, "Bonding" is the synonym for staking / delegation — the act of locking LPT to an orchestrator. Must be clarified on first use.
- **Reward Cut**: In general usage, a "cut" taken by a service provider sounds negative (they take a fee from you). Here, "Reward Cut" is the orchestrator's commission — a *higher* reward cut means *less* passed to delegators. Readers from yield/staking backgrounds may misread a high reward cut as a positive signal. Needs explicit framing.
- **Treasury Reward Cut Rate**: Distinct from the orchestrator Reward Cut; this is a protocol-level diversion of inflation to the community treasury, not a per-orchestrator setting. The shared "reward cut" vocabulary risks confusion between these two mechanisms.

---

## Arriving Question

> "I have LPT tokens — how do I stake them, and how do I choose which orchestrator to stake with?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The New Token Holder** — holds LPT acquired via exchange, has never staked; curious about how to put tokens to work | Homepage / About tab CTA, Discord referral, or web search ("how to stake LPT") | Knows they own LPT; doesn't know staking mechanics, doesn't know what an orchestrator is, doesn't know about bridging requirement | Has selected an orchestrator, completed their first bond, and can see their staked position in Explorer | 3 | 3 | 3 | 9 |
| 2 | **The Active Delegator** — already bonded, returning to check rewards, switch orchestrators, or respond to a governance proposal | Bookmark / direct link, Explorer notification, Discord governance ping | Knows how to bond; wants to evaluate orchestrator performance, understand a reward change, or vote on a specific proposal | Has made a concrete decision (rebonded, voted, or confirmed position health) | 2 | 3 | 3 | 8 |
| 3 | **The Governance Participant** — LPT holder specifically motivated by protocol governance; may already be bonded or may bond specifically to acquire voting power | Forum link, LIP discussion, community announcement | Understands token but may be weak on mechanics; clear on the governance angle; wants to know how to vote and what the proposal says | Has voted on a proposal or understands exactly what bonded stake they need and how the vote process works | 2 | 2 | 3 | 7 |
| 4 | **The Researcher / Ecosystem Evaluator** — evaluating Livepeer tokenomics or delegation economics without immediate intent to stake; may be writing a report, building a data tool, or conducting due diligence | Web search, academic/research link, Messari or Dune referral | Varied; likely strong on crypto concepts, weak on Livepeer-specific mechanics | Has a clear picture of the economic model, yield drivers, and governance structure sufficient to write about or build on | 1 | 2 | 2 | 5 |

**Primary persona**: The New Token Holder — score 9. This persona drives the section structure. All other personas are accommodated within that structure; they do not add sections unless their path is otherwise blocked.

**Self-identification check**: Readers self-identify as "token holder" or "staker" on arrival. This label could describe:
- Path A: New token holder who needs to go through the full setup sequence (bridge → select orchestrator → bond)
- Path B: Existing delegator returning to manage a live position (rebond, claim, vote)

These two paths have meaningfully different entry conditions and goals. However, Path B does not require a distinct setup sequence from Path A — the Existing Delegator enters the tab later in the same structure (at the management and governance sections) rather than needing a separate content track. A routing callout within S1 (the disambiguation section) is sufficient to direct returning delegators to the relevant management sections, without creating a parallel content track. The dedicated S1 disambiguation section (required, see below) carries the routing callout.

**Self-identification decision**: Dedicated disambiguation section S1 required. Reason: the reader cannot determine from the tab title alone whether they are in the right place or how to proceed. Three meaningfully different starting states exist (never staked; already staked; governance-focused), and the network term "Delegators" may not be the reader's self-identification label. S1 must orient the reader and route them.

**Entry blockers**:
- **Bridging blocker**: Readers holding LPT on Ethereum L1 cannot participate in Livepeer staking without first bridging to Arbitrum. This is a hard-stop structural barrier — no bonding is possible until LPT is on Arbitrum. The section covering bridging (S3) must appear before the section covering bonding (S4).
- **Orchestrator selection blocker**: The reader cannot bond without first selecting an orchestrator. The section covering orchestrator evaluation (S4) must appear before the bonding instruction (S5).
- **Governance voting blocker**: Voting power requires bonded stake. The governance section (S8) must appear after the bonding section (S5); a reader who arrives only for governance needs to understand that bonding is the prerequisite.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have just acquired LPT and am trying to figure out what to do with it | Understand in plain terms how staking works, what my token does when bonded, and what I earn | Decide confidently whether to stake and how much without needing to read a whitepaper |
| J2 | I am ready to stake but don't know how to choose between orchestrators | Evaluate orchestrators on the factors that actually matter for my earnings and for network health | Pick one I trust without gambling on an unknown operator |
| J3 | I have decided to stake and need to execute the transaction | Complete the bonding steps from token-in-wallet to active position confirmed in Explorer | Know I have done it correctly and can see my stake working |
| J4 | I am already staked and want to know how my rewards work and when I get paid | Understand the reward cycle — what triggers payouts, how often they accrue, what I should monitor | Know whether my orchestrator is paying out correctly and not miss earnings due to ignorance |
| J5 | I am staked and want to move my stake to a different orchestrator | Execute a redelegation without triggering the thawing period and losing reward continuity | Respond to orchestrator underperformance or better opportunity without penalty |
| J6 | I want to participate in a governance vote on a protocol proposal | Understand how Livepeer governance works, what voting power I have, and how to cast a vote | Participate meaningfully in protocol decisions proportional to my stake |
| J7 | I am a researcher or analyst evaluating Livepeer tokenomics | Get a clear, sourced picture of the inflation model, staking yield drivers, and governance structure | Form an independent judgment about the protocol's economic design without relying on marketing claims |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting: am I in the right place and which path applies to me? | `discover` | Reading the disambiguation section; identifying whether they are a new staker, returning delegator, or governance-focused reader |
| 2 | Understanding: what does staking actually mean in this protocol? | `discover` | Learning the core mechanics — what LPT does, what delegation is, how rewards flow, what the risks are |
| 3 | Unlocking: getting LPT onto the right network | `setup` | Bridging LPT from L1 to Arbitrum if needed; understanding the prerequisite before bonding |
| 4 | Choosing: which orchestrator should I bond to? | `evaluate` | Reading orchestrator evaluation criteria; using Explorer to compare performance and commission; making a selection decision |
| 5 | Activating: placing the first bond | `setup` | Executing the bonding transaction in Explorer; confirming the position is live |
| 6 | Monitoring: understanding how rewards flow and how to check earnings | `operate` | Learning the reward cycle — rounds, reward calls, earning accumulation, how to claim |
| 7 | Managing: updating a live staking position | `operate` | Rebonding to a new orchestrator, initiating unbonding, understanding the thawing period, claiming accumulated rewards |
| 8 | Governing: participating in protocol decisions | `operate` | Understanding governance mechanics, how voting power is calculated, how to vote, what the treasury is |

**On-demand**:

- Current orchestrator commission rates and reward call history (for monitoring existing positions)
- Active Set membership list and stake rankings (to check whether a delegated orchestrator is still active)
- Treasury balance and active governance proposals (for governance participants)
- Current inflation rate and bonding rate (for yield modelling and economic research)
- Thawing period duration (before initiating an unbond)
- Treasury Reward Cut Rate (to understand net yield after treasury diversion)
- LPT total supply and circulating supply (for researcher/analyst use)
- Governance proposal voting status and quorum requirements (during active votes)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Orchestrators → LPT/Delegators | Orchestrators tab CTAs prompt operators to encourage delegators; operator pages may link to delegation overview |
| Inbound | About → LPT/Delegators | About tab covers protocol and tokenomics at the conceptual level; routes readers who want to act to this tab |
| Inbound | Home → LPT/Delegators | Home routes readers by role; the Delegator audience path lands here |
| Outbound | LPT/Delegators → Orchestrators | Readers evaluating which orchestrator to bond to need to understand what orchestrators do; link to Orchestrators tab for deep reference on operator types, performance, and economics |
| Outbound | LPT/Delegators → About | Readers who want deeper protocol economics or governance architecture depth beyond what this tab covers |
| Outbound | LPT/Delegators → Resource HUB | Readers who want changelogs, glossaries, or cross-cutting reference material |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| **S1 — Delegation Paths: Which situation is yours?** | "Am I in the right place? What kind of token holder am I and where should I start?" | J1 | `orient` | `navigation` | Has arrived at the tab; does not yet know if they are a new staker, a returning delegator, or a governance participant; may not self-identify as "delegator" | Has identified which setup path applies to their situation and navigated to the correct starting section | `discover` |
| **S2 — What LPT Does and How Delegation Works** | "What actually happens when I bond my LPT — what do I earn, what are the risks, and what is my role in the network?" | J1 | `explain` | `concept` | Has confirmed they are in the right place; knows they own LPT but does not yet understand the delegation mechanism or reward structure | Has decided whether delegation is right for them; can articulate what bonding does, what they earn (inflationary rewards + fee share), and what the thawing period risk means for liquidity | `discover` |
| **S3 — Getting LPT onto Arbitrum** | "My LPT is on Ethereum — do I need to move it, and how?" | J3 | `start` | `instruction` | Understands delegation conceptually; holds LPT but may not know it is on L1 or that Arbitrum is required | Has LPT on Arbitrum and confirmed balance in their wallet; can proceed to orchestrator selection | `setup` |
| **S4 — Choosing an Orchestrator** | "How do I decide which orchestrator to bond to — what should I actually look at, and what are the red flags?" | J2 | `choose` | `guide` | Has LPT on Arbitrum; understands they need to select an orchestrator before bonding; does not yet know evaluation criteria | Has selected a specific orchestrator they are confident bonding to, with reasoning based on performance, commission rate, and active set membership [⚠ Design flag: may need to split — this section serves both the evaluation job (J2) and the pre-bonding decision, and contains both comparative assessment work and final selection; if the evaluation criteria content grows significantly, split into "Understanding Orchestrator Factors" (concept) and "Comparing and Selecting" (guide)] | `evaluate` |
| **S5 — Bonding Your LPT** | "How do I actually bond my LPT — what are the exact steps?" | J3 | `start` | `instruction` | Has selected an orchestrator; has LPT on Arbitrum; is ready to execute the bond | Has an active bonded position visible in Livepeer Explorer; knows the bond was placed correctly | `setup` |
| **S6 — How Rewards Accumulate and When You Get Paid** | "How do rewards actually work — when do I get them, and how do I know my orchestrator is paying out?" | J4 | `explain` | `concept` | Has an active bonded position; wants to understand the reward cycle so they can monitor it | Can explain the round/reward-call cycle; knows how to check whether their orchestrator has called reward; knows how accumulated earnings are claimed | `operate` |
| **S7 — Managing Your Staking Position** | "How do I switch orchestrators, initiate an unbond, or claim my earnings — and what are the consequences?" | J4, J5 | `operate` | `guide` | Has an active bonded position and is comfortable with the reward cycle; needs operational guidance for position management actions | Has successfully executed at least one management action (rebond, unbond initiation, or earnings claim) or has decided not to act after understanding the consequences | `operate` |
| **S8 — Participating in Governance** | "How does governance actually work, and how do I vote with my stake?" | J6 | `explain` | `concept` | Is bonded (or is evaluating bonding specifically to gain voting power); does not yet understand the governance process, quorum requirements, or how to vote | Can navigate to an active proposal in Explorer, understands their voting power, and has either voted or knows exactly what steps to take to vote | `operate` |
| **S9 — Treasury and Ecosystem Funding** | "What is the treasury, how is it funded, and how can I participate in spending decisions?" | J6 | `explain` | `concept` | Understands governance voting; wants to understand the treasury as a distinct mechanism and how proposals for ecosystem funding work | Can explain the treasury funding mechanism, understands what the Treasury Reward Cut Rate does to their yield, and knows how to follow or engage with spending proposals | `operate` |
| **S10 — Inflation, Yield, and Tokenomics** | "How does the inflation model work, what determines my yield, and what is the economic rationale for delegation?" | J7, J1 | `explain` | `concept` | Has staked (or is a researcher reviewing the economics); wants a complete picture of the tokenomics model — inflation mechanics, target bonding rate, dilution | Can model their approximate yield drivers; understands the dilution risk for non-stakers; understands how the Treasury Reward Cut Rate affects net rewards [⚠ Design flag: this section serves two distinct reader states — active delegators looking to model their returns (post-setup, J4) and researchers/analysts evaluating the protocol's economic design (J7, pre-decision) — their entry conditions differ and the content depth required may diverge; flag for possible split during detailed design] | `evaluate` |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| **The New Token Holder** | S1 (orientation) | S6 (reward monitoring) for first-time completion; returns for S7 (management) | None — S3 (bridging) appears before S5 (bonding); S4 (orchestrator selection) appears before S5 (bonding); all prerequisites are in order | None — S2 establishes the concepts required by S3–S5 before they are needed | None |
| **The Active Delegator** | S1 (routes to S7 or S8 via the routing callout) | S7 (management) or S8/S9 (governance) depending on visit purpose | None — management sections (S7) and governance sections (S8, S9) are present | S7 assumes the reader knows how to use Explorer; a brief callout or link within S7 to the Explorer tool is needed so returning delegators are not blocked if they are using a new device or account | None — S7 covers management actions; S8 covers governance voting |
| **The Governance Participant** | S1 (routes to S8 directly) | S9 (treasury and funding, for full governance picture) | S8 requires bonded stake; a governance-focused reader who is not yet bonded needs a clear in-section note in S8 pointing them back to S5 for bonding before they can vote — this must be surfaced in S8's content, not assumed | S8 must explicitly state the bonding-as-prerequisite for voting power; without this, a reader arriving purely for governance could reach S8 and not know they need to bond | None — S8 and S9 are present |
| **The Researcher / Ecosystem Evaluator** | S2 (concept overview) or S10 (inflation/tokenomics) | S10 (inflation, yield, tokenomics) | None — S10 is present and covers the economic model | S10 must contain or link to verifiable sources (Explorer, LIPs) for the specific figures a researcher would check; without this, the section serves the narrative need but not the veracity need of this persona | None — S10 is present; veracity sourcing is a content-quality requirement within S10, not a structural gap |

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`? (See Addendum — no blocking conflicts found; minor cross-reference note on "Rebond / Redelegation" logged.)
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`? (Active Set size, Thawing Period duration, Treasury Reward Cut Rate, Quorum threshold, Proposer Bond all flagged.)
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section S1 added as required?
- [x] Entry blockers identified and resolved by section order? (Bridging before Bonding; Orchestrator Selection before Bonding; Bonding before Governance Voting.)
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"? (All exit states are phrased as "has completed", "has decided", or "can do".)
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens? (`purpose` 15, `pageType` 7, `lifecycleStage` 7 — all values used in the section table verified against the prompt enums.)
- [x] Disambiguation section S1 has `pageType: navigation`, `lifecycleStage: discover`, `purpose: orient`?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK size]**: The prompt asks for 10–20 terms but permits exceeding 20 when the tab covers multiple distinct participation paths. The LPT tab covers two paths (staking/delegation mechanics and on-chain governance), each requiring its own foundational vocabulary. The lock reaches 22 terms. This is within the explicit exception clause. The Researcher persona also requires tokenomics vocabulary that partially overlaps with staking terms. No terms were padded; each serves a distinct reader need.

- **[Phase 0 / Step 0.2 — Proposer Bond value]**: The glossary states "100 LPT" as the Proposer Bond. This is a specific numeric value. `veracity-sources.md` does not explicitly state this figure in its coverage, but the LIPs repo and the BondingManager contract are listed as primary sources that would cover it. Marked `[verify-against: https://github.com/livepeer/LIPs]`. The figure is not used in the output document; it is noted in the lock as requiring verification.

- **[Phase 0 / Step 0.2 — Treasury Reward Cut Rate]**: The glossary states "currently 10%" for the Treasury Reward Cut Rate. This is a governance-controlled value per LIP-92. Marked `[verify-live: https://github.com/livepeer/LIPs]`. The specific figure has not been hard-coded anywhere in this document.

- **[Phase 0 / Step 0.2 — Active Set size]**: The glossary states "top 100 orchestrators." `deprecated-terms.md` explicitly flags "Active Set size (100)" as a high-staleness, governance-controlled value to verify against Explorer. This figure is not used in the output.

- **[Phase 0 / Step 0.2 — Thawing Period duration]**: The glossary states "approximately 7 rounds." `deprecated-terms.md` flags "Unbonding period" as governance-set and requiring Explorer verification. This figure is not used in the output.

- **[Phase 0 / Step 0.2 — Rebond / Redelegation]**: The glossary uses "Rebond" as the heading and references "redelegation" informally in the body. These refer to the same action (moving stake to a new orchestrator without unbonding). This is a formatting/synonym variation, not a semantic conflict. No `[DEFINITION CONFLICT]` required. Noted here for clarity.

- **[Phase 0 / Step 0.2 — veLPT excluded]**: `deprecated-terms.md` explicitly flags veLPT as "proposal not yet implemented — do not describe as existing." The term is excluded from the TERMINOLOGY_LOCK and does not appear in the output.

- **[Phase 0 / Step 0.2 — "Fee Share" vs "Fee Cut" terminology]**: The glossary has both "Fee Share" (what delegators receive) and "Fee Cut" (what the orchestrator retains). These are complementary terms for the same mechanism described from two perspectives. No semantic conflict. "Fee Cut" is included in the lock as the orchestrator-side parameter. "Fee Share" is omitted from the lock as a derivation (100% minus Fee Cut) rather than a separate concept requiring its own term.

- **[Phase 2C / S4 — Section load flag]**: S4 (Choosing an Orchestrator) serves both the comparative evaluation job (J2) and the pre-bonding selection decision. These could be separate if the evaluation content grows complex. Flagged with `[⚠ Design flag: may need to split]` in the table and here: *"S4 is carrying both orchestrator evaluation criteria and the final selection decision — may need to split into two pages (concept: what factors matter; guide: how to compare and decide) during detailed design."*

- **[Phase 2C / S10 — Section load flag]**: S10 (Inflation, Yield, and Tokenomics) serves two distinct reader states with different entry conditions: active delegators modelling returns (post-setup) and researchers evaluating the protocol economically (may be pre-decision). Flagged with `[⚠ Design flag: may need to split]` in the table and here: *"S10 is carrying both yield-modelling content for active delegators and economic-design content for researchers/analysts — these reader states have different entry conditions and depth requirements; may need to split during detailed design."*

- **[Phase 2C / Section count]**: The structure contains 10 content sections (S1–S10), within the 8–12 target range.

- **[Phase 0 / Web access — Suggested Sources]**: The prompt instructs suggesting additional sources if web access is available. As an agent run with available tools, the following sources are suggested for the veracity-sources registry:
  - `[SUGGESTED SOURCE: Livepeer Network Stats (Dune) — https://dune.com/queries?search=livepeer — on-chain staking participation rates, inflation rate history, bonding rate trends — suggested tier: acceptable]`
  - `[SUGGESTED SOURCE: LIP-92 (Treasury) — https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-92.md — canonical reference for Treasury Reward Cut Rate and treasury mechanics — suggested tier: primary (already accessible via the LIPs repo entry in veracity-sources.md; suggest adding as a named entry)]`
  - `[SUGGESTED SOURCE: Livepeer Explorer Treasury Dashboard — https://explorer.livepeer.org/treasury — live treasury balance and governance proposal outcomes — suggested tier: primary (already listed in veracity-sources.md as Treasury dashboard)]`
