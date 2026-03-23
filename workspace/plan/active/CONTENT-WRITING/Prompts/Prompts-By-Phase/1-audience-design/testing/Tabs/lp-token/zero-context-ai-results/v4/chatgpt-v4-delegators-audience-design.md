# Delegators / LP TOKEN — Audience Design

**Tab**: Delegators / LP TOKEN
**Audience**: delegator
**TERMINOLOGY_LOCK**: [LPT, Delegator, Delegation, Bonding, Orchestrator, Active Set [verify-live: Livepeer Explorer], Inflation, Inflationary Rewards, ETH Fees, Reward Cut, Fee Cut, Governance, Voting Power, Community Treasury, Treasury Reward Cut Rate [verify-live: LIPs repo + Treasury dashboard], Claim Earnings, Rebond, Unbonding [verify-live: Livepeer Explorer], Thawing Period [verify-live: Livepeer Explorer], Bridging]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `delegator`
**TERMINOLOGY_LOCK**: `[LPT, Delegator, Delegation, Bonding, Orchestrator, Active Set [verify-live: Livepeer Explorer], Inflation, Inflationary Rewards, ETH Fees, Reward Cut, Fee Cut, Governance, Voting Power, Community Treasury, Treasury Reward Cut Rate [verify-live: LIPs repo + Treasury dashboard], Claim Earnings, Rebond, Unbonding [verify-live: Livepeer Explorer], Thawing Period [verify-live: Livepeer Explorer], Bridging]`

1. This audience calls themselves: token holders, stakers, or LPT holders.
2. Core job actions: put tokens to work; choose an operator to back; move stake when conditions change; collect or track earnings; use stake in votes.
3. Terms with network-specific meanings that differ from industry default:
   - **Bonding** — not a generic staking synonym; it is the protocol action of placing LPT behind an Orchestrator.
   - **Delegation** — not handing over custody; it means backing an Orchestrator economically while keeping wallet control.
   - **Orchestrator** — not a workflow tool; it is the supply-side compute operator in the network.
   - **Active Set** — not a loose “active operator list”; it is the live, stake-ranked eligibility set for work and rewards.
   - **Governance** — not just forum discussion; it is stake-weighted decision-making tied to bonded LPT.
   - **Community Treasury** — not a company budget; it is an on-chain fund governed by LPT stakeholders.
   - **Thawing Period** — not a UI cooling-off hint; it is a protocol-enforced wait before withdrawn stake becomes liquid.

---

## Arriving Question

> "I have LPT, or I am about to get it — what is the right participation path for me right now, and what is the next safe action?"

---

## Arrival Profile

- **Trigger**: They have acquired LPT, are considering acquiring it, have seen an operator change terms or performance, or have encountered a governance or treasury proposal that makes their stake suddenly relevant.
- **Arrives knowing**: LPT exists, Orchestrators exist, and delegation is how non-operators participate.
- **Arrives not knowing**: how returns are produced, how risk and liquidity actually work, how to compare Orchestrators, whether they keep custody, what changes when they bond, or how governance and treasury participation connect to stake.
- **Successful visit**: they leave having completed a concrete next action — decide to delegate, complete a first bond, move stake, begin an unbond, or cast/override a vote.
- **Wrong-path risks**: treating the tab as only "yield" content and missing governance; confusing delegation with custodial transfer; assuming all Orchestrators are interchangeable; assuming they can exit instantly; assuming voting power is detached from bonded stake state.

---

## Personas

*Assumption: without analytics, the largest visit cluster is LPT holders trying to activate or re-activate capital. Governance-only traffic is smaller, but high-impact because failure there weakens trust and participation.*

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | First Bond Seeker | Search result, Home route, wallet moment after acquiring LPT | LPT or near-term intent to acquire it, but no live position yet | A completed first bond to a chosen Orchestrator | 3 | 3 | 3 | 9 |
| 2 | Reallocator Under Review | Explorer check, Discord/forum discussion, operator status change, Orchestrators CTA | An existing bonded position and a reason to question it | A completed rebond, unbond, or deliberate decision to stay put | 2 | 3 | 3 | 8 |
| 3 | Treasury-and-Vote Participant | Proposal link, Community route, governance forum thread | A proposal deadline or treasury decision and unclear stake mechanics | A cast vote, override decision, or intentional abstain decision | 2 | 2 | 3 | 7 |
| 4 | Token Participation Evaluator | Home, About, referral, partner conversation | Interest in LPT participation but no commitment yet | A yes/no decision on whether delegation fits their goals and risk tolerance | 2 | 2 | 2 | 6 |

