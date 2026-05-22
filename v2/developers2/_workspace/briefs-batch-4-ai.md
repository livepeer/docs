# Content briefs — Batch 4: Build / AI

Twelve pages. Mix of NEW (5), Rewrite (4), Retained-rename (3). Tiered template:
full L0/L1/L2 for NEW and significant rewrites; lighter format for retained.

Build / AI is the heaviest content track. It serves Persona 2 (AI Developer)
primarily. Pages cover BYOC, ComfyStream, pytrickle, the trickle protocol, the
AI Gateway endpoint catalogue, AI orchestration, model support, and the Python
gateway client.

After verification:
- `byoc-architecture` and `byoc-production` collapsed into one page (`byoc.mdx`)
- `comfystream-authoring` folded into `comfystream-platform`
- `realtime-lv2v` renamed to `python-gateway-client` (clearer scope)
- `scope-runner` confirmed as a real, named, current artifact

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md`,
verified content in `/v2/gateways/guides/`.

---

## 26. `/v2/developers/build/ai/byoc.mdx` — REWRITE (was `build/byoc.mdx`)

### Gate L0

**Q1 — Outcome.** This page gives an AI Developer a full mental model of BYOC architecture (gateway-container HTTP contract, pytrickle FrameProcessor, lifecycle, observability) so they can ship a production BYOC container.

**Q2 — Featured reader.** An ML engineer with PyTorch comfort, Docker, and a custom inference pipeline. They have heard of BYOC, know it is the way to ship arbitrary Python pipelines on Livepeer, and want the canonical spec before they fork an example.

**Q3 — Real alternative.** They run their pipeline on Modal or RunPod with their own GPU rental, paying hourly compute costs and managing scaling themselves.

**Q4 — Required belief.** BYOC is production-grade, has a stable container contract, and one Python class plus four HTTP endpoints is the entire surface I have to implement.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| ML engineer with custom pipeline | "What's the contract?" | FrameProcessor + four HTTP endpoints | Served here |
| Engineer doing realtime AR / streaming AI | "Realtime support?" | Phase 4 confirmed production-grade for live workloads | Served here |
| Engineer wanting batch AI via BYOC | "Batch supported?" | Yes — same contract, batched inputs | Served here |
| Engineer thinking about observability | "How do I monitor my container?" | StreamServer monitoring endpoints, framerate caps, error reporting | Served here |
| Engineer ready to fork an example | "Where do I start?" | Link to `byoc-quickstart.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "BYOC ships any Python pipeline as a Livepeer-network container. One FrameProcessor class. Four HTTP endpoints. Production-grade since Phase 4 (Jan 2026)."
2. **Architecture diagram.** Single Mermaid: gateway → trickle protocol → BYOC container (pytrickle StreamServer + FrameProcessor) → trickle protocol → gateway → app.
3. **The four HTTP endpoints.** `POST /api/stream/start`, `POST /api/stream/params`, `GET /api/stream/status`, `POST /api/stream/stop`. One paragraph per endpoint with the request/response shape.
4. **The FrameProcessor class.** `initialize()`, `process_video_async(frame)`, `process_audio_async(frame)`, `update_params(params)`. Code skeleton with PyTorch tensor shapes.
5. **Lifecycle.** Container start → registration with orchestrator → gateway dispatches stream → FrameProcessor processes frames → status reported → stop on signal.
6. **Production hardening.**
   - Framerate cap: default 24 FPS, 60 FPS hard ceiling; configurable per stream.
   - Audio format handling: pytrickle auto-converts mono / stereo / multi-channel.
   - StreamServer monitoring: `/health`, frame count, error rate.
   - Memory and GPU footprint: typical patterns and ceilings.
7. **Pricing your container.** Author-set pricing. Orchestrator selection by `serviceAddr`.
8. **Cross-links.** `byoc-quickstart.mdx` for forkable example. `pytrickle.mdx` for FrameProcessor depth. `comfystream-platform.mdx` if pipeline is ComfyUI-shaped.

### Frontmatter

```yaml
---
title: "BYOC — Bring Your Own Container"
sidebarTitle: "BYOC"
description: "The full BYOC architecture: HTTP contract, pytrickle FrameProcessor, lifecycle, and production hardening. Ship arbitrary Python pipelines on the Livepeer network."
pageType: "concept"
---
```

### Information to convey

- BYOC was production-hardened in Phase 4 (Jan 2026). Embody SPE and Streamplace are the production references.
- Container contract: four HTTP endpoints + FrameProcessor class.
- pytrickle is the canonical integration layer; available on PyPI as well as via git.
- Author-set pricing model.
- ComfyStream is BYOC-compatible — point ComfyUI workflow authors there before they reinvent BYOC.
- Production thresholds: 24 FPS default, 60 FPS hard cap.

### Information to exclude

