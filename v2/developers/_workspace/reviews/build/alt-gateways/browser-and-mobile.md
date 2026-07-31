# Review: browser-and-mobile.mdx (alt-gateways)

**Page**: `v2/developers/build/alt-gateways/browser-and-mobile.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `concept`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 3,296
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 9) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` (line 7) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing; suggest `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing; suggest `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing; suggest `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Gateway access patterns for browser-based and mobile applications..." — subject-first, ~140 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `browser gateway`, `mobile gateway`, `CORS`, `managed gateway`, `client-side` |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 33: "Running a gateway requires a go-livepeer process..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Running a gateway requires...", "Two patterns exist...", "The backend holds..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "WHIP" not defined inline (only mentioned in sibling React Broadcast page); "CORS" defined contextually |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | `@livepeer/react` Player mentioned (line 84) but no code on this page; `react-native-video` named without link |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pins for `@livepeer/react`, `react-native-video`, hls.js (referenced via livepeercdn URL pattern only) |
| 2. Voice | 2.D4 | Errors in main | MIXED | "leaked CORS key cannot access other resources" — security trade-off in main body (good); no error states for fetch failure / CORS preflight failure |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No Note used |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | See heading table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "Managed gateway with CORS key", "Backend proxy pattern", "Video playback on mobile" — all domain-anchored |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Browser and mobile gateways" (4 words) |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Concept |
| 4. Structure | 4.2 | Purpose statement | PASS | "lets the developer evaluate browser/mobile gateway patterns" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose refers to two pages but does not present a Related Pages block |
| 4. Structure | 4.4 | No dead ends | MIXED | |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | Implies developer knows what go-livepeer is; no Stated Prerequisites |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab |
| 4. Structure | 4.11 | Discord test | PASS | Answers "how do I use Livepeer from a browser/mobile?" |
| 4. Structure | 4.12 | Page size | PASS | 3.3 KB — at floor; substantive content but light |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | PASS | Page IS a trade-off comparison (CORS key vs backend proxy) |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | MIXED | typescript tagged; backend-proxy diagram (line 64) and HLS URL block (line 86) are fenced WITHOUT language tag — FAIL 4.17 |
| 4. Structure | 4.18 | Code-first opening | N/A | concept |
| 4. Structure | 4.19 | Error states in main | MIXED | CORS leak risk addressed (line 56) — good; CORS preflight failures + 401 responses not addressed |
| 4. Structure | 4.20 | API has code | MIXED | `@livepeer/react` Player on RN named but no code |
| 5. Layout | 5.1 | Correct template | PASS | |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + 3 H2s; no Related Pages footer |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Two patterns (CORS key vs backend proxy) read as Tabs candidate; backend-proxy ASCII diagram (lines 64-76) should be Mermaid |
| 5. Layout | 5.6 | MDX renders clean | MIXED | Line 46 uses escaped backtick `\`Bearer \${CORS_API_KEY}\`` inside a typescript fence — escaped backticks render literally in MDX; should be inside the fence content unescaped |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | MIXED | `https://livepeercdn.studio/hls/{playbackId}/index.m3u8` URL pattern hardcoded twice (lines 87, 86) — could import from shared data module |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Neither; closing prose paragraph (line 94) routes to 2 pages as in-prose text |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 3 code blocks (lines 41, 64, 86) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards | N/A | |
| 5. Layout | 5.23 | StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider (line 31) OK; 4 dividers between H2s; final divider (line 92) precedes prose paragraph, not Related Pages |
| 5. Layout | 5.27 | Mermaid | FAIL | Backend-proxy diagram (lines 64-76) is ASCII art in a fenced block — should be Mermaid per check 5.27 |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "scoped to specific resource IDs" — no source link to the CORS-key product docs (the page references a "managed gateway provider" abstractly); "A leaked CORS key cannot access other resources" — security claim without source |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | typescript block lacks TESTED label |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@livepeer/react` not version-pinned; `react-native-video` bridge not pinned |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | "Gateway provider" referenced abstractly — no T1 source |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2613 |
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
| 8. Links | 8.1 | Internal links resolve | NOT-TESTED | Line 94 references `/v2/developers/guides/auth-and-security/ai-authentication` and `/v2/developers/guides/gateways-as-developer/gateway-access` — need verification |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | MIXED | Line 46 escaped backtick pattern may render as literal `\`...\`` instead of template literal |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | Browser+mobile path covered |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Shows two patterns + RN playback but no end-to-end mobile-app example |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | "Gateway provider" abstracted; no named provider, no signup flow |
| 10. Completeness | 10.6 | Language paths | MIXED | TypeScript + HTML; no Swift/Kotlin examples despite "mobile" framing |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Browser and mobile gateways" | PASS | |
| sidebarTitle | Yes | "Browser and Mobile" | PASS | |
| description | Yes | "Gateway access patterns..." | PASS | |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `explain` |
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
| `<CustomDivider />` | Yes (5×) | Required | — | Final divider precedes prose, not Related Pages |
| `<Tabs>` / `<Tab icon>` | No | Recommended | Yes | Two patterns (CORS vs proxy) and three platforms (browser/iOS/Android) are Tabs candidates |
| `<StyledSteps>` | No | — | — | Concept |
| `<Columns cols={2}>` Related Pages | No | Required | — | Missing |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code with icon + title | No | Required | — | All 3 blocks lack icon+title |
| `<Tip>` | Yes (line 28) | — | — | Header CTA |
| `<Accordion>` | No | Recommended for FAQ | — | "What if CORS preflight fails?" + "iOS AVPlayer config" would benefit |
| `<StyledTable>` | No | — | — | |
| `<CenteredContainer>` | Yes (line 27) | — | — | |
| ASCII diagram (line 64) | Yes | — | — | Should be Mermaid per check 5.27 |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant.
- **LINK GAPS**:
  - "Gateway provider" abstract — no named providers linked. Should reference Livepeer Studio's CORS-key product, Daydream, or the Cloud SPE community gateway.
  - `@livepeer/react` Player not linked to the sibling page `v2/developers/build/applications/frontend-react-player` (referenced as sibling content).
  - `react-native-video` not linked.
  - hls.js not linked even though the URL pattern is the same as the framework-agnostic page.
  - AVPlayer + ExoPlayer not linked.
  - Internal closing links (line 94) need verification: `/v2/developers/guides/auth-and-security/ai-authentication`, `/v2/developers/guides/gateways-as-developer/gateway-access`.
  - No cross-tab to Gateways setup or Solutions managed-gateway.
