---
name: repo-audit-orchestrator
description: >-
  Run the docs-as-infrastructure audit pipeline, aggregate stage results, and emit one prioritised scorecard that maintainers can use to sequence repository fixes. Use when running the full docs audit pipeline, aggregating repo audit stages, or producing a single repo audit scorecard.
metadata:
  version: "1.2"
  category: meta
---

SKILL: Repo Audit Orchestrator

Goal
Run all static audit stages in the defined order and produce one canonical scorecard report for maintainers.

Inputs
- `ai-tools/ai-skills/catalog/skill-catalog.json`
- `ai-tools/ai-skills/catalog/execution-manifest.json`
- repository source and existing reports under `workspace/reports/`

Command
```bash
node operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js --mode static --scope full
```

Outputs
- `workspace/reports/repo-ops/repo-audit-summary.md`
- `workspace/reports/repo-ops/repo-audit-summary.json`

Guardrails
- Default to static mode for first pass.
- Do not delete files directly from orchestrator.
- Only trigger quarantine apply when explicitly requested via `--quarantine`.
