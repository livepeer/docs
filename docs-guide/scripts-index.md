---
title: 'Scripts Index'
sidebarTitle: 'Scripts Index'
description: 'This page provides an aggregate catalog inventory of repository scripts generated from group script indexes.'
keywords:
  ['livepeer', 'scripts index', 'aggregate inventory', 'repository', 'scripts']
---

<Note>
**Generation Script**: This file is generated from script(s): `tests/unit/script-docs.test.js`. <br/>
**Purpose**: Enforce script header schema, keep group script indexes in sync, and build aggregate script index. <br/>
**Run when**: Scripts are added, removed, renamed, or script metadata changes in scoped roots. <br/>
**Important**: Do not manually edit this file; run `node tests/unit/script-docs.test.js --write --rebuild-indexes`. <br/>
</Note>

## .githooks

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `.githooks/install.sh` | Utility script for .githooks/install.sh. | `bash .githooks/install.sh` | docs |
| `.githooks/pre-commit` | Pre-commit hook for repository validation | `./.githooks/pre-commit (or invoked automatically by git)` | docs |
| `.githooks/pre-commit-no-deletions` | Utility script for .githooks/pre-commit-no-deletions. | `node .githooks/pre-commit-no-deletions` | docs |
| `.githooks/server-manager.js` | Utility script for .githooks/server-manager.js. | `node .githooks/server-manager.js` | docs |
| `.githooks/verify-browser.js` | Utility script for .githooks/verify-browser.js. | `node .githooks/verify-browser.js` | docs |
| `.githooks/verify.sh` | Utility script for .githooks/verify.sh. | `bash .githooks/verify.sh` | docs |

## .github/scripts

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `.github/scripts/embed-table.js` | Reserved CI utility script placeholder for markdown table embedding tasks. | `node .github/scripts/embed-table.js` | docs |
| `.github/scripts/fetch-forum-data.js` | Utility script for .github/scripts/fetch-forum-data.js. | `node .github/scripts/fetch-forum-data.js` | docs |
| `.github/scripts/fetch-ghost-blog-data.js` | Utility script for .github/scripts/fetch-ghost-blog-data.js. | `node .github/scripts/fetch-ghost-blog-data.js` | docs |
| `.github/scripts/fetch-youtube-data.js` | Utility script for .github/scripts/fetch-youtube-data.js. | `node .github/scripts/fetch-youtube-data.js` | docs |
| `.github/scripts/gen-table.js` | Reserved CI utility script placeholder for generated table output. | `node .github/scripts/gen-table.js` | docs |
| `.github/scripts/gen-textareas.js` | Reserved CI utility script placeholder for textarea generation tasks. | `node .github/scripts/gen-textareas.js` | docs |
| `.github/scripts/project-showcase-sync.js` | Utility script for .github/scripts/project-showcase-sync.js. | `node .github/scripts/project-showcase-sync.js` | docs |

