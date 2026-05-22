# Delegators Full Content — v2/lpt/

Collated from all .mdx files under v2/lpt/ in the Docs-v2-dev repository.
Generated: 2026-03-23

---

## FILE: v2/lpt/index.mdx

**Frontmatter:**
- title: 'LPT'
- sidebarTitle: 'LPT'
- description: 'Generated table of contents for docs pages under v2/lpt.'
- pageType: overview
- keywords: ['livepeer', 'generated index', 'table of contents', 'v2/lpt']

**Body:**

Generated file — do not manually edit; run `node operations/scripts/generate-pages-index.js --write`.

Table of contents:

- LP Token Home Portal (token-portal.mdx)

About:
- LPT Mechanics (about/mechanics.mdx)
- LPT Overview (about/overview.mdx)
- Livepeer Token Purpose (about/purpose.mdx)
- LPT Tokenomics (about/tokenomics.mdx)

Delegation:
- About Delegators (delegation/about-delegators.mdx)
- Delegation Economics (delegation/delegation-economics.mdx)
- Delegation Guide (delegation/delegation-guide.mdx)
- Delegating LPT: Getting Started (delegation/getting-started.mdx)
- Delegation Overview (delegation/overview.mdx)

Governance:
- Livepeer Governance Model (governance/model.mdx)
- Livepeer Governance Overview (governance/overview.mdx)
- Livepeer Governance Processes (governance/processes.mdx)

Resources:
- Delegator Videos and Blogs (resources/delegator-videos-and-blogs.mdx)
- Exchanges with LPT Listed (resources/exchanges.mdx)
- LPT & ETH Token Functions (resources/lpt-eth-usage.mdx)
- LPT Token Glossary (resources/compendium/glossary.mdx)

Treasury:
- Treasury Allocations (treasury/allocations.mdx)
- Treasury Overview (treasury/overview.mdx)
- Treasury Proposals (treasury/proposals.mdx)

---

## FILE: v2/lpt/token-portal.mdx

**Frontmatter:**
- mode: frame
- title: LP Token Home Portal
- sidebarTitle: LP Token Portal
- description: 'Welcome To The Token Portal: Explore, Navigate, Delegate, Vote'
- keywords: livepeer, delegators, token portal, token, home, portal, welcome
- og:image: /snippets/assets/site/og-image/fallback.png
- og:image:alt: Livepeer Docs social preview image
- og:image:type: image/png
- og:image:width: 1200
- og:image:height: 630
- tag: Start Here
- pageType: landing
- audience: delegator
- lastVerified: 2026-03-17
- purpose: landing

**Body:**

Hero section title: "Shape the Future of Livepeer"
Hero subtitle: "Learn - Vote - Earn"

Hero description: "Learn about the Livepeer Token (LPT), delegate your tokens to earn rewards, and vote on network governance proposals."

Hero overview text:
The Livepeer Token (LPT) is the native ERC-20 token that secures the Livepeer Network and enables community-driven governance. Holding LPT allows participants to earn a share of network fees and inflationary rewards, and to influence the network's direction through governance votes. LPT aligns incentives across all network actors - orchestrators, delegators, and gateways - to keep Livepeer cost-effective, decentralised, and secure.

Portal cards:
- What's a Token? — Learn about the Livepeer Token (LPT) → ./about/overview
- Delegate LPT — Earn rewards by delegating (staking) your LPT on the network → ./delegation/overview
- Shape the Future of Livepeer — Vote on governance proposals and contribute to the network's decision-making → ./governance/overview
- Contribute — Have an idea? Propose it! The Livepeer Treasury funds projects that benefit the network → ./treasury/overview

Live Network section:
- Livepeer Explorer — Live staking stats, orchestrator list, and bonding rate → https://explorer.livepeer.org
- Treasury — View current treasury balance and governance proposals → https://explorer.livepeer.org/treasury
- Governance Voting — Active and historical on-chain governance votes → https://explorer.livepeer.org/voting

---

## FILE: v2/lpt/about/overview.mdx

**Frontmatter:**
- title: LPT Overview
- sidebarTitle: Overview
- description: Comprehensive architectural and economic overview of the Livepeer Token (LPT) within the Livepeer Protocol.
- keywords: livepeer, lpt, overview, token, staking, governance, economics, arbitrum
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: overview
- audience: delegator
- lastVerified: 2026-03-17
- purpose: overview

**Body:**

## Executive Summary

The Livepeer Token (LPT) is the protocol-layer asset that secures, governs, and economically regulates the Livepeer network. It is not a payment token for video consumption, nor a representation of corporate equity. Its function is strictly structural: it converts bonded capital into measurable economic weight that secures job allocation, enables governance, and funds ecosystem development.

LPT operates exclusively at the protocol layer (on-chain) on Arbitrum One.

## 1. Formal Definition

LPT is defined as: A stake-weighted coordination asset that provides economic security, governance authority, and treasury control within the Livepeer Protocol.

Functional domains:
1. Staking security
2. Inflation-based reward distribution
3. Delegated capital allocation
4. Governance voting
5. Treasury stewardship

## 2. Architectural Context

### 2.1 Protocol Layer (On-Chain)

LPT interacts with core smart contracts:
- BondingManager — stake accounting
- Minter — inflation issuance
- RoundsManager — epoch-based reward timing
- Governor — proposal and voting execution
- Treasury — governance-controlled funds

All protocol authority derives from bonded LPT balances.

### 2.2 Network Layer (Off-Chain)

The network layer includes: orchestrator software, GPU compute execution, transcoding and inference pipelines, gateway APIs and routing. LPT does not execute work. It economically secures actors who perform work.

## 3. Staking and Economic Weight (Technical Reference)

Economic weight: W_i = B_i / B_T

Work allocation and inflation rewards are proportional to W_i. This creates a capital-backed Sybil resistance model.

## 4. Inflation Mechanism Overview

Per round t: R_t = S_t × r_t

Where S_t = token supply at round t, r_t = protocol-defined inflation rate. Inflation adjusts dynamically based on bonding rate relative to target bonding rate.

## 5. Delegation Model

Delegators bond stake to orchestrators, increasing their economic weight without running infrastructure.

Total orchestrator stake: B_O = B_self,O + sum(b_D,O)

## 6. Governance Authority

Voting power: V_i = B_i / B_T

Governance may modify: inflation parameters, contract implementations, treasury allocations.

## 7. Security Model

Security proportional to B_T. An attacker must acquire a threshold fraction of bonded LPT to influence work allocation or governance.

## 8. Economic Tradeoffs

| Mechanism | Tradeoff |
|---|---|
| Inflation issuance | Bootstrapping vs dilution |
| Delegation | Accessibility vs concentration |
| Capital-weighted governance | Security vs wealth influence |

## 9. System Interaction Diagram

LPT → Staking → WorkAllocation / InflationRewards
LPT → Governance → ParameterUpdates
LPT → Treasury → EcosystemFunding

## 10. Operational Considerations

Participants must understand: bonding and unbonding delays, commission structures, inflation parameter adjustments, governance quorum thresholds. Participation exposes capital to protocol-level risk.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses
- https://github.com/livepeer/LIPs

---

## FILE: v2/lpt/about/purpose.mdx

**Frontmatter:**
- title: Livepeer Token Purpose
- sidebarTitle: Purpose
- description: Core purpose of LPT in Livepeer: protocol security collateral, reward distribution, and governance participation.
- pageType: concept
- keywords: livepeer, delegators, about lpt livepeer token, purpose, delegation
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Purpose of LPT

LPT is the native asset of the Livepeer protocol and serves three distinct functions:

- **Security collateral** – Orchestrators must bond LPT to participate in the active set. The stake acts as collateral against misbehaviour and determines how much work an orchestrator can perform. Delegators bond LPT to orchestrators and share in rewards. Although slashing is currently disabled, the existence of a bondable token allows the network to enforce economic penalties in the future.

- **Reward distribution** – New LPT minted through inflation is distributed proportionally to bonded stake. This makes LPT a "work token": the more stake an orchestrator has, the more inflationary rewards it receives. Delegators share in these rewards based on the orchestrator's configured `rewardCut`. Fees paid in ETH are also split according to bonded stake, aligning incentives across both revenue streams.

- **Governance power** – Voting weight in Livepeer Improvement Proposals (LIPs) is proportional to bonded LPT. Tokenholders can propose protocol changes, vote on treasury allocations and direct network upgrades. Delegators indirectly influence governance by choosing orchestrators who represent their preferences.

Importantly, LPT is not used to pay for work. Broadcasters and AI builders pay in ETH or the underlying gas token, while orchestrators earn ETH fees. This separation avoids conflating supply-demand dynamics with the security incentive.

### Supply and inflation

LPT launched with a fixed genesis supply of 25.8 million tokens and continues to expand via dynamic inflation. At the start of every round, the BondingManager mints new LPT and distributes it to active orchestrators proportional to stake.

- **Adaptive inflation** – The inflation rate responds to staking participation: if less than ~50% of LPT is bonded, the rate increases; if more than ~50% is bonded, the rate decreases. Early on, inflation exceeded 13% per year; as participation grew, the community voted to reduce baseline issuance to around 6–8% and to direct a portion to the community treasury.

The formula: inflation := inflation ± inflationChangeRate depending on whether the bonded ratio is above or below the target bonding rate (initially 50%). InflationChangeRate determines how quickly the rate adjusts (e.g., 0.0005 per round). Rounds occur roughly every 21 hours.

- **Future adjustments** – Governance retains the ability to modify inflation parameters via LIPs. Future proposals may explore token-burning mechanisms, veLPT locking, or L2-specific inflation.

### Community Treasury

The protocol routes a share of inflation to an on-chain community treasury. In its first iteration, 10% of newly minted LPT flowed into a multisig controlled by the Livepeer Foundation and community stewards. Treasury funds do not accrue automatically to orchestrators or delegators. Spending proposals must be approved by governance. Special-purpose entities (SPEs) can request allocations to execute scoped projects and must report back on milestones.

### Rewards distribution

Two revenue streams in Livepeer:

1. **ETH fees** – When broadcasters or AI builders redeem winning tickets, ETH is transferred from their deposit to the orchestrator. The orchestrator shares a configurable percentage of these fees with its delegators (`feeShare`).

2. **LPT inflation** – In each round, the BondingManager calls `reward()` for every active orchestrator. The contract mints new LPT proportional to the orchestrator's total stake (bonded LPT + delegations) and transfers it to the orchestrator. The orchestrator then splits the reward with delegators according to its `rewardCut` (percentage it keeps). Delegators call `claimEarnings()` to collect accumulated LPT and ETH.

Bonding is non-custodial: delegators' LPT remains within the BondingManager. To withdraw, a delegator initiates an unbond. After a thawing period of one round (currently ~21 hours), they can withdraw their principal and any unclaimed rewards.

The configurability of `rewardCut` and `feeShare` creates a pricing market. Orchestrators must decide how much of the reward to retain versus share to attract delegators.

**Reward leakage and "fee switch":** Historically Livepeer distributed all inflationary rewards to orchestrators and their delegators. Recent discussions have explored introducing a "fee switch" that would route a portion of fees to the community treasury or burn a portion of fees. As of 02-March-2026, no fee switch has been enacted.

---

## FILE: v2/lpt/about/mechanics.mdx

**Frontmatter:**
- title: LPT Mechanics
- sidebarTitle: Mechanics
- description: Detailed protocol-level mechanics governing bonding, unbonding, reward checkpointing, and round-based state transitions in the Livepeer Protocol.
- pageType: concept
- keywords: livepeer, lpt, mechanics, bonding, unbonding, staking, rewards, rounds
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

This page describes the deterministic contract-level mechanics governing how LPT transitions between bonded and unbonded states, how rounds are processed, and how rewards are checkpointed and claimed. All mechanisms operate strictly at the protocol layer (on-chain).

## 1. Core State Variables

- S_t = total LPT supply at round t
- B_T = total bonded stake
- B_i = bonded stake attributed to participant i
- Round t = discrete accounting epoch managed by the protocol

Rounds form the atomic accounting unit for issuance and reward distribution.

## 2. Bonding

