# Developers Content Research Pack

Generated: 2026-03-23
Scope: Developers tab — v1 and v2 content inventory, gap analysis, extracted technical facts, S6 split context.

---

## Purpose

This pack collects all existing Developers tab content (v1 and v2) into a single reference for content writers. It covers what pages exist, what each page contains, what is missing, and what technical facts have been extracted. The final section documents all content relevant to the S6 real-time vs custom compute structural decision, which requires a human decision before the architecture is finalised.

---

## V1 Content Inventory

V1 developer content lives at `v1/developers/`. It is organised around Livepeer Studio — a hosted video API platform. It does not cover AI inference, ComfyStream, BYOC, or the Livepeer network at the protocol layer. All content is Studio-specific.

### Getting Started

| Path | Title | Status | Summary | Key Technical Facts |
|------|-------|--------|---------|---------------------|
| `v1/developers/introduction` | Introduction | Current (v1) | Landing page for v1 Developers. Introduces Livepeer Studio and links to quickstart, guides, API reference, and SDKs. Surfaces Studio SDK list. | SDKs: TypeScript (`livepeer` npm), Go, Python. React components: Player, Broadcast. SDK install: `npm install livepeer @livepeer/react`. |
| `v1/developers/quick-start` | Quickstart | Current (v1) | Create an API key in Studio, install the JS SDK, retrieve playback info, and render it with the React Player component. | `npm install livepeer @livepeer/react`. Constructor: `new Livepeer({ apiKey })`. Playback: `livepeer.playback.get(playbackId)` returns `playbackInfo`. Player: `<Player.Root src={src}>`. Recommends CORS-key deprecation. Env var: `YOUR_PRIVATE_API_KEY`. |
| `v1/developers/livepeer-studio-cli` | CLI | Current (v1) | Generate a new Livepeer app scaffold using the CLI. | `npx @livepeer/create`. Prompts for API key and Stream ID. Scaffold uses `npm run dev`. |

### Guides

| Path | Title | Status | Summary | Key Technical Facts |
|------|-------|--------|---------|---------------------|
| `v1/developers/guides/overview` | Guides Overview | Current (v1) | Index of all guides grouped by category: VOD, Livestream, Access Control, Webhooks, Transcode API, Viewership Metrics, Projects, Integrations. | No standalone technical content — navigation page only. |
| `v1/developers/guides/create-livestream` | Create a Livestream | Current (v1) | Use the Create Stream API to create a stream, retrieve stream key, broadcast via RTMP or WebRTC WHIP. Shows Node.js, Python, Go examples. | RTMP ingest: `rtmp://rtmp.livepeer.com/live`. WebRTC WHIP: `https://playback.livepeer.studio/webrtc/{streamKey}`. SDK: `livepeer.stream.create({ name })`. Response contains `streamKey`. |
| `v1/developers/guides/upload-video-asset` | Upload an Asset | Current (v1) | Two upload modes: TUS resumable (recommended) and PUT. Uses SDK to create upload endpoint, then TUS client to upload from frontend. Covers IPFS/Arweave sources. | TUS upload: `livepeer.asset.create({ name })` returns TUS endpoint. TUS client: `tus-js-client`. IPFS: upload raw file before archiving. |
| `v1/developers/guides/playback-an-asset` | Play an Asset | Current (v1) | Play a video asset using Player component or embedded player at `lvpr.tv`. | Embed: `https://lvpr.tv?v={playbackId}&lowLatency=true`. Player component from `@livepeer/react/player`. |
| `v1/developers/guides/playback-a-livestream` | Play a Livestream | Current (v1) | Play live stream via Player or third-party player. Player defaults to WebRTC WHEP then HLS fallback. | WebRTC playback URL via `playbackId`. HLS fallback via `playbackInfo` API. Player uses `Livepeer-Jwt` header for access-controlled streams. |
| `v1/developers/guides/listen-to-asset-events` | Listen to Asset Events | Current (v1) | Set up webhooks to receive asset lifecycle notifications. | Events: `asset.created`, `asset.updated`, `asset.ready`, `asset.failed`. |
| `v1/developers/guides/listen-to-stream-events` | Listen to Stream Events | Current (v1) | Set up webhooks to receive stream lifecycle notifications. | Events: `stream.started`, `stream.idle`. |
| `v1/developers/guides/create-livestream` (see above) | — | — | — | — |
| `v1/developers/guides/stream-via-obs` | Livestream via OBS | Current (v1) | Configure OBS to stream to Livepeer RTMP endpoint. Emphasises B-frame setting. | OBS: disable B-frames. RTMP server: `rtmp://rtmp.livepeer.com/live`. Stream key from dashboard/API. |
| `v1/developers/guides/livestream-from-browser` | In-Browser Broadcasting | Current (v1) | Broadcast from browser using the Broadcast component and WebRTC WHIP. | Broadcast component: `@livepeer/react`. WHIP URL: `https://playback.livepeer.studio/webrtc/{streamKey}`. |
| `v1/developers/guides/optimize-latency-of-a-livestream` | Optimise Livestream Latency | Current (v1) | Guidance on minimising end-to-end latency. | WebRTC default for sub-second latency. HLS fallback adds latency. B-frame detection triggers HLS fallback. |
| `v1/developers/guides/monitor-stream-health` | Monitor Stream Health | Current (v1) | Use stream health API/metrics to monitor ingest performance. | Stream health metrics: ingest health, active state. |
| `v1/developers/guides/multistream` | Multistream | Current (v1) | Direct a livestream to multiple platforms simultaneously. | Multistream targets: YouTube, Twitter, etc. Added via `stream.addMultistreamTarget`. |
| `v1/developers/guides/clip-a-livestream` | Clip a Livestream | Current (v1) | Create video clips from a live stream using the Clip API. | `POST /stream/{id}/clip`. Clip produces an asset. |
| `v1/developers/guides/thumbnails-vod` | VOD Thumbnails | Current (v1) | Generate and retrieve thumbnail images for video assets. | Thumbnail URL pattern from asset playback. |
| `v1/developers/guides/thumbnails-live` | Live Thumbnails | Current (v1) | Generate and retrieve thumbnail images for live streams. | Thumbnail URL from active stream. |
| `v1/developers/guides/encrypted-asset` | Encrypted Asset | Current (v1) | Upload and play back encrypted video assets. | Encryption at upload. Playback requires correct key. |
| `v1/developers/guides/access-control-webhooks` | Access Control via Webhooks | Current (v1) | Gate streams/assets with webhook-based access control. `playback.accessControl` event triggers handler; 2XX = allow, non-2XX = deny. | Event: `playback.accessControl`. Enables token gating, Lit Protocol integration. |
| `v1/developers/guides/access-control-jwt` | Access Control via JWT | Current (v1) | Gate content with JWT playback policy. Sign JWTs with private key. Pass JWT via `Livepeer-Jwt` header or query param. | `playbackPolicy: { type: TypeT.Jwt }`. JWT signing: `signAccessJwt({ privateKey, publicKey, issuer, playbackId, expiration })` from `@livepeer/core/crypto`. Player prop: `<Player.Root jwt={jwt}>`. WebRTC header: `Livepeer-Jwt`. HLS query param: `?jwt=`. |
| `v1/developers/guides/setup-and-listen-to-webhooks` | Set Up Webhooks | Current (v1) | Register and handle webhook endpoints for event notifications. | Webhook registration via API. Events: stream, asset, recording, access control. |
| `v1/developers/guides/transcode-video-storj` | Transcode to Storj | Current (v1) | Transcode a video using the Transcode API, output to Storj S3-compatible storage. | `POST /api/transcode`. Input: URL. Output: S3-compatible. Profiles: name, width, height, bitrate, fps. |
| `v1/developers/guides/transcode-video-w3s` | Transcode to Web3.Storage | Current (v1) | Transcode a video using the Transcode API, output to Web3.Storage (IPFS). | Output: `web3.storage` delegation proof. Same transcode API endpoint. |
| `v1/developers/guides/get-engagement-analytics-via-api` | Analytics via API | Current (v1) | Query viewership metrics (view count, watch time) using the Livepeer viewership API. | `GET /api/viewership`. Returns per-playback-id engagement metrics. Reporting auto-enabled in Livepeer Player. |
| `v1/developers/guides/get-engagement-analytics-via-grafana` | Analytics via Grafana | Current (v1) | Visualise Livepeer viewership data in Grafana using the viewership API as a data source. | Grafana datasource configured with Livepeer API. |
| `v1/developers/guides/get-engagement-analytics-via-timeplus` | Analytics via Timeplus | Current (v1) | Visualise engagement data using Timeplus streaming analytics. | Timeplus integration with Livepeer webhook events. |
| `v1/developers/guides/managing-projects` | Managing Projects | Current (v1) | Manage multiple projects/environments within a Studio account. | Projects API: isolate dev and prod environments. |

