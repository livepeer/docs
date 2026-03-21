# When and Where Tests Run

## 1. Pre-Commit Hooks (Local - Automatic)

**When:** Every time you run `git commit`

**Location:** `.githooks/pre-commit`

**What Runs:**
- Style guide checks (ThemeData, hardcoded colors, imports)
- Broken links and imports validation
- MDX syntax validation
- JSON/JS/Shell syntax checks
- **Test suite (fast mode)** on staged docs pages
  - Style guide tests
  - MDX validation
  - Spelling checks
  - Quality checks
  - Broken links & imports validation
- Script docs enforcement (`tests/unit/script-docs.test.js --staged --write --stage --autofill`)
- Pages index sync (`tools/scripts/generate-pages-index.js --staged --write --stage`)
- Staged WCAG accessibility audit with conservative autofix (`tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious ...`)
- Staged strict V2 link audit (`tests/integration/v2-link-audit.js --staged --strict ...`)
- Staged selection will eventually exclude governed V2 non-publishable lanes through `.mintignore`; legacy buckets such as `_contextData`, `_plans-and-research`, `x-resources`, and nested `review.md` remain in inventory until move waves complete.
- Expensive staged validation runs only after cheap pre-checks pass.
- The hook test runner uses a `--precommit-basic` lane with staged syntax/style/content checks only; repo-wide governance/unit suites are deferred to full runs and CI.
- Repeat commits with unchanged staged content reuse the cached expensive-suite result unless `DISABLE_PRECOMMIT_STAGED_CACHE=1` is set.

**Speed:** Fast (~10-30 seconds) for most commits, depends on staged scope

**Blocks Commit:** YES (except checks explicitly marked optional in hook output)

**Installation Required:**
```bash
./.githooks/install.sh
```

<CustomDivider />

## 2. CI/CD Workflows (GitHub Actions - Automatic)

### A) Content Quality Suite

**Location:** `.github/workflows/test-suite.yml`

**When:**
- On push to `main`
- On pull requests to `main` or `docs-v2`

**What Runs:**
- **On pull requests:** changed-file blocking checks
  - Style guide (`tests/unit/style-guide.test.js`)
  - MDX validation (`tests/unit/mdx.test.js`)
  - Spelling (`tests/unit/spelling.test.js`)
  - Quality (`tests/unit/quality.test.js`)
  - Links/imports (`tests/unit/links-imports.test.js`)
  - Script docs enforcement for changed scripts (`tests/unit/script-docs.test.js --files ...`)
  - Strict link audit for changed docs pages (`tests/integration/v2-link-audit.js --files ... --strict`)
- Browser tests (all pages from `docs.json`) via `tests/integration/browser.test.js`

**Output:**
- GitHub Step Summary tables
- No PR comment from this workflow

**Blocks PR:** YES for changed-file checks and browser failures, except integration PR `docs-v2 -> main` where changed-file static failures are advisory

### B) V2 Browser Sweep

**Location:** `.github/workflows/test-v2-pages.yml`

**When:**
- On push to `main` or `docs-v2`
- On pull requests to `main` or `docs-v2`

**What Runs:**
- Full V2 browser sweep from `docs.json` (`tools/scripts/test-v2-pages.js`)

**Output:**
- PR comment summary
- Artifact: `v2-page-test-report.json`

**Blocks PR:** YES when the sweep fails

### C) Broken Links Check (Advisory)

**Location:** `.github/workflows/broken-links.yml`

**When:**
- On pull requests to `main`

**What Runs:**
- `npx mintlify broken-links`

**Policy:** Advisory only while legacy cleanup is in progress (non-blocking)

### D) V2 External Link Audit (Advisory Nightly)

**Location:** `.github/workflows/v2-external-link-audit.yml`

**When:**
- Nightly on schedule
- Manual trigger (`workflow_dispatch`)

**What Runs:**
- Full V2 link audit with external HTTP/HTTPS validation:
  `node tests/integration/v2-link-audit.js --full --external-policy validate --external-link-types navigational --no-write-links --report /tmp/v2-link-audit-external.md --report-json /tmp/v2-link-audit-external.json`

**Output:**
- Workflow artifacts:
  - `/tmp/v2-link-audit-external.md`
  - `/tmp/v2-link-audit-external.json`
- GitHub Step Summary counts (files, refs, external class breakdown)

**Policy:** Advisory only (non-blocking)

### E) OpenAPI Reference Validation (Blocking)

**Location:** `.github/workflows/openapi-reference-validation.yml`

