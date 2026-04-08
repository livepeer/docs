# Review: v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs.mdx

## Summary

Curated list of video and blog resources. Good use of tables. External links to third-party content. Missing `status` field. `Purpose` capitalised in frontmatter. No Related Pages or CTA.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Delegator Videos and Blogs | OK |
| sidebarTitle | Y | Videos & Blogs | OK |
| description | Y | Curated video and blog resources... | OK |
| Purpose | Y | orient | WARN: capitalised `Purpose` -- should be `purpose` |
| pageType | Y | resource | OK |
| pageVariant | Y | knowledge-hub | OK |
| keywords | Y | array | OK |
| og:image | Y | fallback.png | OK |
| audience | Y | delegator | OK |
| lifecycleStage | Y | discover | OK |
| lastVerified | Y | 2026-03-17 | OK |
| status | N | - | MISSING |

**Frontmatter score: 8.5/10** (`Purpose` capitalisation, missing `status`)

## Heading Score Table

| Criterion | Pass |
|---|---|
| No question headings | PASS |
| No banned heading words | PASS |

**Heading score: 20/20**

## Voice (Cat 2)

- 2.1 UK English: PASS
- 2.9 Em dashes: PASS

## Structure (Cat 4)

- 4.1 One job: PASS (curate resources)
- 4.5 No TODO: PASS
- 4.8 Min 2KB: PASS
- 4.10 No dead ends: FAIL -- no Related Pages or CTA

## Layout (Cat 5)

- 5.10 Related Pages / CTA: FAIL -- no Related Pages CardGroup

## Veracity (Cat 6)

- 6.1 External links: WARN -- third-party blog/video links may go stale. No freshness indicators beyond "May 2024" on one entry
- 6.8 Link health: Should be periodically validated

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 8.5/10 | `Purpose` casing, missing `status` |
| VOICE | PASS | |
| HEADINGS | 20/20 | |
| STRUCTURE | PASS | |
| LAYOUT | FAIL | No Related Pages/CTA |
| VERACITY | WARN | External links may be stale |
| NAV | PASS | |
| LINKS | WARN | Third-party link health unknown |
| PROCESS | PASS | |
| COMPLETENESS | PASS | |

**Overall: NEEDS WORK** -- Fix `Purpose` casing, add `status`, add Related Pages, validate external links.