### Core Concepts

| Path | Title | Status | Summary | Key Technical Facts |
|------|-------|--------|---------|---------------------|
| `v1/developers/core-concepts/core-api/stream` | Stream | Current (v1) | Stream object lifecycle, sessions, recording, multistream, ingest protocols, playback. | Stream ID. Sessions API. Recording events: `recording.ready`, `recording.started`, `recording.waiting`. Ingest: RTMP (default), WebRTC, SRT. Playback: WebRTC WHEP (sub-second) with HLS fallback. B-frame warning. |
| `v1/developers/core-concepts/core-api/asset` | Asset | Current (v1) | Asset object: upload, transcode, storage, playback. | Asset ID, TUS upload, recording-as-asset. |
| `v1/developers/core-concepts/core-api/multistream` | Multistream | Current (v1) | Multi-platform streaming from a single ingest. | Multistream targets added to stream object. |
| `v1/developers/core-concepts/core-api/access-control` | Access Control | Current (v1) | Two access control modes: webhook (recommended) and JWT. | Webhook: `playback.accessControl` event. JWT: `playbackPolicy.type = "jwt"`. Supports Lit Protocol integration. |
| `v1/developers/core-concepts/studio/in-browser-broadcast` | In-Browser Broadcast | Current (v1) | Studio in-browser broadcasting feature using WebRTC WHIP. | WHIP endpoint. Broadcast component. |
| `v1/developers/core-concepts/studio/webhooks` | Webhooks | Current (v1) | Webhook system for event notifications. | Event list, registration, retry logic. |
| `v1/developers/core-concepts/studio/stream-health` | Stream Health | Current (v1) | Stream health metrics and monitoring in Studio. | Health metrics: ingest rate, active renditions. |
| `v1/developers/core-concepts/player/overview` | Player Overview | Current (v1) | Livepeer React Player component. WebRTC WHEP primary, HLS.js fallback. Embeddable at `lvpr.tv`. Auto-reports engagement metrics. | `@livepeer/react`. Embed: `https://lvpr.tv?v={playbackId}`. Player prop: `jwt`. Fallback: HLS.js. |
| `v1/developers/core-concepts/livepeer-network/orchestrators` | Orchestrators (network) | Current (v1) | Brief overview of orchestrators in the Livepeer network context. | Protocol-level concept; not Studio-specific. |
| `v1/developers/core-concepts/livepeer-network/gateways` | Gateways (network) | Current (v1) | Brief overview of gateways in the Livepeer network context. | Protocol-level concept. |
| `v1/developers/core-concepts/livepeer-network/delegators` | Delegators (network) | Current (v1) | Brief overview of delegators in the Livepeer network. | LPT staking concept. |

### Tutorials / Integrations

| Path | Title | Status | Summary | Key Technical Facts |
|------|-------|--------|---------|---------------------|
| `v1/developers/tutorials/token-gate-videos-with-lit` | Token Gate with Lit Protocol | Current (v1) | Implement token-gated video using Lit Protocol and Livepeer webhook access control. | Lit Protocol + `playback.accessControl` webhook. NFT/token ownership check in webhook handler. |
| `v1/developers/tutorials/decentralized-app-with-fvm` | Decentralised App with FVM | Current (v1) | Build a dApp using Filecoin Virtual Machine and Livepeer for video storage and playback. | FVM smart contract + Livepeer asset. |
| `v1/developers/tutorials/upload-playback-videos-on-arweave` | Upload/Playback on Arweave | Current (v1) | Store videos on Arweave and play back via Livepeer. | Arweave gateway URL as Livepeer input. |
| `v1/developers/tutorials/upload-playback-videos-on-ipfs` | Upload/Playback on IPFS | Current (v1) | Store videos on IPFS and play back via Livepeer. | IPFS CID as Livepeer input. IPFS storage option at upload. |
| `v1/developers/tutorials/upload-playback-videos-4everland` | Upload via 4everland | Current (v1) | Use 4everland (IPFS + Arweave provider) with Livepeer. | 4everland as decentralised storage provider. |

