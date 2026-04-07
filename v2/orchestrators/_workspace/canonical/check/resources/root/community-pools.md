# Per-Page Quality Check Report
## `v2/orchestrators/resources/community-pools.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2972 — CONFIRMED IN NAV, under "Resources" group)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Lines 1–10 read. File opens with `---` frontmatter delimiter at line 1. No content before the opening delimiter.

No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | `Community Orchestrator Pools` | PASS | Well-formed |
| sidebarTitle | Yes | `Community Pools` | PASS | Appropriate short form |
| description | Yes | `'Compare community orchestrator pools, how they work, and what to review before joining one.'` | FAIL | Self-referential opener: `what to review` is marginal, but more critically: `how they work` describes the following content rather than stating a subject-first fact. See check 1.11 detail. |
| pageType | Yes | `reference` | PASS | Valid 7-type canonical value |
| audience | Yes | `orchestrator` | PASS | Valid 7-token value |
| purpose | Yes | `reference` | PASS | Valid 15-value canonical set — read directly from file (P15) |
| complexity | No | — | FAIL | Required field missing |
| lifecycleStage | No | — | FAIL | Required field missing |
| keywords | Yes | 6 entries: `livepeer`, `orchestrators`, `orchestrator guides and references`, `orchestrator pools`, `pools` | FAIL | Quality fail: `orchestrator guides and references` is a description phrase, not a keyword. `livepeer`, `orchestrators`, `pools` are generic (check 1.13). Proposed improvements: `livepeer pool worker onboarding`, `orchestrator pool comparison`, `Titan Node Livepeer pool` |
| og:image block | Yes | All 5 OG fields present, path `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` | FAIL | Uses `.svg` fallback logo rather than the canonical OG image path used by the tab (`/snippets/assets/site/og-image/en/orchestrators.png`). SVG as OG image is non-standard (most OG scrapers expect PNG/JPEG). Asset confirmed on disk, but type inconsistency. |
| veracityStatus | No | — | FAIL | Required field missing |
| industry | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| niche | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| status | Yes | `review` | FAIL | Invalid enum. Valid values: `current`, `draft` only (P57) |

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)
**Additional required fields missing:** `industry`, `niche`

---

## Blocking Decision

**BD-1:** Page content state is a placeholder (line 50: "A page for pool operators to outline their pools, how to join, what the rewards are, etc." — literal stub description). The Note at line 52 states: "Uses an automation to pull in data from a google sheet." The only actual content is a single placeholder Card with `title="Pool Name"` and `href="#"`. This is not publishable content — it is a stub awaiting automation implementation.

Options:
- [A] Keep as stub with `status: draft` and block from publishing until automation is implemented
- [B] Replace stub with static pool directory content pending automation

