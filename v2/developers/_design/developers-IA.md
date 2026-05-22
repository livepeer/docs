# Developers tab: full IA design

Branch: `docs-v2-dev`
Current docs.json input: provided in brief
Source docs: `index.md` (collation), Notion IA Proposal (31d66022), actual repo inventory, deep web research.
Last updated: April 2026

---

## Tab purpose

Route people to where they can actually build on Livepeer. The Developers tab is a junction — it gives quickstarts, explains what Livepeer is for builders, and points outward to Gateways, Orchestrators, Solutions, and external repos. It does not own infrastructure setup (Gateways owns that) or protocol participation (Orchestrators owns that).

**Primary job:** A developer lands, picks a path (AI or Video), completes a quickstart, and knows where to go next — without needing support.

**Key constraint from Notion IA Proposal:** Developer Platforms content lives in Solutions tab. Video streaming aggregator pages link to Solutions platforms (Studio, Streamplace) rather than recreate content.

---

## Tab structure: the rule

Quickstart and build sections serve the **primary persona** (AI Application Builder) first.
Guides serve **all other personas** — video developer, OSS contributor, hackathon participant, infrastructure evaluator.
Resources are on-demand reference for all personas.

---

## Persona summary

| Persona | Primary need | Entry path | Exit path |
|---|---|---|---|
| **AI Application Builder** (primary) | First working API call → full AI pipeline → production | Portal → setup-paths → ai-quickstart → build/ | Stays; may graduate to Gateways |
| **Video Transcoding Developer** | Transcoding/streaming integration via Studio SDK | Portal → setup-paths → transcoding-quickstart → guides/video/ | Stays; may graduate to Gateways |
| **Hackathon Participant** | One working example in 24-48 hours | Portal → ai-quickstart directly | Leaves with working code |
| **OSS Protocol Contributor** | Repo understanding, testnet, contribution path | Portal → concepts/oss-stack → guides/contribution-guide → opportunities | Stays; routes to protocol repos |
| **Infrastructure Evaluator** | Pipeline comparison, pricing, reliability data | Portal → concepts/developer-stack → build/workload-fit → resources/reference | Leaves with enough to decide |

---

## Full IA: section-by-section with per-page stubs

---

### GROUP 1: Start Here

**Purpose:** Entry and routing. Portal introduces the tab; navigator provides conditional routing by intent. These two pages replace the need for everyone to read the Concepts section before knowing where to go.

---

#### `v2/developers/portal`
- **pageType:** `navigation` / `portal`
- **Exists:** ✅ 5.4KB
- **Serves:** All arriving personas simultaneously
- **Content structure:**
  - Hero: "Build on Livepeer AI and video infrastructure"
  - One-line tab scope: "Quickstarts, SDKs, guides, and tools for building applications on Livepeer's decentralised compute network."
  - Six section cards with correct hrefs: Concepts, Get Started, Custom AI Workflows, Guides, Opportunities, Resources
  - Explicit "I am a..." routing row: AI builder / Video developer / OSS contributor / Just evaluating
- **Status:** Exists — audit card hrefs, update copy to lead with AI

#### `v2/developers/navigator` ← NEW
- **pageType:** `navigation` / `landing`
- **Exists:** ❌ MISSING — must create
- **Serves:** All personas needing a conditional path before they commit to a section
- **Content structure:**
  - "What are you building?" with 4-5 branching paths:
    - **"I want to call Livepeer AI from my app"** → ai-quickstart → build/workload-fit → build/byoc or comfystream
    - **"I want to integrate video transcoding or streaming"** → transcoding-quickstart → guides/video-streaming
    - **"I'm at a hackathon and need something working fast"** → ai-quickstart (skip concepts entirely)
    - **"I want to run my own gateway instead of using Studio"** → concepts/running-a-gateway → Gateways tab
    - **"I want to contribute to the protocol codebase"** → concepts/oss-stack → guides/contribution-guide → opportunities/oss-contributions
  - Decision framework table: Studio vs Gateway vs BYOC vs ComfyStream (the S1 disambiguation from canonical design)
- **Note:** This is the highest-priority missing page. The `setup-paths.mdx` stub (559 bytes) tries to do this but is empty.

---

### GROUP 2: Concepts

**Purpose:** Orientation layer. Readers who want to understand before they build. Not required before the quickstart but referenced from it. Follows the canonical 4-page concepts pattern: role, capabilities, architecture, economic model — adapted for developers.

**Personas served:** Infrastructure Evaluator (all pages), AI Application Builder (ai-on-livepeer, developer-stack), OSS Contributor (oss-stack, running-a-gateway), Video Developer (video-on-livepeer).

---