Bonding is the act of locking LPT into the staking contract to participate in protocol rewards and governance.

When participant i bonds amount x:
- B_i^new = B_i^old + x
- B_T^new = B_T^old + x

Bonded stake contributes to: reward eligibility, governance voting weight, security participation. Bonding is recorded in the BondingManager contract.

## 3. Delegation Attribution

If delegator D bonds to orchestrator O:
B_O = B_self,O + sum(b_D,O)

Delegators retain ownership but delegate reward rights and voting weight attribution.

## 4. Unbonding

When participant i unbonds amount x:
- B_i^new = B_i^old - x
- B_T^new = B_T^old - x

The stake enters a pending withdrawal state subject to an unbonding period measured in rounds. During this period: stake does not earn rewards, stake cannot be immediately transferred.

## 5. Round Lifecycle

Each round includes: inflation calculation, reward distribution eligibility, checkpoint processing.

Issuance per round: R_t = S_t · r_t
Supply update: S_{t+1} = S_t + R_t

## 6. Reward Checkpointing

Rewards are not automatically transferred; they must be checkpointed.

Allocation to orchestrator O: R_O = R_t · (B_O / B_T)
Delegator share: R_D,O = R_O (1 - c_O) · (b_D,O / B_O)

## 7. Claiming and Rebonding

Participants may: claim rewards to liquid balance, or rebond rewards (compound stake). Rebonding increases B_i and thus future economic weight.

## 8. State Transition Diagram

[*] → Bonded → Unbonding (initiateUnbond()) → Withdrawable (afterUnbondingPeriod) → [*] (withdraw())
Bonded → Bonded (checkpoint() / rebond())

## 9. Security Implications

- Unbonding delay — reduces short-term manipulation
- Round-based accounting — deterministic reward cycles
- Stake-weighted allocation — capital-backed security

## 10. Protocol vs Network Separation

Protocol (On-Chain): bonding/unbonding logic, round transitions, reward issuance, stake attribution.
Network (Off-Chain): job execution, performance, fee generation.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/about/tokenomics.mdx

**Frontmatter:**
- title: LPT Tokenomics
- sidebarTitle: Tokenomics
- description: Formal economic model of LPT issuance, bonding dynamics, reward distribution, and security equilibrium.
- pageType: concept
- keywords: livepeer, lpt, tokenomics, inflation, staking, rewards, bonding rate, economics
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

LPT tokenomics defines how the Livepeer Protocol issues new supply, adjusts inflation relative to security participation, distributes rewards, and maintains a capital-backed security equilibrium. The tokenomics model is implemented at the protocol layer (on-chain) via staking, inflation adjustment logic, and deterministic reward allocation.

## 1. Formal Variables

- S_t = total LPT supply at round t
- B_T = total bonded LPT
- B_i = bonded stake attributed to participant i
- β = bonding rate = B_T / S_t
- β* = target bonding rate
- r_t = inflation rate applied in round t
- α = inflation adjustment coefficient
- c_O = commission rate set by orchestrator O

## 2. Inflation Issuance Model

Per round t, newly minted LPT: R_t = S_t · r_t
Supply update: S_{t+1} = S_t + R_t
Inflation therefore compounds relative to current supply.

## 3. Bonding-Rate Feedback Mechanism

Current bonding rate: β = B_T / S_t

Adjustment rule:
- If β < β*: r_{t+1} = r_t + α  (under-bonded → higher inflation → stronger staking incentive)
- If β > β*: r_{t+1} = r_t − α  (over-bonded → lower inflation → reduced dilution)

The system seeks equilibrium where β ≈ β*.

## 4. Reward Distribution

Economic weight: W_i = B_i / B_T
Allocation to orchestrator O: R_O = R_t · (B_O / B_T)
Delegator D bonded to orchestrator O: R_D,O = R_O (1 - c_O) · (b_D,O / B_O)

## 5. Issuance vs Fee Revenue

Returns to bonded participants:
1. Inflation-based issuance (supply expansion)
2. Fee revenue from video/AI workloads (demand-based)

Total reward: Reward_i = Issuance_i + Fees_i

Inflation is protocol-determined; fees are market-driven.

## 6. Security Equilibrium

Capital required for attack: Capital_attack ≥ θ · B_T

Increasing B_T increases the cost of control. Inflation adjustment encourages equilibrium around a stable security participation rate.

## 7. Economic Tradeoffs

| Mechanism | Tradeoff |
|---|---|
| Dynamic inflation | Stability vs responsiveness |
| Delegated staking | Accessibility vs centralization risk |
| Capital-weighted rewards | Security strength vs wealth concentration |

## 8. Protocol vs Network Separation

Protocol Layer (On-Chain): inflation calculation, bonding rate adjustment, stake accounting, reward minting.
Network Layer (Off-Chain): fee generation from workloads, operational performance, job routing.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/delegation/overview.mdx

**Frontmatter:**
- title: Delegation Overview
- sidebarTitle: Delegation
- description: Protocol-level overview of LPT delegation, including stake attribution, reward flows, and security implications.
- keywords: livepeer, lpt, delegation, staking, bonding, orchestrators, rewards, economics
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: overview
- audience: delegator
- lastVerified: 2026-03-17
- purpose: overview

**Body:**

## Executive Summary

Delegation is the protocol mechanism by which an LPT holder bonds stake and attributes it to an orchestrator, increasing that orchestrator's economic weight without the delegator operating infrastructure.

Delegation is strictly a protocol-layer (on-chain) action. It does not execute jobs, route segments, or control GPU scheduling. Instead, it modifies stake-weighted outcomes: reward allocation, governance weight, and (where applicable) work allocation.

## 1. Formal Definition

Total stake attributed to orchestrator O: B_O = B_self,O + sum(b_D,O)
Total bonded stake: B_T = sum(B_O)

Delegation is an attribution rule over bonded stake recorded in protocol contract state.

## 2. Architectural Context

### 2.1 Protocol Layer Responsibilities

Delegation is implemented by protocol smart contracts that:
- Track bonded stake per address
- Attribute delegator stake to a delegate (orchestrator)
- Allocate inflation and fee entitlements proportionally
- Enforce unbonding delays

### 2.2 Network Layer Responsibilities

The network layer: runs orchestrator software, executes transcoding/AI workloads, produces fees under market demand, maintains uptime and performance characteristics.

## 3. Economic Weight and Security

Orchestrator weight: W_O = B_O / B_T
Security ∝ B_T. Increasing B_T increases the capital cost required to capture stake-weighted outcomes.

## 4. Reward Allocation (Issuance)

Per round t: R_t = S_t · r_t
Orchestrator gross issuance allocation: R_O = R_t · (B_O / B_T)
Delegator net issuance allocation with commission c_O: R_D,O = R_O (1 - c_O) · (b_D,O / B_O)

## 5. Fee Revenue (Demand)

Fees are demand-driven. Total delegator return: Reward_D,O = Issuance_D,O + Fees_D,O

## 6. Delegation as Capital Allocation

Delegation creates an operator market. Delegators allocate stake based on: commission levels, checkpoint reliability, performance reputation, decentralization preferences. Because stake can migrate (subject to unbonding constraints), delegation functions as ongoing capital allocation.

## 7. Liquidity Constraints and Unbonding

Delegation is not instantly reversible. Unbonding introduces a delay measured in protocol rounds. This delay: reduces rapid stake rotation attacks, stabilizes security participation, introduces liquidity constraints for delegators.

State: [*] → Bonded → Unbonding → Withdrawable → [*]

## 8. Risks and Failure Modes

1. Commission risk: c_O reduces net share
2. Checkpoint risk: missed checkpointing reduces realized issuance
3. Slashing exposure: where enabled, stake may be reduced
4. Concentration risk: large B_O increases systemic exposure
5. Liquidity risk: unbonding delay restricts exit

## 9. Protocol vs Network Separation

Protocol (On-Chain): stake attribution, issuance formulas and minting, reward entitlement accounting, governance weight attribution.
Network (Off-Chain): execution of transcoding/AI jobs, uptime and performance, fee generation.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/delegation/about-delegators.mdx

**Frontmatter:**
- title: About Delegators
- sidebarTitle: About Delegators
- description: Formal definition, incentive role, rights/constraints, and risk model for delegators in the Livepeer Protocol.
- pageType: concept
- keywords: livepeer, lpt, delegators, staking, delegation, rewards, governance, risk
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

A **delegator** is an LPT holder who bonds stake and attributes it to an orchestrator. Delegators do not run infrastructure, but they are economically responsible participants: their stake increases protocol security, shapes capital allocation across orchestrators, and contributes stake-weighted governance power.

Delegation is strictly a protocol-layer (on-chain) mechanism.

## 1. Formal Definition

- D: a delegator address
- O: an orchestrator address
- b_D,O: stake bonded by D toward O
- B_self,O: self-bonded stake of O

Total stake attributed to O: B_O = B_self,O + sum(b_D,O)
Total bonded stake: B_T = sum(B_O)

## 2. Architectural Context

### 2.1 Protocol Layer (On-Chain)

Delegators interact with protocol contracts that: track bonded stake per address, attribute stake to a delegate, enforce unbonding delays, allocate issuance and fees, compute stake-weighted governance power.

### 2.2 Network Layer (Off-Chain)

Orchestrators operate node software and infrastructure to execute work. Delegators are economically coupled to operator performance and behavior but do not control execution pathways directly.

## 3. Economic Role

### 3.1 Security Participation

Security ∝ B_T. Delegators increase B_T, raising the economic cost required to capture stake-weighted outcomes.

### 3.2 Capital Allocation

Orchestrator weight: W_O = B_O / B_T. Delegators selecting O increase W_O, affecting issuance allocation and governance influence.

### 3.3 Governance Participation

Voting power: V_i = B_i / B_T. Delegators influence protocol parameter changes, upgrades, and treasury decisions.

## 4. Reward Model (Issuance and Fees)

Per round t: R_t = S_t · r_t
Orchestrator gross issuance: R_O = R_t · (B_O / B_T)
Delegator net issuance with commission c_O: R_D,O = R_O · (1 - c_O) · (b_D,O / B_O)
Delegator total return: Reward_D,O = Issuance_D,O + Fees_D,O

## 5. Rights, Constraints, and Responsibilities

### 5.1 Rights

Delegators can: bond and delegate stake, unbond stake (subject to protocol delay), rebond during unbonding window, withdraw stake after unbonding period, claim/rebond rewards.

### 5.2 Constraints

Delegators cannot: accelerate unbonding beyond protocol-defined delay, guarantee job flow or fee revenue, override orchestrator operational decisions. Delegation is capital exposure without operational control.

### 5.3 Responsibilities (Practical)

Delegators should monitor: commission rate c_O, reward checkpoint consistency, stake concentration and decentralization, governance proposals affecting inflation/security parameters.

## 6. Evaluation Framework for Orchestrator Selection

Utility function: U(O) = f(NetYield_O, Reliability_O, Concentration_O, GovernanceAlignment_O)

Where:
- NetYield_O is reduced by commission c_O
- Reliability_O captures checkpoint consistency and operational stability
- Concentration_O penalizes already-dominant stake share
- GovernanceAlignment_O reflects long-term stewardship preferences

## 7. Risks and Failure Modes

1. Commission risk: higher c_O reduces net returns
2. Checkpoint / realization risk: realized issuance can diverge if checkpointing is not performed
3. Liquidity risk: unbonding delay restricts exit
4. Concentration risk: systemic exposure increases with stake centralization
5. Slashing risk (if enabled): stake may be reduced under defined protocol conditions

## 8. Protocol vs Network Separation

Protocol (On-Chain): bonded stake accounting and attribution, issuance and stake-weighted allocation, unbonding delays, governance voting power.
Network (Off-Chain): job execution and routing, fee generation, operational performance and uptime.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/delegation/delegation-economics.mdx (active file)

**Frontmatter:**
- title: Delegation Economics
- sidebarTitle: Economics
- description: Interim overview of delegation economics and stake-weighted incentives for LPT delegators and orchestrators.
- purpose: concept
- pageType: concept
- keywords: livepeer, lpt, delegation, economics, staking, rewards, orchestrators, delegators
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17

