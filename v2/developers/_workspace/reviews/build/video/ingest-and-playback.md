# Review: ingest-and-playback.mdx (build/video)

**Page**: `v2/developers/build/video/ingest-and-playback.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `how_to` (non-canonical)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 5,880
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (lines 1-26) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 22) — not in canonical 7-type set (rubric 1.2: `concept | tutorial | guide | instruction | navigation | reference | resource`). Should be `guide` (or `instruction` if a single-task page) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Absent; ships with legacy `status: current` (line 24) |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Line 4-6 multiline: "Configuring RTMP ingest for live streams on Livepeer: stream creation, ingest endpoints, transcoding profiles, and webhook events." 137 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "RTMP", "stream key", "HLS", "ABR", "transcoding profiles", "webhooks" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | SDK code samples, webhook payload mechanics |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 38: "Livepeer accepts live video via RTMP." Subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | Line 103: "go-livepeer broadcaster gateway also accepts RTMP" and "running in broadcaster mode" — deprecated terms per 2.16 |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Livepeer accepts...", "A stream object holds...", "The stream key embedded..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | Opens "Configuring RTMP ingest..." — gerund + subject |
| 2. Voice | 2.16 | Zero deprecated terms | FAIL | Line 103: "broadcaster gateway" + "broadcaster mode" — two deprecated uses |
| 2. Voice | 2.17 | Universal terms | MIXED | Mixes "broadcaster" with the rest of the page's Gateway language |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | FAIL | "broadcaster" not in glossary |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | See 2.16 |
| 2. Voice | 2.21 | First-use defined | MIXED | "RTMP" (line 38) not expanded on first use; "HLS" never expanded; "ABR" (line 123) never expanded; "HMAC-SHA256" (line 162) not expanded |
| 2. Voice | 2.22 | Terminology lock | FAIL | See 2.16 |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | guide page |
| 2. Voice | 2.D2 | API/method has code or link | PASS | `client.stream.create`, `client.webhook.create` both shown |
| 2. Voice | 2.D3 | Versions explicit | FAIL | Neither `livepeer` JS SDK nor `livepeer` Python SDK pinned at install. Page assumes both work today |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states named |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | FAIL | `<Note>` at line 161-163 carries primary security content: HMAC-SHA256 verification of `Livepeer-Signature` header. This is critical for any production webhook consumer — must be inline `<Warning>` or main prose |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Stream Creation" (22), "Pushing a Stream" (22), "Transcoding Profiles" (22), "Stream Events" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No banned terms; uses "Related Pages" correctly |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | Title "Ingest" (line 2) — 1 word, but page covers ingest + playback (per filename `ingest-and-playback.mdx`); also covers webhooks and transcoding profiles. Title under-promises against scope |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | MIXED | Title says "Ingest" but page covers ingest, push command, transcoding profiles, and webhooks. Scope is broader than the H1 — either rename or split |
| 4. Structure | 4.2 | Purpose statement test | MIXED | "lets the developer create a stream and push RTMP" — but actual content includes webhooks (a separate task) |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages CardGroup |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Reader needs a Livepeer API key, the SDK installed, and OBS/FFmpeg available — none stated. Round 1 found this missing on most pages; rubric 4.5 + special-focus item |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Webhook payload signing referenced but not detailed — should either include or link |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | Stream creation example (lines 46-64) duplicates the same flow shown in `overview.mdx` (lines 51-66) and `live-events.mdx` (lines 60-69); should be the canonical version and the others should link |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | All 4 Related Pages cards stay inside `developers/`. Zero cross-tab graduation |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I create a stream" but not "how do I monitor an active stream" or "what do I do on `stream.idle`" |
| 4. Structure | 4.12 | Page size | PASS | 5.9 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No trade-offs named: no rate-limit numbers, no max-concurrent-streams, no failure-on-idle behaviour beyond webhook firing, no recommendation for backup ingest endpoints, no "how to handle stream key rotation" |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All 5 blocks tagged (`javascript`, `python`, `bash`) |
| 4. Structure | 4.18 | Code-first opening | N/A | guide |
| 4. Structure | 4.19 | Error states in main | N/A | No errors named |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | `pageType: how_to` non-canonical; guide template applies |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + body H2s + Related Pages present; Prerequisites absent (4.5) |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Profile fields table (lines 113-122) and Stream Events table (lines 155-159) are raw markdown — should be `<StyledTable>` per 5.23. Profile fields would suit `<ParamField>` better |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 22: `pageType: how_to` non-canonical; line 24: `status: current` legacy |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | FAIL | JavaScript example (lines 46-64) and Python example (lines 68-83) are sequential H2 subsections; should be `<Tabs>` with `<Tab title="JavaScript" icon="js">` and `<Tab title="Python" icon="python">` |
| 5. Layout | 5.15 | Data imports | FAIL | RTMP ingest URL `rtmp://rtmp.livepeer.com/live` (lines 61, 91, 100) hardcoded; should pull from a shared endpoints data module |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Related Pages present; no duplicate paragraph |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `<Card title=...>` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs on page (5.14 says there should be) |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 5 code blocks (lines 46, 68, 96, 131, 145) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural section |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | All 4 Related Pages cards (lines 170-181) use plain `<Card title=...>` |
| 5. Layout | 5.23 | StyledTable | FAIL | 2 raw markdown tables (lines 113-122, 155-159) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables exactly |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider line 36 OK; between H2s; before Related Pages |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram of the stream lifecycle (Create → push RTMP → transcode → idle → recording.ready). A sequence diagram would communicate the webhook timing far better than the markdown table at line 155 |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | HMAC-SHA256 webhook signature verification is decision-critical for any production consumer and is hidden inside a `<Note>` |
| 5. Layout | 5.32 | Reference tables end | N/A | guide |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | RTMP ingest URL `rtmp://rtmp.livepeer.com/live` not cited to API docs; playback URL `livepeercdn.com/hls/<playbackId>/index.m3u8` not cited. Profile fields table reproduces `FfmpegProfile` schema without linking the OpenAPI source. "60 seconds" idle threshold (line 158) — not cited |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | MIXED | API current; deprecated term "broadcaster" present in narrative |
| 6. Veracity | 6.4 | Numbers real | PASS | 60s idle plausible; profile fields plausible |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent — should be `unverified` until pins land |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No SDK version pin; no `lastVerified` cross-check on payload schema |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No link to `livepeer/livepeer-js`, `livepeer/livepeer-python`, or OpenAPI spec despite SDK + payload schema being central to the page |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2574 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 2 (Video Platform) lands here from overview; not signposted |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | All cards internal to `developers/` |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | MIXED | File is `ingest-and-playback.mdx` but title is just "Ingest"; sidebarTitle "Ingest"; content covers ingest + push + profiles + webhooks. Title/file/scope misaligned |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | All 4 Cards resolve to existing pages |
| 8. Links | 8.2 | External | NOT-TESTED | `rtmp.livepeer.com` and `livepeercdn.com` not curl-tested |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Stream creation, push, profiles, webhooks covered; recording, multistream, access control are on `live-events.mdx` (correct split) |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | API key prereq not stated; no "first stream in 5 lines" tease at top |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 2 unsigned |
| 10. Completeness | 10.4 | Scope | MIXED | See 7.8 |
| 10. Completeness | 10.5 | Self-containment | MIXED | Webhook signature signing referred to but not detailed |
| 10. Completeness | 10.6 | Language paths | PASS | JS + Python |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Ingest" | MIXED | Under-promises scope |
| sidebarTitle | Yes | "Ingest" | PASS | |
| description | Yes | "Configuring RTMP ingest for live streams on Livepeer..." | PASS | 137 chars, subject-led |
| pageType | Yes | how_to | FAIL | Non-canonical; should be `guide` |
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
| `<CustomDivider />` | Yes (6×) | Required | — | Placement OK |
| `<Tabs>` / `<Tab icon>` | No | Recommended for JS/Python variants | Yes | Missing — sequential code blocks at lines 46-83 should be Tabs |
| `<StyledSteps>` | No | — | — | Not procedural |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav Cards | — | All 4 Related Pages cards plain |
| Fenced code with icon + title | No | Required | — | All 5 missing icon+title |
| `<Note>` | Yes (1×) | — | — | Carries primary security content (2.D7 FAIL) |
| `<Tip>` | Yes (line 32 header CTA) | — | — | OK |
| `<StyledTable>` | No | Required for data tables | — | 2 raw markdown tables (Profile fields, Stream Events) |
| `<ParamField>` | No | Recommended for Profile fields | — | Missing — would suit the field-spec table |
| Mermaid | No | Recommended | — | Stream lifecycle diagram absent |

