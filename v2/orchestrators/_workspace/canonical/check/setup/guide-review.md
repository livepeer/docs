# Critical Review of Check Report
## `v2/orchestrators/setup/guide.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/guide.md`
**Original page verified against:** `v2/orchestrators/setup/guide.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Result/detail contradiction
**Location in report:** Check 2.10
**What's wrong:** The check header reads `**2.10 — No hedging openers**: FAIL` but the detail text immediately concludes `Result: PASS (no hedging opener specifically)`. The result label and the detail conclusion directly contradict each other. Per P28 from learnings, result column/header must match the detail conclusion.
**What should have been said/done:** The header should read `PASS`. The detail text correctly identifies that no hedging opener exists — the check passes. The checker conflated a Cat 2.5 opening order violation (already logged separately) with the distinct Cat 2.10 hedging opener check.

---

### Issue 2
**Type:** Result/detail contradiction
**Location in report:** Check 3.1 narrative, `Redirects` entry
**What's wrong:** Check 3.1 bullet list states `## Redirects — 17/25 (see table)`. The Heading Score Table on the same report shows `Redirects | 4 | 3 | 4 | 4 | 5 | **20/25** | PASS`. The rationale note at the bottom of the table confirms `Redirects (20/25)`. The score 20/25 meets the ≥20/25 threshold — `Redirects` passes check 3.1.

The 17/25 figure in the narrative is fabricated. The table maths (4+3+4+4+5) sum to 20, not 17. The narrative score is wrong in both the number and the pass/fail implication — listing `Redirects` in the check 3.1 FAIL bullet implies it is a failing heading when it passes.
**What should have been said/done:** The check 3.1 bullet should read `## Redirects — 20/25 (PASS)` and `Redirects` should not be listed as a contributing failure for check 3.1. The three failing headings are `What this guide does`, `What this guide does not do`, and `Setup overview`. The narrative should list only those three.

---

### Issue 3
**Type:** Result/detail contradiction
**Location in report:** Check 3.1 narrative, `What this guide does` entry
**What's wrong:** Check 3.1 bullet list states `## What this guide does — 10/25 (see table)`. The Heading Score Table shows `What this guide does | 1 | 1 | 2 | 2 | 3 | **9/25** | FAIL`. The rationale confirms `What this guide does (9/25)`. The narrative misstates the score as 10 when the table computes 9 (1+1+2+2+3=9).
**What should have been said/done:** The check 3.1 bullet should read `## What this guide does — 9/25`. The table is correct; the narrative is wrong. All three contradicted scores (Issues 2 and 3) suggest the checker wrote the narrative independently of the table rather than copying from it. P31 from learnings: "Copy from the table; do not restate from memory."

---

### Issue 4
**Type:** Missed finding — required field omission
**Location in report:** Checks 1.9, 1.10, and the Frontmatter Table; also check 1.1
**What's wrong:** Checks 1.9 and 1.10 mark `industry` and `niche` as `N/A — Not a required field. No action needed.` The Frontmatter Table has no rows for either field. Check 1.1 lists only three missing fields (`complexity`, `lifecycleStage`, `veracityStatus`) and does not count `industry` or `niche` as missing.

Per Batch 1 learnings (item 1, correction): "User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them. 'Valid if present' means validate the value when present — it does NOT mean optional." Both fields are absent and should be flagged as FAIL with concrete values proposed.

The check 1.1 count of `Missing required fields (5)` in the Frontmatter Table header is also wrong — it should be at least 7 (adding `industry` and `niche`).
**What should have been said/done:**
- Frontmatter Table: add rows for `industry` (Present? No, Pass/Fail: FAIL) and `niche` (Present? No, Pass/Fail: FAIL).
- Check 1.9: FAIL. Fix: Add `industry: [technical, infrastructure]` (or similar concrete values per the enum).
- Check 1.10: FAIL. Fix: Add `niche: [web3, infrastructure]` (or similar concrete values).
- Check 1.1: Update missing field count to 7. Update the missing field list.
- Add F12/F13 entries to the Fix List for these two fields.

---

