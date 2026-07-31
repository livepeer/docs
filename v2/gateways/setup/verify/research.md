# Gateway Verification — Research Collation

> Source: 6 parallel research agents scanning all `v2/gateways/` content (2026-04-06)
> Purpose: Aggregate all verification, testing, health-check, monitoring, Prometheus, and Grafana content into one reference for authoring `test.mdx`

---

## 1. Ports & Endpoints (Quick Reference)

| Service | Default Port | Flag | Purpose |
|---------|-------------|------|---------|
| HTTP API (health, metrics, hardware, AI) | **8935** | `-httpAddr` | Gateway endpoints + Prometheus scrape |
| RTMP Ingest | **1935** | `-rtmpAddr` | Video stream ingest |
| CLI API | **5935** | `-cliAddr` | `livepeer_cli` communication |
| Prometheus (Docker stack) | **9090** | — | Time-series metrics storage |
| Grafana (Docker stack) | **3000** | — | Dashboard visualisation |

---

## 2. Health Check Endpoints

### Universal (all node types)

| Endpoint | Command | Expected |
|----------|---------|----------|
| `/health` | `curl http://localhost:8935/health` | `{"status": "OK"}` + HTTP 200 |
| `/status` | `curl http://localhost:5935/status` | JSON with node type, version, ETH info |
| `/hardware/info` | `curl http://localhost:8935/hardware/info` | GPU model, system info |
| `/hardware/stats` | `curl http://localhost:8935/hardware/stats` | GPU utilisation, memory, temperature |
| `/metrics` | `curl http://localhost:8935/metrics \| head -30` | Prometheus-format `livepeer_*` metrics |

### `livepeer_cli` Interactive

```bash
# Host binary
livepeer_cli -host 127.0.0.1 -http 5935

# Docker
docker exec -it <container> livepeer_cli -host <container_hostname> -http 5935
```

Option 1 → "Get node status" shows: identity, network, sessions, deposit/reserve (under BROADCASTER STATS).

---

## 3. Node-Type-Specific Verification

### Video Gateway

- Operational mode: **on-chain only**
- Requirements for "healthy": `/health` 200, ETH deposit non-zero, ≥1 Orchestrator reachable, Arbitrum RPC responding
- Orchestrator check: `curl http://localhost:5935/getOrchestrators`
- RTMP test stream:
  ```bash
  ffmpeg -re -f lavfi -i testsrc=size=1280x720:rate=30 \
    -c:v libx264 -preset ultrafast \
    -f flv rtmp://localhost:1935/live/test
  ```
- HLS playback: `curl http://localhost:8935/hls/test-key/index.m3u8`

### AI Gateway

- Operational modes: **on-chain or off-chain**
- Off-chain check: `curl https://<orchestrator-address>:<port>/getOrchestratorInfo`
- Test job:
  ```bash
  curl -X POST http://localhost:8935/text-to-image \
    -H "Content-Type: application/json" \
    -d '{
      "model_id": "ByteDance/SDXL-Lightning",
      "prompt": "a simple geometric test pattern",
      "width": 512, "height": 512, "num_images_per_prompt": 1
    }'
  ```
- On-chain discovery: `-aiServiceRegistry` flag (no `-orchAddr` needed)
- **Windows/macOS limitation**: AI binary not available — Docker on Linux only

### Dual Gateway

- Operational mode: **on-chain** (video component requires it)
- Single port architecture: both video + AI on port 8935
- Healthy when ALL video checks AND ALL AI checks pass
- GPU contention monitoring: `watch -n 30 'curl -s http://localhost:8935/hardware/stats | python3 -m json.tool'`
- Separation threshold: GPU memory consistently > 85%

---

## 4. On-Chain Verification

### Deposit Check

```bash
livepeer_cli -host 127.0.0.1 -http 5935
# Option 1 → BROADCASTER STATS → Deposit, Reserve (must be non-zero)
```

Minimum recommended for testing: **0.1 ETH total** (~0.07 deposit + 0.03 reserve)

### Arbitrum RPC Test

```bash
curl -X POST <YOUR_ETH_URL> \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

### Arbiscan Monitoring

- URL: `https://arbiscan.io/address/<GATEWAY_ETH_ADDRESS>`
- TicketBroker contract: `0xea1b0F6c8D158328a6e3D3F924B86A759F41465c`
- Key events: `FundDeposit`, `FundReserve`, `RedeemWinningTicket`, `Unlock`, `Withdraw`

### Gas Monitoring

