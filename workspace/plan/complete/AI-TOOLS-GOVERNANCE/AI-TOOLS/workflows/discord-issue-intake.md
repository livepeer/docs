# Workflow Audit Draft: Discord Issue Intake

- Source path: `.github/workflows/discord-issue-intake.yml`
- Workflow family: `issue-intake-and-triage`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `supporting-infra`
- Concern: `review`
- Risk level: `medium`
- Dispatcher candidate: `research-review-packet`
- Consolidation target: `dispatcher:research-review-packet`

## Summary

Discord Issue Intake runs on repository_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/github-script@v7

## Dependants

- dispatcher:research-review-packet

## Frailty Notes

- Current heuristic risk level is `medium`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
