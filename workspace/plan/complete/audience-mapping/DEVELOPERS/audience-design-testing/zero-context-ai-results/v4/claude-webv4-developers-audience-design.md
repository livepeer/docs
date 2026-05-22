# Developers -- Audience Design

**Tab**: Developers
**Audience**: `developer` (primary); `builder` is a distinct path requiring disambiguation (see Phase 1)
**TERMINOLOGY_LOCK**: see Phase 0
**Generated**: 2026-03-23
**Status**: DRAFT -- awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `developer`

**TERMINOLOGY_LOCK**: `AI inference, video transcoding, pipeline, gateway, orchestrator, AI Gateway API, Livepeer Studio, Livepeer.js, PyTrickle, BYOC, LPT, protocol layer, Trickle Streaming Protocol, ComfyStream, model ID, cold start, warm model, RTMP, HLS, WebRTC, NaaP`

1. **This audience calls themselves**: "software engineer", "backend developer", "ML engineer", "AI developer", or "full-stack developer" -- not any Livepeer-specific label. The video-integration sub-path self-identifies as "app developer" or "video developer". The AI sub-path self-identifies as "ML engineer" or "AI engineer".

2. **Core job actions (in their language)**:
   - Call an API and get a result back
   - Integrate a capability into their app
   - Ship it to production
   - Debug why it is not working
   - Stay within cost and latency constraints

3. **Terms with network-specific meanings that differ from the industry default**:
   - **Gateway**: in general software, a gateway is an API proxy or routing layer. In Livepeer, Gateway is a protocol role: a node that manages payment channels, selects orchestrators, and routes jobs. A developer using a hosted gateway never sees this complexity -- but a developer building or operating a gateway does. Must be explained before use.
   - **Orchestrator**: in general software, an orchestrator is a workflow scheduler (Kubernetes, Airflow). In Livepeer, an orchestrator is a GPU compute node that processes jobs. Completely different meaning. Must be introduced with an explicit disambiguation.
   - **Pipeline**: in ML, a pipeline is a chained series of model operations. In Livepeer, "pipeline" specifically means a named workload type identified by its input and output modality (e.g. text-to-image, live-video-to-video) -- a parameter in an API call, not a custom-constructed model chain.
   - **LPT**: unfamiliar to most developers. Not a payment token for API calls -- developers pay through the gateway in standard currency. LPT is the staking and governance token that backs compute supply. Must be introduced in protocol context, not confused with billing.

---

## Arriving Question

> "Can I build what I want using Livepeer, and how do I actually start?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Volume | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | API integrator | Solutions tab CTA, or web search "livepeer video API" | Knows REST APIs; building an app that needs video streaming or AI output; evaluating whether to use hosted Livepeer or a competitor | A first API call returning a result; enough confidence to continue building | 3 | 3 | 3 | 9 |
| 2 | AI pipeline builder | Discord link, blog post, or "livepeer AI inference" search | ML/Python background; wants to run AI inference pipelines at scale or in real-time without managing GPU infrastructure | A working inference call to the AI Gateway API or a PyTrickle prototype streaming | 2 | 3 | 3 | 8 |
| 3 | Protocol integrator | GitHub search, LIPs reference, internal research | Building tooling, a custom gateway, or a protocol extension; already familiar with on-chain concepts | Knows which repos to read, how to run a local node, and where the on-chain interfaces are | 1 | 2 | 3 | 6 |
| 4 | Evaluating PM / technical lead | Solutions tab "need more technical depth" link | Technically literate but not the implementer; assessing feasibility, cost model, and integration scope | Can brief their engineering team; has a clear yes/no on feasibility | 2 | 1 | 2 | 5 |

**Primary persona**: API integrator (score 9) -- this persona drives the section structure. All other personas are accommodated within that structure; personas 2 and 3 require distinct sections or routing within sections.

