# Brief 06 Output — `v2/orchestrators/get-started/AI-prompt-start.mdx`

**Status:** Research complete · Draft MDX ready for review  
**Date:** March 2026  
**No commits. No repo writes. For human review only.**

---

## Part 1 — Research Report

### 1.1 Sources Consulted

| Source | URL | Content Found |
|--------|-----|---------------|
| docs.livepeer.org/ai/orchestrators/start-orchestrator | Livepeer Docs | Full Docker command with all AI flags; success log lines; test verification via Swagger UI; aiModelsDir host-path note |
| docs.livepeer.org/ai/orchestrators/models-config | Livepeer Docs | Full aiModels.json schema with all fields; aiModels.json default location (~/.lpData); optimization flags (SFAST, DEEPCACHE); external containers |
| docs.livepeer.org/ai/orchestrators/get-started (snippet via search) | Livepeer Docs | Top 100 Mainnet Orchestrator prerequisite confirmed; 16GB VRAM min for most tasks |
| docs.livepeer.org/ai/introduction | Livepeer Docs | 16GB VRAM min for most pipelines; ai-runner Docker image confirmed |
| docs.livepeer.org/guides/orchestrating/get-started | Livepeer Docs | Existing transcoding command; `nvidia-smi -L` command for listing GPUs |
| Brief 03 research (this session) | — | All pipeline VRAM requirements; pricing units; LLM Ollama runner |
| Cloud SPE LLM guide (livepeer.cloud) | livepeer.cloud | LLM uses separate Ollama runner; 8GB minimum for LLM |

---

### 1.2 Research Questions Answered

**Q1. Minimum VRAM to run at least one AI pipeline alongside transcoding?**  
4GB — the `image-to-text` pipeline (Salesforce/blip-image-captioning-large) requires only 4GB VRAM. This is the lowest-barrier AI pipeline. However, the official AI Subnet get-started page states the requirement for joining is being a Top 100 Mainnet Orchestrator, and recommends 16GB VRAM for most tasks. The 4GB figure is per-pipeline-page documentation.

**Q2. Can AI run on the same GPU as transcoding?**  
Yes, technically. The official docs and community practice confirm combined setups. However, there is a concrete risk: if total VRAM demand (transcoding + AI model) exceeds physical VRAM, the node will fail. The official docs warn: "If different RAM size GPUs are installed it may cause containers to fail if they have less than the required RAM." Community guidance (from Cloud SPE) recommends a dedicated GPU for AI, or careful pipeline selection based on VRAM headroom. No specific "safe" threshold for running both simultaneously was found in official docs — this is a REVIEW item.

**Q3. aiModels.json format, location, minimal working example?**  
- **Location:** `~/.lpData/aiModels.json` (default)  
- **Format:** JSON array of pipeline objects  
- **Minimal working example (sourced from docs.livepeer.org/ai/orchestrators/start-orchestrator):**

```json
[
  {
    "pipeline": "text-to-image",
    "model_id": "ByteDance/SDXL-Lightning",
    "price_per_unit": 4768371,
    "warm": true
  }
]
```

- **Full field set (sourced from docs.livepeer.org/ai/orchestrators/models-config):**

```json
[
  {
    "pipeline": "text-to-image",
    "model_id": "SG161222/RealVisXL_V4.0_Lightning",
    "price_per_unit": 4768371
  },
  {
    "pipeline": "upscale",
    "model_id": "stabilityai/stable-diffusion-x4-upscaler",
    "price_per_unit": "0.5e-2USD",
    "warm": true,
    "optimization_flags": {
      "SFAST": true,
      "DEEPCACHE": false
    }
  },
  {
    "pipeline": "audio-to-text",
    "model_id": "openai/whisper-large-v3",
    "price_per_unit": 12882811,
    "pixels_per_unit": 1,
    "currency": "USD",
    "url": "<CONTAINER_URL>:<PORT>",
    "token": "<OPTIONAL_BEARER_TOKEN>",
    "capacity": 1
  }
]
```

