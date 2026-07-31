# Check Report Review: `v2/orchestrators/concepts/capabilities.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Code (meta-review pass)
**Check report under review:** `v2/orchestrators/_workspace/canonical/check/concepts/capabilities.md`
**Original page:** `v2/orchestrators/concepts/capabilities.mdx`
**Verdict:** DO NOT USE FOR REMEDIATION AS-IS — one CRITICAL false positive corrupts the top item on the priority fix list and cascades into five other check entries. Broken link verification contains a confirmed missed finding. Remaining findings are largely reliable once the errors below are corrected.

---

## Issue 1

**Type:** False positive (CRITICAL)
**Location in report:** Frontmatter Table `purpose` row; Cat 1.4; Cat 5.7; Root Cause A; Prioritised Fix List top CRITICAL row

**What's wrong:** The check report states the `purpose` field value is `'concept'` and marks it FAIL as a deprecated alias. The actual page has `purpose: 'explain'` at line 29. The checker conflated `pageType: 'concept'` (line 27 — valid) with `purpose: 'concept'` (which would be deprecated). The `purpose` field is correctly set.

This misread cascades into:
- Frontmatter Table: incorrect value shown (`'concept'`), incorrect FAIL verdict
- Frontmatter summary: adds a phantom CRITICAL item ("purpose: 'concept' — deprecated alias")
- Cat 1.4: FAIL (should be PASS — `'explain'` is a valid canonical value per Frameworks.mdx §1.2)
- Cat 5.7: FAIL (cross-references Cat 1.4 — should be PASS)
- Root Cause A: includes `purpose: 'explain'` as a required fix — this is already the current value
- Prioritised Fix List: top CRITICAL item (`purpose: 'concept'` → `purpose: 'explain'`) is a phantom fix. Executing it risks a regression if the fixer assumes the current value is `'concept'` and makes a targeted replacement that overwrites the correct `'explain'` value

**What should have been said/done:**
- Frontmatter Table: `purpose` | Yes | `'explain'` | PASS | Valid canonical value per Frameworks.mdx §1.2
- Cat 1.4: PASS
- Cat 5.7: PASS
- Root Cause A: remove `purpose` from the fix block entirely
- Prioritised Fix List: remove the top CRITICAL row
- Frontmatter failure summary: drop from 5 items to 4

---

## Issue 2

**Type:** False positive (MEDIUM) — approved exception not applied
**Location in report:** Cat 3.1 scoring row for "Related Pages"; Cat 3.2; Root Cause D; Prioritised Fix List MEDIUM row for "Related Pages"

**What's wrong:** The review brief for this check explicitly states:

> "Related Pages" heading is an approved structural element — exempt from check 3.1 scoring and check 3.2.

The check scores "Related Pages" at 15/25 in the heading score table, includes it in the Cat 3.1 FAIL count, marks it as a Cat 3.2 failure, proposes removing the heading in Root Cause D, and adds a MEDIUM fix to the Prioritised Fix List. All of these should have been suppressed as an approved exception.

**What should have been said/done:**
- Heading score table row: EXEMPT — approved structural element; not scored
- Cat 3.1: note the exemption; failing count is 2 of 7 scoreable headings (not "3 of 8")
- Cat 3.2: remove "Related Pages" from the failure
- Root Cause D: remove the "Related Pages → remove heading" fix
- Prioritised Fix List: remove the MEDIUM row for "Related Pages"

---

## Issue 3

**Type:** False positive (consequence of Issue 1)
**Location in report:** Cat 5.7

**What's wrong:** Check 5.7 reads: "FAIL — `purpose: 'concept'` is deprecated alias — cross-reference Cat 1.4". This finding exists entirely because the checker misread the `purpose` field. The page has `purpose: 'explain'`. There is no deprecated alias in use. Check 5.7 should PASS.

**What should have been said/done:** Cat 5.7: PASS. No cross-reference to Cat 1.4 needed.

---

## Issue 4

**Type:** Process issue — unsubstantiated rule assertion
**Location in report:** Frontmatter Table `status` row; Cross-Category Root Cause A (`status: 'draft'` fix); Prioritised Fix List HIGH row for `status: current` invalid

**What's wrong:** The check asserts that `status: current` is invalid without `veracityStatus: verified` AND zero REVIEW flags, and prescribes changing it to `status: 'draft'`. No source is cited for this constraint. Frameworks.mdx §1.7 defines pipeline blocking rules (`unverified` or `stale` at very high or high standard blocks publication) but does not define a frontmatter schema rule that `status: current` requires `veracityStatus: verified`. The check invents a schema constraint and presents it as a fact.

Additionally, the `status` field is not included in any numbered check in Category 1 (checks 1.1–1.12). The finding appears in the Frontmatter Table and in Root Cause A but has no auditable check reference — it is an orphan finding.

**What should have been said/done:** Either cite the source for this constraint or downgrade the finding to INFO and flag it as "inferred policy — source required before actioning." The `status: 'draft'` change may be practically correct (the tab gate is not passed), but it should not be presented as a schema violation without evidence.

---

## Issue 5

**Type:** Missed finding (MEDIUM)
**Location in report:** Banned Construction Scan; Cat 2.3 / 2.4

**What's wrong:** The `CustomDivider` at line 264 has `middleText="What Orchestrators Don't Do"`. This is a negative formulation — it describes what something is not. The CLAUDE.md review standards and Frameworks.mdx §2.1 both list `not [X]` as primary statement as a banned construction ("State positively"). CustomDivider middleText labels are visible section dividers that function structurally like section headings. The Banned Construction Scan preamble states it covered "frontmatter description, headings, Tip, body prose, Note, table cells, card descriptions" but CustomDivider labels are not mentioned in the scope list and the label at line 264 was not scanned.

