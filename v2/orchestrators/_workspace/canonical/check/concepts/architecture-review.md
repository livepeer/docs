# Check Report Review — Second Pass
## `v2/orchestrators/concepts/architecture.mdx`

**Reviewing:** `v2/orchestrators/_workspace/canonical/check/concepts/architecture.md`
**Against:** `v2/orchestrators/concepts/architecture.mdx`
**Date:** 2026-03-24
**Reviewer:** Claude Code (independent second pass)

---

## Summary Verdict

**Do not use for remediation as-is.**

The report contains one fabricated finding that has propagated into three separate sections (false `purpose` alias claim), one finding that directly contradicts a documented approved exception ("Related Pages"), factual errors in the navigation sequence stated under check 4.3, two missed banned constructions (line 328 "This is what happens", line 374 "several"), and an internal self-inconsistency in the severity summary count.

The verifiable findings — broken links, missing frontmatter fields, REVIEW flags, heading score failures for content headings — are sound and can be acted on. The fabricated findings and false positives must be stripped before the fix list is executed. Executing the fix list as written will waste effort on a non-existent problem (`purpose`) and incorrectly rename an exempted structural element ("Related Pages").

---

## Issues Found

---

**Issue 1**
**Type:** False positive
**Location in report:** Frontmatter Table (`purpose` row), Check 1.4, Check 5.7, Cross-Category Connection CC-4, Summary Fix List item 1
**What's wrong:** The report states `purpose: 'concept'` is present in the page and must be changed to `purpose: 'explain'`. The actual page has `purpose: 'explain'` at line 30. The deprecated alias `'concept'` does not appear in the frontmatter. The checker reported a problem with a value it did not read correctly.
**What should have been said/done:** Check 1.4 PASS. Check 5.7 entry for this criterion PASS. CC-4 deleted entirely. Fix item 1 deleted. The Frontmatter Table row must read: `purpose | Yes | 'explain' | PASS | Canonical 15-value set`. The HIGH severity count in the Summary must drop by one.

---

**Issue 2**
**Type:** False positive
**Location in report:** Heading Score Table (H2: Related Pages row, line 126), Check 3.2 (line 206), Summary Fix List item 10
**What's wrong:** The report scores "Related Pages" at 13/25 FAIL and flags it under check 3.2 as a generic descriptor, then recommends renaming it to "Next Steps". The task brief for this review explicitly states: "Related Pages heading is an approved structural element — exempt from check 3.1 scoring and check 3.2." The checker applied the rubric to an exempted structural element.
**What should have been said/done:** "Related Pages" must be excluded from the heading score table or marked N/A with a note citing the approved exception. Check 3.2 must not flag it. Fix item 10 must be deleted. The fail count in the heading score summary must be corrected from "7 of 16 headings fail" to "6 of 15 scored headings fail."

---

**Issue 3**
**Type:** Missed finding
**Location in report:** Banned Construction Scan (absent), Check 2.4 (FAIL notes only line 58)
**What's wrong:** Line 328 reads: "This is what happens when a Gateway sends a job to an Orchestrator, from receipt through result delivery and payment accumulation." The banned construction `This is what happens` is structurally identical to the banned form `This page [verb]` caught at line 58 — it is a meta-description of the content that follows rather than the content itself. The checker caught line 58 but missed line 328.
**What should have been said/done:** Flag line 328 as a banned construction alongside line 58. Fix: delete the sentence. The H2 heading "Request Flow" already communicates what follows; the bridging sentence adds no information and must be removed per the standing rule "Prose restating a table — delete it."

---

**Issue 4**
**Type:** Missed finding
**Location in report:** Check 2.2 (banned words — PASS)
**What's wrong:** Line 374 reads: "The go-livepeer binary can be deployed in several physical configurations depending on hardware scale and operational requirements." The word "several" is a banned minimiser per the CLAUDE.md banned words list. The checker explicitly listed "several" in its check 2.2 criteria but returned a PASS without catching this instance.
**What should have been said/done:** Check 2.2 FAIL. Flag line 374. Proposed fix: "The go-livepeer binary supports three deployment configurations." (The three configurations are named in the Tabs that immediately follow, so the count is verifiable and "several" is both vague and redundant.)

---

**Issue 5**
**Type:** Missed finding
**Location in report:** Banned Construction Scan, Check 2.3 (banned constructions — PASS)
**What's wrong:** Two banned constructions in the page body were not caught:

