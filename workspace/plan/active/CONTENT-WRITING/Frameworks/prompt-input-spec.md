# Prompt Input Spec

**Step**: 8 (plan-canonical.md)
**Status**: DRAFT — ⏸ CHECKPOINT: human approves spec per prompt type
**Date**: 2026-03-21
**Locked by**: Steps 2–8a, 9, 10 framework outputs

---

## Purpose

This document is the contract that Steps 16–19 build against. It defines — for each pipeline prompt — what fields are required, which are optional, what the handoff produces, and what quality gates must pass before delivery.

The prompts themselves (level-1-tab-map.md, level-2-pass-a-content.md, level-2-pass-b-layout.md) contain the phases and logic. This spec defines the **interface**: what goes in, what comes out, when to refuse to run.

---

## Pipeline Overview

Three prompts, sequential. Each produces output the next depends on.

```
Level 1 — Tab Map
  ↓ produces: tab-map.md (structural inventory + journey + gap analysis)
Level 2 Pass A — Content
  ↓ produces: review report OR approved plain-markdown content
Level 2 Pass B — Layout
  ↓ produces: production-ready .mdx file
```

**Ordering constraints**:
- Level 1 must complete before any Level 2 operation on that tab.
- Pass A must complete and be approved by human before Pass B runs.
- Pass B must not rewrite content — if content needs changing, return to Pass A.

---

## Prompt 1: Level 1 — Tab Map

### Scope

One tab (`gateways` or `orchestrators`). Produces a single tab-map.md that covers all sections and pages.

### Context block

| Field | Required | Value | Notes |
|---|---|---|---|
| `TAB` | Required | `gateways` / `orchestrators` | Determines section vocabulary + audience |
| `REPO_PATH` | Pre-filled | `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev` | Do not change |
| `TAB_ROOT` | Derived | `v2/[TAB]/` | Derived from TAB |
| `LIVE_DOCS_ACCESS` | Optional | `Livepeer_Docs MCP` / `not available` | Affects live-URL verification only |
| `OUTPUT_FILE` | Derived | `v2/[TAB]/_workspace/tab-map.md` | Derived from TAB |

**Pre-filled constants** (do not modify in context block): section vocabulary, audience per tab, taxonomy enums, folder governance rules, voice register. All documented in `level-1-tab-map.md`.

### Pre-flight gate

Before running:
- [ ] TAB is exactly `gateways` or `orchestrators`
- [ ] REPO_PATH is accessible (at least `v2/[TAB]/` exists on disk)

If either fails: refuse to run; state what is missing.

### Phases

1. Scan the tab (filesystem + docs.json)
2. Audience journey map (linear + on-demand + cross-tab)
3. Gap analysis (missing pages, misclassified pages, content gaps)
4. Write tab-map.md to OUTPUT_FILE

### Quality gates before delivery

- [ ] Every page in docs.json is in the Phase 1.3 classification table
- [ ] Every file on disk is accounted for (navigated, orphaned, or stray)
- [ ] Every gap is typed: `missing` / `misclassified` / `content-gap`
- [ ] No stray files remain unclassified at tab root
- [ ] Recommended actions are priority-ordered (P0 / P1 / P2)
- [ ] Broken paths and orphaned files both listed (even if empty)
- [ ] OUTPUT_FILE written to disk

### Output format

```
tab-map.md contents (in order):
  1. Tab overview (paragraph)
  2. Section inventory (table: section, canonical position, page count, status)
  3. Navigation structure (docs.json mirror with pageType + classification per page)
  4. Audience journey (tables: linear journey, on-demand journey, cross-tab paths)
  5. Gap analysis (three tables: missing pages, misclassified pages, content gaps)
  6. Recommended actions (ordered list: action type, scope, priority, blocking flag)
```

---

## Prompt 2: Level 2 Pass A — Content

### Scope

One page. Runs in one of four modes. Handles content layer only — no MDX components, no frontmatter completion.

### Mode selection

| Situation | Mode |
|---|---|
| Page exists; content is mostly right but needs refinement | `REVIEW` |
| Page exists; REVIEW verdict was REWRITE REQUIRED | `REWRITE` |
| Page does not exist; position is a known gap (from L1 gap table) | `WRITE` |
| Page does not exist; writing from a section brief without prior REVIEW | `WRITE` |

