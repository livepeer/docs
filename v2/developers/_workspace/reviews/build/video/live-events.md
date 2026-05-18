# Review: live-events.mdx (build/video)

**Page**: `v2/developers/build/video/live-events.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `how_to` (non-canonical)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 5,322
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 20) — non-canonical; should be `guide` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Absent |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Lines 4-6: "Managing live event streams on Livepeer: multistream targets, recording, access control, and stream lifecycle operations." 141 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "multistream", "recording", "access control", "playback policy" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | SDK code samples throughout |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 36: "A Livepeer live event stream supports..." Subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | No "broadcaster" reference on this page |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "A Livepeer live event stream supports...", "Multistream simultaneously pushes...", "Livepeer fires webhooks..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | Opens "Managing live event streams..." |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "JWT" (line 105) not expanded; "HMAC" not used here (but webhook security implications inherit from ingest-and-playback); "VOD asset" (line 36) not expanded on first use |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | guide |
| 2. Voice | 2.D2 | API/method has code or link | PASS | `client.multistream.createTarget`, `client.stream.create`, `client.accessControl.createSigningKey`, `client.stream.update`, `client.stream.terminate`, `client.stream.get`, `client.stream.getAll` all shown |
| 2. Voice | 2.D3 | Versions explicit | FAIL | SDK version not pinned anywhere |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Multistream Targets" (23), "Recording" (22), "Playback Access Control" (23), "Updating and Terminating Streams" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Live Events" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | MIXED | Three loosely-related topics (multistream, recording, access-control) plus a fourth utility section (update/terminate). The page would benefit from a clearer organising frame — "Operations on an active stream" |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer add multistream, recording, or access control to a live event" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Reader needs an existing stream (from ingest-and-playback) + API key + a signing-key concept for JWT — none stated |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | JWT signing token issuance referenced (line 119) but not detailed; webhook playback policy referenced (line 122-133) without webhook contract spec |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | `client.stream.create` shape repeats across Multistream / Recording / Access Control sections (lines 60-69, 80-90, 109-117, 124-133) — should be a single base shape with delta highlighting |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | All Related Pages cards stay inside `developers/` |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I record" but not "how long are recordings retained", "what's the JWT format", "how do I rotate a signing key" |
| 4. Structure | 4.12 | Page size | PASS | 5.3 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No trade-offs: multistream costs not named; recording storage costs not named; JWT vs webhook access control comparison not stated; no "when to use webhook playback policy vs JWT" |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All 9 blocks tagged `javascript` |
| 4. Structure | 4.18 | Code-first opening | N/A | guide |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | `pageType: how_to` non-canonical |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + H2s + Related Pages; Prerequisites absent |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | JWT vs Webhook access control would suit `<Tabs>` (parallel structure with `playbackPolicy.type`); currently sequential H3-style markdown bold labels (lines 104, 121). No table comparing the two methods |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 20: `pageType: how_to`; line 22: `status: current` |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | FAIL | JWT-based vs Webhook-based access control are parallel variants — should be `<Tabs>` with `<Tab title="JWT" icon="key">` and `<Tab title="Webhook" icon="webhook">` |
| 5. Layout | 5.15 | Data imports | FAIL | "60 seconds" idle (implicit from sibling page), max simultaneous multistream targets (not stated), JWT issuance algorithm — all hardcoded or absent. No data import for SDK methods |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Only Related Pages, no duplicate prose |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `<Card title=...>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No `<Tab>` on page (5.14 says there should be) |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No `<Accordion>` |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 9 code blocks (lines 46, 59, 79, 94, 106, 123, 143, 152, 158) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural section |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | All 4 Related Pages cards (lines 169-180) plain |
| 5. Layout | 5.23 | StyledTable | N/A | No tables on page |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 0 tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider line 34 OK; between H2s; before Related Pages |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram of multistream fan-out (Livepeer → multistream targets); no flow for JWT playback verification |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | guide |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | All SDK methods named without OpenAPI or repo references. JWT verification flow described (line 119: "Livepeer validates a signed JWT in the `accessKey` query parameter") — no spec link. Webhook playback policy 200/4xx behaviour described — no spec link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No SDK pin |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No upstream repo links |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2575 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 2 (Video Platform) lands here for production-grade event management; not signposted |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | All cards internal |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | All 4 cards resolve |
| 8. Links | 8.2 | External | N/A | No external links |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Multistream + recording + access-control covered. Missing: monitoring/health checks, low-latency mode, viewer count integration |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Reader can copy each example but cannot fully construct production access-control without leaving the page |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 2 unsigned |
| 10. Completeness | 10.4 | Scope | MIXED | |
| 10. Completeness | 10.5 | Self-containment | MIXED | JWT issuance details deferred to "your application issues tokens" without code |
| 10. Completeness | 10.6 | Language paths | FAIL | All examples are JavaScript only. Python parity absent despite being a documented SDK in `overview.mdx` |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Live Events" | PASS | 2 words |
| sidebarTitle | Yes | "Live Events" | PASS | |
| description | Yes | "Managing live event streams on Livepeer..." | PASS | 141 chars, subject-led |
| pageType | Yes | how_to | FAIL | Non-canonical |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required |
| complexity | No | — | FAIL | Required |
| lifecycleStage | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Required |
| lastVerified | Yes | '2026-05-13' | PASS | |
| status | Yes | current | FAIL | Legacy field |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | OK |
| `<Tabs>` / `<Tab icon>` | No | Required for parallel variants | Yes | Missing — JWT vs Webhook access control should be Tabs |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav Cards | — | All cards plain |
| Fenced code with icon + title | No | Required | — | All 9 missing |
| `<Note>` | No | — | — | |
| `<Tip>` | Yes (header CTA) | — | — | OK |
| `<StyledTable>` | No | Recommended | — | No tables — but JWT vs Webhook comparison would benefit from one |
| `<AccordionGroup>` | No | Recommended | — | Production considerations / FAQ would suit |
| Mermaid | No | Recommended | — | Multistream fan-out / JWT verification flow absent |

