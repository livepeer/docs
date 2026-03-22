# Component Governance Pipeline — Completion Report

> **Date**: 2026-03-22
> **Branch**: `docs-v2-dev`
> **Scope**: All P1/P2/P3 items from `Audits/pipeline-audit.md`
> **Status**: ALL ITEMS COMPLETE

---

## What Was Done

### Phase 1 — Critical Gaps

#### P1-A + P3-A: `@aiDiscoverability` + `@param` JSDoc batch fill
**Commits**: `3829b9b9`

- **111 components** had empty `aiDiscoverability` fields → all filled with `none`
- **63 components** were missing `@param {string} [className='']` → added
- **53 components** were missing `@param {object} [style={}]` → added
- Executed via one-shot script `_one-shot-jsdoc-fix.js` (deleted after run)
- **37 JSX files** modified across `snippets/components/`
- Registry regenerated: `0 errors, 0 warnings, 121 components`

**Verification**:
```
node operations/scripts/generators/components/library/generate-component-registry.js --validate-only
→ ✅ Validated 121 governed component export(s). No errors.
```

---

#### P1-B: Archive `snippets/components/CATALOG.md`
**Commit**: `4868cb95`

- `CATALOG.md` moved to `snippets/components/x-archive/CATALOG.md` via `git mv`
- `snippets/components/README.md` updated with pointer to authoritative generated catalog
- Zero references to `CATALOG.md` outside archive verified

---

#### P1-C: Add registry CI workflow + fix stale CI paths
**Commit**: `fdcd1a6f`

**New workflow**: `.github/workflows/generate-component-registry.yml`
- Triggers on push to `main` when `snippets/components/**/*.jsx` changes
- Auto-commits `docs-guide/component-registry.json` and `component-registry-schema.json`

**Check step added** to `check-docs-guide-catalogs.yml`:
- `generate-component-registry.js --validate-only` now runs on every PR

**Stale CI paths fixed** — 4 workflows had `tools/scripts/` (non-existent path); corrected to `operations/scripts/`:
| Workflow | Change |
|---|---|
| `check-docs-guide-catalogs.yml` | paths fixed + registry check step added |
| `generate-docs-guide-catalogs.yml` | paths fixed |
| `check-ai-companions.yml` | paths fixed + npm install step added |
| `generate-ai-companions.yml` | paths fixed + npm install step added |

---

### Phase 2 — Automation

#### P2-A: Component docs pages in CI/CD
**Commit**: `6595c335`

- `check-docs-guide-catalogs.yml`: added `generate-component-docs.js --check` step → PR fails if docs pages are stale
- `generate-docs-guide-catalogs.yml`: added `generate-component-docs.js --write` step → pages auto-regenerated on main push

---

#### P2-B: Deterministic validators as blocking CI gates
**Commit**: `182a933d`

Added to `test-suite.yml` WITHOUT `continue-on-error` (blocking gates):

| Validator | What it checks |
|---|---|
| `check-naming-conventions.js` | PascalCase filenames, folder taxonomy alignment |
| `check-mdx-component-scope.js` | No cross-.jsx imports (Decision D4) |

These were chosen for zero false-positive risk (fully deterministic rules). CSS, layout governance, and component docs validators remain soft (`continue-on-error: true`).

---

#### P2-C: CDA-6 companion manifest checker
**Commit**: `494e5fe5`

**New script**: `operations/scripts/validators/governance/ai/check-companion-manifest.js`

Logic:
1. Read registry → find all components with `aiDiscoverability: 'snapshot' | 'props-extracted'`
2. Read manifest → collect `sourceComponent` values from both `companions[]` and `pendingCompanions[]`
3. Flag any registry component with no manifest entry
4. Flag any `companionPath` that doesn't exist on disk
5. `--check` flag exits non-zero on issues; `--report` flag prints full summary

**Manifest updated**:
- `MarkdownEmbed` added to `pendingCompanions` (status: `deferred` — usage audit required)

**Wired to CI**: `check-ai-companions.yml` now runs `check-companion-manifest.js --check`

**Current state**: `✅ Companion manifest check passed (13 entries, 4 registry components)`

---

#### P2-D: Component taxonomy published to docs-guide
**Commit**: `e0d5aa38`

**New file**: `docs-guide/frameworks/component-framework-canonical.mdx`
- Full 5-category folder taxonomy with per-component file listing
- Decision rules table
- Component counts (121 total; 118 governed + 3 deprecated)
- JSDoc 7-field tag reference with full value tables
- `@status`, `@accepts`, `@aiDiscoverability` value specifications
- Example JSDoc headers for all 5 categories
- Excluded: "Alignment with script governance" table (plan-phase only)

**`docs.json`** updated: `component-framework-canonical` added to `docs-guide/frameworks/` navigation

---

### Phase 3 — Housekeeping

#### P3-B: Re-verify `component-layout-decisions.mdx`
**Commit**: `f3697fa6`

Active `pageType` values extracted from `v2/` (789 pages total):

| pageType | Count | Was in matrix? |
|---|---|---|
| `reference` | 236 | ✅ |
| `guide` | 208 | ❌ **ADDED** |
| `overview` | 96 | ✅ |
| `concept` | 89 | ✅ |
| `landing` | 52 | ✅ |
| `how_to` | 45 | ✅ |
| `tutorial` | 22 | ✅ |
| `quickstart` | 20 | ❌ **ADDED** |
| `resource` | 5 | ❌ **ADDED** |
| `changelog` | 5 | ✅ |
| `glossary` | 4 | ✅ |
| `faq` | 4 | ✅ |
| `troubleshooting` | 2 | ✅ |
| `how-to` | 1 | ⚠️ typo for `how_to` — not added |

