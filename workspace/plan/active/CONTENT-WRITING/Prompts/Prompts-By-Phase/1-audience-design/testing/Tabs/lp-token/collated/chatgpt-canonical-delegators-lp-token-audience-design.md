# LPT / Delegators — Canonical Audience Design

**Tab**: LPT / Delegators  
**Audience**: delegator  
**Synthesised from**: `chatgpt-v4-delegators-audience-design.md`, `claude-web-v4-delegators-audience-design.md`  
**Synthesised**: 2026-03-23  
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| LPT | The Livepeer token that holders can keep liquid, bond to an Orchestrator, and use in governance. | — | 2-run consensus |
| Delegator | An LPT holder who backs an Orchestrator economically without running infrastructure directly. | — | single-run required |
| Bonding | The protocol action of placing LPT behind an Orchestrator; not a custody transfer. | — | 2-run consensus |
| Orchestrator | The supply-side compute operator that receives bonded stake and performs network work. | — | 2-run consensus |
| Active Set | The live, stake-ranked eligibility set for work and rewards. | verify-live: Livepeer Explorer | 2-run consensus |
| Inflationary Rewards | Newly issued LPT distributed through the protocol reward path. | — | 2-run consensus |
| ETH Fees | ETH-denominated fees that can flow to delegators through their chosen Orchestrator. | — | 2-run consensus |
| Reward Cut | The share of inflationary rewards kept by the Orchestrator before the delegator share is passed through. | — | 2-run consensus |
| Fee Cut | The share of ETH fees kept by the Orchestrator before the delegator share is passed through. | — | 2-run consensus |
| Claim Earnings | The action used to realise accumulated staking rewards. | — | 2-run consensus |
| Rebonding | Moving bonded stake to another Orchestrator without fully exiting to liquid LPT first. | — | label variant resolved |
| Unbonding | The protocol action that starts stake exit and begins the wait for liquidity to return. | verify-live: Livepeer Explorer | 2-run consensus |
| Thawing Period | The protocol-enforced wait between unbonding and liquid withdrawal. | verify-live: Livepeer Explorer | 2-run consensus |
| Bridging | Moving LPT to the chain where staking participation actually occurs before bonding can begin. | — | single-run required |
| Governance | Stake-linked participation in protocol and treasury decisions. | — | 2-run consensus |
| Voting Power | The stake-linked voting weight attached to bonded participation, including the ability to act directly where the protocol allows. | — | label family resolved |
| Community Treasury | The on-chain treasury governed by LPT stakeholders. | — | label variant resolved |
| Treasury Reward Cut Rate | The governance-controlled reward-cut parameter that routes part of rewards to the treasury. | verify-live: LIPs repo + Treasury dashboard | 2-run consensus |

---

## Arriving Question

> "I have LPT — should I put it to work now, and if so what is the right next safe action to stake, move, or use it in governance?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | The Yield Seeker | Exchange referral, home route, or web search after acquiring LPT | LPT in wallet or near-term intent to acquire it, but no live position yet | A completed first bond to a chosen Orchestrator and a clear view of the commitment they just made | 3 | 3 | 3 | 9 | strong (2/2) |
| 2 | Reallocator Under Review | Explorer check, operator-status change, Discord/forum discussion, or return visit | An existing bonded position and a reason to question it | A completed rebond, unbond, claim, or deliberate decision to stay put | 2 | 3 | 3 | 8 | strong (2/2) |
| 3 | Treasury-and-Vote Participant | Proposal link, community route, or governance thread | A live proposal or treasury decision and unclear stake mechanics | A cast vote, override decision, or intentional abstain decision tied to their stake | 2 | 2 | 3 | 7 | strong (2/2) |
| 4 | The L1 Stranded | Search or community route after discovering staking does not start from their current token location | LPT on Ethereum mainnet and no clear path to where staking happens | LPT in the right place and a clean route into first bonding | 2 | 2 | 3 | 7 | single-run exception |

