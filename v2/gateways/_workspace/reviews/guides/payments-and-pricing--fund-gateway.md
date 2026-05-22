# Review: fund-gateway.mdx

**Path:** `v2/gateways/guides/payments-and-pricing/fund-gateway.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | PASS - "Fund The Livepeer Gateway" |
| 1.2 description | FAIL - typo "Arbritrum" (should be "Arbitrum") |
| 1.3 pageType | PASS - lowercase `pageType` |
| 1.4 audience | PASS - gateway |
| 1.5 status | PASS - current |
| 1.6 lastVerified | PASS - 2026-03-17 |
| 1.7 keywords | PASS |
| 1.8 og:image | PASS with full OG metadata |
| 2.1 UK English | FAIL - "finalize" (line 99) is US spelling; should be "finalise" |
| 2.2 no banned words | PASS |
| 2.12 entity-led voice | FAIL - second-person instructional throughout ("you need", "your Gateway") |
| 2.13 no em-dashes | PASS |
| 3.1 heading score | 15/25 - raw H1 duplicates frontmatter title |
| 4.1 one job | PASS - funding a gateway |
| 4.11 no TODO in body | WARN - TODO block lines 29-33 |
| 4.13 min 2KB | PASS - 10.3KB |
| 5.1 correct template | FAIL - legacy v1 style; no CustomDivider, ExternalContent component, iframe embed |
| 5.15 Related Pages | FAIL - no Related Pages section |
| 5.16 CTA | FAIL - no next steps |
| 7.1 in docs.json | PASS - line 2660 (redirect target) |
| 8.6 links resolve | WARN - iframe embed (line 146) fragile |

## Additional Issues

- Typos: "Arbritrum" (description), "Arbitrium's" (line 139), "it's own" x2 (lines 49-50)
- Uses ExternalContent component (lines 100, 115) - may not render
- Uses Callout with custom colour instead of standard Note/Tip/Warning
- Port 7935 for CLI (lines 183, 189, 195) vs standard 5935

## Frontmatter

| Field | Value | Valid |
|-------|-------|-------|
| title | Fund The Livepeer Gateway | PASS |
| description | ...Arbritrum's L2 Network... | FAIL - typo |
| pageType | guide | PASS |
| audience | gateway | PASS |
| status | current | WARN - overlaps with funding-guide.mdx |
| lastVerified | 2026-03-17 | PASS |

## Heading Score

| Criterion | Score |
|-----------|-------|
| Concise | 15/25 - H1 duplicate |
| No questions | 25/25 |
| Technical/specific | 18/25 |
| **Total** | **15/25** |

## Verdict

**FAIL - needs rewrite or consolidation.** Legacy v1 page with multiple typos, US spelling, second-person voice, duplicate H1, no Related Pages, iframe embed, and non-standard components. funding-guide.mdx covers the same topic in v2 style. Recommend redirecting this page to funding-guide.mdx.
