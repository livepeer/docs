# Review: v2/home/solutions/showcase-populated.mdx

| Field | Value |
|---|---|
| Page | `v2/home/solutions/showcase-populated.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS** |

## Summary

Data-driven showcase page using `ShowcaseCards` component with `showcaseDataPopulated` data import. Clean, minimal prose. Well-structured with submission CTA.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | Creative Projects Built with Livepeer | OK |
| sidebarTitle | Yes | Showcase (Populated) | OK |
| description | Yes | Good | OK |
| Purpose | Yes | overview | CASE: wrong |
| pageType | Yes | overview | OK |
| keywords | Yes | Array(7) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-04-07 | OK -- recent |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS |
| Data imports | PASS -- imports from data file |
| CTA | PASS -- Google Form submission link |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `Purpose` wrong casing |
