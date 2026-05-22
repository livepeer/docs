# Content briefs — Batch 6: Build / Agents

Five pages. All NEW. Full L0/L1/L2 template applied.

Build / Agents serves Persona 4 (Agent Developer) primarily. Pages cover the
agent SDK (`@livepeer/agent`), the creative-kit primitives, the Storyboard
template pattern, reference agent templates from Titan-Node including EIP-8004
agents, and the Eliza model provider integration.

Verified content:
- `@livepeer/agent` and `@livepeer/creative-kit` are workspace packages inside
  `livepeer/storyboard`. Not yet on npm.
- Storyboard exposes 40 capabilities through its BYOC orchestrator: 7 Image,
  2 Edit, 3 T2V, 6 I2V, 4 TTS, 3 3D, 7 Other.
- Provider abstraction: Gemini, Claude, OpenAI, Daydream (Livepeer routing).
- Titan-Node templates: `livepeer-8004-agent`, `livepeer-402-middleware`,
  `Unreal_Vtuber`, `vtuber-extension`.
- Eliza plugin: ai16z-aligned model provider for Livepeer routing.

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md`,
Storyboard repo README.

---

## 45. `/v2/developers/build/agents/agent-sdk.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Agent Developer the full `@livepeer/agent` SDK surface — AgentRunner, ToolRegistry, WorkingMemory, provider routing — so they vendor the workspace package, configure their LLM provider, and wire up their first tool-using agent loop.

**Q2 — Featured reader.** A TypeScript developer with at least one shipped LLM app on OpenAI or Anthropic. They are familiar with at least one agent framework (Mastra, LangChain, Eliza). They have arrived from `get-started/agent-developer.mdx` having chosen "vendor the SDK" over "fork Storyboard".

**Q3 — Real alternative.** They use Mastra or LangChain directly with the OpenAI provider and skip the Livepeer routing entirely.

**Q4 — Required belief.** `@livepeer/agent` exposes a clean AgentRunner / ToolRegistry / WorkingMemory surface, the provider abstraction means I can swap LLM providers in one line, and vendoring the workspace package from Storyboard is a documented pattern that works today.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Mastra developer | "What's the equivalent of Agent / Workflow?" | AgentRunner pattern with ToolRegistry | Served here |
| LangChain developer | "Tools and agents here?" | AgentRunner + ToolRegistry mapping | Served here |
| Developer wanting to add Livepeer to existing agent | "Just use Livepeer as the provider?" | Yes — provider abstraction | Served here |
| Developer wanting LLM routing flexibility | "Can I swap providers?" | Yes — Gemini, Claude, OpenAI, Daydream | Served here |
| Developer worried about npm publication | "Is `@livepeer/agent` on npm?" | No — vendor from Storyboard monorepo | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "`@livepeer/agent` is the agent SDK — AgentRunner, ToolRegistry, WorkingMemory, provider routing. Vendor it from the Storyboard monorepo, configure a provider, wire your first tool. 30 minutes."
2. **The three primitives.**
   - **AgentRunner.** Owns the agent loop. Manages tool calls, response streaming, and error handling.
   - **ToolRegistry.** Where you register tools. Tool definition shape: name, description, JSON schema, handler.
   - **WorkingMemory.** Short-term context for the running agent loop. Distinct from session storage.
