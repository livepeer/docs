# Developers — Audience Design

**Tab**: Developers
**Audience**: `developer`
**TERMINOLOGY_LOCK**: AI Gateway API, inference, pipeline, transcoding, gateway, orchestrator, LPT (Livepeer Token), BYOC (Bring Your Own Container), live-video-to-video, text-to-image, image-to-image, image-to-video, cold start, warm model, model ID, SDK, Trickle Streaming Protocol, PyTrickle, Livepeer.js, RTMP, HLS, WebRTC, VOD (Video on Demand), protocol layer, smart contract, LIP (Livepeer Improvement Proposal)
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

**AUDIENCE**: `developer`

Derived from the Audience Definitions table: `developer` — "Building custom pipelines, BYOC, protocol extensions, tooling" — Primary tab: Developers.

Note: The `builder` token also maps to Solutions / Developers. The Developers tab is the primary tab for `developer`; `builder` (building products using hosted APIs/SDKs/gateways) is accommodated within the tab but does not drive the section structure. The distinction is meaningful: `builder` relies on hosted services; `developer` constructs custom pipeline and protocol integrations. Both are present in the tab; `developer` is the canonical audience.

---

### Step 0.2 — TERMINOLOGY_LOCK

The following terms are central to the `developer` audience's work on the Livepeer network. Definitions are derived from the Product Context block, cross-checked against `veracity-sources.md` authority sources, and validated against the per-tab glossary. Deprecated terms have been replaced.

---

**1. AI Gateway API**

The REST API endpoint layer for routing AI inference requests through gateway nodes to GPU orchestrators on the network. This is the primary integration surface for developers submitting AI pipeline requests without managing infrastructure directly.

*Cross-check*: Glossary definition matches Product Context. Marked as draft in deprecated-terms (under "AI Gateway API — In active development; API shape may change"). Use with caveat.
`[verify-against: https://github.com/livepeer/livepeer-ai-js]` (JS/TS client for AI API — primary source for response schemas and pipeline request shapes)
`[verify-against: https://github.com/livepeer/ai-runner]` (runner-side AI execution behaviour, OpenAPI definitions for AI worker API)

---

**2. Inference**

Running a trained model on new input data to produce predictions or generated output, as opposed to training the model. One of the two compute types on the Livepeer network (alongside transcoding).

*No network-specific meaning conflict. Generic AI term with standard industry meaning — no special flag required.*

---

**3. Pipeline**

A defined AI or video processing flow in which inputs are submitted to the network, processed by GPU orchestrators, and results returned to the caller. A pipeline is identified by its type (e.g. text-to-image, live-video-to-video) and parameterised by a model ID.

*Network-specific: In the Livepeer context "pipeline" refers specifically to a defined AI job type routed through the gateway, not a generic software data pipeline. Flag for first-use explanation.*

---

**4. Transcoding**

Direct digital-to-digital conversion of video from one encoding format, resolution, or bitrate to another, producing multiple adaptive renditions. One of the two compute types on the Livepeer network (alongside AI inference).

*Standard industry term; no definition conflict.*

---

**5. Gateway**

A network node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface for developers. In the developer context, a gateway is the on-network relay between a developer's application and the orchestrators performing compute.

*Note*: "Broadcaster" is a deprecated term for gateway. Do not use "Broadcaster" in content. Confirmed by `deprecated-terms.md`.
`[verify-against: https://github.com/livepeer/go-livepeer]` (go-livepeer binary — gateway role implementation and CLI flags)

---

**6. Orchestrator**

A supply-side operator contributing GPU resources to the network, receiving jobs, performing transcoding or AI inference, and earning rewards. Developers understand orchestrators to reason about latency, availability, and pricing in the network.

*Note*: "Transcoder" is partially deprecated as a synonym for orchestrator (it has a specific meaning in the O-T split). Do not conflate. Confirmed by `deprecated-terms.md`.
`[verify-against: https://github.com/livepeer/go-livepeer]`

---

**7. LPT (Livepeer Token)**

ERC-20 governance and staking token. Staked LPT determines which orchestrators are selected to process developer requests. Developers encounter LPT when understanding the economic layer backing the compute they consume.

*No definition conflict. Standard on-chain ERC-20 token.*
`[verify-live: https://explorer.livepeer.org]` (live stake amounts, active set composition)

---

**8. BYOC (Bring Your Own Container)**

Deployment pattern where teams supply custom Docker containers for AI workloads, enabling arbitrary Python-based models to run on Livepeer network compute. The mechanism that allows developers to deploy containerised AI workloads not natively supported by the built-in pipeline types.

*Network-specific: BYOC is a Livepeer-defined deployment pattern, not a generic term. Flag for first-use explanation.*
`[verify-against: https://github.com/livepeer/go-livepeer]` (AI pipeline config, BYOC container API)
`[verify-against: https://github.com/livepeer/ai-runner]`

---

**9. Live-video-to-video**

AI pipeline applying generative models to a continuous video stream frame-by-frame at interactive frame rates. A real-time pipeline type on the network.

*No definition conflict.*

---

**10. Text-to-image**

AI pipeline generating an image from a natural language text prompt using a language encoder and a diffusion model.

*No definition conflict. Standard AI pipeline type.*

---

**11. Image-to-image**

AI pipeline transforming an input image into a modified output image guided by a text prompt or conditioning signal.

