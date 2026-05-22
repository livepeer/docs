# Developers Tab — Audience & Persona Research Dossier

**Project:** Livepeer docs-v2
**Branch:** `docs-v2-dev`
**Date compiled:** 22 April 2026
**Author:** Wonderland / Alison Haire
**Status:** Research base for IA restructure decisions. Three open decisions still require adjudication — see final section.

This document consolidates the full audience and persona research base for the Livepeer Developers tab, followed by an analysis of the current state of the tab on the canonical `docs-v2-dev` branch. It is the source document against which any IA restructure proposal should be scoped.

---

## Part 1 — Strategic framing

The Developers tab exists to serve the Foundation's top-priority persona group. Per the content brief template, the priority order confirmed with the Foundation is Application Developer (AI) as P0, Gateway Operator as P1, Orchestrator as P2, and Delegator as P3. The Developers tab owns P0 directly. All content decisions in this tab prioritise AI Builder and ComfyStream developer journeys first, video developer journeys second, OSS contributor journeys third.

The strategic context behind this priority is quantitative. Over 72% of network fees were AI-driven as of Q3 2025. Messari State of Livepeer Q1 2025 reported a 49% QoQ usage increase driven by VTuber avatar use cases. The Cascade vision — real-time AI video pipelines running on a decentralised GPU network — is Livepeer's product narrative going forward, and it is developer-facing, not operator-facing.

The docs purpose stated for every persona in this tab is to take them from "I just heard about Livepeer" to "I am confidently doing the thing I came to do" using only the docs and the tools they link to. The success metric is not "I read about it" — it is "I built something / made my first API call / ran my first pipeline / submitted my first PR." Every page in the tab is evaluated against that bar.

There is one critical developer context that the tab must land before any technical content: many developers arrive expecting a traditional hosted API, the shape of OpenAI or Mux. **Livepeer is a network, not a product.** Studio and Daydream are hosted access layers on top of it. The AI Jobs API, ComfyStream, and BYOC connect directly to the network. These are fundamentally different things and the tab is documented as failing today precisely because this distinction is not made clearly on entry.

---

## Part 2 — The five personas

There are five developer personas in scope, each documented in the content brief template with a confirmed source basis.

### Persona A — The Rapid Integrator

This is the largest cohort by volume. They are frontend or fullstack developers building applications with Studio or Daydream hosted APIs. They self-identify as "I want to add AI video to my app" or "I need a video API." Their technical depth is JavaScript/TypeScript and React, with some Python, and they are API-first thinkers — they think in SDK calls, auth keys, and response payloads, not in protocols or networks.

Their stack comprises Studio SDK, livepeer.js player, REST API calls, and the Daydream API. They arrive through livepeer.studio, livepeer.org's dev-hub, SDK repos on GitHub, the Encode Club bootcamp, and ChatandBuild hackathons. At the point of arrival they are at journey stage Position 2 or 3 — evaluating or ready to start. Their activation moment is a first successful API call returning a result they can use in their app. The key disambiguation they need, and rarely get, is the distinction between Studio, Daydream, and the network API.

Their full journey runs Discovery (concepts/developer-stack) → Evaluation (hub/developer-journey) → First call (get-started) → Integration (build) → Production (guides) → Troubleshooting (resources). The questions at each stage are concrete: what is Livepeer vs Studio vs Daydream; which API/layer do I use; how do I get an API key; how does the SDK work; rate limits and error handling; common errors and API status.

### Persona B1 — The Gateway Runner (graduated developer)

This is Persona A, graduated. They arrived building with Daydream or a hosted gateway, hit scale, and are now self-hosting a gateway for cost and control. Backend or DevOps background. They self-identify as "I'm spending too much on the hosted API" or "I want to run my own gateway." Technical depth is Go, Docker, Linux, and some crypto; they've run production services before.

The Nov 2025 Network Vision blog post describes this graduation path explicitly as a core part of the Livepeer developer strategy: *"users of Daydream… may ultimately choose to run their own gateways to recognise the cost savings and control… that comes from doing so."* The gateways-ia-planning document reinforces this — Persona A in the Gateways tab is literally named "The Graduate" and describes the same developer arriving from the other side of the handoff.

