# Setup Section — Summary Index

**Date:** 2026-03-24
**Scope:** All 8 pages in `v2/orchestrators/setup/`
**Source:** 8 check reports + 8 critical reviews (post-correction)
**Note on r-monitor:** The check report is rated NEEDS REWORK by its critical review. Findings below incorporate corrections from the review. Confidence in r-monitor findings is lower than for other pages; treat as indicative, not definitive, until the report is re-run.

---

## Overview Table

| Page | Overall Verdict | Frontmatter | Copy | Headings | Structure | Links | Veracity | Other Issues | Review Quality |
|------|----------------|-------------|------|----------|-----------|-------|----------|--------------|----------------|
| `guide.mdx` | NEEDS WORK | 5 FAILs (pageType deprecated, purpose invalid, complexity/lifecycleStage/veracityStatus missing; industry/niche also missing per correction) | FAIL (banned phrases, banned constructions, opener) | FAIL (3 headings below threshold, 2 Avoid-tier) | FAIL (6 broken link targets, dead-end activation section) | FAIL (6 distinct broken targets, some duplicated) | FAIL (unverified, no veracityStatus) | Deprecated `r-configure`, `sc-connect` targets throughout | MOSTLY RELIABLE — 7 issues corrected |
| `s-guide.mdx` | NEEDS WORK / BLOCKING DECISION | 5+ FAILs (pageType deprecated, purpose invalid, complexity/lifecycleStage/veracityStatus missing; industry/niche missing per correction) | FAIL (description self-referential, sidebarTitle generic) | FAIL (all headings fail or untested) | FAIL (16/16 links broken — not in docs.json) | CRITICAL (all links broken, page is a structural orphan) | FAIL (unverified, no veracityStatus) | Page not in docs.json — deprecate vs retain is a blocking human decision | MOSTLY RELIABLE — 10 issues corrected |
| `rcs-requirements.mdx` | NEEDS WORK / BLOCKING DECISION | 7 FAILs (pageType/purpose/complexity/lifecycleStage/veracityStatus/industry/niche all missing; title too long, sidebarTitle mismatches) | FAIL (`not [X]` banned construction; `See also` banned heading under Cat 2.11) | FAIL (all 6 H2s fail; `See also` banned tier) | FAIL (dual-job scope conflict between reference content and checklist; 3 broken card links) | FAIL (3 broken card links in `See also` block) | FAIL (T4 VRAM likely wrong — 16GB not 8GB; CUDA version unverified; no veracityStatus) | Blocking decision: pageType is `reference` or `guide` — determines purpose, template, and information-type requirements | MOSTLY RELIABLE — 7 issues corrected |
| `connect-and-activate.mdx` | NEEDS WORK | 7 FAILs (pageType deprecated, purpose/complexity/lifecycleStage/veracityStatus/industry/niche missing; description format) | FAIL (2 `can/may` missed by check; 1 false positive on reward-call-tuning link; description em-dash) | FAIL (`Next step` scores 10/25; heading below threshold) | FAIL (prerequisites informal, not a formal section; StyledSteps vs Steps mismatch) | PASS (after removing false positive — reward-call-tuning link confirmed present in docs.json) | FAIL (4 TODO markers; `status: current` conflicts with unverified content; gas figures stale) | P39 violation in report: fix must be `status: draft` OR resolve TODOs and set `veracityStatus: verified` — not `status: current` + `veracityStatus: unverified` | MOSTLY RELIABLE — 10 issues corrected |
| `test.mdx` | NEEDS WORK | 9 FAILs (pageType deprecated, purpose deprecated, description over 160 chars, complexity/lifecycleStage/veracityStatus/industry/niche all missing; keywords generic) | PASS (after removing false positive on check 2.4; check 2.4 has no supporting finding) | FAIL (`Setup complete` scores 14/25; check 3.2 false positive corrected) | PASS (journey, structure, handoffs all coherent) | PASS (all 7 internal links confirmed in docs.json) | FAIL (2 open TODO flags; commands untested; `status: current` conflicts) | Corrected character count: 161 chars (not 163 as stated in report); proposed fix is 146 chars (not 147) | MOSTLY RELIABLE — 8 issues corrected |
| `configure.mdx` | NEEDS WORK / 3 BLOCKING DECISIONS | 9 FAILs (pageType deprecated, purpose/complexity/lifecycleStage/veracityStatus/industry/niche all missing; title second-person gerund; keywords partially generic) | FAIL (`significantly` banned; `rather than` banned; `This page covers` self-reference opener; check 2.1 false FAIL — US English finding is actually about banned words/phrases already in 2.2/2.3) | FAIL (`Variants` 19/25; `Next Steps` 16/25 Avoid-tier) | FAIL (prerequisites block links to broken `sc-connect`) | FAIL (4 broken links: `sc-connect`, `activate`, `workloads-and-ai/batch-ai-setup`, `requirements` ×2) | FAIL (4 open REVIEW blocks; commands untested; `status: current` conflicts) | 3 blocking decisions required: `sc-connect`, `activate`, `batch-ai-setup` link targets must be resolved by human before link repair is possible | MOSTLY RELIABLE — 7 issues corrected |
| `rs-install.mdx` | NEEDS WORK | 10 FAILs (purpose/complexity/lifecycleStage/veracityStatus/industry/niche all missing; OG block incomplete — 4 of 5 fields missing; description over 160 chars; keywords generic) | FAIL (`if [condition]` constructions in body; proposed description fix retains self-referential `Covers`) | FAIL (`Verify your installation` 16/25 — not 18/25 as stated in report; `Next steps` Avoid-tier, check 3.2 FAIL not correctly stated) | PASS (journey coherent, prerequisites well-stated, handoffs clean) | FAIL (1 broken link at line 461: `/v2/orchestrators/get-started/quickstart` → confirmed fix: `/v2/orchestrators/quickstart/guide`) | FAIL (CLI flags, version numbers, checksums all NOT-TESTED; 1 open REVIEW flag at line 143) | OG block is uniquely incomplete vs other pages — only 1 of 5 fields present; corrected heading score for `Verify your installation` is 16/25 not 18/25 | MOSTLY RELIABLE — 7 issues corrected |
| `r-monitor.mdx` | NEEDS WORK (HIGH PRIORITY — terminal page) | 10 FAILs (pageType/purpose/complexity/lifecycleStage/status/veracityStatus/industry/niche all missing; title has `Your`; keywords generic) | FAIL (`if [condition]` in Warning block; thin content — Prometheus section is narrative not procedural; `See also` banned heading miscategorised as terminology failure) | FAIL (multiple heading failures; `## See also` is Banned tier — NOT exempt per correction; report incorrectly applied P16 exemption) | FAIL (page is thin — no scrape config, no steps, no prerequisites; broken links mean terminal dead end) | FAIL (2 broken relative links: `./install-go-livepeer` and `../advanced/rewards-and-fees`; both create dead end at journey terminus) | FAIL (metrics endpoint, CLI flags all NOT-TESTED; open scope comment at line 21; no veracityStatus) | NEEDS REWORK rated by critical review — count errors throughout (Category 2 count off by 1, Category 3 off by 1, Category 5 off by 1); `See also` banned-tier finding missed; proposed fix contains em-dash violation | NEEDS REWORK — 8 issues, including false negative on Banned heading and multiple miscount errors |

