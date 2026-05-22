# Review: v2/home/solutions/applications.mdx

| Field | Value |
|---|---|
| Page | `v2/home/solutions/applications.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Key applications page showing industry verticals where video is essential, plus a list of iconic products that depend on video. Clean card layout with DisplayCard components.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Key Applications for Livepeer | OK |
| sidebarTitle | Yes | Key Applications | OK |
| description | Yes | Good | OK |
| PageType | Yes | overview | CASE: wrong |
| keywords | Yes | Array(12) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| purpose | Yes | overview | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS -- "monetisation" used |
| No em-dashes | PASS |

## Heading Score (Cat 3)

| # | Heading | Compliant |
|---|---|---|
| 1 | Verticals where video is now essential | OK |
| 2 | Products that wouldn't exist without video | OK |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS |
| No dead ends | WARN -- no CTA or Related Pages at bottom |
| Min 2KB | PASS |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `PageType` wrong casing |
| 2 | Structure | P2 | No CTA or Related Pages at bottom |
