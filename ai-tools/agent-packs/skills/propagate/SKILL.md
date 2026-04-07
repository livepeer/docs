---
name: propagate
version: "1.0"
description: >-
  Route downstream-impact and propagation work through the canonical repo propagate
  skill so Codex follows the same dependency-update workflow across Livepeer Docs
  pages, references, and governed outputs.
metadata:
  version: "1.0"
  category: "process"
  tier: "2"
  type: "adapter"
  concern: "research"
  scope: "agent"
  status: "active"
  layer: "adapter"
tier: 2
invoke_when:
  - "use /propagate"
  - "propagate this change"
  - "find downstream impacts"
  - "update the dependent surfaces"
primary_paths:
  - "ai-tools/ai-skills/propagate/SKILL.md"
  - ".claude/skills/propagate/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/propagate/SKILL.md"
---

SKILL: Propagate

Goal
Expose the canonical repo propagate skill to Codex through a thin wrapper.

Constraints
- Do not duplicate propagation rules in this wrapper.
- Keep the adapter thin and route to the canonical propagate workflow.
- Preserve the canonical propagate file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/propagate/SKILL.md`.
2. Follow the canonical propagate workflow from that file.
3. If the canonical file is unavailable, state the limitation and provide only a minimal dependency summary.

Deliverable Format
- Use the output contract defined by the canonical propagate skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing a separate propagation model.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/propagate/SKILL.md`.
- [ ] No unique propagation logic was added here.
