# Content briefs — Batch 8: Reference

Twelve pages. Mix of retained-rename (4) and NEW (8). Tiered template:
full L0/L1/L2 for NEW pages where there is meaningful page-shape design work;
lighter format for retained pages where existing v2 content carries the load and
this brief documents the path migration plus deltas.

Reference is API and SDK only. Protocol references (subgraph schema, contract
addresses, LIPs, Arbitrum bridge) live in About. Ecosystem references (community
tools, partners, projects) live in Community. Routing pages handle the "how do I
contribute / find a partner / report a bug" surface.

Source authority: `developers-ia-locked.md`, verified facts in
`persona-routing-and-infra-map.md`.

---

## 53. `/v2/developers/reference/apis.mdx` — RETAINED rename (from `resources/reference/`)

### Lighter format

**Audience.** All four primary personas at the moment they need to look up an
endpoint shape, parameter, or response field.

**Journey position.** From any Build page that mentions a specific endpoint;
from search traffic for "Livepeer API"; out to specific endpoint pages or SDK
references.

**Activation moment.** Reader has the endpoint they need, knows the parameters,
knows the response shape, and can return to writing code.

**Frontmatter.**

```yaml
---
title: "APIs"
sidebarTitle: "APIs"
description: "Index of every Livepeer API surface a developer can call: AI Gateway, transcoding, ingest, playback. With links to per-endpoint reference pages."
pageType: "reference"
---
```

**Information to convey.**

- Index page for every Livepeer API surface.
- AI Gateway endpoints (full catalogue).
- Transcoding endpoints.
- Ingest and playback URL patterns.
- Cross-links to per-endpoint pages.
- Cross-link to SDKs page for language-specific bindings.

**Information to exclude.**

- Per-endpoint depth (lives in the dedicated reference pages).
- SDK installation (lives in `sdks.mdx`).
- Studio-specific endpoints beyond cross-link (Solutions/Studio).

**Sources to consult.**

- Existing `resources/reference/apis.mdx`.
- `livepeer/ai-worker/runner/gen_openapi.py` for the canonical AI Gateway OpenAPI shape.

**Verified deltas.**

- Confirm path migration from `resources/reference/` to `reference/`.
- Confirm catalogue includes the 11 native pipelines verified in `persona-routing-and-infra-map.md`.
- Drop any reference to `livepeer/sdk` (verified dead).

---

## 54. `/v2/developers/reference/pricing-rate-limits.mdx` — RETAINED rename (from `resources/reference/`)

### Lighter format

**Audience.** Application Developer evaluating cost; Solutions Integrator at scale; any developer hitting a 429.

**Journey position.** From `build/application/troubleshooting.mdx` on a 429; from `build/application/choose-a-gateway.mdx` for production decisions; out to gateway-specific pricing if applicable.

**Activation moment.** Reader knows the per-gateway pricing model, the rate limit shape, and what to do when they hit a limit.

**Frontmatter.**

```yaml
---
title: "Pricing and rate limits"
sidebarTitle: "Pricing & rate limits"
description: "Per-gateway pricing models and rate limit shapes. Studio, Daydream, Cloud Community Gateway, GWID, self-hosted."
pageType: "reference"
---
```

**Information to convey.**

- Per-gateway pricing summary table.
- Per-gateway rate limit summary table.
- Cloud Community Gateway free-tier limits.
- Studio per-minute and per-call pricing structure.
- GWID SLA-backed pricing model.
- Self-hosted: no rate limits intrinsic to go-livepeer; rate limits are application-layer.

**Information to exclude.**

- Real-time pricing API (link to current Studio dashboard or Daydream pricing page).
- Per-orchestrator pricing economics (Orchestrators tab).
- Ticket-level pricing detail (Gateways tab + Reference / Protocol → About).

**Sources to consult.**

- Existing `resources/reference/pricing-rate-limits.mdx`.
- Studio pricing page (live source).
- `persona-routing-and-infra-map.md` Part 2.3 (gateway layer status, including GWID Phase 1 verified).

**Verified deltas.**

- Update path.
- Confirm GWID status is Phase 1 (verified).
- Confirm Cloud Community Gateway is free, public, off-chain (verified).

---

## 55. `/v2/developers/reference/sdks.mdx` — RETAINED rename, deltas required (from `resources/reference/`)

