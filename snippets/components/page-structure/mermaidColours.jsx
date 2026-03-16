/**
 * @component MermaidColours
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Centralised colour definitions for Mermaid diagrams. Mermaid requires literal colour values and does not support CSS custom properties.
 * @contentAffinity concept, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-16
 * @example
 * MermaidColours.mermaid.light.primaryColor
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
