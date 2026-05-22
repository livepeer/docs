# Critical Review: navigator.md check report

**Report reviewed:** `v2/orchestrators/_workspace/canonical/check/navigator.md`
**Original page:** `v2/orchestrators/navigator.mdx`
**Date:** 2026-03-24

---

## False Positives

### 1. Finding 1.6 (INFO): "US-style dash" in description

The report flags ` - ` in the frontmatter description as a "US-style dash" and suggests replacing with ` -- `. This is wrong on two counts. First, ` - ` (space-hyphen-space) is not a "US-style dash" -- it is a hyphen used as a separator, which is common in metadata fields across all English variants. Second, the suggested fix (` -- `) is not UK English either; UK English uses an en-dash with no spaces or an em-dash. The correct fix if this mattered would be an en-dash. But more importantly, frontmatter description fields are metadata strings consumed by search engines and social previews. Typographic dash rules do not apply here. This finding should have been omitted entirely or explicitly marked as not-applicable-to-frontmatter.

### 2. Finding 2.1 and 2.2 (LOW): Second-person voice in headings/title

The report flags "Choose Your Starting Point" (line 38) and "Find Your Path" (line 2) as second-person voice violations, then immediately hedges with "navigation pages may warrant an exception." This is not a finding -- it is the checker talking itself out of its own result. The checks framework (Category 2) requires entity-led voice, but the checker correctly noted that navigation pages route by situation. The title and heading are imperative/instructional, which is the correct register for a `pageType: navigation` / `purpose: orient` page. These should have been PASS with a note, not LOW findings. Flagging something and then saying "but maybe it's fine" wastes reviewer time.

### 3. Finding 3.1 and 3.2 heading scores are invented

The report assigns "Score: 21/25" to "Choose Your Starting Point" and "Score: 20/25" to "Quick Reference" but provides no breakdown across the five rubric dimensions (Precision, Depth, Stability, Clarity, Conciseness). Without a per-dimension breakdown, these scores are not reproducible and amount to vibes. The checks framework explicitly defines five dimensions at 5 points each. Claiming a score without showing the maths is asserting, not verifying.

---

## Missed Findings

### 1. Banned construction: "can/may [verb]" in value claim (line 72)

Line 72: "An operator with a capable GPU and minimal LPT **can** register on the AIServiceRegistry and **start receiving** AI jobs immediately."

The checks framework (2.4) bans `can/may [verb]` in value claims. This is a value claim about what an operator achieves. The sentence should assert directly: "An operator with a capable GPU and minimal LPT registers on the AIServiceRegistry and receives AI jobs immediately." The checker marked 2.5 as PASS ("No banned constructions found") but missed this instance.

### 2. Description exceeds self-reference spirit (line 4)

Line 4: "Choose the right orchestrator path based on your situation"

The checks framework (2.4) bans `This page [verb]` self-reference. While the description does not literally say "This page," the imperative "Choose" is a command addressed to the reader, which the voice rules intend to prevent. The description should be entity-led per check 1.11: "Subject-first, no self-reference." The checker flagged this as INFO (1.7) but did not connect it to the harder rule in 2.4 / 1.11 that descriptions must be subject-first. The correct severity is LOW or MEDIUM, not INFO.

### 3. "Optimisation" UK spelling verified but page has "gray area" US spellings unchecked

The checker claimed PASS on 2.6 (UK English throughout), citing "Optimisation" at line 200. But the checker only cited one word as evidence. The page contains "workload goals" (line 4), "model management" (line 201), "troubleshooting" (line 204) -- none of these are US/UK differentiators, but the checker did not demonstrate a systematic scan. More importantly, line 111: "SLAs" -- while not a spelling issue, the checker did not verify whether the page uses any US-only abbreviation conventions. The PASS is probably correct, but the evidence is thin (one word).

### 4. Missing check: component matrix compliance for `navigation` pageType

The checks framework (Category 5, component matrix) states that `navigation` pageType should use "Card, CardGroup" as preferred and avoid "Content components." The page uses `AccordionGroup`, `Accordion`, `StyledTable`, `Note`, `CustomDivider`, `LinkArrow`, and `BorderedBox` in addition to Card/CardGroup. Accordion and Note are listed under `concept` and `guide` pageTypes but are NOT listed as preferred for `navigation`. The checker marked 5.1-5.3 as PASS but did not flag that Accordion, Note, StyledTable, CustomDivider, LinkArrow, and BorderedBox are not in the "Preferred" column for `navigation` pages. This is at minimum a LOW finding that needs a decision-registry entry if these components are approved for navigation pages.

