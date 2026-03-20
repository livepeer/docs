# V2 WCAG Accessibility Audit Report

- Timestamp: 2026-03-16T15:09:41.536Z
- Mode: full
- WCAG Profile: WCAG 2.2 AA
- Fail Threshold: serious
- Base URL: (none / static-only run)
- Fix Enabled (default): no
- Max Browser Pages: 0

## Summary

- Files scanned: 372
- Browser target pages: 0
- Browser-audited pages: 0
- Static-only files: 372
- WCAG violations: 0
- Best-practice violations (advisory): 0
- Incomplete/manual-review results: 0
- Static findings still open: 2
- Static findings auto-fixed: 0
- Autofix edits applied: 0
- Runtime/navigation failures (ignored): 0
- Blocking WCAG/static issues (>= serious): 0

## Blocking Issues

_No blocking issues found at configured threshold._

## Top Rules And Suggestions

- **raw-iframe-missing-title** (1) - Add a descriptive title attribute (for example: `Embedded content from explorer-arbitrum-one-git-feat-add-g-10dba1-livepeer-foundation.vercel.app`).
- **raw-iframe-missing-title** (1) - Add a descriptive title attribute (for example: `Embedded content from tools.livepeer.cloud`).

## Autofixes Applied

_No autofixes applied._

## Static-Only Findings

- `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`:154 [moderate] raw-iframe-missing-title - Raw IFRAME is missing a title attribute.
- `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`:186 [moderate] raw-iframe-missing-title - Raw IFRAME is missing a title attribute.

## Runtime/Navigation Failures

_No runtime/navigation failures recorded._

## Notes

- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard, screen-reader UX, content meaning, and task flows).
- Advisory-only WCAG rules (non-blocking): color-contrast.
- Best-practice findings are reported separately as advisory and are not blocking by default.
- Default autofix only applies conservative raw-tag attribute insertions (iframe title, img alt, empty/icon-only anchor aria-label).
