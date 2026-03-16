# Brief 03 Output — `v2/orchestrators/concepts/job-types.mdx`

**Status:** Research complete · Draft MDX ready for review  
**Date:** March 2026  
**No commits. No repo writes. For human review only.**

---

## Part 1 — Research Report

### 1.1 Sources Consulted

| Source | URL | Date | Content Found |
|--------|-----|------|---------------|
| Messari Q3 2024 | messari.io/report/livepeer-q3-2024-brief | Oct 2024 | AI Subnet launched Q3 2024; initial pipeline types (text-to-image, image-to-image, image-to-video); LLM SPE announced |
| Messari Q4 2024 | messari.io/report/livepeer-q4-2024-brief | Feb 2025 | Cascade introduced Q4 2024; AI SDK launch; shift from batch to real-time |
| Messari Q1 2025 | messari.io/report/state-of-livepeer-q1-2025 | Jun 2025 | Cascade matured Q1 2025; ComfyStream integrated Jan 2025; multi-container GPU orchestration |
| Messari Q2–Q3 2025 | messari.io | 2025 | AI fees &gt;55% of protocol revenue Q2 2025; continued Cascade refinement |
| Livepeer blog — Cascade vision | blog.livepeer.org/introducing-livepeer-cascade… | Feb 2025 | Cascade definition; Phase 1 Dec 2024; Phase 2 Q1 2025; ComfyStream relationship |
| Livepeer blog — Real-time update | blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ | Nov 2025 | 72%+ of fees AI-driven; Cascade as network vision; LLM + style transfer |
| Livepeer blog — ComfyStream | blog.livepeer.org/comfyui-and-real-time-video-ai-processing/ | Jan 2025 | `ComfyStream = ComfyUI + real-time video layer; integrated with Livepeer Jan 30 2025` |
| Livepeer blog — Building ComfyStream | blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ | Feb 2025 | ComfyStream architecture; pipeline examples |
| docs.livepeer.org/ai/introduction | docs.livepeer.org | current | AI subnet overview; 16GB VRAM min for most pipelines; ai-runner Docker image |
| docs.livepeer.org/ai/pipelines/overview | docs.livepeer.org | current | Full pipeline list: audio-to-text, image-to-image, image-to-text, image-to-video, LLM, segment-anything-2, text-to-image, text-to-speech, upscale |
| docs.livepeer.org/ai/pipelines/text-to-image | docs.livepeer.org | current | VRAM: 24GB; pricing: 1.9073484e-08 USD per output pixel |
| docs.livepeer.org/ai/pipelines/image-to-image | docs.livepeer.org | current | VRAM: 20GB; pricing: 1.9073484e-08 USD per input pixel |
| docs.livepeer.org/ai/pipelines/image-to-text | docs.livepeer.org | current | VRAM: 4GB; pricing: 2.5e-10 USD per input pixel |
| docs.livepeer.org/ai/pipelines/audio-to-text | docs.livepeer.org | current | VRAM: 12GB; pricing: 0.02e-6 USD per millisecond of audio |
| docs.livepeer.org/ai/pipelines/segment-anything-2 | docs.livepeer.org | current | VRAM: 6GB; pricing: 3.22e-11 USD per input pixel |
| docs.livepeer.org/ai/gateways/onchain | docs.livepeer.org | current | Wei pricing format for AI pipelines in on-chain config |
| docs.livepeer.org/orchestrators/guides/get-started | docs.livepeer.org | current | Transcoding pricing: wei per pixel; `-pricePerUnit` flag |
| go-livepeer multi-o.md | github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md | current | `-pricePerUnit` = wei per pixel for transcoding |
| livepeer.org/docs/video-miners/core-concepts/payments | livepeer.org | current | Payment mechanics; probabilistic micropayment; price per pixel off-chain advertisement |
| Cloud SPE — LLM pipeline guide | livepeer.cloud/self-hosting-livepeers-llm-pipeline-… | Nov 2025 | Ollama runner; 8GB VRAM minimum; aiModels.json LLM config; meta-llama/Meta-Llama-3.1-8B-Instruct |
| github.com/livepeer/comfystream | github.com/livepeer/comfystream | current | ComfyStream deployment; Docker image; RunPod template |
| pipelines.livepeer.org/docs/technical/reference/available-nodes | pipelines.livepeer.org | current | ComfyStream node specs; VRAM &lt;500MB per input node, but model VRAM is separate |
| gate.com — AI Subnet intro | gate.com/learn/articles/introducing-the-livepeer-ai-subnet | May 2024 | `Pipeline = discrete task type; ai-runner Docker; warm vs dynamic model loading` |
| buidl-labs/livepeer-pricing-tool | github.com/buidl-labs/livepeer-pricing-tool | archive | Transcoding pricing unit = wei per pixel confirmed |
| figment.io transcoding fees | figment.io/resources/primer-on-livepeer-transcoding | 2020 | `Transcoding = wei per pixel; broadcaster sets max price` |
| forum.livepeer.org — price per pixel guide | forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 | Dec 2023 | Market dynamics for transcoding pricing |
| AI SPE Phase 4 Retrospective | forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208 | Jan 2026 | BYOC workflows; ComfyStream multimodal; AI SPE now MuxionLabs |