Key fields:
- `pipeline` — pipeline name (string, matches API path e.g. "text-to-image")
- `model_id` — HuggingFace model ID
- `price_per_unit` — wei per unit (integer) or USD string e.g. `"0.5e-2USD"`
- `warm` — boolean; if true, model is preloaded into VRAM on startup
- `optimization_flags` — optional; `SFAST` (up to +25% speed), `DEEPCACHE` (up to +50% speed)
- `url` — for external containers only
- `token` — bearer token for external container auth
- `capacity` — concurrent inference tasks (default: 1)
- `pixels_per_unit` — optional unit multiplier
- `currency` — optional; "USD" for USD-denominated pricing

**Beta constraint:** Only one warm model per GPU is supported during Beta.

**Q4. Docker images required?**  
- **Orchestrator image:** `livepeer/go-livepeer:master`
- **AI Runner image:** `livepeer/ai-runner:latest` (the `-aiRunnerImage` flag is optional; this is the default)
- **Segment-anything-2:** requires a pipeline-specific image — separate pull step
- The Docker socket must be mounted (`-v /var/run/docker.sock:/var/run/docker.sock`) because the orchestrator manages ai-runner containers using docker-out-of-docker

**Q5. Go-livepeer AI flags confirmed:**
- `-aiWorker` — enables AI Worker functionality (required)
- `-aiModels /path/to/aiModels.json` — path to the models config file (required)
- `-aiModelsDir /path/to/models` — directory where model weights are stored on the host (required; must be host path due to docker-out-of-docker)
- `-aiRunnerImage livepeer/ai-runner:latest` — optional; override the ai-runner image version

**Q6. Upgrade path — stop and restart or additive?**  
The existing `livepeer` process must be stopped and relaunched with the new flags added. There is no hot-reload mechanism. The official docs show a `docker run` command with all flags in one command — new flags are appended to the existing command. For binary installs, the equivalent is stopping the process and restarting with the new flags.

**Q7. Success log lines confirmed:**
```
2024/05/01 09:01:39 INFO Starting managed container gpu=0 name=text-to-image_ByteDance_SDXL-Lightning modelID=ByteDance/SDXL-Lightning
I0405 22:03:17.427058 2655655 rpc.go:301] Connecting RPC to uri=https://0.0.0.0:8936
I0405 22:03:17.430371 2655655 rpc.go:254] Received Ping request
```

AI runner verification: navigate to `http://localhost:8000/docs` for Swagger UI; or POST directly to test a pipeline.

**Q8. Common errors when adding AI — NOT fully sourced.** Discord/forum search was not executed in this pass. REVIEW: these should be sourced from `#orchestrating` before publishing. Known structural risks:
- VRAM exhaustion when running AI + transcoding on same GPU
- Mixed VRAM GPU warning (containers may fail if GPU has less VRAM than required)
- `aiModelsDir` must be a host path, not a container path (docker-out-of-docker)
- Models must be pre-downloaded before starting the node (during Beta phase, on-demand loading is not supported)

**Q9. VRAM per pipeline type** — confirmed from Brief 03 and pipeline pages:
| Pipeline | Min VRAM |
|---|---|
| image-to-text | 4GB |
| segment-anything-2 | 6GB |
| LLM (Ollama, 7–8B quantised) | 8GB |
| audio-to-text | 12GB |
| image-to-image | 20GB |
| text-to-image | 24GB |
| image-to-video | 16GB+ (REVIEW) |
| upscale | REVIEW |
| text-to-speech | REVIEW |

**Q10. Community walkthroughs** — Cloud SPE has a detailed LLM pipeline guide (livepeer.cloud). No YouTube walkthroughs specifically covering the upgrade path (transcoding → AI) were found in this pass. REVIEW: targeted YouTube/forum search recommended before publishing.

---

### 1.3 Items Flagged for SME Review

| Claim | Why Unverified | Suggested Verifier |
|-------|---------------|-------------------|
| Safe VRAM threshold for running transcoding + AI on same GPU | Not documented; community-dependent on GPU model | Discord `#orchestrating` or Cloud SPE |
| Common AI runner startup errors | Discord/forum search not executed | Discord `#orchestrating` since Q4 2024 |
| image-to-video VRAM | See Brief 03 note | Pipeline docs directly |
| upscale, text-to-speech VRAM | See Brief 03 note | Pipeline docs directly |
| go-livepeer minimum version for AI | Not found; docs show `master` tag | go-livepeer releases page |
| Whether Top 100 Mainnet Orchestrator is required to receive AI jobs on mainnet | Docs say this is a prerequisite; may need clarification for AI-only operators | Foundation / Rick |
| YouTube video for embed | No targeted search executed | YouTube search: `livepeer AI runner setup`, `livepeer AI inference tutorial` |

