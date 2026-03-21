# Component Governance — Pipeline Improvement Subplan

> **Parent audit**: [../Audits/pipeline-audit.md](../Audits/pipeline-audit.md)
> **Date**: 2026-03-21
> **Branching**: All executable work runs on `docs-v2-dev`. CI/CD changes commit to main.
> **Owner**: AI agent — human checkpoint at phase boundaries.

---

## Pre-work: CI path mismatch — CORRECTED AND RESOLVED

> **Correction (2026-03-21)**: The original finding below was WRONG in its direction.
> `operations/scripts/` IS the correct path for all scripts. The stale path was
> `tools/scripts/` — used by `check-docs-guide-catalogs.yml`, `generate-docs-guide-catalogs.yml`,
> `check-ai-companions.yml`, and `generate-ai-companions.yml`. These were fixed as part of P1-C
> execution. The `operations/scripts/` references in `content-health.yml` and `test-suite.yml`
> were already correct and did NOT need changing.

~~**Finding**: `.github/workflows/content-health.yml` and `test-suite.yml` reference `operations/scripts/…` paths, but all scripts live under `tools/scripts/…`. These CI steps silently fail or skip.~~ _(This finding was incorrect — see correction above.)_

---

## Phase 1 — Critical gaps (no code changes, no CI required)

**Goal**: Close the three P1 audit items. Can execute immediately on `docs-v2-dev`.

### P1-A · Batch-fill `aiDiscoverability` field (111 components)

**Problem**: 91.7% of components have an empty `aiDiscoverability` field in their JSDoc. The registry captures and publishes this field but most components never get the value.

**Approach**: Script-assisted batch fill. Two rules:
- Components that fetch external data or render dynamic/embeddable content → already manually tagged (`snapshot` or `props-extracted`)
- All other components → fill with `none` (explicitly opted out, not missing)

**Execution steps**:
1. Run: `node tools/scripts/generators/components/library/generate-component-registry.js --validate-only`
   — Confirms baseline of 121 components, 10 with aiDiscoverability set.
2. Write a one-shot script (or use the Agent) to add `@aiDiscoverability none` to the JSDoc block of every export that currently has an empty `aiDiscoverability` field in the registry. Target: `snippets/components/**/*.jsx` — only exports where `aiDiscoverability === ''`.
3. Exceptions — do NOT fill `none` for these (already tagged or intentionally deferred):
   - `CoinGeckoExchanges` → `snapshot`
   - `MarkdownEmbed` → `snapshot`
   - `ShowcaseCards` → `props-extracted`
   - `SearchTable` → `props-extracted`
   - `TwitterTimeline` → `none` (already set)
   - `CardCarousel`, `ScrollBox`, `ScrollableDiagram`, `DownloadButton`, `FocusableScrollRegions` → `none` (already set)
4. Regenerate registry: `node tools/scripts/generators/components/library/generate-component-registry.js`
5. Verify: `node -e "const r=require('./docs-guide/component-registry.json'); console.log('empty:', r.components.filter(c=>!c.aiDiscoverability).length);"` → expect 0.

**Acceptance**: Registry shows 0 empty `aiDiscoverability` fields. All 121 components have an explicit value.

**Commit**: `feat(components): batch-fill @aiDiscoverability none for 111 ungoverned components`

---

### P1-B · Archive `snippets/components/CATALOG.md`

**Problem**: A manually-maintained `CATALOG.md` exists in `snippets/components/` alongside the auto-generated `docs-guide/catalog/components-catalog.mdx`. The manual file can drift and creates confusion about which is authoritative.

**Execution steps**:
1. Read `snippets/components/CATALOG.md` — confirm it contains no unique information not in the registry or generated catalog.
2. `git mv snippets/components/CATALOG.md snippets/components/x-archive/CATALOG.md`
3. Update `snippets/components/README.md` — remove any link to `CATALOG.md`, add link to `docs-guide/catalog/components-catalog.mdx`.
4. Verify no `v2/` or `docs-guide/` pages import or reference `CATALOG.md`.

**Acceptance**: `CATALOG.md` moved to x-archive, README updated, no broken references.