The key decision they need help with is *"should I run a gateway?"* — explicitly separate from *how* to run a gateway. The journey boundary matters for IA: the decision guide lives in the Developers tab, the operational setup lives in the Gateways tab. Their activation moment is the first job routed through their self-hosted gateway.

### Persona B2 — The ComfyStream / AI Pipeline Developer

Builds real-time AI video pipelines using ComfyStream on Livepeer. ML or Python developer background. This is the primary growth driver of the AI subnet per Messari Q1–Q3 2025 — VTuber avatars, generative overlays, and the infrastructure Daydream is built on top of.

They self-identify as "I want to build real-time AI video effects" or "I do ML and want live video." Technical depth is Python, ComfyUI nodes, Docker, and GPU basics; critically, they may not know Livepeer at all on arrival — they arrived via ComfyUI, ComfyStream, or a RunPod template. Their stack is ComfyStream, the livepeer/comfystream Docker image, BYOC containers, RunPod, and ai-worker. Entry paths are the ComfyStream GitHub repo, docs.comfystream.org, the Encode Club bootcamp, and the RunPod "livepeer-comfystream" template.

The known gap documented against this persona is large: ComfyStream is currently not surfaced in Livepeer docs, and BYOC is underdocumented (this is confirmed in the AI SPE Phase 4 retrospective on the Forum). The activation moment is the first real-time pipeline running via ComfyStream connected to Livepeer infrastructure.

Their journey runs Discovery (concepts/ai-on-livepeer) → Install (get-started/comfystream-quickstart) → First pipeline (same) → Build (build/comfystream + build/byoc) → Deploy (guides) → Reference (resources). Questions at each stage are concrete: what is ComfyStream and how does it connect to Livepeer; Docker, RunPod, or local; how do I connect to Livepeer; node types, BYOC containers, audio/data-channel outputs; cloud deployment, scaling, monitoring; model support, API reference, container spec.

### Persona C — The ComfyStream Creative / VTuber Builder

Creative technologist, digital artist, or VTuber toolmaker. This is a distinct cohort from B2 — ComfyUI node graph user, not a systems developer. Less systems-programming background, often Windows rather than Linux, RunPod-native rather than Docker-CLI native. Confirmed growth segment per Messari Q1 2025 (the same 49% QoQ figure).

They self-identify as "I do ComfyUI workflows" or "I want live video AI for streaming." Technical depth is ComfyUI node graphs and some Python; they may not be a developer in the traditional sense. Stack is ComfyUI, ComfyStream custom nodes, the RunPod template, and the livepeer/comfystream Docker image. Entry paths are the ComfyUI community Discord and Reddit, the Livepeer blog (the January and February 2025 ComfyStream posts), Daydream, and RunPod.

The gap against this persona is sharp: there is no RunPod path documented in Livepeer docs, and ComfyStream is not surfaced at all. Activation is the first real-time AI effect applied to live video using their ComfyUI workflow.

### Persona D — The OSS Core Builder

Protocol or go-livepeer contributor. Go, Solidity, or Python background. Active community basis includes the pre-proposal for a community developer contract (Forum, March 2024) and named contributors including @rickstaa, @its-DeFine, and @chrishobcroft.

Self-identifies as "I want to contribute to go-livepeer" or "I'm interested in the protocol." Technical depth is Go, Solidity, Python; they understand distributed systems and crypto primitives. Entry paths are go-livepeer GitHub issues, the Discord #protocol-development channel, and the Livepeer Forum. Known gaps are that there is no dev environment guide, no repo map, and no SPE pathway documented — a protocol contributor today has to reverse-engineer where to start. Activation is a first merged PR or approved treasury proposal.

The OSS Core Builder's journey runs Discovery (concepts/oss-stack) → Setup (get-started/contributor-quickstart) → First contribution (guides/contribution-guide) → Sustained work (opportunities/oss-contributions). The questions are pointed: which repo, what language, where to start; build from source, private testnet, test harness; labels, PR process, review timeline; SPE model, community developer contract, treasury proposals.

### Adjacent — The SDK Builder (Gateways tab Persona C)

The Gateways tab IA planning document defines a *separate* persona — Persona C there, "The SDK / Alternative Gateway Developer" ("The Builder") — that is adjacent to but distinct from the Developers tab's Persona B2. This is the persona that shows up throughout the Discord #local-gateways transcript: j0sh, John from Elite Encoder, and the other developers building non-Go gateway implementations (Python, browser, mobile, embedded). They are active in #local-gateways. The remote signer design doc explicitly targets them: *"we need many gateway implementations in order to have direct integration with the Livepeer network natively on different platforms."*

