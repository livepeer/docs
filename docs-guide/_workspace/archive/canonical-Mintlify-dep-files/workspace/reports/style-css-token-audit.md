# style.css Token Audit

Generated: 2026-03-08T01:36:50.294Z
File: style.css

## Token Inventory

| # | Token | Light value | Dark value | Category | Used by components? |
|---|-------|------------|-----------|----------|-------------------|
| 1 | --accent | #3cb540 | #2b9a66 | colour | Yes — 21 components |
| 2 | --accent-dark | #18794e | #18794e | colour | Yes — 2 components |
| 3 | --hero-text | #181c18 | #e0e4e0 | colour | Yes — 6 components |
| 4 | --text | #717571 | #a0a4a0 | colour | Yes — 8 components |
| 5 | --muted-text | #9ca3af | #6b7280 | colour | Yes — 3 components |
| 6 | --background | #ffffff | #0d0d0d | colour | Yes — 5 components |
| 7 | --card-background | #f9fafb | #1a1a1a | colour | Yes — 7 components |
| 8 | --border | #e5e7eb | #333333 | colour | Yes — 14 components |
| 9 | --button-text | #ffffff | #ffffff | colour | Yes — 2 components |
| 10 | --background-highlight | — | rgba(255, 255, 255, 0.1) | colour | No — unused |

## Summary

| Category | Token count | Used by components | Unused |
|----------|-------------|-------------------|--------|
| Colour | 10 | 9 | 1 |
| Spacing | 0 | 0 | 0 |
| Typography | 0 | 0 | 0 |
| Other | 0 | 0 | 0 |

## Namespace Analysis

| Current prefix | Count | Proposed --lp-* equivalent |
|---------------|-------|---------------------------|
| --accent* | 2 | --lp-color-accent* |
| --background* | 2 | --lp-color-surface-* |
| --border* | 1 | --lp-color-border* |
| --button-* | 1 | --lp-color-button-* |
| --card-* | 1 | --lp-color-surface-* |
| --hero-* | 1 | --lp-color-hero-* |
| --muted-* | 1 | --lp-color-text-* |
| --text* | 1 | --lp-color-text-* |

## Gaps

| Needed token | Required by | Current hardcoded value |
|-------------|-------------|------------------------|
| --background-dark | showcaseCards.jsx | — |
| --lp-color-border-inverse-subtle | showcaseCards.jsx, data.jsx, video.jsx, cards.jsx | rgba(255,255,255,0.4) |
| --lp-color-brand-discord | socialLinks.jsx, data.jsx | #5865F2 |
| --lp-color-brand-forum | socialLinks.jsx | #00AEEF |
| --lp-color-brand-github | socialLinks.jsx | #f0f0f0 |
| --lp-color-callout-coming-soon | previewCallouts.jsx | #ef1a73 |
| --lp-color-callout-review | previewCallouts.jsx | #b636dd |
| --lp-color-overlay-scrim | showcaseCards.jsx, video.jsx | rgba(0, 0, 0, 0.5) |
| --lp-color-response-field-value | responseField.jsx | #3b82f6 |
| --p-icon-color | frameMode.jsx | — |
| --page-header-description-color | Portals.jsx | — |
| --text-muted | showcaseCards.jsx | — |
| --text-primary | Portals.jsx | — |
| --text-secondary | data.jsx, video.jsx | — |
