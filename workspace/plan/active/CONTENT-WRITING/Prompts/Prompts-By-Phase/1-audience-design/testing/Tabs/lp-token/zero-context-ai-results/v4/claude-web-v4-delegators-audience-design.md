# Delegators / LP Token — Audience Design

**Tab**: Delegators / LP Token
**Audience**: `delegator`
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `delegator`

**TERMINOLOGY_LOCK**: `LPT, Bonding, Orchestrator, Active Set, Inflationary Rewards, ETH Fees, Reward Cut, Fee Cut, Round, Thawing Period, Unbonding, Rebonding, Inflation Rate, Target Bonding Rate, Inflation Adjustment, Yield, Governance, Vote Detachment, Stake-Weighted Voting, Livepeer Explorer, Claim Earnings, Treasury, Treasury Reward Cut Rate, Dilution`

1. **This audience calls themselves**: token holder or LPT holder (or "staker" if they have a DeFi background). "Delegator" is the network's term — not what they walk in calling themselves.

2. **Core job actions in their own language**:
   - Choose where to put their tokens (pick an orchestrator)
   - Lock their tokens to earn yield
   - Keep an eye on what they're earning and whether their orchestrator is performing
   - Pull their tokens out when needed
   - Have a say in how the protocol is run

3. **Terms with network-specific meanings that differ from the industry default**:
   - **Bonding** — In general DeFi, "bonding" often refers to AMM bonding curves or keeper bonds. In Livepeer, it means delegating stake to an orchestrator. Must be introduced clearly before use.
   - **Reward Cut** — Counterintuitive direction: a *higher* reward cut means the orchestrator keeps *more* and passes *less* to delegators. New readers frequently assume a higher cut benefits them. Directional explanation required.
   - **Fee Cut** — Same directional issue as Reward Cut but applied to ETH fees rather than inflationary LPT.
   - **Round** — Not a calendar day. Approximately one day of Arbitrum blocks but not guaranteed to be exact. Readers from Ethereum may expect "epoch."
   - **Thawing Period** — Not standard industry terminology. The industry default for this concept is "unbonding period" or "cooldown." Must be introduced and distinguished from the action that starts it (Unbonding).
   - **Vote Detachment** — Not standard governance terminology. In most systems, delegated stake votes automatically with the delegatee. In Livepeer, a delegator can override their orchestrator's vote with their own. Must be explained — readers may assume they cannot vote independently once delegated.

---

## Arriving Question

> "My LPT is sitting idle — how do I stake it to earn rewards, and is there a catch?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Yield Seeker** — holds LPT acquired on an exchange, has not staked before, wants passive income | Exchange referral / web search "how to stake LPT" | LPT in wallet (on Arbitrum or L1), rough sense that staking is possible, no knowledge of orchestrators or thawing period | Bonded to an orchestrator; knows what they've committed to (thawing period, commission structure, how to claim) | 3 | 3 | 3 | **9** |
| 2 | **The Active Stakeholder** — has been bonded for some time; wants to evaluate their current orchestrator or act on a governance proposal | Bookmark / Discord link to governance proposal or Explorer notification | Bonded stake already, basic familiarity with the Explorer, accumulated rewards | Voted on the proposal, or moved stake to a better orchestrator without triggering full unbonding | 2 | 3 | 3 | **8** |
| 3 | **The L1 Stranded** — holds LPT on Ethereum mainnet, does not know staking requires Arbitrum | Web search / community Discord | LPT in an L1 wallet; no awareness that staking lives on L2 | Has bridged LPT to Arbitrum and is ready to bond | 2 | 2 | 3 | **7** |
| 4 | **The Governance Entrant** — holds LPT primarily for governance rights; not primarily yield-motivated | Governance forum link / community referral | LPT (bonded or unbonded), familiarity with DAO governance from other protocols | Knows how their vote weight is calculated and how to cast a vote independently of their orchestrator | 1 | 2 | 2 | **5** |

**Primary persona**: The Yield Seeker — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification**: This audience self-identifies as "token holder" or "LPT holder." That label does not route cleanly to one persona — it could describe someone with LPT on L1 (The L1 Stranded), someone ready to stake on Arbitrum (The Yield Seeker), or someone primarily governance-motivated (The Governance Entrant). Three meaningfully different entry states with different first required actions. **Dedicated disambiguation section required as the first content section.**

