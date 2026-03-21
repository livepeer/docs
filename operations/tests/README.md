# Testing Suite

## Installation

Testing dependencies are scoped to `tests/` (or `tools/` in some workflows) so root docs setup is not changed.

### Option 1: Install in `tests/` (Recommended)

```bash
cd tests
npm install
```

### Option 2: Install globally

```bash
npm install -g puppeteer @cspell/dict-en-gb cspell js-yaml
```

## Test Scripts

### Main Runner
- `node tests/run-all.js`
Runs unit + integration suite.

### Unit Suites
- `node tests/unit/style-guide.test.js`
- `node tests/unit/mdx.test.js`
- `node tests/unit/spelling.test.js`
- `node tests/unit/quality.test.js`
- `node tests/unit/links-imports.test.js`
- `node tests/unit/docs-navigation.test.js`
Checks docs.json route integrity in non-writing mode by default.

- `node tests/unit/docs-navigation.test.js --write-report`
Explicitly refreshes:
  - `tasks/reports/navigation-links/navigation-report.md`
  - `tasks/reports/navigation-links/navigation-report.json`

- `node tests/unit/docs-guide-sot.test.js`
- `node tools/scripts/generate-pages-index.js`
- `node tools/scripts/enforce-generated-file-banners.js --check`
- `.mintignore` and shared file-selection helpers should exclude governed non-publishable lanes such as `_workspace/`, `x-deprecated/`, and `v2/x-archived/` once enforcement lands.

### Integration Suites
- `node tests/integration/browser.test.js`
Browser rendering checks (local server flow).

- `node tests/integration/domain-pages-audit.js`
Domain load audit against deployed docs URLs.

- `node tests/integration/v2-link-audit.js`
Comprehensive static link/import audit for all `v2/pages` MDX files and recursively imported MDX dependencies.
Excludes any `x-*` path segments under `v2/`.
Also respects `.mintignore` by default, so governed non-publishable lanes can be excluded from routine publishability checks without muting routed pages.
Generates:
  - `tasks/reports/navigation-links/LINK_TEST_REPORT.md`
  - `tasks/reports/navigation-links/LINK_TEST_REPORT.json`
  - Domain link maps at `snippets/data/<domain>/hrefs.jsx` in full mode when write-links is enabled.

- `node tests/integration/v2-wcag-audit.js`
Hybrid v2 accessibility audit for filesystem docs pages under `v2/` (excluding any `x-*` directories).
Runs conservative static checks/autofix on all selected files and browser-rendered WCAG checks (axe-core) on routable pages.
Also respects `.mintignore` by default, which is how governed non-publishable lanes are excluded from routine page audits.
Generates deterministic reports (overwritten each run) at:
  - `tasks/reports/quality-accessibility/v2-wcag-audit-report.md`
  - `tasks/reports/quality-accessibility/v2-wcag-audit-report.json`

- `node tests/integration/openapi-reference-audit.js`
OpenAPI endpoint integrity audit for `v2/**` including locales (`v2/es`, `v2/fr`, `v2/cn`).
Validates frontmatter `openapi: METHOD /path` and `<OpenAPI ...>` references against canonical local specs (`api/studio.yaml`, `api/openapi.yaml`, `api/cli-http.yaml`).
Workflow trigger surface:
  - PRs to `main` and `docs-v2` (blocking)
  - pushes to `main` and `docs-v2` (blocking after autofix attempt)
  - scheduled daily run at `04:35 UTC`
  - manual `workflow_dispatch`
Autofix boundaries:
  - only deterministic normalization (`METHOD` casing, spacing, leading slash)
  - no semantic endpoint guess/rewrites
Rolling issue behavior:
  - single marker issue `[//]: # (openapi-reference-audit)`
  - opens/updates on unresolved failures
  - comments and closes automatically when resolved

Triage flow for `endpoint-not-found-in-spec`:
1. Confirm mapped spec using file path scope (Studio/AI/CLI-HTTP map).
2. Search spec path+method in mapped spec.
3. If endpoint moved/renamed, update page `openapi` and `<OpenAPI path=...>` together.
4. If endpoint is intentionally removed, remove/retire the docs page from navigation (`docs.json`) and locale variants.
5. Re-run strict audit and confirm zero unresolved findings.

