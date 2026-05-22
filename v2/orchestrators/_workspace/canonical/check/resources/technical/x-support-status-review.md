# Critical Review — `v2/orchestrators/resources/technical/x-support-status.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/technical/x-support-status.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header)

---

## Overall Rating

RELIABLE

---

## Corrections Required

### Correction 1 — Check 5.7: `purpose: operations` is not old-schema frontmatter (P37, P67)

**Check ID affected:** 5.7
**Original statement:** Check 5.7 FAIL: "`purpose: operations` is not a canonical value (not a deprecated alias — an invalid value per P37c, also caught in check 1.4)."
**Correction:** Check 5.7 per checks.mdx is "No old-schema frontmatter — No 12-type pageType values, no deprecated purpose aliases, no old audience tokens." The check agent correctly identifies `operations` as an invalid value per P37c (not in either the 7-type or deprecated schema). But check 5.7 specifically governs old-schema values (deprecated aliases and old schema values that existed in the legacy 12-type system). `operations` is not an old-schema value — it was never a valid value in any schema version. It is an invalid value only.

The check report itself acknowledges this: "an invalid value per P37c, also caught in check 1.4" — then marks check 5.7 FAIL anyway. Check 5.7 should be PASS. The violation is fully captured in check 1.4 (purpose not in 15-value canonical set) and the Frontmatter Table. Double-logging an invalid value in both check 1.4 and check 5.7 inflates the FAIL count.

Check 5.7 = PASS. `purpose: operations` is caught by check 1.4 only.
**P-rule:** P37, P67, P13 (related findings should not be double-counted)
**Fail count impact:** -1 (remove 5.7 from FAIL list)

---

### Correction 2 — Verdict summary FAIL count: 5.7 inflates by 1 (P49)

**Original statement:** "Total FAIL count: 18 / FAIL check IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.1, 2.4, 2.5, 2.10, 3.1, 3.4, 3.5, 3.7, 5.7, 9.1"
**Correction:** Per Correction 1, 5.7 is removed. Corrected count: **17 FAIL checks**.
**Revised FAIL IDs:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.1, 2.4, 2.5, 2.10, 3.1, 3.4, 3.5, 3.7, 9.1
**P-rule:** P49
**Fail count impact:** -1

---

### Correction 3 — Check 9.1 misidentification (P-framework)

**Check ID affected:** 9.1
**Original statement:** Check 9.1 FAIL: "No sign-off — draft placeholder, not reviewed by human."
**Correction:** Per checks.mdx, check 9.1 is "Human sign-off recorded — Page has been explicitly approved by a human. Agent self-reporting does not count." The check correctly applies this definition. However, check 9.1 is a process/governance check. The fix (F-12: "Page requires human sign-off before status can move beyond draft placeholder") is correctly framed.

One issue: the check cross-references 9.1 in the Cross-Category Connections section under C3: "Missing required fields (checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6) — all missing-field adds with no content dependency." But check 9.1 is NOT a missing-field add — it is a governance process requirement. It should not be grouped with missing-field fixes. This is an erroneous cross-category grouping that could cause an executing agent to treat the sign-off requirement as a frontmatter field addition. The C3 note should list 9.1 separately with the correct framing: "9.1 — requires human action, not a field addition."

No change to FAIL count; grouping correction only.
**P-rule:** P4 (cross-category connections must correctly link related findings)
**Fail count impact:** 0

---

### Correction 4 — Check 2.10: shares root with 2.4 and 2.5 but is separately listed (P13)

**Check ID affected:** 2.10, 2.4, 2.5
**Original statement:** Three separate FAILs (2.4, 2.5, 2.10) for the same line 23: `This placeholder will become the operator-facing status page for supported, experimental, and deprecated paths.`
**Correction:** P13 states: "Deduplicate cross-category findings — log once, cross-ref." The Cross-Category Connections section correctly groups all three under C1: "checks 2.4, 2.5, 2.10 share root: line 23 `This placeholder will become…`. Single fix: delete line 23." The single fix (F-01) resolves all three. This is correctly handled — C1 groups them with a single fix. However, the FAIL count lists three IDs (2.4, 2.5, 2.10) as separate FAILs. Per checks.mdx, checks 2.4, 2.5, and 2.10 are three distinct checks that all FAIL — they should each appear in the FAIL list because they each represent a distinct quality dimension failure, even if the root cause is one line. The P13 deduplication applies to logging the finding (cross-ref to one fix), not to the FAIL count. Three separate checks FAIL = three check IDs in the FAIL list. This is correct.
**P-rule:** P13
**Fail count impact:** 0 (correctly handled)