### Lighter format

**Audience.** All four primary personas selecting an SDK for their language.

**Journey position.** From any Get Started or Build page mentioning an SDK; from search traffic.

**Activation moment.** Reader has the right SDK package name for their language, knows whether it is Studio API or AI Gateway, and has the install command.

**Frontmatter.**

```yaml
---
title: "SDKs"
sidebarTitle: "SDKs"
description: "Every Livepeer SDK across languages and surfaces. AI Gateway SDKs, Studio API SDKs, ui-kit, byoc-sdk, agent SDK."
pageType: "reference"
---
```

**Information to convey.**

- AI Gateway SDKs (gateway-agnostic): `@livepeer/ai` (TS), `livepeer-ai-python` (Py), `livepeer-ai-go` (Go).
- Studio API SDKs (Speakeasy-generated): `livepeer` npm package (TS), `livepeer-python`, `livepeer-go`. Plus Java, Ruby, PHP — verified to exist (note from Verification log; verify they are listed in `navigator.mdx` cross-link).
- ui-kit family (`@livepeer/react`, `@livepeer/core-web`, `@livepeer/core`, `@livepeer/core-react`) — same repo as historic `livepeer.js` (verified per Verification log Item 2).
- BYOC SDK: `@muxionlabs/byoc-sdk` (browser WebRTC client).
- Python gateway client: `livepeer-python-gateway` (j0sh).
- Agent SDK: `@livepeer/agent` and `@livepeer/creative-kit` (workspace packages in `livepeer/storyboard`; not yet on npm).
- pytrickle: `pytrickle` (PyPI + git).
- `livepeer/sdk` is dead (verified per Verification log Item 1) — list as deprecated, point to AI Gateway SDKs.
- `room` namespace in `livepeer-js` is deprecated across all 9 methods, no migration target (verified per Verification log Item 6) — surface as a migration callout.

**Information to exclude.**

- Per-SDK API surface depth (lives in per-SDK reference pages).
- Studio API endpoint catalogue (Solutions/Studio + APIs reference).
- Internal SDK roadmap.

**Sources to consult.**

- Existing `resources/reference/sdks.mdx`.
- `persona-routing-and-infra-map.md` Part 2.2 (SDK inventory) and Verification log Items 1, 2, 6.

**Verified deltas.**

- Update path.
- Add Java, Ruby, PHP Studio API SDKs.
- Mark `livepeer/sdk` as dead.
- Add a `room` namespace deprecation callout.
- Note `livepeer.js` and `livepeer/ui-kit` are the same repo; both names appear historically.
- Add `@livepeer/agent` and `@livepeer/creative-kit` with the workspace-package install caveat.
- Add `livepeer-python-gateway` (j0sh).
- Add `pytrickle`.

---

## 56. `/v2/developers/reference/pytrickle-reference.mdx` — RETAINED rename (from `resources/reference/pytrickle.mdx`)

### Lighter format

**Audience.** Persona 2 — AI Developer extending pytrickle's FrameProcessor; Persona 6 — Protocol Extender contributing to pytrickle.

**Journey position.** From `build/ai/pytrickle.mdx` (concept page) for the API surface; from `build/ai/byoc.mdx` after architecture is understood; out to the pytrickle repo and source.

**Activation moment.** Reader has the FrameProcessor class signature, the StreamServer endpoints, the audio frame and video frame types, and the configuration options reference.

**Frontmatter.**

```yaml
---
title: "pytrickle reference"
sidebarTitle: "pytrickle reference"
description: "Full pytrickle API reference: FrameProcessor, StreamServer, frame types, configuration options."
pageType: "reference"
---
```

**Information to convey.**

- FrameProcessor class signature: four async methods.
- StreamServer HTTP endpoints: `/api/stream/start`, `/api/stream/params`, `/api/stream/status`, `/api/stream/stop`.
- Frame types: VideoFrame, AudioFrame.
- Configuration options: framerate cap, model loading hooks, parameter update callbacks.
- Install paths: PyPI (`pip install pytrickle`) and git.
- Cross-link to concept page `build/ai/pytrickle.mdx` for the why.

**Information to exclude.**

- Trickle protocol wire format (lives in `build/ai/trickle-protocol.mdx`).
- BYOC architecture (lives in `build/ai/byoc.mdx`).
- ComfyStream pipelines (lives in `build/ai/comfystream-platform.mdx`).

