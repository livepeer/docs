# Critical Review: index.md check report

**Page checked:** `v2/orchestrators/index.mdx`
**Report:** `v2/orchestrators/_workspace/canonical/check/index.md`
**Reviewed:** 2026-03-24

---

## False Positives

### 1. Finding 1.9 (MEDIUM) and 1.10 (MEDIUM): `industry` and `niche` missing

The checks framework (checks.mdx Category 1) says "valid **if present**" for both `industry` (check 1.9) and `niche` (check 1.10). The pass criteria is about validation of values when they exist, not about requiring their presence. Neither field appears in the 10 required fields listed in check 1.1. These are optional fields; flagging their absence is a false positive.

### 2. Finding 8.1 (MEDIUM): Internal links use relative paths

The report flags relative `.mdx` paths as a concern. Mintlify index files in the same directory tree use relative paths by design. The generation script produces these paths because they resolve correctly in context. Calling this MEDIUM overstates the issue when the real question is whether links resolve, not what format they use. The report even admits "should resolve in Mintlify context but have not been individually verified" -- the finding is speculative without verification.

### 3. Finding 2.4 (MEDIUM): Self-referential heading

The report flags the H1 "Table of contents" as self-referential under check 2.4, whose pass criteria targets "This page [verb]" constructions. "Table of contents" is not a "This page [verb]" construction. It is a generic heading, which is correctly caught separately in finding 3.2. Logging it under both 2.4 and 3.2 double-counts the same issue under different rules.

### 4. Finding 8.6 (MEDIUM): Deprecated/placeholder content in publishable lane

The report says "it links to pages that may contain such placeholders." The word "may" is the problem. This is speculation about the content of linked pages, not a finding about index.mdx itself. Check 8.6 asks whether THIS page contains TODO/TBD/Coming Soon. It does not. Flagging what linked pages might contain is scope creep beyond a per-page check.

---

## Missed Findings

### 1. Typo in link text: "Adresses" (line 147)

Line 147: `[Livepeer Arbitrum Contract Adresses](resources/technical/x-contract-addresses.mdx)` -- "Adresses" is misspelled (missing a 'd'). This is a factual error in rendered text visible to users. The checker did not flag it. Severity: MEDIUM (visible typo in a publishable path).

### 2. Typo in filename/link text: "Feasibilits" (line 87)

Line 87: `[Feasibilits Sources](guides/operator-considerations/feasibilits-sources.md)` -- "Feasibilits" is misspelled (should be "Feasibility"). This appears both in the link text and the filename. Severity: HIGH (two artefacts need fixing: file rename + link update).

### 3. Duplicate page titles: two "Join a Pool" entries (lines 68-69)

Lines 68-69 list two pages both titled "Join a Pool":
- `guides/deployment-details/join-a-pool.mdx`
- `guides/deployment-details/new-join-a-pool.mdx`

Both files exist. A user-facing index with two identically named links is confusing. This should have been flagged under Category 4 (content duplication / purpose ambiguity) or Category 3 (heading precision). Severity: HIGH.

### 4. "Ai" capitalisation in heading (partially caught, fix incomplete)

Finding 3.6 notes "Ai And Job Workloads" has inconsistent capitalisation but buries it inside a broader finding about directory-derived labels. The fix says "at minimum, fix 'Ai' to 'AI'" but does not flag that this is a script bug -- the generation script's title-case logic fails on two-letter acronyms. The fix should target the script, not the generated file.

### 5. Inconsistent heading capitalisation: "Ai And Job Workloads" vs "Config And Optimisation"

The checker noted "Ai" but did not flag the broader pattern: "And" is capitalised mid-heading throughout (line 48: "Ai And Job Workloads", line 60: "Config And Optimisation", line 96: "Roadmap And Funding", line 100: "Staking And Rewards", line 78: "Monitoring And Tooling", etc.). In title case, "And" as a conjunction should be lowercase ("and"). This is a systematic script bug affecting all multi-word directory names.

### 6. No check on keywords quality

