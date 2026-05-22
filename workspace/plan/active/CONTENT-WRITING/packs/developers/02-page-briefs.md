# 02 — Per-Page Briefs (Developers Tab)

> Source: `attachments/content-scan.md` (1396 lines), `attachments/ia-design.md`, `attachments/content-canonical.md`. One block per nav page. Read your target block AND its prev/next. Code-language preference for `developer` and `builder` pages: **JS/TS first, then Python, then Go.** Always state required versions. Always link the GitHub source when the function exists in a repo.

**Enums used (canonical, locked):**
- PURPOSE (15): `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`
- PAGE_TYPE (7): `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`
- AUDIENCE: `developer` or `builder` (this tab only)

**Word budgets (default ranges; override per block):**

| PAGE_TYPE | Budget |
|---|---|
| `concept` | 250–450 |
| `instruction` | 400–700 |
| `guide` | 400–800 |
| `tutorial` | 500–900 |
| `reference` | 200–500 (excluding tables) |
| `resource` | 200–400 |
| `navigation` | 80–200 (cards + 1 short orienting paragraph) |

**Code language preference (when code is required):** JS/TS → Python → Go. Always include version, install command, and a GitHub link. Show the full request/response cycle, not just the call.

---

## HUB / START HERE

---

### `v2/developers/portal`

- **AUDIENCE:** builder
- **PERSONA:** all arriving — AI builder, video developer, OSS contributor, evaluator
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME (one sentence):** Reader picks the path that matches what they are building (AI batch, real-time AI, video, gateway, contribute) and lands on the right next page.
- **ARRIVING KNOWLEDGE:** Has heard of Livepeer; may not know it does AI as well as video.
- **ARRIVING QUESTION:** "Is Livepeer for what I'm building, and where do I go?"
- **PREV_PAGE:** Marketing site / search.
- **NEXT_PAGE:** `developer-journey` or directly `get-started/ai-quickstart` / `get-started/transcoding-quickstart`.
- **KEY FACTS (3–7):**
  1. Livepeer offers two integration tracks: AI inference (batch + real-time) and video (transcoding, streaming, VOD).
  2. AI is served via two gateways: Studio-hosted (`https://livepeer.studio/api/beta/generate`) and the free public gateway (`https://dream-gateway.livepeer.cloud`, not for production).
  3. Six section cards: Concepts, Get Started, Custom AI Workflows, Guides, Opportunities, Resources.
  4. Explicit "I am a…" routing: AI builder / video developer / OSS contributor / evaluator.
- **OUT OF SCOPE:** Concept depth (link to `concepts/`), API mechanics, code.
- **WORD BUDGET:** 80–200 (cards + one orienting paragraph).
- **CODE:** None on this page.
- **VERSIONS / SOURCES:** N/A — routing only.

---

### `v2/developers/developer-journey`

- **AUDIENCE:** builder
- **PERSONA:** Hackathon Participant, AI Application Builder, Video Transcoding Developer, OSS Contributor, Infrastructure Evaluator
- **PURPOSE:** `choose`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader picks one of five build tracks (video, AI on video, gateway, GPU compute, protocol extension) and reaches the first action for that track.
- **ARRIVING KNOWLEDGE:** Has read the portal or arrived directly via search.
- **ARRIVING QUESTION:** "Which Livepeer path fits what I want to build, and what do I do first?"
- **PREV_PAGE:** `portal`
- **NEXT_PAGE:** Quickstarts (`get-started/ai-quickstart`, `get-started/transcoding-quickstart`, `get-started/comfystream-quickstart`) or `concepts/developer-stack`.
- **KEY FACTS:**
  1. Three long-term archetypes: Workload Provider, Workload Consumer, Core Contributor.
  2. Five tracks each have a one-action first step.
  3. Default lifecycleStage is `discover` for explorers and `evaluate` for those who have a use case.
- **OUT OF SCOPE:** Detailed setup; pricing; SDK reference.
- **WORD BUDGET:** 400–700 (guide).
- **CODE:** None.
- **VERSIONS / SOURCES:** Page is current; mermaid diagram of three archetypes is live.

---

## CONCEPTS

---

### `v2/developers/concepts/developer-stack`

- **AUDIENCE:** builder
- **PERSONA:** Infrastructure Evaluator; AI Builder choosing between Studio / Gateway / BYOC
- **PURPOSE:** `explain`
- **PAGE_TYPE:** `concept`
- **OUTCOME:** Reader can place themselves on one of the five integration layers (Studio, Daydream, AI Gateway API, ComfyStream, Protocol) and identify trade-offs.
- **ARRIVING KNOWLEDGE:** Knows Livepeer is decentralised infrastructure; needs to map products to layers.
- **ARRIVING QUESTION:** "Where in the stack should I integrate?"
- **PREV_PAGE:** `developer-journey`
- **NEXT_PAGE:** `build/workload-fit` or relevant quickstart.
- **KEY FACTS:**
  1. Five integration layers with a comparison table.
  2. Studio and Daydream are managed (Solutions tab); AI Gateway API is direct; ComfyStream is real-time AI; Protocol layer is contributor-facing.
  3. AI inference does not use LPT staking or round-based rewards.
- **OUT OF SCOPE:** Code; pricing detail.
- **WORD BUDGET:** 350–500 (concept, table-heavy).
- **CODE:** None except endpoint references.
- **VERSIONS / SOURCES:** Studio API base `https://livepeer.studio/api/beta/generate`. Public gateway `https://dream-gateway.livepeer.cloud`. Verify decision table currency against `attachments/sources.md`.

---

### `v2/developers/concepts/ai-on-livepeer`

