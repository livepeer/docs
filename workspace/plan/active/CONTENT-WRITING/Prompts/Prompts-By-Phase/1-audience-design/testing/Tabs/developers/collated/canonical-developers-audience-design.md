# Developers — Canonical Audience Design

**Tab**: Developers
**Audience**: `developer`
**Synthesised from**:
- `claude-webv4-developers-audience-design.md`
- `chatgpt-v4-developers-audience-design.md`

**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| Gateway | Not a generic reverse proxy or API routing layer. In Livepeer, Gateway is the demand-side network actor that manages payment channels, selects Orchestrators, and routes jobs. A developer using a managed surface (Livepeer Studio) never sees this complexity; a developer building or operating a gateway does. Must be explained before use. | — | 2-run consensus |
| Orchestrator | Not a workflow scheduler (not Kubernetes, not Airflow). In Livepeer, an Orchestrator is the GPU compute node that processes AI inference or video transcoding jobs on the network. Completely different meaning from the industry default. Must be introduced with an explicit disambiguation. | — | 2-run consensus |
| LPT | Not an app credit, API payment token, or utility point. LPT is the staking and governance token that affects network participation and security. Developers pay through gateway surfaces in standard currency. LPT backs compute supply. Must be introduced in protocol context, not confused with billing. | — | 2-run consensus |
| AI inference | The act of running an AI model to produce an output (image, video, text, audio) via the network. Distinct from video transcoding, which is format/quality transformation of existing video content. | — | 2-run consensus |
| Video transcoding | Format and quality transformation of video content by the Orchestrator network. Distinct from AI inference. | — | 2-run consensus |
| AI Gateway API | The product-level integration surface for AI inference via the network. Not merely a generic API label. Its exact name, endpoint structure, and versioning are draft-sensitive and require verification before any content cites it by name. | `[verify-against: https://github.com/livepeer/livepeer-ai-js]` | 2-run consensus |
| Livepeer Studio | The managed developer surface for accessing video and AI capabilities without running Gateway infrastructure. Not the network itself. | `[verify-against: https://github.com/livepeer/livepeer-js]` | 2-run consensus (definition from ChatGPT run) |
| Livepeer.js | The JavaScript/TypeScript SDK for Livepeer Studio integration. | `[verify-against: https://github.com/livepeer/livepeer-js]` | 2-run consensus |
| Pipeline | In ML, a pipeline is a chained series of model operations. In Livepeer, "pipeline" specifically means a named workload type identified by its input and output modality (e.g. text-to-image, live-video-to-video) — a parameter in an API call, not a custom-constructed model chain. Must be introduced with this disambiguation for ML/AI developer audiences. | — | [single-run: Claude only — included because ML-vs-Livepeer meaning divergence is a genuine entry blocker for AI pipeline builder personas with no substitute term] |
| BYOC | "Bring Your Own Container" — not just bringing any container; it refers specifically to packaging custom AI workloads to run through Livepeer's compute path. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 2-run consensus for term; definition from ChatGPT run |
| PyTrickle | The Python SDK for low-latency real-time streaming on Livepeer, used in live-video-to-video and interactive AI media pipelines. | `[verify-against: https://github.com/livepeer/pytrickle]` | [single-run: Claude TERMINOLOGY_LOCK entry, ChatGPT suggested source — included because it is the primary SDK for the real-time AI path with no substitute term] |
| ComfyStream | Tool for running ComfyUI workflows as real-time video pipelines on Livepeer. | `[verify-against: https://github.com/livepeer/comfystream]` | 2-run consensus |
| Model ID | The identifier used to specify which AI model to run in an AI pipeline request. | `[verify-against: https://github.com/livepeer/livepeer-ai-js]` | 2-run consensus |
| Cold start | The latency cost incurred when an AI model is not already loaded on an Orchestrator (not a "warm model"). Relevant to latency management for AI pipeline calls. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 2-run consensus |
| Warm model | An AI model that is already loaded on an Orchestrator and ready to serve a request without cold-start latency. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 2-run consensus |
| Text-to-Image | An AI pipeline type: generates an image from a text prompt. | `[verify-against: https://github.com/livepeer/livepeer-ai-js]` | 2-run consensus (ChatGPT run) |
| Image-to-Video | An AI pipeline type: generates a video from an image input. | `[verify-against: https://github.com/livepeer/livepeer-ai-js]` | 2-run consensus (ChatGPT run) |
| Live-video-to-video | An AI pipeline type: processes a live video stream through an AI model in real time. | `[verify-against: https://github.com/livepeer/go-livepeer]` | 2-run consensus (ChatGPT run) |
| NaaP | Acronym of contested expansion. Do not assert an expansion until verified against Notion. | `[CONFLICT: NaaP acronym — glossary says "Network-as-a-Product"; veracity-sources.md designates Notion as authority — verify before any content cites this label]` | [single-run flag: Claude run — carried as open item] |

