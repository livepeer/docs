# Review: low-latency-live-streaming-app.mdx

**Page**: `v2/developers/build/tutorials/low-latency-live-streaming-app.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 14,480
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | All required present; legacy `status: current` (line 26) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 16) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 18) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 17) |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` (line 19) |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` (line 20) |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 28) |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build a sub-3-second glass-to-glass streaming app..." subject-first, 130 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields (lines 21-25) |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (whip, whep, webrtc, hls, nextjs) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" used (line 33); only US-spelling hits are `CenteredContainer` import (false-positive zone) |
| 2. Voice | 2.2 | Banned words | PASS | 0 hits |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 hits |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 41 "By the end of this tutorial you'll have..." — `you'll` form acceptable for tutorial outcome but borderline against 2.13 entity-led rule |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer register; WHIP/WHEP/SDP/ICE language correct |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | WHIP, WHEP, ICE, SDP, STUN/TURN, RTMP, HLS — all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 41 opens with "By the end of this tutorial you'll have..." — reader-second-person; acceptable for tutorial activation moment but rubric prefers entity-led |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | MIXED | Tip + 2-paragraph activation prose before first code at line 78 — acceptable framing for a multi-component tutorial |
| 2. Voice | 2.D2 | API methods linked | MIXED | `@livepeer/react`'s `Broadcast.Root`, `Player.Root`, `getIngest` not linked to docs/source. `livepeer` SDK `stream.create` not linked |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `npx create-next-app@latest` (line 79) — `latest` tag; no pin on `@livepeer/react`, `livepeer`. Node 20 minimum stated |
| 2. Voice | 2.D4 | Errors in main | PASS | §"Common Errors" AccordionGroup at line 331 with 5 entries covering WebRTC fail, broadcaster preview, black screen, latency over 5s, stream-key leak |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` used |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Latency Budget" (24), "Project Bootstrap" (22), "Stream Creation Endpoint" (24), "Broadcaster Page" (22), "Viewer Page" (22), "First Stream" (22), "Production Considerations" (22), "Common Errors" (24), **"Next Steps" FAIL banned (3.2)** |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 355 "## Next Steps" — banned per 3.2. Should be "Related Pages" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Low-Latency Live Streaming App" — 4 words; sidebarTitle "Low-Latency Streaming" is 2 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | task-oriented |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | "Build a sub-3-second glass-to-glass app with WHIP+WHEP" |
| 4. Structure | 4.3 | PREV/NEXT | PASS | Related links to VOD + Transcoding Quickstart + Gateway Setup + Production Hardening |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §"Required Tools" (47) lists Node 20+, gateway endpoint, editor |
| 4. Structure | 4.6 | Out-of-scope | MIXED | No explicit "what this isn't" — but Related cards correctly route to RTMP+HLS for higher-latency, VOD for persistent, Gateway Setup for self-host. Implicit scope boundary |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | unique content — sibling `vod-upload-and-playback.mdx` covers VOD; this covers live |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | MIXED | 4 Related cards: 2 internal `developers/build/tutorials/`, 1 internal `developers/guides/`, 1 cross-tab `/v2/gateways/quickstart/gateway-setup`. Only 1 cross-tab — needs ≥3 |
| 4. Structure | 4.11 | Discord test | PASS | full happy-path + Common Errors covers most reader questions |
| 4. Structure | 4.12 | Page size | PASS | 14.5 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | PASS | §"Latency Budget" table breaks down four hops + lever; §"Production Considerations" names 5 hardening surfaces (auth, lifecycle, recording, geo, fallback ordering); §"Common Errors" covers failure modes. B-frames trade-off explicit at line 70 |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | bash, ts, tsx all tagged |
| 4. Structure | 4.18 | Code-first opening | PASS | |
| 4. Structure | 4.19 | Errors in main | PASS | Common Errors inline before Next Steps |
| 4. Structure | 4.20 | API methods linked | MIXED | `getIngest`, `Broadcast.Root`, `Player.Root` not linked. Inline `LinkArrow` to Gateway Setup (line 53) and Production Hardening (line 327) — good pattern |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold mostly present; uses raw `<Steps>` not `<StyledSteps>` |
| 5. Layout | 5.2 | Required sections | MIXED | Required Tools PASS; raw Steps in Project Bootstrap (76-114); Verification implicit in §"First Stream" (297); Common Errors PASS; Next Steps PASS (banned heading) |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Latency Budget uses raw markdown table — should be `<StyledTable>` (5.23) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 26 `status: current` legacy field |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | Common Errors strong; missing StyledSteps + StyledTable + Tab icons + Card components |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | no multi-variant content (could be flat) |
| 5. Layout | 5.15 | Data imports | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Next Steps" H2 (355) with `<CardGroup>` — should be "Related Pages" + `<Columns>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (357); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | All 5 Accordions (lines 334, 337, 340, 343, 346) lack `icon` prop |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 4 code blocks (124, 155, 237, 299) lack `icon` and `title`. Strong filename comments inside the prose ("Save as `src/app/api/streams/route.ts`") but not in code-block metadata |
| 5. Layout | 5.21 | StyledSteps used | FAIL | line 76: raw `<Steps>` with 3 raw `<Step>` — should be `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | cards lack `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | FAIL | Latency Budget table (line 61-66) is raw markdown — should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | 11 dividers; opening after imports placed via `---` (line 39) which is YAML separator — should be `<CustomDivider />` per 5.26 |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram. Page would benefit from a Mermaid `sequenceDiagram` showing Camera → WHIP → Gateway → WHEP → Viewer with latency annotation |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | Tailwind class strings inside JSX `className="bg-blue-600 text-white..."` are utility classes not inline styles — PASS for 5.34. `status: current` legacy contradicts |
| 6. Veracity | 6.1 | Claims citable | MIXED | "0.5 to 3 seconds with WebRTC end-to-end" (41) — typical latency budget but uncited. "B-frames are the gotcha" — accurate but no link to WHIP RFC or WebRTC spec |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | no TESTED labels |
| 6. Veracity | 6.3 | Deprecated API | PASS | Next.js 15 App Router + Server Components patterns current |
| 6. Veracity | 6.4 | Numbers real | MIXED | Latency table "30-50ms", "50-200ms", "100-300ms" — ranges plausible but no source. "5-MB chunks" not in this page (that's VOD tutorial) |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | declares `verified` but installs unpinned + no TESTED labels — claim weak |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `create-next-app@latest`, `@livepeer/react` unpinned; line 158 has `const { useState } = React;` which is non-standard React import pattern — should be `import { useState } from 'react';` |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to: WHIP RFC (draft-ietf-wish-whip), WHEP RFC (draft-ietf-wish-whep), `@livepeer/react` repo, `livepeer` SDK repo |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | MIXED | 1 cross-tab in Related (Gateway Setup) |
| 7. Nav | 7.7 | Correct lane | PASS | |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | LinkArrow paths resolve (`/v2/gateways/quickstart/gateway-setup`, `/v2/developers/guides/production-hardening-checklist`) |
| 8. Links | 8.2 | External | NOT-TESTED | no external links to verify |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | Line 158: `const { useState } = React;` — React not imported at module scope, this idiom relies on the harness; may render but is non-standard |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | Persona 4 activation moment well-served |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Low-Latency Live Streaming App" | MIXED | 4 words |
| sidebarTitle | Yes | "Low-Latency Streaming" | PASS | 2 words |
| description | Yes | "Build a sub-3-second glass-to-glass streaming app..." | PASS | 130 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | declared but contradicted by unpinned installs + no TESTED labels |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | optional |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (11×) | Required | PASS placement; uses `---` YAML separator at line 39 — should be `<CustomDivider />` per 5.26 |
| `<Tip>` (header CTA) | Yes (36) | Required | PASS |
| `<CenteredContainer>` | Yes (35) | — | wraps Tip |
| `<Steps>` / `<Step>` | Yes (3 steps, raw) | — | FAIL 5.21 — should be `<StyledSteps>` |
| `<StyledSteps>` | No | Required for procedural | FAIL 5.21 |
| `<Tabs>` / `<Tab icon>` | No | — | not needed |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 group, 5 accordions) | Required for Common Errors | FAIL 5.19 — none have `icon` |
| `<StyledTable>` | No | Required | FAIL 5.23 — Latency Budget is raw markdown table |
| Fenced code with icon+title | Yes (4 blocks, 0 with icon+title) | Required | FAIL 5.20 |
| `<CardGroup cols={2}>` / `<Card>` | Yes (357) | — | FAIL 5.16+5.17 — should be `<Columns>` |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<LinkArrow>` | Yes (53, 112, 327) | — | PASS — used as inline cross-tab link |
| Mermaid | No | Recommended | FAIL 5.27 — page would benefit |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Stream Creation Endpoint" (118-148) creates a stream server-side; sibling `vod-upload-and-playback.mdx` creates an asset server-side — similar pattern, different artefact (Stream vs Asset). Defensible split.
- **LINK GAPS**: `@livepeer/react` (89) not linked to its repo or docs. `livepeer` SDK (94) same. WHIP and WHEP terms (4, 41, 51, 70, 152, 229) never linked to RFC drafts or any spec. `tus-js-client` referenced in sibling but not this page. STUN/TURN concept (229, 335, 341) not linked.
- **STRANDED**: Reader who completes "First Stream" has a working two-tab demo. Related Pages routes to VOD (sibling), Transcoding Quickstart (sibling), Gateway Setup (cross-tab), Production Hardening (sibling). No card to `/v2/about/network/architecture` for understanding WHIP/WHEP at protocol level, no card to `/v2/solutions/...` if a managed gateway is the preferred path.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | |
| US spellings | 0 | only CenteredContainer false-positive |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Banned constructions | 0 | |
| Question headings | 0 | |
| Studio refs | 0 | |
| Self-reference | 1 | line 41 "By the end of this tutorial you'll have..." — tutorial-activation pattern; acceptable but borderline |
| Banned heading | 1 | line 355 "## Next Steps" — 3.2 banned, should be "Related Pages" |
| Deprecated terms | 0 | line 41 mentions "broadcaster" — wait, that's a HIGH finding under 2.16: "Broadcaster" is deprecated for "Gateway". Re-examining: lines 41, 70, 151 (heading "Broadcaster Page"), 200, 224, 305, 309, 319, 337. **HOLD** — context matters: page uses "broadcaster" to mean the human/process producing the stream, not the Livepeer protocol role. Livepeer's "Broadcaster → Gateway" rename was for the network role. The colloquial "broadcaster" (=stream source) is the WHIP/WebRTC term of art. **AMBIGUOUS** — likely acceptable but should be clarified in voice rules. Flag as MEDIUM for rubric guidance |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Latency Budget | 24 |
| Project Bootstrap | 22 |
| Stream Creation Endpoint | 24 |
| Broadcaster Page | 22 |
| Viewer Page | 22 |
| First Stream | 22 |
| Production Considerations | 22 |
| Common Errors | 24 |
| **Next Steps** | **banned (3.2)** |

"Next Steps" is in the 3.2 banned-list and auto-FAILs regardless of score.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 78 (Step) | bash | ✗ | ✗ | NOT-TESTED | `create-next-app@latest` |
| 90 (Step) | bash | ✗ | ✗ | NOT-TESTED | `npm install @livepeer/react livepeer` — unpinned |
| 100 (Step) | bash | ✗ | ✗ | NOT-TESTED | `.env.local` template |
| 124 | ts | ✗ | ✗ | NOT-TESTED | `src/app/api/streams/route.ts` (filename in prose only) |
| 155 | tsx | ✗ | ✗ | NOT-TESTED | broadcaster page; uses `const { useState } = React;` non-standard import |
| 237 | tsx | ✗ | ✗ | NOT-TESTED | viewer page; same pattern |
| 299 | bash | ✗ | ✗ | NOT-TESTED | `npm run dev` |

All 7 blocks FAIL 5.20. Lines 155 and 237 use `const { useState } = React;` instead of `import { useState } from 'react';` — non-standard.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "sub-3-second glass-to-glass streaming app working in two browser tabs". §"First Stream" (297) delivers the activation — open two tabs, point camera at stopwatch, compare times. Strong outcome. Where it could go deeper: no benchmark numbers. The Latency Budget table promises 0.5-3s but the verification step is qualitative ("roughly the same time"). Reader can't tell whether 4 seconds means "your network is slow" or "your gateway is in the wrong region" without firmer numbers.
- **Fix step:** Add to §"First Stream" (297): a "Latency measurement" block with `<Tip>`: "Browser DevTools Performance tab + visible stopwatch frame-by-frame gives sub-100ms accuracy. Expected: 500-1500ms on local network; 1.5-3s cross-region. If you measure over 3s, see the latency-debugging Accordion in Common Errors." Currently the "Latency above 5 seconds" Accordion (343) addresses the worst case but not the diagnostic.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Step 7 "Confirm the loop is closed" — concrete success criteria with named tooling.

### Layer 2 — Composition
- **Gap:**
  1. Raw `<Steps>` (76) instead of `<StyledSteps>` (5.21).
  2. Raw markdown Latency Budget table (61-66) instead of `<StyledTable>` (5.23).
  3. Code blocks lack `icon` + `title` (5.20) — 7 blocks bare.
  4. Accordions lack `icon` (5.19) — 5 missing.
  5. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  6. H2 "Next Steps" banned heading (3.2) — should be "Related Pages".
  7. No Mermaid sequenceDiagram showing the WHIP→Gateway→WHEP flow with latency annotations (5.27).
  8. Opening separator `---` (line 39) is YAML-style not `<CustomDivider />` (5.26).
- **Fix step:**
  1. Convert lines 76-114 to `<StyledSteps iconColor="var(--accent)" titleColor="var(--accent)">` with `<StyledStep title icon>`. Import: `import { StyledSteps, StyledStep } from '/snippets/components/displays/steps/Steps.jsx'`.
  2. Convert lines 61-66 to `<StyledTable variant="bordered">` with `<TableRow header>` + `<TableCell header>`. Import: `import { StyledTable, TableRow, TableCell } from '/snippets/components/displays/tables/Tables.jsx'`.
  3. Add `icon="terminal" title="bash"` to all bash blocks; `icon="code" title="src/app/api/streams/route.ts"` to line 124; `icon="code" title="src/app/broadcast/page.tsx"` to line 155; `icon="code" title="src/app/watch/[playbackId]/page.tsx"` to line 237.
  4. Add `icon="circle-exclamation"`, `icon="video"`, `icon="signal"`, `icon="gauge"`, `icon="key"` to the 5 Accordions.
  5. Convert `<CardGroup cols={2}>` (357) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`.
  6. Rename "## Next Steps" (355) → "## Related Pages".
  7. Replace `---` at line 39 with `<CustomDivider />`.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` icon+title patterns; `ipfs-video-integration.mdx` StyledSteps usage (with the same hardcoded-hex caveat).

### Layer 3 — Cross-page integration
- **Gap:** Only 1 cross-tab Related Pages card. WHIP and WHEP terms never linked to RFC drafts. `@livepeer/react` library never linked. STUN/TURN never linked.
- **Fix step:**
  1. Add to Related Pages: card to `/v2/about/network/architecture` ("How transcoding flows through the network") + card to `/v2/solutions/...` for managed gateway alternative.
  2. Add inline links at first mention: WHIP → `https://datatracker.ietf.org/doc/draft-ietf-wish-whip/`, WHEP → `https://datatracker.ietf.org/doc/draft-ietf-wish-whep/`, `@livepeer/react` → repo, `livepeer` SDK → repo, STUN/TURN → MDN or RFC 5389.
  3. Add link to `/v2/gateways/setup/connect` (the cross-tab quickstart referenced in line 53) at line 112 too.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` §Sources accordion + `huggingface-to-livepeer-advanced.mdx` source discipline.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `veracityStatus: verified` declared but `create-next-app@latest`, `@livepeer/react`, `livepeer` unpinned — contradiction.
  2. Latency budget numbers (61-66) plausible but uncited.
  3. `const { useState } = React;` (line 158, 240) is unusual — implies React is destructured from a global, which only works in specific runtimes. Standard pattern is `import { useState } from 'react';`. Either it's a runtime contract that should be documented, or the snippet is wrong.
  4. No TESTED labels.
  5. B-frame compatibility claim (70) — accurate but unsourced.
- **Fix step:**
  1. Pin install commands at lines 79, 91. Add `{/* REVIEW: confirm latest stable */}`.
  2. Cite Latency Budget numbers to WebRTC stack tooling reference or measurement study (or add `{/* REVIEW: source */}` and downgrade to `unverified` until confirmed).
  3. Fix lines 158 and 240 to use standard `import { useState } from 'react';` (also `import { use, useEffect, useState } from 'react';` at line 240). The `const { useState } = React;` pattern only works if `React` is in scope globally; in Next.js App Router this requires `import React from 'react';` and breaks tree-shaking.
  4. Add TESTED labels.
  5. Add citation for B-frame + WebRTC ordering claim to WebRTC spec or RFC.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 `pyproject.toml` shows correct pinning pattern.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No `<Badge>` signalling maturity (WHIP/WHEP is recent spec; @livepeer/react still on v4 majors).
  2. No "When to use this vs RTMP+HLS" decision block at top — Related Pages mentions it but inline framing would let reader pick before they bootstrap.
  3. No cost signal. Live streaming compute is expensive vs VOD; reader has no clue.
  4. No production-readiness check. §"Production Considerations" lists 5 surfaces but doesn't say "this code is demo-only; production needs auth + rate limit + key rotation".
- **Fix step:**
  1. Add `<Badge>` near header: `<Badge>Tutorial — uses @livepeer/react v<X.Y.Z> + Next.js 15</Badge>`.
  2. Add §"When to use this" Tip after header CTA: 3 bullets — "Choose this if: glass-to-glass under 3s matters, browser ingest is OK, gateway provider supports WHIP+WHEP. Otherwise: see Transcoding Quickstart (RTMP+HLS) for OBS/external encoder workflows."
  3. Add cost paragraph to §"Production Considerations": "Live compute prices typically run higher than VOD. Check your gateway provider's per-minute live tier."
  4. Replace §"First Stream" success state with explicit "this is demo-grade; do not ship as-is" callout: `<Warning>This code authenticates nothing. Anyone hitting /api/streams creates a stream against your account. Add auth before deploying.</Warning>`.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 `<Warning>` (525) about reaching network state — same pattern for the demo→production caveat.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. H2 "Next Steps" (line 355) is banned per 3.2 — auto-FAIL heading.
2. All 7 code blocks lack `icon` + `title` (5.20).
3. All 5 Accordions lack `icon` prop (5.19).
4. Raw `<Steps>` instead of `<StyledSteps>` (5.21).
5. `const { useState } = React;` (lines 158, 240) is non-standard React import pattern — runtime fragility.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Rename H2 "Next Steps" (355) → "Related Pages" | 355 | HIGH | S | check 3.2 |
| 2 | Convert raw `<Steps>` / `<Step>` (76-114) to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; add Steps.jsx import | 31-33, 76-114 | HIGH | M | check 5.21 |
| 3 | Convert Latency Budget raw markdown table (61-66) to `<StyledTable variant="bordered">` with `<TableRow header>` + `<TableCell header>`; add Tables.jsx import | 31-33, 61-66 | HIGH | M | check 5.23 |
| 4 | Add `icon` + `title` to all 7 fenced blocks (78, 90, 100, 124, 155, 237, 299) | 7 blocks | HIGH | M | check 5.20 |
| 5 | Add `icon` prop to all 5 Accordions (334, 337, 340, 343, 346) | 334, 337, 340, 343, 346 | HIGH | S | check 5.19 |
| 6 | Convert `<CardGroup cols={2}>` (357) to `<Columns cols={2}>`; wrap each Card title in `<CustomCardTitle icon title horizontal />` | 355-370 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Fix `const { useState } = React;` on lines 158, 240 → standard `import { useState } from 'react';` (and `use` import at line 240) | 158, 240 | HIGH | S | check 6.3+6.8 |
| 8 | Pin `create-next-app@latest` (79) to a specific version; pin `@livepeer/react` + `livepeer` (91) | 79, 91 | HIGH | S | check 2.D3+6.8 |
| 9 | Remove legacy `status: current` field | 26 | MEDIUM | S | check 5.7 |
| 10 | Replace `---` YAML separator at line 39 with `<CustomDivider />` | 39 | MEDIUM | S | check 5.26 |
| 11 | Add cross-tab Related Pages cards (`/v2/about/network/architecture`, `/v2/solutions/...`) for ≥3 cross-tab coverage | Related Pages | MEDIUM | S | check 4.10+7.6 |
| 12 | Add inline links at first mention: WHIP RFC, WHEP RFC, `@livepeer/react` repo, `livepeer` SDK repo, STUN/TURN reference | 4, 41, 70, 89, 94, 229 | MEDIUM | M | check 6.10 |
| 13 | Add Mermaid `sequenceDiagram` showing Camera → WHIP → Gateway → WHEP → Viewer with latency annotation; use `MermaidColours.jsx` | after §"Latency Budget" | MEDIUM | M | check 5.27 |
| 14 | Cite Latency Budget numbers (61-66) to source OR downgrade `veracityStatus` to `unverified` | 61-66 + frontmatter | MEDIUM | S | check 6.1+6.6 |
| 15 | Add `<Badge>` near header with versioned tools (Next.js, @livepeer/react) | after Tip | INFO | S | layer 5 |
| 16 | Add §"When to use this" Tip with 3 bullets at top for decision-time guidance | after CenteredContainer Tip | INFO | S | layer 5 |
| 17 | Add `<Warning>` to §"First Stream" or §"Production Considerations" framing the demo→production gap | after 297 OR within 313 | INFO | S | layer 5 |
