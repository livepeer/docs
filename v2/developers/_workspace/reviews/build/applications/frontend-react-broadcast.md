# Review: frontend-react-broadcast.mdx (applications)

**Page**: `v2/developers/build/applications/frontend-react-broadcast.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A7
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: (missing)
**Bytes**: 3,702
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
| 1. Frontmatter | 1.11 | description well-formed | PASS | "The @livepeer/react Broadcast component: browser-based WHIP live streaming..." — subject-first |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `@livepeer/react`, `Broadcast`, `WHIP`, `live streaming`, `webcam`, `screen share` |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "signalling" UK (line 34) — correct |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "`@livepeer/react` provides a composable Broadcast component..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | "WHIP (WebRTC-HTTP Ingestion Protocol)" defined inline (line 29) |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | Most Broadcast.* primitives named in prose are NOT shown in code — `SourceSelect`, `ScreenshareIndicator`, `StatusIndicator`, `LoadingIndicator` etc. only named |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npm install @livepeer/react` (line 37) — unpinned |
| 2. Voice | 2.D4 | Errors in main | MIXED | `Broadcast.ErrorIndicator` named (line 97) but no error-recovery pattern shown |
| 2. Voice | 2.D5 | No prose for self-evident | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | See table |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "React Broadcast" (2 words) |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | reference |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose statement | PASS | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Closing prose (line 104) routes to 2 video pages |
| 4. Structure | 4.4 | No dead ends | MIXED | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | Page assumes: a stream key from somewhere, camera permission UX, HTTPS context for getUserMedia. No prereq block. The "Get the stream key from the stream creation API response" (line 71) is mentioned but not linked |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I use Broadcast?" partially; "what stream key, where from?" left for the reader to figure out |
| 4. Structure | 4.12 | Page size | PASS | 3.7 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No trade-offs (WHIP vs RTMP, browser-broadcast latency, mobile-browser caveats, network requirements) |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash + tsx tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states in main | MIXED | ErrorIndicator named, no recovery code |
| 4. Structure | 4.20 | API has code or link | MIXED | See 2.D2 |
| 5. Layout | 5.1 | Correct template | PASS | reference |
| 5. Layout | 5.2 | Required sections present | MIXED | reference template wants `<ParamField>` / `<StyledTable>` for structured props; page uses bullet list |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | Broadcast components reference (lines 77-99) is bullet list — should be `<StyledTable>` |
| 5. Layout | 5.6 | MDX renders clean | MIXED | Line 49 `<Broadcast.Root ingestUrl={\`https://livepeercdn.studio/webrtc/\${streamKey}\`}>` uses escaped backticks inside JSX attribute — likely a rendering bug |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | MIXED | livepeercdn.studio webrtc URL hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Closing prose paragraph instead of Related Pages |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages block |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | bash (line 36) and tsx (line 44) blocks lack `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards | N/A | |
| 5. Layout | 5.23 | StyledTable | FAIL | Broadcast components list should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening (line 32) OK; final divider (line 100) precedes prose |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Bullet list mid-page |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "WHIP (WebRTC-HTTP Ingestion Protocol)" defined inline but no link to IETF spec; `livepeer/ui-kit` linked at footer (good) |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `@livepeer/react` not pinned |
| 6. Veracity | 6.9 | No open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | PASS | `livepeer/ui-kit` linked (line 102) |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | Line 2621 |
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
| 8. Links | 8.1 | Internal links resolve | NOT-TESTED | `/v2/developers/build/video/overview`, `/v2/developers/build/video/ingest-and-playback` referenced |
| 8. Links | 8.2 | External links live | NOT-TESTED | |
| 8. Links | 8.3 | Snippets resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Renders | MIXED | Line 49 escaped backticks in JSX attribute will render literally |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | "Get the stream key from the stream creation API response" — no link or example; reader can't actually get a stream key from this page |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | MIXED | |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader needs to leave the page to learn how to get a stream key |
| 10. Completeness | 10.6 | Language paths | PASS | TS |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "React Broadcast" | PASS | |
| sidebarTitle | Yes | "React Broadcast" | PASS | |
| description | Yes | "The @livepeer/react Broadcast component..." | PASS | |
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
| `<CustomDivider />` | Yes (3×) | Required | — | Final divider precedes prose |
| `<Tabs>` / `<Tab icon>` | No | Recommended | Yes | Webcam vs screen-share vs source-select could be Tabs |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Missing |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code with icon + title | No | Required | — | Both blocks lack both |
| `<Tip>` | Yes (line 29) | — | — | Header CTA |
| `<Accordion>` | No | Recommended for FAQ | — | "getUserMedia permission denied", "iOS Safari WebRTC quirks" would benefit |
| `<StyledTable>` | No | Required for reference | — | Broadcast components list should be table |
| `<ParamField>` | No | Recommended for reference | — | |
| `<CenteredContainer>` | Yes (line 28) | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant; Broadcast content unique.
- **LINK GAPS**:
  - "Get the stream key from the stream creation API response" (line 71) — no link to a stream-creation page.
  - WHIP — not linked to IETF spec.
  - `livepeercdn.studio/webrtc/` ingest URL — no link to a URL-pattern reference.
  - Closing prose (line 104) links to 2 video pages but as in-prose text, not Related Pages.
  - No cross-tab.
- **STRANDED**: Reader needs to leave the page to find how to create a stream or where the ingest URL pattern is documented.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | "signalling" used UK (line 34) |
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
| Basic broadcast | 4 | 3 | 4 | 5 | 5 | 21 |
| Broadcast components | 5 | 4 | 5 | 5 | 4 | 23 |

Both PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 36 | bash | ✗ | ✗ | NOT-TESTED | Missing `icon="terminal"` + `title="install.sh"` |
| 44 | tsx | ✗ | ✗ | NOT-TESTED | Missing `icon="code"` + `title="LiveBroadcast.tsx"`. Line 49 contains escaped backticks `\`https://livepeercdn.studio/webrtc/\${streamKey}\`` — will render literally |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page assumes the reader has a stream key already. The line "Get the stream key from the stream creation API response" (line 71) leaves the reader stranded — there is no link, no curl example, no JS SDK snippet for stream creation. A developer landing here who has a Livepeer account but no stream cannot finish the broadcast flow.
- **Fix step:** Add a §"Prerequisites" at top with: "Create a stream first" → link to `/v2/developers/build/video/streaming-quickstart` (or whichever page handles stream creation); "WHIP-compatible browser (Chrome/Edge/Safari 15+/Firefox 110+)"; "HTTPS context for getUserMedia". Add a 5-line curl or SDK snippet in §"Get a stream key" before "Basic broadcast".
- **Source/exemplar:** Sibling pages in `v2/developers/build/video/`; `livepeer/ui-kit` Broadcast examples.