## tests

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tests/integration/browser.test.js` | Utility script for tests/integration/browser.test.js. | `node tests/integration/browser.test.js` | docs |
| `tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | `node tests/integration/domain-pages-audit.js --version both` | docs |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation. | `node tests/integration/v2-link-audit.js --full --write-links --strict` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | `node tests/integration/v2-link-audit.selftest.js` | docs |
| `tests/integration/v2-wcag-audit.js` | Audit v2 docs.json navigation pages for accessibility (WCAG 2.2 AA) with deterministic reports and conservative source autofixes. | `node tests/integration/v2-wcag-audit.js --full` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Script-level self-tests for the v2 WCAG audit (local HTTP + Puppeteer axe run, and temp-file fix/stage behavior without Mintlify). | `node tests/integration/v2-wcag-audit.selftest.js` | docs |
| `tests/run-all.js` | Utility script for tests/run-all.js. | `node tests/run-all.js` | docs |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI. | `node tests/run-pr-checks.js --base-ref main` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validate docs-guide source-of-truth coverage, README pointers, and generated index freshness. | `node tests/unit/docs-guide-sot.test.js` | docs |
| `tests/unit/docs-navigation.test.js` | Validate docs.json page-entry syntax, report missing routes, suggest remaps, and optionally apply approved remaps. | `./lpd tests unit docs-navigation.test` | docs |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Validate source-weighted 2026 accuracy verification rules (GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse). | `node tests/unit/docs-usefulness-accuracy-verifier.test.js` | docs |
| `tests/unit/links-imports.test.js` | Utility script for tests/unit/links-imports.test.js. | `node tests/unit/links-imports.test.js` | docs |
| `tests/unit/mdx-guards.test.js` | Enforce MDX guardrails for globals imports, math delimiters, and markdown table line breaks. | `node tests/unit/mdx-guards.test.js` | docs |
| `tests/unit/mdx.test.js` | Utility script for tests/unit/mdx.test.js. | `node tests/unit/mdx.test.js` | docs |
| `tests/unit/quality.test.js` | Utility script for tests/unit/quality.test.js. | `node tests/unit/quality.test.js` | docs |
| `tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | `node tests/unit/script-docs.test.js --staged --write --stage --autofill` | docs |
| `tests/unit/spelling.test.js` | Utility script for tests/unit/spelling.test.js. | `node tests/unit/spelling.test.js` | docs |
| `tests/unit/style-guide.test.js` | Utility script for tests/unit/style-guide.test.js. | `node tests/unit/style-guide.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | `node tests/unit/v2-link-audit.test.js` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2 WCAG audit helper logic (args, thresholds, route mapping, report sorting, and conservative autofixes). | `node tests/unit/v2-wcag-audit.test.js` | docs |
| `tests/utils/file-walker.js` | Utility script for tests/utils/file-walker.js. | `node tests/utils/file-walker.js` | docs |
| `tests/utils/mdx-parser.js` | Utility script for tests/utils/mdx-parser.js. | `node tests/utils/mdx-parser.js` | docs |
| `tests/utils/spell-checker.js` | Utility script for tests/utils/spell-checker.js. | `node tests/utils/spell-checker.js` | docs |