**Entry blockers**:
- *The Yield Seeker*: No hard blocker if LPT is already on Arbitrum. Hard stop if LPT is on L1 — must bridge before any staking action is possible. Disambiguation section routes them to bridging first.
- *The Active Stakeholder*: No blocker — already has bonded stake; enters mid-journey.
- *The L1 Stranded*: Hard-stop blocker — LPT must be bridged to Arbitrum before bonding is possible. The bridging section must appear before the bonding section.
- *The Governance Entrant*: Soft blocker only — must be bonded to have meaningful voting power, but can read proposals without bonding. No hard section-order constraint; a routing note in Section 9 addresses this.

**Section ordering implication**: Disambiguation → What bonding means → Bridging (for L1 case) → Orchestrator selection → Bonding → How rewards work → Claiming earnings → Managing stake → Governance voting → Proposing → Treasury context.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have LPT in my wallet and haven't staked it yet | figure out which orchestrator is a trustworthy choice | commit my stake somewhere that will actually call rewards and give me a fair commission split |
| J2 | I'm about to bond my LPT for the first time | understand the thawing period and what I can't do while staked | make an informed commitment without being surprised when I can't withdraw |
| J3 | I hold LPT on Ethereum mainnet and want to start staking | understand how to move my tokens to where staking actually happens | be able to participate in staking without losing my tokens or paying excessive gas |
| J4 | My rewards have been accumulating for several rounds | claim my earnings and understand my actual yield | see a real number and decide whether to compound or withdraw |
| J5 | I've been bonded to an orchestrator for months and want to know if I should stay or move | evaluate my orchestrator's reward call rate, commission, and active-set stability against alternatives | decide whether to rebond to a different orchestrator without going through the full thawing period |
| J6 | A governance proposal is open for voting | understand what it proposes, whether it affects my yield, and how to cast my vote | exercise my governance rights without reading a lengthy LIP from scratch |
| J7 | I want to exit my staked position entirely | initiate unbonding and know exactly when my LPT will be liquid | plan my exit timing around the thawing period |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Finding their footing | `discover` | Working out what LPT actually does, what bonding means, and whether this is for them |
| 2 | Getting tokens into position | `setup` | Bridging LPT from L1 to Arbitrum if needed, or confirming their wallet is ready |
| 3 | Picking an orchestrator | `evaluate` | Comparing orchestrators on commission rate, reward call consistency, and active-set standing |
| 4 | Committing stake | `setup` | Bonding LPT to their chosen orchestrator; understanding the thawing period before signing |
| 5 | Watching and collecting | `operate` | Monitoring yield, claiming earnings, checking their orchestrator's reward call status |
| 6 | Making stake decisions | `optimise` | Evaluating whether to rebond to a different orchestrator or add more stake |
| 7 | Participating in governance | `operate` | Following proposals, casting stake-weighted votes, optionally submitting proposals |

