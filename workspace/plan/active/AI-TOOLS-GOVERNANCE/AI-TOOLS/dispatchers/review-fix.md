# Dispatcher Audit Draft: Review Fix

- Source path: `workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md`
- Concern: `review`
- Status: `active`
- Cleanup decision: `keep`
- Readiness: `phase-1-design`

## Summary

Review Fix is a governed dispatcher concept that coordinates 4 child capability surfaces into one named workflow.

## Child Skills

- `docs-review-packet-generation`
- `docs-review-fix-execution`
- `staged-test-suite-runner`
- `precommit-failure-triage`

## Risks

- Different review surfaces still use different evidence formats.
- Not every workflow failure maps cleanly to one existing atomic skill yet.

## Next Move

Absorb validation-sweep and review-repair workflows behind one governed orchestration path.

## Cleanup Rationale

- Dispatcher pages are canonical workflow design surfaces and should remain thinner than runtime adapters.
- They exist to reduce chat-only orchestration and make repeated delivery patterns visible.
