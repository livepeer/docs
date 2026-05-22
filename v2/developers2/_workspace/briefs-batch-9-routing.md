# Content briefs — Batch 9 (final): Routing

Five pages. All NEW. Link-out style: each page acknowledges a persona or concern
that does not belong on the Developers tab and routes the reader to the correct
tab with a one-paragraph orientation.

These pages are short by design (target: 200-400 words each). They are not
content-bearing in the way Build pages are. The brief here is lighter than the
Build pages but still documents the routing decision and verified destination.

After verification:
- Persona E (alt-gateway / SDK builder) is served by Gateways tab content
  (verified at `/v2/gateways/guides/deployment-details/setup-options.mdx` and
  `/v2/gateways/guides/operator-considerations/business-case.mdx`). The
  Developers tab acknowledges and routes; it does not duplicate.
- Protocol Extenders route to About tab (protocol concepts, OSS stack) plus
  Community tab (contributing flow, SPEs, treasury).
- Solutions Integrators route to Solutions tab.

Source authority: `developers-ia-locked.md`, `personas-and-routing.md`, verified
content in `/v2/gateways/`, `/v2/about/`, `/v2/community/`.

---

## 65. `/v2/developers/routing/solutions-integrators.mdx` — NEW

### Lighter format

**Audience.** Persona 1 — Solutions Integrator. Builders shipping productised
Livepeer experiences (Daydream, Studio, Streamplace, Embody, Frameworks).

**Journey position.** From `index.mdx` second-row routing strip; from
`navigator.mdx` if the quiz routes them out; from external search traffic for
"Livepeer Studio" / "Daydream" / "Streamplace" landing on a developer-shaped
page.

**Activation moment.** Reader recognises that they are on the wrong tab for
their needs and clicks through to the correct Solutions surface within one
click.

**Frontmatter.**

```yaml
---
title: "Solutions Integrators"
sidebarTitle: "Solutions Integrators"
description: "If you are building on top of Daydream, Studio, Streamplace, Embody, or Frameworks — your home is the Solutions tab. This page routes you there."
pageType: "concept"
---
```

**Information to convey.**

- One-paragraph acknowledgement: Solutions Integrators (Persona 1) build on top
  of productised Livepeer experiences. Their reading map is Solutions, not
  Developers.
- One-line description per Solution product: Daydream (real-time AI video),
  Studio (managed video API), Streamplace (decentralised social video on AT
  Protocol), Embody (BYOC-powered avatar streaming), Frameworks (TBD per the
  current Solutions tab structure).
- Cross-links to Solutions tab landing pages, one per product.
- One paragraph noting that Developers tab is still useful for: AI Gateway SDKs
  (`@livepeer/ai`), embedded gateway patterns (`build/application/local-gateway.mdx`),
  and BYOC if they author custom pipelines.
- One paragraph noting that operating gateways at scale is a Gateways tab
  concern.

**Information to exclude.**

- Per-Solution product depth (Solutions tab).
- Build content covered elsewhere on Developers (cross-links only).
- SPE / treasury / governance (Community tab).

**Sources to consult.**

- Existing `/v2/solutions/` landing pages.
- `personas-and-routing.md` Persona 1 description.

**Verified deltas.**

- Confirm Solutions tab landing page paths exist.
- Confirm Frameworks status / framing per current Solutions tab structure.

---

## 66. `/v2/developers/routing/protocol-extenders.mdx` — NEW

### Lighter format

**Audience.** Persona 6 — Protocol Extender. Developers contributing to
go-livepeer, ai-runner, comfystream, livepeer/protocol contracts, livepeer-data,
ui-kit, subgraph, lpms, catalyst.

**Journey position.** From `index.mdx` second-row routing strip; from
`navigator.mdx` if the quiz routes them out; from external search traffic for
"Livepeer contribute" / "go-livepeer PR" landing on a developer-shaped page.

**Activation moment.** Reader recognises that contribution flow lives on About
+ Community, not Developers, and clicks through to the right surface in one
click.

**Frontmatter.**

