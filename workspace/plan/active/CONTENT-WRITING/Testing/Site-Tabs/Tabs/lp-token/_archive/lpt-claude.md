# LP Token — Audience Design

**Audience**: delegator
**Personas**: staker, strategist, voter, proposer
**Generated**: 22 March 2026
**Status**: DRAFT — awaiting checkpoint

---

## Arriving Question

> "How do I stake my LPT and earn rewards without running infrastructure?"

---

## Personas

| Rank | Persona    | Arriving with                                                                                                                           | Wants to leave with                                                                                             |
| ---- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1    | staker     | LPT in a wallet; knows delegation exists; no protocol vocabulary; may have seen "stake" mentioned in community channels                 | A delegation transaction completed, or a clear next step to do it — plus confidence about what they just signed |
| 2    | strategist | Active delegation already placed; familiar with reward cut, fee cut, unbonding period; tracking yield; evaluating whether to move stake | A decision: stay, move, or add — with concrete signals to act on                                                |
| 3    | voter      | LPT delegated; received a governance notification or saw a forum post; uncertain how much their vote matters or what the mechanics are  | A completed vote, or a clear map of what a poll is, how weight is calculated, and how to participate            |
| 4    | proposer   | Wants to submit a LIP, SPE request, or treasury proposal; knows proposals exist but not the exact process or required format            | A complete process map with templates and the criteria that determine whether a proposal advances               |

---

## Jobs to be Done

| #   | When...                                               | I want to...                                                                         | So I can...                                                                             |
| --- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 1   | I have LPT in my wallet and want it working for me    | delegate to an orchestrator in a single session                                      | start earning protocol inflation rewards without running any infrastructure             |
| 2   | I am evaluating which orchestrator to delegate to     | compare orchestrators on reward rate, reliability, and commission parameters         | make a confident choice with a concrete basis — not a guess                             |
| 3   | I have stake delegated and want to know what I earned | calculate my actual LPT and ETH yield for a given period                             | verify my returns are consistent with the parameters I chose when delegating            |
| 4   | I see a governance poll is open                       | understand what the proposal changes, what a Yes/No vote means, and how to cast mine | participate in protocol governance with an informed position before the poll closes     |
| 5   | I want to move my stake to a different orchestrator   | understand the unbonding mechanics and timing so I can plan the transition           | avoid gaps in earning, unexpected lock-up periods, or loss of pending rewards           |
| 6   | I want to submit a proposal to the Livepeer Treasury  | find the process, format, and criteria required for a treasury or governance request | submit a correctly formed proposal with a realistic understanding of what gets approved |
| 7   | I am returning to check on a live delegation          | find my current reward rate, orchestrator status, and pending rewards in one place   | confirm everything is working and act if something has changed                          |

---

## Ideal Journey

**Linear** (discovery → competency — sequential):

| Position | Stage name                      | lifecycleStage | What they're doing                                                                                           |
| -------- | ------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------ |
| 1        | Orient                          | discover       | Forming a picture of what LPT is, what delegation means, and which path is theirs                            |
| 2        | Understand delegation mechanics | evaluate       | Learning how rewards are generated, what commission parameters mean, and how their stake earns               |
| 3        | Choose an orchestrator          | evaluate       | Comparing orchestrators on published parameters and historical performance; forming a selection decision     |
| 4        | Delegate                        | setup          | Completing their first delegation transaction; confirming it is active                                       |
| 5        | Monitor and interpret earnings  | operate        | Reading their reward rate, tracking accumulated LPT and ETH yield, understanding what changes affect returns |
| 6        | Manage stake actively           | optimise       | Deciding whether to redelegate, add stake, or respond to orchestrator commission changes                     |
| 7        | Participate in governance       | operate        | Reading an open proposal, understanding their voting weight, casting a vote                                  |
| 8        | Propose or escalate             | build          | Initiating a governance proposal, treasury request, or LIP using the correct process                         |

**On-demand** (reference needs — not sequential):

- Current unbonding period length and timing rules
- How to calculate LPT inflation yield for a given stake amount and round
- How reward cut and fee cut interact to determine delegator earnings
- How to verify that a reward call was made in a given round
- How voting weight is calculated (stake-weighted)
- Treasury proposal format and submission criteria
- How to check orchestrator status in the Explorer
- What happens to pending rewards during redelegation or unbonding

**Cross-tab**:

| Direction       | From/To            | Why                                                                                                                                                                                                                                 |
| --------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into LP Token   | From About         | About explains tokenomics conceptually (why LPT exists, how inflation works). Readers who want to act on that knowledge route here for the participation mechanics.                                                                 |
| Into LP Token   | From Home          | Audience routing sends delegators and LPT holders directly here via the Home persona split                                                                                                                                          |
| Into LP Token   | From Community     | Community surfaces governance discussion and forums. Readers who want to vote or understand voting mechanics route here for the operational how.                                                                                    |
| Into LP Token   | From Orchestrators | Orchestrators tab covers reward cut and fee cut from the operator's configuration perspective. Delegators who encounter those parameters from the selection side route here to learn what those parameters mean for their earnings. |
| Out of LP Token | To About           | For readers who want the conceptual tokenomics model — inflation rate, total supply dynamics, why LPT has value — rather than participation mechanics                                                                               |
| Out of LP Token | To Community       | For readers who want to discuss governance, participate in forums, or find community governance channels rather than mechanics                                                                                                      |
| Out of LP Token | To Orchestrators   | For readers who decide they want to run an orchestrator rather than delegate — self-stake and operation are fully in scope there                                                                                                    |

