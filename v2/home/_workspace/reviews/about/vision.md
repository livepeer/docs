# Review: v2/home/about/vision.mdx

| Field | Value |
|---|---|
| Page | `v2/home/about/vision.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Founding story and vision page. Rich content with video, quotes, and quad grid layout. Well-written, entity-led prose. Minor voice and spelling issues.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | Livepeer Story | OK |
| sidebarTitle | Yes | Vision | OK |
| description | Yes | Good | OK |
| Purpose | Yes | concept | CASE: should be lowercase `purpose` |
| pageType | Yes | concept | OK |
| keywords | Yes | Array(11) | OK |
| og:image | Yes | fallback.png | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |

**Issues:** `Purpose` has wrong casing.

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | MIXED -- "decentralized" (line 75), "decentralised" (line 76). Inconsistent |
| No em-dashes | PASS |
| Spelling | FAIL -- "decentalised" (line 70) typo |
| No hedging | PASS |
| Entity-led | PASS |

## Heading Score (Cat 3)

| # | Heading | Compliant |
|---|---|---|
| 1 | Livepeer Vision | OK |
| 2 | Core Mission | OK |

Score: 2/2 -- PASS

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- founder story + vision |
| No dead ends | WARN -- no clear next-step CTA at bottom (commented out) |
| Min 2KB | PASS |
| No TODO | WARN -- `{/* <Danger> Add more current points here */}` (line 134) |
| Commented-out | WARN -- extensive commented blocks (lines 88-101, 136-185) |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES -- `v2/home/about/vision` |
| Orphan | NO |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `Purpose` wrong casing |
| 2 | Voice | P1 | Typo "decentalised" (line 70) |
| 3 | Voice | P1 | Mixed US/UK: "decentralized" vs "decentralised" |
| 4 | Structure | P2 | No bottom CTA (commented out) |
| 5 | Structure | P3 | TODO comment and extensive dead code |
