# Review: livepeer-actors/delegators.mdx

**Page**: `v2/about/network/livepeer-actors/delegators.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `lastVerified`, `veracityStatus`. OG block has only `og:image` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL (drift) | `community` set, but page primarily targets `delegator` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, fits |
| 1. Frontmatter | 1.12 | OG block | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | PASS | `delegators`, `lpt`, `staking` intent-aligned |
| 2. Voice | 2.1 | UK English | FAIL | "decentralization" (line 45) — should be `decentralisation` |
| 2. Voice | 2.5 | Opening order | PASS | "Delegators are LPT holders who bond stake..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight bullets |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Delegators are..." |
| 2. Voice | 2.14 | No hedging verbs | FAIL | "Returns depend on..." is a hedge; "can share in" is hedging in value claim |
| 2. Voice | 2.21 | First-use defined | FAIL | `LPT`, `bond`, `commission`, `split` undefined |
| 3. Headings | 3.1 | Heading score | MIXED | "Core Responsibilities" (18), "How Delegators Earn" (22), "Delegator Decision Factors" (22), "Important Tradeoffs" (20 — note `Tradeoffs` not `Trade-offs`) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | None banned |
| 3. Headings | 3.6 | Title well-formed | PASS | "Delegators" |
| 4. Structure | 4.1 | One job | PASS | Delegator orientation |
| 4. Structure | 4.4 | No dead ends | PASS | Has Related Pages |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.10 | Cross-tab links | MEDIUM | Links to `/v2/orchestrators/portal` only — should also link to LPT/Delegators tab |
| 4. Structure | 4.11 | Discord test | MEDIUM | Answers "what is a delegator" but thin on mechanics |
| 4. Structure | 4.12 | Page size | FAIL | ~1.6KB — under 2KB minimum |
| 4. Structure | 4.15 | Trade-offs present | PASS | "Important Tradeoffs" section names risks |
| 5. Layout | 5.1 | Correct template | FAIL | No template applied |
| 5. Layout | 5.7 | No old-schema frontmatter | INFO | No deprecated values, just missing required |
| 5. Layout | 5.16 | Related Pages | PASS | Present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown, not Card/Columns |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "Returns depend on..." vague; not cited |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | `network/livepeer-actors/delegators` not registered (only `network2/livepeer-actors/delegators` line 2205) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No LPT/Delegators tab link |
| 8. Links | 8.1 | Internal links | FAIL | `../../protocol/livepeer-token` exists; `../../protocol/economics` does NOT exist (current files in protocol/: architecture, design, governance-and-treasury, livepeer-token, mechanisms, x-design, x-overview); `/v2/orchestrators/portal` resolves |
| 8. Links | 8.6 | No TODO | PASS | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Delegators | OK |
| sidebarTitle | Yes | Delegators | OK |
| description | Yes | How delegators back orchestrators... | OK |
| pageType | No | — | MISSING |
| audience | Yes | community | DRIFT (should be `delegator`) |
| purpose | No | — | MISSING |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image | Yes | about.png | OK (4 sub-fields missing) |
| veracityStatus | No | — | MISSING |
| lastVerified | No | — | MISSING |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/livepeer-actors/delegators.mdx` registered in nav line 2205 instead of this one.
- **OVERLAP**: `v2/about/network/actors.mdx` "Delegators" subsection + "Role Summary > Delegators" + concepts/actors-and-participants.mdx > Delegators.
- **OVERLAP**: `v2/delegators/*` tab is the operational home — this orientation should graduate there.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Below 2KB minimum (1.6KB)
2. Broken link `../../protocol/economics` (no such file)
3. "decentralization" US spelling (line 45)
4. Missing pageType, purpose, lastVerified, veracityStatus
5. `audience: community` should be `delegator` (page is delegator-targeted)
6. Not registered in docs.json (network2 sibling is)
7. No graduation link to Delegators tab
