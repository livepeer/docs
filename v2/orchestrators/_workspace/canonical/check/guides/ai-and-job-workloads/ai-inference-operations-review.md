# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/ai-inference-operations.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Duplicate check 2.2 rows — self-correction left in report body (same pattern as workload-options)
**Severity:** MEDIUM
**Check affected:** 2.2 (P28)
**Finding in original:** Check 2.2 appears twice — first as FAIL with a long inline scan ("Line 215: 'Diffusion pipelines use the standard ai-runner Docker image' — no banned words here..."), then immediately corrected to PASS. The first FAIL row ends with "No banned words found — PASS. Correcting result" before the second row restates PASS.
**What is wrong:** Per P28, the result column must match the detail text conclusion. The first row's own detail concludes PASS but shows FAIL in the result column. The self-correction ("Correcting result") is present but the corrected row should replace the failed one, not appear alongside it. An executing agent reading the check table sees a FAIL row for 2.2, which is incorrect.

Additionally, the first row's scan mentions line 215: "Significantly more VRAM and compute-intensive than image-to-image." — this sentence begins with `Significantly`, which IS a banned word. The checker scanned it and concluded no banned word — this is wrong. The checker then lists F-27 in the Banned Construction Scan table: "Line 215: 'Significantly more VRAM and compute-intensive than image-to-image.' → `Significantly` is a banned word — YES — F-27." The word `Significantly` at line 215 is confirmed present in the source file (verified at line 215: "Significantly more VRAM and compute-intensive than image-to-image."). Check 2.2 should be FAIL for this banned word. The self-correction to PASS is itself incorrect.
**Correction:** Check 2.2 should be FAIL. Remove the corrected PASS row. Detail: "FAIL — Line 215 (Accordion body, image-to-video): 'Significantly more VRAM and compute-intensive than image-to-image.' — `Significantly` is a banned intensifier. Fix F-27: 'More VRAM and compute-intensive than image-to-image.' — confirm before applying." The check 2.2 FAIL must also be added to the verdict fail count.

---

### Issue 2: `status: published` — non-canonical value not flagged under check 1.2
**Severity:** HIGH
**Check affected:** 1.2 (P39, task brief)
**Finding in original:** Check 1.2: "PASS — `concept` is canonical"
**What is wrong:** Identical issue to workload-options.md (same source page pattern). The source file has `status: published` (confirmed: frontmatter line 27 shows `status: published`). Per the task brief, valid values for `status` are `current` and `draft`. `published` is an invalid value (P37 type c) and should be flagged. The report treats `status: published` only as INFO in the Frontmatter Table row, not as a FAIL check. This is a missing FAIL.
**Correction:** Flag `status: published` as an invalid-value error within check 1.8 (already FAIL) with explicit characterisation: "`status: published` is a non-canonical status value — valid values are `current` and `draft` (P37 type c: invalid value)." Add to the fix list.

---

### Issue 3: Broken link `/v2/gateways/resources/technical/orchestrator-offerings` — severity understated
**Severity:** HIGH
**Check affected:** 4.10, 7.6, 8.1 (P33, P47)
**Finding in original:** Check 4.10: "FAIL — Line 117: `href='/v2/gateways/resources/technical/orchestrator-offerings'` — this path DOES NOT appear in docs.json."
Check 7.6: "FAIL — Line 117: `href='/v2/gateways/resources/technical/orchestrator-offerings'` — path not found in docs.json."
Check 8.1: "FAIL — Line 117: not in docs.json. … Broken link — F-15."
**What is wrong:** The finding is correctly identified and the link is confirmed absent from docs.json. Verified independently: `grep` on docs.json returns no matches for `orchestrator-offerings`. The gateway resources/technical section in docs.json (lines 2741–2787) shows only: `technical-architecture`, `configuration-flags`, `contract-addresses`, `cli-commands`, AI API reference pages, CLI HTTP API reference pages, and Exchanges/RPCs pages. No `orchestrator-offerings` path exists anywhere in docs.json. This is a CRITICAL broken link — it is an in-body cross-tab link that will 404 for users. The report correctly flags it as FAIL across three checks (4.10, 7.6, 8.1) with F-15 as the fix label. The proposed fix (`/v2/gateways/setup/connect/discover-offerings`) requires confirmation. The finding is correctly handled. The task brief asks to verify this and notes "should be CRITICAL if confirmed absent" — the check report uses FAIL (not CRITICAL severity level on the finding). The report does call it a "blocking pre-publication issue" in the Verdict, which is appropriate.

