# Critical Review — `v2/orchestrators/resources/technical/cli-flags.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/technical/cli-flags.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (header states `docs.json (lines 2974–2981)` but does not state learnings version; check structure is consistent with P1–P90 batch)

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

### Correction 1 — Verdict count mismatch (P49, P26)

**Check ID affected:** Verdict Summary
**Original statement:** The report states "Confirmed fail checks (12)" in its first pass, then corrects inline to "(18)" and lists 18 IDs: `1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.4, 3.1, 4.3, 4.4, 5.4, 6.2, 6.5, 6.7, 6.9, 9.1, 9.3`.
**Correction:** The initial "(12)" in the verdict header is never updated — it reads "Overall: NEEDS WORK / Confirmed fail checks (12):" then the next line provides the corrected list of 18. The check table lists also count 18 independent FAIL entries confirmed from individual category verdicts. Count is correct at 18, but the sentence header "Confirmed fail checks (12)" directly contradicts it. This is a P26/P49 violation: summary count (12) does not match the listed FAIL IDs (18). The header must state "(18)" not "(12)".
**P-rule:** P26, P49
**Fail count impact:** No change to actual FAIL count — the 18-ID list is correct. The "(12)" is an editing residue that must be removed.

---

### Correction 2 — Check 5.4: TODO block classification (P78)

**Check ID affected:** 5.4
**Original statement:** Check 5.4 is marked FAIL: "Active `TODO` block (lines 25–46) present in shipped content — `TODO/TBD placeholders` are on the avoid list for `reference` pageType."
**Correction:** P78 states: "MDX comments (`{/* ... */}`) are not rendered in the page output. They cannot constitute check 5.4 failures (avoided components absent)." The TODO block at lines 25–46 is an MDX comment (`{/* TODO: ... */}`). It is not rendered content. Check 5.4 must be PASS with the note "MDX comment — not rendered." The actual rendered page contains no TODO/TBD placeholder components.

This also affects check 9.3: "No `TODO` or `TBD` in decision-critical positions." Check 9.3 covers decision-critical *content* positions — the TODO block is an MDX comment that does not render. However, the TODO block at lines 25–46 contains open instructions with no named owner, no `{/* REVIEW: */}` format, and no source — this is a legitimate check 6.9 FAIL (open-ended research task) and check 6.5 FAIL (`{/* FACT CHECK */}` or non-standard comment format per P61, P70). The check 9.3 FAIL should be recharacterised: the finding belongs in checks 6.5 and 6.9 (already correctly identified), not in check 9.3 which governs decision-critical content in rendered output.
**P-rule:** P78, P61, P70
**Fail count impact:** -1 (remove 5.4 from FAIL list). Check 9.3 should be reconsidered — if it is flagging the non-rendered MDX comment as a rendered-content issue, remove it; if it is flagging something else in the page, specify that. Net: -1 or -2 depending on 9.3 determination.

**Re-evaluation of 9.3:** The check notes "Lines 25–46: large active TODO block in frontmatter/page body covering terminology validation, style verification, and rendering checks. This is decision-critical content." An MDX comment is not "in decision-critical positions" of the rendered page. Check 9.3 = PASS for this reason. The issues it identifies (unresolved TODO, non-`{/* REVIEW: */}` format) are correctly captured in 6.5 and 6.9.
**Revised fail count impact:** -2 (remove 5.4 and 9.3).

---

### Correction 3 — Check 8.6: self-correction not cleanly resolved (P28)

**Check ID affected:** 8.6
**Original statement:** The check 8.6 row shows a self-correction mid-cell: "Line 52–53: imports `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`. All are used in the page. PASS. Wait — re-checking: `CustomDivider` is used at line 155 and 204. `StyledTable`, `TableRow`, `TableCell` are used in all three tables. No orphaned imports. **Correction: PASS**"
**Correction:** The result column states FAIL then is corrected inline to PASS. Per P28, result column must match the detail text conclusion. The cell is internally consistent (it ends on PASS), but the initial "FAIL" statement followed by in-line correction is not clean. The verdict result is PASS. However, the Category 8 verdict is listed as PASS, which is correct. The check 8.6 result column should show only PASS with the verification note. This is a minor presentation issue, not a FAIL count error — the category and verdict PASSes are correct.
**P-rule:** P28
**Fail count impact:** 0 (result is already PASS in verdict)

---

### Correction 4 — P94 not applied: docs.json check not explicitly flagged in header

**Check ID affected:** Report header
**Original statement:** The report header notes `docs.json (lines 2974–2981)` — confirming the checker read docs.json. The report correctly identifies cli-flags IS in docs.json (7.1 PASS). P94 requires: "After the Pre-Check file integrity step (P81), verify docs.json registration BEFORE any category analysis. If a file is absent from docs.json under its expected tab group, write 'CRITICAL NAVIGATION ORPHAN' in the report header."
**Correction:** cli-flags IS in docs.json — P94's CRITICAL NAVIGATION ORPHAN flag does not apply. However, the report has no explicit Pre-Check (P81) section stating "Read lines 1–10: no corrupt prefix." P81 compliance is absent from this report. For cli-flags, this is low severity because the content is substantive and no corrupt prefix exists. Missing P81 header is a format gap only.
**P-rule:** P81, P94
**Fail count impact:** 0