---

### 1.2 Job Types Confirmed

| Type | Category | Source Confirming | Launch Date | VRAM Requirement | Pricing Unit |
|------|----------|-------------------|-------------|-----------------|--------------|
| Transcoding | Core | go-livepeer docs, livepeer.org | 2017 (original) | No VRAM minimum (CPU capable; NVENC/NVDEC for GPU-accelerated) | Wei per pixel (`-pricePerUnit` flag) |
| text-to-image | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 (AI Subnet) | 24GB VRAM | 1.9073484e-08 USD per output pixel |
| image-to-image | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 | 20GB VRAM | 1.9073484e-08 USD per input pixel |
| image-to-video | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 | 16GB+ VRAM [//]: # (REVIEW: pipeline page not fetched directly; using general "16GB min for most" from docs.livepeer.org/ai/introduction) | Wei per pixel (from on-chain config example: 3,390,842 wei/pixel) |
| image-to-text | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 | 4GB VRAM | 2.5e-10 USD per input pixel |
| audio-to-text | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 | 12GB VRAM | 0.02e-6 USD per millisecond of audio |
| upscale | Batch AI | docs.livepeer.org/ai/pipelines | Q3 2024 | [//]: # (REVIEW: not found in research) | [//]: # (REVIEW) |
| segment-anything-2 | Batch AI | docs.livepeer.org/ai/pipelines | 2024 | 6GB VRAM | 3.22e-11 USD per input pixel |
| text-to-speech | Batch AI | docs.livepeer.org/ai/pipelines | 2024/2025 | [//]: # (REVIEW: not found in research) | [//]: # (REVIEW) |
| LLM | LLM Inference | Cloud SPE guide, Messari Q3 2024 | 2024/2025 | 8GB VRAM minimum (Cloud SPE Ollama runner) / 16GB official recommendation | Configured in aiModels.json (e.g., 0.18 USD per 1,000,000 token units) |
| Real-time AI / Cascade / ComfyStream | Real-time | Cascade blog, Messari Q4 2024, ComfyStream repo | Q4 2024 (Phase 1: Dec 2024) | 8GB+ VRAM (model-dependent; persistent GPU allocation for live stream duration) | [//]: # (REVIEW: pricing for Cascade/ComfyStream jobs is not documented in same wei-per-pixel format → SME review needed) |

**Total confirmed distinct pipeline types visible to orchestrators:** 11 (transcoding + 9 batch AI + LLM + real-time/Cascade)

---

### 1.3 Key Technical Findings

**How pipelines work from the orchestrator's perspective:**
- The orchestrator runs the `go-livepeer` binary plus one or more `ai-runner` Docker containers
- Each `ai-runner` container hosts one or more AI pipelines with their models
- The orchestrator declares which pipelines/models it serves by advertising them on-chain (via `aiModels.json` for AI; via `-pricePerUnit` for transcoding)
- When a job arrives from a Gateway, the orchestrator routes it to the appropriate container
- Models can be "warm" (pre-loaded into VRAM, immediately available) or "on-demand" (loaded when a request arrives)
- The LLM pipeline uses a separate Ollama-based runner (`livepeer/ai-runner` is the standard; Cloud SPE built a custom `livepeer-ollama-runner`)
- ComfyStream / real-time AI uses a persistent session model — the GPU stays allocated for the duration of the stream, not per-inference

**Cascade vs. Batch AI — the critical distinction:**
- Batch AI: single request → single response. A gateway sends a text-to-image request; the orchestrator processes it and returns the result. The session is stateless.
- Real-time AI (Cascade/ComfyStream): persistent stream → continuous output. A live video stream enters the orchestrator's pipeline; the orchestrator continuously processes frames and returns the transformed stream. The session is stateful and GPU-allocated for the stream's lifetime.
- From the orchestrator's perspective: batch = short-lived compute burst; real-time = long-running GPU reservation

**Cascade launch timeline:**
- AI Subnet launched Q3 2024 (batch AI inference)
- Cascade vision proposed and Phase 1 shipped Q4 2024 (December 2024)
- ComfyStream integrated with Livepeer January 30, 2025
- Multi-container GPU orchestration and streaming agent support added Q1 2025
- "Cascade" is the strategic vision/framework; "ComfyStream" is the technical implementation of real-time pipelines

**LLM pipeline:**
- Added as part of LLM SPE initiative announced Q3 2024
- Uses Ollama as inference runtime
- Custom runner built by Cloud SPE (livepeer-ollama-runner), separate from standard ai-runner
- Configured in `aiModels.json` with `"pipeline": "llm"`
- Reference model: `meta-llama/Meta-Llama-3.1-8B-Instruct`
- Minimum VRAM: 8GB (Cloud SPE runner) for 7–8B quantised models
- Official recommendation: 16GB+
- Pricing unit in aiModels.json is USD per 1,000,000 token units (confirmed from Cloud SPE guide example: `"price_per_unit": 0.18, "pixels_per_unit": 1000000`)

**aiModels.json:**
- JSON configuration file that tells the orchestrator which AI pipelines and models to serve, where the runner is, pricing, and whether the model should be kept warm
- Each entry specifies: `pipeline`, `model_id`, `warm`, `price_per_unit`, `currency`, `pixels_per_unit`, `url`

---

### 1.4 Items Flagged for SME Review

| Claim | Why Unverified | Suggested Verifier |
|-------|---------------|-------------------|
| image-to-video VRAM: 16GB+ | Pipeline page not directly accessed; using general 16GB minimum from AI introduction page | Check docs.livepeer.org/ai/pipelines/image-to-video directly |
| upscale VRAM requirement | Not found in search results | Check docs.livepeer.org/ai/pipelines/upscale |
| text-to-speech VRAM requirement | Not found in search results | Check docs.livepeer.org/ai/pipelines/text-to-speech |
| Cascade/ComfyStream pricing unit | Not documented in same wei-per-pixel format as batch AI; may be per-session or per-stream-minute | Peter (AI SPE), Rick, or forum.livepeer.org |
| LLM pricing unit in wei (on-chain) | Cloud SPE guide shows USD format in aiModels.json; unclear if/how this maps to on-chain wei | Cloud SPE docs or go-livepeer source |
| Transcoding GPU — NVENC/NVDEC requirement | Known community fact but no direct go-livepeer source found in this session | go-livepeer README or hardware-requirements page |

---

### 1.5 Media Candidates

| Title | URL | Type | Notes |
|-------|-----|------|-------|
| Building Real-Time AI Video Effects with ComfyStream | blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ | Blog with demos | Has clown transformation and Bruce Banner pipeline examples; strong concept illustration |
| ComfyUI and Real-Time Video AI Processing | blog.livepeer.org/comfyui-and-real-time-video-ai-processing/ | Blog | Good architecture explainer |
| Cascade vision announcement | blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future… | Blog | Cascade launch context |
| Daydream product demos | livepeer.org | Product demo | VTuber/avatar demos showing Cascade in action |
| ETH Global Livepeer talks (YouTube) | youtube.com — search "livepeer ETH global" | Conference talks | Live pipeline demos; recommend embedding if specific talk found during content pass |
| Livepeer YouTube | youtube.com/@Livepeer | Channel | Official demos of AI pipelines; **recommend a targeted search during content pass** |

**Note on media:** A specific YouTube search for demo videos was not executed in this research pass. That search should happen before finalising the draft, specifically: `livepeer AI pipeline demo`, `livepeer Cascade demo`, `livepeer real-time video AI`. Any embeddable demo found should be placed after the Cascade section.

---

## Part 2 — Draft MDX

> The frontmatter `setup-paths` and `AI-prompt-start` links are placeholders per the brief — these pages are marked as to-be-created in the IA plan.

```mdx
---
title: 'Job Types'
description: 'The job types an orchestrator can process — transcoding, batch AI inference, real-time AI (Cascade), and LLM inference — with hardware requirements, pricing models, and how to choose which to run.'
keywords: ["livepeer", "orchestrator", "job types", "transcoding", "AI inference", "Cascade", "LLM", "batch AI", "real-time AI", "GPU", "VRAM", "pipeline", "ComfyStream", "aiModels.json"]
pageType: 'concept'
audience: 'orchestrator'
status: 'current'
---

Orchestrators on Livepeer do not just transcode video. They can earn fees from four distinct categories of work, each with different GPU requirements, pricing models, and configuration paths. This page explains what each job type is, how it reaches your node, and what hardware it demands — so you can decide which to run before choosing a setup path.

## Overview

| Job Category | What it does | Min VRAM | Pricing unit | Configured via |
|---|---|---|---|---|
| Transcoding | Converts video streams to multiple formats/resolutions | None (NVENC/NVDEC for GPU-accelerated) | Wei per pixel | `-pricePerUnit` flag |
| Batch AI Inference | Processes single AI requests (image generation, audio transcription, captioning) | 4–24GB depending on pipeline | Wei per pixel or per millisecond | `aiModels.json` |
| Real-time AI (Cascade) | Applies AI to a live video stream continuously | 8GB+ (model-dependent) | <!-- REVIEW: pricing unit TBC — see SME note --> | `aiModels.json` + ComfyStream |
| LLM Inference | Generates text responses using large language models | 8GB (quantised 7–8B models) | Wei per token unit | `aiModels.json` + Ollama runner |

---

## Transcoding

Transcoding is the original job type on the Livepeer network, live since 2017. When a broadcaster sends a live video stream to a Gateway, the Gateway routes individual segments to orchestrators for conversion into multiple resolution and bitrate formats. Your node receives raw video segments, decodes them, re-encodes them into the requested output profiles, and returns the results.

**From the orchestrator's perspective**, transcoding is a high-throughput, short-duration job. Each segment is a few seconds of video. Your node processes dozens or hundreds of segments per stream, per session. Sessions can run for hours.

### Hardware requirements

Transcoding can run on CPU alone, but GPU-accelerated transcoding via NVIDIA NVENC/NVDEC is strongly recommended for performance and to remain competitive on the network. <!-- REVIEW: confirm minimum NVIDIA driver/CUDA version from go-livepeer README -->

### Pricing model

Transcoding is priced in **wei per pixel**. A pixel here is a single pixel of output video — width × height × number of output frames. You set your price using the `-pricePerUnit` flag when starting your node; `-pixelsPerUnit` defaults to 1 (one pixel per unit). Gateways filter orchestrators by their advertised maximum price, so your pricing directly affects which jobs you receive.

### Configuration

Configured via the `-pricePerUnit` (and optionally `-pixelsPerUnit`) flags at node start. See [Configure Your Orchestrator](/v2/orchestrators/setup/orch-config) for the full flag reference.

---

## Batch AI Inference

Batch AI inference covers all single-request AI jobs: you receive a request, run inference on your GPU, and return the result. The session is stateless — the Gateway sends a request and waits for a response; once the result is returned, the job is complete.

The Livepeer AI Subnet launched in Q3 2024 and added this category to the network alongside transcoding. The subnet currently supports nine distinct pipelines.

**From the orchestrator's perspective**, a batch AI job arrives as an HTTP request routed from the Gateway to your `ai-runner` Docker container. The container either uses a pre-loaded ("warm") model for immediate processing, or loads the model on demand. Results are returned to the Gateway as a JSON response containing URLs, text, or binary outputs depending on the pipeline.

### Current pipelines

| Pipeline | What it produces | Min VRAM | Recommended pricing |
|---|---|---|---|
| `text-to-image` | Image from text prompt | 24GB | 1.9073484e-08 USD per output pixel |
| `image-to-image` | Transformed image from input image + prompt | 20GB | 1.9073484e-08 USD per input pixel |
| `image-to-video` | Short video clip from input image | 16GB+ <!-- REVIEW --> | ~3.39e-06 USD per pixel |
| `image-to-text` | Text caption from image | 4GB | 2.5e-10 USD per input pixel |
| `audio-to-text` | Transcript from audio file | 12GB | 0.02e-06 USD per millisecond of audio |
| `upscale` | High-resolution image from low-resolution input | <!-- REVIEW --> | <!-- REVIEW --> |
| `segment-anything-2` | Segmentation masks from image | 6GB | 3.22e-11 USD per input pixel |
| `text-to-speech` | Speech audio from text | <!-- REVIEW --> | <!-- REVIEW --> |

<Note>
The `upscale` and `text-to-speech` VRAM requirements are not confirmed in this draft — they will be filled before publication. Check [AI Pipelines](/ai/pipelines) for current per-pipeline specs.
</Note>

### Hardware requirements

The AI subnet requires an **NVIDIA GPU with at least 16GB of VRAM** for most pipelines. For optimal performance and a higher chance of being selected for jobs, RTX 30/40 series or equivalent are recommended. The exception is `image-to-text` (4GB) and `segment-anything-2` (6GB), which can run on lower-spec cards.

<Note>
If you have a consumer GPU with less than 16GB VRAM, you are not excluded from AI inference. The `image-to-text` and `segment-anything-2` pipelines run at 4GB and 6GB respectively. The LLM pipeline can run at 8GB with the Ollama-based runner. See [LLM Inference](#llm-inference) below.
</Note>

### Pricing model

AI inference pipelines use a **per-unit pricing model** where the unit depends on the pipeline type. For image-based pipelines, the unit is a pixel (height × width). For audio, the unit is a millisecond of input audio. You set prices per pipeline and model in your `aiModels.json` configuration file. On-chain, prices are expressed in wei per unit; the `aiModels.json` format also supports USD-denominated pricing.

### Configuration

Configured via the `aiModels.json` file. Each entry specifies the pipeline name, model ID, pricing, whether the model is kept warm, and the URL of the runner container. See [Configure AI Pipelines](/v2/orchestrators/setup/ai-config) <!-- REVIEW: confirm correct target path --> for the configuration reference.

---

## Real-time AI (Cascade)

Real-time AI is architecturally distinct from batch inference. Instead of processing a single request and returning a result, your GPU is allocated to a **persistent, continuous stream** — receiving live video frames, running inference on each frame, and returning the transformed stream in real time.

Cascade is the strategic name for Livepeer's real-time AI vision, first articulated in late 2024. The underlying technical implementation is [ComfyStream](https://github.com/livepeer/comfystream) — an open-source project that runs ComfyUI as a backend inference engine and applies ComfyUI workflows to live video. Cascade Phase 1 shipped in December 2024; ComfyStream integrated with Livepeer network payments on 30 January 2025.

**From the orchestrator's perspective**, a real-time AI job is closer to a transcoding session than a batch inference request. A Gateway establishes a persistent connection to your node. Your ComfyStream instance holds a ComfyUI workflow in memory and processes each incoming video frame through it, returning the transformed frame before the next one arrives. The GPU remains allocated for the duration of the stream.

The gap between batch AI and real-time AI comes down to latency tolerance. Batch inference can take seconds or tens of seconds — that is acceptable for generating a still image. Real-time inference on a 30fps video stream must process each frame in roughly 33ms or less. This drives both the hardware requirements (faster GPUs, more VRAM for caching intermediate tensors) and the software architecture (ComfyUI's node graph stays compiled and warm rather than re-loading per request).

### Use cases

Real-time AI pipelines currently in use on the network include: live VTuber avatar generation, style transfer overlays on streams, real-time video agents, and AI-enhanced scene analysis for interactive applications.

### Hardware requirements

Requirements are model-dependent. The ComfyStream input nodes themselves use less than 500MB of VRAM, but the AI models within the workflow dominate the budget. A style transfer workflow using a lightweight one-step UNet requires significantly less VRAM than one using a full SDXL model. As a practical baseline:

- **Minimum:** 8GB VRAM for lightweight real-time workflows
- **Recommended:** 16–24GB VRAM for production-grade style transfer and avatar workflows

<Note>
Unlike batch AI, where you can accept or decline jobs by model, real-time AI pipelines are defined by ComfyUI workflows that you install and host. The VRAM budget depends on which workflows you choose to offer.
</Note>

### Pricing model

<!-- REVIEW: Cascade/ComfyStream pricing unit is not confirmed in official documentation. SME review needed before publication. Pricing may be per-session, per-stream-minute, or per-frame. Ask Peter (AI SPE) or post in #orchestrating. -->

### Configuration

Configured via `aiModels.json` and requires a running ComfyStream instance. See [Set Up Real-time AI Pipelines](/v2/orchestrators/setup/comfystream) <!-- REVIEW: confirm target path --> for the setup guide.

---

## LLM Inference

The LLM pipeline allows orchestrators to serve large language model inference — text completion, chat, and instruction-following tasks. It was added as part of the LLM SPE initiative announced in Q3 2024.

Unlike the image and video pipelines, which use the standard `ai-runner` Docker image, **LLM inference requires a separate Ollama-based runner**. Ollama is an open-source inference runtime for language models. The Cloud SPE built and maintains a custom `livepeer-ollama-runner` that wraps Ollama in a Livepeer-compatible HTTP interface.

**From the orchestrator's perspective**, an LLM job arrives the same way as any batch AI job — as an HTTP request from a Gateway. Your orchestrator routes it to the Ollama runner container, which generates the text response and returns it. The session ends once the response is complete (streaming responses follow the same model but return tokens progressively).

A key practical difference from image pipelines: quantised LLMs (e.g., 4-bit quantised 7B models) fit into 8GB of VRAM and run efficiently, which means orchestrators with older consumer GPUs can participate in the AI subnet through LLM inference even if they cannot run the diffusion-based image pipelines.

### Current supported models

Models are loaded and managed by Ollama using its standard naming convention. Any model available via `ollama pull` can theoretically be served. Confirmed tested on the Livepeer network:

- `meta-llama/Meta-Llama-3.1-8B-Instruct` (Ollama: `llama3.1:8b`)

<!-- REVIEW: full supported model list — check go-livepeer LLM pipeline docs or Cloud SPE guide for updated list -->

### Hardware requirements

| Setup | Min VRAM | Notes |
|---|---|---|
| 7–8B quantised model (Q4) | 8GB | Cloud SPE Ollama runner; GTX 1080, 2060 class |
| 13B quantised model (Q4) | 16GB | |
| 70B quantised model (Q4) | 40GB+ | Data-centre class only |

<Note>
The official Livepeer AI Subnet documentation recommends 16GB VRAM for most AI pipelines. The LLM pipeline is the main exception: the Cloud SPE Ollama runner enables 7–8B models to run on 8GB cards. Official minimum spec applies to the diffusion-based pipelines.
</Note>

### Pricing model

LLM pricing is configured in `aiModels.json` using a `pixels_per_unit` abstraction where one unit equals one million tokens (or a comparable token batch). Example configuration:

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

[//]: # (REVIEW: confirm canonical pricing unit for LLM — is this per-token, per-request, or per-million-tokens? Check Cloud SPE documentation and go-livepeer source)

### Configuration

Requires deploying the Ollama runner container alongside your orchestrator. Configured via `aiModels.json` with `"pipeline": "llm"`. See [Set Up the LLM Pipeline](/v2/orchestrators/setup/llm-pipeline) [//]: # (REVIEW: confirm target path) for the deployment guide.

---

## Choosing Your Setup

The job types you can run depend on your hardware and what you want to optimise for.

| Your situation | Recommended starting point |
|---|---|
| Consumer GPU (8–12GB VRAM), want passive income | Transcoding + LLM inference (Ollama runner) |
| Consumer GPU (16GB VRAM), want to enter AI | Transcoding + batch AI (image-to-text, audio-to-text, segment-anything-2) |
| High-VRAM GPU (24GB+), want to run diffusion models | Transcoding + full batch AI suite (text-to-image, image-to-image, image-to-video) |
| GPU already running transcoding, want to add AI | See the AI setup guide to add pipelines to your existing node |
| Dedicated AI inference, real-time video | Batch AI + real-time AI (ComfyStream); 16–24GB VRAM recommended |
| ML workstation, new to Livepeer | Start with batch AI; add Cascade once batch inference is running |

<CardGroup>
  <Card
    title="Choose your setup path"
    icon="map"
    href="/v2/orchestrators/get-started/setup-paths"
  >
    Pick the right installation path for your hardware and goals.
  </Card>
  <Card
    title="Add AI to your node"
    icon="cpu"
    href="/v2/orchestrators/get-started/AI-prompt-start"
  >
    Configure AI pipelines on an existing orchestrator.
  </Card>
</CardGroup>
```

---

## Part 3 — Outstanding Items Before Publication

1. **VRAM for `image-to-video`, `upscale`, `text-to-speech`** — fetch those three pipeline pages directly and fill in the REVIEW placeholders
2. **Cascade/ComfyStream pricing unit** — ask Peter (AI SPE Lead) or post in `#orchestrating`; this cannot be sourced from existing documentation
3. **LLM pricing unit clarification** — confirm whether `pixels_per_unit: 1000000` in aiModels.json means per-million-tokens or is a different unit
4. **CardGroup link targets** — `setup-paths.mdx` and `AI-prompt-start.mdx` are both listed as to-be-created in the IA; confirm final paths before publication
5. **`/v2/orchestrators/setup/ai-config` and `/v2/orchestrators/setup/llm-pipeline`** — these are target links from this page; confirm they are being created as part of Phase 1 content work
6. **YouTube demo search** — find an embeddable Cascade/ComfyStream demo video for the Real-time AI section; search `livepeer Cascade demo` and `livepeer comfystream demo` on YouTube
7. **NVENC/NVDEC minimum driver version** — not confirmed in this research pass; check go-livepeer README before publishing the transcoding section