#### `v2/developers/concepts/developer-stack`
- **pageType:** `concept`
- **Exists:** ✅ 10.6KB — strong
- **Serves:** Infrastructure Evaluator, AI Builder deciding between Studio/Gateway/BYOC
- **Content structure:**
  - What the "developer stack" means: 3 access layers (Studio managed → self-hosted gateway → protocol directly)
  - Decision table: Studio API vs Gateway API vs BYOC vs ComfyStream — when to use which, trade-offs, requirements
  - Architecture diagram: where the developer sits in the Livepeer stack
  - Key concepts: authentication, pricing model, API surface for each path
- **Status:** Good content — confirm decision table is current and AI paths are included

#### `v2/developers/concepts/ai-on-livepeer`
- **pageType:** `concept`
- **Exists:** ✅ 8.7KB — strong
- **Serves:** AI Application Builder (primary), Infrastructure Evaluator
- **Content structure:**
  - What Livepeer AI is: decentralised GPU network for AI inference
  - Batch vs real-time AI: two distinct modes with different developer paths
  - Available pipelines: text-to-image, image-to-image, image-to-video, audio-to-text, LLM, segment-anything-2, upscale, image-to-text, text-to-speech, live-video-to-video (real-time only)
  - Cold vs warm model distinction (30s–minutes cold start)
  - How pricing works: orchestrator-set, per-pixel approximately $0.019/megapixel for text-to-image
  - Where to start: → ai-quickstart
- **Status:** Good — confirm pipeline list is current (as of go-livepeer v0.8.10 / ai-runner v0.14.1)

#### `v2/developers/concepts/video-on-livepeer`
- **pageType:** `concept`
- **Exists:** ⚠️ STUB — 572 bytes — CRITICAL gap
- **Serves:** Video Transcoding Developer (step 1 of their journey — currently missing)
- **Content structure to write:**
  - What Livepeer provides for video: transcoding, livestreaming, VOD, multistream
  - Access options: Studio API (managed), self-hosted gateway (advanced)
  - Studio API surface: streams (create, ingest, playback), assets (upload, transcode, playback), webhooks
  - SDK languages: TypeScript/JS, Python, Go, React components
  - Authentication: API key from Studio dashboard
  - Pricing: Free (1K min/month), Growth ($100/mo), Enterprise
  - Key differences from AI: synchronous transcoding, webhook-based events, HLS/WebRTC playback
  - Where to start: → transcoding-quickstart → guides/video/
- **Priority:** HIGH — video developer has no entry concept page

#### `v2/developers/concepts/oss-stack`
- **pageType:** `concept`
- **Exists:** ✅ 8.1KB — good
- **Serves:** OSS Protocol Contributor
- **Content structure:**
  - The open source stack: go-livepeer, ai-runner, comfystream, pytrickle, protocol
  - Repo relationships and what each does
  - How to navigate the codebase
  - Development environment prerequisites
  - How the testnet relates to mainnet
  - → contributor-quickstart, → guides/contribution-guide

#### `v2/developers/concepts/running-a-gateway`
- **pageType:** `concept`
- **Exists:** ✅ 5.7KB — good
- **Serves:** Developer evaluating whether to run own gateway vs use Studio
- **Content structure:**
  - What a gateway is from the developer's perspective
  - Studio-hosted vs self-hosted trade-off
  - When self-hosting makes sense: cost at scale, custom routing, data sovereignty
  - What running a gateway requires: ETH deposit, go-livepeer node, infrastructure
  - Decision: "If you're ready to run your own gateway, continue in the Gateways tab"
  - → Gateways tab handoff
- **Status:** Good — ensure Gateways tab handoff is explicit

---

### GROUP 3: Get Started (Quickstarts)

**Purpose:** Fastest path to a working first result. One section per build track. The `setup-paths.mdx` page is the routing layer; each quickstart below it serves one specific persona.

**Design principle:** Quickstarts serve the primary persona directly. A hackathon participant should be able to skip the portal, land on ai-quickstart, and have a working API call in under 10 minutes.

---

#### `v2/developers/get-started/setup-paths`
- **pageType:** `instruction` / `quickstart`
- **Exists:** ⚠️ STUB — 559 bytes — CRITICAL gap
- **Serves:** All arriving personas — this is the router before quickstarts
- **Content structure to write:**
  - Four clearly labelled paths with visual separation:
    - **"Call AI from my app" (batch)** → ai-quickstart: "5 minutes, no GPU required, curl or SDK"
    - **"Build real-time AI video (ComfyStream)"** → comfystream-quickstart: "requires ComfyUI setup"
    - **"Transcode or stream video"** → transcoding-quickstart: "Studio API, SDK in 4 languages"
    - **"Contribute to the protocol"** → contributor-quickstart: "Go + testnet required"
  - One-line summary of what each quickstart achieves
  - Prerequisite checklist per path
