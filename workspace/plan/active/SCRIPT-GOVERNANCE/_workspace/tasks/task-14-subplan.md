# Task 14 — Root Restructure: `/operations` Subplan

> **Type**: Execution sub-plan
> **Date**: 2026-03-21
> **Prerequisite**: Tasks 1–13c complete, scripts branch synced with docs-v2-dev
> **High-risk task** — touches 8+ surfaces, ~300+ path references, allowlist, pre-commit hook, all CI workflows

---

## What moves

```
BEFORE                          AFTER
──────────────────────────────  ──────────────────────────────────
tools/scripts/  →               operations/scripts/
  audits/                         audits/
  generators/                     generators/
  validators/                     remediators/
  remediators/                     dispatch/
  dispatch/                       automations/
  automations/                    config/
  config/                         x-archive/
  x-archive/

tests/          →               operations/tests/
  unit/                           unit/
  integration/                    integration/
  reports/                        reports/
  utils/                          utils/
  run-all.js                      run-all.js
  package.json                    package.json
```

**What stays in `tools/`:** `tools/lib/`, `tools/config/`, `tools/dev/`, `tools/notion/`, `tools/vscode/`

**`.allowlist` change:** `tests` → `operations` (keep `tools`)

---

## Surface audit (from pre-execution grep — 2026-03-21)

| Surface | Files | Ref count | Risk |
|---------|-------|-----------|------|
| `tools/package.json` | 1 | ~50 npm scripts | **HIGH** — uses `node scripts/...` (relative to tools/) |
| `tests/package.json` → `operations/tests/package.json` | 1 | ~30 npm scripts | **HIGH** — uses `node ../tools/scripts/...` |
| `.github/workflows/*.yml` | 20+ files | ~33 path references | **HIGH** — CI breaks silently |
| `.githooks/pre-commit` + `.githooks/verify.sh` | 2 files | ~8–10 references | **HIGH** — blocks all commits if wrong |
| `tools/config/*.json` | 3 files | ~43 references | **HIGH** — machine-read by orchestrators |
| `tools/lib/*.js` (path.join calls) | ~20–40 files | ~20–40 hardcoded paths | **HIGH** — runtime failures |
| `AGENTS.md` | 1 | ~2 | Low |
| `.codex/task-contract.yaml` | 1 | ~5 | Medium |
| `docs-guide/**` + `workspace/**` docs | many | ~2,700+ | Low (most regenerable) |
| `.allowlist` | 1 | 2 changes | Low (but pre-commit blocked if wrong) |

---

## Package.json path change — the critical detail

`tools/package.json` currently runs scripts as:
```json
"audit:scripts": "node scripts/audits/governance/scripts/audit-script-categories.js"
```
This is **relative to the `tools/` working directory**. After the move:
- `tools/scripts/` is gone → `operations/scripts/`
- Running from `tools/`: path becomes `node ../operations/scripts/audits/...`

`tests/package.json` currently:
```json
"test": "node run-all.js",
"test:mdx:safe": "node ../tools/scripts/validators/content/structure/check-mdx-safe-markdown.js"
```
After the move, `tests/package.json` moves to `operations/tests/package.json`, so:
- `../tools/scripts/...` → `../scripts/...` (sibling within operations/)
- `node run-all.js` stays unchanged (run-all.js moves with tests/)

The `tools/package.json` npm script working directory complicates this.
**Recommendation**: Keep `tools/package.json` in place, update all script paths from `scripts/...` to `../operations/scripts/...`.

---

## Execution order (step by step)

### Step 1 — Pre-execution audit + sync
```bash
cd /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-scripts
git fetch origin && git merge docs-v2-dev --no-edit
```
Run baseline test suite. Record all error/warning counts for comparison after the rename.

### Step 2 — `git mv` the two directories
```bash
mkdir -p operations
git mv tools/scripts operations/scripts
git mv tests operations/tests
```

Verify:
```bash
ls operations/
# → scripts/ tests/
```

### Step 3 — Update `tools/package.json` (~50 paths)

Pattern: `node scripts/...` → `node ../operations/scripts/...`

Also update cross-references to tests:
```
"test": "node ../tests/run-all.js"  →  "test": "node ../operations/tests/run-all.js"
```

```bash
# After editing:
node -e "JSON.parse(require('fs').readFileSync('tools/package.json','utf8'))" && echo "JSON valid"
```

### Step 4 — Update `operations/tests/package.json` (~30 paths)

