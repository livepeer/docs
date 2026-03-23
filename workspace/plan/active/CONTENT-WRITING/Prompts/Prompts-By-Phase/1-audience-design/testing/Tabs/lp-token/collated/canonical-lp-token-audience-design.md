# LPT / Delegators — Canonical Audience Design

**Tab**: LPT / Delegators
**Audience**: `delegator`
**Synthesised from**:
- `claude-web-v4-delegators-audience-design.md` (RUN-A — v4 Claude Web run)
- `chatgpt-v4-delegators-audience-design.md` (RUN-B — v4 ChatGPT run)
- `agent-v5-lpt-audience-design.md` (RUN-C — v5 Agent run)
**Collation prompt applied**: `audience-design-collation-v2.md`
**Prior collation outputs synthesised**:
- `claude-web-canonical-lpt-delegators-audience-design.md` (Claude Web collation — used as primary)
- `chatgpt-canonical-delegators-lp-token-audience-design.md` (ChatGPT collation — structural rationale cross-check)
- `claude-web-collation-notes-lpt-delegators.md`
- `chat-gpt-collation-notes-delegators-lp-token.md`
**Collation learnings applied**: `learnings/collation-v2.md` (all findings and divergences noted)
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

> **COLLATION NOTE**: This canonical output is based on 3 audience design runs (v4 Claude Web, v4 ChatGPT, v5 Agent) and 2 collation runs (Claude Web collation, ChatGPT collation). The two collation runs reached opposite decisions on the rewards placement question (OPEN ITEM 1 below — BLOCKING). The v5 Agent run was used as a third input and a tiebreaker signal where applicable. Human resolution is required on OPEN ITEM 1 before Phase 2 content writing can begin for the rewards mechanics section.
>
> Where the two prior collation outputs agreed, their decisions are adopted unchanged. Where they diverged, this canonical output applies the collation v2 rules and documents the tiebreaker rationale. The `collation-v2.md` learnings file documents what the divergences imply for the collation prompt.

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| LPT (Livepeer Token) | The Livepeer protocol token. Used for staking (to establish orchestrator active set eligibility), delegation (to earn rewards and governance weight), and on-chain governance. Earned via inflation rewards and job fees. | — | 3-run consensus |
| Delegator | An LPT token holder who bonds their tokens to an orchestrator to earn a share of inflation rewards and ETH fees, and to participate in on-chain governance — without operating infrastructure. | — | 3-run consensus |
| Delegation | The act of backing an orchestrator economically by bonding LPT to them. The delegator retains wallet custody; the tokens do not leave the delegator's control except to the protocol's BondingManager contract. | — | 3-run consensus |
| Bonding | The protocol action of locking LPT to an orchestrator in the BondingManager contract. Used interchangeably with delegation as a concept; the protocol's technical term for the action. Not a custody transfer. | — | 3-run consensus |
| Orchestrator | The supply-side GPU compute operator in the Livepeer network; the entity a delegator bonds to. Selects jobs from gateways, earns ETH fees, and distributes a portion of inflation rewards and fees to delegators per their reward cut and fee cut settings. | — | 3-run consensus |
| Active Set | The governance-controlled group of top-ranked orchestrators by total bonded stake (self-stake plus delegated stake) eligible to receive video transcoding jobs and earn inflation rewards in a given round. Size is governance-controlled — do not hard-code. | `[verify-live: https://explorer.livepeer.org]` — current size is governance-controlled | 3-run consensus |
| Round | The protocol's time unit — approximately one day of Arbitrum blocks. Governs reward distribution, active set determination, and inflation adjustments. Not a calendar day and not synonymous with "epoch." | — | 3-run consensus |
| Inflationary Rewards | Newly minted LPT tokens distributed each round to active orchestrators and their delegators, proportional to their bonded stake and the orchestrator's reward cut setting. | — | 3-run consensus |
| ETH Fees | Fees paid in ETH by gateways for completed video transcoding and AI inference work. Distributed to orchestrators and, through the fee cut setting, to their delegators. | — | 3-run consensus |
| Reward Cut | The percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder proportionally to delegators. A higher reward cut means less flows to delegators. Range 0–100%. | — | 3-run consensus |
| Fee Cut | The percentage of ETH fees an orchestrator retains before distributing the remainder to delegators. Set independently from Reward Cut. | — | 3-run consensus |
| Thawing Period | The protocol-enforced waiting period after initiating unbonding before bonded LPT becomes withdrawable. Duration is governance-controlled. | `[verify-live: https://explorer.livepeer.org]` — duration is governance-controlled; do not hard-code | 3-run consensus |
| Unbonding | The action of initiating exit from a bonded position; starts the Thawing Period clock. Must be completed before tokens can be withdrawn. | `[verify-live: https://explorer.livepeer.org]` | 3-run consensus |
| Rebonding | Moving bonded stake from one orchestrator to another without going through the full Thawing Period. Keeps LPT in bonded state. Also called "redelegation" informally. | — | 3-run consensus |
| Claim Earnings | The on-chain action of collecting accumulated inflationary rewards to the delegator's wallet. Requires an active bonded position. | — | 3-run consensus |
| Inflation Rate | The current per-round LPT issuance rate, algorithmically adjusted toward the Target Bonding Rate. Governance-controlled. | `[verify-live: https://explorer.livepeer.org]` | 3-run consensus |
| Target Bonding Rate | The protocol's desired ratio of bonded to total LPT supply; drives the inflation adjustment mechanism. Governance-controlled. | `[verify-live: https://explorer.livepeer.org]` | 3-run consensus |
| Dilution | The reduction in an unbonded holder's proportional LPT share caused by inflationary issuance to bonded participants. Non-staking holders are diluted by each round of inflation they do not participate in. | — | 3-run consensus |
| Governance | Stake-weighted on-chain decision-making via the LivepeerGovernor contract. Tied to bonded LPT. Not limited to forum discussion — includes binding on-chain votes on protocol parameters, treasury spending, and LIP adoption. | — | 3-run consensus |
| Vote Detachment | The Livepeer-specific mechanism allowing a delegator to override their orchestrator's vote on their portion of stake. Not standard governance terminology — must be explained on first use. | — | 3-run consensus |
| Treasury | The on-chain pool governed by LPT stakeholders; funded by a governance-controlled percentage of per-round inflation. Used for community-approved grants and ecosystem development. Not a company budget. | — | 3-run consensus |
| Treasury Reward Cut Rate | The governance-controlled percentage of each round's inflationary rewards redirected to the Community Treasury before the remainder flows to orchestrators and delegators. | `[verify-live: https://github.com/livepeer/LIPs + treasury dashboard]` — governance-controlled; do not hard-code | 3-run consensus |
| Livepeer Explorer | The primary on-chain read interface for delegators: bond/unbond/claim UI, active set status, orchestrator reward call history, and governance proposal tracking. URL: https://explorer.livepeer.org | — | 3-run consensus |
| Bridging | The process of moving LPT from Ethereum mainnet (L1) to Arbitrum (L2) where staking occurs. Required prerequisite for delegators whose LPT is on L1. | — | 3-run consensus |

