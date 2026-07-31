---
name: diagnose
version: "1.0"
description: >-
  Route diagnosis and root-cause analysis through the canonical repo diagnose skill
  so Codex follows the expected debugging and failure-triage workflow.
metadata:
  version: "1.0"
  category: "process"
  tier: "2"
  type: "adapter"
  concern: "validation"
  scope: "agent"
  status: "active"
  layer: "adapter"
tier: 2
invoke_when:
  - "use /diagnose"
  - "diagnose this issue"
  - "find the root cause"
  - "triage why this is failing"
primary_paths:
  - "ai-tools/ai-skills/diagnose/SKILL.md"
  - ".claude/skills/diagnose/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/diagnose/SKILL.md"
---

SKILL: Diagnose

Goal
Expose the canonical repo diagnose skill to Codex through a thin wrapper.

Constraints
- Do not restate diagnosis policy in this wrapper.
- Keep the adapter thin and route to the canonical diagnose workflow.
- Preserve the canonical diagnose file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/diagnose/SKILL.md`.
2. Follow the canonical diagnose workflow from that file.
3. If the canonical file is unavailable, state the gap and use a minimal root-cause note only.

Deliverable Format
- Use the output contract defined by the canonical diagnose skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing a replacement debugging framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/diagnose/SKILL.md`.
- [ ] No unique diagnostic logic was introduced here.
