# Review: v2/developers/resources/knowledge-hub/awesome-livepeer.mdx

**File:** `v2/developers/resources/knowledge-hub/awesome-livepeer.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, PageType (capitalised!), keywords, OG image, audience, lastVerified, purpose. Missing: status |
| VOICE | 2.1-2.22 | WARN | "View Awesome Livepeer on Github" -- "Github" should be "GitHub" (capitalisation). Body text is minimal |
| HEADINGS | 3.1-3.10 | PASS | 1 H2: "Awesome Livepeer". Minimal but acceptable for a redirect/embed page. Score: 15/25 |
| STRUCTURE | 4.1-4.16 | FAIL | Under 2KB. Just a Card link and a Note saying the README is unavailable. Near-stub |
| LAYOUT | 5.1-5.16 | WARN | Card and Note components used. No Related Pages. Intended to embed README but that feature is unavailable |
| VERACITY | 6.1-6.12 | PASS | GitHub link is correct |
| NAV | 7.1-7.11 | PASS | Registered in docs.json. Redirects from old paths exist |
| LINKS | 8.1-8.6 | PASS | Single external link to correct GitHub repo |
| PROCESS | 9.1-9.6 | WARN | Missing status. lastVerified=2026-03-17 |
| COMPLETENESS | 10.1-10.5 | FAIL | Page exists to embed a README but the embed is unavailable, leaving no useful content |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Awesome Livepeer | OK |
| sidebarTitle | Y | Awesome Livepeer | OK |
| description | Y | Good | OK |
| PageType | Y | resource | WARN -- capitalised, non-standard value |
| keywords | Y | 5 items | OK |
| OG image | Y | fallback.png | OK |
| audience | Y | developer | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | orient | OK |
| status | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total headings | 1 |
| Score | 15/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "PageType" capitalised and value "resource" not in canonical enum |
| 2 | FRONTMATTER | P2 | Missing status field |
| 3 | STRUCTURE | P1 | Under 2KB -- page has no useful content beyond a link |
| 4 | VOICE | P3 | "Github" should be "GitHub" |
| 5 | COMPLETENESS | P1 | Page purpose (embed README) is broken -- consider replacing with curated content or removing |

## Verdict

**NEEDS WORK** -- Page exists to embed the awesome-livepeer README but the embed is unavailable. Left with only a link and a note. Either populate with curated content (like the community/resources/awesome-livepeer.mdx does) or redirect to the community version.