- Forking a starter (lives in `byoc-quickstart.mdx`).
- pytrickle reference detail (lives in `reference/pytrickle-reference.mdx` and `pytrickle.mdx` concept).
- Trickle protocol wire format (lives in `trickle-protocol.mdx`).
- ComfyStream node authoring (lives in `comfystream-platform.mdx`).

### Components

- One Mermaid architecture diagram.
- Code blocks for the FrameProcessor skeleton and an HTTP endpoint example.
- `<Note>` for the Phase 4 production-grade status.

### Sources to consult

- Existing `build/byoc.mdx` (verified content, 168 lines).
- `livepeer/pytrickle` README.
- `persona-routing-and-infra-map.md` Part 2.4 (BYOC architecture).

---

## 27. `/v2/developers/build/ai/byoc-quickstart.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page takes an AI Developer from `byoc.mdx` (architecture understood) to a running forked BYOC container connected to a local gateway, in 30 minutes, by forking `muxionlabs/byoc-example-apps`.

**Q2 — Featured reader.** An AI Developer who has read `byoc.mdx`, understood the contract, and now wants to fork-and-modify rather than build from scratch. They have Docker + Python + an NVIDIA GPU. They want a working proof in 30 minutes before committing to the full implementation.

**Q3 — Real alternative.** They build a BYOC container from scratch from the spec, lose two days on Docker + pytrickle plumbing, then start working on their pipeline.

**Q4 — Required belief.** A forkable starter exists at `muxionlabs/byoc-example-apps`, swapping in my pipeline is one method change, and I can have it running in 30 minutes.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| AI Dev ready to fork | "Which example?" | One of three examples in `muxionlabs/byoc-example-apps` | Served here |
| Engineer wanting passthrough first | "Simplest path?" | passthrough example fork → swap pipeline | Served here |
| Engineer with realtime use case | "Realtime example?" | Soldar (real-time avatar) example | Served here |
| Engineer with batch use case | "Batch example?" | Direct BYOC contract works for batch too | Served here |
| Engineer wanting full architecture detail | "Where's the spec?" | Link to `byoc.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Fork `muxionlabs/byoc-example-apps`, swap in your pipeline, push to a registry, register with a local gateway. 30 minutes to first frame round-trip."
2. **Step 1: Fork the starter.** `git clone github.com/muxionlabs/byoc-example-apps`. Three examples: passthrough (simplest), Soldar (avatar), audio-transcription. Pick passthrough for the first run.
3. **Step 2: Build and run locally.** `docker build` + `docker run` with GPU + port mappings. Verify the four HTTP endpoints respond.
4. **Step 3: Swap in your pipeline.** Open `processor.py`. Replace `process_video_async` body with your model call. Keep the tensor in/out shape.
5. **Step 4: Connect to a local gateway.** Use the `local-gateway.mdx` setup. `-orchAddr` points at your container. Send a test job from `@livepeer/ai`.
6. **Step 5: Watch the first frame round-trip.** Logs from gateway, container, and orchestrator. Common pitfalls.
7. **Next steps.** Production hardening (`byoc.mdx` production section). Pricing your container. Submitting to public orchestrators.

### Frontmatter

```yaml
---
title: "BYOC quickstart"
sidebarTitle: "BYOC quickstart"
description: "Fork muxionlabs/byoc-example-apps, swap in your pipeline, register with a local gateway. 30 minutes to first frame round-trip."
pageType: "tutorial"
---
```

### Information to convey

- Starter repo: `github.com/muxionlabs/byoc-example-apps`.
- Three examples: passthrough, Soldar, audio-transcription.
- Build → run → swap pipeline → connect → first round-trip.
- Cross-link to `local-gateway.mdx` for the gateway setup.
- Cross-link to `byoc.mdx` for production hardening.

### Information to exclude

- Architecture detail (lives in `byoc.mdx`).
- pytrickle reference (lives in `reference/pytrickle-reference.mdx`).
- Production deployment (lives in `byoc.mdx` production section).
- Pricing and orchestrator selection mechanics (lives in `ai-orchestration.mdx`).

### Components

- `<Steps>` for the five-step flow.
- Code blocks for `docker build`, `processor.py` skeleton, gateway test call.
- `<Card>` for the three example choices.

### Sources to consult

- `muxionlabs/byoc-example-apps` README.
- Existing `build/byoc.mdx` (production-grade flag, Phase 4 status).

---

## 28. `/v2/developers/build/ai/pytrickle.mdx` — NEW (concept treatment)

### Gate L0

**Q1 — Outcome.** This page gives an AI Developer the conceptual model of pytrickle — what it is, why it exists, what it abstracts away, and where it sits in the BYOC stack — so they understand what the FrameProcessor class actually does.

**Q2 — Featured reader.** An AI Developer who has run `byoc-quickstart.mdx` and is now extending the FrameProcessor implementation. They want to know what pytrickle handles automatically and what they have to handle themselves before they ship to production.

**Q3 — Real alternative.** They reverse-engineer pytrickle's source, or they implement the trickle protocol wire format manually because they did not realise pytrickle handled it.

**Q4 — Required belief.** pytrickle is the canonical Python integration layer for trickle, it handles the wire protocol, audio format conversion, framerate management, and the StreamServer HTTP endpoints — leaving me only the FrameProcessor class to implement.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| AI Dev extending FrameProcessor | "What's pytrickle handling for me?" | List of automatic behaviours | Served here |
| Engineer worried about audio formats | "Mono vs stereo handling?" | pytrickle auto-converts | Served here |
| Engineer worried about framerate | "Variable framerate input?" | pytrickle caps and adjusts | Served here |
| Engineer wanting raw trickle access | "Can I bypass pytrickle?" | Yes — direct trickle protocol → `trickle-protocol.mdx` | Linked |
| Engineer needing exact API surface | "Where's the API ref?" | Link to `reference/pytrickle-reference.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "pytrickle is the Python integration layer that turns BYOC from a wire-protocol problem into a one-class problem. Implement FrameProcessor; pytrickle handles the rest."
2. **What pytrickle handles automatically.**
   - Trickle protocol wire format (parse + emit).
   - StreamServer HTTP endpoints (`/start`, `/params`, `/status`, `/stop`).
   - Audio format conversion (mono / stereo / multi-channel auto-routing).
   - Framerate management (24 FPS default, 60 cap, dynamic).
   - PyTorch tensor lifecycle.
   - Error reporting back to the gateway.