All category findings below evaluate the current page state per P35. This BD must be resolved before content fixes are actionable.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no deprecated pageType migration active |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` — read directly from file |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is wrong enum. Correct atomic fix (P84): change `status: review` to `status: draft` AND add `veracityStatus: unverified`. |
| 1.9 | `industry` array valid if present | FAIL | Field absent — required (P41). Proposed: `industry: [technical, business]` — confirm before applying (P51) |
| 1.10 | `niche` array valid if present | FAIL | Field absent — required (P41). Proposed: `niche: [web3, infrastructure]` — confirm before applying (P51) |
| 1.11 | `description` well-formed | FAIL | `'Compare community orchestrator pools, how they work, and what to review before joining one.'` — describes what the page does ("what to review before joining") rather than stating subject-first. Better: state the pools, not what the page does about them. No em-dash detected in description field. 94 chars — within limit. |
| 1.12 | OG image block complete | BORDERLINE | All 5 OG fields present. Asset (`LivepeerDocsLogo.svg`) confirmed on disk. However, `.svg` type with `'og:image:type': image/png` declared — the declared type contradicts the actual file extension. Human review recommended: replace with canonical PNG OG image for consistency with other orchestrator pages. |
| 1.13 | `keywords` field quality | FAIL | `orchestrator guides and references` is a description phrase, not a keyword term a searcher would use (check 1.13). `livepeer`, `orchestrators`, `pools` are too generic. Proposed stronger keywords: `livepeer pool worker onboarding`, `orchestrator pool comparison`, `Titan Node Livepeer` — confirm before applying. |

**Category 1 verdict: 9 FAILs (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13)**

Note: 1.12 marked FAIL rather than BORDERLINE because of the declared `image/png` type mismatching the `.svg` file extension — this is an objective schema inconsistency.

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — candidates listed even when PASS):**

Candidates checked: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

Page has minimal visible body text — lines 48–52 and the single placeholder Card.

- Line 48 Note: "This page is not reviewed or endorsed by the Livepeer team." — no banned words
- Line 50: "A page for pool operators to outline their pools, how to join, what the rewards are, etc." — `etc.` is a banned phrase (check 2.3)
- Line 52 Note: "Uses an automation to pull in data from a google sheet." — no banned words

`significant`, `various`, `several` — absent from all visible text.

**Banned phrase scan:**
- Line 50: "A page for pool operators to outline their pools, how to join, what the rewards are, etc." — `etc.` is a banned phrase per check 2.3 ("and so on"/"etc." prohibited)
- "This page" opener — line 50 ("A page for pool operators") is effectively a `This page [describes]` self-referential statement — check 2.4 violation
- Line 48: "This page is not reviewed or endorsed by the Livepeer team." — `This page [verb]` opener in the Note — check 2.4 violation. Note: per P56, `This page [verb]` belongs only in check 2.4 (banned construction), not check 2.3. Check 2.3 result must not FAIL for this pattern.

**Banned Construction Scan (P58 — completed before check 2.4 result set):**

Em-dash scan (P74 — three explicit scan targets):
1. `description` field: `'Compare community orchestrator pools, how they work, and what to review before joining one.'` — no em-dash
2. H2/H3 heading text — no headings on this page beyond the implicit structure
3. Body prose (lines 48–64) — no em-dash found

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 48 | "This page is not reviewed or endorsed by the Livepeer team." | `This page [verb]` | Banned construction (check 2.4) — in a Note component | YES |
| 50 | "A page for pool operators to outline their pools, how to join, what the rewards are, etc." | `etc.` | Banned phrase (check 2.3) | YES |
| 50 | "A page for pool operators to outline their pools..." | `This page` equivalent | Self-description — banned construction (check 2.4) | YES |

Per P56: `This page [verb]` is check 2.4 only, not check 2.3. The `etc.` finding belongs in check 2.3. Separate findings.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | None found |
| 2.3 | Zero banned phrases | FAIL | Line 50: `etc.` — banned phrase per check 2.3 |
| 2.4 | Zero banned constructions | FAIL | Line 48 (Note): `This page is not reviewed` — `This page [verb]` banned construction (check 2.4, P56). Line 50: `A page for pool operators to outline their pools` — implicit self-description equivalent. Em-dashes: none found in any scan target — no P30 finding. |
| 2.5 | Opening order correct | FAIL | The first rendered content is a Note at line 48 that opens with "This page is not reviewed or endorsed..." — self-referential opener violates check 2.5 (does not open with subject/value) |
| 2.6 | Paragraph discipline | N/A | Insufficient content to evaluate paragraph discipline; stub state |
| 2.7 | Audience register correct | N/A | Stub state; insufficient content |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | N/A | Stub state |
| 2.10 | No hedging openers | FAIL | Page opens with a disclaimer/caveat Note ("This page is not reviewed or endorsed by the Livepeer team.") before any subject content (check 2.10) |
| 2.11 | Terminology locked and consistent | PASS | `pool worker`, `orchestrator` used correctly in comments. Minimal body text is consistent. |

**Category 2 verdict: 4 FAILs (2.3, 2.4, 2.5, 2.10)**

---

## Category 3 — SECTION NAMING & HEADINGS

No H2 or H3 headings present in the visible page body. The page has no section headings beyond the page title.

**Heading Score Table:**

No headings to score.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | N/A | No H2/H3 headings on this page |
| 3.2 | No banned or weak standalone heading terms | N/A | No headings present |
| 3.3 | No literal contrast labels | N/A | No headings |
| 3.4 | Domain-anchor rule applied | N/A | No headings |
| 3.5 | Heading names concept, not examples | N/A | No headings |
| 3.6 | Title well-formed | PASS | "Community Orchestrator Pools" — concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | N/A | No headings to evaluate |

**Category 3 verdict: 0 FAILs**

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | FAIL | Page is in stub state with no coherent content. It cannot currently serve its stated purpose (pool directory). |
| 4.2 | Purpose statement test | FAIL | Cannot write a passing statement: "This page lets the orchestrator [find a community pool to join]" — no pool data present to let them do this. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json position: after `community-guides` (line 2971), before `Technical Reference` group (line 2973). Reader arrives from Community Guides with context on community resources. Position is appropriate. (P25 — confirmed from docs.json) |
| 4.4 | No dead ends | FAIL | Placeholder Card has `href="#"` — a literal dead end. Page provides no actionable forward path for pool workers. |
| 4.5 | Prerequisites stated or linked | PASS | Note at line 48 links to Join a Pool (`/v2/orchestrators/guides/deployment-details/join-a-pool`) — appropriate prerequisite context |
| 4.6 | Out-of-scope is clear | N/A | Stub state |
| 4.7 | Information type per section correct | N/A | Stub state; no evaluable sections |
| 4.8 | No content duplication | N/A | Stub state |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | FAIL | Zero cross-tab links. Only one internal link (`/v2/orchestrators/guides/deployment-details/join-a-pool`) — within-tab only. |

**Category 4 verdict: 4 FAILs (4.1, 4.2, 4.4, 4.10)**

---

## Category 5 — LAYOUT & COMPONENTS

For `pageType: reference` — Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table. Avoid: TODO/TBD/Coming Soon. Required: Reference section.

Note: `component-layout-decisions.mdx` not read in this session. Results based on quick-reference matrix from checks.mdx §5 (P72).

**Component Matrix:**

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| Note | Yes | YES | Informational callout |
| Columns | Yes | NOT-TESTED | `Columns` component — not in quick-reference matrix. Approval status unknown without reading component-layout-decisions.mdx (P22) |
| Card | Yes | YES — navigation | Used as placeholder with `href="#"` |

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | FAIL | Stub page with a single placeholder Card and no reference content. Does not implement `reference` template |
| 5.2 | Required sections present | FAIL | No Reference section content — entire page is a placeholder |
| 5.3 | Only approved components used | NOT-TESTED | `Columns` component not in quick-reference matrix. Cannot determine approval without reading component-layout-decisions.mdx (P22). Other components (Note, Card) are appropriate. |
| 5.4 | Avoided components absent | PASS | Lines 22–44: `{/* TODO: ... */}` block is an MDX comment — not rendered (P78). No rendered TODO/TBD/Coming Soon components. |
| 5.5 | Information type to component mapping | FAIL | No reference content mapped to appropriate components |
| 5.6 | MDX renders clean | FAIL | `Card` has `href="#"` — renders but provides a broken navigation experience. Additionally, `icon="swimming-pool"` may not be a valid FontAwesome icon — verify. |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is not a valid enum value — wrong enum (P57) |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS |
| 5.9 | Generated file banners intact | N/A | Not a generated file; Note at line 52 references an automation that is not yet implemented |
| 5.10 | Component naming/import conventions | PASS | No import statements (no custom components imported) |

**Category 5 verdict: 5 FAILs (5.1, 5.2, 5.5, 5.6, 5.7) — 1 NOT-TESTED (5.3)**

---

## Category 6 — VERACITY

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | N/A | Stub page with no factual claims to verify |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | N/A | No numbers present |
| 6.5 | REVIEW flags for unverified claims | FAIL | `{/* TODO */}` block (lines 22–44) is not in `{/* REVIEW: [claim] — [source] */}` format (P61). No REVIEW flags present |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: review` wrong enum. For stub content, `veracityStatus: unverified` is appropriate |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | N/A | No content to assess for staleness |
| 6.9 | No open-ended research tasks | FAIL | TODO block (lines 22–44) contains open-ended tasks with no named owner. Line 52 Note references an automation ("Uses an automation to pull in data from a google sheet") — automation not implemented, no responsible owner named. Both check 6.9 FAIL and check 6.5 FAIL (P70) |