**REWRITE is not re-review**: REWRITE uses the existing page as source material (for facts, structure hints) but produces new content. REVIEW produces a report with targeted fixes. Do not use REVIEW mode if the fundamental structure is wrong — use REWRITE.

### Context block

| Field | Required in REVIEW | Required in WRITE/REWRITE | Value |
|---|---|---|---|
| `TAB` | Required | Required | `gateways` / `orchestrators` |
| `SECTION` | Required | Required | e.g. `guides/payments-and-pricing` |
| `PAGE_PATH` | Required | Required | Full repo-relative path |
| `MODE` | Required | Required | `REVIEW` / `WRITE` / `REWRITE` |
| `PAGE_TYPE` | Required | Required | Canonical 7-value pageType enum |
| `PAGE_VARIANT` | Required | Required | Canonical pageVariant enum, or `none` |
| `AUDIENCE` | Required | Required | Canonical 7-value audience enum |
| `PERSONA` | Optional | Optional | Audience-scoped persona token, or `none` |
| `PURPOSE` | Required | Required | Canonical 15-value purpose token |
| `LIFECYCLE_STAGE` | Required | Required | Canonical 7-value lifecycle token |
| `COMPLEXITY` | Required | Required | `beginner` / `intermediate` / `advanced` |
| `PREV_PAGE` | Required | Required | Page name + one-line description |
| `NEXT_PAGE` | Required | Required | Page name + one-line description |
| `TAB_MAP` | Required | Required | Path to tab-map.md or pasted journey-position summary |
| `PRIMARY_SOURCES` | Conditional | Required | Named authoritative sources for factual claims |

**`PRIMARY_SOURCES` rule**: Required when PAGE_TYPE is `instruction`, `reference`, or `tutorial` — or when the page contains `factual`, `technical`, `procedural`, or `change` information types. Optional for `navigation`, `concept`, `guide`, `resource` pages with no factual claims.

**`PERSONA` rule**: Optional everywhere, but strongly recommended for pilot scope pages (gateways + orchestrators). Persona drives Phase 2.2 (persona fit check). Without it, persona fit is not assessed.

**Missing taxonomy fields at run time**: If any required field is not filled, state what is missing and refuse to proceed. Do not guess values for required fields.

**INDUSTRY and NICHE**: These fields are NOT in the Pass A context block. Pass A assesses them from the page content and proposes values. These proposed values are carried into Pass B. See "Pass A → Pass B handoff" below.

### Pre-flight gate

The prompt runs a built-in pre-flight before Phase 1:

1. **Purpose statement test**: `This page lets the [AUDIENCE] [concrete action].` — can this sentence be written for this page? If not: PURPOSE is wrong or page scope is too broad.
2. **Adjacency coherence test**: Does PREV_PAGE → this page → NEXT_PAGE form a coherent reader journey? If there is a gap, flag it before proceeding.
3. **Scope test**: Is this page one purpose, one scope? If PURPOSE requires two distinct reader outcomes, the page needs splitting.

If any pre-flight item fails: stop and flag. Do not proceed to Phase 1.

### Phases

1. Read (existing page in REVIEW/REWRITE; confirm brief completeness in WRITE)
2. Audience fit (knowledge level, persona fit, register)
3. Purpose check (does the section sequence deliver the stated PURPOSE?)
4. Information type audit (type per section, permitted types for pageType)
5. Voice check (universal blocking rules, opening order, paragraph discipline, audience-specific voice)
6. Veracity check (claims requiring verification, REVIEW flags)
7. Structure check (opening orientation, section sequence and handoffs)

### Quality gates before delivery

- [ ] Pre-flight passed (all three tests)
- [ ] Audience fit checked — mismatches flagged with specific quotes
- [ ] Every section has an identified information type
- [ ] All universal blocking violations corrected or flagged with the fix
- [ ] Audience-specific voice rules applied (voice-rules.md loaded)
- [ ] Every very-high veracity claim has a `{/* REVIEW: */}` flag or named source
- [ ] Structure check complete — no orphan sections, no pre-emptions
- [ ] WRITE/REWRITE mode: INDUSTRY and NICHE proposed values included in output
- [ ] UK English throughout

### Output format

**REVIEW mode:**

