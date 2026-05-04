# Developer content map

All content sources, v1-to-v2 migration mapping, per-persona journey maps, and content source matrix for the Livepeer Developers tab.

---

## 1. Complete content inventory: v2 current state

All files confirmed from `docs-v2-dev` branch, April 2026.

### Root level
| File | Size | Content summary | Quality |
|---|---|---|---|
| `portal.mdx` | 5.4KB | Hero entry point, section cards | ⚠️ Card hrefs need audit |
| `developer-journey.mdx` | 13.6KB | 5-path journey map (tabs: video, AI, gateway, GPU, protocol) | ✅ Strong |
| `index.mdx` | 3.8KB | Tab routing/index | ✅ Functional |

### concepts/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `developer-stack.mdx` | 10.6KB | 3-layer access model, decision table per build path | ✅ Strong |
| `ai-on-livepeer.mdx` | 8.7KB | AI pipeline overview, batch vs real-time, 9 pipelines | ✅ Strong |
| `video-on-livepeer.mdx` | 572B | **STUB** | 🔴 Must write |
| `oss-stack.mdx` | 8.1KB | OSS repos, architecture, contribution paths | ✅ Good |
| `running-a-gateway.mdx` | 5.7KB | Gateway from developer perspective, when to self-host | ✅ Good |

### get-started/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `setup-paths.mdx` | 559B | **STUB** | 🔴 Must write |
| `ai-quickstart.mdx` | 5.6KB | First text-to-image call, error handling | ✅ Good |
| `transcoding-quickstart.mdx` | 6.3KB | Create stream, RTMP ingest, HLS playback | ✅ Good |
| `comfystream-quickstart.mdx` | 10.8KB | ComfyStream install, SD1.5 workflow, webcam stream | ✅ Good |
| `contributor-quickstart.mdx` | 2.6KB | Clone go-livepeer, local testnet setup | ⚠️ Thin |
| `video-quickstart.mdx` | 582B | **STUB** — resolve with transcoding-quickstart | 🔴 Resolve |

### build/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `workload-fit.mdx` | 9KB | Decision tree: Studio vs ComfyStream vs BYOC | ✅ Strong |
| `comfystream.mdx` | 12.5KB | ComfyStream guide, supported models, deployment options | ✅ Good |
| `byoc.mdx` | 12.8KB | BYOC architecture, container interface, FrameProcessor | ✅ Good — needs PyTrickle |
| `sdk-gateway.mdx` | 1.8KB | SDK vs direct REST introduction | 🔴 Critically thin |
| `model-support.mdx` | 10.2KB | Pipeline list, warm models, VRAM requirements, model IDs | ✅ Good |

### guides/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `developer-guides.mdx` | 13.4KB | Guide hub, curated links by topic | ✅ Good |
| `developer-help.mdx` | 11.9KB | Discord channels, forum, GitHub, status page | ✅ Good |
| `contribution-guide.mdx` | 11.3KB | OSS contribution by repo, PR process, issue types | ✅ Good |
| `local-testnet-deployment.mdx` | 10.5KB | Full local testnet with orchestrator + gateway | ✅ Good |
| `resources.mdx` | 14.1KB | Guide index + external resource links | ✅ Good |
| `testnet-contract-deployment.mdx` | 19.1KB | Protocol contract deployment to testnet | ✅ Good — advanced |

### opportunities/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `overview.mdx` | 6.6KB | Builder opportunities overview | ✅ Good |
| `grants-and-programmes.mdx` | 12.2KB | Foundation grants, hackathons, bootcamps | ✅ Good |
| `rfps-and-proposals.mdx` | 10.7KB | Open RFPs, Treasury proposal process | ✅ Good |
| `oss-contributions.mdx` | 13.9KB | OSS paths by repo | ✅ Good |
| `bug-bounties.mdx` | 8.7KB | Bug bounty scope, submission, rewards | ✅ Good |

