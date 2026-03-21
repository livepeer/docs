# Brief 04 — Research Report
## Quickstart: ComfyStream on Livepeer
**Target page:** `v2/developers/get-started/comfystream-quickstart.mdx`  
**Date:** March 2026

---

## Research Log

| Q# | Source | Finding | Conflicts / Notes |
|----|--------|---------|-----------------|
| 1 — Deployment options | `github.com/livepeer/comfystream` README (fetched) | Four officially supported paths: (a) Docker image `livepeer/comfystream`, (b) RunPod template `livepeer-comfystream`, (c) Tensordock via python script (`scripts/README.md`), (d) Local install via Miniconda + pip. Docker is the recommended entry point; canonical install docs at `docs.comfystream.org/technical/get-started/install`. DevContainer path also available for VS Code users. | RunPod is fastest for no-local-GPU path. Docker is recommended for cloud/server. |
| 2 — Docker image | `github.com/livepeer/comfystream` README + Docker Hub confirmed | Docker image: `livepeer/comfystream`. No specific tag confirmed from search — `latest` assumed. [//]: # (REVIEW: verify current tag from Docker Hub / repo) | Tag not pinned in publicly accessible README snippet. |
| 3 — RunPod template | README + RunPod marketplace | Template confirmed: `livepeer-comfystream`. Direct deploy URL: `https://runpod.io/console/deploy?template=w01m180vxx&ref=u8tlskew`. Template name and URL sourced from README. | Confirmed in upstream yondonfu README too. |
| 4 — GPU VRAM minimum | README, hacker program reports, blog post | No explicit minimum stated in visible README sections. Blog post (Jan 2025) references TensorRT optimizations implying RTX-class GPU. Hacker program participant report: SD 1.5 workflow still hit FPS issues, Flux was too heavy. ai-runner default doc suggests 16 GB VRAM for AI pipelines. RunPod path sidesteps local GPU requirement. [//]: # (REVIEW: Verify explicit minimum VRAM from docs.comfystream.org hardware section or Rick.) | Unclear from available sources. Do not hardcode a number without verification. |
| 5 — Livepeer network connection | Phase 4 retrospective (fetched), go-livepeer CHANGELOG, ai-runner README | **CRITICAL FINDING — see OQ-D1 section below.** Two distinct connection models exist: (a) standalone developer path (no Livepeer network connection required), (b) BYOC worker path (registers as orchestrator via go-livepeer). PyTrickle is the integration layer for (b). | This distinction fundamentally changes the page scope. |
| 6 — Phase 4 pipeline types | Phase 4 retrospective (fetched in full) | Live, not future: StreamDiffusion, StreamDiffusion V2, SuperResolution (real-time upscaling), AudioTranscription + SRT subtitles, text-only data-channel output, Video understanding (Gemma BYOC). Five ComfyStream-enabled pipelines shipped in Phase 4. | All confirmed as delivered in Phase 4 (Jan 2026). Not future work. |
| 7 — streamdiffusion node | Phase 4 retrospective, go-livepeer CHANGELOG (#3686: "Add comfyui / streamdiffusion pipeline to current-live pipeline") | StreamDiffusion is the primary real-time image-to-image node — confirmed in both go-livepeer CHANGELOG and Phase 4. Ported from Livepeer Inc's Daydream StreamDiffusion pipeline. Supports LoRAs, ControlNets, IP-Adapters, TensorRT optimisation. | Primary node for VTuber/live style transfer use cases. |
| 8 — Audio pipeline (Phase 4) | Phase 4 retrospective | Real-time audio transcription + SRT subtitles shipped in Phase 4. Two output modes: text via data-channel, or SRT embedded in video segments. Whisper-based. Confirmed delivered, not experimental. | Phase 4 confirmed these as production-ready. |
| 9 — Starter workflow | ComfyStream README, emmajane1313/iso_mix (Hacker Program), blog post | Repo has a `workflows/` directory. Hacker Program participant referenced `ComfyStream/workflows/isomix_workflow.json` as an example. Blog post shows Clown Transformation and Bruce Banner Cam workflows with step structures. README mentions `example.py`. For a quickstart, the starter workflow should use SD 1.5 (lightest viable model). [//]: # (REVIEW: Confirm the specific starter workflow JSON path in the repo that is officially recommended — check `workflows/` dir or `docs.comfystream.org` for the recommended beginner workflow.) | Do not include a workflow JSON directly in the MDX without confirming it is current and maintained. Reference the workflow location instead. |
| 10 — Success state / UI | README, blog post (fetched), Encode Club bootcamp description | Success state: ComfyStream WebRTC UI opens in browser (`http://localhost:8188` or remote server URL). Webcam stream appears; AI effect applied in near-real-time. First run includes TensorRT compilation overhead; subsequent runs are faster. Encode Club bootcamp confirms: "SD1.5 workflow running in ComfyStream" as the success milestone. | WebRTC browser UI is the visible success indicator. |
| Pain points — Docker | README, community reports | UDP ports 1024–65535 required for WebRTC. Restrictive network environments need `--media-ports` flag. | Flag this in the prerequisites. |
| Pain points — RunPod | README snippet | RunPod template confirmed, standard RunPod GPU selection applies. No specific RunPod-unique errors found in available sources. | No finding beyond confirming template exists. |
| Pain points — connection | Phase 4 retrospective, hacker program reports | Main confusion: developers expect a Livepeer account requirement to run ComfyStream. Reality: standalone ComfyStream requires no Livepeer account. The Livepeer network connection is optional and is the BYOC path. This is the primary disambiguation this page must make. | See OQ-D1 below. |
| OQ-D1 scope decision | docs.comfystream.org (unreachable, 404), Phase 4 retrospective, README | See dedicated section below. | PARTIALLY RESOLVED — see below. |
| Media — YouTube | Search + blog fetch | No dedicated YouTube tutorial found. Best available: blog post video embed at `blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/` (5:05 demo, hosted on Livepeer Ghost CDN). Demo day recordings (Jan 31 2025) happened on Discord — no public YouTube URL confirmed. Encode Club bootcamp has curriculum but no public video URL found. | See media candidates section. |

---

## OQ-D1: Scope Boundary with docs.comfystream.org — RESOLUTION

**Question:** Does livepeer/docs own a full ComfyStream getting-started guide, or just integration steps linking to `docs.comfystream.org`?

**Finding:** `docs.comfystream.org` was unreachable (404/server error) during this research session. The canonical install docs URL is confirmed in the README (`https://docs.comfystream.org/technical/get-started/install`) but the site may be down or restructured (the README also references an older URL at `pipelines.livepeer.org/docs/...`).

**Critical scope distinction identified during research:**

ComfyStream has **two distinct connection modes** that affect page scope:

| Mode | Livepeer account required? | What it does |
|------|--------------------------|-------------|
| **Standalone** (local or RunPod) | ❌ No | ComfyStream runs as a self-contained WebRTC server + ComfyUI. Input: webcam or video feed. Output: AI-processed video in browser. No Livepeer network connection. |
| **BYOC worker** (orchestrator path) | ✅ Yes | ComfyStream registered as a go-livepeer BYOC worker. Serves live-video-to-video jobs from other applications via the Livepeer network. Requires go-livepeer, PyTrickle integration. |

**What Persona B2/C actually needs:** The standalone path. They want to build real-time AI effects. A Livepeer network connection is *optional* and is the advanced path (BYOC worker), not the quickstart path.

**Provisional scope decision:**

This quickstart should cover:
1. Getting ComfyStream running (Docker or RunPod — the two most accessible paths)
2. Loading a starter workflow and seeing a real-time AI effect on webcam input
3. Connecting to Livepeer: explain the two modes — standalone (no account) vs Daydream API or BYOC worker (for deploying on network)

The brief's success definition ("See a real-time AI effect applied to a live video feed") can be achieved in standalone mode. The "connect to Livepeer" section should be framed as "what comes next" rather than a prerequisite.

**⚠️ REVIEW REQUIRED:** Confirm with Peter (AI SPE Lead) / Rick whether:
- docs.comfystream.org is being maintained or superseded by livepeer/docs
- The standalone path is acceptable as the quickstart scope, or if there is a specific Livepeer network onboarding flow expected
- Whether the Livepeer community gateway (free) can be used as the entry point for the network connection step

---

## Architecture Notes (from Phase 4 + README)

**ComfyStream architecture:**
- ComfyStream = ComfyUI custom node package + WebRTC server + UI
- WebRTC server: `python server/app.py --workspace <COMFY_WORKSPACE>`
- Input: webcam via browser WebRTC, or video stream
- Output: AI-processed frames back to browser via WebRTC
- Models: ComfyUI workflows (JSON format) — same workflows used in regular ComfyUI, applied to video frames in real-time

**Livepeer integration layer (BYOC path):**
- PyTrickle: `github.com/livepeer/pytrickle` — Python package enabling ComfyStream to operate as a Livepeer AI worker outside the ai-runner path
- MuxionLabs (formerly AI SPE) has integrated PyTrickle into ComfyStream: `github.com/muxionlabs/comfystream`
- BYOC streaming merged into `go-livepeer` main branch in Phase 4
- For demand-side applications (devs calling live-video-to-video): connect to a gateway at the `/live/video-to-video` endpoint

---

## Media Candidates

| Asset | URL | Type | Recommended placement |
|-------|-----|------|----------------------|
| ComfyStream Demo Video (5:05) | `blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/` — video at page | MP4 on Livepeer CDN | After VERIFICATION section — shows expected success state. Only embeddable as a link since it's on Ghost CDN, not YouTube. |
| Encode Club Real-Time AI Bootcamp | `encode.club/real-time-video-ai-bootcamp` | External link | Could reference in NEXT STEPS as a learning resource. Not embeddable. |
| ComfyUI NYC Meetup (May 2025) — Daydream + ComfyStream demo | luma.com event description | External link reference only | Not embeddable, reference in prose if relevant. |

**Note:** No confirmed public YouTube embed found for ComfyStream quickstart content. The best visual reference is the blog post. Recommend: link to the blog post in a `<Note>` under the VERIFICATION section ("See what a running pipeline looks like →"). Do not embed video until a Mintlify-compatible YouTube URL is confirmed.

---

## Open Questions for SME Review

1. **OQ-D1:** Does the quickstart cover standalone ComfyStream only, or is there a specific Livepeer network onboarding step expected? (Peter / Rick)
2. **GPU VRAM minimum:** What is the explicit minimum VRAM for a working StreamDiffusion pipeline? RTX 3090 (24 GB)? RTX 3080 (10/12 GB)? (docs.comfystream.org / Rick)
3. **Docker tag:** What is the current `livepeer/comfystream` tag to recommend? `latest` only, or a pinned release? (Rick)
4. **Starter workflow:** Which workflow in the `workflows/` directory is the officially recommended beginner workflow? (Rick / ComfyStream maintainers)
5. **docs.comfystream.org status:** Is this site maintained, down, or being superseded? (Rick / Peter)
6. **Livepeer community gateway:** Can a developer connect their standalone ComfyStream to the Livepeer community gateway for free testing? If so, what is the endpoint? (Peter / Rick)