3. **Provider abstraction.** Four configured providers: `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `DAYDREAM_API_KEY` (Daydream routes through Livepeer infrastructure). One LLM provider is the minimum to ship.
4. **Vendoring the package.** `@livepeer/agent` is not on npm as of the date of this brief. Pattern: clone `livepeer/storyboard`, copy `packages/agent` into your monorepo, or add as a workspace dependency.
5. **First agent loop.** Code skeleton: configure provider, register one tool, instantiate AgentRunner, run.
6. **Tool authoring patterns.** Synchronous tool, async tool, tool that calls the AI Gateway, tool that calls another LLM.
7. **Cross-links.** `creative-kit.mdx` for the UI primitives. `storyboard-as-template.mdx` for the fork-the-whole-thing pattern. `reference-agents.mdx` for Titan-Node templates.

### Frontmatter

```yaml
---
title: "@livepeer/agent SDK"
sidebarTitle: "Agent SDK"
description: "AgentRunner, ToolRegistry, WorkingMemory, and provider routing across Gemini, Claude, OpenAI, and Daydream. Vendor the package from the Storyboard monorepo."
pageType: "how-to"
---
```

### Information to convey

- `@livepeer/agent` lives at `livepeer/storyboard/packages/agent`.
- Three primitives: AgentRunner, ToolRegistry, WorkingMemory.
- Provider abstraction with four providers: Gemini, Claude, OpenAI, Daydream.
- Daydream provider routes through Livepeer infrastructure.
- Not yet on npm — vendor pattern from Storyboard monorepo.
- Tool definition shape: name, description, JSON schema, handler.
- Workspace package is the install model.

### Information to exclude

- Creative-kit UI primitives (lives in `creative-kit.mdx`).
- Whole-Storyboard fork pattern (lives in `storyboard-as-template.mdx`).
- Specific Titan-Node templates (lives in `reference-agents.mdx`).
- AI Gateway endpoint catalogue (lives in `build/ai/ai-pipelines.mdx`).
- Eliza framework specifics (lives in `eliza-integration.mdx`).

### Components

- One Mermaid diagram showing AgentRunner ↔ ToolRegistry ↔ Provider.
- Code skeletons: provider config, tool registration, first run.
- `<Note>` for npm publication state.

### Sources to consult

- `livepeer/storyboard/packages/agent` README and source.
- `persona-routing-and-infra-map.md` Part 1.7 (Agent Developer persona).

---

## 46. `/v2/developers/build/agents/creative-kit.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Agent Developer the `@livepeer/creative-kit` UI primitive set — components, hooks, design tokens — so they wire creative-app surfaces (canvas, asset gallery, prompt input) without rebuilding from scratch.

**Q2 — Featured reader.** An Agent Developer building a creative-tool product (image studio, video editor, model playground). They have shipped React UI before. They want the canvas + gallery + prompt input primitives ready-made instead of rebuilding them.

**Q3 — Real alternative.** They build the canvas, gallery, and prompt input from scratch with their own React components, taking 2-3 weeks of work.

**Q4 — Required belief.** `@livepeer/creative-kit` ships canvas, asset gallery, prompt input, and asset preview as composable primitives, and I can vendor them from the Storyboard monorepo and wire them up to my AgentRunner output.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Developer building image studio | "Canvas + gallery primitives?" | Yes — both available | Served here |
| Developer building video editor | "Timeline + preview primitives?" | Preview yes; timeline emerging — check repo | Served here |
| Developer wanting prompt input UI | "Prompt input component?" | Yes — multiline + attachment | Served here |
| Developer wanting design tokens | "Theming?" | CSS variables + theme tokens | Served here |
| Developer wanting deeper customisation | "Full source?" | Vendor from Storyboard monorepo | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "`@livepeer/creative-kit` ships the UI primitives a creative-app needs: canvas, asset gallery, prompt input, asset preview. Vendor from Storyboard, wire up, ship."
2. **Primitive list.** Canvas. Asset gallery. Prompt input. Asset preview. Each with a one-line description and a code skeleton.
3. **Design tokens.** CSS variables for colours, spacing, typography. Theming pattern.
4. **Wiring to AgentRunner.** Pattern: AgentRunner streams output → asset preview renders → asset gallery accumulates results.
5. **Vendoring.** Same pattern as `@livepeer/agent` — clone `livepeer/storyboard`, copy `packages/creative-kit` or use as workspace dependency.
6. **Storyboard as a worked example.** Storyboard itself uses creative-kit; reading the Storyboard source is the canonical way to learn the primitives in real use.
7. **Cross-links.** `agent-sdk.mdx`, `storyboard-as-template.mdx`.

### Frontmatter

