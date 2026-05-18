# Review: frontend-react-player.mdx (applications)

**Page**: `v2/developers/build/applications/frontend-react-player.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 4,795
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 9) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: reference` (line 7) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `reference` or `integrate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "The @livepeer/react Player component: composable video playback..." — subject-first, ~155 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `@livepeer/react`, `Player`, `video playback`, `HLS`, `WebRTC`, `ABR` |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "`@livepeer/react` provides a composable Player..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "`@livepeer/react` provides...", "`Player.Root` accepts...", "All components are unstyled..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "Radix pattern" referenced on line 109 with no link or inline definition; `asChild` is defined contextually |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | Most Player.* components named in prose are NOT shown with code — only `Player.Root` and `Player.Container/Video/Controls` shown. `getSrc`, `Player.VideoQualitySelect`, `Player.RateSelect`, `Player.Seek`, `Player.Poster` etc. mentioned without code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install @livepeer/react` (line 37) — unpinned |
| 2. Voice | 2.D4 | Errors in main | MIXED | Brief mention of `Player.ErrorIndicator` but no fallback/retry pattern shown |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | See table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "React Player" (2 words) |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | reference — literal/findability |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Player reference |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer reference Player primitives" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose paragraph (line 136) only routes to video overview |
| 4. Structure | 4.4 | No dead ends | MIXED | |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | Implicitly React + Node.js + a Livepeer stream/asset (playbackId); not explicit |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | |
| 4. Structure | 4.7 | Info type per section | PASS | reference style |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I use Player primitives?" — but the component list (lines 82-107) is bullet-list prose rather than a reference table per check 5.32 (reference tables at end) |
| 4. Structure | 4.12 | Page size | PASS | 4.8 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | WebRTC-first / HLS-fallback explained (line 130) but no latency / bundle-size / browser-support trade-offs |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash + tsx tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states in main | MIXED | ErrorIndicator named without example |
| 4. Structure | 4.20 | API has code or link | MIXED | See 2.D2 |
| 5. Layout | 5.1 | Correct template | PASS | reference |
| 5. Layout | 5.2 | Required sections present | MIXED | Reference template requires `<ParamField>` / `<ResponseField>` / `<StyledTable>` for structured data per check 5.5/5.23; page uses bullet lists for the component reference |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | The Player components reference (lines 82-107) is bullet-list prose; reference data should use `<StyledTable>` or `<ParamField>` per check 5.5 |
| 5. Layout | 5.6 | MDX renders clean | MIXED | Line 53 uses escaped backticks `\`https://livepeercdn.studio/hls/\${playbackId}/index.m3u8\`` inside a tsx fence — escaped backticks render literally; same on line 120 |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | MIXED | livepeercdn.studio URL hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Closing prose paragraph (line 136), not Related Pages block |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | bash (line 36), tsx (line 44), tsx (line 117) — all 3 blocks lack icon+title |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards | N/A | |
| 5. Layout | 5.23 | StyledTable | FAIL | Player components reference is bullet list — should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening (line 32) OK; final divider (line 132) precedes prose paragraph instead of Related Pages |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Components are in middle bullet list, not tabled at end |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Radix pattern" claim on line 109 — should link to Radix UI docs; `livepeer/ui-kit` linked at line 134 (good) |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED labels on 3 code blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@livepeer/react` not pinned |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | PASS | `livepeer/ui-kit` linked (line 134) |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2620 |
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
| 8. Links | 8.1 | Internal links resolve | PASS | `/v2/developers/build/video/overview` referenced |
| 8. Links | 8.2 | External links live | NOT-TESTED | `livepeer/ui-kit` (good) |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | MIXED | Escaped backticks on lines 53 and 120 will render literally |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Basic Player + components + WebRTC shown; no full app example |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | |
| 10. Completeness | 10.6 | Language paths | PASS | TS shown |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "React Player" | PASS | |
| sidebarTitle | Yes | "React Player" | PASS | |
| description | Yes | "The @livepeer/react Player component..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `reference` or `integrate` |
| complexity | No | — | FAIL | Add `intermediate` |
| lifecycleStage | No | — | FAIL | Add `build` |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Add `verified` |
| lastVerified | Yes | 2026-05-15 | PASS | |
| status | Yes | current | FAIL | Drop |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Final divider precedes prose |
| `<Tabs>` / `<Tab icon>` | No | Recommended | Yes | HLS-only vs HLS+WebRTC and quality/rate selectors are Tabs candidates |
| `<StyledSteps>` | No | — | — | Reference, not procedural |
| `<Columns cols={2}>` Related Pages | No | Required | — | Missing |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code with icon + title | No | Required | — | All 3 blocks lack both |
| `<Tip>` | Yes (line 29) | — | — | Header CTA |
| `<Accordion>` | No | Recommended for FAQ | — | "Common Player errors" + "Customising controls with Tailwind" would benefit |
| `<StyledTable>` | No | Required for reference data | — | Player components list (lines 82-107) should be `<StyledTable>` |
| `<ParamField>` / `<ResponseField>` | No | Recommended for reference | — | Each Player primitive's props could use `<ParamField>` |
| `<CenteredContainer>` | Yes (line 28) | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: Basic Player snippet (lines 44-76) is a richer version of the Quick start in `overview.mdx` (lines 50-65) — divergence risk.
- **LINK GAPS**:
  - `Radix` pattern on line 109 — no link to Radix UI docs.
  - `@livepeer/react/external` (line 78, 118) — no link to its docs in `livepeer/ui-kit`.
  - hls.js — not linked from this page.
  - WebRTC playback section (line 113) — no link to WebRTC standard or `livepeer/ui-kit` WebRTC implementation file.
  - Closing prose (line 136) routes only to `/v2/developers/build/video/overview` — no Related Pages block.
  - No cross-tab links.
