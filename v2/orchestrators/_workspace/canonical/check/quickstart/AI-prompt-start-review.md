# Critical Review of Check Report
## `v2/orchestrators/quickstart/AI-prompt-start.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/quickstart/AI-prompt-start.md`
**Original page verified against:** `v2/orchestrators/quickstart/AI-prompt-start.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Result/detail contradiction
**Location in report:** Category 2, check 2.1
**What's wrong:** The result header declares `**Result: FAIL**` but the detail section concludes `**PASS**` — the exact P28 error pattern from learnings.md. The detail walks through candidate violations and dismisses each one, ending with "No UK/US spelling violations found in body prose." There is no US spelling violation, so the result should be PASS. The FAIL header is wrong. However the verdict summary table counts Category 2 with 3 FAILs (2.4, 2.5, 2.10), which is consistent with the concluding PASS from 2.1's detail — meaning the checker silently corrected the header in the summary but left the contradiction in the body.
**What should have been said/done:** Result header must match the detail conclusion. Check 2.1 result should be `**Result: PASS**`. The summary count of 3 FAILs in Category 2 is correct given the PASS conclusion in the detail; the fix is to align the header with it.

---

### Issue 2
**Type:** False positive (link verification failure)
**Location in report:** Category 8, check 8.1, line for `/v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup`
**What's wrong:** The report marks this link as PASS, citing `Yes — line 2901`. docs.json line 2901 contains `"v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup"` — folder name `ai-and-job-workloads`, not `workloads-and-ai`. The page links to `/v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup`. These are different paths. The checker matched on `realtime-ai-setup` as a substring and accepted the PASS without verifying the full path. This link is broken: the folder prefix is wrong.
**What should have been said/done:** Check 8.1 must verify the full path, not just the filename. The correct entry for this link is NOT in docs.json — the docs.json path is `ai-and-job-workloads/realtime-ai-setup`. This link should be logged as FAIL, making the broken link count 9 of 12, not 8 of 12. The fix note should flag that the card at line 254 targets the wrong folder prefix.

---

### Issue 3
**Type:** Inconsistency (count contradiction within check 8.1)
**Location in report:** Category 8, check 8.1 summary block
**What's wrong:** The summary states "8 broken internal links out of 12. **4 distinct broken targets**" and then immediately lists **5** numbered items beneath it. The count "4 distinct" and the list of 5 disagree.
**What should have been said/done:** Either state "5 distinct broken targets" or collapse the list to 4. The 5 items listed are: (1) large-scale-operations, (2) job-types, (3) ai-workloads-guide, (4) /setup/activate, (5) batch-ai-setup. These are genuinely 5 distinct broken targets. The "4" figure is wrong.

---

### Issue 4
**Type:** Severity miscalibration / misuse of FAIL for a valid canonical value
**Location in report:** Category 1, check 1.2 (and Frontmatter Table row for `pageType`)
**What's wrong:** The report assigns `**Result: FAIL (misclassification)**` to `pageType: guide`. Check 1.2's pass criteria are: "One of: `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`. No deprecated 12-type values." `guide` is in that list — it passes 1.2. The checker is making an editorial recommendation to reclassify to `instruction + pageVariant: quickstart`, which may be correct, but a recommendation to reclassify a valid value is not a 1.2 FAIL. The check asks whether the value is in the canonical schema; it is.
**What should have been said/done:** Check 1.2 result should be `**Result: PASS**` (the value is valid). The reclassification recommendation should be logged as a separate finding — either as an INFO-level note or as a Category 4 finding under page structure (4.1 or 4.2), where a pageType mismatch with actual content is relevant. This false FAIL inflates the Category 1 FAIL count and is an editorial judgement dressed as a schema validation failure.

---

### Issue 5
**Type:** Result/count mismatch in verdict summary (P26)
**Location in report:** Verdict table, Category 1 row
**What's wrong:** The verdict table states Category 1 has 13 checks, 5 PASS, 6 FAIL, 2 INFO. Counting from the check-by-check section:
- FAIL: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.11, 1.12 = **8 FAILs**
- PASS: 1.5 only = **1 PASS** (and taking Issue 4's correction: still only 1 genuine PASS after correcting 1.2)
- N/A: 1.3, 1.9, 1.10 = 3
- MEDIUM/INFO: 1.13

Even accepting 1.2 as a FAIL (as the report does), PASS count is 1 (check 1.5), not 5. The report appears to have included field-level PASSes from the Frontmatter Table (`title`, `sidebarTitle`, `audience` field rows) in the check-level PASS count — conflating field-presence sub-checks with named check numbers. This inflates the PASS count by 4 and deflates the FAIL count by 2.
**What should have been said/done:** Check-level results (1.1–1.13) must be counted separately from field-level rows in the Frontmatter Table. Category 1 row should read approximately: 13 checks, 1–2 PASS, 8 FAIL, 3 N/A, 1 MEDIUM.

---

### Issue 6
**Type:** Result/count mismatch in verdict summary (P26)
**Location in report:** Verdict table, Category 6 row
**What's wrong:** The Category 6 row reads: "9 | 1 | 5 | 3 FAIL / NOT-TESTED". The 4th column header is "INFO / N/A / NOT-TESTED" but the value placed there is "3 FAIL / NOT-TESTED" — a mix of FAIL and NOT-TESTED. Actual check results: 6.1=FAIL, 6.2=FAIL, 6.3=NOT-TESTED, 6.4=FAIL, 6.5=PASS, 6.6=FAIL, 6.7=N/A, 6.8=FAIL, 6.9=FAIL = **6 FAILs**, 1 PASS, 1 N/A, 1 NOT-TESTED. The table shows 5 FAILs and 3 in the catch-all column, apparently putting 6.9 in the wrong column. The FAIL count is understated by 1.
**What should have been said/done:** Category 6 row should read: 9 checks, 1 PASS, 6 FAIL, 2 (N/A + NOT-TESTED). The 4th column must not contain FAILs.

---

### Issue 7
**Type:** Fabricated line number
**Location in report:** Category 8, check 8.1, row for `/v2/orchestrators/setup/rs-install`
**What's wrong:** The report states `Yes — line 2858`. docs.json line 2858 is not `rs-install`; the entry is at line 2862. Line 2858 is outside the setup pages block (the setup group starts at line 2859). This is a minor inaccuracy but per P29, cited line numbers must be verified against the actual file.
**What should have been said/done:** Cite the correct line number (2862) or verify before reporting.

---

### Issue 8
**Type:** Missed finding — em dash in heading
**Location in report:** Category 3, heading score table; Spelling/Typo Check
**What's wrong:** P30 from learnings.md explicitly states: "Em-dash prohibition applies to ALL visible text: H2/H3 headings, frontmatter `description` field, body prose, component props." The headings `Step 1 — Pull the AI runner image`, `Step 2 — Configure aiModels.json`, `Step 3 — Update your startup command`, `Step 4 — Verify AI is active` all use em dashes (`—`). The check report flags the em dash in the `description` field (line 3) and in body prose (line 100) but does not flag the four H2 step headings. This is a systematic miss of 4 em-dash instances in headings.
**What should have been said/done:** Each step heading should have been flagged in the Spelling/Typo Check and the Banned Construction Scan (scope line says "all body prose, headings, description"). The Cross-Category Connections Root Cause 4 entry ("Em dash prohibition — Affects: Cat 1.11 + Spelling/Typo Check (line 100)") should include all six instances. The fix for headings is to replace `—` with a colon or hyphen: `Step 1: Pull the AI runner image` or use `Step 1 - Pull the AI runner image`.

---

### Issue 9
**Type:** Missed finding — banned word "simply" scope check gap
**Location in report:** Category 2, check 2.2; Banned Construction Scan
**What's wrong:** This is a marginal verification item. `simply` is listed in checks.mdx 2.3 (banned phrases, minimiser). The banned phrase scan at 2.3 lists several patterns to check but does not enumerate `simply` in the candidate list, and the scan result section does not show the word was explicitly searched. The page itself does not appear to contain `simply`, so there is no false negative here on the content. However, the P24 requirement is that "Banned word/construction scan must show the work: list every candidate match considered, even when the result is PASS." The 2.3 scan shows only a subset of phrases from the banned list, not all of them (e.g. `"what it takes"`, `"it should be noted"`, `"not just X"` are listed in checks.mdx 2.3 but not shown in the scan candidates). The PASS is correct for this page, but the work is not fully shown.
**What should have been said/done:** Low severity — the page is clean on 2.3. But the scan candidate list should enumerate all phrases from checks.mdx 2.3, not a selective subset. Flag as a process gap, not a content error.

---

### Issue 10
**Type:** Inconsistency — veracityStatus fix is internally consistent (no violation found)
**Location in report:** Category 1, check 1.8; Category 6, check 6.6
**What's wrong:** This is a non-issue to verify. The report recommends `veracityStatus: 'unverified'` which is consistent with `status: review`. It does not fall into the P39 self-contradiction pattern (recommending `status: current` + `veracityStatus: unverified`). The fix is internally coherent.
**What should have been said/done:** No change needed. Noting this confirms the report does NOT repeat the Batch 4 veracityStatus contradiction error.

---

### Issue 11
**Type:** Missed finding — `"simply"` in CLAUDE.md checks scope vs banned phrases scope
**Location in report:** Not a content miss — see note in Issue 9. This item is closed.

---

### Issue 12
**Type:** Missed finding — purpose field value proposed is a pageType value substitution candidate, not confirmed against the 15-value set independence
**Location in report:** Category 1, checks 1.2 and 1.4
**What's wrong:** The report proposes `purpose: 'configure'` without explicitly verifying it against the 15-value canonical set stated in checks.mdx 1.4. `configure` is in the canonical set ("orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update"), so the proposed value is valid. However, per learnings.md P15, the checker must "read `purpose` field from frontmatter directly." Since the `purpose` field is absent, the checker inferred a value from page content. The inferred value is reasonable, but the report presents it as the definitive fix rather than a proposed value requiring human sign-off.
**What should have been said/done:** Flag the inferred `purpose: 'configure'` as a proposed value pending human confirmation, not as a definitive fix. The same applies to `complexity: 'intermediate'` and `lifecycleStage: 'setup'`. These are reasonable inferences but are editorial decisions, not automated resolutions.

---

## Summary

**Issue count:** 9 substantive issues (Issues 1–8, 12; Issues 10–11 were non-issues/self-correcting)
**False positives:** 2 — check 1.2 (valid `guide` pageType FAILed), link 8.1 for `realtime-ai-setup` (broken link passed as valid due to partial path match)
**Missed findings:** 1 — four em dashes in H2 step headings not flagged (Issue 8)
**Other errors:** 4 — check 2.1 result/detail contradiction (Issue 1); broken link count discrepancy 4 vs 5 (Issue 3); Category 1 verdict PASS/FAIL miscounts (Issue 5); Category 6 verdict column misplacement (Issue 6); line number inaccuracy (Issue 7)
**Process gaps:** 1 — inferred frontmatter values presented as definitive fixes (Issue 12); partial banned phrase scan show-your-work (Issue 9)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above. The substantive findings (broken links, missing frontmatter fields, em dash in description and body, heading scores, veracity failures, opening sentence) are all correct and actionable. Two corrections are required before executing fixes: (1) check 1.2 result should be PASS with a reclassification recommendation, not FAIL; (2) the `realtime-ai-setup` card link at line 254 is also broken (folder prefix wrong) and must be added to the broken link list. The four H2 step heading em dashes should be added to the fix list before execution. Verdict summary counts in Categories 1 and 6 are inaccurate and should not be relied on for tracking.
