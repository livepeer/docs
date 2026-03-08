# Livepeer Protocol Treasury

The Livepeer Treasury is a smart contract-controlled pool of LPT tokens funded through protocol inflation and penalty mechanisms. It serves as the protocol’s capital allocator—enabling decentralized development, community grants, public goods, audits, and incentive programs, all governed by token holders via LIP proposals.

This page outlines how the treasury accumulates funds, how disbursements are authorized, and how its role is evolving across the protocol’s roadmap.

---

## Treasury Objectives

The treasury is designed to:

- **Sustain ecosystem growth** by funding core development, tools, integrations, and R&D
- **Improve protocol security** by supporting audits, incentive design, and bug bounties
- **Decentralize governance** via on-chain voting on funding proposals (LIPs)
- **Enable long-term coordination** beyond the scope of any single actor or company

---

## Treasury Funding Sources

| Source                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Inflationary Minting        | % of each round’s LPT minted is routed to treasury                         |
| Slashing Penalties          | Orchestrator misbehavior results in partial burn + treasury deposit        |
| Ticket Fee Remainders       | Unclaimed or expired broadcaster deposits are swept to the treasury         |
| Direct LIP Transfers        | Community or multisig entities can deposit LPT manually                    |

### Example (2026 Default Config):
- **25%** of all per-round minted LPT goes to treasury
- **50%** of slashed stake redirected to treasury, 50% burned
- **ETH leftover from expired ticket windows** converted to LPT via market buy (optional, not default)

---

## Contract Architecture

- **Contract Name:** `Treasury`
- **Deployment:** Arbitrum One

### Contract Role
- Holds LPT funds
- Accepts authorized `distribute()` calls from governance
- Emits `TreasuryWithdrawal` events on approved spend

> Placeholder: `[INSERT_ARBITRUM_CONTRACT_ADDRESS]`

---

## Governance Control

All treasury disbursements must be:

1. Proposed via a Livepeer Improvement Proposal (LIP)
2. Voted on by bonded LPT holders
3. Executed through the protocol `Governor` contract after a delay

### LIP Process
```mermaid
graph TD
    A[LIP Drafted] --> B[Forum Discussion]
    B --> C[Snapshot Voting (optional)]
    C --> D[Governor Vote Initiated]
    D --> E[Passed LIP triggers Treasury Release]
    E --> F[Funds sent to recipient address]
```

### Voting Parameters (configurable via LIP):
- **Quorum**: % of bonded LPT that must vote
- **Support**: % of YES votes needed to pass
- **Timelock**: Delay between passage and execution

---

## Fund Use Cases

| Category                | Examples                                                          |
|------------------------|-------------------------------------------------------------------|
| Core Development       | Protocol upgrades, contract rewrites, Arbitrum migrations         |
| Ecosystem Grants       | Funding for clients, indexers, AI integrations                    |
| Public Goods           | Documentation, SDKs, Explorer enhancements                        |
| Security & Audits      | Formal audits of bonding/ticket contracts                         |
| Community Campaigns    | Education, marketing, live events                                 |
| Contributor Payments   | Retroactive or milestone-based compensation                       |

> See [LIP-73](https://forum.livepeer.org/t/lip-73-adjusting-orchestrator-parameters) and [LIP-77](https://forum.livepeer.org/t/lip-77-arbitrum-native) for examples

---

## Reporting & Transparency

Treasury balances, disbursements, and historical LIP outcomes are publicly visible via:

- [Livepeer Explorer – Treasury Page](https://explorer.livepeer.org/treasury)
- [Governance History on Arbiscan](https://arbiscan.io/address/INSERT_GOVERNOR)
- [Disbursement Events in ABI](https://github.com/livepeer/protocol)

### Example Query (using ethers.js):
```ts
const event = TreasuryContract.filters.TreasuryWithdrawal()
provider.on(event, (log) => console.log(log.args))
```

---

## Long-Term Vision

The treasury is a critical step toward:
- Autonomous funding of AI & media compute infrastructure
- Cross-chain governance (e.g., L2-native treasury deployment)
- Self-sustaining public goods ecosystems backed by decentralized media infrastructure

---

## References

- [Livepeer Treasury Tracker (Explorer)](https://explorer.livepeer.org/treasury)
- [LIP Template](https://forum.livepeer.org/t/lip-template/1784)
- [Arbitrum Governor](https://arbiscan.io/address/INSERT_GOVERNOR_ADDRESS)
- [Treasury Contract ABI](https://github.com/livepeer/protocol/blob/master/contracts/governance/Treasury.sol)
- [Blog – Treasury Disbursement Updates](https://blog.livepeer.org)

---

Next up: `governance-model.mdx`

