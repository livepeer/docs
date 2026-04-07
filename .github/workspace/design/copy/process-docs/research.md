# Governance Research: Related Repo Artifacts

> Index of everything in the repo relating to governance scripts, workflows, and frameworks.
> Source: Agent research (2026-04-02) + manual audit (2026-04-04)

---

## Canonical Framework Sources

| File | What | Status |
|---|---|---|
| `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` | Script governance framework (6 types, 4 concerns, 11-tag JSDoc) | ACTIVE but NOT ALIGNED to actions framework (still has 4 concerns, still says `automation`) |
| `.github/workspace/framework-canonical.md` | Actions + pipeline governance framework (7 types, 7 concerns, 8 pipeline tags, 8 decisions) | ACTIVE, recently rewritten |
| `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` | Component governance (7-tag JSDoc, 6 categories) | ACTIVE |
| `tools/lib/script-governance-config.js` | Central governance config (enums, discovery roots, classification schemas) | ACTIVE |
| `docs-guide/policies/governance-index.mdx` | Master governance index (10 governed surfaces) | ACTIVE |

## Governance Workflows

| Workflow | What | Status |
|---|---|---|
| `governance-sync.yml` | Post-merge: runs governance-pipeline.js, creates PR if fixes applied | BROKEN (stale script path) |
| `repair-governance.yml` | Weekly self-heal: same pipeline in repair mode | BROKEN (same stale path + dead input reference) |
| `codex-governance.yml` | P2 hard gate: codex task contract validation | Working (stale script path in overlap check) |
| `auto-assign-docs-reviewers.yml` | PR reviewer assignment | Working (inline 80 lines, hardcoded branch) |
| `close-linked-issues-docs-v2.yml` | Close linked issues on PR merge | Working (inline 141 lines) |
| `discord-issue-intake.yml` | Create issue from Discord | Working (inline 261 lines) |
| `docs-v2-issue-indexer.yml` | Issue tracking index | Working (inline 403 lines) |
| `issue-auto-label.yml` | Auto-label issues | Working (inline 339 lines, hardcoded labels) |
| `docs-catalog-governance.yml` | Catalog governance enforcement | Working (found by agent, not in original audit) |

## Governance Scripts (dispatch layer)

| Script | What | Lines |
|---|---|---|
| `dispatch/governance/pipelines/governance-pipeline.js` | Master orchestrator: audit, repair, verify, report | 648 |
| `dispatch/governance/pipelines/sync-generated-files.js` | Post-merge sync for generated artifacts | ? |
| `dispatch/governance/repo/repo-audit-orchestrator.js` | Dispatches all static analysis validators | ? |
| `dispatch/governance/headless-batch.sh` | Headless batch runner for bulk quality checks | ? |

## Governance Scripts (validators)

| Script | What |
|---|---|
| `validators/governance/compliance/validate-codex-task-contract.js` | Codex task contract enforcer |
| `validators/governance/compliance/validate-ai-tools-registry.js` | AI tools registry compliance |
| `validators/governance/compliance/check-agent-docs-freshness.js` | Agent docs freshness |
| `validators/governance/compliance/review-governance-repair-checklist.js` | Post-repair verification |
| `validators/governance/compliance/verify-pay-orc-gate-finalize.sh` | Orchestrator gate check |
| `validators/governance/pr/audit-script-inventory.js` | Deep script inventory audit with --fix mode |
| `validators/governance/pr/check-pr-template.js` | PR template compliance |
| `validators/governance/pr/check-component-immutability.js` | Component change detection |
| `validators/governance/repo/validate-lpd-paths.js` | LPD path validation |
| `validators/governance/ai/check-companion-manifest.js` | AI companion manifest validation |

## Governance Scripts (audits)

| Script | What |
|---|---|
| `audits/governance/repo/audit-tasks-folders.js` | Task folder audit |
| `audits/governance/scripts/script-footprint-and-usage-audit.js` | Script sprawl/duplicate detection |
| `audits/governance/scripts/audit-script-categories.js` | Script categorization audit |
| `audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js` | Folder cleanup recommendations |