### Issue 5
**Type:** Missed finding — fix introduces a new violation
**Location in report:** Fix F6, Fix List section
**What's wrong:** The proposed replacement text in F6 reads: `Pool operators and non-standard deployments (split, siphon) have separate paths — see Redirects below.` This contains an em-dash (`—`). CLAUDE.md explicitly prohibits em dashes: "No em dashes — rewrite or use hyphens." A fix that introduces a banned construction is not a valid fix.
**What should have been said/done:** The em-dash in the proposed replacement must be removed. The sentence should be rewritten without it, for example: `Pool operators and non-standard deployments (split, siphon) have separate paths; see Redirects below.` or `Pool operators and non-standard deployments (split, siphon) use separate paths. See Redirects below.`

---

### Issue 6
**Type:** Missed finding — check 4.7 evaluates proposed future state, not current state
**Location in report:** Check 4.7
**What's wrong:** Check 4.7 opens with `Purpose is orient (once corrected).` and evaluates information type mapping against the proposed corrected value `orient`, not the actual current value `purpose: guide`. Per P35 from learnings: "All findings evaluate the current state of the page as it exists, not a proposed post-fix state."

The current `purpose: guide` is a pageType value placed in the purpose field — it does not map to any of the 15 canonical purpose values. The check should evaluate what information types `purpose: guide` permits (which is undefined/invalid), then note that the evaluation is conditional on resolving Blocking Decision 1.
**What should have been said/done:** Check 4.7 should state: "Current `purpose: guide` is not a canonical purpose value — information type mapping is undefined for this value. Evaluation deferred to Blocking Decision 1. Once corrected to `purpose: orient`, check 4.7 would PASS (all sections are structural/narrative, consistent with `orient` purpose)."

---

### Issue 7
**Type:** Factual inaccuracy in link verification table
**Location in report:** Check 8.1 link table, `setup/r-configure` row
**What's wrong:** The link table states `File exists? NO (deprecated, in x-deprecated/)` for `setup/r-configure`. The file DOES exist — at `v2/orchestrators/setup/x-deprecated/r-configure.mdx`. The "File exists?" column answer should be YES (exists at a different path). The status FAIL is correct (the link target does not match the file's actual location), but the file existence column is factually wrong.

This is a minor inaccuracy — it does not change the FAIL result or the fix recommendation — but it is an incorrect factual claim that a downstream executor should not rely on.
**What should have been said/done:** The row should read: `File exists? YES (at setup/x-deprecated/r-configure.mdx — not at the linked path)`. Status remains FAIL — broken link.

---

## Summary

**Issue count:** 7
**False positives:** 0
**Missed findings:** 2 (Issue 4: `industry`/`niche` required fields; Issue 6: 4.7 current-state evaluation)
**Other errors:** 5 (Issues 1, 2, 3: result/detail contradictions and score fabrication; Issue 5: fix introduces em-dash violation; Issue 7: minor factual inaccuracy in link table)
**Report overall quality:** MOSTLY RELIABLE
**Recommended action:** Use with corrections noted above.

The core findings are accurate and actionable: broken links, deprecated frontmatter values, voice rule violations, and heading failures are all correctly identified and the fix list is executable. The link verification against docs.json is thorough and accurate (P33 compliant). The banned construction scan is complete and shows its work (P24 compliant). The cross-category connections section is well-structured (P13 compliant). The em-dash in Fix F6 and the `industry`/`niche` miss are the two issues most likely to cause regressions if the fix list is executed without correction.

**Corrections required before executing fixes:**
1. Check 1.9, 1.10, and Fix List: add FAIL findings for absent `industry` and `niche` fields with concrete proposed values.
2. Fix F6: remove the em-dash from the proposed replacement text.
3. Check 2.10: change header result from FAIL to PASS.
4. Check 3.1: correct `Redirects` score to 20/25 (PASS) and `What this guide does` to 9/25.
5. Check 4.7: evaluate current `purpose: guide` state, not the proposed corrected value.
6. Link table row for `setup/r-configure`: correct "File exists? NO" to "File exists? YES (at wrong path)."
