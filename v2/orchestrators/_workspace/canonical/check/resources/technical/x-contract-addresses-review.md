# Critical Review — `v2/orchestrators/resources/technical/x-contract-addresses.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/technical/x-contract-addresses.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (no learnings version stated in header; format consistent with P1–P90 batch, no P81 pre-check section)

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

### Correction 1 — P94 critical header: CRITICAL NAVIGATION ORPHAN not flagged despite correct detection

**Check ID affected:** Report header
**Original statement:** The "File status note" opens with: "this file IS present in docs.json at line 2977." The report correctly identifies this as a critical issue. However, P94 requires this determination to be in the report header (before Category 1) as "CRITICAL NAVIGATION ORPHAN" (or in this case, its inverse: an `x-` prefixed file that IS in docs.json, which is equally critical).
**Correction:** P94 is designed for files absent from docs.json. For this file, the situation is the inverse: an `x-` prefixed file (deprecated convention) that IS registered in active nav with an empty body. This is categorically a CRITICAL dead-end navigation finding. The report correctly surfaces this via "File status note" but does not label it as CRITICAL in the header. The correct header label is: **"CRITICAL: `x-`-PREFIXED STUB IN ACTIVE NAV"** — active navigation routes readers to this empty stub. All content checks are secondary to this structural defect.

The report does correctly escalate this to BD-1 and creates F-01 as CRITICAL severity. The finding is present and correctly prioritised — the gap is only the header labelling per P94's intent.
**P-rule:** P94, P81
**Fail count impact:** 0

---

### Correction 2 — NEXT adjacency description in cli-flags check vs this check (P25, consistency)

**Check ID affected:** 4.3
**Original statement:** Check 4.3 FAIL: "PREV = `cli-flags` (active, content-bearing), NEXT = `gpu-support` (a different resource). cli-flags leads to this blank stub."
**Correction:** The docs.json sequence (verified at lines 2974–2978) is: `cli-flags` (line 2976) → `x-contract-addresses` (line 2977) → `gpu-support` (line 2978). The check correctly identifies `cli-flags` as PREV and `gpu-support` as NEXT for this page. The description "cli-flags leads to this blank stub" is accurate — cli-flags points NEXT to x-contract-addresses. The adjacency finding is correctly stated. No correction needed.
**P-rule:** P25
**Fail count impact:** 0

---

### Correction 3 — Check 6.2 misapplied to empty page (false pre-emptive FAIL)

**Check ID affected:** 6.2
**Original statement:** Check 6.2 FAIL: "When this page is built, contract addresses are HIGH-staleness claims (P77). Must be sourced to Arbiscan or the official Livepeer protocol repository. Flagging now to ensure build process includes sources."
**Correction:** The page has no content. Checks 6.x evaluate the current state of the page (P35). Check 6.2 asks: "High-staleness claims sourced?" — a page with no content has no claims, high-staleness or otherwise. The correct result is N/A. The pre-emptive "when this page is built" FAIL is not a valid check result for the current state. The veracity concern about contract addresses being HIGH-staleness when written is a valid planning note, but it belongs in an INFO row or a BD note (e.g., "When building page content: source all contract addresses to Arbiscan"), not a check 6.2 FAIL. This is the same pre-emptive future-state evaluation error prohibited by P35.

The check report also classifies 6.3 as INFO ("Contract addresses: LOW staleness tier per P77 (rarely changes)") — but simultaneously flags 6.2 as FAIL because "contract addresses are HIGH-staleness claims." These two statements directly contradict each other in the same report.

Check 6.2 must be N/A. The staleness classification note belongs in the BD note or an INFO row.
**P-rule:** P35, P21
**Fail count impact:** -1 (check 6.2 from FAIL → N/A; but 6.2 was classified as "INFO" in Category 6 verdict — "Category 6 verdict: INFO (pre-emptive note for when page is built)". The category verdict is correct as INFO. The check 6.2 row result of FAIL is wrong. The verdict category does not count 6.2 in the FAIL list, so the overall FAIL count is unaffected.)

**Verify:** Looking at the Verdict Summary — "Confirmed fail checks (26): 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.6, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.7, 7.4, 7.7, 7.8, 8.4, 9.1, 9.4" — check 6.2 is NOT in this list. The category verdict correctly treated 6.2 as informational, not a FAIL. The check row result of FAIL is misleading but does not inflate the overall count.
**Fail count impact:** 0 (not in FAIL list despite FAIL label in check row)

---

### Correction 4 — Verdict count arithmetic (P49, P26)

