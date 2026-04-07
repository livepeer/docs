# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/model-demand-reference.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `status: published` — schema rule cited incorrectly throughout
**Severity:** HIGH
**Check affected:** 1.8, 9.1, CC-3
**Finding in original:** Frontmatter Table: "`status: published` with open REVIEW flags requires `veracityStatus: verified` per checks.mdx §1.8." Check 1.8: "`status: published` + open REVIEW flags at lines 641–663 is incoherent per checks.mdx §1.8." CC-3: "Same pattern as diffusion-pipeline-setup. Fix: `status: draft` + `veracityStatus: unverified`."
**What is wrong:** Per P21, any schema rule finding must cite the specific checks.mdx section. checks.mdx §1.8 states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." The canonical status value is `current` — not `published`. The report misquotes the rule by substituting `published` for `current`. This is the same error as in the diffusion-pipeline-setup check. The actual violations are two separate issues: (a) `status: published` is a non-canonical enum value (valid values: `current`, `draft`); (b) `veracityStatus` is absent, which is always a FAIL under check 1.8 regardless of the `status` value. The practical fix ("change to `status: draft` + `veracityStatus: unverified`") is correct, but the legal basis must be corrected: the schema rule cited is wrong.
**Correction:** In check 1.8, Frontmatter Table, CC-3, and F-10: replace "status: published requires veracityStatus: verified per §1.8" with: "`status: published` is a non-canonical value — valid enum values are `current` and `draft`. Additionally, `veracityStatus` is absent, which is a check 1.8 FAIL regardless of status value. Proposed: `status: draft` + `veracityStatus: unverified` — confirm before applying." The FAIL result on check 1.8 stands. No change to the verdict count.

---

### Issue 2: Check 3.2 self-correction not propagated consistently
**Severity:** MEDIUM
**Check affected:** 3.2
**Finding in original:** "3.2 | No banned or weak standalone heading terms | FAIL | `## Related` (line 624) — `Related` is in the OK tier per Frameworks.mdx §4.1. Not banned. However, as a standalone, it provides limited signal. INFO only, not FAIL. Correct check 3.2 to PASS."
**What is wrong:** The Result column in the check table reads FAIL for check 3.2. The detail text says "INFO only, not FAIL. Correct check 3.2 to PASS." The self-correction instruction appears in the detail cell but the Result column is not updated — it still reads FAIL. P17 and P28 both require that the Result column match the conclusion. Below the Category 3 table, there is a correction note: "*(Check 3.2 corrected to PASS — `Related` is in the OK tier.)*" This note is present, but per P17, corrections must update ALL locations: the Result column, the verdict count, and the failing IDs list. The Category 3 verdict states "3 checks FAIL: 3.1, 3.4, 3.7" — which correctly excludes 3.2. The overall Verdict's failing ID list includes "3.4" but not "3.2." So the correction is applied in the verdict (correct) and in the correction note (correct) but NOT in the Result column of the check table (still reads FAIL). This is a partial correction failure per P17.
**Correction:** Change check 3.2 Result column from FAIL to PASS. The Category 3 verdict and overall Verdict ID list are already correct (3.2 absent from both).

---

### Issue 3: Check 2.4 FAIL — `not [X]` finding lacks line-level quote verification (P29)
**Severity:** MEDIUM
**Check affected:** 2.4
**Finding in original:** "2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. `not [X]` construction found at lines 189–190."
**What is wrong:** P29 requires that every cited banned word or construction occurrence be verified against the actual file by quoting the content at the cited line. The check table entry for 2.4 says "`not [X]` construction found at lines 189–190" and refers to the Banned Construction Scan. The Banned Construction Scan table entry at line 189 states: "**Leave off this tier:** `text-to-image`, `image-to-image`, `image-to-video`, `live-video-to-video`" classified as "`not [X]` equivalent — This is a `Leave off` instruction, not `not [X]` construction." The scan concludes this is NOT a banned construction. However, check 2.4 still shows FAIL. P28 requires the Result column to match the detail text conclusion. The Banned Construction Scan concludes no banned constructions at lines 189–190 — but the check table still reads FAIL. The same P28/P17 propagation failure seen in checks 2.4 of other reports in this batch.

