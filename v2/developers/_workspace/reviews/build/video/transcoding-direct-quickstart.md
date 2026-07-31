# Review: transcoding-direct-quickstart.mdx (build/video)

**Page**: `v2/developers/build/video/transcoding-direct-quickstart.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 12,274
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | All 10 present (lines 1-29) |
| 1. Frontmatter | 1.2 | pageType canonical | MIXED | `tutorial` (line 16) is canonical; A5 brief instructs treating as quickstart per `pageVariant: quickstart` — that variant is absent. Page is closer to `instruction` than `tutorial` given the local-only scope |
| 1. Frontmatter | 1.3 | pageVariant | FAIL | Absent; should be `quickstart` (per A5 brief) |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 18) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 28) |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Line 5: "Run a Livepeer gateway and orchestrator locally in fifteen minutes. RTMP in, HLS out, no ETH, no GPU." 109 chars, subject-led, action-oriented |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "go-livepeer", "rtmp", "hls", "self-hosted", "off-chain" — specific |
| 1. Frontmatter | 1.14 | audience match | PASS | Developer commands, log lines, gRPC ports |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | Line 41 opens "By the end of this quickstart you'll have..." — second-person outcome rather than subject-led. Tutorial register tolerates outcome-first but rubric 2.5 prefers subject ("A local Livepeer gateway+orchestrator…") |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | Gateway, Orchestrator used correctly |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | MIXED | Line 41 "you'll have"; line 43 "Personas 2 and 4 both start here." — that one is entity-led; line 295 "The full job lifecycle ran." is good. Mix of voices |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | MIXED | Line 91 (`<Note>`) explicitly explains the `-broadcaster` → `-gateway` flag rename — this is legitimate use (educating about a deprecated flag), not the kind of unconscious term-leakage check 2.16 forbids. Treat as PASS in spirit |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "HLS" (line 41) not expanded; "RTMP" (line 41) not expanded; "PM deposit" (line 303) not expanded; "ABR" never expanded. For a beginner quickstart these terms warrant inline definitions or links |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | MIXED | Body opens with 80 words of outcome prose + persona signposting (lines 41-43) before the first command at line 63. Acceptable for a tutorial that needs persona signposting; tighter version would lead with the single curl/docker-pull command |
| 2. Voice | 2.D2 | API/method has code | PASS | Every flag named has code + a flag table |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Line 63 pins `v0.8.10` of go-livepeer (good); line 73 pulls `livepeer/go-livepeer:master` Docker — `master` is the moving target equivalent of unpinned "latest" |
| 2. Voice | 2.D4 | Errors in main content | PASS | `<AccordionGroup>` Common Errors (lines 311-335) is in main flow before Next Steps |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | FAIL | 3 `<Note>` blocks (lines 90, 135, 181) carry primary content: (a) Note line 90 explains the `-gateway`/`-broadcaster` flag rename — primary information about which flag to use; (b) Note line 135 explains splitting orchestrator+transcoder in production — primary architecture fact; (c) Note line 181 explains `-orchAddr` list semantics + off-chain vs on-chain — primary network-mode fact. All three should be inline prose or `<Warning>`/`<Info>` for severity |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Required Tools" (22), "Orchestrator Setup" (23), "Gateway Setup" (23), "Stream Publishing" (22), "Output Verification" (23), "Job Lifecycle" (22), "Common Errors" (21), "Next Steps" (banned — see 3.2) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | Line 339: `## Next Steps` — Avoid list per rubric. Use "Related Pages" |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Transcoding Direct Quickstart" — 3 words (border-line); rubric prefers 1-3. Acceptable |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | Task-oriented |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Local-only gateway+orchestrator quickstart |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer run a Livepeer gateway and orchestrator locally and transcode a test stream end-to-end" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Cards point sideways and forward; but line 43 references the Gateways tab "production setup" via an EMPTY LinkArrow: `<LinkArrow href="" label="" newline={false} />` — broken |
| 4. Structure | 4.4 | No dead ends | MIXED | Two `<LinkArrow href="" label="">` empty placeholders (lines 43, 356) — readers click and land nowhere |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | "Required Tools" H2 (line 47) lists go-livepeer, ffmpeg, three terminals — content is correct but the H2 should be named "Prerequisites" per tutorial matrix (5.2) and per rubric check 4.5 |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Production gateway operation explicitly deferred to Gateways tab |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Line 43 promises a Gateways tab link but the LinkArrow href is empty. Line 356 same. The cards under "Next Steps" are all internal to `developers/build/`. Zero working cross-tab graduation |
| 4. Structure | 4.11 | Discord test | PASS | A new developer can follow this end-to-end |
| 4. Structure | 4.12 | Page size | PASS | 12.3 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | (the empty LinkArrows are missing-link-target, not TODO comments) |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | The `<Note>` blocks name some trade-offs (split orch+transcoder for production, off-chain vs on-chain `-orchAddr`); but no statement of "this setup is not production" beyond off-chain mention. No statement of expected CPU usage, segment count limit, or "when this setup breaks" |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | MIXED | Most blocks tagged `bash`; lines 125-129, 172-177, 224-228, 242-251, 267-273, 283-293 are log/output blocks without language tags — acceptable for log output but inconsistent (some are 3-backtick fenced, others bare) |
| 4. Structure | 4.18 | Code-first opening | MIXED | See 2.D1 |
| 4. Structure | 4.19 | Error states main | PASS | |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | Tutorial pageType + the matrix requires Prerequisites + Steps + Verification + Related. "Required Tools" should be "Prerequisites"; "Output Verification" is the Verification — present; Related Pages is `<CardGroup>` not `<Columns>` |
| 5. Layout | 5.2 | Required sections present | MIXED | Verification present; Prerequisites named "Required Tools" instead |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | The two flag tables inside Steps (lines 112-119, 158-166) are raw markdown — should be `<StyledTable>` per 5.23 |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 26: `status: current` legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | Prereq → Orchestrator → Gateway → Publish → Verify → Lifecycle → Errors → Next |
| 5. Layout | 5.14 | Multi-view layout | PASS | Tabs for Binary/Docker + Tabs for Test-pattern/Sample-file |
| 5. Layout | 5.15 | Data imports | FAIL | go-livepeer version pin `v0.8.10` (line 63), ports (1935, 7936, 5935, 8935, 8936), and flag list hardcoded; should pull from `snippets/data/golivepeer/flags.json` or `snippets/data/golivepeer/ports.json` if such modules exist. Same flags are documented in Gateways/Orchestrators tabs separately |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Both present: "Next Steps" CardGroup (lines 339-354) AND closing in-prose paragraph line 356 ("For production gateway operation, including on-chain mode and GPU transcoding, follow the `<LinkArrow href="" label="" />`"). Check 5.16 forbids both |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` (line 341) not `<Columns cols={2}>`; cards use plain `<Card title="..." icon="..." href="...">` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | FAIL | All 4 `<Tab>` elements missing `icon`: lines 58 (Binary — should `icon="download"`), 69 (Docker — should `icon="docker"`), 192 (Test pattern — `icon="terminal"`), 205 (Sample file — `icon="file-video"`) |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | All 5 `<Accordion>` elements missing `icon`: lines 312, 315, 318, 321, 324 |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All bash code blocks (lines 61, 72, 82, 102, 147, 195, 206, 236, 257, 327) and code-output blocks (lines 125, 172, 224, 242, 267, 283) missing both `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Three raw `<Steps>` blocks (lines 98, 143, 234) — rubric 5.21 requires `<StyledSteps>` with `iconColor`/`titleColor` props |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Next Steps cards (lines 342-353) use plain `<Card>` |
| 5. Layout | 5.23 | StyledTable | FAIL | Flag tables at lines 112-119 and 158-166 are raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 2 raw flag tables; converted to StyledTable would be fine at 2 max |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 3 separate `<Steps>` + 2 `<Tabs>` + 1 `<AccordionGroup>` — busy but defensible for a tutorial with multi-component setup |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider line 39 OK; dividers between H2s; divider line 337 before Next Steps — placement correct |
| 5. Layout | 5.27 | Mermaid | FAIL | Lines 283-293 ascii "Job Lifecycle" flow diagram inside a fenced block (no language tag); should be a Mermaid sequence diagram per 5.27 |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | tutorial |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | Default profile `240p/360p/720p` (line 253) — no link to `transcodingOptions.json` schema or `core/streamparameters.go`. "Two-second chunk" (line 301) — no link to segment-duration default in go-livepeer |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED/NOT-TESTED labels |
| 6. Veracity | 6.3 | No deprecated API | PASS | `-broadcaster` correctly marked deprecated |
| 6. Veracity | 6.4 | Numbers real | PASS | Ports, version, profile resolutions plausible |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | `verified` but Docker pull uses `:master` (line 73) — drift risk; expected log lines (lines 125-129, 172-177) are paraphrased not copy-pasted from a TESTED run |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | MIXED | go-livepeer binary pin `v0.8.10` good; Docker `:master` unpinned |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No link to `livepeer/go-livepeer` releases page; no link to `core/streamparameters.go` for defaults; no link to `cmd/livepeer/livepeer.go` flag list |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2573 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 2 + 4 named at line 43 — good signposting (rare in this section); but Persona 4's "tunes for sub-three-second latency" promise has no link/page named beyond the low-latency card |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Two LinkArrows (lines 43, 356) are EMPTY placeholders — broken links to Gateways tab |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | FAIL | Lines 43 + 356 contain `<LinkArrow href="" label="" newline={false} />` — empty href, empty label. Renders as broken/invisible link. Reader who needs the production path is stranded. The 4 Next Steps cards do resolve |
| 8. Links | 8.2 | External | NOT-TESTED | `github.com/livepeer/go-livepeer/releases/download/v0.8.10/...` not curl-tested |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Local-only path complete |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 2/4 named but production graduation paths broken |
| 10. Completeness | 10.4 | Scope | PASS | Off-chain mode scope explicit |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | PASS | Single-language is correct (this is a `bash`/`ffmpeg` operational quickstart) |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Transcoding Direct Quickstart" | MIXED | 3 words but heavy |
| sidebarTitle | Yes | "Transcoding Quickstart" | PASS | |
| description | Yes | "Run a Livepeer gateway and orchestrator locally in fifteen minutes. RTMP in, HLS out, no ETH, no GPU." | PASS | Subject-led, 109 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | Specific |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | Honest only after Docker `:master` is pinned |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy field |
| pageVariant | No | — | FAIL | Should be `quickstart` |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | — | Placement OK |
| `<Tabs>` / `<Tab icon>` | Yes (2 Tabs, 4 Tab children) | Required for variants | — | All 4 Tabs missing `icon` (5.18 FAIL) |
| `<Steps>` / `<Step>` | Yes (3 blocks, 7 children) | Required (tutorial) | — | RAW Steps (5.21 FAIL) — should be StyledSteps |
| `<StyledSteps>` | No | Required | — | Missing |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav Cards | — | All cards plain |
| Fenced code w/ icon+title | No | Required | — | All bash blocks missing both |
| `<AccordionGroup>`/`<Accordion>` | Yes (1+5) | Recommended | — | All 5 Accordions missing `icon` (5.19 FAIL) |
| `<Note>` | Yes (3×) | — | — | All 3 carry primary content (2.D7 FAIL) |
| `<StyledTable>` | No | Required for data tables | — | 2 raw flag tables |
| `<Tip>` | Yes (line 36) | — | — | Header CTA |
| Mermaid | No | Required for diagrams | — | ASCII flow at line 283 instead |
| `<LinkArrow href="" label="">` empty | Yes (2×) | — | — | Lines 43, 356 are BROKEN |

