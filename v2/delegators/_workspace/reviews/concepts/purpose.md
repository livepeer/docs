# Review: v2/delegators/concepts/purpose.mdx

## Summary

Deep explanatory page covering LPT purpose, supply/inflation, treasury, and rewards. Very thorough but excessively long for a "purpose" page -- it covers tokenomics, treasury, and rewards distribution in detail that overlaps with dedicated pages. Contains voice issues and an empty heading.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Livepeer Token Purpose | OK |
| sidebarTitle | Y | Purpose | OK |
| description | Y | Core purpose of LPT... | OK |
| PageType | Y | concept | WARN: capitalised `PageType` -- should be `pageType` |
| keywords | Y | array | OK |
| og:image | Y | fallback.png | OK |
| audience | Y | delegator | OK |
| lifecycleStage | Y | evaluate | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | explain | OK |

**Frontmatter score: 9/10** (`PageType` capitalisation)

## Heading Score Table

| Criterion | Pass |
|---|---|
| No question headings | PASS |
| Empty heading `###` at line 77 | FAIL -- empty heading |
| No banned heading words | PASS |

**Heading score: 17/20**

## Voice (Cat 2)

- 2.1 UK English: FAIL -- multiple instances: "supply-demand" with en-dash character, "long-term" with en-dash. Lines 34, 38, 42, 43, 47, 48, 53, 55 contain en-dash characters (U+2010/U+2013) which violate the no-em-dash rule
- 2.3 No banned words: PASS
- 2.9 Em dashes / en dashes: FAIL -- multiple en-dash characters throughout (e.g. "supply\u2011demand", "long\u2011term", "token\u2011burning")
- 2.12 Entity-led: PASS
- 2.15 No hedging: PASS
- Note: "Reward leakage and fee switch" italicised subsection heading is unusual formatting

## Structure (Cat 4)

- 4.1 One job: FAIL -- page tries to do too much (purpose + tokenomics + treasury + rewards + future proposals). Significant overlap with tokenomics.mdx, delegation-economics.mdx, and treasury pages
- 4.5 No TODO: PASS
- 4.8 Min 2KB: PASS (very long)
- 4.10 No dead ends: FAIL -- no Related Pages or CTA section
- 4.15 Empty heading at line 77: FAIL

## Layout (Cat 5)

- 5.1 Correct template: PARTIAL -- concept page but reads more like an essay
- 5.10 Related Pages / CTA: FAIL -- completely absent

## Veracity (Cat 6)

- 6.1 Claims citable: MOSTLY -- "25.8 million tokens" genesis supply stated without citation (other pages say 10 million). Discrepancy needs resolution
- 6.5 REVIEW flags: PASS

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Links (Cat 8)

- 8.1 No internal links at all: FAIL -- zero cross-references to other delegator pages

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 9/10 | `PageType` capitalisation |
| VOICE | FAIL | Multiple en-dash characters throughout |
| HEADINGS | 17/20 | Empty heading at line 77 |
| STRUCTURE | FAIL | Scope too broad, overlaps with 3+ other pages |
| LAYOUT | FAIL | No Related Pages/CTA |
| VERACITY | WARN | Genesis supply discrepancy (25.8M vs 10M on glossary) |
| NAV | PASS | |
| LINKS | FAIL | Zero internal cross-references |
| PROCESS | PASS | |
| COMPLETENESS | PASS (content exists) | But content belongs on other pages |

**Overall: NEEDS SIGNIFICANT WORK** -- En-dash cleanup, empty heading removal, scope reduction (much content belongs on tokenomics/treasury/economics pages), add Related Pages, resolve genesis supply discrepancy, add cross-references.
