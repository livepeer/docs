---
name: v2-link-audit-runbook
version: "1.0"
description: >-
  Run and interpret the comprehensive v2 link/import audit in full, staged, or file-targeted modes. Use when tasks include run strict link audit, find broken internal links in v2, audit mdx imports and hrefs.
tier: 1
invoke_when:
  - "run strict link audit"
  - "find broken internal links in v2"
  - "audit mdx imports and hrefs"
primary_paths:
  - "tests/integration/v2-link-audit.js"
  - "tasks/reports/navigation-links/LINK_TEST_REPORT.md"
  - "snippets/data"
  - "docs.json"
primary_commands:
  - "node tests/integration/v2-link-audit.js --full --write-links --strict"
  - "node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md"
---

SKILL: V2 Link Audit Runbook

Goal
Detect and resolve missing internal links/imports and route issues in v2 content with strict auditing.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Choose audit mode (full/staged/files) based on scope.
2. Run strict mode for internal validation and review report output.
3. Fix missing targets/imports and rerun until clean.

Command examples
```bash
node tests/integration/v2-link-audit.js --full --write-links --strict
node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md
```

Deliverable Format
- Audit result summary with missing-path categories.
- Resolved-link/import change list.

Failure Modes / Fallback
- If external links are noisy, rely on classify-only policy and focus on internal blockers.
- If moved-path hints appear, validate candidates before changing references.

Validation Checklist
- [ ] Strict audit command executed at least once.
- [ ] Report path and result status captured.
- [ ] No hook-bypass guidance included.
