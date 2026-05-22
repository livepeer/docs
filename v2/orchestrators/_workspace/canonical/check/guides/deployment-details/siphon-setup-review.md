# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/deployment-details/siphon-setup.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict Summary count — stated "23 checks fail" but listed IDs total 24 (and 2.4 BORDERLINE inflates count)
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P26/P49)
**Finding in original:** "23 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4 (BORDERLINE), 3.1, 3.2, 3.4, 3.7, 5.4, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3"
**What is wrong:** Count the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 = 8; 2.4 = 1; 3.1, 3.2, 3.4, 3.7 = 4; 5.4, 5.7 = 2; 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9 = 7; 9.1, 9.3 = 2 = total 24. Stated as "23 checks fail." Off by 1. Additionally, 2.4 is labelled BORDERLINE in the verdict — a BORDERLINE is not a FAIL per P28. If 2.4 is excluded as BORDERLINE, the failing count should be 23, not 23 (stated) vs 24 (actual ID count). The arithmetic is internally inconsistent.
**Correction:** Corrected fail count (excluding 2.4 BORDERLINE): 23 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 5.4, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

---

### Issue 2: P37 — `purpose: guide` correctly characterised as P37-b (wrong field type)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.4
**Finding in original:** "`guide` is a pageType value placed in the purpose field (P37-b: wrong field type)."
**What is wrong:** Nothing. `guide` is a valid 7-type canonical pageType. Placing it in the purpose field is a P37 type (b) error — valid value, wrong field. Check 1.2 is correctly PASS per P50. Correct.
**Correction:** Confirmed correct.

---

### Issue 3: P39 — `status: current` + absent `veracityStatus` fix correctly identified
**Severity:** N/A (confirmed correct)
**Check affected:** 1.8
**Finding in original:** "Fix: `status: draft`, `veracityStatus: unverified` (P39)"
**What is wrong:** Nothing. P39 compliant. The fix recommends `status: draft` + `veracityStatus: unverified`. Does not recommend the prohibited `status: current` + `veracityStatus: unverified` combination. Correct across both 1.8 and F-08.
**Correction:** Confirmed correct.

---

