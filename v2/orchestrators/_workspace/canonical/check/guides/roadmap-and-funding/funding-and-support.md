# Per-Page Quality Check Report
## `v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2946–2950 (Roadmap and Funding group)

---

## Stub Status Declaration

This page is a declared stub. The entire body consists of: (1) a rendered `<Note>` callout announcing it as a draft placeholder, and (2) an MDX comment block describing planned content. There is no body prose, no H2 headings, no tables, and no components beyond the Note.

All Category 2–6 checks that require body content are N/A or trivially PASS for body content. Primary findings are: missing frontmatter taxonomy fields, banned constructions in the Note callout, and the structural question of whether a stub belongs in the publishable lane.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Funding and Support` | PASS | Clear, 3 words |
| `sidebarTitle` | Yes | `Funding & Support` | PASS | Abbreviated form for sidebar — acceptable |
| `description` | Yes | `Funding programmes, grants, and community resources for Livepeer orchestrator operators - SPE grants, AI Video Startup Programme.` | **FAIL** | Contains ` - ` used as clause separator (em-dash equivalent). 127 chars — within 160-char limit. Proposed: `Funding programmes, grants, and community resources for Livepeer orchestrator operators: SPE grants and the AI Video Startup Programme.` (134 chars) — confirm before applying. (P51) |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value. (P50) |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | **No** | *(absent)* | **FAIL** | Required field missing. Given stub scope (funding programmes, grants, support channels), proposed: `purpose: evaluate` — confirm before applying. (P51) |
| `complexity` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `complexity: beginner` — confirm before applying. (P51) |
| `lifecycleStage` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `lifecycleStage: evaluate` — confirm before applying. (P51) |
| `keywords` | Yes | 6 entries | **FAIL** | `livepeer` and `orchestrator` are generic. `SPE` is unexpanded. Proposed stronger entries when content is written: `livepeer SPE grants`, `orchestrator funding programme`, `AI Video Startup Programme`, `Livepeer Foundation grants`. Requires content confirmation before final values. |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators fallback |
| `veracityStatus` | **No** | *(absent)* | **FAIL** | Required per checks.mdx §1.8. Honest value for stub: `unverified`. Proposed: `veracityStatus: unverified` — confirm before applying. (P51) |
| `industry` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `industry: [business, livepeer]` — confirm before applying. (P51) |
| `niche` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P51) |
| `status` | Yes | `draft` | PASS | Correct for a stub. Consistent with absent `veracityStatus: verified` (no P39 violation). |
| `lastVerified` | Yes | `2026-03-16` | PASS | Present, consistent with `status: draft`. |
| `pageVariant` | No | *(absent)* | N/A | `pageType: guide` is canonical; no migration required. (P42) |

**Required field count:** 4/10 present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also missing (P41). `keywords` present but failing quality check.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also absent (P41). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid. (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no migration needed. (P42) |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | Field absent. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | **FAIL** | Field absent. |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Field absent. |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Absent. Honest value: `unverified`. `status: draft` is coherent with absent `veracityStatus: verified` — no P39 violation. |
| 1.9 | `industry` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.10 | `niche` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.11 | `description` well-formed | **FAIL** | ` - ` used as clause separator — em-dash equivalent, prohibited per CLAUDE.md. Fix: replace ` - ` with `: `. Proposed text in Frontmatter Table above. |
| 1.12 | OG image block complete | PASS | All 5 fields present. |
| 1.13 | `keywords` field quality | **FAIL** | `livepeer`, `orchestrator` are generic. `SPE` is unexpanded. Insufficient searcher intent alignment for current or planned content. |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**Note:** No body prose exists. All voice checks apply only to the rendered `<Note>` callout and frontmatter `description`.

**UK English scan (2.1) — candidates considered (P24):**
- Note text: `"This draft will consolidate the current funding programmes, grant paths, and support channels relevant to orchestrator operators once those routes are confirmed for publication."` — `programmes` correct UK English. No US spellings.
- Result: No US spellings. (P54: check 2.1 is only UK English spelling.)

**Banned words scan (2.2) — candidates considered (P24):**
- `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` — none found in Note or description.
- `current` (in Note) — not banned.
- `relevant` (in Note) — not banned.
- Result: No banned words found.

**Banned phrases scan (2.3) — candidates considered (P24):**
- "This section covers" — not present
- "This page covers / explains / walks you through" — not direct form
- "etc." / "and so on" — absent
- `once X is stable` (Frameworks.mdx §3.2): Note text has `"once those routes are confirmed for publication"` — matches `once [condition]` pattern. This is a **banned phrase** (check 2.3) AND a banned construction (check 2.4). Logged in 2.4 per P46 for the construction; logged here as banned phrase for the `once [condition]` pattern.
- Result: 1 banned phrase found: `once [condition]`.

**Banned constructions scan (2.4) — candidates considered (P24):**
- `not [X]` as primary statement — absent. PASS.
- `if [condition]` in body prose — absent. PASS.
- `This page [verb]` self-reference — Note text: `"This draft will consolidate…"` — `This [noun] will [verb]` is functionally the same as `This page [verb]`. **VIOLATION.**
- `can/may [verb]` in value claims — absent. PASS.
- Em-dashes (P30 — all visible text): description ` - ` (em-dash equivalent). **VIOLATION.**
- CustomDivider `middleText` props — no CustomDivider used. N/A.
- AccordionGroup `title` props — no AccordionGroup used. N/A.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings. `programmes` correct UK form. (P54) |
| 2.2 | Zero banned words | PASS | All candidates reviewed. None found. |
| 2.3 | Zero banned phrases | **FAIL** | Note text: `"once those routes are confirmed for publication"` — `once [condition]` matches the `once X is stable` banned phrase pattern (Frameworks.mdx §3.2). |
| 2.4 | Zero banned constructions | **FAIL** | Two violations: (1) `"This draft will consolidate…"` — `This [noun] will [verb]` self-referential construction in Note; (2) ` - ` em-dash equivalent in description (P30 — all visible text). See Banned Construction Scan table. |
| 2.5 | Opening order correct | N/A | Stub — no content opening. |
| 2.6 | Paragraph discipline | N/A | Stub — no body paragraphs. |
| 2.7 | Audience register correct | N/A | Stub — no body content. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator prohibited phrases found in Note text. |
| 2.9 | No passive value statements | N/A | Stub — no value statements. |
| 2.10 | No hedging openers | N/A | Stub. |
| 2.11 | Terminology locked and consistent | N/A | Stub — no body terminology to assess. |

### Banned Construction Scan Table

**Scope:** frontmatter description, rendered `<Note>` text (all visible text per P30).

| Location | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| `description` field | `"…for Livepeer orchestrator operators - SPE grants, AI Video Startup Programme."` | ` - ` as clause separator (em-dash equivalent) | Banned — CLAUDE.md, P30 | **YES — F-02** |
| `<Note>` (line 24) | `"This draft will consolidate the current funding programmes, grant paths, and support channels…"` | `This [noun] will [verb]` | Self-referential banned construction — check 2.4 | **YES — F-03** |
| `<Note>` (line 24) | `"once those routes are confirmed for publication"` | `once [condition]` | Banned phrase — Frameworks.mdx §3.2 (and check 2.3) | **YES — F-04** |

**Category 2 verdict: FAIL** — 2 checks fail: 2.3, 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

No body headings exist. Stub. All heading checks are N/A except 3.2 (title check) and 3.6.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | N/A | No body headings — stub. |
| 3.2 | No banned or weak standalone heading terms | PASS | Title `Funding and Support` — neither Banned nor Avoid tier. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | N/A | No body headings. |
| 3.5 | Heading names concept, not examples | N/A | No body headings. |
| 3.6 | Title well-formed | PASS | `Funding and Support` — 3 words, concept-derived, no banned forms. |
| 3.7 | Sounds like an expert editorial choice | N/A | No body headings. |

**Category 3 verdict: PASS** — 0 checks fail (N/A checks do not count as failures).

---

## Category 4 — PAGE STRUCTURE

Navigation from docs.json lines 2946–2950 (confirmed):
- Group: "Roadmap and Funding"
- Sequence: **`funding-and-support`** → `orchestrator-profiles`
- `funding-and-support` is the first page in the Roadmap and Funding group; no defined PREV_PAGE from another section.

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS (stub) | Scope in MDX comment is coherent: grants, programmes, support channels for orchestrator operators. Singular scope. |
| 4.2 | Purpose statement test passes | PASS (stub) | "This page lets the orchestrator identify available funding programmes and support routes for their operation." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | N/A | No PREV_PAGE from another section. NEXT_PAGE is `orchestrator-profiles` (line 2949). Stub — no content adjacency to evaluate. |
| 4.4 | No dead ends | **FAIL** | Stub has no onward navigation — no Related Pages, no cards, no links. Reader arrives and has nowhere to go. |
| 4.5 | Prerequisites stated or linked | N/A | Stub — no procedure content. |
| 4.6 | Out-of-scope is clear | N/A | Stub. |
| 4.7 | Information type per section correct | N/A | Stub — no sections. |
| 4.8 | No content duplication from adjacent sections | N/A | Stub — no content. |
| 4.9 | Section orientation page present | N/A | Page-level check only. |
| 4.10 | Cross-tab links at journey intersections | **FAIL** | No cross-tab links present. MDX comment at lines 39–41 notes planned cross-refs to `Gateway Tab > Roadmap & Funding > Operator Support` and `LPT Tab > Treasury > Proposals` — not implemented. |

**Category 4 verdict: FAIL** — 2 checks fail: 4.4, 4.10

---

## Category 5 — LAYOUT & COMPONENTS

Component approval file read: `docs-guide/policies/component-layout-decisions.mdx` (confirmed read).

Matrix entry for `guide` pageType: Required sections — `Overview`, `Steps` or `H2 sections`. Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`. Avoid: `Coming Soon`, `PreviewCallout`.

