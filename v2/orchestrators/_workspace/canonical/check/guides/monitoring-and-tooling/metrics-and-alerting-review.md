# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/monitoring-and-tooling/metrics-and-alerting.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Self-link finding — target must be verified against docs.json
**Severity:** HIGH
**Check affected:** 8.1 / P33, P47
**Finding in original:** "Self-link at line 86: `[Prometheus Metrics Reference](/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting)` — this page links to itself."
**What is wrong:** P33 requires verifying the link target against docs.json before flagging. P47 requires full-path confirmation. The link target is `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`. The current page path is `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (confirmed in docs.json at line 2932). These are the same path. The link IS a genuine self-reference — the page links to its own docs.json entry. This is a real content error: the link text says "Prometheus Metrics Reference" but the target is the same page (a setup guide, not a metrics reference). The check finding is CORRECT and should remain FAIL.

However, the report also cites "line 397" as repeating the self-link via a card. The source file was only read to line 130 in this review session. The line 397 citation cannot be independently confirmed here but is consistent with the report's description of a CardGroup exit that routes back to the same page. No correction needed for the finding itself — the self-link is real. The report correctly identifies it as a content error requiring a blocking decision.
**Status:** CONFIRMED — no correction needed for the finding substance. The self-link is verified.

---

### Issue 2: P37 — `purpose: guide` correctly characterised
**Severity:** N/A (confirmation)
**Check affected:** 1.4 / P37
**Finding in original:** "`purpose: guide` — wrong-field error (type b). Proposed: `purpose: configure` — confirm before applying."
**Status:** CORRECT. `purpose: guide` in frontmatter (confirmed at line 26 of source). P37 type b (valid pageType value in purpose field). Not characterised as deprecated alias. P37 satisfied.

---

### Issue 3: P39 — status fix is internally consistent
**Severity:** N/A (confirmation)
**Check affected:** status INFO row / P39
**Finding in original:** "Fix: add `veracityStatus: unverified`"
**Status:** CORRECT. The page has `status: published` (not `status: current`). Recommending `veracityStatus: unverified` while keeping `status: published` does not create the forbidden `status: current` + `veracityStatus: unverified` combination. P39 satisfied.

---

### Issue 4: Check 2.3 and 2.4 — "Use this page" overlap flagged in both categories
**Severity:** MEDIUM
**Check affected:** 2.3, 2.4 / P46
**Finding in original:** Check 2.3 FAIL: "Line 35: 'Use this page to instrument the node...' — `Use this page` is a self-referential opener equivalent to `This page [verb]`." Check 2.4 FAIL: "See Banned Construction Scan. `Use this page` opener (line 35) is a `This page [verb]` equivalent."
**What is wrong:** P46 states that `not [X] as primary statement` belongs in check 2.4 only, not 2.2. The parallel principle applies to `This page [verb]` — it is a banned construction (check 2.4 per checks.mdx §2.4) and also a banned phrase per check 2.3 which lists "This page covers/explains/walks you through." The checks.mdx §2.3 ban list includes: "This page covers", "This page explains", "This page walks you through" — "Use this page to" is not on the verbatim §2.3 ban list, but it is a §2.4 banned construction ("This page [verb]" self-reference). The check correctly flags it in 2.3 as an equivalent, and again in 2.4. Double-counting one root cause as two FAILs inflates the count, but the checks.mdx framework lists them as distinct checks (banned phrases vs banned constructions), so counting both is defensible if the finding is P13-compliant (log once, cross-ref). The report does cross-reference ("same opening sentence") in the Root Cause section. Acceptable — no change required — but the P13 cross-reference should be clearer to prevent duplicate fix execution.
**Correction:** In Cross-Category Connections Root Cause 2, note explicitly: "Fixes 2.3 and 2.4 are the same one-line change — do not apply twice."

---

### Issue 5: Check 6.2 listed as FAIL in verdict but not in Category 6 discussion header
**Severity:** MEDIUM
**Check affected:** 6.2 / P26, P28
**Finding in original:** Category 6 verdict: "FAIL. Failing: 6.1, 6.2, 6.3, 6.5, 6.6, 6.8, 6.9." Check 6.2 result in table: "NOT-TESTED."
**What is wrong:** P28 requires that Result column match detail conclusion. The check 6.2 table entry shows result "NOT-TESTED" and detail "Docker commands... NOT-TESTED. No execution environment available." A NOT-TESTED finding is not a FAIL — it is an unverified status. Including 6.2 in the "Failing" list when the result is NOT-TESTED is a P28 violation and a P49 count inflation. The same applies to check 6.3 (result: "NOT-TESTED") which is also listed in the failing checks. NOT-TESTED items must not be counted as confirmed FAILs.
**Correction:** Remove 6.2 and 6.3 from the "Failing" list in the Category 6 verdict and from the Overall Verdict failing check count. Category 6 confirmed FAILs: 6.1, 6.5, 6.6, 6.8, 6.9 (5 checks, not 7). Flag 6.2 and 6.3 separately as "NOT-TESTED — requires execution environment."

---

### Issue 6: P49 — overall verdict count includes NOT-TESTED items as FAIL
**Severity:** MEDIUM
**Check affected:** Overall Verdict / P49
**Finding in original:** "Failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.8, 5.7, 6.1, 6.2, 6.3, 6.5, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3."
**What is wrong:** This includes 6.2 and 6.3 which are NOT-TESTED, not FAIL. Additionally, check 1.1 is the aggregate of missing fields — when 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, and 1.11 are all individual FAILs, 1.1 is a redundant aggregate. All are valid to list per P49 (individual check IDs), but the count should be stated accurately. With 6.2 and 6.3 removed: 25 confirmed FAILs.
**Correction:** Corrected failing checks (25): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.8, 5.7, 6.1, 6.5, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3. Separately note: 6.2, 6.3 — NOT-TESTED.

---

### Issue 7: P41 — industry/niche correctly flagged FAIL with concrete values
**Severity:** N/A (confirmation)
**Check affected:** 1.9, 1.10 / P41
**Status:** CORRECT. Both flagged FAIL with concrete proposed values. P41 satisfied.

---

### Issue 8: P42 — pageVariant correctly handled
**Severity:** N/A (confirmation)
**Check affected:** 1.3 / P42
**Status:** CORRECT. `pageType: guide` is canonical. N/A for 1.3. P42 satisfied.

---

### Issue 9: P50 — pageType: guide correctly passed
**Severity:** N/A (confirmation)
**Check affected:** 1.2 / P50
**Status:** CORRECT. `guide` is valid canonical value. Check 1.2 PASS. P50 satisfied.

---

### Issue 10: P51 — proposed frontmatter values formatted correctly
**Severity:** N/A (confirmation)
**Check affected:** All proposed values / P51
**Status:** CORRECT. All use "Proposed: `field: value` — confirm before applying." P51 satisfied.

---

### Issue 11: Content duplication finding at check 4.8 — FAIL result vs INFO in operator-toolbox report
**Severity:** LOW
**Check affected:** 4.8
**Finding in original:** "FAIL. Content duplication with operator-toolbox.mdx: The Docker monitoring stack section (Option A) is reproduced nearly verbatim in operator-toolbox.mdx."
**What is wrong:** The operator-toolbox check report (same batch) classifies the same duplication as INFO at its check 4.8: "Docker stack details overlap with metrics-and-alerting.mdx. This page positions itself at discovery level — acceptable." Two reports in the same batch characterise the same duplication differently — FAIL here, INFO in operator-toolbox. One of these is wrong. Given that operator-toolbox.mdx is explicitly the discovery/orientation page and metrics-and-alerting.mdx is the full setup guide, the correct resolution is that operator-toolbox's summary-level coverage is not duplication — but if the content is "nearly verbatim" as stated here, it is a real issue in this page. The checker should verify whether the content is verbatim or merely similar (a P29-type verification issue). The finding's severity may be overstated without confirming verbatim overlap.
**Correction:** The FAIL here and INFO in operator-toolbox cannot both be correct about the same content. This review flags the inconsistency. The finding should note the cross-report contradiction and require human resolution before either page is changed.

---

## Confirmed Correct Findings

- P15: `purpose: guide` read directly from frontmatter, stated correctly in Frontmatter Table.
- P25: Navigation sequence confirmed from docs.json with line references (2930–2933).
- P33/P47: Self-link at line 86 verified as genuine self-reference — page links to its own docs.json path.
- P37: `purpose: guide` correctly characterised as wrong-field error (type b), not deprecated alias.
- P39: No `status: current` + `veracityStatus: unverified` conflict.
- P41: `industry` and `niche` flagged FAIL with concrete proposed values.
- P46: `not [X]` constructions not placed under check 2.2.
- P50: `pageType: guide` passed check 1.2.
- P51: All proposed values use confirm-before-applying format.
- P54: Check 2.1 UK English only; no banned words or constructions in 2.1.
- Heading score table includes per-dimension breakdown (P2 satisfied).
- Blocking decisions are correctly escalated with options framed neutrally.
- Cross-Category Connections section groups root causes correctly.

---

## Corrected Verdict

**Corrected fail count:** 25 confirmed checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.8, 5.7, 6.1, 6.5, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3.

**NOT-TESTED (removed from FAIL count):** 6.2, 6.3 — require execution environment to verify.

**Cross-report inconsistency requiring human resolution:** Check 4.8 (content duplication) rated FAIL here vs INFO in operator-toolbox report. Both cannot be correct.

**Overall page assessment stands:** NEEDS WORK.
