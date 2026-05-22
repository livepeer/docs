# Review: local-gateway.mdx

**Page**: `v2/developers/guides/local-development/local-gateway.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `how_to` (NON-CANONICAL)
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: NOT DECLARED
**Bytes**: 4,984
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Carries legacy `status: current` (line 23). |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Line 21 `pageType: how_to` — not in canonical set `concept | tutorial | guide | instruction | navigation | reference | resource`. Should be `instruction` (single-task procedure). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing. Should be `build` or `operate`. |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 22). |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing. Should be `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing. Should be `build` or `operate`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` until commands TESTED + versions pinned. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Running a go-livepeer broadcaster gateway locally: Ethereum keystore setup, deposit funding, and connecting to mainnet orchestrators." 152 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | Lines 16-20. |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer" generic; rest specific (broadcaster, Arbitrum, keystore, deposit). |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | OSS contributor / node-operator-curious developer persona. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | "centralised exchange" (line 63) UK. CenteredContainer import is component identifier — protected. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 37: "Running a local go-livepeer broadcaster connects your development environment directly to the Livepeer network…" Subject-first. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | TicketBroker canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | StyledStep bodies open system-first: "go-livepeer generates a keystore…", "The gateway address needs ETH on Arbitrum One…", "With the node running…". |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | MIXED | Lines 5, 10, 32, 37, 68, 71, 120 use `broadcaster` — legitimate go-livepeer CLI mode/flag (`-broadcaster`) referring to the runtime mode the binary runs in. NOT deprecated-synonym usage. The page is about running the binary in `-broadcaster` mode; the term is structurally necessary. The header `<Tip>` (line 32) names "broadcaster mode" as the operational state. INFO — flag for technical reviewer; do not blanket-rename to "gateway" without disambiguating from the protocol noun. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | Visual scan clean. |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `TicketBroker` (line 32, 84) named without inline definition or glossary link; `Ethereum keystore` (line 44) named with brief context but no link to canonical format spec. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction | MIXED | Page opens with `<Tip>` callout (line 32) then intro paragraph (line 37). The first code block does not appear until line 55 (inside Step 1). Acceptable for instruction with a Prerequisites section preceding Steps. |
| 2.D | 2.D2 | Every function/API named has code/link | MIXED | `livepeer_cli -sender-deposit` and `-sender-reserve` (lines 88-89) shown with example; `-broadcaster`, `-network`, `-ethUrl`, `-ethKeystorePath`, `-maxPricePerUnit`, `-rtmpAddr`, `-httpAddr`, `-metrics` (lines 71-78) all shown in example; `RTMP ingest` (line 37) named without link to go-livepeer RTMP spec. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | No go-livepeer version pinned. The Prerequisites bullet (line 43) just says "go-livepeer installed (see Overview)" — and the Overview itself uses `<RELEASE_VERSION>` placeholder. Chain of unresolved versioning. |
| 2.D | 2.D4 | Error states in main content | FAIL | Page has zero error-state handling. No mention of: invalid keystore password, RPC URL refused, insufficient ETH for deposit funding, "node refuses to start" scenarios, `livepeer_cli` connection failure. All would be expected first-time-user errors. |
| 2.D | 2.D5 | No prose explanations of self-evident code | PASS | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | One `<Tip>` (line 32) is a legitimate header CTA stating prerequisite condition. |
| 3. Headings | 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | "Prerequisites" is on the OK list. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Local Gateway" 2 words. |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | instruction = task-oriented; Step titles use "Create or import…", "Fund the account…" — task-led. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: run a local broadcaster end-to-end with funded deposit. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer run a local go-livepeer broadcaster with funded TicketBroker deposit and route a test stream." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | Prereq link to Overview at line 43 PASS. Next-step link to production-hardening-checklist at line 111 PASS. Missing: link to `local-orchestrator` as the natural sibling/next ("now run a local orchestrator to pair with this broadcaster"). |
| 4. Structure | 4.4 | No dead ends | PASS | Closing pointer (line 111) + Related Pages (lines 115-125). Dual handoff borderline — see 5.16. |
| 4. Structure | 4.5 | Prerequisites stated or linked | PASS | `## Prerequisites` section (line 41) lists 3 items. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Header `<Tip>` (line 32) names the operational constraint (must fund deposit). |
| 4. Structure | 4.7 | Information type correct | PASS | Procedural. |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation entry present | PASS | Overview sibling routes here. |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Zero cross-tab links. Related Pages cards (lines 115-125) stay inside `developers/`. Should graduate to `/v2/gateways/setup/connect` (which is the canonical multi-OS gateway setup, of which this page is the local-dev edition), `/v2/orchestrators/setup/...` (the orchestrator side of the broadcaster-orchestrator pair). |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I start a local broadcaster?" — yes. Does NOT answer "how do I tell if it's working?" beyond the FFmpeg test (step 5). No log-line success markers. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 4.9KB substantive (just under 5KB threshold — borderline). |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | FAIL | No trade-offs section. No mention of: local broadcaster cannot test on-chain settlement, ETH-on-Arbitrum cost reality, keystore-loss risk, mainnet orchestrator selection lag. Header `<Tip>` (line 32) implies one failure mode (unfunded deposit) but no broader frame. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All blocks (lines 55, 69, 87, 98) tagged `bash`. |
| 4. Structure | 4.18 | Code-first opening | MIXED | See 2.D1. |
| 4. Structure | 4.19 | Error states in main content | FAIL | See 2.D4. |
| 4. Structure | 4.20 | Every function/API named has code/link | PASS | All flags shown in example commands. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | FAIL | `how_to` non-canonical (see 1.2). After correction to `instruction`, template-conformance is otherwise good (Prerequisites + StyledSteps + Related Pages match instruction matrix). |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | instruction requires Prerequisites + Steps + Next Steps + (Verification). Prerequisites ✓ (line 41). StyledSteps ✓ (line 49). Next Steps via Related Pages ✓ (line 115). No explicit `## Verification` H2 — Step 5 ("Test with a stream") is the de-facto verification but should be its own section per instruction matrix. |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | PASS | Procedural → StyledSteps. |
| 5. Layout | 5.6 | MDX renders clean | PASS | (Assumed.) |
| 5. Layout | 5.7 | No old-schema frontmatter values | FAIL | Line 21 `pageType: how_to` legacy; line 23 `status: current` legacy. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | StyledSteps uses `iconColor="#2d9a67"` (line 49) — hardcoded hex on a component prop, not in a stylesheet. Strict 5.8/5.34 reading: hardcoded hex value. The colour appears elsewhere in the codebase as `var(--accent)` or via `MermaidColours.jsx`. INFO — could be tokenised. |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Opening uses Markdown HR `---` (line 35) instead of `<CustomDivider />`. Otherwise template-conformant. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Hardcoded `~/.lpData/arbitrum-one-mainnet/keystore` (lines 59, 74), `127.0.0.1:1935`, `127.0.0.1:8935` (lines 76-77, 102, 105), `0.05` / `0.02` deposit amounts (lines 88-89). Some legitimately hardcoded; deposit defaults could come from a snippet. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Both present (line 111 closing prose + Related Pages CardGroup line 115). Rule: one or the other. |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (line 115) not `<Columns cols={2}>`. Bare `title=` not `<CustomCardTitle>`. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | FAIL | 4 fenced bash blocks (lines 55, 69, 87, 98) all missing `icon` and `title`. |
| 5. Layout | 5.21 | StyledSteps used | PASS | Lines 49-107 `<StyledSteps iconColor titleColor>` + 5 `<StyledStep title icon>` blocks. |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Cards (lines 116-124) bare `title=`. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One StyledSteps block. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening Markdown HR `---` (line 35) instead of `<CustomDivider />`. Internal dividers at 39, 47, 109 OK. No divider before Related Pages line 113 — rule "ALWAYS before Related Pages" FAIL. |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No Mermaid. |
| 5. Layout | 5.28 | Import section ordering | PASS | Element → wrapper → display (lines 27-29). |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | MIXED | `iconColor="#2d9a67"` (line 49) — hex on a component prop, see 5.8. INFO. |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | "0.01-0.1 ETH covers typical testing" (line 65) — no source. "Once funded, the node will route jobs to the active orchestrator set" (line 92) — implicit; no link to active-set lookup. |
| 6. Veracity | 6.2 | Code tested | FAIL | No TESTED/NOT-TESTED labels on any of 4 code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | MIXED | "0.01-0.1 ETH" range needs source; "0.05" and "0.02" deposit defaults (lines 88-89) need rationale or source. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing — should be `unverified`. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No version pinned. |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2697. |
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
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/developers/guides/local-development/overview` (line 43), `/v2/developers/guides/production-hardening-checklist` (line 111), `/v2/developers/guides/payments/eth-escrow-and-deposits` (line 116), `/v2/developers/build/video/transcoding-direct-quickstart` (line 119), `/v2/developers/guides/local-development/overview` (line 122) — all verified. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | No external links beyond the embedded RTMP URL `rtmp://127.0.0.1:1935/stream/test`. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Steps cover the critical path. No "what success looks like" log-line markers. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | |
| 10. Content Completeness | 10.5 | Self-containment holds | MIXED | "go-livepeer installed (see Overview)" prereq depends on sibling page that itself has unresolved versioning. |
| 10. Content Completeness | 10.6 | Code samples have working language path | PASS | bash. |
| 10. Content Completeness | 10.7 | Persona-specific guides present | N/A | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Local Gateway" | PASS | |
| sidebarTitle | Yes | "Local Gateway" | PASS | |
| description | Yes | "Running a go-livepeer broadcaster gateway locally: Ethereum keystore setup, deposit funding, and connecting to mainnet orchestrators." | PASS | 152 chars |
| pageType | Yes | how_to | FAIL | Non-canonical. Use `instruction`. |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Add `build`. |
| complexity | No | — | FAIL | Add `intermediate`. |
| lifecycleStage | No | — | FAIL | Add `build` or `operate`. |
| keywords | Yes | 8 keywords | MIXED | "livepeer" generic. |
| og:image | Yes | — | PASS | |
| og:image:alt | Yes | — | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Add `unverified`. |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy; remove. |
| pageVariant | No | — | INFO | Not required for instruction. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (3×) | Required | — | Opening Markdown HR `---` (line 35) instead of `<CustomDivider />`. No divider before Related Pages line 113. |
| `<Tabs>` / `<Tab icon>` | No | — | — | Single-platform procedure (Linux/macOS implicit); Windows path absent. |
| `<StyledSteps>` / `<StyledStep>` | Yes | Required | — | Lines 49-107 — correct. `iconColor="#2d9a67"` hardcoded hex (line 49) — INFO. |
| `<Card>` / `<Columns cols={2}>` | `<CardGroup>` (line 115) | Required | — | Wrong wrapper. |
| `<CustomCardTitle icon ... />` | NO | Required | — | Bare `title=`. |
| Fenced code with icon + title | NO | Required | — | 4 bare `` ```bash `` blocks (55, 69, 87, 98). |
| `<Note>` / `<Tip>` / `<Warning>` | `<Tip>` line 32 | — | OK | Header CTA. |
| `<Accordion>` | No | — | Recommended | A `<AccordionGroup>` "Common errors" (invalid keystore, RPC refused, deposit funding failure) would address 2.D4 / 4.19 failure. |
| `<StyledTable>` | No | — | — | |
| `<LinkArrow>` | Yes (line 43) | — | — | |
| `<CenteredContainer>` | Yes (line 31) | — | Approved | Wraps header `<Tip>`. |

## Cross-page duplication and link gaps

- **OVERLAP**: `livepeer` start command at lines 69-78 overlaps `local-orchestrator.mdx` lines 46-52 / 65-76 / 102-112; `local-testnet.mdx` lines 172-182 / 199-209. Same flag scaffolding, four pages. Could be a shared snippet `livepeer-command-snippets.mdx`.
- **OVERLAP**: TicketBroker deposit funding (lines 84-92) overlaps with `guides/payments/eth-escrow-and-deposits.mdx` (linked, presumably canonical). Should link rather than duplicate.
- **LINK GAPS**: `livepeer_cli` (lines 85, 88, 89, 114) named without link to its reference page or repo path. `TicketBroker` (lines 32, 84) named without glossary link. `RTMP ingest` (line 37) named without spec link.
- **LINK GAPS**: Active orchestrator set claim (line 92) — no link to the active-set tools page (`tools.livepeer.cloud/orchestrators` or equivalent).
- **LINK GAPS**: `Alchemy, Infura` (line 44) named as RPC providers without link. Generic mention is fine, but a sample RPC URL pattern or `<LinkArrow>` to a setup guide would close the loop.
- **LINK GAPS**: No link to `livepeer/go-livepeer` repo at any point. Page is entirely about running this binary.
- **STRANDED**: Dual handoff line 111 (closing prose pointer to production checklist) + Related Pages (lines 115-125). Pick one.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (`CenteredContainer` import — protected zone) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms (Broadcaster) | 7 | lines 5, 10, 32, 37, 68, 71, 120 — all reference go-livepeer's `-broadcaster` CLI mode/flag (legitimate technical naming, not deprecated-synonym usage). INFO. Page should disambiguate "broadcaster mode" (binary state) from "gateway" (protocol role) at first use. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 PASS (OK heading term) |
| Related Pages | — | — | — | — | — | EXEMPT |

StyledStep titles (count as scan-text not body H2s, but applied scoring):
- "Create or import a keystore" — 5/4/5/5/4 = 23 PASS
- "Fund the account with ETH on Arbitrum One" — 5/4/5/5/3 = 22 PASS
- "Start the broadcaster" — 5/4/5/5/5 = 24 PASS
- "Fund the TicketBroker deposit" — 5/4/5/5/5 = 24 PASS
- "Test with a stream" — 4/4/5/5/5 = 23 PASS

Title "Local Gateway": 4/4/5/5/5 = 23 PASS.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 55 | bash | NO | NO | — | FAIL 5.20. `livepeer` invocation generates keystore. Add `icon="terminal"` `title="livepeer-first-run.sh"`. |
| 69 | bash | NO | NO | — | FAIL 5.20. Broadcaster start. Add `icon="terminal"` `title="start-broadcaster.sh"`. |
| 87 | bash | NO | NO | — | FAIL 5.20. `livepeer_cli` deposit funding. Add `icon="terminal"` `title="fund-deposit.sh"`. |
| 98 | bash | NO | NO | — | FAIL 5.20. FFmpeg test stream. Add `icon="terminal"` `title="ffmpeg-test-stream.sh"`. |

All 4 blocks: no TESTED label, no version pin in command. FAIL 6.2 + 6.8.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's actual outcome is "I have a working local broadcaster routing jobs to mainnet". The page gets them to "run `livepeer` with these flags and `ffmpeg` to test", but does not deliver the verification proof — there's no "look for log line X" or "curl `/status` returns Y" success marker. Step 5 ("Test with a stream") asserts the HLS manifest appears at `http://127.0.0.1:8935/stream/test.m3u8` (line 105), but does not name the log lines that confirm the broadcaster connected to the orchestrator set, or the indicator that the deposit was accepted on-chain.
- **Fix step:** Add a `## Verification` H2 after the StyledSteps block. 3 verification commands: (1) `curl http://127.0.0.1:7935/status` (or appropriate broadcaster status endpoint) showing the active orchestrator count > 0; (2) named log line pattern e.g. `INFO Connected to 5 orchestrators` to grep for; (3) `curl http://127.0.0.1:8935/stream/test.m3u8` returning a 200 with an `application/vnd.apple.mpegurl` body. Each as a code block with `icon="terminal"` `title="verify-broadcaster.sh"`.
- **Source/exemplar:** `_packet/component-matrix.md` lines 73-79 (instruction matrix: Verification section Required); `livepeer/go-livepeer` CLI README for status endpoint patterns.

