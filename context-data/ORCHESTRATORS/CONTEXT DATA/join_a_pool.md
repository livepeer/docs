# Join a Pool

Running a full standalone Orchestrator (staking, reward management, pricing strategy, infrastructure) is not the only way to participate in Livepeer’s supply side.

You can instead **join a pool**.

This page explains:

- What an orchestrator pool is
- How pools differ from delegation
- When pooling makes sense
- Revenue sharing mechanics
- Risks and operational expectations
- How to join one

This is a **network-layer participation model**, but interacts with protocol-layer staking.

---

# 1. What Is a Pool?

A pool is a coordinated group operating under:

- One bonded orchestrator identity (on-chain)
- One stake + delegation set
- One pricing configuration
- Multiple GPU providers (off-chain workers)

In other words:

> The on-chain orchestrator is shared infrastructure.

Individual GPU operators contribute compute, while the orchestrator operator manages:

- Staking
- Reward calls
- Ticket redemption
- Reputation management
- Fee configuration

---

# 2. Pool vs Delegation

These are NOT the same.

| Model | What You Provide | What You Earn |
|--------|-----------------|---------------|
| Delegator | LPT stake only | LPT inflation + ETH fees |
| Pool Member | GPU compute | Revenue share from jobs |
| Full Orchestrator | LPT + GPU | Full fee + inflation |

Pool members typically:

- Do NOT control staking parameters
- Do NOT call reward()
- Do NOT manage on-chain identity

They supply compute only.

---

# 3. Why Join a Pool?

Reasons:

- No need to hold large amounts of LPT
- Avoid active set competition
- Reduced protocol complexity
- Shared operational responsibility
- Faster time-to-revenue

Ideal for:

- Data centers
- GPU farms
- AI compute providers
- New entrants

---

# 4. Revenue Model

Revenue sources in a pool:

- ETH from ticket redemptions
- AI inference job payments

Inflation (LPT rewards):

- Goes to bonded orchestrator
- Distributed according to internal pool agreement

Typical pool split model:

| Party | Share |
|--------|-------|
| Orchestrator Operator | 10–30% |
| GPU Providers | 70–90% (pro-rata by compute) |

This is NOT enforced by protocol.

It is contractual.

---

# 5. Technical Architecture of a Pool

```
sequenceDiagram
    participant Gateway
    participant Orchestrator
    participant GPUWorker
    participant Arbitrum

    Gateway->>Orchestrator: Job request
    Orchestrator->>GPUWorker: Dispatch workload
    GPUWorker-->>Orchestrator: Results
    Orchestrator->>Gateway: Return output
    Orchestrator->>Arbitrum: Redeem winning tickets
```

Key distinction:

The pool member GPU does not interact directly with blockchain.

---

# 6. Pool Eligibility

Before joining, verify:

- Pool uptime track record
- Reward call consistency
- Reputation
- Transparent revenue distribution
- Pricing competitiveness

Check via:

https://explorer.livepeer.org

---

# 7. Risks of Pooling

| Risk | Description |
|------|-------------|
| Operator mismanagement | Poor pricing reduces jobs |
| Missed reward calls | Reduced inflation |
| Slashing | Shared stake risk |
| Revenue opacity | Internal disputes |

Always:

- Request reporting dashboards
- Clarify payout schedule
- Review historical earnings

---

# 8. How to Join a Pool

Steps:

1. Identify reputable orchestrator pool
2. Agree on revenue share terms
3. Deploy GPU worker node
4. Connect to orchestrator endpoint
5. Test job processing
6. Monitor earnings

Pool operator provides:

- Worker connection credentials
- Config parameters
- Pricing alignment

---

# 9. When NOT to Join a Pool

Avoid pooling if:

- You have significant LPT stake
- You want governance influence
- You want pricing autonomy
- You aim to build brand reputation

In that case, run full orchestrator.

---

# 10. Strategic Comparison

| Option | Complexity | Revenue Control | Capital Required |
|--------|------------|-----------------|-----------------|
| Delegator | Low | None | LPT |
| Pool Member | Medium | Limited | GPU |
| Full Orchestrator | High | Full | LPT + GPU |

---

# 11. Advanced Pool Models

Emerging designs include:

- Multi-region GPU clusters
- AI-specialized pools
- Video-only pools
- Hybrid staking pools

These compete based on:

- Latency
- Price
- Reliability

---

# 12. Conclusion

Joining a pool lowers the barrier to entry for compute providers while preserving the staking-based security model of Livepeer.

It separates:

- Protocol risk (bonding)
- Network compute contribution

This modularity allows broader participation in decentralized compute.

Next page: Run an Orchestrator → Overview.

