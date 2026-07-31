# Critical Review — `v2/orchestrators/resources/faq.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/faq.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated (report header does not cite a learnings version)

---

## Overall Rating

MOSTLY RELIABLE

The report correctly identifies the major failure clusters: open TODO block, missing taxonomy fields, em-dashes in description and headings, `purpose: faq` as a wrong-field error, banned word `significantly`, and stale Rinkeby reference. Cross-category connections are well-grouped. Two corrections are required: one mischaracterisation of error type, and one count/ID discrepancy in the verdict.

---

## Corrections Required

**Correction 1 — `purpose: faq` error type mischaracterised (check 1.4)**
- **Check finding:** Report states `faq` is "a deprecated alias. Correct value: `reference`."
- **Correction:** `faq` is not a deprecated alias — it is an invalid value that is not in either the 7-type pageType schema or the 15-value pagePurpose schema. The correct error characterisation per P37 is: (c) invalid value — not in either schema. `faq` was a deprecated pageType in the 12-type schema; it is not a valid pagePurpose value even in the old schema. The distinction matters for the fix: the executor needs to know this is not a simple enum update from old schema to new, but a field that was given a completely wrong value.
- **Rule:** P37
- **Impact on fail count:** No change — check 1.4 remains FAIL; the finding ID and fix are unchanged.

**Correction 2 — check 8.6 rationale contains a false premise**
- **Check finding:** Report marks 8.6 FAIL and states: "TODO is in a `{/* ... */}` JSX comment which Mintlify does not render, but it constitutes an open task in published source."
- **Correction:** Per P78, MDX comments (`{/* ... */}`) are not rendered in page output and cannot constitute a check 5.4 failure (avoided components). The same principle applies to check 8.6: the `{/* TODO */}` block at lines 30–52 is an MDX comment and does not render as visible `TODO/TBD/Coming Soon` content in the published output. Check 8.6 pass criteria reads "No TODO/TBD/Coming Soon in published content" — content in non-rendered comments is not "published content." Check 8.6 must be PASS. The open TODO tasks are correctly flagged under checks 6.5, 6.9, 9.1, 9.3, 9.4, and 9.6 — those findings stand.
- **Rule:** P78
- **Impact on fail count:** -1 (remove 8.6 from FAIL list)

**Correction 3 — P84 atomicity: F-02 and status fix are split**
- **Check finding:** F-02 adds multiple missing frontmatter fields including `veracityStatus: unverified` as one item, and also says "Also change `status: review` to `status: draft`" in the same fix block.
- **Correction:** This is actually atomic — the fix block combines both changes together. No split exists here; F-02 is compliant with P84. No change needed.
- **Rule:** P84
- **Impact on fail count:** No change.

**Correction 4 — P91: Accordion titles and bodies not scanned for banned words/em-dashes**
- **Check finding:** The banned word scan (check 2.2) scans "body prose" and finds `significantly` at line 332. The em-dash prohibition scan (P30) lists `description field` and heading text but does not explicitly state whether Accordion titles were scanned.
- **Correction:** Per P91, all content scans must include Accordion body text and Accordion titles. The report's Banned Construction Scan table shows the description field and headings but does not explicitly confirm Accordion title text was scanned for em-dashes. Source file inspection confirms the Accordion titles use em-dashes: e.g., `title='GPU not detected — the -nvidia flag returns no devices'` (line 66). The report's heading score table only scored H2-level headings — it did not score or scan Accordion titles. This is a scan gap. The em-dash in that Accordion title is a P30 violation that was not logged. Additional Accordion title violations may exist — the report cannot be considered complete on the P30 scan.
- **Rule:** P91, P30
- **Impact on fail count:** +0 to confirmed FAILs (1.11 is already FAIL for description em-dash; 3.1 already FAIL). However, the fix list F-01 must be extended to include Accordion title em-dashes, and additional instances should be flagged for the executing agent.

**Correction 5 — P96: Known-failing heading patterns not explicitly checked**
- **Check finding:** The heading score table scores 7 headings. `FAQ — General Questions` is flagged as weak. The known-failing pattern `## Overview`, `## Introduction`, `## Summary`, `## Next steps` were not explicitly called out as a P96 scan.
- **Correction:** Source file confirmed: the headings present do not include any of the P96 known-failing list (`What happened`, `Overview`, `Introduction`, `Summary`, `Next steps`, `Related`). `Still Stuck?` is a question-form heading (correctly caught under P63 as a check 3.1 issue). The `## FAQ — General Questions` pattern is not on the P96 list. No missed P96 violations. This is PASS on P96 compliance.
- **Rule:** P96
- **Impact on fail count:** No change.

