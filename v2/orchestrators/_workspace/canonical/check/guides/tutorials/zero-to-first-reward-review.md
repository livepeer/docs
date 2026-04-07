# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/zero-to-first-reward.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `veracityStatus` field absent — check 1.8 treatment is correct, but the fix violates P39
**Severity:** HIGH
**Check affected:** Check 1.8, F-01, Frontmatter fix (P39)
**Finding in original:** Check 1.8 FAIL: "Field absent. Page has 4 `FACT CHECK` inline comments. `status: current` without `veracityStatus` is incoherent per checks.mdx §1.8. Correct value: `veracityStatus: unverified`." F-01 says "Add `veracityStatus: unverified` to frontmatter block" as the first item in the proposed frontmatter YAML block.
**What is wrong:** F-01 proposes adding `veracityStatus: unverified` to the frontmatter but does NOT simultaneously change `status: current` to `status: draft`. Per P39, the only valid fixes are: change `status` to `draft`, OR set `veracityStatus: verified` when content is actually verified. The F-01 YAML block includes `veracityStatus: unverified` without `status: draft`, and F-02 separately says "change `status` from `current` to `draft`." Applied in order, F-01 before F-02 creates the incoherent `status: current` + `veracityStatus: unverified` state P39 was introduced to prevent.
**Correction:** Merge F-01 and F-02 atomically: add `veracityStatus: unverified` AND change `status: current` to `status: draft` as a single operation. The YAML block in F-01 should include `status: draft`. Do not list them as separate fix items.

---

### Issue 2: Check 4.10 vs check 7.6 — same finding logged twice
**Severity:** MEDIUM
**Check affected:** Check 4.10, Check 7.6 (P13)
**Finding in original:** Check 4.10 FAIL: "No cross-tab links. The LPT acquisition step (Step 3) is directly relevant to the Delegators tab." Check 7.6 FAIL: "No cross-tab links. Step 3 (Fund the wallet / LPT acquisition) intersects with Delegators tab."
**What is wrong:** P13 states: deduplicate cross-category findings — log once, cross-reference. These two checks identify the same root cause (no cross-tab links at the LPT/Delegators junction) and produce the same fix (F-08: add cross-tab link). Logging as two separate FAILs inflates the fail count. One canonical location (check 4.10, which is a page structure check) should hold the finding; check 7.6 should cross-reference it: "See check 4.10."
**Correction:** Check 7.6: FAIL — Cross-reference check 4.10. Root cause and fix are identical. Count as one logical failing cluster, but both IDs still FAIL (the checks test different things: 4.10 is structure, 7.6 is navigation — both genuinely fail). The count remains 23, but the fix list should note these share one root fix.

---

### Issue 3: Verdict count is off
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Checks that fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 4.10, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 7.6, 8.6, 9.1, 9.2, 9.3, 9.4 — 23 checks fail. 5 NOT-TESTED (5.3, 5.6, 6.2, 6.3, 8.2)."
**What is wrong:** Counting the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 4.10, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 7.6, 8.6, 9.1, 9.2, 9.3, 9.4 = 23 IDs. The count "23 checks fail" matches the listed IDs exactly. This is correct per P49.
**Correction:** N/A — the count is correct. No error here.

---

### Issue 4: `status: published` not present — P57 not applicable, but check is applied correctly
**Severity:** LOW
**Check affected:** Check 1.8
**Finding in original:** Check 1.8 correctly cites checks.mdx §1.8 for the `status: current` requirement.
**What is wrong:** The source file has `status: current` (confirmed from the source file read). P57 applies only to `status: published`. The checker correctly applies the §1.8 citation without invoking P57 or claiming a `status: published` incoherence. No error.
**Correction:** N/A — correct.

---

### Issue 5: Check 9.2 FAIL for "no decision registry entries" — over-applied
**Severity:** LOW
**Check affected:** Check 9.2
**Finding in original:** "Check 9.2: All consuming decisions in registry — FAIL — No decision registry entries for this page."
**What is wrong:** Check 9.2 asks whether consuming decisions (decisions that affect this page) are in the registry. The Blocking Decisions section of the check explicitly states "None required. Page scope and purpose are unambiguous." If there are no blocking decisions and no structural decisions for this page, then check 9.2 should be NOT-TESTED or N/A — not FAIL. A page with no structural decisions does not fail 9.2 because there are no decisions that should be in the registry. The check 9.2 FAIL for absence of registry entries when the checker itself states no decisions are needed is a false positive.
**Correction:** Check 9.2: NOT-TESTED or N/A — "No structural decisions identified for this page per Blocking Decisions section. Check 9.2 does not apply when no decisions are required."

