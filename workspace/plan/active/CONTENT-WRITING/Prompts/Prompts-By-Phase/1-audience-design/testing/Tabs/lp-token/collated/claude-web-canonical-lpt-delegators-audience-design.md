# LPT / Delegators — Canonical Audience Design

**Tab**: LPT / Delegators
**Audience**: `delegator`
**Synthesised from**: `chatgpt-v4-delegators-audience-design.md`, `claude-web-v4-delegators-audience-design.md`
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| LPT | Livepeer's native protocol token; the unit of stake used for delegation, governance weight, and inflationary reward distribution | — | 2-run consensus |
| Delegator | A token holder who bonds LPT to an Orchestrator to earn rewards and participate in governance without operating infrastructure | — | 2-run consensus |
| Delegation | The act of backing an Orchestrator economically with bonded LPT while retaining wallet custody of the stake | — | 2-run consensus |
| Bonding | The protocol action of locking LPT behind a chosen Orchestrator; not a generic staking synonym and not a custody transfer | — | 2-run consensus |
| Orchestrator | The supply-side compute operator in the Livepeer network; the entity a delegator bonds to | — | 2-run consensus |
| Active Set | The live, stake-ranked eligibility set of Orchestrators qualified for work and rewards in a given round | `[verify-live: Livepeer Explorer — current size is governance-controlled]` | 2-run consensus |
| Inflationary Rewards | LPT minted each round and distributed to bonded participants proportional to stake and Orchestrator reward cut | — | 2-run consensus |
| ETH Fees | Fees paid in ETH by video pipeline users and distributed to Orchestrators and their delegators | — | 2-run consensus |
| Reward Cut | The percentage of inflationary LPT an Orchestrator retains before passing the remainder to delegators; a higher value means less reaches delegators | — | 2-run consensus |
| Fee Cut | The percentage of ETH fees an Orchestrator retains before passing the remainder to delegators; same directional logic as Reward Cut | — | 2-run consensus |
| Round | The protocol's time unit — approximately one Arbitrum block-day; not a calendar day and not synonymous with "epoch" | — | 2-run consensus |
| Thawing Period | The protocol-enforced wait between initiating unbonding and LPT becoming liquid; not standard industry terminology — must be introduced and distinguished from the unbonding action that starts it | `[verify-live: Livepeer Explorer — duration is governance-controlled]` | 2-run consensus |
| Unbonding | The action of initiating exit from a bonded position; starts the Thawing Period clock | `[verify-live: Livepeer Explorer]` | 2-run consensus |
| Rebonding | Moving bonded stake from one Orchestrator to another without going through the full Thawing Period | — | 2-run consensus |
| Claim Earnings | The on-chain action of collecting accumulated inflationary rewards to the delegator's account | — | 2-run consensus |
| Inflation Rate | The current per-round LPT issuance rate, algorithmically adjusted toward the Target Bonding Rate | — | 2-run consensus |
| Target Bonding Rate | The protocol's desired ratio of bonded to total LPT supply; drives the inflation adjustment mechanism | — | 2-run consensus |
| Dilution | The reduction in an unbonded holder's proportional LPT share caused by inflationary issuance to bonded participants | — | 2-run consensus |
| Governance | Stake-weighted on-chain decision-making tied to bonded LPT; not limited to forum discussion | — | 2-run consensus |
| Vote Detachment | The Livepeer-specific mechanism allowing a delegator to override their Orchestrator's vote with their own on their portion of stake; not standard governance terminology — must be explained | — | 2-run consensus |
| Treasury | The on-chain fund governed by LPT stakeholders; not a company budget | — | 2-run consensus |
| Treasury Reward Cut Rate | The governance-controlled percentage of each round's inflationary rewards redirected to the Community Treasury | `[verify-live: LIPs repo + Treasury dashboard — governance-controlled; do not hard-code the current value]` | 2-run consensus |
| Livepeer Explorer | The primary on-chain read interface for active set status, bonded stake, reward call history, and governance proposals | — | 2-run consensus |
| Bridging | The process of moving LPT from Ethereum mainnet (L1) to Arbitrum (L2) where staking occurs | — | 2-run consensus |

