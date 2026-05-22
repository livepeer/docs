# 06. Terminology: 32+ Developer Terms Defined

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

Developers arrive with different backgrounds and mental models. This document defines 32+ terms used throughout the Developers tab, ensuring consistency and clarity. Terms are organized by category and linked to pages where they're first introduced.

---

## Category 1: Core Livepeer Concepts

### 1. Livepeer Network
**Definition**: A decentralized GPU compute network where:
- Orchestrators (node operators) contribute GPU resources
- Developers submit inference or transcoding jobs
- Work is distributed across available nodes
- Rewards flow based on work completed

**First mention**: `portal.mdx` or `ai-on-livepeer.mdx`
**Related terms**: Orchestrator, Node, GPU Network, Decentralized

### 2. Orchestrator
**Definition**: A node operator who:
- Runs GPU hardware (1-100+ GPUs)
- Operates software (`go-livepeer`) to participate in the network
- Stakes LPT (Livepeer token) to signal credibility
- Earns fees + inflation rewards by accepting jobs
- Potentially attracts delegators to increase stake

**First mention**: `developer-stack.mdx`
**Related terms**: Node, GPU operator, Delegator

### 3. GPU Node / Node
**Definition**: A piece of hardware (server, workstation, etc.) running:
- GPU(s) for compute (NVIDIA RTX, A-series, H-series)
- Network connectivity (uplink)
- `go-livepeer` software to participate in the network

**First mention**: `developer-stack.mdx`
**Related terms**: Orchestrator, Gateway, Hardware

### 4. Decentralized
**Definition**: No single entity controls the network. Instead:
- Many independent operators run nodes
- Developers can choose which operators (orchestrators) to use
- Governance is distributed via LPT token holders

**First mention**: `portal.mdx`
**Related terms**: Protocol, Open-source, Trustless

### 5. Livepeer Protocol
**Definition**: The open-source rules and smart contracts that:
- Define how jobs are assigned to orchestrators
- Calculate rewards
- Handle staking and delegation
- Enable governance via LPT token

**First mention**: `concepts/oss-stack.mdx`
**Related terms**: Smart contract, go-livepeer, Decentralized

---

## Category 2: Developer Access Paths

### 6. Studio API / Hosted Gateway
**Definition**: Livepeer-operated gateway that:
- Developers call via REST API (no setup required)
- Located at `livepeer.studio` (or similar)
- Managed infrastructure (high uptime, scalability)
- Possible cost premium vs self-hosting

**First mention**: `build/workload-fit.mdx`
**Related terms**: Gateway, REST API, Daydream, NaaP

### 7. Self-Hosted Gateway
**Definition**: Developer-operated gateway where:
- Developer runs `go-livepeer` gateway software on their own infrastructure
- Calls are made to their own gateway (localhost or private network)
- Gateway forwards requests to the Livepeer network
- More control, lower cost, higher operational complexity

**First mention**: `build/workload-fit.mdx`
**Related terms**: Gateway, go-livepeer, BYOC, Self-managed

### 8. Gateway
**Definition**: A service that:
- Receives API requests from developers
- Forwards them to the Livepeer network
- Returns results
- Can be hosted (Studio API, Daydream) or self-hosted

**First mention**: `concepts/running-a-gateway.mdx`
**Related terms**: Studio API, Self-hosted gateway, Daemon

### 9. BYOC (Bring Your Own Compute)
**Definition**: A deployment pattern where:
- Developer provides their own infrastructure (GPU nodes)
- Operates as an orchestrator in the network
- Serves their own inference requests + potentially external requests
- Highest control, highest complexity, potential cost savings at scale

**First mention**: `build/byoc.mdx`
**Related terms**: Self-hosted, Orchestrator, GPU node, Custom deployment

### 10. ComfyStream
**Definition**: A Livepeer-integrated version of ComfyUI that:
- Runs locally on developer's machine
- Offloads GPU workload to Livepeer network
- Bridges local workflow (ComfyUI nodes) with remote compute (Livepeer GPUs)
- Zero-setup entry point for ComfyUI users

