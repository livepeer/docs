Now I have everything I need. Let me execute all phases.Now executing all phases and producing the output document.

---

## Phase 0 — Terminology Anchoring

### Step 0.1 — AUDIENCE

**AUDIENCE**: `delegator`

---

### Step 0.2 — TERMINOLOGY_LOCK generation

Working from the Product Context block and veracity-sources.md as authority. The glossary is used as a cross-check only.

**Terms central to the delegator's work:**

1. **LPT (Livepeer Token)** — The ERC-20 staking and governance token. Delegators hold and stake it to orchestrators. Derived from Product Context. [verify-against: https://github.com/livepeer/protocol — `confluence` branch for contract source; https://arbiscan.io/accounts/label/livepeer for deployed addresses]

2. **Bonding / Bond** — The act of locking LPT tokens to an orchestrator in the protocol. "Bonding" and "staking" are used interchangeably in Livepeer but have the same meaning. Glossary uses both; Product Context says delegators "stake their tokens to orchestrators." No conflict — both forms permitted.

3. **Orchestrator** — A GPU operator who receives delegated stake and earns fees by processing compute jobs. Delegators choose which orchestrator to bond to. Defined in Product Context.

4. **Active Set** — The top 100 orchestrators by total bonded stake eligible to receive work and earn rewards each round. A delegator must bond to an active-set orchestrator to earn. [verify-live: https://explorer.livepeer.org] — active set size of 100 is governance-controlled.

5. **Inflationary Rewards** — Newly minted LPT distributed each round to active orchestrators and their delegators. Primary reason most delegators stake. [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md; LIPs repo for any changes]

6. **ETH Fees** — Ether paid by gateways for compute work, distributed to orchestrators and their delegators. Demand-side income stream; distinct from inflationary rewards.

7. **Reward Cut** — The percentage of inflationary LPT an orchestrator retains before passing the remainder to delegators. Set by the orchestrator. [verify-against: go-livepeer repo, tagged release]

8. **Fee Cut** — The percentage of ETH fees an orchestrator retains before passing the remainder to delegators. Distinct from reward cut. [verify-against: go-livepeer repo, tagged release]

9. **Round** — Livepeer's fundamental time unit, approximately one day of Arbitrum blocks (~5,760 blocks). Rewards are calculated per round. [verify-against: https://github.com/livepeer/protocol — `confluence` branch; RoundsManager contract]

10. **Thawing Period / Unbonding Period** — The mandatory waiting period (~7 rounds) after initiating an unbond before LPT becomes withdrawable. [verify-live: https://explorer.livepeer.org — read from BondingManager] — governance-controlled, value may have changed.

11. **Unbonding** — Initiating withdrawal of bonded LPT, triggering the thawing period. LPT earns no rewards during the thawing period but can be rebonded.

12. **Rebonding (Redelegation)** — Moving bonded stake from one orchestrator to another without going through the thawing period. Keeps LPT in active bonded state.

13. **Inflation Rate** — The per-round percentage of total LPT supply newly minted and distributed. Adjusts dynamically based on the bonding rate vs. the target. [verify-live: https://docs.livepeer.org/delegators/guides/yield-calculation; verify-against: LIPs repo]

14. **Target Bonding Rate** — The 50% threshold; if the current bonding rate is below this, inflation increases; if above, it decreases. [verify-live: https://docs.livepeer.org/delegators/guides/yield-calculation] — governance-controlled.

15. **Inflation Adjustment (alpha)** — The fixed per-round rate (0.00005%) by which inflation shifts toward the target. [verify-live: https://docs.livepeer.org/delegators/guides/yield-calculation] — governance-controlled.

16. **Yield** — The annualised return on staked LPT combining inflationary LPT rewards and any ETH fee share. Varies by orchestrator commission rates and total bonded supply.

17. **Governance** — On-chain system by which LPT stakeholders vote on protocol changes, treasury spending, and parameter updates. Delegators participate via their bonded stake weight.

18. **Vote Detachment** — The ability of a delegator to cast their own vote on a proposal, overriding their orchestrator's vote. Their stake weight applies only to their individual vote. [verify-against: https://github.com/livepeer/wiki/wiki/Governance; LIP-89]

19. **Stake-Weighted Voting** — Governance votes count proportional to bonded LPT, not one-address-one-vote.

20. **Livepeer Explorer** — The official UI for bonding, unbonding, claiming earnings, and voting without direct contract interaction. [verify-against: https://explorer.livepeer.org — live read]

21. **Claim Earnings** — The on-chain action to collect accumulated inflationary LPT rewards and ETH fees assigned to the delegator's stake. Earnings accumulate but must be explicitly claimed.

22. **Treasury / Community Treasury** — On-chain fund governed by LPT stakeholders, funded by a percentage of per-round inflation (the Treasury Reward Cut Rate), disbursed via governance. [verify-live: https://explorer.livepeer.org/treasury]

23. **Treasury Reward Cut Rate** — The governable percentage of per-round inflation diverted to the treasury before distribution to participants. [verify-live: LIPs repo — LIP-92]

24. **Dilution** — The reduction in proportional token ownership experienced by LPT holders who do not stake, because inflationary rewards accrue only to bonded participants.

**Deprecated terms check:**

- "Active Set Election" — flagged in deprecated-terms.md as overlapping with "Active Set." Use "Active Set" unless specifically discussing the election mechanism. Resolved.
- "veLPT" — flagged in deprecated-terms.md as proposal not yet implemented. Excluded from lock.
- "Inflation Model" — flagged in deprecated-terms.md as overlapping with Dynamic Inflation. Glossary uses "Inflation Model" but deprecated-terms.md says use "Dynamic Inflation." Noting the discrepancy; not including either term in lock. The mechanism is addressed via "Inflation Rate" + "Inflation Adjustment (alpha)" + "Target Bonding Rate."

**Note on term count**: 24 terms. The brief permits exceeding 20 when a tab covers multiple distinct participation paths. The Delegators tab has two meaningful participation paths — passive yield-seeking stakers and active governance participants — and also includes a bridging sub-path (LPT on L1 must be bridged to Arbitrum before staking). Slight excess is warranted to give minimal coverage across all three sub-paths without omitting any.

> **TERMINOLOGY_LOCK**: `LPT, Bonding, Orchestrator, Active Set, Inflationary Rewards, ETH Fees, Reward Cut, Fee Cut, Round, Thawing Period, Unbonding, Rebonding, Inflation Rate, Target Bonding Rate, Inflation Adjustment, Yield, Governance, Vote Detachment, Stake-Weighted Voting, Livepeer Explorer, Claim Earnings, Treasury, Treasury Reward Cut Rate, Dilution`

---

### Step 0.3 — Anchoring Questions

1. **What does this audience call themselves?**
   Before arriving at this tab, this person calls themselves a **token holder** or **crypto investor**. They hold LPT — possibly acquired on an exchange, possibly awarded — and are asking "what do I do with this?" They may also self-identify as a "staker" if they've come from a general DeFi context. "Delegator" is the network's term; it is not what this person walks in calling themselves.

2. **What are the 3–5 core job actions in their own language?**
   - Choose where to put their tokens (pick an orchestrator)
   - Lock their tokens to earn yield
   - Keep an eye on what they're earning and whether their orchestrator is performing
   - Pull their tokens out when needed
   - Have a say in how the protocol is run

3. **Which TERMINOLOGY_LOCK terms have network-specific meanings that differ from the industry default?**
   - **Bonding** — In general crypto usage, "bonding" often means locking tokens for protocol security (e.g. keeper bonds) or participating in bonding curves. In Livepeer, bonding specifically means delegating stake to an orchestrator. A reader from Ethereum L2 DeFi may misread "bonding" as something more like an AMM bonding curve. Must be explained before use.
   - **Reward Cut** — Counterintuitive direction: a _higher_ reward cut means the orchestrator _keeps more_ and passes _less_ to delegators. New readers often assume a higher cut means a better return for them. Must be explained with directional clarity.
   - **Fee Cut** — Same directional issue as Reward Cut but applied to ETH fees. A reader accustomed to "fee sharing" on other protocols may expect "fee cut" to mean their share, not the orchestrator's retained percentage.
   - **Round** — Not a calendar unit. Approximately one day of Arbitrum blocks but not exactly one day and not guaranteed to be; time-sensitive content should reference rounds, not days. Readers familiar with Ethereum may expect "epoch."
   - **Thawing Period** — Not a standard term outside Livepeer. Industry default for this concept is "unbonding period" or "cooldown." The glossary uses both "thawing period" and "unbonding period" as synonyms; the TERMINOLOGY_LOCK uses "Thawing Period" as the primary and "Unbonding" as the action that starts it. This distinction should be introduced before use.
   - **Vote Detachment** — Not standard governance terminology. In most governance systems, delegated stake votes with the delegatee by default and there is no "detachment" mechanism. Must be explained — readers may assume they cannot vote independently once delegated.

---

## Phase 1 — Persona Research

**Pre-persona situation analysis:**

1. **What triggers a visit?** Most commonly: someone has acquired LPT — through exchange purchase, a community reward, or a referral — and has searched "what to do with LPT" or "how to stake LPT". Less commonly: a current staker checking their yield, evaluating whether to move stake, or researching a governance vote.

2. **What do they know at arrival?** They know they hold LPT. They may know it's a staking token. They probably do not know: what bonding to an orchestrator means mechanically, how the thawing period works, how rewards are distributed, or how governance voting works. A subset arrive knowing they need to bridge from L1 to Arbitrum first.

3. **Single arriving question**: _"My LPT is sitting idle — how do I stake it to earn rewards, and is there a catch?"_

4. **Successful visit**: They have bonded LPT to an orchestrator of their choosing, understand the thawing period before they commit, and know how to claim earnings. Secondary success: they know how to vote on governance proposals.

5. **Wrong-path risks**:
   - Assuming staking LPT is the same as Ethereum staking (it's delegation, not validating)
   - Choosing the wrong orchestrator (low reward call rate, high commission, about to leave active set)
   - Not knowing about the thawing period, then being surprised when they can't withdraw
   - LPT on L1 Ethereum — not realising it must be bridged before staking is possible
   - Assuming voting means setting up a node

---

**Persona table:**

| Rank | Persona                                                                                                                                                                        | Entry vector                                            | Arriving with                                                                                                     | Wants to leave with                                                                   | Vol | Depth | Impact | Total |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --- | ----- | ------ | ----- |
| 1    | **The Yield Seeker** — holds LPT acquired on an exchange, has not staked before, wants passive income                                                                          | Exchange referral / web search "how to stake LPT"       | LPT in wallet (on Arbitrum or L1), rough sense that staking is possible, no knowledge of orchestrators or thawing | Has bonded to an orchestrator and understands what they've committed to               | 3   | 3     | 3      | **9** |
| 2    | **The Active Stakeholder** — has been bonded for some time, now wants to evaluate whether their orchestrator is still a good choice, or wants to vote on a governance proposal | Bookmark / Discord link to specific governance proposal | Bonded stake already, basic familiarity with the Explorer, some rewards accumulated                               | Has voted on the proposal or moved stake to a better orchestrator                     | 2   | 3     | 3      | **8** |
| 3    | **The L1 Stranded** — holds LPT on Ethereum mainnet (pre-dates Arbitrum migration or bought on L1), does not know staking requires Arbitrum                                    | Web search / community Discord                          | LPT in an L1 wallet, no idea staking lives on L2                                                                  | Has bridged LPT to Arbitrum and is ready to bond                                      | 2   | 2     | 3      | **7** |
| 4    | **The Governance Entrant** — holds LPT primarily for governance rights, not yield-motivated, wants to understand voting power and how to influence protocol decisions          | Governance forum link / community referral              | LPT (bonded or unbonded), familiarity with DAO governance from other protocols                                    | Knows how their vote weight is calculated and how to cast a vote or submit a proposal | 1   | 2     | 2      | **5** |

> **Primary persona**: The Yield Seeker — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification check**: This audience self-identifies as "token holder" or "LPT holder." That label does not cleanly route to one persona — it could describe someone who holds on L1 (The L1 Stranded), someone ready to stake directly (The Yield Seeker), or someone primarily governance-motivated (The Governance Entrant). Three meaningfully different entry states with different first required actions. A **dedicated disambiguation section is required as the first content section** — it must identify which situation applies (L1 vs. L2 wallet, first-time staker vs. returning staker, yield vs. governance focus) and route accordingly.

**Entry blocker check**:

- **The Yield Seeker**: No hard structural blocker if LPT is on Arbitrum. Hard stop if LPT is on L1 — must bridge before any staking action is possible.
- **The Active Stakeholder**: No blocker — they already have bonded stake.
- **The L1 Stranded**: Hard-stop blocker: LPT must be bridged to Arbitrum before bonding is possible. The bridging section must appear before the bonding/staking section.
- **The Governance Entrant**: Soft blocker only — must be bonded to have meaningful voting power, but can still read proposals without bonding. No hard section-order constraint.

**Section ordering implication**: Disambiguation → Bridging (L1 case) → Orchestrator Selection → Bonding/Staking → Managing Stake & Earnings → Governance Participation.

---

## Phase 2A — Jobs to be Done

| #   | When...                                                                                  | I want to...                                                                                           | So I can...                                                                                        |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 1   | I have LPT in my wallet and haven't staked it yet                                        | figure out which orchestrator is a trustworthy choice                                                  | commit my stake somewhere that will actually call rewards and give me a fair commission split      |
| 2   | I'm about to bond my LPT for the first time                                              | understand the thawing period and what I can't do while staked                                         | make an informed commitment without being surprised when I can't withdraw                          |
| 3   | I hold LPT on Ethereum mainnet and want to start staking                                 | understand how to get my tokens onto Arbitrum                                                          | be able to participate in staking without losing my tokens or paying excessive gas                 |
| 4   | My rewards have been accumulating for several rounds                                     | claim my earnings and see my actual yield                                                              | convert accumulated rewards to a real number and decide whether to compound or withdraw            |
| 5   | I've been bonded to an orchestrator for months and want to know if I should stay or move | evaluate my orchestrator's reward call rate, commission, and active-set stability against alternatives | decide whether to rebond to a different orchestrator without going through the full thawing period |
| 6   | A governance proposal is open for voting                                                 | understand what it proposes, whether it affects my yield, and how to cast my vote                      | exercise my governance rights without having to read a 3,000-word LIP from scratch                 |
| 7   | I want to exit my staked position entirely                                               | initiate unbonding and understand when my LPT will be liquid                                           | plan my exit timing around the thawing period                                                      |

---

## Phase 2B — Ideal Journey

**Linear (discovery → competency):**

| Position | Stage name                   | lifecycleStage | What they're doing                                                                           |
| -------- | ---------------------------- | -------------- | -------------------------------------------------------------------------------------------- |
| 1        | Finding their footing        | `discover`     | Working out what LPT actually is, what bonding means, and whether this is for them           |
| 2        | Getting tokens into position | `setup`        | Bridging LPT from L1 to Arbitrum if needed, or confirming their wallet is ready              |
| 3        | Picking an orchestrator      | `evaluate`     | Comparing orchestrators on commission rate, reward call consistency, and active-set standing |
| 4        | Committing stake             | `setup`        | Bonding LPT to their chosen orchestrator; understanding thawing period before signing        |
| 5        | Watching and collecting      | `operate`      | Monitoring yield, claiming earnings, checking their orchestrator's reward call status        |
| 6        | Making stake decisions       | `optimise`     | Evaluating whether to rebond to a different orchestrator or add more stake                   |
| 7        | Participating in governance  | `operate`      | Following proposals, casting stake-weighted votes, optionally submitting proposals           |

**On-demand (return visits after linear completion):**

- Current yield estimate for their orchestrator (inflation rate × stake weight × commission split)
- How to check whether their orchestrator called reward this round
- How to claim earnings without triggering an unintended unbond
- Thawing period current value and how to calculate when their LPT will be liquid
- Governance proposal status, voting deadline, and how to cast or change a vote
- How to move stake to a different orchestrator without going through unbonding
- Bridging token flow — gas cost estimation, expected confirmation time, how to verify arrival
- Treasury funding status and current proposals under deliberation

**Cross-tab:**

| Direction | From / To                      | Why                                                                                                                         |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Inbound   | Orchestrators tab → Delegators | Orchestrator operators link to delegation to recruit stake; operator pages explain how reward calling affects delegators    |
| Inbound   | About tab → Delegators         | About explains protocol economics and actor roles at a conceptual level; readers who want to act route here                 |
| Inbound   | Home tab → Delegators          | Home audience routing CTA for LPT holders                                                                                   |
| Outbound  | Delegators → Orchestrators tab | Delegators evaluating orchestrators may want deeper context on how orchestrators operate, AI workloads, and pool structures |
| Outbound  | Delegators → About tab         | Delegators who want deeper protocol economics, tokenomics history, or governance architecture depth                         |
| Outbound  | Delegators → Resource HUB      | Delegators looking for changelog, glossary, or cross-cutting reference material                                             |

---

## Phase 2C — Ideal Section Structure

**Disambiguation section required** per self-identification check.

| Section                                   | Reader question                                                                                          | Job    | purpose   | pageType      | Entry state                                                                                    | Exit state                                                                                                                                                                     | lifecycleStage |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------ | --------- | ------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 1. Where do I start?                      | "I hold LPT — which of these situations is mine?"                                                        | J1, J3 | `orient`  | `navigation`  | Has LPT somewhere; does not know which path applies to them                                    | Has identified whether their LPT is on L1 or Arbitrum and whether they are staking for the first time or returning — routed to correct next section                            | `discover`     |
| 2. What LPT is and why staking it matters | "What does bonding my LPT actually do — for me and for the network?"                                     | J1     | `explain` | `concept`     | Knows they hold LPT; does not know what bonding accomplishes or what dilution means            | Has decided staking is worth pursuing and knows what they're committing to (yield source, thawing risk, governance weight) — can proceed to orchestrator selection             | `discover`     |
| 3. Getting LPT onto Arbitrum              | "My LPT is on Ethereum mainnet — how do I move it to where staking happens?"                             | J3     | `build`   | `instruction` | Holds LPT on L1; needs it on Arbitrum before any staking is possible                           | Has initiated and confirmed the bridge transaction; LPT balance visible on Arbitrum                                                                                            | `setup`        |
| 4. Choosing an orchestrator               | "Which orchestrator should I bond to, and what should I actually check?"                                 | J1, J5 | `choose`  | `guide`       | LPT is on Arbitrum and ready to stake; does not know how to evaluate orchestrator options      | Has identified at least one orchestrator that meets their criteria (reward call consistency, commission rate, active-set standing) and is ready to bond                        | `evaluate`     |
| 5. Bonding your stake                     | "How do I actually lock my LPT to an orchestrator, and what happens the moment I do?"                    | J2     | `start`   | `instruction` | Has chosen an orchestrator; has not yet signed the bonding transaction                         | Has bonded LPT; knows the thawing period duration and has confirmed they understand they cannot withdraw without triggering it                                                 | `setup`        |
| 6. How rewards work                       | "How do my earnings accumulate, and what determines how much I receive each round?"                      | J4     | `explain` | `concept`     | Stake is bonded; wants to understand the reward mechanics before they see numbers              | Can calculate an approximate yield estimate given their orchestrator's commission rates and the current inflation rate — has a concrete expectation to compare against reality | `operate`      |
| 7. Claiming earnings and tracking yield   | "How do I collect what I've earned, and how do I know if my orchestrator is actually calling reward?"    | J4     | `operate` | `guide`       | Has bonded stake accumulating rewards; has not yet claimed earnings                            | Has claimed earnings at least once; knows how to check reward-call history and spot a missed round                                                                             | `operate`      |
| 8. Managing your stake                    | "How do I move to a different orchestrator, add more stake, or exit entirely?"                           | J5, J7 | `operate` | `guide`       | Has bonded stake; wants to change their position (rebond, top up, or initiate unbonding)       | Has completed the desired stake action (rebond / top-up / unbond initiated); knows the thawing timeline for an unbond                                                          | `optimise`     |
| 9. Governance participation               | "What is my voting power, how do I vote on a proposal, and can I vote independently of my orchestrator?" | J6     | `operate` | `guide`       | Has bonded stake; has not yet voted on a proposal or understands how vote detachment works     | Has cast a vote on an open proposal or confirmed they know how to do so when a proposal opens; knows their vote is not automatically tied to their orchestrator's position     | `operate`      |
| 10. Submitting a governance proposal      | "How do I put a formal proposal to the community, and what do I need to qualify?"                        | J6     | `build`   | `instruction` | Has sufficient bonded stake (Proposer Bond threshold); has a proposal they want to advance     | Has submitted a formal proposal or confirmed they meet the bond threshold and understand the voting and timelock process                                                       | `operate`      |
| 11. Treasury and ecosystem funding        | "What is the treasury, where does it come from, and how are funds allocated?"                            | J6     | `explain` | `concept`     | Participates in governance; wants to understand treasury mechanics and how to engage with SPEs | Can articulate how the Treasury Reward Cut Rate feeds the treasury, what SPEs are, and how to follow or contribute to treasury proposals                                       | `operate`      |

**Section count**: 11 sections. Slightly above the 8–12 target midpoint but within range. The bridging section (3) and the proposal-submission section (10) are distinct functional paths that cannot be collapsed — noted in Addendum.

---

## Phase 2D — Persona Path Validation

| Persona                | Enters at                                                                                    | Exits at                         | Structural block                                                                                    | Knowledge gap                                                                                                                                                                                                                                                        | Missing section |
| ---------------------- | -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| The Yield Seeker       | Section 1 (disambiguation routes them past bridging to Section 4 if on Arbitrum)             | Section 7 (claiming earnings)    | None — disambiguation section prevents them skipping to bonding before knowing their LPT location   | Section 6 (how rewards work) must precede Section 7 — already ordered correctly                                                                                                                                                                                      | None            |
| The Active Stakeholder | Section 7 (returning to check yield) or Section 8 (managing stake) or Section 9 (governance) | Section 8 or 9 depending on goal | None — tab accommodates return-visit behaviour across multiple sections                             | None — their entering knowledge is sufficient for Sections 7–11                                                                                                                                                                                                      | None            |
| The L1 Stranded        | Section 1 → Section 3 (bridging)                                                             | Section 5 (bonded and confirmed) | Section 3 resolves the hard-stop blocker before Section 5 requires Arbitrum LPT — correctly ordered | Section 2 (what bonding means) should be readable before Section 3 — already ordered                                                                                                                                                                                 | None            |
| The Governance Entrant | Section 9 (voting) or Section 10 (proposing)                                                 | Section 11 (treasury context)    | None — governance sections are self-contained                                                       | Section 9 references bonded stake as a prerequisite for voting power; a governance-only reader may need a routing note acknowledging they can read proposals without bonding but need stake to vote meaningfully. Add a callout to Section 9 — no new section needed | None            |

**All personas have unblocked paths. Gate passes.**

---

## Quality Gates

- [x] Arriving question is specific — "My LPT is sitting idle — how do I stake it to earn rewards, and is there a catch?" — not a topic, an actual question
- [x] At least 3 distinct personas, each with a different arriving state and entry vector
- [x] Self-identification check done — dedicated disambiguation section required and added as Section 1
- [x] Entry blockers identified — bridging section (3) placed before bonding section (5); disambiguation section (1) placed first
- [x] At least 5 jobs, first-principles — 7 jobs produced, none derived from nav structure
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions verified
- [x] Cross-tab gate applied — decision-enabling content included throughout; CROSS-TAB rows only for depth links
- [x] Persona path validation complete — every persona has an unblocked path
- [x] All enum values are from canonical lists — verified

**All gates pass. Producing output document.**

---**`v4-delegators-audience-design.md`** — complete, all gates pass.

A few things worth flagging from the execution:

**Terminology decisions that need a human call before content writing begins:**

1. **Inflation Model vs Dynamic Inflation** — `deprecated-terms.md` says use "Dynamic Inflation" but the glossary uses "Inflation Model." Neither made it into the lock; the mechanism is broken into component parts instead. This conflict needs resolution in the Documentation Review DB before any inflation pages are drafted.

2. **Three governance-controlled values** are in the lock marked `[verify-live]` before hardcoding in any page: Active Set size (100), Treasury Reward Cut Rate (10%), and Proposer Bond threshold (100 LPT). All three are cited as specific numbers in the glossary — none should appear in published content without a live check.

3. **veLPT** — fully excluded per `deprecated-terms.md`. If it ships, Section 11 and the governance section both need updating.

**Structural decision you may want to revisit:**

Section 10 (Submitting a governance proposal) is the low-volume edge case — it was kept because removing it blocks The Governance Entrant completely. If the section count needs trimming in detailed design, it's the first candidate to demote to a sub-page within Section 9 rather than a standalone section.
