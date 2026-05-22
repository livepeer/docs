# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/deployment-details/dual-mode-configuration.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `purpose: setup` mischaracterised as "deprecated alias (type a)" — partially correct but incomplete
**Severity:** LOW
**Check affected:** 1.4
**Finding in original:** "Deprecated alias — canonical: `configure`"
**What is wrong:** The check correctly identifies `setup` as deprecated and proposes `configure`, and even cites "type (a): deprecated alias in old schema" in parentheses. This is correct per Frameworks.mdx §1.2 (`setup` → `configure` is in the deprecated aliases table). No error here technically — but the P37 classification "(type a)" is embedded in a parenthetical and not stated as the lead characterisation. The report correctly flags the error and proposes the fix. No correction needed for this finding; it is sound.
**Correction:** Confirmed correct. No action required.

---

### Issue 2: Verdict Summary count includes 9.3 but the check table only lists 9 check IDs as failing — count mismatch
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P26/P49)
**Finding in original:** "21 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.4, 3.7, 5.1, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3"
**What is wrong:** The list contains 22 IDs (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 = 8; 3.1, 3.2, 3.4, 3.7 = 4; 5.1, 5.7 = 2; 6.1, 6.2, 6.4, 6.6, 6.8, 6.9 = 6; 9.1, 9.3 = 2 — total 22), but the stated count is "21 checks fail." The stated count is off by one. Per P49, the verdict summary must count individual failing check IDs.
**Correction:** Corrected fail count: 22 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.4, 3.7, 5.1, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

---

### Issue 3: P41 satisfied — `industry`/`niche` correctly flagged as FAIL with concrete proposed values
**Severity:** N/A (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Proposed: `industry: ["technical", "AI"]` — confirm before applying" and "Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying"
**What is wrong:** Nothing. Both fields are flagged FAIL per P41, concrete values proposed, and confirmation gate noted per P51. This is correct.
**Correction:** Confirmed correct.

---

### Issue 4: P37 — `purpose: setup` error type is correctly identified (type a)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.4
**What is wrong:** Nothing. `setup` is in the Frameworks.mdx §1.2 deprecated aliases table (setup → configure). Error type (a) is correct.
**Correction:** Confirmed correct.

---

### Issue 5: P39 compliant — fix does not recommend `status: current` + `veracityStatus: unverified`
**Severity:** N/A (confirmed correct)
**Check affected:** 1.8
**Finding in original:** "Per P39: `status: draft` + `veracityStatus: unverified` is the correct combination here"
**What is wrong:** Nothing. The fix recommendation explicitly states `status: draft` + `veracityStatus: unverified`, which is the valid combination per P39. The check correctly avoids the prohibited `status: current` + `veracityStatus: unverified` combination.
**Correction:** Confirmed correct.

---

### Issue 6: P42 — `pageVariant` correctly treated as co-fix, not independent finding
**Severity:** N/A (confirmed correct)
**Check affected:** 1.3
**Finding in original:** "Co-fix of 1.2; not an independent finding (P42)"
**What is wrong:** Nothing. Check 1.3 is listed as N/A with the P42 co-fix rationale. No independent FAIL logged. Correct.
**Correction:** Confirmed correct.

---

### Issue 7: P50 — `pageType: how_to` correctly identified as deprecated (not a valid 7-type value)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.2
**Finding in original:** "`how_to` is deprecated 12-type. Must migrate to `pageType: instruction`"
**What is wrong:** Nothing. `how_to` is in the Frameworks.mdx §1.1 deprecated aliases table (how_to → instruction). Check 1.2 FAIL is correct. Per P50, only valid 7-type values get PASS on check 1.2. `how_to` is not valid, so FAIL is correct.
**Correction:** Confirmed correct.

---

### Issue 8: P46 — `not [X]` correctly placed in check 2.4, not check 2.2
**Severity:** N/A (confirmed correct)
**Check affected:** 2.4
**Finding in original:** "Line ~59 'requires no changes to your on-chain registration' — `not [X]` construction — PASS"
**What is wrong:** Nothing. The `not [X]` candidate is examined in check 2.4 (Banned Constructions) and the Banned Construction Scan table. Check 2.2 (Banned Words) is PASS. Per P46, `not [X]` belongs in check 2.4 only. Correctly placed.
**Correction:** Confirmed correct.

---

### Issue 9: P48 — step title headings included in em-dash scan
**Severity:** N/A (confirmed correct)
**Check affected:** 2.4 / P30 scan
**Finding in original:** "StyledStep title props: 'Download model weights', 'Create aiModels.json', 'Start go-livepeer', 'Activate on-chain', 'Add AI flags to your start command' — no em-dashes."
**What is wrong:** Nothing. Step title props explicitly listed and scanned. Per P48, step title headings are within P30 scope. Correctly applied.
**Correction:** Confirmed correct.

---

### Issue 10: P51 — proposed frontmatter values correctly formatted with confirmation gate
**Severity:** N/A (confirmed correct)
**Check affected:** 1.6, 1.7, 1.9, 1.10
**Finding in original:** All proposed values formatted as "Proposed: `X: Y` — confirm before applying"
**What is wrong:** Nothing. All inferred values use the P51 format. Correct.
**Correction:** Confirmed correct.

---

### Issue 11: P53 — only `Related Pages` exempt; `Verify` and `Earnings` correctly scored
**Severity:** N/A (confirmed correct)
**Check affected:** 3.1
**Finding in original:** "`Related Pages` heading is excluded from all scoring and checks per P16."
**What is wrong:** Nothing. The heading score table omits `Related Pages` entirely. `Verify` and `Earnings` are scored normally. Per P53, exemption applies only to the exact string "Related Pages." Correctly applied.
**Correction:** Confirmed correct.

---

## Confirmed Correct Findings

- **1.1–1.10 frontmatter failures** all correctly identified with concrete proposed values and confirmation gates (P51).
- **P37 error type (a)** correctly applied to `purpose: setup` (deprecated alias).
- **P39 compliance** confirmed — `status: draft` + `veracityStatus: unverified` fix is correct combination.
- **P42 co-fix** correctly applied to check 1.3 (`pageVariant` as N/A co-fix, not independent FAIL).
- **P46 compliance** — `not [X]` correctly in check 2.4, not 2.2.
- **P48 step titles** correctly included in em-dash scan.
- **P50** — `how_to` deprecated 12-type correctly failed on check 1.2.
- **P51 confirmation gates** on all proposed frontmatter values.
- **P53** — exact `Related Pages` string exempt, other headings scored normally.
- **Category 6 veracity findings** are specific, named, and include RTX 2060 factual error correctly identified as factual error (not hedged per P53 language guidance).
- **Broken links absent** — all 5 internal links verified against docs.json with line numbers (P47 compliant).
- **Cross-category connections** clearly map root causes (P4 compliant).
- **Blocking decisions** correctly identify BD-2 as SME-gated.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE**

The check is sound. One arithmetic error in the verdict summary count (stated 21, actual list contains 22 IDs). All major systematic P1–P54 rules are correctly applied. No false positives found. No phantom findings. No banned constructions introduced in proposed fixes.

**Corrected fail count: 22 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.4, 3.7, 5.1, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3**
