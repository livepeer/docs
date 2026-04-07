# Review of Check Report — `v2/orchestrators/quickstart/tutorial.mdx`

**Date:** 2026-03-24
**Reviewer:** Meta-review agent
**Report reviewed:** `check/quickstart/tutorial.md`

---

## Summary

9 issues found across the check report. 4 are process issues where the checker invents rules or cites the framework inaccurately. 2 are false positives that should be downgraded or removed. 2 are missed findings. 1 is a severity miscalibration that introduces a contradictory fix. The nav-position finding (4.3/7.5) and all frontmatter findings are correct and safe to act on. The Category 3 findings require correction before use.

---

### Issue 1
**Type:** False positive
**Location in report:** Category 3, check 3.2 and check 3.4
**What's wrong:** The checker FAILs check 3.2 by asserting that `Tutorial` is in the "banned/weak tier" per checks.mdx §3.2. That section lists Banned terms as: `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`. `Tutorial` does not appear in that list, or in the Avoid tier list (`Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`). The checker invents this by referencing a "§3.2 discussion" — that wording does not exist in checks.mdx. The actual rule in check 3.4 (domain-anchor) is a legitimate concern for `sidebarTitle: Tutorial` standing alone. However, the 3.2 FAIL is a false positive based on fabricated rule text.
**What should have been said/done:** Check 3.2 should be PASS (or at worst N/A — no banned terms appear). Check 3.4 FAIL is still valid and correctly identified. The heading score table scoring is also valid. The Category 3 verdict (FAIL) survives on check 3.4 and check 3.6 alone; the 3.2 FAIL citation should be removed.

---

### Issue 2
**Type:** Process issue — invented rule citation
**Location in report:** Category 3, check 3.2
**What's wrong:** The checker writes: "Title `Quickstart Tutorial` — `Tutorial` is listed in checks.mdx §3.2 discussion as a term in the banned/weak tier." No such discussion or listing exists in checks.mdx §3.2. The checker has produced a plausible-sounding citation for a rule that is not written anywhere in the framework.
**What should have been said/done:** Do not cite framework sections that do not contain the stated content. If the checker's editorial judgement is that `Tutorial` is a weak standalone heading term, that judgement should be stated as editorial opinion, not as a framework citation. The finding is directionally reasonable but cannot be actioned as a schema violation.

---

### Issue 3
**Type:** Vague fix introducing a banned term
**Location in report:** Category 5, check 5.2 — Fix item 3
**What's wrong:** The proposed fix states: "Add an explicit Prerequisites section (even if minimal: `Hardware requirements met` linking to requirements page; Docker installed; basic CLI familiarity)" and "Add an explicit Next Steps section." `Next Steps` appears in the Avoid tier of checks.mdx §3.2: "Avoid (flag, suggest stronger): `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`." The fix for a layout check (5.2) proposes a heading that fails the section naming check (3.2). Additionally, the component matrix at checks.mdx §5 says `tutorial` requires "Prerequisites, Steps, Next Steps" as section labels — but what heading text to actually use for those sections is not prescribed. The fix proposes a weak heading term without noting the conflict.
**What should have been said/done:** Fixes for required sections must not introduce terms from the Avoid list. The fix should say: "Add a section serving the Next Steps function — apply section-naming rubric to choose a strong heading. `Next Steps` is in the Avoid tier (checks.mdx §3.2)." Same caution applies to `Prerequisites` — that term is in the OK tier per checks.mdx and is safe.

---

### Issue 4
**Type:** Severity miscalibration
**Location in report:** Category 1, check 1.4 — `purpose: start`
**What's wrong:** The checker asserts `start` as the correct purpose value because the page represents "the shortest guided path … to successful off-chain smoke test." However, this page has no steps of its own. It is a sequencer that routes the reader to three other pages. It does not take the reader from zero to working state itself — it tells them where to go to achieve that. The `orient` purpose ("help the reader navigate to the right resource") is a closer match than `start` ("get the reader to a working state"). The checker does not consider `orient` at all.
**What should have been said/done:** The checker should have flagged the ambiguity between `orient` and `start` and noted that the answer depends on the nav-position decision (Blocking Decision 1). If the page is redesigned as a post-smoke-test synthesis page (Option B in the blocking decision), neither `start` nor `orient` applies — `verify` or `orient` would. The `purpose` recommendation should be presented as conditional on the nav decision, not as a firm recommendation.

---

### Issue 5
**Type:** Missed finding
**Location in report:** Category 2, check 2.3
**What's wrong:** The checker correctly identifies the Tip body as a banned-phrase pattern violation. It does not flag the body prose at line 26: `"Move through the quickstart in this order:"` — this is a self-referential direction sentence that describes what the following content does ("move through X"). It is a meta-description of structure rather than an opening content statement. It matches the pattern of "This page covers..." at a softer register. This also weakens the page open (check 2.5) independently of the Tip.
**What should have been said/done:** Flag line 26 (`"Move through the quickstart in this order:"`) as a structural label masquerading as an opening statement. The content starts with the numbered list — the label sentence is deletable. Document under check 2.3 or 2.5 alongside the Tip finding.

---

