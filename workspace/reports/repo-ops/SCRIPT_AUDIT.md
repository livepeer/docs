# SCRIPT_AUDIT

Generated: 2026-03-21T03:13:33.224Z

## Rules Source
- `operations/tests/unit/script-docs.test.js`
- `operations/tests/README.md`

## Summary
- Total scripts: 281
- Template compliant: 117
- Template non-compliant: 164
- Exact overlap clusters: 1
- Near overlap clusters: 0

## Category Counts

| Category | Count |
|---|---:|
| `audit` | 42 |
| `ci` | 23 |
| `deprecated` | 9 |
| `enforcement` | 103 |
| `fixture` | 9 |
| `generator` | 55 |
| `helper` | 79 |
| `hook` | 9 |
| `manual` | 269 |
| `npm-script` | 57 |
| `pr` | 9 |
| `pre-commit` | 2 |
| `push` | 9 |
| `runner` | 7 |
| `scheduled` | 11 |
| `sync` | 24 |
| `test` | 67 |
| `workflow-dispatch` | 17 |

## Script Inventory

| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |
|---|---|---|---|---|---|
| `.githooks/install.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit` | Pre-commit hook — hard gates only (syntax, security, safety). All soft checks run in GitHub Actions PR workflows. | FAIL (missing @owner) | enforcement, hook | pre-commit | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit-no-deletions` | Variant pre-commit hook that blocks file deletions (safety net for content preservation) | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-push` | Pre-push hook — blocks push if AI stash files present, codex locks stale, or task contract invalid | FAIL (missing @owner) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/server-manager.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify-browser.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.github/scripts/fetch-forum-data.js` | Fetches latest topics and posts from Livepeer Forum API, writes to snippets/automations/forum/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-ghost-blog-data.js` | Fetches blog posts from Ghost CMS API, writes to snippets/automations/blog/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-youtube-data.js` | Fetches video data from YouTube Data API, writes to snippets/automations/youtube/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos [scheduled,workflow-dispatch] |
| `.github/scripts/project-showcase-sync.js` | Fetches project showcase data from external source, writes to snippets/automations/showcase/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync [scheduled,workflow-dispatch] |
| `lpd` | Developer CLI orchestrator — unified command surface for setup, dev server, testing, hooks, and script execution across all repo domains | FAIL (missing @owner) | runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/components/documentation/audit-component-usage.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/components/library/scan-component-imports.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit, ci, generator | scheduled, workflow-dispatch | workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component usage drift check [scheduled,workflow-dispatch] |
| `operations/scripts/audits/content/quality/audit-copy-patterns.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/quality/audit-media-assets.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/quality/audit-python.py` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/quality/audit-v2-usefulness.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:docs-quality [manual,npm-script] |
| `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/reference/terminology-search.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:language-en-gb [manual,npm-script] |
| `operations/scripts/audits/content/veracity/docs-page-research.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/content/veracity/docs-research-adjudication.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/governance/repo/audit-tasks-folders.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/audits/governance/scripts/audit-script-categories.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:scripts [manual,npm-script] |
| `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/ai/agents/cross-agent-packager.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.pack:agents [manual,npm-script] |
| `operations/scripts/automations/ai/agents/export-portable-skills.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/ai/agents/sync-codex-skills.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | sync | manual, npm-script | package-script:tools/package.json#scripts.skills:sync:codex [manual,npm-script] \| package-script:tools/package.json#scripts.skills:sync:codex:check [manual,npm-script] |
| `operations/scripts/automations/ai/codex/lock-release.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/ai/codex/task-cleanup.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/ai/codex/task-preflight.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/data/fetching/fetch-external-docs.sh` | infrastructure:data-feeds | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement, sync | manual, npm-script, pr, push | package-script:tools/package.json#scripts.fetch-docs [manual,npm-script] \| package-script:tools/package.json#scripts.prebuild [manual,npm-script] \| workflow:.github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets [pr] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets [pr,push] \| workflow:.github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets [pr,push] |
| `operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh` | infrastructure:data-feeds | FAIL (missing @category, @owner, @needs, @purpose-statement) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh` | tooling:api-spec | FAIL (missing @category, @owner, @needs, @purpose-statement) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js` | infrastructure:data-feeds | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/generate-localized-docs-json.js` | feature:translation | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:docs-json [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes [workflow-dispatch] |
| `operations/scripts/automations/content/language-translation/lib/common.js` | i18n shared utilities — common helper functions for translation pipeline | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/config.js` | i18n configuration — language codes, locale paths, translation settings | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js` | docs.json localiser engine — transforms docs.json navigation for locale variants | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/docs-routes.js` | docs route resolver — maps page paths to locale-aware routes | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/frontmatter.js` | Frontmatter parser/writer — reads and writes MDX frontmatter for translation | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/mdx-parser.js` | MDX parser for i18n — extracts translatable content blocks from MDX | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/mdx-translate.js` | MDX translation engine — applies translations to MDX content blocks | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/path-utils.js` | Path utilities for i18n — locale-aware path resolution and mapping | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/provenance.js` | Translation provenance tracker — records source, timestamp, and provider for each translated segment | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/provider-mock.js` | Mock translation provider — returns placeholder translations for testing without API calls | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/provider-openrouter.js` | OpenRouter translation provider — calls OpenRouter API for actual translations | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/lib/providers.js` | Provider registry — selects translation provider (OpenRouter or mock) based on configuration | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js` | Tests i18n CLI guardrails — validates argument validation and safety checks | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/docs-json-localizer.test.js` | Tests docs-json-localizer — validates locale docs.json transformation logic | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/frontmatter.test.js` | Tests frontmatter parser — validates frontmatter read/write roundtrip | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/mdx-translate.test.js` | Tests MDX translation — validates content block translation logic | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/provenance.test.js` | Tests provenance tracker — validates translation provenance recording | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js` | Tests OpenRouter provider — validates API call logic and response parsing | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/automations/content/language-translation/translate-docs.js` | feature:translation | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:translate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation [workflow-dispatch] |
| `operations/scripts/automations/content/language-translation/validate-generated.js` | feature:translation | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:validate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX [workflow-dispatch] |
| `operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/config/docs-path-sync.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/config/og-image-policy.js` | seo:og-image-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/ai/codex/codex-commit.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/ai/codex/create-codex-pr.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual, npm-script | package-script:tools/package.json#scripts.codex:pr [manual,npm-script] \| package-script:tools/package.json#scripts.codex:pr:advisory [manual,npm-script] |
| `operations/scripts/dispatch/ai/codex/task-finalise.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual, npm-script | package-script:tools/package.json#scripts.codex:pr:research [manual,npm-script] |
| `operations/scripts/dispatch/content/veracity/docs-research-packet.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci | manual, npm-script, push, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.repair:governance [manual,npm-script] \| workflow:.github/workflows/governance-sync.yml#Governance sync (post-merge) > sync > Run governance repair [push] \| workflow:.github/workflows/repair-governance.yml#Governance Repair > repair-governance > Run governance repair orchestrator [scheduled,workflow-dispatch] |
| `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js` | infrastructure:pipeline-orchestration | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:repo [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:changed [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:full [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:pack-all [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:quarantine [manual,npm-script] |
| `operations/scripts/generators/ai/llm/generate-llms-files.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/components/documentation/generate-component-docs.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/components/library/generate-component-registry.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement, generator | manual, npm-script, pr, push, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.registry:components [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component registry validation [scheduled,workflow-dispatch] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Validate component registry [pr,push] |
| `operations/scripts/generators/components/library/generate-ui-templates.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/content/catalogs/generate-docs-index.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current [pr,push,workflow-dispatch] \| workflow:.github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index [push,workflow-dispatch] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json [workflow-dispatch] |
| `operations/scripts/generators/content/catalogs/generate-pages-index.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/content/reference/generate-api-docs.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/content/reference/generate-glossary.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/content/seo/generate-ai-sitemap.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/content/seo/generate-og-images.js` | seo:og-image-assets | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual, npm-script | package-script:tools/package.json#scripts.docs-guide:indexes [manual,npm-script] |
| `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/catalogs/generate-script-registry.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js` | governance:ai-tools-inventory | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/generators/governance/scaffold/new-script.js` | tooling:dev-tools', | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/components/library/repair-component-metadata.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci | scheduled, workflow-dispatch | workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component metadata drift check [scheduled,workflow-dispatch] |
| `operations/scripts/remediators/content/classification/add-framework-headers.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/classification/assign-purpose-metadata.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/repair/quarantine-manager.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.cleanup:classify [manual,npm-script] \| package-script:tools/package.json#scripts.cleanup:quarantine [manual,npm-script] |
| `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.repair:mdx-safe-markdown [manual,npm-script] \| package-script:tools/package.json#scripts.repair:mdx-safe-markdown:dry-run [manual,npm-script] |
| `operations/scripts/remediators/content/repair/repair-spelling.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/repair/sync-docs-paths.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/seo/generate-seo.js` | feature:seo | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.generate-seo [manual,npm-script] \| package-script:tools/package.json#scripts.generate-seo:dry-run [manual,npm-script] \| workflow:.github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata [workflow-dispatch] |
| `operations/scripts/remediators/content/style/repair-ownerless-language.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/content/style/wcag-repair-common.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/governance/scaffold/fix-usage-paths.js` | Utility script for fix usage paths. | FAIL (missing @script, @summary, @owner, @scope, @inputs, @outputs, @exit-codes, @examples, @notes; empty @usage) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js` | Rewrite JSDoc headers in all scripts to the 11-tag standard | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/remediators/governance/scripts/repair-script-inventory.js` | governance:script-header-repair | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/snippets/test-scripts.sh` | Snippet test runner — runs basic validation on snippet scripts | PASS | enforcement, runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/ai/codex/check-no-ai-stash.sh` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/ai/codex/validate-locks.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/components/documentation/check-component-docs.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement | pr, push | workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component documentation [pr,push] |
| `operations/scripts/validators/components/library/check-component-css.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement | pr, push | workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component CSS standards [pr,push] |
| `operations/scripts/validators/components/library/check-mdx-component-scope.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/components/library/check-naming-conventions.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/components/library/component-layout-governance.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci | manual, npm-script, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.audit:component-layout [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance [scheduled,workflow-dispatch] |
| `operations/scripts/validators/content/copy/lint-copy.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/copy/lint-patterns.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/grammar/check-grammar-en-gb.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/grammar/check-proper-nouns.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js` | Mintlify language toggle checker — validates Mintlify version supports language toggle feature | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/check-anchor-usage.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/check-description-quality.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/check-docs-path-sync.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/check-double-headers.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/check-mdx-safe-markdown.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual, npm-script | package-script:operations/tests/package.json#scripts.test:mdx:safe [manual,npm-script] \| package-script:tools/package.json#scripts.test:mdx:safe [manual,npm-script] |
| `operations/scripts/validators/content/structure/check-page-endings.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/enforce-generated-file-banners.js` | governance:index-management | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/lint-structure.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/structure/test-v2-pages.js` | V2 page tester — validates v2 pages via Puppeteer browser rendering | PASS | enforcement | manual, npm-script | package-script:tools/package.json#scripts.test:all-pages [manual,npm-script] \| package-script:tools/package.json#scripts.test:v2-pages [manual,npm-script] |
| `operations/scripts/validators/content/structure/verify-all-pages.js` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/content/veracity/docs-fact-registry.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual, npm-script | package-script:tools/package.json#scripts.review:governance:repair [manual,npm-script] |
| `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js` | governance:agent-governance | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement, hook | pr, pre-commit | hook:.githooks/pre-commit#line 160 [pre-commit] \| workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body [pr] |
| `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh` | qa:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/governance/pr/audit-script-inventory.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/validators/governance/pr/check-component-immutability.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | ci, enforcement | pr, push | workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component immutability [pr,push] |
| `operations/scripts/validators/governance/pr/check-pr-template.js` | governance:repo-health | FAIL (missing @category, @owner, @needs, @purpose-statement) | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/.verify-large-change.sh` | Large change verifier — blocks or warns when a commit touches an unusually large number of files | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/batch-update-og-image.sh` | Deprecated wrapper for the legacy bulk OG image replacement helper. Use the canonical OG generator workflow instead. | PASS | deprecated, generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/codex-safe-merge-with-stash.js` | Deprecated compatibility shim — blocks stash-based Codex merge flow and directs users to task-finalize, lock-release, and task-cleanup | PASS | deprecated | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/pre-commit-v1` | Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit | FAIL (missing @owner) | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/replace-og-image.py` | Deprecated wrapper for the legacy OG image replacement helper. Use the canonical OG generator workflow instead. | PASS | deprecated, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/seo-generator-safe.js` | Deprecated wrapper for the legacy safe SEO generator. Use the canonical OG generator workflow instead. | PASS | deprecated, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/sync-legacy-root-v1.js` | Legacy root redirect synchronizer — bootstraps root-level legacy-to-v1 mappings, rewrites managed docs.json redirects, installs root catch-all fallbacks, and removes legacy generated fallback pages | FAIL (missing @owner) | deprecated, generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/update-all-og-images.js` | Deprecated wrapper for legacy bulk OG image replacement. Use the canonical OG generator workflow instead. | PASS | deprecated, generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/scripts/x-archive/update-og-image.js` | Deprecated wrapper for legacy OG image replacement. Use the canonical OG generator workflow instead. | PASS | deprecated, generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/integration/browser.test.js` | Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions | PASS | ci, enforcement, test | manual, npm-script, pr, push | package-script:operations/tests/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser:all [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) [npm-script,pr,push] |
| `operations/tests/integration/domain-pages-audit.js` | Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report | PASS | audit | manual, npm-script | package-script:operations/tests/package.json#scripts.test:domain [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:domain:both [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:domain:v1 [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:domain:v2 [manual,npm-script] |
| `operations/tests/integration/mdx-component-runtime-smoke.js` | Smoke-tests sentinel MDX routes for runtime component failures, focused on page-killing render errors from MDX-imported JSX modules. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes. | PASS | audit, ci, enforcement | manual, npm-script, pr, push, scheduled, workflow-dispatch | package-script:operations/tests/package.json#scripts.test:openapi:audit [manual,npm-script] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) [pr,push,scheduled,workflow-dispatch] |
| `operations/tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes. | PASS | audit, ci, enforcement | manual, npm-script, scheduled, workflow-dispatch | package-script:operations/tests/package.json#scripts.test:link-audit [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:link-audit:external [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:link-audit:staged [manual,npm-script] \| workflow:.github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) [scheduled,workflow-dispatch] |
| `operations/tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit.js — validates audit logic against known fixtures | PASS | audit, enforcement, fixture | manual, npm-script | package-script:operations/tests/package.json#scripts.test:link-audit:selftest [manual,npm-script] |
| `operations/tests/integration/v2-wcag-audit.js` | WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair. | PASS | audit, enforcement | manual, npm-script | package-script:operations/tests/package.json#scripts.test:wcag [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:wcag:nofix [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:wcag:staged [manual,npm-script] |
| `operations/tests/integration/v2-wcag-audit.selftest.js` | Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures | PASS | audit, enforcement, fixture | manual, npm-script | package-script:operations/tests/package.json#scripts.test:wcag:selftest [manual,npm-script] |
| `operations/tests/run-all.js` | Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test. | FAIL (missing @owner) | runner | manual, npm-script | package-script:operations/tests/package.json#scripts.test [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:precommit [manual,npm-script] \| package-script:tools/package.json#scripts.test [manual,npm-script] |
| `operations/tests/run-pr-checks.js` | PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff. | FAIL (missing @owner) | enforcement, runner, sync | manual, npm-script | package-script:operations/tests/package.json#scripts.test:pr [manual,npm-script] |
| `operations/tests/unit/ai-tools-registry.test.js` | Validates the AI-tools registry contract, full tracked ai-tools coverage, and the Wave 1 inventory source-of-truth boundary. | FAIL (missing @owner) | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/audit-script-inventory-repair-rules.test.js` | Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety. | FAIL (missing @owner) | audit, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/authoring-tools.test.js` | Unit tests for repo-owned authoring tools — verifies MDX formatting and real-path completion/validation helpers. | PASS | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:authoring-tools [manual,npm-script] |
| `operations/tests/unit/check-agent-docs-freshness.test.js` | Tests the agent governance freshness validator against the canonical runtime file set. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — asserts the deprecated stash helper hard-fails and points callers to the supported Codex lifecycle | PASS | deprecated, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file and companion bundle synchronisation between sources | PASS | enforcement, sync, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:codex-skills-sync [manual,npm-script] |
| `operations/tests/unit/codex-task-cleanup.test.js` | Tests codex/task-cleanup.js — verifies safe worktree pruning, dirty-worktree preservation, branch pruning, and repo-root protection | PASS | test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:codex-task-cleanup [manual,npm-script] |
| `operations/tests/unit/codex-task-preflight.test.js` | Tests codex/task-preflight.js — verifies managed worktree default behavior and the explicit in-place override | PASS | test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:codex-task-preflight [manual,npm-script] |
| `operations/tests/unit/component-governance-generators.test.js` | Verifies component governance generators produce coherent registry, usage-map, and docs outputs. | PASS | generator, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:components:governance [manual,npm-script] |
| `operations/tests/unit/component-governance-utils.test.js` | Verifies shared component governance utility parsing, scanning, and archive exclusion behavior. | PASS | audit, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:components:governance [manual,npm-script] |
| `operations/tests/unit/components/TEMPLATE.test.js` | Template for category-scoped component unit tests. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/copy-lint.test.js` | Copy lint unit suite — validates fixture-driven copy-governance checks and runs changed-file scoped lint aggregation for authored docs pages. | PASS | enforcement, fixture, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | PASS | enforcement, generator, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:codex-pr-create [manual,npm-script] |
| `operations/tests/unit/docs-authoring-rules.test.js` | Verifies guide-layout warning rules and deterministic code-block icon repair for authored docs pages. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-fact-registry.test.js` | Tests docs-fact-registry.js — validates claim-family registry schema checks and normalized loading by domain. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | FAIL (missing @owner) | enforcement, generator, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:docs-guide [manual,npm-script] |
| `operations/tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps | PASS | audit, ci, enforcement, test | manual, npm-script, workflow-dispatch | package-script:operations/tests/package.json#scripts.test:docs-nav [manual,npm-script] \| package-script:operations/tests/package.json#scripts.test:docs-nav:write [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation [workflow-dispatch] |
| `operations/tests/unit/docs-page-research-pr-report.test.js` | Tests docs-page-research-pr-report.js — validates changed-file advisory reporting for the fact-check research runner. | FAIL (missing @owner) | audit, enforcement, runner, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-page-research.test.js` | Tests docs-page-research.js — validates claim extraction, contradiction detection, and evidence-source adapters for the experimental research runner. | FAIL (missing @owner) | enforcement, runner, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-page-scope.test.js` | Verifies generated authored-page scope helpers so warning-only validators skip generated docs pages while keeping authored pages in scope. | PASS | generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-path-sync.test.js` | Unit tests for docs path sync — validates staged move detection, deterministic docs.json/reference rewrites, validator behavior, and remediator write mode. | PASS | enforcement, sync, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-research-adjudication.test.js` | Tests docs-research-adjudication.js — validates adjudication-ledger schema, report-aware outcome recording, and trust-tier summary rules for measured research-skill review outcomes. | FAIL (missing @owner) | audit, enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-research-packet.test.js` | Tests docs-research-packet.js — validates nav, manifest, and path tranche derivation plus packet-summary rollups for the generic research packet engine. | FAIL (missing @owner) | enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/docs-route-scope.test.js` | Verifies docs.json-derived tab and group route scopes resolve to live files. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/export-portable-skills.test.js` | Tests export-portable-skills.js — validates portable skill export packs from canonical templates. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/frontmatter-taxonomy.test.js` | Verifies shared docs frontmatter taxonomy normalization and purpose mapping. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/generated-artifacts-policy.test.js` | Tests generated artifact governance manifest — validates enums, path matching, and hook-policy expectations | FAIL (missing @owner) | enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/legacy-root-v1-redirects.test.js` | Validates legacy root-to-v1 redirect integrity, docs.json sync, root catch-all fallbacks, and legacy fallback-page cleanup behavior. | FAIL (missing @owner) | deprecated, enforcement, sync, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | FAIL (missing @owner) | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:links [manual,npm-script] \| package-script:tools/package.json#scripts.test:links [manual,npm-script] |
| `operations/tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | FAIL (missing @owner) | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/mdx-component-runtime-smoke.test.js` | Unit tests for the MDX runtime smoke helpers — covers arg parsing, sentinel route selection, trigger logic, and failure classification. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/mdx-component-scope.test.js` | Unit tests for the MDX-facing component scope validator — covers unsafe private helpers, safe inline logic, and imported helper patterns. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | PASS | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:mdx:guards [manual,npm-script] |
| `operations/tests/unit/mdx-safe-markdown.test.js` | Fixture-driven unit tests for repo-wide MDX-safe markdown repair and validation helpers. | PASS | enforcement, fixture, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:mdx:safe:unit [manual,npm-script] |
| `operations/tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | FAIL (missing @owner) | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:mdx [manual,npm-script] \| package-script:tools/package.json#scripts.test:mdx [manual,npm-script] |
| `operations/tests/unit/migrate-assets-to-branch.test.js` | Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/og-image-policy.test.js` | Unit tests for og-image-policy — validates route mapping, locale asset selection, fallback assignment, and URL guardrails. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | PASS | audit, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | PASS | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:openapi:issue [manual,npm-script] |
| `operations/tests/unit/orchestrator-guides-research-review.test.js` | Tests orchestrator-guides-research-review.js — validates live Orchestrators Guides tranche extraction, report summary helpers, and registry-drift detection for the research packet generator. | FAIL (missing @owner) | audit, enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/ownerless-governance.test.js` | Validates the ownerless governance manifest, primary gate-layer contract, and forbidden human-owner dependency in governed policy and GitHub surfaces. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/precommit-staged-cache.test.js` | Tests precommit-staged-cache.js — validates staged-tree cache hits, invalidation, and pruning | FAIL (missing @owner) | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:precommit-cache [manual,npm-script] |
| `operations/tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | PASS | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:quality [manual,npm-script] \| package-script:tools/package.json#scripts.test:quality [manual,npm-script] |
| `operations/tests/unit/repair-governance.test.js` | Tests repair-governance.js for safe dry-run, fix, rollback, strict exit handling, and workflow contract coverage. | FAIL (missing @owner) | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/repair-spelling.test.js` | Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | PASS | audit, enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:repo-audit [manual,npm-script] |
| `operations/tests/unit/root-allowlist-format.test.js` | Validates that .allowlist stays machine-readable, root-only, and aligned with the canonical agent root layout. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/run-pr-checks.test.js` | Tests run-pr-checks lane parsing, branch-health registry coverage, and incremental summary/progress behavior. | FAIL (missing @owner) | enforcement, runner, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script catalog | FAIL (missing @owner) | enforcement, generator, sync, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:scripts [manual,npm-script] |
| `operations/tests/unit/skill-docs.test.js` | Validates governed skill documentation frontmatter, references, and contract integrity for canonical templates and local skill files. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | FAIL (missing @owner) | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:spell [manual,npm-script] \| package-script:tools/package.json#scripts.test:spell [manual,npm-script] |
| `operations/tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | PASS | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:style [manual,npm-script] \| package-script:tools/package.json#scripts.test:style [manual,npm-script] |
| `operations/tests/unit/ui-template-generator.test.js` | Validates UI template generator snippet outputs are valid JSON, deterministic, and safe for after-< component insertion | PASS | enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/usefulness-journey.test.js` | Tests journey-check evaluation logic against fixture pages. | PASS | enforcement, fixture, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/usefulness-rubric.test.js` | Tests rubric-based scoring logic against fixture pages. | PASS | fixture, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js` | Unit tests for the v2 folder governance cleanup matrix generator — verifies core classification, targeting, and age-bucket rules. | FAIL (missing @owner) | generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | PASS | audit, enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:link-audit:unit [manual,npm-script] |
| `operations/tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | FAIL (missing @owner) | audit, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:wcag:unit [manual,npm-script] |
| `operations/tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | FAIL (missing @owner) | enforcement, test | manual, npm-script | package-script:operations/tests/package.json#scripts.test:codex-task-contract [manual,npm-script] |
| `operations/tests/utils/file-walker.js` | File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators. | PASS | hook | manual | hook:.githooks/verify.sh#line 35 [manual] |
| `operations/tests/utils/mdx-parser.js` | MDX parser utility — extracts frontmatter, components, content blocks from MDX files | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/utils/mintignore.js` | Mintignore utility — reads .mintignore patterns and filters file lists | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/utils/openapi-rolling-issue.js` | OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings | PASS | audit, generator, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `operations/tests/utils/spell-checker.js` | Spell checker utility — checks text against custom dictionary with en-GB locale support | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `snippets/automations/youtube/filterVideos.js` | YouTube video filter — post-processes fetched YouTube data to filter/sort videos for display | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/config/v2-internal-report-pages.js` | Configuration data — list of internal report page paths for publish-v2-internal-reports.js | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/add-callouts.js` | qa:content-quality | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/debug-mint-dev.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/ensure-mint-watcher-patch.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/format-mdx.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.format-mdx [manual,npm-script] \| package-script:tools/package.json#scripts.format-mdx:check [manual,npm-script] |
| `tools/dev/generate-mint-dev-scope.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/install-authoring-tools-extension.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.vscode:authoring-tools:install [manual,npm-script] |
| `tools/dev/lib/resolve-scoped-docs-config.js` | Scoped docs config resolver — resolves named scoped navigation configs and explicit docs config paths for mint-dev tooling | FAIL (missing @owner) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/mint-custom-loader.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/mint-dev.sh` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/rename-vscode-codex-chat.js` | tooling:dev-tools | FAIL (missing @category, @owner, @needs, @purpose-statement) | helper | manual, npm-script | package-script:tools/package.json#scripts.codex:chat:list [manual,npm-script] \| package-script:tools/package.json#scripts.codex:chat:rename [manual,npm-script] |
| `tools/dev/test-add-callouts.js` | Test for add-callouts.js — validates callout insertion logic against fixtures | PASS | enforcement, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/dev/test-seo-generator.js` | Test for seo-generator — validates SEO generation logic | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/ai-tools-registry.js` | Shared loader, validator, coverage checker, and report renderer for the AI-tools registry contract and generated inventory report. | FAIL (missing @owner) | audit, enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/codex-skill-templates.js` | Shared helper for validating, selecting, and loading canonical Codex skill templates. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/component-governance-utils.js` | Shared parsing and validation utilities for component governance scripts. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-authoring-rules.js` | Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-index-utils.js` | Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-page-scope.js` | Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports. | PASS | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-publishability.js` | Shared path publishability rules for v2 docs content and tooling. | FAIL (missing @owner) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/config-validator.js` | Validates docs-usefulness config structure and field completeness. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/journey-check.js` | Evaluates docs pages against user journey completeness criteria. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/llm-evaluator.js` | Wraps LLM API calls for rubric-based page quality evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/changelog.js` | LLM prompt template for changelog page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/concept.js` | LLM prompt template for concept page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/faq.js` | LLM prompt template for faq page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/glossary.js` | LLM prompt template for glossary page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/how_to.js` | LLM prompt template for how_to page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/index.js` | LLM prompt template for index page-type usefulness evaluation. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/landing.js` | LLM prompt template for landing page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/overview.js` | LLM prompt template for overview page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/reference.js` | LLM prompt template for reference page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/troubleshooting.js` | LLM prompt template for troubleshooting page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/prompts/tutorial.js` | LLM prompt template for tutorial page-type usefulness evaluation. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/quality-gate.js` | Applies pass/fail thresholds to usefulness scores. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/rubric-loader.js` | Loads and parses rubric YAML/JSON for page-type scoring rules. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/rule-evaluators.js` | Evaluates individual rubric rules against page content. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/scoring.js` | Aggregates rule scores into a final usefulness score per page. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/frontmatter-taxonomy.js` | Shared frontmatter taxonomy utilities for routable docs pages. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/generated-artifacts.js` | Generated artifact governance helpers — load the manifest, validate enums, and match staged files to managed artifacts | FAIL (missing @owner) | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/generated-file-banners.js` | Generated file banner template — provides standard banner text for auto-generated files | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/load-js-yaml.js` | YAML loader utility — resolves js-yaml from repo-local installs and falls back to a minimal parser for task-contract style files in bare worktrees | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/load-minimatch.js` | Glob matcher loader — resolves minimatch from repo-local installs and falls back to a simple glob matcher for bare worktrees | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/mdx-safe-markdown.js` | Shared MDX-safe markdown helpers that collect first-party markdown files, detect unsafe patterns, and apply deterministic repairs. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/precommit-staged-cache.js` | Shared pre-commit staged-cache helpers — fingerprint staged content plus hook inputs and persist reusable pass markers | FAIL (missing @owner) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/script-governance-config.js` | Shared governance constants for script discovery, indexing, classification, and pipeline normalisation across the repo. | FAIL (missing @owner) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/script-header-utils.js` | Shared helpers for extracting and reading top-of-file script governance headers without scanning into executable source. | FAIL (missing @owner) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/authoring-tools/extension.js` | Utility script for extension. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/authoring-tools/lib/authoring-core.js` | Utility script for authoring core. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/components/extension.js` | Utility script for extension. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/extension.js` | Utility script for extension. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/lib/component-map.js` | Utility script for component map. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/lib/mdx-parser.js` | Utility script for mdx parser. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/lib/mintlify-components.js` | Utility script for mintlify components. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/lib/webview-template.js` | Utility script for webview template. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/media/markdown-it.min.js` | Utility script for markdown it min. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/media/mermaid.min.js` | Utility script for mermaid min. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/lpd-mdx-preview/media/preview.js` | Utility script for preview. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/vscode/markdown-list/extension.js` | Utility script for extension. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `workspace/scripts/repair-registry.py` | Utility script for repair registry. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |

## Template Compliance Failures

### `.githooks/install.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `.githooks/pre-commit`
- Missing tags: @owner
- Empty/placeholder tags: none

### `.githooks/pre-push`
- Missing tags: @owner
- Empty/placeholder tags: none

### `.githooks/server-manager.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `.githooks/verify-browser.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `.githooks/verify.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `lpd`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/scripts/audits/components/documentation/audit-component-usage.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/components/library/scan-component-imports.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/quality/audit-copy-patterns.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/quality/audit-media-assets.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/quality/audit-python.py`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/quality/audit-v2-usefulness.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/reference/terminology-search.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/veracity/docs-page-research.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/content/veracity/docs-research-adjudication.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/governance/repo/audit-tasks-folders.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/governance/scripts/audit-script-categories.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/agents/cross-agent-packager.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/agents/export-portable-skills.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/agents/sync-codex-skills.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/codex/lock-release.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/codex/task-cleanup.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/ai/codex/task-preflight.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/data/fetching/fetch-external-docs.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/language-translation/generate-localized-docs-json.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/language-translation/translate-docs.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/content/language-translation/validate-generated.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/config/docs-path-sync.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/config/og-image-policy.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/ai/codex/codex-commit.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/ai/codex/create-codex-pr.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/ai/codex/task-finalise.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/content/veracity/docs-research-packet.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/ai/llm/generate-llms-files.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/components/documentation/generate-component-docs.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/components/library/generate-component-registry.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/components/library/generate-ui-templates.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/catalogs/generate-docs-index.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/catalogs/generate-pages-index.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/reference/generate-api-docs.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/reference/generate-glossary.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/seo/generate-ai-sitemap.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/content/seo/generate-og-images.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/catalogs/generate-script-registry.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/generators/governance/scaffold/new-script.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/components/library/repair-component-metadata.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/classification/add-framework-headers.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/classification/assign-purpose-metadata.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/repair/quarantine-manager.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/repair/repair-spelling.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/repair/sync-docs-paths.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/seo/generate-seo.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/style/repair-ownerless-language.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/content/style/wcag-repair-common.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/governance/scaffold/fix-usage-paths.js`
- Missing tags: @script, @summary, @owner, @scope, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: @usage

### `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/ai/codex/check-no-ai-stash.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/ai/codex/validate-locks.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/components/documentation/check-component-docs.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/components/library/check-component-css.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/components/library/check-mdx-component-scope.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/components/library/check-naming-conventions.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/components/library/component-layout-governance.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/copy/lint-copy.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/copy/lint-patterns.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/grammar/check-proper-nouns.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-anchor-usage.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-description-quality.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-docs-path-sync.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-double-headers.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-mdx-safe-markdown.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/check-page-endings.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/enforce-generated-file-banners.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/lint-structure.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/structure/verify-all-pages.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/content/veracity/docs-fact-registry.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/pr/audit-script-inventory.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/pr/check-component-immutability.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/validators/governance/pr/check-pr-template.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `operations/scripts/x-archive/pre-commit-v1`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/scripts/x-archive/sync-legacy-root-v1.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/run-all.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/run-pr-checks.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/ai-tools-registry.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/audit-script-inventory-repair-rules.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/docs-guide-sot.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/docs-page-research-pr-report.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/docs-page-research.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/docs-research-adjudication.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/docs-research-packet.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/generated-artifacts-policy.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/legacy-root-v1-redirects.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/links-imports.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/lpd-scoped-mint-dev.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/mdx.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/orchestrator-guides-research-review.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/precommit-staged-cache.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/repair-governance.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/run-pr-checks.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/script-docs.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/spelling.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/v2-wcag-audit.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `operations/tests/unit/validate-codex-task-contract.test.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/dev/add-callouts.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/debug-mint-dev.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/ensure-mint-watcher-patch.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/format-mdx.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/generate-mint-dev-scope.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/install-authoring-tools-extension.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/lib/resolve-scoped-docs-config.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/dev/mint-custom-loader.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/mint-dev.sh`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/dev/rename-vscode-codex-chat.js`
- Missing tags: @category, @owner, @needs, @purpose-statement
- Empty/placeholder tags: none

### `tools/lib/ai-tools-registry.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/lib/docs-publishability.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/lib/generated-artifacts.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/lib/precommit-staged-cache.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/lib/script-governance-config.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/lib/script-header-utils.js`
- Missing tags: @owner
- Empty/placeholder tags: none

### `tools/vscode/authoring-tools/extension.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/authoring-tools/lib/authoring-core.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/components/extension.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/extension.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/lib/component-map.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/lib/mdx-parser.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/lib/mintlify-components.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/lib/webview-template.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/media/markdown-it.min.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/media/mermaid.min.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/lpd-mdx-preview/media/preview.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/vscode/markdown-list/extension.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `workspace/scripts/repair-registry.py`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none


## Usage Detail

### `.githooks/install.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit`
- Purpose: Pre-commit hook — hard gates only (syntax, security, safety). All soft checks run in GitHub Actions PR workflows.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, hook
- Run-context tags: pre-commit
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit-no-deletions`
- Purpose: Variant pre-commit hook that blocks file deletions (safety net for content preservation)
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-push`
- Purpose: Pre-push hook — blocks push if AI stash files present, codex locks stale, or task contract invalid
- Template compliance: FAIL (missing @owner)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/server-manager.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify-browser.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.github/scripts/fetch-forum-data.js`
- Purpose: Fetches latest topics and posts from Livepeer Forum API, writes to snippets/automations/forum/
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-ghost-blog-data.js`
- Purpose: Fetches blog posts from Ghost CMS API, writes to snippets/automations/blog/
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-youtube-data.js`
- Purpose: Fetches video data from YouTube Data API, writes to snippets/automations/youtube/
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos (when: scheduled, workflow-dispatch)

### `.github/scripts/project-showcase-sync.js`
- Purpose: Fetches project showcase data from external source, writes to snippets/automations/showcase/
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync (when: scheduled, workflow-dispatch)

### `lpd`
- Purpose: Developer CLI orchestrator — unified command surface for setup, dev server, testing, hooks, and script execution across all repo domains
- Template compliance: FAIL (missing @owner)
- Role tags: runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/components/documentation/audit-component-usage.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/components/library/scan-component-imports.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit, ci, generator
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component usage drift check (when: scheduled, workflow-dispatch)

### `operations/scripts/audits/content/quality/audit-copy-patterns.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/quality/audit-media-assets.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/quality/audit-python.py`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/quality/audit-v2-usefulness.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:docs-quality (when: manual, npm-script)

### `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/reference/terminology-search.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:language-en-gb (when: manual, npm-script)

### `operations/scripts/audits/content/veracity/docs-page-research.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/content/veracity/docs-research-adjudication.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/governance/repo/audit-tasks-folders.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/audits/governance/scripts/audit-script-categories.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:scripts (when: manual, npm-script)

### `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/ai/agents/cross-agent-packager.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.pack:agents (when: manual, npm-script)

### `operations/scripts/automations/ai/agents/export-portable-skills.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/ai/agents/sync-codex-skills.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.skills:sync:codex (when: manual, npm-script)
  - package-script: tools/package.json#scripts.skills:sync:codex:check (when: manual, npm-script)

### `operations/scripts/automations/ai/codex/lock-release.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/ai/codex/task-cleanup.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/ai/codex/task-preflight.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/data/fetching/fetch-external-docs.sh`
- Purpose: infrastructure:data-feeds
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement, sync
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tools/package.json#scripts.fetch-docs (when: manual, npm-script)
  - package-script: tools/package.json#scripts.prebuild (when: manual, npm-script)
  - workflow: .github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets (when: pr)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets (when: pr, push)
  - workflow: .github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets (when: pr, push)

### `operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh`
- Purpose: infrastructure:data-feeds
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh`
- Purpose: tooling:api-spec
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js`
- Purpose: infrastructure:data-feeds
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/generate-localized-docs-json.js`
- Purpose: feature:translation
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:docs-json (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes (when: workflow-dispatch)

### `operations/scripts/automations/content/language-translation/lib/common.js`
- Purpose: i18n shared utilities — common helper functions for translation pipeline
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/config.js`
- Purpose: i18n configuration — language codes, locale paths, translation settings
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js`
- Purpose: docs.json localiser engine — transforms docs.json navigation for locale variants
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/docs-routes.js`
- Purpose: docs route resolver — maps page paths to locale-aware routes
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/frontmatter.js`
- Purpose: Frontmatter parser/writer — reads and writes MDX frontmatter for translation
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/mdx-parser.js`
- Purpose: MDX parser for i18n — extracts translatable content blocks from MDX
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/mdx-translate.js`
- Purpose: MDX translation engine — applies translations to MDX content blocks
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/path-utils.js`
- Purpose: Path utilities for i18n — locale-aware path resolution and mapping
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/provenance.js`
- Purpose: Translation provenance tracker — records source, timestamp, and provider for each translated segment
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/provider-mock.js`
- Purpose: Mock translation provider — returns placeholder translations for testing without API calls
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/provider-openrouter.js`
- Purpose: OpenRouter translation provider — calls OpenRouter API for actual translations
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/lib/providers.js`
- Purpose: Provider registry — selects translation provider (OpenRouter or mock) based on configuration
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js`
- Purpose: Tests i18n CLI guardrails — validates argument validation and safety checks
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/docs-json-localizer.test.js`
- Purpose: Tests docs-json-localizer — validates locale docs.json transformation logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/frontmatter.test.js`
- Purpose: Tests frontmatter parser — validates frontmatter read/write roundtrip
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/mdx-translate.test.js`
- Purpose: Tests MDX translation — validates content block translation logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/provenance.test.js`
- Purpose: Tests provenance tracker — validates translation provenance recording
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js`
- Purpose: Tests OpenRouter provider — validates API call logic and response parsing
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/automations/content/language-translation/translate-docs.js`
- Purpose: feature:translation
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:translate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation (when: workflow-dispatch)

### `operations/scripts/automations/content/language-translation/validate-generated.js`
- Purpose: feature:translation
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:validate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX (when: workflow-dispatch)

### `operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/config/docs-path-sync.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/config/og-image-policy.js`
- Purpose: seo:og-image-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/ai/codex/codex-commit.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/ai/codex/create-codex-pr.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:pr (when: manual, npm-script)
  - package-script: tools/package.json#scripts.codex:pr:advisory (when: manual, npm-script)

### `operations/scripts/dispatch/ai/codex/task-finalise.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:pr:research (when: manual, npm-script)

### `operations/scripts/dispatch/content/veracity/docs-research-packet.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci
- Run-context tags: manual, npm-script, push, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.repair:governance (when: manual, npm-script)
  - workflow: .github/workflows/governance-sync.yml#Governance sync (post-merge) > sync > Run governance repair (when: push)
  - workflow: .github/workflows/repair-governance.yml#Governance Repair > repair-governance > Run governance repair orchestrator (when: scheduled, workflow-dispatch)

### `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`
- Purpose: infrastructure:pipeline-orchestration
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:repo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:changed (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:full (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:pack-all (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:quarantine (when: manual, npm-script)

### `operations/scripts/generators/ai/llm/generate-llms-files.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/components/documentation/generate-component-docs.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/components/library/generate-component-registry.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement, generator
- Run-context tags: manual, npm-script, pr, push, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.registry:components (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component registry validation (when: scheduled, workflow-dispatch)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Validate component registry (when: pr, push)

### `operations/scripts/generators/components/library/generate-ui-templates.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/content/catalogs/generate-docs-index.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current (when: pr, push, workflow-dispatch)
  - workflow: .github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index (when: push, workflow-dispatch)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json (when: workflow-dispatch)

### `operations/scripts/generators/content/catalogs/generate-pages-index.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/content/reference/generate-api-docs.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/content/reference/generate-glossary.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/content/seo/generate-ai-sitemap.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/content/seo/generate-og-images.js`
- Purpose: seo:og-image-assets
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.docs-guide:indexes (when: manual, npm-script)

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/catalogs/generate-script-registry.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`
- Purpose: governance:ai-tools-inventory
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/generators/governance/scaffold/new-script.js`
- Purpose: tooling:dev-tools',
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/components/library/repair-component-metadata.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component metadata drift check (when: scheduled, workflow-dispatch)

### `operations/scripts/remediators/content/classification/add-framework-headers.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/classification/assign-purpose-metadata.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/repair/quarantine-manager.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.cleanup:classify (when: manual, npm-script)
  - package-script: tools/package.json#scripts.cleanup:quarantine (when: manual, npm-script)

### `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.repair:mdx-safe-markdown (when: manual, npm-script)
  - package-script: tools/package.json#scripts.repair:mdx-safe-markdown:dry-run (when: manual, npm-script)

### `operations/scripts/remediators/content/repair/repair-spelling.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/repair/sync-docs-paths.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/seo/generate-seo.js`
- Purpose: feature:seo
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.generate-seo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.generate-seo:dry-run (when: manual, npm-script)
  - workflow: .github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata (when: workflow-dispatch)

### `operations/scripts/remediators/content/style/repair-ownerless-language.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/content/style/wcag-repair-common.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/governance/scaffold/fix-usage-paths.js`
- Purpose: Utility script for fix usage paths.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @inputs, @outputs, @exit-codes, @examples, @notes; empty @usage)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`
- Purpose: Rewrite JSDoc headers in all scripts to the 11-tag standard
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`
- Purpose: governance:script-header-repair
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/snippets/test-scripts.sh`
- Purpose: Snippet test runner — runs basic validation on snippet scripts
- Template compliance: PASS
- Role tags: enforcement, runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/ai/codex/check-no-ai-stash.sh`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/ai/codex/validate-locks.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/components/documentation/check-component-docs.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement
- Run-context tags: pr, push
- Used by:
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component documentation (when: pr, push)

### `operations/scripts/validators/components/library/check-component-css.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement
- Run-context tags: pr, push
- Used by:
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component CSS standards (when: pr, push)

### `operations/scripts/validators/components/library/check-mdx-component-scope.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/components/library/check-naming-conventions.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/components/library/component-layout-governance.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:component-layout (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance (when: scheduled, workflow-dispatch)

### `operations/scripts/validators/content/copy/lint-copy.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/copy/lint-patterns.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/grammar/check-proper-nouns.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js`
- Purpose: Mintlify language toggle checker — validates Mintlify version supports language toggle feature
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/check-anchor-usage.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/check-description-quality.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/check-docs-path-sync.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/check-double-headers.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/check-mdx-safe-markdown.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:mdx:safe (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:mdx:safe (when: manual, npm-script)

### `operations/scripts/validators/content/structure/check-page-endings.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/enforce-generated-file-banners.js`
- Purpose: governance:index-management
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/lint-structure.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/structure/test-v2-pages.js`
- Purpose: V2 page tester — validates v2 pages via Puppeteer browser rendering
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.test:all-pages (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:v2-pages (when: manual, npm-script)

### `operations/scripts/validators/content/structure/verify-all-pages.js`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/content/veracity/docs-fact-registry.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.review:governance:repair (when: manual, npm-script)

### `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js`
- Purpose: governance:agent-governance
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement, hook
- Run-context tags: pr, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 160 (when: pre-commit)
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body (when: pr)

### `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh`
- Purpose: qa:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/governance/pr/audit-script-inventory.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/validators/governance/pr/check-component-immutability.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: ci, enforcement
- Run-context tags: pr, push
- Used by:
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > component-enforcement > Component immutability (when: pr, push)

### `operations/scripts/validators/governance/pr/check-pr-template.js`
- Purpose: governance:repo-health
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/.verify-large-change.sh`
- Purpose: Large change verifier — blocks or warns when a commit touches an unusually large number of files
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/batch-update-og-image.sh`
- Purpose: Deprecated wrapper for the legacy bulk OG image replacement helper. Use the canonical OG generator workflow instead.
- Template compliance: PASS
- Role tags: deprecated, generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/codex-safe-merge-with-stash.js`
- Purpose: Deprecated compatibility shim — blocks stash-based Codex merge flow and directs users to task-finalize, lock-release, and task-cleanup
- Template compliance: PASS
- Role tags: deprecated
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/pre-commit-v1`
- Purpose: Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/replace-og-image.py`
- Purpose: Deprecated wrapper for the legacy OG image replacement helper. Use the canonical OG generator workflow instead.
- Template compliance: PASS
- Role tags: deprecated, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/seo-generator-safe.js`
- Purpose: Deprecated wrapper for the legacy safe SEO generator. Use the canonical OG generator workflow instead.
- Template compliance: PASS
- Role tags: deprecated, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/sync-legacy-root-v1.js`
- Purpose: Legacy root redirect synchronizer — bootstraps root-level legacy-to-v1 mappings, rewrites managed docs.json redirects, installs root catch-all fallbacks, and removes legacy generated fallback pages
- Template compliance: FAIL (missing @owner)
- Role tags: deprecated, generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/update-all-og-images.js`
- Purpose: Deprecated wrapper for legacy bulk OG image replacement. Use the canonical OG generator workflow instead.
- Template compliance: PASS
- Role tags: deprecated, generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/scripts/x-archive/update-og-image.js`
- Purpose: Deprecated wrapper for legacy OG image replacement. Use the canonical OG generator workflow instead.
- Template compliance: PASS
- Role tags: deprecated, generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/integration/browser.test.js`
- Purpose: Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions
- Template compliance: PASS
- Role tags: ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: operations/tests/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser:all (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) (when: npm-script, pr, push)

### `operations/tests/integration/domain-pages-audit.js`
- Purpose: Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:domain (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:domain:both (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:domain:v1 (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:domain:v2 (when: manual, npm-script)

### `operations/tests/integration/mdx-component-runtime-smoke.js`
- Purpose: Smoke-tests sentinel MDX routes for runtime component failures, focused on page-killing render errors from MDX-imported JSX modules.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/integration/openapi-reference-audit.js`
- Purpose: Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes.
- Template compliance: PASS
- Role tags: audit, ci, enforcement
- Run-context tags: manual, npm-script, pr, push, scheduled, workflow-dispatch
- Used by:
  - package-script: operations/tests/package.json#scripts.test:openapi:audit (when: manual, npm-script)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) (when: pr, push, scheduled, workflow-dispatch)

### `operations/tests/integration/v2-link-audit.js`
- Purpose: Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes.
- Template compliance: PASS
- Role tags: audit, ci, enforcement
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: operations/tests/package.json#scripts.test:link-audit (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:link-audit:external (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:link-audit:staged (when: manual, npm-script)
  - workflow: .github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) (when: scheduled, workflow-dispatch)

### `operations/tests/integration/v2-link-audit.selftest.js`
- Purpose: Self-test suite for v2-link-audit.js — validates audit logic against known fixtures
- Template compliance: PASS
- Role tags: audit, enforcement, fixture
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:link-audit:selftest (when: manual, npm-script)

### `operations/tests/integration/v2-wcag-audit.js`
- Purpose: WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair.
- Template compliance: PASS
- Role tags: audit, enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:wcag (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:wcag:nofix (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:wcag:staged (when: manual, npm-script)

### `operations/tests/integration/v2-wcag-audit.selftest.js`
- Purpose: Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures
- Template compliance: PASS
- Role tags: audit, enforcement, fixture
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:wcag:selftest (when: manual, npm-script)

### `operations/tests/run-all.js`
- Purpose: Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test.
- Template compliance: FAIL (missing @owner)
- Role tags: runner
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:precommit (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test (when: manual, npm-script)

### `operations/tests/run-pr-checks.js`
- Purpose: PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, runner, sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:pr (when: manual, npm-script)

### `operations/tests/unit/ai-tools-registry.test.js`
- Purpose: Validates the AI-tools registry contract, full tracked ai-tools coverage, and the Wave 1 inventory source-of-truth boundary.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/audit-script-inventory-repair-rules.test.js`
- Purpose: Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety.
- Template compliance: FAIL (missing @owner)
- Role tags: audit, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/authoring-tools.test.js`
- Purpose: Unit tests for repo-owned authoring tools — verifies MDX formatting and real-path completion/validation helpers.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:authoring-tools (when: manual, npm-script)

### `operations/tests/unit/check-agent-docs-freshness.test.js`
- Purpose: Tests the agent governance freshness validator against the canonical runtime file set.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/codex-commit.test.js`
- Purpose: Tests codex-commit.js — validates commit message generation and contract compliance
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/codex-safe-merge-with-stash.test.js`
- Purpose: Tests codex-safe-merge-with-stash.js — asserts the deprecated stash helper hard-fails and points callers to the supported Codex lifecycle
- Template compliance: PASS
- Role tags: deprecated, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/codex-skill-sync.test.js`
- Purpose: Tests sync-codex-skills.js — validates skill file and companion bundle synchronisation between sources
- Template compliance: PASS
- Role tags: enforcement, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:codex-skills-sync (when: manual, npm-script)

### `operations/tests/unit/codex-task-cleanup.test.js`
- Purpose: Tests codex/task-cleanup.js — verifies safe worktree pruning, dirty-worktree preservation, branch pruning, and repo-root protection
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:codex-task-cleanup (when: manual, npm-script)

### `operations/tests/unit/codex-task-preflight.test.js`
- Purpose: Tests codex/task-preflight.js — verifies managed worktree default behavior and the explicit in-place override
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:codex-task-preflight (when: manual, npm-script)

### `operations/tests/unit/component-governance-generators.test.js`
- Purpose: Verifies component governance generators produce coherent registry, usage-map, and docs outputs.
- Template compliance: PASS
- Role tags: generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:components:governance (when: manual, npm-script)

### `operations/tests/unit/component-governance-utils.test.js`
- Purpose: Verifies shared component governance utility parsing, scanning, and archive exclusion behavior.
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:components:governance (when: manual, npm-script)

### `operations/tests/unit/components/TEMPLATE.test.js`
- Purpose: Template for category-scoped component unit tests.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/copy-lint.test.js`
- Purpose: Copy lint unit suite — validates fixture-driven copy-governance checks and runs changed-file scoped lint aggregation for authored docs pages.
- Template compliance: PASS
- Role tags: enforcement, fixture, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/create-codex-pr.test.js`
- Purpose: Tests create-codex-pr.js — validates PR creation logic and branch naming
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:codex-pr-create (when: manual, npm-script)

### `operations/tests/unit/docs-authoring-rules.test.js`
- Purpose: Verifies guide-layout warning rules and deterministic code-block icon repair for authored docs pages.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-fact-registry.test.js`
- Purpose: Tests docs-fact-registry.js — validates claim-family registry schema checks and normalized loading by domain.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-guide-sot.test.js`
- Purpose: Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:docs-guide (when: manual, npm-script)

### `operations/tests/unit/docs-navigation.test.js`
- Purpose: Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: operations/tests/package.json#scripts.test:docs-nav (when: manual, npm-script)
  - package-script: operations/tests/package.json#scripts.test:docs-nav:write (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation (when: workflow-dispatch)

### `operations/tests/unit/docs-page-research-pr-report.test.js`
- Purpose: Tests docs-page-research-pr-report.js — validates changed-file advisory reporting for the fact-check research runner.
- Template compliance: FAIL (missing @owner)
- Role tags: audit, enforcement, runner, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-page-research.test.js`
- Purpose: Tests docs-page-research.js — validates claim extraction, contradiction detection, and evidence-source adapters for the experimental research runner.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, runner, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-page-scope.test.js`
- Purpose: Verifies generated authored-page scope helpers so warning-only validators skip generated docs pages while keeping authored pages in scope.
- Template compliance: PASS
- Role tags: generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-path-sync.test.js`
- Purpose: Unit tests for docs path sync — validates staged move detection, deterministic docs.json/reference rewrites, validator behavior, and remediator write mode.
- Template compliance: PASS
- Role tags: enforcement, sync, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-research-adjudication.test.js`
- Purpose: Tests docs-research-adjudication.js — validates adjudication-ledger schema, report-aware outcome recording, and trust-tier summary rules for measured research-skill review outcomes.
- Template compliance: FAIL (missing @owner)
- Role tags: audit, enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-research-packet.test.js`
- Purpose: Tests docs-research-packet.js — validates nav, manifest, and path tranche derivation plus packet-summary rollups for the generic research packet engine.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/docs-route-scope.test.js`
- Purpose: Verifies docs.json-derived tab and group route scopes resolve to live files.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/export-portable-skills.test.js`
- Purpose: Tests export-portable-skills.js — validates portable skill export packs from canonical templates.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/frontmatter-taxonomy.test.js`
- Purpose: Verifies shared docs frontmatter taxonomy normalization and purpose mapping.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/generated-artifacts-policy.test.js`
- Purpose: Tests generated artifact governance manifest — validates enums, path matching, and hook-policy expectations
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/legacy-root-v1-redirects.test.js`
- Purpose: Validates legacy root-to-v1 redirect integrity, docs.json sync, root catch-all fallbacks, and legacy fallback-page cleanup behavior.
- Template compliance: FAIL (missing @owner)
- Role tags: deprecated, enforcement, sync, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/links-imports.test.js`
- Purpose: Validates MDX internal links and snippet import paths are resolvable
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:links (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:links (when: manual, npm-script)

### `operations/tests/unit/lpd-scoped-mint-dev.test.js`
- Purpose: Tests lpd scoped mint-dev functionality — validates dev server scope filtering
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/mdx-component-runtime-smoke.test.js`
- Purpose: Unit tests for the MDX runtime smoke helpers — covers arg parsing, sentinel route selection, trigger logic, and failure classification.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/mdx-component-scope.test.js`
- Purpose: Unit tests for the MDX-facing component scope validator — covers unsafe private helpers, safe inline logic, and imported helper patterns.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/mdx-guards.test.js`
- Purpose: Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:mdx:guards (when: manual, npm-script)

### `operations/tests/unit/mdx-safe-markdown.test.js`
- Purpose: Fixture-driven unit tests for repo-wide MDX-safe markdown repair and validation helpers.
- Template compliance: PASS
- Role tags: enforcement, fixture, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:mdx:safe:unit (when: manual, npm-script)

### `operations/tests/unit/mdx.test.js`
- Purpose: Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:mdx (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:mdx (when: manual, npm-script)

### `operations/tests/unit/migrate-assets-to-branch.test.js`
- Purpose: Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/og-image-policy.test.js`
- Purpose: Unit tests for og-image-policy — validates route mapping, locale asset selection, fallback assignment, and URL guardrails.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/openapi-reference-audit.test.js`
- Purpose: Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/openapi-rolling-issue.test.js`
- Purpose: Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:openapi:issue (when: manual, npm-script)

### `operations/tests/unit/orchestrator-guides-research-review.test.js`
- Purpose: Tests orchestrator-guides-research-review.js — validates live Orchestrators Guides tranche extraction, report summary helpers, and registry-drift detection for the research packet generator.
- Template compliance: FAIL (missing @owner)
- Role tags: audit, enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/ownerless-governance.test.js`
- Purpose: Validates the ownerless governance manifest, primary gate-layer contract, and forbidden human-owner dependency in governed policy and GitHub surfaces.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/precommit-staged-cache.test.js`
- Purpose: Tests precommit-staged-cache.js — validates staged-tree cache hits, invalidation, and pruning
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:precommit-cache (when: manual, npm-script)

### `operations/tests/unit/quality.test.js`
- Purpose: Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:quality (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:quality (when: manual, npm-script)

### `operations/tests/unit/repair-governance.test.js`
- Purpose: Tests repair-governance.js for safe dry-run, fix, rollback, strict exit handling, and workflow contract coverage.
- Template compliance: FAIL (missing @owner)
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/repair-spelling.test.js`
- Purpose: Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/repo-audit-pipeline.test.js`
- Purpose: Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:repo-audit (when: manual, npm-script)

### `operations/tests/unit/root-allowlist-format.test.js`
- Purpose: Validates that .allowlist stays machine-readable, root-only, and aligned with the canonical agent root layout.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/run-pr-checks.test.js`
- Purpose: Tests run-pr-checks lane parsing, branch-health registry coverage, and incremental summary/progress behavior.
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, runner, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/script-docs.test.js`
- Purpose: Enforces script header schema, keeps group script indexes in sync, and builds aggregate script catalog
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:scripts (when: manual, npm-script)

### `operations/tests/unit/skill-docs.test.js`
- Purpose: Validates governed skill documentation frontmatter, references, and contract integrity for canonical templates and local skill files.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/spelling.test.js`
- Purpose: Spelling check — validates content against custom dictionary with en-GB rules
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:spell (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:spell (when: manual, npm-script)

### `operations/tests/unit/style-guide.test.js`
- Purpose: Style guide compliance — checks en-GB conventions, heading case, formatting rules
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:style (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:style (when: manual, npm-script)

### `operations/tests/unit/ui-template-generator.test.js`
- Purpose: Validates UI template generator snippet outputs are valid JSON, deterministic, and safe for after-< component insertion
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/usefulness-journey.test.js`
- Purpose: Tests journey-check evaluation logic against fixture pages.
- Template compliance: PASS
- Role tags: enforcement, fixture, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/usefulness-rubric.test.js`
- Purpose: Tests rubric-based scoring logic against fixture pages.
- Template compliance: PASS
- Role tags: fixture, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js`
- Purpose: Unit tests for the v2 folder governance cleanup matrix generator — verifies core classification, targeting, and age-bucket rules.
- Template compliance: FAIL (missing @owner)
- Role tags: generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/unit/v2-link-audit.test.js`
- Purpose: Unit tests for v2-link-audit.js — tests individual link checking rules
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:link-audit:unit (when: manual, npm-script)

### `operations/tests/unit/v2-wcag-audit.test.js`
- Purpose: Unit tests for v2-wcag-audit.js — tests individual WCAG rules
- Template compliance: FAIL (missing @owner)
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:wcag:unit (when: manual, npm-script)

### `operations/tests/unit/validate-codex-task-contract.test.js`
- Purpose: Tests validate-codex-task-contract.js — validates contract checking logic
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: operations/tests/package.json#scripts.test:codex-task-contract (when: manual, npm-script)

### `operations/tests/utils/file-walker.js`
- Purpose: File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators.
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by:
  - hook: .githooks/verify.sh#line 35 (when: manual)

### `operations/tests/utils/mdx-parser.js`
- Purpose: MDX parser utility — extracts frontmatter, components, content blocks from MDX files
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/utils/mintignore.js`
- Purpose: Mintignore utility — reads .mintignore patterns and filters file lists
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/utils/openapi-rolling-issue.js`
- Purpose: OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings
- Template compliance: PASS
- Role tags: audit, generator, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `operations/tests/utils/spell-checker.js`
- Purpose: Spell checker utility — checks text against custom dictionary with en-GB locale support
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `snippets/automations/youtube/filterVideos.js`
- Purpose: YouTube video filter — post-processes fetched YouTube data to filter/sort videos for display
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/config/v2-internal-report-pages.js`
- Purpose: Configuration data — list of internal report page paths for publish-v2-internal-reports.js
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/add-callouts.js`
- Purpose: qa:content-quality
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/debug-mint-dev.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/ensure-mint-watcher-patch.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/format-mdx.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.format-mdx (when: manual, npm-script)
  - package-script: tools/package.json#scripts.format-mdx:check (when: manual, npm-script)

### `tools/dev/generate-mint-dev-scope.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/install-authoring-tools-extension.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.vscode:authoring-tools:install (when: manual, npm-script)

### `tools/dev/lib/resolve-scoped-docs-config.js`
- Purpose: Scoped docs config resolver — resolves named scoped navigation configs and explicit docs config paths for mint-dev tooling
- Template compliance: FAIL (missing @owner)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/mint-custom-loader.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/mint-dev.sh`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/rename-vscode-codex-chat.js`
- Purpose: tooling:dev-tools
- Template compliance: FAIL (missing @category, @owner, @needs, @purpose-statement)
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:chat:list (when: manual, npm-script)
  - package-script: tools/package.json#scripts.codex:chat:rename (when: manual, npm-script)

### `tools/dev/test-add-callouts.js`
- Purpose: Test for add-callouts.js — validates callout insertion logic against fixtures
- Template compliance: PASS
- Role tags: enforcement, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/dev/test-seo-generator.js`
- Purpose: Test for seo-generator — validates SEO generation logic
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/ai-tools-registry.js`
- Purpose: Shared loader, validator, coverage checker, and report renderer for the AI-tools registry contract and generated inventory report.
- Template compliance: FAIL (missing @owner)
- Role tags: audit, enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/codex-skill-templates.js`
- Purpose: Shared helper for validating, selecting, and loading canonical Codex skill templates.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/component-governance-utils.js`
- Purpose: Shared parsing and validation utilities for component governance scripts.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-authoring-rules.js`
- Purpose: Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-index-utils.js`
- Purpose: Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-page-scope.js`
- Purpose: Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports.
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-publishability.js`
- Purpose: Shared path publishability rules for v2 docs content and tooling.
- Template compliance: FAIL (missing @owner)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/config-validator.js`
- Purpose: Validates docs-usefulness config structure and field completeness.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/journey-check.js`
- Purpose: Evaluates docs pages against user journey completeness criteria.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/llm-evaluator.js`
- Purpose: Wraps LLM API calls for rubric-based page quality evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/changelog.js`
- Purpose: LLM prompt template for changelog page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/concept.js`
- Purpose: LLM prompt template for concept page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/faq.js`
- Purpose: LLM prompt template for faq page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/glossary.js`
- Purpose: LLM prompt template for glossary page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/how_to.js`
- Purpose: LLM prompt template for how_to page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/index.js`
- Purpose: LLM prompt template for index page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/landing.js`
- Purpose: LLM prompt template for landing page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/overview.js`
- Purpose: LLM prompt template for overview page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/reference.js`
- Purpose: LLM prompt template for reference page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/troubleshooting.js`
- Purpose: LLM prompt template for troubleshooting page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/prompts/tutorial.js`
- Purpose: LLM prompt template for tutorial page-type usefulness evaluation.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/quality-gate.js`
- Purpose: Applies pass/fail thresholds to usefulness scores.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/rubric-loader.js`
- Purpose: Loads and parses rubric YAML/JSON for page-type scoring rules.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/rule-evaluators.js`
- Purpose: Evaluates individual rubric rules against page content.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/scoring.js`
- Purpose: Aggregates rule scores into a final usefulness score per page.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/frontmatter-taxonomy.js`
- Purpose: Shared frontmatter taxonomy utilities for routable docs pages.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/generated-artifacts.js`
- Purpose: Generated artifact governance helpers — load the manifest, validate enums, and match staged files to managed artifacts
- Template compliance: FAIL (missing @owner)
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/generated-file-banners.js`
- Purpose: Generated file banner template — provides standard banner text for auto-generated files
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/load-js-yaml.js`
- Purpose: YAML loader utility — resolves js-yaml from repo-local installs and falls back to a minimal parser for task-contract style files in bare worktrees
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/load-minimatch.js`
- Purpose: Glob matcher loader — resolves minimatch from repo-local installs and falls back to a simple glob matcher for bare worktrees
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/mdx-safe-markdown.js`
- Purpose: Shared MDX-safe markdown helpers that collect first-party markdown files, detect unsafe patterns, and apply deterministic repairs.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/precommit-staged-cache.js`
- Purpose: Shared pre-commit staged-cache helpers — fingerprint staged content plus hook inputs and persist reusable pass markers
- Template compliance: FAIL (missing @owner)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/script-governance-config.js`
- Purpose: Shared governance constants for script discovery, indexing, classification, and pipeline normalisation across the repo.
- Template compliance: FAIL (missing @owner)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/script-header-utils.js`
- Purpose: Shared helpers for extracting and reading top-of-file script governance headers without scanning into executable source.
- Template compliance: FAIL (missing @owner)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/authoring-tools/extension.js`
- Purpose: Utility script for extension.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/authoring-tools/lib/authoring-core.js`
- Purpose: Utility script for authoring core.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/components/extension.js`
- Purpose: Utility script for extension.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/extension.js`
- Purpose: Utility script for extension.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/lib/component-map.js`
- Purpose: Utility script for component map.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/lib/mdx-parser.js`
- Purpose: Utility script for mdx parser.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/lib/mintlify-components.js`
- Purpose: Utility script for mintlify components.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/lib/webview-template.js`
- Purpose: Utility script for webview template.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/media/markdown-it.min.js`
- Purpose: Utility script for markdown it min.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/media/mermaid.min.js`
- Purpose: Utility script for mermaid min.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/lpd-mdx-preview/media/preview.js`
- Purpose: Utility script for preview.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/vscode/markdown-list/extension.js`
- Purpose: Utility script for extension.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `workspace/scripts/repair-registry.py`
- Purpose: Utility script for repair registry.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

## Overlap Clusters

### Cluster 1 (exact)
- Scripts: `operations/scripts/x-archive/seo-generator-safe.js`, `operations/scripts/x-archive/update-all-og-images.js`, `operations/scripts/x-archive/update-og-image.js`
- Canonical candidate: `operations/scripts/x-archive/update-og-image.js`
- Shared role tags: deprecated, generator
- Recommendation: Consolidate to `operations/scripts/x-archive/update-og-image.js`; replace duplicates with wrappers or remove after migrating references.


## Consolidation Recommendations

- Consolidate to `operations/scripts/x-archive/update-og-image.js`; replace duplicates with wrappers or remove after migrating references.