3. **What you implement.** FrameProcessor subclass. Four async methods. Optional state management.
4. **Where pytrickle sits in the stack.** Diagram: gateway → trickle wire format → pytrickle StreamServer → FrameProcessor → pytrickle → trickle wire format → gateway.
5. **Install paths.** `pip install pytrickle` from PyPI. `pip install git+https://github.com/livepeer/pytrickle.git` for HEAD.
6. **Provenance and stewardship.** pytrickle is owned and maintained as part of the AI infrastructure. Phase 4 production-grade.
7. **Cross-links.** `reference/pytrickle-reference.mdx` for the API surface. `trickle-protocol.mdx` for the wire format if bypassing pytrickle.

### Frontmatter

```yaml
---
title: "pytrickle — Python integration layer"
sidebarTitle: "pytrickle"
description: "What pytrickle is, what it handles automatically, and where it sits in the BYOC stack. The integration layer that turns BYOC into a one-class problem."
pageType: "concept"
---
```

### Information to convey

- pytrickle is the canonical Python integration layer for the trickle protocol.
- Repo: `github.com/livepeer/pytrickle`.
- Available on PyPI (`pip install pytrickle`).
- Handles wire protocol, StreamServer HTTP, audio conversion, framerate, tensor lifecycle.
- FrameProcessor is the only class you implement.
- Used by ComfyStream internally.
- Production-grade since Phase 4 (Jan 2026).

### Information to exclude

- API reference (lives in `reference/pytrickle-reference.mdx`).
- Trickle protocol wire format (lives in `trickle-protocol.mdx`).
- BYOC architecture (lives in `byoc.mdx`).
- Specific pipeline implementations.

### Components

- Stack diagram showing pytrickle's position.
- One code skeleton showing FrameProcessor.
- `<Note>` distinguishing pytrickle (concept here) from pytrickle reference (separate page).

### Sources to consult

- `livepeer/pytrickle` README.
- Existing `concepts/oss-stack.mdx` row on pytrickle.
- `persona-routing-and-infra-map.md` Part 2.4 + 2.5 (where pytrickle sits).

---

## 29. `/v2/developers/build/ai/trickle-protocol.mdx` — NEW (orphan from Part 3)

### Gate L0

**Q1 — Outcome.** This page documents the trickle streaming protocol — the HTTP-based segmented transport layer that pytrickle, ComfyStream, and BYOC all sit on — so a developer can understand why it exists and choose to bypass pytrickle if they need a non-Python implementation.

**Q2 — Featured reader.** An advanced developer building a non-Python BYOC pipeline (Rust, Go, browser-side WASM) or debugging trickle behaviour at the wire level. They have shipped network protocols before.

**Q3 — Real alternative.** They use WebSockets or WebRTC and build their own session management on top, missing out on the orchestrator routing and ticket settlement integration.