### resources/
| File | Size | Content summary | Quality |
|---|---|---|---|
| `sdks.mdx` | 1.7KB | SDK overview — thin | ⚠️ Needs expansion |
| `apis.mdx` | 1.9KB | API overview — thin | ⚠️ Needs expansion |
| `example-applications.mdx` | 1.7KB | Example apps index | ⚠️ Thin |
| `awesome-livepeer.mdx` | 989B | Link to community list | ✅ Functional |
| `deepwiki.mdx` | 1.4KB | Link to DeepWiki | ✅ Functional |
| `wiki.mdx` | 843B | Link to Livepeer wiki | ✅ Functional |
| `compendium/glossary.mdx` | 59KB | Developer glossary — comprehensive | ✅ Strong |
| `compendium/glossary-data.json` | 22.5KB | Glossary data source | ✅ Data file |

### Orphan/deprecated directories (not in nav, need cleanup)
| Directory | Status | Action |
|---|---|---|
| `developer-tools/` | In Notion IA as "✅ Live" — not in current branch nav | Confirm if merged or pending |
| `technical-references/` | Legacy — contents migrated to `resources/` | Confirm removal or redirect |
| `_workspace/` | Working directory | Do not publish |

---

## 2. v1 content → v2 migration mapping

### High priority — migrate and update
These have direct v2 equivalents that are either missing or thin. Migration = copy content, update SDK examples to current API (`livepeer` npm v3.5.0), update any deprecated endpoints.

| v1 page | v1 path | v2 target | Notes |
|---|---|---|---|
| Developer Quick Start | `v1/developers/quick-start` | `get-started/ai-quickstart` + `get-started/transcoding-quickstart` | Superseded by two better pages |
| Create Livestream | `v1/developers/guides/create-livestream` | `guides/video/create-livestream` (new) | API unchanged, SDK updated |
| Access Control (JWT) | `v1/developers/guides/access-control-jwt` | `guides/video/access-control` (new) | Merge JWT + webhook guides |
| Access Control (Webhooks) | `v1/developers/guides/access-control-webhooks` | `guides/video/access-control` (new) | Merge with JWT |
| Setup Webhooks | `v1/developers/guides/setup-and-listen-to-webhooks` | `guides/video/webhooks` (new) | High value — webhook setup |
| Listen to Asset Events | `v1/developers/guides/listen-to-asset-events` | `guides/video/webhooks` (new) | Fold into webhooks guide |
| Listen to Stream Events | `v1/developers/guides/listen-to-stream-events` | `guides/video/webhooks` (new) | Fold into webhooks guide |
| Playback a Livestream | `v1/developers/guides/playback-a-livestream` | `guides/video/playback` (new) | Merge live + asset playback |
| Playback an Asset | `v1/developers/guides/playback-an-asset` | `guides/video/playback` (new) | Merge with livestream playback |
| Upload Video Asset | `v1/developers/guides/upload-video-asset` | `guides/video/upload-asset` (new) | Current API pattern |
| Monitor Stream Health | `v1/developers/guides/monitor-stream-health` | `guides/video/monitor-stream-health` (new) | Metrics, health checks |
| Engagement Analytics (API) | `v1/developers/guides/get-engagement-analytics-via-api` | `guides/video/analytics` (new) | High value |

### Medium priority — migrate with updates
| v1 page | v1 path | v2 target | Notes |
|---|---|---|---|
| Livestream from Browser | `v1/developers/guides/livestream-from-browser` | `guides/video/browser-streaming` (new) | WebRTC broadcasting — maps to @livepeer/react Broadcast component |
| Multistream | `v1/developers/guides/multistream` | `guides/video/multistream` (new) | Multi-destination streaming |
| Clip a Livestream | `v1/developers/guides/clip-a-livestream` | `guides/video/clip-livestream` (new) | Clipping API |
| Optimize Latency | `v1/developers/guides/optimize-latency-of-a-livestream` | `guides/video/latency-optimisation` (new) | Sub-second latency configuration |
| Thumbnails (Live) | `v1/developers/guides/thumbnails-live` | Fold into monitor/playback guide | Low priority standalone |
| Thumbnails (VOD) | `v1/developers/guides/thumbnails-vod` | Fold into upload guide | Low priority standalone |
| Stream via OBS | `v1/developers/guides/stream-via-obs` | `guides/video/obs-streaming` (new) | Useful for creators |

