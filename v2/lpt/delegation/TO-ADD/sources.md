# Sources: Delegation Section

Research log for the delegation section rewrite.
Pages produced: `overview.mdx`, `delegation-economics.mdx`, `choose-an-orchestrator.mdx`, `manage-your-delegation.mdx`.
Session: March 2026.

<CustomDivider />

## Source files (uploaded by user — treated as structural reference)

| File                       | Status           | Used for                                                                                               |
| -------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| `getting-started.mdx`      | Partially usable | Step structure, Explorer UI labels, risk factors box, commission terminology                           |
| `delegation-guide.mdx`     | Deprecated       | Transaction mechanics (approve, bond, unbond, withdraw) — correct but written for contract integrators |
| `overview.mdx`             | Deprecated       | Reward formula LaTeX — preserved in `delegation-economics.mdx`                                         |
| `about-delegators.mdx`     | Deprecated       | Risk list, rights/constraints section — merged into new pages                                          |
| `delegation-economics.mdx` | Stub only        | Replaced entirely                                                                                      |
| `join-a-pool.mdx`          | UX reference     | Step structure, comparison table pattern, accordion pattern, FAQ pattern                               |

<CustomDivider />

## Accuracy correction applied to source files

**feeShare vs Fee Cut (Critical)**

`getting-started.mdx` stated: _"Explorer/UI 'Fee Cut' corresponds to protocol `feeShare`"_ and _"The percentage of ETH fees the orchestrator keeps."_

This is contradictory. In the Livepeer protocol:

- `rewardCut` = fraction of LPT inflation the orchestrator keeps (lower = more for delegators)
- `feeShare` = fraction of ETH fees distributed to delegators (higher = more for delegators)

The Explorer displays `feeShare` as "Fee Share" not "Fee Cut". The delegation-guide formula `R_{D,O} = R_O (1 - c_O)` uses `c_O` as the rewardCut fraction, which is correct. The fee formula in `getting-started.mdx` uses `(feeShare)` as a direct multiplier on delegator return, which is also correct — meaning feeShare is what goes TO delegators, not what the orchestrator keeps.

The new pages use the technically correct interpretation and include a Warning component to prevent reader confusion.

<CustomDivider />

## Project files used as research sources

