# Repo Audit Summary

- Generated: 2026-03-02T02:32:06.108Z
- Mode: static
- Scope: full
- Stage ID: repo-audit-orchestrator
- Score: 4/100

## Stage Results

| Stage | Status | Commands | Issues |
|---|---|---:|---:|
| script-footprint-and-usage-audit | passed | 1 | 26 |
| docs-coverage-and-route-integrity-audit | passed | 1 | 269 |
| docs-quality-and-freshness-audit | passed | 1 | 260 |
| style-and-language-homogenizer-en-gb | passed | 1 | 2150 |
| component-layout-governance | passed | 1 | 452 |
| cleanup-quarantine-manager | passed | 1 | 45 |
| cross-agent-packager | passed | 1 | 0 |

## Severity Summary

- Critical: 4
- High: 521
- Medium: 2471
- Low: 206
- Info: 0
- Total: 3202

## Prioritized Actions

| Severity | Stage | Action | Path |
|---|---|---|---|
| critical | docs-coverage-and-route-integrity-audit | docs.json syntax/navigation entry violation. Fix docs.json entry syntax and regenerate navigation report. | docs.json |
| critical | script-footprint-and-usage-audit | Placeholder script is discoverable as runnable. Quarantine or replace with explicit fixture guard that exits 0 with clear message. | tools/scripts/test/allowed-script.js |
| critical | script-footprint-and-usage-audit | Placeholder script is discoverable as runnable. Quarantine or replace with explicit fixture guard that exits 0 with clear message. | tools/scripts/test/allowed-test.js |
| critical | script-footprint-and-usage-audit | Placeholder script is discoverable as runnable. Quarantine or replace with explicit fixture guard that exits 0 with clear message. | tools/scripts/test/allowed.js |
| high | docs-coverage-and-route-integrity-audit | docs.json references a missing route. Remap to existing canonical route or create the missing page. | docs.json |
| high | script-footprint-and-usage-audit | Large report artifact tracked in repository. Apply report retention policy and keep only concise latest summaries tracked. | tasks/reports/_legacy-unmanaged/browser-test-report-from-report.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/browser-test-report-from-report.json |
| high | script-footprint-and-usage-audit | Large report artifact tracked in repository. Apply report retention policy and keep only concise latest summaries tracked. | tasks/reports/_legacy-unmanaged/comprehensive-v2-pages-browser-audit.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/comprehensive-v2-pages-browser-audit.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-load-only-2026-02-19T00-16-02-816Z.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-2026-02-18T12-47-52-969Z.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-2026-02-18T12-47-52-969Z.md |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-clean-2026-02-18T13-25-11-482Z.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-load-audit-clean-2026-02-18T13-25-11-482Z.md |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-mintlify-route-audit-2026-02-19T00-27-37-914Z.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/docs-livepeer-org-v1-v2-path-exact-audit-2026-02-19T00-35-56-390Z.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/page-audit-1771297377437.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/page-audit-1771297377471.md |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/pages-to-test.json |
| high | cleanup-quarantine-manager | Cleanup candidate. Matched report-retention policy legacy unmanaged pattern. | tasks/reports/_legacy-unmanaged/ungenerated/20-automations-workflows-audit-report.md |
| high | script-footprint-and-usage-audit | Large report artifact tracked in repository. Apply report retention policy and keep only concise latest summaries tracked. | tasks/reports/quality-accessibility/v2-wcag-audit-report.json |
| high | script-footprint-and-usage-audit | Backup artifact tracked in repo. Classify with cleanup-quarantine-manager and quarantine from active tree. | tests/integration/browser.test.js.bak |
| high | cleanup-quarantine-manager | Cleanup candidate. Backup artifact should be quarantined from active tree. \| Backup extension artifact found and recommended for quarantine. | tests/integration/browser.test.js.bak |
| high | script-footprint-and-usage-audit | Backup artifact tracked in repo. Classify with cleanup-quarantine-manager and quarantine from active tree. | tests/integration/browser.test.js.bak2 |
| high | cleanup-quarantine-manager | Cleanup candidate. Backup artifact should be quarantined from active tree. \| Backup extension artifact found and recommended for quarantine. | tests/integration/browser.test.js.bak2 |
| high | script-footprint-and-usage-audit | Backup artifact tracked in repo. Classify with cleanup-quarantine-manager and quarantine from active tree. | tools/scripts/test-v2-pages.js.bak |
| high | cleanup-quarantine-manager | Cleanup candidate. Backup artifact should be quarantined from active tree. \| Backup extension artifact found and recommended for quarantine. | tools/scripts/test-v2-pages.js.bak |
| high | script-footprint-and-usage-audit | Backup artifact tracked in repo. Classify with cleanup-quarantine-manager and quarantine from active tree. | tools/scripts/test-v2-pages.js.bak2 |
| high | cleanup-quarantine-manager | Cleanup candidate. Backup artifact should be quarantined from active tree. \| Backup extension artifact found and recommended for quarantine. | tools/scripts/test-v2-pages.js.bak2 |
| high | cleanup-quarantine-manager | Cleanup candidate. Placeholder script is discoverable and should not stay in active script tree. | tools/scripts/test/allowed-script.js |
| high | cleanup-quarantine-manager | Cleanup candidate. Placeholder script is discoverable and should not stay in active script tree. | tools/scripts/test/allowed-test.js |
| high | cleanup-quarantine-manager | Cleanup candidate. Placeholder script is discoverable and should not stay in active script tree. | tools/scripts/test/allowed.js |
| high | docs-quality-and-freshness-audit | Coming Soon marker detected. Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. | v2/about/faq-about.mdx |
| high | component-layout-governance | Required section missing for page type. Add the required section heading or adjust page-type matching rules if classification is incorrect. | v2/about/index.mdx |
| high | docs-coverage-and-route-integrity-audit | Legacy /v2/pages path reference detected. Update to modern v2 route paths and rerun route/link audits. | v2/about/livepeer-network/actors.mdx |
| high | style-and-language-homogenizer-en-gb | Style/language profile pattern violation. Apply style-guide compliant pattern and rerun style/language checks. | v2/about/livepeer-network/actors.mdx |
| high | docs-coverage-and-route-integrity-audit | Legacy /v2/pages path reference detected. Update to modern v2 route paths and rerun route/link audits. | v2/about/livepeer-network/livepeer-actors/delegators.mdx |
| high | style-and-language-homogenizer-en-gb | Style/language profile pattern violation. Apply style-guide compliant pattern and rerun style/language checks. | v2/about/livepeer-network/livepeer-actors/delegators.mdx |
| high | docs-coverage-and-route-integrity-audit | Legacy /v2/pages path reference detected. Update to modern v2 route paths and rerun route/link audits. | v2/about/livepeer-network/livepeer-actors/gateways.mdx |
| high | style-and-language-homogenizer-en-gb | Style/language profile pattern violation. Apply style-guide compliant pattern and rerun style/language checks. | v2/about/livepeer-network/livepeer-actors/gateways.mdx |

