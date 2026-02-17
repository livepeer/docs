# Hardware Requirements

This page defines **minimum, recommended, and production-grade hardware configurations** for running a Livepeer Orchestrator in 2026.

This document is strictly about **network-layer execution hardware** (off-chain compute). Staking and governance live at the protocol layer.

---

# 1. Role of Hardware in Livepeer

An Orchestrator performs:

- Real-time video transcoding (NVENC / FFmpeg pipelines)
- AI inference workloads (Stable Diffusion, ComfyStream, custom models)
- Segment validation and verification
- Ticket signing and redemption
- Availability commitments to Gateways

Performance directly impacts:

- Job selection probability (AI marketplace)
- Reputation score
- Revenue
- Delegator confidence

---

# 2. Minimum Requirements (Development / Testing)

| Component | Minimum Spec |
|------------|--------------|
| GPU | NVIDIA RTX 3060 / T4 (8GB VRAM) |
| CPU | 4 cores |
| RAM | 16GB |
| Storage | 100GB SSD |
| Network | 100 Mbps symmetric |
| OS | Ubuntu 22.04 LTS |

Suitable for:
- Testnet
- Low-volume workloads
- Learning / experimentation

---

# 3. Recommended Production Setup (Video Focused)

| Component | Recommended |
|------------|-------------|
| GPU | RTX 4080 / A4000 / L4 |
| CPU | 8–16 cores |
| RAM | 32–64GB |
| Storage | NVMe SSD (1TB+) |
| Network | 1 Gbps symmetric |
| Uptime Target | 99%+ |

Optimised for:
- Real-time streaming
- Multi-resolution transcoding ladders
- Low latency workloads

---

# 4. AI Inference Optimised Setup

AI workloads are VRAM-bound.

| GPU | Recommended Use |
|------|----------------|
| RTX 4090 (24GB) | Stable Diffusion, high batch sizes |
| A100 (40GB/80GB) | Enterprise inference |
| H100 | Advanced model serving |

Additional Requirements:

- CUDA 12+
- NVIDIA Container Toolkit
- Sufficient cooling
- High IOPS NVMe storage

AI pricing is determined by:
- GPU type
- Max price set by Gateway
- Availability

Stake does NOT determine AI routing selection.

---

# 5. Storage & I/O Considerations

Video workloads:
- Temporary segment caching
- Fast write/read cycles
- Prefer NVMe over SATA

AI workloads:
- Model weights (multi-GB)
- Frequent checkpoint loading
- Local model cache recommended

---

# 6. Network Requirements

Latency affects:
- Real-time streaming
- Gateway selection
- Reputation scoring

Minimum:
- <50ms to major regions
- Stable packet delivery

Production best practice:
- Static IP
- Reverse proxy (nginx)
- TLS termination
- Firewall rules

---

# 7. Power & Cooling

GPUs under AI load can sustain 300W–700W draw.

Requirements:
- Stable PSU with headroom
- Adequate airflow
- Rack cooling in data centres

Overheating causes:
- Dropped jobs
- Lower uptime
- Reduced revenue

---

# 8. Data Centre vs Home Setup

| Home | Data Centre |
|------|-------------|
| Lower cost | Higher reliability |
| Variable uptime | SLA-backed uptime |
| Residential IP | Static IP |
| Limited bandwidth | High throughput |

Large orchestrators often colocate hardware.

---

# 9. Scaling Strategy

Two approaches:

### Vertical Scaling
- Add more powerful GPUs
- Increase VRAM
- Increase batch sizes

### Horizontal Scaling
- Multiple worker nodes
- Shared staking pool
- Distributed transcoding

---

# 10. Monitoring Requirements

Recommended tools:

- Prometheus
- Grafana
- Node exporter
- NVIDIA DCGM exporter

Key metrics:

- GPU utilisation
- VRAM usage
- Segment processing time
- Job success rate
- Availability %

---

# 11. Hardware and Economics Relationship

Higher-tier GPUs:

- Support higher max price
- Attract higher-end AI workloads
- Improve competitiveness in marketplace

But also:

- Increase capex
- Increase operational risk

Operators must model ROI carefully.

---

# 12. Common Hardware Mistakes

| Mistake | Impact |
|----------|--------|
| Consumer GPUs without ECC | Stability issues |
| Insufficient VRAM | OOM failures |
| SATA drives | I/O bottlenecks |
| Poor cooling | Thermal throttling |
| Underpowered PSU | Crashes |

---

# 13. Checklist

Before going live:

- [ ] GPU detected via nvidia-smi
- [ ] Docker sees GPU (--gpus all)
- [ ] CUDA functional
- [ ] Network ports open
- [ ] Stable RPC endpoint
- [ ] Monitoring configured
- [ ] Backup power plan

---

# 14. Future-Proofing

Livepeer roadmap includes:

- Larger AI workloads
- Advanced inference routing
- Expanded GPU marketplace

Operators should:

- Monitor network GPU demand
- Track gateway pricing models
- Plan hardware refresh cycles

---

This concludes the hardware requirements section.

Next page: Orchestrator Stats & Monitoring.

