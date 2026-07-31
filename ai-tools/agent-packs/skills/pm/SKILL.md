---
name: pm
version: "1.0"
description: >-
  Route project-management and planning work through the canonical repo pm skill
  so Codex follows the same planning and coordination workflow.
metadata:
  version: "1.0"
  category: "process"
  tier: "2"
  type: "adapter"
  concern: "repo-ops"
  scope: "agent"
  status: "active"
  layer: "adapter"
tier: 2
invoke_when:
  - "use /pm"
  - "do the PM pass"
  - "plan this work properly"
  - "coordinate the task flow"
primary_paths:
  - "ai-tools/ai-skills/pm/SKILL.md"
  - ".claude/skills/pm/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/pm/SKILL.md"
---

SKILL: PM

Goal
Expose the canonical repo pm skill to Codex through a thin wrapper.

Constraints
- Do not duplicate planning or coordination logic here.
- Keep the adapter limited to routing into the canonical pm skill.
- Preserve the canonical pm file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/pm/SKILL.md`.
2. Follow the canonical pm workflow from that file.
3. If the canonical file is unavailable, state the limitation and provide only a minimal plan outline.

Deliverable Format
- Use the output contract defined by the canonical pm skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing an ungoverned planning framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/pm/SKILL.md`.
- [ ] No unique PM logic was added here.
