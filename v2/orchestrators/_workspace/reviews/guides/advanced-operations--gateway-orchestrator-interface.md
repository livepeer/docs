# Review: Gateway and Orchestrator Interface
**File:** v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.4 | FAIL | pageType: "how_to" — not in allowed enum (should be "guide" or "instruction") |
| Frontmatter | 1.6 | FAIL | Missing purpose field |
| Frontmatter | 1.7 | FAIL | Missing complexity field |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage field |
| Frontmatter | 1.11 | PASS | OG image present |
| Voice | 2.1 | PASS | UK English throughout |
| Voice | 2.12 | PASS | No banned words |
| Voice | 2.14 | PASS | No em-dashes |
| Structure | 4.1 | PASS | Single purpose — configuring combined gateway+orchestrator |
| Structure | 4.4 | PASS | No dead ends — Related Pages section present |
| Structure | 4.13 | PASS | No untracked TODO |
| Layout | 5.1 | PASS | Good template usage — tabs, tables, code blocks |
| Layout | 5.15 | PASS | Related Pages CTA present |
| Veracity | 6.1 | WARN | 2 FACT CHECK comments (port numbers, metric names) |
| Nav | 7.1 | PASS | In docs.json |
| Links | 8.6 | PASS | Internal links resolve |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway and Orchestrator Interface | PASS |
| sidebarTitle | Yes | Gateway Interface | PASS |
| description | Yes | 158 chars | PASS |
| pageType | Yes | how_to | FAIL |
| audience | Yes | orchestrator | PASS |
| purpose | No | — | FAIL |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 9 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | Yes | draft | INFO |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Deployment patterns | 5 | 4 | 5 | 5 | 4 | 23 |
| Port allocation | 5 | 5 | 5 | 5 | 4 | 24 |
| Self-routing | 5 | 4 | 5 | 5 | 4 | 23 |
| Pricing alignment | 5 | 4 | 5 | 5 | 4 | 23 |
| Monitoring both roles | 4 | 4 | 5 | 5 | 4 | 22 |
| Related pages | — | — | — | — | — | EXEMPT |

## Verdict: NEEDS WORK
Strong content. Fix: 4 missing frontmatter fields (purpose, complexity, lifecycleStage, pageType enum). Resolve 2 FACT CHECK items before publishing.
