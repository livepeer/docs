# Review: Setup Options
**File:** v2/orchestrators/guides/deployment-details/setup-options.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.4 | FAIL | pageType: "overview" — not in enum |
| Frontmatter | 1.6 | FAIL | purpose: "orientation" — not in enum |
| Frontmatter | 1.7 | FAIL | Missing complexity |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage |
| Frontmatter | 1.13 | WARN | status: "current" |
| Voice | 2.1 | PASS | UK English |
| Structure | 4.1 | PASS | Single purpose: setup decision navigator |
| Layout | 5.1 | PASS | Navigation template with cards, badges, tables |
| Nav | 7.1 | PASS | In docs.json |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Setup Options | PASS |
| sidebarTitle | Yes | Setup Options | PASS |
| description | Yes | 119 chars | PASS |
| pageType | Yes | overview | FAIL |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | orientation | FAIL |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 10 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | Yes | current | WARN |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Setup Type | 5 | 4 | 5 | 5 | 5 | 24 |

## Verdict: NEEDS WORK
Good navigator page. Fix: 4 invalid/missing frontmatter fields (pageType should be "navigation", purpose should be "orient").
