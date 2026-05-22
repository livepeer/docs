# Brief 02 — Research Report
## AI on Livepeer
**Target page:** `v2/developers/concepts/ai-on-livepeer.mdx`  
**Researcher:** Claude Sonnet 4.6  
**Date:** March 2026

---

## Research Log

| Q# | Source | Finding | Conflicts / Gaps |
|----|--------|---------|-----------------|
| 1 — pipeline types | docs.livepeer.org/ai/pipelines nav sidebar | Canonical list confirmed from live docs nav: **audio-to-text**, **image-to-image**, **image-to-text**, **image-to-video**, **LLM**, **segment-anything-2**, **text-to-image**, **text-to-speech**, **upscale** — 9 pipeline types total. LLM is listed as a peer of the others, not as a separate category in the nav. | Live docs site returns 404 for /ai/pipelines/overview but individual pipeline pages resolve. Sidebar navigation captured from text-to-image and image-to-text pages gives the full list. |
| 1 — pipeline types | github.com/livepeer/ai-runner | Repo description: "Inference runtime for running **different batch and real-time** AI pipelines." Confirms the batch/real-time distinction is canonical at the code level. Repo contains a `/live` directory alongside `/runner`, indicating real-time pipelines have a separate code path from batch. Model checkpoints script (`dl_checkpoints.sh`) downloads `meta-llama/Meta-Llama-3.1-8B-Instruct` as an LLM model. | Full pipeline directory listing not accessible — domain restriction. |
| 2 — Cascade | blog.livepeer.org/introducing-livepeer-cascade (Feb 2025), Messari Q1 2025 | "Cascade" is the **strategic vision name** for Livepeer's shift from batch transcoding to real-time AI video pipelines. It is not a product name or a single pipeline type. Messari Q1 2025: "Cascade marked a strategic shift from batch AI processing to real-time AI-powered video workflows, enabling applications such as automated video agents, VTuber overlays, live analytics, and AI-enhanced content generation." First introduced Q4 2024, matured Q1 2025. The specific protocol-level pipeline is `live-video-to-video` — this is the technical name used in go-livepeer. Cascade = the vision; live-video-to-video = the implementation. | Docs sometimes use "Cascade" and "live-video-to-video" interchangeably. For developer docs, `live-video-to-video` is the precise term; "Cascade" is contextual/strategic framing. |
| 3 — LLM pipeline | livepeer.cloud/self-hosting-livepeers-llm-pipeline (Nov 2025), go-livepeer CHANGELOG | LLM pipeline confirmed. It is **Ollama-based** with an **OpenAI-compatible API** format. go-livepeer CHANGELOG: "Updated AI llm pipeline to new OpenAI compatible API format." The Cloud SPE built a custom Ollama runner (`tztcloud/livepeer-ollama-runner:0.1.1`) optimised for GPUs as low as 8GB VRAM. The reference model is `meta-llama/Meta-Llama-3.1-8B-Instruct` (downloaded in ai-runner checkpoints). Orchestrators can verify the LLM pipeline is warm at `tools.livepeer.cloud/ai/network-capabilities`. | LLM pipeline's official beta/production status in go-livepeer main is not explicitly stated in public docs. Listed in the pipeline nav — treat as available but with verification note. REVIEW: confirm production status with Rick or Mehrdad. |
| 4 — batch vs real-time | go-livepeer CHANGELOG, ai-runner repo structure, docs.livepeer.org/ai/introduction | Key distinctions: **(a) Connection model** — batch jobs are single request → process → response. Real-time (`live-video-to-video`) uses a persistent stream connection with continuous frame-by-frame output. **(b) Billing** — go-livepeer CHANGELOG: "Payment 'per time' instead of 'pay per pixel'" added specifically for the live pipeline. **(c) Infrastructure** — real-time pipelines have a separate code path (`/live` dir in ai-runner). **(d) GPU** — real-time keeps the model warm and GPU dedicated for the duration of the stream; batch allows dynamic model loading between requests. | Messari confirms Cascade added "multi-container GPU orchestration" and "enhanced stream processing efficiency." Full technical diff requires reading ai-runner /live directory which was not accessible directly. |
| 5 — volume data | Messari Q3 2025 (cited in Nov 2025 Network Vision blog), Messari Q2 2025 | Nov 2025 blog: "over 72% of the fees now driven via AI inference" (Q3 2025), network fees up 3x YoY. Messari Q2 2025: AI workloads over 55% of total protocol fee revenue (up from 48% in Q1). No per-pipeline breakdown is publicly available in these reports — only aggregate AI vs transcoding split. ComfyStream confirmed as "foundational component" of AI video infrastructure from Q2 2025. | Messari Q3 2025 full report paywalled — detail on per-pipeline volume not confirmed. Do not make pipeline-specific volume claims. |
| 6 — VRAM requirements | docs.livepeer.org/ai/pipelines (individual pages), docs.livepeer.org/ai/introduction, livepeer.cloud LLM post | Per-pipeline VRAM from docs: text-to-image: 24GB recommended; image-to-text: 4GB minimum; LLM (Cloud SPE runner): 8GB minimum. Official docs: "High VRAM GPUs Required for Most Pipelines: Currently, Livepeer AI requires GPUs with at least 16GB of VRAM to run most AI inference tasks effectively." ComfyStream/real-time VRAM is higher than most batch pipelines (not confirmed to specific number). | Real-time (live-video-to-video) VRAM requirements not directly confirmed. REVIEW: check docs.comfystream.org for hardware requirements. |
| 7 — warm/cold loading | docs.livepeer.org/ai/introduction, docs.livepeer.org/ai/pipelines/overview (cached nav) | Confirmed: "Orchestrators keep frequently used models warm on GPUs, speeding up task processing" vs "dynamically load models on demand." During beta, Orchestrators are encouraged to keep one model per pipeline warm. Developer impact: if a model is not warm, first request will be slower while the Orchestrator loads it. This is a latency concern for batch pipelines — not relevant to real-time pipelines where the model must stay warm for the stream duration. | No SLA or time estimate for cold load time in public docs. Do not make specific latency claims. |
| 8 — live-video-to-video status | go-livepeer releases page | Confirmed in go-livepeer main/master branch. CHANGELOG references: "#3688 AI: options for /live/video-to-video update & status routes to support local browser tests" — live-video-to-video routes are in main. Earlier release notes: "adds the backbone for the Live Video AI feature." One release also confirms: "Optimized real-time AI stream handling, communication, payment logic, and error handling." | Exact go-livepeer release version it shipped in not confirmed. Treat as available in current main. REVIEW with Rick to confirm production stability vs beta. |
| Outdated content | docs.livepeer.org/ai/introduction | The intro page still says "Current offerings primarily utilize Diffusion models. Plans are in place to expand support to include other model types in future updates" — this is stale. LLM and segment-anything-2 are already live and listed in the pipeline nav. The statement is contradicted by the live pipeline listing. | This confirms the brief's framing: existing docs are outdated. The new page must not carry this language. |

