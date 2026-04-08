# Review: v2/community/resources/glossary.mdx

**File:** `v2/community/resources/glossary.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle, description, keywords, OG image, audience, pageType, pageVariant, purpose, status, lastVerified. Missing: sourceOfTruth. lastVerified format "2026-03" not ISO date |
| VOICE | 2.1-2.22 | PASS | UK English throughout (programmes, organisations, licence). Definitions are fact-led. No banned words detected |
| HEADINGS | 3.1-3.10 | PASS | 10 section headings: Livepeer Protocol Terms, Livepeer Roles Terms, Livepeer Entities Terms, Livepeer Tools and SDKs Terms, Livepeer Products Terms, Economic Terms, Operational and Governance Terms, Monitoring Terms, Web3 Terms, AI Terms, Technical Terms, Video Terms. Score: 22/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Dual structure: searchable table + accordion deep definitions. Clear organisation by category |
| LAYOUT | 5.1-5.16 | PASS | Uses SearchTable, DynamicTable, LazyLoad, CustomDivider, Accordion, CardGroup -- all approved components. Data imports from badges.jsx. Footer has Related Pages cards |
| VERACITY | 6.1-6.12 | PASS | Definitions are accurate. External links provided for third-party terms. No REVIEW flags |
| NAV | 7.1-7.11 | PASS | Registered in docs.json. Redirect from compendium/glossary exists |
| LINKS | 8.1-8.6 | WARN | Footer card links to "/v2/resources/glossary" -- should be "/v2/community/resources/glossary" or cross-tab equivalent. Card to "/v2/community/faq" -- verify exists |
| PROCESS | 9.1-9.6 | WARN | status=draft, lastVerified=2026-03 (incomplete date format). Content is mature enough for "provisional" |
| COMPLETENESS | 10.1-10.5 | PASS | 80+ terms across 12 categories. Comprehensive for community audience. Dual-layer (search + accordion) pattern |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Community Glossary | OK |
| sidebarTitle | Y | Glossary | OK |
| description | Y | Good, UK English | OK |
| keywords | Y | 3 items | WARN -- thin |
| audience | Y | everyone | OK |
| pageType | Y | reference | OK |
| pageVariant | Y | compendium | OK |
| purpose | Y | reference | OK |
| status | Y | draft | WARN -- content is production-quality |
| lastVerified | Y | 2026-03 | WARN -- not ISO date (should be 2026-03-XX) |
| OG image | Y | fallback.png | OK |
| sourceOfTruth | N | -- | MISSING |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2 headings | 12 |
| Banned heading patterns | None |
| Heading hierarchy | Correct (H2 only at section level) |
| Score | 22/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P2 | lastVerified uses "2026-03" not a full ISO date |
| 2 | FRONTMATTER | P2 | status=draft is inaccurate -- content is mature |
| 3 | FRONTMATTER | P3 | Missing sourceOfTruth |
| 4 | FRONTMATTER | P3 | Only 3 keywords -- thin for a glossary |
| 5 | LINKS | P2 | Footer card href "/v2/resources/glossary" may not resolve (missing community segment) |
| 6 | VOICE | P3 | Two duplicate Delegation entries (lines 89-90 and 1039-1057) with slightly different definitions |

## Verdict

**PASS WITH ISSUES** -- High-quality glossary page with comprehensive terms, good component usage, and proper UK English voice. Frontmatter needs lastVerified date fix, status upgrade from draft to provisional, and a link audit on the footer cards.
