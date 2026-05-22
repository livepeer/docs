# Critical Review — `v2/orchestrators/resources/x-guides.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/x-guides.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header)

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

**C-01 — P94: CRITICAL NAVIGATION ORPHAN not written in report header before Category 1**

Original stated: Navigation orphan confirmed in the header metadata line (`NOT IN NAV. Orchestrators/resources entries confirmed at lines 2968–2987; v2/orchestrators/resources/x-guides absent`) and flagged as check 7.1 FAIL. The Pre-Check: File Integrity section runs at lines 13–30.

Correction required per P94: After the Pre-Check file integrity step, the docs.json registration check must result in a `CRITICAL NAVIGATION ORPHAN` heading written in the report body BEFORE Category 1, not only embedded in the header metadata. The current report notes the orphan status in the navigation source metadata line at the top — which is correct context — but does not produce a standalone `CRITICAL NAVIGATION ORPHAN` section before Category 1. P94 explicitly requires: "write 'CRITICAL NAVIGATION ORPHAN' in the report header (before Category 1), note the gap with the docs.json search result, and continue with full category analysis." The flag must appear as a visible block before the Frontmatter Table, not only in the metadata.

Impact: The finding itself is correctly surfaced in Category 7. The structural placement per P94 is missing. This is a format violation, not a content error.

P-rule: P94
Fail count impact: 0 (7.1 and 7.4 are already FAIL; the orphan is correctly captured)

**C-02 — Check 2.4 BORDERLINE: `not officially reviewed` — classification is sound but must not appear in FAIL count**

Original stated: `2.4 BORDERLINE — "not officially reviewed" — secondary disclaimer; human review required. Category 2 verdict: FAIL — 0 confirmed FAILs; check 2.4 BORDERLINE.`

Assessment: The BORDERLINE classification is reasonable and the handling is correct per P23 and P60. The Category 2 verdict correctly shows 0 confirmed FAILs with a BORDERLINE note. The overall Verdict Summary correctly lists check 2.4 as BORDERLINE (pending human review) and not in the FAIL count. P60 compliance verified.

No correction needed.

**C-03 — Verdict Summary NOT-TESTED count: 11 listed but actual count differs**

Original stated: `NOT-TESTED count: 11 (5.3, 5.5, 6.1, 6.4, 6.8, 8.2, 9.2, 9.4, 9.5, 9.6)`

Count: That list contains 10 items, not 11. Specifically: 5.3, 5.5, 6.1, 6.4, 6.8, 8.2, 9.2, 9.4, 9.5, 9.6 = 10. The stated count of 11 is off by 1.

P-rule: P49 (verdict summary must count individual check IDs, not approximate)
Fail count impact: 0 (NOT-TESTED count error, not FAIL count error; does not affect the 19 FAIL total)

**C-04 — P87: x-guides has `pageType: reference` (schema-valid). Not applicable.**

x-guides has `pageType: reference`, which is a valid 7-type canonical value. P87 (type-confusion for `pageType: overview`) does not apply. The BD-1 raised in this report (`reference` vs `resource` editorial mismatch) correctly escalates as a Blocking Decision rather than a schema error. P87 not triggered. Confirmed correct.

**C-05 — Checks 5.1 and 5.2 FAIL: rationale is sound**

The report correctly flags `pageType: reference` as mismatched against the actual content structure (curated card index, not a technical spec reference), raises it as BD-1, and marks checks 5.1 and 5.2 FAIL as a result. Per P67, the Frontmatter Table shows `pageType: reference` as PASS (schema-valid), and the check table marks 5.1 and 5.2 FAIL (structural mismatch). These are different checks asking different questions. P66 applies to field-level agreement between the Frontmatter Table and the check table row for the same field (i.e., check 1.2 vs the pageType Frontmatter Table row). Here, 1.2 is PASS (schema-valid) and 5.1/5.2 fail for layout mismatch — these are independent checks. P66 is satisfied.

**C-06 — P90: `status: review` handled correctly**

Report marks `status: review` as FAIL in the Frontmatter Table (P57: wrong-enum error, valid values are `current` and `draft`). Check 5.7 is PASS ("no deprecated 12-type values in pageType; status: review is a wrong-enum value, flagged in 1.8, not an old-schema remnant"). Check 1.8 has the atomic P39/P84 fix. P57 and P90 compliance verified. This is the correct model for handling non-canonical status values.

---

## Corrected Fail Count

**Original report fail count:** 19
**Adjustments:** 0 additions, 0 removals
**Corrected fail count:** 19
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 3.1, 3.2, 5.1, 5.2, 6.6, 7.1, 7.4, 7.8, 9.1, 9.3

**Note:** NOT-TESTED count corrects from 11 to 10 (the 10 IDs listed match exactly). No FAIL count change.

---

## New Findings (P90–P96 gaps)

**P90:** `status: review` correctly handled as wrong-enum under check 1.8 with atomic P39/P84 fix. Not `status: published`. P90 satisfied.

**P91:** Source page uses CardGroup (10 cards), StyledTable (community resources), CustomDivider. Card descriptions are visible text. The Banned Word Scan explicitly states "Card descriptions (lines 26–90): scanned. No matches." P91 scope includes Card titles — the report does not explicitly name Card titles as a separate scan target but they were included in the "lines 26–90" scan range. Acceptable coverage.

**P92:** `purpose: reference` — valid. P92 targets `purpose: guide` wrong-field error. Not triggered.

**P93:** No content contradictions were flagged. The community resources disclaimer (line 97: "not officially reviewed or guaranteed to be current") creates a BORDERLINE `not [X]` finding (C-02 above) — but that is a banned construction issue, not a contradiction. The Warning/Note context check applies when a contradiction is flagged; no false-positive contradictions appear in this report.

**P94:** Page is NOT in docs.json. The CRITICAL NAVIGATION ORPHAN flag appears in the header metadata but NOT as a standalone section before Category 1. This is a format gap per P94. The navigational finding is correctly captured in Category 7. See C-01.

**P95:** x-guides links to `operator-toolbox` in both the Official guides CardGroup and the See Also CardGroup (duplicate target within the same page). The report notes this as INFO at check 4.8: "Both are target duplicates within the same page, not cross-page duplication. Below FAIL threshold." This is correct framing — P95 targets content overlap between separate pages, not duplicate links within one page.

**P96:** Source headings: `## Official guides`, `## Community resources`, `## Discord and forum`, `## See Also`. `## See Also` is Banned-tier — correctly caught at check 3.2 and scored 13/25 at check 3.1. The other three headings score ≥22/25. No `## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## What happened` present. P96 fully covered.

---

## Proposed Learnings

**Proposed P-97 (candidate):** When a report states a learnings version (e.g. "P1–P90"), the critical reviewer should explicitly note which P91–P96 checks were not in scope for the original agent and check each one against the source page. This avoids silently passing P91–P96 on reports written before those learnings existed. For this report: all P91–P96 gaps were minor (no Accordions, no content contradictions, orphan correctly flagged). The only gap is P94 format compliance (C-01 above).
