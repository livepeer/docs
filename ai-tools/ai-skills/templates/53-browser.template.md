---
name: browser
version: "1.2"
description: >-
  Route Codex browser-backed validation through the repo browser skill so
  launches, route probes, browser checks, and teardown follow the governed
  validation contract instead of leaking sessions or validating the wrong
  server.
metadata:
  version: "1.2"
  category: "governance"
  tier: "2"
  type: "governance"
  concern: "validation"
  scope: "agent"
  status: "active"
  layer: "adapter"
aliases:
  - browser-governor
  - browser-validation-governor
tier: 2
invoke_when:
  - "use browser"
  - "$browser"
  - "use browser-governor"
  - "use browser-validation-governor"
  - "run browser validation"
  - "validate this page in a browser"
  - "start a scoped browser session"
  - "debug why browser validation is stuck"
primary_paths:
  - "ai-tools/ai-skills/browser/SKILL.md"
  - ".githooks/server-manager.js"
  - "operations/scripts/automations/governance/cleanup-local-dev-sessions.js"
  - "operations/tests/contracts-validator-contract.js"
primary_commands:
  - "read ai-tools/ai-skills/browser/SKILL.md"
  - "node operations/scripts/automations/governance/cleanup-local-dev-sessions.js --json"
---

SKILL: Browser

Goal
Expose the canonical repo browser skill to Codex so browser-backed validation follows the governed runtime contract.

Constraints
- Do not invent a new browser workflow outside the canonical skill.
- Use the canonical skill as the source of truth for launch, probe, and teardown rules.
- Prefer repo-managed browser harnesses over raw MCP retries or ad-hoc long-lived preview sessions.

Workflow
1. Read `ai-tools/ai-skills/browser/SKILL.md`.
2. Apply the governed browser-validation workflow from that file.
3. If the canonical skill is unavailable, state the gap and use only a minimal cleanup-first browser note.

Deliverable Format
- Use the canonical skill's evidence and validation checklist when reporting browser-validation work.

Failure Modes / Fallback
- If the canonical skill path is missing, report it and avoid inventing an ungoverned browser workflow.

Validation Checklist
- [ ] The wrapper points to `ai-tools/ai-skills/browser/SKILL.md`.
- [ ] No unique browser-validation policy was invented in this wrapper.
