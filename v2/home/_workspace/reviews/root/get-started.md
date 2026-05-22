# Review: v2/home/get-started.mdx

| Field | Value |
|---|---|
| Page | `v2/home/get-started.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **NEEDS WORK** |

## Summary

User journey routing page segmented by persona (new user, developer, GPU provider, user/creator, LPT holder, company, researcher). Well-structured with DisplayCard + LinkArrow pattern. Includes a mermaid journey map. Not registered in docs.json -- orphan.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Get Started with Livepeer | OK |
| sidebarTitle | Yes | Get Started | OK |
| description | Yes | A guide to getting started... | OK |
| audience | Yes | everyone | OK |
| purpose | Yes | tutorial | OK |
| keywords | Yes | Array(6) | OK |
| og:image | Yes | en/home.png | OK |
| pageType | No | -- | MISSING |
| lastVerified | No | -- | MISSING |

**Issues:** Missing pageType and lastVerified.

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS |
| No em-dashes | PASS |
| No banned words | PASS |
| Heading punctuation | WARN -- "I'm a company:" (line 115) has colon |

## Heading Score (Cat 3)

| # | Heading | Compliant |
|---|---|---|
| 1 | I'm new to Livepeer | WARN -- informal/first-person |
| 2 | I'm a developer | WARN -- informal |
| 3 | I'm a GPU provider | WARN -- informal |
| 4 | I'm a user/creator | WARN -- informal |
| 5 | I'm an LPT holder | WARN -- informal |
| 6 | I'm a company: | WARN -- colon |
| 7 | I'm a researcher | WARN -- informal |
| 8 | Journey Map | OK |

Note: The informal "I'm a..." headings are a deliberate persona-based navigation pattern. Acceptable for this page type but inconsistent with heading standards elsewhere.

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- persona routing |
| No dead ends | PASS -- all sections link out |
| Min 2KB | PASS |
| No TODO | PASS |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | NO -- ORPHAN PAGE |
| Orphan | YES |

## Links (Cat 8)

Multiple relative links (./get-started/stream-video, ../solutions/daydream/overview, etc.) need verification. mailto:hello@livepeer.org links present.

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P2 | Missing pageType and lastVerified |
| 2 | Nav | P1 | Not registered in docs.json -- orphan |
| 3 | Links | P3 | Multiple relative links need verification |
