# Review: Dual Mode Configuration
**File:** v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.4 | FAIL | pageType: "how_to" — not in enum |
| Frontmatter | 1.7 | FAIL | Missing complexity |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage |
| Voice | 2.1 | PASS | UK English |
| Voice | 2.12 | PASS | No banned words |
| Structure | 4.1 | PASS | Single purpose: dual-workload config |
| Structure | 4.13 | WARN | Large TODO block at top with multiple REVIEW flags |
| Veracity | 6.1 | WARN | 4 REVIEW items (port, model command, VRAM, earnings) |
| Nav | 7.1 | PASS | In docs.json |
| Headings | 3.2 | WARN | "What Changes" uses title case inconsistently |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Dual Mode Configuration | PASS |
| sidebarTitle | Yes | Dual Mode | PASS |
| description | Yes | 105 chars | PASS |
| pageType | Yes | how_to | FAIL |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | setup | PASS |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 11 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | Yes | draft | INFO |

## Verdict: NEEDS WORK
Good content. Fix: 3 missing/invalid frontmatter fields. Resolve 4 REVIEW items. Heading case inconsistency.