- **AUDIENCE:** builder
- **PERSONA:** AI Application Builder (primary), Infrastructure Evaluator
- **PURPOSE:** `explain`
- **PAGE_TYPE:** `concept`
- **OUTCOME:** Reader distinguishes the three AI categories (batch, real-time `live-video-to-video`, LLM) and identifies which serves their workload.
- **ARRIVING KNOWLEDGE:** Wants AI inference; may not know the difference between batch and real-time on this network.
- **ARRIVING QUESTION:** "What can I do with AI on Livepeer?"
- **PREV_PAGE:** `developer-stack`
- **NEXT_PAGE:** `build/workload-fit` or `get-started/ai-quickstart`.
- **KEY FACTS:**
  1. Nine batch pipelines: text-to-image, image-to-image, image-to-video, image-to-text, audio-to-text, text-to-speech, upscale, segment-anything-2, llm.
  2. Real-time `live-video-to-video` runs over the trickle protocol via WebRTC, served by ComfyStream — not REST-callable.
  3. LLM uses the OpenAI-compatible `/v1/chat/completions` shape via an Ollama-based runner.
  4. Warm models respond immediately; cold models incur 30 s to several minutes load time.
  5. AI inference pricing is orchestrator-set; text-to-image at approximately 1.9×10⁻⁸ USD per output pixel.
- **OUT OF SCOPE:** Per-pipeline parameters (link `build/model-support`).
- **WORD BUDGET:** 350–500.
- **CODE:** Endpoint table only; no full requests on this page.
- **VERSIONS / SOURCES:** ai-runner v0.14.1; go-livepeer v0.8.10. See `05-source-of-truth.md` §AI API surface.

---

### `v2/developers/concepts/video-on-livepeer` — STUB, P0

- **AUDIENCE:** builder
- **PERSONA:** Video Transcoding Developer (primary entry concept)
- **PURPOSE:** `explain`
- **PAGE_TYPE:** `concept`
- **OUTCOME:** Reader knows what Livepeer offers for video (transcoding, livestreaming, VOD, multistream), the access options (Studio managed vs self-hosted gateway), and the SDK / language support.
- **ARRIVING KNOWLEDGE:** Has an existing video / streaming app; wants to offload transcoding or add streaming.
- **ARRIVING QUESTION:** "What can Livepeer do for video, and how do I integrate?"
- **PREV_PAGE:** `developer-stack`
- **NEXT_PAGE:** `get-started/transcoding-quickstart`
- **KEY FACTS:**
  1. Video access: Studio API (managed) and self-hosted gateway (advanced).
  2. Studio surface: streams (create, ingest, playback), assets (upload, transcode, playback), webhooks, multistream targets, signing keys.
  3. SDKs: TypeScript/JS (`livepeer@3.5.0`), Python (`livepeer` PyPI), Go (`github.com/livepeer/livepeer-go`), React UI Kit (`@livepeer/react@4.3.2`).
  4. Auth: Bearer token from Studio dashboard; backend keys vs CORS-enabled keys.
  5. Pricing tiers: Free (1,000 transcoding min/mo, 30 concurrent viewers), Growth ($100/mo minimum, $0.33 / 60 min transcoding, 50K concurrent viewers), Enterprise ($2,500/mo annual commit).
  6. Differs from AI: synchronous transcoding, webhook-based events, HLS / WebRTC playback.
- **OUT OF SCOPE:** Per-guide instructions (livestream creation, access control). Migrate-from-v1 guides handle that.
- **WORD BUDGET:** 350–500.
- **CODE:** Endpoint table; one minimal SDK install line per language; no full request examples.
- **VERSIONS / SOURCES:** `livepeer` npm 3.5.0; `@livepeer/react` 4.3.2; `livepeer` PyPI 0.3.0; `github.com/livepeer/livepeer-go`. Pricing tiers from livepeer.studio/pricing — flag `[REVIEW: confirm pricing currency]` if writing exact numbers.

---

### `v2/developers/concepts/running-a-gateway`

- **AUDIENCE:** builder
- **PERSONA:** Developer evaluating Studio-hosted vs self-hosted gateway
- **PURPOSE:** `choose`
- **PAGE_TYPE:** `concept`
- **OUTCOME:** Reader decides whether to graduate from Studio to a self-hosted gateway and is handed off to the Gateways tab if yes.
- **ARRIVING KNOWLEDGE:** Has used Studio for AI or video; hitting cost-at-scale, custom-routing, or data-sovereignty limits.
- **ARRIVING QUESTION:** "Should I run my own gateway, and what does that take?"
- **PREV_PAGE:** `developer-stack` or `build/workload-fit`
- **NEXT_PAGE:** Gateways tab (handoff explicit) or back to a Studio guide.
- **KEY FACTS:**
  1. Hosted vs self-hosted comparison across cost, control, data, latency, and ops burden.
  2. AI gateway runs off-chain payments by default; video gateway runs on-chain with ETH deposit.
  3. Self-hosting requires: ETH deposit (video), `go-livepeer` node, infrastructure, monitoring stack.
- **OUT OF SCOPE:** Gateway setup steps (Gateways tab owns).
- **WORD BUDGET:** 300–450.
- **CODE:** None.
- **VERSIONS / SOURCES:** go-livepeer v0.8.10. Cross-link `v2/gateways/setup/` for the actual setup.

---

### `v2/developers/concepts/oss-stack`

- **AUDIENCE:** developer
- **PERSONA:** OSS Protocol Contributor
- **PURPOSE:** `explain`
- **PAGE_TYPE:** `concept`
- **OUTCOME:** Reader can name the seven core repos, their language, role, and where to start contributing.
- **ARRIVING KNOWLEDGE:** Engineer wanting to contribute; familiar with Go or Python.
- **ARRIVING QUESTION:** "What is the Livepeer codebase, and where do I plug in?"
- **PREV_PAGE:** `developer-journey`
- **NEXT_PAGE:** `get-started/contributor-quickstart` or `guides/contribution-guide`.
- **KEY FACTS:**
  1. Seven repos: `livepeer/go-livepeer` (Go, 582 stars, v0.8.10), `livepeer/protocol` (Solidity, 153 stars), `livepeer/lpms` (Go, 283 stars), `livepeer/ai-runner` (Python, 24 stars, v0.14.1), `livepeer/comfystream` (Python), `livepeer/pytrickle` (Python, 3 stars), `livepeer/ui-kit` (TS, 71 stars).
  2. PyTrickle is the bridge between custom AI containers and the Livepeer trickle streaming protocol.
  3. Protocol contracts deploy to Arbitrum (mainnet) and Arbitrum Sepolia (testnet).
