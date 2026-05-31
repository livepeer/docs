# Pipeline end-to-end verification

Generated 2026-05-25T13:27:09.194Z by `operations/scripts/validators/governance/pipelines/verify-pipeline-end-to-end.js`.

Per-dispatcher end-to-end run: each invoked with `--mode pr --dry-run`, exit code + output captured, result classified.

## Summary

| Status | Count |
|---|---|
| ✓ pass | 34 |
| ⚠ drift (pipeline working, stale state) | 18 |
| ◎ env-missing (requires secret) | 0 |
| ✗ fail | 0 |
| ⏱ timeout | 7 |
| ⏭ infra-skip (excluded from verification) | 6 |
| **Total** | 65 |

## ⏱ Timeouts — likely full-repo scans (verify manually)

- `operations/scripts/dispatch/content/brand/dispatch-brand-check.js` (brand)
- `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js` (brand)
- `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js` (brand)
- `operations/scripts/dispatch/governance/dispatch-governance-check.js` (governance)
- `operations/scripts/dispatch/governance/dispatch-governance-scan.js` (governance)
- `operations/scripts/dispatch/governance/dispatch-pipelines.js` (governance)
- `operations/scripts/dispatch/governance/dispatch-script-inventory.js` (governance)

## ⚠ Drift detected — pipelines working, repo has stale state

- `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js` (brand) — exit 1
- `operations/scripts/dispatch/content/brand/dispatch-voice-register.js` (brand) — exit 1
- `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js` (copy) — exit 1
- `operations/scripts/dispatch/content/copy/dispatch-copy-check.js` (copy) — exit 1
- `operations/scripts/dispatch/content/health/dispatch-health-check.js` (health) — exit 1
- `operations/scripts/dispatch/content/health/dispatch-health-repair.js` (health) — exit 1
- `operations/scripts/dispatch/content/health/dispatch-page-structure.js` (health) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js` (maintenance) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js` (maintenance) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js` (maintenance) — exit 1
- `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js` (maintenance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-governance-map.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-governance-sync.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-root-governance.js` (governance) — exit 1
- `operations/scripts/dispatch/governance/dispatch-workflow-governance.js` (governance) — exit 1

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
| `dispatch-copy-update.js` | meta | ✓ pass |
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
| `dispatch-folder-allowlist.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-governance-check.js` | meta | ⏱  timeout |
| `dispatch-governance-generate.js` | meta | ✓ pass |
| `dispatch-governance-map.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-governance-scan.js` | meta | ⏱  timeout |
| `dispatch-governance-sync.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-jsdoc-headers.js` | pipeline | ✓ pass |
| `dispatch-new-file-governance.js` | pipeline | ✓ pass |
| `dispatch-pipelines.js` | pipeline | ⏱  timeout |
| `dispatch-root-governance.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-script-inventory.js` | pipeline | ⏱  timeout |
| `dispatch-script-locations.js` | pipeline | ✓ pass |
| `dispatch-script-registry.js` | pipeline | ✓ pass |
| `dispatch-workflow-governance.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-workspace-retention.js` | pipeline | ✓ pass |

### health — 9 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-content-quality.js` | pipeline | ✓ pass |
| `dispatch-health-check.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-health-repair.js` | meta | ⚠ drift (pipeline working) |
| `dispatch-health-scan.js` | meta | ⏭ infra-skip |
| `dispatch-openapi-reference.js` | pipeline | ✓ pass |
| `dispatch-page-integrity.js` | pipeline | ✓ pass |
| `dispatch-page-rendering.js` | pipeline | ⏭ infra-skip |
| `dispatch-page-structure.js` | pipeline | ⚠ drift (pipeline working) |
| `dispatch-wcag.js` | pipeline | ✓ pass |

### maintenance — 13 dispatchers

| Dispatcher | Tier | Status |
|---|---|---|
| `dispatch-catalogs.js` | pipeline | ⚠ drift (pipeline working) |
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
| `dispatch-release-version.js` | pipeline | ✓ pass |
| `dispatch-sdk-clients.js` | pipeline | ✓ pass |
