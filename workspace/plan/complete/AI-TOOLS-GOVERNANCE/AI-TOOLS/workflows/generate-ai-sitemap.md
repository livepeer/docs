# Workflow Audit Draft: Generate AI Sitemap

- Source path: `.github/workflows/generate-ai-sitemap.yml`
- Workflow family: `ai-runtime-artifacts`
- Cleanup decision: `merge`
- Usage status: `active-mutating`
- Process fit: `handover-support`
- Concern: `agent-runtime`
- Risk level: `high`
- Dispatcher candidate: `handover-readiness`
- Consolidation target: `future:ai-runtime-artifacts-workflow`

## Summary

Generate AI Sitemap runs on push, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:ai-runtime-artifacts-workflow` so one workflow owns both check and write modes.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/generators/content/seo/generate-ai-sitemap.js
- secret:GITHUB_TOKEN

## Dependants

- dispatcher:handover-readiness

## Frailty Notes

- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
