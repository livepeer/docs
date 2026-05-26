# Pipeline end-to-end verification

Generated 2026-05-25T11:41:46.543Z by `operations/scripts/validators/governance/pipelines/verify-pipeline-end-to-end.js`.

Per-dispatcher end-to-end run: each invoked with `--mode pr --dry-run`, exit code + output captured, result classified.

## Summary

| Status | Count |
|---|---|
| ✓ pass | 33 |
| ⚠ drift (pipeline working, stale state) | 13 |
| ◎ env-missing (requires secret) | 1 |
| ✗ fail | 6 |
| ⏱ timeout | 6 |
| ⏭ infra-skip (excluded from verification) | 6 |
| **Total** | 65 |

## ✗ Failures — pipelines with real bugs

### `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`

- **Concern:** copy · **Tier:** meta · **Exit:** 1

Last 400 chars of output:
```
    at Module._load (node:internal/modules/cjs/loader:1192:37)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.22.2

```

### `operations/scripts/dispatch/content/health/dispatch-health-repair.js`

- **Concern:** health · **Tier:** meta · **Exit:** 1

Last 400 chars of output:
```
 matching v2 docs.json navigation files to audit.
ℹ️  Staged mode with no matching files; leaving existing reports unchanged.
repair-wcag (dry-run): would apply 0 fix(es). Blocking remaining: 0. Report: workspace/reports/health/wcag/wcag-repair.md

=== dispatch-content-quality.js (--mode manual) ===
repair-content-quality: no target files.
❌ Unknown argument: --staged
❌ Unknown argument: --staged

```

### `operations/scripts/dispatch/content/health/dispatch-page-structure.js`

- **Concern:** health · **Tier:** pipeline · **Exit:** 1

Last 400 chars of output:
```
(s); found 0 finding(s); fixed 0; remaining 0.

✅ MDX-safe markdown validation passed (0 files checked)
⏭️ Generated file banner enforcement skipped in staged mode (no relevant staged files).
lint-structure: no files to check.
check-anchor-usage failed: Unknown argument: --staged
Description quality validator failed: Unknown argument: --staged
check-page-endings failed: Unknown argument: --staged

```

### `operations/scripts/dispatch/content/maintenance/dispatch-release-version.js`

- **Concern:** maintenance · **Tier:** pipeline · **Exit:** 1

Last 400 chars of output:
```
Unsupported argument: --check

```

### `operations/scripts/dispatch/governance/dispatch-pipelines.js`

- **Concern:** governance · **Tier:** pipeline · **Exit:** 1

Last 400 chars of output:
```
Usage: node operations/scripts/dispatch/governance/pipelines/governance-pipeline.js [--dry-run] [--auto-commit] [--report-only] [--strict] [--staged|--files <path[,path...]>|--full]
Script-governance fix mode requires explicit scope. Use --staged or --files for bounded repair.

```

### `operations/scripts/dispatch/governance/dispatch-workspace-retention.js`

- **Concern:** governance · **Tier:** pipeline · **Exit:** 1

Last 400 chars of output:
```
audit-tasks-folders failed: --audit-output-dir must resolve under workspace/: workspace/reports/repo-ops

```

## ⏱ Timeouts — likely full-repo scans (verify manually)

- `operations/scripts/dispatch/content/brand/dispatch-brand-check.js` (brand)
- `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js` (brand)
- `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js` (brand)
- `operations/scripts/dispatch/governance/dispatch-governance-check.js` (governance)
- `operations/scripts/dispatch/governance/dispatch-governance-scan.js` (governance)
- `operations/scripts/dispatch/governance/dispatch-script-inventory.js` (governance)

## ⚠ Drift detected — pipelines working, repo has stale state

- `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-voice-register.js` (brand) — exit 1
- `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js` (copy) — exit 1
- `operations/scripts/dispatch/content/copy/dispatch-copy-check.js` (copy) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js` (maintenance) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js` (maintenance) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js` (maintenance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-governance-map.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-governance-sync.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-root-governance.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-workflow-governance.js` (governance) — exit 1

## ◎ Env-missing — requires CI secret or local .env

- `operations/scripts/dispatch/content/health/dispatch-health-check.js` (health)

## All dispatchers by concern