Their motivations are concrete: embed gateway-like functionality directly in applications (edge, browser, mobile), build Livepeer integration for Python ML pipelines without shipping Go binary dependencies, contribute open-source gateway tooling to the ecosystem, and create BYOC integrations for specific AI workloads.

This persona sits on the IA seam between the Developers tab and the Gateways tab. The Gateways tab owns their deep operational content (remote signer protocol, payment state machine, LV2V vs batch AI vs BYOC payment differences), but their *entry* is as a developer building something — and the Developer tab currently has no surface that addresses them at all. This is a genuine IA placement question that has not been resolved.

---

## Part 3 — Source hierarchy used across all persona research

The content brief template defines five tiers of sources, all of which were used to build these persona profiles. The quality of the research depends on this hierarchy, and the same hierarchy applies to any IA decisions downstream.

**Tier 1 — Ground truth for technical claims.** The go-livepeer source code and release history are absolute ground truth for flag names, API behaviour, config format, and the AI runner interface. DeepWiki for livepeer/go-livepeer is used where the source is too deep to read directly. The livepeer/comfystream repo owns ComfyStream API, deployment options, node types, and Phase 4 capabilities (audio, data-channel, multimodal). docs.comfystream.org and pipelines.livepeer.org are canonical for ComfyStream installation and integration. The livepeer/ai-worker repo owns the AI runner API spec, BYOC container spec, and supported pipeline types.

**Tier 2 — Foundation sources.** notion.livepeer.org for Foundation strategy, SPE work, roadmap context, and stakeholder decisions. The livepeer/docs GitHub issues and PRs for known content gaps, SME discussions, and explicit correction requests. roadmap.livepeer.org for protocol strategic direction. The AI SPE Phase 4 retrospective (`forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208`) for BYOC hardening details and Phase 4 capabilities (audio, text/data-channel, multimodal) — the January 2026 ground truth for ComfyStream/BYOC. The AI SPE Stage 4 proposal and BYOC RFC for container spec, deployment model, and data-channel model types. The Nov 2025 Network Vision blog for the developer graduation path (Studio → self-hosted gateway → protocol layer). Messari State of Livepeer Q1–Q3 2025 for usage data, ComfyStream growth, BYOC launch timeline, and developer programme activity.

**Tier 3 — Community knowledge for accuracy and pain points.** The Livepeer Forum for real developer questions, community-verified answers, governance proposals, and SPE proposals. Discord #developers for common integration errors, SDK questions, AI jobs API issues, and current developer pain points. Discord #comfystream for ComfyStream-specific setup errors, workflow questions, and BYOC deployment issues. Discord #local-gateways for gateway decision context for the graduating-developer persona. The existing docs.livepeer.org/v2/developers — treated as potentially stale and to be verified against Tier 1 before use.

**Tier 4 — Third-party and community writeups.** Blog posts, community tutorials, third-party guides, Reddit threads, and Twitter/X discussions — used for identifying what confuses developers, understanding the language real users use, and finding community walkthroughs that fill gaps the official docs left. Explicitly not used for technical claims. Suggested searches include `"livepeer AI API" site:reddit.com`, `"livepeer SDK tutorial" site:medium.com`, `livepeer developer quickstart youtube`, `"ComfyStream livepeer" tutorial`, `"livepeer BYOC" tutorial`, `livepeer go-livepeer contribute github`, `livepeer AI pipeline tutorial`, `"livepeer Studio API" integration guide`.

**Tier 5 — Podcasts, videos, demos, for media embeds.** The Livepeer YouTube channel. ComfyUI Live Video Hacker Program demo day recordings (January 2026 Demo Day is confirmed). ETH Global and hackathon demo recordings featuring Livepeer builds. ChatandBuild integration videos and the "Live Video AI Meets Fashion" hackathon demos. ComfyStream community workflow demos on YouTube and Discord. SPE demo recordings shared in Notion or Forum.

---

## Part 4 — Pain points, confirmed from real developers

These are documented in the content brief template, the brief-01 document, and (for the SDK builder) the full Discord #local-gateways transcript.

