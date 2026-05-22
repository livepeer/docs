# Governance Repair Report

- Date: 2026-05-22T03:29:18.202Z
- Mode: fix
- Verification: FAIL (rolled back at stage REPAIR)

## Pre Repair

- Total scripts: 85
- Grade A/B/C/F: 0/1/0/84
- Pipeline mismatches: 79
- Not in JSON: 0
- Phantom JSON: 0

## Repairs Applied

- Total fixes: 173
- JSON phantoms removed: 0
- JSON entries added: 0
- JSON entries updated: 85
- Header category added: 0
- Header purpose added: 0
- Header domain added: 84
- Header script added: 2
- Header usage added: 2
- Header scope added: 0
- Header needs added: 0
- Header purpose-statement added: 0
- Header pipeline corrected: 0
- Indexes regenerated: true

### Files Modified

- .githooks/pre-commit
- .githooks/script-index.md
- .github/script-index.md
- docs-guide/catalog/scripts-catalog.mdx
- docs-guide/indexes/scripts-index.mdx
- operations/scripts/audits/content/health/audit-wcag.js
- operations/scripts/audits/governance/repo/audit-folder-allowlist.js
- operations/scripts/dispatch/content/brand/dispatch-banned-words.js
- operations/scripts/dispatch/content/brand/dispatch-brand-check.js
- operations/scripts/dispatch/content/brand/dispatch-brand-repair.js
- operations/scripts/dispatch/content/brand/dispatch-brand-scan.js
- operations/scripts/dispatch/content/brand/dispatch-em-dashes.js
- operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js
- operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js
- operations/scripts/dispatch/content/brand/dispatch-spelling.js
- operations/scripts/dispatch/content/brand/dispatch-style-tokens.js
- operations/scripts/dispatch/content/brand/dispatch-voice-register.js
- operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js
- operations/scripts/dispatch/content/copy/dispatch-changelogs.js
- operations/scripts/dispatch/content/copy/dispatch-copy-check.js
- operations/scripts/dispatch/content/copy/dispatch-copy-repair.js
- operations/scripts/dispatch/content/copy/dispatch-copy-update.js
- operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js
- operations/scripts/dispatch/content/copy/dispatch-showcase.js
- operations/scripts/dispatch/content/copy/dispatch-social-feeds.js
- operations/scripts/dispatch/content/copy/dispatch-translations.js
- operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js
- operations/scripts/dispatch/content/discoverability/dispatch-companions.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js
- operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js
- operations/scripts/dispatch/content/discoverability/dispatch-og-images.js
- operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js
- operations/scripts/dispatch/content/health/dispatch-content-quality.js
- operations/scripts/dispatch/content/health/dispatch-health-check.js
- operations/scripts/dispatch/content/health/dispatch-health-repair.js
- operations/scripts/dispatch/content/health/dispatch-health-scan.js
- operations/scripts/dispatch/content/health/dispatch-openapi-reference.js
- operations/scripts/dispatch/content/health/dispatch-page-integrity.js
- operations/scripts/dispatch/content/health/dispatch-page-rendering.js
- operations/scripts/dispatch/content/health/dispatch-page-structure.js
- operations/scripts/dispatch/content/health/dispatch-wcag.js
- operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js
- operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js
- operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js
- operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js
- operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js
- operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js
- operations/scripts/dispatch/content/maintenance/dispatch-release-version.js
- operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js
- operations/scripts/dispatch/governance/dispatch-action-docs.js
- operations/scripts/dispatch/governance/dispatch-codex-compliance.js
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/scripts/dispatch/governance/dispatch-governance-check.js
- operations/scripts/dispatch/governance/dispatch-governance-generate.js
- operations/scripts/dispatch/governance/dispatch-governance-map.js
- operations/scripts/dispatch/governance/dispatch-governance-scan.js
- operations/scripts/dispatch/governance/dispatch-governance-sync.js
- operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js
- operations/scripts/dispatch/governance/dispatch-new-file-governance.js
- operations/scripts/dispatch/governance/dispatch-pipelines.js
- operations/scripts/dispatch/governance/dispatch-root-governance.js
- operations/scripts/dispatch/governance/dispatch-script-inventory.js
- operations/scripts/dispatch/governance/dispatch-script-locations.js
- operations/scripts/dispatch/governance/dispatch-script-registry.js
- operations/scripts/dispatch/governance/dispatch-workflow-governance.js
- operations/scripts/dispatch/governance/dispatch-workspace-retention.js
- operations/scripts/dispatch/governance/pre-tool-guard.js
- operations/scripts/remediators/content/health/repair-broken-links.js
- operations/scripts/remediators/content/health/repair-openapi-reference.js
- operations/scripts/remediators/content/health/repair-wcag.js
- operations/scripts/remediators/content/quality/repair-content-quality.js
- operations/scripts/remediators/content/structure/repair-anchor-usage.js
- operations/scripts/remediators/content/structure/repair-description-quality.js
- operations/scripts/remediators/content/structure/repair-lint-structure.js
- operations/scripts/remediators/content/style/remediate-voice-violations.js
- operations/scripts/remediators/governance/repo/repair-folder-allowlist.js
- operations/scripts/script-index.md
- operations/scripts/validators/content/health/check-broken-links.js
- operations/scripts/validators/content/health/check-wcag.js
- operations/scripts/validators/governance/repo/check-folder-allowlist.js
- operations/tests/integration/pipeline-smoke-test.js
- operations/tests/script-index.md
- tools/config/registry/script-index.md
- tools/config/registry/script-registry.json
- tools/dev/script-index.md
- tools/lib/governance/folder-allowlist.js
- tools/lib/governance/pipeline-mode.js
- tools/lib/script-index.md
- workspace/scripts/script-index.md