Components used: `<Note>` only. No custom imports declared.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | **FAIL** | `guide` requires Overview + Steps or H2 sections. Stub has neither. The Note is not a substitute for required sections. |
| 5.2 | Required sections present | **FAIL** | `guide` required sections (Overview, Steps or H2) are both absent. |
| 5.3 | Only approved components used | PASS | Only `<Note>` used — in the `guide` preferred list. |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no PreviewCallout, no TODO/TBD callouts. The Note is not in the avoid list. |
| 5.5 | Information type → component mapping correct | N/A | Stub — no information sections. |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed locally. `<Note>` is Mintlify native; no custom imports. Simple structure — likely renders cleanly. |
| 5.7 | No old-schema frontmatter | PASS | No deprecated values in present fields. |
| 5.8 | CSS uses custom properties only | N/A | No CSS. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | No custom imports. `<Note>` is Mintlify native — no import needed. |

**Category 5 verdict: FAIL** — 2 checks fail: 5.1, 5.2

---

## Category 6 — VERACITY

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | N/A | Stub — no factual claims in body. |
| 6.2 | Code/commands tested | N/A | Stub — no code. |
| 6.3 | No deprecated API usage | N/A | Stub — no API references. |
| 6.4 | Numbers are real | N/A | Stub — no numbers. |
| 6.5 | REVIEW flags for unverified claims | N/A | Stub — no claims to flag. |
| 6.6 | `veracityStatus` honest | **FAIL** | Field absent. Honest value: `unverified`. `status: draft` is consistent — no P39 violation. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | Stub. |
| 6.8 | Source staleness check | N/A | Stub — no content to go stale. |
| 6.9 | No open-ended research tasks | **FAIL** | MDX comment line 33: `"STATUS: STUB - write when SPE details available"` — open-ended research dependency. No named owner, no timeline, no concrete next step beyond "when SPE details available." Per checks.mdx §6.9, every residual item needs a named source and a concrete next step. This should be in `blocking-items.md`, not embedded as a page comment. |