**First mention**: `build/comfystream.mdx`
**Related terms**: ComfyUI, Workflow, Orchestration

### 11. Daydream / NaaP
**Definition**: 
- **Daydream**: Early-stage Livepeer-hosted AI inference frontend
- **NaaP** (Node as a Platform): Feb 2026 plugin-based platform for orchestrator-node extensibility

**First mention**: `concepts/ai-on-livepeer.mdx` (Daydream), potentially `build/` (NaaP)
**Related terms**: Studio API, Hosted gateway, Web UI

---

## Category 3: Job and Request Concepts

### 12. Job / Inference Job
**Definition**: A request to perform:
- AI inference (image generation, video upscaling, LLM completion, etc.)
- Or transcoding (video codec conversion, bitrate scaling)
- Submitted by developer via API
- Assigned to an orchestrator for execution
- Returns results (image, transcoded video, LLM response, etc.)

**First mention**: `ai-quickstart.mdx`
**Related terms**: Request, Pipeline, Payload, Callback

### 13. Pipeline
**Definition**: A pre-configured, reusable workflow on the Livepeer network that:
- Takes inputs (images, video, text, audio)
- Performs a specific task (image generation, transcoding, LLM)
- Returns outputs
- Examples: Stable Diffusion XL, H.264 transcoding, Whisper (audio-to-text)

**First mention**: `build/model-support.mdx`
**Related terms**: Model, Workflow, ComfyUI workflow

### 14. Model
**Definition**: An AI model used within a pipeline, such as:
- Stable Diffusion XL (text-to-image)
- Runway Gen-2 (text-to-video)
- Whisper (audio transcription)
- LLaMA (language model)

**First mention**: `build/model-support.mdx`
**Related terms**: Pipeline, Inference, Weights

### 15. Custom Model / BYOM
**Definition**: A machine learning model provided by developer, deployed via:
- BYOC (Bring Your Own Compute)
- Custom Docker container
- Model weights + inference code

**First mention**: `build/byoc.mdx`
**Related terms**: BYOC, Docker, Model weights, Inference engine

### 16. Callback / Webhook
**Definition**: A URL that Livepeer calls to notify the developer when:
- A job completes successfully
- A job fails
- A job times out

**First mention**: (Not yet documented) — should be in production checklist
**Related terms**: Async, Event, Result notification

---

## Category 4: Video-Specific Terms

### 17. Transcoding
**Definition**: Converting video from one format to another:
- Input: video in codec A (e.g., H.264) at bitrate X
- Output: same video in codec B (e.g., VP9) at bitrate Y (or multiple bitrates for adaptive streaming)
- Used for: compatibility, quality/size optimization, live streaming multi-bitrate delivery

**First mention**: `concepts/video-on-livepeer.mdx` (stub) or `transcoding-quickstart.mdx`
**Related terms**: Codec, Bitrate, Profile, VOD, Live

### 18. Codec
**Definition**: An algorithm for compressing and decompressing video, such as:
- H.264 (AVC) — most common for live streaming
- H.265 (HEVC) — newer, better compression
- VP9, AV1 — open-source alternatives
- Determines output file size and playback compatibility

**First mention**: `concepts/video-on-livepeer.mdx` (stub)
**Related terms**: Bitrate, Profile, Video encoding

### 19. Bitrate
**Definition**: Amount of data per unit time in a video stream, measured in Kbps/Mbps:
- Higher bitrate = higher quality, larger file
- Lower bitrate = lower quality, smaller file
- Adaptive streaming provides multiple bitrates for different devices

**First mention**: `concepts/video-on-livepeer.mdx` (stub)
**Related terms**: Codec, Quality, Bandwidth, Profile

