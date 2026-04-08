# Review: Orchestrator Operator Terms
**File:** v2/orchestrators/resources/operator-terms.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | WARN | Line 47: "These axes are orthogonal - each can be selected independently" -- technical jargon ("orthogonal") may confuse non-native readers but acceptable for orchestrator audience. Line 80: em-dash absent, uses standard dash correctly throughout. |
| Headings | 3.1-3.10 | PASS | Headings are concise, technical, entity-led. |
| Structure | 4.1-4.16 | WARN | TODO block at top (lines 25-38). Multiple REVIEW flags (lines 128, 185, 195, 203, 245). These indicate incomplete review. |
| Layout | 5.1-5.16 | PASS | Uses StyledTable, AccordionGroup with icons, CustomDivider. Badge components for node modes. Cross-refs in comment block. |
| Veracity | 6.1-6.12 | WARN | 5 REVIEW flags requesting human verification: dual mode flags (128), active set size (185), gas cost range (195), fee cut naming (203), warm-per-GPU limit (245). |
| Nav | 7.1-7.11 | PASS | In docs.json at `v2/orchestrators/resources/operator-terms`. Redirect from `/resources/reference/glossary`. |
| Links | 8.1-8.6 | PASS | No broken internal links detected. No TODO/TBD link placeholders. |
| Process | 9.1-9.6 | FAIL | 5 REVIEW flags unresolved. TODO block present. `status: current` but content has unverified claims. |
| Completeness | 10.1-10.5 | PASS | Covers deployment axes, protocol terms, operational terms, economic terms, deprecated terms, and gateway/orchestrator asymmetry. No Related Pages section. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Operator Terms | PASS |
| sidebarTitle | Yes | Operator Terms | PASS |
| description | Yes | 155 chars | PASS |
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
| Deployment | 4 | 5 | 5 | 5 | 5 | 24 |
| Node Mode | 4 | 5 | 5 | 5 | 5 | 24 |
| Dual Mode | 4 | 5 | 5 | 5 | 5 | 24 |
| Deployment Type | 4 | 5 | 5 | 5 | 5 | 24 |
| Protocol Terms | 4 | 5 | 5 | 5 | 5 | 24 |
| Operational Terms | 4 | 5 | 5 | 5 | 5 | 24 |
| Economic Terms | 4 | 5 | 5 | 5 | 5 | 24 |
| Deprecated Terms | 4 | 5 | 5 | 5 | 5 | 24 |
| Operational Mode Asymmetry: Gateways vs Orchestrators | 4 | 5 | 5 | 4 | 5 | 23 |

## Verdict: NEEDS WORK
Key issues: 5 unresolved REVIEW flags requiring human verification, missing `complexity` and `lifecycleStage` frontmatter fields, TODO block still present, no Related Pages section at bottom.
