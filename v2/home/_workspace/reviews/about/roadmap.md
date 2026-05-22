# Review: v2/home/about/roadmap.mdx

| Field | Value |
|---|---|
| Page | `v2/home/about/roadmap.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Roadmap embed page. Minimal prose wrapping an iframe to roadmap.livepeer.org. Functional but thin content-wise.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | What's Next for Livepeer? | WARN -- question in title |
| sidebarTitle | Yes | Roadmap | OK |
| description | Yes | Good | OK |
| purpose | Yes | overview | OK |
| pageType | Yes | overview | OK |
| keywords | Yes | Array(12) | WARN -- duplicates: "aspirations" and "ambitions" appear twice each |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS |
| Grammar | WARN -- "Livepeer meet this dynamic need" (line 49) -- should be "meets" |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- roadmap display |
| Min 2KB | WARN -- thin content, mostly iframe |
| Duplicate content | WARN -- near-identical to community/ecosystem/roadmap.mdx |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |
| Orphan | NO |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Voice | P2 | Grammar: "Livepeer meet" should be "meets" |
| 2 | Frontmatter | P3 | Duplicate keywords |
| 3 | Structure | P2 | Near-identical duplicate of community roadmap page |
