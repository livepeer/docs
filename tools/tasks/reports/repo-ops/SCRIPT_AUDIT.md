# SCRIPT_AUDIT

Generated: 2026-03-10T15:42:08.719Z

## Rules Source
- `tests/unit/script-docs.test.js`
- `tests/README.md`

## Summary
- Total scripts: 160
- Template compliant: 34
- Template non-compliant: 126
- Exact overlap clusters: 9
- Near overlap clusters: 1

## Category Counts

| Category | Count |
|---|---:|
| `audit` | 17 |
| `deprecated` | 2 |
| `enforcement` | 33 |
| `fixture` | 5 |
| `generator` | 25 |
| `helper` | 72 |
| `manual` | 160 |
| `sync` | 9 |
| `test` | 6 |

## Script Inventory

| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |
|---|---|---|---|---|---|
| `config/v2-internal-report-pages.js` | Utility script for v2 internal report pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-index-utils.js` | Utility script for docs index utils. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-navigation.js` | Utility script for docs navigation. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/accuracy-verifier.js` | Utility script for accuracy verifier. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/config-validator.js` | Utility script for config validator. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/journey-check.js` | Utility script for journey check. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/llm-evaluator.js` | Utility script for llm evaluator. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/changelog.js` | Utility script for changelog. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/concept.js` | Utility script for concept. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/faq.js` | Utility script for faq. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/glossary.js` | Utility script for glossary. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/how_to.js` | Utility script for how to. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/index.js` | Utility script for index. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/landing.js` | Utility script for landing. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/overview.js` | Utility script for overview. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/reference.js` | Utility script for reference. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/troubleshooting.js` | Utility script for troubleshooting. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/prompts/tutorial.js` | Utility script for tutorial. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/quality-gate.js` | Utility script for quality gate. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/rubric-loader.js` | Utility script for rubric loader. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/rule-evaluators.js` | Utility script for rule evaluators. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/docs-usefulness/scoring.js` | Utility script for scoring. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/generated-file-banners.js` | Utility script for generated file banners. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `lib/mdx-visible-text.js` | Utility script for mdx visible text. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/add-framework-headers.js` | Insert or verify governance framework metadata headers from classification JSON. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/apply-content-gap-reconciliation.js` | Apply content-gap reconciliation decisions by archiving selected files, syncing mapping state, and generating follow-up reports. | PASS | audit, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/deprecated/docs-coverage-and-route-integrity-audit.js` | Audit docs coverage integrity, missing routes, legacy /v2/pages references, and orphan candidate files. | PASS | audit, deprecated | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/deprecated/project-management-output-script.js` | Deprecated legacy project-management output script retained as a reference stub. | PASS | deprecated, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/check-component-errors.js` | Utility script for tools/scripts/test/check-component-errors.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/final-verification.js` | Utility script for tools/scripts/test/final-verification.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/find-correct-url.js` | Utility script for tools/scripts/test/find-correct-url.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/inspect-page.js` | Utility script for tools/scripts/test/inspect-page.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/inspect-video-page.js` | Utility script for tools/scripts/test/inspect-video-page.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/test-youtube-pages-v2.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/test-youtube-pages.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/duplicates/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/fixtures/allowed-script.js` | Utility script for tools/scripts/archive/fixtures/allowed-script.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/fixtures/allowed-test.js` | Utility script for tools/scripts/archive/fixtures/allowed-test.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/fixtures/allowed.js` | Utility script for tools/scripts/archive/fixtures/allowed.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/placeholders/embed-table.js` | Archived no-op placeholder for markdown table embedding utility tasks. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/placeholders/gen-table.js` | Archived no-op placeholder for generated table output utility tasks. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/archive/placeholders/gen-textareas.js` | Archived no-op placeholder for textarea generation utility tasks. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/assign-purpose-metadata.js` | Assign purpose and audience frontmatter metadata for docs.json EN-routable v2 pages using deterministic rules with optional LLM classification for unclassified pages. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-all-pages-simple.js` | Utility script for audit all pages simple. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-all-pages.js` | Utility script for audit all pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-all-v2-pages.js` | Utility script for audit all v2 pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-component-usage.js` | Utility script for audit component usage. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-scripts.js` | Utility script for audit scripts. | FAIL (empty @summary) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-tasks-folders.js` | Utility script for audit tasks folders. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-v1-to-v2-mapping.js` | Utility script for audit v1 to v2 mapping. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/audit-v2-usefulness.js` | Utility script for audit v2 usefulness. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/check-codex-pr-overlap.js` | Utility script for check codex pr overlap. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/check-component-errors.js` | Utility script for check component errors. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/check-no-ai-stash.sh` | Utility script for check no ai stash. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/cleanup-quarantine-manager.js` | Utility script for cleanup quarantine manager. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex-commit.js` | Utility script for codex commit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex-safe-merge-with-stash.js` | Utility script for codex safe merge with stash. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex/lock-release.js` | Utility script for lock release. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex/task-finalize.js` | Utility script for task finalize. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex/task-preflight.js` | Utility script for task preflight. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/codex/validate-locks.js` | Utility script for validate locks. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/component-layout-governance.js` | Validate v2 English docs against component-layout contracts by page type. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/convert-rss-to-mdx.js` | Utility script for convert rss to mdx. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/create-codex-pr.js` | Utility script for create codex pr. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/cross-agent-packager.js` | Utility script for cross agent packager. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/debug-mint-dev.js` | Utility script for debug mint dev. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/add-callouts.js` | Utility script for add callouts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/batch-update-og-image.sh` | Utility script for batch update og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/ensure-mint-watcher-patch.sh` | Utility script for ensure mint watcher patch. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/generate-mint-dev-scope.js` | Utility script for generate mint dev scope. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/replace-og-image.py` | Utility script for replace og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/seo-generator-safe.js` | Utility script for seo generator safe. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/test-add-callouts.js` | Utility script for test add callouts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/test-seo-generator.js` | Utility script for test seo generator. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/update-all-og-images.js` | Utility script for update all og images. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/dev/update-og-image.js` | Utility script for update og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/docs-quality-and-freshness-audit.js` | Utility script for docs quality and freshness audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/enforce-generated-file-banners.js` | Enforce standardized hidden/visible generated banners and frontmatter across generated MDX outputs. | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/enforcers/pr/check-component-immutability.js` | Utility script for check component immutability. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/final-verification.js` | Utility script for final verification. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/find-correct-url.js` | Utility script for find correct url. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-ai-sitemap.js` | Utility script for generate ai sitemap. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-component-governance-remediation-reports.js` | Generate Phase 2a remediation reports from the approved component-governance audit and live repo state. | PASS | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-content-gap-reconciliation.js` | Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-docs-guide-components-index.js` | Utility script for generate docs guide components index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-docs-guide-indexes.js` | Utility script for generate docs guide indexes. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-docs-guide-pages-index.js` | Utility script for generate docs guide pages index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-docs-index.js` | Utility script for generate docs index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-llms-files.js` | Utility script for generate llms files. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/generate-pages-index.js` | Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index. | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/generate-localized-docs-json.js` | Utility script for generate localized docs json. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/common.js` | Utility script for common. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/config.js` | Utility script for config. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/docs-json-localizer.js` | Utility script for docs json localizer. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/docs-routes.js` | Utility script for docs routes. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/frontmatter.js` | Utility script for frontmatter. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/mdx-parser.js` | Utility script for mdx parser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/mdx-translate.js` | Utility script for mdx translate. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/path-utils.js` | Utility script for path utils. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/provenance.js` | Utility script for provenance. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/provider-mock.js` | Utility script for provider mock. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/provider-openrouter.js` | Utility script for provider openrouter. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/lib/providers.js` | Utility script for providers. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test-mintlify-version-language-toggle.js` | Utility script for test mintlify version language toggle. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/cli-guardrails.test.js` | Utility script for cli guardrails test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/docs-json-localizer.test.js` | Utility script for docs json localizer test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/frontmatter.test.js` | Utility script for frontmatter test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/mdx-translate.test.js` | Utility script for mdx translate test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/provenance.test.js` | Utility script for provenance test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/test/provider-openrouter.test.js` | Utility script for provider openrouter test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/translate-docs.js` | Utility script for translate docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/i18n/validate-generated.js` | Validate generated localized MDX files parse cleanly and exist for successful route-map entries. | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/inspect-page.js` | Utility script for inspect page. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/inspect-video-page.js` | Utility script for inspect video page. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/measure-performance.js` | Measure documentation system health across build, page-load, DX, and freshness domains and write baseline reports. | PASS | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/mint-dev.sh` | Utility script for mint dev. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/new-script.js` | ' + params.summary, | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/publish-v2-internal-reports.js` | Utility script for publish v2 internal reports. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/remediators/content/repair-spelling.js` | Utility script for repair spelling. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/repo-audit-orchestrator.js` | Utility script for repo audit orchestrator. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/script-footprint-and-usage-audit.js` | Utility script for script footprint and usage audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/fetch-external-docs.sh` | Utility script for fetch external docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for fetch lpt exchanges. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/fetch-openapi-specs.sh` | Utility script for fetch openapi specs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/generate-api-docs.sh` | Utility script for generate api docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for generate glossary. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for terminology search. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/generate-seo.js` | Utility script for generate seo. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/test-scripts.sh` | Utility script for test scripts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/snippets/update-component-library.sh` | Utility script for update component library. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/style-and-language-homogenizer-en-gb.js` | Utility script for style and language homogenizer en gb. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples; empty @usage) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/sync-codex-skills.js` | Utility script for sync codex skills. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/test-all-pages-browser.js` | Utility script for test all pages browser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/test-all-pages-comprehensive.js` | Utility script for test all pages comprehensive. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/test-v2-pages.js` | Utility script for test v2 pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/test-youtube-pages.js` | Utility script for test youtube pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validate-codex-task-contract.js` | Utility script for validate codex task contract. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/components/check-component-css.js` | Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/components/check-component-docs.js` | Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/components/check-naming-conventions.js` | Utility script for check naming conventions. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-alt-text-quality.js` | Utility script for check alt text quality. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-description-quality.js` | Utility script for check description quality. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-double-headers.js` | Utility script for check double headers. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-grammar-en-gb.js` | Utility script for check grammar en gb. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-page-endings.js` | Utility script for check page endings. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/content/check-proper-nouns.js` | Utility script for check proper nouns. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/structure/check-agent-docs-freshness.js` | Utility script for check agent docs freshness. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/structure/check-anchor-usage.js` | Utility script for check anchor usage. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/structure/check-github-labels.js` | Utility script for check github labels. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/validators/structure/check-page-archetype.js` | Utility script for check page archetype. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/verify-all-pages.js` | Utility script for verify all pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/verify-pages.js` | Utility script for verify pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/verify-pay-orc-gate-finalize.sh` | Utility script for verify pay orc gate finalize. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/verify/.verify-large-change.sh` | Utility script for verify large change. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `scripts/wcag-repair-common.js` | Utility script for wcag repair common. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `utility/personal/download-linkedin-video.sh` | Utility script for tools/utility/personal/download-linkedin-video.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `utility/personal/download-linkedin-with-cookies.sh` | Utility script for tools/utility/personal/download-linkedin-with-cookies.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `utility/personal/execute-phase1-worktree-plan.js` | Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `utility/personal/transcribe-audio-to-mdx.js` | Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |

