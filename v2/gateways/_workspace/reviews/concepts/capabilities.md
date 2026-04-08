# Review: Gateway Capabilities
**File:** v2/gateways/concepts/capabilities.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. `PageType` capitalised incorrectly (capital P) |
| Voice | 2.1-2.22 | PASS | UK English ("behaviour" L197). No banned words. Entity-led. No em-dashes. No self-ref. No hedging |
| Headings | 3.1-3.10 | PASS | Clear, descriptive, no banned words |
| Structure | 4.1-4.16 | PASS | One purpose (explain capabilities), flows from functions to workload types to selection to sessions to marketplace. No dead ends |
| Layout | 5.1-5.16 | PASS | Concept template. StyledTable for workload matrix. Mermaid for selection flow. Tabs for discovery methods. Note/Warning callouts. Related Pages CTA |
| Veracity | 6.1-6.12 | PASS | Technical claims align with go-livepeer. Port numbers (1935, 8935, 7935) are correct. Workload matrix aligns with architecture page |
| Nav | 7.1-7.11 | PASS | In docs.json under "Concepts" group |
| Links | 8.1-8.6 | PASS | All links resolve. Cross-references to other concept pages, setup, and developer docs |
| Process | 9.1-9.6 | PASS | No TODOs. No open review flags |
| Completeness | 10.1-10.5 | PASS | Comprehensive: 5 core functions, 4 workload types + BYOC, selection algorithm (5 factors), discovery methods (on-chain/off-chain), session management, marketplace role |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Gateway Capabilities | PASS |
| sidebarTitle | Yes | Capabilities | PASS |
| description | Yes | What gateways can route, how they select orchestrators... | PASS - subject-first, under 160 chars, factual |
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
| Gateway Functions | 5 | 5 | 5 | 5 | 5 | 25 |
| Workload Types | 5 | 5 | 5 | 5 | 5 | 25 |
| BYOC (Bring Your Own Container) | 5 | 5 | 5 | 5 | 5 | 25 |
| Orchestrator Selection | 5 | 5 | 5 | 5 | 5 | 25 |
| Discovery Methods | 5 | 5 | 5 | 5 | 5 | 25 |
| Sessions and Failover | 5 | 5 | 5 | 5 | 5 | 25 |
| Gateway Marketplace Role | 5 | 5 | 5 | 5 | 5 | 25 |
| Related Pages | EXEMPT | - | - | - | - | EXEMPT |
**Average: 25/25**

## Notes
- `PageType` casing bug (systematic across concepts/).
- Description is well-crafted and subject-first.
- The workload type matrix (StyledTable) is clear and shows on-chain/off-chain support per workload.
- Orchestrator selection flowchart (Mermaid) with failover loop is excellent.
- Selection algorithm factors table is comprehensive (capability, price, latency, performance history, stake weight).
- Tabs for on-chain vs off-chain discovery methods work well.
- Session management section covers reuse, failover, dual managers, and price negotiation.
- BYOC section with link to Embody AI avatars provides a concrete example.
- Missing `complexity` - this page is intermediate. Should be marked accordingly.

## Verdict: NEEDS WORK
Reason: `PageType` casing bug. Missing complexity and lifecycleStage. Content quality is excellent - the fixes are purely frontmatter.