The `keywords` field contains `['livepeer', 'generated index', 'table of contents', 'v2/orchestrators']`. These are meta/structural keywords, not content keywords. "generated index" and "table of contents" describe the generation method, not the subject matter. "v2/orchestrators" is a file path, not a keyword. The checker validated that keywords existed (check 1.1) but never evaluated whether they are useful or correctly scoped.

### 7. Mixed `.md` and `.mdx` file extensions in links

The index links to a mix of `.md` files (e.g., line 41: `advanced-sources.md`, line 75: `notes.md`) and `.mdx` files. The `.md` files appear to be source/notes files rather than publishable content pages. This blurs the internal/external boundary further and was not flagged.

---

## Severity Miscalibration

### 1. Finding 1.1 (CRITICAL): Missing required frontmatter fields -- correctly CRITICAL

No objection. Missing 5 of 10 required fields on any page is correctly critical.

### 2. Finding 1.2 (CRITICAL): Deprecated `pageType: overview` -- should be HIGH, not CRITICAL

The severity definition says CRITICAL means "Breaks downstream phase, produces structurally wrong output, or fails on common page type." This is a script-generated internal TOC page that is not in docs.json and not published. Nothing downstream consumes its `pageType` value. The deprecated value is wrong and should be fixed, but it does not break a downstream phase in its current unpublished state. HIGH is more accurate.

### 3. Finding 7.1 (HIGH): Page NOT in docs.json -- should be INFO or removed

The report itself establishes (correctly) that this is likely an internal development index, not a user-facing page. An internal TOC not being in docs.json is expected behaviour, not a finding. If the verdict is that the page's purpose is ambiguous (finding 4.1), then absence from docs.json is evidence supporting the "internal" interpretation, not a defect. At most INFO.

### 4. Finding 4.4 (HIGH): Dead ends and deprecated content -- correctly HIGH

No objection. Mixing deprecated `x-` and `dep-` prefixed content with live content is a real problem regardless of whether the page is internal or user-facing, because it creates confusion about what is current.

### 5. Finding 6.1 (MEDIUM): Link accuracy not verified -- should be INFO or removed

The checker admits they did not verify links. Logging "I didn't check this" as a MEDIUM finding is not a finding at all. It is an admission of incomplete work. Either verify the links and report actual breakage, or note the gap as INFO. A finding requires evidence.

---

## Vague Fixes

### 1. Finding 1.1: "Update the generation script to emit all 10 required fields, or add them manually"

Which fields get which values? The fix should specify:
- `audience: orchestrator`
- `purpose: orient` (if navigation) or state what decision is needed
- `complexity: beginner`
- `lifecycleStage: discover`
- OG image block: provide the fallback template

"Add them" is not actionable without the values.

### 2. Finding 1.9: "Add `industry: ['technical']` or as appropriate"

"Or as appropriate" is not a fix. Either specify the correct value or say "decision needed: [options]."

### 3. Finding 1.10: "Add `niche: ['infrastructure', 'video', 'AI']` or as appropriate"

