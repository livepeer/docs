# Task 3 — REWRITE-scope detail

Per file: which rules are violated, the scope of rewrite required, and whether canonical source material exists to support the rewrite without an SME.

Files included: all 8 files classified REWRITE in `task-2-existing-file-mapping.csv`, plus the 14 graded-rewrite files from `task-3-grading.csv` that exceed the CSV's REWRITE classification, plus the 4 files classified SPLIT/REVIEW-NEEDS-DECISION/HOLD that have meaningful violations.

Canonical-source key: `go-lp` = `livepeer/go-livepeer` repo, `ai-runner` = `livepeer/ai-runner`, `proto` = `livepeer/protocol`, `READMEs` = upstream repo READMEs, `OpenAPI` = `api/` directory, `internal-verified` = verified in `diagrams2.mdx` verification log §1–8.

## Tier 1 — Heavy rewrites (whole-page or large-section)

### `concepts/developer-landscape.mdx` (34 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 11 | Whole-page |
| Em-dashes | 1 | One paragraph |
| REVIEW flags | 5 | Five distinct claims |
| Frontmatter | 6/8 (lifecycleStage + purpose missing — both fields appear twice but neither value is canonical) | Field cleanup |

**Scope:** whole-page rewrite. Studio framing is the core narrative spine. Target: `concepts/landscape.mdx`.

**Canonical sources available:**
- Five-persona infra maps in `diagrams.mdx` (locked model) — covers what the page should show network-direct
- `diagrams2.mdx` verification log §1–8 (8 items resolved) — addresses 5+ of the REVIEW flags directly
- `consolidate.md` §"Phase 2 — Concepts spine §2.2 landscape.mdx" — explicit brief

**Verdict:** rewrite supported by canonical sources. No SME needed.

### `learn/video-on-livepeer.mdx` (8 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 7 | Whole-page |

**Scope:** whole-page rewrite per `consolidate.md` §"Codex task 3.2 — most carefully scoped task in this phase". Current page is entirely Studio-API-centric; new page must lead with self-hosted gateway + Frameworks, acknowledge Studio via routing only.

**Canonical sources available:**
- Persona 2 + Persona 4 infra maps in `diagrams.mdx` (locked, network-direct)
- `concepts/developer-stack.mdx` for protocol-layer claims
- Frameworks repo README for `frameworks.network` framing

**Verdict:** rewrite supported. No SME needed.

### `guides/ai/troubleshooting.mdx` (7 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 6 | Whole-page |
| Studio at target path `guides/observability-and-debugging/job-debugging.mdx` | (target is broader scope) | Section restructure |

**Scope:** whole-page rewrite + scope broadening. Target is `job-debugging.mdx` which covers network-direct debugging, not just AI inference troubleshooting. Studio API key references must be replaced with Cloud SPE / self-hosted gateway equivalents.

**Canonical sources available:**
- `Remote_signers.md` Notion export (cross-tab finding)
- go-lp source for actual error codes
- `diagrams2.mdx` §3.3 "Studio API key conflation" — explicit gap diagnosis

**Verdict:** rewrite supported. No SME needed. Bonus: resolves a documented inconsistency.

### `resources/reference/apis.mdx` (7.7 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 5 | Whole-page |
| Frontmatter | 8/8 pass | — |

**Scope:** whole-page rewrite. Current page references Studio API as canonical; must be reframed as either (a) network-direct AI Jobs API or (b) catalogue of available APIs (Studio + Cloud SPE + self-hosted) with Studio routed to Solutions tab.

**Canonical sources available:**
- `api/` directory OpenAPI specs (must exist per project rule 2)
- `livepeer-ai-js`, `livepeer-ai-python` SDK READMEs
- `_workspace/files-to-add/apis-expanded.mdx` (stage-ready draft per Task 2 §"Useful workspace caches")

**Verdict:** rewrite supported. Use `apis-expanded.mdx` as the rewrite base if its content is current.

### `learn/ai-on-livepeer.mdx` (14 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 2 | Sections containing Studio refs |
| REVIEW flags | 2 | Two distinct claims |

