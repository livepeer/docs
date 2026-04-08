# Review: v2/community/resources/guides.mdx

**File:** `v2/community/resources/guides.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, description, sidebarTitle, pageType, audience, status, lastVerified, sourceOfTruth, Purpose (capitalised). Missing: keywords, OG image. "Purpose" capitalised |
| VOICE | 2.1-2.22 | PASS | UK English throughout. Fact-led descriptions. No banned words. "organised" used correctly |
| HEADINGS | 3.1-3.10 | PASS | 5 H2 headings: Delegators & LPT Holders, Gateway Operators, Orchestrators & Node Operators, Developers, Governance Participation. Score: 20/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (community guides catalogue by role). Clear role-based organisation with HR dividers |
| LAYOUT | 5.1-5.16 | PASS | Uses CardGroup, Card with icons and hrefs. Good mix of internal (/v2/) and external links. No Related Pages section but each section is a navigation hub |
| VERACITY | 6.1-6.12 | PASS | Internal links point to real pages. External links to well-known community resources |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Internal links use /v2/ prefix. External links to known stable URLs |
| PROCESS | 9.1-9.6 | PASS | status=verified_2026, lastVerified=2026-03-02 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers all four main roles plus governance participation |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Community Guides | OK |
| description | Y | Good, UK English | OK |
| sidebarTitle | Y | Community Guides | OK |
| Purpose | Y | concept | WARN -- key capitalised |
| pageType | Y | reference | OK |
| audience | Y | everyone (array) | OK |
| status | Y | verified_2026 | OK |
| lastVerified | Y | 2026-03-02 | OK |
| sourceOfTruth | Y | forum.livepeer.org | OK |
| keywords | N | -- | MISSING |
| OG image | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2 headings | 5 |
| Banned heading patterns | None |
| Score | 20/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | Missing OG image -- required for social sharing |
| 2 | FRONTMATTER | P1 | "Purpose" key capitalised -- should be "purpose" |
| 3 | FRONTMATTER | P2 | Missing keywords |
| 4 | LAYOUT | P3 | Live Pioneers card has no href -- only "(Reference: livepioneers.app)" text |

## Verdict

**PASS WITH ISSUES** -- Solid community guides hub page with good role-based organisation and UK English voice. Needs OG image, lowercase "purpose" key, and keywords added to frontmatter. Live Pioneers card needs an href.