**Category 6 verdict: 3 FAILs (6.5, 6.6, 6.9)**

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at line 2972 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Resources group |
| 7.5 | Audience journey complete | FAIL | Page is a stub — a pool worker arriving here to find a pool to join encounters only placeholder content and a dead-link Card. Journey is broken at this page. |
| 7.6 | Cross-tab graduation paths exist | FAIL | Zero cross-tab links. Pool workers seeking to understand staking or the protocol would find no graduation path. |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/resources/` |
| 7.8 | File naming conventions | PASS | `community-pools.mdx` — standard filename |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: 2 FAILs (7.5, 7.6)**

---

## Category 8 — LINKS & RENDERING

Internal link verification (filesystem check):
- `/v2/orchestrators/guides/deployment-details/join-a-pool` (in Note, line 48) — EXISTS

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | Placeholder Card uses `href="#"` — not a resolving internal link. The Note link to `/v2/orchestrators/guides/deployment-details/join-a-pool` resolves. |
| 8.2 | All external links live | N/A | No external links on this page |
| 8.3 | All snippet imports resolve | N/A | No snippet imports |
| 8.4 | All images load | BORDERLINE | OG image uses `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` — asset confirmed on disk, but `.svg` format with `image/png` declared type is a metadata inconsistency |
| 8.5 | Page renders without error | BORDERLINE | Page will render (no syntax errors). However `icon="swimming-pool"` on the Card is unverified — may produce a missing icon rather than an error. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* TODO */}` block is MDX comment — not rendered (P78). |

