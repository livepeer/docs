# Workflow Audit Draft: Verify AI Sitemap

- Source path: `.github/workflows/verify-ai-sitemap.yml`
- Workflow family: `ai-runtime-artifacts`
- Cleanup decision: `merge`
- Usage status: `active`
- Process fit: `handover-support`
- Concern: `agent-runtime`
- Risk level: `low`
- Dispatcher candidate: `handover-readiness`
- Consolidation target: `future:ai-runtime-artifacts-workflow`

## Summary

Verify AI Sitemap runs on pull_request, push, workflow_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:ai-runtime-artifacts-workflow` so one workflow owns both check and write modes.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/generators/content/seo/generate-ai-sitemap.js

## Dependants

- dispatcher:handover-readiness

## Frailty Notes

- Current heuristic risk level is `low`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
