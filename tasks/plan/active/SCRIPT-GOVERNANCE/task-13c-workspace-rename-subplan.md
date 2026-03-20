# Task 13c — tasks/ → workspace/ Rename: Execution Sub-plan

> **Type**: Execution plan — awaiting human approval before any step runs
> **Date**: 2026-03-20
> **Depends on**: Tasks 13, 13b complete (script paths stable before rename)
> **Governance context**: REPO-STRUCTURE-GOV Phase 2F (same rename, coordinated)
> **Branch**: `docs-v2-dev-scripts`
> **Risk level**: HIGH — affects AI agents, all plan files, 28+ scripts, 3 workflows

---

## Why before Task 14

Task 14 moves `tools/scripts/` to `operations/scripts/`. If we rename `tasks/` → `workspace/`
AFTER Task 14, we'd be updating paths in an already-large batch of changes. Doing 13c first
means Task 14 can reference `workspace/` consistently from the start, and the workspace rename
is fully tested before anything else moves.

---

## Scope

The rename touches every `tasks/` path reference in the repo. The key surfaces are:

| Surface | tasks/ ref count | Notes |
|---------|-----------------|-------|
| Scripts in `tools/scripts/` | ~28 files | JSDoc `@usage`, `@pipeline`, inline paths |
| GitHub Actions workflows | 3 files | `repair-governance.yml`, `tasks-retention.yml`, `governance-sync.yml` |
| `.codex/task-contract.yaml` | 1 | AI agent task contract |
| `.codex/locks-local/` | 3 lock files | Historical locks — may not need updating (closed tasks) |
| `AGENTS.md` | 0 direct (confirmed) | No changes needed |
| Plan files in `tasks/plan/` | All — they move with the rename | The plan files themselves move |
| `tools/config/generated-artifacts.json` | TBD | Any `tasks/reports/` artifact entries |

**NOT in scope**: `.codex/locks-local/` historical lock files — these are closed task artifacts.
Their `tasks/` references are immutable historical records. Do not update them.

---

## Pre-conditions

- [ ] Tasks 13 and 13b complete and merged
- [ ] No in-progress work referencing `tasks/` paths that would conflict mid-rename
- [ ] All team members aware rename is happening (it changes clone-relative paths)

---

## Step 1 — Full reference audit

Before touching anything, produce a complete list of every `tasks/` reference.

```bash
# All tasks/ refs in scripts:
grep -r "tasks/" tools/scripts/ --include="*.js" --include="*.sh" --include="*.py" -l

# All tasks/ refs in workflows:
grep -r "tasks/" .github/workflows/ --include="*.yml" -l

# All tasks/ refs in AI adapter files:
grep -r "tasks/" .claude/ .codex/ .cursor/ .windsurf/ -l 2>/dev/null

# All tasks/ refs in config:
grep -r "tasks/" tools/config/ tools/lib/ --include="*.js" --include="*.json" -l

# All tasks/ refs in root docs:
grep -r "tasks/" AGENTS.md README.md docs-guide/ --include="*.mdx" --include="*.md" -l 2>/dev/null | head -20

# Count total:
grep -r "tasks/" . --include="*.js" --include="*.sh" --include="*.py" --include="*.yml" --include="*.json" --include="*.md" --include="*.mdx" --include="*.yaml" \
  --exclude-dir=".git" --exclude-dir="node_modules" --exclude-dir="x-archive" -l 2>/dev/null | wc -l
```

**CHECKPOINT** — present full file list and count to human before any moves.

---

## Step 2 — git mv

```bash
git mv tasks/ workspace/
```

This renames the directory and stages all contained files as renamed in git.
The plan files will now be at `workspace/plan/active/SCRIPT-GOVERNANCE/`.

**Note**: After this step, this sub-plan file itself will be at
`workspace/plan/active/SCRIPT-GOVERNANCE/task-13c-workspace-rename-subplan.md`.

---

## Step 3 — Update all path references

Work through each surface systematically:

### 3a — Scripts (tools/scripts/)
For each file identified in Step 1:
- Update `@usage` JSDoc tag if it contains `tasks/`
- Update `@pipeline` JSDoc tag if it contains `tasks/`
- Update any `path.join(REPO_ROOT, 'tasks/...')` calls
- Update any hardcoded `'tasks/'` strings

```bash
# Bulk find what needs updating:
grep -rn "tasks/" tools/scripts/ --include="*.js" | grep -v "x-archive" | grep -v ".test."
```

### 3b — GitHub Actions workflows
Update 3 files:
- `.github/workflows/repair-governance.yml`
- `.github/workflows/tasks-retention.yml`
- `.github/workflows/governance-sync.yml`

These may reference:
- `tasks/plan/` paths for plan file operations
- `tasks/reports/` paths for generated reports
- `tasks/staging/` paths

### 3c — .codex/task-contract.yaml
Single reference. Update `tasks/` → `workspace/`.

### 3d — tools/config/generated-artifacts.json
Check for any `tasks/reports/` artifact entries. The `script-classifications.json` entry
(which lives at `tasks/reports/`) will be archived in Task 13 — if it's already gone,
this is moot. If not, update its path.

### 3e — docs-guide/ MDX pages
Any MDX page referencing `tasks/` paths (inline code examples, command references).
```bash
grep -rn "tasks/" docs-guide/ --include="*.mdx" | grep -v "_workspace"
```

---

## Step 4 — Verify pre-commit hook

The pre-commit hook references several governance paths. Verify none reference `tasks/`.

```bash
grep "tasks/" .githooks/pre-commit
```

If any found, update to `workspace/`.

---

## Step 5 — Run full test suite

```bash
npm test --prefix tests
```

Key test areas:
- `script-docs.test.js` — any hardcoded `tasks/` paths in index generation
- Path resolution tests — any test that constructs paths to plan files or reports

---

## Step 6 — Update plan files (self-referential)

The plan files have moved to `workspace/plan/active/SCRIPT-GOVERNANCE/`. Update any
internal cross-references:
- `plan.md` header: `**Branch**: ...` and any path mentions
- `doc-recommendation.md`: update any `tasks/` path references
- `script-docs.md`: update any `tasks/` path references

---

## Step 7 — CHECKPOINT + commit

Present to human:
- Git diff summary (file count renamed + files modified)
- Test suite results
- Any remaining `tasks/` references that were intentionally skipped

```bash
git commit -m "rename: tasks/ → workspace/ with all downstream path updates"
```

Merge back to `docs-v2-dev`.

---

## Risks

| Risk | Severity | Mitigation |
|------|---------|-----------|
| Script breaks because it builds path to `tasks/reports/` at runtime | High | Grep all runtime path construction before Step 2; fix in Step 3a |
| GitHub Actions fails because workflow path is wrong | High | Test workflows fire correctly in CI after merge |
| Lock files in `.codex/locks-local/` become unresolvable | Low | Historical only — do not update, just document in sub-plan |
| This sub-plan file itself is at a `tasks/` path | None | It moves with the git mv — no special handling needed |
| Codex agent tries to reference old path from memory | Medium | Update `.codex/task-contract.yaml` explicitly (Step 3c) |

---

## Files Expected to Change

**Renamed (git mv):**
- Everything under `tasks/` → `workspace/`

**Path references updated:**
- ~28 scripts in `tools/scripts/`
- 3 GitHub Actions workflows
- `.codex/task-contract.yaml`
- `tools/config/generated-artifacts.json` (if applicable)
- Any `docs-guide/` MDX pages referencing `tasks/`

**Intentionally NOT updated:**
- `.codex/locks-local/` historical lock files (closed task artifacts, immutable)
