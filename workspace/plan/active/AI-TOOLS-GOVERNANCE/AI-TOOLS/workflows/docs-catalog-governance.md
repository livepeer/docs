# Workflow Audit Draft: Docs Catalog Governance

- Source path: `.github/workflows/docs-catalog-governance.yml`
- Workflow family: `docs-catalog-governance`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `core-shipping`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `docs-catalog-governance`

## Summary

Docs Catalog Governance runs on workflow_call, workflow_dispatch and primarily produces repository commits or branch updates.

## Recommended Engineering Action

Keep this as the canonical reusable workflow for the docs-catalog-governance family and collapse future changes into this file instead of duplicating logic.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- docs-guide/catalog/pages-catalog.mdx
- docs-guide/catalog/templates-catalog.mdx
- docs-guide/catalog/workflows-catalog.mdx
- docs-guide/config/component-registry-schema.json
- docs-guide/config/component-registry.json
- operations/scripts/generators/components/documentation/generate-component-docs.js
- operations/scripts/generators/components/library/generate-component-examples.js
- operations/scripts/generators/components/library/generate-component-registry.js
- operations/scripts/generators/content/catalogs/generate-docs-index.js
- operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js
- operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js
- operations/scripts/validators/components/library/check-component-health.js
- operations/tests/unit/quality.test.js
- secret:GITHUB_TOKEN

## Dependants

- dispatcher:review-fix
- workflow:.github/workflows/check-docs-guide-catalogs.yml
- workflow:.github/workflows/check-docs-index.yml
- workflow:.github/workflows/generate-component-registry.yml
- workflow:.github/workflows/generate-docs-guide-catalogs.yml
- workflow:.github/workflows/generate-docs-index.yml

## Frailty Notes

- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- Legacy family members should remain thin wrappers only until they can be retired safely.
- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
- This is the consolidated reusable source for the docs-catalog-governance family.
