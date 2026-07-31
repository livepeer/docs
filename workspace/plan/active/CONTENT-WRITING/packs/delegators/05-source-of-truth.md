# 05 — Source of truth (Delegators tab)

Every factual claim available to Pass A. Sourced from `v1-content.md`, `v2-content.md`, the canonical audience design, the live `v2/delegators/` pages (rebuild verified 2026-04-06), and `protocol-parameters.mdx` (verified 2026-04-06).

If a claim is not in this file or carries a `verify-live` flag, do not write it. Flag as `OPEN QUESTION`.

---

## 1. LPT — what it is

- **Name and chain.** Livepeer Token (LPT). Native ERC-20. Lives at the protocol layer on Arbitrum One. Source: `v2/delegators/concepts/overview.mdx`, audience design terminology lock.
- **Genesis supply.** 25.8 million LPT at protocol launch. Source: `v2-content.md` line 229.
- **Supply growth.** Expands via dynamic inflation. Each round, new LPT is minted and routed to bonded stake (after the treasury cut). Source: `v2-content.md` line 229–231.
- **Five functional domains.** Staking security, inflation-based reward distribution, delegated capital allocation, governance voting, treasury stewardship. Source: `v2/delegators/concepts/overview.mdx`.
- **What LPT is not.** Not a payment token (ETH pays for video and AI work). Not equity in any company. Source: `v2/delegators/concepts/overview.mdx`.

---

## 2. Verifiable on-chain values

All values verified on `v2/delegators/resources/reference/protocol-parameters.mdx` on 2026-04-06.

| Parameter | Current value | On-chain source | Notes |
|---|---|---|---|
| Unbonding period | 7 rounds | `BondingManager.unbondingPeriod()` | Currently equates to ~7 days at ~21h round time |
| Treasury reward cut | 10% | `BondingManager.treasuryRewardCutRate()`, LIP-92 | Routes 10% of round issuance to the treasury |
| Target bonding rate | 50% | `Minter.targetBondingRate()` | Inflation model adjusts around this |
| Inflation adjustment step | step value 500 | `Minter.inflationChange()` | Controls speed of inflation change |
| Current inflation rate | variable, changes per round | `Minter.inflation()` | DO NOT hard-code; cite live source |
| Round length | ~21 hours | derived from Arbitrum block timing | Governance-controlled in principle |
| Proposal threshold | 100 LPT bonded | `LivepeerGovernor.proposalThreshold()` | Verify before quoting |
| Quorum | 33.33% of voting power | `LivepeerGovernor.quorumNumerator()` / `quorumDenominator()` | |
| Voting delay | 1 round | `LivepeerGovernor.votingDelay()` | |
| Voting period | 10 rounds | `LivepeerGovernor.votingPeriod()` | |
| Timelock minimum delay | 0 | `Treasury.getMinDelay()` | Verify before quoting |
| Active set size | publicly described as 100 | `numActiveTranscoders()` | RE-CHECK before quoting in operational content; reader-facing guidance: "currently around 100" |

**Rule:** when a delegator-facing page quotes any of these numbers, link to or cite `resources/reference/protocol-parameters` and reference the on-chain method. Never embed a static number without a source.

---

## 3. Contracts — Arbitrum One (delegator-relevant)

All addresses sourced from the repo's contract-address dataset (`/snippets/data/contract-addresses/contractAddressesData.jsx`) and rendered live on `v2/delegators/resources/reference/contracts.mdx`. Do not embed addresses inline in body prose — link to the contracts page.

| Contract | Why it matters to a delegator |
|---|---|
| BondingManager | Bond, unbond, rebond, claim earnings, stake accounting |
| Minter | Inflation state and reward minting |
| RoundsManager | Round timing and progression |
| BondingVotes | Governance voting power snapshots |
| LivepeerGovernor | Proposal creation and voting |
| L2LPTGateway | Bridge-side LPT gateway on Arbitrum |
| LivepeerToken (Arbitrum) | The Arbitrum-side LPT ERC-20 |

## 3a. Contracts — Ethereum mainnet

| Contract | Why it matters |
|---|---|
| L1Escrow | Holds LPT during bridging from Arbitrum back to L1 |
| LivepeerToken (Mainnet) | The L1 LPT ERC-20; bridging starts here |

**The L1 LPT contract address `0x58b6a8a3302369daec383334672404ee733ab239`** is referenced in v1 content (`v1/delegators/guides/bridge-lpt-to-arbitrum.mdx`). For the canonical address, render from the contracts dataset.

---

## 4. Delegation — what happens on-chain

