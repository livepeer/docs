# Tab Summary: Developers

**Tab:** `v2/developers/`
**Sections:** 7 (root, concepts, get-started, guides, build, resources)
**Total pages reviewed:** 47
**Reviewed:** 2026-04-08

## Section Verdicts

| Section | Pages | PASS | PASS w/Notes | NEEDS WORK | FAIL |
|---------|-------|------|--------------|------------|------|
| root/ | 3 | 1 | 1 | 1 | 0 |
| concepts/ | 5 | 2 | 1 | 2 | 0 |
| get-started/ | 6 | 3 | 0 | 1 | 2 |
| guides/ | 17 | 14 | 2 | 0 | 0 |*
| build/ | 5 | 1 | 0 | 4 | 0 |
| resources/ | 11 | 5 | 2 | 3 | 1 |

*Includes guides/ai/, guides/video/, guides/tutorials/, guides/opportunities/ subgroups and hub pages.

## Aggregate Stats

| Metric | Count | % |
|--------|-------|---|
| PASS | 26 | 55% |
| PASS WITH NOTES/ISSUES | 6 | 13% |
| NEEDS WORK | 11 | 23% |
| FAIL | 3 | 6% |
| Excluded | 1 (auto-gen index) | -- |
| **Total scored** | **46** | |

## Cross-Section Patterns

1. **Capitalised frontmatter keys** -- "Keywords", "PageType", "Purpose", "Audience" appear across nearly every section. This is the single most common issue in the tab. A batch fix would resolve ~30 instances
2. **resources/reference/ is the strongest subsection** -- apis, sdks, pytrickle, pricing-rate-limits are best-in-class reference pages
3. **guides/ is the strongest section overall** -- 14 of 17 pages pass cleanly
4. **build/ has the most NEEDS WORK** -- 4 of 5 pages have unresolved REVIEW flags blocking publication
5. **knowledge-hub/ is the weakest subsection** -- 3 pages designed to embed external content but the embeds are broken/unavailable. wiki.mdx has a P0 broken link
6. **Missing complexity and lifecycleStage** -- Nearly every page is missing these two frontmatter fields. Low priority but systematic
7. **REVIEW flags in draft pages** -- Multiple build/ and concepts/ pages have inline REVIEW comments that may render visibly in Mintlify

## Priority Actions

| Priority | Action | Section |
|----------|--------|---------|
| P0 | Fix wiki.mdx broken link (says GitHub, goes to DeepWiki) | resources/knowledge-hub/ |
| P0 | Resolve REVIEW flags in build/ pages before publishing | build/ |
| P0 | Rewrite ai-quickstart.mdx and transcoding-quickstart.mdx | get-started/ |
| P1 | Batch fix capitalised frontmatter keys across all sections | All |
| P1 | Rewrite example-applications.mdx with modern examples | resources/compendium/ |
| P1 | Decide knowledge-hub/ strategy (populate or consolidate) | resources/knowledge-hub/ |
| P1 | Voice-pass deepwiki.mdx | resources/knowledge-hub/ |
| P2 | Fix portal.mdx broken sentence and voice issues | root/ |
| P2 | Resolve REVIEW flags in concepts/ draft pages | concepts/ |
| P2 | Add missing status fields to ~8 pages | Multiple |
| P3 | Add complexity and lifecycleStage fields | All |

## Section Detail References

- root/: `root/index.md`, `root/portal.md`, `root/navigator.md`
- concepts/: `concepts/*.md` (5 reviews)
- get-started/: `get-started/*.md` (6 reviews)
- guides/: `guides/*.md` (17 reviews)
- build/: `build/*.md` (5 reviews)
- resources/: `resources/SECTION-SUMMARY.md` (11 pages across 4 subsections)
