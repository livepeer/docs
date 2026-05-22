# Critical Review — `v2/orchestrators/resources/gpu-support.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/gpu-support.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated

---

## Overall Rating

NEEDS CORRECTION

The report is structurally sound and correctly identifies the major failure clusters: missing taxonomy fields, self-reference opener, `## See Also` banned heading, and uncited hardware figures. However, three corrections are required: check 8.6 must be reversed per P78 (TODO comment is not rendered content), check 6.5 is PASS not a silent omission (no REVIEW flags is different from wrong-format flags), and the P30 scan has a gap on Accordion title content given the page's component usage. Additionally, F-03 proposes `## Related Reference` as a heading fix which should be checked against the check 3.2 OK tier.

---

## Corrections Required

**Correction 1 — Check 8.6 must be PASS per P78**
- **Check finding:** Check 8.6 FAIL — "TODO block lines 28–50 in published source."
- **Correction:** Per P78, MDX comments (`{/* ... */}`) are not rendered in page output. They cannot constitute a check 8.6 failure ("No TODO/TBD/Coming Soon in published content"). Source file confirmed: the TODO block is at lines 28–50, entirely within `{/* TODO: ... */}` comment delimiters. This does not render. Check 8.6 must be PASS. The open TODO tasks are correctly flagged under checks 6.9, 9.1, 9.3, 9.4, 9.6 — those findings stand.
- **Rule:** P78
- **Impact on fail count:** -1 (remove 8.6 from FAIL list)

**Correction 2 — Check 6.5 is PASS, not a silent gap**
- **Check finding:** Check 6.5 result is PASS. Report states: "No REVIEW flags present (the TODO block is the review tracking mechanism — see 8.6)."
- **Correction:** The check 6.5 PASS result is correct: there are no incorrectly-formatted REVIEW flags. However the rationale is wrong. The TODO block is not "the review tracking mechanism" for check 6.5 purposes — P78 has already established it is a non-rendered MDX comment. The correct rationale for check 6.5 PASS is: no `{/* REVIEW: */}` flags are present at all (neither correctly formatted nor incorrectly formatted). The absence of REVIEW flags on unverified claims does not fail check 6.5 — it fails check 6.1 (every factual claim citable) and check 6.9 (open-ended research tasks). Check 6.5 tests format of REVIEW flags that are present. When none are present, check 6.5 is PASS (vacuously). The check 6.5 PASS result is correct; only the rationale needs correction.
- **Rule:** P61, P78
- **Impact on fail count:** No change (6.5 remains PASS).

**Correction 3 — F-03 heading proposal: `## Related Reference` needs check 3.2 validation**
- **Check finding:** F-03 proposes changing `## See Also` to `## Related Reference`. The report states: "`Related Reference` is not in the Banned list; passes check 3.2 — per P44 confirmed."
- **Correction:** Per checks.mdx §3.2, `Related` appears in the OK tier — "acceptable standalone when content warrants; `Related` as a section marker for link clusters is fine." `Reference` is not on any banned or avoid list. `Related Reference` as a compound is therefore OK tier. However, the check report proposed `## Related Reference` — this is arguably weaker than simply `## Related Resources` or just `## Related` (which is explicitly OK per checks.mdx and P55). The fix is valid but the simpler `## Related` would score the same or higher on the heading rubric. The P44 self-check (no banned words or constructions) passes. This is an editorial note, not a correction. The fix is acceptable.
- **Rule:** P44, P55
- **Impact on fail count:** No change.

**Correction 4 — P91: Page uses Tabs component; Tab content not explicitly scanned**
- **Check finding:** The Banned Construction Scan states "No em-dashes found in description field, H2/H3 headings, or body prose." The page uses `Tabs` and `Tab` components for the GPU selection section.
- **Correction:** Per P91, all content scans must include Tab labels and Tab content. The gpu-support.mdx source uses `<Tabs>` and `<Tab>` for GPU selection guidance. The check does not explicitly confirm Tab title labels and Tab body content were scanned for em-dashes and banned words. Source file line 317 is `## See Also` (confirmed). The Tab component labels are the workload type names — these are unlikely to contain em-dashes, but the scan must confirm this explicitly per P91. This is a scan completeness gap.
- **Rule:** P91
- **Impact on fail count:** No confirmed change. The scan should be explicitly confirmed as covering Tab content.

