# Subfolder Summary
## `v2/orchestrators/guides/operator-considerations/`

**Generated:** 2026-03-24
**Source reports:** check reports + critical reviews for all 4 pages in this subfolder
**Schema note applied:** `veracityStatus: unverified` IS a valid value per checks.mdx §1.8 (valid set: `verified`, `unverified`, `stale`). Critical reviews that cite `partial` as valid are wrong — `partial` does not exist. Critical reviews that recommend "status: draft only (no veracityStatus)" are also wrong. The correct fix for `status: current` + missing `veracityStatus` is: change `status: draft` AND add `veracityStatus: unverified`. All schema fix instructions in this summary use the corrected form.

---

## 1. Overview Table

| Page | Check verdict | Corrected fail count | Primary issues |
|------|--------------|---------------------|----------------|
| `operator-rationale.mdx` | NEEDS WORK | 25 confirmed | CRITICAL: corrupt prefix (lines 1–2: `glrw`, `pwrfs`); missing 5 frontmatter fields; 6 question-form headings; invalid `purpose: evaluation`; multiple unverified cost/bandwidth claims with TODO flags |
| `business-case.mdx` | NEEDS WORK | 25 confirmed | 4 broken internal links (2 absent from docs.json); 3 banned words; 3 banned constructions; missing 5 frontmatter fields; TODO block in publishable content |
| `operator-impact.mdx` | NEEDS WORK | ~22 effective | Missing 3 frontmatter fields; `purpose: evaluation` invalid; 1 banned word (`meaningfully`); 4 banned constructions; 4 heading scores below threshold; 2 blocking decisions (title scope, sovereign compute placement) |
| `requirements.mdx` | NEEDS WORK | 24 confirmed | Missing 5 frontmatter fields; 9 unverified technical claims (CUDA, NVENC caps, ports, test URL, VRAM); self-referential opener; 2 weak headings; split decision (procedural checklist in reference page) |

**Corrected fail counts apply P59/P60:** NOT-TESTED checks are not counted as FAIL. BORDERLINE checks are not counted as confirmed FAIL unless explicitly resolved.

**Critical review corrections applied to original check report counts:**

| Page | Original count | Critical review correction | Corrected count |
|------|---------------|---------------------------|-----------------|
| operator-rationale | 22 (check report) | +3: add 6.5; swap 3.2 FAIL → PASS (question headings belong under 3.1, not 3.2); net 0 change if 3.2 stays FAIL, but +1 (6.5) either way | 25 if 3.2 stays FAIL; 25 if 3.2 → PASS + 6.5 added |
| business-case | 27 (check report) | -1: 2.2 check result table had 3 fails but one (check 2.1) was wrongly marked; +1: 6.5 absent from verdict; net correction: 25 per critical review | 25 |
| operator-impact | Verdict table: category-level; approx 22 effective confirmed fails after removing false positives (false 2nd `meaningfully` at line 192, false FAIL on check 2.1) | Remove: 1 false positive (`meaningfully` at line 192 — appears once only at line 213); correct check 2.1 FAIL → PASS; add missed finding (line 266 `can be done`) | ~22 effective confirmed |
| requirements | 21 (check report) | +3: add 2.10, 6.5, 6.6 omitted from verdict | 24 |

---

## 2. Shared Root Causes

These issues appear across multiple pages. Log once; apply the fix to all affected pages.

### RC-1: `purpose: evaluation` is not a canonical value
**Affects:** operator-rationale, business-case, operator-impact (all three guide pages)
**Not present in:** requirements.mdx (`purpose: reference` — valid)
**Fix:** Change `purpose: evaluation` → `purpose: evaluate` on each page's frontmatter.
All three pages have the same error type (c): invalid value. One batch fix.