## Cross-page duplication and link gaps

- **OVERLAP**: Stream creation example (lines 46-64) duplicates `overview.mdx` lines 51-66 and `live-events.mdx` lines 59-69. Three pages, three slightly-different examples of `client.stream.create`. Canonical version should live here; others should snippet-import or tease + link.
- **OVERLAP**: Profile-array shape (lines 53-57) overlaps with the same shape in `overview.mdx` and `live-events.mdx`.
- **LINK GAPS**: No link to `livepeer/livepeer-js` repo when SDK is named (line 47) or `livepeer/livepeer-python` (line 69).
- **LINK GAPS**: No link to OpenAPI spec when payload schema is shown (Profile fields, stream events).
- **LINK GAPS**: No link to a "webhook payload reference" page for HMAC verification details.
- **LINK GAPS**: Line 103 references "go-livepeer broadcaster gateway" without linking `transcoding-direct-quickstart` (the sibling page that runs that gateway locally) — natural cross-link missing.
- **STRANDED**: Reader who needs HMAC verification code hits a one-line `<Note>` and no example. Production webhook security is a non-negotiable step that the page hand-waves.

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
| **Deprecated terms** | **2** | line 103: "go-livepeer broadcaster gateway"; line 103: "running in broadcaster mode" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Stream Creation | 5 | 4 | 5 | 5 | 4 | 23 |
| Pushing a Stream | 4 | 4 | 4 | 5 | 4 | 21 |
| Transcoding Profiles | 5 | 4 | 5 | 5 | 4 | 23 |
| Stream Events | 4 | 4 | 5 | 5 | 4 | 22 |
| Related Pages | exempt | — | — | — | — | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 46 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 68 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 96 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 131 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 145 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "Ingest" but the reader's real outcome is "I have a working RTMP ingest with webhook events firing correctly". The Webhook section names events and signature verification but provides no code for verification, no Stream Events sequence diagram, no fallback path for missed webhooks. A Persona 2 reader implementing this in production will need to leave the page and visit the API reference; the page should answer the next obvious question inline.
- **Fix step:** Add a "Webhook verification" code block immediately after the existing Stream Events table — Node example showing `crypto.createHmac('sha256', secret).update(rawBody).digest('hex')` and `Livepeer-Signature` comparison. Add a "Replay protection" bullet naming the timestamp tolerance. The webhook content should not sit behind one `<Note>` (5.31).
- **Source/exemplar:** `v2/developers/_workspace/reviews/build/ai-and-agents/ai-jobs-direct-quickstart.md` Layer 1 — "what success looks like" pattern.

