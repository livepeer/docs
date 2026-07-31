# Per-Page Quality Check Report
## `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2946–2950 (Roadmap and Funding group)

---

## Stub Status Declaration

This page is a declared stub. The entire body consists of: (1) a rendered `<Note>` callout announcing it as a draft placeholder, and (2) an MDX comment block describing planned content. There is no body prose, no H2 headings, no tables, and no components beyond the Note.

Same structural pattern as `funding-and-support.mdx`. All Category 2–6 checks that require body content are N/A. Primary findings: missing frontmatter taxonomy fields, title/sidebarTitle terminology inconsistency, banned constructions in the Note, and stub in publishable lane.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Orchestrator Profiles` | PASS | Clear, 2 words |
| `sidebarTitle` | Yes | `Operator Profiles` | **FAIL** | Terminology inconsistency: `title` uses locked domain term `orchestrator`; `sidebarTitle` uses `operator` which is not the locked term for this audience. Fix: `sidebarTitle: 'Orchestrator Profiles'` — confirm before applying. (P51) |
| `description` | Yes | `Active orchestrator operators on the Livepeer network - who is operating, what they have built, and community highlights.` | **FAIL** | Contains ` - ` used as clause separator (em-dash equivalent, CLAUDE.md). 121 chars — within 160-char limit. Proposed: `Active orchestrator operators on the Livepeer network: who is operating, what they have built, and community highlights.` (121 chars) — confirm before applying. (P51) |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value. (P50) Editorial note only: for a showcase/profiles page, `resource` (curated discovery) may fit better than `guide` (opinionated guidance for an outcome). See BD-02. Schema result is PASS regardless. |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | **No** | *(absent)* | **FAIL** | Required field missing. Given stub scope (operator profiles, social proof, community examples), proposed: `purpose: evaluate` — confirm before applying. (P51) |
| `complexity` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `complexity: beginner` — confirm before applying. (P51) |
| `lifecycleStage` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `lifecycleStage: evaluate` — confirm before applying. (P51) |
| `keywords` | Yes | 5 entries | **FAIL** | All 5 are generic: `livepeer`, `orchestrator`, `showcase`, `community`, `operators`. None are searcher-intent-aligned. `showcase`, `community`, `operators` are too broad. Proposed when content is written: `livepeer orchestrator case study`, `GPU node operator examples`, `active orchestrators livepeer network`. |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators fallback |
| `veracityStatus` | **No** | *(absent)* | **FAIL** | Required per checks.mdx §1.8. Honest value: `unverified`. Proposed: `veracityStatus: unverified` — confirm before applying. (P51) |
| `industry` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `industry: [livepeer, technical]` — confirm before applying. (P51) |
| `niche` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. (P51) |
| `status` | Yes | `draft` | PASS | Correct for a stub. Consistent with absent `veracityStatus: verified` (no P39 violation). |
| `lastVerified` | Yes | `2026-03-16` | PASS | Present, consistent with `status: draft`. |
| `pageVariant` | No | *(absent)* | N/A | `pageType: guide` is canonical; no migration required. (P42) If pageType changes to `resource` per BD-02, then `pageVariant: knowledge-hub` may apply — conditional on BD-02 resolution. |

**Required field count:** 4/10 present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also missing (P41). `keywords` present but failing quality. `sidebarTitle` present but failing terminology consistency.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also absent (P41). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid. (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no migration needed for current `guide`. (P42) |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | Field absent. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | **FAIL** | Absent. |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Absent. |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Absent. Honest value: `unverified`. `status: draft` is coherent — no P39 violation. |
| 1.9 | `industry` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.10 | `niche` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.11 | `description` well-formed | **FAIL** | ` - ` used as clause separator — em-dash equivalent, prohibited per CLAUDE.md. Fix: replace with `: `. Proposed text in Frontmatter Table above. |
| 1.12 | OG image block complete | PASS | All 5 fields present. |
| 1.13 | `keywords` field quality | **FAIL** | All 5 keywords are generic and lack searcher intent. See Frontmatter Table above. |

**Additional finding:** `sidebarTitle: 'Operator Profiles'` uses `operator` where the locked domain term is `orchestrator` (CLAUDE.md domain terms). Not a schema failure (sidebarTitle accepts any string) but a terminology governance failure logged under Category 2 check 2.11.

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**Note:** No body prose exists. All voice checks apply only to the rendered `<Note>` callout and frontmatter fields.

**UK English scan (2.1) — candidates considered (P24):**
- Note text: `"This draft will collect operator profiles, working examples, and community highlights once the source material is ready for publication."` — no US spellings.
- Result: No US spellings. (P54)

**Banned words scan (2.2) — candidates considered (P24):**
- `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` — none found.
- Result: No banned words found.

**Banned phrases scan (2.3) — candidates considered (P24):**
- "etc." / "and so on" — absent
- "once X is stable" pattern: Note text: `"once the source material is ready for publication"` — **matches `once [condition]` banned phrase pattern**. (Frameworks.mdx §3.2)
- Result: 1 banned phrase found.

**Banned constructions scan (2.4) — candidates considered (P24):**
- `not [X]` — absent. PASS.
- `if [condition]` — absent. PASS.
- `This page [verb]`: Note text: `"This draft will collect…"` — `This [noun] will [verb]` self-referential construction. **VIOLATION.**
- `can/may [verb]` in value claims — absent. PASS.
- Em-dashes (P30): description ` - `. **VIOLATION.**
- CustomDivider props — none used. N/A.
- AccordionGroup `title` props — none used. N/A.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. (P54) |
| 2.2 | Zero banned words | PASS | All candidates reviewed. None found. |
| 2.3 | Zero banned phrases | **FAIL** | Note text: `"once the source material is ready for publication"` — `once [condition]` pattern (Frameworks.mdx §3.2). |
| 2.4 | Zero banned constructions | **FAIL** | Two violations: (1) `"This draft will collect…"` — self-referential `This [noun] will [verb]` in Note; (2) ` - ` em-dash equivalent in description (P30). See Banned Construction Scan. |
| 2.5 | Opening order correct | N/A | Stub. |
| 2.6 | Paragraph discipline | N/A | Stub. |
| 2.7 | Audience register correct | N/A | Stub. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator prohibited phrases found. |
| 2.9 | No passive value statements | N/A | Stub. |
| 2.10 | No hedging openers | N/A | Stub. |
| 2.11 | Terminology locked and consistent | **FAIL** | `sidebarTitle: 'Operator Profiles'` uses `operator` instead of the locked domain term `orchestrator`. MDX comment also uses `operator-showcase` as the plan target (line 33) — if page is renamed, update this comment too. Fix: change `sidebarTitle: 'Operator Profiles'` → `sidebarTitle: 'Orchestrator Profiles'`. (P51: confirm before applying.) |

### Banned Construction Scan Table

**Scope:** frontmatter description, `sidebarTitle`, rendered `<Note>` text (all visible text per P30).

| Location | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| `description` field | `"…on the Livepeer network - who is operating…"` | ` - ` as clause separator (em-dash equivalent) | Banned — CLAUDE.md, P30 | **YES — F-03** |
| `<Note>` (line 23) | `"This draft will collect operator profiles, working examples, and community highlights…"` | `This [noun] will [verb]` | Self-referential banned construction — check 2.4 | **YES — F-04** |
| `<Note>` (line 23) | `"once the source material is ready for publication"` | `once [condition]` | Banned phrase — Frameworks.mdx §3.2 (and check 2.3) | **YES — F-05** |

**Category 2 verdict: FAIL** — 3 checks fail: 2.3, 2.4, 2.11

---

## Category 3 — SECTION NAMING & HEADINGS

No body headings exist. Stub. All heading checks are N/A except 3.2 (title check) and 3.6.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | N/A | No body headings — stub. |
| 3.2 | No banned or weak standalone heading terms | PASS | Title `Orchestrator Profiles` — `Profiles` is in the OK tier per Frameworks.mdx §4.1. Not Banned or Avoid. Note: `Profiles` in the OK tier at title level; would be Avoid-tier as a standalone H2 body heading. At title level, PASS. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y`. |
| 3.4 | Domain-anchor rule applied | N/A | No body headings. |
| 3.5 | Heading names concept, not examples | N/A | No body headings. |
| 3.6 | Title well-formed | PASS | `Orchestrator Profiles` — 2 words, concept-derived, no banned forms. |
| 3.7 | Sounds like an expert editorial choice | N/A | No body headings. |