---

## Full Details Per Page

### guide.mdx

**Corrected verdict:** NEEDS WORK

**Top 3 actionable findings (post-correction):**

1. **6 distinct broken link targets throughout the page** (CRITICAL). Links throughout the page use paths that no longer exist: `setup/r-configure` (fix: `setup/configure`), `setup/sc-connect` (fix: `setup/connect-and-activate`), `unclassified/rcs-connect-activate-publish` (fix: `setup/connect-and-activate`), `setup/x-test` (fix: `setup/test`), `dep-rc-navigator` (no replacement — requires human decision on whether to remove or find a current equivalent). Several of these appear in 3 separate locations (CardGroup, table, and activation-checks section), so distinct broken paths total 6 with ~9 broken link instances.

2. **pageType and purpose both carry invalid values** (CRITICAL). `pageType: overview` is a deprecated alias — must migrate to `pageType: concept` + `pageVariant: overview` OR `pageType: navigation`, pending Alison's decision on whether this page is primarily orientation or pure routing. `purpose: guide` is a pageType value placed in the wrong field — correct value is `purpose: orient`. Until these are resolved, template compliance, information type mapping, and component matrix checks are all undefined.

3. **3 required frontmatter fields absent; 2 further required fields missed by check report** (HIGH). Missing: `complexity` (fix: `intermediate`), `lifecycleStage` (fix: `setup`), `veracityStatus` (fix: `unverified`). Also missing per correction: `industry` and `niche` — both are required (not optional), per the standing decision in learnings.md Batch 1.