- **STRANDED**: Reader who wants to ship a mobile app gets no platform-specific code (Swift, Kotlin, Flutter). The page is React-centric despite the "mobile" framing.

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
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Managed gateway with CORS key | 5 | 4 | 4 | 5 | 4 | 22 |
| Backend proxy pattern | 5 | 4 | 5 | 5 | 5 | 24 |
| Video playback on mobile | 5 | 3 | 4 | 5 | 4 | 21 |

All PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 41 | typescript | ✗ | ✗ | NOT-TESTED | Missing `icon="code"` + `title="cors-fetch.ts"`. Line 46 contains escaped backticks `\`Bearer \${CORS_API_KEY}\`` which will render literally — should be unescaped template literals inside the fence |
| 64 | (none) | ✗ | ✗ | — | ASCII flow diagram — FAIL 4.17 + 5.27 (should be Mermaid) |
| 86 | (none) | ✗ | ✗ | — | URL example block — FAIL 4.17; add `icon="link"` + `title="hls-url"` or use inline code |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "browser and mobile" but is heavily browser-centric. The mobile content is one paragraph (lines 84-90) covering React Native + AVPlayer + ExoPlayer in a single fenced URL. A developer building an iOS or Android app cannot finish reading this page and ship — they need platform code, ATS settings (iOS), network-security-config (Android), background-playback handling, and DRM/token-gating notes if applicable. The "managed gateway with CORS key" pattern doesn't name a single provider.
- **Fix step:** Either rescope to "Browser gateway patterns" (with mobile content moved to a `frontend-mobile.mdx` sibling) or expand mobile substantively: add a §"iOS playback" with an AVPlayer Swift snippet + ATS note; §"Android playback" with an ExoPlayer Kotlin snippet + network-security-config. Add named providers in "Managed gateway" — Daydream / community Cloud SPE / specific Studio CORS endpoint.
- **Source/exemplar:** Existing `v2/developers/build/applications/frontend-react-player.mdx` for the React side; `@livepeer/react/external` for WebRTC fallback; AVPlayer Apple docs.

