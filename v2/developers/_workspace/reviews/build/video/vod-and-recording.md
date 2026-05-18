# Review: vod-and-recording.mdx (build/video)

**Page**: `v2/developers/build/video/vod-and-recording.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `how_to` (non-canonical)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 4,710
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 21) — non-canonical; should be `guide` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Absent |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Lines 4-6: "Upload and transcode video-on-demand assets on Livepeer: direct upload, upload via URL, transcoding profiles, and retrieving playback URLs." 152 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer", "VOD" generic; "video on demand", "asset upload", "transcoding", "HLS", "playback", "livepeer SDK" — mixed |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 37: "VOD assets on Livepeer are video files..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "VOD assets on Livepeer are…", "The simplest path is upload-via-URL", "Once `asset.status.phase === 'ready'`…" |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "ABR" (line 37) not expanded; "HLS" (line 37) not expanded; "playbackId" / "playbackUrl" not formally defined |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | guide |
| 2. Voice | 2.D2 | API/method has code or link | PASS | All asset methods shown |
| 2. Voice | 2.D3 | Versions explicit | FAIL | `@livepeer/react` named (line 107) — no version pin; `livepeer` SDK no pin |
| 2. Voice | 2.D4 | Errors in main content | MIXED | One error path included in `waitForAsset` (line 89: `if (asset.status.phase === 'failed') throw new Error(asset.status.errorMessage)`); no broader error states named |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Upload via URL" (22), "Direct Upload" (22), "Polling for Completion" (22), "Playback URL" (22), "Updating and Deleting Assets" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Video on Demand" — 3 words; sidebarTitle "VOD" — 1 word. Acceptable |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | VOD asset lifecycle |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer upload a video and get a playback URL" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Reader needs API key + SDK install — neither stated |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | `client = new Livepeer({ apiKey })` import shape (lines 46-48) repeats the same pattern on every page; should be a shared SDK init snippet |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | All 4 cards internal |
| 4. Structure | 4.11 | Discord test | MIXED | Covers upload/poll/playback but not "what file types are supported" (in `codec-support.mdx`, should link), "how big can a file be", "what does failed-status diagnosis look like" |
| 4. Structure | 4.12 | Page size | PASS | 4.7 KB (below 5 KB threshold but acceptable for a focused how_to) |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No "when to use direct upload vs upload-via-URL"; no max file size; no recommended polling cadence beyond the magic-number 3000ms (line 90); no comparison of `staticMp4: true/false` outcomes; no recording-via-livestream cross-link |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All 7 blocks tagged (`javascript`, `jsx`) |
| 4. Structure | 4.18 | Code-first opening | N/A | guide |
| 4. Structure | 4.19 | Error states in main | MIXED | `failed` path noted in code only |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | `pageType: how_to` non-canonical |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + H2s + Related Pages present; Prerequisites absent |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Upload-via-URL vs Direct Upload are decision-parallel paths; should be `<Tabs>` (5.14) |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 21 `pageType: how_to`; line 23 `status: current` |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | Upload → Poll → Playback → Manage |
| 5. Layout | 5.14 | Multi-view layout | FAIL | Upload via URL (line 41) and Direct Upload (line 60) are parallel paths in the same task — should be `<Tabs>` |
| 5. Layout | 5.15 | Data imports | FAIL | "3000 ms" polling delay hardcoded (line 90); `livepeercdn.com` host hardcoded (line 95); no shared SDK init |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Related Pages only |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` not `<Columns>`; plain `<Card>` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs (should be) |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 7 code blocks (lines 45, 64, 84, 106, 128, 137, 143) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | All 4 Related Pages cards plain |
| 5. Layout | 5.23 | StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 0 tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram of asset lifecycle (upload → `waiting` → `processing` → `ready` / `failed`); high-value 4-state machine that would communicate the page's content faster than the polling code |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | `asset.status.phase` enum (`waiting | processing | ready | failed`) not linked to OpenAPI; `livepeercdn.com` playback host not citable; `staticMp4: false` semantics not linked to source |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | 3000ms polling cadence is a magic number; 50 limit in `getAll` is reasonable example; no API rate-limit context |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No SDK pin; `@livepeer/react` no pin |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to `livepeer/livepeer-js`, `livepeer/livepeer-react`, OpenAPI spec |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2576 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 2 unsigned |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | All cards internal |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | All 4 cards resolve |
| 8. Links | 8.2 | External | N/A | |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | Upload/poll/playback/manage covered |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Prereq missing |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 2 unsigned |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | `@livepeer/react` Player setup not detailed — links to its own page |
| 10. Completeness | 10.6 | Language paths | FAIL | JavaScript only; Python parity absent |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Video on Demand" | PASS | 3 words |
| sidebarTitle | Yes | "VOD" | PASS | |
| description | Yes | "Upload and transcode video-on-demand assets on Livepeer..." | PASS | 152 chars, subject-led |
| pageType | Yes | how_to | FAIL | Non-canonical |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required |
| complexity | No | — | FAIL | Required |
| lifecycleStage | No | — | FAIL | Required |
| keywords | Yes | array | MIXED | Some generic |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Required |
| lastVerified | Yes | '2026-05-13' | PASS | |
| status | Yes | current | FAIL | Legacy field |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | OK |
| `<Tabs>` / `<Tab icon>` | No | Required for upload-method variants | Yes | Missing |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav Cards | — | All cards plain |
| Fenced code with icon + title | No | Required | — | All 7 missing |
| `<Tip>` | Yes (header CTA) | — | — | OK |
| `<StyledTable>` | No | Recommended | — | A `status.phase` enum table would suit |
| `<AccordionGroup>` | No | Recommended | — | "Common upload failures" Accordion would suit |
| Mermaid | No | Recommended | — | Asset lifecycle state machine absent |

