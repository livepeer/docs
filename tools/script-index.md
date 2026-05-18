# tools Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `operations/scripts/integrators/content/language-translation/lib/common.js` | i18n shared utilities — common helper functions for translation pipeline | `node operations/scripts/i18n/lib/common.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/config.js` | i18n configuration — language codes, locale paths, translation settings | `node operations/scripts/i18n/lib/config.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/docs-json-localizer.js` | docs.json localiser engine — transforms docs.json navigation for locale variants | `node operations/scripts/i18n/lib/docs-json-localizer.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/docs-routes.js` | docs route resolver — maps page paths to locale-aware routes | `node operations/scripts/i18n/lib/docs-routes.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/frontmatter.js` | Frontmatter parser/writer — reads and writes MDX frontmatter for translation | `node operations/scripts/i18n/lib/frontmatter.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/mdx-parser.js` | MDX parser for i18n — extracts translatable content blocks from MDX | `node operations/scripts/i18n/lib/mdx-parser.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/mdx-translate.js` | MDX translation engine — applies translations to MDX content blocks | `node operations/scripts/i18n/lib/mdx-translate.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/path-utils.js` | Path utilities for i18n — locale-aware path resolution and mapping | `node operations/scripts/i18n/lib/path-utils.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/provenance.js` | Translation provenance tracker — records source, timestamp, and provider for each translated segment | `node operations/scripts/i18n/lib/provenance.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/provider-mock.js` | Mock translation provider — returns placeholder translations for testing without API calls | `node operations/scripts/i18n/lib/provider-mock.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/provider-openrouter.js` | OpenRouter translation provider — calls OpenRouter API for actual translations | `node operations/scripts/i18n/lib/provider-openrouter.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/lib/providers.js` | Provider registry — selects translation provider (OpenRouter or mock) based on configuration | `node operations/scripts/i18n/lib/providers.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/cli-guardrails.test.js` | Tests i18n CLI guardrails — validates argument validation and safety checks | `node operations/scripts/integrators/content/language-translation/test/cli-guardrails.test.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/docs-json-localizer.test.js` | Tests docs-json-localizer — validates locale docs.json transformation logic | `node operations/scripts/integrators/content/language-translation/test/docs-json-localizer.test.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/frontmatter.test.js` | Tests frontmatter parser — validates frontmatter read/write roundtrip | `node operations/scripts/integrators/content/language-translation/test/frontmatter.test.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/mdx-translate.test.js` | Tests MDX translation — validates content block translation logic | `node operations/scripts/integrators/content/language-translation/test/mdx-translate.test.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/provenance.test.js` | Tests provenance tracker — validates translation provenance recording | `node operations/scripts/integrators/content/language-translation/test/provenance.test.js [flags]` | docs |
| `operations/scripts/integrators/content/language-translation/test/provider-openrouter.test.js` | Tests OpenRouter provider — validates API call logic and response parsing | `node operations/scripts/integrators/content/language-translation/test/provider-openrouter.test.js [flags]` | docs |
| `operations/scripts/snippets/test-scripts.sh` | Snippet test runner — runs basic validation on snippet scripts | `bash operations/scripts/snippets/test-scripts.sh [flags]` | docs |
| `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js` | Mintlify language toggle checker — validates Mintlify version supports language toggle feature | `node operations/scripts/i18n/test-mintlify-version-language-toggle.js [flags]` | docs |
| `operations/scripts/validators/content/structure/test-v2-pages.js` | V2 page tester — validates v2 pages via Puppeteer browser rendering | `node operations/scripts/test-v2-pages.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