```promql
livepeer_suggested_gas_price / 1e9  # Convert to Gwei
```

---

## 5. Prometheus Setup

### Enable Metrics

```bash
livepeer \
  -gateway \
  -monitor \
  -metricsPerStream \
  -httpAddr 0.0.0.0:8935 \
  [other flags...]
```

| Flag | Purpose | Recommendation |
|------|---------|----------------|
| `-monitor` | Enables `/metrics` endpoint | Always enable in production |
| `-metricsPerStream` | Per-stream metric grouping | Enable for debugging; higher cardinality |
| `-metricsClientIP` | Client IP as metric label | Enable only for per-client breakdown |

### prometheus.yml

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'livepeer-gateway'
    static_configs:
      - targets: ['localhost:8935']
    metrics_path: '/metrics'
    scrape_interval: 15s
    scrape_timeout: 10s
    labels:
      node_type: 'dual'
      environment: 'production'
```

### Key Metrics by Node Type

#### Video

| Metric | Description | Alert Threshold |
|--------|-------------|-----------------|
| `livepeer_segment_transcoded_total` | Successfully transcoded segments | Calculate success rate |
| `livepeer_transcode_overall_latency_seconds` | End-to-end latency | avg > 5s |
| `livepeer_segment_transcode_failed_total` | Failed transcode count | rate increase |
| `livepeer_orchestrator_swaps` | Mid-stream Orchestrator changes | high rate |
| `livepeer_current_sessions_total` | Active sessions | capacity planning |

#### Video Payment

| Metric | Description | Alert Threshold |
|--------|-------------|-----------------|
| `livepeer_gateway_deposit` | ETH deposit (wei) | < 10000000000000000 (0.01 ETH) |
| `livepeer_gateway_reserve` | ETH reserve (wei) | < 5000000000000000 (0.005 ETH) |
| `livepeer_ticket_value_sent` | Tickets issued | budget tracking |
| `livepeer_payment_create_errors` | Failed ticket creation | any increase |
| `livepeer_suggested_gas_price` | Gas price oracle | spike |

#### AI

| Metric | Description | Alert Threshold |
|--------|-------------|-----------------|
| `livepeer_current_sessions_total` | Active AI sessions | capacity planning |
| `livepeer_max_sessions_total` | Session limit | current > 0.8 × max |
| `livepeer_discovery_errors_total` | Discovery failures | any increase |
| `livepeer_segment_source_upload_failed_total` | Failed job submissions | rate increase |

#### Dual (additional)

- All video + all AI metrics
- GPU contention: `/hardware/stats` → `gpu_memory_used` / `gpu_memory_total`

### PromQL Queries

```promql
# Transcoding success rate (5m)
rate(livepeer_segment_transcoded_total[5m]) /
rate(livepeer_segment_source_appeared_total[5m])

# ETH deposit in ETH (not wei)
livepeer_gateway_deposit / 1e18

# Failed transcode rate per minute
rate(livepeer_segment_transcode_failed_total[1m])

# Average transcoding latency
rate(livepeer_transcode_overall_latency_seconds_sum[5m]) /
rate(livepeer_transcode_overall_latency_seconds_count[5m])

# AI sessions approaching capacity
livepeer_current_sessions_total / livepeer_max_sessions_total

# Discovery error rate
rate(livepeer_discovery_errors_total[5m])

# Deposit depletion rate (wei/second)
deriv(livepeer_gateway_deposit[1h])

# Estimated time to deposit exhaustion (seconds)
livepeer_gateway_deposit / abs(deriv(livepeer_gateway_deposit[1h]))
```

---

## 6. Grafana Dashboards

### Docker Monitoring Stack

```bash
git clone https://github.com/livepeer/livepeer-monitoring
cd livepeer-monitoring
docker compose up -d
```

- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3000` (credentials: `admin / admin`)

### Included Dashboards

| Dashboard | Purpose |
|-----------|---------|
| Node Overview | Sessions, success rate, latency, Orchestrator connectivity |
| Payment Overview | ETH deposit/reserve, ticket value, payment errors |
| Transcoding Performance | Realtime ratios, latency distribution (p50/p95/p99), success/failure |

### Recommended Custom Panels

- Deposit depletion forecast (linear regression on `livepeer_gateway_deposit` over 24h)
- Session count vs `-maxSessions` limit as percentage gauge
- AI discovery error rate overlaid with session count

---

## 7. Alert Rules

### Critical

