---
title: Payment Operations
description: Manage deposits, reserves, and payment health for a running Livepeer gateway.
pageType: guide
purpose: operate
lifecycleStage: operate
audience: gateway
status: draft
---

# Payment Operations

A running on-chain gateway pays orchestrators through probabilistic micropayments funded by ETH locked in the TicketBroker contract on Arbitrum One. Two balances matter: deposit and reserve. Both require active monitoring.

---

## Deposit and reserve

**Deposit** — ETH locked in the TicketBroker contract that funds outstanding payment tickets. When the deposit runs low, orchestrators may stop accepting jobs from your gateway because the tickets you issue lack sufficient backing.

**Reserve** — Backstop collateral. If the deposit depletes entirely, the reserve covers outstanding tickets. The protocol calculates the fee per payment as `reserve / 100`.

Production minimum: 0.36 ETH total (deposit + reserve). {/* REVIEW: 0.36 ETH — verify with: GitHub #3744 */}

The deposit is consumed proportionally to job throughput. The reserve is consumed only when the deposit reaches zero — if reserve is being drawn, you have a funding emergency.

---

## Check current balance

Two methods:

**livepeer_cli:**

```bash
livepeer_cli -host 127.0.0.1 -http 5935
```

Select Option 13 — *Get Deposit and Reserve*. Returns both balances in wei.

**On-chain query:**

Query the TicketBroker contract directly at `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B` on Arbiscan. Call `getSenderInfo(address)` with your gateway's Ethereum address. {/* REVIEW: address — verify with: arbiscan.io */}

---

## Top-up procedure

1. Open livepeer_cli:
   ```bash
   livepeer_cli -host 127.0.0.1 -http 5935
   ```
2. Select Option 11 — *Deposit ETH*.
3. Enter the deposit amount and reserve amount (in ETH).
4. Confirm the transaction. The gateway wallet needs sufficient ETH to cover gas in addition to the deposit value.

---

## When to top up

Monitor the deposit balance continuously. Set an alert when deposit drops below 50% of its initial value.

High-throughput gateways consume deposit faster. A gateway routing 1,000 jobs/day at 0.0003 ETH/job uses approximately 0.3 ETH/day from deposit. Scale your deposit to cover at least two days of expected throughput to give yourself headroom for top-up latency.

If reserve balance is decreasing, your deposit hit zero before you noticed. Top up the deposit immediately and investigate what caused the drain.

---

## Withdrawal

livepeer_cli → Option 14 — *Withdraw deposit and reserve*.

Withdrawal triggers an unlock period. Funds are not available in the same transaction — you must wait for the unlock to complete before the ETH returns to your wallet. {/* REVIEW: unlock period duration — verify with: TicketBroker contract */}

Plan withdrawals ahead. Do not rely on emergency withdrawal if you need funds urgently.

---

## Off-chain gateways

Off-chain gateways delegate payment operations to a remote signer. The deposit and reserve are managed by the signer operator, not by you.

Your operational responsibilities shift:

- Monitor signer endpoint health (is it reachable? responding within acceptable latency?)
- Confirm key rotation schedule with the signer operator
- Verify that the signer's deposit is sufficient for your throughput (coordinate with the signer operator on expected volume)

You do not run livepeer_cli deposit commands for an off-chain gateway. If jobs fail with payment-related errors, the issue is at the signer layer — escalate to whoever operates the signer.

---

## Monitoring checklist

| Check | Frequency | Action on failure |
|-------|-----------|-------------------|
| Deposit balance > 50% initial | Every 4 hours | Top up via Option 11 |
| Reserve balance unchanged | Daily | If decreasing, top up deposit immediately |
| Gas balance in gateway wallet | Daily | Send ETH to gateway address |
| Signer endpoint health (off-chain) | Every 5 minutes | Restart signer or failover |

---

**Exit state:** You can top up deposits, check balances via CLI or on-chain query, and have monitoring alerts configured for payment health.