- **Priority:** HIGH — blocks all persona routing from get-started

#### `v2/developers/get-started/ai-quickstart`
- **pageType:** `instruction` / `quickstart`
- **Exists:** ✅ 5.6KB — good
- **Serves:** AI Application Builder, Hackathon Participant (primary path)
- **Content structure:**
  - Prerequisites: API key from Studio dashboard
  - Step 1: Make a `POST /text-to-image` call (curl example, then SDK)
  - Step 2: Handle the response (base64 image → file)
  - Step 3: Handle errors (401, 422, cold model timeout)
  - Step 4: Try other pipelines (model_id parameter)
  - Next steps: → build/workload-fit, → build/byoc, → build/model-support
- **Status:** Good — confirm default model_id is final (stakeholder sign-off noted as pending)

#### `v2/developers/get-started/transcoding-quickstart`
- **pageType:** `instruction` / `quickstart`
- **Exists:** ✅ 6.3KB — good
- **Serves:** Video Transcoding Developer
- **Content structure:**
  - Prerequisites: API key from Studio dashboard, SDK installation
  - Step 1: Create a stream
  - Step 2: Get RTMP ingest URL
  - Step 3: Get playback URL (HLS)
  - Step 4: Test with OBS or ffmpeg
  - Next steps: → guides/video/create-livestream, → guides/video/access-control
- **Status:** Good

#### `v2/developers/get-started/comfystream-quickstart`
- **pageType:** `instruction` / `quickstart`
- **Exists:** ✅ 10.8KB — comprehensive
- **Serves:** AI Application Builder building real-time video pipelines
- **Content structure:**
  - Prerequisites: ComfyUI installed, NVIDIA GPU (RTX 3090+ recommended), Python 3.12
  - Step 1: Install ComfyStream
  - Step 2: Launch ComfyStream server
  - Step 3: Connect to Livepeer network (gateway URL, API key)
  - Step 4: Load a workflow (SD1.5 example)
  - Step 5: Stream webcam input through the pipeline
  - Expected result: live AI video transformation at ~25 FPS
  - Troubleshooting: common GPU memory, CUDA, and connection errors
  - Next steps: → build/comfystream, → build/model-support
- **Status:** Good — verify prerequisites are current (CUDA version, Python version)

#### `v2/developers/get-started/contributor-quickstart`
- **pageType:** `instruction` / `quickstart`
- **Exists:** ✅ 2.6KB — thin
- **Serves:** OSS Protocol Contributor
- **Content structure:**
  - Prerequisites: Go 1.21+, Docker, git
  - Step 1: Clone go-livepeer
  - Step 2: Set up local testnet
  - Step 3: Run a local orchestrator and gateway
  - Step 4: Submit a test job
  - Next steps: → guides/contribution-guide, → guides/local-testnet-deployment
- **Status:** Thin at 2.6KB — needs expansion. The `local-testnet-deployment.mdx` guide (10.5KB) has most of the detail; this quickstart should be the fast path to it.

#### `v2/developers/get-started/video-quickstart` ← DECISION NEEDED
- **Exists:** ⚠️ STUB — 582 bytes
- **Note from index.md:** "resolve with transcoding-quickstart" — these likely cover overlapping ground. Decision: either (a) redirect `video-quickstart` to `transcoding-quickstart`, or (b) make `video-quickstart` the Studio VOD/asset path and `transcoding-quickstart` the streaming path. Currently both are in `setup-paths` which is also a stub — this needs resolving before any of these can be properly routed.
- **Recommendation:** Keep `transcoding-quickstart` as the canonical entry for video developers. Make `video-quickstart` a routing stub that immediately links to `transcoding-quickstart`. Remove from nav as a standalone item once resolved.

---

### GROUP 4: Custom AI Workflows

**Purpose:** Deep-build guidance for the primary persona who has completed the AI quickstart and now needs to do something more complex. This section is the AI Application Builder's primary operational home.

**Mapping to proposed docs.json:** This section = the "Custom AI Workflows" group in your proposed JSON.

---

#### `v2/developers/build/workload-fit`
- **pageType:** `guide`
- **Exists:** ✅ 9KB — strong
- **Serves:** AI Application Builder at decision point: which path for my use case?
- **Content structure:**
  - Decision tree: batch AI jobs vs real-time AI (ComfyStream/BYOC) vs managed (Studio)
  - Workload characteristics: latency requirements, GPU requirements, integration complexity
  - Use case matching: "I'm building X → use Y"
  - Examples: "image generation for an app" → AI quickstart; "live webcam filter" → ComfyStream; "custom model" → BYOC
  - Cost comparison: Studio API pricing vs self-hosted gateway
- **Status:** Good — confirm cost data is current

