# Review: overview.mdx (build/video)

**Page**: `v2/developers/build/video/overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `overview` (non-canonical)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 6,464
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (frontmatter lines 1-26) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 22) is not in canonical 7-type set; should be `concept` for a section orientation overview |
| 1. Frontmatter | 1.3 | pageVariant | N/A | Not used; `pageVariant: overview` would suit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent — must be one of `orient | explain | …` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 23) |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Field absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Field absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Field absent; ships with `status: current` legacy (line 24) instead |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | Line 5: "How to build video applications on Livepeer: live streaming, VOD, and transcoding, using the livepeer SDK and the go-livepeer broadcaster gateway." 168 chars (over 160 limit); also names deprecated "broadcaster gateway" — should be "Gateway" per 2.16 |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields (lines 17-21) |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer", "video", "transcoding" too generic per 1.13; "broadcaster" is a deprecated term in a keyword (line 16) |
| 1. Frontmatter | 1.14 | audience register match | PASS | Developer-leaning prose, SDK code samples present |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 39 opens with subject ("Livepeer's video infrastructure separates…") |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | "broadcaster gateway" used 4 times (lines 6, 39, 47, 87, 110, 144) — composite that mixes the deprecated term with the canonical one |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Livepeer's video…", "A live stream in Livepeer…", "VOD assets are…" |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | MIXED | Description (line 5) opens "How to build…" — not "this page" self-ref, but `description` should still be a subject-led sentence per 1.11 |
| 2. Voice | 2.16 | Zero deprecated terms | FAIL | "broadcaster" appears 6 times in narrative + keyword (lines 6, 16, 39, 47, 87, 110, 144); rubric 2.16 requires Gateway. This is the highest-frequency violation on the page |
| 2. Voice | 2.17 | Universal terms | MIXED | "Gateway" and "Orchestrator" used but mixed with "broadcaster" |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | FAIL | "broadcaster gateway" is not in glossary; the glossary entry is `Gateway` |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | See 2.16 |
| 2. Voice | 2.21 | First-use defined | MIXED | "broadcaster gateway" not defined at first use (line 39); "VOD (video-on-demand)" line 41 OK; "ABR" mentioned in cards but never expanded |
| 2. Voice | 2.22 | Terminology lock | FAIL | See 2.16 + 2.17 |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept/overview page |
| 2. Voice | 2.D2 | API/method has code or link | PASS | `livepeer` SDK and `client.stream.create`, `client.asset.createViaUrl` shown |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Line 128: "current JavaScript SDK version is 3.5.0" — only version pin on page. Python SDK version not stated. go-livepeer version unspecified |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states; concept |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Live Streams" (22), "VOD Assets" (22), "Direct Transcoding" (24), "Access Paths" (23), "Livepeer SDK" (22), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | "Related Pages" exempt; no Next Steps used (good) |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Building with Video" — 3 words; rubric prefers 1-3 (OK); but the sidebarTitle "Overview" is per-section so "Video" alone or "Video Overview" would scan better in a portal |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Concept page orienting readers to the video tab |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer choose a path between SDK, gateway, and LPMS" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Each H2 links to its detail page via `<LinkArrow>` |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages CardGroup |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page; reader chooses path |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | LPMS / broadcaster gateway / SDK paths each link to their detail page |
| 4. Structure | 4.7 | Info type per section | PASS | Concept + factual |
| 4. Structure | 4.8 | No content duplication | MIXED | The SDK install paragraph (line 126-130) duplicates what `ingest-and-playback.mdx` line 46-83 demonstrates with code; a single SDK overview snippet would be cleaner |
| 4. Structure | 4.9 | Section orientation page | PASS | This IS the section orientation page |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links. All 4 Related Pages cards stay inside `developers/build/video/`. No Gateways (self-host), no Solutions (managed), no About (protocol) |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what paths exist" but not "which path is right for me?" — Access Paths table lists three options but the "Best for" cells are short and don't quantify decision criteria |
| 4. Structure | 4.12 | Page size | PASS | 6.4 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No "when not to use the API", "when broadcaster gateway is overkill", "LPMS is wrong choice for X" content. The Access Paths table names "Best for" but never "Not for" |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | Both code blocks tagged `javascript` |
| 4. Structure | 4.18 | Code-first opening | N/A | concept |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | FAIL | `pageType: overview` is non-canonical; concept template applies |
| 5. Layout | 5.2 | Required sections present | PASS | Header CTA, intro, H2s, Related Pages |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Access Paths data IS in `<StyledTable>` (good); SDK install info (line 126-130) is prose — could be `<Tabs>` for JS / Python parity |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 24: `status: current` legacy; line 22: non-canonical `pageType: overview` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks from gold-standard | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | MIXED | SDK install (line 124-130) talks about JS and Python in the same paragraph — should be `<Tabs>` for clarity |
| 5. Layout | 5.15 | Data imports used | FAIL | SDK version "3.5.0" (line 128) hardcoded in prose; should pull from a shared `snippets/data/sdks/livepeer-versions.json` so all video pages reflect the same value |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Related Pages section present (line 134), no duplicate prose paragraph after it |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` (line 136) not `<Columns cols={2}>`; uses plain `<Card title="..." icon="..." href="..." arrow horizontal>` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No `<Tab>` on page |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No `<Accordion>` |
| 5. Layout | 5.20 | Code block icon+title | FAIL | Both fenced javascript blocks (lines 51, 74) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural section |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | All 4 Related Pages cards (lines 137-148) use plain `Card title="..." icon="..."` — not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable not raw markdown | PASS | Access Paths table is `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table on page |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 37 OK; dividers between H2s OK; no divider directly before "Related Pages" — line 132 divider sits before SDK section, "Related Pages" follows without its own preceding divider. Check 5.26 requires "ALWAYS before Related Pages" — line 132 is the divider before, then SDK H2 + content, then Related Pages. Re-read: divider on line 132 precedes "Livepeer SDK" section; the divider that should precede Related Pages is absent |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram of the three-layer architecture (ingest → orchestrators → playback) that the intro describes; this is the canonical place for a Mermaid sequence/flow per 5.27. The protocol flow ascii sibling at `transcoding-direct-quickstart.mdx` lines 283-293 confirms the section needs a diagram |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | concept |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Factual claims citable | MIXED | "current JavaScript SDK version is 3.5.0" (line 128) — needs link to npm package or release page; "Python SDK is `pip install livepeer`" — no version pin or PyPI link; "Both SDKs are generated from the Livepeer OpenAPI specification at `api/openapi.yaml`" (line 130) — should link to the actual repo path |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED/NOT-TESTED labels on either code block |
| 6. Veracity | 6.3 | No deprecated API | MIXED | API usage current; but deprecated TERM "broadcaster" is used throughout |
| 6. Veracity | 6.4 | Numbers real | PASS | bitrate/fps/resolution figures plausible |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent — should be `unverified` at minimum until version pins added |
| 6. Veracity | 6.7 | Glossary source | FAIL | "broadcaster" not in canonical glossary |
| 6. Veracity | 6.8 | Source staleness | FAIL | Hard-coded SDK version "3.5.0" with no `lastVerified` cross-check; will go stale |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No links to `livepeer/livepeer-js`, `livepeer/livepeer-python`, `livepeer/go-livepeer`, `livepeer/lpms` repos despite naming all four |
| 6. Veracity | 6.11 | Glossary defs match | FAIL | See 2.16 |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | `docs.json` line 2572 |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 2 (Video Platform) and Persona 4 (Live-Video-First) both land here, but neither is explicit in the intro; check the page never names persona-fit |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | All 4 Related Pages cards stay inside `developers/build/video/` |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | PASS | This page is substantive |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | All 4 Related Pages cards + 3 LinkArrow targets resolve to existing files |
| 8. Links | 8.2 | External links live | N/A | No external links |
| 8. Links | 8.3 | Snippets resolve | PASS | LinkArrow, CustomDivider, CenteredContainer, StyledTable imports resolve |
| 8. Links | 8.4 | Images load | N/A | OG image only |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | Out of scope |
| 10. Completeness | 10.1 | Job-list coverage | MIXED | Live / VOD / direct-transcoding paths named but a fourth common job — playback (player embedding) — has no H2 |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Routes to detail pages but no inline "fastest first call" in 3 lines |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 2 + 4 land here; not signposted |
| 10. Completeness | 10.4 | Scope explicit | PASS | |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | FAIL | Code blocks only in JavaScript; Python is named (line 39, 126) but no code; Go is named (LPMS) but no code |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Building with Video" | PASS | 3 words |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "How to build video applications on Livepeer: live streaming, VOD, and transcoding, using the livepeer SDK and the go-livepeer broadcaster gateway." | FAIL | 168 chars (over 160); references deprecated "broadcaster gateway"; opens with "How to" — borderline self-referential |
| pageType | Yes | overview | FAIL | Non-canonical (rubric 1.2: `concept | tutorial | guide | instruction | navigation | reference | resource`); should be `concept` with `pageVariant: overview` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required field absent |
| complexity | No | — | FAIL | Required field absent |
| lifecycleStage | No | — | FAIL | Required field absent |
| keywords | Yes | array (incl. "broadcaster") | MIXED | "livepeer", "video", "transcoding" generic; "broadcaster" is deprecated term |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Required field absent |
| lastVerified | Yes | '2026-05-13' | PASS | |
| status | Yes | current | FAIL | Legacy field; drop per 5.7 |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Missing divider directly before Related Pages (5.26) |
| `<Tabs>` / `<Tab icon>` | No | Recommended for SDK lang variants | Yes | Missing — SDK install + code could be `<Tabs>` with JS / Python / Go tabs |
| `<StyledSteps>` / `<StyledStep>` | No | — | — | concept page, not procedural |
| `<Columns cols={2}>` Related Pages | No | Required | Yes | Uses `<CardGroup>` not `<Columns>` |
| `<CustomCardTitle>` | No | Required inside nav `<Card>` | — | Missing on all 4 Related Pages cards |
| Fenced code with icon + title | No | Required where code present | — | Both javascript blocks (lines 51, 74) missing icon+title |
| `<Note>` / `<Tip>` / `<Warning>` | Yes (`<Tip>` line 34) | — | — | Header CTA only, OK |
| `<Accordion>` / icon | No | — | — | Not needed here |
| `<StyledTable>` | Yes (Access Paths) | Required for data tables | — | Used correctly |
| `<CenteredContainer>` | Yes | — | — | Header CTA wrapper |
| `<LinkArrow>` | Yes (3×) | — | — | In-prose link decoration |
| Mermaid | No | Recommended for architecture flow | Yes | Missing — 3-layer ingest/transcode/playback flow not visualised |

## Cross-page duplication and link gaps

- **OVERLAP**: SDK install instructions (lines 124-130) overlap with `ingest-and-playback.mdx` (lines 46-83) and `vod-and-recording.mdx` (lines 45-58). Both detail pages re-import `Livepeer` + show `client = new Livepeer({ apiKey })` — a single SDK quickstart snippet imported across pages would be cleaner.
- **OVERLAP**: The Access Paths table (lines 95-120) — "Best for" column — overlaps with content that should live in the Solutions tab portal, but the page doesn't link to Solutions for the "managed" option.
- **LINK GAPS**: No links to upstream repos: `livepeer/livepeer-js`, `livepeer/livepeer-python`, `livepeer/go-livepeer`, `livepeer/lpms` — all four are named in the body but never linked.
- **LINK GAPS**: "OpenAPI specification at `api/openapi.yaml`" (line 130) — no link to the repo path.
- **LINK GAPS**: No link to Solutions tab from Access Paths row 1 (Livepeer API + SDK is the managed option), no link to Gateways tab from row 2 (broadcaster gateway is the self-host option), no link to About tab from any row.
- **STRANDED**: Persona 2 (Video Platform builder) reading this page is not told which path is right for them. Persona 4 (Live-Video-First) reading the page is not pointed at the low-latency tutorial.

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
| **Deprecated terms** | **7** | line 6: "broadcaster gateway"; line 16: keyword "broadcaster"; line 39: "go-livepeer broadcaster gateway node"; line 47: "broadcaster gateway accepts an RTMP push"; line 87: "go-livepeer broadcaster gateway exposes an HTTP endpoint"; line 110: table cell "go-livepeer broadcaster gateway"; line 144: card description "broadcaster gateway and LPMS" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Live Streams | 4 | 4 | 5 | 5 | 4 | 22 |
| VOD Assets | 4 | 4 | 5 | 5 | 4 | 22 |
| Direct Transcoding | 5 | 5 | 5 | 5 | 4 | 24 |
| Access Paths | 5 | 4 | 5 | 5 | 4 | 23 |
| Livepeer SDK | 4 | 4 | 5 | 5 | 4 | 22 |
| Related Pages | exempt | — | — | — | — | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 51 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 74 | javascript | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** A developer landing on `build/video` overview wants to answer "which of the three paths do I pick?". The page lists the three paths but never quantifies the decision: how long to first stream, whether the API needs a managed account, whether the broadcaster gateway requires an Arbitrum wallet, whether LPMS needs CUDA. The Access Paths table's "Best for" cells are abstract ("Applications that want video features without operating infrastructure") not actionable.
- **Fix step:** Replace the Access Paths `<StyledTable>` (lines 95-120) with a decision matrix that adds three columns: "Time to first stream", "Account/keys needed", "Operates infra?". Example row: `Livepeer API + SDK | ~5 min | API key | No`. Tag each row with a persona icon: Persona 2 for SDK row, Persona 4 for low-latency variant, Persona 3 (OSS/contributor) for LPMS.
- **Source/exemplar:** `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 1 — same pattern for BYOC vs ComfyStream vs AI Jobs decision matrix.

