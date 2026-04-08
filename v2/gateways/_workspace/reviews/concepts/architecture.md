# Review: Gateway Architecture
**File:** v2/gateways/concepts/architecture.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. `PageType` capitalised incorrectly (capital P) |
| Voice | 2.1-2.22 | PASS | UK English ("behaviour" L268). No banned words. Entity-led throughout. No em-dashes. No self-ref. No hedging |
| Headings | 3.1-3.10 | PASS | Clear, descriptive, no banned words |
| Structure | 4.1-4.16 | PASS | One purpose (explain architecture), layered from context to internals to request flow to components. No dead ends. Well above 2KB |
| Layout | 5.1-5.16 | PASS | Concept template. ScrollableDiagram wrappers for Mermaid. StyledTable for comparisons. Note callouts. Related Pages CTA |
| Veracity | 6.1-6.12 | PASS | Source code reference with specific commit hash (L314: `5691cb48`). Contract names match protocol. Technical claims align with go-livepeer architecture |
| Nav | 7.1-7.11 | PASS | In docs.json under "Concepts" group |
| Links | 8.1-8.6 | PASS | All links resolve. GitHub source links included with commit hash |
| Process | 9.1-9.6 | PASS | No TODOs. No open review flags |
| Completeness | 10.1-10.5 | PASS | Comprehensive: layer context, 4 interaction categories, dual pipeline architecture, job lifecycle (8 steps), software components. Missing: no discussion of failure modes or scalability limits |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway Architecture | PASS |
| sidebarTitle | Yes | Architecture | PASS |
| description | Yes | How gateways fit into the Livepeer stack... | PASS - subject-first, under 160 chars, no self-ref |
| PageType | Yes | concept | FAIL - capital P, should be `pageType` |
| audience | Yes | gateway | PASS |
| purpose | Yes | explain | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 12 items | PASS |
| OG image | Yes | /snippets/assets/media/og-images/fallback.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Gateway Layer Context | 5 | 5 | 5 | 5 | 5 | 25 |
| Gateway Interactions | 5 | 5 | 5 | 5 | 5 | 25 |
| Applications | 5 | 4 | 5 | 5 | 5 | 24 |
| Orchestrators | 5 | 5 | 5 | 5 | 5 | 25 |
| Remote Signer | 5 | 5 | 5 | 5 | 5 | 25 |
| Arbitrum Protocol | 5 | 5 | 5 | 5 | 5 | 25 |
| Dual Pipeline Architecture | 5 | 5 | 5 | 5 | 5 | 25 |
| Video vs AI Pipelines | 5 | 5 | 5 | 5 | 5 | 25 |
| Job Lifecycle | 5 | 5 | 5 | 5 | 5 | 25 |
| Lifecycle Steps | 5 | 5 | 5 | 5 | 5 | 25 |
| Software Components | 5 | 5 | 5 | 5 | 5 | 25 |
| go-livepeer | 5 | 5 | 5 | 5 | 5 | 25 |
| livepeer_cli | 5 | 5 | 5 | 5 | 5 | 25 |
| Remote Signer (off-chain) | 5 | 5 | 5 | 5 | 5 | 25 |
| Arbitrum Contracts (on-chain) | 5 | 5 | 5 | 5 | 5 | 25 |
| Related Pages | EXEMPT | - | - | - | - | EXEMPT |
**Average: 24.9/25**

## Notes
- `PageType` casing bug (same as role.mdx and navigator.mdx). Systematic issue across concepts/ pages.
- Description is well-written: subject-first, concise, covers the page scope.
- Three Mermaid diagrams (layered architecture, dual pipeline, request flow) are well-structured with consistent theming.
- Source code reference with commit hash (L314) is excellent practice for veracity.
- The dual pipeline section (video vs AI) with colour-coded Mermaid is particularly strong.
- Note on L317 about legacy `-broadcaster` flag is appropriate historical context.
- Missing `complexity` - this page is intermediate/advanced level. Should be marked accordingly.

## Verdict: NEEDS WORK
Reason: `PageType` casing bug. Missing complexity and lifecycleStage. Otherwise this is the strongest page in the audit - close to exemplary.
