# Review: v2/about/resources/reference/technical-roadmap.mdx

## Summary

| Category | Score | Notes |
|---|---|---|
| 1. Frontmatter | 5/10 | Has title, description, pageType, keywords, OG image, audience, purpose (as `Purpose`). `Purpose` capitalised. Missing: sidebarTitle, complexity, lifecycleStage. `Keywords` capitalised |
| 2. Voice | 3/10 | Two bare URLs with no context. "Use these roadmap posts to review" is the only prose |
| 3. Headings | 0/10 | No headings |
| 4. Structure | 1/10 | 795 bytes — well below 2KB minimum. Just two bare URLs. No context, no analysis, no framing |
| 5. Layout | 1/10 | No components. Bare URLs not even wrapped in links or cards |
| 6. Veracity | 5/10 | Blog URLs appear valid but need freshness check |
| 7. Nav | 8/10 | Registered in docs.json (duplicate registration) |
| 8. Links | 3/10 | Bare URLs. Not formatted as proper links |
| 9. Process | 3/10 | lastVerified: 2026-03-17. `Purpose` capitalised. No status field |
| 10. Completeness | 1/10 | Effectively empty. Two URLs with no context |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Technical Roadmap | OK |
| sidebarTitle | No | — | MISSING |
| description | Yes | Review the current Livepeer roadmap... | OK |
| pageType | Yes | reference | OK |
| audience | Yes | general | OK |
| purpose | Yes (as `Purpose`) | reference | CASING |
| complexity | No | — | MISSING |
| lifecycleStage | No | — | MISSING |
| keywords | Yes (as `Keywords`) | Array (includes "https", "introducing") | LOW QUALITY keywords |
| og:image | Yes | fallback.png | WARN |

## Verdict

**FAIL** — 795 bytes. Two bare URLs with no context. Below 2KB minimum. Needs full rewrite with proper link cards, context, and roadmap framing. Keywords include URL fragments ("https", "introducing") which are meaningless for SEO.
