---
name: domain-pages-audit-runbook
description: >-
  Run deployed page-load audits across v1/v2/both scopes and triage failing
  routes. Use when: audit docs.livepeer.org pages, check deployed pages by
  version, domain page load failures.
metadata:
  version: "1.3"
  category: "audit"
  tier: "1"
primary_paths:
  - "operations/tests/integration/domain-pages-audit.js"
  - "workspace/reports/page-audits/domain-page-load-report.json"
  - "workspace/reports/page-audits/domain-page-load-report.md"
  - "docs.json"
primary_commands:
  - "node operations/tests/integration/domain-pages-audit.js --version both"
  - "node operations/tests/integration/domain-pages-audit.js --staged --base-url https://docs.livepeer.org --version v2"
---

SKILL: Domain Pages Audit Runbook

Goal
Verify live docs routes load correctly and identify page-level regressions through domain audit reports.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.
- Treat the audit as a one-shot browser run; do not leave Puppeteer or ad-hoc dev sessions running after the audit ends or is interrupted.

Workflow
1. Pick scope (`v1`, `v2`, or `both`) and base URL.
2. Run audit and inspect failed routes with status/title/error fields.
3. Prioritize fixes for hard failures and rerun relevant scope.
4. Before handoff, confirm the audit process exited cleanly and no orphaned browser process remains from the run.

Command examples
```bash
node operations/tests/integration/domain-pages-audit.js --version both
node operations/tests/integration/domain-pages-audit.js --staged --base-url https://docs.livepeer.org --version v2
```

Deliverable Format
- Failed route triage table with likely cause.
- Rerun outcome and residual-risk notes.

Failure Modes / Fallback
- If no pages match staged scope, switch to explicit version scope run.
- If base URL is unstable, document environment impact before content edits.
- If the audit is interrupted or hangs, stop any remaining Puppeteer/browser process before moving on.

Validation Checklist
- [ ] JSON and markdown reports are produced/updated.
- [ ] Failures include concrete route and error signals.
- [ ] No orphaned Puppeteer/browser process remains from the audit run.
- [ ] No `v1/` file edits are made during analysis-only runs.