Additionally: the Banned Construction Scan confirmed violations are: F-07 (em-dash in description), F-08 (em-dash in body prose + `significantly`), and F-04 (em-dash in heading). But these are em-dash violations — prohibited per P30/CLAUDE.md — not `not [X]` constructions. The `significantly` at line 524 belongs in check 2.2 (banned words), not check 2.4. The em-dashes belong in the em-dash scan under P30, not as check 2.4 failures. The check 2.4 FAIL is therefore based on a finding (lines 189–190) that the checker's own analysis clears, while the actual violations cited (em-dashes) belong in other checks.
**Correction:** Check 2.4: if the `Leave off` construction at lines 189–190 is cleared (as the scan concludes), and the `not [X]` pattern is not confirmed elsewhere, check 2.4 Result should be PASS. The em-dash violations at description, line 524 prose, and the heading are separate findings: em-dash in description = check 1.11 (already failing); em-dash in heading = check 3.7 (already failing); em-dash in body prose at line 524 = P30 violation properly logged as additional finding under check 2.4 OR as a standalone finding, but must be verified. If the only remaining confirmed banned construction after the full scan is the em-dash in body prose at line 524 (which P30 covers as a prohibited construction), check 2.4 stays FAIL but the basis changes: it fails for em-dash in body prose (P30), not for `not [X]` at lines 189–190. The CC-4 cross-category connection correctly links the em-dash violations. The fix remains valid (F-08: remove em-dash + fix `significantly`). Verdict: check 2.4 remains FAIL but for the em-dash in body prose, not for `not [X]` at lines 189–190.

---

### Issue 4: P46 — `significantly` at line 524 classified under check 2.2 — correct
**Severity:** CONFIRMED CORRECT
**Check affected:** 2.2
**Finding in original:** "2.2 | Zero banned words | FAIL | `significantly` found at line 524."
**What is wrong:** Nothing. P46 states: "`not [X] as primary statement` is a banned construction (check 2.4). It is not a banned word (check 2.2)." The converse also applies: a banned word (`significantly`) must be flagged in check 2.2, not check 2.4. The check correctly places `significantly` in check 2.2. P54 compliance: check 2.1 is PASS (no US spelling violations). The `significantly` finding is in 2.2 where it belongs.
**Correction:** No correction needed. This is correctly categorised.

---

### Issue 5: P16/P53 — `## Related` heading included in score table
**Severity:** LOW
**Check affected:** 3.1 (heading score table)
**Finding in original:** `## Related` scored at 18/25 in the Heading Score Table. Note states: "`## Related` heading — not exempt per P53. `Related` is in the OK tier per Frameworks.mdx §4.1. Score normally."
**What is wrong:** P53 exempts only the exact heading text `Related Pages`. `## Related` is not the same heading, so the exemption correctly does not apply here — unlike `## Related pages` on the llm-pipeline-setup report. This heading is `## Related` (one word, no Pages), so P53 does not apply. Scoring it is correct. The note in the Heading Score Table correctly explains the reasoning. No error.
**Correction:** No correction needed.

---

### Issue 6: VRAM inconsistencies — logged under 6.4 and correctly flagged as SME-resolution required
**Severity:** CONFIRMED CORRECT
**Check affected:** 6.4, CC-2
**Finding in original:** "SAM2 large: '~4–6 GB warm' here vs '12–24 GB' in audio-and-vision-pipelines. SDXL Lightning: '~12–14 GB warm' here vs '~12–18 GB' in diffusion-pipeline-setup. Whisper: '~2–3 GB' here vs '~3 GB' in audio-and-vision-pipelines. This page should be the single source of truth for VRAM figures."
**What is wrong:** Nothing. The VRAM figures are correctly cited and accurately quoted. The inconsistencies are real. The report does not assert which value is correct. The fix (F-11) requires SME verification. The cross-category connection (CC-2) correctly identifies this page as the proposed canonical source once verified. P-special: the VRAM inconsistency is correctly logged under Category 6 (Veracity) — this is the correct category for factual cross-page inconsistencies of this type. The finding is not logged as a confirmed factual error (correct — we don't know which number is right). SME verification is required.
**Correction:** No correction needed. This is a confirmed correct application of the batch's VRAM special instruction.

---

### Issue 7: Check 8.1 — self-correction mid-finding creates confusing structure
**Severity:** LOW
**Check affected:** 8.1
**Finding in original:** Check 8.1 first says FAIL, then lists links and appears to verify them all as PASS, then concludes with "Correction to 8.1: All internal links PASS after verification. Check 8.1 PASS." But the check table Result for 8.1 is FAIL.
**What is wrong:** Same P17/P28 issue as check 3.2 (Issue 2 above) and the 2.4 issues in other reports. The self-correction is in the Category 8 narrative but the Result column still reads FAIL. The correction note ("Correction to 8.1: All internal links PASS") is present below the table, but the Result column is not updated.
**Correction:** Change check 8.1 Result column from FAIL to PASS. The Category 8 verdict already states "1 potential issue: 8.5 (NOT-TESTED render risk). No confirmed FAILs" — so the correction was applied to the verdict but not the check table. Remove 8.1 from any failing check ID count. The overall Verdict lists "19 checks fail" — verify 8.1 is not included in that list.

---

### Issue 8: Verdict fail count verification
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original:** "19 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.4, 3.7, 4.8, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3"
**What is wrong:** Counting the listed IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7) + 2.2, (1) + 3.1, 3.4, 3.7 (3) + 4.8 (1) + 6.1, 6.4, 6.6, 6.8, 6.9 (5) + 9.1, 9.3 (2) = 19. Count is correct. P49 compliant.