### Layer 2 — Composition
- **Gap:** Bullet-list reference (lines 77-99) instead of `<StyledTable>`. No Related Pages footer. Code blocks lack icon+title. Line 49 has escaped backticks inside a JSX attribute — will render literally. No `<Tabs>` for webcam-only vs screen-share variants. No `<Accordion>` for common WebRTC errors.
- **Fix step:** (a) Convert Broadcast components bullet list (lines 77-99) to `<StyledTable>`. (b) Replace closing prose (line 104) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>`. (c) Add `icon` + `title` to both code blocks. (d) Fix line 49 escaped-backtick template literal to unescaped form. (e) Add `<AccordionGroup>` with `<Accordion icon="circle-question">` items for "getUserMedia permission denied", "iOS Safari WebRTC quirks", "Camera/mic not enumerated".
- **Source/exemplar:** check 5.23+5.20+5.6.

### Layer 3 — Cross-page integration
- **Gap:** "Stream creation" referenced without link. WHIP not linked to IETF spec. Closing prose references video overview + ingest-and-playback as in-prose, not Cards. No cross-tab. No link to the Player sibling for the "preview stream" pattern.
- **Fix step:** (a) Link "stream creation API response" on line 71 to a stream-creation reference page. (b) Link WHIP on line 29 to the IETF draft (https://datatracker.ietf.org/doc/draft-ietf-wish-whip/). (c) Add EOF Related Pages with: Player sibling, video ingest-and-playback, low-latency-live-streaming-app tutorial, `livepeer/ui-kit` repo, plus cross-tab cards to `/v2/about/network/architecture` and `/v2/solutions/managed-gateway`.
- **Source/exemplar:** WHIP IETF draft; `tutorials/low-latency-live-streaming-app.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** `@livepeer/react` not version-pinned. No TESTED labels. Many Broadcast.* primitives named without code; cannot verify they exist. `signalling` claim about WebRTC handling not anchored to source.
- **Fix step:** (a) Pin `@livepeer/react@^X.Y`. (b) TESTED label on tsx block. (c) Add inline link for each named primitive to `livepeer/ui-kit/packages/react/src/broadcast.tsx`. (d) Add `veracityStatus: verified` to frontmatter.
- **Source/exemplar:** `livepeer/ui-kit/packages/react/src/broadcast.tsx`; `@livepeer/react` npm.

