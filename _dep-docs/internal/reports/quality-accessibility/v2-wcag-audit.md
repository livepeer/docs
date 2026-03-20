---
title: 'V2 WCAG Audit Report'
sidebarTitle: 'WCAG Audit'
description: 'Generated WCAG audit report from tests/integration/v2-wcag-audit.js.'
keywords: ["livepeer","internal","reports","quality-accessibility","v2-wcag-audit"]
og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"
---
Last Generated (UTC ISO): `2026-03-01T04:39:53.754Z`
Last Generated (UTC Human): `March 01, 2026 04:39 UTC`
Generator Script: `tests/integration/v2-wcag-audit.js`
What It Does: Audit v2 docs.json navigation pages for accessibility (WCAG 2.2 AA) with deterministic reports and conservative source autofixes.
Audited Scope: `tests/integration, tests/utils, tasks/reports, v2`
Outputs:
- tasks/reports/quality-accessibility/v2-wcag-audit-report.md (default full/manual report)
- tasks/reports/quality-accessibility/v2-wcag-audit-report.json (default full/manual report)
- Console summary
- v2/*.mdx or v2/*.md changes only when --fix (default) applies conservative autofixes
# V2 WCAG Accessibility Audit Report

- Timestamp: 2026-02-28T10:20:34.581Z
- Mode: full
- WCAG Profile: WCAG 2.2 AA
- Fail Threshold: serious
- Base URL: http://localhost:3145
- Fix Enabled (default): yes
- Max Browser Pages: unlimited

## Summary

- Files scanned: 342
- Browser target pages: 342
- Browser-audited pages: 339
- Static-only files: 3
- WCAG violations: 719
- Best-practice violations (advisory): 771
- Incomplete/manual-review results: 353
- Static findings still open: 0
- Static findings auto-fixed: 0
- Autofix edits applied: 0
- Runtime/navigation failures (ignored): 3
- Blocking WCAG/static issues (at or above serious): 41
- Browser audit completion: incomplete (339/342)

## Blocking Issues

- `v2/about/livepeer-protocol/core-mechanisms.mdx` [serious] nested-interactive: Interactive controls must not be nested
- `v2/about/resources/livepeer-whitepaper.mdx` [critical] aria-valid-attr-value: ARIA attributes must conform to valid values
- `v2/community/livepeer-community/livepeer-latest-topics.mdx` [serious] frame-title: Frames must have an accessible name
- `v2/community/livepeer-community/trending-topics.mdx` [serious] frame-title: Frames must have an accessible name
- `v2/developers/technical-references/awesome-livepeer.mdx` [critical] aria-valid-attr-value: ARIA attributes must conform to valid values
- `v2/gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx` [critical] aria-valid-attr-value: ARIA attributes must conform to valid values
- `v2/home/mission-control.mdx` [critical] aria-valid-attr-value: ARIA attributes must conform to valid values
- `v2/internal/overview/about.mdx` [serious] target-size: All touch targets must be 24px large, or leave sufficient space
- `v2/internal/reports/navigation-links/v2-link-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/quality-accessibility/audit-v2-usefulness.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-scripts.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--errors-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--plan-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--plan-complete-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--plan-migration-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--plan-retrospective-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--plan-rfp-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-docs-index-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-legacy-unmanaged-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-legacy-unmanaged-ungenerated-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-navigation-links-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-page-audits-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-full-run-2026-02-23-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke2-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke3-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-repo-ops-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/internal/reports/repo-ops/audit-tasks-folders--reports-rfp-deliverable-i-r1-r15-2026-02-24-replan-audit.md` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/platforms/livepeer-studio/api-reference/assets/delete.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/multistream/delete.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/multistream/update.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/rooms/delete.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/rooms/remove-user.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/streams/delete.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/livepeer-studio/api-reference/streams/update.mdx` [critical] button-name: Buttons must have discernible text
- `v2/platforms/product-hub.mdx` [serious] target-size: All touch targets must be 24px large, or leave sufficient space
- `v2/resources/documentation-guide/component-library/display.mdx` [serious] scrollable-region-focusable: Scrollable region must have keyboard access
- `v2/resources/documentation-guide/contribute-to-the-docs.mdx` [critical] label: Form elements must have labels

## Top Rules And Suggestions

- **color-contrast** (339) - Adjust foreground/background colors to meet WCAG contrast minimums; avoid relying on color alone.
- **meta-viewport** (339) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.
- **scrollable-region-focusable** (24) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.
- **button-name** (7) - Give interactive controls a visible label or accessible name.
- **aria-valid-attr-value** (4) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.
- **frame-title** (2) - Add a descriptive `title` to each iframe so screen-reader users can identify embedded content.
- **target-size** (2) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.
- **label** (1) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.
- **nested-interactive** (1) - Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.

## Autofixes Applied

_No autofixes applied._

## Static-Only Findings

_No open static-only findings._

## Runtime/Navigation Failures

- 2× Mint not-found shell detected (likely URL/path mapping mismatch for this page). (examples: `v2/internal/overview/docs-philosophy.mdx`, `v2/internal/reports/repo-ops/audit-tasks-folders--scripts-audit.md`)
- 1× Navigation timeout of 30000 ms exceeded (examples: `v2/internal/rfp/aims.mdx`)

## Notes

- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard, screen-reader UX, content meaning, and task flows).
- Advisory-only WCAG rules (non-blocking): color-contrast.
- Best-practice findings are reported separately as advisory and are not blocking by default.
- Default autofix only applies conservative raw-tag attribute insertions (iframe title, img alt, empty/icon-only anchor aria-label).
