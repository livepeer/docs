# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Dual Mode Configuration'` | PASS | |
| `sidebarTitle` | Yes | `'Dual Mode'` | PASS | |
| `description` | Yes | `Configure your orchestrator node to serve both video transcoding and AI inference jobs from a single go-livepeer process.` | PASS | 100 chars, subject-first, UK English, no self-reference |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias — must migrate to `instruction` |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `setup` | FAIL | Deprecated alias — canonical: `configure` |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | Yes | 10 keywords | PASS | Specific: `aiWorker`, `aiModels`, `NVENC`, `dual-workload` |
| OG image block | Yes | All 5 OG fields | PASS | Correct path `/en/orchestrators.png` |
| `veracityStatus` | ABSENT | — | FAIL | Required; open REVIEW flags require `unverified` |
| `industry` | ABSENT | — | FAIL | Required (P41) |
| `niche` | ABSENT | — | FAIL | Required (P41) |

**Required field count:** 7/10 required fields present (treating `industry`, `niche`, `veracityStatus` as required). Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Plus `pageType` and `purpose` require correction.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is deprecated 12-type. Must migrate to `pageType: instruction`. Per §1.1 migration table, co-fix: set `pageVariant: quickstart` if quickstart framing intended (P42 — not an independent finding) |
| 1.3 | `pageVariant` valid if present | N/A | Co-fix of 1.2; not an independent finding (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `setup` is a deprecated alias (type (a): deprecated alias in old schema). Canonical: `configure` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: setup` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. Multiple REVIEW flags in TODO block; page is `status: draft`. Must be `veracityStatus: unverified`. Per P39: `status: draft` + `veracityStatus: unverified` is the correct combination here |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | 100 chars, subject-first, no self-reference, UK English |
| 1.12 | OG image block complete | PASS | All 5 OG fields present, correct path |
| 1.13 | `keywords` field quality | PASS | `aiWorker`, `aiModels`, `NVENC`, `dual-workload`, `AI inference` — searcher-intent-aligned |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

---

## Category 2 — VOICE & COPY

**UK English scan (P54 — US spellings only):**
`behavior/behaviour` — not found. `-ize` endings — not found. `color/colour` — not found. `center/centre` — not found. No US spelling violations.

**Banned word scan — all candidates checked:**
`effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `real` (intensifier) — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. All clean.

**Banned phrase scan — all candidates checked:**
`This section covers` — absent. `This page covers` — absent. `rather than` — absent. `can generate`/`may produce` in value claims — absent. `depends on various` — absent. `etc.` — absent. `and so on` — absent. `it should be noted` — absent. All clean.

**Em-dash scan (P30 — all visible text including CustomDivider props and StyledStep title props per P48):**
CustomDivider middleText props: "What Changes", "Before You Start", "Setup", "Verify", "Resource Management" — no em-dashes. StyledStep title props: "Download model weights", "Create aiModels.json", "Start go-livepeer", "Activate on-chain", "Add AI flags to your start command" — no em-dashes. Body prose, table cells, code blocks — no em-dashes. PASS.

**Banned construction scan — all `can/may/could/might` and `not [X]` candidates:**

| Location | Text | Type | Classification |
|---|---|---|---|
| Line ~349 | "AI pipelines that remain absent externally for two to three minutes after startup usually point to a container startup or registration issue." | Implicit `if [condition]` in diagnostic | BORDERLINE — diagnostic statement in troubleshooting context; "usually" hedges. Per P23, no exemption invented — flagging as BORDERLINE for human review |
| Line ~59 | "requires no changes to your on-chain registration" | `not [X]` construction | PASS — states what is unchanged as a positive benefit, not as a primary negative claim |
| Line ~158 | "Replace `PIPELINE` and `MODEL_ID` with your chosen values" — no `can/may` | N/A | PASS |

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | All candidates checked; none found |
| 2.3 | Zero banned phrases | PASS | All candidates checked; none found |
| 2.4 | Zero banned constructions | PASS | Line ~349 "usually point to" is BORDERLINE. Per P23, flagging for human review but not calling FAIL on ambiguous diagnostic context. No confirmed `not [X]` primary statements, no `This page [verb]`, no `can/may [verb]` in value claims found |
| 2.5 | Opening order correct | PASS | Opens with definition and value (two revenue streams, no on-chain changes). Outcome precedes mechanism |
| 2.6 | Paragraph discipline | PASS | Single-topic paragraphs; lead sentences state facts; close on fact or next step |
| 2.7 | Audience register correct | PASS | Hardware-level technical register: `NVENC/NVDEC`, `VRAM`, `CUDA`. No hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | Orchestrator prohibited: `easy to set up` — absent; `the network rewards you for` — absent; `Your orchestrator will automatically` — absent |
| 2.9 | No passive value statements | PASS | Earnings described with mechanism (ETH via probabilistic micropayments) and live link |
| 2.10 | No hedging openers | PASS | Opens with definition, not caveat |
| 2.11 | Terminology locked and consistent | PASS | `Dual Mode`, `NVENC/NVDEC`, `CUDA`, `probabilistic micropayments`, `active set`, `aiModels.json` used correctly throughout |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading is excluded from all scoring and checks per P16. Treated as invisible.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| What Changes | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Before You Start | 3 | 2 | 4 | 4 | 5 | 18/25 | FAIL |
| Setup | 3 | 2 | 4 | 3 | 5 | 17/25 | FAIL |
| Verify | 4 | 4 | 5 | 5 | 5 | 23/25 | PASS |
| Resource Management | 3 | 3 | 4 | 4 | 5 | 19/25 | FAIL |
| Why contention is lower than expected | 1 | 2 | 2 | 2 | 1 | 8/25 | FAIL |
| GPU class and viable AI pipelines | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL |
| Earnings | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |

**Rename proposals (all validated against check 3.2 prohibited list per P18 — none introduce banned terms):**
- `Before You Start` → `Prerequisites`
- `Setup` → `Configuration Steps`
- `Resource Management` → `GPU Resource Allocation`
- `Why contention is lower than expected` → `GPU Execution Isolation` (names the concept; removes question form per CLAUDE.md headings rule)
- `GPU class and viable AI pipelines` → `Viable Pipelines by GPU`

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | FAIL | 5 headings below threshold: Before You Start (18), Setup (17), Resource Management (19), Why contention is lower than expected (8), GPU class and viable AI pipelines (19) |
| 3.2 | No banned/weak standalone terms | FAIL | `Why contention is lower than expected` violates CLAUDE.md "No questions in headings" (question-form heading as a statement). Also: "Before You Start" is Avoid-tier form |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Setup` has no domain anchor — ambiguous in isolation. `Earnings` is sufficient given page context but borderline |
| 3.5 | Heading names concept, not examples | PASS | `GPU class and viable AI pipelines` names the concept; GPU models are in the table |
| 3.6 | Title well-formed | PASS | `Dual Mode Configuration` — 3 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | `Before You Start` and `Why contention is lower than expected` are not expert editorial choices. `Setup` is a safe generic label |

**Category 3 verdict: FAIL** — 4 checks fail: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure a go-livepeer node for dual video+AI workloads |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator configure a single go-livepeer process to serve both video transcoding and AI inference jobs." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence (lines 2883–2891): `setup-options` → `siphon-setup` → `dual-mode-configuration` → `orchestrator-transcoder-setup`. Reader from `siphon-setup` has deployment context. Reader leaving to `orchestrator-transcoder-setup` knows split architecture. Coherent |
| 4.4 | No dead ends | PASS | Related Pages links to AI Pipelines, Gateway Relationships, Earnings, FAQ |
| 4.5 | Prerequisites stated or linked | PASS | "Before You Start" section states hardware, OS, Docker/NVIDIA toolkit, wallet state, model weights — all linked |
| 4.6 | Out-of-scope is clear | PASS | Scope is dual-mode configuration only; AI-only and video-only paths are implicit |
| 4.7 | Information type per section correct | PASS | `purpose: configure` permits procedural, technical, factual (primary/secondary). All sections align: intro (conceptual/technical), prerequisites (factual), setup steps (procedural), verify (procedural), resource management (technical/factual), earnings (factual) |
| 4.8 | No content duplication from adjacent sections | PASS | No verbatim duplication from adjacent pages |
| 4.9 | Section orientation page present | INFO | Section-level check. `setup-options.mdx` is the section entry page |
| 4.10 | Cross-tab links at journey intersections | INFO | Tab-level check. No cross-tab internal links — appropriate for this page |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component-vs-matrix cross-reference:** `component-layout-decisions.mdx` was read. Matrix for `how_to` (deprecated) / canonical equivalent `instruction`: required sections = Prerequisites + Steps; preferred = Steps, Step, CodeGroup, Warning, Check, Tip; avoid = Coming Soon, PreviewCallout.

**Components used and classification:**

| Component | Used? | Preferred for `instruction`? | Status |
|---|---|---|---|
| `StyledSteps` / `StyledStep` | Yes | Custom equivalent of Steps/Step | NOT-TESTED (custom component — not in matrix) |
| `Tabs` / `Tab` | Yes | Not in preferred list, not in avoid | PASS (multi-path content) |
| `StyledTable` | Yes | Not in preferred list (not forbidden) | NOT-TESTED |
| `CustomDivider` | Yes | Not in matrix | NOT-TESTED |
| `BorderedBox` | Yes | Not in matrix | NOT-TESTED |
| `LinkArrow` | Yes | Not in matrix | NOT-TESTED |
| `Badge` | Yes (inline prose) | Not in matrix | NOT-TESTED |
| `CardGroup` / `Card` | Yes (Related Pages) | Not preferred for instruction | NOT-TESTED |
| `Note` | Yes | Preferred — yes | PASS |

Per P22: custom components not in the matrix are NOT-TESTED, not FAIL. `component-framework-canonical.mdx` not read.

**Import dead-import check:** 5 imports declared. All (`LinkArrow`, `StyledTable/TableRow/TableCell`, `CustomDivider`, `BorderedBox`, `StyledSteps/StyledStep`) are used in the page. No dead imports.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `how_to` is deprecated. Structure matches `instruction` requirements (Prerequisites, Steps present). Taxonomy mismatch only |
| 5.2 | Required sections present | PASS | Prerequisites (Before You Start), Steps (StyledSteps in both tabs), Verify, Next Steps equivalent (Related Pages) |
| 5.3 | Only approved components used | NOT-TESTED | Custom components not verified against component-framework-canonical (P22) |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`. TODO is in MDX comment — not rendered |
| 5.5 | Info type → component mapping correct | PASS | Procedural → StyledSteps. Multi-path → Tabs. Reference data → StyledTable. Notes → Note. Correct |
| 5.6 | MDX renders clean | PASS | All JSX properly closed. All imports used. No unclosed tags detected in static review |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` deprecated 12-type. `purpose: setup` deprecated alias. Same root cause as 1.2/1.4 |
| 5.8 | CSS uses custom properties only | INFO | `iconColor="#2d9a67"` in StyledSteps is a hardcoded hex. `titleColor="var(--accent)"` is correct. Requires confirmation whether `#2d9a67` maps to a CSS custom property in the design system |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct subdirectory imports, no dead imports |

**Category 5 verdict: FAIL** — 2 checks fail: 5.1, 5.7 (same root cause as 1.2/1.4)

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|---|---|---|
| "Video transcoding routes through NVENC and NVDEC" | technical | REVIEW flag present — requires SME |
| "-serviceAddr port 8935" for combined node | procedural | REVIEW flag present — requires SME confirmation |
| `dl_checkpoints.sh` command syntax | procedural | REVIEW flag present — requires SME |
| VRAM figures in resource table (8–12 GB, 10–12 GB, 24 GB per GPU class) | technical/factual | REVIEW flag present; RTX 2060 base has 6 GB (not 8 GB) — candidate factual error |
| `-nvidia 0` GPU assignment syntax | procedural | Unreviewed — no REVIEW flag |
| "active set requires top 100 orchestrators by total stake" | factual | Unreviewed — no REVIEW flag |
| `curl http://localhost:7935/getNetworkCapabilities` API endpoint | technical | Unreviewed |
| `price_per_unit: 4768371` (labelled as illustrative) | evaluative | PASS — correctly caveated |
| "2-3 minutes" diagnostic timing | analytical | Unreviewed |
| Docker image tags `livepeer/go-livepeer:master`, `livepeer/ai-runner:latest` | procedural | Mutable tags — staleness risk |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Multiple claims lack primary source citations: active set threshold, API endpoint, `-nvidia` syntax, diagnostic timing |
| 6.2 | Code/commands tested | FAIL | REVIEW flags explicitly flag `-serviceAddr` port, `dl_checkpoints.sh` syntax as requiring SME verification |
| 6.3 | No deprecated API usage | NOT-TESTED | `-aiWorker`, `-aiModels`, `-aiModelsDir` flags not verified against current go-livepeer release |
| 6.4 | Numbers are real | FAIL | VRAM table row "RTX 2060 / 3060 — 8-12 GB": base RTX 2060 has 6 GB VRAM (NVIDIA datasheet). Range "8-12 GB" incorrect for base model. Candidate factual error (P53 language: not "appears to be" — primary source is unambiguous) |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW flags in TODO block cover port, `dl_checkpoints.sh`, VRAM, earnings estimates |
| 6.6 | `veracityStatus` honest | FAIL | Absent. Given REVIEW flags and draft status, must be `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary content |
| 6.8 | Source staleness check | FAIL | `livepeer/go-livepeer:master` and `livepeer/ai-runner:latest` are mutable Docker tags — resolve to different images over time |
| 6.9 | No open-ended research tasks | FAIL | "REVIEW: Confirm complete dual-mode flag set with Rick" names a person but no canonical document. "Add illustrative figures once Explorer pricing data confirmed" — open-ended, no named source |

**Category 6 verdict: FAIL** — 6 checks fail: 6.1, 6.2, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/deployment-details/dual-mode-configuration` at docs.json line 2887 |
| 7.2 | Navigation matches file system | PASS | File exists at declared path |
| 7.3 | Tab entry portal routes to all sections | INFO | Section-level check — not page-level |
| 7.4 | No structural orphans | PASS | Reachable via Deployment Details navigation group |
| 7.5 | Audience journey complete | PASS | Prerequisites → setup steps → verify → related pages. Complete arc |
| 7.6 | Cross-tab graduation paths exist | INFO | Tab-level check. No cross-tab links required for this specific page |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` publishable lane |
| 7.8 | File naming conventions | PASS | `dual-mode-configuration.mdx` — no prefix required, descriptive filename |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/` |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P47 — full path against docs.json):**