---

## Additional Findings

### Canonical Pipeline Type Table

Confirmed from live docs pipeline navigation sidebar:

| Pipeline | Category | Description | Min VRAM |
|----------|----------|-------------|---------|
| text-to-image | Batch | Generate images from text prompts | 24GB (recommended) |
| image-to-image | Batch | Style transfer, enhancement, img2img | ~16GB |
| image-to-video | Batch | Animate images into video clips | ~16GB |
| image-to-text | Batch | Caption/describe images | 4GB |
| audio-to-text | Batch | Speech recognition (ASR) with timestamps | ~16GB |
| text-to-speech | Batch | Generate natural speech from text | ~16GB |
| upscale | Batch | Upscale images without distortion | ~16GB |
| segment-anything-2 | Batch | Visual segmentation for images and video | ~16GB |
| LLM | LLM (separate) | Text inference, OpenAI-compatible (Ollama) | 8GB+ |
| live-video-to-video | Real-time | Persistent stream: frame-by-frame AI transformation | High (TBC) |

**Note:** The live docs nav lists LLM as a peer pipeline to the batch pipelines — it is not grouped separately in the nav. However, its technical architecture (Ollama-based, text in/text out, different billing model) distinguishes it from the diffusion-based batch pipelines. The brief's proposed 3-category model (batch / real-time / LLM) is a valid conceptual grouping for documentation purposes, but it is not the current grouping used in the go-livepeer codebase or docs nav. **Recommend labelling as a developer-facing conceptual grouping with a note explaining the category scheme.**

