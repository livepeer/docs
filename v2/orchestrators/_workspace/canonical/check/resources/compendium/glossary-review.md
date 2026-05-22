# Critical Review — `v2/orchestrators/resources/compendium/glossary.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/compendium/glossary.md`
**Learnings applied:** P1–P90 (check report was at P1–P62)
**Original check agent learnings version:** P1–P62

---

## Overall Rating

**MOSTLY RELIABLE**

The original check report is structurally sound and catches the material failures correctly — invalid audience token, missing frontmatter fields, low-scoring headings, veracity gaps. Three corrections are required: (1) the Verdict Summary count is self-contradictory (states 19, parenthetical corrects to 21 — the correct count is 21 and the stated-19 line must be corrected); (2) check 1.11 should be FAIL under P30, not BORDERLINE — P30 applies to all visible text with no borderline category; (3) the P39 fix (F-02) is not atomic — it adds `veracityStatus: unverified` without simultaneously confirming `status: draft` stays, leaving the fix technically incomplete per P84. No new P63–P90 gaps materially change the diagnosis. The report is usable for remediation once the three corrections below are applied.

---

## Corrections Required

### Correction 1 — Verdict Summary count self-contradiction

- **Check ID or finding:** Verdict Summary, line beginning "Confirmed FAIL checks (19):"
- **What the original report stated:** "Confirmed FAIL checks (19):" followed by 21 IDs: 1.1, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.4, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 9.1, 9.3. The parenthetical immediately below self-corrects to 21 but does not remove the stated-19 number.
- **Correction:** The heading must read "Confirmed FAIL checks (21):" and the parenthetical self-correction note must be removed. The actual listed IDs (21) are correct. The stated count (19) is wrong. The parenthetical is a phantom correction — per P83, a phantom note that exists alongside the error it claims to correct is itself a report integrity issue.
- **Rule:** P49 (Verdict Summary must count individual check IDs that FAIL); P26 (verify counts match before closing)
- **Impact on fail count:** No change to the actual fail IDs — only the stated count needs correcting from 19 to 21.

---

### Correction 2 — Check 1.11 classified BORDERLINE; should be FAIL

- **Check ID or finding:** Check 1.11 — `description` well-formed. Frontmatter Table row: "PASS | Subject-first, UK-acceptable; em-dash present — see 1.11/check 2." Check table row: "BORDERLINE | Contains an em-dash (—) — P30 applies…flag for human review: is the em-dash separating genuinely parallel items acceptable here, or must it be rewritten?"
- **Correction:** Check 1.11 must be FAIL, not BORDERLINE. P30 states: "Em-dash prohibition applies to ALL visible text: H2/H3 headings, frontmatter `description` field, body prose, component props." P30 is an absolute prohibition — there is no BORDERLINE category for P30 violations. CLAUDE.md lists em dashes with instruction "rewrite or use hyphens." The question of whether em-dashes separating parallel items are "acceptable" does not exist in the framework — P23 states no exemptions beyond those in checks.mdx/CLAUDE.md. The `description` field contains a literal em-dash (U+2014): `"Key terms for Livepeer orchestrator operators — GPU setup…"`. This is a confirmed FAIL under check 1.11.

  Additionally, the Frontmatter Table row for `description` states PASS — this contradicts the check table row (BORDERLINE). Per P66, both must agree. After correction: both must read FAIL.

  A replacement description must be proposed. Per P44 and P75, the replacement must be self-checked to confirm it contains no em-dash. Proposed replacement (confirm before applying):
  `"Key terms for Livepeer orchestrator operators: GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles."` (137 chars — within 160; colon replaces em-dash; subject-first maintained)

- **Rule:** P30 (em-dash prohibition applies to all visible text including frontmatter description); P66 (Frontmatter Table and check table must agree); P23 (no invented exemptions); P44 (proposed fixes self-checked)
- **Impact on fail count:** +1 (check 1.11 moves from BORDERLINE to confirmed FAIL). Corrected total: **22 confirmed FAILs.**

---

### Correction 3 — F-02 (P39 fix) is not atomic per P84

- **Check ID or finding:** F-02 in the Prioritised Fix List: "Fix: add `veracityStatus: unverified` — confirm before applying. Consistent with `status: draft` and AI-generated content status (P39)"
- **Correction:** The P39 fix must be atomic: one single fix item that states both actions together. The source page has `status: draft` — not `status: current` — so the P79 incoherence concern does not apply directly here. However, P84 requires the fix to be stated as an atomic unit to prevent partial execution. The current F-02 says "add `veracityStatus: unverified`" only. It does not confirm in the fix text that `status: draft` must be retained. An executing agent could apply F-02 and then independently change `status` without the cross-reference.

  Corrected F-02 fix text: "Add `veracityStatus: unverified` AND retain `status: draft` (do not change to `status: current`). Both actions are one atomic change. Consistent with AI-generated content status (P39/P64)."

  Note: This is a lower-severity correction than Corrections 1 and 2 because the `status: draft` value is already correct — the risk is execution drift, not a wrong-state recommendation.