- **STRANDED**: Reader needing token-gated playback, DRM, or analytics gets no pointer.

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
| Basic player | 4 | 3 | 4 | 5 | 5 | 21 |
| Player components | 5 | 4 | 5 | 5 | 4 | 23 |
| WebRTC playback | 5 | 4 | 5 | 5 | 4 | 23 |

All PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 36 | bash | ✗ | ✗ | NOT-TESTED | Missing `icon="terminal"` + `title="install.sh"` |
| 44 | tsx | ✗ | ✗ | NOT-TESTED | Missing `icon="code"` + `title="VideoPlayer.tsx"`. Line 53 contains escaped backticks `\`https://...\`` that will render literally |
| 117 | tsx | ✗ | ✗ | NOT-TESTED | Missing `icon="code"` + `title="webrtc-player.tsx"`. Line 120 contains escaped backticks `\`...\`` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page is component-list-style reference but does not let the reader actually choose which primitives to compose for a real use case. A developer arrives with a need ("I want a player with controls + quality selector + LiveIndicator"); the page lists 16+ primitives but does not show a composed example beyond the basic Player. No "use-case recipes" (token-gated player, picture-in-picture player, analytics-instrumented player, live-only player).
- **Fix step:** Add §"Use-case recipes" with 3 examples in `<Tabs>` or `<AccordionGroup>`: "Live-only player" (Root + Container + Video + LiveIndicator + Controls), "VOD player with quality selector" (+ VideoQualitySelect + Time + Seek), "Production player with error recovery" (+ ErrorIndicator + LoadingIndicator + retry pattern). Each recipe a 15-line tsx snippet.
- **Source/exemplar:** `livepeer/ui-kit` `examples/` folder; `.claude/references/layout/exemplars.md` recipe-pattern.

### Layer 2 — Composition
- **Gap:** Reference page violates check 5.23 — component reference is a bullet list rather than `<StyledTable>` or `<ParamField>` blocks. No `<Tabs>` for HLS-only vs HLS+WebRTC source. No `<Accordion>` for "Common Player errors". No Related Pages footer. Code blocks lack icon+title (5.20). Two code blocks (lines 44, 117) contain escaped backticks that will render literally.
- **Fix step:** (a) Convert Player components H2 body (lines 84-107) into a `<StyledTable>` with columns: Primitive | Purpose | Required props | Notes. (b) Convert "Common Player errors" into `<AccordionGroup>` with `<Accordion icon="circle-question">` items. (c) Add EOF Related Pages block. (d) Add `icon` + `title` to 3 code blocks. (e) Fix escaped-backtick template literals on lines 53 and 120 (replace `\`...\``  with literal `` `...` ``).
- **Source/exemplar:** check 5.23+5.20+5.6; existing reference exemplars in v2/developers/.

### Layer 3 — Cross-page integration
- **Gap:** `livepeer/ui-kit` linked once at footer (good) but `@livepeer/react/external`, `Radix pattern`, hls.js, WebRTC spec all unlinked. No link to the Broadcast sibling, no link to token-gated-video tutorial, no cross-tab.
- **Fix step:** (a) Link `Radix pattern` on line 109 to https://www.radix-ui.com/primitives. (b) Link `@livepeer/react/external` (lines 78, 118) to its location in `livepeer/ui-kit`. (c) Add EOF Related Pages with: Broadcast sibling, Core Web sibling, `livepeer/ui-kit` repo, `v2/developers/build/tutorials/token-gated-video.mdx`, cross-tab cards to `/v2/about/network/architecture` (LL-HLS) and `/v2/solutions/managed-gateway` (managed playback).
- **Source/exemplar:** `radix-ui.com`; `livepeer/ui-kit/packages/react/src/`.