Flags:
- `--staged` only checks staged docs pages
- `--files <path[,path...]>` only checks explicit docs page files (repeatable)
- `--base-url <url>` sets target domain (default: `https://docs.livepeer.org`)
- `--version v1|v2|both` filters scope (default: `both`)
- Link audit flags:
  - `--full` (default)
  - `--staged`
  - `--files <path[,path...]>` (repeatable)
  - `--report <path>` (default: `tasks/reports/navigation-links/LINK_TEST_REPORT.md`)
  - `--report-json <path>` (default: `tasks/reports/navigation-links/LINK_TEST_REPORT.json`)
  - `--write-links` (default: true in full mode, false in staged/files mode)
  - `--no-write-links`
  - `--strict` (exit non-zero on missing internal links/imports)
  - `--external-policy classify|validate` (default: `classify`)
  - `--external-link-types navigational|media|all` (default: `navigational`)
  - `--external-timeout-ms <int>` (default: `10000`)
  - `--external-concurrency <int>` (default: `12`)
  - `--external-per-host-concurrency <int>` (default: `2`)
  - `--external-retries <int>` (default: `1`)
  - Advisory behavior note: external validation does not affect strict internal-link failures.
- WCAG audit flags:
  - `--full` (default)
  - `--staged`
  - `--files <path[,path...]>` (repeatable)
  - `--fix` / `--no-fix` (default: `--fix`)
  - `--stage` (stage autofixed content files)
  - `--max-pages <n>` (cap browser-audited pages)
  - `--base-url <url>` (otherwise local server manager is used)
  - `--fail-impact <critical|serious|moderate|minor|none>` (default: `serious`)
  - `--report <path>` / `--report-json <path>`
- OpenAPI audit flags:
  - `--full` (default)
  - `--files <path[,path...]>` (repeatable)
  - `--strict` (exit non-zero on findings)
  - `--fix --write` (conservative normalization only)
  - `--report <path>` / `--report-json <path>`

Report output (same file each run, overwritten):
- `tests/reports/domain-page-load-report.json`
- `tasks/reports/quality-accessibility/v2-wcag-audit-report.md`
- `tasks/reports/quality-accessibility/v2-wcag-audit-report.json`

WCAG coverage note:
- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard UX, screen-reader flows, content meaning, and task-based testing).
- `color-contrast` findings are advisory-only (non-blocking) in the WCAG audit until color updates are approved.

## Running Tests

### All Tests
```bash
node tests/run-all.js
node tests/run-all.js --wcag
```

### Domain Audit Examples
```bash
node tests/integration/domain-pages-audit.js --version both
node tests/integration/domain-pages-audit.js --version v1
node tests/integration/domain-pages-audit.js --version v2
node tests/integration/domain-pages-audit.js --staged --version both
node tests/integration/domain-pages-audit.js --base-url https://docs.livepeer.org --version both
node tests/integration/v2-link-audit.js --full --write-links
node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md
node tests/integration/v2-link-audit.js --files v2/community/livepeer-community/trending-topics.mdx --strict
node tests/integration/v2-link-audit.js --full --external-policy validate --external-link-types navigational --no-write-links --report /tmp/v2-link-audit-external.md --report-json /tmp/v2-link-audit-external.json
node tests/integration/v2-wcag-audit.js --full
node tests/integration/v2-wcag-audit.js --full --no-fix
node tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json
node tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit.md --report-json /tmp/openapi-audit.json
node tests/integration/openapi-reference-audit.js --full --fix --write --report /tmp/openapi-audit-fix.md --report-json /tmp/openapi-audit-fix.json
node tests/integration/openapi-reference-audit.js --files v2/solutions/livepeer-studio/api-reference/streams/create.mdx --strict
bash lpd test --staged --wcag
bash lpd test --staged --link-audit-external
bash lpd test --full --wcag
bash lpd test --full --link-audit-external
bash lpd test --full --wcag --wcag-no-fix
bash lpd tools wcag-repair-common -- --staged --stage
node tests/run-pr-checks.js --base-ref main
node tests/run-pr-checks.js --base-ref main --lane branch-health
node tools/scripts/create-codex-pr.js --advisory-research --changed-files v2/orchestrators/guides/deployment-details/setup-options.mdx,v2/orchestrators/setup/rcs-requirements.mdx,v2/orchestrators/guides/operator-considerations/business-case.mdx
node tools/scripts/docs-page-research-pr-report.js --files v2/orchestrators/guides/deployment-details/setup-options.mdx,v2/orchestrators/setup/rcs-requirements.mdx,v2/orchestrators/guides/operator-considerations/business-case.mdx --report-md /tmp/page-content-research-pr.md --report-json /tmp/page-content-research-pr.json
```

