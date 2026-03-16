# Brief 10 Output — AI Pipelines

**Status:** Research complete · Draft MDX ready  
**Date:** March 2026  
**No commits. No repo writes. For human review only.**

---

## Part 1 — Research Report

### 1.1 Notion Findings

| Page | Status | Key intel |
|---|---|---|
| **AI Pipelines** (IA Confirmed) | Exists — OUTDATED | Path confirmed: `v2/orchestrators/advanced/ai-pipelines.mdx`. Section: Advanced, Tab: GPU Nodes. Assessment: written pre-Q3 2024, missing Cascade, LLM, current aiModels.json format, remote worker/BYOC setup. |
| **Hosting Models (BYOC)** (IA Confirmed) | Exists — thin | Path confirmed: `v2/orchestrators/advanced/hosting-models.mdx`. Cloud SPE Ollama guide is the reference. Phase 3 expand. ai-pipelines links to it — do not duplicate. |
| **Bring Your Own Container (BYOC)** (IA Confirmed, Developers tab) | Exists as prototype — rewrite | Path: `build/byoc.mdx` (Developers tab, not GPU Nodes). BYOC launched June 2025. Phase 1 P1 rewrite. This is a *separate page* in a different tab — ai-pipelines.mdx does not reproduce it; brief introduction + link only. |
| **Livepeer AI Network: Product Direction** | Active strategy doc | Confirms: 70%+ of network fees from AI inference, ~3x YoY. Real-time streaming (Cascade/live-video-to-video) is the strategic differentiator. BYOC streaming fully operational (Trickle protocol). ai-runner has Pipeline ABC + Pydantic params for custom pipelines. |
| **AI Runner** (Knowledge Wiki) | Thin stub | Link points to github.com/livepeer/ai-runner. |

---

### 1.2 Pipeline Types — Confirmed Complete List

Confirmed from `docs.livepeer.org/ai/pipelines/overview` (current docs, March 2026):

