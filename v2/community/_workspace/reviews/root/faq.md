# Review: v2/community/faq.mdx

| Field | Value |
|---|---|
| Page | `v2/community/faq.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS** |

## Summary

Well-structured FAQ page using AccordionGroup. 12 questions covering Foundation, SPEs, voting, workstreams, support, governance, LPT, inflation, docs contribution, and events. Well-sourced with links. UK English consistent.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Community FAQ | OK |
| sidebarTitle | Yes | FAQ | OK |
| description | Yes | Good | OK |
| Keywords | Yes | Array(10) | CASE: should be `keywords` |
| og:image | Yes | fallback.png | OK |
| purpose | Yes | faq | OK |
| pageType | Yes | reference | OK |
| audience | Yes | everyone | OK |
| status | Yes | verified_2026 | OK |
| lastVerified | Yes | 2026-03-02 | OK |
| sourceOfTruth | Yes | forum.livepeer.org | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS |
| Entity-led | PASS |
| No hedging | PASS |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS |
| No dead ends | PASS -- links throughout |
| Min 2KB | PASS |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `Keywords` wrong casing (should be `keywords`) |
