# Review: video-and-livestream.mdx

**Page**: `v2/developers/learn/video-and-livestream.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A2 (re-dispatch)
**pageType (from frontmatter)**: concept
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: evaluate
**Bytes**: 7,690
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Most present; `veracityStatus` absent — page uses old-schema `status: current` (line 29) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | line 8: `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | line 10: `purpose: evaluate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | line 9: `audience: developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | line 11: `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | line 12: `lifecycleStage: evaluate` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Absent. `status: current` is non-canonical |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description ≤160, subject-first | FAIL | "How video transcoding and livestreaming work..." — 169 chars, over the 160 limit. Subject-led ("How") rather than entity-led ("Livepeer transcodes...") |
| 1. Frontmatter | 1.12 | OG block complete | PASS | lines 24–28 — all 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | 10-item array, all specific (`RTMP`, `HLS`, `WebRTC`, `go-livepeer`) |
| 1. Frontmatter | 1.14 | developer/builder split honoured | PASS | Developer register held |
| 2. Voice & Copy | 2.1 | UK English | PASS | grep clean (CenteredContainer hits in import are false-positive) |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | grep clean |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | grep clean |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order | MIXED | First body content is a `<Tip>` callout (line 38). First H2-less body paragraph at line 43 opens "Livepeer provides..." — subject-first PASS once you skip the callout. The callout itself opens "Video is the original Livepeer use case" — historical framing first, integration value second |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | RTMP / HLS / WebRTC / WHIP / WHEP correctly used |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | grep clean |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Body paragraphs lead with system fact: "Livestreams accept...", "VOD assets accept...", "Multistream simultaneously..." |
| 2. Voice & Copy | 2.14 | No hedging verbs | PASS | |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | **FAIL — CRITICAL** | line 138: "Running a go-livepeer broadcaster node gives direct network access." Uses deprecated "broadcaster" as a synonym for Gateway in prose. Also line 142 `-broadcaster` CLI flag in code is acceptable (it's the literal flag) |
| 2. Voice & Copy | 2.17 | Universal terms consistent | MIXED | "Gateway" lower-case in body (line 43, 64, etc.) is per UK style but capitalisation is inconsistent — line 87 uses lowercase "self-hosted gateway" then line 138 uses lowercase "broadcaster node" instead of "Gateway" |
| 2. Voice & Copy | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | |
| 2. Voice & Copy | 2.21 | First-use definition | MIXED | "ABR" introduced line 38 without definition. "WHIP/WHEP" introduced line 128 / 162 without expansion (WebRTC HTTP Ingest/Egress Protocol). "TicketBroker" line 151 not defined or linked |
| 2. Voice & Copy | 2.22 | Terminology lock respected | FAIL | Same as 2.16 — "broadcaster" in prose |
| 2.D | 2.D1 | Code-first opening | N/A | concept page |
| 2.D | 2.D2 | API/method in prose has code/link | MIXED | `client.stream.create` shown in code line 102 with TypeScript; same Python line 121 — good. `Player` and `Broadcast` components named line 128 with no link to `@livepeer/react` reference |
| 2.D | 2.D3 | Versions explicit | FAIL | No go-livepeer version pin. `@livepeer/react` install line 131 — no version. `livepeer` SDK install (TS/Python) — no version |
| 2.D | 2.D4 | Errors in main content | N/A | |
| 2.D | 2.D5 | No self-evident code commentary | PASS | |
| 2.D | 2.D6 | No marketing adjacent | PASS | |
| 2.D | 2.D7 | Note not used for primary content | N/A | No `<Note>` on this page |
| 3. Headings | 3.1 | Score ≥20/25 each | MIXED | See heading table — `Access paths` and `Pricing` borderline |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics/Notes/How It Works/See Also/Conclusion` |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Headings reference video/workload/gateway/protocol/pricing |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Video and livestream on Livepeer" — 4 words, concept-derived |
| 3. Headings | 3.7 | Expert editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept-style |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: orient developer evaluating video + livestream on Livepeer |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer evaluate video and livestream paths on Livepeer." Holds |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | No PREV link to concepts pages. NEXT link at line 183 is to `build/video/overview` — single inline reference, no Card |
| 4. Structure | 4.4 | No dead ends | FAIL | Page ends with inline line 183 link to `build/video/overview`. No Related Pages footer, no Next Step CTA block |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. ETH-on-Arbitrum requirement for self-host is buried in body table |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Page mixes "Livepeer REST API" (a managed offering — belongs to Solutions tab) with self-hosted gateway (Gateways tab). Neither is routed OUT to its canonical tab. SCAFFOLD-NOTES classified this page REWRITE-STUB based on 7 Studio refs in source — Studio refs removed but the parallel "Livepeer REST API + SDKs" framing still implies managed-API access without naming the provider |
| 4. Structure | 4.7 | Information type per section | PASS | |
| 4. Structure | 4.8 | No duplication from adjacent pages | MIXED | Self-hosted gateway section duplicates `v2/gateways/setup/guide.mdx`. Transport protocols table duplicates `v2/developers/guides/transport/overview.mdx` |
| 4. Structure | 4.9 | Section orientation | N/A | |
| 4. Structure | 4.10 | ≥3 cross-tab graduations | FAIL | Zero cross-tab links. All outbound links stay in `v2/developers/` (build/video/overview, guides/local-development/local-gateway). No links to Gateways tab, Orchestrators tab, About tab, Solutions tab |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what are the two paths" but doesn't explain "how does Livepeer compare to ingest providers" / "what's the production maturity" |
| 4. Structure | 4.12 | Page size appropriate | PASS | 7.7 KB substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs / limitations named | MIXED | "REST API faster" vs "self-host gives control" trade-off named at line 87. No latency limitations (5–15s HLS), no production failure modes named |
| 4. Structure | 4.16 | Content-pass context completable | PASS | |
| 4. Structure | 4.17 | Code block language tags | PASS | All 4 code blocks have language tags (typescript / python / bash / bash) |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | API in prose has code/link | MIXED | See 2.D2 |
| 5. Layout | 5.1 | Correct template for pageType | MIXED | Concept template expects Related Pages footer with `<Columns cols={2}>` + `<Card>` — absent |
| 5. Layout | 5.2 | Required sections | FAIL | Missing Related Pages footer (5.16) |
| 5. Layout | 5.3 | Only approved components | PASS | StyledTable, Tabs, Tab, CustomDivider, CenteredContainer, Tip — all approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component mapping | MIXED | Tabs at line 95 for language variants — correct. StyledTable for paths — correct. But the four "workload types" at lines 51–57 are bold-led prose paragraphs — should be `<Cards>` or short-form table |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `status: current` is old schema |
| 5. Layout | 5.8 | CSS custom props only | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | No Related Pages block |
| 5. Layout | 5.12 | Section blocks from gold-standard | MIXED | StyledTable + Tabs OK; no Related Pages |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | |
| 5. Layout | 5.15 | Data imports used | FAIL | Port numbers (1935, 8935, 8937), CLI flags (`-broadcaster`, `-network`, `-rtmpAddr`, `-httpAddr`), profile bitrate values (3000000, 1000000) hardcoded. Canonical sources should be imported from `snippets/data/go-livepeer/` |
| 5. Layout | 5.16 | Related Pages OR Next Step CTA | FAIL | Neither present. Page ends with inline prose link at line 183 — not a Card block |
| 5. Layout | 5.17 | Related Pages format | N/A | Section absent |
| 5. Layout | 5.18 | Tab icon prop | FAIL | `<Tab title="TypeScript">` line 96 and `<Tab title="Python">` line 114 — both missing `icon=` props. Required per 5.18: `icon="js"` and `icon="python"` |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordion |
| 5. Layout | 5.20 | Code block metadata | MIXED | All 4 fenced blocks have `icon="terminal"` but none have `title=` attribute. line 97 TS block, line 115 Python block, line 130 bash install, line 140 livepeer CLI — all missing `title` |
| 5. Layout | 5.21 | StyledSteps not raw Steps | N/A | No procedural body |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | Tables use StyledTable | MIXED | One StyledTable line 65–85 (access paths). One raw markdown table line 161–167 (transport protocols) — fails 5.23 |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | 2 tables |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | StyledTable + Tabs (with code blocks) — borderline |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening `<CenteredContainer>` Tip line 37–39 followed by `<CustomDivider />` line 41, then intro prose. Pattern usually wants divider BEFORE intro prose; here intro prose starts line 43 AFTER divider — OK. But there's no divider between intro paragraphs (43, 45) and first H2 line 49 — correct per 5.26 rule "NO divider between intro and first H2". This one is fine |
| 5. Layout | 5.27 | Mermaid colours | N/A | No mermaid |
| 5. Layout | 5.28 | Import ordering | PASS | displays → spacing → wrappers — components grouped correctly |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW JSX flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Transport protocols table is at line 161 — late but not at end (Pricing follows). Reference rule for concept-pages is looser |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "running since 2018" line 45 — historical claim, unsourced. "5–15 seconds glass-to-glass" line 169 — typical HLS spec, no source. "explorer.livepeer.org" line 179 referenced as URL only, not linked |
| 6. Veracity | 6.2 | Code TESTED | FAIL | 4 code blocks (TS create stream, Python create stream, npm install, livepeer CLI invocation) — none labelled TESTED or NOT-TESTED |
| 6. Veracity | 6.3 | Versions pinned | FAIL | No SDK version, no go-livepeer version |
| 6. Veracity | 6.4 | Numbers real | PASS | RTMP port 1935, HTTP 8935, Gateway port 8937, profile bitrates plausible. Could be sourced |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Uses resources/glossary | MIXED | No glossary links from TicketBroker, ABR, WHIP, WHEP first uses |
| 6. Veracity | 6.8 | Source staleness | FAIL | `lastVerified: 2026-05-14` — but date is in the future relative to today 2026-05-11. Likely typo or intentional future date. Either way, doesn't satisfy staleness check semantics |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | PASS | |
| 6. Veracity | 6.11 | Glossary defs match universal-terms | PASS | |
| 6. Veracity | 6.12 | Glossary defs verified | NOT-TESTED | |
| 7. Nav & IA | 7.1 | Page in docs.json, no orphans | PASS | docs.json line 2506 |
| 7. Nav & IA | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Nav & IA | 7.3 | Portal/index routes | PASS | |
| 7. Nav & IA | 7.4 | No structural orphans | PASS | |
| 7. Nav & IA | 7.5 | Audience journey | MIXED | Developer-using-SDK and developer-self-hosting both touched but neither completed |
| 7. Nav & IA | 7.6 | ≥3 cross-tab graduations | FAIL | Zero. All outbound links inside `v2/developers/` |
| 7. Nav & IA | 7.7 | File in correct lane | PASS | |
| 7. Nav & IA | 7.8 | Naming conventions | PASS | |
| 7. Nav & IA | 7.9 | _workspace TTL | N/A | |
| 7. Nav & IA | 7.10 | No stubs in nav | PASS | 7.7 KB |
| 7. Nav & IA | 7.11 | Resources structure | N/A | |
| 7. Nav & IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | Two internal links — `local-gateway` and `build/video/overview` — both resolve |
| 8. Links | 8.2 | External links live | NOT-TESTED | `explorer.livepeer.org` referenced as plain URL text not link — neither verified live nor a clickable link |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All three imports resolve |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Governance | 9.1 | Human sign-off | N/A | |
| 9. Governance | 9.2 | Decisions in registry | N/A | |
| 9. Governance | 9.3 | Gate prereqs | MIXED | SCAFFOLD-NOTES classified REWRITE-STUB (7 Studio refs) — Studio refs are gone, page rewritten. Rescope partially complete |
| 9. Governance | 9.4 | Phase ordering | PASS | |
| 9. Governance | 9.5 | Findings before fixes | PASS | |
| 9. Governance | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Tab job-list questions | MIXED | "How do I stream live video?" — answered. "How does VOD differ from livestream?" — partially. "What's the cheapest path?" — not answered |
| 10. Completeness | 10.2 | Zero-to-hero journey | MIXED | Hand-off to `build/video/overview` exists but not as a structured Next Step |
| 10. Completeness | 10.3 | Persona paths unblocked | MIXED | |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | PASS | TS + Python covered |
| 10. Completeness | 10.7 | Persona-specific guides | N/A | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Video and livestream on Livepeer" | PASS | |
| sidebarTitle | Yes | "Video and livestream" | PASS | |
| description | Yes | "How video transcoding and livestreaming work on the Livepeer network..." | FAIL | 169 chars (>160 limit). Starts with "How" not subject |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | evaluate | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | evaluate | PASS | |
| keywords | Yes | 10-item array | PASS | All specific |
| og:image | Yes | /snippets/assets/site/og-image/en/developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Absent — `status: current` non-canonical |
| lastVerified | Yes | 2026-05-14 | FAIL | Future date (3 days ahead of today 2026-05-11) |
| status | Yes | current | FAIL | Old schema |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | — | Placement OK across body but no divider before EOF Related Pages (which is itself missing) |
| `<Tabs>` / `<Tab>` | Yes (1 block) | — | Recommended for language variants | line 95 Tabs has two Tabs missing `icon` props (5.18) |
| `<StyledSteps>` | No | — | N/A | |
| `<Card>` / `<Columns cols={2}>` | No | Required for Related Pages | Yes | **Missing entirely** at EOF |
| `<CustomCardTitle>` | No | Required inside nav Card | — | N/A |
| Fenced code with icon + title | 4 blocks have `icon`, 0 have `title` | Required | — | All 4 fail 5.20 on title attribute |
| `<Note>` / `<Tip>` / `<Warning>` | `<Tip>` line 38 | — | varies | `<Tip>` opens with historical framing; could be `<Quote>` or moved into intro |
| `<Accordion>` | No | — | Recommended for codec/profile detail, multistream destinations | Missing |
| `<StyledTable>` | Yes (1×) | Required (5.23) | — | One Styled (line 65), one raw markdown (line 161) — raw fails 5.23 |
| Custom snippet imports | Tables, Divider, Containers (CenteredContainer) | — | — | No data imports — ports / flags / bitrates hardcoded (fails 5.15) |

