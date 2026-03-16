---
name: cross-agent-packager
version: "1.0"
description: >-
  Generate consistent multi-agent skill packs from one canonical catalog so Codex, Cursor, Claude Code, and Windsurf stay aligned on shared workflow definitions.
invoke_when:
  - "package skills for codex cursor claude and windsurf"
  - "sync cross-agent skill packs"
  - "generate agent pack outputs from one catalog"
---

SKILL: Cross-Agent Packager

Goal
Provide one packaging path so contributors can install and run the same audit skills across supported agents.

Command
```bash
node tools/scripts/cross-agent-packager.js --agent-pack all
```

Outputs
- `ai-tools/agent-packs/codex/skills-manifest.json`
- `ai-tools/agent-packs/cursor/rules.md`
- `ai-tools/agent-packs/claude/CLAUDE.md`
- `ai-tools/agent-packs/windsurf/rules.md`
