# BYOC (Bring Your Own Compute) Pipeline Guide

This guide details how to integrate your own AI models or GPU infrastructure into the Livepeer AI inference network. BYOC enables developers to:

- Run inference tasks with custom models (e.g. ControlNet, Whisper, SegFormer)
- Deploy nodes across cloud, edge, or on-prem environments
- Serve Livepeer inference workloads with economic incentives

---

## 🔧 Requirements

- Linux or Docker-capable machine with GPU (CUDA 11+)
- Internet-accessible IP or NAT hole-punching
- Git, Python 3.9+, optional ComfyUI fork for modular tasks
- Livepeer Gateway credentials or API key for worker registration

---

## 🛠 Step 1 – Clone & Setup

```bash
git clone https://github.com/livepeer/comfystream
cd comfystream
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Install your desired inference model(s):
```bash
python scripts/download.py --model whisper-large
python scripts/download.py --model sdxl
```

---

## 🛰 Step 2 – Configure Node

Edit your `config.yaml`:
```yaml
publicKey: "0xYourEthereumAddress"
gatewayURL: "wss://gateway.livepeer.org"
models:
  - whisper-large
  - sdxl
heartbeat: true
``` 

Optional:
- Run as Docker
- Add plugin adapters (e.g. `segment-anything`, `blip2`)

---

## 🏁 Step 3 – Start Gateway Node

```bash
python run.py --adapter grpc --gpu --model whisper-large
```

You’ll see logs for:
- Heartbeats sent to Livepeer Gateway
- Job claims and model execution
- Result uploads or webhooks

---

## 🔐 Step 4 – Register (Optional)

Register your node onchain (Arbitrum):
```bash
livepeer-cli gateway register \
  --addr=1.2.3.4:5040 \
  --models=whisper-large,sdxl \
  --bond=100LPT \
  --region=NA1
```

Smart Contract: `GatewayRegistry.sol` (ABI reference coming soon)

---

## 📊 Metrics & Monitoring

Integrate with Prometheus or send custom logs:
```bash
export PROMETHEUS_PORT=9100
```

Livepeer Explorer (placeholder):
- BYOC nodes online: `12`
- Inference latency (mean): `220ms`
- Tasks served today: `3400`

---

## 🔁 Examples

### Whisper + Caption Overlay
```yaml
pipeline:
  - task: whisper-transcribe
  - task: overlay
    type: caption
```

### Blur Faces + YOLO
```yaml
pipeline:
  - task: object-detection
    model: yolov8
  - task: segment-blur
    target: faces
```

---

## 🔧 Troubleshooting

| Issue                        | Fix                                                        |
|-----------------------------|-------------------------------------------------------------|
| Node not receiving tasks    | Check gatewayURL / firewall rules                          |
| Models not loading          | Confirm model paths and weights are present                |
| No GPU visible              | Use `nvidia-smi` and check CUDA drivers                    |

---

## 🧠 Developer Notes

- All BYOC workers speak the [Livepeer Gateway Protocol](../../livepeer-network/technical-stack)
- You can serve from multiple geographic regions
- Contribution rewards may be offered in LPT or credits

---

## 📎 Resources

- [ComfyStream GitHub](https://github.com/livepeer/comfystream)
- [Model Registry](https://forum.livepeer.org/t/model-registry)
- [Livepeer Gateway Protocol](../../livepeer-network/technical-stack)
- [Studio AI Docs](https://livepeer.studio/docs/ai)

📎 End of `byoc.mdx`