**Category 3 verdict: PASS** — 0 checks fail.

---

## Category 4 — PAGE STRUCTURE

Navigation from docs.json lines 2946–2950 (confirmed):
- Group: "Roadmap and Funding"
- Sequence: `funding-and-support` → **`orchestrator-profiles`**
- `orchestrator-profiles` is the second (last) page in the Roadmap and Funding group. Terminal page — no defined NEXT_PAGE.

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS (stub) | Scope in MDX comment is coherent: operator profiles, hardware, workloads, earnings, operating model. Singular showcase scope. |
| 4.2 | Purpose statement test passes | PASS (stub) | "This page lets the orchestrator see active operator examples and assess what running a node looks like in practice." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | N/A | PREV_PAGE is `funding-and-support`. No NEXT_PAGE — terminal page in the group. Stub — no content adjacency to evaluate. |
| 4.4 | No dead ends | **FAIL** | Stub has no onward navigation. No Related Pages, no cards, no links. Terminal position in the Roadmap and Funding group — the entire group ends at this dead-end stub. |
| 4.5 | Prerequisites stated or linked | N/A | Stub. |
| 4.6 | Out-of-scope is clear | N/A | Stub. |
| 4.7 | Information type per section correct | N/A | Stub. |
| 4.8 | No content duplication from adjacent sections | N/A | Stub. |
| 4.9 | Section orientation page present | N/A | Page-level check. |
| 4.10 | Cross-tab links at journey intersections | **FAIL** | No cross-tab links. MDX comment notes planned cross-refs to `Resources > Community Pools` and `Resources > Community Guides` — not implemented. |

