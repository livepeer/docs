# Review: local-orchestrator.mdx

**Page**: `v2/developers/guides/local-development/local-orchestrator.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `how_to` (NON-CANONICAL)
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: NOT DECLARED
**Bytes**: 5,693
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Legacy `status: current` (line 23). |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Line 21 `pageType: how_to` — non-canonical. Use `instruction` (the page has two mode-procedures plus an AI-Only note section — could also be `guide` with two H2 sub-procedures). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing. Use `build`. |
| 1. Frontmatter | 1.5 | audience canonical | PASS | |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing. Use `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing. Use `build`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Running a go-livepeer orchestrator locally for testing BYOC containers, AI pipelines, and payment flows without the full mainnet active set." 158 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | Lines 16-20. |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific (local orchestrator, BYOC testing, aiModels.json, standalone transcoder). "livepeer" generic (line 8). |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | OSS contributor / developer testing BYOC. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | CenteredContainer protected zone. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 37: "A local go-livepeer orchestrator provides a real protocol-level test target…" |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, PyTrickle, ComfyStream, aiModels.json all canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | "Standalone transcoder mode processes jobs…" / "The orchestrator reads this file…" / "From go-livepeer v0.7.x, a single binary supports…" — all system-led. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | MIXED | Lines 54, 100, 104, 118, 154 use `broadcaster` referring to go-livepeer `-broadcaster` CLI mode. Same legitimate-technical-reference pattern as `local-gateway.mdx`. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `aiModels.json` (lines 12, 49, 74, 81) named as the registration file but no inline link to canonical schema; `pricePerUnit` / `maxPricePerUnit` flag semantics named in passing; `live-video-to-video` pipeline string (line 87) shown without explanation of pipeline taxonomy. `standalone transcoder mode` defined inline (line 42) — PASS. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction | MIXED | Standalone Mode section opens with prose (line 42) then code (line 45). The standalone mode IS code-led in spirit (one block). Full Orchestrator Mode has StyledSteps. Acceptable. |
| 2.D | 2.D2 | Every function/API named has code/link | MIXED | All flags shown in code examples ✓. `aiModels.json` registration shown (lines 84-94) ✓. `live-video-to-video` pipeline named without taxonomy link. `-aiModels` flag (line 128) referenced in prose with the example command after — OK. |
| 2.D | 2.D3 | Versions stated explicitly | PASS (notable) | Line 128: "From go-livepeer v0.7.x, a single binary supports both transcoding and AI workloads." — version-pinned claim! This is the strongest version-pin in the whole local-development subgroup. |
| 2.D | 2.D4 | Error states in main content | FAIL | No error-state handling. Common failures (aiModels.json malformed JSON, `-orchAddr` port collision, BYOC container not responding) not addressed. |
| 2.D | 2.D5 | No prose explanations of self-evident code | PASS | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | Single `<Tip>` (line 32) is header CTA. |
| 3. Headings | 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | MIXED | "Standalone Mode (No Ethereum)" and "Full Orchestrator Mode" are mode contrasts. Acceptable because they're domain-anchored modes, not "X vs Y" labels. |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Local Orchestrator" 2 words. |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | instruction = task-oriented; modes are named procedures. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | MIXED | Two modes (standalone + full) + an AI-Only note section. Each is its own job. Page could be split into 2 pages or use Tabs to surface modes side-by-side. Currently one purpose ("run a local orchestrator") with two paths. PASS in spirit. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer run a local go-livepeer orchestrator in standalone or full mode to test BYOC containers and AI pipelines." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | No explicit prereq link to local-gateway or overview at top of page. Prerequisites not stated. |
| 4. Structure | 4.4 | No dead ends | PASS | Closing prose (line 142) + Related Pages (lines 146-159). Dual handoff — see 5.16. |
| 4. Structure | 4.5 | Prerequisites stated or linked | FAIL | No `## Prerequisites` section. Reader must know: Docker (if testing BYOC), Python (if PyTrickle), go-livepeer installed, GPU+CUDA (if AI). None stated. Brief explicit on Prerequisites for OSS contributor persona. |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Header `<Tip>` (line 32) names standalone mode as not requiring Ethereum. Doesn't explicitly bound out "this is not how to run production orchestrator". |
| 4. Structure | 4.7 | Information type correct | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | Lines 102-112 (start a local broadcaster) duplicate `local-gateway.mdx` lines 69-78. Should link rather than duplicate. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Zero cross-tab links. Related Pages stay inside `developers/`. Should graduate to `/v2/orchestrators/setup/...` (operator side), `/v2/orchestrators/concepts/role`, or `/v2/gateways/setup/connect` (broadcaster pair). |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I run a local orchestrator?" — yes. Does NOT answer "how do I verify my BYOC container is being routed to correctly?" or "what does success look like in the logs?". |
| 4. Structure | 4.12 | Page size appropriate | PASS | 5.7KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | MIXED | Standalone Mode (single command) and Full Orchestrator Mode (4-step procedure) could be side-by-side Tabs. Today they're sequential H2s; the standalone reader has to scroll past the standalone code to find the full procedure. |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | FAIL | No trade-offs section. Standalone-vs-full trade-offs (no on-chain validation in standalone, no payment verification, no real orchestrator selection) are not explicit. The header `<Tip>` mentions standalone has no Ethereum requirement but does not list what it loses. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All blocks tagged `bash` or `json` (line 45, 64, 84, 102, 130). |
| 4. Structure | 4.18 | Code-first opening | MIXED | See 2.D1. |
| 4. Structure | 4.19 | Error states in main content | FAIL | See 2.D4. |
| 4. Structure | 4.20 | Every function/API named has code/link | PASS | |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | FAIL | `how_to` non-canonical. After correction (probably `instruction` or `guide`), the layout otherwise matches the matrix (Prerequisites missing). |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | If `instruction`: needs Prerequisites (missing) + Steps (present in Full Mode) + Verification (missing) + Next Steps (Related Pages, present). |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | MIXED | Standalone Mode procedure (single command) used as a code block — PASS. Full Mode procedure used `<StyledSteps>` — PASS. AI-Only Orchestrator (lines 126-138) is a sub-mode note that could be a `<Note>` or an `<Accordion>` inside Full Mode rather than its own H2. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter values | FAIL | `pageType: how_to` legacy; `status: current` legacy. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | `iconColor="#2d9a67"` (line 62) — same hex-on-prop issue. INFO. |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Opening Markdown HR `---` (line 35) instead of `<CustomDivider />`. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | MIXED | Standalone vs Full are 1D variants — should be Tabs per 5.14. Today they're sequential H2s. |
| 5. Layout | 5.15 | Data imports used | MIXED | `aiModels.json` example (lines 84-93) hardcoded. Same example could be a shared snippet imported from `snippets/data/byoc/aiModels-example.json`. Hardcoded ports (`127.0.0.1:8936`, `127.0.0.1:7936`, `127.0.0.1:8000`) — defaults; acceptable. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Dual handoff: closing prose line 142 + Related Pages line 146. Pick one. |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` (line 146) not `<Columns>`. Bare `title=` not `<CustomCardTitle>`. |
| 5. Layout | 5.18 | Tab icon prop | N/A (no Tabs but should be) | See 5.14. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | FAIL | 5 fenced blocks (45 bash, 64 bash, 84 json, 102 bash, 130 bash) all missing `icon` + `title`. |
| 5. Layout | 5.21 | StyledSteps used | PASS | Lines 62-122 use `<StyledSteps iconColor titleColor>` + 4 `<StyledStep>`. |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Cards bare `title=`. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | One StyledSteps block + standalone code block + AI-Only code block — 3 medium layout elements. Acceptable. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening Markdown HR `---` (line 35). Internal at 39, 56, 124, 140 OK. No divider before Related Pages line 144 — FAIL "ALWAYS before Related Pages". |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No Mermaid. A sequence diagram (broadcaster → orchestrator → BYOC container) would help. |
| 5. Layout | 5.28 | Import section ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | MIXED | `iconColor="#2d9a67"` line 62 — INFO. |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | "Standalone transcoder mode processes jobs from a connected broadcaster without on-chain registration or payment validation" (line 54) — accurate but no link to go-livepeer source. "From go-livepeer v0.7.x, a single binary supports both transcoding and AI workloads" (line 128) — version-pinned but no PR/commit citation. "This replaces the previous pattern of running a separate AI subnet binary" (line 138) — refers to a deprecated pattern without link to migration notes. |
| 6. Veracity | 6.2 | Code tested | FAIL | No TESTED/NOT-TESTED labels. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | MIXED | v0.7.x cited (line 128) PASS. No tag-level pin for the standalone/full mode commands. |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2698. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | See 4.10. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/developers/build/compute/byoc/overview` (line 147), `/v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart` (line 150), `/v2/developers/guides/local-development/local-gateway` (line 153), `/v2/developers/guides/local-development/overview` (line 156) — all verified. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Two modes covered. No verification commands, no error states. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | MIXED | Doesn't bound out production orchestrator setup. |
| 10. Content Completeness | 10.5 | Self-containment holds | MIXED | Prerequisites missing. |
| 10. Content Completeness | 10.6 | Code samples have working language path | PASS | bash + json. |
| 10. Content Completeness | 10.7 | Persona-specific guides present | N/A | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Local Orchestrator" | PASS | |
| sidebarTitle | Yes | "Local Orchestrator" | PASS | |
| description | Yes | 158 chars subject-first | PASS | |
| pageType | Yes | how_to | FAIL | Non-canonical. Use `instruction`. |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `build`. |
| complexity | No | — | FAIL | Add `intermediate`. |
| lifecycleStage | No | — | FAIL | Add `build`. |
| keywords | Yes | 8 keywords | PASS | "livepeer" generic — INFO. |
| og:image fields | Yes (5) | — | PASS | |
| veracityStatus | No | — | FAIL | Add `unverified`. |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy. |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Opening Markdown HR `---` (line 35); no divider before Related Pages line 144. |
| `<Tabs>` / `<Tab icon>` | NO | — | Strongly recommended | Standalone vs Full Mode are perfect Tab candidates per 5.14. |
| `<StyledSteps>` / `<StyledStep>` | Yes | Required | — | Lines 62-122; `iconColor="#2d9a67"` hardcoded. |
| `<Card>` / `<Columns>` Related Pages | `<CardGroup>` (line 146) | Required | — | Wrong wrapper. |
| `<CustomCardTitle>` | NO | Required | — | Bare `title=`. |
| Fenced code with icon + title | NO | Required | — | 5 blocks all bare. |
| `<Note>` / `<Tip>` | `<Tip>` line 32 | — | OK | Header CTA. |
| `<Accordion>` | No | — | Recommended | Common Errors AccordionGroup + AI-Only Orchestrator note could become an Accordion inside Full Mode. |
| `<StyledTable>` | No | — | — | Could surface a Standalone vs Full comparison table. |
| `<LinkArrow>` | Imported (line 27) but unused | — | — | Remove or use. |
| `<CenteredContainer>` | Yes | — | Approved | |

