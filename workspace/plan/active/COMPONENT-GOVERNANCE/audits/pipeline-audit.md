# Component Governance — Pipeline & Documentation Audit

> **Date**: 2026-03-21
> **Scope**: All governance pipelines, documentation surfaces, redundancies, automation coverage, and AI readiness
> **Status**: Active reference — update when pipelines change

---

## 1. Pipeline Map

### 1.1 End-to-end data flow

```
JSDoc headers in snippets/components/**/*.jsx
  │
  ▼ [MANUAL: generate-component-registry.js]
  │
  ├→ docs-guide/component-registry.json          ← master generated artifact
  │     (121 exports, 5,796 lines)
  └→ docs-guide/component-registry-schema.json
        │
        ▼ [MANUAL: generate-component-docs.js]
        │
        └→ v2/resources/documentation-guide/component-library/*.mdx   (4 locales)
              │
              ▼ [CI/CD ON MAIN PUSH: generate-docs-guide-catalogs.yml]
              │
              └→ docs-guide/catalog/components-catalog.mdx
                    └→ published browsable library in v2/
```

**Trigger sequence summary:**
| Step | Trigger | Who | Frequency |
|------|---------|-----|-----------|
| Registry generation | Manual | Human / AI agent | Per governance cycle |
| Component docs pages | Manual (`--write`) | Human / AI agent | After registry changes |
| Catalog MDX | CI/CD (main push) | GitHub Actions | Automatic on merge |
| Catalog validation | CI/CD (PR check) | GitHub Actions | Every PR to docs-v2/main |

---

### 1.2 Validation pipeline

```
snippets/components/**/*.jsx
  ├→ check-naming-conventions.js     PascalCase, folder taxonomy alignment
  ├→ check-component-css.js          BEM classes, responsive modifiers
  ├→ check-mdx-component-scope.js    No cross-.jsx imports (Decision D4)
  └→ component-layout-governance.js  Page-type layout contracts (v2/**/*.mdx)
```

**Trigger:** All manual or pre-commit hook. None are CI/CD-gated currently.

---

### 1.3 Companion / AI discoverability pipeline

```
Components with @aiDiscoverability=snapshot
  → snippets/data/snapshots/*.json           manual stub OR CDA-5 (unbuilt)

Components with @aiDiscoverability=props-extracted
  → v2/*/resources/compendium/glossary-data.json   generate-glossary-companions.js
  → v2/home/solutions/showcase-data.json           manual

docs-guide/catalog/ai-companion-manifest.json       manual (CDA-6 governance checker unbuilt)
docs-guide/catalog/ai-companion-schema.json         static schema definition
```

**Status:** Partially automated. Generator exists for glossary companions only. Snapshot refresh (CDA-5) not yet built.

---

## 2. Script Inventory

### 2.1 Generator scripts

| Script | Path | Purpose | Mode flags | Output |
|--------|------|---------|-----------|--------|
| `generate-component-registry` | `tools/scripts/generators/components/library/` | Parses JSDoc → registry JSON | `--validate-only`, `--strict` | `component-registry.json`, `component-registry-schema.json` |
| `generate-component-docs` | `tools/scripts/generators/components/documentation/` | Registry → MDX library pages (4 locales) | `--dry-run`, `--fix`, `--write`, `--check` | `v2/*/resources/documentation-guide/component-library/*.mdx` |
| `generate-ui-templates` | `tools/scripts/generators/components/library/` | Registry → VSCode snippets + UI template MDX | `--write`, `--check` | `.vscode/components.code-snippets`, `docs-guide/catalog/ui-templates.mdx` |
| `generate-docs-guide-components-index` | `tools/scripts/generators/governance/catalogs/` | Registry → components-catalog.mdx | `--fix` | `docs-guide/catalog/components-catalog.mdx` |
| `generate-glossary-companions` | `tools/scripts/generators/content/reference/` | Extract glossary data from MDX → companion JSON | `--dry-run`, `--check` | `v2/*/resources/compendium/glossary-data.json` |

### 2.2 Validator scripts

