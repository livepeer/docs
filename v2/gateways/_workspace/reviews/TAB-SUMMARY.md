# Tab Summary: v2/gateways/

**Audit date:** 2026-04-08
**Reviewer:** Claude (automated audit)
**Sections audited:** 7 (root, concepts, quickstart, setup, custom, guides, resources)

---

## Section-by-Section Results

| Section | Pages | Pass | Cond. Pass | Needs Work | Rewrite/Fail | Grade |
|---------|-------|------|------------|------------|--------------|-------|
| root/ | 3 | 0 | 0 | 3 | 0 | NEEDS WORK |
| concepts/ | 4 | 0 | 4 | 0 | 0 | STRONG |
| quickstart/ | 11 | 0 | 0 | 7 | 4 | WEAK |
| setup/ | 20 | 7 | 0 | 9 | 4 | MIXED |
| custom/ | 24 | 3 | 7 | 6 | 8 | WEAK |
| guides/ | 41 | 35 | 0 | 3 | 3 | STRONG |
| resources/ | 56 | 34 | 1 | 3 | 18 | GOOD |
| **Total** | **159** | **79** | **12** | **31** | **37** | -- |

---

## Overall Statistics

| Metric | Count | % |
|--------|-------|---|
| Total pages audited | 159 | 100% |
| PASS or equivalent | 91 | 57.2% |
| NEEDS WORK | 31 | 19.5% |
| REWRITE / FAIL | 37 | 23.3% |
| In docs.json nav | ~110 | ~69% |
| Orphan / not in nav | ~49 | ~31% |
| Duplicate files to archive | ~14 | ~9% |

---

## Cross-Section Systematic Issues

### 1. `PageType` vs `pageType` Casing (ALL sections)

Nearly every section uses `PageType` (capital P) instead of the canonical `pageType`. This is the single most pervasive frontmatter issue across the entire tab. Affects an estimated 80+ pages. Any tooling expecting the lowercase key will ignore these values.

**Recommendation:** Single bulk find-replace across all v2/gateways/ MDX files.

### 2. Missing `complexity` and `lifecycleStage` (ALL sections)

No page in any section has these two frontmatter fields. They appear to be required by the schema but have never been populated.

**Recommendation:** Defer until a bulk population strategy is agreed. This is a tab-wide gap, not a per-page fix.

### 3. Orphan / Duplicate Files (~49 pages)

Orphans fall into 3 categories:
- **Superseded files** (dep-* prefix or old paths): ~14 files across setup/, guides/, resources/ that have been replaced by canonical versions but not archived
- **View/composable files** (custom/): ~24 files that are included by parent pages and are correctly not in nav (these are not true orphans)
- **Missing from nav but should be included**: ~4 CLI-HTTP endpoints, ~3 tutorial/reference pages

**Recommendation:** Archive the ~14 superseded files to x-deprecated/. Register the ~4 useful CLI-HTTP endpoints in nav. The custom/ view files are working as designed.

### 4. Visible TODO / Danger / REVIEW Markers (~15 pages)

Multiple pages across quickstart/, setup/, custom/, and guides/ contain visible `<Danger>`, `<Warning>`, or REVIEW markers that render to production users. The worst offenders are in quickstart/ (5 visible Danger banners) and custom/ (4 visible Danger fix-me markers).

**Recommendation:** P0 -- remove or resolve all visible markers before production. Source-only TODO comments (MDX comments) are lower priority.

### 5. v1 Legacy Content (~6 pages)

Pages carrying `<Danger> From v1</Danger>` banners exist in resources/reference/go-livepeer/ (3 pages) and guides/ (3 deprecated files). These use banned terms ("video miners", "Broadcaster", "mining cryptocurrencies") and contain stale technical details.

**Recommendation:** The go-livepeer pages need a v2 content pass. The guides/ deprecated files need archival.

### 6. Description Quality (~25 pages)

Two patterns of poor descriptions:
- **Placeholder descriptions** on OpenAPI wrapper pages: "Bond for Livepeer gateways." (no useful information)
- **Voice-violating descriptions**: self-referential, question-led, or imperative-led descriptions on portal/navigator pages

**Recommendation:** Batch-rewrite descriptions for OpenAPI wrappers (templated fix). Individual rewrites for portal pages.

### 7. Empty / Stub Pages (~8 pages)

Primarily in custom/ and quickstart/: macSupport.mdx, linuxOnChainTab.mdx, windowsOffChainTab.mdx, windowsOnChainTab.mdx, transcoding.mdx, configuration-reference.mdx, and others. These render as blank pages when users navigate to them.

**Recommendation:** Populate with content or remove from the tab until content is ready.

---

## Section Deep-Dives

### root/ (Grade: NEEDS WORK)
3 pages (index, portal, navigator). All need frontmatter fixes. Portal and navigator are well-designed but have voice violations in descriptions and open TODOs. Navigator is best-in-class structure. The issues are minor but universal.

