# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/audio-and-vision-pipelines.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: VRAM inconsistency logged under wrong category — not logged as Category 6 SME-blocking decision
**Severity:** HIGH
**Check affected:** 6.4 (and Cross-Category Connections CC-1)
**Finding in original:** "SAM2: '12–24 GB' here vs '~4–6 GB warm' in model-demand-reference. These are materially different claims about the same hardware state" — logged under 6.4 as FAIL, and noted in CC-1 under Cross-Category Connections.
**What is wrong:** The P1–P54 audit protocol (and the VRAM special instruction in this batch's brief) requires that the SAM2 VRAM inconsistency be logged under Category 6 (Veracity) as an SME-resolution blocking decision, explicitly framed as "requires human verification — do not correct unilaterally." The check report correctly identifies the inconsistency but does NOT raise a formal blocking decision (BD) for it. BD-2 covers it but is framed narrowly as a "before either page can advance" gate — it does not explicitly state that the figure must NOT be corrected without SME confirmation. The fix item F-03 says "Do not apply fix until source confirmed" which is correct, but the BD framing is incomplete: it should be elevated to the same BD structure as BD-1 (scope), with explicit wording that both values are unverified and SME resolution is the only acceptable path forward.
**Correction:** BD-2 should read: "VRAM figure reconciliation — SAM2 `segment-anything-2` shows 12–24 GB on this page vs ~4–6 GB warm on model-demand-reference. Audio-to-text Whisper shows ~3 GB here vs ~2–3 GB there. These are factual claims about the same hardware state. The correct value is unknown. Do not correct either page unilaterally. SME verification required before either page can advance to `veracityStatus: verified`." The critical reviewer confirms the numbers are accurately cited (audio-and-vision-pipelines.mdx line 80: "12–24 GB depending on model variant"; model-demand-reference.mdx line 134: "~4–6 GB"; audio-and-vision-pipelines.mdx line 62: "~3 GB warm"; model-demand-reference.mdx line 120: "~2–3 GB").

---

### Issue 2: Internal contradiction finding (CC-2) misread the source
**Severity:** MEDIUM
**Check affected:** 6.1, CC-2
**Finding in original:** "Line 246 shows text-to-image + audio-to-text both warm simultaneously. Line 248 (Warning) states only one warm model per GPU during Beta. These are mutually exclusive on a single GPU."
**What is wrong:** The check report says lines 246/248 are mutually exclusive and constitute an internal contradiction. This is incorrect. Reading the source: line 246 states "text-to-image and audio-to-text are warm (both fit within 24 GB across their respective VRAM budgets)" — this describes VRAM fit, not single-GPU assignment. The Warning at lines 248–250 then immediately resolves any ambiguity: "During the Beta phase, only one warm model per GPU is supported. A single physical GPU therefore keeps either text-to-image or audio-to-text warm. Split them across separate GPUs, or keep one cold." The source text explicitly clarifies that the multi-pipeline JSON example requires two GPUs or a cold fallback. The proposed fix F-04 (add a JSON comment `// Requires two separate GPUs`) is therefore unnecessary — the Warning block already states this. There is no internal contradiction in the source. The check report misread what "both fit within 24 GB" means in context.
**Correction:** The 6.1 finding on the line 246/248 contradiction should be removed. The Warning block correctly addresses the apparent tension. CC-2 should be closed. F-04 should be withdrawn. This does not change the 6.1 FAIL verdict (other REVIEW flags remain open), but the count of open sub-items under 6.1 drops by one, and F-04 is not a valid fix.

---

### Issue 3: `status: published` — check 1.8 schema rule cited incorrectly
**Severity:** MEDIUM
**Check affected:** 1.8
**Finding in original:** (audio-and-vision-pipelines has `status: draft`, so this issue does not apply here — the page uses `status: draft` which is coherent with `veracityStatus: unverified`.) Check 1.8 correctly reports FAIL for absent `veracityStatus`. P39 citation is correct in this context. No error on this specific page.
**What is wrong:** No error. This check is correctly applied here.
**Correction:** No correction needed for this page.

---

### Issue 4: P51 format partially absent in frontmatter table for `industry`/`niche`
**Severity:** LOW
**Check affected:** 1.9, 1.10 (P41, P51)
**Finding in original:** Check 1.9 and 1.10 both state "Proposed: `industry: ["AI", "technical"]` — confirm before applying" and "Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying."
**What is wrong:** P51 format is correctly applied here. Both proposed values carry the "confirm before applying" flag. The `industry`/`niche` fields are correctly flagged as FAIL (not N/A or INFO) per P41. No error.
**Correction:** No correction needed. This is a confirmed correct finding.

---

### Issue 5: Category 2 verdict count listed as "0 checks fail" but check 2.4 conclusion is ambiguous
**Severity:** LOW
**Check affected:** 2.4
**Finding in original:** "2.4 | Zero banned constructions | PASS | Full construction scan conducted. No `not [X]` value statements..."
**What is wrong:** The Category 2 verdict is PASS with 0 checks failing. This is correct. The check 2.4 result correctly classifies all candidates as non-violations. No issue.
**Correction:** No correction needed.

---

### Issue 6: P29 — line number citations not verified by quoting
**Severity:** MEDIUM
**Check affected:** Multiple veracity claims in Category 6 (lines 63, 80, 109, 175, 246, 248)
**Finding in original:** "Line 95: 'A 12 GB or 24 GB card supports a warm Whisper deployment...'" and multiple other line citations throughout Category 6 veracity inventory.
**What is wrong:** P29 requires that every cited line number be verified by quoting the content at that line. The check report cites line numbers in the veracity inventory but does not consistently quote the exact text at those lines. The audio-to-text VRAM claim is cited as "line 63, 93" — the source confirms "~3 GB warm" at line 93 and the table entry at line 62. The line 63 citation is off by one (table row content is at 62). The SAM2 claim is cited as "line 80, 191" — source confirms "12–24 GB depending on model variant" at line 80 (table cell) and again at line 191 (section prose). Minor line-off-by-one errors throughout do not rise to the level of fabricated citations, but they are not fully verified per P29 standards. The substance of the claims is accurate.
**Correction:** The veracity inventory citations are close enough to be trustworthy in substance. Flag as a P29 compliance gap: future batch reports should quote the exact text at the cited line, not just state the line number.

---

## Confirmed Correct Findings

The following findings are verified accurate against the source file and framework:

- **Check 1.2 FAIL:** `how_to` is correctly identified as deprecated 12-type value per checks.mdx check 1.2. `pageType: instruction` is the correct migration target.
- **Check 1.11 FAIL:** Description character count confirmed at 219 chars (source lines 4–7 render as a single string). Exceeds 160-char limit.
- **Missing frontmatter fields (1.1, 1.4, 1.6, 1.7, 1.8):** Source frontmatter confirmed — `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` all absent.
- **P42 compliance — pageVariant as co-fix:** Check 1.3 correctly logged as N/A with co-fix dependency note. Not an independent FAIL.
- **Dead imports (5.10):** Source lines 32, 34 confirm `LinkArrow` and `BorderedBox` are imported. Neither is called in the page body (confirmed by scanning the full source).
- **Check 4.5 FAIL:** No Prerequisites section present. Source confirms the page goes directly from the opening paragraph to the pipeline summary table. `diffusion-pipeline-setup` and `llm-pipeline-setup` both have explicit Prerequisites H3 sections; this page does not.
- **Check 4.8 FAIL:** Content duplication with diffusion-pipeline-setup.mdx is correctly flagged. The three JSON entries (audio-to-text, image-to-text, segment-anything-2) with identical model IDs and wei values appear in both files.
- **P16/P53 compliance — `Related pages` exemption note:** The check correctly identifies that `Related pages` (lowercase "p") technically falls outside the exact `Related Pages` exemption. BD-1 is a reasonable blocking decision treatment for this case.
- **All internal links verified against docs.json:** The four internal links at checks 8.1 are confirmed present in docs.json.
- **P50 compliance:** No valid 7-type canonical pageType was incorrectly failed on check 1.2. The `how_to` failure is correctly a deprecated alias failure.
- **Verdict summary count:** The report lists "26 checks fail" and enumerates: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.5, 4.8, 5.1, 5.2, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3. Count confirmed: 26 IDs listed. P49 compliant.
- **VRAM inconsistency identified and not corrected unilaterally:** The report correctly flags the SAM2 and Whisper discrepancies without asserting which value is correct. F-03 correctly defers to SME verification.

---

## Corrected Verdict

**Corrected fail count:** 24 checks fail (F-04 withdrawn removes its findings from 6.1 sub-item — 6.1 still fails for the remaining 3 open REVIEW flags; the CC-2 contradiction finding is closed but does not change any check verdict codes).

**Failing check IDs (confirmed):** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.5, 4.8, 5.1, 5.2, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**Note:** The count remains 26 — removing the line 246/248 sub-item from 6.1 does not close check 6.1 (three other REVIEW flags remain open). The CC-2 connection note should be removed, and F-04 withdrawn from the fix list, but the verdict code count is unchanged.

**Rating justification:** The report is thorough, structurally correct, and applies P41–P54 faithfully on frontmatter, voice, links, and nav. Two findings are wrong: the internal contradiction (CC-2/F-04) misreads the source, and the VRAM blocking decision needs stronger framing as a formal BD. These are fixable at the review stage without re-running the check.