---

## Arriving Question

> "I need to ship a working AI or video feature on Livepeer — which build path fits my product, and what do I actually implement first?"

**Synthesis note**: Claude's run asked "Can I build what I want using Livepeer, and how do I actually start?" — emphasising fit-evaluation. ChatGPT's run asked "I need to ship a working AI or video feature on Livepeer — which build path fits my product, and what do I implement first?" — emphasising build-path selection and first action. The canonical question combines the fit-evaluation intent of Claude's version with the build-path and first-action specificity of ChatGPT's version. ChatGPT's phrasing is closer to the arriving mental state of the primary persona (Fast Feature Shipper / API integrator) who has typically already decided to use Livepeer and needs to know where to start.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | API integrator / Fast Feature Shipper | Solutions tab CTA, web search "livepeer video API" or "livepeer AI inference", internal product handoff | An existing app and a concrete feature request; knows REST APIs; evaluating whether hosted Livepeer meets the need; limited appetite for managing infrastructure | A first successful integration path that can ship quickly; enough confidence to continue building | 3 | 3 | 3 | 9 | 2-run consensus; primary persona confirmed by both runs |
| 2 | Interactive Media Builder | Demo link, real-time AI example, Discord/forum referral | A latency-sensitive product idea and partial media knowledge; wants low-latency AI video or live interaction; no settled implementation pattern | A working low-latency media loop and the right transport/processing pattern | 2 | 3 | 3 | 8 | 2-run consensus (ChatGPT: "Interactive Media Builder"; Claude: "AI pipeline builder" covers this path) |
| 3 | Custom Model Porter | Forum thread, GitHub mention, internal ML handoff, Discord | A model, workflow, or container that does not fit a default pipeline path | A packaging and execution path for custom inference on Livepeer compute | 2 | 3 | 3 | 8 | 2-run consensus (ChatGPT: "Custom Model Porter"; Claude: "AI pipeline builder" / "Protocol integrator" overlap covers this) |
| 4 | Protocol integrator / toolmaker | GitHub search, LIPs reference, governance discussion, technical referral from About tab | Building tooling, a custom gateway, or a protocol extension; already familiar with on-chain concepts; wants a clear source map | Knows which repos to read, how to interact with on-chain interfaces, and where contract addresses and governance surfaces are | 1 | 2 | 2–3 | 5–6 | 2-run consensus (Claude: "Protocol integrator" Impact=3; ChatGPT: "Protocol Toolmaker" Impact=2; canonical Impact=2 using lower value per scoring rule) |

**Primary persona**: API integrator / Fast Feature Shipper — confirmed by both runs (both scored 9; both designated as driving the section structure).

**Self-identification**: Both runs independently determined that the label `developer` does not route cleanly to one path — it spans at least three materially different arriving states (video API integration, AI inference integration, protocol/tooling work) with different SDKs, setup requirements, and success criteria. **Canonical decision: dedicated disambiguation section required as the first content section.** This is a 2-run consensus on the dedicated section decision (Step 4.5: 2+ runs → dedicated section is canonical).

