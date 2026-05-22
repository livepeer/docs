# Content Scan Prompt
## Phase 2 — Context Layer · Content Scan

**Version**: 1.0
**Date**: 2026-03-23
**Agent type**: General-purpose (no specialist tools required)
**Output**: `context-packs/[tab]-content-scan.md`
**Downstream consumer**: `Prompts-By-Phase/2-structure-audit/structure-audit.md`

---

## Purpose

This prompt reads `docs.json` and all `.mdx` files under `v2/[tab]/` and produces a structured per-page inventory of the tab's content. The output is the primary input to the IA Audit phase (structure-audit.md) and must contain all fields that audit requires.

The scan is read-only. It does not move, edit, or delete any files.

---

## Pre-flight

Before running, confirm:

- [ ] `docs.json` is accessible at repo root
- [ ] `v2/[tab]/` folder exists
- [ ] The downstream phase prompt (`2-structure-audit/structure-audit.md`) has been read — verify your output format provides what it needs before writing a single line of output
- [ ] TAB and TAB_FOLDER are filled in the context block below
- [ ] You understand the 7-type canonical schema (listed in this prompt)

Do NOT begin scanning until all items are checked.

---

## Context Block

*Fill before running.*

```
TAB:        [e.g. Gateways | Orchestrators | Delegators | About | Community | Developers]
TAB_FOLDER: v2/[tab-folder]/
DOCS_JSON:  docs.json
SCAN_DATE:  [YYYY-MM-DD]
```

---

## File-Reading Scope

**Primary scan target**: `v2/[tab]/` — read every `.mdx` file found here.

**Two sources to reconcile**:
1. Extract all page paths from `docs.json` for this tab (v2 version only). These are the navigation-registered pages.
2. Glob `v2/[tab]/**/*.mdx` to find all files on disk for this tab.

Compare the two lists. Any path in docs.json but not on disk = `empty`. Any path on disk but not in docs.json = unlisted (workspace artefact or staging file — list separately, do not scan as production pages).

**v1 paths**: List them for reference in the output header. Do NOT scan v1 content. v1 is legacy reference only.

**Workspace artefacts**: Files under `v2/[tab]/_workspace/` and `v2/[tab]/_workspace/archive/` are not production pages. List them in a separate section of the output (path only, no frontmatter scan required).

---

## Schema Target

Use the **7-type canonical schema** for all pageType assessments:

| Canonical type | Job |
|---|---|
| `navigation` | Routes the reader — portals, tab landings, section roots |
| `concept` | Explains a mechanism or system |
| `tutorial` | Teaches by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup (technical + contextual) |
| `resource` | Curated collections, ecosystem material |

**Deprecated type values** — flag any of these found in frontmatter:

| Deprecated value | Canonical replacement |
|---|---|
| `landing` | `navigation` |
| `overview` | `navigation` or `concept` (context-dependent) |
| `how_to` | `instruction` |
| `quickstart` | `instruction` (with `pageVariant: quickstart`) |
| `faq` | `reference` (with `pageVariant: compendium`) |
| `troubleshooting` | `reference` (with `pageVariant: compendium`) |
| `glossary` | `reference` (with `pageVariant: compendium`) |
| `changelog` | `reference` (with `pageVariant: changelog`) |

When a page uses a deprecated value, record the deprecated value found and the recommended canonical replacement. Do not change the file.

**Unknown type values** — if a `pageType` value is not in the canonical list and not in the deprecated list, flag it as `UNKNOWN_TYPE`.

---

## Status Definitions

Assign one status value to every page:

| Status | Definition |
|---|---|
| `current` | File exists in v2/, no `draft: true` in frontmatter, has ≥100 words of body content, and is in docs.json navigation |
| `draft` | File has `draft: true` in frontmatter — regardless of content length |
| `stub` | File exists and is in docs.json, but has <100 words of body content (after stripping MDX components and code blocks), and `draft` is not set |
| `empty` | Path exists in docs.json navigation but no file exists on disk, OR file exists but is zero bytes |

Note: word count is of body content only — the YAML frontmatter block does not count. Strip MDX component tags (`<ComponentName ...>`) and fenced code blocks before counting words.

---

## Frontmatter Completeness Check

For every page, check these 7 fields against the canonical schema:

| Field | Required | Canonical values |
|---|---|---|
| `title` | Yes | Any non-empty string |
| `description` | Yes | Any non-empty string |
| `pageType` | Yes | 7 canonical types (see Schema Target above) |
| `audience` | Yes | `founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community` |
| `purpose` | Yes | `orient`, `explain`, `choose`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `optimise`, `integrate`, `verify`, `evaluate`, `reference`, `learn`, `update` |
| `lifecycleStage` | Yes | `discover`, `evaluate`, `setup`, `build`, `operate`, `troubleshoot`, `optimise` |
| `veracityStatus` | No (flag if missing) | `verified`, `unverified`, `stale` |

Mark frontmatter completeness as:
- `complete` — all 6 required fields present AND values are from canonical enums
- `partial` — all required fields present but one or more values are deprecated/non-canonical
- `incomplete` — one or more required fields missing entirely

**Important**: An empty `pageType` field (`pageType:` with no value) is `incomplete`, not `partial`. A `pageType: how_to` value is `partial` (deprecated value present).

---

## Content Summary

For each production page (in docs.json, file exists), write a **2–3 sentence holistic summary** of the page's primary job. The summary must answer:
- What is this page FOR? (what job does it do for the reader)
- What does it cover? (topics at a high level)
- Where does it sit in the reader's journey? (first-time vs operational vs reference)

Do not describe what the page looks like. Describe what it does for the reader.

---

## Heading Structure