#### `v2/developers/build/comfystream`
- **pageType:** `guide`
- **Exists:** ✅ 12.5KB — good
- **Serves:** AI Application Builder building real-time video products (Daydream-style)
- **Content structure:**
  - What ComfyStream is: ComfyUI extension for real-time video processing
  - Architecture: webcam → ComfyStream → Livepeer orchestrator → output stream
  - Supported models: StreamDiffusion, ControlNet, IPAdapter, FaceID, LoRA, SuperResolution, Whisper
  - Workflow format requirements: API format JSON, one primary input, one output
  - Deployment options: Docker, RunPod, Tensordock, Ansible
  - ComfyUI-Stream-Pack custom nodes
  - Performance benchmarks: up to 25 FPS on RTX 4090
  - Known limitations and troubleshooting
  - → comfystream-quickstart (back-link), → build/byoc (if going deeper)
- **Status:** Good — verify supported models list is current (ai-runner v0.14.1)

#### `v2/developers/build/byoc`
- **pageType:** `guide`
- **Exists:** ✅ 12.8KB — good
- **Serves:** AI Application Builder deploying a custom model container
- **Content structure:**
  - What BYOC is: deploy any Docker container as a Livepeer AI pipeline
  - Container interface: PyTrickle `StreamServer` with 4 required endpoints (`/api/stream/start`, `/api/stream/params`, `/api/stream/status`, `/api/stream/stop`)
  - FrameProcessor pattern: subclass in Python, implement `process_frame()`
  - Build workflow: FrameProcessor → Docker → local test → deploy to go-livepeer
  - Docker base images: GPU (`nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04`) vs CPU (`python:3.11-slim`)
  - Client-side: `@muxionlabs/byoc-sdk` for browser WebRTC or `trickle` client for server-side
  - go-livepeer flags: `-byoc -byocContainerURL -byocModelID`
  - Example BYOC containers from ai-spe-phase-4 retrospective
  - Link to MuxionLabs example-apps repo
  - **Add:** PyTrickle reference and link (currently completely undocumented in this tab)
- **Status:** Good foundation — missing PyTrickle documentation, missing byoc-sdk npm reference

#### `v2/developers/build/sdk-gateway`
- **pageType:** `guide`
- **Exists:** ⚠️ 1.8KB — critically thin
- **Serves:** AI Application Builder integrating via SDK vs direct REST
- **Content structure to write (needs full expansion):**
  - What the Gateway SDK is: TypeScript/Python/Go wrappers around the gateway REST API
  - Studio SDK vs AI SDK: Studio SDK wraps all Studio API resources (streams, assets, AI). AI SDK (`@livepeer/ai`) wraps only AI inference endpoints.
  - When to use which: Studio SDK for full-stack apps; AI SDK for AI-inference-only; direct REST for maximum control
  - Code examples for each language (TypeScript, Python, Go):
    ```typescript
    // TypeScript — Studio SDK
    import { Livepeer } from 'livepeer';
    const livepeer = new Livepeer({ apiKey: process.env.LIVEPEER_API_KEY });
    const result = await livepeer.generate.textToImage({ prompt: 'a cat' });
    ```
    ```python
    # Python — AI SDK
    from livepeer_ai import Livepeer
    client = Livepeer(http_bearer="<your-api-key>")
    result = client.generate.text_to_image(prompt="a cat")
    ```
  - Authentication: Bearer token setup per SDK
  - Error handling: HTTPError, HTTPValidationError, SDKError patterns
  - Retry configuration: exponential backoff, custom retries
  - CORS-enabled API keys: when and why to use them
  - → resources/reference/sdks (full SDK reference)
- **Priority:** HIGH — currently 1.8KB. This is the page most API-first developers need.

#### `v2/developers/build/model-support`
- **pageType:** `reference`
- **Exists:** ✅ 10.2KB — good
- **Serves:** All AI developers needing to know what models/pipelines are available
- **Content structure:**
  - Complete pipeline list with: endpoint, default warm model, VRAM minimum, notes
  - Model ID format: Hugging Face model IDs accepted as `model_id` parameter
  - Warm vs cold model distinction: warm models respond immediately, cold models have 30s–several minutes load time
  - Custom model support: which pipelines accept arbitrary model IDs, which require specific base models
  - LoRA support: which pipelines and how to specify
  - AI pipeline separation note: AI services do not use LPT staking or round-based rewards
  - → resources/reference for full API reference
- **Status:** Good — needs currency check against current ai-runner supported pipelines

---

### GROUP 5: Guides

**Purpose:** Operational guidance for all personas after they've completed a quickstart. Three categories: AI guides (primary persona, deeper build), video guides (secondary persona), and OSS/contributor guides (third persona). Hackathon participant does not have a dedicated guide section — they get all they need from the quickstart.