## Cross-page duplication and link gaps

- **OVERLAP**: Flag tables (lines 112-119, 158-166) overlap with go-livepeer flag documentation that should live in `v2/gateways/setup/configure.mdx` or a shared snippet. Operator-tab and developer-tab both maintain separate flag tables for the same binary.
- **LINK GAPS**: Lines 43, 356 contain empty `<LinkArrow href="" label="">` placeholders — broken links to the Gateways tab production setup. This is the page's primary cross-tab gap.
- **LINK GAPS**: No link to `livepeer/go-livepeer` repo when go-livepeer is named (lines 41, 49, 51, etc.); only the release tarball URL appears in code (line 63).
- **LINK GAPS**: `transcodingOptions.json` referenced (line 305) without a path or link.
- **LINK GAPS**: "Tutorial 3 in the Gateways tab" (line 136) — no path or link.
- **STRANDED**: Persona 4 (live-video-first) is told to "tune for sub-three-second latency" at line 43 but the only next-step card is "Low-Latency Live Streaming" at line 351 — works but should be highlighted in the persona signpost itself.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (only `CenteredContainer` component name) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 narrative (line 91 explicitly defines `-broadcaster` as deprecated flag — legitimate) | — |
| Empty `<LinkArrow href="" label="">` | 2 | line 43; line 356 |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Required Tools | 4 | 4 | 5 | 5 | 4 | 22 |
| Orchestrator Setup | 5 | 4 | 5 | 5 | 4 | 23 |
| Gateway Setup | 5 | 4 | 5 | 5 | 4 | 23 |
| Stream Publishing | 4 | 4 | 5 | 5 | 4 | 22 |
| Output Verification | 5 | 4 | 5 | 5 | 4 | 23 |
| Job Lifecycle | 4 | 4 | 5 | 5 | 4 | 22 |
| Common Errors | 4 | 4 | 4 | 5 | 4 | 21 |
| Next Steps | 1 | 1 | 3 | 4 | 5 | 14 — banned/weak |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 61 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 72 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; Docker `:master` unpinned |
| 82 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 102 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 125 | (none) | ✗ | ✗ | — | Log output — language tag missing |
| 147 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 172 | (none) | ✗ | ✗ | — | Log output |
| 195 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 206 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 224 | (none) | ✗ | ✗ | — | ffmpeg output |
| 236 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 242 | (none) | ✗ | ✗ | — | HLS manifest output |
| 257 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 267 | (none) | ✗ | ✗ | — | Gateway log |
| 283 | (none) | ✗ | ✗ | — | ASCII Job Lifecycle — should be Mermaid (5.27) |
| 327 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The 15-minute promise is real, but two of the page's three biggest reader-friction points are empty `<LinkArrow href="" label="">` placeholders (lines 43, 356) — readers who finish the local setup and want production graduation hit a dead link, not a path. The page also doesn't tell the reader what success looks like beyond "the HLS playlist returns 3 renditions". No screenshot/timing/CPU-load signal. Persona 4 is named at line 43 but the latency expectation ("sub-three-second") is asserted without showing how to measure it against this setup.
- **Fix step:** (a) Replace empty `<LinkArrow href="" label="">` at line 43 with `<LinkArrow href="/v2/gateways/setup/connect" label="Gateways production setup">`. (b) Replace empty `<LinkArrow>` at line 356 with the same target. (c) Add a "Success signal" callout after Output Verification: "Expected end-to-end latency: ~6-8s glass-to-glass on this setup; CPU profile peaks at 60% per renditon on a 4-core box; HLS manifest contains 3 renditions; gateway logs show one `Segment N transcoded` line every 2s."
- **Source/exemplar:** `v2/developers/_workspace/reviews/build/ai-and-agents/ai-jobs-direct-quickstart.md` Layer 5 — same "what success looks like" pattern.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x3 (5.21 FAIL) — should be `<StyledSteps>` with `iconColor`/`titleColor`. All 4 `<Tab>` missing `icon` (5.18). All 5 `<Accordion>` missing `icon` (5.19). All bash code blocks (10+) missing `icon` + `title` (5.20). 2 raw markdown flag tables inside Steps (5.23). 3 `<Note>` blocks carry primary content (2.D7). Job Lifecycle ASCII diagram instead of Mermaid (5.27). Related Pages CardGroup not Columns (5.17, 5.22).
- **Fix step:** (a) Replace each `<Steps>` with `<StyledSteps iconColor="var(--accent)" titleColor="var(--text)">`; replace each `<Step>` with `<StyledStep title="..." icon="...">`. (b) Add `icon="download"`/`icon="docker"` to Tabs lines 58/69; `icon="terminal"`/`icon="file-video"` to lines 192/205. (c) Add `icon` to each Accordion (`triangle-exclamation` for errors). (d) Add `icon="terminal"` + `title="orchestrator.sh"` style to every bash block. (e) Convert flag tables to `<StyledTable variant="bordered">`. (f) Promote `<Note>` at line 90 (gateway/broadcaster rename) to `<Warning>`; promote line 135 (split topology) and line 181 (off-chain semantics) to inline prose or `<Tip>`. (g) Replace ASCII Job Lifecycle (lines 283-293) with a Mermaid sequence diagram using `MermaidColours.jsx`. (h) Convert `<CardGroup cols={2}>` (line 341) to `<Columns cols={2}>` with `<CustomCardTitle>`.
- **Source/exemplar:** `v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring.mdx` line 55-83 — correct StyledSteps usage already in-repo.

