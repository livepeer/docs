# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/staking-and-rewards/network-participation.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating
NEEDS REWORK

---

## Issues Found

### Issue 1: `## Related` flagged as check 3.2 violation — false positive (checks.mdx §3.2 OK tier)
**Severity:** HIGH
**Check affected:** 3.2, 3.7, Heading Score Table, Fix List F-07, Verdict count
**Finding in original:**
- Heading Score Table: `Related` scored at 11/25 — FAIL
- Check 3.2: "Line 262: `## Summary` — `Summary` is in the Avoid tier (check 3.2). See F-06" — check 3.2 FAIL
- Check 3.7: "`## Summary` and `## Related` are generic structural labels. See F-06, F-07"
- Fix List F-07: "Rename to `## Related Pages` — confirm before applying"
- Heading Score Table note: "`Related` alone does not appear in check 3.2's OK tier explicitly, but it is weaker than `Related Pages`..."

**What is wrong:** checks.mdx §3.2 (read at line 96) explicitly lists `Related` in the **OK tier**: `**OK**: Types, Modes, Profiles, Prerequisites, Configuration, Setup, Resources, Related, etc.` This is the canonical definition. `Related` passes check 3.2. The checker's statement that "`Related` alone does not appear in check 3.2's OK tier explicitly" is factually wrong — it appears explicitly.

P53 clarifies that the heading exemption (making a heading invisible to all checks) applies only to `Related Pages`. This does not mean `Related` is prohibited or even Avoid-tier — it means `Related` must be scored (check 3.1) and assessed (checks 3.2/3.7) like any heading. When scored, `Related` passes check 3.2 because it is in the OK tier.

Two downstream errors follow:
1. Check 3.2 FAIL is overstated. Check 3.2 fails only for `## Summary` (Avoid tier). `## Related` does not contribute to the 3.2 failure.
2. Fix F-07 recommends renaming `## Related` to `## Related Pages`. This is wrong: renaming to `Related Pages` converts an OK heading to the exempt structural heading — the approved structural element should only appear when that is the actual intent. Since the page already has a functional `CardGroup` under `## Related` serving a related-pages role, confirming it as the exempt structural element may be appropriate — but the recommendation must be based on intent, not on the false claim that `Related` is non-compliant.

The check 3.1 score (11/25) is a separate and potentially legitimate finding: `Related` as a heading may genuinely score low on precision and depth. But that is a check 3.1 issue, not a 3.2 violation. The check 3.1 failure for `## Related` can stand if the score is correct. Check 3.7 finding that `## Related` is a generic label is also independently assessable — but it cannot cite check 3.2 as the basis.

**Correction:**
- Check 3.2 result stays FAIL (for `## Summary` only). The detail must remove all reference to `## Related` as a 3.2 violation.
- Check 3.7 FAIL can remain (two generic labels: `## Summary` and `## Related`) but must not claim either violates check 3.2. The 3.7 basis is editorial judgment, not prohibited tier.
- F-07 must be rewritten. Options: (a) If the intent is that this is the footer navigation CardGroup serving the approved structural role, rename to `## Related Pages` is valid — but the rationale changes from "compliance fix" to "adopt the approved structural element." (b) If the heading should score better, propose a more descriptive name (e.g. `## Further Reading`). However, `Further Reading` is Avoid-tier per checks.mdx §3.2. `Related` itself passes — a no-change option is also valid for 3.2 compliance.
- The Heading Score Table note about OK tier must be corrected to accurately cite checks.mdx §3.2.

---

### Issue 2: v1 image paths — cited path format verified correct, but risk assessment needs precision
**Severity:** LOW (process note only)
**Check affected:** 8.4
**Finding in original:** "Static image references at lines 121, 126, 131: `/v1/images/poll.png`, `/v1/images/vote-livepeer-cli.png`, `/v1/images/vote-livepeer-cli-instructions.png` — these are v1 image paths. NOT-TESTED: not verified that these files exist. If v1 images are not served in v2 context, these will 404. Risk: HIGH."