Pattern: `node ../tools/scripts/...` → `node ../scripts/...`
(Both directories now siblings under `operations/`)

```bash
node -e "JSON.parse(require('fs').readFileSync('operations/tests/package.json','utf8'))" && echo "JSON valid"
```

### Step 5 — Update `.github/workflows/*.yml` (~33 paths, 20+ files)

Patterns to replace:
```
node tools/scripts/  →  node operations/scripts/
bash tools/scripts/  →  bash operations/scripts/
node tests/          →  node operations/tests/
bash tests/          →  bash operations/tests/
```

⚠️ **Do NOT use blind sed across all workflow files** — check for false positives in yaml strings
and comments that may reference `tools/scripts` or `tests` in non-path contexts.

Use targeted find-and-replace:
```bash
find .github/workflows -name "*.yml" | xargs grep -l "tools/scripts/\|[^-]tests/" | \
  xargs sed -i '' 's|node tools/scripts/|node operations/scripts/|g; \
                   s|bash tools/scripts/|bash operations/scripts/|g; \
                   s|node tests/|node operations/tests/|g'
```
Verify each changed file manually before committing.

### Step 6 — Update `.githooks/pre-commit` and `.githooks/verify.sh` (~8–10 paths)

These are the highest-risk files — a broken pre-commit hook blocks ALL commits.

Known references:
- `tools/scripts/integrators/ai/codex/task-preflight.js`
- `tools/scripts/validators/governance/compliance/validate-codex-task-contract.js`
- `tools/scripts/validators/ai/codex/validate-locks.js`
- `tools/scripts/validators/ai/codex/check-no-ai-stash.sh`

Pattern: `tools/scripts/` → `operations/scripts/`

After update: run a test commit (with a trivial change) to confirm hook completes.

### Step 7 — Update `tools/config/*.json` (~43 paths)

Files:
- `tools/config/ownerless-governance-surfaces.json` (~26 refs)
- `tools/config/generated-artifacts.json` (~16 refs)
- `tools/config/report-retention-policy.json` (~1 ref)

Pattern:
```
"tools/scripts/**"    →  "operations/scripts/**"
"tests/**"            →  "operations/tests/**"
"tools/scripts/..."   →  "operations/scripts/..."
```

Validate JSON after each file:
```bash
node -e "JSON.parse(require('fs').readFileSync('tools/config/ownerless-governance-surfaces.json','utf8'))" && echo "JSON valid"
```

### Step 8 — Update hardcoded `path.join()` calls in JS files (~20–40 files)

Pattern: `path.join(REPO_ROOT, 'tools/scripts/...')` → `path.join(REPO_ROOT, 'operations/scripts/...')`

```bash
grep -rn "path.join.*tools/scripts\|path.join.*['\"]tests/" tools/lib/ tools/config/ --include="*.js" | head -20
```

Fix each occurrence. These are runtime failures — if one is missed, the script crashes at execution time (not at startup), making them harder to catch in tests.

### Step 9 — Update `AGENTS.md` and `.codex/task-contract.yaml`

AGENTS.md (~2 refs): update command examples
.codex/task-contract.yaml (~5 refs): update surface_globs and test command paths

### Step 10 — Update `.allowlist`

```
tests    →  remove
operations  →  add
tools    →  keep (tools/lib, tools/config, tools/dev, etc. remain)
```

### Step 11 — Update `script-governance-config.js` path constants

`tools/lib/script-governance-config.js` contains these roots that reference `tools/scripts` and `tests`:

```js
const DISCOVERY_ROOTS = ['tests/unit', 'tests/integration', 'tests', 'tools/scripts', ...]
const GOVERNED_ROOTS = ['tests', 'tools/scripts', ...]
const GROUP_INDEX_MAP = [
  { root: 'tests', index: 'tests/script-index.md' },
  { root: 'tools/scripts', index: 'tools/script-index.md' },
  ...
]
```

After rename:
```js
// tests → operations/tests, tools/scripts → operations/scripts
```

Run script-docs test immediately after:
```bash
node operations/tests/unit/script-docs.test.js
```

### Step 12 — Update `tools/config/script-registry.json` paths

All 265 entries in the registry have `"path"` values starting with `tools/scripts/...` or `tests/...`.

After the rename, regenerate from JSDoc headers (the paths will have moved):
```bash
node operations/scripts/generators/governance/catalogs/generate-script-registry.js
```
(Note: this path has also changed after the rename)

### Step 13 — Run `tools/script-index.md` and scope index regeneration

