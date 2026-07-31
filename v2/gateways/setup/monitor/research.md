# Gateway Monitoring — Research Collation

> Consolidated monitoring content from across `v2/gateways/`. Source for the holistic `monitor.mdx` setup page.
> Generated: 2026-04-06

---

## 1. Source Inventory

| Source file | Content type | Quality | OS coverage |
|---|---|---|---|
| `guides/monitoring-and-tooling/health-checks.mdx` | Health endpoints, livepeer_cli status, hardware stats, RTMP test, Docker HEALTHCHECK, cron automation | Production-ready | OS-agnostic (curl-based) |
| `guides/monitoring-and-tooling/monitoring-setup.mdx` | Prometheus config, Docker monitoring stack, key metrics (Video/AI/Dual tabs), Grafana dashboards, alert rules | Production-ready | Docker stack tab + generic Prometheus |
| `guides/monitoring-and-tooling/on-chain-metrics.mdx` | Arbiscan, TicketBroker events, deposit verification, gas monitoring, depletion tracking | Production-ready | OS-agnostic |
| `guides/monitoring-and-tooling/tools-and-dashboards.mdx` | Explorer, Livepeer Tools, livepeer_cli, CLI HTTP API, Arbiscan | Production-ready | OS-agnostic |
| `guides/monitoring-and-tooling/troubleshooting.mdx` | Error resolution by symptom (video, AI, dual, common), log interpretation | Production-ready | Some OS-specific (Windows port commands) |
| `setup/monitor/monitoring-setup.mdx` | **Exact duplicate** of guides version | Duplicate | Same as guides |
| `setup/monitor/monitor-and-optimise.mdx` | Brainstorm page - request routing, payment models, operational considerations | Draft/brainstorm | N/A |
| `quickstart/views/docker/dockerOffChainTab.mdx` (lines 173-278) | Monitor Gateway step: metrics endpoint, Prometheus metrics, CLI monitoring, AI-specific monitoring, enhanced options (metricsPerStream, Kafka), log monitoring | Draft with REVIEW flags | Docker only |
| `quickstart/views/docker/dockerOnChainTab.mdx` (lines 286+) | Monitor Gateway step: same structure as off-chain | Draft with REVIEW flags | Docker only |
| `quickstart/views/linux/*.mdx` | Monitor Gateway step: **empty stubs** | Stub | Linux |
| `quickstart/views/windows/*.mdx` | Monitor Gateway step: **empty stubs** | Stub | Windows |
| `resources/reference/technical/go-livepeer/prometheus-metrics.mdx` | Full Prometheus metrics table (General, Sending payments, Receiving payments, Pixel accounting, Fast verification) | Reference-grade | OS-agnostic |
| `x-resources/v2-setup--monitor-and-optimise.mdx` | Copy of brainstorm page | Draft | N/A |

---

## 2. Content by Topic

### 2.1 Health Checks

**Source:** `guides/monitoring-and-tooling/health-checks.mdx`

#### Universal checks (all OS, all node types)

1. **HTTP health endpoint** - `curl http://localhost:8935/health` -> expects `{"status": "OK"}` (HTTP 200)
2. **Node status via livepeer_cli** - `livepeer_cli -host 127.0.0.1 -http 5935` -> Option 1: Get node status. Shows identity, network, sessions, deposit/reserve. CLI uses legacy term "Broadcaster" for Gateway
3. **Hardware status** - `curl http://localhost:8935/hardware/stats` and `curl http://localhost:8935/hardware/info` - GPU availability, memory, temperature

#### Docker-specific health check

```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl --silent --fail http://localhost:8935/health || exit 1
```

#### Docker livepeer_cli access

```bash
docker exec -it <container_name> livepeer_cli -host <container_hostname> -http 5935
```

Note: Using `localhost` inside Docker fails - refers to the container itself, not the Gateway process.

#### Cron automation (Linux)

```bash
#!/usr/bin/env bash
# gateway-health.sh - run every 5 minutes via cron
GATEWAY_PORT="${1:-8935}"
ALERT_EMAIL="ops@example.com"

if ! curl --silent --fail --max-time 5 http://localhost:${GATEWAY_PORT}/health > /dev/null 2>&1; then
  echo "Gateway on port ${GATEWAY_PORT} is not responding" | \
    mail -s "ALERT: Livepeer Gateway Down" "$ALERT_EMAIL"
fi
```

```bash
# Add to crontab
*/5 * * * * /path/to/gateway-health.sh 8935
```

#### Windows port commands

