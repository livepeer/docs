# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/byoc-cpu-tutorial.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: docs.json path finding confirmed — CRITICAL navigation issue verified
**Severity:** CRITICAL (confirmed correct, not an error in the check)
**Check affected:** Check 7.1, 7.2, 7.4, 7.7
**Finding in original:** "File at `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`. docs.json entry is `v2/gateways/guides/tutorials/byoc-cpu-tutorial` (line 2589 and 2634). No entry for this file in the orchestrators tutorials group (docs.json lines 2953–2961). ORPHAN in orchestrators navigation."
**What is wrong:** The finding is correct. Verified against docs.json: the only occurrence of `byoc-cpu-tutorial` is at line 2589: `"v2/gateways/guides/tutorials/byoc-cpu-tutorial"`. The orchestrators tutorials group (docs.json lines 2955–2960) lists: `byoc-cpu-smoke-test`, `zero-to-first-reward`, `ai-earning-quickstart`, `add-ai-to-video-node`, `full-ai-pipeline-tutorial`, `realtime-ai-tutorial`. `byoc-cpu-tutorial` does not appear. The file at `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` is unreachable from the orchestrators navigation. The check report's line reference of "line 2589 and 2634" should be verified — the second occurrence at 2634 was not confirmed in this review's docs.json search, but the core finding (not in orchestrators nav, one entry under gateways nav at line 2589) is confirmed accurate.
**Correction:** The finding stands as CRITICAL. Verify whether "line 2634" is a second gateways reference or a table of contents entry — the critical point (file is unreachable from orchestrators nav) is factually correct regardless.

---

### Issue 2: Title em-dash finding is incorrect — title contains a hyphen, not an em-dash
**Severity:** HIGH
**Check affected:** Frontmatter Table (title row), check 3.6, Banned Construction Scan
**Finding in original:** Frontmatter Table: "FAIL — Contains em-dash (P30)." Check 3.6 references "em-dash in title." Banned Construction Scan: "Title: `'BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)'` — contains ` - ` (hyphen in 'smoke-test') not em-dash. BORDERLINE: title contains the word 'to' in a contrast label pattern... PASS."
**What is wrong:** The checker is internally contradictory. The Frontmatter Table says FAIL for an em-dash, but the Banned Construction Scan section correctly identifies the character as a hyphen (not an em-dash) and concludes PASS. The title `'BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)'` contains hyphens in "smoke-test" and "off-chain" and "on-chain" — all legitimate hyphenation in compound modifiers. There is no em-dash in the title. The Frontmatter Table FAIL and the Check 3.6 FAIL are false positives created by the checker noting "Contains em-dash" without verifying the character. P28 requires the result column to match the detail text conclusion — the Banned Construction Scan section concluded PASS on the title, but the Frontmatter Table row says FAIL.
**Correction:** Title row: PASS — contains hyphens in compound modifiers, no em-dash. Check 3.6: PASS (remove em-dash finding). This removes one FAIL from the check 1.1 sub-finding. The Frontmatter Table FAIL for title was an error; the Category 1 FAIL overall still stands due to the many other absent fields, but the title characterisation should be corrected. Category 3 FAIL on 3.6 should be removed — reducing Category 3 failing checks from 3.1, 3.2, 3.6, 3.7 to 3.1, 3.2, 3.7.

---

### Issue 3: Check 3.2 finding requires clarification — "Architecture overview" is `overview` which is Avoid-tier
**Severity:** MEDIUM
**Check affected:** Check 3.2
**Finding in original:** Check 3.2 notes: "'Architecture overview' — `Overview` is in the check 3.2 Avoid tier. Proposed: `Pipeline Architecture`."
**What is wrong:** This finding is correct per the check 3.2 prohibited list (P18 notes `Overview` is explicitly in the prohibited terms list). However, the Category 3 verdict labels this as failing check 3.2 twice ("Failing: 3.1 (2 headings), 3.2 (2 headings)"). The check table row for 3.2 should state FAIL. The verdict is consistent. This is not an error — the finding and verdict match.
**Correction:** N/A — correct.

---