## Template Compliance Failures

### `config/v2-internal-report-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-index-utils.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-navigation.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/accuracy-verifier.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/config-validator.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/journey-check.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/llm-evaluator.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/changelog.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/concept.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/faq.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/glossary.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/how_to.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/index.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/landing.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/overview.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/reference.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/troubleshooting.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/prompts/tutorial.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/quality-gate.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/rubric-loader.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/rule-evaluators.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/docs-usefulness/scoring.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/generated-file-banners.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lib/mdx-visible-text.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-all-pages-simple.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-all-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-all-v2-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-component-usage.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-scripts.js`
- Missing tags: none
- Empty/placeholder tags: @summary

### `scripts/audit-tasks-folders.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-v1-to-v2-mapping.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/audit-v2-usefulness.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/check-codex-pr-overlap.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/check-component-errors.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/check-no-ai-stash.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/cleanup-quarantine-manager.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex-commit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex-safe-merge-with-stash.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex/lock-release.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex/task-finalize.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex/task-preflight.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/codex/validate-locks.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/convert-rss-to-mdx.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/create-codex-pr.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/cross-agent-packager.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/debug-mint-dev.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/add-callouts.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/batch-update-og-image.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/ensure-mint-watcher-patch.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/generate-mint-dev-scope.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/replace-og-image.py`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/seo-generator-safe.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/test-add-callouts.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/test-seo-generator.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/update-all-og-images.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/dev/update-og-image.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/docs-quality-and-freshness-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/enforcers/pr/check-component-immutability.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/final-verification.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/find-correct-url.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-ai-sitemap.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-docs-guide-components-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-docs-guide-indexes.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-docs-guide-pages-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-docs-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/generate-llms-files.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/generate-localized-docs-json.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/common.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/config.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/docs-json-localizer.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/docs-routes.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/frontmatter.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/mdx-parser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/mdx-translate.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/path-utils.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/provenance.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/provider-mock.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/provider-openrouter.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/lib/providers.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test-mintlify-version-language-toggle.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/cli-guardrails.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/docs-json-localizer.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/frontmatter.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/mdx-translate.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/provenance.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/test/provider-openrouter.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/i18n/translate-docs.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/inspect-page.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/inspect-video-page.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/mint-dev.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/publish-v2-internal-reports.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/remediators/content/repair-spelling.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/repo-audit-orchestrator.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/script-footprint-and-usage-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/fetch-external-docs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/fetch-lpt-exchanges.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/fetch-openapi-specs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/generate-api-docs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/generate-data/scripts/generate-glossary.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/generate-data/scripts/terminology-search.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/generate-seo.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/test-scripts.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/snippets/update-component-library.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/style-and-language-homogenizer-en-gb.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples
- Empty/placeholder tags: @usage

