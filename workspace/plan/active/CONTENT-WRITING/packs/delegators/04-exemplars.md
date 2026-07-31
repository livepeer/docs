# 04 — Exemplars (delegator quality bar)

Five passages from the live repo at delegator-quality. Match this bar.

Each entry: the passage, the source, why it works for the delegator audience.

---

## Exemplar 1 — Outcome-first opening with all three streams named in one sentence

**Source**: `v2/delegators/portal.mdx` (live, `lastVerified: 2026-04-06`)

> LPT gives delegators three things at once: a way to secure the protocol, a way to earn a share of inflation and fees, and voting weight in Livepeer governance. This portal is the canonical starting point for those jobs.

**Why it works:**
- Lead sentence states the value in concrete terms. Three things, all named.
- "Inflation and fees" is plainspoken — no `inflationary issuance` or `proportional emission share`.
- The reader knows in 30 words what the tab gives them and what to expect next.
- Zero filler. Zero hedge. Subject-first throughout.

**What to copy:** open every page with the outcome the reader gets, not what the page is about.

---

## Exemplar 2 — Dependency disclosure inside an earnings claim

**Source**: `v2/delegators/delegation/delegation-economics.mdx` (live, `lastVerified: 2026-04-06`)

> Delegating LPT can earn you two things: a share of newly minted LPT and a share of ETH fees earned by your orchestrator. The first is protocol-driven. The second depends on real network demand. Both are filtered through the orchestrator you choose.

**Why it works:**
- States the two reward streams in the lead sentence. No lists, no padding.
- Names the dependency for each: protocol-driven vs network-demand-driven.
- Closes with the single most important fact a delegator must internalise: "filtered through the orchestrator you choose". That is the whole job of orchestrator selection.
- No CLI, no jargon-stack, no condescension.

**What to copy:** every earnings claim names the dependency in the same sentence or paragraph. The reader leaves knowing what changes the number.

---

## Exemplar 3 — Plain-language worked example with named drivers

**Source**: `v2/delegators/delegation/delegation-economics.mdx` (live)

> Suppose:
> - `900 LPT` of round issuance is available to delegators and orchestrators after treasury allocation
> - your orchestrator controls `5%` of total bonded stake, so its pool gets `45 LPT`
> - the orchestrator's `rewardCut` is `10%`, so delegators share `40.5 LPT`
> - you hold `10%` of that pool's total bonded stake
>
> Your round reward would be `4.05 LPT`.

**Why it works:**
- Plain numbers. No formulas required to follow it (formula is also given separately for readers who want it).
- Each line names what its number means and where it comes from.
- The conclusion is one number, with units.
- A finance-aware non-coder can audit the maths. Every step is visible.

**What to copy:** worked examples for any economics claim. Real numbers, named drivers, single-number conclusion.

---

## Exemplar 4 — Verifiable values with on-chain sources

**Source**: `v2/delegators/resources/reference/protocol-parameters.mdx` (live, `lastVerified: 2026-04-06`)

> | Parameter | Current value | Where it comes from | Why it matters |
> |---|---|---|---|
> | Unbonding period | `7` rounds | `BondingManager.unbondingPeriod()` | Full exit is delayed after you unbond |
> | Treasury reward cut | `10%` | `BondingManager.treasuryRewardCutRate()` and LIP-92 | Reduces the round issuance shared by orchestrators and delegators |
> | Target bonding rate | `50%` | `Minter.targetBondingRate()` | The inflation model adjusts around this target |
> | Inflation adjustment step | protocol step value `500` | `Minter.inflationChange()` | Controls how quickly inflation moves toward the target bonding rate |
> | Current inflation rate | variable, changes over time | `Minter.inflation()` | Use live state, not a stale static number |

**Why it works:**
- Every number has a verifiable source — anyone can check the value on Arbiscan.
- "Why it matters" column ties the parameter to a delegator outcome in one line.
- No invented numbers. Where a value changes (`Current inflation rate`), the page says "use live state, not a stale static number" instead of pretending precision.
- Date stamp on the page tells the reader how stale the snapshot is.

**What to copy:** never invent a number. Every numeric claim cites its on-chain source. When a value moves, say so.

---

## Exemplar 5 — Defining vote detachment without condescension

**Source**: pattern in `v2/delegators/guides/governance/overview.mdx` and the canonical audience design (`audience-design.md`, `Vote Detachment` glossary entry)

> Bonded stake is a delegator's voting weight on the LivepeerGovernor contract. The orchestrator can vote with the full weight of their pool by default. **Vote detachment** is the delegator's right to override that — voting through the Livepeer Explorer with their own stake replaces the orchestrator's vote on that portion. A delegator who disagrees with their orchestrator does not need to rebond to vote independently.

**Why it works:**
- Defines the Livepeer-specific term ("vote detachment") on first use, in bold, in context.
- Names the contract (`LivepeerGovernor`) and the interface (`Livepeer Explorer`) — not abstract handwaving.
- Closes with the practical implication for the reader: you do not need to rebond to disagree. That is the value statement.
- Treats the reader as someone who can act on the information.

**What to copy:** define every Livepeer-specific term once in context, with the contract and interface named. Then use the term naked.

---

## What these exemplars share

1. **Lead with the outcome.** Every passage opens with what the reader gets, not what the page is.
2. **Dependencies stated inline.** Earnings claims name the drivers in the same sentence.
3. **Real numbers from on-chain sources.** Nothing invented. Sources are nameable.
4. **Plain language for economics.** No `inflation-adjusted emissions`, no `slippage tolerance`, no `proportional share`.
5. **Define once, use freely.** Protocol terms get one inline definition. After that, they are used naked.
6. **No CLI, no shell, no code instruction.** Contract addresses and method names appear inline; the reader's interface is the Livepeer Explorer.

If your draft does not match this bar across all six points, rewrite.
