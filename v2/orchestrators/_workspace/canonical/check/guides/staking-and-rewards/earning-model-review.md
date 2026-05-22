# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/staking-and-rewards/earning-model.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Em-dashes in body prose — two instances missed (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 / Banned Construction Scan
**Finding in original:** The report flagged em-dashes at lines 154 (inside a Note) and 201 (body prose) as F-03. It did not flag lines 60 or 105.
**What is wrong:** P30 states em-dash prohibition applies to ALL visible text. Lines 60 and 105 of the source file contain em-dashes in body prose:
- Line 60: `The gateway sends payment via Livepeer's **probabilistic micropayment** system — a series of signed tickets that represent ETH obligations.`
- Line 105: `Each round (approximately every 22 hours on Arbitrum), the Livepeer protocol mints new LPT and distributes it to active orchestrators proportional to their **total stake** — that is, their own self-bonded LPT plus all delegated stake from third parties.`

Both are body prose em-dash uses and are prohibited. The check scan listed every em-dash candidate in the Banned Construction Scan table but stopped at line 35. Lines 60 and 105 never appear in the scan.
**Correction:** F-03 must be extended to include lines 60 and 105. The Banned Construction Scan table must add rows for both. Proposed fixes:
- Line 60: `system — a series of` → `system: a series of`
- Line 105: `their **total stake** — that is,` → `their **total stake**, specifically`

---

### Issue 2: Em-dash in frontmatter description field not flagged (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 / Banned Construction Scan
**Finding in original:** The Banned Construction Scan scope statement says "All visible text including headings, frontmatter description, body prose, table cells, card descriptions, component props, Note/Warning/Tip text." The description field was listed in scope. No em-dash was found there.
**What is wrong:** The `description` field at line 4–7 of the source file contains an em-dash:
`How orchestrators earn on Livepeer — ETH service fees, LPT inflationary rewards, commission parameters, what wins jobs, and how AI changes the fee landscape.`
P30 explicitly covers the frontmatter description field. This is a missed violation.
**Correction:** Add a new finding to F-03 (or a separate F-09): the em-dash in the description at line 5 must be replaced. Proposed: `How orchestrators earn on Livepeer: ETH service fees, LPT inflationary rewards, commission parameters, what wins jobs, and how AI changes the fee landscape.`

---

### Issue 3: P46 — `not [X]` categorised under 2.4, not 2.2 — CORRECT (no error)
**Severity:** N/A — confirming correctness
**Check affected:** 2.2 / 2.4
**Finding in original:** The `not [X]` construction ("None of these factors alone is decisive") is flagged under check 2.4 and the Banned Construction Scan. Check 2.2 is PASS.
**What is correct:** Per P46, `not [X] as primary statement` is a banned construction belonging in check 2.4. Check 2.2 covers banned words only. The report correctly categorises the finding. No error.

---

### Issue 4: F-03 fix introduces a potential new violation (P44)
**Severity:** LOW
**Check affected:** Fix List F-03
**Finding in original:** F-03 proposes for line 154: `replace '— a compounding dynamic' with ': a compounding dynamic'`. For line 201: `replace '— your stake matters less' with '. Stake matters less'`.
**What is wrong:** The Fix List row says `Line 154: replace '— a compounding dynamic' with ': a compounding dynamic'`. The result would be: `...which increases your inflation share and job routing weight: a compounding dynamic.` This is acceptable. Line 201 fix is also clean. No new violations introduced by these specific two. The two additional lines (60 and 105) from Issue 1 above also need clean fixes before confirming.

This is minor — the stated fixes for lines 154 and 201 pass. The issue is completeness.

---

### Issue 5: Heading score table — "The two revenue streams" scores 21/25 but may qualify for 3.3 check (minor)
**Severity:** LOW
**Check affected:** 3.3
**Finding in original:** The heading `## The two revenue streams` is scored at 21/25 and passes check 3.3 (no X vs Y). Check 3.3 PASS is correct — this heading does not use an `X vs Y` pattern. No error.

---

### Issue 6: veracityStatus fix does not violate P39
**Severity:** N/A — confirming correctness
**Check affected:** 1.8 / 6.6
**Finding in original:** The report recommends adding `veracityStatus: unverified` while `status: published` remains.
**What is correct:** P39 specifies that `status: current` requires `veracityStatus: verified`. The file uses `status: published`, not `status: current`. The P39 constraint does not apply here. The fix (`veracityStatus: unverified` alongside `status: published`) is internally consistent. No error.

---

### Issue 7: Verdict fail count — undercounted due to missed em-dash instances
**Severity:** MEDIUM
**Check affected:** Verdict / P49
**Finding in original:** "15 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.3, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1"
**What is wrong:** The em-dash in the description field and the two missed body prose em-dashes (lines 60, 105) are all violations under check 2.4. They do not add new check IDs to the failing list (2.4 already fails), so the count of 15 failing check IDs is numerically correct. However, F-03 is incomplete: it covers only 2 of the 4 em-dash instances. The fix list is under-specified, not the count. The verdict count is acceptable as-is once the context is understood, but should note the description field and additional line instances.

---

## Confirmed Correct Findings

- P41 (industry/niche): Both flagged as FAIL with concrete proposed values. Correct.
- P15 (purpose read directly): `purpose: explain` read from frontmatter, not inferred. Correct.
- P37 (purpose field error): Not applicable here — `purpose: explain` is valid. Not triggered. Correct.
- P42 (pageVariant): Listed as N/A with reasoning. Correct.
- P50 (valid pageType): `concept` is canonical; check 1.2 is PASS. Correct.
- P51 (proposed values format): All proposed frontmatter values follow "Proposed: `field: value` — confirm before applying" format. Correct.
- P46 (`not [X]` under 2.4 not 2.2): Correctly categorised. Confirmed.
- P28 (result column matches detail): Checked all category tables — result column consistently matches the detail text conclusion. Correct.
- P29 (line numbers verified): F-01 cites line 99 — source file confirmed "None of these factors alone is decisive" at line 99. Cited content matches. Correct.
- P33 (broken links): Internal links verified against docs.json with line citations. Correct.
- P35 (findings against current state): All findings evaluate the current file state. Correct.
- P36 (severity levels): Only CRITICAL/HIGH/MEDIUM/INFO used — no "LOW". Correct.
- P43 (finding IDs unique and sequential): F-01 through F-08 are unique and sequential. Correct.
- P52 (INFO rows neutral): Category 9 INFO rows are neutral framing. Correct.
- P49/P26 (verdict count = individual IDs): "15 checks fail" with listed IDs matches the FAIL entries in the check tables. Correct.
- `Related Pages` exemption: The footer heading used is `## Continue in this section` (not `## Related Pages`) — no exemption question arises. Correct handling.

---

## Corrected Verdict

**Rating:** MOSTLY RELIABLE — core findings valid, two systematic scan gaps (lines 60, 105 and description field em-dashes)

**Corrected fail count:** 15 checks fail (IDs unchanged): 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.3, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1

**Additional fix required (does not change count):** F-03 is incomplete — must be extended to cover em-dashes at lines 60 and 105 (body prose) and line 5 (description field). These are sub-findings of the already-failing check 2.4.