### Cascade — Precise Terminology

- **Cascade** = strategic vision name (introduced Feb 2024 blog "Introducing Livepeer Cascade")
- **live-video-to-video** = the technical pipeline type in go-livepeer
- **ComfyStream** = the primary developer tool for building Cascade/real-time pipelines
- Usage in docs: prefer "real-time AI pipelines (live-video-to-video)" with "Cascade" as the strategic context term, not as a feature name developers invoke

### Batch vs Real-Time: Protocol-Level Distinction

| Dimension | Batch | Real-time (live-video-to-video) |
|-----------|-------|--------------------------------|
| Connection | Request/response | Persistent stream |
| Billing unit | Per pixel / per output | Per second of compute |
| GPU assignment | Dynamic (model loaded per request) | Dedicated for stream duration |
| Output | Single result returned | Continuous frame-by-frame output |
| Primary tool | AI Gateway API | ComfyStream |
| Latency requirement | Seconds acceptable | Sub-second required |

### LLM Pipeline — Key Facts

- Backend: Ollama (containerised)
- API compatibility: OpenAI Chat Completions format
- go-livepeer CHANGELOG: "Updated AI llm pipeline to new OpenAI compatible API format"
- Reference model in ai-runner checkpoints: `meta-llama/Meta-Llama-3.1-8B-Instruct`
- GPU requirement: 8GB+ (Cloud SPE runner), lower than most diffusion pipelines
- Enables: chatbots, agents, copilots, text/code completion on decentralised GPUs

---

## Open Questions for SME Review

1. **live-video-to-video production stability** — is it production-ready or still beta? go-livepeer CHANGELOG activity suggests it's in main but feature-incomplete (browser test support added recently). Confirm with Rick.
2. **LLM pipeline production status** — officially beta or production? Listed in nav but ai-runner still shows "Beta" warning. Confirm before claiming production-ready.
3. **Real-time VRAM requirements** — exact VRAM floor for ComfyStream/live-video-to-video not confirmed. Check docs.comfystream.org hardware section.
4. **Is "Cascade" used as a developer-facing term or only as a strategic/marketing term?** The dev docs should decide this before publication — current evidence suggests it is mostly a Foundation comms/blog term, not a technical term developers invoke in code.
5. **Per-pipeline volume data** — Messari public reports give only aggregate AI/transcoding split, not per-pipeline. Any internal data available from Peter/SPE leads for the concepts page context?

---

## Media Candidates

| Item | URL | Recommended use |
|------|-----|----------------|
| Messari Q1 2025 Livepeer report | messari.io/report/state-of-livepeer-q1-2025 | Cite as data source in research log; don't embed |
| Messari Q2 2025 Livepeer report | messari.io/report/state-of-livepeer-q2-2025 | Same |
| Introducing Livepeer Cascade blog | blog.livepeer.org/introducing-livepeer-cascade | Link as further reading from Real-time section |
| ComfyUI and Real-Time Video AI Processing | blog.livepeer.org/comfyui-and-real-time-video-ai-processing | Link from ComfyStream mention in real-time section |

**No embeddable diagram found** that clearly shows batch vs real-time pipeline flow. Recommend creating a simple ASCII or Mermaid diagram for this page — it would significantly aid comprehension.
