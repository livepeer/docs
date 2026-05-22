# Review: v2/developers/resources/compendium/example-applications.mdx

**File:** `v2/developers/resources/compendium/example-applications.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | FAIL | Only has title, description, icon. Missing: sidebarTitle, keywords, OG image, pageType, audience, purpose, status, lastVerified, sourceOfTruth. Minimal legacy frontmatter |
| VOICE | 2.1-2.22 | WARN | "Enjoy a curated collection" -- hedging/informal. Should be fact-led. Descriptions use US English patterns |
| HEADINGS | 3.1-3.10 | FAIL | No headings. Content is a single markdown table with no section structure |
| STRUCTURE | 4.1-4.16 | FAIL | Under 2KB. Just an intro sentence and a 4-row table. Minimal content. No dead-end protection (no Related Pages) |
| LAYOUT | 5.1-5.16 | FAIL | No components used. Raw markdown table. No CardGroup, no CTA, no Related Pages |
| VERACITY | 6.1-6.12 | WARN | GitHub links may be stale -- projects from 2022-2023 era. No date context provided |
| NAV | 7.1-7.11 | PASS | Registered in docs.json under Compendium group |
| LINKS | 8.1-8.6 | WARN | All links are external GitHub repos. No verification of current status |
| PROCESS | 9.1-9.6 | FAIL | No status, no lastVerified, no sign-off |
| COMPLETENESS | 10.1-10.5 | FAIL | Only 4 examples listed. No AI examples. No ComfyStream/BYOC examples. Severely outdated |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Example Applications | OK |
| description | Y | "Curated collection..." | WARN -- informal |
| icon | Y | grid-round-2-plus | OK |
| sidebarTitle | N | -- | MISSING |
| keywords | N | -- | MISSING |
| OG image | N | -- | MISSING |
| pageType | N | -- | MISSING |
| audience | N | -- | MISSING |
| purpose | N | -- | MISSING |
| status | N | -- | MISSING |
| lastVerified | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total headings | 0 |
| Score | 0/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P0 | Missing 8+ required frontmatter fields |
| 2 | VOICE | P2 | "Enjoy a curated collection" -- hedging/informal |
| 3 | STRUCTURE | P0 | Under 2KB, no headings, no components |
| 4 | COMPLETENESS | P0 | Only 4 examples, all from 2022-2023 era. No AI or modern examples |
| 5 | VERACITY | P1 | GitHub links not verified for current status |
| 6 | LAYOUT | P1 | No Related Pages, no CTA |

## Verdict

**NEEDS WORK** -- Legacy page with minimal frontmatter, no components, and only 4 outdated examples. Needs complete frontmatter, modern examples (AI, ComfyStream, BYOC), component-based layout, and Related Pages section. High-priority rewrite target.
