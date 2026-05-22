# Review: v2/developers/resources/reference/sdks.mdx

**File:** `v2/developers/resources/reference/sdks.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | Has title, sidebarTitle, description, Keywords (capitalised!), OG image (developer-specific), pageType, purpose, audience, status, lastVerified |
| VOICE | 2.1-2.22 | PASS | Fact-led. Technical. No banned words |
| HEADINGS | 3.1-3.10 | PASS | 7 H2/H3 headings: SDK families, Studio SDK (TypeScript, Python, Go), React UI Kit, AI SDK (alpha), Deprecated SDKs, Related pages. Score: 22/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (SDK reference). Complete coverage of all SDK families |
| LAYOUT | 5.1-5.16 | PASS | Uses StyledTable, CustomDivider, CenteredContainer, code blocks, Tip. Has Related Pages with 2 cards |
| VERACITY | 6.1-6.12 | PASS | Version numbers cited (3.5.0, 4.3.2). Package names match npm/PyPI. Deprecated SDKs have migration paths |
| NAV | 7.1-7.11 | PASS | Registered in docs.json. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | GitHub, npm, PyPI links. Related pages use /v2/ absolute paths |
| PROCESS | 9.1-9.6 | PASS | status=current, lastVerified=2026-04-05 |
| COMPLETENESS | 10.1-10.5 | PASS | All 7 SDK packages, deprecated packages with migration, install commands, code examples |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | SDKs | OK |
| sidebarTitle | Y | SDKs | OK |
| description | Y | Good, comprehensive | OK |
| Keywords | Y | 7 items | WARN -- key capitalised |
| OG image | Y | developers.png | OK |
| pageType | Y | reference | OK |
| purpose | Y | reference | OK |
| audience | Y | developer | OK |
| status | Y | current | OK |
| lastVerified | Y | 2026-04-05 | OK |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2+H3 headings | 7 |
| Banned heading patterns | None |
| Score | 22/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "Keywords" capitalised -- should be "keywords" |

## Verdict

**PASS** -- Comprehensive SDK reference with version numbers, install commands, code snippets for each language, and deprecated SDK migration paths. Clean layout with Related Pages. Only the capitalised "Keywords" key needs fixing.
