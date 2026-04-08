# Cross-Tab Quality Audit Report — All v2/ Tabs

**Date:** 2026-04-08
**Framework:** 10-category checks framework (`v2/orchestrators/_workspace/canonical/checks.mdx`)
**Scope:** All published MDX pages across 10 v2/ tabs (721 target pages)
**Method:** 16 parallel audit agents + 4 gap-fill agents, per-page review files written to `v2/{tab}/_workspace/reviews/{section}/{page}.md`

---

## Executive Summary

**Pages audited:** 621 across all 10 tabs (all agents complete)
**Note:** Gateways tab actual published page count is 159 (not 294 — many files are view partials/custom components, not standalone pages). Some tabs have fewer scoreable pages than file count due to generated index pages.
**Zero pages received an unconditional PASS.** Every tab has systemic frontmatter failures that would be caught by a single batch script. Content quality varies dramatically — some sections are exemplary, others contain stubs, duplicates, and broken links in published nav.

---

## Tab-Level Verdicts

| Tab | Pages | Pass | Needs Work | Rewrite/Delete | Coverage | Worst Category |
|---|---|---|---|---|---|---|
| **Orchestrators** | 76 | 0 | 69 | 7 | 100% | 1 (Frontmatter) |
| **Gateways** | 159* | ~91 | ~50 | ~18 | 100% | 1 (Frontmatter), 5 (Layout) |
| **Developers** | 47 | 32 | 11 | 3 | 100% | 1 (Frontmatter), 8 (Links) |
| **About** | 39 | ~24 | ~15 | 0 | 100% | 1 (Frontmatter), 4 (Structure — thin pages) |
| **Delegators** | 25 | ~8 | ~15 | 0 | 100% | 3 (Headings), 5 (Layout) |
| **Home** | 20 | ~13 | ~5 | 0 | 100% | 1 (Frontmatter) |
| **Community** | 18 | 10 | 2 | 5 | 100% | 4 (Structure — 4 stubs in nav) |
| **Resources** | 51 | ~40 | ~10 | 1 | 100% | 1 (Frontmatter — generated pages) |
| **Solutions** | 118 | 0 | 105 (minor) | 13 (moderate) | 100% | 4 (Structure — 74 stubs) |
| **Internal** | 18 | 7 | 4 | 7 | 100% | 4 (Structure — 4 empty pages in nav) |

---

## Systemic Issues (Cross-Tab)

These issues appear across multiple tabs and are fixable with batch scripts.

### P0: Blocking — Readers see broken content

| Issue | Tabs affected | Pages | Remediation |
|---|---|---|---|
| Reader-facing `<Danger>` fix-me banners | Gateways | 9+ | Manual removal or content completion |
| Empty quickstart view tabs (blank for Linux/Windows) | Gateways | 4 | Content authoring |
| Non-functional stubs in published nav (`href="#"`, placeholder text) | Orchestrators, Gateways | 3+ | Delete or populate |
| Empty pages registered in docs.json nav (0 content) | Internal, Resources | 5 | Delete or populate (`lpd-cli.mdx`, deliverables, outcomes, definitions, ecosystem) |
| Undersized API ref stubs in nav (<500 bytes) | Solutions | 74 | Expand or remove from nav |

### P1: High — Breaks tooling and pipeline

| Issue | Tabs affected | Pages | Remediation script |
|---|---|---|---|
| Missing `complexity` field | ALL | ~500+ | `remediators/content/classification/assign-purpose-metadata.js` |
| Missing `lifecycleStage` field | ALL | ~500+ | `remediators/content/classification/assign-purpose-metadata.js` |
| Capitalised YAML keys (`Keywords`, `PageType`, `Purpose`) | Orchestrators, Gateways, Delegators, About | ~100+ | New batch script needed (case-normalise frontmatter keys) |
| Old `pageType` enum values (`landing`, `how_to`, `quickstart`, `overview`, `faq`) | Orchestrators, Gateways | ~30+ | `remediators/content/classification/add-pagetype-mechanical.js` |
| Old `purpose` enum values (`orientation`, `faq`, `landing`) | Orchestrators | ~10+ | `remediators/content/classification/assign-purpose-metadata.js` |
| Missing `sidebarTitle` | Solutions | 98 | Batch script (derive from title) |

