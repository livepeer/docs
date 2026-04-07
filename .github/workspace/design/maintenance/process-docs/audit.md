# Governance Audit

> What exists today. What's working. What's broken. What's missing.
> Updated as each pipeline is reviewed.

---

## Pipeline Audit Status

| Pipeline | Audited? | Status | Key issue |
|---|---|---|---|
| governance-sync | YES | BROKEN | Stale script path (MODULE_NOT_FOUND). Production has old folder structure |
| repair-governance | Pending | Likely BROKEN | Uses same governance-pipeline.js, same stale path |
| codex-governance | Pending | Working | Stale path in check-codex-pr-overlap.js |
| auto-assign-docs-reviewers | Pending | Working | Inline 80 lines, hardcoded branch |
| close-linked-issues | Pending | Working | Inline 141 lines |
| discord-issue-intake | Pending | Working | Inline 261 lines |
| docs-v2-issue-indexer | Pending | Working | Inline 403 lines |
| issue-auto-label | Pending | Working | Inline 339 lines, hardcoded labels |
| docs-catalog-governance | Pending | Unknown | Found by agent, not yet reviewed |

---

## governance-sync.yml (Step 1 audit complete)

### Chain

```
Push to docs-v2 (paths: operations/scripts/**, tools/**, .github/**, etc.)
  -> governance-sync.yml
  -> governance-pipeline.js (648 lines)
    -> audit-script-inventory.js (audit pass)
    -> audit-script-inventory.js --fix (repair pass)
    -> script-docs.test.js --check (verification pass)
    -> python3 validate classification JSON
    -> audit-script-inventory.js (post-repair audit)
  -> Write reports (JSON + MD)
  -> If fixes applied: create PR via peter-evans/create-pull-request@v7
```

### Issues

| # | Issue | Severity | Detail |
|---|---|---|---|
| 1 | **Stale script path** | BLOCKER | `AUDIT_SCRIPT_PATH` points to `validators/governance/audit-script-inventory.js` but file is at `validators/governance/pr/audit-script-inventory.js`. Pipeline crashes |
| 2 | **Production uses old paths** | CRITICAL | docs-v2 workflow references `tools/scripts/`, `tests/`, `tasks/` (pre-restructure). Dev has correct paths (`operations/scripts/`, `operations/tests/`, `workspace/`) |
| 3 | **Dead `inputs.use_test_branch`** | Low | Workflow only has `on: push` trigger, no `workflow_dispatch`. Input always undefined |
| 4 | **`tests/` npm ci will fail** | Medium | Workflow runs `cd tests && npm ci` but `tests/package.json` doesn't exist. `tools/package.json` does |
| 5 | **Python3 dependency** | Low | Uses python3 for JSON validation, unnecessary when Node.js can do it |
| 6 | **`@owner -> @domain` migration guards** | Decision needed | Full-repo repair disabled. Need to determine if migration is complete |
| 7 | **No `workflow_dispatch` trigger** | Low | Can't manually trigger for testing. Should add with dry_run input |

### Script quality

`governance-pipeline.js` is well-structured (648 lines, well-factored, dry-run/report-only/strict modes, rollback on failure, structured reports). The script itself is good. Problems are the wrapper and stale path.

### Branch comparison

| Aspect | docs-v2-dev | docs-v2 |
|---|---|---|
| Script path in workflow | `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js` | `tools/scripts/orchestrators/repair-governance.js` |
| Trigger paths | `operations/scripts/**`, `operations/tests/**`, `workspace/**` | `tools/scripts/**`, `tests/**`, `tasks/**` |
| Checkout ref | `${{ inputs.use_test_branch ... }}` (dead code) | `docs-v2` (hardcoded) |
| Report path | `workspace/reports/repo-ops/` | `tasks/reports/repo-ops/` |

---

## repair-governance.yml (not yet audited)

Uses the same `governance-pipeline.js`. Expected to have the same stale path blocker.

---

## Script Governance Framework Alignment

The script framework (`workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`) has NOT been updated to align with the actions framework decisions:

| Dimension | Script framework (current) | Actions framework (D-ACT decisions) |
|---|---|---|
| Types | 6: audit, automation, dispatch, generator, remediator, validator | 7: audit, integrator, dispatch, generator, remediator, validator, interface |
| Concerns | 4: content, components, governance, ai | 7: copy, health, maintenance, discoverability, governance, brand, integrations |
| Architecture | Scripts standalone | Scripts carry the type, workflows are dispatchers (D-ACT-08) |

This alignment is needed before the governance pipeline can correctly classify and repair scripts.
