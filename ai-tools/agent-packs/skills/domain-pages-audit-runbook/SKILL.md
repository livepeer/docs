---
name: domain-pages-audit-runbook
version: "1.0"
description: >-
  Run deployed page-load audits across v1/v2/both scopes and triage failing routes. Use when tasks include audit docs.livepeer.org pages, check deployed pages by version, domain page load failures.
tier: 1
invoke_when:
  - "audit docs.livepeer.org pages"
  - "check deployed pages by version"
  - "domain page load failures"
primary_paths:
  - "tests/integration/domain-pages-audit.js"
  - "tests/reports/domain-page-load-report.json"
  - "tests/reports/domain-page-load-report.md"
  - "docs.json"
primary_commands:
  - "node tests/integration/domain-pages-audit.js --version both"
  - "node tests/integration/domain-pages-audit.js --staged --base-url https://docs.livepeer.org --version v2"
---

SKILL: Domain Pages Audit Runbook

Goal
Verify live docs routes load correctly and identify page-level regressions through domain audit reports.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Pick scope (`v1`, `v2`, or `both`) and base URL.
2. Run audit and inspect failed routes with status/title/error fields.
3. Prioritize fixes for hard failures and rerun relevant scope.

Command examples
```bash
node tests/integration/domain-pages-audit.js --version both
node tests/integration/domain-pages-audit.js --staged --base-url https://docs.livepeer.org --version v2
```

Deliverable Format
- Failed route triage table with likely cause.
- Rerun outcome and residual-risk notes.

Failure Modes / Fallback
- If no pages match staged scope, switch to explicit version scope run.
- If base URL is unstable, document environment impact before content edits.

Validation Checklist
- [ ] JSON and markdown reports are produced/updated.
- [ ] Failures include concrete route and error signals.
- [ ] No `v1/` file edits are made during analysis-only runs.