**Correction 5 — P96: `## See Also` is on the known-failing heading list**
- **Check finding:** The report scores `## See Also` as banned-tier in check 3.2 (correct). It is scored in the heading table (8/25 — correct as a ban-tier heading with near-zero scores).
- **Correction:** P96 identifies `## Related` as a known-failing pattern to scan for explicitly. `## See Also` is not on the P96 list — P96 lists `What happened`, `What just happened`, `Overview`, `Introduction`, `Summary`, `Next steps`, `Related`. However `See Also` is banned-tier per check 3.2 and was correctly caught. P96 compliance is satisfied by the check 3.2 detection. The check correctly scores and flags it. No issue.
- **Rule:** P96
- **Impact on fail count:** No change.

**Correction 6 — P84 atomicity: F-01 fix splits `status` change and `veracityStatus` addition**
- **Check finding:** F-01 adds `veracityStatus: unverified` and also changes `status: review` to `status: draft` in the same fix block.
- **Correction:** Source file shows `status: review` (not `status: current`). This is a wrong-enum case (P90 applies: `status: published` → wrong-enum; same logic applies to `status: review`). The atomic fix per P84/P90 is: change `status: review` to `status: draft` AND add `veracityStatus: unverified` together. F-01 does combine both changes in a single fix item. This is atomic and compliant with P84.
- **Rule:** P84, P90
- **Impact on fail count:** No change.

---

## Corrected Fail Count

**Original report fail count:** 24
**Adjustments:** -1 removal (8.6)
**Corrected fail count:** 23
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.2, 5.7, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3, 9.4, 9.6

---

## New Findings (gaps from older learnings version)

**P90 — `status: review` is a wrong-enum error:** The report handles this correctly in check 1.8 (treats as non-canonical, fixes to `status: draft`). P90 is explicitly about `status: published` but the same wrong-enum logic applies to any non-`current`/non-`draft` value. The report's approach is correct.

**P91 — Tab content scan not confirmed:** As noted in Correction 4. The page uses Tabs for GPU selection guidance. The scan confirmation statement should explicitly include Tab label and Tab body text. No violations were expected, but explicit confirmation is required.

**P92 — No `purpose: guide` wrong-field error:** The `purpose` field is `reference` (canonical). No P92 issue.

**P93 — No false positive contradictions flagged:** The veracity findings are well-sourced with appropriate NOT-TESTED labels. No apparent false positives. P93 compliant.

**P94 — docs.json check performed:** Report header confirms docs.json line 2978, Technical Reference group. No navigation orphan. P94 satisfied.

**P95 — VRAM figure overlap with adjacent pages:** The check does not raise a BD for VRAM figures that appear across multiple pages (P88 asks for cross-page VRAM grouping). The gpu-support.mdx covers SDXL at ~7 GB and LLM inference at 8 GB min. These figures likely appear in `model-demand-reference.mdx` as well. Per P88, when the same model VRAM figure appears on multiple pages, a joint-verification note should be added. This is a gap in the check report: it should note "Joint verification opportunity: SDXL, LLM, Real-time AI VRAM figures — check whether same figures appear on model-demand-reference.mdx."
This is a missing finding and should be added as an INFO-level note.

**P96 — No known-failing heading patterns present:** Source headings confirmed: `Supported GPU Families`, `NVENC Session Limits`, `Removing the Session Limit`, `CUDA and Driver Requirements`, `Checking Your Versions`, `VRAM Requirements by Workload`, `GPU Selection Guidance`, `See Also`. None match the P96 list beyond `See Also` (which is a check 3.2 ban-tier failure, correctly caught). `Checking Your Versions` and `GPU Selection Guidance` are sub-threshold on rubric (correctly flagged as check 3.1 failures).

---

## Proposed Learnings

**New pattern — P88 cross-page VRAM joint verification gap in resource pages:**
When a resource page (pageType: reference) documents VRAM requirements for named AI models (SDXL, LLM, ComfyStream, SAM2), the check report should query whether these figures appear on adjacent workload pages (model-demand-reference, capacity-planning) and flag a joint-verification opportunity per P88. The current p88 rule is targeted at batch-run check reports; extend it to single-page checks that cover technical figures also documented in sibling pages.