- **OUT OF SCOPE:** PR mechanics (link `guides/contribution-guide`).
- **WORD BUDGET:** 350–500.
- **CODE:** Repo URLs; one CLI per repo if helpful (`git clone …`).
- **VERSIONS / SOURCES:** See `05-source-of-truth.md` §Repositories.

---

## GET STARTED

---

### `v2/developers/get-started/setup-paths` — STUB, P0

- **AUDIENCE:** builder
- **PERSONA:** All arriving — pre-quickstart router
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME:** Reader picks the right quickstart in under 30 seconds.
- **ARRIVING KNOWLEDGE:** Wants to start; not yet sure which track.
- **ARRIVING QUESTION:** "Which quickstart do I run?"
- **PREV_PAGE:** `portal` or `developer-journey`
- **NEXT_PAGE:** One of the four quickstarts.
- **KEY FACTS (the four paths):**
  1. **Call AI from my app (batch)** → `ai-quickstart`. 5 minutes, no GPU, curl or SDK.
  2. **Build real-time AI video (ComfyStream)** → `comfystream-quickstart`. Requires ComfyUI + NVIDIA GPU (RTX 3090+).
  3. **Transcode or stream video** → `transcoding-quickstart`. Studio API; SDKs in TS, Python, Go.
  4. **Contribute to the protocol** → `contributor-quickstart`. Go 1.21+, Docker, git.
- **OUT OF SCOPE:** Concept depth.
- **WORD BUDGET:** 80–200.
- **CODE:** None on the page itself; bullets per path may include the curl one-liner from the relevant quickstart.
- **VERSIONS / SOURCES:** Cross-reference each quickstart's prerequisites.

---

### `v2/developers/get-started/video-quickstart` — STUB, RESOLVE

- **AUDIENCE:** builder
- **PERSONA:** Video developer arriving via "video" entry
- **PURPOSE:** `start`
- **PAGE_TYPE:** `instruction` (with `pageVariant: quickstart`)
- **OUTCOME:** Either redirected to `transcoding-quickstart` (recommended) OR has created a Studio asset (if scope split is approved).
- **ARRIVING QUESTION:** "How do I start with video on Livepeer?"
- **PREV_PAGE:** `setup-paths`
- **NEXT_PAGE:** `transcoding-quickstart` (until split is approved).
- **NOTES:** This stub overlaps with `transcoding-quickstart`. IA recommendation: redirect this path to `transcoding-quickstart` and remove from nav. **Treat as PENDING DECISION.** Do not write competing content. If WRITE mode is forced, output a 2-line redirect block to `transcoding-quickstart` and flag for nav cleanup.
- **WORD BUDGET:** 80–150 (redirect stub).

---

### `v2/developers/get-started/transcoding-quickstart`

- **AUDIENCE:** builder
- **PERSONA:** Video Transcoding Developer
- **PURPOSE:** `start`
- **PAGE_TYPE:** `instruction` (`pageVariant: quickstart`)
- **OUTCOME:** Reader submits a Studio Transcode job, polls task status, verifies completion.
- **ARRIVING KNOWLEDGE:** Has a Studio API key; familiar with REST.
- **ARRIVING QUESTION:** "How do I make my first transcoding call?"
- **PREV_PAGE:** `setup-paths`
- **NEXT_PAGE:** `guides/video/create-livestream` or `guides/video/access-control` (both pending v1 migration).
- **KEY FACTS:**
  1. Base URL: `https://livepeer.studio` Auth: `Authorization: Bearer <STUDIO_API_KEY>`.
  2. Submit transcode job → capture task ID → poll task status → verify outputs.
  3. Common failures: `401 Unauthorized` (bad key), `422 Validation Error` (bad request body), task `failed`.
- **OUT OF SCOPE:** Streaming, playback, webhooks (separate guides).
- **WORD BUDGET:** 500–700.
- **CODE:** curl request example with a JSON body; SDK call in `livepeer@3.5.0` (TS); same in `livepeer` (Python). Include the response shape and one error case.
- **VERSIONS / SOURCES:** `livepeer@3.5.0`, `livepeer` PyPI 0.3.0. **`[REVIEW: TD signoff (Rick) pending]`**.

---

### `v2/developers/get-started/ai-quickstart`

- **AUDIENCE:** builder
- **PERSONA:** AI Application Builder, Hackathon Participant
- **PURPOSE:** `start`
- **PAGE_TYPE:** `instruction` (`pageVariant: quickstart`)
- **OUTCOME:** Reader sends a first AI inference job (`text-to-image`) through the gateway and reads the response.
- **ARRIVING KNOWLEDGE:** Has a Studio API key.
- **ARRIVING QUESTION:** "How do I make my first AI call?"
- **PREV_PAGE:** `setup-paths` or directly from `concepts/ai-on-livepeer`.
- **NEXT_PAGE:** `build/workload-fit`, `build/model-support`, or `build/byoc`.
- **KEY FACTS:**
  1. Base URL: `https://livepeer.studio/api/beta/generate`. Auth: `Authorization: Bearer <STUDIO_API_KEY>`.
  2. `POST /text-to-image` with JSON body (prompt, model_id, width, height, optional negative_prompt).
  3. Response: `ImageResponse` with `images[].url` and `images[].seed`.
  4. Errors: `401`, `422`, `500`, cold-model timeout (30 s to several minutes).
