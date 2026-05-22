# Review: vod-upload-and-playback.mdx

**Page**: `v2/developers/build/tutorials/vod-upload-and-playback.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 16,606
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | All required present; legacy `status: current` (line 27) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 17) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 19) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 18) |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` (line 20) |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` (line 21) |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 29) — but see 6.6 |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build a video upload and playback app..." subject-first, 117 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (vod, tus, hls, nextjs, assets) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | only CenteredContainer false-positive |
| 2. Voice | 2.2 | Banned words | PASS | 0 |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 42: "By the end of this tutorial you'll have..." — tutorial-activation pattern; rubric prefers entity-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer register; TUS, HLS, Server Components language correct |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | TUS, HLS, Asset API, playbackId all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 42 reader-second-person; body majority entity-led ("An asset passes through four phases...", "The TUS client uploads...") |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | MIXED | Tip + Asset Lifecycle table + Bootstrap before first server-route code at line 117 — acceptable framing |
| 2. Voice | 2.D2 | API methods linked | MIXED | `livepeer.asset.create`, `livepeer.asset.get`, `livepeer.playback.get`, `getSrc`, `tus.Upload` not linked. `Livepeer` SDK class not linked to repo |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `create-next-app@latest` (79); `livepeer @livepeer/react tus-js-client` (91) unpinned |
| 2. Voice | 2.D4 | Errors in main | PASS | §"Common Errors" AccordionGroup at line 422 with 5 entries |
| 2. Voice | 2.D5–D6 | self-evident / marketing | MIXED | line 44: 'Mux with AI bolted on' — colloquial framing; defensible as audience-appropriate |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` used |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Asset Lifecycle" (24), "Project Bootstrap" (22), "Upload Endpoints" (24), "Upload Component" (22), "Playback Page" (22), "Home Page" (20 — informal/generic), "Production Webhooks" (22), "Production Considerations" (22), "Common Errors" (24), **"Next Steps" FAIL banned (3.2)** |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 446 "## Next Steps" — banned |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "VOD Upload and Playback" — 4 words; sidebarTitle "VOD Tutorial" is 2 words |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §"Required Tools" (48) |
| 4. Structure | 4.6 | Out-of-scope | MIXED | implicit via Related Pages; no explicit "what this isn't" |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | unique content |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | 4 Related cards: 2 internal sibling, 1 internal video, 1 internal guides. Zero cross-tab |
| 4. Structure | 4.11 | Discord test | PASS | strong — upload, transcode, playback, webhooks, hardening, errors |
| 4. Structure | 4.12 | Page size | PASS | 16.6 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | PASS | §"Asset Lifecycle" table; §"Production Webhooks" framed as "polling for dev, webhooks for production"; §"Production Considerations" names 6 hardening surfaces; §"Common Errors" |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | ts, tsx, bash all tagged |
| 4. Structure | 4.18 | Code-first opening | PASS | |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | SDK methods unlinked |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold mostly present; raw `<Steps>` not `<StyledSteps>` |
| 5. Layout | 5.2 | Required sections | MIXED | Required Tools PASS; raw Steps (76) — FAIL 5.21; Verification implicit ("Open localhost:3000... click through to playback" line 380) — not H2; Common Errors PASS; Next Steps PASS (banned heading) |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Asset Lifecycle (63-68) + Production Webhooks (388-394) are raw markdown tables — should be `<StyledTable>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 27 `status: current` |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | Common Errors strong; Production Considerations + Webhooks excellent context; missing StyledSteps, StyledTable, code icon+title, Card components |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Next Steps" H2 (446) with `<CardGroup>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (448); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | FAIL | All 5 Accordions (lines 425, 428, 431, 434, 437) lack `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 7 fenced blocks lack `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | FAIL | raw `<Steps>` at line 76 |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5. Layout | 5.23 | StyledTable | FAIL | 2 raw markdown tables (63-68, 388-394) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables |
| 5. Layout | 5.25 | Max 1 major element | MIXED | StyledSteps would compress; multiple H2 sections + tables + Accordions — busy but justified |
| 5. Layout | 5.26 | CustomDivider | PASS | dividers; `---` at line 40 should be `<CustomDivider />` per 5.26 |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram. A Mermaid `stateDiagram` for the 4-phase asset lifecycle would replace the prose+table at 60-68 |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | Tailwind utility classes inside JSX — PASS; `status: current` legacy contradicts |
| 6. Veracity | 6.1 | Claims citable | MIXED | "TUS resumable, multi-gigabyte capable" (42) — accurate but unsourced; "production replaces with webhook subscriptions" (398) — implicit best practice not cited |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | Deprecated API | MIXED | Next.js 15 App Router patterns current; SDK API surface (`livepeer.asset.create`, `livepeer.playback.get`) should be pinned |
| 6. Veracity | 6.4 | Numbers real | MIXED | "5 MB chunks" (line 219) accurate for TUS; "120 attempts at 5s intervals" (233) shown; "10 minutes" (234) calculation explicit |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | declares `verified` but installs unpinned + no TESTED labels — claim weak |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `create-next-app@latest`, `@livepeer/react`, `livepeer`, `tus-js-client` all unpinned |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to: TUS protocol spec (`https://tus.io/protocols/resumable-upload`), `@livepeer/react` repo, `livepeer` SDK repo, `tus-js-client` repo, Livepeer Asset API reference |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | 0 cross-tab cards |
| 7. Nav | 7.7 | Correct lane | PASS | |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | LinkArrow path (`/v2/developers/guides/production-hardening-checklist`) resolves; inline access-control link at line 444 resolves |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | line 177: `const { useState } = React;` — same non-standard pattern as sibling `low-latency-live-streaming-app.mdx`; should be `import { useState } from 'react';` |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | Persona 2 VOD activation moment well-served |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "VOD Upload and Playback" | MIXED | 4 words |
| sidebarTitle | Yes | "VOD Tutorial" | PASS | 2 words |
| description | Yes | "Build a video upload and playback app..." | PASS | 117 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | contradicted by unpinned installs |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (12×) | Required | PASS placement; `---` at line 40 should be `<CustomDivider />` |
| `<Tip>` (header CTA) | Yes (37) | Required | PASS |
| `<CenteredContainer>` | Yes (36) | — | |
| `<Steps>` / `<Step>` | Yes (3 raw steps) | — | FAIL 5.21 |
| `<StyledSteps>` | No | Required for procedural | FAIL 5.21 |
| `<Tabs>` / `<Tab icon>` | No | — | |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 group, 5 accordions) | Required for Common Errors | FAIL 5.19 — none have `icon` |
| `<StyledTable>` | No | Required | FAIL 5.23 — 2 raw markdown tables |
| Fenced code with icon+title | Yes (7 blocks, 0 with icon+title) | Required | FAIL 5.20 |
| `<CardGroup cols={2}>` / `<Card>` | Yes (448) | — | FAIL 5.16+5.17 |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<LinkArrow>` | Yes (418) | — | PASS |
| Mermaid | No | Recommended | FAIL 5.27 |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Project Bootstrap" Steps (76-107) reprise generic Next.js bootstrap from `low-latency-live-streaming-app.mdx` (76-114) and `multi-tenant-billing-with-pymthouse.mdx` (124-152). All three pages duplicate this scaffolding. Could be a shared snippet.
- **LINK GAPS**: TUS protocol (terms appear lines 42, 92, 113, 175, 178, 213) never linked to `https://tus.io/`. `@livepeer/react` never linked. `livepeer` SDK never linked. `tus-js-client` repo never linked. Webhook payload structure not linked to webhook spec/docs.
- **STRANDED**: Reader who completes the upload-to-playback pipeline has a working VOD app. Related Pages routes to Low-Latency Streaming, Transcoding Quickstart, Multi-Tenant Billing, Production Hardening — all internal. No cross-tab links, no link to `/v2/about/network/` for protocol context, no link to `/v2/solutions/...` for managed alternatives.

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
| Self-reference | 1 | line 42 "By the end of this tutorial you'll have..." — tutorial pattern |
| Banned heading | 1 | line 446 "## Next Steps" |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Asset Lifecycle | 24 |
| Project Bootstrap | 22 |
| Upload Endpoints | 24 |
| Upload Component | 22 |
| Playback Page | 22 |
| Home Page | 20 |
| Production Webhooks | 22 |
| Production Considerations | 22 |
| Common Errors | 24 |
| **Next Steps** | **banned (3.2)** |

