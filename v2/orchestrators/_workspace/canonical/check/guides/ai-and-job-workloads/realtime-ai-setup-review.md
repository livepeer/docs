# Critical Review of Check Report

**Report under review:** `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/realtime-ai-setup.md`
**Original page:** `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
**Review date:** 2026-03-24
**Reviewer:** Claude Code (critical review agent)

---

## Issues Found

### Issue 1
**Type:** False positive + Vague fix
**Location in report:** Category 1, check 1.11 (description length); frontmatter table row for `description`
**What's wrong:** The report states the description is 188 characters. The actual character count is 212 (including the em-dash as a single Unicode character, matching how browsers and validators count it). The report then proposes two fixes: "Fix 1" is presented as 163 chars (actually 169 chars) and implied to be compliant. At 169 chars it still exceeds the 160-char limit. Only Fix 2 (claimed 144 chars, actual 144 chars) is genuinely compliant.
**What should have been said/done:** Cite the correct character count of 212. Flag that Fix 1 (169 chars) is itself non-compliant. Direct the executor to Fix 2 only: `Deploy the live-video-to-video Cascade pipeline — ComfyStream setup, WebRTC streaming, VRAM planning, and custom Pipeline interface development.` (144 chars).

---

### Issue 2
**Type:** False positive
**Location in report:** Category 2, check 2.11 (Terminology locked and consistent)
**What's wrong:** The report states "Line 172 mentions `BYOC` in a bold list item `**Compatible model types:**` context — does not define it." BYOC does not appear at line 172 of the page. Line 172 reads: `Any ComfyUI-compatible model loaded as a DAG node`. BYOC appears only once in the file — in the `keywords` field at line 19 (`- byoc pipeline`). It is never used in the page body. There is no BYOC first-use definition violation because there is no BYOC first use in the body.
**What should have been said/done:** Remove this finding entirely. The BYOC rule (define at first use on every page) is not triggered because BYOC does not appear in the body text. The check should note: "BYOC not present in page body — no first-use definition required."

---

### Issue 3
**Type:** Process issue
**Location in report:** Category 2, checks 2.1 and 2.2 (result columns)
**What's wrong:** Check 2.1 has `FAIL` in the result column, but the finding concludes "PASS." Check 2.2 has `FAIL` in the result column, but the finding concludes "PASS." Both checks were self-corrected within the detail text but the result column was not updated to match. This creates misleading data: a reader scanning the results table will count two extra FAILs that the checker's own analysis determined do not exist.
**What should have been said/done:** Check 2.1 result column: `PASS`. Check 2.2 result column: `PASS`. The report should not show contradictory result columns. If a check is re-assessed mid-finding, the result column must reflect the final determination.

---

### Issue 4
**Type:** Process issue
**Location in report:** Category 3, check 3.6 (result column)
**What's wrong:** Check 3.6 has `FAIL` in the result column, but the detail text explicitly states "Re-classifying 3.6 as PASS." The result column was not updated to reflect the re-classification.
**What should have been said/done:** Check 3.6 result column: `PASS`. Same pattern as Issue 3 — the result column must be reconciled with the final determination in the detail text.

---

### Issue 5
**Type:** Process issue
**Location in report:** Category 3, check 3.1 detail text (cross-referenced against Heading Score Table)
**What's wrong:** The check 3.1 narrative cites three heading scores that contradict the Heading Score Table in the same report. Specifically:
- `What Cascade is`: 3.1 says 16/25; score table gives dimension scores 2+2+3+3+3 = **13/25**
- `How it differs from batch AI`: 3.1 says 14/25; score table gives 2+2+3+3+2 = **12/25**
- `ComfyUI workflow for StreamDiffusion`: 3.1 says 17/25; score table gives 3+3+3+3+4 = **16/25**

The Heading Score Table dimension arithmetic is correct in all three cases. The 3.1 narrative was written in an earlier pass and never reconciled with the score table. The score table values are the reliable ones.
**What should have been said/done:** The 3.1 narrative must cite the same totals as the score table: 13, 12, and 16 respectively. The score table is the canonical record; narrative text must reference it rather than carrying independent values.

---

### Issue 6
**Type:** Process issue
**Location in report:** Category 3, check 3.3 (no literal contrast labels)
**What's wrong:** The report applies check 3.3 ("No `X vs Y` headings") to the heading `How it differs from batch AI`. That heading is not an `X vs Y` pattern — it uses a documentation-task framing ("How it differs...") rather than a literal side-by-side label. The rule as written in checks.mdx §3.3 says: "No `X vs Y` headings — name the governing concept instead." `X vs Y` is a structural format; `How it differs from batch AI` is a verb-phrase FAQ framing. The checker applied the rule to a pattern it was not written to cover.
**What should have been said/done:** Cite check 3.5 (heading names the documentation task, not the concept) and check 3.7 (FAQ-style framing does not sound like expert editorial choice) instead of 3.3. The rename conclusion (`Inference Model` or similar) is correct. Only the rule citation is wrong. Amend the check 3.3 entry to PASS and move the finding to 3.5 and 3.7.

---

### Issue 7
**Type:** False positive (minor)
**Location in report:** Categories 4.3 and 7.1 (docs.json line numbers)
**What's wrong:** The report cites specific docs.json line numbers that are each off by one:
- 4.3: Report says PREV `llm-pipeline-setup` is at "line 2901". Actual: line 2900. Report says NEXT `audio-and-vision-pipelines` is at "line 2903". Actual: line 2902.
- 7.1: Report says the page entry is at "docs.json line 2902". Actual: line 2901.

The adjacency conclusions are correct (PREV=llm-pipeline-setup, NEXT=audio-and-vision-pipelines, page present in nav). Only the cited line numbers are wrong.
**What should have been said/done:** Cite line 2900 for PREV, line 2901 for the page itself, and line 2902 for NEXT. The adjacency and navigation conclusions may be acted upon as-is despite the line number errors.

---

### Issue 8
**Type:** False positive
**Location in report:** Category 8, check 8.1 (all internal links resolve)
**What's wrong:** The report flags `/v2/gateways/setup/configure/pricing-configuration` as "NOT-TESTED (path not confirmed in docs.json)" and contributes to a FAIL(partial) on check 8.1. The path is confirmed in docs.json at line 2628. The checker failed to locate it. The link is valid.
**What should have been said/done:** Mark `/v2/gateways/setup/configure/pricing-configuration` as PASS in 8.1. All four internal links referenced from this page resolve. Check 8.1 status should be PASS for the internal links actually verified; NOT-TESTED only applies to external links.

---

### Issue 9
**Type:** Missed finding
**Location in report:** Category 2, checks 2.3/2.4 (banned constructions); not mentioned anywhere in the report
**What's wrong:** The report notes in the Heading Score Table that two H2 headings use em-dash subtitle constructions: `ComfyStream — the live-video pipeline runtime` (line 154) and `StreamDiffusion — live-video diffusion models` (line 260). The report excuses these with: "Not a CLAUDE.md em-dash prohibition (that applies to body prose)." However, CLAUDE.md states: "No em dashes — rewrite or use hyphens" with no restriction to body prose. The prohibition is stated as a universal rule. The checker invented a body-prose exemption not present in CLAUDE.md.
**What should have been said/done:** Flag the em-dashes in headings at lines 154 and 260 as a check 2.3/2.4 violation. Proposed fix: replace `—` with a hyphen or restructure the heading. For example: `ComfyStream Runtime` (already the suggested rename) eliminates the em-dash as a side effect of the correct rename. No separate fix action needed if the heading renames are applied — but the violation should be logged correctly.

---

### Issue 10
**Type:** Vague fix
**Location in report:** Category 1, check 1.13 (keywords quality)
**What's wrong:** The fix states: "Remove `livepeer` and `orchestrator`. Replace with: `realtime-ai-setup livepeer orchestrator`". The replacement contains both `livepeer` and `orchestrator` — the same terms just flagged for removal. The intent is to combine them into a single multi-word search phrase rather than standalone single-word keywords, but the instruction as written is self-contradictory. An executor following the fix literally would be confused about whether to remove or retain these terms.
**What should have been said/done:** Rewrite the fix to be unambiguous: "Remove the standalone single-word entries `livepeer` and `orchestrator` from the keywords list. Add the compound phrase `realtime-ai-setup livepeer orchestrator` as a single keyword entry in their place." Alternatively, provide the complete replacement keywords block to avoid any ambiguity.

---

## Summary Verdict

**DO NOT USE AS-IS**

The report has ten issues: five false positives, four process issues (result columns not reconciled), and one missed finding. The most actionable errors are Issue 2 (invented BYOC violation at line 172 — no action needed there), Issue 8 (gateway link flagged as unverified is actually confirmed), and Issues 3–4 (inflated FAIL count from unreconciled result columns).

**Safe to act on as-is** (findings that are accurate and have executable fixes):

- Check 1.4: `purpose: guide` is not in the 15-value canonical set. Fix: `purpose: configure`. Correct and executable.
- Check 1.6: `complexity` field missing. Fix: `complexity: advanced`. Correct.
- Check 1.7: `lifecycleStage` field missing. Fix: `lifecycleStage: setup`. Correct.
- Check 1.8 / 6.6: `veracityStatus` missing. Fix: `veracityStatus: unverified`. Correct.
- Check 2.11: `Cascade` used before its H2 definition section; `ComfyUI` not formally defined. Both are arguable but reasonable flags to act on.
- Check 2.4 (Banned Construction Scan): Three confirmed fails — line 407 (`the latency difference is not`), line 438 (`depending on` without ranked list), line 506 (`This confirms`). All findings correct and fixes are executable.
- Check 3.1 / Heading Score Table: The dimension scores and totals in the score table are arithmetically correct. The 13 headings below 20/25 threshold are genuine fails. The rename suggestions are sound (subject to the naming conflict note for lines 44/129).
- Check 6.1, 6.2, 6.4, 6.5, 6.8, 6.9: Veracity flags are legitimate — procedural and technical content is unverified, inline REVIEW markers are missing from code blocks, and one REVIEW flag is open-ended. All findings are correct.
- Description length (1.11): The description exceeds 160 chars (actual: 212). The violation is real. Use **Fix 2 only**: `Deploy the live-video-to-video Cascade pipeline — ComfyStream setup, WebRTC streaming, VRAM planning, and custom Pipeline interface development.` (144 chars). Do not use Fix 1.
- Category 9 process findings (no human sign-off, gates not met): Accurate.

**Do not act on without correction:**

- Issue 2: BYOC finding at line 172 — remove entirely.
- Issue 8: Gateway link 8.1 finding — treat as PASS.
- Issues 3, 4: Disregard the FAIL markings in check 2.1, 2.2, and 3.6 result columns — all three are PASS.
- Issue 6: Check 3.3 finding on `How it differs from batch AI` — the rename is correct but 3.3 is the wrong rule. Do not cite 3.3 as the reason; cite 3.5 and 3.7.
- Issue 10: Follow the corrected keywords fix wording, not the as-written version.