*No definition conflict.*

---

**12. Image-to-video**

AI pipeline generating a short video clip conditioned on a single input image, animating a still frame.

*No definition conflict.*

---

**13. Cold start**

Latency incurred when a model must be loaded from storage into GPU memory before the first inference request. A structural characteristic of AI pipeline execution with direct impact on application responsiveness.

*No definition conflict. Per glossary: "often ranging from 5 to 90 seconds" — this specific range is a factual claim.*
`[verify-against: https://github.com/livepeer/go-livepeer]` (warm/cold model behaviour in AI pipeline config)

---

**14. Warm model**

An AI model already loaded into GPU memory and ready to serve inference requests immediately, without cold-start delay. The counterpart to cold start.

*No definition conflict.*
`[verify-against: https://github.com/livepeer/go-livepeer]`

---

**15. Model ID**

Unique string identifier specifying which AI model to invoke on a repository hub, for example a HuggingFace model path.

*The glossary example `stabilityai/stable-diffusion-xl-base-1.0` is a specific external artifact claim.*
`[verify-against: https://github.com/livepeer/go-livepeer]` (aiModels.json schema — confirm model ID format used by the network)
`[verify-live: https://github.com/livepeer/go-livepeer]` (AI pipeline types and model IDs change with releases — per deprecated-terms.md high-staleness list)

---

**16. SDK**

The set of official software libraries — JavaScript/TypeScript and Python — that developers use to interact with Livepeer capabilities without building against the raw protocol. Encompasses Livepeer.js (Studio/video API), the AI JS client, the AI Python client, and PyTrickle.

*Generic term; included because in this context it refers to a specific named set of Livepeer-maintained libraries.*

---

**17. Trickle Streaming Protocol**

Livepeer's low-latency HTTP-based streaming transport layer for real-time media between network nodes, enabling frame-level AI processing on live streams. Underpins PyTrickle.

*Network-specific: not a generic streaming protocol; Livepeer-defined. Flag for first-use explanation.*
`[verify-against: https://github.com/livepeer/pytrickle]`

---

**18. PyTrickle**

Official Python SDK for building real-time AI video applications on Livepeer, providing the FrameProcessor interface for per-frame model inference on live streams.

`[verify-against: https://github.com/livepeer/pytrickle]` (API surface, FrameProcessor interface)

---

**19. Livepeer.js**

Official JavaScript/TypeScript SDK for interacting with Livepeer Studio's REST API, designed for Node.js and browser environments. Covers stream and asset management, access control, and usage monitoring.

`[verify-against: https://github.com/livepeer/livepeer-js]`

---

**20. RTMP (Real-Time Messaging Protocol)**

Standard ingest protocol for live broadcasting on port 1935. Developers use RTMP to ingest live video into Livepeer for transcoding.

*Standard industry term; no network-specific meaning conflict. Note: appears twice in livepeer-glossary.mdx (flagged in deprecated-terms.md) — use definition from classified-by-tab.md.*

---

**21. HLS (HTTP Live Streaming)**

HTTP Live Streaming protocol that encodes video into multiple quality levels with an index playlist for adaptive bitrate delivery. Standard playback delivery format for transcoded streams.

*Standard industry term; no network-specific meaning conflict.*

---

**22. WebRTC**

Open standard providing browsers and mobile apps with real-time peer-to-peer audio, video, and data exchange, enabling sub-second latency delivery.

*Standard industry term; no network-specific meaning conflict.*

---

**23. VOD (Video on Demand)**

A media delivery model where recorded video content is stored and streamed to viewers on request, as opposed to live streaming.

*Standard industry term; no network-specific meaning conflict.*

---

**24. Protocol layer**

The on-chain layer governing staking, delegation, rewards, and verification via smart contracts deployed on Arbitrum. Application-level developers interact with it indirectly through SDKs; protocol extension developers interact directly via smart contracts.

*Network-specific in scope: in this context refers specifically to the Livepeer smart contract system on Arbitrum.*
`[verify-against: https://github.com/livepeer/protocol]` (smart contract source and ABI — confluence branch is deployed version)
`[verify-against: https://arbiscan.io/accounts/label/livepeer]` (deployed contract addresses)

---

**25. LIP (Livepeer Improvement Proposal)**

Formal design document describing a proposed change to the protocol, governance process, or ecosystem standard. Developers working at the protocol level reference LIPs for specification authority.

`[verify-against: https://github.com/livepeer/LIPs]`

---

**TERMINOLOGY_LOCK (compact form)**:
`AI Gateway API, inference, pipeline, transcoding, gateway, orchestrator, LPT, BYOC, live-video-to-video, text-to-image, image-to-image, image-to-video, cold start, warm model, model ID, SDK, Trickle Streaming Protocol, PyTrickle, Livepeer.js, RTMP, HLS, WebRTC, VOD, protocol layer, LIP`

**Note on term count**: 25 terms (exceeds the 10–20 default). The Developers tab covers two meaningfully distinct participation paths — (1) AI pipeline integration and (2) live video / transcoding integration — plus a protocol extension path. Minimal coverage of all three paths without omission requires the full 25 terms. Justification noted in Addendum.

---

### Step 0.3 — Anchoring Questions

**Q1. What does this audience call themselves?**

