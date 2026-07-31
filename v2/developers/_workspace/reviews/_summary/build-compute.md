# Section summary: build/compute — A6 (BYOC subgroup)

**Pages in scope**: 6 (all CONTENT — no EMPTY-STUBS in this slate)
**Pages reviewed**: 6
**Review date**: 2026-05-11
**Reviewer**: agent A6

## CRITICAL IA gap (top-of-file flag)

**`v2/developers/build/compute/overview.mdx` is MISSING on disk** — referenced in `notes.mdx` line 89 (per brief) but not present. The `build/compute/` directory contains only the `byoc/` child folder; there is no section root.

**Severity: HIGH** (per brief).

**Consequences:**
- Parent overview missing breaks subgroup navigation and orient flow.
- BYOC overview (`byoc/overview.mdx`) acts as the de-facto section landing without a parent. Persona-3 readers landing on `/build/compute/` get either a 404 or an implicit redirect to the BYOC child — neither communicates "this is what compute means on Livepeer".
- The 6 BYOC pages all FAIL check 7.2 (docs.json mirrors filesystem) and 4.3 (PREV/NEXT adjacency) on the orient-up edge.
- The "compute" subgroup currently has zero content for non-BYOC compute primitives (native ai-runner pipelines as compute, BYOC as compute, transcoding-as-compute — all collapsed inside BYOC).

**Remediation:** Create `v2/developers/build/compute/overview.mdx` as a `pageType: concept` page (`pageVariant: overview`) framing compute on Livepeer: native ai-runner pipelines, BYOC, video transcoding-as-compute. Position BYOC as one of the compute primitives, not the only one. Link from this new root to `ai-and-agents/ai-pipelines.mdx` (native compute), `compute/byoc/overview.mdx` (custom compute), and the relevant video transcoding page.

## Verdict distribution

- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 6
- NEEDS WORK: 0
- EMPTY-STUB: 0

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `byoc/overview.mdx` | MAJOR | 1/9/6/2 | IA-DRIFT (parent missing); `pageType: overview` non-canonical (1.2 + 5.7); 4 required frontmatter fields missing; `<CustomDivider />` used but NOT imported (render risk); CardGroup not Columns; no cross-tab links; trade-offs absent despite brief explicit |
| `byoc/byoc-quickstart.mdx` | MAJOR | 0/11/6/2 | Raw `<Steps>` × 4 instead of `<StyledSteps>` (5.21); 14+ code blocks missing icon+title (5.20); 5 Accordions missing icon (5.19); no Verification H2 (5.2); Related Pages double-up + CardGroup not Columns; `veracityStatus: verified` overstated (PyTrickle HEAD install); line 42 duplicate-href bug |
| `byoc/byoc-architecture.mdx` | MAJOR | 0/10/5/2 | NO Related Pages footer at all (5.16 + 5.17); three-layer architecture is ASCII not Mermaid (5.27) — Persona-3 architecture page without diagram; page 3.9 KB below ≥5 KB substantive (4.12); 4 frontmatter fields missing; terminology collision ("Bring Your Own Container" vs sibling pages' "Bring Your Own Compute") |
| `byoc/byoc-production.mdx` | MAJOR | 0/9/5/2 | No Related Pages footer; 3.6 KB below substantive threshold; missing 6 critical production topics (registry, logging, autoscaling, restart, security, pricing); hedging in value claims at lines 34, 76; unsourced operational claims (SIGTERM default, maxSessions, metric names) |
| `byoc/byoc-sdk.mdx` | MAJOR | 0/11/4/2 | Reference page for a CLI SDK with ZERO CLI commands shown (10.1, 10.5, 4.11, 4.20 all fail same root cause); 2.9 KB below substantive; `<Note>` carries primary governance content (third-party maintenance) — should be top-of-body `<Warning>`; line 62 "Check the repository" is open-ended-research (6.9 FAIL) |
| `byoc/reference-pipelines.mdx` | MAJOR | 0/9/5/2 | No per-pipeline runnability path (no `model_id`, no Docker image, no workflow JSON, no upstream papers); no Related Pages footer; "Building a custom pipeline" numbered list not `<StyledSteps>` (5.21); pipeline catalogue duplicates VRAM data across 3+ other pages |

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 1 (IA-DRIFT, surfaced on overview.mdx; section-level) |
| HIGH | 59 |
| MEDIUM | 31 |
| INFO | 12 |

## Top issues by frequency in this section

1. **No or wrong Related Pages footer** (6/6 pages) — check 5.16 + 5.17 + 5.22. `byoc/overview.mdx` and `byoc/byoc-quickstart.mdx` use `<CardGroup cols={2}>` instead of `<Columns cols={2}>` + `<CustomCardTitle>`, plus both have a closing in-prose pointer (5.16 forbids dual). `byoc/byoc-architecture.mdx`, `byoc/byoc-production.mdx`, `byoc/byoc-sdk.mdx`, `byoc/reference-pipelines.mdx` have NO Related Pages section at all — just a closing prose pointer.

2. **Missing required frontmatter fields** (5/6 pages) — check 1.1 + 1.4 + 1.6 + 1.7 + 1.8. Only `byoc-quickstart.mdx` has the full set. `byoc/overview.mdx`, `byoc-architecture.mdx`, `byoc-production.mdx`, `byoc-sdk.mdx`, `reference-pipelines.mdx` all missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. The overview page additionally has non-canonical `pageType: overview` (5.7 says deprecated). All 6 pages carry the legacy `status: current` field.

3. **Trade-offs absent** (6/6 pages) — check 4.15. Brief specifies container size / cold start / debugging cost as the BYOC trade-offs (per `_workspace/audit-2026-05-12/task-3-rewrite-scope.md`). None of the 6 BYOC pages names all three. `byoc-quickstart.mdx` names one trade-off (off-chain vs on-chain). `byoc-production.mdx` covers GPU OOM and SIGTERM timeout but not the brief three. `byoc-sdk.mdx` and `reference-pipelines.mdx` name no trade-offs.

4. **Zero cross-tab graduation links** (6/6 pages) — check 4.10 + 7.6. No page links to Gateways, Solutions, Orchestrators, or About tabs. All cross-page navigation stays inside `developers/`. BYOC is Persona-3 — the densest persona path — and graduation to Orchestrators (where the BYOC operator side lives) and Gateways (the routing side) is the most relevant cross-tab handoff. Currently absent everywhere.

5. **Code blocks missing `icon` + `title`** (4/6 pages with code) — check 5.20. `byoc-quickstart.mdx` has 14+ blocks missing both. `byoc-architecture.mdx` 2 blocks missing both. `byoc-production.mdx` 2 blocks missing both. `byoc/overview.mdx` 1 block missing both. `byoc-sdk.mdx` and `reference-pipelines.mdx` have NO code blocks at all — which is itself a finding for a CLI SDK reference and a pipeline catalogue.

6. **No Mermaid where one is required** (3/6 pages) — check 5.27. `byoc/overview.mdx` (routing flow currently absent), `byoc-architecture.mdx` (three-layer ASCII at lines 40-53), `byoc-quickstart.mdx` (Job Lifecycle ASCII at 327-337). Persona-3 architecture without a real diagram fails the densest path's most important visual aid.

7. **`<CustomDivider />` placement violations** (5/6 pages) — check 5.26. Placement between intro paragraph and first H2 violates "NO divider between intro and first H2" rule on `byoc/overview.mdx` (line 42), `byoc-architecture.mdx` (line 36), `byoc-production.mdx` (line 36), `byoc-sdk.mdx` (line 39), `reference-pipelines.mdx` (line 36). Only `byoc-quickstart.mdx` gets this right.

8. **Versions unpinned / source staleness** (6/6 pages) — check 2.D3 + 6.8. No version pin for go-livepeer, PyTrickle, ai-runner, ComfyStream, MuxionLabs SDK on any page. `byoc-quickstart.mdx` ships `git+https://github.com/livepeer/pytrickle.git` HEAD install (line 136). `byoc-sdk.mdx` line 62 explicitly defers version research to the repo README (6.9 FAIL). `byoc-quickstart.mdx` claims `veracityStatus: verified` while shipping unpinned commands.

9. **Page-size below substantive threshold** (3/6 pages) — check 4.12 + 7.10. `byoc-architecture.mdx` 3.9 KB, `byoc-production.mdx` 3.6 KB, `byoc-sdk.mdx` 2.9 KB. Concept/guide/reference substantive threshold is ≥5 KB. All three pages have material gaps that, if filled (trade-offs, Mermaid, Related Pages, per-pipeline detail, install commands), would push them over the threshold naturally.

10. **Terminology lock failure (BYOC expansion)** (3/6 pages) — check 2.11 + 2.22. `byoc/overview.mdx` line 4, 38: "Bring Your Own Compute". `byoc-quickstart.mdx` line 40: "Bring Your Own Container". `byoc-architecture.mdx` line 34: "Bring Your Own Container". `byoc-production.mdx` / `byoc-sdk.mdx` / `reference-pipelines.mdx`: no expansion used (defer to siblings — acceptable). Lock one expansion across the whole subgroup.

11. **Raw markdown tables instead of `<StyledTable>` or `<ParamField>`** (4/6 pages) — check 5.23. `byoc/overview.mdx` (2 raw tables at lines 72-77 and 108-114; 1 styled correctly), `byoc-architecture.mdx` (1 raw at 78-85), `byoc-production.mdx` (1 raw at 92-97), `byoc-sdk.mdx` (1 raw at 54-59). `reference-pipelines.mdx` uses `<StyledTable>` correctly ✓. `byoc-quickstart.mdx` has 1 raw markdown flags table at 233-237.

12. **`<Steps>` raw instead of `<StyledSteps>`** (2/6 pages) — check 5.21. `byoc-quickstart.mdx` uses raw `<Steps>` × 4 (lines 67, 164, 207, 262). `reference-pipelines.mdx` uses raw markdown numbered list (118-121) where `<StyledSteps>` is required for procedural content.

13. **Upstream repo links missing at first mention** (6/6 pages) — check 6.10. Pages where named upstream repos are not linked as prose anchors:
    - `livepeer/ai-runner` — `byoc/overview.mdx` line 38 (no link), `byoc-architecture.mdx` line 34 (no link).
    - `livepeer/pytrickle` — `byoc-quickstart.mdx` line 65 + 136 (only inside install URL, not prose), `byoc-architecture.mdx` line 57 (no link), `byoc-sdk.mdx` line 45 (no link).
    - `livepeer/go-livepeer` — never linked from any BYOC page despite `aiModels.json` schema and CLI flags being defined there.
    - `muxionlabs/byoc-sdk`, `muxionlabs/byoc-example-apps`, `muxionlabs/runner-router`, `muxionlabs/StreamDiffusionV2` — only `byoc-sdk.mdx` lists these; `byoc-architecture.mdx`, `byoc-production.mdx`, `reference-pipelines.mdx` do not propagate the references.
    - `muxionlabs/livepeer-app-pipelines` (brief-named) — absent from every page.
    - `livepeer/scope-runner` (brief-named) — absent from every page.

14. **AI Service Registry contract / Arbiscan link missing** (2/6 pages that name it) — check 6.1 + 6.10. `byoc/overview.mdx` line 38, 122 and `byoc-architecture.mdx` line 87 both name "AI Service Registry on-chain" / "Arbitrum One" without a contract address or Arbiscan link.

15. **`<Note>` carrying primary content** (2/6 pages) — check 2.D7. `byoc-quickstart.mdx` line 57 (`<Note>` carries prerequisite content). `byoc-sdk.mdx` lines 61-63 (`<Note>` carries the page's only governance claim — third-party maintenance + compatibility unknown — should be top-of-body `<Warning>`).

16. **BYOC PR #3641 (per-second compute) not cited anywhere** (6/6 pages) — check 6.8 + brief. Phase-4 per-second compute is the load-bearing recent change for BYOC pricing. Brief explicitly names this PR. None of the 6 pages references it.

17. **Open-ended research deferral** (1/6 pages) — check 6.9. `byoc-sdk.mdx` line 62: "Check the repository for current version and compatibility with your go-livepeer version" — explicit "needs more research" baked into the page.

## Cross-page duplication and link gaps in this section

- **HTTP Contract endpoints** duplicated 3 ways: `byoc/overview.mdx` lines 48-77 (combined StyledTable + markdown table) + `byoc-architecture.mdx` Health check section lines 91-101 + `byoc-production.mdx` Health check under load lines 80-84. Three pages, three lenses; could be consolidated to one canonical contract on `overview.mdx`.
- **`aiModels.json` example** duplicated: `byoc/overview.mdx` lines 87-104 (5-field example) vs `byoc-architecture.mdx` lines 67-76 (different 6-field example) — different shapes for the same file. Should pull from one shared snippet.
- **Three-layer / Job Lifecycle ASCII diagram** duplicated: `byoc-architecture.mdx` lines 40-53 (stack tree) + `byoc-quickstart.mdx` lines 327-337 (temporal flow). Both ASCII, both should be one Mermaid living on `byoc-architecture.mdx`.
- **Pipeline VRAM/FPS data** duplicated: `reference-pipelines.mdx` table 41-107 + `realtime-ai/comfystream/overview.mdx` hardware-requirements + section-1 review found it on `model-support.mdx` + `comfystream-quickstart.mdx` too. Four surfaces for the same VRAM data.
- **Repo references** duplicated: `byoc-sdk.mdx` table 54-59 lists muxionlabs repos; `byoc-quickstart.mdx` Next Steps card 390 also points to the same SDKs route; `reference-pipelines.mdx` does not propagate `muxionlabs/StreamDiffusionV2` from the sibling page.
- **FrameProcessor class skeleton** (from section-1 review): duplicated 4× in `ai-and-agents/overview.mdx` + `pytrickle/overview.mdx` + `pytrickle/frame-processor.mdx` + `pytrickle/pytrickle-quickstart.mdx`. `byoc-quickstart.mdx` adds a 5th surface at lines 78-119. Canonical home should be `pytrickle/frame-processor.mdx`.

## IA-gap and link gaps specific to this section

- **CRITICAL — IA-DRIFT**: `v2/developers/build/compute/overview.mdx` missing on disk. Subgroup root empty. Persona-3 orient-up broken across all 6 BYOC pages.
- **No cross-tab graduation paths** across all 6 pages — see issue #4 above.
- **AI Service Registry contract** never linked, despite being named on 2 pages and being the on-chain mechanism BYOC depends on.
- **BYOC PR #3641** never referenced — Phase-4 per-second compute is the recent breaking change for `price_per_unit` semantics.
- **`tools.livepeer.cloud/ai/network-capabilities`** referenced on `byoc/overview.mdx` line 126 as plain text — should be anchor link; should also be propagated to `reference-pipelines.mdx` (where catalogue availability matters).
- **`muxionlabs/livepeer-app-pipelines`** (brief-named) — absent from every page despite being the canonical source repo for the reference pipelines catalogue.
- **`livepeer/scope-runner`** (brief-named) — absent from every page.
- **byoc-quickstart.mdx line 42 duplicate-href bug**: two LinkArrows both point to `transcoding-direct-quickstart`. Second should likely point to `/v2/developers/build/compute/byoc/byoc-sdk`.

## Special-focus brief checks (results)

- **4.15 Trade-offs named (container size / cold start / debugging cost)**: 0/6 PASS. None of the 6 pages names all three. `byoc-production.mdx` is closest (covers GPU OOM and SIGTERM timeout but not these three). Section-wide remediation: add a §"Trade-offs" `<AccordionGroup>` on `byoc/overview.mdx` (the orient page) covering all three, then surface a one-line summary on quickstart / architecture / production as appropriate.
- **5.20 Code blocks (Docker/Python heavy — icon+title violations expected)**: confirmed. 19+ code blocks across the section missing both `icon` and `title`. `byoc-quickstart.mdx` alone has 14+ missing. `byoc-sdk.mdx` and `reference-pipelines.mdx` have NO code blocks at all (separate finding for those two — see issue #5).
- **5.21 StyledSteps (procedural — likely raw Steps)**: confirmed. `byoc-quickstart.mdx` raw `<Steps>` × 4. `reference-pipelines.mdx` raw markdown numbered list. The other 4 pages are not procedural and use no Steps.
- **4.5 Prerequisites (Docker, GPU/CUDA, Python version)**: `byoc-quickstart.mdx` has "Required Tools" (should be renamed "Prerequisites" per tutorial matrix), covers Docker 24+ / Python 3.10+ ✓ but doesn't surface GPU/CUDA as conditional (page is CPU-only; GPU mentioned inline at line 145). `byoc-production.mdx` has no Prerequisites section. Other pages are concept/reference — N/A.
- **6.3 No deprecated API usage / version-pin all examples**: 0/6 PASS on version pinning. PyTrickle HEAD, ComfyStream unpinned, ai-runner unpinned, MuxionLabs SDK unpinned.
- **2.D3 Versions stated explicitly (BYOC PR #3641 for per-second compute)**: 0/6 PASS. PR #3641 cited nowhere. Per-second compute referenced on `byoc-quickstart.mdx` line 349 (link only to the developer doc, not to the upstream PR).
- **6.2 Code TESTED/NOT-TESTED labelled**: 0/6 PASS. Zero TESTED labels across the section. `byoc-quickstart.mdx` claims `veracityStatus: verified` while shipping unpinned + unlabelled code.
- **Upstream repo links** (muxionlabs/byoc-sdk, muxionlabs/livepeer-app-pipelines, byoc-example-apps, livepeer/scope-runner): muxionlabs/byoc-sdk linked correctly on `byoc-sdk.mdx`. byoc-example-apps linked on `byoc-sdk.mdx` only. runner-router linked on `byoc-sdk.mdx` only. StreamDiffusionV2 linked on `byoc-sdk.mdx` only (should propagate to `reference-pipelines.mdx`). livepeer-app-pipelines absent everywhere. scope-runner absent everywhere.
- **2.12 em-dashes**: zero across all 6 pages. PASS.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

Persona 3 (Compute Primitives) — the densest persona path per brief — has three real outcomes to deliver across this subgroup:

1. **Orient** ("what is compute on Livepeer; should I use BYOC or native ai-runner?") — currently delivered by `byoc/overview.mdx` only. Missing parent `compute/overview.mdx` means the orient step is fragmentary; no decision frame BYOC vs native exists.
2. **Activate** ("run my first BYOC job in 25 minutes") — delivered by `byoc-quickstart.mdx`. Activation moment is there but no `## Verification` H2, no above-the-fold copyable command, alpha-stage `veracityStatus: verified` claim is overstated.
3. **Productionise** ("ship this to mainnet") — partially delivered by `byoc-production.mdx`. Production page misses 6 critical topics (registry, logging, autoscaling, restart, security, pricing) and is 3.6 KB.

**Section-level fix:**
- Create `compute/overview.mdx` framing the orient layer with a BYOC-vs-native decision matrix.
- Move the trade-offs (container size / cold start / debugging cost) onto `byoc/overview.mdx` as §"Trade-offs" Accordion — orient-page is where reader decides to commit, not quickstart.
- Add `## Verification` to `byoc-quickstart.mdx`; move above-the-fold command; demote `veracityStatus`.
- Expand `byoc-production.mdx` with the 6 missing topics; convert to a 10-item Production Readiness checklist as the top section.

### Layer 2 — Composition (section level)

Same systemic violations as the AI-and-agents section (per Round 1 summary):

- `<CardGroup>` everywhere instead of `<Columns cols={2}>` + `<CustomCardTitle>` (2/6 pages); the other 4 pages have NO Related Pages section at all.
- Code blocks missing `icon` + `title` on 4/6 pages with code.
- 4/6 pages have raw markdown tables.
- 3/6 pages have ASCII or no diagrams where Mermaid is required (BYOC overview, architecture, quickstart).
- 5/6 pages place a `<CustomDivider />` between intro and first H2 (violates 5.26).
- 2/6 pages have raw `<Steps>` or markdown numbered lists instead of `<StyledSteps>`.
- 2/6 pages have `<Note>` carrying primary content (quickstart prerequisite, SDK governance).

**Section-level fix:** A single propagation pass mirroring the AI-and-agents pass:
- Convert every `<CardGroup>` → `<Columns cols={2}>` + `<CustomCardTitle>`; add Related Pages to the 4 pages that lack it.
- Add `icon` + `title` defaults to every code block; promote `text` lang tag on output samples.
- Convert all raw markdown tables to `<StyledTable>`.
- Convert ASCII diagrams to Mermaid using `MermaidColours.jsx` — one canonical sequenceDiagram on `byoc-architecture.mdx` that quickstart can reference.
- Remove the divider between intro and first H2 on the 5 pages where it appears.
- Convert raw `<Steps>` on `byoc-quickstart.mdx` (4 blocks) and the markdown list on `reference-pipelines.mdx` to `<StyledSteps>`.
- Demote `<Note>` carrying primary content on `byoc-quickstart.mdx` line 57 and `byoc-sdk.mdx` lines 61-63.

### Layer 3 — Cross-page integration (section level)

The BYOC subgroup is internally dense but has zero cross-tab footprint:

- Every Related Pages card / pointer links inside `developers/build/compute/byoc/` or to `developers/build/ai-and-agents/`.
- No page links to `/v2/orchestrators/setup/capabilities` (operator side — where BYOC capability advertisement actually happens).
- No page links to `/v2/gateways/setup/connect` (routing side — how gateways resolve BYOC capabilities).
- No page links to `/v2/about/network/architecture` or `/v2/solutions/`.
- BYOC PR #3641 / Phase-4 per-second compute (brief-explicit) is referenced nowhere.
- AI Service Registry contract on Arbitrum One is named twice but never linked to Arbiscan.
- 4 of the brief-named repos (`muxionlabs/livepeer-app-pipelines`, `livepeer/scope-runner`, `muxionlabs/byoc-example-apps`, `muxionlabs/StreamDiffusionV2`) are linked on at most 1 page each, not propagated.

**Section-level fix:**
- Every Related Pages footer (once it exists / is reformatted) should carry at least 1 of 4 cards as a cross-tab link. A canonical 4-card pattern for BYOC: 2 sibling pages + 1 graduation card (`/v2/orchestrators/setup/capabilities` for byoc-production / byoc-architecture; `/v2/gateways/setup/connect` for byoc/overview) + 1 cost card (`/v2/developers/guides/payments/per-second-compute`).
- Add a single canonical citation of BYOC PR #3641 on `byoc/overview.mdx` §"Payment Flow" and propagate as `{/* REVIEW: confirm PR */}` placeholders on quickstart / architecture / production.
- Anchor `tools.livepeer.cloud/ai/network-capabilities` as a real link on `byoc/overview.mdx` line 126 and propagate to `reference-pipelines.mdx` intro.
- Add Arbiscan link for the AI Service Registry contract on both `byoc/overview.mdx` and `byoc-architecture.mdx`.

### Layer 4 — Veracity (section level)

Three veracity gaps repeat across the subgroup:

- **Unpinned installs / versions everywhere.** PyTrickle HEAD on quickstart. ai-runner / go-livepeer / ComfyStream unpinned across all pages. MuxionLabs SDK version explicitly deferred to repo README (`byoc-sdk.mdx` line 62 — open-ended-research FAIL).
- **`aiModels.json` schema is the source of truth** for BYOC registration. Two pages show example payloads with different fields each. Neither links to the canonical schema in `livepeer/go-livepeer`.
- **`veracityStatus: verified` overstated on quickstart.** Only `byoc-quickstart.mdx` carries `veracityStatus` at all, and it claims `verified` while shipping HEAD installs and zero TESTED labels.

**Section-level fix:**
- (1) Add `veracityStatus: unverified` to the 5 pages missing it. Demote quickstart to `unverified` until installs pinned + TESTED labels added.
- (2) Pin every install command with a tag + `{/* REVIEW: confirm latest tag */}` placeholder.
- (3) Extract `aiModels.json` to a shared snippet `snippets/data/byoc/aiModels-example.json` and import on both pages that show it; add inline link to the canonical schema in `livepeer/go-livepeer`.
- (4) Add date + go-livepeer version + PyTrickle version to a `TESTED:` JSX comment above every code block in the section.

### Layer 5 — Product-forward depth (section level)

The subgroup reads as a contract reference (here is the HTTP contract; here is FrameProcessor; here are the production concerns), not a product evaluation. A senior engineer arriving at `byoc/overview.mdx` asks:

- Is BYOC the right path for me, or should I extend native ai-runner / contribute upstream? (No decision frame.)
- What's BYOC's maturity? Mainnet-stable? Recent breaking changes? (No Badge. PR #3641 uncited.)
- What does it cost in practice? (No worked-example math.)
- What's the failure model — what should I expect to break? (Trade-offs absent.)
- Who else runs BYOC in production? (Daydream / Embody / Streamplace named on Round-1 AI-and-agents pages but not propagated here.)
- Is there an ecosystem of tooling, or am I on my own? (MuxionLabs tooling exists on `byoc-sdk.mdx` but maturity/governance signal buried in a `<Note>`.)

**Section-level fix:**
- Add `<Badge>Phase 4 — mainnet — per-second compute</Badge>` near the top of `byoc/overview.mdx`, `byoc-quickstart.mdx`, `byoc-architecture.mdx`, `byoc-production.mdx`. `byoc-sdk.mdx` gets `<Badge>Third-party — beta</Badge>`. `reference-pipelines.mdx` gets per-pipeline maturity badges in a new table column.
- Add §"Trade-offs" `<AccordionGroup>` to `byoc/overview.mdx` with three accordions: container size & cold start, debugging cost, GPU resource competition. Surface a one-line summary on quickstart §"Before mainnet" and on production §"Failure modes".
- Add §"Costs" worked example on `byoc/overview.mdx` and `byoc-production.mdx`: FPS × GPU-second × `price_per_unit` math.
- Add §"Reference apps" linking Daydream / Embody / Streamplace from `reference-pipelines.mdx` and `byoc/overview.mdx`.
- Add §"Decision: BYOC vs native ai-runner vs by-hand-vs-SDK" on the new `compute/overview.mdx` root.

## Prioritised section remediation

| # | Step | Pages affected | Effort |
|---|---|---|---|
| 1 | **CRITICAL — IA repair**: create `v2/developers/build/compute/overview.mdx` as the section root. `pageType: concept`, `pageVariant: overview`, audience `developer`, purpose `orient`. Frame compute = native ai-runner + BYOC + transcoding-as-compute. Include BYOC-vs-native decision matrix | new file + IA propagation | L |
| 2 | Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to 5 pages missing them; remove legacy `status: current` from all 6 pages; correct non-canonical `pageType: overview` on `byoc/overview.mdx` → `concept` | 6 | M |
| 3 | Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>` to all 6 pages; for the 2 with existing `<CardGroup>`, convert format and delete dual closing prose pointer (5.16) | 6 | L |
| 4 | Add ≥1 cross-tab graduation card to every Related Pages section: candidates are `/v2/orchestrators/setup/capabilities`, `/v2/gateways/setup/connect`, `/v2/developers/guides/payments/per-second-compute`, `/v2/about/network/architecture` | 6 | M |
| 5 | Add `icon` + `title` to every fenced code block across the section (~19 blocks total); use `icon="terminal"` for shell, `icon="code"` for python/json, `icon="docker"` for dockerfile | 4 (5 if SDK gains code) | L |
| 6 | Add §"Trade-offs" `<AccordionGroup>` on `byoc/overview.mdx`: container size & cold start, debugging cost, GPU resource competition. Surface one-line summaries on quickstart / production | 3 (overview + quickstart + production) | M |
| 7 | Convert raw `<Steps>` × 4 on `byoc-quickstart.mdx` to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; convert numbered markdown list on `reference-pipelines.mdx` to `<StyledSteps>` | 2 | M |
| 8 | Convert raw markdown tables to `<StyledTable>`: 2 on `byoc/overview.mdx`, 1 on `byoc-architecture.mdx`, 1 on `byoc-production.mdx`, 1 on `byoc-sdk.mdx`, 1 on `byoc-quickstart.mdx` | 5 | M |
| 9 | Convert ASCII diagrams to Mermaid using `MermaidColours.jsx`: `byoc-architecture.mdx` lines 40-53 (canonical sequenceDiagram), `byoc-quickstart.mdx` lines 327-337 (delete and reference architecture page), `byoc/overview.mdx` (add routing-flow Mermaid after intro) | 3 | L |
| 10 | Remove `<CustomDivider />` between intro and first H2 on 5 pages (violates 5.26) | 5 | S |
| 11 | Lock BYOC expansion: pick "Bring Your Own Container" OR "Bring Your Own Compute"; propagate across `byoc/overview.mdx`, `byoc-quickstart.mdx`, `byoc-architecture.mdx`. (Recommend "Bring Your Own Container" — matches `byoc-quickstart.mdx`, matches sister sections' terseness) | 3 | S |
| 12 | Pin every install command with a tag + `{/* REVIEW: confirm latest tag */}` placeholder. PyTrickle HEAD on `byoc-quickstart.mdx` line 136 is the most urgent | 4 (quickstart + arch + production + sdk) | M |
| 13 | Add inline upstream-repo links at first mention on every page: `livepeer/ai-runner`, `livepeer/pytrickle`, `livepeer/go-livepeer`, `livepeer/scope-runner`, `muxionlabs/livepeer-app-pipelines`, `muxionlabs/byoc-sdk`, `muxionlabs/byoc-example-apps`, `muxionlabs/StreamDiffusionV2`, `muxionlabs/runner-router` | 6 | M |
| 14 | Cite BYOC PR #3641 (per-second compute) on `byoc/overview.mdx` §"Payment Flow"; surface placeholders on quickstart / architecture / production | 4 | S |
| 15 | Add AI Service Registry contract Arbiscan link on `byoc/overview.mdx` line 122 and `byoc-architecture.mdx` line 87; anchor `tools.livepeer.cloud/ai/network-capabilities` on `byoc/overview.mdx` line 126 and propagate to `reference-pipelines.mdx` | 3 | S |
| 16 | Add `## Verification` H2 to `byoc-quickstart.mdx` after Step 2 of "First Job"; move embedded verification content into it | 1 | M |
| 17 | Fix `byoc-quickstart.mdx` line 42 duplicate-href bug — second LinkArrow should target `byoc-sdk` | 1 | S |
| 18 | Demote `<Note>` carrying primary content: `byoc-quickstart.mdx` line 57 → Prerequisites bullet; `byoc-sdk.mdx` lines 61-63 → top-of-body `<Warning>` + `<Badge>Third-party — beta</Badge>` | 2 | S |
| 19 | Expand undersized pages to ≥5 KB substantive via Related Pages + Trade-offs + per-pipeline detail: `byoc-architecture.mdx` (3.9 KB), `byoc-production.mdx` (3.6 KB), `byoc-sdk.mdx` (2.9 KB) | 3 | L |
| 20 | Add §"Production readiness checklist" `<AccordionGroup>` (10 items) at top of `byoc-production.mdx`; add §"Pricing calibration" worked example; add §"Security boundaries" `<Warning>` | 1 | L |
| 21 | Add §"Install" + §"Commands" with `<ParamField>` / `<CodeGroup>` showing actual CLI invocations on `byoc-sdk.mdx`. Add §"Decision: SDK vs by-hand" frame | 1 | L |
| 22 | Add `<AccordionGroup>` per-pipeline detail on `reference-pipelines.mdx`: `model_id`, Docker image, workflow JSON, source paper/repo, warmness count, maturity Badge | 1 | L |
| 23 | Add `<Badge>` maturity signals on 5 pages: `Phase 4 — mainnet — per-second compute` on overview / quickstart / architecture / production; `Third-party — beta` on sdk; per-pipeline badges on reference-pipelines | 5 | M |
| 24 | Extract shared snippets: `aiModels.json` example, pipeline catalogue (VRAM/FPS), go-livepeer BYOC flags. Import where currently duplicated | 5 | M |
| 25 | Rewrite hedging value claims: `byoc-architecture.mdx` line 34 "lets you deploy"; `byoc-production.mdx` lines 34, 76 "may fail / may produce"; `byoc-quickstart.mdx` line 40 second-person opener | 3 | S |
| 26 | Add `pageVariant` to all 6 pages: `overview` for byoc/overview, `quickstart` for byoc-quickstart, `specification` for architecture / sdk, `compendium` for reference-pipelines, no variant or `compendium` for production | 6 | S |
| 27 | Drop generic `livepeer` keyword from frontmatter where present | 2 (byoc/overview, byoc-quickstart) | S |
| 28 | Label every code block TESTED with date + go-livepeer version + PyTrickle version OR explicit NOT-TESTED with reason | 4 | M |