### 20. Profile / Preset
**Definition**: Pre-configured transcoding settings grouping:
- Input/output codec
- Bitrate
- Resolution (720p, 1080p, etc.)
- Frame rate
- Example: "HD 1080p H.264 at 5 Mbps, 30fps"

**First mention**: `concepts/video-on-livepeer.mdx` (stub)
**Related terms**: Codec, Bitrate, Resolution

### 21. VOD (Video on Demand)
**Definition**: Pre-recorded video transcoded at any time (not in real-time):
- Developer uploads/submits video file
- Livepeer transcodes it
- Results returned asynchronously

**First mention**: `concepts/video-on-livepeer.mdx` (stub)
**Related terms**: Live transcoding, Streaming, Async

### 22. Live Transcoding
**Definition**: Real-time transcoding of a live video stream:
- Incoming stream (1 bitrate)
- Multiple output bitrates (adaptive streaming)
- Latency must be low (<3-5 seconds typical)

**First mention**: `concepts/video-on-livepeer.mdx` (stub)
**Related terms**: VOD, Real-time, Latency, Live streaming

---

## Category 5: AI-Specific Terms

### 23. Inference
**Definition**: Running a model on input data to produce output:
- Text-to-image: input text prompt → output generated image
- Image-to-image: input image + prompt → output modified image
- Audio-to-text: input audio file → output text transcription
- Batch vs real-time execution possible

**First mention**: `ai-quickstart.mdx`
**Related terms**: Model, Prediction, Prompt, Output

### 24. Prompt / Input
**Definition**: Data provided to a model to generate output:
- **Prompt** (language model): "Write a poem about cats"
- **Input image** (image-to-image): JPEG file
- **Audio input** (audio-to-text): MP3 file
- **Specifications** (generic): resolution, quality, seed, etc.

**First mention**: `ai-quickstart.mdx`
**Related terms**: Input payload, Parameters, Specification

### 25. Output / Result
**Definition**: Data returned by a model after inference:
- Text output (LLM response)
- Image output (JPEG, PNG)
- Transcribed text (audio-to-text)
- Video output (video generation, upscaling)

**First mention**: `ai-quickstart.mdx`
**Related terms**: Inference, Response, JSON payload

### 26. Latency
**Definition**: Time from request submission to response reception:
- Low latency (<500ms) = real-time applications (chat, video)
- High latency (seconds) = acceptable for batch jobs
- Depends on: network, queue, model execution time

**First mention**: (Not documented) — should be in production checklist or concepts
**Related terms**: Real-time, Performance, Queue

### 27. Throughput
**Definition**: Number of jobs completed per unit time:
- "100 jobs per hour" 
- Depends on: available GPUs, job queue, model execution time

**First mention**: (Not documented) — should be in architecture or production checklist
**Related terms**: Capacity, Scaling, Load

---

## Category 6: Protocol and Staking Terms

### 28. LPT (Livepeer Token)
**Definition**: The Livepeer protocol token used for:
- Staking by orchestrators (signal credibility)
- Delegation by token holders (earn rewards, participate in governance)
- Governance voting

**First mention**: `concepts/developer-stack.mdx` (briefly) or delegators tab
**Related terms**: Token, Staking, Delegation

### 29. Staking
**Definition**: Locking up LPT to:
- For orchestrators: signal commitment and quality (higher stake = more trust)
- For delegators: allocate rewards to an orchestrator

**First mention**: (Mentioned in developer-stack but not deeply explained)
**Related terms**: LPT, Delegation, Rewards

### 30. Delegation
**Definition**: A token holder's action of allocating their LPT to an orchestrator to:
- Increase the orchestrator's stake (and thus status)
- Earn a share of the orchestrator's rewards
- Participate indirectly in the network

**First mention**: (Mentioned in developer-stack but not deeply explained)
**Related terms**: Staking, LPT, Rewards

---

## Category 7: Technical Implementation Terms

### 31. REST API
**Definition**: An HTTP-based interface for making requests:
- Developers send HTTP POST/GET requests
- Server responds with JSON
- Livepeer's API (Studio, self-hosted gateway) is REST-based

