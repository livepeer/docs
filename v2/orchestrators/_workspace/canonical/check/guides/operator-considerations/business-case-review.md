# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/operator-considerations/business-case.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: P39 — veracityStatus fix partially inconsistent
**Severity:** MEDIUM
**Check affected:** 1.8, Cross-Category Connections
**Finding in original:** Cross-Category Connections table: "Single fix: change `status: draft`, add `veracityStatus: unverified`." Also F-04 in the Finding Index: "Fix: change `status: draft`, add `veracityStatus: unverified`."
**What is wrong:** P39 states the valid fixes for the `status: current` + absent `veracityStatus` problem are: (a) change `status` to `draft`, OR (b) add `veracityStatus: verified` only when content is actually verified. The check 1.8 entry correctly presents both options ("change `status` to `draft` OR complete the REVIEW passes and set `veracityStatus: verified`"). However, the Cross-Category Connections section and F-04 collapse this to a single directive: "change `status: draft`, add `veracityStatus: unverified`." Adding `veracityStatus: unverified` when changing `status: draft` is redundant and potentially confusing — `status: draft` already signals unverified state. More critically, the check text in 1.8 says the correct fix is `status: draft` alone (as Option A), not `status: draft` + `veracityStatus: unverified` as a compound pair. The Cross-Category and F-04 wording introduces a slightly different fix than what check 1.8 says. This is an internal consistency issue (P45: one canonical fix per finding, identical in all sections).
**Correction:** F-04 and Cross-Category Connections should match check 1.8's Option A exactly: "Fix: change `status: draft`." If `veracityStatus: unverified` is also desired as an explicit signal, both sections must agree on this and check 1.8 must list it as part of Option A. Currently there is a three-way inconsistency: check 1.8 (two-option presentation), Cross-Category (compound fix), F-04 (compound fix matching Cross-Category). Resolve to one canonical form across all three locations.

---

### Issue 2: P47 — broken link F-24 conclusion correct but verification language imprecise
**Severity:** LOW (finding outcome correct)
**Check affected:** 8.1 (F-24)
**Finding in original:** "Link `/v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring` not in docs.json. Correct path likely `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`."
**What is wrong:** The finding correctly identifies the link as broken. The proposed correct path is accurate: docs.json line 2932 confirms `"v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting"` exists. However, the report states this as "likely" — P47 requires full path verification against docs.json before declaring a finding, and the correction should be stated definitively, not as a probability. The work was done (the path exists in docs.json at line 2932); the hedging language undermines confidence in a confirmed result.
**Correction:** "Correct path confirmed at docs.json line 2932: `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`. Fix: update href to `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`."

---

### Issue 3: P47 — broken link F-25 conclusion correct but verification language imprecise
**Severity:** LOW (finding outcome correct)
**Check affected:** 8.1 (F-25)
**Finding in original:** "Link `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators` not in docs.json. Correct path likely `/v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface`."
**What is wrong:** Same hedging issue as F-24. The correct path exists in docs.json at line 2940: `"v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface"`. The correction should be stated as confirmed, not "likely."
**Correction:** "Correct path confirmed at docs.json line 2940: `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface`. Fix: update href to `/v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface`."

---

### Issue 4: P18 — F-17 rename proposes `Operator Types` — this is not a prohibited term
**Severity:** LOW (false concern, not a real error in the check report)
**Check affected:** 3.1, 3.7 (F-17)
**Finding in original:** F-17: "Heading `The Commercial Operator Landscape` scores 17/25 (generic `Landscape` label). Fix: `Operator Types`"
**What is wrong:** This is not an error — `Types` is in the check 3.2 "OK" tier per checks.mdx §3.2. The P18 learning references a prohibited list of `Types`, `Profiles`, `Modes`, `Overview`, `Basics`, `Details`, `Information`, `Getting Started`. However, checks.mdx §3.2 explicitly lists `Types`, `Modes`, `Profiles` in the "OK" tier, not the Banned or Avoid tiers. The P18 learning overstates the prohibited list compared to what checks.mdx actually defines. The rename to `Operator Types` is therefore a valid proposed fix per the actual checks framework. No correction needed to the check report itself. **Note for audit purposes:** The P18 learning document appears to have introduced an error by listing `Types`, `Modes`, `Profiles` as prohibited when checks.mdx categorises them as "OK." This does not affect the correctness of the business-case check report.
**Correction:** No correction to the check report needed. The proposed fix `Operator Types` is valid per checks.mdx §3.2.

---

### Issue 5: P46 — `not [X]` construction correctly placed in check 2.4, not 2.2
**Severity:** PASS (confirmed correct placement)
**Check affected:** 2.4 (F-11)
**Finding in original:** F-11 logged under check 2.4: "`Neither model is superior` — `not [X]` as primary statement."
**What is wrong:** Nothing — this is correct. P46 requires `not [X] as primary statement` to live in check 2.4, not 2.2. The report follows this correctly. Confirmed correct.

---