| Script | Path | What it checks | Trigger |
|--------|------|---------------|---------|
| `check-naming-conventions` | `tools/scripts/validators/components/library/` | PascalCase filenames, folder taxonomy | Manual / pre-commit |
| `check-component-css` | `tools/scripts/validators/components/library/` | BEM class naming, responsive modifiers | Manual / pre-commit |
| `check-mdx-component-scope` | `tools/scripts/validators/components/library/` | No cross-.jsx imports (D4) | Manual / CI |
| `component-layout-governance` | `tools/scripts/validators/components/library/` | Page-type layout contracts | Manual only |

### 2.3 Orchestration / pipeline scripts

| Script | Path | Purpose | Automation |
|--------|------|---------|-----------|
| `governance-pipeline` | `tools/scripts/dispatch/governance/pipelines/` | Chains audit → repair → verify → report | Manual (`--auto-commit` optional) |
| `sync-generated-files` | `tools/scripts/dispatch/governance/pipelines/` | Syncs generated artifacts across branches/locales | Manual |
| `repo-audit-orchestrator` | `tools/scripts/dispatch/governance/repo/` | Full-repo audit orchestration | Manual |

---

## 3. Documentation Surfaces

### 3.1 Live / published docs

| File | Lines | Covers | Status |
|------|-------|--------|--------|
| `docs-guide/frameworks/component-governance.mdx` | 689 | Canonical framework: categories, build rules, JSDoc standard, 3-layer architecture, composables | **Current** (updated 2026-03-20) |
| `docs-guide/policies/component-layout-decisions.mdx` | ~51 | Page-type layout contracts — approved component sets per page type | **Current** (verified 2026-03-12) |
| `snippets/components/README.md` | 139 | Library reference: taxonomy, PascalCase convention, validation commands, JSDoc quick-ref | **Current** |
| `docs-guide/catalog/components-catalog.mdx` | 216 | Generated browsable catalog — links to per-category MDX pages | **Auto-generated** |

### 3.2 Workspace / plan-phase docs

| File | Lines | Purpose | Status |
|------|-------|---------|--------|
| `COMPONENT-GOVERNANCE/component-framework-canonical.md` | ~410 | Full folder taxonomy with per-component file mapping | **Source of truth** — not published |
| `COMPONENT-GOVERNANCE/Frameworks/jsdoc-reference.md` | ~357 | JSDoc 7-field spec with all 121 exports mapped | **Reference** — not published |
| `COMPONENT-GOVERNANCE/plan.md` | ~654 | Full task plan with decisions, timeline, status | **Active** |
| `COMPONENT-GOVERNANCE/catalog.md` | ~114 | Plan-phase catalog / tracking | Active but **partially redundant** (see §5) |
| `COMPONENT-GOVERNANCE/changelog.md` | ~163 | Task-by-task change log | Active |
| `COMPONENT-GOVERNANCE/Audits/audit-report.md` | — | Per-component quality audit (responsive/WCAG/style) | Completed per T13-T15 |
| `COMPONENT-GOVERNANCE/Audits/component-docs.md` | — | Component docs architecture audit | Completed pre-T10 |
| `COMPONENT-GOVERNANCE/Tasks/doc-recommendation.md` | — | Doc architecture decision/recommendation | Completed |

### 3.3 Documentation gaps

| Gap | Impact | Recommendation |
|-----|--------|---------------|
| `component-framework-canonical.md` is not published | AI agents / human authors can't access the taxonomy from docs-guide | Publish a trimmed version to `docs-guide/frameworks/` or generate a catalog page from it |
| JSDoc spec lives only in workspace | Authors writing new components must hunt for it | Add JSDoc quick-ref section to `snippets/components/README.md` (currently just a pointer) |
| No published page for companion file patterns | Authors don't know how to create AI-discoverable companions | Extend `component-governance.mdx` Section 12 or add a new `ai-discoverability.mdx` |
| `component-layout-decisions.mdx` is short (51 lines) and last verified March 12 | May be missing page types added since | Audit against current page type taxonomy |

---

## 4. Automation vs Manual

### 4.1 What is automated (CI/CD)