"Home Page" (20) is borderline; "Next Steps" auto-FAILs.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 78 (Step) | bash | ✗ | ✗ | NOT-TESTED | `create-next-app@latest` |
| 90 (Step) | bash | ✗ | ✗ | NOT-TESTED | `npm install` — unpinned |
| 100 (Step) | bash | ✗ | ✗ | NOT-TESTED | env file |
| 117 | ts | ✗ | ✗ | NOT-TESTED | `src/app/api/assets/route.ts` (filename in prose) |
| 140 | ts | ✗ | ✗ | NOT-TESTED | `src/app/api/assets/[id]/route.ts` |
| 174 | tsx | ✗ | ✗ | NOT-TESTED | Uploader.tsx; `const { useState } = React;` line 177 non-standard |
| 291 | tsx | ✗ | ✗ | NOT-TESTED | watch page |
| 335 | tsx | ✗ | ✗ | NOT-TESTED | home page; `const { useState } = React;` line 338 non-standard |
| 376 | bash | ✗ | ✗ | NOT-TESTED | `npm run dev` |

All 9 blocks (including 3 inside Steps) FAIL 5.20. Lines 177 and 338 share the non-standard React import pattern with sibling `low-latency-live-streaming-app.mdx`.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "video upload + transcode + playback in two tabs". Page delivers happy-path code and `npm run dev` activates it. Strong. Where it could go deeper: no benchmark numbers. The Asset Lifecycle table promises 4 phases but the verification step is "click through to playback" — qualitative. Reader can't tell whether transcoding stuck for 30s is normal or "your gateway is overloaded". Expected processing time (typical 1-5 minutes for SDXL-class file) not stated.
- **Fix step:** Add §"Verification" H2 before Production Webhooks with 4 success checks: (1) `POST /api/assets` returns asset+playbackId+tusUploadUrl; (2) TUS upload completes (progress hits 100% within file-size-dependent expected duration); (3) `GET /api/assets/<id>` returns `status: ready` within 5 minutes for typical 1-5min video; (4) `/watch/<playbackId>` plays HLS.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Step 7 + `low-latency-live-streaming-app.mdx` §"First Stream".