| Link href | Full path in docs.json? | Line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/operator-considerations/requirements` | Yes | 2879 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | Yes | 2899 | PASS |
| `/v2/orchestrators/guides/advanced-operations/gateway-relationships` | Yes | 2939 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | Yes | 2910 | PASS |
| `/v2/orchestrators/resources/faq` | Yes | 2969 | PASS |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links verified in docs.json |
| 8.2 | All external links live | NOT-TESTED | 4 external URLs: `tools.livepeer.cloud/ai/network-capabilities`, `explorer.livepeer.org/orchestrators`, `explorer.livepeer.org`, `tools.livepeer.cloud` — not verified |
| 8.3 | All snippet imports resolve | INFO | 5 snippet imports. Standard paths — not individually verified for file existence |
| 8.4 | All images load | N/A | No inline images. OG image path not verified |
| 8.5 | Page renders without error | INFO | JSX appears well-formed. Cannot confirm without `npx mintlify dev` |
| 8.6 | No TODO/TBD in published content | PASS | `{/* TODO: */}` block is an MDX comment — not rendered in published output |

**Category 8 verdict: PASS**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: draft` — no sign-off evidence |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions apparent requiring registry entries |
| 9.3 | Gate prerequisites met | FAIL | Tab-status: Orchestrators IA not approved. Page at Phase 7 veracity pass per project state — legitimate pipeline position |
| 9.4 | Phase ordering respected | INFO | Cannot confirm from file alone |
| 9.5 | Findings gathered before fixes | PASS | This report constitutes structured review |
| 9.6 | Feedback routed | INFO | To be completed after report delivery |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