## Cross-page duplication and link gaps

- **OVERLAP**: `client.stream.create` shape (lines 60-69, 80-90, 109-117, 124-133) appears 4 times on this page alone, plus once each on `overview.mdx`, `ingest-and-playback.mdx`. Should be a single base shape with delta highlighting.
- **OVERLAP**: Recording section (lines 75-96) and `vod-and-recording.mdx` Polling section overlap on the `asset.status` lifecycle — pages should cross-link, not duplicate.
- **LINK GAPS**: No link to `livepeer/livepeer-js`. No link to OpenAPI spec for `MultistreamTarget`, `PlaybackPolicy`, `RecordingSpec`.
- **LINK GAPS**: JWT validation flow described without a spec link or example JWT decoding code.
- **LINK GAPS**: "Your application returns 200 to allow or 4xx to deny" (line 135) — no link to webhook playback policy contract page.
- **STRANDED**: Reader implementing JWT-gated playback cannot complete the job from this page alone (issuance is off-page); no link provided to the issuance docs.

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
| Multistream Targets | 5 | 4 | 5 | 5 | 4 | 23 |
| Recording | 4 | 4 | 5 | 5 | 4 | 22 |
| Playback Access Control | 5 | 4 | 5 | 5 | 4 | 23 |
| Updating and Terminating Streams | 4 | 4 | 4 | 5 | 4 | 21 |
| Related Pages | exempt | — | — | — | — | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 46 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — multistream target |
| 59 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — attach target to stream |
| 79 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — record true |
| 94 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — getAll recordings |
| 106 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — createSigningKey + JWT policy |
| 123 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — webhook playback policy |
| 143 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — stream.update |
| 152 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — stream.terminate |
| 158 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 — stream.get |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** A reader implementing live-event features needs a decision: JWT vs Webhook access control? The page presents both with parallel code but no comparison: which is harder to set up, which scales better, which is right for ticketed events, which for cohort gating. Without that, the reader picks the first one they see (JWT) and may regret it later.
- **Fix step:** Add a "JWT vs Webhook access control" decision callout immediately before line 100 H2 — a 4-row `<StyledTable>` comparing: setup effort, latency overhead per playback request, key rotation cost, suitability (ticketed-events / cohort-gating). Add a "When to use which" sentence per row.
- **Source/exemplar:** `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 1 — decision matrix pattern.

### Layer 2 — Composition
- **Gap:** JWT and Webhook access-control variants are parallel content but laid out sequentially (5.14). All 9 code blocks missing `icon` + `title` (5.20). Related Pages uses CardGroup + plain Card (5.17, 5.22). No Mermaid for multistream fan-out (Livepeer → YouTube + Twitch + custom) or for JWT verification flow (5.27).
- **Fix step:** (a) Convert the JWT-based / Webhook-based content blocks (lines 104-135) into `<Tabs>` with `<Tab title="JWT" icon="key">` and `<Tab title="Webhook" icon="webhook">`. (b) Add `icon="js"` + `title="<descriptive>.js"` to every code block. (c) Convert `<CardGroup>` (line 168) to `<Columns cols={2}>` + `<CustomCardTitle>`. (d) Add a Mermaid sequence for JWT playback verification: client → Livepeer player → query `accessKey` → Livepeer signs check → playback grant/deny. (e) Add a Mermaid fan-out for multistream: source → Livepeer transcode → 3 RTMP destinations.
- **Source/exemplar:** `MermaidColours.jsx`; check 5.14 + 5.17 in rubric.

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/livepeer-js` at first SDK mention. No link to OpenAPI spec for `MultistreamTarget`, `PlaybackPolicy`, `RecordingSpec`. JWT issuance flow asserts "Your application issues tokens signed with the signing key private key" (line 119) — no link to a JWT issuance code example or guide. Webhook playback policy contract not linked. Zero cross-tab graduation (Solutions for managed ticketing, Gateways for self-host).
- **Fix step:** (a) Inline link at line 47 first `Livepeer` mention. (b) Inline link to OpenAPI schema at first mention of each shape. (c) Add a `<LinkArrow>` after the JWT example: "JWT issuance reference → /v2/developers/build/applications/access-control-jwt" (if exists) or to API ref. (d) Add ≥3 cross-tab cards to Related Pages: `/v2/solutions/...` (managed ticketing), `/v2/gateways/setup/connect` (self-host gateway with multistream support), `/v2/about/network/architecture`.
- **Source/exemplar:** `livepeer/livepeer-js`; OpenAPI spec for the four payload schemas referenced.

