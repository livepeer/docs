# Tab Summary: Community

**Tab:** `v2/community/`
**Sections:** 5 (root, community, connect, contribute, resources)
**Total pages audited:** 18
**Reviewed:** 2026-04-08

## Section Verdicts

| Section | Pages | PASS | PASS w/Issues | NEEDS WORK | FAIL | Excluded |
|---------|-------|------|---------------|------------|------|----------|
| root/ | 3 | 1 | 1 | 0 | 0 | 1 (auto-gen) |
| community/ | 5 | 2 | 1 | 2 | 0 | 0 |
| connect/ | 3 | 2 | 0 | 0 | 1 | 0 |
| contribute/ | 3 | 0 | 0 | 0 | 3 | 0 |
| resources/ | 4 | 0 | 3 | 0 | 1 | 0 |

## Aggregate Stats

| Metric | Count | % |
|--------|-------|---|
| PASS | 5 | 29% |
| PASS WITH ISSUES | 5 | 29% |
| NEEDS WORK | 2 | 12% |
| FAIL | 5 | 29% |
| Excluded | 1 | -- |
| **Total scored** | **17** | |

## Cross-Section Patterns

1. **Capitalised frontmatter keys** -- "Keywords", "Purpose", "PageType" appear across contribute/ and resources/. Systematic fix needed
2. **Stub pages** -- 4 stubs across contribute/ (3) and resources/ (1). All registered in nav but deliver no content
3. **Strong reference pages** -- glossary.mdx and awesome-livepeer.mdx are well-structured with rich component usage
4. **Missing OG images** -- guides.mdx missing OG image entirely
5. **Duplicate coverage** -- dashboards.mdx overlaps with awesome-livepeer.mdx content
6. **contribute/ is entirely empty** -- all 3 pages are stubs. Section needs a content decision

## Priority Actions

| Priority | Action | Section |
|----------|--------|---------|
| P0 | Populate or remove all 3 contribute/ stubs | contribute/ |
| P0 | Merge or populate dashboards.mdx | resources/ |
| P1 | Fix capitalised frontmatter keys across tab | All |
| P1 | Fix news-and-socials.mdx stub | connect/ |
| P2 | Upgrade glossary status from draft | resources/ |
| P2 | Fix trending-topics.mdx and roadmap.mdx | community/ |
| P3 | Add missing OG images | resources/ |

## Section Detail References

- root/: See `root/index.md`, `root/portal.md`, `root/faq.md`
- community/: See `community/*.md` (5 reviews)
- connect/: See `connect/*.md` (3 reviews)
- contribute/: See `contribute/SECTION-SUMMARY.md`
- resources/: See `resources/SECTION-SUMMARY.md`
