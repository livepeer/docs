# PR CI Tests and Script Run Matrix

This document captures the current pull-request CI checks and a full script inventory for the repository script scope (`.githooks`, `.github/scripts`, `tests`, `tools/scripts`, `tasks/scripts`).

## Pull Request CI Tests (Current)

| Workflow | File | PR Trigger | What Runs | Blocking |
|---|---|---|---|---|
| Docs CI - Content Quality Suite | `.github/workflows/test-suite.yml` | `pull_request` to `main`, `docs-v2` | Changed-file checks via `npm --prefix tests run test:pr` (style, MDX, spelling, quality, links/imports, script-docs, strict v2-link-audit) + browser test via `npm run test:browser` in `tools/` | Blocking, except `docs-v2 -> main` where changed-file static failures are advisory; browser failures remain blocking |
| Docs CI - V2 Browser Sweep | `.github/workflows/test-v2-pages.yml` | `pull_request` to `main`, `docs-v2` | Full route browser sweep via `npm run test:v2-pages` in `tools/`, artifact upload, PR comment | Blocking on test failure |
| Check Broken Links | `.github/workflows/broken-links.yml` | `pull_request` to `main` | `npx mintlify broken-links` | Advisory (non-blocking) |
| V2 External Link Audit | `.github/workflows/v2-external-link-audit.yml` | Nightly schedule + `workflow_dispatch` | Full `v2` link audit with external validation (`--external-policy validate --external-link-types navigational`) and artifact upload | Advisory (non-blocking) |
| Mintlify Deployment | External platform check (no repo workflow file) | PRs targeting docs branches | Mintlify preview build/deployment validation | Blocking when required by branch protection |

## Full Script Inventory