| File                                      | Key data used                                                                                                                                                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/mnt/project/staking-rewards-sources.md` | LIP-89 10% treasury diversion (confirmed March 2026), 417 rounds/year figure (flagged REVIEW), Explorer ROI formula location (`explorer/lib/roi.ts`), reward calling gas cost range, Arbitrum bridge URL |
| `/mnt/project/gpu-nodes-ia-planning.md`   | Active set = top 100 by stake (flagged REVIEW), reward call importance framing, delegator persona intelligence                                                                                           |
| `/mnt/project/gateways-ia-planning.md`    | PM ticket mechanics context, probabilistic micropayment architecture                                                                                                                                     |

<CustomDivider />

## GitHub repositories

| Repository             | Used for                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| `livepeer/protocol`    | BondingManager contract reference, bond/unbond/withdraw state machine, unbonding period parameter |
| `livepeer/explorer`    | Explorer UI label reference; ROI formula at `lib/roi.ts`                                          |
| `livepeer/go-livepeer` | Reward calling mechanics, Arbitrum network target                                                 |
| `livepeer/LIPs`        | LIP-89 (10% treasury allocation), LIP-73 (treasury governance)                                    |

<CustomDivider />

## External tools and links

| Resource                        | URL                                          | Used for                                                                |
| ------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| Livepeer Explorer               | https://explorer.livepeer.org                | All delegation UI steps, orchestrator stats, reward history, governance |
| Arbitrum Bridge                 | https://bridge.arbitrum.io                   | LPT bridging reference                                                  |
| Livepeer L2 Migration Tool      | https://explorer.livepeer.org/migrate        | Legacy mainnet LPT migration                                            |
| Arbiscan                        | https://arbiscan.io                          | On-chain verification of delegation state                               |
| Livepeer Discord #orchestrators | https://discord.gg/livepeer                  | Community intelligence on orchestrator behaviour, commission changes    |
| Livepeer Forum orchestrators    | https://forum.livepeer.org/c/orchestrators/8 | Community intelligence source                                           |

<CustomDivider />

## Video placeholder

The `choose-an-orchestrator.mdx` page includes a video embed placeholder for a screen recording of the delegation flow in the Explorer. The placeholder embed ID `PLACEHOLDER_ID` must be replaced with a real YouTube video ID before publishing.

Recommended content for this video:

1. Connect wallet to Explorer
2. Navigate to orchestrators list
3. Filter/sort by active status
4. Open an orchestrator profile and read reward call history
5. Click Delegate, enter amount
6. Sign Approve transaction
7. Sign Bond transaction
8. Navigate to account page to confirm delegation

<CustomDivider />

## Verified facts

| Claim                                                     | Source                                            | Status                                   |
| --------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| LPT staking is on Arbitrum One                            | Multiple sources                                  | Confirmed                                |
| 10% of round issuance to treasury                         | LIP-89, `staking-rewards-sources.md` (March 2026) | Confirmed                                |
| LPT contract is ERC-20 compatible                         | Protocol repo                                     | Confirmed                                |
| Delegation is non-custodial (BondingManager holds tokens) | Protocol architecture                             | Confirmed                                |
| Only one orchestrator per address at a time               | Protocol constraint                               | Confirmed                                |
| Redelegation does not require unbonding                   | Protocol mechanics                                | Confirmed                                |
| Partial unbonding is supported                            | Protocol mechanics                                | Confirmed                                |
| Active set = top 100 by bonded stake                      | `gpu-nodes-ia-planning.md`                        | Confirmed — REVIEW before publish        |
| `rewardCut = % orchestrator keeps of LPT inflation`         | Protocol definition                               | Confirmed                                |
| `feeShare = % of ETH fees distributed to delegators`        | Protocol definition                               | Confirmed (corrects getting-started.mdx) |

<CustomDivider />

## Items requiring SME review before publishing

| Claim                                                      | Location                                                   | Who to ask                                                         |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| Unbonding period duration (21 hours vs 7 days vs 7 rounds) | `choose-an-orchestrator.mdx`, `manage-your-delegation.mdx` | Mehrdad / Rick — verify `unbondingPeriod` in BondingManager        |
| Active set size = 100                                      | `choose-an-orchestrator.mdx`                               | Mehrdad — verify `numActiveTranscoders` protocol parameter         |
| 417 rounds per year                                        | `delegation-economics.mdx`                                 | Rick — verify against current Arbitrum One block timing            |
| Explorer "Fee Share" vs "Fee Cut" label                    | `delegation-economics.mdx`, `choose-an-orchestrator.mdx`   | Rick / Joseph — confirm current Explorer UI label                  |
| YouTube video embed ID                                     | `choose-an-orchestrator.mdx`                               | Livepeer Foundation marketing / Joseph — provide screen recording  |
| `claimEarnings` automated bots (orchestrator-run)          | `manage-your-delegation.mdx`                               | Community / orchestrator SPEs — confirm this practice still exists |

<CustomDivider />

## Pages deprecated by this rewrite

The following uploaded files should be retired from the delegation section in favour of the four new pages:

| Deprecated file                   | Content merged into                                        |
| --------------------------------- | ---------------------------------------------------------- |
| `overview.mdx`                    | `overview.mdx` (rewritten), `delegation-economics.mdx`     |
| `about-delegators.mdx`            | `overview.mdx`, `delegation-economics.mdx`                 |
| `delegation-guide.mdx`            | `choose-an-orchestrator.mdx`, `manage-your-delegation.mdx` |
| `getting-started.mdx`             | `choose-an-orchestrator.mdx`                               |
| `delegation-economics.mdx` (stub) | `delegation-economics.mdx` (rewritten)                     |