**Category 4 verdict: FAIL** — 2 checks fail: 4.4, 4.10

---

## Category 5 — LAYOUT & COMPONENTS

Component approval file read: `docs-guide/policies/component-layout-decisions.mdx` (confirmed read).

Matrix entry for `guide` pageType: Required sections — `Overview`, `Steps` or `H2 sections`. Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`. Avoid: `Coming Soon`, `PreviewCallout`.

Components used: `<Note>` only. No custom imports.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | **FAIL** | `guide` requires Overview + Steps or H2 sections. Stub has neither. |
| 5.2 | Required sections present | **FAIL** | Required sections absent — no Overview, no Steps, no H2. |
| 5.3 | Only approved components used | PASS | Only `<Note>` used — in `guide` preferred list. |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no PreviewCallout, no TODO/TBD callouts. |
| 5.5 | Information type → component mapping correct | N/A | No sections. |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed. Simple structure with one Mintlify-native Note. Likely clean. |
| 5.7 | No old-schema frontmatter | PASS | No deprecated values in present fields. |
| 5.8 | CSS uses custom properties only | N/A | No CSS. |
| 5.9 | Generated file banners intact | N/A | Not generated. |
| 5.10 | Component naming/import conventions | PASS | No custom imports. `<Note>` is Mintlify native. |

**Category 5 verdict: FAIL** — 2 checks fail: 5.1, 5.2

---

## Category 6 — VERACITY

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | N/A | Stub — no factual claims. |
| 6.2 | Code/commands tested | N/A | Stub. |
| 6.3 | No deprecated API usage | N/A | Stub. |
| 6.4 | Numbers are real | N/A | Stub. |
| 6.5 | REVIEW flags for unverified claims | N/A | Stub. |
| 6.6 | `veracityStatus` honest | **FAIL** | Field absent. Honest value: `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | Stub. |
| 6.8 | Source staleness check | N/A | Stub. |
| 6.9 | No open-ended research tasks | **FAIL** | MDX comment line 33: `"STATUS: STUB - write when operator profiles available"` — open-ended dependency with no named owner, no timeline, no concrete next step. Per checks.mdx §6.9: log in `blocking-items.md` with named owner. Remove from page. |