### Tutorial migration
| v1 tutorial | v1 path | v2 target | Quality | Action |
|---|---|---|---|---|
| Upload & Playback on IPFS | `v1/developers/tutorials/upload-playback-videos-on-ipfs` | `guides/tutorials/ipfs-video-integration` | Good | Migrate — decentralised storage still relevant |
| Upload & Playback on Arweave | `v1/developers/tutorials/upload-playback-videos-on-arweave` | `guides/tutorials/arweave-video-integration` | Good | Migrate |
| Token Gate with Lit Protocol | `v1/developers/tutorials/token-gate-videos-with-lit` | `guides/tutorials/token-gated-video` | 29KB — comprehensive | Migrate — web3 access control pattern |
| Decentralised App with FVM | `v1/developers/tutorials/decentralized-app-with-fvm` | `guides/tutorials/filecoin-integration` | 39KB — comprehensive | Optional — niche audience |
| Upload & Playback via 4everland | `v1/developers/tutorials/upload-playback-videos-4everland` | Skip or fold into IPFS/Arweave | Thin | Low priority |

### v1 AI content (partially superseded)
| v1 page | v1 path | v2 status |
|---|---|---|
| AI Introduction | `v1/ai/introduction` | Superseded by `concepts/ai-on-livepeer` |
| AI Builder Get Started | `v1/ai/builders/get-started` | Superseded by `get-started/ai-quickstart` |
| Text to Image pipeline | `v1/ai/pipelines/text-to-image` | Partial — migrate VRAM/model details to `build/model-support` |
| Image to Image API ref | `v1/ai/api-reference/image-to-image` | Migrate to resources/reference/AI-API |
| Image to Video API ref | `v1/ai/api-reference/image-to-video` | Migrate to resources/reference/AI-API |
| Audio to Text API ref | `v1/ai/api-reference/audio-to-text` | Migrate to resources/reference/AI-API |

---

## 3. External content → v2 content mapping

Content that exists outside the docs repo and should be incorporated (with attribution or adaptation).

### Tutorial: Build an AI Agent on Livepeer (Eliza)
- **Source:** https://mirror.xyz/agent-spe.eth/oxs8VxEvKN88IeTwD-YQMucoDGqfNRz_mIlbUKkwOTg
- **Target:** `guides/tutorials/build-an-ai-agent-on-livepeer`
- **Content available:** Character JSON config, .env setup, pnpm commands, full working Eliza AI agent
- **Update needed:** Verify current `@livepeer/ai` package name and version
- **Effort:** Low — tutorial is complete, needs formatting and SDK version update

### Tutorial: YouTube Video Generator Swarm (SwarmZero)
- **Source:** https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm
- **Target:** Mention in `guides/tutorials/` section or `resources/knowledge-hub/awesome-livepeer`
- **Content:** Full Python tutorial using text-to-image + image-to-video APIs for automated YouTube content generation
- **Note:** This lives on SwarmZero's site — link out rather than reproduce

### ComfyStream performance tuning
- **Source:** https://forum.livepeer.org/t/comfystream-sd1-5-workflow-performance-tuning/2756
- **Target:** Fold into `build/comfystream.mdx` troubleshooting section
- **Content:** CPU bottleneck analysis, fps optimisation, RunPod configuration tips

### Encode Club bootcamp curriculum
- **Source:** https://www.encode.club/real-time-video-ai-bootcamp
- **Target:** Reference in `opportunities/grants-and-programmes.mdx` as completed programme; lessons framework can inform tutorial structure
- **Content:** 4-lesson curriculum (ComfyUI setup → SD1.5 → ControlNet → LoRA)

### Phase 4 retrospective (technical details)
- **Source:** https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208
- **Target:** Multiple pages:
  - BYOC page: container interface details, MuxionLabs byoc-sdk
  - build/comfystream: new custom node sets (AudioTranscription, SuperResolution)
  - build/model-support: new pipeline types added in Phase 4
- **Content:** Phase 4 deliverables including PyTrickle, BYOC streaming, ComfyStream multimodal

---

## 4. Per-persona journey map

