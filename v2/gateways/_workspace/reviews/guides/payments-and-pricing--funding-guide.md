# Review: funding-guide.mdx

**Path:** `v2/gateways/guides/payments-and-pricing/funding-guide.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | PASS - "Guide to Funding an On-Chain Gateway" |
| 1.2 description | PASS |
| 1.3 PageType | WARN - `PageType` (capital T) |
| 1.4 audience | PASS - gateway |
| 1.5 status | PASS - current |
| 1.6 lastVerified | PASS - 2026-03-15 |
| 1.7 keywords | PASS - 10 keywords |
| 1.8 og:image | PASS |
| 2.1 UK English | PASS |
| 2.12 entity-led voice | PASS - "After choosing the on-chain operational mode, the gateway needs..." |
| 2.13 no em-dashes | PASS |
| 3.1 heading score | 22/25 |
| 4.1 one job | PASS - funding an on-chain gateway |
| 4.11 no TODO in body | WARN - TODO block lines 26-44 |
| 4.13 min 2KB | PASS - 11.1KB |
| 5.1 correct template | PASS - StyledTable, AccordionGroup, Steps, Tabs, LinkArrow |
| 5.15 Related Pages | PASS - CardGroup with 4 cards |
| 7.1 in docs.json | PASS - line 2659 |

## Frontmatter

| Field | Value | Valid |
|-------|-------|-------|
| title | Guide to Funding an On-Chain Gateway | PASS |
| sidebarTitle | On-chain Funding | PASS |
| description | Step-by-step guide to funding... | PASS |
| PageType | guide | WARN - casing |
| audience | gateway | PASS |
| purpose | operate | PASS |
| status | current | PASS |
| lastVerified | 2026-03-15 | PASS |
| keywords | 10 items | PASS |
| og:image | fallback.png | PASS |

## Heading Score

| Criterion | Score |
|-----------|-------|
| Concise | 22/25 |
| No questions | 25/25 |
| Technical/specific | 22/25 |
| **Total** | **22/25** |

## Verdict

**PASS.** Clean v2-style funding guide. Good AccordionGroup explaining deposit vs reserve with Warning for production reserve amount. Steps component for deposit flow. Three-tab approach for ETH acquisition is user-friendly. Monitoring and withdrawal sections present. This is the canonical funding page; fund-gateway.mdx should redirect here.