Note on severity: The four valid severity levels per P36 are CRITICAL/HIGH/MEDIUM/INFO. The report uses these levels in its Prioritised Fix List (not shown in the check report body directly). The report does not use a Prioritised Fix List format. This is not a structural error since the report format for this batch does not require a fix list with severity labels (the format differs from model-hosting.md's structure). No action required.
**Correction:** No structural correction needed. The broken link is correctly identified, verified, and flagged.

---

### Issue 4: Pipeline count discrepancy — "ten" vs "nine" — source lines not cited for both files
**Severity:** MEDIUM
**Check affected:** 6.1, 6.4 (P29)
**Finding in original (6.1):** "Body line 188 says 'ten pipeline types' but the Accordion group lists 10 including `live-video-to-video`. `workload-options.mdx` line 185 says 'nine current pipelines' with a table of 9 entries."
**What is wrong:** The claim about ai-inference-operations.mdx is correctly cited: line 188 states "ten pipeline types" (verified in source: "Livepeer's AI worker supports ten pipeline types"). The Accordion group does contain 10 entries (text-to-image, image-to-image, image-to-video, image-to-text, audio-to-text, segment-anything-2, text-to-speech, upscale, llm, live-video-to-video = 10). The claim about workload-options.mdx is cited as "line 185" — but the source file at line 130 reads "**The nine current pipelines:**" (not line 185). The line 185 citation in the report is incorrect. Per P29, every cited occurrence must be verified against the actual file.

Additionally, the workload-options.mdx REVIEW comment at line 299 reads "10 pipeline types, growing demand" — the page is internally inconsistent: it says "nine current pipelines" in the body (line 130) and "10 pipeline types" in the JSX comment (line 299, not rendered). The check report does not catch this additional internal inconsistency in workload-options.mdx itself. The core finding (9 vs 10 discrepancy between pages) is real and correctly flagged.
**Correction:** Update the line citation for the workload-options.mdx claim: the "nine current pipelines" text appears at line 130, not line 185. Add note: "workload-options.mdx also contains an internal inconsistency — body prose at line 130 says 'nine' while JSX comment at line 299 says '10 pipeline types' (JSX comment not rendered, but relevant to SME resolution)."

---

### Issue 5: Check 2.4 FAIL — "Significantly" is a banned word (check 2.2), not a banned construction (check 2.4)
**Severity:** MEDIUM
**Check affected:** 2.4 (P46)
**Finding in original:** Check 2.4: "FAIL — See Banned Construction Scan. Multiple `can [verb]` and `if [condition]` candidates found"
**What is wrong:** `Significantly` is a banned word (check 2.2 scope), not a banned construction (check 2.4 scope). Per P46, `not [X] as primary statement` belongs in check 2.4; banned words belong in check 2.2. The check 2.4 detail references the Banned Construction Scan but the scan's most significant confirmed violation (F-27: `Significantly`) belongs in check 2.2, not 2.4.

Reviewing the Banned Construction Scan for actual banned-construction violations (check 2.4 scope): the scan does not identify confirmed `can [verb]` value claims or `if [condition]` body prose constructions. Em-dash violations (F-16 through F-26) are P30 concerns. The `not [X]` concern: "You never build a marketplace, billing system, or authentication layer" (line 78) uses `never` — this is not a `not [X]` primary value statement; it is a factual assertion using `never`. "Applications never communicate with orchestrators directly" (line 63) — same. No confirmed `not [X]` primary statement violations found. Check 2.4 result should be PASS for banned constructions. (The "can [verb]" candidates referenced in the detail are not shown in the scan table, which per P24 means they were not verified.)

The correct outcome: check 2.2 FAIL (for `Significantly` — see Issue 1 above), check 2.4 PASS (no confirmed banned constructions).
**Correction:** Change check 2.4 result to PASS. Detail: "No confirmed `not [X]` primary statements, no unresolved `if [condition]` in body prose, no `This page [verb]`, no `can/may [verb]` in value claims. Em-dash violations are a P30 concern logged in Banned Construction Scan. `Significantly` violation belongs in check 2.2." Update the verdict count: remove 2.4, confirm 2.2 as FAIL (already corrected in Issue 1).

---

### Issue 6: Duplicate card titles confirmed — F-28 is correctly identified
**Severity:** INFO (confirming correct finding)
**Check affected:** 8.1 (P29)
**Finding in original:** "Duplicate card titles — lines 432 and 441 both use title 'Batch AI Setup'. Line 432 icon `gears` links to `diffusion-pipeline-setup`; line 441 icon `rocket` also links to `diffusion-pipeline-setup`. Both same href and both titled identically — F-28."
**What is wrong:** None. Verified in source file at lines 432 and 441: both cards have `title="Batch AI Setup"` and `href="/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup"`. The finding is correct.
**Correction:** No correction needed. Confirmed finding.

---

### Issue 7: Check 3.2 — "Next steps" is Avoid-tier, not Banned-tier; the check is correctly FAIL but the tier is mis-stated
**Severity:** LOW (INFO)
**Check affected:** 3.2 (P53)
**Finding in original:** Check 3.2: "FAIL — 'The two workload types' — `Types` is in the OK list per Frameworks.mdx §4.1 but 'The two...' is a weak enumeration label pattern. 'What you build and what the network supplies' — 8-word heading, unusual parallel structure. 'Next steps' — `Next Steps` is in the Avoid list per §4.1"
**What is wrong:** The report correctly identifies "Next steps" as Avoid-tier. The check 3.2 text in checks.mdx states: "**Banned** (never): `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`. **Avoid** (flag, suggest stronger)..." The Avoid tier includes `Next Steps` (via "Further Reading" etc). Per P53, the exemption applies ONLY to the exact text `Related Pages`. `Next steps` / `Next Steps` is subject to normal scoring and is Avoid-tier under check 3.2. The report correctly flags it. However, the check 3.2 FAIL label for "The two workload types" needs examination: `Types` is in the OK list, which means "The two workload types" should not FAIL check 3.2 for containing `Types`. The failure basis for that heading should be the enumeration pattern ("The two X") which is a depth/precision scoring issue (check 3.1), not a check 3.2 banned/weak term issue. Check 3.2 FAIL for "The two workload types" on the basis of `Types` being used is incorrect — `Types` is OK.
**Correction:** Revise check 3.2 detail to remove "The two workload types" as a 3.2 violation. The heading fails check 3.1 (score 17/25) but not check 3.2 (no banned/avoid terms present — `Types` is OK). Check 3.2 remains FAIL due to "Next steps" (Avoid-tier) and "What you build and what the network supplies" (structural/weak pattern).

---

### Issue 8: Verdict count — multiple corrections required
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Failing checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.7, 4.1, 4.8, 4.10, 6.1, 6.4, 6.6, 6.9, 7.6, 8.1, 9.1, 9.3 — 22 checks fail."
**What is wrong:** Multiple changes:
- Check 2.2 should be FAIL (Issue 1) — currently PASS in the corrected row; add to list
- Check 2.4 should be PASS (Issue 5) — remove from list
- Net change on 2.x: no count change (swap 2.4 out, 2.2 in)
- `status: published` invalid value: captured within existing 1.8 FAIL — no additional ID
- Check 3.2 basis changed (Issue 7) but result remains FAIL — no count change

Recount: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7) + 2.2 (replaces 2.4) + 3.1, 3.2, 3.7 (3) + 4.1, 4.8, 4.10 (3) + 6.1, 6.4, 6.6, 6.9 (4) + 7.6, 8.1 (2) + 9.1, 9.3 (2) = 22 checks. Count is unchanged at 22, but the composition changes.
**Correction:** Update the failing check ID list: replace 2.4 with 2.2. Final list: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.2, 3.7, 4.1, 4.8, 4.10, 6.1, 6.4, 6.6, 6.9, 7.6, 8.1, 9.1, 9.3 — 22 checks fail.