**Key design decision from Notion IA Proposal:** Video streaming guides link to Solutions platforms (Studio, Streamplace) rather than recreate content in this tab. This section provides guides for operating the integration, not building the product.

---

#### `v2/developers/guides/developer-guides` (hub page)
- **pageType:** `guide` / overview
- **Exists:** ✅ 13.4KB — good
- **Serves:** All personas — landing page for guides section
- **Content structure:**
  - Guide index by persona/use case
  - AI integration guides section
  - Video integration guides section
  - Operations and troubleshooting section
  - OSS/contributor guides section
  - Links to Opportunities section for economic participation
- **Status:** Good — update to reflect all current guides including new ones to be added

---

#### AI Integration Guides (new — for primary persona)

**`v2/developers/guides/ai/authentication`** ← NEW
- Backend API keys vs CORS-enabled keys
- How to create and rotate keys
- Security best practices: never expose backend keys client-side
- Using CORS keys for browser-side applications
- Source: v1 access control guides adapted for AI context

**`v2/developers/guides/ai/webhooks-and-events`** ← NEW
- AI job completion webhooks (if applicable — confirm with j0sh)
- Listening for job events: POST endpoint setup, signature validation
- Retry and error handling from event webhooks
- Source: v1 guides/setup-and-listen-to-webhooks — adapt for AI context

**`v2/developers/guides/ai/troubleshooting`** ← NEW (from index.md: 🔴 MISSING)
- Common error patterns and fixes:
  - 401 Unauthorized: invalid/missing API key
  - 422 Validation Error: invalid request body (model_id, prompt format)
  - Cold model timeout: what to do when a model takes minutes to respond
  - Network connectivity to gateway
  - "My job isn't responding": is it the network, my code, or the model?
- How to check network status: status.livepeer.studio
- Where to get help: Discord #ai-research channel, forum.livepeer.org

**`v2/developers/guides/ai/production-checklist`** ← NEW (from index.md: 🔴 MISSING)
- Use Studio gateway for production (not free public gateway at dream-gateway.livepeer.cloud)
- API key rotation strategy
- Error handling and retry implementation (exponential backoff)
- Cold model awareness: prefer warm models for latency-sensitive applications
- Monitoring: what metrics to track
- Cost estimation: price per pipeline × expected volume
- Rate limits: how to check your rate limits in Studio dashboard
- Incident response: what to do when the service has issues

---

#### Video Integration Guides (secondary persona)

These adapt v1 guides for the v2 context. Content already exists in the repo at `v1/developers/guides/` — needs updating for current SDK versions.

**`v2/developers/guides/video/create-livestream`** ← MIGRATE from v1
- Source: `v1/developers/guides/create-livestream.mdx`
- Update: replace old livepeer.js examples with `livepeer` npm v3.5.0

**`v2/developers/guides/video/access-control`** ← MIGRATE from v1
- Source: `v1/developers/guides/access-control-jwt.mdx` + `access-control-webhooks.mdx`
- High priority — security is a top developer concern

**`v2/developers/guides/video/webhooks`** ← MIGRATE from v1
- Source: `v1/developers/guides/setup-and-listen-to-webhooks.mdx`
- High priority — event-driven video apps need this

**`v2/developers/guides/video/monitor-stream-health`** ← MIGRATE from v1
- Source: `v1/developers/guides/monitor-stream-health.mdx`
- Production video operations need this

**`v2/developers/guides/video/playback`** ← MIGRATE from v1
- Source: `v1/developers/guides/playback-a-livestream.mdx` + `playback-an-asset.mdx`

**`v2/developers/guides/video/upload-asset`** ← MIGRATE from v1
- Source: `v1/developers/guides/upload-video-asset.mdx`

---

#### OSS / Contributor Guides

**`v2/developers/guides/contribution-guide`**
- **Exists:** ✅ 11.3KB — good
- How to contribute to go-livepeer, ai-runner, ComfyStream, protocol contracts
- Coding standards, PR process, issue types
- Good first issues by repo

**`v2/developers/guides/local-testnet-deployment`**
- **Exists:** ✅ 10.5KB — good
- Full local testnet setup with one orchestrator + gateway
- Running AI worker in testnet mode
- Testing payment flows on testnet

**`v2/developers/guides/testnet-contract-deployment`**
- **Exists:** ✅ 19.1KB — advanced
- Deploying and upgrading protocol contracts to testnet
- For protocol contributors and governance participants

---

#### Tutorial