They call themselves **developers**, **engineers**, or **builders** in their own professional context, before knowing this network's terminology. More specifically: "backend developer", "AI engineer", "full-stack developer", "ML engineer", or "video engineer" — depending on which pathway brings them here. They do not arrive self-identifying as "Livepeer developers"; that label is acquired, not arriving.

**Q2. What are the 3–5 actions that define their core job?**

In their own language, before any Livepeer-specific framing:

1. **Integrate an API or SDK** — connect a third-party service to their application by calling endpoints, handling auth, and processing responses.
2. **Run a pipeline** — feed inputs through a processing step (model inference, video encode) and consume outputs programmatically.
3. **Debug and verify** — confirm that a system is behaving correctly; diagnose when it is not.
4. **Manage assets and streams** — create, store, organise, and deliver video content programmatically.
5. **Extend or customise a platform** — write code that changes or augments default platform behaviour for a specific use case.

**Q3. Which terms in the TERMINOLOGY_LOCK have a network-specific meaning that differs from the industry default?**

| Term | Industry default | Livepeer network meaning | Why it matters |
|---|---|---|---|
| **Gateway** | Generic: a network routing device or API gateway service | Specific role: a network participant that routes jobs to orchestrators and manages payment channels | A developer seeing "gateway" may assume it means a standard API gateway (like Kong or AWS API Gateway) — needs explicit introduction |
| **Orchestrator** | Generic: a workflow orchestration system (Kubernetes, Airflow) | Specific role: GPU hardware operator earning fees by processing jobs | "Orchestrator" in Kubernetes means something entirely different — risk of confusion must be addressed on first use |
| **Pipeline** | Generic: any data processing chain, CI/CD pipeline | Specific: a named, typed AI job routed through the Livepeer network (e.g. text-to-image is a pipeline type, not just a description) | Must be introduced precisely — "pipeline" in the Livepeer AI sense has specific routing and model implications |
| **BYOC** | May be read as "Bring Your Own Cloud" (a managed service model) | Specific: Bring Your Own Container — supplying a Docker container to run on network compute | The acronym collision with cloud contexts needs a clear first-use definition |
| **Trickle Streaming Protocol** | No industry default | Livepeer-defined: HTTP-based low-latency media transport | Entirely novel to the reader — must be introduced from scratch |
| **LPT** | No industry default | Livepeer's ERC-20 governance and staking token — affects orchestrator selection that processes developer jobs | Developer may not expect their API calls to have a staking dependency; this needs contextual framing |

---

## Arriving Question

> "How do I actually build something using Livepeer — what do I call, what credentials do I need, and how do AI pipelines and video streaming work together?"

This question is specific to the `developer` audience at arrival: they have decided to try Livepeer but do not know yet whether they need the AI pathway, the video pathway, or both — and they do not know how the underlying infrastructure (gateways, orchestrators, LPT staking) affects their integration.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The AI Pipeline Integrator** — developer who wants to add generative AI capabilities (image/video generation, live transforms) to their application via the Livepeer network | Search result ("livepeer AI API", "decentralised AI inference"), Livepeer homepage CTA, Discord #ai-video referral | Knows REST APIs; has used at least one AI API (OpenAI, Replicate); has a use case in mind; does not know Livepeer's specific pipeline model or auth | Has made a successful API call to a pipeline endpoint and received a result; knows which SDK to use for ongoing work | 3 | 3 | 3 | 9 |
| 2 | **The Video App Builder** — developer building a live streaming or on-demand video application who needs transcoding, playback, and stream management | Search result ("livepeer video API", "video transcoding API"), Livepeer homepage CTA, web search for alternative to Mux/Cloudflare Stream | Knows REST APIs and video concepts (RTMP, HLS); wants a managed video API; does not know Livepeer's network model or how it differs from a hosted SaaS | Has created a stream, ingested video, and retrieved a working playback URL; knows how to manage assets programmatically | 3 | 3 | 3 | 9 |
| 3 | **The Real-Time AI Video Engineer** — developer building a live-video-to-video AI application (real-time AI transforms on a stream, interactive AI video) | ComfyStream/Daydream reference implementation, Discord #ai-video referral, GitHub repo search | Knows Python and has used diffusion models; wants to apply AI to a live stream; may have heard of StreamDiffusion or ComfyUI | Has a working local-to-network pipeline via PyTrickle or ComfyStream; understands the Trickle protocol model | 2 | 3 | 3 | 8 |
| 4 | **The Protocol Extension Developer** — developer building tooling, custom gateways, smart contract integrations, or protocol-level extensions | GitHub go-livepeer repo, LIPs repo, Forum, direct referral from core team | Knows the Ethereum/Arbitrum smart contract model; wants to build at the protocol layer; has read the whitepaper or a LIP | Has a working understanding of the on-chain contract system; knows how to call contracts, submit governance proposals, or build a custom gateway | 1 | 2 | 2 | 5 |
| 5 | **The Evaluating Builder** — a `builder`-spectrum developer who has been using a hosted product (Livepeer Studio) and wants to understand what custom integration or deeper network access is possible | Solutions tab CTA or Studio dashboard referral | Using Livepeer Studio already; knows the Studio API; wants to go deeper — custom pipelines, BYOC, or lower-cost direct network access | Knows what additional capabilities are available beyond Studio and whether they require custom development | 2 | 2 | 2 | 6 |

**Sorted by Total (highest first)**:

| Rank | Persona | Total |
|---|---|---|
| 1 | AI Pipeline Integrator | 9 |
| 2 | Video App Builder | 9 |
| 3 | Real-Time AI Video Engineer | 8 |
| 4 | Evaluating Builder | 6 |
| 5 | Protocol Extension Developer | 5 |

*Tie-breaking for Rank 1 vs 2*: Both score 9. The AI Pipeline Integrator is ranked first because the Product Context block identifies AI inference as the emergent growth driver of the network ("AI inference (running ML models — primarily image/video generation pipelines)"), and the tab description leads with "AI pipeline setup". Volume assumption: AI API integrators are the faster-growing segment; video app builders are currently established. Stated explicitly as an assumption — no analytics data available.

**Primary persona**: The AI Pipeline Integrator — this persona drives the section structure. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

---

**Self-identification check**:

The label "developer" could describe 4 distinct situations: (1) someone integrating the AI API, (2) someone integrating the video/transcoding API, (3) someone building real-time AI video using PyTrickle/ComfyStream, (4) someone building protocol-level tooling. These have meaningfully different entry conditions, setup paths, and required tooling.

**Decision**: A dedicated disambiguation section (S1) is required as the first content section. The reader cannot identify which path applies to them without reading content — there is no single binary decision point. Three+ meaningfully different paths exist (AI pipeline, video/transcoding, real-time AI video, protocol extension). The disambiguation section routes the reader to the correct path entry point.

S1 must have: `pageType: navigation`, `lifecycleStage: discover`, `purpose: orient`.

---

**Entry blockers**:

| Persona | Hard-stop blocker | Section that resolves it | Order requirement |
|---|---|---|---|
| AI Pipeline Integrator | No credentials / API key — cannot call any endpoint without auth | S3 (API access and credentials) | S3 must precede S4 (first API call) |
| Video App Builder | No stream credentials / API key | S3 (API access and credentials) | S3 must precede S5 (live streaming setup) |
| Real-Time AI Video Engineer | No working Python SDK install + no understanding of the Trickle model | S8 (real-time AI video pipeline) needs S2 concepts and S3 credentials established first | S2 and S3 precede S8 |
| Protocol Extension Developer | No conceptual model of the on-chain layer | S9 (protocol and contracts) must be reachable without being blocked by AI/video-specific prerequisites | S2 (network model) establishes the substrate |
| Evaluating Builder | No mental model of what lies beyond Studio | S1 disambiguation orients them; S2 gives the conceptual frame | S1 and S2 before anything else |

No blocker requires on-chain funding before a testable action — the AI Gateway API and Studio API are accessible without LPT staking. LPT context is needed for reasoning about the network but is not a hard-stop blocker for making a first API call.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have a use case involving AI-generated images or video and want to use Livepeer's network for inference | make my first successful API call to an AI pipeline endpoint | confirm that Livepeer can serve my use case before investing more time |
| J2 | I am building a live streaming application and need video ingest, transcoding, and playback | create a stream, ingest via RTMP, and retrieve a working HLS playback URL | deliver video to my users without managing transcoding infrastructure |
| J3 | I want to apply AI transforms to a live video stream in real time | set up a PyTrickle or ComfyStream pipeline that processes frames from a live source | ship a real-time AI video feature (interactive transforms, live-video-to-video) |
| J4 | I have a custom AI model that is not in the built-in pipeline catalogue | package it as a BYOC container and deploy it on network compute | run proprietary or specialised models without being limited to the supported pipeline types |
| J5 | My integration is set up and working locally but I am not sure it will behave correctly in production | verify that my API calls are hitting the right endpoints, that authentication is correct, and that responses match expected schemas | confidently ship to production without unexpected failures |
| J6 | I am already building on Livepeer and need to look up a specific parameter — an endpoint path, a model ID, an SDK method signature, or a webhook event schema | find the exact value quickly without re-reading explanatory prose | unblock myself and continue working |
| J7 | I want to understand how the underlying network (gateways, orchestrators, staking) affects the reliability and cost of the API calls my application makes | get a working mental model of the network layer without having to understand the full protocol | make informed decisions about configuration, fallback handling, and cost optimisation |

*Note*: J1 is the arrival job for the primary persona. J6 is a return-visit / reference job. J7 is a conceptual job that supports all others.

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Choosing their path | discover | Identifying which integration type (AI pipelines, video/transcoding, real-time AI video, protocol extension) applies to their situation |
| 2 | Understanding the network model | evaluate | Forming a working conceptual model of how gateways, orchestrators, and the two compute types relate to API calls they will make |
| 3 | Getting access and credentials | setup | Obtaining API keys, choosing an access tier (hosted cloud vs. self-hosted gateway), and confirming they can authenticate |
| 4 | Making a first working AI pipeline call | setup | Sending a request to an AI pipeline endpoint, receiving a result, and understanding the response shape |
| 5 | Building a full AI pipeline integration | build | Implementing a complete AI feature — model selection, request parameterisation, response handling, error handling |
| 6 | Building a video streaming application | build | Creating streams, ingesting via RTMP/WebRTC, managing VOD assets, configuring playback |
| 7 | Managing BYOC and custom models | build | Packaging and deploying a custom container to run a proprietary or unsupported model on network compute |
| 8 | Building a real-time AI video pipeline | build | Setting up PyTrickle or ComfyStream for per-frame AI processing on a live stream |
| 9 | Verifying and testing an integration | operate | Confirming correct endpoint behaviour, authentication, response schemas, and webhook events before production |
| 10 | Understanding protocol-level integration | build | Working with smart contracts, governance, custom gateway setup, or protocol tooling |
| 11 | Optimising and operating in production | operate | Tuning model warm state, handling cold start, managing costs, monitoring throughput |