## Cross-page duplication and link gaps

- **OVERLAP — self-hosted gateway section**: lines 136–155 duplicate `v2/gateways/setup/guide.mdx` and `v2/gateways/setup/install.mdx`. Same CLI invocation, same port numbers, same ETH deposit explanation.
- **OVERLAP — transport protocols table**: lines 161–167 duplicate `v2/developers/guides/transport/overview.mdx` and `v2/developers/guides/transport/trickle-protocol.mdx`. Concept-level orientation should reference, not re-state.
- **OVERLAP — REST API + SDKs section**: lines 91–132 substantively duplicate `v2/developers/build/video/overview.mdx`. The Learn page should differentiate "what is this path / when do you pick it" from "how do you use it".
- **LINK GAPS**:
  - `livepeer/go-livepeer` repo unlinked anywhere on the page.
  - `@livepeer/react` package — install command shown line 131 but no link to the package README or component reference.
  - `explorer.livepeer.org` named as bare text line 179, not a link.
  - TicketBroker contract named line 151, no link to contract address or About protocol page.
  - No cross-tab graduation to Gateways tab for self-host workflow.
  - No cross-tab graduation to Orchestrators tab for "how transcoding actually happens".
  - No link to LIP-92 / probabilistic micropayments explanation (mentioned line 38 in Tip).
  - Pricing section line 173–179 — no link to canonical pricing reference (`resources/reference/pricing-rate-limits.mdx`).
