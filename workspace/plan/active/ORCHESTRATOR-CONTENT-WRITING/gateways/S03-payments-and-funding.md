---
title: Payments and Funding
description: How probabilistic micropayments work, what ETH to deposit, and what must be in place before a gateway can route production jobs.
pageType: concept
purpose: explain
lifecycleStage: evaluate
audience: gateway
status: draft
---

# Payments and Funding

Before a gateway can route production jobs, the payment layer must be funded. The mechanism, the amounts, and the funding path depend on whether the gateway operates on-chain or off-chain.

---

## Probabilistic micropayments

Livepeer settles fees between gateways and orchestrators using **probabilistic micropayments (PM)**. Paying per job segment on-chain would be prohibitively expensive in gas. PM replaces per-segment settlement with a lottery mechanism:

- The gateway sends orchestrators a cryptographically signed **ticket** with each job segment.
- Each ticket has a small probability of being a **winning ticket** worth a larger face value.
- Orchestrators accumulate tickets and redeem winning ones on-chain via the **TicketBroker** contract on Arbitrum.
- Most individual exchanges are entirely off-chain. Only winning tickets touch the blockchain.

Over time, the expected value of tickets matches what would have been paid directly. Orchestrators are paid correctly on average — the variance smooths out with volume. A gateway processing thousands of jobs per hour may trigger only a handful of on-chain redemptions.

---

## On-chain path: funding requirements

On-chain gateways deposit ETH on Arbitrum One into the TicketBroker contract. The deposit has two components:

### Deposit

Funds outstanding tickets. As orchestrators redeem winning tickets, ETH is drawn from this balance. If the deposit falls too low, orchestrators reject tickets and jobs fail. Monitor via `livepeer_cli` Option 1 (Get node status) or the Livepeer Explorer.

### Reserve

Backstops the deposit. The reserve protects orchestrators against gateway non-payment and is required for stake-based routing. The reserve also determines the per-payment fee amount.

**Fee per payment = reserve / 100**

Example: 0.03 ETH reserve produces a per-transcoding-payment value of 0.0003 ETH.

### Recommended amounts

| Environment | Deposit | Reserve | Total | Notes |
|---|---|---|---|---|
| Testing | 0.065 ETH | 0.03 ETH | 0.1 ETH | Minimum for functional testing |
| Production | — | — | 0.36 ETH (minimum) | Higher reserve prevents service interruptions during gas spikes |

{/* REVIEW: 0.36 ETH production minimum — verify with: GitHub issue #3744 may have updated this */}

### Funding steps

1. **Get ETH on Arbitrum One.** Bridge from Ethereum mainnet via [bridge.arbitrum.io](https://bridge.arbitrum.io) or purchase on an Arbitrum-native exchange.
2. **Transfer ETH to the gateway wallet address.** The address was generated when `go-livepeer` first started (check `livepeer_cli` Option 1 for the node's ETH address).
3. **Deposit via `livepeer_cli`.** Select Option 11 — "Invoke deposit broadcasting funds (ETH)". Enter the deposit and reserve amounts when prompted.
4. **Verify.** Select Option 1 — confirm the correct amounts appear under BROADCASTER STATS.
5. **Monitor balance.** As jobs are routed, the deposit drains. Top off before it reaches zero.

---

## Off-chain path: remote signer

Off-chain gateways delegate all payment operations to a **remote signer** — a standalone `go-livepeer` process that holds the Ethereum private key, signs tickets, and manages session bookkeeping. The gateway node itself holds no ETH and no private key.

The remote signer handles:

- Ticket generation and signing
- Nonce and fee accumulator tracking
- GetOrchestratorInfo authentication signatures

A community-hosted signer endpoint is available for operators who do not want to run their own. {/* REVIEW: community signer endpoint URL and availability — verify with: Discord #local-gateways or go-livepeer docs */}

ETH funding is still required — it lives in the wallet controlled by the remote signer, not at the gateway. The signer operator (which may be the same person, or a clearinghouse service) is responsible for maintaining the TicketBroker deposit.

---

## Gateway-as-a-Service: no ETH management

Operators using Livepeer Studio, Livepeer Cloud, or a third-party hosted gateway do not manage ETH or interact with the TicketBroker. The service provider handles all payment infrastructure. Cost is determined by the provider's subscription or usage-based pricing.

---

## Currency and token clarification

- **All protocol payments are in ETH on Arbitrum One.** Gateways pay orchestrators in ETH via probabilistic micropayment tickets.
- **LPT is not required for gateway operation.** LPT is the staking and governance token. Orchestrators and delegators use LPT; gateways do not.
- **No LPT needs to be bridged, purchased, or held** to run a gateway at any path.

---

## Key contracts

| Contract | Address (Arbitrum One) |
|---|---|
| TicketBroker (Proxy) | `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B` |
| ServiceRegistry (Proxy) | `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431` |

{/* REVIEW: contract addresses — verify with: arbiscan.io Livepeer contract labels */}

Both contracts are on Arbitrum One (chain ID 42161). The TicketBroker manages deposits, reserves, and ticket redemption. The ServiceRegistry maps orchestrator ETH addresses to their service URIs for discovery.

---

## Next steps

With funding in place, proceed to the quickstart for your chosen deployment path:

- **On-chain:** On-Chain Gateway Quickstart (S04)
- **Off-chain:** Off-Chain Gateway Quickstart (S05)
