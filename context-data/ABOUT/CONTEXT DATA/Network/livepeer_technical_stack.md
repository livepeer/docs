# Livepeer Technical Stack

This section outlines the full stack of tools, infrastructure, and components that power the Livepeer Network at the node, gateway, and client level. It covers orchestrator tooling, gateway middleware, interfaces, CLI, SDKs, and monitoring integrations.

Livepeer’s architecture is modular and developer-facing: you can run an orchestrator, build a custom AI gateway, or use APIs to build media apps on decentralized compute.

---

## Architecture Layers

```mermaid
graph TD
    UI[Apps / SDKs / Interfaces]
    API[Gateway APIs / REST / GraphQL]
    GW[Gateway Nodes]
    O[Orchestrator Node (livepeer)]
    W[Worker Layer (FFmpeg / AI)]
    P[Protocol (Ethereum / Arbitrum)]

    UI --> API --> GW --> O --> W
    O --> P
```

---

## Orchestrator Node

The orchestrator node runs `livepeer`, available at:
[https://github.com/livepeer/go-livepeer](https://github.com/livepeer/go-livepeer)

### Key Components:
- **Transcoder selection** (internal or external workers)
- **Ticket validation** (L2 TicketBroker)
- **Reward claim (Merkle submission)**
- **LPT staking (BondingManager)**
- **Region advertisement** (for routing)

**Deployment modes:**
- Bare metal with GPU
- Containerized
- Cloud auto-scaling

**Tools:**
- `livepeer_cli` – stake, set fee/reward cut, monitor sessions
- `livepeer_exporter` – Prometheus metrics exporter

---

## Worker Layer

Workers can be local or remote services:

| Type        | Language/Runtime | Example Use                                   |
|-------------|------------------|-----------------------------------------------|
| Transcoder  | FFmpeg           | .ts segment processing                        |
| Inference   | Python (Torch)   | AI tasks, e.g., SDXL image-to-image           |
| Plugin      | WebRTC / C++     | Real-time browser capture or object detection |

Configured via orchestrator `config.json` or env vars.

---

## Gateway Infrastructure

Gateways manage:
- Session auth (API key, ETH deposit, credit check)
- Job routing
- Session logging

**Codebases:**
- [Studio Gateway](https://github.com/livepeer/studio-gateway)
- [Daydream Gateway](https://github.com/livepeer/daydream)
- [Cascade Load Balancer](https://github.com/livepeer/cascade)

**Features:**
- Rate limiting, region scoring
- Health probes, fallback orchestrators
- Credit tracking via Postgres/Redis

---

## APIs

| API         | Protocol | Description                          |
|--------------|----------|--------------------------------------|
| REST Gateway | HTTPS    | Transcode, AI job control            |
| gRPC Gateway | gRPC     | Fast session handshakes, monitoring  |
| Explorer API | GraphQL  | Metrics, staking, round data         |

Available via:
- `https://livepeer.studio/api`
- `https://explorer.livepeer.org/graphql`

---

## CLI and SDKs

- **CLI:** `livepeer_cli`
  - Stake LPT
  - Bond/unbond
  - Set orchestrator fees
  - Watch active sessions

- **SDKs:**
  - [Livepeer JS SDK](https://github.com/livepeer/js-sdk)
    - Playback, ingest, AI session tools
    - Works in Node.js, browser

- **Python AI Pipelines:**
  - `livepeer-python` (internal only)
  - Used in dotSimulate, MetaDJ

---

## Monitoring & Observability

| Tool              | Metric Type             | Description                             |
|-------------------|-------------------------|-----------------------------------------|
| Prometheus        | Session, CPU, ticketing | Exposed via `livepeer_exporter`         |
| Grafana Dashboards| Visual ops              | Studio & orchestrator internal views    |
| Loki              | Logs                    | Transcode errors, API retries           |
| Gateway Logs      | Credits, API, routing   | Per-session logs in Redis / S3          |

---

## Deployment Examples

- [orchestrator-on-aws](https://github.com/livepeer/orchestrator-on-aws)
- [studio-gateway-deploy](https://github.com/livepeer/studio-gateway-deploy)
- [ai-node-pipeline](https://github.com/livepeer/daydream)

---

## References

- [Livepeer GitHub](https://github.com/livepeer)
- [Livepeer Orchestrator Docs](https://livepeer.org/docs/guides/orchestrator)
- [Daydream Gateway Code](https://github.com/livepeer/daydream)
- [Livepeer Explorer API](https://explorer.livepeer.org)

---

Next section: `interfaces.mdx`