- **C1 — Deprecated taxonomy (1.2, 1.4, 5.1, 5.7):** `pageType: how_to` and `purpose: setup` are both deprecated. Single root cause. Fix both in one pass; 5.1 and 5.7 resolve automatically.
- **C2 — Veracity and veracityStatus (1.8, 6.1, 6.2, 6.4, 6.6, 6.9):** `veracityStatus` absence is the frontmatter expression of the underlying veracity problem. Until REVIEW flags resolve (BD-2), `veracityStatus: unverified` is the only honest value. Per P39, `status: draft` + `veracityStatus: unverified` is the correct combination — do not change `status`.
- **C3 — Heading quality (3.1, 3.2, 3.7):** `Why contention is lower than expected` is the worst heading (8/25) and also violates the question-in-headings rule. Fixing this resolves all three checks for that heading. Other headings are below threshold but not rule violations.
- **C4 — RTX 2060 VRAM error (6.4) and REVIEW flag (6.5):** REVIEW flag covers VRAM figures generally but the RTX 2060 base model (6 GB) error is a specific factual discrepancy not explicitly named in the REVIEW comment.

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | pageType migration target: `instruction` plain vs `instruction + pageVariant: quickstart` | F-01 fix execution | Alison |
| BD-2 | SME sign-off on REVIEW flags: `-serviceAddr` port, `dl_checkpoints.sh` syntax, VRAM figures (especially RTX 2060 base VRAM) | F-06, F-10 — veracity pass | Rick + Alison |
| BD-3 | Confirm `purpose: configure` vs `purpose: start` for this page | F-02 fix execution | Alison |

