---
name: cross-agent-packager
description: >-
  Generate consistent multi-agent skill packs from one canonical catalog so Codex, Cursor, Claude Code, and Windsurf stay aligned on shared workflow definitions. Use when packaging skills for multiple agents, syncing cross-agent skill packs, or generating agent pack outputs from the catalog.
metadata:
  version: "1.2"
  category: meta
---

SKILL: Cross-Agent Packager

Goal
Provide one packaging path so contributors can install and run the same audit skills across supported agents.

Command
```bash
node operations/scripts/integrators/ai/agents/cross-agent-packager.js --agent-pack all
```

Outputs
- `ai-tools/agent-packs/codex/skills-manifest.json`
- `ai-tools/agent-packs/cursor/rules.md`
- `ai-tools/agent-packs/claude/CLAUDE.md`
- `ai-tools/agent-packs/windsurf/rules.md`