**Self-identification**: A reader arrives thinking "I am a developer who wants to use Livepeer." That label maps to three meaningfully different setup paths with different SDKs, different starting requirements, and different mental models: (a) video streaming via Studio/REST API, (b) AI inference via the AI Gateway API or PyTrickle, (c) protocol-level tooling or custom gateway work. Three distinct paths with no single clear binary decision point -- a **dedicated disambiguation section is required as the first content section**.

**Entry blockers**:
- API integrator and AI pipeline builder: requires API credentials before any code can run. **Hard-stop blocker.** The section covering account setup and key acquisition (Section 3) must appear before any build tutorial.
- AI pipeline builder: additionally needs to know which pipeline types are available and what a model ID looks like before the first AI request will succeed. Addressed within Section 5 (Build an AI integration) -- pipeline selection and model ID format must precede the first code example.
- Protocol integrator: no API key required, but needs go-livepeer installed and running. Section 8 (Understand the protocol) must include a routing note flagging that this path can be entered directly from Section 1 without completing Sections 3--7.
- Evaluating PM: no hard-stop blockers -- they are reading, not executing.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I am deciding whether to use Livepeer for my app | understand what it actually offers -- video API, AI inference, or both -- and which product applies to my use case | determine fit before writing any code |
| 2 | I am ready to start | get an API key and make my first working call (stream creation or AI inference) | confirm the integration works in my environment |
| 3 | I am building a video feature | know how to ingest a live stream (RTMP/WebRTC), manage video assets, and deliver playback (HLS/WebRTC) | ship a complete video experience to my users |
| 4 | I am building an AI feature | know which pipeline types and models are available, how to format an AI Gateway API request, and how to handle the response | integrate AI-generated output into my application |
| 5 | I need low-latency or custom model behaviour | follow a path from a working API call to a real-time streaming prototype (PyTrickle / BYOC / ComfyStream) | evaluate whether the advanced capability meets my production requirements |
| 6 | My integration is live and something breaks or performs poorly | understand what went wrong -- error codes, latency spikes, model cold starts -- and how to fix it | resolve the issue without having to understand the full network architecture |
| 7 | I want to understand the underlying network | get a structured explanation of orchestrator selection, pricing, staking, LPT, and governance | reason about reliability, cost, and decentralisation trade-offs; build protocol-level tooling |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Finding their path | `discover` | Determining whether Livepeer fits their use case and which product applies to them |
| 2 | Understanding the network | `evaluate` | Forming a working model of how requests travel from their code to compute and back |
| 3 | Getting access | `setup` | Acquiring credentials and confirming the integration works with a first API call |
| 4 | Building the video feature | `build` | Implementing a complete live or on-demand video pipeline (ingest, transcode, deliver) |
| 5 | Building the AI feature | `build` | Implementing an AI inference integration (pipeline type, model ID, request/response) |
| 6 | Going real-time or custom | `build` | Extending to low-latency or BYOC territory (PyTrickle, ComfyStream, custom containers) |
| 7 | Running in production | `operate` | Monitoring, error handling, cost management, and latency optimisation for a live integration |
| 8 | Going deeper on the protocol | `optimise` | Understanding orchestrator economics, LPT, governance, and on-chain interfaces |

**On-demand** (what developers return to look up after completing the linear journey):

