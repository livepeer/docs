# Dispatcher Audit Draft: Research Review Packet

- Source path: `workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md`
- Concern: `research`
- Status: `active`
- Cleanup decision: `keep`
- Readiness: `phase-1-design`

## Summary

Research Review Packet is a governed dispatcher concept that coordinates 4 child capability surfaces into one named workflow.

## Child Skills

- `docs-source-verification`
- `docs-impact-propagation`
- `docs-change-review`
- `docs-research-packet-generation`

## Risks

- Still a design-time dispatcher rather than a fully executable runtime entrypoint.
- Depends on current skill boundaries remaining accurate during consolidation.

## Next Move

Map issue-intake and research-heavy workflows into one explicit dispatcher contract.

## Cleanup Rationale

- Dispatcher pages are canonical workflow design surfaces and should remain thinner than runtime adapters.
- They exist to reduce chat-only orchestration and make repeated delivery patterns visible.
