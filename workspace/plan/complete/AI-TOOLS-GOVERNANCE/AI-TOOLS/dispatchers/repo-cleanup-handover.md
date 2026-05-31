# Dispatcher Audit Draft: Repo Cleanup Handover

- Source path: `workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md`
- Concern: `repo-ops`
- Status: `active`
- Cleanup decision: `keep`
- Readiness: `phase-1-design`

## Summary

Repo Cleanup Handover is a governed dispatcher concept that coordinates 4 child capability surfaces into one named workflow.

## Child Skills

- `repo-audit-orchestrator`
- `structure-and-allowlist-guardrails`
- `script-header-and-index-sync`
- `rubric-static-review`

## Risks

- Still partly conceptual until more repo-ops skills are normalized.
- Some cleanup tasks are broader than the current atomic-skill inventory.

## Next Move

Use this as the consolidation target for governance-repair, retention, and repo-cleanup workflows.

## Cleanup Rationale

- Dispatcher pages are canonical workflow design surfaces and should remain thinner than runtime adapters.
- They exist to reduce chat-only orchestration and make repeated delivery patterns visible.