---

## V2 Content Inventory

V2 developer content lives at `v2/developers/`. It covers the full Livepeer network (AI pipelines, BYOC, ComfyStream, video streaming via Studio, gateway operation, OSS contribution). It is structured around developer personas (video app builder, AI developer, gateway operator, core contributor) rather than Studio product categories.

### Top-Level Pages

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/portal` | Developer Portal | landing | current | Hero landing page. Links to: Stream Video, Run AI Pipelines, Developer Platforms, Build on Livepeer, Contribute, Guides. | No direct technical content — navigation entry point. |
| `v2/developers/developer-journey` | Developer Journey | guide | current | Persona-based routing guide. Five tabs: video app, AI app, gateway operator, GPU operator, protocol extender. Maps to quickstarts. Zero-to-Hero progression table. Three deeper paths: Workload Provider, Workload Consumer, Core Contributor. | SDK: `livepeer` npm, `@livepeer/react`. Auth: `httpBearer`. Gateways: hosted (Studio, Daydream, Cloud SPE). Contract interaction: `livepeer-ops` (DeFine), Embody reference. go-livepeer binary for gateway/orchestrator. Arbitrum RPC + ETH wallet for on-chain gateway. |
| `v2/developers/index` | Developers Index | overview | generated | Generated table of contents for all v2/developers pages. | Navigation reference only. |

### Concepts

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/concepts/ai-on-livepeer` | AI on Livepeer | concept | draft | Defines three AI pipeline categories: Batch AI, Real-Time AI, LLM. Explains each model, billing, GPU requirements, and best-fit use cases. | **Batch pipelines**: `text-to-image` (24GB), `image-to-image` (~16GB), `image-to-video` (~16GB), `image-to-text` (4GB), `audio-to-text` (~16GB), `text-to-speech` (~16GB), `upscale` (~16GB), `segment-anything-2` (~16GB). Access via AI Gateway API. **Real-time AI**: persistent WebRTC/RTMP stream, per-second billing, dedicated GPU. Tool: ComfyStream. Use: live style transfer, avatars, overlays, agents. **LLM**: Ollama-based, OpenAI-compatible. VRAM: 8GB minimum. |
| `v2/developers/concepts/developer-stack` | The Livepeer Developer Landscape | concept | draft | Maps five access layers: Studio API, Daydream API, AI Gateway API, ComfyStream, Protocol Layer. Explains when to use each. | Studio: `@livepeer/sdk`, API key from livepeer.studio dashboard. Daydream: pipelines.livepeer.org. AI Gateway: `https://livepeer.studio/api/beta/generate`, Bearer auth. ComfyStream: Docker `livepeer/comfystream`, RunPod template, Ansible. Protocol: `go-livepeer`, `livepeer-protocol` (Solidity on Arbitrum), `ai-worker` (Python Docker). |
| `v2/developers/concepts/oss-stack` | The Livepeer OSS Stack | concept | draft | Maps main repos: go-livepeer (Go), livepeer-protocol (Solidity), ai-worker (Python), comfystream (Python), pytrickle (Python), livepeer.js/ui-kit (TS/React), docs (MDX). | go-livepeer spawns `ai-runner` Docker containers per GPU. comfystream uses `pytrickle` trickle protocol. livepeer.js is independent of AI/protocol stack. SPEs: Cloud SPE, MuxionLabs/AI SPE, Sidestream, GovWorks, Streamplace. |
| `v2/developers/concepts/running-a-gateway` | When to Run Your Own Gateway | concept | draft | Decision framework: hosted API vs self-hosted gateway. Covers two gateway types (AI off-chain, video on-chain). Checklist of requirements. | AI gateway: Linux or Docker, no ETH required, port 8937, ~15 min with Docker, run `livepeer/go-livepeer:master`. Video gateway: Linux, ETH + Arbitrum RPC required. Public gateway: `dream-gateway.livepeer.cloud`. |
| `v2/developers/concepts/video-on-livepeer` | Video on Livepeer | concept | draft | **EMPTY** — placeholder only. `{/* Content to be written. Phase 2 content task. */}` | No content. |

### Get Started

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/get-started/ai-quickstart` | AI Jobs Quickstart | quickstart | draft (awaiting stakeholder signoff) | Submit first AI inference job via AI gateway. Text-to-image as starter flow. Covers auth, request shape, response shape, troubleshooting. | Base URL: `https://livepeer.studio/api/beta/generate`. Auth: `Authorization: Bearer <LIVEPEER_STUDIO_API_KEY>`. Endpoint: `POST /text-to-image`. Body: `{ model_id, prompt, width, height, num_images_per_prompt }`. Response: `{ images: [{ url, seed, nsfw }] }`. Health check: `GET /health`. All other AI endpoints follow same auth/base URL: `image-to-image`, `image-to-video`, `upscale`, `audio-to-text`, `segment-anything-2`, `llm`, `image-to-text`, `live-video-to-video`, `text-to-speech`. **BLOCKED**: `model_id` default value requires stakeholder sign-off. |
| `v2/developers/get-started/comfystream-quickstart` | ComfyStream Quickstart | tutorial | draft | Three install paths: RunPod (fastest), Docker, local. Load a workflow, run StreamDiffusion. Connect to Livepeer network via Daydream API or BYOC. | RunPod template: `runpod.io/console/deploy?template=w01m180vxx`. Docker: `docker pull livepeer/comfystream`. Ports: 8188 (ComfyUI), 8889 (ComfyStream UI). Local: `conda create -n comfystream python=3.12`, `pip install git+https://github.com/livepeer/comfystream.git`. Server: `python server/app.py --workspace /path/to/ComfyUI`. WebRTC UDP ports 1024–65535 for remote. TRT compilation: 2–5 min first run. **BLOCKED**: OQ-D1 — framing (standalone vs Livepeer-connected) needs Peter/Rick confirmation. |
| `v2/developers/get-started/transcoding-quickstart` | Transcoding Jobs Quickstart | quickstart | draft (awaiting Rick review) | Submit transcoding job via Studio API, poll Tasks API for completion. | Base URL: `https://livepeer.studio/api`. Auth: `Authorization: Bearer <LIVEPEER_API_KEY>`. Submit: `POST /transcode`. Body: `{ input: { url }, storage, outputs: { hls, mp4 }, profiles }`. Storage: S3-compatible (`type: "s3"`, `endpoint`, `bucket`, `credentials`). Profiles: `{ name, width, height, bitrate, fps }`. Poll: `GET /task/{id}`. Phases: `pending`, `waiting`, `running`, `failed`, `completed`, `cancelled`. |
| `v2/developers/get-started/video-quickstart` | Quickstart: Video Streaming | tutorial | draft | **EMPTY** — placeholder. Source material: `_archive/quickstart-video-hub.mdx`. | No content written. |
| `v2/developers/get-started/setup-paths` | How to Get Started | landing | draft | **EMPTY** — placeholder. Reference: content brief 03. | No content written. |
| `v2/developers/get-started/contributor-quickstart` | Contributor Quickstart | guide | draft | Short guide to choosing the right repo (go-livepeer, ai-worker/comfystream/pytrickle, docs) and making a first PR. Links to OSS Stack, Contribution Guide, OSS Opportunities. | Repos: `go-livepeer`, `ai-worker`, `comfystream`, `pytrickle`, `livepeer/docs`. |

