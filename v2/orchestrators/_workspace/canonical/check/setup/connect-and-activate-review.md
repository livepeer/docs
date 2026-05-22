# Critical Review of Check Report
## `v2/orchestrators/setup/connect-and-activate.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/connect-and-activate.md`
**Original page verified against:** `v2/orchestrators/setup/connect-and-activate.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** False positive
**Location in report:** Check 8.1 — Internal links resolve
**What's wrong:** The report flags `href="/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning"` (line 93 of the page, line 249 of the page as rendered in the report) as "NOT verified in docs.json. Link target not found in the docs.json excerpt reviewed." This is incorrect. The path `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` is confirmed present in docs.json at lines 2921–2924. The checker used a partial "excerpt reviewed" instead of running a full lookup, then flagged the link as broken without confirming absence. Per learnings.md P33: "Broken link findings must verify the target against docs.json before flagging."
**What should have been said/done:** Check 8.1 result should be PASS for this link. The `reward-call-tuning` link is in docs.json and is not broken. The finding at priority item 7 in the "Blocking Decisions / Priority order" section should be removed.

---

### Issue 2
**Type:** Missed finding
**Location in report:** Banned Construction Scan — missing entries for lines 197 and 225
**What's wrong:** The banned construction scan is incomplete. Two `can/may [verb]` constructions in the body content were not scanned:

- **Line 197** (inside `<Note>` component): "so Explorer **can show** Registered until the next round begins." This is `can [verb]` in a factual operational claim about system state — identical pattern to the flagged line 249 "can spend."
- **Line 225** (bulleted list, body): "**Status** shows Active (**may show** Registered until the next round completes)" — `may show` in a factual operational claim.

The checks.mdx check 2.4 bans `can/may [verb]` in value claims. The checker's own scan scope (line 192 of the report) explicitly states "Tip/Warning/Note content" is included. Line 197 falls inside a `<Note>` block. Line 225 is a bullet in the Steps section. Neither was listed in the Banned Construction Scan table.
**What should have been said/done:** Both occurrences must be listed in the scan table:
- Line 197: `can show` — FLAG. Factual operational claim. Fix: "Explorer shows Registered until the next round begins."
- Line 225: `may show` — FLAG. Factual operational claim. Fix: "Status shows Active; it shows Registered until the next round completes."

Check 2.4 result remains FAIL but the flagged count should be 5 constructions, not 3.

---

### Issue 3
**Type:** Inconsistency (veracityStatus fix violates P39)
**Location in report:** Check 1.8, Check 6.6, Cross-Category Connections Root Cause 1, Priority order item 1
**What's wrong:** The report consistently recommends `veracityStatus: unverified` as the fix throughout (check 1.8 detail, check 6.6 detail, Root Cause 1 fix block, priority item 1). The page already has `status: current`. Learnings.md P39 states explicitly: "`status: current` requires `veracityStatus: verified`. The valid fixes are: change `status` to `draft`, OR add `veracityStatus: verified` only when the content is actually verified. Never recommend `status: current` + `veracityStatus: unverified`."

The report recommends the exact combination P39 prohibits: `status: current` + `veracityStatus: unverified`. It flags the combination as a conflict in check 1.8 detail but then recommends perpetuating it.
**What should have been said/done:** The fix in check 1.8, check 6.6, Root Cause 1, and priority item 1 must state: "Either change `status: draft`, or resolve all TODO flags and unverified numbers and set `veracityStatus: verified`. Do not pair `status: current` with `veracityStatus: unverified`."

---

### Issue 4
**Type:** Missed finding
**Location in report:** Category 1 Frontmatter Table — `industry` and `niche` rows; checks 1.9 and 1.10
**What's wrong:** The report marks `industry` and `niche` as INFO/N/A — "Optional field. Not required per check 1.9/1.10." This is incorrect per the project's own learnings record. Learnings.md Batch 1 item 1 states: "User confirmed these ARE required. The critical reviews were wrong to call them optional. 'Valid if present' means validate the value when present — it does NOT mean optional." The checks.mdx wording "valid if present" refers to value validation, not field optionality. Both fields are required.
**What should have been said/done:** `industry` and `niche` should be FAIL in the Frontmatter Table with proposed values, not INFO/N/A. Check 1.9 and 1.10 should be FAIL. Proposed values: `industry: [technical]` (or `[technical, finance]`); `niche: [web3, infrastructure]`. The frontmatter summary count "5 required fields missing" should be 7 (adding industry and niche). The Cross-Category Connections Root Cause 1 fix block should include these two fields.

---

### Issue 5
**Type:** Result/detail contradiction
**Location in report:** Check 2.5 and Check 2.10
**What's wrong:** Both check 2.5 and check 2.10 are marked FAIL and reference the same issue: the Warning component at lines 34–36 appearing before body content. Check 2.5 detail calls it "structurally borderline — functionally it serves as a prereq signal. BORDERLINE: prefer H1 or direct opening line before component callouts. Not hard-blocking." Check 2.10 detail says "not a hard fail but adds friction." Both describe a borderline / non-hard-blocking condition yet both return FAIL. The detail text explicitly says "not hard-blocking" and "BORDERLINE" — these are markers of a PASS with a note or BORDERLINE result, not FAIL. This inflates the FAIL count.

Additionally, this is a duplicate finding (same issue logged twice in two checks) violating learnings.md Batch 1 item 4 / P13 on deduplication.
**What should have been said/done:** One of the two checks should be the primary finding; the other should cross-reference it rather than independently FAIL. The result for the primary check should be BORDERLINE (or PASS with a note) given the detail text's own "not hard-blocking" and "BORDERLINE" language. The duplicate should be removed or marked as a cross-reference.

---

### Issue 6
**Type:** Missed finding (em-dash in description)
**Location in report:** Check 1.11 — description well-formed; Frontmatter Table description row
**What's wrong:** The `description` field reads: `'Connect the orchestrator to the Livepeer protocol on Arbitrum - fund the wallet, stake LPT, register the service URI, and activate on-chain.'` The hyphen in ` - fund` (space-hyphen-space) is a common em-dash substitute. Learnings.md P30 states: "Em-dash prohibition applies to ALL visible text: H2/H3 headings, frontmatter `description` field, body prose, component props. Not restricted to body prose." CLAUDE.md states: "No em dashes — rewrite or use hyphens."

However, the Frontmatter Table note for the description field reads: "Hyphens used where em-dashes are prohibited; character count 157 — just within 160 limit; US hyphen list convention acceptable here." The checker both identifies the hyphen pattern and then acquits it as "US hyphen list convention acceptable here." No such exception exists in CLAUDE.md or checks.mdx — the rule is simply no em dashes. A space-hyphen-space ( - ) is an em-dash substitute. The proposed fix in check 1.11 uses an actual em dash (`—`) in the suggested text, which would be a regression.
**What should have been said/done:** The description hyphen should be flagged as a potential em-dash substitute construction. The proposed fix in check 1.11 must not introduce an em dash. Fix for description: rewrite as a genuine subject-first sentence without any em-dash construction, e.g. "Activate a Livepeer orchestrator on Arbitrum One: fund the wallet with arbETH, stake LPT, register the service URI, and call the activation transaction." Note: the proposed fix at 160 characters is exactly at the limit and should be verified per learnings.md P32.

---

### Issue 7
**Type:** Severity miscalibration
**Location in report:** Checks 2.5 and 2.10 (see also Issue 5); also check 3.1 for "Troubleshooting connection issues"
**What's wrong:** Check 3.1 marks "Troubleshooting connection issues" as FAIL at 18/25. The pass threshold is ≥20/25. 18 is below threshold — this FAIL is technically correct. However, the score breakdown for this heading has an internal consistency issue: the conciseness note says "'issues' slightly padded" yet awards Conciseness 3/5, while awarding Clarity 4/5. A heading that scores 18/25 total fails. This is not an error but the heading score notes are borderline inconsistent (Conciseness and Depth penalised but for different stated reasons). No material error; flagged for awareness only.

---

### Issue 8
**Type:** Missed finding
**Location in report:** Check 2.2 — Zero banned words; Banned Construction Scan
**What's wrong:** Per learnings.md P24, banned word/construction scans must show the work — "list every candidate match considered, even when the result is PASS." Check 2.2 declares PASS with "Scan: no `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` found." This lists the criteria without listing every candidate sentence considered. There is no evidence of line-by-line scan.

Also: CLAUDE.md lists `just` and `simply` as banned minimisers. The check report declares the banned word scan used "no `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real`, `various`, `several`, `obviously`, `clearly`" — this does not include `just` and `simply`. Neither word appears in the page (confirmed), but the scan criteria stated in the report are incomplete relative to CLAUDE.md. This is a process gap, not a missed finding on this specific page.
**What should have been said/done:** Check 2.2 should list all candidate words scanned (including `just` and `simply` per CLAUDE.md) and note their absence from the page. The current PASS is correct for this page but the evidence trail is incomplete.

---

### Issue 9
**Type:** Inconsistency
**Location in report:** Check 3.2 — banned tier classification for "Next step"
**What's wrong:** The report states `"Next Steps"` is in the **Avoid** tier per Frameworks.mdx §4.1. The actual heading on the page is `"Next step"` (singular). Checks.mdx §3.2 lists the **Banned** tier as: `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`. The **Avoid** tier includes: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. "Next step" (singular) is not explicitly in either tier — the report conflates it with "Next Steps" (plural, Avoid tier). The heading still fails check 3.1 scoring (10/25) regardless of tier classification, but the tier attribution is inaccurate.
**What should have been said/done:** The check 3.2 finding should note "Next step" is not explicitly in the banned or avoid tiers but fails on the heading score rubric (10/25 < 20/25 threshold) per check 3.1. The primary finding is the rubric failure, not a tier classification. The tier reference should be corrected or removed.

---

### Issue 10
**Type:** Missed finding
**Location in report:** Check 5.2 — Required sections present
**What's wrong:** The component matrix in checks.mdx defines the Avoid list for `instruction` pageType as "Coming Soon, PreviewCallout." The matrix does not prohibit TODO/TBD in the Avoid column — that is handled by check 5.4. However, the report's check 5.2 finding ("Prerequisites section is absent") proposes the correct migration path. The issue is elsewhere: the report does not flag that the page uses `StyledSteps`/`StyledStep` where the component matrix for `instruction` lists "Steps, Step, CodeGroup, Warning, Check, Tip" as Preferred. `StyledSteps`/`StyledStep` are not in the Preferred list. The report marks this NOT-TESTED under check 5.3, but does not draw the explicit connection that the steps components used may not match the Preferred column for the target pageType. This is a legitimate gap.
**What should have been said/done:** Check 5.3 should note that `StyledSteps`/`StyledStep` are not in the `instruction` Preferred column (which lists `Steps, Step`) and flag the discrepancy as needing verification against `docs-guide/policies/component-layout-decisions.mdx`. The current NOT-TESTED result is acceptable but the specific mismatch should be called out explicitly.

---

## Summary

**Issue count:** 10
**False positives:** 1 (Issue 1: reward-call-tuning link flagged as unverified despite being present in docs.json)
**Missed findings:** 4 (Issues 2, 4, 8, 10 — two `can/may` constructions; industry/niche required fields; banned word scan completeness; StyledSteps component mismatch)
**Other errors:** 5 (Issues 3, 5, 6, 7, 9 — veracityStatus fix inconsistency per P39; duplicate/contradictory FAIL on borderline opening; em-dash exception invented for description; heading score note inconsistency; incorrect tier attribution for "Next step")

**Report overall quality:** MOSTLY RELIABLE
**Recommended action:** Use with corrections noted above

**Priority corrections before acting on the report:**
1. Remove the `reward-call-tuning` broken link finding (Issue 1 — false positive, link confirmed in docs.json)
2. Add `veracityStatus` fix consistent with P39 (Issue 3 — do not recommend `status: current` + `veracityStatus: unverified`)
3. Add `industry` and `niche` as FAIL with proposed values (Issue 4 — required fields, not optional)
4. Add lines 197 and 225 to banned construction scan (Issue 2 — two missed `can/may` violations)
5. Resolve check 2.5 / 2.10 duplication and calibrate result to match "not hard-blocking" language (Issue 5)
6. Correct the description em-dash finding and remove the invented "US hyphen list convention" exception (Issue 6)