**Scope:** section rewrite (not whole-page). Target: `learn/ai-and-agents.mdx`. Per brief: MOVE + REWRITE for network-direct. The bulk of the page is salvageable; Studio framing isolated to specific examples. Also MERGE in `build1/workload-fit.mdx` content (decision-tree section).

**Canonical sources available:**
- Persona 1 infra map (`diagrams.mdx`)
- `diagrams2.mdx` verification log items §5 (Storyboard 40 BYOC capabilities), §6 (room namespace deprecation)
- `build1/workload-fit.mdx` content for the merge

**Verdict:** section rewrite supported. No SME needed.

### `concepts/developer-stack.mdx` + `concepts1/oss-stack.mdx` (24 KB + 16 KB → MERGE to repo-map.mdx)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 1 (each file) | Two paragraphs |
| Em-dash | 0 + 1 | One paragraph |
| Conditional gatekeeping | 0 + 1 | One sentence |
| Frontmatter mismatch | audience: general vs developer | Single field |

**Scope:** merge + light rewrite. Per Task 2 duplicate analysis, ~40% content overlap, ~60% unique to each. Merge using `developer-stack.mdx` as base; pull `oss-stack.mdx` unique sections; remove the two Studio refs; remove one em-dash; remove one conditional construction; set `audience: developer`.

**Canonical sources available:**
- `diagrams2.mdx` verification log §1 (livepeer/sdk dead — remove any references), §2 (livepeer-js = ui-kit — collapse), §3 (livepeer-data-mcp internal-only — annotate)
- go-livepeer/go.mod for actual dependency truth (catalyst vs lpms relationship per §7)

**Verdict:** merge supported. No SME needed.

## Tier 2 — Targeted rewrites (sections only)

### `concepts/ecosystem-map.mdx` (28 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 8 | Sections covering hosted-platform listings |
| Conditional gatekeeping | 1 | One sentence |
| Frontmatter | 7/8 (purpose missing) | Single field |

**Scope:** if MERGED into `repo-map.mdx` (per Task 2), pull only the Studio-free sections. Studio listings can move to a new `learn/where-to-find/studio-paths.mdx` page if salvageable.

**Verdict:** merge-with-extraction. No SME needed.

### `guides/ai/authentication.mdx` (5 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 4 | Auth flow examples |

**Scope:** target `guides/auth-and-security/ai-authentication.mdx`. Studio API key examples must become Cloud SPE community gateway + self-hosted gateway examples. Per `diagrams2.mdx` §3.3, current page conflates Studio API key with AI API key — explicit gap to fix.

**Canonical sources available:**
- Cloud SPE auth flow (verifiable — `dream-gateway.livepeer.cloud` is a documented public endpoint)
- Self-hosted gateway auth from go-lp README

**Verdict:** section rewrite supported. No SME needed.

### `guides/ai/production-checklist.mdx` (5.6 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 4 | Production-checklist items |

**Scope:** target `guides/production-hardening-checklist.mdx` (broaden from AI-only to all production deployments). Studio-specific checklist items become network-direct equivalents.

**Verdict:** scope broadening + section rewrite. No SME needed.

### `get-started/ai-quickstart.mdx` (5.7 KB)

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 5 | Whole quickstart |

**Scope:** whole-page rewrite for network-direct. Target NET-NEW page: `build/ai-and-agents/ai-jobs-direct-quickstart.mdx`. 10-min curl against Cloud SPE community gateway (`dream-gateway.livepeer.cloud`). RFP-named deliverable per `consolidate.md` §4.1.

**Canonical sources available:**
- Cloud SPE endpoint is publicly documented
- `livepeer-ai-js` and `livepeer-ai-python` README quickstart sections

**Verdict:** whole-page rewrite supported. No SME needed.

### `get-started/transcoding-quickstart.mdx` (6.4 KB) — HOLD

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 7 | Whole quickstart (correctly — this IS the Studio version) |

**Scope:** HOLD for Rick review per Task 2. Studio version stays Studio-framed. Network-direct version is NET-NEW at `build/video/transcoding-direct-quickstart.mdx` — written from scratch using go-lp transcoder mode docs.

**Verdict:** no Task 3 rewrite action — Studio version held, separate net-new version written.

