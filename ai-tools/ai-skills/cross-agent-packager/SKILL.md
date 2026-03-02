---
name: cross-agent-packager
description: Generate consistent skill packs for Codex, Cursor, Claude Code, and Windsurf from one shared catalog.
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
