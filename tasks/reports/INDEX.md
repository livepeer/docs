# tasks/reports Index

Generated: 2026-03-09T04:26:22.865Z
Generator: `tools/scripts/audit-scripts.js`
Branch: codex/20260309-tasks-gov-cleanup

| Generator script | Output path(s) |
|---|---|
| `generate-docs-index.js` | `reports/docs-index/missing-frontmatter.md` |
| `generate-content-gap-reconciliation.js` | `reports/content-gap/reconciliation.csv`, `reports/content-gap/reconciliation-summary.md` |
| `docs-navigation.test.js --write-report` | `reports/navigation-links/navigation-report.{md,json}` |
| `v2-link-audit.js` | `reports/navigation-links/LINK_TEST_REPORT.{md,json}` |
| `v2-wcag-audit.js` | `reports/quality-accessibility/v2-wcag-audit-report.{md,json}` |
| `wcag-repair-common.js` | `reports/quality-accessibility/v2-wcag-repair-common-report.{md,json}` |
| `audit-v2-usefulness.js` | `reports/quality-accessibility/docs-usefulness/latest/{page-matrix.csv,page-matrix.jsonl,run-metadata.json,summary.md,verification-cache/*.json}` |
| `test-all-pages-comprehensive.js` | `reports/page-audits/browser-test-report.{md,json}` |
| `audit-all-pages.js` | `reports/page-audits/page-audit-latest.{md,json}` |
| `audit-all-pages-simple.js` | `reports/page-audits/page-audit-simple-latest.{md,json}` |
| `tasks/scripts/audit-python.py` | `reports/page-audits/page-audit-python-latest.{md,json}` |
| `audit-scripts.js` | `reports/repo-ops/SCRIPT_AUDIT.{md,json}`, `reports/INDEX.md` |
| `audit-tasks-folders.js` | `reports/repo-ops/*_audit.md`, `reports/repo-ops/recommendation-conflicts.md`, `reports/repo-ops/recommendation-apply-summary.json` |
| `audit-v1-to-v2-mapping.js` | `reports/v1-v2-mapping-audit/{v1-v2-page-mapping-audit.csv,v1-v2-page-mapping-audit.json,v1-v2-page-mapping-audit-report.md,v1-v2-page-mapping-adjudication-queue.json,v1-v2-page-mapping-run-metadata.json}` |
| `audit-media-assets.js` | `reports/media-audit/media-audit-manifest.json`, `reports/media-audit/media-audit-summary.md` |
| `openapi-reference-audit.js` | `reports/openapi-reference/openapi-reference-audit.{md,json}` |
| `measure-performance.js` | `reports/performance/performance-baseline.{md,json}` |
