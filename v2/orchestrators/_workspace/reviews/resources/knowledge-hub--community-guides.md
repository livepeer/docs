# Review: Community Guides & Tutorials
**File:** v2/orchestrators/resources/knowledge-hub/community-guides.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | PASS | UK English throughout. Entity-led intro ("Community-maintained guides..."). No banned words. No em-dashes. No self-referential language. |
| Headings | 3.1-3.10 | PASS | All headings concise and descriptive. |
| Structure | 4.1-4.16 | PASS | Clear single purpose (curated external resources). Well-organised into 8 topical sections. Exceeds 2KB. Discord/Forum section provides community escalation path. |
| Layout | 5.1-5.16 | PASS | StyledTable throughout. CustomDivider between sections. CardGroup "See Also" at bottom. Note component for contribution CTA. |
| Veracity | 6.1-6.12 | WARN | External links (speedybird.xyz, livepeer.cloud, titan node, etc.) not verified as live. Community content may be outdated (e.g., Forum 2021 bash script). |
| Nav | 7.1-7.11 | PASS | In docs.json under Knowledge Hub group. Redirects configured. |
| Links | 8.1-8.6 | WARN | Line 134: `/v1/orchestrators/guides/gateway-introspection` links to v1 docs -- may not resolve if v1 is removed. Line 167: `/v1/delegators/guides/yield-calculation` same v1 concern. Line 293: Card href `/v2/orchestrators/resources/community-pools` links to the stub page reviewed above. Line 293: Card href `/v2/orchestrators/resources/technical/cli-flags` -- path mismatch, should be `/v2/orchestrators/resources/reference/technical/cli-flags`. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present (lines 29-51). No human sign-off. |
| Completeness | 10.1-10.5 | PASS | Comprehensive coverage: setup, AI, monitoring, economics, pools, video content, developer resources, and community channels. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Community Guides & Tutorials | PASS |
| sidebarTitle | Yes | Community Guides | PASS |
| description | Yes | 157 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 17 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Setup & Installation | 5 | 5 | 5 | 5 | 5 | 25 |
| AI Workloads | 5 | 5 | 5 | 5 | 5 | 25 |
| Monitoring & Operations | 5 | 5 | 5 | 5 | 5 | 25 |
| Economics & Strategy | 5 | 5 | 5 | 5 | 5 | 25 |
| Pool Operators & Workers | 5 | 5 | 5 | 5 | 5 | 25 |
| Video & Educational Content | 5 | 5 | 5 | 5 | 5 | 25 |
| Developer & Research Resources | 5 | 5 | 5 | 5 | 5 | 25 |
| Discord & Forum | 5 | 5 | 5 | 5 | 5 | 25 |
| See Also | EXEMPT | -- | -- | -- | -- | EXEMPT |

## Verdict: NEEDS WORK
Key issues: Missing `complexity` and `lifecycleStage`, `status: review`, potential broken links to v1 paths and incorrect Card href for cli-flags, community-pools link goes to stub page, unverified external URLs.