**`v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer`** ← NEW (from Eliza tutorial)
- **pageType:** `tutorial`
- **Exists:** ❌ NEW — content exists externally in Mirror.xyz Eliza tutorial
- **Serves:** AI Application Builder, Hackathon Participant
- **Source material:** https://mirror.xyz/agent-spe.eth/oxs8VxEvKN88IeTwD-YQMucoDGqfNRz_mIlbUKkwOTg — full working tutorial with code
- **Content structure:**
  - Goal: Build an AI agent that uses Livepeer as its model provider
  - Prerequisites: Node.js, pnpm, Livepeer API key
  - Step 1: Install Eliza framework
  - Step 2: Configure Livepeer as model provider (character JSON, .env setup)
  - Step 3: Run the agent and test inference
  - Step 4: Customise the agent (different model, different pipeline)
  - Expected time: ~30 minutes
  - What you've built: An AI agent using decentralised GPU compute
  - Next steps: → BYOC for custom models, → SwarmZero for agent swarms
- **This is the tab's primary tutorial.** It is complete, working, and requires only adaptation for the v2 docs context.

---

### GROUP 6: Opportunities (Guides subgroup)

**Purpose:** Economic participation surface for builders. Per Notion IA Proposal, this stays as a subgroup within Guides.

**Note on docs.json:** In your provided JSON, Opportunities is already nested inside Guides. The paths need updating — current paths are `v2/developers/opportunities/` but the JSON shows them under `v2/developers/guides/opportunities/`. Confirm the actual file location before updating docs.json.

---

#### `v2/developers/opportunities/overview` (= `v2/developers/guides/opportunities/overview` in JSON)
- **Exists:** ✅ 6.6KB
- Overview of economic opportunities for builders: grants, bounties, OSS, RFPs

#### `v2/developers/opportunities/grants-and-programmes`
- **Exists:** ✅ 12.2KB
- Foundation grants, Encode Club bootcamp, ChatandBuild hackathon, ComfyUI Hacker Program

#### `v2/developers/opportunities/rfps-and-proposals`
- **Exists:** ✅ 10.7KB
- Open RFPs, Treasury proposal process

#### `v2/developers/opportunities/oss-contributions`
- **Exists:** ✅ 13.9KB
- OSS contribution paths by repo: go-livepeer, ai-runner, ComfyStream, protocol

#### `v2/developers/opportunities/bug-bounties`
- **Exists:** ✅ 8.7KB
- Bug bounty programme scope, submission process, rewards

---

### GROUP 7: Resources

Applying the canonical resources layout:
- Root: glossary (cross-persona) + developer-help (cross-persona)
- `/reference`: strictly technical — SDKs, APIs
- `/compendium`: developer reference — examples, tools, wikis
- `/knowledge-hub`: curated external content — awesome-livepeer, deepwiki, tutorials

---

#### Resources root

**`v2/developers/resources/developer-help`** (= move from `guides/developer-help.mdx`)
- **Exists:** ✅ 11.9KB
- Discord channels: #builders, #ai-research, #ai-help, #technical
- Forum categories and how to get effective help
- GitHub issue reporting
- Status page

#### Reference (`/resources/reference`)

**`v2/developers/resources/reference/sdks`** (from JSON: `v2/developers/resources/reference/sdks`)
- **Exists:** ⚠️ 1.7KB — thin (currently at `resources/sdks.mdx`)
- **Content needed:**
  - Table of all SDKs: Studio (JS, Python, Go), AI (JS, Python, Go), React UI Kit
  - Version, npm/PyPI package name, GitHub repo for each
  - One-line install command per SDK
  - Link to full reference docs
  - Deprecated SDKs table with migration path

**`v2/developers/resources/reference/apis`** (from JSON: `v2/developers/resources/reference/apis`)
- **Exists:** ⚠️ 1.9KB — thin (currently at `resources/apis.mdx`)
- **Content needed:**
  - Studio REST API: base URL, authentication, rate limits
  - AI Gateway API: base URL, endpoint list, request/response format
  - AI API OpenAPI spec: where to find it, how to import into Postman/clients
  - Link to interactive API reference

#### Compendium (`/resources/compendium`)

**`v2/developers/resources/compendium/glossary`**
- **Exists:** ✅ 59KB at `resources/compendium/glossary.mdx` — comprehensive

**`v2/developers/resources/compendium/resources`** (move from `guides/resources.mdx`)
- **Exists:** ✅ 14.1KB at `guides/resources.mdx`
- Curated guide index + links to external resources

**`v2/developers/resources/compendium/developer-help`**
- Note: `developer-help.mdx` is currently in `guides/` — consider whether it belongs in `resources/compendium/` or at resources root per canonical structure

**`v2/developers/resources/compendium/example-applications`**
- **Exists:** ✅ 1.7KB at `resources/example-applications.mdx` — thin but functional

#### Knowledge Hub (`/resources/knowledge-hub`)

**`v2/developers/resources/knowledge-hub/awesome-livepeer`**
- **Exists:** ✅ at `resources/awesome-livepeer.mdx`
- Community curated list: tutorials, demos, projects, videos (GitHub: livepeer/awesome-livepeer, 52 stars)

