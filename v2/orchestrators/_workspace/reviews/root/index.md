# Review: Orchestrators Index
**File:** v2/orchestrators/index.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Orchestrators Index" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Orchestrators Index" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 63 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | FAIL | "navigation" - valid value |
| 1. Frontmatter | 1.5 audience | FAIL | Missing entirely |
| 1. Frontmatter | 1.6 purpose | PASS | "orient" - valid value |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | PASS | "discover" - valid value |
| 1. Frontmatter | 1.9 keywords | PASS | Present, 4 items |
| 1. Frontmatter | 1.10 OG image | FAIL | Missing entirely |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first, no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | FAIL | Generic ("generated index", "table of contents") - not searcher-intent-aligned |
| 1. Frontmatter | 1.13 pageType valid | PASS | "navigation" is in approved list |
| 2. Voice | 2.1 UK English | PASS | No US spellings detected |
| 2. Voice | 2.2 banned words | PASS | None found |
| 2. Voice | 2.3 banned phrases | PASS | None found |
| 2. Voice | 2.4 no self-reference | PASS | No "this page" in body or description |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8-2.22 deprecated terms | PASS | None found |
| 3. Headings | 3.1 heading quality | N/A | Auto-generated index; headings are section labels |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Navigation index only |
| 4. Structure | 4.2 no dead ends | PASS | Every item links to a page |
| 4. Structure | 4.3 prerequisites | N/A | Navigation page |
| 4. Structure | 4.4 Discord test | N/A | Not a content page |
| 4. Structure | 4.5 min size | PASS | 8113 bytes (>2KB) |
| 4. Structure | 4.6-4.16 TODO/REVIEW | PASS | None in published content (generation banner is expected) |
| 5. Layout | 5.1 template match | PASS | Navigation page - list of links is correct |
| 5. Layout | 5.2-5.16 components | N/A | Auto-generated page |
| 6. Veracity | 6.1-6.12 | N/A | Index page - no factual claims |
| 7. Navigation | 7.1 in docs.json | FAIL | NOT in docs.json nav |
| 7. Navigation | 7.2 no orphans | FAIL | Structural orphan - not navigable from sidebar |
| 7. Navigation | 7.3 correct lane | PASS | In orchestrators root |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 8. Links | 8.1 internal links resolve | WARN | Uses relative .mdx links (e.g. "navigator.mdx") - may not resolve in Mintlify |
| 8. Links | 8.2 snippet imports | N/A | No imports |
| 8. Links | 8.3 no TODO in published | PASS | Generation banner is in JSX comment |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 governance | FAIL | Auto-generated file; no governance metadata |
| 10. Content | 10.1-10.5 completeness | N/A | Auto-generated index |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrators Index | PASS |
| sidebarTitle | Yes | Orchestrators Index | PASS |
| description | Yes | Generated table of contents for docs pages under v2/orchestrators. | PASS |
| pageType | Yes | navigation | PASS |
| audience | No | - | FAIL |
| purpose | Yes | orient | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | Yes | discover | PASS |
| keywords | Yes | 4 items | FAIL (generic) |
| OG image | No | - | FAIL |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Table of contents | 3 | 2 | 5 | 4 | 5 | 19 |
| Concepts | 4 | 3 | 5 | 5 | 5 | 22 |
| Guides | 4 | 3 | 5 | 5 | 5 | 22 |

## Verdict: NEEDS WORK
- Missing: audience, complexity, OG image block
- Not in docs.json (orphan)
- Generic keywords
- Auto-generated file with limited governance metadata