Same problem. Additionally, these fields are optional (see False Positives #1), so the fix is doubly vague -- it recommends adding an optional field with an uncertain value.

### 4. Finding 4.1: "Clarify whether this is an internal development index or a user-facing navigation page"

This is the central question of the entire report, and the fix is "clarify." Who clarifies? What are the criteria for deciding? The fix should say: "Decision needed. Record in decision-registry.md. If internal: move to `_workspace/`. If user-facing: fix frontmatter, filter deprecated entries, add to docs.json, convert to Card/CardGroup layout."

### 5. Finding 3.6: "If this page ships as user-facing content, headings should be editorial"

Every fix in the report is conditional on the internal-vs-user-facing decision. The report should have identified this as a blocking decision and structured all downstream fixes as contingent, rather than repeating "if this page ships" in six separate findings.

### 6. Finding 6.1: "Re-run the generation script"

The fix assumes the generation script is correct and current. If the script has bugs (it does -- see the "Ai" capitalisation and title-case issues), re-running it propagates those bugs. The fix should be: "Verify the generation script produces correct output, then re-run."

---

## Process Issues

### 1. No link verification was performed

Finding 6.1 explicitly states "Not verified in this check." The page lists ~80 file paths. The checker could have run `ls` or a script to verify which files exist. This is a mechanical check that should never be skipped. The checks framework (Category 8, check 8.1) requires "Every [link] points to an existing page."

### 2. No render check was performed

Check 8.5 requires "Page renders without error." The report does not mention any render attempt. For a generated file with MDX components (`<Note>`), confirming it renders is a basic verification step.

### 3. The checker did not read the generation script

The report repeatedly references `operations/scripts/generate-pages-index.js` and recommends fixes to it, but shows no evidence of having read the script. Understanding the script would have revealed the title-case bug, the lack of filtering for `dep-`/`x-` prefixes, and whether the script is capable of emitting the missing frontmatter fields.

### 4. Several findings are asserted, not verified

- Finding 7.1: Verified (I confirmed `v2/orchestrators/index` is absent from docs.json). Correct.
- Finding 6.1: Not verified -- admitted by the checker.
- Finding 8.1: Not verified -- admitted by the checker.
- Finding 8.6: Not verified -- "pages that may contain such placeholders" is speculation.
- Finding 1.2: Verified against the canonical schema. Correct.
- Finding 5.1: Claims "No Card or CardGroup components" -- verified by reading the page. Correct.

The checker verified structural/frontmatter claims but skipped all link and content verification. That is roughly half the job.

### 5. No cross-reference to existing workspace artefacts

The `_workspace/canonical/check/` directory already contains check reports for other pages (concepts, guides, quickstart, resources, setup directories visible in the listing). The checker did not note whether patterns found in index.mdx (e.g., script bugs, frontmatter gaps) also affect those other generated pages, which would elevate individual findings to systemic issues.

---

## Prompting Improvements

### 1. Add a mandatory "blocking decision" section

When a page's purpose is ambiguous (internal vs. user-facing), the check prompt should require the checker to identify this as a blocking decision FIRST, then categorise all other findings as contingent on that decision. The current report scatters conditional fixes ("if this page ships...") across 6+ findings instead of structuring around the decision.

### 2. Require mechanical verification for links

The check prompt should mandate: "For pages with internal links, verify at least 20% of links resolve to existing files by running `ls` or equivalent. Report the sample size and results." This prevents "not verified" findings.

### 3. Require the checker to read the generation script for generated pages

Add to the pre-flight: "If the page has a `generated-file-banner`, read the generation script before logging findings. Script bugs are root causes; page-level symptoms are not actionable fixes."

### 4. Separate "findings about this page" from "findings about linked/adjacent pages"

The current report mixes findings about index.mdx (correct scope) with speculation about linked pages (out of scope). The prompt should enforce: "Log only findings you can verify on THIS page. If you suspect issues in linked pages, note them in a separate 'Adjacent concerns' section, clearly labelled as unverified."

### 5. Add a typo/spelling check to the mandatory pass order

The review execution guide lists 8 pass categories. None explicitly requires a spelling/typo scan. The checker missed "Adresses" and "Feasibilits" -- both visible in rendered link text. Add: "Pass 4.5: Scan all visible text (headings, link text, prose) for spelling errors."

### 6. Require fixes to specify concrete values, not "or as appropriate"

The prompt should state: "Every fix must be executable by a different agent with no additional context. If a fix requires a decision, state the decision needed and the options. Never write 'or as appropriate.'"

### 7. Deduplicate cross-category findings

The report logs the same issue under multiple categories (H1 "Table of contents" under both 2.4 and 3.2; `veracityStatus` under both 1.8 and 6.6). The prompt should require: "If a finding appears in multiple categories, log it once in the most specific category and cross-reference from others. Do not log the same finding twice with different severity."

### 8. Add a "systematic vs. isolated" flag

For generated pages, every finding is potentially systematic (affects all generated pages). The prompt should require the checker to flag whether a finding is isolated to this page or likely affects all outputs of the same generation script.