### `get-started/comfystream-quickstart.mdx` (10.8 KB)

| Violation | Count | Scope |
|---|---|---|
| REVIEW flags | 11 | Eleven distinct unverified claims |
| Studio framing | 0 | (clean — already network-direct against ComfyStream) |

**Scope:** flag-resolution only. Per project rule 2, every REVIEW flag must be verified against canonical source or rewritten to not need verification. Target path is `build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx` (MOVE per brief).

**Canonical sources available:**
- `livepeer/comfystream` README
- `diagrams2.mdx` §3.2 ComfyStream-related verification items

**Verdict:** verification work, no rewrite. No SME needed.

### `build1/comfystream.mdx` (12.5 KB)

| Violation | Count | Scope |
|---|---|---|
| REVIEW flags | 11 | Eleven distinct unverified claims |
| Conditional gatekeeping | 1 | One sentence |

**Scope:** MOVE target `build/ai-and-agents/realtime-ai/comfystream/overview.mdx`. Same as above — 11 REVIEW flags need resolution against ComfyStream README.

**Verdict:** verification work + 1 sentence fix. No SME needed.

### `build1/byoc.mdx` (12.9 KB)

| Violation | Count | Scope |
|---|---|---|
| REVIEW flags | 6 | Six distinct unverified claims |
| Em-dash | 1 | One paragraph |

**Scope:** MOVE target `build/compute/byoc/overview.mdx`.

**Canonical sources available:**
- `livepeer-app-pipelines` and `byoc-example-apps` repo READMEs (`muxionlabs/`)
- BYOC PR #3641 (per-second compute)
- `diagrams2.mdx` infra inventory layer (lines 1155+)

**Verdict:** verification + em-dash. No SME needed.

### `build1/model-support.mdx` (10.2 KB)

| Violation | Count | Scope |
|---|---|---|
| REVIEW flags | 5 | Five distinct unverified claims |

**Scope:** MOVE target `build/ai-and-agents/model-support.mdx`.

**Canonical sources available:**
- `aiModels.json` in ai-runner repo (authoritative per `diagrams.mdx` Persona 1 map)
- 11 native pipelines listed in `diagrams.mdx` Persona 1
- `diagrams2.mdx` infra inventory + verification log §5 (Storyboard 40 BYOC reconciliation)

**Verdict:** verification supported. No SME needed.

## Tier 3 — Frontmatter or single-issue fixes (minor)

### `navigator.mdx` (9.7 KB) — graded "rewrite" due to Studio refs

| Violation | Count | Scope |
|---|---|---|
| Studio framing | 6 | Inline mentions of Studio in routing prose |
| Question heading | 1 | One H-level question |

**Scope:** Studio refs become routing acknowledgements (per project rule 3, navigator is allowed to reference Studio as a destination but not as primary). Question heading rewrite per `naming` rule.

**Verdict:** minor in-place edits. KEEP classification still correct.

### `concepts/diagrams.mdx` — Task 1 finding overrides Task 3 grade

| Violation | Count | Scope |
|---|---|---|
| Em-dash | 12 | All in section headings ("Persona 1 — AI Persona") and Mermaid label text |
| US-spelling false positives | 40 | All `color:` in Mermaid classDef (false positive) |
| Frontmatter | 1/8 | Missing 7 fields |
| Title `# Personas` followed by `# Persona infrastructure maps` | duplicate H1 | One-line fix |

**Scope:** Task 1 §F.2 already prescribed: rename to `concepts/infra-stack.mdx`, strip duplicate H1, add frontmatter fields. Em-dashes in section headings can be replaced with colons or hyphens per `copy-rules`.

**Verdict:** rename + frontmatter + em-dash sweep. Mermaid `color:` lines are false-positive, no fix needed.

### `concepts/diagrams2.mdx` — Task 1 finding overrides Task 3 grade

| Violation | Count | Scope |
|---|---|---|
| Em-dash | 38 | Mostly Mermaid label text + section headings |
| US-spelling false positives | 142 | All `color:` in Mermaid classDef (false positive) |
| Studio framing | 5 | Persona A in Part 1 (violation per Task 1 §E.4) |
| Frontmatter | 4/8 | Missing 4 fields |