### Layer 4 — Veracity and source authority
- **Gap:** `@livepeer/react` not pinned. No TESTED label on the 3 code blocks. `Player.VideoQualitySelect` and other lesser-used primitives named with no code example to validate they exist. The page's `lastVerified: 2026-05-15` claims verification but `veracityStatus` is absent.
- **Fix step:** (a) Pin `@livepeer/react@^X.Y` on install line 37. (b) Add `// TESTED: 2026-05-15 against @livepeer/react v0.X.Y` to each tsx block. (c) For each primitive named without code, either add a snippet or link to its line in the source file. (d) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** `@livepeer/react` npm releases; `livepeer/ui-kit/packages/react/src/player.tsx`.

### Layer 5 — Product-forward depth
- **Gap:** Reference page has no maturity marker, no styling guidance ("unstyled by default" stated but no exemplar styled-player link), no analytics hook documented, no DRM / token-gating mention, no SSR caveats, no bundle-size note. Real developers using `@livepeer/react` need to know if Player works in Next.js App Router, what events trigger metrics, and whether playbackId can be a stream key for live content.
- **Fix step:** Add §"SSR and Next.js" callout with one paragraph and a code snippet showing `"use client"` directive. Add §"Playback analytics" linking to the metrics callback signatures in `livepeer/ui-kit`. Add §"Token-gated and DRM" with a one-paragraph reference and link to `tutorials/token-gated-video.mdx`. Add `<Badge>GA</Badge>` near the header tip.
- **Source/exemplar:** `livepeer/ui-kit` analytics docs; `tutorials/token-gated-video.mdx`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4-1.8, 5.7)
2. Reference page uses bullet-list components reference (lines 82-107) — should be `<StyledTable>` per check 5.23
3. Two tsx blocks (lines 44, 117) contain escaped backticks `\`...\`` that will render literally — MDX rendering bug
4. No Related Pages block; closing prose (line 136) violates 5.16+5.17. Zero cross-tab (4.10, 7.6)
5. All 3 code blocks missing `icon` + `title` per check 5.20

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 7-10 | HIGH | S | check 1.1+5.7 |
| 2 | Fix escaped backticks on line 53 and line 120: replace `\`https://livepeercdn.studio/hls/\${playbackId}/index.m3u8\`` with literal `` `https://livepeercdn.studio/hls/${playbackId}/index.m3u8` `` (inside the tsx fence) | 53, 120 | HIGH | S | check 5.6+8.5 |
| 3 | Convert Player components bullet list (lines 82-107) into a `<StyledTable variant="bordered">` with columns Primitive / Purpose / Required props / Notes | 82-107 | HIGH | L | check 5.5+5.23 |
| 4 | Add `icon="terminal"` + `title="install.sh"` to bash block (line 36); `icon="code"` + `title="VideoPlayer.tsx"` to first tsx (line 44); `icon="code"` + `title="webrtc-player.tsx"` to second tsx (line 117) | 36, 44, 117 | HIGH | S | check 5.20 |
| 5 | Add `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` at EOF with: Broadcast sibling, Core Web sibling, `livepeer/ui-kit` repo, token-gated-video tutorial, plus cross-tab cards to `/v2/about/network/architecture` and `/v2/solutions/managed-gateway` | EOF (replace line 136 prose) | HIGH | M | check 5.16+5.17+4.10+7.6 |
| 6 | Pin `@livepeer/react@^X.Y` on install line 37 | 37 | HIGH | S | check 2.D3+6.8 |
| 7 | Add `// TESTED: 2026-05-15 against @livepeer/react v0.X.Y` to each tsx block | 44, 117 | MEDIUM | S | check 6.2 |
| 8 | Link `Radix pattern` on line 109 to `https://www.radix-ui.com/primitives` | 109 | MEDIUM | S | check 6.10 |
| 9 | Link `@livepeer/react/external` on lines 78 and 118 to its source in `livepeer/ui-kit` | 78, 118 | MEDIUM | S | check 6.10 |
| 10 | Add §"Use-case recipes" with 3 tsx examples in `<Tabs>` (Live-only / VOD with quality / Production with retry) | new section before line 132 | MEDIUM | L | layer 1 |
| 11 | Add §"SSR and Next.js" + §"Token-gated and DRM" small sections with cross-links | new sections | MEDIUM | M | layer 5 |
| 12 | Add `<Badge>GA</Badge>` to header CTA | 29 | INFO | S | layer 5 |
| 13 | For each primitive named in lines 82-107 not shown in code, add either a one-line code example or a source link to `livepeer/ui-kit/packages/react/src/player.tsx` | 82-107 | INFO | M | check 2.D2 |
