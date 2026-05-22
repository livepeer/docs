# Review of Check Report — delegate-operations.mdx

**File under review:** `v2/orchestrators/_workspace/canonical/check/guides/staking-and-rewards/delegate-operations.md`
**Source page:** `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Verdict:** CORRECT BEFORE USE

---

## Summary of Issues Found

10 issues identified: 3 significant errors that affect the reliability of the report, 4 process/execution issues, and 3 missed findings. No false positives detected — every finding the report raises is a real problem. The core findings (missing frontmatter fields, broken link, unverified claims, heading failures, purpose field error) are all correct and actionable.

---

## Issues

### Issue 1
**Type:** Process issue — self-consistency rule violated
**Location in report:** Verdict Summary (line 506)
**What's wrong:** The report states "FAIL count: 14" but immediately parenthesises 24 distinct check IDs: `1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13, 2.2, 2.4, 2.11, 3.1, 3.4, 3.7, 4.5, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3`. Counting the FAIL entries in all category check tables confirms 24 FAILs. The stated count of 14 is wrong by 10. `checks.mdx` line 489 requires: "verdict count matches the number of FAIL entries in the check table." This rule was not met. The discrepancy likely arose from counting findings (F-N.N) rather than check IDs — findings and checks are not 1:1.
**What should have been said/done:** The FAIL count in the Verdict Summary should read 24. The fix list and prioritised table can remain as-is (they are organised by finding, not by check count). The summary conclusion on line 528 also repeats "8 below threshold" for headings (see Issue 2) and should be corrected alongside this.

---

### Issue 2
**Type:** Process issue — self-consistency rule violated
**Location in report:** Check 3.1 table row (line 224) and Verdict Summary closing paragraph (line 528)
**What's wrong:** The check 3.1 table row says "8 headings below threshold" and lists 9 headings in its notes field. The closing verdict paragraph also says "8 below threshold." A count of FAIL rows in the heading score table confirms 9 headings scored below 20/25: Why delegators matter (16), What delegators actually evaluate (14), The four things delegators look at (10), Building reputation (16), Transparency (17), Running AI capabilities (18), The delegation mechanics... (12), Common pitfalls... (12), Resources to share (16). All 9 have corresponding F-3.1a through F-3.1i findings. The stated count is wrong by 1.
**What should have been said/done:** Check 3.1 table row and closing paragraph should both say "9 headings below threshold."

---

### Issue 3
**Type:** Process issue — incorrect characterisation of check 5.7
**Location in report:** Check 5.7 (line 266)
**What's wrong:** The report records check 5.7 as FAIL with the note: "`purpose: guide` is a 12-type pageType value used as a purpose value." This is factually incorrect. `guide` is not a 12-type deprecated pageType value — it is a valid current 7-type canonical pageType value (confirmed in `checks.mdx` check 1.2 and `Frameworks.mdx` §1.1). Check 5.7 covers "no 12-type pageType values, no deprecated purpose aliases, no old audience tokens." The error in the page is that `guide` appears in the `purpose` field, where it is semantically invalid — but the reason it is wrong is that `guide` is not a purpose value at all, not because it is deprecated. The real check is 1.4, which the report correctly identifies. Check 5.7 should either be N/A (no deprecated schema values present) or FAIL with the correct characterisation.
**What should have been said/done:** Check 5.7 should read: `FAIL | The \`purpose\` field contains a value (\`guide\`) that is not in the deprecated 7-type alias list but is being used in the wrong field — a \`pageType\` value has been placed in the \`purpose\` field. Root cause is the same as F-1.4. No additional fix required beyond the F-1.4 correction.` Alternatively, mark 5.7 as N/A if the interpretation is that 5.7 only catches deprecated schema values and this is already caught by 1.4.

---

### Issue 4
**Type:** Process issue — non-canonical severity level used
**Location in report:** Findings F-2.4b (line 91) and F-2.4c (line 418)
**What's wrong:** Both findings are logged with `Severity: LOW (borderline)`. The severity schema in `checks.mdx` (lines 499–508) defines exactly four levels: CRITICAL, HIGH, MEDIUM, INFO. There is no LOW level. Using an out-of-schema severity level creates ambiguity for any downstream agent or human acting on this report — they cannot map LOW to an action priority.
**What should have been said/done:** F-2.4b and F-2.4c should use `Severity: INFO` (the lowest defined level, meaning "document; no action required") since both are explicitly described as "borderline" and the report itself hedges on whether they are real issues. If the checker believes they need action but are minor, `Severity: MEDIUM` applies. Pick one canonical value and state it.

---

