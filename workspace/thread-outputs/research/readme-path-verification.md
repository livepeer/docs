# README.md Path Verification Report

Generated: 2026-03-26

Source file: `/README.md` (243 lines)

---

## Path Verification Table

| # | Path | Line(s) | Exists? | Notes |
|---|------|---------|---------|-------|
| 1 | `v2/` | 17, 197 | Yes | |
| 2 | `snippets/` | 17, 199 | Yes | |
| 3 | `docs.json` | 18 | Yes | |
| 4 | `lpd` (CLI) | 19, 37-38, 52-54, 72, 85, 144 | No (root) | Actual location: `tools/lpd`. Lines 37, 46 use `bash lpd` which would fail from repo root. Lines 38, 52-54, 72, 85, 144 reference bare `lpd` (requires PATH setup). |
| 5 | `.githooks/` | 20, 202 | Yes | |
| 6 | `tests/` | 20, 201 | Yes | |
| 7 | `docs-guide/` | 21, 104, 205 | Yes | |
| 8 | `tools/dev/ensure-mint-watcher-patch.sh` | 62-63, 73 | Yes | |
| 9 | `operations/scripts/mint-dev.sh` | 72 | **No** | Actual location: `tools/dev/mint-dev.sh` |
| 10 | `snippets/components/` | 80 | Yes | |
| 11 | `docs-guide/source-of-truth-guide.mdx` | 108 | Yes | |
| 12 | `docs-guide/policies/source-of-truth-policy.mdx` | 109 | Yes | |
| 13 | `docs-guide/policies/generated-artifact-and-hook-governance.mdx` | 110 | Yes | |
| 14 | `docs-guide/policies/v2-folder-governance.mdx` | 111 | Yes | |
| 15 | `docs-guide/policies/ownerless-governance.mdx` | 112 | Yes | |
| 16 | `docs-guide/features/feature-map.mdx` | 113 | Yes | |
| 17 | `docs-guide/features/architecture-map.mdx` | 114 | Yes | |
| 18 | `docs-guide/tooling/lpd-cli.mdx` | 115 | Yes | |
| 19 | `docs-guide/policies/quality-gates.mdx` | 116 | Yes | |
| 20 | `docs-guide/policies/audit-system-overview.mdx` | 117 | Yes | |
| 21 | `docs-guide/policies/skill-pipeline-map.mdx` | 118 | Yes | |
| 22 | `docs-guide/policies/cleanup-quarantine-policy.mdx` | 119 | Yes | |
| 23 | `docs-guide/policies/component-layout-decisions.mdx` | 120 | Yes | |
| 24 | `docs-guide/features/automations.mdx` | 121, 218 | Yes | |
| 25 | `docs-guide/frameworks/content-system.mdx` | 122 | Yes | |
| 26 | `docs-guide/features/data-integrations.mdx` | 123 | Yes | |
| 27 | `docs-guide/features/ui-system.mdx` | 124 | Yes | |
| 28 | `docs-guide/tooling/ai-tools.mdx` | 41, 125 | Yes | |
| 29 | `docs-guide/catalog/ui-templates.mdx` | 126 | Yes | |
| 30 | `docs-guide/catalog/pages-catalog.mdx` | 127 | Yes | |
| 31 | `docs-guide/catalog/components-catalog.mdx` | 128 | Yes | |
| 32 | `docs-guide/catalog/scripts-catalog.mdx` | 129 | Yes | |
| 33 | `docs-guide/catalog/workflows-catalog.mdx` | 130 | Yes | |
| 34 | `docs-guide/catalog/templates-catalog.mdx` | 131 | Yes | |
| 35 | `v2/resources/documentation-guide/style-guide.mdx` | 136 | Yes | |
| 36 | `v2/resources/documentation-guide/component-library/` | 137 | Yes | |
| 37 | `.githooks/install.sh` | 141 | Yes | |
| 38 | `.codex/task-contract.yaml` | 151 | Yes | |
| 39 | `operations/scripts/create-codex-pr.js` | 162 | **No** | Actual location: `operations/scripts/dispatch/ai/codex/create-codex-pr.js` |
| 40 | `.codex/pr-body.generated.md` | 165 | **No** | Generated output file; only exists after running `create-codex-pr.js`. Not a stale reference per se, but the generating script path (line 162) is also wrong. |
| 41 | `contribute/CONTRIBUTING/README.md` | 170 | Yes | |
| 42 | `contribute/CONTRIBUTING/GIT-HOOKS.md` | 171 | Yes | |
| 43 | `.githooks/pre-commit` | 177 | Yes | |
| 44 | `.githooks/pre-push` | 156 | Yes (implicit) | Referenced in prose, not as a link. File exists at `.githooks/pre-push`. |
| 45 | `tests/run-pr-checks.js` | 157 | **No** | Actual location: `operations/tests/run-pr-checks.js` |
| 46 | `.github/workflows/test-suite.yml` | 184 | Yes | |
| 47 | `.github/workflows/test-v2-pages.yml` | 185 | Yes | |
| 48 | `tests/WHEN-TESTS-RUN.md` | 190 | **No** | Actual location: `operations/tests/WHEN-TESTS-RUN.md` |
| 49 | `tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` | 191 | **No** | Actual location: `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` |
| 50 | `v1/` | 198 | Yes | |
| 51 | `operations/scripts/` | 200 | Yes | |
| 52 | `.github/workflows/` | 203 | Yes | |
| 53 | `api/` | 204 | Yes | |
| 54 | `v2/resources/documentation-guide/automations-workflows.mdx` | 219 | Yes | |
| 55 | `tools/ai-rules/` | 223 | **No** | Actual location: `ai-tools/ai-rules/` |
| 56 | `AGENTS.md` | 224 | Yes | |
| 57 | `.github/copilot-instructions.md` | 225 | Yes | |
| 58 | `.claude/CLAUDE.md` | 225 | Yes | |
| 59 | `.cursor/rules/repo-governance.mdc` | 225 | Yes | |
| 60 | `.windsurf/rules/repo-governance.md` | 225 | Yes | |
| 61 | `docs-guide/policies/agent-governance-framework.mdx` | 226 | Yes | |
| 62 | `docs-guide/policies/root-allowlist-governance.mdx` | 226 | Yes | |
| 63 | `operations/scripts/generate-docs-guide-indexes.js` | 238 | **No** | Actual location: `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` |
| 64 | `operations/scripts/generate-docs-guide-pages-index.js` | 239 | **No** | Actual location: `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` |
| 65 | `operations/scripts/generate-docs-guide-components-index.js` | 240 | **No** | Actual location: `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` |
| 66 | `tests/unit/script-docs.test.js` | 241 | **No** | Actual location: `operations/tests/unit/script-docs.test.js` |