- **OUT OF SCOPE:** Other pipelines (link `build/model-support`).
- **WORD BUDGET:** 500–700.
- **CODE:** curl one-liner; TS via `livepeer@3.5.0` `livepeer.generate.textToImage(...)`; Python via `livepeer` PyPI `client.generate.text_to_image(...)`. Show the full response and one error path.
- **VERSIONS / SOURCES:** ai-runner v0.14.1; `livepeer@3.5.0`. **`[REVIEW: default model_id pending stakeholder signoff]`** — current placeholder is `SG161222/RealVisXL_V4.0_Lightning`.

---

### `v2/developers/get-started/comfystream-quickstart`

- **AUDIENCE:** developer
- **PERSONA:** Interactive Media Builder (real-time AI on live video)
- **PURPOSE:** `start`
- **PAGE_TYPE:** `tutorial`
- **OUTCOME:** Reader has ComfyStream running and connected to the Livepeer network with a real-time effect on a webcam feed.
- **ARRIVING KNOWLEDGE:** Familiar with ComfyUI; has a CUDA-capable GPU.
- **ARRIVING QUESTION:** "How do I get a real-time AI video pipeline running on Livepeer?"
- **PREV_PAGE:** `setup-paths` or `concepts/ai-on-livepeer`.
- **NEXT_PAGE:** `build/comfystream` (deeper reference) or `build/byoc`.
- **KEY FACTS:**
  1. Three deploy paths: RunPod template (`livepeer-comfystream`), Docker (`livepeer/comfystream`), local install (`pip install git+https://github.com/livepeer/comfystream.git`).
  2. Prerequisites: NVIDIA GPU (RTX 3090+ recommended; up to ~25 FPS on RTX 4090), Python 3.12, CUDA 12.5, PyTorch 2.5.1+cu121.
  3. Workflow format: ComfyUI API JSON, single primary input (LoadImage / PrimaryInputLoadImage), single output, auto-converted to LoadTensor / SaveTensor.
  4. Connect via Daydream API (managed) or BYOC + PyTrickle (custom).
- **OUT OF SCOPE:** Custom node authoring (link `build/comfystream` § Node Ecosystem).
- **WORD BUDGET:** 700–900 (tutorial; tabbed install paths).
- **CODE:** Docker run command; pip install; one workflow loader Python snippet.
- **VERSIONS / SOURCES:** comfystream main; ComfyUI-Stream-Pack 20 stars; PyTorch 2.5.1+cu121. **`[REVIEW: VRAM minimums, exact Docker flags, port numbers pending]`**.

---

### `v2/developers/get-started/contributor-quickstart` — UNLISTED

- **AUDIENCE:** developer
- **PERSONA:** OSS Protocol Contributor
- **PURPOSE:** `start`
- **PAGE_TYPE:** `instruction` (`pageVariant: quickstart`)
- **OUTCOME:** Reader has cloned `go-livepeer`, set up a local testnet, run a local orchestrator + gateway, and submitted a test job.
- **ARRIVING KNOWLEDGE:** Go 1.21+, Docker, git.
- **ARRIVING QUESTION:** "How do I start contributing to `go-livepeer`?"
- **PREV_PAGE:** `concepts/oss-stack`
- **NEXT_PAGE:** `guides/contribution-guide`, `guides/local-testnet-deployment`.
- **KEY FACTS:**
  1. Clone `github.com/livepeer/go-livepeer`.
  2. Local testnet uses a single orchestrator + gateway pair.
  3. Test payment flow uses testnet ETH on Arbitrum Sepolia.
- **OUT OF SCOPE:** PR process and review (link contribution-guide).
- **WORD BUDGET:** 500–700.
- **CODE:** Clone command, build command, testnet bring-up script.
- **VERSIONS / SOURCES:** go-livepeer v0.8.10. Currently only 2.6 KB — needs expansion. **Not in `docs.json`** — flag for nav add or removal.

---

## BUILD (Custom AI Workflows)

---

### `v2/developers/build/workload-fit`

- **AUDIENCE:** builder
- **PERSONA:** AI Application Builder evaluating fit
- **PURPOSE:** `evaluate`
- **PAGE_TYPE:** `concept` (decision aid)
- **OUTCOME:** Reader confirms whether their AI workload belongs on Livepeer (and if so, which path: batch, real-time, BYOC, or ComfyStream).
- **ARRIVING KNOWLEDGE:** Has a use case in mind.
- **ARRIVING QUESTION:** "Is my workload a fit, and which path?"
- **PREV_PAGE:** `concepts/ai-on-livepeer` or `developer-stack`.
- **NEXT_PAGE:** `build/byoc`, `build/comfystream`, or back to a quickstart.
- **KEY FACTS:**
  1. Decision tree: streaming vs file-based → GPU inference required → latency requirement → incremental output.
  2. Capability matrix across audio (ASR, translation), vision (depth, pose, segmentation), video (generation, effects), text (real-time only).
  3. Anti-patterns: pure batch file-based jobs without streaming output, latency-insensitive workloads better suited to centralised providers.
- **OUT OF SCOPE:** Pricing comparison detail.
- **WORD BUDGET:** 400–600.
- **CODE:** None.
- **VERSIONS / SOURCES:** Page is current; verify capability matrix is current ai-runner v0.14.1.

---

### `v2/developers/build/sdk-gateway` — STUB, P1

- **AUDIENCE:** developer
- **PERSONA:** Developer building a lightweight gateway client (no Go) using SDK + remote signer
- **PURPOSE:** `build`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader builds a lightweight Livepeer gateway client in Python, JavaScript, or mobile using the SDK, with auth via remote signer.
- **ARRIVING KNOWLEDGE:** Has called the AI gateway via REST or SDK; needs a custom client without running `go-livepeer`.
- **ARRIVING QUESTION:** "How do I build a non-Go gateway client?"
- **PREV_PAGE:** `concepts/running-a-gateway` or `build/workload-fit`.
- **NEXT_PAGE:** `resources/sdks`, `build/byoc`.
- **KEY FACTS:**
  1. Two SDK families: Studio SDK (`livepeer` — streams, assets, AI) vs AI SDK (`@livepeer/ai`, `livepeer-ai`, `livepeer-ai-go` — AI inference only).
  2. Bearer token auth from Studio dashboard. CORS-enabled keys for browser-side; backend keys for server-side.
  3. Retry: exponential backoff, configurable max retries.
  4. Error types: `HTTPError` (400/401/500), `HTTPValidationError` (422), `SDKError` (catch-all 4XX/5XX).
  5. Reference implementation: `livepeer-python-gateway` (verify availability).
