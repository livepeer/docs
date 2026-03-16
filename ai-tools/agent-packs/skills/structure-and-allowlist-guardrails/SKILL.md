---
name: structure-and-allowlist-guardrails
version: "1.0"
description: >-
  Apply repository structure rules and root allowlist constraints before committing changes. Use when tasks include pre-commit blocked unauthorized root files, where should this file be moved, allowlist or structure violation.
tier: 1
invoke_when:
  - "pre-commit blocked unauthorized root files"
  - "where should this file be moved"
  - "allowlist or structure violation"
primary_paths:
  - "README.md"
  - ".allowlist"
  - ".githooks/pre-commit"
  - "tasks/plan/migration-plan.md"
primary_commands:
  - "bash lpd hooks info"
  - "git diff --cached --name-only"
---

SKILL: Structure and Allowlist Guardrails

Goal
Prevent structural violations blocked by pre-commit by enforcing allowed locations and protected scopes.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Check root-level additions against allowlist and structure guidance.
2. Move files to correct directories instead of deleting/recreating when possible.
3. Re-run hook checks after structural fixes.

Command examples
```bash
bash lpd hooks info
git diff --cached --name-only
```

Deliverable Format
- Violation-to-fix mapping (file, reason, destination).
- Clean staged file list aligned to structure rules.

Failure Modes / Fallback
- If unsure about file home, prefer existing neighboring conventions under `tools/`, `snippets/`, `tasks/`, or `contribute/`.
- Never bypass hook protections for `.allowlist` edits unless explicitly human-approved.

Validation Checklist
- [ ] No unauthorized root files remain staged.
- [ ] No forbidden `snippets/` subtypes are introduced.
- [ ] No `v1/` changes are staged.