**Q4 — Required belief.** Trickle is a documented HTTP-based streaming protocol with a well-defined wire format, and bypassing pytrickle is a real option for non-Python implementations.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Rust / Go BYOC author | "What's the wire format?" | Wire format description with examples | Served here |
| Browser-side BYOC author | "Can I publish from browser?" | Yes — protocol is HTTP-based | Served here |
| Developer debugging trickle | "What's on the wire?" | curl examples showing publish + subscribe | Served here |
| Developer comparing trickle vs WebRTC | "Why trickle and not WebRTC?" | Trade-offs: HTTP-friendly, no NAT traversal needed | Served here |
| Python developer | "Should I just use pytrickle?" | Yes — link to `pytrickle.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Trickle is the HTTP-based streaming protocol underpinning BYOC and ComfyStream. This page documents the wire format and when to bypass pytrickle."
2. **Why trickle exists.** HTTP-friendly, no NAT traversal, plays nicely with reverse proxies, works with HTTP/2 and HTTP/3, simple debugging via curl.
3. **Wire format.** Stream-scoped paths. POST to publish, GET to subscribe. Sequence numbers. Header semantics.
4. **Reference implementations.** `livepeer/http-trickle` (Go). `livepeer/pytrickle` (Python). Both repos as canonical sources.
5. **Default port and conventions.** 3389 in pytrickle examples. Stream identification by path.
6. **Building a non-Python client.** Walk-through: implement publish loop, implement subscribe loop, connect to a gateway.
7. **Cross-links.** `pytrickle.mdx` for the Python path (default). `byoc.mdx` for the architecture context.

### Frontmatter

```yaml
---
title: "Trickle protocol"
sidebarTitle: "Trickle protocol"
description: "The HTTP-based streaming protocol underpinning BYOC and ComfyStream. Wire format, reference implementations, and when to bypass pytrickle."
pageType: "concept"
---
```

### Information to convey

- Trickle is HTTP-based (POST publish, GET subscribe).
- Reference implementations: `livepeer/http-trickle` (Go), `livepeer/pytrickle` (Python).
- Default port 3389 in pytrickle examples.
- HTTP-friendly: works through proxies, HTTP/2, HTTP/3.
- pytrickle wraps trickle for Python; bypass it only for non-Python implementations.

### Information to exclude

- pytrickle API surface (lives in `reference/pytrickle-reference.mdx`).
- BYOC architecture (lives in `byoc.mdx`).
- ComfyStream pipelines (lives in `comfystream-platform.mdx`).
- Orchestrator selection (lives in `ai-orchestration.mdx`).

### Components

- Wire format example with curl.
- Mermaid diagram of publish + subscribe loop.
- `<Note>` advising Python devs to use pytrickle instead.

### Sources to consult

- `livepeer/http-trickle` README.
- `livepeer/pytrickle` source (StreamServer + TrickleClient).
- `persona-routing-and-infra-map.md` Part 3 (orphans list confirms this is one).

---

## 30. `/v2/developers/build/ai/comfystream-platform.mdx` — REWRITE (was `build/comfystream.mdx`)

### Gate L0

**Q1 — Outcome.** This page gives an AI Developer with a ComfyUI workflow the full ComfyStream platform model — what it is, three execution modes, RunPod path, workflow authoring, ComfyUI Stream Pack — so they pick the right execution mode and ship.

**Q2 — Featured reader.** A ComfyUI-comfortable AI Developer or creative coder. They have a workflow that works locally in ComfyUI. They want it on the Livepeer network as a real-time pipeline. They are evaluating ComfyStream against just running their workflow on RunPod.

**Q3 — Real alternative.** They run their ComfyUI workflow on RunPod with a Modal endpoint wrapper, paying hourly compute and managing scaling themselves.

**Q4 — Required belief.** ComfyStream is a real-time-capable platform with three execution modes, a curated node pack, and a clear path from local workflow to deployed pipeline.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| ComfyUI workflow author | "How do I deploy my workflow?" | Three execution modes + decision matrix | Served here |
| Creative coder evaluating real-time | "Is real-time supported?" | Yes — Phase 4 production-grade | Served here |
| Engineer wanting RunPod-ComfyStream hybrid | "Can I run ComfyStream on RunPod?" | Yes — RunPod section | Served here |
| Author wanting custom nodes | "Can I bring custom nodes?" | Yes — workflow authoring + Stream Pack | Served here |
| Engineer wanting multi-pipeline | "Can I run multiple workflows?" | Yes — workflow swap mechanism | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "ComfyStream is the real-time ComfyUI runtime for the Livepeer network. Three execution modes. A curated node pack. Production-grade since Phase 4."
2. **The three execution modes.**
   - **Local development.** ComfyUI + ComfyStream extension running on your own GPU. Best for workflow iteration.
   - **Self-hosted on RunPod or similar.** ComfyStream image on a rented GPU. Best for solo deployment.
   - **Livepeer network via BYOC.** ComfyStream packaged as a BYOC container. Best for production at scale.
3. **Decision matrix.** Three rows by mode. Columns: setup time, monthly cost shape, scaling, Livepeer integration.
4. **Workflow authoring.** Open ComfyUI. Build workflow. Save as `.json`. Drop into ComfyStream `workflows/` directory. Hot-reload.
5. **ComfyUI Stream Pack.** Curated set of real-time-friendly custom nodes. Cross-link to `comfyui-stream-pack.mdx`.
6. **Phase 4 status.** Production-grade since Jan 2026. Embody SPE and Streamplace are production references.
7. **Cross-links.** `comfyui-stream-pack.mdx` for the curated nodes. `byoc.mdx` if execution mode is "Livepeer network via BYOC".

### Frontmatter

```yaml
---
title: "ComfyStream platform"
sidebarTitle: "ComfyStream"
description: "ComfyStream is the real-time ComfyUI runtime for the Livepeer network. Three execution modes, a curated node pack, production-grade since Phase 4."
pageType: "concept"
---
```

### Information to convey

- ComfyStream is the real-time runtime for ComfyUI workflows.
- Three execution modes: local, RunPod-shaped, Livepeer network via BYOC.
- ComfyStream is BYOC-compatible (the Livepeer network mode).
- Phase 4 (Jan 2026) was the production-hardening release.
- Embody SPE and Streamplace run ComfyStream pipelines in production.
- Workflow authoring is a `.json` drop-in pattern.
- ComfyUI Stream Pack is the curated real-time node set.

### Information to exclude

- ComfyUI Stream Pack node-by-node (lives in `comfyui-stream-pack.mdx`).
- Custom node authoring depth.
- BYOC architecture (lives in `byoc.mdx`).
- pytrickle (lives in `pytrickle.mdx`).

### Components

- Decision matrix table for three execution modes.
- One Mermaid diagram showing workflow → ComfyStream → orchestrator.
- `<Note>` for the Phase 4 production-grade status.

### Sources to consult

- Existing `build/comfystream.mdx`.
- `livepeer/comfystream` README.
- `persona-routing-and-infra-map.md` AI SPE Phase 4 retrospective references.

---

## 31. `/v2/developers/build/ai/comfyui-stream-pack.mdx` — RETAINED rename (from `build/`)

### Lighter format

**Audience.** Persona 2 — AI Developer authoring real-time ComfyUI workflows.

**Journey position.** From `comfystream-platform.mdx`; out to ComfyStream repo for the live node list.

**Activation moment.** Reader can pick the right Stream Pack node for their workflow's real-time requirements.

**Frontmatter.**

```yaml
---
title: "ComfyUI Stream Pack"
sidebarTitle: "Stream Pack"
description: "The curated real-time node pack for ComfyStream. Phase 4 additions and what they unlock."
pageType: "reference"
---
```

**Information to convey.**

- ComfyUI Stream Pack is the curated set of real-time-friendly custom nodes for ComfyStream.
- Phase 4 added nodes for: real-time I/O, frame interpolation, motion smoothing, audio routing.
- Nodes are versioned with the ComfyStream image.
- Cross-link to the canonical node list in the ComfyStream repo (live source).

**Information to exclude.**

- Custom node authoring (link to ComfyUI custom node docs).
- ComfyStream platform overview (lives in `comfystream-platform.mdx`).
- Workflow authoring patterns (lives in `comfystream-platform.mdx` workflow section).

**Sources to consult.**

- Existing `build/` content if any.
- `livepeer/comfystream` README + Stream Pack section.

---

## 32. `/v2/developers/build/ai/python-gateway-client.mdx` — NEW (renamed from `realtime-lv2v`)

### Gate L0

**Q1 — Outcome.** This page gives a Python developer a working `livepeer-python-gateway` integration — installing the client, signing tickets via remote signer, sending an LV2V job to an orchestrator — in 30 minutes.

**Q2 — Featured reader.** A Python developer with an ML or backend background. They want to call the Livepeer network from Python without running a Go gateway binary. They are building either an embedded gateway in their Python app or a pipeline that submits jobs from Python.

**Q3 — Real alternative.** They run a separate go-livepeer process in Docker and call it over HTTP from Python, paying the operational cost of two services where one would do.

**Q4 — Required belief.** `livepeer-python-gateway` is a real reference Python implementation that handles ticket signing via the remote signer architecture, and I can call the Livepeer network from Python in 30 minutes.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Python dev wanting LV2V from Python | "How do I send a job?" | Install + auth + first call | Served here |
| Engineer with embedded gateway need | "Can I embed in my Python app?" | Yes — that's the pattern | Served here |
| Engineer worried about ticket signing | "Where does signing happen?" | Remote signer architecture; default community signer | Served here |
| Engineer wanting BYOC submission | "Same client?" | Yes — BYOC supported via HTTP discovery | Served here |
| Engineer wanting video transcoding | "Can I do transcode?" | No — explicitly excluded by design | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Call the Livepeer network from Python without running a Go gateway. Install the client, point at a remote signer, send an LV2V or BYOC job. 30 minutes."
2. **Workload support.** Live AI (LV2V) — fully supported. BYOC — supported via HTTP discovery. Batch AI — partial support; status in flux. Video transcoding — excluded by design (synchronous ticket signing in hot path).
3. **Install.** `pip install git+https://github.com/j0sh/livepeer-python-gateway.git`.
4. **Configuration.** Three pieces: orchestrator URL, remote signer URL (default: `signer.eliteencoder.net`), gateway parameters.
5. **First call: LV2V.** Code example showing ingest URL → signer-derived auth → job submission → result.
6. **First call: BYOC.** Variant of the same call pattern, with BYOC-specific HTTP discovery.
7. **What this client does and does not do.** Does: ticket signing via remote signer, job submission, basic retry. Does not: hold ETH, transcode video, manage on-chain state.
8. **Production considerations.** Run your own remote signer in production. Monitor ticket signing latency. Cross-link to Gateways tab for production gateway operation.
9. **Cross-links.** `local-gateway.mdx` if a Go binary alternative is preferred. Reference page for full client API.