### Layer 2 — Composition
- **Gap:** No Mermaid diagram of the ingest → orchestrator → playback flow (5.27 FAIL). No `<Tabs>` for the SDK install in JS / Python / Go (5.14, page mentions all three languages but only shows JS code). Related Pages uses `<CardGroup>` not `<Columns cols={2}>` (5.17). All 4 Cards use plain `Card title=` not `<CustomCardTitle>` (5.22). Both code blocks missing `icon` + `title` (5.20).
- **Fix step:** (a) Add a Mermaid sequence diagram immediately after the intro (line 41) showing RTMP/upload → gateway → orchestrator (transcode) → HLS playback. Wrap in `<ScrollableDiagram>` and source colours from `MermaidColours.jsx`. (b) Convert Livepeer SDK section (lines 124-130) to `<Tabs>` with `<Tab title="JavaScript" icon="js">`, `<Tab title="Python" icon="python">`, `<Tab title="Go" icon="golang">` (Go shows LPMS path). (c) Convert `<CardGroup cols={2}>` (line 136) to `<Columns cols={2}>` with `<Card>` using `<CustomCardTitle icon="..." title="..." horizontal />`. (d) Add `icon="js"` + `title="create-stream.js"` to line 51 block, `icon="js"` + `title="create-asset.js"` to line 74 block.
- **Source/exemplar:** `snippets/components/config/MermaidColours.jsx` for diagram colours; `snippets/templates/pages/page-composition-framework.mdx` Related Pages format.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links (4.10, 7.6). The page describes three paths but never sends the reader to the right tab when their path is the managed one (Solutions) or the self-host one (Gateways). No upstream repo links: `livepeer/livepeer-js` (named line 126 by package name), `livepeer/livepeer-python` (named line 39), `livepeer/go-livepeer` (named line 6, 39, 87, 110, 144), `livepeer/lpms` (named line 117, 144). The page references "OpenAPI specification at `api/openapi.yaml`" (line 130) without a repo link.
- **Fix step:** (a) Add to Access Paths table — for "Livepeer API + SDK" row, add a `<LinkArrow href="/v2/solutions/portal">` to managed; for "go-livepeer broadcaster gateway" row, add `<LinkArrow href="/v2/gateways/setup/connect">` to self-host operator setup. (b) Add inline links at first mention: line 39 `[go-livepeer](https://github.com/livepeer/go-livepeer)`, line 126 `[livepeer-js](https://github.com/livepeer/livepeer-js)`, line 126 `[livepeer-python](https://github.com/livepeer/livepeer-python)`, line 117 `[livepeer/lpms](https://github.com/livepeer/lpms)`, line 130 `[api/openapi.yaml](https://github.com/livepeer/livepeer-js/blob/main/api/openapi.yaml)`. (c) Add Related Pages cards: 1 sibling (LPMS), 1 cross-tab to Gateways (`/v2/gateways/setup/connect`), 1 cross-tab to Solutions (`/v2/solutions/portal`), 1 cross-tab to About (`/v2/about/network/architecture`).
- **Source/exemplar:** Upstream `https://github.com/livepeer/livepeer-js`, `https://github.com/livepeer/livepeer-python`, `https://github.com/livepeer/go-livepeer`, `https://github.com/livepeer/lpms`; in-repo pattern at `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 3.

### Layer 4 — Veracity and source authority
- **Gap:** SDK version "3.5.0" (line 128) hardcoded with no link to npm package, no `aiModels`-style snippet import, no release date. Python SDK version not pinned at all. go-livepeer release/version not stated anywhere on the page. `veracityStatus` field absent so the freshness claim has no honest anchor. Code blocks missing TESTED labels. The phrase "broadcaster gateway" is a deprecated term — using it 7 times means the page contradicts the canonical glossary, which is a veracity gap as well as a voice gap.
- **Fix step:** (a) Extract SDK version pins to `snippets/data/sdks/livepeer-versions.json` (or similar). Import and render so version updates propagate. (b) Add `veracityStatus: verified` (after version pins land) or `unverified` (before). (c) Label both code blocks `TESTED 2026-05-12` against `livepeer@3.5.0` or `NOT-TESTED` with reason. (d) Find-replace "broadcaster gateway" → "Gateway" (proper noun for the protocol role) in all 7 sites. (e) Add `lastVerified: '2026-05-17'` after the rename pass.
- **Source/exemplar:** Glossary canonical term: `Gateway` (see `docs-guide/standards/voice-and-copy.mdx` Universal terms); `livepeer/livepeer-js` npm package page for version pinning.

### Layer 5 — Product-forward depth
- **Gap:** The page reads as a router with no "when to use Livepeer for video at all" framing. No production-readiness signal (no Beta / Stable / Production badge per workload). No cost signal (managed vs self-host pricing is a major selection factor and is absent). No "when not to use" — no statement like "If your latency budget is <1s, run LPMS embedded or use WebRTC direct, not the managed API." A senior engineer scanning this overview gets a feature list, not an evaluation.
- **Fix step:** Add a Header callout `<Quote>` or `<Badge>` near line 34 stating maturity: "Production — Livepeer transcoded over X minutes of video in the last 30 days". Add a §"When to use each path" subsection AFTER Access Paths table with 3 bullets — one per path — naming the failure mode: "Use the API + SDK if you don't operate infrastructure. Use the broadcaster gateway if you need pricing control. Use LPMS if you're building a Go media server and the protocol layer is overkill." Add a §"Costs" callout link to `/v2/about/...` per-second-compute pricing or to Solutions for managed pricing.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart pattern uses a maturity badge in the header; `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 5 — same Beta badge pattern for BYOC.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. **Deprecated term "broadcaster" used 7 times** in narrative + keyword (lines 6, 16, 39, 47, 87, 110, 144). Check 2.16 requires `Gateway`. This is the page's highest-impact violation: a section-orientation page is teaching the wrong vocabulary to every reader who lands here.
2. Frontmatter has non-canonical `pageType: overview` (1.2) + missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (1.4, 1.6, 1.7, 1.8) + retains legacy `status: current` (5.7).
3. Related Pages uses `<CardGroup>` + plain `<Card>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` (5.17, 5.22).
4. No Mermaid diagram of the ingest → transcode → playback flow despite the page being the canonical place for one (5.27).
5. Both code blocks missing `icon` + `title` (5.20). Zero cross-tab graduation links (4.10, 7.6). SDK version "3.5.0" hardcoded with no source link (5.15, 6.1, 6.8).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Find-replace "broadcaster gateway" → "Gateway" and "broadcaster" keyword → "gateway" across the file; reword line 16 keyword, line 6 description, lines 39, 47, 87, 110, 144 prose | 6, 16, 39, 47, 87, 110, 144 | HIGH | M | check 2.16; glossary `Gateway` |
| 2 | Add `purpose: orient`, `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: unverified` to frontmatter; change `pageType: overview` → `pageType: concept` with `pageVariant: overview`; remove `status: current` | 22-26 | HIGH | S | check 1.4+1.6+1.7+1.8+1.2+5.7 |
| 3 | Replace `<CardGroup cols={2}>` (line 136) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` per check 5.17 | 134-149 | HIGH | M | check 5.17+5.22; ai-and-agents/overview review Layer 2 |
| 4 | Add Mermaid sequence diagram of ingest → gateway → orchestrator (transcode) → HLS playback flow after the intro paragraph, before line 43 divider; use `MermaidColours.jsx`; wrap in `<ScrollableDiagram>` | after line 41 | HIGH | M | check 5.27; `snippets/components/config/MermaidColours.jsx` |
| 5 | Add `icon="js"` + `title="create-stream.js"` to javascript block at line 51; `icon="js"` + `title="create-asset.js"` to javascript block at line 74 | 51, 74 | HIGH | S | check 5.20 |
| 6 | Replace prose SDK install section (lines 124-130) with `<Tabs>` containing `<Tab title="JavaScript" icon="js">` (npm install), `<Tab title="Python" icon="python">` (pip install), `<Tab title="Go" icon="golang">` (LPMS embed reference); pin versions via shared data import | 124-130 | HIGH | M | check 5.14+5.18+2.D3 |
| 7 | Add inline upstream repo links at first mention: line 39 `[go-livepeer](https://github.com/livepeer/go-livepeer)`; line 117 `[livepeer/lpms](https://github.com/livepeer/lpms)`; line 126 `[livepeer-js](https://github.com/livepeer/livepeer-js)`, `[livepeer-python](https://github.com/livepeer/livepeer-python)`; line 130 `[api/openapi.yaml](https://github.com/livepeer/livepeer-js/blob/main/api/openapi.yaml)` | 39, 117, 126, 130 | HIGH | S | check 6.10; Layer 3 |
| 8 | Replace Related Pages cards: keep 1 sibling, add 3 cross-tab cards to `/v2/gateways/setup/connect`, `/v2/solutions/portal`, `/v2/about/network/architecture` | 134-149 | HIGH | M | check 4.10+7.6 |
| 9 | Rewrite description (line 5) under 160 chars and replace "broadcaster gateway" with "Gateway"; subject-first | 4-6 | HIGH | S | check 1.11+2.16 |
| 10 | Add `<CustomDivider />` directly before Related Pages H2 (line 134) — separate from divider at line 132 which precedes Livepeer SDK section | before 134 | MEDIUM | S | check 5.26 |
| 11 | Extract SDK version pin "3.5.0" (line 128) to `snippets/data/sdks/livepeer-versions.json`; import and render | 128 | MEDIUM | M | check 5.15+6.8 |
| 12 | Add a §"When to use each path" H2 after Access Paths table — 3 bullets naming the failure mode per path | after line 120 | MEDIUM | S | Layer 5; check 4.15 |
| 13 | Add a `<Badge>` maturity signal near the opening `<Tip>` (production / live counts) | near line 34 | MEDIUM | S | Layer 5 |
| 14 | Add persona signposts in intro: name Persona 2 (Video Platform) and Persona 4 (Live-Video-First) explicitly | line 39-41 | MEDIUM | S | A5 brief special focus |
| 15 | Label both code blocks `TESTED YYYY-MM-DD` against pinned SDK version | 51, 74 | INFO | S | check 6.2 |
| 16 | Drop generic keywords "livepeer", "video"; add `gateway`, `livepeer-js`, `lpms`, `livepeer-python`, `hls`, `rtmp` | 7-16 | INFO | S | check 1.13 |
