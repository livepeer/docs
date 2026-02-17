# Livepeer Token (LPT)

The Livepeer Token (LPT) is the staking and coordination token of the Livepeer protocol. LPT underpins protocol security, work selection, reward distribution, and decentralized governance. This page details the technical attributes, token supply dynamics, inflation model, and contract integrations that define LPT’s role.

LPT is not used for payments for video compute (e.g. transcoding, AI inference); those are paid in ETH or other currencies via separate payment channels. Instead, LPT exists strictly to govern, secure, and incentivize participation in the protocol.

---

## Token Purpose

| Use Case                | LPT Functionality                                               |
|--------------------------|------------------------------------------------------------------|
| Protocol Security        | Bonded stake determines active orchestrators                    |
| Inflation Rewards        | Only bonded LPT receives newly minted token share               |
| Governance               | Voting rights restricted to bonded LPT holders                 |
| Slashing Guarantee       | Orchestrators risk LPT loss for malicious behavior              |
| Delegation Incentives    | Delegators earn yield by bonding LPT to honest orchestrators    |

---

## Supply Overview

LPT was launched with a genesis supply of **10 million tokens** in 2018. There is no maximum cap. Instead, the protocol mints LPT dynamically per round based on the bonding rate.

> 📊 Placeholder: Insert current supply stats from [Livepeer Explorer](https://explorer.livepeer.org)

### Distribution
Initial allocations (2018):

- 63.44% to community via MerkleMine
- 19.00% to team & founders
- 12.35% to early backers
- 5.21% to protocol treasury

As of 2026, inflationary supply exceeds original issuance due to multiple years of bonding-driven minting.

---

## Dynamic Inflation Model

Livepeer’s inflation is dynamic—designed to calibrate toward a target bonding rate (β*) and secure the protocol with sufficient staked LPT.

### Key Variables:
- `S(t)` = total circulating supply of LPT
- `B(t)` = total bonded supply
- `β*` = target bonding rate (e.g. 50%)
- `r(t)` = current inflation rate
- `Δ` = step rate (e.g. 0.05%)
- `r_min`, `r_max` = protocol-set bounds (e.g. 0.5% to 7%)

### Inflation Update Rule:
```text
If B(t)/S(t) < β*:
  r(t+1) = min(r(t) + Δ, r_max)
Else:
  r(t+1) = max(r(t) - Δ, r_min)
```

### Minting Function:
```text
M(t) = r(t) * S(t)
```

### Distribution:
- **Orchestrators**: pro-rata by bonded stake
- **Delegators**: share of orchestrator rewards, split by `rewardCut`
- **Treasury**: fixed % (e.g. 25%) of M(t) per round

---

## Bonding & Unbonding

LPT must be actively bonded to participate in inflation and governance.

- **Bonding**: Stake LPT to an orchestrator
- **Unbonding**: Initiate 7-day period before withdrawal
- **Rebonding**: Move bonded stake to another orchestrator instantly

Each bonded LPT contributes to orchestrator selection weight and inflation share.

---

## Governance Power

Only bonded LPT grants voting rights on Livepeer protocol proposals (LIPs).

### Governance Tools:
- **Forum:** [forum.livepeer.org](https://forum.livepeer.org)
- **Snapshot Voting:** Used for off-chain signaling
- **Governor Contract:** Executes on-chain proposals post-vote

Voting power is proportional to bonded stake at snapshot block. Voters can delegate voting power to others via bonded LPT.

---

## Slashing & Penalties

Bonded LPT is subject to slashing if an orchestrator is caught:
- Submitting invalid transcoding results
- Cheating on ticket redemption (fraudulent claims)
- Being challenged and failing on-chain verification

Slashed LPT is:
- Partially burned
- Partially redirected to the treasury
- Results in delegator collateral loss

---

## Token Contract Details

- **Contract Name:** `LivepeerToken`
- **Symbol:** LPT
- **Decimals:** 18
- **Current Chain:** Arbitrum One

### Contract Address
> Placeholder: `[INSERT_ARBITRUM_ADDRESS]`

### ABI Reference
> View ABI: [LivepeerToken.sol](https://github.com/livepeer/protocol/blob/master/contracts/token/LivepeerToken.sol)

Key methods:
- `transfer()`
- `approve()` / `allowance()`
- `mint()` (permissioned by Minter)
- `burn()`

---

## Contract Interactions

| Contract        | Role in Token Logic                                     |
|----------------|----------------------------------------------------------|
| `Minter`       | Authorized minter, sets per-round emission               |
| `BondingManager` | Bonds/unbonds user LPT, tracks delegations             |
| `RoundsManager`  | Tracks epoch windows for mint eligibility              |
| `Governor`     | Uses bonded LPT snapshot for vote weighting              |

---

## Explorer Metrics (Placeholders)

| Metric               | Current Value (Est. Placeholder)     |
|----------------------|--------------------------------------|
| Circulating Supply   | `INSERT_VALUE`                       |
| Total Bonded         | `INSERT_VALUE`                       |
| Bonding Rate         | `INSERT_VALUE`                       |
| Current Inflation    | `INSERT_VALUE`                       |
| Treasury Allocation  | 25% of per-round inflation            |

---

## References

- [LPT on Arbiscan](https://arbiscan.io/token/0xINSERT)
- [Livepeer Explorer](https://explorer.livepeer.org)
- [Livepeer Blog: Token Design](https://blog.livepeer.org/token-inflation-design)
- [Livepeer Contracts GitHub](https://github.com/livepeer/protocol)

---

This concludes the `livepeer-token.mdx` documentation. Ready for `treasury.mdx`?