### Issue 4: P41 — `industry`/`niche` correctly flagged FAIL with concrete proposed values
**Severity:** N/A (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Proposed: `industry: ["technical"]` — confirm" and "Proposed: `niche: ["infrastructure", "web3"]` — confirm"
**What is wrong:** Nothing. Both absent fields flagged FAIL with concrete values and P51 confirmation gates.
**Correction:** Confirmed correct.

---

### Issue 5: P42 — `pageVariant` correctly N/A (no deprecated pageType requiring co-fix)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.3
**Finding in original:** "N/A (P42)"
**What is wrong:** Nothing. `pageType: guide` is a valid 7-type canonical value. No pageVariant co-fix required per P42. Correct.
**Correction:** Confirmed correct.

---

### Issue 6: P46 — `not [X]` correctly placed in check 2.4, not 2.2
**Severity:** N/A (confirmed correct)
**Check affected:** 2.4
**Finding in original:** "Line 178: 'It does not need a GPU' — `not [X]` in value statement about secure machine. BORDERLINE."
**What is wrong:** Nothing. The `not [X]` candidate is examined in the Banned Construction Scan table and check 2.4. Check 2.2 (Banned Words) is PASS. Per P46 compliant.
**Correction:** Confirmed correct.

---

### Issue 7: P48 — step title headings (StyledStep title props) correctly included in em-dash scan
**Severity:** N/A (confirmed correct)
**Check affected:** P30 scan
**Finding in original:** The check notes "All imports used. JSX well-formed. StyledSteps within Part 1 and Part 2 correctly structured." The heading scan note states "Part 1/Part 2 headings include subtitle text after ` - ` making them the longest headings in the set."
**What is wrong:** The check does not explicitly list StyledStep title props in the em-dash scan the way the dual-mode-configuration check does. However, the heading score table includes `Part 1 - Secure Machine: Install OrchestratorSiphon` and `Part 2 - GPU Machine: Install go-livepeer in Transcoder Mode` as scored headings — these are the step-level headings. The note on Part 1/Part 2 confirms they use ` - ` (space-hyphen-space) not em-dash. Per P48, step title props are within scope. The check covers them via the heading score table but does not do an explicit em-dash list for StyledStep title props. This is a minor gap but the space-hyphen is correctly classified as not an em-dash.
**Correction:** Minor gap only — em-dash scan on StyledStep title props should be explicit per P48. The conclusion (no em-dashes) is likely correct given the ` - ` separator pattern, but the explicit scan format per P48 is missing.

---

### Issue 8: Check 5.4 FAIL for non-rendered MDX comment — same misclassification as other reports
**Severity:** MEDIUM
**Check affected:** 5.4
**Finding in original:** "FAIL — TODO block at lines 32–38 in MDX comment. Not rendered but status/veracity incoherence still applies (F-12). Not rendered."
**What is wrong:** Same issue identified in new-join-a-pool and orchestrator-transcoder-setup reviews. Check 5.4 is "Avoided components absent." An MDX comment is not a rendered component. The check itself says "Not rendered." The underlying issue (status: current + TODO = incoherence) is correctly captured at 1.8 and 9.1. Classifying a non-rendered comment as check 5.4 FAIL is a misclassification that inflates the fail count.
**Correction:** Check 5.4 should be PASS (non-rendered comment). The status/veracity incoherence is correctly captured at 1.8 and 9.1. Remove 5.4 from the fail list. Corrected fail count: 22 checks fail.

---

### Issue 9: `When to Use This Setup` heading rename proposal uses `vs` — potential check 3.3 concern
**Severity:** LOW
**Check affected:** 3.1 rename proposal
**Finding in original:** "Rename to `Siphon vs Combined Setup`"
**What is wrong:** Per P18, heading rename suggestions must be validated against the check 3.2 prohibited list. `Siphon vs Combined Setup` uses `vs` — which is the literal contrast label pattern targeted by check 3.3. The check's own check 3.3 scan found PASS (no `X vs Y` headings on the page). Proposing a rename that introduces `vs` could create a new check 3.3 violation. The check notes this concern in parentheses: "check 3.3 — `vs` used here names the governing concept, not a literal contrast; BORDERLINE per earlier reasoning." This is the correct framing per P23, but the note undercuts the rename as a clean fix. A cleaner rename would avoid `vs` entirely.
**Correction:** The `Siphon vs Combined Setup` rename should be accompanied by a clear note that it introduces a potential check 3.3 BORDERLINE. Better alternative: `Siphon Deployment Conditions` or `Siphon vs go-livepeer Choice` → `Split vs Single-Node Setup` (still uses `vs`). Safest rename without `vs`: `When to Use Siphon` — wait, this is also weak. Per P18 prohibited list: none of those trigger the specific prohibited terms. Consider: `Siphon Applicability` (no vs, no prohibited terms, scores higher on precision).

---

### Issue 10: P51 — all proposed frontmatter values correctly formatted with confirmation gates
**Severity:** N/A (confirmed correct)
**Check affected:** 1.6, 1.7, 1.9, 1.10, 1.11
**Finding in original:** All proposed values use "Proposed: `X: Y` — confirm (P51)"
**What is wrong:** Nothing. All inferred values use the P51 format. Correct.
**Correction:** Confirmed correct.

---

### Issue 11: P47 — all 5 internal links verified against docs.json with line numbers
**Severity:** N/A (confirmed correct)
**Check affected:** 8.1
**Finding in original:** All 5 links checked: setup-options (line 2885), rs-install (confirmed), orchestrator-transcoder-setup (line 2888), earning-model (line 2910), reward-mechanics (line 2911) — all PASS.
**What is wrong:** Nothing. P47 compliant. All links verified against docs.json with specific line numbers.
**Correction:** Confirmed correct.

---

### Issue 12: P52 — BD-1 correctly frames both `configure` and `build` options
**Severity:** N/A (confirmed correct)
**Check affected:** BD-1
**Finding in original:** "Confirm correct `purpose` value: `configure` (mapping options to requirements) vs `build` (end-to-end implementation procedure)"
**What is wrong:** Nothing. BD-1 presents both options without defaulting to one in the fix text. F-07 says "Proposed: `purpose: configure` — confirm" which does default slightly to configure, but it is marked as requiring confirmation. Marginally P52 non-compliant but within acceptable bounds given the "confirm" gate.
**Correction:** Minor only. F-07 could frame as "Proposed: `purpose: configure` or `purpose: build` — resolve BD-1 before applying." Acceptable as-is given the confirmation gate.

---

### Issue 13: P53 — `Related Pages` exempt heading correctly excluded from scoring
**Severity:** N/A (confirmed correct)
**Check affected:** 3.1
**Finding in original:** "`Related Pages` — EXEMPT" in heading score table
**What is wrong:** Nothing. Per P53, only exact `Related Pages` is exempt. The heading score table correctly includes EXEMPT for `Related Pages` and scores all other headings normally.
**Correction:** Confirmed correct.

---

## Confirmed Correct Findings

- **P37 error type (b)** correctly applied to `purpose: guide` (valid pageType in wrong field).
- **P39 compliance** — `status: draft` + `veracityStatus: unverified` fix correct.
- **P41** — `industry` and `niche` both flagged FAIL with concrete proposed values.
- **P42** — check 1.3 N/A (no deprecated pageType).
- **P46** — `not [X]` only in check 2.4 and Banned Construction Scan table.
- **P47** — all 5 internal links verified against docs.json with line numbers (all PASS).
- **P50** — `pageType: guide` PASS on check 1.2 (valid 7-type canonical value).
- **P51 confirmation gates** on all proposed frontmatter values.
- **P53** — `Related Pages` correctly excluded from heading scoring.
- **Category 6 veracity** findings are specific and correctly identify third-party repo staleness risk, unpinned Python dependencies, uncited round duration, and Arbitrum public RPC endpoint staleness.
- **No broken internal links** — all 5 links verified clean.
- **Blocking decisions** correctly scoped to BD-1 (purpose choice) and BD-2 (SME verification).
- **Cross-category connections** clearly trace root causes.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE**

The check is substantively sound. Key systematic rules (P37, P39, P41, P42, P46, P47, P50) all applied correctly. Issues found: (1) check 5.4 FAIL for non-rendered MDX comment is a misclassification (same pattern as other reports in this batch); (2) verdict count arithmetic off by 1 (stated 23, actual 24 IDs, but with 2.4 BORDERLINE excluded, actual fail count is 23 — the arithmetic is accidentally correct but the explanation is garbled); (3) Siphon vs Combined Setup rename proposal introduces a `vs` that may trigger check 3.3; (4) StyledStep title props em-dash scan not explicitly listed per P48.

**Corrected fail count: 22 checks fail** (removing 5.4 misclassification, excluding 2.4 BORDERLINE): **1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3**
