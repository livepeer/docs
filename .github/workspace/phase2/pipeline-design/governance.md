# Governance Pipeline Design

> The system enforces its own rules. Issues managed. Drift repaired.
> If governance breaks, everything else drifts over time.

---

## What "governed" means for docs.livepeer.org

1. PRs are validated against codex task contracts before merge
2. Post-merge: catalogs, indexes, generated files resync automatically
3. Governance drift detected and self-healed weekly
4. Issues labelled, assigned, indexed, and closed automatically
5. Claude/agent sessions constrained by hooks
6. Git commits gated by pre-commit hooks

---

## Current pipelines

### Working

| Pipeline | When | What it does |
|---|---|---|
| Codex compliance | PR (P2 hard gate) | Validates task contracts + PR overlap |
| Post-merge sync | Push (P4) | governance-pipeline.js orchestrates catalog/index regeneration |
| Self-heal | Cron weekly (P6) | Same governance-pipeline.js, repair mode |
| PR reviewer assignment | PR (P3) | Auto-assigns reviewers (inline 80 lines, hardcoded branch) |
| Issue close on merge | PR closed (P4) | Closes linked issues (inline 141 lines) |
| Discord issue intake | Dispatch (event) | Creates GitHub issue from Discord (inline 261 lines) |
| Issue indexer | Cron + Issues (P5) | Maintains issue tracking index (inline 403 lines) |
| Issue auto-label | Issues (event) | Auto-labels issues (inline 339 lines, hardcoded labels) |
| Claude hooks (14) | Local | pre-tool-guard, mdx-validate, move-detect, phase-gate, blast-radius, etc. |
| Git hooks (2) | Local | pre-commit (hard gates), pre-push (codex isolation) |

### Disconnected

| Script | What it does |
|---|---|
| audit-tasks-folders.js | Task folder audit |
| generate-v2-folder-governance-cleanup-matrix.js | Folder governance matrix |
| audit-script-categories.js | Script category audit |
| script-footprint-and-usage-audit.js | Script usage/sprawl audit |
| check-agent-docs-freshness.js | Agent docs freshness |
| review-governance-repair-checklist.js | Repair checklist |
| validate-ai-tools-registry.js | AI tools registry validation |
| check-pr-template.js | PR template check |
| validate-lpd-paths.js | LPD path validation |
| add-framework-headers.js | Add JSDoc headers |
| update-jsdoc-headers.js | Update JSDoc headers |
| repair-script-inventory.js | Repair script classification |
| repo-audit-orchestrator.js | Dispatches all static analysis validators |

---

## Proposed target state

### Keep existing pipelines, fix inline code

Governance has the most working pipelines of any concern. The issues are:
1. **1,224 lines of inline JS** across 5 interface workflows (extract to governed scripts)
2. **Hardcoded values** (branch in auto-assign, labels in auto-label)
3. **Disconnected audit/repair scripts** that could strengthen the self-heal pipeline

**Extraction plan (5 workflows):**

| Workflow | Inline lines | Extract to |
|---|---|---|
| auto-assign-docs-reviewers | 80 | operations/scripts/interfaces/governance/assign-reviewers.js |
| close-linked-issues | 141 | operations/scripts/interfaces/governance/close-linked-issues.js |
| discord-issue-intake | 261 | operations/scripts/interfaces/governance/discord-issue-intake.js |
| docs-v2-issue-indexer | 403 | operations/scripts/interfaces/governance/issue-indexer.js |
| issue-auto-label | 339 | operations/scripts/interfaces/governance/issue-auto-label.js |

After extraction: each workflow becomes a 15-line thin dispatcher. Scripts get JSDoc headers, become testable, reusable.

**Strengthen self-heal pipeline:**

Wire disconnected audit/repair scripts into governance-pipeline.js or a separate scheduled scan:
- repo-audit-orchestrator.js (dispatches all static analysis)
- audit-script-categories.js + repair-script-inventory.js (scan + fix pair)
- script-footprint-and-usage-audit.js (detect sprawl)
- check-pr-template.js (add to PR health gate)

---

## Impact/effort

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Extract 5 inline scripts | Testable, governable, reusable | Medium (5 extractions) | High (architectural) |
| 2 | Fix hardcoded branch in auto-assign | Uses vars.DEPLOY_BRANCH | 5 min | Quick win |
| 3 | Externalise hardcoded labels in auto-label | Config-driven | Low | Quick win |
| 4 | Wire check-pr-template to PR health gate | PR template enforced | Low | Quick win |
| 5 | Wire repo-audit-orchestrator to scheduled scan | Broader self-heal | Medium | Future |