### Layer 2 — Composition
- **Gap:**
  1. Raw `<Steps>` (5.21) — Project Bootstrap (76).
  2. 2 raw markdown tables (63-68, 388-394) — 5.23 violation.
  3. Code blocks lack `icon` + `title` (5.20) — 9 blocks.
  4. Accordions lack `icon` (5.19) — 5 missing.
  5. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  6. "Next Steps" banned heading (3.2).
  7. No Mermaid `stateDiagram` for the 4-phase asset lifecycle (5.27).
  8. `---` at line 40 should be `<CustomDivider />` (5.26).
  9. Non-standard `const { useState } = React;` at lines 177, 338.
- **Fix step:**
  1. Convert lines 76-107 to `<StyledSteps iconColor="var(--accent)" titleColor="var(--accent)">` + `<StyledStep title icon>`.
  2. Convert lines 63-68 and 388-394 to `<StyledTable variant="bordered">`.
  3. Add `icon="terminal"`/`icon="code"` + `title="src/app/.../route.ts"` to all 9 blocks.
  4. Add `icon` prop to 5 Accordions: `icon="circle-exclamation"`, `icon="hourglass"`, `icon="circle-stop"`, `icon="video-slash"`, `icon="ban"`.
  5. Convert `<CardGroup cols={2}>` (448) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`.
  6. Rename "Next Steps" (446) → "Related Pages".
  7. Add Mermaid `stateDiagram-v2` showing `waiting → uploading → processing → ready` + `processing → failed` transitions with conditions. Use `MermaidColours.jsx`. Place between §"Asset Lifecycle" intro and the table (which becomes the detail view).
  8. Replace `---` at line 40 with `<CustomDivider />`.
  9. Fix lines 177 and 338 to use `import { useState } from 'react';` at the top of each file.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` icon+title patterns; sibling `low-latency-live-streaming-app.mdx` shares the React-import bug.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab cards. TUS protocol never linked. `@livepeer/react`, `livepeer` SDK, `tus-js-client` never linked. Webhook spec not linked.
- **Fix step:**
  1. Add cross-tab Related cards: `/v2/about/network/architecture` ("How transcoding flows through the network"), `/v2/gateways/setup/connect` ("Self-host the gateway that runs the Asset API"), `/v2/solutions/...` (managed VOD alternative).
  2. Add inline links at first mention: TUS protocol → `https://tus.io/protocols/resumable-upload`, `tus-js-client` → repo, `@livepeer/react` → repo, `livepeer` SDK → repo, webhook signature verification → docs.
  3. Add link to Asset API reference at first mention (line 42 or 55).
- **Source/exemplar:** Sibling tutorials' Related Pages 4-card pattern.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `veracityStatus: verified` declared but all installs unpinned — contradiction.
  2. Webhook event list (388-394) names 5 events but doesn't cite the gateway's webhook docs.
  3. "5 MB chunks" (219) is a default-best-practice claim; should cite TUS chunk-size guidance.
  4. No TESTED labels.
  5. Non-standard React import pattern in 2 places.
