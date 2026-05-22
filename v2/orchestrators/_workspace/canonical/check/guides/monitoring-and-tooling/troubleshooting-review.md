# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/monitoring-and-tooling/troubleshooting.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: P37 — `pageType: guide` correctly handled; `troubleshooting` migration path correctly scoped
**Severity:** N/A (confirmation)
**Check affected:** 1.2, 1.3 / P37, P42
**Finding in original:** "| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value. Note: `troubleshooting` is a deprecated pageType — if migrating, this would become `pageType: instruction` + `pageVariant: troubleshooting`. Current `pageType: guide` is valid per checks.mdx §1.2 (P50 — guide is canonical). No migration required unless Alison decides to change it."
**What is wrong (actually correct):** The source file has `pageType: guide` (confirmed at line 27). `guide` is a valid canonical 7-type value. Check 1.2 PASS is correct. The report also notes that IF the deprecated value `pageType: troubleshooting` were present, migration would require `pageType: instruction` + `pageVariant: troubleshooting`. This correctly identifies the migration path per Frameworks.mdx. Since the actual value is already `guide` (canonical), no migration is needed and check 1.3 is N/A. P42 correctly applied: pageVariant is a co-fix dependency, not an independent finding, and is not flagged here. This is CORRECT per the audit brief's special instruction on troubleshooting.mdx pageType.
**Status:** CONFIRMED CORRECT.

---

### Issue 2: Frontmatter Table — `title: Troubleshooting` rated FAIL but explanation confuses title and pageType
**Severity:** MEDIUM
**Check affected:** Frontmatter Table `title` row / P28
**Finding in original:** "| `title` | Yes | `Troubleshooting` | FAIL | `Troubleshooting` is a deprecated pageType value... As a page title it is also a generic structural label..."
**What is wrong:** The `title` field does not use the pageType schema. A FAIL on `title` for "deprecated pageType value" is a category error — `title` is freeform text, not a taxonomy field. The report acknowledges this mid-sentence ("the field here is `title` which does not use the pageType schema. The heading/title issue is a Cat 3 concern. `pageType: guide` is set correctly. Flag as INFO for Cat 3") — but then sets the Pass/Fail column to FAIL. Per P28, the Result column must match the detail text conclusion. The detail concludes this is an INFO item for Cat 3, not a FAIL on the title row. The `title` row Pass/Fail should be PASS (or INFO) — the title is present and the field is functional. The weak-label concern is a Cat 3 check 3.6 issue, correctly addressed there.
**Correction:** `title` row in Frontmatter Table should be PASS (or INFO). Remove FAIL from this row. The check 3.6 entry already handles the generic-label concern with an INFO flag. No inflation of check 1.1 failing items from this row.

---

### Issue 3: Check 3.6 — title rated FAIL but flagged as INFO in same entry
**Severity:** MEDIUM
**Check affected:** 3.6 / P28, P36
**Finding in original:** "| 3.6 | Title well-formed | FAIL | `Troubleshooting` — single generic word with no domain specificity. Per checks.mdx §3.6, title should be concept-derived... However, `Troubleshooting` is consistent with the navigation label and reader expectation for this content type. FLAG AS INFO — not blocking, but noted."
**What is wrong:** P28 requires the Result column to match the detail conclusion. The detail says "FLAG AS INFO — not blocking." But the Result column says FAIL. This is a P28 violation. Additionally, P36 specifies four valid severity levels: CRITICAL, HIGH, MEDIUM, INFO. An INFO-level finding must not appear as FAIL in the Result column. The Category 3 verdict FAIL includes 3.6 in its list: "Failing: 3.1 (sub-threshold headings), 3.2 (question-form H3s, weak H2), 3.6 (INFO), 3.7." Listing a self-described INFO finding as a FAIL inflates the count.
**Correction:** Check 3.6 Result should be INFO. Remove 3.6 from the failing check count in Category 3 and Overall Verdict. Category 3 confirmed FAILs: 3.1, 3.2, 3.7 (3 checks, not 4).

---