- **OUT OF SCOPE:** Running `go-livepeer` (Gateways tab).
- **WORD BUDGET:** 600–800.
- **CODE:** TS Studio SDK example (`livepeer@3.5.0`); Python AI SDK (`livepeer-ai`); Go (`livepeer-ai-go`). Show auth, one call, error handling.
- **VERSIONS / SOURCES:** `livepeer@3.5.0`; `@livepeer/ai` alpha; `livepeer-ai` alpha PyPI; `livepeer-ai-go` alpha. **`[REVIEW: production stability of off-chain AI mode — confirm with j0sh]`**. **`[REVIEW: confirm `livepeer-python-gateway` reference implementation exists publicly]`**.

---

### `v2/developers/build/model-support`

- **AUDIENCE:** builder
- **PERSONA:** AI developer needing to confirm model / pipeline availability
- **PURPOSE:** `reference`
- **PAGE_TYPE:** `reference`
- **OUTCOME:** Reader confirms whether the pipeline / model they need is supported, what VRAM it requires, and the warm-vs-cold status.
- **ARRIVING KNOWLEDGE:** Knows the pipeline categories.
- **ARRIVING QUESTION:** "Which pipelines and models can I call, with what minimums?"
- **PREV_PAGE:** `concepts/ai-on-livepeer` or `get-started/ai-quickstart`.
- **NEXT_PAGE:** `build/byoc` (for unsupported models) or back to quickstart.
- **KEY FACTS:**
  1. Nine batch pipelines with endpoints, warm models, and minimum VRAM (see `05-source-of-truth.md`).
  2. Real-time `live-video-to-video` requires ComfyStream / BYOC; not REST.
  3. Custom Hugging Face model IDs accepted via `model_id` parameter.
  4. LoRA models supported on relevant pipelines.
- **OUT OF SCOPE:** How to call the endpoints (quickstart).
- **WORD BUDGET:** 300–500 (reference; tables dominate).
- **CODE:** Endpoint table; one example of `model_id` override.
- **VERSIONS / SOURCES:** ai-runner v0.14.1. **`[REVIEW: VRAM minimums and warm model names — verify against ai-runner main]`**.

---

### `v2/developers/build/byoc`

- **AUDIENCE:** developer
- **PERSONA:** Custom Model Porter — deploying a custom Docker container as a Livepeer AI worker
- **PURPOSE:** `build`
- **PAGE_TYPE:** `instruction`
- **OUTCOME:** Reader implements a `FrameProcessor` in PyTrickle, builds a Docker container, tests locally, deploys to the Livepeer network.
- **ARRIVING KNOWLEDGE:** Python; Docker; familiar with the gateway concept.
- **ARRIVING QUESTION:** "How do I deploy my own AI model on Livepeer?"
- **PREV_PAGE:** `build/workload-fit` (decided BYOC) or `build/model-support` (model not in default list).
- **NEXT_PAGE:** `build/comfystream` (if real-time variant) or back to client guide.
- **KEY FACTS:**
  1. PyTrickle `StreamServer` exposes four REST endpoints: `POST /api/stream/start`, `POST /api/stream/params`, `GET /api/stream/status`, `POST /api/stream/stop`.
  2. Subclass `FrameProcessor`, implement `process_frame()`.
  3. Docker base images: GPU `nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04`; CPU `python:3.11-slim`.
  4. Local test via `http-trickle` server.
  5. Deploy with `go-livepeer` flags `-byoc -byocContainerURL -byocModelID`.
  6. Client side: `@muxionlabs/byoc-sdk` for browser WebRTC.
- **OUT OF SCOPE:** ComfyStream-specific features (link `build/comfystream`).
- **WORD BUDGET:** 700–900 (instruction; six steps).
- **CODE:** Python `FrameProcessor` skeleton; Dockerfile snippet; go-livepeer launch flags; JS BYOCClient snippet.
- **VERSIONS / SOURCES:** PyTrickle main; go-livepeer v0.8.10. **`[REVIEW: -byoc / -byocContainerURL / -byocModelID flag names — confirm against go-livepeer master]`**. **`[REVIEW: @muxionlabs/byoc-sdk public availability and exact npm name]`**.

---

### `v2/developers/build/comfystream`

- **AUDIENCE:** developer
- **PERSONA:** Real-Time AI Video Builder (post-quickstart)
- **PURPOSE:** `build`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader extends a working ComfyStream pipeline — picks pipeline mode, adds custom nodes, tunes performance, sets up data-channel output.
- **ARRIVING KNOWLEDGE:** Has completed `comfystream-quickstart`.
- **ARRIVING QUESTION:** "How do I extend ComfyStream for my real-time AI use case?"
- **PREV_PAGE:** `comfystream-quickstart`.
- **NEXT_PAGE:** `build/byoc` (to wrap as a BYOC container) or `model-support`.
- **KEY FACTS:**
  1. Pipeline modes: image-to-image, video-to-video, audio processing, data-channel output.
  2. Node ecosystem: Core I/O (LoadTensor, SaveTensor), real-time control, StreamDiffusion (Phase 4), SuperResolution (Phase 4), AudioTranscription (Phase 4).
  3. Workflow format: ComfyUI API JSON; single primary input; single output; auto-converted to LoadTensor / SaveTensor.
  4. Performance: up to ~25 FPS on RTX 4090 with TensorRT compilation; first run incurs compile cost.
  5. Configurable frame rate 1–60 FPS (default 24); media ports; TURN server support.
