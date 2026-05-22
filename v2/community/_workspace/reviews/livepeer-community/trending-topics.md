# Review: v2/community/livepeer-community/trending-topics.mdx

| Field | Value |
|---|---|
| Page | `v2/community/livepeer-community/trending-topics.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Social feed aggregation page -- near-identical to v2/home/trending.mdx. Same data imports, same layout. Adds a "Product Communities" section with cards linking to solution community pages. Contains the same massive commented-out block (140+ lines).

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Trending Topics | OK |
| sidebarTitle | Yes | Trending Topics | OK |
| description | Yes | Good | OK |
| purpose | Yes | landing | OK |
| pageType | Yes | landing | OK |
| keywords | Yes | Array(5) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | community | OK |
| lastVerified | Yes | 2026-03-17 | OK |

**Frontmatter:** Complete.

## Structure (Cat 4)

| Check | Result |
|---|---|
| Duplicate content | FAIL -- near-identical to home/trending.mdx |
| Commented-out | FAIL -- 140+ lines of dead code (lines 81-218) |
| Product Communities links | WARN -- links to /solutions/*/community paths not verified |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Structure | P1 | Near-duplicate of home/trending.mdx |
| 2 | Structure | P2 | 140+ lines of dead commented-out code |
| 3 | Links | P2 | Product community links may not resolve (missing v2 prefix) |