```yaml
---
title: "Protocol Extenders"
sidebarTitle: "Protocol Extenders"
description: "Contributing to go-livepeer, ai-runner, comfystream, protocol contracts, or other Livepeer OSS? Your home is About (concepts) plus Community (contribution flow)."
pageType: "concept"
---
```

**Information to convey.**

- One-paragraph acknowledgement: Protocol Extenders (Persona 6) contribute to
  the OSS stack. Their reading map is About (what the protocol is, OSS stack
  layers, contract addresses, LIPs) plus Community (how to contribute, SPEs,
  treasury, grants, the contribution flow itself).
- Cross-links to About tab: protocol concepts, OSS stack, livepeer-contract-addresses,
  LIPs.
- Cross-links to Community tab: contribution flow, SPE listings, treasury,
  grants.
- Mention `livepeer/coordination` repo (Oct 2025) for the async-first issue
  process — verified per `persona-routing-and-infra-map.md`.
- One paragraph noting that Developers tab is still useful for: SDK consumption
  (`reference/sdks.mdx`), AI Gateway endpoint reference (`reference/ai-gateway-api.mdx`),
  and BYOC concept (`build/ai/byoc.mdx`) when extending the AI runtime.
- One paragraph noting `concepts/stack-layers.mdx` on Developers is a useful
  cross-tab reference for understanding which repo lives at which layer.

**Information to exclude.**

- About tab depth (link only).
- Community tab depth (link only).
- Treasury proposal mechanics (Community / About).
- LIP authoring depth (About).

**Sources to consult.**

- Existing `/v2/about/` and `/v2/community/` landing pages.
- `personas-and-routing.md` Persona 6 description.
- `persona-routing-and-infra-map.md` Verification log on `livepeer/coordination`.

**Verified deltas.**

- Confirm About tab and Community tab landing page paths.
- Confirm `livepeer/coordination` is referenced from the right Community page.
- Drop any reference to `livepeer/sdk` (verified dead).

---

## 67. `/v2/developers/routing/operating-a-gateway.mdx` — NEW

### Lighter format

**Audience.** Persona 5 — Application Developer who has graduated past the
light embedded gateway pattern (`build/application/local-gateway.mdx`) and now
needs production-grade gateway operation. Also covers Persona E (alt-gateway /
SDK builder per `persona-routing-and-infra-map.md`) — verified to live on the
Gateways tab.

**Journey position.** From
`build/application/should-i-run-a-gateway.mdx` for the decision page; from
`build/application/local-gateway.mdx` for the post-light-embedded graduation;
from external search traffic for "Livepeer gateway" / "remote signer" landing
on a developer-shaped page.

**Activation moment.** Reader knows the Gateways tab is their home, has the
right entry page bookmarked, and understands what is on Developers vs Gateways.

**Frontmatter.**

```yaml
---
title: "Operating a gateway"
sidebarTitle: "Operating a gateway"
description: "Production-grade gateway operations live on the Gateways tab: SLA, multi-region, multi-tenant, custody, observability. Plus Python / browser / mobile gateway clients."
pageType: "concept"
---
```

**Information to convey.**

- One-paragraph acknowledgement: production-grade gateway operations are not
  on Developers tab. They live on Gateways tab — verified at
  `/v2/gateways/guides/deployment-details/setup-options.mdx` and
  `/v2/gateways/guides/operator-considerations/business-case.mdx`.
- Cross-links to Gateways tab: setup options, deployment details, operator
  considerations, NaaP reference implementation.
- Persona E framing: the SDK / Custom gateway path (Python, browser, mobile)
  lives in Gateways → Setup Options → SDK / Custom. Verified workload support:
  Live AI (LV2V) full, BYOC full, batch AI partial, video transcoding excluded
  by design.
- Reference Python gateway client: `livepeer-python-gateway` (j0sh) — verified
  reference implementation; documented at
  `build/ai/python-gateway-client.mdx` (client-side use) and
  `reference/livepeer-python-gateway.mdx` (API surface).
- Community remote signer at `signer.eliteencoder.net` — verified free service.
- Deprecated `room` namespace callout: all 9 methods in `livepeer-js` deprecated,
  no migration target. Anyone with multi-participant streaming code in
  production should plan a migration.