Regenerate all script indexes since paths have changed:
```bash
node operations/tests/unit/script-docs.test.js --write --rebuild-indexes
```

### Step 14 — Full test suite

```bash
npm test --prefix operations/tests
```

Key checks:
- `script-docs.test.js`: must be clean (0 failures) — tests the registry + catalog
- `docs-guide-sot.test.js`: should be clean (component-registry.json populated in Task 13)
- Pre-existing failures (Style Guide, MDX-safe): confirm counts did not increase

### Step 15 — CHECKPOINT

Present to human:
- `ls operations/` (verify both scripts/ and tests/ present)
- Test suite results (counts before vs after)
- `git status --short | wc -l` (total change size)
- Any unresolved issues

### Step 16 — Commit + merge to docs-v2-dev

```bash
git add -A
git commit --trailer "allow-deletions=true" --trailer "allowlist-edit=true" -m "feat(ops): move tools/scripts/ and tests/ to operations/"
# Then merge to docs-v2-dev
cd /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev
git merge docs-v2-dev-scripts --no-edit
```

---

## Risk register

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Pre-commit hook breaks → all commits blocked | High | Test with a trivial commit immediately after Step 6 before proceeding |
| `path.join()` missed in JS files → runtime crash | High | Grep for `tools/scripts` in all JS before Step 9; re-run grep after |
| `tools/package.json` path errors → npm scripts fail | High | Test each major category: `npm run test`, `npm run audit:scripts` from tools/ |
| JSON config files malformed → orchestrators crash | High | Validate each JSON file immediately after editing |
| GitHub Actions workflows wrong paths → CI fails | Medium | Check the 3–5 most-used workflows manually |
| `generated-artifacts.json` generator paths stale → wrong regen paths | High | Update generator paths AND regenerate script-registry.json after Step 12 |
| `.allowlist` edited but pre-commit trailer forgotten → blocked | Low | Pre-commit hook requires `allowlist-edit=true` trailer |
| Documentation references (MD/MDX) stale | Low | Auto-generated catalogs regenerate; manual docs can be fixed post-merge |
| Merge conflict on docs.json or docs-guide files | Medium | Check for other active threads touching docs.json before merging |

---

## Pre-execution checklist

- [ ] Tasks 1–13c complete on scripts branch
- [ ] `npm test --prefix tests` passes (exit 0) — record baseline error counts
- [ ] No in-progress work on other branches that references `tools/scripts/` paths by hand
- [ ] Other active threads (CONTENT-WRITING, AI-TOOLS-GOVERNANCE, etc.) aware of the path change so they don't open PRs mid-rename

---

## Post-move path cheatsheet

| Old path | New path |
|----------|----------|
| `tools/scripts/` | `operations/scripts/` |
| `tests/` | `operations/tests/` |
| `tools/script-index.md` | `operations/scripts/script-index.md` |
| `tests/script-index.md` | `operations/tests/script-index.md` |
| `node scripts/...` (from tools/) | `node ../operations/scripts/...` |
| `node ../tools/scripts/...` (from tests/) | `node ../scripts/...` |
| `node tests/...` (from repo root) | `node operations/tests/...` |
| `node tools/scripts/...` (from repo root) | `node operations/scripts/...` |

---

## Files created/modified (full list)

**Moves (git mv):**
- `tools/scripts/` → `operations/scripts/` (~700+ files)
- `tests/` → `operations/tests/` (~80+ files)

**Modified path references:**
- `tools/package.json` (~50 npm scripts)
- `operations/tests/package.json` (~30 npm scripts)
- `.github/workflows/*.yml` (20+ files, ~33 paths)
- `.githooks/pre-commit` (~5 paths)
- `.githooks/verify.sh` (~3–5 paths)
- `tools/config/ownerless-governance-surfaces.json` (~26 paths)
- `tools/config/generated-artifacts.json` (~16 paths)
- `tools/config/report-retention-policy.json` (~1 path)
- `tools/lib/script-governance-config.js` (~10 path constants)
- `tools/lib/*.js` (path.join calls — ~20–40 files)
- `AGENTS.md` (~2 paths)
- `.codex/task-contract.yaml` (~5 paths)
- `.allowlist` (remove `tests`, add `operations`)

**Regenerated:**
- `tools/config/script-registry.json` (all paths change)
- `operations/scripts/script-index.md` (regenerated by script-docs)
- `operations/tests/script-index.md` (regenerated by script-docs)
- `docs-guide/catalog/scripts-catalog.mdx` (regenerated from new registry)