**Terms excluded**:
- `veLPT` — both runs excluded it; `deprecated-terms.md` flags it as a proposal not yet implemented. `[single-run: not included]`
- `Inflation Model` / `Dynamic Inflation` — both runs noted a deprecated-terms conflict and excluded the composite term; mechanism is covered by component terms (Inflation Rate, Target Bonding Rate, Inflation Adjustment). `[single-run: not included]`
- `Active Set Election` — deprecated phrasing per `deprecated-terms.md`; both runs excluded it. `[single-run: not included]`
- `Voting Power` (as a standalone term) — covered functionally within Vote Detachment and Governance definitions. Excluded to avoid redundancy.
- `Community Treasury` — merged into `Treasury` definition above; both runs used these interchangeably.
- `Stake-Weighted Voting` — covered within Governance and Vote Detachment definitions.
- `Proposer Bond` — single-run term (Claude run only); `[verify-live: LivepeerGovernor contract on Arbiscan — value is governance-controlled]`; flagged in Open Items rather than locked here.

---

## Arriving Question

> "I have LPT — how do I put it to work, and what am I actually committing to?"

**Synthesis note**: ChatGPT foregrounded path disambiguation ("which situation am I in right now"); Claude foregrounded yield activation with a risk flag ("how do I stake it, and is there a catch?"). Both framings are present in the canonical question. See Collation Notes for detail.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | First Bond Seeker / Yield Seeker | Search result, exchange referral, Home route, wallet moment after acquiring LPT | LPT in wallet (on Arbitrum or L1) with no live bonded position; rough sense that staking is possible but no knowledge of Orchestrators, commission structure, or Thawing Period | A completed first bond to a chosen Orchestrator; clear understanding of what was committed to (Thawing Period, commission structure, how to claim) | 3 | 3 | 3 | **9** | 2/2 unanimous |
| 2 | Reallocator / Active Stakeholder | Livepeer Explorer notification, Discord/forum link, Orchestrator status change, governance proposal link | An existing bonded position; basic Explorer familiarity; accumulated rewards | Has completed a Rebond, initiated Unbonding, or cast/overridden a vote — depending on the trigger that brought them back | 2 | 3 | 3 | **8** | 2/2 unanimous |
| 3 | L1 Stranded | Web search, community Discord | LPT in an Ethereum mainnet wallet; no awareness that staking requires Arbitrum | Has bridged LPT to Arbitrum and is ready to bond | 2 | 2 | 3 | **7** | 1/2 — included (see note) |
| 4 | Treasury-and-Vote / Governance Entrant | Governance proposal link, Community route, governance forum thread | A proposal deadline or treasury decision; LPT bonded or unbonded; familiarity with DAO governance from other protocols | Has voted on a proposal or confirmed how vote weight is calculated and how to cast a vote independently of their Orchestrator | 1–2 | 2 | 2–3 | **6–7** | 2/2 unanimous |
| 5 | Token Participation Evaluator | Home, About, referral, partner conversation | Interest in LPT participation but no commitment yet | A yes/no decision on whether delegation fits their goals and risk tolerance | 2 | 2 | 2 | **6** | 1/2 — included (see note) |

**Primary persona**: First Bond Seeker / Yield Seeker — unanimous across both runs.

**Self-identification**: Both runs independently determined that `LPT holder` / `token holder` does not route cleanly to a single persona — it can describe at least three materially different entry states (first participation, stake movement/return visit, governance action), and the L1 Stranded persona adds a fourth hard path. **Dedicated disambiguation section required as Section 1.** Decision: dedicated section (2/2 runs agreed; default rule not needed).

**Entry blockers**:
1. Reader cannot select the correct path until they have identified their current situation (starting / moving / voting) → resolved by **Section 1**.
2. Reader whose LPT is on Ethereum mainnet cannot bond until they bridge to Arbitrum → hard-stop; **Section 3 (bridging) must precede Section 5 (bonding)**. Section 1 routes the L1 Stranded to Section 3 before Section 5.
3. Reader cannot choose an Orchestrator well without comparison criteria → **Section 4 must precede Section 5**.
4. Reader cannot bond safely until they understand control, liquidity, and Thawing Period consequences → **Section 2 must precede Section 5**.
5. Treasury-and-Vote / Governance Entrant must be bonded (or understand they need to be) before voting power is meaningful → soft blocker addressed by routing callout within Section 9; no hard section-order constraint.

---

## Jobs to be Done

