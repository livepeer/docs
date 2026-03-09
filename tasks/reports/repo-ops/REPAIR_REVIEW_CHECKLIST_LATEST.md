# Governance Repair Review Checklist

Generated: 2026-03-09T19:25:54.447Z
Source mode: dry-run-plan

## Summary

- Total safe fixes in dry-run: 322
- Tier 1 JSON sync: 168
- Tier 2 header completion: 81
- Tier 3 pipeline corrections: 73
- Judgement-field autofill scripts: 0
- Judgement-field autofill fields: 0
- Pipeline correction scripts: 73
- Pipeline drop-risk scripts: 0
- Needs human count from repair plan: 202

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

- Scripts to review: 73
- Detected multi-pipeline scripts: 1
- Proposed multi-pipeline scripts: 1

| Risk | Count |
| --- | ---: |
| drops-detected-pipelines | 0 |
| aligns-to-detected-pipelines | 4 |
| broadens-claim | 0 |
| label-normalization-only | 69 |
| review | 0 |

### tools/lib/docs-index-utils.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tools/notion/sync-v2-en-canonical.js; indirect via tools/scripts/apply-content-gap-reconciliation.js; indirect via tools/scripts/generate-ai-sitemap.js; indirect via tools/scripts/generate-content-gap-reconciliation.js; indirect via tools/scripts/generate-docs-index.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/lib/docs-usefulness/accuracy-verifier.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tests/unit/docs-usefulness-accuracy-verifier.test.js
- Verification: MATCH
- Current codes: indirect
- Proposed codes: indirect
- Detected codes: indirect

### tools/lib/docs-usefulness/scoring.js

- Trigger group: Indirect
- [ ] Risk: label-normalization-only
- Current: indirect — library module imported by other scripts, not invoked directly
- Proposed: indirect — library module
- Detected: indirect via tests/unit/docs-usefulness-accuracy-verifier.test.js; indirect via tests/unit/usefulness-rubric.test.js; indirect via tools/notion/sync-v2-en-canonical.js; indirect via tools/scripts/assign-purpose-metadata.js; indirect via tools/scripts/audit-v2-usefulness.js
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

### tools/scripts/audit-all-pages-simple.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/audit-all-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/audit-all-v2-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

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

### tools/scripts/audit-v1-to-v2-mapping.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/check-codex-pr-overlap.js

- Trigger group: P3
- [ ] Risk: aligns-to-detected-pipelines
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: P3 (PR, Track B)
- Detected: P3 (Codex Governance)
- Verification: MISMATCH:undeclared automation P3
- Current codes: manual
- Proposed codes: P3
- Detected codes: P3

### tools/scripts/check-component-errors.js

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
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/codex/lock-release.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/codex/task-finalize.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
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

### tools/scripts/final-verification.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/find-correct-url.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/generate-docs-guide-components-index.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
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
- Detected: indirect via tools/scripts/enforce-generated-file-banners.js; indirect via tools/scripts/i18n/lib/docs-routes.js; indirect via tools/scripts/i18n/test/provenance.test.js; indirect via tools/scripts/i18n/translate-docs.js; indirect via tools/scripts/i18n/validate-generated.js
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

### tools/scripts/inspect-page.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/inspect-video-page.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
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

### tools/scripts/snippets/generate-seo.js

- Trigger group: P6
- [ ] Risk: aligns-to-detected-pipelines
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: P6 (on-demand, SEO refresh)
- Detected: P6 (SEO Metadata Refresh); manual (npm script: generate-seo); manual (npm script: generate-seo:dry-run)
- Verification: MISMATCH:undeclared automation P6
- Current codes: manual
- Proposed codes: P6
- Detected codes: P6

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

### tools/scripts/snippets/update-component-library.sh

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/style-and-language-homogenizer-en-gb.js

- Trigger group: P6
- [ ] Risk: aligns-to-detected-pipelines
- Current: manual — interactive developer tool, not suited for automated pipelines
- Proposed: P6 (on-demand, repair)
- Detected: P6 (EN-GB Style Homogenisation); manual (npm script: audit:language-en-gb)
- Verification: MISMATCH:undeclared automation P6
- Current codes: manual
- Proposed codes: P6
- Detected codes: P6

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

### tools/scripts/test-all-pages-browser.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/test-all-pages-comprehensive.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/test-youtube-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — developer tool
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/validate-codex-task-contract.js

- Trigger group: P1
- [ ] Risk: aligns-to-detected-pipelines
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: P1 (commit), P2 (push), P3 (PR, Track B)
- Detected: P1 (pre-commit); P2 (pre-push); P3 (Codex Governance); indirect via .githooks/pre-commit; indirect via .githooks/pre-push
- Verification: MISMATCH:undeclared automation P1, P2, P3
- Current codes: manual
- Proposed codes: P1, P2, P3
- Detected codes: P1, P2, P3

### tools/scripts/verify-all-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
- Proposed: manual — not yet in pipeline
- Detected: manual (none)
- Verification: MATCH
- Current codes: manual
- Proposed codes: manual
- Detected codes: manual

### tools/scripts/verify-pages.js

- Trigger group: Manual
- [ ] Risk: label-normalization-only
- Current: manual — diagnostic/investigation tool, run on-demand only
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

