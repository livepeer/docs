# Colour Remediation Report

Generated: 2026-03-08T01:36:50.294Z

## Token Coverage Summary

| Status | Count | Action needed |
|--------|-------|--------------|
| Direct token match exists | 3 | Replace in Phase 2b |
| Close match (verify intent) | 2 | Human confirms before replacing |
| No token exists — new token needed | 6 | Add to style.css before Phase 2b |
| Deliberate hardcoded value (non-token) | 4 | Human decides: create token or exempt |

## Unique Banned Colour Values

| # | Value | Occurrences | Files | Existing token match | Proposed token | Action | Notes |
|---|-------|-------------|-------|---------------------|---------------|--------|-------|
| 1 | #00AEEF | 1 | socialLinks.jsx (1) | — | --lp-color-brand-forum | Human review: tokenise or exempt | Forum/social brand colour; decide between explicit brand token and exemption. |
| 2 | #18794E | 1 | steps.jsx (1) | var(--accent-dark) | --lp-color-accent-dark | Replace in Phase 2b | Exact match to the current dark accent token. |
| 3 | #3b82f6 | 1 | responseField.jsx (1) | — | --lp-color-response-field-value | Add token before Phase 2b | Highlighted response-field value colour. |
| 4 | #5865F2 | 1 | socialLinks.jsx (1) | — | --lp-color-brand-discord | Human review: tokenise or exempt | Discord brand colour; decide between explicit brand token and exemption. |
| 5 | #5965f3 | 1 | data.jsx (1) | — | --lp-color-brand-discord | Human review: tokenise or exempt | Discord brand colour; decide between explicit brand token and exemption. |
| 6 | #6b7280 | 1 | icons.jsx (1) | var(--muted-text) | --lp-color-icon-muted | Replace in Phase 2b | Muted icon colour currently managed outside root style.css. |
| 7 | #a1a1aa | 3 | icons.jsx (3) | var(--muted-text) | --lp-color-icon-muted | Verify intent before replacing | Muted icon colour currently managed outside root style.css. |
| 8 | #b636dd | 5 | previewCallouts.jsx (5) | — | --lp-color-callout-review | Add token before Phase 2b | Review callout accent colour. |
| 9 | #ef1a73 | 4 | previewCallouts.jsx (4) | — | --lp-color-callout-coming-soon | Add token before Phase 2b | Preview/coming-soon callout accent colour. |
| 10 | #f0f0f0 | 1 | socialLinks.jsx (1) | — | --lp-color-brand-github | Human review: tokenise or exempt | GitHub icon colour is currently hardcoded inside the social-links palette. |
| 11 | #fff | 11 | coingecko.jsx (6), icons.jsx (1), table.jsx (4) | var(--background), var(--button-text) | --lp-color-on-emphasis | Verify intent before replacing | Exact white exists today, but the semantic destination depends on whether usage is text, fill, or surface. |

## rgb/rgba Values

| # | Value | File:Line | Existing token match | Proposed token | Notes |
|---|-------|-----------|---------------------|---------------|-------|
| 1 | rgba(0, 0, 0, 0.5) | snippets/components/display/showcaseCards.jsx:636 | — | --lp-color-overlay-scrim | Black media overlay/scrim. |
| 2 | rgba(255,255,255,0.1) | snippets/components/content/data.jsx:349 | var(--background-highlight) | --lp-color-border-inverse-subtle | Semi-transparent white used as an inverse border or hint colour. |
| 3 | rgba(255,255,255,0.4) | snippets/components/display/showcaseCards.jsx:790 | — | --lp-color-border-inverse-subtle | Semi-transparent white used as an inverse border or hint colour. |
| 4 | rgba(255,255,255,0.5) | snippets/components/content/data.jsx:374 | — | --lp-color-border-inverse-subtle | Semi-transparent white used as an inverse border or hint colour. |

## !important Usage