After corrections from Issues 2, 3, and 7 above: check 3.2 corrected from FAIL to PASS (already excluded from the list — no change needed), check 8.1 corrected from FAIL to PASS (needs to be verified not in the list — confirmed: 8.1 is not in the failing list). Check 2.4 remains FAIL for em-dash in body prose (not removed). No change to the 19-count.
**Correction:** No change to the verdict count. The 19 check IDs are correctly listed and counted. The corrections above change the Result columns in the check table (3.2: FAIL→PASS; 8.1: FAIL→PASS) but these were already excluded from the verdict count by the checker's own self-corrections — so the verdict is consistent.

---

## Confirmed Correct Findings

- **Check 1.2 PASS:** `pageType: reference` is a valid 7-type canonical value. Correctly not failed. P50 compliant.
- **Check 1.4 PASS:** `purpose: reference` is read directly from frontmatter (P15 compliant) and is a valid 15-value purpose. Correctly PASS.
- **P41 compliance:** `industry` and `niche` both flagged as FAIL with concrete proposed values and "confirm before applying" (P51). Not N/A or INFO.
- **Check 3.7 FAIL:** `## Warm vs cold — when it matters` correctly identified as containing a prohibited em-dash (P30/P48). The proposed rename `## Warm vs Cold` removes the em-dash and the verbose qualifier. Correct.
- **Check 3.4 FAIL:** `## GPU reference by persona` correctly identified as using a non-domain term (`persona` is UX terminology). Proposed rename `## GPU Tier Reference` is correct and does not reintroduce a prohibited term (P18 compliant).
- **Em-dash in body prose (line 524):** `— the warm pipeline choice matters` at line 524 is a confirmed em-dash in body prose. P30 prohibits em-dashes in all visible text. F-08 correctly targets this. The fix (rewriting the sentence to remove both the em-dash and `significantly`) is correct.
- **Em-dash in heading score table:** `## Warm vs cold — when it matters` is scored at 19/25. The em-dash is also a P30 violation logged in check 3.7 and CC-4. Two separate issues (score below threshold, and em-dash prohibition) are both correctly identified and cross-referenced.
- **VRAM figure inconsistencies:** The inconsistencies across all four pages are correctly mapped. The model-demand-reference is correctly identified as the proposed single source of truth. SME verification required before this page can anchor others.
- **`status: published` practical fix:** Despite the schema rule citation error (Issue 1), the recommended fix (`status: draft` + `veracityStatus: unverified`) is correct and does not violate P39.
- **All internal links verified correctly:** The check 8.1 self-correction is correct — all internal links confirmed in docs.json. The correction note accurately reverses the initial FAIL.
- **StyledTable thead render risk (5.6/8.5):** The demand signals table at lines 50–65 uses `<TableRow header>` directly without a `<thead>` wrapper, unlike other tables on the page. Correctly flagged as NOT-TESTED render risk, not a FAIL.
- **`## Related` heading correctly scored:** Not exempt per P53 (different heading from `Related Pages`). Scored at 18/25 — correctly flagged as below threshold (18 < 20) but noted as acceptable in structural context.

---

## Corrected Verdict

**Corrected fail count:** 19 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.4, 3.7, 4.8, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**Wait — the original verdict list omits check 2.4.** The original list has 19 IDs, none of which is 2.4. But the Category 2 verdict states "2 checks FAIL: 2.2, 2.4." The Category 2 table has 2.4 as FAIL. Yet 2.4 is absent from the Verdict failing ID list. This is a P49 violation: the verdict summary undercounts by omitting 2.4.

**Corrected fail count: 20 checks fail:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, **2.4**, 3.1, 3.4, 3.7, 4.8, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**Schema rule correction:** The `status: published` rule is incorrectly cited (should reference the non-canonical enum violation, not a `status: published` → `veracityStatus: verified` rule). The practical fix is unchanged.

**Check table corrections needed:** 3.2 Result → PASS; 8.1 Result → PASS (both already excluded from verdict count, but Result columns must be consistent).

**Rating justification:** The report correctly identifies the VRAM inconsistencies, em-dash violations, banned word, missing frontmatter fields, and the aiModels.json duplication problem. Three structural errors found: (1) the `status: published` schema rule is misquoted, (2) check 2.4 is omitted from the verdict failing ID list despite being FAIL in both the check table and Category 2 verdict, and (3) two check Result columns (3.2, 8.1) are inconsistent with the checker's own corrections. These are mechanical errors; the substantive diagnosis is sound.