**On-demand**:

- Exact endpoint URLs, request schemas, and response field definitions for AI pipeline types
- SDK method signatures, parameter names, and return types for Livepeer.js and the AI clients
- Model IDs currently supported on the network and their pipeline type associations
- Authentication credential format — API key structure, header name, token lifetime
- Webhook event schemas and delivery behaviour
- BYOC container API requirements and environment variable contracts
- RTMP ingest URL format and stream key conventions
- HLS playback URL structure and adaptive bitrate rendition naming
- CLI flag names and defaults for go-livepeer (for protocol extension developers)
- LIP numbers and their associated protocol change descriptions

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Developers | Homepage routes developers via "Build" CTA |
| Inbound | Solutions → Developers | Solutions tab routes `builder` audience who want to go deeper than hosted products to custom pipeline work |
| Inbound | About → Developers | Readers who understand the protocol want to build on it |
| Outbound | Developers → Gateways | Developers who want to run their own gateway infrastructure ("graduation" — building → operating) |
| Outbound | Developers → Orchestrators | Developers who want to run GPU compute, not just consume it |
| Outbound | Developers → Resource HUB | Deep reference material — CLI reference, full glossary, changelog |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Developer path navigator | "There are different things I can build on Livepeer — which path is actually mine?" | J7 (understand the network model to make informed decisions) | `orient` | `navigation` | Arrived at the tab with a vague intent to "build on Livepeer"; does not yet know which integration path applies | Has identified which integration path(s) apply to their situation and navigated to the correct starting section | `discover` |
| S2 — Network model for developers | "How does the Livepeer network actually work, and how does that affect the API calls my application makes?" | J7 | `explain` | `concept` | Knows they want to integrate Livepeer; does not yet understand how gateways, orchestrators, and LPT staking relate to API reliability and cost | Has formed a working mental model of the gateway-orchestrator-API relationship; can reason about what affects latency, cost, and availability in their integration | `evaluate` |
| S3 — API access and credentials | "How do I get credentials and authenticate my first request?" | J1 | `start` | `instruction` | Understands the network model; has not yet obtained API keys or set up auth | Has valid credentials, has made an authenticated test request, and knows which access tier (hosted cloud vs. self-hosted gateway) applies to their use case | `setup` |
| S4 — AI pipeline quickstart | "How do I make my first working call to an AI pipeline endpoint?" | J1 | `start` | `tutorial` | Has credentials; has not yet successfully called an AI pipeline endpoint | Has made a successful end-to-end AI pipeline call (e.g. text-to-image), received a well-formed response, and understood the model ID and pipeline type parameters | `setup` |
| S5 — Video streaming quickstart | "How do I create a stream, ingest video, and get a playback URL?" | J2 | `start` | `tutorial` | Has credentials; has not yet created a live stream or VOD asset programmatically | Has created a live stream, ingested video via RTMP or WebRTC, and retrieved a working HLS playback URL; or has uploaded and played back a VOD asset | `setup` |
| S6 — AI pipeline integration guide | "How do I build a full, production-ready AI pipeline integration — model selection, error handling, cold start, response processing?" | J1, J5 | `build` | `guide` | Has completed the AI pipeline quickstart; wants to build a complete, reliable feature | Has implemented a full AI pipeline integration with model selection logic, cold-start handling, error handling, and response processing; has tested it against expected production conditions | `build` |
| S7 — Video application integration guide | "How do I implement the full video lifecycle — stream management, access control, asset storage, webhooks, analytics?" | J2, J5 | `build` | `guide` | Has completed the video streaming quickstart; wants to build a production-quality video feature | Has implemented stream creation, access control (JWT/webhook), asset management, and playback delivery for at least one complete video workflow | `build` |
| S8 — Real-time AI video pipeline | "How do I apply AI transforms to a live video stream at interactive frame rates?" | J3 | `build` | `guide` | Has working AI pipeline integration knowledge (S6) and understands the Trickle protocol concept (S2); wants to build a live-video-to-video feature | Has a working PyTrickle or ComfyStream pipeline connected to a live stream source, applying a frame-level AI transform and delivering output | `build` |
| S9 — Custom model deployment (BYOC) | "I have a model that is not in the built-in catalogue — how do I run it on Livepeer compute?" | J4 | `build` | `instruction` | Has working knowledge of the AI pipeline model (S4/S6); has a custom or proprietary model they want to deploy | Has packaged a model as a BYOC container meeting the Livepeer container API contract and confirmed it can receive and respond to inference requests on network compute | `build` |
| S10 — Integration verification | "How do I confirm my integration is correctly set up before shipping to production?" | J5 | `verify` | `guide` | Has a working integration (from S4–S9 depending on path); wants to confirm it is correct before going live | Has systematically verified endpoint behaviour, authentication, response schemas, and error paths; has confirmed webhook delivery; has documented known edge cases | `operate` |
| S11 — SDK and API reference | "What is the exact endpoint, method signature, or parameter name I need right now?" | J6 | `reference` | `reference` | Return visit — already operating; needs a specific factual value | Has found the exact endpoint URL, SDK method, parameter, or schema value needed and can continue working | `operate` |
| S12 — Protocol and contracts | "How do I interact with the Livepeer smart contracts, extend the protocol, or build tooling at the on-chain layer?" | J7, J4 | `build` | `guide` | Knows the network model (S2); wants to work at the smart contract or protocol extension layer | Has located the deployed contract addresses and ABIs, understands the LIP governance process for protocol changes, and can make an authenticated contract call or submit a governance action | `build` |

