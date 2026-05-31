# Section Summary: developers/resources/

**Section:** `v2/developers/resources/`
**Subsections:** glossary (root), reference/ (4 pages), compendium/ (3 pages), knowledge-hub/ (3 pages)
**Pages:** 11
**Reviewed:** 2026-04-08

## Verdicts

| Page | Subsection | Verdict | Key Issue |
|------|------------|---------|-----------|
| glossary.mdx | root | PASS WITH ISSUES | lastVerified format, status=draft |
| apis.mdx | reference | PASS | "Keywords" capitalised |
| pricing-rate-limits.mdx | reference | PASS | "Keywords" capitalised |
| pytrickle.mdx | reference | PASS | "Keywords" capitalised |
| sdks.mdx | reference | PASS | "Keywords" capitalised |
| resources.mdx | compendium | PASS WITH ISSUES | "PageType" + "Keywords" capitalised, missing status |
| developer-help.mdx | compendium | PASS | "PageType" capitalised |
| example-applications.mdx | compendium | NEEDS WORK | Missing 8+ frontmatter fields, 4 outdated examples, no components |
| awesome-livepeer.mdx | knowledge-hub | NEEDS WORK | Near-stub, broken embed, "PageType" capitalised |
| deepwiki.mdx | knowledge-hub | NEEDS WORK | Voice violations, no headings, "PageType" capitalised |
| wiki.mdx | knowledge-hub | FAIL | Broken link (says GitHub, goes to DeepWiki), near-stub |

## Subsection Health

| Subsection | Health | Notes |
|------------|--------|-------|
| reference/ | STRONG | All 4 pages pass. Best developer reference pages in the repo |
| compendium/ | MIXED | developer-help and resources are strong; example-applications is outdated |
| knowledge-hub/ | WEAK | All 3 pages have issues. wiki.mdx has a broken link. awesome-livepeer and deepwiki are near-stubs |
| glossary | GOOD | Mature content, minor frontmatter fixes needed |

## Section Patterns

1. **Capitalised frontmatter keys** -- "Keywords" appears in all reference/ pages. "PageType" appears in all compendium/ and knowledge-hub/ pages. Systematic issue
2. **reference/ is exemplary** -- apis, sdks, pytrickle, pricing-rate-limits are among the best pages in the developers tab
3. **knowledge-hub/ needs a rethink** -- three pages that were designed to embed external content but the embeds are broken/unavailable
4. **Missing status fields** -- resources.mdx, all knowledge-hub/ pages lack status

## Recommendation

1. Fix capitalised frontmatter keys across all 11 pages (batch operation)
2. Rewrite example-applications.mdx with modern examples and full frontmatter
3. Decide knowledge-hub/ strategy: either populate the pages with curated content or consolidate into one page
4. Fix wiki.mdx broken link immediately (P0)
5. Voice-pass deepwiki.mdx to remove subjective language

## Stats

| Metric | Value |
|--------|-------|
| Pages audited | 11 |
| PASS | 5 |
| PASS WITH ISSUES | 2 |
| NEEDS WORK | 3 |
| FAIL | 1 |