### Issue 6: Category 1 verdict count — `industry`/`niche` fields correctly flagged with proposed values
**Severity:** PASS (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Field absent. Required (P41). Proposed: `industry: [business, technical]` — confirm before applying." Same for `niche`.
**What is wrong:** Nothing — P41 and P51 are both applied correctly. Fields flagged as FAIL with concrete proposed values in "confirm before applying" format. Confirmed correct.

---

### Issue 7: Verdict Summary count — verify 24 individual check IDs listed
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original:** "Total FAIL checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.3, 3.7, 5.4, 5.10, 6.1, 6.4, 6.6, 6.9, 8.1, 8.6, 9.1, 9.3 = 24 checks fail"
**What is wrong:** The verdict counts 24 check IDs. Cross-checking against the check tables: Category 1 fails: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7); Category 2 fails: 2.3, 2.4, 2.5, 2.10 (4, noting 2.2 is BORDERLINE not FAIL); Category 3 fails: 3.1, 3.3, 3.7 (3); Category 5 fails: 5.4, 5.10 (2; 5.3 is NOT-TESTED); Category 6 fails: 6.1, 6.4, 6.6, 6.9 (4, though 6.5 says "F-04 already logged" — the check says FAIL in the table); Category 8 fails: 8.1, 8.6 (2); Category 9 fails: 9.1, 9.3 (2). Total = 24. However, check 6.5 in the check table says **FAIL** ("Multiple REVIEW flags present") but is not listed in the verdict. Check 6.5 is a distinct check from 6.6, even though they share the same root cause. Per P49, the verdict must count individual failing check IDs. 6.5 appears to fail in the category table but is omitted from the verdict count. This gives a total of 25 failing checks, not 24. The checker noted "F-04 already logged" to justify merging, but that is a finding-level deduplication; the check-level result (FAIL for 6.5) should still appear in the check ID list.
**Correction:** Verdict should read: "25 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.3, 3.7, 5.4, 5.10, 6.1, 6.4, 6.5, 6.6, 6.9, 8.1, 8.6, 9.1, 9.3."

---

## Confirmed Correct Findings

- **Corrupt prefix absent:** Correctly verified — business-case.mdx has no corrupt prefix at lines 1–2. Source file confirmed clean.
- **P50:** `pageType: guide` correctly passed at check 1.2 as a valid 7-type canonical value.
- **P51:** All proposed frontmatter values formatted as "confirm before applying." Compliant.
- **P41:** `industry` and `niche` flagged as FAIL with concrete proposed values. Compliant.
- **P15:** `purpose` read directly from frontmatter as `evaluation`. Compliant.
- **P46:** `not [X]` construction correctly placed under check 2.4, not 2.2. Compliant.
- **P16/P53:** "Related Pages" heading correctly exempted from scoring. No "See also" equivalent present or mis-exempted.
- **P29:** Banned word scan shows citation of line numbers with quoted content.
- **P30:** Em-dash check covers description field (correctly flagged as containing em-dash equivalent `-`).
- **P36:** Only CRITICAL/HIGH/MEDIUM/INFO severity levels used. Compliant.
- **P37:** Error type characterised correctly in each frontmatter finding.
- **P38:** F-18 rename to `Operating Models` — no conflict with other headings on page confirmed by scan.
- **P43:** Finding IDs F-01 through F-28 are unique and sequential. Compliant.
- **P47 (absent links):** F-26 (`protocol-influence`) correctly confirmed absent from docs.json — no match found in grep results. Confirmed correct finding.
- **F-24 and F-25:** Broken links correctly identified. Proposed corrections match docs.json (minor hedging issue noted in Issues 2–3 above, but underlying finding is accurate).
- **P39:** Check 1.8 presents two valid fix options; neither recommends `status: current` + `veracityStatus: unverified`. Compliant at the check 1.8 level (minor cross-section consistency issue noted in Issue 1 above).
- **Category 1 verdict count:** "7 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11" — correct.
- **Category 3 verdict:** "3 checks fail: 3.1, 3.3, 3.7" — correct.
- **Category 4 verdict:** "0 checks fail" — correct, all Category 4 checks pass.
- **Category 8 verdict:** "2 checks fail: 8.1, 8.6" — correct.
- **Dead import detection (P9):** F-19 correctly identifies `ScrollableDiagram`, `CenteredContainer`, `BorderedBox` as dead imports.
- **P44:** Proposed fixes checked. F-11 fix "Both models serve different operator goals and capabilities" contains no banned words or constructions. F-12 fix is a deletion directive. F-13 note adds a REVIEW placeholder, compliant.
- **P28:** Result column matches detail text throughout the check tables.

---

## Corrected Verdict

**Corrected fail count:** 25 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.3, 3.7, 5.4, 5.10, 6.1, 6.4, 6.5, 6.6, 6.9, 8.1, 8.6, 9.1, 9.3

**Change from original:** +1 (check 6.5 omitted from verdict count despite FAIL in check table).

**Critical findings:** F-04, F-24, F-25, F-26 — all confirmed valid.
**BORDERLINE unchanged:** 2.2 (`real negotiating leverage`) — human review required.
**NOT-TESTED unchanged:** 5.3 (component approval file not read).

**Overall assessment:** The check report is mostly reliable. Core findings are accurate and properly structured. The three broken link findings are correct (confirmed against docs.json). The primary technical issues are: minor fix-text inconsistency on the veracityStatus recommendation across sections (P45), hedging language on confirmed link corrections (P47), and one omitted check ID from the verdict count (6.5). None of these affect the findings that block publication: F-04, F-24, F-25, F-26, F-20, F-27.
