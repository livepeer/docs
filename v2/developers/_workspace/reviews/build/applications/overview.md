# Review: overview.mdx (applications)

**Page**: `v2/developers/build/applications/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `overview` (non-canonical — should be `concept` or `navigation`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 2,876
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 9) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 7) — not canonical; suggest `concept` or `navigation` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `orient` or `choose` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build frontend applications on Livepeer using the React Player and Broadcast components..." — subject-led action verbs, ~145 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | `applications`, `player`, `broadcast`, `react`, `hls.js`, `frontend` — borderline generic, but applications-context appropriate |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "Livepeer provides three frontend integration paths depending on your framework and requirements." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | `@livepeer/react`, hls.js consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "`@livepeer/react` Player handles...", "Broadcast provides...", "hls.js works..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | No "livepeer.js" usage — pages use `@livepeer/react` (the ui-kit collapse per diagrams2.mdx §2 verified) |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | ABR defined inline (line 36) |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept/navigation |
| 2. Voice | 2.D2 | API/method has code or link | PASS | Player.Root/Container/Video/Controls shown in code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install @livepeer/react` (line 47) — no version pin; hls.js not version-pinned |
| 2. Voice | 2.D4 | Errors in main | N/A | |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No Note used |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | Only one H2 "Quick start" — see table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | MIXED | "Quick start" — domain-light |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Applications" — single generic word; the page title is also the H1 |
| 3. Headings | 3.7 | Expert editorial | MIXED | One H2 is thin for a navigation/orientation page |
| 3. Headings | 3.8 | pageType naming style | N/A | pageType invalid |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | MIXED | "Frontend applications quick start" would score higher than "Quick start" |
| 4. Structure | 4.1 | One purpose | PASS | Orient developer to three frontend paths |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer choose between React Player, Broadcast, or hls.js" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | 3 cards route to all 3 child pages |
| 4. Structure | 4.4 | No dead ends | PASS | CardGroup routes onward |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | Implicitly Node.js + React; no explicit prereq block |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "non-React environments" routed to Core Web |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | The Player snippet (lines 50-65) duplicates `frontend-react-player.mdx` lines 44-76 (simpler version) — overview-as-tease pattern is acceptable but should defer entirely or differ meaningfully |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | Answers "which frontend integration do I pick?" |
| 4. Structure | 4.12 | Page size | MIXED | 2.9 KB — just above the 2KB stub floor; light for a navigation+concept page |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Three paths described but not compared on cost, complexity, or limitations |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash + tsx tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API has code | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | pageType non-canonical |
| 5. Layout | 5.2 | Required sections present | MIXED | If concept: needs ≥2 H2s, has 1. If navigation: needs CardGroup (has it). Choose pageType then adapt |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | PASS | CardGroup for routing OK; Quick start code OK |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | MIXED | `https://livepeercdn.studio/hls/${playbackId}/index.m3u8` URL hardcoded — could come from a shared playback-host data module |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | CardGroup on lines 69-79 functions as Next Steps |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={3}>` not `<Columns cols={2}>`; cards use plain `title=` not `<CustomCardTitle>` per check 5.17 |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | bash block (line 46) and tsx block (line 50) both lack `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | Lines 70-78 use plain `<Card title="..." icon="..." href="...">` not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening (line 32) OK; before CardGroup divider (line 67) OK — but no divider explicitly labelled "before Related Pages" structure since there's no heading on the CardGroup |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "automatic ABR selection, poster images, and playback metrics" — claims about Player behaviour without a link to `livepeer/ui-kit` README or feature list; "browser-based WHIP publishing" — no spec link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | PASS | `@livepeer/react` is the current name |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@livepeer/react` not pinned |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | `livepeer/ui-kit` referenced on child pages but not on this overview |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2619 — verified after recount |
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
| 8. Links | 8.1 | Internal links resolve | PASS | All 3 card hrefs resolve |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Quick start shows a single Player but the description promises Broadcast and hls.js too; only Player code shown |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | |
| 10. Completeness | 10.6 | Language paths | MIXED | Only TS shown — no JS, Vue, or Svelte despite multi-framework framing |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Applications" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "Build frontend applications..." | PASS | |
| pageType | Yes | overview | FAIL | Non-canonical |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `orient` or `choose` |
| complexity | No | — | FAIL | Add `beginner` |
| lifecycleStage | No | — | FAIL | Add `build` |
| keywords | Yes | [array] | MIXED | Slightly generic |
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
| `<CustomDivider />` | Yes (3×) | Required | — | Placement OK |
| `<Tabs>` / `<Tab icon>` | No | Recommended | Yes | Could show JS, TS, Vue variants in Quick start |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses `<CardGroup cols={3}>` — FAIL 5.17 |
| `<CustomCardTitle>` | No | Required inside nav Cards | — | FAIL 5.22 |
| Fenced code with icon + title | No | Required | — | bash + tsx blocks lack both |
| `<Tip>` | Yes (line 29) | — | — | Header CTA |
| `<Accordion>` | No | — | — | |
| `<StyledTable>` | No | Recommended for decision matrix | — | Three-path comparison table missing |
| `<CenteredContainer>` | Yes (line 28) | — | — | |
| `<CardGroup cols={3}>` | Yes (lines 69-79) | — | — | Should be `<Columns cols={2}>` or kept but with `<CustomCardTitle>` |

