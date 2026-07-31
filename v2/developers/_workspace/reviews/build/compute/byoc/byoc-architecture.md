# Review: byoc-architecture.mdx

**Page**: `v2/developers/build/compute/byoc/byoc-architecture.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `concept` (line 7)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 3,920
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `specification` or `compendium` recommended |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "BYOC container architecture: FrameProcessor interface..." 138 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields (lines 18-22) |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "advertises", "optimised" not present; "behaviour" not used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "BYOC (Bring Your Own Container) lets you deploy..." — subject-led but uses banned-ish "lets you" |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | FAIL | Line 34: "Bring Your Own Container" — conflicts with `overview.mdx` "Bring Your Own Compute" |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero |
| 2. Voice | 2.13 | Entity-led voice | PASS | "BYOC", "FrameProcessor", "StreamServer", "Docker container", "The orchestrator" all lead paragraphs |
| 2. Voice | 2.14 | No hedging verbs | MIXED | Line 34: "lets you deploy" — borderline hedge; rubric flags "allows you to" / "enables you to" — "lets you" is similar register |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "VideoFrame" (line 55) not defined or linked; "PTS timestamp" (line 55) not defined; "AI Service Registry" (line 87) named but no contract link; "GetOrchestratorInfo" (line 87) named but not linked to go-livepeer RPC reference |
| 2. Voice | 2.22 | Terminology lock | FAIL | See 2.11 |
| 2. Voice | 2.D1 | Code-first opening | N/A | Concept page |
| 2. Voice | 2.D2 | API/method has code | PASS | `process_frame()`, `/health` shown with code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for ai-runner, go-livepeer, PyTrickle, Docker SDK |
| 2. Voice | 2.D4 | Errors in main content | N/A | Concept page |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | All score ≥21 |
| 3. Headings | 3.2 | Banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "Three-layer architecture", "Capability registration", "Health check contract" |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC architecture" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | Governing-concept headings for concept page |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Explain the three-layer architecture |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer understand the three-layer BYOC architecture" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Parent compute/overview.mdx missing |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing paragraph (line 105) points to quickstart + frame-processor; no Related Pages footer at all (FAIL 5.16) |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Points to FrameProcessor reference for processing API — OK |
| 4. Structure | 4.7 | Info type per section | PASS | Technical + analytical |
| 4. Structure | 4.8 | No content duplication | FAIL | Three-layer ASCII (lines 40-53) overlaps `byoc-quickstart.mdx` Job Lifecycle ASCII (lines 327-337) and `overview.mdx` paragraphs about HTTP contract. Health check section (lines 91-101) duplicates `overview.mdx` HTTP Contract endpoints table. `aiModels.json` example (lines 67-76) duplicates `overview.mdx` lines 87-104 with different field set |
| 4. Structure | 4.9 | Section orientation | FAIL | Section parent missing |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what is the BYOC architecture"; doesn't answer "where does the trickle protocol come from" or "what's the orchestrator's docker-socket contract" |
| 4. Structure | 4.12 | Page size | MIXED | 3.9 KB — borderline; concept-page substantive threshold is ≥5 KB. Below rubric threshold |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No mention of container size, cold start, debugging cost, GPU competition |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | json (67), python (95) tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | Concept |
| 4. Structure | 4.19 | Error states main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | MIXED | `GetOrchestratorInfo` (line 87) named but no link/code |
| 5. Layout | 5.1 | Correct template | MIXED | Concept template OK; closing prose pointer (line 105) instead of formal Related Pages |
| 5. Layout | 5.2 | Required sections | FAIL | Concept matrix requires Related Pages footer at end. Page closes with prose pointer only, no `<Card>` block |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | Field table (lines 78-85) raw markdown — should be `<StyledTable>`. Three-layer architecture (lines 40-53) ASCII — should be Mermaid (5.27) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 9) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view | PASS | |
| 5. Layout | 5.15 | Data imports | FAIL | `aiModels.json` example (lines 67-76) hardcoded; same as `overview.mdx`, should be one shared snippet |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NEITHER a Related Pages CardGroup NOR a clear Next Step CTA — just a closing prose paragraph at line 105 pointing to two pages. Concept matrix requires Related Pages |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages section at all (consequence of 5.16) |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | json block (line 67) and python block (line 95) both missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | Concept page |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable | FAIL | Field table (78-85) raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider at line 32; divider at line 36 BETWEEN intro paragraph (34) and first H2 — violates 5.26 (no divider between intro and first H2) |
| 5. Layout | 5.27 | Mermaid | FAIL | Three-layer ASCII (40-53) — must be Mermaid `flowchart` using `MermaidColours.jsx`. Persona-3 architecture page — Mermaid critical |
| 5. Layout | 5.28 | Import ordering | PASS | element → wrapper |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | FAIL | "AI Service Registry on-chain" (line 87) — no contract address; "`GetOrchestratorInfo` response" — no link to go-livepeer RPC reference; "Docker socket" lifecycle (line 59) — no link to go-livepeer container management code |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No labels |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | `price_per_unit: 3000` realistic |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | NOT-TESTED | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version pin; no Phase-4 PR reference |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No T1 link to ai-runner, go-livepeer, pytrickle, or registry contract |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent missing (IA gap) |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | |
| 7. Nav/IA | 7.4 | Orphans | MIXED | Section root empty |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | MIXED | 3.9 KB — below substantive threshold for concept page (≥5 KB per 4.12) |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Two links at line 105 resolve |
| 8. Links | 8.2 | External | N/A | None |
| 8. Links | 8.3 | Snippets | PASS | CustomDivider imported (line 25) |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Architecture explained; "where does StreamServer come from" (PyTrickle repo) not linked |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | |
| 10. Completeness | 10.3 | Persona paths | MIXED | |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | Points to FrameProcessor reference for processing API ✓ |
| 10. Completeness | 10.6 | Language paths | PASS | Python primary |
| 10. Completeness | 10.7 | Persona guides | MIXED | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC architecture" | PASS | 2 words |
| sidebarTitle | Yes | "Architecture" | PASS | |
| description | Yes | "BYOC container architecture..." | PASS | 138 chars |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — `explain` |
| complexity | No | — | FAIL | Missing — `intermediate` |
| lifecycleStage | No | — | FAIL | Missing — `build` |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Imported ✓; line 36 placement violates 5.26 (between intro and first H2) |
| `<CenteredContainer>` | Yes (1×) | — | — | Header CTA ✓ |
| `<Tip>` | Yes (1×) | Recommended | — | OK |
| `<StyledTable>` | No | Required | — | Field table at 78-85 raw markdown (FAIL 5.23) |
| Mermaid | No | Required (5.27) | — | ASCII 40-53 should be Mermaid |
| `<CardGroup>` / `<Columns>` | No | Required (Related Pages) | — | NO Related Pages at all (FAIL 5.16) |
| `<Card>` | No | Required | — | None present |
| `<CustomCardTitle>` | No | Required for nav Cards | — | None |
| `<AccordionGroup>` | No | Recommended for FAQ/edges | — | Trade-offs missing |
| Fenced code w/ icon+title | No | Required | — | 2 blocks missing both |
| `<Tabs>` | No | — | — | |
| `<LinkArrow>` | No | — | — | Plain markdown links used |

## Cross-page duplication and link gaps

- **OVERLAP** (heavy): Three-layer architecture ASCII (40-53) overlaps `byoc-quickstart.mdx` Job Lifecycle ASCII (327-337) — both are low-fidelity prose flows of the same concept.
- **OVERLAP**: `aiModels.json` example (67-76) duplicates `overview.mdx` lines 87-104 with different fields shown (`container`, `url` here; `warm`, `price_per_unit` shared). Should be one shared snippet, imported by both.
- **OVERLAP**: Health check contract (91-101) duplicates `overview.mdx` HTTP Contract table (48-68) "`/health` returns `{"status": "ok"}`" + `byoc-production.mdx` Health check under load (lines 80-84).
- **LINK GAPS**:
  - "AI Service Registry on-chain" (line 87) — no link.
  - "`GetOrchestratorInfo` response" (line 87) — no go-livepeer reference.
  - "Docker socket" (line 59) — no implementation pointer.
  - "trickle subscribe / publish" (lines 49-50) — no protocol spec link or PyTrickle repo link.
  - "PyTrickle" (line 57) — no repo link (`livepeer/pytrickle`).
  - No link to brief-named repos: muxionlabs/byoc-sdk, muxionlabs/livepeer-app-pipelines, byoc-example-apps, livepeer/scope-runner.
- **STRANDED**: Page ends abruptly at line 105 with two inline links. No Related Pages footer at all (5.16 FAIL).
- **IA-DRIFT**: Section root missing.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 1 | line 34: "lets you deploy" — borderline hedging verb (2.14 forbids "allows you to" / "enables you to"; "lets you" is similar) |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |
| Terminology collision | 1 | line 34: "Bring Your Own Container" vs `overview.mdx` "Bring Your Own Compute" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Three-layer architecture | 5 | 5 | 5 | 5 | 4 | 24 |
| Capability registration | 5 | 4 | 5 | 5 | 5 | 24 |
| Health check contract | 5 | 4 | 5 | 5 | 5 | 24 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 40 | (none — ASCII inside ```) | ✗ | ✗ | — | Should be Mermaid not ASCII (FAIL 5.27) |
| 67 | json | ✗ | ✗ | NOT-TESTED | FAIL 5.20; should be `icon="code" title="aiModels.json"` |
| 95 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20; should be `icon="code" title="app.py"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises to explain the BYOC architecture. It does so in 105 lines with one ASCII tree, two code samples, and one table. A developer reading this comes away knowing the three layers exist but cannot trace a single live request from gateway to container to back. The "Three-layer architecture" section names FrameProcessor / StreamServer / Docker but doesn't show their sequence in time — only their stack relationship.
- **Fix step:** After the prose paragraph at line 34, add a Mermaid `sequenceDiagram` with 5 actors: Gateway, Orchestrator, StreamServer, FrameProcessor, Docker. Show: (1) Gateway POST `/live-video-to-video`; (2) Orchestrator → Docker socket lookup → BYOC container `/health`; (3) Orchestrator → trickle publish frame → StreamServer; (4) StreamServer → `process_frame()` → FrameProcessor; (5) FrameProcessor → return VideoFrame; (6) StreamServer → trickle publish out; (7) Orchestrator → Gateway response. Use `MermaidColours.jsx`. Replace the ASCII tree at 40-53 with the diagram (or keep tree for stack relationship and add the sequenceDiagram for temporal flow).
- **Source/exemplar:** `_packet/component-matrix.md` concept matrix — "Mermaid diagrams Recommended; prose before each"; `5-whys-prompt.md` Layer 1.

### Layer 2 — Composition
- **Gap:** ASCII tree where Mermaid required (5.27); raw markdown field table (5.23); no Related Pages footer at all (5.16 FAIL); 2 code blocks missing icon+title (5.20); divider at line 36 between intro and first H2 violates 5.26; `<AccordionGroup>` absent where "Trade-offs" / "Failure modes" / "Implementation notes" sections would fit.
- **Fix step:** (a) Convert ASCII (40-53) to Mermaid flowchart. (b) Convert field table (78-85) to `<StyledTable>`. (c) Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>`: byoc-quickstart, byoc-production, frame-processor reference, byoc-sdk. (d) Add `icon="code" title="aiModels.json"` and `icon="code" title="app.py"` to the two code blocks. (e) Remove divider at line 36 (between intro and H2). (f) Add §"Implementation notes" `<AccordionGroup>` with: "Docker socket vs network mode" / "VRAM lifecycle and warm flag" / "Trickle protocol error modes".
- **Source/exemplar:** `_packet/component-matrix.md` concept pageType row; sibling `overview.mdx` (already has CardGroup, even if wrong format).