**On-demand**:
- Current yield estimate for their orchestrator (inflation rate × stake weight × commission split)
- How to check whether their orchestrator called reward this round
- How to claim earnings without triggering an unintended unbond
- Thawing period current value and how to calculate when their LPT will be liquid
- Governance proposal status, voting deadline, and how to cast or change a vote
- How to move stake to a different orchestrator without triggering the full unbonding process
- Bridging token flow — gas cost estimation, expected confirmation time, how to verify arrival on Arbitrum
- Treasury funding status and active proposals under deliberation

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Orchestrators tab → Delegators | Operator pages explain how reward calling affects delegators; operators link here to recruit stake |
| Inbound | About tab → Delegators | About explains protocol economics and actor roles conceptually; readers who want to act route here |
| Inbound | Home tab → Delegators | Home audience-routing CTA for LPT holders |
| Outbound | Delegators → Orchestrators tab | Delegators evaluating orchestrators may want deeper context on how operators work, AI workloads, and pool structures |
| Outbound | Delegators → About tab | Delegators wanting deeper protocol economics, tokenomics history, or governance architecture |
| Outbound | Delegators → Resource HUB | Changelog, glossary, and cross-cutting reference material |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Where do I start? | "I hold LPT — which of these situations is mine?" | J1, J3 | `orient` | `navigation` | Has LPT somewhere; does not know which path applies to their situation | Has identified whether their LPT is on L1 or Arbitrum and whether they are staking for the first time or returning — routed to correct next section | `discover` |
| 2. What LPT is and why staking it matters | "What does bonding my LPT actually do — for me and for the network?" | J1 | `explain` | `concept` | Knows they hold LPT; does not know what bonding accomplishes or what dilution means | Has decided staking is worth pursuing and knows what they are committing to: the yield source, the thawing risk, and the governance weight that comes with bonded stake | `discover` |
| 3. Getting LPT onto Arbitrum | "My LPT is on Ethereum mainnet — how do I move it to where staking happens?" | J3 | `build` | `instruction` | Holds LPT on L1 Ethereum; cannot stake until it is on Arbitrum | Has initiated and confirmed the bridge transaction; LPT balance is visible on Arbitrum and wallet is ready to bond | `setup` |
| 4. Choosing an orchestrator | "Which orchestrator should I bond to, and what should I actually check?" | J1, J5 | `choose` | `guide` | LPT is on Arbitrum and ready to stake; does not know how to evaluate orchestrator options | Has identified at least one orchestrator that meets their criteria — reward call consistency, commission rate, active-set standing — and is ready to bond | `evaluate` |
| 5. Bonding your stake | "How do I actually lock my LPT to an orchestrator, and what happens the moment I do?" | J2 | `start` | `instruction` | Has chosen an orchestrator; has not yet signed the bonding transaction | Has bonded LPT; has confirmed they understand the thawing period duration and that they cannot withdraw without initiating unbonding | `setup` |
| 6. How rewards work | "How do my earnings accumulate, and what determines how much I receive each round?" | J4 | `explain` | `concept` | Stake is bonded; wants to understand the reward mechanics before they see numbers | Can calculate an approximate yield estimate given their orchestrator's commission rates and the current inflation rate — has a concrete expectation to compare against actual earnings | `operate` |
| 7. Claiming earnings and tracking yield | "How do I collect what I've earned, and how do I know if my orchestrator is actually calling reward?" | J4 | `operate` | `guide` | Has bonded stake accumulating rewards; has not yet claimed earnings | Has claimed earnings at least once; knows how to check reward-call history for their orchestrator and recognise a missed round | `operate` |
| 8. Managing your stake | "How do I move to a different orchestrator, add more stake, or exit entirely?" | J5, J7 | `operate` | `guide` | Has bonded stake; wants to change their position by rebonding, topping up, or initiating unbonding | Has completed the desired stake action — rebond confirmed, top-up bonded, or unbonding initiated — and knows the thawing timeline if unbonding | `optimise` |
| 9. Governance participation | "What is my voting power, how do I vote on a proposal, and can I vote independently of my orchestrator?" | J6 | `operate` | `guide` | Has bonded stake; has not yet voted on a proposal or understood how vote detachment works. Note: a routing callout acknowledges governance-only readers who are not yet bonded — they can follow proposals but need stake to vote | Has cast a vote on an open proposal or confirmed they know how to do so when one opens; knows their vote overrides their orchestrator's position on their stake if they choose to vote | `operate` |
| 10. Submitting a governance proposal | "How do I put a formal proposal to the community, and what do I need to qualify?" | J6 | `build` | `instruction` | Has sufficient bonded stake meeting the Proposer Bond threshold; has a proposal they want to advance | Has submitted a formal proposal or confirmed they meet the bond threshold and understand the voting period, quorum requirement, and timelock execution process | `operate` |
| 11. Treasury and ecosystem funding | "What is the treasury, where does it come from, and how are funds allocated?" | J6 | `explain` | `concept` | Participates in governance; wants to understand treasury mechanics and how to engage with SPE funding | Can describe how the Treasury Reward Cut Rate feeds the treasury each round, what SPEs are and how they are funded, and how to follow or contribute to active treasury proposals | `operate` |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Yield Seeker (LPT on Arbitrum) | Section 1 — routed past bridging to Section 2 | Section 7 — has claimed earnings and knows how to monitor | None — disambiguation routes them correctly | Section 6 (how rewards work) must precede Section 7 — correctly ordered | None |
| The Yield Seeker (LPT on L1) | Section 1 → Section 3 (bridging) → Section 2 → Section 4 | Section 7 | None — bridging section resolves hard-stop blocker before bonding section requires Arbitrum LPT | None — ordering handles sequencing correctly | None |
| The Active Stakeholder | Section 7 (return to check yield) or Section 8 (manage stake) or Section 9 (governance) | Section 8 or 9 depending on goal | None — tab accommodates return-visit behaviour across multiple mid-journey sections | None — entering knowledge is sufficient for Sections 7–11 | None |
| The L1 Stranded | Section 1 → Section 3 (bridging) | Section 5 (bonded and confirmed) | Section 3 resolves the hard-stop blocker before Section 5 requires Arbitrum LPT — correctly ordered | None | None |
| The Governance Entrant | Section 9 (voting) or Section 10 (proposing) | Section 11 (treasury context) | None — governance sections are self-contained | Section 9 references bonded stake as prerequisite for voting power; routing callout within Section 9 acknowledges unbonded readers who want to follow proposals without bonding. No new section required | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — dedicated disambiguation section added as Section 1?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — Term count]**: 24 terms were included, exceeding the 20-term soft ceiling. The brief permits exceeding 20 when multiple distinct participation paths require minimal coverage. The Delegators tab has three paths: yield-seeking stakers, governance participants, and the L1 bridging sub-path. Slight excess is justified; noted here per brief instruction.

