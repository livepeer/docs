# Review: actors.mdx

**Page**: `v2/about/network/actors.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. OG block has only `og:image` (missing alt/type/width/height) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.3 | pageVariant if present | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is deprecated alias. Should be `explain` |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: general` is deprecated. Should be `community` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` valid |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` valid |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, ≤160 chars |
| 1. Frontmatter | 1.12 | OG block complete | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `actors` |
| 2. Voice | 2.1 | UK English | PASS | No US spellings (uses "Optimise") but "specialization" appears (US) |
| 2. Voice | 2.1 | UK English | FAIL | "specialization" (line 84, 96) — should be "specialisation" |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with broken fragment: "This page extends the idea of protocol actos" (typo) followed by orphaned "and performs actions defined by the system." with no subject |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | "Core Actors" is wall-of-text, multi-concept blocks with newlines splitting citation marks (e.g. "rewards\n.") |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcasters" used as Gateway synonym (lines 32, 43) |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses en-dash and hyphens only |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opening fragment has no entity subject |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster" appears multiple times. "Transcoders now refer simply to the GPU instances" deprecated framing |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Mixes "Gateways/Broadcasters/Clients" |
| 2. Voice | 2.18 | Spell check | FAIL | "actos" (line 22) typo for "actors" |
| 2. Voice | 2.21 | First-use defined | FAIL | NVENC/NVDEC, Confluence, TicketBroker, feeShare, rewardShare undefined on first use |
| 3. Headings | 3.1 | Heading score ≥20/25 | FAIL | "Core Actors" 16, "Role Summary" 14, "Actor Pages" 14 (bureaucratic/structural labels) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Overview" in title; "Summary" in "Role Summary" |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Actors Overview" includes weak `Overview` |
| 3. Headings | 3.7 | Expert editorial | FAIL | "Core Actors", "Role Summary", "Actor Pages" are safe labels |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Tries to be overview AND deep-dive into each role; duplicates content from livepeer-actors/* |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | No boundary stated between this and detail pages |
| 4. Structure | 4.8 | No content duplication | FAIL | Core Actors duplicates delegators.mdx, gateways.mdx, orchestrators.mdx and concepts/actors-and-participants.mdx |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only `/v2/orchestrators/portal`. Missing delegators, gateways, developers tabs |
| 4. Structure | 4.11 | Discord test | FAIL | Broken opening, typo, orphan fragments make page unshippable |
| 4. Structure | 4.12 | Page size | PASS | ~3.5KB |
| 4. Structure | 4.15 | Trade-offs present | PASS | "Why Role Separation Matters" implies trade-offs |
| 5. Layout | 5.1 | Correct template | FAIL | No template applied |
| 5. Layout | 5.5 | Info type → component | FAIL | Wall of text where Accordion or Cards would fit |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` deprecated |
| 5. Layout | 5.16 | Related Pages | PASS | Present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown, not Card/Columns |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Multiple unverified claims (Confluence, TicketBroker, NVENC/NVDEC) without REVIEW flags |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Wall-of-text with broken structure should be in `_workspace/drafts/` |
| 6. Veracity | 6.1 | Every claim citable | FAIL | No citations |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None present despite unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | Listed at line 2204 (but inside `network2` actor profile group — misnested) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Only one cross-tab link |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to `./livepeer-actors/*`, `./demand-side`, `./supply-side`, `./job-lifecycle` resolve |
| 8. Links | 8.6 | No TODO/Coming Soon | PASS | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None recorded |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | Unclear where overview ends and detail starts |
| 10. Completeness | 10.5 | Self-containment | FAIL | Duplicates rather than orients |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Actors Overview | Weak (contains `Overview`) |
| sidebarTitle | Yes | Actors | OK |
| description | Yes | Who participates in Livepeer... | OK |
| pageType | Yes | concept | OK |
| audience | Yes | general | DEPRECATED → community |
| purpose | Yes | concept | DEPRECATED ALIAS → explain |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | Generic; weak intent alignment |
| og:image | Yes | about.png | OK |
| og:image:alt | No | — | MISSING |
| og:image:type | No | — | MISSING |
| og:image:width | No | — | MISSING |
| og:image:height | No | — | MISSING |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Core Actors | 3 | 3 | 4 | 3 | 3 | 16 |
| Role Summary | 3 | 2 | 3 | 3 | 3 | 14 |
| Developers And Applications | 4 | 3 | 4 | 4 | 3 | 18 |
| Gateway Operators | 4 | 3 | 4 | 4 | 4 | 19 |
| Orchestrator Operators | 4 | 3 | 4 | 4 | 4 | 19 |
| Delegators | 4 | 3 | 4 | 4 | 5 | 20 |
| Interaction Pattern | 4 | 4 | 4 | 4 | 3 | 19 |
| Actor Pages | 3 | 2 | 3 | 3 | 3 | 14 |
| Why Role Separation Matters | 5 | 4 | 4 | 4 | 3 | 20 |

## Cross-page duplication

- **NEAR-IDENTICAL DUPLICATE**: `v2/about/network2/actors.mdx` is a near-verbatim copy (frontmatter + body identical except missing the typo line "This page extends the idea of protocol actos" at top of network/actors.mdx). docs.json registers `network/actors` but **inside the network2 livepeer-actors group**.
- **OVERLAP**: `v2/about/concepts/actors-and-participants.mdx` is a stub scaffolding the same actor taxonomy (Orchestrators, Gateways, Delegators, End-users, Application developers, Governance participants).
- **OVERLAP**: `v2/about/network/livepeer-actors/{delegators,gateways,orchestrators,end-users}.mdx` duplicate role-specific content.

## Summary

| Category | Pass | Fail | Score |
|---|---|---|---|
| 1. Frontmatter | 4 | 7 | 4/11 |
| 2. Voice | 4 | 9 | 4/13 |
| 3. Headings | 0 | 4 | 0/4 |
| 4. Structure | 2 | 6 | 2/8 |
| 5. Layout | 1 | 6 | 1/7 |
| 6. Veracity | 0 | 3 | 0/3 |
| 7. Navigation | 1 | 1 | 1/2 |
| 8. Links | 2 | 0 | 2/2 |
| 9. Process | 0 | 1 | 0/1 |
| 10. Completeness | 0 | 2 | 0/2 |

**Verdict**: REWRITE REQUIRED
**Critical**:
1. Opens with typo "actos" + orphan fragment "and performs actions defined by the system."
2. Near-verbatim duplicate of `network2/actors.mdx` — pick one, delete the other
3. Deprecated frontmatter (`audience: general`, `purpose: concept`); missing `veracityStatus`
4. Uses "Broadcasters" repeatedly (deprecated term per CLAUDE.md)
5. Wall-of-text Core Actors section duplicates the four `livepeer-actors/*` profile pages
