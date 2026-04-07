---
name: iterate
version: "1.0"
description: >-
  Route iteration and review-cycle work through the canonical repo iterate skill
  so Codex follows the expected refine-and-retest workflow for governed docs and
  repo infrastructure changes.
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
  - "use /iterate"
  - "iterate on this"
  - "refine this after review"
  - "run the next iteration"
primary_paths:
  - "ai-tools/ai-skills/iterate/SKILL.md"
  - ".claude/skills/iterate/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/iterate/SKILL.md"
---

SKILL: Iterate

Goal
Expose the canonical repo iterate skill to Codex through a thin wrapper.

Constraints
- Do not duplicate iteration-cycle logic in this wrapper.
- Keep the adapter limited to routing into the canonical iterate skill.
- Preserve the canonical iterate file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/iterate/SKILL.md`.
2. Follow the canonical iterate workflow from that file.
3. If the canonical file is unavailable, state the limitation and provide only a minimal iteration plan.

Deliverable Format
- Use the output contract defined by the canonical iterate skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing a separate iteration framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/iterate/SKILL.md`.
- [ ] No unique iteration logic was added here.
