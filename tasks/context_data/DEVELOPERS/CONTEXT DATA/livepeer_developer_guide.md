# Livepeer Developer Guide

Welcome to the core entry point for developers building on the Livepeer protocol and network.

Whether you’re:
- Building decentralized video platforms
- Running AI inference over real-time streams
- Integrating orchestrator workflows
- Contributing to protocol-level governance or economics

This guide provides a complete technical orientation to build production-grade apps and services.

---

## 🧱 System Overview

### Architecture Diagram
```mermaid
graph TD
  UI[Apps / Creators / Viewers] -->|HTTP / SDK| Gateway
  Gateway -->|gRPC / Payment / Compute| Orchestrators
  Orchestrators -->|ETH Payment, LPT Rewards| Ethereum / Arbitrum
  Developers -->|CLI / Contracts / APIs| Protocol
```

Livepeer splits into two clear domains:

- **Protocol** (on-chain contracts, staking, bonding, governance)
- **Network** (off-chain compute routing, gateways, workloads)

---

## 🎯 Developer Personas

| Persona              | Primary Tools                  | Use Cases                                           |
|----------------------|---------------------------------|-----------------------------------------------------|
| App Developer        | REST API, JS SDK               | Build creator platforms, ingest AI tasks, playback  |
| Infra Developer      | Gateway, gRPC API              | Deploy Daydream-like systems, coordinate workloads  |
| Protocol Integrator  | Smart contracts, CLI           | Extend staking, bonding, DAO logic                  |
| Tooling Contributor  | CLI, Prometheus, SDKs          | Monitoring, debugging, explorer tooling             |

---

## 🚀 Core Building Blocks

### 1. REST API (Livepeer Studio Gateway)
- `POST /stream` – Ingest a stream
- `POST /ai/infer` – Submit inference job
- `GET /session/:id` – Track lifecycle

📘 [API Docs](https://livepeer.studio/docs)

### 2. gRPC API (Gateway Nodes)
Used for low-latency orchestration.

📘 [gateway.proto](https://github.com/livepeer/protocol/blob/master/proto/gateway.proto)

### 3. JavaScript SDK
```bash
npm install @livepeer/sdk
```
```js
import { createStream } from '@livepeer/sdk';
const stream = await createStream({ name: 'MyCam' });
```

📘 [SDK GitHub](https://github.com/livepeer/js-sdk)

### 4. Smart Contracts
Use [ethers.js](https://docs.ethers.org), `viem`, or `hardhat` to interact with:
- `BondingManager`
- `TicketBroker`
- `Governor`

ABI: [Livepeer Protocol ABIs](https://github.com/livepeer/protocol/tree/master/abi)

Arbitrum Addresses:
```json
{
  "BondingManager": "0xINSERT",
  "TicketBroker": "0xINSERT",
  "Governor": "0xINSERT"
}
```

---

## ⚒ Dev Toolchain

| Tool             | Function                          |
|------------------|-----------------------------------|
| `livepeer-cli`   | Stake, reward, claim, delegate    |
| `js-sdk`         | Build frontend ingest + playback  |
| `obs + rtmp`     | Broadcast to Livepeer Studio      |
| `ffmpeg`         | Source-based ingest, file-to-stream |
| `gRPC server`    | Run a custom gateway node         |

---

## 🌐 Ecosystem Deployments

| Example App     | Stack                                  |
|------------------|-----------------------------------------|
| Studio          | Studio Gateway + REST API               |
| MetaDJ          | AI Inference + Playback via JS SDK      |
| Cascade         | Decentralized video ingestion gateway   |
| ComfyStream     | BYOC AI orchestration into Livepeer     |

---

## 🧪 Advanced Features (Preview)

- `PaymentProtocolV2`
- `Inference Marketplace`
- `Frame-to-Frame AI Streaming`
- `Tokenless Credit Flows`

See: `experimental-features/`

---

## 📚 Next Steps

- [Quickstarts](../quick-starts/video-streaming)
- [AI Pipelines](../ai-inference-on-livepeer/ai-pipelines/overview)
- [Deploy Gateway](../deployment-recipes/ai-gateway-on-gcp)
- [Live GraphQL Explorer](https://explorer.livepeer.org/graphql)
- [GitHub Protocol](https://github.com/livepeer/protocol)

---

This guide evolves alongside the protocol. Join us in [Discord](https://discord.gg/livepeer), [Forum](https://forum.livepeer.org), or contribute to the [Livepeer Protocol GitHub](https://github.com/livepeer/protocol).

📎 End of `developer-guide.mdx`.

