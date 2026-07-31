# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` — stub file searched; NOT FOUND (see Category 7)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Go Production: On-chain, GPU, and Network Connect` | FAIL | Em-dash absent: PASS on that. Colon in title: borderline but not prohibited. However the title contains a comma list — 3 concepts, not one concept |
| `sidebarTitle` | ABSENT | — | FAIL | Required field missing |
| `description` | Yes | `Take your tested gateway live — add on-chain registration, GPU pipelines, and connect to the public network` | FAIL | Em-dash (`—`) in description. P30 prohibition applies |
| `pageType` | ABSENT | — | FAIL | Required field missing |
| `audience` | ABSENT | — | FAIL | Required field missing |
| `purpose` | ABSENT | — | FAIL | Required field missing |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | ABSENT | — | FAIL | Required field missing |
| `industry` | ABSENT | — | FAIL | Required (P41) |
| `niche` | ABSENT | — | FAIL | Required (P41) |
| OG image block | ABSENT | — | FAIL | All 5 OG fields absent |
| `status` | Yes | `stub` | INFO | Non-canonical status value |
| `tutorial` | Yes | `3-of-3` | INFO | Non-standard field |

**Required field count:** 1/10 (description present but fails). Missing: `sidebarTitle`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG block, `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Only `title` and `description` present from required set; both fail. All others absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | Field absent. Proposed: `pageType: guide` (three independent upgrade paths, not a linear tutorial) or `pageType: tutorial` — see BD-1. Confirm before applying |
| 1.3 | `pageVariant` valid if present | N/A | |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: build` or `purpose: configure` depending on BD-1 — confirm before applying |
| 1.5 | `audience` uses 7-token set | FAIL | Field absent. Proposed: `audience: gateway` — consistent with gateway-tutorial series context. See BD-1 |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Correct: `veracityStatus: unverified` |
| 1.9 | `industry` valid if present | FAIL | Absent — required (P41). Proposed: `industry: [technical, economics]` — confirm before applying |
| 1.10 | `niche` valid if present | FAIL | Absent — required (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Em-dash (`—`). Proposed: `Take your tested gateway live: add on-chain registration, GPU pipelines, and public network connectivity.` (87 chars) — confirm before applying |
| 1.12 | OG image block complete | FAIL | All 5 OG fields absent |
| 1.13 | `keywords` field quality | FAIL | Field absent |

**Category 1 verdict: FAIL** — 12 checks fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

---

## Category 2 — VOICE & COPY

**NOTE:** Stub has minimal prose. Most copy checks are NOT-TESTED due to stub status.

### UK English scan (check 2.1)
Outline headings and text scanned: no US spellings found.
Result: PASS (limited scope).

### Banned words scan (check 2.2)
Outline text scanned. No banned words found.
Result: PASS (limited scope).

### Banned phrases scan (check 2.3)
No banned phrases in outline.
Result: PASS (limited scope).

### Banned constructions scan (check 2.4)

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| Title | `Go Production: On-chain, GPU, and Network Connect` | — | No em-dash. PASS | No |
| Description | `Take your tested gateway live — add on-chain registration...` | Em-dash (`—`) | Em-dash prohibition (P30) | YES — FAIL |
| Outline headings | `Upgrade 1 — On-chain Registration` | Em-dash (`—`) in heading (P48) | Em-dash prohibition | YES — FAIL |
| Outline headings | `Upgrade 2 — GPU Pipelines` | Em-dash (`—`) in heading | Em-dash prohibition | YES — FAIL |
| Outline headings | `Upgrade 3 — Network Connect` | Em-dash (`—`) in heading | Em-dash prohibition | YES — FAIL |
| Outline | `What's next — the Guides` | Em-dash (`—`) | Em-dash prohibition | YES — FAIL |
| Decision table | `Persona A — Graduate (AI app)` | Em-dash in table cell | Em-dash prohibition (P30 — all visible text) | YES — FAIL |
| Decision table | `Persona B — Provider (GaaS)` | Em-dash in table cell | Em-dash prohibition | YES — FAIL |
| Decision table | `Persona C — SDK Builder` | Em-dash in table cell | Em-dash prohibition | YES — FAIL |
| Decision table | `Persona D — Video Operator` | Em-dash in table cell | Em-dash prohibition | YES — FAIL |
| Decision table | `Persona E — Platform Builder` | Em-dash in table cell | Em-dash prohibition | YES — FAIL |
| Outline | "→ Payments & Pricing: understand fee flow, set pricing strategy" | `→` (arrow notation) | Not prohibited but unusual in rendered content | FLAG for review |

Em-dash count: 10 violations in outline (5 in table cells, 3 in headings, 1 in description, 1 in "What's next — the Guides").

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings in stub content |
| 2.2 | Zero banned words | PASS | No banned words found |
| 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2.4 | Zero banned constructions | FAIL | 10 em-dashes across description, heading props, table cells, inline notes |
| 2.5–2.11 | Not applicable | NOT-TESTED | No developed prose content |

**Category 2 verdict: FAIL** — 1 confirmed fail: 2.4. 7 NOT-TESTED.

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table (outline headings only)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| What you'll do | 2 | 2 | 3 | 3 | 4 | 14/25 | Generic; question-like |
| Prerequisites | 5 | 3 | 5 | 5 | 5 | 23/25 | OK |
| Upgrade 1 — On-chain Registration | 4 | 4 | 4 | 4 | 3 | 19/25 | Em-dash; "Upgrade N" is a non-standard pattern |
| Upgrade 2 — GPU Pipelines | 4 | 4 | 5 | 4 | 4 | 21/25 | Em-dash |
| Upgrade 3 — Network Connect | 4 | 4 | 5 | 4 | 4 | 21/25 | Em-dash |
| Decision guide: which upgrades do you need? | 2 | 3 | 3 | 3 | 2 | 13/25 | Question heading — check 3.2 (heading must not be a question) |
| What's next — the Guides | 2 | 2 | 3 | 2 | 3 | 12/25 | Em-dash; "What's next" is generic |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "What you'll do" (14), "Upgrade 1 — On-chain Registration" (19), "Decision guide: which upgrades do you need?" (13), "What's next — the Guides" (12) all fail |
| 3.2 | No banned or weak standalone heading terms | FAIL | "What you'll do" — question-like; "What's next — the Guides" — "What's next" is avoid/banned. "Decision guide: which upgrades do you need?" — question heading (not allowed per CLAUDE.md: "No questions in headings") |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | NOT-TESTED | Stub headings are working notes |
| 3.5 | Heading names concept, not examples | FAIL | "Decision guide: which upgrades do you need?" names the question-answering process, not the concept |
| 3.6 | Title well-formed | FAIL | `Go Production: On-chain, GPU, and Network Connect` — 3 concepts listed. A title should name one governing concept. Proposed: `Production Readiness` or `Go Live` — shorter, governing concept. Confirm before applying |
| 3.7 | Sounds like expert editorial choice | FAIL | "What you'll do", "What's next — the Guides" are generic; question headings fail this test |

**Category 3 verdict: FAIL** — 5 checks fail: 3.1, 3.2, 3.5, 3.6, 3.7

### Spelling/Typo Check
Outline text scanned: "on-chain", "GPU", "GaaS", "NaaP", "ETH", "Arbitrum", "activateBroadcaster" — all correct technical terms. No typos found.

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | FAIL | Outline describes 3 independent upgrades ("do any or all"). A page serving 3 independent jobs is a scope problem. This is a critical structural concern |
| 4.2 | Purpose statement test passes | FAIL | Cannot write "This page lets the [AUDIENCE] [concrete action]" — the page serves 3 different paths for 3 different configurations |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | NOT in docs.json. Adjacency cannot be confirmed |
| 4.4 | No dead ends | NOT-TESTED | Outline "What's next" links to 4 guide areas — destinations not verified |
| 4.5 | Prerequisites stated or linked | NOT-TESTED | Outline requires "Tutorial 1 and/or Tutorial 2" — conditional prerequisite |
| 4.6 | Out-of-scope is clear | NOT-TESTED | |
| 4.7 | Information type per section is correct | NOT-TESTED | |
| 4.8 | No content duplication | NOT-TESTED | |
| 4.9 | Section orientation page present | NOT-TESTED | |
| 4.10 | Cross-tab links | NOT-TESTED | |

**Structural concern (BD-3):** The "3 independent upgrades, do any or all" structure is a scope problem. A well-formed tutorial serves one job. This page attempts to serve: (1) on-chain registration, (2) GPU pipeline setup, (3) network connect — which are separate concerns requiring separate pages or a navigation guide.

**Category 4 verdict: FAIL** — 3 confirmed fails: 4.1, 4.2, 4.3

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | No pageType. `<Note>stub</Note>` + outline. Not a tutorial or guide template |
| 5.2 | Required sections present | FAIL | No developed MDX sections |
| 5.3 | Only approved components used | N/A — no components beyond `<Note>` | |
| 5.4 | Avoided components absent | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` — placeholder in publishable-lane file |
| 5.5–5.9 | Not applicable | NOT-TESTED | No developed content |
| 5.10 | Component naming/import conventions | FAIL | No imports in a publishable MDX file |

**Category 5 verdict: FAIL** — 3 confirmed fails: 5.1, 5.2, 5.4, 5.10

---

## Category 6 — VERACITY

**NOTE:** No factual claims in developed prose. Outline contains references that need verification.

### Veracity Claims Inventory (from outline)

| Claim | Location | Type | Status |
|-------|----------|------|--------|
| `activateBroadcaster` is the registration command | Outline | technical | NOT-TESTED — this appears to be a gateway-side command |
| `v2/orchestrators/setup/activate.mdx` exists | Cross-tab reference | structural | NOT-TESTED — path not found in docs.json search |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1–6.4 | Factual/procedural/code/numbers | NOT-TESTED | Stub — no developed content |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW flags. Outline has unverified claims |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Correct: `veracityStatus: unverified` |
| 6.7–6.8 | Glossary / staleness | NOT-TESTED | |
| 6.9 | No open-ended research tasks | FAIL | Entire outline is an open research task. Reference files listed without verification status |

**Category 6 verdict: FAIL** — 3 confirmed fails: 6.5, 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | FAIL | **BLOCKING DECISION.** NOT FOUND in docs.json. Structural orphan. NOTE: docs.json lines 2634–2636 list `tutorial-3-go-production` in the GATEWAYS tab (`v2/gateways/guides/tutorials/tutorial-3-go-production`). The stub here is at a different path in the orchestrators directory — these appear to be two different files. The gateways nav entry may reference a separate (possibly published) version |
| 7.2 | Navigation matches file system | FAIL | Not in docs.json |
| 7.3 | Tab entry portal routes to all sections | FAIL | Not reachable |
| 7.4 | No structural orphans | FAIL | Page is unreachable |
| 7.5–7.6 | Journey / graduation | NOT-TESTED | |
| 7.7 | File in correct lane | FAIL | Same issue as byoc-cpu stub: `stubs/` subdirectory in publishable lane without docs.json entry |
| 7.8 | File naming conventions | PASS | `tutorial-go-production.mdx` — lowercase hyphenated |
| 7.9 | TTL | N/A | |

**Category 7 verdict: FAIL** — 5 checks fail: 7.1, 7.2, 7.3, 7.4, 7.7

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | All internal links resolve | NOT-TESTED | No rendered MDX links in stub content |
| 8.2 | All external links live | NOT-TESTED | |
| 8.3–8.4 | Imports / images | N/A | No imports, no images |
| 8.5 | Page renders without error | PASS | Minimal content renders. No JSX errors expected |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | `<Note>This page is a stub. Content to be developed.</Note>` |

**Category 8 verdict: FAIL** — 1 fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off |
| 9.2 | All consuming decisions in registry | FAIL | Audience, pageType, and structural scope (3 independent upgrade paths vs one page) are all unresolved. No registry entries |
| 9.3 | Gate prerequisites met | FAIL | No developed content, not in docs.json, multiple gates not met |
| 9.4 | Phase ordering respected | FAIL | No content written |
| 9.5–9.6 | Findings / feedback | NOT-TESTED | |

**STUB GOVERNANCE FLAG:** Stub content must be completed before this page can ship. Additional prerequisite: scope decision on whether 3 independent upgrade paths belong on one page (BD-3).

**Category 9 verdict: FAIL** — 4 checks fail: 9.1, 9.2, 9.3, 9.4

---

## Cross-Category Connections

**Root Cause 1: Page is a stub — no developed content**
Affects: Most NOT-TESTED results across all categories.
Fix: Write content. But first resolve BD-1 (audience), BD-2 (docs.json position), and BD-3 (page scope).

**Root Cause 2: Structural orphan — not in docs.json**
Affects: Cat 7.1–7.4, 7.7, 4.3
Fix: Resolve BD-1 and BD-2 first.

**Root Cause 3: Em-dashes throughout outline**
Affects: Cat 2.4 (10 violations), description 1.11, headings 3.1
Fix: Replace all `—` with `:` in headings or rewrite. Remove from table cells. Fix description (F-02).

**Root Cause 4: One-page-three-jobs scope problem**
Affects: Cat 4.1, 4.2
Fix: BD-3 — decide whether to split into 3 pages or restructure as a navigation/choice guide.

---

## Blocking Decisions

**BD-1 — BLOCKING: Audience assignment**
Same structural question as the BYOC CPU stub: this page appears in `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/` but describes gateway production setup. Audience options: [A] `audience: gateway` — page moves to gateway tab; [B] `audience: orchestrator` — page stays in orchestrators tab.
Note: docs.json already has `tutorial-3-go-production` in the gateways tab (lines 2636, 2729) pointing to `v2/gateways/guides/tutorials/tutorial-3-go-production`. Relationship between that page and this stub must be resolved.
Blocks: 1.5, 7.1, 7.7

**BD-2 — BLOCKING: docs.json entry and navigation position**
Not in docs.json. Position must be decided before content is written.
Blocks: 7.1–7.4, 4.3

**BD-3 — BLOCKING: Page scope — one page or three**
The outline describes 3 independent upgrade paths ("do any or all"). Options:
[A] Single guide page — "Production Readiness" navigation guide that links to 3 separate pages for each upgrade
[B] Three separate instruction pages — On-chain Registration, GPU Pipelines, Network Connect
[C] Current structure — one tutorial with conditional sections
If A: pageType changes to `guide`, page becomes a routing/choice page.
If B: 3 new pages needed.
If C: scope problem persists — the page cannot pass check 4.1.
Blocks: 4.1, 4.2, 1.2, 1.4

---

## Verdict Summary

**Overall: REWRITE REQUIRED**

Stub page. No developed content. Critical structural issues: not in docs.json, audience ambiguous, page scope attempts to serve 3 independent jobs. Cannot ship in current state.

**Checks that fail: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.1, 3.2, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4**

**38 checks fail. Multiple NOT-TESTED due to stub status.**

---

## Prioritised Fix List

**F-01 — CRITICAL — Resolve BD-1 (audience + location), BD-2 (docs.json), BD-3 (scope)**
All three blocking decisions must be resolved before content can be written. The order is: scope → audience → docs.json entry.
Fixes: 4.1, 4.2, 1.5, 7.1–7.4, 7.7

**F-02 — HIGH — Fix description em-dash**
Current: `Take your tested gateway live — add on-chain registration, GPU pipelines, and connect to the public network`
Proposed: `Take your tested gateway live: add on-chain registration, GPU pipelines, and public network connectivity.` (93 chars) — confirm before applying.
Fixes: 1.11, 2.4 (partial)

**F-03 — HIGH — Write developed content**
Replace stub content with full tutorial or guide MDX after scope decision.
Fixes: 5.1, 5.2, 5.4, 5.10, all NOT-TESTED checks

**F-04 — HIGH — Add all required frontmatter fields when content is written**
Minimum additions (all proposed — confirm before applying per P51):
```yaml
sidebarTitle: Go Production
pageType: [resolve via BD-3]
audience: [resolve via BD-1]
purpose: [resolve via BD-3]
complexity: intermediate
lifecycleStage: setup
veracityStatus: unverified
keywords:
  - go production livepeer gateway
  - on-chain gateway registration arbitrum
  - gpu pipeline livepeer production
  - connect to livepeer network
industry:
  - technical
  - economics
niche:
  - protocol
  - infrastructure
og:image: /snippets/assets/site/og-image/en/orchestrators.png
og:image:alt: Livepeer Docs social preview image for Orchestrators
og:image:type: image/png
og:image:width: 1200
og:image:height: 630
```
Fixes: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13

**F-05 — MEDIUM — Fix all em-dashes in outline (when content is written)**
Replace `Upgrade N — [concept]` with `Upgrade N: [concept]`. Replace `What's next — the Guides` with `Next Actions`. Fix all em-dashes in table cells (persona rows: use `:` or restructure as columns).
Fixes: 2.4, 3.1

**F-06 — MEDIUM — Fix question heading**
`Decision guide: which upgrades do you need?` → `Upgrade Decision Matrix` (estimated 23/25). Verify no conflict with existing headings.
Fixes: 3.2, 3.1 (partial)

**F-07 — MEDIUM — Remove "Reference files to draw from" section from rendered output**
Internal content brief note. Must not appear in the rendered page.
Fixes: 3.2 (partial)