**`v2/developers/resources/knowledge-hub/wiki`**
- **Exists:** ✅ at `resources/wiki.mdx`

**`v2/developers/resources/knowledge-hub/deepwiki`**
- **Exists:** ✅ at `resources/deepwiki.mdx`
- AI-generated codebase knowledge — links to deepwiki.com/livepeer

---

## Complete page inventory: exists vs missing

| Page path | Status | Size | Priority |
|---|---|---|---|
| `portal.mdx` | ✅ exists | 5.4KB | Update copy |
| `navigator.mdx` | ❌ MISSING | — | P0 |
| `developer-journey.mdx` | ✅ exists | 13.6KB | Keep, position near top |
| `concepts/developer-stack.mdx` | ✅ exists | 10.6KB | Good |
| `concepts/ai-on-livepeer.mdx` | ✅ exists | 8.7KB | Good |
| `concepts/video-on-livepeer.mdx` | 🔴 STUB | 572B | P0 — write |
| `concepts/oss-stack.mdx` | ✅ exists | 8.1KB | Good |
| `concepts/running-a-gateway.mdx` | ✅ exists | 5.7KB | Good |
| `get-started/setup-paths.mdx` | 🔴 STUB | 559B | P0 — write |
| `get-started/ai-quickstart.mdx` | ✅ exists | 5.6KB | Good |
| `get-started/transcoding-quickstart.mdx` | ✅ exists | 6.3KB | Good |
| `get-started/comfystream-quickstart.mdx` | ✅ exists | 10.8KB | Good |
| `get-started/contributor-quickstart.mdx` | ✅ exists | 2.6KB | Thin — expand |
| `get-started/video-quickstart.mdx` | 🔴 STUB | 582B | Resolve/redirect |
| `build/workload-fit.mdx` | ✅ exists | 9KB | Good |
| `build/comfystream.mdx` | ✅ exists | 12.5KB | Good |
| `build/byoc.mdx` | ✅ exists | 12.8KB | Good — add PyTrickle |
| `build/sdk-gateway.mdx` | ⚠️ thin | 1.8KB | P1 — expand significantly |
| `build/model-support.mdx` | ✅ exists | 10.2KB | Good |
| `guides/developer-guides.mdx` | ✅ exists | 13.4KB | Update index |
| `guides/developer-help.mdx` | ✅ exists | 11.9KB | Move to resources |
| `guides/contribution-guide.mdx` | ✅ exists | 11.3KB | Good |
| `guides/local-testnet-deployment.mdx` | ✅ exists | 10.5KB | Good |
| `guides/resources.mdx` | ✅ exists | 14.1KB | Move to resources/compendium |
| `guides/testnet-contract-deployment.mdx` | ✅ exists | 19.1KB | Good |
| `guides/ai/authentication` | ❌ MISSING | — | P1 — write |
| `guides/ai/troubleshooting` | ❌ MISSING | — | P1 — write |
| `guides/ai/production-checklist` | ❌ MISSING | — | P1 — write |
| `guides/video/create-livestream` | ❌ MISSING | — | P2 — migrate from v1 |
| `guides/video/access-control` | ❌ MISSING | — | P1 — migrate from v1 |
| `guides/video/webhooks` | ❌ MISSING | — | P1 — migrate from v1 |
| `guides/video/monitor-stream-health` | ❌ MISSING | — | P2 — migrate from v1 |
| `guides/video/playback` | ❌ MISSING | — | P2 — migrate from v1 |
| `guides/tutorials/build-an-ai-agent-on-livepeer` | ❌ MISSING | — | P1 — write (source: Eliza tutorial) |
| `opportunities/overview.mdx` | ✅ exists | 6.6KB | Good |
| `opportunities/grants-and-programmes.mdx` | ✅ exists | 12.2KB | Good |
| `opportunities/rfps-and-proposals.mdx` | ✅ exists | 10.7KB | Good |
| `opportunities/oss-contributions.mdx` | ✅ exists | 13.9KB | Good |
| `opportunities/bug-bounties.mdx` | ✅ exists | 8.7KB | Good |
| `resources/compendium/glossary.mdx` | ✅ exists | 59KB | Good |
| `resources/sdks.mdx` | ⚠️ thin | 1.7KB | P1 — expand |
| `resources/apis.mdx` | ⚠️ thin | 1.9KB | P1 — expand |
| `resources/example-applications.mdx` | ⚠️ thin | 1.7KB | Functional |
| `resources/awesome-livepeer.mdx` | ✅ exists | 989B | Good |
| `resources/deepwiki.mdx` | ✅ exists | 1.4KB | Good |
| `resources/wiki.mdx` | ✅ exists | 843B | Good |

---

