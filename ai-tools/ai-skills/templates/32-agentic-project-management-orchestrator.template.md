---
name: agentic-project-management-orchestrator
description: Plan Livepeer Docs repo changes through gated discovery, phased scoping, validation mapping, and handover-ready artifacts; not for direct execution or cross-agent packaging.
tier: 3
triggers:
  - "review research and plan this repo change"
  - "break this docs infra work into phases"
  - "prepare implementation plan and validation gates"
  - "create a handover-ready task plan"
primary_paths:
  - "README.md"
  - "docs-guide/overview.mdx"
  - "docs-guide/policies/source-of-truth-policy.mdx"
  - "docs-guide/policies/quality-gates.mdx"
  - "docs-guide/features/feature-map.mdx"
  - "docs-guide/features/architecture-map.mdx"
  - "tests/README.md"
primary_commands:
  - "node tools/scripts/generate-docs-guide-indexes.js --check"
  - "node tests/run-all.js --staged --skip-browser"
---

SKILL: Agentic Project Management Orchestrator

Goal
Turn repo-wide docs infrastructure requests into decision-complete implementation plans before mutation, with explicit scope, validation mapping, and handover-ready artifacts.

Constraints
- Plan first. Do not jump from an ambiguous request straight into implementation.
- Inspect current repo state and canonical docs-guide sources before asking intent questions or proposing structure changes.
- Treat work as repo-wide docs infrastructure by default: content, navigation, scripts, generated indexes, audits, and governance may all be in scope.
- Do not introduce `.apm/` assets, upstream slash-command packs, or multi-role APM clones for v1.
- Do not add this skill to `ai-tools/ai-skills/catalog/skill-catalog.json`, `ai-tools/ai-skills/catalog/execution-manifest.json`, or `ai-tools/agent-packs/*` unless a later task explicitly expands scope.
- Do not bypass hooks (`--no-verify` or `-n`) and do not modify frozen `v1/` content unless explicitly requested.

Workflow
1. Discovery gate:
   - Inspect current repository state, impacted paths, existing automation, and source-of-truth docs in `README.md`, `docs-guide/overview.mdx`, `docs-guide/policies/source-of-truth-policy.mdx`, `docs-guide/policies/quality-gates.mdx`, `docs-guide/features/feature-map.mdx`, `docs-guide/features/architecture-map.mdx`, and `tests/README.md`.
   - Identify what is already canonical, generated, or test-owned so the plan targets root causes instead of surface edits.
   - List missing facts, likely dependent surfaces, and risks caused by hidden generated artifacts or policy drift.
2. Planning gate:
   - Define goal, success criteria, scope in/out, assumptions, dependencies, acceptance checks, and approval checkpoints.
   - Break work into anti-packing task slices that can be handed to specialist skills or implementation tasks without forcing the implementer to make design decisions.
   - If the request implies immediate execution, still emit the plan first and mark the transition point where implementation can safely begin.
3. Validation gate:
   - Map each workstream to the smallest sufficient validation set: staged checks, targeted unit tests, generators, link audits, browser sweeps, navigation checks, or docs-guide sync checks.
   - Prefer repository-backed commands and note when generated outputs must be refreshed in the same change.
   - Call out any gaps where no reliable automated check exists and define the required manual evidence.
4. Handover gate:
   - Produce one reusable handover artifact that summarises context, phased tasks, dependencies, blockers, risks, validation matrix, and exact next actions.
   - Recommend the next specialist skill explicitly when execution should move to `mintlify-authoring-style-compliance`, `docs-ia-route-placement`, `docs-source-verification`, `staged-test-suite-runner`, `v2-link-audit-runbook`, `v2-browser-sweep-runbook`, or `codex-task-isolation-standard`.

Command examples
```bash
node tools/scripts/generate-docs-guide-indexes.js --check
node tests/run-all.js --staged --skip-browser
```

Deliverable Format
- A planning artifact with:
  - request summary and target outcome
  - current-state findings and canonical sources consulted
  - scope in / scope out
  - phased task breakdown with dependencies and approval gates
  - validation matrix mapping each phase to exact commands or manual evidence
  - risks, blockers, and assumptions
  - recommended next skill(s) or execution surface
- The artifact must be decision-complete enough that another engineer or agent can implement it without making new product or governance decisions.

Failure Modes / Fallback
- If the request is too broad, split it into separate workstreams with explicit sequencing rather than producing one overloaded task list.
- If repo facts are missing or contradictory, stop at the discovery gate, document the conflict, and identify the canonical source or owner needed to resolve it.
- If a specialist skill already covers the request directly, use this skill only to scope and route the work, then hand off instead of duplicating specialist instructions.
- If validation cost is too high for the proposed change, narrow scope and choose the smallest check set that still protects quality gates.

Validation Checklist
- [ ] Discovery references current repo state and canonical docs-guide sources.
- [ ] Scope, assumptions, dependencies, and approval checkpoints are explicit.
- [ ] Work is split into phased, anti-packing task slices.
- [ ] Every workstream has mapped validation commands or manual evidence.
- [ ] Generated artifacts and sync requirements are called out where applicable.
- [ ] Final output includes risks, blockers, and recommended next skill(s).
