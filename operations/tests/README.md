# Testing Suite

## Installation

Testing dependencies are scoped to `operations/tests/` (or `tools/` for broader repo tooling) so root docs setup is not changed.

### Option 1: Install in `operations/tests/` (Recommended)

```bash
cd operations/tests
npm install
```

### Option 2: Install globally

```bash
npm install -g puppeteer @cspell/dict-en-gb cspell js-yaml
```

## Test Scripts

### Main Runner
- `node operations/tests/run-all.js`
Runs unit + integration suite.

### Unit Suites
- `node operations/tests/unit/style-guide.test.js`
- `node operations/tests/unit/mdx.test.js`
- `node operations/tests/unit/spelling.test.js`
- `node operations/tests/unit/quality.test.js`
- `node operations/tests/unit/links.test.js`
- `node operations/tests/unit/imports.test.js`
- `node operations/tests/unit/docs-navigation.test.js`
Checks docs.json route integrity in non-writing mode by default.

- `node operations/tests/unit/docs-navigation.test.js --write-report`
Explicitly refreshes:
  - `workspace/reports/navigation-links/navigation-report.md`
  - `workspace/reports/navigation-links/navigation-report.json`

- `node operations/tests/unit/docs-guide-sot.test.js`
- `node operations/scripts/generators/content/catalogs/generate-pages-index.js`
- `node operations/scripts/validators/content/structure/enforce-generated-file-banners.js --check`
- `.mintignore` and shared file-selection helpers should exclude governed non-publishable lanes such as `_workspace/`, `x-deprecated/`, and `v2/x-archived/` once enforcement lands.

### Integration Suites
- `node operations/tests/integration/browser.test.js`
Browser rendering checks (local server flow).

- `node operations/tests/integration/domain-pages-audit.js`
Domain load audit against deployed docs URLs.

- `node operations/scripts/audits/content/health/page-links-audit.js`
Canonical page-link audit for `v2` page surfaces and page-relevant refs.
The legacy `operations/tests/integration/v2-link-audit.js` entrypoint remains as a compatibility wrapper.
Also respects `.mintignore` by default, so governed non-publishable lanes can be excluded from routine publishability checks without muting routed pages.
Generates:
  - `operations/reports/health/page-links/page-links-audit.md`
  - `operations/reports/health/page-links/page-links-audit.json`
  - Domain link maps at `snippets/data/<domain>/hrefs.jsx` in full mode when `--write-links` is enabled.

- `node operations/scripts/audits/content/health/page-imports-audit.js`
Canonical page-import audit for page-reachable MDX, JS, JSX, TS, TSX, and JSON imports.
Flags forbidden React runtime imports on Mintlify page surfaces and writes:
  - `operations/reports/health/page-imports/page-imports-audit.md`
  - `operations/reports/health/page-imports/page-imports-audit.json`

- `node operations/scripts/dispatch/content/health/page-integrity-dispatch.js`
Canonical page-integrity dispatcher.
Resolves page scope once, runs the page links and page imports audits, applies safe deterministic repairs when enabled, reruns both audits, and writes:
  - `operations/reports/health/page-integrity/page-integrity-dispatch.md`
  - `operations/reports/health/page-integrity/page-integrity-dispatch.json`

- `node operations/tests/integration/v2-wcag-audit.js`
Hybrid v2 accessibility audit for filesystem docs pages under `v2/` (excluding any `x-*` directories).
Runs conservative static checks/autofix on all selected files and browser-rendered WCAG checks (axe-core) on routable pages.
Also respects `.mintignore` by default, which is how governed non-publishable lanes are excluded from routine page audits.
Generates deterministic reports (overwritten each run) at:
  - `workspace/reports/quality-accessibility/v2-wcag-audit-report.md`
  - `workspace/reports/quality-accessibility/v2-wcag-audit-report.json`

