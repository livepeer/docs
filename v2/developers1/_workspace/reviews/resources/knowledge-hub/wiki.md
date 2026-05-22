# Review: v2/developers/resources/knowledge-hub/wiki.mdx

**File:** `v2/developers/resources/knowledge-hub/wiki.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, PageType (capitalised!), keywords, OG image, audience, lastVerified, purpose. Missing: status |
| VOICE | 2.1-2.22 | PASS | Neutral, fact-led language |
| HEADINGS | 3.1-3.10 | FAIL | No headings |
| STRUCTURE | 4.1-4.16 | FAIL | Under 2KB. Just a Card, br tag, and a Note. Minimal content |
| LAYOUT | 5.1-5.16 | WARN | Card and Note used. Raw `<br />` tag -- should use CustomDivider or spacing component. No Related Pages |
| VERACITY | 6.1-6.12 | WARN | Card href links to deepwiki.com/livepeer but title says "View the Livepeer Wiki on Github" -- misleading. Should link to github.com/livepeer/wiki |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | FAIL | Card href (deepwiki.com) does not match Card text ("Livepeer Wiki on Github"). Link goes to DeepWiki, not the GitHub wiki |
| PROCESS | 9.1-9.6 | WARN | Missing status. lastVerified=2026-03-17 |
| COMPLETENESS | 10.1-10.5 | FAIL | Page exists to embed a wiki README but embed is unavailable. No useful content remains |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Livepeer Wiki | OK |
| sidebarTitle | Y | Livepeer Wiki | OK |
| description | Y | Good | OK |
| PageType | Y | resource | WARN -- capitalised, non-standard |
| keywords | Y | 4 items | OK |
| OG image | Y | fallback.png | OK |
| audience | Y | developer | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | orient | OK |
| status | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total headings | 0 |
| Score | 0/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | LINKS | P0 | Card says "View the Livepeer Wiki on Github" but links to deepwiki.com, not github.com/livepeer/wiki |
| 2 | FRONTMATTER | P1 | "PageType" capitalised |
| 3 | FRONTMATTER | P2 | Missing status |
| 4 | STRUCTURE | P1 | Under 2KB, near-stub |
| 5 | LAYOUT | P2 | Raw `<br />` tag instead of spacing component |

## Verdict

**FAIL** -- Broken link: Card text says "Github" but href goes to DeepWiki. Page is a near-stub with no useful content. Either fix the link and populate, or merge this page into the DeepWiki page and redirect.
