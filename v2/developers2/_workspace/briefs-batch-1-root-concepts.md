# Content briefs — Batch 1: Root + Concepts

Six pages, all NEW or significant rewrites. Full L0/L1/L2 template applied.

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md` (27 Apr 2026 verified version).

Persona model in use:
- 1 — Solutions Integrator
- 2 — AI Developer
- 3 — Video Developer
- 4 — Agent Developer
- 5 — Application Developer
- 6 — Protocol Extender

---

## 1. `/v2/developers/index.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page tells a developer arriving on the Developers tab which of the four buildable things matches their goal and routes them to the right Get Started page in one click.

**Q2 — Featured reader.** A developer who has heard "Livepeer" once and lands here from a Google search, the Foundation site, or a friend's link. They do not know whether they want Studio, Daydream, the AI Gateway, ComfyStream, or BYOC. They have a project in mind: an AI feature in their app, a custom video pipeline, an agent, or a streaming app.

**Q3 — Real alternative.** They open four browser tabs comparing Livepeer to Replicate, Mux, Modal, and OpenAI, and try to triangulate which Livepeer surface matches the closest analogue.

**Q4 — Required belief.** Livepeer has four distinct developer entry points, each with a clear quickstart, and the right one for me is one click away.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev with API call to make today | "Where do I start? Which gateway? Which SDK?" | A single link to `get-started/application-developer.mdx` | Served here — App Dev card |
| AI/ML engineer with a custom pipeline | "Where does my container go?" | A single link to `get-started/ai-developer.mdx` | Served here — AI Dev card |
| Streaming engineer with ffmpeg background | "Where do I do RTMP/HLS?" | A single link to `get-started/video-developer.mdx` | Served here — Video Dev card |
| Agent builder, Storyboard-curious | "Where's the agent SDK?" | A single link to `get-started/agent-developer.mdx` | Served here — Agent Dev card |
| Solutions Integrator (Studio/Daydream/Streamplace builder) | "I'm building on top of Livepeer products. Where?" | A single link to `routing/solutions-integrators.mdx` | Linked — routing page |
| Protocol Extender / OSS contributor | "I want to contribute to go-livepeer or the protocol." | A single link to `routing/protocol-extenders.mdx` | Linked — routing page |
| Reader who doesn't know which persona they are | "I'm not sure which of these matches me." | A single link to `navigator.mdx` | Linked — navigator |

### Content sequence (L2)

1. **Outcome paragraph.** One paragraph: "Livepeer is a decentralised network for video and AI inference. This tab serves developers building on top of it. Pick your path below."
2. **Four-card persona grid.** App Dev / AI Dev / Video Dev / Agent Dev. Each card: one-line description, primary buildable thing, link to the persona quickstart.
3. **Two routing strips.** "Building a Livepeer product like Daydream/Studio/Streamplace?" → Solutions Integrators routing page. "Contributing to go-livepeer or protocol contracts?" → Protocol Extenders routing page.
4. **Not sure which persona you are?** Single link to `navigator.mdx`.

### Frontmatter

```yaml
---
title: "Build on Livepeer"
sidebarTitle: "Overview"
description: "Four developer entry points to the Livepeer network: AI inference, video streaming, custom AI pipelines, and agents. Pick your path."
pageType: "concept"
---
```

### Information to convey

- Livepeer is a decentralised video and AI compute network. This tab is for developers who write code that uses or extends it.
- Four buildable things: AI features in apps, video streaming apps, custom AI pipelines, agents.
- Each has a Get Started page that takes you to first call in 10 minutes.
- Three out-of-scope routing pages: Solutions Integrators, Protocol Extenders, navigator (for the unsure).

### Information to exclude

- Network architecture detail (lives in `concepts/stack-layers.mdx`).
- Specific SDK code (lives in Get Started and Build pages).
- Studio/Daydream/Streamplace product details (lives in Solutions tab).
- Protocol economics, treasury, governance (lives in About + LP Token tabs).

### Components

