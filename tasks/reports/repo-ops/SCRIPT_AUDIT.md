# SCRIPT_AUDIT

Generated: 2026-03-09T04:26:22.862Z

## Rules Source
- `tests/unit/script-docs.test.js`
- `tests/README.md`

## Summary
- Total scripts: 187
- Template compliant: 15
- Template non-compliant: 172
- Exact overlap clusters: 0
- Near overlap clusters: 0

## Category Counts

| Category | Count |
|---|---:|
| `audit` | 27 |
| `ci` | 23 |
| `enforcement` | 38 |
| `fixture` | 1 |
| `generator` | 23 |
| `helper` | 61 |
| `hook` | 11 |
| `manual` | 175 |
| `npm-script` | 42 |
| `pr` | 9 |
| `pre-commit` | 5 |
| `push` | 7 |
| `runner` | 5 |
| `scheduled` | 9 |
| `sync` | 13 |
| `test` | 45 |
| `workflow-dispatch` | 18 |

## Script Inventory

| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |
|---|---|---|---|---|---|
| `.githooks/install.sh` | Utility script for install. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit` | Utility script for pre commit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | hook | pre-commit | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit-no-deletions` | Utility script for pre commit no deletions. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-push` | Utility script for pre push. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/server-manager.js` | Utility script for server manager. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify-browser.js` | Utility script for verify browser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify.sh` | Utility script for verify. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.github/scripts/fetch-forum-data.js` | Utility script for fetch forum data. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-ghost-blog-data.js` | Utility script for fetch ghost blog data. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-youtube-data.js` | Utility script for fetch youtube data. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos [scheduled,workflow-dispatch] |
| `.github/scripts/project-showcase-sync.js` | Utility script for project showcase sync. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync [scheduled,workflow-dispatch] |
| `lpd` | Utility script for lpd. | FAIL (missing @summary, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `snippets/automations/youtube/filterVideos.js` | Utility script for filterVideos. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/audit-minimal.js` | Utility script for audit minimal. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/audit-python.py` | Utility script for audit python. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/run-audit-now.js` | Utility script for run audit now. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/test-audit.js` | Utility script for test audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/integration/browser.test.js` | Utility script for browser test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser:all [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) [npm-script,pr,push] |
| `tests/integration/domain-pages-audit.js` | Utility script for domain pages audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:domain [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:both [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v1 [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v2 [manual,npm-script] |
| `tests/integration/openapi-reference-audit.js` | Utility script for openapi reference audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, ci, enforcement, test | manual, npm-script, pr, push, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:openapi:audit [manual,npm-script] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) [pr,push,scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.js` | Utility script for v2 link audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, ci, test | manual, npm-script, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:link-audit [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:external [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:staged [manual,npm-script] \| workflow:.github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) [scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.selftest.js` | Utility script for v2 link audit selftest. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:selftest [manual,npm-script] |
| `tests/integration/v2-wcag-audit.js` | Utility script for v2 wcag audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:nofix [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:staged [manual,npm-script] |
| `tests/integration/v2-wcag-audit.selftest.js` | Utility script for v2 wcag audit selftest. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:selftest [manual,npm-script] |
| `tests/run-all 2.js` | Utility script for tests/run-all.js. | PASS | runner, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/run-all.js` | Utility script for run all. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, hook, runner, test | manual, npm-script, pre-commit | hook:.githooks/pre-commit#line 629 [pre-commit] \| package-script:tests/package.json#scripts.test [manual,npm-script] \| package-script:tools/package.json#scripts.test [manual,npm-script] |
| `tests/run-pr-checks.js` | Utility script for run pr checks. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, runner, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:pr [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks [npm-script,pr,push] |
| `tests/unit/codex-commit.test.js` | Utility script for codex commit test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Utility script for codex safe merge with stash test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-skill-sync.test.js` | Utility script for codex skill sync test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-skills-sync [manual,npm-script] |
| `tests/unit/create-codex-pr.test.js` | Utility script for create codex pr test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-pr-create [manual,npm-script] |
| `tests/unit/docs-guide-sot.test.js` | Utility script for docs guide sot test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/docs-navigation.test.js` | Utility script for docs navigation test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, test | manual, npm-script, workflow-dispatch | package-script:tests/package.json#scripts.test:docs-nav [manual,npm-script] \| package-script:tests/package.json#scripts.test:docs-nav:write [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation [workflow-dispatch] |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Utility script for docs usefulness accuracy verifier test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/links-imports.test.js` | Utility script for links imports test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:links [manual,npm-script] \| package-script:tools/package.json#scripts.test:links [manual,npm-script] |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Utility script for lpd scoped mint dev test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/mdx-guards.test.js` | Utility script for mdx guards test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx:guards [manual,npm-script] |
| `tests/unit/mdx.test.js` | Utility script for mdx test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx [manual,npm-script] \| package-script:tools/package.json#scripts.test:mdx [manual,npm-script] |
| `tests/unit/openapi-reference-audit.test.js` | Utility script for openapi reference audit test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/openapi-rolling-issue.test.js` | Utility script for openapi rolling issue test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:openapi:issue [manual,npm-script] |
| `tests/unit/quality.test.js` | Utility script for quality test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:quality [manual,npm-script] \| package-script:tools/package.json#scripts.test:quality [manual,npm-script] |
| `tests/unit/repair-spelling.test.js` | Utility script for repair spelling test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/repo-audit-pipeline.test.js` | Utility script for repo audit pipeline test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:repo-audit [manual,npm-script] |
| `tests/unit/script-docs.test.js` | Utility script for script docs test. | FAIL (empty @summary) | test | manual, npm-script | package-script:tests/package.json#scripts.test:scripts [manual,npm-script] |
| `tests/unit/spelling.test.js` | Utility script for spelling test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:spell [manual,npm-script] \| package-script:tools/package.json#scripts.test:spell [manual,npm-script] |
| `tests/unit/style-guide.test.js` | Utility script for style guide test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual, npm-script | package-script:tests/package.json#scripts.test:style [manual,npm-script] \| package-script:tools/package.json#scripts.test:style [manual,npm-script] |
| `tests/unit/usefulness-journey.test.js` | Validate journey completeness evaluation and journey-config guardrails for usefulness scoring. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/usefulness-rubric.test.js` | Validate usefulness rubric loading, rule evaluator coverage, argument deprecations, route precedence, and score divergence behavior. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/v2-link-audit.test.js` | Utility script for v2 link audit test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:unit [manual,npm-script] |
| `tests/unit/v2-wcag-audit.test.js` | Utility script for v2 wcag audit test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:unit [manual,npm-script] |
| `tests/unit/validate-codex-task-contract.test.js` | Utility script for validate codex task contract test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-task-contract [manual,npm-script] |
| `tests/utils/file-walker.js` | Utility script for file walker. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, hook, test | pre-commit | hook:.githooks/pre-commit#line 58 [pre-commit] \| hook:.githooks/verify.sh#line 33 [manual] |
| `tests/utils/mdx-parser.js` | Utility script for mdx parser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/mintignore.js` | Utility script for mintignore. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/openapi-rolling-issue.js` | Utility script for openapi rolling issue. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/spell-checker.js` | Utility script for spell checker. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/config/v2-internal-report-pages.js` | Utility script for v2 internal report pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-index-utils.js` | Utility script for docs index utils. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/accuracy-verifier.js` | Utility script for accuracy verifier. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/config-validator.js` | Utility script for config validator. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/journey-check.js` | Utility script for journey check. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/llm-evaluator.js` | Utility script for llm evaluator. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/changelog.js` | Utility script for changelog. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/concept.js` | Utility script for concept. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/faq.js` | Utility script for faq. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/glossary.js` | Utility script for glossary. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/how_to.js` | Utility script for how to. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/index.js` | Utility script for index. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/landing.js` | Utility script for landing. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/overview.js` | Utility script for overview. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/reference.js` | Utility script for reference. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/troubleshooting.js` | Utility script for troubleshooting. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/tutorial.js` | Utility script for tutorial. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/quality-gate.js` | Utility script for quality gate. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/rubric-loader.js` | Utility script for rubric loader. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/rule-evaluators.js` | Utility script for rule evaluators. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/scoring.js` | Utility script for scoring. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/generated-file-banners.js` | Utility script for generated file banners. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/add-framework-headers.js` | Insert or verify governance framework metadata headers from classification JSON. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/assign-purpose-metadata.js` | Assign purpose and audience frontmatter metadata for docs.json EN-routable v2 pages using deterministic rules with optional LLM classification for unclassified pages. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-pages-simple.js` | Utility script for audit all pages simple. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-pages.js` | Utility script for audit all pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-v2-pages.js` | Utility script for audit all v2 pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-component-usage.js` | Utility script for audit component usage. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, ci | scheduled, workflow-dispatch | workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component usage audit [scheduled,workflow-dispatch] |
| `tools/scripts/audit-scripts.js` | Utility script for audit scripts. | FAIL (empty @summary) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:scripts [manual,npm-script] |
| `tools/scripts/audit-tasks-folders.js` | Utility script for audit tasks folders. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-v1-to-v2-mapping.js` | Utility script for audit v1 to v2 mapping. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-v2-usefulness.js` | Utility script for audit v2 usefulness. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/check-codex-pr-overlap.js` | Utility script for check codex pr overlap. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement | pr | workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap [pr] |
| `tools/scripts/check-component-errors.js` | Utility script for check component errors. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/check-no-ai-stash.sh` | Utility script for check no ai stash. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/cleanup-quarantine-manager.js` | Utility script for cleanup quarantine manager. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual, npm-script | package-script:tools/package.json#scripts.cleanup:classify [manual,npm-script] \| package-script:tools/package.json#scripts.cleanup:quarantine [manual,npm-script] |
| `tools/scripts/codex-commit.js` | Utility script for codex commit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex-safe-merge-with-stash.js` | Utility script for codex safe merge with stash. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/lock-release.js` | Utility script for lock release. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-finalize.js` | Utility script for task finalize. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-preflight.js` | Utility script for task preflight. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/validate-locks.js` | Utility script for validate locks. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/component-layout-governance.js` | Validate v2 English docs against component-layout contracts by page type. | PASS | ci, enforcement | manual, npm-script, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.audit:component-layout [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance [scheduled,workflow-dispatch] |
| `tools/scripts/convert-rss-to-mdx.js` | Utility script for convert rss to mdx. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/create-codex-pr.js` | Utility script for create codex pr. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual, npm-script | package-script:tools/package.json#scripts.codex:pr [manual,npm-script] |
| `tools/scripts/cross-agent-packager.js` | Utility script for cross agent packager. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual, npm-script | package-script:tools/package.json#scripts.pack:agents [manual,npm-script] |
| `tools/scripts/debug-mint-dev.js` | Utility script for debug mint dev. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/add-callouts.js` | Utility script for add callouts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/batch-update-og-image.sh` | Utility script for batch update og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Utility script for ensure mint watcher patch. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/generate-mint-dev-scope.js` | Utility script for generate mint dev scope. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/replace-og-image.py` | Utility script for replace og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/seo-generator-safe.js` | Utility script for seo generator safe. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-add-callouts.js` | Utility script for test add callouts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-seo-generator.js` | Utility script for test seo generator. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-all-og-images.js` | Utility script for update all og images. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-og-image.js` | Utility script for update og image. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/docs-quality-and-freshness-audit.js` | Utility script for docs quality and freshness audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit, ci | manual, npm-script, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.audit:docs-quality [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Content quality audit [scheduled,workflow-dispatch] |
| `tools/scripts/enforce-generated-file-banners.js` | Utility script for enforce generated file banners. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, generator | manual, npm-script | package-script:tests/package.json#scripts.test:generated-banners [manual,npm-script] |
| `tools/scripts/enforcers/pr/check-component-immutability.js` | Utility script for check component immutability. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/final-verification.js` | Utility script for final verification. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/find-correct-url.js` | Utility script for find correct url. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-ai-sitemap.js` | Utility script for generate ai sitemap. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap [push,workflow-dispatch] \| workflow:.github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output [pr,push] |
| `tools/scripts/generate-content-gap-reconciliation.js` | Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-guide-components-index.js` | Utility script for generate docs guide components index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-guide-indexes.js` | Utility script for generate docs guide indexes. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual, npm-script | package-script:tools/package.json#scripts.docs-guide:indexes [manual,npm-script] |
| `tools/scripts/generate-docs-guide-pages-index.js` | Utility script for generate docs guide pages index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-index.js` | Utility script for generate docs index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, generator, hook | pr, pre-commit, push, workflow-dispatch | hook:.githooks/pre-commit#line 655 [pre-commit] \| hook:.githooks/pre-commit#line 659 [pre-commit] \| hook:.githooks/pre-commit#line 664 [pre-commit] \| workflow:.github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current [pr,push,workflow-dispatch] \| workflow:.github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index [push,workflow-dispatch] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json [workflow-dispatch] |
| `tools/scripts/generate-llms-files.js` | Utility script for generate llms files. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/generate-llms-files.yml#Generate llms.txt > generate > Generate llms files [push,workflow-dispatch] \| workflow:.github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs [pr,push] |
| `tools/scripts/generate-pages-index.js` | Utility script for generate pages index. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual, npm-script | package-script:tests/package.json#scripts.test:pages-index [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:rebuild [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:write [manual,npm-script] |
| `tools/scripts/i18n/generate-localized-docs-json.js` | Utility script for generate localized docs json. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:docs-json [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes [workflow-dispatch] |
| `tools/scripts/i18n/lib/common.js` | Utility script for common. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/config.js` | Utility script for config. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-json-localizer.js` | Utility script for docs json localizer. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-routes.js` | Utility script for docs routes. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/frontmatter.js` | Utility script for frontmatter. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-parser.js` | Utility script for mdx parser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-translate.js` | Utility script for mdx translate. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/path-utils.js` | Utility script for path utils. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provenance.js` | Utility script for provenance. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-mock.js` | Utility script for provider mock. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-openrouter.js` | Utility script for provider openrouter. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/providers.js` | Utility script for providers. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Utility script for test mintlify version language toggle. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/cli-guardrails.test.js` | Utility script for cli guardrails test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/docs-json-localizer.test.js` | Utility script for docs json localizer test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/frontmatter.test.js` | Utility script for frontmatter test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/mdx-translate.test.js` | Utility script for mdx translate test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provenance.test.js` | Utility script for provenance test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provider-openrouter.test.js` | Utility script for provider openrouter test. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/translate-docs.js` | Utility script for translate docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:translate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation [workflow-dispatch] |
| `tools/scripts/i18n/validate-generated.js` | Validate generated localized MDX files parse cleanly and exist for successful route-map entries. | PASS | ci, enforcement, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:validate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX [workflow-dispatch] |
| `tools/scripts/inspect-page.js` | Utility script for inspect page. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/inspect-video-page.js` | Utility script for inspect video page. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/mint-dev.sh` | Utility script for mint dev. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/new-script.js` | ' + params.summary, | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/publish-v2-internal-reports.js` | Utility script for publish v2 internal reports. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/remediators/content/repair-spelling.js` | Utility script for repair spelling. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/repo-audit-orchestrator.js` | Utility script for repo audit orchestrator. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:repo [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:changed [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:full [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:pack-all [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:quarantine [manual,npm-script] |
| `tools/scripts/script-footprint-and-usage-audit.js` | Utility script for script footprint and usage audit. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-external-docs.sh` | Utility script for fetch external docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, sync | manual, npm-script, pr, push | package-script:tools/package.json#scripts.fetch-docs [manual,npm-script] \| package-script:tools/package.json#scripts.prebuild [manual,npm-script] \| workflow:.github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets [pr] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets [pr,push] \| workflow:.github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets [pr,push] |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for fetch lpt exchanges. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Utility script for fetch openapi specs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-api-docs.sh` | Utility script for generate api docs. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for generate glossary. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for terminology search. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-seo.js` | Utility script for generate seo. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.generate-seo [manual,npm-script] \| package-script:tools/package.json#scripts.generate-seo:dry-run [manual,npm-script] \| workflow:.github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata [workflow-dispatch] |
| `tools/scripts/snippets/test-scripts.sh` | Utility script for test scripts. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/update-component-library.sh` | Utility script for update component library. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | Utility script for style and language homogenizer en gb. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.audit:language-en-gb [manual,npm-script] \| workflow:.github/workflows/style-homogenise.yml#EN-GB Style Homogenisation > homogenise > Run style homogeniser [workflow-dispatch] |
| `tools/scripts/sync-codex-skills.js` | Utility script for sync codex skills. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | sync | manual, npm-script | package-script:tools/package.json#scripts.skills:sync:codex [manual,npm-script] \| package-script:tools/package.json#scripts.skills:sync:codex:check [manual,npm-script] |
| `tools/scripts/test-all-pages-browser.js` | Utility script for test all pages browser. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test-all-pages-comprehensive.js` | Utility script for test all pages comprehensive. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test-v2-pages.js` | Utility script for test v2 pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual, npm-script | package-script:tools/package.json#scripts.test:all-pages [manual,npm-script] \| package-script:tools/package.json#scripts.test:v2-pages [manual,npm-script] |
| `tools/scripts/test-youtube-pages.js` | Utility script for test youtube pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validate-codex-task-contract.js` | Utility script for validate codex task contract. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | ci, enforcement, hook | pr, pre-commit | hook:.githooks/pre-commit#line 149 [pre-commit] \| workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body [pr] |
| `tools/scripts/validators/components/check-component-css.js` | Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/components/check-component-docs.js` | Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-description-quality.js` | Utility script for check description quality. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-double-headers.js` | Utility script for check double headers. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-grammar-en-gb.js` | Utility script for check grammar en gb. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-proper-nouns.js` | Utility script for check proper nouns. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-all-pages.js` | Utility script for verify all pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-pages.js` | Utility script for verify pages. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-pay-orc-gate-finalize.sh` | Utility script for verify pay orc gate finalize. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify/.verify-large-change.sh` | Utility script for verify large change. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/wcag-repair-common.js` | Utility script for wcag repair common. | FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/utility/personal/download-linkedin-video.sh` | Utility script for tools/utility/personal/download-linkedin-video.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/utility/personal/download-linkedin-with-cookies.sh` | Utility script for tools/utility/personal/download-linkedin-with-cookies.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/utility/personal/execute-phase1-worktree-plan.js` | Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/utility/personal/transcribe-audio-to-mdx.js` | Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |

## Template Compliance Failures

### `.githooks/install.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/pre-commit`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/pre-commit-no-deletions`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/pre-push`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/server-manager.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/verify-browser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.githooks/verify.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.github/scripts/fetch-forum-data.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.github/scripts/fetch-ghost-blog-data.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.github/scripts/fetch-youtube-data.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `.github/scripts/project-showcase-sync.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `lpd`
- Missing tags: @summary, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `snippets/automations/youtube/filterVideos.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tasks/scripts/audit-minimal.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tasks/scripts/audit-python.py`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tasks/scripts/run-audit-now.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tasks/scripts/test-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/browser.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/domain-pages-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/openapi-reference-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/v2-link-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/v2-link-audit.selftest.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/v2-wcag-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/integration/v2-wcag-audit.selftest.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/run-all.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/run-pr-checks.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/codex-commit.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/codex-safe-merge-with-stash.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/codex-skill-sync.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/create-codex-pr.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/docs-guide-sot.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/docs-navigation.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/docs-usefulness-accuracy-verifier.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/links-imports.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/lpd-scoped-mint-dev.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/mdx-guards.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/mdx.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/openapi-reference-audit.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/openapi-rolling-issue.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/quality.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/repair-spelling.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/repo-audit-pipeline.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/script-docs.test.js`
- Missing tags: none
- Empty/placeholder tags: @summary

### `tests/unit/spelling.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/style-guide.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/v2-link-audit.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/v2-wcag-audit.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/unit/validate-codex-task-contract.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/utils/file-walker.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/utils/mdx-parser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/utils/mintignore.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/utils/openapi-rolling-issue.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tests/utils/spell-checker.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/config/v2-internal-report-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-index-utils.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/accuracy-verifier.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/config-validator.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/journey-check.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/llm-evaluator.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/changelog.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/concept.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/faq.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/glossary.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/how_to.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/index.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/landing.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/overview.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/reference.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/troubleshooting.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/prompts/tutorial.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/quality-gate.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/rubric-loader.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/rule-evaluators.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/scoring.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/generated-file-banners.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-all-pages-simple.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-all-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-all-v2-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-component-usage.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-scripts.js`
- Missing tags: none
- Empty/placeholder tags: @summary

### `tools/scripts/audit-tasks-folders.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-v1-to-v2-mapping.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/audit-v2-usefulness.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/check-codex-pr-overlap.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/check-component-errors.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/check-no-ai-stash.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/cleanup-quarantine-manager.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex-commit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex-safe-merge-with-stash.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex/lock-release.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex/task-finalize.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex/task-preflight.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/codex/validate-locks.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/convert-rss-to-mdx.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/create-codex-pr.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/cross-agent-packager.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/debug-mint-dev.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/add-callouts.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/batch-update-og-image.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/ensure-mint-watcher-patch.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/generate-mint-dev-scope.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/replace-og-image.py`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/seo-generator-safe.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/test-add-callouts.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/test-seo-generator.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/update-all-og-images.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/dev/update-og-image.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/docs-quality-and-freshness-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/enforce-generated-file-banners.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/enforcers/pr/check-component-immutability.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/final-verification.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/find-correct-url.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-ai-sitemap.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-docs-guide-components-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-docs-guide-indexes.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-docs-guide-pages-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-docs-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-llms-files.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/generate-pages-index.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/generate-localized-docs-json.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/common.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/config.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/docs-json-localizer.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/docs-routes.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/frontmatter.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/mdx-parser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/mdx-translate.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/path-utils.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/provenance.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/provider-mock.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/provider-openrouter.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/lib/providers.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test-mintlify-version-language-toggle.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/cli-guardrails.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/docs-json-localizer.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/frontmatter.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/mdx-translate.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/provenance.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/test/provider-openrouter.test.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/i18n/translate-docs.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/inspect-page.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/inspect-video-page.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/mint-dev.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/publish-v2-internal-reports.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/remediators/content/repair-spelling.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/repo-audit-orchestrator.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/script-footprint-and-usage-audit.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/fetch-external-docs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/fetch-lpt-exchanges.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/fetch-openapi-specs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/generate-api-docs.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/generate-data/scripts/generate-glossary.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/generate-data/scripts/terminology-search.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/generate-seo.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/test-scripts.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/snippets/update-component-library.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/style-and-language-homogenizer-en-gb.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/sync-codex-skills.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/test-all-pages-browser.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/test-all-pages-comprehensive.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/test-v2-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/test-youtube-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/validate-codex-task-contract.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/validators/content/check-description-quality.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/validators/content/check-double-headers.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/validators/content/check-grammar-en-gb.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/validators/content/check-proper-nouns.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/verify-all-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/verify-pages.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/verify-pay-orc-gate-finalize.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/verify/.verify-large-change.sh`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/scripts/wcag-repair-common.js`
- Missing tags: @summary, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none


## Usage Detail

### `.githooks/install.sh`
- Purpose: Utility script for install.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit`
- Purpose: Utility script for pre commit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: hook
- Run-context tags: pre-commit
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit-no-deletions`
- Purpose: Utility script for pre commit no deletions.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-push`
- Purpose: Utility script for pre push.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/server-manager.js`
- Purpose: Utility script for server manager.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify-browser.js`
- Purpose: Utility script for verify browser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify.sh`
- Purpose: Utility script for verify.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.github/scripts/fetch-forum-data.js`
- Purpose: Utility script for fetch forum data.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-ghost-blog-data.js`
- Purpose: Utility script for fetch ghost blog data.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-youtube-data.js`
- Purpose: Utility script for fetch youtube data.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos (when: scheduled, workflow-dispatch)

### `.github/scripts/project-showcase-sync.js`
- Purpose: Utility script for project showcase sync.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync (when: scheduled, workflow-dispatch)

### `lpd`
- Purpose: Utility script for lpd.
- Template compliance: FAIL (missing @summary, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `snippets/automations/youtube/filterVideos.js`
- Purpose: Utility script for filterVideos.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/audit-minimal.js`
- Purpose: Utility script for audit minimal.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/audit-python.py`
- Purpose: Utility script for audit python.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/run-audit-now.js`
- Purpose: Utility script for run audit now.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/test-audit.js`
- Purpose: Utility script for test audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/integration/browser.test.js`
- Purpose: Utility script for browser test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser:all (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) (when: npm-script, pr, push)

### `tests/integration/domain-pages-audit.js`
- Purpose: Utility script for domain pages audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:domain (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:both (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v1 (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v2 (when: manual, npm-script)

### `tests/integration/openapi-reference-audit.js`
- Purpose: Utility script for openapi reference audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:audit (when: manual, npm-script)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) (when: pr, push, scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.js`
- Purpose: Utility script for v2 link audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, ci, test
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:external (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:staged (when: manual, npm-script)
  - workflow: .github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) (when: scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.selftest.js`
- Purpose: Utility script for v2 link audit selftest.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:selftest (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.js`
- Purpose: Utility script for v2 wcag audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:nofix (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:staged (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.selftest.js`
- Purpose: Utility script for v2 wcag audit selftest.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag:selftest (when: manual, npm-script)

### `tests/run-all 2.js`
- Purpose: Utility script for tests/run-all.js.
- Template compliance: PASS
- Role tags: runner, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/run-all.js`
- Purpose: Utility script for run all.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, hook, runner, test
- Run-context tags: manual, npm-script, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 629 (when: pre-commit)
  - package-script: tests/package.json#scripts.test (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test (when: manual, npm-script)

### `tests/run-pr-checks.js`
- Purpose: Utility script for run pr checks.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, runner, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:pr (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks (when: npm-script, pr, push)

### `tests/unit/codex-commit.test.js`
- Purpose: Utility script for codex commit test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-safe-merge-with-stash.test.js`
- Purpose: Utility script for codex safe merge with stash test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-skill-sync.test.js`
- Purpose: Utility script for codex skill sync test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-skills-sync (when: manual, npm-script)

### `tests/unit/create-codex-pr.test.js`
- Purpose: Utility script for create codex pr test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-pr-create (when: manual, npm-script)

### `tests/unit/docs-guide-sot.test.js`
- Purpose: Utility script for docs guide sot test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/docs-navigation.test.js`
- Purpose: Utility script for docs navigation test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, test
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:docs-nav (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:docs-nav:write (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation (when: workflow-dispatch)

### `tests/unit/docs-usefulness-accuracy-verifier.test.js`
- Purpose: Utility script for docs usefulness accuracy verifier test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/links-imports.test.js`
- Purpose: Utility script for links imports test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:links (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:links (when: manual, npm-script)

### `tests/unit/lpd-scoped-mint-dev.test.js`
- Purpose: Utility script for lpd scoped mint dev test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/mdx-guards.test.js`
- Purpose: Utility script for mdx guards test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx:guards (when: manual, npm-script)

### `tests/unit/mdx.test.js`
- Purpose: Utility script for mdx test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:mdx (when: manual, npm-script)

### `tests/unit/openapi-reference-audit.test.js`
- Purpose: Utility script for openapi reference audit test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/openapi-rolling-issue.test.js`
- Purpose: Utility script for openapi rolling issue test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:issue (when: manual, npm-script)

### `tests/unit/quality.test.js`
- Purpose: Utility script for quality test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:quality (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:quality (when: manual, npm-script)

### `tests/unit/repair-spelling.test.js`
- Purpose: Utility script for repair spelling test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/repo-audit-pipeline.test.js`
- Purpose: Utility script for repo audit pipeline test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:repo-audit (when: manual, npm-script)

### `tests/unit/script-docs.test.js`
- Purpose: Utility script for script docs test.
- Template compliance: FAIL (empty @summary)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:scripts (when: manual, npm-script)

### `tests/unit/spelling.test.js`
- Purpose: Utility script for spelling test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:spell (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:spell (when: manual, npm-script)

### `tests/unit/style-guide.test.js`
- Purpose: Utility script for style guide test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:style (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:style (when: manual, npm-script)

### `tests/unit/usefulness-journey.test.js`
- Purpose: Validate journey completeness evaluation and journey-config guardrails for usefulness scoring.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/usefulness-rubric.test.js`
- Purpose: Validate usefulness rubric loading, rule evaluator coverage, argument deprecations, route precedence, and score divergence behavior.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/v2-link-audit.test.js`
- Purpose: Utility script for v2 link audit test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:unit (when: manual, npm-script)

### `tests/unit/v2-wcag-audit.test.js`
- Purpose: Utility script for v2 wcag audit test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag:unit (when: manual, npm-script)

### `tests/unit/validate-codex-task-contract.test.js`
- Purpose: Utility script for validate codex task contract test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-task-contract (when: manual, npm-script)

### `tests/utils/file-walker.js`
- Purpose: Utility script for file walker.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, hook, test
- Run-context tags: pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 58 (when: pre-commit)
  - hook: .githooks/verify.sh#line 33 (when: manual)

### `tests/utils/mdx-parser.js`
- Purpose: Utility script for mdx parser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/mintignore.js`
- Purpose: Utility script for mintignore.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/openapi-rolling-issue.js`
- Purpose: Utility script for openapi rolling issue.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/spell-checker.js`
- Purpose: Utility script for spell checker.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/config/v2-internal-report-pages.js`
- Purpose: Utility script for v2 internal report pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-index-utils.js`
- Purpose: Utility script for docs index utils.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/accuracy-verifier.js`
- Purpose: Utility script for accuracy verifier.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/config-validator.js`
- Purpose: Utility script for config validator.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/journey-check.js`
- Purpose: Utility script for journey check.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/llm-evaluator.js`
- Purpose: Utility script for llm evaluator.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/changelog.js`
- Purpose: Utility script for changelog.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/concept.js`
- Purpose: Utility script for concept.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/faq.js`
- Purpose: Utility script for faq.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/glossary.js`
- Purpose: Utility script for glossary.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/how_to.js`
- Purpose: Utility script for how to.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/index.js`
- Purpose: Utility script for index.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/landing.js`
- Purpose: Utility script for landing.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/overview.js`
- Purpose: Utility script for overview.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/reference.js`
- Purpose: Utility script for reference.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/troubleshooting.js`
- Purpose: Utility script for troubleshooting.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/tutorial.js`
- Purpose: Utility script for tutorial.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/quality-gate.js`
- Purpose: Utility script for quality gate.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/rubric-loader.js`
- Purpose: Utility script for rubric loader.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/rule-evaluators.js`
- Purpose: Utility script for rule evaluators.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/scoring.js`
- Purpose: Utility script for scoring.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/generated-file-banners.js`
- Purpose: Utility script for generated file banners.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/add-framework-headers.js`
- Purpose: Insert or verify governance framework metadata headers from classification JSON.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/assign-purpose-metadata.js`
- Purpose: Assign purpose and audience frontmatter metadata for docs.json EN-routable v2 pages using deterministic rules with optional LLM classification for unclassified pages.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-pages-simple.js`
- Purpose: Utility script for audit all pages simple.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-pages.js`
- Purpose: Utility script for audit all pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-v2-pages.js`
- Purpose: Utility script for audit all v2 pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-component-usage.js`
- Purpose: Utility script for audit component usage.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, ci
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component usage audit (when: scheduled, workflow-dispatch)

### `tools/scripts/audit-scripts.js`
- Purpose: Utility script for audit scripts.
- Template compliance: FAIL (empty @summary)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:scripts (when: manual, npm-script)

### `tools/scripts/audit-tasks-folders.js`
- Purpose: Utility script for audit tasks folders.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-v1-to-v2-mapping.js`
- Purpose: Utility script for audit v1 to v2 mapping.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-v2-usefulness.js`
- Purpose: Utility script for audit v2 usefulness.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/check-codex-pr-overlap.js`
- Purpose: Utility script for check codex pr overlap.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement
- Run-context tags: pr
- Used by:
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap (when: pr)

### `tools/scripts/check-component-errors.js`
- Purpose: Utility script for check component errors.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/check-no-ai-stash.sh`
- Purpose: Utility script for check no ai stash.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/cleanup-quarantine-manager.js`
- Purpose: Utility script for cleanup quarantine manager.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.cleanup:classify (when: manual, npm-script)
  - package-script: tools/package.json#scripts.cleanup:quarantine (when: manual, npm-script)

### `tools/scripts/codex-commit.js`
- Purpose: Utility script for codex commit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex-safe-merge-with-stash.js`
- Purpose: Utility script for codex safe merge with stash.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/lock-release.js`
- Purpose: Utility script for lock release.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-finalize.js`
- Purpose: Utility script for task finalize.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-preflight.js`
- Purpose: Utility script for task preflight.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/validate-locks.js`
- Purpose: Utility script for validate locks.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/component-layout-governance.js`
- Purpose: Validate v2 English docs against component-layout contracts by page type.
- Template compliance: PASS
- Role tags: ci, enforcement
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:component-layout (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance (when: scheduled, workflow-dispatch)

### `tools/scripts/convert-rss-to-mdx.js`
- Purpose: Utility script for convert rss to mdx.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/create-codex-pr.js`
- Purpose: Utility script for create codex pr.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:pr (when: manual, npm-script)

### `tools/scripts/cross-agent-packager.js`
- Purpose: Utility script for cross agent packager.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.pack:agents (when: manual, npm-script)

### `tools/scripts/debug-mint-dev.js`
- Purpose: Utility script for debug mint dev.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/add-callouts.js`
- Purpose: Utility script for add callouts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/batch-update-og-image.sh`
- Purpose: Utility script for batch update og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/ensure-mint-watcher-patch.sh`
- Purpose: Utility script for ensure mint watcher patch.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/generate-mint-dev-scope.js`
- Purpose: Utility script for generate mint dev scope.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/replace-og-image.py`
- Purpose: Utility script for replace og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/seo-generator-safe.js`
- Purpose: Utility script for seo generator safe.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-add-callouts.js`
- Purpose: Utility script for test add callouts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-seo-generator.js`
- Purpose: Utility script for test seo generator.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-all-og-images.js`
- Purpose: Utility script for update all og images.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-og-image.js`
- Purpose: Utility script for update og image.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/docs-quality-and-freshness-audit.js`
- Purpose: Utility script for docs quality and freshness audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit, ci
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:docs-quality (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Content quality audit (when: scheduled, workflow-dispatch)

### `tools/scripts/enforce-generated-file-banners.js`
- Purpose: Utility script for enforce generated file banners.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:generated-banners (when: manual, npm-script)

### `tools/scripts/enforcers/pr/check-component-immutability.js`
- Purpose: Utility script for check component immutability.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/final-verification.js`
- Purpose: Utility script for final verification.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/find-correct-url.js`
- Purpose: Utility script for find correct url.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-ai-sitemap.js`
- Purpose: Utility script for generate ai sitemap.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap (when: push, workflow-dispatch)
  - workflow: .github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output (when: pr, push)

### `tools/scripts/generate-content-gap-reconciliation.js`
- Purpose: Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-guide-components-index.js`
- Purpose: Utility script for generate docs guide components index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-guide-indexes.js`
- Purpose: Utility script for generate docs guide indexes.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.docs-guide:indexes (when: manual, npm-script)

### `tools/scripts/generate-docs-guide-pages-index.js`
- Purpose: Utility script for generate docs guide pages index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-index.js`
- Purpose: Utility script for generate docs index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, generator, hook
- Run-context tags: pr, pre-commit, push, workflow-dispatch
- Used by:
  - hook: .githooks/pre-commit#line 655 (when: pre-commit)
  - hook: .githooks/pre-commit#line 659 (when: pre-commit)
  - hook: .githooks/pre-commit#line 664 (when: pre-commit)
  - workflow: .github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current (when: pr, push, workflow-dispatch)
  - workflow: .github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index (when: push, workflow-dispatch)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json (when: workflow-dispatch)

### `tools/scripts/generate-llms-files.js`
- Purpose: Utility script for generate llms files.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/generate-llms-files.yml#Generate llms.txt > generate > Generate llms files (when: push, workflow-dispatch)
  - workflow: .github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs (when: pr, push)

### `tools/scripts/generate-pages-index.js`
- Purpose: Utility script for generate pages index.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:pages-index (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:rebuild (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:write (when: manual, npm-script)

### `tools/scripts/i18n/generate-localized-docs-json.js`
- Purpose: Utility script for generate localized docs json.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:docs-json (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes (when: workflow-dispatch)

### `tools/scripts/i18n/lib/common.js`
- Purpose: Utility script for common.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/config.js`
- Purpose: Utility script for config.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-json-localizer.js`
- Purpose: Utility script for docs json localizer.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-routes.js`
- Purpose: Utility script for docs routes.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/frontmatter.js`
- Purpose: Utility script for frontmatter.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-parser.js`
- Purpose: Utility script for mdx parser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-translate.js`
- Purpose: Utility script for mdx translate.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/path-utils.js`
- Purpose: Utility script for path utils.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provenance.js`
- Purpose: Utility script for provenance.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-mock.js`
- Purpose: Utility script for provider mock.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-openrouter.js`
- Purpose: Utility script for provider openrouter.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/providers.js`
- Purpose: Utility script for providers.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test-mintlify-version-language-toggle.js`
- Purpose: Utility script for test mintlify version language toggle.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/cli-guardrails.test.js`
- Purpose: Utility script for cli guardrails test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/docs-json-localizer.test.js`
- Purpose: Utility script for docs json localizer test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/frontmatter.test.js`
- Purpose: Utility script for frontmatter test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/mdx-translate.test.js`
- Purpose: Utility script for mdx translate test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provenance.test.js`
- Purpose: Utility script for provenance test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provider-openrouter.test.js`
- Purpose: Utility script for provider openrouter test.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/translate-docs.js`
- Purpose: Utility script for translate docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:translate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation (when: workflow-dispatch)

### `tools/scripts/i18n/validate-generated.js`
- Purpose: Validate generated localized MDX files parse cleanly and exist for successful route-map entries.
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:validate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX (when: workflow-dispatch)

### `tools/scripts/inspect-page.js`
- Purpose: Utility script for inspect page.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/inspect-video-page.js`
- Purpose: Utility script for inspect video page.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/mint-dev.sh`
- Purpose: Utility script for mint dev.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/new-script.js`
- Purpose: ' + params.summary,
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/publish-v2-internal-reports.js`
- Purpose: Utility script for publish v2 internal reports.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/remediators/content/repair-spelling.js`
- Purpose: Utility script for repair spelling.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/repo-audit-orchestrator.js`
- Purpose: Utility script for repo audit orchestrator.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:repo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:changed (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:full (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:pack-all (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:quarantine (when: manual, npm-script)

### `tools/scripts/script-footprint-and-usage-audit.js`
- Purpose: Utility script for script footprint and usage audit.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-external-docs.sh`
- Purpose: Utility script for fetch external docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, sync
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tools/package.json#scripts.fetch-docs (when: manual, npm-script)
  - package-script: tools/package.json#scripts.prebuild (when: manual, npm-script)
  - workflow: .github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets (when: pr)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets (when: pr, push)
  - workflow: .github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets (when: pr, push)

### `tools/scripts/snippets/fetch-lpt-exchanges.sh`
- Purpose: Utility script for fetch lpt exchanges.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-openapi-specs.sh`
- Purpose: Utility script for fetch openapi specs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-api-docs.sh`
- Purpose: Utility script for generate api docs.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/generate-glossary.js`
- Purpose: Utility script for generate glossary.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/terminology-search.js`
- Purpose: Utility script for terminology search.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-seo.js`
- Purpose: Utility script for generate seo.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.generate-seo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.generate-seo:dry-run (when: manual, npm-script)
  - workflow: .github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata (when: workflow-dispatch)

### `tools/scripts/snippets/test-scripts.sh`
- Purpose: Utility script for test scripts.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/update-component-library.sh`
- Purpose: Utility script for update component library.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/style-and-language-homogenizer-en-gb.js`
- Purpose: Utility script for style and language homogenizer en gb.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:language-en-gb (when: manual, npm-script)
  - workflow: .github/workflows/style-homogenise.yml#EN-GB Style Homogenisation > homogenise > Run style homogeniser (when: workflow-dispatch)

### `tools/scripts/sync-codex-skills.js`
- Purpose: Utility script for sync codex skills.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.skills:sync:codex (when: manual, npm-script)
  - package-script: tools/package.json#scripts.skills:sync:codex:check (when: manual, npm-script)

### `tools/scripts/test-all-pages-browser.js`
- Purpose: Utility script for test all pages browser.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test-all-pages-comprehensive.js`
- Purpose: Utility script for test all pages comprehensive.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test-v2-pages.js`
- Purpose: Utility script for test v2 pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.test:all-pages (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:v2-pages (when: manual, npm-script)

### `tools/scripts/test-youtube-pages.js`
- Purpose: Utility script for test youtube pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validate-codex-task-contract.js`
- Purpose: Utility script for validate codex task contract.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: ci, enforcement, hook
- Run-context tags: pr, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 149 (when: pre-commit)
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body (when: pr)

### `tools/scripts/validators/components/check-component-css.js`
- Purpose: Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/components/check-component-docs.js`
- Purpose: Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-description-quality.js`
- Purpose: Utility script for check description quality.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-double-headers.js`
- Purpose: Utility script for check double headers.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-grammar-en-gb.js`
- Purpose: Utility script for check grammar en gb.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-proper-nouns.js`
- Purpose: Utility script for check proper nouns.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-all-pages.js`
- Purpose: Utility script for verify all pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-pages.js`
- Purpose: Utility script for verify pages.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-pay-orc-gate-finalize.sh`
- Purpose: Utility script for verify pay orc gate finalize.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify/.verify-large-change.sh`
- Purpose: Utility script for verify large change.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/wcag-repair-common.js`
- Purpose: Utility script for wcag repair common.
- Template compliance: FAIL (missing @summary, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/utility/personal/download-linkedin-video.sh`
- Purpose: Utility script for tools/utility/personal/download-linkedin-video.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/utility/personal/download-linkedin-with-cookies.sh`
- Purpose: Utility script for tools/utility/personal/download-linkedin-with-cookies.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/utility/personal/execute-phase1-worktree-plan.js`
- Purpose: Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/utility/personal/transcribe-audio-to-mdx.js`
- Purpose: Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

## Overlap Clusters

No exact or high-similarity overlap clusters detected.

## Consolidation Recommendations

No consolidation recommendations generated.