### 5. Missing check: `status: current` requires `veracityStatus: verified` (check 1.8)

The page has `status: current` (line 23) but no `veracityStatus` field. Check 1.8 in the framework explicitly states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." The report flags the missing `veracityStatus` as a standalone MEDIUM finding (1.3) but fails to note the contradiction with `status: current`. This elevates the severity: the page claims to be current while missing the required veracity attestation. This should be HIGH, not MEDIUM.

### 6. Missing check: Required sections for `navigation` pageType (check 5.2)

The checks framework (5.2) states each pageType has mandatory sections. For `navigation`, the matrix says "Portal/routing" under Required sections. The checker did not evaluate whether the page meets this requirement or define what "Portal/routing" means for this page. It is marked PASS (5.2 is not even mentioned) without analysis.

### 7. No cross-tab links (check 4.10)

Check 4.10 requires "at least 3 cross-tab links where audience journeys intersect." Every link on this page points within `v2/orchestrators/`. Zero cross-tab links. The checker did not evaluate this check at all -- it is absent from the report. For a navigator page that routes by situation, at least one situation (e.g., governance) could reasonably link to `v2/delegators/` or `v2/about/` content. This is a missed LOW or MEDIUM finding.

### 8. Check 4.7 (information type per section) not evaluated

The checks framework requires verifying that each section's information type matches the permitted types for the page's `purpose: orient`. The checker skipped this entirely. For a navigation page, the permitted information types should be `structural` (routing) -- but the accordion sections contain `evaluative` claims (e.g., "NVENC/NVDEC use dedicated silicon") and `conceptual` information. This may be fine for a navigator, but the checker should have explicitly evaluated it.

---

## Severity Miscalibration

### 1. Findings 1.1-1.3 (MEDIUM): Missing frontmatter fields should be HIGH

Five missing frontmatter fields (complexity, lifecycleStage, veracityStatus, industry, niche) are the entire reason for the NEEDS WORK verdict. The checks framework severity definitions say MEDIUM means "Inconsistent but does not break downstream consumption." But check 1.1 in the framework says all 10 required fields must be present, and check 1.8 says `status: current` requires `veracityStatus: verified`. Missing required fields DO break downstream consumption (pipeline classification, cold-start agent taxonomy). These should be HIGH: "Incorrect/incomplete on specific cases but does not break downstream" -- or arguably CRITICAL if the pipeline actually uses these fields.

### 2. Finding 1.4-1.5 (LOW): industry and niche are "valid if present"

The checks framework (1.9, 1.10) says these fields are checked "if present" -- they are not listed among the 10 required fields in check 1.1. The report flags them as LOW findings for being missing, but the framework does not require them. These are false findings. If the project has decided these fields are required, that decision should be cited. As written against the framework, these are PASS (field not present, field not required).

### 3. Finding 3.3 (LOW): "All Sections" heading

The report gives this 18/25 and flags it as LOW. This is correct in direction but the score is again unsubstantiated. The heading "All Sections" is genuinely generic -- it could appear on any documentation page. "Orchestrator Guide Directory" or "Section Directory" would be more precise. The finding is valid but the fix suggestions ("Guide Sections", "Section Directory") are barely better than the original.

---

## Vague Fixes

### 1. Finding 1.4: "Add appropriate industry value per taxonomy"

This is the definition of a vague fix. Which industry value? The taxonomy allows: `technical`, `finance`, `economics`, `business`, `marketing`, `governance`, `broadcast`, `AI`, `livepeer`. For a navigation page routing orchestrators, the answer is probably `['technical']` or `['technical', 'infrastructure']` (if niche values are allowed here -- but industry and niche are separate fields). The checker should have proposed the specific value.

### 2. Finding 1.5: "Add appropriate niche value per taxonomy"

Same problem. The valid values are: `web3`, `protocol`, `tokenomics`, `AI`, `video`, `streaming`, `hardware`, `infrastructure`. For an orchestrator navigator, `['infrastructure']` or `['video', 'AI']` would be reasonable. The checker should have proposed a specific value.

### 3. Finding 1.3: "Add `veracityStatus: verified` (page contains routing information, not factual claims)"