### brand — 10 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-banned-words.js` | pipeline | ✓ pass |
| `dispatch-brand-check.js` | meta | ⏱  timeout |
| `dispatch-brand-repair.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-brand-scan.js` | meta | ⏱  timeout |
| `dispatch-em-dashes.js` | pipeline | ✓ pass |
| `dispatch-grammar-en-gb.js` | pipeline | ⏱  timeout |
| `dispatch-proper-nouns.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-spelling.js` | pipeline | ✓ pass |
| `dispatch-style-tokens.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-voice-register.js` | pipeline | ⚠ drift (pipeline working) |

### copy — 8 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-canonical-sync.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-changelogs.js` | pipeline | ✓ pass |
| `dispatch-copy-check.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-copy-repair.js` | meta | ✓ pass |
| `dispatch-copy-update.js` | meta | ✗ fail (exit 1) |
| `dispatch-ownerless-language.js` | pipeline | ✓ pass |
| `dispatch-showcase.js` | pipeline | ✓ pass |
| `dispatch-social-feeds.js` | pipeline | ✓ pass |

### discoverability — 8 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-ai-sitemap.js` | pipeline | ✓ pass |
| `dispatch-companions.js` | pipeline | ✓ pass |
| `dispatch-discoverability-check.js` | meta | ✓ pass |
| `dispatch-discoverability-generate.js` | meta | ✓ pass |
| `dispatch-discoverability-repair.js` | meta | ⏭ infra-skip |
| `dispatch-llms-files.js` | pipeline | ✓ pass |
| `dispatch-og-images.js` | pipeline | ✓ pass |
| `dispatch-seo-metadata.js` | pipeline | ⏭ infra-skip |

### governance — 17 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-action-docs.js` | pipeline | ✓ pass |
| `dispatch-codex-compliance.js` | pipeline | ✓ pass |
| `dispatch-folder-allowlist.js` | pipeline | ✓ pass |
| `dispatch-governance-check.js` | meta | ⏱  timeout |
| `dispatch-governance-generate.js` | meta | ✓ pass |
| `dispatch-governance-map.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-governance-scan.js` | meta | ⏱  timeout |
| `dispatch-governance-sync.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-jsdoc-headers.js` | pipeline | ✓ pass |
| `dispatch-new-file-governance.js` | pipeline | ✓ pass |
| `dispatch-pipelines.js` | pipeline | ✗ fail (exit 1) |
| `dispatch-root-governance.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-script-inventory.js` | pipeline | ⏱  timeout |
| `dispatch-script-locations.js` | pipeline | ✓ pass |
| `dispatch-script-registry.js` | pipeline | ✓ pass |
| `dispatch-workflow-governance.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-workspace-retention.js` | pipeline | ✗ fail (exit 1) |

### health — 9 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-content-quality.js` | pipeline | ✓ pass |
| `dispatch-health-check.js` | meta | ◎ env-missing (requires secret) |
| `dispatch-health-repair.js` | meta | ✗ fail (exit 1) |
| `dispatch-health-scan.js` | meta | ⏭ infra-skip |
| `dispatch-openapi-reference.js` | pipeline | ✓ pass |
| `dispatch-page-integrity.js` | pipeline | ✓ pass |
| `dispatch-page-rendering.js` | pipeline | ⏭ infra-skip |
| `dispatch-page-structure.js` | pipeline | ✗ fail (exit 1) |
| `dispatch-wcag.js` | pipeline | ✓ pass |

### maintenance — 13 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-catalogs.js` | pipeline | ✓ pass |
| `dispatch-component-registry.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-config-flags.js` | pipeline | ✓ pass |
| `dispatch-contract-addresses.js` | pipeline | ⏭ infra-skip |
| `dispatch-contract-shadow.js` | pipeline | ✓ pass |
| `dispatch-docs-index.js` | pipeline | ✓ pass |
| `dispatch-exchanges-data.js` | pipeline | ✓ pass |
| `dispatch-large-assets.js` | pipeline | ✓ pass |
| `dispatch-maintenance-check.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-maintenance-generate.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-maintenance-update.js` | meta | ⏭ infra-skip |
| `dispatch-release-version.js` | pipeline | ✗ fail (exit 1) |
| `dispatch-sdk-clients.js` | pipeline | ✓ pass |
