# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/deployment-details/orchestrator-transcoder-setup.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

RELIABLE

---

## Issues Found

### Issue 1: Verdict Summary count — stated "25 checks fail" but the listed IDs total 26
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P26/P49)
**Finding in original:** "25 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.4, 3.7, 4.5, 5.4, 5.7, 5.8, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3"
**What is wrong:** Count the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 = 8; 2.4 = 1; 3.1, 3.2, 3.4, 3.7 = 4; 4.5 = 1; 5.4, 5.7, 5.8 = 3; 6.1, 6.2, 6.4, 6.6, 6.8, 6.9 = 6; 8.1 = 1; 9.1, 9.3 = 2 = total 26. The stated "25 checks fail" is off by one. Per P49.
**Correction:** Corrected fail count: 26 checks fail.

---

### Issue 2: P37 — `purpose: guide` correctly characterised as P37-b (wrong field type)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.4
**Finding in original:** "`guide` is a pageType value in the purpose field (P37-b wrong field type)."
**What is wrong:** Nothing. `guide` is a valid 7-type canonical pageType. P37 type (b) error is correct. Check 1.2 is correctly PASS per P50. Correct.
**Correction:** Confirmed correct.

---

### Issue 3: Broken links — all four verified against docs.json (P47)
**Severity:** N/A (confirmed correct — all four broken links are genuine)

**Verification of each broken link against docs.json:**

**Link 1: `/v2/orchestrators/guides/advanced-operations/run-a-pool`**
- docs.json search result: `run-a-pool` does NOT appear in docs.json.
- docs.json line 2941 contains `v2/orchestrators/guides/advanced-operations/pool-operators`.
- BROKEN. The check correctly identifies this and proposes `pool-operators` as the likely correct path. Confirmed.
- Occurrences in source: lines 59, 281 (inline prose), and line 369 (Related Pages card href). Check lists lines 59, 281, 369 — all confirmed in the source file.

**Link 2: `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators`**
- docs.json search result: `gateways-orchestrators` does NOT appear in docs.json.
- docs.json line 2940 contains `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface`.
- BROKEN. The check correctly identifies this and proposes `gateway-orchestrator-interface`. Confirmed.
- Source line 346 confirmed.

**Link 3: `/v2/orchestrators/guides/monitoring-and-tools/troubleshooting`**
- docs.json search result: `monitoring-and-tools` (without `-ing`) does NOT appear in docs.json for orchestrators.
- docs.json line 2933 contains `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting`.
- BROKEN — path uses `-tools` not `-tooling`. The check correctly identifies the `-ing` omission. Confirmed.
- Source line 353 confirmed.

**Link 4: `/v2/orchestrators/guides/advanced-operations/large-scale-operations`**
- docs.json search result: `large-scale-operations` does NOT appear in docs.json.
- docs.json line 2942 contains `v2/orchestrators/guides/advanced-operations/scale-operations`.
- BROKEN. The check correctly identifies this and proposes `scale-operations`. Confirmed.
- Source line 373 (Related Pages card) confirmed.

**All four broken links confirmed genuine. Proposed corrections confirmed against docs.json:**
- `run-a-pool` → `pool-operators` (docs.json line 2941) ✓
- `gateways-orchestrators` → `gateway-orchestrator-interface` (docs.json line 2940) ✓
- `monitoring-and-tools` → `monitoring-and-tooling` (docs.json line 2933) ✓
- `large-scale-operations` → `scale-operations` (docs.json line 2942) ✓

**Correction:** Confirmed correct on all four.

---

### Issue 4: P39 — `status: current` + absent `veracityStatus` fix correctly identified
**Severity:** N/A (confirmed correct)
**Check affected:** 1.8
**Finding in original:** "Fix: `status: draft`, `veracityStatus: unverified`"
**What is wrong:** Nothing. P39 compliant. The fix recommends `status: draft` + `veracityStatus: unverified`. Does not recommend the prohibited `status: current` + `veracityStatus: unverified` combination.
**Correction:** Confirmed correct.

---

