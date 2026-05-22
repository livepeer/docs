# Review: BYOC CPU Tutorial
**File:** v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1 | PASS | title present |
| Frontmatter | 1.2 | FAIL | Missing sidebarTitle |
| Frontmatter | 1.3 | PASS | description present, 195 chars — OVER 160 char limit |
| Frontmatter | 1.4 | FAIL | Missing pageType |
| Frontmatter | 1.5 | FAIL | Missing audience |
| Frontmatter | 1.6 | FAIL | Missing purpose |
| Frontmatter | 1.7 | FAIL | Missing complexity |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage |
| Frontmatter | 1.13 | FAIL | Missing keywords (only has inline keywords array), no status field |
| Voice | 2.1 | WARN | Mixed UK/US English |
| Voice | 2.3 | WARN | "This tutorial walks through" — self-referential opening |
| Structure | 4.1 | PASS | Single purpose: BYOC CPU end-to-end |
| Structure | 4.4 | PASS | Good architecture diagram |
| Nav | 7.1 | FAIL | Not in v2 orchestrators nav (exists in gateways nav only) |
| Links | 8.6 | PASS | External links present |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | BYOC smoke-test... | PASS |
| sidebarTitle | No | — | FAIL |
| description | Yes | 195 chars | FAIL — over 160 |
| pageType | No | — | FAIL |
| audience | No | — | FAIL |
| purpose | No | — | FAIL |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | inline array | WARN |
| og:image | Yes | orchestrators.png | PASS |
| status | No | — | FAIL |

## Verdict: REWRITE REQUIRED
9 frontmatter fields missing or failing. Not in orchestrators nav. Description over limit. Self-referential voice. Appears to be an older version of byoc-cpu-smoke-test.mdx — possible duplicate/superseded.