### Layer 3 — Cross-page integration
- **Gap:** Page closes with two inline links to quickstart + frame-processor. Zero cross-tab, zero upstream repos. PyTrickle named (line 57) without repo link; ai-runner not named at all despite this being the native parallel; AI Service Registry contract not linked; go-livepeer Docker-socket integration not linked. Brief calls out muxionlabs/byoc-sdk, muxionlabs/livepeer-app-pipelines, byoc-example-apps, livepeer/scope-runner — none referenced.
- **Fix step:** (a) Add prose link `livepeer/pytrickle` at line 57. (b) Add link to `livepeer/ai-runner` at line 34 ("alongside native ai-runner pipelines"). (c) Add registry contract Arbiscan link at line 87. (d) Reference brief repos under a new §"Implementation references" — `muxionlabs/byoc-sdk` (CLI), `muxionlabs/byoc-example-apps` (reference impls), `livepeer/scope-runner` (BYOC-style orchestrator integration). (e) Replace prose pointer at line 105 with `<Columns>` Related Pages including `/v2/orchestrators/setup/capabilities`, `/v2/developers/build/ai-and-agents/ai-pipelines` (the native sibling), `/v2/developers/guides/payments/per-second-compute`.
- **Source/exemplar:** brief explicit on repos; `5-whys-prompt.md` Layer 3.