**Commit**: `chore(components): archive manual CATALOG.md — generated catalog is authoritative`

---

### P1-C · Add registry CI workflow + fix stale `tools/scripts/` paths — COMPLETED

> **Correction (2026-03-21)**: The original P1-C was based on a wrong finding. Corrected task:
> Fix stale `tools/scripts/` references (not `operations/scripts/`) in 4 workflows,
> add new `generate-component-registry.yml`, and add `--validate-only` to `check-docs-guide-catalogs.yml`.

**Actual files fixed**:
- `.github/workflows/check-docs-guide-catalogs.yml` — fixed paths, added registry check step
- `.github/workflows/generate-docs-guide-catalogs.yml` — fixed paths
- `.github/workflows/check-ai-companions.yml` — fixed paths, added npm install
- `.github/workflows/generate-ai-companions.yml` — fixed paths, added npm install
- `.github/workflows/generate-component-registry.yml` — NEW: auto-generates registry on main push

**Status**: DONE — committed as part of P1-C execution.

---

## Phase 2 — Automation improvements (CI/CD changes required)

**Goal**: Wire soft governance checks into CI/CD so violations are caught without manual runs.
**Pre-requisite**: Phase 1-C (path fixes) must be complete first.

### P2-A · Wire registry validation into CI as non-blocking check

**Current state**: `content-health.yml` already runs `generate-component-registry.js --validate-only` with `continue-on-error: true`. After Phase 1-C fixes the path, this should start working.

**Action**: After P1-C — verify the CI step actually passes. If it fails, investigate. No new CI changes needed unless the step is absent from some workflows.

**Additional**: Add `--validate-only` run to `check-docs-guide-catalogs.yml` so the registry is validated on every PR, not just content-health runs.

**Acceptance**: `generate-component-registry.js --validate-only` runs and reports in PR CI. Failures are visible (not silently skipped).

---

### P2-B · Wire component docs pages into CI/CD

**Current state**: `v2/*/resources/documentation-guide/component-library/*.mdx` pages are generated by `generate-component-docs.js --write` but this is never run in CI. Pages can drift from the registry.

**Execution steps**:
1. Add a `--check` mode to `generate-component-docs.js` (if not already present) that exits non-zero if output would differ from current files.
2. Add check step to `check-docs-guide-catalogs.yml`:
   ```yaml
   - name: Check component docs pages are current
     run: node tools/scripts/generators/components/documentation/generate-component-docs.js --check
   ```
3. Add write step to `generate-docs-guide-catalogs.yml`:
   ```yaml
   - name: Regenerate component docs pages
     run: node tools/scripts/generators/components/documentation/generate-component-docs.js --write
   ```

**Acceptance**: CI fails on PR if component docs pages are stale. CI auto-regenerates them on main push.

---

### P2-C · Build CDA-6 companion manifest checker

**Current state**: `docs-guide/catalog/ai-companion-manifest.json` is manually maintained. No script validates that it's consistent with the registry's `aiDiscoverability` fields.

**What it needs to do**:
1. Read `component-registry.json` — collect all components where `aiDiscoverability` is `snapshot` or `props-extracted`
2. Read `ai-companion-manifest.json` — collect all `companions[].sourceComponent` values
3. Cross-reference: flag any component with `snapshot`/`props-extracted` that has no manifest entry
4. Also flag: any companion path that doesn't exist on disk
5. Mode flags: `--check` (exit non-zero on issues), `--report` (print findings)

**Script location**: `tools/scripts/validators/governance/ai/check-companion-manifest.js`

**CI integration** (after build):
- Add to `check-ai-companions.yml` (already exists and checks glossary companions)
- Add step: `run: node tools/scripts/validators/governance/ai/check-companion-manifest.js --check`

**Acceptance**: Script exists, passes on current state, fails when a component has `snapshot`/`props-extracted` but no manifest entry.

---

### P2-D · Publish component taxonomy to docs-guide

**Current state**: `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` contains the full taxonomy (categories, sub-niches, decision rules) but is not published or accessible to docs-guide-aware agents.

**Options** (choose one — needs user decision):

