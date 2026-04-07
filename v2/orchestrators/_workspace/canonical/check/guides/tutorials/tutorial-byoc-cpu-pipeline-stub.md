# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` — stub file searched; NOT FOUND (see Category 7)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Add AI: BYOC CPU Pipeline` | FAIL | Non-canonical field for rendered pages — present but see notes. Em-dash absent: PASS. |
| `sidebarTitle` | ABSENT | — | FAIL | Required field missing |
| `description` | Yes | `Build a custom AI pipeline container and route jobs through your gateway — no GPU required` | FAIL | Contains em-dash (`—`). Em-dash prohibition applies to all visible text including frontmatter description (P30) |
| `pageType` | ABSENT | — | FAIL | Required field missing |
| `audience` | ABSENT | — | FAIL | Required field missing |
| `purpose` | ABSENT | — | FAIL | Required field missing |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | ABSENT | — | FAIL | Required field missing |
| `industry` | ABSENT | — | FAIL | Required — required (P41) |
| `niche` | ABSENT | — | FAIL | Required — required (P41) |
| OG image block | ABSENT | — | FAIL | Required — all 5 OG fields absent |
| `status` | Yes | `stub` | INFO | Non-canonical status value — signals incomplete state |
| `tutorial` | Yes | `2-of-3` | INFO | Non-standard frontmatter field — not part of canonical 10-field schema |

