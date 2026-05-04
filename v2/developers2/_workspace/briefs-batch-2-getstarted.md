# Content briefs — Batch 2: Get Started

Five pages. All NEW or significant rewrites. Full L0/L1/L2 template.

Get Started is one quickstart per buildable thing. Each page must take a developer
from zero to first working call in roughly 10 minutes. No conceptual depth; that
lives in Build.

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md`.

---

## 7. `/v2/developers/get-started/setup-paths.mdx` — RETAINED, lightly rewritten

### Gate L0

**Q1 — Outcome.** This page asks two questions and routes the reader to the right Get Started quickstart based on their project shape and where they want it to run.

**Q2 — Featured reader.** A developer who landed on Get Started without going through the navigator. They know roughly what they want to build but have not chosen a quickstart. They have prerequisites already installed (Node.js, Python, or Go).

**Q3 — Real alternative.** They click into one of the four persona quickstarts and bail when they realise the prerequisites do not match.

**Q4 — Required belief.** Two questions and I have the right quickstart open with the right prerequisites listed.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev with Node.js installed | "Which quickstart matches calling AI from a TypeScript app?" | Routes to `application-developer.mdx` | Served here |
| AI Dev with Python and Docker | "Which quickstart matches shipping a custom container?" | Routes to `ai-developer.mdx` | Served here |
| Video Dev with ffmpeg background | "Which quickstart matches building a streaming app?" | Routes to `video-developer.mdx` | Served here |
| Agent Dev with TypeScript and an LLM key | "Which quickstart matches an agent on Livepeer?" | Routes to `agent-developer.mdx` | Served here |
| Reader without clear self-identification | "I don't know which one I am." | Link to `navigator.mdx` for the six-question quiz | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Two questions: what are you building, and where will it run? The answers route you to the right quickstart."
2. **Question 1: what are you building?** Four options as cards: AI inference in an app / a streaming app / a custom AI pipeline / an agent.
3. **Question 2: where will it run?** Two options: hosted (Studio, Daydream, GWID, or Cloud Community Gateway) or self-hosted (your own go-livepeer gateway). One paragraph explaining each.
4. **Output: prerequisites by track.** Four short blocks. App Dev needs Node.js or Python. AI Dev needs Python 3.10+, Docker, NVIDIA GPU. Video Dev needs Node.js, optionally ffmpeg. Agent Dev needs Node.js and an LLM API key.
5. **Routing strip.** Four buttons, one per quickstart.
6. **Escape hatches.** "Building Studio/Daydream/Streamplace?" → Solutions Integrators. "Contributing to a Livepeer repo?" → Protocol Extenders. "Not sure?" → navigator.

### Frontmatter

```yaml
---
title: "Pick your quickstart"
sidebarTitle: "Setup paths"
description: "Two questions and four routes. Find the quickstart that matches your project."
pageType: "tutorial"
---
```

### Information to convey

- Two questions resolve to one of four tracks.
- Prerequisites listed inline.
- Hosted vs self-hosted decision made up front.
- Out-of-scope routing strip for Solutions Integrators and Protocol Extenders.

### Information to exclude

- SDK code samples. Each quickstart has its own.
- Concept depth on what AI / video / agents are.
- Studio API key acquisition flow (lives in Solutions/Studio).

### Components

- `<CardGroup>` for the four buildable-thing cards.
- `<Tabs>` for hosted vs self-hosted prerequisites.

### Sources to consult

- Existing `get-started/setup-paths.mdx` — keep the structure that works; update routing destinations.

---

## 8. `/v2/developers/get-started/application-developer.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page takes an Application Developer from zero to a working AI Gateway call in under 10 minutes against the Livepeer Cloud Community Gateway, with a clear path to switch gateways once they are ready.

**Q2 — Featured reader.** A full-stack or backend developer building a TypeScript or Python app. They have shipped on Vercel, Render, or Fly. They want to add AI inference or video to their app. They know REST and OAuth; they have not touched a smart contract.

