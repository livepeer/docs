# Review: livepeer-actors/end-users.mdx

**Page**: `v2/about/network/livepeer-actors/end-users.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `lastVerified`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL (drift) | `community` set; page split between `builder` and end-user — multi-audience without flag (1.14) |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Intent-aligned |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | Page covers Builders AND End Users without inline `<Note>` flag per check 1.14 |
| 2. Voice | 2.1 | UK English | PASS | None failing |
| 2. Voice | 2.5 | Opening order | PASS | "Builders and end users represent the demand..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight |
| 2. Voice | 2.13 | Entity-led voice | PASS | Subject-led |
| 2. Voice | 2.21 | First-use defined | FAIL | "gateway-facing APIs" used without link/definition |
| 3. Headings | 3.1 | Heading score | MIXED | "Builder Responsibilities" (20), "End-User Expectations" (22), "Why This Role Matters" (18) |
| 3. Headings | 3.6 | Title well-formed | PASS | "Builders and End Users" |
| 4. Structure | 4.1 | One job | FAIL | Two audiences, two jobs (builder responsibilities vs end-user expectations) |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages present |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None to Developers tab (where builders graduate) |
| 4. Structure | 4.12 | Page size | FAIL | ~1.4KB — under 2KB minimum |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | Builder/end-user split not labelled inline |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.16 | Related Pages | PASS | Present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown |
| 6. Veracity | 6.1 | Every claim citable | N/A | Mostly value framing |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | `network/livepeer-actors/end-users` not registered (only `network2/livepeer-actors/end-users` line 2206) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No Developers/Solutions tab link |
| 8. Links | 8.1 | Internal links | FAIL | `../overview` does not exist (no `network/overview.mdx`; only `network2/overview.mdx`) |
| 8. Links | 8.6 | No TODO | PASS | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Builders and End Users | OK |
| sidebarTitle | Yes | Builders & End Users | OK |
| description | Yes | How developers, product teams, and users... | OK |
| pageType | No | — | MISSING |
| audience | Yes | community | DRIFT (multi-audience: `builder` + end-user) |
| purpose | No | — | MISSING |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image (block) | Yes | full | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | No | — | MISSING |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/livepeer-actors/end-users.mdx` registered in nav line 2206.
- **OVERLAP**: `v2/about/concepts/actors-and-participants.mdx` covers End-users + Application developers as ecosystem participants.
- **OVERLAP**: `v2/about/network/demand-side.mdx` (stub) covers builder demand framing.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Multi-audience page (Builders + End Users) without inline `<Note>` flag (check 1.14, 4.17)
2. Below 2KB minimum (1.4KB)
3. Broken link `../overview` (no `network/overview.mdx`)
4. Missing pageType, purpose, lastVerified, veracityStatus
5. Not registered in docs.json
6. No cross-tab graduation to Developers tab for builders
