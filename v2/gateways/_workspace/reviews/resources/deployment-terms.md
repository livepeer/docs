# Review: deployment-terms.mdx

**Path:** `v2/gateways/resources/deployment-terms.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Well-structured reference page defining the three-axis deployment model for gateways. Clean use of StyledTable, AccordionGroup, and Badges. Content is authoritative and clear. Has a TODO comment block and uses "Crypto knowledge" as a table header which conflicts with domain terminology rules.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields present. Good keyword coverage. |
| 2 | VOICE | 8/10 | UK English ("behaviour" on line 61 if present, "organisation" on line 211). "Crypto knowledge" in table header violates domain term rules. No em-dashes. Entity-led prose. |
| 3 | HEADINGS | 9/10 | 7 headings for 11KB page. Clear hierarchy: Deployment > Operational Mode > Setup Type > Node Type > Key Terms > Payment Clearinghouse > Asymmetry. No questions. |
| 4 | STRUCTURE | 9/10 | Single purpose (define deployment terms), single audience (gateway). Has TODO comment block (lines 27-32) but in MDX comment. Content flows logically. |
| 5 | LAYOUT | 8/10 | Correct reference template. Uses approved components (StyledTable, Accordion, Badge, LinkArrow). No Related Pages section. No CTA. |
| 6 | VERACITY | 9/10 | Claims are accurate and internally consistent. No unsourced numbers. No REVIEW flags. |
| 7 | NAV | 10/10 | In docs.json nav. Not orphaned. |
| 8 | LINKS | 9/10 | LinkArrow to remote-signers page. No broken link indicators. No TODO/TBD in rendered content. |
| 9 | PROCESS | 9/10 | `status: current`, `lastVerified: 2026-03-14`. |
| 10 | COMPLETENESS | 9/10 | Covers all three deployment axes thoroughly. Asymmetry section adds important nuance. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway Deployment Terms | OK |
| sidebarTitle | Yes | Deployment Terms | OK |
| description | Yes | Terminology and concept definitions... | OK |
| PageType | Yes | reference | OK |
| audience | Yes | gateway | OK |
| purpose | Yes | reference | OK |
| status | Yes | current | OK |
| lastVerified | Yes | 2026-03-14 | OK |
| keywords | Yes | 8 items | OK |
| og:image | Yes | fallback.png | OK |

## Heading Score

| Criterion | Pass |
|-----------|------|
| H1 from title (not in body) | Yes |
| No duplicate headings | Yes |
| No questions in headings | Yes |
| Logical hierarchy | Yes |
| Heading score >= 20/25 | Yes |

## Findings

1. **VOICE-F1**: "Crypto knowledge" as a table cell header (line 105) - domain rules prohibit "crypto" generically
2. **STRUCTURE-F1**: TODO comment block (lines 27-32) present but not rendered
3. **LAYOUT-F1**: No Related Pages or CTA section at bottom

## Verdict

**PASS** - Minor voice fix needed for "Crypto knowledge" table cell.