### Build

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/build/byoc` | Bring Your Own Container (BYOC) | how_to | draft | Full guide to building a custom AI container using PyTrickle's `FrameProcessor` API, dockerising it, and deploying to the Livepeer network. Covers REST API contract, local testing, registry push, orchestrator deployment, and client SDK. | PyTrickle install: `pip install git+https://github.com/livepeer/pytrickle.git`. Class: `FrameProcessor`. Methods: `initialize()`, `process_video_async(frame: VideoFrame)`, `process_audio_async(frame: AudioFrame)`, `update_params(params)`. REST endpoints: `POST /api/stream/start`, `POST /api/stream/params`, `GET /api/stream/status`, `POST /api/stream/stop`. Local test: `http-trickle` server at port 3389. Docker base: `nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04`. Container port: 8000. Client SDK: `@muxionlabs/byoc-sdk` (`BYOCClient`). Phase 4 production-hardened Jan 2026. Embody SPE and Streamplace running production BYOC. **BLOCKED**: exact go-livepeer orchestrator flags for BYOC registration not confirmed. |
| `v2/developers/build/comfystream` | Build with ComfyStream | guide | draft | Reference for ComfyStream pipeline modes, node ecosystem, custom workflow format, data-channel output, performance tuning. Assumes quickstart completed. | Pipeline modes: image-to-image (live), video-to-video, audio processing, data-channel output. Core I/O nodes: `LoadTensor`, `LoadAudioTensor`. Real-time control: `FloatControl`, `IntControl`, `StringControl`, `FloatSequence`, `IntSequence` (from `ComfyUI_RealtimeNodes`). StreamDiffusion nodes (Phase 4): `StreamDiffusionCheckpoint`, `StreamDiffusionConfig`, `StreamDiffusionSampler`, `StreamDiffusionLPCheckpointLoader`, `StreamDiffusionTensorRTEngineLoader`. SuperResolution node: Phase 4. AudioTranscription (Whisper): SRT burn-in or data-channel text. Custom workflows require API-format JSON (Developer Mode in ComfyUI). TRT compilation: 2–10 min, one-time per machine. Phase 4 perf: SD1.5 + DMD + DepthControlNet ~14–15fps at 640x360 on RTX 4090. Dynamic warm-up added Phase 4. Server params: `--workspace`, `--media-ports`. |
| `v2/developers/build/model-support` | AI Model Support | reference | draft | Reference tables for all batch AI pipelines (model architecture, warm model, min VRAM, status) plus real-time AI and BYOC paths. | See detailed table below in Technical Facts. Status: all pipelines Beta. LLM: Ollama, 8GB min VRAM, OpenAI-compatible. Cold start: 30s–minutes. Warm model signalling: orchestrators advertise to gateway. `model_id` = HuggingFace repo path. LLM: HF path maps to Ollama name internally. |
| `v2/developers/build/sdk-gateway` | SDK / Gateway Client | guide | draft | **EMPTY** — placeholder. Research notes reference: `livepeer-python-gateway` (j0sh), NaaP, go-livepeer PRs #3791/#3822 (remote signer Jan 2026). Content covers Python/JS/mobile gateway client, remote signer, NaaP/API key auth. | No content written yet. SME: j0sh. Public signer: `signer.eliteencoder.net` (community). |
| `v2/developers/build/workload-fit` | Is My AI Workload a Good Fit? | concept | current | Decision tree for workload fit on Livepeer. Capability matrix by category. Gateway vs orchestrator responsibilities. ASR pipeline examples. Batch vs streaming framing. | Livepeer optimised for streaming, GPU-bound, low-latency inference (<500ms). Best fit: audio ASR/live translation, vision (depth, pose, segmentation), video-to-video/diffusion/effects. Poor fit: CPU tasks, file-to-file (YouTube→MP3), batch LLM inference. Streaming reframe pattern. |

### Developer Tools

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/developer-tools/dashboards` | Community & Network Dashboards | — | stub (⚠) | Likely stub/placeholder. | — |
| `v2/developers/developer-tools/gateways` | Gateways | — | stub (⚠) | Likely stub/placeholder. | — |
| `v2/developers/developer-tools/livepeer-cloud` | Livepeer Tools Dashboard | — | stub (⚠) | Likely stub/placeholder. | — |
| `v2/developers/developer-tools/livepeer-explorer` | Livepeer Explorer | — | stub (⚠) | Likely stub/placeholder. | — |
| `v2/developers/developer-tools/tooling-hub` | Tooling Hub | — | stub (⚠) | Likely stub/placeholder. | — |

### Guides

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/guides/developer-guides` | Developer Guides | guide | current | Curated library of community and official guides. Grouped: Getting Started, Video Streaming/VOD, Full-Stack App, AI Inference/Real-Time AI, SDK/API, Node Operations, Community Resources. | Links to Hashnode, HackerNoon, GitHub tutorials from 2021–2025. AI guides: ComfyStream, Daydream API, AI SDK (JS/Python). No new original content — aggregation page. |
| `v2/developers/guides/developer-help` | Developer Help | faq | current | Every support channel mapped to use case: Discord channels (`#lounge`, `#ai-research`, `#delegating`, `#governance`), Forum categories, Office Hours (bi-weekly), GitHub Issues (per repo), Studio support, Immunefi bug bounty. | Discord: `discord.gg/livepeer`. Forum: `forum.livepeer.org`. Bug bounty: `immunefi.com/bug-bounty/livepeer`. USDC rewards, KYC required. |
| `v2/developers/guides/resources` | Resources | guide | current | Curated tools, dashboards, SDKs, reading, security resources, grants. | SDK list: `livepeer` (JS/TS), `livepeer-python`, `@livepeer/ai` (JS), `livepeer-ai-python`, `@livepeer/react`, `livepeer/go-livepeer`, Protocol Contracts SDK. Dashboards: Dune, Messari, Web3 Index, livepeer.tools. Key blogs: Cascade vision (Feb 2025), Network Vision update (Nov 2025), Daydream Beta (Sep 2025). |
| `v2/developers/guides/contribution-guide` | Contribution Guide | guide | current | How to contribute: code, docs, governance, community, bug reports. PR workflow (fork `docs-v2`, branch `docs-plan/`, pre-commit checks). Conventional Commits. Grants: Open Network and Video Disruptor tracks. | Docs branch: `docs-v2`. Test: `./tools/lpd hooks run` or `node operations/tests/run-pr-checks.js --base-ref docs-v2`. UK English. No inline styles. Import: `@livepeer/react` uses `@livepeer/core/crypto`. |