### RC-2: Missing required frontmatter fields
**Affects:** All 4 pages
**Missing fields per page:**
- operator-rationale: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`
- business-case: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`
- operator-impact: `complexity`, `lifecycleStage`, `veracityStatus`
- requirements: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`

**Fix (confirm all proposed values before applying):**

| Page | Proposed `complexity` | Proposed `lifecycleStage` | `veracityStatus` | Proposed `industry` | Proposed `niche` |
|------|-----------------------|--------------------------|-------------------|---------------------|------------------|
| operator-rationale | `intermediate` | `evaluate` | `unverified` | `[business, economics]` | `[infrastructure, web3]` |
| business-case | `advanced` | `evaluate` | `unverified` | `[business, technical]` | `[infrastructure, web3]` |
| operator-impact | `intermediate` | `evaluate` | `unverified` | — (optional on this page) | — (optional) |
| requirements | `intermediate` | `setup` | `unverified` | `[technical]` | `[hardware, infrastructure]` |

### RC-3: `status: current` with unverified content and no `veracityStatus`
**Affects:** All 4 pages
**Rule:** `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags. None of the 4 pages meet this condition.
**Fix:** Change `status: current` → `status: draft` AND add `veracityStatus: unverified` on all 4 pages. Do not revert to `status: current` until all REVIEW/TODO flags are resolved and claims are verified.

### RC-4: TODO blocks present in publishable content
**Affects:** operator-rationale (lines 34–48 + 4 inline), business-case (lines 32–44 + 1 inline), operator-impact (lines 32–43 + 2 inline), requirements (lines 35–46 + 4 inline)
**Fix:** Move TODO blocks to `_workspace/` notes files. Convert inline TODO comments to `{/* REVIEW: [claim] — [source needed] */}` format. Do not publish with TODO format in place.
**Note:** TODO comments in MDX do not render in the browser, but checks.mdx §8.6 prohibits them in publishable files. The `{/* REVIEW: */}` format is the canonical in-progress marker.

### RC-5: Banned word `significantly`
**Affects:** operator-rationale (line 149 and line 376), requirements (line 184)
**Fix:**
- operator-rationale line 149: "CPU transcoding is possible at **significantly** lower throughput." → "CPU transcoding is possible at a fraction of GPU throughput."
- operator-rationale line 376: "The pool worker path has a **significantly** lower barrier than solo Orchestrator operation." → "The pool worker path has a lower barrier than solo Orchestrator operation." (or state the specific delta if verifiable)
- requirements line 184: "CPU transcoding is possible without a GPU, but throughput is **significantly** lower." → "CPU transcoding is possible without a GPU, but throughput is a fraction of GPU output."

### RC-6: Heading quality below 20/25 threshold
**Affects:** All 4 pages (to varying degrees)
**Pattern:** All pages have at least 2 headings below the 20/25 score threshold. The weakest patterns across the batch:
- Question-form H3s (operator-rationale): three H3 viability question headings all score 13–14/25
- "How Votes Work" (operator-impact): 17/25 — prototypical weak "How X Works" label
- Generic "X vs Y" contrast labels: "Hobbyist vs Commercial" (business-case), "Video vs AI: Starting Workload" (operator-rationale)
- Verbose "How to" openers: "How to Position for Commercial Workloads" (business-case)

See per-page blocking decisions for title-scope issues requiring human sign-off.

---

## 3. Blocking Decisions

All items below require Alison's decision before any related fix is executed.

| BD-ID | Decision | Page(s) | Blocks |
|-------|----------|---------|--------|
| BD-OC-01 | Corrupt prefix origin: `glrw` (line 1) and `pwrfs` (line 2) before frontmatter in operator-rationale.mdx. CONFIRMED CRITICAL — MDX parser will output these as rendered text before page content. **Immediate action:** delete lines 1–2. Human investigation needed: determine if this is an accidental keystroke, editor artefact, or encoding corruption. No MDX parsing of this file is reliable until lines 1–2 are removed. | operator-rationale | All fixes on this page; any MDX parsing result |
| BD-OC-02 | `protocol-influence` link in business-case.mdx Related Pages (line 384): target page not found in docs.json. Options: (A) remove the card; (B) correct path once the page is confirmed to exist. | business-case | F-09 in business-case fix list |
| BD-OC-03 | `gateways-orchestrators` link in business-case.mdx Related Pages (line 382): not in docs.json. Closest confirmed matches: `gateway-relationships` (docs.json line 2939) or `gateway-orchestrator-interface` (docs.json line 2940). Alison to confirm which is the correct target. | business-case | F-08 in business-case fix list |
| BD-OC-04 | Title scope for operator-impact.mdx: `Operator Impact` is vague (covers governance weight + sovereign compute thesis). Options: (A) retain as-is; (B) rename to `Governance Weight` (narrows to governance primary); (C) define a governing concept spanning both topics and rename accordingly. | operator-impact | Title, sidebarTitle, description rewrite |
| BD-OC-05 | Sovereign compute AccordionGroup scope (operator-impact.mdx lines 205–250): is the persuasive sovereign compute case appropriate within an `evaluate` purpose page, or should it become a standalone concept page? Options: (A) retain inline; (B) extract to a concept page stub and link. | operator-impact | Page structure; possible page creation |
| BD-OC-06 | requirements.mdx mixed pageType signals: the "Checklist Before Going Live" / "Launch Readiness" section uses `StyledSteps` — a procedural type — inside a `reference` page. Options: (A) retain as an acceptable secondary type for a reference page; (B) split the procedural checklist to a separate `instruction` page. | requirements | Page structure; possible page split |
| BD-OC-07 | requirements.mdx title is `Requirements` — 1 word, generic. Check 3.6 flags this. Proposed alternatives: `Hardware Requirements` or `Node Requirements`. Alison to confirm before executing. | requirements | Title, sidebarTitle updates |