### Issue 4: Verdict fail count cannot be verified from the check table
**Severity:** MEDIUM
**Check affected:** Verdict (P49)
**Finding in original:** "Individual failing check IDs (P49): 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 2.3(borderline), 2.4(borderline), 2.5, 2.7, 2.10, 3.1(×2), 3.2(×2), 3.6, 3.7, 4.1, 4.2, 4.3, 4.8, 5.1, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.1, 7.2, 7.4, 7.5, 7.7, 8.1, 8.4, 9.1, 9.2, 9.3 — 43 failing check IDs"
**What is wrong:** (a) `3.6` should be removed given Issue 2 above (false positive em-dash on title). (b) 2.3 and 2.4 marked as BORDERLINE, not definitive FAILs — P49 should not count BORDERLINE findings as FAIL check IDs; they should be listed separately as BORDERLINE. (c) Once 3.6 is removed and BORDERLINEs are separated, the count changes. (d) Check 8.6 result: the check shows PASS ("No TODO/TBD found in rendered content") — but the Verdict section lists the finding under Category 8. Re-reading: check 8.6 for this page says PASS (no FACT CHECK comments). The Category 8 verdict says "Failing: 7.1 (orphan nav), 8.1 (gateway links unverified), 8.4 (non-standard OG path)." The reference "7.1" in the Category 8 verdict cross-references the nav orphan from Category 7. The verdict logic is correct. (e) `8.1` is listed as failing due to unverified gateway links — this is a valid NOT-TESTED situation, not a confirmed FAIL. The checker correctly notes they could not verify links that were confirmed in docs.json for the gateways section.
**Correction:** Remove 3.6 from the failing list. Clarify that 2.3 and 2.4 are BORDERLINE (not confirmed FAILs). Revised count: approximately 40 confirmed FAIL check IDs + 2 BORDERLINE.

---

### Issue 5: `veracityStatus` fix: P39 not violated here
**Severity:** LOW
**Check affected:** Frontmatter proposed additions
**Finding in original:** Proposed frontmatter additions include `veracityStatus: unverified`.
**What is wrong:** Unlike other tutorials, this page has NO `status` field in its frontmatter (the check correctly notes "this is the only tutorial without `status: current`"). P39 applies when `status: current` is present. Since `status` is absent entirely, adding `veracityStatus: unverified` does not create the incoherent combination P39 warns against. The fix is valid here. However, the checker should also recommend adding `status: draft` since the page is unverified.
**Correction:** Add to proposed frontmatter: `status: draft` alongside `veracityStatus: unverified`. Correct framing: "Add `status: draft` and `veracityStatus: unverified` together. Do not add `veracityStatus: unverified` then later add `status: current`."

---

### Issue 6: Category 1 verdict count does not add up
**Severity:** MEDIUM
**Check affected:** Category 1 verdict
**Finding in original:** "Category 1 verdict: FAIL — 12 failing checks: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, plus description sub-issue"
**What is wrong:** The listed IDs are 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12 = 11 IDs. The checker says "12 failing checks" and adds "plus description sub-issue" — but the description sub-issue IS check 1.11. The description's overlength and imperative framing are captured under check 1.11 FAIL. There is no 12th check; the count should be 11. Additionally, if the title em-dash finding is removed (Issue 2), check 1.1 still fails for all the other absent fields — so the 1.1 result is unaffected, but noting the title em-dash as a 1.1 sub-finding inflates the perceived scope.
**Correction:** "Category 1 verdict: FAIL — 11 failing checks: 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12"

---

## Confirmed Correct Findings

- docs.json path verification CONFIRMED: `byoc-cpu-tutorial` exists only at line 2589 under `v2/gateways/guides/tutorials/byoc-cpu-tutorial`. It is absent from the orchestrators tutorials group. This is a CRITICAL navigation issue.
- P41 applied correctly: `industry` and `niche` flagged FAIL with concrete proposed values.
- P15 applied correctly: `pageType` absence read directly from frontmatter.
- P25 applied correctly: docs.json sequence referenced explicitly.
- P22 applied correctly: components marked NOT-TESTED.
- P23 applied correctly: `not [X]` pattern in prerequisites noted as BORDERLINE rather than inventing an exemption.
- Dual-audience finding (4.1) is correct and well-reasoned: Part 6 (gateway PM deposits, wallet setup) is out of scope for orchestrators tab per CLAUDE.md tab scope matrix.
- Content duplication with `byoc-cpu-smoke-test.mdx` (check 4.8) correctly identified.
- No FACT CHECK flags present — check 6.5 FAIL is correct (no flags despite multiple unverified claims).
- Check 6.9 correctly applied: absence of FACT CHECK flags means unverified claims have no named owners.
- P36 applied correctly: no invalid severity levels used.
- P37 applied correctly: `purpose: build` noted as a "wrong-field error (type b)" — a pageType value would be in a purpose field, not a deprecated alias situation.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — the critical navigation finding (docs.json mismatch) is confirmed correct and is the most important finding in the batch. The false positive on the title em-dash (Issue 2) incorrectly adds one fail to Category 3. The Category 1 count is off by one. The overall REWRITE REQUIRED verdict is justified given the navigation orphan, dual-audience scope issue, and near-total frontmatter absence.

**Corrected fail count:** Approximately 41 confirmed FAIL check IDs (remove 3.6; BORDERLINE items 2.3 and 2.4 are not confirmed FAILs): 1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 2.5, 2.7, 2.10, 3.1(×2), 3.2(×2), 3.7, 4.1, 4.2, 4.3, 4.8, 5.1, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.1, 7.2, 7.4, 7.5, 7.7, 8.1, 8.4, 9.1, 9.2, 9.3 — plus 2 BORDERLINE (2.3, 2.4).
