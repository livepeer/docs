# Review: Community Orchestrator Pools
**File:** v2/orchestrators/resources/knowledge-hub/community-pools.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | FAIL | Line 51: "A page for pool operators to outline their pools" -- self-referential ("A page for"). Line 53: "Uses an automation to pull in data from a google sheet" -- implementation detail exposed to reader, not entity-led. |
| Headings | 3.1-3.10 | N/A | No headings present in content body. |
| Structure | 4.1-4.16 | FAIL | Page is a stub/placeholder. Single Card component with placeholder text "Pool Name" / "Pool Description" / `href="#"`. Under 2KB content (excluding frontmatter/TODO). No actual pool data. No meaningful content for the reader. |
| Layout | 5.1-5.16 | FAIL | No StyledTable, no CustomDivider, no data imports. Placeholder Card with dead `href="#"` link. Missing Related Pages/CTA. Mentions Google Sheet automation that does not exist. |
| Veracity | 6.1-6.12 | FAIL | Claims automation pulls data from Google Sheet -- no evidence this automation exists or is configured. |
| Nav | 7.1-7.11 | PASS | In docs.json under Knowledge Hub group. Redirects configured. |
| Links | 8.1-8.6 | FAIL | Line 59: `href="#"` is a dead/placeholder link. |
| Process | 9.1-9.6 | FAIL | `status: review`. No human sign-off. TODO block present. Page is functionally empty. |
| Completeness | 10.1-10.5 | FAIL | Zero pool data. Zero actionable content. Reader lands on a page with one placeholder card. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Community Orchestrator Pools | PASS |
| sidebarTitle | Yes | Community Pools | PASS |
| description | Yes | 93 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 5 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| (No headings) | -- | -- | -- | -- | -- | N/A |

## Verdict: REWRITE REQUIRED
Key issues: Page is a non-functional stub. No actual pool data, placeholder card with dead link, self-referential copy, claims non-existent automation. Either populate with real data or remove from navigation until content exists.