```cmd
netstat -ano | findstr :8935
taskkill /PID <PID> /F
```

#### Linux port commands

```bash
lsof -i :8935
kill -9 <PID>
```

---

### 2.2 Prometheus Setup

**Source:** `guides/monitoring-and-tooling/monitoring-setup.mdx`

#### Enable metrics flag

```bash
livepeer \
  -gateway \
  -monitor \
  -metricsPerStream \
  -httpAddr 0.0.0.0:8935 \
  [other flags...]
```

Without `-monitor`, the `/metrics` endpoint is not exposed.

#### Monitoring flags

| Flag | Purpose | Recommendation |
|---|---|---|
| `-monitor` | Enables the `/metrics` Prometheus endpoint | Always enable in production |
| `-metricsPerStream` | Groups performance metrics by individual stream | Enable for per-stream debugging; note higher metric cardinality |
| `-metricsClientIP` | Includes client IP as a metric label | Enable only for per-client breakdown |

#### Verify metrics

```bash
curl http://localhost:8935/metrics | head -30
```

#### prometheus.yml configuration

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

All Gateway types (Video, AI, Dual) expose metrics on the same `-httpAddr` port (default 8935). Single scrape job covers both video and AI metrics.

#### Docker monitoring stack

```bash
git clone https://github.com/livepeer/livepeer-monitoring
cd livepeer-monitoring
docker compose up -d
```

Stack starts:
- Prometheus on port 9090 - scraping Gateway at localhost:8935
- Grafana on port 3000 - default credentials admin / admin

#### Enhanced monitoring (Docker Compose additions)

```yaml
# Enable per-stream metrics
- -metricsPerStream=true
# Expose client IPs in metrics
- -metricsClientIP=true
# Kafka integration (requires setup)
- -kafkaBootstrapServers=kafka:9092
- -kafkaUser=username
- -kafkaPassword=password
- -kafkaGatewayTopic=livepeer-gateway
```

---

### 2.3 Key Metrics by Workload Type

**Source:** `guides/monitoring-and-tooling/monitoring-setup.mdx`

#### Video metrics (on-chain)

**Performance:**
| Metric | What it shows | Alert threshold |
|---|---|---|
| `livepeer_segment_transcoded_total` | Successfully transcoded segments (counter) | Calculate success rate |
| `livepeer_transcode_overall_latency_seconds` | End-to-end transcoding latency | Alert when avg > 5s |
| `livepeer_segment_transcode_failed_total` | Cumulative failed transcode count | Alert on rate increase |
| `livepeer_orchestrator_swaps` | Mid-stream Orchestrator changes | Alert on high rate |
| `livepeer_current_sessions_total` | Active transcoding sessions | Capacity planning |

**Payments:**
| Metric | What it shows | Alert threshold |
|---|---|---|
| `livepeer_gateway_deposit` | Remaining ETH deposit (wei) | Alert when < 0.01 ETH |
| `livepeer_gateway_reserve` | Remaining ETH reserve (wei) | Alert when < 0.005 ETH |
| `livepeer_ticket_value_sent` | ETH value of tickets issued | Budget tracking |
| `livepeer_payment_create_errors` | Failed ticket creation | Alert on any increase |
| `livepeer_suggested_gas_price` | Arbitrum gas price oracle | Alert on spike |

Critical: When deposit hits zero, job routing stops immediately with no warning to clients.

**Useful PromQL queries:**
```promql
# Success rate over last 5 minutes
rate(livepeer_segment_transcoded_total[5m]) /
rate(livepeer_segment_source_appeared_total[5m])

# ETH deposit remaining in ETH (not wei)
livepeer_gateway_deposit / 1e18

# Failed transcode rate per minute
rate(livepeer_segment_transcode_failed_total[1m])

# Average transcoding latency
rate(livepeer_transcode_overall_latency_seconds_sum[5m]) /
rate(livepeer_transcode_overall_latency_seconds_count[5m])
```

#### AI metrics (on-chain and off-chain)

| Metric | What it shows | Alert threshold |
|---|---|---|
| `livepeer_current_sessions_total` | Active AI sessions | Capacity planning |
| `livepeer_max_sessions_total` | Configured session limit | Alert when current > 0.8 x max |
| `livepeer_discovery_errors_total` | Orchestrator discovery failures | Alert on any increase |
| `livepeer_segment_source_upload_failed_total` | Failed job submissions | Alert on rate increase |

Note: AI-specific inference latency (per-pipeline, per-model) is not currently exposed via `/metrics`.

