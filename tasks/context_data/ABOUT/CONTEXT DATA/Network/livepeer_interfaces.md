# Livepeer Interfaces

Livepeer exposes multiple access interfaces for developers, creators, and infrastructure operators to interact with the protocol and network. These include SDKs, REST and gRPC APIs, the CLI, GraphQL endpoints, and playback tooling for on-chain and off-chain applications.

This page breaks down each interface by usage type, target user, supported capabilities, and sample integration paths.

---

## Interface Categories

| Interface        | Use Case                           | Users                   | Access Medium |
|------------------|-------------------------------------|--------------------------|---------------|
| REST API         | Start sessions, control workflows  | App developers, gateways| HTTPS         |
| gRPC API         | Fast low-latency session control   | Gateway nodes           | gRPC          |
| GraphQL API      | Explore network, jobs, rewards     | Analysts, explorers     | GraphQL       |
| JS SDK           | Playback, ingest, session control  | Frontend developers     | JavaScript    |
| CLI              | Orchestrator & delegator control   | Node operators          | Terminal      |
| Smart Contracts  | Protocol-level operations          | Power users/devs        | Solidity / RPC|

---

## 1. REST API (Livepeer Studio)

Available at: `https://livepeer.studio/api`

### Common Endpoints:
- `POST /stream` – Create video stream ingest session
- `POST /transcode` – On-demand file transcode
- `POST /ai/infer` – Submit AI job (e.g. image enhancement)
- `GET /session/:id` – Fetch session status

**Docs:** [https://livepeer.studio/docs](https://livepeer.studio/docs)

---

## 2. gRPC API (Gateway Nodes)

gRPC allows high-throughput, low-latency orchestrator routing.

### Methods:
- `ReserveSession`
- `Heartbeat`
- `ReportJobComplete`
- `OrchestratorList`

Used by:
- Studio Gateway
- Daydream Gateway
- Cascade

**Proto:** [gateway.proto](https://github.com/livepeer/protocol/blob/master/proto/gateway.proto)

---

## 3. GraphQL Explorer API

Access detailed Livepeer on-chain and network state:

Endpoint: `https://explorer.livepeer.org/graphql`

### Example Queries:
```graphql
query GetOrchestrators {
  orchestrators {
    id
    totalStake
    rewardCut
    serviceURI
  }
}
```

Also supports:
- Delegator rewards
- Inflation rate
- Total active stake
- Round info

Used by:
- [https://explorer.livepeer.org](https://explorer.livepeer.org)

---

## 4. JS SDK

[GitHub → @livepeer/sdk](https://github.com/livepeer/js-sdk)

Install:
```bash
npm install @livepeer/sdk
```

### Features:
- Ingest (create stream, push video)
- AI job submit
- View session output
- Wallet support (ETH, credit)
- Playback and stats

### Example:
```js
const { createStream } = require('@livepeer/sdk');
const stream = await createStream({ name: 'My Stream' });
```

Used in:
- Livepeer Studio
- Daydream
- VJ apps (MetaDJ)

---

## 5. CLI

Install via Go build or Docker.

```bash
go install github.com/livepeer/go-livepeer
```

### Commands:
- `stake`, `unbond`, `withdraw`
- `reward`, `claim`
- `transcode`, `broadcast`, `query`

Ideal for orchestrator testing or protocol analysis.

---

## 6. Smart Contract Interfaces

Interact directly with protocol via:

| Contract         | Function                             | Arbitrum Address                    |
|------------------|--------------------------------------|-------------------------------------|
| `BondingManager` | stake, reward, unbond                | `0xINSERT_CURRENT_ADDRESS`         |
| `TicketBroker`   | redeem tickets, deposit, withdraw    | `0xINSERT_CURRENT_ADDRESS`         |
| `Governor`       | vote, queue, execute LIPs            | `0xINSERT_CURRENT_ADDRESS`         |

Use: `ethers.js`, `viem`, `hardhat` or JSON-RPC

---

## Workflow Examples

### Transcode from Web App
```js
await sdk.createStream({ profile: '720p', name: 'MyCam' });
```

### Run AI Image2Image
```bash
curl -X POST /ai/infer \
  -d '{ "model": "sdxl", "input": "image.png" }'
```

### Check Node Metrics
```bash
livepeer_cli status
```

---

## References

- [Livepeer Studio API](https://livepeer.studio/docs)
- [Livepeer Explorer GraphQL](https://explorer.livepeer.org/graphql)
- [Livepeer JS SDK](https://github.com/livepeer/js-sdk)
- [Smart Contract ABIs](https://github.com/livepeer/protocol/tree/master/abi)
- [Livepeer Protocol Repo](https://github.com/livepeer/protocol)

---

📎 Final section of the `network/` documentation group complete.