- **STRANDED**: Page ends with line 183 inline prose link to `build/video/overview`. No Related Pages Card grid. No Next Step CTA. Reader leaves with one option.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | grep clean |
| US spellings | 0 | grep clean (CenteredContainer in import is component name — false-positive) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — Confirmed clean. SCAFFOLD-NOTES classified this REWRITE-STUB for 7 Studio refs in source; all removed |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 1 | line 138: "Running a go-livepeer broadcaster node gives direct network access." Uses deprecated "broadcaster" as synonym for Gateway |
| Tab missing icon prop | 2 | line 96 `<Tab title="TypeScript">`, line 114 `<Tab title="Python">` |
| Code block missing title | 4 | lines 97, 115, 130, 140 — all have `icon=` no `title=` |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Video workload types | 4 | 4 | 5 | 5 | 5 | **23** PASS |
| Access paths | 3 | 3 | 4 | 4 | 5 | **19** FAIL — generic. Better: "Hosted REST API vs self-host" or "Developer access paths" |
| REST API and SDKs | 4 | 3 | 4 | 4 | 5 | **20** PASS borderline |
| Self-hosted gateway | 5 | 4 | 5 | 5 | 5 | **24** PASS |
| Transport protocols | 5 | 4 | 5 | 5 | 5 | **24** PASS |
| Pricing | 3 | 3 | 4 | 4 | 5 | **19** FAIL — generic. Better: "Per-pixel pricing" |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 97 | typescript | ✓ terminal | ✗ | NOT-LABELLED | FAIL 5.20 missing title. FAIL 6.2 no TESTED label |
| 115 | python | ✓ terminal | ✗ | NOT-LABELLED | Same — missing title + TESTED |
| 130 | bash | ✓ terminal | ✗ | NOT-LABELLED | Single-line install command — `title="install.sh"` |
| 140 | bash | ✓ terminal | ✗ | NOT-LABELLED | Multi-line CLI invocation — `title="start-gateway.sh"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The stated outcome is "evaluate video and livestream on Livepeer". The page presents two paths (REST API + SDKs vs self-host gateway) but never gives the developer a **production-readiness signal** for either path. A developer evaluating Livepeer for a video product wants to know: is the REST API maintained? what's the SLA story? what happens when an orchestrator drops mid-stream? Page is silent on all three. The single Tip at line 38 says "video is the original use case and the most mature part of the network" — that's the only maturity signal in 7.7 KB.
- **Fix step:** After the access-paths table at line 65, add a `<Tip title="Production checklist">` with four explicit checkpoints: (1) SLA model (REST API SLAs via provider; self-host = your SLA on orchestrator failover), (2) typical glass-to-glass latency (5–15s HLS / sub-second WebRTC, with citation), (3) orchestrator failover behaviour during a stream, (4) recommended starter quickstart. Each item one sentence.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` production-readiness pattern; `v2/gateways/setup/verify/test.mdx` for the live-failover behaviour reference.

