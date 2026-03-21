---
name: content-pipeline-pass-a
version: "1.0"
category: content-pipeline
description: >-
  Level 2 Pass A — content review or write for a single Livepeer docs page.
  Audits or drafts the content layer: audience fit, purpose delivery, information
  types, voice rules, veracity flags, and section structure. Does not apply MDX
  formatting or component selection — that is Pass B.
invoke_when:
  - "review this page for the content pipeline"
  - "Pass A for [page path]"
  - "content review [page]"
  - "write this page — Pass A"
  - "audit content on [page path]"
  - "does this page serve its audience?"
---

SKILL: Content Pipeline — Level 2 Pass A (Content)

Goal
Produce a content review report (REVIEW mode) or an approved content draft (WRITE/REWRITE mode) for a single page. The Pass A output is the input to Pass B (layout and style). Pass A does not touch MDX structure or component selection.

Constraints
- Do not apply MDX components or frontmatter during this pass. Content layer only.
- Do not rewrite content in REVIEW mode. Report issues and fixes; do not apply them unless the user explicitly confirms.
- Do not skip the pre-flight checks. A page with no clear purpose or incoherent adjacency cannot be reviewed or written correctly.
- Do not remove `{/* REVIEW: */}` flags from Pass A output — they are carried forward to Pass B.
- Require a tab map (`v2/[tab]/_workspace/tab-map.md`) before running. If it does not exist, prompt the user to run the tab map skill first, or manually confirm the page's journey position.

When to load references
- Load `workspace/plan/active/CONTENT-WRITING/Prompts/level-2-pass-a-content.md` — full prompt with phases and quality gates.
- Load `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` — required for Phase 5 audience-specific voice check.
- Load `workspace/plan/active/CONTENT-WRITING/framework.md` — for audience, persona, and purpose definitions.
- Load `workspace/plan/active/CONTENT-WRITING/veracity.md` — for Phase 6 veracity standards.
- Load the page file (REVIEW / REWRITE) or page brief (WRITE) before running any phase.
- Load `v2/[tab]/_workspace/tab-map.md` if available for reader journey context.

Workflow
1. Collect context block values. If MODE, PAGE_TYPE, AUDIENCE, or PURPOSE are not provided, ask before proceeding.
2. Run pre-flight: confirm purpose is statable, adjacency is coherent, scope is single.
3. Run Phase 1 (read/confirm brief).
4. Run Phase 2 (audience fit): knowledge level, persona fit, register.
5. Run Phase 3 (purpose check): does the page deliver the stated PURPOSE?
6. Run Phase 4 (information type audit): tag every section, check permitted types for pageType.
7. Run Phase 5 (voice check): universal blocking rules first, then audience-specific voice rules.
8. Run Phase 6 (veracity check): flag all very-high and high standard claims.
9. Run Phase 7 (structure check): sequence, handoffs, orphans.
10. Produce output per mode (review report or content draft).

Deliverable Format
REVIEW mode:
- Review report with: verdict (PASS / NEEDS WORK / REWRITE REQUIRED), assessed frontmatter, prioritised issues with specific quotes and fixes, veracity flags, list of approved sections.

WRITE / REWRITE mode:
- Full page content as plain markdown with `##` / `###` heading structure.
- Complete taxonomy field values identified for Pass B frontmatter.
- All `{/* REVIEW: */}` flags for unverified claims.

Failure Modes / Fallback
- If the page cannot be read: ask the user to provide the file path or paste the content.
- If purpose cannot be stated in one sentence: stop pre-flight. Return the specific field that needs clarification. Do not proceed to Phase 2.
- If no tab map exists and journey context cannot be determined: proceed with PREV_PAGE / NEXT_PAGE fields only; note the gap in the output.
- If the voice rules file is not loaded: run universal blocking rules from the prompt; note that audience-specific rules were not applied.

Validation Checklist
- [ ] Pre-flight passed (all three checks)
- [ ] Audience fit checked with specific quotes for mismatches
- [ ] Every section has an identified information type
- [ ] All universal blocking violations corrected (WRITE) or flagged with quotes and fixes (REVIEW)
- [ ] Audience-specific voice rules applied from voice-rules.md
- [ ] Every very-high veracity claim has a REVIEW flag or named source
- [ ] Structure check complete — no orphan sections, no pre-emptions, no repetition of PREV_PAGE
- [ ] WRITE mode: all 9 taxonomy fields identified
- [ ] UK English throughout
