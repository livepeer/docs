# Review: v2/developers/resources/compendium/resources.mdx

**File:** `v2/developers/resources/compendium/resources.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, PageType (capitalised!), keywords (capitalised: "Keywords"!), OG image, audience, lastVerified, purpose. "PageType" and "Keywords" both capitalised |
| VOICE | 2.1-2.22 | PASS | UK English ("programmes", "analysing"). Fact-led descriptions. No banned words |
| HEADINGS | 3.1-3.10 | PASS | 9 H2 headings: Official Tools, SDKs, Network Dashboards, Node Operator Tools, Community Platforms, Blogs/Reading, Security, Grants, plus Tip. Score: 23/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Comprehensive curated resource library. Good organisation by category |
| LAYOUT | 5.1-5.16 | PASS | Uses CardGroup, Card, CustomDivider, Tip, GotoCard import. No explicit Related Pages section but content is inherently navigational |
| VERACITY | 6.1-6.12 | PASS | Links to known stable URLs. Version-dated blog posts cited with dates |
| NAV | 7.1-7.11 | PASS | Registered in docs.json under Compendium group. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | External links to well-known URLs. Community links to awesome-livepeer |
| PROCESS | 9.1-9.6 | WARN | No explicit status field. lastVerified=2026-03-17. Missing status |
| COMPLETENESS | 10.1-10.5 | PASS | Comprehensive: tools, SDKs, dashboards, monitoring, community, blogs, security, grants |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Resources | OK |
| sidebarTitle | Y | Resources | OK |
| description | Y | Good | OK |
| PageType | Y | guide | WARN -- key capitalised |
| Keywords | Y | 10 items | WARN -- key capitalised |
| OG image | Y | fallback.png | WARN -- should use developer-specific OG |
| audience | Y | developer | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | orient | OK |
| status | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2 headings | 9 |
| Banned heading patterns | None |
| Score | 23/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "PageType" capitalised -- should be "pageType" |
| 2 | FRONTMATTER | P1 | "Keywords" capitalised -- should be "keywords" |
| 3 | FRONTMATTER | P2 | Missing status field |
| 4 | FRONTMATTER | P3 | OG image uses fallback.png -- should use developer-specific |
| 5 | LAYOUT | P3 | GotoCard imported but not used in the file |

## Verdict

**PASS WITH ISSUES** -- Excellent curated resource library with comprehensive coverage and good UK English voice. Two capitalised frontmatter keys need fixing (PageType, Keywords). Missing status field. Unused GotoCard import should be removed.
