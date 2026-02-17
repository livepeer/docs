# Livepeer Network Actors

Livepeer’s decentralized network consists of multiple types of actors who interact both on- and off-chain to deliver secure, scalable, and cost-efficient media compute infrastructure. Each role has distinct permissions, responsibilities, and revenue paths.

This section documents the actors that form the Livepeer Network, including their function, economic incentives, operational responsibilities, and integration points with the core protocol.

---

## Actor Overview Table

| Actor           | On-Chain? | Staked LPT? | Runs Compute? | Pays ETH? | Primary Role                            |
|------------------|-----------|-------------|----------------|-----------|-----------------------------------------|
| Orchestrator     | ✅        | ✅           | ✅              | ❌         | Coordinates work, earns ETH & LPT        |
| Worker           | ❌        | ❌           | ✅              | ❌         | Performs media/AI jobs                   |
| Broadcaster      | ❌        | ❌           | ❌              | ✅         | Submits jobs, pays ETH                   |
| Delegator        | ✅        | ✅           | ❌              | ❌         | Stakes LPT to earn yield                 |
| Gateway Node     | ❌        | ❌           | ❌              | ❌         | Routes jobs, manages sessions            |
| Governor         | ✅        | ✅           | ❌              | ❌         | Votes on LIPs, governs protocol logic    |

---

## 1. Orchestrators

Orchestrators are the backbone of the Livepeer Network. They:

- Stake LPT on Ethereum L1
- Connect to Arbitrum for ETH tickets and job tracking
- Bid for session assignments via gateways
- Coordinate local compute via workers (FFmpeg/AI)
- Collect ETH fees and LPT inflation rewards
- Set reward/fee cut percentages for delegators

They operate the `livepeer` node and must:
- Maintain uptime
- Validate winning tickets
- Submit Merkle proofs for rewards

**On-chain responsibilities:**
- Bonding/unbonding
- Reward claiming (L2 → L1 bridge)
- Slashing if misbehavior proven

---

## 2. Workers

Workers are external or local processes assigned jobs by an orchestrator. They may be:
- Transcoders (video)
- Inference nodes (AI/ML)
- Specialized compute (e.g. image-to-image)

They do not hold stake and are untrusted in protocol eyes. Trust is proxy-based:
- Orchestrator vouches for them
- Faults lead to orchestrator slashing

**Software Examples:**
- GPU FFmpeg
- WebRTC workers
- Python inference scripts (e.g. ComfyStream)

---

## 3. Broadcasters

Broadcasters are clients (apps, services, SDKs) who:
- Submit video/AI jobs to the network
- Pay in ETH or credits via gateways
- Receive output (e.g., transcoded stream)

They don’t need LPT or protocol interaction.

**Integration modes:**
- Livepeer Studio SDK
- REST/gRPC Gateway APIs
- RTMP/WHIP ingest endpoints

---

## 4. Delegators

Delegators support the protocol by:
- Staking (bonding) LPT to orchestrators
- Sharing in inflation and fee rewards

They don’t operate infra but:
- Choose which orchestrators to support
- Monitor performance, fee cuts, uptime

**Economic exposure:**
- Receive slashing if their orchestrator misbehaves
- Yield = Inflation * (1 - reward cut)

See: [Delegator Dashboard](https://explorer.livepeer.org/delegators)

---

## 5. Gateway Nodes

Gateways are API-facing edge routers that:
- Receive job/session requests
- Select orchestrators (bidding layer)
- Validate ETH deposits or credit balance
- Provide auth / rate-limiting / metering

Not protocol-governed; implemented by:
- Livepeer Studio
- Daydream
- Partners (ComfyStream, etc)

They may be incentivized off-chain or integrated with LPT flow (future LIP).

---

## 6. Governor

The Governor contract governs protocol logic:
- Executes passed LIPs (Livepeer Improvement Proposals)
- Controls parameter updates (inflation, bonding target)
- Manages treasury disbursement via multi-sig

Governance is token-weighted, using:
- LPT (bonded)
- Snapshot (off-chain signaling)
- Quorum + majority rules

See: [`Governor.sol`](https://github.com/livepeer/protocol/blob/master/contracts/governance/Governor.sol)

---

## Economic Roles in Context

```mermaid
graph TD
    B[Delegator] --> O[Orchestrator]
    O --> W[Worker]
    Bc[Broadcaster] --> G[Gateway]
    G --> O
    O --> TB[TicketBroker (Arbitrum)]
    TB --> O
    G --> Gv[Governor]
    O --> Gv
```

Each actor plays into both market function (work execution) and protocol security (staking, slashing).

---

## References

- [Livepeer Docs – Delegators](https://livepeer.org/docs/guides/delegator)
- [Livepeer Studio Gateway](https://livepeer.studio/docs)
- [Protocol GitHub](https://github.com/livepeer/protocol)
- [LIP Index](https://forum.livepeer.org)

---

Next section: `job-lifecycle.mdx`

