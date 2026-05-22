# Review: frontend-core-web.mdx (applications)

**Page**: `v2/developers/build/applications/frontend-core-web.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 3,670
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 9) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: reference` (line 7) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `integrate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Framework-agnostic video playback with hls.js..." — subject-first |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `hls.js`, `HLS`, `vanilla JavaScript`, `Vue`, `Svelte`, `framework-agnostic` |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "Every Livepeer stream and asset produces a standard HLS manifest URL..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Every Livepeer stream...", "Safari supports HLS natively..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | HLS, hls.js used in context |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference |
| 2. Voice | 2.D2 | API/method has code or link | PASS | hls.js methods shown with code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install hls.js` (line 41) — unpinned |
| 2. Voice | 2.D4 | Errors in main | PASS | Error recovery shown in main code (lines 58-71) — NETWORK_ERROR, MEDIA_ERROR handled |
| 2. Voice | 2.D5 | No prose explaining self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | See heading table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Core Web (hls.js)" — domain-anchored |
| 3. Headings | 3.7 | Expert editorial | MIXED | "HLS.js Integration" duplicates the library name; "Vue example" is OK but framework-specific |
| 3. Headings | 3.8 | pageType naming style | PASS | reference: literal/findability |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose statement | PASS | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose (line 132) routes to React Player + video overview |
| 4. Structure | 4.4 | No dead ends | MIXED | |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | Implicit: a playbackId; not stated |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Routes React readers to sibling pages |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | |
| 4. Structure | 4.11 | Discord test | PASS | Answers "how do I play Livepeer HLS in Vue?" |
| 4. Structure | 4.12 | Page size | PASS | 3.7 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Safari-native vs hls.js trade-off named (line 73, 116); no Vue vs Svelte vs Angular trade-off |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash, html, vue, html tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states in main | PASS | NETWORK_ERROR, MEDIA_ERROR handled inline (good) |
| 4. Structure | 4.20 | API has code | PASS | |
| 5. Layout | 5.1 | Correct template | PASS | reference |
| 5. Layout | 5.2 | Required sections present | MIXED | Reference template wants `<StyledTable>` for structured data — page has none. Has 3 H2s, no Related Pages |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Three framework integrations (HLS.js, Vue, Native) sit as separate H2s — should be `<Tabs>` per check 5.18 |
| 5. Layout | 5.6 | MDX renders clean | MIXED | Line 51 `const src = \`https://livepeercdn.studio/hls/\${playbackId}/index.m3u8\`;` uses escaped backticks; line 100 same pattern; line 122 `https://livepeercdn.studio/hls/{playbackId}/index.m3u8` shows `{playbackId}` literal which is OK as placeholder |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | FAIL | Three framework variants (HLS.js, Vue, Native video) as separate H2s — should be `<Tabs>` per check 5.14 (1D variant = Tabs) |
| 5. Layout | 5.15 | Data imports used | MIXED | livepeercdn.studio URL hardcoded multiple times |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Closing prose paragraph (line 132) instead of Related Pages block |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block |
| 5. Layout | 5.18 | Tab icon prop | FAIL | No Tabs used — but multi-framework content begs Tabs with `icon="js"` / `icon="vuejs"` / `icon="code"` |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 4 code blocks (lines 40, 44, 86, 120) lack `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards | N/A | |
| 5. Layout | 5.23 | StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening + between H2s present; final divider (line 130) precedes prose |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Safari has native HLS support" — uncited but well-known; "iOS Safari, macOS Safari" — no source for full compatibility |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED labels |
| 6. Veracity | 6.3 | No deprecated API | PASS | hls.js v1.x current |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | hls.js not pinned |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | hls.js not linked; HLS spec not linked |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2622 |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | PASS | |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | React Player + video overview linked |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | MIXED | Escaped backticks on lines 51 and 100 will render literally |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | Vue + Native + HLS.js |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Error recovery shown; full integration shown |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | MIXED | JS + Vue; no Svelte or Angular despite description claim |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Core Web (hls.js)" | PASS | |
| sidebarTitle | Yes | "Core Web" | PASS | |
| description | Yes | "Framework-agnostic video playback..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-15 | PASS | |
| status | Yes | current | FAIL | Drop |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Final divider precedes prose |
| `<Tabs>` / `<Tab icon>` | No | REQUIRED for multi-framework | Yes | Three frameworks as separate H2s should be `<Tabs>` per check 5.14+5.18 |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Missing |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code with icon + title | No | Required | — | All 4 blocks lack both |
| `<Tip>` | Yes (line 29) | — | — | Header CTA |
| `<Accordion>` | No | Recommended for FAQ | — | "Safari native vs hls.js trade-offs" + "Common HLS errors" candidates |
| `<StyledTable>` | No | — | — | Browser-compat table candidate |
| `<CenteredContainer>` | Yes (line 28) | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: livepeercdn.studio URL pattern appears across 4 sibling pages — candidate for data module.
- **LINK GAPS**:
  - hls.js — not linked to https://github.com/video-dev/hls.js or hlsjs-pages.
  - HLS RFC 8216 — not linked.
  - "AVPlayer on iOS, ExoPlayer on Android" — not mentioned here but parallel sibling browser-and-mobile.mdx mentions both; no cross-link.
  - "Svelte" and "Angular" in description but no example for either; reader is told they're supported but not shown.
- **STRANDED**: Reader using Svelte or Angular told the URL is standard but no per-framework gotchas covered (Svelte 5 runes, Angular destroy lifecycle).

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | (livepeercdn.studio domain) |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| HLS.js Integration | 4 | 3 | 4 | 5 | 4 | 20 |
| Vue example | 3 | 2 | 4 | 5 | 5 | 19 — borderline FAIL |
| Native video element | 5 | 3 | 5 | 5 | 4 | 22 |

"Vue example" lacks domain anchor — "HLS in Vue" or "Vue integration" would score higher.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 40 | bash | ✗ | ✗ | NOT-TESTED | Missing `icon="terminal"` + `title="install.sh"` |
| 44 | html | ✗ | ✗ | NOT-TESTED | Missing `icon="html5"` + `title="player.html"`. Line 51 contains escaped backticks `\`https://...\``  |
| 86 | vue | ✗ | ✗ | NOT-TESTED | Missing `icon="vuejs"` + `title="VideoPlayer.vue"`. Line 100 same escaped-backtick pattern |
| 120 | html | ✗ | ✗ | NOT-TESTED | Missing `icon="html5"` + `title="native-video.html"`. Line 122 uses `{playbackId}` literal placeholder, OK |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Description claims framework-agnostic with Vue, Svelte, Angular, vanilla JS — body only shows JS and Vue. A Svelte or Angular developer arriving here is told their framework is supported but given no code. The page promises more than it delivers.
- **Fix step:** Add Svelte and Angular examples inside a `<Tabs>` block with `<Tab title="Vanilla" icon="js">` (current), `<Tab title="Vue" icon="vuejs">` (current), `<Tab title="Svelte" icon="code">` (new), `<Tab title="Angular" icon="angular">` (new). Each tab 15-line snippet that mounts hls.js correctly with cleanup.
- **Source/exemplar:** hls.js examples folder; framework-specific lifecycle patterns.