---

## 4. Prioritised Recommendations

### CRITICAL

**CR-1 — Delete corrupt prefix in operator-rationale.mdx**
Page: `operator-rationale.mdx`
Lines 1–2: delete `glrw` and `pwrfs`. File must begin with `---` on line 1.
This is the highest priority fix in the subfolder. No other work on this file is reliable until the prefix is removed.
Investigate source of corruption before proceeding to other fixes on this page.

**CR-2 — Resolve 4 broken internal links in business-case.mdx**
Page: `business-case.mdx`
- F-04: `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` → `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (confirmed at docs.json line 2921). Apply to both line 59 and line 378.
- F-05: `/v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring` → `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (confirmed at docs.json line 2932).
- F-08: `gateways-orchestrators` → awaiting BD-OC-03 decision. Likely fix: `/v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` (confirmed at docs.json line 2940).
- F-09: `protocol-influence` → awaiting BD-OC-02 decision. Likely fix: remove card.
Two links are executable now (F-04, F-05). Two require BD sign-off (F-08, F-09).

### HIGH (applies to all pages — batch fixable)

**CR-3 — Fix `purpose: evaluation` → `purpose: evaluate` (RC-1)**
Pages: operator-rationale, business-case, operator-impact
One-line change per page. No human decision required.

**CR-4 — Add missing required frontmatter fields (RC-2)**
Pages: all 4
Add `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` per the table in RC-2.
All proposed values require human confirmation before applying.

**CR-5 — Change `status: current` → `status: draft` + add `veracityStatus: unverified` (RC-3)**
Pages: all 4
Do not revert until REVIEW flags are resolved and claims verified.

**CR-6 — Convert TODO blocks to REVIEW format and move TODO comment blocks (RC-4)**
Pages: all 4
Move pre-publish TODO blocks to `_workspace/`. Convert inline TODO comments to `{/* REVIEW: [claim] — [source] */}` format.

**CR-7 — Remove banned word `significantly` (RC-5)**
Pages: operator-rationale (lines 149, 376), requirements (line 184)
Specific replacement text in RC-5 above.

### MEDIUM

**CR-8 — Rename substandard headings**
- operator-rationale: "What Orchestrators Earn" → "Revenue Streams"; "Three Viability Questions" → "Viability Check"; three H3 viability question headings → "Reward Call Threshold", "Pricing and Capability Fit", "Infrastructure Stability"; "Video vs AI: Starting Workload" → "First Workload Choice"
- business-case: "Hobbyist vs Commercial" → "Operating Models"; "What Commercial Operation Requires" → "Commercial Operation Standards"; "How to Position for Commercial Workloads" → "Commercial Positioning"; "The Commercial Operator Landscape" → "Operator Archetypes"; "Building Gateway relationships" → "Gateway Outreach"; "Why Service Fees Scale" → "Fee Income Mechanics"; "Working with Gateways" → "Gateway Relationship Model"
- operator-impact: "How Votes Work" → "LIP Voting Mechanics"; "Scope of Governance" → "Protocol Governance Coverage"; "Beyond Earnings: Sovereign Compute" → "Sovereign Compute"; "Practical Governance Participation" → "Governance Participation"
- requirements: "Testing Your Capacity" → "Capacity Testing"; "Checklist Before Going Live" → "Launch Readiness"