---

### Correction 5 — x-contract-addresses NEXT adjacency: check 4.3 finding is valid but narrative overstates

**Check ID affected:** 4.3, 4.4
**Original statement:** "docs.json (line 2976): `cli-flags` is PREV to `x-contract-addresses`. `x-contract-addresses` has `pageType: landing` (deprecated) and empty body — it is a dead stub. Navigation from cli-flags leads to a broken page."
**Correction:** The adjacency relationship is verified correct from docs.json (lines 2976–2977). The finding is accurate: `x-contract-addresses` is an empty stub with deprecated taxonomy that is in active nav. However, the narrative at check 7.9 says "An active content page followed immediately by a stub" — this is accurate. Checks 4.3 and 4.4 FAILs are justified. No correction needed to the finding itself; the check is correctly evaluated.
**P-rule:** P33, P25
**Fail count impact:** 0

---

### Correction 6 — Check 1.5: audience field not assessed

**Check ID affected:** 1.5 (absent from check table)
**Original statement:** The check table shows: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 — check 1.5 (`audience` uses 7-token set) is absent from the Category 1 check table entirely.
**Correction:** P5 requires all numbered checks to appear — mark N/A with reason if skipped. Check 1.5 is silently absent. The Frontmatter Table lists `audience: orchestrator` as PASS, but the check table has no 1.5 row. Result: PASS (orchestrator is canonical). This is a P5 format violation — the row is missing, not that the result is wrong.
**P-rule:** P5
**Fail count impact:** 0 (result would be PASS)

---

## Corrected Fail Count

**Original stated:** 18 (with "(12)" header artifact)
**Adjustments:** -2 (remove 5.4, remove 9.3)
**Corrected:** 16

**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.4, 3.1, 4.3, 4.4, 6.2, 6.5, 6.7, 6.9, 9.1

---

## New Findings (P90–P96 gaps)

### NF-1 — P94 compliance: docs.json check not structured as pre-analysis step

The report cited docs.json in the header but did not structure it as a named pre-analysis step before Category 1. P94 requires docs.json verification as a named step in the report flow, distinct from the P81 file integrity check. This is a format gap; the content of the check (cli-flags is in docs.json) is correct.

### NF-2 — P81 compliance: Pre-Check section absent

No "Pre-Check: File Integrity" section heading exists in this report. P81 requires reading lines 1–10 and documenting the result. The cli-flags source file confirms the frontmatter opens clean at line 1 with no corrupt prefix — but this is not documented in the report.

### NF-3 — P91 compliance: component content not explicitly scanned

The Banned Construction Scan (check 2.4) scanned "description field, H2/H3 headings, body prose" — but the check also notes `StyledTable`, `TableRow`, `TableCell`, and `CustomDivider` are used. Per P91, all content scans must include component content: table cell text, CustomDivider `middleText` props. The check report did not explicitly list table cell text as a scan target. The tables contain technical terms and values — banned word scan (check 2.2) and banned construction scan (check 2.4) should explicitly document that table cell content was scanned. This is a completeness gap; it is possible no violations exist in table cells, but they were not shown as scanned.

### NF-4 — P96 heading pattern check not applied

P96 requires explicit scanning for known-failing heading patterns: `## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## What happened`, `## Related`. The check report scores the three H2 headings but does not explicitly run this known-pattern scan. For this page, none of the three headings match the P96 known-failing list — so no finding results, but the scan step is missing from the report.

### NF-5 — Check 6.3 misstated

The check report marks 6.3 as NOT-TESTED with note "Page does not contain percentages or gas costs." But check 6.3 per checks.mdx is "No deprecated API usage" — the report has misread it as a "protocol-state figures" check (that is P77 guidance, not check 6.3). Check 6.3 should evaluate whether any CLI flags or gRPC field names are deprecated API references. This should be evaluated rather than skipped on the grounds of "no percentages or gas costs." This is a check misidentification — check 6.3 in checks.mdx states: "No deprecated API usage — all endpoints, SDK methods, CLI flags are current. No references to removed or renamed APIs." For a CLI flags reference page, this is directly applicable and NOT-TESTED is an incomplete result.

---

## Proposed Learnings

**NEW-P97: Check 6.3 scope is deprecated API/CLI/SDK usage — not protocol-state percentages.** Checks.mdx §6.3 states: "No deprecated API usage — all endpoints, SDK methods, CLI flags are current." Checkers are confusing this with P77 (staleness tiers for protocol-state figures). For pages with CLI flags, SDK references, or API endpoints, check 6.3 must be evaluated against the current go-livepeer release, not treated as N/A because no percentages appear.
