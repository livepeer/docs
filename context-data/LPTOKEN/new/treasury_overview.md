---
title: Treasury Overview
description: Formal model of the Livepeer Treasury as a governance-controlled protocol asset allocator.
---

# Treasury Overview

## Executive Summary

The Livepeer Treasury is the governance-controlled pool of protocol-managed assets used to fund ecosystem development, security research, infrastructure support, and other strategically aligned allocations.

Treasury control is enforced at the **protocol layer (on-chain)** through governance execution. The treasury is not controlled by off-chain committees in the enforcement sense; rather, governance proposals deterministically authorize transfers and actions.

This page defines what the treasury is, what it can do, and how its security model follows from stake-weighted governance.

---

## 1. Formal Definition

Let:

- \(T\) = treasury balance (in relevant asset units)
- \(A_k\) = allocation amount executed by proposal \(k\)

Treasury balance update after allocation \(k\):

\[
T' = T - A_k
\]

More generally, after a set of allocations \(\{A_1, A_2, \dots, A_n\}\):

\[
T_n = T_0 - \sum_{k=1}^{n} A_k
\]

Where each \(A_k\) is authorized via governance.

---

## 2. Architectural Context

### 2.1 Protocol Layer

At the protocol layer:

- Governance contracts authorize allocations.
- Execution contracts (e.g., timelock/treasury execution logic) perform transfers.
- On-chain state is the source of truth.

Canonical contract registry:

https://docs.livepeer.org/references/contract-addresses

### 2.2 Network Layer

At the network layer, treasury-funded initiatives may affect:

- orchestrator adoption
- developer tooling
- ecosystem applications

But treasury enforcement remains on-chain.

---

## 3. Treasury Purpose and Economic Rationale

A protocol treasury exists to:

1. Fund public goods aligned with protocol growth.
2. Reduce underinvestment in shared infrastructure.
3. Support long-horizon research and development.
4. Provide mechanism for strategic ecosystem interventions.

From an economic standpoint, the treasury is a coordination instrument for funding non-excludable benefits that markets underprovide.

---

## 4. Treasury Governance Model

Treasury decisions are executed through the governance lifecycle.

Let:

- \(B_T\) = total bonded stake
- \(B_i\) = bonded stake attributed to voter i

Voting power:

\[
V_i = \frac{B_i}{B_T}
\]

Thus, the treasury inherits governance security properties.

---

## 5. Security Model

Treasury security depends on:

1. Total bonded stake \(B_T\)
2. Stake distribution (concentration)
3. Quorum and timelock configuration

Capital required to control outcomes:

\[
Capital_{control} \ge \theta B_T
\]

A treasury is therefore as secure as the governance system controlling it.

---

## 6. Risks and Failure Modes

Key risks include:

- Governance capture (stake concentration)
- Low participation (quorum risk)
- Mis-specified calldata (execution failure)
- Misaligned incentives (allocation inefficiency)

Treasury is not automatically “good”; its outcomes depend on governance process quality.

---

## 7. System Diagram

```mermaid
flowchart TD
    Proposal --> Vote
    Vote --> Timelock
    Timelock --> Execute
    Execute --> Treasury
    Treasury --> Recipient
```

---

## 8. Protocol vs Network Separation

Protocol (On-Chain):

- treasury custody and execution
- governance authorization
- deterministic on-chain transfers

Network (Off-Chain):

- allocation recipients execute work (development, infra)
- ecosystem growth effects
- operational delivery

Treasury is enforced by protocol logic; outcomes occur through off-chain delivery.

---

## References

- Livepeer protocol repository: https://github.com/livepeer/protocol
- Contract registry: https://docs.livepeer.org/references/contract-addresses

---

**Status:** Treasury overview aligned with 2026 authoring standard (formal model, security implications, diagrams, and strict protocol/network separation).