**Q3 — Real alternative.** They open Replicate's or Mux's quickstart in another tab and pick whichever shows them a working API call faster.

**Q4 — Required belief.** I can install one SDK, paste one config block, and have a working API call in 10 minutes against any gateway, hosted or self-hosted.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| TypeScript dev wanting AI in an app | "What's the install + first call?" | npm install + 5-line example | Served here |
| Python dev wanting AI in an app | "What's the install + first call?" | pip install + 5-line example | Served here |
| Dev evaluating gateway providers | "Which gateway should I point at?" | Default Cloud Community Gateway, link to comparison | Linked → `build/application/choose-a-gateway.mdx` |
| Dev who already has a Studio API key | "Can I use my Studio key here?" | Yes, with a one-line config note | Served here |
| Dev wanting video, not AI | "Where's transcoding?" | Link to `build/application/transcoding-quickstart.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "In 10 minutes you will have a working AI Gateway call from a TypeScript or Python app, against the free Cloud Community Gateway."
2. **Featured path.** Cloud Community Gateway at `gateway.livepeer.cloud`. Free, no API key required for basic models, off-chain. Production apps can switch to Studio, GWID, or self-hosted later.
3. **Install the SDK.** `npm install @livepeer/ai` or `pip install livepeer-ai`. The SDK is gateway-agnostic.
4. **First call.** A `text-to-image` example in TypeScript and Python tabs. Five lines per language. Include the `baseURL` configuration showing how to point at a different gateway.
5. **What you just did.** One paragraph: SDK → Cloud Community Gateway → orchestrator → response.
6. **Next step.** Link to `build/application/choose-a-gateway.mdx`. Link to `build/application/ai-quickstart.mdx` for deeper SDK usage. Link to `build/application/transcoding-quickstart.mdx` for video.
7. **Out-of-scope acknowledgements.** Streaming app → `video-developer.mdx`. Custom pipeline → `ai-developer.mdx`. Agent → `agent-developer.mdx`.

### Frontmatter

```yaml
---
title: "Application Developer quickstart"
sidebarTitle: "Application Developer"
description: "Install @livepeer/ai or livepeer-ai-python, make your first AI Gateway call against the free Cloud Community Gateway in under 10 minutes."
pageType: "tutorial"
---
```

### Information to convey

- `@livepeer/ai` (TypeScript) and `livepeer-ai` (Python) are gateway-agnostic.
- Cloud Community Gateway at `gateway.livepeer.cloud` is the recommended default.
- SDK constructor takes `httpBearer` and a `baseURL` so the same code points at any gateway.
- Studio is the productised path with paid per-minute pricing.
- GWID is the SPE-funded managed option.
- The `livepeer` npm package is the Studio API SDK, not the AI Gateway SDK.

### Information to exclude

- BYOC and custom pipelines (lives in `ai-developer.mdx`).
- Realtime LV2V (lives in `build/ai/`).
- Self-hosting a gateway (lives in `build/application/local-gateway.mdx`).
- Solutions products as primary path.

### Components

- `<Tabs>` for TypeScript vs Python install + first call.
- `<Note>` for Cloud Community Gateway free-tier framing.
- `<Card>` for the three "next step" links.

### Sources to consult

- Existing `get-started/ai-quickstart.mdx` (verify SDK package names and ensure API key flow is gateway-agnostic, not Studio-specific).
- `persona-routing-and-infra-map.md` Part 2.2 (SDK inventory).

---

## 9. `/v2/developers/get-started/ai-developer.mdx` — NEW (renames `concepts/ai-on-livepeer.mdx`)

### Gate L0

**Q1 — Outcome.** This page takes an AI Developer from zero to a working ComfyStream or BYOC pipeline running locally and connected to the Livepeer network within an hour.

**Q2 — Featured reader.** An ML engineer or applied researcher with PyTorch and Docker comfort. They have shipped at least one inference pipeline on a hyperscaler or in ComfyUI. They want to either run a ComfyUI workflow on Livepeer or ship a custom Python container.

**Q3 — Real alternative.** They run their pipeline on Modal or RunPod with their own GPU rental, paying hourly compute costs.

**Q4 — Required belief.** I can pick one of two clean paths — ComfyStream for ComfyUI workflows, BYOC for arbitrary Python containers — and have it running locally in an hour.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| ML engineer with a ComfyUI workflow | "How do I run my workflow on Livepeer?" | Routes to ComfyStream pages | Linked |
| ML engineer with a custom Python pipeline | "How do I ship my container?" | Routes to BYOC pages | Linked |
| App Dev who landed here by mistake | "Wait, am I on the right page?" | Redirect note to `application-developer.mdx` | Served here |
| Dev wanting realtime LV2V | "Where's the realtime path?" | Link to `build/ai/python-gateway-client.mdx` | Linked |
| Reader curious about Daydream | "Is Daydream the same as ComfyStream?" | One paragraph distinguishing them | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Pick a path: ComfyStream for ComfyUI workflows, BYOC for arbitrary Python containers."
2. **Decision branch.** Two cards.
   - **ComfyStream.** "If your pipeline already runs in ComfyUI, ship it on Livepeer with minimal code." Links to `build/ai/comfystream-platform.mdx`.
   - **BYOC.** "If you have a custom Python pipeline, wrap it in a pytrickle container." Links to `build/ai/byoc-quickstart.mdx`.
3. **Daydream callout.** Daydream is the consumer-facing creative product built on these primitives. Point creatives there, not here.
4. **Realtime LV2V note.** If they want to call a gateway from Python (not run a pipeline), link to `build/ai/python-gateway-client.mdx`.
5. **Wrong page redirect.** "If you only want to call a hosted AI API, go to Application Developer instead."
6. **Prerequisites strip.** Python 3.10+, Docker, NVIDIA GPU with NVENC support, NVIDIA driver 535+, CUDA 12.x.
7. **Next step.** Single primary link based on the chosen card.

### Frontmatter

```yaml
---
title: "AI Developer quickstart"
sidebarTitle: "AI Developer"
description: "Two paths to ship an AI pipeline on Livepeer: ComfyStream for ComfyUI workflows, BYOC for arbitrary Python containers."
pageType: "tutorial"
---
```

### Information to convey

- Two AI Developer paths: ComfyStream and BYOC.
- pytrickle is the integration layer underneath both.
- Daydream is the consumer-facing application of these primitives, not a developer path.
- Hardware: NVIDIA GPU with NVENC, driver 535+, CUDA 12.x.
- Pipeline count: 11 native ai-runner pipelines, 9 in Daydream API surface, 40 capabilities through Storyboard BYOC orchestrator including fal.ai-routed providers.

### Information to exclude

- ComfyUI workflow authoring (lives in `build/ai/comfystream-platform.mdx`).
- BYOC engineering spec (lives in `build/ai/byoc.mdx`).
- pytrickle reference (lives in `reference/pytrickle-reference.mdx`).
- Studio AI features (lives in Solutions/Studio).

### Components

- `<CardGroup cols={2}>` for the ComfyStream vs BYOC choice.
- `<Note>` for the Daydream callout and the wrong-page redirect.

### Sources to consult

- Existing `concepts/ai-on-livepeer.mdx` (strip conceptual material now living in Concepts).
- `persona-routing-and-infra-map.md` Part 1.3 and Part 2.5.

---

## 10. `/v2/developers/get-started/video-developer.mdx` — NEW (renames `concepts/video-on-livepeer.mdx`)

### Gate L0

**Q1 — Outcome.** This page takes a Video Developer from zero to a working video transcoding job or a working stream playback in their app within 30 minutes.

**Q2 — Featured reader.** A streaming engineer or video platform developer. They know ffmpeg, HLS, RTMP, and WebRTC. They have shipped a streaming product before. They want to replace closed-source transcode infrastructure or add a Livepeer ingest tier.

**Q3 — Real alternative.** They keep using Mux, AWS Elemental MediaLive, or their existing on-prem ffmpeg cluster.

**Q4 — Required belief.** Livepeer's video path is gateway-agnostic, supports my codecs, and I can prove it in 30 minutes.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Streaming engineer evaluating transcoding cost | "How do I run a transcode job?" | Link to `build/video/transcoding-quickstart.mdx` | Linked |
| Frontend dev embedding a player | "How do I embed Livepeer playback?" | Link to `build/application/frontend-react-player.mdx` | Linked |
| Streaming engineer with custom ingest needs | "Can I bring my own ingest?" | Link to `build/video/ingest-and-playback.mdx` | Linked |
| Engineer worried about codec coverage | "H.265 and AV1?" | One-paragraph status with link to `build/video/codec-support.mdx` | Served here + linked |
| Engineer wanting recording/VOD | "What about VOD?" | Link to `build/video/vod-workflows.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Run your first transcoding job, embed a Livepeer player in 10 minutes, or wire up live ingest. Pick a path."
2. **Three-card decision strip.**
   - **Transcoding job.** Submit a video file or RTMP source for transcoding.
   - **Embed playback.** `@livepeer/react` Player against any HLS source.
   - **Live ingest.** RTMP or WebRTC into a gateway.