## Cross-page duplication and link gaps

- **OVERLAP**: Lines 102-112 (start a local broadcaster) duplicate `local-gateway.mdx` lines 69-78. Should be `<LinkArrow href="/v2/developers/guides/local-development/local-gateway#start-the-broadcaster">` reference.
- **OVERLAP**: `aiModels.json` example payload (lines 84-93) duplicates examples on `byoc/overview.mdx` and `byoc-architecture.mdx`. Section-level finding in build-compute summary already flags this. Should pull from a shared snippet `snippets/data/byoc/aiModels-example.json`.
- **LINK GAPS**: `aiModels.json` (lines 12, 49, 74, 81) named without link to canonical schema in `livepeer/go-livepeer`. `live-video-to-video` pipeline string (line 87) named without taxonomy link. `pytrickle service, ComfyStream` (line 118) named without inline link (linked in Related Pages, but inline anchor missing). `AI subnet binary` (line 138) referenced as deprecated pattern without migration notes link.
- **LINK GAPS**: No link to `livepeer/go-livepeer` repo anywhere on the page despite it being the binary being run.
- **LINK GAPS**: Zero cross-tab links. Missing `/v2/orchestrators/setup/...`, `/v2/gateways/setup/connect`.
- **STRANDED**: Dual handoff (line 142 closing prose + Related Pages line 146). Pick one.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (CenteredContainer protected) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms (Broadcaster) | 5 | lines 54, 100, 104, 118, 154 — go-livepeer `-broadcaster` CLI mode reference. INFO. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Standalone Mode (No Ethereum) | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Full Orchestrator Mode | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| AI-Only Orchestrator | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Related Pages | — | — | — | — | — | EXEMPT |

