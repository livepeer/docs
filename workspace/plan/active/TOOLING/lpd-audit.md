# lpd CLI Audit

**Date**: 2026-03-21
**Version audited**: 0.2.0
**File**: `lpd` (Bash, 2,148 lines, repo root)
**Related plans**:
- `workspace/plan/active/SCRIPT-GOVERNANCE/plan.md` — three-tier taxonomy + Task 14 (`operations/` move)
- `workspace/plan/active/REPO-STRUCTURE-GOV/plan.md` — root restructure, `tasks→workspace` rename

---

## ⚠️ Read Before Updating: Pending `/operations` Migration

**SCRIPT-GOVERNANCE Task 14** will move `tools/scripts/` → `operations/scripts/` and
`tests/` → `operations/tests/` (V-OP checklist, not yet merged).

This means **all 12 stale script paths have a two-step migration ahead**:

1. Current broken state: `tools/scripts/script.js` (flat, pre-taxonomy)
2. Current correct location: `tools/scripts/<type>/<concern>/<niche>/script.js` (three-tier)
3. **Final target**: `operations/scripts/<type>/<concern>/<niche>/script.js` (post-Task 14)

**Recommendation: fix once, after Task 14 lands.** Fixing to step 2 now means repeating the
work when Task 14 merges. The broken commands (`lpd ci`, `lpd repair`, `lpd ai-sitemap`) are not
daily-driver workflows — `lpd dev` and `lpd test` are unaffected. Coordinate the path fix as
part of V-OP.6 in the Task 14 verification checklist.

**Exception**: `lpd setup` Codex skills sync failure is annoying (silent, user-facing). That
single path could be fixed now if the noise is a problem.

---

> Note: `tasks/` → `workspace/` rename is **already complete** (V-WS.9 ✅ 2026-03-21).
> The `lpd tasks` legacy alias is intentional — maps `tasks` → `workspace/scripts`. Correct.

---

## Summary

The `lpd` CLI is the repo's primary developer entrypoint. It is functional and well-structured.
One critical class of defect was found: **12 script path references inside `lpd` are stale** — they
point to pre-taxonomy flat paths that no longer exist. These affect `lpd ci`, `lpd repair`,
and `lpd setup` only. **Do not fix until Task 14 lands** (see above).

| Area | Status | Action |
|---|---|---|
| Command surface (11 core + 3 groups) | All functional | None |
| Stale script paths (12) | Broken — fix after Task 14 lands | See path table below |
| Legacy `tasks` group alias | Intentional + working | None (document it) |
| Documentation (`lpd-cli.mdx`) | Good but not auto-updated | Add freshness gate |
| Deprecated locale copies | Stale files | Archive |
| Self-update mechanism | Missing | Build (see recommendations) |

---

## Command Surface Audit

### All 11 core commands — working

| Command | Flags | Status | Notes |
|---|---|---|---|
| `lpd help` | — | ✅ Working | Inline text, always current |
| `lpd info` | — | ✅ Working | Inline text, always current |
| `lpd version` | — | ✅ Working | Hardcoded `CLI_VERSION="0.2.0"` |
| `lpd setup` | `--yes --no-tools --no-tests --no-hooks --with-mintlify --no-cli --no-codex-skills --json` | ⚠️ Partially broken | `sync_codex_planner_skill()` references stale path — see below |
| `lpd doctor` | `--strict --json` | ✅ Working | — |
| `lpd dev` | `--test --test-mode --scoped --docs-config --scope-* --` | ✅ Working | Port 3000 blocked; defaults to 3333 |
| `lpd mint dev` | same as `lpd dev` | ✅ Working | Compatibility alias |
| `lpd test` | `--staged --full --browser --domain --wcag --wcag-no-fix --link-audit-external --base-url` | ✅ Working | — |
| `lpd move-page` | `--yes --check --no-stage` | ✅ Working | Calls `tools/scripts/remediators/content/sync-docs-paths.js` (correct path) |
| `lpd ai-sitemap` | `--write --check --json` | ⚠️ Broken | Calls `tools/scripts/generate-ai-sitemap.js` (stale path) |
| `lpd ci` | `--skip-browser --base-url` | ⚠️ Broken | Multiple stale paths — see below |
| `lpd repair` | `--surface --staged --files --full --write --stage` | ⚠️ Broken | `repair-governance` surface uses stale path |
| `lpd hooks` | `install status verify info` | ✅ Working | — |
| `lpd scripts` | `list run` | ✅ Working | — |
| `lpd <tools\|workspace\|v2\|tests>` | — | ✅ Working | — |

### Legacy group alias

`lpd tasks` is an undocumented legacy alias for `lpd workspace` (line 359 in `lpd`):

```bash
tasks) echo "workspace/scripts" ;;  # legacy alias for workspace
```

- `lpd help` and `lpd info` do NOT mention `tasks` — it is invisible to users
- `lpd-cli.mdx` does NOT mention `tasks`
- **Action**: Either document `tasks` as a deprecated alias in `lpd help`, or remove it. Low risk.

---

## Critical: Stale Script Paths