---

## Verdict Summary

**Overall: NEEDS WORK**

**21 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.4, 3.7, 5.1, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3**

Content and structure are strong. All CRITICAL/HIGH failures are in taxonomy (deprecated values, missing required fields), veracity (SME-gated), and governance (pre-sign-off). No REWRITE needed.

---

## Prioritised Fix List

**F-01 — CRITICAL** (1.2, 5.1, 5.7): Deprecated `pageType: how_to`
Fix: `pageType: instruction`. Confirm `pageVariant` per BD-1.
Proposed: `pageType: instruction` — confirm before applying.

**F-02 — HIGH** (1.4): Deprecated `purpose: setup`
Fix: `purpose: configure`.
Proposed: `purpose: configure` — confirm before applying (BD-3).

**F-03 — HIGH** (1.8, 6.6): Missing `veracityStatus`
Fix: `veracityStatus: unverified`. Do not change `status: draft`.
Proposed: `veracityStatus: unverified` — confirm before applying.

**F-04 — HIGH** (1.9, P41): Missing `industry`
Fix: `industry: ["technical", "AI"]`.
Proposed: `industry: ["technical", "AI"]` — confirm before applying.

**F-05 — HIGH** (1.10, P41): Missing `niche`
Fix: `niche: ["infrastructure", "AI"]`.
Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying.

