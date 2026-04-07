# Critical Review: portal.md check report

**Reviewer:** Claude (meta-review)
**Date:** 2026-03-24
**Report under review:** `v2/orchestrators/_workspace/canonical/check/portal.md`
**Original page:** `v2/orchestrators/portal.mdx`

---

## False Positives

### FP-1: Findings 1.3, 1.4, 1.5 — `veracityStatus`, `industry`, `niche` flagged as "missing required fields" at HIGH severity

The checker listed these three as "missing required fields" and counted them toward the "5 missing required frontmatter fields" in the verdict. But the checks framework (checks.mdx lines 28-29) says:

- Check 1.9: `industry` array valid **if present**
- Check 1.10: `niche` array valid **if present**

These are conditional checks, not required fields. The 10 required fields are listed explicitly in check 1.1: `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, and the OG image block. Neither `industry` nor `niche` appears in that list.

`veracityStatus` (check 1.8) is more defensible as a finding — the framework says "present and honest" — but the checker should have noted it is check 1.8, not part of the "10 required" set in check 1.1. The report conflates 10-required-field compliance with optional/conditional field compliance.

**Impact:** The verdict claims "5 missing required frontmatter fields" but the actual count of missing *required* fields from the canonical 10 is 2 (`complexity` and `lifecycleStage`). This inflates the severity of the frontmatter gap by 2.5x. `veracityStatus` is legitimately missing but is a separate check (1.8), not part of check 1.1.

### FP-2: Finding 1.7 — "Non-standard frontmatter fields present"

The checker flags `mode: frame`, `status: current`, and `lastVerified: '2026-03-16'` as potentially non-standard. But `status` is referenced directly in the checks framework itself — check 1.8 says "`status: current` requires `veracityStatus: verified`." This means `status` is a recognised field, not a non-standard extension. The checker should have known this from the framework it was applying.

`mode` and `lastVerified` may genuinely be project-specific extensions, but the checker lumped a known field (`status`) with unknown ones, which weakens the finding.

### FP-3: Finding 4.2 — "No explicit PREV/NEXT adjacency links"

The checker correctly noted this is acceptable for portal pages and scored it LOW, but then still logged it as a finding. For a `navigation` pageType with `purpose: orient`, PREV/NEXT linear navigation is not expected — the entire point is non-linear card-based routing. This should have been marked PASS or INFO, not LOW. Logging it as a finding creates noise for the remaining 67 pages: every portal/navigation page will trigger this same non-finding.

### FP-4: Finding 8.5 — "External link to GitHub not verified"

The checker flags `https://github.com/livepeer/go-livepeer` as "not verified" but the check framework (check 8.2) says "All external links live — No 404s." The checker could have verified this link (it is a well-known public repository). Flagging it as LOW with "likely valid" is hedging rather than checking. Either verify it or mark it as a process limitation — do not present uncertainty as a finding.

---

## Missed Findings

### MF-1: `status: current` with no `veracityStatus` — contradicts check 1.8

The page has `status: current` (line 9) but no `veracityStatus` field. Check 1.8 explicitly states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." The page also has a 22-line TODO block (lines 30-52) containing multiple REVIEW flags. This is a direct contradiction: the page claims `status: current` while failing both conditions for that status.

The checker noted the missing `veracityStatus` (finding 1.3) and the TODO block (finding 8.4) separately but failed to connect them into the real finding: `status: current` is dishonest given the page's actual state. This should have been a single HIGH or CRITICAL finding, not two unrelated items.

### MF-2: Inline style with hardcoded width — line 100

Line 100 contains `<div style={{width: "70%", minWidth: "500px"}}>`. Check 5.8 says "No hardcoded hex colours, no ThemeData, no inline JS theme switching." The checker reported "No hardcoded hex colours found" (line 101 of the report) but did not flag the inline style with a hardcoded `minWidth: "500px"`. While this is not a colour, it is an inline style that could break on narrow viewports and violates the spirit of using CSS custom properties. At minimum, the `500px` minimum width is a responsiveness concern on mobile devices.

### MF-3: Card descriptions are not consistently entity-led — lines 128-168

The voice rules require entity-led prose (subject is system/node/user, not documentation). Several card descriptions use imperative voice without a subject:

- Line 128: "Choose the right starting point..." (imperative, no subject)
- Line 136: "Test video transcoding..." (imperative, no subject)
- Line 144: "Install, configure, connect..." (imperative, no subject)