**Correction 6 — check 6.5: TODO block is an MDX comment — P78/P61 interaction**
- **Check finding:** Check 6.5 FAIL — "TODO block (lines 30–52) uses `{/* TODO: ... */}` format, not `{/* REVIEW: [claim] — [source] */}`. Per P61, `{/* TODO */}` does not satisfy check 6.5."
- **Correction:** The TODO block (lines 30–52) is an MDX comment that does not render. It is not a veracity claim. P61 specifies that `{/* FACT CHECK */}` and `{/* TODO */}` comments on veracity claims do not satisfy check 6.5. But the TODO block here is a page-level authoring checklist, not a veracity claim format. It contains no factual claims requiring REVIEW flags. Check 6.5 failure should be based on unverified factual claims in body prose that lack `{/* REVIEW: */}` markers — not on the existence of a TODO block. The check 6.9 FAIL (open-ended tasks without named sources) correctly captures the TODO block issue. Check 6.5 FAIL is not supported by this evidence alone. Check 6.5 should be re-evaluated: are there unverified factual claims in the body prose lacking REVIEW flags? The veracity claims inventory (lines 186–197 of the check report) lists several unverified claims (active set top-100, LPTU conversion, round length) without REVIEW flags — these do properly fail check 6.5. The 6.5 FAIL stands but the rationale should cite the missing REVIEW flags on body-prose claims, not the TODO comment block.
- **Rule:** P61, P78
- **Impact on fail count:** No change — 6.5 remains FAIL but rationale is clarified.

---

## Corrected Fail Count

**Original report fail count:** 29
**Adjustments:** -1 removal (8.6)
**Corrected fail count:** 28
**Corrected FAIL IDs:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.2, 2.4, 2.5, 2.10, 3.1, 3.7, 4.2, 5.7, 6.1, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3, 9.4, 9.6

---

## New Findings (gaps from older learnings version)

**P90 — `status: review` (not `status: published`):** The original check correctly treats `status: review` as a non-canonical enum value (INFO in Frontmatter Table). P90 covers `status: published` specifically. The report's handling of `status: review` as INFO with a fix to `status: draft` is correct. No P90 issue.

**P91 — Accordion title em-dash scan gap (identified above):** The em-dash scan did not explicitly confirm coverage of Accordion titles. Source file shows Accordion title at line 66 contains an em-dash: `'GPU not detected — the -nvidia flag returns no devices'`. This is a P30/P91 gap. The fix list F-01 should be extended: the executing agent needs to scan all Accordion title props for em-dashes and apply the same replacement pattern (`—` → `:` or restructure).

**P92 — `purpose: faq` wrong-field check:** The check identifies `faq` as invalid but calls it "deprecated alias." P92 is about `purpose: guide` as a specific wrong-field error. `purpose: faq` is a different error mode — it is an invalid value in either schema. This should be characterised as error type (c) per P37, not as a deprecated alias.

**P93 — No false positive found:** No content contradictions were flagged without adjacent context being read first. N/A.

**P94 — docs.json check performed correctly:** Report header confirms docs.json line 2969. No navigation orphan. P94 is satisfied.

**P95 — No sibling page overlap raised:** No overlap between faq.mdx and adjacent pages was flagged. A review of the Resources section suggests community-guides.mdx and faq.mdx do not meaningfully overlap. No BD warranted.

**P96 — Known-failing heading patterns:** Explicitly verified above. No P96 violations present in the source file headings.

---

## Proposed Learnings

**New pattern — Accordion title em-dash scan must be explicitly confirmed in the report:**
When the Banned Construction Scan confirms "no em-dashes in headings," the report must additionally state whether Accordion `title` props were scanned, not just H2/H3 headings. P91 requires Accordion titles in all scans. A P91-compliant scan explicitly lists the Accordion titles checked. Add to future check prompts: "After H2/H3 heading scan, list every Accordion title prop checked for em-dashes and banned words."
