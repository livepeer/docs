# Script Catalog — Current State

> Generated 2026-03-19 after restructure. Reflects the `docs-v2-dev-scripts` worktree.
> 120 pipeline scripts + 4 git hooks + 12 dev tools + 2 config files = **138 total**

---

## audits/ (16 scripts)

### audits/content/quality/

| Script | Purpose |
|---|---|
| `audit-copy-patterns.js` | Aggregates copy pattern violations across v2 tree, emits diagnostic report |
| `audit-media-assets.js` | Audits repo media assets, references, ignore leakage, and asset branch inventory |
| `audit-v2-usefulness.js` | Scores v2 MDX pages on human/agent usefulness with source-weighted accuracy verification |
| `docs-quality-and-freshness-audit.js` | Checks for TODO/TBD/Coming Soon markers, thin pages, stale content |

### audits/content/veracity/

| Script | Purpose |
|---|---|
| `docs-fact-registry.js` | Validates repo-native research claim registries, provides normalised claim-family data |
| `docs-page-research.js` | Extracts factual claims from docs, checks evidence sources, detects contradictions |
| `docs-page-research-pr-report.js` | Runs fact-check research on changed docs pages, emits PR advisory artifact |
| `docs-research-adjudication.js` | Validates, records, and summarises measured review outcomes for research workflow |
| `docs-research-packet.js` | Derives nav/manifest scope, runs research stack tranche-by-tranche, writes packet reports |
| `orchestrator-guides-research-review.js` | Delegates to docs-research-packet with live Orchestrators Guides nav scope |

### audits/components/documentation/

| Script | Purpose |
|---|---|
| `audit-component-usage.js` | Scans pages for component usage patterns and reports statistics |

### audits/governance/scripts/

| Script | Purpose |
|---|---|
| `audit-script-categories.js` | Analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports |
| `script-footprint-and-usage-audit.js` | Analyses script file sizes, dependencies, and usage patterns |

### audits/governance/repo/

| Script | Purpose |
|---|---|
| `audit-tasks-folders.js` | Checks tasks/ structure, normalises report locations, applies safe moves |
| `repo-audit-orchestrator.js` | Dispatches all static analysis validators in sequence |
| `audit-python.py` | Python-based audit utility |

---

## generators/ (19 scripts)

### generators/content/catalogs/

| Script | Purpose |
|---|---|
| `generate-docs-index.js` | Produces docs-index.json from v2 frontmatter and docs.json (most-called script) |
| `generate-pages-index.js` | Generates section-style index.mdx files for v2 docs folders |

### generators/content/seo/

| Script | Purpose |
|---|---|
| `generate-ai-sitemap.js` | Produces AI-optimised sitemap files (dual-mode: --check / --write) |
| `generate-og-images.js` | Generates canonical site-level Open Graph image assets and manifest |
| `generate-seo.js` | Generates SEO metadata (title, description, keywords) for v2 pages |

### generators/content/reconciliation/

| Script | Purpose |
|---|---|
| `generate-content-gap-reconciliation.js` | Compares blueprint coverage against v2 MDX, writes reconciliation artefacts |

### generators/content/reference/

| Script | Purpose |
|---|---|
| `generate-api-docs.sh` | Generates API reference pages from OpenAPI specs |
| `generate-glossary.js` | Produces glossary data file from terminology sources |
| `terminology-search.js` | Searches glossary/terminology data for definitions |

### generators/components/documentation/

| Script | Purpose |
|---|---|
| `generate-component-docs.js` | Generates published component library MDX pages from registry |

### generators/components/library/

| Script | Purpose |
|---|---|
| `generate-component-registry.js` | Parses JSDoc from component exports, produces component-registry.json |
| `generate-component-snippets.py` | Generates VS Code component snippets from registry |
| `generate-ui-templates.js` | Generates UI template catalog, preview routes, and VS Code snippets |
| `scan-component-imports.js` | Scans MDX imports, produces component-usage-map.json |

### generators/governance/catalogs/

| Script | Purpose |
|---|---|
| `generate-ai-skills-indexes.js` | Generates ai-tools/ai-skills inventory.json and content-map.md |
| `generate-docs-guide-components-index.js` | Generates components-catalog.mdx from registry and usage map |
| `generate-docs-guide-indexes.js` | Generates docs-guide workflow/template catalogs |
| `generate-docs-guide-pages-index.js` | Generates docs-guide pages catalog from navigation structure |

### generators/governance/reports/

| Script | Purpose |
|---|---|
| `generate-component-governance-remediation-reports.js` | Generates component governance remediation reports with defensive-rendering guidance |
| `generate-v2-folder-governance-cleanup-matrix.js` | Inventories non-publishable v2 artefacts, emits cleanup recommendations |

### generators/governance/scaffold/

| Script | Purpose |
|---|---|
| `new-script.js` | Creates new script file with required docs header template |

### generators/ai/llm/

| Script | Purpose |
|---|---|
| `generate-llms-files.js` | Produces llms.txt and llms-full.txt for AI consumption (dual-mode) |