- Current AI pipeline types and their input/output format specifications
- Model IDs available on the network and their cold-start characteristics
- SDK method signatures and parameter names (Livepeer.js, PyTrickle)
- Error codes, status codes, and common failure patterns
- API rate limits, pricing model, and cost calculation method
- Webhook payload schemas and event types
- CLI flag names and defaults for go-livepeer (protocol integrator path)
- Smart contract addresses and ABI references (protocol integrator path)

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Solutions -> Developers | Builder has evaluated Studio and wants a deeper or custom integration path |
| Inbound | Community / external search -> Developers | Developer found Livepeer through ecosystem channels and wants to build |
| Outbound | Developers -> Gateways | Developer graduating to operating their own gateway infrastructure |
| Outbound | Developers -> Orchestrators | Developer wanting to understand or operate the compute supply side |
| Outbound | Developers -> About | Developer wanting deeper protocol economics, tokenomics, or governance context than Section 8 provides |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Which path is mine? | "I am a developer -- what does Livepeer offer and which part applies to me?" | Job 1 | `orient` | `navigation` | Arrived knowing they can code; does not know which Livepeer product matches their use case | Has identified their integration path -- video API, AI inference, or protocol/tooling -- and navigated to the correct starting point | `discover` |
| 2. How the network works (for builders) | "What is the network actually doing when I call the API -- who processes my request?" | Job 1 | `explain` | `concept` | Knows their path; does not yet know how requests travel from their code through the gateway to a compute node and back | Can explain in one sentence how a request travels from their application to compute and back; can reason about latency and pricing at a high level; can distinguish gateway from orchestrator | `evaluate` |
| 3. Get access | "How do I get an API key and make my first call?" | Job 2 | `start` | `instruction` | Has decided to proceed; has no credentials | Has a working API key and has received a successful HTTP response from at least one endpoint; knows which base URL and auth header to use | `setup` |
| 4. Build a video integration | "How do I ingest a live stream, manage video assets, and deliver playback to viewers?" | Job 3 | `build` | `tutorial` | Has working credentials and a basic API call; wants to ship a complete video feature | Has a running ingest-transcode-deliver pipeline returning a playback URL to a viewer | `build` |
| 5. Build an AI integration | "Which AI pipelines can I call, what does a request look like, and how do I handle the response?" | Job 4 | `build` | `tutorial` | Has working credentials; wants to add AI inference output to their application | Has sent a successful AI pipeline request and received generated output; knows how to select a pipeline type, specify a model ID, and parse the response schema | `build` |
| 6. Go real-time or custom | "How do I build a low-latency AI video pipeline, use my own model, or deploy a custom container?" [⚠ Design flag: may need to split -- carries both evaluation content (BYOC vs hosted trade-offs) and build-path content (PyTrickle / ComfyStream implementation)] | Job 5 | `build` | `guide` | Has a working AI integration; wants lower latency or custom model behaviour | Has a real-time pipeline prototype running, or has deployed a custom container and received a successful response; can articulate the trade-offs between hosted pipelines and BYOC for their use case | `build` |
| 7. Monitor and troubleshoot | "Why is my integration failing or running slowly, and how do I fix it?" | Job 6 | `troubleshoot` | `guide` | Has a live or near-live integration; encountering errors, latency spikes, or unexpected behaviour | Has identified the failure category (cold start, rate limit, model unavailability, network error) and applied the correct resolution; knows which metrics to watch in production | `troubleshoot` |
| 8. Understand the protocol | "What is the network doing under the hood -- staking, orchestrator selection, pricing, governance, LPT?" | Job 7 | `explain` | `concept` | Has a working integration or is a protocol integrator arriving directly from Section 1; wants to reason about the network or build tooling | Can describe the orchestrator selection mechanism, the role of LPT in compute supply, and where on-chain interfaces live; has located the relevant repos and contract addresses | `optimise` |
| 9. SDK and API reference | "What are the exact method signatures, parameters, response schemas, and defaults?" | Jobs 2, 3, 4, 5 | `reference` | `reference` | Actively building; needs an exact value or type | Has found the specific fact needed and returned to building | `build` |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| API integrator (video) | Section 1 | Section 4 (working pipeline), returns to Section 9 for reference | None | Section 3 must make the Studio path explicit -- not just "get an API key" generically; Studio vs self-hosted gateway path must be clear | None |
| AI pipeline builder | Section 1 | Section 5 or Section 6 (real-time/BYOC path), returns to Section 9 | None | Section 5 must cover pipeline-type selection and model ID format before the first code example -- otherwise the request will fail with no clear failure signal | None |
| Protocol integrator | Section 1 (routing note: may skip to Section 8 directly) | Section 8 + Section 9 (contract/repo reference) | None -- Section 1 routing note flags the direct-to-Section-8 path | Section 8 must not assume a working API integration as prior context; it must be self-contained for a reader arriving without one | None |
| Evaluating PM / technical lead | Section 2 | Section 8 (protocol overview satisfies feasibility assessment) | None | None | None |