## Cross-page duplication and link gaps

- **OVERLAP**: Player snippet (lines 50-65) is a simpler version of `frontend-react-player.mdx` basic-player snippet (lines 44-76). Tease pattern OK if intentional but two snippets diverge — sources may drift.
- **LINK GAPS**:
  - `livepeer/ui-kit` not linked from this page (only child pages link it).
  - hls.js not linked.
  - WHIP spec not linked (despite Broadcast mention).
  - No link to a sample app gallery / awesome-livepeer.
  - No cross-tab to Gateways (stream creation), Solutions (managed video API), About (LL-HLS protocol).
- **STRANDED**: Reader knows there are 3 paths but cannot evaluate them on cost, latency, or browser compatibility from the overview.

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
| Studio refs | 0 | (livepeercdn.studio is a domain — not a Studio product reference per checklist exception) |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Quick start | 3 | 2 | 4 | 5 | 5 | 19 — borderline FAIL (avoid term per rubric; consider "Player quick start" or "First playback") |

Only one H2 — page is mostly intro + cards.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 46 | bash | ✗ | ✗ | NOT-TESTED | Missing `icon="terminal"` + `title="install.sh"` per 5.20 |
| 50 | tsx | ✗ | ✗ | NOT-TESTED | Missing `icon="code"` + `title="VideoPlayer.tsx"` per 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises three integration paths but does not help the reader actually choose. There is no decision matrix comparing the three on framework compatibility, bundle size, browser support, latency capability (WebRTC vs HLS), or cost. The Quick start shows only Player — Broadcast and hls.js get no code preview. The reader must click into each child page to evaluate.
- **Fix step:** Replace the single Quick start H2 with a §"Choose your path" containing a `<StyledTable>` comparing the three on: framework (React / React Native / any), bundle size, latency (LL-HLS vs WebRTC), feature set (playback / broadcast / both), most common use case. Then keep a single Player Quick start as a tease.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` decision-matrix pattern; existing `comfystream/overview.mdx` "Relationship to BYOC" decision table.

### Layer 2 — Composition
- **Gap:** Page uses `<CardGroup cols={3}>` for routing — acceptable for routing but cards use plain `<Card title=...>` instead of `<CustomCardTitle>` per 5.17/5.22. Code blocks lack icon+title. No `<StyledTable>` decision matrix. No `<Tabs>` showing JS/TS/Vue alternatives in Quick start. Only one H2 leaves the page thin.
- **Fix step:** (a) Convert CardGroup cards on lines 70-78 to `<Columns cols={2}>` or keep CardGroup but rewrap each card title with `<CustomCardTitle icon="..." title="..." />`. (b) Add `<StyledTable>` decision matrix between intro and Quick start. (c) Add `<Tabs>` in Quick start with `<Tab title="TS" icon="js">` (current), `<Tab title="Vue" icon="vuejs">` (with hls.js), `<Tab title="Vanilla" icon="code">`. (d) Add `icon` + `title` to both code blocks. (e) Consider promoting "Quick start" to a more domain-anchored heading.
- **Source/exemplar:** check 5.17+5.18+5.22; `snippets/templates/pages/page-composition-framework.mdx`.

### Layer 3 — Cross-page integration
- **Gap:** No upstream link to `livepeer/ui-kit` despite shipping its npm package. No link to hls.js. No link to WHIP spec. No cross-tab. CardGroup links exhaust internal routing but the overview reads as an island.
- **Fix step:** (a) Add upstream links in intro: "...uses [`livepeer/ui-kit`](https://github.com/livepeer/ui-kit) and [hls.js](https://github.com/video-dev/hls.js)..." (b) Add a 4th card to the CardGroup: `livepeer/ui-kit` GitHub. (c) Add ≥3 cross-tab cards in a Related Pages section: `/v2/developers/build/video/overview` (stream creation), `/v2/solutions/managed-gateway` (managed video API), `/v2/about/network/architecture` (protocol).
- **Source/exemplar:** `livepeer/ui-kit` README; hls.js GitHub.

### Layer 4 — Veracity and source authority
- **Gap:** "automatic ABR selection, poster images, and playback metrics" — claim with no source. "browser-based WHIP publishing" — spec link absent. Quick start code uses `https://livepeercdn.studio/hls/{playbackId}/index.m3u8` URL pattern hardcoded with no link to the playback host documentation. No version pin on `@livepeer/react`. No TESTED label on code blocks. `veracityStatus` field absent.
- **Fix step:** (a) Pin `@livepeer/react@^X.Y` in the install command on line 47. (b) Add `// TESTED: 2026-05-15 against @livepeer/react v0.X.Y` to code blocks. (c) Add inline link on line 36: "[automatic ABR selection](https://github.com/livepeer/ui-kit/blob/main/packages/react/README.md#abr)". (d) Add `veracityStatus: verified` and `lastVerified: 2026-05-15` (already present).
- **Source/exemplar:** `livepeer/ui-kit` README; WHIP IETF draft.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as a router-with-tease. No statement of which path is "production-default" — a developer landing here cannot tell whether the React Player is the recommended starting point or whether hls.js is preferred for size-sensitive apps. No mention of browser compatibility (Safari + native HLS), no DRM/token-gating notes, no link to a working sample app or starter template. No "what could go wrong" — token-gating, latency budget, ABR misbehaviour, autoplay restrictions.
- **Fix step:** Add §"Production guidance" with three bullets: "Default choice: React Player + HLS for most apps"; "Real-time use cases: add WebRTC source via `getSrc`"; "Framework-agnostic / size-sensitive: hls.js direct + native `<video>`". Add §"Browser compatibility" with HLS-native support table (Safari yes, others via hls.js or `@livepeer/react`). Add a single link to a working sample app or starter on GitHub.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` production-default pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current`; `pageType: overview` non-canonical (checks 1.1, 1.2, 5.7)
2. CardGroup cards use plain `<Card title=...>` instead of `<CustomCardTitle>` per checks 5.17, 5.22
3. Both code blocks lack `icon` + `title` per check 5.20
4. Only one H2 + no decision matrix — reader cannot choose between three paths from this overview
5. Zero cross-tab graduation links (4.10, 7.6)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept` (or `navigation` if no body sections added). Add `purpose: choose`, `complexity: beginner`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 7-10 | HIGH | S | check 1.2+5.7 |
| 2 | Convert `<CardGroup cols={3}>` cards (lines 70-78) to use `<CustomCardTitle icon="..." title="..." />` inside each `<Card>` per 5.17/5.22 | 70-78 | HIGH | M | check 5.17+5.22 |
| 3 | Add `icon="terminal"` + `title="install.sh"` to bash block (line 46); `icon="code"` + `title="VideoPlayer.tsx"` to tsx block (line 50) | 46, 50 | HIGH | S | check 5.20 |
| 4 | Insert §"Choose your path" with `<StyledTable>` decision matrix comparing the three paths on framework/bundle/latency/use-case BEFORE the Quick start H2 | new section | HIGH | M | layer 1; check 4.15 |
| 5 | Pin `@livepeer/react@^X.Y` install command on line 47 | 47 | HIGH | S | check 2.D3 |
| 6 | Add a §"Related Pages" `<Columns cols={2}>` block at EOF with cross-tab cards: `/v2/developers/build/video/overview` (stream creation), `/v2/solutions/managed-gateway` (managed), `/v2/about/network/architecture` (protocol), `livepeer/ui-kit` repo | EOF | HIGH | M | check 4.10+7.6+5.16 |
| 7 | Replace H2 "Quick start" (line 44) with "Player quick start" or "First playback" for domain anchor; rescore | 44 | MEDIUM | S | check 3.4+3.10 |
| 8 | Add `// TESTED: 2026-05-15 against @livepeer/react v0.X.Y` to tsx block | 50 | MEDIUM | S | check 6.2 |
| 9 | Add upstream link `livepeer/ui-kit` to intro paragraph at line 36 | 36 | MEDIUM | S | check 6.10 |
| 10 | Add hls.js GitHub link to intro paragraph at line 40 | 40 | MEDIUM | S | check 6.10 |
| 11 | Add §"Production guidance" with the recommended-default + real-time + size-sensitive guidance | new section | MEDIUM | M | layer 5 |
| 12 | Consider adding a `<Tabs>` row in Quick start with TS/JS/Vue language variants | 50 | INFO | M | check 5.18; layer 2 |
| 13 | Add `<Badge>Production-ready</Badge>` to `<Tip>` callout (line 29) | 29 | INFO | S | layer 5 |