---

## validators/ (18 scripts)

### validators/content/copy/

| Script | Purpose |
|---|---|
| `lint-copy.js` | Enforces banned word and phrase rules on MDX content |
| `lint-patterns.js` | Enforces Tier 2 copy pattern rules on MDX content |

### validators/content/structure/

| Script | Purpose |
|---|---|
| `check-anchor-usage.js` | Validates same-page anchor links against heading IDs |
| `check-description-quality.js` | Validates frontmatter descriptions for SEO length and boilerplate |
| `check-docs-path-sync.js` | Detects staged page moves requiring docs.json rewrites |
| `check-double-headers.js` | Detects duplicate body H1 headings repeating frontmatter |
| `check-mdx-safe-markdown.js` | Validates MDX content for repo-wide MDX-safe syntax |
| `check-page-endings.js` | Validates v2 MDX pages end with approved navigational element |
| `enforce-generated-file-banners.js` | Checks/writes "do not edit" banners on generated files |
| `lint-structure.js` | Enforces structural rules on MDX content |
| `test-v2-pages.js` | Validates v2 pages via Puppeteer browser rendering |
| `verify-all-pages.js` | Loads routes in headless browser, fails on render/console/404 issues |

### validators/content/grammar/

| Script | Purpose |
|---|---|
| `check-grammar-en-gb.js` | Deterministic UK English grammar checker with optional autofix |
| `check-proper-nouns.js` | Detects/fixes incorrect proper noun capitalisation |

### validators/components/documentation/

| Script | Purpose |
|---|---|
| `check-component-docs.js` | Validates JSDoc coverage, prop documentation, governance metadata |

### validators/components/library/

| Script | Purpose |
|---|---|
| `check-component-css.js` | Validates component files against governance styling rules |
| `check-mdx-component-scope.js` | Validates MDX components don't depend on private helper bindings |
| `check-naming-conventions.js` | Validates component filenames and PascalCase exports |
| `component-layout-governance.js` | Checks v2 page layouts against approved component contracts |

### validators/governance/compliance/

| Script | Purpose |
|---|---|
| `check-agent-docs-freshness.js` | Validates agent governance docs exist and are within freshness threshold |
| `review-governance-repair-checklist.js` | Generates review checklist for governance repair proposals |
| `validate-ai-tools-registry.js` | Validates AI-tools registry coverage, lifecycle, and lane alignment |
| `validate-codex-task-contract.js` | Validates branch naming, task files, PR body for codex branches |
| `verify-pay-orc-gate-finalize.sh` | Checks payment/orchestrator documentation gate conditions |

### validators/governance/pr/

| Script | Purpose |
|---|---|
| `audit-script-inventory.js` | Deep inventory audit — traces triggers, outputs, downstream chains |
| `check-component-immutability.js` | Flags modifications to existing component files in PRs |
| `check-pr-template.js` | Enforces PR descriptions include required change/rationale sections |

---

## remediators/ (11 scripts)

### remediators/content/repair/

| Script | Purpose |
|---|---|
| `migrate-assets-to-branch.js` | Migrates flagged assets to docs-v2-assets branch, rewrites MDX references |
| `quarantine-manager.js` | Classifies files for quarantine or applies quarantine moves |
| `repair-mdx-safe-markdown.js` | Auto-repairs deterministic MDX-unsafe markdown patterns |
| `repair-spelling.js` | Auto-corrects spelling errors using shared cspell configuration |
| `sync-docs-paths.js` | Applies deterministic docs.json and governed reference rewrites for moved pages |

### remediators/content/style/

| Script | Purpose |
|---|---|
| `repair-ownerless-language.js` | Removes human-owner dependency from governed GitHub surfaces |
| `style-and-language-homogenizer-en-gb.js` | Fixes American English spellings and style violations |
| `wcag-repair-common.js` | WCAG repair shared logic used by audit fix mode |

### remediators/content/classification/

| Script | Purpose |
|---|---|
| `add-framework-headers.js` | Inserts/extends framework headers on repo scripts from classification data |
| `add-pagetype-mechanical.js` | Assigns pageType frontmatter to eligible v2 MDX pages |
| `assign-purpose-metadata.js` | Fills purpose/audience frontmatter for routable v2 pages |

### remediators/components/library/

| Script | Purpose |
|---|---|
| `repair-component-metadata.js` | Auto-repairs derived JSDoc metadata fields from repo state |

---

## dispatch/ (14 scripts)

### dispatch/ai/codex/

| Script | Purpose |
|---|---|
| `check-codex-pr-overlap.js` | Checks for conflicting codex PRs targeting same files/branches |
| `check-no-ai-stash.sh` | Blocks push if AI stash files are present in working tree |
| `codex-commit.js` | Audits codex branch state, generates compliant commit messages |
| `create-codex-pr.js` | Creates codex PR with correct branch naming, labels, body template |
| `lock-release.js` | Releases stale codex lock files |
| `task-cleanup.js` | Reports/prunes merged worktrees and stale local codex branches |
| `task-finalise.js` | Enforces task completion requirements before closing |
| `task-preflight.js` | Generates task setup files, validates preconditions |
| `validate-locks.js` | Checks for stale/conflicting lock files before push |