### Layer 5 — Product-forward depth
- **Gap:** Page does not mention: browser compatibility (Safari 15+ has WebRTC quirks; Firefox screen-share permission model differs), HTTPS requirement (getUserMedia requires secure context), DRM is not supported for broadcast, network requirements (typical bandwidth, port requirements), mobile-browser caveats (iOS Safari background restrictions), no production checklist (token-gated broadcast, abuse mitigation, recording).
- **Fix step:** Add §"Browser support and requirements" with a `<StyledTable>` listing Chrome 90+ / Edge / Safari 15+ / Firefox 110+ rows. Add §"Production considerations" with bullets: "Bandwidth", "Token-gating ingest", "Recording the broadcast", "Mobile-browser caveats". Add `<Badge>GA</Badge>` near header CTA.
- **Source/exemplar:** WebRTC browser-compat MDN page; `.claude/references/layout/exemplars.md` production-considerations pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current` (checks 1.1, 1.4-1.8, 5.7)
2. Reference page uses bullet list (lines 77-99) instead of `<StyledTable>` per check 5.23
3. tsx block line 49 has escaped backticks in JSX attribute `\`https://livepeercdn.studio/webrtc/\${streamKey}\`` — will render literally
4. No Related Pages footer; closing prose (line 104) violates 5.16+5.17. Zero cross-tab (4.10, 7.6)
5. Both code blocks missing `icon` + `title` per check 5.20

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: verified`. Drop `status: current` | 7-10 | HIGH | S | check 1.1+5.7 |
| 2 | Fix line 49 escaped backticks in JSX attribute: replace `\`https://livepeercdn.studio/webrtc/\${streamKey}\`` with unescaped `` `https://livepeercdn.studio/webrtc/${streamKey}` `` | 49 | HIGH | S | check 5.6+8.5 |
| 3 | Convert Broadcast components bullet list (lines 77-99) to `<StyledTable variant="bordered">` with columns Primitive / Purpose / Behaviour | 77-99 | HIGH | L | check 5.5+5.23 |
| 4 | Add `icon="terminal"` + `title="install.sh"` to bash (line 36); `icon="code"` + `title="LiveBroadcast.tsx"` to tsx (line 44) | 36, 44 | HIGH | S | check 5.20 |
| 5 | Replace closing prose paragraph (line 104) with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` containing 4-6 `<Card horizontal>` + `<CustomCardTitle>` (Player sibling, video ingest-and-playback, low-latency tutorial, `livepeer/ui-kit` repo, cross-tab cards) | 104 + EOF | HIGH | M | check 5.16+5.17+4.10+7.6 |
| 6 | Pin `@livepeer/react@^X.Y` install on line 37 | 37 | HIGH | S | check 2.D3+6.8 |
| 7 | Add §"Prerequisites" at top with stream-creation link, browser requirements, HTTPS requirement | new section before line 33 | HIGH | M | layer 1; check 5.2 (instruction-adjacent reference) |
| 8 | Link "stream creation API response" on line 71 to a stream-creation reference (verify the target page exists) | 71 | HIGH | S | check 8.1; layer 3 |
| 9 | Link WHIP on line 29 to IETF draft https://datatracker.ietf.org/doc/draft-ietf-wish-whip/ | 29 | MEDIUM | S | check 6.10 |
| 10 | Add `// TESTED: 2026-05-15 against @livepeer/react v0.X.Y` to tsx block | 44 | MEDIUM | S | check 6.2 |
| 11 | Add `<AccordionGroup>` with `<Accordion icon="circle-question">` items for common WebRTC errors (getUserMedia denied, iOS Safari quirks, camera enumeration) | new section before line 100 | MEDIUM | M | check 5.19; layer 5 |
| 12 | Add §"Browser support and requirements" `<StyledTable>` with browser versions and notes | new section | MEDIUM | M | layer 5 |
| 13 | Add `<Badge>GA</Badge>` to header CTA | 29 | INFO | S | layer 5 |
| 14 | For each Broadcast.* primitive named in lines 77-99 not shown in code, add source link to `livepeer/ui-kit/packages/react/src/broadcast.tsx` | 77-99 | INFO | M | check 2.D2 |