**F-06 — HIGH** (1.6): Missing `complexity`
Fix: `complexity: intermediate`.
Proposed: `complexity: intermediate` — confirm before applying.

**F-07 — HIGH** (1.7): Missing `lifecycleStage`
Fix: `lifecycleStage: setup`.
Proposed: `lifecycleStage: setup` — confirm before applying.

**F-08 — HIGH** (6.4): RTX 2060 base VRAM listed as 8-12 GB — base RTX 2060 has 6 GB VRAM
Fix: SME to verify against NVIDIA datasheet. Correct row to "RTX 2060 Super / 3060" (12 GB) or "RTX 2060 (base)" (6 GB) separately.

**F-09 — HIGH** (6.1, 6.2, 6.9): Open REVIEW flags — SME sign-off required on port, command syntax, VRAM figures
Fix: BD-2 resolution required. Until resolved, `veracityStatus: unverified` stays.

**F-10 — MEDIUM** (3.1, 3.2): Heading `Why contention is lower than expected` (8/25)
Fix: Rename to `GPU Execution Isolation`.

**F-11 — MEDIUM** (3.1): Heading `Before You Start` (18/25)
Fix: Rename to `Prerequisites`.

**F-12 — MEDIUM** (3.1, 3.4): Heading `Setup` (17/25)
Fix: Rename to `Configuration Steps`.

**F-13 — MEDIUM** (3.1): Heading `Resource Management` (19/25)
Fix: Rename to `GPU Resource Allocation`.

**F-14 — MEDIUM** (3.1): Heading `GPU class and viable AI pipelines` (19/25)
Fix: Rename to `Viable Pipelines by GPU`.

**F-15 — MEDIUM** (6.8): Mutable Docker tags `master` and `latest`
Fix: Pin to specific release tags in the start commands, or add a note advising readers to check the latest release.

**F-16 — INFO** (5.8): Hardcoded hex `#2d9a67` in `StyledSteps iconColor` prop
Fix: Confirm whether `#2d9a67` maps to a CSS custom property. If not, replace with `var(--accent)` or the appropriate custom property.