| Option | Effort | Outcome |
|--------|--------|---------|
| A: Generate a summary section in `component-governance.mdx` from the canonical | Medium | Published, always in sync |
| B: Move canonical to `docs-guide/frameworks/` and link from workspace | Low | Published as-is, workspace link updated |
| C: Write a new `docs-guide/frameworks/component-taxonomy.mdx` | Medium | Clean separation from governance rules |

**Recommendation**: Option B — least disruption, maintains the workspace as working plan location, makes content immediately accessible.

**Execution steps (Option B)**:
1. Copy `component-framework-canonical.md` to `docs-guide/frameworks/component-framework-canonical.mdx` (as MDX)
2. Add frontmatter: `title`, `description`, `pageType: reference`
3. Add to `docs.json` navigation under `docs-guide/frameworks/`
4. Update workspace file header to note it's also published at the above path
5. Add to generated indexes

**Acceptance**: `docs-guide/frameworks/component-framework-canonical.mdx` exists, is navigable, and is accurate.

---

## Phase 3 — Housekeeping (low effort, low risk)

### P3-A · Fix 181 `@param` warnings (className/style spread props)

**Problem**: Every component that accepts `className` and `style` via spread props (`...rest`) is missing `@param` entries for them. This generates 181 warnings in registry validation.

**Pattern**: Add to every affected JSDoc:
```js
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
```

**Execution**: Script-assisted. The registry's warning list identifies every affected file/export. Write a one-pass script that reads each file, finds JSDoc blocks with the warning, and inserts the two missing `@param` lines before the closing `*/`.

**Note**: This is cosmetic — warnings don't block registry generation (since Phase 1's separation of errors/warnings). Execute when convenient, not urgent.

**Acceptance**: `generate-component-registry.js --validate-only` shows 0 warnings (or only intentional ones).

---

### P3-B · Re-verify `component-layout-decisions.mdx`

**Problem**: Last verified 2026-03-12. Page type taxonomy has grown since then. Missing page types may have outdated layout contracts.

**Execution steps**:
1. Read `docs-guide/policies/component-layout-decisions.mdx`
2. Extract list of page types covered
3. Cross-reference against `docs.json` `pageType` values currently in use
4. For any missing page type: draft layout contract (required sections, approved/avoid components)
5. Update `component-layout-decisions.mdx`

**Acceptance**: Every page type in active use has an entry. `lastVerified` updated to 2026-03-21.

---

### P3-C · Clarify `workspace/plan/active/COMPONENT-GOVERNANCE/catalog.md` header

**Problem**: The plan-phase `catalog.md` could be confused with the generated `docs-guide/catalog/components-catalog.mdx`. No header explains the distinction.

**Execution**: Add a 3-line note at the top of `catalog.md`:
```md
> **Note**: This is a plan-phase governance snapshot, not the published component catalog.
> For the authoritative published catalog see: `docs-guide/catalog/components-catalog.mdx`
> This file tracks governance decisions and migration state — it is NOT auto-generated.
```

**Acceptance**: Header note added, committed.

---

## Execution order

```
Phase 1-C  →  Phase 1-A  →  Phase 1-B
     ↓
Phase 2-A  →  Phase 2-B  →  Phase 2-C  →  Phase 2-D
     ↓
Phase 3-A  →  Phase 3-B  →  Phase 3-C
```

Phase 1-C first because it unblocks all Phase 2 CI verification. Phase 1-A and 1-B are independent and can run in parallel with 1-C.

---

## Checkpoints

| After | Verify |
|-------|--------|
| Phase 1 | `aiDiscoverability` = 0 empty; CATALOG.md in x-archive; CI paths fixed |
| Phase 2 | CI passes component registry validation on PR; docs pages in CI; CDA-6 checker live |
| Phase 3 | 0 registry warnings; layout decisions doc current; catalog.md disambiguated |

---

## Human-only decisions

- **P2-D option** (A/B/C) — which approach to publish the taxonomy
- **Phase 3-A** timing — low priority, may defer until a full JSDoc cleanup sprint
- **Any new `@aiDiscoverability` values** for components that become data-fetching in future
