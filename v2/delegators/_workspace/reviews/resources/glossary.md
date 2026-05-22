# Review: v2/delegators/resources/glossary.mdx

## Summary

Large, well-structured glossary page with SearchTable component, category badges, and full accordion definitions. Machine-readable companion JSON reference. Good data import pattern. Very thorough -- 80+ terms. The accordion definitions section duplicates the SearchTable data, raising maintenance risk.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | LPT Token Glossary | OK |
| sidebarTitle | Y | Glossary | OK |
| description | Y | Key terms for the Livepeer Token... | OK |
| keywords | Y | array | OK (lowercase) |
| og:image | Y | fallback.png | OK |
| pageType | Y | reference | OK |
| pageVariant | Y | compendium | OK |
| audience | Y | delegator | OK |
| purpose | Y | reference | OK |
| status | Y | current | OK |
| lifecycleStage | Y | operate | OK |
| lastVerified | Y | 2026-04-06 | OK |

**Frontmatter score: 10/10**

## Heading Score Table

| Criterion | Pass |
|---|---|
| No question headings | PASS |
| No banned heading words | PASS |

**Heading score: 20/20**

## Voice (Cat 2)

- 2.1 UK English: PASS
- 2.9 Em dashes: PASS

## Structure (Cat 4)

- 4.1 One job: PASS (glossary reference)
- 4.5 No TODO: PASS
- 4.8 Min 2KB: PASS (very large)
- 4.14 Duplication risk: WARN -- accordion definitions duplicate SearchTable data. If one is updated without the other, they drift

## Layout (Cat 5)

- 5.1 Correct template: PASS (reference/compendium)
- 5.6 Data imports: PASS (SearchTable, DynamicTable, glossaryBadges)

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 10/10 | |
| VOICE | PASS | |
| HEADINGS | 20/20 | |
| STRUCTURE | PASS | WARN: dual-source duplication risk |
| LAYOUT | PASS | |
| VERACITY | PASS | |
| NAV | PASS | |
| LINKS | PASS | |
| PROCESS | PASS | |
| COMPLETENESS | PASS | |

**Overall: PASS** -- Note the dual-data-source maintenance risk between SearchTable itemsList and Accordion definitions.
