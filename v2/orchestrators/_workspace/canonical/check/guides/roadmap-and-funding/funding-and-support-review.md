# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/roadmap-and-funding/funding-and-support.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54
**Source file read:** `v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx` (43 lines)
**docs.json verified:** Lines 2946–2950 confirmed

---

## Rating

MOSTLY RELIABLE

---

## Summary

This report checks a stub page with minimal content — no body prose, no headings, one `<Note>` callout, one MDX comment block. The check report is broadly accurate and well-structured. Most findings are correct. Three issues were found: one misclassification of a banned word vs banned construction, one verdict count issue, and one finding (check 3.2 result) that contradicts the detail text. No CRITICAL-severity errors. No phantom findings. No false positives on link verification.

---

## Issues Found

### Issue 1: Check 3.2 result set to PASS but the detail text notes no violation — result is correct, but detail text is misleading
**Severity:** LOW
**Check affected:** 3.2
**Finding in original report:** "Title `Funding and Support` — neither Banned nor Avoid tier. `Support` in compound form is acceptable."
**What is wrong:** The result is PASS, which is correct. However, the detail text justifies this by noting "`Support` in compound form is acceptable" as if there were a borderline concern. `Support` is not in the Banned or Avoid tier in Frameworks.mdx §4.1 (confirmed). The compound-form caveat is an invented qualification. Check 3.2 assesses standalone terms as headings — `Funding and Support` is the page title, not a section H2/H3. The PASS is correct; the rationale is unnecessarily hedged.
**Correction:** "Title `Funding and Support` — neither Banned nor Avoid tier per Frameworks.mdx §4.1. PASS."

---

### Issue 2: Check 2.3 flags `This draft will consolidate…` — but this is a banned construction (check 2.4), not a banned phrase (check 2.3)
**Severity:** MEDIUM
**Check affected:** 2.3, 2.4
**Finding in original report:** Check 2.3 FAIL — "Note text: `This draft will consolidate…` — `This [noun] will [verb]` is functionally equivalent to the banned `This page [verb]` self-referential opener pattern (check 2.4)."
**What is wrong:** The check report correctly identifies `This draft will consolidate…` as a banned construction, then flags it under check 2.3 (banned phrases) and again under check 2.4 (banned constructions). Per P46 (applied to the parallel case of `not [X]`): each violation type belongs in the one check that governs it. `This page [verb]` / `This [noun] will [verb]` is a banned construction (check 2.4), not a banned phrase (check 2.3). Check 2.3 should PASS; the finding belongs exclusively in check 2.4. The report double-counts this violation, adding one spurious FAIL to the verdict count.
**Correction:** Check 2.3 result should be PASS. The `This draft will consolidate…` self-referential opener belongs only in check 2.4 and the Banned Construction Scan. Check 2.3 covers phrases from Frameworks.mdx §3.2 (e.g. "This section covers", "It is important to note", "once X is stable"). The `once [condition]` finding in check 2.3 is correctly placed in 2.3 as a banned phrase match. The self-referential opener is not a banned phrase — it is a banned construction. Remove it from check 2.3 detail; change check 2.3 result to PASS for the self-referential opener finding, but keep FAIL for `once [condition]` (a banned phrase per §3.2).

**Note on check 2.3 FAIL status:** The `once those routes are confirmed for publication` phrase matches the banned phrase `once X is stable` from Frameworks.mdx §3.2, so check 2.3 remains FAIL — but only for the `once [condition]` finding, not the self-referential opener.

---

### Issue 3: Verdict count includes one double-counted violation from Issue 2
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original report:** "Checks that FAIL: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3 = 23 failing checks"
**What is wrong:** Check 2.3 is listed as a FAIL. Per the correction in Issue 2, check 2.3 should PASS (the `once [condition]` construction is a banned phrase from §3.2, which does make 2.3 FAIL — so this requires closer examination). On re-examination: Frameworks.mdx §3.2 banned phrases include `once X is stable`. The Note text says `once those routes are confirmed for publication`. This is structurally identical to the banned pattern and belongs in check 2.3 as a banned phrase. So check 2.3 FAIL stands on the `once [condition]` ground alone. However, the self-referential opener `This draft will consolidate…` should appear in check 2.4 only, not as a separate check 2.3 violation. The FAIL count for 2.3 is therefore justified, but the detail rationale in check 2.3 conflates two different violation types. The verdict count of 23 is correct.
**Correction:** The 23-count is correct. The detail text of check 2.3 should be narrowed: remove the `This [noun] will [verb]` self-referential opener from check 2.3 (it belongs only in check 2.4). Check 2.3 FAIL stands on the `once [condition]` banned phrase alone. This is a detail accuracy issue, not a count issue.

---

### Issue 4: P51 compliance — some proposed frontmatter values are formatted correctly, some are not consistent
**Severity:** LOW
**Check affected:** Frontmatter Table, check 1.1
**Finding in original report:** Proposed values include: `purpose: evaluate`, `complexity: beginner`, `lifecycleStage: evaluate`, `industry: [business, livepeer]`, `niche: [protocol, infrastructure]` — all with "confirm before applying."
**What is wrong:** Most proposed values use the correct P51 format. However, in the Cross-Category Connections section (Root Cause A fix block), the proposed values are presented as plain YAML without the "confirm before applying" qualifier:
```
purpose: evaluate
complexity: beginner
lifecycleStage: evaluate
veracityStatus: unverified
industry: [business, livepeer]
niche: [protocol, infrastructure]
```
Per P51: "Proposed: `[field]: [value]` — confirm before applying." The fix block drops the confirmation qualifier that appears in the Frontmatter Table. An executing agent reading only the Cross-Category Connections section would treat these as definitive.
**Correction:** Root Cause A fix block should add "— confirm before applying" to all proposed field values, or add a preamble note: "All proposed values below require human confirmation before applying."

