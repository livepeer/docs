# Review: v2/home/about-livepeer/ecosystem.mdx

| Field | Value |
|---|---|
| Page | `v2/home/about-livepeer/ecosystem.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

Organisational structure page covering Livepeer Inc, Foundation, DAO, and SPEs. Very long and detailed with extensive Accordion sections. Contains orphaned prose fragments, typos, and massive commented-out mermaid/HTML blocks. The page does too many jobs -- it overlaps significantly with community/governance-and-foundation.mdx.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Livepeer Organisational Structure | OK |
| sidebarTitle | Yes | Ecosystem | OK |
| description | Yes | Good | OK |
| PageType | Yes | concept | CASE: should be `pageType` |
| keywords | Yes | Array(7) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| purpose | Yes | concept | OK |

**Issues:** `PageType` wrong casing.

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | MIXED -- "decentralized" (line 217), "decentralised" (line 70, 374) |
| Spelling | FAIL -- "Livpeer" (line 217), "communitcates" (line 198) |
| No em-dashes | PASS |
| Entity-led | PASS |

## Heading Score (Cat 3)

| # | Heading | Compliant |
|---|---|---|
| 1 | Livepeer Values | OK |
| 2 | Entities | OK |
| 3 | Livepeer Inc. | OK |
| 4 | Livepeer Foundation | OK |
| 5 | Livepeer DAO | OK |
| 6 | Special Purpose Entities (SPEs) | OK |

Score: 6/6 -- PASS

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | FAIL -- overlaps with governance-and-foundation page |
| No dead ends | WARN -- no clear CTA at bottom |
| Min 2KB | PASS -- very long |
| No TODO | WARN -- `{/* NEEDS A CTA HERE */}` (line 31) |
| Orphaned prose | FAIL -- line 91-92 is a dangling sentence fragment: "each and how they interrelate..." |
| Commented-out | FAIL -- ~200 lines of dead mermaid diagrams and HTML (lines 372-531) |

## Veracity (Cat 6)

| Check | Result |
|---|---|
| Claims citable | PASS -- well-sourced with forum links |
| Embedded iframe | WARN -- imgflip.com embed (line 300) -- external dependency |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |
| Orphan | NO |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `PageType` wrong casing |
| 2 | Voice | P0 | Typos: "Livpeer" (line 217), "communitcates" (line 198) |
| 3 | Voice | P1 | Mixed US/UK English |
| 4 | Structure | P1 | Orphaned prose fragment at line 91-92 |
| 5 | Structure | P1 | ~200 lines of dead commented-out code |
| 6 | Structure | P2 | Missing CTA (acknowledged in comment) |
| 7 | Structure | P2 | Overlaps with community governance page |
| 8 | Veracity | P3 | External imgflip iframe dependency |
