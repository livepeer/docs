---
CONTEXT PACK: About V1 Content
Source: _dep-docs/about/ and _dep-docs/home/about-livepeer/
Generated: 2026-03-23
Total files: 41
---

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/index.mdx
---
---
title: About Index
sidebarTitle: About Index
description: Generated table of contents for docs pages under v2/about.
keywords:
  - livepeer
  - generated index
  - table of contents
  - v2/about
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: overview
---

{/*
generated-file-banner: generated-file-banner:v1
Generation Script: tools/scripts/generate-pages-index.js
Purpose: Table-of-contents index for v2 docs folders.
Run when: v2 docs pages are added, removed, or renamed.
Run command: node tools/scripts/generate-pages-index.js --write
*/}

<Note>
**Generation Script**: This file is generated from script(s): `tools/scripts/generate-pages-index.js`. <br/>
**Purpose**: Table-of-contents index for v2 docs folders. <br/>
**Run when**: v2 docs pages are added, removed, or renamed. <br/>
**Important**: Do not manually edit this file; run `node tools/scripts/generate-pages-index.js --write`. <br/>
</Note>

# Table of contents

- [Livepeer Core Concepts](core-concepts.mdx)
- [⚠️ FAQ](faq-about.mdx)
- [Livepeer Overview](livepeer-overview.mdx)
- [The Livepeer Stack and Mental Model](mental-model.mdx)
- [About Livepeer: Protocol & Network](portal.mdx)

## Core Concepts

### Concepts
- [⚠️ Livepeer Actors](core-concepts/concepts/actors.mdx)

## Livepeer Network
- [Actors Overview](livepeer-network/actors.mdx)
- [⚠️ Livepeer Demand Side](livepeer-network/demand-side.mdx)
- [⚠️ Livepeer Fee Flow](livepeer-network/fee-flow.mdx)
- [Network Interfaces](livepeer-network/interfaces.mdx)
- [Livepeer Job Lifecycle](livepeer-network/job-lifecycle.mdx)
- [Livepeer Marketplace](livepeer-network/marketplace.mdx)
- [Livepeer Network Overview](livepeer-network/overview.mdx)
- [⚠️ Livepeer Scaling](livepeer-network/scaling.mdx)
- [⚠️ Livepeer Supply Side](livepeer-network/supply-side.mdx)
- [Network Technical Architecture](livepeer-network/technical-architecture.mdx)

### Livepeer Actors
- [⚠️ Delegators](livepeer-network/livepeer-actors/delegators.mdx)
- [⚠️ Builders and End Users](livepeer-network/livepeer-actors/end-users.mdx)
- [⚠️ Gateways](livepeer-network/livepeer-actors/gateways.mdx)
- [⚠️ Orchestrators](livepeer-network/livepeer-actors/orchestrators.mdx)

## Livepeer Protocol
- [Core Mechanisms and Functions](livepeer-protocol/core-mechanisms.mdx)
- [Livepeer Protocol Economics](livepeer-protocol/economics.mdx)
- [Livepeer Governance Model](livepeer-protocol/governance-model.mdx)
- [Livepeer Token](livepeer-protocol/livepeer-token.mdx)
- [Protocol Overview](livepeer-protocol/overview.mdx)
- [Technical Overview](livepeer-protocol/technical-architecture.mdx)
- [Livepeer Treasury](livepeer-protocol/treasury.mdx)

