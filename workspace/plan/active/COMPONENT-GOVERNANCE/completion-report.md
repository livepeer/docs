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

---

## Dependencies on Other Frameworks

Items completed here that touch or depend on governance work outside this plan:

| Item | Depends On | Nature of Dependency |
|---|---|---|
| `@aiDiscoverability` field values | `tasks/plan/active/AI-DISCOVERABILITY/` (CDA tasks) | The `snapshot` / `props-extracted` / `none` enum and companion file conventions are defined by the AI Discoverability framework. Any extension of the enum must be proposed there first. |
| `ai-companion-manifest.json` + CDA-6 checker | AI Discoverability (CDA-6) + `docs-guide/catalog/ai-companion-schema.json` | The manifest structure is validated by the JSON schema written in CDA-2. Changes to companion types require updating both the schema and checker. |
| `component-layout-decisions.mdx` page types | `tasks/plan/active/CONTENT-WRITING/` (Content Framework) | The 13 page types in the matrix are locked by the Content Framework (`pagePurpose.md`, `information-type.md`). Any new page types added to v2 must go through the Content Framework first; this doc is downstream. |
| Published taxonomy (`component-framework-canonical.mdx`) | Composables framework (`snippets/composables/`) | The composables layer references the taxonomy to determine which components are appropriate per composable type. The taxonomy is upstream of composables authoring guidance. |
| Registry → component docs generator | `operations/scripts/generators/components/documentation/generate-component-docs.js` | The `generate-component-docs.js` script reads `component-registry.json` as its source. Registry schema changes (new fields) require updates to the docs generator template. |
| Registry → UI templates generator | `operations/scripts/generators/components/library/generate-ui-templates.js` | Same dependency — UI template MDX and VSCode snippets are generated from the registry. |
| Blocking CI gates (naming, scope) | PR governance allowlist (`docs-guide/policies/root-allowlist-governance.mdx`) | The new hard gates in `test-suite.yml` run alongside the allowlist and codex isolation checks. If allowlist policy changes which files are editable in what contexts, the naming/scope gates must remain consistent. |
| JSDoc `@type` + `@subniche` taxonomy | Script governance JSDoc standard (`operations/scripts/` header convention) | Both component and script governance use `@type` as their Layer 1 taxonomy tag. Any changes to the shared tag vocabulary require synchronisation between the two frameworks. |

---

## Further Recommendations

Items not in scope for this sprint but worth doing as follow-on work:

### High value — automation

| # | Recommendation | Rationale |
|---|---|---|
| R1 | **Pre-commit hook for `generate-component-registry.js`** | CI auto-generation on main-push covers the gap but registry can still drift between pushes. A pre-commit hook catches errors before they reach CI. Hook config: run on any staged change to `snippets/components/**/*.jsx`. |
| R2 | **CDA-5: Snapshot companion auto-refresh script** | `CoinGeckoExchanges` snapshots are manually maintained stubs. A scheduled CI job using the CoinGecko API would keep exchange data current without human intervention. Template exists at `snippets/data/snapshots/`. |
| R3 | **`MarkdownEmbed` usage audit + companion** | `MarkdownEmbed` is tagged `snapshot` but has no companion. Audit which pages use it (`grep -r "MarkdownEmbed" v2/`), identify the external URLs it fetches, and create a companion per unique URL. |

### Medium value — hardening

| # | Recommendation | Rationale |
|---|---|---|
| R4 | **Harden `component-layout-governance.js` as a CI gate** | Currently soft (`continue-on-error: true`). Before hardening: run a full audit, catalogue intentional exceptions, and either update the policy or add `@layoutOverride` annotations. Low risk once exceptions are documented. |
| R5 | **`@contentAffinity` JSDoc field** | Originally scoped as field #6 in the aspirational 14-field schema; deferred because page taxonomy was unfinished. Now that `pagePurpose.md` is locked with 15 intent values, `@contentAffinity` can be designed. It would power "which components should I use on a `build` page?" lookups and make the layout decisions matrix machine-queryable. |
| R6 | **Upgrade 5 integrator components from `none` → `snapshot`** | `DiscordAnnouncements`, `LumaEvents`, `ForumLatestLayout`, `LatestVersion`, `YouTubeVideoData` all fetch external data at runtime but are currently tagged `none`. They should each have a snapshot companion. Upgrade when companion files are created (one per component). |

### Low value — housekeeping

