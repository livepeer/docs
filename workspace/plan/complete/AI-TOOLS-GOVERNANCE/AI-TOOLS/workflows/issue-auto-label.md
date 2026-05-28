# Workflow Audit Draft: Issue Auto Label

- Source path: `.github/workflows/issue-auto-label.yml`
- Workflow family: `review-event-automation`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `core-shipping`
- Concern: `review`
- Risk level: `low`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Issue Auto Label runs on issues and primarily produces workflow logs and job status.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/github-script@v7

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Current heuristic risk level is `low`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
