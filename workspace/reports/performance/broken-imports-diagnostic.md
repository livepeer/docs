# Broken Imports Diagnostic

Date: 2026-03-09
Baseline branch: `origin/docs-v2`
Push branch: `docs/perf-b1-01-docsv2-push`

## Baseline

- `node tests/unit/links-imports.test.js`
  - Did not complete.
  - The runner failed in `tests/utils/mdx-parser.js` because `require('js-yaml')` resolved from the repo root while the dependency is installed under `tools/node_modules`.
- `node tests/unit/docs-navigation.test.js`
  - `0` structural errors
  - `1` missing-route warning for `v2/gateways/guides-and-tools/gateway-job-pipelines/overview`
- `node tests/unit/mdx.test.js`
  - Did not complete for the same `js-yaml` module-resolution reason as `links-imports.test.js`

## Fixes Made

- Updated `tests/utils/mdx-parser.js` to:
  - resolve `js-yaml` via a fallback to `tools/node_modules`
  - ignore fenced code blocks and comment ranges when extracting imports
- Updated `tests/unit/links-imports.test.js` to:
  - auto-fetch generated `snippets/external/*.mdx` inputs when they are missing
  - trim quoted URLs before classifying external links
  - ignore fenced code blocks during broken-link scanning
- Corrected the `docs.json` path typo from `v2/gateways/guides-and-tools/gateway-job-pipelines/overview` to `v2/gateways/guides-and-resources/gateway-job-pipelines/overview`

## Imports Commented Out

- None.

## Intentional Entries

- `v2/resources/redirect` entries in `docs.json` were left unchanged.
  - `tests/unit/docs-navigation.test.js` special-cases that route as an intentional redirect target.
  - `.githooks/pre-commit` blocks staged `docs.json` diffs that touch `/redirect`, so these entries were treated as hook-protected and intentional.

## Notes

- No MDX content pages were changed in this `docs-v2` push.
- The newer `origin/docs-v2` baseline already contains the page-level payment and gateway edits that were needed in the older task-isolation worktree.

## Post-Fix Validation

- `node tests/unit/links-imports.test.js`
  - `0` broken imports
  - `0` broken links
- `node tests/unit/docs-navigation.test.js`
  - `0` structural errors
  - orphan and unrouted-page warnings remain
- `node tests/unit/mdx.test.js`
  - passes
