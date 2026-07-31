# Workflow Audit Draft: Sync Large Assets

- Source path: `.github/workflows/sync-large-assets.yml`
- Workflow family: `governance-maintenance`
- Cleanup decision: `needs-investigation`
- Usage status: `active-mutating`
- Process fit: `legacy-or-unclear`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `repo-cleanup-handover`
- Consolidation target: `dispatcher:repo-cleanup-handover`

## Summary

Sync Large Assets runs on push, schedule, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: `repo-cleanup-handover`.

## Dependencies

- .github/assets-manifest.txt
- .github/README.md
- action:actions/checkout@v4
- snippets/assets
- snippets/assets/
- v2/assets
- v2/assets/

## Dependants

- dispatcher:repo-cleanup-handover

## Frailty Notes

- Mutates repository state from CI, which raises coordination and safety risk.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