---

### Issue 6: F-01 proposed YAML block uses backtick formatting — inconsistency with P51
**Severity:** LOW
**Check affected:** F-01 fix list (P51)
**Finding in original:** F-01 presents proposed frontmatter as a YAML code block. The values are specific (purpose, complexity, lifecycleStage, etc.) with a "all proposed — confirm before applying" note.
**What is wrong:** P51 requires the format: "Proposed: `[field]: [value]` — confirm before applying." The checker uses a YAML code block instead of the P51 format. A YAML code block may be clearer for bulk frontmatter additions, but it is not the P51 canonical format. More critically, the YAML block includes `veracityStatus: unverified` without `status: draft` — the P39 violation from Issue 1 is embedded in the fix block itself. The formatting is a minor deviation; the P39 content error is material.
**Correction:** Add `status: draft` to the YAML block in F-01 and note the combined requirement.

---

### Issue 7: Veracity Claims Inventory has 14 claims "NOT-TESTED" rather than "UNVERIFIED"
**Severity:** LOW
**Check affected:** Category 6 — Veracity Claims Inventory (P12)
**Finding in original:** Veracity Claims Inventory uses "NOT-TESTED" status for most claims. Check 6.2 is also "NOT-TESTED."
**What is wrong:** P12 requires every veracity finding to be labelled TESTED or NOT-TESTED. "NOT-TESTED" is the correct label when the checker could not verify. The distinction between "UNVERIFIED" (a content status) and "NOT-TESTED" (a check execution status) is correctly applied. However, check 6.1 FAIL says "14 claims not tested" — this is a content gap observation but the checker appropriately flags it as a FAIL because the claims are on a `status: current` page without citation. The methodology is correct.
**Correction:** N/A — P12 applied correctly.

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with concrete proposed values (including "— confirm before applying").
- P15 applied correctly: `purpose` absence read directly from frontmatter.
- P16 applied correctly: `Related Pages` fully exempt — not in score table, not in check 3.2.
- P22 applied correctly: custom components marked NOT-TESTED.
- P25 applied correctly: docs.json sequence confirmed — page at line 2956, sequence includes byoc-cpu-smoke-test → zero-to-first-reward → ai-earning-quickstart.
- P29 applied correctly: `NOT in the command` at line 306 investigated, quoted, and correctly assessed as a code comment not a prose value statement.
- P30 applied correctly: em-dash scan covers description, H2 headings, StyledStep title props (including all 8 props listed explicitly), CustomDivider props.
- P42 applied correctly: check 1.3 N/A.
- P47 applied correctly: all 4 internal links verified with docs.json line numbers.
- P48 applied correctly: StyledStep title props explicitly listed and scanned.
- P50 applied correctly: `tutorial` is valid canonical — check 1.2 PASS.
- P51 applied (format deviation noted in Issue 6 but semantically compliant).
- P53 applied correctly: `Related Pages` is the only exempt heading.
- P54 applied correctly: check 2.1 PASS — no US spellings; banned word scan kept separate.
- P58 applied correctly: check 2.4 result PASS determined after Banned Construction Scan — scan found no violations.
- Dead import check (P9): `LinkArrow` dead import correctly identified.
- Cross-category connections: four root causes correctly identified and linked to fix items.
- Blocking Decisions: correctly states none required — page scope is unambiguous.
- Check 3.2 correctly PASS: no Banned-tier terms; `Prerequisites` correctly identified as OK-tier.
- Verdict summary count of 23 is correct (before Issue 5 correction — check 9.2 FAIL becomes NOT-TESTED, reducing to 22).

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — thorough and well-structured check with one HIGH-severity P39 risk (split veracityStatus/status fix), one false positive (check 9.2), and the cross-tab duplication between 4.10 and 7.6 which inflates apparent fail count by one logical cluster. All scan methodology, link verification, and individual check results are correct.

**Corrected fail count:** 22 checks fail (check 9.2 removed as false positive): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 4.10, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 7.6, 8.6, 9.1, 9.3, 9.4
