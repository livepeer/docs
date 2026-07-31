---
name: agent-brief
version: "1.0"
description: >-
  Route agent briefing work through the canonical repo brief skill so Codex can
  align on scope, context, and constraints before execution.
metadata:
  version: "1.0"
  category: "process"
  tier: "2"
  type: "adapter"
  concern: "agent-runtime"
  scope: "agent"
  status: "active"
  layer: "adapter"
tier: 2
invoke_when:
  - "use /agent-brief"
  - "brief the agent"
  - "prepare a task brief"
  - "write the working brief for this task"
primary_paths:
  - "ai-tools/ai-skills/agent-brief/SKILL.md"
  - ".claude/skills/agent-brief/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/agent-brief/SKILL.md"
---

SKILL: Agent Brief

Goal
Expose the canonical repo agent-brief skill to Codex through a thin wrapper.

Constraints
- Do not duplicate briefing rules in this wrapper.
- Keep the adapter limited to routing Codex into the canonical brief workflow.
- Preserve the canonical brief file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/agent-brief/SKILL.md`.
2. Follow the canonical briefing workflow from that file.
3. If the canonical file is unavailable, state the gap and provide only a minimal manual brief.

Deliverable Format
- Use the brief/output contract defined by the canonical skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and use a minimal manual brief instead of inventing hidden rules.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/agent-brief/SKILL.md`.
- [ ] No briefing policy was duplicated here.
