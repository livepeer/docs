# Run an Orchestrator

This section defines what it actually means to operate production infrastructure on Livepeer in 2026.

An Orchestrator participates in **two distinct markets**:

1. **Video Transcoding Market** (stake-weighted, protocol-incentivised)
2. **AI Inference Market** (price + performance routed, marketplace-driven)

These are NOT the same.

They share infrastructure but differ in:

- Routing logic
- Economic selection criteria
- Risk profile
- Revenue dynamics

This page clearly separates them.

---

# 1. Dual-Market Model

```
flowchart LR
    Gateway -->|Video Job| VideoOrchestrator
    Gateway -->|AI Job| AIOrchestrator
    VideoOrchestrator -->|Redeem Tickets| Arbitrum
    AIOrchestrator -->|Direct Payment| Settlement
```

While both are executed by the same binary (`go-livepeer`), the economic logic differs.

---

# 2. Video Transcoding (Protocol-Secured Market)

## Selection Logic

Video jobs are routed to Orchestrators in the **Active Set**.

Active Set membership is determined by:

- Bonded LPT stake
- Ranking within top N by stake

Selection probability is proportional to stake share.

If you control 5% of bonded LPT in the active set, you probabilistically process ~5% of video volume (subject to uptime).

This is a **stake-weighted validator model**.

## Economic Model

Revenue sources:

- ETH ticket redemptions
- LPT inflation rewards

Risk:

- Slashing for misbehavior
- Missed reward calls

Security assumption:

Bonded capital aligns behavior.

---

# 3. AI Inference (Open Compute Marketplace)

AI workloads operate differently.

## Selection Logic

AI routing is determined by:

- Max price set by Gateway
- Orchestrator pricing
- Latency
- GPU capability
- Availability

**Stake does NOT determine AI routing selection.**

An orchestrator with minimal stake but powerful GPUs can process high AI volume.

## Economic Model

Revenue sources:

- Direct per-job payments

No inflation dependence.

Security assumption:

Reputation + competitive pricing.

---

# 4. Architectural Separation

```
flowchart TD
    subgraph VideoMarket
        Stake --> ActiveSet
        ActiveSet --> VideoJobs
    end

    subgraph AIMarket
        Price --> Routing
        Performance --> Routing
        Routing --> AIJobs
    end
```

Video = stake-weighted validator economy.
AI = performance-priced compute economy.

---

# 5. Operational Implications

| Factor | Video | AI |
|--------|--------|-----|
| Requires stake | Yes | No (for routing) |
| Inflation rewards | Yes | No |
| Slashing risk | Yes | Indirect |
| Price competition | Moderate | High |
| GPU VRAM critical | Moderate | High |
| Latency critical | High | High |

Operators must decide:

- Are you capital-heavy (stake-driven)?
- Or compute-heavy (GPU-driven)?

Many run both.

---

# 6. Infrastructure Strategy by Market

## Video-Focused Operator

Priorities:

- Maximise stake
- Maintain reward automation
- Ensure uptime
- Moderate GPU capacity

Goal:

Stable yield via inflation + steady jobs.

## AI-Focused Operator

Priorities:

- High-VRAM GPUs
- Aggressive pricing strategy
- Low latency
- Strong monitoring

Goal:

Maximise compute revenue per GPU-hour.

---

# 7. Revenue Stability Comparison

Video:

- More predictable (inflation component)
- Lower volatility

AI:

- Higher upside
- Highly competitive
- Sensitive to pricing and supply shifts

---

# 8. Capital Structure Differences

Video market requires:

- LPT acquisition
- Bonding
- Governance awareness

AI market requires:

- GPU capital expenditure
- Energy + hosting budget
- Performance tuning

---

# 9. Strategic Positioning

Operators today typically fall into three categories:

1. **Validator-heavy video operators**
2. **GPU-heavy AI compute providers**
3. **Hybrid operators (both markets)**

Hybrid is currently most resilient.

---

# 10. Governance Impact

Video operators are more exposed to:

- Inflation rate changes
- Active set size changes
- Slashing policy updates

AI operators are more exposed to:

- Gateway pricing standards
- Model support changes
- GPU demand shifts

---

# 11. Clear Separation Summary

| Dimension | Protocol Layer | Network Layer |
|------------|---------------|---------------|
| Staking | Protocol | — |
| Inflation | Protocol | — |
| Ticket redemption | Protocol | — |
| Job execution | — | Network |
| AI routing | — | Network |
| GPU performance | — | Network |

Do not conflate these.

---

# 12. Conclusion

Running an Orchestrator means operating at the intersection of:

- A stake-secured validator protocol (video)
- A performance-priced compute marketplace (AI)

Understanding the distinction is critical to:

- Revenue optimisation
- Hardware investment decisions
- Risk management

Next pages detail installation, configuration, and advanced economics for both paths.

