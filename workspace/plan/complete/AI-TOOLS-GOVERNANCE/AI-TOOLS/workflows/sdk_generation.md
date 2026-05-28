# Workflow Audit Draft: Generate

- Source path: `.github/workflows/sdk_generation.yaml`
- Workflow family: `content-publication`
- Cleanup decision: `needs-investigation`
- Usage status: `active-mutating`
- Process fit: `legacy-or-unclear`
- Concern: `authoring`
- Risk level: `high`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

Generate runs on schedule, workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: `page-ship`.

## Dependencies

- secret:GITHUB_TOKEN
- secret:SPEAKEASY_API_KEY

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
