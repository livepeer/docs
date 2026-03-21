# lpd CLI Audit

**Date**: 2026-03-21
**Version audited**: 0.2.0
**File**: `lpd` (Bash, 2,148 lines, repo root)
**Related plans**:
- `workspace/plan/active/SCRIPT-GOVERNANCE/plan.md` — three-tier taxonomy + Task 14 (`operations/` move)
- `workspace/plan/active/REPO-STRUCTURE-GOV/plan.md` — root restructure

---

## Status

| Area | Status |
|---|---|
| Path fixes (stale `tools/scripts/`, `tests/`) | ✅ Fixed 2026-03-21 |
| `tasks → workspace` alias | ✅ Already correct (V-WS.9) |
| `run-all.js` i18n path | ✅ Fixed 2026-03-21 |
| Documentation (`lpd-cli.mdx`) | ⚠️ Needs freshness gate |
| Deprecated locale docs | ⚠️ Need archiving |
| Self-update mechanism | ❌ Missing — see recommendations |

---

## What Was Fixed

### 1. Stale script paths in `lpd` (11 scripts)

All `tools/scripts/...` references updated to `operations/scripts/<type>/<concern>/<niche>/`:

| Old path | New path |
|---|---|
| `tools/scripts/sync-codex-skills.js` | `operations/scripts/automations/ai/agents/sync-codex-skills.js` |
| `tools/scripts/export-portable-skills.js` | `operations/scripts/automations/ai/agents/export-portable-skills.js` |
| `tools/scripts/generate-docs-guide-indexes.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` |
| `tools/scripts/generate-docs-guide-pages-index.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` |
| `tools/scripts/generate-docs-guide-components-index.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` |
| `tools/scripts/generate-ui-templates.js` | `operations/scripts/generators/components/library/generate-ui-templates.js` |
| `tools/scripts/generate-component-registry.js` | `operations/scripts/generators/components/library/generate-component-registry.js` |
| `tools/scripts/generate-component-docs.js` | `operations/scripts/generators/components/documentation/generate-component-docs.js` |
| `tools/scripts/generate-ai-sitemap.js` | `operations/scripts/generators/content/seo/generate-ai-sitemap.js` |
| `tools/scripts/orchestrators/repair-governance.js` | `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js` |
| `tools/scripts/remediators/components/repair-component-metadata.js` | `operations/scripts/remediators/components/library/repair-component-metadata.js` |
| `tools/scripts/remediators/content/sync-docs-paths.js` | `operations/scripts/remediators/content/repair/sync-docs-paths.js` |

### 2. Stale `tests/` paths in `lpd`

All `tests/...` references updated to `operations/tests/...`:

- `tests/run-all.js` → `operations/tests/run-all.js` (4 occurrences)
- `tests/integration/browser.test.js` → `operations/tests/integration/browser.test.js`
- `tests/integration/domain-pages-audit.js` → `operations/tests/integration/domain-pages-audit.js`
- `tests/integration/v2-wcag-audit.js` → `operations/tests/integration/v2-wcag-audit.js`
- `tests/integration/v2-link-audit.js` → `operations/tests/integration/v2-link-audit.js`
- `tests/unit/*.test.js` → `operations/tests/unit/*.test.js` (7 unit test refs)
- `tests/node_modules` → `operations/tests/node_modules` (doctor + setup)
- `cd tests && npm install` → `cd operations/tests && npm install`
- `tests/script-index.md` → `operations/tests/script-index.md` (git add path)
- `tests/reports/*` → `operations/tests/reports/*` (is_builtin_excluded pattern)

### 3. Stale group roots + mint-dev path

- `group_root tools`: `tools/scripts` → `operations/scripts`
- `group_root tests`: `tests` → `operations/tests`
- `group_root v2`: `tools/scripts/dev` → `tools/dev`
- `mint-dev.sh` path: `tools/scripts/mint-dev.sh` → `tools/dev/mint-dev.sh` (2 refs: help text + path var)

### 4. `operations/tests/run-all.js` — i18n test path

Added i18n test block earlier in this session used stale `tools/scripts/...` path:
- `tools/scripts/automations/content/language-translation/test/*.test.js`
- → `operations/scripts/automations/content/language-translation/test/*.test.js`

---

## Remaining Issues

### Documentation

| File | Status | Issue |
|---|---|---|
| `docs-guide/tooling/lpd-cli.mdx` | `status: draft`, `lastVerified: 2026-03-16` | Does not reflect `operations/` paths yet; no auto-update |
| `v2/cn/docs-guide/x-deprecated/lpd.md` | Stale locale copy | Archive with `git mv` |
| `v2/fr/docs-guide/x-deprecated/lpd.md` | Stale locale copy | Archive with `git mv` |

### `lpd-cli.mdx` specific gaps

The docs page still references `tools/scripts/...` and `tests/...` paths in examples. Any code block
showing script paths or `lpd ci` internals is now stale. Should be updated alongside a
`lastVerified` bump and status change from `draft` → `current`.

---

## Self-Update Recommendations

The core problem: `lpd` path references have now broken twice across two migrations
(three-tier restructure, then `operations/` move). There is no mechanism to catch this.

### Layer 1 — Lightweight: `validate-lpd-paths.js` (recommended first)

A small validator script that reads every `node .../*.js` and path existence check in `lpd`,
verifies each file exists on disk, and exits non-zero if any is missing.

- Add to `lpd doctor` output
- Run in CI (non-blocking initially, blocking after stabilisation)
- Location: `operations/scripts/validators/governance/repo/validate-lpd-paths.js`

This would have caught both migration breaks immediately.

### Layer 2 — Scope file

Create `tools/config/lpd-scope.json` listing every script `lpd` depends on:
```json
{
  "id": "lpd-cli",
  "sourceFile": "lpd",
  "docsFile": "docs-guide/tooling/lpd-cli.mdx",
  "scriptDeps": [
    "operations/scripts/automations/ai/agents/sync-codex-skills.js",
    "operations/scripts/generators/content/seo/generate-ai-sitemap.js",
    "..."
  ]
}
```
`validate-lpd-paths.js` reads this file instead of parsing bash. Easier to maintain.
When a script moves, updating the scope file is the contract.

### Layer 3 — Docs freshness gate

Add `docs-guide/tooling/lpd-cli.mdx` to the agent docs freshness registry.
If `lpd` (the file) changes, flag the docs page as needing review.

---

## Notes on the `tasks` Legacy Alias

`lpd tasks` → maps to `workspace/scripts` — intentional, correct per V-WS.9.
Not in `lpd help` or `lpd-cli.mdx`. Either document it as deprecated or remove it.
Low priority.
