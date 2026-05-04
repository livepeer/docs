# Review: supply-side.mdx

**Page**: `v2/about/network/supply-side.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "Learn about the Livepeer supply side." — placeholder |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Decomposed: `supply side`, `supply`, `side`, `learn` |
| 2. Voice | 2.5 | Opening order | FAIL | "This page describes:" banned self-ref |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | 7 lines of bullet outline |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page describes" |
| 2. Voice | 2.15 | Description self-ref | FAIL | "Learn about" |
| 2. Voice | 2.16 | Deprecated terms absent | INFO | "Pools" — neither "Pool worker" (deprecated) nor "Pool node" (current); ambiguous |
| 3. Headings | 3.1 | Heading score | N/A | No H2 |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Supply Side" |
| 4. Structure | 4.1 | One job | FAIL | Stub |
| 4. Structure | 4.11 | Discord test | FAIL | Not shippable |
| 4. Structure | 4.12 | Page size | FAIL | ~500 bytes — far below 2KB minimum |
| 4. Structure | 4.13 | No TODO comments | FAIL | Numbered outline ("5. **Supply Side**") in body |
| 5. Layout | 5.1 | Correct template | FAIL | None |
| 5. Layout | 5.16 | Related Pages | FAIL | None |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Outline content belongs in `_workspace/drafts/` |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | Not registered |
| 8. Links | 8.6 | No TODO/Coming Soon | FAIL | Outline IS the TODO |
| 9. Process | 9.1 | Human sign-off | FAIL | None |
| 10. Completeness | 10.1 | Question has page | FAIL | Supply-side question unanswered |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Supply Side | OK |
| sidebarTitle | Yes | Supply Side | OK |
| description | Yes | Learn about the Livepeer supply side. | WEAK |
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

- **NEAR-DUPLICATE**: `v2/about/network2/supply-side.mdx` is the same outline-stub format.
- **TOPIC OVERLAP**: `v2/about/network/livepeer-actors/orchestrators.mdx` covers GPU operators, performance metrics.
- **TOPIC OVERLAP**: `v2/about/network/architecture.mdx` "Orchestrator node" + "Worker layer" sections cover hardware/deployment.

## Summary

**Verdict**: REWRITE REQUIRED (stub)
**Critical**:
1. Stub <500 bytes with TODO outline as body content
2. Missing pageType, purpose, lastVerified, veracityStatus
3. Description marketing-ish ("Learn about...")
4. Not in docs.json
5. Outline content belongs in `_workspace/drafts/`