```yaml
---
title: "@livepeer/creative-kit"
sidebarTitle: "Creative-kit"
description: "Canvas, asset gallery, prompt input, asset preview. UI primitives for creative agent apps. Vendor from the Storyboard monorepo."
pageType: "how-to"
---
```

### Information to convey

- `@livepeer/creative-kit` lives at `livepeer/storyboard/packages/creative-kit`.
- Primitive list: canvas, asset gallery, prompt input, asset preview.
- Design tokens via CSS variables.
- Wiring pattern to AgentRunner output.
- Vendor-from-Storyboard install model.
- Storyboard itself is the worked example for reading the primitives in real use.

### Information to exclude

- AgentRunner depth (lives in `agent-sdk.mdx`).
- Whole-Storyboard fork (lives in `storyboard-as-template.mdx`).
- Player / Broadcast components (those live in `frontend-react-player.mdx` / `frontend-react-broadcast.mdx`).

### Components

- Component preview blocks (Mintlify supports inline component previews — confirm rendering at draft time).
- Code skeletons for each primitive.

### Sources to consult

- `livepeer/storyboard/packages/creative-kit` README and source.
- Storyboard app source for usage patterns.

---

## 47. `/v2/developers/build/agents/storyboard-as-template.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Agent Developer the canonical fork-Storyboard pattern — clone, configure providers, swap branding, deploy — so they ship a creative agent product fast when their product looks like Storyboard.

**Q2 — Featured reader.** An Agent Developer whose product is shaped like Storyboard (a creative agent canvas with image / video / audio generation). They evaluated vendoring `@livepeer/agent` (covered in `agent-sdk.mdx`) and decided forking is the faster path because Storyboard already does most of what they want.

**Q3 — Real alternative.** They vendor `@livepeer/agent` and `@livepeer/creative-kit` and rebuild the Storyboard app shell themselves, taking weeks.

**Q4 — Required belief.** Storyboard is forkable, well-structured, and the configure-providers / swap-branding / deploy flow is documented enough that I can stand up my own creative agent product in days.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Developer wanting creative-canvas product | "Fork Storyboard?" | Yes — clone + configure pattern | Served here |
| Developer worried about license | "Open source license?" | Confirm + link | Served here |
| Developer wanting to stay close to upstream | "Pull updates from upstream?" | Yes — pattern documented | Served here |
| Developer with branding requirements | "Theming + branding?" | Pattern via creative-kit design tokens | Served here |
| Developer wanting deployment shape | "Where to host?" | Vercel / Cloudflare patterns | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "When your creative agent product looks like Storyboard, fork it. Clone, configure providers, swap branding, deploy. Days, not weeks."
2. **What Storyboard is.** A real creative agent canvas product. Reference application of `@livepeer/agent` + `@livepeer/creative-kit`. Open-source under the Livepeer Foundation.
3. **Forking pattern.** `git clone livepeer/storyboard` (or fork on GitHub). Workspace structure overview.
4. **Configure providers.** Set provider API keys (Gemini / Claude / OpenAI / Daydream).
5. **Swap branding.** Theme tokens. Logo. Naming.
6. **Deployment.** Vercel pattern. Cloudflare Pages pattern. Self-hosted Docker pattern.
7. **Pulling upstream updates.** Git remote + merge pattern. Diverging strategically.
8. **Capability roster.** Forty BYOC capabilities through Storyboard's orchestrator: 7 Image, 2 Edit, 3 T2V, 6 I2V, 4 TTS, 3 3D, 7 Other (verified breakdown).
9. **Cross-links.** `agent-sdk.mdx`, `creative-kit.mdx`, `reference-agents.mdx`.

### Frontmatter

```yaml
---
title: "Storyboard as a template"
sidebarTitle: "Fork Storyboard"
description: "Clone Storyboard, configure providers, swap branding, deploy. The fast path for creative agent products that look like Storyboard."
pageType: "tutorial"
---
```

### Information to convey

- Storyboard is the canonical reference creative agent product, open-source.
- Forking is the recommended path for products shaped like Storyboard.
- Configure providers via env vars.
- Theme tokens for branding.
- Deployment to Vercel, Cloudflare, or self-hosted.
- Pulling upstream updates is supported.
- Storyboard's BYOC orchestrator exposes 40 capabilities (verified breakdown).