**Terms excluded from canonical lock**:
- `veLPT` — both v4 runs excluded it; `deprecated-terms.md` flags it as a proposal not yet implemented. Excluded.
- `Active Set Election` — deprecated phrasing per `deprecated-terms.md`; all runs excluded it. Excluded.
- `Community Treasury` — merged into Treasury definition; used interchangeably. Not a separate term.
- `Voting Power` — covered functionally within Vote Detachment and Governance definitions. Claude Web collation: excluded as standalone. ChatGPT collation: used as umbrella term. Canonical decision: covered within Vote Detachment.
- `Proposer Bond` — appeared in v5 run (100 LPT value cited); `[verify-against: https://github.com/livepeer/protocol — LivepeerGovernor contract]` — specific numeric value requires primary-source verification. Excluded from lock; flagged in Open Items.
- `Staking/Bonding` as combined term — covered by Bonding and Delegation entries. Not duplicated.

---

## Arriving Question

> "I have LPT — how do I put it to work, and what am I actually committing to?"

**Synthesis note**: All three runs produced variants converging on two shared elements: (1) the activation question ("how do I stake / what do I do with this token") and (2) the commitment question ("what am I actually signing up for — liquidity, risk, obligations"). The canonical question synthesises both. The v5 run arrived at an almost identical formulation ("I have LPT tokens — how do I stake them, and how do I choose which orchestrator to stake with?") — the canonical question replaces "choose which orchestrator" with "what am I committing to" to avoid front-loading the orchestrator selection decision into the arriving question.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **First Bond Seeker / Yield Seeker** | Search result, exchange referral, Home route, wallet moment after acquiring LPT | LPT in wallet (on Arbitrum or L1) with no live bonded position; rough sense that staking is possible but no knowledge of orchestrators, commission structure, or Thawing Period | A completed first bond to a chosen orchestrator; clear understanding of what was committed to (Thawing Period, commission structure, how to claim) | 3 | 3 | 3 | **9** | 3/3 unanimous |
| 2 | **Reallocator / Active Stakeholder** | Livepeer Explorer notification, Discord/forum link, orchestrator status change, governance proposal link | An existing bonded position; basic Explorer familiarity; accumulated rewards | Has completed a Rebond, initiated Unbonding, or cast/overridden a vote — depending on the trigger that brought them back | 2 | 3 | 3 | **8** | 3/3 unanimous |
| 3 | **Treasury-and-Vote / Governance Entrant** | Governance proposal link, Community route, governance forum thread | A proposal deadline or treasury decision; LPT bonded or unbonded; familiarity with DAO governance from other protocols | Has voted on a proposal or confirmed how vote weight is calculated and how to cast a vote independently of their orchestrator | 2 | 2 | 3 | **7** | 3/3 unanimous |
| 4 | **L1 Stranded** | Web search, community Discord | LPT on Ethereum mainnet; no awareness that staking requires Arbitrum | Has bridged LPT to Arbitrum and is ready to bond | 2 | 2 | 3 | **7** | 2/3 consensus — included (see note) |
| 5 | **Token Participation Evaluator** | Home, About, referral | Interest in LPT participation but no commitment yet; may be evaluating the protocol | A yes/no decision on whether delegation fits their goals and risk tolerance | 2 | 2 | 2 | **6** | 1/3 — included (see note) |

