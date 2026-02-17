# Orchestrator Configuration

This page defines how to properly configure a Livepeer Orchestrator for both Video Transcoding and AI Inference workloads. It assumes installation is complete and the node is online.

---

## 1. Configuration Philosophy

Configuration determines:
- What workloads you accept (video, AI, or both)
- Your pricing strategy
- Performance tuning
- Network visibility
- Delegator economics

Video and AI must be configured separately because:

| Dimension | Video Transcoding | AI Inference |
|------------|------------------|--------------|
| Work Unit | Segment-based | Model request |
| Pricing Basis | Per pixel / segment | Per compute / model |
| Latency Sensitivity | Low–Medium | High |
| Determinism | Deterministic outputs | Model-based variability |
| Resource Profile | NVENC heavy | CUDA / Tensor heavy |

---

## 2. Core CLI Flags

### General

```bash
livepeer \
  -orchestrator \
  -serviceAddr <public_ip:8935> \
  -ethAcctAddr <bonded_address> \
  -ethUrl <arb_rpc_endpoint> \
  -pricePerUnit 0
```

Key flags:

- `-orchestrator` — enables orchestrator mode
- `-serviceAddr` — public address advertised to gateways
- `-ethAcctAddr` — bonded LPT address
- `-pricePerUnit` — base transcoding price

---

## 3. Video Configuration

### Transcoding Enablement

```bash
-transcoder
```

### Recommended Flags

```bash
-nvidia 0 \
-gpuMonitoring
```

Video tuning considerations:

- Enable NVENC for hardware acceleration
- Ensure ffmpeg build supports required codecs
- Configure segment concurrency carefully

### Pricing Strategy (Video)

Video pricing is typically:

```
price = pixels_per_segment * pricePerUnit
```

Operators compete on:
- Cost efficiency
- Reliability
- Historical performance

---

## 4. AI Inference Configuration

AI requires pipeline registration.

### Enable AI

```bash
-ai
```

### Register Model Pipeline

Pipelines may include:
- ComfyStream flows
- BYOC models
- Real-time video effects

Operators define:

- Model type
- VRAM requirements
- Expected latency
- Pricing model

### AI Pricing

AI pricing is based on:

- Compute time
- GPU memory class
- Model complexity

Unlike video, AI jobs are not pixel-based. They are compute-bound.

---

## 5. Geographic & Capacity Signaling

Operators can:

- Advertise region
- Limit concurrency
- Set max job load

This improves routing quality.

---

## 6. Performance Optimization

### GPU Allocation

- Avoid overcommitting VRAM
- Separate video and AI GPUs where possible

### Concurrency

- Video: multiple segments per GPU
- AI: typically 1–2 concurrent jobs per high-end GPU

---

## 7. Monitoring

Monitor:

- GPU temperature
- VRAM usage
- Job failure rate
- Reward accumulation

Use:

- Livepeer CLI stats
- Prometheus exporters
- Explorer performance views

---

## 8. Best Practice Config Profiles

### Video-Focused Operator

- Stable NVENC GPUs
- Low pricePerUnit
- High segment throughput

### AI-Focused Operator

- High VRAM GPUs (A100, 4090)
- Registered pipelines
- Latency optimized

### Hybrid Operator

- Dedicated GPU classes
- Distinct pricing

---

## 9. Security Considerations

- Protect RPC endpoints
- Use firewall rules
- Avoid exposing admin ports

---

## 10. Verification Checklist

After configuration:

- Node visible in Explorer
- Receiving jobs
- GPU load increases under traffic
- Rewards accumulating

---

Configuration determines profitability and stability. Tune carefully and iterate based on real workload patterns.