---

## Summary

**55 of 66 paths resolve. 11 are stale/missing.**

### Stale paths breakdown

| Category | Count | Details |
|----------|-------|---------|
| `tests/` should be `operations/tests/` | 3 | Lines 157, 190, 191 (and line 241) |
| `operations/scripts/` sub-path wrong | 4 | Lines 162, 238, 239, 240 - scripts moved into subdirectories |
| Directory renamed/moved | 1 | `tools/ai-rules/` -> `ai-tools/ai-rules/` (line 223) |
| Wrong parent directory | 1 | `operations/scripts/mint-dev.sh` -> `tools/dev/mint-dev.sh` (line 72) |
| CLI path | 1 | `lpd` referenced as root-level; actual file at `tools/lpd` (line 19+) |
| Generated output (conditional) | 1 | `.codex/pr-body.generated.md` - only exists after script execution |

### Root cause patterns

1. **`tests/` -> `operations/tests/` migration**: Three paths reference `tests/` at root level, but the actual test files live under `operations/tests/`. The root `tests/` directory does exist but does not contain these specific files.

2. **Script reorganisation into subdirectories**: Four scripts under `operations/scripts/` were moved into deeper subdirectory structures (e.g., `generators/governance/catalogs/`, `dispatch/ai/codex/`) but the README still references the flat paths.

3. **`tools/ai-rules/` -> `ai-tools/ai-rules/`**: The AI rules directory was relocated from `tools/` to `ai-tools/`.

4. **`mint-dev.sh` location**: Referenced as `operations/scripts/mint-dev.sh` but lives at `tools/dev/mint-dev.sh`.

### Corrections needed

The following README lines need path updates:

| Line | Current path | Corrected path |
|------|-------------|----------------|
| 72 | `operations/scripts/mint-dev.sh` | `tools/dev/mint-dev.sh` |
| 157 | `tests/run-pr-checks.js` | `operations/tests/run-pr-checks.js` |
| 162 | `operations/scripts/create-codex-pr.js` | `operations/scripts/dispatch/ai/codex/create-codex-pr.js` |
| 190 | `tests/WHEN-TESTS-RUN.md` | `operations/tests/WHEN-TESTS-RUN.md` |
| 191 | `tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` | `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` |
| 223 | `tools/ai-rules/` | `ai-tools/ai-rules/` |
| 238 | `operations/scripts/generate-docs-guide-indexes.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` |
| 239 | `operations/scripts/generate-docs-guide-pages-index.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` |
| 240 | `operations/scripts/generate-docs-guide-components-index.js` | `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` |
| 241 | `tests/unit/script-docs.test.js` | `operations/tests/unit/script-docs.test.js` |
