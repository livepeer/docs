# Workflow Audit Draft: Governance sync (post-merge)

- Source path: `.github/workflows/governance-sync.yml`
- Workflow family: `governance-maintenance`
- Cleanup decision: `merge`
- Usage status: `active-mutating`
- Process fit: `handover-support`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `repo-cleanup-handover`
- Consolidation target: `future:governance-maintenance-workflow`

## Summary

Governance sync (post-merge) runs on push and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:governance-maintenance-workflow` so one workflow owns both check and write modes.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- action:peter-evans/create-pull-request@v7
- operations/scripts/dispatch/governance/pipelines/governance-pipeline.js
- operations/scripts/generators/governance/root/generate-root-governance-artifacts.js
- operations/scripts/validators/governance/compliance/check-root-governance-sync.js
- workspace/reports/repo-ops/REPAIR_REPORT_LATEST.json

## Dependants

- dispatcher:repo-cleanup-handover

## Frailty Notes

- Current heuristic risk level is `high`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