**Body:**

Warning: This page is under active development. For delegation economics detail, see Delegation Overview and Tokenomics.

---

## FILE: v2/lpt/delegation/delegation-guide.mdx

**Frontmatter:**
- title: Delegation Guide
- sidebarTitle: Delegation Guide
- description: Contract-level, step-by-step guide to bonding, delegating, unbonding, rebonding, and verifying LPT delegation on-chain.
- pageType: guide
- keywords: livepeer, lpt, delegation, staking, bonding, unbonding, rewards, guide
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: operations

**Body:**

Info: LPT staking operates on Arbitrum One. If your LPT is on Ethereum mainnet, you must bridge it before staking. Use the Arbitrum Bridge (https://bridge.arbitrum.io) or the Livepeer L2 Migration Tool (https://explorer.livepeer.org/migrate).

## Executive Summary

This guide provides a protocol-accurate, contract-aware walkthrough of delegating LPT. It focuses strictly on-chain mechanics: bonding, stake attribution, reward checkpointing, unbonding, and withdrawal. Delegation modifies protocol state. It does not modify network routing or execution directly.

## 1. Preconditions

Before delegating, a participant must:
1. Hold LPT in a self-custodied wallet.
2. Be connected to the correct deployment network.
3. Understand the unbonding delay and liquidity constraints.

Delegation interacts primarily with the BondingManager contract.

## 2. Step 1 — Approve Token Transfer

The LPT token contract must be approved to transfer the desired bonding amount. Approval does not change bonding state; it only authorizes the staking contract to transfer tokens.

## 3. Step 2 — Bond and Delegate

Call `bond(x, O)` where x = LPT amount, O = chosen orchestrator address.

State transition:
- B_i^new = B_i^old + x
- B_O^new = B_O^old + x
- B_T^new = B_T^old + x

Delegation immediately affects stake attribution for subsequent rounds (subject to protocol timing rules).

## 4. Step 3 — Verify On-Chain State

After bonding, verify: bonded amount for your address, delegate (orchestrator) address attribution, total stake attributed to orchestrator. Delegation must be verifiable via on-chain state, not UI display alone.

## 5. Reward Accrual and Checkpointing

Per round t: R_t = S_t · r_t
Orchestrator allocation: R_O = R_t · (B_O / B_T)
Delegator net allocation: R_D,O = R_O · (1 - c_O) · (b_D,O / B_O)

Rewards may require checkpointing before they are claimable or rebondable.

## 6. Step 4 — Rebond (Optional Compounding)

If reward amount = y: B_i^new = B_i^old + y. Compounding increases future weight W_i = B_i / B_T.

## 7. Step 5 — Initiate Unbonding

To exit delegation, call `unbond(x)`.

State transition:
- B_i^new = B_i^old - x
- B_O^new = B_O^old - x
- B_T^new = B_T^old - x

During unbonding: stake does not earn rewards, stake cannot be immediately withdrawn.

## 8. Unbonding Delay

The protocol enforces a delay measured in rounds. This delay: prevents rapid stake rotation attacks, stabilizes security participation, introduces liquidity risk for delegators.

## 9. Step 6 — Withdraw Stake

After the unbonding period completes, call `withdraw()`. Liquid LPT balance increases. Withdrawal finalizes the exit.

## 10. Risk Review Checklist

Before delegating, evaluate:
1. Commission rate c_O
2. Orchestrator stake concentration
3. Historical checkpoint consistency
4. Governance alignment
5. Liquidity needs (given unbonding delay)

## 11. Protocol vs Network Separation

Protocol (On-Chain): `bond()`, `unbond()`, `withdraw()`, reward allocation, governance voting weight.
Network (Off-Chain): node uptime, job execution, fee generation.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/delegation/getting-started.mdx

**Frontmatter:**
- title: 'Delegating LPT: Getting Started'
- sidebarTitle: Getting Started
- description: How to delegate LPT to an orchestrator, earn rewards, and participate in Livepeer network security - a step-by-step guide for new delegators.
- keywords: livepeer, delegate lpt, staking, delegation, orchestrator, rewards, bonding, livepeer explorer
- og:image: /snippets/assets/site/og-image/fallback.png
- purpose: concept
- pageType: guide
- audience: delegator
- lastVerified: 2026-03-17
- status: current

**Body:**

Delegating LPT means bonding your tokens to an orchestrator on the Livepeer network. In return, you share in the orchestrator's rewards - both inflationary LPT and usage-based ETH fees. Your tokens remain under your control throughout.

## Start here in 5 minutes

- Prereqs: LPT in wallet, small ETH balance on Arbitrum for gas, and a target orchestrator shortlist
- Time: 5 minutes
- Outcome: Wallet connected in Explorer and delegation transaction ready
- First action: Open explorer.livepeer.org, compare Reward Cut/Fee Cut, then initiate bond

## What Is Delegation?

Livepeer uses a delegated proof-of-stake model. Orchestrators (GPU node operators) must bond LPT to participate. Their stake weight determines how much work they receive and how many inflationary rewards they earn. Delegators strengthen orchestrators by adding their stake on top. In exchange, delegators receive a share of the orchestrator's rewards.

Key facts:
- Your LPT stays in the Livepeer BondingManager contract — it is non-custodial
- You can only delegate to one orchestrator at a time
- Unbonding takes approximately 21 hours (one round) before you can withdraw
- Not delegating means your LPT is being diluted by inflation earned by active delegators

Note: If less than ~50% of LPT is bonded, inflation increases to incentivise more delegation. If more than ~50% is bonded, inflation decreases. Unbonded LPT holders miss out on this inflation.

## What You Earn

**Inflationary LPT** — New LPT is minted each round proportional to stake. Orchestrators keep their `rewardCut` percentage and distribute the rest to delegators proportionally.

**ETH Fees** — Gateways pay orchestrators ETH for transcoding and AI inference jobs. Orchestrators keep their `feeShare` cut and distribute the rest to delegators proportionally.

Returns depend on: orchestrator commission settings, performance, network usage levels, and current inflation rate.

## Before You Start

You need:
- LPT tokens in an Ethereum-compatible wallet (MetaMask, Coinbase Wallet, WalletConnect-compatible)
- ETH on Arbitrum One for gas fees (a few cents per transaction)
- LPT bridged to Arbitrum One (Livepeer operates on Arbitrum L2)

## Step-by-Step: How to Delegate

1. **Go to the Livepeer Explorer** — Navigate to explorer.livepeer.org and connect your wallet.

2. **Choose an Orchestrator** — Key metrics to evaluate:
   - Reward Cut — percentage of LPT rewards the orchestrator keeps. Lower means more for delegators.
   - Fee Cut — percentage of ETH fees the orchestrator keeps. Lower means more ETH for delegators.
   - Delegated Stake — Total LPT staked. Higher = more work, but also more competition for rewards.
   - Activation Status — Active orchestrators are in the current round's active set.
   - Performance — Uptime, transcoding success rate, and job completion history.
   - Tip: A low reward cut only matters if the orchestrator is actively earning. Look for consistent uptime and a track record of calling `Reward()` each round.

3. **Approve and Bond LPT** — Click Delegate and enter the amount. Sign two transactions:
   1. Approve — Authorizes the BondingManager contract to transfer your LPT
   2. Bond — Locks your LPT and attributes your stake to the orchestrator

4. **Monitor Your Position** — After bonding, the Explorer shows your delegated position and accumulated (unclaimed) rewards.

5. **Claim Your Earnings** — Rewards accumulate in the BondingManager contract. Call `claimEarnings` to realize them. Not claiming for many rounds does not forfeit rewards but reduces effective yield due to missed compounding.

6. **Unbond (When You Want to Withdraw)**:
   1. Click Undelegate — initiates an unbonding lock
   2. Wait approximately 21 hours (one round thawing period)
   3. Click Withdraw to return LPT to your wallet

## Risk Factors

- **Operator underperformance** — If orchestrator stops calling `Reward()`, you earn no LPT inflation.
- **Slashing** — Currently disabled on Livepeer, but the mechanism exists. Future activation could penalise delegators.
- **Market volatility** — LPT and ETH prices fluctuate.
- **Concentration risk** — Large orchestrators earn more work but distribute rewards across more stake.
- **Unbonding delay** — Stake is locked during the ~21 hour unbonding period.

## Reward Calculation Reference

Your LPT reward per round from inflation:
Your share = Orchestrator's inflation reward × (1 - rewardCut) × (your stake / total orchestrator stake)

Your ETH reward per round from fees:
Your share = Orchestrator's ETH fee revenue × (feeShare) × (your stake / total orchestrator stake)

---

## FILE: v2/lpt/delegation/TO-ADD/overview.mdx

**Frontmatter:**
- title: Delegation Overview
- sidebarTitle: Delegation
- description: What LPT delegation is, what you earn, and what you need to know before bonding your tokens to an orchestrator.
- keywords: livepeer, lpt, delegation, staking, bonding, orchestrators, rewards, arbitrum
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: overview
- audience: delegator
- purpose: overview
- status: current
- lastVerified: 2026-03-13

**Body:**

Delegation is how LPT holders participate in the Livepeer network without running infrastructure. You bond your tokens to an orchestrator, that orchestrator earns more work and more rewards because of your stake, and you receive a share of those rewards in return.

## What you get from delegating

- **LPT inflation rewards** — New LPT is minted each round and distributed to bonded stake. Delegating is the only way to keep pace with network inflation.
- **ETH fee revenue** — Orchestrators earn ETH when they process video or AI jobs. A share of those fees flows to delegators proportional to their stake.
- **Governance weight** — Bonded stake gives you voting power on Livepeer Improvement Proposals (LIPs), protocol upgrades, and treasury decisions.

## What happens if you do not delegate

LPT has a parametric inflation model. When less than roughly 50% of total supply is bonded, the inflation rate rises to encourage more delegation. When more than 50% is bonded, it falls. If you hold LPT but do not delegate, you receive none of this inflation. Every round you stay unbonded, your share of total supply decreases relative to delegators who are earning new tokens.

## Key facts before you start

- **Your tokens stay in a non-custodial contract** — Your LPT moves into the Livepeer BondingManager smart contract on Arbitrum One. The orchestrator cannot access or move your LPT.
- **LPT must be on Arbitrum One** — Livepeer's staking protocol runs on Arbitrum One, not Ethereum mainnet.
- **You can only delegate to one orchestrator at a time** — Your full bonded stake is attributed to a single orchestrator. To change orchestrators, redelegate (instant) or unbond and re-bond (slower).
- **Unbonding is not instant** — There is a protocol-enforced waiting period before you can withdraw.
- **You are not responsible for orchestrator performance** — If your orchestrator underperforms or stops earning, you stop earning — but your stake is not at risk from their performance. Slashing is currently disabled on Livepeer mainnet.

## In this section

- Delegation Economics — How inflation works, what rewardCut and feeShare mean, and a worked example of what you can expect to earn.
- Choose an Orchestrator — The step-by-step guide to evaluating orchestrators, selecting one, and completing the delegation transaction.
- Manage Your Delegation — Claiming rewards, compounding, switching orchestrators, and exiting your position.
- Bridge LPT to Arbitrum — If your LPT is on Ethereum mainnet, start here.

---

## FILE: v2/lpt/delegation/TO-ADD/choose-a-delegate.mdx

**Frontmatter:**
- title: Choose an Orchestrator and Delegate
- sidebarTitle: Choose a Delegate
- description: How to evaluate Livepeer orchestrators, pick one that fits your goals, and complete the delegation transaction on Arbitrum One.
- keywords: livepeer, delegate lpt, staking, orchestrator selection, rewardCut, feeShare, reward call, bonding, livepeer explorer, arbitrum
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: guide
- audience: delegator
- purpose: guide
- status: current
- lastVerified: 2026-03-13

**Body:**

Choosing an orchestrator is the most consequential decision you make as a delegator. A well-run orchestrator with consistent reward calls and fair commission settings earns you meaningful returns. A poorly run one — even one with a 0% commission — can earn you nothing if they never call `Reward()`.

Info: LPT staking runs on Arbitrum One. If your LPT is on Ethereum mainnet, bridge it before starting.

## Researched delegation vs blind delegation

| | Researched delegation | Blind delegation |
|---|---|---|
| Commission rate | Verified and contextualised | Taken at face value |
| Reward call history | Checked over 30+ rounds | Unknown |
| Active set status | Confirmed | Assumed |
| Stake concentration | Considered | Ignored |
| Expected return | Estimated with reasonable confidence | Unpredictable |
| Time to evaluate | 15 minutes | 2 minutes |

## Before you start

You need: LPT on Arbitrum One, a small amount of ETH on Arbitrum One for gas, a compatible wallet.

## Step 1: Open the Livepeer Explorer

Navigate to explorer.livepeer.org and connect your wallet. The top 100 orchestrators by bonded stake form the active set — the only orchestrators eligible to earn rewards in the current round.

Tip: Filter or sort by "Active" first. Delegating to an inactive orchestrator means your stake earns nothing until they enter the active set.

The active set: The Livepeer protocol selects the top 100 orchestrators by total bonded stake at the start of each round. Only these 100 earn inflation rewards or are routed jobs that round.

## Step 2: Check the reward call history

This is the single most important signal. Before looking at commission rates, find out how reliably the orchestrator calls `Reward()` each round.

What you are looking for:
- **Strong signal:** Called reward 30 of last 30 rounds
- **Acceptable:** Occasional missed rounds due to temporary downtime
- **Reject:** Called reward 15 of last 30 rounds, or multiple consecutive missed rounds

Why missed reward calls hurt you: Each missed reward call means zero LPT inflation is distributed for that round to any delegator. A 0% rewardCut orchestrator who calls reward 20 of 30 rounds delivers the same effective yield as a 33% rewardCut orchestrator who calls every round.

Why orchestrators miss reward calls: Reward calls require a small ETH balance to pay Arbitrum gas. Other causes include node downtime, misconfiguration, or an operator going inactive. A one-off miss is different from a structural problem.

Does an uncalled round mean rewards are lost forever? Yes. If an orchestrator does not call `Reward()` in a round, the inflation that would have been minted is simply not minted. It cannot be recovered retroactively.

## Step 3: Evaluate commission settings

### rewardCut (LPT inflation commission)

The percentage of LPT inflation rewards the orchestrator keeps. Lower is better for delegators. Most competitive orchestrators sit between 0% and 20%.

### feeShare (ETH fee distribution)

The percentage of ETH fee revenue the orchestrator passes to delegators. Higher is better for delegators.

Warning: These two parameters move in opposite directions. For rewardCut, lower is better. For feeShare, higher is better.

Orchestrators can change their commission settings at any time, effective from the next round.

## Step 4: Check stake concentration

An orchestrator with a very large share of total network stake earns proportionally more per round, but you share those earnings with a proportionally larger pool. From a network health perspective, delegating to smaller, reliable orchestrators is better for decentralisation.

Practical heuristic: Orchestrators outside the top 10 by stake are generally a better choice for network health. Avoid orchestrators who are only just inside the active set threshold.

## Step 5: Consider alignment and longevity

- How long has the orchestrator been active? 12+ months with consistent reward calls is lower risk.
- Do they have a public identity and community presence?
- Have they participated in governance? On-chain voting history is visible on the Explorer.
- Do they have an active Discord or social presence?

## Orchestrator selection: summary checklist

Before moving to the delegation step, confirm:
- [ ] Orchestrator is in the active set (top 100 by bonded stake)
- [ ] Reward call history: 28+ of last 30 rounds called
- [ ] rewardCut is competitive (typically below 20%)
- [ ] feeShare is meaningful (above 50% if ETH fees matter to you)
- [ ] Orchestrator has been active for a reasonable period
- [ ] Stake share is not so large that they dominate the network

## Step 6: Delegate

The delegation transaction:
1. Go to the orchestrator's profile page in the Explorer. Confirm status shows Active.
2. Click Delegate. Enter the amount of LPT to bond.
3. Sign the Approve transaction — authorises the BondingManager to transfer your LPT. Gas: a few cents on Arbitrum.
4. Sign the Bond transaction — executes the delegation. Gas: a few cents on Arbitrum.
5. Verify your delegation — in the Explorer, navigate to your account page. You should see your bonded balance, the orchestrator address, and your pending rewards.

## What happens next

Your stake is now bonded. Rewards accumulate automatically each round when your orchestrator calls `Reward()`. You will need to claim them to compound or withdraw.

## Frequently asked questions

- Can I delegate to more than one orchestrator? Not from a single address.
- What if my orchestrator leaves the active set? Redelegate to an active orchestrator.
- Can I add more LPT to my existing delegation? Yes, call `bond()` again.
- Can I change orchestrators without unbonding? Yes, redelegate at any time.
- How much ETH do I need for gas? Well under $0.10 on Arbitrum One.
- I delegated but see no rewards yet — is something wrong? Wait until the following round; check orchestrator's reward call history.
- Is there any risk of losing my LPT? Slashing exists in the protocol but is currently disabled on mainnet.

---

## FILE: v2/lpt/delegation/TO-ADD/delegation-rewards.mdx

**Frontmatter:**
- title: Delegation Economics
- sidebarTitle: Economics
- description: How LPT inflation works, what rewardCut and feeShare mean, and how to estimate what you can expect to earn from delegating.
- keywords: livepeer, lpt, delegation, economics, staking, rewards, inflation, rewardCut, feeShare, orchestrators, delegators
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: concept
- audience: delegator
- purpose: concept
- status: current
- lastVerified: 2026-03-13

**Body:**

Delegating LPT earns you two things: a share of newly minted LPT (inflation rewards) and a share of the ETH the orchestrator earns from processing jobs (fee revenue). Understanding how both are calculated helps you evaluate orchestrators meaningfully rather than just picking the lowest commission number.

## LPT inflation rewards

### Where new LPT comes from

Each protocol round, the BondingManager contract mints new LPT and distributes it proportionally to all bonded stake. The target participation rate is approximately 50% of circulating supply bonded. If the bonding ratio falls below that target, the inflation rate increases each round. If it rises above, the inflation rate decreases.

In plain terms: if you hold LPT but do not delegate, active delegators receive your share of the newly minted supply.

Note: As of March 2026, 10% of each round's issuance is diverted to the Livepeer Treasury under LIP-89. The remaining 90% is distributed to orchestrators and their delegators.

### How much you earn: the formula

Your LPT reward per round:
R_delegator = R_round × 0.9 × (B_O / B_T) × (1 - c_O) × (b_D / B_O)

Where:
- R_round = total LPT minted that round
- 0.9 = accounts for the 10% treasury diversion (LIP-89)
- B_O = total stake bonded to your orchestrator
- B_T = total bonded stake across the whole network
- c_O = the orchestrator's `rewardCut`
- b_D = your bonded stake

### Worked example

- Total LPT minted this round: 1,000 LPT
- Treasury takes 10%: 100 LPT
- Delegator-accessible issuance: 900 LPT
- Your orchestrator holds 5% of total bonded stake: 45 LPT goes to your orchestrator's pool
- Orchestrator rewardCut is 10%: orchestrator keeps 4.5 LPT
- Delegators in your orchestrator's pool share 40.5 LPT
- You hold 10% of your orchestrator's total stake
- **Your reward: 4.05 LPT this round**

## ETH fee revenue

### Where ETH fees come from

Gateways pay orchestrators in ETH for processing video transcoding and AI inference jobs using a probabilistic micropayment system (PM tickets). Fee revenue is demand-driven and varies with network usage. It is not guaranteed.

### The feeShare parameter

Orchestrators set a `feeShare` value: the fraction of their ETH fee earnings they pass to delegators. A higher feeShare means more ETH for delegators.

Warning: The Explorer UI displays this as "Fee Share" — the percentage of fees distributed to delegators. For feeShare, higher is better for delegators. For rewardCut, lower is better for delegators.

Your ETH reward per round:
F_delegator = F_O × f_O × (b_D / B_O)

Where:
- F_O = total ETH fee revenue earned by your orchestrator that round
- f_O = the orchestrator's `feeShare`
- b_D = your bonded stake
- B_O = total stake bonded to that orchestrator

## rewardCut and feeShare: plain English summary

| Parameter | What it controls | Good for delegators |
|---|---|---|
| `rewardCut` | % of LPT inflation the orchestrator keeps | Lower is better |
| `feeShare` | % of ETH fees passed to delegators | Higher is better |

Commission settings alone do not determine your returns. An orchestrator with a 0% rewardCut who never calls `Reward()` earns you nothing.

## The reward call: why it matters

Each round, an active orchestrator must call the `Reward()` function on-chain. If an orchestrator does not call `Reward()` in a given round, no rewards are minted for that round's stake. Missing reward calls directly reduces your actual yield versus theoretical yield.

## Combined yield

The Livepeer Explorer calculates an estimated combined annual yield that factors in both LPT inflation and ETH fee revenue. This figure is an estimate. Actual returns depend on: current inflation rate, orchestrator's fee revenue, whether orchestrator calls `Reward()` every round, changes to commission settings.

## How rewards accrue

Rewards accumulate in the BondingManager contract against your bonded balance. To realise them, you call `claimEarnings`. You can then:
- **Rebond them** (compound): adds them to your bonded stake, increasing future rewards
- **Withdraw them**: initiates an unbonding lock before they can leave the contract

## What affects your returns in practice

- Inflation rate changes every round
- Your orchestrator's commission can change at any time
- Fee revenue is not guaranteed
- Stake concentration affects your share

References:
- https://github.com/livepeer/explorer/blob/main/lib/roi.ts
- https://github.com/livepeer/LIPs (LIP-89)
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/delegation/TO-ADD/delegation-management.mdx

**Frontmatter:**
- title: Manage Your Delegation
- sidebarTitle: Manage
- description: How to claim rewards, compound your position, switch orchestrators, and fully exit delegation on Livepeer.
- keywords: livepeer, lpt, delegation, claim earnings, compounding, unbonding, withdraw, redelegate, orchestrator, rewards
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: guide
- audience: delegator
- purpose: operational
- status: current
- lastVerified: 2026-03-13

**Body:**

Once you have delegated, your LPT is actively earning on your behalf. This page covers how to manage your position: checking performance, claiming and compounding rewards, moving to a different orchestrator, and exiting when you are ready.

## How rewards accumulate

You do not need to do anything for rewards to accrue. Each round, when your orchestrator calls `Reward()`, the BondingManager contract updates the reward accounting for all delegators in that orchestrator's pool. Your pending reward balance increases automatically. These rewards sit in the contract against your account — they are not in your wallet yet.

Note: If your orchestrator does not call `Reward()` in a round, no rewards are distributed for that round.

## Claim your earnings

Claiming earnings is the action that moves accrued rewards into your bonded balance.

From the Explorer:
1. Go to explorer.livepeer.org and connect your wallet
2. Navigate to your account page
3. Click Claim Earnings
4. Sign the transaction (small Arbitrum gas cost)

After claiming, your bonded balance increases by the claimed amount.

### How often should you claim?

The protocol supports claiming rewards accumulated over many rounds in a single transaction. You do not forfeit rewards by waiting. That said, unclaimed rewards do not compound. Some orchestrators run automated bots that call `claimEarnings` on behalf of their delegators.

## Compound: rebond your rewards

Rebonding adds your claimed earnings back to your bonded balance. This compounds your position: a larger bonded stake earns a larger share of each future round's rewards. For long-term delegators, the effect compounds over time, particularly during periods of higher inflation. On Arbitrum One, gas cost per claim transaction is negligible (a few cents).

## Switch orchestrators

If your orchestrator's performance changes — missed reward calls, a commission increase, dropping out of the active set — you can redelegate to a different orchestrator without going through the unbonding process.

How to redelegate:
1. Go to explorer.livepeer.org and connect your wallet
2. Find the new orchestrator
3. Click Delegate on their profile
4. The transaction changes your stake attribution from your current orchestrator to the new one
5. Sign the transaction

Redelegation takes effect in the next round. There is no waiting period.

Warning: Claim any pending earnings before redelegating.

### When to switch

- Your orchestrator starts missing `Reward()` calls consistently (2+ consecutive missed rounds)
- Your orchestrator raises their commission to an unacceptable level
- Your orchestrator drops out of the active set
- You want to support a smaller or more recently active orchestrator

## Unbond and withdraw

When you want to fully exit delegation and return your LPT to your wallet, you go through a two-step process: initiate unbonding, then withdraw after the waiting period.

State flow: [*] → Bonded (bond()) → Unbonding (unbond()) → Withdrawable (after delay) → [*] (withdrawStake()) → Bonded (rebond())

Step 1: Initiate unbonding
1. Go to explorer.livepeer.org and connect your wallet
2. Navigate to your account page
3. Click Undelegate (or Unbond)
4. Enter the amount to unbond — you can unbond a partial amount
5. Sign the transaction

Your stake enters the unbonding state. It no longer earns rewards from this point.

Note on unbonding period: REVIEW needed — getting-started.mdx states "approximately 21 hours (one round)" while historical protocol documentation states 7 rounds (~7 days). Verify against current BondingManager `unbondingPeriod` parameter before publishing.

Step 2: Wait for the unbonding period. You can cancel unbonding and rebond if you change your mind — this returns your stake to bonded status without needing a new approval and bond cycle.

Step 3: Withdraw. Once the unbonding period completes, your stake moves to a withdrawable state. Return to your account in the Explorer and click Withdraw. This sends your LPT back to your connected wallet.

## Monitor your position

The Livepeer Explorer account page shows: your current bonded balance, pending unclaimed earnings, your orchestrator's current stats, historical reward accrual.

Signals to watch for:
- Your orchestrator's reward call rate drops (below 25/30 rounds — investigate)
- Your orchestrator raises their commission
- Your orchestrator drops out of the active set
- A governance proposal that affects your returns

## Governance

Your bonded LPT gives you voting weight on Livepeer Improvement Proposals. Governance decisions include inflation parameter changes, treasury allocations, protocol upgrades, and active set size. Voting happens through the Explorer. To vote, connect your wallet and sign a transaction.

## Frequently asked questions

- Do I lose pending rewards if I redelegate? No. Pending unclaimed rewards are tracked against your account, not your orchestrator. Claim before redelegating as a precaution.
- Can I unbond while still earning rewards? The moment you call `unbond()`, your stake exits the earning state.
- Can I rebond during the unbonding period? Yes. `rebond()` returns your stake to bonded status attributed to the last orchestrator.
- Can I partially unbond? Yes. The unbonded portion enters the waiting period while the remainder stays bonded.
- What happens to my delegation if I bridge my LPT back to Ethereum mainnet? You must unbond and withdraw on Arbitrum One before bridging.
- Is there a minimum delegation amount? No protocol-enforced minimum. Very small delegations earn returns smaller than the gas cost of claiming.

---

## FILE: v2/lpt/governance/overview.mdx

**Frontmatter:**
- title: Livepeer Governance Overview
- sidebarTitle: Governance
- description: Architectural and economic overview of stake-weighted governance in the Livepeer Protocol.
- keywords: livepeer, lpt, governance, voting, LIPs, SPE, proposals
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: overview
- audience: delegator
- lastVerified: 2026-03-17
- purpose: overview

**Body:**

## Executive Summary

Livepeer governance is a stake-weighted, on-chain decision system that controls protocol parameter updates, contract upgrades (where upgradeable), and treasury allocations. Governance authority derives exclusively from bonded LPT. It operates at the protocol layer (on-chain) and modifies economic and contractual rules that constrain the network layer.

Note: For Foundation structure, SPE process steps, and community governance participation guidance, see Governance & the Foundation.

## 1. Formal Definition

Voting power: V_i = B_i / B_T

Governance is a capital-weighted decision system over bonded stake. Only bonded stake contributes to voting weight.

## 2. Governance Scope

Governance may modify:
1. Inflation parameters (e.g., adjustment coefficient, target bonding rate)
2. Contract implementations (via upgrade patterns where enabled)
3. Treasury disbursements
4. Protocol configuration constants

Governance does NOT directly control: GPU scheduling, job routing, gateway pricing strategies, off-chain operational behavior.

## 3. Hybrid On-Chain/Off-Chain Model

Livepeer uses a hybrid on-chain/off-chain governance model. Off-chain processes allow the community to debate and refine ideas. On-chain votes then bind those ideas into protocol upgrades or fund allocations.

### Livepeer Improvement Proposals (LIPs)

LIPs are structured documents hosted on GitHub that specify technical changes, parameter adjustments or governance processes — similar to Ethereum's EIPs.

LIP lifecycle:
1. **Idea & discussion** — Anyone can raise an idea on the Livepeer forum or Discord.
2. **Special-Purpose Entity formation** — Complex ideas often result in the formation of a Special-Purpose Entity (SPE): a working group of community members who scope the problem, research alternatives, produce specifications and estimate resource requirements.
3. **Drafting & staking requirement** — Proposers must have at least 100 LPT bonded on-chain to submit a LIP.
4. **Formal review & revision** — The LIP is reviewed by the community, core developers and the Livepeer Foundation. The review period typically lasts at least two weeks.
5. **Snapshot signalling** — Before moving on-chain, proposers may conduct a Snapshot vote (off-chain token-weighted poll) to gauge sentiment.
6. **On-chain vote** — The LIP is submitted to the governance smart contract for a binding vote. If quorum and majority thresholds are met, the proposal is queued for execution.

## 4. Voting Mechanics

Total voting power cast: V_cast = sum(B_i for i in voters)

A proposal passes if it satisfies quorum and majority thresholds as defined in governance contract logic.

## 5. Governance as Security Layer

Minimum capital required: Capital_control ≥ θ · B_T

Security ∝ B_T.

## 6. Architectural Context

Governance logic interacts with contracts responsible for: proposal creation, vote casting and tallying, timelock enforcement, execution of approved proposals.

## 7. Protocol vs Network Separation

Protocol (On-Chain): proposal creation, vote casting and tallying, parameter updates, contract upgrades, treasury execution.
Network (Off-Chain): node operation, workload execution, routing and pricing.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses
- https://github.com/livepeer/LIPs

---

## FILE: v2/lpt/governance/model.mdx

**Frontmatter:**
- title: Livepeer Governance Model
- sidebarTitle: Model
- description: Formal model of stake-weighted governance, quorum mechanics, voting thresholds, timelock execution, and attack surface analysis.
- pageType: concept
- keywords: livepeer, lpt, governance, model, quorum, voting, timelock, security
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

Livepeer governance is a capital-weighted, proposal-based system enforced entirely by smart contracts. Authority is proportional to bonded stake, and execution is deterministic once quorum and threshold conditions are met.

## 1. Governance Primitives

Voting power: V_i = B_i / B_T. All governance weight is derived from bonded stake.

## 2. Proposal Lifecycle

Deterministic phases:
1. Creation — proposal submitted with encoded actions
2. Voting Delay — period before voting opens
3. Voting Period — bonded participants cast votes
4. Quorum Check — minimum participation requirement
5. Threshold Check — majority condition
6. Queue (Timelock) — execution delay
7. Execution — state transition if conditions met

## 3. Quorum Requirement

Quorum condition: V_cast ≥ Q · B_T

At least 33% of all staked LPT must participate in the vote for it to be valid.

## 4. Majority / Threshold Condition

Majority condition (simple majority): V_for > V_against

More than 50% of participating votes must favour the proposal.

## 5. Timelock Semantics

Approved proposals enter a timelock period before execution. Properties: introduces delay between approval and execution, provides opportunity for stakeholder reaction, reduces sudden-parameter-change risk.

## 6. Execution Model

If quorum and threshold conditions are satisfied and timelock has elapsed: encoded actions are executed, contract state transitions deterministically. Execution may include: parameter modification, proxy implementation updates, treasury transfers. Execution is atomic per proposal.

## 7. Governance Objects and Contract Architecture

- Governor — proposal and voting logic
- LivepeerGovernor (proxy/target) — upgradeable governor implementation
- BondingVotes — stake-weighted voting power tracking
- Treasury — governance-controlled funds

## 8. Treasury Parameters

| Parameter | Description |
|---|---|
| `treasuryRewardCutRate` | Percentage cut of inflationary rewards routed into the treasury each round (currently ~10%) |
| `treasuryBalanceCeiling` | Once treasury balance exceeds 750,000 LPT, the cut can be set to zero |

## 9. Security and Game-Theoretic Considerations

Capital required for control: Capital_control ≥ θ · B_T

**Stake Concentration Risk:** If a small number of addresses control a large fraction of B_T, governance capture risk increases.

**Voter Apathy Risk:** If quorum fraction Q is high relative to typical participation, proposals may fail. If Q is low, small coordinated groups may pass proposals.

**Executor Centralisation:** The security committee/protocol owners invoke functions to set values per vote outcome. This introduces a trust dependency.

## 10. Risks to Governance Capture

1. Low participation and voting power concentration
2. Executor centralisation — security committee dependency
3. Slashing disabled — reduces system's ability to impose automatic economic penalties

## 11. Governance State Machine

[*] → Created → VotingDelay → VotingPeriod → QuorumCheck → (Failed if quorum not met) → ThresholdCheck → (Failed if threshold not met) → Timelock → Executed

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses
- https://github.com/livepeer/LIPs

---

## FILE: v2/lpt/governance/processes.mdx

**Frontmatter:**
- title: Livepeer Governance Processes
- sidebarTitle: Processes
- description: End-to-end governance process lifecycle including off-chain signaling, LIP drafting, on-chain proposal execution, and treasury coordination.
- pageType: concept
- keywords: livepeer, lpt, governance, processes, voting, LIPs, treasury, proposals
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

Livepeer governance consists of both off-chain coordination processes and on-chain execution logic. While voting and parameter enforcement are handled by smart contracts, proposal formation, review, and social consensus-building occur off-chain.

## 1. Governance Lifecycle Overview

Governance unfolds in two coordinated domains:
1. Off-Chain Process Layer (discussion, drafting, signaling)
2. On-Chain Execution Layer (proposal submission, voting, execution)

## 2. Off-Chain Process Layer

### 2.1 Idea Formation

Governance typically begins with: identification of protocol parameter inefficiency, security model adjustments, economic misalignment, treasury allocation needs, contract upgrade requirements.

### 2.2 Livepeer Improvement Proposals (LIPs)

A LIP formalizes protocol changes. A LIP generally includes: motivation, technical specification, economic impact analysis, security considerations, backward compatibility analysis.

### 2.3 Social Signaling and Feedback

Before on-chain submission, proposals typically undergo: community discussion, technical review, risk assessment, stakeholder signaling.

## 3. On-Chain Voting Rules

### 3.1 Quorum

At least **33%** of all staked LPT must participate in the vote.

### 3.2 Approval Threshold

More than **50%** of participating votes must favour the proposal.

### 3.3 Voting Power

V_i = B_i / B_T

Delegators exercise governance indirectly by delegating to orchestrators whose values align with their own; orchestrators can cast votes accordingly.

## 4. On-Chain Execution Layer

### 4.1 Proposal Submission

A formal governance proposal encodes executable contract actions. Proposal payload may include: parameter updates, contract implementation upgrades, treasury transfers.

### How to Vote

1. Hold Bonded LPT — only bonded LPT has governance voting power
2. Find Active Proposals — navigate to explorer.livepeer.org/voting
3. Connect Your Wallet — must be on Arbitrum One network
4. Cast Your Vote — select Yes, No, or Abstain
5. Monitor Execution — if quorum (33%) and majority (>50%) are met, the proposal enters a timelock queue and executes automatically after the delay period

### 4.4 Timelock Queue

Approved proposals enter a timelock period. Properties: delay between approval and execution, risk mitigation against sudden parameter shifts, allows participants to assess consequences.

### 4.5 Execution

If conditions are met and timelock expires: encoded actions execute atomically, contract state changes, treasury transfers occur if included. Execution is irreversible at the transaction level.

## 5. Treasury Coordination

Treasury allocations follow the same governance lifecycle: off-chain proposal discussion → on-chain encoded treasury action → voting and quorum → timelock → execution.

## 6. Livepeer Foundation and Treasury Stewardship

The Livepeer Foundation, incorporated as a neutral nonprofit in 2025, stewards the protocol's long-term health.

| Responsibility | Description |
|---|---|
| Protocol maintenance | Maintaining and upgrading smart contracts, reference implementations, and SDKs |
| Research and standards | Funding research into verifiable transcoding, zero-knowledge proofs, and new codecs |
| Grant programmes | Managing the community treasury to fund builders, tooling, and documentation |
| Ecosystem advocacy | Representing Livepeer in regulatory discussions and engaging with blockchain communities |

Despite its coordinating role, the Foundation is not a central authority. Treasury disbursements, major protocol changes and long-term roadmaps require approval via LIPs.

## 7. Risk Mitigation and Process Safeguards

### 7.1 Multi-Stage Review

Separation of social review (off-chain) and deterministic execution (on-chain) reduces accidental or malicious parameter changes.

### 7.2 Transparency

All votes and execution transactions are publicly verifiable on-chain.

### 7.3 Parameter Calibration

Quorum Q and timelock duration T_delay are governance-level security parameters.
- If Q is too low: small coalitions may pass proposals
- If Q is too high: governance stagnation may occur

## 8. Considerations and Potential Improvements

The community has discussed: dynamic quorum, conviction voting, quadratic voting. Livepeer's governance has not yet adopted these mechanisms.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses
- https://github.com/livepeer/LIPs
- https://forum.livepeer.org

---

## FILE: v2/lpt/treasury/overview.mdx

**Frontmatter:**
- title: Treasury Overview
- sidebarTitle: Overview
- description: Formal model of the Livepeer Treasury as a governance-controlled protocol asset allocator.
- keywords: livepeer, lpt, treasury, governance, grants, funding, ecosystem
- og:image: /snippets/assets/site/og-image/fallback.png
- pageType: overview
- audience: delegator
- lastVerified: 2026-03-17
- purpose: overview

**Body:**

## Executive Summary

The Livepeer Treasury is the governance-controlled pool of protocol-managed assets used to fund ecosystem development, security research, infrastructure support, and other strategically aligned allocations. Treasury control is enforced at the protocol layer (on-chain) through governance execution.

## Using the Treasury

Embedded resource: "Using the Livepeer Community Treasury" — https://paragraph.com/@livepeer-2/using-the-livepeer-community-treasury

## 1. Formal Definition

- T = treasury balance
- A_k = allocation amount executed by proposal k

Treasury balance update after allocation k: T' = T - A_k
Over n allocations: T_n = T_0 - sum(A_k for k=1 to n)

## 2. Architectural Context

### 2.1 Protocol Layer

At the protocol layer: governance contracts authorize allocations, execution contracts perform transfers, on-chain state is the source of truth.

### 2.2 Network Layer

At the network layer, treasury-funded initiatives may affect: orchestrator adoption, developer tooling, ecosystem applications.

## 3. Treasury Purpose and Economic Rationale

A protocol treasury exists to:
1. Fund public goods aligned with protocol growth
2. Reduce underinvestment in shared infrastructure
3. Support long-horizon research and development
4. Provide mechanism for strategic ecosystem interventions

## 4. Treasury Governance Model

Voting power: V_i = B_i / B_T. The treasury inherits governance security properties.

## 5. Security Model

Treasury security depends on: total bonded stake B_T, stake distribution (concentration), quorum and timelock configuration.

Capital required to control outcomes: Capital_control ≥ θ · B_T

## 6. Risks and Failure Modes

- Governance capture — stake concentration
- Low participation — quorum risk
- Mis-specified calldata — execution failure
- Misaligned incentives — allocation inefficiency

## 7. Protocol vs Network Separation

Protocol (On-Chain): treasury custody and execution, governance authorization, deterministic on-chain transfers.
Network (Off-Chain): allocation recipients execute work, ecosystem growth effects, operational delivery.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/treasury/allocations.mdx

**Frontmatter:**
- title: Treasury Allocations
- sidebarTitle: Allocations
- description: Allocation design, accounting model, evaluation framework, and verification/audit approach for governance-authorized treasury spending.
- pageType: concept
- keywords: livepeer, treasury, allocations, governance, grants, funding, accountability
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

A treasury allocation is a governance-authorized on-chain action that transfers protocol-controlled assets to a recipient for a defined purpose. Allocations are enforced deterministically by smart contracts, but their real-world outcomes depend on off-chain delivery by recipients.

## 1. Formal Allocation Model

Single allocation update: T' = T - A_k
Over n allocations: T_n = T_0 - sum(A_k for k=1 to n)

## 2. Allocation Taxonomy

1. Ecosystem Development — applications, integrations, SDKs
2. Protocol R&D — security research, audits, economic modeling
3. Infrastructure Support — operator tooling, monitoring, reliability improvements
4. Community Programs — education, onboarding, documentation, events
5. Strategic Interventions — bootstrapping demand or supply where markets underprovide

## 3. Evaluation Framework

Allocation proposal k with expected outcome function:
Outcome_k = g(Impact_k, Feasibility_k, Risk_k, Alignment_k)

Decision function: Score_k = w1 · Impact_k + w2 · Feasibility_k - w3 · Risk_k + w4 · Alignment_k

### 3.1 Impact
Measures expected improvement to: increased network demand (fees), improved operator participation (bonding), strengthened security posture.

### 3.2 Feasibility
Assesses execution likelihood given: technical scope, team capability, delivery timeline.

### 3.3 Risk
Captures: execution risk, adversarial risk, opportunity cost.

### 3.4 Alignment
Ensures outcomes strengthen protocol-level objectives instead of private value capture.

## 4. Governance Security Model

Capital required for control: Capital_control ≥ θ · B_T

## 5. Failure Modes and Risks

### 5.1 Protocol-Level Failures
- calldata errors
- insufficient treasury balance
- target contract reverts

### 5.2 Governance-Level Failures
- capture by concentrated stake
- low quorum / low participation
- rushed proposals with insufficient review

### 5.3 Outcome-Level Failures
- recipients may fail to deliver
- outcomes may be unverifiable
- incentives may misalign

Treasury can enforce transfer, not performance.

## 6. Verification and Audit Model

### 6.1 On-Chain Verification (Deterministic)
Confirm: proposal executed successfully, transfers occurred, recipient address matches intended target, treasury balance decreased by A_k.

### 6.2 Off-Chain Outcome Verification (Non-Deterministic)
Requires: milestone reporting, public deliverables (code, docs, deployments), reproducible evidence of impact.

## 7. Protocol vs Network Separation

Protocol (On-Chain): allocation authorization and execution, deterministic transfers, on-chain audit trail.
Network/Off-Chain: recipient delivery, ecosystem impact, outcome measurement.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/treasury/proposals.mdx

**Frontmatter:**
- title: Treasury Proposals
- sidebarTitle: Proposals
- description: Formal structure and execution semantics of treasury proposals as governance-authorized on-chain actions.
- pageType: concept
- keywords: livepeer, lpt, treasury, proposals, governance, grants, execution
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: concept

**Body:**

## Executive Summary

A treasury proposal is a governance proposal whose executable payload authorizes an on-chain treasury action (typically a transfer, grant, or contract call). Once quorum and thresholds are met and the timelock expires, the encoded actions execute deterministically.

### How to Submit a Proposal

1. Start with a Discussion — post on the Livepeer Forum (https://forum.livepeer.org) in the Governance category. Gather community feedback before going on-chain.
2. Draft a LIP — formalise as a Livepeer Improvement Proposal (LIP) in the livepeer/LIPs repository. Include motivation, technical specification, and economic impact.
3. Submit On-Chain — use the Livepeer Explorer (https://explorer.livepeer.org) to submit the proposal on-chain. The encoded calldata determines what executes if the proposal passes.
4. Voting Period — token holders vote during the designated window. Quorum: 33% of bonded LPT must participate. Threshold: >50% for votes must be in favour.
5. Timelock and Execution — approved proposals enter a timelock period before automatic execution. Monitor status at explorer.livepeer.org/treasury.

## 1. Formal Definition

A treasury proposal P is a tuple of executable actions: P = {a_1, a_2, ..., a_n}

Each action a_k is defined as: a_k = (Target_k, Value_k, Data_k)

Where:
- Target is the contract or address called
- Value is the native token amount attached (if any)
- Data is ABI-encoded calldata specifying the function selector and arguments

## 2. Governance Authorization

Voting power: V_i = B_i / B_T
Quorum condition: V_cast ≥ Q · B_T
Threshold condition: V_for > V_against

## 3. Timelock Queue Semantics

Once approved, the proposal is queued in a timelock for a delay T_delay. Timelock provides: predictable execution window, reaction time for stakeholders, mitigation against sudden or malicious changes.

## 4. Execution Semantics

After timelock expiry:
1. Determinism: execution is strictly defined by calldata
2. Atomicity: if any action reverts, the transaction reverts

## 5. Treasury Transfer as Canonical Case

If treasury balance is T and allocation amount is A: T' = T - A. Recipient balance increases by A.

## 6. Failure Modes

### 6.1 Calldata Error — incorrect function selector or malformed ABI encoding
### 6.2 Insufficient Treasury Balance — transfer amount exceeds treasury holdings
### 6.3 Target Contract Revert — the called contract rejects the call
### 6.4 Asset Transfer Semantics — some token contracts may return false instead of reverting, apply transfer fees, or enforce allowlists
### 6.5 Timelock Configuration — if misconfigured, proposals may become unexecutable

## 7. Risk Mitigation Checklist

Before submitting a treasury proposal:
1. Verify target addresses and contracts via registry
2. Confirm ABI encoding is correct
3. Confirm treasury balance is sufficient
4. Simulate execution where possible
5. Ensure calldata is auditable and minimally scoped

## 8. Protocol vs Network Separation

Protocol (On-Chain): proposal payload definition, vote tally and authorization, timelock queue, deterministic execution, treasury transfers.
Network (Off-Chain): drafting and review, grant delivery and operational execution by recipients.

References:
- https://github.com/livepeer/protocol
- https://docs.livepeer.org/references/contract-addresses

---

## FILE: v2/lpt/resources/lpt-eth-usage.mdx

**Frontmatter:**
- title: LPT & ETH Token Functions
- sidebarTitle: Protocol Token Flows
- description: What the LPT & ETH Tokens are used for in the Livepeer Protocol
- purpose: reference
- pageType: reference
- keywords: livepeer, delegators, token resources, lpt eth usage, token, functions, tokens, protocol
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17

**Body:**

Note (in-page author comment): "This is wild to me that Gateways do not use LPT to pay orchestrators. Need to dig into the why more"

### Payment Layers

The Livepeer Protocol uses two distinct currencies for different purposes:

| Currency | Purpose | Used By |
|---|---|---|
| ETH/Wei | Service payments (transcoding, AI) | Gateways → Orchestrators |
| LPT | Staking, governance, rewards | Orchestrators, Delegators |

The separation is intentional: ETH handles actual service payments while LPT handles protocol governance and staking. This design keeps service costs predictable in a stable currency while allowing LPT to serve its governance function.

**Price Configuration:** Prices can be specified in wei or converted from fiat currencies. Supports: "1000", "0.50USD", "1.5EUR" etc. Converts to wei for actual payments.

## ETH Payments

Gateways pay for transcoding and AI processing services using ETH (Ethereum), not Livepeer tokens (LPT). The payment system is built on Ethereum's currency.

---

## FILE: v2/lpt/resources/exchanges.mdx

**Frontmatter:**
- title: Exchanges with LPT Listed
- sidebarTitle: LPT Exchanges
- description: A list of exchanges where the Livepeer Token (LPT) is listed. Note: this information is fetched from Coingecko weekly
- pageType: reference
- keywords: livepeer, delegators, token resources, lpt exchanges, exchanges, listed, where
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17
- purpose: reference

**Body:**

Note: This (will be) a dynamic automation to fetch all exchanges that list LPT. It is generated via an n8n pipeline with data from Coingecko's API: GET `coingecko.com/api/v3/coins/livepeer`. Currently a static pull.

Last Updated: 2025-12-15 | Data sourced from CoinGecko (https://www.coingecko.com/en/coins/livepeer)

Trust Score Legend: High (green) | Medium (yellow) | Low (red) | Unknown (white)

## Centralized Exchanges (CEX) — Selected listings (by 24h volume, USD)

| Exchange | Trading Pairs | 24h Volume (USD) | Trust |
|---|---|---|---|
| HTX | USDT | $1.34M | High |
| Binance | USDT, TRY, USDC, BTC, JPY... | $675.33K | High |
| Hotcoin | USDT | $600.50K | High |
| Pionex | USDT | $424.31K | High |
| BTSE | USDT | $406.39K | High |
| WhiteBIT | USDT, USDC | $345.86K | High |
| Websea | USDT | $322.56K | Low |
| CoinW | USDT | $243.08K | High |
| CoinTR | TRY, USDT | $219.20K | High |
| OKX | USDT, USD | $214.09K | High |
| BitDelta | USDT | $212.56K | High |
| BTCC | USDT | $199.95K | Low |
| Toobit | USDT | $196.23K | Medium |
| Biconomy.com | USDT | $195.91K | High |
| Bitvavo | EUR | $185.10K | High |
| Coinstore | USDT | $172.32K | High |
| Tapbit | USDT | $171.79K | High |
| LBank | USDT | $170.82K | High |
| OrangeX | USDT | $158.30K | Medium |
| Gate | USDT | $153.09K | Medium |
| BloFin | USDT | $149.85K | Medium |
| Upbit | KRW | $143.72K | Unknown |
| MEXC | USDT | $139.87K | High |
| KCEX | USDT | $133.87K | Medium |
| GroveX | USDT | $123.67K | High |
| Azbit | USDT | $122.01K | Medium |
| Bithumb | KRW | $110.48K | Unknown |
| Coinbase Exchange | USD | $99.58K | Medium |

(File contains additional CEX and DEX listings not fully reproduced here — full raw content in source file at v2/lpt/resources/exchanges.mdx)

---

## FILE: v2/lpt/resources/delegator-videos-and-blogs.mdx

**Frontmatter:**
- title: Delegator Videos and Blogs
- sidebarTitle: Videos & Blogs
- description: Curated video and blog resources for delegators: staking tutorials, LPT delegation guides, and official links.
- purpose: reference
- pageType: reference
- keywords: livepeer, delegators, LPT, staking, video, tutorial, blogs, delegate
- og:image: /snippets/assets/site/og-image/fallback.png
- audience: delegator
- lastVerified: 2026-03-17

**Body:**

This page lists existing video and blog content that can help delegators stake LPT and use the Livepeer Explorer.

## Video content

| Asset | Where | Notes |
|---|---|---|
| Livepeer Staking in 10 minutes | YouTube - @LivepeerProject: https://www.youtube.com/watch?v=6nZrZHz12-g | Covers staking basics; official channel. Verify upload date and that the UI matches the current Explorer. |
| Four-step video tutorial (how to delegate LPT) | Embedded in the CoinMonks Medium guide below | Part of "Complete Guide to Becoming a Delegator" (May 2024). |

## Blogs (delegator-focused or with delegator sections)

| Source | Title / URL | Recency / notes |
|---|---|---|
| Medium (CoinMonks) | How to Stake your LPT Tokens with Livepeer: https://medium.com/coinmonks/how-to-stake-your-lpt-tokens-with-livepeer-the-complete-guide-to-become-a-delegator-d8f5477d287d | May 11, 2024 — Includes four-step video; multiple languages. |
| Livepeer Blog | blog.livepeer.org — e.g. "Why Delegation Still Matters in a Low Inflation Environment" | Official; explains delegation in current inflation context. |
| Medium (Stake Capital) | Livepeer Delegation Tutorial: https://medium.com/stakecapital/livepeer-delegation-tutorial-f7673cc888db | Third-party; stake/delegate flow. |
| Medium (Figment) | Livepeer Staking Delegation Guide: https://medium.com/figment/livepeer-delegation-guide-517e2d64792e | Third-party; delegation steps. |
| Figment (site) | Livepeer: Staking Guide: https://www.figment.io/insights/livepeer-staking-delegation-guide-2/ | Staking/delegation overview. |
| Staked | Livepeer (LPT) Staking Guide: https://blog.staked.us/blog/livepeer-lpt-staking-guide | Non-custodial delegation, rewards. |
| DeFiCrypto.dev | How to Delegate LPT on Livepeer on Arbitrum: https://deficrypto.dev/how-to-delegate-lpt-livepeer-arbitrum/ | Arbitrum-specific delegate steps. |
| Medium (Livepeer) | An overview of the Livepeer network and LPT: https://medium.com/livepeer-blog/an-overview-of-the-livepeer-network-and-lpt-44985f9321ff | Network/LPT context. |
| Medium (Livepeer) | An Updated Livepeer Explorer is Now Live: https://medium.com/livepeer-blog/an-updated-livepeer-explorer-is-now-live-1c10c599cf28 | June 2022; Explorer features for delegators. |
| Koinx | How to Stake Livepeer: https://www.koinx.com/staking-guides/how-to-stake-livepeer | Steps: get LPT, connect wallet (Arbitrum), pick orchestrator, delegate. |

## Official delegator destinations

- Delegate landing: https://www.livepeer.org/delegate
- Delegators hub: https://livepeer.org/delegators
- Explorer (orchestrators/stake): https://explorer.livepeer.org/
- L2 migration (delegators): https://explorer.livepeer.org/migrate
- Docs: https://docs.livepeer.org
- Resources: https://livepeer.org/resources — Hubble, Scout Analytics, Livepool

---

## FILE: v2/lpt/resources/compendium/glossary.mdx

**Frontmatter:**
- title: LPT Token Glossary
- sidebarTitle: Glossary
- description: 'Key terms for the Livepeer Token (LPT) — staking, delegation, inflation, governance, treasury, and tokenomics.'
- keywords: livepeer, glossary, lpt, terminology, staking, tokenomics, governance
- audience: everyone
- pageType: reference
- pageVariant: compendium
- purpose: reference
- status: draft
- lastVerified: '2026-03'
- og:image: /snippets/assets/site/og-image/fallback.png

**Body:**

Definitions for LPT token holders and stakers — covering staking, delegation, inflation, governance, treasury, and the smart contracts that power the Livepeer protocol.

Machine-readable term index: glossary-data.json

### Glossary Terms (searchable table)

| Term | Category | Definition |
|---|---|---|
| Active Set | livepeer:protocol | The top 100 orchestrators ranked by total bonded stake that are eligible to receive work and earn rewards each round. |
| Active Set Election | livepeer:protocol | The process at the start of each round that selects the top 100 orchestrators by total bonded stake to form the Active Set eligible to receive work. |
| AI Inference | ai:concept | Running a trained machine learning model on new input data to produce predictions or generated outputs. |
| AI Inference (Network Work Type) | ai:concept, livepeer:protocol | Running trained AI models as the newer category of on-network compute work alongside transcoding, with orchestrators earning ETH fees for completed inference jobs. |
| Arbitrum One | web3:chain | A Layer 2 Optimistic Rollup that settles to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security guarantees. |
| Atomic Execution | web3:governance | A guarantee that a set of on-chain operations either all succeed or none execute, preventing partial state changes. |
| Bonding | web3:tokenomics | The act of locking (staking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system. |
| Bonded Stake | web3:tokenomics | The total amount of LPT currently locked across the network through active bonding relationships between delegators and orchestrators. |
| Bonding Rate (beta) | economic:reward, web3:tokenomics | The ratio of total bonded LPT to total token supply; Livepeer targets a 50% participation rate. |
| Bonding Rate Target | web3:tokenomics | The 50% threshold used by the inflation model as the reference point to determine whether per-round issuance should increase or decrease. |
| BondingManager | livepeer:contract | The core Livepeer smart contract managing all bonding, delegation, stake accounting, and fund ownership logic. |
| BondingVotes | livepeer:contract, web3:governance | The Livepeer smart contract that tracks historical stake snapshots for governance, enabling stake-weighted voting power to be calculated at any past checkpoint. |
| Bridge | web3:concept | Infrastructure connecting two blockchain ecosystems that enables token and information transfer between them. |
| Bridging | web3:concept | The process of moving LPT tokens between Ethereum L1 and Arbitrum L2 using the canonical bridge contracts. |
| Capital-backed Sybil Resistance | web3:tokenomics | A security mechanism where staking capital is required to participate, making Sybil attacks economically costly. |
| Capital Efficiency | web3:tokenomics | The degree to which staked capital generates productive returns through protocol inflation rewards, ETH fees, or work allocation. |
| Checkpoint | livepeer:protocol | An on-chain snapshot of stake state recorded by the BondingVotes contract, used as the reference point for governance voting power calculations. |
| Claim Earnings | livepeer:protocol | The on-chain action a delegator or orchestrator takes to collect accumulated inflationary LPT rewards and ETH fees. |
| Commission Rate | economic:reward | The combined percentage of inflationary rewards and ETH fees that an orchestrator retains before distributing the remainder to delegators. |
| Community Treasury | economic:treasury | The on-chain fund governed by LPT stakeholders via LivepeerGovernor, funded by a governable percentage of per-round inflation. |
| Concentration Risk | web3:tokenomics | The risk arising when a disproportionate share of total bonded stake is held by a small number of orchestrators, reducing network decentralization and resilience. |
| Delegation | web3:tokenomics | The act of LPT holders staking their tokens toward orchestrators they trust, sharing proportionally in rewards without running any infrastructure themselves. |
| Delegation Model | livepeer:protocol, web3:tokenomics | Livepeer's delegated proof-of-stake system in which token holders choose orchestrators to delegate stake to, earning rewards without running infrastructure. |
| Delegator | livepeer:role, web3:tokenomics | A token holder who bonds LPT to an orchestrator in order to secure the network, earn a share of rewards and fees, and participate in on-chain governance. |
| Dilution | economic:reward, web3:tokenomics | The reduction in proportional ownership experienced by non-staking token holders when new LPT is minted each round through inflation. |
| Dilution Protection | web3:tokenomics, economic:reward | The benefit that active stakers receive by bonding — inflationary rewards accrue only to bonded participants, stakers maintain their proportional ownership while non-stakers are diluted. |
| Economic Weight | web3:tokenomics | An orchestrator's total active bonded stake, which determines their proportional share of inflationary rewards and their probability of being selected for job routing. |
| ETH Fees | economic:payment | Ether paid by gateways to orchestrators as compensation for completed transcoding or AI inference work, distributed to delegators after the fee cut. |
| Fee Cut | economic:reward | The percentage of ETH fees earned from work that an orchestrator retains before distributing the remainder to their delegators. |
| Fee Pool | economic:payment | The accumulated ETH fees earned by an orchestrator from completed work in a given round, split between the orchestrator and their delegators. |
| Fee Share | economic:reward | The portion of ETH fees earned by an orchestrator that is distributed to delegators proportionally to their bonded stake. |
| Fee Switch | economic:treasury | A governance-controlled mechanism that enables or adjusts the redirection of protocol fees to the community treasury or other designated destinations. |
| Gateway | livepeer:role | A protocol node that submits jobs to the network, routes work to orchestrators, manages payment flows, and serves as the interface between applications and the Livepeer Protocol. |
| Genesis Supply | economic:reward | The initial 10 million LPT tokens created at protocol launch and distributed via the Merkle Mine mechanism. |
| Governance | web3:governance | The on-chain system of rules and processes by which LPT stakeholders make decisions about protocol changes, treasury spending, and parameter updates through token-weighted voting. |
| Governance Forum | operational:governance | The Forum's governance category at forum.livepeer.org where LIPs, pre-proposals, and protocol governance discussions take place before on-chain voting. |
| Governor | livepeer:contract, web3:governance | The Livepeer smart contract that executes approved governance proposals after a Timelock delay, enforcing parameter changes and treasury spending on-chain. |
| Inflation | livepeer:protocol, economic:reward, web3:tokenomics | The dynamic issuance of new LPT each round, distributed to active orchestrators and delegators proportional to their bonded stake. |
| Inflation Adjustment (alpha) | web3:tokenomics | The fixed per-round rate (0.00005%) by which the inflation rate increases or decreases based on whether the current Bonding Rate is below or above the Target Bonding Rate. |
| Inflation Model | web3:tokenomics, economic:reward | Livepeer's algorithmic mechanism that adjusts the per-round LPT issuance rate dynamically based on the gap between the current Bonding Rate and the 50% Target Bonding Rate. |
| Inflation Rate | economic:reward | The per-round percentage of the total LPT supply that is newly minted and distributed to active orchestrators and delegators. |
| Inflationary Rewards | economic:reward | Newly minted LPT tokens distributed each round proportionally to active orchestrators and their delegators based on bonded stake. |
| Issuance | web3:tokenomics | The minting of new LPT tokens each round as the mechanism for distributing inflationary rewards to protocol participants. |
| L1 Escrow | livepeer:contract, web3:chain | The Ethereum mainnet contract that holds LPT in escrow during cross-chain bridging to Arbitrum, locking L1 tokens as L2 equivalents are minted on Arbitrum. |
| L2LPTGateway | livepeer:contract, web3:chain | The bridge contract deployed on Arbitrum that enables LPT token transfers between Ethereum L1 and Arbitrum L2. |
| LIP (Livepeer Improvement Proposal) | livepeer:protocol, operational:governance | A formal design document proposing changes to the Livepeer protocol, governance, or ecosystem, analogous to Ethereum's EIP process. |
| Liquidity Risk | web3:tokenomics | The risk that bonded LPT tokens cannot be quickly converted to liquid assets due to the mandatory unbonding period before withdrawal. |
| Livepeer Explorer | livepeer:tool | The official Livepeer protocol explorer for viewing on-chain state including orchestrator information, staking data, delegator positions, and governance proposals. |
| Livepeer Foundation | livepeer:entity | The non-profit Cayman Islands Foundation Company that stewards Livepeer's long-term vision, ecosystem growth, grant programs, and core protocol development. |
| LivepeerGovernor | livepeer:contract, web3:governance | The OpenZeppelin-based on-chain governor contract for Livepeer that enables stake-weighted voting on protocol proposals using checkpointed BondingVotes data. |
| LPT (Livepeer Token) | livepeer:protocol, web3:token | The ERC-20 governance and staking token used to coordinate, incentivize, and secure the Livepeer Network; staked LPT determines orchestrator selection, work allocation, and reward distribution. |
| Merkle Mine | web3:concept | Livepeer's decentralized token distribution algorithm used at genesis, where eligible Ethereum addresses could claim LPT by submitting Merkle proofs. |
| Minter | livepeer:contract | The Livepeer smart contract responsible for minting new LPT tokens during reward calls and for holding ETH accumulated from winning probabilistic micropayment tickets. |
| Non-custodial | web3:concept | A staking model in which users retain control of their private keys and token ownership while their LPT is bonded. |
| On-chain Treasury | livepeer:protocol, economic:treasury | A smart-contract-governed pool of LPT funded by a percentage of inflation and disbursed through community-approved governance proposals for ecosystem development. |
| Operator Market | livepeer:protocol | The competitive ecosystem of orchestrators offering differentiated services to gateways and delegators, distinguished by price, performance, reliability, and commission rates. |
| Orchestrator | livepeer:role | A supply-side operator that contributes GPU resources, receives jobs from gateways, performs transcoding or AI inference, earns ETH fees, and distributes inflationary LPT rewards to their delegators. |
| Payment Ticket | livepeer:protocol, economic:payment | A signed off-chain data structure sent from a gateway to an orchestrator representing a probabilistic payment redeemable on-chain for ETH if it is a winning ticket. |
| Pending Rewards | economic:reward | Inflationary LPT and ETH fees that have been earned through staking but not yet claimed by calling the claim earnings function. |
| Per Round | livepeer:economics | The Livepeer protocol's fundamental time unit, approximately equal to one day of Ethereum blocks; reward minting, activations, and delegator earnings accrue on a per-round basis. |
| Price Per Pixel | economic:pricing | The fundamental pricing unit for Livepeer transcoding work, expressed as the cost in wei for processing one pixel of video. |
| Proof-of-Stake | web3:concept | A blockchain consensus mechanism where validators stake cryptocurrency as collateral to propose and validate blocks. |
| Proposer Bond | web3:governance, economic:treasury | The minimum bonded LPT balance (100 LPT) required to submit a formal on-chain governance proposal. |
| Quadratic Funding | economic:treasury | A public goods funding mechanism where matching funds amplify small individual contributions so that projects with broad community support receive disproportionately larger allocations. |
| Quorum | livepeer:protocol, web3:governance, operational:governance | The minimum percentage of total participating bonded stake required for a governance vote to produce a binding result. |
| Rebond | web3:tokenomics | The action of moving bonded LPT stake from one orchestrator to a different orchestrator without going through the unbonding thawing period. |
| Retroactive Funding | economic:treasury | A funding model that rewards past contributions or completed projects based on demonstrated impact. |
| Reward Call | livepeer:protocol, economic:reward | The on-chain transaction that an active orchestrator must submit each round to mint the round's inflationary LPT allocation and distribute it to themselves and their delegators. |
| Reward Calling | livepeer:protocol, economic:reward | The operational practice of regularly submitting the reward transaction on-chain each round to mint and distribute inflationary LPT. |
| Reward Cut | economic:reward | The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder proportionally to their delegators. |
| Round | livepeer:protocol | A discrete time interval measured in Ethereum/Arbitrum blocks during which staking rewards are calculated, active sets are determined, and protocol state advances. |
| RoundsManager | livepeer:contract | The Livepeer smart contract that tracks round progression, stores the current round number, and coordinates round-based protocol state transitions. |
| Slashing | livepeer:protocol, economic:reward, web3:tokenomics | A penalty mechanism that destroys a portion of an orchestrator's bonded LPT stake as punishment for protocol violations. |
| SPE (Special Purpose Entity) | livepeer:entity, operational:governance | A treasury-funded organizational unit with a defined scope, budget, and accountability period, used to execute specific ecosystem development tasks. |
| Stake | web3:tokenomics | LPT bonded to an orchestrator through the protocol, representing a commitment that secures the network and determines the holder's proportional share of rewards and governance power. |
| Stake-Weighted | livepeer:governance | A mechanism where each participant's voting power, reward allocation, or selection probability is proportional to their staked token balance rather than equal per-participant. |
| Stake-Weighted Voting | web3:governance | A governance voting system in which each participant's vote counts in proportion to their total bonded LPT stake rather than one-address-one-vote. |
| Staking | web3:tokenomics, economic:reward | The act of locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn inflationary rewards and fee income. |
| Supply | web3:tokenomics | The total number of LPT tokens in existence at any given time, starting from a genesis supply of 10 million and growing continuously through inflationary issuance. |
| Target Bonding Rate | web3:tokenomics | The 50% participation threshold for the ratio of bonded LPT to total supply; the inflation mechanism adjusts the per-round issuance rate to push toward this target. |
| Thawing Period | livepeer:protocol | The mandatory waiting period of approximately 7 rounds after initiating an unbond before the freed LPT becomes withdrawable to the holder's wallet. |
| Timelock | web3:governance | A smart contract mechanism that enforces a mandatory delay between when a governance proposal passes and when it can be executed on-chain. |
| Token Distribution | web3:tokenomics | The allocation and dispersal of LPT tokens across founders, team, investors, and the public through mechanisms including the Merkle Mine, vesting schedules, and inflationary issuance. |
| Tokenomics | web3:tokenomics | The economic design of the LPT token system encompassing total supply, genesis distribution, inflation schedule, staking incentives, governance rights, and deflationary mechanisms. |
| Transcoding | video:processing | The direct digital-to-digital conversion of video from one encoding format to another, producing multiple adaptive renditions for cross-device delivery. |
| Treasury | economic:treasury | The on-chain pool of LPT and ETH held in protocol smart contracts for funding public goods, SPEs, grants, and ecosystem development through community governance. |
| Treasury Allocation | economic:treasury | A governance-approved distribution of treasury funds to a specific proposal, SPE, or grant recipient. |
| Treasury Governance | economic:treasury, web3:governance | The on-chain process by which LPT stakeholders propose, vote on, and execute allocation of community treasury funds for ecosystem development. |
| Treasury Reward Cut Rate | economic:treasury | The governable percentage of per-round inflationary LPT that is diverted to the community treasury instead of being distributed directly to orchestrators and delegators. |
| Unbonding | web3:tokenomics | The process by which a delegator or orchestrator initiates withdrawal of bonded LPT from the protocol, triggering the mandatory thawing period before tokens become liquid. |
| USD (United States Dollar) | economic:currency | The official currency of the United States; used as the reference denomination for Livepeer gateway fees, grant amounts, treasury allocations, and market data. |
| USDT (Tether) | web3:token | A US-dollar-pegged ERC-20 stablecoin; available on some centralised exchanges as a trading pair for LPT. |
| veLPT (Vote-Escrowed LPT) | economic:treasury, web3:governance | A proposed mechanism that would allow LPT holders to lock tokens for an extended period in exchange for enhanced governance voting power. |
| Vesting | web3:tokenomics, economic:reward | A schedule controlling when token allocations become available over time, often with an initial cliff period followed by pro-rata release. |
| Vote Detachment | web3:governance, operational:governance | The ability for a delegator to override their orchestrator's governance vote with their own individual stake-weighted vote on a specific proposal. |
| Voting Power | livepeer:protocol, web3:governance | The weight of a participant's vote in Livepeer on-chain governance, determined by their total bonded LPT stake at the block when the proposal was created. |
| Wei | web3:token | The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in Livepeer for precise on-chain price calculations. |
| Yield | economic:reward | The annualized return on staked LPT expressed as a percentage, combining inflationary LPT rewards and any ETH fee share earned through the bonded orchestrator. |

### Extended definitions (Accordion groups in source)

The source file includes detailed accordion-grouped definitions for the following term categories, with context, status, and related pages for each term:

**Livepeer Protocol Terms:** Active Set, Active Set Election, Checkpoint, Claim Earnings, Delegation Model, Inflation, LIP, LPT (Livepeer Token), On-chain Treasury, Operator Market, Payment Ticket, Per Round, Quorum, Reward Call, Reward Calling, Round, Slashing, Thawing Period, Voting Power.

**Livepeer Contracts:** BondingManager, BondingVotes, Governor, L1 Escrow, L2LPTGateway, LivepeerGovernor, Minter, RoundsManager.

**Livepeer Roles and Entities:** Delegator, Gateway, Livepeer Explorer, Livepeer Foundation, Orchestrator, SPE (Special Purpose Entity).

**Tokenomics and Staking Terms:** Bonding, Bonded Stake, Bonding Rate, Bonding Rate Target, Capital-backed Sybil Resistance, Capital Efficiency, Concentration Risk, Delegation, Dilution, Dilution Protection, Economic Weight, Issuance, Liquidity Risk, Non-custodial, Rebond, Stake, Staking, Supply, Target Bonding Rate, Token Distribution, Tokenomics, Unbonding, Vesting.

**Economic and Reward Terms:** Commission Rate, ETH Fees, Fee Cut, Fee Pool, Fee Share, Fee Switch, Genesis Supply, Inflationary Rewards, Inflation Adjustment (alpha), Inflation Model, Inflation Rate, Pending Rewards, Price Per Pixel, Proposer Bond, Quadratic Funding, Retroactive Funding, Reward Cut, Treasury Allocation, Treasury Governance, Treasury Reward Cut Rate, Yield.

**Governance Terms:** Atomic Execution, Governance, Governance Forum, Governor, Proof-of-Stake, Quorum, Stake-Weighted, Stake-Weighted Voting, Timelock, veLPT, Vote Detachment.

**Web3 / Chain Terms:** Arbitrum One, Bridge, Bridging, L1 Escrow, L2LPTGateway, Merkle Mine, Non-custodial, Wei, USDT.

---

*End of collated content — 25 files from v2/lpt/**
