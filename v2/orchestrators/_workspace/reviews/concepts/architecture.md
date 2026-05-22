# Review: Orchestrator Architecture
**File:** v2/orchestrators/concepts/architecture.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Orchestrator Architecture" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Architecture" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 143 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | PASS | "concept" - valid |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | PASS | "explain" - valid |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | FAIL | Field name is "Keywords" (capital K) - may not be read by tooling; also 21 items (possibly too many but not a hard fail) |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present (using fallback.png) |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first, no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | PASS | Highly specific: orchestrator architecture, go-livepeer, LivepeerNode, AI runner, etc. |
| 1. Frontmatter | 1.13 pageType valid | PASS | "concept" in approved list |
| 2. Voice | 2.1 UK English | PASS | Uses "prioritise" pattern correctly where present |
| 2. Voice | 2.2 banned words | FAIL | Line 374: "several" - "deployed in several physical configurations" |
| 2. Voice | 2.3 banned phrases | PASS | None found |
| 2. Voice | 2.4 no self-reference | PASS | No "this page" in body or description |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8 deprecated terms | WARN | "Transcoder" used extensively but correctly - refers to the actual transcoder process/component, not as synonym for orchestrator |
| 2. Voice | 2.9-2.22 | PASS | No deprecated term misuse |
| 3. Headings | 3.1 heading quality | PASS | All headings score above threshold |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Single purpose: explain orchestrator architecture |
| 4. Structure | 4.2 no dead ends | PASS | Related Pages footer with 4 cards |
| 4. Structure | 4.3 prerequisites | PASS | Cross-refs to role and capabilities pages at top |
| 4. Structure | 4.4 Discord test | PASS | Complete architecture explanation in one page |
| 4. Structure | 4.5 min size | PASS | 19512 bytes (>5KB for concept) |
| 4. Structure | 4.6 TODO/REVIEW | WARN | 2 REVIEW flags in JSX comments (lines 208, 443) - human action items |
| 4. Structure | 4.7-4.16 trade-offs | PASS | Combined vs O-T split vs Pool tradeoffs presented in tabs |
| 5. Layout | 5.1 template match | PASS | Concept page with diagrams, tables, cross-refs |
| 5. Layout | 5.2 required sections | PASS | Intro, body sections, related pages |
| 5. Layout | 5.3 approved components | PASS | All components from /snippets/ |
| 5. Layout | 5.4 data imports | PASS | No hardcoded data that should be imported |
| 5. Layout | 5.5 Related Pages | PASS | CardGroup footer with 4 related pages |
| 5. Layout | 5.6-5.16 | PASS | |
| 6. Veracity | 6.1 claims citable | PASS | Architecture claims match go-livepeer codebase |
| 6. Veracity | 6.2 deprecated API | PASS | None |
| 6. Veracity | 6.3 numbers sourced | PASS | Port 7935 is correct default Prometheus port |
| 6. Veracity | 6.4 REVIEW flags | WARN | 2 REVIEW flags for unverified claims (AIServiceRegistry status, AI Runner lifecycle) |
| 6. Veracity | 6.5 contract address | WARN | Hardcoded AIServiceRegistry address (0x04C0b249...) - should verify current |
| 6. Veracity | 6.6-6.12 | PASS | |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json concepts group |
| 7. Navigation | 7.2 no orphans | PASS | |
| 7. Navigation | 7.3 correct lane | PASS | concepts/ is correct for a concept page |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 7. Navigation | 7.5-7.11 | PASS | |
| 8. Links | 8.1 internal links resolve | WARN | Link to "/v2/orchestrators/guides/payments-and-pricing/payment-flow" and "/v2/orchestrators/resources/technical/contract-addresses" - verify these exist |
| 8. Links | 8.2 snippet imports | PASS | 5 imports all root-absolute with extensions |
| 8. Links | 8.3 no TODO in published | PASS | TODOs/REVIEWs in JSX comments only |
| 8. Links | 8.4-8.6 | PASS | |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 | FAIL | REVIEW items unresolved |
| 10. Content | 10.1 question coverage | PASS | Layer position, interactions, pipelines, job flow, configs, components |
| 10. Content | 10.2 zero-to-hero | PASS | From layer context to specific component details |
| 10. Content | 10.3 self-containment | PASS | Complete architecture explanation |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Architecture | PASS |
| sidebarTitle | Yes | Architecture | PASS |
| description | Yes | How Orchestrators fit into the Livepeer stack... | PASS |
| pageType | Yes | concept | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | explain | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| Keywords | Yes (WRONG CASE) | 21 items | FAIL (should be lowercase "keywords") |
| OG image | Yes | fallback.png | PASS |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Orchestrator Layer Context | 4 | 4 | 5 | 4 | 4 | 21 |
| Orchestrator Interactions | 4 | 4 | 5 | 5 | 4 | 22 |
| Gateways | 5 | 3 | 5 | 5 | 5 | 23 |
| GPU Workers | 5 | 3 | 5 | 5 | 5 | 23 |
| Arbitrum Protocol | 5 | 3 | 5 | 5 | 4 | 22 |
| Dual Pipeline Architecture | 5 | 5 | 5 | 5 | 4 | 24 |
| Video vs AI Pipelines | 5 | 4 | 5 | 5 | 4 | 23 |
| Request Flow | 5 | 4 | 5 | 5 | 5 | 24 |
| Lifecycle Steps | 4 | 4 | 5 | 5 | 5 | 23 |
| Setup Configurations | 4 | 4 | 5 | 5 | 4 | 22 |
| Software Components | 4 | 4 | 5 | 5 | 4 | 22 |
| go-livepeer | 5 | 3 | 5 | 5 | 5 | 23 |
| AI Runner | 5 | 3 | 5 | 5 | 5 | 23 |
| livepeer_cli | 5 | 3 | 5 | 5 | 5 | 23 |
| Arbitrum Contracts | 5 | 3 | 5 | 5 | 4 | 22 |
| Related Pages | EXEMPT | - | - | - | - | - |

## Verdict: NEEDS WORK
- Missing: complexity, lifecycleStage
- "Keywords" has wrong case (capital K) - should be "keywords"
- Banned word "several" on line 374
- 2 unresolved REVIEW flags (AIServiceRegistry status, AI Runner lifecycle)
- Hardcoded contract address should be verified
- No human sign-off
