---
name: lpd-bootstrap-and-doctor
version: "1.0"
description: >-
  Bootstrap local docs environment and verify readiness using lpd setup and doctor workflows. Use when tasks include set up this repo locally, run doctor for docs environment, bootstrap lpd tooling.
tier: 1
invoke_when:
  - "set up this repo locally"
  - "run doctor for docs environment"
  - "bootstrap lpd tooling"
primary_paths:
  - "README.md"
  - "lpd"
  - "tools/package.json"
  - "tests/package.json"
primary_commands:
  - "bash lpd setup --yes"
  - "bash lpd doctor --strict"
---

SKILL: LPD Bootstrap and Doctor

Goal
Prepare a contributor machine for this repository and confirm baseline tooling/health before content changes.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Confirm prerequisites and shell integration expectations from `README.md`.
2. Run setup once, then run doctor in strict mode.
3. Report missing dependencies and exact remediation commands.

Command examples
```bash
bash lpd setup --yes
bash lpd doctor --strict
```

Deliverable Format
- Environment status summary with pass/fail checks.
- List of blockers with exact command-based fixes.

Failure Modes / Fallback
- If `lpd` is not on PATH, use `bash lpd <command>` fallback.
- If strict doctor fails, run non-strict doctor and isolate failing checks for targeted fixes.

Validation Checklist
- [ ] Both setup and doctor commands were executed.
- [ ] Failures, if any, include concrete next commands.
- [ ] No recommendations to bypass hooks or mutate `v1/`.
