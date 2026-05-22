# Review: Gateway Business Model
**File:** v2/gateways/concepts/business-model.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. `PageType` capitalised incorrectly (capital P) |
| Voice | 2.1-2.22 | PASS | UK English. No banned words. Entity-led. No em-dashes. No self-ref. No hedging |
| Headings | 3.1-3.10 | PASS | Clear, descriptive, no banned words, no questions |
| Structure | 4.1-4.16 | PASS | One purpose (explain business model), flows from payments to earnings to costs to operator models to pricing to case studies. No dead ends |
| Layout | 5.1-5.16 | PASS | Concept template. Mermaid payment flow. StyledTable for comparisons. AccordionGroup for operator models. Code blocks for CLI examples. Related Pages CTA |
| Veracity | 6.1-6.12 | REVIEW | Streamplace and Daydream references (L256-259) link to /v2/solutions/ pages - need to verify these exist. Go code example (L230-237) is illustrative, not protocol code - acceptable |
| Nav | 7.1-7.11 | PASS | In docs.json under "Concepts" group |
| Links | 8.1-8.6 | PASS | All links use valid paths. Solution page links need existence verification |
| Process | 9.1-9.6 | PASS | No TODOs. No open review flags |
| Completeness | 10.1-10.5 | PASS | Comprehensive: payment flow, earnings breakdown, cost types, currency explanation, 4 operator models, pricing (protocol + business), price discovery, case studies |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway Business Model | PASS |
| sidebarTitle | Yes | Business Model | PASS |
| description | Yes | How gateways earn money, what they pay... | PASS - subject-first, under 160 chars, factual |
| PageType | Yes | concept | FAIL - capital P, should be `pageType` |
| audience | Yes | gateway | PASS |
| purpose | Yes | explain | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 11 items | PASS |
| OG image | Yes | /snippets/assets/media/og-images/fallback.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Payments Flow | 5 | 5 | 5 | 5 | 5 | 25 |
| Gateway Earnings | 5 | 5 | 5 | 5 | 5 | 25 |
| Gateway Costs | 5 | 5 | 5 | 5 | 5 | 25 |
| Currency | 5 | 5 | 5 | 5 | 5 | 25 |
| Gateway Operator Models | 5 | 5 | 5 | 5 | 5 | 25 |
| Pricing and Fees | 5 | 5 | 5 | 5 | 5 | 25 |
| Protocol-level costs (what you pay) | 5 | 5 | 5 | 4 | 5 | 24 |
| Business Layer Pricing | 5 | 5 | 5 | 5 | 5 | 25 |
| Price Discovery | 5 | 5 | 5 | 5 | 5 | 25 |
| Production Gateways | 5 | 5 | 5 | 5 | 5 | 25 |
| Related Pages | EXEMPT | - | - | - | - | EXEMPT |
**Average: 24.9/25**

## Notes
- `PageType` casing bug (systematic across concepts/).
- Description is well-crafted and subject-first.
- The payment flow Mermaid diagram clearly shows the four-step chain.
- Four operator models (self-hosted, service provider, platform builder, content provider) are well-differentiated.
- Go code example (L230-237) is illustrative pseudocode for pricing logic - clearly labelled as application code, not protocol code. Acceptable.
- CLI examples for maxPricePerUnit and maxPricePerCapability are practical and actionable.
- Case studies section (Streamplace, Daydream) adds concrete examples. Links to /v2/solutions/ should be verified.
- Missing `complexity` - this page is beginner/intermediate. Should be marked accordingly.

## Verdict: NEEDS WORK
Reason: `PageType` casing bug. Missing complexity and lifecycleStage. Otherwise strong content quality.