**When:**
- On pull requests to `main` and `docs-v2`
- On push to `main` and `docs-v2`
- Daily schedule at `04:35 UTC`
- Manual trigger (`workflow_dispatch`)

**What Runs:**
- Strict OpenAPI endpoint reference audit:
  `node tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit-final.md --report-json /tmp/openapi-audit-final.json`
- On non-PR events, conservative autofix attempt:
  `node tests/integration/openapi-reference-audit.js --full --fix --write ...`

**Autofix Boundaries:**
- Method casing normalization only
- Canonical spacing normalization for `METHOD /path`
- Leading slash normalization where missing
- No semantic path rewrites

**Rolling Issue Behavior:**
- Single marker issue: `[//]: # (openapi-reference-audit)`
- Opens/updates when unresolved failures remain
- Closes with resolution comment when a run is clean
- Labels ensured idempotently: `docs-v2`, `help wanted`, `status: needs-routing`, `type: bug`, `area: ci-cd`

**Output:**
- Artifacts:
  - `/tmp/openapi-audit-initial.md`
  - `/tmp/openapi-audit-initial.json`
  - `/tmp/openapi-audit-fix.md`
  - `/tmp/openapi-audit-fix.json`
  - `/tmp/openapi-audit-final.md`
  - `/tmp/openapi-audit-final.json`
- GitHub Step Summary counts and top findings

**Blocks PR:** YES when unresolved findings remain

<CustomDivider />

## 3. Manual Execution (On-Demand)

**When:** You run them manually

```bash
# Full local suite
node tests/run-all.js

# Single suites
node tests/unit/style-guide.test.js
node tests/unit/mdx.test.js
node tests/unit/spelling.test.js
node tests/unit/quality.test.js
node tests/unit/links-imports.test.js
node tests/integration/browser.test.js
node tests/integration/v2-wcag-audit.js --full
node tests/integration/v2-wcag-audit.js --full --no-fix
node tests/integration/v2-wcag-audit.js --staged --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json
bash lpd test --staged --wcag
bash lpd test --full --wcag
bash lpd test --full --wcag --wcag-no-fix

# Changed-file PR simulation (local)
# branch-health is the default lane
node tests/run-pr-checks.js --base-ref main
node tests/run-pr-checks.js --base-ref main --lane branch-health

# Strict link audit on explicit files
node tests/integration/v2-link-audit.js --files v2/community/livepeer-community/trending-topics.mdx --strict
node tests/integration/v2-link-audit.js --full --external-policy validate --external-link-types navigational --no-write-links --report /tmp/v2-link-audit-external.md --report-json /tmp/v2-link-audit-external.json
node tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit.md --report-json /tmp/openapi-audit.json
node tests/integration/openapi-reference-audit.js --full --fix --write --report /tmp/openapi-audit-fix.md --report-json /tmp/openapi-audit-fix.json
node tests/integration/openapi-reference-audit.js --files v2/solutions/livepeer-studio/api-reference/streams/create.mdx --strict
```

## OpenAPI Triage (`endpoint-not-found-in-spec`)

1. Confirm file-to-spec mapping from the audit report (`resolvedSpec` field).
2. Verify method/path exact match inside the mapped spec (`api/studio.yaml`, `api/openapi.yaml`, or `api/cli-http.yaml`).
3. Update both frontmatter `openapi:` and `<OpenAPI path=...>` to the canonical endpoint.
4. If endpoint is intentionally removed, retire page + locale variants and remove navigation references in `docs.json`.
5. Re-run strict audit until findings are zero.

<CustomDivider />

## Execution Flow (PR)

```
Pull request opened/updated
  ↓
Content Quality Suite starts
  ↓
Compute changed files from merge-base (origin/<base_ref>..HEAD)
  ↓
Run changed-file blocking checks (`branch-health` lane by default)
  ↓
Start Mintlify dev server
  ↓
Run browser tests
  ↓
Step summary updated
  ↓
✅ PR can merge OR ❌ PR blocked
```

<CustomDivider />

## Future Graduation to Full-Repo Blocking

Changed-file blocking is intentional while legacy violations are being cleaned up.

Graduate to full-repo blocking only after agreed criteria are met, for example:
- Baseline static violations reduced to near-zero for style/MDX/quality/links checks
- The team agrees the remaining debt is not expected to cause widespread PR failures
- CI timing and developer experience remain acceptable after widening scope

<CustomDivider />

## Detailed Matrix

For the full PR CI test breakdown and full script run-context inventory, see:
`tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`
