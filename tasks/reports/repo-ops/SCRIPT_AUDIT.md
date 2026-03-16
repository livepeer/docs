# SCRIPT_AUDIT

Generated: 2026-03-09T07:12:34.430Z

## Rules Source
- `tests/unit/script-docs.test.js`
- `tests/README.md`

## Summary
- Total scripts: 172
- Template compliant: 172
- Template non-compliant: 0
- Exact overlap clusters: 0
- Near overlap clusters: 0

## Category Counts

| Category | Count |
|---|---:|
| `audit` | 27 |
| `ci` | 24 |
| `enforcement` | 80 |
| `fixture` | 7 |
| `generator` | 36 |
| `helper` | 36 |
| `hook` | 11 |
| `manual` | 160 |
| `npm-script` | 43 |
| `pr` | 10 |
| `pre-commit` | 5 |
| `push` | 8 |
| `runner` | 4 |
| `scheduled` | 9 |
| `sync` | 19 |
| `test` | 44 |
| `workflow-dispatch` | 18 |

## Script Inventory

| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |
|---|---|---|---|---|---|
| `.githooks/install.sh` | Installs git hooks by setting core.hooksPath to .githooks/ | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit` | Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit | PASS | enforcement, generator, hook | pre-commit | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit-no-deletions` | Variant pre-commit hook that blocks file deletions (safety net for content preservation) | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-push` | Pre-push hook — blocks push if AI stash files present, codex locks stale, or task contract invalid | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/server-manager.js` | Manages Mintlify dev server lifecycle for browser tests (start/stop/health-check) | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify-browser.js` | Verifies browser availability for Puppeteer-based integration tests | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify.sh` | Pre-commit sub-hook — verifies file-walker is available and runs structural checks on staged files | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.github/scripts/fetch-forum-data.js` | Fetches latest topics and posts from Livepeer Forum API, writes to snippets/automations/forum/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-ghost-blog-data.js` | Fetches blog posts from Ghost CMS API, writes to snippets/automations/blog/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-youtube-data.js` | Fetches video data from YouTube Data API, writes to snippets/automations/youtube/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos [scheduled,workflow-dispatch] |
| `.github/scripts/project-showcase-sync.js` | Fetches project showcase data from external source, writes to snippets/automations/showcase/ | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync [scheduled,workflow-dispatch] |
| `lpd` | Developer CLI orchestrator — unified command surface for setup, dev server, testing, hooks, and script execution across all repo domains | PASS | runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `snippets/automations/youtube/filterVideos.js` | YouTube video filter — post-processes fetched YouTube data to filter/sort videos for display | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/audit-python.py` | Python audit utility — runs Python-based audit checks (alternative to Node auditors) | PASS | audit, enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/integration/browser.test.js` | Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions | PASS | ci, enforcement, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser:all [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) [npm-script,pr,push] |
| `tests/integration/domain-pages-audit.js` | Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:domain [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:both [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v1 [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v2 [manual,npm-script] |
| `tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes. | PASS | audit, ci, enforcement, test | manual, npm-script, pr, push, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:openapi:audit [manual,npm-script] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) [pr,push,scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes. | PASS | audit, ci, enforcement, test | manual, npm-script, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:link-audit [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:external [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:staged [manual,npm-script] \| workflow:.github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) [scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit.js — validates audit logic against known fixtures | PASS | audit, enforcement, fixture, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:selftest [manual,npm-script] |
| `tests/integration/v2-wcag-audit.js` | WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair. | PASS | audit, enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:nofix [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:staged [manual,npm-script] |
| `tests/integration/v2-wcag-audit.selftest.js` | Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures | PASS | audit, enforcement, fixture, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:selftest [manual,npm-script] |
| `tests/run-all.js` | Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test. | PASS | enforcement, hook, runner, test | manual, npm-script, pre-commit | hook:.githooks/pre-commit#line 855 [pre-commit] \| package-script:tests/package.json#scripts.test [manual,npm-script] \| package-script:tools/package.json#scripts.test [manual,npm-script] |
| `tests/run-pr-checks.js` | PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff. | PASS | ci, enforcement, runner, sync, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:pr [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks [npm-script,pr,push] |
| `tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — validates safe merge logic with stash handling | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file synchronisation between sources | PASS | enforcement, sync, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-skills-sync [manual,npm-script] |
| `tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | PASS | enforcement, generator, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-pr-create [manual,npm-script] |
| `tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | PASS | ci, enforcement, generator, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:docs-guide [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Docs-Guide SoT Check (Advisory) [npm-script,pr,push] |
| `tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps | PASS | audit, ci, enforcement, test | manual, npm-script, workflow-dispatch | package-script:tests/package.json#scripts.test:docs-nav [manual,npm-script] \| package-script:tests/package.json#scripts.test:docs-nav:write [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation [workflow-dispatch] |
| `tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:links [manual,npm-script] \| package-script:tools/package.json#scripts.test:links [manual,npm-script] |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx:guards [manual,npm-script] |
| `tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx [manual,npm-script] \| package-script:tools/package.json#scripts.test:mdx [manual,npm-script] |
| `tests/unit/migrate-assets-to-branch.test.js` | Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | PASS | audit, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:openapi:issue [manual,npm-script] |
| `tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:quality [manual,npm-script] \| package-script:tools/package.json#scripts.test:quality [manual,npm-script] |
| `tests/unit/repair-spelling.test.js` | Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | PASS | audit, enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:repo-audit [manual,npm-script] |
| `tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script index | PASS | enforcement, generator, sync, test | manual, npm-script | package-script:tests/package.json#scripts.test:scripts [manual,npm-script] |
| `tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:spell [manual,npm-script] \| package-script:tools/package.json#scripts.test:spell [manual,npm-script] |
| `tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:style [manual,npm-script] \| package-script:tools/package.json#scripts.test:style [manual,npm-script] |
| `tests/unit/usefulness-journey.test.js` | Tests journey-check evaluation logic against fixture pages. | PASS | enforcement, fixture, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/usefulness-rubric.test.js` | Tests rubric-based scoring logic against fixture pages. | PASS | fixture, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | PASS | audit, enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:unit [manual,npm-script] |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:unit [manual,npm-script] |
| `tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-task-contract [manual,npm-script] |
| `tests/utils/file-walker.js` | File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators. | PASS | enforcement, hook, test | pre-commit | hook:.githooks/pre-commit#line 60 [pre-commit] \| hook:.githooks/verify.sh#line 33 [manual] |
| `tests/utils/mdx-parser.js` | MDX parser utility — extracts frontmatter, components, content blocks from MDX files | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/mintignore.js` | Mintignore utility — reads .mintignore patterns and filters file lists | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/openapi-rolling-issue.js` | OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings | PASS | audit, generator, sync, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/spell-checker.js` | Spell checker utility — checks text against custom dictionary with en-GB locale support | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/config/v2-internal-report-pages.js` | Configuration data — list of internal report page paths for publish-v2-internal-reports.js | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-index-utils.js` | Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
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
| `tools/lib/generated-file-banners.js` | Generated file banner template — provides standard banner text for auto-generated files | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/add-framework-headers.js` | Insert or verify governance framework metadata headers from classification JSON. | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/add-pagetype-mechanical.js` | Mechanically assigns pageType frontmatter to eligible v2 MDX pages. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/assign-purpose-metadata.js` | Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-component-usage.js` | Component usage auditor — scans pages for component usage patterns and reports statistics | PASS | audit, ci | scheduled, workflow-dispatch | workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component usage audit [scheduled,workflow-dispatch] |
| `tools/scripts/audit-media-assets.js` | Audits repo media assets, references, ignore leakage, and externalized asset branch inventory. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-scripts.js` | Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports | PASS | audit, generator | manual, npm-script | package-script:tools/package.json#scripts.audit:scripts [manual,npm-script] |
| `tools/scripts/audit-tasks-folders.js` | Tasks folder auditor — checks tasks/ structure, normalises report locations, applies recommendations with conflict-safe moves | PASS | audit, enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-v2-usefulness.js` | Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/check-codex-pr-overlap.js` | PR enforcer — checks for conflicting codex PRs targeting the same files/branches | PASS | ci, enforcement | pr | workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap [pr] |
| `tools/scripts/check-no-ai-stash.sh` | AI stash enforcer — blocks push if AI temporary/stash files are present in working tree | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/cleanup-quarantine-manager.js` | Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply) | PASS | helper | manual, npm-script | package-script:tools/package.json#scripts.cleanup:classify [manual,npm-script] \| package-script:tools/package.json#scripts.cleanup:quarantine [manual,npm-script] |
| `tools/scripts/codex-commit.js` | Codex commit helper — audits codex branch state and generates compliant commit messages | PASS | audit, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex-safe-merge-with-stash.js` | Codex merge utility — safely merges branches with stash handling to avoid codex conflicts | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/lock-release.js` | Codex lock release utility — releases stale codex lock files | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-finalize.js` | Codex task finaliser — enforces task completion requirements before closing | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-preflight.js` | Codex task preflight — generates task setup files and validates preconditions | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/validate-locks.js` | Codex lock validator — checks for stale or conflicting lock files before push | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/component-layout-governance.js` | Component layout governance validator — checks v2 page layouts against approved component contracts | PASS | ci, enforcement | manual, npm-script, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.audit:component-layout [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance [scheduled,workflow-dispatch] |
| `tools/scripts/convert-rss-to-mdx.js` | RSS-to-MDX converter — imports RSS feed items and converts to MDX page format | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/create-codex-pr.js` | Codex PR creator — generates codex PR with correct branch naming, labels, and body template | PASS | generator | manual, npm-script | package-script:tools/package.json#scripts.codex:pr [manual,npm-script] |
| `tools/scripts/cross-agent-packager.js` | Cross-agent packager — bundles audit reports and repo state into agent-consumable packages | PASS | audit, generator | manual, npm-script | package-script:tools/package.json#scripts.pack:agents [manual,npm-script] |
| `tools/scripts/debug-mint-dev.js` | Mintlify dev debugger — diagnostic tool for troubleshooting mint dev server issues | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/add-callouts.js` | Callout inserter — adds Note/Tip/Warning callout components to MDX files based on content patterns | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/batch-update-og-image.sh` | Batch OG image updater — updates og:image meta tags across multiple pages | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Mint watcher patcher — applies patch to fix Mintlify file watcher issues in dev mode | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/generate-mint-dev-scope.js` | Mint dev scope generator — creates a scoped docs.json for running mint dev on a subset of pages | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/replace-og-image.py` | OG image replacer — replaces og:image path in a single page frontmatter | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/seo-generator-safe.js` | Safe SEO generator — generates SEO metadata with dry-run and rollback safety | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-add-callouts.js` | Test for add-callouts.js — validates callout insertion logic against fixtures | PASS | enforcement, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-seo-generator.js` | Test for seo-generator — validates SEO generation logic | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-all-og-images.js` | Bulk OG image updater — updates og:image across all v2 pages | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-og-image.js` | Single OG image updater — updates og:image for one page | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/docs-quality-and-freshness-audit.js` | Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content | PASS | audit, ci, enforcement | manual, npm-script, scheduled, workflow-dispatch | package-script:tools/package.json#scripts.audit:docs-quality [manual,npm-script] \| workflow:.github/workflows/content-health.yml#Content Health Check > content-health > Content quality audit [scheduled,workflow-dispatch] |
| `tools/scripts/enforce-generated-file-banners.js` | Generated file banner enforcer — checks (--check) or writes (default) "do not edit" banners on generated files | PASS | enforcement, generator | manual, npm-script | package-script:tests/package.json#scripts.test:generated-banners [manual,npm-script] |
| `tools/scripts/enforcers/pr/check-component-immutability.js` | Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/enforcers/pr/check-pr-template.js` | Enforces that PR descriptions include required change and rationale sections before merge | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-ai-sitemap.js` | AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator). | PASS | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap [push,workflow-dispatch] \| workflow:.github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output [pr,push] |
| `tools/scripts/generate-content-gap-reconciliation.js` | Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-guide-components-index.js` | Generates the docs-guide component library index page | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-guide-indexes.js` | Generates docs-guide workflow/template indexes and optionally verifies freshness | PASS | generator | manual, npm-script | package-script:tools/package.json#scripts.docs-guide:indexes [manual,npm-script] |
| `tools/scripts/generate-docs-guide-pages-index.js` | Generates the docs-guide pages index | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-index.js` | Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo. | PASS | ci, enforcement, generator, hook | pr, pre-commit, push, workflow-dispatch | hook:.githooks/pre-commit#line 881 [pre-commit] \| hook:.githooks/pre-commit#line 885 [pre-commit] \| hook:.githooks/pre-commit#line 890 [pre-commit] \| workflow:.github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current [pr,push,workflow-dispatch] \| workflow:.github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index [push,workflow-dispatch] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json [workflow-dispatch] |
| `tools/scripts/generate-llms-files.js` | LLMs file generator — produces llms.txt and llms-full.txt for AI consumption. Dual-mode: --check / --write. | PASS | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/generate-llms-files.yml#Generate llms.txt > generate > Generate llms files [push,workflow-dispatch] \| workflow:.github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs [pr,push] |
| `tools/scripts/generate-pages-index.js` | Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index | PASS | generator | manual, npm-script | package-script:tests/package.json#scripts.test:pages-index [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:rebuild [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:write [manual,npm-script] |
| `tools/scripts/i18n/generate-localized-docs-json.js` | Locale docs.json generator — produces localised docs.json variants from route-map and source docs.json | PASS | ci, generator, sync | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:docs-json [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes [workflow-dispatch] |
| `tools/scripts/i18n/lib/common.js` | i18n shared utilities — common helper functions for translation pipeline | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/config.js` | i18n configuration — language codes, locale paths, translation settings | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-json-localizer.js` | docs.json localiser engine — transforms docs.json navigation for locale variants | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-routes.js` | docs route resolver — maps page paths to locale-aware routes | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/frontmatter.js` | Frontmatter parser/writer — reads and writes MDX frontmatter for translation | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-parser.js` | MDX parser for i18n — extracts translatable content blocks from MDX | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-translate.js` | MDX translation engine — applies translations to MDX content blocks | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/path-utils.js` | Path utilities for i18n — locale-aware path resolution and mapping | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provenance.js` | Translation provenance tracker — records source, timestamp, and provider for each translated segment | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-mock.js` | Mock translation provider — returns placeholder translations for testing without API calls | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-openrouter.js` | OpenRouter translation provider — calls OpenRouter API for actual translations | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/providers.js` | Provider registry — selects translation provider (OpenRouter or mock) based on configuration | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Mintlify language toggle checker — validates Mintlify version supports language toggle feature | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/cli-guardrails.test.js` | Tests i18n CLI guardrails — validates argument validation and safety checks | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/docs-json-localizer.test.js` | Tests docs-json-localizer — validates locale docs.json transformation logic | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/frontmatter.test.js` | Tests frontmatter parser — validates frontmatter read/write roundtrip | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/mdx-translate.test.js` | Tests MDX translation — validates content block translation logic | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provenance.test.js` | Tests provenance tracker — validates translation provenance recording | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provider-openrouter.test.js` | Tests OpenRouter provider — validates API call logic and response parsing | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/translate-docs.js` | Translation generator — translates v2 MDX pages to target languages via OpenRouter API | PASS | ci, generator, sync | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:translate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation [workflow-dispatch] |
| `tools/scripts/i18n/validate-generated.js` | Generated localisation validator — checks generated translated MDX files and route-map outputs for integrity | PASS | ci, enforcement, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:validate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX [workflow-dispatch] |
| `tools/scripts/mint-dev.sh` | Mintlify dev server launcher — starts mint dev with correct configuration | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/new-script.js` | ' + params.summary, | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/publish-v2-internal-reports.js` | Report publisher — publishes v2 internal audit reports to configured output locations | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/remediators/assets/migrate-assets-to-branch.js` | Reads the media-audit manifest and migrates flagged assets to the | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/remediators/content/repair-spelling.js` | Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/repo-audit-orchestrator.js` | Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack. | PASS | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:repo [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:changed [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:full [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:pack-all [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:quarantine [manual,npm-script] |
| `tools/scripts/script-footprint-and-usage-audit.js` | Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-external-docs.sh` | External docs fetcher — pulls doc fragments from external GitHub repos into snippets/data/ for inclusion in builds | PASS | ci, enforcement, generator, sync | manual, npm-script, pr, push | package-script:tools/package.json#scripts.fetch-docs [manual,npm-script] \| package-script:tools/package.json#scripts.prebuild [manual,npm-script] \| workflow:.github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets [pr] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets [pr,push] \| workflow:.github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets [pr,push] |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | LPT exchange data fetcher — pulls exchange listing data for LPT token pages | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-api-docs.sh` | API docs generator — generates API reference pages from OpenAPI specs | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Glossary generator — produces glossary data file from terminology sources | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Terminology search — searches glossary/terminology data for definitions | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-seo.js` | SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis | PASS | ci, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.generate-seo [manual,npm-script] \| package-script:tools/package.json#scripts.generate-seo:dry-run [manual,npm-script] \| workflow:.github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata [workflow-dispatch] |
| `tools/scripts/snippets/test-scripts.sh` | Snippet test runner — runs basic validation on snippet scripts | PASS | enforcement, runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/update-component-library.sh` | Component library updater — syncs component library documentation from source | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | EN-GB style homogeniser — finds and fixes American English spellings, style guide violations, and formatting inconsistencies across v2 content | PASS | ci | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.audit:language-en-gb [manual,npm-script] \| workflow:.github/workflows/style-homogenise.yml#EN-GB Style Homogenisation > homogenise > Run style homogeniser [workflow-dispatch] |
| `tools/scripts/sync-codex-skills.js` | Codex skills sync — synchronises skill definition files between local and remote sources. Supports --check mode. | PASS | enforcement, sync | manual, npm-script | package-script:tools/package.json#scripts.skills:sync:codex [manual,npm-script] \| package-script:tools/package.json#scripts.skills:sync:codex:check [manual,npm-script] |
| `tools/scripts/test-v2-pages.js` | V2 page tester — validates v2 pages via Puppeteer browser rendering | PASS | enforcement | manual, npm-script | package-script:tools/package.json#scripts.test:all-pages [manual,npm-script] \| package-script:tools/package.json#scripts.test:v2-pages [manual,npm-script] |
| `tools/scripts/validate-codex-task-contract.js` | Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches | PASS | ci, enforcement, hook | pr, pre-commit | hook:.githooks/pre-commit#line 287 [pre-commit] \| workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body [pr] |
| `tools/scripts/validators/components/check-component-css.js` | Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/components/check-component-docs.js` | Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/components/check-naming-conventions.js` | Validates active component filenames against strict camelCase file naming and PascalCase exports under snippets/components. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-anchor-usage.js` | Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-description-quality.js` | Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-double-headers.js` | Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-grammar-en-gb.js` | Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-page-endings.js` | Validates that English v2 MDX pages end with an approved navigational or closing element | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/content/check-proper-nouns.js` | Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validators/governance/check-agent-docs-freshness.js` | Validates that required agent governance docs exist and have been touched within a freshness threshold | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-pay-orc-gate-finalize.sh` | Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify/.verify-large-change.sh` | Large change verifier — blocks or warns when a commit touches an unusually large number of files | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/wcag-repair-common.js` | WCAG repair shared logic — common repair functions used by WCAG audit fix mode | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |

## Template Compliance Failures

All discovered scripts meet the required script template rules.

## Usage Detail

### `.githooks/install.sh`
- Purpose: Installs git hooks by setting core.hooksPath to .githooks/
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit`
- Purpose: Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit
- Template compliance: PASS
- Role tags: enforcement, generator, hook
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
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/server-manager.js`
- Purpose: Manages Mintlify dev server lifecycle for browser tests (start/stop/health-check)
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify-browser.js`
- Purpose: Verifies browser availability for Puppeteer-based integration tests
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify.sh`
- Purpose: Pre-commit sub-hook — verifies file-walker is available and runs structural checks on staged files
- Template compliance: PASS
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
- Template compliance: PASS
- Role tags: runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `snippets/automations/youtube/filterVideos.js`
- Purpose: YouTube video filter — post-processes fetched YouTube data to filter/sort videos for display
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/audit-python.py`
- Purpose: Python audit utility — runs Python-based audit checks (alternative to Node auditors)
- Template compliance: PASS
- Role tags: audit, enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/integration/browser.test.js`
- Purpose: Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions
- Template compliance: PASS
- Role tags: ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser:all (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) (when: npm-script, pr, push)

### `tests/integration/domain-pages-audit.js`
- Purpose: Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:domain (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:both (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v1 (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v2 (when: manual, npm-script)

### `tests/integration/openapi-reference-audit.js`
- Purpose: Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes.
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:audit (when: manual, npm-script)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) (when: pr, push, scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.js`
- Purpose: Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes.
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:external (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:staged (when: manual, npm-script)
  - workflow: .github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) (when: scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.selftest.js`
- Purpose: Self-test suite for v2-link-audit.js — validates audit logic against known fixtures
- Template compliance: PASS
- Role tags: audit, enforcement, fixture, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:selftest (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.js`
- Purpose: WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair.
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:nofix (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:staged (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.selftest.js`
- Purpose: Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures
- Template compliance: PASS
- Role tags: audit, enforcement, fixture, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag:selftest (when: manual, npm-script)

### `tests/run-all.js`
- Purpose: Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test.
- Template compliance: PASS
- Role tags: enforcement, hook, runner, test
- Run-context tags: manual, npm-script, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 855 (when: pre-commit)
  - package-script: tests/package.json#scripts.test (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test (when: manual, npm-script)

### `tests/run-pr-checks.js`
- Purpose: PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff.
- Template compliance: PASS
- Role tags: ci, enforcement, runner, sync, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:pr (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks (when: npm-script, pr, push)

### `tests/unit/codex-commit.test.js`
- Purpose: Tests codex-commit.js — validates commit message generation and contract compliance
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-safe-merge-with-stash.test.js`
- Purpose: Tests codex-safe-merge-with-stash.js — validates safe merge logic with stash handling
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-skill-sync.test.js`
- Purpose: Tests sync-codex-skills.js — validates skill file synchronisation between sources
- Template compliance: PASS
- Role tags: enforcement, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-skills-sync (when: manual, npm-script)

### `tests/unit/create-codex-pr.test.js`
- Purpose: Tests create-codex-pr.js — validates PR creation logic and branch naming
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-pr-create (when: manual, npm-script)

### `tests/unit/docs-guide-sot.test.js`
- Purpose: Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness
- Template compliance: PASS
- Role tags: ci, enforcement, generator, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:docs-guide (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Docs-Guide SoT Check (Advisory) (when: npm-script, pr, push)

### `tests/unit/docs-navigation.test.js`
- Purpose: Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:docs-nav (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:docs-nav:write (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation (when: workflow-dispatch)

### `tests/unit/links-imports.test.js`
- Purpose: Validates MDX internal links and snippet import paths are resolvable
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:links (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:links (when: manual, npm-script)

### `tests/unit/lpd-scoped-mint-dev.test.js`
- Purpose: Tests lpd scoped mint-dev functionality — validates dev server scope filtering
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/mdx-guards.test.js`
- Purpose: Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx:guards (when: manual, npm-script)

### `tests/unit/mdx.test.js`
- Purpose: Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:mdx (when: manual, npm-script)

### `tests/unit/migrate-assets-to-branch.test.js`
- Purpose: Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/openapi-reference-audit.test.js`
- Purpose: Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/openapi-rolling-issue.test.js`
- Purpose: Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:issue (when: manual, npm-script)

### `tests/unit/quality.test.js`
- Purpose: Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:quality (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:quality (when: manual, npm-script)

### `tests/unit/repair-spelling.test.js`
- Purpose: Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/repo-audit-pipeline.test.js`
- Purpose: Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:repo-audit (when: manual, npm-script)

### `tests/unit/script-docs.test.js`
- Purpose: Enforces script header schema, keeps group script indexes in sync, and builds aggregate script index
- Template compliance: PASS
- Role tags: enforcement, generator, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:scripts (when: manual, npm-script)

### `tests/unit/spelling.test.js`
- Purpose: Spelling check — validates content against custom dictionary with en-GB rules
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:spell (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:spell (when: manual, npm-script)

### `tests/unit/style-guide.test.js`
- Purpose: Style guide compliance — checks en-GB conventions, heading case, formatting rules
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:style (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:style (when: manual, npm-script)

### `tests/unit/usefulness-journey.test.js`
- Purpose: Tests journey-check evaluation logic against fixture pages.
- Template compliance: PASS
- Role tags: enforcement, fixture, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/usefulness-rubric.test.js`
- Purpose: Tests rubric-based scoring logic against fixture pages.
- Template compliance: PASS
- Role tags: fixture, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/v2-link-audit.test.js`
- Purpose: Unit tests for v2-link-audit.js — tests individual link checking rules
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:unit (when: manual, npm-script)

### `tests/unit/v2-wcag-audit.test.js`
- Purpose: Unit tests for v2-wcag-audit.js — tests individual WCAG rules
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag:unit (when: manual, npm-script)

### `tests/unit/validate-codex-task-contract.test.js`
- Purpose: Tests validate-codex-task-contract.js — validates contract checking logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-task-contract (when: manual, npm-script)

### `tests/utils/file-walker.js`
- Purpose: File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators.
- Template compliance: PASS
- Role tags: enforcement, hook, test
- Run-context tags: pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 60 (when: pre-commit)
  - hook: .githooks/verify.sh#line 33 (when: manual)

### `tests/utils/mdx-parser.js`
- Purpose: MDX parser utility — extracts frontmatter, components, content blocks from MDX files
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/mintignore.js`
- Purpose: Mintignore utility — reads .mintignore patterns and filters file lists
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/openapi-rolling-issue.js`
- Purpose: OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings
- Template compliance: PASS
- Role tags: audit, generator, sync, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/spell-checker.js`
- Purpose: Spell checker utility — checks text against custom dictionary with en-GB locale support
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/config/v2-internal-report-pages.js`
- Purpose: Configuration data — list of internal report page paths for publish-v2-internal-reports.js
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-index-utils.js`
- Purpose: Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging
- Template compliance: PASS
- Role tags: generator
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

### `tools/lib/generated-file-banners.js`
- Purpose: Generated file banner template — provides standard banner text for auto-generated files
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/add-framework-headers.js`
- Purpose: Insert or verify governance framework metadata headers from classification JSON.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/add-pagetype-mechanical.js`
- Purpose: Mechanically assigns pageType frontmatter to eligible v2 MDX pages.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/assign-purpose-metadata.js`
- Purpose: Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-component-usage.js`
- Purpose: Component usage auditor — scans pages for component usage patterns and reports statistics
- Template compliance: PASS
- Role tags: audit, ci
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component usage audit (when: scheduled, workflow-dispatch)

### `tools/scripts/audit-media-assets.js`
- Purpose: Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-scripts.js`
- Purpose: Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:scripts (when: manual, npm-script)

### `tools/scripts/audit-tasks-folders.js`
- Purpose: Tasks folder auditor — checks tasks/ structure, normalises report locations, applies recommendations with conflict-safe moves
- Template compliance: PASS
- Role tags: audit, enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-v2-usefulness.js`
- Purpose: Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/check-codex-pr-overlap.js`
- Purpose: PR enforcer — checks for conflicting codex PRs targeting the same files/branches
- Template compliance: PASS
- Role tags: ci, enforcement
- Run-context tags: pr
- Used by:
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap (when: pr)

### `tools/scripts/check-no-ai-stash.sh`
- Purpose: AI stash enforcer — blocks push if AI temporary/stash files are present in working tree
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/cleanup-quarantine-manager.js`
- Purpose: Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply)
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.cleanup:classify (when: manual, npm-script)
  - package-script: tools/package.json#scripts.cleanup:quarantine (when: manual, npm-script)

### `tools/scripts/codex-commit.js`
- Purpose: Codex commit helper — audits codex branch state and generates compliant commit messages
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex-safe-merge-with-stash.js`
- Purpose: Codex merge utility — safely merges branches with stash handling to avoid codex conflicts
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/lock-release.js`
- Purpose: Codex lock release utility — releases stale codex lock files
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-finalize.js`
- Purpose: Codex task finaliser — enforces task completion requirements before closing
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-preflight.js`
- Purpose: Codex task preflight — generates task setup files and validates preconditions
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/validate-locks.js`
- Purpose: Codex lock validator — checks for stale or conflicting lock files before push
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/component-layout-governance.js`
- Purpose: Component layout governance validator — checks v2 page layouts against approved component contracts
- Template compliance: PASS
- Role tags: ci, enforcement
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:component-layout (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Component layout governance (when: scheduled, workflow-dispatch)

### `tools/scripts/convert-rss-to-mdx.js`
- Purpose: RSS-to-MDX converter — imports RSS feed items and converts to MDX page format
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/create-codex-pr.js`
- Purpose: Codex PR creator — generates codex PR with correct branch naming, labels, and body template
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:pr (when: manual, npm-script)

### `tools/scripts/cross-agent-packager.js`
- Purpose: Cross-agent packager — bundles audit reports and repo state into agent-consumable packages
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.pack:agents (when: manual, npm-script)

### `tools/scripts/debug-mint-dev.js`
- Purpose: Mintlify dev debugger — diagnostic tool for troubleshooting mint dev server issues
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/add-callouts.js`
- Purpose: Callout inserter — adds Note/Tip/Warning callout components to MDX files based on content patterns
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/batch-update-og-image.sh`
- Purpose: Batch OG image updater — updates og:image meta tags across multiple pages
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/ensure-mint-watcher-patch.sh`
- Purpose: Mint watcher patcher — applies patch to fix Mintlify file watcher issues in dev mode
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/generate-mint-dev-scope.js`
- Purpose: Mint dev scope generator — creates a scoped docs.json for running mint dev on a subset of pages
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/replace-og-image.py`
- Purpose: OG image replacer — replaces og:image path in a single page frontmatter
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/seo-generator-safe.js`
- Purpose: Safe SEO generator — generates SEO metadata with dry-run and rollback safety
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-add-callouts.js`
- Purpose: Test for add-callouts.js — validates callout insertion logic against fixtures
- Template compliance: PASS
- Role tags: enforcement, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-seo-generator.js`
- Purpose: Test for seo-generator — validates SEO generation logic
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-all-og-images.js`
- Purpose: Bulk OG image updater — updates og:image across all v2 pages
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-og-image.js`
- Purpose: Single OG image updater — updates og:image for one page
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/docs-quality-and-freshness-audit.js`
- Purpose: Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content
- Template compliance: PASS
- Role tags: audit, ci, enforcement
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:docs-quality (when: manual, npm-script)
  - workflow: .github/workflows/content-health.yml#Content Health Check > content-health > Content quality audit (when: scheduled, workflow-dispatch)

### `tools/scripts/enforce-generated-file-banners.js`
- Purpose: Generated file banner enforcer — checks (--check) or writes (default) "do not edit" banners on generated files
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:generated-banners (when: manual, npm-script)

### `tools/scripts/enforcers/pr/check-component-immutability.js`
- Purpose: Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/enforcers/pr/check-pr-template.js`
- Purpose: Enforces that PR descriptions include required change and rationale sections before merge
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-ai-sitemap.js`
- Purpose: AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator).
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap (when: push, workflow-dispatch)
  - workflow: .github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output (when: pr, push)

### `tools/scripts/generate-content-gap-reconciliation.js`
- Purpose: Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-guide-components-index.js`
- Purpose: Generates the docs-guide component library index page
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-guide-indexes.js`
- Purpose: Generates docs-guide workflow/template indexes and optionally verifies freshness
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.docs-guide:indexes (when: manual, npm-script)

### `tools/scripts/generate-docs-guide-pages-index.js`
- Purpose: Generates the docs-guide pages index
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-index.js`
- Purpose: Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.
- Template compliance: PASS
- Role tags: ci, enforcement, generator, hook
- Run-context tags: pr, pre-commit, push, workflow-dispatch
- Used by:
  - hook: .githooks/pre-commit#line 881 (when: pre-commit)
  - hook: .githooks/pre-commit#line 885 (when: pre-commit)
  - hook: .githooks/pre-commit#line 890 (when: pre-commit)
  - workflow: .github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current (when: pr, push, workflow-dispatch)
  - workflow: .github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index (when: push, workflow-dispatch)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json (when: workflow-dispatch)

### `tools/scripts/generate-llms-files.js`
- Purpose: LLMs file generator — produces llms.txt and llms-full.txt for AI consumption. Dual-mode: --check / --write.
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/generate-llms-files.yml#Generate llms.txt > generate > Generate llms files (when: push, workflow-dispatch)
  - workflow: .github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs (when: pr, push)

### `tools/scripts/generate-pages-index.js`
- Purpose: Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:pages-index (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:rebuild (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:write (when: manual, npm-script)

### `tools/scripts/i18n/generate-localized-docs-json.js`
- Purpose: Locale docs.json generator — produces localised docs.json variants from route-map and source docs.json
- Template compliance: PASS
- Role tags: ci, generator, sync
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:docs-json (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes (when: workflow-dispatch)

### `tools/scripts/i18n/lib/common.js`
- Purpose: i18n shared utilities — common helper functions for translation pipeline
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/config.js`
- Purpose: i18n configuration — language codes, locale paths, translation settings
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-json-localizer.js`
- Purpose: docs.json localiser engine — transforms docs.json navigation for locale variants
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-routes.js`
- Purpose: docs route resolver — maps page paths to locale-aware routes
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/frontmatter.js`
- Purpose: Frontmatter parser/writer — reads and writes MDX frontmatter for translation
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-parser.js`
- Purpose: MDX parser for i18n — extracts translatable content blocks from MDX
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-translate.js`
- Purpose: MDX translation engine — applies translations to MDX content blocks
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/path-utils.js`
- Purpose: Path utilities for i18n — locale-aware path resolution and mapping
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provenance.js`
- Purpose: Translation provenance tracker — records source, timestamp, and provider for each translated segment
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-mock.js`
- Purpose: Mock translation provider — returns placeholder translations for testing without API calls
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-openrouter.js`
- Purpose: OpenRouter translation provider — calls OpenRouter API for actual translations
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/providers.js`
- Purpose: Provider registry — selects translation provider (OpenRouter or mock) based on configuration
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test-mintlify-version-language-toggle.js`
- Purpose: Mintlify language toggle checker — validates Mintlify version supports language toggle feature
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/cli-guardrails.test.js`
- Purpose: Tests i18n CLI guardrails — validates argument validation and safety checks
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/docs-json-localizer.test.js`
- Purpose: Tests docs-json-localizer — validates locale docs.json transformation logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/frontmatter.test.js`
- Purpose: Tests frontmatter parser — validates frontmatter read/write roundtrip
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/mdx-translate.test.js`
- Purpose: Tests MDX translation — validates content block translation logic
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provenance.test.js`
- Purpose: Tests provenance tracker — validates translation provenance recording
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provider-openrouter.test.js`
- Purpose: Tests OpenRouter provider — validates API call logic and response parsing
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/translate-docs.js`
- Purpose: Translation generator — translates v2 MDX pages to target languages via OpenRouter API
- Template compliance: PASS
- Role tags: ci, generator, sync
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:translate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation (when: workflow-dispatch)

### `tools/scripts/i18n/validate-generated.js`
- Purpose: Generated localisation validator — checks generated translated MDX files and route-map outputs for integrity
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:validate (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX (when: workflow-dispatch)

### `tools/scripts/mint-dev.sh`
- Purpose: Mintlify dev server launcher — starts mint dev with correct configuration
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/new-script.js`
- Purpose: ' + params.summary,
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/publish-v2-internal-reports.js`
- Purpose: Report publisher — publishes v2 internal audit reports to configured output locations
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/remediators/assets/migrate-assets-to-branch.js`
- Purpose: Reads the media-audit manifest and migrates flagged assets to the
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/remediators/content/repair-spelling.js`
- Purpose: Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/repo-audit-orchestrator.js`
- Purpose: Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:repo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:changed (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:full (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:pack-all (when: manual, npm-script)
  - package-script: tools/package.json#scripts.audit:repo:quarantine (when: manual, npm-script)

### `tools/scripts/script-footprint-and-usage-audit.js`
- Purpose: Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-external-docs.sh`
- Purpose: External docs fetcher — pulls doc fragments from external GitHub repos into snippets/data/ for inclusion in builds
- Template compliance: PASS
- Role tags: ci, enforcement, generator, sync
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tools/package.json#scripts.fetch-docs (when: manual, npm-script)
  - package-script: tools/package.json#scripts.prebuild (when: manual, npm-script)
  - workflow: .github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets (when: pr)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets (when: pr, push)
  - workflow: .github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets (when: pr, push)

### `tools/scripts/snippets/fetch-lpt-exchanges.sh`
- Purpose: LPT exchange data fetcher — pulls exchange listing data for LPT token pages
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-openapi-specs.sh`
- Purpose: OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-api-docs.sh`
- Purpose: API docs generator — generates API reference pages from OpenAPI specs
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/generate-glossary.js`
- Purpose: Glossary generator — produces glossary data file from terminology sources
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/terminology-search.js`
- Purpose: Terminology search — searches glossary/terminology data for definitions
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-seo.js`
- Purpose: SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis
- Template compliance: PASS
- Role tags: ci, generator
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.generate-seo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.generate-seo:dry-run (when: manual, npm-script)
  - workflow: .github/workflows/seo-refresh.yml#SEO Metadata Refresh > seo > Generate SEO metadata (when: workflow-dispatch)

### `tools/scripts/snippets/test-scripts.sh`
- Purpose: Snippet test runner — runs basic validation on snippet scripts
- Template compliance: PASS
- Role tags: enforcement, runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/update-component-library.sh`
- Purpose: Component library updater — syncs component library documentation from source
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/style-and-language-homogenizer-en-gb.js`
- Purpose: EN-GB style homogeniser — finds and fixes American English spellings, style guide violations, and formatting inconsistencies across v2 content
- Template compliance: PASS
- Role tags: ci
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.audit:language-en-gb (when: manual, npm-script)
  - workflow: .github/workflows/style-homogenise.yml#EN-GB Style Homogenisation > homogenise > Run style homogeniser (when: workflow-dispatch)

### `tools/scripts/sync-codex-skills.js`
- Purpose: Codex skills sync — synchronises skill definition files between local and remote sources. Supports --check mode.
- Template compliance: PASS
- Role tags: enforcement, sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.skills:sync:codex (when: manual, npm-script)
  - package-script: tools/package.json#scripts.skills:sync:codex:check (when: manual, npm-script)

### `tools/scripts/test-v2-pages.js`
- Purpose: V2 page tester — validates v2 pages via Puppeteer browser rendering
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.test:all-pages (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:v2-pages (when: manual, npm-script)

### `tools/scripts/validate-codex-task-contract.js`
- Purpose: Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches
- Template compliance: PASS
- Role tags: ci, enforcement, hook
- Run-context tags: pr, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 287 (when: pre-commit)
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

### `tools/scripts/validators/components/check-naming-conventions.js`
- Purpose: Validates active component filenames against strict camelCase file naming and PascalCase exports under snippets/components.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-anchor-usage.js`
- Purpose: Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-description-quality.js`
- Purpose: Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-double-headers.js`
- Purpose: Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-grammar-en-gb.js`
- Purpose: Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-page-endings.js`
- Purpose: Validates that English v2 MDX pages end with an approved navigational or closing element
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/content/check-proper-nouns.js`
- Purpose: Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validators/governance/check-agent-docs-freshness.js`
- Purpose: Validates that required agent governance docs exist and have been touched within a freshness threshold
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-pay-orc-gate-finalize.sh`
- Purpose: Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify/.verify-large-change.sh`
- Purpose: Large change verifier — blocks or warns when a commit touches an unusually large number of files
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/wcag-repair-common.js`
- Purpose: WCAG repair shared logic — common repair functions used by WCAG audit fix mode
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

## Overlap Clusters

No exact or high-similarity overlap clusters detected.

## Consolidation Recommendations

No consolidation recommendations generated.