StyledStep titles:
- "Start the orchestrator" — 5/4/5/5/5 = 24 PASS
- "Configure BYOC in aiModels.json" — 5/4/5/5/4 = 23 PASS
- "Point a local gateway at this orchestrator" — 5/4/5/5/4 = 23 PASS
- "Test BYOC container" — 4/4/5/5/5 = 23 PASS

Title "Local Orchestrator": 4/4/5/5/5 = 23 PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 45 | bash | NO | NO | — | FAIL 5.20. Standalone orchestrator start. Add `icon="terminal"` `title="start-standalone-orch.sh"`. |
| 64 | bash | NO | NO | — | FAIL 5.20. Full mode orchestrator start. Add `icon="terminal"` `title="start-full-orch.sh"`. |
| 84 | json | NO | NO | — | FAIL 5.20. aiModels.json example. Add `icon="code"` `title="aiModels.json"`. |
| 102 | bash | NO | NO | — | FAIL 5.20. Local broadcaster start (duplicates local-gateway). Add `icon="terminal"` `title="start-broadcaster.sh"` OR remove block and link to local-gateway. |
| 130 | bash | NO | NO | — | FAIL 5.20. AI-only orchestrator partial command. Add `icon="terminal"` `title="ai-only-orch.sh"`. Note: trailing `...` is illustrative; mark non-runnable. |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "I have a local orchestrator that my BYOC container can route to and I can prove it's working". The page gets them to "start the orchestrator + register a BYOC entry + point a broadcaster at it" — but Step 4 ("Test BYOC container", line 117) tells the reader "Verify the container processes frames and the broadcaster receives transformed output. Check the orchestrator logs for job routing events and the BYOC container logs for inference activity." That's narrative direction, not testable: no log-line pattern to grep for, no `curl` to run, no expected output. The reader still doesn't know what success looks like.
- **Fix step:** Replace the narrative in Step 4 with three explicit verification commands as a fenced bash block: (a) `docker logs <orch-container> 2>&1 | grep "Selected orchestrator"` — expected log line pattern; (b) `curl -X POST http://127.0.0.1:8000/health` — BYOC health check returning `{"status": "ok"}`; (c) end-to-end test: post a sample request, expect a 200. Each with TESTED label.
- **Source/exemplar:** `_packet/component-matrix.md` instruction matrix Verification Required; `byoc-quickstart.mdx` for the verification pattern.