The checker's voice section (Category 2) only flagged "GPU horsepower" and declared the rest clean. Card descriptions are reader-facing copy and should have been checked against the entity-led voice rule. Imperative voice in card descriptions may be an accepted pattern for navigation pages, but the checker should have acknowledged this explicitly rather than not checking it at all.

### MF-4: `CustomDivider` imported but never used — line 57

Line 57 imports `CustomDivider` from the Divider component, but it is never used anywhere in the page. Dead imports are a code quality issue and a potential render concern.

### MF-5: `H1`, `H2`, `H5`, `P` imported but never used — line 56

Line 56 imports `H1`, `H2`, `H5`, `P` from FrameMode.jsx, but none of these are used in the page body. Four dead imports.

### MF-6: Commented-out heading and definition block — lines 62-68

Lines 62-68 contain a commented-out section with a heading and definition stub ("Orchestrators are...", "Get Situated"). The checker caught the Gateway comments (lines 176-187) and the PURPOSE block (lines 189-196) but missed this earlier commented-out block. Three separate blocks of commented-out content is a stronger signal than two.

### MF-7: Description length not verified against 160-char limit

The checker flagged the description's style (finding 1.6) but did not state whether it passes the 160-character limit from check 1.11. The description `'Welcome To The Orchestrator Portal: Explore, Earn, Operate'` is 62 characters, which passes, but the checker should have stated the count.

---

## Severity Miscalibration

### SM-1: Findings 1.3, 1.4, 1.5 rated HIGH — should be MEDIUM or not findings

As discussed in FP-1, `industry` and `niche` are "valid if present" fields, not required. Flagging their absence as HIGH is wrong. If they are to be flagged at all, they should be INFO ("consider adding"). `veracityStatus` absence is a legitimate finding but the severity should account for the fact that the page has `status: current` — the real problem is the `status` claim, not the missing field in isolation.

### SM-2: Finding 8.4 (TODO comments) rated HIGH — correct, but underweighted in verdict

The TODO block (lines 30-52) is the single most important finding on this page. It contains an incomplete validation checklist with REVIEW flags, terminology verification items, and component checks that have not been done. Combined with `status: current`, this means the page claims to be production-ready while carrying an explicit "I am not done" marker. The checker rated this HIGH, which is correct, but the verdict rationale treats it as one of several equal issues rather than the primary blocker.

### SM-3: Finding 6.1 (Docker `:master` tag) rated MEDIUM — should be HIGH

The `docker pull livepeer/go-livepeer:master` command is user-facing copy that a reader will execute. If the tag is wrong, the reader pulls a broken or non-existent image. Check 6.2 requires "Every code block, CLI command, and procedure has been executed in the correct environment and produces the stated output." This was not tested. A potentially broken command in the hero section of the portal page — the first thing a reader sees — is HIGH, not MEDIUM.

### SM-4: Finding 5.1 (commented-out Gateway content) rated LOW — correct

This is correctly LOW. Cosmetic issue, no user impact.

### SM-5: Finding 2.1 ("GPU horsepower") rated LOW — arguably INFO

"GPU horsepower" is informal but not wrong. The page is a portal landing page aimed at attracting orchestrators. Slightly informal register in a hero section is a style preference, not a rule violation. The voice rules say "entity-led" and "precision over breadth" — "GPU horsepower" is imprecise but not banned. INFO would be more appropriate.

---

## Vague Fixes

### VF-1: Finding 1.3 — "Add appropriate `veracityStatus`"

"Appropriate" is not actionable. The fix should state: "Add `veracityStatus: unverified` — the page has `status: current` but contains a TODO block with REVIEW flags, so it cannot be `verified`. Alternatively, downgrade `status` from `current` to reflect actual state."

### VF-2: Finding 1.4 — "Add appropriate `industry`"

Same problem. Fix should state a specific value: "Add `industry: [technical]` — this is a GPU compute portal page. Or `industry: [technical, AI]` if the AI focus warrants a second entry."

### VF-3: Finding 1.5 — "Add appropriate `niche`"

Same. Fix should state: "Add `niche: [hardware, infrastructure]` or `niche: [AI, video]` depending on which niche best describes the portal's scope."

### VF-4: Finding 6.2 — "confirm this is accurate without qualification, or add 'with supported hardware' qualifier"

The suggested qualifier ("with supported hardware") is vague. What hardware is supported? The fix should say: "Verify minimum GPU requirements (VRAM, CUDA version) and either add a specific qualifier or link to the hardware requirements page."