**L1 Stranded note**: 2/3 consensus across v4 runs (Claude Web collation and v5 Agent run identified it; ChatGPT collation subsumed it into prerequisites). Included because: (a) a reader whose LPT is on L1 faces a hard-stop blocker (cannot bond until bridged), (b) Impact=3, (c) the path is not covered by any other section without adding a specific prerequisite. Dedicated section required.

**Token Participation Evaluator note**: 1/3 consensus as a distinct persona (v5 Agent run only among primary audience design runs; neither v4 collation included it consistently). The pre-commitment evaluation job (J1 — "should I delegate now, later, or not at all") is partially served by the section structure. Included with Impact=2 because the collation-v2 learnings note that the collation prompt's single-run inclusion rule is ambiguous at Impact=2 — this is a human judgement call. Included pending human review.

**Primary persona**: First Bond Seeker / Yield Seeker — unanimous across all three runs.

**Self-identification**: Both v4 runs independently determined that "LPT holder" / "token holder" does not route cleanly to a single persona — it maps to at least four materially different entry states. **Dedicated disambiguation section required as S1.** Decision confirmed unanimously.

**Entry blockers**:
1. Reader cannot identify correct path until they know their situation (first bond, returning, governance action, L1 start) — resolved by S1 (disambiguation).
2. Reader whose LPT is on Ethereum mainnet cannot bond until bridged — hard-stop; S3 (bridging section) must precede S5 (bonding instruction).
3. Reader cannot choose an orchestrator without comparison criteria — S4 must precede S5.
4. Reader cannot bond safely until they understand the Thawing Period consequences — S2 must precede S5.
5. Treasury-and-Vote / Governance Entrant must be bonded (or understand the prerequisite) before voting power is meaningful — soft blocker; addressed by routing callout within the governance section.