**CR-9 — Remove banned words and fix banned constructions in business-case.mdx**
- Line 351: "Pool operators are **effectively** GPU infrastructure businesses" → "Pool operators run as GPU infrastructure businesses"
- Line 277: "has **real** negotiating leverage" → "has leverage worth acting on"
- Line 347: "**Several** types of operator" → "Three types of operator" (if three are the actual count)
- Line 174: "monthly ETH fee income...can exceed" → "For Orchestrators with sustained high-volume Gateway relationships, monthly ETH fee income from job processing exceeds LPT inflation income." Add `{/* REVIEW: confirm before asserting directly */}`
- Line 57: Delete "This page covers what professional-grade Orchestrator operation looks like in practice."
- Line 151: Delete "The reason is straightforward:" — open directly with the fact.

**CR-10 — Fix banned constructions in operator-rationale.mdx (after CR-1)**
- Line 60: Delete "Use this page to choose that path."
- Line 288: "A well-configured AI node...can compete" → "...competes"
- Line 300: "are not recoverable" → "are forfeited" + replace em-dash with semicolon
- Line 304: "When sustained ~95%+ uptime is unrealistic" → "Setups unable to sustain ~95%+ uptime belong in the pool worker path."

**CR-11 — Fix banned constructions in operator-impact.mdx**
- Line 57: "Livepeer can support" → "Livepeer supports"
- Line 213 (accordion): Remove `meaningfully` — "provides a meaningfully different infrastructure substrate" → "provides a different infrastructure substrate"
- Line 224 (accordion): "Any application can access" → "Any application accesses"
- Line 256: Delete `If the motivation case is clear, the practical question becomes what an operator actually does with that influence.` (open the paragraph with the next sentence instead)
- Line 266: "Voting can be done via the Livepeer Explorer" → "Vote on LIPs via the Livepeer Explorer" (missed finding in original check report — confirmed real)

**CR-12 — Fix banned constructions and self-referential opener in requirements.mdx**
- Lines 55–56: Delete "Use this page as a readiness filter before investing more time in setup. It is here to answer a simple question: does your machine, network, and system stack actually support the workload path you want to run on Livepeer?" Replace with a direct threshold statement.
- Line 80: "Earlier versions are not supported" → "The AI runner containers require CUDA 12.0 or later."

### INFO

**CR-13 — Remove dead imports in business-case.mdx and operator-impact.mdx**
business-case.mdx line 50: remove `CenteredContainer, BorderedBox` (not used in body). Confirm `ScrollableDiagram` (line 49) not used; if so remove.
operator-impact.mdx: `ScrollableDiagram`, `CenteredContainer`, `BorderedBox` imported but not used. Per checks.mdx: "Dead imports. Do not flag." — informational only; no action required unless render issues are observed.

**CR-14 — Trim business-case.mdx description**
Current description is ~165 chars, marginally over the 160-char limit.
Proposed: "How commercial Orchestrators earn from service fees, build Gateway relationships, and position for application workloads." (119 chars) — confirm before applying.

---

## 5. Cross-Page Structural Notes

### Navigation sequence
The 4 pages form a sequential group in docs.json: `operator-rationale` → `business-case` → `operator-impact` → `requirements`. The logical flow is: why run one → commercial case → non-financial case → what you need. All 4 check reports confirm PREV/NEXT adjacency is correct. No navigation restructuring required.

### Shared content risk: operator-rationale and incentive-model
operator-rationale's "Revenue Streams" section (currently "What Orchestrators Earn") overlaps thematically with `incentive-model`. The check report notes this is acceptable (different framing: evaluative lens vs mechanics explanation) but recommends verification before publication. Flag for human confirmation.

### Shared content risk: operator-impact and network-participation
operator-impact lines 84–93 (voting weight, passing threshold, delegator override, poll creation cost) may duplicate content in `network-participation` (Governance Guide). Cannot confirm without reading the adjacent page. Flag for cross-page check before publication.

### business-case.mdx: pool worker undefined at first use
`pool worker` is used at line 349 in business-case.mdx without a definition. The term is a locked domain term that must be defined at first use on every page. Fix: add parenthetical on first use: "Pool operators (where worker GPUs operate under a shared Orchestrator address)". Add `{/* REVIEW: confirm definition against protocol docs */}`.