| # | When… | I want to… | So I can… |
|---|---|---|---|
| J1 | I hold LPT and am not yet participating | decide whether to delegate now, later, or not at all | avoid idle capital and dilution, or avoid a commitment I'm not ready for |
| J2 | I am willing to participate but do not know the consequences | see exactly what changes when I bond — control, liquidity, and governance weight | commit with clear expectations and no surprises about the Thawing Period |
| J3 | I hold LPT on Ethereum mainnet and want to start staking | understand how to move my tokens to where staking actually happens | be able to participate without losing tokens or paying unnecessary gas |
| J4 | I am ready to back an Orchestrator but do not know how to choose | compare operators on reward call consistency, commission rate, and Active Set standing | pick a backing target I can justify, not just the first one listed |
| J5 | I have chosen an Orchestrator and need to set up prerequisites | prepare the wallet, chain, and token location before I bond | reach a clean first bond without procedural mistakes or failed transactions |
| J6 | I need to execute the first bond | complete the bonding transaction and verify the position is live | confirm I'm earning and know what to watch next |
| J7 | My rewards have been accumulating and I want to collect them | claim earnings and check whether my Orchestrator is calling reward each round | see real numbers and decide whether to compound, hold, or exit |
| J8 | My current Orchestrator changes terms or performance, or I want to exit | rebond to a different Orchestrator, top up stake, or initiate unbonding | protect my position and know exactly when liquidity returns if I unbond |
| J9 | A governance or treasury proposal is open | use my bonded stake to vote — independently of my Orchestrator if I choose | influence protocol outcomes without reading a full LIP from scratch |
| J10 | My results look different from expectations over time | inspect reward drivers, dilution, commission splits, and reward call history | decide whether to stay, move, or exit with evidence rather than guesswork |

**Coverage check**:
- Arrival jobs: J1, J2, J3 ✓
- Active-use / operational jobs: J4, J5, J6, J7, J8 ✓
- Return-visit jobs: J7, J8, J10 ✓
- Edge case (L1 bridging path): J3 ✓
- Edge case (governance / treasury): J9 ✓

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify my LPT participation path | `discover` | Determining which situation applies: first bond, returning, governance-only, or L1-stranded |
| 2 | Decide whether bonded participation fits | `evaluate` | Judging whether delegation matches their goals, risk tolerance, and liquidity needs |
| 3 | Get tokens into position | `setup` | Bridging LPT from L1 to Arbitrum if needed, or confirming wallet readiness |
| 4 | Choose an Orchestrator | `evaluate` | Comparing operators on commission rate, reward call consistency, Active Set standing |
| 5 | Commit stake | `setup` | Completing the first bond; understanding the Thawing Period before signing |
| 6 | Watch, claim, and track | `operate` | Monitoring yield, claiming earnings, checking reward call history |
| 7 | Manage stake over time | `optimise` | Rebonding, topping up, or initiating unbonding as conditions change |
| 8 | Participate in governance | `operate` | Following proposals, casting stake-weighted votes, optionally submitting proposals |

**On-demand**:
- Current Active Set status and Orchestrator ranking
- Current Reward Cut and Fee Cut for a chosen Orchestrator
- Reward call history — has the Orchestrator called reward this round?
- Current Thawing Period duration and liquidity timeline calculator
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
| Inbound | Orchestrators → Delegators | Readers evaluating where to place stake after learning how Orchestrators operate; Orchestrators recruiting delegator stake |
| Outbound | Delegators → Orchestrators | Deeper operator evaluation, supply-side context, performance interpretation |
| Outbound | Delegators → About | Deeper protocol economics, tokenomics history, governance architecture |
| Outbound | Delegators → Community | Governance discourse, proposal discussion, broader ecosystem participation around treasury decisions |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1. Which situation is mine? | "I hold LPT — which of these situations applies to me right now: first time, returning, governance-only, or tokens on L1?" | J1, J3 | `orient` | `navigation` | Holds LPT interest or live stake but has not identified which participation path applies | Has identified their situation and is routed to the correct next section | `discover` |
| S2. What bonding actually means | "What do I keep, what gets locked, and what changes — for my control, liquidity, and governance weight — the moment I bond?" | J2 | `explain` | `concept` | Open to participating but unclear on consequences of bonding | Has accepted or rejected the control, liquidity, and Thawing Period consequences and knows whether to proceed | `evaluate` |
| S3. Getting LPT onto Arbitrum | "My LPT is on Ethereum mainnet — how do I move it to where staking happens?" | J3 | `build` | `instruction` | Holds LPT on L1; cannot bond until it is on Arbitrum | Has initiated and confirmed the bridge transaction; LPT balance is visible on Arbitrum and wallet is ready to bond | `setup` |
| S4. Choosing an Orchestrator | "How do I compare Orchestrators in a way that matches my goals, and what should I actually check?" | J4 | `choose` | `guide` | LPT is on Arbitrum; wants to participate but does not know how to evaluate operator options | Has a shortlist and clear selection criteria — reward call consistency, commission rate, Active Set standing — and is ready to bond | `evaluate` |
| S5. Completing the first bond | "What exact sequence gets me from ready to bonded, and what must be in place before I sign?" | J5, J6 | `start` | `instruction` | Has chosen an Orchestrator; may still be missing wallet or chain readiness | Has bonded LPT; has confirmed the Thawing Period duration and that they cannot withdraw without initiating Unbonding; position is verified live | `setup` |
| S6. How rewards accumulate | "How do my earnings build up each round, and what determines how much I actually receive?" | J2, J10 | `explain` | `concept` | ⚠ `[Design flag: may need to split]` Stake is bonded; wants to understand reward mechanics before seeing numbers | Can produce an approximate yield estimate given their Orchestrator's commission rates and the current inflation rate — has a concrete expectation to compare against actual earnings | `operate` |
| S7. Claiming earnings and tracking yield | "How do I collect what I've earned, and how do I know if my Orchestrator is actually calling reward?" | J7 | `operate` | `guide` | Has bonded stake accumulating rewards; has not yet claimed earnings | Has claimed earnings at least once; knows how to check reward call history for their Orchestrator and recognise a missed round | `operate` |
| S8. Managing your stake | "How do I move to a different Orchestrator, add more stake, or exit entirely — and what does each path cost me in time?" | J8 | `operate` | `guide` | Has a live bonded position and a reason to change it | Has completed the desired stake action — Rebond confirmed, top-up bonded, or Unbonding initiated — and knows the Thawing Period timeline if exiting | `optimise` |
| S9. Governance participation | "What is my voting weight, how do I vote on a proposal, and can I vote independently of my Orchestrator?" | J9 | `operate` | `guide` | Has bonded stake; has not yet voted or understood Vote Detachment. Routing callout for governance-only readers not yet bonded: they can follow proposals but need bonded stake to vote | Has voted on an open proposal or confirmed they know how to do so when one opens; knows their vote overrides their Orchestrator's position on their stake if they choose | `operate` |
| S10. Treasury and protocol funding | "What is the treasury, where does it come from, and how are funds allocated?" | J9 | `explain` | `concept` | Participates in governance; wants to understand treasury mechanics | Can describe how the Treasury Reward Cut Rate feeds the treasury each round, what SPEs are and how they are funded, and how to follow or contribute to active treasury proposals | `operate` |

