# Review: v2/developers/resources/reference/apis.mdx

**File:** `v2/developers/resources/reference/apis.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | Has title, sidebarTitle, description, Keywords (capitalised!), OG image (developer-specific), pageType, purpose, audience, status, lastVerified. Missing: sourceOfTruth |
| VOICE | 2.1-2.22 | PASS | Fact-led technical writing. No banned words. UK English not fully tested (technical content is largely language-neutral) |
| HEADINGS | 3.1-3.10 | PASS | 5 H2 headings: Studio REST API, AI Gateway API, Common response shape, OpenAPI spec, Related pages. Score: 20/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (API reference). Complete resource/endpoint tables for both APIs |
| LAYOUT | 5.1-5.16 | PASS | Uses StyledTable, TableRow, TableCell, CustomDivider, CenteredContainer, CardGroup. Has Related Pages section with 3 cards |
| VERACITY | 6.1-6.12 | PASS | Endpoint paths, authentication patterns, and response shapes are accurate and consistent with known Livepeer API behaviour |
| NAV | 7.1-7.11 | PASS | Registered in docs.json under Reference group. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | Related pages cards use /v2/ absolute paths. External links to livepeer.studio |
| PROCESS | 9.1-9.6 | PASS | status=current, lastVerified=2026-04-05 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers both APIs completely with endpoints, auth, response shapes, and OpenAPI spec location |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | APIs | OK |
| sidebarTitle | Y | APIs | OK |
| description | Y | Good, concise | OK |
| Keywords | Y | 6 items | WARN -- key capitalised |
| OG image | Y | developers.png | OK -- developer-specific |
| pageType | Y | reference | OK |
| purpose | Y | reference | OK |
| audience | Y | developer | OK |
| status | Y | current | OK |
| lastVerified | Y | 2026-04-05 | OK |
| sourceOfTruth | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2 headings | 5 |
| Total H3 headings | 3 |
| Banned heading patterns | None |
| Score | 22/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "Keywords" capitalised -- should be "keywords" |
| 2 | FRONTMATTER | P3 | Missing sourceOfTruth |

## Verdict

**PASS** -- Excellent API reference page. Complete coverage of both APIs, proper component usage, Related Pages section, and developer-specific OG image. Only issue is the capitalised "Keywords" frontmatter key.
