# Review: design.mdx

**Page**: `v2/about/network/design.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `keywords`'s alignment, `veracityStatus`. OG fields incomplete check |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` is a deprecated 12-type value (should be `concept` with `pageVariant: overview`) |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: overview` not in canonical 15-value set; closest is `orient` |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: general` deprecated → `community` |
| 1. Frontmatter | 1.6 | complexity | PASS | `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "An overview of the Livepeer network and its components." vague |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Decomposed: `network`, `overview` |
| 2. Voice | 2.5 | Opening order | FAIL | "Overview page:" then "This page explains how..." — banned self-reference |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page explains" |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster Node" (line 41), "Broadcasters" alongside Gateway (line 31) |
| 2. Voice | 2.18 | Spell check | FAIL | `LivpeerServer` (line 48) typo for `LivepeerServer` |
| 2. Voice | 2.21 | First-use defined | FAIL | `LivepeerServer`, `BroadcastSessionsManager`, `RemoteAIWorkerManager`, `AISessionManager`, `RemoteTranscoderManager` undefined |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Network Components" (16), "Node Types" (18), "Core Components" (15) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | Title is "Livepeer Network Overview" (avoid `Overview`) |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Livepeer Network Overview" includes weak `Overview` |
| 3. Headings | 3.7 | Expert editorial | FAIL | "Network Components", "Core Components" generic |
| 4. Structure | 4.1 | One job | FAIL | Mixed: orientation + technical reference (LivepeerNode, RTMP/HTTP details) |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.8 | No content duplication | FAIL | Node Types overlap with `architecture.mdx`, `network2/technical-architecture.mdx`, `network2/overview.mdx` |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None |
| 4. Structure | 4.11 | Discord test | FAIL | Page ends mid-bullet ("Broadcast Sessions Manager:" with no value) |
| 4. Structure | 4.12 | Page size | MEDIUM | ~2KB — at minimum |
| 4. Structure | 4.13 | No TODO comments | FAIL | "Broadcast Sessions Manager:" empty bullet acts as TODO |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `pageType: overview`, `purpose: overview`, `audience: general` |
| 5. Layout | 5.16 | Related Pages | FAIL | None |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Component class names appear unverified, no REVIEW flag |
| 6. Veracity | 6.1 | Every claim citable | FAIL | go-livepeer struct names not cited |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | `v2/about/network/design` in nav lines 2153, 2163 (registered twice) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None |
| 8. Links | 8.1 | Internal links | N/A | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Network Overview | Weak (`Overview`) |
| sidebarTitle | Yes | Network Design | OK |
| description | Yes | An overview of the Livepeer network... | WEAK |
| pageType | Yes | overview | DEPRECATED (12-type) |
| audience | Yes | general | DEPRECATED |
| purpose | Yes | overview | INVALID (not in 15-set) |
| complexity | Yes | beginner | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | DECOMPOSED |
| og:image (block) | Yes | full | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Cross-page duplication

- **DUPLICATE NAV ENTRY**: `v2/about/network/design` listed twice in docs.json (lines 2153 + 2163) — drift bug.
- **OVERLAP**: `v2/about/network2/overview.mdx` — same job (network overview).
- **OVERLAP**: `v2/about/network2/technical-architecture.mdx` covers Node Types in more detail.
- **OVERLAP**: `v2/about/network/architecture.mdx` covers stack layers.

## Summary

**Verdict**: REWRITE REQUIRED
**Critical**:
1. `pageType: overview` and `purpose: overview` not in canonical schemas
2. Page ends mid-bullet ("Broadcast Sessions Manager:" empty) — incomplete
3. `LivpeerServer` typo (line 48)
4. Uses "Broadcaster Node" (deprecated)
5. Duplicate nav registration in docs.json
6. Description is generic ("An overview of...")