### requirements.mdx: VRAM inconsistency flag (prior batch)
The REVIEW-REGISTRY.md from the prior session flagged VRAM inconsistencies across pages (SAM2, audio-to-text, RTX 2060). requirements.mdx is the canonical VRAM reference page. Inconsistencies here propagate across the tab. Veracity pass on VRAM claims should resolve the canonical values before other pages are fixed.

### operator-impact.mdx: cross-tab link quality
operator-impact has one cross-tab link (to `/v2/lpt/about/overview`). This is noted positively. All other pages in the subfolder have no confirmed cross-tab links. This is acceptable for the operator-considerations depth of the IA — cross-tab links are expected at the portal/navigator level rather than within guides.

---

## 6. Learnings for Future Batches

These patterns were not fully covered by P1–P64 in learnings.md and recurred across this batch.

### L-NEW-01: `veracityStatus: unverified` fix recommended inconsistently across a batch
All three critical reviews in this batch flagged the same incorrect recommendation: "add `veracityStatus: unverified`." The check reports and critical reviews conflicted with each other on whether `unverified` is a valid schema value. This ambiguity caused inconsistent fixes across 3 of 4 pages. Resolution: checks.mdx §1.8 defines valid values as `verified`, `unverified`, `stale`. `unverified` IS valid. `partial` does NOT exist. Future check and critical review agents must read checks.mdx §1.8 directly before stating fix options; do not derive schema rules from prior reports.

### L-NEW-02: Verdict count omits FAIL checks that are cross-referenced to other findings
Across all 4 pages, at least one check (typically 6.5 or 6.6) failed in its category check table but was omitted from the verdict FAIL ID list because the checker noted "covered by F-XX finding." P49 requires individual failing check IDs in the verdict regardless of finding deduplication at the finding level. Future agents: complete the verdict ID list from the category check tables directly; do not suppress check IDs because they share a root cause with another finding.

### L-NEW-03: Category 2 verdict count vs check table mismatch
requirements.mdx check 2.10 failed in the check table but was excluded from the Category 2 verdict count. operator-impact.mdx check 2.1 was marked FAIL in the result column but the detail concluded PASS. These are P26/P28 violations. Future agents: after completing all category check tables, re-verify the verdict count by tabulating FAIL results from the tables before writing the verdict line.

### L-NEW-04: Corrupt prefix detection requires file read at offset 0 before any category analysis
The operator-rationale.mdx corrupt prefix (`glrw`, `pwrfs`) was correctly identified but only surfaced as a pre-flag note, then distributed across Category 5 (5.6) and Category 9 as a process flag. A corrupt prefix is not a Category 5 or Category 9 issue — it is a file integrity issue that should trigger a STOP flag before category analysis begins. Future check agents: read lines 1–10 of every source file as the first step; if any content appears before the `---` frontmatter delimiter, flag CRITICAL and note it prominently at the top of the report before any category begins.

### L-NEW-05: `meaningfully` counted as appearing twice when it appears once
The operator-impact critical review caught a false double-count of `meaningfully` — the check report claimed it appeared in body prose AND inside the accordion, but it appeared only inside the accordion. Future agents: when logging banned word occurrences, quote the surrounding sentence and state the line number for each occurrence. Do not summarise as "appears twice" without two independent line citations with quoted context.

### L-NEW-06: Question-form headings belong under check 3.1 not check 3.2
The operator-rationale critical review correctly noted that question-form headings (CLAUDE.md Voice: "No questions in headings") fail check 3.1 (heading rubric — questions score 1–2/5 on Precision) rather than check 3.2 (banned/weak standalone terms). Routing the finding to 3.2 inflated the 3.2 fail count and created an incorrect FAIL on a check that should PASS. Future agents: question headings → check 3.1 (rubric score), with a note citing CLAUDE.md Voice rule. Check 3.2 covers the banned/avoid/OK tier terms only.

### L-NEW-07: An F-XX entry in the Finding Index must contain an actionable finding
operator-rationale F-23 was a placeholder ("No additional 3.3 violation beyond F-22.") assigned HIGH severity with no actionable content. This creates confusion for executing agents. Future agents: if a finding ID is allocated but no additional finding exists, do not include it in the Finding Index. Either collapse to the prior finding or leave the ID gap with an explicit note "(no finding at this ID)".

---

_Summary generated: 2026-03-24 | Pages covered: 4 | Source reports: 8 (4 check + 4 critical review) | Schema correction applied: veracityStatus valid values per checks.mdx §1.8_