- **Fix step:**
  1. Pin `create-next-app@<X>`, `livepeer@<X>`, `@livepeer/react@<X>`, `tus-js-client@<X>`.
  2. Add `{/* REVIEW: confirm webhook event list against gateway docs */}` at line 388-394, or link to a gateway-spec page.
  3. Cite TUS chunk-size best practice (`https://tus.io/protocols/resumable-upload` or a TUS guide).
  4. Add TESTED labels.
  5. Fix the React import pattern (Layer 2 #9).
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` Path 2 pinning pattern.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No `<Badge>` signalling maturity (TUS + Asset API have been stable for a while; signal that).
  2. No cost signal. VOD storage costs + transcoding minutes vary by gateway provider; not surfaced.
  3. No "When to use VOD vs live streaming" decision block — Related Pages mentions both but inline framing would let reader pick before bootstrap.
  4. No production-readiness check beyond §"Production Considerations" — for an upload API that accepts arbitrary user video, content-moderation, format-validation, and rate-limiting should be called out explicitly.
- **Fix step:**
  1. Add `<Badge>` near header: `<Badge>Stable — Asset API + TUS production-ready since 2024</Badge>`.
  2. Add `<Tip>` after Required Tools or in Production Considerations: "Storage and transcoding cost varies by gateway provider; check your provider's per-minute tier."
  3. Add §"When to use VOD vs live" Tip at top: 2 bullets — "Use VOD for: pre-recorded content, replay, archives. Use live (see Low-Latency Streaming) for: real-time, broadcast."
  4. Add §"Security checklist" sub-block to Production Considerations: file-size limits, MIME validation, rate-limiting `/api/assets`, signed-URL playback for paid content.
- **Source/exemplar:** `multi-tenant-billing-with-pymthouse.mdx` §"Production Considerations" 5-bullet pattern + `low-latency-live-streaming-app.mdx` similar.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. H2 "Next Steps" (line 446) banned per 3.2.
2. Raw `<Steps>` (76) — should be `<StyledSteps>` (5.21).
3. 2 raw markdown tables (63-68, 388-394) — should be `<StyledTable>` (5.23).
4. All 9 code blocks lack `icon` + `title` (5.20).
5. All 5 Accordions lack `icon` (5.19).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Rename H2 "Next Steps" (446) → "Related Pages" | 446 | HIGH | S | check 3.2 |
| 2 | Convert raw `<Steps>` (76) to `<StyledSteps>` + `<StyledStep title icon>`; add Steps.jsx import | 32-34, 76-107 | HIGH | M | check 5.21 |
| 3 | Convert 2 raw markdown tables (63-68, 388-394) to `<StyledTable variant="bordered">`; add Tables.jsx import | 32-34, 63-68, 388-394 | HIGH | M | check 5.23 |
| 4 | Add `icon` + `title` to all 9 fenced blocks (78, 90, 100, 117, 140, 174, 291, 335, 376) | 9 blocks | HIGH | M | check 5.20 |
| 5 | Add `icon` prop to all 5 Accordions (425, 428, 431, 434, 437) | 425, 428, 431, 434, 437 | HIGH | S | check 5.19 |
| 6 | Convert `<CardGroup cols={2}>` (448) to `<Columns cols={2}>`; wrap titles in `<CustomCardTitle icon title horizontal />` | 446-461 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Fix non-standard React imports: replace `const { useState } = React;` on lines 177 and 338 with `import { useState } from 'react';` at top of each file | 177, 338 | HIGH | S | check 6.3+6.8 |
| 8 | Pin `create-next-app@latest` (79), `livepeer @livepeer/react tus-js-client` (91) to specific versions | 79, 91 | HIGH | S | check 2.D3+6.8 |
| 9 | Remove legacy `status: current` field | 27 | MEDIUM | S | check 5.7 |
| 10 | Replace `---` at line 40 with `<CustomDivider />` | 40 | MEDIUM | S | check 5.26 |
| 11 | Add §"Verification" H2 before Production Webhooks with 4 success checks | after 380 | MEDIUM | M | tutorial matrix |
| 12 | Add cross-tab Related Pages cards (about/network/architecture, gateways/setup/connect, solutions) for ≥3 cross-tab | Related Pages | MEDIUM | S | check 4.10+7.6 |
| 13 | Add inline links at first mention: TUS protocol, `tus-js-client`, `@livepeer/react`, `livepeer` SDK, Asset API reference | 42, 55, 91 | MEDIUM | M | check 6.10 |
| 14 | Add Mermaid `stateDiagram-v2` for 4-phase asset lifecycle; use `MermaidColours.jsx` | new diagram before §"Asset Lifecycle" table | MEDIUM | M | check 5.27 |
| 15 | Add `<Badge>` near header for Asset API + TUS maturity | after Tip | INFO | S | layer 5 |
| 16 | Add §"When to use VOD vs live" Tip at top with 2 decision bullets | after CenteredContainer Tip | INFO | S | layer 5 |
| 17 | Add §"Security checklist" sub-block to Production Considerations (size limits, MIME validation, rate-limit, signed URLs) | within 402-419 | INFO | M | layer 5 |
