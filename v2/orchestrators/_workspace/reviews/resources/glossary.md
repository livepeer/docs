# Review: Orchestrator Glossary
**File:** v2/orchestrators/resources/glossary.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. `audience` value `orchestrator-operator` not in allowed list. `status: draft` not production-ready. No `sidebarTitle` field uses non-standard `pageVariant`. |
| Voice | 2.1-2.22 | PASS | UK English. Entity-led intro. No banned words detected. No em-dashes. No self-referential language. |
| Headings | 3.1-3.10 | PASS | No headings to score in traditional sense -- content is in SearchTable component. Section comments are structural only. |
| Structure | 4.1-4.16 | PASS | Single purpose (glossary reference). No dead ends (SearchTable provides navigation). Exceeds 2KB minimum. |
| Layout | 5.1-5.16 | PASS | Uses SearchTable, LazyLoad, CustomDivider. Data-driven via itemsList prop. Machine-readable companion (glossary-data.json). |
| Veracity | 6.1-6.12 | PASS | Definitions are factual and consistent with protocol documentation. No unsubstantiated claims. |
| Nav | 7.1-7.11 | PASS | Listed in docs.json at `v2/orchestrators/resources/glossary`. Redirects configured. |
| Links | 8.1-8.6 | PASS | No inline links in glossary entries (definitions are self-contained). |
| Process | 9.1-9.6 | FAIL | `status: draft` -- not human-signed-off for production. |
| Completeness | 10.1-10.5 | PASS | Comprehensive term coverage across protocol, AI, economics, deployment, and hardware domains. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Glossary | PASS |
| sidebarTitle | Yes | Glossary | PASS |
| description | Yes | 143 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator-operator | FAIL -- not in allowed list (should be `orchestrator`) |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 4 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | PASS (but uses fallback, not orchestrators OG) |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| (No traditional headings -- SearchTable-driven layout) | -- | -- | -- | -- | -- | N/A |

## Verdict: NEEDS WORK
Key issues: `audience` value non-standard, missing `complexity` and `lifecycleStage`, `status: draft`, OG image uses fallback instead of orchestrators-specific image.