**Sources to consult.**

- Existing `resources/reference/pytrickle.mdx`.
- `livepeer/pytrickle` source for current API surface.

**Verified deltas.**

- Update path.
- Confirm endpoint list against current `livepeer/pytrickle` source.

---

## 57. `/v2/developers/reference/ai-gateway-api.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a developer the canonical AI Gateway HTTP endpoint catalogue — every endpoint, request shape, response shape, error codes — so they call any AI capability without depending on a specific SDK.

**Q2 — Featured reader.** A developer who needs to call the AI Gateway from a language without a first-party SDK (Rust, C#, Elixir, etc.) or who wants to bypass the SDK to debug a request. They have used HTTP APIs before and read OpenAPI specs.

**Q3 — Real alternative.** They reverse-engineer the wire shape from the SDK source, or they ship a request from one of the SDKs and capture the wire format with a proxy.

**Q4 — Required belief.** A canonical endpoint catalogue exists, every endpoint has a documented request and response shape, and the catalogue reconciles the 11-native / 9-Daydream / 40-Storyboard pipeline numbers (verified).

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Developer in non-supported language | "What endpoints do I call?" | Full endpoint table with request / response shapes | Served here |
| Developer debugging an SDK call | "What's the wire format?" | Per-endpoint wire format examples | Served here |
| Developer asking which gateway hosts which endpoint | "All gateways the same?" | Yes for AI Gateway endpoints; gateway-agnostic shape | Served here |
| Developer wanting OpenAPI spec | "Where's the spec?" | Link to ai-runner OpenAPI source | Linked |
| Developer wanting Storyboard BYOC capabilities | "40-capability list?" | Cross-link to `ai-pipelines.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "The canonical AI Gateway HTTP endpoint catalogue. Every endpoint, request shape, response shape, error codes. Gateway-agnostic across Studio, Daydream, Cloud Community, GWID, and self-hosted."
2. **Endpoint catalogue.** Eleven native pipelines (text-to-image, image-to-image, image-to-video, etc.) listed with request and response shapes. Reference the OpenAPI source for canonical detail.
3. **Authentication header shape.** Bearer token universally. Per-gateway auth pattern cross-link.
4. **Error response shape.** Common error envelope. HTTP status code conventions.
5. **Rate limit headers.** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.
6. **OpenAPI source.** Link to `livepeer/ai-worker/runner/gen_openapi.py` for the canonical generated OpenAPI spec.
7. **Storyboard BYOC capabilities.** Cross-link to `build/ai/ai-pipelines.mdx` for the 40-capability list (these are not in the native AI Gateway endpoint catalogue; they are Storyboard-mediated).
8. **Cross-links.** `sdks.mdx` for language-specific SDK references; per-SDK reference pages for binding shapes.

### Frontmatter

```yaml
---
title: "AI Gateway API"
sidebarTitle: "AI Gateway API"
description: "Canonical AI Gateway HTTP endpoint catalogue. Every endpoint, request and response shape, error codes. Gateway-agnostic."
pageType: "reference"
---
```

### Information to convey

- 11 native AI pipelines (verified against ai-runner source).
- Gateway-agnostic endpoint shape.
- Bearer token auth.
- Common error envelope.
- Rate limit headers.
- OpenAPI source location.
- Storyboard BYOC capabilities are separate (40-capability list at `ai-pipelines.mdx`).

### Information to exclude

- Per-SDK installation (lives in `sdks.mdx` and per-SDK reference).
- Per-gateway pricing (lives in `pricing-rate-limits.mdx`).
- BYOC architecture (lives in `build/ai/byoc.mdx`).
- Studio Asset API (Solutions/Studio).

### Components

- Endpoint catalogue table.
- Code blocks for request and response shapes.
- `<Note>` for the OpenAPI source link.

### Sources to consult

- `livepeer/ai-worker/runner/gen_openapi.py`.
- Per-SDK READMEs for canonical wire format examples.
- `persona-routing-and-infra-map.md` Verification log Item 5 (9/11/40 reconciliation).

---

## 58. `/v2/developers/reference/livepeer-ai-js.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a TypeScript developer the full `@livepeer/ai` SDK reference — constructor, methods, error types, configuration — in one page with code examples per method.

**Q2 — Featured reader.** A TypeScript developer who has installed `@livepeer/ai`, made their first call from a quickstart, and needs the full method signature reference for production code.

**Q3 — Real alternative.** They read the Speakeasy-generated reference site or the package source on GitHub.

**Q4 — Required belief.** Every method, every parameter, every error type is documented in one page with code examples I can copy.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Dev needing method signatures | "Method list with signatures?" | Full method reference | Served here |
| Dev needing error types | "Which errors do I catch?" | Error type table | Served here |
| Dev needing configuration | "Constructor options?" | Constructor reference | Served here |
| Dev needing TypeScript types | "Exported type list?" | Type list with imports | Served here |
| Dev wanting source | "Where's the package source?" | Link to livepeer-ai-js | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "`@livepeer/ai` full reference. Constructor, methods, error types, types. With code per method."
2. **Install.** `npm install @livepeer/ai`.
3. **Constructor.** `new Livepeer({ httpBearer, baseURL })`. Constructor option table.
4. **Methods.** Per-pipeline method (text-to-image, image-to-image, etc.) with full signature, parameters, return type, code example.
5. **Error types.** Error class hierarchy.
6. **Exported types.** TypeScript type list with import paths.
7. **Cross-links.** `ai-gateway-api.mdx` for the wire format. `sdks.mdx` for the family overview.

### Frontmatter

```yaml
---
title: "@livepeer/ai SDK reference"
sidebarTitle: "@livepeer/ai"
description: "Full TypeScript SDK reference: constructor, methods, error types, exported types. With code examples per method."
pageType: "reference"
---
```

### Information to convey

- Constructor: `new Livepeer({ httpBearer, baseURL })`.
- Per-pipeline method signatures.
- Error class hierarchy.
- TypeScript exported types.
- Speakeasy-generated nature of the SDK.
- Repo: `livepeer/livepeer-ai-js`.

### Information to exclude

- Wire format (lives in `ai-gateway-api.mdx`).
- Per-gateway auth pattern (lives in `build/application/ai-authentication.mdx`).
- Pricing (lives in `pricing-rate-limits.mdx`).

### Components

- Method reference table or per-method code blocks.
- Error type table.

### Sources to consult

- `livepeer/livepeer-ai-js` README + source.

---

## 59. `/v2/developers/reference/livepeer-ai-python.mdx` — NEW

### Lighter format

**Audience.** Persona 2, 5 — Python developer using `livepeer-ai-python`.

**Journey position.** From `get-started/application-developer.mdx` Python tab; from `build/application/ai-quickstart.mdx`; out to `ai-gateway-api.mdx` for wire format.

**Activation moment.** Reader has the full Python SDK method reference and can write production Python against the AI Gateway.

**Frontmatter.**

```yaml
---
title: "livepeer-ai-python SDK reference"
sidebarTitle: "livepeer-ai-python"
description: "Full Python SDK reference. Constructor, methods, error types. Speakeasy-generated, gateway-agnostic."
pageType: "reference"
---
```

**Information to convey.**

- `pip install livepeer-ai`.
- Constructor.
- Per-pipeline method signatures.
- Error class hierarchy.
- Repo: `livepeer/livepeer-ai-python`.
- Async client variants if available.

**Information to exclude.**

- Wire format (`ai-gateway-api.mdx`).
- Per-gateway auth (`build/application/ai-authentication.mdx`).

**Sources to consult.**

- `livepeer/livepeer-ai-python` README + source.

---

## 60. `/v2/developers/reference/livepeer-ai-go.mdx` — NEW

### Lighter format

**Audience.** Persona 2, 5, 6 — Go developer using `livepeer-ai-go`.

**Journey position.** From `build/application/ai-quickstart.mdx` Go tab; out to `ai-gateway-api.mdx` for wire format.

**Activation moment.** Reader has the full Go SDK method reference and can write production Go against the AI Gateway.

**Frontmatter.**

```yaml
---
title: "livepeer-ai-go SDK reference"
sidebarTitle: "livepeer-ai-go"
description: "Full Go SDK reference. Constructor, methods, error types. Speakeasy-generated, gateway-agnostic."
pageType: "reference"
---
```

**Information to convey.**

- `go get github.com/livepeer/livepeer-ai-go`.
- Client constructor.
- Per-pipeline method signatures.
- Error type table.
- Repo: `livepeer/livepeer-ai-go`.

**Information to exclude.**

- Wire format.
- Per-gateway auth.

**Sources to consult.**

- `livepeer/livepeer-ai-go` README + source.

---

## 61. `/v2/developers/reference/ui-kit.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a frontend developer the canonical reference for the entire ui-kit family (`@livepeer/react`, `@livepeer/core-web`, `@livepeer/core`, `@livepeer/core-react`) and notes that `livepeer.js` is the historical name for the same repo.

**Q2 — Featured reader.** A frontend developer building production UI with the Livepeer React or non-React primitives. They have used the components, are now in production, and need the full reference.

**Q3 — Real alternative.** They read the package READMEs in the ui-kit monorepo directly.

**Q4 — Required belief.** The ui-kit family is one repo with multiple packages, the package boundaries are documented, and every component prop is referenced here.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| React dev with Player / Broadcast | "Component prop reference?" | Full component prop tables | Served here |
| Non-React dev with core-web | "Controller API reference?" | Controller method tables | Served here |
| Dev confused by livepeer.js name | "What's the difference?" | None — same repo, historic name | Served here |
| Dev wanting type imports | "Exported type list?" | Per-package type list | Served here |
| Dev wanting source | "Where's the monorepo?" | Link to livepeer/ui-kit | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "`@livepeer/react`, `@livepeer/core-web`, `@livepeer/core`, `@livepeer/core-react` are the four packages of the ui-kit family. Same repo (`livepeer/ui-kit`). `livepeer.js` is the historical name for this repo."
2. **Package map.** Four packages with one-paragraph purpose each.
3. **`@livepeer/react` reference.** Component list. Per-component prop table.
4. **`@livepeer/core-web` reference.** Controller method list. Hooks for non-React frameworks.
5. **`@livepeer/core` reference.** Lower-level types and utilities.
6. **`@livepeer/core-react` reference.** React-specific bindings between core and react packages.
7. **`livepeer.js` historical note.** Same repo. Both names appear in the wild. New code should use the `@livepeer/*` package names.
8. **Cross-links.** `build/application/frontend-react-player.mdx`, `build/application/frontend-react-broadcast.mdx`, `build/application/frontend-core-web.mdx`.

### Frontmatter

```yaml
---
title: "ui-kit reference"
sidebarTitle: "ui-kit"
description: "@livepeer/react, @livepeer/core-web, @livepeer/core, @livepeer/core-react. The full ui-kit family reference. (Historical name: livepeer.js.)"
pageType: "reference"
---
```

### Information to convey

- Four packages in the ui-kit family.
- All in one repo: `livepeer/ui-kit`.
- `livepeer.js` is the historical name for the same repo (verified).
- Per-package reference tables.

### Information to exclude

- Build patterns (lives in `build/application/frontend-*.mdx`).
- Studio playback URL helpers (cross-link only).

### Components

- Per-package reference table.
- `<Note>` for the `livepeer.js` historical name.

### Sources to consult

- `livepeer/ui-kit` monorepo READMEs.
- `persona-routing-and-infra-map.md` Verification log Item 2 (`livepeer.js` and `livepeer/ui-kit` are the same repo).

---

## 62. `/v2/developers/reference/byoc-sdk.mdx` — NEW

### Lighter format

**Audience.** Persona 2 — AI Developer using the `@muxionlabs/byoc-sdk` browser WebRTC client.

**Journey position.** From `build/ai/byoc.mdx` after architecture is understood; from `build/ai/byoc-quickstart.mdx` for the in-browser path; out to muxionlabs/byoc-example-apps.

**Activation moment.** Reader has the full `@muxionlabs/byoc-sdk` API reference and can integrate browser-side BYOC with their FrameProcessor backend.

**Frontmatter.**

```yaml
---
title: "@muxionlabs/byoc-sdk reference"
sidebarTitle: "byoc-sdk"
description: "Browser WebRTC client for BYOC pipelines. Full API reference: connection, params, status, stop."
pageType: "reference"
---
```

**Information to convey.**

- `npm install @muxionlabs/byoc-sdk`.
- Client API: connect, send params, get status, stop.
- WebRTC integration shape.
- Cross-link to `muxionlabs/byoc-example-apps` for usage patterns.
- Repo: `muxionlabs/byoc-sdk`.

**Information to exclude.**

- BYOC architecture (lives in `build/ai/byoc.mdx`).
- pytrickle backend (lives in `build/ai/pytrickle.mdx` and reference).
- Trickle protocol (lives in `build/ai/trickle-protocol.mdx`).

**Sources to consult.**

- `muxionlabs/byoc-sdk` README + source.
- `muxionlabs/byoc-example-apps` for canonical usage.

---

## 63. `/v2/developers/reference/livepeer-python-gateway.mdx` — NEW

### Lighter format

**Audience.** Persona 2 — AI Developer using `livepeer-python-gateway` to call the network from Python.

**Journey position.** From `build/ai/python-gateway-client.mdx`; out to the j0sh repo for examples and source.

**Activation moment.** Reader has the full client API reference, knows the workload support boundaries (LV2V full, BYOC full, batch AI partial, video transcoding excluded by design), and can write production Python.

**Frontmatter.**

```yaml
---
title: "livepeer-python-gateway reference"
sidebarTitle: "livepeer-python-gateway"
description: "Reference Python gateway client: ticket signing via remote signer, LV2V and BYOC support. Full API reference."
pageType: "reference"
---
```

**Information to convey.**

- `pip install git+https://github.com/j0sh/livepeer-python-gateway.git`.
- GatewayClient class API.
- Ticket signing flow.
- Workload support matrix: LV2V (full), BYOC (full), batch AI (partial), video transcoding (excluded by design — verified).
- Examples directory in repo.
- Repo: `github.com/j0sh/livepeer-python-gateway`.
- Cross-link to `signer.eliteencoder.net` as the verified free community remote signer.

**Information to exclude.**

- Remote signer protocol depth (Gateways tab).
- BYOC architecture (`build/ai/byoc.mdx`).
- Trickle protocol (`build/ai/trickle-protocol.mdx`).

**Sources to consult.**

- `github.com/j0sh/livepeer-python-gateway` README + examples.
- `/v2/gateways/guides/deployment-details/setup-options.mdx` (verified workload support table).
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified embedded gateway pattern).

