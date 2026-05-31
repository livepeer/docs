# Workflow Audit Draft: Governance Repair

- Source path: `.github/workflows/repair-governance.yml`
- Workflow family: `governance-maintenance`
- Cleanup decision: `merge`
- Usage status: `active-mutating`
- Process fit: `handover-support`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `repo-cleanup-handover`
- Consolidation target: `future:governance-maintenance-workflow`

## Summary

Governance Repair runs on schedule, workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:governance-maintenance-workflow` so one workflow owns both check and write modes.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- action:peter-evans/create-pull-request@v7
- operations/scripts/dispatch/governance/pipelines/governance-pipeline.js
- operations/scripts/generators/governance/root/generate-root-governance-artifacts.js
- operations/scripts/validators/governance/compliance/check-root-governance-sync.js
- workspace/reports/repo-ops/REPAIR_REPORT_LATEST.json

## Dependants

- dispatcher:repo-cleanup-handover

## Frailty Notes

- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