### Opportunities

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/opportunities/overview` | Builder Opportunities | overview | current | Maps opportunity types to developer profiles: App Builder, AI Workflow Creator, Team/Org (SPE/RFP), Protocol Contributor, Orchestrator/GPU Provider, Security Researcher. | Programmes: Grants, RFPs/Treasury Proposals, OSS Contributions, Bug Bounties. Source of truth: livepeer.org/dev-hub. |
| `v2/developers/opportunities/grants-and-programmes` | Grants & Programmes | — | (not read; exists per index) | AI Video Startup Programme, Quick Start microgrants, supply-side grants, hackathons, ComfyUI Live Video Hacker Programme. | — |
| `v2/developers/opportunities/rfps-and-proposals` | RFPs & Treasury Proposals | — | (not read) | Foundation RFPs, SPE proposals to on-chain treasury. | — |
| `v2/developers/opportunities/oss-contributions` | Open Source Contributions | — | (not read) | Current open roles, bounties, SPE opportunities. | — |
| `v2/developers/opportunities/bug-bounties` | Bug Bounties | — | (not read) | Immunefi programme for smart contract vulns. USDC rewards. | — |

### Resources

| Path | Title | pageType | Status | Summary | Key Technical Facts |
|------|-------|----------|--------|---------|---------------------|
| `v2/developers/resources/sdks` | SDKs | landing | current | Two-track SDK reference: Studio SDKs (TS/Go/Python/React) and Gateway Client SDK Guide (BYOC/remote signer). Points to canonical pages. | Studio SDK landing. Gateway Client: `sdk-gateway` guide. AI API portal. |
| `v2/developers/resources/apis` | APIs | landing | current | Two-track API reference: Studio API (`https://livepeer.studio/api`) and AI API portal. | Studio API base: `https://livepeer.studio/api`. AI API portal: `/v2/gateways/resources/technical/api-reference/AI-API/ai`. |
| `v2/developers/resources/awesome-livepeer` | Awesome Livepeer | — | (not read; redirect/link) | Points to `github.com/livepeer/awesome-livepeer`. `livepeer.cool` shortcut. | — |
| `v2/developers/resources/deepwiki` | DeepWiki | — | (not read; redirect/link) | Points to `deepwiki.com/livepeer`. | — |
| `v2/developers/resources/wiki` | Livepeer Wiki | — | (not read; redirect/link) | Points to Livepeer wiki. | — |

### Technical References (compatibility routes)

All five pages in `v2/developers/technical-references/` are compatibility routes that point to the canonical pages in `v2/developers/resources/`. They contain no original content — just forwarding cards.

---

## Migration Gap Analysis

### In v1 but not v2

These topics exist in v1 with full content but have no corresponding v2 page:

| Topic | v1 Path | Notes |
|-------|---------|-------|
| **VOD upload guide** (step-by-step, TUS) | `guides/upload-video-asset` | v2 video-quickstart is empty placeholder |
| **Playback — asset** (Player component, embed) | `guides/playback-an-asset` | No v2 equivalent; would belong in video/VOD section |
| **Playback — livestream** (WebRTC WHEP, HLS fallback) | `guides/playback-a-livestream` | No v2 equivalent |
| **OBS streaming guide** | `guides/stream-via-obs` | No v2 equivalent |
| **In-browser broadcast guide** | `guides/livestream-from-browser` | No v2 equivalent |
| **Stream health monitoring** | `guides/monitor-stream-health` | No v2 equivalent |
| **Multistream** | `guides/multistream` | No v2 equivalent |
| **Clip a livestream** | `guides/clip-a-livestream` | No v2 equivalent |
| **Thumbnails (VOD + Live)** | `guides/thumbnails-vod`, `guides/thumbnails-live` | No v2 equivalent |
| **Encrypted assets** | `guides/encrypted-asset` | No v2 equivalent |
| **JWT access control** (full code walkthrough) | `guides/access-control-jwt` | No v2 equivalent |
| **Webhook access control** | `guides/access-control-webhooks` | No v2 equivalent |
| **Webhooks setup** | `guides/setup-and-listen-to-webhooks` | No v2 equivalent |
| **Transcode API** (Storj, Web3.Storage) | `guides/transcode-video-storj`, `transcode-video-w3s` | v2 transcoding-quickstart exists but has different scope |
| **Viewership analytics** (API, Grafana, Timeplus) | `guides/get-engagement-analytics-*` | No v2 equivalent |
| **Projects management** | `guides/managing-projects` | No v2 equivalent |
| **Stream concept** (full lifecycle) | `core-concepts/core-api/stream` | v2 video-on-livepeer is empty placeholder |
| **Asset concept** | `core-concepts/core-api/asset` | No v2 equivalent |
| **Player component reference** | `core-concepts/player/overview` | No v2 equivalent |
| **Token gating with Lit** | `tutorials/token-gate-videos-with-lit` | No v2 equivalent |
| **FVM integration** | `tutorials/decentralized-app-with-fvm` | No v2 equivalent |
| **Arweave/IPFS storage tutorials** | `tutorials/upload-playback-videos-*` | No v2 equivalent |
| **CLI** (`npx @livepeer/create`) | `livepeer-studio-cli` | No v2 equivalent |
| **API key creation walkthrough** | `quick-start` | v2 AI quickstart and transcoding quickstart cover auth but no dedicated "get your API key" page |