- **Rule:** P84 (P39 fix must be atomic — one item that states both changes together)
- **Impact on fail count:** No change — this is a fix-text correction, not a FAIL/PASS change.

---

## Corrected Fail Count

**Original report stated fail count:** 19 (parenthetical in report self-corrects to 21)
**Corrections: +1 (check 1.11 BORDERLINE → FAIL)**
**Corrected fail count: 22**
**Corrected FAIL IDs (complete list):** 1.1, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.4, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 9.1, 9.3

---

## New Findings (P63–P90 gaps)

Checking each P63–P90 rule against the report:

**P63 (question-form headings as 3.1 not 3.2):** Not applicable. None of the headings on this page are question-form. No gap.

**P64 (valid veracityStatus values):** The report correctly uses `unverified` as the proposed value. No invented values. No gap.

**P65 (phantom fix entries):** All fix entries (F-01 through F-12) are actionable. No "no action required" entries in the fix list. No gap.

**P66 (Frontmatter Table and check table must agree):** Identified in Correction 2 above. The `description` field is PASS in the Frontmatter Table and BORDERLINE in the check table — these disagree. This is a P66 violation already captured in Correction 2.

**P67 (Frontmatter Table evaluates schema compliance only):** The Frontmatter Table row for `status: draft` reads "PASS (INFO)" — the INFO qualifier is not a problem here; it correctly identifies `draft` as canonical while noting informational context. No schema-valid values marked FAIL on editorial grounds. No gap.

**P68 (BD sections must not include Recommendation line):** BD-1 closes with "Recommended action: Confirm `glossary-data.json` exists adjacent to this MDX before shipping." This is a Recommendation line inside a BD section. Per P68, BD sections must list options and downstream dependencies only — no Recommendation line. This is a minor gap. The BD should end after stating the consequence ("If missing, the Note link is broken and CI will fail") without the Recommendation line.
**Severity:** INFO — the recommendation is correct but the format violates P68. Does not change FAIL count.

**P69 (check 2.4 row must note em-dash P30 cross-reference):** The Banned Construction Scan table correctly logs the description em-dash under P30. The check 2.4 row states "Em-dashes excluded per P62" — it does not include the cross-reference to the fix ID per P69 ("Em-dashes tracked under P30 — see F-[IDs] in fix list"). There is no fix list entry for the description em-dash (it was classified BORDERLINE and excluded from the fix list). After Correction 2 above upgrades 1.11 to FAIL, a fix entry will exist and the check 2.4 row must add: "Em-dashes tracked under P30 — see F-01a (or the corrected F-01 renaming) in fix list." This is a co-fix dependency of Correction 2, not an independent gap.

**P70 (FACT CHECK without source = 6.5 FAIL + 6.9 FAIL):** The original report notes zero `{/* REVIEW: */}` flags and zero `{/* FACT CHECK */}` blocks. No FACT CHECK format issues present. No gap.

**P71 (cross-report consistency check for batch runs):** This is a single-page review, not a batch. Not applicable.

**P72 (read component-layout-decisions.mdx once at batch start):** Single-page review. Not applicable.

**P73 (self-link → note in Banned Construction Scan):** No self-links identified in the check report or source page. No gap.

**P74 (em-dash scan must explicitly cover description field, H2/H3 headings, and body prose as three separate scan targets):** The check report's Banned Construction Scan table has one entry for the description em-dash (line 4) and notes it. H2 headings are listed in the Heading Score Table — none contain em-dashes (verified: `Livepeer Protocol Terms`, `AI Terms`, `Economic Terms`, `Video Terms`, `Web3 Terms`, `Hardware Terms`, `Technical Terms`, `Operational Terms` — none contain em-dashes). Body prose scan was performed. The three explicit targets were covered, though not labelled as separate scan targets per P74. **Minor gap: the scan did not explicitly label the three targets.** Result is correct; structure is absent. Does not change FAIL count.

**P75 (proposed fix text self-checked before recording):** F-02 fix text does not introduce new violations. F-07 (keywords) and F-08 (heading renames) were P18-checked. F-09 (REVIEW flags) — the proposed REVIEW flag text is in MDX comment format, not visible prose. No violations. No gap.

**P76 (`depends on` without ranked list in fix text):** No fix text introduces `depends on`. No gap.

**P77 (staleness tier labels on protocol figures):** The report correctly applies P77. Staleness tiers are labelled for each finding in the veracity assessment: Active Set = HIGH, gas cost = HIGH, inflation rate = HIGH, round duration = MEDIUM, cold start latency = MEDIUM, LIP-89 governance parameters = HIGH. No gap.

**P78 (MDX comments not check 5.4 failures):** Check 5.4 is correctly marked PASS. No MDX comments were flagged as check 5.4 violations. No gap.

**P79 (P39 fix never recommends `status: current` + `veracityStatus: unverified`):** The fix (F-02) does not recommend keeping `status: current`. The source page has `status: draft`. No incoherent combination recommended. No gap beyond the atomicity issue captured in Correction 3.