### Frontmatter

```yaml
---
title: "Python gateway client"
sidebarTitle: "Python gateway client"
description: "livepeer-python-gateway: call the Livepeer network from Python via the remote signer architecture. LV2V and BYOC supported; video transcoding excluded."
pageType: "tutorial"
---
```

### Information to convey

- `livepeer-python-gateway` (j0sh) is the reference Python client.
- Remote signer architecture handles ticket signing.
- Community remote signer at `signer.eliteencoder.net` is free (verified).
- Workload support: LV2V (full), BYOC (full), batch AI (partial), video transcoding (excluded by design).
- Repo: `github.com/j0sh/livepeer-python-gateway`.
- Examples in `examples/` directory.
- Full control over routing logic and language choice.

### Information to exclude

- Remote signer protocol detail (Gateways tab).
- Ticket signing internals (Gateways tab + Reference).
- Go gateway operation (`local-gateway.mdx` + Gateways tab).
- ComfyStream / BYOC architecture (separate pages).

### Components

- Code blocks for install + LV2V + BYOC calls.
- `<Note>` for the video transcoding exclusion.
- `<Note>` for the community remote signer caveat.

### Sources to consult

- `github.com/j0sh/livepeer-python-gateway` README + examples.
- `/v2/gateways/guides/deployment-details/setup-options.mdx` (verified workload support table).
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified embedded gateway pattern).

