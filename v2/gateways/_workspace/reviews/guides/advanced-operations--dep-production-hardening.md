# Review: dep-production-hardening.mdx

**Path:** `v2/gateways/guides/advanced-operations/dep-production-hardening.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | FAIL - title says "Orchestrator Selection & Tiering" but file is dep-production-hardening; content is a duplicate of the old orchestrator-selection pre-edit version |
| 1.2 description | FAIL - description is for orchestrator selection, not production hardening |
| 1.3 PageType | WARN - `PageType` (capital T) vs standard `pageType` |
| 1.4 audience | PASS - gateway |
| 1.5 status | FAIL - status: current, but this is a deprecated duplicate (dep- prefix) |
| 1.6 lastVerified | PASS - 2026-03-13 |
| 1.7 keywords | FAIL - keywords are orchestrator-selection keywords |
| 1.8 og:image | PASS - fallback.png |
| 2.1 UK English | WARN - "behaviour" used correctly; no US spelling found |
| 2.2 no banned words | PASS |
| 2.12 entity-led voice | FAIL - line 41: "How to take manual control" - imperative/instructional, not entity-led |
| 2.13 no em-dashes | PASS - uses standard hyphens |
| 2.14 no hedging | PASS |
| 2.15 no self-ref | PASS |
| 2.16 no questions in headings | PASS |
| 3.1 heading score | FAIL - headings describe orchestrator selection, not production hardening |
| 3.2 no banned heading patterns | PASS |
| 4.1 one job | FAIL - file is entirely wrong content for its filename |
| 4.11 no TODO in body | FAIL - TODO block at lines 26-39 |
| 4.12 no REVIEW flags | FAIL - 4 REVIEW flags found (lines 105, 138, 192, 255) |
| 4.13 min 2KB | PASS - 16.8KB |
| 5.1 correct template | FAIL - no component imports, uses raw Mermaid JSX instead of code fence |
| 5.15 Related Pages | PASS - CardGroup present |
| 5.16 CTA | PASS |
| 7.1 in docs.json | FAIL - not in docs.json nav |
| 8.6 links resolve | WARN - cannot verify without server |

## Frontmatter

| Field | Value | Valid |
|-------|-------|-------|
| title | Orchestrator Selection & Tiering | FAIL - wrong content |
| sidebarTitle | Orchestrator Selection | FAIL |
| description | Choose the best orchestrators... | FAIL |
| PageType | guide | WARN - casing |
| audience | gateway | PASS |
| purpose | operate | PASS |
| status | current | FAIL - should be deprecated |
| lastVerified | 2026-03-13 | PASS |
| keywords | 8 items | FAIL - wrong topic |
| og:image | fallback.png | PASS |

## Heading Score

Not scored - content is entirely from the wrong topic.

## Verdict

**FAIL - CRITICAL.** This file is a deprecated duplicate of the old (pre-edit) orchestrator-selection.mdx. The filename says "dep-production-hardening" but the entire content is orchestrator selection. The file is not in docs.json nav, which is correct. It should be moved to x-deprecated/ or deleted. The actual production hardening content exists only as a commented-out stub at the bottom of the file (lines 276-361).
