# Workflow Audit Draft: Docs CI - Content Quality Suite

- Source path: `.github/workflows/test-suite.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `keep`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Docs CI - Content Quality Suite runs on pull_request, push, workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/automations/content/data/fetching/fetch-external-docs.sh
- operations/scripts/generators/components/library/generate-component-registry.js
- operations/scripts/validators/components/documentation/check-component-docs.js
- operations/scripts/validators/components/library/check-component-css.js
- operations/scripts/validators/components/library/check-mdx-component-scope.js
- operations/scripts/validators/components/library/check-naming-conventions.js
- operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js
- operations/scripts/validators/governance/pr/check-component-immutability.js
- secret:GITHUB_TOKEN

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Uses `localhost:3000`, which conflicts with the repo baseline that forbids port 3000 for local Mintlify sessions.
- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
