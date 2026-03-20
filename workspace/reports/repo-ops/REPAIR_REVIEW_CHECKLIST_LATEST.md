# Governance Repair Review Checklist

Generated: 2026-03-09T21:40:18.024Z
Source mode: dry-run-plan

## Summary

- Total safe fixes in dry-run: 265
- Tier 1 JSON sync: 210
- Tier 2 header completion: 0
- Tier 3 pipeline corrections: 55
- Judgement-field autofill scripts: 0
- Judgement-field autofill fields: 0
- Pipeline correction scripts: 55
- Pipeline drop-risk scripts: 0
- Needs human count from repair plan: 168

## Judgement Field Autofills

- Scripts to review: 0
- Existing classification row fields: 0
- Generated classification row fields: 0
- Header derivation fields: 0

| Field | Count |
| --- | ---: |
| category | 0 |
| purpose | 0 |
| needs | 0 |
| purpose_statement | 0 |

## Pipeline Corrections

- Scripts to review: 55
- Detected multi-pipeline scripts: 1
- Proposed multi-pipeline scripts: 2

| Risk | Count |
| --- | ---: |
| drops-detected-pipelines | 0 |
| aligns-to-detected-pipelines | 1 |
| broadens-claim | 1 |
| label-normalization-only | 53 |
| review | 0 |

### .githooks/verify-browser.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — legacy browser validator invoked by .githooks/verify.sh when run directly
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### .githooks/verify.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — legacy pre-commit sub-hook retained for on-demand verification
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tests/run-all.js

- Trigger group: P1
- [ ] Risk: broadens-claim
- Current: P1 (commit, orchestrator)
- Proposed: P1, P2, P3
- Detected: P1 (pre-commit); manual (npm script: test); manual (npm script: test)
- Verification: MATCH
- Current codes: P1
- Proposed codes: P1, P2, P3
- Detected codes: P1
- Added beyond detected pipelines: P2, P3

### tools/lib/docs-index-utils.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/notion/sync-v2-en-canonical.js; indirect via tools/scripts/generate-ai-sitemap.js; indirect via tools/scripts/generate-content-gap-reconciliation.js; indirect via tools/scripts/generate-docs-index.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/lib/generated-file-banners.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tests/unit/script-docs.test.js; indirect via tools/scripts/enforce-generated-file-banners.js; indirect via tools/scripts/generate-component-docs.js; indirect via tools/scripts/generate-docs-guide-components-index.js; indirect via tools/scripts/generate-docs-guide-indexes.js; indirect via tools/scripts/generate-docs-guide-pages-index.js; indirect via tools/scripts/generate-pages-index.js; indirect via tools/scripts/i18n/translate-docs.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/audit-tasks-folders.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/codex-commit.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/codex-safe-merge-with-stash.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — compatibility shim only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/convert-rss-to-mdx.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/create-codex-pr.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (npm script: codex:pr)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/cross-agent-packager.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (npm script: pack:agents)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/debug-mint-dev.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/dev/batch-update-og-image.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/dev/replace-og-image.py

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/dev/test-add-callouts.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/dev/test-seo-generator.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/dev/update-all-og-images.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/enforce-generated-file-banners.js

- Trigger group: P1
- [ ] Risk: aligns-to-detected-pipelines
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: P1, P3
- Detected: P1 (pre-commit); P3 via run-pr-checks; indirect via .githooks/pre-commit; indirect via tests/run-pr-checks.js; manual (npm script: test:generated-banners)
- Verification: MISMATCH:undeclared automation P1, P3
- Current codes: manual
- Proposed codes: P1, P3
- Detected codes: P1, P3

### tools/scripts/generate-component-governance-remediation-reports.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual
- Proposed: manual — report generation
- Detected: manual (npm script: report:component-governance-remediation)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/generate-docs-guide-indexes.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (npm script: docs-guide:indexes)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/generate-docs-guide-pages-index.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/lib/common.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/generate-localized-docs-json.js; indirect via tools/scripts/i18n/lib/config.js; indirect via tools/scripts/i18n/lib/docs-json-localizer.js; indirect via tools/scripts/i18n/lib/docs-routes.js; indirect via tools/scripts/i18n/lib/path-utils.js; indirect via tools/scripts/i18n/lib/provider-openrouter.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/config.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/enforce-generated-file-banners.js; indirect via tools/scripts/i18n/generate-localized-docs-json.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/docs-json-localizer.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/generate-localized-docs-json.js; indirect via tools/scripts/i18n/test/docs-json-localizer.test.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/docs-routes.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/generate-localized-docs-json.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/frontmatter.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/test/frontmatter.test.js; indirect via tools/scripts/i18n/test/provenance.test.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/mdx-parser.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/lib/mdx-translate.js; indirect via tools/scripts/i18n/validate-generated.js; indirect via tools/scripts/remediators/content/repair-spelling.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/mdx-translate.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/lib/docs-json-localizer.js; indirect via tools/scripts/i18n/lib/frontmatter.js; indirect via tools/scripts/i18n/test/mdx-translate.test.js; indirect via tools/scripts/i18n/translate-docs.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/path-utils.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/lib/docs-json-localizer.js; indirect via tools/scripts/i18n/lib/docs-routes.js; indirect via tools/scripts/i18n/lib/mdx-translate.js; indirect via tools/scripts/i18n/translate-docs.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/provenance.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/enforce-generated-file-banners.js; indirect via tools/scripts/generate-component-docs.js; indirect via tools/scripts/i18n/lib/docs-routes.js; indirect via tools/scripts/i18n/test/provenance.test.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/provider-mock.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/lib/providers.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/provider-openrouter.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/lib/providers.js; indirect via tools/scripts/i18n/test/provider-openrouter.test.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/lib/providers.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/scripts/i18n/generate-localized-docs-json.js; indirect via tools/scripts/i18n/test/provider-openrouter.test.js; indirect via tools/scripts/i18n/translate-docs.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/scripts/i18n/test-mintlify-version-language-toggle.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/cli-guardrails.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/docs-json-localizer.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/frontmatter.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/mdx-translate.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/provenance.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/i18n/test/provider-openrouter.test.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/mint-dev.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/new-script.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/publish-v2-internal-reports.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/script-footprint-and-usage-audit.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/fetch-lpt-exchanges.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/fetch-openapi-specs.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/generate-api-docs.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/generate-data/scripts/generate-glossary.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/generate-data/scripts/terminology-search.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/snippets/test-scripts.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/sync-codex-skills.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (npm script: skills:sync:codex); manual (npm script: skills:sync:codex:check)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/verify-all-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/verify-pay-orc-gate-finalize.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/verify/.verify-large-change.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/wcag-repair-common.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

