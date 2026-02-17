# Installation

This page provides a production‑grade installation guide for running `go-livepeer` as an Orchestrator in 2026.

This covers both:

- Video (stake‑weighted execution)
- AI inference (price + performance routed execution)

---

# 1. Installation Models

Livepeer Orchestrators can be installed via:

1. Docker (recommended)
2. Native binary
3. Kubernetes (advanced / data center scale)

Docker is the reference deployment model.

---

# 2. Prerequisites

Before installation ensure:

- Ubuntu 22.04 LTS or equivalent
- NVIDIA drivers installed
- NVIDIA Container Toolkit installed
- Docker 24+
- Stable Arbitrum RPC endpoint

Verify GPU:

```
nvidia-smi
```

---

# 3. Install NVIDIA Container Toolkit

```
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt update
sudo apt install -y nvidia-docker2
sudo systemctl restart docker
```

Test:

```
docker run --rm --gpus all nvidia/cuda:12.2.0-base-ubuntu22.04 nvidia-smi
```

---

# 4. Pull go-livepeer

```
docker pull livepeer/go-livepeer:latest
```

---

# 5. Environment Variables

Define:

- ETH_URL (Arbitrum RPC)
- ETH_PASSWORD (wallet passphrase)
- DATA_DIR

Example:

```
export ETH_URL=https://arb1.arbitrum.io/rpc
```

---

# 6. Start Orchestrator (Video + AI Enabled)

```
docker run -d \
  --name livepeer \
  --gpus all \
  -p 8935:8935 \
  -p 7935:7935 \
  livepeer/go-livepeer \
  -orchestrator \
  -transcoder \
  -network arbitrum \
  -ethUrl $ETH_URL \
  -monitor=true \
  -enableAI=true
```

Flags:

| Flag | Purpose |
|------|----------|
| -orchestrator | Enables bonded mode |
| -transcoder | Enables GPU usage |
| -enableAI | Enables AI workloads |
| -monitor | Prometheus metrics |

---

# 7. Wallet Setup

Options:

- Hardware wallet
- CLI key
- Encrypted JSON keystore

Required:

- ETH for gas
- LPT for bonding (video market)

---

# 8. Bond LPT (Video Market Only)

Bonding is required to:

- Enter active set
- Earn inflation
- Process stake‑weighted video jobs

Use Explorer UI or CLI.

---

# 9. AI Configuration

AI market does not require stake to receive jobs.

Operators must configure:

- Max price
- Supported pipelines
- GPU VRAM thresholds

Pricing competitiveness is critical.

---

# 10. Verify Node Health

Check logs:

```
docker logs livepeer
```

Confirm:

- GPU detected
- Orchestrator registered
- No RPC errors

---

# 11. Production Hardening

Recommended:

- Nginx reverse proxy
- TLS certificates
- Firewall rules
- Auto restart policy
- Log rotation
- Backup RPC endpoint

---

# 12. Kubernetes Deployment (Advanced)

Large operators may:

- Separate control plane and worker plane
- Use horizontal pod autoscaling
- Run multi‑region redundancy

---

# 13. Video vs AI Post‑Install Checklist

| Item | Video | AI |
|------|--------|-----|
| Bonded LPT | Required | Optional |
| Reward automation | Required | Not required |
| Max price tuning | Optional | Critical |
| VRAM capacity | Moderate | High |

---

# 14. Installation Complete

After installation:

1. Confirm staking status
2. Confirm AI routing eligibility
3. Enable monitoring
4. Test workloads

Next page: Configuration.