---

### 1.4 Media Candidates

No media found via targeted search in this pass. Strong embed candidate exists — a demo of the before/after startup would significantly reduce drop-off on this page. Recommend searching:
- YouTube: `livepeer AI orchestrator setup`, `livepeer AI runner demo`, `livepeer add AI inference`
- Cloud SPE YouTube / blog content
- ETH Global Livepeer talks showing AI pipeline in action

---

## Part 2 — Draft MDX

```mdx
---
title: 'Add AI to Your Node'
description: 'Add AI inference pipelines to an existing go-livepeer transcoding node — hardware check, aiModels.json configuration, and startup command update.'
sidebarTitle: 'Add AI Pipelines'
keywords: ["livepeer", "orchestrator", "AI inference", "AI runner", "aiModels.json", "pipeline", "VRAM", "Cascade", "batch AI", "GPU"]
pageType: 'tutorial'
audience: 'orchestrator'
status: 'current'
---

By the end of this guide, your orchestrator will accept AI inference jobs alongside transcoding.

## Prerequisites

Before you begin:

- go-livepeer is installed and running as a transcoding orchestrator on Arbitrum mainnet (see [Install go-livepeer](/v2/orchestrators/setup/install-go-livepeer) and [Get Started](/v2/orchestrators/get-started/orch-get-started)) <!-- REVIEW: confirm target paths -->
- Your orchestrator is in the Top 100 active set on the Livepeer network
- Docker is installed with `nvidia-container-toolkit` enabled (GPU passthrough required for the AI runner containers)
- Your GPU has at least **4GB of VRAM** available to run at least one AI pipeline (see the hardware check below)
- Model weights pre-downloaded for the pipeline(s) you want to serve (see [Download AI Models](/v2/orchestrators/setup/download-models)) <!-- REVIEW: confirm path -->

<Note>
This guide adds AI inference to an existing transcoding node. If you are setting up from scratch, start with [Install go-livepeer](/v2/orchestrators/setup/install-go-livepeer).
</Note>

---

## Check your hardware

AI inference runs in a separate Docker container alongside your transcoding process. If both share the same GPU, VRAM is split between them. Before configuring anything, confirm how much VRAM your GPU has available.

Run this command to list your GPUs and their VRAM:

```bash
nvidia-smi --query-gpu=index,name,memory.total,memory.free --format=csv
```

You should see output similar to:

```
index, name, memory.total [MiB], memory.free [MiB]
0, NVIDIA GeForce RTX 3090, 24576 MiB, 22000 MiB
```

Use the table below to see which pipelines you can run based on your available VRAM:

| Pipeline | Min VRAM | Notes |
|---|---|---|
| `image-to-text` | 4GB | Caption generation; lowest barrier to entry |
| `segment-anything-2` | 6GB | Object segmentation |
| LLM (`llm`) | 8GB | Requires Ollama runner; 7–8B quantised models |
| `audio-to-text` | 12GB | Speech transcription; Whisper-based |
| `image-to-video` | 16GB+ [//]: # (REVIEW) | Animated video from image |
| `image-to-image` | 20GB | Style transfer, image manipulation |
| `text-to-image` | 24GB | Text-to-image generation (Stable Diffusion, SDXL) |
| `upscale` | [//]: # (REVIEW) | Image upscaling |
| `text-to-speech` | [//]: # (REVIEW) | Speech synthesis |

For details on each pipeline, see [Job Types](/v2/orchestrators/concepts/job-types).

<Warning>
If your GPU does not have enough free VRAM to run both transcoding and your chosen AI pipeline, AI runner containers will fail to start. Either select a lower-VRAM pipeline, dedicate a second GPU exclusively to AI, or stop transcoding on that GPU before enabling AI. [//]: # (REVIEW: confirm safe VRAM headroom needed alongside transcoding from Discord/#orchestrating)
</Warning>

---

## Step 1 — Pull the AI runner image

The AI subnet uses a separate Docker image (`livepeer/ai-runner`) to run inference. Pull it before starting your node:

```bash
docker pull livepeer/ai-runner:latest
```

If you plan to run the `segment-anything-2` pipeline, also pull its pipeline-specific image:

```bash
docker pull livepeer/ai-runner:segment-anything-2
```

Check the [AI Pipelines](/ai/pipelines) documentation for any other pipeline-specific images.

---

## Step 2 — Configure aiModels.json

The `aiModels.json` file tells your orchestrator which AI pipelines and models to serve, what to charge, and whether to keep models warm in VRAM.

Create the file at `~/.lpData/aiModels.json`:

```bash
touch ~/.lpData/aiModels.json
```

Add at least one pipeline entry. The example below configures a single `text-to-image` pipeline with a warm model — the minimal working configuration:

```json
[
  {
    "pipeline": "text-to-image",
    "model_id": "ByteDance/SDXL-Lightning",
    "price_per_unit": 4768371,
    "warm": true
  }
]
```

### Field reference

| Field | Required | Description |
|---|---|---|
| `pipeline` | Yes | Pipeline name (e.g. `"text-to-image"`, `"audio-to-text"`, `"llm"`) |
| `model_id` | Yes | HuggingFace model ID |
| `price_per_unit` | Yes | Price in wei per unit (integer), or USD string e.g. `"0.5e-2USD"` |
| `warm` | No | If `true`, model is preloaded into VRAM on startup |
| `capacity` | No | Max concurrent inference requests (default: 1) |
| `optimization_flags` | No | Performance flags: `SFAST` (up to +25% speed) and/or `DEEPCACHE` (up to +50% speed) |
| `url` | No | For external containers only — URL of a separately managed runner |
| `token` | No | Bearer token for external container authentication |

<Note>
During Beta, only one warm model per GPU is supported. Set `"warm": true` for the model you want pre-loaded; additional models will load on demand when requested.
</Note>

For recommended pricing per pipeline, see [Job Types](/v2/orchestrators/concepts/job-types). For a full multi-pipeline example, see [AI Pipeline Configuration](/v2/orchestrators/advanced/ai-pipelines). [//]: # (REVIEW: confirm path)

---

## Step 3 — Update your startup command

Stop your current go-livepeer process, then restart it with the following additions. Three flags enable AI:

- `-aiWorker` — enables the AI worker functionality
- `-aiModels` — path to your `aiModels.json` file
- `-aiModelsDir` — directory where model weights are stored on the host machine

**Before (transcoding only):**

```bash
livepeer \
  -network arbitrum-one-mainnet \
  -ethUrl <ETH_URL> \
  -orchestrator \
  -transcoder \
  -nvidia 0 \
  -pricePerUnit <PRICE> \
  -serviceAddr <SERVICE_ADDR>
