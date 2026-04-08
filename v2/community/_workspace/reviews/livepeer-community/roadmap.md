# Review: v2/community/livepeer-community/roadmap.mdx

| Field | Value |
|---|---|
| Page | `v2/community/livepeer-community/roadmap.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Roadmap embed page. Near-identical copy of v2/home/about-livepeer/roadmap.mdx. Same iframe, same introductory text, same grammar error. Has a redundant duplicate "Livepeer Roadmap" heading at line 70.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | Livepeer Foundation Roadmap | OK |
| sidebarTitle | Yes | Livepeer Roadmap | OK |
| description | Yes | Good | OK |
| pageType | Yes | overview | OK |
| keywords | Yes | Array(12) | WARN -- duplicate keywords |
| og:image | Yes | fallback.png | OK |
| audience | Yes | community | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| purpose | Yes | overview | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| Grammar | FAIL -- "Livepeer meet" should be "meets" (line 49) |

## Structure (Cat 4)

| Check | Result |
|---|---|
| Duplicate | FAIL -- near-identical to home/about-livepeer/roadmap.mdx |
| Duplicate heading | WARN -- two "Roadmap" headings (lines 46, 70) |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Voice | P2 | Grammar: "Livepeer meet" (line 49) |
| 2 | Structure | P1 | Near-duplicate of home roadmap page |
| 3 | Structure | P3 | Duplicate heading |
| 4 | Frontmatter | P3 | Duplicate keywords |