3. **Codec status paragraph.** H.264 default. H.265 hardware-accelerated on NVENC and Netint MA35D. AV1 prototype via the ad-astra-video fork (not yet upstream).
4. **Studio comparison callout.** Studio is the productised path: managed gateway, paid per minute, includes recording. Self-hosted go-livepeer is the alternative.
5. **Prerequisites strip.** Node.js for frontend embedding. Optionally ffmpeg locally.
6. **Next step.** Single primary link to the chosen path.
7. **Out-of-scope acknowledgements.** Operating a gateway at scale → Gateways tab. AI on video (LV2V) → AI Developer track.

### Frontmatter

```yaml
---
title: "Video Developer quickstart"
sidebarTitle: "Video Developer"
description: "Three paths: transcode a file, embed a player, or wire live ingest. All against any Livepeer gateway."
pageType: "tutorial"
---
```

### Information to convey

- Three buildable things: transcoding, playback, ingest.
- Codec support: H.264 (universal), H.265 (NVENC, MA35D), AV1 (prototype fork).
- Studio vs self-hosted gateway as the productised vs DIY split.
- `@livepeer/react` Player accepts any HLS source.
- ad-astra-video fork is community-maintained.

### Information to exclude

- Catalyst stack depth (lives in `build/video/lpms-integration.mdx` note + Solutions).
- Storage and archival (lives in `build/video/storage-and-archival.mdx`).
- Live event production patterns (lives in `build/video/live-events.mdx`).