### Layer 2 — Composition
- **Gap:** 4 bare bash blocks (lines 55, 69, 87, 98) — no `icon` / `title`. `<CardGroup>` (line 115) not `<Columns cols={2}>` + `<CustomCardTitle>`. Markdown HR `---` (line 35) not `<CustomDivider />`. Missing `<CustomDivider />` before Related Pages line 113. No `<AccordionGroup>` for failure modes despite the page lacking any error-state coverage. Imported `LinkArrow` (line 27) used only once (line 43); could anchor more `LinkArrow` instances at TicketBroker / livepeer_cli first uses.
- **Fix step:** (a) Add `icon` + `title` to all 4 code blocks. (b) Convert `<CardGroup>` → `<Columns cols={2}>` + `<CustomCardTitle horizontal>`. (c) Replace line 35 `---` with `<CustomDivider />`. (d) Add `<CustomDivider />` immediately before line 113 `## Related Pages`. (e) Add a new `## Common Errors` section before Related Pages using `<AccordionGroup>` with 4 `<Accordion icon="circle-exclamation">` items: "Keystore decryption failed", "RPC connection refused", "Deposit transaction reverted", "No orchestrators in active set". Each with the actual error message + the fix.
- **Source/exemplar:** `_packet/component-matrix.md` instruction matrix; `byoc-quickstart.mdx` review for the failure-mode Accordion pattern.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. The most natural graduation — to `/v2/gateways/setup/connect` (the canonical multi-OS gateway setup of which this is the local-dev edition) — is absent. The natural sibling — `local-orchestrator.mdx` — is mentioned only as a Related Pages card on the overview (not from this page). Within the page: no link to `TicketBroker` glossary entry; no link to `livepeer_cli` reference; no link to `livepeer/go-livepeer` repo.
- **Fix step:** (a) Replace one Related Pages card with a cross-tab graduation to `/v2/gateways/setup/connect` ("Production gateway setup"). (b) Add a Related Pages card linking to `local-orchestrator.mdx`. (c) Inline `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` near line 37 first mention. (d) Link `TicketBroker` (line 32, 84) to the `eth-escrow-and-deposits.mdx` page (already in Related Pages — promote to inline). (e) Link `livepeer_cli` (line 85) to its reference page (need to identify canonical location).
- **Source/exemplar:** `/v2/gateways/setup/connect` (sibling canonical); `livepeer/go-livepeer` repo.