- **OUT OF SCOPE:** ComfyUI authoring fundamentals (external).
- **WORD BUDGET:** 700–900.
- **CODE:** Workflow JSON skeleton; node import snippet; config example.
- **VERSIONS / SOURCES:** comfystream main; ComfyUI-Stream-Pack v20+. Cross-link `https://docs.comfystream.org`. **`[REVIEW: Phase 4 node canonical repo locations]`**.

---

## GUIDES

---

### `v2/developers/guides/developer-guides`

- **AUDIENCE:** builder
- **PERSONA:** All — returning for a specific guide
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME:** Reader finds the guide they need from a curated index.
- **ARRIVING QUESTION:** "Where is the guide for X?"
- **PREV_PAGE:** Various.
- **NEXT_PAGE:** Specific guide.
- **KEY FACTS:**
  1. Sections: Getting Started, Video Streaming, Full-Stack Apps, AI Inference, SDK & API Reference, Node Operations, Community.
  2. Many internal links currently point to v1 — audit for broken targets.
- **OUT OF SCOPE:** Guide content itself.
- **WORD BUDGET:** 200–400 (links + short orientations).
- **CODE:** None.
- **VERSIONS / SOURCES:** Audit links against current v2 paths.

---

### `v2/developers/guides/resources`

- **AUDIENCE:** builder
- **PERSONA:** All — looking up tools, dashboards, reading
- **PURPOSE:** `reference`
- **PAGE_TYPE:** `resource`
- **OUTCOME:** Reader finds the right external tool, dashboard, or reading.
- **ARRIVING QUESTION:** "What dashboards / SDKs / external resources exist?"
- **PREV_PAGE:** Various.
- **NEXT_PAGE:** External link or another v2 page.
- **KEY FACTS:**
  1. Sections: Official Tools, SDKs, Network Dashboards, Node Operator Tools, Community Aggregators, Reading, Security & Bug Bounties, Grants.
  2. Overlaps with the `resources/` group — IA recommendation: move to `resources/compendium/resources`.
- **OUT OF SCOPE:** None.
- **WORD BUDGET:** 300–500.
- **CODE:** None.
- **VERSIONS / SOURCES:** Audit currency of external links.

---

### `v2/developers/guides/contribution-guide`

- **AUDIENCE:** developer
- **PERSONA:** OSS contributor across code, docs, governance
- **PURPOSE:** `build`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader can submit a code, doc, or governance contribution following Livepeer's conventions.
- **ARRIVING QUESTION:** "How do I contribute, and what's expected?"
- **PREV_PAGE:** `concepts/oss-stack` or `get-started/contributor-quickstart`.
- **NEXT_PAGE:** Specific repo's contributing guide; `opportunities/oss-contributions`.
- **KEY FACTS:**
  1. Six contribution types: docs, bug reports, code, testing, code review, ideas.
  2. Conventional Commits required; changelog entries on PRs; PR focus rule (one concern per PR).
  3. Review assignment per repo.
- **OUT OF SCOPE:** Specific repo build instructions (link to repo READMEs).
- **WORD BUDGET:** 500–800.
- **CODE:** Commit message examples; PR template snippet.
- **VERSIONS / SOURCES:** Verify commit conventions against current repo CONTRIBUTING.md files.

---

### `v2/developers/guides/developer-help`

- **AUDIENCE:** builder
- **PERSONA:** Developer with a problem
- **PURPOSE:** `troubleshoot`
- **PAGE_TYPE:** `reference` (`pageVariant: compendium`)
- **OUTCOME:** Reader picks the right help channel for their problem class.
- **ARRIVING QUESTION:** "Where do I get help for this issue?"
- **PREV_PAGE:** Any failure point.
- **NEXT_PAGE:** External (Discord, forum, GitHub).
- **KEY FACTS:**
  1. Discord channels: `#lounge`, `#ai-research`, `#delegating`, `#governance`, `#technical`, `#ai-help`, `#builders`.
  2. Forum: `forum.livepeer.org` — categories include AI, governance, infrastructure.
  3. Developer Office Hours: bi-weekly.
  4. GitHub Issues per repo with template.
  5. Status page: `https://status.livepeer.studio`.
- **OUT OF SCOPE:** Specific troubleshooting steps (those are per-page).
- **WORD BUDGET:** 400–600.
- **CODE:** None.
- **VERSIONS / SOURCES:** Channel names and forum categories verified Q1 2026.

---

## OPPORTUNITIES (subgroup of Guides)

---

### `v2/developers/opportunities/overview`

- **AUDIENCE:** builder
- **PERSONA:** All — looking for funded paths
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME:** Reader picks the right opportunity track for their profile.
- **ARRIVING QUESTION:** "What funded paths exist for what I want to do?"
- **PREV_PAGE:** `developer-journey` or external.
- **NEXT_PAGE:** Specific opportunity page.
- **KEY FACTS:**
  1. Profiles: App Builder, AI Workflow Creator, Team / Organisation, Protocol Contributor, Orchestrator / GPU Provider, Security Researcher.
  2. Four opportunity types: Grants & Programmes, RFPs & Treasury, OSS Contributions, Bug Bounties.
- **OUT OF SCOPE:** Application detail (sub-pages).
- **WORD BUDGET:** 200–400.
- **CODE:** None.
- **VERSIONS / SOURCES:** Audience field is currently a non-canonical array — fix to single `developer` token.

---

### `v2/developers/opportunities/grants-and-programmes`