### In v2 but not v1

These are new v2 topics with no v1 equivalent:

| Topic | v2 Path | Notes |
|-------|---------|-------|
| **AI pipeline categories** (Batch, Real-Time, LLM) | `concepts/ai-on-livepeer` | Entirely new; v1 had no AI content |
| **Developer landscape / layer selection** | `concepts/developer-stack` | New framing for v2 |
| **OSS stack map** (go-livepeer, ai-worker, comfystream, etc.) | `concepts/oss-stack` | New |
| **When to run your own gateway** | `concepts/running-a-gateway` | New |
| **BYOC — full implementation guide** | `build/byoc` | New |
| **Build with ComfyStream** | `build/comfystream` | New |
| **AI model support reference** | `build/model-support` | New |
| **Workload fit decision framework** | `build/workload-fit` | New |
| **ComfyStream quickstart** | `get-started/comfystream-quickstart` | New |
| **Developer journey** (persona routing) | `developer-journey` | New |
| **Builder opportunities** section | `opportunities/*` | Formalised in v2 |
| **Contributor quickstart + contribution guide** | `get-started/contributor-quickstart`, `guides/contribution-guide` | New |

### In both v1 and v2

These topics exist in both versions with overlapping intent:

| Topic | v1 Path | v2 Path | Notes |
|-------|---------|---------|-------|
| **Create livestream** | `guides/create-livestream` | `get-started/video-quickstart` (EMPTY) | v2 page is a placeholder; source material archived at `_archive/quickstart-video-hub.mdx` |
| **Transcoding** | `guides/transcode-video-storj` | `get-started/transcoding-quickstart` | v2 is more complete; covers S3 output, task polling |
| **SDK reference** | `introduction` (SDK list) | `resources/sdks` | v2 splits Studio SDK vs Network SDK more clearly |
| **API reference** | links to `/api-reference/` | `resources/apis` | v2 splits Studio API vs AI API |
| **Getting started / quickstart** | `quick-start` | `get-started/ai-quickstart`, `get-started/video-quickstart` | v1: single Studio quickstart. v2: separate AI and video paths |
| **Developer guides index** | `guides/overview` | `guides/developer-guides` | v2 version is richer (external links, AI section, full-stack tutorials) |
| **Help / support** | (no equivalent) | `guides/developer-help` | v2 is more complete |
| **Resources** | `v1/references/awesome-livepeer`, `example-applications` | `guides/resources`, `resources/awesome-livepeer` | v2 significantly expanded |

---

## Technical Facts Extracted

### API Endpoints

**Livepeer Studio API** — base URL: `https://livepeer.studio/api`
- `POST /transcode` — submit transcoding job
- `GET /task/{id}` — poll task status
- `POST /stream` / `livepeer.stream.create()` — create livestream
- `GET /playback/{playbackId}` / `livepeer.playback.get()` — fetch playback info
- `POST /asset` / `livepeer.asset.create()` — create TUS upload endpoint
- `GET /viewership` — viewership metrics
- `POST /stream/{id}/clip` — clip a livestream
- Multistream targets: `addMultistreamTarget`

**Livepeer AI Gateway API** — base URL: `https://livepeer.studio/api/beta/generate`
- `GET /health` — health check
- `POST /text-to-image` — batch image generation
- `POST /image-to-image` — style transfer, img2img
- `POST /image-to-video` — animate image to video
- `POST /image-to-text` — caption/describe image
- `POST /audio-to-text` — speech recognition (Whisper)
- `POST /text-to-speech` — TTS generation
- `POST /upscale` — image upscaling
- `POST /segment-anything-2` — visual segmentation
- `POST /llm` — LLM text inference (OpenAI-compatible)
- `POST /live-video-to-video` — real-time stream transformation

**BYOC REST API** (exposed by PyTrickle inside container) — port 8000 default:
- `POST /api/stream/start` — start processing session
- `POST /api/stream/params` — update params mid-stream
- `GET /api/stream/status` — session status
- `POST /api/stream/stop` — stop session

### Authentication Patterns

| Context | Auth method |
|---------|-------------|
| Livepeer Studio API | `Authorization: Bearer <LIVEPEER_STUDIO_API_KEY>` (backend only) |
| Livepeer AI Gateway API | `Authorization: Bearer <LIVEPEER_STUDIO_API_KEY>` |
| JWT content access control | `Livepeer-Jwt` header (WebRTC/HLS) or `?jwt=` query param (HLS/MP4) |
| Webhook access control | `playback.accessControl` event — 2XX = allow, non-2XX = deny |
| SDK client | `new Livepeer({ apiKey })` |

### SDK Methods

**TypeScript/JavaScript SDK (`livepeer` npm)**:
- `livepeer.stream.create(data)` — create stream
- `livepeer.asset.create(data)` — create upload endpoint
- `livepeer.playback.get(playbackId)` — get playback info
- `getSrc(playbackInfo)` from `@livepeer/react/external` — convert to src array

**React components (`@livepeer/react`)**:
- `<Player.Root>`, `<Player.Container>`, `<Player.Video>`, `<Player.Controls>`, `<Player.PlayPauseTrigger>`, `<Player.PlayingIndicator>`
- `<Broadcast>` component for WHIP broadcasting
- JWT prop: `<Player.Root jwt={jwt}>`

**PyTrickle (`livepeer/pytrickle`)**:
- `FrameProcessor` base class: `initialize()`, `process_video_async()`, `process_audio_async()`, `update_params()`
- `StreamServer(frame_processor, port, capability_name)` — REST API + trickle server
- `VideoFrame.tensor` — PyTorch tensor (H,W,C)
- `frame.replace_tensor(processed)` — return processed frame

**BYOC client SDK (`@muxionlabs/byoc-sdk`)**:
- `new BYOCClient({ gatewayUrl, capability })` — gateway client
- `client.startStream({ videoElement, params })` — WebRTC stream start

### Compute and Environment Facts

