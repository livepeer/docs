# Review: The Gateway Role in the Livepeer Network
**File:** v2/gateways/concepts/role.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | PARTIAL FAIL | Missing: complexity, lifecycleStage. `PageType` capitalised incorrectly (capital P) |
| Voice | 2.1-2.22 | PASS | UK English consistent ("behaviour" used correctly). No banned words. Entity-led. No em-dashes. No self-ref. No hedging |
| Headings | 3.1-3.10 | PASS | Clear, descriptive, no banned words |
| Structure | 4.1-4.16 | PASS | One purpose (explain the gateway role), three role dimensions (technical, business, network), operational mode comparison. No dead ends. Well above 2KB |
| Layout | 5.1-5.16 | PASS | Concept template. AccordionGroup with analogies for different backgrounds. Tabs for operational modes. StyledTable for comparison. Related Pages CTA at bottom |
| Veracity | 6.1-6.12 | REVIEW | "Q4 2025" for remote signer ship date (L279) - needs verification. "PRs #3791, #3822" cited (L279) - good sourcing. "~0.095 ETH" claim needs date/source |
| Nav | 7.1-7.11 | PASS | In docs.json under "Concepts" group |
| Links | 8.1-8.6 | PASS | All links resolve to known pages. Mix of LinkArrow components and markdown links |
| Process | 9.1-9.6 | PASS | No TODOs. No open review flags |
| Completeness | 10.1-10.5 | PASS | Comprehensive role coverage: technical, business, network, operational modes, evolution timeline, three background analogies |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | The Gateway Role in the Livepeer Network | PASS |
| sidebarTitle | Yes | Role | PASS |
| description | Yes | Learn how gateways connect applications to Livepeer... | FAIL - starts with "Learn" (imperative/self-ref). Should be subject-first |
| PageType | Yes | concept | FAIL - capital P, should be `pageType` |
| audience | Yes | gateway | PASS |
| purpose | Yes | orient | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 12 items | PASS |
| OG image | Yes | /snippets/assets/media/og-images/fallback.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Technical Role | 5 | 5 | 5 | 5 | 5 | 25 |
| Business Role | 5 | 5 | 5 | 5 | 5 | 25 |
| Network Role | 5 | 5 | 5 | 5 | 5 | 25 |
| Operational Mode | 5 | 5 | 5 | 5 | 5 | 25 |
| Related Pages | EXEMPT | - | - | - | - | EXEMPT |
**Average: 25/25**

## Notes
- `PageType` vs `pageType`: Same casing bug as navigator.mdx. Capital P will cause field to be ignored by tooling.
- Description starts with "Learn how" which is imperative/instructional. Suggested fix: "Gateways connect applications to Livepeer, route video and AI workloads, and define the demand side of the network."
- The three-background accordion (Cloud, Ethereum, Neither) is excellent for audience accessibility. Each includes a relevant Mermaid diagram.
- The evolution timeline (2017-2024 -> Q4 2025 -> Today) is well-structured and uses Mermaid timeline chart.
- `purpose: orient` is appropriate for a role explanation page. Could also be `explain` given the depth of content - but `orient` is defensible as the page's primary job is orientation.
- No deprecated "Broadcaster" term in authored content. Historical reference ("then called **broadcasters**") is appropriate contextual usage.
- Well above 2KB minimum. Substantial, well-structured content.

## Verdict: NEEDS WORK
Reason: `PageType` casing bug. Missing complexity and lifecycleStage. Description starts with imperative "Learn". Otherwise excellent quality - close to PASS.