- Mintlify `<CardGroup cols={2}>` for the four persona cards.
- `<Note>` callout for the navigator link.

### Sources to consult

- `persona-routing-and-infra-map.md` — for the convergence diagram framing.
- Existing `concepts/developer-stack.mdx` — first paragraph is reusable.

---

## 2. `/v2/developers/navigator.mdx` — RETAINED with cleanup

### Gate L0

**Q1 — Outcome.** This page asks the reader six questions and routes them to the right Get Started page based on their answers.

**Q2 — Featured reader.** A developer who landed on `index.mdx`, looked at the four persona cards, and is not sure which fits. They have not yet committed to AI, video, agents, or a custom pipeline. They are happy to answer six short questions if it saves them reading the wrong page first.

**Q3 — Real alternative.** They click into `concepts/developer-landscape.mdx` to read the full breakdown, or they click the closest-fitting Get Started page and bail when they realise it is wrong.

**Q4 — Required belief.** Six short questions will route me faster and more accurately than reading five concept pages.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Reader with no clear self-identification | "Which of the four developer paths matches my project?" | A six-question quiz that ends with one Get Started link | Served here |
| Reader who knows they want AI but not which AI path | "Hosted API, custom pipeline, or agent?" | Branch within the quiz that distinguishes the three | Served here |
| Reader who is multi-track (AI + video, agent + AI) | "Which track do I start with?" | Quiz outputs the primary track and notes the secondary | Served here — note added |
| Reader who fits Persona 1 or 6 | "Should I be on this tab at all?" | Quiz routes to Solutions or Community/About | Linked — routing pages |

### Content sequence (L2)

1. **Lead question:** "What are you building?" — four buttons: AI in an app, video streaming, custom AI pipeline, agent.
2. **Branch per answer:** 1-2 follow-up questions. Hosted vs self-hosted, batch vs realtime, frontend vs backend.
3. **Output:** Single button to the matching Get Started page.
4. **Out-of-scope branch:** "I'm building Studio/Daydream/Streamplace" → Solutions Integrators routing. "I'm contributing to a Livepeer repo" → Protocol Extenders routing.
5. **Escape hatch:** "Show me everything" → `concepts/developer-landscape.mdx`.

### Frontmatter

```yaml
---
title: "Find your path"
sidebarTitle: "Navigator"
description: "Answer six short questions to find the Get Started page that matches your project."
pageType: "tutorial"
---
```

### Information to convey

- Six-question routing quiz.
- Each answer narrows from four tracks to one.
- Output is a single link to a Get Started page.
- Studio/Daydream/Streamplace builders and protocol contributors get routed off the Developers tab.

### Information to exclude

- Concept depth on what each track is. The quiz routes to a quickstart; the quickstart explains the track.
- SDK code samples.
- Studio API key flow (lives in Solutions/Studio).

### Components

- Mintlify `<Steps>` for the question flow.
- `<Card>` for each output target.

### Sources to consult

- Existing `navigator.mdx` — keep the question structure that already works; update the output links to the new Get Started page paths.

---

## 3. `/v2/developers/concepts/developer-landscape.mdx` — NEW (renames `concepts/developer-stack.mdx`)

### Gate L0

**Q1 — Outcome.** This page describes every developer entry point on Livepeer in one diagram and one table, so a reader can see all available paths and the trade-offs at a glance.

**Q2 — Featured reader.** A developer evaluating Livepeer for a project. They have read `index.mdx` or been sent here by a colleague. They want the full picture before they commit to a Get Started page. They have 5-10 minutes to read.

**Q3 — Real alternative.** They open Livepeer Foundation's `livepeer.org/dev-hub` page, the Livepeer in 2026 report, and Storyboard's README in three tabs and triangulate the landscape themselves.