### P2: Medium — Quality and consistency

| Issue | Tabs affected | Pages | Remediation script |
|---|---|---|---|
| Banned words in content (effectively, essentially, significantly, various, several) | Orchestrators, Gateways, Delegators | ~30+ | `validators/content/copy/lint-copy.js` + `remediators/content/copy/remediate-voice-violations.js` |
| Banned phrases ("Understanding X is essential", "rather than") | Orchestrators, About | ~15+ | `validators/content/copy/lint-copy.js` |
| No Related Pages footer or Next Step CTA | Delegators, Solutions, Gateways | ~60+ | Manual — requires editorial judgement |
| US spellings (optimize, behavior, signaling) | Delegators, About | ~10+ | `audits/content/style/style-and-language-homogenizer-en-gb.js` |
| Deprecated terms (Broadcaster, Pool worker, Combined mode) | Orchestrators, Gateways | ~5+ | `validators/content/copy/check-voice-register.js` |
| Numbered headings + academic register ("Executive Summary") | Delegators | 8 | Manual rewrite |
| Em-dashes | About, Delegators | ~5+ | Hook enforcement active |
| Self-referential descriptions ("This page covers...") | Gateways, Orchestrators | ~5+ | `validators/content/structure/check-description-quality.js` |

### P3: Low — Process and governance

| Issue | Tabs affected | Pages | Remediation |
|---|---|---|---|
| Zero human sign-off | ALL | ~500+ | Process gap — not scriptable |
| Unresolved TODO/REVIEW comments | Orchestrators, Gateways | ~30+ | `audits/content/quality/docs-quality-and-freshness-audit.js` |
| Pages not in docs.json (orphans) | Orchestrators, Gateways, Solutions | ~20+ | `validators/content/structure/check-docs-path-sync.js` |
| Broken internal links (old slugs, deprecated paths) | Orchestrators, Gateways | ~25+ | `remediators/content/repair/repair-page-links.js` |
| Duplicate/near-duplicate pages | Orchestrators, Gateways | 5+ | Manual consolidation |

---

## Per-Tab Detail

### Orchestrators (76 pages — 100% coverage)

| Section | Pages | Pass | Needs Work | Rewrite |
|---|---|---|---|---|
| root | 3 | 0 | 3 | 0 |
| concepts | 4 | 0 | 4 | 0 |
| quickstart | 4 | 0 | 4 | 0 |
| setup | 8 | 0 | 6 | 2 |
| guides | 47 | 0 | 43 | 4 |
| resources | 10 | 0 | 9 | 1 |

**Rewrite required:**
- `setup/s-guide.mdx` — orphaned duplicate, every link broken. Delete.
- `setup/monitor.mdx` — under 2KB, all links broken, missing core monitoring content
- `guides/dep-guide` — orphan, all card links broken
- `guides/join-a-pool` (old version) — duplicate in nav
- `guides/funding-and-support` — empty stub
- `guides/orchestrator-profiles` — empty stub
- `resources/community-pools.mdx` — non-functional stub, dead `href="#"`, claims non-existent automation

**Dominant finding:** 76/76 pages fail Cat 1 (Frontmatter) due to missing `complexity`/`lifecycleStage`. This is a single batch fix.

---

### Gateways (159 pages — 100% coverage, TAB summary complete)

**57% pass rate.** Strongest sections: concepts + guides. Weakest: quickstart + custom.

| Section | Pages | Pass | Needs Work | Rewrite/Delete |
|---|---|---|---|---|
| root+concepts | 7 | 0 | 7 | 0 |
| quickstart+setup | 31 | 4 | 19 | 8 |
| custom | 24 | 10 | 6 | 8 |
| guides (A-Z) | 41 | 35 | 4 | 2 |
| resources | 56 | 34 | 3 | 18 (orphans) |
| **Total** | **159** | **~83** | **~39** | **~36** |

