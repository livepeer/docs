# Review: v2/developers/resources/reference/pricing-rate-limits.mdx

**File:** `v2/developers/resources/reference/pricing-rate-limits.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | Has title, sidebarTitle, description, Keywords (capitalised!), OG image (developer-specific), pageType, purpose, audience, status, lastVerified |
| VOICE | 2.1-2.22 | PASS | Fact-led. UK English ("programmes" at line 115). No banned words. Uses "--" (double hyphen) once at line 81 instead of an en-dash but acceptable in technical context |
| HEADINGS | 3.1-3.10 | PASS | 5 H2 headings: Studio pricing tiers, AI inference pricing, Rate limits, Streaming credits, Related pages. Score: 20/25 |
| STRUCTURE | 4.1-4.16 | PASS | Well over 2KB. Single job (pricing/rate limits reference). Clear sections |
| LAYOUT | 5.1-5.16 | PASS | Uses StyledTable, CenteredContainer, CustomDivider. Has Related Pages with 2 cards. Tip callout at top |
| VERACITY | 6.1-6.12 | WARN | Pricing data says "as of April 2026". Cost estimation uses "approximately" correctly. The $0.019/MP rate is marked illustrative |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Related pages use /v2/ absolute paths |
| PROCESS | 9.1-9.6 | PASS | status=current, lastVerified=2026-04-05 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers tiers, AI pricing model, rate limits with headers, credits |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Pricing and rate limits | OK |
| sidebarTitle | Y | Pricing & Rate Limits | OK |
| description | Y | Good | OK |
| Keywords | Y | 5 items | WARN -- key capitalised |
| OG image | Y | developers.png | OK |
| pageType | Y | reference | OK |
| purpose | Y | reference | OK |
| audience | Y | developer | OK |
| status | Y | current | OK |
| lastVerified | Y | 2026-04-05 | OK |

## Heading Score Table

| Check | Score |
|-------|-------|
| Total H2 headings | 5 |
| Banned heading patterns | None |
| Score | 20/25 |

## Issues

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | FRONTMATTER | P1 | "Keywords" capitalised -- should be "keywords" |

## Verdict

**PASS** -- Clean reference page with accurate pricing data, proper caveats for variable costs, and good rate limit documentation including response headers. Only the capitalised "Keywords" key needs fixing.
