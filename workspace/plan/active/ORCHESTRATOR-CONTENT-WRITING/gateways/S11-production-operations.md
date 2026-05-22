---
title: Production Operations
description: Monitor, log, and scale a Livepeer gateway in production.
pageType: guide
purpose: operate
lifecycleStage: operate
audience: gateway
status: draft
---

# Production Operations

A gateway in production requires active monitoring of job routing, orchestrator connectivity, payment state, and resource consumption. This page covers the health checks, metrics, log patterns, and scaling signals you need for day-to-day operation.

---

## Health checks

**HTTP status endpoint:**

```
GET http://localhost:8935/status
```

Returns node status. Use this as a liveness probe in orchestration systems (Kubernetes, systemd watchdog, load balancer health checks).

**livepeer_cli status:**

Connect to the CLI port and inspect the current state:

- Docker: `docker exec livepeer-gateway livepeer_cli`
- Binary: `livepeer_cli -host 127.0.0.1 -http 5935`

The CLI shows current configuration, connected orchestrators, and payment state. Run this manually when investigating issues or as part of a periodic health script.

---

## Key metrics

| Metric | What it tells you | Alert threshold |
|--------|-------------------|-----------------|
| Job success rate | Percentage of dispatched jobs completed | Below 95% |
| Round-trip latency | Time from job dispatch to result return | Above 2s (video), above 5s (AI) |
| Deposit balance | Remaining ETH in TicketBroker | Below 50% of initial |
| Ticket redemption rate | Percentage of winning tickets redeemed by orchestrators | Below 90% |
| Connected orchestrators | Number of orchestrators in the selection pool | Below 3 |
| Session count | Active orchestrator sessions | Trending to zero unexpectedly |

A drop in connected orchestrators often precedes job failures. If your orchestrator count falls below 3, either your `MaxPricePerUnit` is too low (filtering out most of the network) or you have a network connectivity issue.

---

## Prometheus metrics

Enable with the `-monitor=true` flag on the `go-livepeer` process.

Metrics endpoint:

```
http://localhost:7935/metrics
```

{/* REVIEW: metrics port — verify with: go-livepeer source */}

Key metric families:

- `livepeer_segment_*` — Video transcoding metrics (segments submitted, transcoded, failed)
- `livepeer_ai_*` — AI inference metrics (requests, latency, errors by pipeline)
- `livepeer_ticket_*` — Payment ticket metrics (sent, redeemed, value)

---

## Grafana setup

1. Add a Prometheus data source pointing to your metrics endpoint (`http://localhost:7935`).
2. Import the Livepeer gateway dashboard from the monitoring repository. {/* REVIEW: monitoring repo URL — verify with: GitHub, expected at https://github.com/livepeer/livepeer-monitoring */}
3. Configure alert rules for the thresholds listed in the key metrics table above.

---

## Log management

**Verbosity:**

Use `-v 6` for production. This level provides detailed operational context without flooding storage on high-throughput gateways.

**Log to file:**

```bash
livepeer ... 2>&1 | tee /var/log/livepeer-gateway.log
```

Pipe through `tee` to retain stdout visibility while writing to a persistent file. For structured log aggregation (ELK, Loki, Datadog), parse the JSON-formatted output.

**Key log patterns to watch:**

| Pattern | Meaning |
|---------|---------|
| `SelectingOrchestrator` | Orchestrator routing decision — shows which orchestrator was selected and why |
| `SubmittedTransaction` | On-chain transaction submitted (deposit, withdrawal, etc.) |
| `TicketParams` | Payment ticket parameters exchanged with an orchestrator |
| `OrchestratorCapped` | Orchestrator has hit its session limit; gateway will try another |
| `No orchestrators` | No orchestrator matches current selection criteria |

---

## Scaling signals

**Job queue depth increasing** — The gateway cannot dispatch jobs fast enough. Add gateway instances behind a load balancer, or increase `maxSessions` if the bottleneck is per-orchestrator session limits.

**Latency increasing** — The orchestrator pool may be undersized for your workload. Increase `MaxPricePerUnit` to widen the eligible orchestrator set. For AI workloads, verify that models are warm (cold starts add 10–30s on first request).

**Deposit draining faster than expected** — Throughput has increased beyond your funding plan. Increase the deposit amount (S10) or adjust pricing parameters to control cost per job.

**Session count at zero** — No orchestrators are connected. Check network connectivity, verify the `-network` flag matches your target network (mainnet vs. testnet), and confirm your deposit is non-zero.

---

## Operational cadence

| Task | Frequency |
|------|-----------|
| Review health endpoint | Continuous (automated) |
| Check deposit balance | Every 4–8 hours |
| Review Grafana dashboards | Daily |
| Rotate logs | Weekly or by size (100 MB) |
| Review orchestrator selection patterns | Weekly |
| Update `go-livepeer` version | Per release, after testing |

---

**Exit state:** You have a monitoring routine in place, know which metrics signal problems, and have first-response actions defined for each degradation pattern.
