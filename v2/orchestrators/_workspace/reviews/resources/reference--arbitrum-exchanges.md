# Review: Arbitrum Exchanges
**File:** v2/orchestrators/resources/reference/arbitrum-exchanges.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | PASS | UK English ("centralised"). Entity-led. No banned words. No em-dashes. No self-referential language. |
| Headings | 3.1-3.10 | PASS | All headings concise and technical. |
| Structure | 4.1-4.16 | PASS | Single purpose (token acquisition reference). Clear ETH/LPT sections. "How Much Do You Need?" provides practical guidance. Exceeds 2KB. |
| Layout | 5.1-5.16 | PASS | StyledTable throughout. CustomDivider. Warning for scam tokens. Note for stake threshold. CardGroup "See Also". |
| Veracity | 6.1-6.12 | WARN | LPT contract address `0x289ba1701C2F088cf0faf8B3705246331cB8A839` should be verified on Arbiscan. Bridge services (Hop, Stargate) should be confirmed as still operational. Gas estimate "0.01-0.05 ETH" may drift with Arbitrum gas price changes. |
| Nav | 7.1-7.11 | PASS | In docs.json under Technical Reference group. Redirects configured. |
| Links | 8.1-8.6 | WARN | Line 157: Card href `/v2/orchestrators/resources/technical/x-contract-addresses` links to x-prefixed file (same issue as arbitrum-rpc.mdx). Should be `/v2/orchestrators/resources/reference/technical/contract-addresses`. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present (lines 26-48). No human sign-off. |
| Completeness | 10.1-10.5 | PASS | Covers both required tokens (ETH, LPT), acquisition methods (bridges, DEX, CEX), contract address, and cost estimates. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Arbitrum Exchanges | PASS |
| sidebarTitle | Yes | Exchanges & Bridges | PASS |
| description | Yes | 131 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 9 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| ETH on Arbitrum | 5 | 5 | 5 | 5 | 5 | 25 |
| Getting ETH to Arbitrum | 5 | 5 | 5 | 5 | 5 | 25 |
| LPT on Arbitrum | 5 | 5 | 5 | 5 | 5 | 25 |
| Acquiring LPT | 5 | 5 | 5 | 5 | 5 | 25 |
| LPT Contract Address (Arbitrum One) | 5 | 5 | 5 | 5 | 5 | 25 |
| How Much Do You Need? | 4 | 5 | 5 | 5 | 4 | 23 |
| See Also | EXEMPT | -- | -- | -- | -- | EXEMPT |

## Verdict: NEEDS WORK
Key issues: Missing `complexity` and `lifecycleStage`, `status: review`, broken link to x-contract-addresses, LPT contract address and bridge service availability should be verified.