### Layer 2 — Composition
- **Gap:** Three framework integrations rendered as three sequential H2 sections — perfect `<Tabs>` candidate per check 5.14 (1D variant = Tabs). Code blocks lack `icon` + `title`. Escaped-backtick template literals on lines 51 and 100 will render literally. No Related Pages footer. No `<StyledTable>` for browser-compat.
- **Fix step:** (a) Restructure HLS.js Integration + Vue example + Native video element into a single `<Tabs>` with framework-specific tabs. (b) Add `icon` + `title` to all 4 code blocks. (c) Fix escaped backticks on lines 51 and 100. (d) Add EOF Related Pages. (e) Add §"Browser support" with a `<StyledTable>` showing native HLS vs hls.js coverage.
- **Source/exemplar:** check 5.14+5.18+5.6+5.20; sibling React Player + Broadcast pages for `<Tabs>` exemplar.

### Layer 3 — Cross-page integration
- **Gap:** hls.js not linked to its repo. HLS RFC not linked. No cross-link to the browser-and-mobile sibling for the React Native angle. No cross-link to the React Player sibling for the rich React variant. No cross-tab graduation.
- **Fix step:** (a) Add inline link on line 34: "...hls.js is the standard library ([github.com/video-dev/hls.js](https://github.com/video-dev/hls.js))." (b) Link "standard HLS manifest" on line 34 to RFC 8216. (c) Add EOF Related Pages with: Player sibling, Broadcast sibling, browser-and-mobile sibling (for React Native), `livepeer/ui-kit` repo, plus cross-tab to `/v2/about/network/architecture` (LL-HLS) and `/v2/solutions/managed-gateway`.
- **Source/exemplar:** hls.js repo; RFC 8216.