| Script | What It Does | When It Runs | Typical Invocation |
|---|---|---|---|
| **.githooks** |  |  |  |
| `.githooks/install.sh` | Utility script for .githooks/install.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash .githooks/install.sh` |
| `.githooks/pre-commit` | Utility script for .githooks/pre-commit. | Pre-commit hook (`.githooks/pre-commit`) | `node .githooks/pre-commit` |
| `.githooks/pre-commit-no-deletions` | Utility script for .githooks/pre-commit-no-deletions. | Manual/on-demand (no direct hook/workflow reference found) | `node .githooks/pre-commit-no-deletions` |
| `.githooks/server-manager.js` | Utility script for .githooks/server-manager.js. | Manual/on-demand (no direct hook/workflow reference found) | `node .githooks/server-manager.js` |
| `.githooks/verify-browser.js` | Utility script for .githooks/verify-browser.js. | Manual/on-demand (no direct hook/workflow reference found) | `node .githooks/verify-browser.js` |
| `.githooks/verify.sh` | Utility script for .githooks/verify.sh. | Pre-commit hook (`.githooks/pre-commit`) | `bash .githooks/verify.sh` |
| **.github/scripts** |  |  |  |
| `.github/scripts/fetch-forum-data.js` | Utility script for .github/scripts/fetch-forum-data.js. | Workflow `Update Forum Data` (schedule, workflow_dispatch) | `node .github/scripts/fetch-forum-data.js` |
| `.github/scripts/fetch-ghost-blog-data.js` | Utility script for .github/scripts/fetch-ghost-blog-data.js. | Workflow `Update Ghost Blog Data` (schedule, workflow_dispatch) | `node .github/scripts/fetch-ghost-blog-data.js` |
| `.github/scripts/fetch-youtube-data.js` | Utility script for .github/scripts/fetch-youtube-data.js. | Workflow `Update YouTube Data` (schedule, workflow_dispatch) | `node .github/scripts/fetch-youtube-data.js` |
| `.github/scripts/project-showcase-sync.js` | Utility script for .github/scripts/project-showcase-sync.js. | Workflow `Project Showcase Sync` (schedule, workflow_dispatch, repository_dispatch) | `node .github/scripts/project-showcase-sync.js` |
| **tests** |  |  |  |
| `tests/integration/browser.test.js` | Utility script for tests/integration/browser.test.js. | PR CI: `Docs CI - Content Quality Suite` browser test step<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:browser` (manual/local)<br />npm script `tools:test:browser:all` (manual/local)<br />npm script `tools:test:browser` (manual/local) | `node tests/integration/browser.test.js` |
| `tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | Pre-commit hook (`.githooks/pre-commit`)<br />npm script `tests:test:domain:both` (manual/local)<br />npm script `tests:test:domain:v1` (manual/local)<br />npm script `tests:test:domain:v2` (manual/local)<br />npm script `tests:test:domain` (manual/local) | `node tests/integration/domain-pages-audit.js --version both` |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation. | Pre-commit hook (`.githooks/pre-commit`) staged strict internal run<br />PR CI changed-file checks via `tests/run-pr-checks.js`<br />Workflow `V2 External Link Audit` nightly advisory run<br />npm script `tests:test:link-audit` / `tests:test:link-audit:staged` / `tests:test:link-audit:external` | `node tests/integration/v2-link-audit.js --full --write-links --strict` |
| `tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | Manual/on-demand (no direct hook/workflow reference found)<br />npm script `tests:test:link-audit:selftest` (manual/local) | `node tests/integration/v2-link-audit.selftest.js` |
| `tests/integration/v2-wcag-audit.js` | Audit `v2/` docs accessibility (WCAG 2.2 AA) with deterministic reports and conservative autofix support. | Pre-commit hook (`.githooks/pre-commit`) staged/capped run<br />CLI: `lpd test --staged --wcag` and `lpd test --full --wcag` (manual/local)<br />Via `tests/run-all.js --wcag` (manual/local)<br />npm script `tests:test:wcag` / `tests:test:wcag:staged` / `tests:test:wcag:nofix` (manual/local) | `node tests/integration/v2-wcag-audit.js --full` |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />npm script `tests:test:pr` (manual/local) | `node tests/run-pr-checks.js --base-ref main` |
| `tests/run-all.js` | Utility script for tests/run-all.js. | Pre-commit hook (`.githooks/pre-commit`)<br />npm script `tests:test` (manual/local)<br />npm script `tools:test` (manual/local) | `node tests/run-all.js` |
| `tests/unit/links-imports.test.js` | Utility script for tests/unit/links-imports.test.js. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:links` (manual/local)<br />npm script `tools:test:links` (manual/local) | `node tests/unit/links-imports.test.js` |
| `tests/unit/mdx-guards.test.js` | Enforce MDX guardrails for globals import path consistency, `latestVersion` aliasing, LPT math delimiters, and markdown-table `<br />` usage. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:mdx:guards` (manual/local) | `node tests/unit/mdx-guards.test.js` |
| `tests/unit/mdx.test.js` | Utility script for tests/unit/mdx.test.js. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:mdx` (manual/local)<br />npm script `tools:test:mdx` (manual/local) | `node tests/unit/mdx.test.js` |
| `tests/unit/docs-navigation.test.js` | Validate `docs.json` page entry syntax, report missing routes to deterministic plan reports, suggest canonical remaps, and optionally apply approved remaps interactively. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />CLI: `./lpd tests unit docs-navigation.test` (manual/local)<br />Interactive remaps: `./lpd tests unit docs-navigation.test -- --write-remaps` (manual/local, per-route approvals) | `./lpd tests unit docs-navigation.test` |
| `tests/unit/quality.test.js` | Utility script for tests/unit/quality.test.js. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:quality` (manual/local)<br />npm script `tools:test:quality` (manual/local) | `node tests/unit/quality.test.js` |
| `tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Pre-commit hook (`.githooks/pre-commit`)<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:scripts` (manual/local) | `node tests/unit/script-docs.test.js --staged --write --stage --autofill` |
| `tests/unit/spelling.test.js` | Utility script for tests/unit/spelling.test.js. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:spell` (manual/local)<br />npm script `tools:test:spell` (manual/local) | `node tests/unit/spelling.test.js` |
| `tests/unit/style-guide.test.js` | Utility script for tests/unit/style-guide.test.js. | PR CI: `Docs CI - Content Quality Suite` changed-file checks<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:style` (manual/local)<br />npm script `tools:test:style` (manual/local) | `node tests/unit/style-guide.test.js` |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | Manual/on-demand (no direct hook/workflow reference found)<br />npm script `tests:test:link-audit:unit` (manual/local) | `node tests/unit/v2-link-audit.test.js` |
| `tests/utils/file-walker.js` | Utility script for tests/utils/file-walker.js. | Pre-commit hook (`.githooks/pre-commit`) | `node tests/utils/file-walker.js` |
| `tests/utils/mdx-parser.js` | Utility script for tests/utils/mdx-parser.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tests/utils/mdx-parser.js` |
| `tests/utils/spell-checker.js` | Utility script for tests/utils/spell-checker.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tests/utils/spell-checker.js` |
| **tools/scripts** |  |  |  |
| `tools/scripts/audit-component-usage.js` | Utility script for tools/scripts/audit-component-usage.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/audit-component-usage.js` |
| `tools/scripts/debug-mint-dev.js` | Utility script for tools/scripts/debug-mint-dev.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/debug-mint-dev.js` |
| `tools/scripts/dev/add-callouts.js` | Utility script for tools/scripts/dev/add-callouts.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/add-callouts.js` |
| `tools/scripts/dev/batch-update-og-image.sh` | Utility script for tools/scripts/dev/batch-update-og-image.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/dev/batch-update-og-image.sh` |
| `tools/scripts/dev/replace-og-image.py` | Utility script for tools/scripts/dev/replace-og-image.py. | Manual/on-demand (no direct hook/workflow reference found) | `python3 tools/scripts/dev/replace-og-image.py` |
| `tools/scripts/dev/seo-generator-safe.js` | Utility script for tools/scripts/dev/seo-generator-safe.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/seo-generator-safe.js` |
| `tools/scripts/dev/test-add-callouts.js` | Utility script for tools/scripts/dev/test-add-callouts.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/test-add-callouts.js` |
| `tools/scripts/dev/test-seo-generator.js` | Utility script for tools/scripts/dev/test-seo-generator.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/test-seo-generator.js` |
| `tools/scripts/dev/update-all-og-images.js` | Utility script for tools/scripts/dev/update-all-og-images.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/update-all-og-images.js` |
| `tools/scripts/dev/update-og-image.js` | Utility script for tools/scripts/dev/update-og-image.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/dev/update-og-image.js` |
| `tools/scripts/generate-pages-index.js` | Generate and verify section-style index.mdx files for v2/pages folders, plus the root aggregate index. | Pre-commit hook (`.githooks/pre-commit`)<br />Via `tests/run-all.js` (local/manual and pre-commit fast mode)<br />npm script `tests:test:pages-index:rebuild` (manual/local)<br />npm script `tests:test:pages-index:write` (manual/local)<br />npm script `tests:test:pages-index` (manual/local) | `node tools/scripts/generate-pages-index.js --write` |
| `tools/scripts/mint-dev.sh` | Utility script for tools/scripts/mint-dev.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/mint-dev.sh` |
| `tools/scripts/new-script.js` | Create a new script file prefilled with the required docs header template. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/new-script.js --path tests/integration/my-script.js` |
| `tools/scripts/snippets/fetch-external-docs.sh` | Utility script for tools/scripts/snippets/fetch-external-docs.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/fetch-external-docs.sh` |
| `tools/scripts/snippets/fetch-lpt-exchanges.sh` | Utility script for tools/scripts/snippets/fetch-lpt-exchanges.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/fetch-lpt-exchanges.sh` |
| `tools/scripts/snippets/fetch-openapi-specs.sh` | Utility script for tools/scripts/snippets/fetch-openapi-specs.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/fetch-openapi-specs.sh` |
| `tools/scripts/snippets/generate-api-docs.sh` | Utility script for tools/scripts/snippets/generate-api-docs.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/generate-api-docs.sh` |
| `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` | Utility script for tools/scripts/snippets/generate-data/scripts/generate-glossary.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/snippets/generate-data/scripts/generate-glossary.js` |
| `tools/scripts/snippets/generate-data/scripts/terminology-search.js` | Utility script for tools/scripts/snippets/generate-data/scripts/terminology-search.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/snippets/generate-data/scripts/terminology-search.js` |
| `tools/scripts/deprecated/project-management-output-script.js` | Deprecated legacy project-management output script retained as a reference stub. | Manual/on-demand (deprecated; no active workflow usage) | `node tools/scripts/deprecated/project-management-output-script.js` |
| `tools/scripts/snippets/generate-seo.js` | Utility script for tools/scripts/snippets/generate-seo.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/snippets/generate-seo.js` |
| `tools/scripts/snippets/test-scripts.sh` | Utility script for tools/scripts/snippets/test-scripts.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/test-scripts.sh` |
| `tools/scripts/snippets/update-component-library.sh` | Utility script for tools/scripts/snippets/update-component-library.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/snippets/update-component-library.sh` |
| `tools/scripts/test-v2-pages.js` | Utility script for tools/scripts/test-v2-pages.js. | PR CI: `Docs CI - V2 Browser Sweep` full-route browser sweep<br />npm script `tools:test:all-pages` (manual/local)<br />npm script `tools:test:v2-pages` (manual/local) | `node tools/scripts/test-v2-pages.js` |
| `tools/scripts/test/allowed-script.js` | Utility script for tools/scripts/test/allowed-script.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/allowed-script.js` |
| `tools/scripts/test/allowed-test.js` | Utility script for tools/scripts/test/allowed-test.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/allowed-test.js` |
| `tools/scripts/test/allowed.js` | Utility script for tools/scripts/test/allowed.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/allowed.js` |
| `tools/scripts/test/check-component-errors.js` | Utility script for tools/scripts/test/check-component-errors.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/check-component-errors.js` |
| `tools/scripts/test/final-verification.js` | Utility script for tools/scripts/test/final-verification.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/final-verification.js` |
| `tools/scripts/test/find-correct-url.js` | Utility script for tools/scripts/test/find-correct-url.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/find-correct-url.js` |
| `tools/scripts/test/inspect-page.js` | Utility script for tools/scripts/test/inspect-page.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/inspect-page.js` |
| `tools/scripts/test/inspect-video-page.js` | Utility script for tools/scripts/test/inspect-video-page.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/inspect-video-page.js` |
| `tools/scripts/test/test-youtube-pages.js` | Utility script for tools/scripts/test/test-youtube-pages.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/test-youtube-pages.js` |
| `tools/scripts/test/verify-all-pages.js` | Utility script for tools/scripts/test/verify-all-pages.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/verify-all-pages.js` |
| `tools/scripts/test/verify-pages.js` | Utility script for tools/scripts/test/verify-pages.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tools/scripts/test/verify-pages.js` |
| `tools/scripts/verify/.verify-large-change.sh` | Reserved verifier hook placeholder for large-change checks. | Manual/on-demand (no direct hook/workflow reference found) | `bash tools/scripts/verify/.verify-large-change.sh` |
| **tasks/scripts** |  |  |  |
| `tasks/scripts/audit-all-pages-simple.js` | Utility script for tasks/scripts/audit-all-pages-simple.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/audit-all-pages-simple.js` |
| `tasks/scripts/audit-all-pages.js` | Utility script for tasks/scripts/audit-all-pages.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/audit-all-pages.js` |
| `tasks/scripts/audit-component-usage.js` | Utility script for tasks/scripts/audit-component-usage.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/audit-component-usage.js` |
| `tasks/scripts/audit-minimal.js` | Utility script for tasks/scripts/audit-minimal.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/audit-minimal.js` |
| `tasks/scripts/audit-python.py` | Utility script for tasks/scripts/audit-python.py. | Manual/on-demand (no direct hook/workflow reference found) | `python3 tasks/scripts/audit-python.py` |
| `tasks/scripts/run-audit-direct.sh` | Utility script for tasks/scripts/run-audit-direct.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tasks/scripts/run-audit-direct.sh` |
| `tasks/scripts/run-audit-now.js` | Utility script for tasks/scripts/run-audit-now.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/run-audit-now.js` |
| `tasks/scripts/run-audit.sh` | Utility script for tasks/scripts/run-audit.sh. | Manual/on-demand (no direct hook/workflow reference found) | `bash tasks/scripts/run-audit.sh` |
| `tasks/scripts/test-audit.js` | Utility script for tasks/scripts/test-audit.js. | Manual/on-demand (no direct hook/workflow reference found) | `node tasks/scripts/test-audit.js` |

## Additional Script Files Outside Managed Index Scope

The script index scope above is `.githooks`, `.github/scripts`, `tests`, `tools/scripts`, and `tasks/scripts`.
The only additional tracked script file outside that scope is:

| Script | What It Does | When It Runs | Typical Invocation |
|---|---|---|---|
| `snippets/automations/youtube/filterVideos.js` | Utility function that filters YouTube video arrays by title keywords. | Runtime utility when imported by JSX/MDX components; not invoked by hooks/workflows directly. | `import { filterVideos } from '/snippets/automations/youtube/filterVideos.js'` |

## Notes

- Script purpose text is sourced from script headers/indexes.
- Run-context mapping uses direct references in tracked hooks/workflows/package scripts plus explicit CI orchestration mappings for `test:pr`, `run-all`, and `test:v2-pages`.
- Inventory scope matches the maintained script index groups above.
