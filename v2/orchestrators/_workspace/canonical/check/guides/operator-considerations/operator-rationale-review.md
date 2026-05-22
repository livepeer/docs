# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/operator-considerations/operator-rationale.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Corrupt prefix — confirmed present in source file
**Severity:** CONFIRMED CRITICAL (finding verified)
**Check affected:** F-01 (5.6, 8.5)
**Finding in original:** "Corrupt prefix present. File begins with two lines of apparent garbage text: `glrw` (line 1) and `pwrfs` (line 2) before the frontmatter opening `---`."
**Verification result:** Source file `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` was read. Lines 1–2 confirmed: line 1 = `glrw`, line 2 = `pwrfs`, line 3 = `---` (frontmatter open). The corrupt prefix is real and present. F-01 as CRITICAL is correct. The MDX parser will encounter non-frontmatter content before the `---` delimiter and fail to parse the page.
**Correction:** No correction needed — finding is accurate and severity is appropriate.

---

### Issue 2: P39 — veracityStatus fix is the prohibited combination
**Severity:** HIGH
**Check affected:** 1.8 (F-05), Cross-Category Connections, BD-1
**Finding in original:** Check 1.8 fix: "Fix: change `status: draft`, add `veracityStatus: unverified`." F-05 fix: "Fix: change `status: draft`, add `veracityStatus: unverified`." BD-1 Option A: "Change `status: draft` + add `veracityStatus: unverified`."
**What is wrong:** P39 is explicit: "Never recommend `status: current` + `veracityStatus: unverified`." The letter of P39 targets the `status: current` + `veracityStatus: unverified` combination, but the spirit of P39 is that `veracityStatus: unverified` is not a valid field value — checks.mdx §1.8 states the schema allows `verified`, `partial`, or absent; `unverified` is not a valid value. More importantly, the valid fix pair is `status: draft` with `veracityStatus` either absent or not set, not `status: draft` + `veracityStatus: unverified`. Setting `veracityStatus: unverified` introduces a field value that may not be in the canonical schema. Check 1.8 in the check table correctly offers "Option B: Complete all TODO verification passes + set `veracityStatus: verified`" as the alternative — but Option A as stated adds a potentially invalid field value. Strictly per P39, the valid fix is to change `status` to `draft`; `veracityStatus` should remain absent until the page is verified, at which point it is set to `verified`. Recommending `veracityStatus: unverified` as an explicit field addition is not supported by checks.mdx.
**Correction:** F-05, check 1.8, Cross-Category Connections, and BD-1 should all read: "Fix: change `status: draft`. Leave `veracityStatus` absent until verification is complete, then set `veracityStatus: verified`." Remove the instruction to add `veracityStatus: unverified`.

---

