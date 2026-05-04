# Review: economic-model.mdx

**Page**: `v2/about/network/economic-model.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `lastVerified`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `community` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "Learn about the Livepeer network economic model." marketing-ish |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Decomposed: `fee flow`, `fee`, `flow`, `learn` |
| 2. Voice | 2.3 | Banned phrases | FAIL | "How actors are incentivised" — verbose; "ie." (line 29) used informally |
| 2. Voice | 2.5 | Opening order | FAIL | "This page describes the economic model..." (banned `This page` self-reference) |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Loose run-on prose; outline still embedded ("8. **Fee Flow**") |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page describes" |
| 2. Voice | 2.15 | Description self-ref | FAIL | "Learn about" pattern |
| 2. Voice | 2.21 | First-use defined | FAIL | "treasury", "slashing" undefined |
| 3. Headings | 3.1 | Heading score | N/A | No H2 |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Network Economic Model" |
| 4. Structure | 4.1 | One job | FAIL | Stub-meets-outline; not a real page |
| 4. Structure | 4.11 | Discord test | FAIL | Not shippable |
| 4. Structure | 4.12 | Page size | FAIL | ~1KB — under 2KB minimum |
| 4. Structure | 4.13 | No TODO comments | FAIL | Numbered outline ("8. **Fee Flow**") still in body |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.16 | Related Pages | FAIL | None |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Outline content belongs in `_workspace/drafts/` |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | Not registered |
| 7. Navigation | 7.10 | No stubs in published nav | N/A | Not in nav |
| 8. Links | 8.6 | No TODO/Coming Soon | FAIL | Numbered outline IS the TODO |
| 9. Process | 9.1 | Human sign-off | FAIL | None |
| 10. Completeness | 10.1 | Question has page | FAIL | Economic model question unanswered substantively |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Network Economic Model | OK |
| sidebarTitle | Yes | Network Economic Model | OK |
| description | Yes | Learn about... | WEAK |
| pageType | No | — | MISSING |
| audience | Yes | community | OK |
| purpose | No | — | MISSING |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | DECOMPOSED |
| og:image (block) | Yes | full | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | No | — | MISSING |

## Cross-page duplication

- **NEAR-DUPLICATE INTENT**: `v2/about/network2/fee-flow.mdx` covers the same pricing/payment/revenue-sharing material.
- **OVERLAP**: `v2/about/protocol/mechanisms.mdx` covers staking/rewards/slashing.
- **OVERLAP**: `v2/about/protocol/governance-and-treasury.mdx` covers treasury usage.
- **OVERLAP**: `v2/about/network/marketplace-model.mdx` "Payments and settlement" section covers fee flow.

## Summary

**Verdict**: REWRITE REQUIRED (currently a stub-with-outline)
**Critical**:
1. Stub <2KB containing TODO outline
2. Missing pageType, purpose, lastVerified, veracityStatus
3. Opens with banned "This page describes"
4. Description is marketing-ish ("Learn about...")
5. Not in docs.json