## Post Repair

- Total scripts: 85
- Grade A/B/C/F: 0/1/0/84
- Pipeline mismatches: 79
- Not in JSON: 0
- Phantom JSON: 0

## Needs Human

- operations/scripts/audits/content/health/audit-wcag.js: @category, @purpose, @scope, @pipeline
- operations/scripts/audits/governance/repo/audit-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-banned-words.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-em-dashes.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-spelling.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-style-tokens.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-voice-register.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-changelogs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-update.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-showcase.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-social-feeds.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-translations.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-companions.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-og-images.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-content-quality.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-openapi-reference.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-integrity.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-rendering.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-structure.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-wcag.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-release-version.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-action-docs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/dispatch-codex-compliance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-generate.js: @category, @purpose, @scope
- operations/scripts/dispatch/governance/dispatch-governance-map.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-sync.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-new-file-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-pipelines.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-root-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-inventory.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-locations.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-registry.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/dispatch-workflow-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-workspace-retention.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/pre-tool-guard.js: @category, @purpose, @scope, @needs
- operations/scripts/remediators/content/health/repair-broken-links.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/health/repair-openapi-reference.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/health/repair-wcag.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/quality/repair-content-quality.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-anchor-usage.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-description-quality.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-lint-structure.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/style/remediate-voice-violations.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/governance/repo/repair-folder-allowlist.js: @purpose, @scope, @pipeline
- operations/scripts/validators/content/health/check-broken-links.js: @purpose, @scope, @pipeline
- operations/scripts/validators/content/health/check-wcag.js: @purpose, @scope, @pipeline
- operations/scripts/validators/governance/repo/check-folder-allowlist.js: @purpose, @scope, @pipeline
- operations/tests/integration/pipeline-smoke-test.js: @purpose, @scope
- tools/lib/governance/folder-allowlist.js: @category, @purpose, @scope, @purpose-statement, @pipeline
- tools/lib/governance/pipeline-mode.js: @category, @purpose, @scope, @purpose-statement, @pipeline

## Warnings

- REPAIR ROLLED BACK: verification failed at stage REPAIR

## Improvement

- Grade A delta: +0
- Grade F delta: +0
- Fixes applied: 173
- Remaining human items: 84