### Issue 6
**Type:** False positive
**Location in report:** Category 2, check 2.3
**What's wrong:** The checker cites checks.mdx §2.3 for the Tip violation. The actual §2.3 banned phrases are explicit: "This section covers", "This page covers/explains/walks you through", etc. "Use this tutorial when you want" does not appear in the list. The checker acknowledges this with "While not exactly a listed banned phrase, it matches the pattern." The issue is that the check is then recorded as a §2.3 FAIL in the check table and verdict count, when it is more accurately a §2.4 violation (self-reference construction + conditional). The §2.3 FAIL is a false positive; the §2.4 FAIL on the same text is a correct finding.
**What should have been said/done:** Remove the §2.3 citation for the Tip text. Keep the §2.4 finding which is correctly grounded. The Category 2 verdict (FAIL) survives on 2.4, 2.5, and 2.10. The FAIL count in the category narrative should read 3 failing checks, not 4 — or the report should clearly state that 2.3 and 2.4 fire on the same text, and the 4-count includes both citations of the same violation.

---

### Issue 7
**Type:** Missed finding
**Location in report:** Category 1, check 1.1 — frontmatter field count
**What's wrong:** The report states "Missing required fields (4): `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`." checks.mdx §1.1 lists 10 required fields: `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG image block. The checker counted 4 missing fields but did not note that `keywords` IS present (verified against actual file lines 5–10) and the OG image block IS present (lines 11–15). That accounting is correct. However, checks.mdx §1.2 specifies that when `pageType` is a deprecated 12-type value, `pageVariant` must also be set. `tutorial` is a valid 7-type value, so no `pageVariant` is required — the checker correctly marks 1.3 as N/A. No issue with the count itself.

**Correction:** Issue 7 is withdrawn after verification. Field count is accurate.

---

### Issue 8
**Type:** Process issue — line references inconsistent
**Location in report:** Category 2 header block "Body prose to scan (lines 22–34)"
**What's wrong:** The quoted prose block in the Category 2 header begins with the Tip text as if it starts at line 22, but lines 22 and 24 are the `<Tip>` and `</Tip>` tags — the Tip body text is on line 23. The numbered list content that follows appears at lines 26–30, and the Note content appears at lines 32–34 (line 32 is `<Note>`, line 33 is the Note body text, line 34 is `</Note>`). The checker's per-row line citations in the Banned Construction Scan table are accurate (line 23 for Tip text, line 30 for Step 3, line 33 for Note body). The inconsistency is only in the header claim that the block runs "lines 22–34" — that includes the component tags, which are structural MDX, not body prose. This is a minor labelling imprecision, not an actionable error, but it could cause confusion when using the line references for edits.
**What should have been said/done:** The body prose range should specify which lines are actual prose vs component wrapper tags. Cite line 23 (Tip prose), lines 26–30 (body + list items), line 33 (Note prose) as the prose lines.

---

### Issue 9
**Type:** Severity miscalibration
**Location in report:** Category 4, check 4.3 and Cross-Category Connections, Root Cause 2
**What's wrong:** The finding that the tutorial sits after the pages it sequences is correct. The proposed fix — move tutorial to position 2 (guide → tutorial → video-transcoding → AI-prompt-start) — is presented as if it is the obvious correct action. But the checker's own Blocking Decision 1 presents two options (A: reorder, B: redesign). The check 4.3 result column says only FAIL and the narrative pushes strongly toward Option A, while the Blocking Decisions section presents both options neutrally. The Cross-Category Connections section (Root Cause 2) again presents only Option A. This internal inconsistency means the report effectively recommends Option A in two places and presents both options as equal only in the blocking decision section. Severity: the nav-position issue is real, but the preferred resolution direction in the report is asserted rather than recommended, which could lead to the fix being applied without the human decision the checker itself flags as required.
**What should have been said/done:** The check 4.3 detail text and Root Cause 2 fix block should say "see Blocking Decision 1 — human decision required before implementing fix" and not advocate for Option A in the detail narrative. Both options affect content, not just docs.json. Option A requires verifying the tutorial content is coherent to a reader who has NOT yet run the smoke test (currently it assumes they haven't); Option B requires a content rewrite.

---

## Verdict Summary

**Summary verdict: CORRECT BEFORE USE**

The report contains real findings that are correctly identified (frontmatter gaps, nav position, Tip opener construction, missing Steps component). However, it also contains fabricated rule citations (Issue 1/2), a fix that introduces a term from the Avoid list (Issue 3), a missed finding (Issue 5), a duplicated violation miscounted in the category verdict (Issue 6), and two places where human-decision-gated fixes are presented as straightforward corrections (Issues 4 and 9).

**Safe to act on as-is:**

- All Category 1 frontmatter additions: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` — field names and presence verdict are correct (note: `purpose` value should be treated as provisional pending nav decision)
- `status: current` → `status: draft` recommendation (correct per checks.mdx §1.8)
- `description` rewrite recommendation (check 1.11 — correct finding, proposed fix is usable)
- Fix for Step 3 at line 30: replace "when you want" with direct imperative (check 2.4 — correct)
- All link verifications in Category 8 (confirmed against docs.json)
- Missing `<Steps>` component finding (check 5.5 — correct)
- Nav-position finding (checks 4.3 and 7.5) as a finding — but do not execute the docs.json reorder without Alison's decision on Option A vs B

**Do not act on without correction:**

- Category 3 check 3.2 FAIL — remove the §3.2 citation for `Tutorial`; 3.4 and 3.6 FAILs stand independently
- `purpose: start` assignment — treat as provisional; flag `orient` as an alternative pending nav decision
- "Next Steps" as a section heading in the fix for check 5.2 — requires heading rename that avoids the Avoid tier
- Category 2 verdict count of "4 checks fail" — should be noted as 3 independent check failures (2.3 and 2.4 fire on the same text)
