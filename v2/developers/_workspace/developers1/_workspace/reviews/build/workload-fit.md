# Review: Is My AI Workload a Good Fit for Livepeer?

**File:** `v2/developers/build/workload-fit.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PARTIAL PASS | Has title, sidebarTitle (missing), description, pageType=concept, purpose=choose, keywords, OG image. `Audience` capitalised. Missing: complexity, lifecycleStage. OG image is SVG (should be PNG) |
| VOICE | 2.1-2.22 | PASS | UK English ("optimised"). No banned words. Direct, fact-led |
| HEADINGS | 3.1-3.10 | WARN | Title is a question heading ("Is My AI Workload..."). "What about batch and file-based workloads?" is also a question |
| STRUCTURE | 4.1-4.16 | PASS | Clear decision framework. Decision tree + matrix + examples + Next steps. 8KB+ |
| LAYOUT | 5.1-5.16 | PASS | DynamicTable, Accordion, code diagrams, CardGroup |
| VERACITY | 6.1-6.12 | PASS | Claims grounded in protocol architecture. No unverified numbers |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Links resolve |
| PROCESS | 9.1-9.6 | WARN | No explicit status field. lastVerified=2026-03-17 |
| COMPLETENESS | 10.1-10.5 | PASS | Comprehensive decision framework with anti-patterns |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | Is My AI Workload a Good Fit for Livepeer? | WARN — question in title |
| sidebarTitle | N | — | MISSING (rendered from title) |
| description | Y | Decision framework for... (162 chars) | FAIL — exceeds 160 chars |
| pageType | Y | concept | OK |
| purpose | Y | choose | OK |
| audience | Y | developer | WARN — key capitalised as `Audience` |
| keywords | Y | 10 items | OK |
| OG image | Y | LivepeerDocsLogo.svg | FAIL — SVG not valid OG image format |
| complexity | N | — | MISSING |
| lifecycleStage | N | — | MISSING |

## Verdict

**NEEDS WORK** — Content quality is excellent. Issues: question in title, description exceeds 160 chars, OG image is SVG (must be PNG), `Audience` key capitalised, no sidebarTitle, no status field.