### Components

- `<CardGroup cols={3}>` for the three paths.
- `<Note>` for the Studio comparison callout.

### Sources to consult

- Existing `concepts/video-on-livepeer.mdx` (strip conceptual content).
- Existing `get-started/transcoding-quickstart.mdx` (current code samples).

---

## 11. `/v2/developers/get-started/agent-developer.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page takes an Agent Developer from zero to a running Storyboard fork or a working `@livepeer/agent` loop calling the Livepeer AI Gateway within an hour.

**Q2 — Featured reader.** A TypeScript developer building agent-shaped applications. They have shipped at least one LLM app on OpenAI, Anthropic, or Together. They are familiar with at least one agent framework (Mastra, LangChain, or Eliza).

**Q3 — Real alternative.** They keep their agent on OpenAI or Anthropic alone, with no real-time video or BYOC capabilities.

**Q4 — Required belief.** Storyboard ships as an open-source canvas with `@livepeer/agent` and `@livepeer/creative-kit` baked in, and I can vendor it or build on top in under an hour.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| TypeScript dev with Mastra background | "What's the equivalent of Mastra here?" | `@livepeer/agent` workspace package | Served here |
| Dev with Eliza experience | "Can I use Eliza?" | Yes — link to `build/agents/eliza-integration.mdx` | Served here + linked |
| Dev wanting EIP-8004 paid agent identity | "Where's the 8004 path?" | Link to `build/agents/reference-agents.mdx` | Linked |
| Dev who wants to fork Storyboard | "How do I clone and modify?" | Link to `build/agents/storyboard-as-template.mdx` | Linked |
| Dev unsure about LLM provider support | "Does Livepeer support my LLM provider?" | Provider list: Gemini, Claude, OpenAI, Daydream/Livepeer | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Two paths: vendor `@livepeer/agent` from the Storyboard monorepo into your own app, or fork Storyboard wholesale. Either way you get AgentRunner, ToolRegistry, and a provider abstraction with Gemini, Claude, OpenAI, and Livepeer routing."
2. **Decision branch.** Two cards.
   - **Vendor the SDK.** Use `@livepeer/agent` and `@livepeer/creative-kit` as workspace packages. Best for adding agent capabilities to an existing app.
   - **Fork Storyboard.** Clone the entire Storyboard canvas. Best when your product looks like Storyboard.