---

## 33. `/v2/developers/build/ai/ai-pipelines.mdx` — REWRITE

### Gate L0

**Q1 — Outcome.** This page gives a developer the canonical pipeline catalogue — 11 native ai-runner pipelines, 9 Daydream API surface, 40 Storyboard BYOC capabilities including fal.ai-routed providers — so they pick the right pipeline name, the right endpoint, and the right gateway for their use case.

**Q2 — Featured reader.** A developer who has hit the "model not found" error or is selecting a model for a new feature. They have read conflicting numbers across docs and want the authoritative reconciliation.

**Q3 — Real alternative.** They guess from existing examples, hit "model not found", and ask in Discord.

**Q4 — Required belief.** There are three pipeline numbers (11 native, 9 Daydream, 40 Storyboard), each comes from a different layer, and the right one for me is identifiable from the routing table.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Dev seeing "model not found" | "Why? Which pipeline list applies?" | Three layers explained + reconciliation | Served here |
| Dev picking text-to-image model | "Which models, which gateway?" | Native pipelines table | Served here |
| Dev picking video generation model | "I2V, T2V — which?" | Storyboard BYOC list | Served here |
| Dev evaluating fal.ai routing | "Is fal.ai the same?" | Routed via Storyboard BYOC, not native | Served here |
| Dev wanting frame interpolation | "Available?" | Yes — native pipeline (verified) | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Three pipeline numbers exist: 11 native, 9 Daydream, 40 Storyboard BYOC. This page reconciles them and tells you which to use."
2. **The three layers.**
   - **Native ai-runner pipelines (11).** Run inside ai-runner directly. Lives in `livepeer/ai-worker/runner/` source. Includes frame-interpolation. Fastest path; lowest cost.
   - **Daydream API surface (9).** Public consumer-facing API. Subset of native pipelines plus Daydream-specific pipelines. Documented in Solutions/Daydream.
   - **Storyboard BYOC capabilities (40).** Routed through Storyboard's BYOC orchestrator. Includes fal.ai-routed providers. Verified breakdown: 7 Image, 2 Edit, 3 T2V, 6 I2V, 4 TTS, 3 3D, 7 Other.
3. **Native pipelines table.** Eleven rows. Columns: pipeline name, endpoint, models, typical use.
4. **Storyboard BYOC table.** Forty rows organised by category (Image, Edit, T2V, I2V, TTS, 3D, Other).
5. **Daydream subset.** Nine rows. Note that Daydream documentation in Solutions/Daydream is the authoritative source.
6. **Routing decisions.**
   - For lowest cost and fastest cold-start, use native pipelines via Cloud Community Gateway.
   - For Daydream-specific features (real-time avatars, etc.), use Daydream.
   - For provider variety (fal.ai, etc.), use Storyboard BYOC.
7. **Cross-links.** `byoc.mdx` for shipping your own. `comfystream-platform.mdx` for ComfyUI workflows. Solutions/Daydream for Daydream specifics.

### Frontmatter

```yaml
---
title: "AI pipelines"
sidebarTitle: "AI pipelines"
description: "The full pipeline catalogue: 11 native ai-runner, 9 Daydream API, 40 Storyboard BYOC. Reconciled and routed by use case."
pageType: "reference"
---
```