### VF-5: Finding 9.2 — "Verify portal page design decisions are captured in the decision registry"

This asks someone to verify something without saying what decisions should be tracked. Fix should list the specific decisions: "Check whether these are tracked: (a) portal page template pattern, (b) card grid vs. linear navigation for portal pages, (c) hero section content scope."

---

## Process Issues

### PI-1: The checker did not actually verify the Docker command

Finding 6.1 says "verify that `master` is the correct/recommended tag" and marks it for "human verification." But the checks framework (check 6.2) requires: "Every code block, CLI command, and procedure has been executed in the correct environment and produces the stated output." The checker deferred verification rather than performing it. This is a process gap — if the checker cannot verify a command, it should say "UNVERIFIED — could not test" rather than "REVIEW — verify this."

### PI-2: The checker did not verify the GitHub link

Finding 8.5 flags the GitHub link as "not verified" but rates it LOW with "likely valid." The checker should have either verified it (checking whether https://github.com/livepeer/go-livepeer returns 200) or stated it as an explicit limitation.

### PI-3: The checker did not connect related findings

The `status: current` field, the missing `veracityStatus`, and the TODO block with REVIEW flags are three aspects of a single problem: the page's claimed readiness does not match its actual state. The checker logged them as three separate findings in three different categories (1.3, 8.4, 9.1) without noting the connection. This fragmentation obscures the real issue.

### PI-4: The checker did not verify snippet imports

The report says "All 6 snippet imports resolve to existing files" (finding 8.2) but does not list which files were checked. I verified independently that all 6 exist. The claim is correct but the report provides no evidence of verification.

### PI-5: The checker did not check for dead imports

Two import lines (56, 57) bring in 5 components that are never used in the page (`H1`, `H2`, `H5`, `P`, `CustomDivider`). The report does not mention unused imports at all. This falls under check 5.6 (MDX renders clean) and general code quality.

### PI-6: The checks framework numbering was not followed

The report uses its own finding numbering (1.1-1.8, 2.1, 3.1, etc.) rather than the checks framework numbering (1.1-1.12, 2.1-2.11, etc.). This makes it harder to tell which canonical checks were run and which were skipped. For example, the report has no explicit entry for checks 1.2 (pageType validation), 1.4 (purpose validation), or 1.5 (audience validation) — these presumably passed but are not logged. A conformant report should log PASS for checks that pass, not only findings for checks that fail.

---

## Prompting Improvements

### PI-PROMPT-1: Require the checker to list all 10 required fields and their values

The current check prompt allowed the checker to conflate required and optional fields. The prompt should require an explicit table: "List each of the 10 required fields from check 1.1. For each, state: present/missing, value, pass/fail." This prevents inflation.

### PI-PROMPT-2: Require the checker to connect related findings across categories

Add a "Cross-Category Connections" section to the report template. Force the checker to identify when findings in different categories are aspects of the same underlying problem. Example: "Findings 1.3, 8.4, and 9.1 all stem from the page claiming `status: current` while carrying incomplete validation markers."

### PI-PROMPT-3: Require explicit TESTED/NOT-TESTED labels on veracity findings

For every code block or command, the checker must state whether it was actually executed. "REVIEW — verify this" is not acceptable as a finding format. Either "TESTED: command X returned Y" or "NOT TESTED: [reason]. Marking as UNVERIFIED."

### PI-PROMPT-4: Require the checker to log PASS for checks that pass

The current report only logs findings (failures). This makes it impossible to know whether a check was run and passed vs. not run at all. Require at minimum a checklist showing which of the canonical check numbers were evaluated.

### PI-PROMPT-5: Require character count for description check

The prompt should require the checker to state the character count when evaluating check 1.11, not just the style issues.

### PI-PROMPT-6: Add dead-import detection to the check list

The current checks framework does not explicitly call out unused imports. Check 5.6 ("MDX renders clean") could be interpreted to include this, but in practice checkers skip it. Add a specific sub-check: "All imports are used. No dead imports."

### PI-PROMPT-7: Require the checker to verify `status` field consistency

Add to the check prompt: "If `status: current` is present, verify that (a) `veracityStatus: verified` is also present, and (b) zero REVIEW/TODO flags exist in the page source. If either condition fails, flag as HIGH: status claim is dishonest."

### PI-PROMPT-8: Require inline style audit beyond colour

Check 5.8 currently focuses on hardcoded colours. Expand to: "No inline styles with hardcoded pixel values that could break responsive layouts. Flag any `style={{...}}` with fixed dimensions."