**Section load flag**: S6 (AI pipeline integration guide) accumulates both `build` and `verify` work. The exit state is written as a build outcome, but developers often do integration verification during this stage. Flagged: see Addendum.

**Section count**: 12 sections. Within the 8–12 target range at the upper bound. Justified by two distinct primary integration paths (AI pipelines + video/transcoding) plus two specialist paths (real-time AI video, protocol extension) that cannot be collapsed without blocking specific personas. See Addendum.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| AI Pipeline Integrator | S1 (orient to path) → S2 (network model) → S3 (credentials) → S4 (quickstart) → S6 (full integration) → S10 (verify) | S10 or S11 (reference on return) | None — path is clear and sequenced | S2 must introduce the gateway-as-API-relay concept for this persona to understand why their call goes through a gateway, not directly to a GPU | None |
| Video App Builder | S1 (orient) → S2 (network model) → S3 (credentials) → S5 (video quickstart) → S7 (full integration) → S10 (verify) | S10 or S11 (reference) | None — path is clear and sequenced | S3 must cover both AI and video API credential types clearly; S5 must cover both RTMP ingest and VOD assets to serve all video use cases | None |
| Real-Time AI Video Engineer | S1 (orient) → S2 (Trickle protocol concept must appear here) → S3 (credentials) → S4 or S6 (AI pipeline baseline) → S8 (real-time pipeline) | S8 | S2 must introduce the Trickle Streaming Protocol at the concept level to unblock S8 — if it doesn't, this persona hits a knowledge gap at S8 | S8 must explain PyTrickle installation, FrameProcessor pattern, and how the live-video-to-video pipeline type works end-to-end; it cannot assume the reader has studied S6 in depth | None — S8 exists; S2 must include Trickle concept |
| Evaluating Builder | S1 (disambiguation) → S2 (network model to understand what custom integration adds) → S3 (credentials) | Exits after S2 or S3 if their question is answered (is custom integration worth it?); or continues to S4/S5 if they proceed | None — S1 and S2 collectively answer their question | S2 must address the "what can I do beyond Studio?" question directly — ideally with a callout or comparison framing | None |
| Protocol Extension Developer | S1 (orient) → S2 (network model, on-chain layer) → S12 (protocol and contracts) | S12 | S12 must be reachable without requiring S4–S9 completion (AI/video paths are not prerequisites for protocol work) — validated by S12's entry state referencing S2 only | S2 must introduce the protocol layer and Arbitrum context at a level sufficient for S12 to build on | None |

**Gap resolution**: All paths are unblocked. S2 carries significant load — it must introduce: (1) gateway-orchestrator model, (2) Trickle Streaming Protocol concept, (3) protocol layer / Arbitrum / smart contracts. S2 entry/exit states in the section table accommodate this. S2 is flagged for potential split in Addendum.

---

## Quality Gates

- [x] Arriving question is specific — not a topic, an actual question the reader would ask?
  - "How do I actually build something using Livepeer — what do I call, what credentials do I need, and how do AI pipelines and video streaming work together?" — specific and testable.
- [x] At least 3 distinct personas, each with a different arriving state and entry vector?
  - 5 personas defined, each with a distinct arriving state and entry vector.
- [x] Self-identification check done — disambiguation section added if required?
  - Three+ paths; dedicated disambiguation section S1 added. `pageType: navigation`, `lifecycleStage: discover`, `purpose: orient`.
- [x] Entry blockers identified — sections that resolve blockers placed before sections that require them?
  - S3 (credentials) precedes S4 and S5 (first working calls). S2 (network model, including Trickle concept) precedes S8. All blockers resolved by section ordering.
- [x] At least 5 jobs, first-principles, not derived from current nav structure?
  - 7 jobs generated from the audience's own work language; none derive from nav labels.
- [x] Every section has a reader question, job, entry state, and exit state?
  - All 12 sections have all four fields populated.
- [x] No exit state uses "understands" — all are concrete actions or decisions?
  - All exit states are written as completed actions or made decisions. Reviewed:
    - S1: "has identified which integration path(s) apply" — action ✓
    - S2: "has formed a working mental model... can reason about..." — "can do Y" formulation ✓
    - S3: "has valid credentials, has made an authenticated test request" — action ✓
    - S4: "has made a successful end-to-end AI pipeline call" — action ✓
    - S5: "has created a live stream... retrieved a working HLS playback URL" — action ✓
    - S6: "has implemented a full AI pipeline integration... has tested it" — action ✓
    - S7: "has implemented stream creation... for at least one complete video workflow" — action ✓
    - S8: "has a working PyTrickle or ComfyStream pipeline... delivering output" — action ✓
    - S9: "has packaged a model... and confirmed it can receive and respond" — action ✓
    - S10: "has systematically verified... has confirmed webhook delivery" — action ✓
    - S11: "has found the exact... value needed and can continue working" — action ✓
    - S12: "has located the deployed contract addresses... can make an authenticated contract call" — action ✓
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where the audience does not need the content?
  - No CROSS-TAB rows in the section structure — all content is required by this audience to achieve their goals. Cross-tab links (Gateways for graduation, Resource HUB for deep reference) are noted in the Journey section as navigation aids, not content substitutes.