---

## Corrected Fail Count

**Original stated:** 18
**Adjustments:** -1 (remove 5.7 — invalid value caught by 1.4 only)
**Corrected:** 17

**Corrected FAIL IDs:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.1, 2.4, 2.5, 2.10, 3.1, 3.4, 3.5, 3.7, 9.1

---

## New Findings (P90–P96 gaps)

### NF-1 — P94/P81 compliance: pre-check section is present and correctly executed

The report has a "Pre-Check: File Integrity" section that reads lines 1–10 and confirms no corrupt prefix. The `x-prefix note` and nav status check are documented before Category 1. This is CORRECT P81 and P94 compliance — better than cli-flags and x-changelog reports in this batch.

### NF-2 — P96 heading scan: applied but not labelled as P96

The report's check 3.1 row explicitly scores both headings (`Planned scope`, `Recommended now`) against the rubric. The known-failing patterns from P96 (`## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## What happened`, `## Related`) are implicitly checked — neither of these headings matches the P96 list. However, both headings scored well below 20/25, correctly flagged as FAIL. P96 compliance is met substantively; the scan is present even if not explicitly labelled as a P96 known-pattern check.

### NF-3 — `## Recommended now` heading: P96 extension pattern

`## Recommended now` is not in the P96 known-failing list but scored 13/25. The temporal instability of `now` (check 3.1: Stability dimension = 2/5) creates a pattern similar to `## What's Next` (banned tier). This heading uses urgency language rather than concept language — same failure mode as `## Recommended` or `## What happened`. This is a new instance of the recurring temporal/urgency heading pattern worth tracking.

### NF-4 — P91 scan: component content not present

No custom components — P91 N/A. Correctly handled by the report (plain MDX noted, components N/A).

### NF-5 — Check 6.3 misidentification (systematic batch pattern)

Check 6.3 in the x-support-status report is marked N/A with "No API references." This is the closest of the three reports with content (cli-flags, x-support-status) to the correct check 6.3 definition — but still not precisely stated. The check.mdx definition of 6.3 is "No deprecated API usage" — for x-support-status, which contains only links (no API or CLI references), N/A is the correct result. The reasoning should state "no CLI flags, API endpoints, or SDK methods present" rather than "no API references" (which is vague).

### NF-6 — F-07 proposed heading `## Coverage`: check 3.2 compliance

Fix F-07 proposes renaming `## Planned scope` to `## Coverage`. Per P18/P75, proposed renames must be checked against the check 3.2 prohibited list. The banned terms are: `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`. The avoid-tier terms are: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. `Coverage` does not appear in either tier. The fix is clean.

### NF-7 — F-08 proposed heading `## Current Canonical Pages`: check 3.2 compliance

Fix F-08 proposes renaming `## Recommended now` to `## Current Canonical Pages`. `Current` is not in the prohibited list. `Pages` is not in the prohibited list. The rubric score for `Current Canonical Pages`: Precision=4 (names the concept), Depth=3 (signals authority level), Stability=4 (survives content changes), Clarity=4, Conciseness=3 (3 words, slightly generic). Estimated ~18/25 — borderline FAIL. A stronger candidate: `## Canonical Paths` (Precision=5, Depth=4, Stability=5, Clarity=4, Conciseness=5 = 23/25). The fix passes the check 3.2 test but may not pass check 3.1 at 20/25+. This is an advisory note, not a blocking correction.

---

## Proposed Learnings

No new patterns identified beyond NF-3 (temporal/urgency headings) and the check 5.7 double-counting pattern (see Correction 1). The check 5.7 / check 1.4 double-logging pattern for invalid (non-old-schema) values is worth documenting:

**NEW-P100: Check 5.7 governs old-schema values only (deprecated aliases, 12-type pageType values, old audience tokens). An invalid value that was never in any schema version (e.g., `purpose: operations`, `purpose: guide` treated as a purpose value) is caught by check 1.4 only. Do not also FAIL check 5.7 for values that are invalid rather than deprecated. The distinction: deprecated = was valid, now retired; invalid = was never valid in any version.**
