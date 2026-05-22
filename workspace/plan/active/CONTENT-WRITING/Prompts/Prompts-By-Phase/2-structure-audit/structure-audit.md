# Livepeer Docs — Tab Audit Prompt
## Prompt B · Fit to Locked Structure + Gap Analysis

**Your task**: Execute the phases below in order and produce the output document at the end. Do not revise or comment on these instructions. Do not summarise what you are about to do. Begin Phase 3 immediately and work through to the Output section.

**Repo access required.** This prompt measures the existing tab structure against the ideal design from Prompt A.

---

## Pre-flight

Before running, confirm:

- [ ] Phase 1 audience design output exists and has been approved (path in context block above)
- [ ] Page type taxonomy in use: this prompt uses the 7-type canonical set (`navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`). The current validator (`tools/lib/frontmatter-taxonomy.js`) still uses the old 12-type schema — pages using canonical values will fail CI until the validator is updated. Flag this in your output where relevant.
- [ ] If this tab has multiple distinct sub-audiences: confirm whether a routing/disambiguation page exists or is needed before running the inventory

---

## Context Block

*Fill before running.*

```
TAB:                  [e.g. LP Token | Orchestrators | Developers | Community | Gateways]
AUDIENCE_DESIGN_FILE: [path to the audience-design.md produced by Prompt A]
DOCS_JSON_PATH:       docs.json
TAB_FOLDER:           v2/[tab-folder]/
```

---

## Canonical Section Vocabulary (locked — do not change)

This is the locked section structure for any full-stack tab (Gateways, Orchestrators, Developers, LP Token). Community and Home have different structures — note if TAB does not follow this pattern.

| Position | Canonical name | pageType | Notes |
|---|---|---|---|
| 1 — root | portal | `navigation` (portal) | Tab entry point with hero |
| 1 — root | navigator | `navigation` (landing) | Secondary nav/routing page |
| 2 | concepts | `concept` | Orientation + architecture — 4 pages: role, capabilities, architecture, economics |
| 3 | quickstart | `instruction` (quickstart) | Fastest path to first success |
| 4 | setup | `instruction` (setup) | Full installation + configuration procedures |
| 5 | guides | `guide` | Practical understanding; operational phase |
| 5a | tutorials (inside guides/) | `tutorial` | Tab-specific tutorials |
| 6 | resources/reference/ | `reference` | Structured lookup — specs, FAQ, glossary, troubleshooting |
| 6 | resources/knowledge-hub/ | `resource` | Curated external content — tools, directories, community |

**Concepts section structure** (4 pages, locked):

| Page | Question it answers | Discovery stage |
|---|---|---|
| role | What IS this? | Orienting |
| capabilities | What can it DO? | Orienting |
| architecture | How does it WORK? | Evaluating |
| economics | Should I CARE? | Evaluating |

**Rules**:
- Positions 1–3 are LINEAR for first-time readers
- Positions 4–6 are ON-DEMAND (reference, return visits)
- tutorials/ lives inside guides/ — not in resources/
- resources/ has two sub-sections: reference/ and knowledge-hub/

---

## Phase 3 — Fit to Locked Structure

### 3.1 Read the audience design