- `lastVerified` updated to `2026-03-21`
- Validation command path corrected: `tools/scripts/` → `operations/scripts/`

---

#### P3-C: Audit report path corrections
**Commit**: `7411c8c2`

- `Audits/pipeline-audit.md`: all `tools/scripts/` → `operations/scripts/` (15 occurrences)
- `Tasks/governance-pipeline-subplan.md`: Pre-work and P1-C sections corrected with inline notes explaining the actual direction of the fix (`tools/scripts/` was the stale path, not `operations/scripts/`)

---

## Design Lock-ins

These decisions are now fully implemented and should be treated as stable:

### Component library

| Decision | Status |
|---|---|
| All 121 components have explicit `@aiDiscoverability` value | LOCKED — `none` / `snapshot` / `props-extracted` |
| `operations/scripts/` is the canonical script path for all governance scripts | LOCKED |
| `snippets/components/x-archive/` is the staging area for superseded files | LOCKED |
| `docs-guide/catalog/components-catalog.mdx` is the authoritative component catalog | LOCKED — `CATALOG.md` archived |
| The 7-field JSDoc standard is enforced by CI (`generate-component-registry.js --validate-only`) | LOCKED |
| All `@param` entries for spread props (`className`, `style`) are required | LOCKED — validated by registry generator |

### CI/CD gates

| Gate | Trigger | Blocking? |
|---|---|---|
| Registry validation | Every PR + push | Soft (continue-on-error) in content-health; hard in check-docs-guide-catalogs |
| Registry auto-generation | Push to main, `snippets/components/**/*.jsx` changed | Auto-commit |
| Component naming conventions | Every PR (test-suite) | **Hard — blocks merge** |
| MDX component scope isolation | Every PR (test-suite) | **Hard — blocks merge** |
| Component docs pages freshness | Every PR (check-docs-guide-catalogs) | Hard |
| Companion manifest consistency | Every PR (check-ai-companions) | Hard |
| Glossary companion freshness | Every PR (check-ai-companions) | Hard |
| Catalog freshness | Every PR (check-docs-guide-catalogs) | Hard |

### AI discoverability

| Component | `@aiDiscoverability` | Companion |
|---|---|---|
| `CoinGeckoExchanges` | `snapshot` | `snippets/data/snapshots/coingecko-*.json` ✅ |
| `MarkdownEmbed` | `snapshot` | Deferred — usage audit required |
| `ShowcaseCards` | `props-extracted` | `v2/home/solutions/showcase-data.json` ✅ |
| `SearchTable` | `props-extracted` | `v2/*/resources/compendium/glossary-data.json` (×9) ✅ |
| `TwitterTimeline` | `none` (was `snapshot`) | Not feasible — 3rd-party widget |
| All other 116 components | `none` | No companion needed |

### Documentation

| Document | Path | Role |
|---|---|---|
| Component governance framework | `docs-guide/frameworks/component-governance.mdx` | Canonical rules, decisions, build standard |
| Component taxonomy | `docs-guide/frameworks/component-framework-canonical.mdx` | Folder structure, JSDoc spec, examples |
| Component layout decisions | `docs-guide/policies/component-layout-decisions.mdx` | Page-type → component contract (13 page types) |
| Component catalog | `docs-guide/catalog/components-catalog.mdx` | Auto-generated browsable listing |

---

## Registry State (Final)

```
node operations/scripts/generators/components/library/generate-component-registry.js --validate-only
→ ✅ Validated 121 governed component export(s). No errors.

node operations/scripts/validators/governance/ai/check-companion-manifest.js --check
→ ✅ Companion manifest check passed (13 entries, 4 registry components)
```

| Metric | Before | After |
|---|---|---|
| Total governed components | 121 | 121 |
| Components with `aiDiscoverability` set | 10 (8.3%) | **121 (100%)** |
| Registry validation errors | 3 | **0** |
| Registry validation warnings | 181 | **0** |
| CI workflows with stale paths | 4 | **0** |
| CI workflows enforcing naming conventions | 0 | **1** (blocking) |
| CI workflows enforcing MDX scope isolation | 0 | **1** (blocking) |
| Page types covered in layout matrix | 10 | **13** |
| Companion manifest checker | Unbuilt | **Built + wired to CI** |
| Component taxonomy published | No | **Yes** (`docs-guide/frameworks/`) |

---

## What Remains Deferred

| Item | Deferred To | Notes |
|---|---|---|
| `MarkdownEmbed` companion | Usage audit | Need to identify which pages use it and which URLs they fetch |
| `DiscordAnnouncements`, `LumaEvents`, `ForumLatestLayout`, `LatestVersion`, `YouTubeVideoData` upgrade from `none` → `snapshot` | Content sprint | Currently tagged `none`; upgrade when companion files are created |
| CDA-5: snapshot companion auto-refresh | Future automation sprint | No refresh script built; snapshots are manual stubs |
| `component-layout-governance.js` CI gate | Hardening sprint | Too many intentional exceptions to harden now; remains soft |
| Pre-commit hook for registry generation | Tooling sprint | Low-risk improvement; CI auto-generation covers the gap for now |
| `how-to` (hyphen) typo pages | Content triage | 1 page uses `how-to` instead of `how_to` — needs frontmatter fix |