---

## 64. `/v2/developers/reference/go-livepeer-http.mdx` — NEW

### Lighter format

**Audience.** Persona 6 — Protocol Extender; Persona 5 — App Dev running a self-hosted gateway who needs the gateway HTTP surface (control plane).

**Journey position.** From `build/application/local-gateway.mdx`; from `concepts/stack-layers.mdx`; out to go-livepeer source for canonical reference.

**Activation moment.** Reader has the gateway HTTP API surface (control endpoints, health, metrics) and can integrate the gateway into a higher-level service.

**Frontmatter.**

```yaml
---
title: "go-livepeer HTTP reference"
sidebarTitle: "go-livepeer HTTP"
description: "Gateway HTTP API: control plane, health, metrics. For developers running self-hosted go-livepeer."
pageType: "reference"
---
```

**Information to convey.**

- Gateway HTTP control plane endpoints.
- `/health` endpoint.
- `/metrics` (Prometheus) endpoint shape.
- AI Gateway endpoints (cross-link to `ai-gateway-api.mdx`).
- Video gateway endpoints (transcode, ingest, playback).
- Cross-link to go-livepeer repo.

**Information to exclude.**

- Operator-grade configuration (Gateways tab).
- AI Gateway endpoint depth (lives in `ai-gateway-api.mdx`).
- Orchestrator-side surface (Orchestrators tab).

**Sources to consult.**

- `livepeer/go-livepeer` source (cmd/livepeer/starter/starter.go and HTTP handlers).
- `/v2/gateways/guides/deployment-details/setup-options.mdx`.

---

## End of Batch 8

Twelve pages briefed. Reference fully scoped:

- **Retained-rename (4)**: `apis`, `pricing-rate-limits`, `sdks`, `pytrickle-reference`.
- **NEW (8)**: `ai-gateway-api`, `livepeer-ai-js`, `livepeer-ai-python`, `livepeer-ai-go`,
  `ui-kit`, `byoc-sdk`, `livepeer-python-gateway`, `go-livepeer-http`.

Pages remaining: 5.

Next and final batch (9): Routing — 5 pages. All NEW link-out style.
