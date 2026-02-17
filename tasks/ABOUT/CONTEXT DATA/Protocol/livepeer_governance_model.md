# Livepeer Governance Model

Livepeer is governed through an on-chain, token-based mechanism powered by Livepeer Improvement Proposals (LIPs) and enforced by smart contracts on Arbitrum. Governance evolves protocol parameters, upgrades smart contracts, allocates treasury funds, and defines the rules of participation.

This page details the lifecycle of a proposal, voter rights, quorum math, relevant contracts, and links to tooling and references.

---

## Core Governance Principles

- **Open participation:** Anyone can propose a LIP
- **Token-weighted voting:** Only bonded LPT grants vote power
- **Transparency:** All proposals, votes, and executions are on-chain
- **Upgradeability with accountability:** Delays and timelocks protect against abuse

---

## Governance Scope

LIP-based governance can control:

| Action Type                  | Examples                                                              |
|------------------------------|-----------------------------------------------------------------------|
| Protocol Parameter Changes   | Inflation rate, bonding targets, slashing %, unbonding period        |
| Treasury Allocations         | Grants, audits, contributor funding, campaigns                       |
| Smart Contract Upgrades      | Replacing BondingManager, upgrading Governor logic                    |
| Actor Permissions            | Access controls, pause/resume certain modules                        |

---

## Governance Lifecycle (LIP Flow)

```mermaid
graph TD
    A[Draft LIP Created] --> B[Posted to Forum]
    B --> C[Community Feedback]
    C --> D[Snapshot Signaling (optional)]
    D --> E[On-Chain Vote Initiated]
    E --> F[Delay Period]
    F --> G[Governor Executes Proposal]
```

### Summary:
1. **Draft** a LIP per the [LIP template](https://forum.livepeer.org/t/lip-template/1784)
2. **Discuss** it in the forum: [forum.livepeer.org](https://forum.livepeer.org)
3. (Optional) Run an off-chain vote on Snapshot
4. Deploy to the Governor contract via proposal transaction
5. Bonded LPT holders vote YES/NO/ABSTAIN on-chain
6. If successful, proposal is queued and executed after timelock

---

## Governor Contract

- **Name:** `Governor`
- **Chain:** Arbitrum
- **Manages:** LIP execution, voting tally, timelocks

### ABI Highlights:
- `propose(address[] targets, uint[] values, bytes[] calldatas, string description)`
- `castVote(proposalId, support)`
- `queue(proposalId)`
- `execute(proposalId)`
- `state(proposalId)`

📎 View ABI: [Governor.sol](https://github.com/livepeer/protocol/blob/master/contracts/governance/Governor.sol)

📍 Contract Address: `[INSERT_ARBITRUM_ADDRESS]`

---

## Voting Rules

| Rule                | Description                                                   |
|---------------------|---------------------------------------------------------------|
| Token Used          | Bonded LPT at snapshot block                                 |
| Voting Weight       | Proportional to stake                                         |
| Quorum              | % of total bonded supply that must vote                      |
| Support Threshold   | % of YES among votes cast (e.g. >50%)                         |
| Voting Delay        | e.g. 1 block                                                  |
| Voting Period       | e.g. 7 days                                                   |
| Execution Timelock  | e.g. 2 days after vote passes                                 |

### Quorum Formula:
```text
Quorum = MIN_BONDED * quorumThresholdPct
```
Where:
- `MIN_BONDED` = total bonded LPT at snapshot
- `quorumThresholdPct` = configurable (e.g. 10%)

---

## Vote Casting

Participants may vote directly or delegate their voting power to another address.

| Support Type | Code | Meaning           |
|--------------|------|-------------------|
| Against      | 0    | Vote NO           |
| For          | 1    | Vote YES          |
| Abstain      | 2    | Registered abstention |

Votes are cast using:
```solidity
Governor.castVote(proposalId, support)
```

---

## Proposal Execution

After passing and waiting the timelock period, any user can execute the proposal.

```solidity
Governor.execute(proposalId)
```

Upon execution:
- Contract upgrades are triggered
- Treasury funds are sent
- Parameters are modified

---

## Tooling

| Tool         | Link                                                                 |
|--------------|----------------------------------------------------------------------|
| Forum        | [https://forum.livepeer.org](https://forum.livepeer.org)            |
| Snapshot     | [https://snapshot.org/#/livepeer.eth](https://snapshot.org/#/livepeer.eth) |
| Arbiscan     | `[Governor Address on Arbiscan]`                                     |
| ABI Viewer   | [Governor.sol GitHub](https://github.com/livepeer/protocol/blob/master/contracts/governance/Governor.sol) |

---

## Examples of Live LIPs

- [LIP-77: Arbitrum Migration](https://forum.livepeer.org/t/lip-77-arbitrum-native)
- [LIP-73: Reward Curve Update](https://forum.livepeer.org/t/lip-73-adjusting-orchestrator-parameters)
- [LIP-52: Treasury Delegation](https://forum.livepeer.org/t/lip-52-foundation-voting-power-delegation)

---

## Governance Best Practices

- Proposals must include **technical implementation detail**
- Budget requests must include **milestones** and **multi-sig disbursement logic**
- All votes are final and **binding** on the protocol
- Emergency recovery is possible only via new governance proposals

---

## References

- [LIP Template](https://forum.livepeer.org/t/lip-template/1784)
- [Governor Contract GitHub](https://github.com/livepeer/protocol/blob/master/contracts/governance/Governor.sol)
- [Livepeer Snapshot](https://snapshot.org/#/livepeer.eth)
- [Livepeer Forum](https://forum.livepeer.org)

---

Next: `protocol-economics.mdx`

