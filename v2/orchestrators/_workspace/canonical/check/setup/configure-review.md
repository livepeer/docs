# Critical Review of Check Report
## `v2/orchestrators/setup/configure.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/configure.md`
**Original page verified against:** `v2/orchestrators/setup/configure.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Result/Detail contradiction (P28)
**Location in report:** Category 2 — check 2.1
**What's wrong:** Check 2.1 (UK English throughout) is marked FAIL. The detail text cites two reasons: (1) `significantly` at line 171 — a banned word, and (2) `rather than` at line 232 — a banned phrase. Neither of these is a UK English violation. `significantly` belongs in check 2.2 (banned words). `rather than` belongs in check 2.3 (banned phrases). Both issues are already correctly caught in checks 2.2 and 2.3 respectively. No actual US spellings are present in configure.mdx (confirmed by scan: no `optimize`, `behavior`, `color`, `center`, `labeled`, `canceled` or equivalent).

Check 2.1 result should be PASS. The FAIL result here is a category misassignment — the underlying findings are real but belong in checks 2.2 and 2.3, where they are already logged correctly.

**What should have been said/done:** Check 2.1 result: PASS. Remove the `significantly` and `rather than` citations from the 2.1 detail — they are already captured in 2.2 and 2.3. This false FAIL in 2.1 inflates the fail count and creates confusion for an executor.

---

### Issue 2
**Type:** Character count not verified (P32)
**Location in report:** Frontmatter Table — description field; check 1.11
**What's wrong:** The report states the description is 143 characters. The actual measured length is 141 characters. The description is formed by the YAML `>-` block scalar which folds the two content lines into a single string: `Set the go-livepeer flags needed to run as an Orchestrator - GPU selection, pricing, session limits, networking, and AI worker configuration.` — this is 141 characters. The description passes check 1.11 either way (under 160), but the stated count is wrong.

**What should have been said/done:** State the correct count: 141 characters. Per P32, the actual characters must be counted before stating a count.

---

### Issue 3
**Type:** Verdict summary counts categories, not check IDs (P49)
**Location in report:** Verdict section
**What's wrong:** The verdict states "Fail count: 17 failures across 9 categories." The actual count of individual FAIL check IDs from the check tables is substantially higher. Counting each FAIL row: Category 1 has 9 FAILs (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13). Category 2 has 6 FAILs (2.1 contested per Issue 1 above, 2.2, 2.3, 2.4, 2.5, 2.10). Category 3 has 3 FAILs (3.1, 3.2, 3.6). Category 4 has 1 FAIL (4.5). Category 5 has 2 FAILs (5.7, 5.10). Category 6 has 3 FAILs (6.5, 6.6, 6.9). Category 8 has 2 FAILs (8.1, 8.6). Category 9 has 2 FAILs (9.1, 9.3). Total: approximately 28 individual FAIL check IDs. The count of 17 corresponds to approximately the number of root-cause categories or distinct issues, not individual check IDs.

**What should have been said/done:** Per P49, the verdict must count individual check IDs. The correct format is: "X checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.1 [contested], 2.2, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.6, 4.5, 5.7, 5.10, 6.5, 6.6, 6.9, 8.1, 8.6, 9.1, 9.3."

---

### Issue 4
**Type:** Missing P51 sign-off language
**Location in report:** Checks 1.6 and 1.7; Frontmatter Table rows for `complexity` and `lifecycleStage`; CC-4 section
**What's wrong:** The report proposes `complexity: intermediate` and `lifecycleStage: setup` as "Concrete fix" values. Per P51, proposed corrected frontmatter values for missing fields `complexity` and `lifecycleStage` must use the format: "Proposed: `[field]: [value]` — confirm before applying." Presenting inferred values as definitive fixes without sign-off language violates P51.

The same applies to `purpose: configure` in check 1.4 and the Frontmatter Table note. The report states definitively "correct value: `purpose: configure`" rather than "Proposed: `purpose: configure` — confirm before applying."

Note: `industry` and `niche` fixes correctly use "Concrete fix" per P41, which requires concrete values for those two fields. The P51 issue is specific to `purpose`, `complexity`, and `lifecycleStage`.

**What should have been said/done:** Change all three:
- "Concrete fix: `complexity: intermediate`" → "Proposed: `complexity: intermediate` — confirm before applying."
- "Concrete fix: `lifecycleStage: setup`" → "Proposed: `lifecycleStage: setup` — confirm before applying."
- "Per page content, correct value: `purpose: configure`" → "Proposed: `purpose: configure` — confirm before applying."

---

### Issue 5
**Type:** Severity miscalibration
**Location in report:** Check 3.6 — title finding
**What's wrong:** The report marks check 3.6 FAIL and labels it "HIGH rather than CRITICAL." Checks.mdx does not define a severity tier for individual check results — checks produce PASS, FAIL, INFO, N/A, NOT-TESTED, or BORDERLINE. The severity labels CRITICAL/HIGH/MEDIUM/INFO belong in the verdict summary and fix prioritisation list, not on individual check rows. Adding "HIGH" to the check 3.6 row misapplies the severity vocabulary.

Additionally, the title `Configuring Your Orchestrator` fails 3.6 because it uses a gerund (`Configuring`) and second-person (`Your`). The report correctly identifies the weakness. The proposed fixes (`Orchestrator Configuration`, `Configure go-livepeer`) are valid and contain no banned terms.

**What should have been said/done:** Remove "FAIL | ... FAIL | Flagging as HIGH rather than CRITICAL" wording from the check row. The check row result is either FAIL or BORDERLINE. Severity can be captured in the verdict/fix list with the appropriate label.

---

### Issue 6
**Type:** Missed finding — em-dash in Accordion title
**Location in report:** Banned Construction Scan; Category 3
**What's wrong:** The page has an Accordion title at the `Variants` section: `Docker - full Orchestrator in a container`. The Banned Construction Scan notes this as "contains ` - ` separator (same style concern as description; not an em-dash)." This is a correct observation. However, the em-dash prohibition scan did not extend to checking Step titles for em-dashes per P48. The seven Step titles are scanned and listed in the BCS: `Set the network`, `Connect to Arbitrum RPC`, `Set the Ethereum account (optional)`, `Enable Orchestrator and Transcoder mode`, `Select the GPU`, `Set the session limit`, `Set the price`, `Set the service address` — none contain em-dashes, so this is a PASS.

The actual gap is minor: P48 requires Step title props to be explicitly included in the em-dash scan list. The report does list them under "Step titles (visible)" but does not explicitly confirm their em-dash scan result in the BCS table. This is an incomplete compliance with P48's documentation requirement, not a missed violation.

**What should have been said/done:** Add a line in the BCS confirming: "Step titles scanned for em-dash — none found." This closes the P48 documentation requirement.

---

### Issue 7
**Type:** Inconsistency in link count arithmetic
**Location in report:** Verdict section — "7/12 internal links verified clean. 4 broken links"
**What's wrong:** The arithmetic does not cleanly resolve. There are 12 links total. 4 are broken. That leaves 8 non-broken links. The report says 7 are "verified clean" — implying 1 is unaccounted for. The most likely explanation: the external link (`tools.livepeer.cloud`, item 6) is correctly marked NOT-TESTED in check 8.2 and is neither "verified clean" nor "broken," leaving 7 confirmed clean (3 via docs.json + 2 anchor links on the same page + tools.livepeer.cloud external = 6, or counting differently). The exact reconciliation is unclear.

This does not affect any finding correctness — the 4 broken links are correctly identified and verified — but the verdict statement is ambiguous and could confuse an executor counting links to remediate.

**What should have been said/done:** Clarify in the verdict: "12 links total: 3 confirmed via docs.json (rs-install, setup-options, cli-flags), 2 internal anchors (#adding-ai-inference, confirmed on-page), 1 external NOT-TESTED (tools.livepeer.cloud), 4 broken via docs.json verification (sc-connect, activate, workloads-and-ai/batch-ai-setup, requirements ×2)."

---

## Summary

**Issue count:** 7
**False positives:** 1 (check 2.1 FAIL has no UK English violation — the cited issues belong in 2.2 and 2.3 where they are already logged)
**Factual errors:** 1 (description length stated as 143; actual is 141)
**Missing process compliance:** 2 (P49 verdict count; P51 sign-off language for purpose, complexity, lifecycleStage)
**Severity miscalibration:** 1 (HIGH label applied within a check row, not in the verdict section)
**Missed documentation step:** 1 (P48 Step title em-dash confirmation not closed in BCS)
**Arithmetic ambiguity:** 1 (link count in verdict does not reconcile cleanly)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above. The substantive findings are accurate and well-evidenced: the four broken links are correctly identified and verified against docs.json; the banned construction scan correctly identifies `This page covers`, `significantly`, and both `rather than` instances; the missing frontmatter fields are correctly flagged; the heading score table is sound; the CC root-cause structure is well-organised; the Blocking Decisions section correctly escalates BD-1 through BD-3. The primary corrections needed before driving remediation are: remove the check 2.1 false FAIL, fix the P49 verdict count, and add P51 sign-off language to the three inferred frontmatter values.
