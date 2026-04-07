# Workflow Audit Draft: Codex Governance

- Source path: `.github/workflows/codex-governance.yml`
- Workflow family: `governance-maintenance`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `handover-support`
- Concern: `agent-runtime`
- Risk level: `medium`
- Dispatcher candidate: `handover-readiness`
- Consolidation target: `dispatcher:handover-readiness`

## Summary

Codex Governance runs on pull_request and primarily produces workflow logs and job status.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/check-codex-pr-overlap.js
- operations/scripts/validators/governance/compliance/validate-codex-task-contract.js
- secret:GITHUB_TOKEN

## Dependants

- dispatcher:handover-readiness

## Frailty Notes

- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