For each page, extract the H1, H2, and H3 headings. Record them in order. If there are no headings, note that explicitly (this is an issue to flag for structure-audit.md).

---

## Known Failure Modes

**Failure: Scanning v1 content instead of v2**
Prevention: Extract the v2 navigation block from docs.json explicitly. Confirm all page paths start with `v2/`. If any path starts with `v1/`, it is v1 content — list it in the v1 reference section, do not scan it.

**Failure: Treating workspace files as production pages**
Prevention: Any path containing `/_workspace/` is a workspace artefact, not a production page. List it in the workspace artefacts section. Do not include it in the production page inventory.

**Failure: Missing pages that are in docs.json but not on disk**
Prevention: Explicitly check every path extracted from docs.json. If the `.mdx` file does not exist, record it as `empty` status. Do not skip it.

**Failure: Duplicated pages from docs.json**
Prevention: Some tabs list the same page path in multiple groups (e.g., tutorial pages appear in both a Quickstart group and a Guides group). Deduplicate by path — scan each file once. Note in the output that the page appears in multiple nav groups.

**Failure: Shallow word count due to MDX components**
Prevention: When counting words for stub detection, strip all MDX component tags (`<ComponentName>`, `<ComponentName />`, `<ComponentName prop={...}>`) and fenced code blocks (` ```...``` `) before counting. Do not count component attribute text as body words.

**Failure: Frontmatter values with surrounding quotes treated as non-canonical**
Prevention: `pageType: 'concept'` and `pageType: concept` are the same value. Strip single and double quotes when comparing frontmatter values against canonical enums.

**Failure: Producing output that structure-audit.md cannot consume**
Prevention: Before writing a single line of output, re-read structure-audit.md and confirm your output format provides: page path, status, frontmatter completeness flag, and the heading structure. structure-audit.md Phase 3.2 requires exactly these fields.

---

## Running Order

1. Read this entire prompt
2. Read structure-audit.md (the downstream consumer) — confirm output compatibility
3. Fill the context block
4. Extract the docs.json navigation for the v2 tab
5. Glob `v2/[tab]/**/*.mdx` for all files on disk
6. Reconcile the two lists (in docs.json vs on disk)
7. For each production page: read file, extract frontmatter, count words, extract headings, write summary, assign status
8. List workspace artefacts (path only)
9. List v1 paths for reference (path only, do not scan)
10. Write output to `context-packs/[tab]-content-scan.md`

---

## Output Format

Write the output as a single markdown file at `context-packs/[tab]-content-scan.md`. Use the exact structure below.

```markdown
# [TAB] — Content Scan

**Tab**: [TAB]
**Scan date**: [YYYY-MM-DD]
**Docs.json source**: v2 navigation block
**v2/[tab]/ folder scanned**: yes
**Status**: DRAFT — awaiting human review

---

## Summary

**Total pages in docs.json navigation**: [N]
**Files found on disk**: [N]
**Empty (in nav, no file)**: [N]
**Stubs (<100 words)**: [N]
**Draft (draft: true)**: [N]
**Current**: [N]
**Pages with deprecated pageType values**: [N]
**Pages with incomplete frontmatter**: [N]
**Workspace artefacts listed**: [N]

---

## Page Inventory

[One entry per production page, in docs.json navigation order.]

---

### [Page title] · `[path]`

**Status**: [current | draft | stub | empty]
**Section/group**: [nav group from docs.json]
**File size**: [N bytes]

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | [value] | [yes / no — explain if no] |
| description | [value or MISSING] | [yes / no] |
| pageType | [value] | [yes / DEPRECATED: maps to X / UNKNOWN / MISSING] |
| audience | [value] | [yes / no] |
| purpose | [value] | [yes / DEPRECATED: maps to X / MISSING] |
| lifecycleStage | [value] | [yes / MISSING] |
| veracityStatus | [value or NOT SET] | [yes / NOT SET] |

**Frontmatter completeness**: [complete | partial | incomplete]
**Frontmatter issues**: [list specific issues, or "none"]

**Heading structure**:
[H1, H2, H3 headings in order — or "No headings found"]

**Content summary**:
[2–3 sentence holistic summary of the page's primary job]

---

[repeat for each page]

---

## Duplicate Nav Entries

[List any pages that appear in more than one nav group. Note both groups.]

| Path | Groups |
|---|---|

---

## Workspace Artefacts

[Files under v2/[tab]/_workspace/ — path listing only, not scanned as production pages.]

| Path | Notes |
|---|---|

---

## v1 Reference Paths

[v1 paths for reference only — not scanned. Extracted from docs.json v1 navigation for this equivalent section.]

| v1 path |
|---|

---

## Frontmatter Issues Summary

[Consolidated list of all frontmatter issues found, for quick scanning by structure-audit.md.]

| Page path | Issue type | Current value | Canonical replacement |
|---|---|---|---|

---

## Status Summary Table

[Quick reference table for structure-audit.md consumption.]

| Page path | Section | Status | pageType | Frontmatter complete? |
|---|---|---|---|---|
```

---

## Compatibility Verification

This prompt's output is designed to feed `structure-audit.md`. Verify compatibility by confirming your output provides:

- `status` per page: structure-audit.md Phase 3.2 inventories using `current`, `draft`, `empty`, `missing`
  - Note: content-scan uses `current/draft/stub/empty`; structure-audit adds `missing` (section exists in nav but has no pages at all). The content-scan `stub` status maps to `current` in structure-audit terms (file exists) — flag stubs explicitly so the auditor can assess.
- `pageType` per page: structure-audit.md Phase 3.2 checks frontmatter completeness
- Section/group context: structure-audit.md Phase 3.2 produces a table by section
- Heading structure: structure-audit.md uses this to assess content depth

If your output does not provide all four, your scan is incomplete for downstream use.