**Studio vs Daydream vs network confusion.** Documented pain points: "Is Studio the same as Livepeer?" — many developers think Studio IS Livepeer. "Is Daydream built on Livepeer?" — the answer is yes, but this is not stated anywhere in Developers docs. "I want to call the AI API without using Studio — is that possible?" — yes (AI gateway API), but it's not documented at the entry level. "Where does ComfyStream fit?" — no page in the Developers tab answers this.

**Developer arriving with the wrong mental model.** The brief documents developers "arriving expecting OpenAI-style API, confused by the network model." This is the riskiest assumption failure — if a developer doesn't understand that Livepeer is a network, every subsequent decision they make is uninformed.

**SDK and integration fragmentation.** From Discord #local-gateways, quoted directly from Foundation engineers: *"I do think the 'entry point' for app developers needs to be figured out, and how to present them with a clear and easy onboarding path, such as acquiring an API key. The NaaP dashboard is an interesting option."* And: *"Probably depends on the audience... if we are aiming for general app developers then anything web3 is going to be unsettling for a lot of them."* The tension between crypto-native mechanics and general app developer expectations is live and unresolved.

**Discovery for off-chain use.** Quoted directly from j0sh in Discord: *"I'll also try to publish docs soon."* — never happened. No documentation exists for how off-chain gateways find AI-capable orchestrators. The Python SDK has examples but no canonical docs.

**Payment complexity.** Multiple distinct payment flows exist with no unified documentation: LV2V, batch AI, BYOC. Quoting j0sh: *"different types of jobs will have different requirements."* The content brief flags "LV2V vs batch AI vs BYOC payment differences" explicitly as undocumented. The SDK entry-point APIs (`OrchestratorSession`, `PaymentSession`, `StartJobRequest`) are in flux and have no stable reference.

**BYOC underdocumentation.** Confirmed against the AI SPE Phase 4 retrospective on the Forum. Container spec, deployment model, and data-channel model types are all underspecified.

**ComfyStream not in docs.** The canonical source is `docs.comfystream.org`, but this is not integrated, linked, or summarised from the Livepeer Developers tab. A developer arriving via the ComfyUI community has no route from the ComfyUI world into Livepeer docs.

**No RunPod path.** For Persona C specifically, the RunPod template exists as a community resource but has no equivalent in the Livepeer docs themselves.

**Protocol contributor onboarding.** For Persona D, there is no dev environment guide, no repo map, and no documented SPE pathway. A new contributor has to infer where to start from GitHub issues.

---

## Part 5 — Activation moments per persona

These are the success metrics for each persona's docs journey. Not "I read about it" — something that can be observed.

- Persona A (Rapid Integrator): First successful API call returning a result they can use in their app.
- Persona B1 (Gateway Runner): First job routed through their self-hosted gateway, visible in logs or the Explorer.
- Persona B2 (ComfyStream Developer): First real-time pipeline running via ComfyStream connected to Livepeer infrastructure.
- Persona C (ComfyStream Creative): First real-time AI effect applied to live video using their ComfyUI workflow.
- Persona D (OSS Core Builder): First merged PR or approved treasury proposal.

---

## Part 6 — Entry paths

Where these developers actually come from. This matters for IA because it tells you what the landing experience has to bridge from.

**Persona A:** livepeer.studio, livepeer.org dev-hub, the SDK GitHub repos, Encode Club bootcamp, ChatandBuild hackathons.

**Persona B1:** Daydream API offboarding, the Nov 2025 Network Vision blog post, go-livepeer releases, livepeer.cloud SPE blog posts.

**Persona B2:** ComfyStream GitHub, docs.comfystream.org, Encode Club bootcamp, the RunPod "livepeer-comfystream" template.

**Persona C:** ComfyUI community Discord and Reddit, the Livepeer blog (January and February 2025 ComfyStream posts), Daydream, RunPod.

**Persona D:** go-livepeer GitHub issues, Discord #protocol-development, Livepeer Forum.

---

## Part 7 — The layer-disambiguation problem

The single largest content gap across all five personas is the same gap, articulated slightly differently for each. Every developer arriving at the tab needs to resolve *which layer they are building at* before any other decision makes sense.

The canonical five-layer model (from `v2/developers/concepts/developer-stack.mdx` as drafted in the brief) is:

**Studio API.** Hosted video and transcoding API, operated by Livepeer Inc. Targets developers who want managed video: livestreaming, VOD, transcoding, the embeddable player, webhooks, analytics, behind an API key. Trades control for convenience.

**Daydream API.** Hosted real-time AI video API at daydream.live. Applies text-prompt effects to live webcam feeds. Built on the open-source ComfyStream plugin. Has its own SDK (`sdk.daydream.monster`). Downstream apps like Storyboard use it.

**AI Gateway API.** Direct REST interface to the Livepeer AI inference network, callable without Studio or Daydream. Multiple gateway providers exist, including Livepeer Studio Gateway (production) and the free Livepeer Cloud Community Gateway. This is the middle of the five layers.

**ComfyStream.** Open-source ComfyUI plugin that turns ComfyUI workflows into real-time video pipelines. Daydream runs on ComfyStream. The `ComfyUI-Stream-Pack` adds real-time I/O nodes for video, audio, and tensor streaming.

**Protocol layer.** go-livepeer (Broadcaster/Orchestrator/Transcoder node software), livepeer/protocol (Delta-era Solidity contracts on Arbitrum), ai-worker and ai-runner (GPU inference execution), and lpms (the media server). Running at this layer means operating nodes, earning LPT, or contributing new pipelines.

The graduation path, mirroring Heroku → AWS → own infrastructure: start on Studio or Daydream, move to direct AI Gateway calls, eventually self-host a gateway to cut per-inference cost, eventually contribute to the protocol itself. This is the narrative arc that unifies all five personas — they are at different stages of the same journey.

---

## Part 8 — Gaps in the current persona research

Documented honestly, because the research basis is uneven.

**No quantitative sizing of each persona.** The research names cohort relative size ("A is largest cohort by volume") but there are no numbers attached. We don't know how many Rapid Integrators exist compared to ComfyStream Developers in absolute terms. Messari has usage data but it's indexed to network fees, not to developer headcount.

**Persona C evidence is thin.** The ComfyStream Creative / VTuber Builder is documented from the Messari growth data and the ComfyUI community, but there is no direct voice-of-customer from this persona in the research — no forum posts, no Discord transcripts, no interviews quoted. The content brief treats them as a distinct persona because the Messari data forces the question, but the research basis is lighter than for A, B1, or B2.

**Persona A voice is inferred, not quoted.** There's no direct Discord #developers transcript in the project files equivalent to the #local-gateways one. Self-identification phrases ("I want to add AI video to my app") are written in the content brief — they may be accurate but they are not quoted from observed questions.

**The Graduate / Gateway Runner sits across two tabs with no resolution.** Persona B1 in Developers and Persona A ("The Graduate") in Gateways are the same developer at different moments. Who owns the decision content, who owns the operational content, and how they hand off is identified as an IA question but not settled.

**Foundation vs community persona framing may diverge.** The Foundation's strategic priority list is AI Application Developer as P0, but the network's actual developer population skews heavily toward ComfyStream and VTuber creators per Messari Q1 2025. If these are different people, the docs may be prioritising the persona the Foundation wishes existed at scale rather than the one currently driving usage. This tension is not resolved in the current research.

**No explicit evidence base for Persona D priority.** The OSS Core Builder is documented but there's no data on inbound flow, PR volume, or contributor retention that would let us size the priority of this persona against A, B1, B2, C. They exist, they are named, but the weight given to them in the tab structure is asserted, not justified.

**Research is complete on Studio/Daydream/ComfyStream but thinner on newer surfaces.** The Storyboard (April 2026 AI-agent creative workspace) and the NaaP plugin platform (February 2026) both carry developer-facing implications that are not yet in the persona model. Storyboard in particular introduces an "agent orchestration developer" persona type that may not be captured by A, B1, B2, C, or D.

---

## Part 9 — What's actually in the repo today

Important correction to earlier analysis: **the Developers tab is further along than initial review credited**. Reading the actual files on `docs-v2-dev` rather than relying on the nav tree reveals the following state.

### Hub (`portal.mdx`, `navigator.mdx`)

