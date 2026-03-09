# tools Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tools/scripts/add-framework-headers.js` | Insert or verify governance framework metadata headers from classification JSON. | `node tools/scripts/add-framework-headers.js --data script-classifications.json --dry-run` | docs |
| `tools/scripts/add-pagetype-mechanical.js` | Mechanically assign pageType frontmatter to eligible v2 MDX pages. | `node tools/scripts/add-pagetype-mechanical.js [--dry-run]` | docs |
| `tools/scripts/assign-purpose-metadata.js` | Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages | `node tools/scripts/assign-purpose-metadata.js [flags]` | docs |
| `tools/scripts/audit-component-usage.js` | Component usage auditor — scans pages for component usage patterns and reports statistics | `node tools/scripts/audit-component-usage.js [flags]` | docs |
| `tools/scripts/audit-media-assets.js` | Audit repo media assets, references, ignore leakage, and externalized asset branch inventory. | `node tools/scripts/audit-media-assets.js [--manifest &lt;path&gt;] [--summary &lt;path&gt;] [--assets-branch-ref &lt;ref&gt;] [--check-staged]` | docs |
| `tools/scripts/audit-scripts.js` | Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports | `node tools/scripts/audit-scripts.js [flags]` | docs |
| `tools/scripts/audit-tasks-folders.js` | Tasks folder auditor — checks tasks/ structure, normalises report locations, applies recommendations with conflict-safe moves | `node tools/scripts/audit-tasks-folders.js [flags]` | docs |
| `tools/scripts/audit-v2-usefulness.js` | Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification | `node tools/scripts/audit-v2-usefulness.js [flags]` | docs |
| `tools/scripts/check-codex-pr-overlap.js` | PR enforcer — checks for conflicting codex PRs targeting the same files/branches | `node tools/scripts/check-codex-pr-overlap.js [flags]` | docs |
| `tools/scripts/check-no-ai-stash.sh` | AI stash enforcer — blocks push if AI temporary/stash files are present in working tree | `bash tools/scripts/check-no-ai-stash.sh [flags]` | docs |
| `tools/scripts/cleanup-quarantine-manager.js` | Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply) | `node tools/scripts/cleanup-quarantine-manager.js [flags]` | docs |
| `tools/scripts/codex-commit.js` | Codex commit helper — audits codex branch state and generates compliant commit messages | `node tools/scripts/codex-commit.js [flags]` | docs |
| `tools/scripts/codex-safe-merge-with-stash.js` | Codex merge utility — safely merges branches with stash handling to avoid codex conflicts | `node tools/scripts/codex-safe-merge-with-stash.js [flags]` | docs |
| `tools/scripts/codex/lock-release.js` | Codex lock release utility — releases stale codex lock files | `node tools/scripts/codex/lock-release.js [flags]` | docs |
| `tools/scripts/codex/task-finalize.js` | Codex task finaliser — enforces task completion requirements before closing | `node tools/scripts/codex/task-finalize.js [flags]` | docs |
| `tools/scripts/codex/task-preflight.js` | Codex task preflight — generates task setup files and validates preconditions | `node tools/scripts/codex/task-preflight.js [flags]` | docs |
| `tools/scripts/codex/validate-locks.js` | Codex lock validator — checks for stale or conflicting lock files before push | `node tools/scripts/codex/validate-locks.js [flags]` | docs |
| `tools/scripts/component-layout-governance.js` | Component layout governance validator — checks v2 page layouts against approved component contracts | `node tools/scripts/component-layout-governance.js [flags]` | docs |
| `tools/scripts/convert-rss-to-mdx.js` | RSS-to-MDX converter — imports RSS feed items and converts to MDX page format | `node tools/scripts/convert-rss-to-mdx.js [flags]` | docs |
| `tools/scripts/create-codex-pr.js` | Codex PR creator — generates codex PR with correct branch naming, labels, and body template | `node tools/scripts/create-codex-pr.js [flags]` | docs |
| `tools/scripts/cross-agent-packager.js` | Cross-agent packager — bundles audit reports and repo state into agent-consumable packages | `node tools/scripts/cross-agent-packager.js [flags]` | docs |
| `tools/scripts/debug-mint-dev.js` | Mintlify dev debugger — diagnostic tool for troubleshooting mint dev server issues | `node tools/scripts/debug-mint-dev.js [flags]` | docs |
| `tools/scripts/dev/add-callouts.js` | Callout inserter — adds Note/Tip/Warning callout components to MDX files based on content patterns | `node tools/scripts/dev/add-callouts.js [flags]` | docs |
| `tools/scripts/dev/batch-update-og-image.sh` | Batch OG image updater — updates og:image meta tags across multiple pages | `bash tools/scripts/dev/batch-update-og-image.sh [flags]` | docs |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Mint watcher patcher — applies patch to fix Mintlify file watcher issues in dev mode | `bash tools/scripts/dev/ensure-mint-watcher-patch.sh [flags]` | docs |
| `tools/scripts/dev/generate-mint-dev-scope.js` | Mint dev scope generator — creates a scoped docs.json for running mint dev on a subset of pages | `node tools/scripts/dev/generate-mint-dev-scope.js [flags]` | docs |
| `tools/scripts/dev/replace-og-image.py` | OG image replacer — replaces og:image path in a single page frontmatter | `python3 tools/scripts/dev/replace-og-image.py [flags]` | docs |
| `tools/scripts/dev/seo-generator-safe.js` | Safe SEO generator — generates SEO metadata with dry-run and rollback safety | `node tools/scripts/dev/seo-generator-safe.js [flags]` | docs |
| `tools/scripts/dev/test-add-callouts.js` | Test for add-callouts.js — validates callout insertion logic against fixtures | `node tools/scripts/dev/test-add-callouts.js [flags]` | docs |
| `tools/scripts/dev/test-seo-generator.js` | Test for seo-generator — validates SEO generation logic | `node tools/scripts/dev/test-seo-generator.js [flags]` | docs |
| `tools/scripts/dev/update-all-og-images.js` | Bulk OG image updater — updates og:image across all v2 pages | `node tools/scripts/dev/update-all-og-images.js [flags]` | docs |
| `tools/scripts/dev/update-og-image.js` | Single OG image updater — updates og:image for one page | `node tools/scripts/dev/update-og-image.js [flags]` | docs |
| `tools/scripts/docs-quality-and-freshness-audit.js` | Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content | `node tools/scripts/docs-quality-and-freshness-audit.js [flags]` | docs |
| `tools/scripts/enforce-generated-file-banners.js` | Generated file banner enforcer — checks (--check) or writes (default) "do not edit" banners on generated files | `node tools/scripts/enforce-generated-file-banners.js [flags]` | docs |
| `tools/scripts/enforcers/pr/check-component-immutability.js` | Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label. | `node tools/scripts/enforcers/pr/check-component-immutability.js --base-ref main` | docs |
| `tools/scripts/generate-ai-sitemap.js` | AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator). | `node tools/scripts/generate-ai-sitemap.js [flags]` | docs |
| `tools/scripts/generate-content-gap-reconciliation.js` | Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts | `node tools/scripts/generate-content-gap-reconciliation.js [flags]` | docs |
| `tools/scripts/generate-docs-guide-components-index.js` | Generates the docs-guide component library index page | `node tools/scripts/generate-docs-guide-components-index.js [flags]` | docs |
| `tools/scripts/generate-docs-guide-indexes.js` | Generates docs-guide workflow/template indexes and optionally verifies freshness | `node tools/scripts/generate-docs-guide-indexes.js [flags]` | docs |
| `tools/scripts/generate-docs-guide-pages-index.js` | Generates the docs-guide pages index | `node tools/scripts/generate-docs-guide-pages-index.js [flags]` | docs |
| `tools/scripts/generate-docs-index.js` | Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo. | `node tools/scripts/generate-docs-index.js [flags]` | docs |
| `tools/scripts/generate-llms-files.js` | LLMs file generator — produces llms.txt and llms-full.txt for AI consumption. Dual-mode: --check / --write. | `node tools/scripts/generate-llms-files.js [flags]` | docs |
| `tools/scripts/generate-pages-index.js` | Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index | `node tools/scripts/generate-pages-index.js [flags]` | docs |
| `tools/scripts/i18n/generate-localized-docs-json.js` | Locale docs.json generator — produces localised docs.json variants from route-map and source docs.json | `node tools/scripts/i18n/generate-localized-docs-json.js [flags]` | docs |
| `tools/scripts/i18n/lib/common.js` | i18n shared utilities — common helper functions for translation pipeline | `node tools/scripts/i18n/lib/common.js [flags]` | docs |
| `tools/scripts/i18n/lib/config.js` | i18n configuration — language codes, locale paths, translation settings | `node tools/scripts/i18n/lib/config.js [flags]` | docs |
| `tools/scripts/i18n/lib/docs-json-localizer.js` | docs.json localiser engine — transforms docs.json navigation for locale variants | `node tools/scripts/i18n/lib/docs-json-localizer.js [flags]` | docs |
| `tools/scripts/i18n/lib/docs-routes.js` | docs route resolver — maps page paths to locale-aware routes | `node tools/scripts/i18n/lib/docs-routes.js [flags]` | docs |
| `tools/scripts/i18n/lib/frontmatter.js` | Frontmatter parser/writer — reads and writes MDX frontmatter for translation | `node tools/scripts/i18n/lib/frontmatter.js [flags]` | docs |
| `tools/scripts/i18n/lib/mdx-parser.js` | MDX parser for i18n — extracts translatable content blocks from MDX | `node tools/scripts/i18n/lib/mdx-parser.js [flags]` | docs |
| `tools/scripts/i18n/lib/mdx-translate.js` | MDX translation engine — applies translations to MDX content blocks | `node tools/scripts/i18n/lib/mdx-translate.js [flags]` | docs |
| `tools/scripts/i18n/lib/path-utils.js` | Path utilities for i18n — locale-aware path resolution and mapping | `node tools/scripts/i18n/lib/path-utils.js [flags]` | docs |
| `tools/scripts/i18n/lib/provenance.js` | Translation provenance tracker — records source, timestamp, and provider for each translated segment | `node tools/scripts/i18n/lib/provenance.js [flags]` | docs |
| `tools/scripts/i18n/lib/provider-mock.js` | Mock translation provider — returns placeholder translations for testing without API calls | `node tools/scripts/i18n/lib/provider-mock.js [flags]` | docs |
| `tools/scripts/i18n/lib/provider-openrouter.js` | OpenRouter translation provider — calls OpenRouter API for actual translations | `node tools/scripts/i18n/lib/provider-openrouter.js [flags]` | docs |
| `tools/scripts/i18n/lib/providers.js` | Provider registry — selects translation provider (OpenRouter or mock) based on configuration | `node tools/scripts/i18n/lib/providers.js [flags]` | docs |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Mintlify language toggle checker — validates Mintlify version supports language toggle feature | `node tools/scripts/i18n/test-mintlify-version-language-toggle.js [flags]` | docs |
| `tools/scripts/i18n/test/cli-guardrails.test.js` | Tests i18n CLI guardrails — validates argument validation and safety checks | `node tools/scripts/i18n/test/cli-guardrails.test.js [flags]` | docs |
| `tools/scripts/i18n/test/docs-json-localizer.test.js` | Tests docs-json-localizer — validates locale docs.json transformation logic | `node tools/scripts/i18n/test/docs-json-localizer.test.js [flags]` | docs |
| `tools/scripts/i18n/test/frontmatter.test.js` | Tests frontmatter parser — validates frontmatter read/write roundtrip | `node tools/scripts/i18n/test/frontmatter.test.js [flags]` | docs |
| `tools/scripts/i18n/test/mdx-translate.test.js` | Tests MDX translation — validates content block translation logic | `node tools/scripts/i18n/test/mdx-translate.test.js [flags]` | docs |
| `tools/scripts/i18n/test/provenance.test.js` | Tests provenance tracker — validates translation provenance recording | `node tools/scripts/i18n/test/provenance.test.js [flags]` | docs |
| `tools/scripts/i18n/test/provider-openrouter.test.js` | Tests OpenRouter provider — validates API call logic and response parsing | `node tools/scripts/i18n/test/provider-openrouter.test.js [flags]` | docs |
| `tools/scripts/i18n/translate-docs.js` | Translation generator — translates v2 MDX pages to target languages via OpenRouter API | `node tools/scripts/i18n/translate-docs.js [flags]` | docs |
| `tools/scripts/i18n/validate-generated.js` | Generated localisation validator — checks generated translated MDX files and route-map outputs for integrity | `node tools/scripts/i18n/validate-generated.js [flags]` | docs |
| `tools/scripts/mint-dev.sh` | Mintlify dev server launcher — starts mint dev with correct configuration | `bash tools/scripts/mint-dev.sh [flags]` | docs |
| `tools/scripts/new-script.js` | ' + params.summary, | `node tools/scripts/new-script.js [flags]` | docs |
| `tools/scripts/publish-v2-internal-reports.js` | Report publisher — publishes v2 internal audit reports to configured output locations | `node tools/scripts/publish-v2-internal-reports.js [flags]` | docs |
| `tools/scripts/remediators/assets/migrate-assets-to-branch.js` | Reads the media-audit manifest and migrates flagged assets to the | `node tools/scripts/remediators/assets/migrate-assets-to-branch.js \` | docs |
| `tools/scripts/remediators/content/repair-spelling.js` | Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only. | `node tools/scripts/remediators/content/repair-spelling.js --dry-run` | docs |
| `tools/scripts/repo-audit-orchestrator.js` | Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack. | `node tools/scripts/repo-audit-orchestrator.js [flags]` | docs |
| `tools/scripts/script-footprint-and-usage-audit.js` | Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo | `node tools/scripts/script-footprint-and-usage-audit.js [flags]` | docs |
| `tools/scripts/snippets/fetch-external-docs.sh` | External docs fetcher — pulls doc fragments from external GitHub repos into snippets/data/ for inclusion in builds | `bash tools/scripts/snippets/fetch-external-docs.sh [flags]` | docs |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | LPT exchange data fetcher — pulls exchange listing data for LPT token pages | `bash tools/scripts/snippets/fetch-lpt-exchanges.sh [flags]` | docs |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages | `bash tools/scripts/snippets/fetch-openapi-specs.sh [flags]` | docs |
| `tools/scripts/snippets/generate-api-docs.sh` | API docs generator — generates API reference pages from OpenAPI specs | `bash tools/scripts/snippets/generate-api-docs.sh [flags]` | docs |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Glossary generator — produces glossary data file from terminology sources | `node tools/scripts/snippets/generate-data/scripts/generate-glossary.js [flags]` | docs |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Terminology search — searches glossary/terminology data for definitions | `node tools/scripts/snippets/generate-data/scripts/terminology-search.js [flags]` | docs |
| `tools/scripts/snippets/generate-seo.js` | SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis | `node tools/scripts/snippets/generate-seo.js [flags]` | docs |
| `tools/scripts/snippets/test-scripts.sh` | Snippet test runner — runs basic validation on snippet scripts | `bash tools/scripts/snippets/test-scripts.sh [flags]` | docs |
| `tools/scripts/snippets/update-component-library.sh` | Component library updater — syncs component library documentation from source | `bash tools/scripts/snippets/update-component-library.sh [flags]` | docs |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | EN-GB style homogeniser — finds and fixes American English spellings, style guide violations, and formatting inconsistencies across v2 content | `node tools/scripts/style-and-language-homogenizer-en-gb.js [flags]` | docs |
| `tools/scripts/sync-codex-skills.js` | Codex skills sync — synchronises skill definition files between local and remote sources. Supports --check mode. | `node tools/scripts/sync-codex-skills.js [flags]` | docs |
| `tools/scripts/test-v2-pages.js` | V2 page tester — validates v2 pages via Puppeteer browser rendering | `node tools/scripts/test-v2-pages.js [flags]` | docs |
| `tools/scripts/validate-codex-task-contract.js` | Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches | `node tools/scripts/validate-codex-task-contract.js [flags]` | docs |
| `tools/scripts/validators/components/check-component-css.js` | Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles. | `node tools/scripts/validators/components/check-component-css.js [--path snippets/components/] [--fix]` | docs |
| `tools/scripts/validators/components/check-component-docs.js` | Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports. | `node tools/scripts/validators/components/check-component-docs.js [--path snippets/components] [--base-ref docs-v2]` | docs |
| `tools/scripts/validators/components/check-naming-conventions.js` | Validates active component filenames against strict camelCase file naming and PascalCase exports under snippets/components. | `node tools/scripts/validators/components/check-naming-conventions.js [--path snippets/components] [--files path[,path...]] [--mode migration\|strict-camel]` | docs |
| `tools/scripts/validators/content/check-description-quality.js` | Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse | `node tools/scripts/validators/content/check-description-quality.js [--path &lt;repo-path&gt;] [--strict]` | docs |
| `tools/scripts/validators/content/check-double-headers.js` | Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content. | `node tools/scripts/validators/content/check-double-headers.js [--file &lt;path&gt;] [--files &lt;a,b&gt;] [--fix]` | docs |
| `tools/scripts/validators/content/check-grammar-en-gb.js` | Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules. | `node tools/scripts/validators/content/check-grammar-en-gb.js [--scope full\|changed] [--file &lt;path[,path...]&gt;] [--fix] [--strict]` | docs |
| `tools/scripts/validators/content/check-proper-nouns.js` | Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens. | `node tools/scripts/validators/content/check-proper-nouns.js [--file &lt;path[,path...]&gt;] [--fix]` | docs |
| `tools/scripts/verify-pay-orc-gate-finalize.sh` | Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions | `bash tools/scripts/verify-pay-orc-gate-finalize.sh [flags]` | docs |
| `tools/scripts/verify/.verify-large-change.sh` | Large change verifier — blocks or warns when a commit touches an unusually large number of files | `bash tools/scripts/verify/.verify-large-change.sh [flags]` | docs |
| `tools/scripts/wcag-repair-common.js` | WCAG repair shared logic — common repair functions used by WCAG audit fix mode | `node tools/scripts/wcag-repair-common.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
