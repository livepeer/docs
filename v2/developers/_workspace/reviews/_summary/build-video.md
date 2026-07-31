# Section summary: build/video — A5

**Pages in scope**: 9 (7 content + 2 EMPTY-STUB)
**Pages reviewed**: 7 per-page reviews; 2 EMPTY-STUBs surfaced for content briefing (not reviewable until written)
**Review date**: 2026-05-17
**Reviewer**: agent A5

## Verdict distribution

- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 7
- NEEDS WORK: 0
- EMPTY-STUB: 2

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `build/video/overview.mdx` | MAJOR | 0/9/6/2 | Deprecated "broadcaster" used 7× (lines 6, 16, 39, 47, 87, 110, 144); non-canonical `pageType: overview`; 4 missing required frontmatter fields; Related Pages CardGroup not Columns; no Mermaid for ingest→transcode→playback flow |
| `build/video/transcoding-direct-quickstart.mdx` | MAJOR | 1/10/6/2 | **CRITICAL** — two empty `<LinkArrow href="" label="">` placeholders (lines 43, 356) — broken cross-tab graduation to Gateways tab. Raw `<Steps>` x3 not `<StyledSteps>`; all Tabs/Accordions/code blocks missing icon/title; 3 `<Note>` carry primary content; ASCII Job Lifecycle diagram instead of Mermaid |
| `build/video/ingest-and-playback.mdx` | MAJOR | 0/9/6/2 | Non-canonical `pageType: how_to`; deprecated "broadcaster" at line 103; webhook HMAC verification (decision-critical security) hidden in `<Note>`; JS+Python sequential not in Tabs; no Prerequisites; Related Pages CardGroup not Columns |
| `build/video/live-events.mdx` | MAJOR | 0/8/5/2 | Non-canonical `pageType: how_to`; JWT vs Webhook access-control variants sequential not in Tabs; all 9 code blocks missing icon/title; no Mermaid for multistream fan-out or JWT flow; production concerns absent |
| `build/video/vod-and-recording.mdx` | MAJOR | 0/7/6/2 | Non-canonical `pageType: how_to`; Upload via URL + Direct Upload paths sequential not in Tabs; no Mermaid for asset state machine (waiting→processing→ready/failed); 4 missing required frontmatter fields |
| `build/video/codec-support.mdx` | MAJOR | 0/7/5/2 | **No Related Pages footer at all** (5.16+5.17); 2 of 3 tables raw markdown; **zero citations** on codec/container claims (6.1, 6.10); page exceeds 1-2 table max; reference data hardcoded inline instead of imported |
| `build/video/lpms-integration.mdx` | MAJOR | 0/8/5/2 | Deprecated "broadcaster" 4× (lines 39, 168, 177, 180 — 2 inside Related Pages card descriptions); `<Note>` carries primary scoping content (LPMS vs go-livepeer); `git clone` HEAD unpinned; no LPMS/Go/FFmpeg/CUDA version pins |
| `build/video/storage-and-archival.mdx` | EMPTY-STUB | — | Body content = "This page is in progress." — not reviewable |
| `build/video/frameworks-network.mdx` | EMPTY-STUB | — | Body content = "This page is in progress." — not reviewable |

## EMPTY-STUB briefing

### `storage-and-archival.mdx` (590 bytes; 1 body sentence)
- **Current state:** Frontmatter present (correct canonical fields: `pageType: guide`, `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified`); body content is only "This page is in progress."
- **Target canonical source:** IPFS storage, Arweave storage, and any Livepeer-managed storage adapter. Cross-link `ipfs-video-integration.mdx` (`v2/developers/build/tutorials/ipfs-video-integration.mdx`) which already covers IPFS upload — this stub is the section overview that should orient the reader and route to the tutorial.
- **Coverage needed:** What does Livepeer mean by "archival" vs Livepeer-managed VOD assets vs user-managed IPFS/Arweave? Decision matrix for managed vs decentralised storage. Cost expectations (Livepeer-stored hours vs IPFS pin costs vs Arweave permanent storage). Asset retention guarantees. Recovery path if managed storage tier is decommissioned. Cross-link `vod-and-recording.mdx` for the upload path and `ipfs-video-integration.mdx` for the decentralised flow.
- **Upstream sources:** `livepeer/livepeer-js` asset storage docs; IPFS / Filecoin / Arweave network docs; any Livepeer asset retention policy doc.