**Q4 — Required belief.** Livepeer has a coherent developer surface with four buildable things, each with a documented path, and I can see the whole landscape on one page before I pick.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Project lead evaluating Livepeer for the team | "What are the options here? Which one fits?" | Full landscape diagram + decision criteria per option | Served here |
| Developer coming from Mux/Twitch/Replicate | "How does Livepeer's surface map to what I already know?" | "Coming from X" rows in the table | Served here |
| Architect drawing a system diagram | "Where does each Livepeer component sit?" | The convergence diagram showing all paths land on go-livepeer | Served here |
| Reader chasing the AI Gateway path specifically | "Which gateway provider do I pick?" | Link to `build/application/choose-a-gateway.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Livepeer offers four developer paths: build an app on hosted gateways, ship a custom AI pipeline, build a streaming app, or build an agent. All paths converge on go-livepeer."
2. **Convergence diagram.** Single Mermaid diagram from `persona-routing-and-infra-map.md` Part 1.8 — the seven personas to gateways to go-livepeer to ai-runner.
3. **Decision criteria table.** Six columns: Path, What you build, SDK or tool, Gateway choice, Lives on Developers, First page to read.
4. **"Coming from X" subsection.** Five short paragraphs: from OpenAI, from Mux, from Modal, from a streaming backend, from a crypto network. Each paragraph maps the developer's existing mental model to the Livepeer surface.
5. **Out-of-scope acknowledgements.** "If you are building Studio/Daydream/Streamplace" → Solutions. "If you are contributing to go-livepeer" → Community/About.
6. **Next page link.** Single link to `setup-paths.mdx` for readers ready to commit.

### Frontmatter

```yaml
---
title: "The Livepeer developer landscape"
sidebarTitle: "Developer landscape"
description: "Every developer path on Livepeer in one diagram and one table. Compare paths, see how each maps to your existing tools, and pick where to start."
pageType: "concept"
---
```

### Information to convey

- Four developer paths: App, AI, Video, Agent.
- Hosted vs self-hosted decision per path.
- The "all paths converge on go-livepeer" insight.
- Five "Coming from X" mental-model bridges.
- Studio and Daydream as productised paths inside the App developer surface (not separate tracks).

### Information to exclude

- Layer-by-layer stack architecture (lives in `stack-layers.mdx`).
- Per-request flow diagrams (lives in `request-paths.mdx`).
- Data sources and observability (lives in `data-and-tooling.mdx`).
- Gateway operations (lives in Gateways tab).

### Components

- One Mermaid diagram (convergence).
- One Mintlify table (decision criteria).
- `<AccordionGroup>` for the five "Coming from X" paragraphs to keep the page scannable.

### Sources to consult

- `persona-routing-and-infra-map.md` Part 1.8 (convergence diagram source).
- Existing `concepts/developer-stack.mdx` (decision criteria table — update with verified facts from the persona-routing doc).
- `livepeeraifirstdocsplan.pdf` for the AI-first framing.

---

## 4. `/v2/developers/concepts/stack-layers.mdx` — NEW (supersedes `oss-stack.mdx`)

### Gate L0

**Q1 — Outcome.** This page maps the Livepeer developer stack into six named layers, from application code at the top to Arbitrum contracts at the bottom, so a reader can locate any component, repo, or page in the docs.

**Q2 — Featured reader.** A developer building beyond the first hosted-API call. They want to understand which layer their work touches before committing to deeper Build pages. They have shipped at least one production system before.

**Q3 — Real alternative.** They read the persona-routing-and-infra-map document directly, or they piece together the stack from individual repo READMEs.

**Q4 — Required belief.** The Livepeer stack has a clean six-layer model, and every page in the Developers tab slots into exactly one layer.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev about to graduate to self-hosting | "Which layers does my app touch when I move from hosted to self-hosted?" | Diagram showing layer touchpoints per gateway choice | Served here |
| AI Dev shipping a BYOC container | "Where does my container sit relative to ai-worker and ai-runner?" | Layer 4 detail showing ai-worker and ai-runner are siblings (verified from `oss-stack.mdx` repo map) | Served here |
| Architect drawing a system view | "Where does lpms sit? Where does Catalyst sit?" | Layer 4 detail noting `go-livepeer` imports `lpms` (verified from `go.mod`); Catalyst is independent | Served here |
| Protocol Extender deciding which repo to contribute to | "Which layer is each repo?" | Repo-to-layer map | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Every page in the Developers tab fits into one of six layers. This page maps them so you know where your work lives."
2. **Six-layer diagram.** Layer 1 (apps) → Layer 2 (SDKs and gateways) → Layer 3 (go-livepeer) → Layer 4 (media engine: lpms + ai-worker/ai-runner) → Layer 5 (protocol contracts) → Layer 6 (data and observability).
3. **Per-layer detail.** Six short subsections, one per layer. Each subsection: what's in it, the canonical repos, the page paths in this tab that cover it.
4. **`ai-worker` vs `ai-runner` note.** One paragraph: `livepeer/ai-worker` is the repo; `ai-runner` is the containerised Python service that lives inside it. `go-livepeer` spawns `ai-runner` Docker containers per pipeline.
5. **`lpms` vs Catalyst note.** One paragraph: `go-livepeer` imports `lpms` directly (verified from `go-livepeer/go.mod`). Catalyst is a sibling product (powers Studio, used by Streamplace) that does not import into `go-livepeer`.
6. **Repo-to-layer map.** Table: repo name → layer → primary persona.
7. **Next page link.** Single link to `request-paths.mdx` for the dynamic view.

### Frontmatter

```yaml
---
title: "The Livepeer developer stack"
sidebarTitle: "Stack layers"
description: "Six layers from application code to Arbitrum contracts. Every page in the Developers tab slots into one layer."
pageType: "concept"
---
```

### Information to convey

- Six named layers with canonical repos per layer.
- `ai-worker` vs `ai-runner` distinction (one is the repo, one is the container service inside it).
- `lpms` vs Catalyst sibling relationship (verified via `go.mod`).
- Repo-to-layer-to-persona map.
- Studio API SDKs (livepeer-js, livepeer-python, livepeer-go, livepeer-java, livepeer-ruby, livepeer-php) sit in Layer 2 alongside AI SDKs.
- `livepeer/sdk` (the protocol JS SDK from 2022) is dead and not in this map.
- `livepeer.js` and `livepeer/ui-kit` are the same repo (verified READMEs); both names appear in the wild.
- `room` namespace in `livepeer-js` is deprecated across all 9 methods with no migration target.

### Information to exclude

- The dynamic request flow (lives in `request-paths.mdx`).
- AI Gateway endpoint catalogue (lives in `build/ai/ai-pipelines.mdx`).
- Decision criteria for hosted vs self-hosted (lives in `developer-landscape.mdx` and `build/application/choose-a-gateway.mdx`).
- Contract addresses (link out to the canonical page in About).

### Components

- One Mermaid layered diagram.
- One Mintlify table for repo-to-layer mapping.
- `<Note>` callouts for `ai-worker`/`ai-runner` and `lpms`/Catalyst clarifications.

### Sources to consult

- `persona-routing-and-infra-map.md` Part 2.1-2.11 (layer-by-layer inventory).
- Existing `concepts/oss-stack.mdx` (repo map table — verified content).
- `go-livepeer/go.mod` claim already verified in source doc.

---

## 5. `/v2/developers/concepts/request-paths.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page shows five concrete request flows — hosted gateway, self-hosted gateway, BYOC pipeline, agent provider, contributor — so a developer can see exactly how their code talks to the network end to end.