| Step | Workflow | Trigger |
|------|----------|---------|
| Catalog freshness validation | `check-docs-guide-catalogs.yml` | Every PR to docs-v2/main |
| Catalog generation | `generate-docs-guide-catalogs.yml` | Push to main |
| Pages index sync | Both workflows above | Same |

### 4.2 What requires manual invocation

| Step | Command | When needed |
|------|---------|-------------|
| Registry generation | `node tools/scripts/generators/components/library/generate-component-registry.js` | After any JSDoc change |
| Component docs pages | `node tools/scripts/generators/components/documentation/generate-component-docs.js --write` | After registry changes |
| Naming convention validation | `node tools/scripts/validators/components/library/check-naming-conventions.js` | When adding new components |
| Layout governance check | `node tools/scripts/validators/components/library/component-layout-governance.js --scope full` | Periodic / on page changes |
| Governance pipeline | `node tools/scripts/dispatch/governance/pipelines/governance-pipeline.js` | Periodic full sweep |
| Companion manifest update | Manual edit of `ai-companion-manifest.json` | When adding new companion files |

### 4.3 Automation gaps

| Gap | Risk | Priority |
|-----|------|----------|
| Registry not auto-regenerated on JSDoc changes | Registry drifts after every component edit | HIGH |
| Component docs pages not CI/CD triggered | Published docs pages drift from registry | MEDIUM |
| Companion manifest not auto-updated | Manifest becomes stale as companions are added | MEDIUM |
| Snapshot companions not auto-refreshed (CDA-5 unbuilt) | CoinGecko data goes stale | MEDIUM |
| Validator scripts not CI/CD-gated | Naming/CSS violations slip through without pre-commit hooks | LOW–MEDIUM |

---

## 5. Redundancies

### 5.1 Catalog duplication

| Item A | Item B | Overlap | Recommendation |
|--------|--------|---------|---------------|
| `docs-guide/catalog/components-catalog.mdx` (generated) | `snippets/components/CATALOG.md` (manual) | Both list components | **Archive CATALOG.md** — generated catalog is authoritative |
| `workspace/plan/active/COMPONENT-GOVERNANCE/catalog.md` | `docs-guide/catalog/components-catalog.mdx` | Partially overlapping component inventory | **Keep** — plan catalog tracks governance decisions, not the same as published catalog. Clarify header to distinguish purpose. |

### 5.2 Documentation overlap

| Issue | Files | Recommendation |
|-------|-------|---------------|
| JSDoc spec appears in both `jsdoc-reference.md` (workspace) and `component-governance.mdx` (published) | Two sources can drift | `component-governance.mdx` is the published canonical; `jsdoc-reference.md` is a per-export mapping. Keep both but note relationship. |
| `component-framework-canonical.md` is deeper than `snippets/components/README.md` but not published | Authors see the shallow doc first | Either generate README from canonical or add a link in README pointing to workspace doc |

### 5.3 Archive items verified

| Path | Status |
|------|--------|
| `tools/scripts/archive/` | Properly archived — legacy migration scripts |
| `tools/scripts/x-archive/` | Properly archived |
| `v2/[locale]/docs-guide/x-deprecated/` | Properly archived |
| No x-archive in COMPONENT-GOVERNANCE | ✅ Active governance has no dead files |

---

## 6. AI vs Human Responsibilities

| Task | Current owner | Suitable for AI? | Notes |
|------|--------------|-----------------|-------|
| Write JSDoc headers for new components | Human | ✅ AI can draft | AI needs JSDoc spec context |
| Run registry generator | Human (manual) | ✅ Fully automatable | Should be post-commit hook |
| Generate component docs pages | Human (manual) | ✅ Fully automatable | Should follow registry generation |
| Validate naming conventions | Human (manual) | ✅ CI/CD or pre-commit | Already scripted, just not wired |
| Write companion JSON files for new pages | Human | ✅ AI can generate | Needs companion schema context |
| Refresh snapshot companions (CDA-5) | Unbuilt | ✅ Scripted refresh | Write once, run on schedule |
| Audit `@aiDiscoverability` gaps | AI-suitable | ✅ Can scan registry | 111 components currently empty |
| Update `ai-companion-manifest.json` | Human (manual) | 🔶 Semi-automatable | CDA-6 checker would automate validation; write still human |
| Layout governance audit | Human | 🔶 AI can flag violations | `component-layout-governance.js` exists |
| Decide category/subniche changes | Human | ❌ Requires judgement | Interactive decisions only |
| Archive deprecated components | Human | 🔶 AI can flag candidates | Final decision = human |

