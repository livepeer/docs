# Critical Review — `v2/orchestrators/resources/glossary.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/glossary.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated

---

## Overall Rating

MOSTLY RELIABLE

The report correctly identifies the deprecated `pageType: glossary` with its migration path, the `status: current` incoherence, missing taxonomy fields, REVIEW flag format failures (missing named sources), and generic section headings. Cross-category connections are cleanly organised. Three corrections required: one P57 misapplication, one P78/P84 concern on the fix structure, and one scan gap on component content.

---

## Corrections Required

**Correction 1 — check 1.8 cites §1.8 correctly but Frontmatter Table row has conflicting logic**
- **Check finding:** Frontmatter Table row for `status` reads: "`status: current` requires `veracityStatus: verified` AND zero REVIEW flags per checks.mdx §1.8. Page has REVIEW flags and unverified content." The check table check 1.8 also correctly flags this. Fix F-02 changes `status: current` to `status: draft` and adds `veracityStatus: unverified`.
- **Correction:** The §1.8 citation is correct for `status: current`. The fix is valid and atomic per P84 (both changes together in F-02). P57 applies to `status: published` (a non-canonical value) — for `status: published`, the checker must not invoke §1.8. Here the value is `status: current` which is canonical, so §1.8 is the correct citation. No error. This is compliant.
- **Rule:** P57, P84
- **Impact on fail count:** No change.

**Correction 2 — check 1.3 logged as independent FAIL; should be co-fix dependency**
- **Check finding:** Check 1.3 result is FAIL: "`pageVariant` absent; required as co-fix with check 1.2 migration (P42)." The check correctly notes the P42 co-fix dependency.
- **Correction:** Per P42, check 1.3 is a co-fix dependency of check 1.2, not an independent FAIL. The report correctly notes this dependency in the check row, but the Verdict Summary lists 1.3 as a separate confirmed FAIL (one of 26). Per P42, this should not inflate the fail count as an independent finding — it is a dependency within the 1.2 fix. The report does say "required as co-fix with check 1.2" which is correct, but then counts it as a separate FAIL ID in the verdict. This is a minor count inflation. The fix is correct (F-01 includes both changes atomically). However the check 1.3 result column should be FAIL only in the sense that it is currently absent — the report's handling is borderline acceptable but the verdict count includes it as a separate ID.
- **Rule:** P42
- **Impact on fail count:** No change recommended (the field IS absent and IS a FAIL by schema; P42 says it's a co-fix dependency, not that it doesn't fail — it means don't log it as an independent HIGH finding, which the report avoids by noting the dependency). Acceptable as-is.

**Correction 3 — P91: Accordion content and StyledTable cell content not explicitly scanned**
- **Check finding:** The banned word scan and banned construction scan cover "body prose" but do not explicitly state whether Accordion body text, Accordion titles, or StyledTable cell text were scanned.
- **Correction:** Per P91, all content scans must include Accordion body text, Accordion titles, Tab labels, Tab content, Card titles, Step titles, and Callout content. The glossary page uses `AccordionGroup` and `Accordion` extensively (its primary content delivery mechanism) and `StyledTable`. The check report does not confirm these were scanned. Source file inspection shows the Accordion structure contains term definitions. These must be included in the banned word scan and banned construction scan. The report cannot claim a complete scan without confirming this.
- **Rule:** P91
- **Impact on fail count:** +0 confirmed (the scan may have been complete; the report simply did not confirm it). The report should be flagged as incomplete on this dimension. If Accordion bodies were scanned and found clean, that should be stated.

**Correction 4 — `description` field PASS/FAIL inconsistency in Frontmatter Table**
- **Check finding:** The Frontmatter Table row for `description` says "FAIL" in the header but the detail notes say "PASS on content. Hyphens used correctly." The row text is confusing.
- **Correction:** The description field value uses hyphens (not em-dashes). The check correctly notes "PASS on content." However the Pass/Fail column says "FAIL." This is a P28/P66 violation — the result column must match the detail conclusion. The detail concludes PASS for the description field. Per P66, the Frontmatter Table and check table must agree. Check 1.11 in the check table says PASS. The Frontmatter Table must also say PASS. The FAIL in the Frontmatter Table header for this row is incorrect.
- **Rule:** P28, P66
- **Impact on fail count:** No change to confirmed FAILs (check 1.11 is correctly PASS in the check table; the Frontmatter Table FAIL is a report inconsistency, not a source page failure).

**Correction 5 — P96: Known-failing heading patterns check**
- **Check finding:** No explicit P96 scan noted.
- **Correction:** Source file headings are: `Deployment`, `Node Mode`, `Dual Mode`, `Deployment Type`, `Protocol Terms`, `Operational Terms`, `Economic Terms`, `Deprecated Terms`, `Operational Mode Asymmetry: Gateways vs Orchestrators`. None of these match the P96 known-failing pattern list (`What happened`, `What just happened`, `Overview`, `Introduction`, `Summary`, `Next steps`, `Related`). P96 is satisfied — no missed violations.
- **Rule:** P96
- **Impact on fail count:** No change.

---

## Corrected Fail Count

**Original report fail count:** 26
**Adjustments:** No removals or additions to confirmed FAILs. One Frontmatter Table inconsistency noted (description row marked FAIL when check 1.11 is PASS) but does not change the fail count.
**Corrected fail count:** 26
**Corrected FAIL IDs:** 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.3, 3.4, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6

---

## New Findings (gaps from older learnings version)

**P90 — Not applicable:** Page has `status: current` (canonical), not `status: published`. P90 does not apply.

**P91 — Accordion body/title scan not confirmed:** As noted in Correction 3. The report lists candidate matches for banned words in body prose but does not state whether Accordion content was checked. Given the page's primary content delivery is through Accordion components, this is a material gap. The executing agent should be directed to verify Accordion body and title text for banned words and em-dashes before closing these checks.

**P92 — No `purpose: guide` wrong-field error:** The `purpose` field is `reference` (canonical 15-value set). No P92 issue.

**P93 — No false positive contradictions flagged:** The BORDERLINE items in the Banned Construction Scan (lines 116, 341) are correctly classified as BORDERLINE with positive context following. The check agent read the surrounding context before classifying. P93 compliant.

**P94 — docs.json check performed:** Report header confirms docs.json line 2970. No navigation orphan. P94 is satisfied.

**P95 — Content overlap with glossary pages in other tabs:** The check notes at check 4.10 that a Gateway glossary is referenced in a comment but not linked. There is a potential content overlap between this orchestrators glossary and gateway-specific terminology. This is not formally raised as a BD. Given that the gateway glossary may be a separate file, this warrants a BD if both cover overlapping terms. However without reading the gateway glossary file, this cannot be confirmed. Flag for human review rather than raising as a confirmed BD.

**P96 — No known-failing heading patterns present:** Verified above.

---

## Proposed Learnings

No new patterns not already in P1–P96. The Frontmatter Table description-row PASS/FAIL inconsistency is an instance of the existing P28/P66 rule applied across the Frontmatter Table and check table.