**Q2 — Featured reader.** A developer who has read `developer-landscape.mdx` and `stack-layers.mdx`, has picked a track, and now wants to see what a real request looks like before reading the Build pages. They want to verify their mental model against a concrete flow.

**Q3 — Real alternative.** They read all 11 layer diagrams in `persona-routing-and-infra-map.md` Part 2 in sequence, or they trace a single request through three repo READMEs.

**Q4 — Required belief.** I can see the exact path my request takes from my code to the orchestrator, including ticket signing, discovery, and trickle transport, in five short flows.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev calling AI Gateway | "What happens after my SDK call?" | Flow A: hosted gateway path | Served here |
| App Dev who self-hosts a gateway | "What does my gateway do that the hosted one does for me?" | Flow B: self-hosted gateway path | Served here |
| AI Dev shipping a BYOC container | "How does the gateway talk to my container?" | Flow C: BYOC pipeline path | Served here |
| Agent Dev wiring Storyboard | "Where does Livepeer fit in my agent's provider chain?" | Flow D: agent provider path | Served here |
| Protocol Extender debugging a gateway PR | "What's the actual sequence of network operations?" | Flow E: contributor inspection path | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Five flows. Each shows the exact request path your code takes."
2. **Flow A — Hosted gateway.** App → SDK → Studio/Daydream/Cloud Community gateway → Orchestrator pool → ai-runner → response. Diagram + 4-line description.
3. **Flow B — Self-hosted gateway.** App → SDK → local go-livepeer gateway → Orchestrator pool → ai-runner → response. Highlight: ticket signing happens locally; gateway holds keys or proxies via remote signer.
4. **Flow C — BYOC pipeline.** Gateway → trickle protocol → BYOC container running pytrickle FrameProcessor → trickle protocol → gateway. Highlight: the four pytrickle endpoints (`/api/stream/start`, `/params`, `/status`, `/stop`).
5. **Flow D — Agent provider.** Storyboard agent → `@livepeer/agent` → Studio gateway (when Livepeer is the provider) or other (Gemini/Claude/OpenAI). Highlight: provider-agnostic.
6. **Flow E — Contributor inspection.** Local go-livepeer in dev mode → tested against private testnet → traces visible in logs and `livepeer_cli`. Highlight: links to local-dev pages in About/Community.
7. **Next page link.** Single link to `data-and-tooling.mdx`.