**Required field count:** 1/10 (description present but fails; all other required fields absent). Missing: `sidebarTitle`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG image block, `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Only `title` and `description` present from required set; description itself fails (em-dash). `sidebarTitle`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG block, `industry`, `niche` all absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | Field absent. Proposed: `pageType: tutorial` — confirm before applying |
| 1.3 | `pageVariant` valid if present | N/A — not present; no deprecated pageType to migrate | |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: build` — confirm before applying |
| 1.5 | `audience` uses 7-token set | FAIL | Field absent. Proposed: `audience: orchestrator` or `audience: gateway` (see Blocking Decision BD-1) — confirm before applying |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: build` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Page is a stub — `veracityStatus: unverified` is the correct value for any content state |
| 1.9 | `industry` valid if present | FAIL | Absent — required (P41). Proposed: `industry: [AI, technical]` — confirm before applying |
| 1.10 | `niche` valid if present | FAIL | Absent — required (P41). Proposed: `niche: [AI, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Contains em-dash (`—`). Proposed fix: `Build a custom AI pipeline container and route jobs through your gateway. No GPU required.` (72 chars) — confirm before applying. Also: description should not mention what the page does NOT do as primary descriptor |
| 1.12 | OG image block complete | FAIL | All 5 OG fields absent |
| 1.13 | `keywords` field quality | FAIL | Field absent |

**Category 1 verdict: FAIL** — 12 checks fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

---

## Category 2 — VOICE & COPY

**NOTE:** Stub has minimal prose. The rendered content is a `<Note>This page is a stub. Content to be developed.</Note>` block and an outline structure. Most copy checks are NOT-TESTED or N/A due to absence of developed content.

### UK English scan (check 2.1)
Outline headings and body text scanned: "What you'll build", "Prerequisites", "Step N — [action]", "What just happened", "Next steps", "Reference files to draw from". No US spellings found.
Result: PASS (limited scope due to stub status).

### Banned words scan (check 2.2)
Text scanned: All outline headings and bullet text.
- "trivial CPU-only processor" — `trivial` is not a banned word.
- No instances of `effectively`, `essentially`, `basically`, `meaningful`, `significant` (intensifier), `various`, `several`, `obviously`, `clearly` found in the minimal stub content.
Result: PASS (limited scope).

### Banned phrases scan (check 2.3)
- No banned phrases in the outline structure.
Result: PASS (limited scope).

### Banned constructions scan (check 2.4)

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| Outline Step headings | "Step 1 — Build a PyTrickle FrameProcessor" | Em-dash (`—`) in heading text | Em-dash prohibition (P30, P48) | YES — FAIL |
| Outline Step headings | "Step 2 — Package as Docker container" | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline Step headings | "Step 3 — Test locally with http-trickle" | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline Step headings | "Step 4 — Wire into gateway → orchestrator" | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline Step headings | "Step 5 (Optional) — Swap in whisper-tiny" | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline | "Next steps" heading | `Next Steps` | Weak heading (check 3.2 Avoid tier) | FLAG — check 3.2 |
| Outline | "Note: ~10x realtime on CPU — functional proof, not production speed" | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Outline description | "no GPU required" | — | Factual scope statement | No |

Note: These em-dashes appear in outline headings (H3 level). Per P30 and P48, step title headings are within scope for em-dash prohibition. All 5 step headings fail.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings in stub content |
| 2.2 | Zero banned words | PASS | No banned words in stub outline |
| 2.3 | Zero banned phrases | PASS | No banned phrases in stub outline |
| 2.4 | Zero banned constructions | FAIL | 6 em-dashes in outline step headings and inline note. Step headings use `Step N — [action]` pattern |
| 2.5 | Opening order correct | NOT-TESTED | No developed content to evaluate |
| 2.6 | Paragraph discipline | NOT-TESTED | No developed prose |
| 2.7 | Audience register correct | NOT-TESTED | No developed content |
| 2.8 | Per-audience prohibited phrases absent | NOT-TESTED | No developed content |
| 2.9 | No passive value statements | NOT-TESTED | No developed content |
| 2.10 | No hedging openers | NOT-TESTED | No developed content |
| 2.11 | Terminology locked and consistent | NOT-TESTED | `PyTrickle`, `FrameProcessor`, `http-trickle`, `BYOC` used in outline — need first-use definition in developed content |

**Category 2 verdict: FAIL** — 1 confirmed fail: 2.4. 7 NOT-TESTED.

---

## Category 3 — SECTION NAMING & HEADINGS

**NOTE:** Outline H3 headings in a stub are working notes, not final rendered headings. Scores reflect the outline state; all will need re-scoring when content is developed.

### Heading Score Table (outline headings only)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| What you'll build | 2 | 2 | 3 | 3 | 4 | 14/25 | Question-like, generic |
| Prerequisites | 5 | 3 | 5 | 5 | 5 | 23/25 | OK |
| Step 1 — Build a PyTrickle FrameProcessor | 4 | 4 | 4 | 3 | 2 | 17/25 | Em-dash, verbose |
| Step 2 — Package as Docker container | 4 | 4 | 5 | 4 | 3 | 20/25 | Em-dash |
| Step 3 — Test locally with http-trickle | 4 | 4 | 5 | 4 | 3 | 20/25 | Em-dash |
| Step 4 — Wire into gateway → orchestrator | 3 | 3 | 4 | 3 | 3 | 16/25 | Em-dash; arrow notation not a heading pattern |
| Step 5 (Optional) — Swap in whisper-tiny | 3 | 3 | 3 | 3 | 2 | 14/25 | Em-dash; optional steps are structural exceptions |
| What just happened | 2 | 2 | 3 | 3 | 4 | 14/25 | Generic retrospective |
| Next steps | 2 | 2 | 4 | 3 | 5 | 16/25 | Avoid-tier term (check 3.2) |
| Reference files to draw from | 1 | 1 | 3 | 2 | 3 | 10/25 | Internal note — must not appear in rendered output |

**All headings below threshold:** All outline H3 headings score below 20/25.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading scores ≥20/25 | FAIL | Only "Prerequisites" and "Step 2 — Package as Docker container" and "Step 3 — Test locally with http-trickle" meet threshold (barely) — and all contain em-dashes |
| 3.2 | No banned or weak standalone heading terms | FAIL | "What you'll build" (question-like); "Next steps" (Avoid-tier per check 3.2); "Reference files to draw from" (internal note — must not be in rendered output) |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings in outline |
| 3.4 | Domain-anchor rule applied | NOT-TESTED | Stub headings are working notes |
| 3.5 | Heading names concept, not examples | FAIL | "Swap in whisper-tiny" names a specific example not the concept |
| 3.6 | Title well-formed | FAIL | `Add AI: BYOC CPU Pipeline` — colon construction is unusual. Content of title names two things (Add AI + BYOC CPU Pipeline). Could be `BYOC CPU Pipeline` (simpler) |
| 3.7 | Sounds like expert editorial choice | FAIL | All outline headings are working draft notes, not final editorial headings |

**Category 3 verdict: FAIL** — 5 checks fail: 3.1, 3.2, 3.5, 3.6, 3.7

### Spelling/Typo Check
Stub content scanned: "PyTrickle", "FrameProcessor", "http-trickle", "whisper-tiny", "BYOC", "async_processor_example.py" — correct technical spellings. No typos in outline content.

---

## Category 4 — PAGE STRUCTURE

**NOTE:** Most structure checks are NOT-TESTED due to stub status. Checks that can be evaluated from the outline are flagged.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | NOT-TESTED | Outline suggests: build a BYOC CPU pipeline container. Audience ambiguous — see BD-1 |
| 4.2 | Purpose statement test passes | NOT-TESTED | No developed content |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | Page is NOT in docs.json. Adjacency cannot be confirmed. Outline references "Tutorial 1" as prerequisite but Tutorial 1 (`tutorial-offchain-transcoding-test`) is also not in docs.json |
| 4.4 | No dead ends | FAIL | "Next steps" in outline references 3 destinations (Page 3, Workloads guide, Developers BYOC guide) but none verified as reachable — stub page has no navigation |
| 4.5 | Prerequisites stated or linked | NOT-TESTED | Prerequisite list in outline: Docker, Python 3.x, Tutorial 1 completion — to be verified in developed content |
| 4.6 | Out-of-scope is clear | NOT-TESTED | Outline implies GPU-free scope — to be verified in developed content |
| 4.7 | Information type per section is correct | NOT-TESTED | No developed content |
| 4.8 | No content duplication | NOT-TESTED | |
| 4.9 | Section orientation page present | NOT-TESTED | |
| 4.10 | Cross-tab links at journey intersections | NOT-TESTED | |

**Category 4 verdict: FAIL** — 2 confirmed fails: 4.3, 4.4. 6 NOT-TESTED.

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | No pageType set. Current structure: `<Note>stub</Note>` + outline markdown. Not a tutorial template |
| 5.2 | Required sections present | FAIL | Tutorial requires: Prerequisites, Steps, Next Steps. These exist only as outline H3 headings, not developed MDX |
| 5.3 | Only approved components used | FAIL | `<Note>` is present with stub content ("Content to be developed") — check 5.4: TODO/stub placeholder in published content |
| 5.4 | Avoided components absent | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` — this is a placeholder in a publishable-lane file |
| 5.5 | Information type → component mapping correct | NOT-TESTED | No developed content |
| 5.6 | MDX renders clean | NOT-TESTED | The `<Note>` component will render. Outline markdown (H3 headings, bullets) will also render. No JSX errors expected from the stub |
| 5.7 | No old-schema frontmatter | NOT-TESTED | No pageType to validate |
| 5.8 | CSS uses custom properties only | N/A — no CSS | |
| 5.9 | Generated file banners intact | N/A — not generated | |
| 5.10 | Component naming/import conventions | FAIL | No imports. A publishable MDX tutorial file requires component imports |

**Category 5 verdict: FAIL** — 4 confirmed fails: 5.1, 5.2, 5.4, 5.10

---

## Category 6 — VERACITY

**NOTE:** Stub has no factual claims in developed prose. The outline contains technical references that will need verification when content is developed.

### Veracity Claims Inventory (from outline)

| Claim | Location | Type | Status |
|-------|----------|------|--------|
| PyTrickle `async_processor_example.py` green-tint example exists | Outline | structural | NOT-TESTED |
| `python:3.11-slim` base image for CPU container | Outline | technical | NOT-TESTED |
| whisper-tiny: 79M params, CPU mode, "~10x realtime on CPU" | Outline | evaluative | NOT-TESTED — "~10x realtime" is a performance claim |
| `model = whisper.load_model("tiny", device="cpu")` | Outline | technical | NOT-TESTED |
| `j0sh/http-trickle` exists on GitHub | Reference | structural | NOT-TESTED |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | NOT-TESTED | No developed content. Outline claims need verification before content is written |
| 6.2 | Code/commands tested | NOT-TESTED | No code in developed content |
| 6.3 | No deprecated API usage | NOT-TESTED | |
| 6.4 | Numbers are real | NOT-TESTED | "~10x realtime on CPU" (outline) — not sourced |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW or FACT CHECK flags. Outline contains performance claims that will need flagging |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Correct value: `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | |
| 6.8 | Source staleness check | NOT-TESTED | |
| 6.9 | No open-ended research tasks | FAIL | Entire outline is an open-ended research task — "Reference files to draw from" section lists sources but no verification status |

**Category 6 verdict: FAIL** — 3 confirmed fails: 6.5, 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | FAIL | **BLOCKING DECISION.** File searched across entire docs.json — NOT FOUND. The stubs directory `gateway-tutorial-composable-pages/stubs/` has no entry in docs.json. The page is a structural orphan |
| 7.2 | Navigation matches file system | FAIL | Not in docs.json — file system entry exists but nav entry does not |
| 7.3 | Tab entry portal routes to all sections | FAIL | Not reachable from any portal or navigation group |
| 7.4 | No structural orphans | FAIL | Page is unreachable from any navigation path |
| 7.5 | Audience journey complete | NOT-TESTED | Page is unreachable; no journey to evaluate |
| 7.6 | Cross-tab graduation paths exist | NOT-TESTED | |
| 7.7 | File in correct lane | FAIL | File is in `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/` — `stubs/` subdirectory under a published path. This is ambiguous: the file is not in `_workspace/` but it's also not ready to publish. Stubs in a publishable lane without docs.json entries violate file governance |
| 7.8 | File naming conventions | PASS | Filename: `tutorial-byoc-cpu-pipeline.mdx` — lowercase hyphenated, no problematic prefix |
| 7.9 | `_workspace/` TTL compliance | N/A — not a workspace file, but see check 7.7 | |

**Category 7 verdict: FAIL** — 5 checks fail: 7.1, 7.2, 7.3, 7.4, 7.7

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | All internal links resolve | NOT-TESTED | No internal links in stub content |
| 8.2 | All external links live | NOT-TESTED | Reference section lists GitHub URLs but these are not MDX links — they are outline notes |
| 8.3 | All snippet imports resolve | N/A — no imports | |
| 8.4 | All images load | N/A — no images | |
| 8.5 | Page renders without error | PASS | Minimal content: frontmatter + H1 + `<Note>` + outline markdown. `<Note>` renders if the Mintlify Note component is available without explicit import (standard Mintlify behaviour). No JSX errors expected |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` — explicit stub placeholder in a publishable-lane file marked `status: stub` |

**Category 8 verdict: FAIL** — 1 fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off. Stub content. |
| 9.2 | All consuming decisions in registry | FAIL | The audience for this page (orchestrator vs gateway) is unresolved — see BD-1. No registry entry |
| 9.3 | Gate prerequisites met | FAIL | Page is in publishable lane, not in docs.json, and has no developed content. Multiple gate prerequisites not met |
| 9.4 | Phase ordering respected | FAIL | Content writing has not begun. No veracity, layout, or naming passes possible |
| 9.5 | Findings gathered before fixes | N/A — this is the findings report | |
| 9.6 | Feedback routed | NOT-TESTED | |

**STUB GOVERNANCE FLAG:** Stub content must be completed before this page can ship (mandatory per the instructions for this check run). The page requires: (1) full content written, (2) all frontmatter fields added, (3) docs.json entry added in the correct navigation position, (4) audience decision resolved (BD-1).

**Category 9 verdict: FAIL** — 4 checks fail: 9.1, 9.2, 9.3, 9.4

---

## Cross-Category Connections

**Root Cause 1: Page is a stub — no developed content**
Affects: Almost all checks. Most NOT-TESTED results trace to this single cause.
Fix: Write content to complete the page before any further check categories are actionable.

**Root Cause 2: Page not in docs.json — structural orphan**
Affects: Cat 7.1 + 7.2 + 7.3 + 7.4 + 7.7 + 4.3 + 4.4 (navigation)
Fix: BLOCKING DECISION required (BD-1 and BD-2). Resolve audience and navigation position before adding to docs.json.

**Root Cause 3: Em-dashes in outline step headings**
Affects: Cat 2.4 + 3.1 + 3.7
Fix: When content is written, all step headings must use `:` not `—`. Example: `Step 1: Build a PyTrickle FrameProcessor`.

**Root Cause 4: Missing all required frontmatter fields**
Affects: Cat 1.1 through 1.13
Fix: All 10 required fields must be added when content is developed.

---

## Blocking Decisions

**BD-1 — BLOCKING: Audience assignment**
This page sits in `v2/orchestrators/guides/tutorials/` but the outline references gateway-side concepts (gateway startup, `-orchAddr` flag). The `gateway-tutorial-composable-pages` directory name further suggests this may be a gateway tab page that was placed in the orchestrators directory.
Options: [A] `audience: orchestrator` — for orchestrators learning gateway-side interactions; [B] `audience: gateway` — page moves to `v2/gateways/guides/tutorials/`
If A: page stays in current location, links to orchestrators docs.json group.
If B: page moves to gateway tab and is added to gateway tutorials nav group.
Blocks: frontmatter 1.5, docs.json entry (7.1), navigation position (4.3)

**BD-2 — BLOCKING: docs.json entry and navigation position**
Page is not in docs.json. Before content is written, a navigation position must be decided: which group, what position, what PREV/NEXT.
Note: docs.json line 2589 lists `v2/gateways/guides/tutorials/byoc-cpu-tutorial` and lines 2634–2636 list `tutorial-1-offchain-transcoding-test`, `tutorial-2-byoc-cpu-pipeline`, `tutorial-3-go-production` under the gateways tab. These appear to be the published gateway tutorial pages. The stubs in `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/` appear to be development drafts for those same pages, placed in the wrong location.
Blocks: All navigation and IA checks.

---

## Verdict Summary

**Overall: REWRITE REQUIRED**

The page is a stub. No content exists to review in most categories. The structural position is unresolved — the page is not in docs.json and the audience assignment is ambiguous given the directory naming (`gateway-tutorial-composable-pages`).

**Checks that fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.1, 3.2, 3.5, 3.6, 3.7, 4.3, 4.4, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4**

**37 checks fail. Multiple NOT-TESTED due to stub status.**

---

## Prioritised Fix List

**F-01 — CRITICAL — Resolve audience and location (BD-1 + BD-2)**
Determine whether this stub is for an orchestrators tutorial or a gateways tutorial. Compare with existing gateway tutorial pages at `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline` in docs.json (lines 2635). If this stub is a draft of that gateway page, it should be in `_workspace/` not in `v2/orchestrators/`. Human decision required.
Fixes: 7.1, 7.2, 7.3, 7.4, 7.7, 4.3, 1.5

**F-02 — CRITICAL — Add docs.json entry after BD-1 resolution**
Once audience and position are decided, add to docs.json in the correct navigation group with PREV/NEXT confirmed.
Fixes: 7.1, 7.2, 7.3, 7.4

**F-03 — CRITICAL — Write page content**
Stub content must be replaced with developed MDX before any content passes can run. Content must follow the tutorial template: Prerequisites, Steps (using `:` not `—`), What happened, Related Pages.
Fixes: 5.1, 5.2, 5.4, 5.10, 2.5–2.11 (all NOT-TESTED), 4.1–4.10

**F-04 — HIGH — Add all required frontmatter fields when content is written**
Minimum required additions (all proposed — confirm before applying per P51):
```yaml
sidebarTitle: BYOC CPU Pipeline
pageType: tutorial
audience: [resolve via BD-1]
purpose: build
complexity: intermediate
lifecycleStage: build
veracityStatus: unverified
keywords:
  - byoc cpu pipeline livepeer
  - custom ai container orchestrator
  - pytrickle gateway tutorial
  - no gpu ai pipeline livepeer
industry:
  - AI
  - technical
niche:
  - AI
  - infrastructure
og:image: /snippets/assets/site/og-image/en/orchestrators.png
og:image:alt: Livepeer Docs social preview image for Orchestrators
og:image:type: image/png
og:image:width: 1200
og:image:height: 630
```
Fixes: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13

**F-05 — HIGH — Fix description em-dash**
Current: `Build a custom AI pipeline container and route jobs through your gateway — no GPU required`
Proposed: `Build a custom AI pipeline container and route jobs through your gateway. No GPU required.` (78 chars) — confirm before applying.
Fixes: 1.11, 2.4

**F-06 — HIGH — Fix step heading em-dashes in outline (and in developed content)**
Replace all `Step N — [action]` patterns with `Step N: [action]` in developed content.
Fixes: 2.4, 3.1

**F-07 — MEDIUM — Remove "Reference files to draw from" section from rendered output**
The `## Reference files to draw from` section with source list is an internal content brief note. It must not appear in the rendered page. Move to `_workspace/` or delete before publishing.
Fixes: 3.2 (partial)