### Layer 4 — Veracity and source authority
- **Gap:** Every SDK method named without OpenAPI source link. JWT verification flow described prose-only — no spec, no example token, no signing-key format reference. Webhook playback policy 200/4xx behaviour described without contract spec. `veracityStatus` absent; SDK version unpinned. Multistream rate limit / max targets per stream not stated.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) Link OpenAPI shape paths for `MultistreamTarget`, `PlaybackPolicy`, `RecordingSpec` at first mention. (c) Add JWT issuance code example using a minimal `jsonwebtoken` snippet to make the flow runnable. (d) Pin SDK install. (e) Add a "Limits" subsection naming max multistream targets per stream and any rate-limit values.
- **Source/exemplar:** `livepeer/livepeer-js` OpenAPI directory; `jsonwebtoken` npm package for the JWT example.

### Layer 5 — Product-forward depth
- **Gap:** Page is a feature catalogue, not a production guide. No statement of cost per multistream destination, no recording storage retention/cost, no JWT key rotation guidance, no advice on "running an event with 10k viewers" (rate limits, redundancy, fall-back, monitoring), no `terminate`-after-grace-period pattern, no recording-failure recovery. Persona 2 building a ticketed conference platform reads this and gets the basics but no production playbook.
- **Fix step:** Add a §"Running production events" H2 before Related Pages with sub-sections (or `<AccordionGroup>`): recording cost/retention, multistream cost per target, JWT key rotation cadence + helper code, recommended monitoring webhooks subset, recovery from `stream.recording.failed` (if such event exists), graceful termination pattern. Link each to operations docs.
- **Source/exemplar:** `.claude/references/layout/exemplars.md`; Persona 2 brief.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter: non-canonical `pageType: how_to` (1.2); missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (4 required fields); retains legacy `status: current` (5.7).
2. JWT vs Webhook playback policy variants laid out sequentially when they're parallel content — must be `<Tabs>` with `icon` props (5.14, 5.18). Reader can't compare without scrolling.
3. All 9 code blocks missing `icon` + `title` (5.20). Related Pages uses `<CardGroup>` + plain `<Card>` not `<Columns>` + `<CustomCardTitle>` (5.17, 5.22). Zero cross-tab graduation links (4.10, 7.6).
4. No Prerequisites section despite requiring an existing stream + API key + signing-key knowledge (4.5).
5. No Mermaid diagrams of multistream fan-out or JWT verification flow (5.27). Production concerns (key rotation, costs, retention, rate limits) absent (4.15, Layer 5).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified`; change `pageType: how_to` → `pageType: guide`; remove `status: current` | 20-23 | HIGH | S | check 1.2+1.4+1.6+1.7+1.8+5.7 |
| 2 | Wrap JWT-based + Webhook-based access control variants (lines 104-135) in `<Tabs>` with `<Tab title="JWT" icon="key">` and `<Tab title="Webhook" icon="webhook">` | 104-135 | HIGH | M | check 5.14+5.18 |
| 3 | Replace `<CardGroup cols={2}>` (line 168) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 166-181 | HIGH | M | check 5.17+5.22 |
| 4 | Add `icon="js"` + descriptive `title` to every javascript code block | 46, 59, 79, 94, 106, 123, 143, 152, 158 | HIGH | M | check 5.20 |
| 5 | Add Prerequisites H2 after the opening prose: existing stream (from ingest page), API key, signing-key knowledge for JWT | after 36 | HIGH | S | check 4.5+5.2 |
| 6 | Add a JWT vs Webhook decision `<StyledTable>` before line 100 H2 comparing setup, latency, key rotation, suitability | before 100 | HIGH | M | Layer 1 |
| 7 | Add ≥3 cross-tab Related Pages cards: `/v2/solutions/...` (managed ticketing), `/v2/gateways/setup/connect`, `/v2/about/network/architecture` | 166-181 | HIGH | S | check 4.10+7.6 |
| 8 | Add Mermaid: multistream fan-out (source → Livepeer transcode → 3 RTMP destinations) before line 73 divider; JWT playback verification sequence before/inside Access Control tabs | before 73, before 100 | HIGH | L | check 5.27 |
| 9 | Inline link at line 47 first SDK mention: `[livepeer-js](https://github.com/livepeer/livepeer-js)`; link OpenAPI shape paths at first mention of `MultistreamTarget`, `PlaybackPolicy`, `RecordingSpec` | 47, 50, 84, 112 | MEDIUM | S | check 6.10 |
| 10 | Add a JWT issuance code example using `jsonwebtoken` so the access-control flow is end-to-end runnable | after JWT tab | MEDIUM | M | Layer 4 |
| 11 | Add §"Running production events" H2 before Related Pages with key rotation cadence, multistream limits, recording retention, monitoring webhook subset | before 166 | MEDIUM | M | Layer 5 |
| 12 | Pin SDK install when first introduced; reference shared SDK version data module | new install block | MEDIUM | S | check 2.D3+6.8 |
| 13 | Add a Python parity tab for at least one of the four major flows (multistream, recording, access control, terminate) | each section | MEDIUM | L | check 10.6 |
| 14 | De-duplicate `client.stream.create` shape: replace all four full repeats with a single canonical example + delta highlights (additional fields only) | 60-69, 80-90, 109-117, 124-133 | INFO | M | check 4.8 |
| 15 | Inline-define JWT, VOD on first use | 36, 105 | INFO | S | check 2.21 |