- Line 156: "If the Orchestrator fails or is slow, the Gateway will deprioritise it in future selection." The CLAUDE.md banned construction list includes `if [condition]` in body prose, with the instruction to state the threshold directly rather than use a conditional.
- Line 158: "The Orchestrator does not choose which Gateways to work with." This is a `not [X]` as primary statement — also a banned construction per the list. The clause that follows ("selection runs in the opposite direction") contains the actual information.

The checker returned PASS on check 2.3 without catching either.
**What should have been said/done:** Check 2.3 FAIL. Flag both lines. For line 156, fix by stating the consequence directly: "Gateways deprioritise Orchestrators that fail jobs or exceed latency thresholds in future selection." For line 158, flip the sentence: "Gateways choose Orchestrators based on capability, price, and performance — selection is unilateral and runs from Gateway to Orchestrator, not the reverse."

---

**Issue 6**
**Type:** False positive (factual error)
**Location in report:** Check 4.3 (PREV_PAGE / NEXT_PAGE adjacency — PASS)
**What's wrong:** The report states the docs.json navigation sequence is `role → architecture → capabilities → incentive-model`. The actual sequence in docs.json (lines 2841–2844) is `role → capabilities → architecture → incentive-model`. Architecture is the third concept page, not the second. The check still reaches a defensible PASS verdict because architecture follows capabilities logically, but the stated sequence is factually incorrect and any future adjacency reasoning built on this claim will be wrong.
**What should have been said/done:** Correct the stated sequence to `role → capabilities → architecture → incentive-model`. The PASS verdict on 4.3 may still hold; the rationale must state the correct order.

---

**Issue 7**
**Type:** Self-consistency
**Location in report:** Verdict paragraph (lines 10–12) vs Summary — Findings by Severity table (lines 410–416)
**What's wrong:** The verdict paragraph states: "One CRITICAL (broken internal link), two HIGH (missing required frontmatter fields, deprecated `purpose` value), three MEDIUM." The Summary table shows CRITICAL: 2, HIGH: 4. These counts contradict each other on both CRITICAL and HIGH. The verdict paragraph appears to be a draft that was not updated after the full check was completed. Both embed the fabricated `purpose` finding, which further distorts the HIGH count.
**What should have been said/done:** After removing the fabricated `purpose` finding and the "Related Pages" heading finding, the corrected counts are: CRITICAL: 2 (both broken links stand), HIGH: 3 (missing `complexity`, `lifecycleStage`, `veracityStatus`), MEDIUM: at minimum 4 (self-referential opener, "Video vs AI Pipelines" contrast label, 6 failing content headings, Mermaid hex pending BD-1). The verdict paragraph and Summary table must agree.

---

## Valid Findings Retained

The following findings were verified against the source file and should be retained for remediation:

- **CRITICAL:** Broken link at line 462 (`/contract-addresses` → `/x-contract-addresses`) — confirmed against docs.json line 2978
- **CRITICAL:** Broken link at line 478 (`/payment-flow` does not exist on disk or in docs.json) — confirmed
- **HIGH:** `complexity` field absent from frontmatter — confirmed
- **HIGH:** `lifecycleStage` field absent from frontmatter — confirmed
- **HIGH:** `veracityStatus` field absent; 2 open REVIEW flags at lines 208 and 443 — confirmed; field must be `unverified`
- **MEDIUM:** Self-referential opener at line 58 ("This page explains...") — confirmed, banned construction, fix is correct (delete lines 58–59)
- **MEDIUM:** H3 "Video vs AI Pipelines" at line 280 — confirmed literal contrast label, violates check 3.3; "Pipeline Comparison" fix is reasonable
- **MEDIUM:** Heading score failures for H2 "Orchestrator Layer Context", H2 "Orchestrator Interactions", H3 "Lifecycle Steps", H2 "Setup Configurations", H2 "Software Components" — scores and proposed renames are defensible
- **MEDIUM (pending BD-1):** Hardcoded Mermaid hex colours — BD-1 escalation is appropriate
- **LOW:** TODO comment block at lines 35–48 in published file — confirmed
- **INFO:** No cross-tab link to Gateway architecture (checks 4.10, 7.6) — noted correctly
- **BD-2, BD-3, BD-4, BD-5:** All four blocking decisions are correctly identified and appropriately escalated to human decision

---

_Owner: Alison Haire (Wonderland) . Updated: 2026-03-24_
