# Workflow Audit Draft: Project Showcase Sync

- Source path: `.github/workflows/project-showcase-sync.yml`
- Workflow family: `issue-intake-and-triage`
- Cleanup decision: `needs-investigation`
- Usage status: `active-mutating`
- Process fit: `legacy-or-unclear`
- Concern: `review`
- Risk level: `high`
- Dispatcher candidate: `research-review-packet`
- Consolidation target: `dispatcher:research-review-packet`

## Summary

Project Showcase Sync runs on repository_dispatch, schedule, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: `research-review-packet`.

## Dependencies

- .github/scripts/project-showcase-sync.js
- action:actions/checkout@v4
- action:actions/setup-node@v4
- secret:GITHUB_TOKEN
- secret:SHOWCASE_DISCORD_BOT_TOKEN
- secret:SHOWCASE_GOOGLE_SERVICE_ACCOUNT_JSON

## Dependants

- dispatcher:research-review-packet

## Frailty Notes

- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
