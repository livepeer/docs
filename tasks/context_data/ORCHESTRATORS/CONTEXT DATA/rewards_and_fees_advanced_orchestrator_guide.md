# Rewards and Fees

## Overview

This document explains in precise technical detail how orchestrators and delegators earn rewards within the Livepeer network. It distinguishes clearly between:

1. **Protocol-level rewards (LPT inflation)**
2. **Network-level earnings (ETH fees for work performed)**
3. **Commission mechanics (reward cut & fee share)**
4. **Video vs AI job revenue dynamics**

This is 2026-relevant and reflects the L1/L2 split architecture (Ethereum + Arbitrum).

---

# 1. Two Distinct Revenue Streams

Livepeer orchestrators earn from two independent mechanisms:

| Revenue Source | Asset | Layer | Purpose |
|---------------|--------|-------|---------|
| Inflationary Rewards | LPT | Protocol (L1) | Security incentive |
| Job Fees | ETH (or settlement asset) | Network (L2 / off-chain) | Payment for compute |

These must never be conflated.

---

# 2. Protocol-Level Rewards (LPT Inflation)

## 2.1 Purpose

LPT inflation exists to:

- Incentivize bonding
- Maintain target staking ratio
- Secure the protocol

It does NOT pay for compute.

---

## 2.2 Reward Distribution Flow

At each round:

1. Inflation is calculated
2. Newly minted LPT is created
3. Rewards are distributed pro-rata to bonded stake
4. Delegators receive share minus orchestrator reward cut

### Formula

Let:

- `S_total` = total LPT supply
- `r` = inflation rate per round
- `B_i` = bonded stake for orchestrator i
- `B_total` = total bonded LPT

New issuance:

```
ΔS = S_total × r
```

Orchestrator i receives:

```
Reward_i = ΔS × (B_i / B_total)
```

Delegators receive:

```
Delegator_reward = Reward_i × (1 - reward_cut)
```

Orchestrator keeps:

```
Orchestrator_cut = Reward_i × reward_cut
```

---

## 2.3 Dynamic Inflation Adjustment

Inflation is adjusted toward a target bonding rate:

- If bonding rate < target → inflation increases
- If bonding rate > target → inflation decreases

This stabilizes staking participation.

---

# 3. Network-Level Earnings (ETH Fees)

## 3.1 Payment Mechanism

Broadcasters and gateways pay for compute via probabilistic micropayments.

Key components:

- TicketBroker (L2)
- Winning tickets
- ETH settlement

Tickets represent expected value, not guaranteed payout.

---

## 3.2 Fee Share

Delegators also share ETH revenue.

Let:

- `F_total` = total ETH fees earned
- `fee_share` = % shared with delegators

Delegators receive:

```
Delegator_fee = F_total × fee_share
```

Orchestrator retains:

```
Orchestrator_fee = F_total × (1 - fee_share)
```

Reward cut and fee share are independent parameters.

---

# 4. Video vs AI Revenue Dynamics

## 4.1 Video Transcoding

Characteristics:

- Stable pricing
- Segment-based work
- Lower compute variance
- High throughput

Revenue depends on:

- Segment rate
- Price per pixel
- Availability

---

## 4.2 AI Inference

Characteristics:

- GPU-intensive
- Model-dependent cost
- Latency-sensitive
- Variable workload sizes

Revenue depends on:

- Model size
- GPU memory
- Request concurrency
- Gateway routing decisions

AI jobs are NOT selected purely by stake weight.
They are routed based on capability and declared capacity.

---

# 5. Economic Strategy for Orchestrators

## 5.1 Commission Strategy

Orchestrators must balance:

- Competitive reward cut
- Competitive fee share
- Delegator attraction
- Infrastructure cost coverage

Too high → lose delegators
Too low → unsustainable operations

---

## 5.2 Yield Modeling

Expected annualized yield depends on:

- Bonded stake share
- Inflation rate
- Job volume
- Commission parameters
- Operational uptime

This requires continuous monitoring of:

- Network demand
- Bonding ratio
- GPU utilization

---

# 6. Slashing & Risk

Misbehavior may result in:

- Stake slashing
- Loss of rewards
- Reputation damage

Delegators share slashing risk proportionally.

---

# 7. Key Operational Metrics

Orchestrators should monitor:

- Bonded stake %
- Inflation rate
- Active orchestrator count
- ETH fee volume
- Ticket win rate
- GPU utilization
- AI pipeline latency

---

# 8. Practical Example

If:

- Total supply = 30M LPT
- Inflation = 0.0003 per round
- Bonded = 15M LPT
- Orchestrator stake = 150k LPT

Then:

```
ΔS = 30,000,000 × 0.0003 = 9,000 LPT

Share = 150,000 / 15,000,000 = 0.01

Reward = 9,000 × 0.01 = 90 LPT
```

Delegators receive based on reward cut.

---

# 9. Summary

Orchestrator revenue =

```
LPT Inflation Rewards
+
ETH Job Fees
-
Infrastructure Costs
```

Protocol secures network.
Network generates revenue.

They are separate but economically linked.

---

Next page ready upon request.

