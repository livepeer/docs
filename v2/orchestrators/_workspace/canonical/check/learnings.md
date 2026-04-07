# Check Run Learnings

What works, what doesn't, and how to adjust prompting across batches.

## Batch 1 — Findings from Critical Review

### What worked
- Reports correctly identified missing frontmatter fields, TODO blocks, deprecated values
- Link verification was mostly accurate (portal: 6/6, navigator: 20/20)
- UK English and banned word scans were clean
- Report structure was readable and verdict rationale made sense

### What broke (systematic problems across all 3 reports)

1. **~~`industry`/`niche` flagged as required — they're optional.~~** CORRECTION: User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them. "Valid if present" means validate the value when present — it does NOT mean optional.

2. **Heading scores invented without rubric breakdown.** Scores like "21/25" given with no per-dimension (Precision/Depth/Stability/Clarity/Conciseness) evidence. Not reproducible.

3. **Fixes say "add appropriate X" — not actionable.** A different agent can't execute "add appropriate industry." Must specify concrete values.

4. **Related findings not connected across categories.** `status: current` + missing `veracityStatus` + TODO block = one problem logged as 3 separate findings in 3 categories.

5. **Checks silently skipped.** Navigator report skipped checks 4.7, 4.9, 4.10, 5.2, 5.5, 7.3-7.9, 9.1, 9.3-9.6 without marking them N/A. Can't tell "checked and passed" from "forgot to check."

6. **Banned construction scan missed `can [verb]` in value claims.** Navigator line 72: "can register" missed while checker declared PASS.

7. **No link verification on index.** 80+ links, zero verified. Checker logged "not verified" as a MEDIUM finding instead of doing the work.

8. **No component-vs-matrix cross-reference.** Navigator uses Accordion, Note, StyledTable — none in the "Preferred" column for `navigation` pageType. Not flagged.

9. **No dead import detection.** Portal has 5 unused imports (H1, H2, H5, P, CustomDivider). Not caught.

10. **No spelling/typo pass.** Index has "Adresses" and "Feasibilits" typos. Not caught.

11. **Duplicate entries not flagged.** Index has two "Join a Pool" entries. Not caught.

12. **Generated pages: script not read.** Index report references the generation script 5+ times but never reads it to find root causes.

### Prompting Changes for Batch 2

| # | Change | Rationale |
|---|--------|-----------|
| P1 | Require 10-field table: field / present? / value / pass-fail | Prevents required/optional conflation |
| P2 | Require per-dimension heading score breakdown (5×5 grid) | Prevents invented scores |
| P3 | Fixes must specify concrete values — no "or as appropriate" | Makes fixes executable by another agent |
| P4 | Add "Cross-Category Connections" section to report | Forces linking related findings |
| P5 | ALL numbered checks must appear — mark N/A with reason if skipped | Prevents silent omission |
| P6 | Banned construction scan protocol: list every can/may/could/might sentence, classify as value-claim or not | Prevents missed violations |
| P7 | Require mechanical link verification (ls/glob at least 20% sample) | Prevents "not verified" findings |
| P8 | Require component-vs-matrix cross-reference table | Prevents vibes-based layout checks |
| P9 | Add dead import check | Missed in all 3 reports |
| P10 | Add spelling/typo pass on all visible text | Missed typos in index |
| P11 | For generated pages: read the generation script first | Root cause > symptom |
| P12 | Add TESTED/NOT-TESTED label on every veracity finding | Prevents hedged "REVIEW" findings |
| P13 | Deduplicate cross-category findings — log once, cross-ref | Prevents inflated finding counts |
| P14 | Add "blocking decision" section when page purpose is ambiguous | Structures conditional fixes |

## Batch 3 — Findings from Critical Review (Batch 3: role.mdx, capabilities.mdx, architecture.mdx)

### What worked
- Frontmatter field presence checks were accurate
- Link verification was executed (some broken links correctly identified)
- UK English and banned word scans partially caught violations
- Veracity claims inventory was structured and mostly complete
- Blocking decisions were correctly escalated (BD-1 through BD-5 across pages)

### What broke (systematic problems across all 3 reports)

1. **Purpose field inferred from pageType instead of read directly.** Both capabilities and architecture reviews fabricated a CRITICAL false positive: checker saw `pageType: concept` and reported `purpose: 'concept'` (deprecated alias) when the page had `purpose: 'explain'`. The purpose field was not read. This cascaded into: false FAIL in Frontmatter Table, false HIGH in summary, phantom top-priority fix that — if executed — could regress a correctly-set field.

2. **"Related Pages" heading scored and flagged despite explicit exemption.** All 3 reports violated this. Role: partially corrected (removed from score table but left in check table cell, Category 3 verdict count, and check 3.7 rationale). Capabilities: fully scored at 15/25, included in fail count, flagged as 3.2 failure. Architecture: fully scored at 13/25 FAIL, recommended renamed to "Next Steps." The instruction "exempt from check 3.1 scoring and check 3.2" is not being applied.

3. **Self-consistency correction only patched one location.** When role.md's self-consistency review corrected the "Related Pages" 3.2 finding, it removed it from the score table but left the FAIL entry in the check table, the count in the Category 3 verdict, and the reference in check 3.7. A remediation executor following the check table would act on a retracted finding.

4. **Heading rename suggestions contained terms from the 3.2 prohibited list.** Role.md recommended `Operator Profiles` as a fix for a heading — when `Profiles` is explicitly in check 3.2's prohibited terms list. Checker proposed a fix that reintroduces the violation it was trying to resolve.

5. **Unverified definition strings proposed as executable fixes.** Role.md proposed a specific definition for "Cascade" as an inline Note, ready to execute, when the definition is AI-generated and not verified against any authoritative source. Unverified content proposed as a fix creates a silent veracity regression.

6. **CustomDivider props not scanned for banned constructions.** Capabilities.mdx `CustomDivider middleText="What Orchestrators Don't Do"` not caught. Banned construction scan scope listed headings, Tip, Note, body prose, table cells, card descriptions — but not CustomDivider props.

7. **Schema rule asserted without source citation.** Capabilities review asserted "status: current requires veracityStatus: verified AND zero REVIEW flags" as a schema constraint and used it to recommend changing `status` to `draft`. No checks.mdx section cited. When a schema constraint cannot be cited, it must be downgraded to INFO and flagged as "inferred policy."

8. **Component not in approved list → FAIL without reading the approval file.** ScrollableDiagram and CenteredContainer marked FAIL without reading `docs-guide/policies/component-layout-decisions.mdx`. An unverified component check result is NOT-TESTED, not FAIL.

9. **Exemptions invented for banned constructions.** Capabilities review classified a banned `if [condition]` construction as a "boundary-setter at page edge" and excused it. This exemption category does not exist in checks.mdx or CLAUDE.md. No exemptions can be applied that are not in the framework.

10. **Banned word "several" declared PASS after checker listed it in criteria.** Architecture.mdx line 374 has "several" (banned minimiser). Checker listed "several" in its criteria scan, returned PASS. The word was present but not caught. Declaring a result without showing the work allows misses.

11. **Navigation sequence stated from memory, not from docs.json.** Architecture review stated the sequence as `role → architecture → capabilities` when docs.json shows `role → capabilities → architecture`. Check 4.3 (adjacency) must read docs.json, never infer from memory.

12. **Verdict summary counts contradicted the check table.** Architecture review verdict paragraph stated different CRITICAL/HIGH counts from the Summary table. The two sections of the same report disagreed.

13. **First occurrence of jargon in Mermaid/diagram labels not treated as first use.** BYOC first appears in a Mermaid timeline label at line 164 before the prose occurrence at line 176. Checker identified line 176 as first use. When a term appears in a diagram label, the fix requires a Note after the diagram block, not just an inline definition at the prose occurrence.

### Prompting Changes for Batch 4

| # | Change | Rationale |
|---|--------|-----------|
| P15 | Read `purpose` field from frontmatter directly. State the exact value in Frontmatter Table. Never infer from pageType | Prevents fabricated CRITICAL false positives on concepts pages |
| P16 | "Related Pages" heading is excluded from the Heading Score Table entirely — no row, no N/A, no score. Check 3.2 must not mention it. Check 3.7 must not reference it. The exemption is total | Incomplete exemption instruction let all 3 checkers partially violate it |
| P17 | Self-consistency corrections must enumerate every location where the corrected finding appears (score table, check table, verdict, cross-category connections, fix list) and update ALL of them before closing the report | Partial corrections leave contradictions that corrupt remediation |
| P18 | Every heading rename suggestion must be validated against the check 3.2 prohibited list: `Types`, `Profiles`, `Modes`, `Overview`, `Basics`, `Details`, `Information`, `Getting Started`. Do not propose a rename that uses these terms | Prevents circular violations |
| P19 | Any definition or explanatory text proposed as a fix must use REVIEW placeholder format: `{/* REVIEW: [term] — verify definition against [source] before inserting */}`. Never write a definition string as if it is verified content | Prevents silent veracity regression via unverified inline definitions |
| P20 | Banned construction scan scope explicitly includes: CustomDivider `middleText` props, AccordionGroup `title` props, Tabs `title` props, any other visible component prop | CustomDivider label missed in capabilities.mdx |
| P21 | Any finding that asserts a schema rule (field X requires field Y) must cite the specific checks.mdx section number. If no citation possible, downgrade to INFO: "inferred policy — source required before actioning" | Prevents invented schema constraints with HIGH severity |
| P22 | If the component approval file (`docs-guide/policies/component-layout-decisions.mdx`) was not actually read, the component result is NOT-TESTED. Do not mark FAIL without reading the file | Unverified component checks inflate FAIL counts |
| P23 | No exemptions to banned constructions beyond those in checks.mdx/CLAUDE.md. When a construction matches the pattern but intent is unclear, flag as BORDERLINE and request human review — do not invent an exemption category | "Boundary-setter at page edge" invented exemption |
| P24 | Banned word/construction scan must show the work: list every candidate match considered, even when the result is PASS. A PASS with no matching candidates listed is not verifiable | "Several" declared clean after being listed in criteria |
| P25 | Check 4.3 (PREV_PAGE/NEXT_PAGE adjacency) requires reading docs.json to confirm sequence. State the specific docs.json lines that were read. Never state a navigation order from memory | Architecture review got sequence wrong |
| P26 | Before closing the report, verify verdict summary counts match the check table FAIL entries. If they disagree, the report is not complete | Verdict/summary contradictions in all 3 reports |
| P27 | When scanning for undefined-at-first-use jargon, check diagram labels and code blocks as first-use candidates. For terms appearing first in Mermaid blocks: propose (1) a Note after the diagram block, and (2) an inline definition at the first prose occurrence | BYOC first-use line incorrectly identified |

