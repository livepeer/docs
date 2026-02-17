# Orchestrator Stats & Monitoring

Operating an Orchestrator is not just about running software — it is about maintaining availability, reliability, and economic performance within a competitive marketplace.

This page defines how to monitor:

- Node health
- GPU performance
- Revenue flows
- On‑chain state
- Reputation & selection

This is a **network-layer operations guide**.

---

# 1. Monitoring Philosophy

An orchestrator must:

- Stay online
- Process jobs correctly
- Redeem tickets
- Call reward() every round
- Maintain acceptable latency

Failure in any of these areas reduces income or risks slashing.

Monitoring should cover:

| Layer | What to Monitor |
|--------|----------------|
| Hardware | GPU, CPU, RAM |
| Application | go-livepeer health |
| Network | Latency, packet loss |
| Blockchain | Bonded stake, active set |
| Economics | Fees, inflation rewards |

---

# 2. Built‑in Metrics Endpoint

When running go-livepeer with:

```
-monitor=true
```

Metrics are exposed at:

```
http://localhost:7935/metrics
```

This exposes Prometheus-compatible metrics.

---

# 3. Key Metrics to Track

## GPU Metrics

- gpu_utilization_percent
- gpu_memory_used_bytes
- gpu_temperature_celsius

Command-line check:

```
nvidia-smi
```

---

## Transcoding Metrics

- livepeer_segment_processed_total
- livepeer_segment_errors_total
- livepeer_transcode_latency_seconds

High error rates reduce selection probability.

---

## AI Inference Metrics

- inference_jobs_processed
- inference_latency_seconds
- inference_queue_depth

AI routing depends heavily on:

- Latency
- Max price configuration
- Availability

Stake does NOT influence AI routing selection.

---

## Economic Metrics

- ticket_redemptions_total
- eth_fees_earned
- lpt_rewards_earned

These determine operator ROI.

---

# 4. Explorer Monitoring

Visit:

https://explorer.livepeer.org

Track:

- Active set status
- Bonded LPT
- Delegated stake
- Reward calls
- Fee earnings

Failure to call reward() each round stops inflation rewards.

---

# 5. On‑Chain State Verification

Verify:

- BondingManager stake
- Active set membership
- Fee share configuration
- Reward cut percentage

Using:

- Explorer
- Etherscan (Arbitrum)
- CLI calls

---

# 6. Prometheus + Grafana Setup

Recommended stack:

- Prometheus
- Grafana dashboards
- Node exporter
- NVIDIA DCGM exporter

Sample Prometheus config:

```
scrape_configs:
  - job_name: "livepeer"
    static_configs:
      - targets: ["localhost:7935"]
```

---

# 7. Alerts

Configure alerts for:

| Condition | Threshold |
|------------|----------|
| GPU temp | >85°C |
| GPU memory | >95% |
| Node offline | >2 min |
| Segment errors | >5% |
| No reward call | 1 round missed |

Alert channels:

- Slack
- PagerDuty
- Email

---

# 8. Reward Automation

Operators must call reward() once per round.

Best practice:

- Cron job automation
- Scripted reward calls
- Monitoring of transaction success

Missing reward calls = no inflation.

---

# 9. Performance Optimization

To improve income:

- Increase GPU throughput
- Reduce latency
- Improve uptime
- Tune max price for AI
- Maintain strong reputation

---

# 10. Troubleshooting

| Problem | Likely Cause |
|-----------|-------------|
| No jobs | Poor availability |
| Low AI jobs | Price too high |
| Low video jobs | Not in active set |
| Ticket failures | RPC instability |
| High errors | GPU overheating |

---

# 11. Advanced Monitoring

For large operators:

- Multi-node dashboards
- Revenue forecasting models
- Stake ranking tracking
- Competitive pricing analysis

---

# 12. Operational KPIs

Professional orchestrators track:

- Uptime %
- Revenue per GPU hour
- Cost per kWh
- ROI per stake unit
- Delegator growth rate

---

# 13. Operational Risk

Major risks:

- Slashing events
- Hardware failure
- Network outages
- Regulatory risk

Mitigation:

- Redundant hardware
- Multi-region failover
- Insurance

---

# 14. Production Checklist

Before scaling:

- Monitoring configured
- Alerts tested
- Reward automation live
- Logs rotated
- Backup wallet plan
- RPC redundancy

---

# 15. Conclusion

Monitoring transforms a hobbyist node into a professional operation.

In Livepeer’s marketplace model:

- Performance determines income
- Availability determines selection
- Reputation determines growth

Next page: Quickstart → Join a Pool.