- One paragraph noting Developers tab is still the right home for: light
  embedded gateway (single-machine, single-app) at
  `build/application/local-gateway.mdx`; the decision page at
  `build/application/should-i-run-a-gateway.mdx`; SDK consumption.

**Information to exclude.**

- Gateways tab depth (link only).
- Per-cloud HA architecture (Gateways tab).
- ETH custody mechanics (Gateways tab + Reference).
- NaaP plugin architecture beyond a one-line cross-reference (covered in
  `build/application/naap-plugins.mdx` for plugin authors and Gateways tab for
  operators).

**Sources to consult.**

- `/v2/gateways/guides/deployment-details/setup-options.mdx` (verified — full
  gateway choice tree, including SDK / Custom path).
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified —
  embed gateway functionality pattern, NaaP SIWE pattern,
  livepeer-python-gateway as the reference Python implementation).
- `personas-and-routing.md` Persona 5 graduation map.
- `persona-routing-and-infra-map.md` Verification log Item 6 (`room` namespace
  deprecation).

**Verified deltas.**

- Surface the `room` namespace migration callout explicitly — readers
  graduating to a self-hosted gateway are precisely the audience that will hit
  this issue.
- Confirm community remote signer URL is current.
- Confirm GWID Phase 1 status reference matches Gateways tab.

---

## 68. `/v2/developers/routing/observability.mdx` — NEW

### Lighter format

**Audience.** Any developer wanting Livepeer-network observability (settlement
metrics, ticket flow, orchestrator performance, gateway-side request rates).
This crosses Persona 5 (App Dev wanting cost visibility), Persona 1 (Solutions
Integrator with multi-tenant accounting), and Persona 6 (Protocol Extender
debugging on the open network).

**Journey position.** From `concepts/data-and-tooling.mdx` (the catalogue page
on Developers); from `build/application/production-checklist.mdx` (when ops is
the next concern); from search traffic for "Livepeer Prometheus" / "Livepeer
Grafana" / "Livepeer dashboard".

**Activation moment.** Reader knows where the observability surface for their
need lives — Gateways tab for gateway-side ops, Orchestrators tab for
orchestrator-side ops, Community tab for community-built dashboards (Stronk-Tech,
Dune dashboards), About tab for subgraph queries.

**Frontmatter.**

```yaml
---
title: "Observability"
sidebarTitle: "Observability"
description: "Where to find Livepeer observability: gateway-side ops, orchestrator-side ops, community dashboards, on-chain queries."
pageType: "concept"
---
```

**Information to convey.**

- One-paragraph acknowledgement: observability is multi-surface and the right
  home depends on what is being observed.
- **Gateway-side observability** (request rates, settlement, ticket flow,
  orchestrator selection) → Gateways tab. Cross-link.
- **Orchestrator-side observability** (job throughput, GPU utilisation,
  pipeline performance) → Orchestrators tab. Cross-link.
- **Community-built dashboards** (Stronk-Tech tools, Dune dashboards, NaaP
  Analytics, AI Performance Leaderboard) → Community tab listing + external
  links.
- **On-chain queries** (subgraph, contract events, treasury proposals) →
  About tab. Cross-link to subgraph schema and contract addresses page.
- **`livepeer-data-mcp`** is internal-only (verified per Verification log
  Item 3) — not for developer consumption.
- One paragraph noting Developers tab covers: the catalogue at
  `concepts/data-and-tooling.mdx`, the production checklist at
  `build/application/production-checklist.mdx`. Both are entry points; the
  depth lives on the operational tabs.

**Information to exclude.**

- Per-tool depth (lives on the destination tabs).
- Studio webhook catalogue (Solutions/Studio).
- Specific Grafana dashboard snippets (Gateways/Orchestrators tabs).

**Sources to consult.**

- `/v2/gateways/` observability pages (verify cross-link targets).
- `/v2/orchestrators/` observability pages (verify cross-link targets).
- `/v2/community/` ecosystem listing for community dashboards.
- `personas-and-routing.md` for the multi-tab observability framing.
- `persona-routing-and-infra-map.md` Verification log Item 3
  (`livepeer-data-mcp` internal-only).