### Layer 2 — Composition
- **Gap:** Standalone Mode and Full Orchestrator Mode are sequential H2s — but they're the 1D variants check 5.14 names as "should be Tabs". A reader who only needs Standalone scrolls past the entire Full procedure to reach the AI-Only note and Related Pages. AI-Only Orchestrator (lines 126-138) is a sub-mode note that disrupts the mode taxonomy — it's "Full Mode but with AI flag" — should fold into Full Mode as an Accordion. 5 bare code blocks. `<CardGroup>` not `<Columns>`. No Prerequisites section. No `<CustomDivider />` before Related Pages.
- **Fix step:** (a) Convert Standalone/Full into `<Tabs>` block with `<Tab title="Standalone (no Ethereum)" icon="cube-transparent">` and `<Tab title="Full mode (with Ethereum)" icon="key">`. (b) Fold "AI-Only Orchestrator" (lines 126-138) into Full Mode as an `<Accordion icon="microchip">` with title "Enable AI workloads". (c) Add `## Prerequisites` H2 after intro (line 37) listing: go-livepeer installed, Docker (for BYOC container), Python 3.10+ (for PyTrickle), GPU+CUDA if AI workload, BYOC container code or pulled image. (d) Add `icon` + `title` to all 5 code blocks. (e) `<CardGroup>` → `<Columns>` + `<CustomCardTitle horizontal>`. (f) Add `<CustomDivider />` before line 144 Related Pages. (g) Replace line 35 Markdown HR.
- **Source/exemplar:** `_packet/component-matrix.md` lines 195-204 (Tabs check 5.18); `_packet/component-matrix.md` instruction matrix; `byoc-quickstart.mdx` review for Tab pattern.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. The natural graduation — `/v2/orchestrators/setup/quickstart` or `/v2/orchestrators/setup/capabilities` (operator-side BYOC) — is absent. The natural prereq — `local-gateway.mdx` (for the broadcaster pair) — appears only as the third Related Pages card; should be inline at line 100 ("Start a local broadcaster..."). The natural upstream — `livepeer/go-livepeer` — is not linked. AI-Only Orchestrator (line 138) names the deprecated AI subnet pattern without migration notes link.
- **Fix step:** (a) Replace one Related Pages card with cross-tab graduation to `/v2/orchestrators/setup/capabilities`. (b) Inline `<LinkArrow href="/v2/developers/guides/local-development/local-gateway">local gateway</LinkArrow>` at line 100 instead of duplicating its command. (c) Add `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` inline near line 37 or first `-aiModels` reference. (d) For the "AI subnet binary" deprecation note (line 138), add `{/* REVIEW: link migration notes from AI subnet to in-binary mode */}` placeholder.
- **Source/exemplar:** `/v2/orchestrators/setup/capabilities` (operator side); `livepeer/go-livepeer` repo.

