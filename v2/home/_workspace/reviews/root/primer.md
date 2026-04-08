# Review: v2/home/primer.mdx

| Field | Value |
|---|---|
| Page | `v2/home/primer.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Primer/overview page for Livepeer aimed at all audiences. Contains a mix of good introductory content and several quality issues: emoji usage in body text, US English inconsistencies, broken markdown, stale commented-out code, and a broken relative link.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Livepeer Primer | OK |
| description | Yes | A 10 minute primer... | OK |
| pageType | Yes | tutorial | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| purpose | Yes | tutorial | OK |
| sidebarTitle | Yes | Livepeer Primer | OK |
| keywords | Yes | Array(4) | OK |
| og:image | Yes | /snippets/assets/media/og-images/en/home.png | OK |

**Frontmatter:** Complete and compliant.

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | MIXED -- "decentralized" (line 73) vs "decentralised" (line 77). Must be consistent: use -ised |
| No em-dashes | PASS |
| No banned words | WARN -- "cutting-edge" (line 26) is borderline marketing |
| No self-reference | PASS |
| No hedging | PASS |
| Emojis in body | FAIL -- lines 109-114 use emoji bullets (prohibited in docs) |
| No deprecated terms | WARN -- "crypto" used (line 113, "using crypto-economic incentives") |

## Heading Score (Cat 3)

| # | Heading | Compliant |
|---|---|---|
| 1 | What Is Livepeer? | WARN -- question in heading |
| 2 | Why Livepeer | OK |
| 3 | What you can build on Livepeer | OK |
| 4 | Who uses Livepeer? | WARN -- question in heading |
| 5 | Current Use Cases | OK |
| 6 | Key Features and Benefits | OK |
| 7 | Get Started With Livepeer | OK |

Score: 5/7 compliant. Two question headings violate heading standards.

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- primer/overview |
| No dead ends | PASS -- cards at bottom |
| Discord test | PASS -- community card |
| Min 2KB | PASS |
| No TODO | WARN -- commented `{/* need example media */}` at lines 107, 117 |
| Broken markdown | FAIL -- line 73 ends with `##` (stray heading markers) |
| Commented-out blocks | WARN -- extensive (lines 38-62, 99-104, 126-131, 168-258) |

## Layout (Cat 5)

| Check | Result |
|---|---|
| Correct template | PARTIAL -- no clear template adherence |
| Required sections | PARTIAL -- no Related Pages section |
| Data imports | OK |
| CTA | PASS -- GotoCard + Cards at bottom |

## Veracity (Cat 6)

| Check | Result |
|---|---|
| Claims citable | WARN -- "80% of internet traffic" (line 88) uncited |
| REVIEW flags | NONE |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES -- `v2/home/primer` |
| Orphan | NO |

## Links (Cat 8)

| Link | Resolves |
|---|---|
| /v2/community/community-portal | OK |
| /v2/home/solutions/showcase | OK |
| ../about/livepeer-protocol | WARN -- relative, may not resolve |
| /solutions/portal | WARN -- missing v2 prefix |
| /v2/developers/portal | OK |
| /v2/gateways/portal | OK |
| /v2/orchestrators/portal | OK |

## Process (Cat 9)

| Check | Result |
|---|---|
| Sign-off | No formal sign-off |
| Gates | lastVerified present |

## Completeness (Cat 10)

| Check | Result |
|---|---|
| Journey complete | PASS -- covers what/why/who/how |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Voice | P1 | Mixed US/UK English: "decentralized" vs "decentralised" |
| 2 | Voice | P2 | Emoji bullets in body text (lines 109-114, 150-153) |
| 3 | Headings | P2 | Question marks in headings (lines 68, 116) |
| 4 | Structure | P1 | Broken markdown: `##` at end of line 73 |
| 5 | Structure | P3 | Extensive commented-out code blocks |
| 6 | Veracity | P2 | Uncited claim: "~80% of internet traffic" |
| 7 | Links | P2 | Relative link `../about/livepeer-protocol` may not resolve |
| 8 | Links | P2 | `/solutions/portal` missing v2 prefix |