The script taxonomy restructure (SCRIPT-GOVERNANCE plan, `docs-v2-dev-scripts` branch) moved all
scripts from a flat `tools/scripts/*.js` layout into `tools/scripts/<type>/<concern>/<niche>/`.
`lpd` was NOT updated when these paths changed. The flat-path files no longer exist.

### Stale path inventory

| Line | `lpd` references | Actual path (post-restructure) | Command affected |
|---|---|---|---|
| 231 | `tools/scripts/sync-codex-skills.js` | `tools/scripts/automations/ai/agents/sync-codex-skills.js` | `lpd setup` |
| 1623 | `tools/scripts/export-portable-skills.js` | `tools/scripts/automations/ai/agents/export-portable-skills.js` | `lpd ci` |
| 1642 | `tools/scripts/generate-docs-guide-indexes.js` | `tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` | `lpd ci` |
| 1646 | `tools/scripts/generate-docs-guide-pages-index.js` | `tools/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` | `lpd ci` |
| 1650 | `tools/scripts/generate-docs-guide-components-index.js` | `tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` | `lpd ci` |
| 1668, 1673 | `tools/scripts/generate-ui-templates.js` | `tools/scripts/generators/components/library/generate-ui-templates.js` | `lpd ci` |
| 1697 | `tools/scripts/orchestrators/repair-governance.js` | `tools/scripts/dispatch/governance/pipelines/governance-pipeline.js` | `lpd repair --surface script-governance` |
| 1716 | `tools/scripts/remediators/components/repair-component-metadata.js` | `tools/scripts/remediators/components/library/repair-component-metadata.js` | `lpd repair --surface component-layout` |
| 1730, 1742 | `tools/scripts/generate-component-registry.js` | `tools/scripts/generators/components/library/generate-component-registry.js` | `lpd ci` |
| 1734, 1746 | `tools/scripts/generate-component-docs.js` | `tools/scripts/generators/components/documentation/generate-component-docs.js` | `lpd ci` |
| 1808 | `tools/scripts/generate-ai-sitemap.js` | `tools/scripts/generators/content/seo/generate-ai-sitemap.js` | `lpd ai-sitemap` |

**Impact matrix:**
- `lpd setup` — Codex skills sync silently fails (warns to stderr, returns 1, setup continues)
- `lpd ai-sitemap --write` — hard failure (file not found)
- `lpd ci` — hard failure partway through; index generation and component steps fail
- `lpd repair --surface script-governance` — hard failure (governance-pipeline.js not found at old path)
- `lpd repair --surface component-layout` — hard failure (repair-component-metadata.js not found at old path)

### Fix — after SCRIPT-GOVERNANCE Task 14 lands

When Task 14 merges (`tools/scripts/` → `operations/scripts/`), update all 12 path strings in
`lpd` to the final `operations/scripts/<type>/<concern>/<niche>/` locations in one pass.
This is a mechanical find-and-replace best done in the Task 14 worktree.
V-OP.6 in the Task 14 checklist already flags this as a required verification step.

The appendix below shows the intermediate `tools/scripts/` (three-tier) paths for reference,
but the final target paths will all have `operations/` as the prefix.

---

## Documentation Audit

### Existing docs

| File | Status | Notes |
|---|---|---|
| `docs-guide/tooling/lpd-cli.mdx` | ✅ Good — comprehensive | `status: draft`, `lastVerified: 2026-03-16`. Commands table and accordions are current. |
| `v2/cn/docs-guide/x-deprecated/lpd.md` | 🗑️ Stale locale copy | Deprecated but not archived. Not linked from nav. |
| `v2/fr/docs-guide/x-deprecated/lpd.md` | 🗑️ Stale locale copy | Same. |

### Gaps

1. `lpd-cli.mdx` has no link to the stale-path issue or the SCRIPT-GOVERNANCE restructure
2. `lpd-cli.mdx` does not mention `lpd tasks` (legacy alias) — not documented or deprecated
3. No machine-readable version binding — `lastVerified: 2026-03-16` but no `version: 0.2.0` field that could be script-checked
4. No auto-update mechanism — if `lpd` gains a new command or flag, `lpd-cli.mdx` goes stale with no warning
5. The two deprecated locale files are in `x-deprecated/` but not archived via `git mv` to `x-archive/`

---

## Self-Updating Recommendations

The main gap: `lpd` can change without any docs freshness alert. Recommended layered approach:

### Layer 1 — Lightweight: Add lpd to freshness checks

Add `docs-guide/tooling/lpd-cli.mdx` to the agent docs freshness registry
(`tools/config/agent-docs-freshness.json` or equivalent). Gate: if `lpd` (the file) changes,
flag `lpd-cli.mdx` as needing review.

Implementation:
```json
{
  "source": "lpd",
  "docs": "docs-guide/tooling/lpd-cli.mdx",
  "check": "file-change",
  "advisory": "lpd CLI was modified — verify lpd-cli.mdx is still accurate"
}
```

This runs via `check-agent-docs-freshness.js` in the existing test suite (unit test lane).

### Layer 2 — Medium: Script-extracted command summary