| # | File:Line | Context | Can be removed? | Notes |
|---|-----------|---------|----------------|-------|
| 1 | snippets/components/content/data.jsx:529 | color: "var(--text) !important", | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 2 | snippets/components/content/responseField.jsx:34 | border-bottom: none !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 3 | snippets/components/content/responseField.jsx:35 | margin-bottom: -0.5rem !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 4 | snippets/components/content/responseField.jsx:64 | border-bottom: none !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 5 | snippets/components/content/responseField.jsx:65 | margin-bottom: -20px !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 6 | snippets/components/display/socialLinks.jsx:54 | border: none !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 7 | snippets/components/display/socialLinks.jsx:55 | border-bottom: none !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 8 | snippets/components/domain/SHARED/previewCallouts.jsx:20 | color: "var(--hero-text) !important", | Likely yes | Token value itself is valid; only specificity is the problem. |
| 9 | snippets/components/domain/SHARED/previewCallouts.jsx:88 | color: "var(--hero-text) !important", | Likely yes | Token value itself is valid; only specificity is the problem. |
| 10 | snippets/components/layout/steps.jsx:38 | background-color: ${resolvedIconColor} !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 11 | snippets/components/layout/steps.jsx:41 | color: ${resolvedTitleColor} !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |
| 12 | snippets/components/layout/steps.jsx:44 | background-color: ${resolvedLineColor} !important; | Likely yes | Specificity override should be reworked before Phase 2b token cleanup. |

## New Tokens Needed (Proposed Additions to style.css)

| Token name | Light value | Dark value | Used by | Category |
|-----------|-------------|-----------|---------|----------|
| --lp-color-border-inverse-subtle | rgba(255,255,255,0.4) | rgba(255,255,255,0.4) | showcaseCards.jsx, data.jsx, video.jsx, cards.jsx | Border / inverse |
| --lp-color-brand-discord | #5865F2 | #5865F2 | socialLinks.jsx, data.jsx | Brand / third-party |
| --lp-color-brand-forum | #00AEEF | #00AEEF | socialLinks.jsx | Brand / third-party |
| --lp-color-brand-github | #f0f0f0 | #f0f0f0 | socialLinks.jsx | Brand / third-party |
| --lp-color-callout-coming-soon | #ef1a73 | #ef1a73 | previewCallouts.jsx | UI / callout |
| --lp-color-callout-review | #b636dd | #b636dd | previewCallouts.jsx | UI / callout |
| --lp-color-overlay-scrim | rgba(0, 0, 0, 0.5) | rgba(0, 0, 0, 0.5) | showcaseCards.jsx, video.jsx | Overlay |
| --lp-color-response-field-value | #3b82f6 | #3b82f6 | responseField.jsx | UI / response-field |

## Deliberate Hardcoded Values (Exemption Candidates)

| Value | File | Context | Recommendation |
|-------|------|---------|---------------|
| #00AEEF | snippets/components/display/socialLinks.jsx | github: color ? color : "#f0f0f0", forum: color ? color : "#00AEEF", website: color ? color : "var(--accent)", | Prefer --lp-color-brand-forum for consistency, or explicitly exempt this brand colour. |
| #5865F2 | snippets/components/display/socialLinks.jsx | `const colors = { discord: color ? color : "#5865F2", twitter: color ? color : "var(--hero-text)",` | Prefer --lp-color-brand-discord for consistency, or explicitly exempt this brand colour. |
| #5965f3 | snippets/components/content/data.jsx | `> <Icon icon="discord" color="#5965f3" /> <span style={{ fontWeight: 600, color: "var(--accent)" }}>` | Prefer --lp-color-brand-discord for consistency, or explicitly exempt this brand colour. |
| #f0f0f0 | snippets/components/display/socialLinks.jsx | twitter: color ? color : "var(--hero-text)", github: color ? color : "#f0f0f0", forum: color ? color : "#00AEEF", | Prefer --lp-color-brand-github for consistency, or explicitly exempt this brand colour. |

## Decision Required Before Phase 2b

1. Review the proposed `--lp-*` token names and confirm any brand-token exemptions.
2. Review every close-match replacement where the current value could map to more than one legacy token.
3. Review every `!important` instance and decide whether Phase 2b removes it or defers it.
4. Add any approved new root tokens to `style.css` before bulk colour replacement begins.