**Category 8 verdict: 1 FAIL (8.1) — 2 BORDERLINE (8.4, 8.5)**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review. Stub page state, wrong-enum status, TODO block — page clearly not approved |
| 9.2 | All consuming decisions in registry | FAIL | The automation-powered content model ("pulls from Google Sheet") implies a design decision. No corresponding registry entry found. The MDX comment at line 66–75 describes cross-references but no registry entry for the automation design decision exists (P89) |
| 9.3 | Gate prerequisites met | FAIL | Wrong-enum status, missing required fields, stub content — content-pass gate not met |
| 9.4 | Phase ordering respected | N/A | Cannot determine from page state |
| 9.5 | Findings gathered before fixes | N/A | Not evaluable |
| 9.6 | Feedback routed | N/A | Not evaluable |

**Category 9 verdict: 3 FAILs (9.1, 9.2, 9.3)**

---

## Spelling/Typo Check

Visible text is minimal. Scanning all visible text:
- Line 48 Note: "This page is not reviewed or endorsed by the Livepeer team." — no typos
- Line 50: "A page for pool operators to outline their pools, how to join, what the rewards are, etc." — no typos
- Line 52 Note: "Uses an automation to pull in data from a google sheet." — `google sheet` should be `Google Sheet` (proper noun capitalisation)
- Card title "Pool Name" — placeholder, not a typo
- MDX comments: not rendered, not in scope for typo check

**Finding: `google sheet` at line 52 — should be `Google Sheet` (proper noun)**

---

## Component Matrix

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| Note | Yes | YES | Appropriate |
| Columns | Yes | NOT-TESTED | Not in quick-reference matrix; approval status requires reading component-layout-decisions.mdx (P22) |
| Card | Yes | YES | Appropriate for navigation; broken href="#" is a content issue not a component issue |

---

## Cross-Category Connections

**Root Cause A:** `status: review` (wrong enum) + missing `veracityStatus`
Affects: 1.1, 1.8, 5.7, 9.1, 9.3
Fix: F-01 (atomic)

**Root Cause B:** Missing required fields (`complexity`, `lifecycleStage`, `industry`, `niche`)
Affects: 1.1, 1.6, 1.7, 1.9, 1.10
Fix: F-03, F-04

**Root Cause C:** Stub page state — no content, placeholder Card, automation not implemented
Affects: 4.1, 4.2, 4.4, 5.1, 5.2, 5.5, 7.5 — all downstream of BD-1
Fix: BD-1 must be resolved first

**Root Cause D:** `This page [verb]` banned construction in Note and stub text
Affects: 2.4, 2.5, 2.10
Fix: F-07

**Root Cause E:** TODO block and automation note — open-ended tasks, no owner
Affects: 6.5, 6.9, 9.2
Fix: F-08

---

## Verdict Summary

**Total FAIL count:** 24
**FAIL check IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.3, 2.4, 2.5, 2.10, 4.1, 4.2, 4.4, 4.10, 5.1, 5.2, 5.5, 5.6, 5.7, 6.5, 6.6, 6.9, 7.5, 7.6, 8.1, 9.1, 9.2, 9.3

