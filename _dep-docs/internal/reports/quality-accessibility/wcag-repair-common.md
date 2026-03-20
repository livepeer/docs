---
title: 'WCAG Repair Common Report'
sidebarTitle: 'WCAG Repair'
description: 'Generated WCAG repair report from tools/scripts/wcag-repair-common.js.'
keywords: ["livepeer","internal","reports","quality-accessibility","wcag-repair-common"]
og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"
---
Last Generated (UTC ISO): `2026-03-01T04:39:53.754Z`
Last Generated (UTC Human): `March 01, 2026 04:39 UTC`
Generator Script: `tools/scripts/wcag-repair-common.js`
What It Does: Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports.
Audited Scope: `tools/scripts, tests/integration, tasks/reports, v2`
Outputs:
- tasks/reports/quality-accessibility/v2-wcag-repair-common-report.md (default)
- tasks/reports/quality-accessibility/v2-wcag-repair-common-report.json (default)
- v2/*.mdx or v2/*.md changes when --fix (default) applies conservative autofixes
# V2 WCAG Accessibility Audit Report

- Timestamp: 2026-02-26T13:52:14.527Z
- Mode: full
- WCAG Profile: WCAG 2.2 AA
- Fail Threshold: serious
- Base URL: (none / static-only run)
- Fix Enabled (default): yes
- Max Browser Pages: 0

## Summary

- Files scanned: 453
- Browser target pages: 0
- Browser-audited pages: 0
- Static-only files: 453
- WCAG violations: 0
- Best-practice violations (advisory): 0
- Incomplete/manual-review results: 0
- Static findings still open: 0
- Static findings auto-fixed: 9
- Autofix edits applied: 9
- Runtime/navigation failures: 0
- Blocking issues (at or above serious) + runtime failures: 0

## Blocking Issues

_No blocking issues found at configured threshold._

## Top Rules And Suggestions

_No suggestions generated._

## Autofixes Applied

- `v2/developers/builder-opportunities/dev-programs.mdx`:15 - raw-iframe-missing-title -> added title="Embedded content from livepeer.org" (review suggested)
- `v2/developers/developer-guide.mdx`:17 - raw-iframe-missing-title -> added title="Embedded content from livepeer.org" (review suggested)
- `v2/developers/technical-references/deepwiki.mdx`:30 - raw-iframe-missing-title -> added title="Embedded content from deepwiki.com" (review suggested)
- `v2/gateways/about-gateways/gateway-explainer.mdx`:335 - raw-iframe-missing-title -> added title="Embedded content from cdn.jsdelivr.net" (review suggested)
- `v2/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx`:125 - raw-iframe-missing-title -> added title="Embedded content from docs.arbitrum.io" (review suggested)
- `v2/home/about-livepeer/ecosystem.mdx`:293 - raw-iframe-missing-title -> added title="Embedded content from imgflip.com" (review suggested)
- `v2/internal/ally-notes.mdx`:179 - raw-iframe-missing-title -> added title="Embedded content from cdn.jsdelivr.net" (review suggested)
- `v2/platforms/embody/overview.mdx`:22 - raw-iframe-missing-title -> added title="Embedded content from embody.zone" (review suggested)
- `v2/resources/documentation-guide/style-guide.mdx`:680 - raw-img-missing-alt -> added alt="Image" (review suggested)

## Static-Only Findings

_No open static-only findings._

## Runtime / Navigation Failures

_No runtime/navigation failures._

## Notes

- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard, screen-reader UX, content meaning, and task flows).
- Best-practice findings are reported separately as advisory and are not blocking by default.
- Default autofix only applies conservative raw-tag attribute insertions (iframe title, img alt, empty/icon-only anchor aria-label).
