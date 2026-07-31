# Dispatcher Audit Draft: Page Ship

- Source path: `workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md`
- Concern: `authoring`
- Status: `active`
- Cleanup decision: `keep`
- Readiness: `phase-1-design`

## Summary

Page Ship is a governed dispatcher concept that coordinates 6 child capability surfaces into one named workflow.

## Child Skills

- `page-content-research-review`
- `docs-copy`
- `docs-ia-route-placement`
- `mintlify-authoring-style-compliance`
- `v2-link-audit-runbook`
- `v2-browser-sweep-runbook`

## Risks

- Current runtime still spans multiple independent scripts and review steps.
- Shipping criteria vary by page type and route complexity.

## Next Move

Use this as the main landing zone for shipping-oriented authoring, validation, and content refresh families.

## Cleanup Rationale

- Dispatcher pages are canonical workflow design surfaces and should remain thinner than runtime adapters.
- They exist to reduce chat-only orchestration and make repeated delivery patterns visible.