**Entry blockers**:
1. **Path ambiguity** — reader does not know which Livepeer product or surface applies to their use case. Hard-stop blocker. Resolved first by Section 1 (disambiguation / choose your build track). Must precede all build sections.
2. **Credential / API access** — API integrator and AI pipeline builder / Interactive Media Builder cannot execute any code without credentials. Hard-stop blocker for building personas. Section 3 (Get a first working result / Get access) must appear before any tutorial section.
3. **Pipeline type and model ID format** — AI pipeline builder and Interactive Media Builder will fail their first AI request if they do not know the available pipeline types and the model ID format before the first code example. Resolved within the AI build section — pipeline selection and model ID format must precede the first AI code example in that section.
4. **Go-livepeer / local node** — Protocol integrator does not need an API key but needs go-livepeer installed and running. Section 8 (Understand the protocol) must include a routing note allowing direct entry from Section 1 without completing Sections 3–7.
5. **Surface ambiguity (Studio vs self-hosted gateway)** — reader does not know whether to use Livepeer Studio or set up their own gateway. Resolved within Section 1 (disambiguation). See Open Items #5.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I am deciding which Livepeer product or path fits my feature | choose the right build path and understand what each Livepeer surface actually does | start with the lowest-complexity integration that still meets my requirements, without discovering I chose the wrong path mid-build |
| 2 | I am ready to start building | get a first successful AI or video request working end-to-end | prove the integration works in my environment and confirm I am on the right path before investing more time |
| 3 | I am building a video feature | implement the right ingest, transcode, and delivery pattern for my use case (live stream or on-demand) | ship a complete video experience to my users with the correct media behaviour |
| 4 | I am building an AI inference feature | know which pipeline types and models are available, how to format a request to the AI Gateway API, and how to handle the response schema | integrate AI-generated output into my application correctly |
| 5 | I need low-latency, real-time, or custom model behaviour | choose and implement the right real-time transport and processing pattern, or package my own model/container for Livepeer compute | hit responsiveness targets or use my specialised logic without rebuilding the wrong architecture |
| 6 | I am connecting this feature to my broader product | integrate auth, events, webhooks, and callbacks so the feature works within my real product environment | make the integration usable inside a production product, not just as a standalone demo |
| 7 | My integration is live or nearly live and something is wrong or slow | verify correctness, diagnose failures by layer, and tune the metrics that matter (latency, quality, cost) | release with confidence and resolve production issues without needing to understand the full network architecture |

**Coverage check**:
- Arrival job: Job 1 (path selection / fit evaluation)
- Active-use jobs: Jobs 2, 3, 4, 5, 6 (first request through full feature implementation)
- Return-visit / reference job: covered by the on-demand category set and Job 7 (troubleshoot/verify)
- Edge cases: Job 5 (real-time / custom compute) and Job 6 (integration wiring) serve the Interactive Media Builder and Custom Model Porter personas whose paths diverge from the primary linear journey.

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Find the right build track | discover | Identifying which Livepeer integration path fits their product goal and their level of infrastructure ownership |
| 2 | Map the surface they are building against | evaluate | Working out what layer they are actually integrating against, what Livepeer owns vs what they own, and how requests travel to compute and back |
| 3 | Get the first response back | setup | Completing the smallest working AI or video request successfully; acquiring credentials |
| 4 | Build the product video flow | build | Turning the first request into a real application-grade live or on-demand video pipeline |
| 5 | Build the product AI flow | build | Implementing the correct AI pipeline pattern for their product (pipeline type, model ID, request/response) |
| 6 | Extend into real-time or custom compute | build | Adding low-latency media loops (PyTrickle / live-video-to-video) or custom model/container execution (BYOC / ComfyStream) where the product requires it |
| 7 | Verify, troubleshoot, and optimise for production | operate | Verifying correctness before release, diagnosing live failures by layer, and tuning latency/quality/cost |
| 8 | Go deeper on the protocol | optimise | Understanding orchestrator selection, LPT, governance, and on-chain interfaces for protocol-level reasoning or tooling |

