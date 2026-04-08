# Review: Join a Pool (old version)
**File:** v2/orchestrators/guides/deployment-details/join-a-pool.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1 | PASS | title present |
| Frontmatter | 1.3 | PASS | description present, 94 chars |
| Frontmatter | 1.4 | FAIL | PageType: "quickstart" — not in enum, also capitalised incorrectly as "PageType" |
| Frontmatter | 1.5 | PASS | audience: orchestrator |
| Frontmatter | 1.6 | FAIL | purpose: "faq" — not in allowed enum |
| Frontmatter | 1.7 | FAIL | Missing complexity |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage |
| Frontmatter | 1.13 | FAIL | keywords lowercase "keywords" (inconsistent with others) and no OG image fields beyond og:image |
| Voice | 2.1 | WARN | Mixed voice — some US English patterns |
| Voice | 2.3 | FAIL | Self-referential: "This tutorial" pattern absent but "Pools are not official" hedging |
| Structure | 4.1 | WARN | Appears to be superseded by new-join-a-pool.mdx — duplicate content |
| Nav | 7.1 | PASS | In docs.json (but both versions are in nav!) |
| Layout | 5.1 | WARN | Uses DynamicTable instead of StyledTable — different component from rest of section |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Join a Pool | PASS |
| sidebarTitle | Yes | Join a Pool | PASS |
| description | Yes | 94 chars | PASS |
| PageType | Yes | quickstart | FAIL (casing + enum) |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | faq | FAIL |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 7 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | No | — | FAIL |

## Verdict: REWRITE REQUIRED
Duplicate page (new-join-a-pool.mdx exists). Multiple frontmatter enum violations. Non-standard component usage (DynamicTable). One of these two pages should be removed from nav.
