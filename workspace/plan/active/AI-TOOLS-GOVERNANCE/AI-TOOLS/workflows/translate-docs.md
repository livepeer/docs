# Workflow Audit Draft: Docs Translation Pipeline

- Source path: `.github/workflows/translate-docs.yml`
- Workflow family: `content-publication`
- Cleanup decision: `needs-investigation`
- Usage status: `active-mutating`
- Process fit: `legacy-or-unclear`
- Concern: `authoring`
- Risk level: `high`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

Docs Translation Pipeline runs on workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: `page-ship`.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- action:peter-evans/create-pull-request@v7
- operations/scripts/automations/content/language-translation/config.json
- operations/scripts/automations/content/language-translation/generate-localized-docs-json.js
- operations/scripts/automations/content/language-translation/translate-docs.js
- operations/scripts/automations/content/language-translation/validate-generated.js
- operations/scripts/generators/content/catalogs/generate-docs-index.js
- operations/tests/unit/docs-navigation.test.js
- secret:OPENROUTER_API_KEY
- v2/cn
- v2/es
- v2/fr

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
