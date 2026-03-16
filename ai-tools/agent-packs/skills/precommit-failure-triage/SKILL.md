---
name: precommit-failure-triage
version: "1.0"
description: >-
  Diagnose and resolve pre-commit failures by mapping hook output to exact rule and fix path. Use when tasks include commit blocked by pre-commit hook, hook verification failed, fix pre-commit errors quickly.
tier: 1
invoke_when:
  - "commit blocked by pre-commit hook"
  - "hook verification failed"
  - "fix pre-commit errors quickly"
primary_paths:
  - ".githooks/pre-commit"
  - ".githooks/verify.sh"
  - "contribute/CONTRIBUTING/GIT-HOOKS.md"
  - "tests/WHEN-TESTS-RUN.md"
primary_commands:
  - "bash .githooks/pre-commit"
  - "bash .githooks/verify.sh"
---

SKILL: Pre-commit Failure Triage

Goal
Turn blocking hook output into precise, minimal remediations without bypassing safeguards.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Replay hook checks and capture the first blocking failure class.
2. Map the error to enforcing script/rule and apply smallest fix.
3. Re-run hook flow until clean.

Command examples
```bash
bash .githooks/pre-commit
bash .githooks/verify.sh
```

Deliverable Format
- Root-cause summary tied to hook rule.
- Applied fix list and rerun outcome.

Failure Modes / Fallback
- If command context differs from commit-time state, re-stage and retest in same shell/session.
- If browser checks fail due to env readiness, fix env prerequisites rather than bypassing checks.

Validation Checklist
- [ ] Hook run completes without blocking violations.
- [ ] No bypass flags are used.
- [ ] All fixes stay outside frozen `v1/`.
