# Livepeer Protocol Economics

The Livepeer protocol employs a unique blend of staking-based incentives, dynamic inflation control, fee-based payments, and economic slashing penalties to maintain decentralization, cost efficiency, and high protocol liveness. This page provides a deep dive into how Livepeer’s economic model works at the protocol level, who it incentivizes, and how parameters respond over time.

---

## Key Roles in Protocol Economics

Livepeer aligns incentives between three main on-chain actors:

| Actor         | Incentive Mechanism                                 | Revenue Source             |
|---------------|-------------------------------------------------------|-----------------------------|
| Orchestrators | Earn LPT inflation, ETH fees, delegator cuts         | Probabilistic ETH tickets + reward inflation |
| Delegators    | Earn share of orchestrator rewards (ETH + LPT)       | Reward share               |
| Broadcasters  | Pay in ETH to access decentralized video compute     | Usage-dependent (AI, video) |

---

## Inflation Mechanics

Inflation serves two purposes:
- Secure the protocol by incentivizing bonding
- Fund the protocol treasury

Inflation is **dynamically adjusted** each round based on bonding rate:

### Formula Variables:
- `S(t)` = Circulating LPT supply
- `B(t)` = Total bonded LPT
- `β*` = Target bonding rate (default: 50%)
- `r(t)` = Current round inflation rate
- `Δ` = Adjustment step per round (e.g. 0.05%)
- `r_min`, `r_max` = Global inflation bounds

### Update Rule:
```text
if B(t)/S(t) < β*:
   r(t+1) = min(r(t) + Δ, r_max)
else:
   r(t+1) = max(r(t) - Δ, r_min)
```

This mechanism forms a **negative feedback loop**: lower bonding rate → higher inflation → stronger incentive to bond.

### Minting Per Round:
```text
M(t) = r(t) * S(t)
```

Where `M(t)` is split into:
- **75% to orchestrators/delegators**
- **25% to treasury**

---

## Bonding Yields

Delegators can calculate expected yields using:

```text
AnnualYield ≈ (InflationRate * (1 - RewardCut)) * (1 / BondingRate)
```

> Example: If 60% of LPT is bonded, inflation is 5%, and an orchestrator takes 10% reward cut, yield = ~7.5%

Yield variance depends on active orchestrator reward cuts, bonding participation, and staking choices.

---

## Fee Economics (ETH Layer)

Video work (transcoding, AI inference) is paid in ETH using a **probabilistic micropayment system**.

### Ticket Mechanics:
- Broadcasters lock ETH via the `TicketBroker` contract
- They stream micropayment tickets to orchestrators
- Each ticket has a small win probability `p`
- Orchestrators redeem winning tickets for payout `V`

### Fee Calculation:
```text
ExpectedFee = p * V * TicketsPerSegment
```

> Reduces on-chain gas cost per payment. Real ETH flow happens only on ticket win.

Orchestrators earn ETH fees *on top of* LPT rewards.

---

## Slashing Incentives

If orchestrators behave dishonestly:
- They lose a portion of their bonded LPT ("slashing")
- Delegators lose the same proportion
- 50% of slashed stake burned; 50% to treasury

Slashing keeps orchestrators aligned with the protocol and incentivizes honest validation.

---

## Long-Term Equilibrium Model

Livepeer’s economy targets a stable bonding rate and sustainable inflation.

### System Dynamics (simplified):
```mermaid
graph LR
  A[Low Bonding Rate] --> B[Increase Inflation Rate]
  B --> C[More Yield Incentive]
  C --> D[More Delegation]
  D --> E[Bonding Rate Rises]
  E --> F[Inflation Falls]
  F --> G[Yield Normalizes]
```

---

## Explorer Metrics (Insert Live)

| Metric             | Placeholder Value          |
|--------------------|----------------------------|
| Total Supply (LPT) | `INSERT_SUPPLY_HERE`       |
| Bonded Supply      | `INSERT_BONDED_HERE`       |
| Bonding Rate       | `INSERT_RATE_HERE`         |
| Inflation Rate     | `INSERT_INFLATION_HERE`    |
| Avg Reward Yield   | `INSERT_YIELD_HERE`        |

Source: [explorer.livepeer.org](https://explorer.livepeer.org)

---

## Simulating Bonding Behavior

Advanced modeling uses agent-based simulations:
- Simulate 1000+ delegators
- Vary reward cuts, ticket wins, unbonding events
- Estimate yield sensitivity to LIP changes

See: [Livepeer Simulations GitHub](https://github.com/livepeer/simulation)

---

## Contract & Code References

| Contract             | Purpose                              | GitHub Source |
|----------------------|---------------------------------------|---------------|
| `Minter`             | Sets inflation, mint targets          | [Minter.sol](https://github.com/livepeer/protocol/blob/master/contracts/token/Minter.sol) |
| `BondingManager`     | Bonding logic, reward calculations    | [BondingManager.sol](https://github.com/livepeer/protocol/blob/master/contracts/bonding/BondingManager.sol) |
| `TicketBroker`       | Handles ETH payments and deposits     | [TicketBroker.sol](https://github.com/livepeer/protocol/blob/master/contracts/job/manager/TicketBroker.sol) |
| `RoundsManager`      | Epoch/round progression               | [RoundsManager.sol](https://github.com/livepeer/protocol/blob/master/contracts/rounds/RoundsManager.sol) |

---

## Summary: Economic Sustainability

The Livepeer protocol's economics incentivize:
- **Capital allocation** toward honest infrastructure
- **Efficient ETH pricing** for AI/video compute
- **Adaptive inflation** to meet staking needs
- **Defensive design** against malicious actors

As new workloads (AI, inference) are integrated, the economic structure will adapt to:
- Dynamic job pricing
- Compute credit markets
- Inter-protocol fee routing (e.g., via L2 channels)

---

Next: `technical-architecture.mdx`