---

## Jobs to be Done

| # | When… | I want to… | So I can… |
|---|---|---|---|
| J1 | I hold LPT and am not yet participating | decide whether to delegate now, later, or not at all | avoid idle capital and dilution, or avoid a commitment I'm not ready for |
| J2 | I am willing to participate but do not know the consequences | see exactly what changes when I bond — control, liquidity, and governance weight | commit with clear expectations and no surprises about the Thawing Period |
| J3 | I hold LPT on Ethereum mainnet and want to start staking | understand how to move my tokens to where staking actually happens | be able to participate without losing tokens or paying unnecessary gas |
| J4 | I am ready to back an orchestrator but do not know how to choose | compare operators on reward call consistency, commission rate, and Active Set standing | pick a backing target I can justify, not just the first one listed |
| J5 | I have chosen an orchestrator and need to set up prerequisites | prepare the wallet, chain, and token location before I bond | reach a clean first bond without procedural mistakes or failed transactions |
| J6 | I need to execute the first bond | complete the bonding transaction and verify the position is live | confirm I'm earning and know what to watch next |
| J7 | My rewards have been accumulating and I want to collect them | claim earnings and check whether my orchestrator is calling reward each round | see real numbers and decide whether to compound, hold, or exit |
| J8 | My current orchestrator changes terms or performance, or I want to exit | rebond to a different orchestrator, top up stake, or initiate unbonding | protect my position and know exactly when liquidity returns if I unbond |
| J9 | A governance or treasury proposal is open | use my bonded stake to vote — independently of my orchestrator if I choose | influence protocol outcomes without reading a full LIP from scratch |
| J10 | My results look different from expectations over time | inspect reward drivers, dilution, commission splits, and reward call history | decide whether to stay, move, or exit with evidence rather than guesswork |

**Coverage check**: Arrival jobs (J1, J2, J3) ✓ · Active-use jobs (J4, J5, J6, J7, J8) ✓ · Return-visit jobs (J7, J8, J10) ✓ · Edge case (L1 bridging): J3 ✓ · Edge case (governance/treasury): J9 ✓

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify my LPT participation path | `discover` | Determining which situation applies: first bond, returning, governance-only, or L1-stranded |
| 2 | Decide whether bonded participation fits | `evaluate` | Judging whether delegation matches their goals, risk tolerance, and liquidity needs |
| 3 | Get tokens into position | `setup` | Bridging LPT from L1 to Arbitrum if needed, or confirming wallet readiness |
| 4 | Understand what drives my outcome | `evaluate` | Seeing how reward cut, fee cut, inflation, dilution, and reward call consistency affect net returns — before choosing an orchestrator |
| 5 | Choose an orchestrator | `evaluate` | Comparing operators on commission rate, reward call consistency, Active Set standing |
| 6 | Complete the first bond | `setup` | Executing the bonding transaction; understanding the Thawing Period before signing; confirming position is live |
| 7 | Watch, claim, and track | `operate` | Monitoring yield, claiming earnings, checking reward call history |
| 8 | Manage stake and governance over time | `optimise` | Rebonding, topping up, initiating unbonding; voting on proposals |

**Note on position 4 (outcome drivers)**: The rewards/economics education section is placed before orchestrator selection (position 4, pre-selection) rather than after bonding (post-bonding). Rationale: the reader cannot compare orchestrators intelligently without first understanding how reward cut, fee cut, and dilution affect their actual returns. Pre-selection placement aligns with the ChatGPT collation rationale, which was assessed in collation-v2 learnings as the stronger argument (reader needs evaluation criteria before choosing, not just after bonding). This placement is the canonical decision pending human sign-off on OPEN ITEM 1.