**Primary persona**: First Bond Seeker — this persona drives the section structure.

**Self-identification**: `LPT holder` does **not** route cleanly to one persona. It can describe at least three materially different paths: first participation, stake movement, and governance action. A dedicated disambiguation section is required as the first content section.

**Entry blockers**:
- The reader cannot act until they know whether they are starting, moving, or voting — resolved by **Section 1**.
- The reader cannot bond safely until they know the control/liquidity consequences — resolved by **Sections 2–3**.
- The reader cannot complete first activation until wallet, chain, and transaction prerequisites are in place — resolved by **Section 6** before **Section 7**.
- The reader cannot choose well until they have comparison criteria for Orchestrators — resolved by **Sections 4–5** before **Section 7**.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I hold LPT and am not yet participating | decide whether to delegate now, later, or not at all | avoid idle capital or a bad commitment |
| 2 | When I am willing to participate but do not know the consequences | see exactly what changes when I bond | decide with clear expectations on control, liquidity, and governance |
| 3 | When I am ready to back an Orchestrator | compare operators on the factors that actually affect my outcome | choose a backing target I can justify |
| 4 | When I have chosen an Orchestrator | prepare the wallet, chain, and transaction prerequisites | reach a clean first bond without procedural mistakes |
| 5 | When my current operator changes or I need liquidity | claim, rebond, or unbond correctly | protect capital and timing instead of reacting blindly |
| 6 | When a governance or treasury decision appears | use my stake correctly in a vote | influence protocol outcomes with confidence |
| 7 | When my results look different than expected over time | inspect the drivers of earnings, dilution, and risk | decide whether to stay, move, or exit |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify my LPT participation path | evaluate | Determining whether they are here to start, move, or vote |
| 2 | Decide whether delegated participation fits | evaluate | Judging whether bonding LPT matches their goals and constraints |
| 3 | Learn the mechanics that change their outcome | evaluate | Mapping rewards, fees, liquidity, and governance consequences |
| 4 | Choose who to back | evaluate | Comparing Orchestrators using real decision criteria |
| 5 | Prepare to act on-chain | setup | Getting chain, wallet, token location, and transaction readiness in place |
| 6 | Activate the first position | setup | Completing the first bond and verifying it is live |
| 7 | Manage stake over time | operate | Claiming, moving, or exiting positions as conditions change |
| 8 | Use stake to steer outcomes | optimise | Voting, watching treasury use, and refining position quality over time |