- **Bonding is non-custodial.** LPT moves into the BondingManager contract on Arbitrum One. The orchestrator cannot move or withdraw it. Source: `v2-content.md` line 249, `v2/delegators/concepts/mechanics.mdx`.
- **Two transactions on first bond.** First, a token approval (allow BondingManager to spend the LPT). Second, the bond transaction itself. Both are signed in the connected wallet. Source: live `v2/delegators/delegation/delegate-your-lpt.mdx` and v1 `delegation-guide`.
- **Reward accrual.** Each round, BondingManager calls `reward()` for every active orchestrator. New LPT is minted proportional to the orchestrator's total bonded stake (self-stake + delegated stake). Orchestrator splits per its `rewardCut`. Delegator share is recorded but not transferred. Source: `v2-content.md` line 247.
- **Claiming.** Delegators call `claimEarnings()` (via the Explorer UI) to collect accumulated LPT and ETH to the wallet. Source: `v2-content.md` line 247.
- **Unbonding.** Initiating unbonding starts the thawing period. Currently 7 rounds (`BondingManager.unbondingPeriod()`). After thaw, principal and unclaimed rewards are withdrawable. Source: protocol-parameters page, `v2-content.md` line 249.
- **Rebonding.** Moves bonded stake from one orchestrator to another without going through the full thawing cycle. Stake stays bonded. Source: audience design terminology lock.

---

## 5. Delegation economics — formulas and named dependencies

**LPT inflation reward (per round, per delegator):**

`R_delegator = I_round × (B_O / B_T) × (1 - c_O) × (b_D / B_O)`

Where:
- `I_round` = round issuance available to orchestrator + delegator pool, after treasury cut
- `B_O` = total bonded stake on the chosen orchestrator (self + delegated)
- `B_T` = total bonded stake across the network
- `c_O` = orchestrator's `rewardCut` (0 to 1)
- `b_D` = delegator's bonded stake

Source: `v2/delegators/delegation/delegation-economics.mdx` (live).

**ETH fee revenue (per delegator):**

`F_delegator = F_O × f_O × (b_D / B_O)`

Where:
- `F_O` = total ETH fees the orchestrator earned from gateway work
- `f_O` = orchestrator's `feeShare` (0 to 1)

**Worked example (use exactly):**

- 900 LPT round issuance available to delegator/orchestrator pool after treasury cut
- Orchestrator controls 5% of total bonded stake → its round pool is 45 LPT
- Orchestrator `rewardCut` is 10% → delegators share 40.5 LPT
- Delegator holds 10% of the orchestrator's bonded stake
- → Delegator round reward: 4.05 LPT

Source: `v2/delegators/delegation/delegation-economics.mdx` (live).

**Dependency list (every earnings claim must name at least the relevant subset):**

1. Orchestrator's `rewardCut` (can change at any time)
2. Orchestrator's `feeShare` (can change at any time)
3. Orchestrator's reward-call consistency over the last 30/90 rounds
4. Whether the orchestrator is in the active set in the current round
5. Total bonded stake of the orchestrator
6. Total bonded stake across the network
7. Current inflation rate (governance-controlled, varies)
8. Treasury cut (currently 10%)
9. ETH fee volume the orchestrator actually earns from gateway work

---

## 6. Inflation mechanics

- **Adaptive feedback.** If less than ~50% of LPT is bonded, the inflation rate increases each round. If more than ~50% is bonded, the rate decreases. Target bonding rate is 50%. Source: `v2-content.md` lines 231–235, `v2/delegators/concepts/tokenomics.mdx`.
- **Adjustment formula (qualitative).** `inflation := inflation ± inflationChange` per round, where the sign depends on whether the bonded ratio is above or below the target. Source: `v2-content.md` line 233.
- **Historical context.** Early inflation exceeded 13% per year; community votes reduced baseline issuance to roughly 6–8% and directed a portion to the treasury. Source: `v2-content.md` line 231. Cite as historical context, not as the current rate.
- **Dilution.** Unbonded LPT holders are diluted every round — new LPT flows to bonded participants, reducing unbonded holders' proportional share of supply. Source: `v2-content.md` line 780, audience design.

---

## 7. Treasury

- **Funding.** 10% of each round's issuance routes to the treasury under LIP-92. Verify live via `BondingManager.treasuryRewardCutRate()`. Source: `v2/delegators/delegation/delegation-economics.mdx`, protocol-parameters page.
- **Spending.** Governance-approved only. The treasury is on-chain. Not a company budget. Source: `v2-content.md` line 239.
- **Stewardship.** Livepeer Foundation operates as steward; allocations still gated by governance vote. Source: `v2-content.md` line 239.
- **SPEs (Special-Purpose Entities).** Funded by approved allocations, with milestone reporting back to governance. Source: `v2-content.md` line 239.
- **Live state.** Balances at `https://explorer.livepeer.org/treasury`. Active proposals at `https://explorer.livepeer.org/voting`.
- **Fee switch.** As of 02-March-2026 (per `v2-content.md` line 253): no fee switch enacted. Discussions have explored routing a portion of fees to the treasury or burning fees. Cite as ongoing discussion, not as a current parameter.

---

## 8. Governance