### Journey A: AI Application Builder (primary)

**Arriving state:** Found Livepeer via ComfyUI community, hackathon brief, or search. Has Python/TS experience. Wants to call an AI inference API.

| Step | Question | Page | Status |
|---|---|---|---|
| 1 | What is this and can I use it? | `portal` → `navigator` ("I want to call AI from my app") | ⚠️ Navigator missing |
| 2 | What can I actually build? | `concepts/ai-on-livepeer` | ✅ |
| 3 | What path is right for my use case? | `build/workload-fit` | ✅ |
| 4 | Make my first API call | `get-started/ai-quickstart` | ✅ |
| 5 | Understand the full SDK surface | `build/sdk-gateway` | 🔴 Thin |
| 6 | What models and pipelines are available? | `build/model-support` | ✅ |
| 7 | Deploy with custom model (BYOC) | `build/byoc` | ✅ |
| 8 | Build real-time video AI (ComfyStream) | `build/comfystream` | ✅ |
| 9 | Set up authentication properly | `guides/ai/authentication` | 🔴 Missing |
| 10 | My job isn't responding — what now? | `guides/ai/troubleshooting` | 🔴 Missing |
| 11 | How do I go to production? | `guides/ai/production-checklist` | 🔴 Missing |
| 12 | Fund my work / get a grant | `opportunities/grants-and-programmes` | ✅ |

**Completion rate:** Steps 1-4 and 6-8 served. Steps 5, 9, 10, 11 blocked by missing/thin content.

---

### Journey B: Video Transcoding Developer (secondary)

**Arriving state:** Has existing video/streaming app, wants to offload transcoding. Has Studio API key or is ready to get one.

| Step | Question | Page | Status |
|---|---|---|---|
| 1 | What can Livepeer do for video? | `concepts/video-on-livepeer` | 🔴 STUB |
| 2 | Make my first transcoding call | `get-started/transcoding-quickstart` | ✅ |
| 3 | Create a livestream | `guides/video/create-livestream` | 🔴 Missing |
| 4 | Set up playback | `guides/video/playback` | 🔴 Missing |
| 5 | Set up access control | `guides/video/access-control` | 🔴 Missing |
| 6 | Listen to events / webhooks | `guides/video/webhooks` | 🔴 Missing |
| 7 | Monitor stream health | `guides/video/monitor-stream-health` | 🔴 Missing |
| 8 | SDK reference | `resources/sdks` | ⚠️ Thin |

**Completion rate:** Only step 2 is fully served. Step 1 is a stub. Steps 3-8 require v1 migration.

---

### Journey C: Hackathon Participant

**Arriving state:** Has 24-48 hours. Will not read deeply. Needs one working example.

| Step | Question | Page | Status |
|---|---|---|---|
| 1 | Give me something that works NOW | `get-started/ai-quickstart` (skip portal) | ✅ |
| 2 | Can I see a full app example? | `guides/tutorials/build-an-ai-agent-on-livepeer` | 🔴 Missing |
| 3 | Where do I get help? | `guides/developer-help` | ✅ |
| 4 | Is there a grant/bounty for my project? | `opportunities/overview` | ✅ |

**Completion rate:** 2/4 steps served. Tutorial (step 2) is the critical gap.

---

### Journey D: OSS Protocol Contributor

**Arriving state:** Engineer who wants to contribute to go-livepeer, ai-runner, or protocol contracts. Has Go experience (for go-livepeer) or Python (for ai-runner/ComfyStream).

| Step | Question | Page | Status |
|---|---|---|---|
| 1 | What is the codebase structure? | `concepts/oss-stack` | ✅ |
| 2 | Get the repo running locally | `get-started/contributor-quickstart` | ⚠️ Thin |
| 3 | Set up local testnet | `guides/local-testnet-deployment` | ✅ |
| 4 | Understand contribution process | `guides/contribution-guide` | ✅ |
| 5 | Find good first issues | `opportunities/oss-contributions` | ✅ |
| 6 | Deploy testnet contracts | `guides/testnet-contract-deployment` | ✅ |

**Completion rate:** 5/6 steps served. Step 2 is thin — needs expansion.

