# Review: v2/home/solutions/verticals.mdx

| Field | Value |
|---|---|
| Page | `v2/home/solutions/verticals.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Industry verticals page with 8 cards using ScrollBox for long-form content. Some cards are populated with detailed content (Media, Gaming, Robotics, Analytics, Science, Monitoring) while 3 cards are empty stubs (Digital Twins, Social Media). Contains a spelling error in a card title.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Industry Verticals | OK |
| description | Yes | Good | OK |
| Purpose | Yes | overview | CASE: wrong |
| pageType | Yes | overview | OK |
| keywords | Yes | Array(6) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| sidebartitle | Yes | Industry Verticals | CASE: should be `sidebarTitle` |

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | MIXED -- "decentralized" (line 100) vs "decentralised" not used |
| Spelling | FAIL -- "Montioring" in card title (line 202) should be "Monitoring" |

## Structure (Cat 4)

| Check | Result |
|---|---|
| Stub cards | FAIL -- Digital Twins and Social Media cards are empty |
| Placeholder text | FAIL -- "Subtitle" placeholders on 3 cards (lines 94, 118, 168) |
| All same images | WARN -- all 8 cards use identical hero_showcase.png |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Voice | P0 | Typo in heading: "Montioring" (line 202) |
| 2 | Structure | P1 | 2 empty stub cards (Digital Twins, Social Media) |
| 3 | Structure | P1 | 3 "Subtitle" placeholder texts |
| 4 | Frontmatter | P3 | `Purpose` and `sidebartitle` wrong casing |
| 5 | Layout | P3 | All cards use the same image |