- `node operations/tests/integration/openapi-reference-audit.js`
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
  - `--report <path>` (default: `operations/reports/health/page-links/page-links-audit.md`)
  - `--report-json <path>` (default: `operations/reports/health/page-links/page-links-audit.json`)
  - `--write-links` (default: false; enable explicitly when link-map outputs are required)
  - `--no-write-links`
  - `--strict` (exit non-zero on missing internal link targets or anchors)
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
- `workspace/reports/page-audits/domain-page-load-report.json`
- `workspace/reports/quality-accessibility/v2-wcag-audit-report.md`
- `workspace/reports/quality-accessibility/v2-wcag-audit-report.json`

WCAG coverage note:
- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard UX, screen-reader flows, content meaning, and task-based testing).
- `color-contrast` findings are advisory-only (non-blocking) in the WCAG audit until color updates are approved.

## Running Tests

### All Tests
```bash
node operations/tests/run-all.js
node operations/tests/run-all.js --wcag
```

### Domain Audit Examples
```bash
node operations/tests/integration/domain-pages-audit.js --version both
node operations/tests/integration/domain-pages-audit.js --version v1
node operations/tests/integration/domain-pages-audit.js --version v2
node operations/tests/integration/domain-pages-audit.js --staged --version both
node operations/tests/integration/domain-pages-audit.js --base-url https://docs.livepeer.org --version both
node operations/scripts/audits/content/health/page-links-audit.js --full --write-links
node operations/scripts/audits/content/health/page-links-audit.js --staged --strict --report /tmp/page-links-audit-staged.md
node operations/scripts/audits/content/health/page-links-audit.js --files v2/community/livepeer-community/trending-topics.mdx --strict
node operations/scripts/audits/content/health/page-links-audit.js --full --external-policy validate --external-link-types navigational --no-write-links --report /tmp/page-links-audit-external.md --report-json /tmp/page-links-audit-external.json
node operations/scripts/audits/content/health/page-imports-audit.js --staged --strict
node operations/scripts/dispatch/content/health/page-integrity-dispatch.js --files v2/community/livepeer-community/trending-topics.mdx --strict --no-repair --report /tmp/page-integrity.md
node operations/tests/integration/v2-wcag-audit.js --full
node operations/tests/integration/v2-wcag-audit.js --full --no-fix
node operations/tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json
node operations/tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit.md --report-json /tmp/openapi-audit.json
node operations/tests/integration/openapi-reference-audit.js --full --fix --write --report /tmp/openapi-audit-fix.md --report-json /tmp/openapi-audit-fix.json
node operations/tests/integration/openapi-reference-audit.js --files v2/solutions/livepeer-studio/api-reference/streams/create.mdx --strict
bash lpd test --staged --wcag
bash lpd test --staged --link-audit-external
bash lpd test --full --wcag
bash lpd test --full --link-audit-external
bash lpd test --full --wcag --wcag-no-fix
bash lpd tools wcag-repair-common -- --staged --stage
node operations/tests/run-pr-checks.js --base-ref main
node operations/tests/run-pr-checks.js --base-ref main --lane branch-health
node operations/scripts/dispatch/ai/codex/create-codex-pr.js --advisory-research --changed-files v2/orchestrators/guides/deployment-details/setup-options.mdx,v2/orchestrators/setup/prepare.mdx,v2/orchestrators/guides/operator-considerations/business-case.mdx
node operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js --files v2/orchestrators/guides/deployment-details/setup-options.mdx,v2/orchestrators/setup/prepare.mdx,v2/orchestrators/guides/operator-considerations/business-case.mdx --report-md /tmp/page-content-research-pr.md --report-json /tmp/page-content-research-pr.json
```