### Information to exclude

- AgentRunner internals (lives in `agent-sdk.mdx`).
- Creative-kit primitive depth (lives in `creative-kit.mdx`).
- Eliza integration (lives in `eliza-integration.mdx`).
- Specific Titan-Node templates (lives in `reference-agents.mdx`).

### Components

- `<Steps>` for the clone → configure → brand → deploy flow.
- Code blocks for git remote setup and provider env config.
- One Mermaid diagram showing fork relationship to upstream.

### Sources to consult

- `livepeer/storyboard` README.
- Storyboard deployment docs.
- `persona-routing-and-infra-map.md` Verification log Item 5 (40-capability roster verified).

---

## 48. `/v2/developers/build/agents/reference-agents.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Agent Developer a curated list of Titan-Node reference agent templates — `livepeer-8004-agent`, `livepeer-402-middleware`, `Unreal_Vtuber`, `vtuber-extension` — so they pick a starter that matches their use case (paid agents, payment middleware, vtuber pipelines).

**Q2 — Featured reader.** An Agent Developer with a specific use case (paid agent identity via EIP-8004, payment middleware via EIP-402, vtuber video pipeline) who wants a working starter rather than building from scratch. They have shipped on TypeScript or Rust before and are comfortable cloning + extending repos.

**Q3 — Real alternative.** They build their EIP-8004 agent or payment middleware from scratch, missing Titan-Node's documented patterns.

**Q4 — Required belief.** Titan-Node ships production-grade reference templates for paid agents, payment middleware, and vtuber pipelines, and these templates are the fastest starting point for those use cases.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Developer wanting EIP-8004 paid agent | "Template for 8004 agents?" | `livepeer-8004-agent` | Served here |
| Developer wanting EIP-402 payment middleware | "Payment middleware?" | `livepeer-402-middleware` | Served here |
| Developer building vtuber pipeline | "Vtuber starter?" | `Unreal_Vtuber` + `vtuber-extension` | Served here |
| Developer wanting to evaluate Titan-Node | "Who is Titan-Node?" | One-paragraph summary + repo links | Served here |
| Developer wanting other ecosystem agents | "Where to find more?" | Link to Reference / Ecosystem | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Curated reference agent templates from Titan-Node. Pick the one that matches your use case: paid agents (EIP-8004), payment middleware (EIP-402), vtuber pipelines."
2. **Titan-Node as ecosystem builder.** One-paragraph context: who Titan-Node is, why their templates exist, how they relate to the Livepeer ecosystem.
3. **`livepeer-8004-agent`.** EIP-8004 paid agent identity pattern. Use case: agents that earn through standardised on-chain identity. Link to repo.
4. **`livepeer-402-middleware`.** EIP-402 HTTP payment middleware. Use case: agents that accept payments per request. Link to repo.
5. **`Unreal_Vtuber`.** Real-time vtuber pipeline integrating Livepeer video. Use case: avatar-driven creators. Link to repo.
6. **`vtuber-extension`.** Extension to Unreal_Vtuber. Use case: customising the vtuber pipeline. Link to repo.
7. **Cross-links.** `agent-sdk.mdx` for the underlying SDK. Reference / Ecosystem for the broader community list.

### Frontmatter

```yaml
---
title: "Reference agent templates"
sidebarTitle: "Reference agents"
description: "Titan-Node reference templates for paid agents (EIP-8004), payment middleware (EIP-402), and vtuber pipelines."
pageType: "reference"
---
```

### Information to convey

- Titan-Node is an ecosystem builder shipping reference templates.
- Four templates: `livepeer-8004-agent`, `livepeer-402-middleware`, `Unreal_Vtuber`, `vtuber-extension`.
- Each template's use case and repo link.
- These are starting points; readers fork and extend.

### Information to exclude