### Information to convey

- Three pipeline numbers reconciled: 11 native, 9 Daydream, 40 Storyboard BYOC.
- Native list comes from `livepeer/ai-worker/runner/` source — includes frame-interpolation (verified orphan from `persona-routing-and-infra-map.md`).
- Daydream list is the public API subset.
- Storyboard list is the BYOC capability breakdown: 7 Image, 2 Edit, 3 T2V, 6 I2V, 4 TTS, 3 3D, 7 Other (verified).
- fal.ai is routed via Storyboard BYOC, not native.
- AIServiceRegistry overlap — opt-in / transitional, used by Storyboard BYOC.

### Information to exclude

- Per-model parameter detail (lives in Reference / API).
- BYOC architecture (lives in `byoc.mdx`).
- Pricing per model (lives in Reference / pricing-rate-limits).

### Components

- Three tables (native / Daydream / Storyboard BYOC).
- `<Note>` for the AIServiceRegistry transitional status.
- `<Note>` for Daydream as the authoritative source for its 9-pipeline list.

### Sources to consult

- `livepeer/ai-worker/runner/` source (native pipeline list including frame-interpolation).
- `livepeer/storyboard` README (40-capability breakdown — verified).
- `persona-routing-and-infra-map.md` Verification log Item 5 (the 9/11/40 reconciliation).
- `persona-routing-and-infra-map.md` Verification log Item 4 (AIServiceRegistry opt-in / transitional).

---

## 34. `/v2/developers/build/ai/ai-orchestration.mdx` — REWRITE

### Gate L0

**Q1 — Outcome.** This page tells a developer how the gateway selects an orchestrator for a given AI request — capability advertisement, selection weighting, blocklist, AIServiceRegistry — so they predict and influence routing for their workloads.

**Q2 — Featured reader.** A developer running their own gateway or one who has read `should-i-run-a-gateway.mdx` and wants to understand the orchestrator-selection knobs they get on the self-hosted path.

**Q3 — Real alternative.** They use a hosted gateway (Studio, Cloud Community, GWID) and accept whatever routing the gateway operator chose.

**Q4 — Required belief.** Gateway-side orchestrator selection is configurable via documented flags, and I can route my workloads to specific orchestrators or tiers based on price, region, or capability.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Self-hosted gateway operator | "Which flags select orchestrators?" | `-orchAddr`, `-orchBlocklist`, selection weighting | Served here |
| App Dev curious about routing | "How does the gateway pick?" | Selection weighting explanation | Served here |
| Engineer with regional pinning need | "Can I pin by region?" | Yes — via `-orchAddr` patterns | Served here |
| Engineer worried about price ceilings | "Can I cap price per pipeline?" | Yes — `-maxPricePerCapability` | Served here |
| Engineer asking about AIServiceRegistry | "Is this still used?" | Opt-in / transitional; explain | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "How a Livepeer gateway picks an orchestrator for an AI request. Capability advertisement, selection weighting, blocklist, AIServiceRegistry status."
2. **Capability advertisement.** Orchestrators register capabilities (pipelines + models supported, price per unit). Gateway maintains a capability table.
3. **Selection weighting.** `-selectRandFreq`, `-selectStakeWeight`, `-selectPriceWeight`, `-selectPriceExpFactor`. One paragraph per flag.
4. **Direct selection.** `-orchAddr` lets a gateway pin to specific orchestrators.
5. **Blocklist.** `-orchBlocklist` removes specific orchestrators.
6. **Price ceilings.** `-maxPricePerCapability` accepts JSON config with per-pipeline, per-model price caps.
7. **AIServiceRegistry.** Opt-in / transitional. Used by Storyboard BYOC (`AIServiceRegistry` flag overrides `ServiceRegistryAddr` to `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5`). Code comment confirms: "For the time-being Livepeer AI Subnet uses its own ServiceRegistry."
8. **Open community thread.** `forum.livepeer.org/t/ai-capability-discovery/3233` for capability discovery direction.
9. **Cross-links.** `payment-modes.mdx` (if existed) → covered in `byoc.mdx` pricing. `local-gateway.mdx` for the gateway flag setup.

### Frontmatter

```yaml
---
title: "AI orchestration"
sidebarTitle: "AI orchestration"
description: "How a gateway picks an orchestrator for AI requests: capability advertisement, selection weighting, blocklist, price ceilings, AIServiceRegistry."
pageType: "concept"
---
```

### Information to convey

- Selection weighting flags: `-selectRandFreq`, `-selectStakeWeight`, `-selectPriceWeight`, `-selectPriceExpFactor`.
- Direct selection: `-orchAddr`.
- Blocklist: `-orchBlocklist`.
- Price caps: `-maxPricePerCapability` (JSON config).
- AIServiceRegistry: opt-in / transitional (verified from `cmd/livepeer/starter/starter.go`). Boolean flag, default false. When set, overrides `ServiceRegistryAddr` to `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5`.
- Open community thread on capability discovery.