### Layer 4 — Veracity and source authority
- **Gap:** Three sourceless or version-soft claims. (a) Line 54: "Standalone transcoder mode processes jobs from a connected broadcaster without on-chain registration or payment validation" — should cite the go-livepeer source path implementing this mode. (b) Line 128: "From go-livepeer v0.7.x, a single binary supports both transcoding and AI workloads" — version stated but no PR/commit reference. (c) Line 138: "This replaces the previous pattern of running a separate AI subnet binary" — refers to a now-deprecated tool without migration link or date.
- **Fix step:** (a) Add inline LinkArrow to `livepeer/go-livepeer/blob/master/cmd/livepeer/livepeer.go` or wherever standalone mode is implemented (need to verify against repo). (b) Add PR/commit reference for v0.7.x AI-in-binary feature. (c) Add `{/* REVIEW: link AI subnet → in-binary migration notes */}` placeholder. (d) Add TESTED labels to all 5 code blocks once tested.
- **Source/exemplar:** `livepeer/go-livepeer` source + release notes for v0.7.x.

### Layer 5 — Product-forward depth
- **Gap:** Page lists two modes but doesn't help the reader pick. Missing: when does standalone suffice vs when do I need full? What does standalone NOT test (the obvious answer — payment validation — is implied but not explicit)? How long does each mode take to set up? What's the typical first failure? No Badge of go-livepeer compatibility / maturity. The AI-Only note (line 138) cites v0.7.x but the rest of the page doesn't pin a tag.
- **Fix step:** (a) Add a "Choose your mode" `<StyledTable>` at the top of the body: 3 columns (Standalone / Full / AI-Only) × 4 rows (Setup time, ETH required, Payment validation, Use when…). (b) Add `<Badge>go-livepeer v0.7.x+ — single-binary AI</Badge>` near the title. (c) Add a "Mode trade-offs" `<Tip>` near line 37: "Standalone is fastest (5 minutes) but skips payment validation; Full mode mirrors production but needs ETH + RPC. AI workloads run in both modes from v0.7.x." (d) Add `Discord #orchestrating` footer link for live help.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — mode-comparison table pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 6 / INFO 3