### concepts/ (Grade: STRONG)
4 pages. All have excellent content quality. Architecture page is the strongest in the entire tab. Only issues are `PageType` casing and missing `complexity`/`lifecycleStage` -- both systematic, not content issues.

### quickstart/ (Grade: WEAK)
11 pages. 4 of 6 view tabs are completely empty (users see blank pages). Docker tabs have visible `<Danger>` fix-me markers. macSupport is a WIP placeholder. The quickstart journey is broken for Linux on-chain, Windows off-chain, and Windows on-chain paths.

### setup/ (Grade: MIXED)
20 pages. The 7 nav-registered spine pages (guide through monitor) form a coherent journey and are mostly production-quality. The 13 sub-pages/orphans include 4 that need archival (superseded), 3 triple-duplicates (marketplace content), and several with active redirects. The new consolidated pages (prepare, install, configure, connect, verify, monitor) are well-structured.

### custom/ (Grade: WEAK)
24 view/composable files. None are in docs.json directly (correct -- they are included by parent pages). Quality varies dramatically: 3 excellent verify/connect views at the top, 8 empty stubs at the bottom. 7 files contain commented-out content. 4 have visible TODO/Danger markers. The newer setup views are consistently strong; the older quickstart views are the weakest files in the entire tab.

### guides/ (Grade: STRONG)
41 pages across 6 subdirectories. 35 of 41 pass (85%). The strongest section by pass rate. Advanced operations, monitoring, and tutorials subsections are well-written with consistent component usage. Main issues: 3 deprecated duplicates (dep-* prefix) not yet archived, 2 older-style pages (fund-gateway, pricing-configuration) not updated to current template, and some content overlap between sections.

### resources/ (Grade: GOOD)
56 pages. 35 of 38 nav-registered pages pass. The API reference subsection is well-organised with consistent OpenAPI wrapper patterns. Top-level reference pages are production-quality. Main issues: 18 orphan/duplicate files (cleanup task), 3 v1-era go-livepeer pages needing terminology updates, and 4 CLI-HTTP endpoints excluded from nav.

---

## Priority Actions (Tab-Wide)

### P0 -- Immediate (blocks production quality)

| # | Action | Section | Pages |
|---|--------|---------|-------|
| 1 | Populate or disable 4 empty quickstart view tabs | quickstart, custom | 4 |
| 2 | Remove all visible Danger/TODO markers from rendered pages | quickstart, custom | ~8 |
| 3 | Archive ~14 superseded duplicate files to x-deprecated/ | setup, guides, resources | ~14 |

### P1 -- Short Term (quality and accuracy)

| # | Action | Section | Pages |
|---|--------|---------|-------|
| 4 | Fix v1 legacy terminology in go-livepeer reference pages | resources | 3 |
| 5 | Fill TBD sections in hardware-requirements.mdx | resources | 1 |
| 6 | Register 4 CLI-HTTP endpoints in docs.json or archive | resources | 4 |
| 7 | Consolidate 3 triple-duplicate marketplace pages | setup | 3 |
| 8 | Fix typos across all sections | all | ~10 |
| 9 | Promote glossary from `status: draft` to `status: current` | resources | 1 |
| 10 | Rewrite voice-violating descriptions on portal pages | root | 2 |

### P2 -- Medium Term (consistency)

| # | Action | Section | Pages |
|---|--------|---------|-------|
| 11 | Bulk fix `PageType` to `pageType` across all files | all | ~80 |
| 12 | Standardise frontmatter on custom/ view files | custom | ~24 |
| 13 | Improve placeholder descriptions on OpenAPI wrappers | resources | ~12 |
| 14 | Add Related Pages/CTA to pages that lack them | setup, resources | ~8 |
| 15 | Replace markdown tables with StyledTable where required | guides | ~4 |

### P3 -- Low Priority (completeness)

| # | Action | Section | Pages |
|---|--------|---------|-------|
| 16 | Add `complexity` and `lifecycleStage` to all frontmatter | all | ~159 |
| 17 | Clean TODO comment blocks from source | all | ~30 |
| 18 | Add `reviewed: true` after human review pass | all | all |

---

## Conclusion

The gateways tab has **159 pages** across 7 sections. The strongest sections are **concepts** (exemplary content, frontmatter-only issues) and **guides** (85% pass rate, consistent patterns). The weakest sections are **quickstart** (empty tabs, visible errors) and **custom** (stubs, commented-out content, dramatic quality variance).

The three most impactful improvements would be:
1. **Populate or disable the empty quickstart tabs** -- users currently see blank pages for Linux on-chain, Windows off-chain, and Windows on-chain paths
2. **Archive the ~14 superseded duplicate files** -- reduces maintenance burden and eliminates stale-content risk
3. **Bulk fix `PageType` casing** -- single find-replace that fixes the most pervasive frontmatter issue

Content quality on the nav-registered pages is generally strong. The majority of failures are structural (orphans, duplicates, empty stubs) rather than content quality issues.