**P80 (verdict completeness — all FAIL IDs from check tables listed):** The report lists 21 IDs in the verdict (though states 19). Counting the check tables: Category 1 FAILs: 1.1, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13 (8); Category 2: 0; Category 3: 3.1, 3.4, 3.7 (3); Category 4: 0; Category 5: 5.7 (1); Category 6: 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9 (7); Category 7: 0; Category 8: 0; Category 9: 9.1, 9.3 (2). Total from tables: 21. The Verdict Summary lists exactly these 21 — count in the list header is wrong (19) but IDs are complete. No IDs suppressed. After adding 1.11 (Correction 2), corrected total is 22. P80 is satisfied for the IDs; only the count header needs correction (already captured in Correction 1).

**P81 (pre-check for file integrity before category analysis):** The source file lines 1–10 are clean frontmatter — no content before the opening `---` delimiter. The check report does not include a "Pre-Check: File Integrity" section. However, P81 only requires this section when content appears before the opening `---`. Since lines 1–10 of the source page are clean frontmatter (`---` at line 1, fields 2–20, closing `---` at line 21), the pre-check section is not required and its absence is correct. No gap.

**P82 (banned word citations must quote surrounding sentence + line number for each occurrence):** The banned words scan logs candidates with verification notes. Line citations in the scan table are approximate (e.g., "line 1082") but the check report explicitly states it sampled ~30% of the file due to length. The format is adequate for the sampling approach declared. No confirmed gap, though a full scan would be stronger.

**P83 (no phantom fix entries — leave gap with explicit comment):** All 12 fix entries (F-01 through F-12) are actionable. No placeholders. No gap.

**P84 (P39 fix must be atomic):** Captured in Correction 3 above.

**P85 (check 3.1 is ONE check ID regardless of how many headings fail):** The check report correctly counts 3.1 as a single FAIL check ID. Four failing headings are listed as sub-findings within check 3.1, not as separate IDs. No gap.

**P86 (em-dash vs hyphen verification before marking title FAIL):** The title `Orchestrator Glossary` contains no em-dash or hyphen. Check 3.6 is correctly PASS. No gap.

**P87 (`pageType: overview` as type-confusion error):** Source page has `pageType: reference` — not `overview`. Not applicable.

**P88 (joint VRAM verification note for models appearing on multiple pages):** This is a glossary page. It contains a VRAM reference in the SearchTable ("Cold Model" entry) but no model-specific VRAM figures that would trigger P88 joint-verification logic. The high-staleness items are protocol parameters, not VRAM figures. No gap.

**P89 (decisions must be in decision-registry.md, not just session log):** Check 9.2 was marked NOT-TESTED with the note: "Cannot verify against decision-registry.md without reading it." This is correct procedure under P22 logic — if the file was not read, the result is NOT-TESTED, not PASS. No fabricated PASS. No gap. (The decision-registry was not read in the check session — the NOT-TESTED result is the correct handling.)

**P90 (`status: published` = wrong-enum error, not §1.8 coherence failure):** Source page has `status: draft` — not `status: published`. P90 does not apply. No gap.

---

## Summary of BD-1 Format Issue (P68)

As noted under P68 above:

**BD-1** closes with the line: "Recommended action: Confirm `glossary-data.json` exists adjacent to this MDX before shipping."

Per P68, this line should be removed from the BD section. The BD should end after: "If missing, the Note link is broken and CI will fail (`check-ai-companions.yml`)." The recommended action — confirming the companion JSON exists — is obvious from the stated consequence and does not require an explicit Recommendation line in the BD body.

This does not change any FAIL count and does not affect remediation.

---

## Proposed Learnings

Cross-checked against full learnings.md P1–P90 before listing. Two patterns not currently captured:

**Candidate new pattern — Self-contradictory count with parenthetical inline correction:**
The report stated "FAIL checks (19):" and then immediately added a parenthetical "Corrected count: 21..." in the same line. This is a new failure mode distinct from P26/P49 (which cover counts that contradict the check table). Here, the count is internally contradicted within the Verdict Summary itself — the stated number and the parenthetical disagree in the same sentence. P26 and P49 do not explicitly cover this intra-sentence contradiction pattern. Suggested addition: "When self-correcting a count during report finalisation, update the stated number — do not leave both figures. A stated count and a parenthetical correction in the same sentence create an ambiguous report." However, this may be adequately covered by P26 (verify counts match before closing). **Recommend noting as a P26 application example rather than a new rule.**

**Candidate new pattern — BORDERLINE applied to absolute prohibitions:**
The report applied BORDERLINE to check 1.11 for an em-dash in the frontmatter description. P30 is absolute — it covers all visible text. There is no BORDERLINE category for P30 violations. The pattern of applying BORDERLINE to checks that have no BORDERLINE pathway in the framework is a recurring issue (P23 addresses it for banned constructions; P60 addresses it for confirmation FAILs). The gap is: no rule explicitly states that absolute prohibitions (P30, P61) cannot produce BORDERLINE results. **Proposed addition:** "BORDERLINE classification is only valid when checks.mdx or CLAUDE.md explicitly provides a 'human review required' pathway for the finding type. Absolute prohibitions (P30 em-dash, P61 REVIEW format) cannot produce BORDERLINE results — they are FAIL or PASS with no intermediate state."

_If this pattern warrants a new P-rule, it would be P91._