| # | Recommendation | Rationale |
|---|---|---|
| R7 | **Mintlify style overrides registry** | `component-governance.mdx` Section 3.6 calls for a registry of every `style.css` override with justification + review date. Not built. Low priority but would prevent style-override sprawl. |
| R8 | **Generate `snippets/components/README.md` from the canonical** | README and `component-framework-canonical.md` overlap in the taxonomy tree. Long-term, README could be auto-generated from the published MDX to eliminate drift. |
| R9 | **Smoke tests for governance validators** | `generate-component-registry.js` output shape is not unit-tested. A smoke test asserting the registry JSON has a `components` array, all required fields are present, and aiDiscoverability is never empty would prevent regressions from script refactors. |

---

## Artefacts Produced

All files created or significantly modified in this thread.

### Created

| File | Description |
|---|---|
| [`docs-guide/frameworks/component-framework-canonical.mdx`](../../../../../docs-guide/frameworks/component-framework-canonical.mdx) | Published canonical taxonomy — 5-category folder tree, decision rules, JSDoc 7-field standard, value tables, and example headers for all component types |
| [`.github/workflows/generate-component-registry.yml`](../../../../../.github/workflows/generate-component-registry.yml) | New CI workflow — auto-regenerates and commits `component-registry.json` when any `.jsx` file in `snippets/components/` changes on main |
| [`operations/scripts/validators/governance/ai/check-companion-manifest.js`](../../../../../operations/scripts/validators/governance/ai/check-companion-manifest.js) | CDA-6 manifest checker — validates `ai-companion-manifest.json` is consistent with registry `aiDiscoverability` fields; wired to `check-ai-companions.yml` |
| [`workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md`](./completion-report.md) | This report |

### Significantly Modified

| File | Change Summary |
|---|---|
| [`docs-guide/component-registry.json`](../../../../../docs-guide/component-registry.json) | Regenerated — 121 components, all with explicit `aiDiscoverability`, 0 errors, 0 warnings |
| [`docs-guide/catalog/ai-companion-manifest.json`](../../../../../docs-guide/catalog/ai-companion-manifest.json) | `MarkdownEmbed` added to `pendingCompanions` (status: deferred) |
| [`docs-guide/policies/component-layout-decisions.mdx`](../../../../../docs-guide/policies/component-layout-decisions.mdx) | Added `guide` (208 pages), `quickstart` (20), `resource` (5) to matrix; fixed stale script path; updated `lastVerified` |
| [`docs.json`](../../../../../docs.json) | Added `component-framework-canonical` to `docs-guide/frameworks/` navigation |
| [`snippets/components/README.md`](../../../../../snippets/components/README.md) | Added pointer to authoritative generated catalog; removed ambiguity about CATALOG.md |
| `snippets/components/**/*.jsx` (37 files) | Batch JSDoc update — `@aiDiscoverability none` inserted on 111 exports; `@param className`/`style` added to 63/53 exports |
| [`snippets/components/x-archive/CATALOG.md`](../../../../../snippets/components/x-archive/CATALOG.md) | Moved from `snippets/components/CATALOG.md` — manual catalog archived |
| [`.github/workflows/check-docs-guide-catalogs.yml`](../../../../../.github/workflows/check-docs-guide-catalogs.yml) | Fixed stale `tools/scripts/` paths; added registry `--validate-only` check step; added component docs `--check` step |
| [`.github/workflows/generate-docs-guide-catalogs.yml`](../../../../../.github/workflows/generate-docs-guide-catalogs.yml) | Fixed stale paths; added component docs `--write` step |
| [`.github/workflows/check-ai-companions.yml`](../../../../../.github/workflows/check-ai-companions.yml) | Fixed stale paths; added `npm install` step; added `check-companion-manifest.js --check` step |
| [`.github/workflows/generate-ai-companions.yml`](../../../../../.github/workflows/generate-ai-companions.yml) | Fixed stale paths; added `npm install` step |
| [`.github/workflows/test-suite.yml`](../../../../../.github/workflows/test-suite.yml) | Added `check-naming-conventions.js` and `check-mdx-component-scope.js` as blocking gates (no `continue-on-error`) |
| [`workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`](./component-framework-canonical.md) | Added "Published at" note pointing to the new docs-guide MDX |
| [`workspace/plan/active/COMPONENT-GOVERNANCE/audits/pipeline-audit.md`](./audits/pipeline-audit.md) | Corrected all 15 `tools/scripts/` path references to `operations/scripts/` |
| [`workspace/plan/active/COMPONENT-GOVERNANCE/tasks/governance-pipeline-subplan.md`](./tasks/governance-pipeline-subplan.md) | Corrected Pre-work and P1-C sections; added inline correction notes explaining actual fix direction |
