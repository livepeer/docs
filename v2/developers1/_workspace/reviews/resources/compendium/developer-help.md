# Review: v2/developers/resources/compendium/developer-help.mdx

**File:** `v2/developers/resources/compendium/developer-help.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, PageType (capitalised!), keywords, OG image, audience, purpose, lastVerified. Missing: status. "PageType" capitalised |
| VOICE | 2.1-2.22 | PASS | UK English ("programme", "behaviour"). Fact-led. No banned words. Clear, direct tone |
| HEADINGS | 3.1-3.10 | PASS | 9 H2/H3 headings: Quick Reference, Discord (Channels), Livepeer Forum (Categories), Developer Office Hours, GitHub Issues (Writing a Good Issue), Livepeer Studio Support, Security Vulnerabilities, Community and Social, Grants and Funding. Score: 24/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (developer help channels). Comprehensive, well-organised by channel type |
| LAYOUT | 5.1-5.16 | PASS | Uses tables, AccordionGroup, CardGroup, Card, Note, Tip, Warning, CustomDivider, GotoCard import. Rich component usage |
| VERACITY | 6.1-6.12 | PASS | Channel links to known URLs. Response times are realistic estimates. Immunefi link correct |
| NAV | 7.1-7.11 | PASS | Registered in docs.json. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | Mix of external (Discord, GitHub, Forum) and internal links. All well-formed |
| PROCESS | 9.1-9.6 | WARN | Missing status field. lastVerified=2026-03-03 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers every help channel: Discord, Forum, Office Hours, GitHub Issues, Studio Support, Security, Social, Grants |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Developer Help | OK |
| sidebarTitle | Y | Developer Help | OK |
| description | Y | Good, comprehensive | OK |
| PageType | Y | reference | WARN -- key capitalised |
| keywords | Y | 10 items | OK |
| OG image | Y | fallback.png | WARN -- should use developer-specific |
| audience | Y | developer | OK |
| purpose | Y | troubleshoot | OK |
| lastVerified | Y | 2026-03-03 | OK |
| status | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2+H3 headings | 9 |
| Banned heading patterns | None |
| Score | 24/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "PageType" capitalised -- should be "pageType" |
| 2 | FRONTMATTER | P2 | Missing status field |
| 3 | FRONTMATTER | P3 | OG image uses fallback.png |
| 4 | LAYOUT | P3 | GotoCard imported but not used |

## Verdict

**PASS** -- Excellent developer help page. Comprehensive coverage of every support channel with response time estimates, channel-specific advice, and proper UK English. One of the strongest pages in the developers tab. Minor frontmatter capitalisation fix needed.