| Pipeline | VRAM | Warm model | Status |
|----------|------|------------|--------|
| text-to-image | 24 GB | `SG161222/RealVisXL_V4.0_Lightning` | Beta |
| image-to-image | 20 GB | `timbrooks/instruct-pix2pix` | Beta |
| image-to-video | ~unconfirmed | `stabilityai/stable-video-diffusion-img2vid-xt` | Beta |
| image-to-text | 4 GB | `Salesforce/blip-image-captioning-large` | Beta |
| audio-to-text | 12 GB | `openai/whisper-large-v3` | Beta |
| text-to-speech | ~12 GB | unconfirmed | Beta |
| upscale | 24 GB | `stabilityai/stable-diffusion-x4-upscaler` | Beta |
| segment-anything-2 | 6 GB | `facebook/sam2-hiera-large` | Beta |
| LLM | 8 GB min | `meta-llama/Meta-Llama-3.1-8B-Instruct` | Beta |
| live-video-to-video (ComfyStream) | variable; 8–24GB | any ComfyUI-compatible model | Beta |

**ComfyStream performance** (community-tested, RTX 4090):
- SD1.5 + DMD + DepthControlNet: ~14–15fps at 640x360
- TRT compilation: 2–10 min first run, skipped on reload

**BYOC infrastructure**:
- Base image: `nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04`
- Container port: 8000
- trickle protocol test server: `http-trickle` (port 3389)
- Phase 4 production-ready: January 2026
- Production users: Embody SPE, Streamplace

### Ingest and Transport Protocols

- RTMP ingest: `rtmp://rtmp.livepeer.com/live` (OBS etc.)
- WebRTC WHIP broadcast: `https://playback.livepeer.studio/webrtc/{streamKey}`
- WebRTC WHEP playback: default for Livepeer Player
- HLS: fallback; triggered by B-frames or WebRTC failure
- SRT: supported for ingest
- Trickle protocol: used by ComfyStream/BYOC for real-time AI streams
- WebRTC data channel: used for text output from ComfyStream (Phase 4)

### Integration Patterns

- **Heroku → AWS → own datacenter** graduation arc for gateway adoption (Nov 2025 blog)
- Off-chain AI gateway: no ETH required; on-chain video gateway: requires ETH + Arbitrum RPC
- Cold start: model not in VRAM; 30s–minutes. Warm model: immediate.
- Warm model signalling: orchestrators advertise warm models to gateway; gateway routes to matching orchestrator
- Multi-model hosting on single container: dynamic warm-up (Phase 4)

---

## S6 Split Context

S6 refers to the structural decision about whether to split the Developers section into two sub-paths: **Real-Time AI** and **Custom Compute (BYOC)**, or keep them unified.

This is a blocking human decision. The following content inventory directly bears on it.

### What is the split question?

The current v2 Developers section combines:
1. Real-time AI streaming content (ComfyStream, `live-video-to-video`, Daydream)
2. Custom compute content (BYOC, PyTrickle, custom Docker containers, earning fees as an AI worker)

These two paths share ComfyStream as a connection point (ComfyStream can be used both as a real-time AI pipeline tool and as a BYOC container), but they target meaningfully different developer personas:

| Dimension | Real-Time AI developer | Custom Compute / BYOC developer |
|-----------|----------------------|----------------------------------|
| Goal | Build real-time AI video experiences, use existing pipeline tools | Run custom models on the network, earn fees, contribute new pipeline types |
| Infrastructure required | Local or cloud GPU; can use Daydream hosted API | Own GPU, Docker, go-livepeer orchestrator access |
| Primary tool | ComfyStream (can use Daydream managed) | PyTrickle FrameProcessor, custom Docker container |
| Livepeer account/ETH | Not required for Daydream path | Not required for off-chain AI gateway |
| Production complexity | Low–Medium | High |
| Entry point | ComfyStream Quickstart | BYOC guide |
| Current v2 pages | `concepts/ai-on-livepeer`, `get-started/comfystream-quickstart`, `build/comfystream` | `build/byoc`, `build/workload-fit` |

### Content that supports the Real-Time AI sub-path

- `concepts/ai-on-livepeer` — defines real-time AI as a category; explains ComfyStream architecture; `live-video-to-video` pipeline type
- `get-started/comfystream-quickstart` — RunPod/Docker/local setup; connects to Daydream API or BYOC
- `build/comfystream` — pipeline modes, node ecosystem (StreamDiffusion, SuperResolution, AudioTranscription), data-channel output, performance tuning, TRT compilation
- `build/workload-fit` — real-time streaming as the primary Livepeer use case
- `developer-journey` Tab 2 ("I want to run AI on video") — ComfyStream and Daydream as the recommended path
- Archive: `_workspace/archive/livepeer-real-time-video/` — contains `video-streaming-101.mdx`, `streamdiffusion.mdx`, `frameworks-spe.mdx`, `page-1.mdx`

### Content that supports the Custom Compute / BYOC sub-path