### Issue 5: P41 — `industry`/`niche` correctly flagged FAIL with concrete proposed values
**Severity:** N/A (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Proposed: `industry: ["technical"]` — confirm" and "Proposed: `niche: ["infrastructure", "hardware"]` — confirm"
**What is wrong:** Nothing. Both absent fields flagged FAIL with concrete values and P51 confirmation gates.
**Correction:** Confirmed correct.

---

### Issue 6: P42 — `pageVariant` correctly N/A (no deprecated pageType)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.3
**Finding in original:** "N/A (P42)"
**What is wrong:** Nothing. `pageType: guide` is a valid 7-type canonical value. No pageVariant co-fix required.
**Correction:** Confirmed correct.

---

### Issue 7: P46 — `not [X]` primary statement correctly placed in check 2.4 only
**Severity:** N/A (confirmed correct)
**Check affected:** 2.4
**Finding in original:** "Line 158: 'performs no local transcoding' — `not [X]` variant — FAIL"
**What is wrong:** Nothing. The `not [X]` construction is logged in check 2.4 (Banned Constructions) and in the Banned Construction Scan table. Check 2.2 (Banned Words) is PASS. Per P46 compliant. The finding correctly identifies line 158 as a primary statement that defines behaviour through negation.
**Correction:** Confirmed correct.

---

### Issue 8: P48 — step title headings not present in this page; em-dash scan on available text
**Severity:** N/A (confirmed correct)
**Check affected:** P30 scan
**Finding in original:** "`Part 1 - Orchestrator Machine` and `Part 2 - Transcoder Machines` use space-hyphen-space (` - `), not em-dash. PASS per P30."
**What is wrong:** Nothing. The check correctly distinguishes space-hyphen-space from em-dash. Em-dash prohibition does not apply to hyphen connectors. The check notes this correctly. No StyledStep title props present, so P48 does not apply to this page.
**Correction:** Confirmed correct.

---

### Issue 9: Check 5.4 FAIL for TODO in MDX comment — questionable but defensible
**Severity:** LOW
**Check affected:** 5.4
**Finding in original:** "FAIL — TODO block at lines 32–44 in MDX comment. Contains REVIEW flags. `status: current` combined with unresolved TODO block is logged in F-12. Not rendered."
**What is wrong:** Check 5.4 is "Avoided components absent." An MDX comment is not a rendered component. Calling check 5.4 FAIL for a non-rendered comment is the same misclassification identified in the new-join-a-pool report. The substantive issue (status: current + TODO) is already correctly captured at checks 1.8 and 9.1. However, the check does note "Not rendered" and the status/veracity cluster is the stated root cause — so the finding is not causing phantom action beyond the root-cause cluster.
**Correction:** Technically check 5.4 should be PASS (non-rendered comment). The underlying incoherence issue is correctly captured at 1.8 and 9.1. Remove 5.4 from the fail list; corrected fail count becomes 25.

---

### Issue 10: P51 — all proposed frontmatter values correctly formatted with confirmation gates
**Severity:** N/A (confirmed correct)
**Check affected:** 1.6, 1.7, 1.9, 1.10, 1.11
**Finding in original:** All proposed values formatted as "Proposed: `X: Y` — confirm (P51)"
**What is wrong:** Nothing. All inferred values use the P51 format. Correct.
**Correction:** Confirmed correct.

---

### Issue 11: P52 — blocking decision BD-3 has a single stated option in F-12 — minor
**Severity:** LOW
**Check affected:** BD-3 / P52
**Finding in original:** "Confirm `purpose: configure` is correct (vs `build` — the page does cover end-to-end implementation)"
**What is wrong:** Per P52, when a blocking decision has two or more equal options, co-fix notes should frame both options neutrally. F-12 states "`purpose: configure`, `status: draft`, `veracityStatus: unverified`" as the fix, defaulting to `configure` before BD-3 is resolved. BD-3 explicitly raises `build` as the alternative. The pre-filled fix for purpose in F-12 slightly prejudges BD-3 (P52 violation), though it is minor since BD-3 is listed as unresolved.
**Correction:** F-12 should frame the purpose fix as: "Proposed: `purpose: configure` or `purpose: build` — resolve BD-3 before applying. All other fixes (`status: draft`, `veracityStatus: unverified`) apply regardless of BD-3 outcome."

---

## Confirmed Correct Findings

- **P37 error type (b)** correctly applied to `purpose: guide`.
- **P39 compliance** — `status: draft` + `veracityStatus: unverified` fix is correct.
- **P41** — `industry` and `niche` both flagged FAIL with concrete proposed values.
- **P42** — check 1.3 N/A (no deprecated pageType).
- **P46** — `not [X]` primary statement at line 158 correctly placed in check 2.4 only.
- **P47** — all four broken links fully verified against docs.json with line numbers and correct proposed replacements:
  - `run-a-pool` → `pool-operators` (line 2941)
  - `gateways-orchestrators` → `gateway-orchestrator-interface` (line 2940)
  - `monitoring-and-tools` → `monitoring-and-tooling` (line 2933)
  - `large-scale-operations` → `scale-operations` (line 2942)
- **P50** — `pageType: guide` PASS on check 1.2.
- **P51 confirmation gates** on all proposed frontmatter values.
- **P53** — `Related Pages` correctly excluded from heading score table.
- **Category 6 veracity** findings correctly flag REVIEW-flagged procedural claims and name the SME (Rick) without inventing exempt status.
- **Cross-category connections** clearly map root causes including the four broken links as a cluster.

---

## Corrected Verdict

**Rating: RELIABLE**

The check is substantively correct. The four broken links are all genuine and fully verified against docs.json with accurate proposed replacement paths. The P37, P39, P41, P42, P46, P47, P50 rules all applied correctly. Two minor issues: (1) verdict count arithmetic off by 1 (stated 25, should be 26, then 25 after removing 5.4 false positive); (2) check 5.4 FAIL for non-rendered MDX comment is a misclassification (same pattern as new-join-a-pool); (3) BD-3 pre-judged slightly in F-12 fix text (P52 minor).

**Corrected fail count: 25 checks fail** (removing 5.4 misclassification): **1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.4, 3.7, 4.5, 5.7, 5.8, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3**
