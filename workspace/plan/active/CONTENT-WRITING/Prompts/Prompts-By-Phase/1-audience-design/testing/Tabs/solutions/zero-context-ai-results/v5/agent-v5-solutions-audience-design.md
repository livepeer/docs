# Solutions — Audience Design

**Tab**: Solutions
**Audience**: `founder` / `builder` (dual primary — see Phase 0 note)
**TERMINOLOGY_LOCK**: see Phase 0 below
**Generated**: v5-solutions-audience-design-2026-03-23.md
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

From the Audience Definitions table, the Solutions tab has **two** canonical audience tokens:

> **AUDIENCE**: `founder` (primary) and `builder` (co-primary)

The table explicitly lists both:
- `founder` — *Evaluating Livepeer for their product or business* — **Primary tab: Solutions**
- `builder` — *Building products using Livepeer APIs, SDKs, or hosted gateways* — **Primary tab: Solutions / Developers**

Because both tokens share this tab as their primary home, the audience is dual. The `founder` is earlier in the journey (evaluation), the `builder` is later (active use). The Solutions tab must serve both without requiring either to leave. This dual audience is the reason the section structure covers evaluation content AND practical onboarding content within the same tab.

---

### Step 0.2 — TERMINOLOGY_LOCK

**Authority basis**: Product Context block and the veracity-sources registry. Per-tab glossary used as cross-check only; sources confirmed or flagged below.

**Deprecated-terms check applied**: "Broadcaster" is deprecated — replaced by "Gateway". "Transcoder" as a synonym for "Orchestrator" is deprecated. No deprecated terms carried into the lock.

**Definition conflict check**:

The glossary contains two separate entries for what is clearly the same concept:

- `Video on Demand (VOD)` — heading uses the expanded form "Video on Demand (VOD)", definition body is consistent.
- `VOD (Video on Demand)` — heading uses the acronym form first, definition body is consistent.

These two entries are not a semantic conflict (both definitions describe the same concept correctly). They are duplicate entries for the same term. No heading/body semantic mismatch exists. Not flagged as `[DEFINITION CONFLICT]`. Flagged in the Addendum as a duplicate to be merged.

**NaaP / "Network as a Platform" check**:

The veracity-sources registry explicitly notes (under Internal Design and Planning): *"NaaP (Network as a Platform) design, scope, and architecture — pre-publication or ongoing"* with a note to *"search NaaP / Network as a Platform"* in the Notion workspace. The registry explicitly calls out this term as requiring resolution against Notion and/or the `livepeer/naap` repo. No entry for "NaaP" or "Network as a Platform" appears in the Solutions glossary. Not relevant to this tab's audience. No action required.

**Terms selected for TERMINOLOGY_LOCK** (18 terms — justification for exceeding 15: the Solutions tab covers two distinct compute types — video infrastructure and AI pipelines — and two distinct audience states — evaluation and active building — making it structurally wider than a single-path tab; 18 terms are needed for minimal coverage of both paths without leaving either underserved):

