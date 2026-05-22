# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/roadmap-and-funding/orchestrator-profiles.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54
**Source file read:** `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx` (42 lines)
**docs.json verified:** Lines 2946–2950 confirmed

---

## Rating

NEEDS REWORK

---

## Summary

This report checks a stub page structurally identical to `funding-and-support.mdx`. The check report has five issues: (1) check 3.2 returns a self-contradictory result — the detail text works through the reasoning and concludes PASS, but the result column says FAIL; (2) the same double-counting of `This [noun] will [verb]` in check 2.3 as in the funding-and-support report; (3) the verdict count does not match the check table; (4) a finding in Category 1 (sidebarTitle terminology inconsistency) is a real finding but is not mapped to a specific check number and is not counted in the verdict FAIL list, creating an orphaned finding; (5) the Cross-Category Connections fix block drops the "confirm before applying" qualifier required by P51.

---

## Issues Found

### Issue 1: Check 3.2 — result column says FAIL but detail text concludes PASS (P28 violation)
**Severity:** HIGH
**Check affected:** 3.2
**Finding in original report:** Check 3.2 result: **FAIL**. Detail: "`Profiles` in `sidebarTitle: 'Operator Profiles'` — per Frameworks.mdx §4.1, `Profiles` is in the OK tier (not Banned or Avoid). So check 3.2 PASSES on the title itself. However, note that `Orchestrator Profiles` as a standalone H2 would be Avoid-tier per check 3.2 if used as a section heading. Not an issue at title level. PASS."
**What is wrong:** The detail text explicitly walks through the reasoning and states "PASS" twice. The result column says FAIL. This is a direct P28 violation: "Result column must match the detail text conclusion." The detail concludes PASS; the result must say PASS. Additionally, the detail reasoning contains two errors: (a) `Profiles` is in the OK tier per Frameworks.mdx §4.1 (confirmed — it appears in the OK row of the §4.1 table), so neither Banned nor Avoid. (b) The claim that "Orchestrator Profiles as a standalone H2 would be Avoid-tier" is unsupported — `Profiles` is in the OK tier, not Avoid. The hypothetical future-state analysis is speculative and irrelevant to the current page state (P35: findings evaluate current state, not proposed state). The correct result is PASS.
**Correction:** Change check 3.2 result from FAIL to PASS. Remove the speculative H2 scenario — it is irrelevant to the current stub state. Keep the `Profiles` = OK-tier confirmation from Frameworks.mdx §4.1 as the rationale.

---

### Issue 2: Check 2.3 flags `This draft will collect…` as a banned phrase — it is a banned construction (check 2.4)
**Severity:** MEDIUM
**Check affected:** 2.3, 2.4
**Finding in original report:** Check 2.3 FAIL — "Note text: `This draft will collect…` — `This [noun] will [verb]` self-referential opener (check 2.4 pattern)."
**What is wrong:** Same pattern as `funding-and-support` review. `This [noun] will [verb]` / `This page [verb]` is a banned construction (check 2.4), not a banned phrase (check 2.3). Banned phrases are from Frameworks.mdx §3.2 (e.g. "This section covers", "It is important to note", "once X is stable"). The self-referential opener belongs exclusively in check 2.4 and the Banned Construction Scan. Per the same analysis as the parallel page: check 2.3 FAIL stands because `once the source material is ready for publication` matches the banned phrase `once X is stable` from Frameworks.mdx §3.2. But the `This draft will collect…` self-referential opener must be removed from check 2.3 detail.
**Correction:** Check 2.3 detail: remove `This [noun] will [verb]` from the check 2.3 rationale. Keep FAIL result on `once [condition]` alone. The `This draft will collect…` construction belongs only in check 2.4 and the Banned Construction Scan (where it is correctly logged as F-02).

---

### Issue 3: Check 3.2 FAIL incorrectly included in the Category 1 FAIL summary and verdict count (P26/P49 violation)
**Severity:** HIGH
**Check affected:** Category 1 FAIL summary, Verdict Summary
**Finding in original report:**
- Category 1 summary: "Category 1 FAIL checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 (keywords all generic), plus sidebarTitle/title inconsistency"
- Verdict Summary: "Checks that FAIL: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 2.11, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3 = 24 failing checks"
**What is wrong:** Check 3.2 result says FAIL in the check table but does not appear in the verdict FAIL list. This is internally inconsistent: either 3.2 is FAIL (and should be in the list, making the count 25) or it is PASS (and the result column must be corrected, leaving the count at 24 minus any other corrections). Per Issue 1 above, the correct result for check 3.2 is PASS. The verdict list does not include 3.2, which matches the PASS conclusion in the detail text. But the check table shows FAIL, creating a discrepancy between the check table and the verdict list. This is a P26/P49 violation: verdict summary counts must match check table FAIL entries. The check table must be corrected to PASS before the report is used for remediation.
**Correction:** Fix check 3.2 result to PASS (per Issue 1). The verdict count of 24 is then internally consistent with the verdict list (3.2 correctly absent). No change to the count.

