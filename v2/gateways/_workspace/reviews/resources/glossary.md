# Review: glossary.mdx

**Path:** `v2/gateways/resources/glossary.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Large, well-structured glossary page using SearchTable component with data imports and lazy loading. Strong frontmatter, good component usage, comprehensive term coverage. Minor voice issues with banned domain terms in glossary definitions. Status is `draft` which may be intentional but blocks production readiness.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields present. `status: draft` - confirm if intentional. `pageVariant: compendium` is non-standard enum. |
| 2 | VOICE | 8/10 | UK English consistent. Uses "cryptocurrency" in ETH/Signer definitions (banned term per domain rules - use specific token names). "crypto-wallet" in glossary body. No em-dashes. No hedging. |
| 3 | HEADINGS | 7/10 | Only 5 headings total for a 59KB page. Heading structure is shallow - most content is in SearchTable/Accordion, which is acceptable for this page type but limits scannability. |
| 4 | STRUCTURE | 9/10 | Single purpose (glossary reference), single audience (gateway). No dead ends - links to related pages. Well above 2KB minimum. TODO comment block is in MDX comment (not rendered). |
| 5 | LAYOUT | 9/10 | Correct template for reference/compendium. Uses data imports (badges.jsx). SearchTable + LazyLoad + Accordion. Machine-readable companion noted. No Related Pages section at bottom. |
| 6 | VERACITY | 8/10 | Term definitions are accurate. No unsourced numerical claims. No REVIEW flags. Companion JSON noted for AI indexing. |
| 7 | NAV | 10/10 | In docs.json nav. Not orphaned. Not a stub. |
| 8 | LINKS | 9/10 | Internal links use correct paths. Machine-readable JSON link present. No TODO/TBD in rendered content. |
| 9 | PROCESS | 7/10 | `status: draft` - no human sign-off indicator. `lastVerified: 2026-03` (month only, no day). |
| 10 | COMPLETENESS | 9/10 | Comprehensive term coverage. Categories cover all gateway domains. Journey from search to definition is complete. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway Glossary | OK |
| sidebarTitle | Yes | Glossary | OK |
| description | Yes | Key terms for Livepeer gateway operators... | OK |
| PageType | Yes | reference | OK (note: capitalisation inconsistent with other pages using `pageType`) |
| audience | Yes | gateway | OK |
| purpose | Yes | reference | OK |
| status | Yes | draft | Should this be `current`? |
| lastVerified | Yes | 2026-03 | Missing day - should be ISO date |
| keywords | Yes | 4 items | OK |
| og:image | Yes | fallback.png | OK |

## Heading Score

| Criterion | Pass |
|-----------|------|
| H1 from title (not in body) | Yes |
| No duplicate headings | Yes |
| No questions in headings | Yes |
| Logical hierarchy | Yes |
| Heading score >= 20/25 | No - shallow hierarchy, but acceptable for component-driven page |

## Findings

1. **VOICE-F1**: "cryptocurrency" used in ETH and Signer definitions - domain rules say never use "crypto" generically
2. **VOICE-F2**: "crypto-wallet" in on-chain mode context section
3. **FM-F1**: `status: draft` may be blocking production gates
4. **FM-F2**: `PageType` capitalised differently from other pages (`pageType`)
5. **FM-F3**: `lastVerified` missing day component
6. **LAYOUT-F1**: No Related Pages or CTA section at bottom of page
7. **STRUCTURE-F1**: TODO comment in MDX comment block (line 24-33) - not rendered but present

## Verdict

**CONDITIONAL PASS** - Production-ready content with minor voice fixes needed. Confirm `status: draft` is intentional or promote to `current`.
