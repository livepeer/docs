# Brief 06 — Research Report
## AI Model Support
**Target page:** `v2/developers/build/model-support.mdx`  
**Date:** March 2026

---

## Research Log

| Pipeline type | Source | VRAM confirmed | Status confirmed | Notes |
|--------------|--------|----------------|-----------------|-------|
| text-to-image | docs.livepeer.org/ai/pipelines/text-to-image | ✅ 24GB | Beta (warm model served) | Warm model: SG161222/RealVisXL_V4.0_Lightning. SDXL-based. |
| image-to-image | docs.livepeer.org/ai/pipelines/image-to-image | ✅ 20GB | Beta (warm model served) | Warm model: timbrooks/instruct-pix2pix. Diffusers pipeline. |
| image-to-text | docs.livepeer.org/ai/pipelines/image-to-text | ✅ 4GB | Beta (warm model served) | Warm model: Salesforce/blip-image-captioning-large. |
| image-to-video | Live docs nav confirmed; VRAM not retrieved | ❌ REVIEW | Beta | Warm model: stabilityai/stable-video-diffusion-img2vid-xt. SVD-XT runs on A100 80GB per HF card; with optimizations community reports 16-24GB. Cannot confirm Livepeer's published VRAM req without reading pipeline page. |
| audio-to-text | docs.livepeer.org/ai/pipelines/audio-to-text | ✅ 12GB | Beta (warm model served) | Warm model: openai/whisper-large-v3. Outputs chunked text with timestamps. |
| text-to-speech | docs.livepeer.org/ai/pipelines/text-to-speech | ✅ 12GB | Beta | "Pipeline-specific AI Runner container required." No confirmed warm model from search. |
| segment-anything-2 | docs.livepeer.org/ai/pipelines/segment-anything-2 | ✅ 6GB | Beta | Current version: image segmentation only. Video tracking forthcoming. Warm: facebook/sam2-hiera-large. |
| upscale | docs.livepeer.org/ai/pipelines/upscale | ✅ 24GB | Beta (warm model served) | Warm model: stabilityai/stable-diffusion-x4-upscaler. 4× upscale factor. |
| LLM / text generation | Cloud SPE blog post (livepeer.cloud), live docs nav | ✅ 8GB minimum | Beta | Ollama-based. OpenAI-compatible API. Confirmed working: meta-llama/Meta-Llama-3.1-8B-Instruct (Ollama name: llama3.1:8b). Runs on GPUs as low as 8GB. Cloud SPE purpose-built runner image: tztcloud/livepeer-ollama-runner. |
| live-video-to-video (Cascade) | go-livepeer CHANGELOG, Phase 4 retrospective | ❌ REVIEW | Beta (streaming path in main) | ComfyStream/StreamDiffusion models. VRAM depends on workflow. Not a fixed minimum from a single Livepeer source. |
| BYOC | Phase 4 retrospective, pytrickle README | N/A — model-agnostic | Beta (hardened Phase 4) | Any model the developer supplies in their container. PyTrickle integration layer. |

---

## Pipeline List — Canonical Source

The canonical pipeline list was retrieved from the live docs nav at `docs.livepeer.org/ai/pipelines/`:

```
Audio-to-Text
Image-to-Image
Image-to-Text
Image-to-Video
LLM
Segment-Anything-2
Text-to-Image
Text-to-Speech
Upscale
```

Plus real-time (not in the above nav):
- live-video-to-video (Cascade) — served via go-livepeer, not ai-runner REST
- BYOC — via PyTrickle

This is **10 pipeline types total** (9 batch/AI + 1 real-time + BYOC as meta-category).

---

## Status Assessment

The live docs site still uses Beta labelling for the entire AI network. The Phase 4 retrospective (January 2026) confirms that BYOC and live-video-to-video have been hardened to production-grade, but the published docs have not been updated to reflect this. Until this is formally updated by the Foundation:

- All batch AI pipelines: **Beta** (per published docs)
- live-video-to-video: **Beta** (technically production-ready per Phase 4, docs not updated)
- BYOC: **Beta** (technically production-ready per Phase 4)

For the reference page, use the status as-published with a note that Phase 4 hardened the real-time path.

---

## Existing Page Assessment

The existing `ai-pipelines/model-support.mdx` (outdated stub) covers only:
- text-to-image ✓ (VRAM needs verification against new 24GB figure)
- image-to-image ✓ (VRAM needs updating to 20GB)
- image-to-video ✓ (VRAM unconfirmed — was listed as 80GB in old content; needs Livepeer source)
- upscale ✓ (VRAM needs update to 24GB)

Missing entirely from existing page:
- audio-to-text (12GB, Whisper)
- image-to-text (4GB, BLIP)
- text-to-speech (12GB)
- segment-anything-2 (6GB, SAM2)
- LLM (8GB, Ollama)
- live-video-to-video (REVIEW)
- BYOC (model-agnostic)

---

## Key Finding — LLM Pipeline

The LLM pipeline is purpose-built for GPUs that are too small for diffusion models. The Cloud SPE Ollama-based runner is the canonical implementation. Min VRAM is 8GB — specifically designed for legacy transcoding GPUs (GTX 1080, 1070 Ti, 2060 etc.) that would otherwise sit idle. This is a significant developer-facing fact: the LLM pipeline is the entry point for operators with smaller GPUs, not just a feature for high-end nodes.

---

## Missing VRAM — Items Requiring SME Confirmation

1. **image-to-video**: Need the published VRAM requirement from `docs.livepeer.org/ai/pipelines/image-to-video`. Page was not accessible from search results. Best available signal is community reports of SVD-XT running on 16-24GB with optimization; the HF model card notes an A100 80GB was used for benchmarking. Rick or the orchestrator docs should have the Livepeer-published figure.
2. **live-video-to-video**: VRAM depends on workflow. The reference page will note this is variable and link to `build/comfystream.mdx` for benchmarks.
3. **text-to-speech warm model**: Not confirmed from search. Likely `suno/bark` or `coqui/XTTS` based on Diffusers text-to-speech pipeline conventions — needs verification.
