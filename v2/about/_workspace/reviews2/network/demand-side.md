# Review: demand-side.mdx

**Page**: `v2/about/network/demand-side.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `lastVerified`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `community` valid |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "Learn about the Livepeer demand side." — placeholder, marketing-ish |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic + decomposed: `demand side`, `demand`, `side`, `learn` (low intent) |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with "This page describes:" (banned self-reference) |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Page is 7 lines of bullets; not a real page |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page describes" |
| 2. Voice | 2.15 | Description not self-referential | FAIL (description) | "Learn about" is hedge/learner-self-ref pattern |
| 3. Headings | 3.1 | Heading score ≥20/25 | N/A | No H2/H3 |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Demand Side" |
| 4. Structure | 4.1 | One job | FAIL | Stub. No real content |
| 4. Structure | 4.11 | Discord test | FAIL | Not shippable |
| 4. Structure | 4.12 | Page size | FAIL | <500 bytes — far below 2KB minimum (stub) |
| 4. Structure | 4.13 | No TODO comments | FAIL | Body is a numbered TODO outline ("7. **Demand Side**") |
| 5. Layout | 5.1 | Correct template | FAIL | No template; bare bullet outline |
| 5. Layout | 5.16 | Related Pages | FAIL | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Outline content belongs in `_workspace/drafts/`, not live page |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | `v2/about/network/demand-side` not registered (only `network2/demand-side` in nav search context) |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL (would-be) | Below 2KB stub |
| 8. Links | 8.1 | Internal links | N/A | None |
| 8. Links | 8.6 | No TODO/Coming Soon | FAIL | Numbered outline IS the TODO |
| 9. Process | 9.1 | Human sign-off | FAIL | None |
| 10. Completeness | 10.1 | Question has page | FAIL | Question (demand side mechanics) is unanswered |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Demand Side | OK |
| sidebarTitle | Yes | Demand Side | OK |
| description | Yes | Learn about the Livepeer demand side. | WEAK |
| pageType | No | — | MISSING |
| audience | Yes | community | OK |
| purpose | No | — | MISSING |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | LOW QUALITY |
| og:image (block) | Yes | fallback.png + 4 sub-fields | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | No | — | MISSING |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/demand-side.mdx` — same outline-stub format. Both fail the same way.
- **TOPIC OVERLAP**: `v2/about/network/marketplace-model.mdx` "Demand: client workloads" section already covers gateway role / job submission / pricing.
- **TOPIC OVERLAP**: `v2/about/network/livepeer-actors/end-users.mdx` covers builder/end-user demand context.
- **TOPIC OVERLAP**: `v2/about/network/livepeer-actors/gateways.mdx` covers gateway intake/routing.

## Summary

**Verdict**: REWRITE REQUIRED (currently a stub)
**Critical**:
1. Stub page (<500 bytes) with TODO outline as body content
2. Missing pageType, purpose, lastVerified, veracityStatus
3. Description is marketing-ish ("Learn about...")
4. Not in docs.json (orphan candidate)
5. Outline content belongs in `_workspace/drafts/`