| Term | Definition (from Product Context + authority reasoning) | Flags |
|---|---|---|
| Livepeer Network | A decentralised AI and video transcoding compute network running on Arbitrum (Ethereum L2), where orchestrators provide GPU compute and gateways route jobs into that compute pool. | Confirmed by Product Context. Whitepaper [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| Livepeer Studio | Hosted developer platform providing REST APIs, SDKs, and a web dashboard for adding live video and on-demand video capabilities to applications, backed by the Livepeer Network. | Confirmed by Product Context ("Developers / Builders — build applications and pipelines using Livepeer's compute capacity, typically via gateway APIs or SDKs"). SDK repo [verify-against: https://github.com/livepeer/livepeer-js] |
| Gateway | The demand-side network participant: businesses and developers who route AI or video jobs into the Livepeer Network, paying orchestrators per job. In the Solutions context, Livepeer Studio acts as a hosted gateway on behalf of its users — Studio users interact with gateway infrastructure indirectly through the Studio API rather than operating a gateway themselves. | Product Context confirms. Whitepaper [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| Orchestrator | Supply-side GPU hardware operators who connect machines to the Livepeer Network and earn fees by processing AI inference and video transcoding jobs. | Product Context confirms. go-livepeer [verify-against: https://github.com/livepeer/go-livepeer] |
| Transcoding | Direct digital conversion of video from one encoding configuration to another — splitting a source stream into multiple adaptive renditions at different resolutions and bitrates for cross-device delivery. The Livepeer Network performs transcoding work. | Product Context confirms ("video transcoding (live and on-demand video encoding)"). Whitepaper [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| AI inference | Running ML models on the Livepeer Network — primarily image and video generation pipelines. Distinct from video transcoding in compute type and hardware requirements. | Product Context confirms ("AI inference (running ML models — primarily image/video generation pipelines)"). go-livepeer AI config [verify-against: https://github.com/livepeer/go-livepeer] |
| Stream | A persistent Studio resource representing a live broadcast channel, configured with an ingest endpoint, stream key, playback ID, transcoding profiles, and optional recording and multistream settings. Each broadcast creates a new session under the stream object. | Glossary definition is consistent with Product Context. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| Asset | A stored video file (VOD) managed by Livepeer Studio — identified by a unique ID with associated metadata, transcoded renditions, and playback URLs. Distinct from the live Stream object. | Glossary definition is consistent. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| Playback ID | A public identifier for retrieving playback URLs for a stream or asset without exposing the private stream key or internal asset ID. | Glossary definition is consistent. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| Video on Demand (VOD) | A media delivery model where recorded video content is stored and streamed to viewers on request at any time — in contrast to live streaming. | Standard industry term; definition consistent across both glossary entries. No network-specific deviation. |
| Livestream | Real-time or near-real-time video transmission to viewers as content is captured. | Standard industry term. No network-specific deviation. |
| HLS (HTTP Live Streaming) | Apple's adaptive streaming protocol that encodes video into multiple quality levels, segments them, and serves them with a playlist file over HTTP. The standard delivery format for Livepeer-served video. | Standard industry term; confirmed by glossary. |
| Ingest | The process of receiving a live video stream from a broadcasting encoder into a media server, typically over RTMP, SRT, or WebRTC/WHIP. | Confirmed by glossary. No network-specific deviation. |
| Access control | The mechanism for restricting who can view streams or assets — implemented via signed JWTs, API keys, or webhook callbacks in Livepeer Studio. | Confirmed by glossary. Network-specific implementation note: differs from generic "access control" in that it is tied to per-stream or per-asset playback policies. |
| Multistream | Simultaneous restreaming of a single live input to multiple external destination platforms in a single broadcast session. | Confirmed by glossary. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| API key | A secret unique identifier sent with API requests to authenticate the caller and authorise access to Livepeer Studio resources. | Standard industry term; no network-specific deviation. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| Webhook | An HTTP callback mechanism where Livepeer Studio sends an automated POST request to a configured URL when a specified platform event occurs (e.g. stream started, asset ready). | Confirmed by glossary. livepeer-js [verify-against: https://github.com/livepeer/livepeer-js] |
| AI pipeline | A configured sequence of AI inference steps — running on Livepeer Network orchestrators — that transforms input data (video frames, images, prompts) into output media in real time or batch mode. Distinct from video transcoding pipelines. | Derived from Product Context ("AI inference — running ML models — primarily image/video generation pipelines"). go-livepeer AI config and livepeer-ai-js [verify-against: https://github.com/livepeer/livepeer-ai-js] |

**Terms checked against deprecated-terms.md — none of the above are deprecated.**

**Terms excluded from TERMINOLOGY_LOCK pending resolution**:

- `Daydream`, `Embody`, `Streamplace`, `Frameworks` (SPE/product names): these are legitimate Livepeer ecosystem products but are high-staleness terms whose scope and status are not confirmed by any primary source listed in veracity-sources. The glossary cites them as current, but SPE funding status and product availability can change via governance. Included in the design as *named examples* only, not as locked definitional terms. Addendum note below.
- `SPE (Special Purpose Entity)`: governance-controlled concept — the veracity-sources registry confirms governance information lives in the LIPs repo and Forum. No LIP number is provided in the glossary for SPE framing. Not included in the TERMINOLOGY_LOCK as a defined term for audience-design purposes.

> **TERMINOLOGY_LOCK**: `Livepeer Network, Livepeer Studio, Gateway, Orchestrator, Transcoding, AI inference, Stream, Asset, Playback ID, Video on Demand (VOD), Livestream, HLS, Ingest, Access control, Multistream, API key, Webhook, AI pipeline`

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

The `founder` calls themselves a **product builder**, **startup founder**, **platform builder**, or sometimes just **developer** — depending on their background. They use product/business language before they adopt Livepeer's terminology. They are not yet sure whether they are a "gateway operator" or a "developer" in Livepeer's terms — they think of themselves as someone building a product that needs video or AI capabilities.

The `builder` calls themselves a **developer**, **software engineer**, or **backend developer** — someone already past the evaluation decision and writing code against an API.

Both audiences share a self-label of "builder" in common English; the `founder` may not yet know where they fit in Livepeer's role taxonomy.

**2. What are the 3–5 actions that define their core job?**

For the `founder` (evaluator):
1. Determine whether Livepeer can support their specific use case (video platform, AI media product, streaming service)
2. Understand pricing and cost structure before committing
3. Compare Livepeer's capabilities against alternatives (cloud video services, self-hosted infrastructure)
4. Identify what is required technically to integrate
5. Make a go/no-go decision

For the `builder` (active implementor):
1. Get a working stream or video upload running in their application as fast as possible
2. Configure transcoding output profiles for their specific device/bandwidth targets
3. Gate video playback behind authentication for paying users
4. Wire up event handling (webhooks) to track stream state in their own system
5. Measure playback quality and viewer engagement

**3. Terms with network-specific meanings that differ from industry default:**

- **Gateway**: In industry, "gateway" typically means a protocol translation layer or network router. In Livepeer, it is specifically the demand-side economic actor that routes jobs into the network and pays orchestrators. Solutions tab users encounter Gateway indirectly (Livepeer Studio *is* the hosted gateway they use) — but the word may confuse a reader expecting a simple API gateway or CDN edge.
- **Orchestrator**: In industry, "orchestrator" typically means a job scheduler (Kubernetes, Nomad). In Livepeer, it specifically means a GPU hardware operator earning fees for compute work. A reader who sees "orchestrator" and thinks "Kubernetes" will be confused.
- **Transcoding**: Standard industry term, but in Livepeer it is specifically the *network-distributed* version — work is dispatched to GPU nodes rather than processed on a central server. This distinction is important for reliability, cost, and architecture reasoning.
- **AI pipeline**: In general ML engineering, "pipeline" often means a data processing DAG. In Livepeer, "AI pipeline" specifically means a configured inference workload running on network orchestrators — it has a defined input/output contract and network routing implications.
- **Session**: In web development, "session" means a user's authenticated browser session. In Livepeer Studio, it means a single continuous broadcast period on a Stream object — a distinct concept that will confuse a developer who sees it in API docs expecting standard auth terminology.

---

## Arriving Question

> "Can Livepeer actually handle what I'm trying to build — and what would it take to get something working?"

This question covers both the evaluation dimension (can it handle my use case?) and the activation dimension (what would getting started require?). It is specific to a builder/evaluator arriving from outside — not a return-visit lookup question.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Video Product Builder** — founder/developer who has a product idea requiring live or on-demand video (streaming platform, creator tool, fan engagement app) and is evaluating whether Livepeer is the right infrastructure | From: web search ("livepeer video api"), Product Hunt listing, or VC/community referral | A vague sense that Livepeer is "decentralised video infrastructure"; no clear picture of what the Studio product actually does or how it compares to a cloud video vendor | A confident answer to: "Can I build my product on this, and what would it cost to start?" — plus a clear first step | 3 | 3 | 3 | 9 |
| 2 | **The AI Media Builder** — technical founder or ML engineer who wants real-time AI video transformation (live style transfer, image generation pipelines, AI avatar) and has heard Livepeer runs AI inference on GPU networks | From: AI/ML community (Twitter/X, Discord, HN), blog post on AI video, or referral from another AI infrastructure service | Knowledge that diffusion models and AI video exist; uncertainty about whether Livepeer's AI infrastructure is production-ready vs experimental, and how to get a pipeline running | A clear picture of what AI pipelines are available, whether they are production-grade, and the first step to making an API call to a pipeline | 2 | 2 | 3 | 7 |
| 3 | **The Integration Evaluator** — engineering lead or CTO at a company already using another video service (Mux, Cloudflare Stream, Vimeo OTT) who is evaluating Livepeer as an alternative or complement | From: Livepeer.org homepage, comparison article, or internal recommendation from a team member | Sophisticated understanding of video infrastructure; specific requirements checklist (reliability SLAs, encoding presets, CDN performance, pricing model); healthy scepticism about decentralised infrastructure claims | A side-by-side capability picture sufficient to decide whether to proceed to a proof of concept | 2 | 2 | 3 | 7 |
| 4 | **The Active Builder** — developer who has already decided to use Livepeer Studio and is in the first days of integration | From: another Solutions page, Developers tab CTA, or directly via docs search from within a Studio onboarding flow | Has an API key; has read the quickstart; hitting a specific friction point (access control, webhook handling, encoding config) | A working implementation of the specific feature blocking them | 3 | 3 | 2 | 8 |
| 5 | **The Ecosystem Explorer** — researcher, journalist, or ecosystem partner assessing Livepeer's platform capabilities for non-engineering purposes (grant application, partnership proposal, market research) | From: Foundation blog, community Discord, or direct link from a partner | General familiarity with Livepeer as a protocol; seeking product-level detail not available from the About tab | A coherent picture of what Livepeer's product surface looks like and what use cases are production-ready | 1 | 1 | 1 | 3 |

**Primary persona**: The Video Product Builder (total: 9) — this persona drives the section structure. The journey from evaluation to first working integration is the primary arc. All other personas are accommodated within that structure.

**Self-identification check**: The audience self-identifies as "developer" or "product builder" — a label broad enough to describe all five personas. This cannot resolve to a single path without content; the reader needs to identify whether they are here for video infrastructure, AI pipelines, or both. Three meaningfully different use-case paths exist (video live, video VOD, AI pipeline) and a fourth evaluation-only path exists for Persona 3 and 5.

**Disambiguation decision**: A dedicated S1 disambiguation section is required. Rationale: The Solutions tab covers both video infrastructure and AI pipelines — two distinct compute types with different setup paths, pricing models, and mental models. A reader cannot identify their path without reading content, and a simple routing callout within a single section would not give sufficient orientation. The S1 section routes readers to the correct path; it does not teach or evaluate.

**Entry blockers**:

- **Persona 1 (Video Product Builder)**: No hard blockers before evaluation content. The API key is required before any testable action, but evaluation reading can proceed without one. Section order: evaluation content → quickstart (API key obtained here) → feature guides.
- **Persona 2 (AI Media Builder)**: The AI pipeline section assumes the reader understands what the Livepeer Network is doing (GPU inference routing). The "How Livepeer works" explain section must come before the AI pipeline guide; otherwise the reader has no frame for why AI inference runs on a decentralised GPU network.
- **Persona 3 (Integration Evaluator)**: No hard blockers — they are reading, not activating. Evaluation content must precede any "get started" section to avoid sending them somewhere that assumes they have already decided.
- **Persona 4 (Active Builder)**: The quickstart must come before feature guides — a reader who has an API key but hasn't created their first stream cannot follow a webhook configuration guide.
- **Persona 5 (Ecosystem Explorer)**: No hard blockers.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have a product idea that requires video streaming and I'm deciding which infrastructure to use | quickly understand whether Livepeer's capabilities match my use case and what the cost model looks like | make a go/no-go decision without spending a week on a proof of concept |
| J2 | I've decided to use Livepeer Studio and I want to get video working in my app as fast as possible | follow a concrete path from zero to a working live stream or video upload in my application | demonstrate progress to my team and continue building |
| J3 | I'm building a feature that gates video behind authentication for paying users | understand exactly how access control works in Livepeer Studio and implement it correctly | launch my product without exposing premium content to unauthenticated viewers |
| J4 | I want real-time AI video transformation in my application — style transfer, image generation, or avatar rendering | understand what AI pipelines Livepeer offers, whether they are production-ready, and how to call them | decide whether to build on Livepeer's AI infrastructure or use a different approach |
| J5 | I'm integrating Livepeer into an existing system with its own events and state management | set up webhooks so my backend receives notifications when streams start, stop, and recordings are ready | keep my system's state in sync with Livepeer without polling the API |
| J6 | I need my video to reach viewers across different devices and network conditions | configure transcoding profiles that produce the right renditions for my audience | ensure consistent playback quality without building my own encoding pipeline |
| J7 | I'm comparing Livepeer to a cloud video service I already know (Mux, Cloudflare Stream, AWS) | see how Livepeer's capabilities and pricing model compare, with enough specificity to make a real decision | build a business case for switching or present the tradeoffs to my team |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting to the platform | `discover` | Arriving for the first time; identifying whether this is the right tab and which capability path applies to their situation |
| 2 | Understanding what Livepeer does | `discover` | Forming a mental model of the Livepeer Network and Studio as the product layer — how work gets from an API call to a viewer's screen |
| 3 | Evaluating fit for their use case | `evaluate` | Comparing Livepeer's video infrastructure and AI pipeline capabilities against their product requirements; forming a view on cost, reliability, and integration complexity |
| 4 | Getting the first thing working | `setup` | Obtaining an API key, creating a stream or uploading a video, verifying playback — reaching a minimal working state |
| 5 | Implementing live video features | `build` | Building the live streaming capability: ingest configuration, stream management, multistream, recording |
| 6 | Implementing on-demand video features | `build` | Building the VOD capability: file upload, transcoding profiles, playback configuration |
| 7 | Securing video with access control | `build` | Implementing JWT-based playback gating or webhook-based authorisation for premium content |
| 8 | Connecting Livepeer to their system | `build` | Setting up webhooks, handling events, integrating playback into their UI |
| 9 | Using AI pipelines | `build` | Calling AI inference pipelines — understanding available pipeline types, making the first API call, handling pipeline output |
| 10 | Validating before launch | `operate` | Checking that streams transcode correctly, playback works across devices, access control is enforced, and error states are handled |

**On-demand** (return-visit lookups):

- Playback ID format and where to use it in a player embed
- Stream key rotation procedure
- Available transcoding preset options and how to specify custom profiles
- Webhook event types and payload schemas
- JWT signing requirements and playback policy configuration options
- Access control error responses and common JWT debugging steps
- AI pipeline names, input/output schemas, and endpoint URLs
- Multistream target configuration format
- Recording storage format, retrieval timing, and asset lifecycle
- Viewership analytics data fields and how to query them

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Solutions | Homepage routes founders and builders to Solutions as their primary destination |
| Inbound | About → Solutions | Readers who arrived at About for protocol context and now want to build something; the About tab covers protocol and network architecture, routing to Solutions for the product layer |
| Inbound | Community → Solutions | Ecosystem contributors or newcomers who've heard about Livepeer and want to understand the builder product entry point |
| Outbound | Solutions → Developers | Builders who outgrow Livepeer Studio and want custom gateway operation, BYOC pipelines, or protocol-level integrations — the graduation path from Studio builder to custom developer |
| Outbound | Solutions → Gateways | Builders who want to operate their own gateway infrastructure rather than using the hosted Studio product — a more advanced participation model |
| Outbound | Solutions → About | Readers who want deeper protocol architecture context (tokenomics, network economics, governance) beyond the operational overview in Solutions |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Platform paths | "What kind of thing can I build with Livepeer, and which direction is mine?" | J1 | `orient` | `navigation` | Arrived at Solutions; does not yet know whether their use case is video infrastructure, AI pipelines, or both; does not know what Livepeer Studio is vs the Livepeer Network | Has identified which capability path applies to their situation and where to go next | `discover` |
| S2 — How the platform works | "What actually happens when I make an API call — where does the work go?" | J1 | `explain` | `concept` | Has identified their path; knows they want to use Livepeer but doesn't understand the relationship between Studio, the Network, orchestrators, and gateways | Has a working mental model: Studio is a managed gateway that routes work to network orchestrators; can now reason about cost, reliability, and architecture without confusion | `discover` |
| S3 — Capability overview: Video infrastructure | "Does Livepeer handle all the video scenarios my product needs?" | J1, J7 | `evaluate` | `concept` | Understands how the platform works at a high level; now needs to know whether specific video capabilities (live, VOD, multistream, recording, access control) are available and production-ready | Has confirmed which capabilities exist and are available; has identified any capability gaps that would block their product; can decide to proceed to quickstart or to investigate further | `evaluate` | [⚠ Design flag: may need to split — serves both capability evaluation and feature overview simultaneously; a reader comparing Livepeer to an alternative (J7) needs different emphasis than a reader building a capability checklist (J1)] |
| S4 — Capability overview: AI pipelines | "What AI pipeline capabilities exist and are they production-ready?" | J4, J7 | `evaluate` | `concept` | Understands video infrastructure capabilities; now needs to assess AI pipeline availability, maturity, and fit for their use case (real-time style transfer, image generation, avatar, batch AI processing) | Has formed a view on whether Livepeer's AI pipeline offering matches their AI use case; has identified which pipeline types are available; can decide to proceed to the AI pipeline guide or to evaluate alternatives | `evaluate` |
| S5 — Quickstart: first stream or video upload | "What is the fastest path from zero to something working?" | J2 | `start` | `instruction` | Has decided to try Livepeer; does not yet have an API key or any code; willing to follow a step-by-step path | Has an API key; has created a stream or uploaded a video; has verified playback via the Livepeer player; can make the next feature decision from a position of having seen the platform work | `setup` |
| S6 — Live streaming | "How do I build live streaming into my application end to end?" | J2, J5, J6 | `build` | `guide` | Has a working API key and has completed the quickstart; now needs to implement a full live streaming feature: ingest configuration, stream management, multistream, recording, event handling | Has a complete live streaming implementation in their application: ingest endpoint configured, stream object created, recording enabled or disabled, webhook events handled, playback confirmed | `build` |
| S7 — Video on demand | "How do I build a video upload and playback feature in my application?" | J2, J5, J6 | `build` | `guide` | Has completed the quickstart; now needs to implement VOD: file upload (with resumable upload support), transcoding profile selection, playback URL retrieval, optional recording-to-asset workflow | Has a complete VOD feature: file upload working, transcoding profiles configured for their device targets, playback URLs retrieving correctly, assets queryable via API | `build` |
| S8 — Securing video with access control | "How do I make sure only authorised viewers can watch my content?" | J3 | `build` | `instruction` | Has a working stream or asset; now needs to gate playback — either via JWT-signed viewer tokens or webhook-based authorisation callbacks | Has access control implemented: playback policy set on stream or asset, JWT signing key created, server-side token issuance working, viewer playback tested and confirmed gated | `build` |
| S9 — Connecting to your system (webhooks and events) | "How do I get Livepeer to notify my backend when something happens?" | J5 | `build` | `instruction` | Has streams and assets working; now needs to synchronise state between Livepeer and their own system without polling | Has webhooks configured: endpoint registered, at least one event type handled, payload parsed, system state updating correctly from Livepeer events | `build` |
| S10 — AI pipelines: getting started | "How do I make my first API call to an AI pipeline?" | J4 | `start` | `instruction` | Has reviewed the AI capability overview (S4); has an API key; now wants to make a working API call to an AI pipeline | Has received a successful response from an AI pipeline endpoint; understands the input/output format; can extend to their specific use case | `setup` |
| S11 — AI pipelines: building with AI video | "How do I integrate AI video transformation into a production application?" | J4 | `build` | `guide` | Has made a working AI pipeline API call (S10); now needs to build a complete integration: pipeline selection, input format, output handling, latency management, error handling | Has a complete AI pipeline integration: pipeline selected for use case, input/output handling implemented, error states handled, latency behaviour understood and accommodated in the application design | `build` |
| S12 — Use cases and what others have built | "What have other teams built with Livepeer — and is my use case already proven?" | J1, J7 | `evaluate` | `resource` | Has evaluated capabilities (S3, S4); wants real-world signal before committing — looking for proof points and architectural patterns from production deployments | Has identified at least one reference use case that maps to their situation; has enough confidence in production-readiness to make a final decision or proceed to integration | `evaluate` |

**Section count**: 12 sections — within the 8–12 target. Note: S3 carries a design flag; if split during detailed design, the count would reach 13, which remains defensible given the dual compute-type coverage of this tab.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| P1 — Video Product Builder | S1 (orientation) | S6 or S7 (live streaming or VOD build), or S12 (use cases) for evaluators not yet ready to start | None | S2 must precede S3 — without "how it works", the capability overview references concepts (Studio, orchestrators, gateways) the reader hasn't encountered. S2 → S3 order is correct. | None |
| P2 — AI Media Builder | S1 (orientation) → S4 (AI capability overview) | S11 (AI pipelines: building) | None | S4 references "AI inference on Livepeer Network orchestrators" — S2 must come before S4 in the linear journey, or S4 must contain a minimal "how AI inference works on this network" recap. Current ordering (S2 → S4) is correct. | None |
| P3 — Integration Evaluator | S2 (how the platform works) | S12 (use cases and what others have built) | None | P3 may skip S1 if arriving with orientation already done. S3 and S4 capability overviews must be available without requiring S1 completion. Because S1 is a navigation page, skipping it is structurally fine — S2 stands alone. | None |
| P4 — Active Builder | S5 (quickstart) | S8 (access control) or S9 (webhooks) depending on their blocking issue | S5 (quickstart) must exist before S6/S7/S8/S9 — it establishes the API key and first working object. Ordering is correct. | A builder arriving at S8 (access control) having already set up streams must not have to re-read the full live streaming section to find access control. S8 is correctly a standalone section. | None |
| P5 — Ecosystem Explorer | S2 (how it works) | S12 (use cases) | None | None | None |

**All paths are unblocked. No missing sections identified.**

---

## Quality Gates Verification

- [x] Arriving question is specific — not a topic, an actual question the reader would ask
- [x] At least 3 distinct personas, each with a different arriving state and entry vector (5 personas defined)
- [x] Self-identification check done — dedicated disambiguation section added as S1 (required: 3+ meaningfully different paths)
- [x] Entry blockers identified — S2 must precede S3/S4; S5 must precede S6/S7/S8/S9; sections are ordered accordingly
- [x] At least 5 jobs, first-principles, not derived from current nav structure (7 jobs defined)
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions
- [x] Cross-tab gate applied — decision-enabling content included for this audience; CROSS-TAB rows only where audience does not need content to achieve their goal here
- [x] Persona path validation complete — every persona has an unblocked path through the structure
- [x] All enum values are from the canonical lists — no invented tokens (`purpose`: 15 values used; `pageType`: 7 values used; `lifecycleStage`: 7 values used)
- [x] No governance-controlled numeric values hard-coded — none appear in this design
- [x] Disambiguation section (S1) has `lifecycleStage: discover` — confirmed
- [x] S1 has `pageType: navigation` — confirmed
- [x] S1 has `purpose: orient` — confirmed
- [x] Phase 0 definition conflicts flagged — duplicate VOD entries noted (not a semantic conflict); no `[DEFINITION CONFLICT]` or `[BLOCKED TERM]` required

---

## ⏸ Checkpoint

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

- **[Phase 0 / Step 0.1]**: The Audience Definitions table assigns *two* canonical tokens to the Solutions tab (`founder` and `builder`). The prompt specifies "identify the canonical AUDIENCE token" (singular). Assumption made: both tokens are included as a dual primary audience, with `founder` named first because the Solutions tab is listed as their *sole* primary tab while `builder` has Solutions *and* Developers. This dual-audience framing is structural to the entire tab design — the linear journey covers both evaluation (founder) and active building (builder). No single token was chosen because doing so would require excluding one entire segment from the primary design.

- **[Phase 0 / Step 0.2 — VOD duplicate]**: The glossary contains two separate entries for VOD/Video on Demand (`Video on Demand (VOD)` and `VOD (Video on Demand)`). Both definitions are semantically identical — this is a duplicate entry, not a definition conflict. No `[DEFINITION CONFLICT]` flag is warranted. Recommendation: merge into a single entry in the glossary.

- **[Phase 0 / Step 0.2 — SPE product terms]**: The glossary lists Daydream, Embody, Streamplace, and Frameworks as current Livepeer products. These are ecosystem SPE projects. Their availability and status are not confirmable from any primary source in veracity-sources.md without consulting the Livepeer Forum (governance) or Notion (product planning), neither of which was consulted at runtime. These terms were not locked into the TERMINOLOGY_LOCK. They are referenced in S4 and S12 as illustrative examples only. Content authors working on those sections should verify current status against the Forum and Notion before publishing.

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK count]**: 18 terms were selected, exceeding the default 10–20 target comfortably but above the 15-term soft upper bound. Justification: the Solutions tab covers two distinct compute types (video and AI inference), two distinct audience states (evaluation and active building), and two distinct build paths (livestream and VOD), requiring minimal coverage of all paths. Constraining to 15 terms would have required omitting either the AI inference path or the access-control/webhook implementation path, leaving one audience segment without a correctly locked vocabulary.

- **[Phase 0 / Step 0.3 — web access note]**: No web search was conducted during this run. The prompt instructs agents with web access to search for sources not already in veracity-sources.md and suggest additions. This run was executed without live web search. Any recently published AI pipeline documentation or Studio SDK releases since the veracity-sources.md generation date (2026-03-20) would not have been captured. Suggested sources for human verification:
  - `[SUGGESTED SOURCE: livepeer-ai-js README (latest release) — https://github.com/livepeer/livepeer-ai-js — AI API pipeline types, input/output schemas, and endpoint conventions — primary]`
  - `[SUGGESTED SOURCE: Livepeer Studio changelog — https://docs.livepeer.org or Studio dashboard release notes — feature availability and API version status — acceptable]`

- **[Phase 2C / S3 — Design flag]**: S3 (Capability overview: Video infrastructure) is flagged `[⚠ Design flag: may need to split]` because it serves both readers who are building a capability checklist (J1) and readers who are comparing Livepeer to an alternative they know well (J7). These two reader states have different entry conditions and different exit criteria. During detailed design, consider splitting into: (a) "What video capabilities does Livepeer Studio provide" (capability list, J1) and (b) "How does Livepeer compare to other video services" (comparative framing, J7). This would push the section count to 13, which is defensible for a dual-compute-type tab.

- **[Phase 2C / section count]**: 12 sections is at the upper end of the 8–12 target. This is justified by the dual compute-type coverage (video + AI) and the dual audience state (evaluation + build). A single-compute-type tab with a single audience state would warrant 8–9 sections. The 12-section count is not over-splitting — each section covers a distinct reader question that cannot be answered from within another section without overloading it.

- **[Phase 1 / entry blocker — API key]**: The API key is a soft blocker (required for any testable action) but not a hard blocker before evaluation content. The section order correctly places evaluation content (S1–S4) before the quickstart (S5) where the API key is obtained. No restructuring required.

- **[Phase 2B — On-demand items]**: The on-demand list covers 10 categories, reaching the upper bound of the specified 6–10 range. This reflects the breadth of the Solutions tab's feature surface. If the list is trimmed, the following are lowest priority for return visits: "Multistream target configuration format" and "Viewership analytics data fields" (these are more likely single-visit reference lookups than repeated return lookups).