## Batch 4 — Findings from Critical Review (Batch 4: operator-impact.mdx, delegate-operations.mdx, realtime-ai-setup.mdx)

### What worked
- P15 held across all 3: purpose field read directly from frontmatter, not inferred from pageType. Caught `evaluation`, `guide` as non-canonical values correctly.
- P21 held: no invented schema rules without citation.
- P22 held on realtime-ai-setup: custom components marked NOT-TESTED rather than FAIL.
- P25 held: operator-impact confirmed nav sequence from docs.json with line references.
- Veracity findings were specific: named numbers, named sources, no "verify this" loose ends.
- Broken link correctly identified with specific path (delegate-operations).

### What broke (systematic problems across Batch 4 reports)

1. **Result column contradicts the checker's own detail.** Checks 2.1, 2.2, 3.6 had FAIL in the result column when the checker's detail text concluded PASS. This inflates apparent failure counts and causes executing agents to act on phantom failures. Appeared in 2/3 reports.

2. **Verdict/count mismatches still occurring.** Operator-impact: "6 failures" stated, 7 IDs listed. Delegate-operations: "FAIL count: 14" stated, actual count is 24. Realtime-ai-setup: heading scores in narrative (16, 14, 17) contradicted the score table (13, 12, 16). P26 from Batch 3 was not fully effective.

3. **Em-dash prohibition not applied to headings or frontmatter description.** CLAUDE.md prohibits em dashes. Checkers applied this only to body prose. Em dashes in H2/H3 headings and in the frontmatter `description` field went unflagged on 2/3 pages.

4. **Unverified occurrences reported as facts.** Operator-impact: second `meaningfully` reported at "line 192 in body prose" — line 192 is blank, the word appears once only. Realtime-ai-setup: BYOC reported as undefined at first use in body prose — the term only appears in the `keywords` frontmatter field. Wrong line numbers throughout (258 vs 256, 214 vs 213). Checkers are not verifying cited content against the actual file.

5. **Orphaned findings.** `can be done` finding in operator-impact check 2.4 never appeared in the Banned Construction Scan table or the fix list. Finding raised in one section, abandoned in others.

6. **Self-contradictory veracityStatus fix.** Operator-impact correctly identified that `status: current` + `veracityStatus: unverified` is incoherent per checks.mdx §1.8, then recommended exactly that combination as the fix.

7. **Link false positive without verification.** Realtime-ai-setup: `/v2/gateways/setup/configure/pricing-configuration` flagged as unverified/broken — it exists in docs.json at line 2628. The link was not checked before flagging.

8. **Invalid severity level.** Delegate-operations used "LOW" severity. Valid levels are CRITICAL / HIGH / MEDIUM / INFO only.

9. **Error type mischaracterised.** Delegate-operations check 5.7 described `purpose: guide` as a "12-type deprecated value." `guide` is a valid 7-type canonical pageType. The error is using a pageType value in a purpose field — a different failure mode from deprecated alias.

10. **Finding evaluated against proposed future state.** Delegate-operations check 4.7 evaluated information type mapping against the proposed `purpose: operate` rather than the actual `purpose: guide`. All findings must evaluate the current state of the page.

11. **Rename suggestions not checked for semantic overlap.** Delegate-operations: renaming "Why delegators matter" to "Delegation Mechanics" was proposed without noting near-identical overlap with the existing "The delegation mechanics…" H2 on the same page.

### Prompting Changes for Batch 5

