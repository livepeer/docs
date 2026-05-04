# .github/ Audit Findings Report

> **Generated:** 2026-04-15
> **Thread:** GitHub Actions & Scripts Consolidation Audit
> **Scope:** All files in `.github/` — workflows, scripts, templates, documentation, governance
> **Method:** Full read of 170+ files across 5 parallel research agents

---

## Summary

14 findings across 3 severity tiers. The governance framework (11 locked decisions, 7-type taxonomy, dispatcher model) is well-designed. The gaps are execution: unmigrated scripts, stale documentation, naming convention stragglers.

| Severity | Count | Findings |
|---|---|---|
| P1 | 3 | F1, F3, F7 |
| P2 | 4 | F2, F4, F5, F12, F14 |
| P3 | 5 | F6, F8, F9, F10, F11 |

---

## Findings

### F1: Scripts Still in `.github/scripts/` (P1)

**Violates:** D-ACT-06 (migrate `.github/scripts/` to `operations/scripts/`)

**Affected files:**
- `.github/scripts/fetch-config-flags.js`
- `.github/scripts/fetch-exchanges-data.js`

**Target:**
- `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`
- `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`

**Reference surfaces requiring update:**
- `.github/workflows/update-config-flags.yml` (run: step)
- `.github/workflows/update-exchanges-data.yml` (run: step)
- `.github/workspace/actions-library/actions-audit.json` (scripts arrays)
- `.github/workspace/actions-library/integrators/maintenance/update-config-flags.mdx`
- `.github/workspace/actions-library/integrators/maintenance/update-exchanges-data.mdx`
- JSDoc `@scope` tags in both scripts

---

### F2: Concern Taxonomy Drift in Decisions Log (P2)

**Violates:** D-ACT-05, D-ACT-07

**Affected file:** `.github/workspace/decisions-log.mdx` (snapshot table, line ~77)

**Problem:** Snapshot table shows `integrations` with count 11 as standalone concern. Actual workflows use absorbed concerns (`copy`, `maintenance`, etc.) per D-ACT-07 (`automation` → `integrator`). The `integrations` concern was absorbed into the domain concern of the consuming pipeline.

**Fix:** Recount concern assignments from `actions-audit.json` and update the snapshot table.

---

### F3: 4 Workflows Break Naming Convention (P1)

**Violates:** D-ACT-04 (`type-concern-verb-name.yml`)

| Current name | Required name | Problem |
|---|---|---|
| `project-showcase-sync.yml` | `integrator-copy-update-showcase-submissions.yml` | No type prefix, no concern segment |
| `styles-governance.yml` | `remediator-brand-repair-style-tokens.yml` | Wrong type prefix |
| `update-config-flags.yml` | `integrator-maintenance-update-config-flags.yml` | No type prefix |
| `update-exchanges-data.yml` | `integrator-maintenance-update-exchanges-data.yml` | No type prefix |

---

### F4: 2 Auto-Commit Workflows Lack Concurrency Groups (P2)

**Violates:** Framework section 4.2 (concurrency required for auto-commit workflows)

**Affected files:**
- `.github/workflows/dispatch-governance-post-merge-sync.yml`
- `.github/workflows/integrator-copy-update-changelogs.yml`

---

### F5: Component Registry Generator Missing Verify Pair (P2)

**Violates:** Framework section 2 (generate/verify pairs)

**Gap:** `generator-maintenance-generate-component-registry.yml` exists but has no matching `validator-maintenance-check-component-registry.yml`.

**Note:** Creating the validator would change workflow logic. Documented as known gap for future work.

---

### F6: Duplicated Scaffolding in Concern Process-Docs (P3)

**Affected directories:**
- `.github/workspace/design/health/process-docs/` — identical to governance/
- `.github/workspace/design/maintenance/process-docs/` — identical to governance/
- `.github/workspace/design/copy/process-docs/` — identical to governance/

All contain copy-pasted governance audit.md and research.md. 4 of 6 report.md files are empty stubs.

---

### F7: 6 of 9 Documentation Surfaces Dead or Stale (P1)

| Surface | Status | Action |
|---|---|---|
| `.github/actions-registry.md` | Dead redirect | Delete |
| `.github/script-index.md` | Stale paths | Update or delete |
| `.github/actions-readme.mdx` | Empty skeleton | Delete |
| `.github/workspace/actions-library/README.md` | Empty (1 line) | Populate or delete |
| `.github/workflows/GOVERNANCE.md` | Stale gap numbers | Update |
| `.github/GOVERNANCE.md` | Stale decision count | Update |
| `.github/workspace/actions-library/summary.md` | **Current** | Keep |
| `.github/workspace/actions-library/catalog-index.mdx` | **Current** | Keep |
| `.github/workspace/framework-canonical.md` | **Current** | Keep |

---

### F8: 2 PR Templates With No Usage Guidance (P3)

**Affected files:**
- `.github/pull_request_template.md` — auto-loaded default, full governance gates
- `.github/pull-request-template-v2.md` — manual selection, layer classification + verifiability

Neither references the other or explains when to use which.

---

### F9: Archived augment-instructions.md Still in `.github/` (P3)

**Affected file:** `.github/augment-instructions.md`

File header says "Archived reference only" and points to `.augment/rules/`. Still present in `.github/`, should be moved to `x-archive/`.

---

### F10: Redundant docs-review Template in deprecated/ (P3)

**Affected files:**
- `.github/ISSUE_TEMPLATE/docs-review.yml` — active version
- `.github/ISSUE_TEMPLATE/deprecated/docs-review.yml` — near-identical copy

---

### F11: dep-CODEOWNERS Serves No Purpose (P3)

**Affected file:** `.github/dep-CODEOWNERS`

Marked "Historical" and "Do not use" in header. GitHub only reads `CODEOWNERS`, not `dep-CODEOWNERS`. No active replacement exists (repo is ownerless by design).

---

### F12: workflows/GOVERNANCE.md Gap Numbers Stale (P2)

**Affected file:** `.github/workflows/GOVERNANCE.md`

- States "51/52 workflows lack governance comment headers" — actual count needs rechecking
- States "48 missing actions-library documentation" — actions-library now has 41+ generated pages
- States "8 locked decisions" — actual count is 11

---

### F14: 15 Missing Remediator Mappings in Render Gate (P2)

**Affected file:** `operations/scripts/dispatch/governance/mdx-render-gate.js`

**Source:** `.github/workspace/render-gate-remediation-gap-report.md`

The `ERROR_TO_REMEDIATOR` lookup maps only 6/21 remediator scripts. 15 scripts are unregistered. 45 validators have zero mapping.

---

## Future Work Items (Not In Scope)

- F5: Create `validator-maintenance-check-component-registry.yml` (requires new workflow logic)
- Populate 5 pending concern design documents (health, brand, copy, discoverability, maintenance, data-importers)
- Consolidation of 45 → ~22 workflows via matrix dispatchers (D-ACT-03)
