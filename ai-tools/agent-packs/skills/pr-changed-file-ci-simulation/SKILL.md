---
name: pr-changed-file-ci-simulation
version: "1.0"
description: >-
  Simulate pull-request changed-file checks locally to reproduce CI behavior before opening PRs. Use when tasks include simulate ci locally, run pr checks before push, changed-file checks failed in github actions.
tier: 1
invoke_when:
  - "simulate ci locally"
  - "run pr checks before push"
  - "changed-file checks failed in github actions"
primary_paths:
  - "tests/run-pr-checks.js"
  - ".github/workflows/test-suite.yml"
  - "tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md"
  - "tests/WHEN-TESTS-RUN.md"
primary_commands:
  - "node tests/run-pr-checks.js --base-ref main"
  - "npm --prefix tests run test:pr"
---

SKILL: PR Changed-file CI Simulation

Goal
Match PR CI changed-file execution and catch blockers early using the same script entrypoint.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Fetch/ensure base branch context and run changed-file PR checker.
2. Inspect per-check status table and isolate failing category.
3. Re-run only relevant suite until checker is green.

Command examples
```bash
node tests/run-pr-checks.js --base-ref main
npm --prefix tests run test:pr
```

Deliverable Format
- PR-check simulation result and failing check list.
- Mapping between local failures and workflow steps.

Failure Modes / Fallback
- If base ref is unresolved, fetch base branch and rerun with explicit `--base-ref`.
- If browser checks differ from CI environment, document env deltas clearly.

Validation Checklist
- [ ] Changed-file checker command is executed.
- [ ] Failures are grouped by named check from summary output.
- [ ] No non-scoped mass changes are introduced.
