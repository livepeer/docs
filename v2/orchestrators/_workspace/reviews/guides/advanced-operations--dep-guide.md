# Review: Advanced Operations Guide
**File:** v2/orchestrators/guides/advanced-operations/dep-guide.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1 | FAIL | title present but generic "Advanced Operations Guide" |
| Frontmatter | 1.2 | PASS | sidebarTitle: "Guide" |
| Frontmatter | 1.3 | PASS | description present, 131 chars |
| Frontmatter | 1.4 | FAIL | pageType: "overview" — not in allowed enum |
| Frontmatter | 1.5 | PASS | audience: orchestrator |
| Frontmatter | 1.6 | FAIL | purpose: "guide" — should be "orient" for an overview page |
| Frontmatter | 1.7 | FAIL | Missing complexity field |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage field |
| Frontmatter | 1.11 | PASS | OG image present |
| Frontmatter | 1.13 | FAIL | Keywords capitalised as "Keywords" (non-standard casing) |
| Voice | 2.1 | PASS | No banned words detected |
| Structure | 4.1 | WARN | Navigation/overview page — very thin content, just cards + table |
| Structure | 4.4 | FAIL | Dead-end links — hrefs point to non-existent routes (e.g. /v2/orchestrators/concepts/rs-workloads, /v2/orchestrators/operations/rc-ai-pipelines) |
| Structure | 4.11 | WARN | Under 2KB content |
| Nav | 7.1 | FAIL | Not in docs.json nav |
| Links | 8.6 | FAIL | Multiple broken internal links to /v2/orchestrators/operations/* and /v2/orchestrators/concepts/* |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Advanced Operations Guide | PASS |
| sidebarTitle | Yes | Guide | PASS |
| description | Yes | 131 chars | PASS |
| pageType | Yes | overview | FAIL — not in enum |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | guide | WARN |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 7 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | Yes | draft | INFO |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Sections | 3 | 3 | 4 | 4 | 5 | 19 |
| Recommended entry points | 4 | 3 | 4 | 4 | 4 | 19 |

## Verdict: REWRITE REQUIRED
Orphan page (not in nav), all card links broken, missing required frontmatter fields. This appears to be a deprecated overview page superseded by the actual section structure.
