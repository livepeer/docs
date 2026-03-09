# tools Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tools/scripts/add-framework-headers.js` | Insert or verify governance framework metadata headers from classification JSON. | `*   node tools/scripts/add-framework-headers.js --data script-classifications.json --dry-run` | docs |
| `tools/scripts/add-pagetype-mechanical.js` | Mechanically assign pageType frontmatter to eligible v2 MDX pages. | `*   node tools/scripts/add-pagetype-mechanical.js [--dry-run]` | docs |
| `tools/scripts/apply-content-gap-reconciliation.js` | Apply content-gap reconciliation decisions by archiving selected files, syncing mapping state, and generating follow-up reports. | `*   node tools/scripts/apply-content-gap-reconciliation.js` | docs |
| `tools/scripts/assign-purpose-metadata.js` | Assign purpose and audience frontmatter metadata for docs.json EN-routable v2 pages using deterministic rules with optional LLM classification for unclassified pages. | `*   node tools/scripts/assign-purpose-metadata.js --scope pilot --dry-run` | docs |
| `tools/scripts/audit-all-pages-simple.js` | Utility script for tasks/scripts/audit-all-pages-simple.js. | `*   node tasks/scripts/audit-all-pages-simple.js` | docs |
| `tools/scripts/audit-all-pages.js` | Utility script for tasks/scripts/audit-all-pages.js. | `*   node tasks/scripts/audit-all-pages.js` | docs |
| `tools/scripts/audit-all-v2-pages.js` | Utility script for tools/scripts/audit-all-v2-pages.js. | `*   node tools/scripts/audit-all-v2-pages.js` | docs |
| `tools/scripts/audit-component-usage.js` | Utility script for tools/scripts/audit-component-usage.js. | `*   node tools/scripts/audit-component-usage.js` | docs |
| `tools/scripts/audit-scripts.js` | Audit full-repo executable scripts, categorize usage/overlap, and overwrite SCRIPT_AUDIT reports. | `*   node tools/scripts/audit-scripts.js` | docs |
| `tools/scripts/audit-tasks-folders.js` | Audit tasks folders, optionally normalize report locations, and optionally apply audit recommendations with conflict-safe moves. | `*   node tools/scripts/audit-tasks-folders.js` | docs |
| `tools/scripts/audit-v1-to-v2-mapping.js` | Build a complete v1->v2 mapping audit (English IA canonical), including seed revalidation and adjudication queue. | `*   node tools/scripts/audit-v1-to-v2-mapping.js` | docs |
| `tools/scripts/audit-v2-usefulness.js` | Audit v2 MDX pages (excluding x-* directories) and emit page-level usefulness matrix rows with source-weighted 2026 accuracy verification fields. | `*   node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered` | docs |
| `tools/scripts/check-codex-pr-overlap.js` | Fail codex PR checks when changed files overlap another open codex PR without explicit handoff label. | `*   node tools/scripts/check-codex-pr-overlap.js --base-ref docs-v2` | docs |
| `tools/scripts/check-component-errors.js` | Utility script for tools/scripts/check-component-errors.js. | `*   node tools/scripts/check-component-errors.js` | docs |
| `tools/scripts/check-no-ai-stash.sh` | Block commits when AI-tagged stash entries are present; enforce branch plus WIP checkpoint isolation. | `#   bash tools/scripts/check-no-ai-stash.sh` | docs |
| `tools/scripts/cleanup-quarantine-manager.js` | Classify cleanup candidates and optionally quarantine files with a reversible manifest. | `*   node tools/scripts/cleanup-quarantine-manager.js` | docs |
| `tools/scripts/codex-commit.js` | Create git commits with explicit audited human override controls for --no-verify usage. | `*   node tools/scripts/codex-commit.js --message "Update hooks"` | docs |
| `tools/scripts/codex-safe-merge-with-stash.js` | Safely execute an explicit merge request by stashing local changes, merging a target ref, and restoring the stash. | `*   node tools/scripts/codex-safe-merge-with-stash.js --target docs-v2` | docs |
| `tools/scripts/codex/lock-release.js` | Codex lock release utility — releases stale codex lock files | `node tools/scripts/codex/lock-release.js [flags]` | docs |
| `tools/scripts/codex/task-finalize.js` | Codex task finaliser — enforces task completion requirements before closing | `node tools/scripts/codex/task-finalize.js [flags]` | docs |
| `tools/scripts/codex/task-preflight.js` | Codex task preflight — generates task setup files and validates preconditions | `node tools/scripts/codex/task-preflight.js [flags]` | docs |
| `tools/scripts/codex/validate-locks.js` | Codex lock validator — checks for stale or conflicting lock files before push | `node tools/scripts/codex/validate-locks.js [flags]` | docs |
| `tools/scripts/component-layout-governance.js` | Validate v2 English docs against component-layout contracts by page type. | `*   node tools/scripts/component-layout-governance.js --scope full` | docs |
| `tools/scripts/convert-rss-to-mdx.js` | Convert an RSS feed XML file into a structured MDX document. | `*   node tools/scripts/convert-rss-to-mdx.js --input v2/internal/assets/transcripts/ycomb.rss --output v2/internal/assets/transcripts/ycomb.mdx` | docs |
| `tools/scripts/create-codex-pr.js` | Generate a codex PR body from task contract metadata and optionally open a prefilled GitHub pull request. | `*   node tools/scripts/create-codex-pr.js --create` | docs |
| `tools/scripts/cross-agent-packager.js` | Generate consistent audit skill packs for Codex, Cursor, Claude Code, and Windsurf from one catalog. | `*   node tools/scripts/cross-agent-packager.js --agent-pack all` | docs |
| `tools/scripts/debug-mint-dev.js` | Utility script for tools/scripts/debug-mint-dev.js. | `*   node tools/scripts/debug-mint-dev.js` | docs |
| `tools/scripts/dev/add-callouts.js` | Utility script for tools/scripts/dev/add-callouts.js. | `*   node tools/scripts/dev/add-callouts.js` | docs |
| `tools/scripts/dev/batch-update-og-image.sh` | Utility script for tools/scripts/dev/batch-update-og-image.sh. | `#   bash tools/scripts/dev/batch-update-og-image.sh` | docs |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Ensure Mint local-preview watcher disables glob expansion in repo paths. | `#   bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check` | docs |
| `tools/scripts/dev/generate-mint-dev-scope.js` | Build deterministic Mint dev scoped profiles (docs.json + .mintignore) for large navigation trees. | `*   node tools/scripts/dev/generate-mint-dev-scope.js --versions v2 --languages en --tabs Developers` | docs |
| `tools/scripts/dev/replace-og-image.py` | Utility script for tools/scripts/dev/replace-og-image.py. | `#   python3 tools/scripts/dev/replace-og-image.py` | docs |
| `tools/scripts/dev/seo-generator-safe.js` | Utility script for tools/scripts/dev/seo-generator-safe.js. | `*   node tools/scripts/dev/seo-generator-safe.js` | docs |
| `tools/scripts/dev/test-add-callouts.js` | Utility script for tools/scripts/dev/test-add-callouts.js. | `*   node tools/scripts/dev/test-add-callouts.js` | docs |
| `tools/scripts/dev/test-seo-generator.js` | Utility script for tools/scripts/dev/test-seo-generator.js. | `*   node tools/scripts/dev/test-seo-generator.js` | docs |
| `tools/scripts/dev/update-all-og-images.js` | Utility script for tools/scripts/dev/update-all-og-images.js. | `*   node tools/scripts/dev/update-all-og-images.js` | docs |
| `tools/scripts/dev/update-og-image.js` | Utility script for tools/scripts/dev/update-og-image.js. | `*   node tools/scripts/dev/update-og-image.js` | docs |
| `tools/scripts/docs-quality-and-freshness-audit.js` | Audit v2 English docs for freshness and quality markers (TODO/TBD/Coming Soon, placeholders, and thin content). | `*   node tools/scripts/docs-quality-and-freshness-audit.js --scope full` | docs |
| `tools/scripts/enforce-generated-file-banners.js` | Enforce standardized hidden/visible generated banners and frontmatter across generated MDX outputs. | `*   node tools/scripts/enforce-generated-file-banners.js --check` | docs |
| `tools/scripts/enforcers/pr/check-component-immutability.js` | Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label. | `node tools/scripts/enforcers/pr/check-component-immutability.js --base-ref main` | docs |
| `tools/scripts/final-verification.js` | Utility script for tools/scripts/final-verification.js. | `*   node tools/scripts/final-verification.js` | docs |
| `tools/scripts/find-correct-url.js` | Utility script for tools/scripts/find-correct-url.js. | `*   node tools/scripts/find-correct-url.js` | docs |
| `tools/scripts/generate-ai-sitemap.js` | Generate an AI-focused sitemap from v2 docs navigation. | `*   node tools/scripts/generate-ai-sitemap.js --write` | docs |
| `tools/scripts/generate-component-docs.js` | Generates published component library MDX pages from the registry. | `node tools/scripts/generate-component-docs.js [--template-only] [--category <name>]` | docs |
| `tools/scripts/generate-component-governance-remediation-reports.js` | Generate Phase 2a remediation reports from the approved component-governance audit and live repo state. | `*   node tools/scripts/generate-component-governance-remediation-reports.js [flags]` | docs |
| `tools/scripts/generate-component-registry.js` | Parses JSDoc from all component exports and produces component-registry.json. | `node tools/scripts/generate-component-registry.js [--validate-only]` | docs |
| `tools/scripts/generate-content-gap-reconciliation.js` | Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage. | `*   node tools/scripts/generate-content-gap-reconciliation.js` | docs |
| `tools/scripts/generate-docs-guide-components-index.js` | Generates docs-guide and published component overview indexes from the governed component registry. | `node tools/scripts/generate-docs-guide-components-index.js [--write\|--check]` | docs |
| `tools/scripts/generate-docs-guide-indexes.js` | Generate docs-guide workflow/template indexes and optionally verify they are up to date. | `*   node tools/scripts/generate-docs-guide-indexes.js --write` | docs |
| `tools/scripts/generate-docs-guide-pages-index.js` | Generate docs-guide/indexes/pages-index.mdx from v2/index.mdx entries filtered to docs.json navigation pages. | `*   node tools/scripts/generate-docs-guide-pages-index.js --write` | docs |
| `tools/scripts/generate-docs-index.js` | Generate docs-index.json and optionally backfill v2 frontmatter metadata. | `*   node tools/scripts/generate-docs-index.js --write` | docs |
| `tools/scripts/generate-llms-files.js` | Generate llms.txt and llms-full.txt from v2 docs navigation. | `*   node tools/scripts/generate-llms-files.js --write` | docs |
| `tools/scripts/generate-pages-index.js` | Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index. | `*   node tools/scripts/generate-pages-index.js --write` | docs |
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
| `tools/scripts/i18n/validate-generated.js` | Validate generated localized MDX files parse cleanly and exist for successful route-map entries. | `*   node tools/scripts/i18n/validate-generated.js --languages es,fr,zh-CN --route-map /tmp/route-map.json --report-json /tmp/validate-report.json` | docs |
| `tools/scripts/inspect-page.js` | Utility script for tools/scripts/inspect-page.js. | `*   node tools/scripts/inspect-page.js` | docs |
| `tools/scripts/inspect-video-page.js` | Utility script for tools/scripts/inspect-video-page.js. | `*   node tools/scripts/inspect-video-page.js` | docs |
| `tools/scripts/mint-dev.sh` | Utility script for tools/scripts/mint-dev.sh. | `#   bash tools/scripts/mint-dev.sh` | docs |
| `tools/scripts/new-script.js` | Create a new script file prefilled with the required docs header template. | `*   node tools/scripts/new-script.js --path tests/integration/my-script.js` | docs |
| `tools/scripts/orchestrators/repair-governance.js` | Chains audit, safe repair, verification, and reporting into a single self-healing governance pipeline. | `node tools/scripts/orchestrators/repair-governance.js [--dry-run] [--auto-commit] [--report-only] [--strict]` | docs |
| `tools/scripts/publish-v2-internal-reports.js` | Duplicate approved markdown reports into v2/internal/reports pages with metadata and update docs.json. | `*   node tools/scripts/publish-v2-internal-reports.js --check` | docs |
| `tools/scripts/remediators/content/repair-spelling.js` | Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only. | `node tools/scripts/remediators/content/repair-spelling.js --dry-run` | docs |
| `tools/scripts/repo-audit-orchestrator.js` | Run the docs infrastructure audit pipeline and emit a unified prioritized scorecard. | `*   node tools/scripts/repo-audit-orchestrator.js --mode static --scope full` | docs |
| `tools/scripts/scan-component-imports.js` | Scans MDX imports to produce component-usage-map.json and detect @usedIn drift. | `node tools/scripts/scan-component-imports.js [--verify]` | docs |
| `tools/scripts/script-footprint-and-usage-audit.js` | Audit script sprawl, duplicate fixtures, backup artifacts, and report-size hotspots. | `*   node tools/scripts/script-footprint-and-usage-audit.js --scope full` | docs |
| `tools/scripts/snippets/fetch-external-docs.sh` | Utility script for tools/scripts/snippets/fetch-external-docs.sh. | `#   bash tools/scripts/snippets/fetch-external-docs.sh` | docs |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for tools/scripts/snippets/fetch-lpt-exchanges.sh. | `#   bash tools/scripts/snippets/fetch-lpt-exchanges.sh` | docs |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Utility script for tools/scripts/snippets/fetch-openapi-specs.sh. | `#   bash tools/scripts/snippets/fetch-openapi-specs.sh` | docs |
| `tools/scripts/snippets/generate-api-docs.sh` | Utility script for tools/scripts/snippets/generate-api-docs.sh. | `#   bash tools/scripts/snippets/generate-api-docs.sh` | docs |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for tools/scripts/snippets/generate-data/scripts/generate-glossary.js. | `*   node tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | docs |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for tools/scripts/snippets/generate-data/scripts/terminology-search.js. | `*   node tools/scripts/snippets/generate-data/scripts/terminology-search.js` | docs |
| `tools/scripts/snippets/generate-seo.js` | Utility script for tools/scripts/snippets/generate-seo.js. | `*   node tools/scripts/snippets/generate-seo.js` | docs |
| `tools/scripts/snippets/test-scripts.sh` | Utility script for tools/scripts/snippets/test-scripts.sh. | `#   bash tools/scripts/snippets/test-scripts.sh` | docs |
| `tools/scripts/snippets/update-component-library.sh` | Utility script for tools/scripts/snippets/update-component-library.sh. | `#   bash tools/scripts/snippets/update-component-library.sh` | docs |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | Enforce EN-GB style and terminology profile for English v2 docs in phase 1. | `*   node tools/scripts/style-and-language-homogenizer-en-gb.js --scope full` | docs |
| `tools/scripts/sync-codex-skills.js` | Sync canonical skill templates into local Codex skills using safe upsert and deterministic openai.yaml generation. | `*   node tools/scripts/sync-codex-skills.js` | docs |
| `tools/scripts/test-all-pages-browser.js` | Utility script for tools/scripts/test-all-pages-browser.js. | `*   node tools/scripts/test-all-pages-browser.js` | docs |
| `tools/scripts/test-all-pages-comprehensive.js` | Utility script for tools/scripts/test-all-pages-comprehensive.js. | `*   node tools/scripts/test-all-pages-comprehensive.js` | docs |
| `tools/scripts/test-v2-pages.js` | Utility script for tools/scripts/test-v2-pages.js. | `*   node tools/scripts/test-v2-pages.js` | docs |
| `tools/scripts/test-youtube-pages.js` | Utility script for tools/scripts/test-youtube-pages.js. | `*   node tools/scripts/test-youtube-pages.js` | docs |
| `tools/scripts/validate-codex-task-contract.js` | Validate codex branch task contract schema, branch binding, changed-file scope, PR body sections, and optional linked-issue readiness policy. | `*   node tools/scripts/validate-codex-task-contract.js` | docs |
| `tools/scripts/validators/components/check-component-css.js` | Validates component files against component governance styling rules. | `node tools/scripts/validators/components/check-component-css.js [--path snippets/components] [--staged] [--fix] [--help]` | docs |
| `tools/scripts/validators/components/check-component-docs.js` | Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata. | `node tools/scripts/validators/components/check-component-docs.js [--path snippets/components] [--base-ref docs-v2] [--staged] [--strict-governance] [--help]` | docs |
| `tools/scripts/validators/components/check-naming-conventions.js` | Validates component filename kebab-case and exported PascalCase naming under snippets/components. | `node tools/scripts/validators/components/check-naming-conventions.js [--path snippets/components] [--files path[,path...]]` | docs |
| `tools/scripts/validators/content/check-alt-text-quality.js` | Flags weak alt text in English v2 docs by detecting generic placeholders and single-word descriptions. | `node tools/scripts/validators/content/check-alt-text-quality.js [--path <repo-path>] [--strict]` | docs |
| `tools/scripts/validators/content/check-description-quality.js` | Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse | `node tools/scripts/validators/content/check-description-quality.js [--path <repo-path>] [--strict]` | docs |
| `tools/scripts/validators/content/check-double-headers.js` | Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content. | `node tools/scripts/validators/content/check-double-headers.js [--file <path>] [--files <a,b>] [--fix]` | docs |
| `tools/scripts/validators/content/check-grammar-en-gb.js` | Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules. | `node tools/scripts/validators/content/check-grammar-en-gb.js [--scope full\|changed] [--file <path[,path...]>] [--fix] [--strict]` | docs |
| `tools/scripts/validators/content/check-proper-nouns.js` | Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens. | `node tools/scripts/validators/content/check-proper-nouns.js [--file <path[,path...]>] [--fix]` | docs |
| `tools/scripts/validators/governance/audit-script-inventory.js` | Deep inventory audit of every script in the repo. Traces triggers, outputs, downstream chains, and governance compliance. Produces reports grouped by trigger category. | `node tools/scripts/validators/governance/audit-script-inventory.js [--json] [--md] [--output <dir>] [--verbose]` | docs |
| `tools/scripts/validators/governance/review-governance-repair-checklist.js` | Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied. | `node tools/scripts/validators/governance/review-governance-repair-checklist.js [--output <dir>] [--json] [--md]` | docs |
| `tools/scripts/validators/structure/check-github-labels.js` | Audits livepeer/docs GitHub labels against the SE-2-07 target catalog and optionally generates an admin-only gh remediation script | `node tools/scripts/validators/structure/check-github-labels.js [--json \| --generate-script \| --help]` | docs |
| `tools/scripts/validators/structure/check-page-archetype.js` | Validates English v2 docs headings against required section archetypes by pageType | `node tools/scripts/validators/structure/check-page-archetype.js [--path <repo-path>] [--strict]` | docs |
| `tools/scripts/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | `*   node tools/scripts/verify-all-pages.js` | docs |
| `tools/scripts/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | `*   node tools/scripts/verify-pages.js` | docs |
| `tools/scripts/verify-pay-orc-gate-finalize.sh` | Enforce the payments/orchestrators insertion deliverables and migration paths before commit. | `#   bash tools/scripts/verify-pay-orc-gate-finalize.sh` | docs |
| `tools/scripts/verify/.verify-large-change.sh` | Large change verifier — blocks or warns when a commit touches an unusually large number of files | `bash tools/scripts/verify/.verify-large-change.sh [flags]` | docs |
| `tools/scripts/wcag-repair-common.js` | Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports. | `*   node tools/scripts/wcag-repair-common.js --full` | docs |
{/* SCRIPT-INDEX:END */}
