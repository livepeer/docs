# Critical Review — `v2/orchestrators/resources/x-payments.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/x-payments.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header)

---

## Overall Rating

NEEDS CORRECTION

---

## Corrections Required

**C-01 — P87: `pageType: overview` flagged as deprecated alias — must be TYPE-CONFUSION**

Original stated: Check 1.2 FAIL — "`overview` is deprecated as a pageType (now only a pageVariant). Migration: determine correct pageType (navigation if routing only; guide or reference if content). — confirm before applying." Frontmatter Table: "`overview` is a deprecated alias (was valid as pageType in old 12-type schema; now `overview` is a `pageVariant` only). Migration required."

Correction: P87 is explicit: "When check 1.2 finds a `pageType: overview` value, flag it as a TYPE-CONFUSION error (not a deprecated-alias error). `overview` is a `pageVariant` value placed in the wrong field. No migration table entry covers it. The correct `pageType` is unknown and requires a human decision — raise as a Blocking Decision. Do not apply any automatic migration fix."

The report frames the error as a deprecated-alias migration and lists possible migration targets (`navigation`, `guide`, `reference`) directly in the check 1.2 detail — suggesting automatic resolution options. P87 prohibits this: there is no migration table entry for `pageType: overview`, so no migration option can be proposed in the check row. The correct framing is TYPE-CONFUSION, with the correct `pageType` unknown and a BD required.

The report does raise BD-02 for the pageType choice, which satisfies the BD requirement. But check 1.2 must be reframed as TYPE-CONFUSION and the check row must not list migration candidates (those belong in BD-02, where they currently also appear — this is the correct location for options). The Frontmatter Table and check 1.2 row rationale must use "TYPE-CONFUSION: `overview` is a pageVariant value placed in the pageType field. Correct pageType unknown — see BD-02."

P-rule: P87
Fail count impact: 0 (check 1.2 remains FAIL; rationale corrected)

**C-02 — Check 2.6 FAIL: missing from Category 2 verdict and overall Verdict Summary**

Check table: `2.6 FAIL — "The single prose line describes the section's status, not its content"`
Category 2 verdict: `FAIL — 4 checks fail: 2.1, 2.3, 2.5, 2.10` (2.6 absent)
Overall Verdict Summary: 38 listed FAILs, 2.6 absent

Correction: 2.6 has FAIL in the Result column but is missing from the Category 2 verdict list and the overall Verdict Summary. Per P49 and P80, every FAIL in the Result column must appear in both the category verdict and the overall FAIL list. 2.6 must be added to both.

P-rule: P49, P80
Fail count impact: +1 (2.6 added to corrected FAIL list; corrected overall count = 39)

**C-03 — Check 4.6 FAIL: missing from Category 4 verdict**

Check table: `4.6 FAIL — "Line ~35 Card description says 'while orchestrator-specific guidance is in progress' — acknowledges the page is incomplete"`
Category 4 verdict: `FAIL — 5 checks fail: 4.1, 4.2, 4.3, 4.7, 4.9` (4.6 absent)

Correction: 4.6 has FAIL in the Result column but is missing from the Category 4 verdict. Per P49, it must appear in the category verdict. The overall Verdict Summary also omits 4.6 (not in the 38-ID list). Must be added to both.

P-rule: P49, P80
Fail count impact: +1 (4.6 added; corrected overall count = 40 with C-02 also applied)

**C-04 — P84 atomicity: F-01 is correct**

F-01 escalates BD-01 and BD-02 before any individual fixes can run. This is correct for a page in placeholder/incomplete state — all fixes are conditional on disposition decisions. The fix is not a P39/P84 atomicity issue because `status: review` is not `status: current`; the P39 prohibition targets the `status: current` + `veracityStatus: unverified` combination specifically. `status: review` → `status: draft` + `veracityStatus: unverified` would be the correct atomic fix IF the page were being retained. Deferring to BD-01 is the correct approach for a dispose-or-write decision.

**C-05 — P94: CRITICAL NAVIGATION ORPHAN not written as a standalone section before Category 1**

Page is NOT in docs.json. The report notes this in the header metadata line (`NOT in docs.json`). However, the report has NO Pre-Check: File Integrity section (P81 gap) AND no CRITICAL NAVIGATION ORPHAN block before Category 1 (P94 gap). Both are absent.

The report jumps directly from the header to the Frontmatter Table. P81 requires reading lines 1–10 of the source file as the first step before category analysis, and P94 requires writing the CRITICAL NAVIGATION ORPHAN block before Category 1 when a file is absent from docs.json.

Impact: The navigational finding is correctly captured in Category 7. The structural format violations (missing Pre-Check, missing CRITICAL NAVIGATION ORPHAN block) are format-only — they do not affect the correctness of any individual check finding.