### Layer 2 — Composition
- **Gap:** JS/Python sequential code blocks at lines 46-83 should be `<Tabs>` (5.14). 2 raw markdown tables (5.23). `<Note>` carries primary security content (2.D7, 5.31). No Mermaid for stream-event lifecycle (5.27). Related Pages CardGroup not Columns (5.17, 5.22). All 5 code blocks missing icon+title (5.20).
- **Fix step:** (a) Wrap lines 46-83 in `<Tabs>` with `<Tab title="JavaScript" icon="js">` and `<Tab title="Python" icon="python">`. (b) Convert Profile fields table (lines 113-122) to `<ParamField>` blocks — Mintlify global, no import. (c) Convert Stream Events table (lines 155-159) to `<StyledTable variant="bordered">`. (d) Promote `<Note>` line 161 to inline prose with a Node verification example, then a separate `<Warning>` for replay attacks. (e) Add a Mermaid sequence diagram of stream lifecycle: create → first frame → `stream.started` → idle 60s → `stream.idle` → recording → `stream.recording.ready`. (f) `<Columns cols={2}>` + `<CustomCardTitle>` for Related Pages. (g) `icon` + `title` on every code block.
- **Source/exemplar:** Mintlify `<ParamField>` docs; `MermaidColours.jsx`.

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/livepeer-js` (line 47), `livepeer/livepeer-python` (line 69). No link to OpenAPI spec when payload schemas are reproduced. Line 103 references the broadcaster gateway without linking the sibling `transcoding-direct-quickstart.mdx` that runs it locally. No cross-tab graduation: webhooks consumed in production are an integration concern that should route to Solutions/Gateways.
- **Fix step:** (a) Inline link at line 47 first SDK mention: `[livepeer-js](https://github.com/livepeer/livepeer-js)`. (b) Same at line 69 for python. (c) Inline link at line 103 to `/v2/developers/build/video/transcoding-direct-quickstart` (sibling) AND `/v2/gateways/setup/connect` (cross-tab to operator setup). (d) Add a Related Pages card to Solutions or Gateways for production webhook handling.
- **Source/exemplar:** `livepeer/livepeer-js`, `livepeer/livepeer-python` GitHub repos.

### Layer 4 — Veracity and source authority
- **Gap:** `rtmp.livepeer.com` host (lines 61, 91, 100), `livepeercdn.com` playback host (line 63), Profile fields schema, Stream Events list, "60 seconds" idle threshold — none citable. Field is `veracityStatus: ??`, absent. No SDK version pinned. Both deprecated-term uses at line 103 are veracity gaps in addition to voice gaps — the page is asserting current architecture using stale terminology.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter; raise to `verified` after pinning. (b) Link Profile fields source: OpenAPI spec entry `FfmpegProfile`. (c) Link 60s idle threshold to API docs. (d) Pin SDK installs: `npm install livepeer@<latest>` and `pip install livepeer==<latest>`. (e) Find-replace "broadcaster" → "Gateway" / "gateway mode" at line 103.
- **Source/exemplar:** `livepeer/livepeer-js` package version; OpenAPI spec at `api/openapi.yaml`.

### Layer 5 — Product-forward depth
- **Gap:** Page describes the happy path but never names operational concerns: rate limits per API key, max concurrent streams, stream-key rotation, multi-region failover ingest endpoints, what happens if the publisher's network drops mid-stream, how `stream.idle` interacts with reconnect, recommended monitoring metrics. A Persona 2 reader scoping production hits this page and learns nothing about scale.
- **Fix step:** Add a §"Production considerations" H2 before Related Pages with subsections: rate limits, concurrent streams, key rotation, reconnect behaviour, monitoring signals. Link each to the relevant ref (Solutions/Gateways/API ref). Alternatively, use an `<AccordionGroup>` with one Accordion per topic so the page doesn't bloat.
- **Source/exemplar:** `.claude/references/layout/exemplars.md`; `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 5.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. **Deprecated term "broadcaster" used twice at line 103** in primary narrative ("broadcaster gateway" + "broadcaster mode"); rubric 2.16 requires Gateway. The same term is used on every other video page — a section-wide remediation.
2. Frontmatter: non-canonical `pageType: how_to` (1.2), missing 4 required fields (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`), retains legacy `status: current` (5.7).
3. Webhook HMAC-SHA256 verification is decision-critical security content hidden inside a single `<Note>` (2.D7, 5.31) — no code example, no replay-protection bullet.
4. JS + Python examples (lines 46-83) sequentially listed; should be `<Tabs>` with `icon` props (5.14, 5.18).
5. Related Pages uses `<CardGroup>` + plain `<Card>` (5.17, 5.22); 2 raw markdown tables (5.23); all 5 code blocks missing `icon` + `title` (5.20); no Mermaid for stream lifecycle (5.27); no Prerequisites section despite needing an API key + SDK install + RTMP client (4.5).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace "go-livepeer broadcaster gateway" + "broadcaster mode" with "go-livepeer Gateway" + "gateway mode" at line 103 | 103 | HIGH | S | check 2.16; glossary `Gateway` |
| 2 | Add `purpose: build`, `complexity: beginner`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter; change `pageType: how_to` → `pageType: guide`; remove `status: current` | 22-25 | HIGH | S | check 1.2+1.4+1.6+1.7+1.8+5.7 |
| 3 | Wrap JS + Python stream-creation blocks (lines 46-83) in `<Tabs>` with `<Tab title="JavaScript" icon="js">` and `<Tab title="Python" icon="python">` | 46-83 | HIGH | M | check 5.14+5.18 |
| 4 | Promote `<Note>` at line 161 to inline prose, add a Node HMAC verification code example (`crypto.createHmac('sha256', secret).update(rawBody).digest('hex')` compared to `Livepeer-Signature` header), and add a `<Warning>` for replay protection | 161-163 | HIGH | M | check 2.D7+5.31 |
| 5 | Replace `<CardGroup cols={2}>` (line 169) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` per check 5.17 | 167-182 | HIGH | M | check 5.17+5.22 |
| 6 | Add Prerequisites H2 after the opening prose, before "Stream Creation": list Livepeer API key, `livepeer` SDK install (JS or Python), RTMP-capable encoder (OBS / FFmpeg) | after 38 | HIGH | S | check 4.5+5.2 |
| 7 | Convert Profile fields table (lines 113-122) to `<ParamField>` blocks; convert Stream Events table (lines 155-159) to `<StyledTable variant="bordered">` | 113-122, 155-159 | HIGH | M | check 5.23+5.5 |
| 8 | Add `icon` + `title` to every code block; example: `\`\`\`javascript icon="js" title="create-stream.js"` | 46, 68, 96, 131, 145 | HIGH | M | check 5.20 |
| 9 | Add Mermaid sequence diagram of stream lifecycle (create → first frame → `stream.started` → idle 60s → `stream.idle` → recording → `stream.recording.ready`) before Stream Events H2 | before 127 | HIGH | M | check 5.27 |
| 10 | Add ≥3 cross-tab Related Pages cards: 1 sibling, then `/v2/gateways/setup/connect`, `/v2/about/network/architecture` | 167-182 | HIGH | S | check 4.10+7.6 |
| 11 | Add inline upstream link at line 47 first SDK mention: `[livepeer-js](https://github.com/livepeer/livepeer-js)`; line 69: `[livepeer-python](https://github.com/livepeer/livepeer-python)`; line 103: link `transcoding-direct-quickstart` sibling | 47, 69, 103 | MEDIUM | S | check 6.10 |
| 12 | Pin SDK installs in any new install commands; reference the same `snippets/data/sdks/livepeer-versions.json` proposed for overview.mdx | new install blocks | MEDIUM | S | check 2.D3+6.8 |
| 13 | Either rename title to "Ingest and Playback" (matching filename) and expand scope, OR split the webhook section to a dedicated page | 2, 3, file | MEDIUM | M | check 4.1+7.8 |
| 14 | Add a §"Production considerations" H2 with rate limits, concurrent streams, key rotation, reconnect behaviour | before Related Pages | MEDIUM | M | Layer 5 |
| 15 | Inline-define HLS, RTMP, ABR, HMAC-SHA256 on first use | 38, 123, 162 | MEDIUM | S | check 2.21 |
| 16 | Label every code block `TESTED YYYY-MM-DD against livepeer@<version>` once pinned | all code | INFO | M | check 6.2 |
| 17 | Extract RTMP host and HLS host to a shared data module (`snippets/data/endpoints/livepeer-hosts.json` or similar) | 61, 91, 100 | INFO | M | check 5.15 |
