# tools Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `tools/scripts/automations/content/language-translation/lib/common.js` | i18n shared utilities — common helper functions for translation pipeline | `node tools/scripts/i18n/lib/common.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/config.js` | i18n configuration — language codes, locale paths, translation settings | `node tools/scripts/i18n/lib/config.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/docs-json-localizer.js` | docs.json localiser engine — transforms docs.json navigation for locale variants | `node tools/scripts/i18n/lib/docs-json-localizer.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/docs-routes.js` | docs route resolver — maps page paths to locale-aware routes | `node tools/scripts/i18n/lib/docs-routes.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/frontmatter.js` | Frontmatter parser/writer — reads and writes MDX frontmatter for translation | `node tools/scripts/i18n/lib/frontmatter.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/mdx-parser.js` | MDX parser for i18n — extracts translatable content blocks from MDX | `node tools/scripts/i18n/lib/mdx-parser.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/mdx-translate.js` | MDX translation engine — applies translations to MDX content blocks | `node tools/scripts/i18n/lib/mdx-translate.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/path-utils.js` | Path utilities for i18n — locale-aware path resolution and mapping | `node tools/scripts/i18n/lib/path-utils.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/provenance.js` | Translation provenance tracker — records source, timestamp, and provider for each translated segment | `node tools/scripts/i18n/lib/provenance.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/provider-mock.js` | Mock translation provider — returns placeholder translations for testing without API calls | `node tools/scripts/i18n/lib/provider-mock.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/provider-openrouter.js` | OpenRouter translation provider — calls OpenRouter API for actual translations | `node tools/scripts/i18n/lib/provider-openrouter.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/lib/providers.js` | Provider registry — selects translation provider (OpenRouter or mock) based on configuration | `node tools/scripts/i18n/lib/providers.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/cli-guardrails.test.js` | Tests i18n CLI guardrails — validates argument validation and safety checks | `node tools/scripts/i18n/test/cli-guardrails.test.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/docs-json-localizer.test.js` | Tests docs-json-localizer — validates locale docs.json transformation logic | `node tools/scripts/i18n/test/docs-json-localizer.test.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/frontmatter.test.js` | Tests frontmatter parser — validates frontmatter read/write roundtrip | `node tools/scripts/i18n/test/frontmatter.test.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/mdx-translate.test.js` | Tests MDX translation — validates content block translation logic | `node tools/scripts/i18n/test/mdx-translate.test.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/provenance.test.js` | Tests provenance tracker — validates translation provenance recording | `node tools/scripts/i18n/test/provenance.test.js [flags]` | docs |
| `tools/scripts/automations/content/language-translation/test/provider-openrouter.test.js` | Tests OpenRouter provider — validates API call logic and response parsing | `node tools/scripts/i18n/test/provider-openrouter.test.js [flags]` | docs |
| `tools/scripts/snippets/test-scripts.sh` | Snippet test runner — runs basic validation on snippet scripts | `bash tools/scripts/snippets/test-scripts.sh [flags]` | docs |
| `tools/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js` | Mintlify language toggle checker — validates Mintlify version supports language toggle feature | `node tools/scripts/i18n/test-mintlify-version-language-toggle.js [flags]` | docs |
| `tools/scripts/validators/content/structure/test-v2-pages.js` | V2 page tester — validates v2 pages via Puppeteer browser rendering | `node tools/scripts/test-v2-pages.js [flags]` | docs |
| `tools/scripts/x-archive/.verify-large-change.sh` | Large change verifier — blocks or warns when a commit touches an unusually large number of files | `bash tools/scripts/verify/.verify-large-change.sh [flags]` | docs |
| `tools/scripts/x-archive/batch-update-og-image.sh` | Deprecated wrapper for the legacy bulk OG image replacement helper. Use the canonical OG generator workflow instead. | `bash tools/scripts/dev/batch-update-og-image.sh` | docs |
| `tools/scripts/x-archive/codex-safe-merge-with-stash.js` | Deprecated compatibility shim — blocks stash-based Codex merge flow and directs users to task-finalize, lock-release, and task-cleanup | `node tools/scripts/codex-safe-merge-with-stash.js [flags]` | docs |
| `tools/scripts/x-archive/pre-commit-v1` | Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit | `bash .githooks/pre-commit [flags]` | docs |
| `tools/scripts/x-archive/replace-og-image.py` | Deprecated wrapper for the legacy OG image replacement helper. Use the canonical OG generator workflow instead. | `python3 tools/scripts/dev/replace-og-image.py` | docs |
| `tools/scripts/x-archive/seo-generator-safe.js` | Deprecated wrapper for the legacy safe SEO generator. Use the canonical OG generator workflow instead. | `node tools/scripts/dev/seo-generator-safe.js` | docs |
| `tools/scripts/x-archive/sync-legacy-root-v1.js` | Legacy root redirect synchronizer — bootstraps root-level legacy-to-v1 mappings, rewrites managed docs.json redirects, installs root catch-all fallbacks, and removes legacy generated fallback pages | `node tools/scripts/redirects/sync-legacy-root-v1.js [--bootstrap-manifest] [--write] [--repo-root <path>] [--manifest <path>] [--docs-json <path>]` | docs |
| `tools/scripts/x-archive/update-all-og-images.js` | Deprecated wrapper for legacy bulk OG image replacement. Use the canonical OG generator workflow instead. | `node tools/scripts/dev/update-all-og-images.js` | docs |
| `tools/scripts/x-archive/update-og-image.js` | Deprecated wrapper for legacy OG image replacement. Use the canonical OG generator workflow instead. | `node tools/scripts/dev/update-og-image.js` | docs |
{/* SCRIPT-INDEX:END */}