The reasoning is wrong. The page DOES contain factual claims: "NVENC/NVDEC use dedicated silicon that does not compete with CUDA" (line 85), "AI inference does not require active set membership" (line 72), "Routing is capability-based, not stake-based" (line 72). The checker's justification for `verified` ("contains routing information, not factual claims") contradicts the checker's own Category 6 findings which identify factual claims. The fix should say: "Add `veracityStatus: verified` -- factual claims on lines 72 and 85 were spot-checked and are directionally correct per Category 6 findings."

---

## Process Issues

### 1. Link verification was likely not actually performed

The report claims "All 20 internal link targets verified to exist as .mdx files on disc" (finding 8.1). I verified all links and they do exist. However, the report counts "20 internal links" without listing them. The actual page contains 22 unique href values (13 in accordion Cards, 6 in table LinkArrows, and 9 in the All Sections CardGroup -- some duplicates across sections bring the unique count to approximately 20-21). The count is close enough to be plausible but the checker should have listed the paths to demonstrate verification rather than asserting a number.

### 2. PREV/NEXT adjacency check was asserted, not verified

Finding 4.3 claims: "Previous: `v2/orchestrators/portal`. Next (in nav): `v2/orchestrators/concepts/role`." I verified against docs.json: navigator is the last page in the "Start Here" group, and the next group is "Concepts" starting with `concepts/role`. This is correct. However, the checker does not explain HOW adjacency was verified (docs.json line numbers, nav structure). For 67 more pages, the check should cite the docs.json line or group name.

### 3. Heading scores lack rubric breakdowns

Findings 3.1, 3.2, and 3.3 assign numerical scores (21/25, 20/25, 18/25) without showing per-dimension ratings. The checks framework defines a 5-dimension rubric. Without breakdowns, these scores cannot be audited or reproduced. The next checker could rate "Quick Reference" at 15/25 or 23/25 with equal justification.

### 4. Voice scan depth unclear

The checker reports PASS on banned words (2.3), banned phrases (2.4), and banned constructions (2.5), claiming to have scanned for all items. But the checker missed "can register" on line 72 (banned construction: `can [verb]` in value claim). This suggests the scan was either automated and incomplete, or manual and not thorough. For 67 more pages, the checker needs to scan every sentence containing "can", "may", "could", "might" and evaluate whether it appears in a value claim context.

### 5. No render verification mentioned

Check 5.6 requires "MDX renders clean" and check 8.5 requires "Page renders without error." The report says "No unclosed tags detected" (5.3) but does not state whether the page was actually rendered in a local Mintlify preview. Static analysis for unclosed tags is not the same as render verification. The checker should state whether the page was rendered or only statically analysed.

---

## Prompting Improvements

### 1. Require per-dimension heading scores

The check prompt should mandate a 5-column breakdown for every heading scored. Format: `| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |`. This prevents invented aggregate scores.

### 2. Require explicit link listing

Instead of "All N links verified," the prompt should require listing every unique href and its resolution status. This is mechanical and can be formatted as a collapsed table. It proves the work was done.

### 3. Add a "components vs matrix" explicit check

The prompt should require the checker to list every component used on the page, then cross-reference each one against the pageType's "Preferred" and "Avoid" columns in the component matrix. The current checker treated "uses appropriate components" as a vibes check rather than a matrix lookup.

### 4. Require citing the framework check number for every finding

The current report uses its own numbering (1.1, 1.2, etc.) that roughly but not exactly maps to the checks framework numbering. For example, report finding 1.1 ("Missing complexity") maps to framework check 1.6, but report finding 1.6 ("US-style dash") maps to framework check 1.11. This makes cross-referencing difficult. The prompt should require: "Framework check [X.Y]: [PASS/FAIL] -- [evidence]."

### 5. Require the checker to evaluate ALL numbered checks, not skip silently

The current report skips checks 4.7, 4.9, 4.10, 5.2, 5.5, 5.8-5.10, 7.3-7.9, 9.1, 9.3-9.6 without comment. Some are not applicable (e.g., 7.9 workspace TTL for a published page), but the checker should explicitly mark them N/A with a one-line reason rather than omitting them. Silent omission makes it impossible to distinguish "checked and fine" from "forgot to check."

### 6. Require the checker to state contradictions between its own findings

The checker found factual claims in Category 6 but justified `veracityStatus: verified` in Category 1 by saying "page contains routing information, not factual claims." The prompt should include: "After completing all categories, review your findings for internal contradictions."

### 7. Add a banned-construction scan protocol

For the `can/may [verb]` check, the prompt should require: "List every sentence containing 'can', 'may', 'could', 'might', 'should'. For each, state whether it appears in a value claim, a procedural instruction, or a conditional. Flag value-claim uses."