### `frameworks-network.mdx` (590 bytes; 1 body sentence)
- **Current state:** Frontmatter present with the same defaults as `storage-and-archival.mdx`; body content is only "This page is in progress." Title is `Frameworks-network` (kebab-cased, awkward — should be `Frameworks.network` or `Frameworks Network`).
- **Target canonical source:** `frameworks.network` repository / product (referenced 5× in `v2/solutions/solution-providers.mdx` and `v2/solutions/portal.mdx`). frameworks.network is a Livepeer-ecosystem product that provides hosted ingest + transcoding tier (managed) and a deployable MistServer stack (self-host). App URL: `https://app.frameworks.network`; docs: `https://docs.frameworks.network`.
- **Coverage needed:** Position frameworks.network as the third option in the Access Paths matrix (alongside Livepeer SDK and go-livepeer Gateway): hosted ingest, MistServer compatibility, deployment model. Decision criteria — when to use frameworks.network vs Livepeer-managed SDK vs go-livepeer. Cross-link the existing Solutions entry (`v2/solutions/portal.mdx` line 147, `v2/solutions/solution-providers.mdx` line 110). The current overview.mdx Access Paths table is the natural place this page slots into.
- **Upstream sources:** `https://app.frameworks.network`, `https://docs.frameworks.network`, and any frameworks.network GitHub repo (search confirmed it's a downstream consumer of Livepeer, not part of `livepeer/*` GitHub org).
- **Title clarity action:** Rename `Frameworks-network` to `Frameworks Network` (display) with sidebarTitle `Frameworks`. File slug `frameworks-network.mdx` is fine as a URL.

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 1 |
| HIGH | 58 |
| MEDIUM | 39 |
| INFO | 14 |

## Top issues by frequency in this section

1. **Non-canonical `pageType` value** (5/7 pages) — `pageType: how_to` (live-events, ingest-and-playback, vod-and-recording) and `pageType: overview` (overview) — both not in rubric 1.2 canonical 7-type set. Required values: `concept | tutorial | guide | instruction | navigation | reference | resource`. Pages using `how_to` should become `guide`; `overview` should become `concept` + `pageVariant: overview`. `codec-support` and `lpms-integration` correctly use `reference`. `transcoding-direct-quickstart` correctly uses `tutorial`.

2. **Missing required frontmatter fields** (6/7 pages — all except `transcoding-direct-quickstart`) — `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` all absent. `transcoding-direct-quickstart` is the only complete one.

3. **Legacy `status: current` field present** (7/7 pages) — every content page retains the deprecated field per check 5.7.

4. **Related Pages format wrong** (6/7 pages; the 7th has no Related Pages at all) — `<CardGroup cols={2}>` instead of `<Columns cols={2}>` with `<CustomCardTitle>` per check 5.17 + 5.22. Pages: overview, transcoding-direct-quickstart, ingest-and-playback, live-events, vod-and-recording, lpms-integration. `codec-support` has no Related Pages footer (in-prose closing paragraph only — fails 5.16).

5. **Code blocks missing `icon` + `title`** (7/7 pages) — every fenced code block on every page lacks both attributes per check 5.20. Total: ~46 code blocks missing metadata across the section.

6. **Deprecated term "broadcaster" used in narrative** (4/7 pages, ~13 occurrences) — overview (7×), ingest-and-playback (2× at line 103), lpms-integration (4× at lines 39, 168, 177, 180). `transcoding-direct-quickstart` legitimately uses `-broadcaster` as a deprecated-flag pointer (line 91) — that's defensible. Section-wide find-replace needed.

7. **Zero cross-tab graduation links** (7/7 pages) — check 4.10 + 7.6. No links to Gateways, Solutions, or About tabs from any video page. All inter-page navigation stays inside `developers/build/video/`.

8. **`<Note>` carries primary content** (3/7 pages) — `transcoding-direct-quickstart` (3 Notes — flag rename, split topology, off-chain semantics); `ingest-and-playback` (1 Note — webhook HMAC verification, decision-critical security); `lpms-integration` (1 Note — LPMS vs go-livepeer scoping, decision-critical). Check 2.D7 forbids `<Note>` for primary content.

9. **No Prerequisites section** (5/7 pages with content needing prereqs) — ingest-and-playback, live-events, vod-and-recording, lpms-integration, codec-support (codec-support is reference — N/A). Tutorial matrix + check 4.5 require Prerequisites for instruction/tutorial/guide types.

10. **Multi-variant content sequential not in `<Tabs>`** (5/7 pages) — overview (JS/Python/Go SDK install), ingest-and-playback (JS+Python stream-create), live-events (JWT+Webhook access control), vod-and-recording (Upload-via-URL + Direct Upload), codec-support (Profile detail collapsible). Check 5.14 requires Tabs for parallel variants. `transcoding-direct-quickstart` uses Tabs correctly (Binary/Docker, Test-pattern/Sample-file) but all 4 Tabs miss `icon` (5.18).

11. **No Mermaid diagrams** (6/7 pages should have one) — overview (3-layer ingest/transcode/playback flow); transcoding-direct-quickstart (ASCII Job Lifecycle should be Mermaid); ingest-and-playback (stream lifecycle webhooks); live-events (multistream fan-out + JWT verification flow); vod-and-recording (asset 4-state machine); lpms-integration (architecture diagram). codec-support is reference — N/A. Check 5.27.

12. **Raw markdown tables instead of `<StyledTable>`** (4/7 pages) — overview correctly uses StyledTable; codec-support has 2 raw markdown tables (Container formats + Audio codecs) and 1 StyledTable (Video codecs) — inconsistent on the same page; transcoding-direct-quickstart has 2 raw flag tables inside Steps; ingest-and-playback has 2 raw tables (Profile fields, Stream Events); lpms-integration has 1 raw table (Default Endpoints).

13. **Unpinned installs / git clones / Docker images** (6/7 pages) — overview (SDK version 3.5.0 hardcoded, no Python pin), transcoding-direct-quickstart (Docker `:master`), ingest-and-playback (SDKs not pinned), live-events (SDKs not pinned), vod-and-recording (SDKs not pinned), lpms-integration (git clone HEAD). Check 2.D3 + 6.8.

14. **Upstream `livepeer/*` repo not linked at first mention** (7/7 pages) — overview (livepeer-js, livepeer-python, go-livepeer, lpms), transcoding-direct-quickstart (go-livepeer not linked in prose despite release URL appearing in code), ingest-and-playback (livepeer-js, livepeer-python, OpenAPI spec), live-events (livepeer-js, OpenAPI shape paths), vod-and-recording (livepeer-js, livepeer-react), codec-support (lpms, go-livepeer, FFmpeg, NVIDIA SDK), lpms-integration (lpms named "livepeer/lpms" but unlinked at first prose mention; core/lpms.go, cmd/transcoding/transcoding.go unlinked). Check 6.10 systemic FAIL.

15. **`pageVariant` absent** (7/7 pages) — none use the `pageVariant` enum that would tighten the schema (`quickstart` for transcoding-direct, `specification` for codec-support and lpms-integration, `overview` for overview). Check 1.3 INFO.

16. **First-use abbreviations not expanded** (5/7 pages) — RTMP, HLS, ABR, AAC, AVC, HEVC, HMAC-SHA256, NVENC, NVDEC, CUDA, JWT, MPEG-TS — many used without inline expansion. Check 2.21.

17. **One CRITICAL: empty `<LinkArrow href="" label="">` placeholders** — transcoding-direct-quickstart line 43 AND line 356 ship empty `href` and empty `label`. These render as invisible/dead links at the two most-trafficked production-graduation points on the page.

## Cross-page duplication and link gaps in this section

- **SDK init pattern** (`new Livepeer({ apiKey })`) duplicated across overview, ingest-and-playback, live-events, vod-and-recording (4 pages, ~6 instances). Canonical version should be a shared snippet (`snippets/data/sdks/livepeer-init.js` or composable component).
- **`client.stream.create` shape** duplicated across overview, ingest-and-playback, live-events (3 pages, ~6 instances on live-events alone). Canonical version belongs on ingest-and-playback; others should snippet-import or tease + link.
- **Asset `status.phase` lifecycle** (`waiting | processing | ready | failed`) referenced on vod-and-recording in body, also implicit in live-events Recording section — both pages handle the same `asset.updated` webhook flow independently.
- **Codec capability** referenced casually on overview, ingest-and-playback (transcoding profile fields), transcoding-direct-quickstart (default profile), lpms-integration (GPU transcoding) — codec-support.mdx is the canonical source but rarely cross-linked from these pages.
- **RTMP ingest URL `rtmp://rtmp.livepeer.com/live`** hardcoded across ingest-and-playback (lines 61, 91, 100). HLS playback host `livepeercdn.com` hardcoded on vod-and-recording (line 95) and ingest-and-playback (line 63). Should pull from a shared endpoints data module.
- **Section-wide upstream gap**: NO page links `livepeer/livepeer-js`, `livepeer/livepeer-python`, `livepeer/go-livepeer`, `livepeer/lpms` at first prose mention. Repos appear only inside `pip install`/`npm install`/`git clone` commands.

## Special-focus brief checks (results)

- **Persona-fit explicit on page** (A5 brief): `transcoding-direct-quickstart` is the ONLY page that names Persona 2 + Persona 4 explicitly (line 43). The other 6 pages never name persona-fit. Persona 2 (Video Platform) and Persona 4 (Live-Video-First) land on these pages from the developers portal — neither is signposted on overview, ingest-and-playback, live-events, vod-and-recording, codec-support, or lpms-integration.
- **Check 5.20 (code-block icon+title)**: SYSTEMIC FAIL — every code block on every content page is missing both `icon` and `title`. Total ~46 code blocks across the section. Identical to Round 1's findings on `build/ai-and-agents/`.
- **Check 5.16+5.17 (Related Pages `<Columns>` + `<CustomCardTitle>`)**: 6/7 pages use `<CardGroup>` + plain `<Card>`; 1 page (`codec-support`) has no Related Pages footer at all. Section-wide remediation needed.
- **Check 4.5 (Prerequisites)**: 5/7 pages missing a Prerequisites H2 despite content requiring one. `codec-support` is reference (N/A); `transcoding-direct-quickstart` has it but named "Required Tools" instead.
- **Upstream repo links verified**:
  - `go-livepeer` (broadcaster mode) → repo is `https://github.com/livepeer/go-livepeer`. Named in 4 pages, **linked in 0**.
  - `lpms` → repo is `https://github.com/livepeer/lpms`. Named in 3 pages, **linked in 0** prose (appears only in `git clone` command on lpms-integration).
  - `livepeer/catalyst` → not referenced on any page in this slate. Catalyst is referenced elsewhere in the docs (Solutions tab) but `build/video/` covers the protocol-side video stack, not the catalyst delivery layer. No gap to flag.
  - `frameworks.network` → external (not `livepeer/*` org); referenced from `v2/solutions/portal.mdx` and `solution-providers.mdx`. Sits behind the empty-stub `frameworks-network.mdx`. Confirmed scope for that stub.
- **Em-dashes (2.12)**: 0 across all 7 reviewed pages. PASS.
- **Studio refs**: 0 across all 7 reviewed pages. PASS (cleanest section signal in the slate).
- **Banned words / phrases**: 0 across all 7 reviewed pages. PASS.
- **Deprecated "broadcaster" usage**: 4 of 7 reviewed pages (~13 narrative occurrences). Highest concentration on overview (7×) and lpms-integration (4×). `transcoding-direct-quickstart` legitimately documents the `-broadcaster` flag rename — defensible.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

The section's promise is "build video on Livepeer". Across 7 content pages, three reader-outcome failures repeat:

- **Decision data absent.** Overview lists three access paths but doesn't quantify them (time to first stream, account requirements, infra needs). live-events presents JWT vs Webhook access control without a comparison. vod-and-recording presents Upload-via-URL vs Direct Upload without naming when to pick which. codec-support gives a yes/no matrix without "Limited" definitions or codec-choice guidance.
- **Production handoff broken.** transcoding-direct-quickstart promises a Gateways tab production path twice via `<LinkArrow href="" label="">` — both empty. No page anywhere in the section actually routes a successful local-quickstart reader to a production gateway/operator setup.
- **Persona signposting absent.** Persona 2 (Video Platform) and Persona 4 (Live-Video-First) land on these pages and only `transcoding-direct-quickstart` names them. Other pages don't acknowledge which audience they're written for.

**Section-level fix:** (a) Add decision callouts above the multi-variant H2s on overview, live-events, vod-and-recording, codec-support. (b) Fix the two empty `<LinkArrow>` placeholders on `transcoding-direct-quickstart`. (c) Add Persona 2 / Persona 4 signposts to the intro of overview + the body of the four guide/how_to pages.

### Layer 2 — Composition (section level)

7 pages with near-identical component-set failures:

- `<CardGroup>` everywhere instead of `<Columns cols={2}>` + `<CustomCardTitle>` (6/7; codec-support has neither).
- Code blocks missing `icon` + `title` (7/7, ~46 blocks total).
- Raw markdown tables where `<StyledTable>` is required (4/7).
- Multi-variant content as sequential H2s/blocks instead of `<Tabs>` (5/7).
- No Mermaid diagrams (6/7).
- `<Note>` carrying primary content (3/7, 5 Notes total).
- Raw `<Steps>` instead of `<StyledSteps>` (1/7 — only `transcoding-direct-quickstart`).
- Tab missing `icon` (1/7 — only `transcoding-direct-quickstart`; the others have no Tabs).
- Accordion missing `icon` (1/7 — only `transcoding-direct-quickstart`).

**Section-level fix:** A single propagation pass converts `<CardGroup>` → `<Columns>` + `<CustomCardTitle>`; adds `icon`/`title` defaults to every fenced block; converts raw markdown tables to `<StyledTable>`; wraps parallel variants in `<Tabs>` with `icon`; promotes the 5 primary-content `<Note>` blocks to inline prose or `<Warning>`; replaces ASCII job-lifecycle diagram with Mermaid sequence; converts raw `<Steps>` in transcoding-quickstart to `<StyledSteps>` (mirror `comfystream/workflow-authoring.mdx` line 55).

### Layer 3 — Cross-page integration (section level)

The inter-page graph stops at the `build/video/` section boundary:

- Every Related Pages section links only to siblings.
- Zero links to `/v2/gateways/setup/connect` (the operator path for serving these workloads).
- Zero links to `/v2/solutions/portal` (managed alternative to running infrastructure).
- Zero links to `/v2/about/network/architecture` (protocol context).
- Two BROKEN cross-tab placeholders on `transcoding-direct-quickstart` (lines 43, 356).

Upstream repos: `livepeer/livepeer-js`, `livepeer/livepeer-python`, `livepeer/livepeer-react`, `livepeer/go-livepeer`, `livepeer/lpms` — all named without prose-level links across multiple pages. Same pattern that Round 1 flagged on `build/ai-and-agents/`.

**Section-level fix:** Every Related Pages section should have at least 1 of its 4 cards be a cross-tab link. 4-card pattern: 2 siblings + 1 prereq + 1 graduation. For video pages, graduation cards should point to `/v2/gateways/setup/connect` (self-host operator), `/v2/solutions/portal` (managed), or `/v2/about/network/architecture` (protocol). Add inline upstream repo links at first prose mention on every page.

### Layer 4 — Veracity (section level)

Three veracity gaps repeat across the section:

- **Unpinned installs / Docker images / git clones.** SDK versions (`livepeer`, `livepeer-ai`, `@livepeer/react`), Docker tags (`livepeer/go-livepeer:master`), git HEAD pulls (`livepeer/lpms`). Multiple pages claim `lastVerified: 2026-05-13` while shipping moving-target install commands. Identical to Round 1 finding on `build/ai-and-agents/`.
- **OpenAPI / source-of-truth never linked.** Profile fields, payload shapes, codec capability claims, default values all asserted without linking the canonical source (`livepeer/livepeer-js api/openapi.yaml`, `livepeer/lpms core/lpms.go`, `livepeer/go-livepeer core/streamparameters.go`).
- **Deprecated terminology mixed with current.** "broadcaster" appears in 4 pages alongside the canonical "Gateway" — pages assert current architecture using stale language. This is both a voice gap and a veracity gap (page contradicts the canonical glossary).

**Section-level fix:** (1) Pin every install/clone/Docker tag; add `{/* REVIEW: confirm latest tag */}` placeholders where unknown. (2) Extract SDK versions, RTMP host, HLS host, codec matrix to shared `snippets/data/` modules. (3) Add `veracityStatus: unverified` to 6 pages missing it; raise to `verified` only after pins land. (4) Find-replace "broadcaster" → "Gateway" / "gateway mode" section-wide.

### Layer 5 — Product-forward depth (section level)

The section reads as a feature list (here's how to ingest, here's how to record, here's how to access-control), not a product evaluation. A senior engineer building a real video product asks:

- Which path is right for me at scale? (Overview lists 3 paths, doesn't quantify.)
- What's it cost? (Per-second compute referenced once, not on these pages.)
- What's the SLO / rate limit / max concurrent stream? (Not stated.)
- What's the failure mode? What recovery? What monitoring? (Not stated.)
- Is this production-ready or beta? (No maturity badge anywhere in the section.)
- What's the operational cost (managed vs self-host)? (Not stated.)
- Where does WebRTC fit? (Mentioned in passing on codec-support and vod-and-recording, never as a primary path.)

**Section-level fix:** Add `<Badge>` maturity signals near each page header (Stable / Beta / Production with usage signal). Add §"Costs" subsection on the overview linking to per-second compute and Solutions tab. Add §"Production considerations" or `<AccordionGroup>` on the guide pages naming rate limits, concurrent stream caps, key rotation, recording retention, monitoring webhook subset. Add a §"Trade-offs" or "When not to use" subsection on overview and each path's detail page.

## Prioritised section remediation

| # | Step | Pages affected | Effort |
|---|---|---|---|
| 1 | Fix the 2 empty `<LinkArrow href="" label="">` placeholders on `transcoding-direct-quickstart.mdx` lines 43, 356 — set `href="/v2/gateways/setup/connect"` and a real label. CRITICAL — broken production handoff | 1 | S |
| 2 | Section-wide find-replace "broadcaster" → "Gateway" / "gateway mode" in narrative; preserve only the legitimate flag-rename `<Note>` on transcoding-direct-quickstart line 91 | 4 (overview, ingest-and-playback, lpms-integration, codec-support not affected) | M |
| 3 | Convert every `<CardGroup cols={2}>` Related Pages to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` (6 pages); add Related Pages footer to `codec-support` (currently missing); delete duplicate in-prose Next-Step paragraph alongside the CardGroup where it occurs | 7 | L |
| 4 | Add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` to 6 pages missing them; remove legacy `status: current` from all 7 pages; correct non-canonical `pageType: overview` → `concept` + `pageVariant: overview` on overview; correct non-canonical `pageType: how_to` → `guide` on 3 pages (ingest-and-playback, live-events, vod-and-recording); add `pageVariant: quickstart` to transcoding-direct, `pageVariant: specification` to codec-support + lpms-integration | 7 | M |
| 5 | Add `icon` + `title` to every fenced code block across the section (~46 blocks total); use `icon="terminal"` for shell, `icon="js"` for JS/TS, `icon="python"` for Python, `icon="code"` for Go, `icon="docker"` where Docker | 6 (codec-support has no code) | L |
| 6 | Wrap parallel-variant content in `<Tabs>` with `icon` props: overview SDK install (JS / Python / Go); ingest-and-playback JS+Python stream-create; live-events JWT vs Webhook access control; vod-and-recording Upload-via-URL vs Direct Upload | 4 | M |
| 7 | Convert raw `<Steps>` x3 on `transcoding-direct-quickstart` to `<StyledSteps>` with `iconColor`/`titleColor`; add `icon` to all 4 Tabs + all 5 Accordions on the same page | 1 | M |
| 8 | Add ≥3 cross-tab graduation Related Pages cards to every page: `/v2/gateways/setup/connect`, `/v2/solutions/portal`, `/v2/about/network/architecture`, `/v2/orchestrators/setup/connect` as appropriate | 7 | M |
| 9 | Pin every install command: `livepeer` SDK, `livepeer-react`, Docker `go-livepeer:master`, `livepeer/lpms` git clone. Add `{/* REVIEW: pin latest */}` placeholder where unknown. Extract SDK versions to `snippets/data/sdks/livepeer-versions.json` | 6 | M |
| 10 | Add inline upstream-repo links at first prose mention on every page: `livepeer/livepeer-js`, `livepeer/livepeer-python`, `livepeer/livepeer-react`, `livepeer/go-livepeer`, `livepeer/lpms` | 7 | M |
| 11 | Add Mermaid diagrams (using `MermaidColours.jsx`) on 6 pages: overview (ingest→transcode→playback flow); transcoding-direct (replace ASCII Job Lifecycle with Mermaid sequence); ingest-and-playback (stream lifecycle webhook timing); live-events (multistream fan-out + JWT verification); vod-and-recording (asset 4-state machine); lpms-integration (architecture: RTMP→segmenter→transcoder branches→HLS) | 6 | L |
| 12 | Convert raw markdown tables to `<StyledTable variant="bordered">`: codec-support (Container formats + Audio codecs); transcoding-direct (2 flag tables); ingest-and-playback (Profile fields → `<ParamField>` + Stream Events → StyledTable); lpms-integration (Default Endpoints) | 4 | M |
| 13 | Promote `<Note>` blocks carrying primary content to inline prose or `<Warning>`: transcoding-direct (3 Notes — flag rename, split topology, off-chain semantics); ingest-and-playback (HMAC verification + add code example); lpms-integration (LPMS scoping) | 3 | M |
| 14 | Add Prerequisites H2 to 5 pages missing one (ingest-and-playback, live-events, vod-and-recording, lpms-integration); rename "Required Tools" → "Prerequisites" on transcoding-direct (line 47) | 5 | S |
| 15 | Add Persona 2 / Persona 4 signposts in intro of overview, ingest-and-playback, live-events, vod-and-recording. Currently only transcoding-direct names personas | 4 | S |
| 16 | Add `<Badge>` maturity signal near each page header; add §"Production considerations" / "Costs" / "Trade-offs" subsection on overview + 4 guide/how_to pages | 5 | L |
| 17 | Add inline citations to every veracity-fragile claim: codec capability (codec-support entire body); default profile (transcoding-direct line 253); segment duration (transcoding-direct line 301); `asset.status.phase` enum (vod-and-recording); `MultistreamTarget`/`PlaybackPolicy`/`RecordingSpec` shapes (live-events) | 5 | L |
| 18 | Replace ambiguous "Limited" cell for VP9 transcode output (codec-support line 67) with a precise qualifier | 1 | S |
| 19 | Label every code block `TESTED YYYY-MM-DD against <pinned-version>` once installs are pinned | 6 | M |
| 20 | Fill out 2 EMPTY-STUBs per the briefing in this report: `storage-and-archival.mdx` (IPFS / Arweave / managed VOD retention decision matrix; cross-link `ipfs-video-integration.mdx`); `frameworks-network.mdx` (`https://app.frameworks.network` hosted ingest tier + MistServer stack; cross-link Solutions tab `solution-providers.mdx` and `portal.mdx`). Rename `frameworks-network.mdx` title to `Frameworks Network` (display) | 2 | L |
