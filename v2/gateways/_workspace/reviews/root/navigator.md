# Review: Gateway Navigator
**File:** v2/gateways/navigator.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. `PageType` capitalised incorrectly (should be `pageType`) |
| Voice | 2.1-2.22 | PASS | UK English ("behaviour" not present but "optimizing" on L219 should be "optimising"). Clean prose, entity-led, no banned words. No em-dashes. No self-ref |
| Headings | 3.1-3.10 | PASS | Clear, descriptive, no banned words, no questions in headings |
| Structure | 4.1-4.16 | PASS | One purpose (navigation), tabbed entry paths, persona matrix, accordion deep-dives. No dead ends - every path leads somewhere. Comprehensive |
| Layout | 5.1-5.16 | PASS | Correct use of Tabs, AccordionGroup, StyledTable, StyledSteps, Mermaid, CardGroup. Related Pages via quick links at bottom |
| Veracity | 6.1-6.12 | REVIEW | L72: "~0.095 ETH on Arbitrum" - needs source/date. Otherwise navigational content |
| Nav | 7.1-7.11 | PASS | In docs.json under "About Gateways" group |
| Links | 8.1-8.6 | PARTIAL FAIL | L197: `/v2/gateways/setup/guide` - this path does not appear in the index. Likely should be `/v2/gateways/setup/run-a-gateway` |
| Process | 9.1-9.6 | PARTIAL FAIL | TODO comment still present (L30-34) |
| Completeness | 10.1-10.5 | PASS | Comprehensive navigator covering all personas, goals, journey stages, and topic deep-dives |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway Navigator | PASS |
| sidebarTitle | Yes | Navigator | PASS |
| description | Yes | Not sure where to start? Use this decision guide... | FAIL - starts with question/self-ref phrasing ("Not sure where to start?") |
| PageType | Yes | navigation | FAIL - key is `PageType` (capital P), should be `pageType` |
| audience | Yes | gateway | PASS |
| purpose | Yes | orient | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 10 items | PASS |
| OG image | Yes | /snippets/assets/media/og-images/fallback.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| What's your goal? | 5 | 5 | 5 | 5 | 5 | 25 |
| Operational Mode | 5 | 5 | 5 | 5 | 5 | 25 |
| Your journey through the docs | 4 | 5 | 5 | 5 | 5 | 24 |
| Guides by topic | 5 | 5 | 5 | 5 | 5 | 25 |
| Find your entry point by persona | 5 | 5 | 5 | 5 | 5 | 25 |
| Quick links | 5 | 5 | 5 | 5 | 5 | 25 |
**Average: 24.8/25**

Note: "What's your goal?" contains a question - but this is a navigator page where the question format serves the decision-guide purpose. Borderline.

## Notes
- `PageType` vs `pageType`: The capital P will likely cause the field to be ignored by any tooling that expects lowercase. This is a bug.
- Description starts with "Not sure where to start?" which is question-based and reader-directed. Should be subject-first: "Decision guide for gateway documentation paths by goal, type, and experience level."
- L197: Link to `/v2/gateways/setup/guide` appears broken. The index shows `setup/run-a-gateway.mdx` as the main setup page.
- L219: "optimizing" should be "optimising" (UK English).
- TODO comment (L30-34) still present.
- Overall: This is an exceptionally well-structured navigation page. The tabbed goal paths, comparison table, Mermaid diagram, journey steps, accordion deep-dives, and persona matrix are best-in-class.

## Verdict: NEEDS WORK
Reason: `PageType` casing bug. Missing complexity/lifecycleStage. Description violates voice rules. One potentially broken link. Open TODO. Minor spelling (optimizing).