**On-demand**:
- Current Active Set status and operator ranking context
- Current Reward Cut and Fee Cut for a chosen Orchestrator
- Current Unbonding / Thawing timing before exiting
- Current Treasury Reward Cut Rate and treasury proposal status
- Claim Earnings, Rebond, and Unbonding action paths
- Bridging path and chain prerequisites for LPT participation
- Voting Power rules, proposal thresholds, and execution timing
- Current inflation and dilution context that affects expected outcomes

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Entry | Home → Delegators | Role-based routing for readers who identify with LPT participation rather than infrastructure operation |
| Entry | About → Delegators | Readers who understand the protocol conceptually and now want a token-holder action path |
| Entry | Orchestrators → Delegators | Readers evaluating where to place stake after learning how Orchestrators operate |
| Exit | Delegators → Orchestrators | Deeper operator evaluation, supply-side context, and performance interpretation |
| Exit | Delegators → About | Deeper protocol economics and architecture context after the reader has chosen a participation path |
| Exit | Delegators → Community | Governance discourse, proposal discussion, and broader ecosystem participation around treasury decisions |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Pick Your LPT Path | Which situation am I actually in right now: starting, moving, or voting? | Route to the correct path before action | orient | navigation | Holds LPT interest or stake but has not classified the current task | Has identified which participation path applies to their situation | evaluate |
| 2. Should I Put This LPT to Work? | Why would I delegate this token instead of keeping it idle or liquid? | Decide whether to participate with LPT | evaluate | guide | Knows they have a relevant token decision but not whether to act | Has decided to delegate now, defer, or stay liquid | evaluate |
| 3. What Changes When I Bond? | What do I keep, what gets locked, and what rights or tradeoffs begin when I bond? | See exactly what changes when bonding starts | explain | concept | Is open to participating but unclear on consequences | Has accepted or rejected the control, liquidity, and governance consequences of bonding | evaluate |
| 4. What Drives My Outcome? | Where do rewards, fees, dilution, and treasury flows actually affect me? | Explain the drivers behind returns and risk | explain | concept | Has accepted the delegation model but cannot yet judge outcome quality | Has written the outcome drivers and risk factors they will use to judge participation | evaluate |
| 5. Which Orchestrator Should I Back? | How do I compare operators in a way that matches my goals? | Compare and choose an Orchestrator | choose | guide | Wants to participate and knows the outcome drivers they care about | Has a shortlist and a chosen set of selection criteria for backing | evaluate |
| 6. What Must Be Ready Before I Act? | What do I need in place before I can bond safely? | Prepare chain, wallet, and token prerequisites | start | instruction | Has selected an Orchestrator but may still be missing wallet or chain readiness | Has LPT in the right place, transaction funds ready, and verification surfaces open | setup |
| 7. How Do I Complete My First Bond? | What exact sequence gets me from ready to live? | Complete first delegation safely | start | instruction | Has picked an Orchestrator and completed prerequisites | Has completed a first bond and verified the position is live | setup |
| 8. How Do I Change or Exit My Position? | If I need to move, claim, or leave, what is the correct path and timing? | Manage stake changes without losing control | operate | instruction | Has a live position and a reason to change it | Has completed a Claim Earnings, Rebond, or Unbonding plan and knows when liquidity returns | operate |
| 9. How Do I Use Stake in Governance and Treasury Decisions? | How does my bonded stake turn into actual influence? | Use stake correctly in governance | operate | guide | Has live or planned stake and a governance reason to act | Has voted, overridden, or intentionally abstained on a proposal and can explain how treasury decisions connect to stake | operate |
| 10. What Should I Watch Ongoing? | What signals tell me to stay, move, vote, or exit? | Build a recurring review routine | optimise | guide | Has an active or recently changed position | Has a repeatable monitoring checklist and explicit conditions for reallocation, voting, or exit | optimise |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| First Bond Seeker | 1. Pick Your LPT Path | 7. How Do I Complete My First Bond? | None | None | None |
| Reallocator Under Review | 1. Pick Your LPT Path | 8. How Do I Change or Exit My Position? | None | None | None |
| Treasury-and-Vote Participant | 1. Pick Your LPT Path | 9. How Do I Use Stake in Governance and Treasury Decisions? | None | None — Section 9 must restate the minimum stake-state context needed to act | None |
| Token Participation Evaluator | 1. Pick Your LPT Path | 2. Should I Put This LPT to Work? | None | None | None |

---

## ⏸ Checkpoint

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

- **[Phase 0 / Step 0.2]**: The per-tab glossary includes fixed numeric values for governance-controlled items such as Active Set size, thawing timing, and treasury cut. I treated those as unstable and kept them only as terms with `verify-live` annotations rather than accepting the numbers as settled fact.
- **[Phase 0 / Step 0.2]**: The glossary includes draft or discouraged terms such as `veLPT`, `Inflation Model`, and `Active Set Election`, while `deprecated-terms.md` says not to describe veLPT as existing and to prefer `Active Set` over the election phrasing unless that mechanism is the actual subject. I excluded those from the lock or normalised them to the preferred term.
- **[Phase 0 / Step 0.3]**: The brief forbids repo access for design work, but the authority registry names public repos and LIPs as primary verification sources. I assumed that meant "do not inspect current repo structure or current docs IA", while still using the registry's named source classes to decide which terms require live verification.
- **[Phase 1 / Personas scoring]**: The scoring rubric asks for `Depth` based on how much documentation content exists, but the same prompt says to design independently of the current structure. I assumed `Depth` meant how much content this tab should reasonably need for that persona, inferred from the Product Context rather than the current docs tree.
- **[Phase 0 / Step 0.3]**: Web search surfaced a recent Delegators docs page and the latest `go-livepeer` release, but both were already covered by existing source classes in the authority registry (docs as lead, tagged releases via repo as primary). I therefore made no new source-addition entry.