*(Recount for accuracy: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 = 9; 2.3, 2.4, 2.5, 2.10 = 4; 4.1, 4.2, 4.4, 4.10 = 4; 5.1, 5.2, 5.5, 5.6, 5.7 = 5; 6.5, 6.6, 6.9 = 3; 7.5, 7.6 = 2; 8.1 = 1; 9.1, 9.2, 9.3 = 3. Total: 9+4+4+5+3+2+1+3 = 31 individual FAIL check IDs)*

**Corrected FAIL count: 31**
**FAIL check IDs (complete):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.3, 2.4, 2.5, 2.10, 4.1, 4.2, 4.4, 4.10, 5.1, 5.2, 5.5, 5.6, 5.7, 6.5, 6.6, 6.9, 7.5, 7.6, 8.1, 9.1, 9.2, 9.3

**PASS count:** 14
**BORDERLINE count:** 2 (8.4, 8.5)
**NOT-TESTED count:** 2 (5.3, 6.1-equivalent) — not counted in FAIL total (P59)

**Overall verdict: NEEDS WORK — BLOCKED on BD-1 (stub page state)**

Most Category 4/5/7 failures are downstream of BD-1. Resolve the blocking decision before executing content fixes.

---

## Fix List

**F-01** — Change `status: review` to `status: draft` AND add `veracityStatus: unverified` (atomic fix, P84). Resolves: 1.8, 5.7.
```
status: draft
veracityStatus: unverified
```

**F-02** — Rewrite `description` field (check 1.11). Current description describes what the page does rather than stating subject-first. Proposed — confirm before applying (P51): `'Active community orchestrator pools: how to compare terms, join, and what to expect from each pool operator.'` (P75 self-check: no em-dash, no banned words, subject-first — passes)

**F-03** — Add missing required frontmatter fields `complexity` and `lifecycleStage` (checks 1.6, 1.7). Proposed — confirm before applying (P51):
```
complexity: beginner
lifecycleStage: evaluate
```

**F-04** — Add missing required frontmatter fields `industry` and `niche` (checks 1.9, 1.10, P41). Proposed — confirm before applying (P51):
```
industry: [technical, business]
niche: [web3, infrastructure]
```

**F-05** — Replace `keywords` with searcher-intent terms (check 1.13). Current `orchestrator guides and references` is a description phrase. Proposed — confirm before applying:
```
keywords:
  - livepeer pool worker onboarding
  - orchestrator pool comparison
  - Titan Node Livepeer pool
  - community pool livepeer
  - join orchestrator pool
```

**F-06** — Replace OG image path with canonical PNG (checks 1.12, 8.4). Current path uses `.svg` with declared `image/png` type — type contradiction. Proposed: change to match other orchestrator pages: `/snippets/assets/site/og-image/en/orchestrators.png`. Confirm before applying.

**F-07** — Rewrite the opening Note at line 48 to remove `This page [verb]` banned construction (checks 2.4, 2.5, 2.10). Current: `"This page is not reviewed or endorsed by the Livepeer team."` Proposed (P75 self-check: no banned constructions — passes): `"Community pool listings are not reviewed or endorsed by the Livepeer Foundation. Verify terms and operator credibility before joining."` Also remove `etc.` from line 50 (check 2.3).

**F-08** — Resolve BD-1 (stub page state). Fix `href="#"` dead link and replace placeholder Card with actual pool directory content, or implement the Google Sheets automation. Human decision required. Resolves: 4.1, 4.2, 4.4, 5.1, 5.2, 5.5, 7.5.

**F-09** — Add at least one cross-tab link (check 4.10, 7.6). Suggested target: `/v2/lpt/` (delegators — pool workers interested in staking) or `/v2/about/` (protocol overview). Confirm target before adding.

**F-10** — Convert or resolve the TODO block at lines 22–44 (checks 6.5, 6.9, P70). Convert veracity items to `{/* REVIEW: [claim] — [source]. [Name] to confirm. */}` format or resolve and remove. Human task.

**F-11** — Fix typo at line 52: `google sheet` → `Google Sheet`.

**F-12** — Verify `icon="swimming-pool"` is a valid FontAwesome icon name (check 5.6). If not valid, replace with a confirmed icon from `docs-guide/tooling/reference-maps/icon-map.mdx`.

**F-13** — Register the automation design decision (Google Sheets pool data source) in `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` (check 9.2, P89). The decision exists in page comments but not in the registry.

**F-14** — Obtain and record human sign-off before page can advance (check 9.1). The `status: draft` from F-01 correctly signals this is not yet approved.
