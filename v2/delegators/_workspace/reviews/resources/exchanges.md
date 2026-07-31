# Review: v2/delegators/resources/compendium/exchanges.mdx

## Summary

Exchange listing page with static data from CoinGecko. Contains a `<Danger>` block noting it will become a dynamic automation but is currently a static pull. Hardcoded inline styles throughout. Data is from 2025-12-15 -- nearly 4 months stale at review time. Missing `status`, `lastVerified` is old.

## Frontmatter Table

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Y | Exchanges with LPT Listed | OK |
| sidebarTitle | Y | LPT Exchanges | OK |
| description | Y | A list of exchanges... | OK |
| pageType | Y | reference | OK |
| pageVariant | Y | compendium | OK |
| keywords | Y | array | OK |
| og:image | Y | fallback.png | OK |
| audience | Y | delegator | OK |
| lifecycleStage | Y | discover | OK |
| lastVerified | Y | 2026-03-17 | OK |
| purpose | Y | reference | OK |
| status | N | - | MISSING |

**Frontmatter score: 9/10** (missing `status`)

## Heading Score Table

| Criterion | Pass |
|---|---|
| No question headings | PASS |
| No banned heading words | PASS |

**Heading score: 20/20**

## Voice (Cat 2)

- 2.1 UK English: N/A (data table page)
- 2.9 Em dashes: PASS

## Structure (Cat 4)

- 4.1 One job: PASS (list exchanges)
- 4.5 No TODO: FAIL -- the `<Danger>` block is effectively a TODO marker ("will be a dynamic automation")
- 4.8 Min 2KB: PASS
- 4.14 Hardcoded inline styles: FAIL -- extensive inline CSS for table rows, cells, colours. Not using component-based tables

## Layout (Cat 5)

- 5.6 Data imports: FAIL -- all data is hardcoded inline, not imported from a data file
- 5.10 Related Pages / CTA: Likely FAIL (could not read full file, but first 100 lines show no CardGroup)

## Veracity (Cat 6)

- 6.1 Data freshness: FAIL -- "Last Updated: 2025-12-15". Nearly 4 months stale
- 6.5 REVIEW flags: The `<Danger>` block flags this as incomplete

## Nav (Cat 7)

- 7.1 In docs.json: YES

## Verdict

| Category | Score | Notes |
|---|---|---|
| FRONTMATTER | 9/10 | Missing `status` |
| VOICE | PASS | |
| HEADINGS | 20/20 | |
| STRUCTURE | FAIL | Danger/TODO block, hardcoded inline styles |
| LAYOUT | FAIL | Hardcoded data, no data imports, no Related Pages |
| VERACITY | FAIL | Data 4 months stale |
| NAV | PASS | |
| LINKS | PASS | |
| PROCESS | FAIL | Incomplete automation, stale data |
| COMPLETENESS | PARTIAL | Data exists but is stale |

**Overall: NEEDS SIGNIFICANT WORK** -- Stale data, hardcoded inline styles, TODO/Danger block, no data imports. Needs either the planned automation or a manual refresh + component-based table.