### npm Scripts (`operations/tests/package.json`)
```bash
npm --prefix operations/tests run test
npm --prefix operations/tests run test:style
npm --prefix operations/tests run test:mdx
npm --prefix operations/tests run test:spell
npm --prefix operations/tests run test:quality
npm --prefix operations/tests run test:links
npm --prefix operations/tests run test:imports
npm --prefix operations/tests run test:docs-nav
npm --prefix operations/tests run test:docs-nav:write
npm --prefix operations/tests run test:pr
npm --prefix operations/tests run test:docs-guide
npm --prefix operations/tests run test:pages-index
npm --prefix operations/tests run test:pages-index:write
npm --prefix operations/tests run test:pages-index:rebuild
npm --prefix operations/tests run test:generated-banners
npm --prefix operations/tests run test:precommit
npm --prefix operations/tests run test:precommit-cache
npm --prefix operations/tests run test:browser
npm --prefix operations/tests run test:openapi:audit
npm --prefix operations/tests run test:openapi:issue
npm --prefix operations/tests run test:link-audit
npm --prefix operations/tests run test:link-audit:staged
npm --prefix operations/tests run test:link-audit:external
npm --prefix operations/tests run test:link-audit:unit
npm --prefix operations/tests run test:link-audit:selftest
npm --prefix operations/tests run test:page-imports:audit
npm --prefix operations/tests run test:page-imports:unit
npm --prefix operations/tests run test:page-integrity
npm --prefix operations/tests run test:page-integrity:issue
npm --prefix operations/tests run test:page-integrity:dispatch
npm --prefix operations/tests run test:domain
npm --prefix operations/tests run test:domain:v1
npm --prefix operations/tests run test:domain:v2
npm --prefix operations/tests run test:domain:both
npm --prefix operations/tests run test:wcag
npm --prefix operations/tests run test:wcag:staged
npm --prefix operations/tests run test:wcag:nofix
npm --prefix operations/tests run test:wcag:unit
npm --prefix operations/tests run test:wcag:selftest
```

## PR CI Behavior (Changed-File Blocking)
- `.github/workflows/test-suite.yml` runs changed-file scoped blocking checks on pull requests:
- `operations/tests/run-pr-checks.js` defaults to the `branch-health` lane when `--lane` is omitted.
- `node operations/tests/run-pr-checks.js --base-ref <branch> --lane branch-health` is the explicit local form when you want the supported lane spelled out.
- style guide, MDX, spelling, quality, links, imports
  - script docs enforcement on changed scripts (`operations/tests/unit/script-docs.test.js --files ...`)
  - strict page-integrity dispatch on changed docs pages (`operations/scripts/dispatch/content/health/page-integrity-dispatch.js --files ... --strict --no-repair`)
- Advisory research pass for tracked claim families is available locally via:
  `node operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js --files <changed-file[,changed-file...]> --report-md /tmp/page-content-research-pr.md --report-json /tmp/page-content-research-pr.json`
- Experimental advisory integration is also available in local/manual PR prep via:
  `node operations/scripts/dispatch/ai/codex/create-codex-pr.js --advisory-research --changed-files <changed-file[,changed-file...]>`
- This helper is intentionally not wired into blocking PR CI yet. Use it after changed-file checks when a diff touches tracked gateway/orchestrator factual claim surfaces.
- Legacy route-centric helper note:
  the former claim-ledger PR helper is retired and is no longer the active PR workflow.

## Experimental Page Research Usage

The fact-check research workflow is documented canonically in:

- Internal operator runbook: `/docs-guide/frameworks/research-skill-workflow`
- Public contributor page: `/v2/resources/documentation-guide/research-and-fact-checking`

Use those pages for workflow scope, commands, readiness, outputs, and source-of-truth boundaries.
- Integration PR exception: for `docs-v2 -> main`, changed-file static failures are advisory while browser failures remain blocking.
- The same workflow also runs full browser tests from `docs.json`.
- `.github/workflows/test-v2-pages.yml` is responsible for PR comments and artifact uploads for V2 browser sweep results.
- `.github/workflows/broken-links.yml` is currently advisory (non-blocking) while legacy link cleanup is in progress.
- `.github/workflows/v2-external-link-audit.yml` runs nightly advisory external-link validation for full `v2` scope (excluding `x-*` paths) with the canonical `page-links-audit` script.
- `.github/workflows/page-integrity-health.yml` runs the canonical page-integrity dispatcher on a schedule, uploads combined reports, and plans/updates a rolling GitHub issue when unresolved findings remain.
- Full matrix: `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`

