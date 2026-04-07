---
name: dispatch
version: "1.0"
description: >-
  Route dispatch and orchestration work through the canonical repo dispatch skill
  so Codex follows the same workflow-classification and routing model.
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
  - "use /dispatch"
  - "dispatch this workflow"
  - "classify and route this task"
  - "orchestrate the next phase"
primary_paths:
  - "ai-tools/ai-skills/dispatch/SKILL.md"
  - ".claude/skills/dispatch/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/dispatch/SKILL.md"
---

SKILL: Dispatch

Goal
Expose the canonical repo dispatch skill to Codex through a thin wrapper.

Constraints
- Do not copy dispatch heuristics into this wrapper.
- Keep the adapter thin and route to the canonical dispatch workflow.
- Preserve the canonical dispatch file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/dispatch/SKILL.md`.
2. Follow the canonical dispatch workflow from that file.
3. If the canonical file is unavailable, state the gap and fall back to a minimal routing summary only.

Deliverable Format
- Use the routing/output contract defined by the canonical dispatch skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it instead of inventing a parallel dispatch framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/dispatch/SKILL.md`.
- [ ] No unique dispatch logic was introduced here.
