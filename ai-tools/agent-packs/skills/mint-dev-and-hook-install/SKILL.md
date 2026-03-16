---
name: mint-dev-and-hook-install
version: "1.0"
description: >-
  Start local Mintlify development with automatic hook installation and verify hook state. Use when tasks include start local docs server, install hooks before dev, mint dev not working in this repo.
tier: 1
invoke_when:
  - "start local docs server"
  - "install hooks before dev"
  - "mint dev not working in this repo"
primary_paths:
  - "tools/scripts/mint-dev.sh"
  - ".githooks/install.sh"
  - ".githooks/pre-commit"
  - "contribute/CONTRIBUTING/GIT-HOOKS.md"
primary_commands:
  - "bash lpd dev"
  - "bash lpd hooks status"
---

SKILL: Mint Dev and Hook Install

Goal
Launch local docs preview correctly while ensuring repository hooks are installed and current.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Use `lpd dev` as the default launcher for local preview and hook sync.
2. Verify hook status and re-install hooks when out of date.
3. Confirm local server availability before deeper troubleshooting.

Command examples
```bash
bash lpd dev
bash lpd hooks status
```

Deliverable Format
- Confirmed dev server command path and hook status.
- Troubleshooting notes with actionable command fixes.

Failure Modes / Fallback
- If PATH wiring is incomplete, use `bash lpd dev` directly.
- If hooks are missing, run install script and re-check status.

Validation Checklist
- [ ] Dev command and hook status command are included.
- [ ] Hook enforcement remains enabled.
- [ ] No `v1/` edits are proposed.