P-rule: P81, P94
Fail count impact: 0

**C-06 — Check 1.3 (pageVariant) FAIL may be premature under P87**

Original stated: `1.3 FAIL — "pageVariant absent; required as co-fix with check 1.2 migration (P42)"`

P42 states: "Check 1.3 (pageVariant) is a co-fix dependency of check 1.2. When pageType is deprecated, set `pageVariant` as part of the same root cause fix. Do not log check 1.3 as an independent HIGH finding." P87 says the correct `pageType` is unknown — no migration exists. If there is no migration target, there is no co-fix `pageVariant` to add. The check 1.3 FAIL assumes a migration will be performed. Under P87, the correct treatment is: check 1.3 N/A (no pageVariant applies when pageType is unknown/TYPE-CONFUSION and no migration is defined); the pageVariant decision is part of BD-02 resolution.

However: the report does list BD-02 Option A as `pageType: navigation` + `pageVariant: overview`, which would require a pageVariant. The check 1.3 FAIL is anticipatory — it flags the field as needed for whatever migration is chosen. This is defensible but conflicts with P87's instruction to not apply any automatic migration fix and to raise a BD instead.

Correction: check 1.3 should be N/A (dependent on BD-02 resolution) rather than FAIL. Remove from FAIL list.

P-rule: P87, P42
Fail count impact: -1 (check 1.3 removed from FAIL list; corrected overall = 39 with C-02 and C-03 also applied)

---

## Corrected Fail Count

**Original report fail count:** 38
**Adjustments:** +1 (2.6), +1 (4.6), -1 (1.3 → N/A per P87)
**Corrected fail count:** 39
**Corrected FAIL IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.1, 2.3, 2.5, 2.6, 2.10, 3.1, 4.1, 4.2, 4.3, 4.6, 4.7, 4.9, 5.1, 5.2, 5.5, 5.7, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.5, 7.7, 7.8, 8.6, 9.1, 9.3, 9.4, 9.6

---

## New Findings (P90–P96 gaps)

**P90:** `status: review` is not `status: published`. The report uses P57 framing (non-canonical `status` value → wrong-enum → change to `draft`). The Frontmatter Table marks `status: review` as INFO rather than FAIL. Per P57, any non-canonical status value is a wrong-enum error and should be FAIL. The Frontmatter Table should be corrected to FAIL for `status: review`. This is the same issue found in the arbitrum-exchanges and arbitrum-rpc reports (see C-04 in both arbitrum reviews). Fail count impact: 0 if 5.7 is the cross-reference; but since check 5.7 correctly marks FAIL for `pageType: overview` and `purpose: landing` (old-schema), the additional wrong-enum status belongs explicitly in check 1.8, which already is FAIL. No net impact on FAIL count.

**P91:** Source page has a CardGroup with two Cards. Card description text is visible. The Banned Word Scan says "Scanning body prose" and lists `finalized` for check 2.1, and scans for banned words. Card description text (lines 35 and 43) was covered in the Banned Construction Scan table (both card descriptions are listed at "Card line ~35" and "Card line ~43"). P91 coverage is adequate for this minimal page.

**P92:** `purpose: landing` is not in the 15-value canonical set. This is an invalid value (not a wrong-field error like `purpose: guide`). P92 targets `purpose: guide` specifically. Not applicable. The check 1.4 finding is correct.

**P93:** The report flagged a "Coming Soon pattern" for the card description "while orchestrator-specific guidance is in progress." No adjacent Warning/Note block was involved. P93 applies when a Warning block already resolves an apparent contradiction — not relevant here. Not triggered.

**P94:** Page is NOT in docs.json. No CRITICAL NAVIGATION ORPHAN block before Category 1. No Pre-Check: File Integrity section. Both P81 and P94 format requirements are absent. See C-05.

**P95:** x-payments links to both `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` (cross-tab, gateway content) and `/v2/orchestrators/resources/arbitrum-exchanges`. The gateway clearinghouse link is noted as a "temporary cross-tab reference" in check 4.10. There is no content overlap with other pages in this batch — the page is a placeholder. P95 is about near-duplicate content between sibling pages, not temporary cross-tab links. Not triggered.

**P96:** Page has no H2/H3 headings. Title only (`Orchestrator Payments`, scored 19/25). No known-failing P96 heading patterns applicable. Correctly handled.

---

## Proposed Learnings

No new patterns beyond what C-01 through C-06 reinforce. C-01 (P87 TYPE-CONFUSION vs deprecated-alias for `pageType: overview`) is a recurring P87 violation. The prompt instruction for P87 needs to be restated more forcefully to prevent the agent from listing migration candidates inside the check 1.2 row — migration options belong exclusively in the BD section.