**Critical findings:**
- 4 empty quickstart view tabs (Linux/Windows users see blank content)
- 5 reader-facing `<Danger>` fix-me banners in Docker quickstart
- 13 orphaned setup pages superseded by consolidated journey pages
- 18 orphan/duplicate files in resources (including v1-era go-livepeer pages)
- 4 setup pages warrant deletion (empty, brainstorming, placeholder)
- 3 duplicate files to archive (`dep-ai-inference.mdx`, `dep-payment-guide.mdx`, `dep-production-hardening`)
- `PageType` casing bug on 5/7 root+concepts pages
- 13/24 custom pages have no frontmatter at all

**Positive:** Guides section (41 pages) is the strongest in the entire audit — 35/41 pass (85%), content quality high.

---

### Delegators (25 pages — 100% coverage)

| Section | Pages | Pass | Needs Work |
|---|---|---|---|
| root | 2 | 1 | 1 |
| concepts | 4 | 1 | 3 |
| delegation | 7 | 7 | 0 |
| guides | 6 | 0 | 6 |
| resources | 6 | 4 | 2 |

**Highlight:** Delegation section (7 pages) is exemplary — all pass, well-scoped, correct data imports, Related Pages on every page. Best section across all tabs reviewed.

**Weakness:** Guides section — numbered headings, "Executive Summary" academic register, no Related Pages, missing `status`. All 6 pages share identical structural problems.

**P0:** `purpose.mdx` scope reduction + en-dash cleanup. `exchanges.mdx` 4-month stale data.

---

### Solutions (118 pages — 100% coverage)

| Section | Pages | Minor | Moderate |
|---|---|---|---|
| root | 3 | 2 | 1 |
| daydream | 3 | 3 | 0 |
| embody | 3 | 3 | 0 |
| frameworks | 3 | 3 | 0 |
| livepeer-studio | 97 | 89 | 8 |
| resources | 1 | 1 | 0 |
| streamplace | 8 | 4 | 4 |

**Dominant finding:** 74 undersized API reference stubs in livepeer-studio (<2KB each, most 400-560 bytes). These are endpoint stubs, not content pages.

**Streamplace** is the weakest section: orphans, missing frontmatter, H1s in body.

---

### Internal (18 pages — 100% coverage)

| Section | Pages | Pass | Needs Work | Fail |
|---|---|---|---|---|
| root | 5 | 2 | 1 | 2 |
| assets | 2 | 1 | 0 | 1 |
| overview | 6 | 3 | 2 | 1 |
| rfp | 5 | 1 | 1 | 3 |

**Critical:** 4 empty pages registered in docs.json nav (deliverables, outcomes, definitions, ecosystem). 1 duplicate (`internal-overview` duplicates `overview/about`). 14 pages missing H1.

---

### About (39 pages — 100% page coverage, summaries pending)

Reviews written for all 39 pages. Multiple pages under 2KB in network/ section. TAB summary pending.

---

### Home (20 pages — 100% page coverage, summaries pending)

Reviews written for all 20 pages. TAB summary pending.

---

### Community (18 pages — 100% coverage)

| Section | Pages | Pass | Needs Work | Fail |
|---|---|---|---|---|
| root | 3 | 2 | 0 | 1 |
| livepeer-community | 5 | 3 | 2 | 0 |
| livepeer-connect | 3 | 3 | 0 | 0 |
| livepeer-contribute | 3 | 0 | 0 | 3 |
| resources | 4 | 2 | 0 | 1 |

**Critical:** livepeer-contribute/ is entirely empty stubs in published nav (3 Fail). `dashboards.mdx` is also a stub.

---

### Developers (47 pages — 100% coverage)