### Layer 2 — Composition
- **Gap:** Four workload types (Livestreams / VOD / Multistream / Recording) are bold-led prose paragraphs at lines 51–57 — wall of text, unscannable. The transport-protocols section at lines 161–167 uses a raw markdown table (fails 5.23). No `<Accordion>` for the per-protocol detail. No `<CardGroup>` for the four workload types. The `<Tip>` at line 38 is wrapped in `<CenteredContainer preset="readable90">` which adds visual chrome for one short callout. No Related Pages footer block. Tabs at line 95 missing `icon` props.
- **Fix step:** (a) Convert four workload types at lines 51–57 into `<CardGroup cols={2}>` of four `<Card>` (Livestream, VOD, Multistream, Recording) — each Card carries one-sentence definition + link to its build page. (b) Convert raw markdown table at lines 161–167 to `<StyledTable>` with the same five rows. (c) Add `icon="js"` and `icon="python"` to the two `<Tab>` elements at lines 96, 114. (d) Add `title=` attribute to all four fenced code blocks (`auth.ts`, `auth.py`, `install.sh`, `start-gateway.sh`). (e) Add `<Columns cols={2}>` Related Pages block at EOF after line 183 with six `<Card>` entries.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx`; component matrix `concept` row.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab graduation links. Self-hosted gateway path at lines 136–155 is the **first** content a developer reads about running a video gateway — yet there's no link to the canonical `v2/gateways/setup/guide.mdx` install workflow. `livepeer/go-livepeer` repo never linked. `@livepeer/react` package install shown without link to React-player reference. `explorer.livepeer.org` named as bare text line 179. TicketBroker contract named without link to the About protocol page that documents it.
- **Fix step:** Add upstream-repo link to the self-host opener at line 138: `Running a [go-livepeer](https://github.com/livepeer/go-livepeer) gateway node...`. Wrap `explorer.livepeer.org` line 179 as a Markdown link: `[Livepeer Explorer](https://explorer.livepeer.org)`. Add inline link to TicketBroker About page at line 151. In Related Pages footer add: `v2/gateways/setup/guide` (Gateways graduation), `v2/orchestrators/concepts/role` (Orchestrators graduation), `v2/about/governance/lip-overview` (LIP-92 / probabilistic micropayments concept), `v2/developers/resources/reference/pricing-rate-limits` (canonical pricing).
- **Source/exemplar:** `livepeer/go-livepeer` repo; About tab LIP-92 page; `v2/gateways/setup/guide.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** Five claims need sources: (a) "running since 2018" line 45 — historical claim, link to a release blog or earliest tag. (b) "5–15 seconds glass-to-glass" line 169 — typical HLS, no source. (c) Port numbers 1935, 8935, 8937 hardcoded throughout — canonical source is `go-livepeer/cmd/livepeer/starter` defaults. (d) Profile bitrate values 3000000 / 1000000 in TS code line 105–107 — example values, not real defaults, but unflagged. (e) `lastVerified: 2026-05-14` is a future date — staleness check semantics broken. Four code blocks not labelled TESTED.
- **Fix step:** Replace `lastVerified: 2026-05-14` with today's date `2026-05-11` if the page was verified today, or a past date if it was verified earlier. Add `veracityStatus: verified` after rescope confirmation. Link "running since 2018" to the earliest go-livepeer release tag. Source the latency claim to `livepeer.org/blog/low-latency-streaming` (or canonical equivalent). Add a `<Note>`-replacement-block citing port defaults from go-livepeer README. Label all four code blocks TESTED with date or NOT-TESTED with reason.
- **Source/exemplar:** `livepeer/go-livepeer` README defaults section; `livepeer/livepeer-js` SDK README for the stream-create signature.

### Layer 5 — Product-forward depth
- **Gap:** The page presents Livepeer video as if it has no competition and no failure modes. A developer evaluating against Cloudflare Stream, Mux, AWS IVS, or Vimeo OTT cannot tell from this page **when Livepeer is the right pick and when it isn't**. No mention of cost-vs-managed-provider comparison. No "when not to use Livepeer for video" section. No production-deployment checklist. The historical framing ("running since 2018") is buried in a Tip rather than serving as the maturity signal it could be. The `<Tip>` at line 38 also wraps the protocol's economic model (probabilistic micropayments) into a header callout — a developer evaluating a video API does not need micropayment mechanics in the first 5 seconds.
- **Fix step:** Add a top-level `<Card>` Header CTA: `<Card icon="circle-check" title="Production-ready since 2018">` with two bullets: "Mature transcoding pipeline. RTMP-to-ABR-HLS at scale. WebRTC sub-second playback in beta." Move the probabilistic-micropayments line out of the Tip and into the Pricing section where economic mechanics belong. Add a "When Livepeer video fits" section before Access Paths: 3 bullets ("If you need RTMP ingest with multi-bitrate HLS at lower per-pixel cost than managed providers"; "If you need WebRTC playback latency under 1s for live applications"; "If decentralised orchestrator routing is a strategic requirement"). Add a "When to look elsewhere" `<Accordion title="When Livepeer video is not the fit" icon="circle-xmark">` with 2 bullets (sub-50ms ingest, sub-200ms LL-HLS for finance/gaming use cases).
- **Source/exemplar:** `.claude/references/layout/exemplars.md` decision-page pattern; `v2/about/_workspace/reviews2/network/architecture.md` for the decision-block exemplar.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 1 / HIGH 9 / MEDIUM 8 / INFO 3
**Critical findings (1–5 max)**:
1. **Deprecated term in body prose (2.16, 2.22 — CRITICAL)**: line 138 uses "broadcaster" as a synonym for Gateway in prose. CLAUDE.md hard boundary lists "broadcaster" as banned.
2. **Missing Related Pages footer + zero cross-tab graduations (5.16, 4.10, 7.6 — HIGH)**: page ends with one inline prose link. No Card grid, no cross-tab graduation.
3. **Tabs missing `icon` props (5.18 — HIGH)**: both `<Tab>` elements at lines 96, 114 missing required `icon=` prop.
4. **All 4 code blocks missing `title` attribute (5.20 — HIGH)**: lines 97, 115, 130, 140 — every fenced block needs `icon + title`. Has icon, missing title. None labelled TESTED (6.2).
5. **Old-schema frontmatter + future-dated lastVerified (1.8, 6.8 — HIGH)**: `status: current` (non-canonical); `lastVerified: 2026-05-14` is 3 days in the future.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace "broadcaster" in prose at line 138 with "Gateway": "Running a go-livepeer Gateway node gives direct network access." Keep the `-broadcaster` CLI flag in code block (literal flag, not deprecated synonym) | line 138 | CRITICAL | S | check 2.16; CLAUDE.md domain terms |
| 2 | Add `<Columns cols={2}>` Related Pages block at EOF with six `<Card>` entries using `<CustomCardTitle horizontal>`: Video Quickstart, Self-host Gateway (cross-tab), Orchestrators concepts (cross-tab), LIP-92 protocol (cross-tab), Pricing reference, Local-dev gateway | EOF after line 183 | HIGH | M | check 5.16 + 5.17 |
| 3 | Add `icon="js"` to `<Tab title="TypeScript">` line 96 and `icon="python"` to `<Tab title="Python">` line 114 | 96, 114 | HIGH | S | check 5.18 |
| 4 | Add `title=` attribute to all 4 code blocks: line 97 `title="stream-create.ts"`, line 115 `title="stream_create.py"`, line 130 `title="install.sh"`, line 140 `title="start-gateway.sh"` | 97, 115, 130, 140 | HIGH | S | check 5.20 |
| 5 | Add TESTED label and date to all 4 code blocks OR NOT-TESTED with reason | 97, 115, 130, 140 | HIGH | S | check 6.2 |
| 6 | Replace `status: current` with `veracityStatus: verified` | line 29 | HIGH | S | check 1.8 |
| 7 | Fix `lastVerified` from future date `2026-05-14` to current date `2026-05-11` or earlier actual verification date | line 30 | HIGH | S | check 6.8 |
| 8 | Convert raw markdown table at lines 161–167 to `<StyledTable>` | 161–167 | HIGH | M | check 5.23 |
| 9 | Trim description from 169 → ≤160 chars, lead with subject: "Livepeer GPU-backed video transcoding and livestreaming via REST API, SDKs, and self-host go-livepeer gateways." | lines 4–7 | HIGH | S | check 1.11 |
| 10 | Convert four workload-type paragraphs (lines 51–57) to `<CardGroup cols={2}>` of four `<Card>` with one-sentence definition + link to build page | 51–57 | MEDIUM | M | check 5.5 |
| 11 | Wrap `explorer.livepeer.org` line 179 as a Markdown link `[Livepeer Explorer](https://explorer.livepeer.org)` | line 179 | MEDIUM | S | check 8.1 |
| 12 | Hyperlink `go-livepeer` first mention at line 138: `[go-livepeer](https://github.com/livepeer/go-livepeer)` | line 138 | MEDIUM | S | check 4.10 |
| 13 | Add inline link to TicketBroker About page at line 151 | line 151 | MEDIUM | S | check 6.7 |
| 14 | Rename heading "Access paths" → "Hosted REST API vs self-host" (or similar) — improve 19/25 to 22+ | line 61 | MEDIUM | S | check 3.1 |
| 15 | Rename heading "Pricing" → "Per-pixel pricing" | line 173 | MEDIUM | S | check 3.1 |
| 16 | Add `<Tip title="Production checklist">` after line 87 with four checkpoints (SLA, latency, failover, recommended quickstart) | after line 87 | MEDIUM | M | Layer 1 fix |
| 17 | Add maturity / when-to-use / when-not-to-use blocks (Layer 5 fix) | after line 43 | MEDIUM | L | Layer 5 |
| 18 | Define ABR, WHIP, WHEP at first use (or link to glossary) | lines 38, 128, 165 | INFO | S | check 2.21 |
| 19 | Move probabilistic-micropayments mention from `<Tip>` line 38 into Pricing section | lines 38, 173 | INFO | M | Layer 5 |