## Resources
- [Blockchain Contracts](resources/blockchain-contracts.mdx)
- [⚠️ Gateways Vs. Orchestrators: What's the Difference?](resources/gateways-vs-orchestrators.mdx)
- [Livepeer Glossary](resources/livepeer-glossary.mdx)
- [Livepeer Whitepaper](resources/livepeer-whitepaper.mdx)
- [Technical Roadmap](resources/technical-roadmap.mdx)

## X Deprecated
- [⚠️ Livepeer Governance](x-deprecated/livepeer-governance.mdx)
- [⚠️ Livepeer Token Economics](x-deprecated/livepeer-token-economics.mdx)

### Livepeer Protocol
- [⚠️ Technical Overview](x-deprecated/livepeer-protocol/technical-overview.mdx)

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/core-concepts.mdx
---
---
title: Livepeer Core Concepts
sidebarTitle: Livepeer Core Concepts
description: >-
  A high-level introduction to the key concepts and architecture of the Livepeer
  Real-time AI & Video Network
keywords:
  - livepeer
  - about
  - core concepts
  - livepeer core concepts
  - introduction
  - key
  - architecture
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: concept
---

import Protocol from "/snippets/pages/01_ABOUT/concepts/protocol.mdx"
import Network from "/snippets/pages/01_ABOUT/concepts/network.mdx"
import Actors from "/snippets/pages/01_ABOUT/concepts/actors.mdx"

### Overview and separation

Livepeer is designed as a modular video/AI network anchored by a minimal on‑chain protocol. The protocol manages assets and incentives on Ethereum, while the off‑chain network performs the heavy lifting of transcoding and AI processing. Official documents clearly separate these domains:

On‑chain protocol – smart contracts hold ETH deposits from broadcasters and orchestrators; mint and distribute LPT staking tokens; issue probabilistic payment tickets; enforce staking, slashing and reward rules; and manage governance. The protocol does not transcode video or run AI. Its role is to coordinate payments and maintain trustless state.

Off‑chain network – orchestrator nodes run Livepeer software to perform transcoding and AI workloads. They compete on price, quality and latency. Video/AI jobs and routing happen entirely off‑chain. Services like Livepeer Studio and community gateways sit on top of this layer.

Bridge – broadcasters deposit ETH into the protocol and send probabilistic tickets with each segment. Orchestrators redeem winning tickets on‑chain for ETH fees, while the work itself is delivered off‑chain. LPT is not used to pay for services; it is only used for staking, delegation and governance.

These boundaries ensure that the protocol remains lightweight and censorship‑resistant. Any proposed change must respect this separation-heavy compute must remain off‑chain, while financial rules and governance reside on‑chainU

{/* <Frame> */}
  <Tabs>
    <Tab title="Overview">
      <Overview />
    </Tab>
    <Tab title="Protocol">
      <Protocol />
    </Tab>
    <Tab title="Network">
      <Network />
    </Tab>
    <Tab title="Actors">
      <Actors />
    </Tab>

  </Tabs>
{/* </Frame> */}

### Definitions

**Livepeer Protocol**

The protocol is the ruleset + on-chain logic governing:

**Livepeer Network**

The network is the actual running system of machines performing work:

**Livepeer Actors**

A Livepeer actor is any role or entity that participates in the Livepeer protocol or network and performs actions defined by the system.


# Overview

Livepeer is a full-stack platform for video streaming & AI. The video streaming software is underpinned by a network of actors that perform the work needed to compute, transcode & orchestrate video & AI jobs in the Livepeer network.

The Livepeer Protocol is the underlying code that enforces the mechanisms and rules to ensure the reliability, cooperation and coordination of these decentralised actors.

# Core Concepts

## Livepeer Protocol

The protocol is the ruleset + on-chain logic governing:

- staking
- delegation
- inflation & rewards
- orchestrator selection
- slashing
- probabilistic payments
- verification rules

The economic and coordination layer that enforces correct behavior.

## Livepeer Network

The network is the actual running system of machines performing work:

- Orchestrators (GPU nodes)
- Transcoders / Workers
- Gateways
- Broadcasters
- Verification processes
- Job routing
- Real-time AI & video compute

It is the live, operational decentralized GPU mesh running video + AI jobs.

## Protocol vs Network

| Layer                 | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| **Livepeer Protocol** | On-chain crypto-economic incentives & coordination; staking; payments.        |
| **Livepeer Network**  | Off-chain nodes performing real-time work (transcoding, inference, routing).  |
| **Relationship**      | The network _runs_ the compute; the protocol _governs, secures, and pays_ it. |


# On-chain vs Off-chain

Livepeer protocol = Arbitrum One (L2)
Livepeer token (LPT) = Ethereum mainnet (L1)
Livepeer network (GPU nodes + gateways) = off-chain execution layer

# Livepeer Actors

A Livepeer actor is any role or entity that participates in the Livepeer protocol or network and performs actions defined by the system.
In Livepeer architecture, "actor" is a formal category used to describe participants with distinct responsibilities, incentives, and interactions.
Actors are fundamental to describing how the network functions end-to-end from a systems engineering perspective.

Livepeer's ecosystem involves both protocol actors (on-chain roles) and community actors (network participants and builders)

<Note>INSERT LIVEPEER ACTOR DIAGRAM HERE \[THIS ONE LOOKS OLD (whitpaper)</Note>

<Note>Actor diagram placeholder removed pending final approved asset.</Note>

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/faq-about.mdx
---
---
title: FAQ
sidebarTitle: FAQ
description: Frequently Asked Questions
keywords:
  - livepeer
  - about
  - faq about
  - frequently
  - asked
  - questions
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: reference
---

Good. This is the right moment to fix the IA instead of patching content.

Below is a **clean IA-aligned master document** that:

* Clearly separates **Protocol** vs **Network**
* Adds a **Product-Forward WHY section** at the top of the Protocol
* Aligns exactly with your proposed page groups
* Suggests a refined structure (including a few additions)
* Clarifies what belongs where
* Removes legacy terminology bleed
* Keeps 2026 accuracy and scope

This is a **structural + content blueprint** you can now split into MDX pages.

---

# ✅ Proposed IA (Refined + Clean Separation)

## GROUP 1: About Livepeer

(Conceptual foundation. No implementation detail.)

* About Portal
* Livepeer Overview
* Core Concepts
* Mental Model

No changes needed here.

---

# GROUP 2: Livepeer Protocol (On-Chain, Economic, Governance Layer)

This is the **credibly neutral coordination layer**.

It does NOT:

* Route jobs
* Define AI pipelines
* Transport video
* Manage GPUs

It DOES:

* Secure the network
* Allocate rewards
* Enforce staking
* Govern upgrades
* Penalize dishonesty

---

# 📘 `v2/about/livepeer-protocol/overview`

## Livepeer Protocol - Product & Design Philosophy (NEW STRUCTURE)

This page should be product-forward.

## 1. Why the Protocol Exists (Product-Forward)

### The Core Problem

Video and AI inference require:

* High GPU availability
* Real-time reliability
* Economic incentives for uptime
* Permissionless participation
* Credible neutrality

Centralized providers:

* Control pricing
* Can censor workloads
* Own the coordination layer

Livepeer separates:

* **Compute execution (off-chain)**
* **Economic coordination (on-chain)**

The protocol exists to solve:

> How do you coordinate thousands of GPU operators without trusting a company?

---

## 2. Design Principles (WHY Decisions Were Made)

### 🔐 1. Stake as Security (Why LPT exists)

Instead of reputation systems:

* Stake creates measurable economic risk.
* Slashing deters fraud.
* Delegation decentralizes security.

Why not proof-of-work?

* Wasteful.
* Not aligned with service quality.

Why not permissioned operators?

* Kills neutrality.
* Limits scale.

---

### 🔄 2. Inflation Instead of Fixed Supply

Why dynamic inflation?

* Bootstraps early participation.
* Adapts to bonding rate.
* Encourages minimum 50% stake participation.

Without inflation:

* Early security would be weak.
* Delegation would be unattractive.

---

### 🎟 3. Probabilistic Payments

Why not pay per segment?

* Gas costs would make it impossible.
* On-chain payments per video chunk are not scalable.

Lottery-based tickets:

* Preserve economic correctness.
* Reduce L2 congestion.
* Enable microtransactions at scale.

---

### 🧩 4. Protocol/Network Separation

The protocol does NOT:

* Assign AI jobs
* Define routing
* Define GPU scheduling

Why?

* Compute evolves faster than smart contracts.
* Avoid ossification.
* Allow Daydream/Cascade to innovate without LIP upgrades.

This modularity is intentional.

---

# 📘 `core-mechanisms.mdx` (Protocol Only)

Strictly:

## What the Protocol Governs

### 1. Staking

* Bonding
* Unbonding period
* Delegation mechanics

### 2. Active Set Selection

Only applies to:

* Transcoding rounds

Not AI workloads.

Clarify:

* AI workloads are marketplace-driven.
* Stake does not determine AI job routing.

---

### 3. Inflation & Rewards

* Dynamic inflation target (~50% bonding)
* Reward distribution per round
* rewardCut / feeShare mechanics

---

### 4. Slashing

What can be slashed?

* Fraud proof
* Double claim
* Incorrect job proof (transcoding only)

Clarify:
AI workloads currently rely on:

* Off-chain verification
* Reputation
* Not protocol slashing (unless integrated later)

---

# 📘 `livepeer-token.mdx`

Combine with protocol-economics.

No reason to split.

Include:

* LPT purpose
* Supply mechanics
* Inflation formula
* Security assumptions
* Governance power
* Not used for job payments
* ETH vs LPT clarity

---

# 📘 `governance-model.mdx`

Purely:

* LIPs
* Proposal threshold
* Voting quorum
* Execution model
* Treasury control
* Foundation vs DAO boundaries

No discussion of job routing.

---

# 📘 `treasury.mdx`

Only:

* Treasury funding sources
* Governance flow
* LIP-89 context
* LIP-92 potential inflation contribution
* What it can fund
* Transparency guarantees

---

# 📘 `technical-architecture.mdx`

Protocol architecture only:

* Arbitrum contracts
* BondingManager
* TicketBroker
* RoundsManager
* Governor
* Minter

No Trickle.
No Daydream.
No Cascade.

---

# GROUP 3: Livepeer Network (Off-Chain Execution Layer)

This is where confusion previously happened.

This section is about:

* GPU operators
* Gateways
* AI pipelines
* Job routing
* Transport mechanisms
* Market dynamics

---

# 📘 `livepeer-network/overview.mdx`

## What is the Livepeer Network?

It is:

* A distributed GPU marketplace
* A permissionless compute layer
* The execution environment

It is NOT:

* The protocol
* The governance layer

---

# 📘 `actors.mdx`

Network participants:

* Orchestrator Node Operators
* GPU Workers
* Gateway Operators
* AI Application Developers
* Streamers
* Infrastructure Providers

Clarify:
Protocol roles vs network roles.

---

# 📘 `job-lifecycle.mdx`

Separate:

## A. Transcoding Lifecycle (Protocol-Governed)

Stake-weighted selection
Ticket redemption
Round-based reward

## B. AI Job Lifecycle (Market-Governed)

Gateway → Orchestrator → GPU
No stake routing
No ticket-based slashing
Payment via API / credit / ETH

Include both diagrams.

---

# 📘 `marketplace.mdx`

Explain:

* Price discovery
* Competition
* Fee structures
* Latency advantages
* GPU specialization
* Why stake ≠ workload allocation for AI

---

# 📘 `technical-stack.mdx`

Off-chain stack:

* go-livepeer
* GPU pipelines
* Cascade architecture
* ComfyStream
* SDKs
* RPC requirements

---

# 📘 `interfaces.mdx`

APIs:

* Studio API
* On-chain contract calls
* Explorer
* SDKs
* Gateway integration patterns

---

# ✅ Structural Fix Summary

The mistake before:
We mixed:

* Governance
* AI routing
* Slashing
* Gateway logic
* Protocol contracts
* Daydream pipelines

Now we have:

| Layer       | Responsibility                         |
| ----------- | -------------------------------------- |
| Protocol    | Security, staking, rewards, governance |
| Network     | Compute execution & routing            |
| Application | UX layer (Daydream, Cascade, Studio)   |

Clean separation.

---

# 🔥 Recommendation

Add a new page:

## `livepeer-protocol/design-philosophy.mdx`

Purely product-forward.

Why:

This prevents:

* Docs becoming mechanical
* Losing narrative
* Confusing new contributors

---

If you want, next step:

I can now:

1. Rewrite `livepeer-protocol/overview.mdx` as a fully product-forward narrative.
2. Then rewrite `livepeer-network/overview.mdx` as a clean execution-layer doc.
3. Then clean-split the rest accordingly.

{/* * **Containers** – Major deployable components (nodes, APIs, services)
*     -> The Network: Orchestrators, Gateways, Worker Nodes
* **Components** – Internal modules
*     -> The Protocol: Pricing logic, job verification, reward distribution
* **Code** – (optional deep dive)

For something like Livepeer:

* Context → The decentralized video compute protocol
* Containers → Orchestrators, Broadcasters, Transcoders, Ethereum contracts
* Components → Pricing logic, job verification, reward distribution */}

{/* Use a 6-part framework:

1. Mental Model (High-Level Summary)
2. Layered Stack (Protocol + Network)
3. Actor & Incentive Model
4. Trust / Verification Model
5. Job Lifecycle
6. Governance & Treasury */}

---

# Notes

## 🔷 Livepeer Protocol

*(On-chain coordination + economic security layer)*

This is about rules, staking, governance, token flows.

### Headers Under "Livepeer Protocol"

1. **Protocol Overview**

   * What the protocol is
   * What it secures
   * What it does *not* do

2. **Core Mechanisms**

   * Staking
   * Delegation
   * Reward distribution
   * Inflation model
   * Slashing
   * Rounds

3. **Token (LPT)**

   * Purpose of LPT
   * Security model
   * Inflation mechanics
   * Not used for job payments (ETH is)

4. **Governance**

   * LIPs
   * Voting
   * Upgrade process
   * Foundation role
   * Advisory boards

5. **Treasury**

   * Treasury funding source
   * Inflation allocation
   * Grants / SPEs
   * Budget governance

6. **Protocol Economics**

   * Inflation vs usage-based fees
   * Participation rate mechanics
   * Security assumptions
   * Incentive alignment

7. **Technical Architecture**

   * Smart contracts
   * On-chain components
   * How protocol interacts with network

---

## 🔶 Livepeer Network

*(Off-chain distributed compute + execution layer)*

This is about GPUs, routing, execution, real jobs.

### Headers Under "Livepeer Network"

1. **Network Overview**

   * What the network does
   * Real-time video & AI compute
   * Marketplace dynamics

2. **Actors**

   * Orchestrators
   * Delegators (economic actors, but listed here too)
   * Broadcasters
   * Gateways
   * AI builders

3. **Job Lifecycle**

   * Job submission
   * Assignment
   * Execution
   * Verification
   * Payment (ETH fees)

4. **Supply Side**

   * GPU operators
   * Pools
   * Hardware requirements
   * Performance metrics

5. **Demand Side**

   * Developers
   * Applications (Daydream, ComfyStream, etc.)
   * Real-time AI workloads

6. **Fee Flow**

   * ETH payments
   * Revenue to orchestrators
   * Revenue sharing to delegators

7. **Performance & Reliability**

   * Latency
   * Redundancy
   * Global distribution
   * Scaling

---

# 🔥 What You Must Move

From your screenshot:

❌ Treasury → move to Protocol
❌ Economics → move to Protocol

"Actors Overview" stays under Network.
Token absolutely belongs under Protocol.

---

# 🧠 Clean Mental Rule

If it involves:

* LPT
* Inflation
* Governance
* Slashing
* Voting
* Treasury

👉 It's Protocol.

If it involves:

* GPUs
* Jobs
* Routing
* Streaming
* Inference
* Real workloads

👉 It's Network.

---

# 🎯 Final Clean Sidebar Structure

```text
Livepeer Protocol
  - Protocol Overview
  - Core Mechanisms
  - Token (LPT)
  - Governance
  - Treasury
  - Protocol Economics
  - Technical Architecture

Livepeer Network
  - Network Overview
  - Actors
  - Job Lifecycle
  - Supply Side
  - Demand Side
  - Fee Flow
  - Performance & Scaling
```

---

## Protocol Guide
The protocol is the ruleset + on-chain logic governing network actors and providing payment, coordination & security primitives to the network.

[Protocol Overview](#)
- Actors, Nodes & Roles
- Actor Interactions
- Governance & Treasury
- Token Role

[Technical Architecture](livepeer-protocol/technical-architecture)
- Architecture Diagrams
- Node Types
- Core Components
- Job Lifecycle
- Protocol Implementation Code

[Protocol Mechanisms](livepeer-protocol/core-mechanisms)
- Governance and Upgrades
- Payment System
- Reward System, Slashing & Incentives
- Token Economics

{/* - Delegation & Staking
- Reward System
- Probabilistic Payments
- Slashing & Incentives
- Governance & Upgrades
- Tokenomics & Inflation */}

[On-Chain Functions](resources/blockchain-contracts)
- Blockchain Contract List
- Contract Interaction Architecture
- Contract Details

[Protocol Behaviour Mechanics](livepeer-protocol/economics)
aka Tokenomics
- Inflation
- Staking & Delegation
- Reward System
- Probabilistic Payments
- Slashing & Incentives
- Governance & Upgrades
- Tokenomics & Inflation

## Network Guide
The network is the execution layer, made up of actors, nodes and services.
-> The Livepeer network is the actual running system of machines performing work.
These actors are off-chain entities that use the on-chain protocol to coordinate and transact.

[Network Overview](livepeer-network/overview)
- Actor Roles
- Node Types
- Core Services
- Job Processing Pipeline

[Network Operations](livepeer-network/technical-architecture)
- Network Setup
- Node Deployment
- Service Configuration
- Job Submission
- Result Retrieval

---

Roadmap: https://roadmap.livepeer.org/roadmap

# FAQ

<Note>Coming Soon</Note>

Concepts:
Protocol vs Network
Protocol: Rules that govern actor coordination & incentives to optimise for desired behaviours (ie performing work) and disincentivise harmful actions (ie. False work)
Most protocols take the philosophy of self-interested parties acting in their own best interests. This is often called game theory in web3.

Technical Architecture:
Diagram - interactions & flows between actors

If you're trying to explain something as complex as **Livepeer**, don't just pick one framework. Layer them. Each one clarifies a different dimension.

Here are the ones that actually work for distributed, crypto-native, multi-actor systems.

---

# Canonical Livepeer Architecture Framework

## 1. C4 Model (Structure & Scope Clarity)

Best for: **Making complexity legible**

Created by Simon Brown, C4 forces you to explain a system at 4 zoom levels:

* **Context** – What is the system? Who uses it?
* **Containers** – Major deployable components (nodes, APIs, services)
* **Components** – Internal modules
* **Code** – (optional deep dive)

For something like Livepeer:

* Context → The decentralized video compute protocol
* Containers → Orchestrators, Broadcasters, Transcoders, Ethereum contracts
* Components → Pricing logic, job verification, reward distribution

Why it's powerful:
It forces you to stop hand-waving and define boundaries.

---

## 2. Layered / OSI-Style Stack (Abstraction & Primitives)

Best for: **Explaining "how it builds upward"**

Borrow from networking:

* Physical layer (GPUs, bandwidth)
* Network transport
* Coordination layer
* Execution layer
* Incentives layer
* Application layer

For Livepeer specifically, this works extremely well because:

* There's a physical compute layer
* A peer-to-peer coordination layer
* A blockchain settlement layer
* An incentive layer (LPT inflation, staking)
* An app layer (Streamplace, Studio, etc.)

This shows abstraction and dependency direction.

---

## 3. Actor / Role-Based Model (Economic & Governance Clarity)

Best for: **Who does what, who earns what**

Distributed systems aren't just software. They're incentive systems.

Define:

* Actors (Orchestrators, Delegators, Broadcasters, Token Holders)
* Capabilities
* Risks
* Revenue sources
* Governance rights

This explains:

* Why LPT exists
* Why ETH is used for jobs
* Why inflation funds security

This is critical in crypto systems.

---

## 4. Trust & Verification Model

Best for: **Security explanation**

In distributed compute, you must explain:

* What can be trusted?
* What cannot be trusted?
* How is work verified?
* Where is slashing possible?
* What is cryptoeconomic vs algorithmic enforcement?

Livepeer has:

* On-chain bonding
* Off-chain computation
* Verification mechanisms
* Slashing conditions

If you don't explain trust boundaries, your architecture is incomplete.

---

## 5. Economic Flow Diagrams

Best for: **Tokenomics clarity**

Show:

* Inflation → Orchestrators + Treasury
* Fees (ETH) → Orchestrators
* Delegation → Shared rewards
* Governance → Treasury allocation

Without this, the system looks like random moving parts.

---

## 6. Deployment Topology Diagrams

Best for: **Real-world implementation**

Show:

* Cloud GPUs
* On-prem nodes
* Geographic distribution
* Gateway architecture
* Load balancing

This grounds the protocol in reality.

---

## 7. State Machine / Lifecycle Model

Best for: **Job processing explanation**

Example for Livepeer:

1. Broadcaster submits job
2. Orchestrator bids
3. Segment distributed
4. Transcoded
5. Verified
6. Paid

This is critical for engineers.

---

## 8. Governance Model

Best for: **Explaining evolution**

* LIPs (Livepeer Improvement Proposals)
* Token-holder voting
* Treasury allocation
* Foundation vs Community

If you don't describe governance, you're describing a static system - and Livepeer is not static.

---

# What I Recommend For Livepeer

If you want elite-level clarity:

Use a 6-part framework:

1. **Mental Model (High-Level Summary)**
2. **Layered Stack (Protocol + Network)**
3. **Actor & Incentive Model**
4. **Trust / Verification Model**
5. **Job Lifecycle**
6. **Governance & Treasury**

That gives:

* Technical clarity
* Economic clarity
* Security clarity
* Evolution clarity

Most docs fail because they only describe components.
Great docs describe **structure + incentives + trust + evolution**.

---

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/livepeer-actors/delegators.mdx
---
---
title: Delegators
sidebarTitle: Delegators
description: >-
  How delegators back orchestrators with LPT and participate in Livepeer's
  security and economic outcomes.
keywords:
  - livepeer
  - about
  - livepeer network
  - actors
  - delegators
  - lpt
  - staking
audience: general
---

Delegators are LPT holders who bond stake to orchestrators instead of running infrastructure directly.

## Core Responsibilities

- Select orchestrators to back with stake
- Monitor operator performance and risk
- Reallocate stake as conditions change
- Participate in governance where relevant

## How Delegators Earn

Delegators can share in protocol reward outcomes and usage-based fee outcomes according to orchestrator economics. Returns depend on operator behavior, stake distribution, and network usage.

## Delegator Decision Factors

- Operator reliability and historical performance
- Commission and split configuration
- Network concentration and decentralization considerations
- Long-term alignment with protocol direction

## Important Tradeoffs

Delegating carries risk: operator underperformance, market volatility and variable demand, governance and concentration risk.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/livepeer-actors/end-users.mdx
---
---
title: Builders and End Users
sidebarTitle: Builders & End Users
description: 'How developers, product teams, and users consume Livepeer-powered services.'
keywords:
  - livepeer
  - about
  - livepeer network
  - actors
  - builders
  - end users
  - applications
audience: general
---

Builders and end users represent the demand that gives the network real utility.

## Builder Responsibilities

- Integrate gateway-facing APIs into applications
- Define workload requirements (latency, quality, cost)
- Operate product-level reliability and monitoring
- Iterate on product features based on network capabilities

## End-User Expectations

End users typically care about: fast response and smooth playback/generation, consistent quality, reliable availability, and predictable product behavior.

## Why This Role Matters

Without sustained demand from builders and users, network supply and protocol incentives have no durable economic purpose. Demand-side adoption is the driver that converts infrastructure into a functioning marketplace.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/livepeer-actors/gateways.mdx
---
---
title: Gateways
sidebarTitle: Gateways
description: >-
  How gateway operators provide intake, routing, and service coordination in the
  Livepeer network.
keywords:
  - livepeer
  - about
  - livepeer network
  - actors
  - gateways
  - routing
  - coordination
audience: general
---

Gateways are the demand-side coordination nodes in Livepeer. Applications submit workloads to gateways, and gateways route jobs to orchestrators for execution.

## Core Responsibilities

- Job intake from applications
- Capability matching across available orchestrators
- Routing and retry behavior under load or failure
- Service-level interfaces for developers and platforms

Gateways do not perform most GPU compute directly. Their primary function is coordination, service delivery, and reliability of the request path.

## Typical Flow

1. App submits a workload request
2. Gateway evaluates compatible orchestrators
3. Gateway dispatches job to selected orchestrator
4. Gateway returns result to the app

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/livepeer-actors/orchestrators.mdx
---
---
title: Orchestrators
sidebarTitle: Orchestrators
description: >-
  How orchestrator operators provide supply-side execution capacity and economic
  participation in Livepeer.
keywords:
  - livepeer
  - about
  - livepeer network
  - actors
  - orchestrators
  - supply side
  - gpu
audience: general
---

Orchestrators are supply-side operators that provide compute execution in the Livepeer network.

## Core Responsibilities

- Execute transcoding and AI workloads
- Maintain uptime and performance under variable demand
- Redeem and account for payment flow outcomes
- Attract and retain delegated stake through consistent operation

## Economic Position

Orchestrators receive:
- Usage-based fee outcomes from completed work
- Protocol reward outcomes where applicable
- Delegation backing that affects economic weight and network influence

## Operational Priorities

- Low-latency execution
- High success rate and predictable behavior
- Capacity planning across hardware and traffic volatility
- Clear observability and incident response discipline

## Relationship To Other Actors

- Gateways route jobs to orchestrators
- Delegators back orchestrators with stake
- Applications depend on orchestrator quality through gateway-mediated routing

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/economics.mdx
---
---
title: Livepeer Protocol Economics
sidebarTitle: Protocol Economics
description: >-
  Learn how LPT, staking, inflation, rewards, fees, and payment flows shape the
  Livepeer protocol economy.
keywords:
  - livepeer
  - about
  - livepeer protocol economics
audience: general
purpose: concept
---

Livepeer uses both its native token LPT and Ethereum (ETH) to power its network and compensate actors for their contributions.

## Money Flow: LPT Token Economics

### 1. Staking Flow (Delegators to Orchestrators)

Delegators call `Bond(amount, orchestratorAddress)` which transfers LPT from delegator to BondingManager, updates orchestrator's delegated stake, and updates the transcoder pool sorted by stake.

To become an orchestrator: bond LPT to itself, call `Transcoder(rewardCut, feeShare)`, register service URI via `SetServiceURI()`.

### 2. Reward Flow (Minter to Orchestrators to Delegators)

Each round, active orchestrators call `Reward()` to mint inflationary tokens. Minter calculates: `mintable = inflation * totalSupply / bonded`. Rewards distributed proportionally to orchestrator's stake. Orchestrator keeps their commission (rewardCut). Remaining rewards distributed to delegators.

Delegators must call `ClaimEarnings(endRound)` to realize accumulated rewards and fees.

### 3. Payment Flow (Broadcasters to Orchestrators)

Probabilistic micropayments system: Broadcasters fund via `FundDepositAndReserve()`. For each segment, broadcaster creates signed ticket with faceValue and winProb. Orchestrator validates ticket. Winning tickets redeemed on-chain via `RedeemWinningTicket(ticket, sig, recipientRand)`. Achieves ~99% cost reduction vs per-segment on-chain payments.

### 4. Fee Flow

Orchestrators earn fees from ticket redemptions. Fees accumulate in orchestrator's earnings pool. Orchestrator keeps commission (feeShare). Remaining fees distributed to delegators. Delegators claim via `ClaimEarnings()`.

### 5. Withdrawal Flows

Unstaking: Call `Unbond(amount)` -> wait `UnbondingPeriod` rounds (typically 7) -> `WithdrawStake(unbondingLockId)`.

## Summary: Complete Money Flow

1. Token holders bond LPT to BondingManager (staking)
2. Minter mints new LPT to Orchestrators (inflation rewards)
3. Orchestrators distribute rewards to Delegators (minus commission)
4. Broadcasters deposit LPT to TicketBroker (payment reserves)
5. Orchestrators redeem tickets from TicketBroker (fees)
6. Orchestrators distribute fees to Delegators (minus commission)
7. Delegators claim earnings from BondingManager

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/core-mechanisms.mdx
---
---
title: Core Mechanisms and Functions
sidebarTitle: Core Mechanisms
description: >-
  The Livepeer protocol secures a decentralised marketplace for verifiable media
  and AI compute through LPT bonding, dynamic inflation, staking and delegation,
  slashing conditions, and rewards distribution.
keywords:
  - livepeer
  - about
  - livepeer protocol
audience: general
purpose: faq
---

## Mechanism Objectives
Livepeer's core mechanisms are designed to:
- **Incentivise honest behavior** among participants
- **Scale supply capacity** by rewarding infrastructure providers proportionally
- **Secure verification** of off-chain workloads through bonded stake
- **Disincentivise dishonest actors** via penalties (slashing)

## AI vs Video Mechanisms

AI services do not participate in the same reward distribution or round-based active set election as video Orchestrators. The video transcoding system and AI system are architecturally separate and operate independently.

| Component | Video Orchestrators | AI Services |
|-----------|---------------------|-------------|
| Protocol Rewards | Inflationary LPT rewards | None |
| Staking Required | Yes - LPT bonding to transcoderPool | No |
| Active Set Benefits | Stake-weighted election to active set | No active set concept |
| Fee Earnings | Yes via TicketBroker integration | None in protocol |

## Protocol Mechanisms

### Rounds and Timing
- Default round length: 5760 blocks (~24 hours at 15-second block times)
- New rounds initialized by calling `initializeRound()`
- Rewards can only be claimed once per round by a transcoder
- Various protocol operations are only valid during specific times in a round

### Delegation & Staking
- Orchestrators bond LPT to participate in the network
- Bonded stake weight determines proportion of new LPT minted each round
- Delegators delegate to an orchestrator and share in its rewards
- Staking gives both orchestrators and delegators voting power in governance
- Misbehaviour can trigger slashing

### Reward System
- Service fees (ETH) and inflationary LPT pooled each round
- Active Orchestrators receive rewards proportional to stake and work done
- Delegators share in rewards (% set by the Orchestrator)
- Dynamic inflation: target bonding rate ~50%

### Micropayment System
- Broadcasters fund account with deposit and reserve
- Signed tickets with faceValue and winProb submitted off-chain
- Orchestrators redeem winning tickets on-chain
- Allows efficient microtransactions without every payment being recorded on-chain

### Upgradeability
- Standard proxy pattern; Controller maintains registry of contract IDs to implementation addresses
- Upgrades performed by deploying new implementation contract
- The Governor updates the implementation address in the Controller

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/governance-model.mdx
---
---
title: Livepeer Governance Model
sidebarTitle: Governance Model
description: >-
  The on-chain governance model providing a permissionless, transparent,
  community-driven framework for upgrading and governing the Livepeer protocol.
keywords:
  - livepeer
  - about
  - livepeer governance
audience: general
purpose: how_to
---

Livepeer is a community-driven protocol. Token holders vote on proposals to upgrade protocol mechanisms or spend from the treasury. Voting is conducted on-chain via the Livepeer Governor contract.

## Governance Process

8-step process:
1. Community discussion on Livepeer Forum
2. Pre-proposals / requests for feedback on the forum
3. Official LIP drafted
4. Anyone with ≥100 LPT can submit on-chain to the Governor contract
5. 30-round voting period (~3.75 days) opens; anyone with 1+ LPT staked can vote
6. Voting power is stake-weighted; delegators can temporarily withdraw delegation to vote separately
7. Proposal passes if ≥33% of total staked LPT participates (quorum) AND >50% of votes are "For"
8. Governor automatically executes the proposal's instructions

## Key LIPs

- **LIP-89**: Established the Treasury
- **LIP-92**: Set 10% of new LPT emissions into the treasury
- **LIP-73**: Confluence - Arbitrum One Migration
- **LIP-34, 35, 40, 83, 100**: Shaped monetary policy
- **LIP-15, 16, 19, 25, 69**: Established decentralised governance framework

## On-Chain Contracts

- **Voting period**: 30 rounds (~3.75 days)
- **Quorum**: 33% of all staked LPT
- **Threshold**: Majority (>50%) of votes cast
- **Voting delay**: 1 round

## Key Roles

**On-Chain Treasury**: 10% of token emissions flows to a community treasury funding public goods.

**Livepeer Foundation**: Fosters long-term strategy and ecosystem coordination. Establishes advisory boards, publishes roadmaps, coordinates Special Purpose Entities (SPEs). Ultimate authority rests with the community via on-chain votes.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/livepeer-token.mdx
---
---
title: Livepeer Token
sidebarTitle: Token (LPT) Utility
description: >-
  Livepeer Token (LPT) is the native proof-of-stake token of the Livepeer
  network. Token supply dynamics, inflation model, and contract integrations.
keywords:
  - livepeer
  - about
  - livepeer token economics
audience: general
purpose: concept
---

LPT is the native proof-of-stake token of the Livepeer protocol. Used to secure and incentivise the decentralised network.

**Did you know?** Livepeer's token distribution had no ICO. The initial 10 million LPT supply was distributed via a community Merkle Mine.

### Token Purpose
- **Staking**: LPT must be staked via BondingManager to operate as an Orchestrator or to delegate.
- **Governance**: Any staked LPT can vote on proposals.
- **Security**: Protocol is secured by stake. If an Orchestrator misbehaves, its staked LPT (and its Delegators') can be slashed.

**LPT is NOT used for service payments** - those are paid in ETH via separate payment channels.

| Use Case | LPT Functionality |
|----------|------------------|
| Protocol Security | Bonded stake determines active Orchestrators |
| Inflation Rewards | Only bonded LPT receives newly minted token share |
| Governance | Voting rights restricted to bonded LPT holders |
| Slashing Guarantee | Orchestrators risk LPT loss for malicious behavior |
| Delegation Incentives | Delegators earn yield by bonding LPT to performant Orchestrators |

### Supply & Distribution

- **Initial Supply**: 10,000,000 LPT at genesis (2018), distributed via Merkle Mine (no ICO or pre-mine)
- **Initial Distribution**: Community MerkleMine 63.44%, Team & Founders 19%, Early Backers 12.35%, Protocol Treasury 5.21%
- **Current Supply**: ~37,900,000 LPT (as of early 2025)
- **Inflation Model**: Dynamic - targets ~50% bonding rate. Below 50%, inflation increases; above 50%, inflation decreases
- **Staked vs Unstaked**: ~44% of LPT staked (June 2025)

### Dynamic Inflation Model

```
If B(t)/S(t) < β*:
  r(t+1) = min(r(t) + Δ, r_max)
Else:
  r(t+1) = max(r(t) - Δ, r_min)

Where:
  S(t) = total circulating supply
  B(t) = total bonded supply
  β* = target bonding rate (e.g. 50%)
  r(t) = current inflation rate
  Δ = step rate (e.g. 0.05%)
  r_min, r_max = protocol-set bounds (e.g. 0.5% to 7%)
```

### Rewards Distribution
- Orchestrators: pro-rata by bonded stake
- Delegators: share of orchestrator rewards, split by rewardCut
- Treasury: fixed % (currently 10%) of M(t) per round

### Bonding & Unbonding
- Bonding: Stake LPT to an orchestrator
- Unbonding: 7-day period before withdrawal
- Rebonding: Move bonded stake to another orchestrator instantly

### Slashing & Penalties

Bonded LPT can be slashed if an orchestrator submits invalid transcoding results, cheats on ticket redemption, or fails on-chain verification. Slashed LPT is partially burned and partially redirected to the treasury.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/overview.mdx
---
---
title: Protocol Overview
sidebarTitle: Overview
description: >-
  Design, contract architecture, staking & reward mechanisms, incentive
  alignment and governance model of the on-chain Livepeer Protocol.
keywords:
  - livepeer
  - about
  - livepeer protocol
  - protocol overview
pageType: overview
purpose: overview
audience: all
aim: What the protocol is. What it secures. What it does not do
---

The Protocol is the **on-chain coordination, security and economic layer** responsible for governing the network, securing the system, and incentivising desired behaviour from participants.

## Protocol Design 101

In any decentralised system involving independent participants, its essential to provide:
- **Reward Systems**: incentives for honest cooperation and penalties for negative behaviour
- **Coordination mechanisms**: for agreeing on the state of the system
- **Payment systems**: for compensating participants for their useful work
- **Governance systems**: for evolving the protocol rules over time

## Livepeer Whitepaper

Livepeer's original whitepaper (published 2017) provides a deep dive into the foundational system design and economic incentives behind the Livepeer protocol.

## Core Design Goals

- **Sustainable, Aligned Incentives**: Economic alignment for operators and token holders to maintain service quality, uptime, and security.
- **Trustless Verification**: Guarantee off-chain video work was performed honestly and efficiently without a trusted middleman.
- **Composable Governance**: Enable open participation via token governance for protocol upgrades and treasury spending.

## Guiding Principles

- **Decentralisation**: minimise trust in any single orchestrator; selection based on stake ensures broad participation.
- **Economic Alignment**: orchestrators and delegators are rewarded for honest work and penalised for misconduct.
- **Scalability & Cost Efficiency**: probabilistic micropayments scale to millions of streams without per-segment on-chain calls.
- **Modularity**: the protocol separates core staking/governance from payment channels.
- **Open Participation**: anyone can become an orchestrator or delegate and propose improvements via LIPs.

## Actors and Roles

| Role | Stake Required | Responsibilities | Earns |
|------|----------------|-----------------|-------|
| Orchestrator | Yes (LPT) | Run transcoding/AI node, redeem tickets | ETH fees, LPT rewards |
| Delegator | Yes (LPT) | Bond to Orchestrator | Share of ETH + LPT rewards |
| Gateway (Broadcaster) | No | Submits video jobs, sends ETH tickets | Transcoded/processed output |

## Protocol Architecture

The protocol uses Ethereum smart contracts (on Arbitrum One) to enforce staking, bonding, slashing, and reward rules on-chain, while network nodes handle the actual compute jobs.

This **separation of security (on-chain)** from **execution (off-chain)** enables Livepeer to evolve toward modular, verifiable compute infrastructure at internet scale.

There are 3 core functions of contracts:
1. Core Protocol Functions
2. Token & Payment Model
3. Governance System

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/technical-architecture.mdx
---
---
title: Technical Overview
sidebarTitle: Technical Architecture
description: A technical overview of the Livepeer protocol.
keywords:
  - livepeer
  - about
  - livepeer protocol
  - technical overview
audience: general
purpose: how_to
---

Notes:
- The blockchain handles economic incentives and coordination, while `go-livepeer` network nodes handle computationally intensive work of media processing and AI inference.
- The on-chain contracts verify work and handle payments, but don't perform the actual transcoding/AI inference.

## Protocol Architecture

Contract architecture:
```
Core Protocol Contracts:
  Controller --> ServiceRegistry
  Controller --> BondingManager
  Controller --> RoundsManager
  Controller --> TicketBroker
  Controller --> Minter

Governance:
  BondingVotes --> LivepeerGovernor
  LivepeerGovernor --> Governor
  LivepeerGovernor --> Treasury

Token System:
  LivepeerToken

Cross-connections:
  BondingManager --> BondingVotes
  Controller --> LivepeerGovernor
  Minter --> LivepeerToken
  BondingManager --> LivepeerToken
```

## System Overview

| Layer | Role |
|-------|------|
| Client Layer | Streams or submits jobs via Application Layer (CLI, SDK, API) |
| Gateway Layer | Receives jobs, initiates session routing |
| Orchestrator Layer | Bids on sessions, runs compute nodes |
| Worker Layer | Performs transcoding / AI inference |
| Off-chain Manager | Handles bonding sync, ticket validation |
| L2 Contracts (ARB) | TicketBroker, BondingManager, Delegator claims, reward withdrawal |
| L1 Contracts (ETH) | LivepeerToken, BridgeMinter - token issuance & bridging only |

## System Diagram (text)

Off-chain:
  Broadcaster -- [Video/AI jobs] --> Orchestrator
  Orchestrator -- [Results] --> Broadcaster
  Broadcaster -- [Prob. tickets] --> Orchestrator

On-chain:
  Broadcaster -[Deposit ETH]-> TicketBroker
  OStake -[Stake/Delegate LPT]-> BondingManager
  TicketBroker -[Redeem winning ticket]-> OStake
  BondingManager -[Inflation rewards]-> OStake
  BondingManager -[Treasury share]-> Treasury
  Orchestrator -[Redeem winning ticket]-> TicketBroker

## Actor & Incentive Model

(Stub - pending content)

## Trust & Verification Model

(Stub - pending content)

## Job Lifecycle

(Stub - pending content)

## Governance & Treasury

(Stub - pending content)

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-protocol/treasury.mdx
---
---
title: Livepeer Treasury
sidebarTitle: Treasury
description: >-
  How the treasury accumulates funds, how disbursements are authorised, and how
  its role is evolving across the protocol's roadmap.
keywords:
  - livepeer
  - about
  - livepeer treasury
audience: general
purpose: concept
definition: >-
  The Livepeer Treasury is an on-chain community fund designed to finance public
  goods and ecosystem development.
---

The Livepeer Treasury is a smart contract-controlled pool of LPT tokens funded through protocol inflation and penalty mechanisms. Governed by token holders via LIP proposals.

## Genesis

- **LIP-89**: Established the Treasury (custom OpenZeppelin Governor with 100 LPT proposal threshold and stake-weighted voting)
- **LIP-92**: Set the on-chain revenue allocation: 10% of new LPT emissions into the treasury
- **LIP-90**: Established that the treasury should fund public goods

## Objectives

- Sustain ecosystem growth by funding core development, tools, integrations, and R&D
- Improve protocol security by supporting audits, incentive design, and bug bounties
- Decentralise governance via on-chain voting on funding proposals
- Enable long-term coordination beyond the scope of any single actor or company

## Funding Sources

| Source | Description |
|--------|-------------|
| Inflationary Minting | % of each round's LPT minted is routed to treasury |
| Slashing Penalties | Orchestrator misbehavior results in partial burn + treasury deposit |
| Ticket Fee Remainders | Unclaimed or expired broadcaster deposits swept to the treasury |
| Direct LIP Transfers | Community or multisig entities can deposit LPT manually |

## Fund Usage

| Category | Examples |
|----------|---------|
| Core Development | Protocol upgrades, contract rewrites, Arbitrum migrations |
| Ecosystem Grants | Funding for clients, indexers, AI integrations |
| Public Goods | Documentation, SDKs, Explorer enhancements |
| Security & Audits | Formal audits of bonding/ticket contracts |
| Community Campaigns | Education, marketing, live events |
| Contributor Payments | Retroactive or milestone-based compensation |

## Governance

- **Proposals**: Stake 100 LPT to propose
- **Voting**: Any staked tokens can vote
- **Quorum/Threshold**: 33% of stake must participate, majority in favor
- **Execution**: If passed, Governor releases funds immediately

## Livepeer Foundation Role

The Foundation is a neutral steward for funding processes and outcomes:
- Governance Orchestration
- Accountability & Milestone Oversight
- Strategic Capital Framing
- Execution Enablement
- Long-Term Network Health Stewardship

## Contract Architecture

- Contract: `Treasury`
- Deployment: Arbitrum One
- Address: 0x363cdB9BaE210Ef182c60b5a496139E980330127

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/resources/blockchain-contracts.mdx
---
---
title: Blockchain Contracts
sidebarTitle: Blockchain Contracts
description: An overview of the Livepeer protocol blockchain contracts.
keywords:
  - livepeer
  - about
  - livepeer protocol
  - blockchain contracts
  - blockchain
  - contracts
  - overview
  - protocol
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: faq
---

# Livepeer Blockchain Contracts

Livepeer uses a comprehensive system of Ethereum smart contracts to permissionlessly govern its decentralized network.

The Livepeer Protocol is currently deployed on Arbitrum One and uses a collection of Ethereum smart contracts to govern:

- LivepeerToken (LPT) ownership and delegation
- Staking and selection of active transcoder operators (orchestrators)
- Distribution of inflationary rewards and fees to participants
- Time-based progression of the protocol through rounds
- Payment processing through a probabilistic micropayment system

There are 3 core functions of contracts in the Livepeer Protocol:
1. Core Protocol Contracts
2. Token System
3. Governance

That consist of **10 smart contracts** that work together to manage staking, payments, governance, and service discovery.

## Core Protocol Contracts

#### **Controller**: Contract Registry

The Controller is the central registry for all protocol contracts. All protocol contracts check with the Controller for the addresses of other contracts they need to interact with.

- Address: 0xD8E8328501E9645d16Cf49539efC04f734606ee4
- Purpose: Central address registry for all protocol contracts; enables contract upgrades; provides pause functionality
- Key Operations: getContract(), setContract(), pause()/unpause()

#### **BondingManager**: Staking & Delegation

The most critical contract managing the staking economy, orchestrator registration, and reward distribution.

- Purpose: Manages the transcoder (orchestrator) pool; handles bonding and delegation; distributes rewards and fees; manages unbonding periods; tracks earnings
- Key Operations: Bond(), Transcoder(), Unbond(), Reward(), ClaimEarnings()

#### **TicketBroker**: Probabilistic Micropayments

Manages the off-chain payment system using probabilistic micropayments for broadcaster-to-orchestrator payments.

- Purpose: Holds broadcaster deposits and reserves; validates and settles winning tickets; manages unlock/withdrawal periods
- Key Operations: FundDepositAndReserve(), RedeemWinningTicket(), Unlock(), Withdraw()

#### **RoundsManager**: Protocol Time Management

Manages the protocol's time-based round system where each round has a fixed block length.

- Purpose: Defines protocol rounds (epochs); tracks round initialization; provides block hashes for ticket validation
- Key Operations: InitializeRound(), CurrentRound(), BlockHashForRound()

#### **Minter**: Token Inflation

Controls the token supply inflation that rewards active orchestrators.

- Purpose: Manages LPT token inflation schedule; calculates mintable tokens per round; adjusts inflation based on target bonding rate
- Key Operations: CurrentMintableTokens(), Inflation(), InflationChange()

#### **ServiceRegistry**: Orchestrator Discovery

Maps Ethereum addresses to service URIs for orchestrator discovery.

- Purpose: Allows orchestrators to advertise their network endpoints; enables broadcasters to discover and connect
- Key Operations: SetServiceURI(), GetServiceURI()

#### **MerkleSnapshot**

Creates a snapshot of the staking pool at a given round and generates a merkle root for verifiable delegation.

- Purpose: Creates staking pool snapshots; generates merkle root for verifiable delegation; used for delegator rewards and governance
- Key Operations: CreateSnapshot(), MerkleRoot()

## Token & Utility Contracts

Note: Livepeer moved from Ethereum mainnet to Arbitrum One in 2022. On Ethereum mainnet, only LivepeerToken and BridgeMinter remain operational.

#### **LivepeerToken (LPT)**: ERC20 Token (Ethereum Mainnet Only)

- Purpose: ERC20 token for all economic activity; used for bonding/staking; required for broadcaster deposits; governance voting weight
- Key Operations: Transfer(), BalanceOf(), TotalSupply(), Approve()

#### **BridgeMinter**: Token Bridge (Ethereum Mainnet Only)

- Purpose: Mints LPT tokens on Arbitrum One when it receives a valid deposit from the Ethereum mainnet

#### **LivepeerTokenFaucet**: Test Token Distribution (Testnets Only)

- Purpose: Provides test tokens on testnets; rate-limited token requests; development and testing support

## Governance Contracts

#### **Governor**: Contract Upgrades

Handles protocol upgrades through a multi-step transaction proposal and execution process.

- Key Operations: Propose(), Queue(), Execute()

#### **LivepeerGovernor**: Protocol Governance

Implements on-chain governance for protocol upgrades and parameter changes.

- Purpose: On-chain voting on protocol proposals; weighted by bonded stake
- Key Operations: CastVote(), CastVoteWithReason()

#### **Treasury**: On-chain Treasury Management

Manages the on-chain treasury for funding and accounting.

- Purpose: Manages protocol treasury for funding; tracks allocations and expenditures; funds Special Purpose Entities (SPEs)
- Key Operations: Deposit(), Withdraw()

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/resources/gateways-vs-orchestrators.mdx
---
---
title: 'Gateways Vs. Orchestrators: What's the Difference?'
sidebarTitle: Gateways Vs. Orchestrators
description: >-
  Livepeer uses two core node types-Gateways and Orchestrators-that work
  together to provide real-time AI video compute at scale. Although closely
  connected, they serve entirely different purposes.
keywords:
  - livepeer
  - about
  - livepeer network
  - gateways vs orchestrators
  - gateways
  - orchestrators
  - what
  - difference
  - types
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
---

## Overview

In brief:

**Gateways coordinate. Orchestrators compute.**

Together, they form the backbone of the Livepeer AI video pipeline.

Sequence: Application → Gateway (submit job) → Orchestrator (route to best GPU, return processed output) → Application (results)

| Role             | Function                                       | Performs GPU Work? | External-Facing? |
| ---------------- | ---------------------------------------------- | ------------------ | ---------------- |
| **Gateway**      | Job intake, pricing, routing, capability match | No                 | Yes              |
| **Orchestrator** | GPU compute, inference, transcoding, BYOC      | Yes                | No               |

## Gateway Responsibilities

Gateways act as the front door to the network:

- Receive jobs from applications
- Determine required model, pipeline, or GPU
- Select the best orchestrator based on performance and pricing
- Route the workload with low latency
- Return results to the client
- Publish marketplace offerings (models, pipelines, cost per frame, etc.)

Gateways provide _service intelligence_, not compute.

## Orchestrator Responsibilities

Orchestrators are GPU operators who run:

- Real-time AI inference
- Daydream / ComfyStream pipelines
- BYOC containers
- Traditional transcoding

They provide:

- GPU horsepower
- Model execution
- Deterministic and verifiable output
- Performance guarantees

They do not expose external APIs directly - Gateways handle that.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/resources/livepeer-glossary.mdx
---
---
title: Livepeer Glossary
sidebarTitle: Livepeer Glossary
description: >-
  A comprehensive glossary of terms used in the Livepeer Real-time AI & Video
  Network
keywords:
  - livepeer
  - resources
  - livepeer glossary
  - glossary
  - comprehensive
  - terms
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: glossary
audience: general
purpose: glossary
---

# Livepeer Core Terms

### Livepeer Protocol

The protocol is the ruleset + on-chain logic governing: staking, delegation, inflation & rewards, orchestrator selection, slashing, probabilistic payments, verification rules. The economic and coordination layer that enforces correct behavior.

### Livepeer Network

The network is the actual running system of machines performing work: Orchestrators (GPU nodes), Transcoders / Workers, Gateways, Broadcasters, Verification processes, Job routing, Real-time AI & video compute. It is the live, operational decentralized GPU mesh running video + AI jobs.

### Protocol Actor

Protocol Actors are the main participants in the protocol. Protocol Actors include gateways, orchestrators, and delegators.

### Livepeer Actor

A Livepeer actor is a participant in the protocol or network-human or machine-that performs a defined role such as submitting jobs, providing compute, verifying work, or securing the system.

### Developer Platform

An abstraction layer on the livepeer protocol that provides tools and services for developers to use & build applications on top of Livepeer. Examples include Livepeer Studio, Daydream, and Streamplace.

# Actors & Network Roles

### **Gateway**

A gateway is a Livepeer node operated by a user or organisation to interact **directly with the Livepeer protocol**. Gateways submit jobs, route work to orchestrators, manage payment flows, and provide a direct interface to the network. Not the same as hosted services like Studio or Daydream.

### **Orchestrator (GPU Node)**

A supply-side operator that contributes GPU resources to the network. Orchestrators receive jobs, perform transcoding or AI inference, and get paid via LPT rewards + ETH fees.

### **Transcoder (Worker)**

A worker process-often managed by an orchestrator-that performs the actual compute work (transcoding or AI inference).

### **Delegator**

A token holder who stakes their LPT to an orchestrator to help secure the network and earn a share of rewards.

### **Developer**

Anyone building applications using Livepeer, usually through hosted services (e.g., Studio, Daydream) or library SDKs. Developers only run gateways if they want direct protocol access.

### **Broadcaster (Deprecated Term -> Gateway)**

A job submitter-often a user-facing service-that sends video or AI jobs into the network via a gateway.

### **Verifier**

A network component (protocol-level) responsible for validating work performed by orchestrators to ensure correctness.

# Core Network Concepts

### **Job**

A unit of work submitted to the network: video transcoding tasks, AI inference requests, or real-time processing pipelines.

### **Segment**

A short chunk of video that is independently transcoded, enabling parallel processing.

### **Ticket / Payment Ticket**

Livepeer's probabilistic micropayment mechanism used to pay orchestrators efficiently at high throughput.

### **Rounds**

Discrete time intervals (Ethereum blocks) used to calculate staking rewards and coordinate global state.

### **Slashing**

A penalty applied to orchestrators for misbehavior (e.g., failing verification or submitting fraudulent results).

### **Inflation**

The issuance of new LPT each round, distributed to orchestrators and delegators.

### **Reputation**

A measure of an orchestrator's performance, reliability, and trustworthiness, influencing job routing and payments.

# Web3 Terms

### **Ethereum Address (Wallet Public Address)**

An Ethereum address on the blockchain is a 42-character hexadecimal string that starts with 0x. Derived from the last 20 bytes of the public key.

### **DePIN**

"Decentralized Physical Infrastructure Network." A network where physical or computational resources (GPUs, bandwidth, storage) are coordinated through crypto-economic incentives.

### **LPT (Livepeer Token)**

The governance and staking token used for orchestrator selection, delegation, reward distribution, and protocol security. Deployed to the Ethereum Mainnet.

### Tokenomics (Token Economics)

The study of designing economic systems for decentralized networks. Used to describe both the protocol functions and which token incentives serve to create the optimal codified environment for the efficient operation of the network.

### **On-chain**

Data and operations that are recorded on the blockchain. In Livepeer, it refers to the protocol layer that governs staking, delegation, rewards, and verification.

### **Off-chain**

Data and operations that are not recorded on the blockchain. In Livepeer, it refers to the network layer that performs video transcoding, AI inference, and job routing.

### **ETH**

Ethereum's native token. Used to pay fees for transcoding, AI jobs, and network interactions.

### **ARB**

Arbitrum's native token. Used to pay fees for transactions on the Arbitrum network.

### **Layer 2**

A scaling solution for Ethereum that enables high-throughput, low-cost transactions. Livepeer uses Arbitrum Layer 2 for its protocol.

### **Staking**

Locking LPT to an orchestrator to earn a share of rewards.

### **Gas**

The fee paid for on-chain operations.

### **Slashing Conditions**

Network-defined rules that determine when LPT is destroyed due to misbehavior.

### Bridging

The process of moving tokens between networks (e.g., Ethereum Layer 1 and Arbitrum L2).

# Video Engineering Terms

### **Transcoding**

Converting video from one format, resolution, or bitrate to another.

### **Ingest**

The process of receiving a live video feed from a broadcaster.

### **Delivery**

Sending processed (transcoded) video to viewers via a CDN or playback service.

### **Streaming**

Continuous transmission of audio/video over the network.

### **RTMP**

A common ingest protocol for live streaming to gateways. Real-Time Messaging Protocol.

### **HLS**

A segmented streaming protocol widely used for delivery to end-users.

### **Bitrate**

The amount of data encoded per second of video; a key parameter in transcoding.

# AI Terms

### **Inference**

Running a model to generate outputs (frames, embeddings, predictions) from inputs.

### **Model**

A machine learning system (e.g., diffusion model, transformer, world model) hosted on an orchestrator or gateway.

### **Pipeline**

A sequence of inference steps: e.g., frame generation → upscaling → audio alignment → encoding.

### **Real-Time AI**

AI workflows that generate or transform video frames fast enough to maintain interactive/streaming use cases.

### **World Model**

A holistic model capable of understanding and generating coherent multi-modal worlds (video, audio, action).

### **Agent**

A system that uses models to make decisions or interact with an environment-potentially running on decentralized GPUs.

### **TensorRT**

An inference optimisation framework used to accelerate model execution on NVIDIA GPUs.

### **ControlNet**

A conditioning mechanism for diffusion models that allows structural guidance (pose, depth, edges, etc).

# Payments & Economics

### **Fee Pool**

Accumulated fees available for orchestrators to earn based on their performance and stake weight.

### **Reward Cut**

The percentage of staking rewards kept by the orchestrator.

### **Fee Cut**

The percentage of job fees kept by the orchestrator.

### **Delegator Rewards**

LPT or ETH earned by delegators proportional to their stake.

# Operational Terms

### **Node**

Any machine running Livepeer software-gateway nodes, orchestrator nodes, or worker nodes.

### **CLI**

Command-line interface used to configure gateways or orchestrators.

### **Configuration Parameters**

Settings (flags/env vars) that control node behavior, payments, preferred orchestrators, etc.

### **Health Check**

A verification check to ensure orchestrators produce correct results.

# Other Terms

### **Decentralized GPU Network**

A marketplace of GPUs contributed by orchestrators worldwide, coordinated through crypto incentives.

### **Open Source**

Code that is publicly available and community-maintained-central to Livepeer's philosophy.

### **Edge Compute**

Computing performed near the data source (e.g., near real-time video generation).

### **Latency**

The delay between receiving input and delivering output-critical in real-time video & AI.

### **Quality Ladder**

Multiple renditions of a video at different qualities, produced during transcoding for adaptive playback.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/resources/livepeer-whitepaper.mdx
---
---
title: Livepeer Whitepaper
sidebarTitle: Whitepaper
description: >-
  Read the original Livepeer whitepaper and understand how its decentralised
  video vision evolved into the current network.
keywords:
  - livepeer
  - about
  - livepeer protocol
  - livepeer whitepaper
  - whitepaper
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
---

Livepeer's original whitepaper (published 2017) outlined an ambitious design for a fully decentralized live video streaming network. The goal was to build "the world's open video infrastructure", where anyone could contribute or access video encoding and delivery on-demand.

View the Livepeer Whitepaper: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md

Livepeer was one of the earliest DePIN (Decentralized Public Infrastructure Network) projects in the blockchain space.

Key ideas outlined in the whitepaper included:

- **Incentivized Participation** with a native token (Livepeer Token, LPT) and a trustless verification mechanism for video transcoding work. Anyone running a node could perform video transcoding and be rewarded in LPT, while verifiers and game-theoretic protocols would ensure outputs were correct without a central authority.

- **Trustless Verification:** A standout proposal was to use Truebit (a decentralized computation oracle) as a "black box" to verify transcoded video segments. Transcoding nodes would commit results on-chain, and a Truebit-based challenge could detect incorrect outputs.

- **Open Participation:** The whitepaper envisioned a fully open market of transcoders and broadcasters interacting via smart contracts. "No central party or company needs to be relied upon for the continued operation of the network."

- **Economic Security via Token:** LPT was introduced as a coordination mechanism - nodes would stake LPT as a performance bond to earn the right to transcode video, aligning their incentives with honest work.

Note: Livepeer's token distribution had no ICO. LPT was distributed via a Merkle Mine, allowing a wide set of participants to claim tokens at network launch.

### Livepeer Now

Livepeer today both honors and extends the original whitepaper's vision. The core idea of a decentralized video network powered by a crypto token has been proven in production - Livepeer handles millions of video minutes and has hundreds of node operators on five continents. Key technical shifts like off-chain scaling (Streamflow, Arbitrum) and the expansion into GPU-based AI workloads have kept the project on the cutting edge of what "open video infrastructure" means.

What began as a decentralized live streaming protocol has grown into a general platform for real-time media computing.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/resources/technical-roadmap.mdx
---
---
description: >-
  Roadmap:
  https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/
  https://blog.livepeer.org/a-r...
keywords:
  - livepeer
  - docs
  - about
  - resources
  - technical roadmap
  - roadmap
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
---

# Technical Roadmap

Roadmap:
https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/

https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/core-concepts/concepts/actors.mdx
---
---
title: Livepeer Actors
sidebarTitle: Livepeer Actors
description: >-
  A high-level introduction to the key concepts workings of the Livepeer open,
  on-demand AI & Media infrastructure substrate and the distributed
  crypto-primitive coordination system.
keywords:
  - livepeer
  - about
  - core concepts
  - mental model
  - introduction
  - key
  - architecture
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

## Actor Overview

Livepeer involves multiple actors, both on-chain (protocol) and off-chain (community).

- **Orchestrator**: A bonded node operator that claims work on-chain. Orchestrators maintain active LPT stake, set fee-sharing percentages, and call the on-chain reward function each round. They earn ETH fees from broadcasters and LPT from inflation.
- **Transcoder / Worker**: A compute node (often a GPU) that performs the actual encoding or inference. Workers do not hold stake themselves; they operate under an Orchestrator.
- **Gateway (Broadcaster)**: A stateless demand-side node. Gateways submit video or AI jobs to the network and pay the node that completes the work. They effectively bridge an input stream into Livepeer, handling micropayment tickets on-chain.
- **Delegator**: A token holder who stakes LPT behind one or more orchestrators. Delegators strengthen network security and decentralization. In exchange, they receive a portion of the node's rewards (both mint emissions and usage fees) according to their stake.
- **Livepeer Foundation**: A non-profit entity formed to guide ecosystem growth. The Foundation coordinates long-term strategy and funding, runs community programs (like advisory boards), and helps align core protocol development with the open-source community.
- **Developers & Builders**: Software teams building on Livepeer. Includes decentralized video apps (e.g. on Web3 social networks) and infrastructure tools.
- **AI Artists & Content Creators**: Performers and creators who use Livepeer's tools (like Daydream) to produce content.
- **Gateway Operators**: Organizations running public Livepeer gateway services. For example, Livepeer Cloud (a community-run gateway) and Livepeer Studio (a production-grade API gateway) provide easy on-ramps to the network.
- **Special Purpose Entities (SPEs)**: Community-approved teams funded by the on-chain treasury. SPEs tackle public goods for Livepeer (e.g. Building dev tools, infrastructure).

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/x-deprecated/livepeer-governance.mdx
---
---
description: >-
  Livepeer is committed to open-source, transparent, community governance. Quick
  Links Discord:
  https://discord.com/channels/423160867534929930/686685097935503397
keywords:
  - livepeer
  - docs
  - about
  - x deprecated
  - livepeer governance
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

# Livepeer Governance

Livepeer is committed to open-source, transparent, community governance.

Quick Links

Discord: https://discord.com/channels/423160867534929930/686685097935503397

RFPs

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/x-deprecated/livepeer-token-economics.mdx
---
---
title: Livepeer Token Economics
description: 'See more on the LPT Token here https://www.livepeer.org/lpt'
keywords:
  - livepeer
  - developers
  - moved to about livepeer protocol
  - livepeer token economics
  - token
  - economics
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

# Livepeer Token Economics

See more on the LPT Token here: https://www.livepeer.org/lpt

Livepeer is a utility token used to power & secure the decentralised Livepeer Network, enabling reliable, cost-efficient, powerful AI and video streaming functions.

One of the biggest competitive advantages of Livepeer is its decentralisation - creating free markets and competitive pricing. This network of decentralised nodes, orchestrators, gateways and broadcasters, and the flow of payments in the network for doing useful work, is underpinned by the Livepeer Token (LPT).

#### Actors

- **Broadcaster (payer)** → submits jobs (video/AI) and funds them using **Probabilistic Micropayments (PM) tickets**.
- **Orchestrator (validator/worker coordinator)** → stakes LPT (self-stake + delegated), wins work, forwards segments to…
- **Transcoder (work executor)** → performs compute (encode/transcode/inference) for the orchestrator.
- **Delegator (capital provider)** → bonds LPT to an orchestrator, shares its rewards & fees.
- GPU Providers are paid for running AI Jobs

**Flow:** Broadcaster → (PM tickets/segments) → Orchestrator → (tasks) → Transcoder → (results) → Broadcaster.

**Economic weight flows:** Delegators → (bonded LPT) → Orchestrator → (rewards/fees split back) → Delegators.

#### Economic Functions -> Staking, Rewards, Fees & Slashing

#### Governance

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/x-deprecated/livepeer-protocol/technical-overview.mdx
---
---
keywords:
  - livepeer
  - docs
  - about
  - x deprecated
  - livepeer protocol
  - technical overview
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

# Technical Overview

[stub - no content]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/home/about-livepeer/ecosystem.mdx
---
---
title: Livepeer Organisational Structure
sidebarTitle: Ecosystem
description: >-
  A look at the Livepeer organisational structure, including the Livepeer
  Foundation, Livepeer Inc., and the key role of the Livepeer Community in
  governing the future of network.
keywords:
  - livepeer
  - home
  - introduction
  - livepeer ecosystem
  - ecosystem
  - grown
  - robust
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: everyone
purpose: concept
---

## Livepeer Values

Livepeer has also been driven by a set of core values that guide its development, operations, and community interactions.

- **Innovation**: Embrace new ideas and technologies to stay ahead of the curve.
- **Collaboration**: Build with and for the community, fostering open dialogue and shared ownership.
- **Accessibility**: Make cutting-edge video and AI tools available to everyone, regardless of technical background.
- **Community**: Build with and for the community, fostering open dialogue and shared ownership.

With this in mind, Livepeer is dedicated not just to open, accessible architecture but also to a *contributive organisational structure* that optimises for the right people, with the right incentives, working on the right things.

## Entities

Livepeer's project structure has evolved to balance a focused core team with a growing community governance model. Several entities play distinct roles in Livepeer's ecosystem:

- **Livepeer Inc.** - Livepeer Inc is the original company behind the Livepeer protocol. Livepeer Inc built the core network infrastructure and continues to drive product development and demand generation.
- **Livepeer Foundation** - A non-profit organisation that stewards the long-term vision, ecosystem growth, and core development of the Livepeer network.
- **Livepeer DAO** - An unofficial term for the collective of LP tokenholders who decide on the direction of the network via on-chain proposals and an on-chain treasury.
- **Special Purpose Entities (SPEs)** - Mission-driven engineering or operational teams funded by the Livepeer ecosystem to deliver the DAO's accepted proposals.

### Livepeer Inc.

Livepeer Inc is the original founding company behind the Livepeer protocol. Livepeer Inc's current focus is product-market fit (PMF) for the Livepeer network in the era of real-time AI video.

Strategic Focus: Laser-focused on demand generation and utility for the network, particularly in the AI video domain. Doug Petkanics (CEO) outlined that Inc's core thesis is proving that builders will use Livepeer for AI-powered video applications because it's the best option.

"The team is focused, funded, and running hard at the next major milestone: unlocking product-market fit… as the leading infrastructure for realtime AI video." - Doug Petkanics

Role in Ecosystem: Livepeer Inc acts as a pioneer and catalyst. By running a focused product strategy, Inc provides "proof of utility" for the network. "Livepeer Inc's work is critical… by building products that generate real demand for the network, Inc provides proof of utility, inspiration, and compounding network effects."

Products:
- Livepeer Studio (commercial API platform for developers)
- Daydream (real-time generative AI video app)

### Livepeer Foundation

Launched in mid-2025, the Livepeer Foundation (LF) is a non-profit entity created to "to steward the long-term vision, ecosystem growth, and core development of the network" complementing the work of Livepeer Inc.

"The LF's role is to ensure that, over time, the Livepeer project builds a thriving ecosystem of founders, applications and gateways, and a highly-performant, secure network, truly accountable and governed by token holders." - Rich O'Grady

The Livepeer Foundation is a strategic coordinator within the Livepeer ecosystem, and makes decisions in the following areas:
- Define strategic objectives for Livepeer
- Design initiatives to accelerate or steer progress towards objectives
- Drawing on available resources, recruit and coordinate task forces to execute on initiatives

Leadership & Stewardship: Led by Rich O'Grady. Strategy is shaped through multi-stakeholder Advisory Boards (network operators, builders, community members, Inc., and domain experts) across Protocol, Network, Governance, and Markets/Demand. The Foundation synthesizes this input into a long-term roadmap, budget, and defined workstreams proposed to the community for approval.

Advisory Boards: Small, domain-specific groups consisting of Livepeer core contributors, representing different parts of the ecosystem. Formed every 6 months. Advisory Boards do not make capital allocation decisions themselves - Token Holders still vote on each SPE.

Advisory Board Focus Areas: Protocol, Network, Governance, Demand & Markets.

Workstreams: Onboarding, Growth, Developer Experience, Treasury, Operations.

### Livepeer DAO

While not officially called the Livepeer DAO, the Livepeer protocol is governed by a collective of Livepeer (LP) tokenholders who decide on the direction of the network via on-chain proposals and an on-chain treasury.

"The Livepeer community is the DAO. The Foundation is a critical partner in driving the long-term success of the Livepeer network, but it is the community that holds the final say in all matters via on-chain governance." - Rich O'Grady

DAO members are collectively the ultimate decision-makers of protocol upgrades, network growth proposals and treasury allocations. Anyone who holds (and has delegated) Livepeer tokens (LPT) is a member of the Livepeer DAO.

On-Chain Treasury: In 2022, Livepeer launched the On-Chain Treasury to fund the long-term growth and sustainability of the network. This treasury accumulates a portion of protocol fees. Livepeer tokenholders vote on how to allocate these funds via on-chain proposals.

Governance: The Livepeer community uses a standardised governance framework. Decisions are made by tokenholders via on-chain proposals. Any tokenholder can participate in governance by delegating their tokens.

DAO Members include: Orchestrators with staked LPT, Delegators, Developers & Other Node operators (gateways), Community members holding LPT, Other Tokenholders (may include members of Livepeer Inc., the Foundation, SPEs, etc.).

Notable Decisions:
- Approval of the Confluence upgrade (migrating to Arbitrum) via LIP-73
- Funding of the AI Video SPE (multiple stages)
- Grants to applications like Lenstube and Dlive
- The Livepeer DAO was a driving factor in establishing the Foundation and advisory boards

### Special Purpose Entities (SPEs)

Special Purpose Entities (SPEs) are mission-driven, community-funded teams formed to execute specific projects for the Livepeer network. They allow faster, focused progress on particular needs, funded by the on-chain treasury and accountable to token holders.

"SPEs are typically mission-driven groups that operate independently to build infrastructure, applications, or tooling that expand and improve the Livepeer protocol. These teams are funded through proposals to the onchain treasury and are accountable to the community." - Livepeer Blog

Role in Ecosystem:
- SPEs execute on strategic initiatives voted on by the Livepeer DAO.
- Accountable to the community and must align with the long-term vision of the Livepeer network.
- These teams provide agile, responsive, and accountable progress on ecosystem needs.

SPE Model:
- Funded by the Livepeer on-chain treasury via community votes
- Formed by an RFP process with a DAO-mandated budget
- Report to the DAO via the Livepeer Forum and ProductLane

SPE Focus Areas: Long-term infrastructure, Protocol development, Network-level capabilities, Ecosystem growth and adoption, Operational Leadership, Research and Development, Product Management, Education and Outreach, Advocacy and Policy, Community Management, Public Goods.

Notable SPEs:
- AI Video SPE: Strategic Focus: Build out AI-first video infrastructure. Status: Active. Impact: Helped Livepeer pivot from solely transcoding into broader compute; built BYOC and comfystream.
- Livepeer Cloud SPE: Strategic Focus: Build out cloud-native video infrastructure. Status: Active. Impact: Built the Community Gateway and tooling and analytics for orchestrators.
- Streamplace SPE: Strategic Focus: Build a public goods video layer for social networks and Web3 apps. Status: Active.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/home/about-livepeer/vision.mdx
---
---
mode: wide
title: Livepeer Story
sidebarTitle: Vision
description: >-
  How Livepeer began with video streaming and grew to become the open
  AI-infrastructure for real-time Interactive Video & world models.
keywords:
  - livepeer
  - livepeer overview
  - livepeer introduction
  - livepeer primer
  - livepeer mission
  - livepeer vision
  - livepeer goals
  - livepeer objectives
  - livepeer targets
  - livepeer aspirations
  - livepeer ambitions
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: everyone
---

Livepeer was founded in 2017 by entrepreneurs Doug Petkanics and Eric Tang, who, frustrated by the high costs and rigid infrastructure of existing video streaming solutions, wondered:

"What if video - the most captivating, expressive medium online - ran on open, permissionless infrastructure instead of expensive, proprietary systems?"

This conviction, alongside a deep belief in both the practical need and open source potential of decentralised open infrastructure, led them to found Livepeer.

Doug and Eric set out to revolutionise video streaming infrastructure from the hardware infrastructure up by:
- Turning idle GPUs around the world into a competitive marketplace,
- Using crypto-economic incentives to guarantee reliability and quality,
- Delivering real cost reductions via decentralised economies of scale.

## Livepeer Vision

From the beginning, Livepeer's goal has been simple but ambitious:

*Make video infrastructure open, permissionless, and economically efficient - the way the internet itself was meant to be.*

As video becomes increasingly real-time, interactive, and AI-driven, Livepeer is evolving to meet the next wave of demand: real-time AI video pipelines.

## Core Mission

Since its launch in 2017, Livepeer's mission has been to deliver affordable, performant open video & AI infrastructure rooted in decentralized video technology enabled by cryptoeconomic primitives.

Today, Livepeer is a respected and trusted brand, enabling internet-scale, next-generation applications in interactive media, AI training, and digital creativity.

Livepeer is on a mission to give innovators and creators the tools they need to build the future of interactive media experiences.

**Core Pillars:**

This mission drives the why's of Livepeer and informs its competitive edge and business advantage. The network's strategy is built upon a foundation of core value propositions and messaging pillars derived from this mission:

- **Real-time Performance**: Industry-standard low latency optimized for real-time video AI and media, enabling sub-second inference and proven scalability.
- **Cost Efficiency**: Access to GPU compute at 5-10x lower cost through an open marketplace with transparent on-chain economics and a pay-per-use model.
- **Automagic Scalability**: Scale capacity up or down dynamically in real-time via an elastic network supply, smart routing, and incentivized idle GPU utilization.
- **Openness & Community**: Permissionless, open-source, community-driven infrastructure that provides global access, on-chain verifiable compute, and rewards all participants.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/home/about-livepeer/evolution.mdx
---
---
mode: wide
title: Livepeer Evolution
sidebarTitle: Evolution
description: >-
  A look at the Livepeer evolution from video to AI, to participatory governance
  and community driven development.
keywords:
  - livepeer
  - livepeer vision
  - livepeer mission
  - livepeer goals
  - livepeer objectives
  - livepeer targets
  - livepeer aspirations
  - livepeer ambitions
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: everyone
---

## Key Achievements

- 2016-2017 [Livepeer Founded]: Doug Petkanics and Eric Tang found Livepeer. Mission: decentralize the hardest layer of video infrastructure: transcoding - using crypto-economic incentives.

- 2018 [Network Launch]: Livepeer protocol launches on Ethereum. First decentralized marketplace for video transcoding goes live.

- 2019-2020 [Production Validation]: Network proves it can deliver lower-cost, reliable transcoding at scale. Orchestrator + delegator model stabilizes supply and quality.

- 2021 [Real Adoption]: Major platforms and apps use Livepeer for production workloads. Livepeer Inc. productizes access (APIs) while the network keeps running permissionlessly.

- 2022 [Video-first Conviction]: Livepeer doubles down on video-native infra, resisting the "generic GPU cloud" path. Early exploration of video + ML workloads.

- 2023 [AI Integration]: Livepeer introduces AI-first gateways, combining video & AI workloads. First real-time AI video pipelines demonstrated on the network. Founders outline a vision for AI-first infrastructure.

- 2024 [Cascade Vision]: Public articulation of Livepeer's shift to real-time AI video infrastructure ("Cascade"). Orchestrators upgrade hardware; inference becomes a first-class workload.

- 2025 [Foundation Launch, Product Proof, Daydream Launch]: Livepeer Foundation launched to steward the network's long-term growth. First Special Purpose Entities (SPEs) formed: AI SPE, Cloud SPE. Daydream launches (real-time AI video creation). ComfyStream / ComfyUI integration enables visual, real-time AI workflows. Majority of network fees now driven by AI inference, not just transcoding.

- 2026 [Where Livepeer is Today]: Livepeer recognised as the open, real-time AI layer for video. Differentiation is clear: low-latency streaming + AI inference at scale, powered by a decentralized GPU network.

## Livepeer Development Stages

Livepeer's development has been marked by six key phases:

- **Snowmelt** (April 30, 2018) [Livepeer Alpha Launches]: Proposed in LIP-1 and went live in April 2018. Marked the launch of Livepeer Alpha on Ethereum mainnet. The first functional version of the network-enabled basic video broadcasting and the generation of LPT rewards from an initial total token supply of 10 million LPT at Genesis.

- **Tributary** (Aug. 23, 2018) [Developer Enabling]: Proposed in LIP-10 and went live in August 2018. Enabled developers to build on Livepeer's video infrastructure and addressed major pain points identified in the protocol's first iteration.

- **Streamflow** (Jan. 17, 2020) [Scalability & Micropayments]: Proposed in May 2019 in LIP-30 and went live in January 2020. Expanded the network's node capacity from 25 to 100, introduced the "Transcoder" role, splitting the original orchestrator role to drive network efficiency and performance. This upgrade also introduced Probabilistic Micropayments and offchain job negotiations.

- **Confluence** (Feb. 15, 2022) [Layer 2]: Initially proposed in September 2021 in LIP-80 and went live in February 2022. This upgrade deployed Livepeer on Arbitrum, moving the protocol's functionalities to the Layer-2 network. This significantly reduced the protocol's gas fees and offered faster transactions to network participants.

- **Delta** (Oct. 13, 2023) [Onchain Treasury]: Proposed in April 2023, Livepeer Delta went live in October 2023 following the passing of LIP-91. This upgrade deployed a community-governed onchain treasury for the protocol Livepeer. It also introduced new parameters to Livepeer's staking contract that routes a portion of LPT's inflationary emissions to the treasury, which is used to fund Public goods.

- **Cascade** (Current) [AI-first Gateways]: Proposed in May 2025 in LIP-100. This upgrade introduces AI-first gateways, combining video & AI workloads. Supporting custom AI models and job types, allowing AI developers to utilize its global GPU network for both video-specific and broader applications.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/home/about-livepeer/roadmap.mdx
---
---
mode: wide
title: What's Next for Livepeer?
sidebarTitle: Roadmap
description: >-
  What's next for Livepeer? A look at the Livepeer Foundation Roadmap - get
  involved!
keywords:
  - livepeer
  - livepeer roadmap
  - livepeer timeline
  - livepeer future
  - livepeer plans
  - livepeer vision
  - livepeer goals
  - livepeer objectives
  - livepeer targets
  - livepeer aspirations
  - livepeer ambitions
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: everyone
---

Livepeer Roadmap: https://roadmap.livepeer.org/roadmap

## Roadmap

As AI models evolve toward world models, autonomous agents, and real-time simulation, demand for open GPU infrastructure continues to be exponential.

Livepeer meets this dynamic need and is expanding its interactive media capabilities - embedding provenance, trust & authenticity into world models and the Livepeer network.

Livepeer is building the **open execution layer** for internet-scale *real-time media experiences*.

Affordable. Performant. Dynamically Scalable.

[Full roadmap embedded from: https://roadmap.livepeer.org/roadmap]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-overview.mdx
---
---
title: Livepeer Overview
sidebarTitle: Livepeer Overview
description: An overview of the Livepeer protocol and network.
keywords:
  - livepeer
  - about
  - livepeer protocol
  - protocol overview
  - protocol
  - overview
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: overview
---

# Overview

Livepeer is a full-stack decentralised infrastructure platform and marketplace for video streaming & AI. The video streaming software is underpinned by a network of actors that perform the work needed to compute, transcode & orchestrate video & AI jobs in the Livepeer network.

Open-participation, distributed infrastructure systems like Livepeer aren't just software systems - they're multi-layered digital ecosystems that require careful design of economic incentives, governance structures, and technical architecture.

Note: Livepeer was one of the earliest DePIN (Decentralized Public Infrastructure Network) projects in the blockchain space.

From a marketplace perspective, Livepeer has:
- A **demand-side** agent (an app, platform, or operator) which brings video or AI jobs;
- A **supply-side** agent (Orchestrators and their GPU capacity, optionally backed by separate worker processes) which performs compute and other work;
- A **protocol** which provides the governance, payment primitives and reward system to coordinate open participation and make the market viable at scale.

From a systems engineering perspective, Livepeer has:
- A **hardware layer** of GPU nodes (orchestrators) that perform the compute work
- A **network layer** of `go-livepeer` nodes that handle job routing, verification and payment;
- A **software layer** of services built on top of the network layer (e.g. Studio, Daydream, ComfyStream)
- A **protocol layer** of smart contracts that enforce the rules of the network.
- An **economics layer** of tokenomics and game theory that aligns incentives.

## Livepeer Protocol

The **Livepeer Protocol** is the underlying on-chain logic that enforces the mechanisms, incentives and rules to ensure the security, reliability, cooperation and coordination of these decentralised actors. The protocol defines the economic mechanisms and governance rules that enforce staking, bonding, slashing, and reward rules on-chain, while off-chain nodes and services handle the actual compute jobs and job routing.

Protocol Services:
- staking, delegation, inflation & rewards, orchestrator selection, slashing, probabilistic payments, verification rules

## Livepeer Network

The network is the actual running system and execution layer - the mesh of hardware and software nodes performing work:
- Orchestrators (GPU nodes), Transcoders / Workers, Gateways (aka Broadcasters), Verification processes, Job routing, Real-time AI & video compute

Network Services: Job routing, Verification, Payment, AI inference, Video Transcoding, Real-time AI Video Streaming

## Protocol vs Network

The protocol governs. The network performs the work.

| Layer | Description |
| ----- | ----------- |
| **Livepeer Protocol** | On-chain crypto-economic incentives & coordination; staking; payments. |
| **Livepeer Network** | Off-chain nodes performing real-time work (transcoding, inference, routing). |
| **Relationship** | The network runs the compute; the protocol governs, secures, and pays it. |

On-chain vs Off-chain:
- Livepeer protocol = Arbitrum One (L2)
- Livepeer token (LPT) = Ethereum mainnet (L1)
- Livepeer network (GPU nodes + gateways) = off-chain execution layer

## Livepeer Nodes, Actors & Roles

A Livepeer actor is any role or entity that participates in the Livepeer protocol or network and performs actions defined by the system. Actors are fundamental to describing how the network functions end-to-end.

Core actors:
- **Orchestrators** - GPU nodes that perform transcoding / AI jobs, earn fees + staking rewards.
- **Gateways** - Clients submitting jobs (video or AI) into the network. The users and builders of the network.
- **Delegators** - LPT holders who stake to an orchestrator.
- Additionally: Transcoders (Video Workers), AI Workers, Verification Nodes.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/mental-model.mdx
---
---
title: The Livepeer Stack and Mental Model
sidebarTitle: Livepeer Mental Model
description: >-
  A high-level introduction to the key concepts workings of the Livepeer open,
  on-demand AI & Media infrastructure substrate and the distributed
  crypto-primitive coordination system.
keywords:
  - livepeer
  - about
  - core concepts
  - mental model
  - introduction
  - key
  - architecture
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: faq
---

# Livepeer Mental Model

Livepeer is a crypto-economic coordination protocol that secures a global, on-demand GPU network optimized for real-time video and AI, and exposed through developer-friendly platforms and applications.

You can think of Livepeer as a decentralised serverless GPU fabric with a cryptoeconomic control plane, where services are exposed through a set of developer-friendly products and applications.

Livepeer's crypto-economic primitives and decentralised compute mesh provide additional benefits including: dynamic scaling & resilience, global payment rails (accessible by AI agents), permissionless global participation & access, fairer creator economics, lower latency and data ownership, lower costs without lock-in, incentives provide a runway to self-sustaining permissionless global infrastructure, network effects.

## Infra Layers

**Protocol**: A crypto-economic protocol that secures and coordinates the network (incentives, staking, governance, payments). The protocol provides trust, coordination and payment mechanisms.

**Network**: A global GPU network that performs the actual compute work (supply, routing, performance). Orchestrators and Gateways supply compute, routing, and verification.

**Applications and Platforms**: A set of developer-facing tools and applications (APIs, SDKs, apps) which expose the network's capabilities in a usable way.

## Livepeer as an OSI-Like Stack

Livepeer can be roughly pictured as an OSI stack where the "cloud control plane" is replaced by a cryptoeconomic protocol, and persistent storage is optional, external, and secondary to real-time streamed compute.

### Network & Protocol Stack

**Layer 1: Physical Compute & Resource Layer** (OSI: Physical)
- GPUs, CPUs, memory, bandwidth. Heterogeneous hardware (consumer to data-center grade). Power, latency, geographic placement.
- Hardware contributed and owned by independent operators. Capacity surfaced to the network via orchestrator infrastructure.
- Key Idea: Livepeer does not own infrastructure. It indexes and incentivizes it.

**Layer 2: Transport & Media Substrate** (OSI: Data Link / Transport)
- Video transport, chunking, codecs, streaming primitives. Frame-level + segment-level delivery. Peer discovery, routing, and delivery paths.
- Segment-based processing and delivery patterns. Low-latency media delivery is a core competence.
- Key Idea: This is where Livepeer differs from generic GPU clouds: it is built around media-native transport patterns.

**Layer 3: Distributed Execution Network** (OSI: Network)
- Distributed job routing + load balancing. Service discovery and selection. Capacity-aware and performance-aware execution selection.
- Orchestrator selection and routing mechanisms. Segment/task model: work broken into independently computable units.
- Key Idea: The network decides who executes; the protocol incentivizes honest participation.

**Layer 4: Crypto-Economic Coordination Layer** (OSI: Session / Control Plane)
- On-chain logic that secures and coordinates the network. Cryptoeconomic primitives that align incentives.
- On-chain protocol + off-chain coordination patterns that allow permissionless participation, coordinate stake-weighted influence, and align behavior with network goals.
- Key Idea: This is the "brain" that replaces a centralized cloud control plane. It incentivizes correct behavior, but does not run jobs.

**Layer 5: Economic & Security Layer** (OSI: No direct equivalent)
- Cryptoeconomic primitives that align incentives. Game-theoretic mechanisms that ensure correct behavior.
- LPT staking + delegation, Inflation-based rewards, Fee capture and distribution, Slashing, Governance processes (LIPs, voting, treasury stewardship).
- Key Idea: Security is achieved via economic incentives + cryptographic verification, not trust in a single operator.

**Layer 6: Data & State Layer** (OSI: Presentation / Data)
- Data plane around jobs: segments, manifests, logs, receipts. Temporary + derived artifacts needed for execution and verification.
- Livepeer is intentionally light on storage. Video segments and state are often ephemeral and pipeline-driven. Long-term storage is typically external.
- Key Idea: Livepeer coordinates compute over data, not long-term data custody.

### Platform and Application Stack

**Layer 7: Platform Services** (OSI: Application Services)
- Managed services that abstract protocol/network complexity. Operational tooling: dashboards, analytics, key management, billing abstraction.
- Examples: Livepeer Studio, Streamplace, Daydream.
- Key Idea: This is where the network meets real-world needs. Products are opinions about access - they are not the protocol and not the network.

**Layer 8: Developer Interfaces** (OSI: Presentation / developer-facing)
- APIs, SDKs, client libraries, docs, example repos. Gateway APIs, SDKs (JS, Python, etc.), BYOC-style integrations.
- Key Idea: This layer collapses network/protocol complexity into stable developer primitives.

**Layer 9: Developer Applications** (OSI: Application)
- End-user applications and services built on top of Livepeer. Examples: Decentralized Twitch alternatives, AI video apps, surveillance/vision pipelines, Metaverse/XR video.
- Key Idea: Applications are plural and replaceable; the network remains the substrate.

**Layer 10: End User** (OSI: Application)
- Viewers, creators, AI consumers. Users typically never see orchestrators, staking/delegation, or protocol mechanics.
- Key Idea: End users are the ultimate beneficiaries of the network, but they don't need to know or care about the underlying technology.

## Middleware & Integrations

Livepeer replaces persistent storage coupling with streamed, ephemeral compute coordination.

The "joining layer" is: Protocol-level orchestration, segment-based streaming, economic guarantees.

Conceptually: **A decentralized serverless GPU fabric with a cryptoeconomic control plane.**

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/portal.mdx
---
---
mode: frame
title: 'About Livepeer: Protocol & Network'
sidebarTitle: About Portal
description: 'Welcome To The About Portal: Explore, Connect, Contribute'
keywords:
  - livepeer
  - about
  - about livepeer
  - about portal
  - about livepeer portal
  - about livepeer network
  - about livepeer protocol
  - about livepeer token
  - about livepeer governance
  - about livepeer actors
  - about livepeer economics
  - about livepeer whitepaper
  - about livepeer faq
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: landing
audience: general
purpose: landing
tag: Start Here
---

About Portal landing page for _dep-docs/about/.

Overview: "Livepeer is a decentralized infrastructure protocol that allows users to upload, transcode, and serve video content & run AI pipelines. It operates on a network with different node types including Gateways (formerly Broadcasters), Orchestrators, and Transcoders. The protocol uses smart contracts deployed on Ethereum Mainnet and Arbitrum Mainnet, with the native token LPT (Livepeer Token). Since the Confluence upgrade, the protocol primarily runs on Arbitrum Mainnet."

Portal cards link to:
- Core Concepts: A high-level introduction to the key concepts workings of the Livepeer open, on-demand AI & Media infrastructure substrate.
- Mental Model: A canonical model with an OSI stack comparison to help you understand how Livepeer operates in terms of infrastructure layers.
- Livepeer Protocol: A deep dive into the on-chain governance and incentive layer that secures and coordinates Livepeer.
- Livepeer Network: The models, nodes and actors that contribute to the Livepeer Real-time Video AI Network.
- Livepeer Glossary: A comprehensive glossary of terms used in the Livepeer Real-time Video AI Network.
- Livepeer Whitepaper: The original Livepeer Whitepaper (2017).

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/overview.mdx
---
---
title: Livepeer Network Overview
sidebarTitle: Network Overview
description: An overview of the Livepeer network and its components.
keywords:
  - livepeer
  - about
  - livepeer network
  - network overview
  - network
  - overview
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: overview
audience: general
purpose: overview
---

Livepeer's core protocol defines the conditions for the network to provide real-time video and AI compute services. The network is the execution layer. It is the actual running system of machines performing work to execute the product vision.

- Gateways (broadcasters) submit jobs (video or AI) into the network from applications or services
- Orchestrator nodes (stakers) process and compute the work, and
- Delegators stake tokens to support governance and security of the network

## Network Components

### Node Types

The protocol implementation defines several node roles (not all are formal network actors) that cooperatively execute on the protocol to provide the desired network functions.

- **Broadcaster Node**: Centers on LivepeerServer managing rtmpConnections and BroadcastSessionsManager
- **Gateway Node**: Adds AISessionManager and AI HTTP handlers on top of broadcaster functionality
- **Orchestrator Node**: Uses the orchestrator struct with SegmentChans for job distribution and Recipient for payments
- **Transcoder Node**: RemoteTranscoderManager coordinates local or remote transcoding via LocalTranscoder
- **AI Worker Node**: RemoteAIWorkerManager manages Docker containers running AI models

### Core Components

- LivepeerNode: An interface node implemented by all other node types in the network
- Media Server (LivepeerServer): Manages media processing and serves HTTP/RTMP endpoints
  - RTMP ingestion for live streams, HTTP push for video segments, HLS playback endpoints, Management of active connections
- Broadcast Sessions Manager, Orchestrator, Transcoder, AI Gateway, AI Workers

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/actors.mdx
---
---
title: Actors Overview
sidebarTitle: Actors Overview
description: 'Who participates in Livepeer, what each role does, and how roles interact.'
keywords:
  - livepeer
  - about
  - actors
  - gateway
  - orchestrator
  - delegator
  - developers
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: concept
---

Livepeer's ecosystem involves both protocol actors (on-chain roles) and network actors (network participants and builders). Actors are the participants that make the Livepeer network function economically and technically.

## Core Actors

The Livepeer network has three main actor roles: Orchestrators, Delegators, and Gateways (formerly called Broadcasters). Transcoders now refer simply to the GPU instances attached to Orchestrators.

**Orchestrators (Node Operators)**: Run the go-livepeer client software and provide compute (usually GPU-accelerated) to transcode video streams or run AI inference jobs. Orchestrators stake LPT (self-bond) to become active: the higher their stake (plus delegated stake), the more work they are assigned. They set pricing parameters (ETH per pixel, fee share %, reward share %) and must call on-chain functions (like reward) to claim ETH fees and LPT inflation each round.

**Delegators (Token Holders)**: Any LPT holder can stake their tokens by delegating to one or more Orchestrators. Delegation does not transfer token ownership - the LPT remains in the delegator's wallet, bonded by the staking contract. In return, Delegators receive a fraction of each Orchestrator's fees and inflation (according to the Orchestrator's chosen feeShare and rewardShare percentages). Delegators also gain governance rights.

**Gateways (Broadcasters/Clients)**: Gateways are entities that publish video streams or AI inference requests to the network. A Gateway sends raw media segments to the network along with ETH to pay for services. It negotiates with Orchestrators (off-chain) to select a suitable worker, attaches tickets as payment promises for each segment, and eventually receives the transcoded output. Gateways pay ETH fees (on-chain via the TicketBroker contract) and do not need LPT. Gateways are the network's demand side and do not earn stake rewards.

Key Role Flow: Delegators stake LPT to support Orchestrators, which powers security and gives Delegators a cut of rewards. Orchestrators register on-chain, declare capacity and pricing, then accept work from Gateways. Gateways submit video/AI jobs (paying fees) to Orchestrators for processing, receiving back transformed data.

## Role Summary

### Developers And Applications
- Bring demand into the network; integrate through gateway-facing APIs; optimise for latency, quality, and cost

### Gateway Operators
- Provide job intake and coordination; match workloads to available orchestrators; handle routing, retries, and service-level interfaces

### Orchestrator Operators
- Provide supply-side compute participation; execute or coordinate transcoding and AI workloads; earn fees and rewards based on activity and stake backing

### Delegators
- Bond LPT to orchestrators; influence security and economic weight; share in reward and fee outcomes

## Interaction Pattern

A common pattern is: Application -> Gateway -> Orchestrator -> Gateway -> Application

This separation improves operator specialization and system composability.

## Why Role Separation Matters

- Better developer experience on the demand side
- Operational specialization on the supply side
- Open competition across service and compute providers
- Clearer accountability for pricing, performance, and reliability

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/demand-side.mdx
---
---
title: Livepeer Demand Side
sidebarTitle: Demand Side
description: Learn about the Livepeer demand side.
keywords:
  - livepeer
  - about
  - livepeer network
  - demand side
  - demand
  - side
  - learn
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

This page describes the Demand Side:

- Gateway role
- Job submission
- Pricing
- Service discovery
- Marketplace interaction

[stub - outline only]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/fee-flow.mdx
---
---
title: Livepeer Fee Flow
sidebarTitle: Fee Flow
description: Learn about the Livepeer fee flow.
keywords:
  - livepeer
  - about
  - livepeer network
  - fee flow
  - fee
  - flow
  - learn
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

This page describes the Fee Flow:

- Job pricing
- Payment model
- Revenue sharing
- Incentive alignment

[stub - outline only]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/supply-side.mdx
---
---
title: Livepeer Supply Side
sidebarTitle: Supply Side
description: Learn about the Livepeer supply side.
keywords:
  - livepeer
  - about
  - livepeer network
  - supply side
  - supply
  - side
  - learn
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

This page describes the Supply Side:

- GPU operators
- Pools
- Hardware requirements
- Performance metrics

[stub - outline only]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/scaling.mdx
---
---
title: Livepeer Scaling
sidebarTitle: Scaling
description: Learn about the Livepeer scaling.
keywords:
  - livepeer
  - about
  - livepeer network
  - scaling
  - learn
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---

This page describes Performance and Scaling:

- Network throughput
- Latency
- Scalability
- Bottlenecks
- Future scaling
- Points to explorer metrics.

[stub - outline only]

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/interfaces.mdx
---
---
title: Network Interfaces
sidebarTitle: Interfaces
description: >-
  How to interact with the Livepeer Network and protocol: REST and gRPC APIs,
  GraphQL, JS SDK, CLI, and smart contract interfaces.
keywords:
  - livepeer
  - about
  - livepeer network
  - interfaces
  - API
  - SDK
  - CLI
  - GraphQL
  - REST
  - gRPC
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
---

Livepeer exposes multiple access interfaces for developers, creators, and infrastructure operators to interact with the protocol and network. These include SDKs, REST and gRPC APIs, the CLI, GraphQL endpoints, and playback tooling for on-chain and off-chain applications.

## Interface categories

| Interface | Use case | Users | Access |
| --------- | -------- | ----- | ------ |
| REST API | Start sessions, control workflows | App developers, Gateways | HTTPS |
| gRPC API | Fast low-latency session control | Gateway nodes | gRPC |
| GraphQL API | Explore network, jobs, rewards | Analysts, explorers | GraphQL |
| JS SDK | Playback, ingest, session control | Frontend developers | JavaScript |
| CLI | Orchestrator & delegator control | Node operators | Terminal |
| Smart contracts | Protocol-level operations (stake, redeem, govern) | Power users, devs | Solidity / RPC |

## REST API (Livepeer Studio)

Available at: `https://livepeer.studio/api`

Common endpoints:
- `POST /stream` - Create video stream ingest session
- `POST /transcode` - On-demand file transcode
- `POST /ai/infer` - Submit AI job (e.g. image enhancement)
- `GET /session/:id` - Fetch session status

## gRPC API (Gateway nodes)

gRPC allows high-throughput, low-latency Orchestrator routing.

Methods (examples): `ReserveSession`, `Heartbeat`, `ReportJobComplete`, `OrchestratorList`

Used by: Studio Gateway, Daydream Gateway, Cascade.

## GraphQL Explorer API

Endpoint: `https://explorer.livepeer.org/graphql`

Also supports: delegator rewards, inflation rate, total active stake, round info.

## JS SDK

GitHub: @livepeer/sdk. Install: `npm install @livepeer/sdk`

Features: Ingest (create stream, push video), AI job submit, view session output, wallet support (ETH, credit), playback and stats.

Used in: Livepeer Studio, Daydream, VJ apps (e.g. MetaDJ).

## CLI

Install via Go build or Docker: `go install github.com/livepeer/go-livepeer`

Commands (examples): `stake`, `unbond`, `withdraw`, `reward`, `claim`, `transcode`, `broadcast`, `query`

## Smart contract interfaces

Interact directly with the protocol (Arbitrum) via RPC and ABIs.

| Contract | Function (examples) |
| -------- | ------------------- |
| BondingManager | stake, reward, unbond |
| TicketBroker | redeem tickets, deposit, withdraw |
| Governor | vote, queue, execute LIPs |

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/job-lifecycle.mdx
---
---
title: Livepeer Job Lifecycle
sidebarTitle: Job Lifecycle
description: >-
  This page describes the end-to-end "compute job" as a state machine. Since
  Livepeer's compute is segment-oriented, the lifecycle is modelled at the level
  of a stream session and per-segment processing, with payment settlement
  occurring continuously via tickets and periodically via reward calls.
keywords:
  - livepeer
  - about
  - livepeer network
  - job lifecycle
  - job
  - lifecycle
  - learn
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: how_to
---

### Lifecycle Narrative

A minimal, source-grounded job lifecycle is:

1. **Ingest and segmentation**: A Gateway receives an RTMP stream and produces segments to be processed.
2. **Discovery and selection**: The Gateway selects an Orchestrator set according to the node software's discovery logic.
3. **Price and session parameters**: Orchestrators advertise a price per pixel (Wei denominated) to gateways off-chain.
4. **Segment dispatch and compute**: The Gateway uploads segments; the Orchestrator executes transcoding/AI compute locally or delegates to attached transcoder processes.
5. **Result return and verification**: Results are returned to the Gateway; verification may be performed. Failures can trigger orchestrator swaps and retries.
6. **Continuous settlement**: The Gateway sends probabilistic payment tickets; the Orchestrator redeems winning tickets and the system tracks redemption errors and redeemed value.
7. **Periodic reward accounting**: Each round, orchestrators may call reward() as an Arbitrum transaction distributing minted rewards to itself and its delegators.

### State machine (Idle → Ingesting → Discovering → SessionEstablished → SegmentDispatch → Executing → Returning → Verifying → Publishing → Settling → [loop or Drained/Failed])

Key events and transitions:
- Stream starts: Idle → Ingesting
- Discovery fails: Discovering → Failed
- Segment transcode fails: Executing → Retry (maxAttempts default 3)
- Orchestrator swap mid-stream: Retry/Verifying → SwapOrchestrator
- Payment sent: Publishing → Settling
- Reserve/deposit depleted: Settling → Drained

### Job Lifecycle (video vs AI)

**Transcoding Workflow**:
1. Register Funds: Pre-funds an on-chain TicketBroker contract with ETH equal to the expected job fees.
2. Select Orchestrator: Off-chain, the Gateway queries the network to find an active Orchestrator whose price and location meet its needs.
3. Submit Segments: For each video segment, the Gateway sends the raw segment to the chosen Orchestrator along with a probabilistic payment ticket.
4. Transcode: The Orchestrator passes the segment to its connected Transcoder (the GPU hardware) which generates requested renditions.
5. Return Results: The Transcoder returns encoded segment(s) to the Orchestrator, which sends them back to the Gateway.
6. Redeem Payments: Periodically, the Orchestrator submits any winning tickets to the TicketBroker on-chain, redeeming them for ETH.

**Probabilistic Payments**: Instead of paying per-segment, Gateways use a lottery-ticket scheme. Each ticket has a chance to "win" a fixed ETH prize. Over many segments, the expected payout equals the true cost of work.

**AI Inference Workflow**: AI jobs use the same stake/fee model but may involve pipelines of multiple models. A Gateway sends initial data and a prompt, and orchestrators sequentially apply models until a final video is produced. For example, Daydream captures webcam video, sends it through a StableDiffusion pipeline on the network, and returns the stylized video output.

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/marketplace.mdx
---
---
title: Livepeer Marketplace
sidebarTitle: Marketplace
description: >-
  How the Livepeer Network marketplace matches demand and supply for real-time
  media compute: transcoding and AI inference, including routing, pricing, and
  settlement.
keywords:
  - livepeer
  - about
  - livepeer network
  - marketplace
  - routing
  - orchestrators
  - gateways
  - pricing
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: concept
---

The Livepeer Network supports a dynamic decentralized marketplace for real-time media compute: transcoding and AI inference. Unlike static infrastructure platforms, Livepeer's open marketplace introduces real-time **bidding, routing, and pricing** of jobs across a global pool of Orchestrators.

## Marketplace overview

| Element | Role |
| ------- | ---- |
| Gateway / Client | Submit job requests (stream, image, session intent) |
| Gateway | Matches requests to suitable Orchestrators |
| Orchestrator | Advertises availability, pricing, and capabilities |
| Worker | Executes compute task (Transcoder or AI worker) |
| TicketBroker | Receives tickets for ETH reward upon verified work (on-chain) |

This market is **continuous** - Orchestrators are always available for sessions; Gateways route work off-chain without per-job on-chain gas.

## Demand: client workloads

| Job type | Example use case | Payment style |
| -------- | ---------------- | ------------- |
| Live stream | RTMP ingest for video platforms | Per-minute ETH / credits |
| AI inference | Frame-by-frame image-to-image generation | Per-job (frame, token) |
| File transcode | Static MP4 → web formats | Batch credits |

## Supply: Orchestrator nodes

Orchestrators advertise: Hardware specs (GPU/CPU, memory), Region and latency, Supported workloads (video, AI, or both), Price per segment / frame / token.

## Routing logic

The Gateway scores Orchestrators by: Latency to input source, Workload match (video vs AI), Cost per job, Availability and retry buffer.

Sessions are **routed** off-chain to the best match; no on-chain gas is spent per job.

## Price discovery

The current Livepeer implementation uses **posted pricing** (Orchestrator-set), not auction-based.
- Clients can be matched to the lowest available compatible provider.
- Prices may vary by region, GPU load, quality profile.

## Payments and settlement

**Clients** pay via: ETH tickets (settled on-chain via the protocol's `TicketBroker`), or Credit balance (tracked off-chain by some Gateways).

**Orchestrators**: Claim winning tickets to the `TicketBroker` on Arbitrum, Accumulate ETH earnings from transcoding/AI work, Claim inflation (LPT) rewards from the `BondingManager` each round.

## Protocol-market boundaries

| Layer | Description | Example |
| ----- | ----------- | ------- |
| Protocol | Verifies work and pays ETH & LPT rewards | TicketBroker, BondingManager |
| Marketplace | Matches jobs to compute providers | Gateway load balancer, routing |
| Interface layer | Abstracts API, SDK, session negotiation | Livepeer Studio SDK, Daydream API |

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/about/livepeer-network/technical-architecture.mdx
---
---
title: Network Technical Architecture
sidebarTitle: Technical Architecture
description: >-
  Technical stack of the Livepeer Network: node types, gateway infrastructure,
  APIs, CLI, SDKs, and monitoring. How orchestrators, gateways, and workers fit
  together.
keywords:
  - livepeer
  - about
  - livepeer network
  - technical architecture
  - stack
  - orchestrator
  - gateway
  - go-livepeer
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: general
purpose: concept
---

This page outlines the full stack of tools, infrastructure, and components that power the Livepeer Network at the node, Gateway, and client level. Livepeer's architecture is modular and developer-facing: you can run an Orchestrator, build a custom AI Gateway, or use APIs to build media apps on decentralized compute.

## Architecture layers

Stack (top to bottom): Apps / SDKs / Interfaces → Gateway APIs / REST / GraphQL → Gateway Nodes → Orchestrator Node (go-livepeer) → Worker Layer (FFmpeg / AI) → Protocol (Ethereum / Arbitrum)

The network sits above the protocol: Gateways and Orchestrators handle off-chain compute and routing; the protocol (Arbitrum) handles staking, tickets, and rewards.

## Orchestrator node

The Orchestrator node runs **go-livepeer** (the `livepeer` binary): https://github.com/livepeer/go-livepeer

Key components:
- **Transcoder selection** - Internal or external workers; configured via `orchSecret` and `orchAddr` for remote transcoders
- **Ticket validation** - L2 `TicketBroker` on Arbitrum for ETH payment redemption
- **Reward claim** - Merkle submission to `BondingManager` each round
- **LPT staking** - BondingManager for self-bond and delegator stake
- **Region advertisement** - For Gateway routing (latency, capacity)

Deployment modes: Bare metal with GPU, Containerized, Cloud auto-scaling

Tools: `livepeer_cli` (Stake, set fee/reward cut, monitor sessions), `livepeer_exporter` (Prometheus metrics exporter)

## Worker layer

| Type | Language / runtime | Example use |
| ---- | ----------------- | ----------- |
| Transcoder | FFmpeg | .ts segment processing, multi-bitrate output |
| Inference | Python (Torch) | AI tasks, e.g. SDXL image-to-image |
| Plugin | WebRTC / C++ | Real-time browser capture or object detection |

## Gateway infrastructure

Gateways manage: Session auth (API key, ETH deposit, or credit check), Job routing to Orchestrators, Session logging and retries.

Codebases: Studio Gateway, Daydream Gateway, Cascade (Load balancer and AI workflow coordination)

Features: Rate limiting, region scoring, health probes, fallback Orchestrators, credit tracking.

## APIs

| API | Protocol | Description |
| --- | -------- | ----------- |
| REST Gateway | HTTPS | Transcode, AI job control (e.g. Livepeer Studio API) |
| gRPC Gateway | gRPC | Fast session handshakes, monitoring |
| Explorer API | GraphQL | Metrics, staking, round data (explorer.livepeer.org) |

## CLI and SDKs

**CLI:** `livepeer_cli` (shipped with go-livepeer)
- Stake LPT, bond/unbond; Set Orchestrator fees and reward cut; Watch active sessions, query protocol state

**SDKs:**
- Livepeer JS SDK: Playback, ingest, AI session tools; works in Node.js and browser
- Python AI pipelines: Used in internal and community projects

## Monitoring and observability

| Tool | Metric type | Description |
| ---- | ----------- | ----------- |
| Prometheus | Session, CPU, ticketing | Exposed via livepeer_exporter |
| Grafana dashboards | Visual ops | Studio and Orchestrator internal views |
| Loki | Logs | Transcode errors, API retries |
| Gateway logs | Credits, API, routing | Per-session logs |

===END FILE===

---
FILE: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/_dep-docs/home/about-livepeer/benefits.mdx
---
---
mode: wide
title: The Livepeer Advantage
sidebarTitle: Benefits
description: >-
  Livepeer offers an open, cost-effective, performant, and scalable trusted
  execution layer for the interactive AI-first internet.
keywords:
  - livepeer
  - home
  - project showcase
  - why livepeer
  - best choice
  - next project
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: everyone
purpose: concept
---

"Video is evolving - fast. The explosion of AI video generation and manipulation is creating entirely new classes of applications that need powerful, cost-effective, programmable video infrastructure. Livepeer is uniquely positioned to serve this need." - Doug Petkanics

As video becomes the dominant interface for the internet and AI transforms how it's created, processed, and experienced, the underlying infrastructure needs AI-native, real-time, performant systems that meet this demand.

## The Livepeer Advantage

For developers and startups, Livepeer lowers the barrier to building video products at scale. Usage-based pricing, open APIs, and composable architecture reduce upfront costs and long-term dependency on hyperscalers. Teams can move faster, experiment freely, and build differentiated video experiences without negotiating complex cloud contracts or absorbing runaway GPU bills.

- **Real-time AI-Infrastructure**: Designed for real-time interactive media AI. Livepeer is positioned for the fastest-growing class of video workloads - ranging from AI video to on-demand translation, music transforms and more, these workloads require low latency, high throughput, and elastic scaling.

- **Democratised Value Capture**: Value accrual belongs to the value creators. Permanently. Livepeer is a creator-first infrastructure: designed to enable builders, innovators and key participants to own and control their pricing, models, innovations and applications.

- **Provenance and Trust**: Verifiable Compute and Provenance Primitives. With AI becoming indistinguishable from human artefact, trust and verifiability are no longer optional. Backed by blockchain guarantees, Livepeer enables trust primitives for AI products: provenance, integrity, auditability.

- **Universal Payment Rails**: On-demand, agentic-friendly financial framework. Livepeer offers the core payment rails and architecture agents workflows rely on: pay-as-you-go, on-demand, global payments - no bank account required.

- **Automagic Scalability**: Elastic capacity for enterprise-grade reliability. Livepeer's open GPU marketplace offers both resilience, performance and on-demand scalability - with 5,800+ GPUs, 100% uptime, and 85M+ in paid fees - built for production workloads that need reliability and elastic scaling.

- **Crowd-Powered Innovation**: Open Access drives Accelerated Capabilities. Livepeer's community driven, open source, open access design is a 10x iteration engine. New models and capabilities can be deployed network-wide as soon as they emerge - accelerating user capabilities and innovation.

By separating infrastructure from platforms that control attention and monetization, Livepeer enables a more competitive, cooperative, innovative ecosystem: where creators, developers, and businesses can all collaborate in shaping the future of video.

## Technical Benefits

Livepeer is purpose-built for real-time video and AI workloads. Its distributed network of globally distributed GPUs is optimized for low-latency, real-time processing, making it well suited for live streaming, interactive video, and AI-driven enhancements.

Designed for low-latency **video ingest → processing → delivery**, and the ability to **deploy custom workflows** (model chains + pre/post processors) as a first-class unit of work.

By routing jobs across heterogeneous hardware, Livepeer delivers cost-efficient, performant and flexible infrastructure that scales with demand and adapts as video workflows evolve.

**Livepeer delivers:**
- Low Latency, Performant Infrastructure
- On-demand cost-effective pricing
- Automagic Scalability
- Open, Composable Architecture
- Community-Driven Innovation
- An Active and Passionate Developer Community

===END FILE===


