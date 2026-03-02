---
name: repo-audit-orchestrator
description: Run the full docs-as-infrastructure audit pipeline, aggregate stage reports, and emit one prioritized scorecard.
---

SKILL: Repo Audit Orchestrator

Goal
Run all static audit stages in the defined order and produce one canonical scorecard report for maintainers.

Inputs
- `ai-tools/ai-skills/catalog/skill-catalog.json`
- `ai-tools/ai-skills/catalog/execution-manifest.json`
- repository source and existing reports under `tasks/reports/`

Command
```bash
node tools/scripts/repo-audit-orchestrator.js --mode static --scope full
```

Outputs
- `tasks/reports/repo-ops/repo-audit-summary.md`
- `tasks/reports/repo-ops/repo-audit-summary.json`

Guardrails
- Default to static mode for first pass.
- Do not delete files directly from orchestrator.
- Only trigger quarantine apply when explicitly requested via `--quarantine`.