**Critical findings (top 5)**:
1. **`pageType: how_to` non-canonical (1.2 / 5.7)** — line 21. Use `instruction`. HIGH.
2. **Frontmatter incomplete (1.1)** — missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current`. HIGH.
3. **Related Pages format wrong (5.17 / 5.22)** — `<CardGroup>` not `<Columns>`; bare `title=`. HIGH.
4. **Code blocks missing icon + title (5.20)** — all 5 blocks. HIGH.
5. **Standalone/Full Modes should be Tabs (5.14)** + **AI-Only is a Full-Mode sub-state misfiled as separate H2 (5.5)** — page composition does not match the 1D variant rule. HIGH.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `pageType: instruction`; remove `status: current`. | 21, 23 | HIGH | S | check 1.2, 5.7 |
| 2 | Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified`. | 22-24 | HIGH | S | check 1.1 |
| 3 | Convert Standalone Mode + Full Orchestrator Mode into `<Tabs>` with `<Tab title icon>` per mode. Fold AI-Only Orchestrator (lines 126-138) into Full Mode tab as `<Accordion icon="microchip" title="Enable AI workloads">`. | 41-138 | HIGH | L | check 5.14, 5.5 |
| 4 | Add `## Prerequisites` H2 after intro (after line 37) listing: go-livepeer installed (link Overview), Docker, Python 3.10+ for PyTrickle, GPU+CUDA if AI, BYOC container code/image. | After 37 | HIGH | M | check 4.5, OSS-contributor brief |
| 5 | Convert Related Pages `<CardGroup>` (line 146) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`. Trim descriptions to ≤10 words. Replace one card with cross-tab graduation `/v2/orchestrators/setup/capabilities`. | 144-159 | HIGH | M | check 5.17, 5.22, 4.10 |
| 6 | Add `icon` + `title` per block: line 45 `start-standalone-orch.sh`; line 64 `start-full-orch.sh`; line 84 `aiModels.json`; line 102 `start-broadcaster.sh`; line 130 `ai-only-orch.sh`. | 45, 64, 84, 102, 130 | HIGH | S | check 5.20 |
| 7 | Replace narrative in StyledStep "Test BYOC container" (lines 117-121) with 3 explicit verification commands: docker logs grep, BYOC `/health` curl, end-to-end POST → 200. Each fenced bash with icon+title. | 117-121 | HIGH | M | check 4.20, Layer 1 |
| 8 | Add `<CustomDivider />` before line 144 `## Related Pages`. Replace line 35 Markdown HR with `<CustomDivider />`. | 35, 144 | HIGH | S | check 5.26 |
| 9 | Remove dual handoff: delete closing prose line 142 (keep Related Pages). | 142 | HIGH | S | check 5.16 |
| 10 | Replace duplicated broadcaster command (lines 102-112) with `<LinkArrow href="/v2/developers/guides/local-development/local-gateway#start-the-broadcaster">Start the local broadcaster</LinkArrow>` or a 1-line note + link. | 102-112 | MEDIUM | M | Layer 3, 4.8 |
| 11 | Extract `aiModels.json` example (lines 84-93) to shared snippet `snippets/data/byoc/aiModels-example.json` and import. | 84-93 | MEDIUM | M | check 5.15 |
| 12 | Add a "Choose your mode" `<StyledTable>` near top: Standalone / Full / AI-Only × Setup time / ETH required / Payment validation / Use when…. | After line 37 | MEDIUM | M | Layer 5 |
| 13 | Add inline upstream-repo link `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` near line 37 or first flag mention. | 37 | MEDIUM | S | check 6.10 |
| 14 | Add `{/* REVIEW: link AI subnet → in-binary migration notes for v0.7.x */}` near line 138. | 138 | MEDIUM | S | check 6.1, Layer 4 |
| 15 | Replace `iconColor="#2d9a67"` (line 62) with token. | 62 | INFO | S | check 5.8 |
| 16 | Remove unused `LinkArrow` import (line 27) OR use inline. | 27 | INFO | S | check 5.28 |
| 17 | Drop "livepeer" generic keyword. | 8 | INFO | S | check 1.13 |
| 18 | Add `<Badge>go-livepeer v0.7.x+ — single-binary AI</Badge>` near title. | After title | MEDIUM | M | Layer 5 |