**Useful PromQL queries:**
```promql
# Sessions approaching capacity
livepeer_current_sessions_total / livepeer_max_sessions_total

# Discovery error rate
rate(livepeer_discovery_errors_total[5m])
```

#### Dual metrics (on-chain, video + AI)

All video metrics AND all AI metrics. Additional concern: GPU resource contention.

**GPU monitoring via HTTP API:**
```bash
watch -n 30 'curl -s http://localhost:8935/hardware/stats | python3 -m json.tool'
```

Key fields:
- `gpu_memory_used` / `gpu_memory_total` - approach to 100% precedes model load failures
- `gpu_utilization` - sustained 100% during low-volume periods indicates a bottleneck

Split workloads when: GPU memory consistently > 85%, AI model loading causes transcoding latency spikes, orchestrator swaps increase during AI inference peaks.

---

### 2.4 Grafana Dashboards

**Source:** `guides/monitoring-and-tooling/monitoring-setup.mdx`

The `livepeer/livepeer-monitoring` Docker stack includes three starter dashboards:

1. **Node overview** - Active sessions, success rate, transcoding latency, Orchestrator connectivity
2. **Payment overview** - ETH deposit/reserve over time, ticket value sent, payment creation errors
3. **Transcoding performance** - Realtime ratios, latency distribution (p50, p95, p99), segment success/failure

Access at `http://localhost:3000` (default credentials `admin / admin`).

Custom panels to consider:
- Deposit depletion forecast (linear regression on `livepeer_gateway_deposit` over 24h)
- Session count vs `-maxSessions` limit as a percentage gauge
- AI discovery error rate overlaid with session count

---

### 2.5 Alert Rules

**Source:** `guides/monitoring-and-tooling/monitoring-setup.mdx`

#### Critical alerts

```yaml
groups:
  - name: livepeer-gateway-critical
    rules:
      - alert: GatewayDown
        expr: up{job=~"livepeer.*"} == 0
        for: 1m
        severity: critical

      - alert: DepositExhausted
        expr: livepeer_gateway_deposit < 10000000000000000
        for: 5m
        severity: critical

      - alert: SuccessRateCritical
        expr: |
          rate(livepeer_segment_transcoded_total[5m]) /
          rate(livepeer_segment_source_appeared_total[5m]) < 0.90
        for: 5m
        severity: critical
```

#### Warning alerts

```yaml
      - alert: DepositLow
        expr: livepeer_gateway_deposit < 50000000000000000
        for: 10m
        severity: warning

      - alert: HighTranscodeLatency
        expr: rate(livepeer_transcode_overall_latency_seconds_sum[5m]) / rate(livepeer_transcode_overall_latency_seconds_count[5m]) > 5
        for: 5m
        severity: warning

      - alert: PaymentCreateErrors
        expr: rate(livepeer_payment_create_errors[5m]) > 0
        for: 2m
        severity: warning

      - alert: AIDiscoveryErrors
        expr: rate(livepeer_discovery_errors_total[5m]) > 0
        for: 5m
        severity: warning
```

---

### 2.6 CLI Monitoring Commands

**Source:** Docker quickstart views

```bash
# Check gateway status
curl http://localhost:5935/status

# Check connected orchestrators
curl http://localhost:5935/getOrchestrators

# Full CLI interactive menu
livepeer_cli -host 127.0.0.1 -http 5935
```

Docker variant:
```bash
docker exec -it <container_name> livepeer_cli -host <container_hostname> -http 5935
```

---

### 2.7 Log Monitoring

**Source:** Docker quickstart views + troubleshooting.mdx

```bash
# Real-time logs (Docker)
docker logs -f <container_name>

# Real-time logs (binary) - save to file while displaying
./livepeer -gateway [flags] 2>&1 | tee livepeer.log

# Verbose logging
-v 6
```

Key log events:
- "Received live video AI request" - AI job arrived
- "Orchestrator selected" - routing decision made
- "Transcoding completed" - job finished
- Payment processing events

---

### 2.8 Linux systemd Monitoring

**Source:** `custom/views/setup/install/linux-install-content.mdx` (preserved comment)

The Linux install guide preserves a systemd service template that includes `-monitor=true`:

```ini
[Unit]
Description=Livepeer

[Service]
Type=simple
User=root
Restart=always
RestartSec=4
ExecStart=/usr/local/bin/livepeer -network arbitrum-one-mainnet \
  -ethUrl=<YOUR ARB RPC URL> \
  -monitor=true \
  -v 6

[Install]
WantedBy=default.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now livepeer
# Monitor via journalctl
journalctl -u livepeer -f
```