- EIP-8004 specification depth (link to EIP).
- EIP-402 specification depth (link to EIP).
- Generic agent SDK (lives in `agent-sdk.mdx`).
- Storyboard (lives in `storyboard-as-template.mdx`).

### Components

- Card row for the four templates with repo links.
- Brief description per template.

### Sources to consult

- Titan-Node org repos on GitHub.
- `persona-routing-and-infra-map.md` Verification log (Titan-Node templates verified).

---

## 49. `/v2/developers/build/agents/eliza-integration.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Eliza-framework developer the canonical Livepeer model provider plugin pattern — install, configure, route LLM calls through Livepeer infrastructure — so they keep their existing Eliza app and add Livepeer routing as one of the swappable providers.

**Q2 — Featured reader.** An Eliza developer (ai16z framework). They have a working Eliza agent and use one or more model providers. They want to add Livepeer as a provider — either for cost reasons, for Daydream-specific routing, or to reduce dependency on a single hyperscaler.

**Q3 — Real alternative.** They keep their Eliza agent on OpenAI / Anthropic and skip Livepeer routing.

**Q4 — Required belief.** A Livepeer model provider plugin exists for Eliza, the install-and-configure path is documented, and I can swap providers in my Eliza config in one line.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Eliza developer with working agent | "Install + configure?" | Plugin install + config block | Served here |
| Eliza developer wanting Daydream routing | "Daydream as a provider?" | Yes — same plugin | Served here |
| Eliza developer worried about parity | "All Eliza features supported?" | Provider parity matrix | Served here |
| Developer evaluating Eliza vs `@livepeer/agent` | "Which agent framework?" | Decision criteria | Served here |
| Developer wanting Eliza + Livepeer-specific tools | "Custom tools?" | Eliza tool authoring + plugin | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "The Livepeer model provider plugin for Eliza — install, configure, route LLM calls through Livepeer infrastructure. Add Livepeer as a swappable provider in your existing Eliza config."
2. **What the plugin does.** Routes Eliza's LLM calls through Livepeer's AI Gateway infrastructure (or Daydream specifically). Provider abstraction lives at Eliza's plugin layer.
3. **Install.** Package install. Plugin registration in Eliza config.
4. **Configure.** API key (Daydream or AI Gateway). Provider selection.
5. **Provider parity.** What Eliza features work with the Livepeer provider. Streaming, tool calls, response formats.
6. **Eliza vs `@livepeer/agent` decision.** When to use Eliza (existing Eliza app, ai16z ecosystem alignment). When to use `@livepeer/agent` (greenfield, Storyboard-shaped product, Livepeer-native).
7. **Cross-links.** `agent-sdk.mdx`, Eliza framework documentation (ai16z).

### Frontmatter

```yaml
---
title: "Eliza model provider plugin"
sidebarTitle: "Eliza integration"
description: "Add Livepeer routing to an existing Eliza agent. Install the model provider plugin, configure, swap providers in one line."
pageType: "how-to"
---
```

### Information to convey

- A Livepeer model provider plugin exists for the Eliza framework (ai16z).
- Install and configure pattern.
- Provider abstraction at Eliza's plugin layer.
- Daydream is also configurable via the same plugin.
- Decision criteria for Eliza vs `@livepeer/agent`.

### Information to exclude

- Eliza framework basics (link to ai16z docs).
- `@livepeer/agent` SDK depth (lives in `agent-sdk.mdx`).
- AI Gateway endpoint catalogue (lives in `build/ai/ai-pipelines.mdx`).
- ai16z DAO governance.

### Components

- Code block for plugin install + config.
- Decision matrix: Eliza vs `@livepeer/agent`.
- `<Card>` link to Eliza framework documentation.

### Sources to consult

- Eliza framework documentation (ai16z).
- Livepeer Eliza model provider plugin repo or package.
- `persona-routing-and-infra-map.md` Part 1.7 (Agent Developer persona).

---

## End of Batch 6

Five pages briefed. Build / Agents fully scoped. All NEW; full template applied
to each.

Pages remaining: 20.

Next batch (7): Build / Tutorials — 3 pages, all retained, light briefs.
