---
name: thread
version: "1.0"
description: >-
  Start or status a repo-governed session thread anchor so the outcome, progress,
  next action, and backlog stay visible throughout the conversation.
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
  - "use /thread"
  - "start this session properly"
  - "give me thread status"
  - "re-anchor this conversation"
primary_paths:
  - "ai-tools/ai-skills/thread/SKILL.md"
  - ".claude/skills/thread/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/thread/SKILL.md"
---

SKILL: Thread

Goal
Expose the canonical repo thread skill to Codex through a thin wrapper.

Constraints
- Do not fork or rewrite the canonical thread workflow here.
- Keep this wrapper thin and route to the canonical skill body.
- If repo instructions and the canonical skill conflict, follow the active repo instructions first.

Workflow
1. Read `ai-tools/ai-skills/thread/SKILL.md`.
2. Follow the canonical thread workflow from that file.
3. If the canonical file is unavailable, fall back to a manual thread status format and state the limitation.

Deliverable Format
- Use the output contract defined by the canonical thread skill.

Failure Modes / Fallback
- If the canonical skill path is missing, say so explicitly and continue with a manual thread anchor/status response.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/thread/SKILL.md`.
- [ ] No unique lifecycle logic was added here.