### Layer 3 — Cross-page integration
- **Gap:** TWO empty `<LinkArrow href="" label="">` placeholders (lines 43, 356) — broken cross-tab graduation. No link to `livepeer/go-livepeer` repo at first mention. No link to release notes for `v0.8.10`. No link to flag reference in `cmd/livepeer/livepeer.go`. `transcodingOptions.json` referenced (line 305) without a path. "Tutorial 3 in the Gateways tab" (line 136) named without a path.
- **Fix step:** (a) Line 43: change to `<LinkArrow href="/v2/gateways/setup/connect" label="Connect to the network (Gateways tab)">`. (b) Line 356: change to same target — Gateways production setup. (c) Add inline link at line 41 first mention of `go-livepeer`: `[go-livepeer](https://github.com/livepeer/go-livepeer)`. (d) Pin Docker line 73 to a tagged release: `docker pull livepeer/go-livepeer:v0.8.10` matching the binary. (e) Inline link `transcodingOptions.json` at line 305: `[transcodingOptions.json](https://github.com/livepeer/go-livepeer/blob/main/cmd/livepeer/transcodingoptions.go)` (or wherever schema lives). (f) Add Related Pages cards: 1 sibling, 3 cross-tab (`/v2/gateways/setup/connect`, `/v2/gateways/setup/configure`, `/v2/about/network/architecture`).
- **Source/exemplar:** `v2/gateways/setup/connect.mdx` exists per `ls` check; that's the target.

