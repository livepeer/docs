# V2 WCAG Accessibility Audit Report

- Timestamp: 2026-05-19T06:28:18.310Z
- Mode: full
- WCAG Profile: WCAG 2.2 AA
- Fail Threshold: serious
- Base URL: (none / static-only run)
- Fix Enabled (default): no
- Max Browser Pages: unlimited

## Summary

- Files scanned: 650
- Browser target pages: 650
- Browser-audited pages: 0
- Static-only files: 650
- WCAG violations: 0
- Best-practice violations (advisory): 0
- Incomplete/manual-review results: 0
- Static findings still open: 1
- Static findings auto-fixed: 0
- Autofix edits applied: 0
- Runtime/navigation failures (ignored): 650
- Blocking WCAG/static issues (>= serious): 1
- Browser audit completion: incomplete (0/650)

## Blocking Issues

- `v2/resources/documentation-guide/copy-style/style-guide.mdx` [serious] raw-img-missing-alt (line 505): Raw <img> is missing an alt attribute.

## Top Rules And Suggestions

- **raw-img-missing-alt** (1) - Add an `alt` attribute. Use meaningful descriptive text, or `alt=""` only when the image is purely decorative.

## Autofixes Applied

_No autofixes applied._

## Static-Only Findings

- `v2/resources/documentation-guide/copy-style/style-guide.mdx`:505 [serious] raw-img-missing-alt - Raw <img> is missing an alt attribute.

## Runtime/Navigation Failures

- 650× Browser infrastructure error: Server failed to start (examples: `v2/about/concepts/about-livepeer.mdx`, `v2/about/concepts/actors-and-capabilities.mdx`, `v2/about/concepts/governance-and-economics.mdx`, `v2/about/concepts/livepeer-stack.mdx`, `v2/about/guides/builders-guide.mdx`)

## Notes

- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard, screen-reader UX, content meaning, and task flows).
- Advisory-only WCAG rules (non-blocking): color-contrast.
- Best-practice findings are reported separately as advisory and are not blocking by default.
- Default autofix only applies conservative raw-tag attribute insertions (iframe title, img alt, empty/icon-only anchor aria-label).
