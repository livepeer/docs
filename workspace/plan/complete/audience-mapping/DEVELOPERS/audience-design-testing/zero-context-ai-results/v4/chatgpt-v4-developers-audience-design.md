# Developers — Audience Design

**Tab**: Developers
**Audience**: developer
**TERMINOLOGY_LOCK**: [Arbitrum, Gateway, Orchestrator, LPT, AI inference, video transcoding, BYOC [verify-against: https://github.com/livepeer/go-livepeer], Livepeer Studio [verify-against: https://github.com/livepeer/livepeer-js], Livepeer.js [verify-against: https://github.com/livepeer/livepeer-js], AI Gateway API [verify-against: https://github.com/livepeer/livepeer-ai-js], ComfyStream [verify-against: https://github.com/livepeer/comfystream], Text-to-Image [verify-against: https://github.com/livepeer/livepeer-ai-js], Image-to-Video [verify-against: https://github.com/livepeer/livepeer-ai-js], Live-video-to-video [verify-against: https://github.com/livepeer/go-livepeer], Model ID [verify-against: https://github.com/livepeer/livepeer-ai-js], Warm model [verify-against: https://github.com/livepeer/go-livepeer], Cold start [verify-against: https://github.com/livepeer/go-livepeer]]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `developer`
**TERMINOLOGY_LOCK**: `[Arbitrum, Gateway, Orchestrator, LPT, AI inference, video transcoding, BYOC [verify-against: https://github.com/livepeer/go-livepeer], Livepeer Studio [verify-against: https://github.com/livepeer/livepeer-js], Livepeer.js [verify-against: https://github.com/livepeer/livepeer-js], AI Gateway API [verify-against: https://github.com/livepeer/livepeer-ai-js], ComfyStream [verify-against: https://github.com/livepeer/comfystream], Text-to-Image [verify-against: https://github.com/livepeer/livepeer-ai-js], Image-to-Video [verify-against: https://github.com/livepeer/livepeer-ai-js], Live-video-to-video [verify-against: https://github.com/livepeer/go-livepeer], Model ID [verify-against: https://github.com/livepeer/livepeer-ai-js], Warm model [verify-against: https://github.com/livepeer/go-livepeer], Cold start [verify-against: https://github.com/livepeer/go-livepeer]]`

1. This audience calls themselves: product engineers, AI engineers, media engineers, or developer-platform engineers.
2. Core job actions: wire AI or video into an application; send requests to a compute surface; shape a pipeline around product requirements; package specialised workloads when needed; connect auth, events, and internal systems; verify that the build behaves correctly under real usage.
3. Terms with network-specific meanings that differ from industry default:
   - **Gateway** — not a generic reverse proxy; it is the demand-side network actor that routes jobs, handles payment flow, and selects Orchestrators.
   - **Orchestrator** — not a workflow scheduler; it is the compute-supply operator executing AI inference or video transcoding jobs on the network.
   - **LPT** — not an app credit or utility point; it is the staking and governance token that affects network participation and security.
   - **BYOC** — not just “bring any container”; it refers to packaging custom AI workloads to run through Livepeer’s compute path.
   - **Livepeer Studio** — not the network itself; it is a managed developer surface for accessing video and AI capabilities without running Gateway infrastructure.
   - **AI Gateway API** — a product-level integration surface for network inference, not merely a generic API label; its exact shape is draft-sensitive and requires verification before exact reference use.

---

## Arriving Question

> "I need to ship a working AI or video feature on Livepeer — which build path fits my product, and what do I implement first?"

---

## Personas

**Scoring assumption**: In the absence of analytics, volume and depth are inferred from the Product Context emphasis that developers typically build through gateway APIs or SDKs first, then move deeper only when their product requires more control.

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Fast Feature Shipper | Search result, Solutions CTA, internal product handoff | An existing app, a concrete feature request, and limited appetite for owning infrastructure | A first successful integration path that can ship quickly and expand later | 3 | 3 | 3 | 9 |
| 2 | Interactive Media Builder | Demo link, real-time AI example, Discord/forum referral | A latency-sensitive product idea and partial media knowledge, but no settled implementation pattern | A working low-latency application loop and the right transport/processing pattern | 2 | 3 | 3 | 8 |
| 3 | Custom Model Porter | Forum thread, GitHub mention, internal ML handoff | A model, workflow, or container that does not fit a default path | A packaging and execution path for custom inference on Livepeer compute | 2 | 3 | 3 | 8 |
| 4 | Protocol Toolmaker | GitHub, governance discussion, technical referral from About | Interest in building protocol-adjacent tooling, extensions, or deeper integrations rather than only consuming managed surfaces | A clear source map for the code, contract, and governance surfaces they need to touch | 1 | 2 | 2 | 5 |

**Primary persona**: Fast Feature Shipper — this persona drives section structure.
**Self-identification**: The label `developer` does **not** route cleanly to one path here. It can describe at least four materially different arrival states with different setup depth and success criteria. A dedicated disambiguation section is therefore required as the first content section.
**Entry blockers**:
1. **Path ambiguity** — resolved first by **Section 1: Choose your build track**.
2. **Surface ambiguity** — resolved next by **Section 2: Map the surface you are building against**.
3. **Testability blockers** — resolved before deeper build sections by **Section 3: Get a first working result**, then by path-specific sections for live, custom, or protocol-adjacent work.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I need to add AI or video to an existing product quickly | choose the right build path | start with the lowest-complexity surface that still fits my requirements |
| 2 | When I am validating whether Livepeer can support a real feature | get a first successful request working end-to-end | prove the feature inside my app rather than only reading concept pages |
| 3 | When I am building a production-facing application flow | implement the right video or AI pattern for my product | ship the user-facing capability with the correct media and inference behaviour |
| 4 | When I need an interactive or low-latency experience | choose and implement the right real-time processing pattern | hit responsiveness targets without rebuilding the wrong architecture first |
| 5 | When I already have a model, workflow, or deeper extension idea that does not match the default path | choose the right custom execution or extension path | keep my specialised logic while using Livepeer’s compute or protocol surfaces |
| 6 | When I am connecting this work into a larger system | integrate auth, events, callbacks, and internal services | make the feature usable inside a real product environment |
| 7 | When the build is live or nearly live | verify correctness, diagnose failures, and tune behaviour | release with confidence and improve latency, quality, or cost over time |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Find the right build track | discover | Identify which implementation path fits their product and level of control |
| 2 | Map the network surface | evaluate | Work out what layer they are actually integrating against and what Livepeer owns versus what they own |
| 3 | Get the first response back | setup | Complete the smallest working AI or video request successfully |
| 4 | Build the product flow | build | Turn the first request into a real application workflow for video, AI, or both |
| 5 | Add deeper control where needed | build | Extend into real-time, custom compute, or protocol-adjacent work if the product requires it |
| 6 | Connect surrounding systems | build | Add auth, events, callbacks, and internal service connections |
| 7 | Prove and improve production readiness | operate | Verify the build, release it safely, fix issues, and optimise what matters |

**On-demand**:
- Current SDK methods and request shapes
- Supported pipeline types and model categories
- Current Model ID references and capability notes
- Live ingest, playback, and low-latency transport options
- Auth, token, and playback-control patterns
- Webhook and callback behaviour
- BYOC packaging and execution requirements
- Failure diagnosis by layer
- Release-readiness and verification checklists
- Performance and cost tuning levers

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Solutions → Developers | A reader moves from product evaluation into custom implementation depth |
| From | Home / About → Developers | A reader understands the platform narrative and now needs to build something concrete |
| From | Gateways → Developers | A Gateway-focused reader needs SDK or application integration detail |
| From | Community → Developers | A discussion, demo, or contribution path turns into hands-on implementation work |
| To | Developers → Gateways | A builder decides to own routing infrastructure or provide gateway services directly |
| To | Developers → About | A developer needs deeper protocol, governance, or tokenomics context for a design or tooling decision |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Choose your build track | Which build path actually matches what I am trying to ship? | #1 Choose the right build path | orient | navigation | Has a product goal but cannot yet tell whether they need managed access, low-latency media work, custom compute, or protocol-adjacent depth | Has identified which setup path applies to their situation | discover |
| 2. Map the surface you are building against | What am I integrating with, and what does each layer own? | #1 Choose the right build path | explain | concept | Knows the rough product goal and selected track, but not the boundary between app code, Gateway surfaces, Orchestrators, and protocol layers | Can point to the Livepeer surface they will integrate against and the responsibilities they retain | evaluate |
| 3. Get a first working result | How do I make the first successful request with the lowest friction? | #2 Get a first successful request working end-to-end | start | tutorial | Has chosen a track and knows which surface to use, but has not yet completed a real request | Has completed a first successful AI or video request | setup |
| 4. Build application video flows | How do I turn the first success into a real live or on-demand video feature? | #3 Implement the right video or AI pattern for my product | build | tutorial | Has a basic successful request and now needs an application-grade media flow | Has implemented the chosen video workflow inside the application | build |
| 5. Build application AI flows | How do I implement the AI pipeline pattern my product actually needs? | #3 Implement the right video or AI pattern for my product | build | tutorial | Has a first successful request and now needs to turn it into a repeatable product flow | Has implemented at least one AI workflow against the chosen integration surface | build |
| 6. Build a live interactive media loop | How do I make this feel interactive rather than batch-like or delayed? | #4 Choose and implement the right real-time processing pattern | build | guide | Knows the core feature goal but has not yet settled the right live transport and processing pattern | Has chosen and implemented a low-latency media loop appropriate to the product goal | build |
| 7. Bring your own model or container | How do I run a custom workflow that the default path does not cover? | #5 Choose the right custom execution or extension path | configure | guide | Has a custom model, workflow, or container and needs a network-compatible execution path | Has packaged the workload and chosen the correct execution path for it | build |
| 8. Build protocol-adjacent tools and extensions | How do I work closer to the protocol instead of only consuming managed surfaces? | #5 Choose the right custom execution or extension path | build | guide | Wants deeper control, tooling, or extension work and needs a correct source map before touching code | Has identified the relevant software, contract, or governance surface for the tool or extension they want to build | build |
| 9. Connect auth, events, and internal systems | How do I connect this feature to the rest of my product stack? | #6 Integrate auth, events, callbacks, and internal services | integrate | guide | Has a working core flow but it is not yet connected to product auth, callbacks, or internal systems | Has connected the integration to the surrounding product systems it depends on | build |
| 10. Verify release readiness | How do I prove this build is correct before I expose it to users? | #7 Verify correctness, diagnose failures, and tune behaviour | verify | instruction | Has a working end-to-end build but has not yet confirmed readiness against concrete checks | Has completed a release-readiness verification pass for the chosen path | operate |
| 11. Diagnose failures by layer | Where is this breaking: app code, Gateway surface, compute path, or protocol boundary? | #7 Verify correctness, diagnose failures, and tune behaviour | troubleshoot | guide | Has a live or near-live build with a specific failure but not yet a reliable triage model | Can isolate the likely failure layer and choose the next corrective action | troubleshoot |
| 12. Tune latency, quality, and cost | What should I change to improve the metric that matters most for this product? | #7 Verify correctness, diagnose failures, and tune behaviour | optimise | guide | Has a working build and a clear optimisation target but no prioritised tuning path | Has chosen the next optimisation move aligned to latency, quality, reliability, or cost | optimise |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Fast Feature Shipper | 1. Choose your build track | 10. Verify release readiness | None | None | None |
| Interactive Media Builder | 1. Choose your build track | 12. Tune latency, quality, and cost | None | None | None |
| Custom Model Porter | 1. Choose your build track | 12. Tune latency, quality, and cost | None | None | None |
| Protocol Toolmaker | 2. Map the surface you are building against | 11. Diagnose failures by layer | None | None | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
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
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The per-tab glossary surfaces developer-relevant SDK/product names that are not all covered by primary sources already listed in `veracity-sources.md`. I assumed the IA should stay path-first and avoided making the structure depend on unregistered source names where the authority registry was incomplete.
- **[Phase 0 / Step 0.3]**: The brief says “No repo access during this prompt” but also asks for web search of recent primary sources. I assumed this permits identifying candidate sources for the Addendum without using current repo structure to design the IA itself.
- **[Phase 1]**: No analytics were provided. I assumed the highest-volume developer audience is the one trying to get a first working feature live through the lowest-friction path, because the Product Context says developers typically build via gateway APIs or SDKs.
- **[Phase 2C]**: The Developers tab spans managed integration, real-time media work, custom compute, and protocol-adjacent tooling. I assumed a path-first structure is more faithful than a single beginner-to-expert sequence because the arrival states are materially different.
- **[SUGGESTED SOURCE: livepeer/pytrickle — https://github.com/livepeer/pytrickle — primary source for the Python real-time streaming SDK used in low-latency developer workflows — primary]**
- **[SUGGESTED SOURCE: livepeer/ai-runner — https://github.com/livepeer/ai-runner — primary source for runner-side AI execution behaviour, custom inference flow, and OpenAPI definitions relevant to custom compute paths — primary]**
- **[SUGGESTED SOURCE: livepeer/studio-sample-app — https://github.com/livepeer/studio-sample-app — official end-to-end example implementation for Studio integration patterns and product wiring — acceptable]**