### Issue 4: Check 2.3 — BORDERLINE should not be a FAIL; P46 consideration
**Severity:** MEDIUM
**Check affected:** 2.3, Category 2 verdict / P46, P28
**Finding in original:** "| 2.3 | Zero banned phrases | FAIL | Line 39: '...Use the index below to jump straight...' — 'Use the index below' is not `This page covers` but is a meta-document instruction. Not on the banned list verbatim, but BORDERLINE self-referential framing. Flag as BORDERLINE."
**What is wrong:** The check 2.3 Result is FAIL, but the detail says BORDERLINE. Per P28, Result must match detail conclusion. A BORDERLINE finding should not result in FAIL — it should be BORDERLINE or INFO pending human review. Additionally, the checks.mdx §2.3 banned phrase list does not include "Use the index below." The report itself acknowledges it is "not on the banned list verbatim." Flagging a non-listed phrase as a check 2.3 FAIL when the finding is explicitly BORDERLINE violates both P28 and P23 (no exemptions invented — but also no violations invented for non-listed patterns without framework support). "Use the index below" in a troubleshooting symptom navigator is a structural orientation tool, not the `This page covers` self-reference pattern.
**Correction:** Check 2.3 Result should be PASS (no verbatim banned phrase found). The BORDERLINE concern about "Use the index below" belongs in check 2.4 BORDERLINE scan or as an INFO note. Category 2 confirmed FAILs: 2.4 only (em-dash at line 173 is a real FAIL; BORDERLINE `not [X]` constructions remain BORDERLINE pending human review).

---

### Issue 5: `not [X]` constructions — classified in check 2.4, not 2.2 — P46 confirmed
**Severity:** N/A (confirmation)
**Check affected:** 2.2, 2.4 / P46
**Finding in original:** Check 2.2 PASS. Check 2.4 FAIL (em-dash at line 173 + BORDERLINE `not [X]`).
**Status:** CORRECT. `not [X]` findings are in check 2.4 and the Banned Construction Scan, not check 2.2. P46 satisfied. Check 2.2 correctly PASS.

---

### Issue 6: `not [X]` in check 2.4 — BORDERLINE classification appropriate
**Severity:** N/A (confirmation)
**Check affected:** 2.4 / P23
**Finding in original:** Banned Construction Scan at lines 204–206: "They are not errors and do not indicate a problem with your node." flagged BORDERLINE. "not with your orchestrator" flagged BORDERLINE.
**What is wrong (actually correct):** The audit brief asks: "verify these are in 2.4 not 2.2, and that the 'BORDERLINE' classification is appropriate vs a clear violation." Both findings are in 2.4 and the Banned Construction Scan (not 2.2 — P46 satisfied). The BORDERLINE classification: Line 89 ("They are not errors and do not indicate a problem") — the entire purpose of this accordion section is to establish that "Transcode loop timed out" messages are NOT errors. Negation is the core communicative act, not an avoidable construction. BORDERLINE is correct here — the framework says "state positive" but in this context the positive framing IS less clear ("These messages are normal cleanup events" is marginally clearer). A hard FAIL would overreach. BORDERLINE is appropriate. Line 95 ("not with your orchestrator") — attribution clarification at end of diagnostic. BORDERLINE is correct; the positive "The fault sits with the gateway or broadcaster input" is sufficient without the "not with your orchestrator" tail, but it is not a primary statement.
**Status:** CONFIRMED CORRECT. BORDERLINE classification for both `not [X]` instances is appropriate.

---

### Issue 7: Em-dash at line 173 — confirmed FAIL in check 2.4
**Severity:** N/A (confirmation)
**Check affected:** 2.4 / P30
**Finding in original:** Banned Construction Scan line 213: "Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." Em-dash `—` in body prose — FAIL.
**Status:** CONFIRMED CORRECT. Source file at line 173 (read at line 173 in this review): "Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." Em-dash confirmed present. P30 FAIL is correct. Fix (semicolon substitution) is correct and introduces no new violations.

---

### Issue 8: P41 — industry/niche correctly flagged FAIL with concrete values
**Severity:** N/A (confirmation)
**Check affected:** 1.9, 1.10 / P41
**Status:** CORRECT. Both fields flagged FAIL with concrete proposed values. P41 satisfied.

---

### Issue 9: P39 — status fix is internally consistent
**Severity:** N/A (confirmation)
**Check affected:** status INFO row / P39
**Status:** CORRECT. The page has `status: published`. The recommendation to add `veracityStatus: unverified` does not create a `status: current` + `veracityStatus: unverified` conflict. P39 satisfied.

---