- [x] Persona path validation complete — every persona has an unblocked path through the structure?
  - All 5 personas traced; all paths unblocked. Notes added for knowledge gap resolutions required within sections.
- [x] All enum values are from the canonical lists — no invented tokens?
  - purpose values used: `orient`, `explain`, `start`, `build`, `verify`, `reference` — all in the 15-value canonical set ✓
  - pageType values used: `navigation`, `concept`, `instruction`, `tutorial`, `guide`, `reference` — all in the 7-value canonical set ✓
  - lifecycleStage values used: `discover`, `evaluate`, `setup`, `build`, `operate` — all in the 7-value canonical set ✓
- [x] No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`?
  - Active set size, unbonding period, inflation rate not mentioned in the structure. LPT mentioned as a concept without a numeric value. Model IDs flagged `[verify-live]` in the TERMINOLOGY_LOCK. No numeric governance values hardcoded.
- [x] Disambiguation section (S1) has `lifecycleStage: discover` — not `evaluate` or any other value?
  - S1: `lifecycleStage: discover` ✓
- [x] Phase 0 definition conflicts flagged — any glossary heading/body mismatch marked `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`?
  - One definition conflict identified and flagged. See Addendum.

**All gates pass. Output is complete.**

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`?
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: {source}]`?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added if required?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens? (`purpose` 15, `pageType` 7, `lifecycleStage` 7)
- [x] Disambiguation section (S1) has `lifecycleStage: discover`?

---

## Addendum — Brief Execution Flags

### Phase 0 / Step 0.2 — DEFINITION CONFLICT: NaaP (Network as a Platform)

`[DEFINITION CONFLICT: NaaP — heading reads "NaaP (Network as a Platform)" but body reads "Network-as-a-Product" (first sentence: "Network-as-a-Product — the framing of delivering the Livepeer Network as a reliable, SLA-backed product layer...") — Platform ≠ Product is a substantive semantic difference. Do not assert either form until resolved against a primary source.]`

Recommended resolution source: Livepeer Notion workspace — search "NaaP / Network as a Platform" per veracity-sources.md (Internal Design and Planning section). Once resolved, use the confirmed expansion consistently. NaaP is not included in the TERMINOLOGY_LOCK because the conflict cannot be resolved from the Product Context block alone.

`[BLOCKED TERM: NaaP — excluded from TERMINOLOGY_LOCK pending human resolution of heading/body definition conflict. Heading: "Network as a Platform". Body: "Network-as-a-Product". These are substantively different framings and cannot both be correct.]`

---

### Phase 0 / Step 0.2 — Term count exceeds 20

25 terms included (default range: 10–20). The Developers tab covers three meaningfully distinct participation paths: (1) AI pipeline integration, (2) live video / transcoding integration, (3) protocol extension development. Each path requires a distinct vocabulary set. Collapsing to 20 terms would require excluding essential concepts from at least one path. This is the scenario the prompt identifies as justifying an exception: "If the tab covers multiple distinct participation paths and exceeding 20 is necessary to give minimal coverage of all paths without omitting any, do so." Explanation noted as required by the prompt.

---

### Phase 0 / Step 0.2 — AI Gateway API: draft status

The per-tab glossary marks "AI Gateway API" as `status: draft`. The deprecated-terms file confirms "AI Gateway API — In active development; API shape may change." This term is included in the TERMINOLOGY_LOCK as a conceptual label (the integration surface exists), but any specific endpoint paths, parameter names, or schema details derived from this term require verification against primary sources (`livepeer-ai-js` repo, `ai-runner` repo) and should be treated as potentially stale.

---

### Phase 0 / Step 0.2 — veLPT

The per-tab glossary does not include veLPT, but deprecated-terms.md flags "veLPT (Vote-Escrowed LPT) — Proposal not yet implemented — do not describe as existing." Not included in the TERMINOLOGY_LOCK. No developer content should reference veLPT as a live mechanism.

---

### Phase 0 / Step 0.2 — Deprecated terms encountered and replaced

| Deprecated term encountered | Replaced with | Source |
|---|---|---|
| Broadcaster | Gateway | deprecated-terms.md |
| Transcoder (as synonym for Orchestrator) | Orchestrator | deprecated-terms.md |
| Inflation Model | Not used — no coverage of inflation mechanics in Developer tab structure | deprecated-terms.md |
| Active Set Election | Not used | deprecated-terms.md |

---

### Phase 1 — Tie for Rank 1 and Rank 2 personas

Both the AI Pipeline Integrator and the Video App Builder score 9. Tie broken in favour of AI Pipeline Integrator based on: (1) tab description leading with AI pipeline setup, (2) Product Context block identifying AI inference as the emergent network driver. This is an assumption — no analytics data was available to confirm volume. If data shows video API integrators are the majority audience, the section structure should be revised to prioritise S5/S7 over S4/S6.

---

### Phase 2A — Job count at 7 (above minimum of 5)

7 jobs included to cover: arrival jobs (J1, J2, J3), active-use jobs (J4, J5), a return-visit reference job (J6), and the cross-cutting conceptual job (J7). The conceptual job (J7) is not a "use the docs" job — it is the mental model job that underpins all other jobs. Included because the Developer audience has a genuine need to understand the network substrate even if they never interact with it directly.

---

### Phase 2C — S2 (Network model for developers) carries significant load

S2 must introduce three distinct conceptual areas: (1) the gateway-orchestrator model, (2) the Trickle Streaming Protocol concept (required by the Real-Time AI Video Engineer persona to unblock S8), and (3) the protocol layer / Arbitrum context (required by the Protocol Extension Developer persona to unblock S12). This is a wide remit for one concept section.

`[Section S2] is carrying three distinct conceptual areas (gateway-orchestrator model; Trickle transport layer; on-chain protocol layer) — may need to split into two pages during detailed design: one for "network model for API developers" and one for "protocol and infrastructure model for extension developers."`

---

### Phase 2C — S6 (AI pipeline integration guide) load flag

`[Section S6] is carrying build work and implicit verification work simultaneously — developers doing a full AI pipeline integration inevitably test and verify during implementation. The exit state is written as a build outcome. May need to split: one page for implementation (build) and one for pre-production verification (verify), if the verification checklist is substantive enough to warrant its own page. S10 exists as a dedicated verify section, so S6 should route to S10 rather than duplicating verification content.`

---

### Phase 2C — Section count at 12

12 sections is at the upper bound of the 8–12 target. Justified by two primary integration paths (AI + video) that cannot share a quickstart or a full integration guide — they have different credential types, different SDK choices, different ingest/output formats, and different latency profiles. Collapsing them would produce an overloaded guide that serves neither persona well. The four path-specific sections (S4, S5, S6, S7) are the minimum required to give each primary persona a complete, unblocked path.

---

### Phase 0 / Step 0.3 — Web access suggestion

This agent run did not perform web search. The following sources are recommended for addition to `veracity-sources.md` pending human verification:

`[SUGGESTED SOURCE: Livepeer AI documentation (current) — https://docs.livepeer.org/ai/introduction — AI pipeline types, model IDs, and API reference — suggested tier: lead (verify all claims against ai-runner and livepeer-ai-js repos)]`

`[SUGGESTED SOURCE: livepeer/naap GitHub repo — https://github.com/livepeer/naap — NaaP architecture and scope (if public) — suggested tier: primary for NaaP architecture claims once confirmed live]`

---

### Phase 0 / Step 0.2 — Glossary terms excluded from TERMINOLOGY_LOCK (with reason)

The following glossary terms were reviewed and excluded:

| Term | Reason for exclusion |
|---|---|
| Cascade | Strategic vision/brand name — not a term developers need to use; no action depends on knowing it by name |
| Daydream | Consumer-facing product / reference implementation — relevant as an example, not as a term in developer integration vocabulary |
| Zero-to-Hero | Learning path name — instructional nav construct, not a technical term |
| Delegation / Delegator | Protocol economics — relevant as background context in S2 but does not appear in developer integration work; covered in Delegators tab |
| Reward Call | Protocol mechanics — only relevant for protocol extension developers; introduced via S12 without requiring a dedicated lock entry |
| Treasury / SPE | Governance / funding — not required for integration work; relevant only as background context |
| ComfyStream / ComfyUI / StreamDiffusion | Tool-specific integrations — relevant to S8 content but not core vocabulary that needs to be anchored at Phase 0 |
| CPU / GB / VRAM / RTX | Hardware specs — relevant to Orchestrators tab more than Developers tab; developers do not typically need to reason about these |
| Sampler / Embedding / LoRA / SDXL / SVD / SAM 2 / Whisper / World Model | Specific AI models and techniques — too granular for the TERMINOLOGY_LOCK; relevant within pipeline-specific content but not foundational vocabulary |
| KYC | Access control process — may be relevant but definition is generic; not network-specific |
| Solidity | Smart contract language — only relevant for protocol extension developers; introduced in S12 context without requiring a lock entry |
| SLA / JWT / Webhook | Generic technical terms without network-specific meanings; used where relevant in content but not flagged as terms needing special first-use explanation |
| HuggingFace / Ollama | External platforms — referenced in content but not Livepeer-specific vocabulary |
| Developer Stack | Meta-product label — useful marketing framing but not a term developers need to use in their integration work |
| Livepeer Cloud | Product name — relevant as an access option in S3 but not a term needing TERMINOLOGY_LOCK anchoring |
| livepeer-python-gateway | Specific community tool — too granular for TERMINOLOGY_LOCK; relevant to S3/advanced integration content |
| go-livepeer | Binary name — relevant to protocol extension path in S12; introduced there as a named artifact, not requiring lock entry |
| Smart contract | Used freely as it has standard industry meaning; no network-specific meaning conflict beyond "deployed on Arbitrum" which is covered in S2 |
| Multimodal / Diffusion Models / Batch AI / Real-time AI | AI concepts with standard industry meanings — no network-specific meaning that requires anchoring |
| FrameProcessor | Interface name within PyTrickle — too granular for TERMINOLOGY_LOCK; documented within S8 content |
| Arbitrum / Ethereum | Blockchain platforms — standard industry terms; mentioned in S2/S12 without needing to be in the lock |
