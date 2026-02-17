# Staking LPT (Advanced Orchestrator Guide)

## Overview

Staking LPT is the **core security mechanism** that enables an Orchestrator to participate in the Livepeer protocol. It determines:

- Eligibility for activation (video active set requirement)
- Eligibility for AI participation (must also be in active set)
- Share of protocol inflation rewards
- Delegator trust and bonding dynamics
- Economic security guarantees of the network

This document separates **protocol-layer staking mechanics** from **network-layer operational considerations**.

---

# 1. Protocol-Layer Staking Mechanics

## 1.1 Bonding Model

Livepeer uses a delegated proof-of-stake model where:

- LPT holders bond stake to an Orchestrator
- Bonded stake determines reward share
- Stake can be delegated without transferring custody

Bonded stake is recorded in the `BondingManager` contract.

### Key Variables

Let:

- S_i = total bonded stake to orchestrator i
- S_total = total bonded stake across network
- R_round = total inflation minted in round
- R_i = rewards earned by orchestrator i in round

Then:

R_i = (S_i / S_total) × R_round

This reward is split between:

- Orchestrator reward cut
- Delegator share

---

## 1.2 Activation Requirement (Video)

For video transcoding participation:

- Orchestrator must be in the **top N by stake** (historically 100)
- Only active orchestrators receive inflation

This is a protocol rule enforced by the staking contract and round initialization.

Important: This rule applies to **video active set logic**.

---

## 1.3 AI Participation Requirement

AI workloads differ from video in routing and scheduling.

However:

- Orchestrator must still be activated via staking
- AI Gateway routing then evaluates capability, pricing, and availability

Stake ≠ job assignment weight in AI
Stake = security + activation prerequisite

---

# 2. Inflation Formula (Protocol Level)

Livepeer uses dynamic inflation targeting a bonding rate.

Let:

- B = bonded supply
- T = total LPT supply
- b = bonding rate = B / T
- b_target = target bonding rate
- I_current = current inflation rate

If b < b_target:

    I_next = I_current + Δ

If b > b_target:

    I_next = I_current - Δ

Δ is protocol-defined adjustment per round.

New LPT minted per round:

    Mint_round = I_current × T / rounds_per_year

Rewards distributed pro-rata to active orchestrators.

---

# 3. Delegation Mechanics

Delegators:

- Bond LPT to orchestrator
- Share in ETH fees and LPT inflation
- Are subject to orchestrator performance risk

### Reward Split

Let:

- c = orchestrator reward cut (percentage)
- f = orchestrator fee share (percentage)

Delegator inflation share:

    Delegator_reward = R_i × (1 - c)

Delegator ETH share:

    ETH_delegator = ETH_i × (1 - f)

Where ETH_i = total fees earned by orchestrator.

---

# 4. Unbonding and Security

Unbonding period:

- Tokens enter unbonding state
- Withdrawal available after delay (protocol defined)

This prevents instant stake withdrawal in case of misbehavior.

Slashing events reduce bonded stake.

---

# 5. Network-Level Considerations

While staking is protocol-layer, practical effects include:

- Higher stake increases delegator confidence
- Higher stake improves activation likelihood
- Higher stake increases inflation yield share

For AI:

- Routing depends on performance + availability
- Stake influences trust but not direct job weighting

---

# 6. Operational Best Practices (2026)

Advanced orchestrators should:

- Maintain competitive reward cut
- Maintain transparent commission strategy
- Monitor bonding rate vs target
- Track inflation adjustments
- Diversify AI pipeline offerings
- Maintain uptime to preserve delegator trust

---

# 7. Governance Control Over Staking Parameters

Parameters adjustable via governance (LIPs):

- Target bonding rate
- Inflation adjustment rate
- Unbonding period
- Active set size

Changes executed via Governor contract.

---

# 8. Summary

Staking LPT provides:

- Economic security
- Activation eligibility
- Inflation rewards
- Delegator alignment

It does NOT:

- Directly route AI jobs
- Guarantee video workload volume

It is the protocol’s security foundation.

---

# References

- Livepeer Docs – Orchestrators
- Livepeer Docs – AI Participation
- Livepeer Blog – Real-Time Network Vision Update (2025)
- BondingManager contract (GitHub)