- `build/byoc` — full PyTrickle FrameProcessor implementation, Docker container spec, REST API contract, deployment to orchestrator, client SDK
- `concepts/oss-stack` — PyTrickle, ai-worker, go-livepeer as the underlying layer
- `concepts/running-a-gateway` — self-hosted gateway prerequisite for some BYOC deployments
- `build/sdk-gateway` — EMPTY placeholder; covers Python gateway client, remote signer (j0sh's `livepeer-python-gateway`, NaaP)
- `developer-journey` Workload Provider path — BYOC as the "standard route"
- Archive: `_workspace/archive/ai-pipelines-byoc-old.mdx`, `ai-pipelines-comfystream-old.mdx`, `ai-pipelines-model-support-old.mdx`, `ai-inference-workload-fit-old.mdx`
- Context data drafts: `_workspace/context-data/Developers_new/build-byoc-draft.mdx`, `build-comfystream-draft.mdx`, `oss-stack-draft.mdx`, `running-a-gateway-draft.mdx`

### The ComfyStream overlap point

ComfyStream sits at the intersection of both paths:
- **As real-time AI tool**: developers use ComfyStream to build live video AI pipelines with ComfyUI workflows. This does not require BYOC or network registration. The Daydream API provides this as a managed service.
- **As BYOC container**: ComfyStream can be packaged as a BYOC worker (using `muxionlabs/comfystream` image), registered with a go-livepeer orchestrator, and used to earn network fees. This requires the BYOC/PyTrickle path.

This dual role means that if S6 is split, ComfyStream content must either:
1. Appear in both sub-paths (duplicated or cross-linked)
2. Live in one sub-path with cross-references to the other
3. Remain in a shared "Build" section below the split

### Content currently referencing the split point

From `comfystream-quickstart.mdx` (BLOCKED — OQ-D1):
> "Running ComfyStream locally gets you a working real-time AI pipeline. To deploy that pipeline on the Livepeer network — making it accessible to other applications or earning compute fees — there are two paths: **Daydream API** (hosted) or **BYOC worker** (self-hosted, earn fees)."

From `build/byoc.mdx`:
> "ComfyStream as a BYOC container: ComfyStream is already integrated with PyTrickle (Phase 4). To run ComfyStream as a BYOC worker, use the `muxionlabs/comfystream` image."

From `developer-journey.mdx` (Workload Provider path):
> "BYOC is the clearest path for most builders. Package the workload, understand the pipeline model, and validate the routing flow end to end."

### Archive pages relevant to S6

- `_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/streamdiffusion.mdx` — StreamDiffusion real-time AI
- `_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/frameworks-spe.mdx` — Frameworks SPE
- `_workspace/archive/ai-pipelines-byoc-old.mdx` — old BYOC approach
- `_workspace/archive/ai-pipelines-comfystream-old.mdx` — old ComfyStream content
- `_workspace/archive/ai-inference-overview-old.mdx` — old AI inference overview
- `_workspace/archive/ai-pipelines-overview-old.mdx` — old pipeline overview
- `_workspace/archive/quickstart-ai-hub.mdx` — old AI quickstart hub

### Human decision required

Before writing can proceed on the real-time AI and BYOC pages, a decision is needed on:

1. **Split or unified?** Should real-time AI (ComfyStream, Daydream) and custom compute (BYOC, PyTrickle) be presented as separate sub-paths in the Developers section, or as sequential stages in a single "AI on Livepeer" build path?

2. **ComfyStream placement**: If split, does ComfyStream belong in Real-Time AI (where it is the primary tool), in Custom Compute (where it is a BYOC option), or in both?

3. **Entry point framing**: Does the developer first choose a *tool* (ComfyStream vs custom container) or a *deployment target* (Daydream API vs own network worker)? The current `ai-on-livepeer` concept page organises by *pipeline category* (batch, real-time, LLM), which is a third framing option.

4. **Earning fees as a first-class path**: BYOC is currently framed as an advanced option for production workload providers. Should it be elevated as a separate "earn fees with AI" path, or kept subordinate to the "build AI experiences" path?

---

## Open Questions for Content Writers

### Structural / Architectural (Blocking)

1. **OQ-D1 (ComfyStream Quickstart)**: Should the ComfyStream quickstart frame Livepeer network connection as mandatory (from the start) or optional (add-on at the end)? Confirm with Peter/Rick before publishing. Currently the draft treats ComfyStream as standalone-first with Livepeer connection as a follow-up step.

2. **S6 split**: See full context above. Real-time AI vs Custom Compute — split or unified? Human decision required.

3. **`video-on-livepeer` concept page**: This is an empty placeholder marked "Phase 2 content task." It is the only conceptual foundation page for the video use case and has no content. Should it cover the full video stack (RTMP, WebRTC, HLS, transcoding, Studio, Player)? Or redirect to Studio docs?

4. **`video-quickstart` page**: Empty placeholder. Source material in `_archive/quickstart-video-hub.mdx`. Does the video quickstart belong in the Developers tab or in the Studio/Solutions section?

5. **`setup-paths` page**: Empty placeholder (content brief 03). What is the intended structure for this page? It is meant to be the "How to Get Started" landing — does it replace or supplement the `developer-journey` page?

### Technical (Need SME Confirmation)

6. **AI quickstart `model_id` default**: What is the approved user-facing example `model_id` for `text-to-image`? Required for the quickstart to be publishable. Confirm with Rick/Mehrdad.

7. **BYOC go-livepeer flags**: What are the exact go-livepeer CLI flags to register a BYOC container with an orchestrator? Placeholder flags used in current draft. Confirm with Rick.

8. **ComfyStream VRAM minimum**: What is the confirmed minimum VRAM for ComfyStream to function? Likely 8–16GB depending on workflow. Confirm from `docs.comfystream.org` or Rick.

9. **ComfyStream ports**: Confirm exact ports: is it `8188` (ComfyUI) and `8889` (ComfyStream UI)? Or different?

10. **`sdk-gateway` content**: This page is empty. j0sh is the SME for `livepeer-python-gateway`, NaaP, and the remote signer PRs (#3791, #3822). The public signer `signer.eliteencoder.net` is community-maintained — confirm whether it should be surfaced in official docs.

11. **LLM pipeline status**: Is the LLM pipeline production-ready or still Beta? Multiple review flags in `ai-on-livepeer` and `model-support` note this needs confirmation.

12. **`live-video-to-video` production status**: Functional but feature-incomplete per go-livepeer CHANGELOG. Confirm current stability level with Rick before marking as production-ready.

13. **Daydream API auth**: Does the Daydream API use a separate account/key from the Studio AI API, or shared auth? Confirm with Peter or Joseph.

14. **Studio AI endpoints**: Does Studio expose any AI endpoints beyond `api/beta/generate` (e.g. content moderation, clip generation)? Confirm with Rick/Mehrdad.

15. **`image-to-video` VRAM**: Minimum VRAM for SVD-XT not confirmed in v2 docs. SVD-XT needs ~80GB on A100 per HuggingFace model card; what is the Livepeer-published minimum?

### Content Strategy

16. **v1 → v2 migration scope**: Which v1 developer guides need migration to v2? The VOD guides (upload, playback, access control, webhooks) are detailed and currently have no v2 equivalent. Are these migrating to the Studio/Solutions section, or to Developers?

17. **Tutorials section**: v1 had tutorials for Lit Protocol token gating, FVM, Arweave, IPFS, and 4everland. Is there a v2 equivalent planned? These are Web3 integrations that may be lower priority for the current v2 focus.

18. **CLI page**: v1 has `npx @livepeer/create`. Is this still the recommended scaffold tool for v2? No v2 equivalent page exists.

19. **Developer Tools stubs**: Five pages (`dashboards`, `gateways`, `livepeer-cloud`, `livepeer-explorer`, `tooling-hub`) are all marked with ⚠ in the index, suggesting stub status. What is the plan for these?

20. **Technical References section**: Currently five compatibility-route pages that redirect to Resources. Is this section planned for expansion, or should it be collapsed into Resources?