## Proposed docs.json (corrected from input)

Key changes from input JSON:
- Added `navigator` to Start Here group
- Opportunities paths corrected to `v2/developers/opportunities/` (current file location)
- Resources restructured to canonical layout (reference/compendium/knowledge-hub)
- `developer-help` and `resources` moved from guides to resources
- New guide stubs listed where pages need creating

```json
{
  "tab": "Developers",
  "icon": "display-code",
  "groups": [
    {
      "group": "Start Here",
      "icon": "display-code",
      "pages": [
        "v2/developers/portal",
        "v2/developers/navigator",
        "v2/developers/developer-journey"
      ]
    },
    {
      "group": "Concepts",
      "icon": "lightbulb",
      "pages": [
        "v2/developers/concepts/developer-stack",
        "v2/developers/concepts/ai-on-livepeer",
        "v2/developers/concepts/video-on-livepeer",
        "v2/developers/concepts/running-a-gateway",
        "v2/developers/concepts/oss-stack"
      ]
    },
    {
      "group": "Get Started",
      "icon": "fast-forward",
      "pages": [
        "v2/developers/get-started/setup-paths",
        "v2/developers/get-started/ai-quickstart",
        "v2/developers/get-started/comfystream-quickstart",
        "v2/developers/get-started/transcoding-quickstart",
        "v2/developers/get-started/contributor-quickstart"
      ]
    },
    {
      "group": "Custom AI Workflows",
      "icon": "user-robot",
      "pages": [
        "v2/developers/build/workload-fit",
        "v2/developers/build/sdk-gateway",
        "v2/developers/build/model-support",
        "v2/developers/build/byoc",
        "v2/developers/build/comfystream"
      ]
    },
    {
      "group": "Guides",
      "icon": "laptop-file",
      "pages": [
        "v2/developers/guides/developer-guides",
        "v2/developers/guides/contribution-guide",
        "v2/developers/guides/local-testnet-deployment",
        {
          "group": "Tutorials",
          "pages": [
            "v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer"
          ]
        },
        {
          "group": "Opportunities",
          "pages": [
            "v2/developers/opportunities/overview",
            "v2/developers/opportunities/grants-and-programmes",
            "v2/developers/opportunities/rfps-and-proposals",
            "v2/developers/opportunities/oss-contributions",
            "v2/developers/opportunities/bug-bounties"
          ]
        }
      ]
    },
    {
      "group": "Resources",
      "icon": "books",
      "pages": [
        "v2/developers/guides/developer-help",
        {
          "group": "Reference",
          "pages": [
            "v2/developers/resources/sdks",
            "v2/developers/resources/apis"
          ]
        },
        {
          "group": "Compendium",
          "pages": [
            "v2/developers/resources/compendium/glossary",
            "v2/developers/guides/resources",
            "v2/developers/resources/example-applications"
          ]
        },
        {
          "group": "Knowledge Hub",
          "pages": [
            "v2/developers/resources/awesome-livepeer",
            "v2/developers/resources/wiki",
            "v2/developers/resources/deepwiki"
          ]
        }
      ]
    }
  ]
}
```

---

## Priority order: what to build first

| Priority | Page | Type | Unblocks |
|---|---|---|---|
| P0 | `navigator.mdx` | New | All persona routing |
| P0 | `get-started/setup-paths.mdx` | Rewrite stub | All quickstart routing |
| P0 | `concepts/video-on-livepeer.mdx` | Rewrite stub | Video developer entry |
| P1 | `build/sdk-gateway.mdx` | Expand (1.8KB → full page) | API-first developer journey |
| P1 | `guides/tutorials/build-an-ai-agent-on-livepeer` | New tutorial | Hackathon participant, AI builder |
| P1 | `guides/ai/troubleshooting` | New | Steps 10-11 of AI journey |
| P1 | `guides/ai/production-checklist` | New | Production path |
| P1 | `guides/ai/authentication` | New | Security for AI apps |
| P1 | `guides/video/access-control` | Migrate from v1 | Video developer security |
| P1 | `guides/video/webhooks` | Migrate from v1 | Event-driven video apps |
| P1 | `resources/sdks.mdx` | Expand | SDK reference |
| P1 | `resources/apis.mdx` | Expand | API reference |
| P2 | `guides/video/create-livestream` | Migrate from v1 | Video developer journey |
| P2 | `guides/video/monitor-stream-health` | Migrate from v1 | Video operations |
| P2 | `guides/video/playback` | Migrate from v1 | Video developer journey |
| P2 | `get-started/contributor-quickstart` | Expand | OSS contributor quickstart |
| P3 | Resolve video-quickstart / transcoding-quickstart | Decision | Nav hygiene |
| P3 | Move developer-help to resources | Restructure | Canonical resources layout |
