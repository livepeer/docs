---
title: What a Gateway Does
description: The gateway's role in the Livepeer network — what it routes, what it does not compute, and how it fits between applications and orchestrators.
pageType: concept
purpose: explain
lifecycleStage: discover
audience: gateway
status: draft
---

# What a Gateway Does

A gateway routes demand. It sits between applications and the orchestrator network, accepting video and AI jobs from upstream clients, selecting orchestrators, dispatching work, managing payment, and returning results. Think L7 load balancer with protocol-aware routing and built-in settlement.

A gateway does **not** perform compute. No GPU required. It is demand-side infrastructure — the counterpart to orchestrators, which are supply-side.

---

## Two compute types, two routing models

The gateway routes two categories of work into the network. Each has different discovery mechanics, pricing models, and session behaviour.

### Video transcoding

Applications send RTMP streams (port 1935). The gateway segments the stream, selects orchestrators based on price per pixel and latency, dispatches segments, and reassembles transcoded output as HLS or DASH. Pricing is pixel-based — cost scales with resolution and frame rate.

Orchestrator discovery for video uses the on-chain ServiceRegistry on Arbitrum. The gateway queries registered orchestrators, filters by price ceiling (`maxPricePerUnit`), and maintains a ranked session pool.

### AI inference

Applications send HTTP requests (port 8935). The gateway matches the requested AI capability (text-to-image, audio-to-text, LLM, live-video-to-video, etc.) against orchestrators advertising that capability, dispatches the job, and returns the result. Pricing varies by capability — per-inference for batch jobs, per-hour for real-time (Cascade) streams.

Orchestrator discovery for AI is capability-based. The gateway queries orchestrators for their supported model pipelines, filters by capability match and price, and routes accordingly.

---

## On-chain vs off-chain

Two operational modes determine how the gateway interacts with the Livepeer protocol. Both are valid production configurations.

**On-chain:** The gateway connects to Arbitrum protocol contracts — ServiceRegistry for orchestrator discovery, TicketBroker for payment settlement. The gateway holds an Ethereum private key, signs payment tickets directly, and manages its own deposit balance. Supports both video transcoding and AI inference.

**Off-chain:** The gateway delegates payment signing to a remote signer service. The gateway process holds no Ethereum private key. Orchestrators are specified manually or provided by the signer. Currently supports AI workloads only — video transcoding requires in-process signing due to per-segment ticket generation in the hot path. {/* REVIEW: off-chain video support status — verify with: go-livepeer remote signer PRs #3791, #3822 */}

---

## Internal architecture

The request flow through a gateway:

```
Application → Gateway (go-livepeer) → Orchestrator selection → Job dispatch → Orchestrator → Result return → Application
```

Internally, `go-livepeer` runs two session managers:

- **BroadcastSessionsManager** — handles video transcoding sessions. Manages segment-level orchestrator assignment, failover, and per-segment payment tickets.
- **AISessionManager** — handles AI inference sessions. Manages capability matching, model pipeline routing, and AI-specific pricing.

Both session managers share the same orchestrator discovery and payment infrastructure but differ in how they select orchestrators (price-per-pixel vs capability match) and how they structure sessions (segment-based vs request-based).

---

## Five core functions

Every job routed through a gateway involves these operations:

1. **Job routing** — Accept inbound requests (RTMP for video, HTTP for AI), determine the workload type, and dispatch to the correct session manager.

2. **Orchestrator discovery and selection** — Find available orchestrators (on-chain registry or manual list), filter by price ceiling and capability, rank by latency and performance history, and assign sessions.

3. **Payment issuance** — Generate probabilistic micropayment tickets per job segment. Each ticket is a signed commitment backed by the gateway's TicketBroker deposit. Most tickets are non-winning (no on-chain cost); winning tickets are redeemed by orchestrators on Arbitrum.

4. **Session management** — Maintain persistent connections to orchestrators for the duration of a stream or job batch. Handle failover if an orchestrator becomes unresponsive — reassign to the next-ranked orchestrator without dropping the stream.

5. **Capability matching (AI)** — For AI jobs, match the requested pipeline (e.g., `text-to-image`, `llm`, `live-video-to-video`) against orchestrator-advertised capabilities. Filter by model availability, warm-up state, and price.

---

## What a gateway does not do

- **No protocol-level rewards.** Gateways do not earn LPT inflation rewards or ETH staking fees. Revenue comes from the business layer — charging downstream applications for access to the network.
- **No GPU compute.** The gateway never processes video frames or runs AI models. It delegates all compute to orchestrators.
- **No LPT staking.** LPT is not required for gateway operation. LPT is the staking and governance token used by orchestrators and delegators.

---

## Gateway vs orchestrator vs hosted service

| | Gateway | Orchestrator | Hosted service (Studio/Cloud) |
|---|---|---|---|
| **Role** | Routes demand | Performs compute | Abstracts both |
| **GPU required** | No | Yes | No (provider-managed) |
| **Earns protocol rewards** | No | Yes (LPT + ETH fees) | No |
| **Holds ETH** | Yes (on-chain) or no (off-chain) | Yes (receives payment tickets) | No |
| **Runs `go-livepeer`** | Yes | Yes | No |
| **Revenue model** | Business-layer margin | Protocol fees + staking rewards | Subscription/usage fees |
