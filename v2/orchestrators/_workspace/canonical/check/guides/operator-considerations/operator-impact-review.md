# Critical Review of Check Report
## `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/guides/operator-considerations/operator-impact.md`
**Original page verified against:** `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** False positive (fabricated finding)
**Location in report:** Category 2 check 2.2 (banned words) and Banned Construction Scan, Cross-Category Connections Root Cause D, Verdict priority fix 3
**What's wrong:** The report states `meaningfully` appears twice — once "at line 192 in body prose" and once "within the accordion." In the original page, `meaningfully` appears exactly once, at line 213, inside the first Accordion block ("For independent media"). Line 192 in the original file is a blank line between bullet points. There is no sentence containing `meaningfully` in body prose outside the accordion.

The report's proposed fix in check 2.2 targets "line 214" — which is the line immediately following the actual occurrence at line 213 — but the fix wording accurately describes the real sentence, so the fix itself is correct for the one occurrence. However, Root Cause D, the Banned Construction Scan "Confirmed flags" item 2 (line 192), and Banned Construction Scan item 3 (lines 209–214, annotated as a second occurrence) are all false.

**What should have been said/done:** Report one occurrence of `meaningfully` at line 213, inside the first Accordion. The fix wording in check 2.2 is the correct fix for that single occurrence. Root Cause D should state "appears once" and cite line 213 only.

---

### Issue 2
**Type:** False positive (wrong result on check 2.1)
**Location in report:** Category 2, check 2.1
**What's wrong:** Check 2.1 is assigned `Result: FAIL`, but the detail concludes with "**PASS for UK English specifically.**" The FAIL result in the Result column contradicts the conclusion of the Detail column. The FAIL label in the Result column is wrong. The checker appears to have begun the 2.1 analysis, wandered into checks 2.4 and 2.6 territory mid-cell, then concluded the UK English check passed — but left the Result column as FAIL.

No US spellings are present in the page. The em-dash note about "Delegator override" using a single hyphen is not a UK English violation — it is a punctuation style note. The Category 2 verdict summary lists "4 failures (2.2, 2.4, 2.6, 2.9)" which correctly excludes 2.1, so the verdict count is right, but the check table itself misreports 2.1 as FAIL.

**What should have been said/done:** Check 2.1 Result should be `PASS`. The detail content should be trimmed to only UK English findings. Cross-category observations about banned constructions belong in 2.4, not in 2.1.

---

### Issue 3
**Type:** Missed finding
**Location in report:** Category 2 check 2.4; Banned Construction Scan
**What's wrong:** Check 2.4's Detail mentions "Lines 266–268 contain `can be done`" as a finding, but this instance does not appear anywhere in the Banned Construction Scan table, is not in the "Confirmed flags" summary, and is not listed in the Verdict's "Priority fixes." The finding is real — line 266 reads "Voting can be done via the [Livepeer Explorer]" — `can be done` is a passive construction using `can` in what could be treated as a procedural instruction. The report named it in the category check row but then failed to carry it through the full scan, assign it a flag status, or provide a fix.

**What should have been said/done:** Add line 266 to the Banned Construction Scan table. Classify `can be done` as a banned construction (passive + `can` in a procedural claim). Proposed fix: "Vote on LIPs via the [Livepeer Explorer](https://explorer.livepeer.org/voting)." Add to Confirmed flags summary and to Verdict priority fix 4.

---

### Issue 4
**Type:** Missed finding
**Location in report:** Banned Construction Scan; Category 2 check 2.4
**What's wrong:** The report flags `more than` at line 248 (Accordion: "An Orchestrator is more than an earning node") as borderline. It misses a second occurrence at line 257: "Governance participation means more than showing up on voting day." Both instances use the same construction. The second is in body prose (not an accordion), making it a stronger candidate for flagging than the first.

**What should have been said/done:** Add line 257 to the Banned Construction Scan table. Classify `more than` at line 257 as the same borderline `not just X` pattern flagged at line 248. Flag both for human review consistently.

---

### Issue 5
**Type:** Severity miscalibration + vague fix
**Location in report:** Category 2 check 2.9 (passive value statements)
**What's wrong:** The check 2.9 failure is for "often decisive" being unquantified. The proposed fix replaces it with "determines the outcome" — which is an unverified factual assertion (it states a guarantee that has not been sourced). The fix introduces a stronger claim without sourcing. This is not an executable fix; it substitutes one problem (vague) with another (unsourced assertion).

The alternate fix path — `{/* REVIEW: claim about stake concentration — verify against Explorer data */}` — is correct and executable. The report buries it as an "OR" option rather than making it the primary recommendation.

**What should have been said/done:** Make the REVIEW flag the primary fix. Do not propose rewriting to "determines the outcome" without a source. The fix should read: Flag with `{/* REVIEW: "often decisive" — verify stake concentration claim against Explorer voting data before asserting */}` and leave the prose unchanged pending verification.

---

### Issue 6
**Type:** Process issue (internal count mismatch)
**Location in report:** Category 1 verdict line and Verdict summary table
**What's wrong:** The Category 1 verdict line reads "FAIL — 6 failures (1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13 = 7 distinct failures across checks; 1.1 aggregates the missing-field findings)". The parenthetical lists 7 check IDs (1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13) but says "6 failures." The Verdict summary table then says "7 (1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13)." The two counts (6 and 7) are inconsistent within the same report.

**What should have been said/done:** Choose one count and apply it consistently. The correct count of distinct failing checks in Category 1 is 6 if 1.1 is treated as an aggregate of 1.6, 1.7, and 1.8 (as stated), or 7 if each check is counted separately. Whichever convention is chosen must be applied the same way in the category verdict line and the Verdict summary table.

---

### Issue 7
**Type:** False positive (wrong line number for `meaningfully` in check 2.2)
**Location in report:** Category 2 check 2.2 fix instruction
**What's wrong:** The fix instruction says "Fix (line 214): Replace `A permissionless compute network...`" The sentence starts at line 213, not line 214. Line 213 is "A permissionless compute network with no single controller provides a meaningfully different"; line 214 is "infrastructure substrate." Directing an agent to line 214 would land on a sentence fragment, not the line to edit.

**What should have been said/done:** Fix (line 213): Remove `meaningfully` from the sentence "A permissionless compute network with no single controller provides a meaningfully different infrastructure substrate."

---

### Issue 8
**Type:** False positive (wrong line number for the `If` construction in check 2.4 and Banned Construction Scan)
**Location in report:** Category 2 check 2.4 Detail; Banned Construction Scan table row; Verdict priority fix 4
**What's wrong:** The report consistently places the `If the motivation case is clear` sentence at "Line 258" or "Lines 258–259." The actual line is 256. The sentence "If the motivation case is clear, the practical question becomes what an operator actually does with" begins at line 256. The Banned Construction Scan table and the fix instruction both cite line 258, which is the line "consequential work happens before a proposal reaches an on-chain poll." — a different sentence.

**What should have been said/done:** Report the `If` construction at line 256. Fix instruction: Delete line 256 ("If the motivation case is clear, the practical question becomes what an operator actually does with") and the continuation on line 257 up to "that influence." — beginning the paragraph instead with "Governance participation means more than showing up on voting day."

---

### Issue 9
**Type:** Process issue (schema rule cited without verifying exemption claim)
**Location in report:** Check 1.8 detail and Category 5 check 5.7
**What's wrong:** The report asserts "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags" and calls this "incoherent." This rule is correctly stated in checks.mdx §1.8. However, the report then says "Fix: Add `veracityStatus: unverified` and ... `status: current` should remain as-is pending full veracity pass." This is internally contradictory: the report correctly identifies that `status: current` + `veracityStatus: unverified` is an incoherent combination per the rules, then recommends creating exactly that combination.

**What should have been said/done:** The fix should be one of: (a) add `veracityStatus: unverified` AND change `status` to `draft` or `review`, or (b) flag both fields for human decision. Do not recommend creating the incoherent combination the report just identified as invalid.

---

### Issue 10
**Type:** Vague fix (description replacement introduces unverified content as fact)
**Location in report:** Category 1 check 1.11; Verdict priority fix 7
**What's wrong:** The proposed replacement description "Governance weight, what gets voted on, and the sovereign compute case for running open video infrastructure." presents `sovereign compute case` as a settled, named concept. The original description hedges it as "the sovereign compute thesis." The replacement is cleaner prose but the checker should not rewrite the description using content choices that may conflict with the author's intent, without flagging that this is a draft suggestion requiring Alison's approval. It is presented as an executable fix.

Additionally the report characterises the original description as "not subject-first" but the original opens with "How Orchestrators shape..." — a gerund phrase, which is accurate criticism. The proposed fix is subject-first ("Governance weight..."). The criticism is valid. The fix is directionally correct but should be marked as a draft for approval, not an instruction.

**What should have been said/done:** Mark the proposed description as `[DRAFT — requires Alison approval before executing]`. The fix is reasonable but the description is editorial content, not a schema correction.

---

### Issue 11
**Type:** False positive (description character count wrong)
**Location in report:** Category 1 check 1.11
**What's wrong:** The report states the description is "160 chars (borderline)." The actual character count of the description string is 159 characters. This is below the 160-character limit defined in checks.mdx §1.11, so the description is not borderline — it passes the length constraint. The FAIL on 1.11 is correctly assigned for the non-subject-first structure, but the length concern should not be raised at all.

**What should have been said/done:** Remove "160 chars (borderline)" from the detail. The FAIL stands for the non-subject-first opening; the length is within limits.

---

### Issue 12
**Type:** Severity miscalibration
**Location in report:** Category 3 check 3.6 (title)
**What's wrong:** The report FAILs check 3.6 with the reasoning that `Operator Impact` is "vague" and "a safe generic label." It then proposes `Governance Weight` but immediately correctly escalates to a Blocking Decision. The FAIL is appropriate — but the report's fix path ("Recommend flagging to Alison") is the right call, not a weakness. The issue is that check 3.6 per checks.mdx §3.6 requires "1–3 words, concept-derived, no banned forms." `Operator Impact` is 2 words and concept-derived (governance weight + sovereign compute = operator impact on the network). Whether it is too generic is a judgment call, not a schema failure. The FAIL may be a severity overcall — it should be a FLAG rather than a FAIL with a rename recommendation.

**What should have been said/done:** Record check 3.6 as FLAG (human decision required) rather than FAIL. Note that the title scope question is ambiguous and requires Alison's decision on whether to narrow or retain, before any rename is actioned. This is already handled correctly in Blocking Decision 1, but the FAIL in the check table overstates the severity of a judgment call.

---

## Findings That Are Safe to Act On As-Is

The following findings in the check report are accurate, cite correct line numbers, and have executable fixes:

1. **1.4** — `purpose: evaluation` is not a canonical value. Fix: change to `purpose: evaluate` on line 27. Safe.
2. **1.6** — `complexity` field missing. Fix: add `complexity: intermediate`. Safe.
3. **1.7** — `lifecycleStage` field missing. Fix: add `lifecycleStage: evaluate`. Safe.
4. **1.13** — `keywords` contains `livepeer` and `orchestrator` as generic weak terms. Fix: replace with more specific searcher-intent terms. Safe (suggested replacements are reasonable starting points).
5. **2.2 + Banned Scan confirmed flag 2** — `meaningfully` at line 213 (one occurrence only, in the accordion). Fix: remove the adverb. Safe.
6. **2.4 (partial) + Banned Scan confirmed flag 5** — `If the motivation case is clear,` at line 256 (not 258). Fix: delete the `If` opener sentence. Safe — but correct the line reference before executing.
7. **2.4 (partial) + Banned Scan confirmed flag 4** — `can access` at line 224. Fix: change to `accesses`. Safe.
8. **2.4 (partial) + Banned Scan confirmed flag 1** — `can support` at line 57. Fix: change to `supports`. Safe.
9. **6.5 + 8.6** — TODO comments at lines 32–43, 89, 280 should be in `{/* REVIEW: */}` format. Fix: convert format. Safe. (Use the specific REVIEW wording given in 6.5.)
10. **3.1 + 3.7** — `How Votes Work` (17/25) is the weakest heading and is a confirmed editorial problem. Rename to `LIP Voting Mechanics` is a good fix. Safe.
11. **3.3** — `Beyond Earnings: Sovereign Compute` uses contrast framing. Fix: rename to `Sovereign Compute`. Safe.
12. **3.1** — `Scope of Governance` (19/25). Rename to `Protocol Governance Coverage`. Safe.
13. **3.1** — `Practical Governance Participation` (19/25). Rename to `Governance Participation`. Safe.
14. **4.3** — PREV/NEXT navigation sequence is correct. No action needed.
15. **4.8** — Potential duplication with `network-participation` is a valid flag. Safe to flag for human review; do not auto-resolve.
16. **7.1** — Page confirmed in docs.json. No action needed.
17. **5.7** — `purpose: evaluation` is old-schema. Resolved by fix 1.4 above.
18. **Category 9 process findings** — correctly noted as expected pre-gate state. No action needed.

---

## Findings That Require Correction Before Acting

| Finding | Reason not to act as-is |
|---------|--------------------------|
| 2.2 "two occurrences of meaningfully" (line 192 + accordion) | `meaningfully` appears once only (line 213). Do not apply a second fix at line 192. |
| 2.1 result FAIL | Should be PASS. The Category 2 verdict count (4 failures) is already correct. |
| 2.4 `can be done` line 266 | Finding is real but absent from the scan table and fix list. Add to fixes independently. |
| 2.9 fix "determines the outcome" | Do not use — introduces unsourced claim. Use REVIEW flag instead. |
| 1.8 / 5.7 fix combination | `status: current` + `veracityStatus: unverified` is the incoherent state the report flagged. Resolve by also changing `status` or escalating as human decision. |
| 1.11 "160 chars (borderline)" | Description is 159 chars. Length concern is false. FAIL stands for structure only. |
| Banned Scan line 258 references | The `If` sentence is at line 256. Correct the line reference before executing. |
| Check 2.2 fix "line 214" | The sentence starts at line 213. Correct the line reference before executing. |
| 3.6 FAIL on title | Should be FLAG (human decision). Blocking Decision 1 correctly captures this; the check table overstates severity. |

---

## Summary Verdict

**CORRECT BEFORE USE**

The report is structurally complete, covers all 9 categories, correctly exempts `Related Pages` from heading scoring, and identifies the most significant real issues: the `purpose: evaluation` schema error, missing frontmatter fields, `meaningfully`, the `If` opener, and the TODO-vs-REVIEW format problem. The navigation analysis and the Category 7 PASS are correct. The heading scoring rationale is mostly sound, with `How Votes Work` (17/25) being a clear and well-argued FAIL.

However, the report contains fabricated line numbers (multiple), one fabricated second occurrence of `meaningfully`, a self-contradictory result in check 2.1, an internally inconsistent count (6 vs 7 Category 1 failures), a `can be done` finding that was named but never carried through the scan, a second `more than` instance that was missed, and a proposed fix for check 2.9 that introduces an unsourced assertion. The `status`/`veracityStatus` fix recommendation is also self-contradictory per the rule the report itself cited.

Do not act on the report mechanically without first correcting line references (2.2, 2.4, Banned Scan) and removing the false second occurrence of `meaningfully`.

---

_Meta-review generated: 2026-03-24 | Original report: operator-impact.md | Page reviewed: operator-impact.mdx_
