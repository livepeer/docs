# Review: reference/faq.mdx

**Path:** `v2/gateways/resources/reference/faq.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Well-structured FAQ with three sections (General, Video Gateway, AI Gateway). Uses AccordionGroup throughout. Contains 4 REVIEW flags indicating unverified claims. TODO comment block. Good coverage of operator questions with code examples and tables.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields. `lastVerified: 2026-03` missing day. |
| 2 | VOICE | 9/10 | UK English ("behaviour" line 60). Entity-led. No banned words in rendered content. No em-dashes. |
| 3 | HEADINGS | 8/10 | 3 H2 headings (General, Video Gateway, AI Gateway). Accordion titles use questions (acceptable for FAQ format). |
| 4 | STRUCTURE | 8/10 | Single purpose (FAQ). TODO comment present. Jump-to navigation at top is good. 4 REVIEW flags are a concern. |
| 5 | LAYOUT | 8/10 | AccordionGroup with nested tables, code blocks. CustomDivider between sections. No Related Pages. |
| 6 | VERACITY | 6/10 | 4 REVIEW flags: (1) -broadcaster alias status, (2) minimum deposit amounts, (3) Windows AI roadmap, (4) /getOrchestratorInfo endpoint. These are unverified claims published to users. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | Internal links to troubleshooting, payment guide, pricing strategy, funding guide. Livepeer Tools external link. |
| 9 | PROCESS | 6/10 | 4 REVIEW flags unresolved. TODO comment. `lastVerified` missing day. |
| 10 | COMPLETENESS | 8/10 | Good question coverage for common operator questions. AI section thinner than video section. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway FAQ | OK |
| sidebarTitle | Yes | FAQ | OK |
| description | Yes | Frequently asked questions... | OK |
| PageType | Yes | reference | OK |
| audience | Yes | gateway | OK |
| purpose | Yes | reference | OK |
| status | Yes | current | OK |
| lastVerified | Yes | 2026-03 | Missing day |
| keywords | Yes | 11 items | OK |
| og:image | Yes | fallback.png | OK |

## Findings

1. **VERACITY-F1**: REVIEW flag line 62 - Confirm whether `-broadcaster` remains accepted as alias
2. **VERACITY-F2**: REVIEW flag line 158 - Confirm minimum deposit and reserve amounts
3. **VERACITY-F3**: REVIEW flag line 211 - Confirm whether Windows AI binary is on roadmap
4. **VERACITY-F4**: REVIEW flag line 243 - Confirm `/getOrchestratorInfo` endpoint
5. **FM-F1**: `lastVerified: 2026-03` missing day component
6. **STRUCTURE-F1**: TODO comment block (lines 31-36)
7. **PROCESS-F1**: Page marked `current` but contains 4 unresolved REVIEW flags

## Verdict

**CONDITIONAL PASS** - Content is strong but 4 unresolved REVIEW flags indicate unverified claims. These should be resolved before the page can be considered production-ready. Marking `status: current` while carrying REVIEW flags is inconsistent.
