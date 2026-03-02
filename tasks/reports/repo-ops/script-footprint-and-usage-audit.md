# Script Footprint and Usage Audit

- Generated: 2026-03-02T02:32:05.570Z
- Scope: full
- Stage ID: script-footprint-and-usage-audit

## Severity Summary

- Critical: 3
- High: 7
- Medium: 11
- Low: 5
- Info: 0
- Total: 26

## Issues

| Severity | Title | Path | Evidence | Recommendation |
|---|---|---|---|---|
| high | Backup artifact tracked in repo | tools/scripts/test-v2-pages.js.bak | File name ends with .bak or .bak2 | Classify with cleanup-quarantine-manager and quarantine from active tree. |
| high | Backup artifact tracked in repo | tools/scripts/test-v2-pages.js.bak2 | File name ends with .bak or .bak2 | Classify with cleanup-quarantine-manager and quarantine from active tree. |
| high | Backup artifact tracked in repo | tests/integration/browser.test.js.bak | File name ends with .bak or .bak2 | Classify with cleanup-quarantine-manager and quarantine from active tree. |
| high | Backup artifact tracked in repo | tests/integration/browser.test.js.bak2 | File name ends with .bak or .bak2 | Classify with cleanup-quarantine-manager and quarantine from active tree. |
| critical | Placeholder script is discoverable as runnable | tools/scripts/test/allowed.js | Script body is only `test` and fails when executed. | Quarantine or replace with explicit fixture guard that exits 0 with clear message. |
| critical | Placeholder script is discoverable as runnable | tools/scripts/test/allowed-script.js | Script body is only `test` and fails when executed. | Quarantine or replace with explicit fixture guard that exits 0 with clear message. |
| critical | Placeholder script is discoverable as runnable | tools/scripts/test/allowed-test.js | Script body is only `test` and fails when executed. | Quarantine or replace with explicit fixture guard that exits 0 with clear message. |
| medium | Duplicate root/test script pair detected | tools/scripts/check-component-errors.js <-> tools/scripts/test/check-component-errors.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/final-verification.js <-> tools/scripts/test/final-verification.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/find-correct-url.js <-> tools/scripts/test/find-correct-url.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/inspect-page.js <-> tools/scripts/test/inspect-page.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/inspect-video-page.js <-> tools/scripts/test/inspect-video-page.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/test-youtube-pages.js <-> tools/scripts/test/test-youtube-pages.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/verify-all-pages.js <-> tools/scripts/test/verify-all-pages.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| medium | Duplicate root/test script pair detected | tools/scripts/verify-pages.js <-> tools/scripts/test/verify-pages.js | Root and test variant share equivalent script body. | Keep one canonical script and replace the second with a wrapper or remove after reference migration. |
| high | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/browser-test-report-from-report.json | Size is 10.02 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| high | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/comprehensive-v2-pages-browser-audit.json | Size is 20.35 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| low | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-2026-02-18T12-47-52-969Z.json | Size is 0.96 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| low | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-clean-2026-02-18T13-25-11-482Z.json | Size is 0.63 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| medium | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/page-audit-1771297377437.json | Size is 6.72 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| medium | Large report artifact tracked in repository | tasks/reports/_legacy-unmanaged/page-audit-1771297377471.md | Size is 5.61 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| high | Large report artifact tracked in repository | tasks/reports/quality-accessibility/v2-wcag-audit-report.json | Size is 24.31 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| low | Large report artifact tracked in repository | tasks/reports/repo-ops/repo-audit-summary.json | Size is 1.53 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| low | Large report artifact tracked in repository | tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.json | Size is 0.91 MB. | Apply report retention policy and keep only concise latest summaries tracked. |
| medium | Existing script overlap clusters require consolidation | tasks/reports/repo-ops/SCRIPT_AUDIT.json | 9 exact overlap cluster(s) are currently reported. | Prioritize overlap recommendations and consolidate duplicate script trees. |
| low | Script metadata/template compliance gaps detected | tasks/reports/repo-ops/SCRIPT_AUDIT.json | 5 script(s) are marked template non-compliant. | Backfill required script headers for discoverability and maintainability. |

