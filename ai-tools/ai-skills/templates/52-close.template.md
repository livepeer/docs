---
name: close
version: "1.0"
description: >-
  Route session closeout work through the canonical repo close skill so Codex
  follows the same finalisation and handoff workflow for governed docs and repo
  infrastructure work.
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
  - "use /close"
  - "close out this session"
  - "finalise the thread"
  - "wrap this up properly"
primary_paths:
  - "ai-tools/ai-skills/close/SKILL.md"
  - ".claude/skills/close/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/close/SKILL.md"
---

SKILL: Close

Goal
Expose the canonical repo close skill to Codex through a thin wrapper.

Constraints
- Do not duplicate closeout policy in this wrapper.
- Keep the adapter limited to routing into the canonical close skill.
- Preserve the canonical close file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/close/SKILL.md`.
2. Follow the canonical close workflow from that file.
3. If the canonical file is unavailable, state the limitation and provide only a minimal closeout summary.

Deliverable Format
- Use the output contract defined by the canonical close skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing a separate closeout framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/close/SKILL.md`.
- [ ] No unique closeout logic was added here.