```
PAGE: [path]
MODE: REVIEW
VERDICT: PASS / NEEDS WORK / REWRITE REQUIRED

ASSESSED FRONTMATTER:
  pageType:        [assessed value — agree or flag if different from current]
  pageVariant:     [assessed value]
  audience:        [assessed value]
  purpose:         [assessed value]
  industry:        [proposed array, max 2]
  niche:           [proposed array]
  veracityStatus:  [verified / unverified / stale — assessed]

ISSUES (priority order, most blocking first):
  1. Phase [N] — [Issue] — [Impact on reader] — [Fix]

VERACITY FLAGS:
  - [Specific claim] — verify with: [named source]

APPROVED SECTIONS (NEEDS WORK only):
  [Sections that pass all checks. List by heading.]

If REWRITE REQUIRED: state the one structural problem that makes patching insufficient.
```

**WRITE / REWRITE mode:**

```
PROPOSED TAXONOMY:
  pageType:        [value]
  pageVariant:     [value or none]
  audience:        [value]
  persona:         [value or none]
  purpose:         [value]
  lifecycleStage:  [value]
  complexity:      [value]
  industry:        [array]
  niche:           [array]
  veracityStatus:  [unverified — pending human verification]

---

[Page title]

[Page description — one sentence, outcome-focused, ≤ 160 chars]

---

[Plain markdown content. No MDX components. Heading levels (## and ###) mark section structure.]

{/* REVIEW: [claim requiring verification] — verify with: [named source] */}
```

---

## Pass A → Pass B Handoff

Pass B accepts only **approved** Pass A output. Human must explicitly approve before Pass B runs.

The handoff carries:

| What | Form | Pass B uses it for |
|---|---|---|
| Approved content | Plain markdown from WRITE/REWRITE, or current page with NEEDS WORK fixes applied | Phase 1-3 (template, structure, components) |
| Proposed taxonomy | All 9 fields from PROPOSED TAXONOMY block | Phase 4 (frontmatter completion) |
| `{/* REVIEW: */}` flags | Inline in content | Must be carried through to MDX output — never removed |
| `veracityStatus` | From proposed taxonomy | Phase 4 + render validation (`status: draft` if any REVIEW flags remain) |

**REVIEW mode handoff**: If verdict was PASS or NEEDS WORK (with fixes approved), Pass B runs on the current page content with fixes applied. If verdict was REWRITE REQUIRED, Pass B does not run until a REWRITE pass completes.

---

## Prompt 3: Level 2 Pass B — Layout

### Scope

One page. Runs after Pass A output is approved by human. Handles layout layer only — template, components, frontmatter, section naming, MDX syntax. Does not rewrite content.

### Context block

| Field | Required | Value |
|---|---|---|
| `PAGE_PATH` | Required | Full repo-relative path |
| `PAGE_TYPE` | Required | Canonical 7-value pageType enum |
| `PAGE_VARIANT` | Required | Canonical pageVariant enum or `none` |
| `PASS_A_SOURCE` | Required | Path to Pass A output or pasted approved content |

**Carried through from Pass A (all required):**

| Field | Source |
|---|---|
| `AUDIENCE` | Pass A PROPOSED TAXONOMY or existing frontmatter (REVIEW path) |
| `PERSONA` | Pass A PROPOSED TAXONOMY |
| `PURPOSE` | Pass A PROPOSED TAXONOMY |
| `LIFECYCLE_STAGE` | Pass A PROPOSED TAXONOMY |
| `COMPLEXITY` | Pass A PROPOSED TAXONOMY |
| `INDUSTRY` | Pass A PROPOSED TAXONOMY |
| `NICHE` | Pass A PROPOSED TAXONOMY |
| `VERACITY_STATUS` | Pass A PROPOSED TAXONOMY |

**If Pass A was REVIEW mode**: carry fields from assessed frontmatter values, not proposed (assessed values are what Pass A agreed with).

### Pre-flight gate

Before running:
- [ ] PASS_A_SOURCE is accessible and contains complete content (not a partial stub)
- [ ] Human approval of Pass A output is confirmed
- [ ] All 9 taxonomy fields are available (either from Pass A PROPOSED TAXONOMY or assessed values)
- [ ] PAGE_TYPE maps to a known template (see template lookup table in pass-b prompt)

If PASS_A_SOURCE is missing or incomplete: refuse to run; return to Pass A.