**Category 6 verdict: FAIL** — 2 checks fail: 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2949: `"v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path. |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check. |
| 7.4 | No structural orphans | PASS | Reachable via "Roadmap and Funding" group. |
| 7.5 | Audience journey complete | **FAIL** | Terminal stub — no journey continuation from this position. Entire Roadmap and Funding group ends at a dead-end stub. |
| 7.6 | Cross-tab graduation paths exist | **FAIL** | No cross-tab links. Planned links to Resources group not implemented. |
| 7.7 | File in correct lane | **FAIL** | Stub with no body content is in the publishable lane. Per checks.mdx §7.7, stubs belong in `_workspace/`. See BD-01. |
| 7.8 | File naming conventions | PASS | `orchestrator-profiles.mdx` — correct kebab-case, no invalid prefix. |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: FAIL** — 3 checks fail: 7.5, 7.6, 7.7

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | N/A | No internal links. |
| 8.2 | All external links live | N/A | No external links. |
| 8.3 | All snippet imports resolve | N/A | No imports. |
| 8.4 | All images load | N/A | No images. |
| 8.5 | Page renders without error | NOT-TESTED | Not executed. Simple structure with one native Note and one MDX comment. Likely clean. |
| 8.6 | No TODO/TBD/Coming Soon in published content | **FAIL** | `<Note>This draft will collect operator profiles, working examples, and community highlights once the source material is ready for publication.</Note>` is rendered and visible to users. Equivalent to a "Coming Soon" placeholder. Per checks.mdx §8.6, placeholder text belongs in `_workspace/`. |

**Category 8 verdict: FAIL** — 1 check fails: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | `status: draft`. Stub state. No sign-off. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions consumed. |
| 9.3 | Gate prerequisites met | **FAIL** | Orchestrators IA not yet approved. Content not written. Gate not open. |
| 9.4 | Phase ordering respected | N/A | No content. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Not yet shipped. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**Connection 1 — Missing frontmatter fields (Root Cause A)**
Checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6 all fail from one root cause. Single frontmatter block fix.

**Connection 2 — title/sidebarTitle terminology inconsistency (Root Cause B)**
Checks 1 (sidebarTitle fail noted in frontmatter table) and 2.11 share the same root cause: `Operator Profiles` vs `Orchestrator Profiles`. Single one-field fix. Also update MDX comment `operator-showcase` plan target if renaming.

**Connection 3 — Stub in publishable lane with visible placeholder Note (Root Cause C)**
Checks 5.1, 5.2, 7.5, 7.7, 8.6 share root cause. Same pattern as `funding-and-support.mdx`. Resolve both together per BD-01.

**Connection 4 — Banned constructions in Note callout (Root Cause D)**
Checks 2.3, 2.4 fail because the Note contains `This [noun] will [verb]` and `once [condition]`. Fix: remove the Note (resolves Root Cause C simultaneously).

**Connection 5 — Description em-dash separator (Root Cause E)**
Checks 1.11 and 2.4 both flag ` - ` in description. Single one-character fix.

**Connection 6 — Open-ended research dependency (Root Cause F)**
Check 6.9 fails. Log in `blocking-items.md` and remove from page.

---

## Blocking Decisions

### BD-01 — Stub in publishable lane (shared with funding-and-support.mdx)

**Category:** Category 7 (IA)
**Severity:** HIGH — affects checks 5.1, 5.2, 7.5, 7.7, 8.6

Both `orchestrator-profiles.mdx` and `funding-and-support.mdx` are stubs in the publishable nav. Decide both together. Options (P52 — neutral framing):
- **Option A:** Keep in docs.json nav — remove Note callout, leave a minimal frontmatter-only shell until source material is available.
- **Option B:** Remove from docs.json nav — move to `_workspace/drafts/`. Re-add when content is ready.

**Owner:** Alison. Decide for both stub pages at once.

### BD-02 — pageType `guide` vs `resource`

**Category:** Category 1 (Frontmatter)
**Severity:** INFO — schema-valid, no urgent fix required

The planned content (operator profiles, case studies, community highlights) fits `resource` (curated discovery) better than `guide` (opinionated guidance for an outcome). Options (P52 — neutral framing):
- **Option A:** Keep `pageType: guide` — schema-valid, no migration needed.
- **Option B:** Change to `pageType: resource`, set `pageVariant: knowledge-hub`. Different template requirements apply (Required: Overview or H2; Preferred: Card, CardGroup, Table, Accordion, AccordionGroup, Note).

Requires human sign-off before actioning. Not urgent — resolve when content is being written.

**Owner:** Alison.

---

## Verdict Summary

**Overall: NEEDS WORK** (stub state — structural/taxonomy fixes executable now; content gap blocks content-level checks)

**Checks that FAIL (P49 — individual check IDs):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 2.11, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3

**24 checks fail.** Pattern is nearly identical to `funding-and-support.mdx` — same stub structure, same missing taxonomy fields, same banned constructions in the Note, same publishable lane question. Additional unique finding: sidebarTitle/title terminology inconsistency (`Operator Profiles` vs `Orchestrator Profiles`).

---

## Prioritised Fix List

**F-01** | HIGH | **Fix sidebarTitle terminology inconsistency** | `sidebarTitle: 'Operator Profiles'` uses non-canonical term. Fix: `sidebarTitle: 'Orchestrator Profiles'` — confirm before applying. Also update MDX comment `operator-showcase` plan target if renaming. (P51) Affects: 2.11.

**F-02** | HIGH | **Add missing required frontmatter fields** | All values require confirmation before applying (P51):
- Proposed: `purpose: evaluate` — confirm before applying.
- Proposed: `complexity: beginner` — confirm before applying.
- Proposed: `lifecycleStage: evaluate` — confirm before applying.
- Proposed: `veracityStatus: unverified` — confirm before applying.
- Proposed: `industry: [livepeer, technical]` — confirm before applying. (P41)
- Proposed: `niche: [infrastructure, protocol]` — confirm before applying. (P41)
Affects: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6.

**F-03** | HIGH | **Resolve BD-01: stub in publishable lane** | Alison decision required. Same decision as `funding-and-support.mdx` — resolve together. Affects: 5.1, 5.2, 7.5, 7.7, 8.6.

**F-04** | MEDIUM | **Fix description separator ` - ` → `:`** | Replace ` - ` in description with `: `. Proposed: `Active orchestrator operators on the Livepeer network: who is operating, what they have built, and community highlights.` (P44: no banned constructions introduced. P51: confirm before applying.) Affects: 1.11, 2.4.

**F-05** | MEDIUM | **Remove Note callout** | Same as funding-and-support.mdx F-04. Remove `<Note>` callout — it contains `This draft will collect…` (banned construction) and `once [condition]` (banned phrase). Deletion resolves both. If BD-01 resolves to Option A (keep in nav), remove Note and leave minimal shell. (P44: deletion introduces no new violations.) Affects: 2.3, 2.4, 8.6.

**F-06** | MEDIUM | **Log operator profiles dependency in blocking-items.md** | MDX comment: `"STATUS: STUB - write when operator profiles available"` — log in `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/blocking-items.md` with named owner and dependency. Remove comment from page after logging. Affects: 6.9.

**F-07** | INFO | **Decide pageType `guide` vs `resource` (BD-02)** | Decide when content is being written. No urgency until stub is being filled. Affects: future template and component choices.

**F-08** | INFO | **Update keywords when content is written** | All 5 current keywords are generic. Update with content-specific terms when source material is available. Proposed starters in Frontmatter Table — confirm against final content. Affects: 1.13.

**F-09** | INFO | **Write content when source material confirmed** | All content-level checks (Category 2 body prose, Category 3 headings, Category 4 full structure, Category 5 layout, Category 6 veracity) are N/A until content is written. Re-run full check after content is written. Cross-tab links to Resources section should be added when content is written: `Resources > Community Pools` and `Resources > Community Guides`.