| # | Change | Rationale |
|---|--------|-----------|
| P28 | Result column must match the detail text conclusion. If detail concludes PASS, write PASS. If FAIL, write FAIL. Before finalising the report, scan every check row: if Result says FAIL but detail says PASS (or vice versa), fix the entry | Inflated failure counts in 2/3 reports |
| P29 | Every cited occurrence of a banned word/term must be verified against the actual file before reporting. Scan the file, count instances, quote the content at the cited line. Do not cite a line number without quoting the content there. | Fabricated second `meaningfully`; wrong line numbers throughout |
| P30 | Em-dash prohibition applies to ALL visible text: H2/H3 headings, frontmatter `description` field, body prose, component props. Not restricted to body prose. | Missed in headings and description on 2/3 pages |
| P31 | Heading scores cited in narrative or verdict text must match the score table exactly. Copy from the table; do not restate from memory. | Narrative vs table contradiction on realtime-ai-setup |
| P32 | When proposing replacement text with a stated character count, count the actual characters in the proposed text before stating the count. | Proposed description fix stated as 163 chars but was 169 |
| P33 | Broken link findings must verify the target against docs.json before flagging. State the docs.json line where you confirmed presence or absence. If the link is in docs.json, it is not broken. | False positive on valid link |
| P34 | A finding raised in the check category section must appear in all applicable report sections (scan table if it's a banned construction, fix list if it has a fix), or be explicitly closed: "Not in fix list — [reason]." No orphaned findings. | `can be done` abandoned mid-report |
| P35 | All findings evaluate the current state of the page as it exists, not a proposed post-fix state. If a check depends on a field value that you are also recommending be changed, note the dependency and evaluate the current value. | Check 4.7 evaluated against proposed purpose |
| P36 | Use only four severity levels: CRITICAL / HIGH / MEDIUM / INFO. "LOW" is not a valid level. Closest equivalent is INFO. | Invalid severity in delegate-operations |
| P37 | When describing why a frontmatter value fails, characterise the error correctly: (a) deprecated alias: value was valid in old schema, no longer valid; (b) wrong field: value is valid but placed in the wrong field (e.g. pageType value in purpose field); (c) invalid value: not in either schema. Checker must state which type of failure applies. | `purpose: guide` mischaracterised as deprecated alias |
| P38 | Heading rename suggestions must be checked against other existing headings on the same page before proposing. If a rename would create a near-identical heading to an existing one, note the conflict and propose a disambiguated version. | Delegation Mechanics / The delegation mechanics conflict |
| P39 | veracityStatus fix must be internally consistent with checks.mdx §1.8: `status: current` requires `veracityStatus: verified`. The valid fixes are: change `status` to `draft`, OR add `veracityStatus: verified` only when the content is actually verified. Never recommend `status: current` + `veracityStatus: unverified`. | Self-contradictory fix in operator-impact |
| P40 | Terms that appear only in the frontmatter `keywords` field are not undefined at first use in body prose. Only scan body prose and visible component props for first-use violations. | BYOC false positive on realtime-ai-setup |

## Batch 5 — Findings from Critical Review (setup/guide, setup/connect-and-activate, setup/rcs-requirements, quickstart/guide, quickstart/AI-prompt-start, concepts/incentive-model, quickstart/video-transcoding, quickstart/tutorial)

### What worked
- P15 (read purpose directly) held across all reports
- P25 (docs.json for nav sequence) held with explicit line citations
- P33 (verify links before flagging) partially improved — some false positives still occurred
- P39 (veracityStatus consistency) being caught by critical reviewers when violated
- Blocking decisions correctly escalated across all setup/quickstart reports
- Veracity findings specific and sourced in setup pages

### What broke (systematic problems across Batch 5 reports)

1. **`industry`/`niche` still marked INFO or N/A.** Appears in 4+ reports this batch. Learnings.md Batch 1 item 1 explicitly states the user confirmed these are required fields. Checking as optional is a recurring regression despite P1 correction.

2. **`pageVariant` absence treated as independent finding.** Check 1.3 (pageVariant) only fires when a deprecated pageType is being migrated. Flagging it as a separate HIGH finding inflates failure count. It is a co-fix dependency, not an independent violation.

3. **Fix proposals introduce banned constructions.** At least 2 reports this batch proposed replacement text containing em-dashes (—) as fixes for other issues. A fix that introduces a banned construction is worse than no fix.

4. **Finding IDs not unique.** incentive-model check had F-11 used twice. Any executing agent following the fix list gets ambiguous instructions. Finding IDs must be sequential and unique within a report.

5. **Conflicting canonical fixes.** rcs-requirements had two different fix proposals for the same `not [X]` construction — one in check 2.4 and a different one in the Banned Construction Scan table. One canonical fix per finding, referenced in both places.

6. **`not [X]` flagged under check 2.2 (banned words).** `not [X] as primary statement` is a banned construction, not a banned word. Belongs exclusively in check 2.4 and the Banned Construction Scan table. check 2.2 result must not be FAIL for this.

7. **Link substring matching.** AI-prompt-start-review caught a false PASS: link contained `workloads-and-ai` folder prefix; docs.json uses `ai-and-job-workloads`. Substring match on the page slug alone is insufficient — full path must match.

8. **Em-dashes in step title headings missed.** "Step 1 — Pull the AI runner image" style headings go uncaught despite P30. Step title props are visible H-level text; P30 covers all visible text including step headings.

9. **Category verdict count conflates field-level and check-level.** AI-prompt-start check reported "5 PASS, 6 FAIL" for Category 1 when there were 1 PASS and 8 FAIL actual check IDs. The field-level frontmatter table rows were being counted as checks.

10. **`pageType: guide` flagged as check 1.2 FAIL.** `guide` is a valid canonical pageType per the 7-type schema. If a checker recommends changing a valid pageType, it belongs in an INFO note, not a check 1.2 FAIL. Schema validation ≠ editorial recommendation.

11. **Proposed frontmatter values presented as definitive.** Inferred correct values (purpose, complexity, lifecycleStage) stated as fixes without flagging they require human sign-off. Correct format: "Proposed: `purpose: start` — confirm before applying."

12. **Pre-emptive bias in INFO rows for unresolved blocking decisions.** guide.mdx (quickstart) INFO row said "Once `pageType` is corrected to `instruction`..." when Blocking Decision 1 had two equal options (navigation or instruction). INFO rows must not prejudge unresolved decisions.

13. **T4 VRAM error hedged when primary source is unambiguous.** "appears to be incorrect" is wrong framing when NVIDIA's T4 datasheet clearly states 16GB. Unambiguous factual errors (verifiable from primary source) are stated as facts with the fix, not hedged as possibilities.

14. **Verdict Summary counts categories, not individual check IDs.** incentive-model check stated "9 FAIL checks" when there were 28 individual FAIL check IDs. P26 was added for this — it continues to fail. Verdict summary must list the count of individual FAIL check IDs, not the count of categories that contain failures.

### Prompting Changes for Batch 6

| # | Change | Rationale |
|---|--------|-----------|
| P41 | `industry` and `niche` are REQUIRED fields (user-confirmed, Batch 1). Flag both as FAIL with concrete proposed values when absent. Never write N/A or INFO for these two fields | Persistent regression across 4+ reports this batch |
| P42 | Check 1.3 (pageVariant) is a co-fix dependency of check 1.2. When pageType is deprecated, set `pageVariant` as part of the same root cause fix. Do not log check 1.3 as an independent HIGH finding | Creates inflated failure counts and confusing remediation instructions |
| P43 | Before finalising a report, verify all finding IDs are unique and sequential (F-01, F-02… with no repeats). A duplicate ID makes the fix list unexecutable | F-11 used twice in incentive-model report |
| P44 | Proposed fix text must be self-checked against the report's own banned word and construction rules before including. If a proposed replacement contains an em-dash, `can [verb]`, banned word, or self-referential opener, rewrite the fix | Multiple reports proposed fixes that introduced new violations |
| P45 | Each finding has exactly one canonical fix. If the same finding appears in two sections (check table and Banned Construction Scan), both sections must state the identical fix text. Do not propose different replacements in different sections for the same occurrence | Conflicting fixes in rcs-requirements |
| P46 | `not [X] as primary statement` is a banned construction (check 2.4). It is not a banned word (check 2.2). Check 2.2 result must be PASS when the only violation is a `not [X]` construction | Miscategorisation in rcs-requirements check |
| P47 | Link verification must confirm the full path in docs.json, not just the page slug. Before declaring a link valid, verify the complete href (including folder prefix) appears in docs.json | Substring match passed `workloads-and-ai` when docs.json uses `ai-and-job-workloads` |
| P48 | Step title headings (e.g. StyledStep `title` props) are within P30 scope for em-dash prohibition. When listing step titles in the heading scan section, include them in the em-dash scan | "Step N — [action]" pattern missed in AI-prompt-start |
| P49 | Verdict Summary must count individual check IDs that FAIL, not the number of categories containing failures. State: "X checks fail: 1.1, 1.2, 1.3..." | P26 continues to fail — stronger instruction needed |
| P50 | `pageType: guide` (and any other value from the 7-type canonical schema) is a check 1.2 PASS. Editorial recommendations to change a valid pageType belong in a separate INFO note with clear framing: "Schema-valid but editorial recommendation: consider [alternative]" | guide.mdx check incorrectly failed check 1.2 for valid value |
| P51 | When proposing corrected frontmatter values for missing fields (purpose, complexity, lifecycleStage), format as: "Proposed: `[field]: [value]` — confirm before applying." Do not present inferred values as definitive without human sign-off | Inferred values presented as instructions in AI-prompt-start check |
| P52 | When a blocking decision has two or more equal options, any INFO rows or co-fix notes that depend on the outcome must frame both options neutrally: "If [Option A]: [value]. If [Option B]: [value]." Do not default to one option in a pre-fix note | Quickstart guide INFO row prejudged Option A |
| P53 | The heading exemption in P16/check 3.1/3.2 applies ONLY to the exact heading text `Related Pages`. No other heading is exempt: `See also`, `See Also`, `Also see`, `Related`, `Further Reading`, `Next Steps` are all subject to normal scoring. Test for exact match only | r-monitor checker exempted `## See also` as "Related Pages equivalent" — this is wrong. `See also` is Banned-tier and must be flagged |
| P54 | Check 2.1 (UK English) must only flag actual US spelling patterns: -ize endings, -or vs -our, -er vs -re, words like `behavior`/`behaviour`, `color`/`colour`. Banned words found during 2.1 analysis belong in check 2.2. Banned constructions belong in check 2.4. Do not FAIL check 2.1 for violations that belong in another category | configure.mdx check 2.1 failed for `significantly` (→ 2.2) and `rather than` (→ 2.3/2.4) when no US spellings were present — 2.1 should be PASS |

## Batch 7 — Findings from Critical Review (guides section: payments-and-pricing, roadmap-and-funding)

### What broke (systematic problems)

1. **`## Related` misclassified as Avoid-tier.** Frameworks.mdx §4.1 explicitly places `Related` in the OK tier: "acceptable standalone when content warrants; `Related` as a section marker for link clusters is fine." Multiple check reports flagged `## Related` as an Avoid-tier check 3.2 violation. This is wrong.

2. **`This page [verb]` / `This [noun] will [verb]` double-counted in checks 2.3 and 2.4.** These are banned constructions (check 2.4), not banned phrases (check 2.3). When the only 2.3 violation is this type, check 2.3 result must be PASS. The finding belongs only in check 2.4 and the Banned Construction Scan table.

3. **`status: published` veracityStatus incoherence over-cited.** checks.mdx §1.8 only covers `status: current` requiring `veracityStatus: verified`. For `status: published` (a non-canonical value), the veracityStatus FAIL stands independently (field is absent and required), but the specific incoherence claim about `published` requiring verification has no explicit citation — downgrade to INFO-inference per P21.

4. **P28 regression: result/detail mismatch still occurring.** orchestrator-profiles check had check 3.2 FAIL in result column but detail text concluded PASS. Despite P28 being in the prompt since Batch 5.

### Prompting Changes for Batch 7

| # | Change | Rationale |
|---|--------|-----------|
| P55 | `## Related` is OK-tier per Frameworks.mdx §4.1. Do not flag it as Avoid-tier in check 3.2. It still receives a heading score on check 3.1 — the score may fail on Precision/Depth/etc., but the tier classification itself is not a 3.2 violation | Misclassified as Avoid-tier across multiple reports |
| P56 | `This page [verb]` and `This [noun] will [verb]` are banned constructions (check 2.4). They are NOT banned phrases (check 2.3). When the only check 2.3 violation is this pattern, check 2.3 result must be PASS. The finding belongs in check 2.4 and the Banned Construction Scan table only | Double-counting in 2.3 + 2.4 creates false 2.3 FAILs and inflated counts |
| P57 | For `status: published` (non-canonical value): flag it as an invalid `status` value under check 1.8 (valid values: `current`, `draft`). The veracityStatus FAIL is independent. Do not extend the §1.8 incoherence citation to cover `published` status without a source — use P21 and downgrade to INFO if no direct citation | Invented schema constraint without citation |

## Prompting Notes

- Batch 1 prompt: full checks.mdx categories 1-9, review execution guide, severity definitions
- Report format: per-page markdown with findings using severity format from checks.mdx
- Batch 2 prompt: incorporates P1-P14 changes above
- Batch 3 prompt: incorporates P1-P27 changes above
- Batch 4 prompt: incorporates P1-P40 changes above
- Batch 5 prompt: incorporates P1-P52 changes above
- Batch 6 prompt: incorporates P1-P54 changes above
- Batch 7 prompt: incorporates P1-P57 above

## Batch 8 — Findings from Critical Review (guides section: config-and-optimisation)

### What broke

1. **Check 2.4 pre-marked FAIL before Banned Construction Scan completes.** Two reports (capacity-planning, pricing-strategy) marked check 2.4 FAIL in the check table row before running the Banned Construction Scan, then found no violations in the scan but never corrected the check table row back to PASS. This is a P28 violation (result column must match detail text). The pattern suggests checkers are filling in a default FAIL for 2.4 before doing the work.

### Prompting Changes for Batch 8

| # | Change | Rationale |
|---|--------|-----------|
| P58 | Check 2.4 result must be determined AFTER completing the Banned Construction Scan. Do not fill in check 2.4 result until the scan is done. If the Banned Construction Scan finds no violations, check 2.4 result is PASS. If it finds violations, check 2.4 result is FAIL. Never pre-fill the result | Two reports pre-filled FAIL then never corrected when scan found nothing |

- Batch 8 prompt: incorporates P1-P58 above

## Batch 9 — Findings from Critical Review (guides section: monitoring-and-tooling)

### What broke

1. **NOT-TESTED entries counted as FAILs in verdict.** metrics-and-alerting checks 6.2 and 6.3 were listed as NOT-TESTED in check table rows but counted as FAILs in the Category 6 verdict and Overall Verdict. NOT-TESTED is a distinct result state — it means the check was not performed, not that it failed. Counting NOT-TESTED as FAIL inflates failure counts and creates phantom remediation items.

2. **BORDERLINE findings counted as confirmed FAILs.** explorer-operations and troubleshooting both included BORDERLINE-classified checks in the final FAIL count. BORDERLINE means human review is required before a determination can be made — it is not a confirmed FAIL. P23 covers this for banned constructions, but the same principle applies to any BORDERLINE classification.

3. **`{/* FACT CHECK */}` treated as equivalent to `{/* REVIEW: */}`.** operator-toolbox check 6.5 rated PASS on the basis that `{/* FACT CHECK */}` is "functionally equivalent" to `{/* REVIEW: */}`. These are different formats. checks.mdx §6.5 requires `{/* REVIEW: [claim] — [source] */}` format specifically. Any other format is a check 6.5 FAIL.

4. **Em-dashes used as sole basis for check 2.4 FAIL.** (Confirmed from ai-and-job-workloads batch B.) Em-dash violations are P30 scope and do not constitute check 2.4 (banned constructions) violations unless they appear as part of a `not [X]`, `can/may [verb]`, or similar banned construction pattern. Check 2.4 covers: `not [X] as primary statement`, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. Em-dashes alone → check 2.4 PASS; look for them in the heading scan (3.1) and prose description.

### Prompting Changes for Batch 9

| # | Change | Rationale |
|---|--------|-----------|
| P59 | NOT-TESTED is a result state distinct from FAIL. A NOT-TESTED check must NOT be counted in the FAIL count or appear in the FAIL list in the Verdict Summary. NOT-TESTED means the check was not performed — it is unresolved, not failed. List NOT-TESTED checks separately if they need follow-up | NOT-TESTED entries counted as FAILs inflated verdicts in metrics-and-alerting |
| P60 | BORDERLINE findings are not confirmed FAILs. When a check is classified BORDERLINE, the Verdict Summary must list it as BORDERLINE (pending human review), not FAIL. Do not include BORDERLINE checks in the FAIL count | Explorer-operations and troubleshooting included BORDERLINE checks in the FAIL count |
| P61 | `{/* FACT CHECK */}`, `{/* TODO */}`, and any other non-standard comment formats do NOT satisfy check 6.5. The only format that satisfies check 6.5 is `{/* REVIEW: [specific claim] — [named source] */}`. Any other comment format on a veracity claim = check 6.5 FAIL | Operator-toolbox passed check 6.5 on the basis of functional equivalence with REVIEW: format — incorrect |
| P62 | Em-dashes alone are NOT a check 2.4 violation. Check 2.4 (Banned constructions) covers: `not [X] as primary statement`, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. Em-dashes appearing in text are caught under check 3.1 (headings), check 1.11 (description), and the general P30 prohibition — not check 2.4. Only include em-dashes in the Banned Construction Scan if they appear as part of one of the listed banned construction patterns | Em-dashes used as sole basis for check 2.4 FAIL in multiple ai-and-job-workloads reports |

## Batch 10 — Findings from Critical Review (guides section: operator-considerations)

### What broke

1. **Critical reviewer invented invalid schema values.** The operator-considerations critical reviews claimed `veracityStatus: unverified` is not a valid schema value and that valid values are "`verified`, `partial`, or absent." This is wrong. checks.mdx §1.8 explicitly states valid values are `verified`, `unverified`, `stale`. `partial` does not exist in the schema. `unverified` is the default for AI-generated or unreviewed content. The operator-considerations summary must NOT use the reviewer's schema claim.

2. **Question-form heading violations placed in check 3.2 instead of check 3.1.** Question-form headings (`Is reward calling profitable?`) fail the heading rubric score (check 3.1 — Precision/Depth/Stability/Clarity/Conciseness dimensions will score low). They are not check 3.2 violations. Check 3.2 covers banned/avoid tier term violations only. This was correctly caught by the critical reviewer.

3. **P49 regression continues.** Verdict counts still diverge from check table FAIL counts across all three reports (3 reports, 3 different count errors). Despite being in the prompt since P26. Stronger instruction needed.

### Prompting Changes for Batch 10

| # | Change | Rationale |
|---|--------|-----------|
| P63 | Question-form headings (`Is X?`, `Can Y?`, `Why Z?`) are check 3.1 failures (low rubric scores on Precision and Stability) — not check 3.2 violations. Check 3.2 covers only banned/avoid term tier violations (terms from the §4.1 classification tables). Do not FAIL check 3.2 for question form | Operator-rationale incorrectly failed check 3.2 for this pattern |
| P64 | The valid values for `veracityStatus` are exactly: `verified`, `unverified`, `stale`. `partial` does not exist. `unverified` is the correct default for AI-generated or unreviewed content. A fix that adds `veracityStatus: unverified` (when status is also being changed to `draft`) is valid. Never invent schema values not in checks.mdx §1.8 | Critical reviewer invented `partial` and claimed `unverified` was invalid — directly contradicting checks.mdx |

- Batch 9 prompt: incorporates P1-P62 above
## Batch 11 — Findings from Critical Review (guides section: staking-and-rewards)

### What broke

1. **P55 regression: `## Related` still misclassified as check 3.2.** Despite P55 being in the prompt. Two of three reports flagged `## Related` as a check 3.2 violation and recommended rename. P55 is clear: `Related` is OK-tier per Frameworks.mdx §4.1. It fails check 3.1 if the score is low (11/25 is legitimate FAIL), but it passes check 3.2.

2. **Proposed description replacements containing em-dashes.** Two reports (network-participation F-01, reward-mechanics F-01) proposed description fixes that introduced em-dashes. P44 should catch this. The proposed fix must be self-checked before including.

3. **Phantom fix entries in the fix list.** A finding that concludes "no action required" or "the evidence does not support a fix" must be closed at the check row and NOT appear in the fix list. An F-XX entry in the fix list with "no action required" in the fix field is a contradiction — the entry should not exist.

### Prompting Changes for Batch 11

| # | Change | Rationale |
|---|--------|-----------|
| P65 | If a finding concludes "no action required" or "evidence insufficient to flag," close it at the check row (mark as PASS or INFO) and do NOT include it in the Prioritised Fix List. A fix list entry must always have a concrete, executable fix action | Phantom "no action required" fix entries in the fix list create contradictions for executing agents |

- Batch 10 prompt: incorporates P1-P64 above
## Batch 12 — Findings from Critical Review (guides section: advanced-operations)

### What broke

1. **Frontmatter Table contradicts check table for same field.** scale-operations: Frontmatter Table shows `pageType: concept` as FAIL and `purpose: explain` as FAIL, but the check table (correctly applying P50/P15) shows both as PASS. The two sections of the same report give contradictory instructions to an executing agent. P28 covers result/detail consistency within a check row — but the same principle must apply across all report sections.

2. **Em-dash findings in Banned Construction Scan not traced to check 2.4 table row.** pool-operators: em-dash findings (F-14, F-15) appear in the Banned Construction Scan table but the check 2.4 row has no reference to them, creating a traceability gap. Per P62, em-dashes alone don't make check 2.4 FAIL — but where em-dashes ARE listed in the scan (even if informational), the check 2.4 row must explicitly note "em-dashes tracked under P30 — not a check 2.4 violation."

### Prompting Changes for Batch 12

| # | Change | Rationale |
|---|--------|-----------|
| P66 | The Frontmatter Table and the check table must agree on pass/fail for every field. Before finalising, cross-check: for every field in the Frontmatter Table marked FAIL, confirm the corresponding check row also says FAIL; for every field marked PASS, confirm the check row also says PASS. If they disagree, fix both to match the correct determination | scale-operations Frontmatter Table contradicted check table for pageType and purpose |

- Batch 11 prompt: incorporates P1-P65 above
- Batch 12 prompt: incorporates P1-P66 above

## Batch 13 — Findings from Section Summary (guides: advanced-operations)

### What broke

1. **Frontmatter Table marked schema-valid values as FAIL based on editorial judgement.** scale-operations Frontmatter Table marked `pageType: concept` and `purpose: explain` as FAIL because the content scope "didn't match" — an editorial judgement, not a schema compliance check. Per P50/P15, schema-valid values pass the schema check. The Frontmatter Table pass/fail column tests schema compliance only.

2. **BD sections included a "Recommendation" line.** scale-operations BD-1 included "Recommendation: [B] is lower effort." Per P52, blocking decisions must frame both options neutrally. A recommendation line inside a BD bypasses the human decision gate.

3. **Check 2.4 row did not cite P30 em-dash finding IDs.** pool-operators check 2.4 listed em-dash findings in the scan table without the check 2.4 row noting them. Per P62, em-dashes are not check 2.4 violations — but when they appear in the scan, the check 2.4 row must note their P30 tracking and cross-reference the fix IDs.

4. **`{/* FACT CHECK: */}` without named contact or source treated as check 6.5 fail only.** gateway-orchestrator-interface FACT CHECK at line 126 failed check 6.5 (format) but was not also flagged for check 6.9 (open-ended research task). A FACT CHECK with no named source or person responsible is both a 6.5 FAIL and a 6.9 FAIL.

### Prompting Changes for Batch 13

| # | Change | Rationale |
|---|--------|-----------|
| P67 | The Frontmatter Table `pass/fail` column evaluates schema compliance ONLY. A field value that is schema-valid (from the canonical enum set) must be marked PASS in the Frontmatter Table, even if the editorial choice seems wrong. Editorial concerns belong in the check table detail text, a BD note, or an INFO entry. P66 remains in force — both must use the same schema-only criterion | Frontmatter Table marked schema-valid `concept` and `explain` as FAIL based on editorial content-scope judgement |
| P68 | BD (Blocking Decision) sections must list options and downstream dependencies only. Never include a "Recommendation:" line inside a BD section. A recommendation bypasses the human decision gate. End the BD section after stating the options and what each unblocks | BD-1 in scale-operations included a recommendation that pre-empted human choice |
| P69 | When the Banned Construction Scan finds em-dashes, the check 2.4 row must include the note: "Em-dashes tracked under P30 — see F-[IDs] in fix list." This gives executing agents a traceability reference. The check 2.4 result is still PASS for em-dashes alone (per P62) — this is a cross-reference note only | pool-operators check 2.4 row had no reference to em-dash scan findings |
| P70 | A `{/* FACT CHECK: */}` comment that names no source and no responsible person fails BOTH check 6.5 (wrong format) AND check 6.9 (open-ended research task with no concrete next step). Both checks must be independently marked FAIL. The fix must convert to `{/* REVIEW: [specific claim] — verify against [source]. [Name] to confirm. */}` to resolve both | FACT CHECK comments were only failing check 6.5, not 6.9, even when no source or contact was named |

- Batch 13 prompt: incorporates P1-P70 above

## Batch 14 — Findings from Section Summaries (guides: monitoring-and-tooling + staking-and-rewards)

### What broke

1. **Cross-report contradictions not caught within a batch.** monitoring-and-tooling produced contradictory rulings on Docker stack duplication (FAIL on metrics-and-alerting, INFO on operator-toolbox). Caught only at summary cross-reference stage, not during check or critical review passes.

2. **Component-layout-decisions.mdx not read consistently across a batch.** Only one of four monitoring-and-tooling reports (operator-toolbox) read the component approval file before flagging. The other three cited the matrix from memory, producing inconsistent AccordionGroup rulings.

3. **Self-links not surfaced in Category 2 (banned constructions).** metrics-and-alerting self-link was caught at Categories 4 and 8 but not Category 2. A sentence containing a self-link is a structural anomaly belonging in the banned construction scan.

4. **Em-dash scan systematically misses description field and heading text.** All four staking-and-rewards pages had em-dashes in the frontmatter description field missed by check reports that claimed to run a full scan. H2/H3 heading text also missed (e.g. `## Calling Reward() — your options`).

5. **Proposed fix text not checked against the prohibition being fixed.** Two reports proposed description replacements that still contained em-dashes (network-participation F-01, reward-mechanics F-01).

6. **Protocol-state figures flagged without staleness tier.** Gas costs, bonding percentages, and inflation rates appeared as NOT-TESTED without a Frameworks.mdx §3.4 staleness tier label (HIGH/MEDIUM/LOW).

### Prompting Changes for Batch 14

| # | Change | Rationale |
|---|--------|-----------|
| P71 | After all check reports for a batch are written, run a cross-report consistency check on check 4.8 (content duplication) and check 4.10 (cross-tab links). If two pages in the same batch have contradictory verdicts for the same content block, add a cross-report contradiction note to both affected reports and raise a blocking decision | monitoring-and-tooling Docker stack duplication was rated FAIL on one page, INFO on another |
| P72 | For multi-page batch runs, read `component-layout-decisions.mdx` ONCE at batch start and apply the same component ruling to all pages in the batch with the same `pageType`. Do not cite the component matrix from memory. Note in each report: "Component approval: read `component-layout-decisions.mdx` at batch start." | Three of four monitoring-and-tooling reports did not read the approval file, producing inconsistent AccordionGroup rulings |
| P73 | When a page links to itself, add a note to the Banned Construction Scan table: "Self-link at line [N] — structural anomaly; see Category 4 and 8 findings." The check 2.4 result is not affected, but the self-link sentence must appear in the Category 2 scan for traceability | metrics-and-alerting self-link appeared in Cat 4 and 8 but not Cat 2 |
| P74 | The em-dash scan must include three explicit scan targets: (1) `description:` frontmatter field text, (2) all H2 and H3 heading text, (3) body prose. Scan all three separately and list instances from all three in the Banned Construction Scan table. Do not assume a general prose scan covers the description field or heading text | All four staking-and-rewards pages had description-field em-dashes missed by check reports that claimed to run a full scan |
| P75 | Before recording a proposed fix in the Prioritised Fix List, run the proposed replacement text through the same prohibition scan that identified the original violation. A proposed description replacement must pass the em-dash check. A proposed heading rename must pass check 3.2. A proposed prose fix must pass the banned constructions scan | Proposed description fixes introduced new em-dashes; proposed fixes for `not [X]` introduced `depends on` without ranked list |
| P76 | When generating a fix for a `not [X]` construction, do not introduce a `depends on` construction unless a ranked list or threshold table immediately follows. CLAUDE.md lists "`depends on` without ranked list" as a banned construction. The fix for one banned construction must not introduce another | reward-mechanics F-08 fix introduced `depends on` without ranked list |
| P77 | When flagging an unverified protocol-state figure (percentage, gas cost, rate, round count), include the Frameworks.mdx §3.4 staleness tier in the finding: HIGH (changes frequently — gas costs, bonding %, inflation rate), MEDIUM (changes occasionally — reward thresholds, session counts), LOW (rarely changes — contract addresses, round duration). This tier controls priority in the veracity pass | Gas costs and bonding percentages were flagged as NOT-TESTED without any staleness tier label |

- Batch 14 prompt: incorporates P1-P77 above

## Batch 15 — Findings from Critical Review (guides: deployment-details)

### What broke

1. **Check 5.4 flagged for MDX comments `{/* TODO */}`.** Three reports (new-join-a-pool, orchestrator-transcoder-setup, siphon-setup) marked check 5.4 FAIL because an MDX comment `{/* TODO */}` was present. MDX comments are not rendered — they do not appear in the output and cannot constitute a check 5.4 violation (avoided components). Check 5.4 should be PASS for pages where the only "violation" is an MDX comment.

2. **setup-options P39 fix error: recommended prohibited combination.** The setup-options check report's fix for check 1.8 recommended `status: current` + `veracityStatus: unverified`. This is the incoherent combination that P39 explicitly identifies as the problem state. The fix should be `status: draft` (change from `current`) AND `veracityStatus: unverified`. Never recommend keeping `status: current` while adding `veracityStatus: unverified`.

3. **Verdict count arithmetic off by 1-6 across all 6 reports.** Despite P49 being in the prompt since Batch 5. This is a persistent regression. The critical review must count listed FAIL IDs and compare to stated count as its first step.

### Prompting Changes for Batch 15

| # | Change | Rationale |
|---|--------|-----------|
| P78 | MDX comments (`{/* ... */}`) are not rendered in the page output. They cannot constitute check 5.4 failures (avoided components absent). If the only content in question for check 5.4 is an MDX comment, mark check 5.4 PASS and note "MDX comment — not rendered." Only rendered JSX component tags can fail check 5.4 | Three deployment-details reports failed check 5.4 for non-rendered MDX comments |
| P79 | When generating a fix for a P39 violation (`status: current` with absent/wrong `veracityStatus`), the correct fix is ALWAYS: change `status: current` → `status: draft` AND add `veracityStatus: unverified`. Never recommend keeping `status: current` in the fix text. Never recommend `status: current` + `veracityStatus: unverified` as a resolved state — that combination is itself P39's definition of the incoherent state | setup-options check report recommended the prohibited combination as its fix for the P39 violation |

- Batch 15 prompt: incorporates P1-P79 above

## Batch 16 — Findings from Section Summary (guides: operator-considerations)

### What broke

1. **Verdict count omits FAIL checks cross-referenced to other findings.** operator-considerations check reports omitted failing check IDs from the verdict list when the checker noted "covered by F-XX finding." P49 requires all failing check IDs in the verdict regardless of root cause grouping.

2. **Corrupt prefix not detected before category analysis.** operator-rationale.mdx's corrupt prefix (`glrw`, `pwrfs`) was surfaced only within Category 5 and 9, not as a pre-analysis STOP flag. A corrupt prefix renders as page text — it blocks all content checks and must be flagged before any category runs.

3. **Banned word double-counted when it appears once.** operator-impact check report claimed `meaningfully` appeared twice but it appeared once only. No line citations with quoted context — just an unverified count.

4. **Placeholder F-XX entries with no actionable finding.** operator-rationale F-23 was allocated in the fix list but contained only "No additional finding." A fix list entry must be either actionable or absent.

### Prompting Changes for Batch 16

| # | Change | Rationale |
|---|--------|-----------|
| P80 | When completing the Verdict Summary FAIL ID list, tabulate every FAIL result from the category check tables directly. Do not suppress a check ID from the verdict because it "shares a root cause" with another failing check or is "covered by finding F-XX." Every check that has FAIL in its Result column must appear in the Verdict Summary fail list | Check IDs were omitted from verdict lists when they shared root causes with other findings |
| P81 | Read lines 1–10 of every source file as the first step before any category analysis. If any content appears before the opening `---` frontmatter delimiter, flag CRITICAL at the top of the report under a "Pre-Check: File Integrity" heading. Do not proceed to category analysis until the corrupt prefix is documented. A corrupt prefix renders as visible page text — it blocks all content quality checks | operator-rationale corrupt prefix was surfaced mid-report in Category 5 and 9 instead of as a pre-analysis stop |
| P82 | When logging banned word occurrences, quote the surrounding sentence and state the line number for each independent occurrence. Do not write "appears twice" without two independent line citations with distinct quoted context. If two supposed occurrences are in the same sentence, they count as one | operator-impact counted `meaningfully` as appearing twice when it appeared once — no line citations provided |
| P83 | If a fix list entry (F-XX) has been allocated but no actionable finding exists (e.g., "no violation beyond F-[prior]"), do not include the entry in the fix list. Leave the ID gap with an explicit comment "(no finding at this ID)" in the fix list rather than a phantom entry with no action | operator-rationale F-23 was a placeholder with no actionable content, creating confusion for executing agents |

- Batch 16 prompt: incorporates P1-P83 above

## Batch 17 — Findings from Critical Review (guides: tutorials, 7 pages)

### What broke

1. **P39 fix split across two separate items.** All 7 tutorial check reports split the P39 fix: F-02 added `veracityStatus: unverified` and a later F-03 or F-04 changed `status: current` to `draft`. An executing agent applying F-02 without F-04 would produce the prohibited `status: current` + `veracityStatus: unverified` combination. The fix must be atomic: one fix item that does both changes together.

2. **Check 3.1 treated as multiple check IDs when multiple headings fail.** Two reports wrote "3.1(x4 headings)" or "3.1(x2 headings)" in the fail count as if each heading failure was a separate check ID. Check 3.1 is ONE check ID regardless of how many headings fail it. Multiple heading failures are sub-findings within check 3.1, not separate IDs.

3. **Em-dash false positive for hyphens in compound modifiers.** byoc-cpu-tutorial's title contained hyphens in compound modifiers (`CPU gateway and orchestrator (off-chain to on-chain)`) that were visually misidentified as em-dashes. The checker's own Banned Construction Scan correctly found no em-dash, but the Frontmatter Table and check 3.6 still marked the title as FAIL — a P28 violation between scan result and table result.

### Prompting Changes for Batch 17

| # | Change | Rationale |
|---|--------|-----------|
| P84 | The P39 fix must be ATOMIC: one single fix item that says "change `status: current` to `status: draft` AND add `veracityStatus: unverified`." Never split this into two separate fix items. Splitting creates risk: an executing agent that applies only the first item produces the prohibited `status: current` + `veracityStatus: unverified` combination — the exact incoherent state P39 identifies | All 7 tutorial check reports split the P39 fix, creating execution risk |
| P85 | Check 3.1 is ONE check ID regardless of how many headings fail below the 20/25 threshold. When multiple headings fail, list them all as sub-findings within check 3.1. Do not write "3.1(×2)" or "3.1(×4)" as multiple check IDs in the FAIL list — this overcounts. Count 3.1 as 1 FAIL in the FAIL count and list the failing headings in the check 3.1 row detail | Two reports overcounted by treating multiple heading failures as multiple check IDs |
| P86 | Before marking a title or heading as FAIL for an em-dash, verify in the Banned Construction Scan whether the character is an actual em-dash (U+2014) or a hyphen in a compound modifier. If the Banned Construction Scan finds no em-dash, the Frontmatter Table and check 3.6 must also be PASS for that field — they must agree with the scan result (P66) | byoc-cpu-tutorial had Frontmatter Table FAIL and check 3.6 FAIL for hyphens that the scan correctly identified as not em-dashes |

- Batch 17 prompt: incorporates P1-P86 above

## Batch 18 — Findings from Section Summary (guides: deployment-details)

### What broke

1. **`pageType: overview` treated as a deprecated alias with a migration path.** `overview` is not a deprecated `pageType` value with a defined migration. It is a `pageVariant` value that was incorrectly placed in the `pageType` field. This is a type-confusion error, not a deprecated-alias error. No automatic migration exists — the correct `pageType` is unknown and requires a human decision. Check 1.2 should flag this as type-confusion, not as deprecated-alias migration.

2. **VRAM figures on multiple pages treated as independent findings.** SAM2, audio-to-text, and other AI model VRAM figures appear across multiple pages with different values. A single SME verification resolves all instances simultaneously. The check report raised these as per-page findings without noting the joint-resolution opportunity.

3. **Session log decisions not in decision-registry.md treated as resolved.** The join-a-pool / new-join-a-pool deprecation decision appeared in the session log but was never written to decision-registry.md. Check 9.2 (all consuming decisions in registry) should flag this gap — a session log entry is not equivalent to a registry entry.

### Prompting Changes for Batch 18

| # | Change | Rationale |
|---|--------|-----------|
| P87 | When check 1.2 finds a `pageType: overview` value, flag it as a TYPE-CONFUSION error (not a deprecated-alias error). `overview` is a `pageVariant` value placed in the wrong field. No migration table entry covers it. The correct `pageType` is unknown and requires a human decision — raise as a Blocking Decision. Do not apply any automatic migration fix | `overview` has no migration path in the deprecated-alias table; its presence in `pageType` requires human judgment |
| P88 | When flagging an unverified VRAM figure for a named AI model (e.g., SAM2, Whisper, audio-to-text), check whether the same model appears on other pages in the same batch. If it does, note: "Joint verification: [model] VRAM appears on [list of pages] — one SME check resolves all." This groups SME work for the veracity pass instead of creating redundant per-page findings | SAM2 and audio-to-text VRAM figures appeared across multiple pages as independent findings |
| P89 | When check 9.2 (all consuming decisions in registry) evaluates a decision, verify that it exists in `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`, not just in a session log or chat history. A decision mentioned in a session log entry but absent from the registry is a check 9.2 FAIL. The fix is: write the decision to the registry. Do not mark check 9.2 PASS on the basis of a session log reference | join-a-pool deprecation decision existed in session log but not in decision-registry.md; checks passed it anyway |

- Batch 18 prompt: incorporates P1-P89 above

## Batch 19 — Findings from Section Summary (guides: ai-and-job-workloads)

### What broke

1. **`status: published` treated as a schema coherence failure under §1.8.** Six of nine check reports cited §1.8 as the basis for flagging `status: published` and stated "`status: published` requires `veracityStatus: verified`." That rule does not exist. §1.8 governs `status: current` + `veracityStatus` coherence only. `status: published` is simply not a valid enum value — the valid values are `current` and `draft`. This is a wrong-enum error, not a coherence failure. Checkers were fabricating a cross-field requirement by incorrectly extrapolating §1.8 to a non-governed enum value.

### Prompting Changes for Batch 19

| # | Change | Rationale |
|---|--------|-----------|
| P90 | When `status: published` appears in frontmatter, flag it as a wrong-enum error only. `status` accepts `current` and `draft` — `published` is not in the enum. Do NOT cite §1.8 as the basis for this failure. Do NOT state that `published` requires `veracityStatus: verified` — that rule does not exist. §1.8 governs `status: current` + `veracityStatus` coherence only. The correct fix is: change `status: published` to `status: draft` AND add `veracityStatus: unverified` (atomic fix per P84) | Six check reports fabricated the schema requirement "`status: published` requires `veracityStatus: verified`" by incorrectly applying §1.8 to a non-governed enum value |

- Batch 19 prompt: incorporates P1-P90 above

## Batch 20 — Findings from Section Summary (guides: ai-and-job-workloads)

### What broke

1. **Component content excluded from content scans.** Check agents scanned page-level body prose for em-dashes (P30), banned words (check 2.2), and dead imports (check 5.10) but did not scan Accordion bodies, Accordion titles, Tab content, Card titles, and Step titles. `ai-inference-operations` had a banned word (`Significantly`) in an Accordion body at line 215 that the check report self-corrected to PASS — the critical review confirmed the word was present. All 10 Accordion titles in `ai-inference-operations` had em-dashes that were not consistently caught.

2. **`purpose: guide` wrong-field error missed as a specific high-frequency pattern.** Three of nine pages carried `purpose: guide` — a value from the `pageType` schema, not the `pagePurpose` schema. P37 covers wrong-field errors generically, but checkers are failing to catch this specific instance because `guide` visually fits as a purpose description.

3. **Content contradictions flagged without reading adjacent Warning blocks.** `audio-and-vision-pipelines` received a false positive F-04 finding for an apparent internal contradiction. The adjacent Warning block explicitly resolved the contradiction. The checker flagged the contradiction without reading the Warning block.

### Prompting Changes for Batch 20

| # | Change | Rationale |
|---|--------|-----------|
| P91 | All content scans — em-dash/P30 scan, banned word scan (check 2.2), dead import scan (check 5.10) — must include component content: Accordion body text, Accordion titles, Tab labels, Tab content, Card titles, Step titles, Callout content. These render as visible page text and are not exempt from any content quality rule. Do not limit scans to top-level prose only | Banned words and em-dashes were missed inside Accordion components; dead imports that appear only in component props were also missed |
| P92 | `purpose: guide` is a confirmed high-frequency wrong-field error. `guide` is a `pageType` value — it is NOT in the 15-value canonical `pagePurpose` set. When checking the `purpose` field, explicitly compare the value against the 15 canonical values (orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update). Do not rely on visual plausibility — `guide` looks reasonable as a purpose but is not valid | 3 of 9 pages in the ai-and-job-workloads batch had `purpose: guide`; this pattern appears in other batches too |
| P93 | Before flagging an apparent content contradiction as a veracity or consistency finding (checks 6.x, RC-type finding, or an F-XX fix), read all adjacent context: Warning blocks, Callout boxes, Note blocks, inline conditional notes, and any following paragraph. If a Warning block or Note block explicitly addresses the apparent contradiction, the contradiction is resolved — mark the finding as WITHDRAWN or do not raise it. Only flag the contradiction if it remains after reading all surrounding context | `audio-and-vision-pipelines` F-04 was a false positive because the adjacent Warning block already resolved the apparent 2-GPU contradiction |

- Batch 20 prompt: incorporates P1-P93 above

## Batch 21 — Findings from Section Summary (guides: tutorials)

### What broke

1. **Navigation orphan detection treated as a downstream finding.** `byoc-cpu-tutorial.mdx` is physically in the orchestrators directory but registered only in the gateways tab in docs.json. Check reports proceeded with full content analysis before flagging the navigation orphan — a CRITICAL finding that overrides all content quality issues and blocks all content work on the file.

2. **Content overlap between sibling pages treated as a medium finding.** `byoc-cpu-smoke-test` and `byoc-cpu-tutorial` have near-identical scope. The check reports logged this as a medium-priority finding rather than a blocking decision. Content overlap of this degree creates reader confusion and maintenance debt regardless of content quality.

3. **`What happened` heading pattern not in the known-failing scan list.** The pattern appeared on 5 of 7 active tutorials (all scoring 14–17/25). It is a predictable, recurring pattern that check agents should scan for explicitly — same as `## Overview`, `## Introduction`, `## Summary`, `## Next steps`.

### Prompting Changes for Batch 21

| # | Change | Rationale |
|---|--------|-----------|
| P94 | After the Pre-Check file integrity step (P81), verify docs.json registration BEFORE any category analysis. If a file is absent from docs.json under its expected tab group, write "CRITICAL NAVIGATION ORPHAN" in the report header (before Category 1), note the gap with the docs.json search result, and continue with full category analysis. The navigation gap is the highest-priority finding — all content work is blocked until it is resolved | `byoc-cpu-tutorial` navigation orphan was found during category analysis rather than as a pre-analysis header flag |
| P95 | When two or more pages in the same group have overlapping scope (shared procedures, identical steps, near-duplicate content), raise this as a Blocking Decision (BD) in the check report's fix list — not a MEDIUM or LOW finding. Content overlap requires a human decision (merge / deprecate / distinguish) before any page-level remediation work proceeds. A BD entry must name both pages and describe the overlapping content | `byoc-cpu-smoke-test` and `byoc-cpu-tutorial` content overlap was logged as a medium finding; it should have been a BD blocking remediation on both pages |
| P96 | In the heading quality scan (check 3.1), explicitly check for these known-failing patterns in addition to the general rubric: `## What happened`, `## What just happened`, `## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## Related`. These patterns are predictable low-scorers (11–17/25). When found, include them in the check 3.1 FAIL list with their rubric scores and proposed replacements | `What happened` appeared on 5 of 7 tutorials and was caught but not flagged consistently as part of a known-failing pattern list |

- Batch 21 prompt: incorporates P1-P96 above

## Batch 22 — Findings from Critical Review (resources/compendium)

### What broke

1. **BORDERLINE applied to an absolute prohibition.** The compendium/glossary check report rated check 1.11 (description field em-dash) as BORDERLINE. P30 is an absolute prohibition — em-dashes in visible text are FAIL or PASS, not BORDERLINE. BORDERLINE is only valid for graduated checks: character limits where the value is near the threshold, rubric scores where the score is in a defined gray zone, or judgment calls on ambiguous terms. Absolute prohibition rules (no em-dashes, no banned words, no `This page [verb]`) have binary outcomes only.

2. **Frontmatter Table and check table disagreed without resolution.** The description field showed PASS in the Frontmatter Table and BORDERLINE in the check 1.11 row — a P66 violation. The P66 rule requires agreement between the Frontmatter Table row and the corresponding check result row. When both tables exist, both must reflect the same verdict.

### Prompting Changes for Batch 22

| # | Change | Rationale |
|---|--------|-----------|
| P97 | BORDERLINE is only valid for graduated checks: character limits (where the value is close to the threshold), heading rubric scores (where the score is in the 19–21 range), or genuinely ambiguous term classifications. BORDERLINE is NOT valid for absolute prohibition rules. P30 (no em-dashes), check 2.4 banned constructions, check 2.2 banned words, `This page [verb]` — these are binary: PASS or FAIL. When a check has an absolute rule and a violation is present, mark FAIL. Never mark BORDERLINE on an absolute prohibition | BORDERLINE applied to P30 em-dash violation in description field; P30 has no graduated threshold |

- Batch 22 prompt: incorporates P1-P97 above

## Batch 23 — Findings from Guides-Level Rollup Summary

### What broke

1. **Broken cross-tab links treated as independent per-page findings.** The broken link to `/v2/gateways/resources/technical/orchestrator-offerings` appeared on `ai-inference-operations` and `diffusion-pipeline-setup` as separate per-page findings in separate subfolder summaries. The guides rollup identified these as the same root cause requiring one resolution. The section-level summary is the first place this grouping happened — it should have happened at per-page check time via a section-wide link scan.

2. **Template-level defects listed as per-page errors.** The P39 atomicity violation (split-fix for veracityStatus + status change) appeared on all 7 tutorial pages, all pages with `status: published`, and multiple pages in other batches. In each case, per-page check reports listed this as an individual fix. This is a template defect — when every page in a batch has the same violation, the fix is to update the check report template, not apply 7 identical per-page fixes.

3. **Navigation orphan status discovered during check, not before.** `byoc-cpu-tutorial` and the 3 stubs were discovered as orphans during individual check reports. A batch docs.json audit before check work begins would have flagged these immediately, letting check agents focus on content quality rather than navigation archaeology.

### Prompting Changes for Batch 23

| # | Change | Rationale |
|---|--------|-----------|
| P98 | When a broken link is flagged in a check report, search the full page batch (all source files in the current section) for the same link target before logging the finding. If the same broken link appears on multiple pages, add a "Joint fix" note to each report: "Broken link to [target] also appears on [page list] — one resolution fixes all." This applies equally to broken internal links, broken cross-tab links, and unverified external URLs | Broken cross-tab link to `/v2/gateways/resources/technical/orchestrator-offerings` was logged independently on two pages without noting the joint-resolution opportunity |
| P99 | When a violation appears on every page in a batch (or 80%+), flag it as a template-level defect in the summary, not a per-page error. Template-level defects require: (1) one fix to the check report template, (2) a batch remediation pass rather than per-page fixes. Examples: P39 split-fix appearing on all tutorial pages; `purpose: guide` appearing on 14+ pages across the guides section; missing frontmatter fields on every page. Per-page fix items are still correct, but the section summary must call out the systemic root cause | P39 split-fix and `purpose: guide` wrong-field appeared on dozens of pages without being identified as template/authoring-template defects |
| P100 | Before writing individual check reports for a section or batch, run a batch docs.json orphan audit: search docs.json for each source file's slug and record which files are in nav and which are absent. Include the orphan list in the pre-check context for every individual check in the batch. This prevents check agents from spending time on content analysis for files that may be deleted or relocated — navigation orphan status is the first triage decision | Navigation orphan status for `byoc-cpu-tutorial` and 3 stubs was discovered mid-check rather than pre-identified, causing check agents to perform full analysis on files with fundamental structural questions |

- Batch 23 prompt: incorporates P1-P100 above

## Batch 24 — Findings from Critical Reviews (resources/root batch A)

### What broke

1. **Check 2.6 marked FAIL on placeholder pages with no prose.** `community-pools.mdx` is a content-absent placeholder. Check 2.6 (paragraph discipline) was marked FAIL despite there being no prose paragraphs to apply the rule to. An absent condition cannot be a FAIL — it is N/A.

2. **`<Note>` block with unverified factual claim not flagged as check 6.5 FAIL.** `community-pools.mdx` has a rendered `<Note>` block at line 52 making an unverified factual claim about automation. The check report marked check 6.5 N/A rather than FAIL — but Note/Warning/Callout blocks are rendered visible text containing factual claims, and the absence of a `{/* REVIEW: [claim] — [source] */}` flag is a check 6.5 FAIL.

### Prompting Changes for Batch 24

| # | Change | Rationale |
|---|--------|-----------|
| P101 | Check 2.6 (paragraph discipline) must be marked N/A for pages with no substantive prose paragraphs — empty stubs, placeholders, and content-absent pages. A check whose precondition (existence of prose paragraphs) is not met cannot be FAIL. Mark it N/A with the note "No prose paragraphs present." Similarly, checks 4.1, 4.2, and other structure checks that require body content must be N/A (not FAIL) on completely empty stubs unless there is a structural-obligation violation (e.g., a stub that is in docs.json nav but has no content) | Check 2.6 was marked FAIL on a content-absent placeholder where no prose paragraphs exist |
| P102 | `<Note>`, `<Warning>`, `<Callout>`, `<Info>`, and all similar rendered alert/callout components are visible page text. When any such component contains a factual claim that is unverified (no named source, no inline citation, no `{/* REVIEW: [claim] — [source] */}` flag), mark check 6.5 FAIL for that component. These components are not exempt from veracity scope. Apply P91 equivalently: all component content — including alert block bodies — is in scope for all content quality checks | A rendered `<Note>` block with an unverified factual claim was marked check 6.5 N/A; Note blocks render as visible text and their claims require REVIEW flags |

- Batch 24 prompt: incorporates P1-P102 above

## Batch 25 — Findings from Critical Reviews (resources/technical)

### What broke

1. **Check 6.3 applied to protocol-state percentages.** Three technical check reports flagged inflation rates and similar protocol-state figures under check 6.3. Check 6.3's scope is deprecated API/CLI/SDK usage (e.g., a deprecated flag, a removed endpoint, an old function signature). Protocol-state percentages are not API/CLI/SDK usage — they belong under check 6.5 (unverified claims) or check 6.8 (staleness tier assessment). All three reports marked check 6.3 N/A on the grounds of "no percentage-based staleness concern" — a misread of the check definition.

2. **`x-`-prefixed empty stubs in active docs.json nav treated as navigation orphans.** `x-contract-addresses.mdx` is an empty stub with `x-` prefix that IS in docs.json nav. This is a different failure mode from a navigation orphan (file absent from nav). It creates a dead end for readers who follow the nav link. The critical review flagged this correctly, but the check report's P94 header label ("CRITICAL NAVIGATION ORPHAN") was wrong — the file is in nav, not absent from nav.

3. **Check 5.7 applied to values that were never valid in any schema version.** `purpose: operations` (x-support-status) and `purpose: landing` (x-troubleshooting) are not deprecated aliases — they were never valid values in any Livepeer schema version. Check 5.7 governs deprecated aliases (values that were once valid and have since been retired). Never-valid values belong in check 1.4 only (wrong enum/schema value). Applying 5.7 to never-valid values double-counts the failure.

### Prompting Changes for Batch 25

| # | Change | Rationale |
|---|--------|-----------|
| P103 | Check 6.3 scope is: deprecated API endpoints, deprecated CLI flags, deprecated SDK methods, removed function signatures. Check 6.3 does NOT apply to: protocol-state percentages (inflation rate, reward cut, fee cut), VRAM figures, block times, or any other factual/numeric claim. Protocol-state figures belong in check 6.5 (unverified claim, no source) or check 6.8 (staleness tier). When check 6.3 is assessed, explicitly ask: "Is there a specific API call, CLI flag, or SDK method being deprecated here?" If no, mark check 6.3 N/A and route the concern to check 6.5 or 6.8 | Three check reports applied check 6.3 to protocol-state percentages, which are not API/CLI/SDK deprecation concerns |
| P104 | When a file has an `x-` prefix or is otherwise a deprecated/stub page, check docs.json to determine whether it IS or IS NOT in the active nav. Two distinct issues arise: (a) file NOT in docs.json nav → this is a navigation orphan, flag "CRITICAL NAVIGATION ORPHAN" per P94; (b) file IS in docs.json nav while being an empty stub or deprecated → this is a dead nav entry, flag "CRITICAL: DEPRECATED STUB IN ACTIVE NAV — creates dead end for readers." These are different failure modes requiring different resolutions. Do not use the orphan label for files that are actively in nav | `x-contract-addresses.mdx` is an empty stub IN active nav — it creates a dead end, not an orphan |
| P105 | Check 5.7 governs deprecated aliases: values that were once valid in the Livepeer schema and have since been retired (e.g., `pageType: how_to`, `pageType: landing`, old audience compound tokens). Check 5.7 does NOT apply to values that were never valid in any schema version (e.g., `purpose: operations`, `purpose: landing` as a pagePurpose value). Never-valid values are a check 1.4 violation only. To distinguish: if a value appears in the deprecated-alias migration table in Frameworks.mdx, it is check 5.7. If it does not appear there, it is check 1.4 only | `purpose: operations` and `purpose: landing` were flagged under check 5.7 as deprecated aliases; neither was ever a valid pagePurpose value — only check 1.4 applies |

- Batch 25 prompt: incorporates P1-P105 above

## Batch 26 — Findings from Critical Reviews (resources/root batch B)

### What broke

1. **Check 3.2 Avoid-tier conflated with check 3.4 domain-anchor failures.** `arbitrum-rpc` check report characterised `## Requirements` and `## Configuration` as "borderline Avoid-tier" headings, marking them under check 3.2. Neither term is in the Avoid-tier list. The Avoid-tier list (checks.mdx §4.1) is specific and closed: Overview, Details, Information, Introduction, Summary, Options, Background, Next Steps, Further Reading. Headings that are generic or lack domain anchoring but are NOT in the Avoid list are check 3.4 failures (heading quality rubric), not check 3.2 failures.

2. **P87 type-confusion check 1.2 row offered migration candidates; check 1.3 not marked N/A.** `x-payments` check report found `pageType: overview` (a type-confusion error per P87) but listed possible migration targets (`pageType: resource` with `pageVariant: compendium`) inside the check 1.2 row, and marked check 1.3 FAIL. P87 prohibits migration recommendations inside the check 1.2 row for type-confusion findings. Additionally, check 1.3 (pageVariant co-fix) cannot be determined when the correct pageType is unknown — it must be N/A, not FAIL.

### Prompting Changes for Batch 26

| # | Change | Rationale |
|---|--------|-----------|
| P106 | Check 3.2 FAIL applies ONLY when a heading uses a term from the closed Avoid-tier list: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. If a heading is generic or low-quality but does NOT appear in this list, it is a check 3.4 failure (heading quality rubric score below 20/25), NOT a check 3.2 failure. Do not expand the Avoid-tier list beyond these terms — any expansion is an error | Headings outside the Avoid-tier list were incorrectly flagged as check 3.2 failures |
| P107 | When check 1.2 identifies a type-confusion error (`pageType: overview`, or any other `pageType` value that is not in the canonical 7-type schema AND not in the deprecated-alias migration table): (1) the check 1.2 row must state "TYPE-CONFUSION — `[value]` is a `pageVariant` value placed in the wrong field. No migration table entry exists. Correct `pageType` requires human decision." Do NOT list migration candidates in the check 1.2 row — migration options belong in a dedicated Blocking Decision entry only. (2) Check 1.3 (pageVariant co-fix, P42) must be marked N/A for type-confusion findings, because the correct `pageVariant` cannot be determined until the correct `pageType` is decided | `x-payments` check report listed migration candidates inside check 1.2 and marked check 1.3 FAIL — both are P87 violations |

- Batch 26 prompt: incorporates P1-P107 above

## Batch 27 — Findings from Resources Section Rollup

### What broke

1. **Two same-scope pages in different subsections with no defined scope boundary.** `resources/glossary.mdx` (root subsection) and `resources/compendium/glossary.mdx` (compendium subsection) both appear to be glossaries but neither page's check report nor their respective subsection summaries defined or challenged the scope relationship between them. Individual page checks and subsection summaries cannot see across subsection boundaries — the rollup is the first level where this is visible.

### Prompting Changes for Batch 27

| # | Change | Rationale |
|---|--------|-----------|
| P108 | When a rollup agent (subsection rollup or section rollup) reads multiple lower-level summaries, scan for pages with the same or similar names, titles, or declared purposes across different subsections. If two or more pages appear to cover similar scope (e.g., two glossaries, two FAQ pages, two troubleshooting pages), raise this as a Blocking Decision in the rollup: the scope boundary between the two pages must be explicitly defined before either can be considered for publication. P95 covers content overlap within a single subsection; P108 covers cross-subsection scope boundary gaps that only the rollup level can identify | `resources/glossary.mdx` and `resources/compendium/glossary.mdx` both exist as glossaries with no defined scope boundary — neither subsection summary flagged this because each could only see its own subsection |

- Batch 27 prompt: incorporates P1-P108 above

## Batch 28 — Findings from Full Orchestrators Section Rollup (guides + resources)

### What broke

1. **Same batch operation recommended independently per section with inconsistent scope.** The frontmatter taxonomy fix (add `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`) was recommended separately in the guides rollup and the resources rollup with slightly different scoping notes. At the tab-level rollup, the same fix applies to all 66 pages — a single definition is more precise and less likely to produce inconsistent application across sections.

2. **Cross-tab link breakage scope not determinable from per-page findings.** Broken links to `/v2/gateways/resources/technical/orchestrator-offerings` were found on 2 guides pages. The resources rollup did not conduct a systematic cross-tab link audit. The full scope of cross-tab link breakage across all 66 pages is unknown until a section-wide search runs.

### Prompting Changes for Batch 28

| # | Change | Rationale |
|---|--------|-----------|
| P109 | At rollup level, when writing remediation recommendations (Section 4 or equivalent), identify batch operations that apply across all pages in the rollup scope and define each as ONE rollup-level work package with a single fix specification and a total page count. Do not list the same batch operation separately in each section's recommendations — this creates redundancy and risks inconsistent parameter application (e.g., different proposed `industry` values across sections). One definition; one scope; one parameter set | Frontmatter taxonomy fix was recommended independently in guides and resources rollups; the final rollup should unify these into a single cross-section operation |
| P110 | At rollup level (the final output across all sections), run a systematic cross-tab link audit before writing Section 3 (cross-section patterns) or Section 5 (outstanding decisions). Search all source files in scope for cross-tab link patterns (e.g., `/v2/gateways/`, `/v2/about/`, `/v2/lpt/`, `/v2/developers/`). Check each unique cross-tab link target against docs.json. Log any broken links not already identified in subsection or section summaries. This is the only level where the full scope of cross-tab link breakage is visible | Cross-tab link breakage scope was unknown at final rollup completion — per-page checks found 2 broken links but the full scope across 66 pages was not audited |

- Batch 28 prompt: incorporates P1-P110 above