**Primary persona**: The Yield Seeker — both runs centered the first-time LPT activator as the highest-volume, highest-impact audience.

**Self-identification**: dedicated disambiguation section — both runs agreed that “LPT holder” does not map cleanly to one entry state, because first-time staking, stake movement, governance action, and bridge-first setup are materially different paths.

**Entry blockers**:
- Readers must first classify whether they are starting, changing stake, voting, or bridging from the wrong token location — resolved by **Section 1**.
- Readers cannot commit safely until bonding consequences are explicit — resolved by **Sections 2–3**.
- Readers cannot choose well until they can compare outcome drivers across Orchestrators — resolved by **Sections 4–5**.
- Readers cannot act on-chain until wallet, chain, and token-location prerequisites are in place — resolved by **Section 6** before **Section 7**.
- Readers arriving for governance may need bonded-state context before acting — resolved inside **Section 9**.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I hold LPT and have not activated it yet | decide whether to delegate now, later, or not at all | avoid idle capital or a bad commitment |
| 2 | When I am considering bonding for the first time | see exactly what changes when I bond | decide with clear expectations on custody, liquidity, rewards, and governance |
| 3 | When my LPT is not yet in the right place or my wallet is not ready | prepare the chain, wallet, token location, and transaction prerequisites | reach a clean first bond without procedural mistakes |
| 4 | When I am ready to back an Orchestrator | compare operators on the factors that actually change my outcome | choose a backing target I can justify |
| 5 | When I have chosen an Orchestrator | complete the first bond and verify the position is live | activate participation without ambiguity |
| 6 | When rewards start accumulating or results differ from expectation | inspect earnings, reward-call behaviour, dilution pressure, and current cuts | decide whether to stay, claim, or reassess |
| 7 | When my operator changes or I need liquidity | claim, rebond, or unbond correctly | protect capital and timing instead of reacting blindly |
| 8 | When a governance or treasury decision appears | use my stake correctly in a vote or treasury decision | influence protocol outcomes with confidence |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify my LPT path | discover | Working out whether they are here to start, bridge, move stake, or vote |
| 2 | Decide whether delegated participation fits | evaluate | Judging whether putting LPT to work matches their goals and constraints |
| 3 | Learn what bonding changes | evaluate | Mapping liquidity, control, reward, and governance consequences before acting |
| 4 | Choose who to back | evaluate | Comparing Orchestrators using the drivers that affect outcome quality |
| 5 | Prepare to act on-chain | setup | Getting wallet, chain, token location, and transaction readiness in place |
| 6 | Activate the position | setup | Completing the first bond and verifying it is live |
| 7 | Use and manage stake | operate | Claiming, moving, exiting, or voting as conditions change |
| 8 | Review and adjust over time | optimise | Monitoring signals that tell them to stay, move, vote, or exit |

