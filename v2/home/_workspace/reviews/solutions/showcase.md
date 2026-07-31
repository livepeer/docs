# Review: v2/home/solutions/showcase.mdx

| Field | Value |
|---|---|
| Page | `v2/home/solutions/showcase.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Showcase page using `ShowcaseCards` with `showcaseData` import. Similar to showcase-populated but different data source. Contains a typo in the intro.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | Creative Projects Built with Livepeer | WARN -- duplicate of showcase-populated title |
| sidebarTitle | Yes | Project Showcase | OK |
| description | Yes | Good | OK |
| Purpose | Yes | overview | CASE: wrong |
| pageType | Yes | overview | OK |
| keywords | Yes | Array(12) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| Spelling | FAIL -- "insprired" (line 48) should be "inspired" |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Voice | P1 | Typo: "insprired" (line 48) |
| 2 | Frontmatter | P3 | `Purpose` wrong casing |
| 3 | Frontmatter | P3 | Duplicate title with showcase-populated |