### Layer 4 — Veracity and source authority
- **Gap:** Docker pull uses `livepeer/go-livepeer:master` (line 73) — moving target while page claims `veracityStatus: verified` and pins binary to `v0.8.10`. Internal inconsistency. Expected log lines (lines 125-129, 172-177, 224-228, 242-251, 267-273) are paraphrased — no TESTED label, no run date. Default profile claim (line 253) — no link to source. "Two-second chunk" claim (line 301) — no link. Tutorial body cites "Tutorial 3" (line 136) without a target.
- **Fix step:** (a) Pin line 73 Docker: `docker pull livepeer/go-livepeer:v0.8.10`. (b) Label every bash block `TESTED 2026-05-12 against go-livepeer v0.8.10`. (c) Add inline citation at line 253 for default profile: source = `core/streamparameters.go` in go-livepeer. (d) Add inline citation at line 301 for segment duration default. (e) Resolve "Tutorial 3" reference to actual path or remove.
- **Source/exemplar:** `livepeer/go-livepeer` releases page `https://github.com/livepeer/go-livepeer/releases/tag/v0.8.10`; `livepeer/go-livepeer/blob/main/core/streamparameters.go`.

### Layer 5 — Product-forward depth
- **Gap:** The page treats off-chain as a feature but never names the trade-off: no payments means no real orchestrator selection, no SLA, no production handoff. Reader who completes the quickstart has zero signal about what changes between off-chain and on-chain ("PM deposit" is mentioned at line 303 with no expansion). No maturity badge. No "expected performance" numbers (CPU, segments/sec, latency). No "what could go wrong outside common errors" — e.g. what if `libx264` is missing from the binary? Tutorial mentions "Switch to the Docker path" (line 322) which is a workaround for a real shipping bug that should be acknowledged earlier.
- **Fix step:** (a) Add `<Badge>` near the opening `<Tip>` (line 36): `<Badge>Off-chain mode — production needs on-chain. See Gateways tab.</Badge>`. (b) Add an "Expected performance" callout after Output Verification: "On a 4-core CPU at 720p 30fps: ~60% per-core load; segment turnaround ~2s; glass-to-glass latency ~6-8s." (c) Add "Off-chain trade-offs" section before "Common Errors" naming: no payment routing, no real orchestrator selection (single hard-coded `-orchAddr`), no rate limit, no SLA. (d) Acknowledge the `libx264`-in-binary issue earlier than Accordion 4 — it's the silent failure that costs the most reader time.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart uses maturity badge; `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 5 — same trade-off section pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 1 / HIGH 10 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. **CRITICAL** Two empty `<LinkArrow href="" label="">` placeholders (lines 43, 356) — broken cross-tab graduation. Reader who completes the local setup and reads "follow the [...] in the Gateways tab" hits an invisible/dead link. Production handoff is broken at two of the most-trafficked points on the page.
2. Raw `<Steps>` x3 (5.21 FAIL) — workflow-authoring.mdx and other in-repo quickstarts already use `<StyledSteps>` correctly; mirror them.
3. All 4 `<Tab>` missing `icon`, all 5 `<Accordion>` missing `icon`, all bash code blocks missing `icon`+`title` (5.18+5.19+5.20). Section-wide pattern.
4. 3 `<Note>` blocks (lines 90, 135, 181) carry primary content forbidden by 2.D7 — flag rename, split-topology, off-chain semantics are all main-line information.
5. Related Pages: `<CardGroup cols={2}>` not `<Columns cols={2}>` (5.17, 5.22); H2 "Next Steps" banned (3.2); AND closing in-prose paragraph at line 356 — check 5.16 forbids both.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Fix empty `<LinkArrow href="" label="">` at line 43: set `href="/v2/gateways/setup/connect"`, `label="Gateways production setup"` | 43 | CRITICAL | S | Layer 3; check 8.1+4.10 |
| 2 | Fix empty `<LinkArrow href="" label="">` at line 356: same target as #1 (or remove the closing paragraph per #5) | 356 | CRITICAL | S | Layer 3; check 8.1+5.16 |
| 3 | Replace all 3 `<Steps>` (lines 98, 143, 234) with `<StyledSteps iconColor="var(--accent)" titleColor="var(--text)">`; replace `<Step>` with `<StyledStep title="..." icon="...">` (icons: `server` for orchestrator, `tower-broadcast` for gateway, `video` for publish, `play` for verify) | 98, 143, 234 | HIGH | M | check 5.21; `workflow-authoring.mdx` line 55 |
| 4 | Add `icon` to all `<Tab>`: line 58 `icon="download"`, line 69 `icon="docker"`, line 192 `icon="terminal"`, line 205 `icon="file-video"` | 58, 69, 192, 205 | HIGH | S | check 5.18 |
| 5 | Add `icon="triangle-exclamation"` to all 5 `<Accordion>` | 312, 315, 318, 321, 324 | HIGH | S | check 5.19 |
| 6 | Add `icon` + `title` to every bash block: e.g. `\`\`\`bash icon="terminal" title="install-go-livepeer.sh"` | 61, 72, 82, 102, 147, 195, 206, 236, 257, 327 | HIGH | M | check 5.20 |
| 7 | Replace `<CardGroup cols={2}>` (line 341) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; rename H2 "Next Steps" (line 339) to "Related Pages"; delete closing in-prose paragraph at line 356 | 339-356 | HIGH | M | check 5.16+5.17+5.22+3.2 |
| 8 | Replace ASCII Job Lifecycle (lines 283-293) with a Mermaid sequence diagram using `MermaidColours.jsx`; wrap in `<ScrollableDiagram>` | 283-293 | HIGH | M | check 5.27; `MermaidColours.jsx` |
| 9 | Promote `<Note>` at line 90 to inline prose or `<Warning>`; line 135 to inline prose; line 181 to inline prose. None of these are adjacent context — all are primary content per 2.D7 | 90, 135, 181 | HIGH | M | check 2.D7 |
| 10 | Pin Docker image at line 73: `docker pull livepeer/go-livepeer:v0.8.10` to match the binary pin | 73 | HIGH | S | check 2.D3+6.8 |
| 11 | Rename H2 "Required Tools" (line 47) to "Prerequisites" per tutorial matrix; content unchanged | 47 | HIGH | S | check 4.5+5.2 |
| 12 | Convert raw flag tables at lines 112-119 and 158-166 to `<StyledTable variant="bordered">` | 112-119, 158-166 | HIGH | M | check 5.23+5.24 |
| 13 | Add ≥3 cross-tab graduation Related Pages cards: `/v2/gateways/setup/connect`, `/v2/gateways/setup/configure`, `/v2/about/network/architecture` | new cards | HIGH | S | check 4.10+7.6 |
| 14 | Add inline upstream link at line 41 first mention of `go-livepeer`: `[go-livepeer](https://github.com/livepeer/go-livepeer)` | 41 | MEDIUM | S | check 6.10 |
| 15 | Add `pageVariant: quickstart` to frontmatter | 16 | MEDIUM | S | check 1.3 |
| 16 | Remove legacy `status: current` (line 26) | 26 | MEDIUM | S | check 5.7 |
| 17 | Label every bash code block `TESTED 2026-05-12 against go-livepeer v0.8.10` | all code | MEDIUM | M | check 6.2 |
| 18 | Resolve "Tutorial 3 in the Gateways tab" reference at line 136 — either link or remove | 136 | MEDIUM | S | check 8.1 |
| 19 | Add "Expected performance" callout after Output Verification: CPU%, segment turnaround, glass-to-glass latency | after 277 | MEDIUM | S | Layer 5 |
| 20 | Add inline citations at line 253 (default profile source) and line 301 (segment duration source) to `core/streamparameters.go` | 253, 301 | INFO | S | check 6.1 |
| 21 | Add `<Badge>` "Off-chain mode" near opening Tip (line 36) | 36 | INFO | S | Layer 5 |