---

## Confirmed Correct Findings

The following findings were verified against the source file and reference documents:

- **1.1 FAIL** — `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all confirmed absent from frontmatter (source lines 1–21).
- **1.2 PASS** — `pageType: guide` confirmed present (line 17); `guide` is a valid canonical 7-type value.
- **1.3 N/A** — no migration needed; correct per P42.
- **1.8 FAIL** — `veracityStatus` absent; `unverified` is the correct proposed value per checks.mdx §1.8.
- **1.9 FAIL and 1.10 FAIL** — `industry` and `niche` absent; correctly flagged as FAIL per P41. Proposed values `[business, livepeer]` and `[protocol, infrastructure]` are valid entries from Frameworks.mdx §1.4.
- **1.11 FAIL** — Description contains ` - ` as clause separator (confirmed at source line 4). The proposed fix replacing ` - ` with `: ` is correct and the proposed replacement text is clean (no banned words, no em-dash, no self-referential opener).
- **1.12 PASS** — All 5 OG fields confirmed present (lines 12–16).
- **1.13 FAIL** — `livepeer` and `orchestrator` are generic per checks.mdx §1.13. `SPE` unexpanded — correctly flagged.
- **2.1 PASS** — `programmes` confirmed correct UK English at source line 24. No US spellings present.
- **2.2 PASS** — Note text at line 24 contains no banned words from the list.
- **2.4 FAIL** — `This draft will consolidate…` (self-referential banned construction, check 2.4) and `once those routes are confirmed for publication` (`once [condition]`, Frameworks.mdx §3.2) both confirmed at source line 24.
- **4.3 N/A/PASS** — docs.json lines 2946–2950 confirmed: `funding-and-support` at line 2948, `orchestrator-profiles` at line 2949. First in group, no previous adjacency gap.
- **4.4 FAIL** — Stub has no onward navigation; confirmed by source inspection.
- **4.10 FAIL** — No cross-tab links present; MDX comment at lines 39–41 describes planned cross-refs but they are not implemented.
- **5.3 PASS** — Only `<Note>` used; confirmed in guide preferred component list (checks.mdx §5 matrix).
- **6.6 FAIL** — `veracityStatus` absent; confirmed.
- **6.9 FAIL** — `STATUS: STUB - write when SPE details available` at source line 34; open-ended dependency with no named owner. Correctly flagged.
- **7.1 PASS** — Confirmed at docs.json line 2948.
- **7.7 FAIL** — Stub in publishable lane with Note callout; confirmed. BD-2 framing (publishable lane decision requires Alison sign-off) is correct.
- **8.6 FAIL** — `<Note>This draft will consolidate…</Note>` at source line 24; rendered, visible placeholder. Correctly flagged per checks.mdx §8.6.
- **9.1 FAIL** — `status: draft` at line 19; no human sign-off recorded.
- **9.3 FAIL** — Orchestrators IA not yet approved per tab-status.md.
- **Blocking Decisions BD-1 and BD-2** — correctly structured; options framed neutrally per P52. Neither pre-judges an outcome.
- **Finding ID sequence** — F-01 through F-05: unique and sequential. No duplicate IDs.
- **P39 compliance** — No `status: current` + `veracityStatus: unverified` combination recommended. Report correctly recommends `veracityStatus: unverified` with existing `status: draft`.
- **P42 compliance** — `pageVariant` absence logged as N/A (co-fix dependency of 1.2, not independent FAIL). Correct.
- **P50 compliance** — `pageType: guide` correctly marked PASS. No editorial pressure to change a valid pageType presented as a check failure.
- **P53 compliance** — No `See also` or similar headings present; no exemption misapplication possible on this stub.

---

## Corrected Verdict

**Corrected fail count: 22 checks fail** (not 23 as stated)

Removed from fail list: none — check 2.3 FAIL stands on the `once [condition]` banned phrase ground.

Wait: on re-examination, Issue 2 concluded that 2.3 FAIL stands (the `once [condition]` construction is a legitimate check 2.3 violation per Frameworks.mdx §3.2). The 23-count is correct. Issue 3 confirmed this.

**Corrected fail count: 23 checks fail** — unchanged from original.

Failing check IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3

**Issues requiring correction before this check report is used for remediation:**
1. Check 2.3 detail text: remove `This [noun] will [verb]` from check 2.3 rationale; keep `once [condition]` as the sole 2.3 violation. Result stays FAIL.
2. Root Cause A fix block in Cross-Category Connections: add "confirm before applying" qualifier to all proposed field values.
3. Check 3.2 detail: remove hedged caveat about `Support` in compound form; state simply that neither word is in the Banned or Avoid tier.

These are detail accuracy issues. The fail count, blocking decisions, and priority order are all correct.