---

### Journey E: Infrastructure Evaluator

**Arriving state:** Comparing Livepeer to Replicate, Runpod, Modal, AWS SageMaker. May not write code. Needs pipeline list, latency data, pricing, reliability signal.

| Step | Question | Page | Status |
|---|---|---|---|
| 1 | What pipelines are available? | `concepts/ai-on-livepeer` + `build/model-support` | ✅ |
| 2 | What path is right for my architecture? | `build/workload-fit` | ✅ |
| 3 | What does the SDK look like? | `build/sdk-gateway` | 🔴 Thin |
| 4 | What are the pricing and rate limits? | `resources/apis` (lacks pricing detail) | ⚠️ Missing from docs |
| 5 | Is the network reliable? | `guides/ai/troubleshooting` (doesn't exist yet) | 🔴 Missing |
| 6 | What has been built on it? | `resources/awesome-livepeer` → `resources/knowledge-hub/` | ✅ |

**Completion rate:** 3/6 steps well-served. Pricing reference and reliability info are gaps.

---

## 5. Content source matrix

What content exists where for each major topic — identifying where the canonical source is and where it needs to be documented.

| Topic | v2 docs-v2-dev | v1 docs | GitHub README | Blog | Forum | Status |
|---|---|---|---|---|---|---|
| AI text-to-image call | `get-started/ai-quickstart` ✅ | `v1/ai/builders/get-started` | ai-runner README | — | — | ✅ Covered |
| AI pipeline list | `build/model-support` ✅ | `v1/ai/pipelines/*` (per pipeline pages) | ai-runner/docker/ | — | — | ✅ Good |
| SDK install + auth | `resources/sdks` ⚠️ | `v1/sdks/*` ✅ | GitHub READMEs | — | — | ⚠️ v1 better than v2 |
| BYOC architecture | `build/byoc` ✅ | — | go-livepeer byoc/ README | — | Phase 4 retrospective | ✅ Good — add PyTrickle |
| ComfyStream setup | `build/comfystream` ✅ `get-started/comfystream-quickstart` ✅ | — | comfystream README | Blog post | Forum tuning thread | ✅ Good |
| PyTrickle | — ❌ | — | pytrickle README | — | Phase 4 retrospective | 🔴 Undocumented in main docs |
| @muxionlabs/byoc-sdk | Mentioned in `build/byoc` | — | Not in public npm | — | Phase 4 retrospective | ⚠️ Unclear availability |
| Create livestream | — ❌ | `v1/guides/create-livestream` ✅ | — | — | — | 🔴 Must migrate |
| Access control | — ❌ | `v1/guides/access-control-jwt` ✅ + webhooks ✅ | — | — | — | 🔴 Must migrate |
| Webhooks setup | — ❌ | `v1/guides/setup-and-listen-to-webhooks` ✅ | — | — | — | 🔴 Must migrate |
| Monitor stream health | — ❌ | `v1/guides/monitor-stream-health` ✅ | — | — | — | 🔴 Must migrate |
| Browser streaming | — ❌ | `v1/guides/livestream-from-browser` ✅ | — | — | — | 🔴 Must migrate |
| Troubleshooting AI | — ❌ | — | — | — | Forum threads | 🔴 Must create |
| Production checklist | — ❌ | — | — | — | — | 🔴 Must create |
| Pricing + rate limits | Not in docs ❌ | Not in docs ❌ | — | Studio website | — | 🔴 Must document |
| AI agent tutorial | — ❌ | — | Eliza repo | — | Mirror.xyz tutorial ✅ | 🔴 Must adapt |
| Token-gated video | — ❌ | `v1/tutorials/token-gate-videos-with-lit` ✅ | — | — | — | 🔴 Should migrate |
| IPFS/Arweave video | — ❌ | `v1/tutorials/upload-playback-videos-on-ipfs` ✅ + Arweave ✅ | — | — | — | 🔴 Should migrate |
| OSS contribution | `guides/contribution-guide` ✅ `opportunities/oss-contributions` ✅ | — | — | — | — | ✅ Good |
| Testnet deployment | `guides/local-testnet-deployment` ✅ `guides/testnet-contract-deployment` ✅ | — | — | — | — | ✅ Good |
| Grants + hackathons | `opportunities/grants-and-programmes` ✅ | — | — | — | — | ✅ Good |
| Glossary | `resources/compendium/glossary` ✅ 59KB | — | — | — | — | ✅ Strong |

---

## 6. SDK content inventory

### TypeScript/JavaScript Studio SDK (`livepeer` npm v3.5.0)
- **What it covers:** Streams (create, update, delete, list), Assets (upload, update, delete, list), AI (all 9 batch pipelines), Webhooks, Access control, Multistream targets, Signing keys
- **Auth:** Bearer token
- **Install:** `npm install livepeer`
- **Docs location (v1):** https://docs.livepeer.org/sdks/javascript
- **v2 coverage:** `resources/sdks.mdx` (thin) — full SDK docs not yet in v2

### React UI Kit (`@livepeer/react` v4.3.2)
- **What it covers:** `Player` (HLS/WebRTC), `Broadcast` (in-browser RTMP/WebRTC), hooks (`useCreateStream`, `useUpdateStream`, `useLivepeerProvider`)
- **Install:** `npm install @livepeer/react`
- **Docs location:** https://livepeer.github.io/ui-kit/ (GitHub Pages), https://docs.livepeer.org/sdks/react (v1)
- **v2 coverage:** Not documented in v2 Developers tab

### Python Studio SDK (`livepeer` PyPI)
- **What it covers:** Same surface as JS SDK — streams, assets, AI inference
- **Install:** `pip install livepeer`
- **Auth:** http_bearer token
- **v2 coverage:** `resources/sdks.mdx` (thin)

### Go Studio SDK (`livepeer-go`)
- **What it covers:** Same surface — streams, assets, AI
- **Install:** `go get github.com/livepeer/livepeer-go`
- **v2 coverage:** `resources/sdks.mdx` (thin)

### AI-specific SDKs (`@livepeer/ai`, `livepeer-ai`, `livepeer-ai-go`)
- **What they cover:** 10 AI generate methods only (text-to-image through live-video-to-video)
- **Default gateway:** `https://dream-gateway.livepeer.cloud`
- **Status:** Alpha — use Studio SDK for production stability
- **v2 coverage:** Mentioned in concepts, not fully documented

### Deprecated SDKs (do not document as current)
- `@livepeer/webrtmp-sdk` → DEPRECATED (use @livepeer/react Broadcast component)
- `@livepeer/react-native` → DEPRECATED (use react-native-video + react-native-webrtc)
- Old `livepeer.js` monorepo → ARCHIVED

---

## 7. AI API surface (canonical reference)

Base URL (Studio-hosted): `https://livepeer.studio/api/beta/generate`
Base URL (public, non-production): `https://dream-gateway.livepeer.cloud`
Authentication: `Authorization: Bearer <api-key>`
Content-Type: `multipart/form-data` (for file uploads), `application/json` (for text requests)

| Endpoint | Method | Input type | Warm model | VRAM |
|---|---|---|---|---|
| `/text-to-image` | POST | JSON (prompt, model_id, width, height, negative_prompt) | SG161222/RealVisXL_V4.0_Lightning | 24GB |
| `/image-to-image` | POST | multipart (image, prompt, model_id, strength) | timbrooks/instruct-pix2pix | 20GB |
| `/image-to-video` | POST | multipart (image, model_id, width, height, fps, motion_bucket_id) | stabilityai/stable-video-diffusion-img2vid-xt | — |
| `/image-to-text` | POST | multipart (image, model_id, prompt) | Salesforce/blip-image-captioning-large | 4GB |
| `/audio-to-text` | POST | multipart (audio, model_id, language) | openai/whisper-large-v3 | 12GB |
| `/text-to-speech` | POST | JSON (text, model_id, voice) | Parler-TTS | 12GB |
| `/upscale` | POST | multipart (image, model_id, prompt) | stabilityai/stable-diffusion-x4-upscaler | 24GB |
| `/segment-anything-2` | POST | multipart (image, model_id, point_coords, point_labels) | facebook/sam2-hiera-large | 6GB |
| `/llm` | POST | JSON (messages in OpenAI format, model) | meta-llama/Meta-Llama-3.1-8B-Instruct | 8GB |

**Real-time (separate path — not REST):**
- `live-video-to-video`: Trickle WebRTC protocol via ComfyStream or BYOC. Not accessible via standard REST API.

**Key parameters (all endpoints):**
- `model_id`: Hugging Face model ID string — accepts custom models
- Response format: JSON `{ images: [{ url, seed }] }` for image pipelines, `{ text }` for text pipelines

---

## 8. Files requiring decisions (not in existing docs.json)

These files exist in the repo and need a decision about inclusion:

| File | Current location | Size | Decision needed |
|---|---|---|---|
| `developer-journey.mdx` | `v2/developers/developer-journey.mdx` | 13.6KB | Include in "Start Here" group — currently NOT in provided docs.json |
| `guides/resources.mdx` | `v2/developers/guides/resources.mdx` | 14.1KB | Move to resources/compendium or include in guides |
| `guides/developer-help.mdx` | `v2/developers/guides/developer-help.mdx` | 11.9KB | Move to resources root or keep in guides |
| `guides/testnet-contract-deployment.mdx` | In guides — advanced | 19.1KB | Include in guides (for OSS persona) |
| `opportunities/*.mdx` | `v2/developers/opportunities/` | — | Paths in provided JSON use `guides/opportunities/` — file paths are `opportunities/`. Confirm actual location. |

---

## 9. Content gaps — complete list

| Gap | Type | Persona blocked | v1 equivalent | Effort |
|---|---|---|---|---|
| `navigator.mdx` | New page | All | None | Medium |
| `get-started/setup-paths.mdx` | Rewrite stub | All | None | Low |
| `concepts/video-on-livepeer.mdx` | Rewrite stub | Video developer | v1/ai/introduction (different) | Medium |
| `build/sdk-gateway.mdx` expansion | Expand 1.8KB → full | AI builder, Video dev | v1/sdks/javascript | Medium |
| `guides/tutorials/build-an-ai-agent-on-livepeer` | New tutorial | AI builder, Hackathon | Mirror.xyz Eliza tutorial | Low (source exists) |
| `guides/ai/troubleshooting` | New guide | AI builder | None | Medium |
| `guides/ai/production-checklist` | New guide | AI builder | None | Medium |
| `guides/ai/authentication` | New guide | AI builder, Video dev | v1/access-control-jwt | Low (migrate) |
| `guides/video/create-livestream` | Migrate from v1 | Video developer | v1/guides/create-livestream | Low |
| `guides/video/access-control` | Migrate from v1 | Video developer | v1/guides/access-control-jwt + webhooks | Low |
| `guides/video/webhooks` | Migrate from v1 | Video developer | v1/guides/setup-and-listen-to-webhooks | Low |
| `guides/video/playback` | Migrate from v1 | Video developer | v1/guides/playback-a-livestream + asset | Low |
| `guides/video/monitor-stream-health` | Migrate from v1 | Video developer | v1/guides/monitor-stream-health | Low |
| `guides/video/upload-asset` | Migrate from v1 | Video developer | v1/guides/upload-video-asset | Low |
| `resources/sdks.mdx` expansion | Expand | All | v1/sdks/* | Medium |
| `resources/apis.mdx` expansion | Expand | All | v1/api-reference/ | Medium |
| PyTrickle documentation | New section in byoc | BYOC developer | pytrickle README | Medium |
| Pricing/rate limits reference | New page or section | Evaluator | livepeer.studio/pricing | Low |
| `get-started/contributor-quickstart` expansion | Expand thin page | OSS contributor | None | Low |
| `guides/tutorials/ipfs-video-integration` | Migrate tutorial | Video/web3 dev | v1/tutorials/upload-playback-videos-on-ipfs | Low |
| `guides/tutorials/token-gated-video` | Migrate tutorial | Web3 developer | v1/tutorials/token-gate-videos-with-lit | Low |
| video-quickstart.mdx resolution | Decision/redirect | Video developer | — | Trivial |