**What is correct:** The source file at lines 120, 126, and 131 (off by 1 from cited lines 121/126/131 — minor) confirms the paths:
- Line 120: `![Livepeer Explorer voting page showing an active poll](/v1/images/poll.png)`
- Line 126: `![Explorer livepeer_cli vote call-to-action](/v1/images/vote-livepeer-cli.png)`
- Line 131: `![livepeer_cli voting instructions from Explorer](/v1/images/vote-livepeer-cli-instructions.png)`

The paths are cited correctly. The NOT-TESTED / Risk: HIGH assessment is appropriate — file existence was not verified. The off-by-one in line numbers (121 vs 120, 131 vs 131 correct) is negligible. The finding is substantively correct. No change needed beyond noting the minor line number imprecision.

---

### Issue 3: F-08 is not a fix — phantom finding in the Fix List (P34)
**Severity:** MEDIUM
**Check affected:** Fix List / P34
**Finding in original:** `F-08 | Line 301 (link) | /v2/lpt/governance/overview — verified in docs.json line 3029 | No action required — link is valid`

**What is wrong:** F-08 concludes "No action required." A Fix List entry that resolves to no action is a phantom finding. Per P34, a finding raised in the check category section must appear in all applicable report sections or be explicitly closed. The 4.4 check raised this link as potentially broken, then the Fix List closes it with "no action." The correct approach is to close the finding in check 4.4 itself (marking the link valid with the docs.json citation) and not include it in the Fix List at all. Including a "no action required" entry in the Fix List creates ambiguity for an executing agent.

**Correction:** Remove F-08 from the Fix List. In check 4.4, update the detail to state: `/v2/lpt/governance/overview` confirmed valid at docs.json line 3029 — not a dead end. Renumber F-09 through F-15 to F-08 through F-14.

---

### Issue 4: Check 3.2 detail conflates two headings — Summary is the actual violation
**Severity:** MEDIUM
**Check affected:** 3.2
**Finding in original:** Check 3.2 FAIL detail: "Line 262: `## Summary` — `Summary` is in the Avoid tier (check 3.2). See F-06"

**What is correct:** The check 3.2 detail correctly identifies `## Summary` as the violation. The check 3.7 detail then adds `## Related` alongside `## Summary`. As noted in Issue 1, `## Related` passes check 3.2. The check 3.2 FAIL entry itself is correct (Summary only). The problem is check 3.7 and F-07 — not the check 3.2 row. Check 3.2 detail row is accurate.

---

### Issue 5: Em-dash in description field not flagged (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 / Banned Construction Scan
**Finding in original:** The Banned Construction Scan scope statement says scope includes "frontmatter description." No em-dash was found in the description.
**What is wrong:** The frontmatter description (lines 4–8 of the source file) contains an em-dash:
`How Livepeer protocol governance works and how orchestrators vote on Livepeer Improvement Proposals (LIPs) — finding polls, voting via livepeer_cli, verifying your vote on Explorer, and where to follow active proposals.`
P30 covers the frontmatter description field. This is a missed violation. The description is also over 160 chars (a separately flagged F-01) — the replacement proposed in F-01 should also be checked for em-dashes.
**Correction:** F-04 (em-dashes) must be extended to include the description field. The proposed description shortening in F-01 must also avoid em-dashes. The proposed replacement in F-01: `How orchestrators vote on Livepeer Improvement Proposals — finding polls, voting via livepeer_cli, verifying your vote, and tracking active governance.` — this also contains an em-dash and would be non-compliant. F-01 fix must use a colon or restructure rather than an em-dash.

---

### Issue 6: P39 — veracityStatus fix is internally consistent
**Severity:** N/A — confirming correctness
**Check affected:** 1.8
**Finding in original:** Recommends adding `veracityStatus: unverified` to a page with `status: published`.
**What is correct:** P39 applies to `status: current`. The file uses `status: published`. No P39 constraint is violated. The fix is correct.

---