**On-demand**:
- Current Active Set status and orchestrator ranking
- Current Reward Cut and Fee Cut for a chosen orchestrator
- Reward call history — has the orchestrator called reward this round?
- Current Thawing Period duration and liquidity timeline
- Yield estimate: inflation rate × stake weight × commission split
- Claim Earnings, Rebond, and Unbonding action paths
- Bridging token flow — gas estimate, confirmation time, Arbitrum arrival verification
- Governance proposal status, voting deadline, and vote cast/change path
- Treasury Reward Cut Rate and active treasury proposals

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Delegators | Audience-routing CTA for LPT holders |
| Inbound | About → Delegators | Readers who understand protocol economics conceptually and want a token-holder action path |
| Inbound | Orchestrators → Delegators | Delegators evaluating which orchestrator to stake to, or orchestrators recruiting delegator stake |
| Outbound | Delegators → Orchestrators | Operators who want to understand how to attract delegators; readers who want supply-side context for evaluation |
| Outbound | Delegators → About | Deeper protocol economics, tokenomics history, governance architecture |
| Outbound | Delegators → Community | Governance discourse, proposal discussion, broader ecosystem participation |
| Outbound | Delegators → Resource HUB | CLI reference (not directly relevant but links to changelog, glossary, governance records) |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which situation is mine? | "I hold LPT — which of these situations applies to me right now: first bond, returning, governance-only, or tokens on L1?" | J1, J3 | `orient` | `navigation` | Holds LPT interest or live stake but has not identified which participation path applies | Has identified their situation and is routed to the correct next section | `discover` |
| S2 — What bonding actually means | "What do I keep, what gets locked, and what changes for my control, liquidity, and governance weight the moment I bond?" | J2 | `explain` | `concept` | Open to participating but unclear on consequences of bonding | Has accepted or rejected the control, liquidity, and Thawing Period consequences and knows whether to proceed | `evaluate` |
| S3 — Getting LPT onto Arbitrum | "My LPT is on Ethereum mainnet — do I need to move it, and how?" | J3 | `start` | `instruction` | Holds LPT on L1; cannot bond until it is on Arbitrum | Has completed the bridge transaction; LPT balance is confirmed on Arbitrum; wallet is ready to bond | `setup` |
| S4 — What drives my outcome: rewards, fees, and dilution | "How do reward cut, fee cut, inflation, dilution, and the treasury cut actually affect what I earn?" | J2, J10 | `explain` | `concept` | Has accepted the bonding commitment; does not yet understand what determines the size of their rewards | Can produce an approximate yield model; understands how the Treasury Reward Cut Rate, orchestrator commission settings, and inflation rate interact to determine their net return; has criteria to use when comparing orchestrators `[⚠ Design flag: may need to split — reward mechanics and dilution/treasury mechanics may warrant separate concept pages; flag for detailed design]` | `evaluate` |
| S5 — Choosing an orchestrator | "How do I decide which orchestrator to bond to — what should I actually look at, and what are the red flags?" | J4 | `choose` | `guide` | Has LPT on Arbitrum and understands outcome drivers; wants to pick a specific orchestrator | Has selected a specific orchestrator with a reasoned case based on reward call history, commission rate, and Active Set standing | `evaluate` |
| S6 — Bonding your LPT | "How do I actually bond my LPT — what are the exact steps, and what must be in place before I sign?" | J5, J6 | `start` | `instruction` | Has chosen an orchestrator; has LPT on Arbitrum; is ready to execute | Has an active bonded position confirmed in Livepeer Explorer; knows the bond was placed correctly and can see their position | `setup` |
| S7 — How rewards accumulate and how to claim | "How do rewards build up, how do I know my orchestrator is actually paying, and how do I collect what I've earned?" | J7 | `operate` | `guide` | Has an active bonded position; wants to understand the reward cycle and claim process | Has claimed earnings at least once; knows how to check reward call history for their orchestrator and recognise a missed round | `operate` |
| S8 — Managing your staking position | "How do I switch orchestrators, initiate an unbond, or claim — and what does each path cost me in time and fees?" | J8 | `operate` | `guide` | Has a live bonded position and a reason to change it | Has completed the desired action (Rebond confirmed, Unbonding initiated, earnings claimed); knows the Thawing Period timeline if exiting | `optimise` |
| S9 — Participating in governance | "How does governance work, and how do I vote with my stake — including independently of my orchestrator?" | J9 | `operate` | `guide` | Is bonded (or evaluating bonding for governance weight); has not yet voted or understood Vote Detachment | Has voted on an open proposal or knows exactly what to do when one opens; understands Vote Detachment and how to override their orchestrator's vote | `operate` |
| S10 — Treasury and ecosystem funding | "What is the treasury, how is it funded, and how can I influence spending decisions?" | J9 | `explain` | `concept` | Participates in governance; wants to understand the treasury as a distinct mechanism | Can explain how the Treasury Reward Cut Rate feeds the treasury each round, what SPEs are, and how to follow or engage with spending proposals | `operate` |