The portal is a conventional card-grid entry page that sends readers to six destinations — Get Started with Video, Get Started with AI, Discover Developer Platforms, Build on Livepeer, Contribute to the Ecosystem, and Developer Guides & Resources. An internal `{/* Note */}` on the portal itself flags the ambiguity the restructure is trying to resolve: *"This TAB should be a reference for AI pipelines & video streaming. E.g BYOC, ComfyStream and other AI pipelines, and video streaming should be explained in this sections. I think Products (developer platforms) should be in their own tab / section — there is too much going on here otherwise."* Someone already saw this.

The `navigator.mdx` page is a full decision tree. It has six build paths (AI Gateway API via Studio, ComfyStream, BYOC, Studio Video, OSS Contribution, Evaluation) each with a concrete one-sentence answer to *what you're building*, stack requirements, and a call-through to the right quickstart. It closes with a path-comparison `StyledTable` covering Intent, Path, SDK/tool, Auth, GPU required. This is the decision-tree page originally hypothesised as needing to be built — it already exists and it's solid.

### Concepts (five pages today)

`developer-stack.mdx` is the five-layer ecosystem page (Studio / Daydream / AI Gateway API / ComfyStream / Protocol layer) with a layer-choice decision table. Status `draft`, last verified March 2026, a handful of `[//]: # REVIEW:` flags still open on Studio AI endpoints and AI Jobs API deprecation.

`ai-on-livepeer.mdx` and `video-on-livepeer.mdx` sit alongside it as the AI/Video split the restructure wants collapsed.

`running-a-gateway.mdx` is already a developer-facing *decision* page that explicitly says "This is not a setup guide – for that, go to the Gateways tab." The Developers/Gateways boundary is already correctly drawn, cleaner than initially assumed.

`oss-stack.mdx` is the fifth page, covering the protocol-layer repos.

### Get Started (six pages)

`setup-paths.mdx`, `ai-quickstart`, `comfystream-quickstart`, `transcoding-quickstart`, `contributor-quickstart`, plus a `video-quickstart.mdx` that isn't in the docs.json you shared. No tutorials folder here yet — tutorials are still under `guides/tutorials/`.

### Build / Custom AI Workflows (five pages)

`workload-fit`, `sdk-gateway`, `model-support`, `byoc`, `comfystream`. Solid content, leave for now.

### Guides structure

`developer-guides.mdx` as the overview, `contribution-guide.mdx`, `local-testnet-deployment.mdx`, then three sub-folders: `ai/` (authentication, troubleshooting, production-checklist), `video/` (access-control, create-livestream, monitor-stream-health, playback, upload-asset, webhooks), `tutorials/` (build-an-ai-agent, ipfs-video-integration, token-gated-video), and `opportunities/`.

### Resources

`glossary.mdx` + `glossary-data.json`, plus three sub-folders: `reference/` (apis, sdks, pytrickle, pricing-rate-limits), `compendium/`, `knowledge-hub/`. The `reference/` contents are at the correct layer.

---

## Part 10 — Three things the repo reading confirmed

Three earlier hypotheses are now settled by direct file inspection.

**`guides/video/` is 100% Studio content.** `create-livestream.mdx` read in full — every example uses the `livepeer` npm/pip/Go SDK (Studio SDK, not `@livepeer/ai`), every reference points to `livepeer.studio`, RTMP ingest is `rtmp.livepeer.com`, webhooks are Studio-managed. This is Studio documentation sitting in the v2 Developers tab.

**`guides/ai/` is also Studio-based**, more subtly. `authentication.mdx` is titled *AI API authentication*, but the API key guidance is entirely Studio-based ("obtain one from [Livepeer Studio](https://livepeer.studio) under Settings > API Keys"), the curl example points at `https://livepeer.studio/api/beta/generate/text-to-image`, and the CORS key guidance is specifically the Studio dashboard CORS feature. It's not Studio docs in disguise the way the video sub-section is — the content is correct for a developer calling the AI Gateway API *via the Studio Gateway* — but it treats "Studio API key" as "the only AI API key" without naming alternatives like the Livepeer Cloud Community Gateway that `developer-stack.mdx` and the research both name as real options.

**`running-a-gateway.mdx` already solves one of the earlier handoff worries.** The page opens with "This is not a setup guide – for that, go to the Gateways tab." The Developer/Gateway handoff is already explicit and correctly placed. The page is a *decision* guide, not a setup guide.

---

## Part 11 — Persona coverage matrix

Cross-referencing the personas against what's in the repo today:

| Persona | Has a concept page | Has a navigator path | Has a quickstart | Has a build page | Has a decision page |
|---------|--------------------|-----------------------|-------------------|-------------------|-----------------------|
| A — Rapid Integrator | Yes — `developer-stack` | Yes — "Call AI inference" / "Integrate video" | Yes — `ai-quickstart`, `transcoding-quickstart` | Partial — `sdk-gateway` | N/A |
| B1 — Gateway Runner | Yes — `running-a-gateway` | Partial — no dedicated path | N/A (Gateways tab) | N/A (Gateways tab) | Yes — `running-a-gateway` |
| B2 — ComfyStream Developer | Partial — `ai-on-livepeer` is general | Yes — "Real-time AI video" | Yes — `comfystream-quickstart` | Yes — `comfystream`, `byoc` | N/A |
| C — ComfyStream Creative / VTuber | No | Partial — shares B2 path | Partial — `comfystream-quickstart` skews developer | No | No |
| D — OSS Core Builder | Yes — `oss-stack` | Yes — "Contribute to the Livepeer protocol codebase" | Yes — `contributor-quickstart` | No (appropriate) | N/A |
| SDK / Alt Gateway Builder | No | No | No | No | No |

### Gaps this matrix makes visible

**Persona C has no dedicated surface.** The ComfyUI-arrival creative/VTuber is a confirmed growth segment per Messari, but the current `comfystream-quickstart` and `build/comfystream` pages are written for Persona B2 (ML/Python developer with Docker comfort) — no RunPod-first path, no Windows-first path, no ComfyUI-community framing. This is the single clearest content gap on persona basis.

**The SDK Builder has no Developers-tab entry.** This persona is the most active one on Discord right now, they're shipping SDK work in real time, and the Developers tab ignores them. Either the Developers tab picks them up with a dedicated path in `navigator.mdx`, or the Gateways tab expands to own their entry — but today they fall through.

**Persona B1's navigator path is missing.** `navigator.mdx` has six paths; none of them is "I want to self-host a gateway to cut cost." That reader currently has to find `running-a-gateway` through concepts, not through the navigator. For the graduation path the Network Vision blog explicitly names as core strategy, that's a navigator-level omission.

**`guides/video/` and `guides/ai/authentication.mdx` conflate Studio with Livepeer** in a way that the concept pages explicitly try to disentangle. The video sub-section is Studio-only content that misrepresents itself as Livepeer developer content. The AI authentication page treats Studio API keys as the only AI API keys.

**Storyboard, NaaP, and agent-orchestration developers aren't modelled.** These are April 2026 and February 2026 surfaces respectively. The content brief was written before them. If Storyboard's `@livepeer/agent` runtime (provider-agnostic agent backend with swappable Gemini/Claude/OpenAI/Livepeer providers) represents a real developer cohort — agent developers routing inference through Livepeer as one of several providers — the persona model doesn't capture them.

---

## Part 12 — Open decisions before IA lock

Three questions require adjudication before any IA restructure proposal can be scoped cleanly.

**One: Studio content ownership.** Is there a decision — at the Foundation level, not at docs level — to migrate `guides/video/` out to Studio docs with redirects, or are we keeping Studio integration content in the v2 Developers tab indefinitely? This is a prerequisite question; it changes the shape of Guides by a meaningful amount.

**Two: whether Persona C gets a dedicated surface.** If the Foundation's P0 strategic persona is the AI Application Developer, but the actual usage-driver cohort is the ComfyUI creative/VTuber, the docs are either going to lean into that usage (by creating RunPod-first, Windows-compatible, ComfyUI-community entry content) or they're going to accept that persona as served by external resources (ComfyUI community, docs.comfystream.org) with links but no dedicated docs surface. Either answer is fine; *not deciding* is where we lose.

**Three: whether the SDK Builder and agent-orchestration developer are new personas or extensions of existing ones.** The Discord transcript is unambiguous that the SDK Builder exists as an active cohort. Storyboard's existence suggests agent-runtime developers exist too. Either we add them as personas F and G, or we explicitly subsume them under D (OSS Core Builder) with documented reasoning — but the current model doesn't name them.

Once those three are settled, the research base is complete enough to drive IA decisions. Until then, any IA proposal rests on unresolved assumptions.

---

*End of document.*