### Layer 2 — Composition
- **Gap:** Two patterns + three platforms = a 2D matrix that should be `<Tabs>` (platform) + `<Tabs>` (pattern). Currently a linear prose flow. The backend-proxy ASCII diagram (lines 64-76) violates check 5.27 (should be Mermaid). Line 46 escaped-backtick template literal will not render correctly. No Related Pages block. No `<Accordion>` for "What if CORS preflight fails?"
- **Fix step:** (a) Restructure into `<Tabs>` with `<Tab title="Browser" icon="globe">`, `<Tab title="iOS" icon="apple">`, `<Tab title="Android" icon="android">`, `<Tab title="React Native" icon="react">`. Inside each, present the two patterns (CORS key vs backend proxy) as sub-tabs or accordions. (b) Convert ASCII diagram (lines 64-76) to a Mermaid flowchart using `MermaidColours.jsx`. (c) Replace escaped backticks on line 46 with literal template-literal characters. (d) Add `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` at EOF.
- **Source/exemplar:** check 5.18+5.27; `MermaidColours.jsx`; sibling React Player page for `<Tabs>` exemplar.

### Layer 3 — Cross-page integration
- **Gap:** No links to specific managed gateway providers, no link to Studio CORS-key product docs, no link to `@livepeer/react`, no link to react-native-video, no link to AVPlayer or ExoPlayer official docs, no cross-tab. Internal closing links (line 94) reference pages that may not exist.
- **Fix step:** (a) Add provider links in §"Managed gateway with CORS key": "Use [Daydream](https://daydream.live), [community gateway](/v2/developers/guides/gateways-as-developer/gateway-access), or a self-hosted Livepeer Gateway." (b) Cross-link `@livepeer/react` to `/v2/developers/build/applications/frontend-react-player`. (c) Verify the two closing-paragraph links exist. (d) Add Related Pages cards: `/v2/developers/build/applications/frontend-core-web` (HLS direct), `/v2/gateways/setup/connect` (operator path), `/v2/about/network/architecture` (protocol).
- **Source/exemplar:** Daydream landing page; `@livepeer/react` UI Kit repo.

### Layer 4 — Veracity and source authority
- **Gap:** "A leaked CORS key cannot access other resources in the account" — claim about CORS-key scoping with no source. "@livepeer/react Player works in React Native via react-native-video bridge" — claim without a working RN code sample. AVPlayer / ExoPlayer behaviour claimed but not tested. No version pins. No TESTED labels.
- **Fix step:** (a) Cite CORS-key scoping behaviour to the Studio CORS-key product docs or the API reference. (b) Replace the React Native paragraph with a small Swift + Kotlin code snippet inside Tabs, each marked TESTED with date. (c) Pin `@livepeer/react@^X.Y` in any version reference. (d) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** Studio CORS-key docs; `react-native-video` README.