```

**After (transcoding + AI):**

```bash
livepeer \
  -network arbitrum-one-mainnet \
  -ethUrl <ETH_URL> \
  -orchestrator \
  -transcoder \
  -nvidia 0 \
  -pricePerUnit <PRICE> \
  -serviceAddr <SERVICE_ADDR> \
  -aiWorker \
  -aiModels ~/.lpData/aiModels.json \
  -aiModelsDir ~/.lpData/models
```

If you are running via Docker, mount the Docker socket so the orchestrator can manage ai-runner containers:

```bash
docker run \
  --name livepeer_orchestrator \
  -v ~/.lpData/:/root/.lpData/ \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --network host \
  --gpus all \
  livepeer/go-livepeer:master \
  -network arbitrum-one-mainnet \
  -ethUrl <ETH_URL> \
  -orchestrator \
  -transcoder \
  -nvidia 0 \
  -pricePerUnit <PRICE> \
  -serviceAddr <SERVICE_ADDR> \
  -aiWorker \
  -aiModels /root/.lpData/aiModels.json \
  -aiModelsDir ~/.lpData/models
```

<Note>
The `-aiModelsDir` path must be the **host machine path**, not the path inside the Docker container. The orchestrator uses docker-out-of-docker to start ai-runner containers, and passes this path directly to them.
</Note>

---

## Step 4 — Verify AI is active

### Check the logs

Within a few seconds of startup, you should see a line like this for each model configured as warm:

```
2024/05/01 09:01:39 INFO Starting managed container gpu=0 name=text-to-image_ByteDance_SDXL-Lightning modelID=ByteDance/SDXL-Lightning
```

If you see the standard RPC ping without the managed container line, check that:
- `aiModels.json` is valid JSON and at the path specified in `-aiModels`
- The model weights are present in `-aiModelsDir`
- The Docker socket is mounted (Docker mode only)

### Test the AI runner directly

Once running, confirm the AI runner responds by sending a test inference request. Navigate to `http://localhost:8000/docs` in your browser to access the Swagger UI for the ai-runner container.