## Pre-commit Interaction
- Pre-commit runs `operations/tests/run-all.js --staged --skip-browser --precommit-basic --skip-mdx-safe-markdown-check --skip-pages-index --skip-script-docs` in fast mode after those checks already ran earlier in the hook.
- Docs navigation checks in this flow are check-only and do not rewrite `workspace/reports/navigation-links/navigation-report.*`.
- Pre-commit runs staged WCAG accessibility audit (conservative autofix enabled by default, blocks on remaining `serious`/`critical` issues):
  `node operations/tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json`
- Pre-commit fast mode runs staged link and import validators through `operations/tests/run-all.js`.
  The stricter combined page-integrity dispatch is reserved for PR CI and manual changed-file simulation:
  `node operations/scripts/dispatch/content/health/page-integrity-dispatch.js --files <changed-file[,changed-file...]> --strict --no-repair`
- Pre-commit enforces script header docs for newly added scripts and auto-updates script indexes:
  `node operations/tests/unit/script-docs.test.js --staged --write --stage --autofill`
  Missing headers are auto-inserted, then commit remains blocked until placeholder values are filled.
- Pre-commit also synchronizes `v2/pages` index files:
  `node operations/scripts/generators/content/catalogs/generate-pages-index.js --staged --write --stage`
  This regenerates top-level section `index.mdx` files, updates root `v2/pages/index.mdx`, marks missing `docs.json` pages with `⚠️`, and removes nested `index.mdx`/`index.md` files.
- The hook lane intentionally stops at staged syntax/style/content basics. Repo-wide governance/unit suites stay in full `node operations/tests/run-all.js` runs and CI.
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
 * @scope operations/tests/integration, workspace/reports/page-audits
 *
 * @usage
 *   node operations/tests/integration/domain-pages-audit.js --version both
 *
 * @inputs
 *   --version v1|v2|both (default: both)
 *   --base-url <url> (default: https://docs.livepeer.org)
 *
 * @outputs
 *   - workspace/reports/page-audits/domain-page-load-report.json
 *
 * @exit-codes
 *   0 = success
 *   1 = failures or invalid config
 *
 * @examples
 *   node operations/tests/integration/domain-pages-audit.js --staged --version v2
 *
 * @notes
 *   Overwrites the same report file each run.
 */
```

### Auto-create Script Template
Use the generator to create a new script with header already attached:
```bash
node operations/scripts/generators/governance/scaffold/new-script.js --path operations/scripts/my-script.js
node operations/scripts/generators/governance/scaffold/new-script.js --path operations/scripts/my-script.sh --domain docs --scope operations/scripts
```

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage |
|---|---|---|
| `operations/tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | `node operations/tests/integration/domain-pages-audit.js --version both` |
| `operations/tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI. Defaults to the `branch-health` lane. | `node operations/tests/run-pr-checks.js --base-ref main --lane branch-health` |
| `operations/tests/integration/v2-link-audit.js` | Compatibility wrapper for `page-links-audit.js` — preserves the legacy entrypoint while delegating to the canonical operations audit. | `node operations/tests/integration/v2-link-audit.js --full --write-links --strict` |
| `operations/tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | `node operations/tests/unit/v2-link-audit.test.js` |
| `operations/tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | `node operations/tests/integration/v2-link-audit.selftest.js` |
| `operations/tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | `node operations/tests/unit/script-docs.test.js --staged --write --stage --autofill` |
{/* SCRIPT-INDEX:END */}