**Scope:** Task 1 §F.2 already prescribed SPLIT into multiple `_workspace/` files. No in-place rewrite — the file ceases to exist in `concepts/`.

**Verdict:** SPLIT, not rewrite.

### `concepts/notes.mdx` — workspace doc misfiled

| Violation | Count | Scope |
|---|---|---|
| Em-dash | 35 | Mermaid + section headings + narrative |
| Question heading | 1 | "#### Questions" + bullets |
| Frontmatter | 1/8 | Missing 7 fields |

**Scope:** MOVE to `_workspace/notes.mdx` per Task 1 §F.2. Not graded for publication standards.

**Verdict:** move, not rewrite.

## Tier 4 — REVIEW-NEEDS-DECISION files

These three files have no IA slot and were classified pending Wonderland's decision in Task 2. Grading them prematurely is meaningless until disposition is decided.

| File | Status | Violations |
|---|---|---|
| `build/tutorials/huggingface-to-livepeer.mdx` (26 KB) | graded "pass" | 0 em-dash, 0 Studio (1 US-spelling FP) — clean if it survives |
| `build/tutorials/huggingface-to-livepeer-advanced.mdx` (45 KB) | graded "pass" | 0 em-dash, 0 Studio (0 spelling) — clean if it survives |
| `build1/sdk-gateway.mdx` | graded "needs-work" | 2 Studio refs |
| `build1/workload-fit.mdx` | graded "needs-work" | 1 question heading; MERGE target per brief |

Disposition decisions in Task 2 §"Decisions Wonderland must make" item 2. Once decided, grades stand.

## Summary table — rewrite-grade files

| File | Tier | Canonical source available? | Rewrite scope |
|---|---|---|---|
| `concepts/developer-landscape.mdx` | 1 | YES (diagrams + diagrams2 verification log + consolidate.md) | Whole-page |
| `learn/video-on-livepeer.mdx` | 1 | YES (Persona 2/4 maps + Frameworks README) | Whole-page |
| `guides/ai/troubleshooting.mdx` | 1 | YES (Remote_signers.md + go-lp source) | Whole-page |
| `resources/reference/apis.mdx` | 1 | YES (OpenAPI + apis-expanded.mdx draft) | Whole-page |
| `learn/ai-on-livepeer.mdx` | 1 | YES | Section |
| `concepts/developer-stack` + `concepts1/oss-stack` | 1 | YES | Merge + section |
| `concepts/ecosystem-map.mdx` | 2 | YES (verification log items 1-3) | Section (merge target) |
| `guides/ai/authentication.mdx` | 2 | YES (Cloud SPE + go-lp READMEs) | Section |
| `guides/ai/production-checklist.mdx` | 2 | YES | Section + scope broadening |
| `get-started/ai-quickstart.mdx` | 2 | YES (Cloud SPE public docs + SDK READMEs) | Whole-page |
| `get-started/comfystream-quickstart.mdx` | 2 | YES (ComfyStream README) | Flag-resolution only |
| `build1/comfystream.mdx` | 2 | YES (ComfyStream README) | Flag-resolution + 1 sentence |
| `build1/byoc.mdx` | 2 | YES (BYOC repo + PR #3641) | Flag-resolution + em-dash |
| `build1/model-support.mdx` | 2 | YES (aiModels.json + verification log §5) | Flag-resolution |
| `navigator.mdx` | 3 | YES (Studio routing pattern documented) | Minor edits |
| `concepts/diagrams.mdx` | 3 | n/a (Task 1 prescribes rename) | Frontmatter + em-dash |
| `concepts/diagrams2.mdx` | 3 | n/a (Task 1 prescribes SPLIT) | No in-place edit |
| `concepts/notes.mdx` | 3 | n/a (Task 1 prescribes MOVE) | No in-place edit |

**Per project rule 2 (NO SMEs):** every Tier 1 and Tier 2 rewrite is verifiable against a canonical source. Zero files require SME consultation. The `diagrams2.mdx` verification log §1–8 demonstrates the pattern (8 items resolved against named sources): apply that pattern to every REVIEW flag and every Studio claim.