### npm Scripts (`tests/package.json`)
```bash
npm --prefix tests run test
npm --prefix tests run test:style
npm --prefix tests run test:mdx
npm --prefix tests run test:spell
npm --prefix tests run test:quality
npm --prefix tests run test:links
npm --prefix tests run test:docs-nav
npm --prefix tests run test:docs-nav:write
npm --prefix tests run test:pr
npm --prefix tests run test:docs-guide
npm --prefix tests run test:pages-index
npm --prefix tests run test:pages-index:write
npm --prefix tests run test:pages-index:rebuild
npm --prefix tests run test:generated-banners
npm --prefix tests run test:precommit
npm --prefix tests run test:precommit-cache
npm --prefix tests run test:browser
npm --prefix tests run test:openapi:audit
npm --prefix tests run test:openapi:issue
npm --prefix tests run test:link-audit
npm --prefix tests run test:link-audit:staged
npm --prefix tests run test:link-audit:external
npm --prefix tests run test:link-audit:unit
npm --prefix tests run test:link-audit:selftest
npm --prefix tests run test:domain
npm --prefix tests run test:domain:v1
npm --prefix tests run test:domain:v2
npm --prefix tests run test:domain:both
npm --prefix tests run test:wcag
npm --prefix tests run test:wcag:staged
npm --prefix tests run test:wcag:nofix
npm --prefix tests run test:wcag:unit
npm --prefix tests run test:wcag:selftest
```

## PR CI Behavior (Changed-File Blocking)
- `.github/workflows/test-suite.yml` runs changed-file scoped blocking checks on pull requests:
- `tests/run-pr-checks.js` defaults to the `branch-health` lane when `--lane` is omitted.
- `node tests/run-pr-checks.js --base-ref <branch> --lane branch-health` is the explicit local form when you want the supported lane spelled out.
- style guide, MDX, spelling, quality, links/imports
  - script docs enforcement on changed scripts (`tests/unit/script-docs.test.js --files ...`)
  - strict V2 link audit on changed docs pages (`tests/integration/v2-link-audit.js --files ... --strict`)
- Advisory research pass for tracked claim families is available locally via:
  `node tools/scripts/docs-page-research-pr-report.js --files <changed-file[,changed-file...]> --report-md /tmp/page-content-research-pr.md --report-json /tmp/page-content-research-pr.json`
- Experimental advisory integration is also available in local/manual PR prep via:
  `node tools/scripts/create-codex-pr.js --advisory-research --changed-files <changed-file[,changed-file...]>`
- This helper is intentionally not wired into blocking PR CI yet. Use it after changed-file checks when a diff touches tracked gateway/orchestrator factual claim surfaces.
- Legacy route-centric helper note:
  `node tools/scripts/docs-claim-ledger-pr-report.js ...` is retained only for comparison while the fact-runner advisory path is adopted. It is no longer the active PR workflow.

## Experimental Page Research Usage

The fact-check research workflow is documented canonically in:

- Internal operator runbook: `/docs-guide/frameworks/research-skill-workflow`
- Public contributor page: `/v2/resources/documentation-guide/research-and-fact-checking`