Extract the `print_main_help()` block from `lpd` into a standalone `lpd --help-json` output mode
(or a separate `lpd-commands.json` manifest). Then:
- `lpd-cli.mdx` DynamicTable can be generated from that manifest
- A validator can diff the manifest against the docs page

Implementation sketch:
```bash
lpd --help-json  # emits JSON: { commands: [{name, purpose, flags}] }
```
Pipe to a generator that updates the DynamicTable in `lpd-cli.mdx`.

### Layer 3 — Governance: Scope file + path validator

**Create a scope file** at `tools/config/lpd-scope.json` (following the ownerless governance pattern):

```json
{
  "id": "lpd-cli",
  "sourceFile": "lpd",
  "docsFile": "docs-guide/tooling/lpd-cli.mdx",
  "scriptPaths": [
    "tools/scripts/automations/ai/agents/sync-codex-skills.js",
    "tools/scripts/automations/ai/agents/export-portable-skills.js",
    ...all scripts referenced by lpd...
  ]
}
```

Then a **validator script** `validate-lpd-paths.js` can:
- Read all `node tools/scripts/...` references from `lpd`
- Check each file exists at the referenced path
- Fail with a clear error if any path is stale

This catches the current 12-stale-paths problem and prevents recurrence.

Run it in pre-commit (staged mode) and CI.

---

## Governance Recommendations

### Immediate (fix before using `lpd ci` or `lpd repair`)

1. **Fix 12 stale script paths in `lpd`** — paths documented above. One-shot fix, test by running each affected command after fixing.

2. **Archive deprecated locale docs**
   - `git mv v2/cn/docs-guide/x-deprecated/lpd.md v2/cn/docs-guide/x-archive/lpd.md`
   - `git mv v2/fr/docs-guide/x-deprecated/lpd.md v2/fr/docs-guide/x-archive/lpd.md`

### Short-term (this week)

3. **Add `lpd-cli.mdx` to agent docs freshness registry** — Layer 1 above. Low effort, immediate coverage.

4. **Add validate-lpd-paths.js** — small validator that checks all `node tools/scripts/*.js` references in `lpd` exist on disk. Pipe into `lpd doctor --strict` and run in CI.

5. **Document or remove `lpd tasks` alias** — add to `lpd help` as `tasks (deprecated, alias for workspace)` or delete the alias.

### Medium-term

6. **Emit `lpd --help-json`** — makes lpd machine-readable for docs generation and CI diffing.

7. **Create `tools/config/lpd-scope.json`** — register all script dependencies so restructures can't silently break the CLI.

8. **Update `lpd-cli.mdx` status** — once the stale paths are fixed and freshness gate is added, change `status: draft` → `status: current`.

---

## Where `lpd-cli.mdx` Lives and How

| Property | Value |
|---|---|
| Path | `docs-guide/tooling/lpd-cli.mdx` |
| Nav | `docs-guide/` internal section |
| `pageType` | `reference` |
| `purpose` | `reference` |
| `audience` | `internal` |
| `status` | `draft` |
| `lastVerified` | `2026-03-16` |
| Auto-updated? | **No** — fully manual |
| Templates/duplicates? | Two stale locale copies (`v2/cn/`, `v2/fr/`) in `x-deprecated/` — not linked from nav |

No duplicate live copies exist. The two deprecated locale files in `x-deprecated/` are not routable
and are safe to archive.

---

## Appendix: Complete Stale Path Fix Table

For reference when executing the fix:

```bash
# In lpd, replace these old paths with new paths:

# 1. sync-codex-skills
tools/scripts/sync-codex-skills.js
→ tools/scripts/automations/ai/agents/sync-codex-skills.js

# 2. export-portable-skills
tools/scripts/export-portable-skills.js
→ tools/scripts/automations/ai/agents/export-portable-skills.js

# 3. generate-docs-guide-indexes
tools/scripts/generate-docs-guide-indexes.js
→ tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js

# 4. generate-docs-guide-pages-index
tools/scripts/generate-docs-guide-pages-index.js
→ tools/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js

# 5. generate-docs-guide-components-index
tools/scripts/generate-docs-guide-components-index.js
→ tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js

# 6. generate-ui-templates (2 occurrences)
tools/scripts/generate-ui-templates.js
→ tools/scripts/generators/components/library/generate-ui-templates.js

# 7. repair-governance (name also changed)
tools/scripts/orchestrators/repair-governance.js
→ tools/scripts/dispatch/governance/pipelines/governance-pipeline.js

# 8. repair-component-metadata (path depth changed)
tools/scripts/remediators/components/repair-component-metadata.js
→ tools/scripts/remediators/components/library/repair-component-metadata.js

# 9. generate-component-registry (2 occurrences)
tools/scripts/generate-component-registry.js
→ tools/scripts/generators/components/library/generate-component-registry.js

# 10. generate-component-docs (2 occurrences)
tools/scripts/generate-component-docs.js
→ tools/scripts/generators/components/documentation/generate-component-docs.js

# 11. generate-ai-sitemap
tools/scripts/generate-ai-sitemap.js
→ tools/scripts/generators/content/seo/generate-ai-sitemap.js
```