### Layer 4 — Veracity and source authority
- **Gap:** Page asserts three high-stakes claims with no source: "Orchestrator manages the container lifecycle via the Docker socket" (line 59), "AI Service Registry on-chain" + "`GetOrchestratorInfo` response" (line 87), "The orchestrator polls `/health`" (line 101). None linked to go-livepeer code, RPC reference, or contract. `veracityStatus` field absent. Two code samples (json, python) NOT TESTED. No PR / release reference for Phase-4 per-second compute (BYOC PR #3641 per brief).
- **Fix step:** (a) Add `veracityStatus: unverified` (replacing `status: current`). (b) Add go-livepeer source link at line 59: "Docker container lifecycle: see [`go-livepeer/server/handlers.go`](https://github.com/livepeer/go-livepeer/blob/master/...)" (placeholder for real path; mark `{/* REVIEW: confirm path */}`). (c) Add Arbiscan link for the AI Service Registry contract at line 87. (d) Add `{/* TESTED: 2026-05-XX against PyTrickle <tag>, go-livepeer v<ver> */}` above each code block or `NOT-TESTED: reason`. (e) Cite BYOC PR #3641 near §"Capability registration" since `price_per_unit` semantics changed.
- **Source/exemplar:** brief PR #3641; `_workspace/audit-2026-05-12/task-3-rewrite-scope.md`.

### Layer 5 — Product-forward depth
- **Gap:** Architecture page reads as a static reference. No "what could go wrong here" — Docker socket access on orchestrator is a security boundary; container hostname resolution under Docker vs host network is a known operational issue; `/health` polling cadence and timeout aren't stated. The reader leaves knowing the three layers but not knowing where they break in practice. Brief specifies container size, cold start, debugging cost as trade-offs — none named here.
- **Fix step:** Add §"Failure modes and trade-offs" `<AccordionGroup>` before the closing pointer with 4 accordions: (1) "Docker socket security: orchestrator needs Docker daemon access; mTLS or rootless Docker recommended"; (2) "Container hostname resolution: `--network host` for dev, named Docker network for prod"; (3) "Health-check timing: orchestrator polls every 5s with 2s timeout — long load-on-startup containers need warm-flag handling"; (4) "Cold-start cost: 30s-2min for first request to a non-warm capability; warm flag in `aiModels.json` keeps the model in VRAM". Add `<Badge>Phase 4 — mainnet</Badge>` near top.
- **Source/exemplar:** `_packet/component-matrix.md` concept row recommends Accordion for edge cases; brief trade-offs; `.claude/references/layout/exemplars.md`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 10 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. NO Related Pages footer at all (5.16 + 5.17 FAIL). Concept matrix requires it. Page ends at line 105 with two inline links only.
2. Three-layer architecture is ASCII (40-53); 5.27 + brief Persona-3 emphasis require Mermaid. Persona-3 architecture page without a real diagram fails the densest path's most important visual aid.
3. Page size 3.9 KB — below the ≥5 KB concept substantive threshold (4.12). Half the content is duplicated from `overview.mdx` (HTTP contract, aiModels.json example).
4. 4 required frontmatter fields missing (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`); legacy `status: current` present.
5. Terminology collision — "Bring Your Own Container" vs `overview.mdx` "Bring Your Own Compute". Lock one expansion.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>` before EOF: byoc-quickstart, byoc-production, frame-processor reference, byoc-sdk (plus ≥1 cross-tab card) | EOF (after line 105) | HIGH | M | check 5.16, 5.17, 5.22 |
| 2 | Replace ASCII tree (40-53) with Mermaid sequenceDiagram (or flowchart for stack + sequenceDiagram for temporal flow) using `MermaidColours.jsx` | 40-53 | HIGH | M | check 5.27 |
| 3 | Add `purpose: explain`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter | 7-22 | HIGH | S | check 1.1 |
| 4 | Remove `status: current` (line 9) | 9 | MEDIUM | S | check 5.7 |
| 5 | Convert field table (78-85) to `<StyledTable>` | 78-85 | HIGH | S | check 5.23 |
| 6 | Add `icon="code" title="aiModels.json"` to json block (67); `icon="code" title="app.py"` to python block (95) | 67, 95 | HIGH | S | check 5.20 |
| 7 | Remove divider at line 36 (between intro and first H2) | 36 | MEDIUM | S | check 5.26 |
| 8 | Lock BYOC expansion: change "Bring Your Own Container" (line 34) to match sibling pages; propagate across BYOC subgroup | 34 | HIGH | S | check 2.11, 2.22 |
| 9 | Extract `aiModels.json` example to shared snippet; import here AND `overview.mdx`; de-duplicate | 67-76 | HIGH | M | check 4.8, 5.15 |
| 10 | Remove or compress Health check section (91-101) — duplicates `overview.mdx`; consider promoting `byoc-production.mdx` "Health check under load" content here and leaving overview with the basic contract only | 91-101 | MEDIUM | M | check 4.8 |
| 11 | Add prose link `livepeer/pytrickle` at first PyTrickle mention (line 57) | 57 | HIGH | S | check 6.10 |
| 12 | Add prose link `livepeer/ai-runner` at first mention (line 34) | 34 | HIGH | S | check 6.10 |
| 13 | Add registry contract address + Arbiscan link at line 87 (`{/* REVIEW: confirm contract address */}` if unknown) | 87 | HIGH | S | check 6.1 |
| 14 | Add §"Failure modes and trade-offs" `<AccordionGroup>` with `icon="circle-exclamation"` per accordion: Docker socket security, hostname resolution, health-check timing, cold-start cost | before EOF | HIGH | M | check 4.15; task-3-rewrite-scope.md |
| 15 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/orchestrators/setup/capabilities`, `/v2/developers/build/ai-and-agents/ai-pipelines`, `/v2/developers/guides/payments/per-second-compute` | EOF | HIGH | M | check 4.10, 7.6 |
| 16 | Reference brief-named repos: muxionlabs/byoc-sdk, muxionlabs/byoc-example-apps, livepeer/scope-runner — at least under §"Implementation references" or in Related Pages | new section / EOF | MEDIUM | M | brief |
| 17 | Cite BYOC PR #3641 (per-second compute) under §"Capability registration" since price_per_unit semantics changed | 65 | MEDIUM | S | brief |
| 18 | Define "VideoFrame" + "PTS timestamp" on first use (link to frame-processor reference) | 55 | MEDIUM | S | check 2.21 |
| 19 | Rewrite line 34 to remove "lets you deploy" hedge; replace with: "BYOC packages custom AI models as Docker containers..." | 34 | INFO | S | check 2.14 |
| 20 | Expand page to ≥5 KB substantive by adding the trade-offs Accordion + Mermaid + Related Pages (steps 1, 2, 14) | full page | MEDIUM | implicit | check 4.12 |
