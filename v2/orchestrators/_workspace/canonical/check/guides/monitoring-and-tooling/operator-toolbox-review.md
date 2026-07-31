# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/monitoring-and-tooling/operator-toolbox.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

RELIABLE

---

## Issues Found

### Issue 1: P37 — `purpose: reference` is correct; but the check 1.4 PASS rationale needs scrutiny
**Severity:** LOW
**Check affected:** 1.4 / P37, P15
**Finding in original:** "| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` read directly from frontmatter — valid."
**What is wrong:** CORRECT finding. `reference` IS in the canonical 15-value purpose set (checks.mdx §1.4 list: "orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update"). The check 1.4 result is PASS, which is correct. The report's note "Read directly from frontmatter" satisfies P15. No issue — confirming this is handled correctly per the audit brief's special instruction.
**Status:** CONFIRMED CORRECT. `purpose: reference` is a valid 15-value purpose. Check 1.4 PASS is correct.

---

### Issue 2: P42 — pageVariant absence correctly handled as N/A
**Severity:** N/A (confirmation)
**Check affected:** 1.3 / P42
**Finding in original:** "`pageVariant` absent. `reference` is not a deprecated type requiring migration. No co-fix needed (P42)."
**Status:** CORRECT. `reference` is a valid 7-type canonical pageType. No deprecated migration is in play. Check 1.3 N/A is correct. P42 satisfied.

---

### Issue 3: P50 — pageType: reference correctly passed on check 1.2
**Severity:** N/A (confirmation)
**Check affected:** 1.2 / P50
**Finding in original:** "`reference` is valid. No deprecated value."
**Status:** CORRECT. P50 satisfied.

---

### Issue 4: Em-dash in description — check 1.11 FAIL, but Category 2 verdict is PASS
**Severity:** MEDIUM
**Check affected:** 1.11, Category 2 verdict / P30, P28
**Finding in original:** Check 1.11 FAIL: "Contains em-dash (`—`) in visible text (P30)." Category 2 verdict: "PASS — Checks 2.1–2.11 all pass. Em-dash violations captured in F-02 (P30 cross-category)."
**What is wrong:** P30 states the em-dash prohibition applies to ALL visible text including the frontmatter `description` field. The em-dash in the description is correctly caught in check 1.11 (FAIL). The Category 2 verdict is PASS, with a note that em-dashes are "captured in F-02 (P30 cross-category)." The Banned Construction Scan table at line 118 lists the description em-dash as a P30 violation. This is the correct approach per P13 (log once, cross-ref), and P30 violations in the description field that are already captured in 1.11 should not also count as a separate check 2.4 FAIL — but the Category 2 PASS with a cross-reference note is sound. No double-counting occurs. The handling is correct.
**Status:** CORRECT per P13 and P30. No issue with the Category 2 PASS verdict given the cross-reference note.

---

### Issue 5: P53 — `See also` and `Related Pages` handling
**Severity:** N/A (confirmation)
**Check affected:** 3.2 / P53
**Finding in original:** "No `See Also` or `See also`." Check 3.2 FAIL: "`Tool selection guide` uses 'guide' as a descriptor — weak standalone."
**Status:** CORRECT. `See also` is not present. P53 requires only the exact text `Related Pages` is exempt. Any other heading (including `See also`, `Related`) is subject to normal scoring. No exemption issue here.

---

### Issue 6: P46 — check 2.4 PASS — `not [X]` not flagged under 2.2
**Severity:** N/A (confirmation)
**Check affected:** 2.2, 2.4 / P46
**Finding in original:** Check 2.2 PASS. Check 2.4 PASS. "`not [X]` as primary statement scan: Not found."
**Status:** CORRECT. No `not [X]` constructions. P46 satisfied — check 2.2 is not involved.

---

### Issue 7: P39 — status fix coherence
**Severity:** N/A (confirmation)
**Check affected:** F-05 / P39
**Finding in original:** "F-05 — HIGH — Review `status` field (P39 logic). `status: published` is inconsistent with `veracityStatus: unverified` and open FACT CHECK comments. Consider changing to `status: draft` until veracity pass completes."
**Status:** CORRECT. This does not recommend `status: current` + `veracityStatus: unverified`. It recommends either adding `veracityStatus: unverified` to keep `status: published`, or changing to `status: draft`. Both are valid options. P39 satisfied.

---