### Frontmatter

```yaml
---
title: "Five request paths"
sidebarTitle: "Request paths"
description: "Hosted, self-hosted, BYOC, agent, contributor: five concrete flows from code to orchestrator."
pageType: "concept"
---
```

### Information to convey

- Five named flows, each as a Mermaid sequence diagram or flowchart.
- Studio/Daydream/Cloud Community as variants of Flow A (hosted gateway).
- Self-hosted gateway with optional remote signer (Flow B).
- BYOC container with the four pytrickle HTTP endpoints (Flow C).
- Storyboard provider-agnostic agent backend (Flow D).
- Contributor local-dev path (Flow E).

### Information to exclude

- Layer-by-layer architecture (lives in `stack-layers.mdx`).
- Specific endpoint catalogues (lives in `build/ai/ai-pipelines.mdx`).
- Pricing and rate limits (lives in `reference/pricing-rate-limits.mdx`).
- Gateway operations depth (lives in Gateways tab).

### Components

- Five Mermaid sequence diagrams or flowcharts (one per flow).
- `<Tabs>` to let the reader switch between flows in one screen if Mintlify renders them well; otherwise stack vertically.

### Sources to consult

- `persona-routing-and-infra-map.md` Parts 1.1-1.7 (per-persona diagrams as starting point for flows A-E).
- Existing `concepts/running-a-gateway.mdx` (graduation framing relevant to Flow B).

---

## 6. `/v2/developers/concepts/data-and-tooling.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page lists every observability surface, data source, and external tool a Livepeer developer can plug into, so they can wire their app into the right monitoring and analytics stack on day one.

**Q2 — Featured reader.** A developer building a production application who needs to know what to monitor, what data is available, and which tools the community uses. They have a working app and are now thinking about ops.

**Q3 — Real alternative.** They scrape three Stronk-Tech repos, read four community Discord channels, and rebuild a dashboard from scratch.