### Layer 4 — Veracity and source authority
- **Gap:** Six sourceless claims. (a) Line 65: "0.01-0.1 ETH covers typical testing" — no source. (b) Lines 88-89: deposit `0.05` and `0.02` defaults — no rationale or source. (c) Line 92: "active orchestrator set" — no link to tools.livepeer.cloud or the on-chain BondingManager view. (d) Line 81: `-maxPricePerUnit 0` "disables price filtering" — accurate but no link to go-livepeer pricing docs. (e) Line 75: `-network arbitrum-one-mainnet` — no link to the go-livepeer network-name list. (f) `livepeer_cli -sender-deposit 0.05` (line 88) — no link to livepeer_cli docs showing this flag.
- **Fix step:** (a) Add a footnote or inline citation for the 0.01-0.1 ETH range — link to a Discord thread, a docs Discord channel transcript, or a community estimate doc. (b) Reduce the deposit defaults to "see Step X for sizing" with a link to `eth-escrow-and-deposits.mdx`. (c) Link "active orchestrator set" to `tools.livepeer.cloud/orchestrators`. (d) Add `{/* REVIEW: confirm go-livepeer flag docs URL */}` placeholders. (e) Add `veracityStatus: unverified` to frontmatter and a `TESTED: YYYY-MM-DD with go-livepeer vX.Y.Z` JSX comment above each code block once tested.
- **Source/exemplar:** `livepeer/go-livepeer` CLI README; `tools.livepeer.cloud`.