**On-demand**:
- Current Active Set status, operator ranking context, and reward-call history
- Current Reward Cut and Fee Cut for a chosen Orchestrator
- Current Unbonding / Thawing timing before exiting
- Claim Earnings, Rebonding, and Unbonding action paths
- Bridging and prerequisite checks when LPT is on the wrong chain
- Governance proposal status, voting timing, and stake-linked voting rules
- Treasury proposal status and current Treasury Reward Cut Rate
- Current inflation, yield, and dilution context affecting expected outcomes

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Entry | Home → Delegators | Audience routing for readers who identify with token participation rather than infrastructure operation |
| Entry | About → Delegators | Readers who understand the protocol conceptually and now want the token-holder action path |
| Entry | Orchestrators → Delegators | Readers evaluating where to place stake after learning how Orchestrators work |
| Exit | Delegators → Orchestrators | Deeper operator evaluation, supply-side context, and performance interpretation |
| Exit | Delegators → About | Deeper protocol economics and architecture context after the reader has chosen a participation path |
| Exit | Delegators → Community | Governance discourse, proposal discussion, and treasury participation around active decisions |
| Exit | Delegators → Resource HUB | Changelog, glossary, and cross-cutting reference material |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Pick Your LPT Path | Which situation am I actually in right now: starting, bridging, moving, or voting? | Route to the correct path before action | orient | navigation | Holds LPT interest or stake but has not classified the current task | Has identified which participation path applies to the current situation | discover |
| 2. Should I Put This LPT to Work? | Why would I delegate this token instead of keeping it idle or liquid? | Decide whether to participate with LPT | evaluate | guide | Knows they have a relevant token decision but not whether to act | Has decided to delegate now, defer, or stay liquid | evaluate |
| 3. What Changes When I Bond? | What do I keep, what gets locked, and what rights or tradeoffs begin when I bond? | See exactly what changes when bonding starts | explain | concept | Is open to participating but unclear on consequences | Has accepted or rejected the control, liquidity, and governance consequences of bonding | evaluate |
| 4. What Drives My Outcome? | Where do rewards, fees, dilution, treasury flows, and operator behaviour actually affect me? | Explain the drivers behind returns and risk | explain | concept | Is considering participation but cannot yet judge outcome quality | Has written the outcome drivers and risk factors they will use to judge participation | evaluate |
| 5. Which Orchestrator Should I Back? | How do I compare operators in a way that matches my goals? | Compare and choose an Orchestrator | choose | guide | Wants to participate and knows the outcome drivers they care about | Has a shortlist and a chosen set of selection criteria for backing | evaluate |
| 6. What Must Be Ready Before I Act? | What do I need in place before I can bond safely? | Prepare chain, wallet, token-location, and transaction prerequisites | start | instruction | Has selected an Orchestrator but may still be missing wallet, chain, or bridge readiness | Has LPT in the right place, transaction funds ready, and verification surfaces open | setup |
| 7. How Do I Complete My First Bond? | What exact sequence gets me from ready to live? | Complete first delegation safely | start | instruction | Has picked an Orchestrator and completed prerequisites | Has completed a first bond and verified the position is live | setup |
| 8. How Do I Claim, Move, or Exit My Position? | If I need to realise earnings, move stake, or leave, what is the correct path and timing? | Manage stake changes without losing control | operate | instruction | Has a live position and a reason to change it | Has completed a claim, rebond, or unbond plan and knows when liquidity returns | operate |
| 9. How Do I Use Stake in Governance and Treasury Decisions? | How does my bonded stake turn into actual influence over proposals and treasury decisions? | Use stake correctly in governance | operate | guide | Has live or planned stake and a governance reason to act | Has voted, overridden, or intentionally abstained on a proposal and can explain how treasury decisions connect to stake | operate |
| 10. What Should I Watch Ongoing? | What signals tell me to stay, move, vote, or exit? | Build a recurring review routine | optimise | guide | Has an active or recently changed position | Has a repeatable monitoring checklist and explicit conditions for reallocation, voting, or exit | optimise |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Yield Seeker | 1. Pick Your LPT Path | 7. How Do I Complete My First Bond? | None | None | None |
| Reallocator Under Review | 1. Pick Your LPT Path | 8. How Do I Claim, Move, or Exit My Position? | None | None | None |
| Treasury-and-Vote Participant | 1. Pick Your LPT Path | 9. How Do I Use Stake in Governance and Treasury Decisions? | None | Section 9 must restate the minimum stake-state context needed to act | None |
| The L1 Stranded | 1. Pick Your LPT Path | 7. How Do I Complete My First Bond? | None | Section 6 must surface the bridge-first subpath before bonding begins | None |

---

## ⏸ Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question specific — not a topic?
- [x] Personas: consensus ≥ 2 for all standard inclusions; single-run archetype justified where included?
- [x] Primary persona confirmed across runs or tie-broken with reasoning?
- [x] Self-identification decision: 3+ run consensus not available; both runs agreed on dedicated section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags and verify flags: carried through from any run?
- [x] All personas unblocked?