### Issue 8: Check 6.5 — REVIEW flags assessed as PASS; `{/* FACT CHECK */}` treated as equivalent to `{/* REVIEW */}`
**Severity:** MEDIUM
**Check affected:** 6.5 / checks.mdx §6.5
**Finding in original:** "6.5 | REVIEW flags for unverified claims | PASS | `{/* FACT CHECK */}` comments used throughout — functionally equivalent to `{/* REVIEW */}`. Claims are flagged."
**What is wrong:** The checks.mdx §6.5 criterion requires the specific `{/* REVIEW: */}` format. The other check reports in this batch (explorer-operations, metrics-and-alerting, troubleshooting) all correctly FAIL their 6.5 entries because `{/* FACT CHECK */}` uses "internal notation rather than `{/* REVIEW: */}` format." The operator-toolbox report passes 6.5 on the basis that `{/* FACT CHECK */}` is "functionally equivalent." This is inconsistent with the other three reports in the same batch and with checks.mdx §6.5. If the check framework requires the REVIEW format, `{/* FACT CHECK */}` is the wrong format regardless of functional equivalence — the error is the same as on the other three pages. Check 6.5 should be FAIL here, consistent with the rest of the batch.
**Correction:** Check 6.5 result should be FAIL: "`{/* FACT CHECK */}` uses internal notation. Required format is `{/* REVIEW: [claim] — verify against [source] */}` per checks.mdx §6.5. Convert 5 FACT CHECK comments to REVIEW format." The Category 6 verdict failing count rises from 4 to 5: 6.1, 6.4, 6.5, 6.6, 6.8. The overall verdict failing count rises from 18 to 19.

---

### Issue 9: P26/P49 — verdict count appears to match check table
**Severity:** N/A (confirmation)
**Check affected:** Verdict Summary / P26, P49
**Finding in original:** "18 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3"
**Status:** The listed IDs are 18 items (counted: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3 = 18). The count matches the list. P49 partially satisfied. However, with the Issue 8 correction above, the count should be 19 (add 6.5).

---

### Issue 10: P41 — industry/niche correctly flagged FAIL with concrete values
**Severity:** N/A (confirmation)
**Check affected:** 1.9, 1.10 / P41
**Status:** CORRECT. Both flagged FAIL with concrete proposed values. P41 satisfied.

---

### Issue 11: P51 — proposed frontmatter values formatted correctly
**Severity:** N/A (confirmation)
**Check affected:** All proposed values / P51
**Status:** CORRECT. All use "Proposed: `field: value` — confirm before applying." P51 satisfied.

---

### Issue 12: P54 — check 2.1 scoped to UK English only
**Severity:** N/A (confirmation)
**Check affected:** 2.1 / P54
**Finding in original:** Check 2.1 PASS: "'behaviour' (line 246) correctly UK. No US spellings found."
**Status:** CORRECT. Only UK/US spelling patterns assessed in 2.1. P54 satisfied.

---

### Issue 13: P35 — findings against current state, not proposed state
**Severity:** N/A (confirmation)
**Check affected:** 4.7 / P35
**Finding in original:** "| 4.7 | Information type per section correct | PASS | `purpose: reference` permits primary: `factual`, `technical`; secondary: `structural`. Sections are factual/structural tool descriptions..."
**Status:** CORRECT. Check 4.7 evaluates the current `purpose: reference` value (which is the correct value in this case — not a proposed replacement). No P35 violation.

---

## Confirmed Correct Findings

- P15: `purpose: reference` read directly from frontmatter.
- P22: Component approval file (`docs-guide/policies/component-layout-decisions.mdx`) was actually read before check 5.3 FAIL — the report states "read" explicitly. P22 satisfied. This is the only report in the batch that reads the component file before flagging.
- P25: Navigation sequence from docs.json with line number stated (line 2930).
- P33/P47: Internal links verified against full docs.json paths with line numbers.
- P37: `purpose: reference` is a valid 15-value purpose. Check 1.4 correctly PASS.
- P39: `status` fix does not introduce `status: current` + `veracityStatus: unverified` conflict.
- P42: Check 1.3 N/A — no deprecated migration in play.
- P43: Finding IDs are sequential and unique (F-01 through F-08, no duplicates).
- P44: Proposed fixes checked — F-02 proposed description fix "Tools for monitoring and operating your Livepeer orchestrator: Explorer, Prometheus metrics, Docker monitoring stack, Dune dashboards, and capability testing." contains no em-dashes or banned constructions.
- P46: `not [X]` not placed under check 2.2.
- P50: `pageType: reference` passed check 1.2.
- P51: All proposed values use confirm-before-applying format.
- P52: No blocking decisions with two equal options — "None. All fixes are actionable without human structural decision." Correct.
- P53: `See also` correctly not exempt. Only `Related Pages` exempt.
- P54: Check 2.1 scoped to UK English only.
- Heading score table includes full per-dimension breakdown (P2 satisfied).
- Dead import check performed and all imports confirmed in use (P9 satisfied — unique to this report in the batch).
- Veracity claims inventory is structured and specific.

---

## Corrected Verdict

**Corrected fail count:** 19 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3.

**Issue 8 correction:** Add check 6.5 to FAIL list — `{/* FACT CHECK */}` is not `{/* REVIEW: */}` format per checks.mdx §6.5, consistent with all three other reports in the batch.

**This is the strongest report in the batch.** It is the only one that reads the component approval file before flagging (P22), performs a dead import check (P9), and correctly passes check 1.4 for a valid `purpose: reference` value. The single substantive error is the 6.5 PASS/FAIL inconsistency.