---

## Section Shape

| Section                              | Job          | purpose         | pageType    | Entry state                                                                                                                | Exit state                                                                                                                       | lifecycleStage |
| ------------------------------------ | ------------ | --------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| LP Token overview / landing          | Job 1, Job 7 | orient          | navigation  | Reader has LPT or is curious about LPT; no tab vocabulary yet; may not know which section they need                        | Reader understands the four paths (stake, manage, vote, propose) and routes to the correct one                                   | discover       |
| What LPT is and how delegation works | Job 1        | explain         | concept     | Reader knows LPT exists; does not yet understand how inflation rewards are generated or what delegation means mechanically | Reader can explain delegation mechanics: stake is backing, reward cut determines split, ETH and LPT rewards are separate streams | evaluate       |
| Choosing an orchestrator             | Job 2        | evaluate        | guide       | Reader knows they want to delegate; does not have a selection framework; may be looking at the Explorer for the first time | Reader has a clear comparison basis: what to look for, what parameters matter, and what red flags to avoid                       | evaluate       |
| Delegating LPT (first delegation)    | Job 1        | start           | instruction | Reader has LPT in a compatible wallet and an orchestrator selected                                                         | Reader has an active delegation and knows how to confirm it is working                                                           | setup          |
| Understanding your earnings          | Job 3        | explain         | concept     | Reader has active delegation; wants to understand how earnings accumulate and what the yield formula is                    | Reader can calculate expected LPT and ETH yield from their stake and the orchestrator's parameters                               | operate        |
| Managing your stake                  | Job 5, Job 7 | operate         | guide       | Reader has active delegation; considering moving, adding, or responding to a changed parameter                             | Reader understands unbonding mechanics, redelegation timing, and the consequences of each action on pending rewards              | optimise       |
| Governance participation             | Job 4        | explain + start | guide       | Reader has stake delegated; has seen an open poll or wants to understand governance; does not know how voting weight works | Reader understands how weight is calculated, can read a proposal correctly, and has completed or is ready to complete a vote     | operate        |
| Casting a vote                       | Job 4        | start           | instruction | Reader has reviewed a proposal and wants to vote; knows their voting weight concept                                        | Reader has submitted a governance vote and can verify it in the Explorer                                                         | operate        |
| Treasury and proposals               | Job 6        | explain + start | guide       | Reader wants to initiate a proposal; may know proposals exist but not the required format or criteria                      | Reader has the process map, knows the required format, and can submit a correctly formed proposal                                | build          |

---

## Structural Options Evaluated

**Option A — Action-first linear**: Organise around the primary action sequence: Orient → Delegate → Earn → Manage → Vote → Propose. Clear for the staker persona; weakest for the proposer and voter who arrive mid-journey with no interest in the early linear steps.

**Option B — Persona-split hub**: Separate sections per persona (Stakers, Strategists, Voters, Proposers). Clean routing but forces content duplication — delegation mechanics would appear in both Stakers and Strategists sections. Cross-persona content (e.g. unbonding) becomes orphaned or repeated.

**Option C — Topic cluster with deep nesting**: Group by topic domain: About LPT → Delegation → Earnings → Governance → Treasury. Each cluster is a nested sub-section. Scales to complex content but produces long depth-first paths; strategist and voter return-visit use cases are buried several clicks down.

**Option D — Shallow flat with cross-links**: All sections are top-level with no nesting. Maximum discoverability; poor journey coherence for first-time stakers who need sequential guidance through delegation mechanics before selection and transaction.

**Option E — Progressive disclosure (selected)**: Two-tier structure. A shallow top level routes by reader stage (orient, participate, govern). Within each stage, content is sequential for linear readers and discretely addressable for return visitors. The Participation tier covers mechanics → selection → transaction → earnings → management as a progressive chain. The Governance tier covers voting mechanics → instruction → treasury/proposals. This structure serves all four personas: the staker gets a clear linear path through Participation; the strategist re-enters at Management or Earnings; the voter enters directly at Governance; the proposer enters at Treasury. No section duplicates content owned by About, Community, or Orchestrators.

**Winner: Option E.** It is the only option that simultaneously serves the staker's need for a linear entry path and the strategist/voter/proposer's need to enter mid-journey without traversing irrelevant sections. The trade-off accepted is that the two-tier structure requires clear labelling at the top level to prevent voters and proposers skipping into the wrong tier. Elements from Option A incorporated: the Participation tier preserves the action-first sequence (mechanics → selection → transaction → earnings → management). Elements from Option C incorporated: topic clusters within each tier give the reference use case a home without forcing deep nesting.

---

## ⏸ Checkpoint

- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas are described with motivation — not just role labels?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a job, entry state, and exit state?
- [x] Cross-tab paths identified — no content duplicated from About, Community, or Orchestrators?
- [x] All enum values are canonical — no invented tokens?
