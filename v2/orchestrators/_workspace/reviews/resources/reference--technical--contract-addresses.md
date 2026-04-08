# Review: Canonical Contract Addresses
**File:** v2/orchestrators/resources/reference/technical/contract-addresses.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. `Keywords` capitalised (should be `keywords`). `PageType` capitalised (should be `pageType`). `audience: general` -- valid but may be more specific as `orchestrator` given placement in orchestrators section. |
| Voice | 2.1-2.22 | PASS | Description is entity-led, factual. No banned words. UK English. |
| Headings | 3.1-3.10 | N/A | No headings in page body -- content is entirely imported from composable. |
| Structure | 4.1-4.16 | PASS | Page correctly delegates to shared composable (`/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`). Single import, single render. This is the correct pattern for canonical shared content. |
| Layout | 5.1-5.16 | PASS | Uses composable import pattern. Content rendering delegated to the composable component. |
| Veracity | 6.1-6.12 | PASS | Claims "automatically updated from the canonical governor-scripts source" and "verified on-chain" in description. Composable pattern ensures single source of truth. |
| Nav | 7.1-7.11 | PASS | In docs.json under Technical Reference group. |
| Links | 8.1-8.6 | PASS | Import path is root-absolute. No inline links in wrapper page. |
| Process | 9.1-9.6 | PASS | No TODO or REVIEW flags. `lastVerified: 2026-03-26` is recent. Page is a thin wrapper -- process concerns live with the composable. |
| Completeness | 10.1-10.5 | PASS | Delegates to comprehensive composable. Description covers scope. SEO/OG metadata is thorough (Twitter cards, full OG). |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Canonical Contract Addresses | PASS |
| sidebarTitle | Yes | Contract Addresses | PASS |
| description | Yes | 218 chars | FAIL -- exceeds 160 char limit |
| pageType | WARN | `PageType` (capital P) | FAIL -- may not be parsed |
| audience | Yes | general | WARN -- consider `orchestrator` for section context |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | WARN | `Keywords` (capital K), 35+ terms | WARN -- capitalisation, keyword count very high |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | PASS (uses fallback -- consider orchestrators OG) |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| (No headings -- composable-rendered content) | -- | -- | -- | -- | -- | N/A |

## Verdict: NEEDS WORK
Key issues: `PageType` and `Keywords` capitalisation may break Mintlify parsing. Description exceeds 160 chars. Missing `complexity` and `lifecycleStage`. OG image uses fallback. `audience: general` may want to be `orchestrator` given section placement.