**Section count**: 10 sections — within the 8–12 target range.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| First Bond Seeker (LPT on Arbitrum) | S1 — routed past bridging to S2 | S5 or S7 (first bond completed; optional: claim earnings) | None — S1 routes correctly; S3 is skippable | None — S2 → S4 → S5 sequence covers all required knowledge before the bond action | None |
| First Bond Seeker (LPT on L1) | S1 → S3 (bridge) → S2 → S4 → S5 | S5 or S7 | None — S3 resolves the hard-stop before S5 requires Arbitrum LPT | None | None |
| Reallocator / Active Stakeholder | S7 (check yield) or S8 (manage stake) or S9 (governance) depending on trigger | S8 or S9–S10 | None — tab accommodates return-visit behaviour across S7–S10 | None — entering knowledge is sufficient for S7–S10 | None |
| L1 Stranded | S1 → S3 | S5 (bonded and confirmed) | S3 resolves hard-stop before S5 — correctly ordered | None | None |
| Treasury-and-Vote / Governance Entrant | S9 (voting) or S10 (treasury) | S10 | None — governance sections are self-contained; routing callout within S9 handles unbonded readers | S9 notes bonded stake prerequisite for voting power; routing callout addresses readers who want to follow proposals without bonding | None — proposal submission path noted in Collation Notes (see Excluded Sections) |
| Token Participation Evaluator | S1 | S2 (decides to defer or proceed) | None | None | None |

---

## ⏸ Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run? — Yes: Active Set size, Thawing Period duration, Treasury Reward Cut Rate, Proposer Bond value all carry `[verify-live]` flags
- [x] Arriving question specific — not a topic? — Yes: "I have LPT — how do I put it to work, and what am I actually committing to?"
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included? — L1 Stranded (1/2 runs) included with justification in Collation Notes; Token Participation Evaluator (1/2 runs) included with justification
- [x] Primary persona confirmed across runs or tie-broken with reasoning? — Yes: unanimous
- [x] Self-identification decision: 3+ run consensus or defaulted to dedicated section? — Both runs independently required a dedicated disambiguation section; decision confirmed, not defaulted
- [x] Entry blockers: union of all runs — none dropped? — Yes: 5 blockers documented
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases? — Yes: J1–J10 covers all categories
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values? — Yes
- [x] Design flags and verify flags: carried through from any run? — Yes: S6 carries design flag from ChatGPT run; all verify-live flags carried
- [x] All personas unblocked? — Yes: path validation table confirms no structural blocks