---

## Confirmed Correct Findings

- **Broken link F-15 confirmed**: `/v2/gateways/resources/technical/orchestrator-offerings` absent from docs.json. Verified by full-text search. The check report correctly identifies this as a CRITICAL pre-publication blocker.
- **P15**: `purpose: explain` and `pageType: concept` read directly from source frontmatter. Confirmed in source file read.
- **P41**: `industry` and `niche` flagged as FAIL with concrete proposed values. Correct.
- **P51**: All proposed values formatted "Proposed: `field: value` — confirm before applying." Clean.
- **P50**: `pageType: concept` correctly passed check 1.2. Valid 7-type canonical value.
- **P30**: Em-dash prohibition applied to frontmatter description (F-16) and all 10 Accordion title props (F-17 through F-26). Full scope coverage. Accordion title scan was thorough.
- **P20**: AccordionGroup title props explicitly included in scan scope statement.
- **P33**: Links verified against docs.json. All 5 confirmed internal links cited with docs.json line numbers. The broken link flagged without confirmed presence.
- **P47**: Full path verification: the proposed replacement `/v2/gateways/setup/connect/discover-offerings` is given as a candidate fix with "confirm before applying."
- **P39**: `status: published` + missing `veracityStatus` correctly identified as incoherent with appropriate fix options.
- **P52**: Blocking decisions section lists SME items (pipeline count, broken link path) neutrally without pre-empting outcomes.
- **P43**: Finding IDs F-15 through F-29 are unique and sequential.
- **P44**: Proposed fixes checked — em-dash replacements (colon substitution) introduce no banned constructions. F-27 fix ("More VRAM and compute-intensive") introduces no new violations. F-28 fix (remove duplicate card) is clean.
- **P45**: One canonical fix per finding. Accordion em-dash fixes (F-17–F-26) consistently propose colon replacement.
- **P46**: `Significantly` at line 215 belongs in check 2.2 scope — this is correctly assigned to F-27 in the Banned Construction Scan. (Though the check 2.2 result self-correction to PASS is wrong, the scan itself correctly identifies the word as banned.)
- **F-28 duplicate card**: Confirmed correct. Two cards at lines 432 and 441 verified in source — both titled "Batch AI Setup" with identical hrefs.
- **P53**: "Next steps" correctly not exempted as "Related Pages equivalent." Flagged as Avoid-tier under check 3.2. P53 applied correctly.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — Three substantive issues requiring correction: (1) check 2.2 should be FAIL for `Significantly` at line 215 (the checker self-corrected to PASS incorrectly); (2) check 2.4 should be PASS (no confirmed banned constructions — em-dashes and `Significantly` belong in other checks); (3) `status: published` as an invalid status value not explicitly flagged. The broken link (F-15) is correctly identified and confirmed. Core structural findings are sound.

**Corrected fail count:** 22 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.2, 3.7, 4.1, 4.8, 4.10, 6.1, 6.4, 6.6, 6.9, 7.6, 8.1, 9.1, 9.3