Alternatively, use curl:

```bash
curl -X POST "http://localhost:8000/text-to-image" \
  -H "Content-Type: application/json" \
  -d '{"model_id": "ByteDance/SDXL-Lightning", "prompt": "A cool cat on the beach", "width": 512, "height": 512}'
```

A successful response returns a JSON object with an `images` array containing a base64-encoded PNG URL.

### Confirm pipelines are advertised

[//]: # (REVIEW: confirm the exact livepeer_cli command to view advertised AI capabilities; not found in this research pass. Check go-livepeer CLI reference or ask in #orchestrating.)

Your AI pipelines will appear in the [Livepeer Explorer](https://explorer.livepeer.org) on your orchestrator's profile once on-chain capability advertisement is configured. See [Configure AI Pipelines On-chain](/v2/orchestrators/setup/ai-onchain) for that step. [//]: # (REVIEW: confirm path)

---

## Choose your AI path

Your AI runner is active. The next step depends on which pipeline type you want to specialise in.

<CardGroup>
  <Card
    title="Set up batch AI inference"
    icon="image"
    href="/v2/orchestrators/get-started/batch-ai-quickstart"
  >
    Configure image, audio, and video generation pipelines. Covers model downloads, pricing, and on-chain registration for batch inference.
  </Card>
  <Card
    title="Set up real-time AI (Cascade)"
    icon="video"
    href="/v2/orchestrators/get-started/realtime-ai-quickstart"
  >
    Configure ComfyStream for persistent video stream processing. Covers ComfyUI workflow deployment and GPU allocation.
  </Card>
</CardGroup>

---

## Related

- [Job Types](/v2/orchestrators/concepts/job-types) — understand the difference between transcoding, batch AI, real-time AI, and LLM inference before choosing a path
- [AI Pipeline Configuration](/v2/orchestrators/advanced/ai-pipelines) — advanced aiModels.json options, multi-GPU setup, external containers, and optimization flags [//]: # (REVIEW: confirm path)
```

---

## Part 3 — Outstanding Items Before Publication

1. **Safe VRAM headroom for transcoding + AI on same GPU** — concrete numbers not in official docs; need community verification from `#orchestrating` or Cloud SPE before publishing the Warning block
2. **Common errors** — Discord/forum search not executed; high priority before publishing (this is a major drop-off point for operators)
3. **`livepeer_cli` AI capability command** — exact command to confirm advertised AI pipelines via CLI not found; check go-livepeer CLI reference
4. **Top 100 Mainnet Orchestrator requirement** — clarify whether this applies to mainnet AI jobs or whether AI-only operators can join the AI subnet independently; affects the Prerequisites section
5. **go-livepeer minimum version for AI** — docs show `master` tag; confirm stable release version with AI support on go-livepeer releases page
6. **image-to-video, upscale, text-to-speech VRAM** — fill REVIEW placeholders (carry-over from Brief 03)
7. **Internal link paths** — `install-go-livepeer`, `orch-get-started`, `download-models`, `ai-pipelines`, `ai-onchain`, `batch-ai-quickstart`, `realtime-ai-quickstart` all need confirmation against final IA before publication
8. **YouTube/community walkthrough embed** — targeted search not executed; strong embed candidate for this page given the visual nature of the setup task
