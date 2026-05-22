# Review: livepeer-actors/gateways.mdx

**Page**: `v2/about/network/livepeer-actors/gateways.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `lastVerified`, `veracityStatus`. OG only `og:image` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL (drift) | `community` set; page targets `gateway` operators primarily |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first |
| 1. Frontmatter | 1.12 | OG block | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Intent-aligned |
| 2. Voice | 2.1 | UK English | PASS | No US spellings |
| 2. Voice | 2.5 | Opening order | PASS | "Gateways are the demand-side coordination nodes..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight |
| 2. Voice | 2.13 | Entity-led voice | PASS | Subject-led |
| 2. Voice | 2.21 | First-use defined | FAIL | "GPU compute" first use; "capability matching" undefined |
| 3. Headings | 3.1 | Heading score | MIXED | "Core Responsibilities" (18), "What Gateways Do Not Do" (24 — strong), "Why Gateways Matter" (20), "Typical Flow" (16 — weak) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | None banned |
| 3. Headings | 3.6 | Title well-formed | PASS | "Gateways" |
| 4. Structure | 4.1 | One job | PASS | Gateway role orientation |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages present |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "What Gateways Do Not Do" section explicit |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None to Gateways tab (`/v2/gateways/*`) |
| 4. Structure | 4.12 | Page size | FAIL | ~1.5KB — under 2KB |
| 4. Structure | 4.15 | Trade-offs present | MEDIUM | Implicit (in "Do Not Do") but no explicit failure modes |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.16 | Related Pages | PASS | Present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown |
| 6. Veracity | 6.1 | Every claim citable | N/A | Conceptual content |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | `network/livepeer-actors/gateways` not registered (only `network2/livepeer-actors/gateways` line 2207) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No Gateways tab link |
| 8. Links | 8.1 | Internal links | FAIL | `../job-lifecycle` does NOT exist (file renamed to `job-pipelines.mdx`); `../demand-side` resolves; `/v2/orchestrators/portal` resolves |
| 8. Links | 8.6 | No TODO | PASS | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Gateways | OK |
| sidebarTitle | Yes | Gateways | OK |
| description | Yes | How gateway operators provide intake, routing... | OK |
| pageType | No | — | MISSING |
| audience | Yes | community | DRIFT (should be `gateway`) |
| purpose | No | — | MISSING |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image | Yes | about.png | OK (4 sub-fields missing) |
| veracityStatus | No | — | MISSING |
| lastVerified | No | — | MISSING |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/livepeer-actors/gateways.mdx` registered in nav line 2207.
- **OVERLAP**: `v2/about/network/actors.mdx` "Gateway Operators" subsection + concepts/actors-and-participants.mdx > Gateways.
- **OVERLAP**: `v2/gateways/*` tab is the operational home.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Below 2KB minimum (1.5KB)
2. Broken link `../job-lifecycle` (file renamed to `job-pipelines.mdx`)
3. Missing pageType, purpose, lastVerified, veracityStatus
4. `audience: community` should be `gateway`
5. Not registered in docs.json
6. No graduation link to Gateways tab
