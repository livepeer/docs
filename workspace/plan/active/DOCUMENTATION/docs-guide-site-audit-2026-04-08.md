# docs-guide/ Live Site Audit — 2026-04-08

> Full accuracy audit of every published page in docs-guide/. Read-only — no fixes applied.

---

## Severity Scale

- **WRONG** — provably false claims visible to readers right now
- **STALE** — outdated numbers or paths, acknowledged or not
- **ORPHANED** — accessible by URL but not in navigation
- **CORRECT** — verified against filesystem

---

## WRONG (fix immediately)

### 1. workflows-catalog.mdx — COMPLETE DESYNC
- **All 47 workflow names listed do not exist on disk**
- Actual repo has 50 workflows with new naming convention (`type-concern-verb-name.yml`)
- Catalogue still references old flat names (`check-docs-guide-catalogs.yml` etc.)
- Every single entry is a phantom reference
- **Impact:** Anyone looking up a workflow finds nothing

### 2. feature-map.mdx — Non-existent paths
- Lines 62, 79, 81, 82: References `v2/pages/`, `v2/pages/04_gateways/`, `v2/pages/06_delegators/`, `v2/pages/03_developers/`
- **`v2/pages/` does not exist.** Correct paths: `v2/gateways/`, `v2/delegators/`, `v2/developers/`

### 3. architecture-map.mdx — Non-existent path
- Line 27: References `v2/pages/**`
- Correct reference: `v2/**`

### 4. component-framework-canonical.mdx — Count table is fiction
- Claims 118 total components. **Actual: 51**
  - elements: claims 30, actual 12
  - wrappers: claims 30, actual 20
  - displays: claims 17, actual 7
  - scaffolding: claims 20, actual 3
  - integrators: claims 20, actual 8
  - config: claims 1, actual 1
- 131% inflation. These are aspirational numbers presented as current state

### 5. scripts-catalog.mdx — Count is wrong
- Claims "366 script(s)". **Actual: ~224 .js files in operations/scripts/**
- 63% inflation

### 6. page-composition-framework.mdx — Misplaced draft
- Title is "Page-structure-template" — this is a template, not a framework
- Status: draft. Should not be in frameworks/

### 7. page-taxonomy-framework.mdx — Work-in-progress notes
- Content is fragmented raw YAML/markdown notes, not a coherent specification
- Referenced by multiple governance docs as canonical but is not publication-ready

---

## STALE (needs update, not lying)

### 8. script-framework.mdx — Script count understated
- Says "~120 operational scripts". Actual: 224
- The `~120` was probably correct when written but the library has nearly doubled

### 9. component-governance.mdx — Version date
- Status says "Version: 1.0, Date: 7 March 2026" but lastVerified is 2026-04-07
- Frontmatter refreshed but content not actually verified against current state

### 10. governance-index.mdx — Self-aware staleness
- Admits component counts are aspirational (line 47)
- Admits 15 old `tools/scripts/` path refs remain (line 61)
- Correctly flags its own problems but doesn't fix them

### 11. components-catalog.mdx — Possibly stale
- Last modified 2026-03-23 (16 days ago)
- Auto-generated but not re-run recently

---

## ORPHANED PAGES (25 total — on disk, not in docs.json nav)

### New frameworks (7) — none in nav
- docs-guide/frameworks/ai-tools-governance
- docs-guide/frameworks/content-writing
- docs-guide/frameworks/doc-item-model
- docs-guide/frameworks/file-placement
- docs-guide/frameworks/github-actions
- docs-guide/frameworks/repo-structure
- docs-guide/frameworks/script-framework

### New standards (5) — none in nav
- docs-guide/standards/authoring-standard
- docs-guide/standards/frontmatter
- docs-guide/standards/naming-conventions
- docs-guide/standards/voice-and-copy
- docs-guide/standards/voice-rules

### Pre-existing orphans (6)
- docs-guide/frameworks/page-composition-framework
- docs-guide/frameworks/page-taxonomy-framework
- docs-guide/policies/governance-index
- docs-guide/repo-ops/config/repo-governance-map
- docs-guide/repo-ops/config/root-governance-map
- docs-guide/features/contracts-pipeline

### New docs-library pages (7) — none in nav
- docs-guide/docs-library/index
- docs-guide/docs-library/pipelines/component-health
- docs-guide/docs-library/pipelines/content-quality
- docs-guide/docs-library/pipelines/copy-brand
- docs-guide/docs-library/pipelines/data-integration
- docs-guide/docs-library/pipelines/discoverability
- docs-guide/docs-library/pipelines/governance-compliance

---

## CORRECT (47 files verified)

### Policies (16/17 correct)
All policy files except governance-index.mdx (stale, self-acknowledged). Every file path reference, folder structure claim, and governance rule verified against disk.

### Contributing (5/5 correct)
contributing.mdx, mintlify.mdx, local-preview.mdx, git-hooks.mdx, agent-instructions.mdx

### Tooling (5/5 correct)
lpd-cli.mdx, dev-tools.mdx, ai-tools.mdx, lpd-mdx-preview.mdx, icon-map.mdx

### Features (6/8 correct)
visual-explainer-workflows.mdx (correctly flags the v2/pages/ error in other docs), automations.mdx, data-integrations.mdx, ui-system.mdx, contracts-pipeline.mdx, ai-features.mdx

### Frameworks (7/13 correct)
ai-tools-governance, content-writing, doc-item-model, file-placement, github-actions, repo-structure, research-skill-workflow

### Standards (5/5 correct)
voice-rules, naming-conventions, frontmatter, voice-and-copy, authoring-standard

### Catalogs (3/6 correct)
pages-catalog, templates-catalog, ui-templates

### Repo-ops (4/4 correct)
repo-config-map, repo-governance-map, root-governance-map, enforcement-map

### Root (1/1 correct)
source-of-truth-guide.mdx

---

## Summary

| Category | Total | Correct | Stale | Wrong | Orphaned |
|----------|-------|---------|-------|-------|----------|
| Policies | 17 | 16 | 1 | 0 | 1 |
| Frameworks | 13 | 7 | 2 | 4 | 9 |
| Standards | 5 | 5 | 0 | 0 | 5 |
| Features | 8 | 6 | 0 | 2 | 1 |
| Catalogs | 6 | 3 | 1 | 2 | 0 |
| Contributing | 5 | 5 | 0 | 0 | 0 |
| Tooling | 5 | 5 | 0 | 0 | 0 |
| Repo-ops | 4 | 4 | 0 | 0 | 2 |
| Docs-library | 7 | — | — | — | 7 |
| Root | 1 | 1 | 0 | 0 | 0 |
| **TOTAL** | **71** | **52** | **4** | **8** | **25** |

**Bottom line:** 8 files are wrong, 4 are stale, 25 are orphaned. 52 of 71 are verified correct.
