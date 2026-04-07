# Workflow Audit Draft: Check AI Companion Files

- Source path: `.github/workflows/check-ai-companions.yml`
- Workflow family: `ai-runtime-artifacts`
- Cleanup decision: `merge`
- Usage status: `active`
- Process fit: `handover-support`
- Concern: `agent-runtime`
- Risk level: `low`
- Dispatcher candidate: `handover-readiness`
- Consolidation target: `future:ai-runtime-artifacts-workflow`

## Summary

Check AI Companion Files runs on pull_request, push, workflow_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:ai-runtime-artifacts-workflow` so one workflow owns both check and write modes.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/generators/content/reference/generate-glossary-companions.js
- operations/scripts/validators/governance/ai/check-companion-manifest.js

## Dependants

- dispatcher:handover-readiness

## Frailty Notes

- Current heuristic risk level is `low`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