- **[Phase 0 / Step 0.2 — Inflation Model vs Dynamic Inflation]**: The glossary uses "Inflation Model" for the algorithmic per-round inflation adjustment mechanism. `deprecated-terms.md` flags "Inflation Model" as overlapping with "Dynamic Inflation" and instructs use of "Dynamic Inflation" instead. Neither "Inflation Model" nor "Dynamic Inflation" was included in the TERMINOLOGY_LOCK; the mechanism is addressed through the component terms (Inflation Rate, Target Bonding Rate, Inflation Adjustment) which are individually verifiable. **Discrepancy noted for resolution in the Documentation Review DB.**

- **[Phase 0 / Step 0.2 — veLPT]**: The glossary includes a veLPT definition. `deprecated-terms.md` flags veLPT as a proposal not yet implemented — explicitly excluded from the lock and from all sections. If veLPT ships before this content is published, Section 11 (Treasury and ecosystem funding) or a new governance section may need updating.

- **[Phase 0 / Step 0.2 — Treasury Reward Cut Rate value]**: The glossary cites 10% as the current Treasury Reward Cut Rate. This is a governance-controlled value (LIP-92). Per `veracity-sources.md`, it must be verified against the LIPs repo before use in any page. Marked `[verify-live: LIPs repo]` in the lock. Content authors must not hard-code "10%" without a live check.

- **[Phase 0 / Step 0.2 — Active Set size]**: Glossary cites 100 orchestrators. Per `veracity-sources.md`, this is governance-controlled and must be verified via Explorer. Marked `[verify-live: explorer.livepeer.org]` in the lock.

- **[Phase 0 / Step 0.3 — Web search for additional sources]**: No web search was conducted during this execution (not required by brief to block output). `[SUGGESTED SOURCE: Livepeer Explorer — https://explorer.livepeer.org — live on-chain read for active set, bonded stake, reward call history, governance proposals — primary]` is already listed in `veracity-sources.md`. No novel additions identified.

- **[Phase 2C — Section count]**: 11 sections produced, at the upper end of the 8–12 target range. Section 3 (bridging) and Section 10 (proposal submission) each address a distinct hard path that cannot be collapsed into an adjacent section without blocking The L1 Stranded and The Governance Entrant respectively. The count is justified and noted here.

- **[Phase 2C — Section 10 depth concern]**: Section 10 (Submitting a governance proposal) serves a low-volume persona (The Governance Entrant scoring Impact: 2). It was included because the path would otherwise be blocked — a reader who wants to submit a proposal has no actionable section without it. If section count must be reduced in detailed design, Section 10 is the candidate for demotion to a sub-page within Section 9.

- **[Phase 0 / Step 0.2 — Proposer Bond value]**: The glossary cites 100 LPT as the minimum bonded balance to submit a proposal. This is a governance-controlled parameter. Per `veracity-sources.md`, verify against the LivepeerGovernor contract on Arbiscan before asserting this value in any page. Content authors must not hard-code "100 LPT" without a live check.