### Issue 5
**Type:** Process issue — check 4.7 assumes unconfirmed fix
**Location in report:** Check 4.7 (line 244)
**What's wrong:** Check 4.7 notes `purpose: operate (corrected from 'guide')` and evaluates permitted information types against `operate` purpose. At the time of check, the purpose value in the page is `guide` (invalid), and the correction to `operate` is a recommendation pending human sign-off (deferred item 3 in Blocking Decisions). The check should evaluate against the actual current state, not a proposed state. Evaluating against the corrected purpose is premature — it assumes the fix has been made and assumes `operate` is the confirmed value, not `optimise` (which the report itself identifies as an alternative).
**What should have been said/done:** Check 4.7 should either: (a) note NOT-TESTED pending resolution of F-1.4, since the correct information type mapping depends on knowing the final purpose value; or (b) evaluate against both candidate values (`operate` and `optimise`) and note that either produces a PASS with the same permitted types. The current framing presents a resolved decision as fact before it is resolved.

---

### Issue 6
**Type:** Missed finding
**Location in report:** Category 2 — Voice & Copy; Banned Constructions scan
**What's wrong:** The page contains em dashes at lines 112, 145, 245, 246, and in the frontmatter description (line 5). `CLAUDE.md` explicitly states: "No em dashes — rewrite or use hyphens." The banned constructions scan at lines 390–423 does not flag any of these. The report gives check 2.3 a PASS and does not mention em dashes anywhere in the report.

The em dash rule is stated in CLAUDE.md under the Voice section but is not explicitly listed in `checks.mdx` check 2.3's banned phrases list or check 2.4's banned constructions list. However, the check framework (`checks.mdx`) points to `Frameworks.mdx §2` for full voice rules, and CLAUDE.md is the governing project instruction. The checker should have applied the em dash prohibition from project instructions.
**What should have been said/done:** Flag 5 instances of em dashes as a check 2.4 or check 2.3 finding (whichever the checker determines is the correct category for punctuation prohibitions). Suggest replacement with a period, comma, or hyphen as appropriate per instance:
- Line 5 (description): `— what` → rewrite as a separate sentence or use a colon
- Line 112: `— and every` → replace with `, and every`
- Line 145: `— but they` → replace with `. They`
- Line 245: `— enter` → replace with `. Enter`
- Line 246: `— protocol-level` → replace with `, a protocol-level`

Severity for this finding: MEDIUM (voice rule violation, not blocking).

---

### Issue 7
**Type:** Missed finding
**Location in report:** Check 3.1 heading scores; also implicitly F-3.1a
**What's wrong:** Finding F-3.1a proposes renaming "Why delegators matter" to `Delegation Mechanics`. The page already contains an H2 heading at line 187: "The delegation mechanics (what delegators actually do)." Applying both F-3.1a (rename to `Delegation Mechanics`) and F-3.1g (rename to `Delegation Process`) simultaneously would result in: H2 `Delegation Mechanics` (section 1) and H2 `Delegation Process` (section 7). These two headings are semantically adjacent and easy to confuse — both read as "how delegation works." A reader scanning headings would not cleanly distinguish which section covers the flywheel mechanics versus the delegator's step-by-step process. The report does not flag this conflict.
**What should have been said/done:** Note the risk of name collision in F-3.1a. Either: (a) choose a more differentiated alternative for the "Why delegators matter" section that anchors to its actual content — the compounding stake flywheel — such as `Stake Compounding Flywheel` or `Delegation Value Flywheel`; or (b) flag that F-3.1a and F-3.1g should be resolved together and not independently applied. The suggested rename `Delegation Mechanics` should be replaced with one that does not risk confusion with the adjacent "Delegation Process" section.

---

### Issue 8
**Type:** Missed finding
**Location in report:** Check 2.5 — Opening order correct (line 70)
**What's wrong:** The report gives check 2.5 a PASS with the reasoning that "the factual opener is correct; only the trailing self-reference fails." Check 2.5 pass criteria state: "Introduction opens with subject, not caveat or self-reference." The introductory paragraph (line 36) ends with a self-reference sentence: "Use this page to understand why delegation matters, what delegators evaluate, how the Explorer yield calculation works, and what persuades delegators to stay." This sentence is part of the introduction. Check 2.5's criterion is about the introduction as a unit, not just the first sentence. The report correctly flags this as F-2.4a under check 2.4, but then marks 2.5 as PASS despite the same paragraph failing the "no self-reference" criterion of 2.5.

This is a borderline call — a reasonable interpretation is that 2.5 measures whether the paragraph *opens* with a subject (which it does), and the self-reference failure is properly owned by 2.4. However, the report's reasoning ("The factual opener is correct; only the trailing self-reference fails") acknowledges the trailing failure and still awards PASS without explaining why 2.5 does not also apply.
**What should have been said/done:** Either: (a) mark check 2.5 as FAIL with the same finding reference as F-2.4a, noting that the introductory paragraph contains a self-reference sentence regardless of opening position; or (b) mark 2.5 as PASS and add a note that the self-reference appears at the end of the intro paragraph (not the opening) and is fully captured by F-2.4a under check 2.4. The current PASS with incomplete reasoning is not wrong but is under-explained.