### Issue 3: Question headings placement — check 3.2 vs CLAUDE.md
**Severity:** LOW (correct conclusion, arguable placement)
**Check affected:** 3.2 (F-17, F-18, F-19)
**Finding in original:** Check 3.2: "Sub-headings `Is reward calling profitable?`, `Can the node compete on pricing and capability?`, `Is the setup stable enough?` — all question-form H3 headings. CLAUDE.md explicitly prohibits questions in headings. F-22."
**What is wrong:** The "no questions in headings" rule comes from CLAUDE.md Voice section ("Name the thing. No questions.") and is a voice rule, not a check 3.2 banned-terms rule. Check 3.2 per checks.mdx §3.2 covers three tiers of banned/avoid/OK terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next` as Banned; `Overview`, `Details`, `Introduction`, etc. as Avoid). Question headings are not in any of those tiers. The correct check home for question headings is check 3.1 (heading rubric score — question-form headings score very low on Precision and Depth, as the scores 11–12/25 correctly show) and a separate voice-rules finding. Placing the finding under check 3.2 is technically incorrect per the check framework definition, though the underlying rule (no question headings) is correctly sourced from CLAUDE.md. This placement inflates check 3.2 from PASS to FAIL when the check 3.2 criteria do not cover question form. Check 3.2 should be PASS; the question-heading violation should be documented as a check 3.1 contributing factor and/or a voice-category finding under check 2.8 (per-audience prohibited phrases) or as a separate note.
**Correction:** Check 3.2 result should be PASS. The question-heading violation (CLAUDE.md Voice) belongs under check 3.1 (heading scores already fail on this basis) with an explanatory note: "Question-form headings fail check 3.1 partly because questions score 1–2/5 on Precision per the rubric. CLAUDE.md Voice additionally prohibits questions in headings." Remove from check 3.2 FAIL. Update Category 3 verdict: 3 checks fail → 3 checks fail: 3.1, 3.3, 3.7 (same count if 3.2 is removed, but 3.2 should become PASS). The verdict count of "4 checks fail: 3.1, 3.2, 3.3, 3.7" overstates failures by 1 if 3.2 is correctly resolved to PASS.

---

### Issue 4: F-23 is an empty placeholder finding
**Severity:** MEDIUM
**Check affected:** Finding Index (F-23)
**Finding in original:** "| F-23 | HIGH | 3.3 | (No additional 3.3 violation beyond F-22.) |"
**What is wrong:** F-23 is a placeholder entry with no actual finding. Per P43, finding IDs must be sequential and non-empty. An F-23 that says "(No additional 3.3 violation beyond F-22.)" creates a confusing gap in the fix list — an executing agent sees a HIGH severity finding with no actionable content. This also inflates the apparent HIGH finding count (F-23 appears in no severity summary row but occupies an ID slot). Either the ID should be removed and F-24 onward renumbered, or F-23 should be reassigned to the closest unlogged distinct finding.
**Correction:** Remove F-23 entirely and renumber F-24 through F-30 as F-23 through F-29. Update all cross-references. Alternatively, leave the ID gap and note: "F-23 reserved — no finding." The current "HIGH | 3.3 | (No additional...)" entry is neither a finding nor properly null.

---

### Issue 5: Verdict count — verify 25 individual check IDs
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original:** "Total FAIL checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.2, 2.4, 2.5, 2.10, 3.1, 3.2, 3.3, 3.7, 5.4, 5.6, 5.10, 6.1, 6.4, 6.6, 6.9, 8.5, 8.6, 9.1, 9.3 = 25 checks fail"
**What is wrong:** Counting the listed IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10 (6), 2.2, 2.4, 2.5, 2.10 (4), 3.1, 3.2, 3.3, 3.7 (4), 5.4, 5.6, 5.10 (3), 6.1, 6.4, 6.6, 6.9 (4), 8.5, 8.6 (2), 9.1, 9.3 (2) = 25. The count matches the listed IDs. However, check 6.5 ("REVIEW flags for unverified claims — FAIL") appears in the Category 6 table with result FAIL but is absent from the verdict count — same issue as in business-case. Additionally, if Issue 3 above is accepted and check 3.2 is revised to PASS, the correct count would be 24 FAIL checks (removing 3.2) minus 0 additions + check 6.5 = still 25. The 6.5 omission is the more clear-cut error regardless of the 3.2 decision.
**Correction:** If check 3.2 remains FAIL (current state): add 6.5 → 26 checks fail. If check 3.2 is corrected to PASS (per Issue 3): remove 3.2, add 6.5 → 25 checks fail (same total but different IDs).

---

### Issue 6: P44 — F-14 proposed fix contains a banned construction
**Severity:** MEDIUM
**Check affected:** F-14 (2.5, 2.10)
**Finding in original:** F-14 proposed fix: "Rewrite opener: `Choosing an operating path depends on hardware, stake access, and operating tolerance. The right answer is sometimes a pool worker, sometimes an AI-first node, and sometimes a full solo Orchestrator.`"
**What is wrong:** P44 requires proposed fix text to be self-checked against banned constructions before inclusion. The proposed replacement opener contains "depends on" — which is in the banned constructions list in CLAUDE.md ("depends on without ranked list"). The fix also does not include a ranked list or weighting alongside the `depends on` statement. Additionally, "sometimes a pool worker, sometimes an AI-first node" is a listing construction without a lead fact. The proposed fix would require a second fix pass to correct the `depends on` violation it introduces.
**Correction:** Remove the proposed replacement text from F-14 or replace with a compliant version. Example: "Rewrite opener: `Hardware, stake access, and operating tolerance determine which path fits. Pool workers need neither activation nor a full stake; solo Orchestrators need both. Choose the path that matches your current position.`" — confirm before applying.

---

## Confirmed Correct Findings

- **Corrupt prefix confirmed:** F-01 is accurate. `glrw` at line 1, `pwrfs` at line 2, `---` at line 3. CRITICAL severity is correct.
- **P50:** `pageType: guide` correctly passed at check 1.2.
- **P51:** All proposed frontmatter values formatted as "confirm before applying." Compliant.
- **P41:** `industry` and `niche` flagged FAIL with concrete proposed values. Compliant.
- **P15:** `purpose` read directly from frontmatter as `evaluation`. Compliant.
- **P16/P53:** "Related Pages" correctly exempted from heading scoring. No other heading wrongly exempted.
- **P28:** Result column matches detail text throughout. No result/detail mismatches detected.
- **P29:** Banned word scan cites lines and quotes content. `significantly` at lines 149 and 376 correctly identified.
- **P30:** Em-dash scan covers description field. No em-dashes found — correctly noted.
- **P36:** Only CRITICAL/HIGH/MEDIUM/INFO severity levels used. Compliant.
- **P37:** Error type characterised correctly in all frontmatter findings.
- **P38:** Rename proposals (`Revenue Streams`, `Viability Check`, `Reward Call Threshold`, `Pricing and Capability Fit`, `Infrastructure Stability`, `First Workload Choice`, `Network Research`) checked against other headings on the page. No conflicts flagged.
- **P43:** Finding IDs F-01 through F-30 are sequential (F-23 placeholder issue noted above but sequential numbering maintained). No duplicate IDs.
- **P46:** `not [X] as primary statement` (F-10) correctly placed under check 2.4, not 2.2. Compliant.
- **P54:** Check 2.1 correctly passes — `significantly` correctly routed to check 2.2. UK English check isolated to spelling patterns only. Compliant.
- **Check 3.1 heading scores:** Question-form H3s correctly scored very low (11–13/25). The underlying rubric application is correct even if the check 3.2 placement is wrong.
- **P18 rename proposals:** `Revenue Streams`, `Viability Check`, `Reward Call Threshold`, `Pricing and Capability Fit`, `Infrastructure Stability`, `First Workload Choice`, `Network Research` — all checked against checks.mdx §3.2 banned/avoid tiers. None introduce Banned terms. `Network Research` is clean. Compliant.
- **Link verification:** All confirmed links verified with docs.json line citations. Unverified links (reward-mechanics, earning-model) correctly flagged as INFO, not false positive broken links.
- **P47:** No false positives on link verification — confirmed-broken links are absent from docs.json; unconfirmed links are marked INFO not FAIL.
- **Category 1 verdict:** "7 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10" — correct (note: 1.10 is listed in the verdict paragraph as "(and 1.11 PASS corrects description concern)" — 1.11 is PASS, not listed as fail. Confirmed correct).
- **Category 2 verdict:** "4 checks fail: 2.2, 2.4, 2.5, 2.10" — correct.
- **Category 4 verdict:** "0 checks fail" — correct.
- **Category 5 verdict:** "4 checks fail/not-tested: 5.3, 5.4, 5.6, 5.10" — correct.
- **Category 7 verdict:** "0 checks fail" — correct.
- **Category 9 verdict:** "2 checks fail: 9.1, 9.3" — correct.

---

## Corrected Verdict

**Corrected fail count (accepting Issue 3 — check 3.2 revised to PASS, check 6.5 added):**
25 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.2, 2.4, 2.5, 2.10, 3.1, 3.3, 3.7, 5.4, 5.6, 5.10, 6.1, 6.4, 6.5, 6.6, 6.9, 8.5, 8.6, 9.1, 9.3

**If check 3.2 is retained as FAIL (disagreeing with Issue 3):**
26 checks fail (add 6.5 to original 25-ID list).

**Change from original:** Swap check 3.2 from FAIL to PASS (question headings belong under 3.1 not 3.2); add check 6.5 (present as FAIL in category table but absent from verdict count). Net change: 0 (one removed, one added) if Issue 3 accepted; +1 if not.

**Critical findings:** F-01 (corrupt prefix, confirmed), F-05 (status/veracityStatus incoherence) — both valid. F-05 fix text contains P39-adjacent issue (Issue 2 above).

**Blocking before publication unchanged:** F-01 (corrupt prefix), F-05 (incoherent status), F-24 (TODO blocks), F-29 (no sign-off). BD-2 (corrupt prefix origin) requires Alison confirmation.
