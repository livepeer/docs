---
title: NaaP Platform
description: Build a multi-tenant gateway platform with API keys, usage billing, and access control on top of Livepeer.
pageType: guide
purpose: build
lifecycleStage: build
audience: gateway
status: draft
---

# NaaP Platform

NaaP (Network-as-a-Product) is a multi-tenant architecture layered on top of a Livepeer gateway. You run the gateway infrastructure; third-party developers or internal teams consume capacity through your API with authentication, usage tracking, and billing.

This is how you turn a gateway from an infrastructure component into a commercial product.

---

## Architecture

```
End users → Your API (auth, billing) → NaaP middleware → go-livepeer gateway → Orchestrators
```

Two distinct payment layers operate simultaneously:

1. **Protocol layer:** Your gateway pays orchestrators via probabilistic micropayments (ETH on Arbitrum). This is the Livepeer protocol payment system described in S10.
2. **Business layer:** Your consumers pay you via whatever billing model you choose — subscription, per-request, per-minute, or hybrid.

Your margin = consumer payments minus protocol costs minus infrastructure costs.

The protocol layer is fixed by the Livepeer specification. The business layer is entirely yours to design.

---

## Components to build

### 1. Authentication layer

Generate and validate API keys per consumer. Each key maps to a consumer identity with associated rate limits and permissions.

Minimum implementation:
- API key generation endpoint (admin-only)
- Key validation middleware (every request)
- Per-key rate limiting
- Key revocation

### 2. Usage accounting

Track requests per consumer, broken down by pipeline type (video transcode, AI inference), model, duration, and resolution where applicable.

Store usage records with enough granularity to support your billing model. At minimum: timestamp, consumer ID, pipeline type, input size, output size, protocol cost.

### 3. Billing integration

Map usage data to invoicing. Options:

- **Stripe integration** — per-usage metering via Stripe's usage-based billing API
- **Custom invoicing** — generate invoices from usage records on your own schedule
- **On-chain billing** — smart contract that accepts payment and unlocks API access (higher implementation cost, suits crypto-native consumers)

### 4. Gateway middleware

Sits between your API layer and the `go-livepeer` process. Responsibilities:

- Route authenticated requests to the gateway
- Inject consumer context (consumer ID, tier) into request metadata
- Record usage events for the accounting layer
- Enforce per-consumer rate limits and quotas
- Handle error responses and retry logic

---

## NaaP reference implementation

{/* REVIEW: naap repo URL — verify with: GitHub */}

A reference implementation is available at `https://github.com/livepeer/naap` and includes:

- API key management
- Usage dashboard
- Per-consumer routing
- Example billing integration

Use it as a starting point. Fork and adapt to your billing model and consumer management requirements.

---

## Clearinghouse model

An alternative to building full NaaP middleware. A clearinghouse is a third-party payment abstraction: consumers interact with the clearinghouse API, and the clearinghouse manages the TicketBroker deposit and routes payments on their behalf.

{/* REVIEW: clearinghouse status — verify with: go-livepeer docs */}

With a clearinghouse:
- You do not manage TicketBroker deposits
- The clearinghouse handles payment ticket issuance
- You focus on routing and consumer management

Current status: beta. The clearinghouse model is functional but the tooling and documentation are still maturing.

---

## Commercial examples

Several production platforms operate on this model:

- **Livepeer Studio** — Hosted gateway-as-a-service with API key management, usage dashboards, and per-minute billing
- **Livepeer Cloud** — SPE-funded cloud gateway infrastructure for high-throughput workloads
- **Daydream** — AI-focused platform built on Livepeer gateway infrastructure, exposing AI pipelines to end users
- **Streamplace** — Video streaming platform with Livepeer transcoding backend

{/* REVIEW: commercial examples — verify with: livepeer.org, Livepeer Forum for current status */}

---

## Decision framework

| If you want... | Choose... |
|----------------|-----------|
| Full control over billing, branding, and consumer management | Build NaaP middleware |
| Managed payments with less infrastructure to operate | Use a clearinghouse |
| No infrastructure responsibility at all | Use a hosted gateway-as-a-service (Livepeer Studio, etc.) |

The right choice depends on your margin requirements and operational capacity. NaaP middleware gives you the highest margin but demands the most engineering and operational investment. A clearinghouse reduces payment complexity at the cost of some control. Hosted services eliminate operational burden but compress your margin to the difference between what you charge consumers and what the host charges you.

---

## Protocol cost estimation

To price your product, you need to understand your protocol-layer costs:

| Workload | Approximate protocol cost | Variables |
|----------|--------------------------|-----------|
| Video transcoding | 0.0001–0.0005 ETH per segment | Rendition count, resolution, codec |
| AI inference | 0.0003–0.005 ETH per request | Model size, pipeline type, GPU time |

{/* REVIEW: cost estimates — verify with: current orchestrator pricing on Livepeer Explorer */}

Monitor your actual protocol costs via the Prometheus metrics (`livepeer_ticket_*` family) and adjust consumer pricing to maintain your target margin.

---

**Exit state:** You have a clear picture of the NaaP architecture, understand the component boundaries, and have an actionable entry point into building or adopting a multi-tenant gateway platform.