### Layer 5 — Product-forward depth
- **Gap:** Page is a two-pattern explainer without a single example a developer can copy and ship from. No mobile platform-specific gotchas (ATS, network-security-config, background playback, picture-in-picture, DRM). No security analysis of CORS leak scenarios beyond a one-line claim. No production checklist for shipping a browser/mobile app on Livepeer. No mention of rate limits, latency expectations, or DRM/token-gating implications. No comparison to Livepeer Studio CORS keys vs alt-gateway-built CORS keys.
- **Fix step:** Add §"Production checklist for browser + mobile" with 6 bullets: "Provider selected (named)", "CORS or proxy pattern chosen", "Rate-limit budget documented", "Latency target measured against community/managed/self-host paths", "DRM or token-gating chosen if applicable", "Mobile-specific config (ATS / network-security-config) applied". Add §"Security: CORS key scope" with a 3-bullet expansion of what a CORS key can and cannot do. Add `<Badge>Production-ready</Badge>` or `<Badge>Pattern documented</Badge>` near header CTA.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` production-checklist pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4-1.8, 5.7)
2. Backend-proxy ASCII diagram (lines 64-76) violates check 5.27 — should be Mermaid
3. Escaped backticks in typescript block (line 46) `\`Bearer \${CORS_API_KEY}\`` will render literally — MDX rendering bug
4. No Related Pages block; closing prose paragraph (line 94) violates 5.16+5.17. Zero cross-tab links (4.10, 7.6)
5. All 3 code blocks (lines 41, 64, 86) missing `icon` + `title` per check 5.20; two missing language tag per check 4.17

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: explain`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 7-10 | HIGH | S | check 1.1+5.7 |
| 2 | Convert ASCII backend-proxy diagram (lines 64-76) to a Mermaid flowchart using `MermaidColours.jsx`; wrap in `<ScrollableDiagram>` | 64-76 | HIGH | M | check 5.27 |
| 3 | Fix escaped-backtick template-literal pattern on line 46: replace `\`Bearer \${CORS_API_KEY}\`` with literal `` `Bearer ${CORS_API_KEY}` `` inside the fence | 46 | HIGH | S | check 5.6+8.5 |
| 4 | Add `icon="code"` + `title="cors-fetch.ts"` to typescript fence on line 41; add `icon="diagram-project"` + `title="proxy-flow"` to (new) Mermaid fence; add `icon="link"` + `title="hls-url"` and language tag to URL fence on line 86 | 41, 64, 86 | HIGH | S | check 5.20+4.17 |
| 5 | Replace closing prose paragraph (line 94) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing 4 `<Card horizontal>` + `<CustomCardTitle>`: AI authentication, gateway access, Core Web sibling, `/v2/gateways/setup/connect` | 94 + EOF | HIGH | M | check 5.16+5.17+5.22 |
| 6 | Add ≥3 cross-tab cards: `/v2/gateways/setup/connect` (operator), `/v2/about/network/architecture` (protocol), `/v2/solutions/managed-gateway` or equivalent | EOF | HIGH | S | check 4.10+7.6 |
| 7 | Restructure body into `<Tabs>` with platform-specific tabs (Browser, iOS, Android, React Native); inside each show the relevant pattern. Add Swift + Kotlin snippets for iOS/Android | 33-90 | HIGH | XL | check 5.18; layer 2+1 |
| 8 | Verify internal links on line 94: `/v2/developers/guides/auth-and-security/ai-authentication`, `/v2/developers/guides/gateways-as-developer/gateway-access` | 94 | HIGH | S | check 8.1 |
| 9 | Name specific managed gateway providers (Daydream, community gateway, self-host) instead of abstract "managed gateway provider" | 37, 43 | MEDIUM | S | layer 3 |
| 10 | Add §"Production checklist for browser + mobile" with 6 bullets | new section | MEDIUM | M | layer 5 |
| 11 | Cross-link `@livepeer/react` mention on line 84 to `/v2/developers/build/applications/frontend-react-player` | 84 | MEDIUM | S | check 6.10 |
| 12 | Cite CORS-key scoping (line 56) to Studio CORS-key product docs or Livepeer API reference | 56 | MEDIUM | S | check 6.1 |
| 13 | Define "WHIP" inline at first use on this page (currently only on sibling page) | first WHIP mention | INFO | S | check 2.21 |
| 14 | Add `<Badge>Pattern documented</Badge>` to header CTA | 28 | INFO | S | layer 5 |