The H2 immediately following (`## Capability Boundaries`) names the concept correctly. The CustomDivider label conflicts by using negative framing the H2 avoids.

**What should have been said/done:** Add to the Banned Construction Scan: line 264 — `"What Orchestrators Don't Do"` — `not [X]` construction — **FLAG** — rename to `"Capability Boundaries"` to match the H2.

---

## Issue 6

**Type:** Severity miscalibration (MINOR) + classification error
**Location in report:** Banned Construction Scan table, line 218 row; Cat 2.3 finding

**What's wrong:** The scan correctly identifies line 218 as a banned item, but the "Word" column entry is `essential`, and the report describes `essential` as a "BANNED PHRASE." However, `essential` alone does not appear in the banned word list (Frameworks.mdx §2.1 lists: `effectively, essentially, basically, meaningful, significant, real, various, several, obviously, clearly`). The banned item is the full construction `"Understanding X is essential"`, which is a banned phrase listed in both Frameworks.mdx §2.1 and voice-rules.md. The finding is correct but the attribution is wrong — it is a banned phrase, not a banned word. If someone later audits whether `essential` is a banned word, they will not find it and may incorrectly dismiss the flag.

**What should have been said/done:** The "Word" column should state the full banned phrase pattern: `"Understanding X is essential"`. The finding should note it is a banned phrase (Frameworks.mdx §2.1), not a banned word. The fix (delete line 218 entirely) is correct and executable.

---

## Issue 7

**Type:** Missed finding (LOW / borderline)
**Location in report:** Banned Construction Scan, line 302 row

**What's wrong:** Line 302 reads: "If you want to aggregate application demand and route work across multiple Orchestrators, that is the Gateway role." The Banned Construction Scan evaluates this and excuses it as a "Boundary-setter at page edge; not body-prose conditional." The Frameworks.mdx rule as stated is: "`if [condition]` in body prose — Resolve the condition." This sentence IS in body prose. The exemption category "boundary-setter at page edge" is invented by the checker and does not appear in the framework.

Whether this is a true violation is arguable (the sentence redirects to the Gateway path rather than leaving a condition unresolved), but the check should have surfaced the tension and requested human review rather than silently applying a self-invented exemption.

**What should have been said/done:** Note in the scan table: "BORDERLINE — `if [condition]` in body prose; purpose is navigation redirect, not an unresolved condition. Human review recommended." Do not mark it as a clean pass via an unlisted exemption category.

---

## Self-Consistency Issues

**SC-1: Cat 2.3 vs Cat 2.4 — purpose mismatch**
Cat 2.3 is titled "Zero banned phrases" and catches line 218. Cat 2.4 is titled "Zero banned constructions" and passes. However, the note in Cat 2.4 says "No `not [X]` value statements, no unresolved `if [condition]` in body prose" — the latter is arguably unresolved at line 302 (see Issue 7). The two checks partially overlap in scope without clearly delineating which rule class covers which type of violation. This is a structural weakness in the check framework, not a contradiction within this specific report, but it contributed to the missed CustomDivider finding in Issue 5.

**SC-2: Root Cause A fix block**
Root Cause A lists `purpose: 'explain'` as a required fix. Root Cause A also lists `status: 'draft'` as a required fix. The `purpose` fix is wrong (Issue 1). The `status` fix is unsubstantiated (Issue 4). Of the five items in Root Cause A, two should be removed and one downgraded. An executor following Root Cause A as written would make at minimum one incorrect change.

---

## Summary: Impact on Prioritised Fix List

| Row | Action |
|---|---|
| CRITICAL — `purpose: 'concept'` deprecated alias | REMOVE — page already has `purpose: 'explain'` |
| HIGH — `status: current` invalid | DOWNGRADE to INFO — rule source unconfirmed |
| MEDIUM — "Related Pages" generic descriptor | REMOVE — approved structural exception |

The following 11 items in the fix list are reliable and can be executed:
- Broken link line 262 (pricing-strategy path)
- Broken link line 319 (workloads-and-ai path)
- `veracityStatus` missing
- `complexity` missing
- `lifecycleStage` missing
- Banned phrase at line 218 (delete line)
- Heading "How Capabilities Are Advertised" → "Capability Advertisement"
- Heading "How Gateways Select Orchestrators" → "Gateway Selection Factors"
- TODO JSX comment block at lines 34–48 (remove)
- `industry` and `niche` additions (optional — correctly labelled INFO)

**Additional fix not in the report:** CustomDivider `middleText="What Orchestrators Don't Do"` at line 264 → `middleText="Capability Boundaries"` (Issue 5 above).

---

## Verdict

The check report is not reliable enough to use for remediation as-is. The `purpose` false positive is the highest-risk item: the top CRITICAL fix in the Prioritised Fix List addresses a problem that does not exist. An executor following the list from top to bottom will either make a no-op change or introduce a regression. The "Related Pages" false positive will prompt unnecessary structural edits. The unsubstantiated `status: current` rule creates a questionable HIGH-priority change without evidence.

Strip the three items above from the fix list, add the CustomDivider missed finding, and correct the `purpose` field entries throughout the report before passing it to a remediation executor.

---

_Reviewer: Claude Code_
_Date: 2026-03-24_