### Layer 4 — Veracity and source authority
- **Gap:** hls.js not pinned. No TESTED labels. "Safari has native HLS support" claim not cited (well-known but should be anchored). "iOS Safari, macOS Safari" support claim not cited.
- **Fix step:** (a) Pin `npm install hls.js@^1.5` (or current major). (b) Add TESTED comments to each code block. (c) Cite Safari HLS-native support to MDN HTMLMediaElement docs or Apple HLS docs. (d) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** MDN HTMLVideoElement docs; Apple HLS authoring guide.

### Layer 5 — Product-forward depth
- **Gap:** No browser-compat table. No bundle-size note for hls.js (≈100KB) vs native `<video>` (0KB). No discussion of LL-HLS support (hls.js supports it; native varies). No mention of token-gated playback. No DRM note. No SSR caveats for Vue/Svelte. No `react-native-video` cross-link.
- **Fix step:** Add §"Trade-offs and browser support" with bullets: "Native `<video>` works in Safari + iOS Safari + macOS Safari without JS", "hls.js adds ~100KB but works in Chrome/Firefox/Edge", "LL-HLS support varies — confirm against your stream pipeline". Add §"What this page doesn't cover" with links: token-gating, DRM, React Native (sibling page), React Player (sibling page). Add `<Badge>Pattern documented</Badge>` near header CTA.
- **Source/exemplar:** hls.js README features list; `.claude/references/layout/exemplars.md`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4-1.8, 5.7)
2. Three frameworks as separate H2s — should be `<Tabs>` per check 5.14+5.18
3. Escaped backticks on lines 51 and 100 (`\`https://...\``) will render literally — MDX rendering bug
4. No Related Pages footer; closing prose (line 132) violates 5.16+5.17. Zero cross-tab (4.10, 7.6)
5. All 4 code blocks missing `icon` + `title` per check 5.20

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: integrate`, `complexity: beginner`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 7-10 | HIGH | S | check 1.1+5.7 |
| 2 | Restructure HLS.js Integration + Vue example + Native video element into a single `<Tabs>` block with `<Tab title="Vanilla" icon="js">`, `<Tab title="Vue" icon="vuejs">`, `<Tab title="Native" icon="apple">`, and ideally `<Tab title="Svelte" icon="code">` and `<Tab title="Angular" icon="angular">` | 38-128 | HIGH | L | check 5.14+5.18; layer 2 |
| 3 | Fix escaped backticks on line 51 and line 100: replace `\`https://livepeercdn.studio/hls/\${...}/index.m3u8\`` with literal `` `https://livepeercdn.studio/hls/${...}/index.m3u8` `` | 51, 100 | HIGH | S | check 5.6+8.5 |
| 4 | Add `icon="terminal"` + `title="install.sh"` to bash (line 40); `icon="html5"` + `title="player.html"` to html (line 44); `icon="vuejs"` + `title="VideoPlayer.vue"` to vue (line 86); `icon="html5"` + `title="native-video.html"` to html (line 120) | 40, 44, 86, 120 | HIGH | S | check 5.20 |
| 5 | Replace closing prose paragraph (line 132) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing 4-6 cards (Player sibling, Broadcast sibling, browser-and-mobile sibling, hls.js repo, plus cross-tab to architecture + managed-gateway) | 132 + EOF | HIGH | M | check 5.16+5.17+4.10+7.6 |
| 6 | Pin `npm install hls.js@^1.5` (or current major) on line 41 | 41 | HIGH | S | check 2.D3+6.8 |
| 7 | Add inline link to `https://github.com/video-dev/hls.js` on line 34 (first hls.js mention) | 34 | HIGH | S | check 6.10 |
| 8 | Link "standard HLS manifest" on line 34 to RFC 8216 (https://datatracker.ietf.org/doc/html/rfc8216) | 34 | MEDIUM | S | check 6.10 |
| 9 | Add `// TESTED: 2026-05-15 against hls.js v1.5.X` to each code block | 44, 86, 120 | MEDIUM | S | check 6.2 |
| 10 | Add Svelte and Angular tab content if Tabs restructure (#2) goes ahead — minimum 15-line snippets each | inside new Tabs | MEDIUM | L | layer 1+5; description claim |
| 11 | Add §"Browser support and trade-offs" with `<StyledTable>` showing native HLS vs hls.js coverage + LL-HLS notes | new section | MEDIUM | M | layer 5 |
| 12 | Rename H2 "Vue example" (line 84) to "Vue integration" or "HLS in Vue" for higher domain-anchor | 84 | INFO | S | check 3.4 |
| 13 | Add `<Badge>Pattern documented</Badge>` to header CTA | 29 | INFO | S | layer 5 |
