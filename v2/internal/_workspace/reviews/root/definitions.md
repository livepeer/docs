# Review: definitions.mdx

| Field | Value |
|---|---|
| **File** | `v2/internal/definitions.mdx` |
| **Reviewer** | Claude (automated audit) |
| **Date** | 2026-04-08 |
| **Verdict** | FAIL -- stub page with no content |

## Summary

This page has frontmatter and two H2 headings ("Livepeer General Definitions" and "Livepeer Documentation Definitions") but zero actual content under either. The body lists four bare words (Protocol, Network, Product, Ecosystem) with no definitions.

## Frontmatter Table

| Field | Present | Value | Conformant |
|---|---|---|---|
| title | Yes | General Livepeer Definitions | OK |
| sidebarTitle | Yes | Definitions | OK |
| description | Yes | Protocol Network Product Ecosystem | WEAK -- not a sentence |
| pageType | No | -- | MISSING |
| purpose | No | -- | MISSING |
| keywords | Yes | 4 items | OK |
| og:image | Yes | fallback.png | OK |
| og:image:alt | Yes | Present | OK |
| audience | No | -- | MISSING |
| lastVerified | No | -- | MISSING |

## Heading Score Table

| Criterion | Score | Notes |
|---|---|---|
| H1 present | No | No H1 (H2s only) |
| Banned heading words | None | -- |
| Heading hierarchy | WARN | Starts at H2 |

## Category Findings

| Cat | Status | Notes |
|---|---|---|
| 1 FRONTMATTER | FAIL | Missing pageType, purpose, audience, lastVerified; description is not a sentence |
| 2 VOICE | N/A | No content to evaluate |
| 3 HEADINGS | FAIL | No H1; score < 20 |
| 4 STRUCTURE | FAIL | Stub page; well under 2KB; no useful content |
| 5 LAYOUT | FAIL | No template applied; no Related Pages or CTA |
| 6 VERACITY | N/A | No claims to verify |
| 7 NAV | WARN | Not individually in docs.json but linked from internal-overview |
| 8 LINKS | PASS | No links to break |
| 9 PROCESS | FAIL | No sign-off |
| 10 COMPLETENESS | FAIL | Page title promises definitions; delivers none |

## Verdict

**FAIL.** Empty stub. Needs either full content population or archival.