### Issue 10: P42 — pageVariant correctly N/A
**Severity:** N/A (confirmation)
**Check affected:** 1.3 / P42
**Finding in original:** "Not present. `guide` has no migration requirement. If `pageType` were `troubleshooting` (deprecated), migration would add `pageVariant: troubleshooting` — but current value is already canonical."
**Status:** CORRECT. The actual `pageType` is `guide` (canonical). No migration needed. P42 satisfied.

---

### Issue 11: P50 — `pageType: guide` correctly passed on check 1.2
**Severity:** N/A (confirmation)
**Check affected:** 1.2 / P50
**Status:** CORRECT. P50 satisfied.

---

### Issue 12: P51 — proposed frontmatter values formatted correctly
**Severity:** N/A (confirmation)
**Check affected:** All proposed values / P51
**Status:** CORRECT. All use "Proposed: `field: value` — confirm before applying." P51 satisfied.

---

### Issue 13: P26/P49 — overall verdict count includes check 3.6 (INFO) and 2.3 (BORDERLINE) as FAILs
**Severity:** MEDIUM
**Check affected:** Overall Verdict / P26, P49
**Finding in original:** "Failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3 (BORDERLINE), 2.4 (em-dash + BORDERLINE), 3.1, 3.2, 3.6 (INFO), 3.7, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3."
**What is wrong:** This list includes:
- 2.3 (BORDERLINE) — not a confirmed FAIL per Issues 4 above
- 3.6 (INFO) — not a confirmed FAIL per Issue 3 above
- 6.2 (NOT-TESTED) — a NOT-TESTED result is not a FAIL per the same analysis applied to metrics-and-alerting

Removing these three: confirmed failing checks are 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3 (21 checks).
**Correction:** Overall verdict should list 21 confirmed FAILs. Separately note: 2.3 BORDERLINE (human review), 3.6 INFO, 6.2 NOT-TESTED.

---

### Issue 14: P54 — check 2.1 scoped correctly
**Severity:** N/A (confirmation)
**Check affected:** 2.1 / P54
**Finding in original:** "| 2.1 | UK English throughout | PASS | No US spellings found (P54)."
**Status:** CORRECT. Only UK/US spelling patterns assessed. P54 satisfied.

---

## Confirmed Correct Findings

- P15: `purpose: guide` read directly from frontmatter at line 29 of source.
- P23: BORDERLINE classification used for ambiguous `not [X]` constructions; no invented exemptions.
- P25: Navigation sequence from docs.json lines 2930–2933, explicitly cited.
- P33/P47: All 6 sampled internal links verified against docs.json full paths with line numbers.
- P37: `purpose: guide` correctly characterised as wrong-field error (type b), not deprecated alias.
- P39: No `status: current` + `veracityStatus: unverified` conflict.
- P41: `industry` and `niche` flagged FAIL with concrete proposed values.
- P42: Check 1.3 N/A — `pageType: guide` is canonical, no deprecated migration.
- P46: `not [X]` constructions in check 2.4 only, not 2.2.
- P48: No step title headings present on this page (AccordionGroup `title` props are not step titles).
- P50: `pageType: guide` passed check 1.2.
- P51: All proposed values use confirm-before-applying format.
- P52: Blocking Decision 3 (BD-3) frames both options neutrally: "[A] Accept as diagnostic negation / [B] Reframe to positive statements." P52 satisfied.
- P53: No `See also` heading; `Related Pages` exemption not at issue.
- P54: Check 2.1 UK English only.
- Heading score table includes full per-dimension breakdown (P2 satisfied).
- Em-dash at line 173 in body prose confirmed against source file — genuine FAIL.
- Troubleshooting pageType migration path correctly described (instruction + pageVariant: troubleshooting) with the accurate note that current value `guide` requires no migration.
- Banned Construction Scan covers AccordionGroup `title` props (P20 satisfied — "Cannot allocate memory", "OrchestratorCapped" etc. all scanned).

---

## Corrected Verdict

**Corrected fail count:** 21 confirmed checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3.

**Removed from FAIL count:**
- 2.3: BORDERLINE — no verbatim banned phrase found; "Use the index below" is not on the §2.3 ban list
- 3.6: INFO — report's own detail says not blocking; Result column should match
- 6.2: NOT-TESTED — not confirmed FAIL

**Overall page assessment stands:** NEEDS WORK. Content structure is strong; all major issues are frontmatter, governance, and heading names.
