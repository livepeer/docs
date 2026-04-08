# Review: v2/home/trending.mdx

| Field | Value |
|---|---|
| Page | `v2/home/trending.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Aggregated social feed page pulling YouTube, Forum, Discord, X, and Blog data. Functional content section is clean and well-structured. However, the page has massive commented-out legacy HTML (lines 67-205) that should be removed. Not registered in docs.json nav -- orphan page.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Trending Topics | OK |
| sidebarTitle | Yes | Trending Topics | OK |
| description | Yes | Trending Topics at Livepeer... | OK |
| keywords | Yes | Array(5) | OK |
| og:image | Yes | fallback.png | OK |
| pageType | No | -- | MISSING |
| audience | No | -- | MISSING |
| purpose | No | -- | MISSING |
| lastVerified | No | -- | MISSING |

**Issues:** 4 missing required frontmatter fields.

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS |
| No em-dashes | PASS |
| No banned words | PASS |

Minimal prose -- mostly component-rendered.

## Heading Score (Cat 3)

Headings use Icon components inline. Functional but non-standard.

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- social feed aggregation |
| No dead ends | PASS -- links to all sources |
| Min 2KB | PASS (with comments) |
| No TODO | PASS |
| Commented-out blocks | FAIL -- 140+ lines of dead HTML/tables (lines 67-205) |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | NO -- ORPHAN PAGE |
| Orphan | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P1 | Missing pageType, audience, purpose, lastVerified |
| 2 | Nav | P1 | Not registered in docs.json -- orphan |
| 3 | Structure | P2 | 140+ lines of dead commented-out HTML |