### `scripts/sync-codex-skills.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/test-all-pages-browser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/test-all-pages-comprehensive.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/test-v2-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/test-youtube-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validate-codex-task-contract.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/components/check-naming-conventions.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-alt-text-quality.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-description-quality.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-double-headers.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-grammar-en-gb.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-page-endings.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/content/check-proper-nouns.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/structure/check-agent-docs-freshness.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/structure/check-anchor-usage.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/structure/check-github-labels.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/validators/structure/check-page-archetype.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/verify-all-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/verify-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/verify-pay-orc-gate-finalize.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/verify/.verify-large-change.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `scripts/wcag-repair-common.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none


## Usage Detail

### `config/v2-internal-report-pages.js`
- Purpose: Utility script for v2 internal report pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-index-utils.js`
- Purpose: Utility script for docs index utils.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-navigation.js`
- Purpose: Utility script for docs navigation.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/accuracy-verifier.js`
- Purpose: Utility script for accuracy verifier.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/config-validator.js`
- Purpose: Utility script for config validator.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/journey-check.js`
- Purpose: Utility script for journey check.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/llm-evaluator.js`
- Purpose: Utility script for llm evaluator.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/changelog.js`
- Purpose: Utility script for changelog.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/concept.js`
- Purpose: Utility script for concept.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/faq.js`
- Purpose: Utility script for faq.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/glossary.js`
- Purpose: Utility script for glossary.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/how_to.js`
- Purpose: Utility script for how to.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/index.js`
- Purpose: Utility script for index.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/landing.js`
- Purpose: Utility script for landing.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/overview.js`
- Purpose: Utility script for overview.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/reference.js`
- Purpose: Utility script for reference.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/troubleshooting.js`
- Purpose: Utility script for troubleshooting.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/prompts/tutorial.js`
- Purpose: Utility script for tutorial.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/quality-gate.js`
- Purpose: Utility script for quality gate.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/rubric-loader.js`
- Purpose: Utility script for rubric loader.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/rule-evaluators.js`
- Purpose: Utility script for rule evaluators.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/docs-usefulness/scoring.js`
- Purpose: Utility script for scoring.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/generated-file-banners.js`
- Purpose: Utility script for generated file banners.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `lib/mdx-visible-text.js`
- Purpose: Utility script for mdx visible text.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/add-framework-headers.js`
- Purpose: Insert or verify governance framework metadata headers from classification JSON.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/apply-content-gap-reconciliation.js`
- Purpose: Apply content-gap reconciliation decisions by archiving selected files, syncing mapping state, and generating follow-up reports.
- Template compliance: PASS
- Role tags: audit, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/deprecated/docs-coverage-and-route-integrity-audit.js`
- Purpose: Audit docs coverage integrity, missing routes, legacy /v2/pages references, and orphan candidate files.
- Template compliance: PASS
- Role tags: audit, deprecated
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/deprecated/project-management-output-script.js`
- Purpose: Deprecated legacy project-management output script retained as a reference stub.
- Template compliance: PASS
- Role tags: deprecated, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/check-component-errors.js`
- Purpose: Utility script for tools/scripts/test/check-component-errors.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/final-verification.js`
- Purpose: Utility script for tools/scripts/test/final-verification.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/find-correct-url.js`
- Purpose: Utility script for tools/scripts/test/find-correct-url.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/inspect-page.js`
- Purpose: Utility script for tools/scripts/test/inspect-page.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/inspect-video-page.js`
- Purpose: Utility script for tools/scripts/test/inspect-video-page.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/test-youtube-pages-v2.js`
- Purpose: Utility script for tools/scripts/test/test-youtube-pages.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/test-youtube-pages.js`
- Purpose: Utility script for tools/scripts/test/test-youtube-pages.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/verify-all-pages.js`
- Purpose: Utility script for tools/scripts/verify-all-pages.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/duplicates/verify-pages.js`
- Purpose: Utility script for tools/scripts/verify-pages.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/fixtures/allowed-script.js`
- Purpose: Utility script for tools/scripts/archive/fixtures/allowed-script.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/fixtures/allowed-test.js`
- Purpose: Utility script for tools/scripts/archive/fixtures/allowed-test.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/fixtures/allowed.js`
- Purpose: Utility script for tools/scripts/archive/fixtures/allowed.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/placeholders/embed-table.js`
- Purpose: Archived no-op placeholder for markdown table embedding utility tasks.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/placeholders/gen-table.js`
- Purpose: Archived no-op placeholder for generated table output utility tasks.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/archive/placeholders/gen-textareas.js`
- Purpose: Archived no-op placeholder for textarea generation utility tasks.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/assign-purpose-metadata.js`
- Purpose: Assign purpose and audience frontmatter metadata for docs.json EN-routable v2 pages using deterministic rules with optional LLM classification for unclassified pages.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-all-pages-simple.js`
- Purpose: Utility script for audit all pages simple.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-all-pages.js`
- Purpose: Utility script for audit all pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-all-v2-pages.js`
- Purpose: Utility script for audit all v2 pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-component-usage.js`
- Purpose: Utility script for audit component usage.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-scripts.js`
- Purpose: Utility script for audit scripts.
- Template compliance: FAIL (empty @summary)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-tasks-folders.js`
- Purpose: Utility script for audit tasks folders.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-v1-to-v2-mapping.js`
- Purpose: Utility script for audit v1 to v2 mapping.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/audit-v2-usefulness.js`
- Purpose: Utility script for audit v2 usefulness.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/check-codex-pr-overlap.js`
- Purpose: Utility script for check codex pr overlap.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/check-component-errors.js`
- Purpose: Utility script for check component errors.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/check-no-ai-stash.sh`
- Purpose: Utility script for check no ai stash.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/cleanup-quarantine-manager.js`
- Purpose: Utility script for cleanup quarantine manager.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex-commit.js`
- Purpose: Utility script for codex commit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex-safe-merge-with-stash.js`
- Purpose: Utility script for codex safe merge with stash.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex/lock-release.js`
- Purpose: Utility script for lock release.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex/task-finalize.js`
- Purpose: Utility script for task finalize.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex/task-preflight.js`
- Purpose: Utility script for task preflight.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/codex/validate-locks.js`
- Purpose: Utility script for validate locks.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/component-layout-governance.js`
- Purpose: Validate v2 English docs against component-layout contracts by page type.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/convert-rss-to-mdx.js`
- Purpose: Utility script for convert rss to mdx.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/create-codex-pr.js`
- Purpose: Utility script for create codex pr.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/cross-agent-packager.js`
- Purpose: Utility script for cross agent packager.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/debug-mint-dev.js`
- Purpose: Utility script for debug mint dev.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/add-callouts.js`
- Purpose: Utility script for add callouts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/batch-update-og-image.sh`
- Purpose: Utility script for batch update og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/ensure-mint-watcher-patch.sh`
- Purpose: Utility script for ensure mint watcher patch.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/generate-mint-dev-scope.js`
- Purpose: Utility script for generate mint dev scope.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/replace-og-image.py`
- Purpose: Utility script for replace og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/seo-generator-safe.js`
- Purpose: Utility script for seo generator safe.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/test-add-callouts.js`
- Purpose: Utility script for test add callouts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/test-seo-generator.js`
- Purpose: Utility script for test seo generator.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/update-all-og-images.js`
- Purpose: Utility script for update all og images.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/dev/update-og-image.js`
- Purpose: Utility script for update og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/docs-quality-and-freshness-audit.js`
- Purpose: Utility script for docs quality and freshness audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/enforce-generated-file-banners.js`
- Purpose: Enforce standardized hidden/visible generated banners and frontmatter across generated MDX outputs.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/enforcers/pr/check-component-immutability.js`
- Purpose: Utility script for check component immutability.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/final-verification.js`
- Purpose: Utility script for final verification.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/find-correct-url.js`
- Purpose: Utility script for find correct url.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-ai-sitemap.js`
- Purpose: Utility script for generate ai sitemap.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-component-governance-remediation-reports.js`
- Purpose: Generate Phase 2a remediation reports from the approved component-governance audit and live repo state.
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-content-gap-reconciliation.js`
- Purpose: Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-docs-guide-components-index.js`
- Purpose: Utility script for generate docs guide components index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-docs-guide-indexes.js`
- Purpose: Utility script for generate docs guide indexes.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-docs-guide-pages-index.js`
- Purpose: Utility script for generate docs guide pages index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-docs-index.js`
- Purpose: Utility script for generate docs index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-llms-files.js`
- Purpose: Utility script for generate llms files.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/generate-pages-index.js`
- Purpose: Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/generate-localized-docs-json.js`
- Purpose: Utility script for generate localized docs json.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/common.js`
- Purpose: Utility script for common.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/config.js`
- Purpose: Utility script for config.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/docs-json-localizer.js`
- Purpose: Utility script for docs json localizer.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/docs-routes.js`
- Purpose: Utility script for docs routes.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/frontmatter.js`
- Purpose: Utility script for frontmatter.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/mdx-parser.js`
- Purpose: Utility script for mdx parser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/mdx-translate.js`
- Purpose: Utility script for mdx translate.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/path-utils.js`
- Purpose: Utility script for path utils.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/provenance.js`
- Purpose: Utility script for provenance.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/provider-mock.js`
- Purpose: Utility script for provider mock.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/provider-openrouter.js`
- Purpose: Utility script for provider openrouter.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/lib/providers.js`
- Purpose: Utility script for providers.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test-mintlify-version-language-toggle.js`
- Purpose: Utility script for test mintlify version language toggle.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/cli-guardrails.test.js`
- Purpose: Utility script for cli guardrails test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/docs-json-localizer.test.js`
- Purpose: Utility script for docs json localizer test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/frontmatter.test.js`
- Purpose: Utility script for frontmatter test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/mdx-translate.test.js`
- Purpose: Utility script for mdx translate test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/provenance.test.js`
- Purpose: Utility script for provenance test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/test/provider-openrouter.test.js`
- Purpose: Utility script for provider openrouter test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/translate-docs.js`
- Purpose: Utility script for translate docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/i18n/validate-generated.js`
- Purpose: Validate generated localized MDX files parse cleanly and exist for successful route-map entries.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/inspect-page.js`
- Purpose: Utility script for inspect page.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/inspect-video-page.js`
- Purpose: Utility script for inspect video page.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/measure-performance.js`
- Purpose: Measure documentation system health across build, page-load, DX, and freshness domains and write baseline reports.
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/mint-dev.sh`
- Purpose: Utility script for mint dev.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/new-script.js`
- Purpose: ' + params.summary,
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/publish-v2-internal-reports.js`
- Purpose: Utility script for publish v2 internal reports.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/remediators/content/repair-spelling.js`
- Purpose: Utility script for repair spelling.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/repo-audit-orchestrator.js`
- Purpose: Utility script for repo audit orchestrator.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/script-footprint-and-usage-audit.js`
- Purpose: Utility script for script footprint and usage audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/fetch-external-docs.sh`
- Purpose: Utility script for fetch external docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/fetch-lpt-exchanges.sh`
- Purpose: Utility script for fetch lpt exchanges.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/fetch-openapi-specs.sh`
- Purpose: Utility script for fetch openapi specs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/generate-api-docs.sh`
- Purpose: Utility script for generate api docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/generate-data/scripts/generate-glossary.js`
- Purpose: Utility script for generate glossary.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/generate-data/scripts/terminology-search.js`
- Purpose: Utility script for terminology search.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/generate-seo.js`
- Purpose: Utility script for generate seo.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/test-scripts.sh`
- Purpose: Utility script for test scripts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/snippets/update-component-library.sh`
- Purpose: Utility script for update component library.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/style-and-language-homogenizer-en-gb.js`
- Purpose: Utility script for style and language homogenizer en gb.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples; empty @usage)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/sync-codex-skills.js`
- Purpose: Utility script for sync codex skills.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/test-all-pages-browser.js`
- Purpose: Utility script for test all pages browser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/test-all-pages-comprehensive.js`
- Purpose: Utility script for test all pages comprehensive.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/test-v2-pages.js`
- Purpose: Utility script for test v2 pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/test-youtube-pages.js`
- Purpose: Utility script for test youtube pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validate-codex-task-contract.js`
- Purpose: Utility script for validate codex task contract.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/components/check-component-css.js`
- Purpose: Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/components/check-component-docs.js`
- Purpose: Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/components/check-naming-conventions.js`
- Purpose: Utility script for check naming conventions.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-alt-text-quality.js`
- Purpose: Utility script for check alt text quality.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-description-quality.js`
- Purpose: Utility script for check description quality.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-double-headers.js`
- Purpose: Utility script for check double headers.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-grammar-en-gb.js`
- Purpose: Utility script for check grammar en gb.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-page-endings.js`
- Purpose: Utility script for check page endings.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/content/check-proper-nouns.js`
- Purpose: Utility script for check proper nouns.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/structure/check-agent-docs-freshness.js`
- Purpose: Utility script for check agent docs freshness.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/structure/check-anchor-usage.js`
- Purpose: Utility script for check anchor usage.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/structure/check-github-labels.js`
- Purpose: Utility script for check github labels.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/validators/structure/check-page-archetype.js`
- Purpose: Utility script for check page archetype.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/verify-all-pages.js`
- Purpose: Utility script for verify all pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/verify-pages.js`
- Purpose: Utility script for verify pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/verify-pay-orc-gate-finalize.sh`
- Purpose: Utility script for verify pay orc gate finalize.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/verify/.verify-large-change.sh`
- Purpose: Utility script for verify large change.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `scripts/wcag-repair-common.js`
- Purpose: Utility script for wcag repair common.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `utility/personal/download-linkedin-video.sh`
- Purpose: Utility script for tools/utility/personal/download-linkedin-video.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `utility/personal/download-linkedin-with-cookies.sh`
- Purpose: Utility script for tools/utility/personal/download-linkedin-with-cookies.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `utility/personal/execute-phase1-worktree-plan.js`
- Purpose: Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `utility/personal/transcribe-audio-to-mdx.js`
- Purpose: Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

## Overlap Clusters

### Cluster 1 (exact)
- Scripts: `scripts/archive/fixtures/allowed-script.js`, `scripts/archive/fixtures/allowed-test.js`, `scripts/archive/fixtures/allowed.js`
- Canonical candidate: `scripts/archive/fixtures/allowed.js`
- Shared role tags: fixture
- Recommendation: Consolidate to `scripts/archive/fixtures/allowed.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 2 (exact)
- Scripts: `scripts/archive/duplicates/check-component-errors.js`, `scripts/check-component-errors.js`
- Canonical candidate: `scripts/check-component-errors.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `scripts/check-component-errors.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 3 (exact)
- Scripts: `scripts/archive/duplicates/final-verification.js`, `scripts/final-verification.js`
- Canonical candidate: `scripts/final-verification.js`
- Shared role tags: helper
- Recommendation: Consolidate to `scripts/final-verification.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 4 (exact)
- Scripts: `scripts/archive/duplicates/find-correct-url.js`, `scripts/find-correct-url.js`
- Canonical candidate: `scripts/find-correct-url.js`
- Shared role tags: helper
- Recommendation: Consolidate to `scripts/find-correct-url.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 5 (exact)
- Scripts: `scripts/archive/duplicates/inspect-page.js`, `scripts/inspect-page.js`
- Canonical candidate: `scripts/inspect-page.js`
- Shared role tags: helper
- Recommendation: Consolidate to `scripts/inspect-page.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 6 (exact)
- Scripts: `scripts/archive/duplicates/inspect-video-page.js`, `scripts/inspect-video-page.js`
- Canonical candidate: `scripts/inspect-video-page.js`
- Shared role tags: helper
- Recommendation: Consolidate to `scripts/inspect-video-page.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 7 (exact)
- Scripts: `scripts/archive/duplicates/test-youtube-pages-v2.js`, `scripts/test-youtube-pages.js`
- Canonical candidate: `scripts/test-youtube-pages.js`
- Shared role tags: helper
- Recommendation: Consolidate to `scripts/test-youtube-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 8 (exact)
- Scripts: `scripts/archive/duplicates/verify-all-pages.js`, `scripts/verify-all-pages.js`
- Canonical candidate: `scripts/verify-all-pages.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `scripts/verify-all-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 9 (exact)
- Scripts: `scripts/archive/duplicates/verify-pages.js`, `scripts/verify-pages.js`
- Canonical candidate: `scripts/verify-pages.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `scripts/verify-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 10 (near)
- Scripts: `scripts/archive/duplicates/test-youtube-pages.js`, `scripts/test-youtube-pages.js`
- Canonical candidate: `scripts/test-youtube-pages.js`
- Similarity: 0.991
- Shared role tags: helper
- Recommendation: Review `scripts/archive/duplicates/test-youtube-pages.js` and `scripts/test-youtube-pages.js` for shared implementation; likely consolidate around `scripts/test-youtube-pages.js`.


## Consolidation Recommendations

- Consolidate to `scripts/archive/fixtures/allowed.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/check-component-errors.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/final-verification.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/find-correct-url.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/inspect-page.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/inspect-video-page.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/test-youtube-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/verify-all-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `scripts/verify-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Review `scripts/archive/duplicates/test-youtube-pages.js` and `scripts/test-youtube-pages.js` for shared implementation; likely consolidate around `scripts/test-youtube-pages.js`.