### Information to exclude

- Orchestrator-side configuration (Orchestrators tab).
- Ticket settlement detail (`settlement-observability.mdx` + Gateways tab).
- Capability authoring (lives in BYOC pages).

### Components

- Selection-flag reference table.
- `<Note>` for the AIServiceRegistry transitional status.

### Sources to consult

- `cmd/livepeer/starter/starter.go` (AIServiceRegistry flag — verified).
- `persona-routing-and-infra-map.md` Verification log Item 4.
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified `-orchAddr` and `-maxPricePerCapability` usage).

---

## 35. `/v2/developers/build/ai/model-support.mdx` — RETAINED rename (from `build/`)

### Lighter format

**Audience.** Persona 2 — AI Developer choosing models for their pipeline.

**Journey position.** From `ai-pipelines.mdx`; out to specific pipeline pages.

**Activation moment.** Reader knows which models are supported per pipeline and which gateway routes them.

**Frontmatter.**

```yaml
---
title: "Model support"
sidebarTitle: "Model support"
description: "Which models the Livepeer network supports today, organised by pipeline. Native, Daydream, and Storyboard BYOC layers."
pageType: "reference"
---
```

**Information to convey.**

- Per-pipeline model lists for native ai-runner pipelines.
- Daydream-supported models cross-link to Solutions/Daydream.
- Storyboard BYOC routed models (including fal.ai providers).
- Model-add cadence: changes per ai-runner release.

**Information to exclude.**

- Per-model parameter detail (Reference / APIs).
- BYOC architecture (`byoc.mdx`).
- Pricing per model (Reference / pricing-rate-limits).

**Sources to consult.**

- Existing `build/model-support.mdx`.
- `livepeer/ai-worker` releases.
- `livepeer/storyboard` capability breakdown.

---

## 36. `/v2/developers/build/ai/scope-runner.mdx` — RETAINED (from `build/` if existed; otherwise NEW reference)

### Lighter format

**Audience.** Persona 2 — AI Developer wanting a BYOC reference implementation that demonstrates production patterns.

**Journey position.** From `byoc.mdx` or `byoc-quickstart.mdx`; out to repo for live source.

**Activation moment.** Reader has cloned scope-runner, understands its structure, and uses it as a reference for their own BYOC container.

**Frontmatter.**

```yaml
---
title: "scope-runner"
sidebarTitle: "scope-runner"
description: "A BYOC reference implementation. Production-grade patterns for FrameProcessor, lifecycle, and orchestrator integration."
pageType: "reference"
---
```

**Information to convey.**

- scope-runner is a real, named, current BYOC reference implementation (verified).
- Demonstrates FrameProcessor patterns at production grade.
- Used as the starting point for several production BYOC containers.
- Cross-link to repo for live source.

**Information to exclude.**

- BYOC architecture (`byoc.mdx`).
- Forking guide (`byoc-quickstart.mdx`).
- pytrickle reference (`reference/pytrickle-reference.mdx`).

**Sources to consult.**

- `livepeer/scope-runner` repo.
- `persona-routing-and-infra-map.md` (verified as real, named, current).

---

## 37. `/v2/developers/build/ai/comfystream-quickstart.mdx` — MOVED from Get Started

### Lighter format

**Audience.** Persona 2 — AI Developer with a ComfyUI workflow ready to deploy.

**Journey position.** From `comfystream-platform.mdx` after picking the local-development execution mode; out to platform page or BYOC pages once they want production deployment.

**Activation moment.** Reader has ComfyStream running locally, has loaded a workflow, and has seen real-time output from a webcam or test source.

**Frontmatter.**

```yaml
---
title: "ComfyStream quickstart"
sidebarTitle: "ComfyStream quickstart"
description: "Run ComfyStream locally with a ComfyUI workflow in 30 minutes. Local development before production deployment."
pageType: "tutorial"
---
```

**Information to convey.**

- Install ComfyStream + ComfyUI locally.
- Drop in a sample workflow.
- Run with a webcam or video file source.
- See real-time output.
- Cross-link to `comfystream-platform.mdx` for the production-deployment paths.

**Information to exclude.**

- ComfyStream architecture (`comfystream-platform.mdx`).
- BYOC packaging (`byoc.mdx`).
- Custom node authoring.

**Sources to consult.**

- Existing `get-started/comfystream-quickstart.mdx`.
- `livepeer/comfystream` README.

---

## End of Batch 4

Twelve pages briefed. Build / AI is fully scoped:
- **NEW (5)**: pytrickle, trickle-protocol, python-gateway-client, byoc-quickstart, scope-runner (if not retained)
- **Rewrite (4)**: byoc, comfystream-platform, ai-pipelines, ai-orchestration
- **Retained-rename (3)**: comfyui-stream-pack, model-support, comfystream-quickstart

Pages remaining: 32.

Next batch (5): Build / Video — 7 pages. Mix of NEW (5) and Retained-rename (2).
