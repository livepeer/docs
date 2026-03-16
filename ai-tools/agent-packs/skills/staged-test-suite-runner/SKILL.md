---
name: staged-test-suite-runner
version: "1.0"
description: >-
  Run staged-scope validation flow to check only changed docs and scripts before commit. Use when tasks include run only staged tests, quick pre-commit checks locally, validate changed files only.
tier: 1
invoke_when:
  - "run only staged tests"
  - "quick pre-commit checks locally"
  - "validate changed files only"
primary_paths:
  - "tests/run-all.js"
  - "tests/README.md"
  - "tests/WHEN-TESTS-RUN.md"
  - ".githooks/pre-commit"
primary_commands:
  - "node tests/run-all.js --staged --skip-browser"
  - "node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md"
---

SKILL: Staged Test Suite Runner

Goal
Provide fast local confidence with staged-only tests mirroring pre-commit behavior.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run staged test orchestrator for unit checks and index/script validations.
2. Run strict staged link audit for internal references/imports.
3. Capture and triage failures before commit attempt.

Command examples
```bash
node tests/run-all.js --staged --skip-browser
node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md
```

Deliverable Format
- Staged test pass/fail summary by suite.
- Actionable failure list for unresolved checks.

Failure Modes / Fallback
- If staged scope is empty, run targeted test commands against explicit files.
- If browser is needed, escalate to full browser scripts separately.

Validation Checklist
- [ ] Staged command set includes run-all and strict link audit.
- [ ] Output includes explicit failing suite names where applicable.
- [ ] No hook bypass guidance is present.