### Phases

1. Template selection (PAGE_TYPE + PAGE_VARIANT → template file)
2. Section structure mapping (content sections → template slots + heading levels)
3. Component selection (per-section rules: Steps, Code, Callouts, Tables, Tabs, Cards, Accordions)
4. Frontmatter completion (all required fields with canonical enum values)
5. Section naming check (every ## and ### heading scored against section-naming.md rubric)
6. Render validation (syntax, paths, flag carrythrough, status rules)

### Quality gates before delivery

- [ ] Template matched and applied
- [ ] Every content section mapped to a template slot with a heading level
- [ ] Component decisions follow Phase 3 rules (no accordion-hiding of primary content)
- [ ] Frontmatter complete: all 9 taxonomy fields + title + description + status + lastVerified
- [ ] Title: 1–3 words, concept-derived, no banned forms
- [ ] Description: subject-first, ≤ 160 chars, no self-reference, UK English
- [ ] Section headings checked against naming rubric — no unresolved generic structure words
- [ ] No MDX syntax errors
- [ ] All `{/* REVIEW: */}` flags from Pass A present in output (not removed or modified)
- [ ] `status: current` only if `veracityStatus: verified` AND no `{/* REVIEW: */}` flags remain
- [ ] `status: draft` if any `{/* REVIEW: */}` flags remain
- [ ] UK English throughout (content + frontmatter strings + component text)

### Output format

```mdx
---
title:          [1–3 words, concept-derived]
sidebarTitle:   [shorter form if title > 3 words; omit if same as title]
description:    [one sentence, subject-first, outcome-focused, ≤ 160 chars]
pageType:       [canonical enum]
pageVariant:    [canonical enum, or omit]
audience:       [canonical audience token]
persona:        [audience-scoped persona token, or omit]
purpose:        [canonical 15-value purpose token]
lifecycleStage: [canonical 7-value lifecycle token]
complexity:     [beginner / intermediate / advanced]
industry:       [array, max 2, first dominates]
niche:          [array]
veracityStatus: [verified / unverified / stale]
status:         [current / draft / deprecated]
lastVerified:   [YYYY-MM-DD]
---

{/* IMPORTS — list any component imports required */}

[MDX content with components applied]

{/* REVIEW: [flags from Pass A — carried through unchanged] */}
```

**Before writing the file**, flag any decisions that require human approval:
- Template gap (no rule covers a specific content type)
- Structural mismatch (content doesn't map cleanly to any template slot)
- Ambiguous component choice
- Heading where naming rubric produces a tie

Do not silently apply a workaround. State the decision and the default chosen.

---

## Open Issues at Spec Time

These were identified during spec drafting. Resolve before building prompts in Steps 16–18.

| # | Issue | Affects | Resolution needed |
|---|---|---|---|
| S8-1 | INDUSTRY/NICHE fields are absent from Pass A context block but required in Pass B | Pass A → Pass B handoff | Pass A must assess and output INDUSTRY/NICHE in PROPOSED TAXONOMY for WRITE/REWRITE modes. For REVIEW mode, Pass A must include assessed industry/niche in ASSESSED FRONTMATTER. Pass B carries through. **Resolution**: add to Pass A output format (done in this spec — confirm in Step 17 build). |
| S8-2 | REWRITE mode trigger criteria is implicit | Pass A mode selection | Defined above in mode selection table. Confirm with human at checkpoint. |
| S8-3 | Full-site mode (Phase 1.1) for Level 1 is not covered | Level 1 scope | Phase 1.1 (full site context + audience segment map) is deferred to a separate pre-run artefact or Level 1 full-site mode extension. Resolve in Step 16 prompt design. |
| S8-4 | AUDIT mode for Pass A (batch tab scan) is not in this spec | Step 17 build | AUDIT mode is a batch operation that aggregates across multiple pages — it is distinct from the single-page modes and needs a separate context block. Deferred to Step 17 subplan. |
| S8-5 | Template gaps for Pass B are expected at Step 11 output | Pass B template selection | Phase 1 of Pass B prompts flags gaps — human resolves. This is acceptable until Step 11 (page templates) delivers complete contracts per pageType. |

---

## Revision history

| Date | Change |
|---|---|
| 2026-03-21 | Initial draft — Step 8 |