**Section count**: 10 sections — within the 8–12 target range.

**Design flags**:
- S4 `[⚠ Design flag: may need to split]` — reward mechanics education and dilution/treasury mechanics may warrant two separate concept pages during detailed design if content volume warrants it.
- S7 `[⚠ Design flag from Claude Web collation]` — section carries both explanation (how rewards work) and operational guidance (how to claim). Acceptable at 10 sections but flagged for content-load check during detailed design.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| First Bond Seeker (LPT on Arbitrum) | S1 (routes past bridging to S2) | S6 (bond complete) then optionally S7 | None — S3 is skippable; S2 → S5 → S6 sequence in order | S4 must include criteria useful for S5 orchestrator selection — if S4 is pure theory without selector criteria, S5 loses its prerequisite grounding | None |
| First Bond Seeker (LPT on L1) | S1 → S3 (bridge) → S2 → S5 → S6 | S6 or S7 | None — S3 resolves hard-stop blocker before S6 requires Arbitrum LPT | S3 must explicitly surface bridging gas costs and confirmation time; a reader who arrives with minimal ETH may be surprised | None |
| Reallocator / Active Stakeholder | S7 (check yield), S8 (manage stake), or S9 (governance) depending on trigger | S8 or S9–S10 | None — return-visit sections S7–S10 are self-contained | S8 must be self-contained enough to use without re-reading S1–S6; a returning delegator should not need to navigate through first-time content | None |
| Treasury-and-Vote / Governance Entrant | S1 (routes to S9) → S9 | S10 | None | S9 must state the bonded-stake prerequisite explicitly; a governance-focused reader who is not yet bonded needs a clear routing note to S6 before they can vote | None |
| L1 Stranded | S1 → S3 | S6 (after bridging and completing full path) | None — S3 resolves hard-stop | S3 must address the case where the reader has LPT on L1 but minimal ETH on L2 for gas — both are required before bonding | None |
| Token Participation Evaluator | S1 → S2 | S2 (decides whether to proceed) | None | S2 must give a clear yes/no framing, not a generic explainer; the reader needs to leave with a concrete decision rather than a neutral understanding | None |

**All personas have unblocked paths. No missing sections.**

**Gap notes for Phase 2 content briefs**:
1. S3: Surface bridging gas cost and confirmation time explicitly — L1 Stranded persona may have insufficient L2 ETH
2. S4: Include criteria that directly enable orchestrator comparison in S5 — not just conceptual explanation
3. S8: Must be self-contained; include a recap of key context (what Thawing Period means, what Rebond vs Unbond does) for return-visit use without re-reading S1–S6
4. S9: State the bonded-stake prerequisite for voting power; include routing callout to S6 for governance-only readers not yet bonded

---

## Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags from any run carried through (Active Set size, Thawing Period, Treasury Reward Cut Rate, Proposer Bond, Inflation Rate, Target Bonding Rate all have `[verify-live]` flags)
- [x] Arriving question specific — not a topic
- [x] Personas: consensus ≥ 2 for standard inclusions; single-run inclusions (Token Participation Evaluator) documented with reasoning
- [x] Primary persona confirmed across all three runs
- [x] Self-identification decision confirmed (unanimous across both v4 runs)
- [x] Entry blockers: union of all runs — none dropped
- [x] Jobs: J1–J10, full coverage of arrival, active-use, return-visit, and edge cases
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values
- [x] Design flags carried through (S4 split flag, S7 content-load flag)
- [x] All personas unblocked; gap notes documented for Phase 2

---

## Open Items (require human resolution before Phase 2)

### OPEN ITEM 1 — Rewards placement: BLOCKING

**Issue**: The two v4 collation runs reached opposite canonical decisions on where reward mechanics education sits relative to orchestrator selection:
- Claude Web collation: Rewards post-bonding (S6) — reader has a real position to apply the numbers to
- ChatGPT collation: Rewards pre-operator-selection (before S4/S5) — reader cannot compare operators without first understanding reward drivers

**Canonical output decision**: Pre-operator-selection placement (S4, before S5 orchestrator selection). Rationale: the ChatGPT collation argument is more reader-state-appropriate — a reader who reaches orchestrator selection without understanding reward cut, fee cut, and dilution cannot make a well-reasoned choice. The Claude Web post-bonding argument is correct for return-visit use, but the section also serves pre-bonding evaluation by design.

**Human sign-off required**: This placement must be confirmed before Phase 2 content writing begins for S4 and S5. If the decision changes to post-bonding, S5 (orchestrator selection) becomes the section immediately following S2/S3, and reward mechanics moves to after S6 (bonding). Section numbering and persona paths would require revision.

---

### OPEN ITEM 2 — Token Participation Evaluator persona inclusion: NON-BLOCKING

**Issue**: This persona appeared consistently in the v5 run but only in one of the two prior collation runs. Inclusion at Impact=2 is a judgement call (the collation-v2 learnings identify this as an ambiguous case in the collation prompt rules).

**Resolution path**: Human reviewer confirms inclusion or exclusion. If excluded, the pre-commitment evaluation job (J1 — "should I delegate now, later, or not at all?") must still be served by S1 and S2. NON-BLOCKING — the section structure serves J1 regardless of whether this persona is listed.

---

### OPEN ITEM 3 — Treasury vs Community Treasury label: NON-BLOCKING

**Issue**: The two v4 collation runs used different canonical terms ("Treasury" vs "Community Treasury"). Canonical output uses "Treasury" with a note that Community Treasury is an acceptable informal variant.

**Resolution path**: Human confirms canonical label against the wider docs style guide. NON-BLOCKING — both terms refer to the same on-chain entity.

---

### OPEN ITEM 4 — Proposer Bond value: NON-BLOCKING

**Issue**: The v5 run cites 100 LPT as the Proposer Bond minimum. This is a specific numeric value that requires primary-source verification against the LivepeerGovernor contract before use in any content page.

**Resolution path**: Verify current Proposer Bond value against `https://github.com/livepeer/protocol` (LivepeerGovernor contract) or Arbiscan. NON-BLOCKING — this is a content-level verify step, not a structural gate.

---

### OPEN ITEM 5 — Treasury Reward Cut Rate and active set size values: NON-BLOCKING

**Issue**: Multiple governance-controlled values appear in the run outputs without confirmed live values. Specifically: Active Set size (glossary says 100 — governance-controlled, may have changed), Treasury Reward Cut Rate (glossary says 10% — governance-controlled, may have changed), Thawing Period (glossary says ~7 rounds — governance-controlled, may have changed).

**Resolution path**: Human reviewer checks current values at `https://explorer.livepeer.org` before any content page uses these values. All three are flagged `[verify-live]` in the TERMINOLOGY_LOCK. NON-BLOCKING for structure; BLOCKING for content that cites specific values.
