---
title: Delegation Overview
description: Protocol-level overview of LPT delegation, including stake attribution, reward flows, and security implications.
---

# Delegation Overview

## Executive Summary

Delegation is the protocol mechanism by which an LPT holder bonds stake and attributes it to an orchestrator, increasing that orchestrator’s economic weight without the delegator operating infrastructure.

Delegation is strictly a **protocol-layer (on-chain)** action. It does not execute jobs, route segments, or control GPU scheduling. Instead, it modifies stake-weighted outcomes: reward allocation, governance weight, and (where applicable) work allocation.

---

## 1. Formal Definition

Let:

- \(D\) be a delegator
- \(O\) be an orchestrator
- \(b_{D,O}\) be LPT bonded by \(D\) toward \(O\)
- \(B_{self,O}\) be orchestrator self-bonded stake

Total stake attributed to orchestrator \(O\):

\[
B_O = B_{self,O} + \sum_D b_{D,O}
\]

Total bonded stake:

\[
B_T = \sum_O B_O
\]

Delegation is an attribution rule over bonded stake recorded in protocol contract state.

---

## 2. Architectural Context

### 2.1 Protocol Layer Responsibilities

Delegation is implemented by protocol smart contracts that:

- Track bonded stake per address
- Attribute delegator stake to a delegate (orchestrator)
- Allocate inflation and fee entitlements proportionally
- Enforce unbonding delays

Canonical contract addresses and networks are published in the registry:

- https://docs.livepeer.org/references/contract-addresses

### 2.2 Network Layer Responsibilities

The network layer:

- Runs orchestrator software
- Executes transcoding/AI workloads
- Produces fees under market demand
- Maintains uptime and performance characteristics

Delegation influences which operators have greater economic weight, but network execution remains off-chain.

---

## 3. Economic Weight and Security

Delegation increases \(B_O\), increasing the orchestrator’s stake-weighted share.

Define orchestrator weight:

\[
W_O = \frac{B_O}{B_T}
\]

Security implication:

- Increasing \(B_T\) increases the capital cost required to capture stake-weighted outcomes.

Thus:

\[
\text{Security} \propto B_T
\]

---

## 4. Reward Allocation (Issuance)

Per round \(t\), protocol issuance is minted:

\[
R_t = S_t \cdot r_t
\]

Orchestrator gross issuance allocation:

\[
R_O = R_t \cdot \frac{B_O}{B_T}
\]

Delegator net issuance allocation with commission \(c_O\):

\[
R_{D,O} = R_O (1 - c_O) \cdot \frac{b_{D,O}}{B_O}
\]

This formula separates:

- protocol issuance (supply expansion)
- orchestrator commission
- proportional delegator share

---

## 5. Fee Revenue (Demand)

Fees are demand-driven and may accrue to stakeholders according to protocol accounting rules.

Total delegator return decomposes into:

\[
Reward_{D,O} = Issuance_{D,O} + Fees_{D,O}
\]

Issuance is protocol-determined; fees depend on network usage.

---

## 6. Delegation as Capital Allocation

Delegation creates an operator market. Delegators allocate stake based on:

- commission levels
- checkpoint reliability
- performance reputation
- decentralization preferences

Because stake can migrate (subject to unbonding constraints), delegation functions as ongoing capital allocation rather than a one-time decision.

---

## 7. Liquidity Constraints and Unbonding

Delegation is not instantly reversible.

Unbonding introduces a delay measured in protocol rounds. This delay:

- reduces rapid stake rotation attacks
- stabilizes security participation
- introduces liquidity constraints for delegators

State model:

```mermaid
stateDiagram-v2
    [*] --> Bonded
    Bonded --> Unbonding
    Unbonding --> Withdrawable
    Withdrawable --> [*]
```

---

## 8. Risks and Failure Modes

Delegators face protocol- and operator-level risks:

1. **Commission risk:** \(c_O\) reduces net share.
2. **Checkpoint risk:** missed checkpointing reduces realized issuance.
3. **Slashing exposure:** where enabled, stake may be reduced under defined conditions.
4. **Concentration risk:** large \(B_O\) increases systemic exposure.
5. **Liquidity risk:** unbonding delay restricts exit.

These are economic risks inherent to a capital-weighted protocol.

---

## 9. Sequence Diagram

```mermaid
sequenceDiagram
    participant D as Delegator
    participant BM as BondingManager
    participant O as Orchestrator

    D->>BM: bond(amount, O)
    BM-->>BM: attribute stake to O
    O->>BM: checkpoint / reward
    BM-->>D: update reward accounting
```

---

## 10. Protocol vs Network Separation

Protocol (On-Chain):

- Stake attribution
- Issuance formulas and minting
- Reward entitlement accounting
- Governance weight attribution

Network (Off-Chain):

- execution of transcoding/AI jobs
- uptime and performance
- fee generation

Delegation is a protocol action that economically constrains network behavior.

---

## References

- Livepeer protocol repository: https://github.com/livepeer/protocol
- Contract registry: https://docs.livepeer.org/references/contract-addresses

---

**Status:** Publication-ready delegation overview aligned with the 2026 authoring standard.

