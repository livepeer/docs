# Critical Review of Check Report
## `v2/orchestrators/setup/test.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/test.md`
**Original page verified against:** `v2/orchestrators/setup/test.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Result/Detail contradiction (P28)
**Location in report:** Category 2 — check 2.4
**What's wrong:** The result column says FAIL, but every single item evaluated in the detail text concludes PASS. The detail reads: "One probable value-claim `can` found: line 119 — PASS. Line 381 — PASS (factual). Line 379 — PASS. Full scan below." No evidence of a banned construction is actually cited. The Banned Construction Scan at the bottom finds one BORDERLINE at line 390–391 (`are covered in` — mild passive) but the report itself classifies this as "not a checked banned construction." There is no actual FAIL finding to support the FAIL result.

The actual page does not appear to contain a banned construction. The `not [X]` pattern: "the node is not running" at line 49 is a diagnostic description within a conditional caveat — the report's own BCS does not flag it. No other `not [X]` primary statements, no unresolved `if [condition]` in body prose, no `This page [verb]` openers, no `can/may [verb]` value claims are found.

**What should have been said/done:** Check 2.4 result should be PASS. The BORDERLINE at line 390–391 should remain in the BCS as an advisory note but does not constitute a check 2.4 FAIL. This false positive inflates the fail count and could cause an executor to hunt for a problem that does not exist.

---

### Issue 2
**Type:** False positive
**Location in report:** Category 3 — check 3.2
**What's wrong:** Check 3.2 (No banned or weak standalone heading terms) is marked FAIL for `Setup complete`. The report states: "Setup complete uses `complete` as a closing label — not banned but weak." However, checks.mdx §3.2 explicitly lists `Setup` in the **OK** column (`Types`, `Modes`, `Profiles`, `Prerequisites`, `Configuration`, `Setup`, `Resources`, `Related`). Neither `Setup` nor `complete` appears in the Banned or Avoid lists. Check 3.2 specifically tests for membership in those lists — it does not test for weakness or low scores in the abstract. A low heading score is a check 3.1 failure, not a check 3.2 failure.

The report's own text acknowledges the term is "not banned but weak," which confirms it does not meet the check 3.2 FAIL criterion.

**What should have been said/done:** Check 3.2 result should be PASS (no heading uses a banned or avoid-list term). The weakness of `Setup complete` is fully captured by the check 3.1 FAIL (score 14/25). Logging it also as a 3.2 FAIL double-counts the finding and misstates the rule.

---

### Issue 3
**Type:** Factual error about the framework (false positive adjacent)
**Location in report:** Category 3 — check 3.6
**What's wrong:** The report states: "`Setup` is in the Avoid list (check 3.2) but as a standalone term; here it is qualified, so BORDERLINE." This is incorrect. `Setup` is in the **OK** list per checks.mdx §3.2, not the Avoid list. The Avoid list contains: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. `Setup` is not on it.

**What should have been said/done:** Remove the parenthetical claim about `Setup` being in the Avoid list. The title `Verify Your Setup` concern in check 3.6 should rest solely on the "second-person `Your`" argument, not on a misidentified framework rule.

---

### Issue 4
**Type:** Fabricated character count (P32)
**Location in report:** Frontmatter Table — description field; check 1.11
**What's wrong:** The report states the description is "163 characters" and "Count: ... = 163 characters." The actual measured length is 161 characters. The description (`Verify the orchestrator is on-chain, processing jobs, and healthy - video transcoding test, AI inference test, Explorer check, and basic monitoring confirmation.`) is 161 characters, which still exceeds the 160-char limit — so the FAIL result is correct — but the character count cited is wrong by 2.

**What should have been said/done:** State the correct count: 161 characters. The fix remains necessary (exceeds 160 by 1 character), but the count must not be fabricated. Per P32, the actual characters in the string must be counted before stating a count.

---

### Issue 5
**Type:** Character count not verified in proposed fix (P32)
**Location in report:** Check 1.11, proposed replacement text
**What's wrong:** The report proposes a replacement description: `'Confirm the orchestrator is on-chain, processing jobs, and exposing monitoring signals: video transcoding, AI inference, Explorer, and Prometheus.'` and states this is "147 chars." The actual measured length of that string is 146 characters. Minor, but P32 requires counting before stating.

**What should have been said/done:** State 146 characters, not 147.

---

### Issue 6
**Type:** Verdict summary counts categories, not check IDs (P49)
**Location in report:** Verdict section
**What's wrong:** The verdict states "Fail count: 14 failures across 9 categories." The actual count of individual FAIL check IDs from the check tables is substantially higher. Category 1 alone has 10 FAIL entries (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13). Adding check 2.4 (contested, see Issue 1), 3.1, 3.2 (false positive, see Issue 2), 3.6, 5.7, 6.5, 6.6, 6.9, 8.6, 9.1, 9.3 brings the total well above 14. The count of 14 corresponds roughly to the number of distinct issues or root causes, not the count of individual check IDs that carry a FAIL result.

**What should have been said/done:** Per P49, the verdict must count individual check IDs. The correct format is: "X checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, [2.4 contested], 3.1, 3.6, 5.7, 6.5, 6.6, 6.9, 8.6, 9.1, 9.3."

---

### Issue 7
**Type:** Missing P51 sign-off language
**Location in report:** Check 1.6, 1.7 in category table; check sections for `complexity` and `lifecycleStage`
**What's wrong:** The report proposes `complexity: intermediate` and `lifecycleStage: setup` as "Concrete fix" values. Per P51, proposed corrected frontmatter values for missing fields `complexity` and `lifecycleStage` must be formatted as: "Proposed: `[field]: [value]` — confirm before applying." Presenting inferred values as definitive fixes without sign-off language violates P51.

Note: `industry` and `niche` are explicitly handled by P41, which does require concrete values — so the format for those two fields is correct. The issue is specifically with `complexity` and `lifecycleStage`.

**What should have been said/done:** Change "Concrete fix: `complexity: intermediate`" to "Proposed: `complexity: intermediate` — confirm before applying." Same for `lifecycleStage: setup`.

---

### Issue 8
**Type:** Inconsistency (link count stated internally)
**Location in report:** Check 8.1
**What's wrong:** The report prefaces the link list with 10 numbered entries (links 1–10), then check 8.1 states "All 7 internal links verified against docs.json." The count is internally consistent — 7 of the 10 links are internal (items 1, 2, 3, 7, 8, 9, 10); items 4, 5, 6 are external. However, the juxtaposition of "10 links listed" followed immediately by "7 internal links" without explanation is potentially confusing for an executor and could cause a reviewer to question the completeness of the check. The report would be clearer if it explicitly stated "3 links are external (items 4, 5, 6) and are verified separately under check 8.2."

**What should have been said/done:** Minor clarity issue. Either note the split (7 internal + 3 external = 10 total) in check 8.1, or renumber the link list to separate internal from external.

---

## Summary

**Issue count:** 8
**False positives:** 2 (check 2.4 FAIL has no supporting finding; check 3.2 FAIL for Setup complete is not justified by the framework rules)
**Factual errors:** 2 (character count stated as 163, correct is 161; proposed fix stated as 147 chars, correct is 146)
**Framework misstatement:** 1 (Setup incorrectly described as in Avoid list; it is in the OK list)
**Missing process compliance:** 2 (P49 verdict count; P51 sign-off language for complexity and lifecycleStage)
**Minor clarity issue:** 1 (link count ambiguity in check 8.1)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above. The substantive findings are accurate and well-evidenced: the frontmatter failures, the TODO flags, the deprecated values, the heading score table, the navigation sequence, the link verification, and the CC root-cause structure are all correct. The two false positives (2.4, 3.2) and the P49 verdict count are the primary corrections needed before using this report to drive remediation.