---

### s-guide.mdx

**Corrected verdict:** NEEDS WORK — BLOCKING DECISION REQUIRED FIRST

**Special flag:** This page is not in docs.json. It is a structural orphan with identical scope to `guide.mdx`. All 16 links are broken. No content work should proceed until the blocking decision is made.

**Top 3 actionable findings (post-correction):**

1. **Page not in docs.json — all 16 links broken** (CRITICAL). `s-guide.mdx` is not registered in the navigation, making it unreachable. All 16 links in the page reference paths that do not exist or cannot be resolved without knowing the final navigation structure. This is a dead-end orphan page.

2. **Blocking Decision: deprecate vs retain** (BLOCKING). The page is a structural duplicate of `guide.mdx`. The critical review's recommendation is Option A: deprecate `s-guide.mdx`. However, this is a human decision. Until it is resolved, no other content work on this page is valid and no link repair can begin.

3. **`purpose: overview` is not a valid value in any schema** (CRITICAL). Unlike `guide.mdx` where `purpose: guide` is a valid value misplaced into the wrong field, `s-guide.mdx` uses `purpose: overview` which does not exist in either the old 12-type or new 15-value purpose schema. This is an invalid value error, not a deprecated-alias error.

---

### rcs-requirements.mdx

**Corrected verdict:** NEEDS WORK — BLOCKING DECISION REQUIRED

**Top 3 actionable findings (post-correction):**

1. **Blocking Decision: pageType is `reference` or `guide`** (BLOCKING). The page conflates two distinct reader jobs: (a) hardware specification lookup for decision-making, and (b) a pre-launch checklist. These require different pageTypes (`reference` vs `guide` or `instruction`), different templates, different permitted information types, and different purpose values (`reference` vs `evaluate`). The `purpose` field, template selection, and information type mapping for the checklist section are all undetermined until this decision is made.

2. **T4 VRAM figure likely wrong** (CRITICAL — veracity). The page states "8GB VRAM" in a parenthetical that appears to apply to both the RTX 3060 and the T4. The NVIDIA T4 has 16GB GDDR6 VRAM per its datasheet. The RTX 3060 exists in both 8GB and 12GB configurations. A REVIEW flag must be added to this claim and the parenthetical corrected before publication. The critical review confirms the T4 figure is a factual error, not a genuine ambiguity.

3. **All 5 (corrected: 7) required frontmatter fields absent and `See also` is a Banned heading** (HIGH). Missing: `pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` — plus `industry` and `niche` per correction. The heading `## See also` at line 91 is in the Banned tier per checks.mdx §3.2 (explicitly listed alongside `Basics`, `Notes`, `How It Works`). Fix: replace with `Related Setup Pages` or convert to CardGroup with no H2.

---

### connect-and-activate.mdx

**Corrected verdict:** NEEDS WORK

**Top 3 actionable findings (post-correction):**

1. **`status: current` conflicts with missing veracityStatus and 4 open TODO flags** (CRITICAL — veracity). The page has `status: current` but `veracityStatus` is absent, and 4 `{/* TODO: */}` markers exist in the body. Per P39, the valid fixes are: change `status` to `draft`, OR resolve all TODOs and set `veracityStatus: verified`. The check report recommends `veracityStatus: unverified` alongside `status: current` — this combination is explicitly prohibited.

2. **2 missed `can/may` banned constructions** (HIGH). The check report flags line 145 ("may take") and line 249 ("can spend") but misses: line 197 inside a `<Note>` ("can show Registered until the next round begins") and line 225 in a bullet ("may show Registered until the next round completes"). All four are factual operational claims using hedged modals. Fix: rewrite as direct assertions. Corrected count: 4 flagged constructions, not 2.

3. **7 required frontmatter fields absent or invalid** (HIGH). `pageType: how_to` is deprecated (fix: `instruction`); `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` all absent; `industry` and `niche` absent per correction. The `reward-call-tuning` link flagged as broken in the check report is a false positive — this path is confirmed in docs.json at lines 2921–2924.