**Verified deltas.**

- Confirm `livepeer-data-mcp` is excluded — internal-only, not a developer
  surface.
- Confirm subgraph cross-link target on About tab.

---

## 69. `/v2/developers/routing/resources.mdx` — NEW

### Lighter format

**Audience.** Any developer expecting a project-level Resources tab and landing
on Developers.

**Journey position.** From any Developers page where a reader expects a
"Resources" sub-section; from external search traffic for "Livepeer glossary" /
"Livepeer compendium" / "Livepeer wiki".

**Activation moment.** Reader recognises that the project-level Resources tab
is their home for glossary, compendium, knowledge hub, and external resources,
and clicks through.

**Frontmatter.**

```yaml
---
title: "Resources"
sidebarTitle: "Resources"
description: "Glossary, compendium, knowledge hub, external resources — all on the project-level Resources tab. This page routes you there."
pageType: "concept"
---
```

**Information to convey.**

- One-paragraph acknowledgement: project-level Resources tab is the home for
  cross-cutting reference material.
- Cross-links to project-level Resources tab sections: glossary, compendium,
  knowledge hub, external resources.
- One paragraph noting Developers tab carries its own Reference subgroup
  (`reference/*`) for API and SDK reference; the Resources tab handles
  cross-cutting reference like glossary terms, ecosystem partner directory,
  external papers and reports.
- Cross-link to `concepts/data-and-tooling.mdx` for the on-Developers
  observability catalogue (which complements the project-level Resources tab
  ecosystem listing).

**Information to exclude.**

- Per-resource depth (Resources tab).
- API / SDK reference (lives in Developers / Reference).

**Sources to consult.**

- `/v2/resources/` landing page (verify path).
- `personas-and-routing.md` boundary decision (Resources subfolder removed from
  Developers).

**Verified deltas.**

- Confirm project-level Resources tab path.
- Confirm the seven pages previously in Developers / resources / (glossary,
  compendium x3, knowledge-hub x3) now live on the project-level Resources tab.

---

## End of Batch 9 — IA briefing complete

Five pages briefed. All Routing pages are short link-out style (target 200-400
words each).

**All 69 pages briefed across 9 batches.**

Cumulative output: roughly 5,000 lines of content briefs covering every page in
the locked Developers tab IA.

---

## Summary of the 9-batch series

| Batch | Section | Pages | Status |
|---|---|---|---|
| 1 | Root + Concepts | 6 | NEW + retained |
| 2 | Get Started | 5 | NEW + retained |
| 3 | Build / Application | 14 | NEW + rewrite + retained |
| 4 | Build / AI | 12 | NEW + rewrite + retained |
| 5 | Build / Video | 7 | NEW + retained |
| 6 | Build / Agents | 5 | All NEW |
| 7 | Build / Tutorials | 3 | All retained-rename |
| 8 | Reference | 12 | NEW + retained |
| 9 | Routing | 5 | All NEW |
| **Total** | **9 sections** | **69** | |

---

## Locked IA total page count by section

| Section | Pages |
|---|---|
| Root | 2 (`index`, `navigator`) |
| Concepts | 4 |
| Get Started | 5 |
| Build / Application | 14 |
| Build / AI | 12 |
| Build / Video | 7 |
| Build / Agents | 5 |
| Build / Tutorials | 3 |
| Reference | 12 |
| Routing | 5 |
| **Total** | **69** |

vs current 48 pages: 44% expansion. Every added page traces to a verified
orphan or persona need from `persona-routing-and-infra-map.md`.

---

## Pages explicitly verified as out-of-scope and routed elsewhere

The IA cuts the following from Developers and routes them to the correct tab:

| Out-of-scope content | Destination tab | Routing page |
|---|---|---|
| Studio Asset API, webhooks, recording, multistream | Solutions/Studio | `routing/solutions-integrators.mdx` |
| Daydream consumer flows | Solutions/Daydream | `routing/solutions-integrators.mdx` |
| Streamplace social flows | Solutions/Streamplace | `routing/solutions-integrators.mdx` |
| Frameworks (TBD framing) | Solutions/Frameworks | `routing/solutions-integrators.mdx` |
| Production gateway operations | Gateways tab | `routing/operating-a-gateway.mdx` |
| Persona E (Python / browser / mobile gateway) | Gateways tab | `routing/operating-a-gateway.mdx` |
| Orchestrator-side observability | Orchestrators tab | `routing/observability.mdx` |
| Subgraph schema, contract addresses, LIPs, governance | About tab | `routing/protocol-extenders.mdx` |
| OSS contributing flow | Community tab | `routing/protocol-extenders.mdx` |
| SPEs, treasury, grants, Community Developer Contract | Community tab | `routing/protocol-extenders.mdx` |
| Glossary, compendium, knowledge-hub | project-level Resources tab | `routing/resources.mdx` |

---

## Verified facts surfaced across the IA

The 8-item Verification log from `persona-routing-and-infra-map.md` (27 Apr
2026) is fully threaded through these briefs:

1. `livepeer/sdk` is dead — surfaced as deprecated in `reference/sdks.mdx`,
   dropped from tutorials and quickstarts.
2. `livepeer.js` and `livepeer/ui-kit` are the same repo — surfaced in
   `reference/ui-kit.mdx` and `concepts/stack-layers.mdx`.
3. `livepeer-data-mcp` is internal-only — excluded from
   `concepts/data-and-tooling.mdx` and `routing/observability.mdx`.
4. `AIServiceRegistry` is opt-in/transitional — surfaced in
   `build/ai/ai-orchestration.mdx`.
5. Pipeline reconciliation 9 / 11 / 40 — surfaced in
   `build/ai/ai-pipelines.mdx` and `get-started/ai-developer.mdx`.
6. `room` namespace deprecated — migration callout in `reference/sdks.mdx` and
   `routing/operating-a-gateway.mdx`.
7. lpms and Catalyst are siblings (go-livepeer imports lpms; not catalyst) —
   surfaced in `build/video/lpms-integration.mdx` and
   `concepts/stack-layers.mdx`.
8. `task-runner` is Studio-internal — confirmed excluded across all briefs.

Plus the additional verified facts:

- 40 Storyboard BYOC capabilities: 7 Image, 2 Edit, 3 T2V, 6 I2V, 4 TTS,
  3 3D, 7 Other (verified breakdown).
- `signer.eliteencoder.net` is the verified free community remote signer.
- NaaP issues JWTs via SIWE (Sign-In with Ethereum) — verified pattern.
- Storacha is the canonical IPFS pinning successor to web3.storage.
- Estuary shut down in 2023.
- ad-astra-video maintains the AV1 prototype fork (not yet upstream).
- frame-interpolation is one of the 11 native ai-runner pipelines (verified
  orphan from Part 3 of source).
- `livepeer/coordination` (Oct 2025) is the async-first issue process —
  surfaced in `routing/protocol-extenders.mdx`.
- Java, Ruby, PHP Studio API SDKs exist (Speakeasy-generated) — surfaced in
  `reference/sdks.mdx`.
- `livepeer-python-gateway` workload support: LV2V full, BYOC full, batch AI
  partial, video transcoding excluded by design — verified.

---

## Files in this series

The full set of brief documents in `/mnt/user-data/outputs/`:

- `briefs-batch-1-root-concepts.md`
- `briefs-batch-2-getstarted.md`
- `briefs-batch-3-application.md`
- `briefs-batch-4-ai.md`
- `briefs-batch-5-video.md`
- `briefs-batch-6-agents.md`
- `briefs-batch-7-tutorials.md`
- `briefs-batch-8-reference.md`
- `briefs-batch-9-routing.md` (this file)

Plus the IA decision documents:

- `developers-ia-locked.md` (the IA itself)
- `personas-and-routing.md` (the 6-persona model)
- `persona-doc-comparison.md` (comparison against project-source)
- `developers-tab-boundary.md` (boundary decisions)

End of brief series. The next step is content production per page, which
should consume one brief at a time as the input contract for the page draft.