### Layer 5 — Product-forward depth
- **Gap:** Page tells the reader how to start a broadcaster but not whether this is a real maintained path or what the experience is like. Missing: ETH cost reality ("running this for a week costs roughly $X"), latency expectation ("first job dispatch takes 5-30 seconds after deposit confirms"), the typical failure ("most first-time users hit this at step 4 — fund failed because nonce was wrong"). No mention of go-livepeer release cadence or LTS tag. The page assumes the reader is already convinced; it does not signal product confidence.
- **Fix step:** (a) Add a `<Badge>` near the title showing the tested go-livepeer version. (b) Add an expectations callout near line 37: "Reader effort: 30 minutes after RPC URL in hand. Recurring cost: ~$0 ETH if deposit recycles via `withdraw`." (c) Add a "Why not [managed gateway]?" 2-line frame in the intro acknowledging that 80% of readers don't need this; this page is for the 20% who do. (d) Add a Discord channel link for live help (`#orchestrating` or `#builders`) in the Related Pages or a footer `<Tip>`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart maturity/expectations pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 3

**Critical findings (top 5)**:
1. **`pageType: how_to` non-canonical (1.2 / 5.7)** — line 21. Use `instruction`. HIGH.
2. **Frontmatter incomplete (1.1 / 1.4 / 1.6 / 1.7 / 1.8)** — missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`; legacy `status: current`. HIGH.
3. **Related Pages wrong format (5.17 / 5.22)** — `<CardGroup>` not `<Columns>`; bare `title=` not `<CustomCardTitle>`. HIGH.
4. **Code blocks missing icon + title (5.20)** — all 4 blocks bare. HIGH.
5. **No `## Verification` section (5.2 / instruction matrix)** + **no error-state coverage (2.D4 / 4.19)** — page declares "the gateway is ready for development workloads" (line 111) without giving the reader an objective check. HIGH.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `pageType: instruction`; remove legacy `status: current` field. | 21, 23 | HIGH | S | check 1.2, 5.7 |
| 2 | Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter. | 22-24 | HIGH | S | check 1.1, 1.4, 1.6, 1.7, 1.8 |
| 3 | Convert Related Pages `<CardGroup>` (line 115) to `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`. Trim descriptions to ≤10 words. Replace one card with a cross-tab graduation to `/v2/gateways/setup/connect`. Add a `local-orchestrator` card. | 113-125 | HIGH | M | check 5.17, 5.22, 4.10, 7.6 |
| 4 | Add `icon="terminal"` + `title=` per block: line 55 `livepeer-first-run.sh`; line 69 `start-broadcaster.sh`; line 87 `fund-deposit.sh`; line 98 `ffmpeg-test-stream.sh`. | 55, 69, 87, 98 | HIGH | S | check 5.20 |
| 5 | Add `## Verification` H2 after StyledSteps (after line 107) with 3 verification commands: `curl /status`, log-line grep, `.m3u8` HEAD check. Each as fenced bash with icon+title. | After 107 | HIGH | M | check 5.2 (instruction matrix Verification Required) |
| 6 | Add `## Common Errors` `<AccordionGroup>` before Related Pages with 4 `<Accordion icon>` items: "Keystore decryption failed", "RPC connection refused", "Deposit transaction reverted", "No orchestrators in active set". | Before 113 | HIGH | M | check 2.D4, 4.19 |
| 7 | Add `<CustomDivider />` before `## Related Pages` line 113. Replace Markdown HR `---` line 35 with `<CustomDivider />`. | 35, 113 | HIGH | S | check 5.26 |
| 8 | Remove dual handoff: delete closing prose pointer at line 111 (keep Related Pages). | 109-111 | HIGH | S | check 5.16 |
| 9 | Add inline upstream-repo links: `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` near line 37; link `livepeer_cli` (line 85) to its reference page; link `TicketBroker` (line 32) to glossary or `eth-escrow-and-deposits.mdx`. | 37, 85, 32 | MEDIUM | M | check 6.10, Layer 3 |
| 10 | Source the 0.01-0.1 ETH range (line 65) and deposit defaults (lines 88-89) — either replace with "see eth-escrow-and-deposits for sizing" + LinkArrow, or add citation. | 65, 88-89 | MEDIUM | S | check 6.1, 6.4 |
| 11 | Replace `iconColor="#2d9a67"` (line 49) with `iconColor="var(--accent-secondary)"` (or equivalent token) — eliminates hardcoded hex on component prop. | 49 | INFO | S | check 5.8, 5.34 |
| 12 | Add disambiguation line under intro: "This page uses the go-livepeer `-broadcaster` CLI mode/flag — the binary's runtime mode for routing jobs (the canonical protocol noun is `Gateway`)." | Line 37 onwards | INFO | S | check 2.16 disambiguation |
| 13 | Add `<Badge>` near the title showing tested go-livepeer version + an "Expectations" callout (cost / time / typical failure) near line 37. | After title; near 37 | MEDIUM | M | Layer 5 |
| 14 | Drop generic "livepeer" keyword; tighten keyword set. | 8 | INFO | S | check 1.13 |