3. **Provider routing paragraph.** Storyboard's `@livepeer/agent` is provider-agnostic. Configure with `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `DAYDREAM_API_KEY` (Livepeer routing). One LLM provider is the minimum.
4. **Reference templates callout.** Titan-Node ships `livepeer-8004-agent` and `livepeer-402-middleware` as agent reference implementations.
5. **Eliza alternative.** Livepeer model provider plugin lets you use Livepeer as one of Eliza's swappable providers.
6. **Prerequisites strip.** Node.js 20+, pnpm 8+, an LLM provider API key. `@livepeer/agent` is not yet on npm; vendor from Storyboard monorepo.
7. **Next step.** Single primary link based on chosen card.

### Frontmatter

```yaml
---
title: "Agent Developer quickstart"
sidebarTitle: "Agent Developer"
description: "Build an agent on Livepeer: vendor @livepeer/agent or fork Storyboard. Provider-agnostic routing across Gemini, Claude, OpenAI, and Livepeer."
pageType: "tutorial"
---
```

### Information to convey

- Storyboard is the canonical reference application.
- `@livepeer/agent` and `@livepeer/creative-kit` are workspace packages inside it.
- Provider abstraction: Gemini, Claude, OpenAI, Daydream (Livepeer routing).
- Storyboard exposes 40 capabilities through its BYOC orchestrator: 7 Image, 2 Edit, 3 T2V, 6 I2V, 4 TTS, 3 3D, 7 Other. Plus separate Scope LV2V pipeline.
- Reference templates: Titan-Node `livepeer-8004-agent`, `livepeer-402-middleware`, `Unreal_Vtuber`.
- `@livepeer/agent` is not on npm; vendor the workspace package.

### Information to exclude

- Tool authoring depth (lives in `build/agents/agent-sdk.mdx`).
- Creative-kit primitives (lives in `build/agents/creative-kit.mdx`).
- EIP-8004 mechanics (lives in `build/agents/reference-agents.mdx`).
- Eliza plugin code (lives in `build/agents/eliza-integration.mdx`).
- AI Gateway endpoints (lives in `build/ai/ai-pipelines.mdx`).

### Components

- `<CardGroup cols={2}>` for vendor-vs-fork choice.
- `<Note>` for npm-publication state of `@livepeer/agent`.

### Sources to consult

- `persona-routing-and-infra-map.md` Part 1.7 and Verification log Item 5 (40-capability roster).
- Storyboard README.

---

## End of Batch 2

Five pages briefed. Get Started fully scoped: one routing page (setup-paths) plus four persona quickstarts.

Pages remaining: 58.

Next batch (3): Build / Application — 14 pages. Mix of NEW, rewrite, and retained-with-rename. Tiered template.
