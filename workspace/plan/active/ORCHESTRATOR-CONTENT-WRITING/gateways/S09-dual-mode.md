# Dual Mode: Video and AI on One Gateway

Run video transcoding and AI inference on a single `go-livepeer` process. Dual mode exposes both workload types from one gateway instance with independent session managers, pricing controls, and orchestrator selection.

---

## OS constraint

AI inference requires Linux. Dual mode therefore requires Linux. macOS and Windows support video transcoding only.

{/* REVIEW: OS constraint for AI — verify with: go-livepeer latest release notes */}

---

## Configuration

Start the gateway with both video and AI flags:

```bash
livepeer -gateway \
  -network arbitrum-one-mainnet \
  -ethUrl YOUR_RPC \
  -httpAddr 0.0.0.0:8935 \
  -rtmpAddr 0.0.0.0:1935 \
  -aiServiceRegistry \
  -aiHttpAddr 0.0.0.0:8937 \
  -maxPricePerUnit 300 \
  -maxPricePerCapability /path/to/maxPricePerCapability.json \
  -transcodingOptions /path/to/transcodingOptions.json \
  -monitor
```

{/* REVIEW: dual-mode flag combination, especially -aiHttpAddr for separate AI port — verify with: go-livepeer source. May use different flag name or approach for binding AI to a separate port */}

---

## Ports

| Port | Protocol | Workload |
|------|----------|----------|
| 1935 | RTMP | Video ingest |
| 8935 | HTTP | Video API / HLS output |
| 8937 | HTTP | AI API |
| 5935 | HTTP | CLI interface |

Video and AI traffic are separated by port. Each port handles its own request routing and orchestrator selection independently.

---

## Pricing in dual mode

Video and AI workloads use independent pricing controls:

- **Video**: Governed by `-maxPricePerUnit`. Per-pixel pricing based on resolution and frame count.
- **AI**: Governed by `-maxPricePerCapability`. Per-pipeline pricing with model-level overrides.

Both ceilings are active simultaneously. Changing `maxPricePerUnit` does not affect AI job pricing, and vice versa — unless no `maxPricePerCapability.json` is provided, in which case AI jobs fall back to `maxPricePerUnit`.

---

## Verification

### Video path

1. Send an RTMP stream to the gateway:

```bash
ffmpeg -re -i input.mp4 -c:a copy -c:v libx264 -f flv rtmp://localhost:1935/live/test-stream
```

2. Confirm HLS output is available:

```bash
curl http://localhost:8935/stream/test-stream.m3u8
```

A valid M3U8 playlist response confirms video transcoding is routing to orchestrators.

### AI path

1. Send an AI inference request:

```bash
curl -X POST http://localhost:8937/text-to-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a mountain landscape", "model_id": "ByteDance/SDXL-Lightning"}'
```

A successful image response confirms AI routing is active.

### Both paths active

With both streams running, check the gateway logs for interleaved video and AI job dispatches:

```bash
docker logs livepeer-gateway 2>&1 | grep -E "transcode|pipeline|dispatch"
```

Video jobs and AI jobs should route to their respective orchestrator pools independently. An orchestrator running only video transcoding will never receive AI jobs, and vice versa.

---

## Resource considerations

Dual mode runs both workload managers in a single process. Memory and CPU overhead scales with concurrent job volume across both types. Monitor the gateway process for resource pressure if running high-throughput video alongside frequent AI inference requests.

The gateway itself does not perform transcoding or inference — it routes jobs to orchestrators. The primary resource cost on the gateway side is network I/O and session management, not compute.
