# Workflow Audit Draft: workspace/ retention enforcement

- Source path: `.github/workflows/tasks-retention.yml`
- Workflow family: `governance-maintenance`
- Cleanup decision: `needs-investigation`
- Usage status: `placeholder`
- Process fit: `handover-support`
- Concern: `repo-ops`
- Risk level: `medium`
- Dispatcher candidate: `repo-cleanup-handover`
- Consolidation target: `dispatcher:repo-cleanup-handover`

## Summary

workspace/ retention enforcement runs on schedule, workflow_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Either implement the documented retention policy as a real workflow or remove the placeholder and keep the policy in docs only.

## Dependencies

- No direct dependencies identified in current repo scan.

## Dependants

- dispatcher:repo-cleanup-handover

## Frailty Notes

- No local repo dependencies were detected automatically; verify whether this is truly standalone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- The file is a TODO placeholder, but the retention concern is probably real.
- This needs a concrete owner decision before handover.