**Category 6 verdict: FAIL** — 2 checks fail: 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2948: `"v2/orchestrators/guides/roadmap-and-funding/funding-and-support"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path. |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check. |
| 7.4 | No structural orphans | PASS | Reachable via "Roadmap and Funding" group. |
| 7.5 | Audience journey complete | **FAIL** | Stub provides no journey continuation. Reader arrives at a placeholder. |
| 7.6 | Cross-tab graduation paths exist | **FAIL** | No cross-tab links present. Planned links noted in MDX comment but not implemented. |
| 7.7 | File in correct lane | **FAIL** | Stub with no body content is in the publishable lane (`v2/orchestrators/guides/`). Per checks.mdx §7.7, stubs belong in `_workspace/` until ready to publish. However, the page IS in docs.json navigation — moving it requires a docs.json update. See Blocking Decision BD-01. |
| 7.8 | File naming conventions | PASS | `funding-and-support.mdx` — correct kebab-case, no invalid prefix. |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: FAIL** — 3 checks fail: 7.5, 7.6, 7.7

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | N/A | No internal links on this page. |
| 8.2 | All external links live | N/A | No external links. |
| 8.3 | All snippet imports resolve | N/A | No custom imports. |
| 8.4 | All images load | N/A | No images. |
| 8.5 | Page renders without error | NOT-TESTED | Not executed locally. Simple structure with one Mintlify-native Note and one MDX comment. Likely renders cleanly. |
| 8.6 | No TODO/TBD/Coming Soon in published content | **FAIL** | `<Note>This draft will consolidate the current funding programmes, grant paths, and support channels relevant to orchestrator operators once those routes are confirmed for publication.</Note>` IS rendered and visible to users. This is effectively a "Coming Soon" or "Draft" placeholder callout. Per checks.mdx §8.6, placeholder text belongs in `_workspace/`, not publishable pages. |

**Category 8 verdict: FAIL** — 1 check fails: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | `status: draft`. Stub state. No sign-off recorded. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions consumed. Nav group placement is consistent with existing structure. |
| 9.3 | Gate prerequisites met | **FAIL** | Orchestrators IA not yet approved. Content not written. Gate not open. |
| 9.4 | Phase ordering respected | N/A | No content to verify phases against. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Not yet shipped. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**Connection 1 — Missing frontmatter fields (Root Cause A)**
Checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6 all fail from one root cause. Single frontmatter block fix.

**Connection 2 — Stub in publishable lane with visible placeholder Note (Root Cause B)**
Checks 5.1, 5.2, 7.5, 7.7, 8.6 all share the same root cause: a stub page is in the published navigation with a visible "Coming Soon" style Note. If the Note is removed and no content replaces it, the page is an empty shell. If the page is moved to `_workspace/`, checks 7.5, 7.7, and 8.6 resolve. See BD-01.

**Connection 3 — Banned constructions in Note callout (Root Cause C)**
Checks 2.3, 2.4 (and check 8.6 partially) fail because the Note contains a `This [noun] will [verb]` construction and a `once [condition]` banned phrase. Fix: remove the Note callout (resolves Root Cause B simultaneously).

**Connection 4 — Open-ended research dependency (Root Cause D)**
Check 6.9 fails because the MDX comment embeds an open-ended "write when SPE details available" research note with no named owner. Fix: log as blocking item in `blocking-items.md` with named owner; remove from page.

**Connection 5 — Description em-dash separator (Root Cause E)**
Checks 1.11 and 2.4 both flag the ` - ` separator in the description. Single one-character fix.

---

## Blocking Decisions

### BD-01 — Stub in publishable lane

**Category:** Category 7 (IA)
**Severity:** HIGH — affects checks 5.1, 5.2, 7.5, 7.7, 8.6

This stub has been registered in docs.json navigation. Options (P52 — neutral framing):
- **Option A:** Keep in docs.json nav — remove Note callout, leave a minimal shell with only frontmatter until content is written. No visible placeholder to users.
- **Option B:** Remove from docs.json nav — move file to `_workspace/drafts/`. Re-add to nav when content is ready for publication.

Both options require Alison sign-off. Both options should be decided for this page and `orchestrator-profiles.mdx` together, since they are the same stub pattern.

---

## Verdict Summary

**Overall: NEEDS WORK** (stub state — structural/taxonomy fixes executable now; content gap blocks content-level checks)

**Checks that FAIL (P49 — individual check IDs):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3

**23 checks fail.** Most failures are structural/process: stub without taxonomy fields, stub in publishable lane with visible placeholder Note containing banned constructions. Content-level checks are N/A until the stub is written.

---

## Prioritised Fix List

**F-01** | HIGH | **Add missing required frontmatter fields** | All values require confirmation before applying (P51):
- Proposed: `purpose: evaluate` — confirm before applying.
- Proposed: `complexity: beginner` — confirm before applying.
- Proposed: `lifecycleStage: evaluate` — confirm before applying.
- Proposed: `veracityStatus: unverified` — confirm before applying.
- Proposed: `industry: [business, livepeer]` — confirm before applying. (P41)
- Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P41)
Affects: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6.

**F-02** | HIGH | **Resolve BD-01: stub in publishable lane** | Alison decision required. See BD-01 above. Both options require sign-off. Decide for this page and `orchestrator-profiles.mdx` together. Affects: 5.1, 5.2, 7.5, 7.7, 8.6.

**F-03** | MEDIUM | **Fix description separator ` - ` → `:`** | Replace ` - ` in description with `: `. Proposed: `Funding programmes, grants, and community resources for Livepeer orchestrator operators: SPE grants and the AI Video Startup Programme.` (P44: no banned constructions introduced. P51: confirm before applying.) Affects: 1.11, 2.4.

**F-04** | MEDIUM | **Remove Note callout (or replace)** | If BD-01 resolves to Option A (keep in nav, remove Note): delete the `<Note>` callout entirely. Leave the page as a minimal frontmatter-only shell until content is written. If BD-01 resolves to Option B (move to `_workspace/`): the Note becomes moot. The Note contains both a banned construction (`This draft will consolidate…`) and a banned phrase (`once those routes are confirmed`). Both violations are resolved by deletion. (P44: deletion introduces no new violations.) Affects: 2.3, 2.4, 8.6.

**F-05** | MEDIUM | **Log SPE dependency in blocking-items.md** | MDX comment: `"STATUS: STUB - write when SPE details available"` should be logged in `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/blocking-items.md` with: named owner, dependency (SPE grant programme details), and concrete next step. Remove the comment from the page after logging. Affects: 6.9.

**F-06** | INFO | **Update keywords when content is written** | Current keywords are too generic for the planned content. Update when SPE grant details are available. Proposed starters in Frontmatter Table — confirm against final content. Affects: 1.13.

**F-07** | INFO | **Write content when SPE details confirmed** | All content-level checks (Category 2 body prose, Category 3 headings, Category 4 full structure, Category 5 layout, Category 6 veracity) are N/A until content is written. Re-run full check after content is written.
