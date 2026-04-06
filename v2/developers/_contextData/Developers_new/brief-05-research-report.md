# Brief 05 — Research Report
## Build with ComfyStream + BYOC (Batched)
**Target pages:** `v2/developers/build/comfystream.mdx`, `v2/developers/build/byoc.mdx`  
**Date:** March 2026

---

## Research Log

| Item | Source | Finding | Conflicts / Notes |
|------|--------|---------|------------------|
| Phase 4 additions — ComfyStream | AI SPE Phase 4 retrospective (fetched in full) | 4 node sets added: StreamDiffusion + SDXL + TensorRT + LoRAs + ControlNets + IP-Adapters; StreamDiffusion V2 (V2V & I2I); SuperResolution (real-time upscaling); AudioTranscription + SRT (subtitles + text data-channel). 5 pipelines: StreamDiffusion, StreamDiffusion V2, real-time audio transcription (text data-channel), real-time audio transcription (SRT embedded), generative video via BYOC. | Confirmed production-ready in Phase 4 (Jan 2026). |
| Phase 4 additions — BYOC | AI SPE Phase 4 retrospective | BYOC streaming merged to go-livepeer main. BYOC batch path stable. PyTrickle emerged as the standalone integration layer. BYOC decoupled from ai-runner. Embody SPE running production BYOC workloads. Streamplace integration in staging. | Older ai-runner-based BYOC was tightly coupled — refactored in Phase 4. |
| ComfyStream / BYOC relationship | Phase 4 retrospective, pytrickle README | Two distinct systems: ComfyStream = ComfyUI custom node + WebRTC server (standalone or BYOC-backed). BYOC = permissionless container onboarding on Livepeer network. ComfyStream can run on BYOC stack via PyTrickle integration. | Not the same thing. ComfyStream is a tool; BYOC is a network-onboarding mechanism. |
| `live-video-to-video` pipeline state | go-livepeer CHANGELOG, Phase 4 retrospective | Confirmed merged to main. go-livepeer CHANGELOG shows `#3686 Add comfyui / streamdiffusion pipeline to current-live pipeline` and `#3705 AI/Live: segmented MediaWriter / MediaReader`. Phase 4 confirms BYOC streaming path also in main. | Production-ready. |
| All node types — livepeer/ComfyUI-Stream-Pack | github.com/livepeer/ComfyUI-Stream-Pack (fetched) | **CRITICAL DISCREPANCY:** The livepeer/ComfyUI-Stream-Pack README says "No Foundation Nodes have been added yet", "No Light Nodes have been added yet", "No additional Input/Output Nodes have been added yet." Only nodes documented are LoadTensor and LoadAudioTensor (linked to yondonfu/comfystream). | Phase 4 retrospective says 4 node sets were added. These must be in muxionlabs/comfystream or separate repos (pschroedl/ComfyUI-StreamDiffusion confirmed for StreamDiffusion nodes). livepeer/ComfyUI-Stream-Pack appears to be an architectural stub, not the actual node home. MUST flag with `[//]: # (REVIEW)`. |
| StreamDiffusion node source | `pschroedl/ComfyUI-StreamDiffusion` (search result) | Actual StreamDiffusion node repo: `pschroedl/ComfyUI-StreamDiffusion`. Contains: StreamDiffusionCheckpoint, StreamDiffusionConfig, StreamDiffusionSampler, StreamDiffusionLPCheckpointLoader, StreamDiffusionTensorRTEngineLoader. Works with ComfyUI and ComfyStream (workflow JSON format). TensorRT not fully supported with ComfyUI-SAM2-Realtime. | This is the community/SPE-published node, not in livepeer org. Phase 4 says "ported from Livepeer INCs Daydream StreamDiffusion pipeline." |
| RealtimeNodes (motion, controls) | `ryanontheinside/ComfyUI_RealtimeNodes` (search result) | Real-time control nodes for ComfyStream: FloatControl, IntControl, StringControl, FloatSequence, IntSequence. Motion detection, object/face/pose detection (in progress). These update on each workflow execution — designed specifically for real-time. | Community repo, not in livepeer org. Confirmed works with ComfyStream. |
| Custom workflow format | yondonfu README, pschroedl README | Workflows must be in ComfyUI API format (JSON, not ComfyUI UI format). UI format contains layout information that ComfyStream does not recognise. Use ComfyUI "Save (API Format)" export. | Confirmed in both original comfystream and pschroedl fork. |
| Data-channel output | Phase 4 retrospective | Confirmed production: `AudioTranscription + SRT` can output transcript text only via dedicated data output custom node. The data-channel also carries structured text alongside video. | Phase 4: "one data-channel–enabled model (real-time audio transcription) was delivered." Text output alongside video is the production pattern. |
| Performance tuning | blog post (Jan 2025), yondonfu gist, pschroedl README | TensorRT compilation on first run (2–5 mins). `torch.compile` used for ControlNet and VAE. One-step distilled UNet for faster generation. Benchmark: ~14fps on RTX 4090 for SD1.5 + DMD + DepthControlNet. StreamDiffusion provides further speedups when step count &gt; 1. | No official configuration params table found. [//]: # (REVIEW: Official performance params with defaults needed from docs.comfystream.org) |
| BYOC container spec (ai-runner path) | ai-runner README (fetched), ai-runner /docs directory observed | ai-runner README references `docs/custom-pipeline.md` but this was not publicly accessible. ai-runner architecture: FastAPI routes in `src/runner/routes`, pipelines in `src/runner/pipelines`. REST API exposed via `openapi.yaml`. | **BLOCKER:** Cannot confirm exact api-runner BYOC endpoint contract without reading docs/custom-pipeline.md or the runner source. Must mark all ai-runner spec claims with `[//]: # (REVIEW)`. |
| BYOC container spec (PyTrickle path) | github.com/livepeer/pytrickle (fetched in full) | **FULLY DOCUMENTED.** PyTrickle is the production BYOC integration layer after Phase 4. FrameProcessor pattern + StreamServer. REST API: `POST /api/stream/start` (subscribe_url, publish_url, gateway_request_id, params), `POST /api/stream/params`, `GET /api/stream/status`, `POST /api/stream/stop`. StreamServer takes: frame_processor, port (default 8000), capability_name. | This is the current production-grade path per Phase 4 retrospective. The ai-runner custom pipeline path may be deprecated or supplementary. |
| BYOC TypeScript SDK | Phase 4 retrospective | `@muxionlabs/byoc-sdk` on npm. Client-side WebRTC streaming to Livepeer gateway without custom backend. Provides WebRTC streaming, data-channel support, device management, React hooks, connection utilities. | Useful for build/byoc as "what builds on top of your BYOC worker". |
| BYOC deployment / orchestrator config | Phase 4 retrospective, Messari Q2 2025 | BYOC formally launched June 30, 2025. Orchestrators run BYOC workloads. "Over a dozen orchestrators have run BYOC-backed workloads." Embody SPE is production example. Full orchestrator onboarding still in progress (Phase 4 deferred scope). | Exact go-livepeer orchestrator config flags for BYOC not confirmed. Must `[//]: # (REVIEW)`. |
| BYOC base image | ai-runner README, ai-runner CHANGELOG | ai-runner is the base Python application. `livepeer/ai-runner:live-app-comfyui` tag used for live pipeline. For PyTrickle-based BYOC: no specific base image required — developer brings their own Python image. | Two base paths: ai-runner-based (predates PyTrickle) and PyTrickle-based (post-Phase 4). |
| Existing stub pages | Brief states they are outdated stubs | Brief instructs: treat existing stubs as pre-Phase 4, verify all claims. Content known to be outdated. | No additional check needed — brief guidance is sufficient. |
| Media — YouTube | Search | No dedicated build-with-ComfyStream or BYOC tutorial video found. Encode Club bootcamp covers ComfyStream but has no public video URL. blog.livepeer.org ComfyStream demo video (5:05) is best available. | Same candidate as Brief 04. |

---

## Architecture Notes

### ComfyStream data flow

```
WebRTC Input (browser/webcam)
  → ComfyStream server (WebRTC → tensor)
  → ComfyUI workflow execution (custom nodes, models)
  → ComfyStream server (tensor → WebRTC)
  → WebRTC Output (browser)
```

For BYOC-backed ComfyStream:
```
Livepeer Gateway
  → go-livepeer (BYOC worker)
  → PyTrickle StreamServer (trickle protocol)
  → FrameProcessor (ComfyStream or custom)
  → PyTrickle StreamServer
  → go-livepeer
  → Livepeer Gateway
```

### PyTrickle REST API (confirmed from README)

| Endpoint | Method | Body | Purpose |
|----------|--------|------|---------|
| `/api/stream/start` | POST | `{subscribe_url, publish_url, gateway_request_id, params}` | Start processing a stream |
| `/api/stream/params` | POST | `{key: value, ...}` | Update parameters mid-stream |
| `/api/stream/status` | GET | — | Check processor status |
| `/api/stream/stop` | POST | — | Stop processing |

Default port: `8000`. `capability_name` in StreamServer registers the capability with the network.

---

## Open Questions for SME Review

1. **Node locations:** The `livepeer/ComfyUI-Stream-Pack` README shows no nodes added. Where are the Phase 4 StreamDiffusion, SuperResolution, and AudioTranscription nodes actually located? (`muxionlabs/comfystream`? `pschroedl/ComfyUI-StreamDiffusion`?) This is the most important gap for `build/comfystream.mdx`. (Rick / _ptr)
2. **ai-runner BYOC container spec:** What does `docs/custom-pipeline.md` say? Is this the spec for ai-runner-based BYOC, or has PyTrickle replaced it? (Rick)
3. **Performance tuning parameters:** What are the official configurable parameters in ComfyStream server (buffer size, frame rate cap, warm-up mode)? These are referenced in Phase 4 ("dynamic warmup") but not documented with exact config keys. (Rick / docs.comfystream.org)
4. **Orchestrator BYOC config:** What go-livepeer flags does an orchestrator set to accept BYOC jobs? (Rick / go-livepeer CLI reference)
5. **BYOC primary path:** Is PyTrickle now the canonical BYOC path, or does the ai-runner custom pipeline path still coexist? (Peter / Rick)
6. **`capability_name`:** What string does a developer use for `capability_name` in StreamServer for the standard Livepeer live-video-to-video pipeline? Is this configurable or must it match a known value? (Rick / PyTrickle docs)