All personas have complete, unblocked paths through the structure.

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority -- glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific -- not a topic, an actual question?
- [x] Personas described with motivation and entry vector -- not just role labels?
- [x] Self-identification check done -- dedicated disambiguation section added as Section 1?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles -- not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied -- decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done -- every persona has an unblocked path?
- [x] All enum values are canonical -- no invented tokens?

---

## Addendum -- Brief Execution Flags

- **[Phase 0 / Step 0.1]**: The Audience Definitions table assigns both `builder` and `developer` to the Developers tab. The brief's persona scoring rubric says to treat distinct paths as separate candidate personas. Treated `builder` (video API / Studio integration path) and `developer` (custom pipeline / BYOC / protocol path) as distinct personas rather than a single audience token. The primary audience token is `developer` per the table, but the `builder` path is the highest-volume entry vector and drives Section 4 (Build a video integration). Resolved via the disambiguation section (Section 1).

- **[Phase 0 / Step 0.2]**: `NaaP` acronym expansion conflict. The glossary defines NaaP as "Network-as-a-Product". `veracity-sources.md` explicitly flags the NaaP acronym expansion as ambiguous and designates the Livepeer Notion workspace as the authority for resolution. These are not two contradictory primary sources -- `veracity-sources.md` is the authority registry, and it explicitly withholds trust from the glossary for this term. NaaP was included in the TERMINOLOGY_LOCK as a concept label without committing to either expansion. [CONFLICT: NaaP acronym expansion -- glossary says "Network-as-a-Product", veracity-sources.md says verify in Notion -- do not assert either expansion until resolved against Notion NaaP pages]

- **[Phase 0 / Step 0.2]**: `AI Gateway API` is marked `draft` in the glossary and listed as high-staleness in `veracity-sources.md`. Included in the TERMINOLOGY_LOCK because it is central to the AI pipeline builder path, but every content section that references it must carry a `[verify-against: go-livepeer repo -- latest tagged release; livepeer-ai-js repo]` flag.

- **[Phase 0 / Step 0.2]**: `RTMP` is flagged in `deprecated-terms.md` as appearing twice in `livepeer-glossary.mdx`. The glossary-developers.md definition is consistent and standard. Treated as a single current term; the duplication is a source-file issue, not a terminology conflict.

- **[Phase 2C / Section 6]**: "Go real-time or custom" is carrying both evaluation work (BYOC vs hosted pipeline trade-offs) and build-path work (PyTrickle / ComfyStream / custom container implementation). Flagged in the section row. During detailed design this section should be evaluated for splitting into a decision guide (evaluation) and an implementation tutorial (build). The section count of 9 is within range even if split produces 10.

- **[Phase 2C / Section count]**: 9 sections -- within the 8--12 target. If Section 6 splits, the count reaches 10, still within range.

- **[Phase 0 / Step 0.3 / web access]**: No recent primary sources were found that contradict `veracity-sources.md`. The following suggested additions were identified during reasoning:

  `[SUGGESTED SOURCE: livepeer-ai-js repo -- https://github.com/livepeer/livepeer-ai-js -- JS/TS client for AI API, pipeline request schemas, response types -- primary (high staleness)]`

  `[SUGGESTED SOURCE: livepeer-ai-sdks repo -- https://github.com/livepeer/livepeer-ai-sdks -- Python client for AI API -- primary (high staleness)]`

  Both are already listed in veracity-sources.md. No new additions required.
