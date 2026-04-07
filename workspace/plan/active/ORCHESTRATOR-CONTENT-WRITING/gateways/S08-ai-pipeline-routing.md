# AI Pipeline Routing

Route AI inference requests through your gateway to orchestrators running the specific pipeline and model you need. The gateway matches each request to orchestrators advertising the corresponding capability, applies per-capability pricing, and dispatches the job.

---

## Available AI pipelines

| Pipeline | Description | Pricing model |
|----------|-------------|---------------|
| `text-to-image` | Generate images from text prompts | Per-pixel |
| `image-to-image` | Transform existing images | Per-pixel |
| `image-to-video` | Generate video from image input | Per-pixel |
| `upscale` | Increase image resolution | Per-pixel |
| `audio-to-text` | Transcribe audio to text (Whisper) | Per-request (milliseconds) |
| `segment-anything-2` | Object segmentation | Per-pixel |
| `llm` | Large language model inference | Per-request (tokens) |
| `image-to-text` | Image captioning / description | Per-request |
| `live-video-to-video` | Real-time AI video processing (Cascade) | Per-interval |
| `text-to-speech` | Generate audio from text | Per-request |

{/* REVIEW: pipeline list completeness — verify with: go-livepeer AI documentation, latest release */}

---

## Configure the gateway for AI

### 1. Start the gateway with AI capability enabled

```bash
livepeer -gateway \
  -network arbitrum-one-mainnet \
  -ethUrl YOUR_RPC \
  -httpAddr 0.0.0.0:8937 \
  -aiServiceRegistry \
  -maxPricePerCapability /path/to/maxPricePerCapability.json
```

{/* REVIEW: -aiServiceRegistry flag name and behaviour — verify with: go-livepeer latest release */}

The `-aiServiceRegistry` flag enables discovery of AI-capable orchestrators. Without it, the gateway handles video transcoding only.

### 2. Set per-capability pricing

Create a `maxPricePerCapability.json` file with price caps for each pipeline you intend to use. See [Pricing and Cost Control](S06-pricing-and-cost-control.md) for the full format.

Minimal example covering two pipelines:

```json
{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "ByteDance/SDXL-Lightning",
      "price_per_unit": 1700000,
      "pixels_per_unit": 1
    },
    {
      "pipeline": "audio-to-text",
      "price_per_unit": 12882811
    }
  ]
}
```

{/* REVIEW: example price values — verify with: current market rates via Orchestrator Price API */}

### 3. Send a test request

```bash
curl -X POST http://localhost:8937/text-to-image \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a mountain landscape", "model_id": "ByteDance/SDXL-Lightning"}'
```

A successful response returns the generated image data. A failure response with `no orchestrators available` means no orchestrators advertising that pipeline/model are priced within your cap — raise the price in `maxPricePerCapability.json` or wait for more orchestrators to come online.

### 4. Verify routing in logs

Check the gateway logs for orchestrator selection and job dispatch:

```bash
docker logs livepeer-gateway 2>&1 | grep -i "pipeline\|orchestrator\|dispatch"
```

The logs show which orchestrator was selected, the pipeline requested, and whether the job completed or failed over.

---

## Cold-start latency

AI models not pre-loaded on the orchestrator incur load time on first request. This delay ranges from seconds to minutes depending on model size and the orchestrator's hardware.

**Mitigation**: Session affinity. After the first request to a given orchestrator for a specific model, subsequent requests within the same session reuse the loaded model. The gateway maintains session state to route follow-up requests to the same orchestrator where the model is already warm.

Plan for cold-start latency in your application's timeout and retry logic. First requests to a new model/orchestrator combination will be slower than steady-state.

{/* REVIEW: session affinity mechanism for AI warm models — verify with: go-livepeer source */}

---

## Request format per pipeline

Each pipeline accepts a different request body. The gateway proxies the request to the selected orchestrator without modification.

**text-to-image**:
```json
{"prompt": "a mountain landscape", "model_id": "ByteDance/SDXL-Lightning"}
```

**audio-to-text**:
```bash
curl -X POST http://localhost:8937/audio-to-text \
  -F "audio=@recording.mp3" \
  -F "model_id=openai/whisper-large-v3"
```

**llm**:
```json
{"prompt": "Explain the Livepeer protocol", "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct", "max_tokens": 256}
```

{/* REVIEW: request body formats per pipeline — verify with: go-livepeer AI API documentation */}

Refer to the orchestrator's advertised capabilities for supported `model_id` values per pipeline.
