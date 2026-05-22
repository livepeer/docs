# Review: v2/community/resources/dashboards.mdx

**File:** `v2/community/resources/dashboards.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, Keywords (capitalised!), OG image, purpose, pageType, audience, status, lastVerified, sourceOfTruth. "Keywords" capitalised |
| VOICE | 2.1-2.22 | WARN | Info callout says "This page is being populated" -- provisional language |
| HEADINGS | 3.1-3.10 | FAIL | No headings |
| STRUCTURE | 4.1-4.16 | FAIL | Near-stub. Only an Info callout and one Card linking to an external GitHub resource table. Under 2KB. Single external link does not constitute a complete page |
| LAYOUT | 5.1-5.16 | FAIL | Reference pageType but no reference content, no tables, no Related Pages, no CTA beyond the one Card |
| VERACITY | 6.1-6.12 | WARN | Links to a specific commit hash on GitHub -- may become stale |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | WARN | GitHub link uses specific commit hash (651a56e8...) -- should link to HEAD or a stable reference |
| PROCESS | 9.1-9.6 | WARN | status=provisional, lastVerified=2026-03-02. Page explicitly says "being populated" |
| COMPLETENESS | 10.1-10.5 | FAIL | No dashboard content, no analytics descriptions, no embedded views |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Dashboards | OK |
| sidebarTitle | Y | Dashboards | OK |
| description | Y | Good | OK |
| Keywords | Y | 4 items | WARN -- key capitalised |
| audience | Y | everyone | OK |
| pageType | Y | reference | OK |
| purpose | Y | landing | OK |
| status | Y | provisional | OK |
| lastVerified | Y | 2026-03-02 | OK |
| sourceOfTruth | Y | github.com/shtukaresearch/livepeer-data-geography | OK |
| OG image | Y | fallback.png | OK |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total headings | 0 |
| Score | 0/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "Keywords" capitalised -- should be "keywords" |
| 2 | STRUCTURE | P0 | Page is effectively a stub -- single external link, no content |
| 3 | LINKS | P2 | GitHub link uses commit-specific URL -- will become stale |
| 4 | COMPLETENESS | P0 | Community dashboards page has no dashboard content. awesome-livepeer.mdx covers dashboards better |

## Verdict

**FAIL -- STUB** -- Page contains only a "being populated" Info callout and one external Card link. No dashboard content, descriptions, or embedded resources. Consider merging into awesome-livepeer.mdx or populating fully.