```yaml
- alert: GatewayDown
  expr: up{job=~"livepeer.*"} == 0
  for: 1m

- alert: DepositExhausted
  expr: livepeer_gateway_deposit < 10000000000000000
  for: 5m

- alert: SuccessRateCritical
  expr: |
    rate(livepeer_segment_transcoded_total[5m]) /
    rate(livepeer_segment_source_appeared_total[5m]) < 0.90
  for: 5m
```

### Warning

```yaml
- alert: DepositLow
  expr: livepeer_gateway_deposit < 50000000000000000
  for: 10m

- alert: HighTranscodeLatency
  expr: |
    rate(livepeer_transcode_overall_latency_seconds_sum[5m]) /
    rate(livepeer_transcode_overall_latency_seconds_count[5m]) > 5
  for: 5m

- alert: PaymentCreateErrors
  expr: rate(livepeer_payment_create_errors[5m]) > 0
  for: 2m

- alert: AIDiscoveryErrors
  expr: rate(livepeer_discovery_errors_total[5m]) > 0
  for: 5m
```

---

## 8. Automated Health Checks

### Cron Script

```bash
#!/usr/bin/env bash
GATEWAY_PORT="${1:-8935}"
ALERT_EMAIL="ops@example.com"

if ! curl --silent --fail --max-time 5 http://localhost:${GATEWAY_PORT}/health > /dev/null 2>&1; then
  echo "Gateway on port ${GATEWAY_PORT} is not responding" | \
    mail -s "ALERT: Livepeer Gateway Down" "$ALERT_EMAIL"
fi
```

Crontab: `*/5 * * * * /path/to/gateway-health.sh 8935`

### Docker HEALTHCHECK

```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost:8935/health || exit 1
```

---

## 9. External Tools

| Tool | URL | Purpose | Node Types |
|------|-----|---------|------------|
| Livepeer Explorer | explorer.livepeer.org | On-chain Orchestrators, staking, registrations | Video, Dual |
| Livepeer Tools (Cloud SPE) | tools.livepeer.cloud | Network-wide metrics, AI Orchestrator status | All |
| Arbiscan | arbiscan.io | Contract events, deposit changes, gas | Video, Dual |

---

## 10. OS-Specific Differences

| Feature | Docker | Linux | Windows |
|---------|--------|-------|---------|
| Video Gateway | Yes | Yes | Yes (binary) |
| AI Gateway | Yes (Linux host) | Yes | **No** (Docker on WSL2 only) |
| Dual Gateway | Yes (Linux host) | Yes | **No** |
| Prometheus/Grafana | Docker stack | Native or Docker | Docker Desktop |
| `livepeer_cli` | `docker exec -it` | Direct binary | WSL2 or Docker |
| HEALTHCHECK directive | Native Docker | Cron script | Scheduled task |
| GPU support | Via Docker runtime | Native NVIDIA | Limited |
| Production recommended | Yes (on Linux) | Yes | No (dev/test only) |

---

## 11. Startup Log Verification

Expected log lines on successful start:

```
Livepeer Node version: [version]
Starting Livepeer node...
Node type: BroadcasterNode
RTMP server listening on 0.0.0.0:1935
HTTP server listening on 0.0.0.0:8935
CLI server listening on 0.0.0.0:5935
Connected to orchestrator at <ORCHESTRATOR_IP:PORT>
Gateway ready
```

Enable verbose logging: `-v 6`
Save logs: `./livepeer -gateway [flags] 2>&1 | tee livepeer.log`

---

## 12. Source Files Consulted

### Primary (current, production-ready)
- `v2/gateways/guides/monitoring-and-tooling/health-checks.mdx`
- `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
- `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx`
- `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
- `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`
- `v2/gateways/setup/monitor/monitoring-setup.mdx`
- `v2/gateways/setup/guide.mdx`
- `v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx`
- `v2/gateways/resources/reference/technical/cli-commands.mdx`

### Secondary (x-resources, context sources)
- `v2/gateways/guides/monitoring-and-tooling/x-resources/` (14 files)
- `v2/gateways/custom/views/setup/configure/` (3 config content files)
- `v2/gateways/custom/views/setup/install/` (3 install content files)
- `v2/gateways/quickstart/views/` (6 quickstart tab files)

### Empty/Placeholder
- `v2/gateways/setup/verfiy.mdx` (0 bytes, typo in name)
- `v2/gateways/setup/monitor/research.md` (0 bytes)
- `v2/gateways/setup/monitor/monitor-and-optimise.mdx` (brainstorming draft)
