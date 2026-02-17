# Orchestrator Technical FAQ (2026 Edition)

This document answers advanced operational, protocol, and economic questions for GPU operators running Livepeer orchestrators in 2026.

It assumes familiarity with:
- Bonding & delegation
- Arbitrum L2 execution
- Probabilistic micropayments
- Video vs AI inference workloads
- Pool architecture

---

## 1. What exactly is an orchestrator in 2026?

An orchestrator is a bonded network participant that:

1. Stakes LPT via the BondingManager contract
2. Advertises service endpoints
3. Executes off-chain compute (video or AI)
4. Redeems winning tickets on Arbitrum
5. Distributes rewards to delegators

It is **not**:
- A gateway
- A product platform (e.g., Studio or Daydream)
- A UI layer

It is a **compute provider secured by stake**.

---

## 2. Where does orchestrator logic live (on-chain vs off-chain)?

### On-chain (Ethereum L1 + Arbitrum L2)

| Component | Network | Purpose |
|------------|----------|----------|
| BondingManager | Ethereum L1 | Stake, delegation, reward minting |
| Governor | Ethereum L1 | Governance execution |
| TicketBroker | Arbitrum | Ticket redemption & escrow |
| RoundsManager | Ethereum L1 | Round timing + inflation |

### Off-chain

| Component | Function |
|------------|----------|
| Transcoder | Video processing |
| AI worker | Model inference |
| Ticket sender/receiver | Micropayment handling |
| Price feed | Advertised pricing |
| Pool scheduler | GPU distribution |

---

## 3. How are jobs assigned?

### Video
- Stake-weighted selection
- Broadcasters request
- Gateway forwards
- Orchestrator selected proportional to active stake

### AI
- Gateway routing
- Capability-based matching
- Price + latency based
- Stake provides security, not necessarily routing priority

Important distinction:
Stake secures trust.
Routing optimizes performance.

---

## 4. What determines orchestrator rewards?

Rewards come from two sources:

### A. LPT Inflation (per round)

Let:
- S = Total LPT supply
- B = Bonded LPT
- T = Target bonding rate
- I = Inflation rate
- R = Reward pool for the round

Bonding rate:

B_rate = B / S

Inflation adjusts toward target T.

Minted tokens per round:

R = S * I

Orchestrator share:

O_reward = R * (O_stake / B)

Delegator share:

D_reward = O_reward * (1 - rewardCut)

---

### B. ETH Fees (Ticket Redemption)

Broadcasters send probabilistic tickets.

Expected value:

EV = faceValue * winProbability

Winning tickets redeemed on Arbitrum.

Fee share:

Delegator_fee = Fee * (1 - feeShare)
Orchestrator_fee = Fee * feeShare

---

## 5. What is the slashing risk?

Slashing occurs if:
- Double-signing
- Fraudulent transcoding proof
- Malicious ticket behavior

Slashing reduces bonded stake.
Delegators bonded to that orchestrator are proportionally affected.

Security model:

If malicious gain < slashed stake
→ Rational behavior = honesty

---

## 6. What is a pool in 2026?

A pool:
- Shares one bonded identity
- May contain many GPUs
- Distributes revenue internally
- Appears on-chain as one orchestrator

Revenue split inside pool is off-chain logic.

---

## 7. Minimum requirements to run an orchestrator

### Video
- NVIDIA GPU with NVENC
- Reliable bandwidth
- Arbitrum RPC
- Ethereum RPC

### AI
- CUDA 12+
- Sufficient VRAM for model
- Stable gateway integration

Stake requirements are dynamic and depend on network competition.

---

## 8. What metrics should operators monitor?

| Metric | Why It Matters |
|----------|----------------|
| Bonded stake | Routing weight |
| Active status | Eligibility for rewards |
| Missed rounds | Reward loss |
| Ticket redemption rate | Revenue health |
| Latency | Gateway routing preference |
| GPU utilization | Profitability |

---

## 9. How do rounds work?

Rounds:
- Fixed block interval
- Inflation minted per round
- Rewards claimable
- Delegation changes processed

Round-based architecture simplifies reward accounting.

---

## 10. Video vs AI revenue profile differences

| Dimension | Video | AI |
|------------|--------|-----|
| Payment cadence | Continuous segments | Request-based |
| Latency sensitivity | Medium | High |
| GPU utilization | Stable | Burst-heavy |
| Routing logic | Stake-weighted | Capability-weighted |

---

## 11. Where do gateways fit?

Gateways:
- Aggregate user requests
- Handle auth
- Route to orchestrators

They are application-facing.
They do not stake.
They do not secure protocol.

---

## 12. Can an orchestrator run only AI?

Yes.
But must still:
- Bond LPT
- Remain active
- Maintain reputation

Security model is protocol-wide.

---

## 13. How does Arbitrum change operator economics?

Ticket redemption gas costs are lower.
Faster settlement.
Improved capital efficiency.

L1 remains source of security.

---

## 14. Is inflation sustainable long term?

Inflation dynamically adjusts.
As bonding approaches target:

Inflation ↓

Yield trends toward:

Yield ≈ Fee-based revenue

Long-term security model transitions toward usage-driven economics.

---

## 15. What differentiates a top orchestrator?

- High uptime
- Low latency
- Competitive pricing
- Transparent feeShare/rewardCut
- Strong delegation retention
- Efficient GPU scaling

Stake alone is insufficient.
Performance matters.

---

## 16. Where are contracts deployed?

Ethereum L1:
- BondingManager
- RoundsManager
- Governor

Arbitrum:
- TicketBroker

Refer to official contract registry for latest addresses.

---

## 17. What is the biggest mistake new operators make?

1. Overestimating inflation yield
2. Ignoring fee dynamics
3. Underestimating latency impact
4. Not communicating with delegators
5. Failing to monitor rounds

---

## 18. What is the long-term role of orchestrators?

Orchestrators are:
- The economic backbone
- The compute substrate
- The trust anchor

Without stake-secured compute, Livepeer collapses into centralized infra.

Orchestrators are the decentralization layer.

---

End of FAQ.

