# Review: Orchestrator Incentive Model
**File:** v2/orchestrators/concepts/incentive-model.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Orchestrator Incentive Model" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Incentive Model" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 138 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | PASS | "concept" - valid |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | PASS | "explain" - valid |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | FAIL | Field name is "Keywords" (capital K) |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present (using fallback.png) |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first, no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | PASS | Specific: orchestrator earnings, LPT rewards, ETH fees, reward cut, fee cut, etc. |
| 1. Frontmatter | 1.13 pageType valid | PASS | "concept" in approved list |
| 2. Voice | 2.1 UK English | PASS | "incentivise" used correctly (line 177) |
| 2. Voice | 2.2 banned words | PASS | None found |
| 2. Voice | 2.3 banned phrases | FAIL | Lines 323, 344: "rather than" used twice (banned phrase) |
| 2. Voice | 2.4 no self-reference | PASS | No "this page" in body or description |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8-2.22 deprecated terms | PASS | None found |
| 3. Headings | 3.1 heading quality | PASS | All above threshold |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Single purpose: explain orchestrator economics |
| 4. Structure | 4.2 no dead ends | PASS | Related Pages footer with 4 cards |
| 4. Structure | 4.3 prerequisites | PASS | Links to capabilities and role pages |
| 4. Structure | 4.4 Discord test | PASS | Complete economics reference |
| 4. Structure | 4.5 min size | PASS | 18572 bytes (>5KB for concept) |
| 4. Structure | 4.6 TODO/REVIEW | WARN | 3 REVIEW flags (lines 171, 274, 327) - fee mechanics, gas costs, commercial link |
| 4. Structure | 4.7-4.16 trade-offs | PASS | Reward cut tradeoffs table, operator model comparison, cost structure |
| 5. Layout | 5.1 template match | PASS | Concept page with diagrams, tables, code blocks |
| 5. Layout | 5.2 required sections | PASS | All concept sections present |
| 5. Layout | 5.3 approved components | PASS | All from /snippets/ |
| 5. Layout | 5.4 data imports | WARN | ai-prices.json example is inline - could be imported from a data file |
| 5. Layout | 5.5 Related Pages | PASS | CardGroup footer |
| 5. Layout | 5.6-5.16 | PASS | |
| 6. Veracity | 6.1 claims citable | PASS | Revenue streams, pricing units, active set mechanics are accurate |
| 6. Veracity | 6.2 deprecated API | PASS | None |
| 6. Veracity | 6.3 numbers sourced | PASS | "top 100" active set is correct; "~22 hours" round duration is correct |
| 6. Veracity | 6.4 REVIEW flags | WARN | 3 REVIEW flags for unverified claims (fee cut direction, gas costs, commercial link) |
| 6. Veracity | 6.5-6.12 | PASS | |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json concepts group |
| 7. Navigation | 7.2 no orphans | PASS | |
| 7. Navigation | 7.3 correct lane | PASS | concepts/ correct for economics concept |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 7. Navigation | 7.5-7.11 | PASS | |
| 8. Links | 8.1 internal links | WARN | Links to "/v2/orchestrators/guides/staking-and-rewards/rewards-and-fees" and "/v2/orchestrators/guides/staking-and-rewards/attracting-delegates" and "/v2/orchestrators/guides/payments-and-pricing/pricing-strategy" - verify all exist |
| 8. Links | 8.2 snippet imports | PASS | 5 imports all root-absolute |
| 8. Links | 8.3 no TODO in published | PASS | TODOs/REVIEWs in JSX comments only |
| 8. Links | 8.4-8.6 | PASS | |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 | FAIL | 3 REVIEW items unresolved |
| 10. Content | 10.1 question coverage | PASS | Revenue streams, fees, rewards, costs, payment flow, operator models, pricing, delegators |
| 10. Content | 10.2 zero-to-hero | PASS | From revenue overview to detailed pricing configuration |
| 10. Content | 10.3 self-containment | PASS | Complete incentive model explanation |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Incentive Model | PASS |
| sidebarTitle | Yes | Incentive Model | PASS |
| description | Yes | How Orchestrators earn... | PASS |
| pageType | Yes | concept | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | explain | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| Keywords | Yes (WRONG CASE) | 21 items | FAIL |
| OG image | Yes | fallback.png | PASS |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Two Revenue Streams | 5 | 4 | 5 | 5 | 4 | 23 |
| Service Fees (ETH) | 5 | 5 | 5 | 5 | 4 | 24 |
| Pricing units | 5 | 4 | 5 | 5 | 5 | 24 |
| Fee distribution | 5 | 4 | 5 | 5 | 5 | 24 |
| Inflation Rewards (LPT) | 5 | 5 | 5 | 5 | 4 | 24 |
| The reward call | 5 | 5 | 5 | 5 | 4 | 24 |
| Reward distribution | 5 | 4 | 5 | 5 | 4 | 23 |
| Active set requirement | 5 | 5 | 5 | 5 | 4 | 24 |
| Orchestrator Costs | 5 | 4 | 5 | 5 | 4 | 23 |
| Payment Flow End-to-End | 5 | 5 | 5 | 5 | 4 | 24 |
| Operator Models | 4 | 4 | 5 | 5 | 4 | 22 |
| Configuring Prices | 5 | 4 | 5 | 5 | 4 | 23 |
| Base price | 5 | 3 | 5 | 5 | 5 | 23 |
| AI capability pricing | 5 | 4 | 5 | 5 | 4 | 23 |
| Per-Gateway pricing | 5 | 4 | 5 | 5 | 4 | 23 |
| Attracting Delegators | 5 | 4 | 5 | 5 | 4 | 23 |
| Related Pages | EXEMPT | - | - | - | - | - |

## Verdict: NEEDS WORK
- Missing: complexity, lifecycleStage
- "Keywords" has wrong case (capital K)
- Banned phrase "rather than" used twice (lines 323, 344)
- 3 unresolved REVIEW flags
- No human sign-off
