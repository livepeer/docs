---
name: research
version: "1.0"
description: >-
  Route repo research work through the canonical research skill so Codex can run
  the expected discovery and evidence-gathering workflow for Livepeer Docs
  planning, audits, and implementation work.
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
  - "use /research"
  - "research this first"
  - "do the discovery pass"
  - "gather evidence before we act"
primary_paths:
  - "ai-tools/ai-skills/research/SKILL.md"
  - ".claude/skills/research/SKILL.md"
primary_commands:
  - "read ai-tools/ai-skills/research/SKILL.md"
---

SKILL: Research

Goal
Expose the canonical repo research skill to Codex through a thin wrapper.

Constraints
- Do not restate the research method here.
- Keep the wrapper limited to routing into the canonical research skill.
- Preserve the canonical research file as the source of truth.

Workflow
1. Read `ai-tools/ai-skills/research/SKILL.md`.
2. Follow the canonical research workflow from that file.
3. If the canonical file is unavailable, state the limitation and use a minimal manual research pass.

Deliverable Format
- Use the output contract defined by the canonical research skill.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing a replacement framework.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/research/SKILL.md`.
- [ ] No unique research method was added here.