### dispatch/ai/agents/

| Script | Purpose |
|---|---|
| `cross-agent-packager.js` | Bundles audit reports and repo state into agent-consumable packages |
| `export-portable-skills.js` | Copies canonical template skills into cross-agent pack folders |
| `sync-codex-skills.js` | Syncs skill definitions between canonical templates and local Codex installs |

### dispatch/governance/pipelines/

| Script | Purpose |
|---|---|
| `governance-pipeline.js` | Chains audit→repair→verify→report into self-healing governance pipeline |
| `publish-v2-internal-reports.js` | Publishes v2 internal audit reports to configured output locations |

---

## automations/ (7 scripts + 12 lib + 6 tests)

### automations/content/data/fetching/

| Script | Purpose |
|---|---|
| `fetch-external-docs.sh` | Pulls doc fragments from external GitHub repos into snippets/data/ |
| `fetch-lpt-exchanges.sh` | Pulls exchange listing data for LPT token pages |
| `fetch-openapi-specs.sh` | Pulls latest OpenAPI specs from Livepeer services |

### automations/content/data/transforms/

| Script | Purpose |
|---|---|
| `convert-rss-to-mdx.js` | Imports RSS feed items and converts to MDX page format |

### automations/content/language-translation/

| Script | Purpose |
|---|---|
| `translate-docs.js` | Translates v2 MDX pages to target languages via OpenRouter API |
| `generate-localized-docs-json.js` | Produces localised docs.json variants from route-map |
| `validate-generated.js` | Checks generated translated MDX files and route-map outputs |
| `test-mintlify-version-language-toggle.js` | Validates Mintlify version supports language toggle feature |
| `lib/` | 12 shared modules (common, config, localiser, routes, frontmatter, mdx-parser, mdx-translate, path-utils, provenance, providers) |
| `test/` | 6 test files (cli-guardrails, docs-json-localizer, frontmatter, mdx-translate, provenance, provider-openrouter) |

---

## config/ (2 files)

| File | Purpose |
|---|---|
| `docs-path-sync.js` | Shared library — detects staged page moves, plans deterministic route rewrites |
| `og-image-policy.js` | Policy helper — resolves pages to canonical section/fallback social images |

---

## .githooks/ (4 scripts)

| Script | Purpose |
|---|---|
| `install.sh` | Installs git hooks via worktree-local core.hooksPath |
| `verify.sh` | Pre-commit sub-hook — verifies file-walker, runs structural checks on staged files |
| `server-manager.js` | Manages Mintlify dev server lifecycle for browser tests |
| `verify-browser.js` | Verifies browser availability for Puppeteer-based integration tests |

**pre-commit** (hard gates only, 448 lines):
1. Codex branch isolation
2. File deletion guard
3. .allowlist protection
4. docs.json redirect integrity + root structure
5. v1/ freeze

---

## tools/dev/ (12 scripts — out of scripts/ scope)

| Script | Purpose |
|---|---|
| `add-callouts.js` | Adds Note/Tip/Warning callout components to MDX files |
| `debug-mint-dev.js` | Diagnostic tool for troubleshooting mint dev server |
| `ensure-mint-watcher-patch.sh` | Patches Mintlify file watcher issues in dev mode |
| `format-mdx.js` | Applies repo-owned conservative MDX formatter |
| `generate-mint-dev-scope.js` | Creates scoped docs.json for partial mint dev preview |
| `install-authoring-tools-extension.js` | Installs Livepeer authoring extension into local editors |
| `mint-custom-loader.sh` | Launches lpd dev with alternate docs config |
| `mint-dev.sh` | Starts Mintlify dev server with correct configuration |
| `rename-vscode-codex-chat.js` | Updates VS Code Codex chat session titles |
| `test-add-callouts.js` | Tests for add-callouts.js |
| `test-seo-generator.js` | Tests for SEO generation logic |
| `lib/resolve-scoped-docs-config.js` | Resolves named scoped navigation configs |

---

## x-archive/ (8 dead scripts + READMEs/fixtures)

| Script | Reason archived |
|---|---|
| `seo-generator-safe.js` | Deprecated — use canonical workflow |
| `update-og-image.js` | Deprecated — use canonical workflow |
| `update-all-og-images.js` | Deprecated — use canonical workflow |
| `batch-update-og-image.sh` | Deprecated — use canonical workflow |
| `replace-og-image.py` | Deprecated — use canonical workflow |
| `codex-safe-merge-with-stash.js` | Compatibility shim — replaced by task-finalise |
| `.verify-large-change.sh` | No-op placeholder |
| `sync-legacy-root-v1.js` | Not needed |
| `pre-commit-v1` | Old 1,598-line pre-commit hook (replaced by hard-gates-only version) |
