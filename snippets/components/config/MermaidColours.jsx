/**
 * @component MermaidColours
 * @category config
 * @subcategory  config
 * @status stable
 * @description Theme colour definitions for Mermaid diagrams (light/dark/CSS variable mappings).
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-03-29
 */
export const MermaidColours = {
  font: {
    inter: "Inter, 'Inter Fallback', -apple-system, system-ui",
  },
  light: {
    accent: '#3CB540',
    accentDark: '#18794E',
    heroText: '#181C18',
    text: '#717571',
    mutedText: '#9ca3af',
    background: '#ffffff',
    cardBackground: '#f9fafb',
    border: '#e5e7eb',
    buttonText: '#ffffff',
  },
  dark: {
    accent: '#2b9a66',
    accentDark: '#18794E',
    heroText: '#E0E4E0',
    text: '#A0A4A0',
    mutedText: '#6b7280',
    background: '#0d0d0d',
    cardBackground: '#1a1a1a',
    border: '#333333',
    buttonText: '#ffffff',
  },
  mermaid: {
    light: {
      primaryColor: '#3CB540',
      primaryTextColor: '#181C18',
      primaryBorderColor: '#18794E',
      lineColor: '#3CB540',
      secondaryColor: '#f9fafb',
      tertiaryColor: '#6bbf59',
      background: '#ffffff',
      fontFamily: "Inter, 'Inter Fallback', -apple-system, system-ui",
    },
    dark: {
      primaryColor: '#2b9a66',
      primaryTextColor: '#E0E4E0',
      primaryBorderColor: '#18794E',
      lineColor: '#2b9a66',
      secondaryColor: '#1a1a1a',
      tertiaryColor: '#3CB540',
      background: '#0d0d0d',
      fontFamily: "Inter, 'Inter Fallback', -apple-system, system-ui",
    },
  },
  // Sanctioned multi-colour palette for diagram NODE classes (mermaid classDef/style).
  // Flowcharts colour-code node categories (input, process, success, warning, etc.); the
  // single-accent theme above cannot express that. Each family pairs a light fill with a
  // dark stroke/text (and the dark-mode inverse). These hexes are governed: check-component-props
  // greps every hex in this file into its allowed set. Add a colour here before using it in a
  // diagram — do not introduce ad-hoc hexes.
  diagram: {
    // Brand green — the de-facto diagram stroke used across the repo (near-miss of #2b9a66).
    green: { stroke: '#2d9a67', fillDark: '#04342c', fillLight: '#e1f5ee', strokeDeep: '#0f6e56' },
    // Blue — input / external / data-source nodes.
    blue: { base: '#3b82f6', strong: '#0b66ff', deep: '#0a4cc6', text: '#185fa5', fillDark: '#042c53', fillLight: '#e6f1fb' },
    // Indigo / violet — protocol / on-chain nodes.
    indigo: { base: '#534ab7', deep: '#3c3489', darkest: '#26215c', fillLight: '#eeedfe', fillLightest: '#f6f0ff' },
    // Purple — AI / inference nodes.
    purple: { base: '#a855f7' },
    // Amber / gold — warning / attention / payment nodes.
    amber: { base: '#f59e0b', soft: '#fbbf24', text: '#854f0b', deep: '#412402', fillLight: '#faeeda', fillLightest: '#fffae6' },
    // Olive — secondary highlight.
    olive: { text: '#8a7a0a', deep: '#3d3a0a' },
    // Pink / magenta — emphasis / off-path nodes.
    pink: { text: '#993556', deep: '#4b1528', fillLight: '#fbeaf0', fillLightest: '#faece7' },
    // Rust / orange — error / failure-path nodes.
    rust: { text: '#993c1d', deep: '#4a1b0c' },
    // Teal / forest — success / completed nodes.
    teal: { text: '#3b6d11', deep: '#173404', darkest: '#0b1f17', fillLight: '#eaf3de' },
    // Neutral grey — disabled / muted nodes.
    neutral: { base: '#71717a', text: '#5f5e5a', fillDark: '#2c2c2a', fillLight: '#f1efe8' },
  },
  css: {
    accent:
      ':root { --theme-accent: #3CB540; } .dark { --theme-accent: #2b9a66; }',
    accentDark:
      ':root { --theme-accent-dark: #18794E; } .dark { --theme-accent-dark: #18794E; }',
    heroText:
      ':root { --theme-hero-text: #181C18; } .dark { --theme-hero-text: #E0E4E0; }',
    text: ':root { --theme-text: #717571; } .dark { --theme-text: #A0A4A0; }',
    mutedText:
      ':root { --theme-muted-text: #9ca3af; } .dark { --theme-muted-text: #6b7280; }',
    background:
      ':root { --theme-background: #ffffff; } .dark { --theme-background: #0d0d0d; }',
    cardBackground:
      ':root { --theme-card-background: #f9fafb; } .dark { --theme-card-background: #1a1a1a; }',
    border:
      ':root { --theme-border: #e5e7eb; } .dark { --theme-border: #333333; }',
    buttonText:
      ':root { --theme-button-text: #ffffff; } .dark { --theme-button-text: #ffffff; }',
  },
}

// NOTE: DO NOT USE OUTSIDE MERMAID - use style.css colours.
// This file centralizes literal theme colors for Mermaid diagrams because Mermaid
// does not support CSS custom properties such as var(--...).

/* Colors Used In this repo
3CB540 - Jade Green
2b9a66 - Light Green
18794E - Dark Green

Complementary Greens
See https://coolors.co/004225-1a794e-08a045-3cb540-62ba4f
004225 - Deep Forrest
1A794E - Turf Green
08A045 - Medium Jungle
3CB540 - Jade Green
6BBF59 - Moss Green

See https://coolors.co/0c0c0c-073b3a-1a794e-08a045-6bbf59
0C0C0C - Onyx Black
073B3A - Dark Teal
1A794E - Turf Green
08A045 - Medium Jungle
6BBF59 - Moss Green

See https://coolors.co/fffffa-073b3a-1a794e-08a045-6bbf59
FFFFFA - Porcelain
073B3A - Dark Teal
1A794E - Turf Green
08A045 - Medium Jungle
6BBF59 - Moss Green

Pink Offset Colour
See https://coolors.co/073b3a-1a794e-f61067-08a045-6bbf59
F61067 - Razzmatazz Pink
073B3A - Dark Teal
1A794E - Turf Green
08A045 - Medium Jungle
6BBF59 - Moss Green
*/

// Theme Colors, Fonts
// Used for frame mode (which STRIPS styling in Palm theme)
// Mintlify is really limited in so many many ways)
// Seriously just add a bloody theme config already
