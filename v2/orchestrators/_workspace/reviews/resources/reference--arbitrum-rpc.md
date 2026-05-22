# Review: Arbitrum RPCs
**File:** v2/orchestrators/resources/reference/arbitrum-rpc.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | PASS | UK English. Entity-led. No banned words. No em-dashes. No self-referential language. |
| Headings | 3.1-3.10 | PASS | All headings concise and technical. |
| Structure | 4.1-4.16 | PASS | Single purpose (RPC endpoint reference). Requirements, providers, configuration, common issues, see-also. Exceeds 2KB. |
| Layout | 5.1-5.16 | PASS | StyledTable throughout. CustomDivider. Code blocks with `icon="terminal"`. CardGroup "See Also". |
| Veracity | 6.1-6.12 | WARN | Provider rate limits (Alchemy 300 CU/s, Infura 100k/day, Chainstack 25 req/s) may change. Public Arbitrum RPC URL `arb1.arbitrum.io/rpc` should be verified as current. |
| Nav | 7.1-7.11 | PASS | In docs.json under Technical Reference group. Redirects configured. |
| Links | 8.1-8.6 | WARN | Line 179: Card href `/v2/orchestrators/resources/technical/x-contract-addresses` links to an x-prefixed (deprecated/archived) file. Should link to `/v2/orchestrators/resources/reference/technical/contract-addresses`. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present (lines 25-47). No human sign-off. |
| Completeness | 10.1-10.5 | PASS | Covers requirements, 6 provider options, configuration example, verification command, and 4 common issues with fixes. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Arbitrum RPCs | PASS |
| sidebarTitle | Yes | Arbitrum RPCs | PASS |
| description | Yes | 113 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 8 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Requirements | 5 | 5 | 5 | 5 | 5 | 25 |
| Provider Options | 5 | 5 | 5 | 5 | 5 | 25 |
| Configuration | 5 | 5 | 5 | 5 | 5 | 25 |
| Verify Your Endpoint | 5 | 5 | 5 | 5 | 5 | 25 |
| Common Issues | 5 | 5 | 5 | 5 | 5 | 25 |
| See Also | EXEMPT | -- | -- | -- | -- | EXEMPT |

## Verdict: NEEDS WORK
Key issues: Missing `complexity` and `lifecycleStage`, `status: review`, broken link to x-contract-addresses (should be contract-addresses without x- prefix), provider rate limits unverified.