| Pipeline | Description | Pricing unit | Warm model (recommended) | VRAM minimum |
|---|---|---|---|---|
| `text-to-image` | Generate images from text prompts | Per output pixel (H × W × count) | `SG161222/RealVisXL_V4.0_Lightning` | 24 GB |
| `image-to-image` | Style transfer, image enhancement, transformations | Per output pixel | Various (SDXL variants) | 24 GB |
| `image-to-video` | Animated video from a single image | Per output pixel | Various | 24 GB |
| `image-to-text` | Caption/describe an image (vision-language model) | Per input pixel | `Salesforce/blip-image-captioning-large` | 4 GB |
| `audio-to-text` | Automatic speech recognition (ASR) with timestamps | Per ms of audio input | `openai/whisper-large-v3` | 12 GB |
| `segment-anything-2` | Promptable visual segmentation of images and videos | Per input pixel [//]: # (REVIEW: confirm pricing unit) | Various | [//]: # (REVIEW: verify VRAM) |
| `text-to-speech` | Natural-sounding speech synthesis from text | Per character or ms [//]: # (REVIEW: confirm) | Various | [//]: # (REVIEW: verify) |
| `upscale` | Low-to-high resolution image upscaling | Per input pixel [//]: # (REVIEW: confirm) | `stabilityai/stable-diffusion-x4-upscaler` | [//]: # (REVIEW: verify) |
| `llm` | Large language model inference (OpenAI-compatible API) | Per million tokens / custom | Any Ollama-compatible model (e.g. `meta-llama/Meta-Llama-3.1-8B-Instruct`) | 8 GB (quantised) |
| `live-video-to-video` | Real-time frame-by-frame AI video transformation (Cascade) | Per frame / per second [//]: # (REVIEW: confirm) | ComfyUI/StreamDiffusion pipelines | [//]: # (REVIEW: verify VRAM) |

**Notes:**
- Pricing unit for `text-to-image`: confirmed as `1.9073484e-08 USD per output pixel` recommended
- Pricing unit for `image-to-text`: confirmed as `2.5e-10 USD per input pixel` recommended
- Pricing unit for `audio-to-text`: confirmed as `0.02e-6 USD per ms of audio input` recommended
- LLM pipeline: Cloud SPE guide uses `price_per_unit: 0.18, currency: "USD", pixels_per_unit: 1000000` — this is a custom pricing approach using a cost-per-token-equivalent; not per pixel
- `live-video-to-video` / Cascade: confirmed in product direction doc as the Trickle-based streaming pipeline; BYOC streaming uses same 5-channel Trickle architecture
- [//]: # (REVIEW: Rick/protocol: is `live-video-to-video` the exact pipeline string used in aiModels.json, or is it a BYOC capability?)

---

### 1.3 aiModels.json — Complete Field Reference

Confirmed from `docs.livepeer.org/ai/orchestrators/models-config` (current docs, March 2026):

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
  },
  {
    "pipeline": "llm",
    "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct",
    "warm": true,
    "price_per_unit": 0.18,
    "currency": "USD",
    "pixels_per_unit": 1000000,
    "url": "http://llm_runner:8000"
  }
]
```

**All confirmed fields:**

| Field | Required | Type | Description |
|---|---|---|---|
| `pipeline` | ✅ | string | Pipeline identifier (e.g. `"text-to-image"`, `"llm"`). Must match a supported pipeline. |
| `model_id` | ✅ | string | HuggingFace model ID (e.g. `"SG161222/RealVisXL_V4.0_Lightning"`). For custom/external containers, must still match what the container expects. |
| `price_per_unit` | ✅ | number or string | Price in Wei per unit of work. Can use string notation with currency suffix: `"0.5e-2USD"`. See pricing notes below. |
| `warm` | ❌ | bool | If `true`, the model is preloaded into GPU memory at AI worker startup. Eliminates cold-start latency. One warm model per GPU during Beta. Defaults to cold (loaded on demand). |
| `pixels_per_unit` | ❌ | integer | Number of pixels (or custom unit) per pricing unit. Used to derive per-pixel pricing. Defaults to pipeline-specific value. |
| `currency` | ❌ | string | Currency for `price_per_unit` when using non-Wei pricing. E.g. `"USD"`. |
| `url` | ❌ | string | URL of an external container serving this pipeline. Used when the model is managed outside the AI worker (e.g. Ollama, custom K8s). Requires `/health` endpoint at the URL. |
| `token` | ❌ | string | Optional bearer token for authenticating with the external container at `url`. |
| `capacity` | ❌ | integer | Number of concurrent inference tasks the model can handle. Defaults to 1. Only relevant with external containers. |
| `optimization_flags` | ❌ | object | Performance flags for warm diffusion models. Currently: `SFAST` (speed, up to 25%), `DEEPCACHE` (speed, up to 50%). Experimental — warm models only. Do not combine SFAST and DEEPCACHE. |

**Critical Beta constraint:** Only one `"warm": true` model per GPU is supported during the Beta phase. Multiple warm models with the same GPU will cause a conflict.

**Pricing notation:**
- Integer (e.g. `4768371`): Wei per pricing unit
- String with suffix (e.g. `"0.5e-2USD"`): USD amount in scientific notation
- The `pixels_per_unit` field adjusts the effective per-pixel cost

---

### 1.4 warm vs cold loading

**Warm model (`"warm": true`):**
- Loaded into GPU VRAM at AI worker startup
- First inference is immediate (no model load delay)
- Consumes VRAM constantly even when idle
- Required for competitive response times on high-demand pipelines
- Supports `optimization_flags`

**Cold model (default, no `"warm"` field or `"warm": false`):**
- Loaded into GPU VRAM only when a job arrives
- First inference incurs model load time (can be 30s–2m+ for large diffusion models)
- VRAM freed after the session completes (approximate)
- Suitable for low-demand or secondary pipelines

**Implication for multi-pipeline config:** If you run 5 pipelines but only have 24 GB VRAM, you cannot warm all of them simultaneously. One strategy: warm your primary pipeline, leave others cold. Cold models will still win jobs — they just lose in latency-competitive scenarios.

---

### 1.5 Ollama/LLM Runner — Confirmed Technical Facts

Source: livepeer.cloud Cloud SPE guide (November 2025, by Mike Zupper / @mike_zoop)

**Architecture:**
```
Gateway → AI Orchestrator → Ollama AI Runner (llm_runner:8000) → Ollama (11434) → GPU
```

**What it is:** A custom Cloud SPE-built translation layer (`tztcloud/livepeer-ollama-runner`) that maps Livepeer LLM pipeline requests to Ollama API calls. Not an official Livepeer Foundation runner — community-built by Cloud SPE.

**Docker image:** `tztcloud/livepeer-ollama-runner:0.1.1` (Cloud SPE image; check for latest tag)

**Minimum VRAM:** 8 GB (GTX 1080 class) — specifically designed for older/lower-VRAM cards

**Example aiModels.json entry:**
```json
{
  "pipeline": "llm",
  "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct",
  "warm": true,
  "price_per_unit": 0.18,
  "currency": "USD",
  "pixels_per_unit": 1000000,
  "url": "http://llm_runner:8000"
}
```

**Important naming note:** Ollama model name (`llama3.1:8b`) and Livepeer model ID (`meta-llama/Meta-Llama-3.1-8B-Instruct`) differ — they represent the same model family but are different identifiers. This is expected and does not indicate an error.

**Verification:** `tools.livepeer.cloud/ai/network-capabilities` — check for "LLM" pipeline with your orchestrator listed as "Warm"

**Not receiving jobs?** Check: (1) registered with AI Service Registry, (2) `url` is reachable by container name (`llm_runner`), (3) GPU competition — slow GPUs lose jobs

---

### 1.6 Remote Workers / BYOC AI Architecture

From Notion (BYOC Coordination Document, AI Network Product Direction, Livepeer AI intro blog):

**Two distinct BYOC concepts — do not conflate:**

1. **AI remote workers** (orchestrator sends AI jobs to a separate GPU machine) — analogous to the transcoding remote worker model. Advanced setup. Not well-documented. Discouraged for beginners (Cloud SPE guide: "requires secure networking, correct registration, consistent health monitoring").

2. **BYOC containers** (run your own custom AI container, register with the network via `url` in aiModels.json) — this is the primary extensibility model. Fully supported. Covered in `hosting-models.mdx`.

**From Notion BYOC IA entry:** BYOC launched June 2025. Phase 1 P1 rewrite. Lives in Developers tab (`build/byoc.mdx`), not GPU Nodes tab. AI Pipelines page introduces it briefly and links to the Developers tab BYOC page.

**For the orchestrator context:** The `url` field in aiModels.json is how an operator connects their orchestrator to any custom container — Ollama, K8s cluster, custom Python inference server, etc. The orchestrator treats the URL as a transparent pass-through and polls the `/health` endpoint at startup.

---

### 1.7 go-livepeer AI Worker Flags (confirmed)

From go-livepeer source (`livepeer.go`):

| Flag | Description |
|---|---|
| `-aiWorker` | Enables AI worker mode (processes AI jobs) |
| `-aiModelsDir <path>` | Directory where model weights are stored |
| `-aiRunnerImageOverrides <spec>` | Override Docker images per pipeline (replaces deprecated `-aiRunnerImage`) |
| `-aiVerboseLogs` | Enable verbose logs from AI runner containers |

The deprecated flag is `-aiRunnerImage` — replaced by `-aiRunnerImageOverrides`.

---

### 1.8 What Changed Since Beta (Pre-Q3 2024) — Outdated Content to Drop

The existing `ai-pipelines.mdx` was written for the AI subnet beta. Known outdated content based on Notion IA assessment:

- ❌ Pipeline list: was text-to-image, image-to-image, image-to-video only. Now 10 pipelines including audio-to-text, image-to-text, segment-anything-2, text-to-speech, upscale, llm, live-video-to-video.
- ❌ aiModels.json schema: old format missing `url`, `token`, `capacity`, `optimization_flags`, `currency`, `pixels_per_unit`.
- ❌ No LLM pipeline coverage (added 2025).
- ❌ No Cascade / live-video-to-video coverage (added Q4 2024).
- ❌ No remote worker / BYOC setup documentation.
- ❌ warm model guidance: original guidance was "one warm model per pipeline" — now "one warm model per GPU".
- ❌ AI runner image: `-aiRunnerImage` flag was deprecated; replaced with `-aiRunnerImageOverrides`.
- ❌ Pricing format: old format was integer Wei only; now supports string USD notation.

---

### 1.9 Scope Boundary Enforcement

This page covers:
- ✅ All current pipeline types with VRAM + pricing
- ✅ Full aiModels.json field reference
- ✅ Multiple pipeline configuration
- ✅ Warm vs cold tradeoff
- ✅ LLM/Ollama runner (with brief how-to and link to Cloud SPE guide)
- ✅ External container / BYOC intro + link to hosting-models
- ✅ Troubleshooting

This page does NOT cover:
- ❌ Installation (Brief 02)
- ❌ Basic AI runner setup (Brief 06 — AI-prompt-start)
- ❌ Hardware requirements (setup/hardware-requirements)
- ❌ Full BYOC container spec (build/byoc.mdx — Developers tab)
- ❌ Custom pipeline development (ai-runner repo custom-pipeline.md)
- ❌ Earnings / profitability deep-dive (advanced/earnings)

---

### 1.10 Media Candidates

- `tools.livepeer.cloud/ai/network-capabilities` — live network capability dashboard; reference as verification tool
- livepeer.cloud Cloud SPE Ollama guide — primary reference for LLM section; link as "further reading"
- [//]: # (REVIEW: Search YouTube for "livepeer AI pipeline Cascade" for real-time demo embed)
- [//]: # (REVIEW: Search YouTube for "livepeer AI runner ComfyUI" for setup walkthrough)

---

### 1.11 Outstanding SME Review Items

| # | Item | Owner |
|---|---|---|
| 1 | `live-video-to-video` pipeline string in aiModels.json vs BYOC capability — confirm exact identifier | Rick |
| 2 | VRAM requirements for segment-anything-2, text-to-speech, upscale, live-video-to-video | docs or Rick |
| 3 | Pricing unit for segment-anything-2, text-to-speech, upscale, live-video-to-video | docs |
| 4 | Current status of "one warm model per GPU" Beta constraint — still active? | Rick |
| 5 | Confirm `tztcloud/livepeer-ollama-runner` version is still `0.1.1` or check latest | livepeer.cloud |
| 6 | AI remote worker setup (separate GPU machine as AI worker) — confirm current state of documentation and support | Rick / Cloud SPE |
| 7 | `-aiRunnerImageOverrides` flag — exact format for per-pipeline image overrides | go-livepeer source |
| 8 | All internal link paths: `AI-prompt-start`, `hosting-models`, `hardware-requirements`, `cli-flags`, `advanced/earnings` | Alison |

---

## Part 2 — Draft MDX: `ai-pipelines.mdx`

```mdx
---
title: 'AI Pipelines'
description: 'Configure and optimise AI inference pipelines on your orchestrator — pipeline types, aiModels.json reference, custom models, Ollama LLM runner, and remote workers.'
keywords: ["livepeer", "orchestrator", "AI pipelines", "aiModels.json", "AI runner", "Cascade", "LLM", "Ollama", "text-to-image", "VRAM", "custom models", "BYOC"]
pageType: 'guide'
audience: 'orchestrator'
status: 'current'
---

This guide covers running AI inference pipelines as an orchestrator — which pipelines to run, how to configure your `aiModels.json`, how to add custom and external models, and how to diagnose pipeline-level issues. It assumes your AI runner is already active and handling at least one pipeline.

If you haven't set up the AI runner yet, start with [Add AI to Your Node](/v2/orchestrators/get-started/AI-prompt-start). <!-- REVIEW: confirm path -->

---

## Supported pipelines

Livepeer's AI worker dispatches jobs to pipeline-specific runners. Each pipeline is a discrete job type with its own model support, VRAM requirements, and pricing unit.

| Pipeline | Description | Min VRAM | Pricing unit | Recommended warm model |
|---|---|---|---|---|
| `text-to-image` | Image generation from text prompts | 24 GB | Per output pixel | `SG161222/RealVisXL_V4.0_Lightning` |
| `image-to-image` | Style transfer, enhancement, transformations | 24 GB | Per output pixel | SDXL variants |
| `image-to-video` | Animated video from a still image | 24 GB | Per output pixel | Various |
| `image-to-text` | Caption/describe images (vision-language) | 4 GB | Per input pixel | `Salesforce/blip-image-captioning-large` |
| `audio-to-text` | Speech recognition with timestamps | 12 GB | Per ms of audio | `openai/whisper-large-v3` |
| `segment-anything-2` | Promptable visual segmentation | <!-- REVIEW --> | Per input pixel | Various |
| `text-to-speech` | Natural speech synthesis | <!-- REVIEW --> | Per character/ms | Various |
| `upscale` | Low-to-high resolution upscaling | <!-- REVIEW --> | Per input pixel | `stabilityai/stable-diffusion-x4-upscaler` |
| `llm` | Large language model inference | 8 GB | Per custom unit | Ollama-compatible (e.g. Llama 3.1 8B) |
| `live-video-to-video` | Real-time frame-by-frame video transformation (Cascade) | <!-- REVIEW --> | Per frame | ComfyUI/StreamDiffusion workflows |

<Note>
The warm model column shows the recommended warm model for early-phase network participation. Operators are free to serve any verified model. For an up-to-date list of verified models per pipeline, see each pipeline's page in the [Livepeer AI docs](https://docs.livepeer.org/ai/pipelines/overview).
</Note>

---

## aiModels.json — complete reference

`aiModels.json` is the single file that controls which pipelines and models your AI worker offers, at what price, and how they are loaded. It lives by default at `~/.lpData/aiModels.json` and is read at AI worker startup.

### Example with all fields

```json
[
  {
    "pipeline": "text-to-image",
    "model_id": "SG161222/RealVisXL_V4.0_Lightning",
    "price_per_unit": 4768371,
    "warm": true
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
    "url": "http://my-external-container:8000",
    "token": "optional-bearer-token",
    "capacity": 2
  },
  {
    "pipeline": "llm",
    "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct",
    "warm": true,
    "price_per_unit": 0.18,
    "currency": "USD",
    "pixels_per_unit": 1000000,
    "url": "http://llm_runner:8000"
  }
]
```

### Field reference

| Field | Required | Type | Description |
|---|---|---|---|
| `pipeline` | ✅ | string | Pipeline identifier. Must exactly match a supported pipeline name (e.g. `"text-to-image"`, `"llm"`). |
| `model_id` | ✅ | string | HuggingFace model ID. Must match what the runner or external container expects. |
| `price_per_unit` | ✅ | number or string | Price per unit of work. Integer = Wei. String with suffix = USD scientific notation (e.g. `"0.5e-2USD"`). |
| `warm` | ❌ | boolean | If `true`, preload the model at startup. Eliminates cold-start latency. One warm model per GPU during Beta phase. |
| `pixels_per_unit` | ❌ | integer | Units of work per pricing unit. Adjusts effective per-unit cost. |
| `currency` | ❌ | string | Currency for `price_per_unit`. Set to `"USD"` when using USD notation. |
| `url` | ❌ | string | URL of an external container serving this pipeline. The container must expose a `/health` endpoint. See [External containers](#external-containers--byoc) below. |
| `token` | ❌ | string | Bearer token for authenticating with the external container at `url`. |
| `capacity` | ❌ | integer | Max concurrent inference tasks from this container. Defaults to 1. |
| `optimization_flags` | ❌ | object | Performance optimisations for warm diffusion models. See [Optimisation flags](#optimisation-flags) below. |

<Accordion title="Optimisation flags — SFAST and DEEPCACHE">

`optimization_flags` apply only to `warm: true` diffusion models. Both flags are experimental.

**SFAST** — enables the Stable Fast optimisation framework. Up to 25% faster inference with no quality loss.
```json
"optimization_flags": { "SFAST": true }
```

**DEEPCACHE** — caches diffusion steps to reduce redundant computation. Up to 50% faster inference with minimal quality loss. The improvement is more pronounced with more diffusion steps (do not use with Lightning or Turbo models — they are already step-optimised and DEEPCACHE degrades output quality).
```json
"optimization_flags": { "DEEPCACHE": true }
```

**SFAST and DEEPCACHE cannot be combined.** Use one or neither.

</Accordion>

---

## Running multiple pipelines

You can configure as many pipelines as you like in `aiModels.json`. The AI worker will advertise capabilities for each entry and run runners concurrently.

**VRAM constraint:** Each warm model occupies VRAM continuously. A single RTX 4090 (24 GB) can hold one large diffusion model warm. To run multiple warm models, you need either multiple GPUs or careful selection of lower-VRAM pipelines.

A pragmatic multi-pipeline config:

```json
[
  {
    "pipeline": "text-to-image",
    "model_id": "SG161222/RealVisXL_V4.0_Lightning",
    "price_per_unit": 4768371,
    "warm": true
  },
  {
    "pipeline": "audio-to-text",
    "model_id": "openai/whisper-large-v3",
    "price_per_unit": 12882811,
    "warm": true
  },
  {
    "pipeline": "image-to-image",
    "model_id": "ByteDance/SDXL-Lightning",
    "price_per_unit": 4768371
  }
]
```

In this example: two pipelines are warm (text-to-image on GPU 0, audio-to-text on GPU 1), and image-to-image loads cold on demand. The warm selection should reflect your primary revenue pipeline and any pipeline where latency directly affects job win rate.

<Note>
**Beta constraint:** During the Beta phase, only one warm model per GPU is supported. If you set `"warm": true` on more entries than you have GPUs, expect a conflict at startup. Check the AI worker logs for warm model loading errors.
</Note>

---

## LLM inference — Ollama runner

The `llm` pipeline uses a different architecture from diffusion pipelines. Rather than the standard `livepeer/ai-runner` image, it uses an Ollama-based runner built by Cloud SPE.

**Why Ollama?** Quantised LLMs run efficiently on as little as 8 GB VRAM — GPUs that are too small for diffusion pipelines. The Ollama runner lets operators with older cards (GTX 1080, 1070 Ti, 2060) contribute to the network for AI inference.

### Setup

<Steps>

<Step title="Create a volume for model persistence">
```bash
docker volume create ollama
```
</Step>

<Step title="Create docker-compose.yml">
```yaml
services:
  ollama-ai-runner:
    image: tztcloud/livepeer-ollama-runner:0.1.1
    container_name: llm_runner
    restart: unless-stopped
    runtime: nvidia

  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    runtime: nvidia
    volumes:
      - ollama:/root/.ollama
    environment:
      - OLLAMA_GPU_ENABLED=true
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]
              driver: nvidia
              count: all

volumes:
  ollama:
    external: true
```
</Step>

<Step title="Start the stack">
```bash
docker compose up -d
```
</Step>

<Step title="Download your model">
```bash
docker exec -it ollama ollama pull llama3.1:8b
```

The Ollama model name (`llama3.1:8b`) and the Livepeer model ID (`meta-llama/Meta-Llama-3.1-8B-Instruct`) are different identifiers for the same model family. This is expected.
</Step>

<Step title="Configure aiModels.json">
```json
[
  {
    "pipeline": "llm",
    "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct",
    "warm": true,
    "price_per_unit": 0.18,
    "currency": "USD",
    "pixels_per_unit": 1000000,
    "url": "http://llm_runner:8000"
  }
]
```

The `url` uses the Docker service name `llm_runner` — both containers share a network, so the name resolves automatically.
</Step>

<Step title="Verify">
After restarting your AI worker, check [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities) — your orchestrator should appear under the LLM pipeline as "Warm".
</Step>

</Steps>

For full deployment details and troubleshooting, see the [Cloud SPE Ollama runner guide](https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/).

---

## External containers and BYOC

The `url` field in `aiModels.json` lets you connect any external container as the inference backend for a pipeline. The AI worker treats the URL as a pass-through and polls its `/health` endpoint at startup.

This is used for:
- **Ollama runner** (as above)
- **K8s clusters or GPU farms** behind a load balancer
- **Custom inference servers** (PyTorch, TensorRT, ONNX via HTTP)
- **Auto-scaling container stacks** (Podman, Docker Swarm, Nomad)

The only requirement is that the container responds to the same API contract as the managed `livepeer/ai-runner` containers. Specifically it must: (a) expose `/health`, and (b) handle inference requests in the format the AI worker sends.

For a full guide on building and registering custom containers, see [Hosting Models (BYOC)](/v2/orchestrators/advanced/hosting-models). [//]: # (REVIEW: confirm path)

For building custom pipelines and the full BYOC developer workflow, see [Bring Your Own Container](/v2/developers/build/byoc). [//]: # (REVIEW: confirm path — Developers tab)

---

<AccordionGroup>

<Accordion title="Performance: warm count, model selection, monitoring">

**Warm count and VRAM tradeoff**

Each warm model holds a model's weights in GPU VRAM continuously. The benefit is instant job response — no cold-load latency. The cost is VRAM locked even during idle periods.

For competitive pipelines (text-to-image, image-to-video), running cold puts you at a significant disadvantage — gateways prefer orchestrators with warm models for latency-sensitive jobs. For lower-frequency pipelines (audio-to-text, image-to-text), cold loading is often acceptable.

Rule of thumb: warm your primary revenue pipeline, cold the rest.

**Model selection and earnings**

Different models vary in job win rate depending on what gateways and developers are requesting. The [Livepeer Explorer AI Leaderboard](https://explorer.livepeer.org) shows per-orchestrator performance metrics. For deeper guidance on earnings optimisation by pipeline, see [Earnings and Economics](/v2/orchestrators/advanced/earnings). [//]: # (REVIEW: confirm path)

**Monitoring pipeline health**

Key things to watch in AI worker logs:
- `Starting AI worker` — confirms container launched
- `Loaded model <model_id>` — warm load succeeded
- `RunAI request for pipeline <pipeline>` — job received
- `Error loading model` — warm load failure (likely VRAM OOM or wrong model ID)
- Container health: run `docker ps` and check that ai-runner containers are in `Up` status

For network-wide capability visibility: [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities).
</Accordion>

</AccordionGroup>

---

## Troubleshooting

<AccordionGroup>

<Accordion title="AI worker container not starting">

**Most common causes:**

1. **Wrong image tag** — check that the `livepeer/ai-runner` image tag exists on DockerHub. The `-aiRunnerImage` flag is deprecated; use `-aiRunnerImageOverrides` instead.
2. **Insufficient VRAM** — if you have `"warm": true` and the model is too large for your GPU, the container will fail to start or crash immediately after loading. Check `docker logs <container_name>` for OOM messages.
3. **Docker / NVIDIA Container Toolkit not configured** — run `docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi`. If this fails, NVIDIA Container Toolkit is not correctly installed.

</Accordion>

<Accordion title="Model not loading — wrong model ID or path">

`model_id` must match the HuggingFace model ID exactly, including capitalisation and `/`. Common mistakes:
- Lowercase when the actual ID is mixed case
- Missing the organisation prefix (e.g. `RealVisXL_V4.0_Lightning` instead of `SG161222/RealVisXL_V4.0_Lightning`)
- Using an Ollama model name (`llama3.1:8b`) directly in `model_id` instead of the HuggingFace equivalent

For external containers (`url` field), the model must already be downloaded inside the container before the AI worker starts. The AI worker polls `/health` at startup — if the model isn't ready, the health check fails and the entry is skipped.
</Accordion>

<Accordion title="Pipeline receiving no jobs">

1. **Not registered** — if you added a new pipeline after initial activation, you may need to re-register your capabilities with the network. Consult the [Activate on the Network](/v2/orchestrators/setup/publish-offerings) guide. [//]: # (REVIEW: confirm path)
2. **price_per_unit too high** — gateways will not route to orchestrators whose price exceeds their `maxPricePerUnit`. Check current competitive pricing on the Explorer AI Leaderboard.
3. **Model is cold in a latency-competitive pipeline** — set `"warm": true` for your primary pipeline.
4. **Not in active set** — check your stake status on Explorer. AI pipeline jobs require the orchestrator to be in the active set.
</Accordion>

<Accordion title="OOM during inference">

The model loaded successfully (warm) but a specific inference request causes an out-of-memory error mid-run. This happens when a request asks for unusually large output dimensions (e.g. text-to-image at 2048×2048 on a 24 GB GPU).

Mitigations:
- Reduce `maxSessions` on your AI worker to limit concurrent jobs
- Set `capacity: 1` in the aiModels.json entry for affected pipelines
- Consider setting DEEPCACHE or SFAST to reduce peak VRAM usage (diffusion pipelines only)
</Accordion>

<Accordion title="Ollama runner: not receiving LLM jobs">

1. Check that you registered with the AI Service Registry after updating `aiModels.json`
2. Verify container reachability: from your orchestrator, `curl http://llm_runner:8000/health` should return HTTP 200
3. Check that the Docker networks match — the orchestrator and `llm_runner` container must share a Docker network for the hostname to resolve
4. Verify with [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities) — your orchestrator should appear under LLM
</Accordion>

</AccordionGroup>

---

## Key takeaways

- Livepeer's AI worker supports 10 pipeline types across image, video, audio, text, and real-time streaming workloads.
- `aiModels.json` is the single configuration file. Required fields: `pipeline`, `model_id`, `price_per_unit`. Use `warm: true` for your primary pipeline to minimise cold-start latency.
- During the Beta phase, only one warm model per GPU is supported.
- The LLM pipeline uses an Ollama-based runner (8 GB minimum VRAM) that is separate from the standard `livepeer/ai-runner` image.
- External containers can be connected via the `url` field — enabling Ollama, K8s, and custom inference servers.
- Use [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities) to verify your pipeline registrations are visible to the network.

---

## Related

- [Add AI to Your Node](/v2/orchestrators/get-started/AI-prompt-start) — initial AI runner setup [//]: # (REVIEW: confirm path)
- [Hosting Models (BYOC)](/v2/orchestrators/advanced/hosting-models) — custom model hosting and external containers [//]: # (REVIEW: confirm path)
- [Hardware Requirements](/v2/orchestrators/setup/hardware-requirements) — VRAM requirements by pipeline [//]: # (REVIEW: confirm path)
- [CLI Flags Reference](/v2/resources/cli-flags) — full AI worker flag reference [//]: # (REVIEW: confirm path)
```