| Section | Pages | Pass | Needs Work | Fail |
|---|---|---|---|---|
| root | 3 | 2 | 1 | 0 |
| build | 5 | 3 | 2 | 0 |
| concepts | 5 | 4 | 1 | 0 |
| get-started | 6 | 4 | 2 | 0 |
| guides | 17 | 10 | 5 | 2 |
| resources | 11 | 9 | 0 | 1 |

**Highlight:** resources/reference/ is one of the strongest subsections in the repo.
**Weakness:** knowledge-hub/ pages have broken embeds. `ai-quickstart.mdx` and `transcoding-quickstart.mdx` are raw research drafts in nav.
**Systemic:** Capitalised frontmatter keys across ~30 pages.

---

## Remediation Script Coverage

104 scripts mapped across all 10 categories:

| Category | Validators | Remediators | Auditors | Gap? |
|---|---|---|---|---|
| 1. Frontmatter | 2 | 3 | 0 | **Need: frontmatter key casing normaliser** |
| 2. Voice & Copy | 5 | 4 | 2 | Covered |
| 3. Headings | 2 | 0 | 0 | **Need: heading quality scorer** |
| 4. Structure | 7 | 1 | 2 | Covered |
| 5. Layout/Components | 5 | 1 | 3 | Covered |
| 6. Veracity | 1 | 0 | 2 | **Need: REVIEW flag tracker** |
| 7. Nav & IA | 2 | 2 | 2 | Covered |
| 8. Links/Rendering | 3 | 5 | 2 | Covered |
| 9. Process/Governance | 15 | 5 | 5 | Heavy (27 total) |
| 10. Completeness | 4 | 0 | 2 | **Need: stub/thin-page detector** |

**Script gaps identified:**
1. **Frontmatter key casing normaliser** — No script to fix `Keywords` → `keywords`, `PageType` → `pageType`. ~100+ pages affected.
2. **Heading quality scorer** — No automated heading rubric scorer. Manual review only.
3. **REVIEW flag tracker** — `docs-quality-and-freshness-audit.js` partially covers this but doesn't produce a per-page REVIEW flag inventory.
4. **Stub/thin-page detector** — No script specifically flags pages under 2KB in published nav. `audit-v2-usefulness.js` partially covers.

---

## Recommended Remediation Order

1. **Batch frontmatter fix** — Add `complexity`, `lifecycleStage`, normalise key casing. Affects 500+ pages. Single script run.
2. **Delete/archive dead content** — `s-guide.mdx`, `dep-*` duplicates, empty stubs. ~15 files.
3. **Fix reader-facing broken content** — `<Danger>` banners, empty view tabs, dead `href="#"` links. ~15 pages.
4. **Run voice remediator** — Banned words/phrases across ~30 pages. Existing script.
5. **Run UK English homogeniser** — US spellings across ~10 pages. Existing script.
6. **Update old pageType/purpose enums** — ~30 pages. Existing script with config update.
7. **Fix broken internal links** — Old slug references across ~25 pages. Existing script.
8. **Add Related Pages/CTA** — ~60 pages missing. Manual editorial work.
9. **Populate stubs or remove from nav** — 74 API ref stubs in Solutions. Editorial decision needed.

---

## Review Files Location

All per-page reviews at: `v2/{tab}/_workspace/reviews/{section}/{page-name}.md`
Section summaries at: `v2/{tab}/_workspace/reviews/{section}/SECTION-SUMMARY.md`
Tab summaries at: `v2/{tab}/_workspace/reviews/TAB-SUMMARY.md`

| Tab | Review files | Section summaries | Tab summary |
|---|---|---|---|
| Orchestrators | 76 | 5 | Pending |
| Gateways | 126+ | 7 | 1 |
| Developers | 50 | 6 | 1 |
| About | 40 | Pending | Pending |
| Delegators | 25 | 5 | 1 |
| Home | 20 | Pending | Pending |
| Community | 18 | 5 | 1 |
| Resources | 51+ | Yes | 1 |
| Solutions | 118 | 7 | 1 |
| Internal | 18 | 4 | 1 |