- **AUDIENCE:** builder
- **PERSONA:** Builder seeking funding or accelerator place
- **PURPOSE:** `evaluate`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader identifies the right grant type and applies via the Dev Hub.
- **ARRIVING QUESTION:** "Which grant or programme fits, and how do I apply?"
- **PREV_PAGE:** `opportunities/overview`
- **NEXT_PAGE:** `livepeer.org/dev-hub` (external).
- **KEY FACTS:**
  1. Grant types: Research / Video Innovation; Supply Side / Network Health; Quick Start / Microgrants; AI Workflow / ComfyUI Hacker.
  2. AI Video Startup Programme: up to $20K, 3 months, Encode Club partnership.
  3. ComfyUI Live Video Hacker Program (Jan–Feb 2025, two cohorts; verify if a 2026 cohort is open).
  4. Encode Club Real-Time Video AI Bootcamp (Q1 2025; verify schedule).
  5. Apply at `livepeer.org/dev-hub`.
- **OUT OF SCOPE:** RFPs (see `rfps-and-proposals`).
- **WORD BUDGET:** 500–700.
- **CODE:** None.
- **VERSIONS / SOURCES:** Programme amounts and dates change — flag `[REVIEW: confirm current programme dates and amounts]`.

---

### `v2/developers/opportunities/rfps-and-proposals`

- **AUDIENCE:** builder
- **PERSONA:** Team or org seeking sustained funded work via SPE proposal
- **PURPOSE:** `integrate`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader knows whether to apply for a Foundation RFP or submit an SPE Treasury Proposal, and the steps.
- **ARRIVING QUESTION:** "How do I get sustained funding from the treasury?"
- **PREV_PAGE:** `opportunities/overview`
- **NEXT_PAGE:** Foundation RFP listing; treasury governance page.
- **KEY FACTS:**
  1. Foundation RFPs: scoped competitive briefs with defined criteria.
  2. SPE Treasury Proposals: governed by 100 staked LPT, 33% quorum, 50% majority.
  3. Active SPEs include the AI SPE (now MuxionLabs), Embody, Streamplace.
- **OUT OF SCOPE:** LPT staking mechanics (link Delegators / Token tab).
- **WORD BUDGET:** 500–700.
- **CODE:** None.
- **VERSIONS / SOURCES:** Quorum / majority figures verified Q1 2026.

---

### `v2/developers/opportunities/oss-contributions`

- **AUDIENCE:** developer
- **PERSONA:** Code contributor across nine core repos
- **PURPOSE:** `build`
- **PAGE_TYPE:** `guide`
- **OUTCOME:** Reader picks a repo to contribute to and follows the seven-step first-contribution workflow.
- **ARRIVING QUESTION:** "Which repo, and what's the workflow?"
- **PREV_PAGE:** `concepts/oss-stack` or `guides/contribution-guide`.
- **NEXT_PAGE:** Repo's README and CONTRIBUTING.md.
- **KEY FACTS:**
  1. Nine repos: go-livepeer, Studio, ai-runner, ComfyStream, lpms, ui-kit, livepeer-ai-js, livepeer-ai-python, docs.
  2. Conventional Commits; changelog rules; PR focus.
  3. Seven-step first-contribution workflow.
- **OUT OF SCOPE:** Specific repo build instructions.
- **WORD BUDGET:** 600–800.
- **CODE:** Commit message examples.
- **VERSIONS / SOURCES:** Repo list verified against `developer-sources.md`.

---

### `v2/developers/opportunities/bug-bounties`

- **AUDIENCE:** developer
- **PERSONA:** Security researcher
- **PURPOSE:** `verify`
- **PAGE_TYPE:** `reference`
- **OUTCOME:** Reader knows the scope of the Immunefi programme, severity tiers, and submission process.
- **ARRIVING QUESTION:** "What's in scope, and how do I report?"
- **PREV_PAGE:** `opportunities/overview`
- **NEXT_PAGE:** Immunefi listing.
- **KEY FACTS:**
  1. Programme on Immunefi; smart contracts only (no websites or off-chain infra).
  2. USDC rewards on Ethereum; KYC required; PoC required.
  3. Critical severity capped at 10% of economic damage; High based on frozen yield.
- **OUT OF SCOPE:** Internal security process.
- **WORD BUDGET:** 350–500.
- **CODE:** None.
- **VERSIONS / SOURCES:** Verify against `https://immunefi.com/bounty/livepeer/` (external).

---

## RESOURCES

---

### `v2/developers/resources/sdks` — STUB, P1

- **AUDIENCE:** builder
- **PERSONA:** Developer picking an SDK
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME:** Reader picks the right SDK for their language and use case (Studio vs AI; backend vs browser; React vs vanilla).
- **ARRIVING QUESTION:** "Which SDK do I install?"
- **PREV_PAGE:** Quickstart or `build/sdk-gateway`.
- **NEXT_PAGE:** GitHub repo / npm / PyPI page; or `build/sdk-gateway` for client-build path.
- **KEY FACTS:**
  1. Studio SDKs: `livepeer@3.5.0` (npm, TS), `livepeer` (PyPI 0.3.0, Python), `github.com/livepeer/livepeer-go` (Go modules).
  2. AI SDKs (alpha): `@livepeer/ai` (npm), `livepeer-ai` (PyPI), `github.com/livepeer/livepeer-ai-go`.
  3. React UI Kit: `@livepeer/react@4.3.2` — `Player`, `Broadcast`, hooks.
  4. Deprecated: `@livepeer/webrtmp-sdk@0.2.5` (use `Broadcast`); `@livepeer/react-native@0.0.1` (use `react-native-video` + `react-native-webrtc`); `@livepeer/sdk@1.0.1-alpha.5` (archived contract SDK).
  5. All auto-generated by Speakeasy from `gen_openapi.py` in `ai-runner`.
- **OUT OF SCOPE:** Code examples (those are in the relevant build / quickstart page).
- **WORD BUDGET:** 300–500 (table-heavy).
- **CODE:** Install lines per SDK; one-line auth pattern.
- **VERSIONS / SOURCES:** See `05-source-of-truth.md` §SDK matrix.

---