**On-demand** (what developers return to after completing the linear journey):

- Current AI pipeline types and their input/output format specifications
- Model IDs available on the network and cold-start characteristics
- SDK method signatures, parameter names, and response schemas (Livepeer.js, PyTrickle)
- Error codes, status codes, and common failure patterns
- API rate limits, pricing model, and cost calculation method
- Webhook and callback payload schemas and event types
- Auth, token, and playback-control patterns
- BYOC packaging and execution requirements
- Release-readiness and verification checklists
- Performance and cost tuning levers
- CLI flag names and defaults for go-livepeer (Protocol integrator path)
- Smart contract addresses and ABI references (Protocol integrator path)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Solutions → Developers | Builder has evaluated Studio and wants a deeper or custom integration path |
| Inbound | Home / About → Developers | Reader understands the platform narrative and now needs to build something concrete |
| Inbound | Community / external search → Developers | Developer found Livepeer through ecosystem channels and wants to build |
| Inbound | Gateways → Developers | A Gateway-focused reader needs SDK or application integration detail |
| Outbound | Developers → Gateways | Developer graduating to operating their own gateway infrastructure or providing gateway services |
| Outbound | Developers → Orchestrators | Developer wanting to understand or operate the compute supply side |
| Outbound | Developers → About | Developer needing deeper protocol economics, tokenomics, or governance context beyond what Section 8 provides |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1. Choose your build track | Which Livepeer integration path actually matches what I am trying to ship? | Job 1 | orient | navigation | Has a product goal and knows they can code; cannot yet tell whether they need managed API access, real-time media work, custom compute, or protocol-adjacent depth | Has identified which setup path applies to their situation (video API, AI inference, real-time/custom, or protocol tooling) and navigated to the correct starting point | discover |
| S2. Map the surface you are building against | What am I integrating with, and what does each layer own? | Job 1 | explain | concept | Knows their rough product goal and selected track, but does not yet know the boundary between their app code, Gateway surfaces, Orchestrators, and protocol layers; does not know how a request travels from their code to compute and back | Can point to the specific Livepeer surface they will integrate against; can distinguish gateway from orchestrator; can reason about latency and pricing at a high level; can explain in one sentence how a request travels from their application to compute and back | evaluate |
| S3. Get a first working result | How do I get credentials and make the first successful request with the lowest friction? | Job 2 | start | tutorial | Has chosen a path and knows which surface to use, but has no credentials and has not yet sent a real request | Has a working API key (or equivalent access), has received a successful HTTP response from at least one endpoint, and knows which base URL and auth header to use | setup |
| S4. Build application video flows | How do I ingest a live stream, manage video assets, and deliver playback to viewers? | Job 3 | build | tutorial | Has working credentials and a basic API call; wants to ship a complete live or on-demand video feature | Has implemented the chosen video workflow (ingest, transcode, deliver) and has a running pipeline returning a playback URL to a viewer | build |
| S5. Build application AI flows | Which AI pipeline types can I call, what does a request look like, and how do I handle the response schema? | Job 4 | build | tutorial | Has working credentials and wants to implement AI inference output in their application; has not yet sent an AI pipeline request | Has sent a successful AI pipeline request and received generated output; knows how to select a pipeline type, specify a model ID, and parse the response schema | build |
| S6. Extend into real-time or custom compute | How do I build a low-latency AI video loop, use my own model, or deploy a custom container? [⚠ Design flag: may need to split into (a) live interactive media loop — PyTrickle / live-video-to-video and (b) custom model / container — BYOC / ComfyStream; see Open Items #1] | Job 5 | build | guide | Has a working AI or video integration; wants lower latency, real-time interactivity, or custom model behaviour that the default hosted paths do not support | Has a real-time pipeline prototype running, or has packaged a custom workload and chosen the correct execution path for it; can articulate the trade-off between hosted pipelines and BYOC for their use case | build |
| S7. Monitor, troubleshoot, and verify | Why is my integration failing or slow, and how do I confirm it is ready for users? [⚠ Design flag: may need to split into (a) pre-release verification, (b) live failure diagnosis by layer, (c) latency/quality/cost tuning; see Collation Notes — Structural Disagreement #1] | Job 7 | troubleshoot | guide | Has a live or near-live integration; encountering errors, latency spikes, unexpected behaviour, or preparing for release | Has identified the failure category (cold start, rate limit, model unavailability, network error) and applied the correct resolution; has completed a release-readiness pass for the chosen path; knows which metrics to watch and what tuning levers are available | troubleshoot |
| S8. Understand the protocol | What is the network doing under the hood — orchestrator selection, LPT, governance, on-chain interfaces — and where do I start if I want to build protocol-level tooling? | Job 7 | explain | concept | Has a working integration or is a Protocol integrator arriving directly from Section 1 without completing Sections 3–6; wants to reason about the network or build tooling against it | Has identified the relevant software, contract, or governance surface for the tool or extension they want to build; can describe the orchestrator selection mechanism, the role of LPT in compute supply, and where on-chain interfaces and contract addresses are located | optimise |
| S9. SDK, API, and protocol reference | What are the exact method signatures, parameter names, response schemas, contract addresses, and defaults? | Jobs 2, 3, 4, 5 | reference | reference | Actively building; needs an exact value, type, or schema | Has found the specific fact needed and returned to building | build |

**Section count**: 9 — within the 8–12 target. If Open Item #1 is resolved by splitting S6 into two sections, count reaches 10 (still within range). If Open Item #2 is resolved by adding an auth/events section, count reaches 10 or 11 (still within range).

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| API integrator / Fast Feature Shipper | S1 (Choose your build track) | S4 (working video pipeline) or S5 (working AI pipeline), returns to S9 for reference | None | S3 must make the Studio vs self-hosted gateway path explicit — not a generic "get an API key" instruction; see Open Items #5 | None |
| Interactive Media Builder | S1 (Choose your build track) | S6 (real-time pipeline prototype), returns to S9 for reference | None | S5 must cover pipeline-type selection and model ID format before the first AI code example — otherwise the first request fails with no clear failure signal; S6 must not assume high ML expertise | None — S6 carries a split-flag; see Open Items #1 |
| Custom Model Porter | S1 (Choose your build track) | S6 (packaged workload + chosen execution path), returns to S9 for reference | None | S6 must explain BYOC packaging requirements before the first container attempt; model ID / pipeline compatibility must be addressed early in S6 | None — S6 carries a split-flag; see Open Items #1 |
| Protocol integrator / toolmaker | S1 (routing note: may navigate directly to S8), S2 optional | S8 (source map, contract addresses, repo locations) + S9 (contract/repo reference) | None — S1 routing note flags the direct-to-S8 path; S8 must be self-contained for a reader who has not completed a working API integration | S8 must not assume a working API integration as prior context; it must be self-contained for a reader arriving without one | [single-run flag — verify]: Claude's run noted this self-containment requirement; ChatGPT's run did not flag it explicitly |

All personas have complete, unblocked paths through the canonical section structure.

---

## Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas: consensus >= 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across runs (both runs agreed: API integrator / Fast Feature Shipper)?
- [x] Self-identification decision: 2-run consensus → dedicated disambiguation section as S1?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival (Job 1), active-use (Jobs 2–6), return-visit/reference (Job 7 + on-demand categories), edge cases (Jobs 5, 6)?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags and verify flags: carried through from any run (S6 split-flag, S7 split-flag, AI Gateway API, NaaP, BYOC, PyTrickle)?
- [x] All personas unblocked?
- [x] No single-run section included where the job is already served by an on-demand category or another section?
- [x] Every structural disagreement in Collation Notes has explicit reasoning?
- [x] `integrate` and `verify` noted as canonical purpose values in Open Items and design flags?