## tools/scripts

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tools/scripts/audit-all-pages-simple.js` | Utility script for tasks/scripts/audit-all-pages-simple.js. | `node tasks/scripts/audit-all-pages-simple.js` | docs |
| `tools/scripts/audit-all-pages.js` | Utility script for tasks/scripts/audit-all-pages.js. | `node tasks/scripts/audit-all-pages.js` | docs |
| `tools/scripts/audit-all-v2-pages.js` | Utility script for tools/scripts/audit-all-v2-pages.js. | `node tools/scripts/audit-all-v2-pages.js` | docs |
| `tools/scripts/audit-component-usage.js` | Utility script for tools/scripts/audit-component-usage.js. | `node tools/scripts/audit-component-usage.js` | docs |
| `tools/scripts/audit-scripts.js` | Audit full-repo executable scripts, categorize usage/overlap, and overwrite SCRIPT_AUDIT reports. | `node tools/scripts/audit-scripts.js` | docs |
| `tools/scripts/audit-tasks-folders.js` | Audit tasks folders, optionally normalize report locations, and optionally apply audit recommendations with conflict-safe moves. | `node tools/scripts/audit-tasks-folders.js` | docs |
| `tools/scripts/audit-v2-usefulness.js` | Audit v2 MDX pages (excluding x-* directories) and emit page-level usefulness matrix rows with source-weighted 2026 accuracy verification fields. | `node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered` | docs |
| `tools/scripts/check-component-errors.js` | Utility script for tools/scripts/check-component-errors.js. | `node tools/scripts/check-component-errors.js` | docs |
| `tools/scripts/convert-rss-to-mdx.js` | Convert an RSS feed XML file into a structured MDX document. | `node tools/scripts/convert-rss-to-mdx.js --input v2/internal/assets/transcripts/ycomb.rss --output v2/internal/assets/transcripts/ycomb.mdx` | docs |
| `tools/scripts/debug-mint-dev.js` | Utility script for tools/scripts/debug-mint-dev.js. | `node tools/scripts/debug-mint-dev.js` | docs |
| `tools/scripts/deprecated/project-management-output-script.js` | Deprecated legacy project-management output script retained as a reference stub. | `node tools/scripts/deprecated/project-management-output-script.js` | docs |
| `tools/scripts/dev/add-callouts.js` | Utility script for tools/scripts/dev/add-callouts.js. | `node tools/scripts/dev/add-callouts.js` | docs |
| `tools/scripts/dev/batch-update-og-image.sh` | Utility script for tools/scripts/dev/batch-update-og-image.sh. | `bash tools/scripts/dev/batch-update-og-image.sh` | docs |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Ensure Mint local-preview watcher disables glob expansion in repo paths. | `bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check` | docs |
| `tools/scripts/dev/replace-og-image.py` | Utility script for tools/scripts/dev/replace-og-image.py. | `python3 tools/scripts/dev/replace-og-image.py` | docs |
| `tools/scripts/dev/seo-generator-safe.js` | Utility script for tools/scripts/dev/seo-generator-safe.js. | `node tools/scripts/dev/seo-generator-safe.js` | docs |
| `tools/scripts/dev/test-add-callouts.js` | Utility script for tools/scripts/dev/test-add-callouts.js. | `node tools/scripts/dev/test-add-callouts.js` | docs |
| `tools/scripts/dev/test-seo-generator.js` | Utility script for tools/scripts/dev/test-seo-generator.js. | `node tools/scripts/dev/test-seo-generator.js` | docs |
| `tools/scripts/dev/update-all-og-images.js` | Utility script for tools/scripts/dev/update-all-og-images.js. | `node tools/scripts/dev/update-all-og-images.js` | docs |
| `tools/scripts/dev/update-og-image.js` | Utility script for tools/scripts/dev/update-og-image.js. | `node tools/scripts/dev/update-og-image.js` | docs |
| `tools/scripts/download-linkedin-video.sh` | Utility script for tools/scripts/download-linkedin-video.sh. | `bash tools/scripts/download-linkedin-video.sh` | docs |
| `tools/scripts/download-linkedin-with-cookies.sh` | Utility script for tools/scripts/download-linkedin-with-cookies.sh. | `bash tools/scripts/download-linkedin-with-cookies.sh` | docs |
| `tools/scripts/final-verification.js` | Utility script for tools/scripts/final-verification.js. | `node tools/scripts/final-verification.js` | docs |
| `tools/scripts/find-correct-url.js` | Utility script for tools/scripts/find-correct-url.js. | `node tools/scripts/find-correct-url.js` | docs |
| `tools/scripts/generate-ai-sitemap.js` | Generate an AI-focused sitemap from v2 docs navigation. | `node tools/scripts/generate-ai-sitemap.js --write` | docs |
| `tools/scripts/generate-docs-guide-components-index.js` | Generate component inventory indexes from snippets/components exports and optionally verify freshness. | `node tools/scripts/generate-docs-guide-components-index.js --write` | docs |
| `tools/scripts/generate-docs-guide-indexes.js` | Generate docs-guide workflow/template indexes and optionally verify they are up to date. | `node tools/scripts/generate-docs-guide-indexes.js --write` | docs |
| `tools/scripts/generate-docs-guide-pages-index.js` | Generate docs-guide/pages-index.mdx from v2/index.mdx entries filtered to docs.json navigation pages. | `node tools/scripts/generate-docs-guide-pages-index.js --write` | docs |
| `tools/scripts/generate-docs-index.js` | Generate docs-index.json and optionally backfill v2 frontmatter metadata. | `node tools/scripts/generate-docs-index.js --write` | docs |
| `tools/scripts/generate-llms-files.js` | Generate llms.txt and llms-full.txt from v2 docs navigation. | `node tools/scripts/generate-llms-files.js --write` | docs |
| `tools/scripts/generate-pages-index.js` | Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index. | `node tools/scripts/generate-pages-index.js --write` | docs |
| `tools/scripts/i18n/lib/common.js` | Utility script for tools/scripts/i18n/lib/common.js. | `node tools/scripts/i18n/lib/common.js` | docs |
| `tools/scripts/i18n/lib/config.js` | Utility script for tools/scripts/i18n/lib/config.js. | `node tools/scripts/i18n/lib/config.js` | docs |
| `tools/scripts/i18n/lib/docs-json-localizer.js` | Utility script for tools/scripts/i18n/lib/docs-json-localizer.js. | `node tools/scripts/i18n/lib/docs-json-localizer.js` | docs |
| `tools/scripts/i18n/lib/docs-routes.js` | Utility script for tools/scripts/i18n/lib/docs-routes.js. | `node tools/scripts/i18n/lib/docs-routes.js` | docs |
| `tools/scripts/i18n/lib/frontmatter.js` | Utility script for tools/scripts/i18n/lib/frontmatter.js. | `node tools/scripts/i18n/lib/frontmatter.js` | docs |
| `tools/scripts/i18n/lib/mdx-parser.js` | Utility script for tools/scripts/i18n/lib/mdx-parser.js. | `node tools/scripts/i18n/lib/mdx-parser.js` | docs |
| `tools/scripts/i18n/lib/mdx-translate.js` | Utility script for tools/scripts/i18n/lib/mdx-translate.js. | `node tools/scripts/i18n/lib/mdx-translate.js` | docs |
| `tools/scripts/i18n/lib/path-utils.js` | Utility script for tools/scripts/i18n/lib/path-utils.js. | `node tools/scripts/i18n/lib/path-utils.js` | docs |
| `tools/scripts/i18n/lib/provenance.js` | Utility script for tools/scripts/i18n/lib/provenance.js. | `node tools/scripts/i18n/lib/provenance.js` | docs |
| `tools/scripts/i18n/lib/provider-mock.js` | Utility script for tools/scripts/i18n/lib/provider-mock.js. | `node tools/scripts/i18n/lib/provider-mock.js` | docs |
| `tools/scripts/i18n/lib/provider-openrouter.js` | Utility script for tools/scripts/i18n/lib/provider-openrouter.js. | `node tools/scripts/i18n/lib/provider-openrouter.js` | docs |
| `tools/scripts/i18n/lib/providers.js` | Utility script for tools/scripts/i18n/lib/providers.js. | `node tools/scripts/i18n/lib/providers.js` | docs |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Validate Mintlify version/language toggle behavior on localized v2 routes. | `node tools/scripts/i18n/test-mintlify-version-language-toggle.js --base-url http://localhost:3012` | docs |
| `tools/scripts/i18n/test/cli-guardrails.test.js` | Utility script for tools/scripts/i18n/test/cli-guardrails.test.js. | `node tools/scripts/i18n/test/cli-guardrails.test.js` | docs |
| `tools/scripts/i18n/test/docs-json-localizer.test.js` | Utility script for tools/scripts/i18n/test/docs-json-localizer.test.js. | `node tools/scripts/i18n/test/docs-json-localizer.test.js` | docs |
| `tools/scripts/i18n/test/frontmatter.test.js` | Utility script for tools/scripts/i18n/test/frontmatter.test.js. | `node tools/scripts/i18n/test/frontmatter.test.js` | docs |
| `tools/scripts/i18n/test/mdx-translate.test.js` | Utility script for tools/scripts/i18n/test/mdx-translate.test.js. | `node tools/scripts/i18n/test/mdx-translate.test.js` | docs |
| `tools/scripts/i18n/test/provenance.test.js` | Utility script for tools/scripts/i18n/test/provenance.test.js. | `node tools/scripts/i18n/test/provenance.test.js` | docs |
| `tools/scripts/i18n/test/provider-openrouter.test.js` | Utility script for tools/scripts/i18n/test/provider-openrouter.test.js. | `node tools/scripts/i18n/test/provider-openrouter.test.js` | docs |
| `tools/scripts/inspect-page.js` | Utility script for tools/scripts/inspect-page.js. | `node tools/scripts/inspect-page.js` | docs |
| `tools/scripts/inspect-video-page.js` | Utility script for tools/scripts/inspect-video-page.js. | `node tools/scripts/inspect-video-page.js` | docs |
| `tools/scripts/mint-dev.sh` | Utility script for tools/scripts/mint-dev.sh. | `bash tools/scripts/mint-dev.sh` | docs |
| `tools/scripts/new-script.js` | Create a new script file prefilled with the required docs header template. | `node tools/scripts/new-script.js --path tests/integration/my-script.js` | docs |
| `tools/scripts/publish-v2-internal-reports.js` | Duplicate approved markdown reports into v2/internal/reports pages with metadata and update docs.json. | `node tools/scripts/publish-v2-internal-reports.js --check` | docs |
| `tools/scripts/snippets/fetch-external-docs.sh` | Utility script for tools/scripts/snippets/fetch-external-docs.sh. | `bash tools/scripts/snippets/fetch-external-docs.sh` | docs |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for tools/scripts/snippets/fetch-lpt-exchanges.sh. | `bash tools/scripts/snippets/fetch-lpt-exchanges.sh` | docs |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Utility script for tools/scripts/snippets/fetch-openapi-specs.sh. | `bash tools/scripts/snippets/fetch-openapi-specs.sh` | docs |
| `tools/scripts/snippets/generate-api-docs.sh` | Utility script for tools/scripts/snippets/generate-api-docs.sh. | `bash tools/scripts/snippets/generate-api-docs.sh` | docs |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for tools/scripts/snippets/generate-data/scripts/generate-glossary.js. | `node tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | docs |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for tools/scripts/snippets/generate-data/scripts/terminology-search.js. | `node tools/scripts/snippets/generate-data/scripts/terminology-search.js` | docs |
| `tools/scripts/snippets/generate-seo.js` | Utility script for tools/scripts/snippets/generate-seo.js. | `node tools/scripts/snippets/generate-seo.js` | docs |
| `tools/scripts/snippets/test-scripts.sh` | Utility script for tools/scripts/snippets/test-scripts.sh. | `bash tools/scripts/snippets/test-scripts.sh` | docs |
| `tools/scripts/snippets/update-component-library.sh` | Utility script for tools/scripts/snippets/update-component-library.sh. | `bash tools/scripts/snippets/update-component-library.sh` | docs |
| `tools/scripts/test-all-pages-browser.js` | Utility script for tools/scripts/test-all-pages-browser.js. | `node tools/scripts/test-all-pages-browser.js` | docs |
| `tools/scripts/test-all-pages-comprehensive.js` | Utility script for tools/scripts/test-all-pages-comprehensive.js. | `node tools/scripts/test-all-pages-comprehensive.js` | docs |
| `tools/scripts/test-v2-pages.js` | Utility script for tools/scripts/test-v2-pages.js. | `node tools/scripts/test-v2-pages.js` | docs |
| `tools/scripts/test-youtube-pages.js` | Utility script for tools/scripts/test-youtube-pages.js. | `node tools/scripts/test-youtube-pages.js` | docs |
| `tools/scripts/test/allowed-script.js` | Utility script for tools/scripts/test/allowed-script.js. | `node tools/scripts/test/allowed-script.js` | docs |
| `tools/scripts/test/allowed-test.js` | Utility script for tools/scripts/test/allowed-test.js. | `node tools/scripts/test/allowed-test.js` | docs |
| `tools/scripts/test/allowed.js` | Utility script for tools/scripts/test/allowed.js. | `node tools/scripts/test/allowed.js` | docs |
| `tools/scripts/test/check-component-errors.js` | Utility script for tools/scripts/test/check-component-errors.js. | `node tools/scripts/test/check-component-errors.js` | docs |
| `tools/scripts/test/final-verification.js` | Utility script for tools/scripts/test/final-verification.js. | `node tools/scripts/test/final-verification.js` | docs |
| `tools/scripts/test/find-correct-url.js` | Utility script for tools/scripts/test/find-correct-url.js. | `node tools/scripts/test/find-correct-url.js` | docs |
| `tools/scripts/test/inspect-page.js` | Utility script for tools/scripts/test/inspect-page.js. | `node tools/scripts/test/inspect-page.js` | docs |
| `tools/scripts/test/inspect-video-page.js` | Utility script for tools/scripts/test/inspect-video-page.js. | `node tools/scripts/test/inspect-video-page.js` | docs |
| `tools/scripts/test/test-youtube-pages.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | `node tools/scripts/test/test-youtube-pages.js` | docs |
| `tools/scripts/test/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | `node tools/scripts/verify-all-pages.js` | docs |
| `tools/scripts/test/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | `node tools/scripts/verify-pages.js` | docs |
| `tools/scripts/transcribe-audio-to-mdx.js` | Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page. | `OPENROUTER_API_KEY=... node tools/scripts/transcribe-audio-to-mdx.js --audio-url "<url>" --title "<episode title>" --show "<show name>" --published-at YYYY-MM-DD` | docs |
| `tools/scripts/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | `node tools/scripts/verify-all-pages.js` | docs |
| `tools/scripts/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | `node tools/scripts/verify-pages.js` | docs |
| `tools/scripts/verify/.verify-large-change.sh` | Reserved verifier hook placeholder for large-change checks. | `bash tools/scripts/verify/.verify-large-change.sh` | docs |
| `tools/scripts/wcag-repair-common.js` | Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports. | `node tools/scripts/wcag-repair-common.js --full` | docs |

## tasks/scripts

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tasks/scripts/audit-minimal.js` | Utility script for tasks/scripts/audit-minimal.js. | `node tasks/scripts/audit-minimal.js` | docs |
| `tasks/scripts/audit-python.py` | Utility script for tasks/scripts/audit-python.py. | `python3 tasks/scripts/audit-python.py` | docs |
| `tasks/scripts/run-audit-now.js` | Utility script for tasks/scripts/run-audit-now.js. | `node tasks/scripts/run-audit-now.js` | docs |
| `tasks/scripts/test-audit.js` | Utility script for tasks/scripts/test-audit.js. | `node tasks/scripts/test-audit.js` | docs |
