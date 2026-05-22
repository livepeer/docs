# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/ai-earning-quickstart.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count is off by two
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "17 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4"
**What is wrong:** Counting the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4 = 19 IDs. The count states 17. P49 requires count and listed IDs to match exactly.
**Correction:** "19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4"

---

### Issue 2: `veracityStatus` fix violates P39
**Severity:** HIGH
**Check affected:** F-02, F-03
**Finding in original:** F-02 includes "Add: `veracityStatus: unverified` (until F-01 is resolved)." F-03 says "Change `status` to `draft` and add `veracityStatus: unverified`."
**What is wrong:** Same structural problem as add-ai-to-video-node check. F-02 proposes adding `veracityStatus: unverified` as a standalone step without simultaneously requiring `status: current` to be changed to `draft`. An executing agent who applies F-02 before F-03 produces the incoherent `status: current` + `veracityStatus: unverified` combination that P39 explicitly prohibits. Per P39, the only valid moves are: (a) change `status` to `draft`, or (b) set `veracityStatus: verified` only when content is verified. The split across two fix items creates execution risk.
**Correction:** Consolidate F-02 and F-03 into a single atomic fix: "Change `status: current` to `status: draft` AND add `veracityStatus: unverified`. Apply together. Do not add `veracityStatus: unverified` while `status: current` remains."

---

### Issue 3: F-08 INFO note uses incorrect framing — `pageVariant` as editorial option
**Severity:** LOW
**Check affected:** F-08 (P42)
**Finding in original:** "If editorial preference is to signal this at taxonomy level, add `pageVariant: quickstart` alongside `pageType: tutorial`. This is editorial, not a schema requirement."
**What is wrong:** P42 states that check 1.3 (`pageVariant`) is a co-fix dependency of check 1.2 — it fires only when `pageType` is being migrated from a deprecated value. Since `pageType: tutorial` is not deprecated, there is no migration in progress and `pageVariant` is not in scope. Framing `pageVariant: quickstart` as an optional editorial enhancement is outside the check framework's intent and may confuse an executing agent. The note is not harmful but adds noise.
**Correction:** Remove F-08 entirely, or reframe as: "INFO: `pageVariant` is not required here. `pageType: tutorial` is canonical. No co-fix is needed (P42)."

---

### Issue 4: Check 2.4 contains a non-standard BORDERLINE classification for `should complete`
**Severity:** LOW
**Check affected:** Banned Construction Scan / check 2.4
**Finding in original:** The Banned Construction Scan includes: "should complete in under 5 seconds" (Line 352) — classified as "Not a value claim construction — conditional performance note (not `can/may`) — PASS."
**What is wrong:** The construction scanned is `should complete` — this is not in the `can/may [verb]` banned pattern (which covers `can [verb]` and `may [verb]`). The checker correctly identifies it does not match the banned pattern and passes it. The classification label "conditional performance note" is invented (P23 prohibits invented exemption categories), but since the finding is PASS and the reasoning is that the pattern does not match, this is not a false FAIL — it is a correctly reasoned PASS with unnecessary label. The concern is minor.
**Correction:** Remove the "conditional performance note" label. State simply: "`should complete` does not match the `can/may [verb]` banned pattern. PASS."

---

### Issue 5: Navigation source line reference is batch-wide boilerplate and may mislead
**Severity:** LOW
**Check affected:** Header / Check 7.1
**Finding in original:** "Navigation source: `docs.json` lines 2953–2960" (header). Check 7.1 confirms `docs.json` line 2957 for this specific page.
**What is wrong:** The header reference to "lines 2953–2960" appears to be a batch-level range copied identically across all tutorial checks in this batch. The specific line confirmed (2957) is correct. Verified against docs.json: `ai-earning-quickstart` is at line 2957. No factual error, but the batch-range header creates ambiguity — it implies these are the only docs.json lines read, when the checker did verify the specific page entry.
**Correction:** No change needed to findings. For clarity, the header could state "docs.json tutorials group: lines 2955–2960, page entry at line 2957."

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with proposed concrete values.
- P15 applied correctly: `purpose` absence read directly from frontmatter.
- P16 applied correctly: `Related Pages` exempt — excluded from score table and not mentioned in check 3.2.
- P22 applied correctly: custom components marked NOT-TESTED.
- P25 applied correctly: docs.json sequence confirmed with line references (lines 2956–2958).
- P30 applied correctly: em-dash scan covers description (correctly identifies hyphen vs em-dash in "2 hours - one GPU"), headings, props, body prose.
- P42 applied correctly for check 1.3: `pageType: tutorial` is not deprecated, no co-fix required. (The F-08 issue is editorial framing, not a P42 violation in the check table itself.)
- P47 applied correctly: full path verification for all 5 internal links with docs.json line numbers.
- P48 applied correctly: StyledStep title props and CustomDivider middleText props both included in em-dash scan.
- P50 applied correctly: `tutorial` valid canonical value — check 1.2 PASS despite page title containing "Quickstart."
- P51 applied correctly: all proposed frontmatter values carry "confirm before applying."
- P53 applied correctly: only "Related Pages" exempt.
- P54 applied correctly: check 2.1 passes on UK English; no banned words or constructions incorrectly placed in 2.1.
- P58 applied correctly: check 2.4 result determined after Banned Construction Scan.
- Dead import check (P9): no dead imports found — correctly reported.
- Veracity Claims Inventory: thorough — 11 claims inventoried with information type, standard, and status.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — substantive findings are accurate and methodology is sound. The count discrepancy (17 vs 19) and the split P39 fix are the only material errors. All individual check results are correct.

**Corrected fail count:** 19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4
