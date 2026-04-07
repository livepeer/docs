# Component JSDoc Debt — Root Cause + Remediation Plan

## Problem

The CI check `check-docs-guide-catalogs / catalog-checks` fails on every PR because component files are missing required JSDoc annotations. The check detects but does not fix. There is no self-healing workflow.

## Root causes

### 1. Validator uses stale tag names

`tools/lib/governance/component-governance-utils.js` (~line 38) checks for:

```js
const GOVERNANCE_FIELDS = ['component', 'type', 'subniche', 'status', 'description', 'accepts'];
```

The canonical framework (`workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`) defines:

| Old name (in validator) | Canonical name | Status |
|---|---|---|
| `@type` | `@category` | Renamed |
| `@subniche` | `@subcategory` | Renamed |
| `@accepts` | — | Removed |

The validator is checking for tags that don't match what the framework says. Components tagged with `@category` still fail because the validator looks for `@type`.

### 2. Repair script only fixes 2 of 6 tags

`operations/scripts/remediators/components/library/repair-component-metadata.js` auto-fixes:
- `@component` — from export name
- `@category` — from folder path

It could also derive:
- `@subcategory` — from subfolder name (e.g., `elements/links/` → `links`)
- `@status` — default `stable` for existing components, `experimental` for new

It cannot derive (needs human):
- `@description` — one-line explanation of what the component does
- `@dataSource` — only for integrator components
- `@aiDiscoverability` — only for hook-using components

### 3. No self-healing CI workflow

The existing pattern is: check → fail → block. It should be: check → auto-fix what's derivable → commit back to PR → report only human-required items.

`repair-component-metadata.js --fix` exists but no workflow calls it. The `generate-component-registry.yml` workflow generates the registry but doesn't run the repair.

## Remediation

### Fix 1: Update validator schema

In `tools/lib/governance/component-governance-utils.js`:
- `'type'` → `'category'`
- `'subniche'` → `'subcategory'`
- Remove `'accepts'`
- Update all parsing logic that reads these tags

### Fix 2: Expand repair script

In `repair-component-metadata.js`, add:
- `@subcategory` derivation from subfolder name
- `@status` defaulting (`stable` for existing, `experimental` for new)
- `@description` scaffolding with `TODO: add description` placeholder (tagged `[NEEDS_HUMAN]`)

### Fix 3: Wire self-healing into CI

Add a job to `docs-catalog-governance.yml` that:
1. Runs `repair-component-metadata.js --fix --staged` on PR
2. Commits auto-fixable changes back to the PR branch
3. Reports `[NEEDS_HUMAN]` items as advisory (not blocking)

### Fix 4: Burn down existing debt

Run expanded repair script across all 117 components, then manually write the ~117 `@description` lines and the conditional tags for integrator/hook-using components. Commit in batches by category folder.

## Files

| File | What to change |
|---|---|
| `tools/lib/governance/component-governance-utils.js` | Fix tag names, remove `@accepts` |
| `operations/scripts/remediators/components/library/repair-component-metadata.js` | Add `@subcategory`, `@status`, `@description` scaffolding |
| `.github/workflows/docs-catalog-governance.yml` | Add self-healing job |
| `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` | Verify canonical is still accurate |
| `docs-guide/config/component-registry.json` | Regenerate after fixes |
