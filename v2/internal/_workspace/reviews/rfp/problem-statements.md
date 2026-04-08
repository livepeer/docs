# Review: problem-statements.mdx

| Field | Value |
|---|---|
| **File** | `v2/internal/rfp/problem-statements.mdx` |
| **Reviewer** | Claude (automated audit) |
| **Date** | 2026-04-08 |
| **Verdict** | PASS |

## Summary

Extensive page documenting how v2 addressed the four RFP problem statements: Complicated Onboarding, Outdated/Inconsistent Content, Brand & Duplication, Weak Site Integration. Each problem uses AccordionGroup with four sections: Decision-Making, Pre-Work, Implementation, Constraints. Well-evidenced, comprehensive, approximately 160 lines of substantive content.

## Frontmatter Table

| Field | Present | Value | Conformant |
|---|---|---|---|
| title | Yes | Problem Statements | OK |
| sidebarTitle | Yes | Problem Statements | OK |
| description | Yes | Detailed RFP problem statement documentation | OK |
| Keywords | Yes | 4 items | WARN -- capitalised "Keywords" |
| og:image | Yes | fallback.png | OK |
| og:image:alt | Yes | Present | OK |
| audience | Yes | internal | OK |
| purpose | Yes | faq | OK |
| pageType | No | -- | MISSING (has purpose but not pageType) |
| lastVerified | No | -- | MISSING |

## Heading Score Table

| Criterion | Score | Notes |
|---|---|---|
| H1 present | No | No H1 |
| Banned heading words | None | -- |
| Heading hierarchy | OK | H2 sections with accordion sub-structure |
| Heading count | 4 H2s | Appropriate for accordion-heavy layout |

## Category Findings

| Cat | Status | Notes |
|---|---|---|
| 1 FRONTMATTER | PARTIAL | "Keywords" capitalised; missing pageType and lastVerified |
| 2 VOICE | PASS | Clear, evidence-based, professional |
| 3 HEADINGS | PASS | Clean structure with accordions providing depth |
| 4 STRUCTURE | PASS | Single job; comprehensive evidence document |
| 5 LAYOUT | PASS | DisplayCard, AccordionGroup, Columns used correctly |
| 6 VERACITY | PASS | Specific implementation evidence cited |
| 7 NAV | PASS | In docs.json |
| 8 LINKS | WARN | References legacy `v2/pages/` paths in content body |
| 9 PROCESS | PARTIAL | No lastVerified |
| 10 COMPLETENESS | PASS | All four problem statements fully addressed |

## Verdict

**PASS.** Fix capitalised "Keywords". Add pageType and lastVerified. Review legacy path references.
