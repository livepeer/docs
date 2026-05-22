---
title: Gateway Path Finder
description: Identify the right gateway deployment path based on your infrastructure goals, ETH requirements, and operational preferences.
pageType: navigation
purpose: orient
lifecycleStage: evaluate
audience: gateway
status: draft
---

# Gateway Path Finder

Four deployment paths exist for routing jobs through Livepeer. Each produces a working gateway — they differ in who holds the ETH, who runs the infrastructure, and how orchestrators are discovered.

Pick the path that matches your operational constraints, then follow the linked setup guide.

---

## Path 1: On-chain self-hosted

Full protocol participation. The gateway connects directly to Arbitrum, manages its own wallet, issues probabilistic micropayment tickets, and discovers orchestrators via the on-chain ServiceRegistry contract.

**Who this is for:** Operators who want maximum control over orchestrator selection, pricing, and payment flow. Teams building differentiated routing or pricing strategies.

**Requirements:**

- ETH on Arbitrum One (minimum 0.1 ETH for testing; 0.36 ETH recommended for production) {/* REVIEW: 0.36 ETH production minimum — verify with: GitHub issue #3744 may have updated this */}
- Funded TicketBroker deposit and reserve
- Arbitrum RPC endpoint (public or private)
- `go-livepeer` binary or Docker image

**Next step:** On-Chain Gateway Quickstart (S04)

---

## Path 2: Off-chain self-hosted

Lighter deployment. The gateway delegates payment signing to a remote signer service rather than holding an Ethereum private key locally. Orchestrators can be specified manually or discovered via the remote signer. Valid production configuration — particularly suited to AI workloads.

**Who this is for:** Operators who want to isolate signing keys from the media-handling process, run gateways on platforms without native Ethereum support, or connect to a community-hosted payment clearinghouse.

**Requirements:**

- Remote signer endpoint (self-hosted or community-hosted) {/* REVIEW: community signer endpoint URL — verify with: Discord #local-gateways or go-livepeer docs */}
- `go-livepeer` binary or Docker image
- No direct ETH custody required at the gateway node

**Next step:** Off-Chain Gateway Quickstart (S05)

---

## Path 3: Gateway-as-a-Service (hosted)

Use Livepeer Studio, Livepeer Cloud, or a third-party hosted gateway. Receive an API endpoint. No node operation, no ETH management, no infrastructure to maintain.

**Who this is for:** Teams wanting programmatic access to Livepeer transcoding and AI inference without running infrastructure. Product teams integrating video or AI features into applications.

**Requirements:**

- Account with a hosted provider (Livepeer Studio, Livepeer Cloud, or third-party)
- API key

**Next step:** Provider documentation (external — see provider's onboarding flow)

---

## Path 4: Network-as-a-Product (NaaP)

Multi-tenant gateway architecture that exposes Livepeer network capacity to third-party developers. The gateway operator adds authentication, billing, usage tracking, and rate limiting on top of the base gateway, creating a managed service product.

**Who this is for:** Platform operators building developer-facing products on Livepeer. Teams offering AI or video APIs to downstream consumers with their own pricing and access controls.

**Requirements:**

- Running gateway (on-chain or off-chain)
- NaaP middleware layer (auth, billing, usage metering)
- Customer-facing API surface

**Next step:** Gateway as a Platform — NaaP (S13)

---

## Decision table

| Criterion | On-chain self-hosted | Off-chain self-hosted | Gateway-as-a-Service | NaaP |
|---|---|---|---|---|
| **ETH required** | Yes — deposited into TicketBroker | No — remote signer holds key | No | Depends on underlying gateway path |
| **GPU required** | No | No | No | No |
| **Operational complexity** | High — wallet, RPC, monitoring | Medium — gateway + signer | Low — API key only | High — gateway + middleware |
| **Control over routing** | Full | Full | None — provider controls | Full |
| **Control over pricing** | Full (set `maxPricePerUnit`) | Full | None — provider sets rates | Full + business-layer pricing |
| **Cost model** | ETH per job (you fund deposit) | ETH per job (signer funds deposit) | Provider subscription/usage fee | You set downstream pricing |
| **Orchestrator discovery** | On-chain ServiceRegistry | Manual list or signer-provided | Provider-managed | Same as underlying path |
| **Video transcoding support** | Yes | No (off-chain supports AI only) | Yes (provider-dependent) | Depends on underlying path |
| **AI inference support** | Yes | Yes | Yes (provider-dependent) | Yes |

{/* REVIEW: off-chain video transcoding support — verify with: go-livepeer remote signer scope docs; remote signing is currently Live AI only per PR #3822 */}

---

## After choosing a path

Each path has distinct prerequisites. Before proceeding to setup:

1. Read **What a Gateway Does** (S02) for the operational mental model — what the node handles, what it does not.
2. If your path involves ETH (paths 1 and 4 with on-chain base), read **Payments and Funding** (S03) to understand deposit sizing and the micropayment mechanism.
3. Proceed to the quickstart for your chosen path.