---

### test.mdx

**Corrected verdict:** NEEDS WORK

**Top 3 actionable findings (post-correction):**

1. **9 frontmatter fields fail or are absent** (HIGH). Core taxonomy is entirely missing or deprecated: `pageType: how_to` (deprecated, fix: `instruction`); `purpose: how_to` (invalid in any schema, fix: `verify`); `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Description is 161 characters (not 163 as stated) — still over the 160-char limit. Proposed description fix is 146 characters (not 147).

2. **2 open TODO flags block `status: current`** (HIGH — veracity). Line 175: `{/* TODO: Confirm the current direct orchestrator endpoint for text-to-image inference. */}` and line 218: `{/* TODO: Confirm the current success log line for a reward call in go-livepeer. */}`. Both are open factual gaps. `status: current` is invalid while these are unresolved. Fix: `status: draft` until verified.

3. **check 2.4 is a false FAIL; check 3.2 is a false FAIL** (report corrections). The check report marks 2.4 FAIL but every evaluated item concludes PASS — there is no actual banned construction finding. The check report marks 3.2 FAIL for `Setup complete` but that term is in the OK list per checks.mdx §3.2, not the Avoid list. Both corrections reduce the FAIL count without reducing the actual remediation burden on this page.

---

### configure.mdx

**Corrected verdict:** NEEDS WORK — 3 BLOCKING DECISIONS REQUIRED

**Top 3 actionable findings (post-correction):**

1. **3 broken link targets require human decisions before repair** (CRITICAL — blocking). Links to `setup/sc-connect`, `activate`, and `workloads-and-ai/batch-ai-setup` are broken. `sc-connect` should map to `connect-and-activate` (confirmed in docs.json). However, `activate` and `batch-ai-setup` have no obvious current equivalents in the navigation — these require human decisions on what the intended target is. A second `requirements` link also needs path correction. No link repair can proceed until BD-1 (`sc-connect`), BD-2 (`activate`), and BD-3 (`batch-ai-setup`) are resolved.

2. **Banned word + banned phrase + banned self-referential opener** (HIGH). Line 171: `significantly` (banned intensifier) — fix: delete it. Line 232: `rather than` (banned phrase) — fix: split into two positive statements. Line 49: `This page covers...` (banned self-referential opener) — fix: open directly with the outcome statement. Check 2.1 false FAIL corrected: these findings belong in 2.2 and 2.3 where they are already correctly logged; there are no UK English violations.

3. **9 frontmatter fields fail or are absent** (HIGH). `pageType: how_to` deprecated (fix: `instruction`); `purpose` field completely absent (proposed: `configure` — confirm before applying); `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. P51 sign-off language required for `purpose`, `complexity`, and `lifecycleStage` proposed values.

---

### rs-install.mdx

**Corrected verdict:** NEEDS WORK

**Top 3 actionable findings (post-correction):**

1. **OG image block uniquely incomplete** (HIGH). Only `og:image` is present; `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` are all missing. This is the only page in the Setup section with an incomplete OG block (all others have the full 5-field block). Fix: add the 4 missing fields using the template pattern from r-monitor.mdx.

2. **10 frontmatter fields fail or are absent** (HIGH). `pageType: tutorial` is the only valid taxonomy field. Missing: `purpose` (proposed: `start`), `complexity` (proposed: `intermediate`), `lifecycleStage` (proposed: `setup`), `veracityStatus` (fix: `unverified`), `industry`, `niche`. OG block incomplete (see above). Description is 174 characters — over 160-char limit; proposed fix retains self-referential `Covers` opener (fix: rewrite as outcome-first). `status: current` conflicts with open REVIEW flag at line 143 and absent `veracityStatus`.