Use those pages for workflow scope, commands, readiness, outputs, and source-of-truth boundaries.
- Integration PR exception: for `docs-v2 -> main`, changed-file static failures are advisory while browser failures remain blocking.
- The same workflow also runs full browser tests from `docs.json`.
- `.github/workflows/test-v2-pages.yml` is responsible for PR comments and artifact uploads for V2 browser sweep results.
- `.github/workflows/broken-links.yml` is currently advisory (non-blocking) while legacy link cleanup is in progress.
- `.github/workflows/v2-external-link-audit.yml` runs nightly advisory external-link validation for full `v2` scope (excluding `x-*` paths).
- Full matrix: `tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`

## Pre-commit Interaction
- Pre-commit runs `tests/run-all.js --staged --skip-browser --precommit-basic --skip-mdx-safe-markdown-check --skip-pages-index --skip-script-docs` in fast mode after those checks already ran earlier in the hook.
- Docs navigation checks in this flow are check-only and do not rewrite `tasks/reports/navigation-links/navigation-report.*`.
- Pre-commit runs staged WCAG accessibility audit (conservative autofix enabled by default, blocks on remaining `serious`/`critical` issues):
  `node tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json`
- Pre-commit runs staged V2 link audit (strict internal validation, external classify-only):
  `node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-precommit.md`
- Pre-commit enforces script header docs for newly added scripts and auto-updates script indexes:
  `node tests/unit/script-docs.test.js --staged --write --stage --autofill`
  Missing headers are auto-inserted, then commit remains blocked until placeholder values are filled.
- Pre-commit also synchronizes `v2/pages` index files:
  `node tools/scripts/generate-pages-index.js --staged --write --stage`
  This regenerates top-level section `index.mdx` files, updates root `v2/pages/index.mdx`, marks missing `docs.json` pages with `⚠️`, and removes nested `index.mdx`/`index.md` files.
- The hook lane intentionally stops at staged syntax/style/content basics. Repo-wide governance/unit suites stay in full `node tests/run-all.js` runs and CI.
- Pre-commit fails fast on cheap blockers and skips the expensive staged suite until those are fixed.
- After the expensive staged suite passes once, repeat commits with unchanged staged content reuse a cache marker. Set `DISABLE_PRECOMMIT_STAGED_CACHE=1` to force a rerun.

## Script Header Template (Required for New Scripts)
Newly added scripts must include these tags near the top of the file:
- `@script`
- `@summary`
- `@domain`
- `@scope`
- `@usage`
- `@inputs`
- `@outputs`
- `@exit-codes`
- `@examples`
- `@notes`

Example:
```js
/**
 * @script domain-pages-audit
 * @summary Audit deployed docs page load status.
 * @domain docs
 * @scope tests/integration, tests/reports
 *
 * @usage
 *   node tests/integration/domain-pages-audit.js --version both
 *
 * @inputs
 *   --version v1|v2|both (default: both)
 *   --base-url <url> (default: https://docs.livepeer.org)
 *
 * @outputs
 *   - tests/reports/domain-page-load-report.json
 *
 * @exit-codes
 *   0 = success
 *   1 = failures or invalid config
 *
 * @examples
 *   node tests/integration/domain-pages-audit.js --staged --version v2
 *
 * @notes
 *   Overwrites the same report file each run.
 */
```

### Auto-create Script Template
Use the generator to create a new script with header already attached:
```bash
node tools/scripts/new-script.js --path tools/scripts/my-script.js
node tools/scripts/new-script.js --path tasks/scripts/my-script.sh --domain docs --scope tasks/scripts
```

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage |
|---|---|---|
| `tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | `node tests/integration/domain-pages-audit.js --version both` |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI. Defaults to the `branch-health` lane. | `node tests/run-pr-checks.js --base-ref main --lane branch-health` |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation. | `node tests/integration/v2-link-audit.js --full --write-links --strict` |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | `node tests/unit/v2-link-audit.test.js` |
| `tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | `node tests/integration/v2-link-audit.selftest.js` |
| `tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | `node tests/unit/script-docs.test.js --staged --write --stage --autofill` |
{/* SCRIPT-INDEX:END */}