---

### 2.9 Windows Monitoring

**Source:** `custom/views/setup/install/windows-install-content.mdx` + troubleshooting.mdx

Windows .bat files include `-monitor=true`:
```batch
livepeer.exe -network=offchain -gateway -monitor=true -v=6 ...
```

Port diagnostics:
```cmd
netstat -ano | findstr :8935
taskkill /PID <PID> /F
```

Windows Task Manager can be used to check for lingering livepeer.exe processes.

Note from troubleshooting: AI binary is NOT available for Windows/macOS. Workaround is Docker via WSL2.

---

### 2.10 On-chain Monitoring

**Source:** `guides/monitoring-and-tooling/on-chain-metrics.mdx`

Applies to on-chain gateways only. Key areas:
- Arbiscan watchlist for deposit/redemption alerts
- TicketBroker contract events (FundDeposit, FundReserve, RedeemWinningTicket, Unlock, Withdraw)
- Deposit verification via livepeer_cli and direct RPC queries
- Gas price monitoring and spike response
- Deposit depletion tracking via PromQL (`deriv(livepeer_gateway_deposit[1h])`)

---

### 2.11 Full Prometheus Metrics Reference

**Source:** `resources/reference/technical/go-livepeer/prometheus-metrics.mdx`

Categories (Gateway-relevant):
- **General** - 33 metrics (segments, sessions, streams, transcoding latency, discovery, success rate, recording)
- **Sending payments** - 5 metrics (tickets, deposit, reserve, payment errors)
- **Pixel accounting** - 1 metric (mil_pixels_processed)
- **Fast verification** - 4 metrics

---

## 3. OS-Specific Differences for Monitor Page

### Docker
- Docker HEALTHCHECK directive in Dockerfile/compose
- `docker logs -f <container>` for log monitoring
- `docker exec` for livepeer_cli access (must use container hostname, not localhost)
- Docker Compose additions for enhanced metrics (`-metricsPerStream`, `-metricsClientIP`, Kafka)
- `livepeer/livepeer-monitoring` Docker stack for Prometheus + Grafana bundle
- Docker network considerations for Prometheus scraping (container networking)

### Linux
- Binary runs directly: `./livepeer -gateway -monitor ...`
- systemd service with `-monitor=true` for production
- `journalctl -u livepeer -f` for log monitoring
- Cron-based health check scripts
- `lsof -i :8935` for port diagnostics
- Prometheus installed natively or via package manager
- Grafana installed natively or via package manager

### Windows
- `.bat` file with `-monitor=true`
- Port diagnostics: `netstat -ano | findstr :8935` and `taskkill`
- Task Manager for process monitoring
- AI binary NOT available - Docker via WSL2 is the workaround
- NSSM or Task Scheduler for running as a service
- Prometheus/Grafana installed via Windows binaries or Docker Desktop

---

## 4. Proposed Page Structure (monitor.mdx)

The page should mirror `install.mdx`:
- Parent page at `v2/gateways/setup/monitor/monitor.mdx`
- Three OS-specific content files at `v2/gateways/custom/views/setup/monitor/`:
  - `docker-monitor-content.mdx`
  - `linux-monitor-content.mdx`
  - `windows-monitor-content.mdx`

Each OS tab covers the same topics in the same order:
1. Enable metrics (`-monitor` flag) - OS-specific startup command
2. Health checks - same `curl` commands, OS-specific access patterns
3. Prometheus setup - OS-specific installation
4. Grafana setup - OS-specific installation
5. Log monitoring - OS-specific commands
6. Automation - OS-specific (Docker HEALTHCHECK, cron, Task Scheduler)
7. Next step card

The parent page provides the shared intro, workload-type metrics tables, alert rules, and Grafana dashboard descriptions - these are identical across OS.

---

## 5. Related Pages (cross-references for the monitor page)

- [Health Checks](/v2/gateways/guides/monitoring-and-tooling/health-checks) - detailed health verification
- [Monitoring Setup](/v2/gateways/guides/monitoring-and-tooling/monitoring-setup) - deep Prometheus/Grafana guide
- [On-Chain Metrics](/v2/gateways/guides/monitoring-and-tooling/on-chain-metrics) - Arbiscan, deposit tracking
- [Tools & Dashboards](/v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards) - Explorer, Livepeer Tools
- [Troubleshooting](/v2/gateways/guides/monitoring-and-tooling/troubleshooting) - error resolution
- [Prometheus Metrics](/v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics) - full metrics table