3. **Veracity: CLI flags, version numbers, and checksum are all NOT-TESTED** (HIGH). Key unverified claims: `v0.8.9` as current release; CUDA 12.0 minimum with specific driver versions (`525.60.13` Linux, `527.41` Windows); Go `1.25.0` requirement; `sha256` checksum value; Docker image existence. The corrected heading score for `Verify your installation` is 16/25 (not 18/25 as stated in the report). The `Next steps` heading is Avoid-tier and should be check 3.2 FAIL (corrected from the report's ambiguous "conditional FLAG" pseudo-category).

---

### r-monitor.mdx

**Corrected verdict:** NEEDS WORK (HIGH PRIORITY — terminal position; lower confidence due to NEEDS REWORK report quality)

**Special flag:** This page is the terminal page of the Setup group. Broken links here create a dead end for the entire Setup journey. Fix priority is HIGH independent of other issues.

**Top 3 actionable findings (post-correction):**

1. **2 broken relative links at journey terminus — dead end** (CRITICAL). `./install-go-livepeer` (line 67) resolves to a non-existent path — the install page is `rs-install`, not `install-go-livepeer`. `../advanced/rewards-and-fees` (line 68) resolves to a non-existent `advanced` group — no such group exists in the orchestrators nav. These are the only forward-routing links at the end of the Setup journey. With both broken, a reader completing Setup has nowhere to go. Correct check 2.11 to PASS (broken links belong in Cat 8, not 2.11).

2. **`## See also` is a Banned-tier heading — not exempt** (CRITICAL — correction to check report). The check report exempts `## See also` from all heading checks by incorrectly applying P16 (which exempts only `Related Pages`). Per checks.mdx §3.2, `See Also` is explicitly listed in the Banned tier. This must be flagged as a check 3.2 FAIL. Fix: rename to `Related Guides` or convert to a CardGroup with no H2 heading. The Category 3 FAIL count increases to 7 once this correction is applied.

3. **Page content is critically thin** (HIGH). The Prometheus and Grafana section (line 60–62) is a single paragraph that tells the reader to "run Prometheus with a scrape config" without providing a scrape config, flag syntax, or Grafana dashboard reference. The page ends without a formal prerequisites section or a working procedure for any monitoring tool. An open scope comment at line 21 acknowledges this: `{/* Should include community tooling for doing this as well as link to Explorer */}`. The page's position as the terminal Setup step means this thinness is visible at the journey's endpoint.

---

## Blocking Decisions Required

These decisions cannot be resolved without human input. No content work on the affected pages or their link targets should proceed until each decision is made.

| ID | Decision | Page(s) Affected | Blocks |
|----|----------|-----------------|--------|
| BD-S-01 | **Deprecate or retain `s-guide.mdx`?** Recommended action from review: deprecate. It is an orphaned duplicate of `guide.mdx`, not in docs.json, with all 16 links broken. If deprecated, the file should be moved to `x-deprecated/`. | `s-guide.mdx` | All content work on `s-guide.mdx`; no link repair possible without knowing disposition |
| BD-S-02 | **`guide.mdx` pageType: `navigation` or `concept` + `pageVariant: overview`?** The page is the Setup section's orientation entry. It is a mix of routing cards and narrative context. `navigation` applies if it is purely a routing hub. `concept` + `pageVariant: overview` applies if the contextual intro paragraph is part of the page's intended job. | `guide.mdx` | Template compliance, information type mapping, component matrix checks |
| BD-S-03 | **`dep-rc-navigator` dead link in `guide.mdx`: remove card or find replacement?** The page at `/v2/orchestrators/dep-rc-navigator` does not exist in the publishable nav (workspace file only). A routing card targeting it is broken. No current equivalent exists in docs.json. | `guide.mdx` | Link repair for the pool-path redirect card |
| BD-S-04 | **`rcs-requirements.mdx` pageType: `reference` with `pageVariant: specification` OR `guide` with `purpose: evaluate`?** The page has two distinct reader jobs (hardware lookup + pre-launch checklist) that require different page models. Human decision needed on whether the checklist stays on this page, moves to a separate page, or is removed. | `rcs-requirements.mdx` | Template, purpose, information type mapping for checklist section |
| BD-S-05 | **T4 VRAM figure in `rcs-requirements.mdx`**: page states 8GB for both RTX 3060 and T4. NVIDIA T4 datasheet specifies 16GB. Confirm correct value for T4 before publication. | `rcs-requirements.mdx` | Veracity sign-off; REVIEW flag required until resolved |
| BD-S-06 | **`configure.mdx`: `activate` link target** — what page should the `activate` Prerequisites link point to? The path `v2/orchestrators/setup/activate` does not exist in docs.json. Likely target: `connect-and-activate` — but confirmation required. | `configure.mdx` | Prerequisites block link repair |
| BD-S-07 | **`configure.mdx`: `batch-ai-setup` link target** — the path `v2/orchestrators/workloads-and-ai/batch-ai-setup` does not exist in docs.json. No current equivalent is evident. Human must determine the correct current target or remove the link. | `configure.mdx` | Next Steps CardGroup link repair |
| BD-S-08 | **`r-monitor.mdx` content scope**: the page currently has no scrape config, no Prometheus setup steps, and no Grafana dashboard reference. The open scope comment at line 21 acknowledges this gap. Decision: is `r-monitor.mdx` a stub requiring a content pass before publication, or a redirect to a fuller guide in the Guides section? | `r-monitor.mdx` | Content remediation path for the terminal Setup page |

---

## Common Patterns

These issues appear across multiple pages in the Setup section.

### 1. Missing required frontmatter fields (all 8 pages)

Every page in the Setup section is missing at least 3 required frontmatter fields. The most common absences:

- `veracityStatus`: absent on all 8 pages
- `complexity`: absent on 7 of 8 pages (rs-install, configure, connect-and-activate, test, rcs-requirements, guide, s-guide, r-monitor)
- `lifecycleStage`: absent on 7 of 8 pages
- `industry` and `niche`: absent on all 8 pages; incorrectly marked optional in check reports for pages where the Batch 5 protocol was applied — per learnings.md Batch 1 correction, both are required

### 2. `status: current` + absent `veracityStatus` (rs-install, configure, connect-and-activate, test)

Four pages have `status: current` in frontmatter but no `veracityStatus` and open REVIEW or TODO flags. Per checks.mdx §1.8, `status: current` requires `veracityStatus: verified` and zero REVIEW flags. All four pages must either change `status` to `draft` or resolve their unverified content before `status: current` is valid.

### 3. Deprecated `pageType` aliases (guide, s-guide, configure, connect-and-activate, test)

Five pages use deprecated pageType values: `overview` (guide, s-guide) and `how_to` (configure, connect-and-activate, test). `rs-install` uses `tutorial` (canonical). `rcs-requirements` and `r-monitor` have `pageType` absent entirely.

### 4. Generic keywords violating check 1.13 (all 8 pages)

Every page uses `livepeer` and/or `orchestrator` as keywords. Both are explicitly cited in checks.mdx §1.13 as bad examples — they are not searcher-intent-aligned. All keywords lists require replacement with specific, intent-aligned terms (flag names, model names, specific procedure names).

### 5. Broken links from `guide.mdx` creating section-wide confusion

`guide.mdx` is the entry point for the Setup section. It contains 6 distinct broken link targets, several referencing stale paths from a previous navigation structure (`r-configure`, `sc-connect`, `x-test`). These create a misleading routing structure at the section's entry point. The correct current paths are documented in the check report and confirmed in docs.json: `r-configure` → `configure`, `sc-connect` → `connect-and-activate`, `x-test` → `test`.

### 6. `not [X]` as primary statement / `if [condition]` in body prose

`not [X]` banned construction appears in `rcs-requirements.mdx` (line 61) and implicitly in `guide.mdx` (the `## What this guide does not do` section). `if [condition]` in body prose appears in `rs-install.mdx` (multiple instances) and `r-monitor.mdx` (Warning block at line 49). Both are covered by checks.mdx §2.4.

### 7. Self-referential openers (guide, configure)

`guide.mdx` opens with "This guide is the default setup path..." and `configure.mdx` opens with "This page covers the go-livepeer flags...". Both are banned `This [document] [verb]` self-referential constructions per checks.mdx §2.4.

### 8. Poor heading quality across the section (6 of 8 pages)

Six pages fail check 3.1 (heading score threshold) or check 3.2 (banned/avoid terms). Common failures: question-form headings, generic closure headings (`Next Steps`, `Next step`, `Setup complete`), `See also` (Banned tier on two pages), and `Setup overview` (Avoid tier in guide.mdx). Only `rs-install.mdx` headings are mostly clean; `connect-and-activate.mdx` has one failing heading.

---

## Recommendations

Priority order for remediation. Items within a priority group can proceed in parallel.

### Priority 1 — Blocking decisions (no content work can proceed without these)

1. **BD-S-01**: Decide `s-guide.mdx` fate (deprecate vs retain). Recommendation: deprecate. Unblock after decision.
2. **BD-S-04**: Decide `rcs-requirements.mdx` pageType. Resolve scope conflict between reference and checklist. Unblock after decision.
3. **BD-S-06 + BD-S-07**: Resolve `configure.mdx` broken link targets (`activate`, `batch-ai-setup`). These block all link repair on the configure page.
4. **BD-S-08**: Decide `r-monitor.mdx` content scope — stub requiring content pass, or redirect to Guides section. This is HIGH priority because the page is at the journey terminus.

### Priority 2 — Broken links (fix before any user-facing publication)

5. **`guide.mdx`**: Replace 6 broken link targets. Confirmed replacements exist in docs.json for 5 of 6; `dep-rc-navigator` requires BD-S-03 decision.
6. **`r-monitor.mdx`**: Fix 2 broken relative links (`./install-go-livepeer` → `../rs-install` or absolute path; `../advanced/rewards-and-fees` → correct path pending BD-S-08 decision). This is the terminal page — broken links here stop the entire Setup journey.
7. **`rs-install.mdx`**: Fix 1 broken link at line 461 (`/v2/orchestrators/get-started/quickstart` → `/v2/orchestrators/quickstart/guide`, confirmed in docs.json).
8. **`configure.mdx`**: Fix 2 confirmed broken links (`sc-connect` → `connect-and-activate`; `requirements` path correction). Hold BD-dependent links until BD-S-06/BD-S-07 resolved.

### Priority 3 — Frontmatter (batch-fixable across all pages)

9. Add `veracityStatus: unverified` to all 8 pages (can be done as a batch once BD decisions don't affect these values).
10. Add `complexity`, `lifecycleStage`, `industry`, `niche` to all 8 pages. Proposed values are documented in the check reports; apply with P51 sign-off language for `complexity` and `lifecycleStage`, concrete values for `industry` and `niche`.
11. Migrate deprecated `pageType` values: `how_to` → `instruction` on configure, connect-and-activate, test; `overview` → pending BD-S-02 decision on guide; `s-guide` pending BD-S-01.
12. Change `status: current` to `status: draft` on rs-install, configure, connect-and-activate, test until `veracityStatus: verified` is achievable.
13. **`rs-install.mdx`** only: complete the OG image block — add 4 missing OG fields.

### Priority 4 — Copy and headings (can be batched by page)

14. **`guide.mdx`**: Delete `## What this guide does` / `## What this guide does not do` sections; replace opener with outcome-first sentence; rename failing headings.
15. **`configure.mdx`**: Remove `significantly`; rewrite `rather than` construction; delete `This page covers` opener; rename `Variants` and `Next Steps` headings.
16. **`rcs-requirements.mdx`**: Replace `## See also` (Banned tier) with `Related Setup Pages` or CardGroup; rewrite line 61 `not [X]` construction.
17. **`r-monitor.mdx`**: Replace `## See also` (Banned tier); rename `## What to track`; rewrite Warning block `if [condition]` construction; add prerequisites section.
18. **`rs-install.mdx`**: Resolve `if [condition]` constructions; rewrite proposed description fix (remove self-referential `Covers` opener); rename `Verify your installation` and `Next steps` headings.
19. **`connect-and-activate.mdx`**: Fix 4 `can/may` constructions (2 missed by check report); rewrite description; add formal prerequisites section.

### Priority 5 — Veracity pass (after copy/link fixes)

20. **`rcs-requirements.mdx`**: Add REVIEW flag and resolve T4 VRAM discrepancy (BD-S-05); add REVIEW flags for CUDA version minimum and latency threshold.
21. **`rs-install.mdx`**: Verify `v0.8.9` release, CUDA/driver version requirements, Go version, Docker image, and checksum against authoritative sources.
22. **`connect-and-activate.mdx`**: Resolve 4 TODO flags; verify gas figures and ETH cost estimates; confirm round duration (22 hours) against Explorer.
23. **`test.mdx`**: Resolve 2 TODO flags (text-to-image endpoint, reward call log line); test ffmpeg procedure end-to-end; verify round duration.
24. **`configure.mdx`**: Resolve 4 open REVIEW comment blocks.
25. **`r-monitor.mdx`**: Verify metrics endpoint, `-monitor=true` flag, and metric names against live go-livepeer.