**First mention**: `ai-quickstart.mdx`
**Related terms**: HTTP, JSON, Webhook, SDK

### 32. SDK (Software Development Kit)
**Definition**: A library developers use to call the API more easily:
- JavaScript/TypeScript (@livepeer/js, @muxionlabs/byoc-sdk)
- Python (python-livepeer, PyTrickle)
- Go (go-livepeer SDK)
- Provides: authentication, request formatting, error handling

**First mention**: `resources/sdks.mdx`
**Related terms**: API, Library, Package, npm/pip/go

### 33. Docker / Container
**Definition**: A package containing:
- Application code
- Dependencies
- Runtime environment
- Standardized format for deployment (used in BYOC)

**First mention**: `build/byoc.mdx`
**Related terms**: Image, Container registry, Deployment

### 34. HTTP Status Code
**Definition**: A 3-digit code indicating request result:
- 200 = Success
- 400 = Bad request (developer error)
- 401 = Unauthorized (auth failed)
- 500 = Server error
- 429 = Rate limited

**First mention**: (Not documented) — should be in troubleshooting or API reference
**Related terms**: Error, Response, Status

---

## Consistency Check: Terms Used in Multiple Contexts

### "Job"
- **As noun**: A single inference or transcoding request
- **Potential confusion**: "I'm creating a new job" vs "Job creation process"
- **Recommendation**: Use "inference job" or "transcoding job" for clarity

### "Model"
- **Meaning 1**: An AI model (Stable Diffusion)
- **Meaning 2**: A data model (JSON structure)
- **Potential confusion**: High in code examples
- **Recommendation**: Clarify "AI model" vs "data model" when both could apply

### "Pipeline"
- **Meaning 1**: A Livepeer-provided workflow (Stable Diffusion XL pipeline)
- **Meaning 2**: A developer's workflow (ComfyUI pipeline, CI/CD pipeline)
- **Potential confusion**: High with ComfyUI
- **Recommendation**: Use "Livepeer pipeline" or "workflow" depending on context

### "Gateway"
- **Context 1**: Studio API gateway (hosted)
- **Context 2**: Self-hosted gateway (developer-operated)
- **Context 3**: API gateway (generic pattern)
- **Potential confusion**: Medium
- **Recommendation**: Always specify "Studio gateway," "self-hosted gateway," or "Livepeer gateway"

---

## Terms Not Yet Defined Anywhere

1. **Authentication / API Key / JWT** — Used but not explained
2. **Error handling / Retry logic** — Used but not explained
3. **Rate limiting / Quota** — Not mentioned at all
4. **Monitoring / Observability** — Not mentioned
5. **Cost estimation / Pricing model** — Not documented
6. **Webhook / Callback** — Not documented
7. **Realtime / Streaming** — Mentioned but not formally defined
8. **HTTP Status codes** — Not documented
9. **Queue / Queueing** — Mentioned but not explained
10. **SLA / Uptime** — Not documented

**Action**: These terms should be added to their respective pages as gaps are filled (authentication in S2, errors in S3 quickstarts, rate-limiting in S5 production guide, etc.)

---

## Review Questions

1. **Terminology consistency**: Should we create a separate "glossary" page listing all terms alphabetically, or keep them integrated in the content where they're first introduced?

2. **Deep dives needed**: Are there terms that need dedicated deep-dive pages (e.g., "Understanding Transcoding," "Authentication Methods")?

3. **Persona-specific terminology**: Should different personas see different terminology (e.g., orchestrators see "orchestrator" heavily, while builders see "gateway")?

4. **Potential confusion points**: Are there other term pairs that create confusion (e.g., "Livepeer network" vs "Livepeer protocol")?

---

## Related Documents

- All previous review documents reference these terms
- `resources/apis.mdx` should link to definitions
- `resources/sdks.mdx` should link to definitions

---

**Timestamp**: April 7, 2026
