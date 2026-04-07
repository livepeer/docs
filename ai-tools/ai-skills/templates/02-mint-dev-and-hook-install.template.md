---
name: mint-dev-and-hook-install
description: >-
  Start local Mintlify development with automatic hook installation and verify
  hook state. Use when: start local docs server, install hooks before dev,
  mint dev not working in this repo.
metadata:
  version: "1.3"
  category: "meta"
  tier: "1"
primary_paths:
  - "docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md"
  - "tools/dev/preview/mint-dev.sh"
  - ".githooks/install.sh"
  - ".githooks/pre-commit"
  - "docs-guide/contributing/git-hooks.mdx"
  - "docs-guide/contributing/local-preview.mdx"
  - "docs-guide/tooling/lpd-cli.mdx"
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
- Any `lpd dev` or `mint dev` session started for the task must be stopped before handoff.

Workflow
1. Use `lpd dev` as the default launcher for local preview and hook sync, follow the canonical scoped-preview and port rules, and run it in a dedicated session you can stop cleanly with `Ctrl-C` when the task is done.
2. Verify hook status and re-install hooks when out of date.
3. Confirm local server availability before deeper troubleshooting.

Command examples
```bash
bash lpd dev
bash lpd hooks status
```

Deliverable Format
- Confirmed dev server command path and hook status.
- Confirmation that any dev server started for the task was shut down after use.
- Troubleshooting notes with actionable command fixes.

Failure Modes / Fallback
- If PATH wiring is incomplete, use `bash lpd dev` directly.
- If hooks are missing, run install script and re-check status.
- If the task ends or pivots away from local preview, stop the running `lpd dev` session instead of leaving it idle.

Validation Checklist
- [ ] Dev command and hook status command are included.
- [ ] Hook enforcement remains enabled.
- [ ] Any dev server started for the task was stopped before finish.
- [ ] No `v1/` edits are proposed.