### Issue 7: Verdict count may need adjustment
**Severity:** MEDIUM
**Check affected:** Verdict / P49
**Finding in original:** "26 checks fail (1 BORDERLINE): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.4, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 8.4, 9.1"

**What is wrong:** Check 3.2 should reflect only one violation (`## Summary`). However, the check 3.2 row does cite only `## Summary`. The 3.2 FAIL entry in the verdict is therefore technically supportable from the check 3.2 row even if check 3.7 erroneously also cited `## Related`. The total count of 26 includes check 3.2 as a FAIL — which is correct (Summary is Avoid-tier). The count remains 26 regardless of the `Related` error.

However, if F-07 is removed/corrected (Issue 3 — phantom F-08), the Fix List changes. The verdict fail count is not affected by removing a phantom fix entry.

**Adjusted count:** 26 checks fail remains correct. The failing check IDs are accurate — check 3.2 correctly fails for `## Summary`. The `Related` error affects F-07 framing and check 3.7 detail, not the check 3.2 result row or the count.

---

## Confirmed Correct Findings

- P41 (industry/niche): Both flagged as FAIL with concrete proposed values. Correct.
- P15 (purpose read directly): `purpose: guide` read from frontmatter directly. Correct.
- P37 (purpose: guide characterised as wrong-field error): Correctly characterised as "valid pageType value placed in the purpose field" — not as deprecated alias. Correct. Both network-participation and reward-mechanics have this error and both are characterised correctly as type (b) wrong-field error per P37.
- P42 (pageVariant as co-fix): Listed as N/A with reason. Correct.
- P50 (valid pageType): `guide` is canonical 7-type; check 1.2 PASS. Correct.
- P51 (proposed values format): All frontmatter proposals follow "Proposed: `field: value` — confirm before applying". Correct.
- P29 (line numbers): v1 image paths cited at lines 121/126/131 — verified at 120/126/131, negligible off-by-one. Content matches. Substantively correct.
- P33 (broken link verification): `/v2/lpt/governance/overview` verified against docs.json line 3029. Correct process.
- P35 (findings against current state): All category findings evaluate current file state. Correct.
- P36 (severity levels): Only CRITICAL/HIGH/MEDIUM/INFO used. Correct.
- P43 (finding IDs): F-01 through F-15 are unique and sequential. Correct.
- P44 (fixes don't introduce violations): CC-2 proposed fix for line 37 removes self-reference cleanly. CC-3 em-dash fixes are clean. Note: F-01 proposed description replacement contains an em-dash — see Issue 5 above.
- P45 (one canonical fix per finding): Each finding has one fix. Correct.
- P46 (`not [X]` under 2.4): No `not [X]` constructions were flagged under check 2.2. Correct categorisation.
- P48 (step titles in scope): Accordion title prop at line 265 (`title="Quick reference — voting checklist"`) correctly included in the em-dash scan. Correct.
- P52 (INFO rows neutral): Category 9 INFO rows do not prejudge blocking decisions. Correct.
- P54 (check 2.1 UK English only): Check 2.1 covers only UK/US spelling differences. Correct.

---

## Corrected Verdict

**Rating:** NEEDS REWORK — one significant false positive (check 3.2 / F-07 on `## Related`) and one phantom fix entry (F-08), plus em-dash missed in description field.

**Corrected fail count:** 26 checks fail (count unchanged): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.4, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 8.4, 9.1

**Required corrections before this report is used for remediation:**
1. Remove `## Related` from check 3.2 violation basis and from check 3.7 co-citation. Check 3.2 fails only for `## Summary`.
2. Rewrite F-07: either confirm `## Related` adopts the approved `Related Pages` structural role (if that is the intent) or remove the fix. Do not recommend rename based on a false 3.2 violation.
3. Remove F-08 from the Fix List (phantom no-action entry). Close the link finding in check 4.4 directly.
4. Extend F-04 (em-dashes) to cover the description field em-dash.
5. Revise F-01 proposed description text: the replacement `How orchestrators vote on Livepeer Improvement Proposals — finding polls...` contains an em-dash. Replace with a colon or rewrite without dash.