## Cross-page duplication and link gaps

- **OVERLAP**: SDK init pattern (lines 46-48) duplicates `overview.mdx`, `ingest-and-playback.mdx`, `live-events.mdx`. Shared snippet would centralise.
- **OVERLAP**: `asset.status.phase` lifecycle (line 57) overlaps with `live-events.mdx` recording flow — both pages handle the same `asset.updated` webhook independently.
- **LINK GAPS**: No link to `livepeer/livepeer-js`, `livepeer/livepeer-react`. No link to OpenAPI spec for `Asset`, `AssetStatus`, `UploadUrlPayload`.
- **LINK GAPS**: `codec-support.mdx` is the natural cross-link for "what file types upload" but unlinked here.
- **LINK GAPS**: `staticMp4: false` (line 53) — no docs link explaining what `true` does.
- **STRANDED**: Reader hitting `asset.status.phase === 'failed'` (line 89) gets `errorMessage` but no diagnostic guide.

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
| Upload via URL | 5 | 4 | 4 | 5 | 4 | 22 |
| Direct Upload | 5 | 4 | 4 | 5 | 4 | 22 |
| Polling for Completion | 4 | 4 | 5 | 5 | 4 | 22 |
| Playback URL | 5 | 4 | 4 | 5 | 4 | 22 |
| Updating and Deleting Assets | 4 | 4 | 5 | 5 | 4 | 22 |
| Related Pages | exempt | — | — | — | — | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 45 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — createViaUrl |
| 64 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — createUploadUrl |
| 84 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — waitForAsset polling |
| 106 | jsx | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — @livepeer/react Player |
| 128 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — asset.update |
| 137 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — asset.delete |
| 143 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — asset.getAll |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "upload and transcode VOD" — but doesn't help the reader decide between Upload via URL and Direct Upload. The two methods solve different scenarios (server-side ingest from object storage vs. browser-side user upload). The page presents both sequentially without naming the decision.
- **Fix step:** Add a 2-row decision block above the first H2: "Use Upload via URL when your source already lives at a public/signed URL (S3, GCS, archive). Use Direct Upload when the source lives on the client (browser, mobile)." Wrap as `<Tip>` or a 2-row `<StyledTable>`.
- **Source/exemplar:** `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 1 — decision-first pattern.

### Layer 2 — Composition
- **Gap:** Upload variants sequential when they're parallel (5.14 FAIL — should be `<Tabs>`). All 7 code blocks missing `icon` + `title` (5.20). Related Pages CardGroup + plain Card (5.17, 5.22). No Mermaid for asset lifecycle (5.27). No `<StyledTable>` for `status.phase` enum.
- **Fix step:** (a) Wrap Upload via URL + Direct Upload (lines 41-76) in `<Tabs>` with `<Tab title="Upload via URL" icon="link">` and `<Tab title="Direct upload" icon="upload">`. (b) Add `icon="js"`/`icon="code"` + descriptive `title` to all 7 code blocks. (c) Replace `<CardGroup>` (line 154) with `<Columns>` + `<CustomCardTitle>`. (d) Add a Mermaid state diagram of `waiting → processing → ready / failed` before the Polling H2. (e) Convert `status.phase` enum prose (line 57) to a 4-row `<StyledTable>` with phase, meaning, next action.
- **Source/exemplar:** Mermaid state diagram syntax; `MermaidColours.jsx`.

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/livepeer-js`. No link to `livepeer/livepeer-react` for the Player example. No link to `codec-support.mdx` when file format question is implicit. `@livepeer/react` Player setup (line 106) defers to a sibling page (`frontend-react-player`) — link is in Related Pages but not at the point of reference. No cross-tab graduation.
- **Fix step:** (a) Inline link at line 47 first SDK mention. (b) Inline link at line 107 to `livepeer/livepeer-react`. (c) Inline link to `codec-support.mdx` near line 37 ("video files") — points reader at supported types. (d) Add ≥3 cross-tab Related Pages cards: `/v2/solutions/portal` (managed VOD), `/v2/gateways/setup/connect`, `/v2/about/network/architecture`.
- **Source/exemplar:** `livepeer/livepeer-js`, `livepeer/livepeer-react`; sibling `codec-support.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** `asset.status.phase` enum not linked to OpenAPI; `staticMp4: false` not linked; `livepeercdn.com` playback host not citable; 3000ms polling cadence is a magic number. SDK unpinned. `veracityStatus` absent. `@livepeer/react` version not pinned.
- **Fix step:** (a) Link OpenAPI `Asset` schema. (b) Replace `staticMp4: false` with a citation to docs or remove. (c) Replace 3000ms with citation to recommended polling cadence or webhook-first alternative emphasised. (d) Pin SDK + `@livepeer/react` versions; reference shared data module. (e) Add `veracityStatus: unverified`.
- **Source/exemplar:** `livepeer/livepeer-js` OpenAPI directory.

### Layer 5 — Product-forward depth
- **Gap:** No max file size stated, no upload speed expectations, no recommended chunked-upload pattern for large files, no "failed-status diagnosis" Accordion, no cost-per-GB-transcoded, no recording-via-livestream cross-link with state-machine continuity, no signal of CDN/edge characteristics for `livepeercdn.com`. Page tells the reader what to call but not what production looks like.
- **Fix step:** Add a §"Production considerations" or `<AccordionGroup>` covering: max file size + chunking strategy, expected transcode duration vs file size, failed-status diagnostic checklist, asset.updated webhook recommendation (with link to ingest page), recording-from-live-stream cross-link (`live-events.mdx` Recording section). Add `<Badge>` maturity signal.
- **Source/exemplar:** Persona 2 brief; `.claude/references/layout/exemplars.md`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter: non-canonical `pageType: how_to` (1.2); missing 4 required fields (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`); retains legacy `status: current` (5.7).
2. Upload via URL + Direct Upload presented sequentially when they're parallel paths — should be `<Tabs>` with `icon` props (5.14, 5.18).
3. All 7 code blocks missing `icon` + `title` (5.20). Related Pages uses `<CardGroup>` + plain `<Card>` (5.17, 5.22). Zero cross-tab graduation (4.10, 7.6).
4. No Prerequisites section (4.5). No Mermaid for the 4-state asset lifecycle (5.27). No `<StyledTable>` for `status.phase` enum (5.5).
5. Veracity gaps: `asset.status.phase` enum, `staticMp4` semantics, `livepeercdn.com` playback host, 3000ms polling cadence — all uncited (6.1). SDK + `@livepeer/react` unpinned (2.D3, 6.8).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: build`, `complexity: beginner`, `lifecycleStage: build`, `veracityStatus: unverified`; change `pageType: how_to` → `pageType: guide`; remove `status: current` | 21-24 | HIGH | S | check 1.2+1.4+1.6+1.7+1.8+5.7 |
| 2 | Wrap Upload via URL + Direct Upload (lines 41-76) in `<Tabs>` with `<Tab title="Upload via URL" icon="link">` and `<Tab title="Direct upload" icon="upload">` | 41-76 | HIGH | M | check 5.14+5.18 |
| 3 | Replace `<CardGroup cols={2}>` (line 154) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 152-167 | HIGH | M | check 5.17+5.22 |
| 4 | Add `icon` + `title` to every code block: `icon="js"` + descriptive titles (`upload-via-url.js`, `direct-upload.js`, `poll-asset.js`, `vod-player.jsx`, `asset-update.js`, etc.) | 45, 64, 84, 106, 128, 137, 143 | HIGH | M | check 5.20 |
| 5 | Add Prerequisites H2 after the opening prose: API key, `livepeer` SDK install, `@livepeer/react` for Player example | after 37 | HIGH | S | check 4.5+5.2 |
| 6 | Add a Mermaid state diagram of asset lifecycle (`waiting → processing → ready / failed`) before line 80 "Polling for Completion" | before 80 | HIGH | M | check 5.27 |
| 7 | Add a decision callout above the first H2: "Upload via URL when source has a public/signed URL; Direct Upload when source is on client" | before 41 | HIGH | S | Layer 1 |
| 8 | Add ≥3 cross-tab Related Pages cards: `/v2/solutions/portal`, `/v2/gateways/setup/connect`, `/v2/about/network/architecture` | 152-167 | HIGH | S | check 4.10+7.6 |
| 9 | Convert `status.phase` enum prose (line 57) to a `<StyledTable>` with 4 rows (`waiting`, `processing`, `ready`, `failed`) — meaning + next action per row | 57 | MEDIUM | M | check 5.5+5.23 |
| 10 | Inline link at line 47 first SDK mention `[livepeer-js](https://github.com/livepeer/livepeer-js)`; line 107 `[livepeer-react](https://github.com/livepeer/livepeer-react)` | 47, 107 | MEDIUM | S | check 6.10 |
| 11 | Inline link at line 37 first "video files" mention to `codec-support.mdx` for supported types | 37 | MEDIUM | S | check 8.1 |
| 12 | Pin `livepeer` and `@livepeer/react` versions via shared `snippets/data/sdks/livepeer-versions.json` data module | install blocks | MEDIUM | S | check 2.D3+6.8 |
| 13 | Add §"Production considerations" or `<AccordionGroup>` with: max file size + chunking, transcode duration vs file size, failed-status diagnostic checklist, asset.updated webhook preference, recording-from-stream cross-link | before Related Pages | MEDIUM | M | Layer 5 |
| 14 | Add a Python parity tab for at least the createViaUrl + waitForAsset flows | each Tabs block | MEDIUM | L | check 10.6 |
| 15 | Label every code block `TESTED YYYY-MM-DD against livepeer@<version>` once pinned | all code | INFO | M | check 6.2 |
| 16 | Drop generic keyword "livepeer" + "VOD"; add `asset-upload`, `asset-status`, `playbackid`, `livepeer-react`, `static-mp4` | 7-15 | INFO | S | check 1.13 |