- **Scope.** Protocol parameters (inflation, target bonding rate, treasury cut), contract upgrades, treasury allocations, role-controlled actions. Source: `v2/delegators/guides/governance/overview.mdx`.
- **Voting power.** Stake-weighted. Vote weight = bonded stake at the proposal's snapshot block. Source: audience design.
- **Quorum.** 33.33% of voting power. Source: `LivepeerGovernor.quorumNumerator()/quorumDenominator()`, protocol-parameters page.
- **Approval threshold.** Simple majority (>50%) of votes cast. Source: `v2-content.md` line 528 region (governance/model).
- **Voting delay.** 1 round. Source: `LivepeerGovernor.votingDelay()`.
- **Voting period.** 10 rounds. Source: `LivepeerGovernor.votingPeriod()`.
- **Timelock minimum delay.** 0 (verify before quoting). Source: `Treasury.getMinDelay()`.
- **Proposal threshold.** 100 LPT bonded. Source: `LivepeerGovernor.proposalThreshold()` (verify before quoting).
- **Vote detachment.** A delegator votes through the Explorer with their own bonded stake — this overrides any vote their orchestrator cast on that portion. Livepeer-specific term, must be defined on first use. Source: audience design terminology lock.
- **Hybrid model.** Off-chain LIP discussion + Snapshot signal + on-chain binding vote via `LivepeerGovernor`. Source: `v2-content.md` governance/processes section.
- **Voting interface.** Livepeer Explorer voting view at `https://explorer.livepeer.org/voting`. No CLI required.

---

## 9. Bridging — L1 to L2

- **Where staking happens.** Arbitrum One only. LPT on Ethereum mainnet must be bridged before bonding. Source: `v2-content.md` lines 662, 873, 905.
- **Two routes.**
  - Arbitrum Bridge UI at `https://bridge.arbitrum.io` for any LPT.
  - Livepeer Migration Tool at `https://explorer.livepeer.org/migrate` for LPT previously bonded on L1 (legacy migration tool).
  - Source: `v2-content.md` line 662, v1 `migrate-stake-to-arbitrum.mdx`.
- **Gas requirements.** ETH on L1 for the deposit transaction. ETH on Arbitrum for any subsequent action. A few cents per Arbitrum transaction at typical gas prices. Source: v1 `bridge-lpt-to-arbitrum.mdx`, `v2-content.md` line 796.
- **Timing.**
  - Deposit (L1 → Arbitrum): typically completes within ~10 minutes after the L1 transaction confirms.
  - Withdrawal (Arbitrum → L1): subject to the Arbitrum challenge period — currently ~7 days.
  - Source: v1 `bridge-lpt-to-arbitrum.mdx`.
- **Verification.** After bridging, switch the wallet to Arbitrum One and check the LPT balance. The Livepeer Explorer also reflects the L2 balance once the wallet is connected. Source: v1 guide, audience design.

---

## 10. Tools the delegator uses

- **Livepeer Explorer** — `https://explorer.livepeer.org`. Primary read interface and primary action interface. Bond, unbond, rebond, claim, vote. Source: audience design.
- **Connected browser wallet** — MetaMask, Rabby, Coinbase Wallet, etc. Used to sign every transaction.
- **Arbitrum Bridge UI** — `https://bridge.arbitrum.io`. Used only for bridging LPT.
- **Arbiscan** — for verifying contract state, transactions, and parameter values. Used for due diligence; not required for any action.
- **Livepeer governance forum** — used for off-chain proposal discussion.
- **LIPs GitHub repo** — `https://github.com/livepeer/LIPs`. Used to read the canonical proposal text.

**Tools the delegator does NOT use:**

- No CLI.
- No `go-livepeer` binary.
- No Docker.
- No SDK.
- No raw `cast` / `forge` / `ethers.js` calls in body prose.

---

## 11. Voice-rule reminders pinned here

- Every protocol term defined on first use, then naked.
- Every earnings claim names the dependency in the same sentence or paragraph.
- Every numeric value cites its on-chain source or carries a `verify-live` flag.
- No CLI in body prose. Contract addresses and copyable on-chain values are acceptable on bridging and contract-reference pages only.
- UK English throughout.
- No em-dashes.

---

## 12. Open / flagged values

| Claim | Status | Action |
|---|---|---|
| Active set size = 100 | Publicly described in product surfaces; verify `numActiveTranscoders()` on-chain before operational use | Cite as "around 100"; link to protocol-parameters page |
| Proposer bond = 100 LPT | Cited in research pack; verify `LivepeerGovernor.proposalThreshold()` | Verify before quoting in any user-facing content |
| Timelock = 0 | Per `Treasury.getMinDelay()` at last verification | Verify if quoted on a governance page |
| Round length = 21 hours | Approximate; derived from Arbitrum block timing | Cite as "approximately 21 hours" |
| Inflation = 6–8% | Historical only; current rate is variable | Never quote as the current rate |

If you need a value not in this file, do not invent. Write `OPEN QUESTION: [exact claim] — verify with [named source]`.