---

### Issue 9
**Type:** Severity miscalibration
**Location in report:** Finding F-6.4c — 7-day unbonding period (line 322)
**What's wrong:** The report rates F-6.4c as `Severity: HIGH`. However, it then cites `Frameworks.mdx §3.4` which identifies the unbonding period as a "high-staleness term" that must be verified against the BondingManager. The page says "approximately 7 days" — the word "approximately" already hedges the claim. Given the hedge, the risk of a reader acting on a wrong number is lower than a specific unhedged claim. The severity HIGH rating is appropriate for an unverified protocol parameter, but the fix proposed (`{/* REVIEW: ... */}` flag only) is appropriate for MEDIUM severity. If the claim is HIGH-severity, the fix should also include either removing the number until verified or replacing "approximately 7 days" with a live link to the BondingManager. The proposed fix (add a REVIEW comment) is too weak for the stated severity.
**What should have been said/done:** Either lower the severity to MEDIUM (matching the proposed fix level) or strengthen the fix to: "Replace `approximately 7 days` with a direct link: `[unbonding period](https://explorer.livepeer.org/protocol)` (BondingManager parameter, governance-settable). Remove the numeric claim until verified." The current mismatch between severity and fix makes the finding ambiguous to act on.

---

### Issue 10
**Type:** Missed finding
**Location in report:** Not flagged anywhere
**What's wrong:** The link text at line 246 reads `[v2/lpt/delegation]` — it displays a file path as the visible link text, not a human-readable label. The report's F-8.1 partially catches this: it correctly identifies the broken path and adds "Also fix the link text: `[v2/lpt/delegation]` displays a path, not readable text." However, this text-quality problem is logged only as a sub-bullet of F-8.1 and is not elevated as a separate finding or given its own severity. Link display text rendering as a raw path is a Category 8 (links and rendering) issue separate from whether the link resolves. If F-8.1 is fixed (path corrected) but the display text fix is not applied, the link will resolve but still display `v2/lpt/delegation` as visible text to readers.
**What should have been said/done:** Create a separate finding for the link text issue (or clearly label it as a distinct fix within F-8.1 with its own severity). Severity: MEDIUM. Fix: change `[v2/lpt/delegation](/v2/lpt/delegation/delegation-guide)` to `[LPT Delegation Guide](/v2/lpt/delegation/delegation-guide)` (or whichever path Alison confirms).

---

## Summary Verdict

**CORRECT BEFORE USE**

The report is substantively reliable — all findings it raises are real, the citations to `checks.mdx` rules are correct (with the exception of the 5.7 characterisation), and the fix suggestions for the actionable items are specific and executable. The failures are in self-consistency (FAIL count wrong, heading count wrong), severity schema compliance (non-canonical LOW level), one premature assumption (4.7 using unconfirmed purpose), and three missed findings (em dashes, heading name collision, link text).

**Safe to act on as-is** (findings are accurate and fixes are executable):
- F-1.4: purpose field correction
- F-1.6, F-1.7, F-1.8 (Root Cause C): missing frontmatter fields
- F-1.11: description length
- F-1.13: keyword quality
- F-2.2: `significantly` at line 149
- F-2.4a: delete "Use this page to understand..." sentence
- F-2.4c: delete "It's useful to understand..." sentence
- F-2.11: rewrite `rewardShare` as formula variable label
- F-2.11b: add `active set` definition after code block
- F-3.1b through F-3.1i: heading renames (all scores verified correct; all proposed names pass banned-term check) — **exclude F-3.1a until Issue 7 is resolved**
- F-3.4, F-3.7: domain-anchor and expert-editorial failures
- F-4.5: prerequisite note (requires Alison to confirm link)
- F-6.1a, F-6.1b, F-6.1c: REVIEW flags for unverified claims
- F-6.4a, F-6.4b, F-6.4d: REVIEW flags for unsourced numbers
- Root Cause B: insert REVIEW flags
- F-8.1: fix broken link path (requires Alison to confirm target)

**Requires correction before acting on:**
- Issue 1: FAIL count (stated 14, actual 24)
- Issue 2: heading FAIL count (stated 8, actual 9)
- Issue 3: check 5.7 characterisation (reframe or mark N/A)
- Issue 4: F-2.4b and F-2.4c severity (change LOW to INFO or MEDIUM)
- Issue 5: check 4.7 (mark NOT-TESTED or evaluate against both purpose candidates)
- Issue 7: F-3.1a rename proposal (find alternative to `Delegation Mechanics`)
- Issue 9: F-6.4c (align severity and fix strength)

**New findings to add:**
- Issue 6: em dash instances at lines 112, 145, 245, 246, and description
- Issue 10: link display text at line 246 (separate from path resolution)