Read the audience design file from Prompt A. Extract:
- Named personas and their journeys
- Jobs to be Done
- Ideal section structure (each section's job, entry state, exit state)

### 3.2 Inventory the existing tab

Read docs.json to extract the current navigation structure for this tab. Read enough of the actual pages to assess content status. Do not read the full content of every page — read portal, navigator, and one representative page per section.

Produce a table:

| Section | Current pages | Status | Frontmatter complete? |
|---|---|---|---|

Status values:
- `current` — pages exist and are published
- `draft` — pages exist but are not published / marked draft
- `empty` — section exists in nav (creates a live dead-end for readers), zero pages
- `missing` — section does not exist at all, no folder or nav entry

**Frontmatter complete** means: all required fields present (`title`, `description`, `pageType`, `audience`, `purpose`, `lifecycleStage`) AND values are from canonical enums. An empty `pageType` field is not "complete". A `pageType: how_to` value is not canonical — it is an old-schema value.

### 3.3 Map ideal sections to canonical structure

For each section in the Prompt A ideal section structure, find its place in the canonical section vocabulary:

| Ideal section (from Prompt A) | Canonical position | Match quality | Position type | Notes |
|---|---|---|---|---|

Match quality values:
- `exact` — this section's job is correctly served by this canonical position
- `partial` — the canonical section covers this but does not fully serve the job
- `none` — no canonical section serves this job; gap

Position type values:
- `linear` — must be completed in sequence; reader cannot skip (positions 1–3)
- `on-demand` — reference or return-visit; reader accesses when needed (positions 4–6)

**Position validation**: After mapping, check for position violations. A position violation is any section that:
- Is obligatory (the reader must complete it to proceed) but is placed in an on-demand position (4–6), or
- Is reference-only (the reader looks it up, doesn't need to read sequentially) but is placed in a linear position (1–3), forcing readers through it unnecessarily

Flag each violation as a structural gap with `P0` priority.

**Routing page check**: Does the Prompt A ideal structure include a routing or disambiguation page (a page whose job is to route the reader to their correct path)? If the Phase 1 self-identification check flagged an ambiguous audience label, a routing page is required. If it is absent from the current tab, flag as `P0` gap.

### 3.3a Position violation check

**Run this step before Phase 3.4.** Classify every section in the proposed canonical structure, then check for mismatches between classification and assigned position.

**Step 1 — Classify each section as linear or on-demand:**

Use these rules to classify. Source of truth: `08a-ia-per-tab.md`. If the rules below conflict with that file, the file wins.

Linear (obligatory — must complete to proceed, positions 1–3):
- Disambiguation / orientation pages whose job is to route the reader to their correct path
- Core concept foundation required before any task can be attempted (role, capabilities, architecture, economics)
- Prerequisites or setup tasks that block the first functional use case
- Quickstart / first working state

On-demand (optional — reference or return-visit, positions 4–6):
- Advanced configuration and installation procedures (full setup beyond quickstart)
- Operational guides and tutorials accessed after the first working state
- Troubleshooting content
- Reference tables (parameters, flags, CLI specs, FAQ, glossary)
- Edge cases, alternatives, and advanced patterns
- Deep protocol explanations not required for first use
- Curated external content, tools, community directories

**Step 2 — Check for position violations:**

For each section, compare its classification against its assigned canonical position:
- LINEAR section in an ON-DEMAND position (4–6): violation — obligatory content is unreachable on the linear path
- ON-DEMAND section in a LINEAR position (1–3): violation — optional content blocks the reader's path to their first working state

**Step 3 — Output a position violations list:**

| Section | Classification | Assigned position type | Violation type | Recommended fix |
|---|---|---|---|---|

- "Classification" = linear or on-demand (from Step 1)
- "Assigned position type" = linear (1–3) or on-demand (4–6) based on where it sits in the canonical structure
- "Violation type" = `linear-in-on-demand` or `on-demand-in-linear`
- "Recommended fix" = move to correct position group OR reclassify the content type (with rationale)

If there are zero violations, output:

> Position validation: PASS — all linear sections in positions 1–3, all on-demand sections in positions 4–6

### 3.4 Identify gaps

A gap is any ideal section with match quality `none` or `partial`. For each gap:

| Gap | Job not served | Priority | Recommendation |
|---|---|---|---|

Priority classification (decision tree — apply in order):
- `P0` — Gap is in a LINEAR position (1–3) AND no workaround exists for a primary persona's critical job
- `P1` — Gap is in an ON-DEMAND position (4–6), OR affects a secondary persona, OR has a partial workaround
- `P2` — Polish/backlog: orphaned pages, missing subsections of on-demand content, cross-tab duplicates

Apply these rules before assigning priority. Do not use narrative judgement — if a gap is in position 1–3 and has no workaround, it is P0 regardless of content depth.

Recommendation: which canonical section should absorb this content, or does it require a new page?

### 3.5 Identify orphans

An orphan is a canonical section (or existing page) that serves no job in the Prompt A ideal structure. For each orphan, flag whether it should be: kept (serves an unstated need), merged, or removed.

### 3.6 Cross-tab boundary check

Re-read the Prompt A cross-tab section. For each cross-tab routing:
- Confirm the handoff point exists in the current tab (a link or clear CTA to the other tab)
- If missing, flag as a gap

---

## Quality Gates

- [ ] Inventory covers all sections in the tab's nav structure (from docs.json)?
- [ ] `empty` sections flagged separately from `missing` sections?
- [ ] Frontmatter completeness checked against canonical enum values — old-schema values flagged?
- [ ] Every ideal section from Prompt A has a match quality and position type assigned?
- [ ] Position violations checked — obligatory content in on-demand positions flagged as P0?
- [ ] Routing page check done — disambiguation page present or flagged as P0 gap if needed?
- [ ] Every P0 gap has a specific recommendation?
- [ ] Orphans assessed — not silently omitted?
- [ ] Cross-tab handoffs checked — missing CTAs flagged?

---

## Output

Produce this document in full.

```markdown
# [TAB] — Tab Map

**Tab**: [TAB]
**Source**: [AUDIENCE_DESIGN_FILE] — [date of Prompt A]
**Generated**: [date]
**Status**: DRAFT — awaiting checkpoint

---

## Current Tab Inventory

| Section | Current pages | Status | Frontmatter complete? |
|---|---|---|---|

---

## Ideal → Canonical Mapping

| Ideal section | Canonical position | Match | Position type | Notes |
|---|---|---|---|---|

---

## Gap Analysis

| Gap | Job not served | Priority | Recommendation |
|---|---|---|---|

---

## Orphan Analysis

| Existing section / page | Status | Recommendation |
|---|---|---|

---

## Cross-Tab Handoff Audit

| Direction | CTA present? | Notes |
|---|---|---|

---

## Summary

**P0 gaps** (must fix before this tab is complete):
- [list]

**P1 gaps** (fix in next pass):
- [list]

**P2 gaps** (backlog):
- [list]

**Net page delta**: [current page count] → [target page count after gap resolution]

---

## ⏸ Checkpoint

- [ ] All existing sections inventoried — `empty` and `missing` distinguished?
- [ ] Every ideal section has a match quality and position type?
- [ ] Position violations checked and flagged?
- [ ] Routing page check done?
- [ ] P0 gaps have actionable recommendations?
- [ ] Orphans assessed?
- [ ] Cross-tab handoffs checked?
```