### `v2/developers/resources/apis` — STUB, P1

- **AUDIENCE:** builder
- **PERSONA:** Developer needing the canonical API reference URL
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `navigation`
- **OUTCOME:** Reader lands on the right API reference (Studio REST, AI Gateway, OpenAPI spec).
- **ARRIVING QUESTION:** "Where is the API reference?"
- **PREV_PAGE:** Quickstart or build page.
- **NEXT_PAGE:** API reference page or OpenAPI spec download.
- **KEY FACTS:**
  1. Studio REST API base: `https://livepeer.studio`. Auth: `Authorization: Bearer <key>`. Covers streams, assets, AI inference, webhooks, multistream targets, signing keys.
  2. AI Gateway API base (Studio-hosted): `https://livepeer.studio/api/beta/generate`. Public free gateway: `https://dream-gateway.livepeer.cloud` (not for production).
  3. OpenAPI spec: generated from `gen_openapi.py` in `ai-runner`; rendered at `v2/gateways/resources/technical/api-reference/AI-API/ai`.
  4. Rate limits: configurable, visible in Studio dashboard.
- **OUT OF SCOPE:** Endpoint detail (link to reference).
- **WORD BUDGET:** 250–400.
- **CODE:** None on this page.
- **VERSIONS / SOURCES:** See `05-source-of-truth.md` §AI API surface.

---

### `v2/developers/resources/awesome-livepeer`

- **AUDIENCE:** builder
- **PERSONA:** Developer browsing community-curated demos and tutorials
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `resource`
- **OUTCOME:** Reader reaches the curated list at `github.com/livepeer/awesome-livepeer`.
- **ARRIVING QUESTION:** "What demos and tutorials exist?"
- **PREV_PAGE:** `developer-journey` or `guides/developer-guides`.
- **NEXT_PAGE:** The repo.
- **KEY FACTS:**
  1. `livepeer/awesome-livepeer` — 52 stars; ~12 demo apps; tutorials.
  2. README embed currently unavailable in this docs branch.
- **OUT OF SCOPE:** Reproducing the list.
- **WORD BUDGET:** 100–200.
- **CODE:** None.
- **VERSIONS / SOURCES:** Star count April 2026.

---

### `v2/developers/resources/wiki`

- **AUDIENCE:** builder
- **PERSONA:** Developer looking for older technical reference
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `resource`
- **OUTCOME:** Reader reaches the GitHub Wiki for older technical reference material.
- **ARRIVING QUESTION:** "Is there older technical material I should know about?"
- **PREV_PAGE:** Various.
- **NEXT_PAGE:** GitHub Wiki.
- **KEY FACTS:**
  1. Hosted on the `livepeer/docs` GitHub Wiki.
  2. Embed currently unavailable.
  3. **Bug:** card href currently points to `deepwiki.com/livepeer` — wrong target. Fix on edit.
- **OUT OF SCOPE:** Reproducing the wiki.
- **WORD BUDGET:** 100–200.
- **CODE:** None.
- **VERSIONS / SOURCES:** N/A.

---

### `v2/developers/resources/deepwiki`

- **AUDIENCE:** builder
- **PERSONA:** Developer wanting AI-generated codebase Q&A
- **PURPOSE:** `orient`
- **PAGE_TYPE:** `resource`
- **OUTCOME:** Reader reaches `deepwiki.com/livepeer` for natural-language code questions.
- **ARRIVING QUESTION:** "How do I quickly understand a Livepeer repo?"
- **PREV_PAGE:** Various.
- **NEXT_PAGE:** DeepWiki.
- **KEY FACTS:**
  1. AI-generated wiki for Livepeer repos by Cognition AI / Devin team.
  2. Iframe embed of `deepwiki.com/livepeer` on the page.
  3. Caveat: AI-generated content can be inaccurate.
- **OUT OF SCOPE:** Reproducing the wiki.
- **WORD BUDGET:** 150–250.
- **CODE:** None.
- **VERSIONS / SOURCES:** Live as of April 2026.

---

### `v2/developers/resources/compendium/glossary`

- **AUDIENCE:** builder
- **PERSONA:** Developer looking up a term
- **PURPOSE:** `reference`
- **PAGE_TYPE:** `reference` (`pageVariant: compendium`)
- **OUTCOME:** Reader finds an authoritative definition for a Livepeer-developer term.
- **ARRIVING QUESTION:** "What does X mean in Livepeer's context?"
- **PREV_PAGE:** Any.
- **NEXT_PAGE:** Any.
- **KEY FACTS:**
  1. Searchable; backed by `glossary-data.json`.
  2. Categories: SDKs, AI Gateway API, streaming protocols, protocol integration.
  3. Pre-commit script regenerates `glossary-data.json` for AEO indexing.
- **OUT OF SCOPE:** N/A.
- **WORD BUDGET:** Per-entry definitions only; no prose body.
- **CODE:** None.
- **VERSIONS / SOURCES:** Auto-generated; do not edit `glossary-data.json` directly.

---

## NOTES ON UNLISTED FILES

The following exist on disk but are **not in `docs.json`**. Treat as out of scope unless your brief names them:

- `v2/developers/index.mdx` — tab routing index.
- `v2/developers/get-started/contributor-quickstart.mdx` — staging file (block above is for a future nav add).
- `v2/developers/developer-tools/*.mdx` — five files in a deprecated folder. **Do not write to.**
- `v2/developers/technical-references/*.mdx` — five legacy duplicates of `resources/*.mdx`. **Do not write to.**
- `v2/developers/resources/example-applications.mdx` — unlisted. Decide before editing.

If your brief targets a missing page from the canonical IA (`navigator.mdx`, `guides/ai/troubleshooting`, `guides/ai/production-checklist`, `guides/ai/authentication`, `guides/video/*`, `guides/tutorials/build-an-ai-agent-on-livepeer`), surface as `## OPEN QUESTION` and proceed only if the page path and brief have been added.