**Q4 — Required belief.** Livepeer has a documented data and observability surface — Foundation tools, community tools, and external infrastructure — and I can wire into it without reverse-engineering anything.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev wiring Datadog/Grafana | "What endpoints can I scrape?" | Endpoints table by component (gateway, orchestrator, NaaP) | Linked → Gateways tab + Orchestrators tab for depth |
| AI Dev tracking pipeline performance | "Where do I see real-world model performance?" | NaaP Analytics + AI Performance Leaderboard links | Served here |
| Video Dev tracking stream health | "Where do I see live stream health?" | livepeer-data + grafana-dashboards + community exporters | Served here |
| Developer asking on-chain questions | "Where do I query staking, ticket redemption, treasury?" | Subgraph + Explorer + Dune dashboards | Served here |
| Reader asking about contract addresses | "Where's the canonical contract address list?" | Link to canonical page in About | Linked — About/Resources/Reference |

### Content sequence (L2)

1. **Outcome paragraph.** "Every data source, observability endpoint, and ecosystem tool a developer plugs into, in one table."
2. **Surface table.** Five columns: surface name, what it exposes, endpoint or repo, owner (Foundation/Community/External), link. Rows organised by category: network data, stream and AI data, MCP surfaces, network-level SLA data, AI performance data, Prometheus scrape points, community exporters, ecosystem tooling, on-chain reference.
3. **`livepeer-data-mcp` note.** One paragraph stating it is production-deployed but internal-only (verified from repo README), not for developer consumption.
4. **Studio webhook callout.** Studio webhooks are a Solutions/Studio surface, not documented here.
5. **Contract addresses callout.** Link to `/v2/about/resources/reference/livepeer-contract-addresses` (canonical, auto-updated). Do not duplicate addresses here.
6. **Next page links.** `build/application/prometheus-scrape.mdx` and `build/application/settlement-observability.mdx` for App Devs; Gateways tab for ops-grade observability.

### Frontmatter

```yaml
---
title: "Data and tooling integrations"
sidebarTitle: "Data & tooling"
description: "Every observability endpoint, data source, and ecosystem tool a Livepeer developer plugs into. One table."
pageType: "concept"
---
```

### Information to convey

- Foundation-built: `livepeer-data`, `livepeer-monitoring`, `livepeer-stats`, `current-viewers`, `player-metrics`, `grafana-dashboards`. Subgraph via The Graph.
- Community-built: `transcodeninja/livepeer-exporter`, Stronk-Tech `OrchestratorTracker`/`LivepeerExplorer`/`LivepeerStats`/`MistLoadLivepeer`/`LivepeerPerformanceAI`, rickstaa Dune dashboards, `Livepeer.Tools` payout tracker, `livepeer-reward-watcher`, `livepeer-income-reports`, StronkAI jobs dashboard.
- Cloud SPE: NaaP Analytics, AI Performance Leaderboard.
- External: Web3 Index, Messari, Dune (Arbitrum + AI dashboards).
- `livepeer-data-mcp` is production-deployed (Kubernetes/ArgoCD/Vault, ClickHouse + PostHog at `livepeer-data-mcp.livepeer.technology`) but internal-only; do not surface as developer-facing.
- Studio webhook catalogue → Solutions/Studio/docs.

### Information to exclude

- Per-tool configuration depth (lives in `build/application/prometheus-scrape.mdx` and `build/application/settlement-observability.mdx`).
- Operator-grade observability (lives in Gateways/Orchestrators tabs).
- Studio Asset/Playback API (lives in Solutions/Studio).
- Contract addresses (link to canonical page; do not duplicate).

### Components

- One large Mintlify table organised by category.
- `<Note>` callout for `livepeer-data-mcp` internal-only status.
- `<Note>` callout linking to canonical contract addresses page.

### Sources to consult

- `persona-routing-and-infra-map.md` Part 2.8 (observability layer diagram).
- `persona-routing-and-infra-map.md` Verification log Item 3 (`livepeer-data-mcp` status).

---

## End of Batch 1

Six pages briefed. All NEW or significant rewrites; full L0/L1/L2 template applied.

Pages remaining: 63.

Next batch (2): Get Started — 5 pages, all NEW or significant rewrites, full template.