**Original statement:** "Confirmed fail count: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 (11) + 2.4 (1) + 3.6 (1) + 4.1, 4.2, 4.3, 4.4 (4) + 5.1, 5.2, 5.7 (3) + 7.4, 7.7, 7.8 (3) + 8.4 (1) + 9.1, 9.4 (2) = 26 confirmed fail checks." The stated count is 26 and the arithmetic is shown: 11+1+1+4+3+3+1+2 = 26. Count verified as internally consistent.
**Correction:** Count arithmetic is correct at 26. No correction needed on arithmetic.
**P-rule:** P49
**Fail count impact:** 0

---

### Correction 5 — P81 and P94 compliance: no pre-check section

**Check ID affected:** Report structure
**Original statement:** The "File status note" section serves the function of P81/P94 but is not structured as a named "Pre-Check: File Integrity" section.
**Correction:** Format gap. The source file is verified: frontmatter opens at line 1, no corrupt prefix. The "File status note" correctly identifies the nav status. The pre-check findings are substantively correct; only the section header format deviates from P81/P94 protocol.
**P-rule:** P81, P94
**Fail count impact:** 0

---

### Correction 6 — Check 6.3 vs P77 confusion (same issue as cli-flags)

**Check ID affected:** 6.3
**Original statement:** Check 6.3: "INFO — Contract addresses: LOW staleness tier per P77 (rarely changes) — despite being HIGH-importance for users."
**Correction:** Per checks.mdx, check 6.3 is "No deprecated API usage — all endpoints, SDK methods, CLI flags are current." The check report has substituted P77 staleness-tier evaluation for the actual check 6.3 definition. For an empty page, check 6.3 should be N/A. The P77 staleness note is a planning observation. This mirrors the check 6.3 mischaracterisation found in the cli-flags check (see cli-flags-review NF-5). This is the same systematic pattern.
**P-rule:** P97 (proposed in cli-flags review)
**Fail count impact:** 0 (not in FAIL list)

---

## Corrected Fail Count

**Original stated:** 26
**Adjustments:** 0 (no FAIL list changes — 6.2 was correctly excluded from the FAIL list despite the check row FAIL label)
**Corrected:** 26

**Corrected FAIL IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.6, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.7, 7.4, 7.7, 7.8, 8.4, 9.1, 9.4

**BORDERLINE (not in FAIL count):** 1.5, 7.9

---

## New Findings (P90–P96 gaps)

### NF-1 — P94: CRITICAL header label missing for x-prefix file in active nav

This is the highest-priority finding for this page: an `x-`-prefixed file (deprecated by convention) is registered in active docs.json navigation. The report identifies this in the "File status note" and in checks 7.7, 7.8, and BD-1/F-01 — but the P94 protocol requires this to appear as a CRITICAL flag in the report header before Category 1. The check correctly prioritises it as CRITICAL in F-01. The header label is missing.

### NF-2 — P91: component content scan not applicable but not documented

No components present — P91 (component content scan) is N/A. The report does not cite P91 explicitly. For empty pages, this is a trivial gap.

### NF-3 — F-02 CRITICAL severity: writing the page content is correctly listed but should explicitly reference the CRITICAL nav status

F-01 (CRITICAL) addresses the BD-1 decision (activate or archive). F-02 (CRITICAL) addresses writing the content. However, F-02 is only actionable if BD-1 = Option A. The report does note "All fixes conditional on BD-1" — this is correct P52 framing. The fix list is well-structured.

### NF-4 — Check 6.3/P77 systematic confusion

Same issue as cli-flags. Check 6.3 (deprecated API usage) is being evaluated as a P77 staleness-tier check. This is a systematic misidentification — see Proposed Learnings.

### NF-5 — OG image uses SVG — same issue as x-troubleshooting (P88-style joint note)

Both x-contract-addresses and x-troubleshooting use `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` as the OG image. The check reports flag this independently. Per P88's spirit (joint verification for shared issues), this is a shared-root finding: both files were scaffolded from the same template that used the SVG logo as default. A single fix resolves both. The check reports do not cross-reference each other for this pattern.

---

## Proposed Learnings

**NEW-P99: For `x-`-prefixed files that ARE present in docs.json, the P94 header must flag "CRITICAL: `x-`-PREFIXED STUB IN ACTIVE NAV" rather than "CRITICAL NAVIGATION ORPHAN." The critical condition is the mismatch between the file's deprecated convention (`x-` prefix = not in nav) and its actual nav registration — not orphan status. This is distinct from the absence case P94 was designed for, but is equally CRITICAL.**