## Governance Scripts (remediators)

| Script | What |
|---|---|
| `remediators/governance/scaffold/fix-usage-paths.js` | Fix usage paths in JSDoc |
| `remediators/governance/scaffold/update-jsdoc-headers.js` | Update JSDoc headers (one-time migration) |
| `remediators/governance/scripts/repair-script-inventory.js` | Repair script classification |

## Claude Hooks (local governance enforcement)

| Script | What |
|---|---|
| `dispatch/governance/pre-tool-guard.js` | Blocks writes to auto-generated files |
| `dispatch/governance/pre-compact-checkpoint.js` | Checkpoint before context compaction |
| `dispatch/governance/mdx-validate-hook.js` | MDX validation on write |
| `dispatch/governance/move-detect-hook.js` | Detect file moves, trigger path sync |
| `dispatch/governance/phase-gate-hook.js` | Enforce phase gates |
| `dispatch/governance/blast-radius-scanner.js` | Detect broad changes |
| `dispatch/governance/friction-logger.js` | Log frustration signals |
| `dispatch/governance/grep-loop-guard.js` | Prevent grep retry loops |
| `dispatch/governance/message-backup.js` | Back up messages |
| `dispatch/governance/post-tool-verify.js` | Post-tool failure tracking |
| `dispatch/governance/read-logger.js` | File read tracking |
| `dispatch/governance/session-register.js` | Session registration |
| `dispatch/governance/session-state.js` | Session state injection |
| `dispatch/governance/mdx-constraints-injector.js` | MDX constraints injection |

## Codex Lifecycle Scripts

| Script | What |
|---|---|
| `dispatch/ai/codex/check-codex-pr-overlap.js` | PR overlap detection |
| `dispatch/ai/codex/codex-commit.js` | Codex commit helper |
| `dispatch/ai/codex/create-codex-pr.js` | Codex PR creation |
| `dispatch/ai/codex/task-finalise.js` | Task finalization |
| `automations/ai/codex/task-preflight.js` | Task setup |
| `automations/ai/codex/task-cleanup.js` | Task cleanup |
| `automations/ai/codex/lock-release.js` | Lock release |
| `validators/ai/codex/validate-locks.js` | Lock validation |
| `validators/ai/codex/check-no-ai-stash.sh` | Stash isolation check |

## Agent Management Scripts

| Script | What |
|---|---|
| `automations/ai/agents/cross-agent-packager.js` | Bundle audit reports for agent consumption |
| `automations/ai/agents/sync-codex-skills.js` | Sync codex skills catalog |
| `automations/ai/agents/export-portable-skills.js` | Export distributable skill packages |

## Git Hooks

| Hook | What |
|---|---|
| `.githooks/pre-commit` | Hard gates: codex isolation, deletion guard, allowlist, docs.json integrity, v1 freeze |
| `.githooks/pre-push` | Codex: task contract, issue readiness, lock overlap, stash policy |
| `.githooks/server-manager.js` | Mintlify dev server management (port 3145) |

## Configuration

| File | What |
|---|---|
| `tools/lib/script-governance-config.js` | Central governance config (enums, roots, schemas) |
| `tools/config/runtime/ownerless-governance-surfaces.json` | Ownerless repo surfaces map |
| `workspace/reports/script-classifications.json` | Master script inventory |
| `.codex/task-contract.yaml` | Codex task contract schema |

## Plan Documents

| Location | What |
|---|---|
| `workspace/plan/active/SCRIPT-GOVERNANCE/` | Script governance migration plan |
| `workspace/plan/active/COMPONENT-GOVERNANCE/` | Component lifecycle governance |
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/` | AI tools governance |
| `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/` | Ownerless repo governance model |

## Agent Documents

| File | What |
|---|---|
| `/AGENTS.md` | Root baseline for all AI agents |
| `.github/AGENTS.md` | Codex layer extension |
| `.claude/CLAUDE.md` | Claude Code specific rules |