---

## 7. Findings & Recommendations

### P1 — High priority

| # | Finding | Recommendation |
|---|---------|---------------|
| P1-1 | **Registry not auto-triggered after JSDoc changes** — any component edit can silently drift the registry | Add a post-commit hook: `generate-component-registry.js` runs after any `snippets/components/**/*.jsx` change. Exit non-zero on errors. |
| P1-2 | **111/121 components have empty `aiDiscoverability`** — 91.7% of library is AI-invisible | Batch-fill `aiDiscoverability: 'none'` for components that have no external data. Reserve `snapshot`/`props-extracted` for data-fetching components. This is a 1-pass scripted fix. |
| P1-3 | **`CATALOG.md` in `snippets/components/` is manually maintained and redundant** | Archive to `components/x-archive/CATALOG.md`. The generated `components-catalog.mdx` is authoritative. |

### P2 — Medium priority

| # | Finding | Recommendation |
|---|---------|---------------|
| P2-1 | **Component docs pages not CI/CD-triggered** — `v2/*/documentation-guide/component-library/` pages can drift from registry | Add `generate-component-docs.js --check` to the CI catalog check workflow. Add `--write` to the generate workflow. |
| P2-2 | **Validators not CI/CD-gated** — naming/CSS/scope violations only caught manually | Wire `check-naming-conventions.js` and `check-mdx-component-scope.js` into PR CI. Low false-positive risk. |
| P2-3 | **Companion manifest is manually maintained** — no automation validates completeness | Build CDA-6 manifest checker: scan registry for `aiDiscoverability != ''` components → verify companion file exists → fail CI if manifest is stale. |
| P2-4 | **`component-framework-canonical.md` is unpublished** — taxonomy only accessible to agents with workspace access | Generate a trimmed taxonomy summary into `docs-guide/frameworks/component-governance.mdx` as a new section, or publish as standalone. |

### P3 — Low priority / housekeeping

| # | Finding | Recommendation |
|---|---------|---------------|
| P3-1 | **181 JSDoc `@param` count warnings** — all are `className`/`style` props missing `@param` entry | Add `@param {string} [className=''] - Optional CSS class override.` and `@param {object} [style={}] - Optional inline style override.` to all spread-accepting components. Can be scripted. |
| P3-2 | **`component-layout-decisions.mdx` last verified March 12** — page type taxonomy has grown | Audit against current page types in `docs.json`. Add missing page types. |
| P3-3 | **No unit tests for governance validators** — all validation is inline or CLI | Low urgency but consider adding smoke tests for `generate-component-registry.js` output shape validation. |
| P3-4 | **`workspace/plan/active/COMPONENT-GOVERNANCE/catalog.md` purpose unclear** | Add header note distinguishing it from `docs-guide/catalog/components-catalog.mdx`. |

---

## 8. Quick-Reference: Run Commands

```bash
# Regenerate registry (after JSDoc edits)
node tools/scripts/generators/components/library/generate-component-registry.js

# Validate only (no write)
node tools/scripts/generators/components/library/generate-component-registry.js --validate-only

# Strict: fail on warnings
node tools/scripts/generators/components/library/generate-component-registry.js --strict

# Regenerate component docs pages
node tools/scripts/generators/components/documentation/generate-component-docs.js --write

# Regenerate UI templates / snippets
node tools/scripts/generators/components/library/generate-ui-templates.js --write

# Regenerate components catalog MDX
node tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --fix

# Validate naming conventions
node tools/scripts/validators/components/library/check-naming-conventions.js

# Full governance pipeline
node tools/scripts/dispatch/governance/pipelines/governance-pipeline.js
```
