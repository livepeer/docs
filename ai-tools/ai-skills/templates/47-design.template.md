---
name: design
version: "1.0"
description: >-
  Route framework and solution design work through the canonical repo design skill
  so Codex follows the same design and co-design process.
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
  - "use /design"
  - "design this properly"
  - "co-design the framework"
  - "turn the audit into a design"
primary_paths:
  - "ai-tools/ai-skills/design/SKILL.md"
  - ".claude/skills/design/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/design/SKILL.md"
---

SKILL: Design

Goal
Expose the canonical repo design skill to Codex through a thin wrapper.

Constraints
- Do not duplicate design-stage guidance here.
- Keep this wrapper limited to routing into the canonical design skill.
- Preserve the canonical design file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/design/SKILL.md`.
2. Follow the canonical design workflow from that file.
3. If the canonical file is unavailable, say so and provide only a minimal design outline.

Deliverable Format
- Use the output contract defined by the canonical design skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing an ungoverned design framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/design/SKILL.md`.
- [ ] No unique design logic was added here.