---

### Issue 4: sidebarTitle terminology finding is orphaned — logged in narrative but not mapped to a check ID
**Severity:** MEDIUM
**Check affected:** Additional finding note in Category 1; 2.11
**Finding in original report:** After the Category 1 check table, the report adds: "Additional finding: `title: 'Orchestrator Profiles'` vs `sidebarTitle: 'Operator Profiles'` — terminology inconsistency… This is a MEDIUM finding — not a schema failure, but a terminology governance issue per CLAUDE.md domain terms." This finding does not appear in any check table row with a check ID. It appears as a note after the table, in 2.11, and in the Cross-Category Connections (Root Cause B).
**What is wrong:** The sidebarTitle inconsistency is a real finding with real impact. It is correctly captured in check 2.11 (terminology governance, FAIL). However, the "Additional finding" note in Category 1 creates a duplicate entry for the same finding — once as an un-numbered narrative note and once as check 2.11. Per P34: a finding raised in one section must appear in all applicable report sections or be explicitly closed. The "Additional finding" note is a ghost entry — it is not check 1.1 (which is about field presence), not check 1.5 (which passes), and not a distinct check. It inflates the apparent finding count. The sidebarTitle finding is correctly and completely handled by check 2.11 alone.
**Correction:** Remove the "Additional finding:" narrative block from Category 1. The sidebarTitle terminology issue is fully logged in check 2.11 (FAIL) and Root Cause B (Cross-Category Connections). It does not need a separate un-numbered entry in Category 1.

---

### Issue 5: Cross-Category Connections Root Cause A fix block drops the P51 "confirm before applying" qualifier
**Severity:** LOW
**Check affected:** Cross-Category Connections (Root Cause A)
**Finding in original report:** Root Cause A fix block lists proposed values as plain YAML:
```
purpose: evaluate
complexity: beginner
lifecycleStage: evaluate
veracityStatus: unverified
industry: [livepeer, technical]
niche: [infrastructure, protocol]
```
**What is wrong:** Same issue as in the `funding-and-support` report. The Frontmatter Table entries correctly use "confirm before applying" per P51, but the Root Cause A fix block in Cross-Category Connections omits this qualifier. An executing agent reading only the fix block would treat these values as definitive rather than proposed.
**Correction:** Add a preamble to the Root Cause A fix block: "All proposed values require human confirmation before applying." Or add "— confirm before applying" inline after each proposed value.

---

### Issue 6: Check 3.2 FAIL (incorrect result) inflates Category 3 verdict — but report does not include 3.2 in FAIL list
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P26/P49)
**Finding in original report:** The verdict list (24 checks) does not include 3.2. The check table shows 3.2 as FAIL. The verdict list count is 24.
**What is wrong:** The check table and verdict list disagree. The check table has 3.2 as FAIL; the verdict list omits 3.2. Per P49 and P26, these must match. Per Issue 1, the correct result for 3.2 is PASS. So the resolution is: fix the check table (3.2 → PASS), which makes the check table and verdict list consistent at 24 FAILs.
**Correction:** Fix check 3.2 result to PASS. Verdict count stays 24. List of 24 failing check IDs is then correct.

---

## Confirmed Correct Findings

The following findings were verified against the source file and reference documents:

- **1.1 FAIL** — `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all confirmed absent from frontmatter (source lines 1–19).
- **1.2 PASS** — `pageType: guide` confirmed at line 16; valid canonical 7-type value. Editorial note about `resource` is correctly framed as schema-valid with INFO-level consideration (BD-2). Not a schema FAIL — correct per P50.
- **1.3 N/A** — no migration needed; correct per P42. Conditional pageVariant note for BD-2 is correctly framed as conditional, not as an independent finding.
- **1.5 PASS** — `audience: orchestrator` confirmed at line 17; valid 7-token value.
- **1.8 FAIL** — `veracityStatus` absent; `unverified` correct per checks.mdx §1.8.
- **1.9 FAIL and 1.10 FAIL** — `industry` and `niche` absent; correctly flagged as FAIL per P41. Proposed values `[livepeer, technical]` and `[infrastructure, protocol]` are valid per Frameworks.mdx §1.4.
- **1.11 FAIL** — Description ` - ` separator confirmed at source line 4. Proposed fix is clean.
- **1.12 PASS** — All 5 OG fields confirmed (source lines 11–15).
- **1.13 FAIL** — All 5 keywords are generic. Correctly flagged.
- **sidebarTitle finding** — `Operator Profiles` at source line 3 vs `title: 'Orchestrator Profiles'` at line 2 confirmed. Terminology governance issue is real. Check 2.11 FAIL is correctly placed.
- **2.1 PASS** — Note text at source line 23 contains no US spellings. `highlights`, `profiles`, `examples`, `material` all correct.
- **2.2 PASS** — Note text reviewed; no banned words from the list present.
- **2.4 FAIL** — `This draft will collect…` (self-referential banned construction) and `once the source material is ready for publication` (banned phrase / banned construction) both confirmed at source line 23.
- **4.3 N/A** — docs.json lines 2948–2949 confirmed: `orchestrator-profiles` at line 2949 is last in the Roadmap and Funding group. Terminal position; no NEXT_PAGE. Correct.
- **4.4 FAIL** — No onward navigation in stub; confirmed.
- **4.10 FAIL** — No cross-tab links; MDX comment at lines 38–40 notes planned cross-refs (`Resources > Community Pools`, `Resources > Community Guides`) not implemented.
- **5.3 PASS** — Only `<Note>` used; in guide preferred list.
- **5.4 PASS** — No TODO/TBD callouts, no PreviewCallout, no Coming Soon component.
- **6.6 FAIL** — `veracityStatus` absent; confirmed.
- **6.9 FAIL** — `STATUS: STUB - write when operator profiles available` at source line 33; open-ended dependency. Correctly flagged.
- **7.1 PASS** — Confirmed at docs.json line 2949.
- **7.7 FAIL** — Stub in publishable lane with visible Note callout. BD-3 framing is correct; options are neutrally framed per P52.
- **8.6 FAIL** — `<Note>This draft will collect operator profiles…</Note>` at source line 23; rendered placeholder confirmed.
- **9.1 FAIL** — `status: draft` at line 19; no human sign-off.
- **9.3 FAIL** — Orchestrators IA not yet approved.
- **Banned Construction Scan (F-01, F-02, F-03)** — All three confirmed against source. F-01 (` - ` in description, line 4); F-02 (`This draft will collect…`, line 23); F-03 (`once the source material is ready for publication`, line 23).
- **BD-2 (pageType guide vs resource)** — Well-structured. Options neutrally framed per P52.
- **P39 compliance** — No `status: current` + `veracityStatus: unverified` combination proposed. `status: draft` + `veracityStatus: unverified` is internally consistent per checks.mdx §1.8.
- **P42 compliance** — `pageVariant` absence logged as N/A (no migration needed for current `guide` type). Correct.
- **P43 compliance** — Finding IDs F-01 through F-06: unique and sequential. No duplicate IDs.
- **P51 compliance in Frontmatter Table** — All proposed values in the Frontmatter Table correctly use "confirm before applying." Non-compliant in Cross-Category Connections block only (Issue 5).
- **P53 compliance** — No `See also` or other non-exempt heading present. No misapplied exemption.

---

## Corrected Verdict

**Corrected fail count: 24 checks fail** — unchanged from original once check 3.2 is corrected to PASS.

Wait: the original verdict list (24 IDs) does not include 3.2. If 3.2 is corrected from FAIL to PASS in the check table, the check table FAIL count is now consistent with the verdict list. The 24-count is correct.

Failing check IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.3, 2.4, 2.11, 4.4, 4.10, 5.1, 5.2, 6.6, 6.9, 7.5, 7.6, 7.7, 8.6, 9.1, 9.3

**Corrections required before this report is used for remediation:**

1. **Check 3.2:** Change result from FAIL to PASS. Remove speculative future-state H2 scenario from detail. Keep `Profiles` = OK-tier confirmation as rationale. (Issues 1, 3, 6)
2. **Check 2.3 detail:** Remove `This [noun] will [verb]` self-referential opener from check 2.3 rationale. Check 2.3 FAIL stands on `once [condition]` alone. (Issue 2)
3. **Category 1 Additional finding note:** Remove the un-numbered "Additional finding:" narrative block. The sidebarTitle finding is fully handled by check 2.11 and Root Cause B. (Issue 4)
4. **Cross-Category Connections Root Cause A:** Add "confirm before applying" qualifier to all proposed field values. (Issue 5)

These corrections do not change the FAIL count (24) or any blocking decisions. The priority order, blocking decisions BD-1/BD-2/BD-3, and finding IDs are all correct.
