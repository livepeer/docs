---
title: 'Script Audit Report'
sidebarTitle: 'Script Audit'
description: 'Generated script inventory audit report from tools/scripts/audit-scripts.js.'
keywords: ["livepeer","internal","reports","repo-ops","audit-scripts"]
og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"
---
Last Generated (UTC ISO): `2026-03-07T07:42:58.175Z`
Last Generated (UTC Human): `March 07, 2026 07:42 UTC`
Generator Script: `tools/scripts/audit-scripts.js`
What It Does: Audit full-repo executable scripts, categorize usage/overlap, and overwrite SCRIPT_AUDIT reports.
Audited Scope: `tools/scripts, tasks/reports, tests/unit/script-docs.test.js, tests/README.md`
Outputs:
- tasks/reports/repo-ops/SCRIPT_AUDIT.md
- tasks/reports/repo-ops/SCRIPT_AUDIT.json
# SCRIPT_AUDIT

Generated: 2026-03-07T07:42:53.760Z

## Rules Source
- `tests/unit/script-docs.test.js`
- `tests/README.md`

## Summary
- Total scripts: 165
- Template compliant: 159
- Template non-compliant: 6
- Exact overlap clusters: 8
- Near overlap clusters: 1

## Category Counts

| Category | Count |
|---|---:|
| `audit` | 34 |
| `ci` | 18 |
| `enforcement` | 54 |
| `fixture` | 12 |
| `generator` | 29 |
| `helper` | 37 |
| `hook` | 11 |
| `manual` | 154 |
| `npm-script` | 42 |
| `pr` | 9 |
| `pre-commit` | 5 |
| `push` | 7 |
| `runner` | 5 |
| `scheduled` | 6 |
| `sync` | 18 |
| `test` | 42 |
| `workflow-dispatch` | 12 |

## Script Inventory

| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |
|---|---|---|---|---|---|
| `.githooks/install.sh` | Utility script for .githooks/install.sh. | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit` | Pre-commit hook for repository validation | PASS | enforcement, hook | pre-commit | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-commit-no-deletions` | Utility script for .githooks/pre-commit-no-deletions. | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/pre-push` | Enforce codex branch task-contract scope checks and block non-fast-forward pushes by default. | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/server-manager.js` | Utility script for .githooks/server-manager.js. | PASS | hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify-browser.js` | Utility script for .githooks/verify-browser.js. | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.githooks/verify.sh` | Utility script for .githooks/verify.sh. | PASS | enforcement, hook | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `.github/scripts/fetch-forum-data.js` | Utility script for .github/scripts/fetch-forum-data.js. | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-ghost-blog-data.js` | Utility script for .github/scripts/fetch-ghost-blog-data.js. | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data [scheduled,workflow-dispatch] |
| `.github/scripts/fetch-youtube-data.js` | Utility script for .github/scripts/fetch-youtube-data.js. | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos [scheduled,workflow-dispatch] |
| `.github/scripts/project-showcase-sync.js` | Utility script for .github/scripts/project-showcase-sync.js. | PASS | ci, sync | scheduled, workflow-dispatch | workflow:.github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync [scheduled,workflow-dispatch] |
| `lpd` | Utility script for lpd. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `snippets/automations/youtube/filterVideos.js` | Utility script for filterVideos. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/audit-minimal.js` | Utility script for tasks/scripts/audit-minimal.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/audit-python.py` | Utility script for tasks/scripts/audit-python.py. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/run-audit-now.js` | Utility script for tasks/scripts/run-audit-now.js. | PASS | audit, runner | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tasks/scripts/test-audit.js` | Utility script for tasks/scripts/test-audit.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/integration/browser.test.js` | Utility script for tests/integration/browser.test.js. | PASS | ci, enforcement, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser [manual,npm-script] \| package-script:tools/package.json#scripts.test:browser:all [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) [npm-script,pr,push] |
| `tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:domain [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:both [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v1 [manual,npm-script] \| package-script:tests/package.json#scripts.test:domain:v2 [manual,npm-script] |
| `tests/integration/openapi-reference-audit.js` | Audit V2 OpenAPI references against canonical specs with optional conservative autofix. | PASS | audit, ci, enforcement, test | manual, npm-script, pr, push, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:openapi:audit [manual,npm-script] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) [pr,push,scheduled,workflow-dispatch] \| workflow:.github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) [pr,push,scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation. | PASS | audit, ci, enforcement, test | manual, npm-script, scheduled, workflow-dispatch | package-script:tests/package.json#scripts.test:link-audit [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:external [manual,npm-script] \| package-script:tests/package.json#scripts.test:link-audit:staged [manual,npm-script] \| workflow:.github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) [scheduled,workflow-dispatch] |
| `tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | PASS | audit, enforcement, fixture, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:selftest [manual,npm-script] |
| `tests/integration/v2-wcag-audit.js` | Audit v2 docs.json navigation pages for accessibility (WCAG 2.2 AA) with deterministic reports and conservative source autofixes. | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:nofix [manual,npm-script] \| package-script:tests/package.json#scripts.test:wcag:staged [manual,npm-script] |
| `tests/integration/v2-wcag-audit.selftest.js` | Script-level self-tests for the v2 WCAG audit (local HTTP + Puppeteer axe run, and temp-file fix/stage behavior without Mintlify). | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:selftest [manual,npm-script] |
| `tests/run-all 2.js` | Utility script for tests/run-all.js. | PASS | runner, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/run-all.js` | Utility script for tests/run-all.js. | PASS | enforcement, hook, runner, test | manual, npm-script, pre-commit | hook:.githooks/pre-commit#line 643 [pre-commit] \| package-script:tests/package.json#scripts.test [manual,npm-script] \| package-script:tools/package.json#scripts.test [manual,npm-script] |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI, including Codex skill sync and codex task-contract enforcement. | PASS | ci, enforcement, runner, sync, test | manual, npm-script, pr, push | package-script:tests/package.json#scripts.test:pr [manual,npm-script] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks [npm-script,pr,push] |
| `tests/unit/codex-commit.test.js` | Validate codex commit helper behavior for normal commits and explicit audited no-verify override handling. | PASS | audit, enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Validate safe merge helper behavior for clean merges, dirty-tree stash/restore, and conflict handling. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/codex-skill-sync.test.js` | Validate template-driven Codex skill sync behavior including check drift, safe upsert, subset sync, and openai.yaml generation. | PASS | enforcement, sync, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-skills-sync [manual,npm-script] |
| `tests/unit/create-codex-pr.test.js` | Validate codex PR body generation and dry-run create behavior from task-contract input. | PASS | enforcement, generator, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-pr-create [manual,npm-script] |
| `tests/unit/docs-guide-sot.test.js` | Validate docs-guide source-of-truth coverage, README pointers, and generated index freshness. | PASS | enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/docs-navigation.test.js` | Validate docs.json page-entry syntax in check-only mode by default, with optional report writing and approved remaps. | PASS | audit, ci, enforcement, test | manual, npm-script, workflow-dispatch | package-script:tests/package.json#scripts.test:docs-nav [manual,npm-script] \| package-script:tests/package.json#scripts.test:docs-nav:write [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation [workflow-dispatch] |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Validate source-weighted 2026 accuracy verification rules (GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse). | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/links-imports.test.js` | Utility script for tests/unit/links-imports.test.js. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:links [manual,npm-script] \| package-script:tools/package.json#scripts.test:links [manual,npm-script] |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Validate scoped lpd mint-dev profile filtering, generated .mintignore exclusions, and dry-run flag wiring. | PASS | enforcement, generator, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/mdx-guards.test.js` | Enforce MDX guardrails for globals imports, math delimiters, and markdown table line breaks. | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx:guards [manual,npm-script] |
| `tests/unit/mdx.test.js` | Utility script for tests/unit/mdx.test.js. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:mdx [manual,npm-script] \| package-script:tools/package.json#scripts.test:mdx [manual,npm-script] |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for OpenAPI reference audit parsing, mapping, validation findings, and conservative autofix behavior. | PASS | audit, enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/unit/openapi-rolling-issue.test.js` | Unit tests for OpenAPI rolling issue dedupe, action selection, body formatting, and top-findings limits. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:openapi:issue [manual,npm-script] |
| `tests/unit/quality.test.js` | Utility script for tests/unit/quality.test.js. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:quality [manual,npm-script] \| package-script:tools/package.json#scripts.test:quality [manual,npm-script] |
| `tests/unit/repo-audit-pipeline.test.js` | Validate audit skill discovery, orchestrator dry-run output, cleanup manifest safety, and cross-agent packaging outputs. | PASS | audit, enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:repo-audit [manual,npm-script] |
| `tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | PASS | enforcement, generator, sync, test | manual, npm-script | package-script:tests/package.json#scripts.test:scripts [manual,npm-script] |
| `tests/unit/spelling.test.js` | Utility script for tests/unit/spelling.test.js. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:spell [manual,npm-script] \| package-script:tools/package.json#scripts.test:spell [manual,npm-script] |
| `tests/unit/style-guide.test.js` | Utility script for tests/unit/style-guide.test.js. | PASS | test | manual, npm-script | package-script:tests/package.json#scripts.test:style [manual,npm-script] \| package-script:tools/package.json#scripts.test:style [manual,npm-script] |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | PASS | audit, enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:link-audit:unit [manual,npm-script] |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2 WCAG audit helper logic (args, thresholds, route mapping, report sorting, and conservative autofixes). | PASS | audit, test | manual, npm-script | package-script:tests/package.json#scripts.test:wcag:unit [manual,npm-script] |
| `tests/unit/validate-codex-task-contract.test.js` | Validate codex task-contract marker and issue-readiness enforcement behavior. | PASS | enforcement, test | manual, npm-script | package-script:tests/package.json#scripts.test:codex-task-contract [manual,npm-script] |
| `tests/utils/file-walker.js` | Utility script for tests/utils/file-walker.js. | PASS | enforcement, hook, test | pre-commit | hook:.githooks/pre-commit#line 72 [pre-commit] \| hook:.githooks/verify.sh#line 47 [manual] |
| `tests/utils/mdx-parser.js` | Utility script for tests/utils/mdx-parser.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/mintignore.js` | Helpers to evaluate .mintignore using gitignore semantics for test scanners. | PASS | audit, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/openapi-rolling-issue.js` | Shared helpers for OpenAPI rolling issue formatting, dedupe, and action selection. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tests/utils/spell-checker.js` | Utility script for tests/utils/spell-checker.js. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/config/v2-internal-report-pages.js` | Utility script for v2 internal report pages. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-index-utils.js` | Shared utilities for docs-index generation and metadata backfill. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/accuracy-verifier.js` | Utility script for accuracy verifier. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/docs-usefulness/scoring.js` | Utility script for scoring. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/lib/generated-file-banners.js` | Utility script for generated file banners. | FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes) | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-pages-simple.js` | Utility script for tasks/scripts/audit-all-pages-simple.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-pages.js` | Utility script for tasks/scripts/audit-all-pages.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-all-v2-pages.js` | Utility script for tools/scripts/audit-all-v2-pages.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-component-usage.js` | Utility script for tools/scripts/audit-component-usage.js. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-scripts.js` | Audit full-repo executable scripts, categorize usage/overlap, and overwrite SCRIPT_AUDIT reports. | PASS | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:scripts [manual,npm-script] |
| `tools/scripts/audit-tasks-folders.js` | Audit tasks folders, optionally normalize report locations, and optionally apply audit recommendations with conflict-safe moves. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-v1-to-v2-mapping.js` | Build a complete v1->v2 mapping audit (English IA canonical), including seed revalidation and adjudication queue. | PASS | audit, enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/audit-v2-usefulness.js` | Audit v2 MDX pages (excluding x-* directories) and emit page-level usefulness matrix rows with source-weighted 2026 accuracy verification fields. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/check-codex-pr-overlap.js` | Fail codex PR checks when changed files overlap another open codex PR without explicit handoff label. | PASS | ci, enforcement | pr | workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap [pr] |
| `tools/scripts/check-component-errors.js` | Utility script for tools/scripts/check-component-errors.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/check-no-ai-stash.sh` | Block commits when AI-tagged stash entries are present; enforce branch plus WIP checkpoint isolation. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/cleanup-quarantine-manager.js` | Classify cleanup candidates and optionally quarantine files with a reversible manifest. | PASS | helper | manual, npm-script | package-script:tools/package.json#scripts.cleanup:classify [manual,npm-script] \| package-script:tools/package.json#scripts.cleanup:quarantine [manual,npm-script] |
| `tools/scripts/codex-commit.js` | Create git commits with explicit audited human override controls for --no-verify usage. | PASS | audit, enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex-safe-merge-with-stash.js` | Safely execute an explicit merge request by stashing local changes, merging a target ref, and restoring the stash. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/lock-release.js` | Release active local codex lock entries for a branch/task. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-finalize.js` | Run finalize gates for a codex task: contract scope, lock ownership, and optional finalize profile checks. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/task-preflight.js` | Create a codex task branch/worktree scaffold, task contract, and local lock for isolated agent execution. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/codex/validate-locks.js` | Validate codex local lock ownership and fail on overlapping active lock scopes. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/component-layout-governance.js` | Validate v2 English docs against component-layout contracts by page type. | PASS | enforcement | manual, npm-script | package-script:tools/package.json#scripts.audit:component-layout [manual,npm-script] |
| `tools/scripts/convert-rss-to-mdx.js` | Convert an RSS feed XML file into a structured MDX document. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/create-codex-pr.js` | Generate a codex PR body from task contract metadata and optionally open a prefilled GitHub pull request. | PASS | generator, sync | manual, npm-script | package-script:tools/package.json#scripts.codex:pr [manual,npm-script] |
| `tools/scripts/cross-agent-packager.js` | Generate consistent audit skill packs for Codex, Cursor, Claude Code, and Windsurf from one catalog. | PASS | audit, generator | manual, npm-script | package-script:tools/package.json#scripts.pack:agents [manual,npm-script] |
| `tools/scripts/debug-mint-dev.js` | Utility script for tools/scripts/debug-mint-dev.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/add-callouts.js` | Utility script for tools/scripts/dev/add-callouts.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/batch-update-og-image.sh` | Utility script for tools/scripts/dev/batch-update-og-image.sh. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/ensure-mint-watcher-patch.sh` | Ensure Mint local-preview watcher disables glob expansion in repo paths. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/generate-mint-dev-scope.js` | Build deterministic Mint dev scoped profiles (docs.json + .mintignore) for large navigation trees. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/replace-og-image.py` | Utility script for tools/scripts/dev/replace-og-image.py. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/seo-generator-safe.js` | Utility script for tools/scripts/dev/seo-generator-safe.js. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-add-callouts.js` | Utility script for tools/scripts/dev/test-add-callouts.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/test-seo-generator.js` | Utility script for tools/scripts/dev/test-seo-generator.js. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-all-og-images.js` | Utility script for tools/scripts/dev/update-all-og-images.js. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/dev/update-og-image.js` | Utility script for tools/scripts/dev/update-og-image.js. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/docs-quality-and-freshness-audit.js` | Audit v2 English docs for freshness and quality markers (TODO/TBD/Coming Soon, placeholders, and thin content). | PASS | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:docs-quality [manual,npm-script] |
| `tools/scripts/download-linkedin-video.sh` | Utility script for tools/scripts/download-linkedin-video.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/download-linkedin-with-cookies.sh` | Utility script for tools/scripts/download-linkedin-with-cookies.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/enforce-generated-file-banners.js` | Enforce standardized hidden/visible generated banners and frontmatter across generated MDX outputs. | PASS | enforcement, generator | manual, npm-script | package-script:tests/package.json#scripts.test:generated-banners [manual,npm-script] |
| `tools/scripts/execute-phase1-worktree-plan.js` | Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/final-verification.js` | Utility script for tools/scripts/final-verification.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/find-correct-url.js` | Utility script for tools/scripts/find-correct-url.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-ai-sitemap.js` | Generate an AI-focused sitemap from v2 docs navigation. | PASS | ci, enforcement, generator | pr, push, workflow-dispatch | workflow:.github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap [push,workflow-dispatch] \| workflow:.github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output [pr,push] |
| `tools/scripts/generate-docs-guide-components-index.js` | Generate component inventory indexes from snippets/components exports and optionally verify freshness. | PASS | enforcement, generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-guide-indexes.js` | Generate docs-guide workflow/template indexes and optionally verify they are up to date. | PASS | enforcement, generator | manual, npm-script | package-script:tools/package.json#scripts.docs-guide:indexes [manual,npm-script] |
| `tools/scripts/generate-docs-guide-pages-index.js` | Generate docs-guide/indexes/pages-index.mdx from v2/index.mdx entries filtered to docs.json navigation pages. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/generate-docs-index.js` | Generate docs-index.json and optionally backfill v2 frontmatter metadata. | PASS | ci, enforcement, generator, hook | pr, pre-commit, push, workflow-dispatch | hook:.githooks/pre-commit#line 669 [pre-commit] \| hook:.githooks/pre-commit#line 673 [pre-commit] \| hook:.githooks/pre-commit#line 678 [pre-commit] \| workflow:.github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current [pr,push,workflow-dispatch] \| workflow:.github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index [push,workflow-dispatch] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json [workflow-dispatch] |
| `tools/scripts/generate-llms-files.js` | Generate llms.txt and llms-full.txt from v2 docs navigation. | PASS | ci, enforcement, generator | pr, push | workflow:.github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs [pr,push] |
| `tools/scripts/generate-pages-index.js` | Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index. | PASS | enforcement, generator | manual, npm-script | package-script:tests/package.json#scripts.test:pages-index [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:rebuild [manual,npm-script] \| package-script:tests/package.json#scripts.test:pages-index:write [manual,npm-script] |
| `tools/scripts/i18n/generate-localized-docs-json.js` | Add/update v2 language nodes in docs.json using English v2 as template plus route-map-driven route rewrites. | PASS | ci, generator, sync | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:docs-json [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes [workflow-dispatch] |
| `tools/scripts/i18n/lib/common.js` | Utility script for tools/scripts/i18n/lib/common.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/config.js` | Utility script for tools/scripts/i18n/lib/config.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-json-localizer.js` | Utility script for tools/scripts/i18n/lib/docs-json-localizer.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/docs-routes.js` | Utility script for tools/scripts/i18n/lib/docs-routes.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/frontmatter.js` | Utility script for tools/scripts/i18n/lib/frontmatter.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-parser.js` | Utility script for tools/scripts/i18n/lib/mdx-parser.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/mdx-translate.js` | Utility script for tools/scripts/i18n/lib/mdx-translate.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/path-utils.js` | Utility script for tools/scripts/i18n/lib/path-utils.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provenance.js` | Utility script for tools/scripts/i18n/lib/provenance.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-mock.js` | Utility script for tools/scripts/i18n/lib/provider-mock.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/provider-openrouter.js` | Utility script for tools/scripts/i18n/lib/provider-openrouter.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/lib/providers.js` | Utility script for tools/scripts/i18n/lib/providers.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test-mintlify-version-language-toggle.js` | Validate Mintlify version/language toggle behavior on localized v2 routes. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/cli-guardrails.test.js` | Utility script for tools/scripts/i18n/test/cli-guardrails.test.js. | PASS | enforcement, test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/docs-json-localizer.test.js` | Utility script for tools/scripts/i18n/test/docs-json-localizer.test.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/frontmatter.test.js` | Utility script for tools/scripts/i18n/test/frontmatter.test.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/mdx-translate.test.js` | Utility script for tools/scripts/i18n/test/mdx-translate.test.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provenance.test.js` | Utility script for tools/scripts/i18n/test/provenance.test.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/test/provider-openrouter.test.js` | Utility script for tools/scripts/i18n/test/provider-openrouter.test.js. | PASS | test | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/i18n/translate-docs.js` | Translate selected v2 docs pages into configured languages and emit localized MDX files plus route-map/report artifacts. | PASS | audit, ci | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:translate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Run translation generation [workflow-dispatch] |
| `tools/scripts/i18n/validate-generated.js` | Validate generated localized MDX files parse cleanly and exist for successful route-map entries. | PASS | ci, enforcement, generator | manual, npm-script, workflow-dispatch | package-script:tools/package.json#scripts.i18n:validate [manual,npm-script] \| workflow:.github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate generated localized MDX [workflow-dispatch] |
| `tools/scripts/inspect-page.js` | Utility script for tools/scripts/inspect-page.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/inspect-video-page.js` | Utility script for tools/scripts/inspect-video-page.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/mint-dev.sh` | Utility script for tools/scripts/mint-dev.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/new-script.js` | Create a new script file prefilled with the required docs header template. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/publish-v2-internal-reports.js` | Duplicate approved markdown reports into v2/internal/reports pages with metadata and update docs.json. | PASS | audit, sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/repo-audit-orchestrator.js` | Run the docs infrastructure audit pipeline and emit a unified prioritized scorecard. | PASS | audit | manual, npm-script | package-script:tools/package.json#scripts.audit:repo [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:changed [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:full [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:pack-all [manual,npm-script] \| package-script:tools/package.json#scripts.audit:repo:quarantine [manual,npm-script] |
| `tools/scripts/script-footprint-and-usage-audit.js` | Audit script sprawl, duplicate fixtures, backup artifacts, and report-size hotspots. | PASS | audit, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-external-docs.sh` | Utility script for tools/scripts/snippets/fetch-external-docs.sh. | PASS | ci, enforcement, sync | manual, npm-script, pr, push | package-script:tools/package.json#scripts.fetch-docs [manual,npm-script] \| package-script:tools/package.json#scripts.prebuild [manual,npm-script] \| workflow:.github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets [pr] \| workflow:.github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets [pr,push] \| workflow:.github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets [pr,push] |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for tools/scripts/snippets/fetch-lpt-exchanges.sh. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Utility script for tools/scripts/snippets/fetch-openapi-specs.sh. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-api-docs.sh` | Utility script for tools/scripts/snippets/generate-api-docs.sh. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for tools/scripts/snippets/generate-data/scripts/generate-glossary.js. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for tools/scripts/snippets/generate-data/scripts/terminology-search.js. | PASS | generator | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/generate-seo.js` | Utility script for tools/scripts/snippets/generate-seo.js. | PASS | generator | manual, npm-script | package-script:tools/package.json#scripts.generate-seo [manual,npm-script] \| package-script:tools/package.json#scripts.generate-seo:dry-run [manual,npm-script] |
| `tools/scripts/snippets/test-scripts.sh` | Utility script for tools/scripts/snippets/test-scripts.sh. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/snippets/update-component-library.sh` | Utility script for tools/scripts/snippets/update-component-library.sh. | PASS | sync | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | Enforce EN-GB style and terminology profile for English v2 docs in phase 1. | PASS | enforcement | manual, npm-script | package-script:tools/package.json#scripts.audit:language-en-gb [manual,npm-script] |
| `tools/scripts/sync-codex-skills.js` | Sync canonical skill templates into local Codex skills using safe upsert and deterministic openai.yaml generation. | PASS | sync | manual, npm-script | package-script:tools/package.json#scripts.skills:sync:codex [manual,npm-script] \| package-script:tools/package.json#scripts.skills:sync:codex:check [manual,npm-script] |
| `tools/scripts/test-all-pages-browser.js` | Utility script for tools/scripts/test-all-pages-browser.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test-all-pages-comprehensive.js` | Utility script for tools/scripts/test-all-pages-comprehensive.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test-v2-pages.js` | Utility script for tools/scripts/test-v2-pages.js. | PASS | helper | manual, npm-script | package-script:tools/package.json#scripts.test:all-pages [manual,npm-script] \| package-script:tools/package.json#scripts.test:v2-pages [manual,npm-script] |
| `tools/scripts/test-youtube-pages.js` | Utility script for tools/scripts/test-youtube-pages.js. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/check-component-errors.js` | Utility script for tools/scripts/test/check-component-errors.js. | PASS | enforcement, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/final-verification.js` | Utility script for tools/scripts/test/final-verification.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/find-correct-url.js` | Utility script for tools/scripts/test/find-correct-url.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/inspect-page.js` | Utility script for tools/scripts/test/inspect-page.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/inspect-video-page.js` | Utility script for tools/scripts/test/inspect-video-page.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/test-youtube-pages 2.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/test-youtube-pages.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | PASS | fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | PASS | enforcement, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/test/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | PASS | enforcement, fixture | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/transcribe-audio-to-mdx.js` | Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page. | PASS | helper | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/validate-codex-task-contract.js` | Validate codex branch task contract schema, branch binding, changed-file scope, PR body sections, and optional linked-issue readiness policy. | PASS | ci, enforcement, hook | pr, pre-commit | hook:.githooks/pre-commit#line 163 [pre-commit] \| workflow:.github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body [pr] |
| `tools/scripts/verify-all-pages.js` | Utility script for tools/scripts/verify-all-pages.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-pages.js` | Utility script for tools/scripts/verify-pages.js. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify-pay-orc-gate-finalize.sh` | Enforce the payments/orchestrators insertion deliverables and migration paths before commit. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/verify/.verify-large-change.sh` | Reserved verifier hook placeholder for large-change checks. | PASS | enforcement | manual | Manual/on-demand (no direct hook/workflow/package reference found) |
| `tools/scripts/wcag-repair-common.js` | Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports. | PASS | audit | manual | Manual/on-demand (no direct hook/workflow/package reference found) |

## Template Compliance Failures

### `lpd`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `snippets/automations/youtube/filterVideos.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/config/v2-internal-report-pages.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/accuracy-verifier.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/docs-usefulness/scoring.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none

### `tools/lib/generated-file-banners.js`
- Missing tags: @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes
- Empty/placeholder tags: none


## Usage Detail

### `.githooks/install.sh`
- Purpose: Utility script for .githooks/install.sh.
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit`
- Purpose: Pre-commit hook for repository validation
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: pre-commit
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-commit-no-deletions`
- Purpose: Utility script for .githooks/pre-commit-no-deletions.
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/pre-push`
- Purpose: Enforce codex branch task-contract scope checks and block non-fast-forward pushes by default.
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/server-manager.js`
- Purpose: Utility script for .githooks/server-manager.js.
- Template compliance: PASS
- Role tags: hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify-browser.js`
- Purpose: Utility script for .githooks/verify-browser.js.
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.githooks/verify.sh`
- Purpose: Utility script for .githooks/verify.sh.
- Template compliance: PASS
- Role tags: enforcement, hook
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `.github/scripts/fetch-forum-data.js`
- Purpose: Utility script for .github/scripts/fetch-forum-data.js.
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-forum-data.yml#Update Forum Data > update-forum-data > Fetch and process forum data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-ghost-blog-data.js`
- Purpose: Utility script for .github/scripts/fetch-ghost-blog-data.js.
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-ghost-blog-data.yml#Update Ghost Blog Data > update-ghost-data > Fetch and process Ghost blog data (when: scheduled, workflow-dispatch)

### `.github/scripts/fetch-youtube-data.js`
- Purpose: Utility script for .github/scripts/fetch-youtube-data.js.
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/update-youtube-data.yml#Update YouTube Data > update-youtube > Fetch and process YouTube videos (when: scheduled, workflow-dispatch)

### `.github/scripts/project-showcase-sync.js`
- Purpose: Utility script for .github/scripts/project-showcase-sync.js.
- Template compliance: PASS
- Role tags: ci, sync
- Run-context tags: scheduled, workflow-dispatch
- Used by:
  - workflow: .github/workflows/project-showcase-sync.yml#Project Showcase Sync > sync-showcase > Run project showcase sync (when: scheduled, workflow-dispatch)

### `lpd`
- Purpose: Utility script for lpd.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `snippets/automations/youtube/filterVideos.js`
- Purpose: Utility script for filterVideos.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/audit-minimal.js`
- Purpose: Utility script for tasks/scripts/audit-minimal.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/audit-python.py`
- Purpose: Utility script for tasks/scripts/audit-python.py.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/run-audit-now.js`
- Purpose: Utility script for tasks/scripts/run-audit-now.js.
- Template compliance: PASS
- Role tags: audit, runner
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tasks/scripts/test-audit.js`
- Purpose: Utility script for tasks/scripts/test-audit.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/integration/browser.test.js`
- Purpose: Utility script for tests/integration/browser.test.js.
- Template compliance: PASS
- Role tags: ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:browser:all (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run Browser Tests (All Pages) (when: npm-script, pr, push)

### `tests/integration/domain-pages-audit.js`
- Purpose: Audit deployed docs page load status and emit a stable JSON report.
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:domain (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:both (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v1 (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:domain:v2 (when: manual, npm-script)

### `tests/integration/openapi-reference-audit.js`
- Purpose: Audit V2 OpenAPI references against canonical specs with optional conservative autofix.
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, pr, push, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:audit (when: manual, npm-script)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Apply safe autofix (non-PR) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (final) (when: pr, push, scheduled, workflow-dispatch)
  - workflow: .github/workflows/openapi-reference-validation.yml#OpenAPI Reference Validation > audit > Run strict OpenAPI audit (initial) (when: pr, push, scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.js`
- Purpose: Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation.
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, scheduled, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:external (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:link-audit:staged (when: manual, npm-script)
  - workflow: .github/workflows/v2-external-link-audit.yml#V2 External Link Audit (Advisory) > v2-external-link-audit > Run V2 external link audit (advisory) (when: scheduled, workflow-dispatch)

### `tests/integration/v2-link-audit.selftest.js`
- Purpose: Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file.
- Template compliance: PASS
- Role tags: audit, enforcement, fixture, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:selftest (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.js`
- Purpose: Audit v2 docs.json navigation pages for accessibility (WCAG 2.2 AA) with deterministic reports and conservative source autofixes.
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:nofix (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:wcag:staged (when: manual, npm-script)

### `tests/integration/v2-wcag-audit.selftest.js`
- Purpose: Script-level self-tests for the v2 WCAG audit (local HTTP + Puppeteer axe run, and temp-file fix/stage behavior without Mintlify).
- Template compliance: PASS
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
- Purpose: Utility script for tests/run-all.js.
- Template compliance: PASS
- Role tags: enforcement, hook, runner, test
- Run-context tags: manual, npm-script, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 643 (when: pre-commit)
  - package-script: tests/package.json#scripts.test (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test (when: manual, npm-script)

### `tests/run-pr-checks.js`
- Purpose: Run changed-file scoped validation checks for pull request CI, including Codex skill sync and codex task-contract enforcement.
- Template compliance: PASS
- Role tags: ci, enforcement, runner, sync, test
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tests/package.json#scripts.test:pr (when: manual, npm-script)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Run PR Changed-File Checks (when: npm-script, pr, push)

### `tests/unit/codex-commit.test.js`
- Purpose: Validate codex commit helper behavior for normal commits and explicit audited no-verify override handling.
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-safe-merge-with-stash.test.js`
- Purpose: Validate safe merge helper behavior for clean merges, dirty-tree stash/restore, and conflict handling.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/codex-skill-sync.test.js`
- Purpose: Validate template-driven Codex skill sync behavior including check drift, safe upsert, subset sync, and openai.yaml generation.
- Template compliance: PASS
- Role tags: enforcement, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-skills-sync (when: manual, npm-script)

### `tests/unit/create-codex-pr.test.js`
- Purpose: Validate codex PR body generation and dry-run create behavior from task-contract input.
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-pr-create (when: manual, npm-script)

### `tests/unit/docs-guide-sot.test.js`
- Purpose: Validate docs-guide source-of-truth coverage, README pointers, and generated index freshness.
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/docs-navigation.test.js`
- Purpose: Validate docs.json page-entry syntax in check-only mode by default, with optional report writing and approved remaps.
- Template compliance: PASS
- Role tags: audit, ci, enforcement, test
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tests/package.json#scripts.test:docs-nav (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:docs-nav:write (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Validate docs.json navigation (when: workflow-dispatch)

### `tests/unit/docs-usefulness-accuracy-verifier.test.js`
- Purpose: Validate source-weighted 2026 accuracy verification rules (GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse).
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/links-imports.test.js`
- Purpose: Utility script for tests/unit/links-imports.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:links (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:links (when: manual, npm-script)

### `tests/unit/lpd-scoped-mint-dev.test.js`
- Purpose: Validate scoped lpd mint-dev profile filtering, generated .mintignore exclusions, and dry-run flag wiring.
- Template compliance: PASS
- Role tags: enforcement, generator, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/mdx-guards.test.js`
- Purpose: Enforce MDX guardrails for globals imports, math delimiters, and markdown table line breaks.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx:guards (when: manual, npm-script)

### `tests/unit/mdx.test.js`
- Purpose: Utility script for tests/unit/mdx.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:mdx (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:mdx (when: manual, npm-script)

### `tests/unit/openapi-reference-audit.test.js`
- Purpose: Unit tests for OpenAPI reference audit parsing, mapping, validation findings, and conservative autofix behavior.
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/unit/openapi-rolling-issue.test.js`
- Purpose: Unit tests for OpenAPI rolling issue dedupe, action selection, body formatting, and top-findings limits.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:openapi:issue (when: manual, npm-script)

### `tests/unit/quality.test.js`
- Purpose: Utility script for tests/unit/quality.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:quality (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:quality (when: manual, npm-script)

### `tests/unit/repo-audit-pipeline.test.js`
- Purpose: Validate audit skill discovery, orchestrator dry-run output, cleanup manifest safety, and cross-agent packaging outputs.
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:repo-audit (when: manual, npm-script)

### `tests/unit/script-docs.test.js`
- Purpose: Enforce script header schema, keep group script indexes in sync, and build aggregate script index.
- Template compliance: PASS
- Role tags: enforcement, generator, sync, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:scripts (when: manual, npm-script)

### `tests/unit/spelling.test.js`
- Purpose: Utility script for tests/unit/spelling.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:spell (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:spell (when: manual, npm-script)

### `tests/unit/style-guide.test.js`
- Purpose: Utility script for tests/unit/style-guide.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:style (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:style (when: manual, npm-script)

### `tests/unit/v2-link-audit.test.js`
- Purpose: Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior.
- Template compliance: PASS
- Role tags: audit, enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:link-audit:unit (when: manual, npm-script)

### `tests/unit/v2-wcag-audit.test.js`
- Purpose: Unit tests for v2 WCAG audit helper logic (args, thresholds, route mapping, report sorting, and conservative autofixes).
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:wcag:unit (when: manual, npm-script)

### `tests/unit/validate-codex-task-contract.test.js`
- Purpose: Validate codex task-contract marker and issue-readiness enforcement behavior.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:codex-task-contract (when: manual, npm-script)

### `tests/utils/file-walker.js`
- Purpose: Utility script for tests/utils/file-walker.js.
- Template compliance: PASS
- Role tags: enforcement, hook, test
- Run-context tags: pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 72 (when: pre-commit)
  - hook: .githooks/verify.sh#line 47 (when: manual)

### `tests/utils/mdx-parser.js`
- Purpose: Utility script for tests/utils/mdx-parser.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/mintignore.js`
- Purpose: Helpers to evaluate .mintignore using gitignore semantics for test scanners.
- Template compliance: PASS
- Role tags: audit, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/openapi-rolling-issue.js`
- Purpose: Shared helpers for OpenAPI rolling issue formatting, dedupe, and action selection.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tests/utils/spell-checker.js`
- Purpose: Utility script for tests/utils/spell-checker.js.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/config/v2-internal-report-pages.js`
- Purpose: Utility script for v2 internal report pages.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-index-utils.js`
- Purpose: Shared utilities for docs-index generation and metadata backfill.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/accuracy-verifier.js`
- Purpose: Utility script for accuracy verifier.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/docs-usefulness/scoring.js`
- Purpose: Utility script for scoring.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/lib/generated-file-banners.js`
- Purpose: Utility script for generated file banners.
- Template compliance: FAIL (missing @script, @summary, @owner, @scope, @usage, @inputs, @outputs, @exit-codes, @examples, @notes)
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-pages-simple.js`
- Purpose: Utility script for tasks/scripts/audit-all-pages-simple.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-pages.js`
- Purpose: Utility script for tasks/scripts/audit-all-pages.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-all-v2-pages.js`
- Purpose: Utility script for tools/scripts/audit-all-v2-pages.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-component-usage.js`
- Purpose: Utility script for tools/scripts/audit-component-usage.js.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-scripts.js`
- Purpose: Audit full-repo executable scripts, categorize usage/overlap, and overwrite SCRIPT_AUDIT reports.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:scripts (when: manual, npm-script)

### `tools/scripts/audit-tasks-folders.js`
- Purpose: Audit tasks folders, optionally normalize report locations, and optionally apply audit recommendations with conflict-safe moves.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-v1-to-v2-mapping.js`
- Purpose: Build a complete v1->v2 mapping audit (English IA canonical), including seed revalidation and adjudication queue.
- Template compliance: PASS
- Role tags: audit, enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/audit-v2-usefulness.js`
- Purpose: Audit v2 MDX pages (excluding x-* directories) and emit page-level usefulness matrix rows with source-weighted 2026 accuracy verification fields.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/check-codex-pr-overlap.js`
- Purpose: Fail codex PR checks when changed files overlap another open codex PR without explicit handoff label.
- Template compliance: PASS
- Role tags: ci, enforcement
- Run-context tags: pr
- Used by:
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Check codex PR overlap (when: pr)

### `tools/scripts/check-component-errors.js`
- Purpose: Utility script for tools/scripts/check-component-errors.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/check-no-ai-stash.sh`
- Purpose: Block commits when AI-tagged stash entries are present; enforce branch plus WIP checkpoint isolation.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/cleanup-quarantine-manager.js`
- Purpose: Classify cleanup candidates and optionally quarantine files with a reversible manifest.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.cleanup:classify (when: manual, npm-script)
  - package-script: tools/package.json#scripts.cleanup:quarantine (when: manual, npm-script)

### `tools/scripts/codex-commit.js`
- Purpose: Create git commits with explicit audited human override controls for --no-verify usage.
- Template compliance: PASS
- Role tags: audit, enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex-safe-merge-with-stash.js`
- Purpose: Safely execute an explicit merge request by stashing local changes, merging a target ref, and restoring the stash.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/lock-release.js`
- Purpose: Release active local codex lock entries for a branch/task.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-finalize.js`
- Purpose: Run finalize gates for a codex task: contract scope, lock ownership, and optional finalize profile checks.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/task-preflight.js`
- Purpose: Create a codex task branch/worktree scaffold, task contract, and local lock for isolated agent execution.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/codex/validate-locks.js`
- Purpose: Validate codex local lock ownership and fail on overlapping active lock scopes.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/component-layout-governance.js`
- Purpose: Validate v2 English docs against component-layout contracts by page type.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:component-layout (when: manual, npm-script)

### `tools/scripts/convert-rss-to-mdx.js`
- Purpose: Convert an RSS feed XML file into a structured MDX document.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/create-codex-pr.js`
- Purpose: Generate a codex PR body from task contract metadata and optionally open a prefilled GitHub pull request.
- Template compliance: PASS
- Role tags: generator, sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.codex:pr (when: manual, npm-script)

### `tools/scripts/cross-agent-packager.js`
- Purpose: Generate consistent audit skill packs for Codex, Cursor, Claude Code, and Windsurf from one catalog.
- Template compliance: PASS
- Role tags: audit, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.pack:agents (when: manual, npm-script)

### `tools/scripts/debug-mint-dev.js`
- Purpose: Utility script for tools/scripts/debug-mint-dev.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/add-callouts.js`
- Purpose: Utility script for tools/scripts/dev/add-callouts.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/batch-update-og-image.sh`
- Purpose: Utility script for tools/scripts/dev/batch-update-og-image.sh.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/ensure-mint-watcher-patch.sh`
- Purpose: Ensure Mint local-preview watcher disables glob expansion in repo paths.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/generate-mint-dev-scope.js`
- Purpose: Build deterministic Mint dev scoped profiles (docs.json + .mintignore) for large navigation trees.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/replace-og-image.py`
- Purpose: Utility script for tools/scripts/dev/replace-og-image.py.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/seo-generator-safe.js`
- Purpose: Utility script for tools/scripts/dev/seo-generator-safe.js.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-add-callouts.js`
- Purpose: Utility script for tools/scripts/dev/test-add-callouts.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/test-seo-generator.js`
- Purpose: Utility script for tools/scripts/dev/test-seo-generator.js.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-all-og-images.js`
- Purpose: Utility script for tools/scripts/dev/update-all-og-images.js.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/dev/update-og-image.js`
- Purpose: Utility script for tools/scripts/dev/update-og-image.js.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/docs-quality-and-freshness-audit.js`
- Purpose: Audit v2 English docs for freshness and quality markers (TODO/TBD/Coming Soon, placeholders, and thin content).
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:docs-quality (when: manual, npm-script)

### `tools/scripts/download-linkedin-video.sh`
- Purpose: Utility script for tools/scripts/download-linkedin-video.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/download-linkedin-with-cookies.sh`
- Purpose: Utility script for tools/scripts/download-linkedin-with-cookies.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/enforce-generated-file-banners.js`
- Purpose: Enforce standardized hidden/visible generated banners and frontmatter across generated MDX outputs.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:generated-banners (when: manual, npm-script)

### `tools/scripts/execute-phase1-worktree-plan.js`
- Purpose: Execute Phase 1 action-plan artifacts and route fixes inside the current docs-v2 worktree only.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/final-verification.js`
- Purpose: Utility script for tools/scripts/final-verification.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/find-correct-url.js`
- Purpose: Utility script for tools/scripts/find-correct-url.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-ai-sitemap.js`
- Purpose: Generate an AI-focused sitemap from v2 docs navigation.
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push, workflow-dispatch
- Used by:
  - workflow: .github/workflows/generate-ai-sitemap.yml#Generate AI Sitemap > generate-ai-sitemap > Generate AI sitemap (when: push, workflow-dispatch)
  - workflow: .github/workflows/verify-ai-sitemap.yml#Verify AI Sitemap > verify-ai-sitemap > Verify AI sitemap output (when: pr, push)

### `tools/scripts/generate-docs-guide-components-index.js`
- Purpose: Generate component inventory indexes from snippets/components exports and optionally verify freshness.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-guide-indexes.js`
- Purpose: Generate docs-guide workflow/template indexes and optionally verify they are up to date.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.docs-guide:indexes (when: manual, npm-script)

### `tools/scripts/generate-docs-guide-pages-index.js`
- Purpose: Generate docs-guide/indexes/pages-index.mdx from v2/index.mdx entries filtered to docs.json navigation pages.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/generate-docs-index.js`
- Purpose: Generate docs-index.json and optionally backfill v2 frontmatter metadata.
- Template compliance: PASS
- Role tags: ci, enforcement, generator, hook
- Run-context tags: pr, pre-commit, push, workflow-dispatch
- Used by:
  - hook: .githooks/pre-commit#line 669 (when: pre-commit)
  - hook: .githooks/pre-commit#line 673 (when: pre-commit)
  - hook: .githooks/pre-commit#line 678 (when: pre-commit)
  - workflow: .github/workflows/check-docs-index.yml#Check Docs Index > docs-index-check > Verify docs-index.json is current (when: pr, push, workflow-dispatch)
  - workflow: .github/workflows/generate-docs-index.yml#Generate Docs Index > generate-docs-index > Generate docs index (when: push, workflow-dispatch)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Regenerate docs-index.json (when: workflow-dispatch)

### `tools/scripts/generate-llms-files.js`
- Purpose: Generate llms.txt and llms-full.txt from v2 docs navigation.
- Template compliance: PASS
- Role tags: ci, enforcement, generator
- Run-context tags: pr, push
- Used by:
  - workflow: .github/workflows/verify-llms-files.yml#Verify llms.txt Files > verify-llms-files > Verify llms outputs (when: pr, push)

### `tools/scripts/generate-pages-index.js`
- Purpose: Generate and verify section-style index.mdx files for v2 docs folders, plus the root aggregate index.
- Template compliance: PASS
- Role tags: enforcement, generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tests/package.json#scripts.test:pages-index (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:rebuild (when: manual, npm-script)
  - package-script: tests/package.json#scripts.test:pages-index:write (when: manual, npm-script)

### `tools/scripts/i18n/generate-localized-docs-json.js`
- Purpose: Add/update v2 language nodes in docs.json using English v2 as template plus route-map-driven route rewrites.
- Template compliance: PASS
- Role tags: ci, generator, sync
- Run-context tags: manual, npm-script, workflow-dispatch
- Used by:
  - package-script: tools/package.json#scripts.i18n:docs-json (when: manual, npm-script)
  - workflow: .github/workflows/translate-docs.yml#Docs Translation Pipeline > translate-docs > Update docs.json localized language nodes (when: workflow-dispatch)

### `tools/scripts/i18n/lib/common.js`
- Purpose: Utility script for tools/scripts/i18n/lib/common.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/config.js`
- Purpose: Utility script for tools/scripts/i18n/lib/config.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-json-localizer.js`
- Purpose: Utility script for tools/scripts/i18n/lib/docs-json-localizer.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/docs-routes.js`
- Purpose: Utility script for tools/scripts/i18n/lib/docs-routes.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/frontmatter.js`
- Purpose: Utility script for tools/scripts/i18n/lib/frontmatter.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-parser.js`
- Purpose: Utility script for tools/scripts/i18n/lib/mdx-parser.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/mdx-translate.js`
- Purpose: Utility script for tools/scripts/i18n/lib/mdx-translate.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/path-utils.js`
- Purpose: Utility script for tools/scripts/i18n/lib/path-utils.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provenance.js`
- Purpose: Utility script for tools/scripts/i18n/lib/provenance.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-mock.js`
- Purpose: Utility script for tools/scripts/i18n/lib/provider-mock.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/provider-openrouter.js`
- Purpose: Utility script for tools/scripts/i18n/lib/provider-openrouter.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/lib/providers.js`
- Purpose: Utility script for tools/scripts/i18n/lib/providers.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test-mintlify-version-language-toggle.js`
- Purpose: Validate Mintlify version/language toggle behavior on localized v2 routes.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/cli-guardrails.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/cli-guardrails.test.js.
- Template compliance: PASS
- Role tags: enforcement, test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/docs-json-localizer.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/docs-json-localizer.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/frontmatter.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/frontmatter.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/mdx-translate.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/mdx-translate.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provenance.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/provenance.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/test/provider-openrouter.test.js`
- Purpose: Utility script for tools/scripts/i18n/test/provider-openrouter.test.js.
- Template compliance: PASS
- Role tags: test
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/i18n/translate-docs.js`
- Purpose: Translate selected v2 docs pages into configured languages and emit localized MDX files plus route-map/report artifacts.
- Template compliance: PASS
- Role tags: audit, ci
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
- Purpose: Utility script for tools/scripts/inspect-page.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/inspect-video-page.js`
- Purpose: Utility script for tools/scripts/inspect-video-page.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/mint-dev.sh`
- Purpose: Utility script for tools/scripts/mint-dev.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/new-script.js`
- Purpose: Create a new script file prefilled with the required docs header template.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/publish-v2-internal-reports.js`
- Purpose: Duplicate approved markdown reports into v2/internal/reports pages with metadata and update docs.json.
- Template compliance: PASS
- Role tags: audit, sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/repo-audit-orchestrator.js`
- Purpose: Run the docs infrastructure audit pipeline and emit a unified prioritized scorecard.
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
- Purpose: Audit script sprawl, duplicate fixtures, backup artifacts, and report-size hotspots.
- Template compliance: PASS
- Role tags: audit, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-external-docs.sh`
- Purpose: Utility script for tools/scripts/snippets/fetch-external-docs.sh.
- Template compliance: PASS
- Role tags: ci, enforcement, sync
- Run-context tags: manual, npm-script, pr, push
- Used by:
  - package-script: tools/package.json#scripts.fetch-docs (when: manual, npm-script)
  - package-script: tools/package.json#scripts.prebuild (when: manual, npm-script)
  - workflow: .github/workflows/broken-links.yml#Check Broken Links > broken-links > Fetch external snippets (when: pr)
  - workflow: .github/workflows/test-suite.yml#Docs CI - Content Quality Suite > test-suite > Fetch external snippets (when: pr, push)
  - workflow: .github/workflows/test-v2-pages.yml#Docs CI - V2 Browser Sweep > test-pages > Fetch external snippets (when: pr, push)

### `tools/scripts/snippets/fetch-lpt-exchanges.sh`
- Purpose: Utility script for tools/scripts/snippets/fetch-lpt-exchanges.sh.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/fetch-openapi-specs.sh`
- Purpose: Utility script for tools/scripts/snippets/fetch-openapi-specs.sh.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-api-docs.sh`
- Purpose: Utility script for tools/scripts/snippets/generate-api-docs.sh.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/generate-glossary.js`
- Purpose: Utility script for tools/scripts/snippets/generate-data/scripts/generate-glossary.js.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-data/scripts/terminology-search.js`
- Purpose: Utility script for tools/scripts/snippets/generate-data/scripts/terminology-search.js.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/generate-seo.js`
- Purpose: Utility script for tools/scripts/snippets/generate-seo.js.
- Template compliance: PASS
- Role tags: generator
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.generate-seo (when: manual, npm-script)
  - package-script: tools/package.json#scripts.generate-seo:dry-run (when: manual, npm-script)

### `tools/scripts/snippets/test-scripts.sh`
- Purpose: Utility script for tools/scripts/snippets/test-scripts.sh.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/snippets/update-component-library.sh`
- Purpose: Utility script for tools/scripts/snippets/update-component-library.sh.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/style-and-language-homogenizer-en-gb.js`
- Purpose: Enforce EN-GB style and terminology profile for English v2 docs in phase 1.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.audit:language-en-gb (when: manual, npm-script)

### `tools/scripts/sync-codex-skills.js`
- Purpose: Sync canonical skill templates into local Codex skills using safe upsert and deterministic openai.yaml generation.
- Template compliance: PASS
- Role tags: sync
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.skills:sync:codex (when: manual, npm-script)
  - package-script: tools/package.json#scripts.skills:sync:codex:check (when: manual, npm-script)

### `tools/scripts/test-all-pages-browser.js`
- Purpose: Utility script for tools/scripts/test-all-pages-browser.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test-all-pages-comprehensive.js`
- Purpose: Utility script for tools/scripts/test-all-pages-comprehensive.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test-v2-pages.js`
- Purpose: Utility script for tools/scripts/test-v2-pages.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual, npm-script
- Used by:
  - package-script: tools/package.json#scripts.test:all-pages (when: manual, npm-script)
  - package-script: tools/package.json#scripts.test:v2-pages (when: manual, npm-script)

### `tools/scripts/test-youtube-pages.js`
- Purpose: Utility script for tools/scripts/test-youtube-pages.js.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/check-component-errors.js`
- Purpose: Utility script for tools/scripts/test/check-component-errors.js.
- Template compliance: PASS
- Role tags: enforcement, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/final-verification.js`
- Purpose: Utility script for tools/scripts/test/final-verification.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/find-correct-url.js`
- Purpose: Utility script for tools/scripts/test/find-correct-url.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/inspect-page.js`
- Purpose: Utility script for tools/scripts/test/inspect-page.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/inspect-video-page.js`
- Purpose: Utility script for tools/scripts/test/inspect-video-page.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/test-youtube-pages 2.js`
- Purpose: Utility script for tools/scripts/test/test-youtube-pages.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/test-youtube-pages.js`
- Purpose: Utility script for tools/scripts/test/test-youtube-pages.js.
- Template compliance: PASS
- Role tags: fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/verify-all-pages.js`
- Purpose: Utility script for tools/scripts/verify-all-pages.js.
- Template compliance: PASS
- Role tags: enforcement, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/test/verify-pages.js`
- Purpose: Utility script for tools/scripts/verify-pages.js.
- Template compliance: PASS
- Role tags: enforcement, fixture
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/transcribe-audio-to-mdx.js`
- Purpose: Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page.
- Template compliance: PASS
- Role tags: helper
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/validate-codex-task-contract.js`
- Purpose: Validate codex branch task contract schema, branch binding, changed-file scope, PR body sections, and optional linked-issue readiness policy.
- Template compliance: PASS
- Role tags: ci, enforcement, hook
- Run-context tags: pr, pre-commit
- Used by:
  - hook: .githooks/pre-commit#line 163 (when: pre-commit)
  - workflow: .github/workflows/codex-governance.yml#Codex Governance > codex-governance > Validate codex task contract + issue readiness + PR body (when: pr)

### `tools/scripts/verify-all-pages.js`
- Purpose: Utility script for tools/scripts/verify-all-pages.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-pages.js`
- Purpose: Utility script for tools/scripts/verify-pages.js.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify-pay-orc-gate-finalize.sh`
- Purpose: Enforce the payments/orchestrators insertion deliverables and migration paths before commit.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/verify/.verify-large-change.sh`
- Purpose: Reserved verifier hook placeholder for large-change checks.
- Template compliance: PASS
- Role tags: enforcement
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

### `tools/scripts/wcag-repair-common.js`
- Purpose: Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports.
- Template compliance: PASS
- Role tags: audit
- Run-context tags: manual
- Used by: Manual/on-demand (no direct hook/workflow/package reference found)

## Overlap Clusters

### Cluster 1 (exact)
- Scripts: `tools/scripts/check-component-errors.js`, `tools/scripts/test/check-component-errors.js`
- Canonical candidate: `tools/scripts/check-component-errors.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `tools/scripts/check-component-errors.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 2 (exact)
- Scripts: `tools/scripts/final-verification.js`, `tools/scripts/test/final-verification.js`
- Canonical candidate: `tools/scripts/final-verification.js`
- Shared role tags: none
- Recommendation: Consolidate to `tools/scripts/final-verification.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 3 (exact)
- Scripts: `tools/scripts/find-correct-url.js`, `tools/scripts/test/find-correct-url.js`
- Canonical candidate: `tools/scripts/find-correct-url.js`
- Shared role tags: none
- Recommendation: Consolidate to `tools/scripts/find-correct-url.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 4 (exact)
- Scripts: `tools/scripts/inspect-page.js`, `tools/scripts/test/inspect-page.js`
- Canonical candidate: `tools/scripts/inspect-page.js`
- Shared role tags: none
- Recommendation: Consolidate to `tools/scripts/inspect-page.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 5 (exact)
- Scripts: `tools/scripts/inspect-video-page.js`, `tools/scripts/test/inspect-video-page.js`
- Canonical candidate: `tools/scripts/inspect-video-page.js`
- Shared role tags: none
- Recommendation: Consolidate to `tools/scripts/inspect-video-page.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 6 (exact)
- Scripts: `tools/scripts/test-youtube-pages.js`, `tools/scripts/test/test-youtube-pages 2.js`
- Canonical candidate: `tools/scripts/test-youtube-pages.js`
- Shared role tags: none
- Recommendation: Consolidate to `tools/scripts/test-youtube-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 7 (exact)
- Scripts: `tools/scripts/test/verify-all-pages.js`, `tools/scripts/verify-all-pages.js`
- Canonical candidate: `tools/scripts/verify-all-pages.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `tools/scripts/verify-all-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 8 (exact)
- Scripts: `tools/scripts/test/verify-pages.js`, `tools/scripts/verify-pages.js`
- Canonical candidate: `tools/scripts/verify-pages.js`
- Shared role tags: enforcement
- Recommendation: Consolidate to `tools/scripts/verify-pages.js`; replace duplicates with wrappers or remove after migrating references.

### Cluster 9 (near)
- Scripts: `tools/scripts/test-youtube-pages.js`, `tools/scripts/test/test-youtube-pages.js`
- Canonical candidate: `tools/scripts/test-youtube-pages.js`
- Similarity: 0.991
- Shared role tags: none
- Recommendation: Review `tools/scripts/test-youtube-pages.js` and `tools/scripts/test/test-youtube-pages.js` for shared implementation; likely consolidate around `tools/scripts/test-youtube-pages.js`.


## Consolidation Recommendations

- Consolidate to `tools/scripts/check-component-errors.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/final-verification.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/find-correct-url.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/inspect-page.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/inspect-video-page.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/test-youtube-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/verify-all-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Consolidate to `tools/scripts/verify-pages.js`; replace duplicates with wrappers or remove after migrating references.
- Review `tools/scripts/test-youtube-pages.js` and `tools/scripts/test/test-youtube-pages.js` for shared implementation; likely consolidate around `tools/scripts/test-youtube-pages.js`.
